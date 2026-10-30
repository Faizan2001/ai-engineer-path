# Answer, Ask or Route

*Section 6: Capstone: Campus Assistant · Lesson 36 of 42 · about 12 hours*

**Before you start, check that** [Multilingual Search](35-multilingual-search.md) is complete and you have an office directory with contact channels and hours.

## Introduction

> **“It depends” is a good answer when you say what it depends on.**

Many campus questions have a right answer only once you know a detail: your credit load, your program, your intake year. Others have no answer in your sources at all, and some should never be answered by a bot.

Your assistant chooses between five moves: answer with citations, ask one clarifying question, answer the part that is established and name what's missing, route to the right office, or decline a false premise (“No one can guarantee an A”) and offer what it can do. You'll test every move on purpose-built questions, including impossible ones. Never show a confidence percentage: search similarity is not a probability of being right.

**True story (2024): The city chatbot that told businesses to break the law.** New York City's MyCity chatbot was built to answer business owners' questions. Reporters found it telling landlords they could refuse tenants with housing vouchers and telling employers they could take a cut of workers' tips. Both are illegal in New York. [Source](https://themarkup.org/news/2024/03/29/nycs-ai-chatbot-tells-businesses-to-break-the-law)

**What you'll do differently:** an official-looking assistant that invents rules does more harm than no assistant. When the evidence isn't there, route.

**After this, you can** handle unanswerable, ambiguous and out-of-scope questions without inventing rules.

**The skill that lasts:** designing failure behavior. Users forgive “I don't know, ask the registrar”; they don't forgive a confident wrong rule.

## Lesson overview

By the end of this lesson, you should be able to:

- Check whether retrieved evidence is enough before answering.
- Ask one clarifying question when an entry's conditions require it.
- Route to an office, or refuse, with tested rules for sensitive topics.

## Assignment

### Day 1 · about 90 min

1. Store your office directory as data: office, topics it owns, official contact channel and hours. The assistant may only route to entries in this file.
2. Write the answer card: short answer; who it applies to (program, curriculum version, semester); evidence with tier labels; what's still needed; one next step; the date it was last verified.

### Day 2 · about 90 min

3. Add an evidence check before answering: do the retrieved entries cover this question for this student? If an entry has `conditions` the student hasn't given, ask one question instead (for example “How many credits are you taking this semester?”).
4. Keep that pending question on the server: store the conversation's open condition, so when the student replies “15”, the next turn knows it answers the credit question. Never trust a transcript sent back by the client.

### Days 3–4 · about 3 hours

5. Build a hard set of 60 questions and write the expected move for each: 10 personal-record (my grades, my dues), 10 not covered by any source, 10 future or rumoured events, 5 requests to rate a named teacher, 5 requests for exam answers or someone else's data, 5 that must ask first, 5 that need a partial answer, 5 false premises (“guarantee me an A”), and 5 where search fails or times out (make it fail on purpose). In those, the assistant must say it couldn't check, never answer from memory.
6. Add two conflict cases. First, a version question: a program overview says one credit total and the program page lists two curricula with different totals. The right move is to ask the student's intake, then answer for that curriculum. Second, a true conflict: two undated official pages give different numbers for the same rule. The right move is to show both, route to the owning office and file a curation item; never pick one silently or trust the newer-looking page.

### Days 5–6 · about 3 hours

7. Add a crisis route that runs before retrieval: a high-recall keyword check in English, Bangla and Banglish, plus a small classifier prompt for indirect wording. It replies only with a static card listing counselling and emergency contacts with their hours, and it shows which lines are open now in your timezone. The counselling centre must approve the card's wording and contacts in writing before any real student sees it; you'll send it with your pilot request in [Ship It: Service and Website](39-assistant-service-and-web.md), so nothing waits on the reply. A keyword hit never calls a model and is never stored in full or queued for curation. Each contact has an owner who re-verifies it, and a date.
8. Test it on your crisis set: at least 30 crisis messages and 30 harmless look-alikes per language (“this exam is killing me”), written in your weekly crisis-set block since [Evals That Catch Real Bugs](27-evals-that-catch-real-bugs.md) and reviewed by a native speaker. Include indirect wording and one hidden inside a scholarship question. Test the card with a fake clock at 10:00 and 23:00. Report misses and false alarms as counts with their denominators. By the rule of three, 0 misses out of 30 still allows a true miss rate of up to about 10%: encouraging, not proof.
9. **Stop here on Day 6** when both clock tests pass and the counts are in your log.

### Day 7 · about 90 min

10. Run the hard set plus the answerable questions in `development.jsonl` and `regression.jsonl`. Record correct answers, clarifications, partial answers, routes and declines, plus false answers and unnecessary refusals. Report counts per language (“36 of 40”) with set versions. Fix the worst failure, add it to regression, and rerun. Keep `held_back.jsonl` sealed for the final release check; if a held-back failure has already guided a fix, it is now regression data and needs a fresh replacement.

### Day 8 · about 90 min

11. Ask 3 friends or juniors to try to make it invent a rule, using synthetic or permitted questions. Record redacted attempts and turn successes into regression tests. Do not give them the reserved release cases or use their wording to tune prompts.

### Memory check · 10 min

12. Close this page. In your log, answer from memory, then check:
   - When should the assistant ask a question instead of answering? ([where to check](36-answer-ask-or-route.md))
   - Two official pages disagree. What should the assistant do? ([where to check](36-answer-ask-or-route.md))
   - Name two kinds of questions the assistant should never answer itself, and what it does instead. ([where to check](36-answer-ask-or-route.md))
13. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: When should the assistant ask a question instead of answering?</summary>

When the matching entry's answer depends on a condition the student hasn't stated, such as credit load or program. Ask one specific question, then answer.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Two official pages disagree. What should the assistant do?</summary>

First check whether they apply to different students (curriculum version, intake, program). If so, ask and answer for that case. If not, show what each says, route to the owning office and file a curation item. Never pick one silently.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Name two kinds of questions the assistant should never answer itself, and what it does instead.</summary>

Personal records (route to the portal or office) and ratings of named teachers or exam answers (refuse politely). A crisis message gets counselling and emergency contacts.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Multilingual Search: Bangla, Banglish, English](35-multilingual-search.md) · [Course map](README.md) · [Next lesson: A Course-Planning Helper →](37-course-planning-helper.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
