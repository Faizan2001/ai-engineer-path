# Hybrid Search

*Section 3: RAG with LLM Zoomcamp · Lesson 12 of 30 · about 3 hours*

## Introduction

MDN questions mix meaning (“how do I center a box?”) with exact names (`justify-content`). Keyword search is great with names. Vector search is great with meaning.

Hybrid search runs both and combines the results, so you get the best of each.

## Lesson overview

By the end of this lesson, you should be able to:

- Know when each kind of search does better.
- Combine two result lists with Reciprocal Rank Fusion (RRF).
- Know what reranking (a second sorting step) adds.

## Assignment

1. Read Module 6 lessons [02 Hybrid search](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/06-best-practices/02-hybrid-search.md) and [03 Reranking](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/06-best-practices/03-reranking.md). They were recorded in 2024, so some code is old. Take the ideas, not the code.
2. Write your own RRF function, about 15 lines. The idea is simple: a page gets more points the higher it ranks in each list, and its points are added up.
3. Add to Ask MDN: a `hybrid_search()` function that runs both searches and combines them with your RRF function.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [What does RRF use from each result list?](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/06-best-practices/02-hybrid-search.md)
- [When does keyword search beat vector search?](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/06-best-practices/02-hybrid-search.md)

## Additional resources

These are optional. Use them if you want to go further.

- [RAG Techniques: reranking and fusion notebooks](https://github.com/NirDiamant/RAG_Techniques)

---

[← Previous: Embeddings and Vector Search](11-embeddings-and-vector-search.md) · [Course map](README.md) · [Next lesson: ML Basics: Measuring Quality →](13-ml-basics-measuring-quality.md)
