# LangGraph

*Section 4: Agents · Lesson 21 of 32 · about 1.5 weeks*

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

## Before you read

A graph is your agent loop drawn as boxes (nodes) and arrows (edges), all sharing one notebook called the state. A checkpointer saves that notebook after every box, which is what lets a run pause for a person and carry on later.

- **state**: the shared data every node reads and updates
- **interrupt**: a pause that waits for a person's input

## Assignment

### Days 1–3 · about 4.5 hours

1. LangChain Academy [Intro to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph), Module 1: Introduction (skip its deployment lesson). Some notebooks use LangSmith for tracing; a free [LangSmith](https://docs.smith.langchain.com/) account is enough, or skip those parts. Write the `langgraph` version you installed in your log, and skip LangGraph Studio for now.

### Days 4–5 · about 3 hours

2. Module 2: State and Memory.

### Days 6–7 · about 3 hours

3. Read the [interrupts guide](https://docs.langchain.com/oss/python/langgraph/interrupts) first. Then Module 3: UX and Human-in-the-Loop. Its notebooks pause with breakpoints (`interrupt_before`); that's fine for learning, but your project uses `interrupt()`. Skip the dynamic-breakpoints and time-travel notebooks.

### Day 8 · about 90 min

4. Reread the approvals part of the [interrupts guide](https://docs.langchain.com/oss/python/langgraph/interrupts). For approvals, use `interrupt()` and resume with `Command(resume=...)`; the docs recommend static breakpoints only for debugging.
5. Rebuild your loop in LangGraph with one interrupt before a tool runs. In your log, list what LangGraph now does that you wrote by hand.

### Memory check · 10 min

6. Close this page. In your log, answer from memory, then check:
   - How do you pause a graph for a person, and how do you continue it? ([where to check](https://docs.langchain.com/oss/python/langgraph/interrupts))
   - Why put a limit on an agent's number of steps? ([where to check](20-agent-fundamentals.md))
7. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [Hugging Face Agents Course, Unit 2 LangGraph pages](https://huggingface.co/learn/agents-course/en/unit2/langgraph/introduction)
- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) by Anthropic: what to put in an agent's memory, and what to leave out.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Agent Fundamentals](20-agent-fundamentals.md) · [Course map](README.md) · [Next lesson: Safe Tools →](22-safe-tools.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
