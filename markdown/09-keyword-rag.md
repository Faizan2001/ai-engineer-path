# Keyword RAG

*Section 3: RAG with LLM Zoomcamp · Lesson 9 of 32 · about 1 week*

## Introduction

*Ask a model about a CSS property and it answers like a confident senior, even when it's wrong. These fourteen weeks hand it an open book: MDN. Ask MDN learns to find the right page, show it, say “I don't know” when the page isn't there, and earn a report card it can't charm.*

> **An open-book exam is easy if you find the right page. RAG is mostly finding.**

RAG (retrieval-augmented generation) is like an open-book exam. First you find the right pages, then the model answers using only those pages.

You'll start with plain keyword search because it's fast, cheap and easy to debug. This lesson also starts Ask MDN, an assistant for web docs that you'll keep improving until the end of the path.

**True story (2024): an airline chatbot invents a refund rule.** Air Canada's website chatbot told a grieving passenger he could claim a bereavement discount after booking. The airline's own policy said he couldn't, and a tribunal ordered it to pay. [Source](https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know)

**What you'll do differently:** answer only from the pages you retrieved, and show them, so an answer can't contradict its source.

**After this, you can** make a model answer from your documents, not from memory.

**The skill that lasts:** grounding answers in sources you can point to.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain each step of RAG, from question to answer.
- Search documents with minsearch, a tiny search library.
- Build a prompt from search results.

## Try it first

Two minutes, before the reading. Guess first: a wrong guess makes the right answer stick.

**Predict:** A model has never seen your university's notice board. How could it still answer questions about it?

## Before you read

RAG means “search first, then ask”. Your code finds 3 to 5 pages, pastes them into the prompt and says “answer only from these”. If search brings the wrong pages, no model can save the answer, so most of the work is search.

- **front matter**: the block between --- lines at the top of each MDN file: title, slug and more
- **boosting**: making matches in one field, like the title, count more

## Assignment

### Prefer watching?

- ▶ [What is Retrieval-Augmented Generation (RAG)?](https://www.youtube.com/watch?v=T-D1OfcDW1M) (IBM Technology, 7 min): Covers the same idea as the reading. Afterwards, write one sentence about it in your log.

### Day 1 · about 90 min

1. Zoomcamp Module 1: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/01-intro.md), [03 RAG](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/03-rag.md) (notice why plain models don't know your data) and [04 Dataset](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/04-dataset.md). You already did 02 during setup.

### Day 2 · about 90 min

2. [05 Search](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/05-search.md) (watch how boosting fields changes results) and [06 Building the prompt](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/06-building-prompt.md).

### Day 3 · about 90 min

3. [07 LLM](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/07-llm.md) (it shows how to calculate the price, like you did for posters) and [08 RAG helper](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/08-rag-helper.md).

### Day 4 · about 90 min

4. [09 Data ingestion](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/09-data-ingestion.md) and, only if you have time, [10 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/10-rag-next-steps.md).
5. Start Ask MDN: create a **public** repo called `ask-mdn`. Download only the two folders you need from [mdn/content](https://github.com/mdn/content) (the whole repo is about 500 MB): `git clone --depth 1 --filter=blob:none --sparse https://github.com/mdn/content.git`, then inside it run `git sparse-checkout set files/en-us/web/css/reference/properties files/en-us/web/javascript/reference/global_objects`.
6. Write the commit ID (`git rev-parse HEAD`) in your README. That exact version is your data from now on, so your tests stay fair.

### Day 5 · about 90 min

7. Load the two folders into minsearch: CSS properties and JavaScript global objects. Each MDN page is a Markdown file that starts with front matter between `---` lines and contains `{{macro}}` lines. Read the title and slug from the front matter, drop the macro lines and keep the text. Ask it three questions and look at what it finds. This is **Ask MDN v0.1**: it finds the right pages for a question. Commit early and often, with messages that say what changed.

### Memory check · 10 min

8. Close this page. In your log, answer from memory, then check:
   - What are the steps of RAG, from question to answer? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/03-rag.md))
   - What makes structured output better than free text for an app? ([where to check](07-structured-output-and-errors.md))
9. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [Chip Huyen, AI Engineering, chapter 6, section “RAG” (book)](https://github.com/chiphuyen/aie-book)
- [Understanding the BM25 full-text search algorithm](https://emschwartz.me/understanding-the-bm25-full-text-search-algorithm/) by Evan Schwartz: how keyword search decides which page wins, in plain words.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Project: Poster Reader](08-project-poster-reader.md) · [Course map](README.md) · [Next lesson: ML Basics: Measuring Quality →](10-ml-basics-measuring-quality.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
