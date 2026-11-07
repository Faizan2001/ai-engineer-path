# Embeddings and Vector Search

*Section 3: RAG with LLM Zoomcamp · Lesson 12 of 41 · about 1.5 weeks*

**Before you start, check that** Ask MDN v0.2's chat page runs, and its log shows a search tool call when you ask a CSS question.

## Introduction

> **Keyword search reads spelling. Vector search reads meaning.**

Keyword search only finds exact words. If someone asks about “centering” but the page says “alignment”, it can miss. Embeddings fix this.

An embedding turns text into a list of numbers, so texts with similar meaning end up close together. Searching by meaning is called vector search.

**After this, you can** search by meaning, for free, on your own laptop.

**The skill that lasts:** weighing trade-offs between ways of representing data.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain what an embedding is.
- Run vector search with minsearch and with sqlitesearch.
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

> **Why:** Get the big idea of embeddings, and avoid a multi-GB PyTorch install before Day 2.
>
> **Skip if** you can explain embeddings and cosine similarity, and you already have CPU-only PyTorch.

1. Read Google's [Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings) module for the big idea. Then Module 2: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/01-intro.md).
2. Before Day 2: Zoomcamp lesson 02 installs sentence-transformers, which also installs PyTorch. On Linux that can mean several GB of GPU libraries. On a slow connection or a small laptop, first add the PyTorch CPU index to `pyproject.toml` as in uv's [PyTorch guide](https://docs.astral.sh/uv/guides/integration/pytorch/) and run `uv add torch`, then add sentence-transformers. Or work in a Codespace.
3. Stop when you can explain an embedding to a friend in two lines, and your PyTorch plan is sorted.

### Day 2 · about 90 min

> **Why:** Turn text into vectors and compare them with cosine similarity.
>
> **Skip if** you've embedded text and ranked it by cosine similarity before.

4. [02 Embeddings](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/02-embeddings.md) (focus on cosine similarity) and [03 Embeddings dataset](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/03-embeddings-dataset.md).
5. Predict first: write three sentences, two about the same thing. Which pair will score highest? Check with cosine similarity.
6. Stop when the FAQ embeddings are generated in your notebook.

### Day 3 · about 90 min

> **Why:** Search by meaning, then swap it into your RAG code.
>
> **Skip if** you've built vector search and RAG on top of it before.

7. [04 Vector search](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/04-vector-search.md), [05 minsearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/05-minsearch-vector.md) and [06 RAG with vectors](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/06-rag-vector.md).
8. Ask a question in your own words that shares no key word with the FAQ answer. The right document should still come back in the top 5.
9. **No AI for this one:** close the page and rewrite the top-5 search in numpy from memory, in 15 minutes. Stop when it matches the page's results.

### Day 4 · about 90 min

> **Why:** Keep the vector index in one file, the way Ask MDN will run online.
>
> **Don't skip:** Ask MDN uses sqlitesearch from here on.

10. [07 sqlitesearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/07-sqlitesearch-vector.md). This keeps your search index in one file, which is what Ask MDN will use online. It's approximate by default: an index picks candidates, trading a little recall for speed. Skip lesson 08 (pgvector) for now. You don't need it yet.
11. Stop when your index is saved in a file and still works after you restart the notebook.

### Day 5 · about 60 min

> **Why:** Switch to a small embedder that runs without PyTorch, so the online app stays light.
>
> **Don't skip:** Ask MDN uses this embedder online.

12. [09 ONNX embedder](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/09-onnx-embedder.md): a smaller embedder that doesn't need PyTorch. Ask MDN will use it online.
13. Stop when the ONNX embedder gives you a vector for a sentence of your own.

### Day 6 · about 90 min

> **Why:** Split long pages into chunks and track which page each chunk came from.
>
> **Don't skip:** Search scores and citations depend on these IDs and on `unique_pages`.

14. Read [Chunking for longer texts](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/07-project-example/07-chunking.md). MDN pages can be long, so split each page into chunks of a few paragraphs, and keep the page ID on every chunk.
15. Give every chunk two IDs: `page_id` for the source page and `chunk_id` for the piece. Store the chunk's text and its source URL too.
16. Search results get scored by page, not by chunk. Write a small function, `unique_pages(chunks)`, that turns a ranked list of chunks into a ranked list of different pages, keeping each page's first appearance: `[A:1, A:2, B:1, C:1]` becomes `[A, B, C]`, so B is now rank 2. Keep the matching chunks too, because the answer prompt needs them.

### Days 7–10 · about 6 hours

> **Why:** Build Ask MDN v0.3: search by meaning over your own chunked docs.
>
> **Don't skip:** Every later Ask MDN version uses this index.

17. Add to Ask MDN: build a vector search over your chunked MDN data with the ONNX embedder. It runs on your own computer, so it's free. Do one piece a Day.
18. **Day 7:** split every MDN page into chunks, keeping `page_id`, `chunk_id`, text and source URL. Stop when you can print all the chunks of one page.
19. **Day 8:** build the sqlitesearch vector index of your chunks with the ONNX embedder. Embedding every chunk takes a while, so build it once and keep the file. Stop when the index file exists and one question returns 5 chunks.
20. **Day 9:** write `vector_search(question)`. It returns the top chunks with their `page_id` and source URL, in the same shape as your keyword search, so the rest of Ask MDN can use either one.
21. **Day 10:** compare its answers with keyword search on 5 practice questions. This is **Ask MDN v0.3**: it searches by meaning.

### Memory check · 10 min

22. Close this page. In your log, answer from memory, then check:
   - Why can vector search find answers that keyword search misses? ([where to check](https://developers.google.com/machine-learning/crash-course/embeddings))
   - What does function calling let the model do? ([where to check](11-tools-and-the-agent-loop.md))
23. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why can vector search find answers that keyword search misses?</summary>

Embeddings put texts with similar meanings close together, even when the words differ. So vector search can find paraphrases that keyword search misses. But a close match isn't always a relevant or correct one.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: What does function calling let the model do?</summary>

The model can ask for a named tool to be run, with arguments in a fixed format. Your code decides whether to run it and sends the result back. The model never runs the function itself.

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

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 7 Nov 2026
