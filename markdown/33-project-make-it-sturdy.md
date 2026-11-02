# Project: Make It Sturdy

*Section 5: Make It Sturdy · Lesson 33 of 42 · about 5 weeks*

**Before you start, check that** your 30 attack cases and 5 canary documents are committed, with a list of the attacks that worked.

## Introduction

> **Dress rehearsal for the Campus Assistant: two groups, real logins, one tireless attacker. It's you.**

This is the last practice project before the capstone. Ask MDN gets logins, separate groups, fresh data, automatic tests and an attack test it must pass.

This brings the pieces together in a small deployed system. Passing the checks shows how the app behaves in the cases you tested. A real rollout at a university would still need its own requirements and review.

Finish the app first. Then give its read-only answer function a small API, so another application can use it. You reuse your validation, permissions and tests.

**After this, you can** show a tested AI app with a separate backend, and what happens when something it depends on fails.

**The skill that lasts:** owning reliability, security and cost at the same time.

## Before you start

- Write your own week-by-week plan in your log first, then compare it with the steps below. Do Extra credit only after every “You're done when” line passes.
- Build against your local Postgres. CI uses a [GitHub Actions Postgres service](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/creating-postgresql-service-containers) with the `pgvector/pgvector:0.8.7-pg17` image (the plain `postgres` image has no pgvector). The online version uses your Neon project.
- Keep the app role rules from [Postgres Search and Access Rules](29-postgres-search-and-access-rules.md). Your attack cases and canary documents stay the same.

## Assignment

### Days 1–6 · about 9 hours

> **Why:** Put the secure Postgres version online, with login and group mapping.
>
> **Don't skip:** This is the base of the project.

1. **Days 1–3:** Move the Postgres version online: on Neon, enable pgvector, turn row-level security on and force it, and use your SQL-created app role. Connect your private Streamlit app to it through Secrets.
2. **Days 4–5:** Add login and server-side group mapping, like in Login.
3. **Stop here on Day 6:** the online app shows a CSS user only CSS answers.

### Days 7–12 · about 9 hours

> **Why:** Add the data sync and the automatic tests that guard every change.
>
> **Don't skip:** CI and the sync are part of the project's evidence.

4. **Days 7–8:** Sync against your manifest: re-index edits and remove deleted pages.
5. **Days 9–11:** Run CI on every push: pytest, the isolation tests and the rule-based promptfoo checks, against the Postgres service. Run the model-graded checks on pull requests.
6. **Stop here on Day 12:** a broken prompt makes CI fail.

### Days 13–21 · about 13.5 hours

> **Why:** Pass the attack test and a fresh quality check, then add cost limits and an off switch.
>
> **Don't skip:** These results go in your README.

7. **Days 13–15:** Run your attack test (30 cases plus 5 canaries), 3 times for each case. Fix what breaks, then run it again.
8. **Days 16–17:** Freeze this version, then set aside 12 fresh questions: 4 each for CSS and JS, with expected answers and supporting passages, plus 4 believable questions that the user's documents can't answer.
9. Before you run them, write down a pass rule. For this learning project: at least 7 of the 8 answerable questions are correct and supported by citations, all 4 unanswerable ones are declined, and there are no unauthorized reads or writes.
10. Run them and grade by hand. Show the counts and every failure. If you fix a failure, keep these questions as regression cases and use fresh ones for the next independent check.
11. **Days 18–19:** Add cost tracking for each group, a simple rate limit for each user, and an off switch: a setting that makes the app stop answering.
12. **Days 20–21:** Update the README with your results and an architecture diagram. Add a short list of what a real team deployment would still need. **Stop here on Day 21** when the README has your results and the architecture diagram.

### Days 22–23 · about 3 hours

> **Why:** Wrap the answer function in a small read-only API, the same shape as the capstone's service.
>
> **Don't skip:** The capstone service reuses this API.

13. **Backend lab, first checkpoint:** read FastAPI’s [request body](https://fastapi.tiangolo.com/tutorial/body/) and [response model](https://fastapi.tiangolo.com/tutorial/response-model/) guides.
14. Reuse `answer(question, user)` behind a read-only `POST /answer`, and add `GET /health`. Use Pydantic for a question field with a size limit, and for a response with the answer, the source IDs and the request ID. Reject extra identity or group fields.
15. The API must not expose `save_note` or approval-resume operations. Call the RAG function directly, or use a read-only tool allowlist. Hiding a write endpoint does not stop writes inside an agent.
16. Start with a fake model, a fixed made-up test account and a server that listens only on localhost.
17. Return a clear validation error for malformed input, and a safe timeout or “unavailable” response when a dependency fails. Keep stack traces and keys out of responses.
18. Checkpoint: a command-line HTTP client gets a valid answer and predictable errors. In the next step you replace the fixed account with token verification, before you use any real data.
19. Spend 15 minutes on FastAPI’s [concurrency guide](https://fastapi.tiangolo.com/async/). If your SDK or database calls block, start with a normal `def` endpoint. Don't call blocking code directly inside `async def`. Put timeouts on the dependency calls themselves.

### Days 24–25 · about 3 hours

> **Why:** Protect the API with real token checks, and test them.
>
> **Don't skip:** The capstone service reuses these checks.

20. Read FastAPI’s [HTTPBearer reference](https://fastapi.tiangolo.com/reference/security/#fastapi.security.HTTPBearer). It only extracts a token; your code must verify it.
21. For this local exercise, generate two long random tokens, keep them in environment secrets, and map each to one made-up server-side account. Compare tokens with a constant-time comparison, reject missing or unknown tokens, and test revoking one.
22. Look up the account’s current group with the SAME authorization code as the UI. Never accept the user or group from JSON. These tokens are not your model provider’s API key.
23. Use [TestClient](https://fastapi.tiangolo.com/tutorial/testing/) to check valid, missing, revoked and wrong-user requests, malformed input, a provider timeout and group isolation. Keep authentication real in these tests and fake only the model provider. Reuse the database checks.
24. Send a request that asks the HTTP service to save a note. Verify that no write tool runs and the database is unchanged.
25. This API lab stays local. A public deployment needs TLS and a proper token lifecycle. Don't copy test credentials into it.

### Days 26–27 · about 3 hours

> **Why:** Package the API in a container that builds the same way every time.
>
> **Skip if** you can write a pinned, non-root Dockerfile from memory. Do the Test-out step instead.

26. **Test-out:** if you can write a pinned, non-root Dockerfile with a `.dockerignore` from memory in 30 minutes, do that and skip the guide walkthrough. The checkpoint below still applies.
27. Follow the [FastAPI container guide](https://fastapi.tiangolo.com/deployment/docker/) to package the service. Pin dependencies, run as a non-root user, and use a `.dockerignore` and environment secrets. Bind the published port to localhost for this lab. Build from a fresh checkout, run without your editor, and call `/health` and `/answer`. Keep API tests and an image-build check in CI. No extra paid hosting is needed.
28. Checkpoint: one documented command starts the container, and the protected HTTP checks pass. Write down the remaining deployment work: TLS, credential rotation, backups, and a shared quota if you add replicas. Streamlit stays your private online demo.

### Days 28–29 · about 3 hours

> **Why:** Prove the app fails safely when the model or database fails, or traffic spikes.
>
> **Don't skip:** Interviewers ask about exactly this.

29. **Failure drill:** make a fake model provider time out and return retryable rate-limit errors. Separately, make the database fail: inject a connection or query failure, or stop only your throwaway local test database. In each case, require a safe error within your recorded deadline. Never interrupt the online database.
30. Test overload: run one API worker with at most 2 model requests in flight and no waiting queue. Use a fake provider held at a test barrier.
31. While 2 requests are busy, send a third. It must get a clear 429 retry-later response. Then release the barrier: both accepted requests must finish within a 5-second test deadline.
32. Use Python’s [threading events/barriers](https://docs.python.org/3/library/threading.html) (or the async equivalent) to hold the fake calls in place. A fixed sleep is not a reliable test barrier.
33. Run two simultaneous agent writes with the SAME approved operation ID. Check the database: exactly one note, matching arguments, and no cross-user state. This exercises the existing write tool separately; the new HTTP endpoint stays read-only.
34. **Stop here on Day 29** when both failure drills, the 429 test and the duplicate-write check pass.

### Days 30–31 · about 3 hours

> **Why:** Measure speed under light load, and practise handling an incident.
>
> **Don't skip:** The incident note is project evidence.

35. Send 20 fake-provider requests at concurrency 1 and 5. Record the accepted and rejected counts, the success counts, and the p50 and p95 response times (the typical time, and the slow tail). Twenty requests are a smoke test, not proof of capacity.
36. Trace one failure, operate the off switch and follow your rollback runbook. Write a 5-line incident note: symptom, cause, fix, regression check and remaining limitation.
37. Optional: add progress events or streamed draft text. Measure the time to first visible feedback separately from the time to a validated final answer. Never treat partial JSON or streamed text as approval to write.
38. **Stop here on Day 31** when the timings and the incident note are committed.

### Memory check · 10 min

39. Close this page. In your log, answer from memory, then check:
   - Why can a working Streamlit demo still need a backend check? ([where to check](33-project-make-it-sturdy.md))
   - What counts as a breach in your attack test? ([where to check](32-red-team-your-app.md))
40. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why can a working Streamlit demo still need a backend check?</summary>

An HTTP API adds new things to get right: input rules, authentication, error responses, many callers at once, and packaging. Reuse the app's authorization rules and test them through the endpoint. A container that starts doesn't prove it holds up under real load.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## You're done when

- [ ] Tests cover document, note, saved-chat, checkpoint and approval access: another user cannot use a guessed ID to read or resume private state. Document tests also enforce group separation.
- [ ] After a sync, the deleted test pages produce no search results and no citations in new answers, including in existing chats.
- [ ] Required checks stop a failing PR from reaching the deployment branch, and the live app stays on the last passing version. The final fresh quality check also meets the criteria you recorded.
- [ ] Across 3 runs of every attack case: zero unauthorized reads or writes, zero canary leaks to the other group, and zero planted instructions carried out, while normal requests still work. You checked this in the tool logs and the database, not just in the replies.
- [ ] Cost tracking for each group, the rate limit and the off switch all work.
- [ ] A fresh checkout builds and runs the protected read-only API container. HTTP tests exercise real token verification and group isolation. The fake-provider failure and concurrency tests finish within your recorded limits. The runbook and the small latency report are committed.
- [ ] Explain the request flow, two decisions and one failure. Find and fix a real retrieval, authorization, stale-state or retry bug without AI doing the diagnosis or the fix. Show a failing regression check, your reasoning and the passing result. You may use the docs.

## Show it off

**Your one-line pitch:** A two-group AI assistant with logins, database policies, release checks and a documented attack suite that found zero leaks in its runs.

A 3-minute demo, in this order:

1. Sign in as the CSS user and try to reach a JS canary through search, a tool and a guessed document ID. Show the policy that blocks all three.
2. Open a PR with a broken prompt and show the required check preventing merge and deployment. Fix it and show the passing result.
3. Delete a page, run the sync, and show its citation is gone.
4. Show the attack table: 30 cases, 3 runs each, zero leaks.
5. Show the protected API container, one failure trace, the rate limit and the off switch. Finish with one known limitation and the next improvement it justifies.

What it proves to employers:

- CI/CD (2,560 of the 6,964 posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md)), evals and security together.
- PostgreSQL, authorization, a tested HTTP API and a container that builds the same way every time, with evidence from a small failure drill.

## Extra credit

- Give each group a monthly budget that pauses answers when it runs out.
- Add a third group that can see both CSS and JavaScript docs.
- Capture the flag: give a friend 30 minutes, signed in as the CSS team, to leak a JS canary. Add their attempts to your attack cases.
- Deploy the API separately, after adding TLS and a proper token lifecycle. Use a staging database first. Never point a load test at real users or private university data.

## Additional resources

These are optional. Use them if you want to go further.

- [Stanford CS329S: deployment, monitoring and system design](https://stanford-cs329s.github.io/syllabus.html): an optional look at systems. The public material is from 2022, so use current library docs for code.
- [Claude API: response streaming](https://academy.claude.com/courses/building-with-the-claude-api/response-streaming): an optional video for the streaming experiment. The pattern carries over, but event formats differ by provider.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Red-Team Your App](32-red-team-your-app.md) · [Course map](README.md) · [Next lesson: Curation and Verification →](34-curation-and-verification.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
