# Multilingual Search: Bangla, Banglish, English

*Section 6: Capstone: Campus Assistant · Lesson 35 of 42 · about 1 week*

**Before you start, check that** your question bank has at least 150 questions tagged by language and linked to intents, with at least 15 per language held back in `held_back.jsonl`.

## Introduction

> **Students don't switch language for your search engine. Your search engine switches for them.**

Your users write in English, in Bangla script, in romanized Bangla (Banglish), and sometimes in all three in one sentence. Keyword search fails across scripts, and many embedders handle Banglish poorly. The language check you did in [Embeddings and Vector Search](12-embeddings-and-vector-search.md) gave a first signal of where.

You'll measure each language separately, then try a multilingual embedder and a model call that rewrites the question into English and Bangla. Choose using development results. Keep the final held-back questions sealed until the pilot release check.

**After this, you can** search a knowledge base in the languages your users actually type, with a score per language.

**The skill that lasts:** evaluating by slice. An average hides the group your product fails.

## Lesson overview

By the end of this lesson, you should be able to:

- Report Hit Rate and MRR separately for English, Bangla and Banglish questions.
- Compare a multilingual embedder with query rewriting, and combine them with hybrid search.
- Reply in the language the student used.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** Your check in Embeddings and Vector Search compared Bengali script with Banglish. Before you measure, guess this lesson's Hit Rate@5 for Bengali-script questions and for the same questions typed in Banglish.

## Assignment

### Day 1 · about 90 min

1. Write a leak check: it fails if any held-back question appears in your indexed text. Compare after lowercasing, collapsing spaces and normalising to Unicode NFC. Run it without printing the questions.
2. Also check that related phrasings stay in one split. This catches copied text, but it can't catch tuning after you've seen test results. Keep the release set out of routine evaluations, and record any exposure in `EVAL-SETS.md`.
3. Index approved entries with your Ask MDN search code. Run `development.jsonl` and report Hit Rate@5 and MRR@5 for each language slice. Reuse these development cases for the comparisons below.

### Day 2 · about 90 min

4. Swap in a multilingual embedder and rerun. Then try adding Bangla and Banglish paraphrases to each entry's text. Record both results per slice.

### Day 3 · about 90 min

5. Add a rewrite step: one cheap model call that returns `{language, english_query, bangla_query}` as structured output (as in [Structured Output and Errors](07-structured-output-and-errors.md)). Write `bangla_query` in Bengali script, not romanized.
6. Run vector search on the raw question and on both rewrites. Run keyword search on the raw and English versions. Fuse everything with RRF (as in [Hybrid Search](14-hybrid-search.md)).
7. Don't stem or “fix” Banglish spelling. For Bengali text, Unicode normalisation is enough.
8. Check 10 rewrites by hand for changed meaning, and measure the extra time and cost per question.

### Day 4 · about 90 min

9. Pick the configuration using development results, then check known failures in `regression.jsonl`. Put the decision, per-language counts, set versions and cost in your README, labelled development evidence. Do not open `held_back.jsonl` here. It is for the final check of your finished candidate.
10. Make the answer prompt reply in the student's language, and test 5 mixed-language questions by hand.

### Day 5 · about 90 min

11. Without AI-written code, write the function that merges and deduplicates results from the two rewrites. Test it with an empty list, duplicates and a missing language.

### Memory check · 10 min

12. Close this page. In your log, answer from memory, then check:
   - Why report search quality per language instead of one overall number? ([where to check](35-multilingual-search.md))
   - What does query rewriting cost you, and how do you decide whether it's worth it? ([where to check](35-multilingual-search.md))
13. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why report search quality per language instead of one overall number?</summary>

A good average can hide a failing group. Banglish questions might be a third of traffic and fail badly while English carries the average.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: What does query rewriting cost you, and how do you decide whether it's worth it?</summary>

An extra model call: latency and money per question. Keep it only if it improves the development slices enough to justify the measured cost.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Curation and Verification](34-curation-and-verification.md) · [Course map](README.md) · [Next lesson: Answer, Ask or Route →](36-answer-ask-or-route.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
