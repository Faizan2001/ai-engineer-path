// AI Engineer Path: all course content lives in this file.
// Edit any text, save, and refresh the page. No build step is needed.
// Inside text you can use: [label](https://link), [label](#lesson-slug), **bold**, `code`.
// Lessons appear in the order below. Every lesson needs a unique "slug"; don't rename slugs
// after you've started, because saved progress is stored by slug.
// "repo", "site" and "community" feed the GitHub and Community buttons. Change them if you fork this.
window.COURSE = {
 "title": "AI Engineer Path",
 "duration": "about 36 weeks",
 "tagline": "A step-by-step path from your first AI model call to a deployed app with evaluations, access controls and tests.",
 "repo": "https://github.com/Faizan2001/ai-engineer-path",
 "site": "https://faizan2001.github.io/ai-engineer-path/",
 "community": "https://datatalks.club/slack.html",
 "intro": [
  "This path is for a software developer learning to build with existing AI models. You will practise reliable model calls, RAG, agents, evaluation and deployment in four projects; the last three grow into one app. The finish line is an independently tested small AI application. Model training, research and large-scale platform engineering need further study.",
  "It works like The Odin Project. Each lesson points you to the best free material for one topic, then asks you to build something with it. You learn by building, breaking things and fixing them.",
  "Every lesson tells you what it unlocks and which engineering judgment it practises. Some begin with a 2-minute experiment: make a prediction, check it, then explain what changed your mind. You do not have to memorise API syntax."
 ],
 "how": [
  "Study about 9 hours a week, in sessions of about 90 minutes: roughly 30 minutes learning, 45 building and 15 writing in your log. Set a weekly target on this page. It counts sessions, never a daily streak.",
  "Plan about 36 weeks at 9 hours a week, with spare time for breaks and consolidation. Allow 2–4 more weeks if prerequisite repair, deployment or debugging needs it. Follow the checks, not a deadline; the project work matters more than the calendar.",
  "Long lessons are split into **Day** steps. Tick each Day as you finish it, and stop at the end of a Day. Missed a few days? Reread your last log entry, then do the smallest next step. Low on energy? A 15-minute session still counts.",
  "Finish each lesson's **Memory check** before marking it complete. Explain the idea without looking, compare with the feedback or source, and correct missing pieces. Retry a missed question at the next session. For projects, show the working evidence in “You're done when”; a tick alone is not a skill test.",
  "Your coding assistant is welcome, but every project raises the bar on work you do by hand: one change, then one function, then one test, then one bug fixed without AI. [Mindset and Asking for Help](#mindset-and-asking-for-help) explains why.",
  "Cost: the learning materials are free; model calls and some hosting options can cost money. Set your own API budget, price each experiment before running it, and use fake responses for routine tests. You do not need accounts with three model providers. [Setting Up Your Tools](#setting-up-your-tools) includes a free-tier fallback. There is no course certificate; your projects and independent checks provide the evidence.",
  "On mobile data, or expecting a power cut? Open the next lesson's links on Wi-Fi first. Videos are always optional and show their length.",
  "Assignments are the required path. Videos can help an idea click; Additional resources and Extra credit are optional. Use the materials named for the current step, then build. If two sessions end in the same confusion, pause new material and repair that prerequisite with a smaller example.",
  "Already started? The [provider and university comparison](https://github.com/Faizan2001/ai-engineer-path/blob/main/PROVIDER-UNIVERSITY-REVIEW.md) lists the added practice by lesson. Keep your saved progress; revisit only additions to lessons you have finished."
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
     "hook": "One lesson, one checked result, one small next step. That is enough for today.",
     "intro": [
      "Welcome! This path takes you from your first AI model call to a small deployed app you can evaluate, debug and explain.",
      "Each lesson points you to free material, then gives you something to build. Please don't skip the building. That's where the real learning happens."
     ],
     "unlocks": "restart after any break with one small step.",
     "edge": "running your own learning loop. You can reuse it for every new tool you meet.",
     "overview": [
      "Explain the finish line and what this path assumes you already know.",
      "Choose a study rhythm and distinguish required work from optional reading.",
      "Leave a short restart note and use it after a break."
     ],
     "assignment": [
      {
       "steps": [
        "Look over the [course page](#home). There are 6 sections and 4 projects. The whole path takes about 36 weeks.",
        "Pick your study days and a fixed time, and put them in your calendar. Aim for about 9 hours a week: 6 sessions of 90 minutes, or fewer, longer ones. Set the same number as your weekly target on the [course page](#home). It counts sessions per week, never a daily streak.",
        "Create a private GitHub repository called `ai-learning-log` and add `log.md`. Keep your personal notes there; this public course already uses the name `ai-engineer-path`. Each project gets its own public repo later.",
        "Use a 90-minute session as a flexible guide: about 30 minutes learning, 45 building and 15 checking your work and making a short log entry. Take breaks when needed. End with two lines: one result you checked, and the exact file or next 10-minute action to resume.",
        "Add three rules to your log. After a break: “Check my last result, then take one small next step.” Low energy: “15 minutes of review counts; it does not need to finish a lesson.” Stuck: “After 20 minutes without a useful clue, reduce the problem, check the docs, then ask with my attempt and exact error.” If two sessions end at the same obstacle, revisit only the missing prerequisite; do not restart the whole course.",
        "Mark exams, Ramadan, Eid and family events in your calendar now. Use shorter sessions in those weeks. The final two weeks include consolidation and a small independent exercise; longer breaks simply move your finish date."
       ]
      }
     ],
     "recall": [
      {
       "q": "How do you decide that a lesson is finished, without memorising every detail?",
       "link": "#how-this-path-works",
       "answer": "Complete the assignment, explain the main idea, and check your result against the lesson criteria. Use documentation for syntax; correct a missed memory question and retry it next session."
      },
      {
       "q": "What do you do first when you come back after missing a few days?",
       "link": "#how-this-path-works",
       "answer": "Read your last checked result and next-action note, try a short recall question, then resume one small step. Repair only a missing prerequisite rather than deleting progress."
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
      "This path targets applied AI engineering: building useful software around existing models. Some AI roles also train or fine-tune models; those need additional practice after this path.",
      "Good news: most of the work is normal software engineering. You load data, call a model, check its answer, test it and watch how it behaves. Your web development skills will help a lot.",
      "Your strongest evidence will be an app you can explain, test and change when the requirements move. Framework names help you find a job listing; the project checks help you show what you can actually do. Completion alone is not a hiring guarantee."
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
        "Choose a goal for after this path. It can be a Campus Assistant for your Events platform, or another small product you care about. The course projects stand on their own; integrating them into your university platform is not required.",
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
        "Copy this rule to your log: “I can trace and check the code I keep.” A [52-developer study](https://www.anthropic.com/research/AI-assistance-coding-skills) found lower immediate quiz scores in its AI-assisted group when learning a new Python library. It does not tell us your long-term outcome. Use AI to explain a concept or offer a hint; predict what your code will do, run it, and explain discrepancies yourself.",
        "If you want a study buddy, post a short hello in Zoomcamp Slack with your weekly goal. You can start alone: at each project, record your demo and seek one specific piece of feedback. If nobody replies, use the project rubric and write one uncertainty to revisit."
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
        "Follow the Zoomcamp [environment lesson](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/02-environment.md): install uv, create a project, put your OpenAI key in a `.env` file and run the test call. Record the package version, model ID and API endpoint that worked. The pinned course examples may use a different API from current docs: check tool, image and structured-output support before changing models. An SDK having a familiar method name does not guarantee provider compatibility.",
        "Make a separate OpenAI project and key just for this path. Keep only a small amount of credit on the account, and turn auto-recharge off if your account uses prepaid credit. Set budget alerts too, and check whether they stop spending or only send a warning.",
        "**Paying from Bangladesh:** OpenAI needs a card that works for international online payments (many banks offer a dual-currency card; ask yours). Add credit $5 at a time. **No such card yet?** Don't stop. Use Google's Gemini free tier through its [OpenAI-compatible endpoint](https://ai.google.dev/gemini-api/docs/openai): change the `base_url`, key and model name. Send only public data, because Google may use free-tier content to improve its products ([pricing page](https://ai.google.dev/gemini-api/docs/pricing)). Expect small differences: its examples use Chat Completions, there's no documented `refusal` field (fake one in your tests), and you'll set promptfoo's grading model yourself. Switch to OpenAI when you can.",
        "Add `.env` to your `.gitignore` file before your first commit, so the key never reaches GitHub."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Install Docker ([get started](https://docs.docker.com/get-started/)) and run `docker run hello-world`. Docker runs programs in their own little boxes called containers. Low on memory or disk space? Use a free [GitHub Codespace](https://docs.github.com/en/codespaces/getting-started/quickstart) instead; it runs in the browser and has Docker built in.",
        "**No AI for this one:** write a script that reads a CSV file, counts the rows for each value in one column and prints the top 3. Stuck for more than 20 minutes? Review the [Python tutorial](https://docs.python.org/3/tutorial/). Check it with six rows whose counts you already know. If files, dictionaries or functions feel unfamiliar, spend up to two extra sessions on those Python tutorial sections and retry with a different CSV. Ask for a hint after 20 stuck minutes. Pass this small check before the model-call assignments; needing the bridge is normal.",
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
     "picture": "Think of your phone's suggestion bar, scaled up enormously. It produces tokens one at a time, using the context to choose what comes next. Attention helps relate words: in “the bank of the river”, river changes how bank is interpreted. This is an intuition for generation, not a complete account of reasoning or planning.",
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
      "text": "A model call predicts tokens from its input and learned patterns. It does not automatically search your files or verify facts. An application can give it tools or retrieved documents; later lessons build that layer. A fluent answer can still be wrong. Pause the video when you need to sketch the process yourself.",
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
       "link": "https://www.youtube.com/watch?v=LPZh9BOjkQs",
       "answer": "A token is a small unit of text, such as part of a word or punctuation. The model predicts possible next tokens from the available context and generates an answer one token at a time."
      },
      {
       "q": "Why should you never put an API key in Git?",
       "link": "#setting-up-your-tools",
       "answer": "An API key can let someone make calls using your account's permissions and credit. Git preserves history, so deleting a key from the latest file does not remove it from earlier commits."
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
        "Choose 3 possible product features. For each, name the user, the problem, the simplest useful solution and one measurable success rule. Include a plain-code baseline. Then sort these failures: missing facts → supply context or retrieval; inconsistent format → schema and validation; repeated task behavior still wrong after prompt/data fixes → consider fine-tuning with a separate test set. Training from scratch is a different project. Keep this one-page brief."
       ]
      }
     ],
     "recall": [
      {
       "q": "What's the difference between a workflow and an agent?",
       "link": "https://www.anthropic.com/engineering/building-effective-agents",
       "answer": "A workflow follows steps and branches defined in code; an agent lets the model choose its next actions or tools within limits set by the application."
      },
      {
       "q": "Why can the same question get different answers from a model?",
       "link": "#how-llms-work",
       "answer": "Generation can sample among several possible next tokens, so the same question can produce different wording or answers. Temperature affects this randomness; a plausible answer is not necessarily correct."
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
     "time": "about 7.5 hours",
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
      "Build a small form with Streamlit and test your code with pytest.",
      "Improve a prompt by changing one thing and checking the same examples."
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
        "Read the [error codes guide](https://developers.openai.com/api/docs/guides/error-codes). Add a request timeout and at most 2 retries for retryable rate-limit/server errors. Respect Retry-After when supplied; otherwise use increasing waits with a little randomness. Keep an overall deadline too. Do not retry invalid credentials or bad requests unchanged.",
        "Handle refusals: log them and return “needs a human” instead of crashing."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Follow pytest's [getting started guide](https://docs.pytest.org/en/stable/getting-started.html), then write 3 tests for your code: one with good input, one with a missing field and one with a refusal.",
        "Follow Streamlit's [get started](https://docs.streamlit.io/get-started) page, then show your `Event` in a small [form](https://docs.streamlit.io/develop/api-reference/execution-flow/st.form) with a Save button."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "Spend 15 minutes on Anthropic’s [Providing examples](https://academy.claude.com/courses/building-with-the-claude-api/providing-examples). Use the explanation or video; the exercise works with your existing provider. Few-shot prompting means showing a small number of input/output examples.",
        "Make 6 practice inputs, including an ambiguous date and a missing venue. Save prompt v1. Change only one thing: clearer instructions OR two examples. Run both versions on the same inputs with the same model and settings. Keep the raw outputs and mark each field correct, wrong or appropriately unknown. Better formatting is not evidence of better facts.",
        "Keep the better version only if the results support it. Write the model ID, prompt version, settings and cost beside the scores. If the six cases are tied, say so. These are practice cases; they do not replace Poster Reader’s held-back posters."
       ]
      }
     ],
     "recall": [
      {
       "q": "How do you tell whether a prompt change helped?",
       "answer": "Change one factor, use the same practice cases and scoring rule, keep both outputs, and compare failures as well as successes. Then use untouched cases for the later final check. A schema checks shape, not factual truth.",
       "link": "#structured-output-and-errors"
      },
      {
       "q": "When is a workflow a better choice than an agent?",
       "link": "#the-ai-staircase",
       "answer": "Choose a workflow when the steps are predictable and predefined branches can handle the task. An agent is useful only when choosing the next action dynamically adds enough value to justify its extra complexity and cost."
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
      "A test shows that the save path rejects an unapproved draft; an approved draft saves. Record the scenarios you tested.",
      "A failed API call is retried at most twice, then shows “needs a human”.",
      "Explain the request flow, two decisions and one failure. Without AI-generated code, change a real validation rule (for example, an end time before its start). Predict the result and show a check failing before the fix and passing after. Documentation is allowed."
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
   "weeks": "Weeks 5–19",
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
      "lesson": "Retrieve sources, show them and check whether they support the answer. A citation makes verification possible; it does not guarantee the claim is correct.",
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
        "Write 10 questions your selected docs cannot answer: mix clearly unrelated questions with plausible CSS/JavaScript questions whose answer is absent from your frozen subset. Record why each is unsupported. Use these to develop and test abstention; they are practice data, not an unseen test.",
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
        "Add to Ask MDN: turn your search into a tool, let the model call it, and log every call.",
        "Before putting the loop in the chat page, add a maximum of 8 model/tool rounds, a timeout on each network call and a clear stopped status. Test with a fake model that keeps requesting search: it must terminate at the limit. Keep tools read-only here. A step limit is not a guarantee about cost; record usage too."
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
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/14-agentic-loop.md",
       "answer": "The loop normally ends when the model produces a final answer without requesting another tool. A step limit enforced by your code stops repeated tool calls even if the model never decides to finish."
      },
      {
       "q": "What is the difference between precision and recall?",
       "link": "#ml-basics-measuring-quality",
       "answer": "For search, precision is the fraction of retrieved items that are relevant; recall is the fraction of all relevant items that were retrieved. In classification, the corresponding formulas are TP/(TP+FP) and TP/(TP+FN)."
      }
     ],
     "extra": [
      "[Anthropic, Building effective agents (worth a second read now)](https://www.anthropic.com/engineering/building-effective-agents)",
      "Zoomcamp [15 Frameworks](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/15-frameworks.md) and [16 Other frameworks](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/16-other-frameworks.md): a tour of agent frameworks. This path uses LangGraph in Section 4.",
      "[You should write an agent](https://fly.io/blog/everyone-write-an-agent/) by Thomas Ptacek, Fly.io: why writing a small agent yourself teaches more than reading about one."
     ],
     "done": [
      "Your loop shows the search result being passed back to the model.",
      "A fake model that never finishes is stopped after at most 8 rounds; a stalled network call times out."
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
        "Read [Chunking for longer texts](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/07-project-example/07-chunking.md). MDN pages can be long, so split each page into chunks of a few paragraphs, and keep the page ID on every chunk.",
        "Keep two IDs: `page_id` identifies the source page; `chunk_id` identifies one piece. Store each piece's text and source URL. For evaluation and RRF, convert each ranked chunk list into a list of unique pages, keeping the first occurrence: `[A:1, A:2, B:1, C:1]` becomes `[A, B, C]`. B is now rank 2. Keep the matching chunks separately for the answer prompt. This is our course convention, not the only possible design."
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
       "link": "https://developers.google.com/machine-learning/crash-course/embeddings",
       "answer": "Embeddings can place texts with similar meanings near one another even when their words differ. Vector search can therefore retrieve useful paraphrases that keyword matching misses, but similarity does not guarantee relevance or correctness."
      },
      {
       "q": "What does function calling let the model do?",
       "link": "#tools-and-the-agent-loop",
       "answer": "Function calling lets the model request a named tool with structured arguments. Your application decides whether to execute it and sends the result back; the model does not run the function itself."
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
        "Add to Ask MDN: measure Hit Rate@5 and MRR@5 (the @5 means only the top 5 results count) for keyword and vector search on your 20 practice questions. Write the numbers in your README. Score the first 5 distinct `page_id` values, not 5 chunks. Fetch more chunk candidates if needed, deduplicate in rank order, and report fewer results honestly if fewer remain. Add a tiny test where repeated chunks from page A cannot crowd page B out of the five-page metric."
       ]
      }
     ],
     "recall": [
      {
       "q": "What does MRR reward that Hit Rate doesn't?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/05-search-metrics.md",
       "answer": "MRR rewards placing the first relevant result nearer the top, while Hit Rate only checks whether a relevant result was found within the cutoff. At @5, the reciprocal rank is zero if no relevant result appears in the first five positions."
      },
      {
       "q": "Why did you split long MDN pages into chunks?",
       "link": "#embeddings-and-vector-search",
       "answer": "Chunks let search match a focused passage instead of representing many topics with one whole-page embedding. Keeping the parent page ID connects each chunk to its source for citations and evaluation."
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
      "Hybrid search combines both result lists. You will measure whether that helps. You will also separate two questions: “Which pages rank first?” and “Do these pages actually support an answer?”"
     ],
     "picture": "Two judges rank the same singers on different scales, so adding their marks means nothing. RRF throws away the marks and keeps only the places: each list gives a singer 1/(k + place) points, and the totals decide.",
     "unlocks": "combine two searches and make the app admit “I don't know”.",
     "edge": "deciding when a system should refuse to answer.",
     "overview": [
      "Know when each kind of search does better.",
      "Combine two result lists with Reciprocal Rank Fusion (RRF).",
      "Distinguish result ranking from evidence that a question can be answered."
     ],
     "predict": "One list ranks a page 1st and the other doesn't have it at all. Another page is 2nd in both lists. Which should win?",
     "widget": "rank-fusion",
     "checkpoint": "your README has Hit Rate@5 and MRR@5 for keyword and vector search, and the 50 held-back questions are committed.",
     "bridge": {
      "text": "Each search gives a ranked list, and their scores can't be compared. RRF ignores the scores and uses only positions: each list gives a page 1/(k + position) points, and you add them up. A page fairly high in both lists beats one at the top of only one. RRF is a ranking score, not a probability that the answer exists. Two irrelevant lists can agree perfectly.",
      "terms": [
       [
        "RRF",
        "merging ranked lists by adding 1 ÷ (k + position)"
       ],
       [
        "evidence sufficiency",
        "whether the available passages support an answer to this question"
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
        "**No AI for this one:** write your own RRF function, about 15 lines. A page gets more points the higher it ranks in each list, and its points are added up. Then add a `hybrid_search()` that runs both searches and combines them. Fuse unique page lists using the convention from Embeddings, with ranks starting at 1. Test repeated chunks and a page present in only one list."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Measure Hit Rate@5 and MRR@5 for hybrid search on your practice questions and compare with keyword and vector search.",
        "Do not use the RRF score as an “answer exists” cutoff. Put the top passages in a structured prompt asking for `supported`, an answer only if supported, and the supporting chunk IDs and short quotes. Reject missing or unknown IDs and quotes that are not in those chunks. Say “I don't know from these sources” when evidence is missing. This check can still misjudge meaning: inspect its decisions on the 20 practice and 10 unanswerable questions, including plausible in-topic questions with absent answers. Record unsupported answers and unnecessary refusals separately. You will assess this more carefully in Grading Answers. This is **Ask MDN v0.4**."
       ]
      }
     ],
     "recall": [
      {
       "q": "What does RRF use from each result list?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/02-hybrid-search.md",
       "answer": "RRF uses each item's rank position, rather than the search engines' raw scores, and adds 1/(k + rank) across lists containing that item. This produces a combined ranking, not a probability that the retrieved evidence can answer the question."
      },
      {
       "q": "What does Hit Rate@5 measure?",
       "link": "#measuring-search",
       "answer": "Hit Rate@5 is the fraction of evaluated questions for which at least one known relevant page appears in the top five results. It does not measure the final answer's correctness or distinguish first place from fifth."
      }
     ],
     "extra": [
      "[RAG Techniques: reranking and fusion notebooks](https://github.com/NirDiamant/RAG_Techniques)",
      "[Better RAG results with reciprocal rank fusion and hybrid search](https://www.assembled.com/blog/better-rag-results-with-reciprocal-rank-fusion-and-hybrid-search) by Assembled: a real team's results with the exact method you just built.",
      "[Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) by Anthropic: how adding a little context to each chunk cut failed searches.",
      "[How RRF scoring works](https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking): the formula uses ranks, so matching high ranks cannot prove a passage answers the question. Read the explanation; no Azure account is needed."
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
     "checkpoint": "Ask MDN v0.4 combines both searches and declines when it cannot find supporting evidence; you have recorded both false answers and unnecessary refusals.",
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
     "time": "about 9 hours",
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
      "Check that the judge agrees with you.",
      "Choose a model configuration using quality, delay and cost together."
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
      },
      {
       "day": "Day 6 · about 90 min",
       "steps": [
        "Read only “Design your eval process” in OpenAI’s [evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices). Use your own files and grader; this assignment does not need OpenAI’s hosted Evals platform.",
        "Choose 10 of your practice questions, including exact identifiers and unsupported questions. Compare two available models from your current provider using the SAME retrieved chunks, prompt and output limit. Estimate the spend first. If only one model is affordable or available, compare two supported configurations and label this a configuration comparison, not a model comparison. No extra provider account is required.",
        "Hide the model names while you grade correctness, citation support and refusals. Record cost, total time and failures for each answer. Re-run the two most ambiguous cases once to notice variability. Keep the frozen final questions untouched.",
        "Write a five-line decision: acceptable quality, maximum wait/cost, which option meets those limits, a failure it still has, and what would make you reconsider. Save a run manifest: model ID, prompt/config version, corpus hash, date and scores. This is a small engineering experiment, not a model leaderboard."
       ]
      }
     ],
     "recall": [
      {
       "q": "When is the cheaper model the better engineering choice?",
       "answer": "When it meets the task’s predeclared quality and safety criteria within the latency and cost limits. Compare identical inputs, inspect failures, and record uncertainty; a tiny test set cannot establish universal superiority.",
       "link": "#grading-answers"
      },
      {
       "q": "Why save a content hash for every page?",
       "link": "#data-ingestion",
       "answer": "A saved content hash lets you detect changed page text and skip unchanged pages on later ingestion runs. Compare page IDs in successive manifests as well, because hashes alone do not reveal pages that have disappeared."
      }
     ],
     "extra": [
      "[AI Evals FAQ by Hamel Husain and Shreya Shankar (a preview of Section 5)](https://hamel.dev/blog/posts/evals-faq/)",
      "[Creating an LLM-as-a-judge that drives business results](https://hamel.dev/blog/posts/llm-judge/) by Hamel Husain: how to build a judge you can actually trust.",
      "[Building with the Claude API: prompt evaluation](https://academy.claude.com/courses/building-with-the-claude-api) — optional video alternative. Use the Prompt evaluation section only; you do not need a second complete course."
     ]
    },
    {
     "slug": "monitoring",
     "title": "Monitoring",
     "kind": "lesson",
     "time": "about 12 hours",
     "hook": "Sooner or later someone will ask Ask MDN for a biryani recipe. Logs show you the question, and what it said back.",
     "intro": [
      "Once people use your app, you need to see where answers fail, how much they cost and how long they take. Record metadata for each request. Keep diagnostic conversation content only for permitted public or synthetic examples, with a short retention period."
     ],
     "unlocks": "see what users ask, what each answer costs and where it fails.",
     "edge": "owning how your app behaves after launch.",
     "overview": [
      "Turn your Streamlit page into a full chat app.",
      "Save request metadata and permitted diagnostic examples to a database.",
      "Collect user feedback and inspect it alongside failed requests.",
      "Trace a failure without keeping unnecessary private data."
     ],
     "checkpoint": "your log has saved answers for the 20 practice questions and a judge agreement number.",
     "bridge": {
      "text": "A request ID connects the steps behind one answer: search, model calls, time, cost and errors. That lets you find where a failure started. For this course, save diagnostic text only from permitted public/synthetic examples and remove it after 7 days. Your evaluation fixtures are a separate, reviewed dataset.",
      "terms": [
       [
        "request trace",
        "linked records showing the steps behind one answer"
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
        "[04 Metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/04-metrics.md) and [05 Database](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/05-database.md) (adapt the example to your metadata and retention policy)."
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
        "Add to Ask MDN: one request ID joining retrieval, model calls and errors. Save step durations, retrieved page IDs, model/prompt/corpus versions, tokens, cost and user feedback. Use only public or synthetic test conversations; inspect a failed run from input to output. This is **Ask MDN v0.5**: a wrong answer now leaves clues."
       ]
      },
      {
       "day": "Day 8 · about 90 min",
       "steps": [
        "Skim the monitoring and privacy topics in [Stanford CS329S](https://stanford-cs329s.github.io/syllabus.html). Then write a small data policy: what leaves your app, where logs live, who can read them and when they are deleted. For this exercise, retain diagnostic content for 7 days; never log keys, auth headers or real private messages. Keep approved synthetic evaluation fixtures separately.",
        "Test the policy with a fake email and token-shaped string: redact them before saving diagnostics. Do not assume a regex removes every kind of personal information. Add a cleanup command and test it on old fake logs. A restricted log is still stored data.",
        "Make a 5-request sample report: where time went, cost per request, one retrieval failure and one model failure. Plain JSON and a short table are enough; a new tracing service is optional."
       ]
      }
     ],
     "recall": [
      {
       "q": "What should a useful trace reveal, and what should it leave out?",
       "answer": "A request ID joins retrieval, model and tool steps with durations, versions, costs and errors. Keep only necessary permitted content; omit credentials and private messages, restrict access and test deletion. Logging everything forever creates another problem.",
       "link": "#monitoring"
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
     "checkpoint": "Ask MDN v0.5 saves request metadata, permitted diagnostic examples, costs and feedback.",
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
        "Check your OpenAI budget alerts and credit balance, then write a short “How to deploy” section in your README. Recruiters can't open a private app, so add a short GIF or recording of it working. This is **Ask MDN v0.6**: it's online. Declare a local success target, such as 9 of 10 normal requests finishing within your chosen time and cost limits. Put failure thresholds, the stop switch and rollback instructions in a short runbook. Those are learning targets, not a production service guarantee."
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
     "extra": [
      "[OpenAI production best practices](https://developers.openai.com/api/docs/guides/production-best-practices) — read Staging projects, Managing rate limits and Managing costs. Keep development traffic separate from the live app; model names and account limits change."
     ]
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
        "Run your tests on the 50 held-back questions, once, and record the results. On a 10-question sample, manually assess correctness and whether the cited passage supports the claim; a valid URL alone is not enough. Record mistakes even when retrieval succeeded. Once inspected, this set becomes regression data; do not call it unseen after tuning on it.",
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
      "Your README reports Hit Rate@5 and MRR@5 for keyword, vector and hybrid search on the 50 held-back questions. If hybrid doesn't win, you explain why. Include your model/configuration comparison and its decision, with prompt and corpus versions.",
      "Every factual answer identifies its source passages. Your README includes manual correctness and citation-support grades for a 10-answer sample, with failures explained.",
      "Report abstention results on the 10 known unanswerable questions and incorrect refusals on answerable questions. Call this a regression result, not proof of performance on new questions.",
      "It runs online as your private Streamlit app, with the API key stored in Secrets and conversations saved in Neon.",
      "Explain the request flow, two design decisions and one failure. Write a core retrieval function without AI-generated code (such as page deduplication or rank fusion), test duplicate/missing results, and explain its behavior on a new input. Documentation is allowed; note the commit."
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
      "Optional Zoomcamp extras that earn points: Docker Compose, a 5-chart dashboard, a dedicated ingestion tool and query rewriting. The core path already compares prompts and model configurations."
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
   "weeks": "Weeks 20–24",
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
     "time": "about 13.5 hours",
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
      "Pause for a person's approval with interrupts.",
      "Keep useful conversation context within a budget without changing permissions."
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
      },
      {
       "day": "Day 9 · about 90 min",
       "steps": [
        "Read the “anatomy of effective context” section of Anthropic’s [context engineering guide](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents), for 15 minutes. Think of context as what the model can see now. A saved conversation, a summary and a permission record serve different jobs.",
        "Build a small context-selection function. Set an input budget below your chosen model’s context limit, reserving space for output and any reasoning allowance. Use its tokenizer/counting method where available; reject an oversized request safely if you cannot fit it. Keep instructions, the current question and recent complete turns; select relevant evidence and cap tool output size. Never split a tool call from its result.",
        "Try a synthetic 20-turn conversation with an early browser/version constraint. Check that your selection preserves that constraint or asks the user to repeat it. Keep critical task facts in explicit application state; an optional model-made summary can be wrong and must not supply authorization or approval. Test one oversized tool result and one lost constraint.",
        "Stop here: long-term personalized memory is optional. In [Login](#login) and [Fresh Data](#fresh-data), you will also restrict saved state by owner and invalidate stale evidence."
       ]
      }
     ],
     "recall": [
      {
       "q": "What belongs in model context, and what must remain outside its authority?",
       "answer": "Supply the relevant task, complete recent interactions and permitted evidence within a budget. Keep identity, permissions, approvals and operation IDs in application-controlled state. A summary can help recall but cannot grant access or approve a write.",
       "link": "#langgraph"
      },
      {
       "q": "Why put a limit on an agent's number of steps?",
       "link": "#agent-fundamentals",
       "answer": "A model can keep requesting tools or repeat an unproductive cycle. An application-enforced step limit bounds those repeated actions and their resource use, although separate timeouts and cost limits are still needed."
      }
     ],
     "extra": [
      "[Hugging Face Agents Course, Unit 2 LangGraph pages](https://huggingface.co/learn/agents-course/en/unit2/langgraph/introduction)",
      "[Google/Kaggle AI Agents Intensive](https://www.kaggle.com/learn-guide/5-day-agents) — optional alternative: Day 3, Context Engineering: Sessions & Memory. Read the concepts or watch its recording; skip the ADK rewrite.",
      "[Berkeley Advanced LLM Agents, Spring 2025](https://llmagents-learning.org/sp25) — optional depth: Yu Su’s lecture on reasoning, memory and planning. Research context, not another prerequisite."
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
      "A prompt alone is not a dependable security boundary. Use permissions, restricted tools and approval checks to reduce the risk, then test their limits."
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
        "Design your approval rule: a person approves the exact tool name and its exact arguments. If anything changes, the approval no longer counts. A tool discovered through MCP needs the same checks. MCP standardizes the connection; it does not make an arbitrary server trustworthy or give it permission to act."
       ]
      }
     ],
     "recall": [
      {
       "q": "What are the three parts of the lethal trifecta?",
       "link": "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/",
       "answer": "The three parts are access to private data, exposure to untrusted content, and a way to communicate data externally. Together they create an opportunity for malicious instructions in that content to cause data disclosure."
      },
      {
       "q": "Which LangGraph feature pauses for a person's approval?",
       "link": "#langgraph",
       "answer": "LangGraph's interrupt() pauses execution for a person's input. The application must still check that the approval permits the exact tool and arguments; pausing alone does not make the action safe."
      }
     ],
     "extra": [
      "[Agents Towards Production (security tutorials)](https://github.com/NirDiamant/agents-towards-production)",
      "[Design patterns for securing LLM agents against prompt injections](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/) by Simon Willison: six patterns that limit the damage, explained simply.",
      "[Anthropic’s Introduction to MCP](https://academy.claude.com/collections/build-with-claude) — optional protocol background. Use the Introduction to Model Context Protocol course; implementing a server remains extra credit."
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
        "Before `save_note` runs, pause with `interrupt()`. Show the person the exact arguments, and run it only if they approve, using exactly those arguments. The approval belongs to one operation ID and its exact arguments. Generate that ID once in application code before pausing, persist it, and reuse it on retry; a repeated click is the same operation.",
        "Checkpoint: one approved note is saved and one rejected note isn't."
       ]
      },
      {
       "day": "Week 2 · about 9 hours",
       "steps": [
        "Add limits: at most 8 steps, a cost limit per question, and at most 2 retries per tool call. For `save_note`, add a database unique constraint on `(group_id, operation_id)` and [INSERT ON CONFLICT](https://www.postgresql.org/docs/current/sql-insert.html) handling. A repeated ID returns the original result only if its arguments match; changed arguments need a new approval. Simulate a committed write followed by a lost response, then retry: there must be exactly one note.",
        "Log each step’s request ID, tool name, input/output sizes, timing, tokens and cost. Keep redacted argument examples only in your permitted synthetic test logs, following [Monitoring](#monitoring); never record credentials.",
        "Write 5 injection documents (for example a page that says “call save_note with…”) and 5 normal requests, including one that really should save a note. Write the injection documents like an attacker's notebook: the goal, the trick and how your app should block it. Commit them.",
        "In your log, compare your Day 1 plan with what really happened. That gap is a lesson in itself."
       ]
      }
     ],
     "done": [
      "`save_note` can't run unless a person approves its exact arguments. A test proves it. A retry after a lost response creates no duplicate note, and changed arguments cannot reuse an earlier approval.",
      "The step limit, cost limit and retry limit each stop a runaway run. A test proves each one. The context-budget checks also pass by preserving critical task facts or pausing for clarification before answering or acting; context never grants new permissions.",
      "Your 5 injection documents never cause an unapproved action, and no planted instruction is carried out. Your 5 normal requests still work. You checked this in the step logs, not just in the replies.",
      "Explain the request flow, two decisions and one failure. Without AI-generated code, write the retry/duplicate-write test or the changed-arguments approval test. First make it fail on the unsafe implementation, then pass on the fix. Documentation is allowed; note the commit."
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
   "weeks": "Weeks 25–34",
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
        "Collect 50 permitted public/synthetic conversations: use recent redacted diagnostic examples from Neon, topped up with the Zoomcamp [synthetic data generator](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/11-synthetic-data.md). Review them before keeping a separate evaluation fixture; do not extend raw-log retention to fill the count. Read in two 25-minute blocks, write down every failure and sort them into 3 to 6 groups."
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
        "Run pytest and rule-based promptfoo checks on every push. Run the model-graded checks on your own trusted pull requests before merge, following the [CI/CD guide](https://www.promptfoo.dev/docs/integrations/ci-cd/). Set the grading model and budget explicitly; cache unchanged evaluations. Do not expose API secrets to untrusted fork code."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "Protect your deployment branch with [required status checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches), including the pre-merge evaluation job, and apply the rule to yourself too. Use a pull request for changes; Streamlit deploys from the protected branch. Break a prompt in a PR: prove the PR cannot merge and the live app stays on the previous version. Fix it, wait for the required checks, then merge. A red workflow after deployment is too late."
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
       "link": "https://www.postgresql.org/docs/current/ddl-rowsecurity.html",
       "answer": "Superusers and roles with BYPASSRLS bypass row-level security. Table owners normally bypass it too unless FORCE ROW LEVEL SECURITY applies; FORCE does not remove the superuser or BYPASSRLS exemptions."
      },
      {
       "q": "How does promptfoo call Ask MDN without the web page?",
       "link": "#testing-and-ci",
       "answer": "A promptfoo Python provider calls your answer(question, user) function directly, using the test user supplied in context['vars']. The adapter returns the answer and retrieved context needed for evaluation, so it does not need the Streamlit page."
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
        "Make a `user_groups` table on the server that maps each email to a group. For every request, look up the signed-in user's group and set it in the database transaction. Never trust a group sent from the browser.",
        "Give each conversation a server-recorded `owner_id`, `group_id` and random thread ID. Before loading history, loading a checkpoint, or resuming a pending approval, verify that the signed-in user owns the conversation and still has its group. A thread ID locates state; it grants no permission. Clear the browser session's chat state on logout or user change. Use private-by-default history for this course."
       ]
      },
      {
       "day": "Days 5–6 · about 3 hours",
       "steps": [
        "Use two fake test accounts, never real students. Write tests: a CSS user gets zero JavaScript chunks through search, through the agent's tools, and when guessing a document ID. A user with no group gets nothing. Also try a known JS conversation/thread ID as the CSS user, and as a second user in the same group: neither may read or resume the owner's private chat or approval. Test switching users in the same browser. Do not send any loaded state to a model before these checks pass."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why isn't login enough to keep the groups apart?",
       "link": "https://docs.streamlit.io/develop/concepts/connections/authentication",
       "answer": "Login establishes who the user is, not which data they may access. The server must map that identity to an allowed group and enforce authorization for each request, denying access when no group is assigned."
      },
      {
       "q": "How does your app tell Postgres which group is asking?",
       "link": "#postgres-search-and-access-rules",
       "answer": "For each request, the server looks up the signed-in user's group and sets it for the database transaction with set_config. Row-level policies read that setting with current_setting; the group must not come from an untrusted browser value."
      }
     ],
     "extra": [
      "[The Copenhagen Book](https://thecopenhagenbook.com/) by Pilcrow: a free, practical guide to doing login right.",
      "[LangGraph checkpointers](https://docs.langchain.com/oss/python/langgraph/checkpointers): understand what a thread ID loads, then protect that lookup with your own ownership check."
     ]
    },
    {
     "slug": "fresh-data",
     "title": "Fresh Data",
     "kind": "lesson",
     "time": "about 6 hours",
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
        "Before rereading, sketch your ingestion process from memory. Compare with [Data Ingestion](#data-ingestion), then extend it: compare manifests, re-index edited pages, add new ones, and delete removed pages and chunks. Publish a new `corpus_version` only after the sync succeeds."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Make a test copy of your data: delete 3 pages and edit 2, then sync.",
        "Store the corpus version with each conversation. Choose a simple policy: if it changes, expire that conversation's pending approvals and start a fresh, server-owned agent thread before the next answer. Do not copy old retrieved chunks or assistant answers into the new prompt. Tell the user that the sources changed. Check thread ownership before inspecting or resetting any state. This avoids building a selective memory-invalidation system now."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Ask about the deleted pages in a new chat and one started before the sync. Inspect the actual model input: no removed chunks or old answers should be carried into it. Validate every returned citation against the current, permitted source records. Reject stale IDs. Test an edit as well as a deletion, and prove an old pending approval cannot resume. This prevents reuse in new answers; it does not erase a transcript someone has already read or copied."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Finish the edit/deletion and stale-approval tests. Record one limitation of this conservative reset policy, such as losing conversational context when unrelated pages change."
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
     "time": "about 5 weeks",
     "hook": "Dress rehearsal for the Campus Assistant: two groups, real logins, one tireless attacker. It's you.",
     "intro": [
      "This is the final project of the path. Ask MDN gets logins, separate groups, fresh data, automatic tests and an attack test it must pass.",
      "This brings the pieces together in a small deployed system. Passing these checks demonstrates this project's behavior under the cases you tested; a real institutional rollout still needs its own requirements and operational review.",
      "Finish the existing app first. Then give its read-only answer function a small API, so another application can use it. You will reuse your validation, permissions and tests; this is not a fifth project."
     ],
     "unlocks": "demonstrate a tested AI app and a portable backend, including what happens when dependencies fail.",
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
        "Set aside 12 fresh questions after freezing this version: 4 each for CSS and JS with expected answers/supporting passages, plus 4 plausible questions unsupported by that user's permitted documents. Before running them, record an acceptance rule: for this learning project, at least 7 of 8 supported answers correct and supported by citations, all 4 unsupported requests declined, and no unauthorized reads/writes. Grade manually and show counts and all failures. These small-sample targets are practice gates, not production guarantees. If you fix a failure, keep these as regression cases and reserve fresh cases for another independent check.",
        "Add cost tracking for each group, a simple rate limit for each user, and an off switch: a setting that makes the app stop answering.",
        "Update the README with your results and an architecture diagram. Keep a short list of changes a real team deployment would need. Your university integration can wait until after the course."
       ]
      },
      {
       "day": "Days 22–23 · about 3 hours",
       "steps": [
        "**Backend lab, first checkpoint:** read FastAPI’s [request body](https://fastapi.tiangolo.com/tutorial/body/) and [response model](https://fastapi.tiangolo.com/tutorial/response-model/) guides. Reuse `answer(question, user)` behind a read-only `POST /answer`; add `GET /health`. Use Pydantic for a bounded question field and a response containing answer, source IDs and request ID. Reject extra identity/group fields. The API must not expose `save_note` or approval-resume operations. Use the RAG function directly or a read-only tool allowlist; hiding a write endpoint does not disable writes inside an agent.",
        "Start with a fake model, a fixed synthetic test account and a server listening only on localhost. Return a clear validation error for malformed input and a safe timeout/unavailable response for dependency failures. Keep stack traces and keys out of responses. Checkpoint: a command-line HTTP client gets a valid answer and predictable errors. Replace the fixed account with token verification in the next step before using real data.",
        "Spend 15 minutes on FastAPI’s [concurrency guide](https://fastapi.tiangolo.com/async/). If your SDK/database calls block, start with a normal `def` endpoint; do not call blocking code directly inside `async def`. Use timeouts on the dependency calls themselves."
       ]
      },
      {
       "day": "Days 24–25 · about 3 hours",
       "steps": [
        "Read FastAPI’s [HTTPBearer reference](https://fastapi.tiangolo.com/reference/security/#fastapi.security.HTTPBearer). It extracts a token; your code must verify it. For this local machine-client exercise, generate two high-entropy opaque tokens, kept in environment secrets, and map each to one synthetic server-side account. Use a constant-time comparison, reject missing/unknown tokens and test revocation. Look up the account’s current group through the SAME authorization code as the UI. Never accept the principal or group from JSON. Tokens are not your model provider’s API key.",
        "Use [TestClient](https://fastapi.tiangolo.com/tutorial/testing/) to check valid, missing, revoked and wrong-user requests, malformed input, a provider timeout and group isolation. Keep authentication real in these tests; fake only the model/provider. Reuse the database checks. This API lab stays local; a public deployment needs TLS and a suitable identity/token lifecycle rather than copying test credentials. Send a request that asks the HTTP service to save a note: verify no write tool runs and the database is unchanged."
       ]
      },
      {
       "day": "Days 26–27 · about 3 hours",
       "steps": [
        "Follow the [FastAPI container guide](https://fastapi.tiangolo.com/deployment/docker/) to package the service. Pin dependencies; use a non-root runtime user, `.dockerignore` and environment secrets. Bind the published port to localhost for this lab. Build from a fresh checkout, run without your editor and call `/health` plus `/answer`. Keep API tests and an image-build check in CI. No additional paid hosting is required.",
        "Checkpoint: one documented command starts the container and the protected HTTP checks pass. Record the remaining deployment work: TLS, credential rotation, backups and shared quota enforcement if you add replicas. Streamlit remains your private online demo."
       ]
      },
      {
       "day": "Days 28–29 · about 3 hours",
       "steps": [
        "**Failure drill:** fake the model-provider boundary for timeouts and retryable rate limits. Separately inject a database connection/query failure at the database boundary, or stop only your disposable local test database. Require a safe error within your recorded deadline. Never interrupt the online database.",
        "For a repeatable overload check, run one API worker with at most 2 model requests in flight and no waiting queue. Use a fake provider held at a test barrier: while 2 requests are busy, send a third and require a clear 429 retry-later response. Release the barrier; both accepted requests must finish within a 5-second test deadline. Then send 20 fake-provider requests at concurrency 1 and 5 and record accepted/rejected counts. This local limit is not a shared quota across replicas. Use Python’s [threading events/barriers](https://docs.python.org/3/library/threading.html) or the async equivalent to hold the fake calls deterministically; a fixed sleep is not a reliable test barrier.",
        "Run two simultaneous agent writes with the SAME approved operation ID. Check the database: exactly one note, matching arguments, and no cross-user state. This exercises the existing write tool separately; the new HTTP endpoint stays read-only.",
        "Record success counts and p50/p95 response times (typical time and the slow tail). Twenty requests are a smoke test, not capacity proof. Trace one failure, operate the off switch and follow your rollback runbook. Write a 5-line incident note: symptom, cause, fix, regression check and remaining limitation.",
        "Optional UX experiment: add progress events or streamed draft text. Distinguish time to first visible feedback from time to a validated final answer. Never treat partial JSON or streamed text as approval to perform a write."
       ]
      }
     ],
     "done": [
      "Tests cover document, note, saved-chat, checkpoint and approval access: another user cannot use a guessed ID to read or resume private state. Document tests also enforce group separation.",
      "After a sync, the deleted test pages produce no search results and no citations in new answers, including in existing chats.",
      "Required checks prevent a failing PR from reaching the deployment branch. The live app stays on the last passing version; the final fresh quality check also meets its recorded criteria.",
      "Across 3 runs of every attack case: zero unauthorized reads or writes, zero canary leaks to the other group, and zero planted instructions carried out, while normal requests still work. You checked this in the tool logs and the database, not just in the replies.",
      "Cost tracking for each group, the rate limit and the off switch all work.",
      "A fresh checkout builds and runs the protected read-only API container. HTTP tests exercise real token verification and group isolation. Fake-provider failure/concurrency tests terminate within recorded limits; the runbook and small-sample latency report are committed.",
      "Explain the request flow, two decisions and one failure. Diagnose and fix a real retrieval, authorization, stale-state or retry bug without AI doing the diagnosis or fix. Show a failing regression check, your reasoning, and the passing result; documentation is allowed."
     ],
     "showoff": {
      "pitch": "A two-group AI assistant with logins, database policies, release checks and a documented attack suite with zero observed leaks in those runs.",
      "demo": [
       "Sign in as the CSS user and try to reach a JS canary through search, a tool and a guessed document ID. Show the policy that blocks all three.",
       "Open a PR with a broken prompt and show the required check preventing merge and deployment. Fix it and show the passing result.",
       "Delete a page, run the sync, and show its citation is gone.",
       "Show the attack table: 30 cases, 3 runs each, zero leaks.",
       "Show the protected API container, one failure trace, the rate limit and the off switch. Finish with one known limitation and the next improvement it justifies."
      ],
      "proves": [
       "CI/CD (2,560 of the 6,964 posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md)), evals and security together.",
       "PostgreSQL, authorization, a tested HTTP boundary and a reproducible container, with evidence from a small operational drill."
      ]
     },
     "extra_credit": [
      "Give each group a monthly budget that pauses answers when it runs out.",
      "Add a third group that can see both CSS and JavaScript docs.",
      "Capture the flag: give a friend 30 minutes, signed in as the CSS team, to leak a JS canary. Add their attempts to your attack cases.",
      "Deploy the API separately after adding TLS and an appropriate identity/token lifecycle. Use a staging database first; never point a load test at real users or private institutional data."
     ],
     "recall": [
      {
       "q": "Why can a working Streamlit demo still need a backend check?",
       "answer": "An HTTP boundary adds input contracts, authentication, error responses, concurrent callers and packaging. Reuse the application’s authorization rules and test them through the endpoint. A container that starts is not proof of reliability under real load.",
       "link": "#project-make-it-sturdy"
      },
      {
       "q": "What counts as a breach in your attack test?",
       "link": "#red-team-your-app"
      }
     ],
     "extra": [
      "[Stanford CS329S: deployment, monitoring and system design](https://stanford-cs329s.github.io/syllabus.html) — optional systems perspective. The public material is from 2022; use current library docs for code.",
      "[Claude API: response streaming](https://academy.claude.com/courses/building-with-the-claude-api/response-streaming) — optional video for the UX experiment. The pattern transfers; event formats differ by provider."
     ]
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
   "weeks": "Weeks 35–36",
   "description": "Catch up, polish your projects and plan what you'll build next.",
   "lessons": [
    {
     "slug": "whats-next",
     "title": "What's Next",
     "kind": "lesson",
     "time": "about 2 weeks (spare)",
     "hook": "The final test is a new problem, small enough to finish, different enough to make you think.",
     "intro": [
      "You have reached the end of the guided path. The useful question now is: can you apply the ideas when the dataset and requirements change?",
      "Use this consolidation time to repair gaps and try one small independent task. Your Campus Assistant can follow afterwards; it is not required to finish this course."
     ],
     "unlocks": "test whether your skills transfer to a new dataset and choose your next practice task.",
     "edge": "scoping, and saying no to features.",
     "overview": [
      "Demonstrate transfer on unfamiliar public material.",
      "Identify a weak skill and choose a specific repair exercise.",
      "Choose a next project or a role-specific deeper track."
     ],
     "assignment": [
      {
       "steps": [
        "Finish the required project checks. Select one unfamiliar public source, such as a small museum visitor FAQ or an open-source project's installation guide. Keep the dataset to 5–10 pages; record its source and reuse terms. Write a short brief, 6 expected question/answer cases (including 2 unsupported cases), and a cost limit before coding.",
        "Spend 3–6 hours adapting your existing app. First choose the simplest useful design and explain whether retrieval or an agent is needed. Documentation and your own code are allowed; during this exercise, keep AI in explanation/review mode rather than having it design or implement the solution. No new framework required.",
        "Demo 3 unfamiliar questions and one failure. Trace the full request, show your evidence, and make one small requirement change without an AI-produced patch. Ask a friend or peer to choose the change if available; otherwise add a new document format or a restriction you did not build for. If you cannot finish independently, revisit only the relevant lesson and retry. This is a diagnostic, not a speed contest.",
        "Write a one-page evidence review: what you built, where it failed, which skill still needs practice, and what you would change. Keep your weekly application routine. Plan the Campus Assistant or another product only after this check; no compulsory launch deadline. Add a portfolio evidence table: requirement → code → test → result → limitation. Ask someone to review one requirement, or record a ten-minute walkthrough yourself. Start applying to applied AI/backend roles; use interview feedback to select the next repair task.",
        "Choose deeper study only for a specific goal: [ML Zoomcamp](https://github.com/DataTalksClub/machine-learning-zoomcamp) for broader ML modeling, [LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch) for model internals, or serving/infrastructure work for an AI platform role. This path covers applied LLM applications; it does not claim mastery of every AI specialty or immunity from automation."
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
      "[Provider and university comparison](https://github.com/Faizan2001/ai-engineer-path/blob/main/PROVIDER-UNIVERSITY-REVIEW.md) — why these additions are required and which deeper courses can wait.",
      "[Harvard CS50 AI](https://cs50.harvard.edu/ai/) — optional broader AI foundations: search, uncertainty and learning, with programming projects. Useful for gaps in those ideas; not a required restart.",
      "[MIT 6.S191, 2026](https://introtodeeplearning.com/) — optional model-training direction: neural-network lectures and labs. Review calculus and linear algebra first.",
      "[Stanford CS336, Spring 2026](https://cs336.stanford.edu/) — advanced model-building direction after PyTorch, ML, probability and systems prerequisites. Heavy implementation and GPU work; not the next compulsory course."
     ],
     "done": [
      "Your small new-domain app meets the brief and recorded checks, or your evidence review clearly identifies what needs repair.",
      "You can explain an architecture choice, inspect a wrong answer, and modify a core behavior with documentation but without an AI-produced solution.",
      "You have one concrete next practice task tied to evidence, rather than another list of courses."
     ]
    }
   ],
   "shift": {
    "before": "You followed someone else's plan.",
    "after": "A new-domain demonstration, an evidence table and one targeted next practice task."
   },
   "opener": "You can now follow an answer from input to evidence, inspect a failed tool call and explain the cost of a design choice. These two weeks test those skills on unfamiliar material and leave room to repair one weak spot."
  }
 ],
 "checked": "25 Oct 2026",
 "week_starts": "saturday"
};
