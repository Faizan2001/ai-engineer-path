# LangGraph

*Section 4: Agents · Lesson 23 of 42 · about 9.5 hours*

**Before you start, check that** your hand-written loop has a step limit and a second tool, and logs every step.

## Introduction

> **Your hand-written loop forgets everything and can't pause. LangGraph adds memory and a way to wait for a person.**

LangGraph is a framework for building agents. It adds what your hand-written loop doesn't have: saved state (memory), branches, and a way to pause and wait for a person.

You'll use it for the rest of the path. Take your time; your next project depends on it.

**After this, you can** build agents that remember, branch and wait for a person.

**The skill that lasts:** designing where a human steps in.

## Lesson overview

By the end of this lesson, you should be able to:

- Build a graph (a map of steps) that keeps state.
- Give an agent memory.
- Pause for a person's approval with interrupts.
- Choose what conversation context to send to the model, within a budget, without changing permissions.

## Before you read

A graph is your agent loop drawn as boxes (nodes) and arrows (edges), all sharing one notebook called the state. A checkpointer saves that notebook after every box, which is what lets a run pause for a person and carry on later.

- **state**: the shared data every node reads and updates
- **interrupt**: a pause that waits for a person's input

## Assignment

### Days 1–3 · about 3 hours

> **Why:** Learn LangGraph's basics: graphs, routers, agents and memory.
>
> **Skip if** you've built a LangGraph agent with memory before.

1. Do LangChain Academy's [Intro to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph), Module 1: the simple graph, chain, router, agent and agent-with-memory lessons only (skip Studio and deployment).
2. Some notebooks use LangSmith for tracing. A free [LangSmith](https://docs.smith.langchain.com/) account is enough, or skip those parts. Write the `langgraph` version you installed in your log.
3. Stop each Day when one notebook runs and you can say in one sentence what its graph does.

### Days 4–5 · two light days, about 45 min each

> **Why:** Learn how LangGraph's state and reducers work.
>
> **Skip if** you know LangGraph state schemas and reducers.

4. Do Module 2. **Day 4:** the state schema lesson. **Day 5:** the state reducer lesson. Skip the message-trimming, summarising and external-memory notebooks. You'll build your own context selection on Day 9.

### Days 6–7 · about 1 hour each

> **Why:** Learn to pause a run for a person and edit its state.
>
> **Skip if** you've used LangGraph interrupts and human feedback before.

5. **Day 6:** read the [interrupts guide](https://docs.langchain.com/oss/python/langgraph/interrupts), then do Module 3's breakpoints lesson.
6. **Day 7:** do the editing-state and human-feedback lesson.
7. These notebooks pause with breakpoints (`interrupt_before`). That's fine for learning, but your project uses `interrupt()`. Skip streaming, dynamic breakpoints and time travel.

### Day 8 · about 90 min

> **Why:** Rebuild your loop in LangGraph, with an approval pause before a tool runs.
>
> **Don't skip:** The next project starts from this loop.

8. Reread the approvals part of the [interrupts guide](https://docs.langchain.com/oss/python/langgraph/interrupts). For approvals, use `interrupt()` and resume with `Command(resume=...)`; the docs recommend static breakpoints only for debugging.
9. Rebuild your loop in LangGraph with one interrupt before a tool runs. In your log, list what LangGraph now does that you wrote by hand.

### Day 9 · about 90 min

> **Why:** Choose what the model sees each turn, within a budget, without losing key facts.
>
> **Don't skip:** The project's context checks come from here.

10. Read the “anatomy of effective context” section of Anthropic’s [context engineering guide](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents), for 15 minutes. Think of context as what the model can see right now. A saved conversation, a summary and a permission record do different jobs.
11. Build a small context-selection function that picks what to send to the model. Set an input budget below your model’s context limit, leaving room for the output. Count tokens with the model's own tokenizer where you can. If a request is still too big, reject it safely.
12. Always keep the instructions, the current question and recent complete turns. Add relevant evidence, and cap the size of tool output. Never separate a tool call from its result.
13. Test it on a made-up 20-turn conversation where the user states a browser or version constraint early on. Check that your selection keeps that constraint, or asks the user to repeat it. Keep critical task facts in explicit application state. A summary written by the model can be wrong, so never let it grant authorization or approval. Also test one oversized tool result and one lost constraint.
14. Stop here. Long-term personalised memory is optional, so skip it for now.

### Memory check · 10 min

15. Close this page. In your log, answer from memory, then check:
   - What belongs in model context, and what must remain outside its authority? ([where to check](23-langgraph.md))
   - Why put a limit on an agent's number of steps? ([where to check](22-agent-fundamentals.md))
16. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What belongs in model context, and what must remain outside its authority?</summary>

Send the model the relevant task, complete recent turns and allowed evidence, within a budget. Keep identity, permissions, approvals and operation IDs in state that your code controls. A summary can help the model remember, but it can't grant access or approve a write.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Why put a limit on an agent's number of steps?</summary>

A model can keep asking for tools or repeat a cycle that gets nowhere. A step limit enforced by your code caps those repeats and what they cost. You still need separate timeouts and cost limits.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [Hugging Face Agents Course, Unit 2 LangGraph pages](https://huggingface.co/learn/agents-course/en/unit2/langgraph/introduction)
- [Google/Kaggle AI Agents Intensive](https://www.kaggle.com/learn-guide/5-day-agents): an optional alternative. Day 3 is Context Engineering: Sessions & Memory. Read the concepts or watch the recording, and skip the ADK rewrite.
- [Berkeley Advanced LLM Agents, Spring 2025](https://llmagents-learning.org/sp25): optional depth. Yu Su’s lecture covers reasoning, memory and planning. It's research background, not another prerequisite.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Agent Fundamentals](22-agent-fundamentals.md) · [Course map](README.md) · [Next lesson: Safe Tools →](24-safe-tools.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
