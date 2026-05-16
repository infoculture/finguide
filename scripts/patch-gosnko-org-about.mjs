#!/usr/bin/env node
/**
 * Добавляет или обновляет раздел «Об организации» в карточках enterprises/gosnko/.
 *
 *   node scripts/patch-gosnko-org-about.mjs
 *   node scripts/patch-gosnko-org-about.mjs --dry-run
 *   node scripts/patch-gosnko-org-about.mjs --only=arena-2018
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  buildOrgAboutMarkdown,
  loadOrgProfiles,
  orgSlugFromDisclosurePath,
  patchAboutIntoDisclosure,
} from './lib/gosnko-org-about.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const GOSNKO_DIR = path.join(ROOT, 'wiki/data-sources/federal/enterprises/gosnko');
const REGISTRY = path.join(__dirname, 'data/federal-gos-ngo-registry.json');
const URLS = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/federal-gos-ngo-official-urls.json'), 'utf8'),
);

const dryRun = process.argv.includes('--dry-run');
const onlyArg = process.argv.find((a) => a.startsWith('--only='));
const only = onlyArg ? onlyArg.split('=')[1].replace(/-disclosure$/, '') : null;

function registryBySlug() {
  const list = JSON.parse(fs.readFileSync(REGISTRY, 'utf8'));
  const map = new Map();
  for (const rec of list) map.set(rec.org_slug, rec);
  return map;
}

/** Синтетические записи для карточек не из реестра госНКО */
const SYNTHETIC = {
  skolkovo: {
    name: 'Фонд "Сколково"',
    short_name: 'Сколково',
    inn: '7706412961',
    founder: 'Правительство РФ',
    source_url: 'https://sk.ru/',
  },
  fasie: {
    name: 'Фонд содействия развитию малых форм предприятий в научно-технической сфере (Фонд содействия инновациям)',
    short_name: 'Фонд Бортника',
    inn: '7707049388',
    founder: null,
    source_url: 'https://fasie.ru/',
  },
  frp: {
    name: 'Фонд развития промышленности (ФРП)',
    short_name: 'ФРП',
    inn: '7708750793',
    founder: 'Минпромторг России',
    source_url: 'https://frprf.ru/',
  },
};

function extractInn(content) {
  const m = content.match(/^inn:\s*"?(\d+)"?/m);
  return m ? m[1] : null;
}

function main() {
  const profiles = loadOrgProfiles();
  const regMap = registryBySlug();
  const files = fs
    .readdirSync(GOSNKO_DIR)
    .filter((f) => f.endsWith('-disclosure.md'))
    .map((f) => path.join(GOSNKO_DIR, f));

  let patched = 0;
  let skipped = 0;

  for (const filePath of files) {
    const slug = orgSlugFromDisclosurePath(filePath);
    if (!slug) continue;
    if (only && slug !== only) continue;

    const profile = profiles[slug];
    if (!profile) {
      console.warn(`No profile for ${slug}`);
      skipped++;
      continue;
    }

    let rec = regMap.get(slug) ?? SYNTHETIC[slug];
    if (!rec) {
      const content = fs.readFileSync(filePath, 'utf8');
      const title = content.match(/^title:\s*"?([^"\n]+)"?/m)?.[1] ?? slug;
      rec = {
        name: title.replace(/: открытые данные.*$/, '').replace(/: отчётность.*$/, ''),
        short_name: content.match(/^sidebar_label:\s*"?([^"\n]+)"?/m)?.[1]?.replace(/: данные$/, '').replace(/: раскрытие$/, '') ?? slug,
        inn: extractInn(content),
        founder: null,
      };
    } else if (!rec.inn) {
      rec = { ...rec, inn: extractInn(fs.readFileSync(filePath, 'utf8')) };
    }

    const urls = URLS[slug] ?? null;
    const about = buildOrgAboutMarkdown(rec, profile, urls);
    let content = fs.readFileSync(filePath, 'utf8');
    content = patchAboutIntoDisclosure(content, about);

    if (dryRun) {
      console.log(`[dry-run] ${path.relative(ROOT, filePath)}`);
    } else {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Patched ${path.relative(ROOT, filePath)}`);
    }
    patched++;
  }

  console.log(`Done: ${patched} patched, ${skipped} skipped (no profile)${dryRun ? ' (dry-run)' : ''}`);
}

main();
