# Curation and Verification

*Section 6: Capstone: Campus Assistant · Lesson 33 of 41 · about 1 week*

**Before you start, check that** your knowledge base has at least 60 entries with sources, and [Grading Answers](16-grading-answers.md) and [Fresh Data](30-fresh-data.md) are complete.

## Introduction

*Registration week. Three freshers ask the same question in three languages within an hour: will dropping a course cost them their scholarship? Last year a senior answered from memory and was half right. This section builds the assistant that answers from the rule itself, asks how many credits they are taking, and names the office when the rule doesn't cover their case.*

> **Automate the checking, not the trusting.**

Your knowledge base now has entries written over many weeks. Before an assistant serves them, every entry needs the same checks, and you need a queue that shows what is waiting, what changed and what expired.

You'll build automatic checks with an LLM judge, then measure how often the judge agrees with you. Automation earns trust only after that number is known, and only for low-risk topics. Fees, scholarships and discipline always get a human.

**After this, you can** run a curation queue where an automatic judge does the first pass and you can prove how far to trust it.

**The skill that lasts:** calibrating an automated reviewer against human judgment, one of the most transferable evaluation skills.

## Lesson overview

By the end of this lesson, you should be able to:

- Move every entry through clear statuses, from draft to approved to expired.
- Check citations, contradictions, personal data and staleness automatically.
- Measure judge–human agreement and set a written auto-approval policy.

## Before you read

An LLM judge is a second model that grades an answer against a rubric. It is fast and cheap, and it is wrong in patterns. You find those patterns by grading the same items yourself.

- **Cohen's kappa**: Agreement between two graders, corrected for the agreement you'd expect by chance. 1 is perfect, 0 is chance level, and it can be negative.
- **Confusion matrix**: A 2×2 count of judge versus human: both pass, both fail, judge passed what you failed, judge failed what you passed. For auto-approval, the costly cell is “judge passed what you failed”.
- **Entailment check**: Does the quoted source actually support each claim in the answer?
- **Audit sample**: A random slice of auto-approved items that a human regrades every week.

## Assignment

### Day 1 · about 90 min

1. Add statuses to every entry: `draft → checked → needs-human → approved → expired`. Write a small script that prints the queue: counts per status, entries past `review_by`, and entries whose source changed since approval.
2. Reuse your [Fresh Data](30-fresh-data.md) manifest idea: hash each saved source document so a changed rule automatically moves its entries back to `needs-human`.

### Day 2 · about 90 min

3. Write automatic checks: every claim cites quoted source text; the judge says the quote supports the claim; no conflict with another approved entry; no personal data about individuals (student names, IDs, phone numbers); `review_by` is in the future. Contacts from your official office directory are allowed, and staff confirmations are recorded by office or role plus date, not by a person's name.
4. Topics on your sensitive list (fees, scholarships, discipline, health) always go to `needs-human`. Make each check return a reason, not just pass or fail.

### Day 3 · about 90 min

5. Grade 60 entries yourself: correct and supported, or not. Include 15 you deliberately broke (wrong number, outdated semester, unsupported claim). Run the judge on the same 60 and build the confusion matrix. Compute Cohen's kappa too ([scikit-learn's cohen_kappa_score](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.cohen_kappa_score.html)).
6. Read every disagreement and fix the rubric, not the labels. Rerun once. These 60 are now tuning data, so their scores are optimistic.

### Days 4–5 · about 3 hours

7. Grade a fresh, untuned sample of 40 real entries yourself, then run the judge on them. This is the number that counts.
8. Write `AUTO-APPROVAL.md`: which low-risk topics the judge may approve alone, and the gate. Gate first on counts: the judge passed 0 of the entries you failed, and caught most of the broken ones. Report kappa as a secondary number; with few errors in the sample it can look fine or be meaningless. Set the weekly audit size and what an audit failure does.
9. Approve your first batch by hand through the queue, with a changelog line for each approval: who or what approved it, and why.

### Day 6 · about 90 min

10. Without AI-written code, add one new check (for example: an answer that mentions a date must cite the academic calendar). Test it on a passing and a failing entry, and explain it in your log.

### Memory check · 10 min

11. Close this page. In your log, answer from memory, then check:
   - Why must you measure the judge on a fresh sample before letting it approve anything? ([where to check](33-curation-and-verification.md))
   - What moves an approved entry back to needs-human without anyone noticing a problem? ([where to check](33-curation-and-verification.md))
12. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why must you measure the judge on a fresh sample before letting it approve anything?</summary>

The rubric was tuned on the first sample, so its scores are optimistic. Only a fresh sample shows how often the judge passes entries you would fail, which is the costly mistake.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: What moves an approved entry back to needs-human without anyone noticing a problem?</summary>

A changed source hash, a passed review_by date, or a conflict with a newly approved entry.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Project: Make It Sturdy](32-project-make-it-sturdy.md) · [Course map](README.md) · [Next lesson: Multilingual Search: Bangla, Banglish, English →](34-multilingual-search.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
