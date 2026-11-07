# Project: Make It Sturdy

*Section 5: Make It Sturdy · Lesson 33 of 41 · about 3.5 weeks*

**Before you start, check that** your 30 attack cases and 5 canary documents are committed, with a list of the attacks that worked.

## Introduction

> **Dress rehearsal for the Campus Assistant: two groups, real logins, one tireless attacker. It's you.**

This is the last practice project before the capstone. Ask MDN gets logins, separate groups, fresh data, automatic tests and an attack test it must pass.

This brings the pieces together in a small deployed system. Passing the checks shows how the app behaves in the cases you tested. A real rollout at a university would still need its own requirements and review.

Finish the app first. Then give its read-only answer function a small API, so another application can use it. You reuse your validation, permissions and tests.

**After this, you can** show a tested AI app with a separate backend, and what happens when something it depends on fails.

**The skill that lasts:** owning reliability, security and cost at the same time.

## Before you start

- Do Extra credit only after every “You're done when” line passes.
- Build against your local Postgres. CI uses a [GitHub Actions Postgres service](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/creating-postgresql-service-containers) with the `pgvector/pgvector:0.8.7-pg17` image (the plain `postgres` image has no pgvector). The online version uses your Neon project.
- Keep the app role rules from [Postgres Search and Access Rules](29-postgres-search-and-access-rules.md). Your attack cases and canary documents stay the same.

## Assignment

### Days 1–4 · about 6 hours

> **Why:** Put the secure Postgres version online, with login and group mapping.
>
> **Don't skip:** This is the base of the project.

1. **Days 1–3:** Move the Postgres version online: on Neon, enable pgvector, turn row-level security on and force it, and use your SQL-created app role. Connect your private Streamlit app to it through Secrets.
2. **Day 4:** Add login and server-side group mapping, reusing your code from Login.
3. **Stop here on Day 4:** the online app shows a CSS user only CSS answers.

### Days 5–6 · about 3 hours

> **Why:** Add the data sync and the automatic tests that guard every change.
>
> **Don't skip:** CI and the sync are part of the project's evidence.

4. **Day 5:** Run your sync against Neon: edits re-index and deleted pages go.
5. **Day 6:** Add the Postgres service and your isolation tests to CI, on every push. Keep the model-graded checks on pull requests.
6. **Stop here on Day 6:** the isolation tests pass in CI.

### Days 7–12 · about 9 hours

> **Why:** Pass the attack test, check quality after the move, then add cost limits and an off switch.
>
> **Don't skip:** These results go in your README.

7. **Days 7–9:** Run your attack test (30 cases plus 5 canaries), 3 times for each case. Fix what breaks, then run it again.
8. Rerun your Hit Rate and MRR script from [Measuring Search](13-measuring-search.md) on the Postgres version. If the scores fell, find out why.
9. **Days 10–11:** Add cost tracking for each group, a simple rate limit for each user, and an off switch: a setting that makes the app stop answering.
10. **Day 12:** Update the README with your results and an architecture diagram. Add a short list of what a real team deployment would still need. **Stop here on Day 12** when the README has your results and the architecture diagram.

### Days 13–14 · about 3 hours

> **Why:** Wrap the answer function in a small read-only API, the same shape as the capstone's service.
>
> **Don't skip:** The capstone service reuses this API.

11. **Backend lab, first checkpoint:** read FastAPI’s [request body](https://fastapi.tiangolo.com/tutorial/body/) and [response model](https://fastapi.tiangolo.com/tutorial/response-model/) guides.
12. Reuse `answer(question, user)` behind a read-only `POST /answer`, and add `GET /health`. Use Pydantic for a question field with a size limit, and for a response with the answer, the source IDs and the request ID. Reject extra identity or group fields.
13. The API must not expose `save_note` or approval-resume operations. Call the RAG function directly, or use a read-only tool allowlist. Hiding a write endpoint does not stop writes inside an agent.
14. Start with a fake model, a fixed made-up test account and a server that listens only on localhost.
15. Return a clear validation error for malformed input, and a safe timeout or “unavailable” response when a dependency fails. Keep stack traces and keys out of responses.
16. Checkpoint: a command-line HTTP client gets a valid answer and predictable errors. In the next step you replace the fixed account with token verification, before you use any real data.
17. Spend 15 minutes on FastAPI’s [concurrency guide](https://fastapi.tiangolo.com/async/). If your SDK or database calls block, start with a normal `def` endpoint. Don't call blocking code directly inside `async def`. Put timeouts on the dependency calls themselves.

### Days 15–16 · about 3 hours

> **Why:** Protect the API with real token checks, and test them.
>
> **Don't skip:** The capstone service reuses these checks.

18. Read FastAPI’s [HTTPBearer reference](https://fastapi.tiangolo.com/reference/security/#fastapi.security.HTTPBearer). It only extracts a token; your code must verify it.
19. For this local exercise, generate two long random tokens, keep them in environment secrets, and map each to one made-up server-side account. Compare tokens with a constant-time comparison, reject missing or unknown tokens, and test revoking one.
20. Look up the account’s current group with the SAME authorization code as the UI. Never accept the user or group from JSON. These tokens are not your model provider’s API key.
21. Use [TestClient](https://fastapi.tiangolo.com/tutorial/testing/) to check valid, missing, revoked and wrong-user requests, malformed input, a provider timeout and group isolation. Keep authentication real in these tests and fake only the model provider. Reuse the database checks.
22. Send a request that asks the HTTP service to save a note. Verify that no write tool runs and the database is unchanged.
23. This API lab stays local. A public deployment needs TLS and a proper token lifecycle. Don't copy test credentials into it.

### Days 17–18 · about 3 hours

> **Why:** Package the API in a container that builds the same way every time.
>
> **Skip if** you can write a pinned, non-root Dockerfile from memory. Do the Test-out step instead.

24. **Test-out:** if you can write a pinned, non-root Dockerfile with a `.dockerignore` from memory in 30 minutes, do that and skip the guide walkthrough. The checkpoint below still applies.
25. Follow the [FastAPI container guide](https://fastapi.tiangolo.com/deployment/docker/) to package the service. Pin dependencies, run as a non-root user, and use a `.dockerignore` and environment secrets. Bind the published port to localhost for this lab. Build from a fresh checkout, run without your editor, and call `/health` and `/answer`. Keep API tests and an image-build check in CI. No extra paid hosting is needed.
26. Checkpoint: one documented command starts the container, and the protected HTTP checks pass. Write down the remaining deployment work: TLS, credential rotation, backups, and a shared quota if you add replicas. Streamlit stays your private online demo.

### Days 19–20 · about 3 hours

> **Why:** Prove the app fails safely when the model or database fails or traffic spikes, and practise handling an incident.
>
> **Don't skip:** Interviewers ask about exactly this.

27. **Failure drill:** make a fake model provider time out and return retryable rate-limit errors. Separately, make the database fail: inject a connection or query failure, or stop only your throwaway local test database. In each case, require a safe error within your recorded deadline. Never interrupt the online database.
28. Test overload: run one API worker with at most 2 model requests in flight and no waiting queue. Use a fake provider held at a test barrier.
29. While 2 requests are busy, send a third. It must get a clear 429 retry-later response. Then release the barrier: both accepted requests must finish within a 5-second test deadline.
30. Use Python’s [threading events/barriers](https://docs.python.org/3/library/threading.html) (or the async equivalent) to hold the fake calls in place. A fixed sleep is not a reliable test barrier.
31. Run two simultaneous agent writes with the SAME approved operation ID. Check the database: exactly one note, matching arguments, and no cross-user state. This exercises the existing write tool separately; the new HTTP endpoint stays read-only.
32. Trace one failure, operate the off switch and follow your rollback runbook. Write a 5-line incident note: symptom, cause, fix, regression check and remaining limitation.
33. **Stop here on Day 20** when both failure drills, the 429 test, the duplicate-write check and the incident note are done.

### Memory check · 10 min

34. Close this page. In your log, answer from memory, then check:
   - Why can a working Streamlit demo still need a backend check? ([where to check](33-project-make-it-sturdy.md))
   - What counts as a breach in your attack test? ([where to check](32-red-team-your-app.md))
35. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why can a working Streamlit demo still need a backend check?</summary>

An HTTP API adds new things to get right: input rules, authentication, error responses, many callers at once, and packaging. Reuse the app's authorization rules and test them through the endpoint. A container that starts doesn't prove it holds up under real load.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## You're done when

- [ ] Tests cover document, note, saved-chat, checkpoint and approval access: another user cannot use a guessed ID to read or resume private state. Document tests also enforce group separation.
- [ ] After a sync, the deleted test pages produce no search results and no citations in new answers, including in existing chats.
- [ ] Required checks stop a failing PR from reaching the deployment branch, and the live app stays on the last passing version. Your search scores held up after the move to Postgres.
- [ ] Across 3 runs of every attack case: zero unauthorized reads or writes, zero canary leaks to the other group, and zero planted instructions carried out, while normal requests still work. You checked this in the tool logs and the database, not just in the replies.
- [ ] Cost tracking for each group, the rate limit and the off switch all work.
- [ ] A fresh checkout builds and runs the protected read-only API container. HTTP tests exercise real token verification and group isolation. The fake-provider failure tests finish within your recorded limits. The runbook and the incident note are committed.
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

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Red-Team Your App](32-red-team-your-app.md) · [Course map](README.md) · [Next lesson: Curation and Verification →](34-curation-and-verification.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 7 Nov 2026
