# The AI Staircase

*Section 2: Foundations · Lesson 6 of 32 · about 1.5 hours*

## Introduction

> **The most senior move in AI engineering is often an if-statement.**

Think of AI tools as a staircase. Each step up gives you more power, but also more cost and more ways for things to go wrong.

The steps are: plain code, one model call, structured output, tool calling, RAG, agents, fine-tuning and training your own model. Good engineers stop at the lowest step that solves the problem.

**After this, you can** say “this needs plain code, not AI” and back it up.

**The skill that lasts:** problem framing: the simplest thing that works. Anthropic's own advice is to start with the simplest solution.

## Lesson overview

By the end of this lesson, you should be able to:

- Tell a workflow (fixed steps you write) from an agent (the model decides the steps).
- Know when not to use AI at all.
- Pick the right step for a feature.

## Assignment

1. Read Anthropic's [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents). Notice how a workflow is different from an agent.
2. Watch Barry Zhang's talk [How We Build Effective Agents](https://www.youtube.com/watch?v=D7_ipDqhtwk) (15 min, Anthropic). Write down his advice on when not to build an agent.
3. Exercise: list 5 features of your Campus Assistant idea or your Events platform. For each one, write the lowest step that solves it and why. At least one answer should be “plain code”. Keep this list: it becomes your Campus Assistant plan in [What's Next](32-whats-next.md).

### Memory check · 10 min

4. Close this page. In your log, answer from memory, then check:
   - What's the difference between a workflow and an agent? ([where to check](https://www.anthropic.com/engineering/building-effective-agents))
   - Why can the same question get different answers from a model? ([where to check](05-how-llms-work.md))
5. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [Chip Huyen's free Agents chapter](https://huyenchip.com/2025/01/07/agents.html)
- [12-factor agents (a checklist for agents you put into production)](https://github.com/humanlayer/12-factor-agents)
- [A practical guide to building agents (PDF)](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) by OpenAI: when an agent is worth it, and when it isn't.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: How LLMs Work](05-how-llms-work.md) · [Course map](README.md) · [Next lesson: Structured Output and Errors →](07-structured-output-and-errors.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
