# Provider and university comparison — 27 October 2026

**Keep the path. Add a few missing engineering exercises, not seven parallel courses.** This revision preserves the 32 lessons, four projects, lesson addresses and progress keys. The working target is applied AI/LLM/backend engineering: building, evaluating and operating a small application independently. It is not a claim of university equivalence or guaranteed employment.

## What the official material adds

| Source reviewed | Relevant emphasis | Decision for this path |
|---|---|---|
| [Anthropic: Building with the Claude API](https://academy.claude.com/courses/building-with-the-claude-api), current public syllabus | Prompt experiments, tools, RAG, context, MCP and API implementation | Add a controlled prompt experiment; make context budgeting practical. Use selected lessons as video alternatives. No second provider account required. |
| OpenAI: [evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices) and [production guidance](https://developers.openai.com/api/docs/guides/production-best-practices) | Task-specific evaluation, human calibration, quality/cost tradeoffs, staging and operation | Add a bounded model/configuration comparison and failure drill. These are documentation guides, not a complete Odin-style course. |
| Google/Kaggle: [AI Agents Intensive](https://www.kaggle.com/learn-guide/5-day-agents), November 2025 course now self-paced | Five units: agents, tools/MCP, sessions/memory, agent quality, production; codelabs and recordings | Fill the context and diagnostic gaps. Day 3 is an optional alternative explanation. Keep the existing LangGraph path rather than also requiring ADK and A2A. |
| Google: [ML Crash Course](https://developers.google.com/machine-learning/crash-course) | ML concepts and exercises | Retain the existing selected data-split, metric and embedding lessons. A full repeat is unnecessary for this applied path. |
| Stanford: [CS329S](https://stanford-cs329s.github.io/) and [syllabus](https://stanford-cs329s.github.io/syllabus.html), 2022 material | System objectives, data, model choice, deployment, monitoring, privacy; a substantial application project | Strengthen the brief, diagnostics and operational evidence. Its systems questions remain useful; old tool instructions are not treated as current API guidance. |
| Berkeley: [Advanced LLM Agents](https://llmagents-learning.org/sp25), Spring 2025 | Research lectures on reasoning, memory, planning, verification and safety, building on the 2024 course | Keep as optional depth after the basic loop. Selected memory/planning lecture is linked; the historical certificate deadlines are not a course goal. |
| Harvard: [CS50 AI](https://cs50.harvard.edu/ai/) and [projects](https://cs50.harvard.edu/ai/projects/) | Broad AI algorithms and independent Python projects | Optional repair/depth for search, uncertainty and learning. It does not substitute for production RAG and API work. |
| MIT: [6.S191](https://introtodeeplearning.com/), 2026; Stanford: [CS336](https://cs336.stanford.edu/), Spring 2026 | Neural-network training labs; substantial language-model implementation, systems and training assignments | Separate model-building direction. MIT assumes calculus/linear algebra; CS336 also expects ML, PyTorch and systems familiarity. Do not put these before a first useful AI application. |

This compares public syllabi, assignment descriptions and selected official guidance. It does not mean every lecture was watched or every external lab executed. Kaggle's text extraction was empty, so its five-day guide was inspected in the browser. No GitHub stars, testimonial counts or unverified “consensus” were used to make these decisions.

## The additions, in learning order

| Existing lesson | Required new evidence | Added practice estimate |
|---|---|---|
| 6. The AI Staircase | User/problem/success brief; distinguish missing context, bad format and a possible fine-tuning need | Within existing exercise |
| 7. Structured Output and Errors | A controlled prompt change on six practice inputs; versioned outputs | 90 minutes |
| 16. Grading Answers | Same-input model/configuration comparison: quality, cost, time and failures | 90 minutes |
| 17–18. Monitoring / Deploy It Safely | Joined request traces, a small retention/redaction policy and a runbook | 90 minutes plus existing deployment work |
| 21. LangGraph | Bounded context; long-chat and oversized-tool-result checks; permissions outside model memory | 90 minutes |
| 31. Make It Sturdy | Protected read-only HTTP API, tests and reproducible container | 9 hours |
| 31. Make It Sturdy | Fake-provider outage/concurrency drill and incident note | 3 hours |

About **18 additional hours** are included in a revised **36-week estimate at nine hours weekly**. Allow another 2–4 weeks for prerequisite repair or debugging. This is a planning estimate for someone who already builds software, not a completion deadline. The final two weeks include the transfer exercise and consolidation; they are not entirely unused time.

Already learning? Keep your progress. Review only the new exercises in lessons you have finished. New day groups are appended, so existing day indices retain their meaning. Previously completed lessons are not silently unchecked.

## What stays optional, and why

- **MCP implementation, A2A and multiple agent frameworks:** know the purpose and trust boundary, then implement only when a project needs interoperability. A protocol does not grant permission.
- **Personalized long-term memory:** context selection is required; collecting and retaining user memories adds responsibilities this project does not need.
- **Streaming and caching:** useful optimization experiments after correct behavior. Neither is a substitute for validation, authorization or measuring latency.
- **Fine-tuning, GPU serving and training from scratch:** understand when they could help; pursue the matching deeper course for an ML/model-platform role.
- **Full university lecture sequences:** optional depth with stated prerequisites. The core remains read a little, build, test, explain and move forward.

The new API lab uses official FastAPI guidance for [body validation](https://fastapi.tiangolo.com/tutorial/body/), [response contracts](https://fastapi.tiangolo.com/tutorial/response-model/), [bearer credentials](https://fastapi.tiangolo.com/reference/security/#fastapi.security.HTTPBearer), [testing](https://fastapi.tiangolo.com/tutorial/testing/) and [containers](https://fastapi.tiangolo.com/deployment/docker/). Token extraction alone is not authentication. The local lab verifies tokens against synthetic server-side accounts, reuses authorization, and leaves public identity infrastructure as explicit additional deployment work.

## What a credible finish looks like

You can explain a model choice, inspect a wrong answer, change retrieval, trace an agent action, enforce access rules, package the answer service and recover from a simulated dependency failure. Your evidence table links each claim to code, a test, results and limitations. The small unfamiliar-domain exercise checks that you can transfer those skills without an AI-produced solution.

That is useful preparation for applied AI and AI backend roles. It does not certify readiness for every job titled “AI Engineer”; model-training, research and large-scale platform roles need other experience. Hiring also depends on communicating, collaborating and meeting a particular team's requirements.

## Keeping the path usable as tools change

Keep model IDs, prompt/config versions, dependency locks and corpus hashes with results. Before an upgrade, run a small smoke test and the existing regression suite. Use current official documentation for API details; the pinned teaching examples preserve reproducibility rather than promising permanent compatibility. Review optional specialties only when a real project or role justifies them.

The durable practice is deciding what should happen, gathering evidence, diagnosing failure and taking responsibility for a change. No course can promise that these skills will be immune to automation.

## Review and verification

One independent reviewer checked the newly added exercises and identified four concrete issues. The revision aligns the logging/retention instructions, injects database failures at the database boundary, specifies a deterministic overload limit, and accepts clarification when a context constraint cannot be preserved. Static checks validate the 32 stable slugs, existing day-group positions, internal links and generated Markdown. Browser checks cover the seven substantially revised lessons at 375px width, Previous/Next navigation, a new day checkbox surviving navigation, desktop overflow and console errors. These test the course website, not student implementations.
