# Evals That Catch Real Bugs

*Section 5: Make It Sturdy · Lesson 24 of 30 · about 1 week*

## Introduction

Vague scores like “4 out of 5 for helpfulness” don't find bugs. Reading real failures does.

In this lesson you'll turn your app's logs into tests. Evals are simply tests for how your AI behaves.

## Lesson overview

By the end of this lesson, you should be able to:

- Find patterns in real failures (error analysis).
- Write a pass-or-fail check for each kind of failure.
- Check that an LLM judge agrees with you.

## Assignment

### Day 1

1. Read the error analysis parts of the [AI Evals FAQ](https://hamel.dev/blog/posts/evals-faq/) by Hamel Husain and Shreya Shankar.

### Day 2

2. Read Eugene Yan's [Product Evals in Three Simple Steps](https://eugeneyan.com/writing/product-evals/).

### Day 3

3. Read 50 real Ask MDN logs. Write down every failure and sort them into 3 to 6 groups.

### Day 4

4. Write a pass-or-fail check for each group. Use plain code where you can, and an LLM judge only where you must.

### Day 5

5. Grade 20 answers yourself, then check how often your LLM judge agrees with you.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [Why use pass or fail instead of a 1 to 5 score?](https://hamel.dev/blog/posts/evals-faq/)
- [How do you check that an LLM judge is right?](https://eugeneyan.com/writing/product-evals/)

## Additional resources

These are optional. Use them if you want to go further.

- [Chip Huyen, chapters 3 and 4 (book)](https://github.com/chiphuyen/aie-book)

---

[← Previous: Start Applying](23-start-applying.md) · [Course map](README.md) · [Next lesson: Testing and CI →](25-testing-and-ci.md)
