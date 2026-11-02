# Grading Answers

*Section 3: RAG with LLM Zoomcamp · Lesson 16 of 42 · about 9 hours*

**Before you start, check that** running your ingestion script twice changes nothing, and the manifest is committed.

## Introduction

> **Hiring a model to mark exams is clever. Not checking its marking isn't.**

Good search isn't enough: the final answer also has to be right. Checking hundreds of answers by hand is slow, so you'll use a model to grade them. This is called an LLM judge.

A judge can be wrong too, so you'll check the judge against your own grades.

**After this, you can** grade hundreds of answers and know when to trust the grader.

**The skill that lasts:** checking the checker. Hamel Husain calls error analysis the most important activity in evals ([AI Evals FAQ](https://hamel.dev/blog/posts/evals-faq/)).

## Lesson overview

By the end of this lesson, you should be able to:

- Generate answers for many questions at once.
- Grade answers with an LLM judge.
- Check that the judge agrees with you.
- Choose a model setup by looking at quality, speed and cost together.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** What agreement rate with your own grades would make you trust an LLM judge? Pick a number.

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#grading-answers).

## Before you read

**Picture this:** An LLM judge is a new teaching assistant hired to mark 500 scripts. Before trusting them, the head teacher marks 30 of the same scripts and studies every disagreement, not just the average, and keeps spot-checking for as long as the assistant marks.

A judge is a second model with a marking scheme. Question, answer and sources go in; a verdict and a reason come out. Judges are often too lenient, so grade a sample yourself and count how often you agree. As Zoomcamp's lesson 13 puts it, you can't use another judge to check the judge.

- **LLM judge**: a model prompted to grade another model's answer
- **agreement rate**: the share of answers where the judge's verdict matches yours

## Assignment

### Prefer watching?

- ▶ [Why There's No LLM Judge You Can Trust 100% of the Time](https://www.youtube.com/watch?v=Th9vlxxAVeA) (Hamel Husain, 2 min): A short warm-up before the judge lessons.

### Day 1 · about 90 min

1. [11 Evaluation intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/11-evaluation-intro.md) and [12 RAG answers](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/12-rag-answers.md).

### Day 2 · about 90 min

2. [13 LLM as judge](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/13-llm-as-judge.md). Pay attention to “Evaluating the judge”. Then skim [14 Agent evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/14-agent-evaluation.md) and [15 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/15-next-steps.md). For 14, watch its 2-minute video and read only the headings; the page itself is long.

### Days 3–5 · about 4.5 hours

3. Add to Ask MDN, one piece a Day. Run the judge once per change, not after every small idea.
4. **Day 3:** generate answers for your 20 practice questions and save them to a file, so you can grade again without paying again.
5. **Day 4:** write the judge and use it to grade all 20 answers.
6. **Day 5:** grade 10 of the answers yourself, before you look at the judge's verdicts. Write down how often the judge agreed with you.

### Day 6 · about 90 min

7. Read only “Design your eval process” in OpenAI’s [evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices). Use your own files and grader; you don't need OpenAI’s hosted Evals platform.
8. Choose 10 of your practice questions. Include some with exact identifiers (like `justify-content`) and some your docs can't answer. Compare two models from your current provider. Give both the same retrieved chunks, prompt and output limit. Estimate the cost first. If you can only use one model, compare two settings of it instead, and call it a configuration comparison, not a model comparison.
9. Hide the model names while you grade correctness, citation support and refusals. Record the cost, total time and failures for each answer. Re-run the two most unclear cases once to see how much answers vary. Don't touch your held-back questions.
10. Write a five-line decision: the quality you accept, the longest wait and highest cost you accept, which option meets them, one failure it still has, and what would make you reconsider.
11. Save a run manifest: model ID, prompt or config version, corpus hash, date and scores.

### Memory check · 10 min

12. Close this page. In your log, answer from memory, then check:
   - When is the cheaper model the better engineering choice? ([where to check](16-grading-answers.md))
   - Why save a content hash for every page? ([where to check](15-data-ingestion.md))
13. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: When is the cheaper model the better engineering choice?</summary>

When it meets the quality and safety bar you set before testing, within your speed and cost limits. Compare the models on identical inputs and look at the failures. A tiny test set can't show that one model is better everywhere.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Why save a content hash for every page?</summary>

A saved hash shows which pages changed, so later runs can skip the unchanged ones. Hashes can't show that a page has disappeared, so compare the page IDs in successive manifests too.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [AI Evals FAQ by Hamel Husain and Shreya Shankar (more on evals)](https://hamel.dev/blog/posts/evals-faq/)
- [Creating an LLM-as-a-judge that drives business results](https://hamel.dev/blog/posts/llm-judge/) by Hamel Husain: how to build a judge you can actually trust.
- [Building with the Claude API: prompt evaluation](https://academy.claude.com/courses/building-with-the-claude-api): an optional video alternative. Use only the Prompt evaluation section; you don't need a second full course.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Data Ingestion](15-data-ingestion.md) · [Course map](README.md) · [Next lesson: Monitoring →](17-monitoring.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
