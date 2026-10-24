# AI Engineer Path

A free, step-by-step course for becoming an AI engineer, set out like The Odin Project: short lessons, four projects, and a **Next lesson** button that always tells you what to do next. It takes about 30 weeks at 90 minutes a day.

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

Progress is saved per browser, so each visitor keeps their own. All links are relative, so it also works on any other static host (Netlify, Cloudflare Pages and so on).

## What's in this folder

| Path | What it is |
|---|---|
| `index.html` | The course page. Open this. |
| `assets/styles.css` | How the page looks. |
| `assets/app.js` | How the page works: lessons, buttons and saved progress. |
| `data/course.js` | **All the lesson content.** Edit this to change the course. |
| `markdown/` | Every lesson as a Markdown file, for reading on GitHub or in a notes app. |
| `tools/export_markdown.py` | Rebuilds `markdown/` from `data/course.js`. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## Changing the lessons

1. Open `data/course.js` in your editor and change any text. Inside text you can use `[label](https://link)`, `[label](#lesson-slug)` for another lesson, `**bold**` and `` `code` ``.
2. Save and refresh the page. No build step is needed.
3. If you also want the Markdown copies updated, run:

```bash
python3 tools/export_markdown.py
```

Keep each lesson's `slug` unique and don't rename slugs once you've started; saved progress is stored by slug.
