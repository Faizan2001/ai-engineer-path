# Campus Knowledge Base

*Section 3: RAG with LLM Zoomcamp · Lesson 20 of 41 · about 9 hours, then 1 hour a week*

**Before you start, check that** Ask MDN v1.0 is online and your question bank from [ML Basics](10-ml-basics-measuring-quality.md) has 20 questions.

## Introduction

> **The hard part of a campus assistant isn't the model. It's knowing which answer is true this semester.**

Your capstone is a Campus Assistant: students ask about rules, fees, courses and services, and get a short answer that cites an approved source, or an honest “I don't know, ask this office”. You already know how to search and answer. What you don't have yet is trustworthy data, and data takes calendar time: permissions, official documents and checked answers. So you start now and spend one hour a week on it.

Student groups are full of these questions, often asked again every semester. They are excellent for learning **what** students ask and how they phrase it. They are poor as an answer store: replies conflict, rules change, and the posts belong to other people. Use the group for questions; take answers from official sources or from a staff member who confirms them.

**After this, you can** start a real knowledge base with permission, provenance and a weekly curation habit.

**The skill that lasts:** turning messy community knowledge into data you can defend. Data curation is one of the least automated parts of AI work.

## Lesson overview

By the end of this lesson, you should be able to:

- Set data rules and ask for permission before collecting anything.
- List the official sources that can answer students' questions, with dates and owners.
- Turn repeated questions into intents, then write your first approved answers with citations.

## Before you start

- Marked [ML Basics](10-ml-basics-measuring-quality.md) or [Embeddings and Vector Search](12-embeddings-and-vector-search.md) complete before 28 Oct 2026? Do ML Basics Day 6 (45 min) before this lesson, and Embeddings Day 12 before [Multilingual Search](34-multilingual-search.md). The course page lists both under “New since you passed this point”.
- Reading a Facebook group yourself is fine for spotting questions. Copying it with a script, a bot or an AI agent is automated collection, which needs Meta's written permission. Group admins can't give that permission for Meta or for each author.

## Before you read

Every answer your assistant gives will point back to one entry in this knowledge base. An entry is a promise: this answer was true, for these students, on this date, according to this source.

- **Intent**: What the student wants, independent of wording or language. “Withdraw dile scholarship thakbe?” and “Will a withdrawal affect my scholarship?” share one intent.
- **Source tier**: How much to trust an answer: A = official document, B = confirmed by staff, C = student know-how a curator approved. Raw posts are never served.
- **Provenance**: Where a fact came from and when: URL or office, retrieval date, semester it applies to.
- **Review-by date**: When an entry must be rechecked. Fees, deadlines and calendars expire every semester.

## Assignment

### Day 1 · about 90 min

1. Write a one-page data policy in a new private repository, `campus-assistant-data/POLICY.md`: what you collect (question wording, rewritten in your own words), what you never collect (names, usernames, profile links, photos, private messages, ratings of named teachers), where it is stored, and when you delete it.
2. Read Meta's [Automated Data Collection Terms](https://www.facebook.com/legal/automated_data_collection_terms). They cover any automated collection, naming bots, crawlers and similar tools, and require Meta's written permission. An AI agent driving your logged-in browser fits that description, so don't use one. Read the group yourself and write down only the question, in your own words.
3. Start with consent: make a short form where students submit questions they wish someone had answered, with no names, IDs or personal cases. If you post it in a Facebook group, Meta's [Pages, Groups and Events policies](https://www.facebook.com/policies_center/pages_groups_events) require notice and explicit consent, and must make clear that you, not Meta, are collecting. Put that at the top of the form.
4. Ask for help, not just permission. Message the group's admins: explain what you will and won't collect and ask them to pin the form. Email the student affairs or registrar office: ask for the official rule documents and whether someone could confirm answers once a month.

### Day 2 · about 90 min

5. Build `sources.csv` with at least 25 official sources: academic rules, scholarships and waivers, fees and deadlines, the academic calendar, degree curricula and prerequisites, registration and advising steps, student services, and an office contact list. For each, record the URL, owning office, format, the semester it applies to and the date you retrieved it.
6. Check the site's `robots.txt` and terms before downloading. Save a dated copy of each document, because pages change without notice, and note which ones are scanned images that will need OCR.
7. Mark the gaps: questions in your bank that no public source answers. Those need a staff answer or stay unanswerable.

### Days 3–4 · about 3 hours

8. Grow the question bank to 100: form submissions first, then questions friends and juniors ask, then patterns you notice reading the group yourself. Rewrite each in your own words, keep the student's language (English, Bangla or Banglish) and record the month. Note a conflicting community answer only as a hint to check, never as the answer.
9. Before grouping anything, freeze a held-back set: move every third new question into `held_back.jsonl`, at least 5 per language. Its wording never goes into `paraphrases`, FAQ entries or prompts. That keeps your later search scores honest.
10. Group the remaining questions into intents by hand, using the labels you started in lesson 10. If you automate it, embed with the Bengali-capable model from your lesson 12 check and confirm every group yourself, because English, Bangla and Banglish versions of one question often land in different groups ([clustering overview](https://scikit-learn.org/stable/modules/clustering.html)). Count each intent; the top 20 are your first FAQ entries.

### Days 5–6 · about 3 hours

11. Write 20 entries in `faq.jsonl`. Each has: `intent`, `question`, `paraphrases` (including Bangla and Banglish, written by you, never copied from `held_back.jsonl`), `answer`, `conditions` (for example credit load or intake year), `applies_to`, `sources` with quoted text, `tier`, `effective_semester`, `review_by` and `status`.
12. Answer only from the quoted source. If the source doesn't settle a case, write the condition the student must check and the office to ask. Mark entries without an official source `needs-staff`.
13. From now until the capstone, block **1 hour a week** inside your 9 hours: add or review 5 entries, add 3 new questions (form submissions first) and move every third into `held_back.jsonl`, recheck one changed page, and log new gaps. Target by the capstone: 150 questions, with at least 15 per language held back.

### Memory check · 10 min

14. Close this page. In your log, answer from memory, then check:
   - Why are student-group replies used as questions and hints, but not as answers? ([where to check](20-campus-knowledge-base.md))
   - Which fields stop an FAQ entry from going stale or being applied to the wrong student? ([where to check](20-campus-knowledge-base.md))
   - What do you do with a question no public source answers? ([where to check](20-campus-knowledge-base.md))
15. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

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

[← Previous: Project: Ask MDN](19-project-ask-mdn.md) · [Course map](README.md) · [Next lesson: Agent Fundamentals →](21-agent-fundamentals.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
