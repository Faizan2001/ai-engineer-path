# Evaluation

*Section 3: RAG with LLM Zoomcamp · Lesson 15 of 30 · about 1.5 weeks*

## Introduction

Now you'll measure how good Ask MDN really is. First the search, then the answers.

Numbers are better than guesses. They also look great on a resume.

## Lesson overview

By the end of this lesson, you should be able to:

- Build ground truth: the correct answers you test against.
- Measure Hit Rate (did the right page show up in the top results?) and MRR (how close to the top was it?).
- Use a model to grade answers (an LLM judge), and check that the judge is fair.

## Assignment

### Day 1

1. Module 4: [01 Intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/01-intro.md), [02 Ground truth](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/02-ground-truth.md) and [03 Ground truth batch](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/03-ground-truth-batch.md).

### Day 2

2. [04 Search evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/04-search-evaluation.md) and [05 Search metrics](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/05-search-metrics.md).

### Day 3

3. [06 Search tuning](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/06-search-tuning.md).

### Day 4

4. [11 Evaluation intro](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/11-evaluation-intro.md) and [12 RAG answers](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/12-rag-answers.md).

### Day 5

5. [13 LLM as judge](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/13-llm-as-judge.md), [14 Agent evaluation](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/14-agent-evaluation.md) and [15 Next steps](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/15-next-steps.md).

### Days 6–7

6. Add to Ask MDN: measure Hit Rate@5 and MRR@5 (the @5 means you only look at the top 5 results) for keyword, vector and hybrid search on your 50 held-back questions. Use only your 20 practice questions while tuning.

## Knowledge check

Use these questions to check what you learned. If one stumps you, follow its link and review. You don't need to memorize anything.

- [What does MRR reward that Hit Rate doesn't?](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/05-search-metrics.md)
- [Why check an LLM judge against answers you graded yourself?](https://github.com/DataTalksClub/llm-zoomcamp/blob/main/04-evaluation/13-llm-as-judge.md)

## Additional resources

These are optional. Use them if you want to go further.

- [AI Evals FAQ by Hamel Husain and Shreya Shankar (a preview of Section 5)](https://hamel.dev/blog/posts/evals-faq/)

---

[← Previous: Data Ingestion and Orchestration](14-data-ingestion-and-orchestration.md) · [Course map](README.md) · [Next lesson: Monitoring →](16-monitoring.md)
