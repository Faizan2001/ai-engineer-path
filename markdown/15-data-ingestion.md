# Data Ingestion

*Section 3: RAG with LLM Zoomcamp · Lesson 15 of 32 · about 4.5 hours*

## Introduction

> **A good ingestion script is a lift button: press it ten times, still one trip.**

Ingestion means loading your data into the app. Real data changes, so a good ingestion script is safe to run again and again without creating duplicates.

You'll write Ask MDN's ingestion script now, and in Section 5 you'll extend it to handle edited and deleted pages.

**After this, you can** reload changing data without creating duplicates.

**The skill that lasts:** repeatable, traceable data pipelines.

## Lesson overview

By the end of this lesson, you should be able to:

- Write ingestion that's safe to run twice.
- Track every page with a content hash.
- Keep a list (manifest) of everything you loaded.

## Assignment

### Day 1 · about 90 min

1. Write Ask MDN's ingestion script: read your MDN snapshot, chunk each page and save its path, title and content hash. A content hash is like a fingerprint of the text: if the text changes, the fingerprint changes.

### Day 2 · about 90 min

2. Make it safe to run twice: skip pages whose fingerprint hasn't changed. Run it twice; the second run should change nothing.

### Day 3 · about 90 min

3. Save and commit a manifest file: a list of every page path and its hash from this run. You'll compare manifests in Fresh Data. Write 2 pytest tests for the script. Commit early and often, with messages that say what changed.

### Recall · 10 min

4. Close this page. In your log, answer from memory, then check:
   - What makes an ingestion script safe to run twice? ([where to check](15-data-ingestion.md))
   - How does Ask MDN decide to say “I don't know”? ([where to check](14-hybrid-search.md))
5. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [dlt workshop: data pipelines with a dedicated tool (optional; earns Zoomcamp project points)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/cohorts/2026/workshops/dlt.md)
- [Module 3: orchestration with Kestra (optional; needs free Gemini and Tavily keys)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/03-orchestration/README.md)

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Hybrid Search](14-hybrid-search.md) · [Course map](README.md) · [Next lesson: Grading Answers →](16-grading-answers.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
