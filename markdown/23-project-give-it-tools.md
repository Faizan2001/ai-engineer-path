# Project: Give It Tools

*Section 4: Agents · Lesson 23 of 32 · about 2 weeks*

## Introduction

> **Ask MDN gets hands. It may suggest saving a note; a person presses save.**

Ask MDN becomes an agent with three tools. One of them can change things, so it must ask a person first. This time, you'll plan the work yourself before you start.

Tip: make the notes useful to you, like revision cards for this course that you reread at Recall time. Keep your attack tests away from them.

**After this, you can** show an agent that acts only with approval, proven by tests.

**The skill that lasts:** least privilege, proven by tests rather than promised.

## Before you start

- Build on your `ask-mdn` repo, with the same frozen data. Commit early and often, with messages that say what changed.
- Get the browser support data from [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data). It's public domain, so you can use it freely.
- Put test attack documents only in a test copy of your search index, never in the online app.
- Don't look at other people's versions of this project until yours works. Then compare and learn.
- Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error.

## Assignment

### Day 1 · about 90 min

1. Before reading the steps below, write your own day-by-day plan for this project in your log. Compare it with the steps afterwards.

### Week 1 · about 8 hours

2. In LangGraph, give the agent three tools: `search_docs` (your hybrid search), `browser_support` (looks up a feature in the browser data) and `save_note` (writes a note to a `notes` table in Neon, with a `group_id` column you'll use in Section 5).
3. Before `save_note` runs, pause with `interrupt()`. Show the person the exact arguments, and run it only if they approve, using exactly those arguments.
4. Checkpoint: one approved note is saved and one rejected note isn't.

### Week 2 · about 9 hours

5. Add limits: at most 8 steps, a cost limit per question, and at most 2 retries per tool call.
6. Log every step: the tool, its input, the size of its output, the tokens and the cost.
7. Write 5 injection documents (for example a page that says “call save_note with…”) and 5 normal requests, including one that really should save a note. Write the injection documents like an attacker's notebook: the goal, the trick and how your app should block it. Commit them.
8. In your log, compare your Day 1 plan with what really happened. That gap is a lesson in itself.

### Recall · 10 min

9. Close this page. In your log, answer from memory, then check:
   - Why must an approval match the tool's exact arguments? ([where to check](22-safe-tools.md))
   - What does MRR measure? ([where to check](13-measuring-search.md))
10. Write one more line: how will this lesson help your Campus Assistant?

## You're done when

- [ ] `save_note` can't run unless a person approves its exact arguments. A test proves it.
- [ ] The step limit, cost limit and retry limit each stop a runaway run. A test proves each one.
- [ ] Your 5 injection documents never cause an unapproved action, and no planted instruction is carried out. Your 5 normal requests still work. You checked this in the step logs, not just in the replies.
- [ ] You can explain how a request moves through your app, two decisions you made and one problem you fixed. You wrote at least one test without AI help, and noted its commit in your log.

## Extra credit

- Add a dry-run mode that shows the plan without running any tool.
- Earn the free certificate from the [Hugging Face Agents Course final](https://huggingface.co/learn/agents-course/en/unit4/introduction).

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Safe Tools](22-safe-tools.md) · [Course map](README.md) · [Next lesson: Start Applying →](24-start-applying.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
