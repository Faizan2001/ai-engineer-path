# Red-Team Your App

*Section 5: Make It Sturdy · Lesson 28 of 30 · about 3 hours*

## Introduction

Red-teaming means attacking your own app on purpose, before someone else does.

promptfoo can create the attacks for you. You decide what counts as a breach (a successful attack).

## Lesson overview

By the end of this lesson, you should be able to:

- Explain what red-teaming is.
- Use promptfoo plugins for access control, hijacking and hidden instructions.
- Plant canary documents: fake secret pages that should never show up. If one does, you have a leak.

## Assignment

1. Follow promptfoo's [red team quickstart](https://www.promptfoo.dev/docs/red-team/quickstart/).
2. Set up three plugins: [rbac](https://www.promptfoo.dev/docs/red-team/plugins/rbac/) (access control), [hijacking](https://www.promptfoo.dev/docs/red-team/plugins/hijacking/) and [indirect prompt injection](https://www.promptfoo.dev/docs/red-team/plugins/indirect-prompt-injection/). Generate 30 attack cases and commit them, so the test stays the same each time.
3. Add 5 canary documents to the JS group: pages that contain a unique secret phrase. A CSS user must never see them.
4. Run the attacks once and write down every one that worked. You'll fix them in the project.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [What does the rbac plugin test?](https://www.promptfoo.dev/docs/red-team/plugins/rbac/)
- [What is indirect prompt injection?](https://www.promptfoo.dev/docs/red-team/plugins/indirect-prompt-injection/)

## Additional resources

These are optional. Use them if you want to go further.

- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)

---

[← Previous: Fresh Data](27-fresh-data.md) · [Course map](README.md) · [Next lesson: Project: Make It Sturdy →](29-project-make-it-sturdy.md)
