# Project: Campus Assistant Pilot

*Section 6: Capstone: Campus Assistant · Lesson 41 of 42 · about 3 weeks*

**Before you start, check that** the assistant runs for curators on web and mobile, with release gates in CI.

## Introduction

> **A pilot isn't a launch. It's how you learn what to launch.**

Your assistant is ready for a small, time-limited trial. If the required permissions are in place, invite real students. Otherwise use an isolated rehearsal with synthetic users and permitted data. Both routes let you demonstrate what works; label the evidence honestly.

**After this, you can** run an approved pilot or a clearly labelled rehearsal, and decide the next step from evidence.

**The skill that lasts:** owning an AI product end to end: data, quality, safety, cost and the people who use it.

## Before you start

- Start `PILOT-AUTHORIZATION.md` during [Ship It: Service and Website](39-assistant-service-and-web.md). For a real campus pilot, record platform-owner authorization, written registrar/student-affairs permission for its scope, data-use rights and participant consent. For a community project, use its responsible operator instead. Record institutional endorsement separately: “Unofficial, student-built” describes endorsement, never replaces permission. If any required authorization is missing, use the isolated rehearsal below; do not invite campus users through the platform.
- Invite only students who are 18 or over, checked at invite, unless you have documented guardian consent that your provider's terms and your privacy law accept. A box the student ticks for their guardian is not consent. Record the check in `PILOT-AUTHORIZATION.md`.
- Give pilot users a short notice: which model provider processes their messages and how long it keeps them, what you log and for how long, and how to ask for deletion.
- Before release evaluation, freeze prompt, model, retrieval, code and knowledge-base versions, plus thresholds and set IDs in `RELEASE-EVAL.md`. Use an untouched `held_back.jsonl` with at least 15 answerable cases per supported language. If earlier results guided a change, move those cases to regression and obtain fresh, uninspected replacements. Report small-sample limits. Subsequent changes need regression checks and fresh release evidence when they respond to release failures.
- Prepare a one-page readiness note for the university: what it answers and refuses, a live demo of two real rules in three languages, measured error and crisis-check counts with their sample sizes (never “proves 0%”), the privacy notice, and how to switch it off.

## Assignment

### Days 1–6 · about 9 hours

1. **Days 1–3:** Run the frozen candidate once on the reserved release set; record per-language search and answer counts, thresholds, set IDs and all versions. Separately pass the known hard, crisis and cross-university regression suites, provider eligibility and cost limits. These are observed results, not a guarantee for all questions. If release failures guide fixes, preserve the failed run, move exposed cases to regression, and test the revised candidate on a fresh release sample. Keep unsupported languages or topics unavailable. Do not invite students until the quality gates and `PILOT-AUTHORIZATION.md` both pass; all published knowledge-base entries still need human approval.
2. **Day 4:** Write a one-page runbook: how to switch the assistant off, roll back a knowledge-base version, and answer a complaint.
3. **Days 5–6:** Choose the route before starting: with all required permissions and gates passed, invite 20–30 consenting students across departments who meet provider terms. Otherwise keep the service in an isolated development environment, use synthetic users and synthetic or otherwise permitted data, and label it a rehearsal. Willing friends may exercise scripted synthetic cases with notice and consent; do not use real student records or imply university permission.

### Days 7–12 · about 9 hours

4. **Days 7–12, one session a Day while the pilot runs:** Run the approved pilot or isolated rehearsal for two weeks. Review redacted feedback and new questions daily; approve every published fix by hand and version it. Add failures to regression. Changes prompted by final-evaluation failures require a fresh release sample before that topic or configuration is re-enabled.
5. Each Day, regrade a random sample of answers. Track correct answers, appropriate clarifications/routes/declines and errors. For a rehearsal, state that questions and users were synthetic or scripted; do not count them as evidence of real student adoption.

### Days 13–18 · about 9 hours

6. **Days 13–15:** Write `PILOT-REPORT.md`, headed **Approved pilot** or **Rehearsal**, with the authorization status, data used, quality counts by language, failure modes, fixes, cost and user feedback. Separate development, regression and fresh release results, including failed runs and set versions. A rehearsal cannot establish real-world demand or adoption.
7. **Days 16–17:** Finish with a decision and its evidence: widen an approved pilot, seek authorization after a rehearsal, or pause and fix. Share the report with the responsible reviewers; never describe a rehearsal as a completed campus deployment.
8. **Day 18:** No permission yet? Completing the isolated rehearsal meets this project's learning requirements. List the missing approvals and real-device or live-user checks as pending before any campus pilot.
9. Add to the list of changes a real team would need: client attestation (Firebase App Check) on the assistant endpoint, which on Expo needs a native module in a development or release build (not Expo Go). On Android, Play Integrity needs the app linked in Play Console, and its default verdict accepts only Play-installed builds, so sideloaded APKs need relaxed settings. Add an iOS build, sign-in and background test before claiming iOS works. Attestation adds a layer; it doesn't replace sign-in, limits or idempotency.
10. **Stop here on Day 18** when `PILOT-REPORT.md` and the decision are committed.

### Memory check · 10 min

11. Close this page. In your log, answer from memory, then check:
   - What has to be true before you invite pilot users? ([where to check](41-project-campus-assistant.md))
12. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What has to be true before you invite pilot users?</summary>

Release gates pass (accuracy, per-language search, zero invented rules, zero cross-tenant leaks, cost under budget), a runbook exists, and users know what is logged.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## You're done when

- [ ] The assistant works on web and mobile for authorized pilot users, or in an isolated rehearsal using synthetic users and permitted data. The report names which route you completed and any pending live checks.
- [ ] Every served answer traces to an approved knowledge-base entry with a source, tier and verification date.
- [ ] Your report separates development/regression results from the fresh release check, reports counts by language and cost, and labels pilot versus rehearsal feedback accurately.
- [ ] You can explain the request flow from the phone to the cited answer, the tenant check, and one failure you fixed, without notes.

## Show it off

**Your one-line pitch:** A campus assistant that answers students in English, Bangla and Banglish from verified university sources, asks when details matter, and routes to the right office when it can't answer.

A 3-minute demo, in this order:

1. Ask the same question in three languages and get the same cited answer.
2. Ask a question that depends on credit load and watch it ask first.
3. Ask for your own grades and watch it route you to the right place.
4. Show the human-approval queue, the judge's error counts and the labelled pilot or rehearsal report.

What it proves to employers:

- End-to-end engineering of an AI feature, with evidence labelled as an approved pilot or a rehearsal rather than an unproven production claim.
- Multilingual retrieval, human-in-the-loop curation and tenant-safe integration in a real platform.

## Extra credit

- Add a second university's knowledge base and prove with tests that neither can see the other's.
- Publish a sanitized, permission-cleared summary of what students ask most, for the student affairs office.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Ship It: Mobile App](40-assistant-in-the-mobile-app.md) · [Course map](README.md) · [Next lesson: What's Next →](42-whats-next.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
