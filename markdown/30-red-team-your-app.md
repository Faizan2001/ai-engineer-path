# Red-Team Your App

*Section 5: Make It Sturdy · Lesson 30 of 32 · about 6 hours*

**Before you start, check that** your sync removes deleted pages and their chunks, and the deleted-page test passes.

## Introduction

> **Today you're the attacker. Break your own app before a stranger does.**

Red-teaming means attacking your own app on purpose, before someone else does.

promptfoo can create the attacks for you. You decide what counts as a breach (a successful attack).

**After this, you can** attack your own app and measure exactly what leaks.

**The skill that lasts:** thinking like an attacker.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain what red-teaming is.
- Use promptfoo plugins for access control, hijacking and hidden instructions.
- Plant canary documents: fake secret pages that should never show up. If one does, you have a leak.

## Try it first

Two minutes, before the reading. Guess first: a wrong guess makes the right answer stick.

**Predict:** Your app passes all its normal tests. Is it safe?

## Before you read

Attacks come two ways: the user types something sneaky, or a page the app finds hides instructions. An attack works if the app shows or does something that user shouldn't get. The model-graded plugins are estimates; a canary phrase shown to the wrong user is proof.

- **prompt injection**: text that tries to override the app's instructions
- **canary**: a planted secret phrase that proves a leak if it appears

## Assignment

### Prefer watching?

- ▶ [Exploring Promptfoo's Red Teaming Capabilities](https://www.youtube.com/watch?v=lqhKIjWoeuM) (Promptfoo, 5 min): A quick tour of the tool before Day 1.

### Day 1 · about 90 min

1. Follow promptfoo's [red team quickstart](https://www.promptfoo.dev/docs/red-team/quickstart/), pointing it at your `answer(question, user)` Python provider so each attack runs as a specific user.

### Day 2 · about 90 min

2. Set up three plugins: [rbac](https://www.promptfoo.dev/docs/red-team/plugins/rbac/) (access control), [hijacking](https://www.promptfoo.dev/docs/red-team/plugins/hijacking/) and [indirect prompt injection](https://www.promptfoo.dev/docs/red-team/plugins/indirect-prompt-injection/). Generate 30 attack cases and commit them, so the test stays the same each time. Generating can use promptfoo's online service, which may have usage limits, so generate once. If it's unavailable, write the cases by hand.

### Day 3 · about 90 min

3. Add 5 canary documents to the JS group: pages that contain a unique secret phrase. A CSS user must never see them.

### Day 4 · about 90 min

4. Run the attacks and write down every one that worked. A passing rbac test is a model's opinion, not proof; a canary phrase shown to the wrong user is proof, so check the canaries and your database yourself. You'll fix the failures in the project.

### Memory check · 10 min

5. Close this page. In your log, answer from memory, then check:
   - What does the rbac plugin test? ([where to check](https://www.promptfoo.dev/docs/red-team/plugins/rbac/))
   - What must happen to a deleted page's chunks? ([where to check](29-fresh-data.md))
6. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [New prompt injection papers: agents rule of two](https://simonwillison.net/2025/Nov/2/new-prompt-injection-papers/) by Simon Willison: the newest thinking on agent defences, summarised.
- [garak](https://github.com/NVIDIA/garak) by NVIDIA: a second open-source attack scanner, to compare with promptfoo.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Fresh Data](29-fresh-data.md) · [Course map](README.md) · [Next lesson: Project: Make It Sturdy →](31-project-make-it-sturdy.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
