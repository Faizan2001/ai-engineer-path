# Monitoring

*Section 3: RAG with LLM Zoomcamp · Lesson 17 of 32 · about 12 hours*

**Before you start, check that** your log has saved answers for the 20 practice questions and a judge agreement number.

## Introduction

> **Sooner or later someone will ask Ask MDN for a biryani recipe. Logs show you the question, and what it said back.**

Once people use your app, you need to see where answers fail, how much they cost and how long they take. Record metadata for each request. Keep diagnostic conversation content only for permitted public or synthetic examples, with a short retention period.

**After this, you can** see what users ask, what each answer costs and where it fails.

**The skill that lasts:** owning how your app behaves after launch.

## Lesson overview

By the end of this lesson, you should be able to:

- Turn your Streamlit page into a full chat app.
- Save request metadata and permitted diagnostic examples to a database.
- Collect user feedback and inspect it alongside failed requests.
- Trace a failure without keeping unnecessary private data.

## Before you read

A request ID connects the steps behind one answer: search, model calls, time, cost and errors. That lets you find where a failure started. For this course, save diagnostic text only from permitted public/synthetic examples and remove it after 7 days. Your evaluation fixtures are a separate, reviewed dataset.

- **request trace**: linked records showing the steps behind one answer
- **feedback**: the thumbs up or down saved on that row

## Assignment

### Day 1 · about 90 min

1. Module 5: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/01-intro.md), [02 Assistant setup](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/02-assistant-setup.md) and [03 Chat app](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/03-chat-app.md). Heads-up: the download links in 02 are broken. Copy `ingest.py` and `rag_helper.py` from the [05-monitoring/code folder](https://github.com/DataTalksClub/llm-zoomcamp/tree/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/code) instead.

### Day 2 · about 90 min

2. [04 Metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/04-metrics.md) and [05 Database](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/05-database.md) (adapt the example to your metadata and retention policy).

### Day 3 · about 90 min

3. Skim [06 Querying](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/06-querying.md) and [07 Streamlit dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/07-streamlit-dashboard.md); you won't build these. Then do [08 User feedback](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/08-user-feedback.md) properly: you'll add the same thumbs up or down to Ask MDN.

### Day 4 · about 90 min

4. Skim [09 Built-in judge](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/09-built-in-judge.md) and [10 Feedback dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/10-feedback-dashboard.md). Then do [11 Synthetic data](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/11-synthetic-data.md) properly. You'll use this generator in Section 5 to create realistic logs.

### Days 5–7 · about 4.5 hours

5. Add to Ask MDN: one request ID joining retrieval, model calls and errors. Save step durations, retrieved page IDs, model/prompt/corpus versions, tokens, cost and user feedback. Use only public or synthetic test conversations; inspect a failed run from input to output. This is **Ask MDN v0.5**: a wrong answer now leaves clues.

### Day 8 · about 90 min

6. Skim the monitoring and privacy topics in [Stanford CS329S](https://stanford-cs329s.github.io/syllabus.html). Then write a small data policy: what leaves your app, where logs live, who can read them and when they are deleted. For this exercise, retain diagnostic content for 7 days; never log keys, auth headers or real private messages. Keep approved synthetic evaluation fixtures separately.
7. Test the policy with a fake email and token-shaped string: redact them before saving diagnostics. Do not assume a regex removes every kind of personal information. Add a cleanup command and test it on old fake logs. A restricted log is still stored data.
8. Make a 5-request sample report: where time went, cost per request, one retrieval failure and one model failure. Plain JSON and a short table are enough; a new tracing service is optional.

### Memory check · 10 min

9. Close this page. In your log, answer from memory, then check:
   - What should a useful trace reveal, and what should it leave out? ([where to check](17-monitoring.md))
   - Why can't you fully trust an LLM judge without checking it? ([where to check](16-grading-answers.md))
10. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What should a useful trace reveal, and what should it leave out?</summary>

A request ID joins retrieval, model and tool steps with durations, versions, costs and errors. Keep only necessary permitted content; omit credentials and private messages, restrict access and test deletion. Logging everything forever creates another problem.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [Grafana dashboards (optional)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/12-grafana.md)
- [Docker Compose for the whole app (optional; earns Zoomcamp project points)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/13-docker-compose.md)
- [A field guide to rapidly improving AI products](https://hamel.dev/blog/posts/field-guide/) by Hamel Husain: why looking at real conversations beats any dashboard.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Grading Answers](16-grading-answers.md) · [Course map](README.md) · [Next lesson: Deploy It Safely →](18-deploy-it-safely.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
