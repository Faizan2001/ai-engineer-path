# Setting Up Your Tools

*Section 2: Foundations · Lesson 4 of 42 · about 4.5 hours*

## Introduction

*Pasting one poster into ChatGPT works. Your code has to handle a hundred, and some will fail. In this section you learn how language models work, how to get checked answers from them, and how to handle errors and cost. You finish by building a poster reader.*

> **Your API key is a password. Keep it in one file, and never let that file reach GitHub.**

In this lesson you set up your computer, get a free Gemini API key and call a model from your own code. You'll use this setup for the whole path, so take your time.

**True story (2023): secret code pasted into a chatbot.** Samsung engineers pasted internal source code into ChatGPT. The company then restricted AI chat tools on work devices. [Source](https://www.forbes.com.au/news/innovation/samsung-bans-chatgpt-among-employees-after-sensitive-code-leak/)

**What you'll do differently:** write rules for your assistant on day one: no keys, secrets or private code in prompts.

**After this, you can** call a model from your own code, with no leaked keys and no surprise bills.

**The skill that lasts:** secret and cost hygiene, a habit reviewers notice quickly.

## Lesson overview

By the end of this lesson, you should be able to:

- Create a Python project with uv, a fast tool for Python packages.
- Call a model from your own code, with Gemini's free tier or OpenAI.
- Keep your API key in one file, out of your code and out of Git.
- Set some rules for your AI coding assistant.

## Assignment

### Day 1 · about 90 min

> **Why:** Make one real model call from your own code, with your key kept in one safe file.
>
> **Don't skip:** Every later lesson runs on this setup. If you've done it before, it's a quick check.

1. **Get your API key.** Open [Google AI Studio](https://aistudio.google.com/apikey), sign in and click **Create API key**. Copy the key. Already have one? Use that. It's free and needs no card. Don't add billing, so a leaked key can't cost you money.
2. **Know the free-tier rule.** Google may use what you send on the free tier to improve its products ([pricing page](https://ai.google.dev/gemini-api/docs/pricing)). Send only public text or text you wrote yourself, never real students' details.
3. **Install uv.** uv installs Python and your packages. In a terminal, run:
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```
   Close the terminal, open a new one and run `uv --version`. You should see a version number. On Windows, use the command on [uv's install page](https://docs.astral.sh/uv/getting-started/installation/).
4. **Make your project folder.** This one folder holds all your Zoomcamp work. Run these one at a time:
   ```bash
   mkdir llm-zoomcamp-2026-code
   cd llm-zoomcamp-2026-code
   uv init
   uv add openai python-dotenv requests minsearch jupyter
   ```
   `uv init` also starts a Git repo and creates `main.py`. You don't need `main.py`, so delete it.
5. **Tell Git to ignore your key file.** Do this before the key exists:
   ```bash
   echo ".env" >> .gitignore
   git check-ignore .env
   ```
   The second command must print `.env`. That means Git will never upload this file.
6. **Put your key in `.env`.** Create a file called `.env` in the project folder with these three lines. Replace `paste-your-gemini-key-here` with your key, with no spaces or quotes:
   ```text
   OPENAI_API_KEY=paste-your-gemini-key-here
   OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
   MODEL=gemini-3.8-flash
   ```
   This file is the only place your key ever goes. You never type it into your code.
7. **Why a Gemini key sits on a line called `OPENAI_API_KEY`.** You'll send requests with the `openai` Python package, and that package looks for these names. It's only the tool that sends the request. `OPENAI_BASE_URL` points it at Google, so you're using Gemini and your Gemini key. Nothing goes to OpenAI.
8. **Make your first call.** Create `first_call.py` in the same folder:
   ```python
   import os
   
   from dotenv import load_dotenv
   from openai import OpenAI
   
   load_dotenv()
   client = OpenAI()
   
   response = client.chat.completions.create(
       model=os.environ["MODEL"],
       messages=[{"role": "user", "content": "Say hello in one short sentence."}],
   )
   
   print(response.choices[0].message.content)
   print(response.usage.total_tokens, "tokens used")
   ```
   Run it:
   ```bash
   uv run first_call.py
   ```
   You should see a short hello, then a token count. That's a real model answering your own code.
9. **Got an error instead?** Read its last line. `Error code: 400`: your key is wrong, so copy it into `.env` again. `Error code: 404`: the model name is out of date, so pick a current one from [Gemini's models page](https://ai.google.dev/gemini-api/docs/models) and change `MODEL`. `Error code: 429`: you hit a [free-tier limit](https://ai.google.dev/gemini-api/docs/rate-limits), so wait a minute and try again. `Missing credentials`: the file isn't named exactly `.env`, or it's in another folder.
10. **Save your work.**
   ```bash
   git add .
   git commit -m "First model call"
   ```
   Git leaves out `.env`, as you told it to. In your log, write down the model that worked. Stop here when `first_call.py` prints an answer.
11. **Only if you pay for OpenAI instead:** OpenAI needs a card that works for international payments. Many banks offer a dual-currency card. Make a new OpenAI project with its own key, add $5 of credit, turn auto-recharge off and set a budget alert. In `.env`, use that key, delete the `OPENAI_BASE_URL` line and set `MODEL=gpt-5.4-mini`. Nothing else changes.

### Day 2 · about 90 min

> **Why:** Write the `llm()` function you'll reuse, learn the one swap for Zoomcamp code, and check your Python.
>
> **Don't skip:** Every Zoomcamp lesson uses `llm()` and this swap. If you know Python, the check takes 15 minutes.

12. **Save your call as a function.** You'll use it for every plain model call. Create `llm.py` in your project folder:
   ```python
   import os
   
   from dotenv import load_dotenv
   from openai import OpenAI
   
   load_dotenv()
   client = OpenAI()
   
   
   def llm(prompt):
       response = client.chat.completions.create(
           model=os.environ["MODEL"],
           messages=[{"role": "user", "content": prompt}],
       )
       return response.choices[0].message.content
   ```
13. **Open a notebook.** Zoomcamp lessons run in notebooks, so check that yours works:
   ```bash
   uv run jupyter notebook
   ```
   A browser tab opens. Click **New**, then **Python 3 (ipykernel)**. Save it as `setup-check` in the project folder.
14. **Call your function.** Paste this into the first cell and press Shift+Enter:
   ```python
   from llm import llm
   
   llm("What is a token? Answer in one sentence.")
   ```
   You should see the answer under the cell.
15. **Learn the one swap for Zoomcamp code.** Zoomcamp's examples use OpenAI's Responses API. Gemini doesn't have it, so that code stops with `Error code: 404`. When you see this:
   ```python
   response = openai_client.responses.create(
       model="gpt-5.4-mini",
       input=prompt
   )
   answer = response.output_text
   ```
   write this instead:
   ```python
   answer = llm(prompt)
   ```
   The lessons on structured output and tools each show their own swap. Paying for OpenAI? Keep Zoomcamp's code as it is.
16. **Python check, no AI for this one.** Create `students.csv`:
   ```text
   name,department
   Anika,CSE
   Rafi,CSE
   Mim,EEE
   Tanvir,CSE
   Nadia,BBA
   Sakib,EEE
   ```
   Write `top3.py`. It reads the file, counts the students in each department and prints the top 3:
   ```text
   CSE 3
   EEE 2
   BBA 1
   ```
   Stuck for 20 minutes? Read the Python tutorial on [reading files](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files) and [dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries), then try again.
17. If files, dictionaries or functions still feel new, spend up to two extra sessions on those tutorial pages, then retry with a different CSV. Get this working before you move on. Needing the extra practice is normal.
18. **Give your AI assistant rules.** Create `AGENTS.md` in the project folder ([the format](https://agents.md/)). AI coding assistants read this file before they work. Put this in it:
   ```text
   Explain code to me and review my code. Ask me questions.
   Don't write my lesson solutions.
   Never read .env. Never put keys, secrets or private code in a prompt.
   ```
19. **Save your work.**
   ```bash
   git add .
   git commit -m "Add llm function, Python check and assistant rules"
   ```
   Stop here when `llm()` answers in your notebook and `top3.py` prints those three lines.

### Day 3 · first win, about 90 min

> **Why:** Build a tiny search engine by hand, so retrieval, the core of RAG, makes sense before a library hides it.
>
> **Skip if** you've written keyword search with scoring and tests before. Nothing later uses these files.

20. Today you build a small search engine, with no AI-written code. In your project folder, make a folder called `pages` with five short help pages for an imaginary student office, one text file each. The file name is the page ID. The first line gives the ID, date and source. For example, `pages/fees-01.txt`:
   ```text
   fees-01 · 2026-09-01 · Accounts office
   Tuition fees are due by 15 January. Pay at the bank or online.
   ```
21. Make one of the five out of date on purpose, for example a `library-01` page dated 2024 with old closing times.
22. Create `search.py` with one function, `search(question)`. It returns a list of up to 2 page IDs, best first, or an empty list if nothing matches. Build it in four parts. First, lowercase the question, split it into words and strip the `?`. Second, remove common words (the, a, an, is, are, what, when, how, do, i, my, to, of, for). Third, give each page one point for every remaining word its text contains. Fourth, return the two highest-scoring pages, leaving out any page with 0 points. It should be about 20 lines.
23. Add this to the bottom of `search.py`, so you can ask questions from the terminal:
   ```python
   if __name__ == "__main__":
       import sys
       ids = search(sys.argv[1])
       print(ids if ids else "no matching page")
   ```
   Try it:
   ```bash
   uv run search.py "when are tuition fees due?"
   ```
   You should see page IDs, with the right page first.
24. Create `test_search.py` with three tests. Change the questions and IDs to match your own pages:
   ```python
   from search import search
   
   # A question with an obvious answer
   assert search("when are tuition fees due?")[0] == "fees-01"
   
   # A question no page answers
   assert search("is there a swimming pool?") == []
   
   # A question that finds the out-of-date page.
   # This is a wrong answer: search can't read dates yet.
   assert search("when does the library close?")[0] == "library-01"
   
   print("all tests passed")
   ```
   Run it with `uv run test_search.py`.
25. Stop here when you see `all tests passed`, then commit. That's your first search engine.

### Memory check · 10 min

26. Close this page. In your log, answer from memory, then check:
   - Why must your API key never be in your code or Git history? ([where to check](04-setting-up-your-tools.md))
   - What are your two log rules for being stuck and for coming back after a break? ([where to check](01-how-this-path-works.md))
27. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why must your API key never be in your code or Git history?</summary>

Anyone who gets the key can use your account. Git keeps every old version, so a key you commit stays in the history even after you delete it. Keep it in `.env`, which Git ignores.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

## Additional resources

These are optional. Use them if you want to go further.

- [uv documentation](https://docs.astral.sh/uv/getting-started/installation/)
- [AI Dev Tools Zoomcamp (how to use AI coding tools well)](https://github.com/DataTalksClub/ai-dev-tools-zoomcamp)
- [Claude Code: best practices for agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices) by Anthropic: habits for working with any coding agent, like planning before code.

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Mindset and Asking for Help](03-mindset-and-asking-for-help.md) · [Course map](README.md) · [Next lesson: How LLMs Work →](05-how-llms-work.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 30 Oct 2026
