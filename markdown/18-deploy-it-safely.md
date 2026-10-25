# Deploy It Safely

*Section 3: RAG with LLM Zoomcamp · Lesson 18 of 32 · about 6 hours*

## Introduction

> **Deploying is easy. Rolling back calmly is the skill.**

Deploying means putting your app online. It's an important skill, so you'll do it now.

Ask MDN will be a private app that only people you invite can use. Its search file ships with the app. Its conversation logs need a database that lives online, so you'll set up a free one with Neon.

**After this, you can** put an app online privately and undo a bad release.

**The skill that lasts:** a safe release routine, the same on every team.

## Lesson overview

By the end of this lesson, you should be able to:

- Deploy a Streamlit app from GitHub.
- Keep secrets like API keys out of your code.
- Store logs in a hosted Postgres database safely.
- Make your app private, and undo a bad deploy (roll back).

## Assignment

### Day 1 · about 90 min

1. Read [Deploy your app](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app) and [Secrets management](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/secrets-management).
2. Check that no API key exists anywhere in your Git history. If one does, don't panic: revoke that key in OpenAI first, then clean the history. Put the OpenAI key in the app's Secrets settings.
3. Use the ONNX embedder from Embeddings and Vector Search, so the app stays small. Ship the sqlitesearch index file with the app, or build it when the app starts.

### Day 2 · about 90 min

4. Create a free Neon project ([plans](https://neon.com/docs/introduction/plans)). Read [Neon roles](https://neon.com/docs/manage/roles): roles made in Neon's website get powers that skip security rules, so create your app's database role with SQL ([CREATE ROLE](https://www.postgresql.org/docs/current/sql-createrole.html)) instead.
5. Point Ask MDN's conversation logging at Neon through Secrets, and check that new chats appear there.

### Day 3 · about 90 min

6. Deploy it. Then make it your one private app and invite yourself and one friend as viewers ([Share your app](https://docs.streamlit.io/deploy/streamlit-community-cloud/share-your-app)).
7. Practise a rollback: deploy a broken version on purpose, then deploy the previous version again.

### Day 4 · about 90 min

8. Check your OpenAI budget alerts and credit balance, then write a short “How to deploy” section in your README. Recruiters can't open a private app, so add a short GIF or recording of it working. This is **Ask MDN v0.6**: it's online.

### Recall · 10 min

9. Close this page. In your log, answer from memory, then check:
   - Where does the API key live when the app is online? ([where to check](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/secrets-management))
   - Why should your app's database role be created with SQL on Neon? ([where to check](https://neon.com/docs/manage/roles))
10. Write one more line: how will this lesson help your Campus Assistant?

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Monitoring](17-monitoring.md) · [Course map](README.md) · [Next lesson: Project: Ask MDN →](19-project-ask-mdn.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
