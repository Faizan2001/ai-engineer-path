# Project: Make It Sturdy

*Section 5: Make It Sturdy · Lesson 32 of 41 · about 5 weeks*

**Before you start, check that** your 30 attack cases and 5 canary documents are committed, with a list of the attacks that worked.

## Introduction

> **Dress rehearsal for the Campus Assistant: two groups, real logins, one tireless attacker. It's you.**

This is the last practice project before the capstone. Ask MDN gets logins, separate groups, fresh data, automatic tests and an attack test it must pass.

This brings the pieces together in a small deployed system. Passing these checks demonstrates this project's behavior under the cases you tested; a real institutional rollout still needs its own requirements and operational review.

Finish the existing app first. Then give its read-only answer function a small API, so another application can use it. You will reuse your validation, permissions and tests.

**After this, you can** demonstrate a tested AI app and a portable backend, including what happens when dependencies fail.

**The skill that lasts:** owning reliability, security and cost at the same time.

## Before you start

- Write your own week-by-week plan in your log first, then compare it with the steps below. Do Extra credit only after every “You're done when” line passes.
- Build against your local Postgres. CI uses a [GitHub Actions Postgres service](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/creating-postgresql-service-containers) with the `pgvector/pgvector:0.8.7-pg17` image (the plain `postgres` image has no pgvector). The online version uses your Neon project.
- Keep the app role rules from [Postgres Search and Access Rules](28-postgres-search-and-access-rules.md). Your attack cases and canary documents stay the same.
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
10. Update the README with your results and an architecture diagram. Keep a short list of changes a real team deployment would need. Your university integration is the capstone: [Ship It: Service and Website](38-assistant-service-and-web.md).

### Days 22–23 · about 3 hours

11. **Backend lab, first checkpoint:** read FastAPI’s [request body](https://fastapi.tiangolo.com/tutorial/body/) and [response model](https://fastapi.tiangolo.com/tutorial/response-model/) guides. Reuse `answer(question, user)` behind a read-only `POST /answer`; add `GET /health`. Use Pydantic for a bounded question field and a response containing answer, source IDs and request ID. Reject extra identity/group fields. The API must not expose `save_note` or approval-resume operations. Use the RAG function directly or a read-only tool allowlist; hiding a write endpoint does not disable writes inside an agent.
12. Start with a fake model, a fixed synthetic test account and a server listening only on localhost. Return a clear validation error for malformed input and a safe timeout/unavailable response for dependency failures. Keep stack traces and keys out of responses. Checkpoint: a command-line HTTP client gets a valid answer and predictable errors. Replace the fixed account with token verification in the next step before using real data.
13. Spend 15 minutes on FastAPI’s [concurrency guide](https://fastapi.tiangolo.com/async/). If your SDK/database calls block, start with a normal `def` endpoint; do not call blocking code directly inside `async def`. Use timeouts on the dependency calls themselves.

### Days 24–25 · about 3 hours

14. Read FastAPI’s [HTTPBearer reference](https://fastapi.tiangolo.com/reference/security/#fastapi.security.HTTPBearer). It extracts a token; your code must verify it. For this local machine-client exercise, generate two high-entropy opaque tokens, kept in environment secrets, and map each to one synthetic server-side account. Use a constant-time comparison, reject missing/unknown tokens and test revocation. Look up the account’s current group through the SAME authorization code as the UI. Never accept the principal or group from JSON. Tokens are not your model provider’s API key.
15. Use [TestClient](https://fastapi.tiangolo.com/tutorial/testing/) to check valid, missing, revoked and wrong-user requests, malformed input, a provider timeout and group isolation. Keep authentication real in these tests; fake only the model/provider. Reuse the database checks. This API lab stays local; a public deployment needs TLS and a suitable identity/token lifecycle rather than copying test credentials. Send a request that asks the HTTP service to save a note: verify no write tool runs and the database is unchanged.

### Days 26–27 · about 3 hours

16. Follow the [FastAPI container guide](https://fastapi.tiangolo.com/deployment/docker/) to package the service. Pin dependencies; use a non-root runtime user, `.dockerignore` and environment secrets. Bind the published port to localhost for this lab. Build from a fresh checkout, run without your editor and call `/health` plus `/answer`. Keep API tests and an image-build check in CI. No additional paid hosting is required.
17. Checkpoint: one documented command starts the container and the protected HTTP checks pass. Record the remaining deployment work: TLS, credential rotation, backups and shared quota enforcement if you add replicas. Streamlit remains your private online demo.

### Days 28–29 · about 3 hours

18. **Failure drill:** fake the model-provider boundary for timeouts and retryable rate limits. Separately inject a database connection/query failure at the database boundary, or stop only your disposable local test database. Require a safe error within your recorded deadline. Never interrupt the online database.
19. For a repeatable overload check, run one API worker with at most 2 model requests in flight and no waiting queue. Use a fake provider held at a test barrier: while 2 requests are busy, send a third and require a clear 429 retry-later response. Release the barrier; both accepted requests must finish within a 5-second test deadline. Then send 20 fake-provider requests at concurrency 1 and 5 and record accepted/rejected counts. This local limit is not a shared quota across replicas. Use Python’s [threading events/barriers](https://docs.python.org/3/library/threading.html) or the async equivalent to hold the fake calls deterministically; a fixed sleep is not a reliable test barrier.
20. Run two simultaneous agent writes with the SAME approved operation ID. Check the database: exactly one note, matching arguments, and no cross-user state. This exercises the existing write tool separately; the new HTTP endpoint stays read-only.
21. Record success counts and p50/p95 response times (typical time and the slow tail). Twenty requests are a smoke test, not capacity proof. Trace one failure, operate the off switch and follow your rollback runbook. Write a 5-line incident note: symptom, cause, fix, regression check and remaining limitation.
22. Optional UX experiment: add progress events or streamed draft text. Distinguish time to first visible feedback from time to a validated final answer. Never treat partial JSON or streamed text as approval to perform a write.

### Memory check · 10 min

23. Close this page. In your log, answer from memory, then check:
   - Why can a working Streamlit demo still need a backend check? ([where to check](32-project-make-it-sturdy.md))
   - What counts as a breach in your attack test? ([where to check](31-red-team-your-app.md))
24. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why can a working Streamlit demo still need a backend check?</summary>

An HTTP boundary adds input contracts, authentication, error responses, concurrent callers and packaging. Reuse the application’s authorization rules and test them through the endpoint. A container that starts is not proof of reliability under real load.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## You're done when

- [ ] Tests cover document, note, saved-chat, checkpoint and approval access: another user cannot use a guessed ID to read or resume private state. Document tests also enforce group separation.
- [ ] After a sync, the deleted test pages produce no search results and no citations in new answers, including in existing chats.
- [ ] Required checks prevent a failing PR from reaching the deployment branch. The live app stays on the last passing version; the final fresh quality check also meets its recorded criteria.
- [ ] Across 3 runs of every attack case: zero unauthorized reads or writes, zero canary leaks to the other group, and zero planted instructions carried out, while normal requests still work. You checked this in the tool logs and the database, not just in the replies.
- [ ] Cost tracking for each group, the rate limit and the off switch all work.
- [ ] A fresh checkout builds and runs the protected read-only API container. HTTP tests exercise real token verification and group isolation. Fake-provider failure/concurrency tests terminate within recorded limits; the runbook and small-sample latency report are committed.
- [ ] Explain the request flow, two decisions and one failure. Diagnose and fix a real retrieval, authorization, stale-state or retry bug without AI doing the diagnosis or fix. Show a failing regression check, your reasoning, and the passing result; documentation is allowed.

## Show it off

**Your one-line pitch:** A two-group AI assistant with logins, database policies, release checks and a documented attack suite with zero observed leaks in those runs.

A 3-minute demo, in this order:

1. Sign in as the CSS user and try to reach a JS canary through search, a tool and a guessed document ID. Show the policy that blocks all three.
2. Open a PR with a broken prompt and show the required check preventing merge and deployment. Fix it and show the passing result.
3. Delete a page, run the sync, and show its citation is gone.
4. Show the attack table: 30 cases, 3 runs each, zero leaks.
5. Show the protected API container, one failure trace, the rate limit and the off switch. Finish with one known limitation and the next improvement it justifies.

What it proves to employers:

- CI/CD (2,560 of the 6,964 posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md)), evals and security together.
- PostgreSQL, authorization, a tested HTTP boundary and a reproducible container, with evidence from a small operational drill.

## Extra credit

- Give each group a monthly budget that pauses answers when it runs out.
- Add a third group that can see both CSS and JavaScript docs.
- Capture the flag: give a friend 30 minutes, signed in as the CSS team, to leak a JS canary. Add their attempts to your attack cases.
- Deploy the API separately after adding TLS and an appropriate identity/token lifecycle. Use a staging database first; never point a load test at real users or private institutional data.

## Additional resources

These are optional. Use them if you want to go further.

- [Stanford CS329S: deployment, monitoring and system design](https://stanford-cs329s.github.io/syllabus.html) — optional systems perspective. The public material is from 2022; use current library docs for code.
- [Claude API: response streaming](https://academy.claude.com/courses/building-with-the-claude-api/response-streaming) — optional video for the UX experiment. The pattern transfers; event formats differ by provider.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Red-Team Your App](31-red-team-your-app.md) · [Course map](README.md) · [Next lesson: Curation and Verification →](33-curation-and-verification.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
