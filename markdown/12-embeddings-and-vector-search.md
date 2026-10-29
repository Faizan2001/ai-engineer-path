# Embeddings and Vector Search

*Section 3: RAG with LLM Zoomcamp · Lesson 12 of 42 · about 2 weeks, plus 2 hours*

**Before you start, check that** Ask MDN v0.2's chat page runs, and its log shows a search tool call when you ask a CSS question.

## Introduction

> **Keyword search reads spelling. Today you hire a librarian who reads meaning.**

Keyword search only finds exact words. If someone asks about “centering” but the page says “alignment”, it can miss. Embeddings fix this.

An embedding turns text into a list of numbers, so texts with similar meaning end up close together. Searching by meaning is called vector search. Give this lesson two weeks; the course says it takes longer than most.

**After this, you can** search by meaning, for free, on your own laptop.

**The skill that lasts:** weighing trade-offs between ways of representing data.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain what an embedding is.
- Run vector search with three different tools.
- Split long pages into chunks.
- Build the search file Ask MDN will use online.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** Someone asks “How do I place something in the center?” Will a keyword search find a page titled “a box in the middle”?

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#embeddings-and-vector-search).

## Before you read

**Picture this:** A map of Dhaka where pages are pinned by meaning, not spelling. “Cheap fuchka near campus” and “affordable street snacks close to the university” share a street, while “campus Wi-Fi password” sits across town. An embedding is a page's coordinates, with hundreds of numbers instead of two, and vector search means: show me the nearest pins.

An embedding turns a text into a few hundred numbers: a point on a map of meaning. Texts with similar meanings sit close together, and search means finding the page points closest to the question point. Zoomcamp says “dot product” where this course says cosine: when vectors have length 1, they give the same ranking.

- **embedding**: a list of numbers that stands for a text's meaning
- **chunk**: a few paragraphs from a long page, embedded on their own

## Assignment

### Prefer watching?

- ▶ [Cosine Similarity, Clearly Explained](https://www.youtube.com/watch?v=e9U0QAFbfLI) (StatQuest with Josh Starmer, 10 min): Covers the same idea as the reading. Afterwards, write one sentence about it in your log.

### Day 1 · about 90 min

1. Read Google's [Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings) module for the big idea. Then Module 2: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/01-intro.md).
2. Before Day 2: lesson 02 installs sentence-transformers, which pulls in PyTorch; from PyPI on Linux that includes several GB of GPU libraries. On a slow connection or a small laptop, add the PyTorch CPU index to `pyproject.toml` as in uv's [PyTorch guide](https://docs.astral.sh/uv/guides/integration/pytorch/), then `uv add torch` before adding sentence-transformers, or work in a Codespace.

### Day 2 · about 90 min

3. [02 Embeddings](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/02-embeddings.md) (focus on cosine similarity) and [03 Embeddings dataset](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/03-embeddings-dataset.md).

### Day 3 · about 90 min

4. [04 Vector search](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/04-vector-search.md) and [05 minsearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/05-minsearch-vector.md).

### Day 4 · about 90 min

5. [06 RAG with vectors](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/06-rag-vector.md).

### Day 5 · about 90 min

6. [07 sqlitesearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/07-sqlitesearch-vector.md). This keeps your search index in one file, which is what Ask MDN will use online. Skip lesson 08 (pgvector) for now: you'll do it in [Postgres Search and Access Rules](29-postgres-search-and-access-rules.md), right when you need it.

### Day 6 · about 90 min

7. [09 ONNX embedder](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/09-onnx-embedder.md) (a smaller embedder that doesn't need PyTorch; Ask MDN will use it online) and [10 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/10-next-steps.md).

### Day 7 · about 90 min

8. Read [Chunking for longer texts](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/07-project-example/07-chunking.md). MDN pages can be long, so split each page into chunks of a few paragraphs, and keep the page ID on every chunk.
9. Keep two IDs: `page_id` identifies the source page; `chunk_id` identifies one piece. Store each piece's text and source URL. For evaluation and RRF, convert each ranked chunk list into a list of unique pages, keeping the first occurrence: `[A:1, A:2, B:1, C:1]` becomes `[A, B, C]`. B is now rank 2. Keep the matching chunks separately for the answer prompt. This is our course convention, not the only possible design.

### Days 8–11 · about 6 hours

10. Add to Ask MDN: build a sqlitesearch vector index of your chunked MDN data with the ONNX embedder. It runs on your own computer, so it's free. Compare its answers with keyword search on 5 practice questions. This is **Ask MDN v0.3**: it searches by meaning.

### Day 12 · campus track, about 45 min

11. Take 8 intents from your question bank and write each three ways: English, Bangla and Banglish. Embed all 24 sentences with today's embedder, then with one embedder whose model card lists Bengali among its training languages.
12. For each sentence and each other language, search only that language's sentences; a hit means the nearest one has the same intent. Record a hit rate per language pair and model in your log. Expect Banglish to be the hardest; your numbers here are the evidence. With 8 sentences per pair, one miss moves a score by 12.5 points, so treat this as a first signal and confirm it in [Multilingual Search](35-multilingual-search.md).

### Day 13 · under the hood, about 90 min

13. Without AI-written code, rebuild the vector search you've been using: in numpy, normalise your MDN chunk vectors, compute cosine similarity for a question as one matrix product, and take the top 5.
14. Compare it with sqlitesearch on 5 practice questions. Yours is exact; sqlitesearch's vector search is approximate by default: an index picks candidates, then only those are reranked exactly. So where the top 5 differ, check that your extra result really scores higher, and record how many of the 25 results match. Then time yours on 1,000 and 100,000 random unit vectors, and write one sentence on why sqlitesearch, like large systems, trades a little recall for speed.
15. Stop here when both checks are in your log.

### Memory check · 10 min

16. Close this page. In your log, answer from memory, then check:
   - Why can vector search find answers that keyword search misses? ([where to check](https://developers.google.com/machine-learning/crash-course/embeddings))
   - What does function calling let the model do? ([where to check](11-tools-and-the-agent-loop.md))
17. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why can vector search find answers that keyword search misses?</summary>

Embeddings can place texts with similar meanings near one another even when their words differ. Vector search can therefore retrieve useful paraphrases that keyword matching misses, but similarity does not guarantee relevance or correctness.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: What does function calling let the model do?</summary>

Function calling lets the model request a named tool with structured arguments. Your application decides whether to execute it and sends the result back; the model does not run the function itself.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [RAG Techniques notebooks (handy reference, not a course)](https://github.com/NirDiamant/RAG_Techniques)
- [Embeddings: what they are and why they matter](https://simonwillison.net/2023/Oct/23/embeddings/) by Simon Willison: the clearest plain-English introduction.
- [The Illustrated Word2vec](https://jalammar.github.io/illustrated-word2vec/) by Jay Alammar: pictures of how words turn into numbers.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Tools and the Agent Loop](11-tools-and-the-agent-loop.md) · [Course map](README.md) · [Next lesson: Measuring Search →](13-measuring-search.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
