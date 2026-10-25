# Measuring Search

*Section 3: RAG with LLM Zoomcamp · Lesson 13 of 32 · about 1 week*

## Introduction

> **“It feels better” isn't a metric. Ask MDN gets a report card it can't charm.**

Now you'll measure how good Ask MDN's search really is, with numbers instead of guesses.

You'll also create the 50 held-back questions for your final project. Once they're committed, you don't look at them again until then.

**After this, you can** prove search got better with numbers, not vibes.

**The skill that lasts:** turning “better” into something you can measure.

## Lesson overview

By the end of this lesson, you should be able to:

- Generate ground truth: questions with known correct pages.
- Measure Hit Rate (did the right page show up in the top 5?) and MRR (how close to the top was it?).
- Tune search fairly, using practice questions only.

## Try it first

Two minutes, before the reading. Guess first: a wrong guess makes the right answer stick.

**Predict:** Two searches both find the right page somewhere in their top 5. Can one still be better? How would you tell?

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#measuring-search).

## Assignment

### Day 1 · about 90 min

1. Module 4: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/01-intro.md) and [02 Ground truth](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/02-ground-truth.md) (it generates questions with structured output, which you already know).

### Day 2 · about 90 min

2. [03 Ground truth batch](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/03-ground-truth-batch.md).
3. Use the same method to generate questions for a random sample of 60 of your MDN pages, not all of them.

### Day 3 · about 90 min

4. Read through the questions, fix or replace the bad ones, and keep 50. Commit them as your **held-back** set. Don't use them for tuning.

### Day 4 · about 90 min

5. [04 Search evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/04-search-evaluation.md) and [05 Search metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/05-search-metrics.md).

### Day 5 · about 90 min

6. [06 Search tuning](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/06-search-tuning.md).

### Days 6–7 · about 3 hours

7. Add to Ask MDN: measure Hit Rate@5 and MRR@5 (the @5 means only the top 5 results count) for keyword and vector search on your 20 practice questions. Write the numbers in your README.

### Recall · 10 min

8. Close this page. In your log, answer from memory, then check:
   - What does MRR reward that Hit Rate doesn't? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/05-search-metrics.md))
   - Why did you split long MDN pages into chunks? ([where to check](12-embeddings-and-vector-search.md))
9. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [Systematically improving your RAG](https://jxnl.co/writing/2024/05/22/systematically-improving-your-rag/) by Jason Liu: measure search first, then fix it.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Embeddings and Vector Search](12-embeddings-and-vector-search.md) · [Course map](README.md) · [Next lesson: Hybrid Search →](14-hybrid-search.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
