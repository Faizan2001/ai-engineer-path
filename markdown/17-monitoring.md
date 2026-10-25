# Monitoring

*Section 3: RAG with LLM Zoomcamp · Lesson 17 of 32 · about 1 week*

**Before you start, check that** your log has saved answers for the 20 practice questions and a judge agreement number.

## Introduction

> **Sooner or later someone will ask Ask MDN for a biryani recipe. Logs show you the question, and what it said back.**

Once people use your app, you need to see what's happening: what they ask, what it answers, how much it costs and how fast it is. You'll also save every chat so you can study real conversations later.

**After this, you can** see what users ask, what each answer costs and where it fails.

**The skill that lasts:** owning how your app behaves after launch.

## Lesson overview

By the end of this lesson, you should be able to:

- Turn your Streamlit page into a full chat app.
- Save every conversation and its cost to a database.
- Collect user feedback and show it on a dashboard.

## Before you read

Monitoring means keeping a receipt for every answer: the question, the answer, its sources, the time, tokens, cost and a thumbs up or down. Later you read the receipts to find failures. A dashboard is only a view of that table; the table is what matters.

- **conversation log**: one database row per question and answer
- **feedback**: the thumbs up or down saved on that row

## Assignment

### Day 1 · about 90 min

1. Module 5: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/01-intro.md), [02 Assistant setup](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/02-assistant-setup.md) and [03 Chat app](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/03-chat-app.md). Heads-up: the download links in 02 are broken. Copy `ingest.py` and `rag_helper.py` from the [05-monitoring/code folder](https://github.com/DataTalksClub/llm-zoomcamp/tree/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/code) instead.

### Day 2 · about 90 min

2. [04 Metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/04-metrics.md) and [05 Database](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/05-database.md) (this is where every conversation gets saved).

### Day 3 · about 90 min

3. Skim [06 Querying](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/06-querying.md) and [07 Streamlit dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/07-streamlit-dashboard.md); you won't build these. Then do [08 User feedback](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/08-user-feedback.md) properly: you'll add the same thumbs up or down to Ask MDN.

### Day 4 · about 90 min

4. Skim [09 Built-in judge](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/09-built-in-judge.md) and [10 Feedback dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/10-feedback-dashboard.md). Then do [11 Synthetic data](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/11-synthetic-data.md) properly. You'll use this generator in Section 5 to create realistic logs.

### Days 5–7 · about 4.5 hours

5. Add to Ask MDN: save every conversation with the question, answer, cited pages, time taken, tokens and cost. Add a thumbs up or down button. This is **Ask MDN v0.5**: you can see what people ask and what each answer costs.

### Memory check · 10 min

6. Close this page. In your log, answer from memory, then check:
   - What should you save for every answer? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/04-metrics.md))
   - Why can't you fully trust an LLM judge without checking it? ([where to check](16-grading-answers.md))
7. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [Grafana dashboards (optional)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/12-grafana.md)
- [Docker Compose for the whole app (optional; earns Zoomcamp project points)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/13-docker-compose.md)
- [A field guide to rapidly improving AI products](https://hamel.dev/blog/posts/field-guide/) by Hamel Husain: why looking at real conversations beats any dashboard.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Grading Answers](16-grading-answers.md) · [Course map](README.md) · [Next lesson: Deploy It Safely →](18-deploy-it-safely.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
