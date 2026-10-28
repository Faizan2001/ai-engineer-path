# Choose Models and a Budget

*Section 6: Capstone: Campus Assistant · Lesson 37 of 41 · about 6 hours*

**Before you start, check that** your eval from [Answer, Ask or Route](35-answer-ask-or-route.md) runs with one command and saves results with model and prompt versions.

## Introduction

> **The best model is the cheapest one that passes your tests.**

You can run models on your own laptop, use a provider's free tier, or pay per token. Each has a different cost, speed, quality on Bangla, privacy terms and amount of work to keep running.

You'll run the same eval through three configurations and decide with numbers: quality per language, correct refusals, latency and cost per 1,000 questions at your expected traffic.

**After this, you can** defend a model choice with an eval, a latency measurement and a monthly cost estimate.

**The skill that lasts:** cost engineering. Prices and models change every few months; a repeatable bake-off doesn't.

## Lesson overview

By the end of this lesson, you should be able to:

- Compare a local model, a low-cost hosted model and a stronger hosted model on the same eval.
- Estimate monthly cost at three traffic levels, including caching.
- Set budget alerts and a per-user limit.

## Assignment

### Day 1 · about 90 min

1. For the local leg, install [Ollama](https://github.com/ollama/ollama) and pull a small multilingual model that fits your free memory (a 4-billion-parameter model at 4-bit needs about 3 GB of RAM and disk). On a low-memory machine, skip the local leg and say so in your results.
2. Run your eval with a local model through Ollama and with two hosted models. Use the same prompt, retrieval and questions. Record quality per language, abstention results, median and slow (p95) latency, and tokens per question.

### Day 2 · about 90 min

3. Read each provider's current pricing page, data-use terms and age terms. Free tiers may use your prompts to improve their products, and some terms forbid apps used by people under 18; some freshers are 17. Compute cost per 1,000 questions and per month at 2,000, 20,000 and 100,000 questions, including reasoning tokens. Show the arithmetic.

### Day 3 · about 90 min

4. Write `MODEL-DECISION.md`: the winner for serving, the fallback if it fails or gets expensive, and where local models still help (labeling, offline tests, private experiments). Note when you'll rerun this bake-off. Record whether each provider's terms allow users under 18 and how long it keeps your prompts.

### Day 4 · about 90 min

5. Add guards: a monthly budget alert, a per-user daily question limit and a global off switch. Test that the limit returns a friendly message, not an error.
6. Don't cache answers yet. Write down the cache key you would need later: university, knowledge-base version, entry IDs and their approval versions, normalised question and answer language. Note why answers that depended on a student's own details must never be cached, and how an entry changing status would clear the cache.

### Memory check · 10 min

7. Close this page. In your log, answer from memory, then check:
   - Why can a laptop model be right for development but wrong for serving 30,000 students? ([where to check](37-choose-models-and-budget.md))
8. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why can a laptop model be right for development but wrong for serving 30,000 students?</summary>

Serving needs uptime, many simultaneous users and predictable speed. A laptop gives none of these, though it is free and private for experiments and labeling.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: A Course-Planning Helper](36-course-planning-helper.md) · [Course map](README.md) · [Next lesson: Ship It: Service and Website →](38-assistant-service-and-web.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
