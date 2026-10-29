/* Run: node --test tests/progress.test.cjs
   Executes the real course and app with a minimal browser shell; no production test hooks. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const courseSource = fs.readFileSync(path.join(root, 'data/course.js'), 'utf8');
const appSource = fs.readFileSync(process.env.APP_SOURCE || path.join(root, 'assets/app.js'), 'utf8');
const {execFileSync} = require('node:child_process');
const KEY = 'ai-engineer-path:progress:v2', OLD_KEY = 'ai-engineer-path:progress:v1';
const live = file => execFileSync('git', ['show', `0775835:${file}`], {cwd: root, encoding: 'utf8'});
const model = { window: {} };
vm.runInNewContext(courseSource, model);
const core = model.window.COURSE.sections.filter(s => !s.optional).flatMap(s => s.lessons);
const original = core.filter(l => !l.added);
const before = slug => [...original.slice(0, original.findIndex(l => l.slug === slug))].map(l => l.slug);  // a plain array, not the course realm's

// Saves with the 8.2 split marker go under the new key; anything else is an older save under the old key.
// progress null = a first visit. opts: storage (shared Map), course/app (sources), claude (window.claude).
function boot(progress = {v: 1, done: []}, hash = '', opts = {}) {
  const storage = opts.storage || new Map(progress ? [[progress.split ? KEY : OLD_KEY, JSON.stringify(progress)]] : []);
  const events = {};
  const nodes = new Map();
  function element() {
    return { innerHTML: '', textContent: '', style: {}, hidden: false,
      classList: {add() {}, remove() {}, toggle() {}},
      setAttribute() {}, removeAttribute() {}, getAttribute() { return null; },
      addEventListener() {}, querySelector() { return null; }, querySelectorAll() { return []; },
      focus() {}, scrollIntoView() {} };
  }
  const document = {
    body: element(), documentElement: element(),
    getElementById(id) { if (!nodes.has(id)) nodes.set(id, element()); return nodes.get(id); },
    querySelector() { return null; },
    addEventListener(type, fn) { events[type] = fn; }
  };
  const context = {
    document, location: {hash}, console,
    localStorage: {getItem: k => storage.get(k) || null, setItem: (k, v) => storage.set(k, v)},
    window: {addEventListener() {}, matchMedia: () => ({matches: false}), claude: opts.claude}
  };
  vm.createContext(context);
  vm.runInContext(opts.course || courseSource, context);
  vm.runInContext(opts.app || appSource, context);
  return { storage,
    html: () => nodes.get('view').innerHTML,
    next() { return this.html().match(/class="btn gold" href="#([^"]+)"/)?.[1] || null; },
    catchup() { return this.html().match(/<section class="card welcome"><h2>New since you passed this point<\/h2>[\s\S]*?<\/section>/)?.[0] || ''; },
    save(key = KEY) { events.change({target: {id: 'target-select', value: '6', getAttribute() { return null; }}}); return JSON.parse(storage.get(key)); }
  };
}

test('new learners start normally; inserted lesson is not catch-up yet', () => {
  const page = boot();
  assert.equal(page.next(), core[0].slug);
  assert.equal(page.catchup(), '');
});

for (const slug of ['agent-fundamentals', 'langgraph']) {
  test(`partial ${slug} resumes there and lists the inserted lesson as catch-up`, () => {
    const saved = {v: 1, done: before(slug), ticks: {[slug]: ['0.0']}};
    const page = boot(saved);
    assert.equal(page.next(), slug);
    assert.match(page.catchup(), /href="#campus-knowledge-base"/);
    assert.match(page.html(), /data-resume-day=/);
    const roundtrip = page.save();
    assert.deepEqual(roundtrip.ticks[slug], ['0.0']);
    assert.equal(boot(roundtrip).next(), slug);
  });
}

test('completed later original lesson also keeps insertion in catch-up', () => {
  const page = boot({v: 1, done: before('langgraph')});
  assert.equal(page.next(), 'langgraph');
  assert.match(page.catchup(), /href="#campus-knowledge-base"/);
});

test('no real progress past the insertion follows the linear path', () => {
  assert.equal(boot({v: 1, done: before('agent-fundamentals')}).next(), 'campus-knowledge-base');
});

test('invalid and unknown ticks do not move the learner ahead', () => {
  const saved = {v: 1, done: before('agent-fundamentals'), ticks: {
    'agent-fundamentals': ['99.0', '0.99', 'not-a-tick'], 'future-lesson': ['0.0']
  }};
  const page = boot(saved);
  assert.equal(page.next(), 'campus-knowledge-base');
  assert.doesNotMatch(page.catchup(), /href="#campus-knowledge-base"/);
});

test('elective progress does not move the core learner past an insertion', () => {
  const page = boot({v: 1, done: before('agent-fundamentals').concat('elective-local-models'),
    ticks: {'elective-local-models': ['0.0']}});
  assert.equal(page.next(), 'campus-knowledge-base');
});

test('known legacy Day progress migrates and resumes the same lesson', () => {
  const page = boot({v: 1, done: before('agent-fundamentals'), days: {'agent-fundamentals': [0]}});
  assert.equal(page.next(), 'agent-fundamentals');
  assert.match(page.catchup(), /href="#campus-knowledge-base"/);
});

test('all core lessons complete leaves electives optional', () => {
  const page = boot({v: 1, done: core.map(l => l.slug)});
  assert.equal(page.next(), null);
  assert.match(page.html(), /Path complete\. Electives are optional depth/);
});

test('only remaining inserted lesson is still reachable via Continue', () => {
  const page = boot({v: 1, done: core.filter(l => l.slug !== 'campus-knowledge-base').map(l => l.slug)});
  assert.equal(page.next(), 'campus-knowledge-base');
});

test('appended Day blocks remain discoverable in completed lessons', () => {
  const page = boot({v: 1, done: ['ml-basics-measuring-quality', 'embeddings-and-vector-search']});
  assert.match(page.catchup(), /ml-basics-measuring-quality/);
  assert.match(page.catchup(), /embeddings-and-vector-search/);
});

test('unknown completion slugs and numeric ticks survive repeated saves', () => {
  let saved = {v: 1, done: ['future-lesson'], ticks: {'future-lesson': ['0.0'], 'agent-fundamentals': ['99.0']}};
  for (let i = 0; i < 3; i++) saved = boot(saved).save();
  assert.deepEqual(saved.done, ['future-lesson']);
  assert.deepEqual(saved.ticks['future-lesson'], ['0.0']);
  assert.deepEqual(saved.ticks['agent-fundamentals'], ['99.0']);
});

const ticksOfGroup = (slug, gi, n) => Array.from({length: n}, (_, k) => `${gi}.${k}`);

test('a pre-8.1 whole-week tick becomes every Day of the split block, once', () => {
  const legacy = {v: 1, done: before('project-poster-reader'), ticks: {'project-poster-reader': ['0.0']}};
  const page = boot(legacy);
  assert.equal(page.next(), 'project-poster-reader');
  assert.match(page.html(), /data-resume-day="1"/);
  const saved = page.save();
  assert.equal(saved.split, 1);
  assert.deepEqual(saved.ticks['project-poster-reader'], ticksOfGroup('project-poster-reader', 0, 6));
  assert.deepEqual(boot(saved).save().ticks['project-poster-reader'], ticksOfGroup('project-poster-reader', 0, 6));
});

test('after 8.1, ticking only the first Day of a split block stays one Day', () => {
  const saved = boot({v: 1, split: 1, done: before('project-poster-reader'), ticks: {'project-poster-reader': ['0.0']}}).save();
  assert.deepEqual(saved.ticks['project-poster-reader'], ['0.0']);
});

test('a learner past Give It Tools keeps Continue and sees both inserted lessons as catch-up', () => {
  const page = boot({v: 1, done: before('start-applying'), ticks: {'start-applying': []}});
  assert.equal(page.next(), 'start-applying');
  assert.match(page.catchup(), /href="#campus-knowledge-base"/);
  assert.match(page.catchup(), /href="#under-the-hood-tiny-gpt"/);
});

test('finished lessons that gained Days list them, including a formerly single-box lesson', () => {
  const page = boot({v: 1, done: ['setting-up-your-tools', 'how-llms-work', 'measuring-search']});
  assert.match(page.catchup(), /setting-up-your-tools/);
  assert.match(page.catchup(), /how-llms-work/);
  assert.match(page.catchup(), /measuring-search/);
});

test('an exported legacy file and a migrated save agree', () => {
  const legacy = {v: 1, done: before('project-ask-mdn'), ticks: {'project-ask-mdn': ['0.0', '1.0']}};
  const saved = boot(legacy).save();
  assert.deepEqual(saved.ticks['project-ask-mdn'], ticksOfGroup('', 0, 6).concat(ticksOfGroup('', 1, 6)));
  assert.equal(boot(saved).next(), 'project-ask-mdn');
});

test('a first visit records a start date, so lessons already in the path are not catch-up', () => {
  const saved = boot(null).save();
  assert.match(saved.since, /^\d{4}-\d{2}-\d{2}$/);
  const page = boot({...saved, done: before('agent-fundamentals'), ticks: {'agent-fundamentals': ['0.0']}});
  assert.equal(page.next(), 'campus-knowledge-base');
  assert.equal(page.catchup(), '');
  assert.doesNotMatch(boot({...saved, done: ['setting-up-your-tools']}).catchup(), /setting-up-your-tools/);
});

test('a page still open on the live release cannot change 8.2 progress', () => {
  const storage = new Map([[OLD_KEY, JSON.stringify({v: 1, done: before('project-poster-reader'), ticks: {}})]]);
  const now = boot(null, '', {storage});
  const legacy = JSON.parse(storage.get(OLD_KEY));
  const mine = {...now.save(), done: legacy.done.concat('campus-knowledge-base', 'elective-local-models'),
    ticks: {'project-poster-reader': ['0.0', '0.2'], 'project-ask-mdn': ['2.4']}};
  storage.set(KEY, JSON.stringify(mine));
  // The live page knows none of the new lessons and only one box per split block, and saves its own view.
  const old = boot(null, '', {storage, course: live('data/course.js'), app: live('assets/app.js')});
  storage.set(OLD_KEY, JSON.stringify({v: 1, done: legacy.done, ticks: {'project-poster-reader': ['0.0', '1.0']}}));
  old.save(OLD_KEY);
  const after = boot(null, '', {storage}).save();
  assert.deepEqual(after.done.slice().sort(), mine.done.slice().sort());
  assert.deepEqual(after.ticks, mine.ticks);
});

function fakeAccount(docs) {
  const listeners = {}, writes = [];
  const doc = path => ({
    onSnapshot(fn) { listeners[path] = fn; return () => {}; },
    get: async () => ({exists: path in docs, data: () => docs[path], metadata: {fromCache: false, hasPendingWrites: false}}),
    set: async v => { writes.push(path); docs[path] = JSON.parse(JSON.stringify(v)); }
  });
  const api = {user: {id: async () => 'u1'}, db: {doc}};
  const tick = () => new Promise(r => setImmediate(r));
  return {docs, writes, tick, claude: {use: async name => api[name] || null},
    async deliver(path, fromCache = false) {
      await tick();
      listeners[path]({exists: !fromCache && path in docs, data: () => docs[path], metadata: {fromCache, hasPendingWrites: false}});
      for (let i = 0; i < 5; i++) await tick();
    }};
}
const NEW_DOC = 'data/users/u1/progress-v2', OLD_DOC = 'data/users/u1/progress';

test('a save before the account loads never overwrites the account', async () => {
  const acct = fakeAccount({[NEW_DOC]: {v: 1, split: 1, done: before('keyword-rag')}});
  const page = boot(null, '', {claude: acct.claude});
  await acct.tick(); await acct.tick();
  page.save();
  await acct.deliver(NEW_DOC, true);  // the local cache doesn't have it yet
  page.save();
  assert.deepEqual(acct.writes, []);
  await acct.deliver(NEW_DOC);
  assert.equal(page.next(), 'keyword-rag');
  page.save();
  await acct.tick();
  assert.deepEqual(acct.docs[NEW_DOC].done, before('keyword-rag'));
});

test('the first 8.2 visit carries older account progress over once and leaves it untouched', async () => {
  const old = {v: 1, done: before('project-poster-reader'), ticks: {'project-poster-reader': ['0.0']}};
  const acct = fakeAccount({[OLD_DOC]: JSON.parse(JSON.stringify(old))});
  const page = boot(null, '', {claude: acct.claude});
  await acct.deliver(NEW_DOC);
  assert.deepEqual(acct.writes, [NEW_DOC]);
  assert.deepEqual(acct.docs[NEW_DOC].ticks['project-poster-reader'], ticksOfGroup('', 0, 6));
  assert.equal(acct.docs[NEW_DOC].since, '');
  assert.deepEqual(acct.docs[OLD_DOC], old);
  assert.equal(page.next(), 'project-poster-reader');
});
