# Hybrid Search

*Section 3: RAG with LLM Zoomcamp · Lesson 14 of 42 · about 4.5 hours*

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
- Tell a high ranking apart from real evidence that the question can be answered.

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

1. Read Module 6 lessons [02 Hybrid search](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/02-hybrid-search.md) and [03 Reranking (RRF)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/03-reranking.md). They were recorded in 2024, so some code is old. Take the ideas, not the code. Skip the Elasticsearch part of 03, because its built-in RRF needs a paid licence. Lesson 02 uses k = 1 and lesson 03 uses k = 60. Use 60 in Ask MDN.

### Day 2 · about 90 min

2. **No AI for this one:** write your own RRF function, about 15 lines. A page gets 1/(60 + rank) points from each list it appears in, and its points are added up. Ranks start at 1.
3. Add a `hybrid_search()` that runs keyword search and vector search, turns each chunk list into a list of different pages with `unique_pages`, and combines the two with your RRF function.
4. Test two cases: repeated chunks from one page, and a page that appears in only one list.

### Day 3 · about 90 min

5. Measure Hit Rate@5 and MRR@5 for hybrid search on your practice questions and compare with keyword and vector search.
6. A high RRF score doesn't mean the answer exists, so don't use it as a cutoff. Ask the model instead. Put the top passages in a structured prompt. It must return `supported` (true or false), an answer only if supported, and the IDs and short quotes of the chunks that support it.
7. Check the reply in code: reject unknown chunk IDs and quotes that are not in those chunks. If the evidence is missing, answer “I don't know from these sources.”
8. This check can still be wrong. Look at its decisions on your 20 practice questions and 10 unanswerable ones, including believable questions whose answer isn't in the docs. Count unsupported answers and unnecessary refusals separately.
9. This is **Ask MDN v0.4**: it combines both searches and says “I don't know” when it can't support an answer.

### Memory check · 10 min

10. Close this page. In your log, answer from memory, then check:
   - What does RRF use from each result list? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/02-hybrid-search.md))
   - What does Hit Rate@5 measure? ([where to check](13-measuring-search.md))
11. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What does RRF use from each result list?</summary>

It uses each page's position in each list, not the raw scores. A page gets 1/(k + position) points from every list it appears in, and the points are added. The result is a combined ranking, not the chance that the answer exists.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: What does Hit Rate@5 measure?</summary>

The share of questions where at least one right page appears in the top 5 results. It doesn't tell you whether the final answer is correct, or whether the right page was 1st or 5th.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [RAG Techniques: reranking and fusion notebooks](https://github.com/NirDiamant/RAG_Techniques)
- [Better RAG results with reciprocal rank fusion and hybrid search](https://www.assembled.com/blog/better-rag-results-with-reciprocal-rank-fusion-and-hybrid-search) by Assembled: a real team's results with the exact method you just built.
- [Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) by Anthropic: how adding a little context to each chunk cut failed searches.
- [How RRF scoring works](https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking): it explains the formula. Matching high ranks can't prove that a passage answers the question. You don't need an Azure account.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Measuring Search](13-measuring-search.md) · [Course map](README.md) · [Next lesson: Data Ingestion →](15-data-ingestion.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
