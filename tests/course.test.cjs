/* Run: node --test tests/
   Checks the course data against the live release (0775835), so saved progress keeps pointing at the same work.
   Needs the git history. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');

function load(source) { const m = {window: {}}; vm.runInNewContext(source, m); return JSON.parse(JSON.stringify(m.window.COURSE)); }
const course = load(fs.readFileSync(path.join(root, 'data/course.js'), 'utf8'));
const live = load(execFileSync('git', ['show', '0775835:data/course.js'], {cwd: root, encoding: 'utf8'}));
const lessons = c => c.sections.flatMap(s => s.lessons.map(l => ({...l, optional: !!s.optional})));
const now = lessons(course), BY = Object.fromEntries(now.map(l => [l.slug, l]));
// Same rule as ticksIn() in assets/app.js: a "Days a–b" block has one box per Day, anything else one box.
const ticksIn = g => { const m = /^Days\s+(\d+)[–-](\d+)/.exec(String((g && g.day) || '')); return m ? m[2] - m[1] + 1 : 1; };

test('every live lesson is still there, in the same order', () => {
  const order = now.map(l => l.slug);
  assert.equal(new Set(order).size, order.length, 'duplicate slug');
  const positions = lessons(live).map(l => order.indexOf(l.slug));
  assert.ok(positions.every(p => p >= 0), 'a live slug disappeared');
  assert.deepEqual(positions, [...positions].sort((a, b) => a - b), 'live lessons reordered');
});

test('every live Day group keeps its index and its boxes', () => {
  for (const old of lessons(live)) {
    const groups = BY[old.slug].assignment || [];
    const was = old.assignment || [];
    assert.ok(groups.length >= was.length, `groups removed in ${old.slug}`);
    was.forEach((g, gi) => {
      if (!g.day) return;  // no Day boxes before, so no ticks can point here
      const n = groups[gi];
      if (n.split) assert.match(g.day, /^Weeks? /, `${old.slug} group ${gi} split from a non-Week block`);
      else assert.equal(ticksIn(n), ticksIn(g), `${old.slug} group ${gi} changed its number of boxes`);
    });
    groups.slice(was.length).forEach((g, gi) =>
      assert.ok(g.added || BY[old.slug].added, `${old.slug} group ${was.length + gi} is new but not flagged added`));
  }
});

test('new core lessons are flagged added, with a date', () => {
  const old = new Set(lessons(live).map(l => l.slug));
  for (const l of now) {
    if (!l.optional && !old.has(l.slug)) assert.match(String(l.added), /^\d{4}-\d{2}-\d{2}$/, `${l.slug} needs an added date`);
    for (const g of l.assignment || []) if (g.added) assert.match(g.added, /^\d{4}-\d{2}-\d{2}$/, `${l.slug}: ${g.day}`);
  }
});

test('internal links point at a lesson', () => {
  const targets = JSON.stringify(course).match(/\]\(#([a-z0-9-]+)\)/g).map(m => m.slice(3, -1));
  for (const t of targets) assert.ok(t === 'home' || BY[t], `broken link #${t}`);
});

test('the stated duration matches the Day count, with one session in ten for catch-up', () => {
  // Same session counting as remainingSessions() in assets/app.js, for a learner who has done nothing yet.
  const units = g => { const m = String(g.day || '').match(/^(Days?|Weeks?)\s+(\d+)(?:[–-](\d+))?/); if (!m) return 1; const n = m[3] ? m[3] - m[2] + 1 : 1; return /^Week/.test(m[1]) ? n * 6 : n; };
  const fromTime = t => { const m = String(t || '').match(/(\d+(?:\.\d+)?)\s*(min|hour|week)/); if (!m) return 1; return m[2] === 'week' ? Math.round(m[1] * 6) : m[2] === 'hour' ? Math.max(1, Math.round(m[1] / 1.5)) : 1; };
  let sessions = 0;
  for (const s of course.sections.filter(s => !s.optional)) {
    for (const l of s.lessons) sessions += l.assignment?.[0]?.day ? l.assignment.reduce((n, g) => n + units(g), 0) : fromTime(l.time);
    const end = +String(s.weeks).match(/(\d+)$/)[1];
    assert.ok(Math.abs(end - sessions * 1.1 / 6) <= 1, `${s.title} ends in week ${end}, but its Days reach week ${(sessions * 1.1 / 6).toFixed(1)}`);
  }
  assert.equal(course.duration, `about ${Math.round(sessions * 1.1 / 6)} weeks`);
});
