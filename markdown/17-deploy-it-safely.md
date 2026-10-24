# Deploy It Safely

*Section 3: RAG with LLM Zoomcamp · Lesson 17 of 30 · about 3 hours*

## Introduction

Deploying means putting your app online. It's an important skill, so you'll do it now.

Ask MDN will be a private app that only people you invite can use. You don't need a database server yet, because the app brings its own search file.

## Lesson overview

By the end of this lesson, you should be able to:

- Deploy a Streamlit app from GitHub.
- Keep secrets like API keys out of your code.
- Make your app private, and undo a bad deploy (roll back).

## Assignment

### Day 1

1. Read [Deploy your app](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app) and [Secrets management](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/secrets-management).
2. Check that no API key exists anywhere in your Git history. Put the OpenAI key in the app's Secrets settings.
3. Ship the sqlitesearch index file with the app, or build it when the app starts.

### Day 2

4. Deploy it. Then make it your one private app and invite yourself and one friend as viewers ([Share your app](https://docs.streamlit.io/deploy/streamlit-community-cloud/share-your-app)).
5. Practise a rollback: deploy a broken version on purpose, then deploy the previous version again.
6. Check your OpenAI budget alerts and credit balance one more time.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [Where does the API key live when the app is online?](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/secrets-management)
- [How many private apps can you have on Community Cloud?](https://docs.streamlit.io/deploy/streamlit-community-cloud/share-your-app)

---

[← Previous: Monitoring](16-monitoring.md) · [Course map](README.md) · [Next lesson: Project: Ask MDN →](18-project-ask-mdn.md)
