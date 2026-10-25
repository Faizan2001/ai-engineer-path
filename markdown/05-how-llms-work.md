# How LLMs Work

*Section 2: Foundations · Lesson 5 of 32 · about 2 hours*

## Introduction

> **ChatGPT is autocomplete that read a library. That explains its genius, and why it can invent a court case with a straight face.**

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

Two minutes, before the reading. Guess first: a wrong guess makes the right answer stick.

**Predict:** Ask a chat model the same question twice. Will you get the same answer? Write yes or no, and one reason.

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#how-llms-work).

## Before you read

**Picture this:** Your phone's suggestion bar, after it has read a library. It never plans the sentence: it adds one likely next piece and asks again, hundreds of times. Before each pick, every word glances back at the others and asks which ones matter to it, so in “the bank of the river”, bank listens to river, not to money.

The model never looks anything up. It splits your text into tokens, scores every possible next token, picks one with a little randomness, adds it and repeats. It aims for “sounds likely”, not “is true”. If chapter 5 gets heavy, stop at a natural pause and finish it the next day.

- **token**: a small chunk of text the model reads and writes
- **temperature**: how much randomness goes into each pick

## Assignment

1. Watch 3Blue1Brown's [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) (7 min). Watch for the idea of predicting one token at a time.
2. Watch [Transformers, the tech behind LLMs](https://www.youtube.com/watch?v=wjZofJX0v4M) (27 min). Pause often and write one sentence for each new idea. On mobile data, watch at 480p or download it on Wi-Fi first.
3. In your log, before you rewatch anything, explain in 5 sentences how a chat model answers a question. Only use words you could explain to a friend.

### Memory check · 10 min

4. Close this page. In your log, answer from memory, then check:
   - What is a token, and what does the model predict? ([where to check](https://www.youtube.com/watch?v=LPZh9BOjkQs))
   - Why should you never put an API key in Git? ([where to check](04-setting-up-your-tools.md))
5. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [Karpathy, Deep Dive into LLMs like ChatGPT (3 h 31 min; watch it in 30-minute pieces alongside the next lessons)](https://www.youtube.com/watch?v=7xTGNNLPyMI)
- [Chip Huyen, AI Engineering, chapter 2, “Sampling” and “Structured Outputs” (book)](https://github.com/chiphuyen/aie-book)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) by Georgia Tech Polo Club: play with a real small model in your browser and watch each step.
- [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/) by OpenAI: why models make things up, from the people who build them.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Setting Up Your Tools](04-setting-up-your-tools.md) · [Course map](README.md) · [Next lesson: The AI Staircase →](06-the-ai-staircase.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
