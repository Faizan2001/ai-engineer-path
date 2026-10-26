# AI Engineer Path

A free, step-by-step course for becoming an AI engineer, set out like The Odin Project: short lessons, four projects, and a **Next lesson** button that always tells you what to do next. Plan about 34 weeks at nine hours a week; allow 2–4 extra weeks for prerequisite repair or debugging.

Along the way you get small hands-on widgets (guess first, then try an idea for 2 minutes), true stories of AI going wrong, a "Before you read" note for hard outside material, a short Memory check at the end of every lesson, and a stage-aware "Welcome back" restart plan if you've been away. "Help me restart" is always available on the course page. On a phone, Previous, Mark complete and Next sit in a dock under your thumb.

Format inspired by The Odin Project; not affiliated. Lessons link to outside material owned by its authors.

## Open it on your computer

Double-click `index.html`. That's it.

Your progress (the lessons you mark complete) is saved in that browser. If a browser blocks it when opening local files, run a tiny local server from this folder instead:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Put it online with GitHub Pages (free)

1. Create a new GitHub repository and upload everything in this folder (including the hidden `.nojekyll` file).
2. In the repository, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then pick `main` and `/ (root)`, and click **Save**.
3. Wait a minute, then open the address GitHub shows you (usually `https://<your-username>.github.io/<repo-name>/`).

Progress is saved per browser, so each visitor keeps their own. Use "Save progress to a file" on the course page to move it to another device. All links are relative, so it also works on any other static host (Netlify, Cloudflare Pages and so on).

## What's in this folder

| Path | What it is |
|---|---|
| `index.html` | The course page. Open this. |
| `assets/styles.css` | How the page looks. |
| `assets/app.js` | How the page works: lessons, buttons, saved progress and the welcome-back panel. |
| `assets/widgets.js` | The 10 "Try it first" widgets: next-token sampler, embedding map, search scores, rank fusion, agent loop, lethal trifecta, row-level security, accept-retry-human, run it twice, and mark the marker. |
| `data/course.js` | **All the lesson content.** Edit this to change the course. |
| `markdown/` | Every lesson as a Markdown file, for reading on GitHub or in a notes app. |
| `tools/export_markdown.py` | Rebuilds `markdown/` from `data/course.js`. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## Changing the lessons

1. Open `data/course.js` in your editor and change any text. Inside text you can use `[label](https://link)`, `[label](#lesson-slug)` for another lesson, `**bold**` and `` `code` ``.
2. Save and refresh the page. No build step is needed. Before you publish, raise the `?v=` number on the four file links in `index.html`, so returning visitors get the new files instead of cached old ones.
3. If you also want the Markdown copies updated, run:

```bash
python3 tools/export_markdown.py
```

Keep each lesson's `slug` unique and don't rename slugs once you've started; saved progress is stored by slug.

### Optional lesson fields

| Field | Shows up as |
|---|---|
| `hook` | The big first line of the Introduction. |
| `unlocks`, `edge` | The "After this, you can…" and "The skill that lasts" box. `unlocks` also fills "What you have practised" on the course page. |
| `predict`, `widget` | The "Try it first" section. `widget` is an id from `assets/widgets.js`. |
| `watch` | "If you like to watch first" videos: a list of `{url, title, channel, length, why}`. |
| `recall` | The Memory check at the end of the Assignment: a list of `{q, link, answer?}`. Optional answer guidance is hidden until requested. |
| `bridge`, `picture` | "Before you read": plain-words intuition, a small glossary (`terms`) and a teacher's picture. |
| `story` | A collapsible true story: `{year, title, what, lesson, url}`. |
| `checkpoint` | "Before you start, check that…" at the top of a lesson, and in the welcome-back panel. |
| `showoff` | A project's "Show it off" section: `{pitch, demo, proves}`. |
| section `opener`, `shift` | A short story at the start of each section, and its before/after lines. |

## Curriculum review

The [27 October learning and coverage review](CURRICULUM-REVIEW.md) records what three independent reviewers found, the changes made, the sources behind them, and the limits of the course's claims. The final lesson includes a small new-domain exercise to check independent transfer.
