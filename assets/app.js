/* AI Engineer Path: renders the course from data/course.js.
   Progress: saved to your Claude account when this runs as a Claude artifact,
   otherwise saved in this browser (localStorage). Navigation works either way. */
(function () {
  "use strict";
  var C = window.COURSE;
  var view = document.getElementById("view");
  if (!C || !C.sections) {
    view.textContent = "The course data didn't load. Make sure data/course.js sits next to index.html.";
    return;
  }

  // ---------- course model
  var LESSONS = [], BY = {}, SECTIONS = [];
  C.sections.forEach(function (s, si) {
    var sec = { n: si + 1, title: s.title, weeks: s.weeks, description: s.description || "", slugs: [], weight: span(s.weeks) };
    s.lessons.forEach(function (l) {
      var x = {};
      for (var k in l) if (Object.prototype.hasOwnProperty.call(l, k)) x[k] = l[k];
      x.section = sec; x.i = LESSONS.length; x.n = LESSONS.length + 1;
      LESSONS.push(x); BY[x.slug] = x; sec.slugs.push(x.slug);
    });
    SECTIONS.push(sec);
  });
  function span(w) { var m = String(w).match(/\d+/g) || []; return m.length >= 2 ? (+m[m.length - 1]) - (+m[0]) + 1 : 1; }
  function fullTitle(l) { return (l.kind === "project" ? "Project: " : "") + l.title; }

  // ---------- inline formatting: escape first, then `code`, **bold**, [label](https://... or #slug)
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(text) {
    var s = esc(text);
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\[([^\]]+)\]\(((?:https:\/\/|#)[^)\s]+)\)/g, function (m, label, url) {
      return url.charAt(0) === "#" ? '<a href="' + url + '">' + label + "</a>"
        : '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + label + "</a>";
    });
    return s;
  }
  function href(url) {
    return url.charAt(0) === "#" ? ' href="' + esc(url) + '"' : ' href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"';
  }

  // ---------- progress storage
  var KEY = "ai-engineer-path:progress:v1";
  var state = { done: new Set(), last: "" };
  var mode = "local", localOk = true, account = null, saving = false, pending = false, migrated = false;
  function record() {
    return { v: 1, done: Array.from(state.done).filter(function (s) { return BY[s]; }), last: BY[state.last] ? state.last : "" };
  }
  function apply(d) {
    if (!d || d.v !== 1) return;
    state.done = new Set((Array.isArray(d.done) ? d.done : []).filter(function (s) { return BY[s]; }));
    state.last = BY[d.last] ? d.last : "";
  }
  function loadLocal() { try { var raw = localStorage.getItem(KEY); if (raw) apply(JSON.parse(raw)); } catch (e) { localOk = false; } }
  function saveLocal() { try { localStorage.setItem(KEY, JSON.stringify(record())); localOk = true; } catch (e) { localOk = false; } }
  function save() {
    saveLocal();
    if (!account) { chip(); return; }
    if (saving) { pending = true; return; }
    saving = true;
    account.ref.set(record())
      .catch(function () { account = null; mode = "local"; })
      .then(function () { saving = false; chip(); if (pending) { pending = false; save(); } });
  }
  function chip() {
    var el = document.getElementById("save-chip");
    if (!el) return;
    if (mode === "account") { el.textContent = "Saved to your account"; el.className = "chip acct"; }
    else if (localOk) { el.textContent = "Saved in this browser"; el.className = "chip"; }
    else { el.textContent = "Progress can't be saved here"; el.className = "chip"; }
  }
  function connectAccount() {
    var c = window.claude;
    if (!c || typeof c.use !== "function") return;
    Promise.all([c.use("user"), c.use("db")]).then(function (r) {
      var user = r[0], db = r[1];
      if (!user || !db) return null;
      return user.id().then(function (uid) {
        if (!uid) return;
        account = { ref: db.doc("data/users/" + uid + "/progress") };
        account.ref.onSnapshot(function (snap) {
          mode = "account";
          if (snap.exists) {
            if (!snap.metadata.hasPendingWrites) { apply(snap.data()); saveLocal(); render(false); }
          } else if (!migrated && (state.done.size || state.last)) {
            migrated = true; save();
          }
          chip();
        }, function () { account = null; mode = "local"; chip(); });
      });
    }).catch(function () { account = null; mode = "local"; chip(); });
  }

  // ---------- shared bits
  var CHECK_SVG = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function updateTopProgress() {
    var n = state.done.size, pct = Math.round(100 * n / LESSONS.length);
    document.getElementById("prog-text").textContent = n + " of " + LESSONS.length + " done";
    document.getElementById("prog-fill").style.width = pct + "%";
    return pct;
  }
  function resumeTarget() {
    if (BY[state.last] && !state.done.has(state.last)) return BY[state.last];
    var from = BY[state.last] ? BY[state.last].i + 1 : 0;
    for (var i = from; i < LESSONS.length; i++) if (!state.done.has(LESSONS[i].slug)) return LESSONS[i];
    for (var j = 0; j < LESSONS.length; j++) if (!state.done.has(LESSONS[j].slug)) return LESSONS[j];
    return null;
  }
  function ul(items, cls) {
    if (!items || !items.length) return "";
    return "<ul" + (cls ? ' class="' + cls + '"' : "") + ">" + items.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
  }

  // ---------- course page
  function renderHome() {
    var pct = updateTopProgress(), t = resumeTarget();
    var started = state.done.size > 0 || !!state.last;
    var R = 64, CIRC = 2 * Math.PI * R;
    var cta = t
      ? '<a class="btn gold" href="#' + t.slug + '">' + (started ? "Continue: " : "Start the path: ") + esc(fullTitle(t)) + "</a>"
      : '<span class="btn is-done">Path complete. Plan your Campus Assistant next.</span>';
    var curSec = t ? t.section.n : 0;
    var timeline = SECTIONS.map(function (s) {
      return '<div class="' + (s.n === curSec ? "cur" : "") + '" style="flex:' + s.weight + '" title="' + esc(s.title + ", " + s.weeks) + '"><span>' + esc(s.title) + "</span></div>";
    }).join("");
    var sections = SECTIONS.map(function (s) {
      var doneN = s.slugs.filter(function (x) { return state.done.has(x); }).length;
      var rows = s.slugs.map(function (slug) {
        var l = BY[slug], on = state.done.has(slug);
        return '<li><a href="#' + slug + '"><span class="check' + (on ? " on" : "") + '" role="img" aria-label="' + (on ? "Completed" : "Not completed") + '">' + CHECK_SVG +
          '</span><span class="l-title">' + (l.kind === "project" ? '<span class="p">Project: </span>' : "") + esc(l.title) +
          '</span><span class="l-time">' + esc(l.time) + "</span></a></li>";
      }).join("");
      return '<section class="card section-card"><div class="section-head"><div class="section-top"><span class="eyebrow">Section ' + s.n + " · " + esc(s.weeks) +
        '</span><span class="count">' + doneN + " / " + s.slugs.length + " complete</span></div><h2>" + esc(s.title) + "</h2><p>" + fmt(s.description) +
        '</p></div><ol class="lesson-list">' + rows + "</ol></section>";
    }).join("");
    view.innerHTML =
      '<div class="hero-band"><div class="wrap hero"><div class="hero-text"><span class="eyebrow">Learning path · about 30 weeks · 9 hours a week</span>' +
      "<h1>" + esc(C.title) + '</h1><p class="lede">' + fmt(C.tagline) + '</p><div class="hero-actions">' + cta + "</div>" +
      '<p class="resume-note">' + state.done.size + " of " + LESSONS.length + " lessons complete</p></div>" +
      '<div class="ring" role="img" aria-label="' + pct + '% complete"><svg viewBox="0 0 150 150"><circle class="track" cx="75" cy="75" r="' + R + '"/>' +
      '<circle class="fill" cx="75" cy="75" r="' + R + '" stroke-dasharray="' + CIRC.toFixed(1) + '" stroke-dashoffset="' + (CIRC * (1 - pct / 100)).toFixed(1) + '"/></svg>' +
      '<div class="ring-label"><strong>' + pct + "%</strong><span>complete</span></div></div></div></div>" +
      '<div class="wrap page"><section class="card" id="how"><h2>How this path works</h2>' + C.intro.map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") +
      '<ul class="how">' + C.how.map(function (p) { return "<li>" + fmt(p) + "</li>"; }).join("") + "</ul>" +
      '<div class="timeline" role="img" aria-label="Timeline of the 6 sections across 30 weeks">' + timeline + '</div><div class="tl-key"><span>Week 1</span><span>Week 10</span><span>Week 20</span><span>Week 30</span></div></section>' +
      sections + "</div>";
  }

  // ---------- lesson page
  function renderLesson(l, navigated) {
    updateTopProgress();
    if (navigated && state.last !== l.slug) { state.last = l.slug; save(); }
    var on = state.done.has(l.slug), isP = l.kind === "project";
    var prev = LESSONS[l.i - 1], next = LESSONS[l.i + 1];
    var parts = [], toc = [];
    function add(id, title, body) { parts.push('<section id="sec-' + id + '"><h2>' + title + "</h2>" + body + "</section>"); toc.push([id, title]); }

    add("introduction", "Introduction", (l.intro || []).map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join(""));
    if (l.overview && l.overview.length) add("overview", "Lesson overview", '<p class="lead-line">By the end of this lesson, you should be able to:</p>' + ul(l.overview.map(fmt)));
    if (l.before && l.before.length) add("before", "Before you start", ul(l.before.map(fmt)));
    var k = 1;
    var assign = (l.assignment || []).map(function (g) {
      var html = (g.day ? "<h3>" + esc(g.day) + "</h3>" : "") + '<ol start="' + k + '">' + g.steps.map(function (s) { return "<li>" + fmt(s) + "</li>"; }).join("") + "</ol>";
      k += g.steps.length;
      return html;
    }).join("");
    add("assignment", "Assignment", '<div class="panel">' + assign + "</div>");
    if (l.done && l.done.length) add("done", "You're done when", ul(l.done.map(fmt), "done-list"));
    if (l.extra_credit && l.extra_credit.length) add("extra-credit", "Extra credit", ul(l.extra_credit.map(fmt)));
    if (l.check && l.check.length) add("check", "Knowledge check",
      '<p class="lead-line">Use these questions to check what you learned. If one stumps you, follow its link and review. You don\'t need to memorize anything.</p>' +
      ul(l.check.map(function (c) { return "<a" + href(c.link) + ">" + fmt(c.q) + "</a>"; })));
    if (l.extra && l.extra.length) add("extra", l.slug === "whats-next" ? "Optional deep dives" : "Additional resources",
      '<p class="lead-line">These are optional. Use them if you want to go further.</p>' + ul(l.extra.map(fmt)));

    var tocButtons = toc.map(function (t) { return '<li><button type="button" data-scroll="sec-' + t[0] + '">' + esc(t[1]) + "</button></li>"; }).join("");
    var nextBtn = next
      ? '<a class="btn dark next" href="#' + next.slug + '">Next lesson →</a>'
      : '<a class="btn dark next" href="#home">Back to the course →</a>';
    view.innerHTML =
      '<div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="#home">Course</a> › Section ' + l.section.n + ": " + esc(l.section.title) + "</nav>" +
      '<div class="lesson-head"><h1 tabindex="-1">' + (isP ? '<span class="badge">Project</span>' : "") + esc(l.title) + "</h1>" +
      '<p class="lesson-meta">Lesson ' + l.n + " of " + LESSONS.length + " · " + esc(l.time) + "</p></div>" +
      '<div class="lesson-layout"><div class="content">' +
      '<details class="toc-mobile"><summary>Lesson contents</summary><ul>' + tocButtons + "</ul></details>" +
      parts.join("") +
      '<div class="lesson-actions"><div class="action-row"><a class="btn" href="#home">View course</a>' +
      '<button type="button" id="complete-btn" class="btn ' + (on ? "is-done" : "gold") + '" aria-pressed="' + on + '">' + (on ? "✓ Completed (click to undo)" : "Mark complete") + "</button>" +
      nextBtn + "</div>" +
      (next ? '<p class="next-title">Up next: ' + esc(fullTitle(next)) + "</p>" : "") +
      (prev ? '<a class="prev-link" href="#' + prev.slug + '">← Previous: ' + esc(fullTitle(prev)) + "</a>" : "") +
      "</div></div>" +
      '<aside class="toc" aria-label="Lesson contents"><span class="toc-title">Lesson contents</span><ul>' + tocButtons + "</ul></aside></div></div>";
  }

  // ---------- routing and events
  function render(navigated) {
    var l = BY[(location.hash || "").replace(/^#/, "")];
    if (l) renderLesson(l, !!navigated); else renderHome();
    chip();
  }
  function route() {
    render(true);
    window.scrollTo(0, 0);
    var h = view.querySelector(".lesson-head h1");
    if (h) { try { h.focus({ preventScroll: true }); } catch (e) {} }
  }
  view.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("[data-scroll], #complete-btn") : null;
    if (!t) return;
    if (t.id === "complete-btn") {
      var l = BY[(location.hash || "").replace(/^#/, "")];
      if (!l) return;
      if (state.done.has(l.slug)) state.done.delete(l.slug); else state.done.add(l.slug);
      save(); render(false);
      var btn = document.getElementById("complete-btn"); if (btn) btn.focus();
      return;
    }
    var target = document.getElementById(t.getAttribute("data-scroll"));
    if (target) {
      var smooth = window.matchMedia && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
    }
  });
  window.addEventListener("hashchange", route);

  loadLocal();
  render(true);
  connectAccount();
})();
