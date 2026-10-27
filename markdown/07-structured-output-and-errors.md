# Structured Output and Errors

*Section 2: Foundations · Lesson 7 of 32 · about 7.5 hours*

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
- Improve a prompt by changing one thing and checking the same examples.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

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

5. Read the [error codes guide](https://developers.openai.com/api/docs/guides/error-codes). Add a request timeout and at most 2 retries for retryable rate-limit/server errors. Respect Retry-After when supplied; otherwise use increasing waits with a little randomness. Keep an overall deadline too. Do not retry invalid credentials or bad requests unchanged.
6. Handle refusals: log them and return “needs a human” instead of crashing.

### Day 4 · about 90 min

7. Follow pytest's [getting started guide](https://docs.pytest.org/en/stable/getting-started.html), then write 3 tests for your code: one with good input, one with a missing field and one with a refusal.
8. Follow Streamlit's [get started](https://docs.streamlit.io/get-started) page, then show your `Event` in a small [form](https://docs.streamlit.io/develop/api-reference/execution-flow/st.form) with a Save button.

### Day 5 · about 90 min

9. Spend 15 minutes on Anthropic’s [Providing examples](https://academy.claude.com/courses/building-with-the-claude-api/providing-examples). Use the explanation or video; the exercise works with your existing provider. Few-shot prompting means showing a small number of input/output examples.
10. Make 6 practice inputs, including an ambiguous date and a missing venue. Save prompt v1. Change only one thing: clearer instructions OR two examples. Run both versions on the same inputs with the same model and settings. Keep the raw outputs and mark each field correct, wrong or appropriately unknown. Better formatting is not evidence of better facts.
11. Keep the better version only if the results support it. Write the model ID, prompt version, settings and cost beside the scores. If the six cases are tied, say so. These are practice cases; they do not replace Poster Reader’s held-back posters.

### Memory check · 10 min

12. Close this page. In your log, answer from memory, then check:
   - How do you tell whether a prompt change helped? ([where to check](07-structured-output-and-errors.md))
   - When is a workflow a better choice than an agent? ([where to check](06-the-ai-staircase.md))
13. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: How do you tell whether a prompt change helped?</summary>

Change one factor, use the same practice cases and scoring rule, keep both outputs, and compare failures as well as successes. Then use untouched cases for the later final check. A schema checks shape, not factual truth.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: When is a workflow a better choice than an agent?</summary>

Choose a workflow when the steps are predictable and predefined branches can handle the task. An agent is useful only when choosing the next action dynamically adds enough value to justify its extra complexity and cost.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

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
