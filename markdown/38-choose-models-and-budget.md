# Choose Models and a Budget

*Section 6: Capstone: Campus Assistant · Lesson 38 of 42 · about 7.5 hours*

**Before you start, check that** your eval from [Answer, Ask or Route](36-answer-ask-or-route.md) runs with one command and saves results with model and prompt versions.

## Introduction

> **The best model is the cheapest one that passes your tests.**

You can run models on your own laptop, use a provider's free tier, or pay per token. Each has a different cost, speed, quality on Bangla, privacy terms and amount of work to keep running.

You'll run the same eval through three configurations and decide with numbers: quality per language, correct refusals, latency and cost per 1,000 questions at your expected traffic.

**After this, you can** defend a model choice with an eval, a latency measurement and a monthly cost estimate.

**The skill that lasts:** cost engineering. Prices and models change every few months; a repeatable bake-off doesn't.

## Lesson overview

By the end of this lesson, you should be able to:

- Compare a low-cost and a stronger hosted model on the same eval, plus a local one if you have it.
- Estimate monthly cost at three traffic levels, including caching.
- Set budget alerts and a per-user limit.

## Assignment

### Day 1 · about 90 min

1. Local models are optional here. If you did [Elective: Run Models Locally](43-elective-local-models.md), add your local model as a third contender; otherwise say in your results that you skipped it.
2. Compare two hosted models (and your local one, if you have it) on the same development and regression sets, prompt and retrieval configuration. Record quality per language, abstention results, median and slow (p95) latency, and tokens per question. These are model-selection scores, not final release evidence; keep `held_back.jsonl` sealed.

### Day 2 · about 90 min

3. Read each provider's current pricing page, data-use terms and age terms. Free tiers may use your prompts to improve their products, and providers treat users under 18 differently: some forbid them, others allow them with safeguards or a parent's consent. Some freshers are 17. Read the terms for your exact use, the API rather than the consumer app, and record what they require. Use your expected language mix and the token ratios from [How LLMs Work](05-how-llms-work.md) Day 2, checked against the tokens per question you recorded on Day 1. Compute cost per 1,000 questions and per month at 2,000, 20,000 and 100,000 questions, including reasoning tokens. Show the arithmetic.

### Day 3 · about 90 min

4. Write `MODEL-DECISION.md`: the serving candidate chosen on development data, a proposed fallback, and where local models help (labeling, offline tests, private experiments). Record provider age and retention terms and when to repeat the comparison. Freeze the chosen model, prompt and retrieval versions for the later release check. A changed model or fallback needs its own release evidence before use; do not pick a winner by repeatedly testing the final held-back set.

### Day 4 · about 90 min

5. Add guards: a monthly budget alert, a per-user daily question limit and a global off switch. Test that the limit returns a friendly message, not an error.
6. Don't cache answers yet. Write down the cache key you would need later: university, knowledge-base version, entry IDs and their approval versions, normalised question and answer language. Note why answers that depended on a student's own details must never be cached, and how an entry changing status would clear the cache.

### Day 5 · about 90 min

7. Measure before optimising. Put stable content first (instructions, output format, office directory, a few examples) and the question last. Then send the same request twice, a few seconds apart, and compare cached and uncached input tokens in `usage`. Check your provider's caching docs: some cache automatically, others only what you mark (Anthropic's API uses `cache_control`), and every provider skips prompts below a minimum length (1,024 tokens on OpenAI). So 0 cached tokens on a short prompt is expected: record that caching doesn't apply yet. Using your provider's current price list, including any extra charge for writing to the cache, compute when caching pays at your real traffic. Don't lengthen a prompt just to reach a cache threshold, and don't set a hit-rate target before you've measured one.
8. Run your development set at low and medium reasoning effort and record quality, slow (p95) latency and cost per 1,000 questions; reasoning tokens are billed as output. Add to `MODEL-DECISION.md` when you'd use a stronger model: only when good evidence was retrieved and the model still failed to use it. A stronger model can't fix a missing source.
9. Stop here when both comparisons and the rule are in your decision file.

### Memory check · 10 min

10. Close this page. In your log, answer from memory, then check:
   - Why can a laptop model be right for development but wrong for serving 30,000 students? ([where to check](38-choose-models-and-budget.md))
11. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why can a laptop model be right for development but wrong for serving 30,000 students?</summary>

Serving needs uptime, many simultaneous users and predictable speed. A laptop gives none of these, though it is free and private for experiments and labeling.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: A Course-Planning Helper](37-course-planning-helper.md) · [Course map](README.md) · [Next lesson: Ship It: Service and Website →](39-assistant-service-and-web.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
