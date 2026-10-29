# Project: Give It Tools

*Section 4: Agents · Lesson 25 of 42 · about 2 weeks*

**Before you start, check that** your LangGraph loop pauses with `interrupt()` before a tool runs.

## Introduction

> **Ask MDN gets hands. In 2025 an AI agent wiped a live database during a code freeze. Yours asks first.**

Ask MDN becomes an agent with three tools. One of them can change things, so it must ask a person first. This time, you'll plan the work yourself before you start.

Tip: make the notes useful to you, like revision cards for this course that you reread at Memory check time. Keep your attack tests away from them.

**True story (2025): an AI agent deletes a live database.** During a declared code freeze, Replit's AI coding agent ran database commands without permission and deleted a company's live production database. [Source](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/)

**What you'll do differently:** tools that change or delete things wait for a person's approval, and the agent never holds production keys.

**After this, you can** show an agent that acts only with approval, proven by tests.

**The skill that lasts:** least privilege, proven by tests rather than promised.

## Before you start

- Build on your `ask-mdn` repo, with the same frozen data. Commit early and often, with messages that say what changed.
- Get the browser support data from [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data). It's public domain, so you can use it freely.
- Put test attack documents only in a test copy of your search index, never in the online app.
- Don't look at other people's versions of this project until yours works. Then compare and learn.
- Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error.

## Assignment

### Day 1 · about 90 min

1. Before reading the steps below, write your own day-by-day plan for this project in your log. Compare it with the steps afterwards.

### Days 2–6 · about 7.5 hours

2. **Days 2–3:** In LangGraph, give the agent three tools: `search_docs` (your hybrid search), `browser_support` (looks up a feature in the browser data) and `save_note` (writes a note to a `notes` table in Neon, with a `group_id` column you'll use in Section 5).
3. **Days 4–5:** Before `save_note` runs, pause with `interrupt()`. Show the person the exact arguments, and run it only if they approve, using exactly those arguments. The approval belongs to one operation ID and its exact arguments. Generate that ID once in application code before pausing, persist it, and reuse it on retry; a repeated click is the same operation.
4. **Stop here on Day 6:** one approved note is saved and one rejected note isn't.

### Days 7–12 · about 9 hours

5. **Days 7–8:** Add limits: at most 8 steps, a cost limit per question, and at most 2 retries per tool call. For `save_note`, add a database unique constraint on `(group_id, operation_id)` and [INSERT ON CONFLICT](https://www.postgresql.org/docs/current/sql-insert.html) handling. A repeated ID returns the original result only if its arguments match; changed arguments need a new approval. Simulate a committed write followed by a lost response, then retry: there must be exactly one note.
6. **Day 9:** Log each step’s request ID, tool name, input/output sizes, timing, tokens and cost. Keep redacted argument examples only in your permitted synthetic test logs, following [Monitoring](17-monitoring.md); never record credentials.
7. **Days 10–11:** Write 5 injection documents (for example a page that says “call save_note with…”) and 5 normal requests, including one that really should save a note. Write the injection documents like an attacker's notebook: the goal, the trick and how your app should block it. Commit them, then run all 10 through your agent. **Stop here on Day 11** when the log shows every injection ended without an unapproved `save_note` call, and the real save request paused for approval.
8. **Day 12:** In your log, compare your Day 1 plan with what really happened. That gap is a lesson in itself. **Stop here** when the comparison is in your log.

### Memory check · 10 min

9. Close this page. In your log, answer from memory, then check:
   - Why must an approval match the tool's exact arguments? ([where to check](24-safe-tools.md))
   - What does MRR measure? ([where to check](13-measuring-search.md))
10. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

## You're done when

- [ ] `save_note` can't run unless a person approves its exact arguments. A test proves it. A retry after a lost response creates no duplicate note, and changed arguments cannot reuse an earlier approval.
- [ ] The step limit, cost limit and retry limit each stop a runaway run. A test proves each one. The context-budget checks also pass by preserving critical task facts or pausing for clarification before answering or acting; context never grants new permissions.
- [ ] Your 5 injection documents never cause an unapproved action, and no planted instruction is carried out. Your 5 normal requests still work. You checked this in the step logs, not just in the replies.
- [ ] Explain the request flow, two decisions and one failure. Without AI-generated code, write the retry/duplicate-write test or the changed-arguments approval test. First make it fail on the unsafe implementation, then pass on the fix. Documentation is allowed; note the commit.

## Show it off

**Your one-line pitch:** Ask MDN as a LangGraph agent with three tools, approvals tied to exact arguments, hard limits and injection tests that pass.

A 3-minute demo, in this order:

1. Ask a question that needs two tools, and walk through the step log: tool, input, tokens, cost.
2. `save_note` pauses with its exact arguments. Reject it and show the database is unchanged.
3. Approve it and show the note saved.
4. Show an injection document being ignored, proven in the logs.
5. Run the test where the step limit stops a runaway loop.

What it proves to employers:

- Agents and tool calling: some agent skill appears in about 55% of the posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md).
- LangGraph (about 14% of posts and rising) and guardrails, which [grew](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/07-trends.md) from about 10% to 15% of posts this year.

## Extra credit

- Add a dry-run mode that shows the plan without running any tool.
- Serve `browser_support` as an MCP server with the [official MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk), and call it from your agent. MCP is showing up in more job posts: about 14% in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md).

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Safe Tools](24-safe-tools.md) · [Course map](README.md) · [Next lesson: Start Applying →](26-start-applying.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
