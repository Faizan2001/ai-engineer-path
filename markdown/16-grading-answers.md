# Grading Answers

*Section 3: RAG with LLM Zoomcamp · Lesson 16 of 32 · about 1 week*

## Introduction

> **Hiring a model to mark exams is clever. Not checking its marking isn't.**

Good search isn't enough: the final answer also has to be right. Checking hundreds of answers by hand is slow, so you'll use a model to grade them. This is called an LLM judge.

A judge can be wrong too, so you'll check the judge against your own grades.

**After this, you can** grade hundreds of answers and know when to trust the grader.

**The skill that lasts:** checking the checker. Hamel Husain calls error analysis the most important activity in evals.

## Lesson overview

By the end of this lesson, you should be able to:

- Generate answers for many questions at once.
- Grade answers with an LLM judge.
- Check that the judge agrees with you.

## Try it first

Two minutes, before the reading. Guess first: a wrong guess makes the right answer stick.

**Predict:** If a model grades your app's answers, who checks the model?

## Assignment

### Prefer watching?

- ▶ [Why There's No LLM Judge You Can Trust 100% of the Time](https://www.youtube.com/watch?v=Th9vlxxAVeA) (Hamel Husain, 2 min): A short warm-up before the judge lessons.

### Day 1 · about 90 min

1. [11 Evaluation intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/11-evaluation-intro.md) and [12 RAG answers](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/12-rag-answers.md).

### Day 2 · about 90 min

2. [13 LLM as judge](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/13-llm-as-judge.md). Pay attention to “Evaluating the judge”. Then [14 Agent evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/14-agent-evaluation.md) and [15 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/15-next-steps.md); both are short.

### Days 3–5 · about 4.5 hours

3. Add to Ask MDN: generate answers for your 20 practice questions and save them to a file, so you can grade again without paying again. Grade them with a judge, then grade 10 of them yourself. Write down how often the judge agreed with you. Run the judge once per change, not after every small idea.

### Recall · 10 min

4. Close this page. In your log, answer from memory, then check:
   - Why check an LLM judge against answers you graded yourself? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/13-llm-as-judge.md))
   - Why save a content hash for every page? ([where to check](15-data-ingestion.md))
5. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [AI Evals FAQ by Hamel Husain and Shreya Shankar (a preview of Section 5)](https://hamel.dev/blog/posts/evals-faq/)
- [Creating an LLM-as-a-judge that drives business results](https://hamel.dev/blog/posts/llm-judge/) by Hamel Husain: how to build a judge you can actually trust.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Data Ingestion](15-data-ingestion.md) · [Course map](README.md) · [Next lesson: Monitoring →](17-monitoring.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
