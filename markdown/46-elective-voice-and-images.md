# Elective: Voice and Images

*Section 8: Electives · Elective 4 of 5 · about 1 week*

## Introduction

> **Many notices are photos, and many questions are easier to say than type.**

Add two inputs: text extracted from notice images and scanned PDFs for ingestion, and spoken Bangla or English questions transcribed to text.

**After this, you can** ingest image-only notices and accept spoken questions, each with a measured error rate.

**The skill that lasts:** multimodal input with honest error measurement.

## Lesson overview

By the end of this lesson, you should be able to:

- Extract text from 20 image or scanned notices and measure errors.
- Transcribe 20 spoken questions in Bangla and English and measure errors.
- Decide whether either is good enough to ship.

## Assignment

1. Collect 20 official notices that exist only as images or scans. Extract text with a vision model or OCR; compare with a hand-typed version and count errors that change meaning (dates, amounts).
2. Record 20 short spoken questions (with permission). Transcribe them with an open speech model such as [Whisper](https://github.com/openai/whisper); measure word errors and check whether search still finds the right entry.
3. Write a decision: ship, ship with human review, or not yet.

### Memory check · 10 min

4. Close this page. In your log, answer from memory, then check:
   - Which extraction errors matter most for a campus assistant? ([where to check](46-elective-voice-and-images.md))
5. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Which extraction errors matter most for a campus assistant?</summary>

Errors that change meaning: dates, amounts, course codes and deadlines. Count them separately from harmless spelling slips.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Elective: Share Your Knowledge Base over MCP](45-elective-mcp-server.md) · [Course map](README.md) · [Next lesson: Elective: Go Deeper into Model Internals →](47-elective-model-internals.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
