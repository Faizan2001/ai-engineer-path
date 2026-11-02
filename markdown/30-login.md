# Login

*Section 5: Make It Sturdy · Lesson 30 of 42 · about 1 week*

**Before you start, check that** search runs in Postgres with row-level security, and your CSS-group tests return zero JS chunks.

## Introduction

> **Your student ID gets you through the campus gate. It doesn't open the exam-paper cupboard. Login only tells you who the person is. You decide what they can open.**

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

1. **Test-out:** have you already shipped OAuth or OIDC sign-in, for example Firebase Auth or Google sign-in? Then skip the reading and the tutorial's explanations.
2. Still create the Google OAuth client, add `st.login` to Ask MDN and add your two test accounts as Test users (about 45 minutes). Then write two lines in your log on how your own platform maps a signed-in user to their data, and tick both Days. If you haven't shipped one before, do the steps below.
3. Read Streamlit's [authentication guide](https://docs.streamlit.io/develop/concepts/connections/authentication). It uses OIDC, the standard behind “Sign in with Google”. Login tells you who someone is, not what they may see.
4. Follow Streamlit's [Google login tutorial](https://docs.streamlit.io/develop/tutorials/authentication/google) to create a Google sign-in (OAuth) client and add `st.login` to Ask MDN locally. Also add your two test accounts as Test users on Google's consent screen, or Google won't let them sign in. If an OAuth error (like a redirect URI mismatch) takes more than 45 minutes, stop and ask, with the exact error message.

### Days 3–4 · about 3 hours

5. Make a `user_groups` table on the server that maps each email to a group. For every request, look up the signed-in user's group and set it in the database transaction. Never trust a group sent from the browser.
6. Give each conversation a server-recorded `owner_id`, `group_id` and random thread ID.
7. Before you load history, load a checkpoint or resume a pending approval, check that the signed-in user owns the conversation and still has its group. A thread ID only locates state; it grants no permission.
8. Clear the browser session's chat state when the user logs out or changes. Make history private by default.

### Days 5–6 · about 3 hours

9. Use two fake test accounts, never real students. Write tests: a CSS user gets zero JavaScript chunks through search, through the agent's tools, and when guessing a document ID. A user with no group gets nothing.
10. Also try a known JS conversation or thread ID as the CSS user, and as a second user in the same group. Neither may read or resume the owner's private chat or approval. Test switching users in the same browser.
11. Don't send any loaded state to a model until these checks pass.

### Memory check · 10 min

12. Close this page. In your log, answer from memory, then check:
   - Why isn't login enough to keep the groups apart? ([where to check](https://docs.streamlit.io/develop/concepts/connections/authentication))
   - How does your app tell Postgres which group is asking? ([where to check](29-postgres-search-and-access-rules.md))
13. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why isn't login enough to keep the groups apart?</summary>

Login only shows who the user is, not which data they may see. The server has to map that person to an allowed group on every request, and deny access when there is no group.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: How does your app tell Postgres which group is asking?</summary>

On every request, the server looks up the signed-in user's group and sets it for the database transaction with `set_config`. The row-level policies read it with `current_setting`. The group must never come from a value the browser sends.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [The Copenhagen Book](https://thecopenhagenbook.com/) by Pilcrow: a free, practical guide to doing login right.
- [LangGraph checkpointers](https://docs.langchain.com/oss/python/langgraph/checkpointers): understand what a thread ID loads, then protect that lookup with your own ownership check.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Postgres Search and Access Rules](29-postgres-search-and-access-rules.md) · [Course map](README.md) · [Next lesson: Fresh Data →](31-fresh-data.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
