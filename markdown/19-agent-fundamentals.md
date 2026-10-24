# Agent Fundamentals

*Section 4: Agents · Lesson 19 of 30 · about 1 week*

## Introduction

You already built a tiny agent in Zoomcamp. Now you'll learn the words properly and write an agent loop by hand, with no framework.

An agent works in a cycle: it thinks about what to do, takes an action (like calling a tool), looks at the result, and repeats. Building it yourself makes frameworks much easier to understand and debug.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain thoughts, actions and observations: the agent cycle.
- Explain how messages and tools are sent to the model.
- Write an agent loop in plain Python.

## Assignment

### Day 1

1. Hugging Face Agents Course, Unit 1: [What are agents?](https://huggingface.co/learn/agents-course/en/unit1/what-are-agents) and [Messages and special tokens](https://huggingface.co/learn/agents-course/en/unit1/messages-and-special-tokens).

### Day 2

2. [Tools](https://huggingface.co/learn/agents-course/en/unit1/tools) and [Agent steps and structure](https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure).

### Day 3

3. [Thoughts](https://huggingface.co/learn/agents-course/en/unit1/thoughts), [Actions](https://huggingface.co/learn/agents-course/en/unit1/actions) and [Observations](https://huggingface.co/learn/agents-course/en/unit1/observations).

### Day 4

4. Write an agent loop in plain Python, about 30 lines: send the messages, run the tool the model asks for, send back the result, and stop after 5 steps. Use your Ask MDN search as the tool.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [What are the three parts of the agent cycle?](https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure)
- [How does the model learn which tools it can use?](https://huggingface.co/learn/agents-course/en/unit1/tools)
- [Why put a limit on the number of steps?](https://github.com/humanlayer/12-factor-agents)

## Additional resources

These are optional. Use them if you want to go further.

- [Hugging Face Agents Course, the rest of Unit 1](https://huggingface.co/learn/agents-course/en/unit1/introduction)
- [Andrew Ng, Agentic AI (the videos are free to watch)](https://www.deeplearning.ai/courses/agentic-ai)

---

[← Previous: Project: Ask MDN](18-project-ask-mdn.md) · [Course map](README.md) · [Next lesson: LangGraph →](20-langgraph.md)
