# Project: Ask MDN

*Section 3: RAG with LLM Zoomcamp · Lesson 19 of 32 · about 3 weeks*

## Introduction

> **You know MDN, so you'll spot Ask MDN's mistakes first. That's your unfair advantage.**

This is your Zoomcamp final project, built on MDN. It answers CSS and JavaScript questions, shows which pages it used, and says “I don't know” when the docs don't cover a question.

You're a web developer, so you'll spot wrong answers quickly. That makes MDN a great place to learn.

**After this, you can** demo a live, cited RAG app, with scores measured on questions it never saw.

**The skill that lasts:** end-to-end ownership, backed by evidence. This is the repo interviewers will ask you about.

## Before you start

- Read the Zoomcamp [project criteria](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/project.md) and use them as a checklist. This path covers most of them; the optional extras are in Extra credit below.
- Decide who it's for, for example first-years in your university's programming club. Only your prompt and README change.
- Your MDN data and your test questions are frozen. Don't change them now.
- MDN's text is shared under a license called CC-BY-SA. Credit “Mozilla Contributors” and link each page you use ([MDN licensing](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license)).
- Don't look at other people's versions of this project until yours works. Then compare and learn.
- Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error.

## Assignment

### Week 1 · about 9 hours

1. Bring together everything from this section: ingestion, hybrid search, the prompt, the chat app and logging.
2. Make every answer show links to the MDN pages it used.
3. Checkpoint: 5 practice questions get correct, cited answers.

### Week 2 · about 9 hours

4. Check the “I don't know” path on your 10 unanswerable questions.
5. Run your tests on the 50 held-back questions, once, and record the results.
6. Checkpoint: your README has the results table.

### Week 3 · about 9 hours

7. Put the final version online as a private app (see [Deploy It Safely](18-deploy-it-safely.md)). This is **Ask MDN v1.0**.
8. If a friend can help, ask them for 5 CSS or JavaScript questions they really got stuck on this month, and run them on the live app. No one free? Ask in the Zoomcamp Slack, or use 5 old bugs of your own.
9. Finish the README. Open it with a real bug you once lost hours to, and Ask MDN's cited answer. Then: how it works, how to run it, your results, a GIF and what you'd improve.
10. If a Zoomcamp cohort is open, submit your project for peer review. If not, share your repo in `#course-llm-zoomcamp` and ask for feedback.

### Recall · 10 min

11. Close this page. In your log, answer from memory, then check:
   - What goes into a RAG prompt? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/06-building-prompt.md))
   - How do you roll back a bad deploy? ([where to check](18-deploy-it-safely.md))
12. Write one more line: how will this lesson help your Campus Assistant?

## You're done when

- [ ] Your README reports Hit Rate@5 and MRR@5 for keyword, vector and hybrid search on the 50 held-back questions. If hybrid doesn't win, you explain why.
- [ ] Every answer shows links to the MDN pages it used.
- [ ] It says “I don't know” to all 10 questions the docs can't answer.
- [ ] It runs online as your private Streamlit app, with the API key stored in Secrets and conversations saved in Neon.
- [ ] You can explain how a request moves through your app, two decisions you made and one problem you fixed. You wrote at least one whole function without AI help, and noted its commit in your log.

## Extra credit

- Add a real reranker (a second model that re-scores the top results) and measure whether it helps.
- Compare two embedding models on your practice questions.
- Optional Zoomcamp extras that earn points: Docker Compose, a 5-chart dashboard, a dedicated ingestion tool, comparing prompts and query rewriting.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Deploy It Safely](18-deploy-it-safely.md) · [Course map](README.md) · [Next lesson: Agent Fundamentals →](20-agent-fundamentals.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
