# Safe Tools

*Section 4: Agents · Lesson 21 of 30 · about 3 hours*

## Introduction

As soon as an agent can do things, someone can try to trick it. A web page or document can hide instructions for your agent. This is called prompt injection.

You can't fix this with a better prompt. You fix it with code and careful design.

## Lesson overview

By the end of this lesson, you should be able to:

- Explain the lethal trifecta: private data, plus untrusted content, plus the ability to act.
- Explain prompt injection and excessive agency (an agent allowed to do too much).
- Design approvals that match one exact action.

## Assignment

1. Read Simon Willison's [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).
2. Read OWASP [LLM01 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) and [LLM06 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/).
3. For Ask MDN's agent, write down its three trifecta parts: private data, untrusted content and the ability to act. Which part will you cut off, and how?
4. Design your approval rule: a person approves the exact tool name and its exact arguments. If anything changes, the approval no longer counts.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [What are the three parts of the lethal trifecta?](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)
- [Why can't a system prompt stop prompt injection?](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [What is excessive agency?](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)

## Additional resources

These are optional. Use them if you want to go further.

- [Agents Towards Production (security tutorials)](https://github.com/NirDiamant/agents-towards-production)

---

[← Previous: LangGraph](20-langgraph.md) · [Course map](README.md) · [Next lesson: Project: Give It Tools →](22-project-give-it-tools.md)
