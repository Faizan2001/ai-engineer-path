# Testing and CI

*Section 5: Make It Sturdy · Lesson 26 of 32 · about 1 week*

**Before you start, check that** you have 3 to 6 failure groups from 50 conversations, each with a pass-or-fail check.

## Introduction

> **CI reruns every test on every push and never gets bored or polite.**

CI (continuous integration) means your tests run automatically every time you push code. It catches a bad change before your users see it.

You'll use promptfoo for the AI checks and pytest for your normal Python code.

**True story (2024): a parcel chatbot swears at a customer.** After a system update, delivery company DPD's chatbot swore at a customer and wrote a poem mocking the company. DPD switched the AI part off. [Source](https://www.bbc.com/news/technology-68025677)

**What you'll do differently:** every prompt or model change runs your eval suite in CI before users see it.

**After this, you can** block a bad prompt change before users see it.

**The skill that lasts:** regression discipline: a test counts once you've watched it fail.

## Lesson overview

By the end of this lesson, you should be able to:

- Set up GitHub Actions and its secrets.
- Let promptfoo call Ask MDN directly.
- Mix rule-based checks with checks graded by a model.

## Before you read

**Picture this:** CI is the exam-hall invigilator who checks every admit card, every time, with no favourites. Each push is a candidate, and a prompt tweak that breaks ten old answers is stopped at the door. A test only earns trust after you've watched it fail.

promptfoo runs tests against your app. A YAML file lists the questions and the checks. A small Python adapter takes each question (and the user, from `context['vars']`), calls your `answer()` and returns the answer plus the pages it found.

- **provider**: the adapter promptfoo calls to get your app's output
- **secret**: an encrypted value GitHub Actions can read

## Assignment

### Prefer watching?

- ▶ [How to use GitHub Actions](https://www.youtube.com/watch?v=BQrohJ3PT7I) (GitHub, 8 min): GitHub's own beginner walkthrough, for Day 4.

### Day 1 · about 90 min

1. Install Node.js LTS ([download](https://nodejs.org/en/download)); promptfoo runs with `npx promptfoo`.
2. Read the [promptfoo intro](https://www.promptfoo.dev/docs/intro/) and its [RAG evaluation guide](https://www.promptfoo.dev/docs/guides/evaluate-rag/).

### Day 2 · about 90 min

3. Give Ask MDN a plain Python function `answer(question, user)` that your Streamlit app calls. Then point promptfoo at it with a [Python provider](https://www.promptfoo.dev/docs/providers/python/): a small file whose `call_api(prompt, options, context)` calls your `answer()`. Read the user from `context['vars']`, and return the pages it found as well as the answer, because context-faithfulness needs them. Now tests don't need the web page.

### Day 3 · about 90 min

4. Turn your checks from the last lesson into a promptfoo config. Use rule-based checks (citations are present, the output is valid) plus [context-faithfulness](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/) (does the answer stick to the pages you found?) and [llm-rubric](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/llm-rubric/).

### Day 4 · about 90 min

5. Follow GitHub's [Actions quickstart](https://docs.github.com/en/actions/writing-workflows/quickstart). Add your OpenAI key as a repository [secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).
6. Run pytest and the rule-based promptfoo checks on every push, and the model-graded checks only on pull requests or on `main`, following promptfoo's [CI/CD guide](https://www.promptfoo.dev/docs/integrations/ci-cd/). Set the grading model explicitly and turn on caching, so CI doesn't spend credit on every tiny push. Break a prompt on purpose and watch CI fail.

### Memory check · 10 min

7. Close this page. In your log, answer from memory, then check:
   - What does context-faithfulness check? ([where to check](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/))
   - Why does each failure group get its own pass-or-fail check? ([where to check](25-evals-that-catch-real-bugs.md))
8. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [Made With ML: testing (good habits for the non-AI code)](https://madewithml.com/courses/mlops/testing/)
- [Made With ML: CI/CD](https://madewithml.com/courses/mlops/cicd/)

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Evals That Catch Real Bugs](25-evals-that-catch-real-bugs.md) · [Course map](README.md) · [Next lesson: Postgres Search and Access Rules →](27-postgres-search-and-access-rules.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
