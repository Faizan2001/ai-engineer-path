/* AI Engineer Path: renders the course from data/course.js.
   Progress: saved to your Claude account when this runs as a Claude artifact,
   otherwise saved in this browser (localStorage). Navigation works either way.
   Widgets for "Try it first" live in assets/widgets.js. */
(function () {
  "use strict";
  var C = window.COURSE;
  var view = document.getElementById("view");
  if (!C || !C.sections) {
    view.textContent = "The course data didn't load. Make sure data/course.js sits next to index.html.";
    return;
  }
  var IN_CLAUDE = !!(window.claude && typeof window.claude.use === "function");
  var REPO = C.repo || "", SITE = C.site || "", COMMUNITY = C.community || "";

  // ---------- course model
  var LESSONS = [], BY = {}, SECTIONS = [], TOTAL_WEEKS = 1;
  C.sections.forEach(function (s, si) {
    var sec = { n: si + 1, title: s.title, weeks: s.weeks, description: s.description || "", shift: s.shift || null, slugs: [], weight: span(s.weeks) };
    (String(s.weeks).match(/\d+/g) || []).forEach(function (w) { TOTAL_WEEKS = Math.max(TOTAL_WEEKS, +w); });
    s.lessons.forEach(function (l) {
      var x = {};
      for (var k in l) if (Object.prototype.hasOwnProperty.call(l, k)) x[k] = l[k];
      x.section = sec; x.i = LESSONS.length; x.n = LESSONS.length + 1;
      x.file = (x.n < 10 ? "0" : "") + x.n + "-" + x.slug + ".md";
      LESSONS.push(x); BY[x.slug] = x; sec.slugs.push(x.slug);
    });
    SECTIONS.push(sec);
  });
  function span(w) { var m = String(w).match(/\d+/g) || []; return m.length >= 2 ? (+m[m.length - 1]) - (+m[0]) + 1 : 1; }
  function fullTitle(l) { return (l.kind === "project" ? "Project: " : "") + l.title; }

  // ---------- inline formatting: escape first, then `code`, **bold**, [label](https://... or #slug)
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(text) {
    var s = esc(text);
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\[([^\]]+)\]\(((?:https:\/\/|#)[^)\s]+)\)/g, function (m, label, url) {
      return url.charAt(0) === "#" ? '<a href="' + url + '">' + label + "</a>"
        : '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + label + "</a>";
    });
    return s;
  }
  function href(url) {
    return url.charAt(0) === "#" ? ' href="' + esc(url) + '"' : ' href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"';
  }
  function ext(url, label, cls) {
    return '<a' + (cls ? ' class="' + cls + '"' : "") + ' href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + label + "</a>";
  }

  // ---------- progress storage (synced when signed in to Claude)
  var KEY = "ai-engineer-path:progress:v1";
  var state = { done: new Set(), days: {}, sessions: [], target: 6 };
  var mode = "local", localOk = true, account = null, saving = false, pending = false, migrated = false;
  function record() {
    var days = {};
    Object.keys(state.days).forEach(function (k) { if (BY[k] && state.days[k].length) days[k] = state.days[k].slice().sort(function (a, b) { return a - b; }); });
    return { v: 1, done: Array.from(state.done).filter(function (s) { return BY[s]; }), last: "", days: days, sessions: state.sessions.slice(-500), target: state.target };
  }
  function apply(d) {
    if (!d || d.v !== 1) return;
    state.done = new Set((Array.isArray(d.done) ? d.done : []).filter(function (s) { return BY[s]; }));
    state.days = {};
    if (d.days && typeof d.days === "object") Object.keys(d.days).forEach(function (k) {
      if (BY[k] && Array.isArray(d.days[k])) state.days[k] = d.days[k].filter(function (i) { return typeof i === "number" && i >= 0 && i < (BY[k].assignment || []).length; });
    });
    state.sessions = Array.isArray(d.sessions) ? d.sessions.filter(function (x) { return /^\d{4}-\d{2}-\d{2}$/.test(x); }) : [];
    state.target = d.target >= 3 && d.target <= 6 ? Math.round(d.target) : 6;
  }
  function loadLocal() { try { var raw = localStorage.getItem(KEY); if (raw) apply(JSON.parse(raw)); } catch (e) { localOk = false; } }
  function saveLocal() { try { localStorage.setItem(KEY, JSON.stringify(record())); localOk = true; } catch (e) { localOk = false; } }
  function save() {
    saveLocal();
    if (!account) { chip(); return; }
    if (saving) { pending = true; return; }
    saving = true;
    account.ref.set(record())
      .catch(function () { account = null; mode = "local"; })
      .then(function () { saving = false; chip(); if (pending) { pending = false; save(); } });
  }
  function chip() {
    var el = document.getElementById("save-chip");
    if (!el) return;
    if (mode === "account") { el.textContent = "Saved to your account"; el.className = "chip acct"; }
    else if (localOk) { el.textContent = "Saved in this browser"; el.className = "chip"; }
    else { el.textContent = "Progress can't be saved here"; el.className = "chip"; }
  }
  function connectAccount() {
    if (!IN_CLAUDE) return;
    Promise.all([window.claude.use("user"), window.claude.use("db")]).then(function (r) {
      var user = r[0], db = r[1];
      if (!user || !db) return null;
      return user.id().then(function (uid) {
        if (!uid) return;
        account = { ref: db.doc("data/users/" + uid + "/progress") };
        account.ref.onSnapshot(function (snap) {
          mode = "account";
          if (snap.exists) {
            if (!snap.metadata.hasPendingWrites) {
              var before = JSON.stringify(record());
              apply(snap.data()); saveLocal();
              if (JSON.stringify(record()) !== before) render(false);
            }
          } else if (!migrated && (state.done.size || state.sessions.length)) {
            migrated = true; save();
          }
          chip();
        }, function () { account = null; mode = "local"; chip(); });
      });
    }).catch(function () { account = null; mode = "local"; chip(); });
  }

  // ---------- time away (this browser only; a phone and a laptop each keep their own)
  var VISIT_KEY = "ai-engineer-path:last-visit";
  var awayDays = 0, welcomeDismissed = false;
  function readVisit() {
    var now = Date.now(), prev = 0;
    try { prev = +localStorage.getItem(VISIT_KEY) || 0; localStorage.setItem(VISIT_KEY, String(now)); } catch (e) {}
    if (prev && now > prev) awayDays = Math.floor((now - prev) / 86400000);
  }
  function touchVisit() { try { localStorage.setItem(VISIT_KEY, String(Date.now())); } catch (e) {} }

  // ---------- light/dark toggle (standalone site only; inside Claude the app picks the theme)
  var THEME_KEY = "ai-engineer-path:theme";
  function setupTheme() {
    var btn = document.getElementById("theme-btn");
    if (!btn || IN_CLAUDE) return;
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (saved === "light" || saved === "dark") document.documentElement.setAttribute("data-theme", saved);
    function current() {
      var t = document.documentElement.getAttribute("data-theme");
      if (t === "light" || t === "dark") return t;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function label() {
      var next = current() === "dark" ? "light" : "dark";
      btn.textContent = next === "dark" ? "Dark mode" : "Light mode";
      btn.setAttribute("aria-label", "Switch to " + next + " mode");
    }
    btn.hidden = false;
    label();
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      label();
    });
  }

  // ---------- site links in the top bar and footer
  function setupLinks() {
    [["nav-github", REPO], ["foot-github", REPO], ["nav-community", COMMUNITY], ["foot-community", COMMUNITY],
     ["foot-issue", REPO ? REPO + "/issues/new" : ""]].forEach(function (p) {
      var el = document.getElementById(p[0]);
      if (!el) return;
      if (p[1]) el.setAttribute("href", p[1]); else el.hidden = true;
    });
  }

  // ---------- shared bits
  var CHECK_SVG = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ICON_PATHS = { left: '<path d="M13 8H3M7 4L3 8l4 4"/>', right: '<path d="M3 8h10M9 4l4 4-4 4"/>', check: '<path d="M3 8.5l3 3 7-7"/>',
    play: '<path d="M5 3.5v9l7-4.5z" fill="currentColor"/>' };
  function icon(name) {
    return '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + ICON_PATHS[name] + "</svg>";
  }
  function updateTopProgress() {
    var n = state.done.size, pct = Math.round(100 * n / LESSONS.length);
    document.getElementById("prog-text").textContent = n + " of " + LESSONS.length + " done";
    document.getElementById("prog-fill").style.width = pct + "%";
    return pct;
  }
  function resumeTarget() {
    for (var i = 0; i < LESSONS.length; i++) if (!state.done.has(LESSONS[i].slug)) return LESSONS[i];
    return null;
  }
  function lastFinished() {
    for (var i = LESSONS.length - 1; i >= 0; i--) if (state.done.has(LESSONS[i].slug)) return LESSONS[i];
    return null;
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function isoDay(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function logSession() {
    var t = isoDay(new Date());
    if (state.sessions.indexOf(t) < 0) { state.sessions.push(t); state.sessions.sort(); }
  }
  var WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  function weekCount() {
    var now = new Date(), start = Math.max(0, WEEKDAYS.indexOf(String(C.week_starts || "monday").toLowerCase()));
    var off = (now.getDay() - start + 7) % 7, ws = new Date(now.getFullYear(), now.getMonth(), now.getDate() - off);
    var from = isoDay(ws);
    return state.sessions.filter(function (x) { return x >= from; }).length;
  }
  function dayLabel(g) { return String(g.day || "").split(" · ")[0]; }
  function units(g) {
    var m = String(g.day || "").match(/^(Days?|Weeks?)\s+(\d+)(?:[–-](\d+))?/);
    if (!m) return 1;
    var n = m[3] ? (+m[3]) - (+m[2]) + 1 : 1;
    return /^Week/.test(m[1]) ? n * 6 : n;
  }
  function fromTime(t) {
    var m = String(t || "").match(/(\d+(?:\.\d+)?)\s*(min|hour|week)/);
    if (!m) return 1;
    var x = +m[1];
    return m[2] === "week" ? Math.round(x * 6) : m[2] === "hour" ? Math.max(1, Math.round(x / 1.5)) : 1;
  }
  function daysOf(slug) { return state.days[slug] || []; }
  function remainingSessions() {
    var n = 0;
    LESSONS.forEach(function (l) {
      if (state.done.has(l.slug)) return;
      var groups = l.assignment || [], ticked = daysOf(l.slug);
      if (!groups.length || !groups[0].day) { n += fromTime(l.time); return; }
      groups.forEach(function (g, i) { if (ticked.indexOf(i) < 0) n += units(g); });
    });
    return n;
  }
  function finishDate() {
    var weeks = Math.ceil(remainingSessions() / state.target) + 2;  // 2 weeks of breathing room, as in the 34-week plan
    var d = new Date(); d.setDate(d.getDate() + weeks * 7);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  function firstOpenDay(l) {
    var groups = l.assignment || [], ticked = daysOf(l.slug);
    if (!groups.length || !groups[0].day || !ticked.length) return -1;
    for (var i = 0; i < groups.length; i++) if (ticked.indexOf(i) < 0) return i;
    return -1;
  }
  function ul(items, cls) {
    if (!items || !items.length) return "";
    return "<ul" + (cls ? ' class="' + cls + '"' : "") + ">" + items.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
  }
  function recallList(l) {
    return '<ol class="recall-q" type="a">' + l.recall.map(function (r) {
      return "<li>" + fmt(r.q) + '<details class="peek"><summary>Where to check</summary><a' + href(r.link) + ">" +
        (r.link.charAt(0) === "#" ? "Review: " + esc(fullTitle(BY[r.link.slice(1)] || { title: "the course page", kind: "" })) : "Open the source") + "</a></details></li>";
    }).join("") + "</ol>";
  }

  // ---------- welcome back (shown after 3+ days away)
  function welcomeCard(compact) {
    if (welcomeDismissed || awayDays < 3 || (!state.done.size && !Object.keys(state.days).length)) return "";
    var lf = lastFinished(), t = resumeTarget();
    var long = awayDays >= 14;
    var spaced = { recall: [] };
    if (long) LESSONS.filter(function (x) { return state.done.has(x.slug) && x.recall && x.recall.length; }).slice(-3).forEach(function (x) { spaced.recall.push(x.recall[0]); });
    var steps = long ? [
      "Reread the last entry in your log, and the note on why this matters to you. 3 minutes.",
      "Check your setup still works: run <code>uv sync</code>, check your API key and credit, and run your last project's tests. 10 minutes.",
      spaced.recall.length ? "From memory, answer these from your last few lessons. 5 minutes." + recallList(spaced) : "",
      t ? 'Then redo the last Day you finished, or start the smallest next step in <a href="#' + t.slug + '">' + esc(fullTitle(t)) + "</a>." : ""
    ].filter(Boolean) : [
      "Reread the last entry in your log. 2 minutes.",
      lf && lf.recall && lf.recall.length ? "From memory, answer these from <a href=\"#" + lf.slug + "\">" + esc(fullTitle(lf)) + "</a>. 5 minutes." + recallList(lf) : "",
      t ? 'Then do the smallest next step in <a href="#' + t.slug + '">' + esc(fullTitle(t)) + "</a>. One step is enough." : ""
    ].filter(Boolean);
    return '<section class="card welcome' + (compact ? " compact" : "") + '" aria-label="Welcome back"><div class="welcome-head"><h2>Welcome back. It\'s been ' + awayDays + " days.</h2>" +
      '<button type="button" class="btn small" data-action="dismiss-welcome">Got it</button></div>' +
      (compact ? '<p>Warm up first: <a href="#home">see the 10-minute restart on the course page</a>.</p>'
        : "<p>No guilt, no catching up. Restart small:</p><ol>" + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>") + "</section>";
  }

  // ---------- "what you can do now" (only lessons with an unlocks line count)
  function powersCard() {
    var withU = LESSONS.filter(function (l) { return l.unlocks; });
    if (!withU.length) return "";
    var got = withU.filter(function (l) { return state.done.has(l.slug); });
    var next = withU.filter(function (l) { return !state.done.has(l.slug); })[0];
    var recent = got.slice(-3).reverse();
    var body = got.length
      ? '<ul class="powers">' + recent.map(function (l) { return '<li><a href="#' + l.slug + '">' + esc(l.title) + "</a>: " + fmt(l.unlocks) + "</li>"; }).join("") + "</ul>" +
        (got.length > 3 ? '<details class="more-powers"><summary>All ' + got.length + " so far</summary>" +
          ul(got.slice(0, -3).reverse().map(function (l) { return '<a href="#' + l.slug + '">' + esc(l.title) + "</a>: " + fmt(l.unlocks); })) + "</details>" : "")
      : '<p class="lead-line">Nothing yet. Every lesson you finish adds a new thing you can do to this list.</p>';
    return '<section class="card powers-card"><div class="section-top"><h2>What you can do now</h2><span class="count">' + got.length + " of " + withU.length + "</span></div>" + body +
      (next ? '<p class="next-power"><strong>Next up</strong>, after <a href="#' + next.slug + '">' + esc(fullTitle(next)) + "</a>: " + fmt(next.unlocks) + "</p>" : "") + "</section>";
  }

  // ---------- this week: a target, never a streak
  var quickOpen = false, quickDone = false;
  function weekCard() {
    var n = weekCount(), T = state.target, dots = "";
    for (var i = 0; i < Math.max(T, n); i++) dots += '<span class="dot' + (i < n ? " on" : "") + (i >= T ? " bonus" : "") + '"></span>';
    var opts = [3, 4, 5, 6].map(function (x) { return '<option value="' + x + '"' + (x === T ? " selected" : "") + ">" + x + " sessions</option>"; }).join("");
    var lf = lastFinished(), src = lf && lf.recall && lf.recall.length ? lf : (resumeTarget() || LESSONS[0]);
    var one = src.recall && src.recall.length ? { recall: [src.recall[0]] } : null;
    return '<section class="card week-card"><div class="section-top"><h2>This week</h2><span class="count">' + n + " of " + T + " sessions</span></div>" +
      '<div class="dots" role="img" aria-label="' + n + " of " + T + ' sessions this week">' + dots + "</div>" +
      "<p>" + (n >= T ? "Target reached. Anything more is a bonus." : "Every session counts, even a short one.") +
      " At " + T + " sessions a week, with some breathing room, you'd finish around <strong>" + finishDate() + "</strong>.</p>" +
      '<div class="week-controls"><label for="target-select">Weekly target</label><select id="target-select">' + opts + "</select>" +
      '<button type="button" class="btn small" data-action="quick" aria-expanded="' + quickOpen + '">Low on energy? Do 15 minutes</button></div>' +
      '<div class="quick"' + (quickOpen ? "" : " hidden") + "><ol><li>Reread your last log entry.</li>" +
      (one ? "<li>Answer one question from memory:" + recallList(one) + "</li>" : "") +
      "<li>Write the smallest next step for your next session in your log.</li></ol>" +
      (quickDone ? '<p class="quick-done" role="status">Logged. That counts as a session.</p>' : '<button type="button" class="w-btn" data-action="quick-done">I did my 15 minutes</button>') + "</div></section>";
  }

  // ---------- course page
  function renderHome() {
    view.removeAttribute("data-sec");
    var pct = updateTopProgress(), t = resumeTarget();
    var started = state.done.size > 0 || Object.keys(state.days).length > 0;
    var R = 64, CIRC = 2 * Math.PI * R;
    var od = t ? firstOpenDay(t) : -1;
    var cta = t
      ? '<a class="btn gold" href="#' + t.slug + '"' + (od >= 0 ? ' data-resume-day="' + od + '"' : "") + ">" + (started ? "Continue: " : "Start the path: ") + esc(fullTitle(t)) +
        (od >= 0 ? ", " + esc(dayLabel(t.assignment[od])) : "") + "</a>"
      : '<span class="btn is-done">Path complete. Plan your Campus Assistant next.</span>';
    var curSec = t ? t.section.n : 0;
    var timeline = SECTIONS.map(function (s) {
      return '<div data-sec="' + s.n + '" class="' + (s.n === curSec ? "cur" : "") + '" style="flex:' + s.weight + '" title="' + esc(s.title + ", " + s.weeks) + '"><span>' + esc(s.title) + "</span></div>";
    }).join("");
    var marks = [1, Math.round(TOTAL_WEEKS / 3), Math.round(2 * TOTAL_WEEKS / 3), TOTAL_WEEKS];
    var sections = SECTIONS.map(function (s) {
      var doneN = s.slugs.filter(function (x) { return state.done.has(x); }).length;
      var rows = s.slugs.map(function (slug) {
        var l = BY[slug], on = state.done.has(slug), cur = t && t.slug === slug;
        return '<li><a href="#' + slug + '"' + (cur ? ' class="is-next" aria-current="step"' : "") + '><span class="check' + (on ? " on" : "") + '" role="img" aria-label="' + (on ? "Completed" : "Not completed") + '">' + CHECK_SVG +
          '</span><span class="l-title">' + (l.kind === "project" ? '<span class="p">Project: </span>' : "") + esc(l.title) + (cur ? ' <span class="you-are-here">You are here</span>' : "") + (l.kind === "project" && on ? ' <span class="shipped">Shipped</span>' : "") +
          '</span><span class="l-time">' + esc(l.time) + "</span></a></li>";
      }).join("");
      return '<section class="card section-card" data-sec="' + s.n + '"><div class="section-head"><div class="section-top"><h2>' + esc(s.title) + '</h2><span class="count">' + doneN + " / " + s.slugs.length + " complete</span></div>" +
        '<p class="sec-meta">Section ' + s.n + ", " + esc(String(s.weeks).replace(/^W/, "w")) + "</p><p>" + fmt(s.description) + "</p>" +
        (s.shift ? '<dl class="shift"><div><dt>Before</dt><dd>' + fmt(s.shift.before) + "</dd></div><div><dt>After</dt><dd>" + fmt(s.shift.after) + "</dd></div></dl>" : "") +
        '</div><ol class="lesson-list">' + rows + "</ol></section>";
    }).join("");
    view.innerHTML =
      '<div class="hero-band"><div class="wrap hero"><div class="hero-text"><h1>' + esc(C.title) + '</h1><p class="lede">' + fmt(C.tagline) + "</p>" +
      '<p class="hero-meta">A learning path of ' + esc(C.duration || "about " + TOTAL_WEEKS + " weeks") + ", at about 9 hours a week.</p>" +
      '<div class="hero-actions">' + cta +
      '<button type="button" class="btn" data-action="how">How it works</button></div>' +
      '<p class="resume-note">' + state.done.size + " of " + LESSONS.length + " lessons complete</p></div>" +
      '<div class="ring" role="img" aria-label="' + pct + '% complete"><svg viewBox="0 0 150 150"><circle class="track" cx="75" cy="75" r="' + R + '"/>' +
      '<circle class="fill" cx="75" cy="75" r="' + R + '" stroke-dasharray="' + CIRC.toFixed(1) + '" stroke-dashoffset="' + (CIRC * (1 - pct / 100)).toFixed(1) + '"/></svg>' +
      '<div class="ring-label"><strong>' + pct + "%</strong><span>complete</span></div></div></div></div>" +
      '<div class="wrap page">' + welcomeCard(false) + weekCard() + powersCard() +
      '<section class="card" id="how"><h2>How this path works</h2>' + C.intro.map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") +
      '<ul class="how">' + C.how.map(function (p) { return "<li>" + fmt(p) + "</li>"; }).join("") + "</ul>" +
      '<div class="timeline" role="img" aria-label="Timeline of the 6 sections across ' + TOTAL_WEEKS + ' weeks">' + timeline + '</div><div class="tl-key">' +
      marks.map(function (w) { return "<span>Week " + w + "</span>"; }).join("") + "</div></section>" +
      sections + "</div>";
  }

  // ---------- lesson page
  function lessonLinks(l) {
    if (!REPO) return "";
    var page = SITE ? SITE + "#" + l.slug : "";
    var where = "Lesson " + l.n + ": " + fullTitle(l) + (page ? " (" + page + ")" : "");
    var broken = REPO + "/issues/new?title=" + encodeURIComponent("Broken link: " + fullTitle(l)) +
      "&body=" + encodeURIComponent(where + "\n\nWhich link is broken, and where does it go now?\n");
    var other = REPO + "/issues/new?title=" + encodeURIComponent("Suggestion: " + fullTitle(l)) +
      "&body=" + encodeURIComponent(where + "\n\nWhat could be better?\n");
    return '<nav class="lesson-links" aria-label="Lesson links">' +
      ext(REPO + "/edit/main/data/course.js", "Improve on GitHub") +
      ext(broken, "Report a broken link") +
      ext(other, "Report another issue or suggestion") +
      ext(REPO + "/commits/main/data/course.js", "See lesson changelog") +
      ext(REPO + "/blob/main/markdown/" + l.file, "View as Markdown") + (C.checked ? '<span class="checked-date">Links checked ' + esc(C.checked) + "</span>" : "") + "</nav>";
  }
  function watchItem(v) {
    return '<li class="watch-item"><a' + href(v.url) + ">" + icon("play") + "<span>" + esc(v.title) + "</span></a>" +
      '<span class="watch-meta">' + esc([v.channel, v.length].filter(Boolean).join(", ")) + "</span>" + (v.why ? '<span class="watch-why">' + fmt(v.why) + "</span>" : "") + "</li>";
  }
  var celebrate = "";
  function renderLesson(l) {
    updateTopProgress();
    view.setAttribute("data-sec", l.section.n);
    var on = state.done.has(l.slug), isP = l.kind === "project";
    var prev = LESSONS[l.i - 1], next = LESSONS[l.i + 1];
    var parts = [], toc = [];
    function add(id, title, body, cls) { parts.push('<section id="sec-' + id + '"' + (cls ? ' class="' + cls + '"' : "") + "><h2>" + title + "</h2>" + body + "</section>"); toc.push([id, title]); }

    var introHtml = (l.hook ? '<p class="hook">' + fmt(l.hook) + "</p>" : "") + (l.intro || []).map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("");
    if (l.unlocks || l.edge) {
      introHtml += '<div class="why-box">' +
        (l.unlocks ? "<p><strong>After this, you can</strong> " + fmt(l.unlocks) + "</p>" : "") +
        (l.edge ? "<p><strong>The skill that lasts:</strong> " + fmt(l.edge) + "</p>" : "") + "</div>";
    }
    add("introduction", "Introduction", introHtml);
    if (l.overview && l.overview.length) add("overview", "Lesson overview", '<p class="lead-line">By the end of this lesson, you should be able to:</p>' + ul(l.overview.map(fmt)));
    if (l.before && l.before.length) add("before", "Before you start", ul(l.before.map(fmt)));
    if (l.predict || l.widget) {
      var guess = readGuess(l.slug), locked = guess !== null;
      add("try", "Try it first", '<div class="try-box">' +
        '<p class="lead-line">Two minutes, before the reading. Guess first: a wrong guess makes the right answer stick.</p>' +
        (l.predict ? '<p class="predict"><strong>Predict:</strong> ' + fmt(l.predict) + "</p>" +
          '<div class="guess"' + (locked ? " hidden" : "") + '><label for="guess-input">Your guess</label><textarea id="guess-input" rows="2"></textarea>' +
          '<div class="guess-actions"><button type="button" class="w-btn" data-action="lock-guess">Lock in my guess</button>' +
          '<button type="button" class="linkish" data-action="skip-guess">Skip guessing</button></div></div>' +
          '<p class="guess-locked"' + (locked ? "" : " hidden") + '><strong>Your guess:</strong> <span class="guess-text">' + esc(guess || "") + "</span>" +
          (l.widget ? "" : " Check it against the reading, and again at Recall.") + "</p>" : "") +
        (l.widget ? '<div class="widget-wrap"' + (l.predict && !locked ? " hidden" : "") + '><div class="widget" data-widget="' + esc(l.widget) + '"><p class="lead-line">Loading the widget…</p></div></div>' : "") +
        '<button type="button" class="linkish skip-link" data-scroll="sec-assignment">Skip to the assignment</button></div>', "try");
    }
    var k = 1;
    var ticked = daysOf(l.slug);
    var assign = (l.assignment || []).map(function (g, gi) {
      var on = ticked.indexOf(gi) >= 0;
      var head = g.day ? '<div class="day-head" id="day-' + gi + '"><h3 id="dayh-' + gi + '">' + esc(g.day) + "</h3>" +
        '<label class="day-check"><input type="checkbox" data-day="' + gi + '"' + (on ? " checked" : "") + ' aria-describedby="dayh-' + gi + '"> Done</label></div>' : "";
      var html = head + '<ol start="' + k + '">' + g.steps.map(function (s) { return "<li>" + fmt(s) + "</li>"; }).join("") + "</ol>";
      k += g.steps.length;
      return html;
    }).join("");
    if (l.watch && l.watch.length) {
      assign = '<div class="watch"><h3>Prefer watching?</h3><ul>' + l.watch.map(watchItem).join("") + "</ul></div>" + assign;
    }
    if (l.recall && l.recall.length) {
      assign += "<h3>Recall · 10 min</h3>" + '<ol start="' + k + '"><li>Close this page. In your log, answer from memory, then check:' + recallList(l) +
        "</li><li>Write one more line: how will this lesson help your Campus Assistant?</li></ol>";
    }
    add("assignment", "Assignment", '<div class="panel">' + assign + "</div>");
    if (l.done && l.done.length) add("done", "You're done when", ul(l.done.map(fmt), "done-list"));
    if (l.extra_credit && l.extra_credit.length) add("extra-credit", "Extra credit", ul(l.extra_credit.map(fmt)));
    if (l.extra && l.extra.length) add("extra", l.slug === "whats-next" ? "Optional deep dives" : "Additional resources",
      '<p class="lead-line">These are optional. Use them if you want to go further.</p>' + ul(l.extra.map(fmt)));

    var tocButtons = toc.map(function (t) { return '<li><button type="button" data-scroll="sec-' + t[0] + '">' + esc(t[1]) + "</button></li>"; }).join("");
    var prevBtn = prev
      ? '<a class="btn nav-btn prev" href="#' + prev.slug + '"><span class="dir">' + icon("left") + 'Previous lesson</span><span class="ttl">' + esc(fullTitle(prev)) + "</span></a>"
      : '<a class="btn nav-btn prev" href="#home"><span class="dir">' + icon("left") + 'Course page</span><span class="ttl">Back to the start</span></a>';
    var nextBtn = next
      ? '<a class="btn dark nav-btn next" href="#' + next.slug + '"><span class="dir">Next lesson' + icon("right") + '</span><span class="ttl">' + esc(fullTitle(next)) + "</span></a>"
      : '<a class="btn dark nav-btn next" href="#home"><span class="dir">Finish' + icon("right") + '</span><span class="ttl">Back to the course page</span></a>';
    var completeBtn = '<button type="button" id="complete-btn" class="btn complete ' + (on ? "is-done" : "gold") + '">' +
      (on ? '<span class="dir">' + icon("check") + "Completed</span>" : "Mark complete") + '<span class="sub">' + (on ? "Click to undo" : "When you've finished") + "</span></button>";
    var party = "";
    if (celebrate === l.slug && on) {
      party = '<div class="celebrate" role="status"><div class="seal" aria-hidden="true">' + CHECK_SVG + "</div><div><p class=\"celebrate-title\">Project shipped.</p>" +
        (l.unlocks ? "<p>You can now " + fmt(l.unlocks.charAt(0).toLowerCase() + l.unlocks.slice(1)) + "</p>" : "") +
        "<p>Write today's win in your log and take a screenshot. Future you will want proof of how far you came.</p></div></div>";
    }
    celebrate = "";
    view.innerHTML =
      '<div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="#home">Course</a> › <span class="sec-name">Section ' + l.section.n + ": " + esc(l.section.title) + "</span></nav>" +
      welcomeCard(true) +
      '<div class="lesson-head"><h1 tabindex="-1">' + (isP ? '<span class="badge">Project</span>' : "") + esc(l.title) + "</h1>" +
      '<p class="lesson-meta">Lesson ' + l.n + " of " + LESSONS.length + ", " + esc(l.time) + "</p>" + pickUp(l) + "</div>" +
      '<div class="lesson-layout"><div class="content">' +
      '<details class="toc-mobile"><summary>Lesson contents</summary><ul>' + tocButtons + "</ul></details>" +
      parts.join("") +
      '<div class="lesson-actions">' + party + '<p class="all-days" role="status"' + (allDays(l) && !on ? "" : " hidden") + '>All Days ticked. Finish the Recall step, then mark this lesson complete.</p>' +
      '<div class="action-row">' + prevBtn + completeBtn + nextBtn + "</div>" +
      '<div class="action-row center"><a class="btn view-course" href="#home">View course</a></div>' +
      lessonLinks(l) + "</div></div>" +
      '<aside class="toc" aria-label="Lesson contents"><span class="toc-title">Lesson contents</span><ul>' + tocButtons + "</ul></aside></div></div>";
    mountWidgets();
  }
  function allDays(l) {
    var groups = l.assignment || [];
    return groups.length > 0 && !!groups[0].day && daysOf(l.slug).length === groups.length;
  }
  function pickUp(l) {
    var i = firstOpenDay(l);
    if (i < 0 || state.done.has(l.slug)) return "";
    return '<p class="pick-up">Pick up at <button type="button" class="linkish" data-scroll="day-' + i + '">' + esc(dayLabel(l.assignment[i])) + "</button></p>";
  }
  var GUESS_KEY = "ai-engineer-path:guess:";
  function readGuess(slug) { try { return localStorage.getItem(GUESS_KEY + slug); } catch (e) { return null; } }
  function saveGuess(slug, text) { try { localStorage.setItem(GUESS_KEY + slug, text); } catch (e) {} }
  function mountWidgets() {
    var reg = window.AEP_WIDGETS || {};
    Array.prototype.forEach.call(view.querySelectorAll("[data-widget]"), function (el) {
      var fn = reg[el.getAttribute("data-widget")];
      if (typeof fn !== "function") { el.innerHTML = '<p class="lead-line">This widget didn\'t load. Skip it and carry on with the assignment.</p>'; return; }
      try { el.innerHTML = ""; fn(el); } catch (e) { el.innerHTML = '<p class="lead-line">This widget hit a snag. Skip it and carry on with the assignment.</p>'; }
    });
  }

  // ---------- routing and events
  var wantHow = false, wantDay = -1;
  function render() {
    var l = BY[(location.hash || "").replace(/^#/, "")];
    if (l) renderLesson(l); else renderHome();
    chip();
  }
  function scrollToId(id) {
    var target = document.getElementById(id);
    if (!target) return;
    var smooth = window.matchMedia && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  }
  function route() {
    touchVisit();
    render();
    if (wantHow) { wantHow = false; scrollToId("how"); return; }
    if (wantDay >= 0) { var d = wantDay; wantDay = -1; var el = document.getElementById("day-" + d); if (el) { el.scrollIntoView({ block: "start" }); var b = el.querySelector("input"); if (b) b.focus({ preventScroll: true }); return; } }
    window.scrollTo(0, 0);
    var h = view.querySelector(".lesson-head h1");
    if (h) { try { h.focus({ preventScroll: true }); } catch (e) {} }
  }
  document.addEventListener("click", function (e) {
    var rd = e.target.closest ? e.target.closest("[data-resume-day]") : null;
    if (rd) { wantDay = +rd.getAttribute("data-resume-day"); return; }
    var t = e.target.closest ? e.target.closest("[data-scroll], [data-action], #complete-btn") : null;
    if (!t) return;
    if (t.id === "complete-btn") {
      var l = BY[(location.hash || "").replace(/^#/, "")];
      if (!l) return;
      if (state.done.has(l.slug)) state.done.delete(l.slug);
      else { state.done.add(l.slug); logSession(); if (l.kind === "project") celebrate = l.slug; }
      save(); render();
      var btn = document.getElementById("complete-btn"); if (btn) btn.focus();
      return;
    }
    var act = t.getAttribute("data-action");
    if (act === "skip-main") { var h1 = view.querySelector("h1"); if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus(); } return; }
    if (act === "dismiss-welcome") { welcomeDismissed = true; render(); return; }
    if (act === "quick") { quickOpen = !quickOpen; render(); var qb = view.querySelector('[data-action="quick"]'); if (qb) qb.focus(); return; }
    if (act === "quick-done") { logSession(); quickDone = true; save(); render(); var qd = view.querySelector(".quick-done"); if (qd) { qd.setAttribute("tabindex", "-1"); qd.focus(); } return; }
    if (act === "lock-guess" || act === "skip-guess") {
      var gl = BY[(location.hash || "").replace(/^#/, "")]; if (!gl) return;
      var box = view.querySelector(".try-box"), input = view.querySelector("#guess-input");
      var text = act === "lock-guess" ? (input && input.value.trim()) || "(no guess written)" : "";
      if (act === "lock-guess") saveGuess(gl.slug, text);
      var g = box.querySelector(".guess"); if (g) g.hidden = true;
      var lockedP = box.querySelector(".guess-locked");
      if (lockedP && act === "lock-guess") { lockedP.querySelector(".guess-text").textContent = text; lockedP.hidden = false; }
      var ww = box.querySelector(".widget-wrap"); if (ww) { ww.hidden = false; var first = ww.querySelector("select, input, button"); if (first) first.focus(); }
      return;
    }
    if (act === "how") {
      if (BY[(location.hash || "").replace(/^#/, "")]) { wantHow = true; location.hash = "#home"; }
      else scrollToId("how");
      return;
    }
    if (t.hasAttribute("data-scroll")) scrollToId(t.getAttribute("data-scroll"));
  });
  document.addEventListener("change", function (e) {
    if (e.target && e.target.matches && e.target.matches("input[data-day]")) {
      var dl = BY[(location.hash || "").replace(/^#/, "")];
      if (!dl) return;
      var gi = +e.target.getAttribute("data-day"), arr = (state.days[dl.slug] || []).filter(function (x) { return x !== gi; });
      if (e.target.checked) { arr.push(gi); logSession(); }
      state.days[dl.slug] = arr;
      save();
      var nudge = view.querySelector(".all-days"); if (nudge) nudge.hidden = !(allDays(dl) && !state.done.has(dl.slug));
      return;
    }
    if (e.target && e.target.id === "target-select") { state.target = +e.target.value; save(); render(); var ts = document.getElementById("target-select"); if (ts) ts.focus(); }
  });
  window.addEventListener("hashchange", route);

  setupTheme();
  setupLinks();
  loadLocal();
  readVisit();
  render();
  connectAccount();
})();
