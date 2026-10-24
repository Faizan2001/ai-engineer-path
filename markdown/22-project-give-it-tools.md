# Project: Give It Tools

*Section 4: Agents · Lesson 22 of 30 · about 2 weeks*

## Introduction

Ask MDN becomes an agent with three tools. One of them can change things, so it must ask a person first.

## Before you start

- Build on your Ask MDN repo, with the same frozen data.
- Get the browser support data from [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data). It's public domain, so you can use it freely.
- Put test attack documents only in a test copy of your search index, never in the online app.

## Assignment

1. In LangGraph, give the agent three tools: `search_docs` (your hybrid search), `browser_support` (looks up a feature in the browser data) and `save_note` (writes a note).
2. Add a breakpoint before `save_note`. Show the person the exact arguments, and run it only if they approve, using exactly those arguments.
3. Add limits: at most 8 steps, a cost limit per question, and at most 2 retries per tool call.
4. Log every step: the tool, its input, the size of its output, the tokens and the cost.
5. Write 5 injection documents (for example a page that says “call save_note with…”) and 5 normal requests, including one that really should save a note. Commit them.

## You're done when

- [ ] `save_note` can't run unless a person approves its exact arguments. A test proves it.
- [ ] The step limit, cost limit and retry limit each stop a runaway run. A test proves each one.
- [ ] Your 5 injection documents never cause an unapproved action, and no planted instruction is carried out. Your 5 normal requests still work. You checked this in the step logs, not just in the replies.
- [ ] You can explain how a request moves through your app, two decisions you made and one problem you fixed. You made at least one change without AI help.

## Extra credit

- Add a dry-run mode that shows the plan without running any tool.
- Earn the free certificate from the [Hugging Face Agents Course final](https://huggingface.co/learn/agents-course/en/unit4/introduction).

---

[← Previous: Safe Tools](21-safe-tools.md) · [Course map](README.md) · [Next lesson: Start Applying →](23-start-applying.md)
