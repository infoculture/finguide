#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = path.join(process.cwd(), 'wiki', 'data-sources');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (entry.name.endsWith('.md')) out.push(file);
  }
  return out;
}

function insertFrontmatterLines(raw, lines) {
  if (!lines.length) return raw;
  const end = raw.indexOf('\n---', 4);
  if (!raw.startsWith('---\n') || end === -1) throw new Error('frontmatter block not found');
  return `${raw.slice(0, end)}\n${lines.join('\n')}${raw.slice(end)}`;
}

function family(rel) {
  if (/^federal\/budget\/ebudget\/opendata-/u.test(rel)) return 'electronic-budget-import';
  if (/^federal\/nalog\/7707329152-/u.test(rel)) return 'fns-import';
  if (rel.startsWith('federal/enterprises/')) return 'state-sector';
  if (rel.startsWith('federal/')) return 'curated-federal';
  if (rel.startsWith('international/')) return 'international';
  if (rel.startsWith('civil/')) return 'civil';
  return null;
}

function inferredJurisdiction(name) {
  if (name === 'international') return 'international';
  if (name === 'civil') return 'multilevel';
  return 'federal';
}

function inferredLegalSignificance(name) {
  if (name === 'civil') return 'civil_repackaging';
  return 'official';
}

function inferredMachineReadability(data) {
  const kind = String(data.data_source_kind ?? '').toLowerCase();
  if (kind === 'api') return 'API';
  if (kind === 'files') return 'files';
  if (kind === 'ftp') return 'FTP';
  if (kind === 'ui_only' || kind === 'portal') return 'HTML';
  return 'mixed';
}

let changed = 0;
const counts = {};
for (const file of walk(ROOT).sort()) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const name = family(rel);
  if (!name) continue;
  const raw = fs.readFileSync(file, 'utf8');
  const {data} = matter(raw);
  if (data.entity_type !== 'data-source') continue;
  const lines = [];
  if (!data.jurisdiction_level) lines.push(`jurisdiction_level: ${inferredJurisdiction(name)}`);
  if (!data.data_completeness) lines.push('data_completeness: unknown');
  if (!data.machine_readability) {
    lines.push(`machine_readability: ${inferredMachineReadability(data)}`);
  }
  if (!data.legal_significance) {
    lines.push(`legal_significance: ${inferredLegalSignificance(name)}`);
  }
  if (!data.update_lag) lines.push('update_lag: unknown');
  if (!data.archive_depth) lines.push('archive_depth: unknown');
  if (!data.license_or_terms) lines.push('license_or_terms: not-explicit');
  if (name === 'fns-import' && !data.last_verified) lines.push('last_verified: 2026-05-12');
  if ((name === 'fns-import' || name === 'electronic-budget-import') && !data.rag_priority) {
    lines.push('rag_priority: low');
  }
  if (!data.relationships && name === 'fns-import') {
    lines.push(
      'relationships:',
      '  - type: published_by',
      '    target: /organizations/fns',
      '  - type: available_in',
      '    target: /information-systems/federal/fnssite',
    );
  }
  if (!data.relationships && name === 'electronic-budget-import') {
    lines.push(
      'relationships:',
      '  - type: published_by',
      '    target: /organizations/minfin',
      '  - type: available_in',
      '    target: /information-systems/federal/giis-eb',
    );
  }
  if (!lines.length) continue;
  fs.writeFileSync(file, insertFrontmatterLines(raw, lines), 'utf8');
  changed++;
  counts[name] = (counts[name] ?? 0) + 1;
}

console.log(`migrate-source-metadata: обновлено карточек: ${changed}`);
for (const [name, count] of Object.entries(counts).sort(([a], [b]) => a.localeCompare(b))) {
  console.log(`  ${name}: ${count}`);
}
