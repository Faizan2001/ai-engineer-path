"""Export every lesson in data/course.js as Markdown files in markdown/.

Run from the project folder:  python3 tools/export_markdown.py
The web page doesn't need this; it's for reading lessons in a Markdown viewer or on GitHub.
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "data", "course.js")
OUT = os.path.join(ROOT, "markdown")


def load_course(path):
    text = open(path, encoding="utf-8").read()
    start = text.index("window.COURSE")
    body = text[text.index("=", start) + 1:].strip()
    if body.endswith(";"):
        body = body[:-1]
    return json.loads(body)


course = load_course(SRC)
lessons = []
for si, sec in enumerate(course["sections"], 1):
    for l in sec["lessons"]:
        lessons.append(dict(l, section_n=si, section_title=sec["title"]))
for i, l in enumerate(lessons, 1):
    l["n"], l["file"] = i, f"{i:02d}-{l['slug']}.md"
files = {l["slug"]: l["file"] for l in lessons}
TOTAL = len(lessons)
LINK = re.compile(r"\[([^\]]+)\]\((#[^)\s]+)\)")


def md(text):
    def internal(m):
        target = m.group(2)[1:]
        return f"[{m.group(1)}]({'README.md' if target == 'home' else files[target]})"
    return LINK.sub(internal, text)


def link_target(url):
    if url.startswith("#"):
        t = url[1:]
        return "README.md" if t == "home" else files[t]
    return url


def full_title(l):
    return ("Project: " if l["kind"] == "project" else "") + l["title"]


os.makedirs(OUT, exist_ok=True)
for idx, l in enumerate(lessons):
    prev = lessons[idx - 1] if idx else None
    nxt = lessons[idx + 1] if idx + 1 < TOTAL else None
    out = [f"# {full_title(l)}", "", f"*Section {l['section_n']}: {l['section_title']} · Lesson {l['n']} of {TOTAL} · {l['time']}*", "", "## Introduction", ""]
    for p in l.get("intro", []):
        out += [md(p), ""]
    if l.get("overview"):
        out += ["## Lesson overview", "", "By the end of this lesson, you should be able to:", ""] + [f"- {md(p)}" for p in l["overview"]] + [""]
    if l.get("before"):
        out += ["## Before you start", ""] + [f"- {md(p)}" for p in l["before"]] + [""]
    out += ["## Assignment", ""]
    k = 1
    for g in l.get("assignment", []):
        if g.get("day"):
            out += [f"### {g['day']}", ""]
        for s in g["steps"]:
            out.append(f"{k}. {md(s)}")
            k += 1
        out.append("")
    if l.get("done"):
        out += ["## You're done when", ""] + [f"- [ ] {md(p)}" for p in l["done"]] + [""]
    if l.get("extra_credit"):
        out += ["## Extra credit", ""] + [f"- {md(p)}" for p in l["extra_credit"]] + [""]
    if l.get("check"):
        out += ["## Knowledge check", "", "Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.", ""]
        out += [f"- [{c['q']}]({link_target(c['link'])})" for c in l["check"]] + [""]
    if l.get("extra"):
        head = "Optional deep dives" if l["slug"] == "whats-next" else "Additional resources"
        out += [f"## {head}", "", "These are optional. Use them if you want to go further.", ""] + [f"- {md(p)}" for p in l["extra"]] + [""]
    nav = [f"[← Previous: {full_title(prev)}]({prev['file']})" if prev else "[← Course map](README.md)", "[Course map](README.md)",
           f"[Next lesson: {full_title(nxt)} →]({nxt['file']})" if nxt else "[Back to the course map →](README.md)"]
    out += ["---", "", " · ".join(nav), ""]
    with open(os.path.join(OUT, l["file"]), "w", encoding="utf-8") as f:
        f.write("\n".join(out))

readme = [f"# {course['title']} (Markdown version)", "", f"*{md(course['tagline'])}*", "",
          "This folder has every lesson as a Markdown file. For the full clickable course with progress tracking, open `index.html` in the folder above.", ""]
for si, sec in enumerate(course["sections"], 1):
    readme += [f"## Section {si}: {sec['title']} ({sec['weeks']})", "", md(sec.get("description", "")), ""]
    for l in [x for x in lessons if x["section_n"] == si]:
        readme.append(f"{l['n']}. " + ("**Project:** " if l["kind"] == "project" else "") + f"[{l['title']}]({l['file']}) · {l['time']}")
    readme.append("")
readme += ["---", "", f"**Start here →** [{lessons[0]['title']}]({lessons[0]['file']})", "", md(course["disclaimer"]), ""]
with open(os.path.join(OUT, "README.md"), "w", encoding="utf-8") as f:
    f.write("\n".join(readme))
print(f"Exported {TOTAL} lessons to {OUT}")
