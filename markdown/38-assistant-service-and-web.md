# Ship It: Service and Website

*Section 6: Capstone: Campus Assistant · Lesson 38 of 41 · about 2.5 weeks*

**Before you start, check that** your [Choose Models and a Budget](37-choose-models-and-budget.md) decision is written, and you can run your platform locally with emulators.

## Introduction

> **Keep the Python you tested. Put your platform's front door in front of it.**

Until now the assistant ran as your own app. Now it moves behind the platform students already use. You don't rewrite it: your tested Python answer service, the protected API from [Make It Sturdy](32-project-make-it-sturdy.md), becomes a private service. The platform's own backend becomes the only door to it.

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

1. Update `POLICY.md` for live use before writing code: student messages are personal data. Redact IDs, phone numbers and grades before storing; keep raw text only briefly; curation items carry a redacted paraphrase, not the raw message; crisis-routed messages are never stored in full. Choose a model provider tier that doesn't train on your prompts.
2. Write a design note: the request path from client to cited answer, where the service runs, where the index lives, how the gateway proves its identity to the service, what is logged and for how long. Get it reviewed by a friend or a peer, or check it against your own [Make It Sturdy](32-project-make-it-sturdy.md) evidence table.
3. Write the contract: question, a client-generated idempotency key, and a conversation ID the server owns (with any pending condition stored server-side). Results are stored by request ID so a client can fetch them again after a timeout.
4. Start the pilot approval request now (see [Campus Assistant Pilot](40-project-campus-assistant.md)). Approvals take calendar time.

### Days 4–6 · about 4.5 hours

5. Deploy the answer service privately, so only the gateway's service identity can call it ([Cloud Run service-to-service authentication](https://docs.cloud.google.com/run/docs/authenticating/service-to-service)). This changes lesson 32's trust boundary: the service now accepts the user and university only from the verified gateway identity, never from fields in the request body.
6. Write the tests first: a call without the gateway identity fails; a valid gateway call with a tampered university fails; a `tenant_id` in the body is rejected.

### Days 7–9 · about 4.5 hours

7. Build the gateway in your platform's backend: signed-in user, verified university from the server's own authority check, feature enabled, per-user and per-university limits, and a budget reserved before the model call and settled after it. Abandoned reservations expire. Test each failure with emulators, including a user from another university.
8. Test retries: the same idempotency key returns the stored answer with no second model call and no second charge.

### Days 10–12 · about 4.5 hours

9. Build the chat page with the answer card: answer, who it applies to, evidence links, what's still needed, next step, last-verified date, and thumbs up/down with an optional comment. Start with a full answer per request; add streaming later only if the wait feels long and both clients support it.
10. Feedback becomes a redacted curation item, never an automatic change to an answer. Run your eval suite in CI against the service with a fake model, and nightly with the real one.

### Days 13–15 · about 4.5 hours

11. Ship behind a feature flag to curators only. Use it yourself for a week of normal questions alongside your next lesson, and record latency, cost per answer and refusals. Fix the top issue.
12. No platform of your own? Build the gateway as a small FastAPI app with two demo groups instead of universities, and a simple web chat page. The identity, limit, budget and retry tests are the same.

### Memory check · 10 min

13. Close this page. In your log, answer from memory, then check:
   - Which checks must happen on the server before the assistant searches anything? ([where to check](38-assistant-service-and-web.md))
   - Why does a thumbs-down create a curation item instead of editing the answer? ([where to check](38-assistant-service-and-web.md))
14. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Which checks must happen on the server before the assistant searches anything?</summary>

Verified sign-in, the user's tenant from the server's own authority check, feature enabled for that tenant, and usage limits. Never trust a tenant ID sent by the client.

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

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
