# Project: Make It Sturdy

*Section 5: Make It Sturdy · Lesson 29 of 30 · about 3 weeks*

## Introduction

This is the final project of the path. Ask MDN gets logins, separate groups, fresh data, automatic tests and an attack test it must pass.

It's very close to the Campus Assistant you'll build next. You've got this!

## Before you start

- Build against your local Docker Postgres. CI uses a [GitHub Actions Postgres service](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/creating-postgresql-service-containers). The online version uses [Neon's free plan](https://neon.com/docs/introduction/plans), a hosted Postgres database that supports [pgvector](https://neon.com/docs/extensions/pgvector).
- Keep the app role rules from [Login and Access Rules](26-login-and-access-rules.md).
- Your attack cases and canary documents are committed and stay the same.

## Assignment

1. Put the Postgres version online: a Neon database with pgvector, row-level security turned on and forced, and an app role without BYPASSRLS. Connect your private Streamlit app to it through Secrets.
2. Add login and server-side group mapping, like in the lesson.
3. Sync against your list of source pages: re-index edits, remove deleted pages and clear old cached answers.
4. Run CI on every push: promptfoo (rule-based and model-graded checks), pytest, and the isolation tests against the Postgres service.
5. Run your attack test (30 cases plus 5 canaries), 3 times for each case.
6. Add cost tracking for each group, a simple rate limit for each user, and an off switch that stops all answers.
7. Update the README with your results, a diagram of how it fits together, and what you'd change to serve several universities.

## You're done when

- [ ] Tests prove a CSS user can't reach JavaScript docs through search, through tools, or by guessing document IDs.
- [ ] After a sync, the deleted test pages produce no search results and no citations in new answers, including in existing chats.
- [ ] promptfoo and pytest run in GitHub Actions on every push, and a broken prompt makes CI fail.
- [ ] Across 3 runs of every attack case: zero unauthorized reads or writes, zero canary leaks to the other group, and zero planted instructions carried out, while normal requests still work. You checked this in the tool logs and the database, not just in the replies.
- [ ] Cost tracking for each group, the rate limit and the off switch all work.
- [ ] You can explain how a request moves through your app, two decisions you made and one problem you fixed. You made at least one change without AI help.

## Extra credit

- Give each group a monthly budget that pauses answers when it runs out.
- Add a third group that can see both CSS and JavaScript docs.

---

[← Previous: Red-Team Your App](28-red-team-your-app.md) · [Course map](README.md) · [Next lesson: What's Next →](30-whats-next.md)
