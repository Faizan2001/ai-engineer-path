# Embeddings and Vector Search

*Section 3: RAG with LLM Zoomcamp · Lesson 11 of 30 · about 2 weeks*

## Introduction

Keyword search only finds exact words. If someone asks about “centering” but the page says “alignment”, it can miss. Embeddings fix this.

An embedding turns text into a list of numbers, so texts with similar meaning end up close together. Searching by meaning is called vector search. Give this lesson two weeks; the course says it takes longer than most.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain what an embedding is.
- Run vector search with three different tools.
- Build the search file Ask MDN will use online.

## Assignment

### Day 1

1. Read Google's [Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings) module for the big idea. Then Module 2: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/01-intro.md) and [02 Embeddings](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/02-embeddings.md).

### Day 2

2. [03 Embeddings dataset](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/03-embeddings-dataset.md).

### Day 3

3. [04 Vector search](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/04-vector-search.md) and [05 minsearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/05-minsearch-vector.md).

### Day 4

4. [06 RAG with vectors](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/06-rag-vector.md).

### Day 5

5. [07 sqlitesearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/07-sqlitesearch-vector.md). This keeps your search index in one file, which is what Ask MDN will use online.

### Day 6

6. [08 pgvector](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/08-pgvector.md) (vector search inside a Postgres database). You'll come back to it in Section 5.

### Day 7

7. [09 ONNX embedder](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/09-onnx-embedder.md) and [10 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/10-next-steps.md).

### Days 8–10

8. Add to Ask MDN: build a sqlitesearch vector index of your MDN data with the course's local embedding model. It runs on your own computer, so it's free. Compare its answers with keyword search on 5 questions.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [Why can vector search find answers that keyword search misses?](https://developers.google.com/machine-learning/crash-course/embeddings)
- [Why does Ask MDN use sqlitesearch instead of minsearch?](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/07-sqlitesearch-vector.md)

## Additional resources

These are optional. Use them if you want to go further.

- [RAG Techniques notebooks (handy reference, not a course)](https://github.com/NirDiamant/RAG_Techniques)

---

[← Previous: Tools and the Agent Loop](10-tools-and-the-agent-loop.md) · [Course map](README.md) · [Next lesson: Hybrid Search →](12-hybrid-search.md)
