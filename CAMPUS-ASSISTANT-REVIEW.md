# Campus Assistant restructure — 28–30 October 2026

**The path now ends by building the thing it has been talking about.** The Campus Assistant was the course's story from lesson 1, but building it was optional and came after the course. Now it is the capstone. The assistant:

- answers students' repeated questions from approved university sources;
- asks when details matter;
- says who to contact when it can't answer;
- runs inside the learner's own web and mobile app.

Nothing was removed:

- The four practice projects and all 32 earlier lessons stay.
- Their order, slugs and day ticks are unchanged, so saved progress carries over.
- Content added behind a returning learner is listed on the course page instead of moving their **Continue** button.

## Final plan — 30 October 2026

Two external research reports, four fact-checking agents and a four-person agent panel (learning coach, product engineer, first-principles mentor, risk and ethics reviewer) were reconciled with the earlier reviews. The decisions below follow the learner's stated rules: teach only what a solo developer needs, in daily bite-sized steps with a clear stopping point, with regular visible wins and Karpathy-style first-principles depth, without burnout.

**What changed in this round**

| Change | Where | Time |
|---|---|---|
| A first win before any AI: a 30-line keyword search over five help pages, with tests and a one-minute demo | Lesson 4, Day 3 | +1.5 h |
| Under the hood: count tokens in English, Bangla and Banglish, and write softmax sampling by hand | Lesson 5, Day 2 | +1.5 h |
| Under the hood: build micrograd and measure overfitting yourself | Lesson 10, Days 7–10 | +6 h |
| Under the hood: rebuild vector search in numpy and match the library | Lesson 12, Day 13 | +1.5 h |
| Honest numbers: paired bootstrap and the rule of three | Lesson 13, Day 8 | +1 h |
| First campus slice: 20 approved entries on localhost; the model may only pick an approved entry or say none | Lesson 20, Day 7 | +1.5 h |
| **New core lesson: Under the Hood, A Tiny GPT** (makemore bigram, attention by hand, train and compare) | Lesson 21 | +9 h |
| Prompt caching measured on real requests, reasoning-effort A/B, and when a stronger model is justified | Lesson 38 (models), Day 5 | +1.5 h |
| Week-long project blocks split into Days, each with a **Stop here** line | Projects 8, 19, 25, 33, 41 | 0 h |
| Trims and test-outs for skills already shown (LangGraph trimmed to essentials; login, container and CI quickstart test-outs; monitoring skims) | Lessons 17, 23, 28, 30, 33 | about −10 h for someone who qualifies |
| Capstone hardening: a tool-failure test category; an hours-aware crisis card with native-reviewed look-alikes and counts; 18+ pilot unless documented guardian consent; a readiness note for the university; simplest store first; a dedicated gateway service account; durable mobile recovery; true stories (Air Canada, NYC MyCity) and predict-first prompts | Lessons 34–41 | within existing Days |

**Corrected claims from the external reports** (checked against primary sources):

- Anthropic's API terms do **not** set an 18+ floor. They allow products for minors with safeguards. OpenAI's Services Agreement requires parent or guardian consent. Gemini's API terms are 18+. The course now says to read the exact API terms and record them.
- Bangladesh's data-protection act puts the records register in s.19, not s.18, and leaves breach-notification timing to regulations: there is no fixed 72 hours. The course asks for a qualified local review before any live pilot, rather than teaching legal details.
- App Check enforcement and replay protection are different settings. On Expo, attestation needs a native module in a development or release build (not Expo Go). On Android, Play Integrity needs the app linked in Play Console, and by default App Check accepts only builds that match a version published on Google Play. It never replaces sign-in, limits or idempotency.
- Three of the four "missing" bridge lessons proposed by one report were already covered: context selection in LangGraph Day 9, Cloud Run service identity in Ship It, and background recovery in Ship It: Mobile. Only the small genuine gaps were added.

**Totals:** 47 lessons: 42 core over about **54 weeks at 9 hours a week** (about 41 at 12), plus 5 optional electives. About one session in ten goes to debugging, curation or catching up; the estimate includes it. This is a planning estimate, not a measured completion time.

**Kept deliberately:** the clean practice projects before campus data, the career lesson, human approval of every published answer during the course and pilot, and the sealed release set.

## What changed in the first restructure (28–29 October)

| Where | Change | Time added |
|---|---|---|
| Lessons 1–2 | The capstone is named as the goal from day one. Learners without a platform of their own get a stated fallback. | — |
| Lesson 10 | Day 6, campus track: start a private question bank in English, Bangla and Banglish, with intents, owning offices, and a no-identities rule. | 45 min |
| Lesson 12 | Day 12, campus track: a cross-language embedding check that gives a first per-language signal. | 45 min |
| **New lesson 20: Campus Knowledge Base** | See below. | 9 h + 1 h/week |
| **New Section 6: Capstone, lessons 33–40** | See below. | ≈ 12 weeks |
| Conclusion | Kept. The transfer exercise now follows the pilot. | — |
| **New Section 8: Electives (optional)** | Local models, LoRA fine-tuning, an MCP server, voice and images, and a tiny language model built from scratch. Each has a linked starting resource. | up to ≈ 6 weeks, optional |

**Lesson 20, Campus Knowledge Base:**

- data policy;
- platform terms and consent;
- asking group admins and university offices for help;
- an inventory of official sources;
- separate development, regression and sealed release question sets;
- 100 questions grouped into intents, giving 20 sourced FAQ entries;
- then 1 hour a week of curation until the capstone, reaching 150 questions with ≥ 15 per language held back.

**Section 6, capstone lessons 33–40:**

1. Curation and verification
2. Multilingual search
3. Answer, ask or route
4. Course-planning helper
5. Models and budget
6. Service and website
7. Mobile app
8. **Project: Campus Assistant Pilot**

**Site code:**

- `assets/app.js`: optional sections stay out of progress, the finish date and **Continue**. Lessons and Days added behind a learner appear in a "New since you passed this point" card and in the finished lesson itself. Unknown completion slugs and numeric ticks are kept and written back. Unknown legacy whole-Day records are not covered by that compatibility guarantee. Numbering shows "Lesson n of 42" and "Elective n of 5" (after the final plan).
- `assets/styles.css`: colours for sections 7 and 8.
- `tools/export_markdown.py`: uses the same numbering.

Total after the first restructure: 46 lessons, about 52 weeks at 9 hours a week; after the final plan, 47 lessons and about 54 weeks (see above). Counted as about 90-minute study sessions (one per Day), the core path has 297 sessions: about 50 weeks at 6 a week, and about 54 with the one-in-ten allowance for debugging, curation and catching up. `tests/course.test.cjs` recomputes this from the Day blocks. The weekly data hour comes out of study time, and approvals and staff replies take calendar time. This is a planning estimate, not a measured completion time.

## Why this shape

- **Learn on clean data, transfer to messy data.** MDN has known answers, a public licence and no permission or rendering problems. That means retrieval metrics mean something while you learn them. Campus data is multilingual, changes every semester and needs permission. Meeting it in the capstone, with an eval suite already in hand, makes the capstone a real transfer test.
- **Data is the slowest dependency, so it starts early.** Permission, official documents and staff confirmation take calendar time.
- **Questions from students, answers from official sources.** Student groups show what people ask and how they phrase it. Their replies conflict and go out of date, and they belong to other people.
  - Meta's terms require written permission for any automated collection. An AI agent driving your browser fits that description.
  - Meta's group policies require notice and explicit consent when you collect from members.
  - So the path teaches an opt-in question form and human-read, paraphrased questions.
  - Answers must cite official documents or a named office's confirmation.
- **Automate the checking, not the trusting.** Tune the judge on 60 examples, then measure it on 20 fresh representative entries and 20 fresh, deliberately incorrect entries. Report false accepts with the number of human-failed entries; an empty denominator is not evidence. Every pilot entry still needs a curator approval. Later low-risk automation is a separate decision, never a kappa-only or small-zero-error gate.
- **Honest failure behaviour is a feature, and it is tested.** Five moves are taught: answer with evidence, ask one clarifying question, answer the established part, route to an office, or decline a false premise. The hard set has a case for each move, plus conflict cases and a crisis route checked across three languages. The crisis check runs before retrieval and has a zero-miss gate.
- **Code decides, the model explains.** Course planning uses reviewed curriculum data and tested tools that return eligible, blocked or unknown.
- **Reuse what you built, and redraw the trust boundary explicitly.** The capstone puts the learner's Python answer service behind the platform gateway.
  - Only the gateway's service identity may call it.
  - Service identity proves which gateway called. A separate internal envelope carries the server-verified user and tenant, bound to a gateway-created request record. Public identity fields/headers never become trusted context.
  - Events uses strict `evaluateTenantAuthorityForUser(uid, token)` resolution before entitlement/budget checks; two users in one tenant still have separate private conversations.
  - Retries reuse an idempotency key, so a retry never costs twice.
- **Privacy continues past collection.** Before going live, the data policy is extended to student messages: redaction, short retention, redacted curation items, no full storage of crisis messages, and a no-training provider tier. Pilot users are told which provider processes their messages.
- **Nothing left out, nothing forced.** Local serving, fine-tuning, MCP, multimodal input and model internals sit in an optional Electives section. Each has measured, project-tied exercises.

## Reviews and alternatives

Two independent read-only reviews checked this restructure.

**Initial site mechanics review.** Reported no blockers; the later R3 reproduction below found an additional partial-progress case. Two resume problems for returning learners were fixed:

- **Continue** moving back to the new lesson 20;
- new Days hidden inside finished lessons.

Smaller fixes:

- pass-through of progress this version can't read;
- consistent core numbering;
- "last finished" preferring core lessons.

**Initial teaching review.** Reported no blockers; 12 major and 9 minor findings, all fixed in that pass. Fixes include:

- leakage of held-back questions into the index (now a frozen set and a leak check);
- the 150-question set that no step built;
- a capstone that assumed the learner already owned a platform (fallbacks added);
- the changed service trust model;
- crisis and clarify/partial/premise test cases;
- live-chat privacy;
- an unsafe answer cache (caching deferred, key specified);
- provider age terms and university sign-off for the pilot;
- the kappa-only gate;
- conversation state and idempotency;
- under-estimated times (now 52 weeks);
- three wrong elective details (MCP, LoRA split, Meta wording);
- a no-curriculum fallback for the course-planning helper.

**A second, independent plan** proposed re-theming all four practice projects to the campus, in about 44 weeks. Many of its ideas were adopted:

- opt-in questions;
- five response modes and the answer card;
- the eligible/blocked/unknown planner with 30 synthetic profiles;
- per-language gates reported as counts;
- application-enforced budgets;
- no answer caching until invalidation is proven;
- a labelled rehearsal when approval is missing.

The re-theming itself was not adopted now, for three reasons:

- it would rewrite about 25 lessons of validated, MDN-specific steps;
- early lessons would depend on campus data that needs permission;
- it would bring multilingual complexity in before the basics.

It remains a reasonable later revision if the campus corpus proves clean and fetchable by about week 20.

## Rules kept from earlier reviews

- Existing slugs and their relative order are unchanged.
- Existing day groups keep their index. New Days are only appended and are flagged as `added`. In the final plan, five week-long project blocks were relabelled as Days and flagged `split`. A save written before then treats the old single tick as the whole block, so nobody loses a finished week. Lesson 5's single block gained a Day label; it had no ticks before.
- Internal links are checked by `tests/course.test.cjs` and by the exporter, which fails on an unknown `#slug`.
- Exported Markdown filenames after lesson 19 were renumbered, and stale files were removed. Old GitHub links to `markdown/20-…`–`32-…` will 404. Course-page links use slugs and keep working.

## Verification

- **Restructure invariants:** no slug removed, old order kept, old day groups unchanged, unique slugs, every internal link resolves.
- **Exporter:** 46 lessons, with core and elective numbering.
- **External links:** all new links return HTTP 200.
- **Browser checks on a local server:**
  - a new learner;
  - a learner who stopped at Ask MDN;
  - a learner mid-LangGraph, whose **Continue** still points to LangGraph, with lesson 20 listed as new;
  - a learner who had finished lessons 10 and 12, who now sees the new Days;
  - all core lessons done;
  - progress containing unknown lessons, which survives a save;
  - new lessons at 375 px;
  - console errors.

These checks cover the course site. They do not check learner implementations, provider prices (re-check them in the models lesson), or any university's approval of a real pilot.

## Follow-up corrections: R1–R6 (29 October 2026)

The follow-up review found six issues despite the earlier checks. This local patch addresses them without changing lesson slugs, order or Day indices:

| Finding | Correction |
|---|---|
| R1: gateway resolver | The lesson and Events plan require strict authority resolution for the authenticated user; missing/conflicting/stale/suspended authority denies access. |
| R2: student identity handoff | Public and internal schemas are distinct. The private service authenticates the gateway, validates its student context against a server-created request record, and enforces tenant plus user ownership. |
| R3: partial-progress resume | Continue recognizes valid Day ticks in a later original core lesson. Newly inserted material remains catch-up work. A new learner still gets the normal sequence; electives and unknown ticks do not advance it. (Until round 2 below, a learner who started on the new version and skipped an inserted lesson was wrongly treated as returning; a `since` date now fixes that.) |
| R4: evaluation leakage | Development/model selection and regression loops never consume the sealed release set. Fixing an exposed release failure requires fresh release cases, with versions, counts and prior failed runs retained. |
| R5: empty-negative judge gate | Fresh calibration explicitly includes bad examples and reports denominators. Automatic publication stays disabled for the course and pilot. |
| R6: pilot permission | One route requires recorded platform/institutional scope permission, data rights, consent and provider eligibility. The other is an isolated, clearly labelled rehearsal; unofficial branding never substitutes for permission. |

The existing no-curriculum fallback remains. These edits change course behavior and implementation instructions, not the Events backend. No pilot, live authorization check or model-quality measurement is established by this patch.

### Follow-up validation

- `node tests/progress.test.cjs`: 12 cases pass. Against the pre-fix app, the partial Agent Fundamentals and legacy-Day resume cases fail; the other 10 pass.
- `node --check assets/app.js` and `node --check data/course.js` pass.
- All 46 Markdown lessons regenerated; existing slugs, relative order and Day labels/indices preserved.
- Scope: course code and prose only. No live browser/account-sync, real model, Firebase/Cloud Run integration or university pilot tests were run.

### Final-plan validation (30 October 2026)

- `node tests/progress.test.cjs`: 17 cases pass. Five are new: a legacy week tick becomes every Day once; a new partial Day stays partial; both inserted lessons are catch-up for a learner past Give It Tools; finished lessons list their new Days; legacy exports migrate.
- The restructure script checked every live-release slug, its order, and every Day group against the last live release (0775835). That script was a one-off and is not in the repo; round 2 below moved the same checks into `tests/course.test.cjs`.
- All 47 Markdown lessons regenerated; asset versions bumped to 8.2.

### Final review, round 2 (30 October 2026)

Three reviewers (site mechanics, learning philosophy, factual accuracy) checked the final plan. Every finding below was checked against the code or the course text before it was applied. The outside facts were re-fetched from their sources: sqlitesearch's README (every vector mode is approximate, then reranked exactly), both videos' chapter lists, Firebase's Play Integrity settings, OpenAI's caching minimum, uv's PyTorch guide and the Cursor story.

| Area | Finding | Fix |
|---|---|---|
| Saved progress | A page still open on the live release rewrites the save without the 8.2 marker. 8.2 then expands a lone Day 1 tick to a whole block, and the old page drops inserted lessons, electives and Days 2+ of split blocks. | Progress moves to a new key and account document; the old save is read only while no new one exists. A test runs the live 0775835 app and course over an 8.2 save. |
| Saved progress | A tick on a new device before the account loaded overwrote the account (pre-existing). | Saves reach the account only after its first snapshot; the first 8.2 visit carries the older account progress over once. Tested with a fake account. |
| Saved progress | A learner who started on 8.2 was treated as returning for the two inserted lessons. | A first visit records `since`; material added before that date is ordinary path. |
| Site | The finish date ignored the one-in-ten catch-up allowance (51 vs 54 weeks); electives were numbered 43–47 in the Markdown map and issue links. | One rule everywhere: sessions × 1.1 ÷ sessions per week. Electives are numbered 1–5. |
| Stop points | "Each Day ends with a Stop here line" was false for most Days; several long blocks had no stopping point. | The promise now says to stop at the last step when there is no Stop line. Stop lines added to Give It Tools, Make It Sturdy, Ship It: Service and Website, and the pilot; What's Next has Day markers. |
| Depth Days | Three stop conditions could fail with correct code: micrograd's overfitting plot, numpy vs sqlitesearch (which is approximate by default), and the tiny GPT layers experiment without residuals and layer norm. | A data recipe that shows overfitting; compare with sqlitesearch instead of requiring a match; add residuals and layer norm first. micrograd Days follow the video's chapters. |
| Evaluation | The paired bootstrap used the 50 held-back questions before Ask MDN, and didn't say "with replacement". | It now uses the 20 practice questions, with replacement and the same draw for both searches; Ask MDN reruns it on the held-back results. |
| Workload | The crisis set could only reach about 12 messages per language by lesson 36, whose Days 3–4 also held the whole crisis route. | A separate 30-minute weekly block from Evals That Catch Real Bugs (lesson 27 prompts it); the crisis route gets its own Days 5–6. Ship It's gateway block and Make It Sturdy's last block are split. |
| Accuracy | The idempotency contract had no rule for a retry while the first request still runs; "the model can call tools"; App Check "needs a Play Store build"; the service identity check used only the token audience; an uncited 92%/47% benchmark figure; per-token losses compared across tokenizers. | Atomic key claim with a `pending` reply; your code runs the tool; corrected App Check wording; also check the token's `email`; the figure is removed in favour of the learner's own measurement; compare loss per character. |
| Padding | Agent Fundamentals rebuilt a step limit from lesson 11 and spent 4.5 hours on reading; Evals Days 1–2 were reading only; the curation lesson reused the Air Canada story and repeated a rule; Ollama sat in a core Day. | Light reading Days with an output; a tool-error Day instead; a different true story (Cursor's support bot); the local model is optional in Choose Models. |
| Setup | The first-win search couldn't say "no match"; tests came before pytest; the login test-out skipped the setup later Days need; the CI secret sat in a skippable step; CPU PyTorch was installed in a way `uv add` undoes. | Stop words and a zero-score rule with plain asserts; the test-out keeps the setup; the secret moved; the uv CPU-index setup. |

**Totals after round 2:** 47 lessons, 42 core; 297 core sessions, about 54 weeks at 9 hours a week (about 41 at 12).

**Validation:** `node --test tests/` passes 26 cases. The new progress cases fail against the reverted fixes (old save key, early account assignment, no `since` check), and the course invariants fail when a live Day group changes its number of boxes or the duration drifts. All 47 Markdown lessons regenerated. Not tested: a real Claude account, mobile browsers beyond the 375 px check, and learner implementations.

