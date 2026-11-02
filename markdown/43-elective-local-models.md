# Elective: Run Models Locally

*Section 8: Electives · Elective 1 of 5 · about 1 week*

## Introduction

*The assistant works. Now you can follow your curiosity: run it on your own machine, improve its Banglish, connect it to other AI tools, add voice, or build a model yourself. Each elective is one small, measured experiment.*

> **Free per token isn't free. Measure what it really costs.**

Run open-weight models (models whose files you can download) on your own computer, learn what quantization (shrinking a model to save memory) gives up, and decide where local models fit in your assistant.

**After this, you can** run, measure and serve an open-weight model on your own hardware.

**The skill that lasts:** knowing the real cost of self-hosting: hardware, speed, quality and your time.

## Lesson overview

By the end of this lesson, you should be able to:

- Run two open-weight models at different sizes and quantization levels.
- Measure speed, memory and quality on your eval.
- Put a local model behind the same interface as your hosted one.

## Assignment

> **Why:** Find out what running models on your own machine really costs.
>
> **Skip if** you've run models with Ollama and measured them on your own eval.

1. Install [Ollama](https://github.com/ollama/ollama) or llama.cpp. Run a small and a medium model; record memory use, how long the first word takes on a long prompt, and tokens per second on your machine.
2. Run your Bangla and Banglish eval slice with both, at two quantization levels. Compare with the hosted model you chose in [Choose Models and a Budget](38-choose-models-and-budget.md).
3. Put the best local model behind your assistant's model interface and use it for offline tests and labelling drafts. Write when local serving would make sense for real users, and what it would cost.

### Memory check · 10 min

4. Close this page. In your log, answer from memory, then check:
   - What does quantization trade, and how do you check whether the trade is acceptable? ([where to check](43-elective-local-models.md))
5. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What does quantization trade, and how do you check whether the trade is acceptable?</summary>

Less memory and more speed for some quality. Run your own eval slices at each level; an average benchmark won't tell you about Banglish.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: What's Next](42-whats-next.md) · [Course map](README.md) · [Next lesson: Elective: Fine-Tune a Small Model →](44-elective-fine-tuning.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
