# Testing and CI

*Section 5: Make It Sturdy · Lesson 25 of 30 · about 1 week*

## Introduction

CI (continuous integration) means your tests run automatically every time you push code. It catches a bad change before your users see it.

You'll use promptfoo for the AI checks and pytest for your normal Python code.

## Lesson overview

By the end of this lesson, you should be able to:

- Write a promptfoo test file.
- Mix rule-based checks with checks graded by a model.
- Run all your tests in GitHub Actions on every push.

## Assignment

### Day 1

1. Read the [promptfoo intro](https://www.promptfoo.dev/docs/intro/) and its [RAG evaluation guide](https://www.promptfoo.dev/docs/guides/evaluate-rag/).

### Day 2

2. Turn your checks from the last lesson into a promptfoo config. Use rule-based checks (citations are present, the output is valid) plus [context-faithfulness](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/) (does the answer stick to the pages you found?) and [llm-rubric](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/llm-rubric/).

### Day 3

3. Write pytest tests for the code that doesn't use AI: ingestion, your RRF function and the approval logic. Use Made With ML's [testing lesson](https://madewithml.com/courses/mlops/testing/) as a reference.

### Day 4

4. Run both in [GitHub Actions](https://www.promptfoo.dev/docs/integrations/github-action/) on every push. Break a prompt on purpose and watch CI fail.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [What does context-faithfulness check?](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/)
- [Why keep rule-based checks next to model-graded ones?](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/llm-rubric/)

## Additional resources

These are optional. Use them if you want to go further.

- [Made With ML: CI/CD](https://madewithml.com/courses/mlops/cicd/)

---

[← Previous: Evals That Catch Real Bugs](24-evals-that-catch-real-bugs.md) · [Course map](README.md) · [Next lesson: Login and Access Rules →](26-login-and-access-rules.md)
