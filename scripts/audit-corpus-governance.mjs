#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {buildKnowledgeArtifacts} from './lib/knowledge-export.mjs';

const ROOT = process.cwd();
const REPORT = path.join(ROOT, 'reports', 'corpus-governance-audit.json');
const POLICY = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'scripts', 'data', 'corpus-governance-policy.json'), 'utf8'),
);
const CHECK = process.argv.includes('--check');
const QUALITY_FIELDS = [
  'last_verified',
  'data_completeness',
  'machine_readability',
  'legal_significance',
  'update_lag',
  'archive_depth',
  'license_or_terms',
];

function familyFor(record) {
  const {path: file} = record;
  if (file.startsWith('wiki/data-sources/regional/')) return 'regional';
  if (/wiki\/data-sources\/federal\/budget\/ebudget\/opendata-/u.test(file)) {
    return 'electronic-budget-import';
  }
  if (/wiki\/data-sources\/federal\/nalog\/7707329152-/u.test(file)) return 'fns-import';
  if (file.startsWith('wiki/data-sources/federal/enterprises/')) return 'state-sector';
  if (file.startsWith('wiki/data-sources/international/')) return 'international';
  if (file.startsWith('wiki/data-sources/civil/')) return 'civil';
  if (file.startsWith('wiki/data-sources/federal/')) return 'curated-federal';
  return 'other';
}

function nonEmpty(value) {
  return value !== null && value !== undefined && value !== '';
}

function countBy(values) {
  const counts = {};
  for (const value of values) {
    const key = nonEmpty(value) ? String(value) : '(missing)';
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return Object.fromEntries(Object.entries(counts).sort(([a], [b]) => a.localeCompare(b)));
}

function groupSlugs(records, keyFor) {
  const groups = {};
  for (const record of records) {
    const key = keyFor(record) || '(missing)';
    if (!groups[key]) groups[key] = [];
    groups[key].push(record.slug);
  }
  return Object.fromEntries(
    Object.entries(groups)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, slugs]) => [key, slugs.sort()]),
  );
}

function daysBetween(from, to) {
  if (!from) return null;
  const start = new Date(`${from}T00:00:00Z`);
  const end = new Date(`${to}T00:00:00Z`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return null;
  return Math.floor((end - start) / 86_400_000);
}

function sortDeep(value) {
  if (Array.isArray(value)) return value.map(sortDeep);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.entries(value)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, child]) => [key, sortDeep(child)]),
  );
}

function reachableFromRoots(graph, roots) {
  const adjacency = new Map();
  for (const edge of graph.edges) {
    if (edge.kind === 'typed_relationship') continue;
    if (!adjacency.has(edge.from)) adjacency.set(edge.from, []);
    adjacency.get(edge.from).push(edge.to);
  }
  const seen = new Set(roots);
  const queue = [...roots];
  while (queue.length) {
    const current = queue.shift();
    for (const target of adjacency.get(current) ?? []) {
      if (seen.has(target)) continue;
      seen.add(target);
      queue.push(target);
    }
  }
  return seen;
}

function buildReport() {
  const {records, graph} = buildKnowledgeArtifacts();
  const sources = records.filter((record) => record.entity_type === 'data-source');
  const incoming = new Map(records.map((record) => [record.slug, 0]));
  for (const edge of graph.edges) incoming.set(edge.to, (incoming.get(edge.to) ?? 0) + 1);
  const reachable = reachableFromRoots(graph, POLICY.navigation_roots);
  const exceptions = new Set(POLICY.orphan_exceptions);

  const familyNames = [...new Set(sources.map(familyFor))].sort();
  const sourceFamilies = {};
  for (const family of familyNames) {
    const items = sources.filter((record) => familyFor(record) === family);
    const quality = {};
    for (const field of QUALITY_FIELDS) {
      const missing = items.filter((record) => !nonEmpty(record[field])).map((record) => record.slug).sort();
      quality[field] = {populated: items.length - missing.length, missing: missing.length};
    }
    sourceFamilies[family] = {
      total: items.length,
      quality,
      zero_inbound: items
        .filter((record) => (incoming.get(record.slug) ?? 0) === 0 && !exceptions.has(record.slug))
        .map((record) => record.slug)
        .sort(),
      unreachable_from_navigation_root: items
        .filter((record) => !reachable.has(record.slug) && !exceptions.has(record.slug))
        .map((record) => record.slug)
        .sort(),
    };
  }
  const qualityExceptions = (POLICY.quality_exceptions ?? []).map((exception) => {
    const items = sources.filter((record) => familyFor(record) === exception.family);
    const missing = items.filter((record) => !nonEmpty(record[exception.field]));
    return {
      ...exception,
      missing: missing.length,
      total: items.length,
    };
  });

  const snapshots = records.filter(
    (record) =>
      record.entity_type === 'organization' &&
      record.path.startsWith('wiki/organizations/federal-gos-nko/') &&
      !record.path.endsWith('/README.md'),
  );
  const snapshotInventory = snapshots
    .map((record) => ({
      slug: record.slug,
      snapshot_name: record.title,
      current_name: record.lifecycle_status === 'current' ? record.title : null,
      official_site: record.source_url,
      as_of: record.as_of,
      lifecycle_status: record.lifecycle_status,
      status_as_of: record.status_as_of,
      possible_successor_slug: record.successor_slug,
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
  const legal = records.filter((record) => record.entity_type === 'legal-document');
  const staleLegal = legal
    .filter(
      (record) =>
        daysBetween(record.last_verified, POLICY.audit_as_of) === null ||
        daysBetween(record.last_verified, POLICY.audit_as_of) > POLICY.legal_stale_after_days,
    )
    .map((record) => ({slug: record.slug, last_verified: record.last_verified}))
    .sort((a, b) => a.slug.localeCompare(b.slug));
  const staleSnapshots = snapshots
    .filter(
      (record) =>
        daysBetween(record.status_as_of, POLICY.audit_as_of) === null ||
        daysBetween(record.status_as_of, POLICY.audit_as_of) > POLICY.snapshot_stale_after_days,
    )
    .map((record) => ({slug: record.slug, status_as_of: record.status_as_of}))
    .sort((a, b) => a.slug.localeCompare(b.slug));
  const zeroInbound = records.filter(
    (record) => (incoming.get(record.slug) ?? 0) === 0 && !exceptions.has(record.slug),
  );

  return sortDeep({
    schema_version: 1,
    audit_as_of: POLICY.audit_as_of,
    totals: {
      documents: records.length,
      data_sources: sources.length,
      graph_edges: graph.edges.length,
    },
    provenance: {
      source_authority_values: countBy(sources.map((record) => record.source_authority)),
      jurisdiction_level_values: countBy(sources.map((record) => record.jurisdiction_level)),
      legal_significance_values: countBy(sources.map((record) => record.legal_significance)),
    },
    quality_exceptions: qualityExceptions,
    navigation: {
      roots: POLICY.navigation_roots,
      exceptions: POLICY.orphan_exceptions,
      zero_inbound_by_entity_type: groupSlugs(zeroInbound, (record) => record.entity_type),
      source_zero_inbound_by_family: Object.fromEntries(
        Object.entries(sourceFamilies).map(([family, data]) => [family, data.zero_inbound]),
      ),
      source_unreachable_by_family: Object.fromEntries(
        Object.entries(sourceFamilies).map(([family, data]) => [
          family,
          data.unreachable_from_navigation_root,
        ]),
      ),
    },
    source_families: sourceFamilies,
    lifecycle: {
      snapshot_cards: snapshots.length,
      inventory: snapshotInventory,
      status_values: countBy(snapshots.map((record) => record.lifecycle_status)),
      missing_as_of: snapshots.filter((record) => !record.as_of).map((record) => record.slug).sort(),
      missing_status_as_of: snapshots
        .filter((record) => !record.status_as_of)
        .map((record) => record.slug)
        .sort(),
      stale: staleSnapshots,
    },
    freshness: {
      legal_stale_after_days: POLICY.legal_stale_after_days,
      legal_stale_or_unverified: staleLegal,
      snapshot_stale_after_days: POLICY.snapshot_stale_after_days,
      groups: {
        'legal-document': {
          total: legal.length,
          stale_or_unverified: staleLegal.length,
        },
        organization: {
          'federal-gos-nko-snapshot': {
            total: snapshots.length,
            stale: staleSnapshots.length,
            lifecycle_unknown: snapshots.filter(
              (record) => record.lifecycle_status === 'unknown',
            ).length,
          },
        },
      },
    },
  });
}

const serialized = `${JSON.stringify(buildReport(), null, 2)}\n`;
if (CHECK) {
  if (!fs.existsSync(REPORT) || fs.readFileSync(REPORT, 'utf8') !== serialized) {
    console.error('corpus-governance-audit: отчёт устарел; выполните npm run audit:corpus');
    process.exit(1);
  }
  console.log('corpus-governance-audit: OK');
} else {
  fs.mkdirSync(path.dirname(REPORT), {recursive: true});
  fs.writeFileSync(REPORT, serialized, 'utf8');
  console.log(`corpus-governance-audit: записан ${path.relative(ROOT, REPORT)}`);
}
