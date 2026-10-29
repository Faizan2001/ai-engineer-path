# Elective: Share Your Knowledge Base over MCP

*Section 8: Electives · Elective 3 of 5 · about 4.5 hours*

## Introduction

> **A protocol makes a connection. It never grants permission.**

Expose a read-only search over your approved knowledge base as an MCP server, so other AI tools can use it, and keep the same access rules.

**After this, you can** build a small MCP server with a read-only tool and its own access checks.

**The skill that lasts:** connecting AI tools across products without widening trust.

## Lesson overview

By the end of this lesson, you should be able to:

- Build an MCP server with one read-only `search_campus_faq` tool.
- Enforce the same tenant and approval rules as your service.
- Test it from an MCP client.

## Assignment

1. Read the [MCP introduction](https://modelcontextprotocol.io/docs/getting-started/intro), its [authorization specification](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization) and its [security best practices](https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices).
2. Build a server with one read-only tool that returns approved entries with citations. No write tools. Use the HTTP transport with token verification, so the server maps each caller's token to one university; a local stdio server is single-user, so a tenant test on it proves nothing.
3. Connect it to an MCP client and test: only approved entries, only the caller's university, and prompt-injection text in an entry is returned as data, not followed.

### Memory check · 10 min

4. Close this page. In your log, answer from memory, then check:
   - Why does adding an MCP server not change who may read the knowledge base? ([where to check](45-elective-mcp-server.md))
5. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why does adding an MCP server not change who may read the knowledge base?</summary>

MCP defines how tools, resources and prompts are offered, plus an optional authorization flow for HTTP. Your server still verifies the token and decides which university's entries the caller may read.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Elective: Fine-Tune a Small Model](44-elective-fine-tuning.md) · [Course map](README.md) · [Next lesson: Elective: Voice and Images →](46-elective-voice-and-images.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
