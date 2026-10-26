# Fresh Data

*Section 5: Make It Sturdy · Lesson 29 of 32 · about 6 hours*

**Before you start, check that** signed-in users get their group from your `user_groups` table, and a user with no group gets nothing.

## Introduction

> **An assistant quoting a deleted page is a tour guide pointing at a building that's gone.**

Docs change. Pages get edited, and some get deleted.

If your app doesn't keep up, it will quote pages that no longer exist. You already save a manifest of every page; now you'll use it.

**True story (2025): private code that wouldn't stay deleted.** Researchers found Microsoft Copilot could still surface code from thousands of GitHub repositories that had been public and were later made private, through a search engine's cache. [Source](https://techcrunch.com/2025/02/26/thousands-of-exposed-github-repositories-now-private-can-still-be-accessed-through-copilot)

**What you'll do differently:** push every deletion through every index and cache, then test that removed pages never come back.

**After this, you can** make deleted content disappear from answers, and prove it.

**The skill that lasts:** taking responsibility for data from start to end.

## Lesson overview

By the end of this lesson, you should be able to:

- Compare two manifests to find added, edited and deleted pages.
- Remove deleted pages completely.
- Test that deleted pages never come back in answers.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** You delete a page from your docs. Will Ask MDN stop quoting it on its own?

## Assignment

### Day 1 · about 90 min

1. Before rereading, sketch your ingestion process from memory. Compare with [Data Ingestion](15-data-ingestion.md), then extend it: compare manifests, re-index edited pages, add new ones, and delete removed pages and chunks. Publish a new `corpus_version` only after the sync succeeds.

### Day 2 · about 90 min

2. Make a test copy of your data: delete 3 pages and edit 2, then sync.
3. Store the corpus version with each conversation. Choose a simple policy: if it changes, expire that conversation's pending approvals and start a fresh, server-owned agent thread before the next answer. Do not copy old retrieved chunks or assistant answers into the new prompt. Tell the user that the sources changed. Check thread ownership before inspecting or resetting any state. This avoids building a selective memory-invalidation system now.

### Day 3 · about 90 min

4. Ask about the deleted pages in a new chat and one started before the sync. Inspect the actual model input: no removed chunks or old answers should be carried into it. Validate every returned citation against the current, permitted source records. Reject stale IDs. Test an edit as well as a deletion, and prove an old pending approval cannot resume. This prevents reuse in new answers; it does not erase a transcript someone has already read or copied.

### Day 4 · about 90 min

5. Finish the edit/deletion and stale-approval tests. Record one limitation of this conservative reset policy, such as losing conversational context when unrelated pages change.

### Memory check · 10 min

6. Close this page. In your log, answer from memory, then check:
   - Why can't content hashes alone tell you a page was deleted? ([where to check](15-data-ingestion.md))
   - Where does each request's group come from? ([where to check](28-login.md))
7. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Login](28-login.md) · [Course map](README.md) · [Next lesson: Red-Team Your App →](30-red-team-your-app.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
