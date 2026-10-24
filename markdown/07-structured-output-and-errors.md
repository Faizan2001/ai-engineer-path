# Structured Output and Errors

*Section 2: Foundations · Lesson 7 of 30 · about 4.5 hours*

## Introduction

Real apps need the model to fill in a form, not write an essay. That's called structured output.

Apps also need to handle problems calmly: slow responses, rate limits (too many requests at once) and refusals (when the model won't answer). In this lesson you'll handle all three.

## Lesson overview

By the end of this lesson, you should be able to:

- Get typed, checked output with Pydantic, a Python library for data models.
- Send an image to a model.
- Retry the right errors and handle refusals.

## Assignment

### Day 1 · about 1.5 hours

1. Read OpenAI's [Structured Outputs guide](https://developers.openai.com/api/docs/guides/structured-outputs). Focus on Pydantic models, strict schemas and the `refusal` field.
2. Write a script that turns a sentence like “Hackathon, Friday 3pm, Room 402” into an `Event` Pydantic model.

### Day 2 · about 1.5 hours

3. Read the [images and vision guide](https://developers.openai.com/api/docs/guides/images-vision). Send one poster image and get your `Event` back.
4. Read the [error codes guide](https://developers.openai.com/api/docs/guides/error-codes). Add a timeout and at most 2 retries, with a short wait between them, for rate-limit and server errors. Don't retry bad requests: they will fail every time.

### Day 3 · about 1.5 hours

5. Handle refusals: log them and return “needs a human” instead of crashing.
6. Write 3 pytest tests for your code: one with good input, one with a missing field and one with a refusal.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [Which API errors should you retry, and which should you not?](https://developers.openai.com/api/docs/guides/error-codes)
- [What does the refusal field tell you?](https://developers.openai.com/api/docs/guides/structured-outputs)
- [Why check the data with code even when the schema is strict?](https://docs.pydantic.dev/latest/)

## Additional resources

These are optional. Use them if you want to go further.

- [OpenAI Cookbook (worked examples)](https://cookbook.openai.com/)
- [Pydantic documentation](https://docs.pydantic.dev/latest/)

---

[← Previous: The AI Staircase](06-the-ai-staircase.md) · [Course map](README.md) · [Next lesson: Project: Poster Reader →](08-project-poster-reader.md)
