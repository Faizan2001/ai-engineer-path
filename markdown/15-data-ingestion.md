# Data Ingestion

*Section 3: RAG with LLM Zoomcamp · Lesson 15 of 41 · about 4.5 hours*

**Before you start, check that** Ask MDN v0.4 combines both searches and says “I don't know” when it can't find supporting evidence, and you have counted both its false answers and its unnecessary refusals.

## Introduction

> **A good ingestion script is safe to run twice: run it ten times and you still get the same data.**

Ingestion means loading your data into the app. Real data changes, so a good ingestion script is safe to run again and again without creating duplicates.

You'll write Ask MDN's ingestion script now.

**True story (2024): glue on pizza.** Google's AI search answers suggested putting glue on pizza, built from a joke forum post. Google then limited which sources those answers could use. [Source](https://www.theregister.com/2024/05/31/google_ai_search_update)

**What you'll do differently:** choose what you ingest, and record every source in your manifest, so a bad answer can be traced back.

**After this, you can** reload changing data without creating duplicates.

**The skill that lasts:** repeatable, traceable data pipelines.

## Lesson overview

By the end of this lesson, you should be able to:

- Write ingestion that's safe to run twice.
- Track every page with a content hash.
- Keep a list (manifest) of everything you loaded.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** You run your ingestion script twice by accident. What happens to your search results?

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#data-ingestion).

## Before you read

**Picture this:** A class register, not a guest book. A guest book adds a line every time someone walks in; a register has one row per roll number, so calling the roll twice changes nothing. Your ingestion keys each page by its URL and a content hash, so a rerun only touches pages that really changed.


## Assignment

### Day 1 · about 90 min

> **Why:** Write the script that loads your docs, with a fingerprint for every page.
>
> **Don't skip:** Later lessons extend this script.

1. Write Ask MDN's ingestion script. It reads your MDN snapshot, chunks each page, and saves each page's path, title and content hash along with its chunks. A content hash is a fingerprint of the text: if the text changes, the fingerprint changes.

### Day 2 · about 90 min

> **Why:** Make reloading safe: running the script twice changes nothing.
>
> **Don't skip:** Real data changes, and you'll reload it often.

2. Make it safe to run twice: skip pages whose fingerprint hasn't changed. Run it twice; the second run should change nothing.

### Day 3 · about 90 min

> **Why:** Record exactly what you loaded, and test the script.
>
> **Don't skip:** Later syncs compare against this manifest.

3. Save and commit a manifest file: a list of every page path and its hash from this run.
4. Write 2 pytest tests for the script: running it twice changes nothing, and an edited page is picked up again.

### Memory check · 10 min

5. Close this page. In your log, answer from memory, then check:
   - What makes an ingestion script safe to run twice? ([where to check](15-data-ingestion.md))
   - How does Ask MDN decide to say “I don't know”? ([where to check](14-hybrid-search.md))
6. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

## Additional resources

These are optional. Use them if you want to go further.

- [dlt workshop: data pipelines with a dedicated tool (optional; earns Zoomcamp project points)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/cohorts/2026/workshops/dlt.md)
- [Module 3: orchestration with Kestra (optional; needs free Gemini and Tavily keys)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/03-orchestration/README.md)

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Hybrid Search](14-hybrid-search.md) · [Course map](README.md) · [Next lesson: Grading Answers →](16-grading-answers.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 7 Nov 2026
