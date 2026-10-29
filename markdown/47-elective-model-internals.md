# Elective: Go Deeper into Model Internals

*Section 8: Electives · Elective 5 of 5 · about 3 weeks*

## Introduction

> **You don't need to build models to use them well. Building a tiny one removes the magic.**

Continue where [Under the Hood: A Tiny GPT](21-under-the-hood-tiny-gpt.md) stopped: better models, the training tricks that make them work, and finally a GPT-2-sized reproduction. Choose this when you want model-building or ML roles.

**After this, you can** explain how tokenization shapes cost and quality for Bangla, and read model-building papers and code with confidence.

**The skill that lasts:** model-level understanding, the starting point for ML and model-platform roles.

## Lesson overview

By the end of this lesson, you should be able to:

- Build a byte-pair tokenizer and train it on Bangla text.
- Measure the token gap between English, Bangla and Banglish, and explain it.
- Retrain your tiny GPT with your tokenizer; then, if you want, makemore 2–5 and GPT-2.

## Assignment

1. Watch Karpathy's [Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) and build a byte-pair encoder, using [minbpe](https://github.com/karpathy/minbpe) as the reference. Train it on a slice of [Bangla Wikipedia](https://dumps.wikimedia.org/bnwiki/) (openly licensed under CC BY-SA; credit it). Never train on group posts, form answers or anything personal.
2. Measure tokens per word for English, Bangla and Banglish with your tokenizer and with your provider's counts from lesson 5. Explain the gap.
3. Retrain your tiny GPT from [Under the Hood](21-under-the-hood-tiny-gpt.md) on the same Bangla text twice: once with your tokenizer and once character by character. Compare loss per character on the same validation text (the sum of per-token losses divided by the number of characters), not the raw per-token loss, and compare samples.
4. Optional, for model-building roles: makemore lectures 2–5 from [Zero to Hero](https://karpathy.ai/zero-to-hero.html), then [Let's reproduce GPT-2 (124M)](https://www.youtube.com/watch?v=l8pRSuU81PU) on a rented GPU.

### Memory check · 10 min

5. Close this page. In your log, answer from memory, then check:
   - Why does the same question usually cost more tokens in Bangla than in English? ([where to check](47-elective-model-internals.md))
6. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why does the same question usually cost more tokens in Bangla than in English?</summary>

A tokenizer learns its merges from its training text. When that text is mostly English, common English words become single tokens while Bangla words split into several pieces, so the same meaning takes more tokens.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch) by Sebastian Raschka: a book-length build of a GPT-style model.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Elective: Voice and Images](46-elective-voice-and-images.md) · [Course map](README.md) · [Back to the course map →](README.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
