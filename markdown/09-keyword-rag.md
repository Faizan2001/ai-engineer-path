# Keyword RAG

*Section 3: RAG with LLM Zoomcamp · Lesson 9 of 30 · about 1 week*

## Introduction

RAG (retrieval-augmented generation) is like an open-book exam. First you find the right pages, then the model answers using only those pages.

You'll start with plain keyword search because it's fast, cheap and easy to debug. This lesson also starts Ask MDN, an assistant for web docs that you'll keep improving until the end of the path.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain each step of RAG, from question to answer.
- Search documents with minsearch, a tiny search library.
- Build a prompt from search results.

## Assignment

### Day 1

1. Zoomcamp Module 1: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/01-intro.md), [03 RAG](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/03-rag.md) and [04 Dataset](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/04-dataset.md). You already did 02 during setup.

### Day 2

2. [05 Search](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/05-search.md) and [06 Building the prompt](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/06-building-prompt.md).

### Day 3

3. [07 LLM](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/07-llm.md) and [08 RAG helper](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/08-rag-helper.md).

### Day 4

4. [09 Data ingestion](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/09-data-ingestion.md) and [10 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/10-rag-next-steps.md).
5. Start Ask MDN: clone [mdn/content](https://github.com/mdn/content) and write its commit ID (the SHA) in your README. That exact version is your data from now on, so your tests stay fair.
6. Load two folders into minsearch: CSS properties (`files/en-us/web/css/reference/properties`) and JavaScript global objects (`files/en-us/web/javascript/reference/global_objects`). Ask it three questions and look at what it finds.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [Why start with keyword search before vector search?](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/05-search.md)
- [What goes into a RAG prompt?](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/06-building-prompt.md)

## Additional resources

These are optional. Use them if you want to go further.

- [Chip Huyen, chapter 6, section “RAG” (book)](https://github.com/chiphuyen/aie-book)

---

[← Previous: Project: Poster Reader](08-project-poster-reader.md) · [Course map](README.md) · [Next lesson: Tools and the Agent Loop →](10-tools-and-the-agent-loop.md)
