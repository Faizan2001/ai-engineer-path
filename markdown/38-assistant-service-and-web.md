# Ship It: Service and Website

*Section 6: Capstone: Campus Assistant · Lesson 38 of 41 · about 3 weeks*

**Before you start, check that** your [Choose Models and a Budget](37-choose-models-and-budget.md) decision is written, and you can run your platform locally with emulators.

## Introduction

> **Keep the Python you tested. Put your platform's front door in front of it.**

Until now the assistant ran as your own app. Now it moves behind the platform students already use. You don't rewrite it: your tested Python answer service, the protected API from [Make It Sturdy](33-project-make-it-sturdy.md), becomes a private service. The platform's own backend becomes the only door to it.

That gateway checks who is asking, which university's knowledge base they may search, whether the feature is on and how many questions they have left, before it calls your service. The model never decides access, and the service never trusts a university ID sent by the browser.

**After this, you can** run a tenant-safe, rate-limited assistant service behind your platform's sign-in, with a chat page in your web app.

**The skill that lasts:** integrating an AI service into an existing production codebase without weakening its security model.

## Lesson overview

By the end of this lesson, you should be able to:

- Put an authenticated gateway in front of a private answer service.
- Check the user's verified tenant, entitlement and budget on the server before any search.
- Ship a chat page behind a feature flag, with logs that leave out personal data.

## Assignment

### Days 1–3 · about 4.5 hours

> **Why:** Plan the live service: privacy rules, a design note, request contracts and approval requests.
>
> **Don't skip:** Approvals take weeks, so they start here.

1. Update `POLICY.md` for live use before you write code. Student messages are personal data. Redact IDs, phone numbers and grades before storing. Keep raw text only briefly. Curation items carry a redacted paraphrase, not the raw message. Crisis-routed messages are never stored in full.
2. Choose a model provider tier that doesn't train on your prompts. Keep the record of what you process (purposes, systems, retention) separate from chat transcripts: the record lasts for years, transcripts only briefly. Your notice names the model provider and says that messages leave the country. Before a live pilot with real students, get a qualified local review of your privacy duties.
3. Add a scrubber that removes phone numbers, student IDs, emails and national ID numbers before anything is logged or sent to a model. Test it on Bangla and Banglish text.
4. Write a design note. It covers the request path from client to cited answer, where the service runs, where the index lives, how the gateway proves its identity to the service, and what is logged and for how long.
5. Start with the simplest store that passes your tests. For about 100 approved entries per university, an index built in memory from the published entries is enough. Move to Postgres with row-level security, as in [Postgres Search and Access Rules](29-postgres-search-and-access-rules.md), when the corpus or traffic needs it, and write down what would trigger the move.
6. Get the note reviewed by a friend or a peer, or check it against your own [Make It Sturdy](33-project-make-it-sturdy.md) results.
7. Write two contracts. First, the public contract. The client sends `{question, idempotencyKey, conversationId?, preferredLanguage?, programHint?, curriculumHint?}`. Reject extra identity fields, and never forward client identity headers.
8. Second, the internal contract. After verifying the student, the gateway creates an internal envelope `{context: {uid, tenantId, requestId, operation}, input: {...}}`. Its context comes only from server authority, and is bound to a gateway-created request record with those fields and a hash of the allowed input. Conversations and results are server-owned. Fetches and retries recheck user and tenant ownership.
9. Start `PILOT-AUTHORIZATION.md` now, and send your approval requests. Ask the registrar or student-affairs office for written permission for the scope of a small pilot, and ask the platform owner to authorize it. If you haven't yet, send the crisis card to the counselling centre for written approval. Approvals take calendar time. **Stop here** when the policy, the design note and both contracts are committed and the requests are sent.

### Days 4–6 · about 4.5 hours

> **Why:** Deploy the answer service so only your gateway can call it.
>
> **Don't skip:** This keeps students from calling the service directly.

10. Deploy the answer service privately, so only the gateway's service identity can call it ([Cloud Run service-to-service authentication](https://docs.cloud.google.com/run/docs/authenticating/service-to-service)). That identity proves **which service called**, not which student.
11. Give the gateway its own runtime service account, and allow it to invoke only the answer service. On the service, verify the token's audience and that its `email` claim is the gateway's service account. Other accounts can hold invoke permission too (for example, through project-wide roles), so the audience alone doesn't say who called.
12. Only after authenticating the gateway may Python accept the internal envelope. Validate its schema, and match its context and input hash to the gateway-created request record. Load conversations and citations only within that verified user and tenant scope. The public contract still rejects identity fields. The internal contract deliberately carries them.
13. Write tests for both doors. Direct or wrong-service calls must fail. Public `uid`, `tenantId` or `tenant_id` fields and forged identity headers must not be able to choose a user or university. Missing context, context or input that differs from the request record, and another user's conversation or result must all fail before retrieval.
14. Prove that two universities work through the same gateway service account, and that a second student in the same university cannot read the first student's private chat. **Stop here** when direct and forged-identity calls fail in your tests.

### Days 7–9 · about 4.5 hours

> **Why:** Build the gateway that checks who is asking and which university they belong to.
>
> **Don't skip:** This is the lock between universities' data.

15. Build the gateway: authenticate, resolve strict tenant authority for that same user, require `resolved`, then enforce access state and assistant entitlement. Use your platform's strict authority check, the one that fails closed, never a fallback resolver. Take `tenantId` only from its result, never from a profile field such as a student's institutional ID.
16. Test missing claims, a missing bootstrap or profile, conflicting records, stale sessions and suspended membership with emulators. Every failure stops before the model call.
17. Write the gateway on a currently supported runtime and function generation. Check your provider's runtime-support table: a runtime retired before your pilot would block every fix.
18. **Stop here** when every failure case in your emulator tests stops before the model call.

### Days 10–12 · about 4.5 hours

> **Why:** Add limits, budgets and safe retries, so one request means one charge.
>
> **Don't skip:** Double charges and runaway costs start here if you skip it.

19. Add per-user limits, a monthly budget alert and a budget reservation before the model call. Settle the actual cost after success and expire abandoned reservations.
20. Scope idempotency to the verified tenant and user. Claim the key atomically before the model call (a create-only write, or a transaction on the request record). If a request with that key is still running, return `pending` and let the client retry shortly. Never start a second model call.
21. The same key and input returns the stored answer with no second model call or charge. A changed input with that key is rejected.
22. Test result fetches and retries after suspension, and requests from another student, including one in the same university. Neither a request ID nor a conversation ID grants access.
23. **Stop here** when two simultaneous requests with one key produce one model call and one charge.

### Days 13–15 · about 4.5 hours

> **Why:** Build the chat page with the answer card, feedback and the always-on help link.
>
> **Don't skip:** This is what students will see.

24. Build the chat page with the answer card: answer, who it applies to, evidence links, what's still needed, next step, last-verified date, and thumbs up/down with an optional comment. Start with a full answer per request. Add streaming later only if the wait feels long and both clients support it.
25. Add an always-visible “Need help now?” link that opens the static crisis card without calling the gateway. It must still work when a student is over the limit, the feature is switched off or the service fails.
26. Feedback becomes a redacted curation item, never an automatic change to an answer. Run your eval suite in CI against the service with a fake model, and nightly with the real one. **Stop here** when a thumbs-down in the chat page creates a redacted curation item.

### Days 16–18 · about 4.5 hours

> **Why:** Use it yourself for a week behind a feature flag, and fix the top issue.
>
> **Don't skip:** You'll find problems your tests missed.

27. Ship behind a feature flag to curators only. Use it yourself for a week of normal questions, while you work on the next lesson. Record latency, cost per answer and refusals. Fix the top issue.
28. No platform of your own? Build the gateway as a small FastAPI app with two demo groups instead of universities, and a simple web chat page. The identity, limit, budget and retry tests are the same. **Stop here** when a week of your own questions is logged and the top issue is fixed.

### Memory check · 10 min

29. Close this page. In your log, answer from memory, then check:
   - Which checks must happen on the server before the assistant searches anything? ([where to check](38-assistant-service-and-web.md))
   - Why does a thumbs-down create a curation item instead of editing the answer? ([where to check](38-assistant-service-and-web.md))
30. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Which checks must happen on the server before the assistant searches anything?</summary>

Verified sign-in, strict tenant authority for that same user, an allowed access state, assistant entitlement and budget. The gateway then sends the verified student context to the service over the authenticated connection. A shared service account alone doesn't identify the student.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Why does a thumbs-down create a curation item instead of editing the answer?</summary>

Feedback can be wrong or malicious. A curator checks it against the source, so the knowledge base only changes through the verified path.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Choose Models and a Budget](37-choose-models-and-budget.md) · [Course map](README.md) · [Next lesson: Ship It: Mobile App →](39-assistant-in-the-mobile-app.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 7 Nov 2026
