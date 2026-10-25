# AI Engineer Path (Markdown version)

*A step-by-step path from your very first AI model call to a tested, secure AI app you can put online.*

This folder has every lesson as a Markdown file. For the full clickable course with progress tracking, open `index.html` in the folder above.

## Section 1: Introduction (Week 1)

*A club secretary asks whether your Events platform could just answer students' questions. You say yes, open a browser and drown in forty buzzwords. This week shrinks them to one job description, one study routine and one promise: after any break, you only owe the next small step.*

Start here. You'll see how the path works, what AI engineers actually do, and where to get help when you're stuck.

- **Before:** AI job posts read like buzzwords, and you can't tell what's new to you.
- **After:** A log that ranks the 5 most-requested tasks as “done before” or “new”, plus your Campus Assistant goal.

1. [How This Path Will Work](01-how-this-path-works.md) · about 45 min
2. [What AI Engineers Do](02-what-ai-engineers-do.md) · about 1.5 hours
3. [Mindset and Asking for Help](03-mindset-and-asking-for-help.md) · about 1 hour

## Section 2: Foundations (Weeks 1–4)

*You paste a blurry concert poster into ChatGPT and it reads it perfectly. Then your code tries a hundred posters and gets back ninety-seven forms, an essay, a refusal and a rate-limit error. This section closes the gap between that demo and a real feature: tokens, typed output, retries, cost per call and a person who presses Approve.*

Set up your tools and learn how language models work. You'll finish by building your first real AI feature: a poster reader.

- **Before:** You chat with AI and paste its answers into your code.
- **After:** A public Poster Reader repo with a held-back score, the cost per poster, an approval screen and a 60-second demo.

4. [Setting Up Your Tools](04-setting-up-your-tools.md) · about 3 hours
5. [How LLMs Work](05-how-llms-work.md) · about 2 hours
6. [The AI Staircase](06-the-ai-staircase.md) · about 1.5 hours
7. [Structured Output and Errors](07-structured-output-and-errors.md) · about 6 hours
8. **Project:** [Poster Reader](08-project-poster-reader.md) · about 2 weeks

## Section 3: RAG with LLM Zoomcamp (Weeks 5–18)

*Ask a model about a CSS property and it answers like a confident senior, even when it's wrong. These fourteen weeks hand it an open book: MDN. Ask MDN learns to find the right page, show it, say “I don't know” when the page isn't there, and earn a report card it can't charm.*

Learn RAG: finding the right information and letting a model answer from it. You'll follow the free LLM Zoomcamp course and build Ask MDN, an assistant for web docs.

- **Before:** Your model answers from memory, and you can't prove search got better.
- **After:** A live, private Ask MDN with citations, “I don't know”, a Hit Rate and MRR table, and logs of every answer.

9. [Keyword RAG](09-keyword-rag.md) · about 1 week
10. [ML Basics: Measuring Quality](10-ml-basics-measuring-quality.md) · about 1 week
11. [Tools and the Agent Loop](11-tools-and-the-agent-loop.md) · about 1 week
12. [Embeddings and Vector Search](12-embeddings-and-vector-search.md) · about 2 weeks
13. [Measuring Search](13-measuring-search.md) · about 1 week
14. [Hybrid Search](14-hybrid-search.md) · about 4.5 hours
15. [Data Ingestion](15-data-ingestion.md) · about 4.5 hours
16. [Grading Answers](16-grading-answers.md) · about 1 week
17. [Monitoring](17-monitoring.md) · about 1 week
18. [Deploy It Safely](18-deploy-it-safely.md) · about 6 hours
19. **Project:** [Ask MDN](19-project-ask-mdn.md) · about 3 weeks

## Section 4: Agents (Weeks 19–23)

*Until now Ask MDN could only talk. Here it gets hands: three tools, and one of them, saving a note, changes things for real. Hands raise the stakes, because any page it reads can whisper instructions. By the end you can read its loop step by step, and nothing changes until a person says yes.*

Give your app tools so it can take actions. You'll learn how agents work, build one with LangGraph, and learn to keep tools safe.

- **Before:** Your app only talks, and you've never stopped an unsafe tool call.
- **After:** Tests proving `save_note` needs approval of its exact arguments, and logs showing injections ignored.

20. [Agent Fundamentals](20-agent-fundamentals.md) · about 1 week
21. [LangGraph](21-langgraph.md) · about 1.5 weeks
22. [Safe Tools](22-safe-tools.md) · about 3 hours
23. **Project:** [Give It Tools](23-project-give-it-tools.md) · about 2 weeks
24. [Start Applying](24-start-applying.md) · about 3 hours, then 1 hour a week

## Section 5: Make It Sturdy (Weeks 24–32)

*Picture next year's demo. University A's events officer asks your Campus Assistant about next week, and one forgotten WHERE clause shows her University B's unannounced fest. This section rehearses that day with a CSS team and a JS team, and makes the leak impossible rather than unlikely.*

Get your app ready for real users: tests that run automatically, logins, access rules, fresh data and attack tests.

- **Before:** It works on your laptop, for one user, checked by hand.
- **After:** CI that fails on a broken prompt, access rules written in SQL, and zero leaks across 90 attack runs.

25. [Evals That Catch Real Bugs](25-evals-that-catch-real-bugs.md) · about 1 week
26. [Testing and CI](26-testing-and-ci.md) · about 1 week
27. [Postgres Search and Access Rules](27-postgres-search-and-access-rules.md) · about 1.5 weeks
28. [Login](28-login.md) · about 1 week
29. [Fresh Data](29-fresh-data.md) · about 4.5 hours
30. [Red-Team Your App](30-red-team-your-app.md) · about 6 hours
31. **Project:** [Make It Sturdy](31-project-make-it-sturdy.md) · about 3.5 weeks

## Section 6: Conclusion (Weeks 33–34)

*Thirty-odd weeks ago a model call felt like magic. Now you know where it guesses, how to catch it and how to keep two groups apart. The Campus Assistant is no longer a vague dream; it's a list of parts you've built and tested. These two weeks decide which parts come first, and which features get a no.*

Catch up, polish your projects and plan what you'll build next.

- **Before:** You followed someone else's plan.
- **After:** A one-page Campus Assistant plan that maps each feature to a repo you built, and its first commit.

32. [What's Next](32-whats-next.md) · about 2 weeks (spare)

---

**Start here →** [How This Path Will Work](01-how-this-path-works.md)

Format inspired by The Odin Project; not affiliated. Lessons link to outside material owned by its authors.
