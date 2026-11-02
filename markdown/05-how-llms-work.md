# How LLMs Work

*Section 2: Foundations · Lesson 5 of 42 · about 3 hours*

## Introduction

> **ChatGPT is autocomplete that has read a huge library. That is why it is so good, and why it can invent a court case.**

An LLM (large language model) is the kind of AI behind ChatGPT. You don't need the math to build with one, but you do need a simple picture of how it works.

Here's the short version: text is split into small pieces called tokens. The model predicts the next token, again and again, until the answer is finished.

**True story (2023): lawyers fined for ChatGPT's made-up cases.** Two New York lawyers filed a brief citing court cases that ChatGPT had made up. The judge fined them and their firm $5,000. [Source](https://news.bloomberglaw.com/bloomberg-government-news/chatgpt-phony-legal-filing-case-gets-lawyers-a-5-000-fine)

**What you'll do differently:** treat fluent output as a guess, and check every citation against a real source.

**After this, you can** predict when a model will guess, vary its answer or make something up.

**The skill that lasts:** knowing how models fail, so you can explain a confident wrong answer to a user or a boss.

## Lesson overview

By the end of this lesson, you should be able to:

- What tokens are, and how the model picks the next one.
- Why the same question can get different answers.
- Why models sometimes make things up.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** Ask a chat model the same question twice. Will you get the same answer? Write yes or no, and one reason.

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#how-llms-work).

## Before you read

**Picture this:** Think of your phone's suggestion bar, made much bigger. It picks one token at a time, using everything before it. Attention lets words affect each other: in “the bank of the river”, “river” tells the model which kind of “bank” this is. This is a simple picture, not the full story of how models reason.

A model call predicts tokens from its input and what it learned in training. It does not search your files or check facts on its own. Your code can add tools or documents; you'll do that later. A fluent answer can still be wrong. Pause the video whenever you want to sketch the process yourself.

- **token**: a small chunk of text the model reads and writes
- **temperature**: how much randomness goes into each pick

## Assignment

### Day 1 · about 90 min

> **Why:** Get a working picture of tokens and next-token prediction, so model behaviour stops being a mystery.
>
> **Skip if** you can explain tokens, attention and sampling in 5 sentences. Write them in your log and move on.

1. Watch 3Blue1Brown's [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) (7 min). Watch for the idea of predicting one token at a time.
2. Watch [Transformers, the tech behind LLMs](https://www.youtube.com/watch?v=wjZofJX0v4M) (27 min). Pause often and write one sentence for each new idea. On mobile data, watch at 480p or download it on Wi-Fi first.
3. In your log, before you rewatch anything, explain in 5 sentences how a chat model answers a question. Use only words you could explain to a friend.

### Day 2 · under the hood, about 90 min

> **Why:** Measure what Bangla and Banglish cost in tokens, and write the sampling step yourself.
>
> **Don't skip:** Your token ratios feed the capstone's cost estimate.

4. Predict first: will the same question cost more tokens in English, in Bangla script or in Banglish? Write your guess in your log.
5. Write one campus question yourself (never copy a real post) in three forms: English, Bangla script and Banglish. Make each one three or four sentences long.
6. Send each question to your model with no instructions. Read the input token count in the response's `usage` field. That is the count you're billed for.
7. Every request has a few fixed formatting tokens, so also send a one-word message and subtract its count from each result. Then divide each count by the English one to get a ratio. Record the model, the three counts and the ratios in your log.
8. Without AI-written code, write `sample.py`. Make up a table of five possible next tokens, each with a score.
9. Turn the scores into probabilities with softmax: divide each score by the temperature, take e to that power, then divide by the total of all five. Pick a token at random using those probabilities.
10. Run it 20 times at temperature 0.2, 1.0 and 1.5 and compare the picks. You've just written the last step of every chat model.
11. Stop here when your log has the token table, your guess next to the real ratio, and one sentence on what temperature does.

### Memory check · 10 min

12. Close this page. In your log, answer from memory, then check:
   - What is a token, and what does the model predict? ([where to check](https://www.youtube.com/watch?v=LPZh9BOjkQs))
   - Why should you never put an API key in Git? ([where to check](04-setting-up-your-tools.md))
13. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What is a token, and what does the model predict?</summary>

A token is a small piece of text, such as part of a word or a punctuation mark. The model predicts the next token from everything before it, and repeats until the answer is done.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Why should you never put an API key in Git?</summary>

Anyone with the key can make calls on your account and spend your credit. Git keeps history, so deleting the key from the latest file doesn't remove it from older commits.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [Karpathy, Deep Dive into LLMs like ChatGPT (3 h 31 min; watch it in 30-minute pieces alongside the next lessons)](https://www.youtube.com/watch?v=7xTGNNLPyMI)
- [Chip Huyen, AI Engineering, chapter 2, “Sampling” and “Structured Outputs” (book)](https://github.com/chiphuyen/aie-book)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) by Georgia Tech Polo Club: play with a real small model in your browser and watch each step.
- [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/) by OpenAI: why models make things up, from the people who build them.
- [Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) by Andrej Karpathy (2 h): why token counts differ between languages, built from scratch. Optional.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Setting Up Your Tools](04-setting-up-your-tools.md) · [Course map](README.md) · [Next lesson: The AI Staircase →](06-the-ai-staircase.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
