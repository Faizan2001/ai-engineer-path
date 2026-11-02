# ML Basics: Measuring Quality

*Section 3: RAG with LLM Zoomcamp · Lesson 10 of 42 · about 1.5 weeks*

**Before you start, check that** Ask MDN v0.1 loads your two MDN folders into minsearch and finds a sensible page for “What does flex-wrap do?”.

## Introduction

> **Write the exam, mark it yourself, score 100%. Machine learning calls that a bug.**

Before you improve Ask MDN, you need a fair way to measure it. Every test depends on two basic ideas.

First, keep some test data hidden while you build, or your score will fool you. Second, know precision (how much of what you found is right) and recall (how much of the right stuff you found).

**After this, you can** catch a score that looks great because test data leaked into the tuning.

**The skill that lasts:** judging data: splits, leaks, precision and recall. You can use them to question any accuracy claim, even a vendor's.

## Lesson overview

By the end of this lesson, you should be able to:

- Split data into practice data and test data.
- Spot “teaching to the test”, when test data sneaks into your tuning.
- Explain precision and recall.
- Write your first Ask MDN test questions.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** You tune a prompt until it scores 100% on your test questions. Is it good? What could be wrong?

## Assignment

### Prefer watching?

- ▶ [Precision vs Recall with a Clear Example](https://www.youtube.com/watch?v=qWfzIYCvBqo) (Kimberly Fessel, 5 min): Covers the same idea as the reading. Afterwards, write one sentence about it in your log.

### Day 1 · light day, about 45 min

> **Why:** Learn why test data must stay hidden while you tune.
>
> **Skip if** you can explain training, validation and test splits, and how data leaks.

1. Read Google's ML Crash Course lesson [Dividing the original dataset](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets). This is a light day, good for low-energy days or a power cut.

### Day 2 · light day, about 45 min

> **Why:** Learn precision and recall, the two numbers behind most search scores.
>
> **Skip if** you can define precision and recall and give an example of each.

2. Read Google's ML Crash Course lesson [Accuracy, precision and recall](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall).

### Days 3–5 · about 4.5 hours

> **Why:** Write the questions Ask MDN is tuned on, including ones it must refuse.
>
> **Don't skip:** The next lessons score Ask MDN on these files.

3. In your `ask-mdn` repo, write 20 practice questions for Ask MDN. For each one, list the page IDs (file paths) that answer it. These are for tuning, so use them as often as you like.
4. Write 10 questions your two MDN folders cannot answer. Mix clearly unrelated questions with believable CSS or JavaScript questions whose answer isn't in your folders. Write down why each one can't be answered. You'll use these to teach Ask MDN to say “I don't know”.
5. Commit both files. You'll write the hidden test questions later.

### Day 6 · campus track, about 45 min

> **Why:** Start the capstone's question bank, and ask the university for contacts now, because replies take weeks.
>
> **Don't skip:** The capstone needs this bank and these contacts.

6. Start your capstone question bank in a new **private** repository called `campus-assistant-data`. Write 20 questions that students at your university really repeat: fees, add/drop, withdrawal, scholarships, exams, services. Use your own words, and write some the way students type: English, Bangla and Banglish (romanized Bangla, such as “withdraw korle ki scholarship thakbe?”).
7. For each question, add an intent label (for example `withdraw-scholarship`), the office you think owns the answer, and whether you believe an official page answers it. Never store names, usernames, profile links or screenshots of real people. That rule holds for the whole capstone.
8. Split the bank the way you split the Ask MDN questions: 14 for practice and 6 held back. You'll add more questions later.
9. Send a short, friendly email to your student affairs or registrar office. Say what you're building, that it's an unofficial student project, and ask for a named contact for policy questions and the counselling centre's contact details. Replies take weeks, so ask now.

### Days 7–10 · under the hood, about 6 hours

> **Why:** Build backpropagation yourself, so “training a model” means something concrete, then watch overfitting happen.
>
> **Skip if** you've already built micrograd or an autograd engine. Still do the overfitting experiment at the end.

10. Across these four Days, follow Andrej Karpathy's [building micrograd](https://www.youtube.com/watch?v=VMj-3S1tku0) (2.5 h), typing every line yourself. Pause before each new function and predict what it must do. Need PyTorch for the checks? Get the CPU-only build: add the PyTorch CPU index to `pyproject.toml` as in uv's [PyTorch guide](https://docs.astral.sh/uv/guides/integration/pytorch/), then run `uv add torch`. Or use a free [Colab](https://colab.research.google.com/) notebook.
11. **Day 7 (up to 32:10):** derivatives by nudging an input, then a `Value` class that adds and multiplies and draws its expression graph. Stop when it draws one small expression with the right values.
12. **Day 8 (32:10 to 1:09:02):** fill in gradients by hand, first for a small expression, then for a neuron with `tanh`. Stop when they match the ones you work out on paper.
13. **Day 9 (1:09:02 to 1:51:04):** a `_backward` for each operation and one `backward()` that uses a topological sort. Check it against PyTorch, then write a neuron, a layer and a tiny MLP. Stop when your gradients match PyTorch's to 4 decimal places and the MLP runs a forward pass.
14. **Day 10 (1:51:04 to 2:14:03):** train the MLP on the video's four examples until the loss falls steadily.
15. Now see overfitting yourself. Make data where it is easy to see: two overlapping clusters of 2-D points, with 20 points for training (flip 10% of their labels) and 200 held out.
16. Train a 2-16-16-1 MLP for 500 steps. Every 10 steps, log the training loss and the held-out loss. Plot both (`uv add matplotlib`).
17. Find where the training loss keeps falling but the held-out loss stops falling. That is overfitting, measured by you. If the held-out loss never flattens, halve the training set. Stop when the plot and a three-line explanation are committed.

### Memory check · 10 min

18. Close this page. In your log, answer from memory, then check:
   - Why must test questions stay hidden while you tune? ([where to check](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets))
   - Why did you freeze one exact version of the MDN docs? ([where to check](09-keyword-rag.md))
19. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

## Additional resources

These are optional. Use them if you want to go further.

- [Chip Huyen, AI Engineering, chapter 3, “Exact Evaluation” (book)](https://github.com/chiphuyen/aie-book)
- [Common pitfalls and recommended practices](https://scikit-learn.org/stable/common_pitfalls.html) by scikit-learn docs: the classic ways test data leaks into your tuning.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Keyword RAG](09-keyword-rag.md) · [Course map](README.md) · [Next lesson: Tools and the Agent Loop →](11-tools-and-the-agent-loop.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
