# Hybrid Search

*Section 3: RAG with LLM Zoomcamp · Lesson 14 of 41 · about 4.5 hours*

**Before you start, check that** your README has Hit Rate@5 and MRR@5 for keyword and vector search, and the 50 held-back questions are committed.

## Introduction

> **Keyword search knows `justify-content`; vector search knows “center a box”. RRF lets them vote.**

MDN questions mix meaning (“how do I center a box?”) with exact names (`justify-content`). Keyword search is great with names. Vector search is great with meaning.

Hybrid search combines both result lists. You will measure whether that helps. You will also separate two questions: “Which pages rank first?” and “Do these pages actually support an answer?”

**After this, you can** combine two searches and make the app admit “I don't know”.

**The skill that lasts:** deciding when a system should refuse to answer.

## Lesson overview

By the end of this lesson, you should be able to:

- Know when each kind of search does better.
- Combine two result lists with Reciprocal Rank Fusion (RRF).
- Distinguish result ranking from evidence that a question can be answered.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** One list ranks a page 1st and the other doesn't have it at all. Another page is 2nd in both lists. Which should win?

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#hybrid-search).

## Before you read

**Picture this:** Two judges rank the same singers on different scales, so adding their marks means nothing. RRF throws away the marks and keeps only the places: each list gives a singer 1/(k + place) points, and the totals decide.

Each search gives a ranked list, and their scores can't be compared. RRF ignores the scores and uses only positions: each list gives a page 1/(k + position) points, and you add them up. A page fairly high in both lists beats one at the top of only one. RRF is a ranking score, not a probability that the answer exists. Two irrelevant lists can agree perfectly.

- **RRF**: merging ranked lists by adding 1 ÷ (k + position)
- **evidence sufficiency**: whether the available passages support an answer to this question

## Assignment

### Prefer watching?

- ▶ [What is reciprocal rank fusion in hybrid search?](https://www.youtube.com/watch?v=2uBcjEecr38) (Abhishek Thakur, 8 min): Covers the same idea as the reading. Afterwards, write one sentence about it in your log.

### Day 1 · about 90 min

1. Read Module 6 lessons [02 Hybrid search](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/02-hybrid-search.md) and [03 Reranking (RRF)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/03-reranking.md). They were recorded in 2024, so some code is old. Take the ideas, not the code. Skip the Elasticsearch part of 03: its built-in RRF needs a paid licence. Lesson 02 uses k = 1 and 03 uses 60; Ask MDN uses 60.

### Day 2 · about 90 min

2. **No AI for this one:** write your own RRF function, about 15 lines. A page gets more points the higher it ranks in each list, and its points are added up. Then add a `hybrid_search()` that runs both searches and combines them. Fuse unique page lists using the convention from Embeddings, with ranks starting at 1. Test repeated chunks and a page present in only one list.

### Day 3 · about 90 min

3. Measure Hit Rate@5 and MRR@5 for hybrid search on your practice questions and compare with keyword and vector search.
4. Do not use the RRF score as an “answer exists” cutoff. Put the top passages in a structured prompt asking for `supported`, an answer only if supported, and the supporting chunk IDs and short quotes. Reject missing or unknown IDs and quotes that are not in those chunks. Say “I don't know from these sources” when evidence is missing. This check can still misjudge meaning: inspect its decisions on the 20 practice and 10 unanswerable questions, including plausible in-topic questions with absent answers. Record unsupported answers and unnecessary refusals separately. You will assess this more carefully in Grading Answers. This is **Ask MDN v0.4**.

### Memory check · 10 min

5. Close this page. In your log, answer from memory, then check:
   - What does RRF use from each result list? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/02-hybrid-search.md))
   - What does Hit Rate@5 measure? ([where to check](13-measuring-search.md))
6. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What does RRF use from each result list?</summary>

RRF uses each item's rank position, rather than the search engines' raw scores, and adds 1/(k + rank) across lists containing that item. This produces a combined ranking, not a probability that the retrieved evidence can answer the question.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: What does Hit Rate@5 measure?</summary>

Hit Rate@5 is the fraction of evaluated questions for which at least one known relevant page appears in the top five results. It does not measure the final answer's correctness or distinguish first place from fifth.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [RAG Techniques: reranking and fusion notebooks](https://github.com/NirDiamant/RAG_Techniques)
- [Better RAG results with reciprocal rank fusion and hybrid search](https://www.assembled.com/blog/better-rag-results-with-reciprocal-rank-fusion-and-hybrid-search) by Assembled: a real team's results with the exact method you just built.
- [Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) by Anthropic: how adding a little context to each chunk cut failed searches.
- [How RRF scoring works](https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking): the formula uses ranks, so matching high ranks cannot prove a passage answers the question. Read the explanation; no Azure account is needed.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Measuring Search](13-measuring-search.md) · [Course map](README.md) · [Next lesson: Data Ingestion →](15-data-ingestion.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
