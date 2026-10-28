# A Course-Planning Helper

*Section 6: Capstone: Campus Assistant · Lesson 36 of 41 · about 9 hours*

**Before you start, check that** [Tools and the Agent Loop](11-tools-and-the-agent-loop.md) and [Safe Tools](23-safe-tools.md) are complete.

## Introduction

> **Let code decide what's allowed. Let the model explain it.**

“What should I take next semester?” is the question students ask advisors most. A model guessing prerequisites from memory will be wrong; a lookup over the official curriculum will not.

You'll encode one program's curriculum as reviewed data, write deterministic tools that return **eligible**, **blocked** or **unknown** with a reason, and let the model call them and explain the result. The student types the courses they've done; that is unverified input, never an official record. The assistant never registers courses or approves waivers, and it ends with: confirm with your advisor.

**After this, you can** give course suggestions that come from rules you can test, not from a model's memory.

**The skill that lasts:** splitting work between code and a model: the model talks, the code decides.

## Lesson overview

By the end of this lesson, you should be able to:

- Turn one program's curriculum and prerequisites into versioned, structured data.
- Write and test tools that return eligible, blocked or unknown, with reasons.
- Let the model call the tools, explain the result and state its limits.

## Assignment

### Day 1 · about 90 min

1. Pick one program and one curriculum version. From the official curriculum, encode its first year in `curriculum.json`: course codes, credits, prerequisites as AND/OR expressions, minimum grades, co-requisites and labs, equivalent courses, elective groups. Cite the document, its version and the cohorts it applies to. Add later years only after the tests pass.
2. Keep the catalog separate from a term's offerings. If you have no official offering list, offerings are unknown, not “not offered”.

### Day 2 · about 90 min

3. Without AI-written code, write `check_eligibility(profile, course)` returning `eligible`, `blocked` or `unknown` with a machine-readable reason (“needs CSE 201”, “curriculum version not given”), and `options(profile)` that lists eligible courses.

### Day 3 · about 90 min

4. Write 30 synthetic student profiles with expected results you've checked by hand: AND/OR prerequisites, failed and repeated courses, minimum grades, labs, equivalents, the wrong curriculum version, and missing offerings. Every one must pass.

### Day 4 · about 90 min

5. Expose both as read-only tools to your assistant. It may suggest only courses the tools return, must show the reason, must ask for the curriculum version when it's missing, and must say that offerings and seats change each semester.

### Days 5–6 · about 3 hours

6. Run the assistant on 10 profiles in conversation, including impossible requests (a course that doesn't exist, “guarantee me an A”). Count suggestions from outside the tools: the target is zero. If no plan fits, it should name the conflicting rules, never quietly drop a prerequisite.
7. Ask a department member or a senior in that program to review `curriculum.json`. Until someone has, label the helper a preview.

### Memory check · 10 min

8. Close this page. In your log, answer from memory, then check:
   - Why do eligibility rules live in code and data rather than in the prompt? ([where to check](36-course-planning-helper.md))
   - Why does the checker need an “unknown” result, not just yes or no? ([where to check](36-course-planning-helper.md))
9. If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.

<details>
<summary>Check your answer: Why do eligibility rules live in code and data rather than in the prompt?</summary>

Code gives the same answer every time and can be tested; a prompt can be ignored or misread. The model only explains what the tools return.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

<details>
<summary>Check your answer: Why does the checker need an “unknown” result, not just yes or no?</summary>

Missing facts (curriculum version, offerings, a grade) are common. Forcing yes or no turns a gap into a confident wrong answer; unknown makes the assistant ask or route.

Different wording is fine. Correct missing pieces, then retry without looking next session.

</details>

---

- [ ] Mark complete (a note for yourself; it doesn't sync with the web page)

[← Previous: Answer, Ask or Route](35-answer-ask-or-route.md) · [Course map](README.md) · [Next lesson: Choose Models and a Budget →](37-choose-models-and-budget.md)

[Improve on GitHub](https://github.com/Faizan2001/ai-engineer-path/edit/main/data/course.js) · [Report an issue](https://github.com/Faizan2001/ai-engineer-path/issues/new) · [See lesson changelog](https://github.com/Faizan2001/ai-engineer-path/commits/main/data/course.js) · Links checked 28 Oct 2026
