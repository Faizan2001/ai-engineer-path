// AI Engineer Path: all course content lives in this file.
// Edit any text, save, and refresh the page. No build step is needed.
// Inside text you can use: [label](https://link), [label](#lesson-slug), **bold**, `code`.
// Lessons appear in the order below. Every lesson needs a unique "slug"; don't rename slugs
// after you've started, because saved progress is stored by slug.
// "repo", "site" and "community" feed the GitHub and Community buttons. Change them if you fork this.
window.COURSE = {
 "title": "AI Engineer Path",
 "duration": "about 54 weeks",
 "tagline": "A step-by-step path from your first AI model call to a deployed app with evaluations, access controls and tests.",
 "repo": "https://github.com/Faizan2001/ai-engineer-path",
 "site": "https://faizan2001.github.io/ai-engineer-path/",
 "community": "https://datatalks.club/slack.html",
 "intro": [
  "This path is for a software developer who wants to build with existing AI models. You learn model calls, RAG, agents, evaluation and deployment by building five projects. The first four teach one skill each, on public material. The fifth is a **Campus Assistant**: it answers students' repeated questions from approved sources, asks when it needs more detail, and says who to contact when it can't answer. You finish with a small pilot and evidence that it is correct, honest about gaps and affordable.",
  "The path works like The Odin Project. Each lesson points you to the best free material on one topic, then asks you to build something with it. You learn by building, breaking things and fixing them.",
  "Every lesson says what it unlocks. Some begin with a 2-minute experiment: make a prediction, check it, then explain what changed your mind. You don't have to memorise API syntax. Training models, research and large-scale platform work need more study than this path gives. The optional Electives show where to start."
 ],
 "how": [
  "Study about 9 hours a week, in sessions of about 90 minutes: roughly 30 minutes learning, 45 building and 15 writing in your log. Set a weekly target on this page. It counts sessions, not a daily streak.",
  "Plan for about 54 weeks at 9 hours a week (about 41 at 12 hours), including spare time for breaks and catching up. Allow 2–4 more weeks if you need to repair a skill, deploy or debug. Follow the checks, not a deadline.",
  "From [Campus Knowledge Base](#campus-knowledge-base) onward, spend one hour of each study week on your capstone's data: permission, official sources and approved answers. Data takes calendar time, so it grows while you learn the rest. Some steps wait on other people (permission, staff replies, pilot approval). Start them early and keep studying while you wait. Only questions you wrote or paraphrased yourself, with nothing that identifies a person, may go to a model API. That includes practice exercises.",
  "Every lesson is split into **Day** steps of about 90 minutes. Stop when the Day's **Stop here** line is true or, on Days without one, when its last step is done. Then tick the Day, write tomorrow's first step in your log, and stop, even if you have energy left. Never do two Days to catch up. About one session in ten goes to debugging, curation or catching up, and the week estimates already include it. Missed a few days? Reread your last log entry and do the smallest next step. Low on energy? A 15-minute session still counts.",
  "Finish each lesson's **Memory check** before you mark it complete. Explain the idea without looking, compare with the source, and fix what you missed. Retry any missed question next session. For projects, show the evidence listed under “You're done when”. A tick alone doesn't prove a skill.",
  "Your coding assistant is welcome, but each project raises the bar on work you do by hand: one change, then one function, then one test, then one bug fixed without AI. [Mindset and Asking for Help](#mindset-and-asking-for-help) explains why.",
  "Some Days are marked **Under the hood**. You build a small version of something you use, such as a gradient engine, a search index or a tiny GPT, and check it against the real thing. They are short on purpose. Building the mechanism once makes the rest of the path less mysterious.",
  "Cost: the learning materials are free. Model calls and some hosting can cost money. Set your own API budget, price each experiment before you run it, and use fake responses for routine tests. You don't need accounts with three model providers. [Setting Up Your Tools](#setting-up-your-tools) has a free-tier fallback. There is no certificate; your projects and checks are the evidence.",
  "On mobile data, or expecting a power cut? Open the next lesson's links on Wi-Fi first. Videos are always optional and show their length.",
  "Assignments are the required path. Videos can help an idea click. Additional resources and Extra credit are optional. Use the materials named in the current step, then build. If two sessions end in the same confusion, pause the new material and repair that skill with a smaller example.",
  "Already started? Your saved progress stays. Anything added behind you (a new lesson, or a new Day in a lesson you finished) appears on the course page under “New since you passed this point”."
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
      "Welcome! This path takes you from your first AI model call to a deployed app that you can test, debug and explain.",
      "Each lesson points you to free material, then asks you to build something. Don't skip the building. That is where you learn."
     ],
     "unlocks": "restart after any break with one small step.",
     "edge": "running your own learning loop. You can reuse it for every new tool you meet.",
     "overview": [
      "Explain where the path ends and how long it takes.",
      "Choose your study days and set a weekly target.",
      "Write a restart note and three rules for after a break."
     ],
     "assignment": [
      {
       "steps": [
        "Read the [course page](#home). It has 7 sections and 5 projects, plus optional Electives. The core path takes about 54 weeks and ends with your Campus Assistant.",
        "Pick your study days and a fixed time, and add them to your calendar. Aim for about 9 hours a week: 6 sessions of 90 minutes, or fewer, longer ones. Set the same number as your weekly target on the [course page](#home). It counts sessions per week, not a daily streak.",
        "Create a private GitHub repository called `ai-learning-log` and add a file called `log.md`. This is where your notes go. Each project gets its own public repo later.",
        "Plan each 90-minute session like this: about 30 minutes learning, 45 building, and 15 checking your work and writing a log entry. Take breaks when you need them. End every entry with two lines: one result you checked, and the exact file or 10-minute action to start with next time.",
        "Add three rules to your log. After a break: “Check my last result, then take one small next step.” Low energy: “15 minutes of review counts. It doesn't have to finish a lesson.” Stuck: “After 20 minutes without a useful clue, make the problem smaller, check the docs, then ask with my attempt and the exact error.”",
        "If two sessions in a row end at the same obstacle, go back only to the skill you're missing. Don't restart the course.",
        "Mark exams, Ramadan, Eid and family events in your calendar now. Plan shorter sessions for those weeks. A longer break only moves your finish date."
       ]
      }
     ],
     "recall": [
      {
       "q": "How do you decide that a lesson is finished, without memorising every detail?",
       "link": "#how-this-path-works",
       "answer": "Finish the assignment, explain the main idea in your own words, and check your result against the lesson's checks. Look up syntax in the docs. If you miss a memory question, correct it and try it again next session."
      },
      {
       "q": "What do you do first when you come back after missing a few days?",
       "link": "#how-this-path-works",
       "answer": "Read your last checked result and your next-action note. Try one short recall question, then do one small step. If a skill is missing, repair only that. Don't delete your progress."
      }
     ],
     "extra": [
      "[LLM Zoomcamp curriculum (the main course you'll follow from week 5)](https://datatalksclub.github.io/docs/courses/llm-zoomcamp/curriculum/)",
      "[How to teach yourself hard things](https://jvns.ca/blog/2018/09/01/learning-skills-you-can-practice/) by Julia Evans: practical habits for learning on your own."
     ]
    },
    {
     "slug": "what-ai-engineers-do",
     "title": "What AI Engineers Do",
     "kind": "lesson",
     "time": "about 1.5 hours",
     "hook": "Most of an AI engineer's job is normal software work. The new part is a model that sounds sure even when it's wrong.",
     "intro": [
      "This path teaches applied AI engineering: building useful software around existing models. Some AI jobs also train or fine-tune models. Those need more practice after this path.",
      "You load data, call a model, check its answer, test it and watch how it behaves. Your web development skills carry over.",
      "The best proof you can show an employer is an app you can explain, test and change. Framework names help you read job posts. Your projects show what you can do. Finishing this path does not guarantee a job."
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
        "Write your capstone goal in your log. This path ends with a Campus Assistant that answers students' repeated questions from approved sources. The author of this path builds it for IUB, inside the Events platform, for the website and the Android/iOS app. Write one sentence for yours: who will it help, and which repeated questions will it answer?",
        "No platform of your own? Pick any community whose questions repeat, such as a club, a society or a team wiki. Most lessons work the same. The platform lessons have a smaller fallback: a simple web chat with two demo groups instead of universities, a phone-friendly web page instead of a native app, and a rehearsal pilot.",
        "Spend 10 minutes writing in your log: why does this matter to you and to the people you care about? Be specific. Reread it when your motivation dips."
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
      "[Software Is Changing (Again)](https://www.youtube.com/watch?v=LCEmiRjPEtQ) by Andrej Karpathy (Y Combinator, 40 min): where software is heading.",
      "[The Rise of the AI Engineer](https://www.latent.space/p/ai-engineer) by swyx, Latent Space: the 2023 essay that named this job, still a good map of it."
     ]
    },
    {
     "slug": "mindset-and-asking-for-help",
     "title": "Mindset and Asking for Help",
     "kind": "lesson",
     "time": "about 1 hour",
     "hook": "Everyone gets stuck. What matters is how you ask for help.",
     "intro": [
      "You will get stuck. Everyone does, and it's a normal part of learning.",
      "This lesson gives you two habits: ask clear questions, and understand every line of code you keep, even code an AI wrote for you."
     ],
     "unlocks": "get fast answers to good questions, and defend every line you commit.",
     "edge": "owning code you didn't type. AI writes more and more code, so checking it well matters more and more.",
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
        "Join the [DataTalks.Club Slack](https://datatalks.club/slack.html) and find the `#course-llm-zoomcamp` channel. Search the [Zoomcamp FAQ](https://datatalks.club/faq/llm-zoomcamp.html) before you post. Join the [Hugging Face Discord](https://hf.co/join/discord) too.",
        "Copy this rule to your log: “I can trace and check the code I keep.”",
        "Here is why. In a [study of 52 developers](https://www.anthropic.com/research/AI-assistance-coding-skills), the group that used AI while learning a new Python library scored lower on a quiz straight afterwards. It was a small study, so treat it as a warning, not proof. Use AI to explain an idea or give a hint. Before you run code, predict what it will do. Then run it and explain any difference yourself.",
        "If you want a study buddy, post a short hello in the Zoomcamp Slack with your weekly goal. You can also start alone: at each project, record a short demo and ask for one specific piece of feedback. If nobody replies, check your work against the project's checks and write down one thing you're unsure about."
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
   "opener": "A club secretary asks if your Events platform could answer students' questions. You say yes, then find forty buzzwords online. This week cuts them down to one job description, one study routine and one promise: after any break, you only owe the next small step."
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
     "time": "about 4.5 hours",
     "hook": "Your API key is a password that spends money. Make leaking it hard, and cheap if it happens.",
     "intro": [
      "In this lesson you set up your computer and get an API key. You'll use this setup for the whole path, so take your time."
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
        "Create an OpenAI account. Then make a new project just for this path and create an API key inside it. A separate project shows you exactly what this path costs.",
        "Add only a small amount of credit. $5 is enough to start. If your account has auto-recharge, turn it off. Set a budget alert, and check whether it stops spending or only sends a warning.",
        "**Paying from Bangladesh:** OpenAI needs a card that works for international online payments. Many banks offer a dual-currency card; ask yours. Add credit $5 at a time.",
        "**No such card yet?** Don't stop. Use Google's Gemini free tier through its [OpenAI-compatible endpoint](https://ai.google.dev/gemini-api/docs/openai): change the `base_url`, the key and the model name. Send only public data, because Google may use free-tier content to improve its products ([pricing page](https://ai.google.dev/gemini-api/docs/pricing)).",
        "**If you use Gemini:** expect small differences from OpenAI, such as no documented `refusal` field. Lessons where it matters will say so. Switch to OpenAI when you can.",
        "Follow the Zoomcamp [environment lesson](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/02-environment.md). It installs uv (a fast Python package manager), creates your project folder (the page calls it `llm-zoomcamp-2026-code`), adds the packages, puts your key in a `.env` file and runs a test call. Stop when the test call prints an answer.",
        "In the project folder, run `git status`. The file `.env` must not appear in the list. If it does, add `.env` to `.gitignore` and check again before your first commit. Your key must never reach GitHub.",
        "In your log, write down the package version, model ID and API endpoint that worked. The Zoomcamp examples can be older than today's docs. Before you change the model or provider, check that the new one supports images, structured output and tools."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "**No AI for this one:** in your project folder, write `top3.py`. It reads a CSV file, counts the rows for each value in one column and prints the top 3. Check it with a CSV of six rows whose counts you already know. Stuck for 20 minutes? Read the matching part of the [Python tutorial](https://docs.python.org/3/tutorial/), then try again.",
        "If files, dictionaries or functions still feel new, spend up to two extra sessions on those parts of the Python tutorial, then retry with a different CSV. Pass this check before the model-call lessons. Needing the extra practice is normal.",
        "Create a file called `AGENTS.md` in your project folder ([the format](https://agents.md/)). It's a note that AI coding assistants read before they work. Write four rules in it: explain code to me, review my code, ask me questions, and never write my lesson solutions. Add one more: no keys, secrets or private code in a prompt.",
        "Commit `top3.py` and `AGENTS.md`. Run `git status` again: `.env` must still not appear."
       ]
      },
      {
       "day": "Day 3 · first win, about 90 min",
       "added": "2026-10-30",
       "steps": [
        "Before any AI, write five short help pages for an imaginary student office, as plain text files in a folder called `pages` in your project folder. Start each file with an ID, a date and a source, like this: `fees-01 · 2026-09-01 · Accounts office`. Make one page out of date on purpose.",
        "Without AI-written code, write `search.py`. Given a question, it prints the top 2 page IDs, or `no matching page` when nothing matches. It should be about 30 lines.",
        "Build it in four parts. First, lowercase the question and split it into words. Second, remove common words (the, a, an, is, are, what, when, how, do, i, my, to, of, for). Third, give each page one point for every remaining word it contains. Fourth, print the two highest-scoring pages, or `no matching page` if the best score is 0.",
        "Write three tests in `test_search.py` as plain `assert` lines. Run them with `python test_search.py`.",
        "Test 1: a question with an obvious answer. Test 2: a question no page answers; your search must print `no matching page`, not guess. Test 3: a question that matches the out-of-date page. Assert that it returns that page, and add a comment: this is wrong, because search can't tell the page is old.",
        "Stop here when all three tests pass and you've recorded a one-minute screen capture: a question goes in, page IDs come out. That's your first search engine."
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
     "time": "about 3 hours",
     "hook": "ChatGPT is autocomplete that has read a huge library. That is why it is so good, and why it can invent a court case.",
     "intro": [
      "An LLM (large language model) is the kind of AI behind ChatGPT. You don't need the math to build with one, but you do need a simple picture of how it works.",
      "Here's the short version: text is split into small pieces called tokens. The model predicts the next token, again and again, until the answer is finished."
     ],
     "picture": "Think of your phone's suggestion bar, made much bigger. It picks one token at a time, using everything before it. Attention lets words affect each other: in “the bank of the river”, “river” tells the model which kind of “bank” this is. This is a simple picture, not the full story of how models reason.",
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
      "text": "A model call predicts tokens from its input and what it learned in training. It does not search your files or check facts on its own. Your code can add tools or documents; you'll do that later. A fluent answer can still be wrong. Pause the video whenever you want to sketch the process yourself.",
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
        "In your log, before you rewatch anything, explain in 5 sentences how a chat model answers a question. Use only words you could explain to a friend."
       ],
       "day": "Day 1 · about 90 min"
      },
      {
       "day": "Day 2 · under the hood, about 90 min",
       "added": "2026-10-30",
       "steps": [
        "Predict first: will the same question cost more tokens in English, in Bangla script or in Banglish? Write your guess in your log.",
        "Write one campus question yourself (never copy a real post) in three forms: English, Bangla script and Banglish. Make each one three or four sentences long.",
        "Send each question to your model with no instructions. Read the input token count in the response's `usage` field. That is the count you're billed for.",
        "Every request has a few fixed formatting tokens, so also send a one-word message and subtract its count from each result. Then divide each count by the English one to get a ratio. Record the model, the three counts and the ratios in your log.",
        "Without AI-written code, write `sample.py`. Make up a table of five possible next tokens, each with a score.",
        "Turn the scores into probabilities with softmax: divide each score by the temperature, take e to that power, then divide by the total of all five. Pick a token at random using those probabilities.",
        "Run it 20 times at temperature 0.2, 1.0 and 1.5 and compare the picks. You've just written the last step of every chat model.",
        "Stop here when your log has the token table, your guess next to the real ratio, and one sentence on what temperature does."
       ]
      }
     ],
     "recall": [
      {
       "q": "What is a token, and what does the model predict?",
       "link": "https://www.youtube.com/watch?v=LPZh9BOjkQs",
       "answer": "A token is a small piece of text, such as part of a word or a punctuation mark. The model predicts the next token from everything before it, and repeats until the answer is done."
      },
      {
       "q": "Why should you never put an API key in Git?",
       "link": "#setting-up-your-tools",
       "answer": "Anyone with the key can make calls on your account and spend your credit. Git keeps history, so deleting the key from the latest file doesn't remove it from older commits."
      }
     ],
     "extra": [
      "[Karpathy, Deep Dive into LLMs like ChatGPT (3 h 31 min; watch it in 30-minute pieces alongside the next lessons)](https://www.youtube.com/watch?v=7xTGNNLPyMI)",
      "[Chip Huyen, AI Engineering, chapter 2, “Sampling” and “Structured Outputs” (book)](https://github.com/chiphuyen/aie-book)",
      "[Transformer Explainer](https://poloclub.github.io/transformer-explainer/) by Georgia Tech Polo Club: play with a real small model in your browser and watch each step.",
      "[Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/) by OpenAI: why models make things up, from the people who build them.",
      "[Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) by Andrej Karpathy (2 h): why token counts differ between languages, built from scratch. Optional."
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
        "Read Anthropic's [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents). Notice how a workflow differs from an agent.",
        "Watch Barry Zhang's talk [How We Build Effective Agents](https://www.youtube.com/watch?v=D7_ipDqhtwk) (15 min, Anthropic). Write down his advice on when not to build an agent.",
        "Choose 3 possible product features. For each one, write the user, the problem, the simplest useful solution and one way to measure success. Include a plain-code version as a baseline.",
        "Match each failure to its usual fix. Missing facts: give the model context or retrieval. Inconsistent format: use a schema and validation. The right behaviour still fails after prompt and data fixes: consider fine-tuning, with a separate test set. Training a model from scratch is a different project. Keep your three features and this list on one page."
       ]
      }
     ],
     "recall": [
      {
       "q": "What's the difference between a workflow and an agent?",
       "link": "https://www.anthropic.com/engineering/building-effective-agents",
       "answer": "In a workflow, your code sets the steps and branches. In an agent, the model chooses its next actions or tools, within limits your code sets."
      },
      {
       "q": "Why can the same question get different answers from a model?",
       "link": "#how-llms-work",
       "answer": "The model picks among several likely next tokens, so the same question can get different wording, or even different answers. Temperature controls how much randomness goes into that pick. A believable answer isn't always a correct one."
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
     "hook": "Apps can't use essays. They need the model to fill in a form.",
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
        "Write a script that turns a sentence like “Hackathon, Friday 3pm, Room 402” into an `Event` Pydantic model. Give `Event` a title, date, start time, end time and venue. Make the fields that can be missing optional. Before each run, write down what you expect back, then compare."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Read the [images and vision guide](https://developers.openai.com/api/docs/guides/images-vision). Send one poster image (a photo or a screenshot of any event poster) and get your `Event` back.",
        "Work out the cost of that call. Read the token counts in the response's `usage` field and multiply them by the prices on the [pricing page](https://developers.openai.com/api/docs/pricing). Print the cost after every call."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Read the [error codes guide](https://developers.openai.com/api/docs/guides/error-codes). Add a request timeout and at most 2 retries, only for rate-limit and server errors. If the response has a `Retry-After` time, wait that long. Otherwise wait a little longer each time, with some randomness. Also set an overall deadline. Never retry bad credentials, or a bad request without changing it.",
        "Handle refusals: log them and return “needs a human” instead of crashing. Using Gemini? It has no documented `refusal` field, so make a fake refusal in your test."
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
        "Spend 15 minutes on Anthropic's [Providing examples](https://academy.claude.com/courses/building-with-the-claude-api/providing-examples). Few-shot prompting means showing the model a few examples of input and output. Read the explanation or watch the video, and do the exercise with your own provider.",
        "Make 6 practice inputs, including one with an ambiguous date and one with a missing venue. Save your current prompt as v1. Make v2 by changing one thing only: clearer instructions, or two examples.",
        "Run both on the same inputs, with the same model and settings. Keep the raw outputs. Mark each field correct, wrong or “unknown” (right when the input doesn't say). Neater formatting doesn't mean the facts are better.",
        "Keep v2 only if the scores say it is better. Write the model ID, prompt version, settings and cost next to the scores. If the results are tied, say so. Six practice cases are too few to prove much."
       ]
      }
     ],
     "recall": [
      {
       "q": "How do you tell whether a prompt change helped?",
       "answer": "Change one thing, use the same practice cases and scoring rule, keep both sets of outputs, and compare the failures as well as the successes. Then test on cases you never tuned on. A schema checks the shape of the answer, not whether it's true.",
       "link": "#structured-output-and-errors"
      },
      {
       "q": "When is a workflow a better choice than an agent?",
       "link": "#the-ai-staircase",
       "answer": "Use a workflow when the steps are predictable and your code can handle each branch. Use an agent only when letting the model choose the next step is worth the extra complexity and cost."
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
     "hook": "A poster photo goes in and an event form comes out. The most important part is the Approve button.",
     "intro": [
      "Your first real AI feature: you take a photo of an event poster and turn it into a filled event form.",
      "A person always checks and approves the form before anything is saved. This is the kind of feature you might add to your Events platform one day."
     ],
     "unlocks": "ship a vision feature with an honest score, a cost per use and an approval step.",
     "edge": "measuring on data you never tuned on.",
     "before": [
      "Create a new **public** GitHub repo called `poster-reader`. Commit early and often, with messages that say what changed.",
      "Use 2–5 photos of real public notices from campus boards. Include one in Bangla and English, and blur any personal phone numbers. Add simple posters you make yourself; plain text slides are fine. Spend 2 hours at most making posters: the AI is the project, not the design.",
      "Write down the correct answers before you write any prompt. Keep some posters hidden while you build (“held back”), so your final score is honest.",
      "Don't look at other people's versions of this project until yours works. Then compare and learn.",
      "Stuck for more than 20 minutes? Write down what you tried, take a short break, search the course FAQ or docs, then ask with your code and the exact error."
     ],
     "assignment": [
      {
       "day": "Days 1–6 · about 9 hours",
       "steps": [
        "**Day 1:** Collect 15 test posters in 2 hours at most: your real photos plus posters you make. Keep 10 to practise on and hold back 5. On purpose, include some with missing, unclear or hard-to-read details. Stop when all 15 are in two folders.",
        "**Days 2–3:** Write `expected.json` with the correct details for all 15 posters. Then write `SCORING.md`: how you'll compare dates, times and venue names, and how you'll score missing or unclear details. Stop when someone could score a poster from your rules alone.",
        "**Days 4–6:** Build the reader. An image goes in and a strict `Event` comes out. Do one piece a day. Day 4: the model call. Day 5: plain-code checks (the date is real, the end is after the start). Day 6: a timeout, at most 2 retries and refusal handling.",
        "**Stop here on Day 6:** the reader works on 3 practice posters from the command line."
       ],
       "split": true
      },
      {
       "day": "Days 7–12 · about 9 hours",
       "steps": [
        "**Days 7–8:** Build the approval screen in Streamlit: show the draft, let a person fix it, and save only when they approve. Stop when one approved poster is saved and one rejected one isn't.",
        "**Days 9–10:** Improve your prompt using only the 10 practice posters. When you're happy, run the 5 held-back posters once. Stop when the held-back score is written down, good or bad.",
        "**Days 11–12:** Write a README: what it does, how to run it, your score on the held-back posters, the cost per poster and one note for every mistake. Add a 60-second recording or GIF: photo in, draft out, a human fix, then approval."
       ],
       "split": true
      }
     ],
     "done": [
      "Your public repo's README shows the score on the 5 held-back posters (using your scoring guide) and the cost per poster, with a note on every mistake.",
      "A test shows that an unapproved draft can't be saved and an approved one can. List the cases you tested.",
      "A failed API call is retried at most twice, then shows “needs a human”.",
      "Explain the request flow, two decisions and one failure. Then, without AI-written code, change a real validation rule (for example, reject an end time before its start). Predict what will happen, then show a check that fails before the change and passes after it. You may use the docs."
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
   "opener": "Pasting one poster into ChatGPT works. Your code has to handle a hundred, and some will fail. In this section you learn how language models work, how to get checked answers from them, and how to handle errors and cost. You finish by building a poster reader."
  },
  {
   "title": "RAG with LLM Zoomcamp",
   "weeks": "Weeks 5–22",
   "description": "Learn RAG: finding the right information and letting a model answer from it. You'll follow the free LLM Zoomcamp course, build Ask MDN, an assistant for web docs, then start the knowledge base for your Campus Assistant.",
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
      "lesson": "Retrieve sources, show them, and check that they support the answer. A citation lets you verify a claim, but it doesn't make the claim true.",
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
        "Zoomcamp Module 1: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/01-intro.md), [03 RAG](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/03-rag.md) (notice why plain models don't know your data) and [04 Dataset](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/04-dataset.md). You did 02 in Setting Up Your Tools."
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
        "Start Ask MDN: create a new **public** GitHub repo called `ask-mdn` and clone it.",
        "Next to it, not inside it, download only the two folders you need from [mdn/content](https://github.com/mdn/content). The whole repo is about 500 MB, so run `git clone --depth 1 --filter=blob:none --sparse https://github.com/mdn/content.git`. Then go into the new `content` folder and run `git sparse-checkout set files/en-us/web/css/reference/properties files/en-us/web/javascript/reference/global_objects`.",
        "In the `content` folder, run `git rev-parse HEAD` and write the commit ID in the README of `ask-mdn`. That exact version is your data from now on, so your tests stay fair."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "Load the two folders into minsearch: CSS properties and JavaScript global objects.",
        "Each MDN page is a Markdown file. It starts with front matter between `---` lines and contains `{{macro}}` lines. Read the title and slug from the front matter, drop the macro lines and keep the text.",
        "Ask it three questions and look at what it finds. This is **Ask MDN v0.1**: it finds the right pages for a question. Commit early and often, with messages that say what changed."
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
     "time": "about 1.5 weeks",
     "hook": "Write the exam, mark it yourself, score 100%. Machine learning calls that a bug.",
     "intro": [
      "Before you improve Ask MDN, you need a fair way to measure it. Every test depends on two basic ideas.",
      "First, keep some test data hidden while you build, or your score will fool you. Second, know precision (how much of what you found is right) and recall (how much of the right stuff you found)."
     ],
     "unlocks": "catch a score that looks great because test data leaked into the tuning.",
     "edge": "judging data: splits, leaks, precision and recall. You can use them to question any accuracy claim, even a vendor's.",
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
        "Read Google's ML Crash Course lesson [Dividing the original dataset](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets). This is a light day, good for low-energy days or a power cut."
       ]
      },
      {
       "day": "Day 2 · light day, about 45 min",
       "steps": [
        "Read Google's ML Crash Course lesson [Accuracy, precision and recall](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall)."
       ]
      },
      {
       "day": "Days 3–5 · about 4.5 hours",
       "steps": [
        "In your `ask-mdn` repo, write 20 practice questions for Ask MDN. For each one, list the page IDs (file paths) that answer it. These are for tuning, so use them as often as you like.",
        "Write 10 questions your two MDN folders cannot answer. Mix clearly unrelated questions with believable CSS or JavaScript questions whose answer isn't in your folders. Write down why each one can't be answered. You'll use these to teach Ask MDN to say “I don't know”.",
        "Commit both files. You'll write the hidden test questions later."
       ]
      },
      {
       "day": "Day 6 · campus track, about 45 min",
       "steps": [
        "Start your capstone question bank in a new **private** repository called `campus-assistant-data`. Write 20 questions that students at your university really repeat: fees, add/drop, withdrawal, scholarships, exams, services. Use your own words, and write some the way students type: English, Bangla and Banglish (romanized Bangla, such as “withdraw korle ki scholarship thakbe?”).",
        "For each question, add an intent label (for example `withdraw-scholarship`), the office you think owns the answer, and whether you believe an official page answers it. Never store names, usernames, profile links or screenshots of real people. That rule holds for the whole capstone.",
        "Split the bank the way you split the Ask MDN questions: 14 for practice and 6 held back. You'll add more questions later.",
        "Send a short, friendly email to your student affairs or registrar office. Say what you're building, that it's an unofficial student project, and ask for a named contact for policy questions and the counselling centre's contact details. Replies take weeks, so ask now."
       ],
       "added": "2026-10-28"
      },
      {
       "day": "Days 7–10 · under the hood, about 6 hours",
       "added": "2026-10-30",
       "steps": [
        "Across these four Days, follow Andrej Karpathy's [building micrograd](https://www.youtube.com/watch?v=VMj-3S1tku0) (2.5 h), typing every line yourself. Pause before each new function and predict what it must do. Need PyTorch for the checks? Get the CPU-only build: add the PyTorch CPU index to `pyproject.toml` as in uv's [PyTorch guide](https://docs.astral.sh/uv/guides/integration/pytorch/), then run `uv add torch`. Or use a free [Colab](https://colab.research.google.com/) notebook.",
        "**Day 7 (up to 32:10):** derivatives by nudging an input, then a `Value` class that adds and multiplies and draws its expression graph. Stop when it draws one small expression with the right values.",
        "**Day 8 (32:10 to 1:09:02):** fill in gradients by hand, first for a small expression, then for a neuron with `tanh`. Stop when they match the ones you work out on paper.",
        "**Day 9 (1:09:02 to 1:51:04):** a `_backward` for each operation and one `backward()` that uses a topological sort. Check it against PyTorch, then write a neuron, a layer and a tiny MLP. Stop when your gradients match PyTorch's to 4 decimal places and the MLP runs a forward pass.",
        "**Day 10 (1:51:04 to 2:14:03):** train the MLP on the video's four examples until the loss falls steadily.",
        "Now see overfitting yourself. Make data where it is easy to see: two overlapping clusters of 2-D points, with 20 points for training (flip 10% of their labels) and 200 held out.",
        "Train a 2-16-16-1 MLP for 500 steps. Every 10 steps, log the training loss and the held-out loss. Plot both (`uv add matplotlib`).",
        "Find where the training loss keeps falling but the held-out loss stops falling. That is overfitting, measured by you. If the held-out loss never flattens, halve the training set. Stop when the plot and a three-line explanation are committed."
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
      "text": "It sends back a structured request: “call search with this query”. Your code runs it, sends back the result and asks again. This repeats until the model answers in plain text, or a step limit stops it.",
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
        "[14 Agentic loop](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/14-agentic-loop.md). Keep your loop code; you'll use it on Day 4."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "**No AI for this one:** close the course code and rewrite the agent loop from memory, in 20 minutes at most. Then compare it with the course code and fix the gaps.",
        "Add to Ask MDN: turn your search into a tool, let the model call it, and log every call.",
        "Before you put the loop in a chat page, add three limits: at most 8 rounds of model and tool calls, a timeout on each network call, and a clear “stopped” status. Test it with a fake model that keeps asking for search: it must stop at the limit. Keep tools read-only for now. A step limit doesn't cap cost, so also record token usage."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "Build a small Streamlit chat page for Ask MDN, about 20 lines. You used Streamlit in Structured Output and Errors.",
        "This is **Ask MDN v0.2**: you can chat with it, and it decides when to search. Ask it 5 of your practice questions, then show it to a friend if one is around."
       ]
      }
     ],
     "recall": [
      {
       "q": "What stops an agent loop from running forever?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/14-agentic-loop.md",
       "answer": "The loop normally ends when the model gives a final answer without asking for another tool. Your code also enforces a step limit, which stops the loop even if the model never decides to finish."
      },
      {
       "q": "What is the difference between precision and recall?",
       "link": "#ml-basics-measuring-quality",
       "answer": "For search, precision is the share of the results you got that are relevant. Recall is the share of all relevant items that you found. As formulas: precision = TP / (TP + FP), recall = TP / (TP + FN)."
      }
     ],
     "extra": [
      "Zoomcamp [15 Frameworks](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/15-frameworks.md) and [16 Other frameworks](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/01-agentic-rag/16-other-frameworks.md): a tour of agent frameworks. This path uses LangGraph in the Agents section.",
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
     "time": "about 2 weeks, plus 2 hours",
     "hook": "Keyword search reads spelling. Vector search reads meaning.",
     "intro": [
      "Keyword search only finds exact words. If someone asks about “centering” but the page says “alignment”, it can miss. Embeddings fix this.",
      "An embedding turns text into a list of numbers, so texts with similar meaning end up close together. Searching by meaning is called vector search."
     ],
     "picture": "A map of Dhaka where pages are pinned by meaning, not spelling. “Cheap fuchka near campus” and “affordable street snacks close to the university” share a street, while “campus Wi-Fi password” sits across town. An embedding is a page's coordinates, with hundreds of numbers instead of two, and vector search means: show me the nearest pins.",
     "unlocks": "search by meaning, for free, on your own laptop.",
     "edge": "weighing trade-offs between ways of representing data.",
     "overview": [
      "Explain what an embedding is.",
      "Run vector search with minsearch and with sqlitesearch.",
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
        "Before Day 2: Zoomcamp lesson 02 installs sentence-transformers, which also installs PyTorch. On Linux that can mean several GB of GPU libraries. On a slow connection or a small laptop, first add the PyTorch CPU index to `pyproject.toml` as in uv's [PyTorch guide](https://docs.astral.sh/uv/guides/integration/pytorch/) and run `uv add torch`, then add sentence-transformers. Or work in a Codespace."
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
        "[07 sqlitesearch vector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/07-sqlitesearch-vector.md). This keeps your search index in one file, which is what Ask MDN will use online. Skip lesson 08 (pgvector) for now. You don't need it yet."
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
        "Give every chunk two IDs: `page_id` for the source page and `chunk_id` for the piece. Store the chunk's text and its source URL too.",
        "Search results get scored by page, not by chunk. Write a small function, `unique_pages(chunks)`, that turns a ranked list of chunks into a ranked list of different pages, keeping each page's first appearance: `[A:1, A:2, B:1, C:1]` becomes `[A, B, C]`, so B is now rank 2. Keep the matching chunks too, because the answer prompt needs them."
       ]
      },
      {
       "day": "Days 8–11 · about 6 hours",
       "steps": [
        "Add to Ask MDN: build a vector search over your chunked MDN data with the ONNX embedder. It runs on your own computer, so it's free. Do one piece a Day.",
        "**Day 8:** split every MDN page into chunks, keeping `page_id`, `chunk_id`, text and source URL. Stop when you can print all the chunks of one page.",
        "**Day 9:** build the sqlitesearch vector index of your chunks with the ONNX embedder. Embedding every chunk takes a while, so build it once and keep the file. Stop when the index file exists and one question returns 5 chunks.",
        "**Day 10:** write `vector_search(question)`. It returns the top chunks with their `page_id` and source URL, in the same shape as your keyword search, so the rest of Ask MDN can use either one.",
        "**Day 11:** compare its answers with keyword search on 5 practice questions. This is **Ask MDN v0.3**: it searches by meaning."
       ]
      },
      {
       "day": "Day 12 · campus track, about 45 min",
       "steps": [
        "Take 8 intents from your question bank. Write each one three ways: English, Bangla and Banglish. Embed all 24 sentences with the embedder you use now. Then embed them again with a second embedder whose model card lists Bengali among its training languages.",
        "Take each sentence and search only the sentences in another language. It's a hit when the nearest one has the same intent. For each pair of languages and each embedder, record the hit rate in your log. Expect Banglish to be the hardest. With only 8 sentences per pair, one miss moves a score by 12.5 points, so treat this as a first signal only."
       ],
       "added": "2026-10-28"
      },
      {
       "day": "Day 13 · under the hood, about 90 min",
       "added": "2026-10-30",
       "steps": [
        "Without AI-written code, rebuild the vector search you've been using. In numpy, normalise your MDN chunk vectors, compute the cosine similarity for a question as one matrix product, and take the top 5.",
        "Compare it with sqlitesearch on 5 practice questions. Yours is exact. sqlitesearch's vector search is approximate by default: an index picks candidates, and only those are reranked exactly. Where the top 5 differ, check that your extra result really scores higher. Record how many of the 25 results match.",
        "Time your version on 1,000 and on 100,000 random unit vectors.",
        "Write one sentence on why sqlitesearch, like large systems, trades a little recall for speed.",
        "Stop here when both checks are in your log."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why can vector search find answers that keyword search misses?",
       "link": "https://developers.google.com/machine-learning/crash-course/embeddings",
       "answer": "Embeddings put texts with similar meanings close together, even when the words differ. So vector search can find paraphrases that keyword search misses. But a close match isn't always a relevant or correct one."
      },
      {
       "q": "What does function calling let the model do?",
       "link": "#tools-and-the-agent-loop",
       "answer": "The model can ask for a named tool to be run, with arguments in a fixed format. Your code decides whether to run it and sends the result back. The model never runs the function itself."
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
     "time": "about 1 week, plus 1 hour",
     "hook": "“It feels better” isn't a measurement. Now Ask MDN gets real scores.",
     "intro": [
      "Now you'll measure how good Ask MDN's search really is, with numbers instead of guesses.",
      "You'll also create the 50 held-back questions for the Ask MDN project. Once they're committed, you don't look at them again until then."
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
      "text": "To grade search you need an answer key: questions whose correct page you already know. Run search and see where that page lands. Hit Rate asks “was it in the top 5?”. MRR asks how near the top: 1st scores 1, 2nd ½, 3rd ⅓, missing 0, then you take the average. Careful: “recall” can mean two things. In ML it is the share of the right items you found. Zoomcamp's Recall@k is just another name for Hit Rate.",
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
        "Add to Ask MDN: measure Hit Rate@5 and MRR@5 for keyword search and for vector search on your 20 practice questions. The @5 means only the top 5 results count. Write the numbers in your README.",
        "Score the first 5 different pages, not 5 chunks. Fetch more chunks if you need to, then remove repeated pages in rank order with your `unique_pages` function. If fewer than 5 pages remain, score what you have.",
        "Add a small test: repeated chunks from page A must not push page B out of the top five pages."
       ]
      },
      {
       "day": "Day 8 · about 60 min",
       "added": "2026-10-30",
       "steps": [
        "Your Hit Rate on 20 practice questions is an estimate, not a fact. To see how uncertain it is, write a paired bootstrap, without AI-written code.",
        "Repeat 1,000 times: pick 20 of your practice questions at random, with replacement (some appear twice, some not at all). On that same pick, compute Hit Rate for keyword search and for vector search, and save the difference.",
        "Report the middle 95% of the 1,000 differences (the 2.5th to the 97.5th percentile). If the range includes 0, you can't yet say which search is better. With 20 questions the range will be wide. That is the point.",
        "Add the rule of three to your log: if you see 0 failures in n tries, the true failure rate could still be as high as about 3/n. Stop here when your results table shows every metric with its n and its range."
       ]
      }
     ],
     "recall": [
      {
       "q": "What does MRR reward that Hit Rate doesn't?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/04-evaluation/05-search-metrics.md",
       "answer": "MRR gives more credit the nearer the top the first right page is. Hit Rate only checks whether a right page showed up in the top 5. At @5, a question scores 0 in MRR if no right page is in the top 5."
      },
      {
       "q": "Why did you split long MDN pages into chunks?",
       "link": "#embeddings-and-vector-search",
       "answer": "A chunk is about one thing, so search can match a focused passage. A whole page covers many topics in one embedding. The page ID on each chunk connects it back to its source for citations and scoring."
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
      "Tell a high ranking apart from real evidence that the question can be answered."
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
        "Read Module 6 lessons [02 Hybrid search](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/02-hybrid-search.md) and [03 Reranking (RRF)](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/03-reranking.md). They were recorded in 2024, so some code is old. Take the ideas, not the code. Skip the Elasticsearch part of 03, because its built-in RRF needs a paid licence. Lesson 02 uses k = 1 and lesson 03 uses k = 60. Use 60 in Ask MDN."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "**No AI for this one:** write your own RRF function, about 15 lines. A page gets 1/(60 + rank) points from each list it appears in, and its points are added up. Ranks start at 1.",
        "Add a `hybrid_search()` that runs keyword search and vector search, turns each chunk list into a list of different pages with `unique_pages`, and combines the two with your RRF function.",
        "Test two cases: repeated chunks from one page, and a page that appears in only one list."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Measure Hit Rate@5 and MRR@5 for hybrid search on your practice questions and compare with keyword and vector search.",
        "A high RRF score doesn't mean the answer exists, so don't use it as a cutoff. Ask the model instead. Put the top passages in a structured prompt. It must return `supported` (true or false), an answer only if supported, and the IDs and short quotes of the chunks that support it.",
        "Check the reply in code: reject unknown chunk IDs and quotes that are not in those chunks. If the evidence is missing, answer “I don't know from these sources.”",
        "This check can still be wrong. Look at its decisions on your 20 practice questions and 10 unanswerable ones, including believable questions whose answer isn't in the docs. Count unsupported answers and unnecessary refusals separately.",
        "This is **Ask MDN v0.4**: it combines both searches and says “I don't know” when it can't support an answer."
       ]
      }
     ],
     "recall": [
      {
       "q": "What does RRF use from each result list?",
       "link": "https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/06-best-practices/02-hybrid-search.md",
       "answer": "It uses each page's position in each list, not the raw scores. A page gets 1/(k + position) points from every list it appears in, and the points are added. The result is a combined ranking, not the chance that the answer exists."
      },
      {
       "q": "What does Hit Rate@5 measure?",
       "link": "#measuring-search",
       "answer": "The share of questions where at least one right page appears in the top 5 results. It doesn't tell you whether the final answer is correct, or whether the right page was 1st or 5th."
      }
     ],
     "extra": [
      "[RAG Techniques: reranking and fusion notebooks](https://github.com/NirDiamant/RAG_Techniques)",
      "[Better RAG results with reciprocal rank fusion and hybrid search](https://www.assembled.com/blog/better-rag-results-with-reciprocal-rank-fusion-and-hybrid-search) by Assembled: a real team's results with the exact method you just built.",
      "[Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) by Anthropic: how adding a little context to each chunk cut failed searches.",
      "[How RRF scoring works](https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking): it explains the formula. Matching high ranks can't prove that a passage answers the question. You don't need an Azure account."
     ]
    },
    {
     "slug": "data-ingestion",
     "title": "Data Ingestion",
     "kind": "lesson",
     "time": "about 4.5 hours",
     "hook": "A good ingestion script is safe to run twice: run it ten times and you still get the same data.",
     "intro": [
      "Ingestion means loading your data into the app. Real data changes, so a good ingestion script is safe to run again and again without creating duplicates.",
      "You'll write Ask MDN's ingestion script now."
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
     "checkpoint": "Ask MDN v0.4 combines both searches and says “I don't know” when it can't find supporting evidence, and you have counted both its false answers and its unnecessary refusals.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Write Ask MDN's ingestion script. It reads your MDN snapshot, chunks each page, and saves each page's path, title and content hash along with its chunks. A content hash is a fingerprint of the text: if the text changes, the fingerprint changes."
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
        "Save and commit a manifest file: a list of every page path and its hash from this run.",
        "Write 2 pytest tests for the script: running it twice changes nothing, and an edited page is picked up again."
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
      "Choose a model setup by looking at quality, speed and cost together."
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
        "Add to Ask MDN, one piece a Day. Run the judge once per change, not after every small idea.",
        "**Day 3:** generate answers for your 20 practice questions and save them to a file, so you can grade again without paying again.",
        "**Day 4:** write the judge and use it to grade all 20 answers.",
        "**Day 5:** grade 10 of the answers yourself, before you look at the judge's verdicts. Write down how often the judge agreed with you."
       ]
      },
      {
       "day": "Day 6 · about 90 min",
       "steps": [
        "Read only “Design your eval process” in OpenAI’s [evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices). Use your own files and grader; you don't need OpenAI’s hosted Evals platform.",
        "Choose 10 of your practice questions. Include some with exact identifiers (like `justify-content`) and some your docs can't answer. Compare two models from your current provider. Give both the same retrieved chunks, prompt and output limit. Estimate the cost first. If you can only use one model, compare two settings of it instead, and call it a configuration comparison, not a model comparison.",
        "Hide the model names while you grade correctness, citation support and refusals. Record the cost, total time and failures for each answer. Re-run the two most unclear cases once to see how much answers vary. Don't touch your held-back questions.",
        "Write a five-line decision: the quality you accept, the longest wait and highest cost you accept, which option meets them, one failure it still has, and what would make you reconsider.",
        "Save a run manifest: model ID, prompt or config version, corpus hash, date and scores."
       ]
      }
     ],
     "recall": [
      {
       "q": "When is the cheaper model the better engineering choice?",
       "answer": "When it meets the quality and safety bar you set before testing, within your speed and cost limits. Compare the models on identical inputs and look at the failures. A tiny test set can't show that one model is better everywhere.",
       "link": "#grading-answers"
      },
      {
       "q": "Why save a content hash for every page?",
       "link": "#data-ingestion",
       "answer": "A saved hash shows which pages changed, so later runs can skip the unchanged ones. Hashes can't show that a page has disappeared, so compare the page IDs in successive manifests too."
      }
     ],
     "extra": [
      "[AI Evals FAQ by Hamel Husain and Shreya Shankar (more on evals)](https://hamel.dev/blog/posts/evals-faq/)",
      "[Creating an LLM-as-a-judge that drives business results](https://hamel.dev/blog/posts/llm-judge/) by Hamel Husain: how to build a judge you can actually trust.",
      "[Building with the Claude API: prompt evaluation](https://academy.claude.com/courses/building-with-the-claude-api): an optional video alternative. Use only the Prompt evaluation section; you don't need a second full course."
     ]
    },
    {
     "slug": "monitoring",
     "title": "Monitoring",
     "kind": "lesson",
     "time": "about 11 hours",
     "hook": "Sooner or later someone will ask Ask MDN for a biryani recipe. Logs show you the question, and what it said back.",
     "intro": [
      "Once people use your app, you need to see where answers fail, how much they cost and how long they take. Record details about each request, but not people's private messages. Keep the text of a conversation only if it is public or made up, and delete it after a short time."
     ],
     "unlocks": "see what users ask, what each answer costs and where it fails.",
     "edge": "owning how your app behaves after launch.",
     "overview": [
      "Turn your Streamlit page into a full chat app.",
      "Save details about each request, and a few allowed example conversations, in a database.",
      "Collect user feedback and inspect it alongside failed requests.",
      "Follow a failure through the logs without keeping private data you don't need."
     ],
     "checkpoint": "your log has saved answers for the 20 practice questions and a judge agreement number.",
     "bridge": {
      "text": "A request ID connects the steps behind one answer: search, model calls, time, cost and errors. That lets you find where a failure started. In this course, save conversation text only from public or made-up examples, and delete it after 7 days. Your evaluation test questions are a separate, reviewed dataset.",
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
       "day": "Day 3 · about 60 min",
       "steps": [
        "Skim [06 Querying](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/06-querying.md) and [07 Streamlit dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/07-streamlit-dashboard.md); you won't build these. Then do [08 User feedback](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/08-user-feedback.md) properly: you'll add the same thumbs up or down to Ask MDN."
       ]
      },
      {
       "day": "Day 4 · about 60 min",
       "steps": [
        "Skim [09 Built-in judge](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/09-built-in-judge.md) and [10 Feedback dashboard](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/10-feedback-dashboard.md). Then do [11 Synthetic data](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/11-synthetic-data.md) properly. Keep the generator: it makes realistic fake conversations."
       ]
      },
      {
       "day": "Days 5–7 · about 4.5 hours",
       "steps": [
        "Add to Ask MDN, one piece a Day. Use only public or made-up test conversations.",
        "**Day 5:** give every request one request ID, and use it to join retrieval, model calls and errors. Stop when one question gives you a single record you can read from start to finish.",
        "**Day 6:** for each request, save the step durations, the retrieved page IDs, the model, prompt and corpus versions, the tokens and the cost.",
        "**Day 7:** add the thumbs up or down feedback to the same record. Then inspect one failed run from input to output. This is **Ask MDN v0.5**: a wrong answer now leaves clues."
       ]
      },
      {
       "day": "Day 8 · about 90 min",
       "steps": [
        "Skim the monitoring and privacy topics in [Stanford CS329S](https://stanford-cs329s.github.io/syllabus.html).",
        "Write a one-page data policy: what leaves your app, where logs are kept, who can read them and when they are deleted. Keep conversation text for 7 days. Never log keys, auth headers or real private messages. Keep your approved made-up test data in a separate place.",
        "Test the policy. Send a fake email address and a fake token through the app, and make sure both are removed before anything is saved. A regex won't catch every kind of personal information. Add a cleanup command that deletes old logs, and test it on old fake logs. A restricted log is still stored data.",
        "Make a 5-request sample report: where the time went, the cost per request, one retrieval failure and one model failure. Plain JSON and a short table are enough. A new tracing service is optional."
       ]
      }
     ],
     "recall": [
      {
       "q": "What should a useful trace reveal, and what should it leave out?",
       "answer": "A request ID joins the retrieval, model and tool steps, with timings, versions, costs and errors. Keep only the text you need and are allowed to keep. Leave out credentials and private messages, limit who can read the logs, and test that deletion works. Logging everything forever is its own problem.",
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
      "[A field guide to rapidly improving AI products](https://hamel.dev/blog/posts/field-guide/) by Hamel Husain: why looking at real conversations beats any dashboard.",
      "[OpenTelemetry GenAI conventions](https://github.com/open-telemetry/semantic-conventions-genai): standard names (such as `gen_ai.provider.name`) for the fields you already log. Still in development; read only if you adopt a tracing tool."
     ]
    },
    {
     "slug": "deploy-it-safely",
     "title": "Deploy It Safely",
     "kind": "lesson",
     "time": "about 6 hours",
     "hook": "Anyone can press deploy. A good engineer can also undo a bad deploy in two minutes.",
     "intro": [
      "Deploying means putting your app online. You'll do it now.",
      "Ask MDN will be a private app that only people you invite can use. Its search file ships with the app. Its conversation logs need a database that lives online, so you'll set up a free one on Neon."
     ],
     "unlocks": "put an app online privately and undo a bad release.",
     "edge": "a safe release routine: deploy, check, roll back. Tools differ between teams; the routine carries over.",
     "overview": [
      "Deploy a Streamlit app from GitHub.",
      "Keep secrets like API keys out of your code.",
      "Store logs in a hosted Postgres database safely.",
      "Make your app private, and undo a bad deploy (roll back)."
     ],
     "checkpoint": "Ask MDN v0.5 saves details about each request, a few allowed example conversations, costs and feedback.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Read [Deploy your app](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app) and [Secrets management](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/secrets-management).",
        "Check that no API key is anywhere in your Git history, for example with `git log --all -p -S\"sk-\"`. If you find one, don't panic: revoke that key in OpenAI first, then clean the history. Then put the OpenAI key in the app's Secrets settings.",
        "Use the ONNX embedder from Embeddings and Vector Search, so the app stays small. Ship the sqlitesearch index file with the app, or build it when the app starts."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Create a free Neon project ([plans](https://neon.com/docs/introduction/plans)). Read [Neon roles](https://neon.com/docs/manage/roles). Roles made on Neon's website get powers that skip security rules, so create your app's database role with SQL ([CREATE ROLE](https://www.postgresql.org/docs/current/sql-createrole.html)) instead.",
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
        "Check your OpenAI budget alerts and credit balance.",
        "Write a short “How to deploy” section in your README. Recruiters can't open a private app, so add a short GIF or recording of it working. This is **Ask MDN v0.6**: it's online.",
        "Set a local success target, such as 9 of 10 normal requests finishing within your time and cost limits. Write a short runbook: your failure limits, how to turn the app off, and how to roll back."
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
      "[OpenAI production best practices](https://developers.openai.com/api/docs/guides/production-best-practices): read Staging projects, Managing rate limits and Managing costs. Keep development traffic separate from the live app. Model names and account limits change."
     ]
    },
    {
     "slug": "project-ask-mdn",
     "title": "Ask MDN",
     "kind": "project",
     "time": "about 3 weeks",
     "hook": "You know MDN, so you'll spot Ask MDN's mistakes first. That's your unfair advantage.",
     "intro": [
      "This is your Zoomcamp final project, built on MDN. It answers CSS and JavaScript questions, shows which pages it used, and says “I don't know” when the docs don't cover a question."
     ],
     "unlocks": "demo a live, cited RAG app, with scores measured on questions it never saw.",
     "edge": "end-to-end ownership, backed by evidence. This is likely the repo interviewers will ask about.",
     "before": [
      "Read the Zoomcamp [project criteria](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/project.md) and use them as a checklist. This path covers most of them; the optional extras are in Extra credit below.",
      "Decide who it's for, for example first-years in your university's programming club. Only your prompt and README change.",
      "Your MDN data and your test questions are frozen. Don't change them now.",
      "MDN's text is shared under a licence called CC-BY-SA. Credit “Mozilla Contributors” and link each page you use ([MDN licensing](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license))."
     ],
     "checkpoint": "Ask MDN v0.6 runs online as your private app, with conversations saved in Neon.",
     "assignment": [
      {
       "day": "Days 1–6 · about 9 hours",
       "steps": [
        "**Days 1–3:** Bring together everything from this section: ingestion, hybrid search, the prompt, the chat app and logging. One piece a Day, each one running before you add the next.",
        "**Days 4–5:** Make every answer show links to the MDN pages it used.",
        "**Stop here on Day 6:** 5 practice questions get correct, cited answers."
       ],
       "split": true
      },
      {
       "day": "Days 7–12 · about 9 hours",
       "steps": [
        "**Days 7–8:** Check the “I don't know” path on your 10 unanswerable questions.",
        "**Days 9–11:** Run your tests on the 50 held-back questions, once, and record the results. Rerun your bootstrap from [Measuring Search](#measuring-search) on them and report the range next to each metric.",
        "Grade a 10-answer sample by hand: is the answer correct, and does the cited passage support the claim? A valid URL alone is not enough.",
        "Answer the same 10 questions with the same model and output limit, but with no retrieved pages. Prompt it to answer from its own knowledge and to say when it's unsure. Grade both sets the same way. This baseline shows what retrieval really adds.",
        "Record mistakes even when retrieval succeeded. Once you've looked at the held-back results, they become regression data: don't call them unseen after you tune on them.",
        "**Stop here on Day 12:** your README has the results table."
       ],
       "split": true
      },
      {
       "day": "Days 13–18 · about 9 hours",
       "steps": [
        "**Days 13–14:** Put the final version online as a private app (see [Deploy It Safely](#deploy-it-safely)). This is **Ask MDN v1.0**.",
        "**Day 15:** If a friend can help, ask them for 5 CSS or JavaScript questions they really got stuck on this month, and run them on the live app. No one free? Ask in the Zoomcamp Slack, or use 5 old bugs of your own.",
        "**Days 16–17:** Finish the README. Open it with a real bug you once lost hours to, and Ask MDN's cited answer. Then: how it works, how to run it, your results, a GIF and what you'd improve.",
        "**Day 18:** If a Zoomcamp cohort is open, submit your project for peer review. If not, share your repo in `#course-llm-zoomcamp` and ask for feedback."
       ],
       "split": true
      }
     ],
     "done": [
      "Your README reports Hit Rate@5 and MRR@5 for keyword, vector and hybrid search on the 50 held-back questions. If hybrid doesn't win, explain why. Include your model or setup comparison and its decision, with the prompt and corpus versions.",
      "Every factual answer names its source passages. Your README shows hand-graded results for 10 answers (is it correct? does the citation support it?) next to the same model answering without retrieval, and explains the failures.",
      "Report how often it said “I don't know” on the 10 unanswerable questions, and how often it wrongly refused answerable ones. Call this a regression result, not proof that it works on new questions.",
      "It runs online as your private Streamlit app, with the API key stored in Secrets and conversations saved in Neon.",
      "Explain the request flow, two design decisions and one failure. Without AI-generated code, write a core retrieval function (such as page deduplication or rank fusion), test it with duplicate and missing results, and explain how it behaves on a new input. Documentation is allowed. Note the commit."
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
    },
    {
     "slug": "campus-knowledge-base",
     "title": "Campus Knowledge Base",
     "kind": "lesson",
     "time": "about 10.5 hours, then 1 hour a week",
     "hook": "The hard part of a campus assistant isn't the model. It's knowing which answer is true this semester.",
     "intro": [
      "Your capstone is a Campus Assistant. Students ask about rules, fees, courses and services, and get a short answer that cites an approved source, or an honest “I don't know, ask this office.” You already know how to search and answer. What you don't have yet is data you can trust. Data takes calendar time (permissions, official documents, checked answers), so you start now and spend one hour a week on it.",
      "Student groups are full of these questions, and they come back every semester. They show you what students ask and how they phrase it. They make a poor answer store: replies conflict, rules change, and the posts belong to other people. Use the group for questions. Take answers from official sources or from a staff member who confirms them."
     ],
     "unlocks": "start a real knowledge base with permission, sources you can trace and a weekly curation habit.",
     "edge": "turning messy community knowledge into data you can defend. Data curation is one of the least automated parts of AI work.",
     "overview": [
      "Set data rules and ask for permission before collecting anything.",
      "List the official sources that can answer students' questions, with dates and owners.",
      "Turn repeated questions into intents, then write your first approved answers with citations."
     ],
     "checkpoint": "Ask MDN v1.0 is online and your question bank from [ML Basics](#ml-basics-measuring-quality) has 20 questions.",
     "bridge": {
      "text": "Every answer your assistant gives will point back to one entry in this knowledge base. An entry is a promise: this answer was true, for these students, on this date, according to this source.",
      "terms": [
       [
        "Intent",
        "What the student wants, independent of wording or language. “Withdraw dile scholarship thakbe?” and “Will a withdrawal affect my scholarship?” share one intent."
       ],
       [
        "Source tier",
        "How much to trust an answer: A = official document, B = confirmed by staff, C = student know-how a curator approved. Raw posts are never served."
       ],
       [
        "Provenance",
        "Where a fact came from and when: URL or office, retrieval date, semester it applies to."
       ],
       [
        "Review-by date",
        "When an entry must be rechecked. Fees, deadlines and calendars expire every semester."
       ]
      ]
     },
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Write a one-page data policy as `POLICY.md` in your private `campus-assistant-data` repository (you made it in ML Basics). Say what you collect (question wording, rewritten in your own words), what you never collect (names, usernames, profile links, photos, private messages, ratings of named teachers), where it is stored, and when you delete it.",
        "Add one rule for model calls: only questions you wrote or paraphrased go to a model API, with nothing that identifies a person. Never send raw posts, exports or anything you couldn't show the person who wrote it.",
        "Read Meta's [Automated Data Collection Terms](https://www.facebook.com/legal/automated_data_collection_terms). They cover any automated collection (bots, crawlers and similar tools) and require Meta's written permission. An AI agent driving your logged-in browser counts, so don't use one. Read the group yourself and write down only the question, in your own words.",
        "Start with consent. Make a short form where students submit questions they wish someone had answered, with no names, IDs or personal cases. If you post it in a Facebook group, Meta's [Pages, Groups and Events policies](https://www.facebook.com/policies_center/pages_groups_events) require notice and explicit consent, and you must make clear that you, not Meta, are collecting. Put that at the top of the form.",
        "Ask for help, not just permission. Message the group's admins: explain what you will and won't collect, and ask them to pin the form. Email the student affairs or registrar office: ask for the official rule documents, and ask whether someone could confirm answers once a month."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Build `sources.csv` with at least 25 official sources: academic rules, scholarships and waivers, fees and deadlines, the academic calendar, degree curricula and prerequisites, registration and advising steps, student services, and an office contact list. For each one, record the URL, the owning office, the format, the semester it applies to and the date you retrieved it.",
        "Check each site's `robots.txt` and terms before downloading. Save a dated copy of each document, because pages change without notice. Note which ones are scanned images, because they need OCR (software that reads text from images).",
        "Mark the gaps: questions in your bank that no public source answers. Those need a staff answer, or they stay unanswerable."
       ]
      },
      {
       "day": "Days 3–4 · about 3 hours",
       "steps": [
        "Grow the question bank to 100. Take form submissions first, then questions friends and juniors ask, then patterns you notice reading the group yourself. Rewrite each one in your own words, keep the student's language (English, Bangla or Banglish) and record the month. If a community answer conflicts with an official one, note it as a hint to check, never as the answer.",
        "Split the bank before you group it. Keep paraphrases and translations of the same question together in one split. Put practice cases in `development.jsonl`. Put every third new case in `held_back.jsonl`, with at least 5 per language to start. The held-back file is for the final release check only: never use its wording in entries, prompts or model choices.",
        "Start `regression.jsonl` for failures you find while building. If you looked at held-back results to make a change, move those cases to regression and replace them with fresh cases before release.",
        "Group the remaining questions into intents by hand, using the labels you started in ML Basics. If you automate it, embed with the Bengali-capable model from your Embeddings check and confirm every group yourself. English, Bangla and Banglish versions of one question often land in different groups ([clustering overview](https://scikit-learn.org/stable/modules/clustering.html)). Count each intent. The top 20 are your first FAQ entries."
       ]
      },
      {
       "day": "Days 5–6 · about 3 hours",
       "steps": [
        "Write 20 entries in `faq.jsonl`. Each entry has: `intent`, `question`, `paraphrases` (including Bangla and Banglish, written by you, never copied from `held_back.jsonl`), `answer`, `conditions` (for example credit load or intake year), `applies_to`, `sources` with quoted text, `tier`, `effective_semester`, `review_by` and `status`.",
        "Answer only from the quoted source. If the source doesn't settle a case, write the condition the student must check and the office to ask. Mark entries without an official source `needs-staff`.",
        "From now until the capstone, block **1 hour a week** inside your 9 hours for the knowledge base. Each week: add or review 5 entries, add 3 new questions (form submissions first), put every third new case in `held_back.jsonl`, recheck one changed page, and log any gaps. Keep related phrasings in the same split.",
        "Your target is 150 questions, with at least 15 per language held back for release. Record each set's version, case IDs, language counts and any exposure in `EVAL-SETS.md`.",
        "A friend can keep your release set sealed. If you work alone, avoid looking at it during development, and say so in your report."
       ]
      },
      {
       "day": "Day 7 · first campus slice, about 90 min",
       "steps": [
        "Point your Ask MDN v1.0 code at your first 20 entries with an official source (skip `needs-staff` ones): private, on your laptop, English first, no users. Predict first: on 10 development questions, which wins, keyword search over questions and paraphrases, or your hybrid search?",
        "Then try the safest answer mode there is: the model may only return the ID of an approved entry, or `none`. Your code shows that entry's approved text, or a route card when the reply is `none`, empty or invalid. The model never writes a rule.",
        "Stop here when you've asked 5 questions, including one that must get an honest “I don't know, ask this office”, and logged which mode answered more questions correctly without inventing anything. That's your first campus assistant.",
        "Re-run these 10 questions in the first data hour of each month. It's your campus scoreboard."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why are student-group replies used as questions and hints, but not as answers?",
       "link": "#campus-knowledge-base",
       "answer": "Replies conflict, go out of date and belong to other people. Questions show real demand and wording; answers must trace to an official source or a staff confirmation with a date."
      },
      {
       "q": "Which fields stop an FAQ entry from going stale or being applied to the wrong student?",
       "link": "#campus-knowledge-base",
       "answer": "Conditions and applies_to (who it is for), effective_semester and review_by (when it is true), and sources with quoted text (why it is true)."
      },
      {
       "q": "What do you do with a question no public source answers?",
       "link": "#campus-knowledge-base",
       "answer": "Record it as a gap, mark the entry needs-staff, and ask the owning office. Until then the assistant should say it doesn't know and name the office."
      }
     ],
     "extra": [
      "[Meta Automated Data Collection Terms](https://www.facebook.com/legal/automated_data_collection_terms): the rules for collecting data from Facebook by automated means."
     ],
     "added": "2026-10-28",
     "before": [
      "Reading a Facebook group yourself is fine for spotting questions. Copying it with a script, a bot or an AI agent is automated collection, and that needs Meta's written permission. Group admins can't give that permission for Meta or for each author."
     ]
    },
    {
     "slug": "under-the-hood-tiny-gpt",
     "title": "Under the Hood: A Tiny GPT",
     "kind": "lesson",
     "added": "2026-10-30",
     "time": "about 9 hours",
     "hook": "You've been calling a model for months. This week you build a very small one.",
     "intro": [
      "Every answer Ask MDN gives comes from a machine that predicts the next token. This lesson opens that machine. You'll build a next-character model by counting, turn it into a tiny neural network, and then add the one idea that makes GPTs work: attention.",
      "It uses the same mechanism as the models you call, at a size a laptop or a free notebook can train in minutes. You won't compete with them. The goal is to understand tokens, context windows, training loss and sampling, so you can reason about failures instead of guessing."
     ],
     "unlocks": "explain, from your own working code, how a GPT turns a context into the next token.",
     "edge": "first-principles understanding. Tools change; the mechanism underneath them doesn't.",
     "overview": [
      "Build a next-character model by counting, then as a one-layer neural network.",
      "Implement self-attention by hand and add it to a tiny transformer.",
      "Train it, read the training and validation loss, and change one thing fairly."
     ],
     "checkpoint": "[Ask MDN](#project-ask-mdn) v1.0 works and your micrograd Days in [ML Basics](#ml-basics-measuring-quality) are done.",
     "predict": "A model that only looks at the previous character writes names. Guess how many of 20 sampled names will look like real names.",
     "assignment": [
      {
       "day": "Day 1 · under the hood, about 90 min",
       "steps": [
        "Watch Andrej Karpathy's [building makemore](https://www.youtube.com/watch?v=PaCmpygFfXo) up to 1:02:57, typing as you go. You'll count letter pairs in a list of names, sample new names and compute the average negative log likelihood. In the broadcasting section (36:17 to 50:14), watch without typing, then type only the final normalisation line.",
        "Stop when you can sample 20 names and say what the loss number means."
       ]
      },
      {
       "day": "Day 2 · under the hood, about 90 min",
       "steps": [
        "Finish the video from 1:02:57. You'll rebuild the same bigram model as a one-layer neural network in PyTorch, trained with gradient descent. Watch the summary (1:26:17 to 1:35:49) and the two notes (1:47:49 to 1:54:31) without typing.",
        "Stop when its loss is close to the counting model's loss, and you can explain why they should match."
       ]
      },
      {
       "day": "Day 3 · under the hood, about 90 min",
       "steps": [
        "Start Karpathy's [Let's build GPT](https://www.youtube.com/watch?v=kCc8FmEb1nY). Watch up to 42:13 without typing. You built the data split, batches and a bigram model in makemore, so copy `bigram.py` from the [lecture's code](https://github.com/karpathy/ng-video-lecture) instead.",
        "Then type along from 42:13. Before the attention section, do the “mathematical trick” by hand: on a 4-token example, average each token with the tokens before it, first with loops, then as one matrix multiplication.",
        "Stop when both versions give the same numbers."
       ]
      },
      {
       "day": "Day 4 · under the hood, about 90 min",
       "steps": [
        "Build one self-attention head, then several heads and a feed-forward block, following the video. Keep every shape written in a comment.",
        "Stop when a forward pass runs on a batch and every shape matches your comments."
       ]
      },
      {
       "day": "Day 5 · under the hood, about 90 min",
       "steps": [
        "Add residual connections and layer norm as the video does (1:26:48 to 1:37:49).",
        "Then train a tiny configuration on CPU or a free [Colab](https://colab.research.google.com/) notebook, on a small text you have the right to use (the video's Shakespeare file is fine). Plot training and validation loss, and sample some text.",
        "Stop when the plot and a sample are committed. If training is too slow, shrink the model; the goal is the mechanism, not quality."
       ]
      },
      {
       "day": "Day 6 · under the hood, about 90 min",
       "steps": [
        "Change one thing, such as the context length or the number of layers (with residuals and layer norm in place). Compare training and validation loss fairly: same data, same steps, same seed.",
        "Without the video, explain in your log what a context window is, why tokens cost money, and what temperature changes, using your own code as the example.",
        "Then answer one more question. Your tiny GPT can only continue text, but the model you use every day can ask your code to run a tool. Why? Hint: after pre-training, it was trained further on examples of tool requests, written with special tokens that mark where a request starts and ends. Your code, not the model, runs the tool, as in [Tools and the Agent Loop](#tools-and-the-agent-loop).",
        "Stop when someone could follow your explanation."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why should the counting bigram model and the one-layer neural network reach about the same loss?",
       "link": "#under-the-hood-tiny-gpt",
       "answer": "Both model the same thing: the next character, given only the previous one. Gradient descent pushes each row of weights toward the log of that row's counts, so softmax gives about the same probabilities as the normalised counts. Smoothing and regularisation keep the match only approximate."
      },
      {
       "q": "What does self-attention let a token do that a bigram model can't?",
       "link": "#under-the-hood-tiny-gpt",
       "answer": "Use information from all earlier tokens in the context, weighted by relevance, instead of only the one before it."
      }
     ],
     "extra": [
      "[Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) by Andrej Karpathy: the full series these Days come from.",
      "[Elective: Go Deeper into Model Internals](#elective-model-internals): more depth on how these models work, when you want it."
     ]
    }
   ],
   "shift": {
    "before": "Your model answers from memory, and you can't prove search got better.",
    "after": "A live, private Ask MDN with citations, “I don't know”, a Hit Rate and MRR table and logs of every answer, plus a campus knowledge base with its first 20 sourced answers."
   },
   "opener": "Ask a model about a CSS property and it answers like a confident senior, even when it's wrong. In this section you give it an open book: MDN. Ask MDN learns to find the right page, show it, and say “I don't know” when the page isn't there. Then you test it and score it."
  },
  {
   "title": "Agents",
   "weeks": "Weeks 23–27",
   "description": "Give your app tools so it can take actions. You'll learn how agents work, build one with LangGraph, and learn to keep tools safe.",
   "lessons": [
    {
     "slug": "agent-fundamentals",
     "title": "Agent Fundamentals",
     "kind": "lesson",
     "time": "about 4 hours",
     "hook": "An agent is a loop: think, act, look at the result, repeat. Today you learn to read it step by step.",
     "intro": [
      "You already built a small agent loop in Tools and the Agent Loop. Now you learn the proper words and improve that loop by hand, with no framework.",
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
       "day": "Day 1 · light day, about 45 min",
       "steps": [
        "Hugging Face Agents Course, Unit 1: [What are agents?](https://huggingface.co/learn/agents-course/en/unit1/what-are-agents) and [Messages and special tokens](https://huggingface.co/learn/agents-course/en/unit1/messages-and-special-tokens)."
       ]
      },
      {
       "day": "Day 2 · light day, about 45 min",
       "steps": [
        "[Tools](https://huggingface.co/learn/agents-course/en/unit1/tools) and [Agent steps and structure](https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure)."
       ]
      },
      {
       "day": "Day 3 · light day, about 45 min",
       "steps": [
        "[Thoughts](https://huggingface.co/learn/agents-course/en/unit1/thoughts), [Actions](https://huggingface.co/learn/agents-course/en/unit1/actions) and [Observations](https://huggingface.co/learn/agents-course/en/unit1/observations). Stuck? Ask in the Hugging Face Discord's `#agents-course-questions` channel."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "**No AI for this one:** take the agent loop you wrote in [Tools and the Agent Loop](#tools-and-the-agent-loop) and add two things. First, make a tool error go back to the model as an observation instead of crashing. Second, add a tool that returns a page's title. Log every step."
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
      "[What's next for AI agentic workflows](https://www.youtube.com/watch?v=sal78ACtGTc) by Andrew Ng (Sequoia Capital, 14 min): four agent design patterns in plain words.",
      "[How to build an agent](https://ampcode.com/notes/how-to-build-an-agent) by Thorsten Ball, Amp: a working coding agent in a few hundred lines; the loop really is that simple.",
      "[Designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/) by Simon Willison: how to give an agent a clear goal, good tools and safe limits."
     ]
    },
    {
     "slug": "langgraph",
     "title": "LangGraph",
     "kind": "lesson",
     "time": "about 9.5 hours",
     "hook": "Your hand-written loop forgets everything and can't pause. LangGraph adds memory and a way to wait for a person.",
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
      "Choose what conversation context to send to the model, within a budget, without changing permissions."
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
       "day": "Days 1–3 · about 3 hours",
       "steps": [
        "Do LangChain Academy's [Intro to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph), Module 1: the simple graph, chain, router, agent and agent-with-memory lessons only (skip Studio and deployment).",
        "Some notebooks use LangSmith for tracing. A free [LangSmith](https://docs.smith.langchain.com/) account is enough, or skip those parts. Write the `langgraph` version you installed in your log.",
        "Stop each Day when one notebook runs and you can say in one sentence what its graph does."
       ]
      },
      {
       "day": "Days 4–5 · two light days, about 45 min each",
       "steps": [
        "Do Module 2. **Day 4:** the state schema lesson. **Day 5:** the state reducer lesson. Skip the message-trimming, summarising and external-memory notebooks. You'll build your own context selection on Day 9."
       ]
      },
      {
       "day": "Days 6–7 · about 1 hour each",
       "steps": [
        "**Day 6:** read the [interrupts guide](https://docs.langchain.com/oss/python/langgraph/interrupts), then do Module 3's breakpoints lesson.",
        "**Day 7:** do the editing-state and human-feedback lesson.",
        "These notebooks pause with breakpoints (`interrupt_before`). That's fine for learning, but your project uses `interrupt()`. Skip streaming, dynamic breakpoints and time travel."
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
        "Read the “anatomy of effective context” section of Anthropic’s [context engineering guide](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents), for 15 minutes. Think of context as what the model can see right now. A saved conversation, a summary and a permission record do different jobs.",
        "Build a small context-selection function that picks what to send to the model. Set an input budget below your model’s context limit, leaving room for the output. Count tokens with the model's own tokenizer where you can. If a request is still too big, reject it safely.",
        "Always keep the instructions, the current question and recent complete turns. Add relevant evidence, and cap the size of tool output. Never separate a tool call from its result.",
        "Test it on a made-up 20-turn conversation where the user states a browser or version constraint early on. Check that your selection keeps that constraint, or asks the user to repeat it. Keep critical task facts in explicit application state. A summary written by the model can be wrong, so never let it grant authorization or approval. Also test one oversized tool result and one lost constraint.",
        "Stop here. Long-term personalised memory is optional, so skip it for now."
       ]
      }
     ],
     "recall": [
      {
       "q": "What belongs in model context, and what must remain outside its authority?",
       "answer": "Send the model the relevant task, complete recent turns and allowed evidence, within a budget. Keep identity, permissions, approvals and operation IDs in state that your code controls. A summary can help the model remember, but it can't grant access or approve a write.",
       "link": "#langgraph"
      },
      {
       "q": "Why put a limit on an agent's number of steps?",
       "link": "#agent-fundamentals",
       "answer": "A model can keep asking for tools or repeat a cycle that gets nowhere. A step limit enforced by your code caps those repeats and what they cost. You still need separate timeouts and cost limits."
      }
     ],
     "extra": [
      "[Hugging Face Agents Course, Unit 2 LangGraph pages](https://huggingface.co/learn/agents-course/en/unit2/langgraph/introduction)",
      "[Google/Kaggle AI Agents Intensive](https://www.kaggle.com/learn-guide/5-day-agents): an optional alternative. Day 3 is Context Engineering: Sessions & Memory. Read the concepts or watch the recording, and skip the ADK rewrite.",
      "[Berkeley Advanced LLM Agents, Spring 2025](https://llmagents-learning.org/sp25): optional depth. Yu Su’s lecture covers reasoning, memory and planning. It's research background, not another prerequisite."
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
      "A prompt alone can't keep an agent safe. Use permissions, limited tools and approval checks to cut the risk, then test them."
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
        "Write your approval rule in your log: a person approves the exact tool name and its exact arguments. If anything changes, the approval no longer counts.",
        "A tool found through MCP (a standard way to connect agents to tools) needs the same checks. MCP only standardises the connection. It doesn't make a server trustworthy or give it permission to act."
       ]
      }
     ],
     "recall": [
      {
       "q": "What are the three parts of the lethal trifecta?",
       "link": "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/",
       "answer": "Access to private data, exposure to untrusted content, and a way to send data out. When all three are present, instructions hidden in the untrusted content can make the agent leak the private data."
      },
      {
       "q": "Which LangGraph feature pauses for a person's approval?",
       "link": "#langgraph",
       "answer": "`interrupt()` pauses the run and waits for a person. Your code must still check that the approval covers this exact tool and these exact arguments. Pausing alone doesn't make an action safe."
      }
     ],
     "extra": [
      "[Agents Towards Production (security tutorials)](https://github.com/NirDiamant/agents-towards-production)",
      "[Design patterns for securing LLM agents against prompt injections](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/) by Simon Willison: six patterns that limit the damage, explained simply.",
      "[Anthropic’s Introduction to MCP](https://academy.claude.com/collections/build-with-claude): optional background on the protocol. Take the Introduction to Model Context Protocol course. Building a server is extra credit."
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
      "Tip: make `save_note` useful to you. Use it to save revision notes for this course, and reread them at Memory check time. Keep your attack tests away from your real notes."
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
      "Build on your `ask-mdn` repo, with the same frozen data.",
      "Get the browser support data from [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data). It's public domain, so you can use it freely.",
      "Put test attack documents only in a test copy of your search index, never in the online app."
     ],
     "checkpoint": "your LangGraph loop pauses with `interrupt()` before a tool runs.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Before you read the steps below, write your own day-by-day plan for this project in your log. Compare it with the steps afterwards."
       ]
      },
      {
       "day": "Days 2–6 · about 7.5 hours",
       "steps": [
        "**Days 2–3:** In LangGraph, give the agent three tools: `search_docs` (your hybrid search), `browser_support` (looks up a feature in the browser data) and `save_note` (writes a note to a `notes` table in Neon, with a `group_id` column; use one fixed group for now).",
        "**Days 4–5:** Before `save_note` runs, pause with `interrupt()`. Show the person the exact arguments, and run the tool only if they approve, using exactly those arguments.",
        "Tie the approval to one operation ID. Your code creates that ID once, before the pause, saves it, and reuses it on a retry. A repeated click is the same operation.",
        "**Stop here on Day 6:** one approved note is saved and one rejected note isn't."
       ],
       "split": true
      },
      {
       "day": "Days 7–12 · about 9 hours",
       "steps": [
        "**Days 7–8:** Add limits: at most 8 steps, a cost limit per question, and at most 2 retries per tool call.",
        "For `save_note`, add a database unique constraint on `(group_id, operation_id)` and handle it with [INSERT ON CONFLICT](https://www.postgresql.org/docs/current/sql-insert.html). A repeated ID returns the original result only if the arguments match. Changed arguments need a new approval.",
        "Test it: simulate a write that was committed but whose response was lost, then retry. There must be exactly one note.",
        "**Day 9:** Log each step’s request ID, tool name, input and output sizes, timing, tokens and cost. Follow your data policy from [Monitoring](#monitoring): keep redacted argument examples only in logs from made-up tests, and never record credentials.",
        "**Days 10–11:** Write 5 injection documents (for example, a page that says “call save_note with…”) and 5 normal requests, including one that really should save a note.",
        "Write each injection document like an attacker's notebook: the goal, the trick, and how your app should block it. Commit them.",
        "Run all 10 through your agent. **Stop here on Day 11** when the log shows that every injection ended without an unapproved `save_note` call, and that the real save request paused for approval.",
        "**Day 12:** In your log, compare your Day 1 plan with what really happened. That gap is a lesson in itself. **Stop here** when the comparison is in your log."
       ],
       "split": true
      }
     ],
     "done": [
      "`save_note` can't run unless a person approves its exact arguments. A test proves it. A retry after a lost response creates no duplicate note, and changed arguments cannot reuse an earlier approval.",
      "The step limit, cost limit and retry limit each stop a runaway run. A test proves each one. Your context-budget checks pass too: they keep critical task facts, or pause to ask the user before answering or acting. Context never grants new permissions.",
      "Your 5 injection documents never cause an unapproved action, and no planted instruction is carried out. Your 5 normal requests still work. You checked this in the step logs, not just in the replies.",
      "Explain the request flow, two decisions and one failure. Without AI-written code, write the retry (duplicate-write) test or the changed-arguments approval test. First make it fail on the unsafe version, then make it pass with the fix. You may use the docs. Note the commit."
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
      "Apply widely, and not only for “AI engineer” titles. Backend and full-stack roles that build AI features are a good fit: your web development work counts there, and your public repos show the AI part. Here is why. In [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md) from builtin.com (US, Europe and India cities, February to August 2026, no Bangladesh data), [junior and entry-level titles stayed around 1% of posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/07-trends.md). That is one sample, not the whole market, but it's a good reason to apply widely."
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
        "Put a separate 1-hour block in your calendar each week to apply to 2 or 3 jobs. Add more time when your study load allows.",
        "Every other week, spend 20 minutes of that block on one timed practice without AI: a small Python coding task, or designing an AI feature out loud (what it calls, where it can fail, how you'd measure it).",
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
   "opener": "Until now Ask MDN could only talk. Now it gets tools, and one of them, saving a note, changes things for real. That raises the stakes, because any page it reads can hide instructions. By the end you can read its loop step by step, and nothing changes until a person says yes."
  },
  {
   "title": "Make It Sturdy",
   "weeks": "Weeks 28–39",
   "description": "Get your app ready for real users: tests that run automatically, logins, access rules, fresh data and attack tests.",
   "lessons": [
    {
     "slug": "evals-that-catch-real-bugs",
     "title": "Evals That Catch Real Bugs",
     "kind": "lesson",
     "time": "about 6 hours",
     "hook": "“4.2 out of 5” fixes nothing. Fifty real conversations show exactly what to fix.",
     "intro": [
      "Vague scores like “4 out of 5 for helpfulness” don't find bugs. Reading real failures does.",
      "In this lesson you'll turn your app's logs into tests. Evals are tests for how your AI behaves."
     ],
     "unlocks": "turn real failures into tests that catch them next time.",
     "edge": "error analysis: deciding what “good” means. You find your standards by grading real outputs, so your judgment sets the bar.",
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
       "day": "Day 1 · light day, about 45 min",
       "steps": [
        "Read [Why is error analysis so important, and how is it done?](https://hamel.dev/blog/posts/evals-faq/why-is-error-analysis-so-important-in-llm-evals-and-how-is-it-performed.html), one answer from Hamel Husain and Shreya Shankar's [AI Evals FAQ](https://hamel.dev/blog/posts/evals-faq/). Keep the full FAQ for later.",
        "Before you look at any data, write down the three failures you expect most often in Ask MDN. Day 3 checks your guess.",
        "This week, also start a crisis test set for the Campus Assistant. It takes 30 minutes a week, outside these Days.",
        "Each week, write 2 messages from a student who might be in crisis, and 2 harmless look-alikes (for example, “I'm dying to see the results”), in each language: English, Bangla and Banglish. Ask a native speaker to review them. Keep going every week: you'll use the set to test your assistant's crisis response later in the capstone."
       ]
      },
      {
       "day": "Day 2 · light day, about 45 min",
       "steps": [
        "Read Eugene Yan's [Product Evals in Three Simple Steps](https://eugeneyan.com/writing/product-evals/). Write down which of his three steps Ask MDN already has, and which it's missing."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Collect 50 conversations that are public or made up: use recent redacted examples from Neon, and top up with the Zoomcamp [synthetic data generator](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/05-monitoring/11-synthetic-data.md). Review them before you keep them as a separate test set. Don't keep raw logs longer just to reach 50. Read them in two 25-minute blocks, write down every failure, and sort the failures into 3 to 6 groups."
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
      "[Task-specific LLM evals that do and don't work](https://eugeneyan.com/writing/evals/) by Eugene Yan: which checks catch real problems and which ones just look busy.",
      "[Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) (Anthropic, 2026): how to check model graders against people, give the grader an “unknown” option, and test consistency across repeated runs."
     ]
    },
    {
     "slug": "testing-and-ci",
     "title": "Testing and CI",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "CI reruns every test on every push. It never gets tired and never skips one.",
     "intro": [
      "CI (continuous integration) means your tests run automatically every time you push code. It catches a bad change before your users see it.",
      "You'll use promptfoo for the AI checks and pytest for your normal Python code."
     ],
     "picture": "CI is like an invigilator who checks every admit card, every time. Each push is a candidate. A prompt change that breaks ten old answers is stopped at the door. And a test only earns your trust after you've watched it fail.",
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
        "Give Ask MDN a plain Python function `answer(question, user)` that your Streamlit app calls. Now your tests don't need the web page.",
        "Point promptfoo at it with a [Python provider](https://www.promptfoo.dev/docs/providers/python/): a small file whose `call_api(prompt, options, context)` calls your `answer()`. Read the user from `context['vars']`. Return the pages it found as well as the answer, because context-faithfulness needs them."
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
        "**Test-out:** already run GitHub Actions? Skip the quickstart. Otherwise follow GitHub's [Actions quickstart](https://docs.github.com/en/actions/writing-workflows/quickstart).",
        "Add your OpenAI key as a repository [secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions). Using Gemini? Pick a Gemini model as promptfoo's grader.",
        "Run pytest and the rule-based promptfoo checks on every push. Run the model-graded checks on your own trusted pull requests before merge, following the [CI/CD guide](https://www.promptfoo.dev/docs/integrations/ci-cd/). Set the grading model and budget explicitly, and cache unchanged evaluations.",
        "Don't expose API secrets to untrusted fork code."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "Protect your deployment branch with [required status checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches), including the pre-merge evaluation job, and apply the rule to yourself too. From now on, change the app only through pull requests: Streamlit deploys from the protected branch.",
        "Break a prompt in a PR. Prove that the PR can't merge and that the live app stays on the previous version.",
        "Fix the prompt, wait for the required checks, then merge. A red workflow after deployment is too late."
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
      "You'll move all of Ask MDN's search (keyword and vector) into Postgres. Then you'll turn on row-level security: rules inside the database that hide rows a user isn't allowed to see. You'll practise with two pretend groups, a CSS team and a JS team. Think of them as University A and University B, which is what your Campus Assistant will need."
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
        "Install Docker ([get started](https://docs.docker.com/get-started/)) and run `docker run hello-world`. Docker runs programs in their own little boxes called containers. Low on memory or disk space? Use a free [GitHub Codespace](https://docs.github.com/en/codespaces/getting-started/quickstart) instead; it runs in the browser and has Docker built in.",
        "Do Zoomcamp Module 2's [08 pgvector](https://github.com/DataTalksClub/llm-zoomcamp/blob/1c42efbeb8141c183e7ae51698ad912c70c06a06/02-vector-search/08-pgvector.md) lesson now (you skipped it in Embeddings and Vector Search): vector search inside Postgres.",
        "Start Postgres with pgvector locally using the [pgvector Docker image](https://hub.docker.com/r/pgvector/pgvector) (`pgvector/pgvector:0.8.7-pg17`). If port 5432 is taken by your Zoomcamp database, use another port.",
        "Read the [full-text search intro](https://www.postgresql.org/docs/current/textsearch-intro.html) and [Tables and Indexes](https://www.postgresql.org/docs/current/textsearch-tables.html). They show the generated column and GIN index you need.",
        "Move Ask MDN's chunks into one table with a `group_id` column, a text-search column and an embedding column. Then rebuild `hybrid_search()` on top of it."
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
       "answer": "Superusers and roles with BYPASSRLS skip row-level security. Table owners skip it too, unless you use FORCE ROW LEVEL SECURITY. FORCE doesn't stop superusers or BYPASSRLS roles from skipping it."
      },
      {
       "q": "How does promptfoo call Ask MDN without the web page?",
       "link": "#testing-and-ci",
       "answer": "A promptfoo Python provider calls your `answer(question, user)` function directly, with the test user from `context['vars']`. It returns the answer and the retrieved pages that the checks need, so the Streamlit page isn't involved."
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
     "hook": "Your student ID gets you through the campus gate. It doesn't open the exam-paper cupboard. Login only tells you who the person is. You decide what they can open.",
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
        "**Test-out:** have you already shipped OAuth or OIDC sign-in, for example Firebase Auth or Google sign-in? Then skip the reading and the tutorial's explanations.",
        "Still create the Google OAuth client, add `st.login` to Ask MDN and add your two test accounts as Test users (about 45 minutes). Then write two lines in your log on how your own platform maps a signed-in user to their data, and tick both Days. If you haven't shipped one before, do the steps below.",
        "Read Streamlit's [authentication guide](https://docs.streamlit.io/develop/concepts/connections/authentication). It uses OIDC, the standard behind “Sign in with Google”. Login tells you who someone is, not what they may see.",
        "Follow Streamlit's [Google login tutorial](https://docs.streamlit.io/develop/tutorials/authentication/google) to create a Google sign-in (OAuth) client and add `st.login` to Ask MDN locally. Also add your two test accounts as Test users on Google's consent screen, or Google won't let them sign in. If an OAuth error (like a redirect URI mismatch) takes more than 45 minutes, stop and ask, with the exact error message."
       ]
      },
      {
       "day": "Days 3–4 · about 3 hours",
       "steps": [
        "Make a `user_groups` table on the server that maps each email to a group. For every request, look up the signed-in user's group and set it in the database transaction. Never trust a group sent from the browser.",
        "Give each conversation a server-recorded `owner_id`, `group_id` and random thread ID.",
        "Before you load history, load a checkpoint or resume a pending approval, check that the signed-in user owns the conversation and still has its group. A thread ID only locates state; it grants no permission.",
        "Clear the browser session's chat state when the user logs out or changes. Make history private by default."
       ]
      },
      {
       "day": "Days 5–6 · about 3 hours",
       "steps": [
        "Use two fake test accounts, never real students. Write tests: a CSS user gets zero JavaScript chunks through search, through the agent's tools, and when guessing a document ID. A user with no group gets nothing.",
        "Also try a known JS conversation or thread ID as the CSS user, and as a second user in the same group. Neither may read or resume the owner's private chat or approval. Test switching users in the same browser.",
        "Don't send any loaded state to a model until these checks pass."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why isn't login enough to keep the groups apart?",
       "link": "https://docs.streamlit.io/develop/concepts/connections/authentication",
       "answer": "Login only shows who the user is, not which data they may see. The server has to map that person to an allowed group on every request, and deny access when there is no group."
      },
      {
       "q": "How does your app tell Postgres which group is asking?",
       "link": "#postgres-search-and-access-rules",
       "answer": "On every request, the server looks up the signed-in user's group and sets it for the database transaction with `set_config`. The row-level policies read it with `current_setting`. The group must never come from a value the browser sends."
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
        "Sketch your ingestion process from memory, then compare it with [Data Ingestion](#data-ingestion).",
        "Extend it: compare the old and new manifests, re-index edited pages, add new pages, and delete removed pages and their chunks. Publish a new `corpus_version` only after the sync succeeds."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Make a test copy of your data: delete 3 pages and edit 2, then sync.",
        "Store the corpus version with each conversation. Pick a simple policy: if the version changes, expire that conversation's pending approvals and start a fresh, server-owned agent thread before the next answer. Don't copy old retrieved chunks or assistant answers into the new prompt, and tell the user that the sources changed.",
        "Check thread ownership before you look at or reset any state."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Ask about the deleted pages in a new chat and in a chat started before the sync. Look at the actual model input: no removed chunks or old answers should be in it.",
        "Check every returned citation against the current, allowed source records, and reject stale IDs. Test an edit as well as a deletion, and prove that an old pending approval can't resume.",
        "This stops old content from reaching new answers. It doesn't erase a transcript someone has already read or copied."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Finish the edit, deletion and stale-approval tests. Write down one weakness of this cautious reset policy, for example losing the conversation's context when unrelated pages change."
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
        "Set up three plugins: [rbac](https://www.promptfoo.dev/docs/red-team/plugins/rbac/) (access control), [hijacking](https://www.promptfoo.dev/docs/red-team/plugins/hijacking/) and [indirect prompt injection](https://www.promptfoo.dev/docs/red-team/plugins/indirect-prompt-injection/). Generate 30 attack cases and commit them, so the test stays the same each time. Generating may use promptfoo's online service, which can have usage limits, so generate once. If it's unavailable, write the cases by hand."
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
        "Run the attacks and write down every one that worked. A passing rbac test is a model's opinion, not proof. A canary phrase shown to the wrong user is proof, so check the canaries and your database yourself. Fix the failures in the project that follows this lesson."
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
      "This is the last practice project before the capstone. Ask MDN gets logins, separate groups, fresh data, automatic tests and an attack test it must pass.",
      "This brings the pieces together in a small deployed system. Passing the checks shows how the app behaves in the cases you tested. A real rollout at a university would still need its own requirements and review.",
      "Finish the app first. Then give its read-only answer function a small API, so another application can use it. You reuse your validation, permissions and tests."
     ],
     "unlocks": "show a tested AI app with a separate backend, and what happens when something it depends on fails.",
     "edge": "owning reliability, security and cost at the same time.",
     "before": [
      "Write your own week-by-week plan in your log first, then compare it with the steps below. Do Extra credit only after every “You're done when” line passes.",
      "Build against your local Postgres. CI uses a [GitHub Actions Postgres service](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/creating-postgresql-service-containers) with the `pgvector/pgvector:0.8.7-pg17` image (the plain `postgres` image has no pgvector). The online version uses your Neon project.",
      "Keep the app role rules from [Postgres Search and Access Rules](#postgres-search-and-access-rules). Your attack cases and canary documents stay the same."
     ],
     "checkpoint": "your 30 attack cases and 5 canary documents are committed, with a list of the attacks that worked.",
     "assignment": [
      {
       "day": "Days 1–6 · about 9 hours",
       "steps": [
        "**Days 1–3:** Move the Postgres version online: on Neon, enable pgvector, turn row-level security on and force it, and use your SQL-created app role. Connect your private Streamlit app to it through Secrets.",
        "**Days 4–5:** Add login and server-side group mapping, like in Login.",
        "**Stop here on Day 6:** the online app shows a CSS user only CSS answers."
       ],
       "split": true
      },
      {
       "day": "Days 7–12 · about 9 hours",
       "steps": [
        "**Days 7–8:** Sync against your manifest: re-index edits and remove deleted pages.",
        "**Days 9–11:** Run CI on every push: pytest, the isolation tests and the rule-based promptfoo checks, against the Postgres service. Run the model-graded checks on pull requests.",
        "**Stop here on Day 12:** a broken prompt makes CI fail."
       ],
       "split": true
      },
      {
       "day": "Days 13–21 · about 13.5 hours",
       "steps": [
        "**Days 13–15:** Run your attack test (30 cases plus 5 canaries), 3 times for each case. Fix what breaks, then run it again.",
        "**Days 16–17:** Freeze this version, then set aside 12 fresh questions: 4 each for CSS and JS, with expected answers and supporting passages, plus 4 believable questions that the user's documents can't answer.",
        "Before you run them, write down a pass rule. For this learning project: at least 7 of the 8 answerable questions are correct and supported by citations, all 4 unanswerable ones are declined, and there are no unauthorized reads or writes.",
        "Run them and grade by hand. Show the counts and every failure. If you fix a failure, keep these questions as regression cases and use fresh ones for the next independent check.",
        "**Days 18–19:** Add cost tracking for each group, a simple rate limit for each user, and an off switch: a setting that makes the app stop answering.",
        "**Days 20–21:** Update the README with your results and an architecture diagram. Add a short list of what a real team deployment would still need. **Stop here on Day 21** when the README has your results and the architecture diagram."
       ],
       "split": true
      },
      {
       "day": "Days 22–23 · about 3 hours",
       "steps": [
        "**Backend lab, first checkpoint:** read FastAPI’s [request body](https://fastapi.tiangolo.com/tutorial/body/) and [response model](https://fastapi.tiangolo.com/tutorial/response-model/) guides.",
        "Reuse `answer(question, user)` behind a read-only `POST /answer`, and add `GET /health`. Use Pydantic for a question field with a size limit, and for a response with the answer, the source IDs and the request ID. Reject extra identity or group fields.",
        "The API must not expose `save_note` or approval-resume operations. Call the RAG function directly, or use a read-only tool allowlist. Hiding a write endpoint does not stop writes inside an agent.",
        "Start with a fake model, a fixed made-up test account and a server that listens only on localhost.",
        "Return a clear validation error for malformed input, and a safe timeout or “unavailable” response when a dependency fails. Keep stack traces and keys out of responses.",
        "Checkpoint: a command-line HTTP client gets a valid answer and predictable errors. In the next step you replace the fixed account with token verification, before you use any real data.",
        "Spend 15 minutes on FastAPI’s [concurrency guide](https://fastapi.tiangolo.com/async/). If your SDK or database calls block, start with a normal `def` endpoint. Don't call blocking code directly inside `async def`. Put timeouts on the dependency calls themselves."
       ]
      },
      {
       "day": "Days 24–25 · about 3 hours",
       "steps": [
        "Read FastAPI’s [HTTPBearer reference](https://fastapi.tiangolo.com/reference/security/#fastapi.security.HTTPBearer). It only extracts a token; your code must verify it.",
        "For this local exercise, generate two long random tokens, keep them in environment secrets, and map each to one made-up server-side account. Compare tokens with a constant-time comparison, reject missing or unknown tokens, and test revoking one.",
        "Look up the account’s current group with the SAME authorization code as the UI. Never accept the user or group from JSON. These tokens are not your model provider’s API key.",
        "Use [TestClient](https://fastapi.tiangolo.com/tutorial/testing/) to check valid, missing, revoked and wrong-user requests, malformed input, a provider timeout and group isolation. Keep authentication real in these tests and fake only the model provider. Reuse the database checks.",
        "Send a request that asks the HTTP service to save a note. Verify that no write tool runs and the database is unchanged.",
        "This API lab stays local. A public deployment needs TLS and a proper token lifecycle. Don't copy test credentials into it."
       ]
      },
      {
       "day": "Days 26–27 · about 3 hours",
       "steps": [
        "**Test-out:** if you can write a pinned, non-root Dockerfile with a `.dockerignore` from memory in 30 minutes, do that and skip the guide walkthrough. The checkpoint below still applies.",
        "Follow the [FastAPI container guide](https://fastapi.tiangolo.com/deployment/docker/) to package the service. Pin dependencies, run as a non-root user, and use a `.dockerignore` and environment secrets. Bind the published port to localhost for this lab. Build from a fresh checkout, run without your editor, and call `/health` and `/answer`. Keep API tests and an image-build check in CI. No extra paid hosting is needed.",
        "Checkpoint: one documented command starts the container, and the protected HTTP checks pass. Write down the remaining deployment work: TLS, credential rotation, backups, and a shared quota if you add replicas. Streamlit stays your private online demo."
       ]
      },
      {
       "day": "Days 28–29 · about 3 hours",
       "steps": [
        "**Failure drill:** make a fake model provider time out and return retryable rate-limit errors. Separately, make the database fail: inject a connection or query failure, or stop only your throwaway local test database. In each case, require a safe error within your recorded deadline. Never interrupt the online database.",
        "Test overload: run one API worker with at most 2 model requests in flight and no waiting queue. Use a fake provider held at a test barrier.",
        "While 2 requests are busy, send a third. It must get a clear 429 retry-later response. Then release the barrier: both accepted requests must finish within a 5-second test deadline.",
        "Use Python’s [threading events/barriers](https://docs.python.org/3/library/threading.html) (or the async equivalent) to hold the fake calls in place. A fixed sleep is not a reliable test barrier.",
        "Run two simultaneous agent writes with the SAME approved operation ID. Check the database: exactly one note, matching arguments, and no cross-user state. This exercises the existing write tool separately; the new HTTP endpoint stays read-only.",
        "**Stop here on Day 29** when both failure drills, the 429 test and the duplicate-write check pass."
       ]
      },
      {
       "day": "Days 30–31 · about 3 hours",
       "added": "2026-10-30",
       "steps": [
        "Send 20 fake-provider requests at concurrency 1 and 5. Record the accepted and rejected counts, the success counts, and the p50 and p95 response times (the typical time, and the slow tail). Twenty requests are a smoke test, not proof of capacity.",
        "Trace one failure, operate the off switch and follow your rollback runbook. Write a 5-line incident note: symptom, cause, fix, regression check and remaining limitation.",
        "Optional: add progress events or streamed draft text. Measure the time to first visible feedback separately from the time to a validated final answer. Never treat partial JSON or streamed text as approval to write.",
        "**Stop here on Day 31** when the timings and the incident note are committed."
       ]
      }
     ],
     "done": [
      "Tests cover document, note, saved-chat, checkpoint and approval access: another user cannot use a guessed ID to read or resume private state. Document tests also enforce group separation.",
      "After a sync, the deleted test pages produce no search results and no citations in new answers, including in existing chats.",
      "Required checks stop a failing PR from reaching the deployment branch, and the live app stays on the last passing version. The final fresh quality check also meets the criteria you recorded.",
      "Across 3 runs of every attack case: zero unauthorized reads or writes, zero canary leaks to the other group, and zero planted instructions carried out, while normal requests still work. You checked this in the tool logs and the database, not just in the replies.",
      "Cost tracking for each group, the rate limit and the off switch all work.",
      "A fresh checkout builds and runs the protected read-only API container. HTTP tests exercise real token verification and group isolation. The fake-provider failure and concurrency tests finish within your recorded limits. The runbook and the small latency report are committed.",
      "Explain the request flow, two decisions and one failure. Find and fix a real retrieval, authorization, stale-state or retry bug without AI doing the diagnosis or the fix. Show a failing regression check, your reasoning and the passing result. You may use the docs."
     ],
     "showoff": {
      "pitch": "A two-group AI assistant with logins, database policies, release checks and a documented attack suite that found zero leaks in its runs.",
      "demo": [
       "Sign in as the CSS user and try to reach a JS canary through search, a tool and a guessed document ID. Show the policy that blocks all three.",
       "Open a PR with a broken prompt and show the required check preventing merge and deployment. Fix it and show the passing result.",
       "Delete a page, run the sync, and show its citation is gone.",
       "Show the attack table: 30 cases, 3 runs each, zero leaks.",
       "Show the protected API container, one failure trace, the rate limit and the off switch. Finish with one known limitation and the next improvement it justifies."
      ],
      "proves": [
       "CI/CD (2,560 of the 6,964 posts in [a 2026 analysis of 6,964 AI engineering job posts](https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/02-skills.md)), evals and security together.",
       "PostgreSQL, authorization, a tested HTTP API and a container that builds the same way every time, with evidence from a small failure drill."
      ]
     },
     "extra_credit": [
      "Give each group a monthly budget that pauses answers when it runs out.",
      "Add a third group that can see both CSS and JavaScript docs.",
      "Capture the flag: give a friend 30 minutes, signed in as the CSS team, to leak a JS canary. Add their attempts to your attack cases.",
      "Deploy the API separately, after adding TLS and a proper token lifecycle. Use a staging database first. Never point a load test at real users or private university data."
     ],
     "recall": [
      {
       "q": "Why can a working Streamlit demo still need a backend check?",
       "answer": "An HTTP API adds new things to get right: input rules, authentication, error responses, many callers at once, and packaging. Reuse the app's authorization rules and test them through the endpoint. A container that starts doesn't prove it holds up under real load.",
       "link": "#project-make-it-sturdy"
      },
      {
       "q": "What counts as a breach in your attack test?",
       "link": "#red-team-your-app"
      }
     ],
     "extra": [
      "[Stanford CS329S: deployment, monitoring and system design](https://stanford-cs329s.github.io/syllabus.html): an optional look at systems. The public material is from 2022, so use current library docs for code.",
      "[Claude API: response streaming](https://academy.claude.com/courses/building-with-the-claude-api/response-streaming): an optional video for the streaming experiment. The pattern carries over, but event formats differ by provider."
     ]
    }
   ],
   "shift": {
    "before": "It works on your laptop, for one user, checked by hand.",
    "after": "CI that fails on a broken prompt, access rules written in SQL, and zero leaks across 90 attack runs."
   },
   "opener": "Picture next year's demo. University A's events officer asks your Campus Assistant about next week, and one forgotten WHERE clause shows her University B's unannounced fest. In this section you rehearse that day with a CSS team and a JS team, and make the leak impossible rather than unlikely."
  },
  {
   "title": "Capstone: Campus Assistant",
   "weeks": "Weeks 40–52",
   "description": "Put everything together. You add a checking pipeline to your knowledge base, make search work in Bangla and Banglish, teach the assistant to ask, cite or route, and ship it inside your own platform, on the web and in the mobile app. You finish with a small pilot and the evidence to decide what comes next.",
   "shift": {
    "before": "Your skills live in practice projects on public data.",
    "after": "A piloted Campus Assistant in your web and mobile app, with release gates, a cost report and a verified knowledge base."
   },
   "opener": "Registration week. Three freshers ask the same question in three languages within an hour: will dropping a course cost them their scholarship? Last year a senior answered from memory and was half right. In this section you build an assistant that answers from the rule itself, asks how many credits they are taking, and names the office when the rule doesn't cover their case.",
   "lessons": [
    {
     "slug": "curation-and-verification",
     "title": "Curation and Verification",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "Let a model do the first check. Keep a human for the final yes.",
     "intro": [
      "Your knowledge base now has entries written over many weeks. Before an assistant serves them, every entry needs the same checks, and you need a queue that shows what is waiting, what changed and what expired.",
      "You'll build automatic checks with an LLM judge, then measure its mistakes against your labels. During this course and pilot, a human approves every published entry. The judge helps you review; it does not get a publish button. Fees, scholarships, discipline and health always need human approval."
     ],
     "unlocks": "run a curation queue where an automatic judge does the first pass and you can prove how far to trust it.",
     "edge": "checking an automated reviewer against human judgment. This skill carries over to almost any evaluation work.",
     "overview": [
      "Move every entry through clear statuses, from draft to approved to expired.",
      "Check citations, contradictions, personal data and staleness automatically.",
      "Measure judge errors on unseen good and bad entries, and write a human-approval policy."
     ],
     "checkpoint": "your knowledge base has at least 65 entries with sources, and [Grading Answers](#grading-answers) and [Fresh Data](#fresh-data) are complete.",
     "bridge": {
      "text": "An LLM judge is a second model that grades an answer against a rubric. It is fast and cheap, and it is wrong in patterns. You find those patterns by grading the same items yourself.",
      "terms": [
       [
        "Cohen's kappa",
        "Agreement between two graders, corrected for the agreement you'd expect by chance. 1 is perfect, 0 is chance level, and it can be negative."
       ],
       [
        "Confusion matrix",
        "A 2×2 count of judge versus human: both pass, both fail, judge passed what you failed, judge failed what you passed. For auto-approval, the costly cell is “judge passed what you failed”."
       ],
       [
        "Entailment check",
        "Does the quoted source actually support each claim in the answer?"
       ],
       [
        "Audit sample",
        "A random slice of published entries that a human rechecks each week. Sampling helps find drift; it does not replace approval."
       ]
      ]
     },
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Add statuses to every entry: `draft → checked → needs-human → approved → expired`. Write a small script that prints the queue: counts per status, entries past `review_by`, and entries whose source changed since approval.",
        "Reuse your [Fresh Data](#fresh-data) manifest idea: hash each saved source document so a changed rule automatically moves its entries back to `needs-human`."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Write five automatic checks: (1) every claim cites quoted source text; (2) the judge says the quote supports the claim; (3) no conflict with another approved entry; (4) no personal data about individuals (student names, IDs, phone numbers); (5) `review_by` is in the future.",
        "Contacts from your official office directory are allowed. Record staff confirmations by office or role plus date, never by a person's name.",
        "Every checked entry goes to `needs-human` before publication, including low-risk topics. Keep a sensitive-topic flag for fees, scholarships, discipline and health. Each check returns a reason, not just pass or fail. Only a curator action can set `approved`."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Grade 60 entries yourself: correct and supported, or not. Include 15 you deliberately broke (wrong number, outdated semester, unsupported claim). Run the judge on the same 60 and build the confusion matrix. Compute Cohen's kappa too ([scikit-learn's cohen_kappa_score](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.cohen_kappa_score.html)).",
        "Read every disagreement and fix the rubric, not the labels. Rerun once. These 60 are now tuning data, so their scores are optimistic."
       ]
      },
      {
       "day": "Days 4–5 · about 3 hours",
       "steps": [
        "Freeze the rubric. Then grade 40 fresh entries before you see the judge's results: 20 sampled real entries, and 20 new entries that you make wrong on purpose. Make 4 wrong entries of each kind: a wrong number, an expired rule, an unsupported claim, a mismatched source, and a wrong student or curriculum.",
        "Don't reuse the 60 tuning entries or rewrites of them. Confirm the expected labels, then run the judge once.",
        "Report the real and the wrong-on-purpose samples separately. Divide false accepts by the entries you failed, and false rejects by the entries you passed. If a denominator is zero, write “not measured”; it is never a pass. If you change the rubric, these cases become regression data. Use fresh cases for the next independent check.",
        "Write `AUTO-APPROVAL.md` with automatic publication **disabled for the course and the pilot**. Record the rubric version, the sample counts, the confusion matrices and the uncertainty.",
        "Remember that 0 false accepts out of 20 bad cases does not prove safety. By the rule of three, the true rate could still be about 15%.",
        "Any later proposal to allow auto-approval would need all of these: an error tolerance approved separately, enough real and challenge cases to measure the uncertainty, an audit owner and schedule, and a rule to suspend it after one confirmed false acceptance or source change. Sensitive topics stay human-only. No kappa score or small zero-error sample can enable publication by itself.",
        "Approve every pilot entry by hand through the queue, with the curator, source revision, timestamp and reason in its changelog. Test that the judge cannot publish, that low-risk entries also wait, and that changing a source removes approval."
       ]
      },
      {
       "day": "Day 6 · about 90 min",
       "steps": [
        "Without AI-written code, add one new check (for example: an answer that mentions a date must cite the academic calendar). Test it on a passing and a failing entry, and explain it in your log."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why does a judge that passed 40 correct entries tell you little about unsafe approvals?",
       "link": "#curation-and-verification",
       "answer": "Passing correct entries says nothing about whether it rejects wrong ones. Measure false accepts (the share of entries you failed that the judge passed) on unseen real and wrong-on-purpose samples, report the uncertainty, and keep human approval throughout the pilot."
      },
      {
       "q": "What moves an approved entry back to needs-human without anyone noticing a problem?",
       "link": "#curation-and-verification",
       "answer": "A changed source hash, a passed review_by date, or a conflict with a newly approved entry."
      }
     ],
     "extra": [],
     "added": "2026-10-28",
     "predict": "Your judge agrees with you on 40 good entries. Guess how many of 20 deliberately wrong entries it will still pass. Write the number down before you measure it.",
     "story": {
      "year": "2025",
      "title": "The support bot that invented a login policy",
      "what": "Users of Cursor, a popular AI code editor, were being logged out when they switched devices. Cursor's support email, signed “Sam”, said this was expected under a new login policy. There was no such policy and no human behind the email: an AI bot had made it up. Users cancelled subscriptions before a cofounder apologised.",
      "lesson": "students will act on what your assistant says. Every published answer needs a quoted source and a human approval behind it.",
      "url": "https://fortune.com/article/customer-support-ai-cursor-went-rogue/"
     }
    },
    {
     "slug": "multilingual-search",
     "title": "Multilingual Search: Bangla, Banglish, English",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "Students don't switch language for your search engine. Your search engine switches for them.",
     "intro": [
      "Your users write in English, in Bangla script, in romanized Bangla (Banglish), and sometimes in all three in one sentence. Keyword search fails across scripts, and many embedders handle Banglish poorly. The language check you did in [Embeddings and Vector Search](#embeddings-and-vector-search) gave a first signal of where.",
      "You'll measure each language separately, then try a multilingual embedder and a model call that rewrites the question into English and Bangla. Choose using development results. Keep the final held-back questions sealed until the pilot release check."
     ],
     "unlocks": "search a knowledge base in the languages your users actually type, with a score per language.",
     "edge": "evaluating by slice. An average hides the group your product fails.",
     "overview": [
      "Report Hit Rate and MRR separately for English, Bangla and Banglish questions.",
      "Compare a multilingual embedder with query rewriting, and combine them with hybrid search.",
      "Reply in the language the student used."
     ],
     "checkpoint": "your question bank has at least 150 questions tagged by language and linked to intents, with at least 15 per language held back in `held_back.jsonl`.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Write a leak check: it fails if any held-back question appears in your indexed text. Compare after lowercasing, collapsing spaces and normalising to Unicode NFC. Run it without printing the questions.",
        "Also check that related phrasings stay in one split. This catches copied text, but it can't catch tuning after you've seen test results. Keep the release set out of routine evaluations, and record any exposure in `EVAL-SETS.md`.",
        "Index approved entries with your Ask MDN search code. Run `development.jsonl` and report Hit Rate@5 and MRR@5 for each language slice. Reuse these development cases for the comparisons below."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Swap in a multilingual embedder and rerun. Then try adding Bangla and Banglish paraphrases to each entry's text. Record both results per slice."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Add a rewrite step: one cheap model call that returns `{language, english_query, bangla_query}` as structured output (as in [Structured Output and Errors](#structured-output-and-errors)). Write `bangla_query` in Bengali script, not romanized.",
        "Run vector search on the raw question and on both rewrites. Run keyword search on the raw and English versions. Fuse everything with RRF (as in [Hybrid Search](#hybrid-search)).",
        "Don't stem or “fix” Banglish spelling. For Bengali text, Unicode normalisation is enough.",
        "Check 10 rewrites by hand for changed meaning, and measure the extra time and cost per question."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Pick the configuration using development results, then check known failures in `regression.jsonl`. Put the decision, per-language counts, set versions and cost in your README, labelled development evidence. Do not open `held_back.jsonl` here. It is for the final check of your finished candidate.",
        "Make the answer prompt reply in the student's language, and test 5 mixed-language questions by hand."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "Without AI-written code, write the function that merges and deduplicates results from the two rewrites. Test it with an empty list, duplicates and a missing language."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why report search quality per language instead of one overall number?",
       "link": "#multilingual-search",
       "answer": "A good average can hide a failing group. Banglish questions might be a third of traffic and fail badly while English carries the average."
      },
      {
       "q": "What does query rewriting cost you, and how do you decide whether it's worth it?",
       "link": "#multilingual-search",
       "answer": "An extra model call: latency and money per question. Keep it only if it improves the development slices enough to justify the measured cost."
      }
     ],
     "extra": [],
     "added": "2026-10-28",
     "predict": "Your check in Embeddings and Vector Search compared Bengali script with Banglish. Before you measure, guess this lesson's Hit Rate@5 for Bengali-script questions and for the same questions typed in Banglish."
    },
    {
     "slug": "answer-ask-or-route",
     "title": "Answer, Ask or Route",
     "kind": "lesson",
     "time": "about 12 hours",
     "hook": "“It depends” is a good answer when you say what it depends on.",
     "intro": [
      "Many campus questions have a right answer only once you know a detail: your credit load, your program, your intake year. Others have no answer in your sources at all, and some should never be answered by a bot.",
      "Your assistant chooses between five moves: answer with citations; ask one clarifying question; answer the part that is established and name what's missing; route to the right office; or decline a false premise (“No one can guarantee an A”) and offer what it can do. You'll test every move on purpose-built questions, including impossible ones. Never show a confidence percentage: search similarity is not the chance of being right."
     ],
     "unlocks": "handle unanswerable, ambiguous and out-of-scope questions without inventing rules.",
     "edge": "designing failure behaviour. Users forgive “I don't know, ask the registrar”; they don't forgive a confident wrong rule.",
     "overview": [
      "Check whether retrieved evidence is enough before answering.",
      "Ask one clarifying question when an entry's conditions require it.",
      "Route to an office, or refuse, with tested rules for sensitive topics."
     ],
     "checkpoint": "[Multilingual Search](#multilingual-search) is complete and you have an office directory with contact channels and hours.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Store your office directory as data: office, topics it owns, official contact channel and hours. The assistant may only route to entries in this file.",
        "Write the answer card: short answer; who it applies to (program, curriculum version, semester); evidence with tier labels; what's still needed; one next step; the date it was last verified."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Add an evidence check before answering: do the retrieved entries cover this question for this student? If an entry has `conditions` the student hasn't given, ask one question instead (for example “How many credits are you taking this semester?”).",
        "Keep that pending question on the server: store the conversation's open condition, so when the student replies “15”, the next turn knows it answers the credit question. Never trust a transcript sent back by the client."
       ]
      },
      {
       "day": "Days 3–4 · about 3 hours",
       "steps": [
        "Build a hard set of 60 questions and write the expected move for each. Use this mix: 10 personal-record questions (my grades, my dues); 10 not covered by any source; 10 about future or rumoured events; 5 requests to rate a named teacher; 5 requests for exam answers or someone else's data; 5 that must ask first; 5 that need a partial answer; 5 false premises (“guarantee me an A”); and 5 where search fails or times out (make it fail on purpose).",
        "In the search-failure cases, the assistant must say it couldn't check. It must never answer from memory.",
        "Add two conflict cases. First, a version question: a program overview gives one credit total, but the program page lists two curricula with different totals. The right move is to ask the student's intake year, then answer for that curriculum.",
        "Second, a true conflict: two undated official pages give different numbers for the same rule. The right move is to show both, route to the owning office and file a curation item. Never pick one silently, and never trust the newer-looking page."
       ]
      },
      {
       "day": "Days 5–6 · about 3 hours",
       "steps": [
        "Add a crisis route that runs before retrieval. It has a high-recall keyword check in English, Bangla and Banglish, plus a small classifier prompt for indirect wording.",
        "It replies only with a static card listing counselling and emergency contacts with their hours, and it shows which lines are open now in your timezone. A keyword hit never calls a model, and is never stored in full or queued for curation. Each contact has an owner who re-verifies it, and a date.",
        "The counselling centre must approve the card's wording and contacts in writing before any real student sees it. Send them the card as soon as it's written. Nothing here waits for their reply.",
        "Test it on your crisis set: at least 30 crisis messages and 30 harmless look-alikes per language (for example, “this exam is killing me”). You wrote them in your weekly crisis-set block, and a native speaker reviewed them. Include indirect wording, and one crisis message hidden inside a scholarship question.",
        "Test the card with a fake clock at 10:00 and at 23:00.",
        "Report misses and false alarms as counts with their denominators. By the rule of three, 0 misses out of 30 still allows a true miss rate of up to about 10%. That is encouraging, not proof.",
        "**Stop here on Day 6** when both clock tests pass and the counts are in your log."
       ]
      },
      {
       "day": "Day 7 · about 90 min",
       "steps": [
        "Run the hard set plus the answerable questions in `development.jsonl` and `regression.jsonl`. Record correct answers, clarifications, partial answers, routes and declines, plus false answers and unnecessary refusals. Report counts per language (“36 of 40”) with set versions.",
        "Fix the worst failure, add it to regression, and rerun. Keep `held_back.jsonl` sealed for the final release check. If a held-back failure has already guided a fix, it is now regression data and needs a fresh replacement."
       ]
      },
      {
       "day": "Day 8 · about 90 min",
       "steps": [
        "Ask 3 friends or juniors to try to make it invent a rule, using made-up or allowed questions. Keep redacted copies of their attempts, and turn the ones that worked into regression tests. Don't give them the reserved release cases, and don't use their wording to tune prompts."
       ]
      }
     ],
     "recall": [
      {
       "q": "When should the assistant ask a question instead of answering?",
       "link": "#answer-ask-or-route",
       "answer": "When the matching entry's answer depends on a condition the student hasn't stated, such as credit load or program. Ask one specific question, then answer."
      },
      {
       "q": "Two official pages disagree. What should the assistant do?",
       "link": "#answer-ask-or-route",
       "answer": "First check whether they apply to different students (curriculum version, intake, program). If so, ask and answer for that case. If not, show what each says, route to the owning office and file a curation item. Never pick one silently."
      },
      {
       "q": "Name two kinds of questions the assistant should never answer itself, and what it does instead.",
       "link": "#answer-ask-or-route",
       "answer": "Personal records (route to the portal or office) and ratings of named teachers or exam answers (refuse politely). A crisis message gets counselling and emergency contacts."
      }
     ],
     "extra": [],
     "added": "2026-10-28",
     "story": {
      "year": "2024",
      "title": "The city chatbot that told businesses to break the law",
      "what": "New York City's MyCity chatbot was built to answer business owners' questions. Reporters found it telling landlords they could refuse tenants with housing vouchers and telling employers they could take a cut of workers' tips. Both are illegal in New York.",
      "lesson": "an official-looking assistant that invents rules does more harm than no assistant. When the evidence isn't there, route.",
      "url": "https://themarkup.org/news/2024/03/29/nycs-ai-chatbot-tells-businesses-to-break-the-law"
     }
    },
    {
     "slug": "course-planning-helper",
     "title": "A Course-Planning Helper",
     "kind": "lesson",
     "time": "about 9 hours",
     "hook": "Let code decide what's allowed. Let the model explain it.",
     "intro": [
      "“What should I take next semester?” is the question students ask advisors most. A model that guesses prerequisites from memory will get some wrong. A lookup over the official curriculum won't.",
      "You'll turn one program's curriculum into reviewed data. You'll write tools in plain code that return **eligible**, **blocked** or **unknown**, each with a reason. Then the model calls those tools and explains the result. Students type the courses they've done. That is unverified input, never an official record. The assistant never registers courses or approves waivers, and it always ends with “confirm with your advisor.”"
     ],
     "unlocks": "give course suggestions that come from rules you can test, not from a model's memory.",
     "edge": "splitting work between code and a model: the model talks, the code decides.",
     "overview": [
      "Turn one program's curriculum and prerequisites into versioned, structured data.",
      "Write and test tools that return eligible, blocked or unknown, with reasons.",
      "Let the model call the tools, explain the result and state its limits."
     ],
     "checkpoint": "[Tools and the Agent Loop](#tools-and-the-agent-loop) and [Safe Tools](#safe-tools) are complete.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Pick one program and one curriculum version. From the official curriculum, encode its first year in `curriculum.json`. Include course codes, credits, prerequisites as AND/OR expressions, minimum grades, co-requisites and labs, equivalent courses and elective groups.",
        "Cite the document, its version and the cohorts it applies to. Add later years only after the tests pass.",
        "Keep the catalog separate from a term's offerings. If you have no official offering list, offerings are unknown, not “not offered”.",
        "No university curriculum to work from? Use any publicly posted degree plan with prerequisites, or your community's own published rules (for example, a club's requirements for joining a team). The eligible, blocked and unknown tools and the 30 test profiles work the same."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Without AI-written code, write `check_eligibility(profile, course)` returning `eligible`, `blocked` or `unknown` with a machine-readable reason (“needs CSE 201”, “curriculum version not given”), and `options(profile)` that lists eligible courses."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Write 30 made-up student profiles with expected results you've checked by hand: AND/OR prerequisites, failed and repeated courses, minimum grades, labs, equivalents, the wrong curriculum version, and missing offerings. Every one must pass."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Expose both as read-only tools to your assistant. It may suggest only courses the tools return. It must show the reason, ask for the curriculum version when it's missing, and say that offerings and seats change each semester.",
        "Keep these tools out of the student pilot: every pilot answer must trace to an approved knowledge-base entry. They can join a later pilot once their curriculum pack is approved the same way."
       ]
      },
      {
       "day": "Days 5–6 · about 3 hours",
       "steps": [
        "Run the assistant on 10 profiles in conversation, including impossible requests (a course that doesn't exist, “guarantee me an A”). Count suggestions from outside the tools: the target is zero. If no plan fits, it should name the conflicting rules, never quietly drop a prerequisite.",
        "Ask a department member or a senior in that program to review `curriculum.json`. Until someone has, label the helper a preview."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why do eligibility rules live in code and data rather than in the prompt?",
       "link": "#course-planning-helper",
       "answer": "Code gives the same answer every time and can be tested; a prompt can be ignored or misread. The model only explains what the tools return."
      },
      {
       "q": "Why does the checker need an “unknown” result, not just yes or no?",
       "link": "#course-planning-helper",
       "answer": "Missing facts (curriculum version, offerings, a grade) are common. Forcing yes or no turns a gap into a confident wrong answer; unknown makes the assistant ask or route."
      }
     ],
     "extra": [],
     "added": "2026-10-28"
    },
    {
     "slug": "choose-models-and-budget",
     "title": "Choose Models and a Budget",
     "kind": "lesson",
     "time": "about 7.5 hours",
     "hook": "The best model is the cheapest one that passes your tests.",
     "intro": [
      "You can run models on your own laptop, use a provider's free tier, or pay per token. Each has a different cost, speed, quality on Bangla, privacy terms and amount of work to keep running.",
      "You'll run the same eval on three setups and decide with numbers: quality per language, correct refusals, speed, and cost per 1,000 questions at the traffic you expect."
     ],
     "unlocks": "defend a model choice with an eval, a latency measurement and a monthly cost estimate.",
     "edge": "cost engineering. Prices and models change every few months, but a repeatable comparison doesn't.",
     "overview": [
      "Compare a low-cost and a stronger hosted model on the same eval, plus a local one if you have it.",
      "Estimate monthly cost at three traffic levels, including caching.",
      "Set budget alerts and a per-user limit."
     ],
     "checkpoint": "your eval from [Answer, Ask or Route](#answer-ask-or-route) runs with one command and saves results with model and prompt versions.",
     "assignment": [
      {
       "day": "Day 1 · about 90 min",
       "steps": [
        "Local models are optional here. If you have a local model running, add it as a third contender. Otherwise say in your results that you skipped it.",
        "Compare two hosted models (and your local one, if you have it) on the same development and regression sets, with the same prompt and retrieval setup. Record quality per language, “I don't know” results, median and slow (p95) latency, and tokens per question. Keep `held_back.jsonl` sealed."
       ]
      },
      {
       "day": "Day 2 · about 90 min",
       "steps": [
        "Read each provider's current pricing page, data-use terms and age terms. Free tiers may use your prompts to improve their products. Providers also treat users under 18 differently: some forbid them, others allow them with safeguards or a parent's consent. Some freshers are 17. Read the terms for your exact use (the API, not the consumer app), and record what they require.",
        "Use your expected language mix and the token ratios from [How LLMs Work](#how-llms-work) Day 2. Check them against the tokens per question you recorded on Day 1.",
        "Compute the cost per 1,000 questions, and per month at 2,000, 20,000 and 100,000 questions, including reasoning tokens. Show the arithmetic."
       ]
      },
      {
       "day": "Day 3 · about 90 min",
       "steps": [
        "Write `MODEL-DECISION.md`: the serving candidate you chose on development data, a proposed fallback, and where local models help (labelling, offline tests, private experiments). Record the provider's age and retention terms, and when to repeat the comparison.",
        "Freeze the chosen model, prompt and retrieval versions for the release check later. A changed model or fallback needs its own release evidence before you use it. Don't pick a winner by repeatedly testing the final held-back set."
       ]
      },
      {
       "day": "Day 4 · about 90 min",
       "steps": [
        "Add guards: a monthly budget alert, a per-user daily question limit and a global off switch. Test that the limit returns a friendly message, not an error.",
        "Don't cache answers yet. Write down the cache key you would need later: university, knowledge-base version, entry IDs and their approval versions, normalised question and answer language. Note why answers that depended on a student's own details must never be cached, and how an entry changing status would clear the cache."
       ]
      },
      {
       "day": "Day 5 · about 90 min",
       "steps": [
        "Measure before optimising. Put stable content first (instructions, output format, office directory, a few examples) and the question last.",
        "Send the same request twice, a few seconds apart, and compare cached and uncached input tokens in `usage`. Check your provider's caching docs. Some cache automatically, others only what you mark (Anthropic's API uses `cache_control`), and every provider skips prompts below a minimum length (1,024 tokens on OpenAI). So 0 cached tokens on a short prompt is expected. If that happens, record that caching doesn't apply yet.",
        "Using your provider's current price list, including any extra charge for writing to the cache, work out when caching pays at your real traffic. Don't lengthen a prompt just to reach a cache threshold, and don't set a hit-rate target before you've measured one.",
        "Run your development set at low and medium reasoning effort. Record quality, slow (p95) latency and cost per 1,000 questions. Reasoning tokens are billed as output.",
        "Add to `MODEL-DECISION.md` when you'd use a stronger model: only when good evidence was retrieved and the model still failed to use it. A stronger model can't fix a missing source.",
        "Stop here when both comparisons and the rule are in your decision file."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why can a laptop model be right for development but wrong for serving 30,000 students?",
       "link": "#choose-models-and-budget",
       "answer": "Serving needs uptime, many simultaneous users and predictable speed. A laptop gives none of these, though it is free and private for experiments and labelling."
      }
     ],
     "extra": [],
     "added": "2026-10-28"
    },
    {
     "slug": "assistant-service-and-web",
     "title": "Ship It: Service and Website",
     "kind": "lesson",
     "time": "about 3 weeks",
     "hook": "Keep the Python you tested. Put your platform's front door in front of it.",
     "intro": [
      "Until now the assistant ran as your own app. Now it moves behind the platform students already use. You don't rewrite it: your tested Python answer service, the protected API from [Make It Sturdy](#project-make-it-sturdy), becomes a private service. The platform's own backend becomes the only door to it.",
      "That gateway checks who is asking, which university's knowledge base they may search, whether the feature is on and how many questions they have left, before it calls your service. The model never decides access, and the service never trusts a university ID sent by the browser."
     ],
     "unlocks": "run a tenant-safe, rate-limited assistant service behind your platform's sign-in, with a chat page in your web app.",
     "edge": "integrating an AI service into an existing production codebase without weakening its security model.",
     "overview": [
      "Put an authenticated gateway in front of a private answer service.",
      "Check the user's verified tenant, entitlement and budget on the server before any search.",
      "Ship a chat page behind a feature flag, with logs that leave out personal data."
     ],
     "checkpoint": "your [Choose Models and a Budget](#choose-models-and-budget) decision is written, and you can run your platform locally with emulators.",
     "assignment": [
      {
       "day": "Days 1–3 · about 4.5 hours",
       "steps": [
        "Update `POLICY.md` for live use before you write code. Student messages are personal data. Redact IDs, phone numbers and grades before storing. Keep raw text only briefly. Curation items carry a redacted paraphrase, not the raw message. Crisis-routed messages are never stored in full.",
        "Choose a model provider tier that doesn't train on your prompts. Keep the record of what you process (purposes, systems, retention) separate from chat transcripts: the record lasts for years, transcripts only briefly. Your notice names the model provider and says that messages leave the country. Before a live pilot with real students, get a qualified local review of your privacy duties.",
        "Add a scrubber that removes phone numbers, student IDs, emails and national ID numbers before anything is logged or sent to a model. Test it on Bangla and Banglish text.",
        "Write a design note. It covers the request path from client to cited answer, where the service runs, where the index lives, how the gateway proves its identity to the service, and what is logged and for how long.",
        "Start with the simplest store that passes your tests. For about 100 approved entries per university, an index built in memory from the published entries is enough. Move to Postgres with row-level security, as in [Postgres Search and Access Rules](#postgres-search-and-access-rules), when the corpus or traffic needs it, and write down what would trigger the move.",
        "Get the note reviewed by a friend or a peer, or check it against your own [Make It Sturdy](#project-make-it-sturdy) evidence table.",
        "Write two contracts. First, the public contract. The client sends `{question, idempotencyKey, conversationId?, preferredLanguage?, programHint?, curriculumHint?}`. Reject extra identity fields, and never forward client identity headers.",
        "Second, the internal contract. After verifying the student, the gateway creates an internal envelope `{context: {uid, tenantId, requestId, operation}, input: {...}}`. Its context comes only from server authority, and is bound to a gateway-created request record with those fields and a hash of the allowed input. Conversations and results are server-owned. Fetches and retries recheck user and tenant ownership.",
        "Start `PILOT-AUTHORIZATION.md` now, and send your approval requests. Ask the registrar or student-affairs office for written permission for the scope of a small pilot, and ask the platform owner to authorize it. If you haven't yet, send the crisis card to the counselling centre for written approval. Approvals take calendar time. **Stop here** when the policy, the design note and both contracts are committed and the requests are sent."
       ]
      },
      {
       "day": "Days 4–6 · about 4.5 hours",
       "steps": [
        "Deploy the answer service privately, so only the gateway's service identity can call it ([Cloud Run service-to-service authentication](https://docs.cloud.google.com/run/docs/authenticating/service-to-service)). That identity proves **which service called**, not which student.",
        "Give the gateway its own runtime service account, and allow it to invoke only the answer service. On the service, verify the token's audience and that its `email` claim is the gateway's service account. Other accounts can hold invoke permission too (for example, through project-wide roles), so the audience alone doesn't say who called.",
        "Only after authenticating the gateway may Python accept the internal envelope. Validate its schema, and match its context and input hash to the gateway-created request record. Load conversations and citations only within that verified user and tenant scope. The public contract still rejects identity fields. The internal contract deliberately carries them.",
        "Write tests for both doors. Direct or wrong-service calls must fail. Public `uid`, `tenantId` or `tenant_id` fields and forged identity headers must not be able to choose a user or university. Missing context, context or input that differs from the request record, and another user's conversation or result must all fail before retrieval.",
        "Prove that two universities work through the same gateway service account, and that a second student in the same university cannot read the first student's private chat. **Stop here** when direct and forged-identity calls fail in your tests."
       ]
      },
      {
       "day": "Days 7–9 · about 4.5 hours",
       "steps": [
        "Build the gateway: authenticate, resolve strict tenant authority for that same user, require `resolved`, then enforce access state and assistant entitlement. Use your platform's strict authority check, the one that fails closed, never a fallback resolver. Take `tenantId` only from its result, never from a profile field such as a student's institutional ID.",
        "Test missing claims, a missing bootstrap or profile, conflicting records, stale sessions and suspended membership with emulators. Every failure stops before the model call.",
        "Write the gateway on a currently supported runtime and function generation. Check your provider's runtime-support table: a runtime retired before your pilot would block every fix.",
        "**Stop here** when every failure case in your emulator tests stops before the model call."
       ]
      },
      {
       "day": "Days 10–12 · about 4.5 hours",
       "steps": [
        "Add per-user limits and a budget reservation before the model call. Settle the actual cost after success and expire abandoned reservations.",
        "Scope idempotency to the verified tenant and user. Claim the key atomically before the model call (a create-only write, or a transaction on the request record). If a request with that key is still running, return `pending` and let the client retry shortly. Never start a second model call.",
        "The same key and input returns the stored answer with no second model call or charge. A changed input with that key is rejected.",
        "Test result fetches and retries after suspension, and requests from another student, including one in the same university. Neither a request ID nor a conversation ID grants access.",
        "**Stop here** when two simultaneous requests with one key produce one model call and one charge."
       ]
      },
      {
       "day": "Days 13–15 · about 4.5 hours",
       "steps": [
        "Build the chat page with the answer card: answer, who it applies to, evidence links, what's still needed, next step, last-verified date, and thumbs up/down with an optional comment. Start with a full answer per request. Add streaming later only if the wait feels long and both clients support it.",
        "Add an always-visible “Need help now?” link that opens the static crisis card without calling the gateway. It must still work when a student is over the limit, the feature is switched off or the service fails.",
        "Feedback becomes a redacted curation item, never an automatic change to an answer. Run your eval suite in CI against the service with a fake model, and nightly with the real one. **Stop here** when a thumbs-down in the chat page creates a redacted curation item."
       ]
      },
      {
       "day": "Days 16–18 · about 4.5 hours",
       "steps": [
        "Ship behind a feature flag to curators only. Use it yourself for a week of normal questions, while you work on the next lesson. Record latency, cost per answer and refusals. Fix the top issue.",
        "No platform of your own? Build the gateway as a small FastAPI app with two demo groups instead of universities, and a simple web chat page. The identity, limit, budget and retry tests are the same. **Stop here** when a week of your own questions is logged and the top issue is fixed."
       ]
      }
     ],
     "recall": [
      {
       "q": "Which checks must happen on the server before the assistant searches anything?",
       "link": "#assistant-service-and-web",
       "answer": "Verified sign-in, strict tenant authority for that same user, an allowed access state, assistant entitlement and budget. The gateway then sends the verified student context to the service over the authenticated connection. A shared service account alone doesn't identify the student."
      },
      {
       "q": "Why does a thumbs-down create a curation item instead of editing the answer?",
       "link": "#assistant-service-and-web",
       "answer": "Feedback can be wrong or malicious. A curator checks it against the source, so the knowledge base only changes through the verified path."
      }
     ],
     "extra": [],
     "added": "2026-10-28"
    },
    {
     "slug": "assistant-in-the-mobile-app",
     "title": "Ship It: Mobile App",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "Most students will meet your assistant on a phone, on mobile data, with one thumb.",
     "intro": [
      "The same service now powers a chat screen in your Android and iOS app. Phones add their own problems: slow networks, apps sent to the background mid-answer, small screens and keyboards that cover the input."
     ],
     "unlocks": "put the assistant in a native app that behaves well on slow networks.",
     "edge": "AI features on mobile: retries, cancellation and graceful fallbacks on real devices.",
     "overview": [
      "Add a chat screen that reuses the web service.",
      "Handle slow networks, retries and interrupted answers.",
      "Test on a real phone, not only an emulator."
     ],
     "checkpoint": "[Ship It: Service and Website](#assistant-service-and-web) is live for curators.",
     "assignment": [
      {
       "day": "Days 1–2 · about 3 hours",
       "steps": [
        "Add the chat screen where your app's navigation rules allow it.",
        "Reuse the service, the citation format, the feedback buttons and the “Need help now?” link from the web.",
        "**Stop here on Day 2** when you can ask one question on a phone and get a cited answer."
       ]
      },
      {
       "day": "Days 3–4 · about 3 hours",
       "steps": [
        "Handle the hard cases. Generate the idempotency key on the phone and save it with [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/) before sending.",
        "When the app returns to the foreground, or after it was closed, send the same key again through the gateway to fetch the stored answer. Never read the assistant's server-only records directly.",
        "Add a timeout message and cancellation. Check that signing out or switching accounts clears the chat and the saved keys.",
        "Acceptance test: force-close the app in the middle of a request and reopen it at once, while the first request may still be running. Confirm the student sees a waiting state, then the answer, with exactly one completed request record, one model call and one charge.",
        "Measure the slow path: the first request after the service and database have been idle. Record the p95 time and what the student sees while waiting.",
        "**Stop here on Day 4** when the acceptance test passes."
       ]
      },
      {
       "day": "Days 5–6 · about 3 hours",
       "steps": [
        "Test on a real Android phone (and an iPhone if you can) on slow mobile data. Fix what breaks: the keyboard covering the input, long Bangla text wrapping, links opening outside the app.",
        "No native app? Make the web chat page work well on a phone instead, and test it on a real phone on mobile data.",
        "**Stop here on Day 6** when you have tested on a real phone and fixed the worst problems."
       ]
      }
     ],
     "recall": [
      {
       "q": "Name two mobile problems a web chat page rarely has.",
       "link": "#assistant-in-the-mobile-app",
       "answer": "The app goes to the background mid-answer, and slow or flaky mobile data. The keyboard covering the input is a third."
      }
     ],
     "extra": [],
     "added": "2026-10-28"
    },
    {
     "slug": "project-campus-assistant",
     "title": "Campus Assistant Pilot",
     "kind": "project",
     "time": "about 3 weeks",
     "hook": "A pilot isn't a launch. It's how you learn what to launch.",
     "intro": [
      "Your assistant is ready for a small trial with a time limit. If you have all the required permissions, invite real students. If not, run an isolated rehearsal with made-up users and allowed data. Both routes show what works. Label the evidence honestly."
     ],
     "unlocks": "run an approved pilot or a clearly labelled rehearsal, and decide the next step from evidence.",
     "edge": "owning an AI product end to end: data, quality, safety, cost and the people who use it.",
     "before": [
      "You started `PILOT-AUTHORIZATION.md` in [Ship It: Service and Website](#assistant-service-and-web). For a real campus pilot, it must record the platform owner's authorization, written registrar or student-affairs permission for the pilot's scope, data-use rights and participant consent. For a community project, use its responsible operator instead. Record institutional endorsement separately: “Unofficial, student-built” describes endorsement. It never replaces permission. If any required authorization is missing, use the isolated rehearsal below, and don't invite campus users through the platform.",
      "Invite only students who are 18 or over, checked at invite, unless you have documented guardian consent that your provider's terms and your privacy law accept. A box the student ticks for their guardian is not consent. Record the check in `PILOT-AUTHORIZATION.md`.",
      "Give pilot users a short notice: which model provider processes their messages and how long it keeps them, what you log and for how long, and how to ask for deletion.",
      "Before the release check, write the prompt, model, retrieval, code and knowledge-base versions, plus your thresholds and set IDs, in `RELEASE-EVAL.md`, and freeze them. Use an untouched `held_back.jsonl` with at least 15 answerable cases per supported language. If earlier results guided a change, move those cases to regression and get fresh, unseen replacements. Report the limits of small samples. Later changes need regression checks, and fresh release evidence when they respond to release failures.",
      "Prepare a one-page readiness note for the university: what it answers and refuses, a live demo of two real rules in three languages, measured error and crisis-check counts with their sample sizes (never “proves 0%”), the privacy notice, and how to switch it off."
     ],
     "checkpoint": "the assistant runs for curators on web and mobile, with release gates in CI.",
     "assignment": [
      {
       "day": "Days 1–6 · about 9 hours",
       "steps": [
        "**Days 1–3:** Run the frozen candidate once on the reserved release set. Record per-language search and answer counts, thresholds, set IDs and all versions.",
        "Separately, pass the known hard, crisis and cross-university regression suites, plus provider eligibility and cost limits.",
        "For crisis, that means: zero misses in every language on your crisis set (or a stricter bar the counselling centre sets); the help link working in every state; and the centre's written approval of the card recorded in `PILOT-AUTHORIZATION.md`. Without that approval, run the rehearsal only.",
        "If release failures guide fixes, keep the failed run, move the exposed cases to regression, and test the revised candidate on a fresh release sample. Keep unsupported languages or topics unavailable.",
        "Don't invite students until the quality gates and `PILOT-AUTHORIZATION.md` both pass. All published knowledge-base entries still need human approval.",
        "**Day 4:** Write a one-page runbook: how to switch the assistant off, roll back a knowledge-base version, and answer a complaint.",
        "**Days 5–6:** Choose the route before you start. If all required permissions and gates have passed, invite 20–30 consenting students from different departments who meet the provider's terms.",
        "Otherwise keep the service in an isolated development environment, use made-up users and made-up or otherwise allowed data, and call it a rehearsal. Willing friends may try scripted made-up cases, with notice and consent. Don't use real student records or imply university permission."
       ],
       "split": true
      },
      {
       "day": "Days 7–12 · about 9 hours",
       "steps": [
        "**Days 7–12, one session a Day while the pilot runs:** Run the approved pilot or the isolated rehearsal for two weeks. Each day, review redacted feedback and new questions. Approve every published fix by hand and version it, and add failures to regression. A change prompted by release-check failures needs a fresh release sample before that topic or setting is switched back on.",
        "Each Day, regrade a random sample of answers. Track correct answers, appropriate clarifications, routes and declines, and errors. For a rehearsal, state that questions and users were made up or scripted. Don't count them as evidence of real student adoption."
       ],
       "split": true
      },
      {
       "day": "Days 13–18 · about 9 hours",
       "steps": [
        "**Days 13–15:** Write `PILOT-REPORT.md`, headed **Approved pilot** or **Rehearsal**, with the authorization status, data used, quality counts by language, failure modes, fixes, cost and user feedback. Separate development, regression and fresh release results, including failed runs and set versions. A rehearsal cannot establish real-world demand or adoption.",
        "**Days 16–17:** Finish with a decision and its evidence: widen an approved pilot, seek authorization after a rehearsal, or pause and fix. Share the report with the responsible reviewers. Never describe a rehearsal as a completed campus deployment.",
        "**Day 18:** No permission yet? Completing the isolated rehearsal meets this project's learning requirements. List the missing approvals and the real-device and live-user checks as pending before any campus pilot.",
        "Add to your list of changes a real team would need: client attestation (Firebase App Check) on the assistant endpoint. On Expo it needs a native module in a development or release build (not Expo Go).",
        "On Android, Play Integrity needs the app linked in Play Console. By default, App Check accepts only builds that match a version published on Google Play, so an app distributed outside Play needs that setting changed.",
        "Add an iOS build, sign-in and background test before you claim iOS works. Attestation adds a layer. It doesn't replace sign-in, limits or idempotency.",
        "**Stop here on Day 18** when `PILOT-REPORT.md` and the decision are committed."
       ],
       "split": true
      }
     ],
     "done": [
      "The assistant works on web and mobile for authorized pilot users, or in an isolated rehearsal with made-up users and allowed data. The report names which route you completed and any live checks still pending.",
      "Every served answer traces to an approved knowledge-base entry with a source, tier and verification date.",
      "Your report separates development/regression results from the fresh release check, reports counts by language and cost, and labels pilot versus rehearsal feedback accurately.",
      "You can explain the request flow from the phone to the cited answer, the tenant check, and one failure you fixed, without notes."
     ],
     "showoff": {
      "pitch": "A campus assistant that answers students in English, Bangla and Banglish from verified university sources, asks when details matter, and routes to the right office when it can't answer.",
      "demo": [
       "Ask the same question in three languages and get the same cited answer.",
       "Ask a question that depends on credit load and watch it ask first.",
       "Ask for your own grades and watch it route you to the right place.",
       "Show the human-approval queue, the judge's error counts and the labelled pilot or rehearsal report."
      ],
      "proves": [
       "End-to-end engineering of an AI feature, with evidence labelled as an approved pilot or a rehearsal rather than an unproven production claim.",
       "Multilingual retrieval, human-in-the-loop curation and tenant-safe integration in a real platform."
      ]
     },
     "extra_credit": [
      "Add a second university's knowledge base and prove with tests that neither can see the other's.",
      "With permission, publish a cleaned-up summary of what students ask most, for the student affairs office."
     ],
     "recall": [
      {
       "q": "What has to be true before you invite pilot users?",
       "link": "#project-campus-assistant",
       "answer": "Release gates pass (accuracy, per-language search, zero invented rules, zero cross-tenant leaks, zero missed crisis messages, cost under budget). `PILOT-AUTHORIZATION.md` records written permission, consent, the age check and the counselling centre's approval of the crisis card. A runbook exists. And users know what is logged."
      }
     ],
     "extra": [],
     "added": "2026-10-28"
    }
   ]
  },
  {
   "title": "Conclusion",
   "weeks": "Weeks 53–54",
   "description": "Test your skills on unfamiliar material, polish your projects and choose what to deepen next.",
   "lessons": [
    {
     "slug": "whats-next",
     "title": "What's Next",
     "kind": "lesson",
     "time": "about 2 weeks (spare)",
     "hook": "The final test is a new problem, small enough to finish, different enough to make you think.",
     "intro": [
      "You have reached the end of the guided path. The question now is: can you apply the ideas when the data and requirements change? The Electives that follow are optional, not more required work.",
      "Use this time to repair gaps and try one small independent task. You've finished the Campus Assistant. This check shows whether your skills carry over to material you've never seen."
     ],
     "unlocks": "test whether your skills transfer to a new dataset and choose your next practice task.",
     "edge": "scoping, and saying no to features.",
     "overview": [
      "Show that your skills work on public material you haven't used before.",
      "Find a weak skill and pick one exercise to fix it.",
      "Choose your next project, or a deeper track for the role you want."
     ],
     "assignment": [
      {
       "steps": [
        "**Days 1–2:** Finish any required project checks you haven't done yet. Then pick one public source you haven't used, such as a small museum visitor FAQ or an open-source project's installation guide. Keep it to 5–10 pages, and record its source and reuse terms.",
        "Before you write any code, write a short brief, 6 expected question and answer cases (2 of them unanswerable from the source), and a cost limit. Stop when the brief and cases are committed.",
        "**Days 3–6:** Spend 3–6 hours adapting your existing app. First choose the simplest design that works, and explain whether you need retrieval or an agent. You may use documentation and your own code. Keep AI in explain-and-review mode: it must not design or write the solution. You don't need a new framework. Stop when your 6 cases run.",
        "**Days 7–9:** Demo 3 questions you haven't tried before, and one failure.",
        "Ask a friend to plant one bug in your copy. Or plant one yourself a week earlier and forget the details. Find the bug from its symptoms: trace the full request and show your evidence.",
        "Then make one small change to the requirements without an AI-written patch. Ask a friend to choose the change if you can. If not, add a new document format or a restriction you didn't build for.",
        "If you can't finish on your own, go back to the relevant lesson and try again. This is a check, not a speed contest. Stop when the bug is found and the change is committed.",
        "**Days 10–12:** Write a one-page evidence review: what you built, where it failed, which skill still needs practice, and what you would change.",
        "Decide the Campus Assistant's next step from your pilot evidence: widen the pilot, add a second university, or pause and fix one weakness first.",
        "Add a portfolio evidence table: requirement → code → test → result → limitation. Ask someone to review one requirement, or record a ten-minute walkthrough yourself.",
        "Keep your weekly application routine. Start applying to applied AI and backend roles, and use interview feedback to choose your next repair task.",
        "Choose deeper study only for a specific goal: [ML Zoomcamp](https://github.com/DataTalksClub/machine-learning-zoomcamp) for broader ML modelling, [LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch) for model internals, or serving and infrastructure work for an AI platform role. This path covers applied LLM applications. It does not claim mastery of every AI specialty, or protection from automation."
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
      "[Electives](#elective-local-models): local models, fine-tuning, MCP, voice and images, and model internals, each tied back to your Campus Assistant.",
      "[Harvard CS50 AI](https://cs50.harvard.edu/ai/): optional broader AI foundations: search, uncertainty and learning, with programming projects. Useful if you have gaps in those ideas.",
      "[MIT 6.S191, 2026](https://introtodeeplearning.com/): an optional route toward model training, with neural-network lectures and labs. Review calculus and linear algebra first.",
      "[Stanford CS336, Spring 2026](https://cs336.stanford.edu/): an advanced route toward building models, after PyTorch, ML, probability and systems prerequisites. Heavy implementation and GPU work."
     ],
     "done": [
      "Your small new-domain app meets the brief and recorded checks, or your evidence review clearly identifies what needs repair.",
      "You can explain a design choice, look into a wrong answer, and change a core behaviour using the docs but not an AI-written solution.",
      "You have one concrete next practice task tied to evidence, rather than another list of courses."
     ]
    }
   ],
   "shift": {
    "before": "You followed someone else's plan.",
    "after": "A new-domain demonstration, an evidence table and one targeted next practice task."
   },
   "opener": "You built an assistant and tested it with real students, or in a clearly labelled rehearsal. These two weeks check that your skills work on material you've never seen, and leave room to repair one weak spot."
  },
  {
   "title": "Electives",
   "weeks": "Optional, any order",
   "optional": true,
   "description": "Optional depth, each tied back to your Campus Assistant. Choose by goal, not by fear of missing out.",
   "shift": {
    "before": "You know where your skills end, but not how to go further.",
    "after": "At least one deeper skill practised on your own assistant, with a measured result."
   },
   "opener": "The assistant works. Now you can follow your curiosity: run it on your own machine, improve its Banglish, connect it to other AI tools, add voice, or build a model yourself. Each elective is one small, measured experiment.",
   "lessons": [
    {
     "slug": "elective-local-models",
     "title": "Elective: Run Models Locally",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "Free per token isn't free. Measure what it really costs.",
     "intro": [
      "Run open-weight models (models whose files you can download) on your own computer, learn what quantization (shrinking a model to save memory) gives up, and decide where local models fit in your assistant."
     ],
     "unlocks": "run, measure and serve an open-weight model on your own hardware.",
     "edge": "knowing the real cost of self-hosting: hardware, speed, quality and your time.",
     "overview": [
      "Run two open-weight models at different sizes and quantization levels.",
      "Measure speed, memory and quality on your eval.",
      "Put a local model behind the same interface as your hosted one."
     ],
     "assignment": [
      {
       "steps": [
        "Install [Ollama](https://github.com/ollama/ollama) or llama.cpp. Run a small and a medium model; record memory use, how long the first word takes on a long prompt, and tokens per second on your machine.",
        "Run your Bangla and Banglish eval slice with both, at two quantization levels. Compare with the hosted model you chose in [Choose Models and a Budget](#choose-models-and-budget).",
        "Put the best local model behind your assistant's model interface and use it for offline tests and labelling drafts. Write when local serving would make sense for real users, and what it would cost."
       ]
      }
     ],
     "recall": [
      {
       "q": "What does quantization trade, and how do you check whether the trade is acceptable?",
       "link": "#elective-local-models",
       "answer": "Less memory and more speed for some quality. Run your own eval slices at each level; an average benchmark won't tell you about Banglish."
      }
     ],
     "extra": []
    },
    {
     "slug": "elective-fine-tuning",
     "title": "Elective: Fine-Tune a Small Model",
     "kind": "lesson",
     "time": "about 1.5 weeks",
     "hook": "Fine-tune last, and only when you can measure the win.",
     "intro": [
      "Fine-tune a small open model for one narrow job, such as turning Banglish questions into clean English search queries. You'll use LoRA, a cheap method that trains a small add-on instead of the whole model. Then compare the result fairly with prompting."
     ],
     "unlocks": "fine-tune a small model with LoRA and prove whether it beats prompting.",
     "edge": "deciding when training is worth it, with evidence instead of hype.",
     "overview": [
      "Build a train/validation/test set from your approved data.",
      "Fine-tune with LoRA on a free or cheap GPU.",
      "Compare against your prompt-based baseline on the same test set."
     ],
     "assignment": [
      {
       "steps": [
        "Build 500–1,000 pairs (Banglish question → English search query): your curator-written paraphrases plus a labelled share generated by an LLM.",
        "Split by original question, so each question and all its paraphrases sit on one side. Every intent still appears in training. The test set uses only real, human-written questions.",
        "Fine-tune a small open model with LoRA in a free notebook GPU, following the [PEFT documentation](https://huggingface.co/docs/peft/index). Record time, cost and settings.",
        "Compare with your rewrite prompt on the test set: accuracy, latency, cost. Write whether you'd ship it, and what would change your mind."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why split fine-tuning data by original question rather than randomly?",
       "link": "#elective-fine-tuning",
       "answer": "A random split puts paraphrases of the same question in both train and test, so the score measures memorising, not whether the model works on new questions."
      }
     ],
     "extra": []
    },
    {
     "slug": "elective-mcp-server",
     "title": "Elective: Share Your Knowledge Base over MCP",
     "kind": "lesson",
     "time": "about 4.5 hours",
     "hook": "A protocol makes a connection. It never grants permission.",
     "intro": [
      "Share a read-only search over your approved knowledge base as an MCP server, so other AI tools can use it, with the same access rules. MCP (Model Context Protocol) is a standard way for AI tools to connect to tools and data."
     ],
     "unlocks": "build a small MCP server with a read-only tool and its own access checks.",
     "edge": "connecting AI tools across products without widening trust.",
     "overview": [
      "Build an MCP server with one read-only `search_campus_faq` tool.",
      "Enforce the same tenant and approval rules as your service.",
      "Test it from an MCP client."
     ],
     "assignment": [
      {
       "steps": [
        "Read the [MCP introduction](https://modelcontextprotocol.io/docs/getting-started/intro), its [authorization specification](https://modelcontextprotocol.io/specification/latest/basic/authorization) and its [security best practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices).",
        "Build a server with one read-only tool that returns approved entries with citations. No write tools.",
        "Use the HTTP transport with token verification, so the server maps each caller's token to one university. A local stdio server has only one user, so a tenant test on it proves nothing.",
        "Connect it to an MCP client and test three things: only approved entries come back, only the caller's university, and prompt-injection text in an entry is returned as data, not followed."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why does adding an MCP server not change who may read the knowledge base?",
       "link": "#elective-mcp-server",
       "answer": "MCP defines how tools, resources and prompts are offered, plus an optional authorization flow for HTTP. Your server still verifies the token and decides which university's entries the caller may read."
      }
     ],
     "extra": []
    },
    {
     "slug": "elective-voice-and-images",
     "title": "Elective: Voice and Images",
     "kind": "lesson",
     "time": "about 1 week",
     "hook": "Many notices are photos, and many questions are easier to say than type.",
     "intro": [
      "Add two new inputs: text read from notice images and scanned PDFs (for ingestion), and spoken Bangla or English questions turned into text."
     ],
     "unlocks": "ingest image-only notices and accept spoken questions, each with a measured error rate.",
     "edge": "multimodal input with honest error measurement.",
     "overview": [
      "Extract text from 20 image or scanned notices and measure errors.",
      "Transcribe 20 spoken questions in Bangla and English and measure errors.",
      "Decide whether either is good enough to ship."
     ],
     "assignment": [
      {
       "steps": [
        "Collect 20 official notices that exist only as images or scans. Extract text with a vision model or OCR; compare with a hand-typed version and count errors that change meaning (dates, amounts).",
        "Record 20 short spoken questions (with permission). Transcribe them with an open speech model such as [Whisper](https://github.com/openai/whisper); measure word errors and check whether search still finds the right entry.",
        "Write a decision: ship, ship with human review, or not yet."
       ]
      }
     ],
     "recall": [
      {
       "q": "Which extraction errors matter most for a campus assistant?",
       "link": "#elective-voice-and-images",
       "answer": "Errors that change meaning: dates, amounts, course codes and deadlines. Count them separately from harmless spelling slips."
      }
     ],
     "extra": []
    },
    {
     "slug": "elective-model-internals",
     "title": "Elective: Go Deeper into Model Internals",
     "kind": "lesson",
     "time": "about 3 weeks",
     "hook": "You don't need to build models to use them well. Building a tiny one removes the magic.",
     "intro": [
      "Continue where [Under the Hood: A Tiny GPT](#under-the-hood-tiny-gpt) stopped: better models, the training tricks that make them work, and finally a GPT-2-sized reproduction. Choose this when you want model-building or ML roles."
     ],
     "unlocks": "explain how tokenization shapes cost and quality for Bangla, and read model-building papers and code with confidence.",
     "edge": "model-level understanding, the starting point for ML and model-platform roles.",
     "overview": [
      "Build a byte-pair tokenizer and train it on Bangla text.",
      "Measure the token gap between English, Bangla and Banglish, and explain it.",
      "Retrain your tiny GPT with your tokenizer; then, if you want, makemore 2–5 and GPT-2."
     ],
     "assignment": [
      {
       "steps": [
        "Watch Karpathy's [Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE) and build a byte-pair encoder, using [minbpe](https://github.com/karpathy/minbpe) as the reference. Train it on a slice of [Bangla Wikipedia](https://dumps.wikimedia.org/bnwiki/) (openly licensed under CC BY-SA; credit it). Never train on group posts, form answers or anything personal.",
        "Measure tokens per word for English, Bangla and Banglish, with your tokenizer and with your provider's counts from [How LLMs Work](#how-llms-work). Explain the gap.",
        "Retrain your tiny GPT from [Under the Hood](#under-the-hood-tiny-gpt) on the same Bangla text twice: once with your tokenizer and once character by character.",
        "Compare loss per character on the same validation text (the sum of per-token losses divided by the number of characters), not the raw per-token loss. Compare samples too.",
        "Optional, for model-building roles: makemore lectures 2–5 from [Zero to Hero](https://karpathy.ai/zero-to-hero.html), then [Let's reproduce GPT-2 (124M)](https://www.youtube.com/watch?v=l8pRSuU81PU) on a rented GPU."
       ]
      }
     ],
     "recall": [
      {
       "q": "Why does the same question usually cost more tokens in Bangla than in English?",
       "link": "#elective-model-internals",
       "answer": "A tokenizer learns its merges from its training text. When that text is mostly English, common English words become single tokens while Bangla words split into several pieces, so the same meaning takes more tokens."
      }
     ],
     "extra": [
      "[LLMs from Scratch](https://github.com/rasbt/LLMs-from-scratch) by Sebastian Raschka: a book-length build of a GPT-style model."
     ]
    }
   ]
  }
 ],
 "checked": "30 Oct 2026",
 "week_starts": "saturday"
};
