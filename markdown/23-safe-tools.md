# Safe Tools

*Section 4: Agents · Lesson 23 of 41 · about 3 hours*

## Introduction

> **If your agent reads the internet, the internet can talk to your agent.**

As soon as an agent can do things, someone can try to trick it. A web page or document can hide instructions for your agent. This is called prompt injection.

A prompt alone is not a dependable security boundary. Use permissions, restricted tools and approval checks to reduce the risk, then test their limits.

**True story (2024): a planted message turns Slack AI against its users.** Security researchers showed that a message planted in a public Slack channel could trick Slack AI into showing a user a link that, if clicked, sent private data to an attacker. [Source](https://www.theregister.com/2024/08/21/slack_ai_prompt_injection/)

**What you'll do differently:** map the lethal trifecta before you build, then cut one leg in code.

**After this, you can** spot an agent's attack path before you write any code.

**The skill that lasts:** threat modelling. There's no reliable prompt-only defence today, so designing safe tool access matters now.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain the lethal trifecta: private data, plus untrusted content, plus a way to send data out.
- Explain prompt injection and excessive agency (an agent allowed to do too much).
- Design approvals that match one exact action.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** A web page tells your agent to copy private notes somewhere public. Can a better prompt reliably stop that?

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#safe-tools).

## Assignment

### Prefer watching?

- ▶ [Prompt Injection, explained](https://www.youtube.com/watch?v=FgxwCaL6UTA) (Simon Willison, 12 min): From the person who named the attack. A good start before the readings.

1. Read Simon Willison's [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).
2. Read OWASP [LLM01 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) and [LLM06 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/).
3. For Ask MDN's agent, write down its three trifecta parts: private data, untrusted content and a way to send data out (Simon Willison calls it external communication). Which part will you cut off, and how?
4. Design your approval rule: a person approves the exact tool name and its exact arguments. If anything changes, the approval no longer counts. A tool discovered through MCP needs the same checks. MCP standardizes the connection; it does not make an arbitrary server trustworthy or give it permission to act.

### Memory check · 10 min

5. Close this page. In your log, answer from memory, then check:
   - What are the three parts of the lethal trifecta? ([where to check](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/))
   - Which LangGraph feature pauses for a person's approval? ([where to check](22-langgraph.md))
6. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What are the three parts of the lethal trifecta?</summary>

The three parts are access to private data, exposure to untrusted content, and a way to communicate data externally. Together they create an opportunity for malicious instructions in that content to cause data disclosure.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Which LangGraph feature pauses for a person's approval?</summary>

LangGraph's interrupt() pauses execution for a person's input. The application must still check that the approval permits the exact tool and arguments; pausing alone does not make the action safe.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [Agents Towards Production (security tutorials)](https://github.com/NirDiamant/agents-towards-production)
- [Design patterns for securing LLM agents against prompt injections](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/) by Simon Willison: six patterns that limit the damage, explained simply.
- [Anthropic’s Introduction to MCP](https://academy.claude.com/collections/build-with-claude) — optional protocol background. Use the Introduction to Model Context Protocol course; implementing a server remains extra credit.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: LangGraph](22-langgraph.md) · [Course map](README.md) · [Next lesson: Project: Give It Tools →](24-project-give-it-tools.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
