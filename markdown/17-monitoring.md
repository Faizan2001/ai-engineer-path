# Monitoring

*Section 3: RAG with LLM Zoomcamp · Lesson 17 of 41 · about 6 hours*

**Before you start, check that** your log has saved answers for the 20 practice questions and a judge agreement number.

## Introduction

> **Sooner or later someone will ask Ask MDN for a biryani recipe. Logs show you the question, and what it said back.**

Once people use your app, you need to see where answers fail, how much they cost and how long they take. So you'll record each request. Keep the text of a conversation only if it is public or made up.

**After this, you can** see what users ask, what each answer costs and where it fails.

**The skill that lasts:** owning how your app behaves after launch.

## Lesson overview

By the end of this lesson, you should be able to:

- Save details about each request in a database.
- Collect user feedback and inspect it alongside failed requests.
- Follow a failure through the logs, from question to answer.

## Before you read

A request ID connects the steps behind one answer: search, model calls, time, cost and errors. That lets you find where a failure started.

- **request trace**: linked records showing the steps behind one answer
- **feedback**: the thumbs up or down saved on that row

## Assignment

### Day 1 · about 90 min

> **Why:** Get a database running, and decide what to record for each request.
>
> **Don't skip:** Your logs need this database, and this is where you install Docker.

1. Read [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/01-intro.md) and [04 Metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/04-metrics.md) for what to record: tokens, cost and time. Skip Zoomcamp's 02 and 03, which build a separate FAQ app. Ask MDN already has a chat page, so you'll add logging there.
2. Install Docker ([get started](https://docs.docker.com/get-started/)) and run `docker run hello-world`. Docker runs programs in their own little boxes called containers, and your Postgres will run in one. Low on memory or disk space? Use a free [GitHub Codespace](https://docs.github.com/en/codespaces/getting-started/quickstart) instead; it has Docker built in.
3. Follow the Postgres part of [05 Database](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/05-database.md): start Postgres in Docker and create a table for your requests. Change the columns to fit Ask MDN.
4. Stop when a test row shows up in Postgres.

### Day 2 · about 90 min

> **Why:** Make every answer traceable with one request ID.
>
> **Don't skip:** Later debugging relies on this record.

5. Give every Ask MDN request one request ID, and use it to join retrieval, model calls and errors.
6. Stop when one question gives you a single record you can read from start to finish.

### Day 3 · about 90 min

> **Why:** Record what each answer took and what it cost.
>
> **Don't skip:** Your cost numbers and your debugging both come from here.

7. For each request, save the step durations, the retrieved page IDs, the model, prompt and corpus versions, the tokens and the cost. Use only public or made-up test conversations, and never log keys or auth headers.
8. **Using Gemini?** Your token counts are in `response.usage.prompt_tokens` and `response.usage.completion_tokens`, so keep the whole response at that point in your loop.
9. Stop when a question's record shows what it cost and how long each step took.

### Day 4 · about 90 min

> **Why:** Add thumbs up or down, so users can tell you which answers failed.
>
> **Don't skip:** This is Ask MDN v0.5.

10. Do [08 User feedback](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/08-user-feedback.md), and add the same thumbs up or down to Ask MDN, on the same record.
11. Inspect one failed run from input to output. This is **Ask MDN v0.5**: a wrong answer now leaves clues.

### Memory check · 10 min

12. Close this page. In your log, answer from memory, then check:
   - What should a useful trace reveal, and what should it leave out? ([where to check](17-monitoring.md))
   - Why can't you fully trust an LLM judge without checking it? ([where to check](16-grading-answers.md))
13. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What should a useful trace reveal, and what should it leave out?</summary>

A request ID joins the retrieval, model and tool steps, with timings, versions, costs and errors. Leave out credentials and private messages. Logging everything forever is its own problem.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [Grafana dashboards (optional)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/12-grafana.md)
- [Docker Compose for the whole app (optional; earns Zoomcamp project points)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/13-docker-compose.md)
- [A field guide to rapidly improving AI products](https://hamel.dev/blog/posts/field-guide/) by Hamel Husain: why looking at real conversations beats any dashboard.
- [OpenTelemetry GenAI conventions](https://github.com/open-telemetry/semantic-conventions-genai): standard names (such as `gen_ai.provider.name`) for the fields you already log. Still in development; read only if you adopt a tracing tool.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Grading Answers](16-grading-answers.md) · [Course map](README.md) · [Next lesson: Deploy It Safely →](18-deploy-it-safely.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 7 Nov 2026
