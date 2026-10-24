// AI Engineer Path: all course content lives in this file.
// Edit any text, save, and refresh the page. No build step is needed.
// Inside text you can use: [label](https://link), [label](#lesson-slug), **bold**, `code`.
// Lessons appear in the order below. Every lesson needs a unique "slug"; don't rename slugs
// after you've started, because saved progress is stored by slug.
window.COURSE = {
 "title": "AI Engineer Path",
 "tagline": "A step-by-step path from your very first AI model call to a tested, secure AI app you can put online.",
 "intro": [
  "This path helps a software developer become an AI engineer: someone who builds useful apps on top of AI models that already exist. You'll learn RAG, agents, testing and deployment by building four projects that grow into one real app.",
  "It works like The Odin Project. Each lesson points you to the best free material for one topic, then asks you to build something with it. You learn by building, breaking things and fixing them."
 ],
 "how": [
  "Study 6 days a week for about 90 minutes: roughly 30 minutes learning, 45 minutes building and 15 minutes writing in your log.",
  "The whole path takes about 30 weeks, including 2 spare weeks. All times are estimates. It's fine to go slower, but don't skip the projects.",
  "Long lessons are split into **Day** steps. Stop at the end of a Day and pick up there next time.",
  "Click **Mark complete** when you finish a lesson. The **Continue** button takes you back to where you left off.",
  "One rule for every project: you can explain every important line of your code, even code an AI wrote, and you make at least one change without AI help.",
  "Cost: about $15–20 of OpenAI credit for the whole path (an estimate). Everything else is free. There's no certificate. Your projects are your proof."
 ],
 "disclaimer": "Format inspired by The Odin Project; not affiliated. Lessons link to outside material owned by its authors.",
 "sections": [
  {
   "title": "Introduction",
   "weeks": "Week 1",
   "description": "Start here. You'll see how the path works, what AI engineers actually do, and where to get help when you're stuck.",
   "lessons": [
    {
     "slug": "how-this-path-works",
     "title": "How This Path Will Work",
     "kind": "lesson",
     "time": "about 30 min",
     "intro": [
      "Welcome! This path takes you from your first call to an AI model all the way to a tested, secure AI app that you can put online.",
      "Each lesson points you to free material, then gives you something to build. Please don't skip the building. That's where the real learning happens."
     ],
     "overview": [
      "How the path is organized.",
      "How to split your study time.",
      "How to keep a learning log."
     ],
     "assignment": [
      {
       "steps": [
        "Look over the [course map](#home). There are 6 sections and 4 projects. The whole path takes about 30 weeks.",
        "Pick a fixed time to study, 6 days a week, and put it in your calendar. 90 minutes a day is enough.",
        "Create a private GitHub repository called `ai-engineer-path` and add a file called `log.md`.",
        "Split each session like this: about 30 minutes learning, 45 minutes building and 15 minutes writing in your log. In the log, write what you did, what broke and how you fixed it."
       ]
      }
     ],
     "check": [
      {
       "q": "How long is one study session, and how do you split it?",
       "link": "#how-this-path-works"
      },
      {
       "q": "What do you write in your log after each session?",
       "link": "#how-this-path-works"
      }
     ],
     "extra": [
      "[LLM Zoomcamp curriculum (the main course you'll follow from week 4)](https://datatalksclub.github.io/docs/courses/llm-zoomcamp/curriculum/)"
     ]
    },
    {
     "slug": "what-ai-engineers-do",
     "title": "What AI Engineers Do",
     "kind": "lesson",
     "time": "about 1.5 hours",
     "intro": [
      "An AI engineer builds apps on top of AI models that already exist. You won't train models from scratch. That's usually a job for research teams.",
      "Good news: most of the work is normal software engineering. You load data, call a model, check its answer, test it and watch how it behaves. Your web development skills will help a lot."
     ],
     "overview": [
      "What AI engineers do day to day.",
      "How AI engineering is different from training models.",
      "Which of your skills already count."
     ],
     "assignment": [
      {
       "steps": [
        "Read the README of Alexey Grigorev's [AI Engineering Field Guide](https://github.com/alexeygrigorev/ai-engineering-field-guide). Write down the 5 tasks that show up most in job posts.",
        "If you have Chip Huyen's book [AI Engineering](https://github.com/chiphuyen/aie-book), read chapter 1, section “The AI Engineering Stack”. No book? That's fine; the field guide covers this for now.",
        "In your log, mark which of those tasks you've already done as a web developer and which are new to you."
       ]
      }
     ],
     "check": [
      {
       "q": "What does an AI engineer do that a model researcher usually doesn't?",
       "link": "https://github.com/alexeygrigorev/ai-engineering-field-guide"
      },
      {
       "q": "Which parts of the job are normal software engineering?",
       "link": "https://github.com/alexeygrigorev/ai-engineering-field-guide"
      }
     ],
     "extra": [
      "[AI Engineer roadmap on roadmap.sh (a checklist, not a course)](https://roadmap.sh/ai-engineer)"
     ]
    },
    {
     "slug": "mindset-and-asking-for-help",
     "title": "Mindset and Asking for Help",
     "kind": "lesson",
     "time": "about 45 min",
     "intro": [
      "You will get stuck. Everyone does, and it's a normal part of learning.",
      "This lesson gives you two habits: ask clear questions, and understand every line of code you keep, even code an AI wrote for you."
     ],
     "overview": [
      "Where to ask for help.",
      "How to ask a question people can answer.",
      "The explain-your-code rule."
     ],
     "assignment": [
      {
       "steps": [
        "Reread The Odin Project's [Asking for Help](https://www.theodinproject.com/lessons/foundations-asking-for-help) lesson. The same tips apply here.",
        "Join the [DataTalks.Club Slack](https://datatalks.club/slack.html) and find the `#course-llm-zoomcamp` channel. Always search the [Zoomcamp FAQ](https://datatalks.club/faq/llm-zoomcamp.html) before you post.",
        "Join the [Hugging Face Discord](https://hf.co/join/discord). You'll use it in the agents section.",
        "Copy this rule to the top of your log: “Before I commit code, I can explain what it does and why. In every project, I make at least one change without AI help.” Interviewers check this, so it's worth the effort."
       ]
      }
     ],
     "check": [
      {
       "q": "Where do you look before posting a Zoomcamp question?",
       "link": "https://datatalks.club/faq/llm-zoomcamp.html"
      },
      {
       "q": "What makes a question easy for others to answer?",
       "link": "https://www.theodinproject.com/lessons/foundations-asking-for-help"
      }
     ],
     "extra": [
      "[The Odin Project: Motivation and Mindset](https://www.theodinproject.com/lessons/foundations-motivation-and-mindset)"
     ]
    }
   ]
  },
  {
   "title": "Foundations",
   "weeks": "Weeks 1–3",
   "description": "Set up your tools and learn how language models work. You'll finish by building your first real AI feature: a poster reader.",
   "lessons": [
    {
     "slug": "setting-up-your-tools",
     "title": "Setting Up Your Tools",
     "kind": "lesson",
     "time": "about 3 hours",
     "intro": [
      "Let's get your computer ready. You'll use this setup for the whole path, so take your time.",
      "You'll also protect your API key. An API key is like a password that lets your code use a paid AI service, so it must stay secret."
     ],
     "overview": [
      "Create Python projects with uv, a fast tool for Python packages.",
      "Keep your API key out of your code.",
      "Limit how much a leaked key could cost you.",
      "Set some rules for your AI coding assistant."
     ],
     "assignment": [
      {
       "day": "Day 1 · about 1.5 hours",
       "steps": [
        "Follow the Zoomcamp [environment lesson](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/02-environment.md): install uv, create a project, put your OpenAI key in a `.env` file and run the test call.",
        "Make a separate OpenAI project and key just for this path. Keep only a small amount of credit on the account, and turn auto-recharge off if your account uses prepaid credit. Set budget alerts too, and check whether they stop spending or only send a warning.",
        "Add `.env` to your `.gitignore` file before your first commit, so the key never reaches GitHub."
       ]
      },
      {
       "day": "Day 2 · about 1.5 hours",
       "steps": [
        "Install Docker ([get started](https://docs.docker.com/get-started/)) and run `docker run hello-world`. Docker runs programs in their own little boxes called containers.",
        "Python check, without AI help: write a script that reads a CSV file, counts the rows for each value in one column and prints the top 3. Stuck for more than 20 minutes? Review the [Python tutorial](https://docs.python.org/3/tutorial/).",
        "Add an `AGENTS.md` file ([the format](https://agents.md/)) to your repo. It's a note for your AI coding assistant. Tell it to explain, review and ask you questions, not to write your lesson solutions."
       ]
      }
     ],
     "check": [
      {
       "q": "Why must your API key never be in your code or Git history?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/02-environment.md"
      },
      {
       "q": "What does your AGENTS.md file tell your coding assistant?",
       "link": "https://agents.md/"
      }
     ],
     "extra": [
      "[uv documentation](https://docs.astral.sh/uv/getting-started/installation/)",
      "[AI Dev Tools Zoomcamp (how to use AI coding tools well)](https://github.com/DataTalksClub/ai-dev-tools-zoomcamp)"
     ]
    },
    {
     "slug": "how-llms-work",
     "title": "How LLMs Work",
     "kind": "lesson",
     "time": "about 2 hours",
     "intro": [
      "An LLM (large language model) is the kind of AI behind ChatGPT. You don't need the math to build with one, but you do need a simple picture of how it works.",
      "Here's the short version: text is split into small pieces called tokens. The model predicts the next token, again and again, until the answer is finished."
     ],
     "overview": [
      "What tokens are, and how the model picks the next one.",
      "Why the same question can get different answers.",
      "Why models sometimes make things up."
     ],
     "assignment": [
      {
       "steps": [
        "Watch 3Blue1Brown's [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) (7 min).",
        "Watch [Transformers, the tech behind LLMs](https://www.youtube.com/watch?v=wjZofJX0v4M) (27 min). Pause often and write one sentence for each new idea.",
        "If you have the book, read chapter 2, sections “Sampling” and “Structured Outputs”.",
        "In your log, explain in 5 sentences how a chat model answers a question. Only use words you could explain to a friend."
       ]
      }
     ],
     "check": [
      {
       "q": "What is a token?",
       "link": "https://www.youtube.com/watch?v=LPZh9BOjkQs"
      },
      {
       "q": "Why can the same question get different answers?",
       "link": "https://www.youtube.com/watch?v=wjZofJX0v4M"
      },
      {
       "q": "Why do models sometimes make things up?",
       "link": "https://www.youtube.com/watch?v=LPZh9BOjkQs"
      }
     ],
     "extra": [
      "[Karpathy, Deep Dive into LLMs like ChatGPT (3 h 31 min, optional; watch it in 30-minute pieces alongside the next lessons)](https://www.youtube.com/watch?v=7xTGNNLPyMI)",
      "[3Blue1Brown, Attention in transformers (26 min)](https://www.youtube.com/watch?v=eMlx5fFNoYc)"
     ]
    },
    {
     "slug": "the-ai-staircase",
     "title": "The AI Staircase",
     "kind": "lesson",
     "time": "about 1.5 hours",
     "intro": [
      "Think of AI tools as a staircase. Each step up gives you more power, but also more cost and more ways for things to go wrong.",
      "The steps are: plain code, one model call, structured output, tool calling, RAG, agents, fine-tuning and training your own model. Good engineers stop at the lowest step that solves the problem."
     ],
     "overview": [
      "Tell a workflow (fixed steps you write) from an agent (the model decides the steps).",
      "Know when not to use AI at all.",
      "Pick the right step for a feature."
     ],
     "assignment": [
      {
       "steps": [
        "Read Anthropic's [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents). Notice how a workflow is different from an agent.",
        "Skim the list of factors in the [12-factor agents](https://github.com/humanlayer/12-factor-agents) README. Just the list for now.",
        "Exercise: list 5 features of an app you know well, like your Events platform. For each one, write the lowest step that solves it and why. At least one answer should be “plain code”."
       ]
      }
     ],
     "check": [
      {
       "q": "What's the difference between a workflow and an agent?",
       "link": "https://www.anthropic.com/engineering/building-effective-agents"
      },
      {
       "q": "When should you not use an AI model at all?",
       "link": "https://www.anthropic.com/engineering/building-effective-agents"
      }
     ],
     "extra": [
      "[Chip Huyen's free Agents chapter](https://huyenchip.com/2025/01/07/agents.html)"
     ]
    },
    {
     "slug": "structured-output-and-errors",
     "title": "Structured Output and Errors",
     "kind": "lesson",
     "time": "about 4.5 hours",
     "intro": [
      "Real apps need the model to fill in a form, not write an essay. That's called structured output.",
      "Apps also need to handle problems calmly: slow responses, rate limits (too many requests at once) and refusals (when the model won't answer). In this lesson you'll handle all three."
     ],
     "overview": [
      "Get typed, checked output with Pydantic, a Python library for data models.",
      "Send an image to a model.",
      "Retry the right errors and handle refusals."
     ],
     "assignment": [
      {
       "day": "Day 1 · about 1.5 hours",
       "steps": [
        "Read OpenAI's [Structured Outputs guide](https://developers.openai.com/api/docs/guides/structured-outputs). Focus on Pydantic models, strict schemas and the `refusal` field.",
        "Write a script that turns a sentence like “Hackathon, Friday 3pm, Room 402” into an `Event` Pydantic model."
       ]
      },
      {
       "day": "Day 2 · about 1.5 hours",
       "steps": [
        "Read the [images and vision guide](https://developers.openai.com/api/docs/guides/images-vision). Send one poster image and get your `Event` back.",
        "Read the [error codes guide](https://developers.openai.com/api/docs/guides/error-codes). Add a timeout and at most 2 retries, with a short wait between them, for rate-limit and server errors. Don't retry bad requests: they will fail every time."
       ]
      },
      {
       "day": "Day 3 · about 1.5 hours",
       "steps": [
        "Handle refusals: log them and return “needs a human” instead of crashing.",
        "Write 3 pytest tests for your code: one with good input, one with a missing field and one with a refusal."
       ]
      }
     ],
     "check": [
      {
       "q": "Which API errors should you retry, and which should you not?",
       "link": "https://developers.openai.com/api/docs/guides/error-codes"
      },
      {
       "q": "What does the refusal field tell you?",
       "link": "https://developers.openai.com/api/docs/guides/structured-outputs"
      },
      {
       "q": "Why check the data with code even when the schema is strict?",
       "link": "https://docs.pydantic.dev/latest/"
      }
     ],
     "extra": [
      "[OpenAI Cookbook (worked examples)](https://cookbook.openai.com/)",
      "[Pydantic documentation](https://docs.pydantic.dev/latest/)"
     ]
    },
    {
     "slug": "project-poster-reader",
     "title": "Poster Reader",
     "kind": "project",
     "time": "about 1 week",
     "intro": [
      "Time for your first real AI feature! You'll take a photo of an event poster and turn it into a filled event form.",
      "A person always checks and approves the form before anything is saved. This is exactly the kind of feature you might add to a real product."
     ],
     "before": [
      "Use posters you make yourself, or public posters you're allowed to use. No private data.",
      "Write down the correct answers before you write any prompt. These are your test answers.",
      "Keep some posters hidden while you build. We call these held back. They give you an honest final score."
     ],
     "assignment": [
      {
       "steps": [
        "Make 30 test posters: 20 to practise on and 10 to hold back. On purpose, include some with missing, unclear and hard-to-read details.",
        "Write `expected.json` with the correct details for all 30 posters. Then write `SCORING.md`: explain how you'll compare dates, times and venue names, and how you'll score missing or unclear details.",
        "Build the reader: an image goes in and a strict `Event` comes out. Add plain-code checks (the date is real, the end is after the start), a timeout, at most 2 retries and refusal handling.",
        "Build a small approval screen (Streamlit is fine). Show the draft, let a person fix it, and save only when they approve.",
        "Improve your prompt using only the 20 practice posters. When you're happy, run the 10 held-back posters once.",
        "Write a README: your score on the 10 held-back posters, the cost per poster, and one note for every mistake."
       ]
      }
     ],
     "done": [
      "Your README shows the score on the 10 held-back posters (using your scoring guide) and the cost per poster, with a note on every mistake.",
      "Nothing can be saved without approval. You tried to break this and couldn't.",
      "A failed API call is retried at most twice, then shows “needs a human”.",
      "You can explain how a request moves through your app, two decisions you made and one problem you fixed. You made at least one change without AI help."
     ],
     "extra_credit": [
      "Show a confidence flag next to each field.",
      "Process a whole folder of posters in one run."
     ]
    }
   ]
  },
  {
   "title": "RAG with LLM Zoomcamp",
   "weeks": "Weeks 4–16",
   "description": "Learn RAG: finding the right information and letting a model answer from it. You'll follow the free LLM Zoomcamp course and build Ask MDN, an assistant for web docs.",
   "lessons": [
    {
     "slug": "keyword-rag",
     "title": "Keyword RAG",
     "kind": "lesson",
     "time": "about 1 week",
     "intro": [
      "RAG (retrieval-augmented generation) is like an open-book exam. First you find the right pages, then the model answers using only those pages.",
      "You'll start with plain keyword search because it's fast, cheap and easy to debug. This lesson also starts Ask MDN, an assistant for web docs that you'll keep improving until the end of the path."
     ],
     "overview": [
      "Explain each step of RAG, from question to answer.",
      "Search documents with minsearch, a tiny search library.",
      "Build a prompt from search results."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "Zoomcamp Module 1: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/01-intro.md), [03 RAG](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/03-rag.md) and [04 Dataset](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/04-dataset.md). You already did 02 during setup."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "[05 Search](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/05-search.md) and [06 Building the prompt](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/06-building-prompt.md)."
       ]
      },
      {
       "day": "Day 3",
       "steps": [
        "[07 LLM](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/07-llm.md) and [08 RAG helper](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/08-rag-helper.md)."
       ]
      },
      {
       "day": "Day 4",
       "steps": [
        "[09 Data ingestion](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/09-data-ingestion.md) and [10 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/10-rag-next-steps.md).",
        "Start Ask MDN: clone [mdn/content](https://github.com/mdn/content) and write its commit ID (the SHA) in your README. That exact version is your data from now on, so your tests stay fair.",
        "Load two folders into minsearch: CSS properties (`files/en-us/web/css/reference/properties`) and JavaScript global objects (`files/en-us/web/javascript/reference/global_objects`). Ask it three questions and look at what it finds."
       ]
      }
     ],
     "check": [
      {
       "q": "Why start with keyword search before vector search?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/05-search.md"
      },
      {
       "q": "What goes into a RAG prompt?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/06-building-prompt.md"
      }
     ],
     "extra": [
      "[Chip Huyen, chapter 6, section “RAG” (book)](https://github.com/chiphuyen/aie-book)"
     ]
    },
    {
     "slug": "tools-and-the-agent-loop",
     "title": "Tools and the Agent Loop",
     "kind": "lesson",
     "time": "about 1 week",
     "intro": [
      "The course calls Module 1 “Agentic RAG”. Here's what that means: instead of always searching, you give the model a search tool and let it decide when to use it.",
      "This is called function calling. You'll study agents properly in Section 4. For now, just get the idea."
     ],
     "overview": [
      "Explain function calling: the model asks your code to run a function.",
      "Build a simple agent loop: ask, act, look at the result, repeat.",
      "See what agent frameworks add."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "[11 Agents intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/11-agents-intro.md) and [12 RAG revision](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/12-rag-revision.md)."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "[13 Function calling](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/13-function-calling.md)."
       ]
      },
      {
       "day": "Day 3",
       "steps": [
        "[14 Agentic loop](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/14-agentic-loop.md)."
       ]
      },
      {
       "day": "Day 4",
       "steps": [
        "[15 Frameworks](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/15-frameworks.md) and [16 Other frameworks](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/16-other-frameworks.md). Just skim these; this path uses LangGraph later.",
        "Add to Ask MDN: turn your search into a tool, let the model call it, and log every call."
       ]
      }
     ],
     "check": [
      {
       "q": "How is agentic RAG different from plain RAG?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/11-agents-intro.md"
      },
      {
       "q": "What stops an agent loop from running forever?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/01-agentic-rag/14-agentic-loop.md"
      }
     ],
     "extra": [
      "[Anthropic, Building effective agents (worth a second read now)](https://www.anthropic.com/engineering/building-effective-agents)"
     ]
    },
    {
     "slug": "embeddings-and-vector-search",
     "title": "Embeddings and Vector Search",
     "kind": "lesson",
     "time": "about 2 weeks",
     "intro": [
      "Keyword search only finds exact words. If someone asks about “centering” but the page says “alignment”, it can miss. Embeddings fix this.",
      "An embedding turns text into a list of numbers, so texts with similar meaning end up close together. Searching by meaning is called vector search. Give this lesson two weeks; the course says it takes longer than most."
     ],
     "overview": [
      "Explain what an embedding is.",
      "Run vector search with three different tools.",
      "Build the search file Ask MDN will use online."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "Read Google's [Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings) module for the big idea. Then Module 2: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/01-intro.md) and [02 Embeddings](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/02-embeddings.md)."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "[03 Embeddings dataset](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/03-embeddings-dataset.md)."
       ]
      },
      {
       "day": "Day 3",
       "steps": [
        "[04 Vector search](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/04-vector-search.md) and [05 minsearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/05-minsearch-vector.md)."
       ]
      },
      {
       "day": "Day 4",
       "steps": [
        "[06 RAG with vectors](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/06-rag-vector.md)."
       ]
      },
      {
       "day": "Day 5",
       "steps": [
        "[07 sqlitesearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/07-sqlitesearch-vector.md). This keeps your search index in one file, which is what Ask MDN will use online."
       ]
      },
      {
       "day": "Day 6",
       "steps": [
        "[08 pgvector](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/08-pgvector.md) (vector search inside a Postgres database). You'll come back to it in Section 5."
       ]
      },
      {
       "day": "Day 7",
       "steps": [
        "[09 ONNX embedder](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/09-onnx-embedder.md) and [10 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/10-next-steps.md)."
       ]
      },
      {
       "day": "Days 8–10",
       "steps": [
        "Add to Ask MDN: build a sqlitesearch vector index of your MDN data with the course's local embedding model. It runs on your own computer, so it's free. Compare its answers with keyword search on 5 questions."
       ]
      }
     ],
     "check": [
      {
       "q": "Why can vector search find answers that keyword search misses?",
       "link": "https://developers.google.com/machine-learning/crash-course/embeddings"
      },
      {
       "q": "Why does Ask MDN use sqlitesearch instead of minsearch?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/02-vector-search/07-sqlitesearch-vector.md"
      }
     ],
     "extra": [
      "[RAG Techniques notebooks (handy reference, not a course)](https://github.com/NirDiamant/RAG_Techniques)"
     ]
    },
    {
     "slug": "hybrid-search",
     "title": "Hybrid Search",
     "kind": "lesson",
     "time": "about 3 hours",
     "intro": [
      "MDN questions mix meaning (“how do I center a box?”) with exact names (`justify-content`). Keyword search is great with names. Vector search is great with meaning.",
      "Hybrid search runs both and combines the results, so you get the best of each."
     ],
     "overview": [
      "Know when each kind of search does better.",
      "Combine two result lists with Reciprocal Rank Fusion (RRF).",
      "Know what reranking (a second sorting step) adds."
     ],
     "assignment": [
      {
       "steps": [
        "Read Module 6 lessons [02 Hybrid search](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/06-best-practices/02-hybrid-search.md) and [03 Reranking](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/06-best-practices/03-reranking.md). They were recorded in 2024, so some code is old. Take the ideas, not the code.",
        "Write your own RRF function, about 15 lines. The idea is simple: a page gets more points the higher it ranks in each list, and its points are added up.",
        "Add to Ask MDN: a `hybrid_search()` function that runs both searches and combines them with your RRF function."
       ]
      }
     ],
     "check": [
      {
       "q": "What does RRF use from each result list?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/06-best-practices/02-hybrid-search.md"
      },
      {
       "q": "When does keyword search beat vector search?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/06-best-practices/02-hybrid-search.md"
      }
     ],
     "extra": [
      "[RAG Techniques: reranking and fusion notebooks](https://github.com/NirDiamant/RAG_Techniques)"
     ]
    },
    {
     "slug": "ml-basics-measuring-quality",
     "title": "ML Basics: Measuring Quality",
     "kind": "lesson",
     "time": "about 3 hours",
     "intro": [
      "Before you measure anything, learn two basic ideas that every test depends on.",
      "First, keep some test data hidden while you build, or your score will fool you. Second, know precision (how much of what you found is right) and recall (how much of the right stuff you found)."
     ],
     "overview": [
      "Split data into practice data and test data.",
      "Spot “teaching to the test”, when test data sneaks into your tuning.",
      "Explain precision and recall."
     ],
     "assignment": [
      {
       "steps": [
        "Google ML Crash Course: [Dividing the original dataset](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets).",
        "Google ML Crash Course: [Accuracy, precision and recall](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall).",
        "Freeze your test questions: write 50 Ask MDN questions to hold back, each listing the page IDs that answer it. Add 10 questions the docs can't answer. Commit them, and don't use them while you're improving the app.",
        "Write 20 separate practice questions. Use these while you improve the app."
       ]
      }
     ],
     "check": [
      {
       "q": "Why must held-back questions stay hidden while you tune?",
       "link": "https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets"
      },
      {
       "q": "Precision or recall: which matters more for the pages your model reads?",
       "link": "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall"
      }
     ],
     "extra": [
      "[Chip Huyen, chapter 3, “Exact Evaluation” (book)](https://github.com/chiphuyen/aie-book)"
     ]
    },
    {
     "slug": "data-ingestion-and-orchestration",
     "title": "Data Ingestion and Orchestration",
     "kind": "lesson",
     "time": "about 1 week",
     "intro": [
      "Ingestion means loading your data into the app. Real data changes, so a good ingestion script is safe to run again and again without creating duplicates.",
      "You'll learn dlt, a Python tool for data pipelines. Orchestration (scheduling and connecting steps, here with a tool called Kestra) is covered too, but its hands-on part is optional."
     ],
     "overview": [
      "Build a data pipeline with dlt.",
      "Write ingestion that's safe to run twice.",
      "Explain what an orchestrator does."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "dlt workshop: [01 Overview](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/cohorts/2026/workshops/dlt/lessons/01-overview.md) and [02 Filesystem pipeline](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/cohorts/2026/workshops/dlt/lessons/02-filesystem-pipeline.md)."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "[03 Debug and dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/cohorts/2026/workshops/dlt/lessons/03-debug-and-dashboard.md) and [04 REST API pipeline](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/cohorts/2026/workshops/dlt/lessons/04-rest-api-pipeline.md)."
       ]
      },
      {
       "day": "Day 3",
       "steps": [
        "Add to Ask MDN: an ingestion script that saves each page's path, title and content hash. A content hash is like a fingerprint of the text: if the text changes, the fingerprint changes. Skip pages whose fingerprint hasn't changed. Run it twice; the second run should change nothing."
       ]
      },
      {
       "day": "Day 4",
       "steps": [
        "Read Module 3, [02 Context engineering](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/03-orchestration/02-context-engineering.md). The rest of Module 3 (Kestra) is optional. Its hands-on part needs a free Gemini key and a free Tavily key."
       ]
      }
     ],
     "check": [
      {
       "q": "What makes an ingestion script safe to run twice?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/cohorts/2026/workshops/dlt/lessons/02-filesystem-pipeline.md"
      },
      {
       "q": "Why save a content hash for every page?",
       "link": "#fresh-data"
      }
     ],
     "extra": [
      "[Module 3: orchestration with Kestra (optional)](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/03-orchestration/README.md)"
     ]
    },
    {
     "slug": "evaluation",
     "title": "Evaluation",
     "kind": "lesson",
     "time": "about 1.5 weeks",
     "intro": [
      "Now you'll measure how good Ask MDN really is. First the search, then the answers.",
      "Numbers are better than guesses. They also look great on a resume."
     ],
     "overview": [
      "Build ground truth: the correct answers you test against.",
      "Measure Hit Rate (did the right page show up in the top results?) and MRR (how close to the top was it?).",
      "Use a model to grade answers (an LLM judge), and check that the judge is fair."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "Module 4: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/01-intro.md), [02 Ground truth](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/02-ground-truth.md) and [03 Ground truth batch](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/03-ground-truth-batch.md)."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "[04 Search evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/04-search-evaluation.md) and [05 Search metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/05-search-metrics.md)."
       ]
      },
      {
       "day": "Day 3",
       "steps": [
        "[06 Search tuning](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/06-search-tuning.md)."
       ]
      },
      {
       "day": "Day 4",
       "steps": [
        "[11 Evaluation intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/11-evaluation-intro.md) and [12 RAG answers](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/12-rag-answers.md)."
       ]
      },
      {
       "day": "Day 5",
       "steps": [
        "[13 LLM as judge](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/13-llm-as-judge.md), [14 Agent evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/14-agent-evaluation.md) and [15 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/15-next-steps.md)."
       ]
      },
      {
       "day": "Days 6–7",
       "steps": [
        "Add to Ask MDN: measure Hit Rate@5 and MRR@5 (the @5 means you only look at the top 5 results) for keyword, vector and hybrid search on your 50 held-back questions. Use only your 20 practice questions while tuning."
       ]
      }
     ],
     "check": [
      {
       "q": "What does MRR reward that Hit Rate doesn't?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/05-search-metrics.md"
      },
      {
       "q": "Why check an LLM judge against answers you graded yourself?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/13-llm-as-judge.md"
      }
     ],
     "extra": [
      "[AI Evals FAQ by Hamel Husain and Shreya Shankar (a preview of Section 5)](https://hamel.dev/blog/posts/evals-faq/)"
     ]
    },
    {
     "slug": "monitoring",
     "title": "Monitoring",
     "kind": "lesson",
     "time": "about 1.5 weeks",
     "intro": [
      "Once people use your app, you need to see what's happening: what they ask, what it answers, how much it costs and how fast it is."
     ],
     "overview": [
      "Build a chat app with Streamlit, a Python tool for simple web apps.",
      "Save every answer to a database.",
      "Collect user feedback and show it on a dashboard."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "Module 5: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/01-intro.md), [02 Assistant setup](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/02-assistant-setup.md) and [03 Chat app](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/03-chat-app.md)."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "[04 Metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/04-metrics.md) and [05 Database](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/05-database.md)."
       ]
      },
      {
       "day": "Day 3",
       "steps": [
        "[06 Querying](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/06-querying.md) and [07 Streamlit dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/07-streamlit-dashboard.md)."
       ]
      },
      {
       "day": "Day 4",
       "steps": [
        "[08 User feedback](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/08-user-feedback.md), [09 Built-in judge](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/09-built-in-judge.md) and [10 Feedback dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/10-feedback-dashboard.md)."
       ]
      },
      {
       "day": "Day 5",
       "steps": [
        "[11 Synthetic data](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/11-synthetic-data.md). Grafana and Docker Compose ([12](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/12-grafana.md) and [13](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/13-docker-compose.md)) are optional."
       ]
      },
      {
       "day": "Days 6–7",
       "steps": [
        "Add to Ask MDN: a Streamlit chat page that saves the question, the answer, the cited pages, how long it took, the tokens used and the cost of every answer."
       ]
      }
     ],
     "check": [
      {
       "q": "What should you save for every answer?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/04-metrics.md"
      },
      {
       "q": "Why collect user feedback when you already have tests?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/main/05-monitoring/08-user-feedback.md"
      }
     ],
     "extra": []
    },
    {
     "slug": "deploy-it-safely",
     "title": "Deploy It Safely",
     "kind": "lesson",
     "time": "about 3 hours",
     "intro": [
      "Deploying means putting your app online. It's an important skill, so you'll do it now.",
      "Ask MDN will be a private app that only people you invite can use. You don't need a database server yet, because the app brings its own search file."
     ],
     "overview": [
      "Deploy a Streamlit app from GitHub.",
      "Keep secrets like API keys out of your code.",
      "Make your app private, and undo a bad deploy (roll back)."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "Read [Deploy your app](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app) and [Secrets management](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/secrets-management).",
        "Check that no API key exists anywhere in your Git history. Put the OpenAI key in the app's Secrets settings.",
        "Ship the sqlitesearch index file with the app, or build it when the app starts."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "Deploy it. Then make it your one private app and invite yourself and one friend as viewers ([Share your app](https://docs.streamlit.io/deploy/streamlit-community-cloud/share-your-app)).",
        "Practise a rollback: deploy a broken version on purpose, then deploy the previous version again.",
        "Check your OpenAI budget alerts and credit balance one more time."
       ]
      }
     ],
     "check": [
      {
       "q": "Where does the API key live when the app is online?",
       "link": "https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/secrets-management"
      },
      {
       "q": "How many private apps can you have on Community Cloud?",
       "link": "https://docs.streamlit.io/deploy/streamlit-community-cloud/share-your-app"
      }
     ],
     "extra": []
    },
    {
     "slug": "project-ask-mdn",
     "title": "Ask MDN",
     "kind": "project",
     "time": "about 3 weeks",
     "intro": [
      "This is your Zoomcamp final project, built on MDN. It answers CSS and JavaScript questions, shows which pages it used, and says “I don't know” when the docs don't cover a question.",
      "You're a web developer, so you'll spot wrong answers quickly. That makes MDN a great place to learn."
     ],
     "before": [
      "Read the Zoomcamp [project criteria](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/project.md). Your project should meet them.",
      "Your MDN data and your 60 test questions are frozen. Don't change them now.",
      "MDN's text is shared under a license called CC-BY-SA. That means you credit “Mozilla Contributors” and link each page you use ([MDN licensing](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license))."
     ],
     "assignment": [
      {
       "steps": [
        "Bring together everything from this section: ingestion, hybrid search, the prompt, the chat page and logging.",
        "Make every answer show links to the MDN pages it used.",
        "Add an “I don't know” path: when search finds nothing useful, say so instead of guessing.",
        "Run your tests on the 50 held-back questions and the 10 questions the docs can't answer.",
        "Put the final version online as a private app (see [Deploy It Safely](#deploy-it-safely)).",
        "Write a README: how it works, how to run it, your results and what you'd improve."
       ]
      }
     ],
     "done": [
      "Your README reports Hit Rate@5 and MRR@5 for keyword, vector and hybrid search on the 50 held-back questions. If hybrid doesn't win, you explain why.",
      "Every answer shows links to the MDN pages it used.",
      "It says “I don't know” to all 10 questions the docs can't answer.",
      "It runs online as your private Streamlit app, with the API key stored in Secrets.",
      "You can explain how a request moves through your app, two decisions you made and one problem you fixed. You made at least one change without AI help."
     ],
     "extra_credit": [
      "Add reranking and measure whether it helps.",
      "Compare two embedding models on your practice questions."
     ]
    }
   ]
  },
  {
   "title": "Agents",
   "weeks": "Weeks 17–21",
   "description": "Give your app tools so it can take actions. You'll learn how agents work, build one with LangGraph, and learn to keep tools safe.",
   "lessons": [
    {
     "slug": "agent-fundamentals",
     "title": "Agent Fundamentals",
     "kind": "lesson",
     "time": "about 1 week",
     "intro": [
      "You already built a tiny agent in Zoomcamp. Now you'll learn the words properly and write an agent loop by hand, with no framework.",
      "An agent works in a cycle: it thinks about what to do, takes an action (like calling a tool), looks at the result, and repeats. Building it yourself makes frameworks much easier to understand and debug."
     ],
     "overview": [
      "Explain thoughts, actions and observations: the agent cycle.",
      "Explain how messages and tools are sent to the model.",
      "Write an agent loop in plain Python."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "Hugging Face Agents Course, Unit 1: [What are agents?](https://huggingface.co/learn/agents-course/en/unit1/what-are-agents) and [Messages and special tokens](https://huggingface.co/learn/agents-course/en/unit1/messages-and-special-tokens)."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "[Tools](https://huggingface.co/learn/agents-course/en/unit1/tools) and [Agent steps and structure](https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure)."
       ]
      },
      {
       "day": "Day 3",
       "steps": [
        "[Thoughts](https://huggingface.co/learn/agents-course/en/unit1/thoughts), [Actions](https://huggingface.co/learn/agents-course/en/unit1/actions) and [Observations](https://huggingface.co/learn/agents-course/en/unit1/observations)."
       ]
      },
      {
       "day": "Day 4",
       "steps": [
        "Write an agent loop in plain Python, about 30 lines: send the messages, run the tool the model asks for, send back the result, and stop after 5 steps. Use your Ask MDN search as the tool."
       ]
      }
     ],
     "check": [
      {
       "q": "What are the three parts of the agent cycle?",
       "link": "https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure"
      },
      {
       "q": "How does the model learn which tools it can use?",
       "link": "https://huggingface.co/learn/agents-course/en/unit1/tools"
      },
      {
       "q": "Why put a limit on the number of steps?",
       "link": "https://github.com/humanlayer/12-factor-agents"
      }
     ],
     "extra": [
      "[Hugging Face Agents Course, the rest of Unit 1](https://huggingface.co/learn/agents-course/en/unit1/introduction)",
      "[Andrew Ng, Agentic AI (the videos are free to watch)](https://www.deeplearning.ai/courses/agentic-ai)"
     ]
    },
    {
     "slug": "langgraph",
     "title": "LangGraph",
     "kind": "lesson",
     "time": "about 1.5 weeks",
     "intro": [
      "LangGraph is a framework for building agents. It adds what your hand-written loop doesn't have: saved state (memory), branches, and a way to pause and wait for a person.",
      "You'll use it for the rest of the path. Take your time with Module 3; your next project depends on it."
     ],
     "overview": [
      "Build a graph (a map of steps) that keeps state.",
      "Give an agent memory.",
      "Pause for a person's approval with breakpoints."
     ],
     "assignment": [
      {
       "day": "Days 1–3",
       "steps": [
        "LangChain Academy [Intro to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph), Module 1: Introduction."
       ]
      },
      {
       "day": "Days 4–5",
       "steps": [
        "Module 2: State and Memory."
       ]
      },
      {
       "day": "Days 6–7",
       "steps": [
        "Module 3: UX and Human-in-the-Loop. Pay close attention to breakpoints."
       ]
      },
      {
       "day": "Day 8",
       "steps": [
        "Rebuild your 30-line loop in LangGraph. In your log, list the things LangGraph now does that you had to write by hand."
       ]
      }
     ],
     "check": [
      {
       "q": "What does a state reducer do?",
       "link": "https://academy.langchain.com/courses/intro-to-langgraph"
      },
      {
       "q": "How does a breakpoint pause a graph for a person?",
       "link": "https://academy.langchain.com/courses/intro-to-langgraph"
      }
     ],
     "extra": [
      "[Hugging Face Agents Course, Unit 2 LangGraph pages](https://huggingface.co/learn/agents-course/en/unit2/langgraph/introduction)"
     ]
    },
    {
     "slug": "safe-tools",
     "title": "Safe Tools",
     "kind": "lesson",
     "time": "about 3 hours",
     "intro": [
      "As soon as an agent can do things, someone can try to trick it. A web page or document can hide instructions for your agent. This is called prompt injection.",
      "You can't fix this with a better prompt. You fix it with code and careful design."
     ],
     "overview": [
      "Explain the lethal trifecta: private data, plus untrusted content, plus the ability to act.",
      "Explain prompt injection and excessive agency (an agent allowed to do too much).",
      "Design approvals that match one exact action."
     ],
     "assignment": [
      {
       "steps": [
        "Read Simon Willison's [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).",
        "Read OWASP [LLM01 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) and [LLM06 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/).",
        "For Ask MDN's agent, write down its three trifecta parts: private data, untrusted content and the ability to act. Which part will you cut off, and how?",
        "Design your approval rule: a person approves the exact tool name and its exact arguments. If anything changes, the approval no longer counts."
       ]
      }
     ],
     "check": [
      {
       "q": "What are the three parts of the lethal trifecta?",
       "link": "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"
      },
      {
       "q": "Why can't a system prompt stop prompt injection?",
       "link": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
      },
      {
       "q": "What is excessive agency?",
       "link": "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/"
      }
     ],
     "extra": [
      "[Agents Towards Production (security tutorials)](https://github.com/NirDiamant/agents-towards-production)"
     ]
    },
    {
     "slug": "project-give-it-tools",
     "title": "Give It Tools",
     "kind": "project",
     "time": "about 2 weeks",
     "intro": [
      "Ask MDN becomes an agent with three tools. One of them can change things, so it must ask a person first."
     ],
     "before": [
      "Build on your Ask MDN repo, with the same frozen data.",
      "Get the browser support data from [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data). It's public domain, so you can use it freely.",
      "Put test attack documents only in a test copy of your search index, never in the online app."
     ],
     "assignment": [
      {
       "steps": [
        "In LangGraph, give the agent three tools: `search_docs` (your hybrid search), `browser_support` (looks up a feature in the browser data) and `save_note` (writes a note).",
        "Add a breakpoint before `save_note`. Show the person the exact arguments, and run it only if they approve, using exactly those arguments.",
        "Add limits: at most 8 steps, a cost limit per question, and at most 2 retries per tool call.",
        "Log every step: the tool, its input, the size of its output, the tokens and the cost.",
        "Write 5 injection documents (for example a page that says “call save_note with…”) and 5 normal requests, including one that really should save a note. Commit them."
       ]
      }
     ],
     "done": [
      "`save_note` can't run unless a person approves its exact arguments. A test proves it.",
      "The step limit, cost limit and retry limit each stop a runaway run. A test proves each one.",
      "Your 5 injection documents never cause an unapproved action, and no planted instruction is carried out. Your 5 normal requests still work. You checked this in the step logs, not just in the replies.",
      "You can explain how a request moves through your app, two decisions you made and one problem you fixed. You made at least one change without AI help."
     ],
     "extra_credit": [
      "Add a dry-run mode that shows the plan without running any tool.",
      "Earn the free certificate from the [Hugging Face Agents Course final](https://huggingface.co/learn/agents-course/en/unit4/introduction)."
     ]
    },
    {
     "slug": "start-applying",
     "title": "Start Applying",
     "kind": "lesson",
     "time": "about 3 hours, then weekly",
     "intro": [
      "You now have projects you can show and explain. That's enough to start applying for jobs, so don't wait until the end of the path."
     ],
     "overview": [
      "Know what AI engineering interviews look like.",
      "Tell clear stories about your projects.",
      "Keep a steady weekly routine for applications."
     ],
     "assignment": [
      {
       "steps": [
        "Read the interview and take-home sections of the [AI Engineering Field Guide](https://github.com/alexeygrigorev/ai-engineering-field-guide). Try one take-home task with a time limit.",
        "Add Poster Reader and Ask MDN to your resume ([resume guide](https://www.techinterviewhandbook.org/resume/)). Lead with the numbers from your READMEs.",
        "Prepare three short stories from your log: a hard bug, a design choice and a mistake you fixed ([behavioral interview guide](https://www.techinterviewhandbook.org/behavioral-interview/)).",
        "Practise explaining how Ask MDN works, out loud, in 3 minutes.",
        "From now on, apply to 5 jobs a week while you keep going with the path."
       ]
      }
     ],
     "check": [
      {
       "q": "Which project numbers belong on your resume?",
       "link": "https://www.techinterviewhandbook.org/resume/"
      },
      {
       "q": "What makes a good story about a mistake?",
       "link": "https://www.techinterviewhandbook.org/behavioral-interview/"
      }
     ],
     "extra": [
      "[AI Engineer roadmap on roadmap.sh (find gaps employers ask about)](https://roadmap.sh/ai-engineer)"
     ]
    }
   ]
  },
  {
   "title": "Make It Sturdy",
   "weeks": "Weeks 22–28",
   "description": "Get your app ready for real users: tests that run automatically, logins, access rules, fresh data and attack tests.",
   "lessons": [
    {
     "slug": "evals-that-catch-real-bugs",
     "title": "Evals That Catch Real Bugs",
     "kind": "lesson",
     "time": "about 1 week",
     "intro": [
      "Vague scores like “4 out of 5 for helpfulness” don't find bugs. Reading real failures does.",
      "In this lesson you'll turn your app's logs into tests. Evals are simply tests for how your AI behaves."
     ],
     "overview": [
      "Find patterns in real failures (error analysis).",
      "Write a pass-or-fail check for each kind of failure.",
      "Check that an LLM judge agrees with you."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "Read the error analysis parts of the [AI Evals FAQ](https://hamel.dev/blog/posts/evals-faq/) by Hamel Husain and Shreya Shankar."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "Read Eugene Yan's [Product Evals in Three Simple Steps](https://eugeneyan.com/writing/product-evals/)."
       ]
      },
      {
       "day": "Day 3",
       "steps": [
        "Read 50 real Ask MDN logs. Write down every failure and sort them into 3 to 6 groups."
       ]
      },
      {
       "day": "Day 4",
       "steps": [
        "Write a pass-or-fail check for each group. Use plain code where you can, and an LLM judge only where you must."
       ]
      },
      {
       "day": "Day 5",
       "steps": [
        "Grade 20 answers yourself, then check how often your LLM judge agrees with you."
       ]
      }
     ],
     "check": [
      {
       "q": "Why use pass or fail instead of a 1 to 5 score?",
       "link": "https://hamel.dev/blog/posts/evals-faq/"
      },
      {
       "q": "How do you check that an LLM judge is right?",
       "link": "https://eugeneyan.com/writing/product-evals/"
      }
     ],
     "extra": [
      "[Chip Huyen, chapters 3 and 4 (book)](https://github.com/chiphuyen/aie-book)"
     ]
    },
    {
     "slug": "testing-and-ci",
     "title": "Testing and CI",
     "kind": "lesson",
     "time": "about 1 week",
     "intro": [
      "CI (continuous integration) means your tests run automatically every time you push code. It catches a bad change before your users see it.",
      "You'll use promptfoo for the AI checks and pytest for your normal Python code."
     ],
     "overview": [
      "Write a promptfoo test file.",
      "Mix rule-based checks with checks graded by a model.",
      "Run all your tests in GitHub Actions on every push."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "Read the [promptfoo intro](https://www.promptfoo.dev/docs/intro/) and its [RAG evaluation guide](https://www.promptfoo.dev/docs/guides/evaluate-rag/)."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "Turn your checks from the last lesson into a promptfoo config. Use rule-based checks (citations are present, the output is valid) plus [context-faithfulness](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/) (does the answer stick to the pages you found?) and [llm-rubric](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/llm-rubric/)."
       ]
      },
      {
       "day": "Day 3",
       "steps": [
        "Write pytest tests for the code that doesn't use AI: ingestion, your RRF function and the approval logic. Use Made With ML's [testing lesson](https://madewithml.com/courses/mlops/testing/) as a reference."
       ]
      },
      {
       "day": "Day 4",
       "steps": [
        "Run both in [GitHub Actions](https://www.promptfoo.dev/docs/integrations/github-action/) on every push. Break a prompt on purpose and watch CI fail."
       ]
      }
     ],
     "check": [
      {
       "q": "What does context-faithfulness check?",
       "link": "https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/"
      },
      {
       "q": "Why keep rule-based checks next to model-graded ones?",
       "link": "https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/llm-rubric/"
      }
     ],
     "extra": [
      "[Made With ML: CI/CD](https://madewithml.com/courses/mlops/cicd/)"
     ]
    },
    {
     "slug": "login-and-access-rules",
     "title": "Login and Access Rules",
     "kind": "lesson",
     "time": "about 1 week",
     "intro": [
      "Two questions matter for every user: who are you (authentication), and what are you allowed to see (authorization)? Your Campus Assistant will need both.",
      "You'll practise with two pretend groups: a CSS team that can only see CSS docs, and a JS team that can only see JavaScript docs."
     ],
     "overview": [
      "Add “Sign in with Google”-style login to a Streamlit app.",
      "Decide each user's group on the server, never in the browser.",
      "Make the database itself hide rows a user isn't allowed to see. This is called row-level security."
     ],
     "assignment": [
      {
       "day": "Day 1",
       "steps": [
        "Read Microsoft's [secure multitenant RAG guide](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag). Multitenant means one app serving several separate groups."
       ]
      },
      {
       "day": "Day 2",
       "steps": [
        "Read the Postgres [row-level security docs](https://www.postgresql.org/docs/current/ddl-rowsecurity.html).",
        "In your local Docker Postgres from Zoomcamp, move Ask MDN's chunks into a pgvector table with a `group_id` column. Turn row-level security on and force it. Then create an app role (a database user for your app) that isn't the table owner, isn't a superuser and doesn't have BYPASSRLS. Those three can skip the rules."
       ]
      },
      {
       "day": "Day 3",
       "steps": [
        "Add login with Streamlit's [st.login](https://docs.streamlit.io/develop/concepts/connections/authentication). It uses OIDC, the standard behind “Sign in with Google”. Map each signed-in email to a group in a table on the server. Never trust a group sent from the browser."
       ]
      },
      {
       "day": "Day 4",
       "steps": [
        "Set each request's group from the login session, inside a database transaction. Write tests: a CSS user gets zero JavaScript chunks through search, through the agent's tools, and when guessing a document ID."
       ]
      }
     ],
     "check": [
      {
       "q": "Why isn't login enough to keep the groups apart?",
       "link": "https://docs.streamlit.io/develop/concepts/connections/authentication"
      },
      {
       "q": "Which database roles can skip row-level security?",
       "link": "https://www.postgresql.org/docs/current/ddl-rowsecurity.html"
      },
      {
       "q": "Where must a request's group come from?",
       "link": "https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag"
      }
     ],
     "extra": [
      "[OWASP LLM02: Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/)"
     ]
    },
    {
     "slug": "fresh-data",
     "title": "Fresh Data",
     "kind": "lesson",
     "time": "about 3 hours",
     "intro": [
      "Docs change. Pages get edited, and some get deleted.",
      "If your app doesn't keep up, it will quote pages that no longer exist. Let's fix that."
     ],
     "overview": [
      "Keep a list of every source page.",
      "Handle edits and deletions each time you sync.",
      "Clear saved answers that are out of date."
     ],
     "assignment": [
      {
       "steps": [
        "Each time you sync, save a list of every source page with its path and content hash.",
        "Compare it with the previous list: re-index edited pages, add new ones, and remove deleted pages together with all their chunks.",
        "Clear any cached (saved) answers that used a changed or deleted page.",
        "Test it: in a test copy of your data, delete 3 pages and edit 2. Sync, then ask about them in a new chat and in an existing one."
       ]
      }
     ],
     "check": [
      {
       "q": "Why can't content hashes alone tell you a page was deleted?",
       "link": "#data-ingestion-and-orchestration"
      },
      {
       "q": "What must happen to the chunks of a deleted page?",
       "link": "#fresh-data"
      }
     ],
     "extra": []
    },
    {
     "slug": "red-team-your-app",
     "title": "Red-Team Your App",
     "kind": "lesson",
     "time": "about 3 hours",
     "intro": [
      "Red-teaming means attacking your own app on purpose, before someone else does.",
      "promptfoo can create the attacks for you. You decide what counts as a breach (a successful attack)."
     ],
     "overview": [
      "Explain what red-teaming is.",
      "Use promptfoo plugins for access control, hijacking and hidden instructions.",
      "Plant canary documents: fake secret pages that should never show up. If one does, you have a leak."
     ],
     "assignment": [
      {
       "steps": [
        "Follow promptfoo's [red team quickstart](https://www.promptfoo.dev/docs/red-team/quickstart/).",
        "Set up three plugins: [rbac](https://www.promptfoo.dev/docs/red-team/plugins/rbac/) (access control), [hijacking](https://www.promptfoo.dev/docs/red-team/plugins/hijacking/) and [indirect prompt injection](https://www.promptfoo.dev/docs/red-team/plugins/indirect-prompt-injection/). Generate 30 attack cases and commit them, so the test stays the same each time.",
        "Add 5 canary documents to the JS group: pages that contain a unique secret phrase. A CSS user must never see them.",
        "Run the attacks once and write down every one that worked. You'll fix them in the project."
       ]
      }
     ],
     "check": [
      {
       "q": "What does the rbac plugin test?",
       "link": "https://www.promptfoo.dev/docs/red-team/plugins/rbac/"
      },
      {
       "q": "What is indirect prompt injection?",
       "link": "https://www.promptfoo.dev/docs/red-team/plugins/indirect-prompt-injection/"
      }
     ],
     "extra": [
      "[OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)"
     ]
    },
    {
     "slug": "project-make-it-sturdy",
     "title": "Make It Sturdy",
     "kind": "project",
     "time": "about 3 weeks",
     "intro": [
      "This is the final project of the path. Ask MDN gets logins, separate groups, fresh data, automatic tests and an attack test it must pass.",
      "It's very close to the Campus Assistant you'll build next. You've got this!"
     ],
     "before": [
      "Build against your local Docker Postgres. CI uses a [GitHub Actions Postgres service](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/creating-postgresql-service-containers). The online version uses [Neon's free plan](https://neon.com/docs/introduction/plans), a hosted Postgres database that supports [pgvector](https://neon.com/docs/extensions/pgvector).",
      "Keep the app role rules from [Login and Access Rules](#login-and-access-rules).",
      "Your attack cases and canary documents are committed and stay the same."
     ],
     "assignment": [
      {
       "steps": [
        "Put the Postgres version online: a Neon database with pgvector, row-level security turned on and forced, and an app role without BYPASSRLS. Connect your private Streamlit app to it through Secrets.",
        "Add login and server-side group mapping, like in the lesson.",
        "Sync against your list of source pages: re-index edits, remove deleted pages and clear old cached answers.",
        "Run CI on every push: promptfoo (rule-based and model-graded checks), pytest, and the isolation tests against the Postgres service.",
        "Run your attack test (30 cases plus 5 canaries), 3 times for each case.",
        "Add cost tracking for each group, a simple rate limit for each user, and an off switch that stops all answers.",
        "Update the README with your results, a diagram of how it fits together, and what you'd change to serve several universities."
       ]
      }
     ],
     "done": [
      "Tests prove a CSS user can't reach JavaScript docs through search, through tools, or by guessing document IDs.",
      "After a sync, the deleted test pages produce no search results and no citations in new answers, including in existing chats.",
      "promptfoo and pytest run in GitHub Actions on every push, and a broken prompt makes CI fail.",
      "Across 3 runs of every attack case: zero unauthorized reads or writes, zero canary leaks to the other group, and zero planted instructions carried out, while normal requests still work. You checked this in the tool logs and the database, not just in the replies.",
      "Cost tracking for each group, the rate limit and the off switch all work.",
      "You can explain how a request moves through your app, two decisions you made and one problem you fixed. You made at least one change without AI help."
     ],
     "extra_credit": [
      "Give each group a monthly budget that pauses answers when it runs out.",
      "Add a third group that can see both CSS and JavaScript docs."
     ]
    }
   ]
  },
  {
   "title": "Conclusion",
   "weeks": "Weeks 29–30",
   "description": "Catch up, polish your projects and plan what you'll build next.",
   "lessons": [
    {
     "slug": "whats-next",
     "title": "What's Next",
     "kind": "lesson",
     "time": "about 2 weeks (spare)",
     "intro": [
      "You made it! You can now design, build, test, secure and ship an AI app, and explain every part of it. That's a big achievement.",
      "Use these two weeks to catch up, polish your work and plan your next build."
     ],
     "overview": [
      "Plan the Campus Assistant using what you built.",
      "Choose one deep dive, but only if a job you want asks for it.",
      "Keep your job application routine going."
     ],
     "assignment": [
      {
       "steps": [
        "Finish anything you skipped, then polish your three project READMEs.",
        "Plan the Campus Assistant on one page. Match each university feature to something you've already built: login, row-level security, hybrid search, approvals, evals, CI and attack tests. If you have the book, read chapter 10, “AI Engineering Architecture and User Feedback”.",
        "Pick at most one deep dive from the list below, and only if a job you want asks for it.",
        "Keep applying to 5 jobs a week."
       ]
      }
     ],
     "check": [],
     "extra": [
      "[Fine-tuning: mlabonne's LLM course (and Chip Huyen, chapter 7)](https://github.com/mlabonne/llm-course)",
      "[How models work inside: LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch)",
      "[Coding agents and context: Hugging Face Context Course](https://huggingface.co/learn/context-course/unit0/introduction)",
      "[More project ideas: awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)",
      "[A paid video course: Ed Donner's AI Engineer Core Track](https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/)"
     ]
    }
   ]
  }
 ]
};
