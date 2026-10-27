import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve('out');
const routes = ['', 'about/', 'contact/', 'blog/', 'boevaya-classica/', 'grant-ib/', 'post-number-0/', 'bootstrap-5-alpha/'];

test('all existing public routes are exported, including direct deep links', () => {
  for (const route of routes) {
    assert.ok(existsSync(path.join(root, route, 'index.html')), `Missing static route /${route}`);
  }
  assert.ok(existsSync(path.join(root, '404.html')), 'Missing static 404 page');
  assert.ok(existsSync(path.join(root, '.nojekyll')), 'GitHub Pages must serve _next assets');
});

// Parse the emitted HTML so failures catch broken output, not source structure.
const html = (route) => readFileSync(path.join(root, route, 'index.html'), 'utf8');
const load = async (source) => (await import('cheerio')).load(source);

test('each route has a unique heading, populated metadata, and its production canonical', async () => {
  for (const route of routes) {
    const $ = await load(html(route));
    assert.equal($('html').attr('lang'), 'ru');
    assert.equal($('h1').length, 1, route);
    assert.ok($('title').text().includes('Software Engineer'), route);
    assert.ok($('meta[name="description"]').attr('content')?.length > 30, route);
    assert.equal($('link[rel="canonical"]').attr('href'), `https://d27o.github.io/${route}`, route);
    assert.equal($('meta[property="og:url"]').attr('content'), `https://d27o.github.io/${route}`, route);
    assert.ok($('footer').text().includes('Москва'), route);
    assert.doesNotMatch($('body').text(), /frontend developer|Вьетнам|Vietnam|root-admin@example/i);
    const ids = $('[id]').map((_, el) => $(el).attr('id')).get();
    assert.equal(new Set(ids).size, ids.length, `Duplicate IDs on ${route}`);
  }
});

test('local navigation, images, scripts, styles and downloads exist in the export', async () => {
  for (const route of routes) {
    const $ = await load(html(route));
    for (const element of $('a[href], img[src], script[src], link[href]').toArray()) {
      const reference = $(element).attr('href') ?? $(element).attr('src');
      if (!reference || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(reference)) continue;
      const url = new URL(reference, `https://d27o.github.io/${route}`);
      const decoded = decodeURIComponent(url.pathname);
      assert.ok(!decoded.startsWith('/_next/image'), 'No image optimizer server is available on Pages');
      const target = path.join(root, decoded);
      assert.ok(existsSync(target), `Broken resource ${reference} on /${route}`);
      if (statSync(target).isDirectory()) {
        assert.ok(existsSync(path.join(target, 'index.html')), `Missing directory index: ${reference}`);
      }
      if (url.hash && decoded === `/${route}`) {
        assert.ok($(`[id="${decodeURIComponent(url.hash.slice(1))}"]`).length, `Broken fragment ${reference}`);
      }
    }
  }
});

test('current stack, commercial work, and existing blog articles survive migration', async () => {
  const $ = await load(html(''));
  assert.equal($('section[aria-labelledby="projects-title"] article').length, 3);
  for (const item of ['Vue 3', 'TypeScript', 'Pinia', 'Vitest', 'Playwright']) {
    assert.ok($('.career__tags').text().includes(item));
  }
  const about = await load(html('about/'));
  assert.ok(about('main').text().includes('Angara Security'));
  assert.ok(about('main').text().includes('Huawei'));
  assert.ok((await load(html('post-number-0/')))('article').text().includes('Причина №1'));
  assert.ok((await load(html('bootstrap-5-alpha/')))('article').text().includes('jQuery'));
});

test('home surfaces verified employers before commercial projects', async () => {
  const $ = await load(html(''));
  const projects = $('main section[aria-labelledby="projects-title"]');
  const precedingText = projects.prevAll().text();
  for (const employer of ['Angara Security', 'Huawei']) {
    assert.ok(precedingText.includes(employer), `${employer} must appear before the cases`);
  }
});

test('commercial case results stay visible without expanding details', async () => {
  const $ = await load(html(''));
  const cases = $('main section[aria-labelledby="projects-title"] article');
  assert.equal(cases.length, 3);
  for (const article of cases.toArray()) {
    const result = $(article).find('p').filter((_, paragraph) => /^Результат\./.test($(paragraph).text().trim()));
    assert.equal(result.length, 1, 'Each case needs one identifiable outcome');
    assert.ok(result.text().trim().length > 35, 'The outcome must describe a real result');
    assert.equal(result.closest('details, [hidden]').length, 0, 'Outcomes must be visible by default');
  }
});

test('about presents experience before the detailed stack', async () => {
  const $ = await load(html('about/'));
  const sections = $('main section').toArray();
  const experienceIndex = sections.findIndex((section) => $(section).attr('aria-labelledby') === 'experience-title');
  const stackIndex = sections.findIndex((section) => $(section).find('[aria-label="Текущий стек"]').length > 0);
  assert.ok(experienceIndex >= 0, 'The commercial experience section must exist');
  assert.ok(stackIndex > experienceIndex, 'Detailed technology descriptions should follow the experience');
  for (const text of ['Angara Security', 'Март 2024 — сентябрь 2026', 'Huawei', 'Апрель 2021 — март 2024']) {
    assert.ok($(sections[experienceIndex]).text().includes(text), `Missing verified experience: ${text}`);
  }
});

test('contact actions retain the public email, GitHub and Telegram addresses', async () => {
  const $ = await load(html('contact/'));
  for (const href of ['mailto:kalugin.d27o@gmail.com', 'https://github.com/d27o', 'https://t.me/d27odev']) {
    assert.equal($('main').find(`a[href="${href}"]`).length, 1, `Missing or duplicate contact action ${href}`);
  }
});

test('RSS, crawler files, and a usable not-found page are static assets', async () => {
  const atom = await load(readFileSync(path.join(root, 'feed.xml'), 'utf8'));
  assert.equal(atom('entry').length, 2);
  assert.ok(atom('feed > title').text().includes('Software Engineer'));
  assert.ok(existsSync(path.join(root, 'robots.txt')));
  assert.ok(existsSync(path.join(root, 'sitemap.xml')));
  const notFound = await load(readFileSync(path.join(root, '404.html'), 'utf8'));
  assert.ok(notFound('h1').text().includes('404'));
  assert.ok(notFound('a[href="/"]').length);
});

test('legacy links to article sections retain their heading targets', async () => {
  const anchors = {
    'post-number-0/': ['зачем', 'причина-1', 'причина-2', 'процесс-создания', 'задача', 'решение'],
    'bootstrap-5-alpha/': ['jquery--javascript', 'прекращение-поддержки-ie', 'пользовательские-css-свойства', 'усовершенствованная-система-сеток'],
  };
  for (const [route, ids] of Object.entries(anchors)) {
    const $ = await load(html(route));
    for (const id of ids) assert.equal($(`article [id="${id}"]`).length, 1, `Missing legacy anchor ${route}#${id}`);
  }
});
