import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';
import {
  buildKnowledgeArtifacts,
  SCHEMA_VERSION,
  serializeArtifacts,
  validateArtifacts,
  validateRelationshipList,
} from '../scripts/lib/knowledge-export.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const WIKI = path.join(HERE, 'fixtures', 'knowledge-export', 'wiki');
const TYPES = new Set([
  'available_in',
  'derived_from',
  'governed_by',
  'operated_by',
  'part_of',
  'published_by',
  'related_to',
  'replaces',
  'uses',
]);

function build() {
  return buildKnowledgeArtifacts({
    wikiDir: WIKI,
    site: 'https://example.test',
    maxChunkChars: 160,
    relationshipTypes: TYPES,
  });
}

test('document, chunk and graph exports are deterministic and versioned', () => {
  const first = build();
  const second = build();
  assert.deepEqual(serializeArtifacts(first), serializeArtifacts(second));
  assert.ok(first.records.every((record) => record.schema_version === SCHEMA_VERSION));
  assert.ok(first.chunks.every((chunk) => chunk.schema_version === SCHEMA_VERSION));
  assert.equal(first.graph.schema_version, SCHEMA_VERSION);
  assert.equal(new Set(first.chunks.map((chunk) => chunk.chunk_id)).size, first.chunks.length);
});

test('section export preserves introduction, Cyrillic anchors, duplicates and explicit ids', () => {
  const {chunks} = build();
  const example = chunks.filter((chunk) => chunk.document_slug === '/example');
  assert.ok(example.some((chunk) => chunk.heading_anchor === null && chunk.text.includes('Введение')));
  assert.ok(example.some((chunk) => chunk.heading_anchor === 'кириллический-раздел'));
  assert.ok(example.some((chunk) => chunk.heading_anchor === 'повтор'));
  assert.ok(example.some((chunk) => chunk.heading_anchor === 'повтор-1'));
  assert.ok(example.some((chunk) => chunk.heading_anchor === 'custom-anchor'));
  assert.ok(example.every((chunk) => chunk.draft === true));
  assert.ok(example.some((chunk) => chunk.url.endsWith('#custom-anchor')));
});

test('lists, tables and fenced code blocks are not split internally', () => {
  const {chunks} = build();
  const example = chunks.filter((chunk) => chunk.document_slug === '/example');
  const listChunk = example.find((chunk) => chunk.text.includes('первый пункт списка'));
  assert.match(listChunk.text, /третий пункт списка/);
  const tableChunk = example.find((chunk) => chunk.text.includes('| alpha | beta |'));
  assert.match(tableChunk.text, /\| gamma \| delta \|/);
  const codeChunk = example.find((chunk) => chunk.text.includes('const veryLongValue'));
  assert.match(codeChunk.text, /console\.log\('конец блока'\);/);
  assert.equal(codeChunk.oversized, true);
});

test('typed relationships are validated and exported as directed graph edges', () => {
  const {graph} = build();
  assert.ok(
    graph.edges.some(
      (edge) =>
        edge.from === '/example' &&
        edge.to === '/target' &&
        edge.kind === 'typed_relationship' &&
        edge.relationship_type === 'related_to',
    ),
  );
  assert.throws(
    () => validateRelationshipList([{type: 'unknown', target: '/target'}], 'fixture', TYPES),
    /неизвестный/,
  );
  assert.throws(
    () =>
      validateRelationshipList(
        [
          {type: 'related_to', target: '/target'},
          {type: 'related_to', target: '/target'},
        ],
        'fixture',
        TYPES,
      ),
    /дублируется/,
  );
});

test('cross-artifact integrity rejects orphan chunks, duplicate ids and broken edges', () => {
  const orphan = structuredClone(build());
  orphan.chunks[0].document_slug = '/missing';
  assert.throws(() => validateArtifacts(orphan), /неизвестный document_slug/);

  const duplicate = structuredClone(build());
  duplicate.chunks[1].chunk_id = duplicate.chunks[0].chunk_id;
  assert.throws(() => validateArtifacts(duplicate), /дублирующий chunk_id/);

  const brokenEdge = structuredClone(build());
  brokenEdge.graph.edges.push({from: '/example', to: '/missing', kind: 'markdown_link'});
  assert.throws(() => validateArtifacts(brokenEdge), /отсутствующий узел/);
});
