# Measuring Search

*Section 3: RAG with LLM Zoomcamp · Lesson 13 of 42 · about 1 week, plus 1 hour*

**Before you start, check that** Ask MDN v0.3 answers from a sqlitesearch vector index built with the ONNX embedder, and keyword search still works.

## Introduction

> **“It feels better” isn't a metric. Ask MDN gets a report card it can't charm.**

Now you'll measure how good Ask MDN's search really is, with numbers instead of guesses.

You'll also create the 50 held-back questions for the Ask MDN project. Once they're committed, you don't look at them again until then.

**After this, you can** prove search got better with numbers, not vibes.

**The skill that lasts:** turning “better” into something you can measure.

## Lesson overview

By the end of this lesson, you should be able to:

- Generate ground truth: questions with known correct pages.
- Measure Hit Rate (did the right page show up in the top 5?) and MRR (how close to the top was it?).
- Tune search fairly, using practice questions only.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** Two searches both find the right page somewhere in their top 5. Can one still be better? How would you tell?

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#measuring-search).

## Before you read

To grade search you need an answer key: questions whose correct page you already know. Run search and see where that page lands. Hit Rate asks “was it in the top 5?”. MRR asks how near the top: 1st scores 1, 2nd ½, 3rd ⅓, missing 0, then you take the average. Careful, three different things share a name: recall (the ML metric), Recall@k (Zoomcamp's other name for Hit Rate) and this site's Memory check.

- **ground truth**: questions paired with the page that answers them
- **held-back set**: questions you never use for tuning
- **Recall@k**: Zoomcamp's name for Hit Rate: was a right page in the top k?

## Assignment

### Day 1 · about 90 min

1. Module 4: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/01-intro.md) and [02 Ground truth](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/02-ground-truth.md) (it generates questions with structured output, which you already know).

### Day 2 · about 90 min

2. [03 Ground truth batch](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/03-ground-truth-batch.md).
3. Use the same method to generate questions for a random sample of 60 of your MDN pages, not all of them.

### Day 3 · about 90 min

4. Read through the questions, fix or replace the bad ones, and keep 50. Commit them as your **held-back** set. Don't use them for tuning.

### Day 4 · about 90 min

5. [04 Search evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/04-search-evaluation.md).

### Day 5 · about 90 min

6. [05 Search metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/05-search-metrics.md) and [06 Search tuning](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/06-search-tuning.md).

### Days 6–7 · about 3 hours

7. Add to Ask MDN: measure Hit Rate@5 and MRR@5 (the @5 means only the top 5 results count) for keyword and vector search on your 20 practice questions. Write the numbers in your README. Score the first 5 distinct `page_id` values, not 5 chunks. Fetch more chunk candidates if needed, deduplicate in rank order, and report fewer results honestly if fewer remain. Add a tiny test where repeated chunks from page A cannot crowd page B out of the five-page metric.

### Day 8 · about 60 min

8. Your Hit Rate on 20 practice questions is an estimate, not a fact. Without AI-written code, write a paired bootstrap: 1,000 times, draw 20 of your practice questions at random *with replacement* (some appear twice, some not at all), compute Hit Rate for keyword search and for vector search on that same draw, and save the difference. Report the middle 95% of the 1,000 differences (the 2.5th to 97.5th percentile). If that range includes 0, you can't yet say which search is better. Expect a wide range with 20 questions; that is the point.
9. Add the rule of three to your log: if you see 0 failures in n tries, the true failure rate could still be as high as about 3/n. Stop here when your results table shows every metric with its n and its range.

### Memory check · 10 min

10. Close this page. In your log, answer from memory, then check:
   - What does MRR reward that Hit Rate doesn't? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/05-search-metrics.md))
   - Why did you split long MDN pages into chunks? ([where to check](12-embeddings-and-vector-search.md))
11. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What does MRR reward that Hit Rate doesn't?</summary>

MRR rewards placing the first relevant result nearer the top, while Hit Rate only checks whether a relevant result was found within the cutoff. At @5, the reciprocal rank is zero if no relevant result appears in the first five positions.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Why did you split long MDN pages into chunks?</summary>

Chunks let search match a focused passage instead of representing many topics with one whole-page embedding. Keeping the parent page ID connects each chunk to its source for citations and evaluation.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [Systematically improving your RAG](https://jxnl.co/writing/2024/05/22/systematically-improving-your-rag/) by Jason Liu: measure search first, then fix it.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Embeddings and Vector Search](12-embeddings-and-vector-search.md) · [Course map](README.md) · [Next lesson: Hybrid Search →](14-hybrid-search.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
