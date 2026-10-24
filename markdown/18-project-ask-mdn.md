# Project: Ask MDN

*Section 3: RAG with LLM Zoomcamp · Lesson 18 of 30 · about 3 weeks*

## Introduction

This is your Zoomcamp final project, built on MDN. It answers CSS and JavaScript questions, shows which pages it used, and says “I don't know” when the docs don't cover a question.

You're a web developer, so you'll spot wrong answers quickly. That makes MDN a great place to learn.

## Before you start

- Read the Zoomcamp [project criteria](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/project.md). Your project should meet them.
- Your MDN data and your 60 test questions are frozen. Don't change them now.
- MDN's text is shared under a license called CC-BY-SA. That means you credit “Mozilla Contributors” and link each page you use ([MDN licensing](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license)).

## Assignment

1. Bring together everything from this section: ingestion, hybrid search, the prompt, the chat page and logging.
2. Make every answer show links to the MDN pages it used.
3. Add an “I don't know” path: when search finds nothing useful, say so instead of guessing.
4. Run your tests on the 50 held-back questions and the 10 questions the docs can't answer.
5. Put the final version online as a private app (see [Deploy It Safely](17-deploy-it-safely.md)).
6. Write a README: how it works, how to run it, your results and what you'd improve.

## You're done when

- [ ] Your README reports Hit Rate@5 and MRR@5 for keyword, vector and hybrid search on the 50 held-back questions. If hybrid doesn't win, you explain why.
- [ ] Every answer shows links to the MDN pages it used.
- [ ] It says “I don't know” to all 10 questions the docs can't answer.
- [ ] It runs online as your private Streamlit app, with the API key stored in Secrets.
- [ ] You can explain how a request moves through your app, two decisions you made and one problem you fixed. You made at least one change without AI help.

## Extra credit

- Add reranking and measure whether it helps.
- Compare two embedding models on your practice questions.

---

[← Previous: Deploy It Safely](17-deploy-it-safely.md) · [Course map](README.md) · [Next lesson: Agent Fundamentals →](19-agent-fundamentals.md)
