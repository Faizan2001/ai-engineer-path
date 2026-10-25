# Project: Make It Sturdy

*Section 5: Make It Sturdy · Lesson 31 of 32 · about 3.5 weeks*

## Introduction

> **Dress rehearsal for the Campus Assistant: two groups, real logins, one tireless attacker. It's you.**

This is the final project of the path. Ask MDN gets logins, separate groups, fresh data, automatic tests and an attack test it must pass.

It's very close to the Campus Assistant you'll build next. You've got this!

**After this, you can** ship an AI app that keeps two groups apart, with CI and attack results to prove it.

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
8. Add cost tracking for each group, a simple rate limit for each user, and an off switch: a setting that makes the app stop answering.
9. Update the README with your results and a diagram of how it fits together. End with a one-page pitch for the Campus Assistant: what you'd change to serve many universities.

### Recall · 10 min

10. Close this page. In your log, answer from memory, then check:
   - Why can a role created in Neon's website skip your access rules? ([where to check](https://neon.com/docs/manage/roles))
   - What counts as a breach in your attack test? ([where to check](30-red-team-your-app.md))
11. Write one more line: how will this lesson help your Campus Assistant?

## You're done when

- [ ] Tests prove a CSS user can't reach JavaScript docs or notes through search, through tools, or by guessing document IDs.
- [ ] After a sync, the deleted test pages produce no search results and no citations in new answers, including in existing chats.
- [ ] pytest and promptfoo run in GitHub Actions (model-graded checks on pull requests), and a broken prompt makes CI fail.
- [ ] Across 3 runs of every attack case: zero unauthorized reads or writes, zero canary leaks to the other group, and zero planted instructions carried out, while normal requests still work. You checked this in the tool logs and the database, not just in the replies.
- [ ] Cost tracking for each group, the rate limit and the off switch all work.
- [ ] You can explain how a request moves through your app, two decisions you made and one problem you fixed. You found and fixed at least one bug without AI help, and wrote down how you found it.

## Extra credit

- Give each group a monthly budget that pauses answers when it runs out.
- Add a third group that can see both CSS and JavaScript docs.
- Capture the flag: give a friend 30 minutes, signed in as the CSS team, to leak a JS canary. Add their attempts to your attack cases.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Red-Team Your App](30-red-team-your-app.md) · [Course map](README.md) · [Next lesson: What's Next →](32-whats-next.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
