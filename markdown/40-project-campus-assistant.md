# Project: Campus Assistant Pilot

*Section 6: Capstone: Campus Assistant · Lesson 40 of 41 · about 3 weeks*

**Before you start, check that** the assistant runs for curators on web and mobile, with release gates in CI.

## Introduction

> **A pilot isn't a launch. It's how you learn what to launch.**

Your assistant meets real students: a small group, for a fixed time, with clear rules. You'll watch what they ask, where it fails and what it costs, then write the evidence that decides the next step.

**After this, you can** run a real AI pilot and decide its future from evidence.

**The skill that lasts:** owning an AI product end to end: data, quality, safety, cost and the people who use it.

## Before you start

- Start approvals during [Ship It: Service and Website](38-assistant-service-and-web.md), because they take calendar time: whoever runs your platform, and written sign-off from the registrar or student affairs office. Without that sign-off, every answer card carries an “Unofficial, student-built” label.
- Your model provider's terms must allow every pilot user. If they bar users under 18, invite only students who are 18 or over, and check at invite.
- Give pilot users a short notice: which model provider processes their messages and how long it keeps them, what you log and for how long, and how to ask for deletion.
- Freeze the pilot's prompt, model and knowledge-base version. Changes during the pilot go through your curation queue and get a version number.

## Assignment

### Week 1 · about 9 hours

1. Set release gates and pass them before inviting anyone: held-back answer accuracy and per-language search scores at your chosen thresholds, zero invented rules on the hard set, zero missed crisis messages, zero cross-university leaks, provider terms that allow every pilot user, and cost per answer under budget.
2. Write a one-page runbook: how to switch the assistant off, roll back a knowledge-base version, and answer a complaint.
3. Invite 20–30 students from different departments, including freshers who meet your provider's age terms.

### Week 2 · about 9 hours

4. Run the pilot. Every day, review thumbs-down answers and new questions in the curation queue. Approve fixes through the normal path and version them.
5. Each day, regrade a random sample of answers yourself. Track how many were correct, correctly refused or wrong.

### Week 3 · about 9 hours

6. Write `PILOT-REPORT.md`: questions asked by topic and language, correct/clarify/route/refuse rates, failures and fixes, cost per answer and per month, and what students said.
7. Finish with a decision and its reasons: widen the pilot, add features, or pause and fix. Present it to the people who approved the pilot.
8. No approval yet? Run the same two weeks as a rehearsal with friends or synthetic users, and label the report a rehearsal, not a pilot.

### Memory check · 10 min

9. Close this page. In your log, answer from memory, then check:
   - What has to be true before you invite pilot users? ([where to check](40-project-campus-assistant.md))
10. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: What has to be true before you invite pilot users?</summary>

Release gates pass (accuracy, per-language search, zero invented rules, zero cross-tenant leaks, cost under budget), a runbook exists, and users know what is logged.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## You're done when

- [ ] The assistant runs inside your platform on web and mobile, limited to pilot users, with release gates enforced in CI.
- [ ] Every served answer traces to an approved knowledge-base entry with a source, tier and verification date.
- [ ] Your report shows quality per language, refusal behavior on hard questions, cost per answer, and what you changed during the pilot.
- [ ] You can explain the request flow from the phone to the cited answer, the tenant check, and one failure you fixed, without notes.

## Show it off

**Your one-line pitch:** A campus assistant that answers students in English, Bangla and Banglish from verified university sources, asks when details matter, and routes to the right office when it can't answer.

A 3-minute demo, in this order:

1. Ask the same question in three languages and get the same cited answer.
2. Ask a question that depends on credit load and watch it ask first.
3. Ask for your own grades and watch it route you to the right place.
4. Show the curation queue, the judge agreement number and the pilot report.

What it proves to employers:

- End-to-end ownership of a production AI feature: data, evaluation, safety, cost and users.
- Multilingual retrieval, human-in-the-loop curation and tenant-safe integration in a real platform.

## Extra credit

- Add a second university's knowledge base and prove with tests that neither can see the other's.
- Publish a sanitized, permission-cleared summary of what students ask most, for the student affairs office.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Ship It: Mobile App](39-assistant-in-the-mobile-app.md) · [Course map](README.md) · [Next lesson: What's Next →](41-whats-next.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
