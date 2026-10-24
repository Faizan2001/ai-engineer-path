# Login and Access Rules

*Section 5: Make It Sturdy · Lesson 26 of 30 · about 1 week*

## Introduction

Two questions matter for every user: who are you (authentication), and what are you allowed to see (authorization)? Your Campus Assistant will need both.

You'll practise with two pretend groups: a CSS team that can only see CSS docs, and a JS team that can only see JavaScript docs.

## Lesson overview

By the end of this lesson, you should be able to:

- Add “Sign in with Google”-style login to a Streamlit app.
- Decide each user's group on the server, never in the browser.
- Make the database itself hide rows a user isn't allowed to see. This is called row-level security.

## Assignment

### Day 1

1. Read Microsoft's [secure multitenant RAG guide](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag). Multitenant means one app serving several separate groups.

### Day 2

2. Read the Postgres [row-level security docs](https://www.postgresql.org/docs/current/ddl-rowsecurity.html).
3. In your local Docker Postgres from Zoomcamp, move Ask MDN's chunks into a pgvector table with a `group_id` column. Turn row-level security on and force it. Then create an app role (a database user for your app) that isn't the table owner, isn't a superuser and doesn't have BYPASSRLS. Those three can skip the rules.

### Day 3

4. Add login with Streamlit's [st.login](https://docs.streamlit.io/develop/concepts/connections/authentication). It uses OIDC, the standard behind “Sign in with Google”. Map each signed-in email to a group in a table on the server. Never trust a group sent from the browser.

### Day 4

5. Set each request's group from the login session, inside a database transaction. Write tests: a CSS user gets zero JavaScript chunks through search, through the agent's tools, and when guessing a document ID.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [Why isn't login enough to keep the groups apart?](https://docs.streamlit.io/develop/concepts/connections/authentication)
- [Which database roles can skip row-level security?](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [Where must a request's group come from?](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag)

## Additional resources

These are optional. Use them if you want to go further.

- [OWASP LLM02: Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/)

---

[← Previous: Testing and CI](25-testing-and-ci.md) · [Course map](README.md) · [Next lesson: Fresh Data →](27-fresh-data.md)
