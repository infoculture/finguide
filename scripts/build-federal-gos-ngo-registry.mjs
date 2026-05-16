#!/usr/bin/env node
/**
 * Сборка scripts/data/federal-gos-ngo-registry.json из _dev/ngo_federal_list_2020.xlsx
 *
 *   node scripts/build-federal-gos-ngo-registry.mjs
 */
import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const XLSX = path.join(ROOT, '_dev/ngo_federal_list_2020.xlsx');
const OVERRIDES_PATH = path.join(__dirname, 'data/federal-gos-ngo-slug-overrides.json');
const OUT = path.join(__dirname, 'data/federal-gos-ngo-registry.json');

const CYR = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y',
  к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
  х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
};

function translit(s) {
  return String(s)
    .toLowerCase()
    .split('')
    .map((c) => CYR[c] ?? (/[a-z0-9]/.test(c) ? c : '-'))
    .join('');
}

function slugify(raw) {
  return translit(raw)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
    .slice(0, 64);
}

function extractQuotedName(full) {
  const m = String(full).match(/[«"]([^»"]+)[»"]/);
  return m ? m[1].trim() : String(full).trim();
}

function shortNameFrom(full) {
  const q = extractQuotedName(full);
  if (q.length <= 80) return q;
  const words = q.split(/\s+/).slice(0, 6);
  return `${words.join(' ')}…`;
}

function normalizeInn(v) {
  if (v == null || v === '') return null;
  const s = String(v).replace(/\D/g, '');
  return s.length === 10 ? s : s.padStart(10, '0').slice(-10);
}

function loadMergedFromXlsx() {
  const py = `
import json, sys
from openpyxl import load_workbook
from datetime import datetime

def ser(v):
    if isinstance(v, datetime):
        return v.isoformat()[:10]
    if isinstance(v, float) and v == int(v):
        return int(v)
    return v

wb = load_workbook(${JSON.stringify(XLSX)}, read_only=True, data_only=True)
records = {}

ws = wb['по ЕГРЮЛ']
for i, row in enumerate(ws.iter_rows(values_only=True)):
    if i < 2 or not row or not row[0]:
        continue
    inn = str(int(row[0])) if isinstance(row[0], float) else str(row[0]).strip()
    records[inn] = {
        'inn': inn,
        'name': ser(row[2]),
        'reg_date': ser(row[1]),
        'in_egrul_sheet': True,
        'egrul_basis': ser(row[3]),
        'so_nko': ser(row[4]),
        'subsidy_by_year': {str(y): ser(row[j]) for y, j in zip([2018, 2019, 2020], [5, 6, 7])},
    }

ws2 = wb['по субсидиям']
for i, row in enumerate(ws2.iter_rows(values_only=True)):
    if i < 1 or not row or not row[0]:
        continue
    if str(row[5]).strip().lower() != 'да':
        continue
    inn = str(int(row[0])) if isinstance(row[0], float) else str(row[0]).strip()
    rec = records.setdefault(inn, {'inn': inn, 'name': ser(row[2])})
    rec['gos_ngo_subsidy'] = True
    rec['egrul_mark_subsidy'] = ser(row[3])
    rec['founder'] = ser(row[4])
    if 'subsidy_by_year' not in rec or not rec['subsidy_by_year']:
        rec['subsidy_by_year'] = {}
    for y, j in zip([2017, 2018, 2019, 2020], [6, 7, 8, 9]):
        if row[j] is not None:
            rec['subsidy_by_year'][str(y)] = ser(row[j])
    rec['subsidy_total'] = ser(row[10])
    if not rec.get('name'):
        rec['name'] = ser(row[2])
    if not rec.get('reg_date'):
        rec['reg_date'] = ser(row[1])

wb.close()
json.dump(list(records.values()), sys.stdout, ensure_ascii=False)
`;
  const res = spawnSync('python3', ['-c', py], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  if (res.status !== 0) {
    console.error(res.stderr || res.stdout);
    throw new Error('Failed to read xlsx');
  }
  return JSON.parse(res.stdout);
}

function main() {
  const overrides = JSON.parse(fs.readFileSync(OVERRIDES_PATH, 'utf8'));
  const byInnOverride = overrides.by_inn || {};
  const rows = loadMergedFromXlsx();
  const usedSlugs = new Set();
  const registry = [];

  for (const row of rows.sort((a, b) => String(a.name).localeCompare(String(b.name), 'ru'))) {
    const inn = normalizeInn(row.inn);
    const ov = byInnOverride[inn] || {};
    const name = row.name || '';
    let shortName = ov.short_name || shortNameFrom(name);
    let orgSlug = ov.org_slug;
    const existing = ov.existing_state_sector_slug || null;

    if (!orgSlug && !existing) {
      const base = slugify(extractQuotedName(name) || name);
      orgSlug = base || `inn-${inn}`;
      let candidate = orgSlug;
      let n = 2;
      while (usedSlugs.has(candidate)) {
        candidate = `${orgSlug}-${n}`;
        n += 1;
      }
      orgSlug = candidate;
    }
    if (orgSlug) usedSlugs.add(orgSlug);

    const disclosureSlug = existing
      ? existing === 'gazprom'
        ? 'gazprom-investor-disclosure'
        : existing === 'rzd'
          ? 'rzd-holding-disclosure'
          : `${existing}-disclosure`
      : `${orgSlug}-disclosure`;

    registry.push({
      inn,
      name,
      short_name: shortName,
      org_slug: orgSlug,
      disclosure_slug: disclosureSlug,
      reg_date: row.reg_date ?? null,
      in_egrul_sheet: Boolean(row.in_egrul_sheet),
      gos_ngo_subsidy: Boolean(row.gos_ngo_subsidy),
      egrul_basis: row.egrul_basis ?? null,
      so_nko: row.so_nko ?? null,
      egrul_mark_subsidy: row.egrul_mark_subsidy ?? null,
      founder: row.founder ?? null,
      subsidy_by_year: row.subsidy_by_year ?? {},
      subsidy_total: row.subsidy_total ?? null,
      existing_state_sector_slug: existing,
    });
  }

  fs.writeFileSync(OUT, `${JSON.stringify(registry, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${registry.length} entries to ${path.relative(ROOT, OUT)}`);
  console.log(
    `  new pairs: ${registry.filter((r) => !r.existing_state_sector_slug).length}, state-sector updates: ${registry.filter((r) => r.existing_state_sector_slug).length}`,
  );
}

main();
