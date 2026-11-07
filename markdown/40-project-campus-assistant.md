# Project: Campus Assistant Pilot

*Section 6: Capstone: Campus Assistant · Lesson 40 of 41 · about 2.5 weeks*

**Before you start, check that** the assistant runs for curators on web and mobile, with release gates in CI.

## Introduction

> **A pilot isn't a launch. It's how you learn what to launch.**

Your assistant is ready for a small trial with a time limit. If you have all the required permissions, invite real students. If not, run an isolated rehearsal with made-up users and allowed data. Both routes show what works. Label the evidence honestly.

**After this, you can** run an approved pilot or a clearly labelled rehearsal, and decide the next step from evidence.

**The skill that lasts:** owning an AI product end to end: data, quality, safety, cost and the people who use it.

## Before you start

- You started `PILOT-AUTHORIZATION.md` in [Ship It: Service and Website](38-assistant-service-and-web.md). For a real campus pilot, it must record the platform owner's authorization, written registrar or student-affairs permission for the pilot's scope, data-use rights and participant consent. For a community project, use its responsible operator instead. Record institutional endorsement separately: “Unofficial, student-built” describes endorsement. It never replaces permission. If any required authorization is missing, use the isolated rehearsal below, and don't invite campus users through the platform.
- Invite only students who are 18 or over, checked at invite, unless you have documented guardian consent that your provider's terms and your privacy law accept. A box the student ticks for their guardian is not consent. Record the check in `PILOT-AUTHORIZATION.md`.
- Give pilot users a short notice: which model provider processes their messages and how long it keeps them, what you log and for how long, and how to ask for deletion.
- Before the release check, write the prompt, model, retrieval, code and knowledge-base versions, plus your thresholds and set IDs, in `RELEASE-EVAL.md`, and freeze them. Use an untouched `held_back.jsonl` with at least 15 answerable cases per supported language. If earlier results guided a change, move those cases to regression and get fresh, unseen replacements. Report the limits of small samples. Later changes need regression checks, and fresh release evidence when they respond to release failures.
- Prepare a one-page readiness note for the university: what it answers and refuses, a live demo of two real rules in three languages, measured error and crisis-check counts with their sample sizes (never “proves 0%”), the privacy notice, and how to switch it off.

## Assignment

### Days 1–6 · about 9 hours

> **Why:** Run the final checks, then choose between an approved pilot and a rehearsal.
>
> **Don't skip:** This decides whether real students can use it.

1. **Days 1–3:** Run the frozen candidate once on the reserved release set. Record per-language search and answer counts, thresholds, set IDs and all versions.
2. Separately, pass the known hard, crisis and cross-university regression suites, plus provider eligibility and cost limits.
3. For crisis, that means: zero misses in every language on your crisis set (or a stricter bar the counselling centre sets); the help link working in every state; and the centre's written approval of the card recorded in `PILOT-AUTHORIZATION.md`. Without that approval, run the rehearsal only.
4. If release failures guide fixes, keep the failed run, move the exposed cases to regression, and test the revised candidate on a fresh release sample. Keep unsupported languages or topics unavailable.
5. Don't invite students until the quality gates and `PILOT-AUTHORIZATION.md` both pass. All published knowledge-base entries still need human approval.
6. **Day 4:** Write a one-page runbook: how to switch the assistant off, roll back a knowledge-base version, and answer a complaint.
7. **Days 5–6:** Choose the route before you start. If all required permissions and gates have passed, invite 20–30 consenting students from different departments who meet the provider's terms.
8. Otherwise keep the service in an isolated development environment, use made-up users and made-up or otherwise allowed data, and call it a rehearsal. Willing friends may try scripted made-up cases, with notice and consent. Don't use real student records or imply university permission.

### Days 7–12 · about 9 hours

> **Why:** Run the pilot for two weeks and grade answers every day.
>
> **Don't skip:** This is the evidence the whole path builds toward.

9. **Days 7–12, one session a Day while the pilot runs:** Run the approved pilot or the isolated rehearsal for two weeks. Each day, review redacted feedback and new questions. Approve every published fix by hand and version it, and add failures to regression. A change prompted by release-check failures needs a fresh release sample before that topic or setting is switched back on.
10. Each Day, regrade a random sample of answers. Track correct answers, appropriate clarifications, routes and declines, and errors. For a rehearsal, state that questions and users were made up or scripted. Don't count them as evidence of real student adoption.

### Days 13–15 · about 4.5 hours

> **Why:** Write the report and decide the next step from evidence.
>
> **Don't skip:** The report is what you show the university and employers.

11. **Days 13–14:** Write `PILOT-REPORT.md`, headed **Approved pilot** or **Rehearsal**, with the authorization status, data used, quality counts by language, failure modes, fixes, cost and user feedback. Separate development, regression and fresh release results, including failed runs and set versions. A rehearsal cannot establish real-world demand or adoption.
12. **Day 15:** Finish with a decision and its evidence: widen an approved pilot, seek authorization after a rehearsal, or pause and fix. Share the report with the responsible reviewers. Never describe a rehearsal as a completed campus deployment.
13. No permission yet? Completing the isolated rehearsal meets this project's learning requirements. List the missing approvals and the real-device and live-user checks as pending before any campus pilot.
14. List what a real launch would still need, such as [Firebase App Check](https://firebase.google.com/docs/app-check) on the assistant endpoint and an iOS build test.
15. **Stop here on Day 15** when `PILOT-REPORT.md` and the decision are committed.

### Memory check · 10 min

16. Close this page. In your log, answer from memory, then check:
   - What has to be true before you invite pilot users? ([where to check](40-project-campus-assistant.md))
17. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What has to be true before you invite pilot users?</summary>

Release gates pass (accuracy, per-language search, zero invented rules, zero cross-tenant leaks, zero missed crisis messages, cost under budget). `PILOT-AUTHORIZATION.md` records written permission, consent, the age check and the counselling centre's approval of the crisis card. A runbook exists. And users know what is logged.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## You're done when

- [ ] The assistant works on web and mobile for authorized pilot users, or in an isolated rehearsal with made-up users and allowed data. The report names which route you completed and any live checks still pending.
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
- With permission, publish a cleaned-up summary of what students ask most, for the student affairs office.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Ship It: Mobile App](39-assistant-in-the-mobile-app.md) · [Course map](README.md) · [Next lesson: What's Next →](41-whats-next.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 7 Nov 2026
