# Curation and Verification

*Section 6: Capstone: Campus Assistant · Lesson 34 of 42 · about 1 week*

**Before you start, check that** your knowledge base has at least 65 entries with sources, and [Grading Answers](16-grading-answers.md) and [Fresh Data](31-fresh-data.md) are complete.

## Introduction

*Registration week. Three freshers ask the same question in three languages within an hour: will dropping a course cost them their scholarship? Last year a senior answered from memory and was half right. In this section you build an assistant that answers from the rule itself, asks how many credits they are taking, and names the office when the rule doesn't cover their case.*

> **Let a model do the first check. Keep a human for the final yes.**

Your knowledge base now has entries written over many weeks. Before an assistant serves them, every entry needs the same checks, and you need a queue that shows what is waiting, what changed and what expired.

You'll build automatic checks with an LLM judge, then measure its mistakes against your labels. During this course and pilot, a human approves every published entry. The judge helps you review; it does not get a publish button. Fees, scholarships, discipline and health always need human approval.

**True story (2025): The support bot that invented a login policy.** Users of Cursor, a popular AI code editor, were being logged out when they switched devices. Cursor's support email, signed “Sam”, said this was expected under a new login policy. There was no such policy and no human behind the email: an AI bot had made it up. Users cancelled subscriptions before a cofounder apologised. [Source](https://fortune.com/article/customer-support-ai-cursor-went-rogue/)

**What you'll do differently:** students will act on what your assistant says. Every published answer needs a quoted source and a human approval behind it.

**After this, you can** run a curation queue where an automatic judge does the first pass and you can prove how far to trust it.

**The skill that lasts:** checking an automated reviewer against human judgment. This skill carries over to almost any evaluation work.

## Lesson overview

By the end of this lesson, you should be able to:

- Move every entry through clear statuses, from draft to approved to expired.
- Check citations, contradictions, personal data and staleness automatically.
- Measure judge errors on unseen good and bad entries, and write a human-approval policy.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** Your judge agrees with you on 40 good entries. Guess how many of 20 deliberately wrong entries it will still pass. Write the number down before you measure it.

## Before you read

An LLM judge is a second model that grades an answer against a rubric. It is fast and cheap, and it is wrong in patterns. You find those patterns by grading the same items yourself.

- **Cohen's kappa**: Agreement between two graders, corrected for the agreement you'd expect by chance. 1 is perfect, 0 is chance level, and it can be negative.
- **Confusion matrix**: A 2×2 count of judge versus human: both pass, both fail, judge passed what you failed, judge failed what you passed. For auto-approval, the costly cell is “judge passed what you failed”.
- **Entailment check**: Does the quoted source actually support each claim in the answer?
- **Audit sample**: A random slice of published entries that a human rechecks each week. Sampling helps find drift; it does not replace approval.

## Assignment

### Day 1 · about 90 min

1. Add statuses to every entry: `draft → checked → needs-human → approved → expired`. Write a small script that prints the queue: counts per status, entries past `review_by`, and entries whose source changed since approval.
2. Reuse your [Fresh Data](31-fresh-data.md) manifest idea: hash each saved source document so a changed rule automatically moves its entries back to `needs-human`.

### Day 2 · about 90 min

3. Write five automatic checks: (1) every claim cites quoted source text; (2) the judge says the quote supports the claim; (3) no conflict with another approved entry; (4) no personal data about individuals (student names, IDs, phone numbers); (5) `review_by` is in the future.
4. Contacts from your official office directory are allowed. Record staff confirmations by office or role plus date, never by a person's name.
5. Every checked entry goes to `needs-human` before publication, including low-risk topics. Keep a sensitive-topic flag for fees, scholarships, discipline and health. Each check returns a reason, not just pass or fail. Only a curator action can set `approved`.

### Day 3 · about 90 min

6. Grade 60 entries yourself: correct and supported, or not. Include 15 you deliberately broke (wrong number, outdated semester, unsupported claim). Run the judge on the same 60 and build the confusion matrix. Compute Cohen's kappa too ([scikit-learn's cohen_kappa_score](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.cohen_kappa_score.html)).
7. Read every disagreement and fix the rubric, not the labels. Rerun once. These 60 are now tuning data, so their scores are optimistic.

### Days 4–5 · about 3 hours

8. Freeze the rubric. Then grade 40 fresh entries before you see the judge's results: 20 sampled real entries, and 20 new entries that you make wrong on purpose. Make 4 wrong entries of each kind: a wrong number, an expired rule, an unsupported claim, a mismatched source, and a wrong student or curriculum.
9. Don't reuse the 60 tuning entries or rewrites of them. Confirm the expected labels, then run the judge once.
10. Report the real and the wrong-on-purpose samples separately. Divide false accepts by the entries you failed, and false rejects by the entries you passed. If a denominator is zero, write “not measured”; it is never a pass. If you change the rubric, these cases become regression data. Use fresh cases for the next independent check.
11. Write `AUTO-APPROVAL.md` with automatic publication **disabled for the course and the pilot**. Record the rubric version, the sample counts, the confusion matrices and the uncertainty.
12. Remember that 0 false accepts out of 20 bad cases does not prove safety. By the rule of three, the true rate could still be about 15%.
13. Any later proposal to allow auto-approval would need all of these: an error tolerance approved separately, enough real and challenge cases to measure the uncertainty, an audit owner and schedule, and a rule to suspend it after one confirmed false acceptance or source change. Sensitive topics stay human-only. No kappa score or small zero-error sample can enable publication by itself.
14. Approve every pilot entry by hand through the queue, with the curator, source revision, timestamp and reason in its changelog. Test that the judge cannot publish, that low-risk entries also wait, and that changing a source removes approval.

### Day 6 · about 90 min

15. Without AI-written code, add one new check (for example: an answer that mentions a date must cite the academic calendar). Test it on a passing and a failing entry, and explain it in your log.

### Memory check · 10 min

16. Close this page. In your log, answer from memory, then check:
   - Why does a judge that passed 40 correct entries tell you little about unsafe approvals? ([where to check](34-curation-and-verification.md))
   - What moves an approved entry back to needs-human without anyone noticing a problem? ([where to check](34-curation-and-verification.md))
17. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why does a judge that passed 40 correct entries tell you little about unsafe approvals?</summary>

Passing correct entries says nothing about whether it rejects wrong ones. Measure false accepts (the share of entries you failed that the judge passed) on unseen real and wrong-on-purpose samples, report the uncertainty, and keep human approval throughout the pilot.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: What moves an approved entry back to needs-human without anyone noticing a problem?</summary>

A changed source hash, a passed review_by date, or a conflict with a newly approved entry.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Project: Make It Sturdy](33-project-make-it-sturdy.md) · [Course map](README.md) · [Next lesson: Multilingual Search: Bangla, Banglish, English →](35-multilingual-search.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
