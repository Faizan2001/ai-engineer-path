# Setting Up Your Tools

*Section 2: Foundations · Lesson 4 of 32 · about 3 hours*

## Introduction

*You paste a blurry concert poster into ChatGPT and it reads it perfectly. Then your code tries a hundred posters and gets back ninety-seven forms, an essay, a refusal and a rate-limit error. This section closes the gap between that demo and a real feature: tokens, typed output, retries, cost per call and a person who presses Approve.*

> **Your API key is a password that spends money. Make leaking it hard, and cheap if it happens.**

Let's get your computer ready. You'll use this setup for the whole path, so take your time.

You'll also protect your API key. An API key is like a password that lets your code use a paid AI service, so it must stay secret.

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

1. Follow the Zoomcamp [environment lesson](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/02-environment.md): install uv, create a project, put your OpenAI key in a `.env` file and run the test call.
2. Make a separate OpenAI project and key just for this path. Keep only a small amount of credit on the account, and turn auto-recharge off if your account uses prepaid credit. Set budget alerts too, and check whether they stop spending or only send a warning.
3. **Paying from Bangladesh:** OpenAI needs a card that works for international online payments (many banks offer a dual-currency card; ask yours). Add credit $5 at a time. **No such card yet?** Don't stop. Use Google's Gemini free tier through its [OpenAI-compatible endpoint](https://ai.google.dev/gemini-api/docs/openai): change the `base_url`, key and model name. Send only public data, because Google may use free-tier content to improve its products ([pricing page](https://ai.google.dev/gemini-api/docs/pricing)). Expect small differences: its examples use Chat Completions, there's no documented `refusal` field (fake one in your tests), and you'll set promptfoo's grading model yourself. Switch to OpenAI when you can.
4. Add `.env` to your `.gitignore` file before your first commit, so the key never reaches GitHub.

### Day 2 · about 90 min

5. Install Docker ([get started](https://docs.docker.com/get-started/)) and run `docker run hello-world`. Docker runs programs in their own little boxes called containers. Low on memory or disk space? Use a free [GitHub Codespace](https://docs.github.com/en/codespaces/getting-started/quickstart) instead; it runs in the browser and has Docker built in.
6. **No AI for this one:** write a script that reads a CSV file, counts the rows for each value in one column and prints the top 3. Stuck for more than 20 minutes? Review the [Python tutorial](https://docs.python.org/3/tutorial/). Check it with six rows whose counts you already know. If files, dictionaries or functions feel unfamiliar, spend up to two extra sessions on those Python tutorial sections and retry with a different CSV. Ask for a hint after 20 stuck minutes. Pass this small check before the model-call assignments; needing the bridge is normal.
7. Add an `AGENTS.md` file ([the format](https://agents.md/)) to your repo. It's a note for your AI coding assistant. Tell it to explain, review and ask you questions, not to write your lesson solutions.

### Memory check · 10 min

8. Close this page. In your log, answer from memory, then check:
   - Why must your API key never be in your code or Git history? ([where to check](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/02-environment.md))
   - What are your two log rules for being stuck and for coming back after a break? ([where to check](01-how-this-path-works.md))
9. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

## Additional resources

These are optional. Use them if you want to go further.

- [uv documentation](https://docs.astral.sh/uv/getting-started/installation/)
- [AI Dev Tools Zoomcamp (how to use AI coding tools well)](https://github.com/DataTalksClub/ai-dev-tools-zoomcamp)
- [Claude Code: best practices for agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices) by Anthropic: habits for working with any coding agent, like planning before code.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Mindset and Asking for Help](03-mindset-and-asking-for-help.md) · [Course map](README.md) · [Next lesson: How LLMs Work →](05-how-llms-work.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 25 Oct 2026
