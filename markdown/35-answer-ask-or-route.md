# Answer, Ask or Route

*Section 6: Capstone: Campus Assistant · Lesson 35 of 41 · about 1 week*

**Before you start, check that** [Multilingual Search](34-multilingual-search.md) is complete and you have an office directory with contact channels and hours.

## Introduction

> **“It depends” is a good answer when you say what it depends on.**

Many campus questions have a right answer only once you know a detail: your credit load, your program, your intake year. Others have no answer in your sources at all, and some should never be answered by a bot.

Your assistant chooses between five moves: answer with citations, ask one clarifying question, answer the part that is established and name what's missing, route to the right office, or decline a false premise (“No one can guarantee an A”) and offer what it can do. You'll test every move on purpose-built questions, including impossible ones. Never show a confidence percentage: search similarity is not a probability of being right.

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

5. Build a hard set of 55 questions and write the expected move for each: 10 personal-record (my grades, my dues), 10 not covered by any source, 10 future or rumoured events, 5 requests to rate a named teacher, 5 requests for exam answers or someone else's data, 5 that must ask first, 5 that need a partial answer, and 5 false premises (“guarantee me an A”).
6. Add two conflict cases. First, a version question: a program overview says one credit total and the program page lists two curricula with different totals. The right move is to ask the student's intake, then answer for that curriculum. Second, a true conflict: two undated official pages give different numbers for the same rule. The right move is to show both, route to the owning office and file a curation item; never pick one silently or trust the newer-looking page.
7. Add a crisis route that runs before retrieval: a high-recall check (keywords in English, Bangla and Banglish, plus a small classifier prompt) that replies only with the counselling service and emergency contacts you have re-verified. Test it with 10 crisis or self-harm messages across the three languages, including indirect wording and one hidden inside a scholarship question. Count misses separately; the target is zero. Crisis messages are never stored in full or sent to the curation queue.

### Day 5 · about 90 min

8. Run the hard set plus your held-back answerable questions. Record each move: correct answers, clarifications, partial answers, routes and declines, plus false answers and unnecessary refusals. Report counts per language (“36 of 40”), not just percentages. Fix the worst failure and rerun.

### Day 6 · about 90 min

9. Ask 3 friends or juniors to try to make it invent a rule. Log every attempt. Turn each success into a regression test.

### Memory check · 10 min

10. Close this page. In your log, answer from memory, then check:
   - When should the assistant ask a question instead of answering? ([where to check](35-answer-ask-or-route.md))
   - Two official pages disagree. What should the assistant do? ([where to check](35-answer-ask-or-route.md))
   - Name two kinds of questions the assistant should never answer itself, and what it does instead. ([where to check](35-answer-ask-or-route.md))
11. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

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

[← Previous: Multilingual Search: Bangla, Banglish, English](34-multilingual-search.md) · [Course map](README.md) · [Next lesson: A Course-Planning Helper →](36-course-planning-helper.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
