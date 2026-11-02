# Setting Up Your Tools

*Section 2: Foundations · Lesson 4 of 42 · about 4.5 hours*

## Introduction

*Pasting one poster into ChatGPT works. Your code has to handle a hundred, and some will fail. In this section you learn how language models work, how to get checked answers from them, and how to handle errors and cost. You finish by building a poster reader.*

> **Your API key is a password that spends money. Make leaking it hard, and cheap if it happens.**

In this lesson you set up your computer and get an API key. You'll use this setup for the whole path, so take your time.

**True story (2023): secret code pasted into a chatbot.** Samsung engineers pasted internal source code into ChatGPT. The company then restricted AI chat tools on work devices. [Source](https://www.forbes.com.au/news/innovation/samsung-bans-chatgpt-among-employees-after-sensitive-code-leak/)

**What you'll do differently:** write rules for your assistant on day one: no keys, secrets or private code in prompts.

**After this, you can** run paid AI calls with capped cost and no leaked keys.

**The skill that lasts:** secret and cost hygiene, a habit reviewers notice quickly.

## Lesson overview

By the end of this lesson, you should be able to:

- Create Python projects with uv, a fast tool for Python packages.
- Keep your API key out of your code.
- Limit how much a leaked key could cost you.
- Set some rules for your AI coding assistant.

## Assignment

### Day 1 · about 90 min

> **Why:** Get one paid model call working, with a key that can't leak and spending you control.
>
> **Don't skip:** Every later lesson runs on this setup. If you've done it before, it's a quick check.

1. Create an OpenAI account. Then make a new project just for this path and create an API key inside it. A separate project shows you exactly what this path costs.
2. Add only a small amount of credit. $5 is enough to start. If your account has auto-recharge, turn it off. Set a budget alert, and check whether it stops spending or only sends a warning.
3. **Paying from Bangladesh:** OpenAI needs a card that works for international online payments. Many banks offer a dual-currency card; ask yours. Add credit $5 at a time.
4. **No such card yet?** Don't stop. Use Google's Gemini free tier through its [OpenAI-compatible endpoint](https://ai.google.dev/gemini-api/docs/openai): change the `base_url`, the key and the model name. Send only public data, because Google may use free-tier content to improve its products ([pricing page](https://ai.google.dev/gemini-api/docs/pricing)).
5. **If you use Gemini:** expect small differences from OpenAI, such as no documented `refusal` field. Lessons where it matters will say so. Switch to OpenAI when you can.
6. Follow the Zoomcamp [environment lesson](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/02-environment.md). It installs uv (a fast Python package manager), creates your project folder (the page calls it `llm-zoomcamp-2026-code`), adds the packages, puts your key in a `.env` file and runs a test call. Stop when the test call prints an answer.
7. In the project folder, run `git status`. The file `.env` must not appear in the list. If it does, add `.env` to `.gitignore` and check again before your first commit. Your key must never reach GitHub.
8. In your log, write down the package version, model ID and API endpoint that worked. The Zoomcamp examples can be older than today's docs. Before you change the model or provider, check that the new one supports images, structured output and tools.

### Day 2 · about 90 min

> **Why:** Check that your Python is ready for the model lessons, and give your AI assistant rules.
>
> **Skip if** you can write the CSV top-3 script in 15 minutes without AI. Still create `AGENTS.md`.

9. **No AI for this one:** in your project folder, write `top3.py`. It reads a CSV file, counts the rows for each value in one column and prints the top 3. Check it with a CSV of six rows whose counts you already know. Stuck for 20 minutes? Read the matching part of the [Python tutorial](https://docs.python.org/3/tutorial/), then try again.
10. If files, dictionaries or functions still feel new, spend up to two extra sessions on those parts of the Python tutorial, then retry with a different CSV. Pass this check before the model-call lessons. Needing the extra practice is normal.
11. Create a file called `AGENTS.md` in your project folder ([the format](https://agents.md/)). It's a note that AI coding assistants read before they work. Write four rules in it: explain code to me, review my code, ask me questions, and never write my lesson solutions. Add one more: no keys, secrets or private code in a prompt.
12. Commit `top3.py` and `AGENTS.md`. Run `git status` again: `.env` must still not appear.

### Day 3 · first win, about 90 min

> **Why:** Build a tiny search engine by hand, so retrieval, the core of RAG, makes sense before a library hides it.
>
> **Skip if** you've written keyword search with scoring and tests before. Nothing later uses these files.

13. Before any AI, write five short help pages for an imaginary student office, as plain text files in a folder called `pages` in your project folder. Start each file with an ID, a date and a source, like this: `fees-01 · 2026-09-01 · Accounts office`. Make one page out of date on purpose.
14. Without AI-written code, write `search.py`. Given a question, it prints the top 2 page IDs, or `no matching page` when nothing matches. It should be about 30 lines.
15. Build it in four parts. First, lowercase the question and split it into words. Second, remove common words (the, a, an, is, are, what, when, how, do, i, my, to, of, for). Third, give each page one point for every remaining word it contains. Fourth, print the two highest-scoring pages, or `no matching page` if the best score is 0.
16. Write three tests in `test_search.py` as plain `assert` lines. Run them with `python test_search.py`.
17. Test 1: a question with an obvious answer. Test 2: a question no page answers; your search must print `no matching page`, not guess. Test 3: a question that matches the out-of-date page. Assert that it returns that page, and add a comment: this is wrong, because search can't tell the page is old.
18. Stop here when all three tests pass and you've recorded a one-minute screen capture: a question goes in, page IDs come out. That's your first search engine.

### Memory check · 10 min

19. Close this page. In your log, answer from memory, then check:
   - Why must your API key never be in your code or Git history? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/02-environment.md))
   - What are your two log rules for being stuck and for coming back after a break? ([where to check](01-how-this-path-works.md))
20. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

## Additional resources

These are optional. Use them if you want to go further.

- [uv documentation](https://docs.astral.sh/uv/getting-started/installation/)
- [AI Dev Tools Zoomcamp (how to use AI coding tools well)](https://github.com/DataTalksClub/ai-dev-tools-zoomcamp)
- [Claude Code: best practices for agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices) by Anthropic: habits for working with any coding agent, like planning before code.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Mindset and Asking for Help](03-mindset-and-asking-for-help.md) · [Course map](README.md) · [Next lesson: How LLMs Work →](05-how-llms-work.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
