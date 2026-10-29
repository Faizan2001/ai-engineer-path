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
    var sec = { n: si + 1, title: s.title, weeks: s.weeks, description: s.description || "", shift: s.shift || null, slugs: [], weight: span(s.weeks), optional: !!s.optional };
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
  // Optional sections (electives) don't count toward the top progress bar or the finish date.
  var CORE = LESSONS.filter(function (l) { return !l.section.optional; });
  function coreNo(l) { return l.section.optional ? l.section.slugs.indexOf(l.slug) + 1 : CORE.indexOf(l) + 1; }
  function lessonOf(l) { return l.section.optional ? "Elective " + coreNo(l) + " of " + l.section.slugs.length : "Lesson " + coreNo(l) + " of " + CORE.length; }
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
  // From 8.2, progress lives under a new key and account document. A page still open on an older version keeps writing
  // the old ones; it can't show inserted lessons or Days 2+ of a split block, so its saves would drop that progress.
  // The old save is only read while no new one exists.
  var KEY = "ai-engineer-path:progress:v2", OLD_KEY = "ai-engineer-path:progress:v1";
  var state = { done: new Set(), ticks: {}, sessions: [], target: 6, since: "", keep: { done: [], ticks: {} } };
  var mode = "local", localOk = true, account = null, saving = false, pending = false, migrated = false;
  function record() {
    var ticks = {}, days = {};
    Object.keys(state.ticks).forEach(function (k) {
      if (!BY[k] || !state.ticks[k].length) return;
      ticks[k] = state.ticks[k].slice().sort();
      var full = daysOf(k); if (full.length) days[k] = full;
    });
    Object.keys(state.keep.ticks).forEach(function (k) { ticks[k] = (ticks[k] || []).concat(state.keep.ticks[k]).sort(); });
    return { v: 1, split: 1, done: Array.from(state.done).filter(function (s) { return BY[s]; }).concat(state.keep.done), last: "", ticks: ticks, days: days, sessions: state.sessions.slice(-500), target: state.target, since: state.since };
  }
  // Blocks marked "split" were one-tick "Week" blocks before 8.1. In a save written before then (no split marker),
  // that single tick meant the whole week was done, so it becomes every Day of the block.
  function expandSplit(d) {
    if (d.split) return;
    Object.keys(state.ticks).forEach(function (k) {
      (BY[k].assignment || []).forEach(function (g, gi) {
        if (!g.split || state.ticks[k].indexOf(gi + ".0") < 0) return;
        for (var j = 1; j < ticksIn(g); j++) if (state.ticks[k].indexOf(gi + "." + j) < 0) state.ticks[k].push(gi + "." + j);
      });
    });
  }
  function apply(d) {
    if (!d || d.v !== 1) return;
    // Unknown completion slugs and numeric ticks are kept and written back unchanged.
    var doneIn = (Array.isArray(d.done) ? d.done : []).filter(function (s) { return typeof s === "string"; });
    state.done = new Set(doneIn.filter(function (s) { return BY[s]; }));
    state.keep = { done: doneIn.filter(function (s) { return !BY[s]; }), ticks: {} };
    state.ticks = {};
    function ok(slug, id) {
      var m = /^(\d+)\.(\d+)$/.exec(id), g = m && (BY[slug].assignment || [])[+m[1]];
      return !!g && +m[2] < ticksIn(g);
    }
    if (d.ticks && typeof d.ticks === "object") Object.keys(d.ticks).forEach(function (k) {
      if (!Array.isArray(d.ticks[k])) return;
      var ids = d.ticks[k].filter(function (id) { return typeof id === "string" && /^\d+\.\d+$/.test(id); });
      if (BY[k]) state.ticks[k] = ids.filter(function (id) { return ok(k, id); });
      var other = BY[k] ? ids.filter(function (id) { return !ok(k, id); }) : ids;
      if (other.length) state.keep.ticks[k] = other;
    });
    else if (d.days && typeof d.days === "object") Object.keys(d.days).forEach(function (k) {   // older saves stored whole Day blocks
      if (!BY[k] || !Array.isArray(d.days[k])) return;
      state.ticks[k] = [];
      d.days[k].forEach(function (gi) { var g = (BY[k].assignment || [])[gi]; if (g) for (var j = 0; j < ticksIn(g); j++) state.ticks[k].push(gi + "." + j); });
    });
    expandSplit(d);
    state.sessions = Array.isArray(d.sessions) ? d.sessions.filter(function (x) { return /^\d{4}-\d{2}-\d{2}$/.test(x); }) : [];
    state.target = d.target >= 3 && d.target <= 6 ? Math.round(d.target) : 6;
    state.since = typeof d.since === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d.since) ? d.since : "";
  }
  // "since" marks a learner who started on 8.2 or later: lessons and Days added before that date are ordinary path for them.
  function loadLocal() {
    try {
      var raw = localStorage.getItem(KEY) || localStorage.getItem(OLD_KEY);
      if (raw) apply(JSON.parse(raw)); else state.since = isoDay(new Date());
    } catch (e) { localOk = false; }
  }
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
        var ref = db.doc("data/users/" + uid + "/progress-v2");
        // Saves go to the account only after the server has answered, so a new device can't overwrite it.
        // A snapshot from the local cache can say "missing" before the server does; a definitive one follows.
        function ready() { if (!account) { account = { ref: ref }; mode = "account"; } chip(); }
        ref.onSnapshot(function (snap) {
          if (snap.metadata.fromCache) return;
          if (snap.exists) {
            ready();
            if (!snap.metadata.hasPendingWrites) {
              var before = JSON.stringify(record());
              apply(snap.data()); saveLocal();
              if (JSON.stringify(record()) !== before) render(false);
            }
          } else if (!migrated) {
            migrated = true;   // first visit on 8.2 or later: carry the older account progress over once
            db.doc("data/users/" + uid + "/progress").get().then(function (old) {
              if (old.metadata.fromCache) { migrated = false; mode = "local"; chip(); return; }   // try again on the next visit
              if (old.exists) { apply(old.data()); saveLocal(); render(false); }
              ready();
              if (old.exists || state.done.size || state.sessions.length) save();
            }, function () { account = null; mode = "local"; chip(); });
          } else ready();
        }, function () { account = null; mode = "local"; chip(); });
      });
    }).catch(function () { account = null; mode = "local"; chip(); });
  }

  // ---------- time away (this browser only; a phone and a laptop each keep their own)
  var VISIT_KEY = "ai-engineer-path:last-visit";
  var awayDays = 0, welcomeDismissed = false, restartRequested = false;
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
    var n = CORE.filter(function (l) { return state.done.has(l.slug); }).length, pct = Math.round(100 * n / CORE.length);
    document.getElementById("prog-text").textContent = n + " of " + CORE.length + " done";
    document.getElementById("prog-fill").style.width = pct + "%";
    return pct;
  }
  // An added lesson behind an original lesson with saved completion or valid Day ticks is catch-up work.
  // Continue keeps them on their current lesson; the "New since you passed this point" card lists it instead.
  function isOld(x) { return !!state.since && x.added <= state.since; }
  function isBehind(l) {
    if (!l.added || state.done.has(l.slug) || isOld(l)) return false;
    for (var j = CORE.indexOf(l) + 1; j < CORE.length; j++) {
      var later = CORE[j];
      if (!later.added && (state.done.has(later.slug) || ticksOf(later.slug).length > 0)) return true;
    }
    return false;
  }
  function resumeTarget() {
    var first = null;
    for (var i = 0; i < CORE.length; i++) {
      if (state.done.has(CORE[i].slug)) continue;
      if (!isBehind(CORE[i])) return CORE[i];
      if (!first) first = CORE[i];
    }
    return first;
  }
  function lastFinished() {
    for (var i = CORE.length - 1; i >= 0; i--) if (state.done.has(CORE[i].slug)) return CORE[i];
    for (var j = LESSONS.length - 1; j >= 0; j--) if (state.done.has(LESSONS[j].slug)) return LESSONS[j];
    return null;
  }
  // Day groups marked "added" in a lesson the learner had already finished.
  function newDays(l) {
    if (!state.done.has(l.slug)) return [];
    return (l.assignment || []).map(function (g, gi) { return gi; }).filter(function (gi) { return l.assignment[gi].added && !isOld(l.assignment[gi]) && !groupDone(l, gi); });
  }
  function addedCard() {
    var items = [];
    CORE.forEach(function (l) {
      if (isBehind(l)) items.push('<a href="#' + l.slug + '">' + esc(fullTitle(l)) + "</a> (new lesson, " + esc(l.time) + ")");
      newDays(l).forEach(function (gi) {
        items.push('<a href="#' + l.slug + '" data-resume-day="' + gi + '">' + esc(l.title) + ": " + esc(l.assignment[gi].day) + "</a>");
      });
    });
    if (!items.length) return "";
    return '<section class="card welcome"><h2>New since you passed this point</h2><p>These were added to the path after the point you had already reached. Your saved progress is unchanged. Fit them in alongside your current lesson.</p>' + ul(items) + "</section>";
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
  // A "Days 8–11" block gets one tick per day; everything else gets one tick.
  function ticksIn(g) { var m = /^Days\s+(\d+)[–-](\d+)/.exec(String((g && g.day) || "")); return m ? (+m[2]) - (+m[1]) + 1 : 1; }
  function tickLabel(g, k) { var m = /^Days\s+(\d+)[–-](\d+)/.exec(String(g.day || "")); return m ? "Day " + ((+m[1]) + k) : dayLabel(g); }
  function ticksOf(slug) { return state.ticks[slug] || []; }
  function isTicked(slug, gi, k) { return ticksOf(slug).indexOf(gi + "." + k) >= 0; }
  function groupDone(l, gi) { for (var k = 0; k < ticksIn(l.assignment[gi]); k++) if (!isTicked(l.slug, gi, k)) return false; return true; }
  function daysOf(slug) { var l = BY[slug]; return l ? (l.assignment || []).map(function (g, i) { return i; }).filter(function (i) { return groupDone(l, i); }) : []; }
  function remainingSessions() {
    var n = 0;
    CORE.forEach(function (l) {
      if (state.done.has(l.slug)) { newDays(l).forEach(function (gi) { n += units(l.assignment[gi]); }); return; }
      var groups = l.assignment || [];
      if (!groups.length || !groups[0].day) { n += fromTime(l.time); return; }
      groups.forEach(function (g, i) { var per = units(g) / ticksIn(g); for (var k = 0; k < ticksIn(g); k++) if (!isTicked(l.slug, i, k)) n += per; });
    });
    return n;
  }
  function finishDate() {
    var weeks = Math.max(1, Math.round(remainingSessions() * 1.1 / state.target));  // one session in ten for debugging and catch-up, as in the course plan
    var d = new Date(); d.setDate(d.getDate() + weeks * 7);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  function firstOpenDay(l) {
    var groups = l.assignment || [];
    if (!groups.length || !groups[0].day || !ticksOf(l.slug).length) return null;
    for (var i = 0; i < groups.length; i++) for (var k = 0; k < ticksIn(groups[i]); k++) if (!isTicked(l.slug, i, k)) return { gi: i, k: k };
    return null;
  }
  function ul(items, cls) {
    if (!items || !items.length) return "";
    return "<ul" + (cls ? ' class="' + cls + '"' : "") + ">" + items.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
  }
  function recallList(l) {
    return '<ol class="recall-q" type="a">' + l.recall.map(function (r) {
      return "<li>" + fmt(r.q) + '<details class="peek"><summary>' + (r.answer ? "Check your answer" : "Where to check") + '</summary>' +
        (r.answer ? '<p><strong>Look for these ideas:</strong> ' + fmt(r.answer) + '</p><p>Different wording is fine. Correct anything missing, then retry without looking next session.</p>' : '') + '<a' + href(r.link) + '>' +
        (r.link.charAt(0) === "#" ? "Review: " + esc(fullTitle(BY[r.link.slice(1)] || { title: "the course page", kind: "" })) : "Open the source") + "</a></details></li>";
    }).join("") + "</ol>";
  }

  // ---------- welcome back (shown after 3+ days away)
  function welcomeCard(compact) {
    var hasProgress = state.done.size || Object.keys(state.ticks).some(function (k) { return state.ticks[k].length; });
    if (welcomeDismissed || (!restartRequested && (awayDays < 3 || !hasProgress))) return "";
    var lf = lastFinished(), t = resumeTarget(), long = awayDays >= 14;
    var review = long ? LESSONS.filter(function (x) { return state.done.has(x.slug) && x.recall && x.recall.length; }).slice(-3) : (lf && lf.recall ? [lf] : []);
    var spaced = { recall: review.map(function (x) { return x.recall[0]; }) };
    var steps = ["Open your log. Find the last result you checked and your next small action. If you left no note, look at your last changed file. 2 minutes."];
    if (long && state.done.has("setting-up-your-tools")) {
      var setup = "In the project you last used, run <code>uv sync</code> with its existing lockfile. Check your API key and credit before one small test call.";
      if (state.done.has("postgres-search-and-access-rules")) setup += " Start the Postgres container you used for that project.";
      if (state.done.has("structured-output-and-errors")) setup += " Run its existing tests.";
      steps.push(setup + " Allow 10 minutes; if setup is broken, make fixing that today's task. No new tools needed.");
    }
    if (spaced.recall.length) steps.push("Try these from memory, then use the check links. If one is fuzzy, review just that part and explain it again in your own words. 5 minutes." + recallList(spaced));
    if (t && t.checkpoint) steps.push("Check your starting point: " + fmt(t.checkpoint));
    if (t) steps.push('Open <a href="#' + t.slug + '">' + esc(fullTitle(t)) + '</a> and do one 10-minute action. If a prerequisite is missing, repair that piece first. Keep the progress you have.');
    else steps.push('All core lessons are marked complete. Re-run one project demo or try the transfer challenge in <a href="#whats-next">What\'s Next</a> to see what still needs practice.');
    return '<section id="welcome-back" class="card welcome' + (compact ? " compact" : "") + '" aria-label="Restart guide"><div class="welcome-head"><h2 id="restart-title" tabindex="-1">' +
      (awayDays >= 3 ? "Welcome back. It's been " + awayDays + " days." : "Pick up where you left off.") + '</h2><button type="button" class="btn small" data-action="dismiss-welcome">Got it</button></div>' +
      (compact ? '<p><a href="#home">Open your restart guide on the course page</a>. Review only what you need.</p>'
        : "<p>Take 10–20 minutes to find your place. Fixing a forgotten step is progress too.</p><ol>" + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>") + "</section>";
  }

  // ---------- "what you can do now" (only lessons with an unlocks line count)
  function powersCard() {
    var withU = LESSONS.filter(function (l) { return l.unlocks && (!l.section.optional || state.done.has(l.slug)); });
    if (!withU.length) return "";
    var got = withU.filter(function (l) { return state.done.has(l.slug); });
    var next = withU.filter(function (l) { return !state.done.has(l.slug); })[0];
    var recent = got.slice(-3).reverse();
    var body = got.length
      ? '<ul class="powers">' + recent.map(function (l) { return '<li><a href="#' + l.slug + '">' + esc(l.title) + "</a>: " + fmt(l.unlocks) + "</li>"; }).join("") + "</ul>" +
        (got.length > 3 ? '<details class="more-powers"><summary>All ' + got.length + " so far</summary>" +
          ul(got.slice(0, -3).reverse().map(function (l) { return '<a href="#' + l.slug + '">' + esc(l.title) + "</a>: " + fmt(l.unlocks); })) + "</details>" : "")
      : '<p class="lead-line">Your existing software skills are the starting point. Finished lessons appear here; project demos help you check what you can do independently.</p>';
    return '<section class="card powers-card"><div class="section-top"><h2>What you have practised</h2><span class="count">' + got.length + " of " + withU.length + "</span></div>" + body +
      (next ? '<p class="next-power"><strong>Next up</strong>, after <a href="#' + next.slug + '">' + esc(fullTitle(next)) + "</a>: " + fmt(next.unlocks) + "</p>" : "") + "</section>";
  }

  // ---------- this week: a target, never a streak
  var quickOpen = false, quickDone = false, importMsg = "";
  function weekCard() {
    var n = weekCount(), T = state.target, dots = "";
    for (var i = 0; i < Math.max(T, n); i++) dots += '<span class="dot' + (i < n ? " on" : "") + (i >= T ? " bonus" : "") + '"></span>';
    var opts = [3, 4, 5, 6].map(function (x) { return '<option value="' + x + '"' + (x === T ? " selected" : "") + ">" + x + " sessions</option>"; }).join("");
    var lf = lastFinished(), src = lf && lf.recall && lf.recall.length ? lf : (resumeTarget() || LESSONS[0]);
    var one = src.recall && src.recall.length ? { recall: [src.recall[0]] } : null;
    return '<section class="card week-card"><div class="section-top"><h2>This week</h2><span class="count">' + n + " of " + T + " sessions</span></div>" +
      '<div class="dots" role="img" aria-label="' + n + " of " + T + ' sessions this week">' + dots + "</div>" +
      "<p>" + (n >= T ? "Target reached. Anything more is a bonus." : "Every session counts, even a short one.") +
      (!resumeTarget() ? " All core lessons are marked complete. Your project checks show what you can do." : " If your " + T + " study days each include about 90 minutes of course work, the rough finish date is <strong>" + finishDate() + "</strong>. Short sessions help you return; the date is a guide, not a deadline.") + "</p>" +
      '<div class="week-controls"><label for="target-select">Weekly target</label><select id="target-select">' + opts + "</select>" +
      '<button type="button" class="btn small" data-action="quick" aria-expanded="' + quickOpen + '">Low on energy? Do 15 minutes</button><button type="button" class="btn small" data-action="restart">Help me restart</button></div>' +
      '<div class="quick"' + (quickOpen ? "" : " hidden") + "><ol><li>Reread your last log entry.</li>" +
      (one ? "<li>Answer one question from memory:" + recallList(one) + "</li>" : "") +
      "<li>Write the smallest next step for your next session in your log.</li></ol>" +
      (quickDone ? '<p class="quick-done" role="status">Logged. That counts as a session.</p>' : '<button type="button" class="w-btn" data-action="quick-done">I did my 15 minutes</button>') + "</div>" +
      (IN_CLAUDE ? "" : '<div class="backup"><p>Progress is saved in this browser only. Moving to a new device, or clearing your browser? Save it to a file first.</p>' +
        '<div class="week-controls"><button type="button" class="btn small" data-action="export">Save progress to a file</button>' +
        '<button type="button" class="btn small" data-action="import">Load progress from a file</button><input type="file" id="import-file" accept=".json,application/json" hidden></div>' +
        (importMsg ? '<p class="import-msg" role="status">' + esc(importMsg) + "</p>" : "") + "</div>") + "</section>";
  }

  // ---------- the route: sections sized by weeks, filled as you go, with a "You" marker
  function routeStrip(t, pct) {
    var total = SECTIONS.reduce(function (a, s) { return a + s.weight; }, 0);
    var pos = SECTIONS.reduce(function (a, s) { return a + (s.optional ? 0 : s.weight); }, 0) / total;  // core done: stop before the electives
    if (t) {
      var before = 0;
      for (var i = 0; i < t.section.n - 1; i++) before += SECTIONS[i].weight;
      pos = (before + t.section.weight * (t.section.slugs.indexOf(t.slug) / t.section.slugs.length)) / total;
    }
    var segs = SECTIONS.map(function (s) {
      var d = s.slugs.filter(function (x) { return state.done.has(x); }).length;
      return '<li data-sec="' + s.n + '" class="seg' + (t && s.n === t.section.n ? " cur" : "") + '" style="flex:' + s.weight + '">' +
        '<a href="#section-' + s.n + '" data-scroll-section="' + s.n + '" title="' + esc("Section " + s.n + ": " + s.title + ", " + s.weeks) + '">' +
        '<span class="seg-bar" style="--fill:' + Math.round(100 * d / s.slugs.length) + '%"></span><span class="seg-num">' + s.n + '</span><span class="sr-only">Section ' + s.n + ": " + esc(s.title) + ", " + d + " of " + s.slugs.length + " done</span></a></li>";
    }).join("");
    var where = t ? "Section " + t.section.n + " of " + SECTIONS.length + ": " + esc(t.section.title) + ". " + lessonOf(t) + ", " + pct + "% done."
      : "All " + CORE.length + " core lessons done.";
    return '<div class="route"><ol class="segs">' + segs + '</ol><span class="you" style="left:clamp(22px, ' + (pos * 100).toFixed(1) + '%, calc(100% - 22px))" aria-hidden="true"><span class="you-tag">You</span></span>' +
      '<p class="route-caption">' + where + "</p></div>";
  }

  // ---------- course page
  function renderHome() {
    view.removeAttribute("data-sec");
    document.body.classList.remove("has-dock");
    var pct = updateTopProgress(), t = resumeTarget();
    var started = state.done.size > 0 || Object.keys(state.ticks).length > 0;
    var od = t ? firstOpenDay(t) : null;
    var cta = t
      ? '<a class="btn gold" href="#' + t.slug + '"' + (od ? ' data-resume-day="' + od.gi + '"' : "") + ">" + (started ? "Continue: " : "Start the path: ") + esc(fullTitle(t)) +
        (od ? ", " + esc(tickLabel(t.assignment[od.gi], od.k)) : "") + "</a>"
      : '<span class="btn is-done">Path complete. Electives are optional depth.</span>';
    var sections = SECTIONS.map(function (s) {
      var doneN = s.slugs.filter(function (x) { return state.done.has(x); }).length;
      var rows = s.slugs.map(function (slug) {
        var l = BY[slug], on = state.done.has(slug), cur = t && t.slug === slug;
        return '<li class="stop ' + (on ? "done" : cur ? "next" : "todo") + (l.kind === "project" ? " station" : "") + '"><a href="#' + slug + '"' + (cur ? ' aria-current="step"' : "") + ">" +
          '<span class="node" role="img" aria-label="' + (on ? "Completed" : cur ? "Next up" : "Not started") + '">' + (on ? CHECK_SVG : "") +
          '</span><span class="l-title">' + (l.kind === "project" ? '<span class="p">Project: </span>' : "") + esc(l.title) + (cur ? ' <span class="you-are-here">You are here</span>' : "") + (l.kind === "project" && on ? ' <span class="shipped">Shipped</span>' : "") +
          '</span><span class="l-time">' + esc(l.time) + "</span></a></li>";
      }).join("");
      return '<section class="card section-card" data-sec="' + s.n + '" id="section-' + s.n + '"><div class="section-head"><span class="sec-num" aria-hidden="true">' + s.n + "</span>" +
        '<div class="sec-body"><div class="section-top"><h2><span class="sr-only">Section ' + s.n + ": </span>" + esc(s.title) + '</h2><span class="count">' + doneN + " / " + s.slugs.length + " complete</span></div>" +
        '<p class="sec-meta">' + esc(s.weeks) + "</p>" + (C.sections[s.n - 1].opener ? '<p class="opener">' + fmt(C.sections[s.n - 1].opener) + "</p>" : "") + "<p>" + fmt(s.description) + "</p>" +
        (s.shift ? '<dl class="shift"><div><dt>Before</dt><dd>' + fmt(s.shift.before) + "</dd></div><div><dt>After</dt><dd>" + fmt(s.shift.after) + "</dd></div></dl>" : "") +
        '</div></div><ol class="lesson-list">' + rows + "</ol></section>";
    }).join("");
    view.innerHTML =
      '<div class="hero-band"><div class="wrap hero"><div class="hero-text"><h1>' + esc(C.title) + '</h1><p class="lede">' + fmt(C.tagline) + "</p>" +
      '<p class="hero-meta">A learning path of ' + esc(C.duration || "about " + TOTAL_WEEKS + " weeks") + ", at about 9 hours a week.</p>" +
      '<div class="hero-actions">' + cta +
      '<button type="button" class="btn" data-action="how">How it works</button></div>' +
      "</div>" + routeStrip(t, pct) + "</div></div>" +
      '<div class="wrap page">' + welcomeCard(false) + addedCard() + weekCard() + powersCard() +
      '<section class="card" id="how"><h2>How this path works</h2>' + C.intro.map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") +
      '<ul class="how">' + C.how.map(function (p) { return "<li>" + fmt(p) + "</li>"; }).join("") + "</ul></section>" +
      sections + "</div>";
  }

  // ---------- lesson page
  function lessonLinks(l) {
    if (!REPO) return "";
    var page = SITE ? SITE + "#" + l.slug : "";
    var where = lessonOf(l) + ": " + fullTitle(l) + (page ? " (" + page + ")" : "");
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

    var opener = l.section.slugs[0] === l.slug && C.sections[l.section.n - 1].opener ? '<p class="opener">' + fmt(C.sections[l.section.n - 1].opener) + "</p>" : "";
    var introHtml = opener + (l.hook ? '<p class="hook">' + fmt(l.hook) + "</p>" : "") + (l.intro || []).map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") +
      (l.story ? '<details class="story"><summary><strong>True story (' + esc(l.story.year) + "):</strong> " + esc(l.story.title || "what went wrong") + "</summary>" +
        "<p>" + fmt(l.story.what) + ' <a' + href(l.story.url) + ">Source</a></p><p><strong>What you'll do differently:</strong> " + fmt(l.story.lesson) + "</p></details>" : "");
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
        '<p class="lead-line">Two minutes, before the reading. Make a prediction, then check it against the example or reading. The correction is the useful part.</p>' +
        (l.predict ? '<p class="predict"><strong>Predict:</strong> ' + fmt(l.predict) + "</p>" +
          '<div class="guess"' + (locked ? " hidden" : "") + '><label for="guess-input">Your guess</label><textarea id="guess-input" rows="2"></textarea>' +
          '<div class="guess-actions"><button type="button" class="w-btn" data-action="lock-guess">Lock in my guess</button>' +
          '<button type="button" class="linkish" data-action="skip-guess">Skip guessing</button></div></div>' +
          '<p class="guess-locked"' + (locked ? "" : " hidden") + '><strong>Your guess:</strong> <span class="guess-text">' + esc(guess || "") + "</span>" +
          (l.widget ? "" : " Check it against the reading, and again at the Memory check.") + "</p>" : "") +
        (l.widget ? '<div class="widget-wrap"' + (l.predict && !locked ? " hidden" : "") + '><div class="widget" data-widget="' + esc(l.widget) + '"><p class="lead-line">Loading the widget…</p></div></div>' : "") +
        '<button type="button" class="linkish skip-link" data-scroll="sec-assignment">Skip to the assignment</button></div>', "try");
    }
    if (l.bridge || l.picture) {
      var br = l.bridge || {};
      add("before-read", "Before you read", '<div class="bridge">' + (l.picture ? '<p class="picture"><strong>Picture this:</strong> ' + fmt(l.picture) + "</p>" : "") +
        (br.text ? "<p>" + fmt(br.text) + "</p>" : "") +
        (br.terms && br.terms.length ? '<dl class="terms">' + br.terms.map(function (t) { return "<div><dt>" + fmt(t[0]) + "</dt><dd>" + fmt(t[1]) + "</dd></div>"; }).join("") + "</dl>" : "") + "</div>");
    }
    var k = 1;
    var assign = (l.assignment || []).map(function (g, gi) {
      var n = ticksIn(g), boxes = "";
      for (var kk = 0; kk < n; kk++) {
        boxes += '<label class="day-check"><input type="checkbox" data-tick="' + gi + "." + kk + '"' + (isTicked(l.slug, gi, kk) ? " checked" : "") +
          ' aria-describedby="dayh-' + gi + '"> ' + (n > 1 ? esc(tickLabel(g, kk)) + " done" : "Done") + "</label>";
      }
      var head = g.day ? '<div class="day-head" id="day-' + gi + '"><h3 id="dayh-' + gi + '">' + esc(g.day) + '</h3><div class="day-ticks">' + boxes + "</div></div>" : "";
      var html = head + '<ol start="' + k + '">' + g.steps.map(function (s) { return "<li>" + fmt(s) + "</li>"; }).join("") + "</ol>";
      k += g.steps.length;
      return html;
    }).join("");
    if (l.watch && l.watch.length) {
      assign = '<div class="watch"><h3>Prefer watching?</h3><ul>' + l.watch.map(watchItem).join("") + "</ul></div>" + assign;
    }
    if (l.recall && l.recall.length) {
      assign += "<h3>Memory check · 10 min</h3>" + '<ol start="' + k + '"><li>Close this page. In your log, answer from memory, then check:' + recallList(l) +
        "</li><li>If an answer is shaky, revisit just that section and try again. Finish your log with one result you checked and the exact file or small action to start next time. Two lines are enough.</li></ol>";
    }
    add("assignment", "Assignment", '<div class="panel">' + assign + "</div>");
    if (l.done && l.done.length) add("done", "You're done when", ul(l.done.map(fmt), "done-list"));
    if (l.showoff) add("show-it-off", "Show it off", '<div class="showoff"><p class="pitch"><strong>Your one-line pitch:</strong> ' + fmt(l.showoff.pitch) + "</p>" +
      "<p>A 3-minute demo, in this order:</p><ol>" + l.showoff.demo.map(function (d) { return "<li>" + fmt(d) + "</li>"; }).join("") + "</ol>" +
      (l.showoff.proves && l.showoff.proves.length ? "<p>What it proves to employers:</p>" + ul(l.showoff.proves.map(fmt)) : "") + "</div>");
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
      '<p class="lesson-meta">' + lessonOf(l) + ", " + esc(l.time) + dayDots(l) + "</p>" + pickUp(l) +
      (l.checkpoint && !on && !ticksOf(l.slug).length ? '<p class="checkpoint"><strong>Before you start, check that</strong> ' + fmt(l.checkpoint) + "</p>" : "") + "</div>" +
      '<div class="lesson-layout"><div class="content">' +
      '<details class="toc-mobile"><summary>Lesson contents</summary><ul>' + tocButtons + "</ul></details>" +
      parts.join("") +
      '<div class="lesson-actions">' + party + '<p class="all-days" role="status"' + (allDays(l) && !on ? "" : " hidden") + '>All Days ticked. Finish the Memory check, then mark this lesson complete.</p>' +
      '<div class="action-row">' + prevBtn + completeBtn + nextBtn + "</div>" +
      '<div class="action-row center"><a class="btn view-course" href="#home">View course</a></div>' +
      lessonLinks(l) + "</div></div>" +
      '<aside class="toc" aria-label="Lesson contents"><span class="toc-title">Lesson contents</span><ul>' + tocButtons + "</ul></aside></div></div>" + dock(l, prev, next, on);
    document.body.classList.add("has-dock");
    mountWidgets();
  }
  function dayDots(l) {
    var g = l.assignment || [];
    if (!g.length || !g[0].day) return "";
    var dots = "", total = 0, got = 0;
    g.forEach(function (x, i) { for (var k = 0; k < ticksIn(x); k++) { var on = isTicked(l.slug, i, k); total++; if (on) got++; dots += '<span class="' + (on ? "on" : "") + '"></span>'; } });
    return '<span class="day-dots" role="img" aria-label="' + got + " of " + total + ' Days done">' + dots + "</span>";
  }
  function dock(l, prev, next, on) {
    return '<nav class="dock" aria-label="Lesson navigation">' +
      (prev ? '<a class="dock-btn" href="#' + prev.slug + '" aria-label="Previous lesson: ' + esc(fullTitle(prev)) + '">' + icon("left") + "</a>"
        : '<a class="dock-btn" href="#home" aria-label="Course page">' + icon("left") + "</a>") +
      '<button type="button" class="dock-complete' + (on ? " is-done" : "") + '" data-action="toggle-complete">' + (on ? icon("check") + "Completed" : "Mark complete") + "</button>" +
      (next ? '<a class="dock-btn next" href="#' + next.slug + '" aria-label="Next lesson: ' + esc(fullTitle(next)) + '">Next' + icon("right") + "</a>"
        : '<a class="dock-btn next" href="#home">Finish' + icon("right") + "</a>") + "</nav>";
  }
  function allDays(l) {
    var groups = l.assignment || [];
    return groups.length > 0 && !!groups[0].day && daysOf(l.slug).length === groups.length;
  }
  function pickUp(l) {
    var nd = newDays(l);
    if (nd.length) return '<p class="pick-up">New since you finished this lesson: ' + nd.map(function (gi) {
      return '<button type="button" class="linkish" data-scroll="day-' + gi + '">' + esc(dayLabel(l.assignment[gi])) + "</button>"; }).join(", ") + "</p>";
    var o = firstOpenDay(l);
    if (!o || state.done.has(l.slug)) return "";
    return '<p class="pick-up">Pick up at <button type="button" class="linkish" data-scroll="day-' + o.gi + '">' + esc(tickLabel(l.assignment[o.gi], o.k)) + "</button></p>";
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
  function setMenu(open) {
    var b = document.querySelector(".menu-btn"), m = document.getElementById("site-menu");
    if (!b || !m) return;
    b.setAttribute("aria-expanded", String(open));
    m.classList.toggle("open", open);
    if (open) { var f = m.querySelector("a, button"); if (f) f.focus(); }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.querySelector(".menu.open")) { setMenu(false); var b = document.querySelector(".menu-btn"); if (b) b.focus(); }
  });
  function route() {
    setMenu(false);
    touchVisit();
    render();
    if (wantHow) { wantHow = false; scrollToId("how"); return; }
    if (wantDay >= 0) { var d = wantDay; wantDay = -1; var el = document.getElementById("day-" + d); if (el) { el.scrollIntoView({ block: "start" }); var b = el.querySelector("input:not(:checked)") || el.querySelector("input"); if (b) b.focus({ preventScroll: true }); return; } }
    window.scrollTo(0, 0);
    var h = view.querySelector(".lesson-head h1");
    if (h) { try { h.focus({ preventScroll: true }); } catch (e) {} }
  }
  document.addEventListener("click", function (e) {
    var rd = e.target.closest ? e.target.closest("[data-resume-day]") : null;
    if (rd) { wantDay = +rd.getAttribute("data-resume-day"); return; }
    var openMenu = document.querySelector(".menu.open");
    if (openMenu && !e.target.closest("#site-menu") && !e.target.closest(".menu-btn")) setMenu(false);
    var sj = e.target.closest ? e.target.closest("[data-scroll-section]") : null;
    if (sj) { e.preventDefault(); scrollToId("section-" + sj.getAttribute("data-scroll-section")); return; }
    var t = e.target.closest ? e.target.closest("[data-scroll], [data-action], #complete-btn") : null;
    if (!t) return;
    if (t.getAttribute("data-action") === "menu") { setMenu(t.getAttribute("aria-expanded") !== "true"); return; }
    if (t.id === "complete-btn" || t.getAttribute("data-action") === "toggle-complete") {
      var fromDock = t.classList.contains("dock-complete");
      var l = BY[(location.hash || "").replace(/^#/, "")];
      if (!l) return;
      if (state.done.has(l.slug)) state.done.delete(l.slug);
      else { state.done.add(l.slug); logSession(); if (l.kind === "project") celebrate = l.slug; }
      save(); render();
      var btn = fromDock ? view.querySelector(".dock-complete") : document.getElementById("complete-btn"); if (btn) btn.focus();
      return;
    }
    var act = t.getAttribute("data-action");
    if (act === "skip-main") { var h1 = view.querySelector("h1"); if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus(); } return; }
    if (act === "dismiss-welcome") { welcomeDismissed = true; restartRequested = false; render(); return; }
    if (act === "restart") { restartRequested = true; welcomeDismissed = false; render(); var restartTitle = document.getElementById("restart-title"); if (restartTitle) { restartTitle.focus({ preventScroll: true }); var bar = document.querySelector(".topbar-wrap"); var inset = bar ? bar.getBoundingClientRect().height : 0; window.scrollTo(0, restartTitle.getBoundingClientRect().top + window.scrollY - inset - 16); } return; }
    if (act === "export") {
      var blob = new Blob([JSON.stringify(record(), null, 1)], { type: "application/json" }), a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = "ai-engineer-path-progress-" + isoDay(new Date()) + ".json";
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      return;
    }
    if (act === "import") { var fi = document.getElementById("import-file"); if (fi) fi.click(); return; }
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
      setMenu(false);
      if (BY[(location.hash || "").replace(/^#/, "")]) { wantHow = true; location.hash = "#home"; }
      else scrollToId("how");
      return;
    }
    if (t.hasAttribute("data-scroll")) scrollToId(t.getAttribute("data-scroll"));
  });
  document.addEventListener("change", function (e) {
    if (e.target && e.target.matches && e.target.matches("input[data-tick]")) {
      var dl = BY[(location.hash || "").replace(/^#/, "")];
      if (!dl) return;
      var id = e.target.getAttribute("data-tick"), arr = ticksOf(dl.slug).filter(function (x) { return x !== id; });
      if (e.target.checked) { arr.push(id); logSession(); }
      state.ticks[dl.slug] = arr;
      save();
      var nudge = view.querySelector(".all-days"); if (nudge) nudge.hidden = !(allDays(dl) && !state.done.has(dl.slug));
      var dots = view.querySelector(".day-dots"); if (dots) dots.outerHTML = dayDots(dl);
      var pu = view.querySelector(".pick-up"), nu = pickUp(dl);
      if (pu) { if (nu) pu.outerHTML = nu; else pu.remove(); }
      else if (nu) { var meta = view.querySelector(".lesson-meta"); if (meta) meta.insertAdjacentHTML("afterend", nu); }
      return;
    }
    if (e.target && e.target.id === "import-file" && e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function () {
        var d = null;
        try { d = JSON.parse(String(reader.result)); } catch (err) {}
        if (!d || d.v !== 1 || !Array.isArray(d.done)) { importMsg = "That file isn't a saved progress file. Nothing was changed."; render(); return; }
        if (!window.confirm("Replace the progress in this browser with the progress in this file? This can't be undone.")) { importMsg = "Nothing was changed."; render(); return; }
        apply(d); save(); importMsg = "Loaded: " + state.done.size + " lessons complete."; render();
      };
      reader.readAsText(e.target.files[0]);
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
