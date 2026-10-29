# LangGraph

*Section 4: Agents · Lesson 23 of 42 · about 9.5 hours*

**Before you start, check that** your hand-written loop has a step limit and a second tool, and logs every step.

## Introduction

> **Your hand-written loop forgets everything and can't wait. LangGraph adds memory and patience.**

LangGraph is a framework for building agents. It adds what your hand-written loop doesn't have: saved state (memory), branches, and a way to pause and wait for a person.

You'll use it for the rest of the path. Take your time; your next project depends on it.

**After this, you can** build agents that remember, branch and wait for a person.

**The skill that lasts:** designing where a human steps in.

## Lesson overview

By the end of this lesson, you should be able to:

- Build a graph (a map of steps) that keeps state.
- Give an agent memory.
- Pause for a person's approval with interrupts.
- Keep useful conversation context within a budget without changing permissions.

## Before you read

A graph is your agent loop drawn as boxes (nodes) and arrows (edges), all sharing one notebook called the state. A checkpointer saves that notebook after every box, which is what lets a run pause for a person and carry on later.

- **state**: the shared data every node reads and updates
- **interrupt**: a pause that waits for a person's input

## Assignment

### Days 1–3 · about 3 hours

1. LangChain Academy [Intro to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph), Module 1: the simple graph, chain, router, agent and agent-with-memory lessons only (skip Studio and deployment). Some notebooks use LangSmith for tracing; a free [LangSmith](https://docs.smith.langchain.com/) account is enough, or skip those parts. Write the `langgraph` version you installed in your log.
2. Stop each Day when one notebook runs and you can say in one sentence what its graph does.

### Days 4–5 · two light days, about 45 min each

3. Module 2. **Day 4:** the state schema lesson. **Day 5:** the state reducer lesson. Skip the message-trimming, summarising and external-memory notebooks; you'll build your own context selection on Day 9.

### Days 6–7 · about 1 hour each

4. **Day 6:** read the [interrupts guide](https://docs.langchain.com/oss/python/langgraph/interrupts), then Module 3's breakpoints lesson. **Day 7:** the editing-state/human-feedback lesson. Their notebooks pause with breakpoints (`interrupt_before`); that's fine for learning, but your project uses `interrupt()`. Skip streaming, dynamic breakpoints and time travel.

### Day 8 · about 90 min

5. Reread the approvals part of the [interrupts guide](https://docs.langchain.com/oss/python/langgraph/interrupts). For approvals, use `interrupt()` and resume with `Command(resume=...)`; the docs recommend static breakpoints only for debugging.
6. Rebuild your loop in LangGraph with one interrupt before a tool runs. In your log, list what LangGraph now does that you wrote by hand.

### Day 9 · about 90 min

7. Read the “anatomy of effective context” section of Anthropic’s [context engineering guide](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents), for 15 minutes. Think of context as what the model can see now. A saved conversation, a summary and a permission record serve different jobs.
8. Build a small context-selection function. Set an input budget below your chosen model’s context limit, reserving space for output and any reasoning allowance. Use its tokenizer/counting method where available; reject an oversized request safely if you cannot fit it. Keep instructions, the current question and recent complete turns; select relevant evidence and cap tool output size. Never split a tool call from its result.
9. Try a synthetic 20-turn conversation with an early browser/version constraint. Check that your selection preserves that constraint or asks the user to repeat it. Keep critical task facts in explicit application state; an optional model-made summary can be wrong and must not supply authorization or approval. Test one oversized tool result and one lost constraint.
10. Stop here: long-term personalized memory is optional. In [Login](30-login.md) and [Fresh Data](31-fresh-data.md), you will also restrict saved state by owner and invalidate stale evidence.

### Memory check · 10 min

11. Close this page. In your log, answer from memory, then check:
   - What belongs in model context, and what must remain outside its authority? ([where to check](23-langgraph.md))
   - Why put a limit on an agent's number of steps? ([where to check](22-agent-fundamentals.md))
12. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What belongs in model context, and what must remain outside its authority?</summary>

Supply the relevant task, complete recent interactions and permitted evidence within a budget. Keep identity, permissions, approvals and operation IDs in application-controlled state. A summary can help recall but cannot grant access or approve a write.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Why put a limit on an agent's number of steps?</summary>

A model can keep requesting tools or repeat an unproductive cycle. An application-enforced step limit bounds those repeated actions and their resource use, although separate timeouts and cost limits are still needed.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [Hugging Face Agents Course, Unit 2 LangGraph pages](https://huggingface.co/learn/agents-course/en/unit2/langgraph/introduction)
- [Google/Kaggle AI Agents Intensive](https://www.kaggle.com/learn-guide/5-day-agents) — optional alternative: Day 3, Context Engineering: Sessions & Memory. Read the concepts or watch its recording; skip the ADK rewrite.
- [Berkeley Advanced LLM Agents, Spring 2025](https://llmagents-learning.org/sp25) — optional depth: Yu Su’s lecture on reasoning, memory and planning. Research context, not another prerequisite.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Agent Fundamentals](22-agent-fundamentals.md) · [Course map](README.md) · [Next lesson: Safe Tools →](24-safe-tools.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
