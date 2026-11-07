# Under the Hood: A Tiny GPT

*Section 3: RAG with LLM Zoomcamp · Lesson 21 of 41 · about 9 hours*

**Before you start, check that** [Ask MDN](19-project-ask-mdn.md) v1.0 works and your micrograd Days in [ML Basics](10-ml-basics-measuring-quality.md) are done.

## Introduction

> **You've been calling a model for months. This week you build a very small one.**

Every answer Ask MDN gives comes from a machine that predicts the next token. This lesson opens that machine. You'll build a next-character model by counting, turn it into a tiny neural network, and then add the one idea that makes GPTs work: attention.

It uses the same mechanism as the models you call, at a size a laptop or a free notebook can train in minutes. You won't compete with them. The goal is to understand tokens, context windows, training loss and sampling, so you can reason about failures instead of guessing.

**After this, you can** explain, from your own working code, how a GPT turns a context into the next token.

**The skill that lasts:** first-principles understanding. Tools change; the mechanism underneath them doesn't.

## Lesson overview

By the end of this lesson, you should be able to:

- Build a next-character model by counting, then as a one-layer neural network.
- Implement self-attention by hand and add it to a tiny transformer.
- Train it, read the training and validation loss, and change one thing fairly.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** A model that only looks at the previous character writes names. Guess how many of 20 sampled names will look like real names.

## Assignment

### Day 1 · under the hood, about 90 min

> **Why:** Build a next-character model by counting, and learn what the loss number means.
>
> **Skip if** you've done Karpathy's first makemore lecture.

1. Watch Andrej Karpathy's [building makemore](https://www.youtube.com/watch?v=PaCmpygFfXo) up to 1:02:57, typing as you go. You'll count letter pairs in a list of names, sample new names and compute the average negative log likelihood. In the broadcasting section (36:17 to 50:14), watch without typing, then type only the final normalisation line.
2. Stop when you can sample 20 names and say what the loss number means.

### Day 2 · under the hood, about 90 min

> **Why:** Rebuild the same model as a tiny neural network, and see why both reach the same loss.
>
> **Skip if** you've finished the first makemore lecture to the end.

3. Finish the video from 1:02:57. You'll rebuild the same bigram model as a one-layer neural network in PyTorch, trained with gradient descent. Watch the summary (1:26:17 to 1:35:49) and the two notes (1:47:49 to 1:54:31) without typing.
4. Stop when its loss is close to the counting model's loss, and you can explain why they should match.

### Day 3 · under the hood, about 90 min

> **Why:** Start the GPT build and learn attention's core trick: averaging earlier tokens with one matrix.
>
> **Skip if** you've done Let's build GPT up to the attention section.

5. Start Karpathy's [Let's build GPT](https://www.youtube.com/watch?v=kCc8FmEb1nY). Watch up to 42:13 without typing. You built the data split, batches and a bigram model in makemore, so copy `bigram.py` from the [lecture's code](https://github.com/karpathy/ng-video-lecture) instead.
6. Then type along from 42:13. Before the attention section, do the “mathematical trick” by hand: on a 4-token example, average each token with the tokens before it, first with loops, then as one matrix multiplication.
7. Stop when both versions give the same numbers.

### Day 4 · under the hood, about 90 min

> **Why:** Build self-attention by hand, the idea every GPT is built on.
>
> **Skip if** you've implemented multi-head self-attention from scratch.

8. Build one self-attention head, then several heads and a feed-forward block, following the video. Keep every shape written in a comment.
9. Stop when a forward pass runs on a batch and every shape matches your comments.

### Day 5 · under the hood, about 90 min

> **Why:** Train your tiny GPT and watch it write text.
>
> **Skip if** you've trained a small transformer from scratch and still have the code. Day 6 uses it.

10. Add residual connections and layer norm as the video does (1:26:48 to 1:37:49).
11. Then train a tiny configuration on CPU or a free [Colab](https://colab.research.google.com/) notebook, on a small text you have the right to use (the video's Shakespeare file is fine). Plot training and validation loss, and sample some text.
12. Stop when the plot and a sample are committed. If training is too slow, shrink the model; the goal is the mechanism, not quality.

### Day 6 · under the hood, about 90 min

> **Why:** Run one fair experiment, then explain context windows, token cost and temperature from your own code.
>
> **Don't skip:** This explanation is the payoff of the whole lesson.

13. Change one thing, such as the context length or the number of layers (with residuals and layer norm in place). Compare training and validation loss fairly: same data, same steps, same seed.
14. Without the video, explain in your log what a context window is, why tokens cost money, and what temperature changes, using your own code as the example.
15. Then answer one more question. Your tiny GPT can only continue text, but the model you use every day can ask your code to run a tool. Why? Hint: after pre-training, it was trained further on examples of tool requests, written with special tokens that mark where a request starts and ends. Your code, not the model, runs the tool, as in [Tools and the Agent Loop](11-tools-and-the-agent-loop.md).
16. Stop when someone could follow your explanation.

### Memory check · 10 min

17. Close this page. In your log, answer from memory, then check:
   - Why should the counting bigram model and the one-layer neural network reach about the same loss? ([where to check](21-under-the-hood-tiny-gpt.md))
   - What does self-attention let a token do that a bigram model can't? ([where to check](21-under-the-hood-tiny-gpt.md))
18. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why should the counting bigram model and the one-layer neural network reach about the same loss?</summary>

Both model the same thing: the next character, given only the previous one. Gradient descent pushes each row of weights toward the log of that row's counts, so softmax gives about the same probabilities as the normalised counts. Smoothing and regularisation keep the match only approximate.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: What does self-attention let a token do that a bigram model can't?</summary>

Use information from all earlier tokens in the context, weighted by relevance, instead of only the one before it.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) by Andrej Karpathy: the full series these Days come from.
- [Elective: Go Deeper into Model Internals](47-elective-model-internals.md): more depth on how these models work, when you want it.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Campus Knowledge Base](20-campus-knowledge-base.md) · [Course map](README.md) · [Next lesson: Agent Fundamentals →](22-agent-fundamentals.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 7 Nov 2026
