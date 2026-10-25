# Login

*Section 5: Make It Sturdy · Lesson 28 of 32 · about 1 week*

## Introduction

> **Login answers “who are you?” It politely declines “what may you see?” That's your job.**

Now Ask MDN needs to know who each user is (authentication) so the database can decide what they may see (authorization).

You'll add “Sign in with Google”-style login and connect each signed-in user to the right group.

**After this, you can** tie each signed-in user to the right data, decided on the server.

**The skill that lasts:** keeping who someone is separate from what they may see.

## Lesson overview

By the end of this lesson, you should be able to:

- Set up a Google sign-in client.
- Add login to a Streamlit app.
- Decide each user's group on the server, never in the browser.

## Try it first

Two minutes, before the reading. Guess first: a wrong guess makes the right answer stick.

**Predict:** Someone has signed in with Google. Should they see everything in your app?

## Assignment

### Prefer watching?

- ▶ [An Illustrated Guide to OAuth and OpenID Connect](https://www.youtube.com/watch?v=t18YB3xDfXI) (OktaDev, 17 min): OAuth and OpenID Connect in pictures, for Day 1.

### Days 1–2 · about 3 hours

1. Read Streamlit's [authentication guide](https://docs.streamlit.io/develop/concepts/connections/authentication). It uses OIDC, the standard behind “Sign in with Google”. Login tells you who someone is, not what they may see.
2. Follow Streamlit's [Google login tutorial](https://docs.streamlit.io/develop/tutorials/authentication/google) to create a Google sign-in (OAuth) client and add `st.login` to Ask MDN locally. If an OAuth error (like a redirect URI mismatch) eats more than 45 minutes, stop and ask with the exact error message.

### Days 3–4 · about 3 hours

3. Make a `user_groups` table on the server that maps each email to a group. For every request, look up the signed-in user's group and set it in the database transaction. Never trust a group sent from the browser.

### Days 5–6 · about 3 hours

4. Use two fake test accounts, never real students. Write tests: a CSS user gets zero JavaScript chunks through search, through the agent's tools, and when guessing a document ID. A user with no group gets nothing.

### Recall · 10 min

5. Close this page. In your log, answer from memory, then check:
   - Why isn't login enough to keep the groups apart? ([where to check](https://docs.streamlit.io/develop/concepts/connections/authentication))
   - How does your app tell Postgres which group is asking? ([where to check](27-postgres-search-and-access-rules.md))
6. Write one more line: how will this lesson help your Campus Assistant?

## Additional resources

These are optional. Use them if you want to go further.

- [The Copenhagen Book](https://thecopenhagenbook.com/) by Pilcrow: a free, practical guide to doing login right.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Postgres Search and Access Rules](27-postgres-search-and-access-rules.md) · [Course map](README.md) · [Next lesson: Fresh Data →](29-fresh-data.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
