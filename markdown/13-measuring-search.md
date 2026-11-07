# Measuring Search

*Section 3: RAG with LLM Zoomcamp · Lesson 13 of 41 · about 1 week, plus 1 hour*

**Before you start, check that** Ask MDN v0.3 answers from a sqlitesearch vector index built with the ONNX embedder, and keyword search still works.

## Introduction

> **“It feels better” isn't a measurement. Now Ask MDN gets real scores.**

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

To grade search you need an answer key: questions whose correct page you already know. Run search and see where that page lands. Hit Rate asks “was it in the top 5?”. MRR asks how near the top: 1st scores 1, 2nd ½, 3rd ⅓, missing 0, then you take the average. Careful: “recall” can mean two things. In ML it is the share of the right items you found. Zoomcamp's Recall@k is just another name for Hit Rate.

- **ground truth**: questions paired with the page that answers them
- **held-back set**: questions you never use for tuning
- **Recall@k**: Zoomcamp's name for Hit Rate: was a right page in the top k?

## Assignment

### Day 1 · about 90 min

> **Why:** Learn how to build an answer key: questions with known correct pages.
>
> **Skip if** you've built ground-truth question sets for search before.

1. Module 4: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/01-intro.md) and [02 Ground truth](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/02-ground-truth.md) (it generates questions with structured output, which you already know).
2. **Using Gemini?** Swap `responses.parse` for the `beta.chat.completions.parse` form from [Structured Output and Errors](07-structured-output-and-errors.md).
3. Generate questions for 3 documents only, and read them. Would a real person ask these? Stop when you can say what a good test question looks like.

### Day 2 · about 90 min

> **Why:** Generate candidate test questions for 60 MDN pages in one batch.
>
> **Don't skip:** They become your held-back test set.

4. [03 Ground truth batch](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/03-ground-truth-batch.md).
5. **Using Gemini?** Set `max_workers=1`. Six at once will hit the free-tier limit.
6. Use the same method to generate questions for a random sample of 60 of your MDN pages, not all of them.

### Day 3 · about 90 min

> **Why:** Clean the questions and lock 50 away as an honest final test.
>
> **Don't skip:** The Ask MDN project is scored on this set.

7. Read through the questions, fix or replace the bad ones, and keep 50. Commit them as your **held-back** set. Don't use them for tuning.

### Day 4 · about 90 min

> **Why:** See how a search run is scored, question by question.
>
> **Skip if** you can already score a search run against ground truth.

8. [04 Search evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/04-search-evaluation.md).
9. Stop when you have a relevance list like `[1, 0, 0, 0, 0]` for every question, and can say what one list means.

### Day 5 · about 90 min

> **Why:** Learn Hit Rate and MRR, and how to tune search without cheating.
>
> **Skip if** you can compute Hit Rate and MRR by hand and know why tuning uses practice data only.

10. [05 Search metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/05-search-metrics.md) and [06 Search tuning](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/06-search-tuning.md).
11. Stop when you've computed Hit Rate and MRR, and seen one boost setting change them.

### Days 6–7 · about 3 hours

> **Why:** Put real numbers on Ask MDN's keyword and vector search.
>
> **Don't skip:** Your README reports these numbers.

12. Add to Ask MDN: measure Hit Rate@5 and MRR@5 for keyword search and for vector search on your 20 practice questions. The @5 means only the top 5 results count. Write the numbers in your README.
13. Score the first 5 different pages, not 5 chunks. Fetch more chunks if you need to, then remove repeated pages in rank order with your `unique_pages` function. If fewer than 5 pages remain, score what you have.
14. Add a small test: repeated chunks from page A must not push page B out of the top five pages.

### Day 8 · about 60 min

> **Why:** Learn how sure you can be of a score from only 20 questions.
>
> **Don't skip:** Ask MDN reruns this bootstrap on its final test.

15. Your Hit Rate on 20 practice questions is an estimate, not a fact. To see how uncertain it is, write a paired bootstrap, without AI-written code.
16. Repeat 1,000 times: pick 20 of your practice questions at random, with replacement (some appear twice, some not at all). On that same pick, compute Hit Rate for keyword search and for vector search, and save the difference.
17. Report the middle 95% of the 1,000 differences (the 2.5th to the 97.5th percentile). If the range includes 0, you can't yet say which search is better. With 20 questions the range will be wide. That is the point.
18. Add the rule of three to your log: if you see 0 failures in n tries, the true failure rate could still be as high as about 3/n. Stop here when your results table shows every metric with its n and its range.

### Memory check · 10 min

19. Close this page. In your log, answer from memory, then check:
   - What does MRR reward that Hit Rate doesn't? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/05-search-metrics.md))
   - Why did you split long MDN pages into chunks? ([where to check](12-embeddings-and-vector-search.md))
20. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What does MRR reward that Hit Rate doesn't?</summary>

MRR gives more credit the nearer the top the first right page is. Hit Rate only checks whether a right page showed up in the top 5. At @5, a question scores 0 in MRR if no right page is in the top 5.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Why did you split long MDN pages into chunks?</summary>

A chunk is about one thing, so search can match a focused passage. A whole page covers many topics in one embedding. The page ID on each chunk connects it back to its source for citations and scoring.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [Systematically improving your RAG](https://jxnl.co/writing/2024/05/22/systematically-improving-your-rag/) by Jason Liu: measure search first, then fix it.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Embeddings and Vector Search](12-embeddings-and-vector-search.md) · [Course map](README.md) · [Next lesson: Hybrid Search →](14-hybrid-search.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 7 Nov 2026
