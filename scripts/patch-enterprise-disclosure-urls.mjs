#!/usr/bin/env node
/**
 * Удаляет некорректные ссылки egrul.nalog.ru/index.html?inn=…
 * и добавляет официальные сайты / витрины раскрытия для карточек госНКО
 * (источники в enterprises/ и организации в federal-gos-nko/).
 *
 *   node scripts/patch-enterprise-disclosure-urls.mjs
 *   node scripts/patch-enterprise-disclosure-urls.mjs --dry-run
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const ENT_ROOT = path.join(ROOT, 'wiki/data-sources/federal/enterprises');
const ORG_DIR = path.join(ROOT, 'wiki/organizations/federal-gos-nko');
const URLS = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/federal-gos-ngo-official-urls.json'), 'utf8'),
);
const EGRUL_WIKI = '[ЕГРЮЛ](/information-systems/federal/egrul)';
const LAST_VERIFIED = '2026-05-16';
const dryRun = process.argv.includes('--dry-run');

function walkMd(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walkMd(p, out);
    else if (name.endsWith('.md') && name !== 'README.md') out.push(p);
  }
  return out;
}

function slugFromDisclosureFile(filePath) {
  const base = path.basename(filePath, '.md');
  return base.endsWith('-disclosure') ? base.slice(0, -'-disclosure'.length) : null;
}

function stripBadEgrul(text) {
  let t = text;
  t = t.replace(
    /\[ЕГРЮЛ\]\(https:\/\/egrul\.nalog\.ru\/index\.html\?inn=\d+\)/g,
    EGRUL_WIKI,
  );
  t = t.replace(/https:\/\/egrul\.nalog\.ru\/index\.html\?inn=\d+/g, EGRUL_WIKI);
  t = t.replace(
    / — поиск по ИНН \*\*\d+\*\* в \[ЕГРЮЛ\]\([^)]+\)\./g,
    (m) => m.replace(/\[ЕГРЮЛ\]\([^)]+\)/, EGRUL_WIKI),
  );
  t = t.replace(
    /\*\*[^*]+\*\* — поиск по ИНН \*\*\d+\*\* в \[ЕГРЮЛ\]\([^)]+\)\./g,
    (full) => {
      const name = full.match(/^\*\*([^*]+)\*\*/)?.[1];
      return name ? `**${name}** — официальный контур см. ниже.` : full;
    },
  );
  t = t.replace(/\| https:\/\/egrul\.nalog\.ru\/ \| официальный \/ агрегатор \|/g, `| ${EGRUL_WIKI} | реестр (карточка ИС) |`);
  return t;
}

function buildUrlSection(rec) {
  const { site, disclosure = [], note } = rec;
  const lines = [
    '',
    '## URL и точки доступа',
    '',
    '| Тип | URL | Формат |',
    '| --- | --- | --- |',
    `| Официальный сайт | ${site} | HTML |`,
    '',
    '### Отчётность и раскрытие информации',
    '',
    '| URL | Тип |',
    '| --- | --- |',
    ...disclosure.map((u) => `| ${u} | официальный |`),
    '',
  ];
  if (note) {
    lines.push(`> ${note}`, '');
  }
  return lines.join('\n');
}

function operatorNameFromBody(text) {
  const row = text.match(/^\| Оператор \| (.+?) \|$/m);
  if (row) return row[1].trim();
  const h1 = text.match(/^# (.+)$/m)?.[1] ?? '';
  return h1.replace(/: открытые данные и субсидии$/, '').replace(/: отчётность и раскрытие$/, '');
}

function patchNgoDisclosure(text, slug, filePath) {
  const rec = URLS[slug];
  if (!rec?.site) return { text, changed: false };

  let t = stripBadEgrul(text);
  const orgName = operatorNameFromBody(t);

  t = t.replace(/^source_url:.*$/m, `source_url: ${JSON.stringify(rec.site)}`);
  t = t.replace(/^last_verified:.*$/m, `last_verified: ${LAST_VERIFIED}`);
  t = t.replace(/^last_updated:.*$/m, `last_updated: ${LAST_VERIFIED}T00:00:00.000Z`);
  t = t.replace(
    /^\| Дата проверки \(`last_verified`\) \|[^\n]+\|$/m,
    `| Дата проверки (\`last_verified\`) | ${LAST_VERIFIED} (официальные URL) |`,
  );

  const operatorRe = /^## Оператор\n\n[\s\S]*?(?=\n## )/m;
  const operatorBlock = `## Оператор

**${orgName}** — канонический вход: ${rec.site}

`;
  if (operatorRe.test(t)) {
    t = t.replace(operatorRe, operatorBlock);
  }

  const urlSection = buildUrlSection(rec);
  if (t.includes('## URL и точки доступа')) {
    t = t.replace(/^## URL и точки доступа\n[\s\S]*?(?=\n## )/m, urlSection.trimEnd() + '\n\n');
  } else {
    t = t.replace(/\n(## Где искать данные\n)/, `\n${urlSection}$1`);
  }

  const siteBullet = `- Официальный сайт оператора — ${rec.site}`;
  if (!t.includes(siteBullet)) {
    t = t.replace(/(## Где искать данные\n\n)/, `$1${siteBullet}\n`);
  }

  t = t.replace(
    /(\| Полнота \(`data_completeness`\) \| )[^|]+(\|)/,
    '$1частичная — идентификация и субсидии из исследования; официальный сайт и витрины — см. «URL и точки доступа» $2',
  );
  t = t.replace(/\| официальный \|\n## /g, '| официальный |\n\n## ');

  return { text: t, changed: t !== text };
}

function patchNgoOrg(text, slug) {
  const rec = URLS[slug];
  if (!rec?.site) return { text: stripBadEgrul(text), changed: false };

  let t = text;
  const inn = t.match(/^inn: "(\d+)"/m)?.[1];
  const disclosureLine = t.match(/^- \[[^\]]+: открытые данные\]\([^)]+\)\s*$/m)?.[0];

  t = t.replace(/^source_url:.*$/m, `source_url: ${JSON.stringify(rec.site)}`);
  t = t.replace(/^last_updated:.*$/m, `last_updated: ${LAST_VERIFIED}T00:00:00.000Z`);

  const vitrinyBullets = [
    disclosureLine,
    `- Официальный сайт — ${rec.site}`,
    ...(rec.disclosure?.[0] ? [`- Отчётность и раскрытие — ${rec.disclosure[0]}`] : []),
    inn ? `- ${EGRUL_WIKI} — учредительные данные по ИНН ${inn}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  t = t.replace(
    /^## Витрины и входы\n\n[\s\S]*?(?=\n## )/m,
    `## Витрины и входы\n\n${vitrinyBullets}\n\n`,
  );

  t = stripBadEgrul(t);

  return { text: t, changed: t !== text };
}

function patchDisclosureFile(filePath) {
  const slug = slugFromDisclosureFile(filePath);
  let text = fs.readFileSync(filePath, 'utf8');
  const before = text;

  if (slug && URLS[slug]) {
    ({ text } = patchNgoDisclosure(text, slug));
  } else {
    text = stripBadEgrul(text);
  }

  if (text === before) return false;
  if (!dryRun) fs.writeFileSync(filePath, text);
  return true;
}

function patchOrgFile(filePath) {
  const slug = path.basename(filePath, '.md');
  let text = fs.readFileSync(filePath, 'utf8');
  const before = text;

  if (URLS[slug]) {
    ({ text } = patchNgoOrg(text, slug));
  } else {
    text = stripBadEgrul(text);
  }

  if (text === before) return false;
  if (!dryRun) fs.writeFileSync(filePath, text);
  return true;
}

let n = 0;
for (const f of walkMd(ENT_ROOT)) {
  if (patchDisclosureFile(f)) {
    n += 1;
    console.log(dryRun ? '[dry-run] ' : '', path.relative(ROOT, f));
  }
}
for (const f of walkMd(ORG_DIR)) {
  if (patchOrgFile(f)) {
    n += 1;
    console.log(dryRun ? '[dry-run] ' : '', path.relative(ROOT, f));
  }
}
console.log(`${dryRun ? 'Would update' : 'Updated'} ${n} file(s).`);
