# Postgres Search and Access Rules

*Section 5: Make It Sturdy · Lesson 27 of 32 · about 1.5 weeks*

## Introduction

> **App code can forget a WHERE clause. A database policy can't.**

Your Campus Assistant will hold several universities' data in one app. Each one must only ever see its own. The safest place to enforce that is the database itself.

You'll move all of Ask MDN's search (keyword and vector) into Postgres, then turn on row-level security: rules inside the database that hide rows a user isn't allowed to see. You'll practise with two pretend groups: a CSS team and a JS team. Think of them as University A and University B; that's exactly what your Campus Assistant will need.

**After this, you can** make the database itself keep each group's data apart.

**The skill that lasts:** defence in depth: assume one layer will fail.

## Lesson overview

By the end of this lesson, you should be able to:

- Run keyword search (full-text search) and vector search in Postgres.
- Turn on row-level security and write a policy.
- Create a safe database role for your app.
- Prove that one group can't see the other's data.

## Try it first

Two minutes, before the reading. Guess first: a wrong guess makes the right answer stick.

**Predict:** Your app connects to Postgres as the owner of the table. Do your row-level security rules still apply?

This lesson has a 2-minute interactive warm-up. [Try it on the web page](https://faizan2001.github.io/ai-engineer-path/#postgres-search-and-access-rules).

## Assignment

### Prefer watching?

- ▶ [Everything you need to know about Postgres Row Level Security](https://www.youtube.com/watch?v=vZT1Qx2xUCo) (Microsoft Developer, 18 min): Policies and their traps, for Days 5–6.

### Day 1 · about 90 min

1. Read Microsoft's [secure multitenant RAG guide](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag). Multitenant means one app serving several separate groups.

### Days 2–4 · about 4.5 hours

2. Do Zoomcamp Module 2's [08 pgvector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/08-pgvector.md) lesson now (you skipped it in Embeddings and Vector Search): vector search inside Postgres.
3. Start Postgres with pgvector locally using the [pgvector Docker image](https://hub.docker.com/r/pgvector/pgvector) (`pgvector/pgvector:0.8.7-pg17`). If port 5432 is taken by your Zoomcamp database, use another port.
4. Read the [full-text search intro](https://www.postgresql.org/docs/current/textsearch-intro.html). Move Ask MDN's chunks into one table with a `group_id` column, a text-search column and an embedding column. Rebuild `hybrid_search()` on top of it.

### Days 5–6 · about 3 hours

5. Read the Postgres [row-level security docs](https://www.postgresql.org/docs/current/ddl-rowsecurity.html). Turn row-level security on and force it on the chunks and `notes` tables, with a policy that only shows rows whose `group_id` matches the current group.
6. Create your app's role with [CREATE ROLE](https://www.postgresql.org/docs/current/sql-createrole.html): not the table owner, not a superuser and no BYPASSRLS, because those can skip the rules. Grant it only what it needs.
7. Set the current group at the start of each transaction with `set_config` ([docs](https://www.postgresql.org/docs/current/functions-admin.html)).

### Day 7 · about 90 min

8. Write pytest tests: with the group set to CSS, search returns zero JavaScript chunks and reading or writing JS notes fails. Check in SQL that your app role's `rolbypassrls` is false.
9. In the same tests, check that `current_user` is your app role, and that your search code has no `WHERE group_id = …` of its own. AI assistants like to add one, and then the tests pass even when row-level security does nothing.

### Recall · 10 min

10. Close this page. In your log, answer from memory, then check:
   - Which database roles can skip row-level security? ([where to check](https://www.postgresql.org/docs/current/ddl-rowsecurity.html))
   - How does promptfoo call Ask MDN without the web page? ([where to check](26-testing-and-ci.md))
11. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [OWASP LLM02: Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/)
- [RAG with permissions](https://supabase.com/docs/guides/ai/rag-with-permissions) by Supabase docs: another team's version of RAG plus row-level security.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Testing and CI](26-testing-and-ci.md) · [Course map](README.md) · [Next lesson: Login →](28-login.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
