# Agent Fundamentals

*Section 4: Agents · Lesson 21 of 41 · about 1 week*

**Before you start, check that** Ask MDN v1.0 is online, and your README has the held-back results table.

## Introduction

*Until now Ask MDN could only talk. Here it gets hands: three tools, and one of them, saving a note, changes things for real. Hands raise the stakes, because any page it reads can whisper instructions. By the end you can read its loop step by step, and nothing changes until a person says yes.*

> **An agent is a loop with opinions. Today you read its mind, step by step.**

You already built a small agent loop in Zoomcamp. Now you'll learn the words properly and improve that loop by hand, with no framework.

An agent works in a cycle: it thinks about what to do, takes an action (like calling a tool), looks at the result, and repeats. Knowing this cycle makes frameworks much easier to understand and debug.

**After this, you can** debug agent frameworks, because you've built the loop yourself.

**The skill that lasts:** debugging by reading what the agent actually did.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain thoughts, actions and observations: the agent cycle.
- Explain how messages and tools are sent to the model.
- Extend an agent loop in plain Python.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** If the tool an agent calls keeps failing, what stops the agent from trying forever?

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#agent-fundamentals).

## Before you read

The Hugging Face course shows what the API hides. Your message list becomes one long text with special markers, and older agents wrote their actions as plain text that code had to parse. OpenAI's tool calling does that parsing for you. It's the same think, act, observe loop with different wiring.

- **chat template**: the format that turns a message list into one prompt
- **ReAct**: a pattern where the model alternates reasoning and actions

## Assignment

### Day 1 · about 90 min

1. Hugging Face Agents Course, Unit 1: [What are agents?](https://huggingface.co/learn/agents-course/en/unit1/what-are-agents) and [Messages and special tokens](https://huggingface.co/learn/agents-course/en/unit1/messages-and-special-tokens).

### Day 2 · about 90 min

2. [Tools](https://huggingface.co/learn/agents-course/en/unit1/tools) and [Agent steps and structure](https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure).

### Day 3 · about 90 min

3. [Thoughts](https://huggingface.co/learn/agents-course/en/unit1/thoughts), [Actions](https://huggingface.co/learn/agents-course/en/unit1/actions) and [Observations](https://huggingface.co/learn/agents-course/en/unit1/observations). Stuck? Ask in the Hugging Face Discord's `#agents-course-questions` channel.

### Day 4 · about 90 min

4. **No AI for this one:** take the agent loop you wrote in Tools and the Agent Loop and add two things: a step limit (stop after 5 steps) and a second tool that returns a page's title. Log every step.

### Memory check · 10 min

5. Close this page. In your log, answer from memory, then check:
   - What are the three parts of the agent cycle? ([where to check](https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure))
   - What does RRF do with two result lists? ([where to check](14-hybrid-search.md))
6. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

## Additional resources

These are optional. Use them if you want to go further.

- [Hugging Face Agents Course, the rest of Unit 1](https://huggingface.co/learn/agents-course/en/unit1/introduction)
- [Andrew Ng, Agentic AI (the videos are free to watch)](https://www.deeplearning.ai/courses/agentic-ai)
- [What's next for AI agentic workflows](https://www.youtube.com/watch?v=sal78ACtGTc) by Andrew Ng (Sequoia Capital, 14 min): four agent design patterns in plain words.
- [How to build an agent](https://ampcode.com/notes/how-to-build-an-agent) by Thorsten Ball, Amp: a working coding agent in a few hundred lines; the loop really is that simple.
- [Designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/) by Simon Willison: how to give an agent a clear goal, good tools and safe limits.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Campus Knowledge Base](20-campus-knowledge-base.md) · [Course map](README.md) · [Next lesson: LangGraph →](22-langgraph.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
