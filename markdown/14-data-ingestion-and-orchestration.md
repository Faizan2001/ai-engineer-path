# Data Ingestion and Orchestration

*Section 3: RAG with LLM Zoomcamp · Lesson 14 of 30 · about 1 week*

## Introduction

Ingestion means loading your data into the app. Real data changes, so a good ingestion script is safe to run again and again without creating duplicates.

You'll learn dlt, a Python tool for data pipelines. Orchestration (scheduling and connecting steps, here with a tool called Kestra) is covered too, but its hands-on part is optional.

## Lesson overview

By the end of this lesson, you should be able to:

- Build a data pipeline with dlt.
- Write ingestion that's safe to run twice.
- Explain what an orchestrator does.

## Assignment

### Day 1

1. dlt workshop: [01 Overview](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/cohorts/2026/workshops/dlt/lessons/01-overview.md) and [02 Filesystem pipeline](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/cohorts/2026/workshops/dlt/lessons/02-filesystem-pipeline.md).

### Day 2

2. [03 Debug and dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/cohorts/2026/workshops/dlt/lessons/03-debug-and-dashboard.md) and [04 REST API pipeline](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/cohorts/2026/workshops/dlt/lessons/04-rest-api-pipeline.md).

### Day 3

3. Add to Ask MDN: an ingestion script that saves each page's path, title and content hash. A content hash is like a fingerprint of the text: if the text changes, the fingerprint changes. Skip pages whose fingerprint hasn't changed. Run it twice; the second run should change nothing.

### Day 4

4. Read Module 3, [02 Context engineering](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/03-orchestration/02-context-engineering.md). The rest of Module 3 (Kestra) is optional. Its hands-on part needs a free Gemini key and a free Tavily key.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [What makes an ingestion script safe to run twice?](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/cohorts/2026/workshops/dlt/lessons/02-filesystem-pipeline.md)
- [Why save a content hash for every page?](27-fresh-data.md)

## Additional resources

These are optional. Use them if you want to go further.

- [Module 3: orchestration with Kestra (optional)](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/03-orchestration/README.md)

---

[← Previous: ML Basics: Measuring Quality](13-ml-basics-measuring-quality.md) · [Course map](README.md) · [Next lesson: Evaluation →](15-evaluation.md)
