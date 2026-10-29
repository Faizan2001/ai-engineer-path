# AI Engineer Path (Markdown version)

*A step-by-step path from your first AI model call to a deployed app with evaluations, access controls and tests.*

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

4. [Setting Up Your Tools](04-setting-up-your-tools.md) · about 4.5 hours
5. [How LLMs Work](05-how-llms-work.md) · about 3 hours
6. [The AI Staircase](06-the-ai-staircase.md) · about 1.5 hours
7. [Structured Output and Errors](07-structured-output-and-errors.md) · about 7.5 hours
8. **Project:** [Poster Reader](08-project-poster-reader.md) · about 2 weeks

## Section 3: RAG with LLM Zoomcamp (Weeks 5–22)

*Ask a model about a CSS property and it answers like a confident senior, even when it's wrong. These eighteen weeks hand it an open book: MDN. Ask MDN learns to find the right page, show it, say “I don't know” when the page isn't there, and earn a report card it can't charm.*

Learn RAG: finding the right information and letting a model answer from it. You'll follow the free LLM Zoomcamp course, build Ask MDN, an assistant for web docs, then start the knowledge base for your Campus Assistant.

- **Before:** Your model answers from memory, and you can't prove search got better.
- **After:** A live, private Ask MDN with citations, “I don't know”, a Hit Rate and MRR table and logs of every answer, plus a campus knowledge base with its first 20 sourced answers.

9. [Keyword RAG](09-keyword-rag.md) · about 1 week
10. [ML Basics: Measuring Quality](10-ml-basics-measuring-quality.md) · about 1.5 weeks
11. [Tools and the Agent Loop](11-tools-and-the-agent-loop.md) · about 1 week
12. [Embeddings and Vector Search](12-embeddings-and-vector-search.md) · about 2 weeks, plus 2 hours
13. [Measuring Search](13-measuring-search.md) · about 1 week, plus 1 hour
14. [Hybrid Search](14-hybrid-search.md) · about 4.5 hours
15. [Data Ingestion](15-data-ingestion.md) · about 4.5 hours
16. [Grading Answers](16-grading-answers.md) · about 9 hours
17. [Monitoring](17-monitoring.md) · about 11 hours
18. [Deploy It Safely](18-deploy-it-safely.md) · about 6 hours
19. **Project:** [Ask MDN](19-project-ask-mdn.md) · about 3 weeks
20. [Campus Knowledge Base](20-campus-knowledge-base.md) · about 10.5 hours, then 1 hour a week
21. [Under the Hood: A Tiny GPT](21-under-the-hood-tiny-gpt.md) · about 9 hours

## Section 4: Agents (Weeks 23–27)

*Until now Ask MDN could only talk. Here it gets hands: three tools, and one of them, saving a note, changes things for real. Hands raise the stakes, because any page it reads can whisper instructions. By the end you can read its loop step by step, and nothing changes until a person says yes.*

Give your app tools so it can take actions. You'll learn how agents work, build one with LangGraph, and learn to keep tools safe.

- **Before:** Your app only talks, and you've never stopped an unsafe tool call.
- **After:** Tests proving `save_note` needs approval of its exact arguments, and logs showing injections ignored.

22. [Agent Fundamentals](22-agent-fundamentals.md) · about 4 hours
23. [LangGraph](23-langgraph.md) · about 9.5 hours
24. [Safe Tools](24-safe-tools.md) · about 3 hours
25. **Project:** [Give It Tools](25-project-give-it-tools.md) · about 2 weeks
26. [Start Applying](26-start-applying.md) · about 3 hours, then 1 hour a week

## Section 5: Make It Sturdy (Weeks 28–39)

*Picture next year's demo. University A's events officer asks your Campus Assistant about next week, and one forgotten WHERE clause shows her University B's unannounced fest. This section rehearses that day with a CSS team and a JS team, and makes the leak impossible rather than unlikely.*

Get your app ready for real users: tests that run automatically, logins, access rules, fresh data and attack tests.

- **Before:** It works on your laptop, for one user, checked by hand.
- **After:** CI that fails on a broken prompt, access rules written in SQL, and zero leaks across 90 attack runs.

27. [Evals That Catch Real Bugs](27-evals-that-catch-real-bugs.md) · about 6 hours
28. [Testing and CI](28-testing-and-ci.md) · about 1 week
29. [Postgres Search and Access Rules](29-postgres-search-and-access-rules.md) · about 1.5 weeks
30. [Login](30-login.md) · about 1 week
31. [Fresh Data](31-fresh-data.md) · about 6 hours
32. [Red-Team Your App](32-red-team-your-app.md) · about 6 hours
33. **Project:** [Make It Sturdy](33-project-make-it-sturdy.md) · about 5 weeks

## Section 6: Capstone: Campus Assistant (Weeks 40–52)

*Registration week. Three freshers ask the same question in three languages within an hour: will dropping a course cost them their scholarship? Last year a senior answered from memory and was half right. This section builds the assistant that answers from the rule itself, asks how many credits they are taking, and names the office when the rule doesn't cover their case.*

Put everything together. Your knowledge base gets a verification pipeline, search learns Bangla and Banglish, answers learn to ask, cite or route, and the assistant ships inside your own platform: website and mobile app. You finish with a small pilot and the evidence to decide what comes next.

- **Before:** Your skills live in practice projects on public data.
- **After:** A piloted Campus Assistant in your web and mobile app, with release gates, a cost report and a verified knowledge base.

34. [Curation and Verification](34-curation-and-verification.md) · about 1 week
35. [Multilingual Search: Bangla, Banglish, English](35-multilingual-search.md) · about 1 week
36. [Answer, Ask or Route](36-answer-ask-or-route.md) · about 12 hours
37. [A Course-Planning Helper](37-course-planning-helper.md) · about 9 hours
38. [Choose Models and a Budget](38-choose-models-and-budget.md) · about 7.5 hours
39. [Ship It: Service and Website](39-assistant-service-and-web.md) · about 3 weeks
40. [Ship It: Mobile App](40-assistant-in-the-mobile-app.md) · about 1 week
41. **Project:** [Campus Assistant Pilot](41-project-campus-assistant.md) · about 3 weeks

## Section 7: Conclusion (Weeks 53–54)

*You shipped an assistant and tested it with real students or in a clearly labelled rehearsal, and you can follow any of its answers from question to evidence. These two weeks check that the skills work on material you've never seen, and leave room to repair one weak spot.*

Test your skills on unfamiliar material, polish your projects and choose what to deepen next.

- **Before:** You followed someone else's plan.
- **After:** A new-domain demonstration, an evidence table and one targeted next practice task.

42. [What's Next](42-whats-next.md) · about 2 weeks (spare)

## Section 8: Electives (Optional, any order)

*The assistant works. Now curiosity takes over: could it run on your own machine, learn Banglish better, talk to other AI tools, listen, or could you build the model itself? Each elective answers one of those with a small, measured experiment.*

Optional depth, each tied back to your Campus Assistant. Choose by goal, not by fear of missing out.

- **Before:** You know where your skills end, but not how to go further.
- **After:** At least one deeper skill practised on your own assistant, with a measured result.

1. [Elective: Run Models Locally](43-elective-local-models.md) · about 1 week
2. [Elective: Fine-Tune a Small Model](44-elective-fine-tuning.md) · about 1.5 weeks
3. [Elective: Share Your Knowledge Base over MCP](45-elective-mcp-server.md) · about 4.5 hours
4. [Elective: Voice and Images](46-elective-voice-and-images.md) · about 1 week
5. [Elective: Go Deeper into Model Internals](47-elective-model-internals.md) · about 3 weeks

---

**Start here →** [How This Path Will Work](01-how-this-path-works.md)

Format inspired by The Odin Project; not affiliated. Lessons link to outside material owned by its authors.
