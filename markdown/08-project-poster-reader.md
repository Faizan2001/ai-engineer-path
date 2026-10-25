# Project: Poster Reader

*Section 2: Foundations · Lesson 8 of 32 · about 2 weeks*

## Introduction

> **Your first AI feature reads messy posters. Its best part: a human approves everything.**

Time for your first real AI feature! You'll take a photo of an event poster and turn it into a filled event form.

A person always checks and approves the form before anything is saved. This is the kind of feature you might add to your Events platform one day.

**After this, you can** ship a vision feature with an honest score, a cost per use and an approval step.

**The skill that lasts:** measuring on data you never tuned on.

## Before you start

- Create a new **public** GitHub repo called `poster-reader`. Commit early and often, with messages that say what changed.
- Use 2–5 photos of real public notices from your campus boards (include one in Bangla and English, and blur any personal phone numbers), plus simple posters you make yourself. Plain text slides are fine. Give poster-making 2 hours in total: the AI is the project, not the design.
- Write down the correct answers before you write any prompt. Keep some posters hidden while you build (held back) so your final score is honest.
- Don't look at other people's versions of this project until yours works. Then compare and learn.
- Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error.

## Assignment

### Week 1 · about 9 hours

1. Collect 15 test posters, in 2 hours at most: 10 to practise on and 5 to hold back. On purpose, include some with missing, unclear and hard-to-read details.
2. Write `expected.json` with the correct details for all 15 posters. Then write `SCORING.md`: how you'll compare dates, times and venue names, and how you'll score missing or unclear details.
3. Build the reader: an image goes in and a strict `Event` comes out. Add plain-code checks (the date is real, the end is after the start), a timeout, at most 2 retries and refusal handling.
4. Checkpoint: the reader works on 3 practice posters from the command line.

### Week 2 · about 9 hours

5. Build the approval screen in Streamlit: show the draft, let a person fix it, and save only when they approve.
6. Improve your prompt using only the 10 practice posters. When you're happy, run the 5 held-back posters once.
7. Write a README: what it does, how to run it, your score on the held-back posters, the cost per poster and one note for every mistake. Add a 60-second recording or GIF: photo in, draft out, a human fix, then approval.

### Recall · 10 min

8. Close this page. In your log, answer from memory, then check:
   - Why do the held-back posters stay hidden while you improve the prompt? ([where to check](08-project-poster-reader.md))
   - How do you work out what a model call cost? ([where to check](07-structured-output-and-errors.md))
9. Write one more line: how will this lesson help your Campus Assistant?

## You're done when

- [ ] Your public repo's README shows the score on the 5 held-back posters (using your scoring guide) and the cost per poster, with a note on every mistake.
- [ ] Nothing can be saved without approval. You tried to break this and couldn't.
- [ ] A failed API call is retried at most twice, then shows “needs a human”.
- [ ] You can explain how a request moves through your app, two decisions you made and one problem you fixed. You made at least one change without AI help, and wrote down its commit in your log.

## Extra credit

- Show a confidence flag next to each field.
- Process a whole folder of posters in one run.
- Ask a club organiser to try your approval screen for 10 minutes and break it if they can.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Structured Output and Errors](07-structured-output-and-errors.md) · [Course map](README.md) · [Next lesson: Keyword RAG →](09-keyword-rag.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
