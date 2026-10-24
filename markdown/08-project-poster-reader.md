# Project: Poster Reader

*Section 2: Foundations · Lesson 8 of 30 · about 1 week*

## Introduction

Time for your first real AI feature! You'll take a photo of an event poster and turn it into a filled event form.

A person always checks and approves the form before anything is saved. This is exactly the kind of feature you might add to a real product.

## Before you start

- Use posters you make yourself, or public posters you're allowed to use. No private data.
- Write down the correct answers before you write any prompt. These are your test answers.
- Keep some posters hidden while you build. We call these held back. They give you an honest final score.

## Assignment

1. Make 30 test posters: 20 to practise on and 10 to hold back. On purpose, include some with missing, unclear and hard-to-read details.
2. Write `expected.json` with the correct details for all 30 posters. Then write `SCORING.md`: explain how you'll compare dates, times and venue names, and how you'll score missing or unclear details.
3. Build the reader: an image goes in and a strict `Event` comes out. Add plain-code checks (the date is real, the end is after the start), a timeout, at most 2 retries and refusal handling.
4. Build a small approval screen (Streamlit is fine). Show the draft, let a person fix it, and save only when they approve.
5. Improve your prompt using only the 20 practice posters. When you're happy, run the 10 held-back posters once.
6. Write a README: your score on the 10 held-back posters, the cost per poster, and one note for every mistake.

## You're done when

- [ ] Your README shows the score on the 10 held-back posters (using your scoring guide) and the cost per poster, with a note on every mistake.
- [ ] Nothing can be saved without approval. You tried to break this and couldn't.
- [ ] A failed API call is retried at most twice, then shows “needs a human”.
- [ ] You can explain how a request moves through your app, two decisions you made and one problem you fixed. You made at least one change without AI help.

## Extra credit

- Show a confidence flag next to each field.
- Process a whole folder of posters in one run.

---

[← Previous: Structured Output and Errors](07-structured-output-and-errors.md) · [Course map](README.md) · [Next lesson: Keyword RAG →](09-keyword-rag.md)
