# Choose Models and a Budget

*Section 6: Capstone: Campus Assistant · Lesson 37 of 41 · about 4.5 hours*

**Before you start, check that** your eval from [Answer, Ask or Route](36-answer-ask-or-route.md) runs with one command and saves results with model and prompt versions.

## Introduction

> **The best model is the cheapest one that passes your tests.**

You can run models on your own laptop, use a provider's free tier, or pay per token. Each has a different cost, speed, quality on Bangla, privacy terms and amount of work to keep running.

You'll run the same eval on three setups and decide with numbers: quality per language, correct refusals, speed, and cost per 1,000 questions at the traffic you expect.

**After this, you can** defend a model choice with an eval, a latency measurement and a monthly cost estimate.

**The skill that lasts:** cost engineering. Prices and models change every few months, but a repeatable comparison doesn't.

## Lesson overview

By the end of this lesson, you should be able to:

- Compare a low-cost and a stronger hosted model on the same eval, plus a local one if you have it.
- Estimate monthly cost at three traffic levels.
- Write down your choice, and freeze it for the release check.

## Assignment

### Day 1 · about 90 min

> **Why:** Compare models on your own eval, not on public benchmarks.
>
> **Don't skip:** The capstone ships with the model you pick here.

1. Local models are optional here. If you have a local model running, add it as a third contender. Otherwise say in your results that you skipped it.
2. Compare two hosted models (and your local one, if you have it) on the same development and regression sets, with the same prompt and retrieval setup. Record quality per language, “I don't know” results, median and slow (p95) latency, and tokens per question. Keep `held_back.jsonl` sealed.

### Day 2 · about 90 min

> **Why:** Work out the monthly cost, and check each provider's rules for users under 18.
>
> **Don't skip:** Some freshers are 17.

3. Read each provider's current pricing page, data-use terms and age terms. Free tiers may use your prompts to improve their products. Providers also treat users under 18 differently: some forbid them, others allow them with safeguards or a parent's consent. Some freshers are 17. Read the terms for your exact use (the API, not the consumer app), and record what they require.
4. Use your expected language mix and the token ratios from [How LLMs Work](05-how-llms-work.md) Day 2. Check them against the tokens per question you recorded on Day 1.
5. Compute the cost per 1,000 questions, and per month at 2,000, 20,000 and 100,000 questions, including reasoning tokens. Show the arithmetic.
6. Prompt caching can lower these costs later. Don't plan on it yet: measure it once you have real traffic.

### Day 3 · about 90 min

> **Why:** Write down the model decision and freeze it for the release check.
>
> **Don't skip:** The release check tests exactly this setup.

7. Write `MODEL-DECISION.md`: the serving candidate you chose on development data, a proposed fallback, and where local models help (labelling, offline tests, private experiments). Record the provider's age and retention terms, and when to repeat the comparison.
8. Freeze the chosen model, prompt and retrieval versions for the release check later. A changed model or fallback needs its own release evidence before you use it. Don't pick a winner by repeatedly testing the final held-back set.

### Memory check · 10 min

9. Close this page. In your log, answer from memory, then check:
   - Why can a laptop model be right for development but wrong for serving 30,000 students? ([where to check](37-choose-models-and-budget.md))
10. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why can a laptop model be right for development but wrong for serving 30,000 students?</summary>

Serving needs uptime, many simultaneous users and predictable speed. A laptop gives none of these, though it is free and private for experiments and labelling.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Answer, Ask or Route](36-answer-ask-or-route.md) · [Course map](README.md) · [Next lesson: Ship It: Service and Website →](38-assistant-service-and-web.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 7 Nov 2026
