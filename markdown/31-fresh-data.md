# Fresh Data

*Section 5: Make It Sturdy · Lesson 31 of 42 · about 6 hours*

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

> **Why:** Extend ingestion to handle edited and deleted pages.
>
> **Don't skip:** Deleted rules must stop being quoted.

1. Sketch your ingestion process from memory, then compare it with [Data Ingestion](15-data-ingestion.md).
2. Extend it: compare the old and new manifests, re-index edited pages, add new pages, and delete removed pages and their chunks. Publish a new `corpus_version` only after the sync succeeds.

### Day 2 · about 90 min

> **Why:** Decide what happens to an open conversation when the docs change.
>
> **Don't skip:** Without it, old answers leak into new ones.

3. Make a test copy of your data: delete 3 pages and edit 2, then sync.
4. Store the corpus version with each conversation. Pick a simple policy: if the version changes, expire that conversation's pending approvals and start a fresh, server-owned agent thread before the next answer. Don't copy old retrieved chunks or assistant answers into the new prompt, and tell the user that the sources changed.
5. Check thread ownership before you look at or reset any state.

### Day 3 · about 90 min

> **Why:** Prove deleted pages never come back in answers or citations.
>
> **Don't skip:** The project checks exactly this.

6. Ask about the deleted pages in a new chat and in a chat started before the sync. Look at the actual model input: no removed chunks or old answers should be in it.
7. Check every returned citation against the current, allowed source records, and reject stale IDs. Test an edit as well as a deletion, and prove that an old pending approval can't resume.
8. This stops old content from reaching new answers. It doesn't erase a transcript someone has already read or copied.

### Day 4 · about 90 min

> **Why:** Finish the tests, and write down what this simple policy costs you.
>
> **Don't skip:** These tests are project evidence.

9. Finish the edit, deletion and stale-approval tests. Write down one weakness of this cautious reset policy, for example losing the conversation's context when unrelated pages change.

### Memory check · 10 min

10. Close this page. In your log, answer from memory, then check:
   - Why can't content hashes alone tell you a page was deleted? ([where to check](15-data-ingestion.md))
   - Where does each request's group come from? ([where to check](30-login.md))
11. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Login](30-login.md) · [Course map](README.md) · [Next lesson: Red-Team Your App →](32-red-team-your-app.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
