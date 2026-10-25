// AI Engineer Path: all course content lives in this file.
// Edit any text, save, and refresh the page. No build step is needed.
// Inside text you can use: [label](https://link), [label](#lesson-slug), **bold**, `code`.
// Lessons appear in the order below. Every lesson needs a unique "slug"; don't rename slugs
// after you've started, because saved progress is stored by slug.
// "repo", "site" and "community" feed the GitHub and Community buttons. Change them if you fork this.
window.COURSE = {
 "title": "AI Engineer Path",
 "duration": "about 34 weeks",
 "tagline": "A step-by-step path from your very first AI model call to a tested, secure AI app you can put online.",
 "repo": "https://github.com/Faizan2001/ai-engineer-path",
 "site": "https://faizan2001.github.io/ai-engineer-path/",
 "community": "https://datatalks.club/slack.html",
 "intro": [
  "This path helps a software developer become an AI engineer: someone who builds useful apps on top of AI models that already exist. You'll learn RAG, agents, testing and deployment by building four projects. The last three grow into one real app, and when you finish you'll be ready to build your own Campus Assistant.",
  "It works like The Odin Project. Each lesson points you to the best free material for one topic, then asks you to build something with it. You learn by building, breaking things and fixing them.",
  "Every lesson tells you what it unlocks and which skill lasts. Some start with a 2-minute widget: guess first, then play. Wrong guesses are welcome here; they make the right answer stick."
 ],
 "how": [
  "Study about 9 hours a week, in sessions of about 90 minutes: roughly 30 minutes learning, 45 building and 15 writing in your log. Set a weekly target on this page. It counts sessions, never a daily streak.",
  "The whole path takes about 34 weeks, including 2 spare weeks for exams, illness, Ramadan, Eid and family events. All times are estimates. Going slower is fine; skipping the projects isn't.",
  "Long lessons are split into **Day** steps. Tick each Day as you finish it, and stop at the end of a Day. Missed a few days? Reread your last log entry, then do the smallest next step. Low on energy? A 15-minute session still counts.",
  "Every lesson ends with a short **Memory check**: answer two questions from memory, then check. Getting one wrong is useful; it shows you what to review. Struggling feels slow, but that's how learning sticks.",
  "Your coding assistant is welcome, but every project raises the bar on work you do by hand: one change, then one function, then one test, then one bug fixed without AI. [Mindset and Asking for Help](#mindset-and-asking-for-help) explains why.",
  "Cost: about $15–20 of OpenAI credit for the whole path (an estimate); everything else is free. Paying from Bangladesh needs a card for international payments; [Setting Up Your Tools](#setting-up-your-tools) has a free fallback. There's no certificate. Your public project repos are your proof.",
  "On mobile data, or expecting a power cut? Open the next lesson's links on Wi-Fi first. Videos are always optional and show their length."
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
     "time": "about 45 min",
     "hook": "34 weeks sounds long. It's really about 200 short sessions, and you only ever owe the next one.",
     "intro": [
      "Welcome! This path takes you from your first call to an AI model all the way to a tested, secure AI app that you can put online.",
      "Each lesson points you to free material, then gives you something to build. Please don't skip the building. That's where the real learning happens."
     ],
     "unlocks": "restart after any break with one small step.",
     "edge": "running your own learning loop. You can reuse it for every new tool you meet.",
     "overview": [
      "How the path is organized.",
      "How to split your study time.",
      "How to keep a learning log, and how to come back after a break."
     ],
     "assignment": [
      {
       "steps": [
        "Look over the [course page](#home). There are 6 sections and 4 projects. The whole path takes about 34 weeks.",
        "Pick your study days and a fixed time, and put them in your calendar. Aim for about 9 hours a week: 6 sessions of 90 minutes, or fewer, longer ones. Set the same number as your weekly target on the [course page](#home). It counts sessions per week, never a daily streak.",
        "Create a private GitHub repository called `ai-engineer-path` and add a file called `log.md`. Each project will get its own public repo later.",
        "Split each session: about 30 minutes learning, 45 minutes building and 15 minutes writing in your log. Write what you did, what broke and how you fixed it.",
        "Add three rules to the top of your log. Coming back after a break: “Reread my last entry, then do the smallest next step.” Low-energy day: “15 minutes counts: reread my log, answer one Memory check question, write my next step.” Stuck: “Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error.”",
        "Mark exams, Ramadan, Eid and family events in your calendar now. In those weeks, do shorter sessions on the next build step. The path has 2 spare weeks for exactly this."
       ]
      }
     ],
     "recall": [
      {
       "q": "How is a 90-minute session split?",
       "link": "#how-this-path-works"
      },
      {
       "q": "What do you do first when you come back after missing a few days?",
       "link": "#how-this-path-works"
      }
     ],
     "extra": [
      "[LLM Zoomcamp curriculum (the main course you'll follow from week 5)](https://datatalksclub.github.io/docs/courses/llm-zoomcamp/curriculum/)",
      "[How to teach yourself hard things](https://jvns.ca/blog/2018/09/01/learning-skills-you-can-practice/) by Julia Evans: practical habits for learning hard things on your own."
     ]
    },
    {
     "slug": "what-ai-engineers-do",
     "title": "What AI Engineers Do",
     "kind": "lesson",
     "time": "about 1.5 hours",
     "hook": "Most of this job is one you already do, plus a very confident new colleague.",
     "intro": [
      "An AI engineer builds apps on top of AI models that already exist. You won't train models from scratch. That's usually a job for research teams.",
      "Good news: most of the work is normal software engineering. You load data, call a model, check its answer, test it and watch how it behaves. Your web development skills will help a lot.",
      "Here's why this path focuses on judgment, not typing. AI agents are improving fast: the length of task they can finish on their own has been doubling about every 7 months ([METR](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)). A [Stanford study](https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine/) of US payroll data found no economy-wide job loss, but young workers in the jobs most exposed to AI are 19% below where they'd otherwise be, while experienced workers show no such gap. So the plan is to learn the experienced part of the job early: framing problems, checking AI output, testing, securing and explaining."
     ],
     "unlocks": "read an AI job post and spot what you already do.",
     "edge": "matching your skills to what teams actually need.",
     "overview": [
      "What AI engineers do day to day.",
      "How AI engineering is different from training models.",
      "What you'll be able to build at the end of this path."
     ],
     "assignment": [
      {
       "steps": [
        "Read the README of Alexey Grigorev's [AI Engineering Field Guide](https://github.com/alexeygrigorev/ai-engineering-field-guide). Write down the 5 tasks that show up most in job posts.",
        "In your log, mark which of those tasks you've already done as a web developer and which are new to you.",
        "Write down your goal for after this path: a **Campus Assistant** for your university Events platform, an assistant that answers students' questions and keeps each university's data separate. Every project here teaches part of it.",
        "Take 10 minutes and write in your log: why does this matter to you, and to the people you care about? Be specific. You'll reread it when motivation dips."
       ]
      }
     ],
     "recall": [
      {
       "q": "Which parts of an AI engineer's job are normal software engineering?",
       "link": "https://github.com/alexeygrigorev/ai-engineering-field-guide"
      },
      {
       "q": "How long is one study session, and how is it split?",
       "link": "#how-this-path-works"
      }
     ],
     "extra": [
      "[Chip Huyen, AI Engineering, chapter 1, “The AI Engineering Stack” (book)](https://github.com/chiphuyen/aie-book)",
      "[Software Is Changing (Again)](https://www.youtube.com/watch?v=LCEmiRjPEtQ) by Andrej Karpathy (Y Combinator, 40 min): where software is heading, from one of the field's best teachers.",
      "[The Rise of the AI Engineer](https://www.latent.space/p/ai-engineer) by swyx, Latent Space: the 2023 essay that named this job, still a good map of it."
     ]
    },
    {
     "slug": "mindset-and-asking-for-help",
     "title": "Mindset and Asking for Help",
     "kind": "lesson",
     "time": "about 1 hour",
     "hook": "Everyone gets stuck. The fastest learners get stuck well.",
     "intro": [
      "You will get stuck. Everyone does, and it's a normal part of learning.",
      "This lesson gives you two habits: ask clear questions, and understand every line of code you keep, even code an AI wrote for you."
     ],
     "unlocks": "get fast answers to good questions, and defend every line you commit.",
     "edge": "owning code you didn't type. As AI writes more of the code, checking it well becomes a more visible skill.",
     "overview": [
      "What to do when you're stuck.",
      "How to ask a question people can answer.",
      "The explain-your-code rule."
     ],
     "assignment": [
      {
       "steps": [
        "Read The Odin Project's [Motivation and Mindset](https://www.theodinproject.com/lessons/foundations-motivation-and-mindset) lesson, especially the part about what to do when you're stuck.",
        "Reread their [Asking for Help](https://www.theodinproject.com/lessons/foundations-asking-for-help) lesson. The same tips apply here.",
        "Join the [DataTalks.Club Slack](https://datatalks.club/slack.html) and find the `#course-llm-zoomcamp` channel. Always search the [Zoomcamp FAQ](https://datatalks.club/faq/llm-zoomcamp.html) before you post. Join the [Hugging Face Discord](https://hf.co/join/discord) too; you'll ask agent questions there in Section 4.",
        "Copy this rule to the top of your log: “Before I commit code, I can explain what it does and why.” Here's why: in a [2026 Anthropic study](https://www.anthropic.com/research/AI-assistance-coding-skills), developers who used AI while learning a new Python library scored 50% on a quiz afterwards, against 67% for those who coded by hand. People who handed AI the whole task learned least; people who used it to ask questions and get explanations did much better. Interviewers check this too.",
        "Post a short hello in the Zoomcamp Slack with your weekly goal, and ask if anyone wants a study buddy. One person to check in with each week makes it much easier to keep going."
       ]
      }
     ],
     "recall": [
      {
       "q": "What should a good question for help include?",
       "link": "https://www.theodinproject.com/lessons/foundations-asking-for-help"
      },
      {
       "q": "What will you build after finishing this path?",
       "link": "#what-ai-engineers-do"
      }
     ],
     "extra": [
      "[How to ask good questions](https://jvns.ca/blog/good-questions/) by Julia Evans: short, friendly and very practical.",
      "[The 70% problem: hard truths about AI-assisted coding](https://addyo.substack.com/p/the-70-problem-hard-truths-about) by Addy Osmani: why AI gets you most of the way, and what the rest needs from you."
     ]
    }
   ],
   "shift": {
    "before": "AI job posts read like buzzwords, and you can't tell what's new to you.",
    "after": "A log that ranks the 5 most-requested tasks as “done before” or “new”, plus your Campus Assistant goal."
   },
   "opener": "A club secretary asks whether your Events platform could just answer students' questions. You say yes, open a browser and drown in forty buzzwords. This week shrinks them to one job description, one study routine and one promise: after any break, you only owe the next small step."
  },
  {
   "title": "Foundations",
   "weeks": "Weeks 1–4",
   "description": "Set up your tools and learn how language models work. You'll finish by building your first real AI feature: a poster reader.",
   "lessons": [
    {
     "slug": "setting-up-your-tools",
     "title": "Setting Up Your Tools",
     "kind": "lesson",
     "time": "about 3 hours",
     "hook": "Your API key is a password that spends money. Make leaking it hard, and cheap if it happens.",
     "intro": [
      "Let's get your computer ready. You'll use this setup for the whole path, so take your time.",
      "You'll also protect your API key. An API key is like a password that lets your code use a paid AI service, so it must stay secret."
     ],
     "story": {
      "year": "2023",
      "what": "Samsung engineers pasted internal source code into ChatGPT. The company then restricted AI chat tools on work devices.",
      "lesson": "write rules for your assistant on day one: no keys, secrets or private code in prompts.",
      "url": "https://www.forbes.com.au/news/innovation/samsung-bans-chatgpt-among-employees-after-sensitive-code-leak/",
      "title": "secret code pasted into a chatbot"
     },
     "unlocks": "run paid AI calls with capped cost and no leaked keys.",
     "edge": "secret and cost hygiene, a habit reviewers notice quickly.",
     "overview": [
      "Create Python projects with uv, a fast tool for Python packages.",
      "Keep your API key out of your code.",
      "Limit how much a leaked key could cost you.",
      "Set some rules for your AI coding assistant."
     ],
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Follow the Zoomcamp [environment lesson](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/02-environment.md): install uv, create a project, put your OpenAI key in a `.env` file and run the test call.",
        "Make a separate OpenAI project and key just for this path. Keep only a small amount of credit on the account, and turn auto-recharge off if your account uses prepaid credit. Set budget alerts too, and check whether they stop spending or only send a warning.",
        "**Paying from Bangladesh:** OpenAI needs a card that works for international online payments (many banks offer a dual-currency card; ask yours). Add credit $5 at a time. **No such card yet?** Don't stop. Use Google's Gemini free tier through its [OpenAI-compatible endpoint](https://ai.google.dev/gemini-api/docs/openai): change the `base_url`, key and model name. Send only public data, because Google may use free-tier content to improve its products ([pricing page](https://ai.google.dev/gemini-api/docs/pricing)). Expect small differences: its examples use Chat Completions, there's no documented `refusal` field (fake one in your tests), and you'll set promptfoo's grading model yourself. Switch to OpenAI when you can.",
        "Add `.env` to your `.gitignore` file before your first commit, so the key never reaches GitHub."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Install Docker ([get started](https://docs.docker.com/get-started/)) and run `docker run hello-world`. Docker runs programs in their own little boxes called containers. Low on memory or disk space? Use a free [GitHub Codespace](https://docs.github.com/en/codespaces/getting-started/quickstart) instead; it runs in the browser and has Docker built in.",
        "**No AI for this one:** write a script that reads a CSV file, counts the rows for each value in one column and prints the top 3. Stuck for more than 20 minutes? Review the [Python tutorial](https://docs.python.org/3/tutorial/).",
        "Add an `AGENTS.md` file ([the format](https://agents.md/)) to your repo. It's a note for your AI coding assistant. Tell it to explain, review and ask you questions, not to write your lesson solutions."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why must your API key never be in your code or Git history?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/02-environment.md"
      },
      {
       "q": "What are your two log rules for being stuck and for coming back after a break?",
       "link": "#how-this-path-works"
      }
     ],
     "extra": [
      "[uv documentation](https://docs.astral.sh/uv/getting-started/installation/)",
      "[AI Dev Tools Zoomcamp (how to use AI coding tools well)](https://github.com/DataTalksClub/ai-dev-tools-zoomcamp)",
      "[Claude Code: best practices for agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices) by Anthropic: habits for working with any coding agent, like planning before code."
     ]
    },
    {
     "slug": "how-llms-work",
     "title": "How LLMs Work",
     "kind": "lesson",
     "time": "about 2 hours",
     "hook": "ChatGPT is autocomplete that read a library. That explains its genius, and why it can invent a court case with a straight face.",
     "intro": [
      "An LLM (large language model) is the kind of AI behind ChatGPT. You don't need the math to build with one, but you do need a simple picture of how it works.",
      "Here's the short version: text is split into small pieces called tokens. The model predicts the next token, again and again, until the answer is finished."
     ],
     "picture": "Your phone's suggestion bar, after it has read a library. It never plans the sentence: it adds one likely next piece and asks again, hundreds of times. Before each pick, every word glances back at the others and asks which ones matter to it, so in “the bank of the river”, bank listens to river, not to money.",
     "story": {
      "year": "2023",
      "what": "Two New York lawyers filed a brief citing court cases that ChatGPT had made up. The judge fined them and their firm $5,000.",
      "lesson": "treat fluent output as a guess, and check every citation against a real source.",
      "url": "https://news.bloomberglaw.com/bloomberg-government-news/chatgpt-phony-legal-filing-case-gets-lawyers-a-5-000-fine",
      "title": "lawyers fined for ChatGPT's made-up cases"
     },
     "unlocks": "predict when a model will guess, vary its answer or make something up.",
     "edge": "knowing how models fail, so you can explain a confident wrong answer to a user or a boss.",
     "overview": [
      "What tokens are, and how the model picks the next one.",
      "Why the same question can get different answers.",
      "Why models sometimes make things up."
     ],
     "predict": "Ask a chat model the same question twice. Will you get the same answer? Write yes or no, and one reason.",
     "widget": "next-token",
     "bridge": {
      "text": "The model never looks anything up. It splits your text into tokens, scores every possible next token, picks one with a little randomness, adds it and repeats. It aims for “sounds likely”, not “is true”. If chapter 5 gets heavy, stop at a natural pause and finish it the next day.",
      "terms": [
       [
        "token",
        "a small chunk of text the model reads and writes"
       ],
       [
        "temperature",
        "how much randomness goes into each pick"
       ]
      ]
     },
     "assignment": [
      {
       "steps": [
        "Watch 3Blue1Brown's [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) (7 min). Watch for the idea of predicting one token at a time.",
        "Watch [Transformers, the tech behind LLMs](https://www.youtube.com/watch?v=wjZofJX0v4M) (27 min). Pause often and write one sentence for each new idea. On mobile data, watch at 480p or download it on Wi-Fi first.",
        "In your log, before you rewatch anything, explain in 5 sentences how a chat model answers a question. Only use words you could explain to a friend."
       ]
      }
     ],
     "recall": [
      {
       "q": "What is a token, and what does the model predict?",
       "link": "https://www.youtube.com/watch?v=LPZh9BOjkQs"
      },
      {
       "q": "Why should you never put an API key in Git?",
       "link": "#setting-up-your-tools"
      }
     ],
     "extra": [
      "[Karpathy, Deep Dive into LLMs like ChatGPT (3 h 31 min; watch it in 30-minute pieces alongside the next lessons)](https://www.youtube.com/watch?v=7xTGNNLPyMI)",
      "[Chip Huyen, AI Engineering, chapter 2, “Sampling” and “Structured Outputs” (book)](https://github.com/chiphuyen/aie-book)",
      "[Transformer Explainer](https://poloclub.github.io/transformer-explainer/) by Georgia Tech Polo Club: play with a real small model in your browser and watch each step.",
      "[Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/) by OpenAI: why models make things up, from the people who build them."
     ]
    },
    {
     "slug": "the-ai-staircase",
     "title": "The AI Staircase",
     "kind": "lesson",
     "time": "about 1.5 hours",
     "hook": "The most senior move in AI engineering is often an if-statement.",
     "intro": [
      "Think of AI tools as a staircase. Each step up gives you more power, but also more cost and more ways for things to go wrong.",
      "The steps are: plain code, one model call, structured output, tool calling, RAG, agents, fine-tuning and training your own model. Good engineers stop at the lowest step that solves the problem."
     ],
     "unlocks": "say “this needs plain code, not AI” and back it up.",
     "edge": "problem framing: the simplest thing that works. Anthropic's own advice is to start with the simplest solution.",
     "overview": [
      "Tell a workflow (fixed steps you write) from an agent (the model decides the steps).",
      "Know when not to use AI at all.",
      "Pick the right step for a feature."
     ],
     "assignment": [
      {
       "steps": [
        "Read Anthropic's [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents). Notice how a workflow is different from an agent.",
        "Watch Barry Zhang's talk [How We Build Effective Agents](https://www.youtube.com/watch?v=D7_ipDqhtwk) (15 min, Anthropic). Write down his advice on when not to build an agent.",
        "Exercise: list 5 features of your Campus Assistant idea or your Events platform. For each one, write the lowest step that solves it and why. At least one answer should be “plain code”. Keep this list: it becomes your Campus Assistant plan in [What's Next](#whats-next)."
       ]
      }
     ],
     "recall": [
      {
       "q": "What's the difference between a workflow and an agent?",
       "link": "https://www.anthropic.com/engineering/building-effective-agents"
      },
      {
       "q": "Why can the same question get different answers from a model?",
       "link": "#how-llms-work"
      }
     ],
     "extra": [
      "[Chip Huyen's free Agents chapter](https://huyenchip.com/2025/01/07/agents.html)",
      "[12-factor agents (a checklist for agents you put into production)](https://github.com/humanlayer/12-factor-agents)",
      "[A practical guide to building agents (PDF)](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) by OpenAI: when an agent is worth it, and when it isn't."
     ]
    },
    {
     "slug": "structured-output-and-errors",
     "title": "Structured Output and Errors",
     "kind": "lesson",
     "time": "about 6 hours",
     "hook": "Essays are lovely to read and miserable to parse. Today the model fills in forms.",
     "intro": [
      "Real apps need the model to fill in a form, not write an essay. That's called structured output.",
      "Apps also need to handle problems calmly: slow responses, rate limits (too many requests at once) and refusals (when the model won't answer). You'll also learn to measure what each call costs, and to build a tiny screen with Streamlit."
     ],
     "unlocks": "turn messy text or images into checked data that fails safely.",
     "edge": "designing for failure: treating model output like user input.",
     "overview": [
      "Get typed, checked output with Pydantic, a Python library for data models.",
      "Send an image to a model and work out what the call cost.",
      "Retry the right errors and handle refusals.",
      "Build a small form with Streamlit and test your code with pytest."
     ],
     "predict": "Your code gets valid JSON back from the model. Is it safe to save? Write yes or no, and one reason.",
     "widget": "form-check",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Read OpenAI's [Structured Outputs guide](https://developers.openai.com/api/docs/guides/structured-outputs). Focus on Pydantic models, strict schemas and the `refusal` field.",
        "Write a script that turns a sentence like “Hackathon, Friday 3pm, Room 402” into an `Event` Pydantic model. Before each run, write down what you expect back, then compare. It keeps you in charge while the tools are new."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Read the [images and vision guide](https://developers.openai.com/api/docs/guides/images-vision). Send one poster image and get your `Event` back.",
        "Work out the cost of that call: read the token counts in the response's `usage` field and multiply by the prices on the [pricing page](https://developers.openai.com/api/docs/pricing). Print it after every call."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Read the [error codes guide](https://developers.openai.com/api/docs/guides/error-codes). Add a timeout and at most 2 retries, with a short wait between them, for rate-limit and server errors. Don't retry bad requests: they will fail every time.",
        "Handle refusals: log them and return “needs a human” instead of crashing."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Follow pytest's [getting started guide](https://docs.pytest.org/en/stable/getting-started.html), then write 3 tests for your code: one with good input, one with a missing field and one with a refusal.",
        "Follow Streamlit's [get started](https://docs.streamlit.io/get-started) page, then show your `Event` in a small [form](https://docs.streamlit.io/develop/api-reference/execution-flow/st.form) with a Save button."
       ]
      }
     ],
     "recall": [
      {
       "q": "Which API errors should you retry, and which should you not?",
       "link": "https://developers.openai.com/api/docs/guides/error-codes"
      },
      {
       "q": "When is a workflow a better choice than an agent?",
       "link": "#the-ai-staircase"
      }
     ],
     "extra": [
      "[OpenAI Cookbook (worked examples)](https://cookbook.openai.com/)",
      "[Pydantic documentation](https://docs.pydantic.dev/latest/)",
      "[Pydantic is all you need](https://www.youtube.com/watch?v=yj-wSRJwrrc) by Jason Liu (AI Engineer, 18 min): why a schema is your contract with the model.",
      "[Video scraping: extracting JSON from a 35-second screen capture](https://simonwillison.net/2024/Oct/17/video-scraping/) by Simon Willison: structured output on real data, for a tiny fraction of a cent."
     ]
    },
    {
     "slug": "project-poster-reader",
     "title": "Poster Reader",
     "kind": "project",
     "time": "about 2 weeks",
     "hook": "A blurry poster goes in; a clean event form comes out. The smartest part of the feature is the Approve button.",
     "intro": [
      "Time for your first real AI feature! You'll take a photo of an event poster and turn it into a filled event form.",
      "A person always checks and approves the form before anything is saved. This is the kind of feature you might add to your Events platform one day."
     ],
     "unlocks": "ship a vision feature with an honest score, a cost per use and an approval step.",
     "edge": "measuring on data you never tuned on.",
     "before": [
      "Create a new **public** GitHub repo called `poster-reader`. Commit early and often, with messages that say what changed.",
      "Use 2–5 photos of real public notices from your campus boards (include one in Bangla and English, and blur any personal phone numbers), plus simple posters you make yourself. Plain text slides are fine. Give poster-making 2 hours in total: the AI is the project, not the design.",
      "Write down the correct answers before you write any prompt. Keep some posters hidden while you build (held back) so your final score is honest.",
      "Don't look at other people's versions of this project until yours works. Then compare and learn.",
      "Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error."
     ],
     "assignment": [
      {
       "day": "Week 1 · about 9 hours",
       "steps": [
        "Collect 15 test posters, in 2 hours at most: 10 to practise on and 5 to hold back. On purpose, include some with missing, unclear and hard-to-read details.",
        "Write `expected.json` with the correct details for all 15 posters. Then write `SCORING.md`: how you'll compare dates, times and venue names, and how you'll score missing or unclear details.",
        "Build the reader: an image goes in and a strict `Event` comes out. Add plain-code checks (the date is real, the end is after the start), a timeout, at most 2 retries and refusal handling.",
        "Checkpoint: the reader works on 3 practice posters from the command line."
       ]
      },
      {
       "day": "Week 2 · about 9 hours",
       "steps": [
        "Build the approval screen in Streamlit: show the draft, let a person fix it, and save only when they approve.",
        "Improve your prompt using only the 10 practice posters. When you're happy, run the 5 held-back posters once.",
        "Write a README: what it does, how to run it, your score on the held-back posters, the cost per poster and one note for every mistake. Add a 60-second recording or GIF: photo in, draft out, a human fix, then approval."
       ]
      }
     ],
     "done": [
      "Your public repo's README shows the score on the 5 held-back posters (using your scoring guide) and the cost per poster, with a note on every mistake.",
      "Nothing can be saved without approval. You tried to break this and couldn't.",
      "A failed API call is retried at most twice, then shows “needs a human”.",
      "You can explain how a request moves through your app, two decisions you made and one problem you fixed. You made at least one change without AI help, and wrote down its commit in your log."
     ],
     "showoff": {
      "pitch": "A photo of a bilingual campus poster becomes a checked event form that saves only after a person approves it.",
      "demo": [
       "Upload a messy Bangla and English poster and show the draft form.",
       "Show a plain-code check catching an impossible date, and a failed call ending in “needs a human”.",
       "Fix one field, approve it, and show that nothing saves any other way.",
       "Open the README: your score on the 5 held-back posters, the cost per poster and one mistake you explain."
      ],
      "proves": [
       "Python and model APIs, the base of the job: Python appears in about 71% of the posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md).",
       "Evaluating on data you held back. Evals appear in about 60% of AI-first roles in the same analysis."
      ]
     },
     "extra_credit": [
      "Show a confidence flag next to each field.",
      "Process a whole folder of posters in one run.",
      "Ask a club organiser to try your approval screen for 10 minutes and break it if they can."
     ],
     "recall": [
      {
       "q": "Why do the held-back posters stay hidden while you improve the prompt?",
       "link": "#project-poster-reader"
      },
      {
       "q": "How do you work out what a model call cost?",
       "link": "#structured-output-and-errors"
      }
     ],
     "extra": []
    }
   ],
   "shift": {
    "before": "You chat with AI and paste its answers into your code.",
    "after": "A public Poster Reader repo with a held-back score, the cost per poster, an approval screen and a 60-second demo."
   },
   "opener": "You paste a blurry concert poster into ChatGPT and it reads it perfectly. Then your code tries a hundred posters and gets back ninety-seven forms, an essay, a refusal and a rate-limit error. This section closes the gap between that demo and a real feature: tokens, typed output, retries, cost per call and a person who presses Approve."
  },
  {
   "title": "RAG with LLM Zoomcamp",
   "weeks": "Weeks 5–18",
   "description": "Learn RAG: finding the right information and letting a model answer from it. You'll follow the free LLM Zoomcamp course and build Ask MDN, an assistant for web docs.",
   "lessons": [
    {
     "slug": "keyword-rag",
     "title": "Keyword RAG",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "An open-book exam is easy if you find the right page. RAG is mostly finding.",
     "intro": [
      "RAG (retrieval-augmented generation) is like an open-book exam. First you find the right pages, then the model answers using only those pages.",
      "You'll start with plain keyword search because it's fast, cheap and easy to debug. This lesson also starts Ask MDN, an assistant for web docs that you'll keep improving until the end of the path."
     ],
     "story": {
      "year": "2024",
      "what": "Air Canada's website chatbot told a grieving passenger he could claim a bereavement discount after booking. The airline's own policy said he couldn't, and a tribunal ordered it to pay.",
      "lesson": "answer only from the pages you retrieved, and show them, so an answer can't contradict its source.",
      "url": "https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know",
      "title": "an airline chatbot invents a refund rule"
     },
     "unlocks": "make a model answer from your documents, not from memory.",
     "edge": "grounding answers in sources you can point to.",
     "overview": [
      "Explain each step of RAG, from question to answer.",
      "Search documents with minsearch, a tiny search library.",
      "Build a prompt from search results."
     ],
     "predict": "A model has never seen your university's notice board. How could it still answer questions about it?",
     "bridge": {
      "text": "RAG means “search first, then ask”. Your code finds 3 to 5 pages, pastes them into the prompt and says “answer only from these”. If search brings the wrong pages, no model can save the answer, so most of the work is search.",
      "terms": [
       [
        "front matter",
        "the block between --- lines at the top of each MDN file: title, slug and more"
       ],
       [
        "boosting",
        "making matches in one field, like the title, count more"
       ]
      ]
     },
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=T-D1OfcDW1M",
       "title": "What is Retrieval-Augmented Generation (RAG)?",
       "channel": "IBM Technology",
       "length": "7 min",
       "why": "Covers the same idea as the reading. Afterwards, write one sentence about it in your log."
      }
     ],
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Zoomcamp Module 1: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/01-intro.md), [03 RAG](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/03-rag.md) (notice why plain models don't know your data) and [04 Dataset](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/04-dataset.md). You already did 02 during setup."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "[05 Search](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/05-search.md) (watch how boosting fields changes results) and [06 Building the prompt](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/06-building-prompt.md)."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "[07 LLM](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/07-llm.md) (it shows how to calculate the price, like you did for posters) and [08 RAG helper](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/08-rag-helper.md)."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "[09 Data ingestion](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/09-data-ingestion.md) and, only if you have time, [10 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/10-rag-next-steps.md).",
        "Start Ask MDN: create a **public** repo called `ask-mdn`. Download only the two folders you need from [mdn/content](https://github.com/mdn/content) (the whole repo is about 500 MB): `git clone --depth 1 --filter=blob:none --sparse https://github.com/mdn/content.git`, then inside it run `git sparse-checkout set files/en-us/web/css/reference/properties files/en-us/web/javascript/reference/global_objects`.",
        "Write the commit ID (`git rev-parse HEAD`) in your README. That exact version is your data from now on, so your tests stay fair."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "Load the two folders into minsearch: CSS properties and JavaScript global objects. Each MDN page is a Markdown file that starts with front matter between `---` lines and contains `{{macro}}` lines. Read the title and slug from the front matter, drop the macro lines and keep the text. Ask it three questions and look at what it finds. This is **Ask MDN v0.1**: it finds the right pages for a question. Commit early and often, with messages that say what changed."
       ]
      }
     ],
     "recall": [
      {
       "q": "What are the steps of RAG, from question to answer?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/03-rag.md"
      },
      {
       "q": "What makes structured output better than free text for an app?",
       "link": "#structured-output-and-errors"
      }
     ],
     "extra": [
      "[Chip Huyen, AI Engineering, chapter 6, section “RAG” (book)](https://github.com/chiphuyen/aie-book)",
      "[Understanding the BM25 full-text search algorithm](https://emschwartz.me/understanding-the-bm25-full-text-search-algorithm/) by Evan Schwartz: how keyword search decides which page wins, in plain words."
     ]
    },
    {
     "slug": "ml-basics-measuring-quality",
     "title": "ML Basics: Measuring Quality",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "Write the exam, mark it yourself, score 100%. Machine learning calls that a bug.",
     "intro": [
      "Before you improve Ask MDN, you need a fair way to measure it. Every test depends on two basic ideas.",
      "First, keep some test data hidden while you build, or your score will fool you. Second, know precision (how much of what you found is right) and recall (how much of the right stuff you found)."
     ],
     "unlocks": "catch a score that looks great because test data leaked into the tuning.",
     "edge": "data judgment: splits, leaks, precision and recall. It's how you question any accuracy claim, including a vendor's.",
     "overview": [
      "Split data into practice data and test data.",
      "Spot “teaching to the test”, when test data sneaks into your tuning.",
      "Explain precision and recall.",
      "Write your first Ask MDN test questions."
     ],
     "predict": "You tune a prompt until it scores 100% on your test questions. Is it good? What could be wrong?",
     "checkpoint": "Ask MDN v0.1 loads your two MDN folders into minsearch and finds a sensible page for “What does flex-wrap do?”.",
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=qWfzIYCvBqo",
       "title": "Precision vs Recall with a Clear Example",
       "channel": "Kimberly Fessel",
       "length": "5 min",
       "why": "Covers the same idea as the reading. Afterwards, write one sentence about it in your log."
      }
     ],
     "assignment": [
      {
       "day": "Day 1 · light day, about 45 min",
       "steps": [
        "Google ML Crash Course: [Dividing the original dataset](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets). Light days like this suit low-energy days, or a power cut on mobile data."
       ]
      },
      {
       "day": "Day 2 · light day, about 45 min",
       "steps": [
        "Google ML Crash Course: [Accuracy, precision and recall](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall)."
       ]
      },
      {
       "day": "Days 3–5 · about 4.5 hours",
       "steps": [
        "Write 20 practice questions for Ask MDN. For each one, list the page IDs (file paths) that answer it. These are for tuning, so use them as often as you like.",
        "Write 10 questions the docs can't answer, like “What's the best laptop for coding?”. Ask MDN must say “I don't know” to these.",
        "Commit both files. In Measuring Search you'll create 50 more questions that stay hidden until the final project."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why must test questions stay hidden while you tune?",
       "link": "https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets"
      },
      {
       "q": "Why did you freeze one exact version of the MDN docs?",
       "link": "#keyword-rag"
      }
     ],
     "extra": [
      "[Chip Huyen, AI Engineering, chapter 3, “Exact Evaluation” (book)](https://github.com/chiphuyen/aie-book)",
      "[Common pitfalls and recommended practices](https://scikit-learn.org/stable/common_pitfalls.html) by scikit-learn docs: the classic ways test data leaks into your tuning."
     ]
    },
    {
     "slug": "tools-and-the-agent-loop",
     "title": "Tools and the Agent Loop",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "The model can't run code. It can only ask nicely. Your code decides.",
     "intro": [
      "The course calls Module 1 “Agentic RAG”. Here's what that means: instead of always searching, you give the model a search tool and let it decide when to use it. This is called function calling.",
      "You'll also give Ask MDN its first screen, so you can chat with it and show it to someone."
     ],
     "unlocks": "let a model call your own functions from a chat screen.",
     "edge": "designing tools a model can use well.",
     "overview": [
      "Explain function calling: the model asks your code to run a function.",
      "Build a simple agent loop: ask, act, look at the result, repeat.",
      "Put a chat screen on Ask MDN."
     ],
     "predict": "Can a language model run your Python function by itself? If not, who does?",
     "checkpoint": "your practice questions and unanswerable questions are committed in `ask-mdn`.",
     "bridge": {
      "text": "The model can't run code. It sends back a structured request: “call search with this query”. Your code runs it, sends back the result and asks again. This repeats until the model answers in plain text, or a step limit stops it.",
      "terms": [
       [
        "function call",
        "the model's structured request for your code to run a named function"
       ],
       [
        "developer message",
        "Zoomcamp's name for the message that holds the agent's instructions"
       ]
      ]
     },
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=h8gMhXYAv1k",
       "title": "What is Tool Calling? Connecting LLMs to Your Data",
       "channel": "IBM Technology",
       "length": "5 min",
       "why": "Covers the same idea as the reading. Afterwards, write one sentence about it in your log."
      }
     ],
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "[11 Agents intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/11-agents-intro.md) and [12 RAG revision](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/12-rag-revision.md) (optional if RAG feels clear)."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "[13 Function calling](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/13-function-calling.md). Watch how the tool's result is sent back to the model."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "[14 Agentic loop](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/14-agentic-loop.md). Keep your loop; you'll extend it in Section 4."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "**No AI for this one:** close the course code and rewrite the agent loop from memory, in 20 minutes at most. Then compare and fix the gaps.",
        "Add to Ask MDN: turn your search into a tool, let the model call it, and log every call."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "Build a small Streamlit chat page for Ask MDN (about 20 lines, using what you learned in Structured Output and Errors). This is **Ask MDN v0.2**: you can chat with it, and it decides when to search. Ask it 5 of your practice questions, then show it to a friend if one is around."
       ]
      }
     ],
     "recall": [
      {
       "q": "What stops an agent loop from running forever?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/14-agentic-loop.md"
      },
      {
       "q": "What is the difference between precision and recall?",
       "link": "#ml-basics-measuring-quality"
      }
     ],
     "extra": [
      "[Anthropic, Building effective agents (worth a second read now)](https://www.anthropic.com/engineering/building-effective-agents)",
      "Zoomcamp [15 Frameworks](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/15-frameworks.md) and [16 Other frameworks](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/16-other-frameworks.md): a tour of agent frameworks. This path uses LangGraph in Section 4.",
      "[You should write an agent](https://fly.io/blog/everyone-write-an-agent/) by Thomas Ptacek, Fly.io: why writing a small agent yourself teaches more than reading about one."
     ]
    },
    {
     "slug": "embeddings-and-vector-search",
     "title": "Embeddings and Vector Search",
     "kind": "lesson",
     "time": "about 2 weeks",
     "hook": "Keyword search reads spelling. Today you hire a librarian who reads meaning.",
     "intro": [
      "Keyword search only finds exact words. If someone asks about “centering” but the page says “alignment”, it can miss. Embeddings fix this.",
      "An embedding turns text into a list of numbers, so texts with similar meaning end up close together. Searching by meaning is called vector search. Give this lesson two weeks; the course says it takes longer than most."
     ],
     "picture": "A map of Dhaka where pages are pinned by meaning, not spelling. “Cheap fuchka near campus” and “affordable street snacks close to the university” share a street, while “campus Wi-Fi password” sits across town. An embedding is a page's coordinates, with hundreds of numbers instead of two, and vector search means: show me the nearest pins.",
     "unlocks": "search by meaning, for free, on your own laptop.",
     "edge": "weighing trade-offs between ways of representing data.",
     "overview": [
      "Explain what an embedding is.",
      "Run vector search with three different tools.",
      "Split long pages into chunks.",
      "Build the search file Ask MDN will use online."
     ],
     "predict": "Someone asks “How do I place something in the center?” Will a keyword search find a page titled “a box in the middle”?",
     "widget": "embedding-map",
     "checkpoint": "Ask MDN v0.2's chat page runs, and its log shows a search tool call when you ask a CSS question.",
     "bridge": {
      "text": "An embedding turns a text into a few hundred numbers: a point on a map of meaning. Texts with similar meanings sit close together, and search means finding the page points closest to the question point. Zoomcamp says “dot product” where this course says cosine: when vectors have length 1, they give the same ranking.",
      "terms": [
       [
        "embedding",
        "a list of numbers that stands for a text's meaning"
       ],
       [
        "chunk",
        "a few paragraphs from a long page, embedded on their own"
       ]
      ]
     },
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=e9U0QAFbfLI",
       "title": "Cosine Similarity, Clearly Explained",
       "channel": "StatQuest with Josh Starmer",
       "length": "10 min",
       "why": "Covers the same idea as the reading. Afterwards, write one sentence about it in your log."
      }
     ],
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Read Google's [Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings) module for the big idea. Then Module 2: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/01-intro.md).",
        "Before Day 2: lesson 02 installs sentence-transformers, which pulls in PyTorch (hundreds of MB). On a slow connection or a small laptop, install the CPU-only build with `uv pip install torch --index-url https://download.pytorch.org/whl/cpu`, or work in a Codespace."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "[02 Embeddings](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/02-embeddings.md) (focus on cosine similarity) and [03 Embeddings dataset](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/03-embeddings-dataset.md)."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "[04 Vector search](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/04-vector-search.md) and [05 minsearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/05-minsearch-vector.md)."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "[06 RAG with vectors](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/06-rag-vector.md)."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "[07 sqlitesearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/07-sqlitesearch-vector.md). This keeps your search index in one file, which is what Ask MDN will use online. Skip lesson 08 (pgvector) for now: you'll do it in [Postgres Search and Access Rules](#postgres-search-and-access-rules), right when you need it."
       ]
      },
      {
       "day": "Day 6 · about 90 min",
       "steps": [
        "[09 ONNX embedder](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/09-onnx-embedder.md) (a smaller embedder that doesn't need PyTorch; Ask MDN will use it online) and [10 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/10-next-steps.md)."
       ]
      },
      {
       "day": "Day 7 · about 90 min",
       "steps": [
        "Read [Chunking for longer texts](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/07-project-example/07-chunking.md). MDN pages can be long, so split each page into chunks of a few paragraphs, and keep the page ID on every chunk."
       ]
      },
      {
       "day": "Days 8–11 · about 6 hours",
       "steps": [
        "Add to Ask MDN: build a sqlitesearch vector index of your chunked MDN data with the ONNX embedder. It runs on your own computer, so it's free. Compare its answers with keyword search on 5 practice questions. This is **Ask MDN v0.3**: it searches by meaning."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why can vector search find answers that keyword search misses?",
       "link": "https://developers.google.com/machine-learning/crash-course/embeddings"
      },
      {
       "q": "What does function calling let the model do?",
       "link": "#tools-and-the-agent-loop"
      }
     ],
     "extra": [
      "[RAG Techniques notebooks (handy reference, not a course)](https://github.com/NirDiamant/RAG_Techniques)",
      "[Embeddings: what they are and why they matter](https://simonwillison.net/2023/Oct/23/embeddings/) by Simon Willison: the clearest plain-English introduction.",
      "[The Illustrated Word2vec](https://jalammar.github.io/illustrated-word2vec/) by Jay Alammar: pictures of how words turn into numbers."
     ]
    },
    {
     "slug": "measuring-search",
     "title": "Measuring Search",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "“It feels better” isn't a metric. Ask MDN gets a report card it can't charm.",
     "intro": [
      "Now you'll measure how good Ask MDN's search really is, with numbers instead of guesses.",
      "You'll also create the 50 held-back questions for your final project. Once they're committed, you don't look at them again until then."
     ],
     "unlocks": "prove search got better with numbers, not vibes.",
     "edge": "turning “better” into something you can measure.",
     "overview": [
      "Generate ground truth: questions with known correct pages.",
      "Measure Hit Rate (did the right page show up in the top 5?) and MRR (how close to the top was it?).",
      "Tune search fairly, using practice questions only."
     ],
     "predict": "Two searches both find the right page somewhere in their top 5. Can one still be better? How would you tell?",
     "widget": "search-score",
     "checkpoint": "Ask MDN v0.3 answers from a sqlitesearch vector index built with the ONNX embedder, and keyword search still works.",
     "bridge": {
      "text": "To grade search you need an answer key: questions whose correct page you already know. Run search and see where that page lands. Hit Rate asks “was it in the top 5?”. MRR asks how near the top: 1st scores 1, 2nd ½, 3rd ⅓, missing 0, then you take the average. Careful, three different things share a name: recall (the ML metric), Recall@k (Zoomcamp's other name for Hit Rate) and this site's Memory check.",
      "terms": [
       [
        "ground truth",
        "questions paired with the page that answers them"
       ],
       [
        "held-back set",
        "questions you never use for tuning"
       ],
       [
        "Recall@k",
        "Zoomcamp's name for Hit Rate: was a right page in the top k?"
       ]
      ]
     },
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Module 4: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/01-intro.md) and [02 Ground truth](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/02-ground-truth.md) (it generates questions with structured output, which you already know)."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "[03 Ground truth batch](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/03-ground-truth-batch.md).",
        "Use the same method to generate questions for a random sample of 60 of your MDN pages, not all of them."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Read through the questions, fix or replace the bad ones, and keep 50. Commit them as your **held-back** set. Don't use them for tuning."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "[04 Search evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/04-search-evaluation.md)."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "[05 Search metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/05-search-metrics.md) and [06 Search tuning](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/06-search-tuning.md)."
       ]
      },
      {
       "day": "Days 6–7 · about 3 hours",
       "steps": [
        "Add to Ask MDN: measure Hit Rate@5 and MRR@5 (the @5 means only the top 5 results count) for keyword and vector search on your 20 practice questions. Write the numbers in your README."
       ]
      }
     ],
     "recall": [
      {
       "q": "What does MRR reward that Hit Rate doesn't?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/05-search-metrics.md"
      },
      {
       "q": "Why did you split long MDN pages into chunks?",
       "link": "#embeddings-and-vector-search"
      }
     ],
     "extra": [
      "[Systematically improving your RAG](https://jxnl.co/writing/2024/05/22/systematically-improving-your-rag/) by Jason Liu: measure search first, then fix it."
     ]
    },
    {
     "slug": "hybrid-search",
     "title": "Hybrid Search",
     "kind": "lesson",
     "time": "about 4.5 hours",
     "hook": "Keyword search knows `justify-content`; vector search knows “center a box”. RRF lets them vote.",
     "intro": [
      "MDN questions mix meaning (“how do I center a box?”) with exact names (`justify-content`). Keyword search is great with names. Vector search is great with meaning.",
      "Hybrid search runs both and combines the results, so you get the best of each. You'll also teach Ask MDN when to say “I don't know”."
     ],
     "picture": "Two judges rank the same singers on different scales, so adding their marks means nothing. RRF throws away the marks and keeps only the places: each list gives a singer 1/(k + place) points, and the totals decide.",
     "unlocks": "combine two searches and make the app admit “I don't know”.",
     "edge": "deciding when a system should refuse to answer.",
     "overview": [
      "Know when each kind of search does better.",
      "Combine two result lists with Reciprocal Rank Fusion (RRF).",
      "Set a score threshold for “I don't know”."
     ],
     "predict": "One list ranks a page 1st and the other doesn't have it at all. Another page is 2nd in both lists. Which should win?",
     "widget": "rank-fusion",
     "checkpoint": "your README has Hit Rate@5 and MRR@5 for keyword and vector search, and the 50 held-back questions are committed.",
     "bridge": {
      "text": "Each search gives a ranked list, and their scores can't be compared. RRF ignores the scores and uses only positions: each list gives a page 1/(k + position) points, and you add them up. A page fairly high in both lists beats one at the top of only one.",
      "terms": [
       [
        "RRF",
        "merging ranked lists by adding 1 ÷ (k + position)"
       ],
       [
        "threshold",
        "the score below which the app says “I don't know”"
       ]
      ]
     },
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=2uBcjEecr38",
       "title": "What is reciprocal rank fusion in hybrid search?",
       "channel": "Abhishek Thakur",
       "length": "8 min",
       "why": "Covers the same idea as the reading. Afterwards, write one sentence about it in your log."
      }
     ],
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Read Module 6 lessons [02 Hybrid search](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/02-hybrid-search.md) and [03 Reranking (RRF)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/03-reranking.md). They were recorded in 2024, so some code is old. Take the ideas, not the code. Skip the Elasticsearch part of 03: its built-in RRF needs a paid licence. Lesson 02 uses k = 1 and 03 uses 60; Ask MDN uses 60."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "**No AI for this one:** write your own RRF function, about 15 lines. A page gets more points the higher it ranks in each list, and its points are added up. Then add a `hybrid_search()` that runs both searches and combines them."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Measure Hit Rate@5 and MRR@5 for hybrid search on your practice questions and compare with keyword and vector search.",
        "Set an “I don't know” threshold: look at the top search score for your practice questions and the 10 unanswerable questions you wrote in [ML Basics](#ml-basics-measuring-quality), and pick a cut-off that separates them. Below it, Ask MDN says “I don't know”. Don't tune it forever: pick a cut-off today, write down the numbers and why, and move on. This is **Ask MDN v0.4**: it combines both searches and knows when to say “I don't know”."
       ]
      }
     ],
     "recall": [
      {
       "q": "What does RRF use from each result list?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/02-hybrid-search.md"
      },
      {
       "q": "What does Hit Rate@5 measure?",
       "link": "#measuring-search"
      }
     ],
     "extra": [
      "[RAG Techniques: reranking and fusion notebooks](https://github.com/NirDiamant/RAG_Techniques)",
      "[Better RAG results with reciprocal rank fusion and hybrid search](https://www.assembled.com/blog/better-rag-results-with-reciprocal-rank-fusion-and-hybrid-search) by Assembled: a real team's results with the exact method you just built.",
      "[Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) by Anthropic: how adding a little context to each chunk cut failed searches."
     ]
    },
    {
     "slug": "data-ingestion",
     "title": "Data Ingestion",
     "kind": "lesson",
     "time": "about 4.5 hours",
     "hook": "A good ingestion script is a lift button: press it ten times, still one trip.",
     "intro": [
      "Ingestion means loading your data into the app. Real data changes, so a good ingestion script is safe to run again and again without creating duplicates.",
      "You'll write Ask MDN's ingestion script now, and in Section 5 you'll extend it to handle edited and deleted pages."
     ],
     "picture": "A class register, not a guest book. A guest book adds a line every time someone walks in; a register has one row per roll number, so calling the roll twice changes nothing. Your ingestion keys each page by its URL and a content hash, so a rerun only touches pages that really changed.",
     "story": {
      "year": "2024",
      "what": "Google's AI search answers suggested putting glue on pizza, built from a joke forum post. Google then limited which sources those answers could use.",
      "lesson": "choose what you ingest, and record every source in your manifest, so a bad answer can be traced back.",
      "url": "https://www.theregister.com/2024/05/31/google_ai_search_update",
      "title": "glue on pizza"
     },
     "unlocks": "reload changing data without creating duplicates.",
     "edge": "repeatable, traceable data pipelines.",
     "overview": [
      "Write ingestion that's safe to run twice.",
      "Track every page with a content hash.",
      "Keep a list (manifest) of everything you loaded."
     ],
     "predict": "You run your ingestion script twice by accident. What happens to your search results?",
     "widget": "run-twice",
     "checkpoint": "Ask MDN v0.4 combines both searches and says “I don't know” below your cut-off.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Write Ask MDN's ingestion script: read your MDN snapshot, chunk each page and save its path, title and content hash. A content hash is like a fingerprint of the text: if the text changes, the fingerprint changes."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Make it safe to run twice: skip pages whose fingerprint hasn't changed. Run it twice; the second run should change nothing."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Save and commit a manifest file: a list of every page path and its hash from this run. You'll compare manifests in Fresh Data. Write 2 pytest tests for the script. Commit early and often, with messages that say what changed."
       ]
      }
     ],
     "recall": [
      {
       "q": "What makes an ingestion script safe to run twice?",
       "link": "#data-ingestion"
      },
      {
       "q": "How does Ask MDN decide to say “I don't know”?",
       "link": "#hybrid-search"
      }
     ],
     "extra": [
      "[dlt workshop: data pipelines with a dedicated tool (optional; earns Zoomcamp project points)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/cohorts/2026/workshops/dlt.md)",
      "[Module 3: orchestration with Kestra (optional; needs free Gemini and Tavily keys)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/03-orchestration/README.md)"
     ]
    },
    {
     "slug": "grading-answers",
     "title": "Grading Answers",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "Hiring a model to mark exams is clever. Not checking its marking isn't.",
     "intro": [
      "Good search isn't enough: the final answer also has to be right. Checking hundreds of answers by hand is slow, so you'll use a model to grade them. This is called an LLM judge.",
      "A judge can be wrong too, so you'll check the judge against your own grades."
     ],
     "picture": "An LLM judge is a new teaching assistant hired to mark 500 scripts. Before trusting them, the head teacher marks 30 of the same scripts and studies every disagreement, not just the average, and keeps spot-checking for as long as the assistant marks.",
     "unlocks": "grade hundreds of answers and know when to trust the grader.",
     "edge": "checking the checker. Hamel Husain calls error analysis the most important activity in evals ([AI Evals FAQ](https://hamel.dev/blog/posts/evals-faq/)).",
     "overview": [
      "Generate answers for many questions at once.",
      "Grade answers with an LLM judge.",
      "Check that the judge agrees with you."
     ],
     "predict": "What agreement rate with your own grades would make you trust an LLM judge? Pick a number.",
     "widget": "mark-the-marker",
     "checkpoint": "running your ingestion script twice changes nothing, and the manifest is committed.",
     "bridge": {
      "text": "A judge is a second model with a marking scheme. Question, answer and sources go in; a verdict and a reason come out. Judges are often too lenient, so grade a sample yourself and count how often you agree. As Zoomcamp's lesson 13 puts it, you can't use another judge to check the judge.",
      "terms": [
       [
        "LLM judge",
        "a model prompted to grade another model's answer"
       ],
       [
        "agreement rate",
        "the share of answers where the judge's verdict matches yours"
       ]
      ]
     },
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=Th9vlxxAVeA",
       "title": "Why There's No LLM Judge You Can Trust 100% of the Time",
       "channel": "Hamel Husain",
       "length": "2 min",
       "why": "A short warm-up before the judge lessons."
      }
     ],
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "[11 Evaluation intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/11-evaluation-intro.md) and [12 RAG answers](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/12-rag-answers.md)."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "[13 LLM as judge](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/13-llm-as-judge.md). Pay attention to “Evaluating the judge”. Then skim [14 Agent evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/14-agent-evaluation.md) and [15 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/15-next-steps.md). For 14, watch its 2-minute video and read only the headings; the page itself is long."
       ]
      },
      {
       "day": "Days 3–5 · about 4.5 hours",
       "steps": [
        "Add to Ask MDN: generate answers for your 20 practice questions and save them to a file, so you can grade again without paying again. Grade them with a judge, then grade 10 of them yourself. Write down how often the judge agreed with you. Run the judge once per change, not after every small idea."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why check an LLM judge against answers you graded yourself?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/13-llm-as-judge.md"
      },
      {
       "q": "Why save a content hash for every page?",
       "link": "#data-ingestion"
      }
     ],
     "extra": [
      "[AI Evals FAQ by Hamel Husain and Shreya Shankar (a preview of Section 5)](https://hamel.dev/blog/posts/evals-faq/)",
      "[Creating an LLM-as-a-judge that drives business results](https://hamel.dev/blog/posts/llm-judge/) by Hamel Husain: how to build a judge you can actually trust."
     ]
    },
    {
     "slug": "monitoring",
     "title": "Monitoring",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "Sooner or later someone will ask Ask MDN for a biryani recipe. Logs show you the question, and what it said back.",
     "intro": [
      "Once people use your app, you need to see what's happening: what they ask, what it answers, how much it costs and how fast it is. You'll also save every chat so you can study real conversations later."
     ],
     "unlocks": "see what users ask, what each answer costs and where it fails.",
     "edge": "owning how your app behaves after launch.",
     "overview": [
      "Turn your Streamlit page into a full chat app.",
      "Save every conversation and its cost to a database.",
      "Collect user feedback and show it on a dashboard."
     ],
     "checkpoint": "your log has saved answers for the 20 practice questions and a judge agreement number.",
     "bridge": {
      "text": "Monitoring means keeping a receipt for every answer: the question, the answer, its sources, the time, tokens, cost and a thumbs up or down. Later you read the receipts to find failures. A dashboard is only a view of that table; the table is what matters.",
      "terms": [
       [
        "conversation log",
        "one database row per question and answer"
       ],
       [
        "feedback",
        "the thumbs up or down saved on that row"
       ]
      ]
     },
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Module 5: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/01-intro.md), [02 Assistant setup](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/02-assistant-setup.md) and [03 Chat app](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/03-chat-app.md). Heads-up: the download links in 02 are broken. Copy `ingest.py` and `rag_helper.py` from the [05-monitoring/code folder](https://github.com/DataTalksClub/llm-zoomcamp/tree/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/code) instead."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "[04 Metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/04-metrics.md) and [05 Database](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/05-database.md) (this is where every conversation gets saved)."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Skim [06 Querying](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/06-querying.md) and [07 Streamlit dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/07-streamlit-dashboard.md); you won't build these. Then do [08 User feedback](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/08-user-feedback.md) properly: you'll add the same thumbs up or down to Ask MDN."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Skim [09 Built-in judge](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/09-built-in-judge.md) and [10 Feedback dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/10-feedback-dashboard.md). Then do [11 Synthetic data](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/11-synthetic-data.md) properly. You'll use this generator in Section 5 to create realistic logs."
       ]
      },
      {
       "day": "Days 5–7 · about 4.5 hours",
       "steps": [
        "Add to Ask MDN: save every conversation with the question, answer, cited pages, time taken, tokens and cost. Add a thumbs up or down button. This is **Ask MDN v0.5**: you can see what people ask and what each answer costs."
       ]
      }
     ],
     "recall": [
      {
       "q": "What should you save for every answer?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/04-metrics.md"
      },
      {
       "q": "Why can't you fully trust an LLM judge without checking it?",
       "link": "#grading-answers"
      }
     ],
     "extra": [
      "[Grafana dashboards (optional)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/12-grafana.md)",
      "[Docker Compose for the whole app (optional; earns Zoomcamp project points)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/13-docker-compose.md)",
      "[A field guide to rapidly improving AI products](https://hamel.dev/blog/posts/field-guide/) by Hamel Husain: why looking at real conversations beats any dashboard."
     ]
    },
    {
     "slug": "deploy-it-safely",
     "title": "Deploy It Safely",
     "kind": "lesson",
     "time": "about 6 hours",
     "hook": "Anyone can press deploy. The professional is the one who can undo it in two minutes, calmly, at midnight.",
     "intro": [
      "Deploying means putting your app online. It's an important skill, so you'll do it now.",
      "Ask MDN will be a private app that only people you invite can use. Its search file ships with the app. Its conversation logs need a database that lives online, so you'll set up a free one with Neon."
     ],
     "unlocks": "put an app online privately and undo a bad release.",
     "edge": "a safe release routine: deploy, check, roll back. Tools differ between teams; the routine carries over.",
     "overview": [
      "Deploy a Streamlit app from GitHub.",
      "Keep secrets like API keys out of your code.",
      "Store logs in a hosted Postgres database safely.",
      "Make your app private, and undo a bad deploy (roll back)."
     ],
     "checkpoint": "Ask MDN v0.5 saves every conversation with tokens, cost and a thumbs rating.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Read [Deploy your app](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app) and [Secrets management](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/secrets-management).",
        "Check that no API key exists anywhere in your Git history. If one does, don't panic: revoke that key in OpenAI first, then clean the history. Put the OpenAI key in the app's Secrets settings.",
        "Use the ONNX embedder from Embeddings and Vector Search, so the app stays small. Ship the sqlitesearch index file with the app, or build it when the app starts."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Create a free Neon project ([plans](https://neon.com/docs/introduction/plans)). Read [Neon roles](https://neon.com/docs/manage/roles): roles made in Neon's website get powers that skip security rules, so create your app's database role with SQL ([CREATE ROLE](https://www.postgresql.org/docs/current/sql-createrole.html)) instead.",
        "Point Ask MDN's conversation logging at Neon through Secrets, and check that new chats appear there."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Deploy it. Then make it your one private app and invite yourself and one friend as viewers ([Share your app](https://docs.streamlit.io/deploy/streamlit-community-cloud/share-your-app)).",
        "Practise a rollback: deploy a broken version on purpose, then deploy the previous version again."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Check your OpenAI budget alerts and credit balance, then write a short “How to deploy” section in your README. Recruiters can't open a private app, so add a short GIF or recording of it working. This is **Ask MDN v0.6**: it's online."
       ]
      }
     ],
     "recall": [
      {
       "q": "Where does the API key live when the app is online?",
       "link": "https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/secrets-management"
      },
      {
       "q": "Why should your app's database role be created with SQL on Neon?",
       "link": "https://neon.com/docs/manage/roles"
      }
     ],
     "extra": []
    },
    {
     "slug": "project-ask-mdn",
     "title": "Ask MDN",
     "kind": "project",
     "time": "about 3 weeks",
     "hook": "You know MDN, so you'll spot Ask MDN's mistakes first. That's your unfair advantage.",
     "intro": [
      "This is your Zoomcamp final project, built on MDN. It answers CSS and JavaScript questions, shows which pages it used, and says “I don't know” when the docs don't cover a question.",
      "You're a web developer, so you'll spot wrong answers quickly. That makes MDN a great place to learn."
     ],
     "unlocks": "demo a live, cited RAG app, with scores measured on questions it never saw.",
     "edge": "end-to-end ownership, backed by evidence. This is likely the repo interviewers will ask about.",
     "before": [
      "Read the Zoomcamp [project criteria](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/project.md) and use them as a checklist. This path covers most of them; the optional extras are in Extra credit below.",
      "Decide who it's for, for example first-years in your university's programming club. Only your prompt and README change.",
      "Your MDN data and your test questions are frozen. Don't change them now.",
      "MDN's text is shared under a license called CC-BY-SA. Credit “Mozilla Contributors” and link each page you use ([MDN licensing](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license)).",
      "Don't look at other people's versions of this project until yours works. Then compare and learn.",
      "Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error."
     ],
     "checkpoint": "Ask MDN v0.6 runs online as your private app, with conversations saved in Neon.",
     "assignment": [
      {
       "day": "Week 1 · about 9 hours",
       "steps": [
        "Bring together everything from this section: ingestion, hybrid search, the prompt, the chat app and logging.",
        "Make every answer show links to the MDN pages it used.",
        "Checkpoint: 5 practice questions get correct, cited answers."
       ]
      },
      {
       "day": "Week 2 · about 9 hours",
       "steps": [
        "Check the “I don't know” path on your 10 unanswerable questions.",
        "Run your tests on the 50 held-back questions, once, and record the results.",
        "Checkpoint: your README has the results table."
       ]
      },
      {
       "day": "Week 3 · about 9 hours",
       "steps": [
        "Put the final version online as a private app (see [Deploy It Safely](#deploy-it-safely)). This is **Ask MDN v1.0**.",
        "If a friend can help, ask them for 5 CSS or JavaScript questions they really got stuck on this month, and run them on the live app. No one free? Ask in the Zoomcamp Slack, or use 5 old bugs of your own.",
        "Finish the README. Open it with a real bug you once lost hours to, and Ask MDN's cited answer. Then: how it works, how to run it, your results, a GIF and what you'd improve.",
        "If a Zoomcamp cohort is open, submit your project for peer review. If not, share your repo in `#course-llm-zoomcamp` and ask for feedback."
       ]
      }
     ],
     "done": [
      "Your README reports Hit Rate@5 and MRR@5 for keyword, vector and hybrid search on the 50 held-back questions. If hybrid doesn't win, you explain why.",
      "Every answer shows links to the MDN pages it used.",
      "It says “I don't know” to all 10 questions the docs can't answer.",
      "It runs online as your private Streamlit app, with the API key stored in Secrets and conversations saved in Neon.",
      "You can explain how a request moves through your app, two decisions you made and one problem you fixed. You wrote at least one whole function without AI help, and noted its commit in your log."
     ],
     "showoff": {
      "pitch": "Hybrid-search RAG over MDN that cites its pages, says “I don't know”, and reports scores on questions it never saw.",
      "demo": [
       "Start with a real bug you once lost hours to, and show Ask MDN's cited answer.",
       "Ask something the docs don't cover and get “I don't know”.",
       "Show Hit Rate@5 and MRR@5 for keyword, vector and hybrid search on the 50 held-back questions.",
       "Show the logs: what each answer cost and how users rated it.",
       "Walk through one failure you found and fixed."
      ],
      "proves": [
       "RAG, the most named pattern in job posts: about 40% of the posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md), and [rising](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/07-trends.md).",
       "Vector search, measuring retrieval, and running and monitoring an LLM app in production."
      ]
     },
     "extra_credit": [
      "Add a real reranker (a second model that re-scores the top results) and measure whether it helps.",
      "Compare two embedding models on your practice questions.",
      "Optional Zoomcamp extras that earn points: Docker Compose, a 5-chart dashboard, a dedicated ingestion tool, comparing prompts and query rewriting."
     ],
     "recall": [
      {
       "q": "What goes into a RAG prompt?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/06-building-prompt.md"
      },
      {
       "q": "How do you roll back a bad deploy?",
       "link": "#deploy-it-safely"
      }
     ],
     "extra": []
    }
   ],
   "shift": {
    "before": "Your model answers from memory, and you can't prove search got better.",
    "after": "A live, private Ask MDN with citations, “I don't know”, a Hit Rate and MRR table, and logs of every answer."
   },
   "opener": "Ask a model about a CSS property and it answers like a confident senior, even when it's wrong. These fourteen weeks hand it an open book: MDN. Ask MDN learns to find the right page, show it, say “I don't know” when the page isn't there, and earn a report card it can't charm."
  },
  {
   "title": "Agents",
   "weeks": "Weeks 19–23",
   "description": "Give your app tools so it can take actions. You'll learn how agents work, build one with LangGraph, and learn to keep tools safe.",
   "lessons": [
    {
     "slug": "agent-fundamentals",
     "title": "Agent Fundamentals",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "An agent is a loop with opinions. Today you read its mind, step by step.",
     "intro": [
      "You already built a small agent loop in Zoomcamp. Now you'll learn the words properly and improve that loop by hand, with no framework.",
      "An agent works in a cycle: it thinks about what to do, takes an action (like calling a tool), looks at the result, and repeats. Knowing this cycle makes frameworks much easier to understand and debug."
     ],
     "unlocks": "debug agent frameworks, because you've built the loop yourself.",
     "edge": "debugging by reading what the agent actually did.",
     "overview": [
      "Explain thoughts, actions and observations: the agent cycle.",
      "Explain how messages and tools are sent to the model.",
      "Extend an agent loop in plain Python."
     ],
     "predict": "If the tool an agent calls keeps failing, what stops the agent from trying forever?",
     "widget": "agent-loop",
     "checkpoint": "Ask MDN v1.0 is online, and your README has the held-back results table.",
     "bridge": {
      "text": "The Hugging Face course shows what the API hides. Your message list becomes one long text with special markers, and older agents wrote their actions as plain text that code had to parse. OpenAI's tool calling does that parsing for you. It's the same think, act, observe loop with different wiring.",
      "terms": [
       [
        "chat template",
        "the format that turns a message list into one prompt"
       ],
       [
        "ReAct",
        "a pattern where the model alternates reasoning and actions"
       ]
      ]
     },
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Hugging Face Agents Course, Unit 1: [What are agents?](https://huggingface.co/learn/agents-course/en/unit1/what-are-agents) and [Messages and special tokens](https://huggingface.co/learn/agents-course/en/unit1/messages-and-special-tokens)."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "[Tools](https://huggingface.co/learn/agents-course/en/unit1/tools) and [Agent steps and structure](https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure)."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "[Thoughts](https://huggingface.co/learn/agents-course/en/unit1/thoughts), [Actions](https://huggingface.co/learn/agents-course/en/unit1/actions) and [Observations](https://huggingface.co/learn/agents-course/en/unit1/observations). Stuck? Ask in the Hugging Face Discord's `#agents-course-questions` channel."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "**No AI for this one:** take the agent loop you wrote in Tools and the Agent Loop and add two things: a step limit (stop after 5 steps) and a second tool that returns a page's title. Log every step."
       ]
      }
     ],
     "recall": [
      {
       "q": "What are the three parts of the agent cycle?",
       "link": "https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure"
      },
      {
       "q": "What does RRF do with two result lists?",
       "link": "#hybrid-search"
      }
     ],
     "extra": [
      "[Hugging Face Agents Course, the rest of Unit 1](https://huggingface.co/learn/agents-course/en/unit1/introduction)",
      "[Andrew Ng, Agentic AI (the videos are free to watch)](https://www.deeplearning.ai/courses/agentic-ai)",
      "[What's next for AI agentic workflows](https://www.youtube.com/watch?v=sal78ACtGTc) by Andrew Ng (Sequoia Capital, 14 min): four agent design patterns in plain words.",
      "[How to build an agent](https://ampcode.com/notes/how-to-build-an-agent) by Thorsten Ball, Amp: a working coding agent in a few hundred lines; the loop really is that simple.",
      "[Designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/) by Simon Willison: how to give an agent a clear goal, good tools and safe limits."
     ]
    },
    {
     "slug": "langgraph",
     "title": "LangGraph",
     "kind": "lesson",
     "time": "about 1.5 weeks",
     "hook": "Your hand-written loop forgets everything and can't wait. LangGraph adds memory and patience.",
     "intro": [
      "LangGraph is a framework for building agents. It adds what your hand-written loop doesn't have: saved state (memory), branches, and a way to pause and wait for a person.",
      "You'll use it for the rest of the path. Take your time; your next project depends on it."
     ],
     "unlocks": "build agents that remember, branch and wait for a person.",
     "edge": "designing where a human steps in.",
     "overview": [
      "Build a graph (a map of steps) that keeps state.",
      "Give an agent memory.",
      "Pause for a person's approval with interrupts."
     ],
     "checkpoint": "your hand-written loop has a step limit and a second tool, and logs every step.",
     "bridge": {
      "text": "A graph is your agent loop drawn as boxes (nodes) and arrows (edges), all sharing one notebook called the state. A checkpointer saves that notebook after every box, which is what lets a run pause for a person and carry on later.",
      "terms": [
       [
        "state",
        "the shared data every node reads and updates"
       ],
       [
        "interrupt",
        "a pause that waits for a person's input"
       ]
      ]
     },
     "assignment": [
      {
       "day": "Days 1–3 · about 4.5 hours",
       "steps": [
        "LangChain Academy [Intro to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph), Module 1: Introduction (skip its deployment lesson). Some notebooks use LangSmith for tracing; a free [LangSmith](https://docs.smith.langchain.com/) account is enough, or skip those parts. Write the `langgraph` version you installed in your log, and skip LangGraph Studio for now."
       ]
      },
      {
       "day": "Days 4–5 · about 3 hours",
       "steps": [
        "Module 2: State and Memory."
       ]
      },
      {
       "day": "Days 6–7 · about 3 hours",
       "steps": [
        "Read the [interrupts guide](https://docs.langchain.com/oss/python/langgraph/interrupts) first. Then Module 3: UX and Human-in-the-Loop. Its notebooks pause with breakpoints (`interrupt_before`); that's fine for learning, but your project uses `interrupt()`. Skip the dynamic-breakpoints and time-travel notebooks."
       ]
      },
      {
       "day": "Day 8 · about 90 min",
       "steps": [
        "Reread the approvals part of the [interrupts guide](https://docs.langchain.com/oss/python/langgraph/interrupts). For approvals, use `interrupt()` and resume with `Command(resume=...)`; the docs recommend static breakpoints only for debugging.",
        "Rebuild your loop in LangGraph with one interrupt before a tool runs. In your log, list what LangGraph now does that you wrote by hand."
       ]
      }
     ],
     "recall": [
      {
       "q": "How do you pause a graph for a person, and how do you continue it?",
       "link": "https://docs.langchain.com/oss/python/langgraph/interrupts"
      },
      {
       "q": "Why put a limit on an agent's number of steps?",
       "link": "#agent-fundamentals"
      }
     ],
     "extra": [
      "[Hugging Face Agents Course, Unit 2 LangGraph pages](https://huggingface.co/learn/agents-course/en/unit2/langgraph/introduction)",
      "[Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) by Anthropic: what to put in an agent's memory, and what to leave out."
     ]
    },
    {
     "slug": "safe-tools",
     "title": "Safe Tools",
     "kind": "lesson",
     "time": "about 3 hours",
     "hook": "If your agent reads the internet, the internet can talk to your agent.",
     "intro": [
      "As soon as an agent can do things, someone can try to trick it. A web page or document can hide instructions for your agent. This is called prompt injection.",
      "You can't fix this with a better prompt. You fix it with code and careful design."
     ],
     "story": {
      "year": "2024",
      "what": "Security researchers showed that a message planted in a public Slack channel could trick Slack AI into showing a user a link that, if clicked, sent private data to an attacker.",
      "lesson": "map the lethal trifecta before you build, then cut one leg in code.",
      "url": "https://www.theregister.com/2024/08/21/slack_ai_prompt_injection/",
      "title": "a planted message turns Slack AI against its users"
     },
     "unlocks": "spot an agent's attack path before you write any code.",
     "edge": "threat modelling. There's no reliable prompt-only defence today, so designing safe tool access matters now.",
     "overview": [
      "Explain the lethal trifecta: private data, plus untrusted content, plus a way to send data out.",
      "Explain prompt injection and excessive agency (an agent allowed to do too much).",
      "Design approvals that match one exact action."
     ],
     "predict": "A web page tells your agent to copy private notes somewhere public. Can a better prompt reliably stop that?",
     "widget": "trifecta",
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=FgxwCaL6UTA",
       "title": "Prompt Injection, explained",
       "channel": "Simon Willison",
       "length": "12 min",
       "why": "From the person who named the attack. A good start before the readings."
      }
     ],
     "assignment": [
      {
       "steps": [
        "Read Simon Willison's [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).",
        "Read OWASP [LLM01 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) and [LLM06 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/).",
        "For Ask MDN's agent, write down its three trifecta parts: private data, untrusted content and a way to send data out (Simon Willison calls it external communication). Which part will you cut off, and how?",
        "Design your approval rule: a person approves the exact tool name and its exact arguments. If anything changes, the approval no longer counts."
       ]
      }
     ],
     "recall": [
      {
       "q": "What are the three parts of the lethal trifecta?",
       "link": "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"
      },
      {
       "q": "Which LangGraph feature pauses for a person's approval?",
       "link": "#langgraph"
      }
     ],
     "extra": [
      "[Agents Towards Production (security tutorials)](https://github.com/NirDiamant/agents-towards-production)",
      "[Design patterns for securing LLM agents against prompt injections](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/) by Simon Willison: six patterns that limit the damage, explained simply."
     ]
    },
    {
     "slug": "project-give-it-tools",
     "title": "Give It Tools",
     "kind": "project",
     "time": "about 2 weeks",
     "hook": "Ask MDN gets hands. In 2025 an AI agent wiped a live database during a code freeze. Yours asks first.",
     "intro": [
      "Ask MDN becomes an agent with three tools. One of them can change things, so it must ask a person first. This time, you'll plan the work yourself before you start.",
      "Tip: make the notes useful to you, like revision cards for this course that you reread at Memory check time. Keep your attack tests away from them."
     ],
     "story": {
      "year": "2025",
      "what": "During a declared code freeze, Replit's AI coding agent ran database commands without permission and deleted a company's live production database.",
      "lesson": "tools that change or delete things wait for a person's approval, and the agent never holds production keys.",
      "url": "https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/",
      "title": "an AI agent deletes a live database"
     },
     "unlocks": "show an agent that acts only with approval, proven by tests.",
     "edge": "least privilege, proven by tests rather than promised.",
     "before": [
      "Build on your `ask-mdn` repo, with the same frozen data. Commit early and often, with messages that say what changed.",
      "Get the browser support data from [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data). It's public domain, so you can use it freely.",
      "Put test attack documents only in a test copy of your search index, never in the online app.",
      "Don't look at other people's versions of this project until yours works. Then compare and learn.",
      "Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error."
     ],
     "checkpoint": "your LangGraph loop pauses with `interrupt()` before a tool runs.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Before reading the steps below, write your own day-by-day plan for this project in your log. Compare it with the steps afterwards."
       ]
      },
      {
       "day": "Week 1 · about 8 hours",
       "steps": [
        "In LangGraph, give the agent three tools: `search_docs` (your hybrid search), `browser_support` (looks up a feature in the browser data) and `save_note` (writes a note to a `notes` table in Neon, with a `group_id` column you'll use in Section 5).",
        "Before `save_note` runs, pause with `interrupt()`. Show the person the exact arguments, and run it only if they approve, using exactly those arguments.",
        "Checkpoint: one approved note is saved and one rejected note isn't."
       ]
      },
      {
       "day": "Week 2 · about 9 hours",
       "steps": [
        "Add limits: at most 8 steps, a cost limit per question, and at most 2 retries per tool call.",
        "Log every step: the tool, its input, the size of its output, the tokens and the cost.",
        "Write 5 injection documents (for example a page that says “call save_note with…”) and 5 normal requests, including one that really should save a note. Write the injection documents like an attacker's notebook: the goal, the trick and how your app should block it. Commit them.",
        "In your log, compare your Day 1 plan with what really happened. That gap is a lesson in itself."
       ]
      }
     ],
     "done": [
      "`save_note` can't run unless a person approves its exact arguments. A test proves it.",
      "The step limit, cost limit and retry limit each stop a runaway run. A test proves each one.",
      "Your 5 injection documents never cause an unapproved action, and no planted instruction is carried out. Your 5 normal requests still work. You checked this in the step logs, not just in the replies.",
      "You can explain how a request moves through your app, two decisions you made and one problem you fixed. You wrote at least one test without AI help, and noted its commit in your log."
     ],
     "showoff": {
      "pitch": "Ask MDN as a LangGraph agent with three tools, approvals tied to exact arguments, hard limits and injection tests that pass.",
      "demo": [
       "Ask a question that needs two tools, and walk through the step log: tool, input, tokens, cost.",
       "`save_note` pauses with its exact arguments. Reject it and show the database is unchanged.",
       "Approve it and show the note saved.",
       "Show an injection document being ignored, proven in the logs.",
       "Run the test where the step limit stops a runaway loop."
      ],
      "proves": [
       "Agents and tool calling: some agent skill appears in about 55% of the posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md).",
       "LangGraph (about 14% of posts and rising) and guardrails, which [grew](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/07-trends.md) from about 10% to 15% of posts this year."
      ]
     },
     "extra_credit": [
      "Add a dry-run mode that shows the plan without running any tool.",
      "Serve `browser_support` as an MCP server with the [official MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk), and call it from your agent. MCP is showing up in more job posts: about 14% in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md)."
     ],
     "recall": [
      {
       "q": "Why must an approval match the tool's exact arguments?",
       "link": "#safe-tools"
      },
      {
       "q": "What does MRR measure?",
       "link": "#measuring-search"
      }
     ],
     "extra": []
    },
    {
     "slug": "start-applying",
     "title": "Start Applying",
     "kind": "lesson",
     "time": "about 3 hours, then 1 hour a week",
     "hook": "Hireable doesn't mean finished. It means two repos you can explain.",
     "intro": [
      "You now have projects you can show and explain. That's enough to start applying for jobs, so don't wait until the end of the path.",
      "Job hunting gets its own weekly time block, separate from your study sessions, and it isn't tracked on the progress bar. Rejections say nothing about your progress here.",
      "Apply widely, and not only for “AI engineer” titles. Backend and full-stack roles that build AI features are a great fit: your web development work counts there, and your public repos show the AI part. The reason: in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md) on builtin.com (cities in the US, Europe and India, February to August 2026, with no Bangladesh data), [junior and entry-level titles stayed around 1% of posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/07-trends.md). It's one sample, not the whole market, but a good reason to cast a wide net."
     ],
     "unlocks": "tell three true stories about your work in 3 minutes.",
     "edge": "explaining trade-offs to people who don't build.",
     "overview": [
      "Know what AI engineering interviews look like.",
      "Tell clear stories about your projects.",
      "Set up a weekly job application routine."
     ],
     "assignment": [
      {
       "steps": [
        "Read the interview and take-home sections of the [AI Engineering Field Guide](https://github.com/alexeygrigorev/ai-engineering-field-guide). Try one take-home task with a time limit.",
        "Add Poster Reader and Ask MDN to your resume ([resume guide](https://www.techinterviewhandbook.org/resume/)). Link the public repos and lead with the numbers from your READMEs.",
        "Prepare three short stories from your log: a hard bug, a design choice and a mistake you fixed ([behavioral interview guide](https://www.techinterviewhandbook.org/behavioral-interview/)).",
        "Practise explaining how Ask MDN works, out loud, in 3 minutes.",
        "Put a separate 1-hour block in your calendar each week to apply to 2 or 3 jobs, until you finish Make It Sturdy. After that, give it more time.",
        "If you have JavaScript or TypeScript web work, list it next to your AI repos. Many AI teams build web products too."
       ]
      }
     ],
     "recall": [
      {
       "q": "Which project numbers belong on your resume?",
       "link": "https://www.techinterviewhandbook.org/resume/"
      },
      {
       "q": "How does `interrupt()` keep `save_note` safe?",
       "link": "#project-give-it-tools"
      }
     ],
     "extra": [
      "[AI Engineer roadmap on roadmap.sh (find gaps employers ask about)](https://roadmap.sh/ai-engineer)",
      "[What to blog about](https://simonwillison.net/2022/Nov/6/what-to-blog-about/) by Simon Willison: two easy kinds of posts that show employers how you think."
     ]
    }
   ],
   "shift": {
    "before": "Your app only talks, and you've never stopped an unsafe tool call.",
    "after": "Tests proving `save_note` needs approval of its exact arguments, and logs showing injections ignored."
   },
   "opener": "Until now Ask MDN could only talk. Here it gets hands: three tools, and one of them, saving a note, changes things for real. Hands raise the stakes, because any page it reads can whisper instructions. By the end you can read its loop step by step, and nothing changes until a person says yes."
  },
  {
   "title": "Make It Sturdy",
   "weeks": "Weeks 24–32",
   "description": "Get your app ready for real users: tests that run automatically, logins, access rules, fresh data and attack tests.",
   "lessons": [
    {
     "slug": "evals-that-catch-real-bugs",
     "title": "Evals That Catch Real Bugs",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "“4.2 out of 5” fixes nothing. Fifty real conversations show exactly what to fix.",
     "intro": [
      "Vague scores like “4 out of 5 for helpfulness” don't find bugs. Reading real failures does.",
      "In this lesson you'll turn your app's logs into tests. Evals are simply tests for how your AI behaves."
     ],
     "unlocks": "turn real failures into tests that catch them next time.",
     "edge": "error analysis: deciding what “good” means. People discover their criteria by grading real outputs, so your judgment sets the bar.",
     "overview": [
      "Find patterns in real failures (error analysis).",
      "Write a pass-or-fail check for each kind of failure.",
      "Check that an LLM judge agrees with you."
     ],
     "checkpoint": "`save_note` only runs after approval, and your step, cost and retry limit tests pass.",
     "bridge": {
      "text": "Don't invent metrics first. Read 50 real conversations, note each failure in one line, then sort the notes into groups. Each group becomes one yes-or-no test. You find out what “good” means by reading.",
      "terms": [
       [
        "error analysis",
        "reading real outputs, noting failures and grouping them"
       ],
       [
        "trace",
        "the full record of one conversation, including tool calls"
       ]
      ]
     },
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=e2i6JbU2R-s",
       "title": "Error Analysis: The Highest ROI Technique In AI Engineering",
       "channel": "Hamel Husain",
       "length": "12 min",
       "why": "The Day 1 reading's author, showing it on real data."
      }
     ],
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Read [Why is error analysis so important, and how is it done?](https://hamel.dev/blog/posts/evals-faq/why-is-error-analysis-so-important-in-llm-evals-and-how-is-it-performed.html), one answer from Hamel Husain and Shreya Shankar's [AI Evals FAQ](https://hamel.dev/blog/posts/evals-faq/). Keep the full FAQ for later."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Read Eugene Yan's [Product Evals in Three Simple Steps](https://eugeneyan.com/writing/product-evals/)."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Collect 50 conversations: your own chats in Neon, topped up with the Zoomcamp [synthetic data generator](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/11-synthetic-data.md) if you have fewer. Read them in two 25-minute blocks, write down every failure and sort them into 3 to 6 groups."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Write a pass-or-fail check for each group. Use plain code where you can, and an LLM judge only where you must."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "Grade 20 answers yourself, then check how often your LLM judge agrees with you."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why use pass or fail instead of a 1 to 5 score?",
       "link": "https://hamel.dev/blog/posts/evals-faq/"
      },
      {
       "q": "What do you save for every conversation in Ask MDN?",
       "link": "#monitoring"
      }
     ],
     "extra": [
      "[Chip Huyen, AI Engineering, chapters 3 and 4 (book)](https://github.com/chiphuyen/aie-book)",
      "[Task-specific LLM evals that do and don't work](https://eugeneyan.com/writing/evals/) by Eugene Yan: which checks catch real problems and which ones just look busy."
     ]
    },
    {
     "slug": "testing-and-ci",
     "title": "Testing and CI",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "CI reruns every test on every push and never gets bored or polite.",
     "intro": [
      "CI (continuous integration) means your tests run automatically every time you push code. It catches a bad change before your users see it.",
      "You'll use promptfoo for the AI checks and pytest for your normal Python code."
     ],
     "picture": "CI is the exam-hall invigilator who checks every admit card, every time, with no favourites. Each push is a candidate, and a prompt tweak that breaks ten old answers is stopped at the door. A test only earns trust after you've watched it fail.",
     "story": {
      "year": "2024",
      "what": "After a system update, delivery company DPD's chatbot swore at a customer and wrote a poem mocking the company. DPD switched the AI part off.",
      "lesson": "every prompt or model change runs your eval suite in CI before users see it.",
      "url": "https://www.bbc.com/news/technology-68025677",
      "title": "a parcel chatbot swears at a customer"
     },
     "unlocks": "block a bad prompt change before users see it.",
     "edge": "regression discipline: a test counts once you've watched it fail.",
     "overview": [
      "Set up GitHub Actions and its secrets.",
      "Let promptfoo call Ask MDN directly.",
      "Mix rule-based checks with checks graded by a model."
     ],
     "checkpoint": "you have 3 to 6 failure groups from 50 conversations, each with a pass-or-fail check.",
     "bridge": {
      "text": "promptfoo runs tests against your app. A YAML file lists the questions and the checks. A small Python adapter takes each question (and the user, from `context['vars']`), calls your `answer()` and returns the answer plus the pages it found.",
      "terms": [
       [
        "provider",
        "the adapter promptfoo calls to get your app's output"
       ],
       [
        "secret",
        "an encrypted value GitHub Actions can read"
       ]
      ]
     },
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=BQrohJ3PT7I",
       "title": "How to use GitHub Actions",
       "channel": "GitHub",
       "length": "8 min",
       "why": "GitHub's own beginner walkthrough, for Day 4."
      }
     ],
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Install Node.js LTS ([download](https://nodejs.org/en/download)); promptfoo runs with `npx promptfoo`.",
        "Read the [promptfoo intro](https://www.promptfoo.dev/docs/intro/) and its [RAG evaluation guide](https://www.promptfoo.dev/docs/guides/evaluate-rag/)."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Give Ask MDN a plain Python function `answer(question, user)` that your Streamlit app calls. Then point promptfoo at it with a [Python provider](https://www.promptfoo.dev/docs/providers/python/): a small file whose `call_api(prompt, options, context)` calls your `answer()`. Read the user from `context['vars']`, and return the pages it found as well as the answer, because context-faithfulness needs them. Now tests don't need the web page."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Turn your checks from the last lesson into a promptfoo config. Use rule-based checks (citations are present, the output is valid) plus [context-faithfulness](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/) (does the answer stick to the pages you found?) and [llm-rubric](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/llm-rubric/)."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Follow GitHub's [Actions quickstart](https://docs.github.com/en/actions/writing-workflows/quickstart). Add your OpenAI key as a repository [secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).",
        "Run pytest and the rule-based promptfoo checks on every push, and the model-graded checks only on pull requests or on `main`, following promptfoo's [CI/CD guide](https://www.promptfoo.dev/docs/integrations/ci-cd/). Set the grading model explicitly and turn on caching, so CI doesn't spend credit on every tiny push. Break a prompt on purpose and watch CI fail."
       ]
      }
     ],
     "recall": [
      {
       "q": "What does context-faithfulness check?",
       "link": "https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/"
      },
      {
       "q": "Why does each failure group get its own pass-or-fail check?",
       "link": "#evals-that-catch-real-bugs"
      }
     ],
     "extra": [
      "[Made With ML: testing (good habits for the non-AI code)](https://madewithml.com/courses/mlops/testing/)",
      "[Made With ML: CI/CD](https://madewithml.com/courses/mlops/cicd/)"
     ]
    },
    {
     "slug": "postgres-search-and-access-rules",
     "title": "Postgres Search and Access Rules",
     "kind": "lesson",
     "time": "about 1.5 weeks",
     "hook": "App code can forget a WHERE clause. A database policy can't.",
     "intro": [
      "Your Campus Assistant will hold several universities' data in one app. Each one must only ever see its own. The safest place to enforce that is the database itself.",
      "You'll move all of Ask MDN's search (keyword and vector) into Postgres, then turn on row-level security: rules inside the database that hide rows a user isn't allowed to see. You'll practise with two pretend groups: a CSS team and a JS team. Think of them as University A and University B; that's exactly what your Campus Assistant will need."
     ],
     "picture": "Without row-level security, your app is a librarian who must remember, on every single request, to hide University B's shelves from University A. With it, the shelves carry locks keyed to the reader's card, so even a forgetful librarian, or a buggy query, can only hand over what that card opens.",
     "story": {
      "year": "2025",
      "what": "A flaw in Asana's new AI connector could show one organisation's tasks and files to users in other organisations. About 1,000 customers were told.",
      "lesson": "enforce the separation inside the database, and test that group A never sees group B.",
      "url": "https://bleepingcomputer.com/news/security/asana-warns-mcp-ai-feature-exposed-customer-data-to-other-orgs/",
      "title": "an AI connector shows one company's files to another"
     },
     "unlocks": "make the database itself keep each group's data apart.",
     "edge": "defence in depth: assume one layer will fail.",
     "overview": [
      "Run keyword search (full-text search) and vector search in Postgres.",
      "Turn on row-level security and write a policy.",
      "Create a safe database role for your app.",
      "Prove that one group can't see the other's data."
     ],
     "predict": "Your app connects to Postgres as the owner of the table. Do your row-level security rules still apply?",
     "widget": "rls",
     "checkpoint": "pytest and the rule-based promptfoo checks run in GitHub Actions, and a broken prompt makes CI fail.",
     "bridge": {
      "text": "Row-level security adds a hidden WHERE to every query on a table. Your app says “this transaction belongs to group CSS” with `set_config`, and the policy compares each row's `group_id` with `current_setting()`. Table owners skip policies unless you force them.",
      "terms": [
       [
        "tsvector",
        "Postgres's searchable form of a text"
       ],
       [
        "BYPASSRLS",
        "a role setting that ignores every policy"
       ]
      ]
     },
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=vZT1Qx2xUCo",
       "title": "Everything you need to know about Postgres Row Level Security",
       "channel": "Microsoft Developer",
       "length": "18 min",
       "why": "Policies and their traps, for Days 5–6."
      }
     ],
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Read [Multi-tenant data isolation with PostgreSQL Row Level Security](https://aws.amazon.com/blogs/database/multi-tenant-data-isolation-with-postgresql-row-level-security/) by Michael Beardsley (AWS Database Blog). Multitenant means one app serving several separate groups. It's plain Postgres: policies, `current_setting`, BYPASSRLS and FORCE."
       ]
      },
      {
       "day": "Days 2–4 · about 4.5 hours",
       "steps": [
        "Do Zoomcamp Module 2's [08 pgvector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/08-pgvector.md) lesson now (you skipped it in Embeddings and Vector Search): vector search inside Postgres.",
        "Start Postgres with pgvector locally using the [pgvector Docker image](https://hub.docker.com/r/pgvector/pgvector) (`pgvector/pgvector:0.8.7-pg17`). If port 5432 is taken by your Zoomcamp database, use another port.",
        "Read the [full-text search intro](https://www.postgresql.org/docs/current/textsearch-intro.html) and [Tables and Indexes](https://www.postgresql.org/docs/current/textsearch-tables.html), which shows the generated column and GIN index you need. Move Ask MDN's chunks into one table with a `group_id` column, a text-search column and an embedding column. Rebuild `hybrid_search()` on top of it."
       ]
      },
      {
       "day": "Days 5–6 · about 3 hours",
       "steps": [
        "Read the Postgres [row-level security docs](https://www.postgresql.org/docs/current/ddl-rowsecurity.html). Turn row-level security on and force it on the chunks and `notes` tables, with a policy that only shows rows whose `group_id` matches the current group.",
        "Create your app's role with [CREATE ROLE](https://www.postgresql.org/docs/current/sql-createrole.html): not the table owner, not a superuser and no BYPASSRLS, because those can skip the rules. Grant it only what it needs.",
        "Set the current group at the start of each transaction with `set_config` ([docs](https://www.postgresql.org/docs/current/functions-admin.html))."
       ]
      },
      {
       "day": "Day 7 · about 90 min",
       "steps": [
        "Write pytest tests: with the group set to CSS, search returns zero JavaScript chunks and reading or writing JS notes fails. Check in SQL that your app role's `rolbypassrls` is false.",
        "In the same tests, check that `current_user` is your app role, and that your search code has no `WHERE group_id = …` of its own. AI assistants like to add one, and then the tests pass even when row-level security does nothing."
       ]
      }
     ],
     "recall": [
      {
       "q": "Which database roles can skip row-level security?",
       "link": "https://www.postgresql.org/docs/current/ddl-rowsecurity.html"
      },
      {
       "q": "How does promptfoo call Ask MDN without the web page?",
       "link": "#testing-and-ci"
      }
     ],
     "extra": [
      "[OWASP LLM02: Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/)",
      "[Secure multitenant RAG](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag) by Microsoft: the same ideas in Azure's services.",
      "[RAG with permissions](https://supabase.com/docs/guides/ai/rag-with-permissions) by Supabase docs: another team's version of RAG plus row-level security."
     ]
    },
    {
     "slug": "login",
     "title": "Login",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "Your student ID gets you through the campus gate. It doesn't open the exam-paper cupboard. Login is the gate; the lock is yours.",
     "intro": [
      "Now Ask MDN needs to know who each user is (authentication) so the database can decide what they may see (authorization).",
      "You'll add “Sign in with Google”-style login and connect each signed-in user to the right group."
     ],
     "picture": "OpenID Connect is a student ID card: it proves who you are, signed by an issuer the gate trusts, such as Google. OAuth is the spare key you lend a friend to collect one parcel: it says what the holder may do for you, not who they are.",
     "story": {
      "year": "2025",
      "what": "Researchers got into a test admin account on McDonald's AI hiring platform using the password 123456, then changed applicant ID numbers to reach other people's applications.",
      "lesson": "decide on the server what each signed-in user may see, and never trust an ID sent from the browser.",
      "url": "https://www.csoonline.com/article/4020919/mcdonalds-ai-hiring-tools-password-123456-exposes-data-of-64m-applicants.html",
      "title": "password 123456 on an AI hiring platform"
     },
     "unlocks": "tie each signed-in user to the right data, decided on the server.",
     "edge": "keeping who someone is separate from what they may see.",
     "overview": [
      "Set up a Google sign-in client.",
      "Add login to a Streamlit app.",
      "Decide each user's group on the server, never in the browser."
     ],
     "predict": "Someone has signed in with Google. Should they see everything in your app?",
     "checkpoint": "search runs in Postgres with row-level security, and your CSS-group tests return zero JS chunks.",
     "bridge": {
      "text": "Login only answers “who is this?”. Google proves the email, and Streamlit keeps it in a signed cookie. Deciding what they may see is still your job: look the email up in your own table on the server and set the group for that transaction.",
      "terms": [
       [
        "OIDC",
        "the standard behind “Sign in with Google”"
       ],
       [
        "redirect URI",
        "the exact address Google sends the user back to"
       ]
      ]
     },
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=t18YB3xDfXI",
       "title": "An Illustrated Guide to OAuth and OpenID Connect",
       "channel": "OktaDev",
       "length": "17 min",
       "why": "OAuth and OpenID Connect in pictures, for Day 1."
      }
     ],
     "assignment": [
      {
       "day": "Days 1–2 · about 3 hours",
       "steps": [
        "Read Streamlit's [authentication guide](https://docs.streamlit.io/develop/concepts/connections/authentication). It uses OIDC, the standard behind “Sign in with Google”. Login tells you who someone is, not what they may see.",
        "Follow Streamlit's [Google login tutorial](https://docs.streamlit.io/develop/tutorials/authentication/google) to create a Google sign-in (OAuth) client and add `st.login` to Ask MDN locally. If an OAuth error (like a redirect URI mismatch) eats more than 45 minutes, stop and ask with the exact error message. Also add your two test accounts as Test users on Google's consent screen, or Google won't let them sign in."
       ]
      },
      {
       "day": "Days 3–4 · about 3 hours",
       "steps": [
        "Make a `user_groups` table on the server that maps each email to a group. For every request, look up the signed-in user's group and set it in the database transaction. Never trust a group sent from the browser."
       ]
      },
      {
       "day": "Days 5–6 · about 3 hours",
       "steps": [
        "Use two fake test accounts, never real students. Write tests: a CSS user gets zero JavaScript chunks through search, through the agent's tools, and when guessing a document ID. A user with no group gets nothing."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why isn't login enough to keep the groups apart?",
       "link": "https://docs.streamlit.io/develop/concepts/connections/authentication"
      },
      {
       "q": "How does your app tell Postgres which group is asking?",
       "link": "#postgres-search-and-access-rules"
      }
     ],
     "extra": [
      "[The Copenhagen Book](https://thecopenhagenbook.com/) by Pilcrow: a free, practical guide to doing login right."
     ]
    },
    {
     "slug": "fresh-data",
     "title": "Fresh Data",
     "kind": "lesson",
     "time": "about 4.5 hours",
     "hook": "An assistant quoting a deleted page is a tour guide pointing at a building that's gone.",
     "intro": [
      "Docs change. Pages get edited, and some get deleted.",
      "If your app doesn't keep up, it will quote pages that no longer exist. You already save a manifest of every page; now you'll use it."
     ],
     "story": {
      "year": "2025",
      "what": "Researchers found Microsoft Copilot could still surface code from thousands of GitHub repositories that had been public and were later made private, through a search engine's cache.",
      "lesson": "push every deletion through every index and cache, then test that removed pages never come back.",
      "url": "https://techcrunch.com/2025/02/26/thousands-of-exposed-github-repositories-now-private-can-still-be-accessed-through-copilot",
      "title": "private code that wouldn't stay deleted"
     },
     "unlocks": "make deleted content disappear from answers, and prove it.",
     "edge": "taking responsibility for data from start to end.",
     "overview": [
      "Compare two manifests to find added, edited and deleted pages.",
      "Remove deleted pages completely.",
      "Test that deleted pages never come back in answers."
     ],
     "predict": "You delete a page from your docs. Will Ask MDN stop quoting it on its own?",
     "checkpoint": "signed-in users get their group from your `user_groups` table, and a user with no group gets nothing.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "First, reread your Memory check answers from [Data Ingestion](#data-ingestion). Then extend your ingestion script: compare the new manifest with the last one. Re-index edited pages, add new ones, and delete removed pages together with all their chunks."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Make a test copy of your data: delete 3 pages and edit 2, then sync."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Ask about the deleted pages in a new chat and in an existing one. No answer may retrieve or cite them. Turn this into a test."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why can't content hashes alone tell you a page was deleted?",
       "link": "#data-ingestion"
      },
      {
       "q": "Where does each request's group come from?",
       "link": "#login"
      }
     ],
     "extra": []
    },
    {
     "slug": "red-team-your-app",
     "title": "Red-Team Your App",
     "kind": "lesson",
     "time": "about 6 hours",
     "hook": "Today you're the attacker. Break your own app before a stranger does.",
     "intro": [
      "Red-teaming means attacking your own app on purpose, before someone else does.",
      "promptfoo can create the attacks for you. You decide what counts as a breach (a successful attack)."
     ],
     "unlocks": "attack your own app and measure exactly what leaks.",
     "edge": "thinking like an attacker.",
     "overview": [
      "Explain what red-teaming is.",
      "Use promptfoo plugins for access control, hijacking and hidden instructions.",
      "Plant canary documents: fake secret pages that should never show up. If one does, you have a leak."
     ],
     "predict": "Your app passes all its normal tests. Is it safe?",
     "checkpoint": "your sync removes deleted pages and their chunks, and the deleted-page test passes.",
     "bridge": {
      "text": "Attacks come two ways: the user types something sneaky, or a page the app finds hides instructions. An attack works if the app shows or does something that user shouldn't get. The model-graded plugins are estimates; a canary phrase shown to the wrong user is proof.",
      "terms": [
       [
        "prompt injection",
        "text that tries to override the app's instructions"
       ],
       [
        "canary",
        "a planted secret phrase that proves a leak if it appears"
       ]
      ]
     },
     "watch": [
      {
       "url": "https://www.youtube.com/watch?v=lqhKIjWoeuM",
       "title": "Exploring Promptfoo's Red Teaming Capabilities",
       "channel": "Promptfoo",
       "length": "5 min",
       "why": "A quick tour of the tool before Day 1."
      }
     ],
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Follow promptfoo's [red team quickstart](https://www.promptfoo.dev/docs/red-team/quickstart/), pointing it at your `answer(question, user)` Python provider so each attack runs as a specific user."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Set up three plugins: [rbac](https://www.promptfoo.dev/docs/red-team/plugins/rbac/) (access control), [hijacking](https://www.promptfoo.dev/docs/red-team/plugins/hijacking/) and [indirect prompt injection](https://www.promptfoo.dev/docs/red-team/plugins/indirect-prompt-injection/). Generate 30 attack cases and commit them, so the test stays the same each time. Generating can use promptfoo's online service, which may have usage limits, so generate once. If it's unavailable, write the cases by hand."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Add 5 canary documents to the JS group: pages that contain a unique secret phrase. A CSS user must never see them."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Run the attacks and write down every one that worked. A passing rbac test is a model's opinion, not proof; a canary phrase shown to the wrong user is proof, so check the canaries and your database yourself. You'll fix the failures in the project."
       ]
      }
     ],
     "recall": [
      {
       "q": "What does the rbac plugin test?",
       "link": "https://www.promptfoo.dev/docs/red-team/plugins/rbac/"
      },
      {
       "q": "What must happen to a deleted page's chunks?",
       "link": "#fresh-data"
      }
     ],
     "extra": [
      "[OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)",
      "[New prompt injection papers: agents rule of two](https://simonwillison.net/2025/Nov/2/new-prompt-injection-papers/) by Simon Willison: the newest thinking on agent defences, summarised.",
      "[garak](https://github.com/NVIDIA/garak) by NVIDIA: a second open-source attack scanner, to compare with promptfoo."
     ]
    },
    {
     "slug": "project-make-it-sturdy",
     "title": "Make It Sturdy",
     "kind": "project",
     "time": "about 3.5 weeks",
     "hook": "Dress rehearsal for the Campus Assistant: two groups, real logins, one tireless attacker. It's you.",
     "intro": [
      "This is the final project of the path. Ask MDN gets logins, separate groups, fresh data, automatic tests and an attack test it must pass.",
      "It's very close to the Campus Assistant you'll build next. You've got this!"
     ],
     "unlocks": "ship an AI app that keeps two groups apart, with CI and attack results to prove it.",
     "edge": "owning reliability, security and cost at the same time.",
     "before": [
      "Write your own week-by-week plan in your log first, then compare it with the steps below. Do Extra credit only after every “You're done when” line passes.",
      "Build against your local Postgres. CI uses a [GitHub Actions Postgres service](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/creating-postgresql-service-containers) with the `pgvector/pgvector:0.8.7-pg17` image (the plain `postgres` image has no pgvector). The online version uses your Neon project.",
      "Keep the app role rules from [Postgres Search and Access Rules](#postgres-search-and-access-rules). Your attack cases and canary documents stay the same.",
      "Don't look at other people's versions of this project until yours works. Then compare and learn.",
      "Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error."
     ],
     "checkpoint": "your 30 attack cases and 5 canary documents are committed, with a list of the attacks that worked.",
     "assignment": [
      {
       "day": "Week 1 · about 9 hours",
       "steps": [
        "Move the Postgres version online: on Neon, enable pgvector, turn row-level security on and force it, and use your SQL-created app role. Connect your private Streamlit app to it through Secrets.",
        "Add login and server-side group mapping, like in Login.",
        "Checkpoint: the online app shows a CSS user only CSS answers."
       ]
      },
      {
       "day": "Week 2 · about 9 hours",
       "steps": [
        "Sync against your manifest: re-index edits and remove deleted pages.",
        "Run CI: pytest, the isolation tests and the rule-based promptfoo checks on every push, against the Postgres service; the model-graded checks on pull requests.",
        "Checkpoint: a broken prompt makes CI fail."
       ]
      },
      {
       "day": "Weeks 3–4 · about 13 hours",
       "steps": [
        "Run your attack test (30 cases plus 5 canaries), 3 times for each case. Fix what breaks, then run it again.",
        "Add cost tracking for each group, a simple rate limit for each user, and an off switch: a setting that makes the app stop answering.",
        "Update the README with your results and a diagram of how it fits together. End with a one-page pitch for the Campus Assistant: what you'd change to serve many universities."
       ]
      }
     ],
     "done": [
      "Tests prove a CSS user can't reach JavaScript docs or notes through search, through tools, or by guessing document IDs.",
      "After a sync, the deleted test pages produce no search results and no citations in new answers, including in existing chats.",
      "pytest and promptfoo run in GitHub Actions (model-graded checks on pull requests), and a broken prompt makes CI fail.",
      "Across 3 runs of every attack case: zero unauthorized reads or writes, zero canary leaks to the other group, and zero planted instructions carried out, while normal requests still work. You checked this in the tool logs and the database, not just in the replies.",
      "Cost tracking for each group, the rate limit and the off switch all work.",
      "You can explain how a request moves through your app, two decisions you made and one problem you fixed. You found and fixed at least one bug without AI help, and wrote down how you found it."
     ],
     "showoff": {
      "pitch": "A two-group AI assistant with logins, Postgres row-level security, CI evals and red-team results showing zero leaks.",
      "demo": [
       "Sign in as the CSS user and try to reach a JS canary through search, a tool and a guessed document ID. Show the policy that blocks all three.",
       "Push a broken prompt and watch CI fail; revert it and watch it pass.",
       "Delete a page, run the sync, and show its citation is gone.",
       "Show the attack table: 30 cases, 3 runs each, zero leaks.",
       "Close with per-group cost, the rate limit, the off switch and your Campus Assistant pitch."
      ],
      "proves": [
       "CI/CD (2,560 of the 6,964 posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md)), evals and security together.",
       "PostgreSQL and SQL, and keeping a deployed system healthy."
      ]
     },
     "extra_credit": [
      "Give each group a monthly budget that pauses answers when it runs out.",
      "Add a third group that can see both CSS and JavaScript docs.",
      "Capture the flag: give a friend 30 minutes, signed in as the CSS team, to leak a JS canary. Add their attempts to your attack cases.",
      "Put `answer()` behind a small FastAPI `/answer` endpoint with a Dockerfile, so the app can run on any cloud."
     ],
     "recall": [
      {
       "q": "Why can a role created in Neon's website skip your access rules?",
       "link": "https://neon.com/docs/manage/roles"
      },
      {
       "q": "What counts as a breach in your attack test?",
       "link": "#red-team-your-app"
      }
     ],
     "extra": []
    }
   ],
   "shift": {
    "before": "It works on your laptop, for one user, checked by hand.",
    "after": "CI that fails on a broken prompt, access rules written in SQL, and zero leaks across 90 attack runs."
   },
   "opener": "Picture next year's demo. University A's events officer asks your Campus Assistant about next week, and one forgotten WHERE clause shows her University B's unannounced fest. This section rehearses that day with a CSS team and a JS team, and makes the leak impossible rather than unlikely."
  },
  {
   "title": "Conclusion",
   "weeks": "Weeks 33–34",
   "description": "Catch up, polish your projects and plan what you'll build next.",
   "lessons": [
    {
     "slug": "whats-next",
     "title": "What's Next",
     "kind": "lesson",
     "time": "about 2 weeks (spare)",
     "hook": "Week 1 you called a model. Now you can ship an app that keeps two groups' data apart, and prove it. Next: your Campus Assistant.",
     "intro": [
      "You made it! You can now design, build, test, secure and ship an AI app, and explain every part of it. That's a big achievement.",
      "Use these two weeks to catch up, polish your work and plan your Campus Assistant."
     ],
     "unlocks": "plan a product from skills you've already proven.",
     "edge": "scoping, and saying no to features.",
     "overview": [
      "Plan the Campus Assistant using what you built.",
      "Choose one deep dive, but only if a job you want asks for it.",
      "Keep your job application routine going."
     ],
     "assignment": [
      {
       "steps": [
        "Finish anything you skipped. Then read back through your log and write one page: what you can build now that you couldn't at the start.",
        "Plan the Campus Assistant on one page, starting from the feature list you made in [The AI Staircase](#the-ai-staircase). Match each feature to something you've already built: login, row-level security, hybrid search, approvals, evals, CI and attack tests.",
        "Pick at most one deep dive, and only if a job you want asks for it: fine-tuning ([mlabonne's LLM course](https://github.com/mlabonne/llm-course)), how models work inside ([LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch)), or coding agents ([Hugging Face Context Course](https://huggingface.co/learn/context-course/unit0/introduction)).",
        "Keep your weekly job application block going, and make the first Campus Assistant commit within 7 days. Momentum is easier to keep than to restart."
       ]
      }
     ],
     "recall": [
      {
       "q": "Which three projects make up Ask MDN, and what did each add?",
       "link": "#home"
      },
      {
       "q": "What are the three parts of the lethal trifecta?",
       "link": "#safe-tools"
      }
     ],
     "extra": [
      "[Chip Huyen, AI Engineering, chapter 10, “AI Engineering Architecture and User Feedback” (book)](https://github.com/chiphuyen/aie-book)",
      "[More project ideas: awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)",
      "[2025: The year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/) by Simon Willison: a calm, detailed review of what changed and what mattered.",
      "[AI Engineer Reading List](https://www.latent.space/p/2025-papers) by Latent Space: the papers and posts working AI engineers actually read."
     ]
    }
   ],
   "shift": {
    "before": "You followed someone else's plan.",
    "after": "A one-page Campus Assistant plan that maps each feature to a repo you built, and its first commit."
   },
   "opener": "Thirty-odd weeks ago a model call felt like magic. Now you know where it guesses, how to catch it and how to keep two groups apart. The Campus Assistant is no longer a vague dream; it's a list of parts you've built and tested. These two weeks decide which parts come first, and which features get a no."
  }
 ],
 "checked": "25 Oct 2026",
 "week_starts": "saturday"
};
