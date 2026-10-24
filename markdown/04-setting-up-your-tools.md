# Setting Up Your Tools

*Section 2: Foundations · Lesson 4 of 30 · about 3 hours*

## Introduction

Let's get your computer ready. You'll use this setup for the whole path, so take your time.

You'll also protect your API key. An API key is like a password that lets your code use a paid AI service, so it must stay secret.

## Lesson overview

By the end of this lesson, you should be able to:

- Create Python projects with uv, a fast tool for Python packages.
- Keep your API key out of your code.
- Limit how much a leaked key could cost you.
- Set some rules for your AI coding assistant.

## Assignment

### Day 1 · about 1.5 hours

1. Follow the Zoomcamp [environment lesson](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/02-environment.md): install uv, create a project, put your OpenAI key in a `.env` file and run the test call.
2. Make a separate OpenAI project and key just for this path. Keep only a small amount of credit on the account, and turn auto-recharge off if your account uses prepaid credit. Set budget alerts too, and check whether they stop spending or only send a warning.
3. Add `.env` to your `.gitignore` file before your first commit, so the key never reaches GitHub.

### Day 2 · about 1.5 hours

4. Install Docker ([get started](https://docs.docker.com/get-started/)) and run `docker run hello-world`. Docker runs programs in their own little boxes called containers.
5. Python check, without AI help: write a script that reads a CSV file, counts the rows for each value in one column and prints the top 3. Stuck for more than 20 minutes? Review the [Python tutorial](https://docs.python.org/3/tutorial/).
6. Add an `AGENTS.md` file ([the format](https://agents.md/)) to your repo. It's a note for your AI coding assistant. Tell it to explain, review and ask you questions, not to write your lesson solutions.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [Why must your API key never be in your code or Git history?](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/02-environment.md)
- [What does your AGENTS.md file tell your coding assistant?](https://agents.md/)

## Additional resources

These are optional. Use them if you want to go further.

- [uv documentation](https://docs.astral.sh/uv/getting-started/installation/)
- [AI Dev Tools Zoomcamp (how to use AI coding tools well)](https://github.com/DataTalksClub/ai-dev-tools-zoomcamp)

---

[← Previous: Mindset and Asking for Help](03-mindset-and-asking-for-help.md) · [Course map](README.md) · [Next lesson: How LLMs Work →](05-how-llms-work.md)
