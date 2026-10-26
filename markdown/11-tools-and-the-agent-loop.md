# Tools and the Agent Loop

*Section 3: RAG with LLM Zoomcamp · Lesson 11 of 32 · about 1 week*

**Before you start, check that** your practice questions and unanswerable questions are committed in `ask-mdn`.

## Introduction

> **The model can't run code. It can only ask nicely. Your code decides.**

The course calls Module 1 “Agentic RAG”. Here's what that means: instead of always searching, you give the model a search tool and let it decide when to use it. This is called function calling.

You'll also give Ask MDN its first screen, so you can chat with it and show it to someone.

**After this, you can** let a model call your own functions from a chat screen.

**The skill that lasts:** designing tools a model can use well.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain function calling: the model asks your code to run a function.
- Build a simple agent loop: ask, act, look at the result, repeat.
- Put a chat screen on Ask MDN.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** Can a language model run your Python function by itself? If not, who does?

## Before you read

The model can't run code. It sends back a structured request: “call search with this query”. Your code runs it, sends back the result and asks again. This repeats until the model answers in plain text, or a step limit stops it.

- **function call**: the model's structured request for your code to run a named function
- **developer message**: Zoomcamp's name for the message that holds the agent's instructions

## Assignment

### Prefer watching?

- ▶ [What is Tool Calling? Connecting LLMs to Your Data](https://www.youtube.com/watch?v=h8gMhXYAv1k) (IBM Technology, 5 min): Covers the same idea as the reading. Afterwards, write one sentence about it in your log.

### Day 1 · about 90 min

1. [11 Agents intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/11-agents-intro.md) and [12 RAG revision](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/12-rag-revision.md) (optional if RAG feels clear).

### Day 2 · about 90 min

2. [13 Function calling](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/13-function-calling.md). Watch how the tool's result is sent back to the model.

### Day 3 · about 90 min

3. [14 Agentic loop](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/14-agentic-loop.md). Keep your loop; you'll extend it in Section 4.

### Day 4 · about 90 min

4. **No AI for this one:** close the course code and rewrite the agent loop from memory, in 20 minutes at most. Then compare and fix the gaps.
5. Add to Ask MDN: turn your search into a tool, let the model call it, and log every call.
6. Before putting the loop in the chat page, add a maximum of 8 model/tool rounds, a timeout on each network call and a clear stopped status. Test with a fake model that keeps requesting search: it must terminate at the limit. Keep tools read-only here. A step limit is not a guarantee about cost; record usage too.

### Day 5 · about 90 min

7. Build a small Streamlit chat page for Ask MDN (about 20 lines, using what you learned in Structured Output and Errors). This is **Ask MDN v0.2**: you can chat with it, and it decides when to search. Ask it 5 of your practice questions, then show it to a friend if one is around.

### Memory check · 10 min

8. Close this page. In your log, answer from memory, then check:
   - What stops an agent loop from running forever? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/14-agentic-loop.md))
   - What is the difference between precision and recall? ([where to check](10-ml-basics-measuring-quality.md))
9. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What stops an agent loop from running forever?</summary>

The loop normally ends when the model produces a final answer without requesting another tool. A step limit enforced by your code stops repeated tool calls even if the model never decides to finish.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: What is the difference between precision and recall?</summary>

For search, precision is the fraction of retrieved items that are relevant; recall is the fraction of all relevant items that were retrieved. In classification, the corresponding formulas are TP/(TP+FP) and TP/(TP+FN).

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## You're done when

- [ ] Your loop shows the search result being passed back to the model.
- [ ] A fake model that never finishes is stopped after at most 8 rounds; a stalled network call times out.

## Additional resources

These are optional. Use them if you want to go further.

- [Anthropic, Building effective agents (worth a second read now)](https://www.anthropic.com/engineering/building-effective-agents)
- Zoomcamp [15 Frameworks](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/15-frameworks.md) and [16 Other frameworks](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/16-other-frameworks.md): a tour of agent frameworks. This path uses LangGraph in Section 4.
- [You should write an agent](https://fly.io/blog/everyone-write-an-agent/) by Thomas Ptacek, Fly.io: why writing a small agent yourself teaches more than reading about one.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: ML Basics: Measuring Quality](10-ml-basics-measuring-quality.md) · [Course map](README.md) · [Next lesson: Embeddings and Vector Search →](12-embeddings-and-vector-search.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
