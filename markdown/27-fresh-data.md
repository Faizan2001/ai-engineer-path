# Fresh Data

*Section 5: Make It Sturdy · Lesson 27 of 30 · about 3 hours*

## Introduction

Docs change. Pages get edited, and some get deleted.

If your app doesn't keep up, it will quote pages that no longer exist. Let's fix that.

## Lesson overview

By the end of this lesson, you should be able to:

- Keep a list of every source page.
- Handle edits and deletions each time you sync.
- Clear saved answers that are out of date.

## Assignment

1. Each time you sync, save a list of every source page with its path and content hash.
2. Compare it with the previous list: re-index edited pages, add new ones, and remove deleted pages together with all their chunks.
3. Clear any cached (saved) answers that used a changed or deleted page.
4. Test it: in a test copy of your data, delete 3 pages and edit 2. Sync, then ask about them in a new chat and in an existing one.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [Why can't content hashes alone tell you a page was deleted?](14-data-ingestion-and-orchestration.md)
- [What must happen to the chunks of a deleted page?](27-fresh-data.md)

---

[← Previous: Login and Access Rules](26-login-and-access-rules.md) · [Course map](README.md) · [Next lesson: Red-Team Your App →](28-red-team-your-app.md)
