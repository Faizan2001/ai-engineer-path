# Project: Make It Sturdy

*Section 5: Make It Sturdy · Lesson 31 of 32 · about 3.5 weeks*

**Before you start, check that** your 30 attack cases and 5 canary documents are committed, with a list of the attacks that worked.

## Introduction

> **Dress rehearsal for the Campus Assistant: two groups, real logins, one tireless attacker. It's you.**

This is the final project of the path. Ask MDN gets logins, separate groups, fresh data, automatic tests and an attack test it must pass.

This brings the pieces together in a small deployed system. Passing these checks demonstrates this project's behavior under the cases you tested; a real institutional rollout still needs its own requirements and operational review.

**After this, you can** demonstrate a small AI app with access checks, release gates and recorded reliability tests.

**The skill that lasts:** owning reliability, security and cost at the same time.

## Before you start

- Write your own week-by-week plan in your log first, then compare it with the steps below. Do Extra credit only after every “You're done when” line passes.
- Build against your local Postgres. CI uses a [GitHub Actions Postgres service](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/creating-postgresql-service-containers) with the `pgvector/pgvector:0.8.7-pg17` image (the plain `postgres` image has no pgvector). The online version uses your Neon project.
- Keep the app role rules from [Postgres Search and Access Rules](27-postgres-search-and-access-rules.md). Your attack cases and canary documents stay the same.
- Don't look at other people's versions of this project until yours works. Then compare and learn.
- Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error.

## Assignment

### Week 1 · about 9 hours

1. Move the Postgres version online: on Neon, enable pgvector, turn row-level security on and force it, and use your SQL-created app role. Connect your private Streamlit app to it through Secrets.
2. Add login and server-side group mapping, like in Login.
3. Checkpoint: the online app shows a CSS user only CSS answers.

### Week 2 · about 9 hours

4. Sync against your manifest: re-index edits and remove deleted pages.
5. Run CI: pytest, the isolation tests and the rule-based promptfoo checks on every push, against the Postgres service; the model-graded checks on pull requests.
6. Checkpoint: a broken prompt makes CI fail.

### Weeks 3–4 · about 13 hours

7. Run your attack test (30 cases plus 5 canaries), 3 times for each case. Fix what breaks, then run it again.
8. Set aside 12 fresh questions after freezing this version: 4 each for CSS and JS with expected answers/supporting passages, plus 4 plausible questions unsupported by that user's permitted documents. Before running them, record an acceptance rule: for this learning project, at least 7 of 8 supported answers correct and supported by citations, all 4 unsupported requests declined, and no unauthorized reads/writes. Grade manually and show counts and all failures. These small-sample targets are practice gates, not production guarantees. If you fix a failure, keep these as regression cases and reserve fresh cases for another independent check.
9. Add cost tracking for each group, a simple rate limit for each user, and an off switch: a setting that makes the app stop answering.
10. Update the README with your results and a diagram of how it fits together. End with a one-page pitch for the Campus Assistant: what you'd change to serve many universities.

### Memory check · 10 min

11. Close this page. In your log, answer from memory, then check:
   - Why can a role created in Neon's website skip your access rules? ([where to check](https://neon.com/docs/manage/roles))
   - What counts as a breach in your attack test? ([where to check](30-red-team-your-app.md))
12. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

## You're done when

- [ ] Tests cover document, note, saved-chat, checkpoint and approval access: another user cannot use a guessed ID to read or resume private state. Document tests also enforce group separation.
- [ ] After a sync, the deleted test pages produce no search results and no citations in new answers, including in existing chats.
- [ ] Required checks prevent a failing PR from reaching the deployment branch. The live app stays on the last passing version; the final fresh quality check also meets its recorded criteria.
- [ ] Across 3 runs of every attack case: zero unauthorized reads or writes, zero canary leaks to the other group, and zero planted instructions carried out, while normal requests still work. You checked this in the tool logs and the database, not just in the replies.
- [ ] Cost tracking for each group, the rate limit and the off switch all work.
- [ ] Explain the request flow, two decisions and one failure. Diagnose and fix a real retrieval, authorization, stale-state or retry bug without AI doing the diagnosis or fix. Show a failing regression check, your reasoning, and the passing result; documentation is allowed.

## Show it off

**Your one-line pitch:** A two-group AI assistant with logins, database policies, release checks and a documented attack suite with zero observed leaks in those runs.

A 3-minute demo, in this order:

1. Sign in as the CSS user and try to reach a JS canary through search, a tool and a guessed document ID. Show the policy that blocks all three.
2. Push a broken prompt and watch CI fail; revert it and watch it pass.
3. Delete a page, run the sync, and show its citation is gone.
4. Show the attack table: 30 cases, 3 runs each, zero leaks.
5. Close with per-group cost, the rate limit, the off switch and your Campus Assistant pitch.

What it proves to employers:

- CI/CD (2,560 of the 6,964 posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md)), evals and security together.
- PostgreSQL and SQL, and keeping a deployed system healthy.

## Extra credit

- Give each group a monthly budget that pauses answers when it runs out.
- Add a third group that can see both CSS and JavaScript docs.
- Capture the flag: give a friend 30 minutes, signed in as the CSS team, to leak a JS canary. Add their attempts to your attack cases.
- Put `answer()` behind a small FastAPI `/answer` endpoint with a Dockerfile, so the app can run on any cloud.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Red-Team Your App](30-red-team-your-app.md) · [Course map](README.md) · [Next lesson: What's Next →](32-whats-next.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
