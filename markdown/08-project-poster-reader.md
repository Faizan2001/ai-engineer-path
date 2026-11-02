# Project: Poster Reader

*Section 2: Foundations · Lesson 8 of 42 · about 2 weeks*

## Introduction

> **A poster photo goes in and an event form comes out. The most important part is the Approve button.**

Your first real AI feature: you take a photo of an event poster and turn it into a filled event form.

A person always checks and approves the form before anything is saved. This is the kind of feature you might add to your Events platform one day.

**After this, you can** ship a vision feature with an honest score, a cost per use and an approval step.

**The skill that lasts:** measuring on data you never tuned on.

## Before you start

- Create a new **public** GitHub repo called `poster-reader`. Commit early and often, with messages that say what changed.
- Use 2–5 photos of real public notices from campus boards. Include one in Bangla and English, and blur any personal phone numbers. Add simple posters you make yourself; plain text slides are fine. Spend 2 hours at most making posters: the AI is the project, not the design.
- Write down the correct answers before you write any prompt. Keep some posters hidden while you build (“held back”), so your final score is honest.
- Don't look at other people's versions of this project until yours works. Then compare and learn.
- Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error.

## Assignment

### Days 1–6 · about 9 hours

1. **Day 1:** Collect 15 test posters in 2 hours at most: your real photos plus posters you make. Keep 10 to practise on and hold back 5. On purpose, include some with missing, unclear or hard-to-read details. Stop when all 15 are in two folders.
2. **Days 2–3:** Write `expected.json` with the correct details for all 15 posters. Then write `SCORING.md`: how you'll compare dates, times and venue names, and how you'll score missing or unclear details. Stop when someone could score a poster from your rules alone.
3. **Days 4–6:** Build the reader. An image goes in and a strict `Event` comes out. Do one piece a day. Day 4: the model call. Day 5: plain-code checks (the date is real, the end is after the start). Day 6: a timeout, at most 2 retries and refusal handling.
4. **Stop here on Day 6:** the reader works on 3 practice posters from the command line.

### Days 7–12 · about 9 hours

5. **Days 7–8:** Build the approval screen in Streamlit: show the draft, let a person fix it, and save only when they approve. Stop when one approved poster is saved and one rejected one isn't.
6. **Days 9–10:** Improve your prompt using only the 10 practice posters. When you're happy, run the 5 held-back posters once. Stop when the held-back score is written down, good or bad.
7. **Days 11–12:** Write a README: what it does, how to run it, your score on the held-back posters, the cost per poster and one note for every mistake. Add a 60-second recording or GIF: photo in, draft out, a human fix, then approval.

### Memory check · 10 min

8. Close this page. In your log, answer from memory, then check:
   - Why do the held-back posters stay hidden while you improve the prompt? ([where to check](08-project-poster-reader.md))
   - How do you work out what a model call cost? ([where to check](07-structured-output-and-errors.md))
9. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

## You're done when

- [ ] Your public repo's README shows the score on the 5 held-back posters (using your scoring guide) and the cost per poster, with a note on every mistake.
- [ ] A test shows that an unapproved draft can't be saved and an approved one can. List the cases you tested.
- [ ] A failed API call is retried at most twice, then shows “needs a human”.
- [ ] Explain the request flow, two decisions and one failure. Then, without AI-written code, change a real validation rule (for example, reject an end time before its start). Predict what will happen, then show a check that fails before the change and passes after it. You may use the docs.

## Show it off

**Your one-line pitch:** A photo of a bilingual campus poster becomes a checked event form that saves only after a person approves it.

A 3-minute demo, in this order:

1. Upload a messy Bangla and English poster and show the draft form.
2. Show a plain-code check catching an impossible date, and a failed call ending in “needs a human”.
3. Fix one field, approve it, and show that nothing saves any other way.
4. Open the README: your score on the 5 held-back posters, the cost per poster and one mistake you explain.

What it proves to employers:

- Python and model APIs, the base of the job: Python appears in about 71% of the posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md).
- Evaluating on data you held back. Evals appear in about 60% of AI-first roles in the same analysis.

## Extra credit

- Show a confidence flag next to each field.
- Process a whole folder of posters in one run.
- Ask a club organiser to try your approval screen for 10 minutes and break it if they can.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Structured Output and Errors](07-structured-output-and-errors.md) · [Course map](README.md) · [Next lesson: Keyword RAG →](09-keyword-rag.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
