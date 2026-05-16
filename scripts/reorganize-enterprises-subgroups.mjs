#!/usr/bin/env node
/**
 * Раскладывает карточки wiki/data-sources/federal/enterprises/*.md
 * по подпапкам goscorp | ppk | ao | gosnko | other (slug в frontmatter не меняется).
 *
 *   node scripts/reorganize-enterprises-subgroups.mjs
 *   node scripts/reorganize-enterprises-subgroups.mjs --dry-run
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  ENTERPRISE_SUBGROUPS,
  buildDisclosureLegalTypeMap,
  ensureEnterpriseSubgroupCategories,
  enterpriseDisclosurePath,
  resolveEnterpriseSubgroup,
} from './lib/enterprise-subgroup.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const ENT_ROOT = path.join(ROOT, 'wiki/data-sources/federal/enterprises');
const REGISTRY_PATH = path.join(__dirname, 'data/federal-gos-ngo-registry.json');

function listDisclosureFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name in ENTERPRISE_SUBGROUPS) {
      out.push(...listDisclosureFiles(p));
    } else if (entry.isFile() && entry.name.endsWith('-disclosure.md')) {
      out.push(p);
    }
  }
  return out;
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  const legalTypeMap = buildDisclosureLegalTypeMap(ROOT);
  const registry = fs.existsSync(REGISTRY_PATH)
    ? JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'))
    : [];

  if (!dryRun) ensureEnterpriseSubgroupCategories(ENT_ROOT);

  const files = listDisclosureFiles(ENT_ROOT);
  const counts = Object.fromEntries(Object.keys(ENTERPRISE_SUBGROUPS).map((k) => [k, 0]));
  let moved = 0;

  for (const filePath of files) {
    const base = path.basename(filePath, '.md');
    const subgroup = resolveEnterpriseSubgroup(base, legalTypeMap, registry);
    const target = enterpriseDisclosurePath(ROOT, subgroup, base);
    counts[subgroup]++;

    if (path.resolve(filePath) === path.resolve(target)) continue;

    if (dryRun) {
      console.log(`${path.relative(ENT_ROOT, filePath)} → ${subgroup}/`);
    } else {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.renameSync(filePath, target);
      console.log(`Moved ${path.relative(ROOT, filePath)} → ${path.relative(ROOT, target)}`);
    }
    moved++;
  }

  console.log(
    `${dryRun ? '[dry-run] ' : ''}Done: ${files.length} cards, ${moved} moved. Counts: ${JSON.stringify(counts)}`,
  );
}

main();
