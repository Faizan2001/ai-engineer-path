# Campus Knowledge Base

*Section 3: RAG with LLM Zoomcamp · Lesson 20 of 42 · about 10.5 hours, then 1 hour a week*

**Before you start, check that** Ask MDN v1.0 is online and your question bank from [ML Basics](10-ml-basics-measuring-quality.md) has 20 questions.

## Introduction

> **The hard part of a campus assistant isn't the model. It's knowing which answer is true this semester.**

Your capstone is a Campus Assistant. Students ask about rules, fees, courses and services, and get a short answer that cites an approved source, or an honest “I don't know, ask this office.” You already know how to search and answer. What you don't have yet is data you can trust. Data takes calendar time (permissions, official documents, checked answers), so you start now and spend one hour a week on it.

Student groups are full of these questions, and they come back every semester. They show you what students ask and how they phrase it. They make a poor answer store: replies conflict, rules change, and the posts belong to other people. Use the group for questions. Take answers from official sources or from a staff member who confirms them.

**After this, you can** start a real knowledge base with permission, sources you can trace and a weekly curation habit.

**The skill that lasts:** turning messy community knowledge into data you can defend. Data curation is one of the least automated parts of AI work.

## Lesson overview

By the end of this lesson, you should be able to:

- Set data rules and ask for permission before collecting anything.
- List the official sources that can answer students' questions, with dates and owners.
- Turn repeated questions into intents, then write your first approved answers with citations.

## Before you start

- Reading a Facebook group yourself is fine for spotting questions. Copying it with a script, a bot or an AI agent is automated collection, and that needs Meta's written permission. Group admins can't give that permission for Meta or for each author.

## Before you read

Every answer your assistant gives will point back to one entry in this knowledge base. An entry is a promise: this answer was true, for these students, on this date, according to this source.

- **Intent**: What the student wants, independent of wording or language. “Withdraw dile scholarship thakbe?” and “Will a withdrawal affect my scholarship?” share one intent.
- **Source tier**: How much to trust an answer: A = official document, B = confirmed by staff, C = student know-how a curator approved. Raw posts are never served.
- **Provenance**: Where a fact came from and when: URL or office, retrieval date, semester it applies to.
- **Review-by date**: When an entry must be rechecked. Fees, deadlines and calendars expire every semester.

## Assignment

### Day 1 · about 90 min

1. Write a one-page data policy as `POLICY.md` in your private `campus-assistant-data` repository (you made it in ML Basics). Say what you collect (question wording, rewritten in your own words), what you never collect (names, usernames, profile links, photos, private messages, ratings of named teachers), where it is stored, and when you delete it.
2. Add one rule for model calls: only questions you wrote or paraphrased go to a model API, with nothing that identifies a person. Never send raw posts, exports or anything you couldn't show the person who wrote it.
3. Read Meta's [Automated Data Collection Terms](https://www.facebook.com/legal/automated_data_collection_terms). They cover any automated collection (bots, crawlers and similar tools) and require Meta's written permission. An AI agent driving your logged-in browser counts, so don't use one. Read the group yourself and write down only the question, in your own words.
4. Start with consent. Make a short form where students submit questions they wish someone had answered, with no names, IDs or personal cases. If you post it in a Facebook group, Meta's [Pages, Groups and Events policies](https://www.facebook.com/policies_center/pages_groups_events) require notice and explicit consent, and you must make clear that you, not Meta, are collecting. Put that at the top of the form.
5. Ask for help, not just permission. Message the group's admins: explain what you will and won't collect, and ask them to pin the form. Email the student affairs or registrar office: ask for the official rule documents, and ask whether someone could confirm answers once a month.

### Day 2 · about 90 min

6. Build `sources.csv` with at least 25 official sources: academic rules, scholarships and waivers, fees and deadlines, the academic calendar, degree curricula and prerequisites, registration and advising steps, student services, and an office contact list. For each one, record the URL, the owning office, the format, the semester it applies to and the date you retrieved it.
7. Check each site's `robots.txt` and terms before downloading. Save a dated copy of each document, because pages change without notice. Note which ones are scanned images, because they need OCR (software that reads text from images).
8. Mark the gaps: questions in your bank that no public source answers. Those need a staff answer, or they stay unanswerable.

### Days 3–4 · about 3 hours

9. Grow the question bank to 100. Take form submissions first, then questions friends and juniors ask, then patterns you notice reading the group yourself. Rewrite each one in your own words, keep the student's language (English, Bangla or Banglish) and record the month. If a community answer conflicts with an official one, note it as a hint to check, never as the answer.
10. Split the bank before you group it. Keep paraphrases and translations of the same question together in one split. Put practice cases in `development.jsonl`. Put every third new case in `held_back.jsonl`, with at least 5 per language to start. The held-back file is for the final release check only: never use its wording in entries, prompts or model choices.
11. Start `regression.jsonl` for failures you find while building. If you looked at held-back results to make a change, move those cases to regression and replace them with fresh cases before release.
12. Group the remaining questions into intents by hand, using the labels you started in ML Basics. If you automate it, embed with the Bengali-capable model from your Embeddings check and confirm every group yourself. English, Bangla and Banglish versions of one question often land in different groups ([clustering overview](https://scikit-learn.org/stable/modules/clustering.html)). Count each intent. The top 20 are your first FAQ entries.

### Days 5–6 · about 3 hours

13. Write 20 entries in `faq.jsonl`. Each entry has: `intent`, `question`, `paraphrases` (including Bangla and Banglish, written by you, never copied from `held_back.jsonl`), `answer`, `conditions` (for example credit load or intake year), `applies_to`, `sources` with quoted text, `tier`, `effective_semester`, `review_by` and `status`.
14. Answer only from the quoted source. If the source doesn't settle a case, write the condition the student must check and the office to ask. Mark entries without an official source `needs-staff`.
15. From now until the capstone, block **1 hour a week** inside your 9 hours for the knowledge base. Each week: add or review 5 entries, add 3 new questions (form submissions first), put every third new case in `held_back.jsonl`, recheck one changed page, and log any gaps. Keep related phrasings in the same split.
16. Your target is 150 questions, with at least 15 per language held back for release. Record each set's version, case IDs, language counts and any exposure in `EVAL-SETS.md`.
17. A friend can keep your release set sealed. If you work alone, avoid looking at it during development, and say so in your report.

### Day 7 · first campus slice, about 90 min

18. Point your Ask MDN v1.0 code at your first 20 entries with an official source (skip `needs-staff` ones): private, on your laptop, English first, no users. Predict first: on 10 development questions, which wins, keyword search over questions and paraphrases, or your hybrid search?
19. Then try the safest answer mode there is: the model may only return the ID of an approved entry, or `none`. Your code shows that entry's approved text, or a route card when the reply is `none`, empty or invalid. The model never writes a rule.
20. Stop here when you've asked 5 questions, including one that must get an honest “I don't know, ask this office”, and logged which mode answered more questions correctly without inventing anything. That's your first campus assistant.
21. Re-run these 10 questions in the first data hour of each month. It's your campus scoreboard.

### Memory check · 10 min

22. Close this page. In your log, answer from memory, then check:
   - Why are student-group replies used as questions and hints, but not as answers? ([where to check](20-campus-knowledge-base.md))
   - Which fields stop an FAQ entry from going stale or being applied to the wrong student? ([where to check](20-campus-knowledge-base.md))
   - What do you do with a question no public source answers? ([where to check](20-campus-knowledge-base.md))
23. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why are student-group replies used as questions and hints, but not as answers?</summary>

Replies conflict, go out of date and belong to other people. Questions show real demand and wording; answers must trace to an official source or a staff confirmation with a date.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Which fields stop an FAQ entry from going stale or being applied to the wrong student?</summary>

Conditions and applies_to (who it is for), effective_semester and review_by (when it is true), and sources with quoted text (why it is true).

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: What do you do with a question no public source answers?</summary>

Record it as a gap, mark the entry needs-staff, and ask the owning office. Until then the assistant should say it doesn't know and name the office.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [Meta Automated Data Collection Terms](https://www.facebook.com/legal/automated_data_collection_terms): the rules for collecting data from Facebook by automated means.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Project: Ask MDN](19-project-ask-mdn.md) · [Course map](README.md) · [Next lesson: Under the Hood: A Tiny GPT →](21-under-the-hood-tiny-gpt.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
