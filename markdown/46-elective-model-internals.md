# Elective: Build a Tiny Language Model

*Section 8: Electives · Elective 5 of 5 · about 2 weeks*

## Introduction

> **You don't need to build models to use them well. Building a tiny one removes the magic.**

Train a tiny character-level language model in PyTorch, then a small transformer, to understand tokens, training loss and why bigger models behave differently.

**After this, you can** explain how a transformer is trained, from your own working code.

**The skill that lasts:** model-level understanding, the starting point for ML and model-platform roles.

## Lesson overview

By the end of this lesson, you should be able to:

- Train a bigram model, then a small transformer, on a text you choose.
- Read the training curve and explain overfitting.
- Connect what you saw to tokens, context and sampling in the models you use.

## Assignment

1. Follow Andrej Karpathy's [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) through the makemore lectures, typing the code yourself. The GPT lecture is an optional extension; allow 2–3 more weeks for it.
2. Train on a small Bangla or English text you have rights to. Plot training and validation loss and explain one sign of overfitting.
3. Write one page linking what you built to tokens, context windows and temperature in the models you call.

### Memory check · 10 min

4. Close this page. In your log, answer from memory, then check:
   - What does a gap between training and validation loss tell you? ([where to check](46-elective-model-internals.md))
5. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What does a gap between training and validation loss tell you?</summary>

The model is fitting its training text better than new text: it's starting to memorize rather than generalize.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch) by Sebastian Raschka: a book-length build of a GPT-style model.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Elective: Voice and Images](45-elective-voice-and-images.md) · [Course map](README.md) · [Back to the course map →](README.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
