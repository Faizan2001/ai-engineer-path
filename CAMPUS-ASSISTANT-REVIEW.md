# Campus Assistant restructure — 28–29 October 2026

**The path now ends by building the thing it has been talking about.** The Campus Assistant was the course's story from lesson 1, but building it was optional and came after the course. Now it is the capstone. The assistant:

- answers students' repeated questions from approved university sources;
- asks when details matter;
- says who to contact when it can't answer;
- runs inside the learner's own web and mobile app.

Nothing was removed:

- The four practice projects and all 32 earlier lessons stay.
- Their order, slugs and day ticks are unchanged, so saved progress carries over.
- Content added behind a returning learner is listed on the course page instead of moving their **Continue** button.

## What changed

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
- a frozen held-back question set;
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

- `assets/app.js`: optional sections stay out of progress, the finish date and **Continue**. Lessons and Days added behind a learner appear in a "New since you passed this point" card and in the finished lesson itself. Progress this version can't read (for example from a newer version) is kept and written back. Numbering shows "Lesson n of 41" and "Elective n of 5".
- `assets/styles.css`: colours for sections 7 and 8.
- `tools/export_markdown.py`: uses the same numbering.

New total: **46 lessons, about 52 weeks at 9 hours a week** (about 39 at 12), plus optional electives. Measured from the day blocks, the core lessons take about 47 weeks. The weekly data hour comes out of study time, and approvals and staff replies take calendar time. This is a planning estimate, not a measured completion time.

## Why this shape

- **Learn on clean data, transfer to messy data.** MDN has known answers, a public licence and no permission or rendering problems. That means retrieval metrics mean something while you learn them. Campus data is multilingual, changes every semester and needs permission. Meeting it in the capstone, with an eval suite already in hand, makes the capstone a real transfer test.
- **Data is the slowest dependency, so it starts early.** Permission, official documents and staff confirmation take calendar time.
- **Questions from students, answers from official sources.** Student groups show what people ask and how they phrase it. Their replies conflict and go out of date, and they belong to other people.
  - Meta's terms require written permission for any automated collection. An AI agent driving your browser fits that description.
  - Meta's group policies require notice and explicit consent when you collect from members.
  - So the path teaches an opt-in question form and human-read, paraphrased questions.
  - Answers must cite official documents or a named office's confirmation.
- **Automate the checking, not the trusting.** The capstone builds an LLM-judge first pass and tunes it, then measures it on a fresh, untuned sample. Auto-approval is gated first on a count: the judge passed none of the entries the learner failed. Kappa is a secondary number. Fees, scholarships, discipline and health are never auto-approved.
- **Honest failure behaviour is a feature, and it is tested.** Five moves are taught: answer with evidence, ask one clarifying question, answer the established part, route to an office, or decline a false premise. The hard set has a case for each move, plus conflict cases and a crisis route checked across three languages. The crisis check runs before retrieval and has a zero-miss gate.
- **Code decides, the model explains.** Course planning uses reviewed curriculum data and tested tools that return eligible, blocked or unknown.
- **Reuse what you built, and redraw the trust boundary explicitly.** The capstone puts the learner's Python answer service behind the platform gateway.
  - Only the gateway's service identity may call it.
  - The user and university come from that identity, never from the request body.
  - Retries reuse an idempotency key, so a retry never costs twice.
- **Privacy continues past collection.** Before going live, the data policy is extended to student messages: redaction, short retention, redacted curation items, no full storage of crisis messages, and a no-training provider tier. Pilot users are told which provider processes their messages.
- **Nothing left out, nothing forced.** Local serving, fine-tuning, MCP, multimodal input and model internals sit in an optional Electives section. Each has measured, project-tied exercises.

## Reviews and alternatives

Two independent read-only reviews checked this restructure.

**Site mechanics review.** No blockers. Two resume problems for returning learners were fixed:

- **Continue** moving back to the new lesson 20;
- new Days hidden inside finished lessons.

Smaller fixes:

- pass-through of progress this version can't read;
- consistent core numbering;
- "last finished" preferring core lessons.

**Teaching review.** No blockers; 11 major and 9 minor findings. Fixes include:

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
- three wrong elective details (MCP, LoRA split, Meta wording).

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
- Existing day groups keep their index and label. New Days are only appended and are flagged as `added`.
- Internal links are checked by the restructure script and by the exporter, which fails on an unknown `#slug`.
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
