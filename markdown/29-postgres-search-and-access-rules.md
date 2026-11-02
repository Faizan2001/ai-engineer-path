# Postgres Search and Access Rules

*Section 5: Make It Sturdy · Lesson 29 of 42 · about 1.5 weeks*

**Before you start, check that** pytest and the rule-based promptfoo checks run in GitHub Actions, and a broken prompt makes CI fail.

## Introduction

> **App code can forget a WHERE clause. A database policy can't.**

Your Campus Assistant will hold several universities' data in one app. Each one must only ever see its own. The safest place to enforce that is the database itself.

You'll move all of Ask MDN's search (keyword and vector) into Postgres. Then you'll turn on row-level security: rules inside the database that hide rows a user isn't allowed to see. You'll practise with two pretend groups, a CSS team and a JS team. Think of them as University A and University B, which is what your Campus Assistant will need.

**True story (2025): an AI connector shows one company's files to another.** A flaw in Asana's new AI connector could show one organisation's tasks and files to users in other organisations. About 1,000 customers were told. [Source](https://bleepingcomputer.com/news/security/asana-warns-mcp-ai-feature-exposed-customer-data-to-other-orgs/)

**What you'll do differently:** enforce the separation inside the database, and test that group A never sees group B.

**After this, you can** make the database itself keep each group's data apart.

**The skill that lasts:** defence in depth: assume one layer will fail.

## Lesson overview

By the end of this lesson, you should be able to:

- Run keyword search (full-text search) and vector search in Postgres.
- Turn on row-level security and write a policy.
- Create a safe database role for your app.
- Prove that one group can't see the other's data.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** Your app connects to Postgres as the owner of the table. Do your row-level security rules still apply?

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#postgres-search-and-access-rules).

## Before you read

**Picture this:** Without row-level security, your app is a librarian who must remember, on every single request, to hide University B's shelves from University A. With it, the shelves carry locks keyed to the reader's card, so even a forgetful librarian, or a buggy query, can only hand over what that card opens.

Row-level security adds a hidden WHERE to every query on a table. Your app says “this transaction belongs to group CSS” with `set_config`, and the policy compares each row's `group_id` with `current_setting()`. Table owners skip policies unless you force them.

- **tsvector**: Postgres's searchable form of a text
- **BYPASSRLS**: a role setting that ignores every policy

## Assignment

### Prefer watching?

- ▶ [Everything you need to know about Postgres Row Level Security](https://www.youtube.com/watch?v=vZT1Qx2xUCo) (Microsoft Developer, 18 min): Policies and their traps, for Days 5–6.

### Day 1 · about 90 min

> **Why:** Learn how the database itself can keep each group's data apart.
>
> **Skip if** you've set up Postgres row-level security with `current_setting` before.

1. Read [Multi-tenant data isolation with PostgreSQL Row Level Security](https://aws.amazon.com/blogs/database/multi-tenant-data-isolation-with-postgresql-row-level-security/) by Michael Beardsley (AWS Database Blog). Multitenant means one app serving several separate groups. It's plain Postgres: policies, `current_setting`, BYPASSRLS and FORCE.

### Days 2–4 · about 4.5 hours

> **Why:** Move Ask MDN's search into Postgres, so the database can enforce access.
>
> **Don't skip:** Everything from here runs on this table.

2. Install Docker ([get started](https://docs.docker.com/get-started/)) and run `docker run hello-world`. Docker runs programs in their own little boxes called containers. Low on memory or disk space? Use a free [GitHub Codespace](https://docs.github.com/en/codespaces/getting-started/quickstart) instead; it runs in the browser and has Docker built in.
3. Do Zoomcamp Module 2's [08 pgvector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/08-pgvector.md) lesson now (you skipped it in Embeddings and Vector Search): vector search inside Postgres.
4. Start Postgres with pgvector locally using the [pgvector Docker image](https://hub.docker.com/r/pgvector/pgvector) (`pgvector/pgvector:0.8.7-pg17`). If port 5432 is taken by your Zoomcamp database, use another port.
5. Read the [full-text search intro](https://www.postgresql.org/docs/current/textsearch-intro.html) and [Tables and Indexes](https://www.postgresql.org/docs/current/textsearch-tables.html). They show the generated column and GIN index you need.
6. Move Ask MDN's chunks into one table with a `group_id` column, a text-search column and an embedding column. Then rebuild `hybrid_search()` on top of it.

### Days 5–6 · about 3 hours

> **Why:** Turn on row-level security, with an app role that can't bypass it.
>
> **Don't skip:** This is the lock the capstone depends on.

7. Read the Postgres [row-level security docs](https://www.postgresql.org/docs/current/ddl-rowsecurity.html). Turn row-level security on and force it on the chunks and `notes` tables, with a policy that only shows rows whose `group_id` matches the current group.
8. Create your app's role with [CREATE ROLE](https://www.postgresql.org/docs/current/sql-createrole.html): not the table owner, not a superuser and no BYPASSRLS, because those can skip the rules. Grant it only what it needs.
9. Set the current group at the start of each transaction with `set_config` ([docs](https://www.postgresql.org/docs/current/functions-admin.html)).

### Day 7 · about 90 min

> **Why:** Prove one group can't see the other's data, and that the test really tests the database.
>
> **Don't skip:** These tests guard every later change.

10. Write pytest tests: with the group set to CSS, search returns zero JavaScript chunks and reading or writing JS notes fails. Check in SQL that your app role's `rolbypassrls` is false.
11. In the same tests, check that `current_user` is your app role, and that your search code has no `WHERE group_id = …` of its own. AI assistants like to add one, and then the tests pass even when row-level security does nothing.

### Memory check · 10 min

12. Close this page. In your log, answer from memory, then check:
   - Which database roles can skip row-level security? ([where to check](https://www.postgresql.org/docs/current/ddl-rowsecurity.html))
   - How does promptfoo call Ask MDN without the web page? ([where to check](28-testing-and-ci.md))
13. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Which database roles can skip row-level security?</summary>

Superusers and roles with BYPASSRLS skip row-level security. Table owners skip it too, unless you use FORCE ROW LEVEL SECURITY. FORCE doesn't stop superusers or BYPASSRLS roles from skipping it.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: How does promptfoo call Ask MDN without the web page?</summary>

A promptfoo Python provider calls your `answer(question, user)` function directly, with the test user from `context['vars']`. It returns the answer and the retrieved pages that the checks need, so the Streamlit page isn't involved.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [OWASP LLM02: Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/)
- [Secure multitenant RAG](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag) by Microsoft: the same ideas in Azure's services.
- [RAG with permissions](https://supabase.com/docs/guides/ai/rag-with-permissions) by Supabase docs: another team's version of RAG plus row-level security.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Testing and CI](28-testing-and-ci.md) · [Course map](README.md) · [Next lesson: Login →](30-login.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
