# Project: Ask MDN

*Section 3: RAG with LLM Zoomcamp · Lesson 19 of 42 · about 3 weeks*

**Before you start, check that** Ask MDN v0.6 runs online as your private app, with conversations saved in Neon.

## Introduction

> **You know MDN, so you'll spot Ask MDN's mistakes first. That's your unfair advantage.**

This is your Zoomcamp final project, built on MDN. It answers CSS and JavaScript questions, shows which pages it used, and says “I don't know” when the docs don't cover a question.

You're a web developer, so you'll spot wrong answers quickly. That makes MDN a great place to learn.

**After this, you can** demo a live, cited RAG app, with scores measured on questions it never saw.

**The skill that lasts:** end-to-end ownership, backed by evidence. This is likely the repo interviewers will ask about.

## Before you start

- Read the Zoomcamp [project criteria](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/project.md) and use them as a checklist. This path covers most of them; the optional extras are in Extra credit below.
- Decide who it's for, for example first-years in your university's programming club. Only your prompt and README change.
- Your MDN data and your test questions are frozen. Don't change them now.
- MDN's text is shared under a license called CC-BY-SA. Credit “Mozilla Contributors” and link each page you use ([MDN licensing](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license)).
- Don't look at other people's versions of this project until yours works. Then compare and learn.
- Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error.

## Assignment

### Days 1–6 · about 9 hours

1. **Days 1–3:** Bring together everything from this section: ingestion, hybrid search, the prompt, the chat app and logging. One piece a Day, each one running before you add the next.
2. **Days 4–5:** Make every answer show links to the MDN pages it used.
3. **Stop here on Day 6:** 5 practice questions get correct, cited answers.

### Days 7–12 · about 9 hours

4. **Days 7–8:** Check the “I don't know” path on your 10 unanswerable questions.
5. **Days 9–11:** Run your tests on the 50 held-back questions, once, and record the results. Rerun your bootstrap from [Measuring Search](13-measuring-search.md) on them and report the range next to each metric. On a 10-question sample, manually assess correctness and whether the cited passage supports the claim; a valid URL alone is not enough. Record mistakes even when retrieval succeeded. Once inspected, this set becomes regression data; do not call it unseen after tuning on it.
6. **Stop here on Day 12:** your README has the results table.

### Days 13–18 · about 9 hours

7. **Days 13–14:** Put the final version online as a private app (see [Deploy It Safely](18-deploy-it-safely.md)). This is **Ask MDN v1.0**.
8. **Day 15:** If a friend can help, ask them for 5 CSS or JavaScript questions they really got stuck on this month, and run them on the live app. No one free? Ask in the Zoomcamp Slack, or use 5 old bugs of your own.
9. **Days 16–17:** Finish the README. Open it with a real bug you once lost hours to, and Ask MDN's cited answer. Then: how it works, how to run it, your results, a GIF and what you'd improve.
10. **Day 18:** If a Zoomcamp cohort is open, submit your project for peer review. If not, share your repo in `#course-llm-zoomcamp` and ask for feedback.

### Memory check · 10 min

11. Close this page. In your log, answer from memory, then check:
   - What goes into a RAG prompt? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/06-building-prompt.md))
   - How do you roll back a bad deploy? ([where to check](18-deploy-it-safely.md))
12. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

## You're done when

- [ ] Your README reports Hit Rate@5 and MRR@5 for keyword, vector and hybrid search on the 50 held-back questions. If hybrid doesn't win, you explain why. Include your model/configuration comparison and its decision, with prompt and corpus versions.
- [ ] Every factual answer identifies its source passages. Your README includes manual correctness and citation-support grades for a 10-answer sample, with failures explained.
- [ ] Report abstention results on the 10 known unanswerable questions and incorrect refusals on answerable questions. Call this a regression result, not proof of performance on new questions.
- [ ] It runs online as your private Streamlit app, with the API key stored in Secrets and conversations saved in Neon.
- [ ] Explain the request flow, two design decisions and one failure. Write a core retrieval function without AI-generated code (such as page deduplication or rank fusion), test duplicate/missing results, and explain its behavior on a new input. Documentation is allowed; note the commit.

## Show it off

**Your one-line pitch:** Hybrid-search RAG over MDN that cites its pages, says “I don't know”, and reports scores on questions it never saw.

A 3-minute demo, in this order:

1. Start with a real bug you once lost hours to, and show Ask MDN's cited answer.
2. Ask something the docs don't cover and get “I don't know”.
3. Show Hit Rate@5 and MRR@5 for keyword, vector and hybrid search on the 50 held-back questions.
4. Show the logs: what each answer cost and how users rated it.
5. Walk through one failure you found and fixed.

What it proves to employers:

- RAG, the most named pattern in job posts: about 40% of the posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md), and [rising](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/07-trends.md).
- Vector search, measuring retrieval, and running and monitoring an LLM app in production.

## Extra credit

- Add a real reranker (a second model that re-scores the top results) and measure whether it helps.
- Compare two embedding models on your practice questions.
- Optional Zoomcamp extras that earn points: Docker Compose, a 5-chart dashboard, a dedicated ingestion tool and query rewriting. The core path already compares prompts and model configurations.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Deploy It Safely](18-deploy-it-safely.md) · [Course map](README.md) · [Next lesson: Campus Knowledge Base →](20-campus-knowledge-base.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
