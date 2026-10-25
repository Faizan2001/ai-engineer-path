# Structured Output and Errors

*Section 2: Foundations · Lesson 7 of 32 · about 6 hours*

## Introduction

> **Essays are lovely to read and miserable to parse. Today the model fills in forms.**

Real apps need the model to fill in a form, not write an essay. That's called structured output.

Apps also need to handle problems calmly: slow responses, rate limits (too many requests at once) and refusals (when the model won't answer). You'll also learn to measure what each call costs, and to build a tiny screen with Streamlit.

**After this, you can** turn messy text or images into checked data that fails safely.

**The skill that lasts:** designing for failure: treating model output like user input.

## Lesson overview

By the end of this lesson, you should be able to:

- Get typed, checked output with Pydantic, a Python library for data models.
- Send an image to a model and work out what the call cost.
- Retry the right errors and handle refusals.
- Build a small form with Streamlit and test your code with pytest.

## Try it first

Two minutes, before the reading. Guess first: a wrong guess makes the right answer stick.

**Predict:** Your code gets valid JSON back from the model. Is it safe to save? Write yes or no, and one reason.

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#structured-output-and-errors).

## Assignment

### Day 1 · about 90 min

1. Read OpenAI's [Structured Outputs guide](https://developers.openai.com/api/docs/guides/structured-outputs). Focus on Pydantic models, strict schemas and the `refusal` field.
2. Write a script that turns a sentence like “Hackathon, Friday 3pm, Room 402” into an `Event` Pydantic model. Before each run, write down what you expect back, then compare. It keeps you in charge while the tools are new.

### Day 2 · about 90 min

3. Read the [images and vision guide](https://developers.openai.com/api/docs/guides/images-vision). Send one poster image and get your `Event` back.
4. Work out the cost of that call: read the token counts in the response's `usage` field and multiply by the prices on the [pricing page](https://developers.openai.com/api/docs/pricing). Print it after every call.

### Day 3 · about 90 min

5. Read the [error codes guide](https://developers.openai.com/api/docs/guides/error-codes). Add a timeout and at most 2 retries, with a short wait between them, for rate-limit and server errors. Don't retry bad requests: they will fail every time.
6. Handle refusals: log them and return “needs a human” instead of crashing.

### Day 4 · about 90 min

7. Follow pytest's [getting started guide](https://docs.pytest.org/en/stable/getting-started.html), then write 3 tests for your code: one with good input, one with a missing field and one with a refusal.
8. Follow Streamlit's [get started](https://docs.streamlit.io/get-started) page, then show your `Event` in a small [form](https://docs.streamlit.io/develop/api-reference/execution-flow/st.form) with a Save button.

### Memory check · 10 min

9. Close this page. In your log, answer from memory, then check:
   - Which API errors should you retry, and which should you not? ([where to check](https://developers.openai.com/api/docs/guides/error-codes))
   - When is a workflow a better choice than an agent? ([where to check](06-the-ai-staircase.md))
10. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [OpenAI Cookbook (worked examples)](https://cookbook.openai.com/)
- [Pydantic documentation](https://docs.pydantic.dev/latest/)
- [Pydantic is all you need](https://www.youtube.com/watch?v=yj-wSRJwrrc) by Jason Liu (AI Engineer, 18 min): why a schema is your contract with the model.
- [Video scraping: extracting JSON from a 35-second screen capture](https://simonwillison.net/2024/Oct/17/video-scraping/) by Simon Willison: structured output on real data, for a tiny fraction of a cent.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: The AI Staircase](06-the-ai-staircase.md) · [Course map](README.md) · [Next lesson: Project: Poster Reader →](08-project-poster-reader.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
