# Login

*Section 5: Make It Sturdy · Lesson 28 of 32 · about 1 week*

**Before you start, check that** search runs in Postgres with row-level security, and your CSS-group tests return zero JS chunks.

## Introduction

> **Your student ID gets you through the campus gate. It doesn't open the exam-paper cupboard. Login is the gate; the lock is yours.**

Now Ask MDN needs to know who each user is (authentication) so the database can decide what they may see (authorization).

You'll add “Sign in with Google”-style login and connect each signed-in user to the right group.

**True story (2025): password 123456 on an AI hiring platform.** Researchers got into a test admin account on McDonald's AI hiring platform using the password 123456, then changed applicant ID numbers to reach other people's applications. [Source](https://www.csoonline.com/article/4020919/mcdonalds-ai-hiring-tools-password-123456-exposes-data-of-64m-applicants.html)

**What you'll do differently:** decide on the server what each signed-in user may see, and never trust an ID sent from the browser.

**After this, you can** tie each signed-in user to the right data, decided on the server.

**The skill that lasts:** keeping who someone is separate from what they may see.

## Lesson overview

By the end of this lesson, you should be able to:

- Set up a Google sign-in client.
- Add login to a Streamlit app.
- Decide each user's group on the server, never in the browser.

## Try it first

Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.

**Predict:** Someone has signed in with Google. Should they see everything in your app?

## Before you read

**Picture this:** OpenID Connect is a student ID card: it proves who you are, signed by an issuer the gate trusts, such as Google. OAuth is the spare key you lend a friend to collect one parcel: it says what the holder may do for you, not who they are.

Login only answers “who is this?”. Google proves the email, and Streamlit keeps it in a signed cookie. Deciding what they may see is still your job: look the email up in your own table on the server and set the group for that transaction.

- **OIDC**: the standard behind “Sign in with Google”
- **redirect URI**: the exact address Google sends the user back to

## Assignment

### Prefer watching?

- ▶ [An Illustrated Guide to OAuth and OpenID Connect](https://www.youtube.com/watch?v=t18YB3xDfXI) (OktaDev, 17 min): OAuth and OpenID Connect in pictures, for Day 1.

### Days 1–2 · about 3 hours

1. Read Streamlit's [authentication guide](https://docs.streamlit.io/develop/concepts/connections/authentication). It uses OIDC, the standard behind “Sign in with Google”. Login tells you who someone is, not what they may see.
2. Follow Streamlit's [Google login tutorial](https://docs.streamlit.io/develop/tutorials/authentication/google) to create a Google sign-in (OAuth) client and add `st.login` to Ask MDN locally. If an OAuth error (like a redirect URI mismatch) eats more than 45 minutes, stop and ask with the exact error message. Also add your two test accounts as Test users on Google's consent screen, or Google won't let them sign in.

### Days 3–4 · about 3 hours

3. Make a `user_groups` table on the server that maps each email to a group. For every request, look up the signed-in user's group and set it in the database transaction. Never trust a group sent from the browser.
4. Give each conversation a server-recorded `owner_id`, `group_id` and random thread ID. Before loading history, loading a checkpoint, or resuming a pending approval, verify that the signed-in user owns the conversation and still has its group. A thread ID locates state; it grants no permission. Clear the browser session's chat state on logout or user change. Use private-by-default history for this course.

### Days 5–6 · about 3 hours

5. Use two fake test accounts, never real students. Write tests: a CSS user gets zero JavaScript chunks through search, through the agent's tools, and when guessing a document ID. A user with no group gets nothing. Also try a known JS conversation/thread ID as the CSS user, and as a second user in the same group: neither may read or resume the owner's private chat or approval. Test switching users in the same browser. Do not send any loaded state to a model before these checks pass.

### Memory check · 10 min

6. Close this page. In your log, answer from memory, then check:
   - Why isn't login enough to keep the groups apart? ([where to check](https://docs.streamlit.io/develop/concepts/connections/authentication))
   - How does your app tell Postgres which group is asking? ([where to check](27-postgres-search-and-access-rules.md))
7. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why isn't login enough to keep the groups apart?</summary>

Login establishes who the user is, not which data they may access. The server must map that identity to an allowed group and enforce authorization for each request, denying access when no group is assigned.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: How does your app tell Postgres which group is asking?</summary>

For each request, the server looks up the signed-in user's group and sets it for the database transaction with set_config. Row-level policies read that setting with current_setting; the group must not come from an untrusted browser value.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [The Copenhagen Book](https://thecopenhagenbook.com/) by Pilcrow: a free, practical guide to doing login right.
- [LangGraph checkpointers](https://docs.langchain.com/oss/python/langgraph/checkpointers): understand what a thread ID loads, then protect that lookup with your own ownership check.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Postgres Search and Access Rules](27-postgres-search-and-access-rules.md) · [Course map](README.md) · [Next lesson: Fresh Data →](29-fresh-data.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
