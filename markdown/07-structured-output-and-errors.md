# Structured Output and Errors

*Section 2: Foundations · Lesson 7 of 41 · about 7.5 hours*

## Introduction

> **Apps can't use essays. They need the model to fill in a form.**

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

> **Why:** Get the model to fill a typed form instead of writing prose.
>
> **Don't skip:** Poster Reader is built on this `Event` model.

1. Read OpenAI's [Structured Outputs guide](https://developers.openai.com/api/docs/guides/structured-outputs). Focus on Pydantic models, strict schemas and the `refusal` field.
2. Write a script that turns a sentence like “Hackathon, Friday 3pm, Room 402” into an `Event` Pydantic model. Give `Event` a title, date, start time, end time and venue. Make the fields that can be missing optional. Before each run, write down what you expect back, then compare.
3. **Using Gemini?** `responses.parse` gives a 404 there, so use this form instead:
   ```python
   completion = client.beta.chat.completions.parse(
       model=os.environ["MODEL"],
       messages=[{"role": "user", "content": text}],
       response_format=Event,
   )
   event = completion.choices[0].message.parsed
   ```

### Day 2 · about 90 min

> **Why:** Read an image with a model, and know what each call costs.
>
> **Don't skip:** Poster Reader reads images and reports the cost per poster.

4. Read the [images and vision guide](https://developers.openai.com/api/docs/guides/images-vision). Send one poster image (a photo or a screenshot of any event poster) and get your `Event` back.
5. **Using Gemini?** Send the image through `client.chat.completions`, as in [Gemini's image example](https://ai.google.dev/gemini-api/docs/openai#image-understanding).
6. Work out the cost of that call. Read the token counts in the response's `usage` field and multiply them by the prices on the [pricing page](https://developers.openai.com/api/docs/pricing). Print the cost after every call.
7. **Using Gemini?** The free tier costs nothing, so use the paid-tier price. It shows what this call would cost at scale.

### Day 3 · about 90 min

> **Why:** Make calls fail safely: timeouts, the right retries, and refusals that end in “needs a human”.
>
> **Skip if** you've built retries with backoff and `Retry-After` before. Still add the refusal handling.

8. Read the [error codes guide](https://developers.openai.com/api/docs/guides/error-codes). Add a request timeout and at most 2 retries, only for rate-limit and server errors. If the response has a `Retry-After` time, wait that long. Otherwise wait a little longer each time, with some randomness. Also set an overall deadline. Never retry bad credentials, or a bad request without changing it.
9. Handle refusals: log them and return “needs a human” instead of crashing. Using Gemini? It has no documented `refusal` field, so make a fake refusal in your test.

### Day 4 · about 90 min

> **Why:** Test with pytest and put a form on screen with Streamlit. Every project uses both.
>
> **Skip if** you already use pytest and have built a Streamlit form.

10. Follow pytest's [getting started guide](https://docs.pytest.org/en/stable/getting-started.html), then write 3 tests for your code: one with good input, one with a missing field and one with a refusal.
11. Follow Streamlit's [get started](https://docs.streamlit.io/get-started) page, then show your `Event` in a small [form](https://docs.streamlit.io/develop/api-reference/execution-flow/st.form) with a Save button.

### Day 5 · about 90 min

> **Why:** Improve a prompt by changing one thing and measuring, not by feel.
>
> **Don't skip:** This one-change method is how you tune every project.

12. Spend 15 minutes on Anthropic's [Providing examples](https://academy.claude.com/courses/building-with-the-claude-api/providing-examples). Few-shot prompting means showing the model a few examples of input and output. Read the explanation or watch the video, and do the exercise with your own provider.
13. Make 6 practice inputs, including one with an ambiguous date and one with a missing venue. Save your current prompt as v1. Make v2 by changing one thing only: clearer instructions, or two examples.
14. Run both on the same inputs, with the same model and settings. Keep the raw outputs. Mark each field correct, wrong or “unknown” (right when the input doesn't say). Neater formatting doesn't mean the facts are better.
15. Keep v2 only if the scores say it is better. Write the model ID, prompt version, settings and cost next to the scores. If the results are tied, say so. Six practice cases are too few to prove much.

### Memory check · 10 min

16. Close this page. In your log, answer from memory, then check:
   - How do you tell whether a prompt change helped? ([where to check](07-structured-output-and-errors.md))
   - When is a workflow a better choice than an agent? ([where to check](06-the-ai-staircase.md))
17. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: How do you tell whether a prompt change helped?</summary>

Change one thing, use the same practice cases and scoring rule, keep both sets of outputs, and compare the failures as well as the successes. Then test on cases you never tuned on. A schema checks the shape of the answer, not whether it's true.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: When is a workflow a better choice than an agent?</summary>

Use a workflow when the steps are predictable and your code can handle each branch. Use an agent only when letting the model choose the next step is worth the extra complexity and cost.

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

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 7 Nov 2026
