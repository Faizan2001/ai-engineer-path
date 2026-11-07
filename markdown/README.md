# AI Engineer Path (Markdown version)

*A step-by-step path from your first AI model call to a deployed app with evaluations, access controls and tests.*

This folder has every lesson as a Markdown file. For the full clickable course with progress tracking, open `index.html` in the folder above.

## Section 1: Introduction (Week 1)

*A club secretary asks if your Events platform could answer students' questions. You say yes, then find forty buzzwords online. This week cuts them down to one job description, one study routine and one promise: after any break, you only owe the next small step.*

Start here. You'll see how the path works, what AI engineers actually do, and where to get help when you're stuck.

- **Before:** AI job posts read like buzzwords, and you can't tell what's new to you.
- **After:** A log that ranks the 5 most-requested tasks as “done before” or “new”, plus your Campus Assistant goal.

1. [How This Path Will Work](01-how-this-path-works.md) · about 45 min
2. [What AI Engineers Do](02-what-ai-engineers-do.md) · about 1.5 hours
3. [Mindset and Asking for Help](03-mindset-and-asking-for-help.md) · about 1 hour

## Section 2: Foundations (Weeks 1–4)

*Pasting one poster into ChatGPT works. Your code has to handle a hundred, and some will fail. In this section you learn how language models work, how to get checked answers from them, and how to handle errors and cost. You finish by building a poster reader.*

Set up your tools and learn how language models work. You'll finish by building your first real AI feature: a poster reader.

- **Before:** You chat with AI and paste its answers into your code.
- **After:** A public Poster Reader repo with a held-back score, the cost per poster, an approval screen and a 60-second demo.

4. [Setting Up Your Tools](04-setting-up-your-tools.md) · about 4.5 hours
5. [How LLMs Work](05-how-llms-work.md) · about 3 hours
6. [The AI Staircase](06-the-ai-staircase.md) · about 1.5 hours
7. [Structured Output and Errors](07-structured-output-and-errors.md) · about 7.5 hours
8. **Project:** [Poster Reader](08-project-poster-reader.md) · about 2 weeks

## Section 3: RAG with LLM Zoomcamp (Weeks 5–20)

*Ask a model about a CSS property and it answers like a confident senior, even when it's wrong. In this section you give it an open book: MDN. Ask MDN learns to find the right page, show it, and say “I don't know” when the page isn't there. Then you test it and score it.*

Learn RAG: finding the right information and letting a model answer from it. You'll follow the free LLM Zoomcamp course, build Ask MDN, an assistant for web docs, then start the knowledge base for your Campus Assistant.

- **Before:** Your model answers from memory, and you can't prove search got better.
- **After:** A live, private Ask MDN with citations, “I don't know”, a Hit Rate and MRR table and logs of every answer, plus a campus knowledge base with its first 20 sourced answers.

9. [Keyword RAG](09-keyword-rag.md) · about 1 week
10. [ML Basics: Measuring Quality](10-ml-basics-measuring-quality.md) · about 1.5 weeks
11. [Tools and the Agent Loop](11-tools-and-the-agent-loop.md) · about 1 week
12. [Embeddings and Vector Search](12-embeddings-and-vector-search.md) · about 1.5 weeks
13. [Measuring Search](13-measuring-search.md) · about 1 week, plus 1 hour
14. [Hybrid Search](14-hybrid-search.md) · about 4.5 hours
15. [Data Ingestion](15-data-ingestion.md) · about 4.5 hours
16. [Grading Answers](16-grading-answers.md) · about 9 hours
17. [Monitoring](17-monitoring.md) · about 6 hours
18. [Deploy It Safely](18-deploy-it-safely.md) · about 6 hours
19. **Project:** [Ask MDN](19-project-ask-mdn.md) · about 2 weeks
20. [Campus Knowledge Base](20-campus-knowledge-base.md) · about 10.5 hours, then 1 hour a week
21. [Under the Hood: A Tiny GPT](21-under-the-hood-tiny-gpt.md) · about 9 hours

## Section 4: Agents (Weeks 21–24)

*Until now Ask MDN could only talk. Now it gets tools, and one of them, saving a note, changes things for real. That raises the stakes, because any page it reads can hide instructions. By the end you can read its loop step by step, and nothing changes until a person says yes.*

Give your app tools so it can take actions. You'll learn how agents work, build one with LangGraph, and learn to keep tools safe.

- **Before:** Your app only talks, and you've never stopped an unsafe tool call.
- **After:** Tests proving `save_note` needs approval of its exact arguments, and logs showing injections ignored.

22. [Agent Fundamentals](22-agent-fundamentals.md) · about 2.5 hours
23. [LangGraph](23-langgraph.md) · about 9.5 hours
24. [Safe Tools](24-safe-tools.md) · about 3 hours
25. **Project:** [Give It Tools](25-project-give-it-tools.md) · about 1.5 weeks
26. [Start Applying](26-start-applying.md) · about 3 hours, then 1 hour a week

## Section 5: Make It Sturdy (Weeks 25–33)

*Picture next year's demo. University A's events officer asks your Campus Assistant about next week, and one forgotten WHERE clause shows her University B's unannounced fest. In this section you rehearse that day with a CSS team and a JS team, and make the leak impossible rather than unlikely.*

Get your app ready for real users: tests that run automatically, logins, access rules, fresh data and attack tests.

- **Before:** It works on your laptop, for one user, checked by hand.
- **After:** CI that fails on a broken prompt, access rules written in SQL, and zero leaks across 90 attack runs.

27. [Evals That Catch Real Bugs](27-evals-that-catch-real-bugs.md) · about 4 hours
28. [Testing and CI](28-testing-and-ci.md) · about 1 week
29. [Postgres Search and Access Rules](29-postgres-search-and-access-rules.md) · about 1.5 weeks
30. [Login](30-login.md) · about 1 week
31. [Fresh Data](31-fresh-data.md) · about 4.5 hours
32. [Red-Team Your App](32-red-team-your-app.md) · about 6 hours
33. **Project:** [Make It Sturdy](33-project-make-it-sturdy.md) · about 3.5 weeks

## Section 6: Capstone: Campus Assistant (Weeks 34–44)

*Registration week. Three freshers ask the same question in three languages within an hour: will dropping a course cost them their scholarship? Last year a senior answered from memory and was half right. In this section you build an assistant that answers from the rule itself, asks how many credits they are taking, and names the office when the rule doesn't cover their case.*

Put everything together. You add a checking pipeline to your knowledge base, make search work in Bangla and Banglish, teach the assistant to ask, cite or route, and ship it inside your own platform, on the web and in the mobile app. You finish with a small pilot and the evidence to decide what comes next.

- **Before:** Your skills live in practice projects on public data.
- **After:** A piloted Campus Assistant in your web and mobile app, with release gates, a cost report and a verified knowledge base.

34. [Curation and Verification](34-curation-and-verification.md) · about 7.5 hours
35. [Multilingual Search: Bangla, Banglish, English](35-multilingual-search.md) · about 6 hours
36. [Answer, Ask or Route](36-answer-ask-or-route.md) · about 12 hours
37. [Choose Models and a Budget](37-choose-models-and-budget.md) · about 4.5 hours
38. [Ship It: Service and Website](38-assistant-service-and-web.md) · about 3 weeks
39. [Ship It: Mobile App](39-assistant-in-the-mobile-app.md) · about 1 week
40. **Project:** [Campus Assistant Pilot](40-project-campus-assistant.md) · about 2.5 weeks

## Section 7: Conclusion (Weeks 45–46)

*You built an assistant and tested it with real students, or in a clearly labelled rehearsal. These two weeks check that your skills work on material you've never seen, and leave room to repair one weak spot.*

Test your skills on unfamiliar material, polish your projects and choose what to deepen next.

- **Before:** You followed someone else's plan.
- **After:** A new-domain demonstration, an evidence table and one targeted next practice task.

41. [What's Next](41-whats-next.md) · about 2 weeks (spare)

## Section 8: Electives (Optional, any order)

*The assistant works. Now you can follow your curiosity: help students plan their courses, run it on your own machine, improve its Banglish, connect it to other AI tools, add voice, or build a model yourself. Each elective is one small, measured experiment.*

Optional depth, each tied back to your Campus Assistant. Choose by goal, not by fear of missing out.

- **Before:** You know where your skills end, but not how to go further.
- **After:** At least one deeper skill practised on your own assistant, with a measured result.

1. [Elective: A Course-Planning Helper](42-course-planning-helper.md) · about 9 hours
2. [Elective: Run Models Locally](43-elective-local-models.md) · about 1 week
3. [Elective: Fine-Tune a Small Model](44-elective-fine-tuning.md) · about 1.5 weeks
4. [Elective: Share Your Knowledge Base over MCP](45-elective-mcp-server.md) · about 4.5 hours
5. [Elective: Voice and Images](46-elective-voice-and-images.md) · about 1 week
6. [Elective: Go Deeper into Model Internals](47-elective-model-internals.md) · about 3 weeks

---

**Start here →** [How This Path Will Work](01-how-this-path-works.md)

Format inspired by The Odin Project; not affiliated. Lessons link to outside material owned by its authors.
