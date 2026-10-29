# Evals That Catch Real Bugs

*Section 5: Make It Sturdy · Lesson 27 of 42 · about 6 hours*

**Before you start, check that** `save_note` only runs after approval, and your step, cost and retry limit tests pass.

## Introduction

*Picture next year's demo. University A's events officer asks your Campus Assistant about next week, and one forgotten WHERE clause shows her University B's unannounced fest. This section rehearses that day with a CSS team and a JS team, and makes the leak impossible rather than unlikely.*

> **“4.2 out of 5” fixes nothing. Fifty real conversations show exactly what to fix.**

Vague scores like “4 out of 5 for helpfulness” don't find bugs. Reading real failures does.

In this lesson you'll turn your app's logs into tests. Evals are simply tests for how your AI behaves.

**After this, you can** turn real failures into tests that catch them next time.

**The skill that lasts:** error analysis: deciding what “good” means. People discover their criteria by grading real outputs, so your judgment sets the bar.

## Lesson overview

By the end of this lesson, you should be able to:

- Find patterns in real failures (error analysis).
- Write a pass-or-fail check for each kind of failure.
- Check that an LLM judge agrees with you.

## Before you read

Don't invent metrics first. Read 50 real conversations, note each failure in one line, then sort the notes into groups. Each group becomes one yes-or-no test. You find out what “good” means by reading.

- **error analysis**: reading real outputs, noting failures and grouping them
- **trace**: the full record of one conversation, including tool calls

## Assignment

### Prefer watching?

- ▶ [Error Analysis: The Highest ROI Technique In AI Engineering](https://www.youtube.com/watch?v=e2i6JbU2R-s) (Hamel Husain, 12 min): The Day 1 reading's author, showing it on real data.

### Day 1 · light day, about 45 min

1. Read [Why is error analysis so important, and how is it done?](https://hamel.dev/blog/posts/evals-faq/why-is-error-analysis-so-important-in-llm-evals-and-how-is-it-performed.html), one answer from Hamel Husain and Shreya Shankar's [AI Evals FAQ](https://hamel.dev/blog/posts/evals-faq/). Keep the full FAQ for later. Then, before looking at any data, write down the three failures you expect most often in Ask MDN; Day 3 checks your guess. This week, also start your 30-minute weekly crisis-set block from [Campus Knowledge Base](20-campus-knowledge-base.md).

### Day 2 · light day, about 45 min

2. Read Eugene Yan's [Product Evals in Three Simple Steps](https://eugeneyan.com/writing/product-evals/). Write down which of his three steps Ask MDN already has, and which it's missing.

### Day 3 · about 90 min

3. Collect 50 permitted public/synthetic conversations: use recent redacted diagnostic examples from Neon, topped up with the Zoomcamp [synthetic data generator](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/11-synthetic-data.md). Review them before keeping a separate evaluation fixture; do not extend raw-log retention to fill the count. Read in two 25-minute blocks, write down every failure and sort them into 3 to 6 groups.

### Day 4 · about 90 min

4. Write a pass-or-fail check for each group. Use plain code where you can, and an LLM judge only where you must.

### Day 5 · about 90 min

5. Grade 20 answers yourself, then check how often your LLM judge agrees with you.

### Memory check · 10 min

6. Close this page. In your log, answer from memory, then check:
   - Why use pass or fail instead of a 1 to 5 score? ([where to check](https://hamel.dev/blog/posts/evals-faq/))
   - What do you save for every conversation in Ask MDN? ([where to check](17-monitoring.md))
7. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

## Additional resources

These are optional. Use them if you want to go further.

- [Chip Huyen, AI Engineering, chapters 3 and 4 (book)](https://github.com/chiphuyen/aie-book)
- [Task-specific LLM evals that do and don't work](https://eugeneyan.com/writing/evals/) by Eugene Yan: which checks catch real problems and which ones just look busy.
- [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) (Anthropic, 2026): calibrating model graders against people, giving the grader an “unknown” option, and checking consistency across repeated runs.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Start Applying](26-start-applying.md) · [Course map](README.md) · [Next lesson: Testing and CI →](28-testing-and-ci.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
