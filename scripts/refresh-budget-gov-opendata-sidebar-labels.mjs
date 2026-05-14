#!/usr/bin/env node
/**
 * Обновляет sidebar_label у карточек opendata-*.md в каталоге
 * wiki/data-sources/federal/budget/ebudget/
 * по полю title: человекочитаемое название из каталога (без « (набор ID)»), с усечением.
 * Должен совпадать с логикой scripts/generate-budget-gov-opendata-dataset-cards.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const GIIS_EB_BASE = path.join(
  ROOT,
  'wiki/data-sources/federal/budget/ebudget',
);

function listOpendataCardDirs() {
  if (!fs.existsSync(GIIS_EB_BASE)) return [];
  return [GIIS_EB_BASE];
}

const SIDEBAR_LABEL_MAX = 58;

function sidebarLabelFromCatalogTitle(safeTitle, identifier) {
  let s = safeTitle.replace(/\s+/g, ' ').trim();
  if (!s) s = identifier;
  if (s.length <= SIDEBAR_LABEL_MAX) return s;
  const cut = s.slice(0, SIDEBAR_LABEL_MAX - 1).trimEnd();
  return `${cut}…`;
}

function catalogTitleWithoutDatasetSuffix(fullTitle, identifier) {
  const t = String(fullTitle || '').trim();
  const exact = ` (набор ${identifier})`;
  if (t.endsWith(exact)) return t.slice(0, -exact.length).trim();
  const loose = t.replace(/\s*\(набор\s+[^)]+\)\s*$/, '').trim();
  return loose || t;
}

function labelFromFileTitle(fullTitle, identifier) {
  const safeTitle = catalogTitleWithoutDatasetSuffix(fullTitle, identifier).replace(/\s+/g, ' ').trim();
  return sidebarLabelFromCatalogTitle(safeTitle, identifier);
}

function yamlScalarString(s) {
  return JSON.stringify(String(s));
}

function extractTitle(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = m[1];
  const titleMatch = fm.match(/^title:\s*(.+)$/m);
  if (!titleMatch) return null;
  let titleVal = titleMatch[1].trim();
  if (titleVal.startsWith('"') && titleVal.endsWith('"')) {
    titleVal = JSON.parse(titleVal);
  } else if (titleVal.startsWith("'") && titleVal.endsWith("'")) {
    titleVal = titleVal.slice(1, -1);
  }
  return titleVal;
}

function main() {
  let n = 0;
  const dirs = listOpendataCardDirs();
  if (!dirs.length) {
    console.warn('Нет каталога', GIIS_EB_BASE);
    return;
  }
  for (const DIR of dirs) {
    for (const name of fs.readdirSync(DIR)) {
      if (!name.startsWith('opendata-') || !name.endsWith('.md')) continue;
      const identifier = name.slice('opendata-'.length, -'.md'.length);
      const fp = path.join(DIR, name);
      const raw = fs.readFileSync(fp, 'utf8');
      const title = extractTitle(raw);
      if (title == null) {
        console.warn('skip (no frontmatter title):', name);
        continue;
      }
      const fmBlock = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] || '';
      if (!/^sidebar_label:\s/m.test(fmBlock)) {
        console.warn('skip (no sidebar_label):', name);
        continue;
      }
      const next = labelFromFileTitle(title, identifier);
      const nextLine = `sidebar_label: ${yamlScalarString(next)}`;
      const newRaw = raw.replace(/^sidebar_label:\s*.+$/m, nextLine);
      if (newRaw === raw) continue;
      fs.writeFileSync(fp, newRaw, 'utf8');
      n++;
    }
  }
  console.log(`Обновлено файлов: ${n}`);
}

main();
