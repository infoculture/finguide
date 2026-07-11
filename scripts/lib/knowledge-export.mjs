import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import GithubSlugger from 'github-slugger';
import matter from 'gray-matter';

export const SCHEMA_VERSION = 1;
export const DEFAULT_SITE = 'https://infoculture.github.io/finguide';
export const MAX_CHUNK_CHARS = 6000;

const QUALITY_FIELDS = [
  'data_completeness',
  'machine_readability',
  'legal_significance',
  'update_lag',
  'archive_depth',
  'license_or_terms',
];
const DISCOVERY_FIELDS = ['audience_level', 'data_domain', 'jurisdiction_level'];

export function loadRelationshipTypes(root = process.cwd()) {
  const file = path.join(root, 'scripts', 'relationship-types.json');
  return new Set(JSON.parse(fs.readFileSync(file, 'utf8')));
}

export function stableStringify(value) {
  if (value instanceof Date) return JSON.stringify(value.toISOString().slice(0, 10));
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  const keys = Object.keys(value).sort();
  return `{${keys.map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
}

function walkMarkdown(dir, out = []) {
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const file = path.join(dir, ent.name);
    if (ent.isDirectory()) walkMarkdown(file, out);
    else if (ent.name.endsWith('.md')) out.push(file);
  }
  return out;
}

function docPathToSlug(relPosix) {
  const base = relPosix.replace(/\.md$/i, '').replace(/\/README$/i, '');
  if (base.toLowerCase() === 'readme') return '/';
  return `/${base}`;
}

function dateOrNull(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === 'string' && value.trim()) return value.trim();
  return null;
}

function scalarOrNull(value) {
  return value === undefined || value === null || value === '' ? null : value;
}

function sortedStrings(value) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((item) => typeof item === 'string'))].sort();
}

function extractInternalLinks(markdown) {
  const links = new Set();
  const re = /\]\((\/[^)\s#]*)(?:#[^)\s]*)?(?:\s+"[^"]*")?\)/g;
  let match;
  while ((match = re.exec(markdown))) {
    const href = match[1];
    if (!href || href === '/') continue;
    if (/^\/(?:assets|img)\//.test(href) || /\.[a-z0-9]{2,8}$/i.test(href)) continue;
    links.add(href);
  }
  return [...links].sort();
}

function stripHeadingMarkdown(value) {
  return value
    .replace(/\s+\{#[A-Za-z][\w.:-]*\}\s*$/, '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/`+([^`]+)`+/g, '$1')
    .replace(/[~*_]/g, '')
    .trim();
}

function parseHeading(line) {
  const match = /^(#{1,6})[ \t]+(.+?)[ \t]*#*[ \t]*$/.exec(line);
  if (!match) return null;
  const explicit = /\s+\{#([A-Za-z][\w.:-]*)\}\s*$/.exec(match[2]);
  const rawText = explicit ? match[2].slice(0, explicit.index).trim() : match[2].trim();
  return {
    level: match[1].length,
    rawText,
    plainText: stripHeadingMarkdown(rawText),
    explicitAnchor: explicit?.[1] ?? null,
  };
}

function splitBlocks(text) {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  const blocks = [];
  let current = [];
  let fence = null;
  const flush = () => {
    const value = current.join('\n').trim();
    if (value) blocks.push(value);
    current = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fenceMatch = /^ {0,3}(`{3,}|~{3,})/.exec(line);
    if (fenceMatch) {
      const marker = fenceMatch[1][0];
      if (!fence) fence = marker;
      else if (marker === fence) fence = null;
      current.push(line);
      continue;
    }
    if (fence) {
      current.push(line);
      continue;
    }
    if (line.trim() !== '') {
      current.push(line);
      continue;
    }

    const currentIsList = current.some((item) => /^ {0,3}(?:[-+*]|\d+[.)])[ \t]+/.test(item));
    let next = i + 1;
    while (next < lines.length && lines[next].trim() === '') next++;
    const nextContinuesList =
      next < lines.length &&
      (/^ {0,3}(?:[-+*]|\d+[.)])[ \t]+/.test(lines[next]) || /^ {2,}\S/.test(lines[next]));
    if (currentIsList && nextContinuesList) current.push(line);
    else flush();
  }
  flush();
  return blocks;
}

function packBlocks(blocks, prefix, maxChars) {
  const chunks = [];
  const prefixText = prefix ? `${prefix}\n\n` : '';
  const bodyLimit = Math.max(1, maxChars - prefixText.length);
  let current = [];
  let currentLength = 0;
  const flush = () => {
    if (!current.length) return;
    chunks.push({text: `${prefixText}${current.join('\n\n')}`.trim(), oversized: false});
    current = [];
    currentLength = 0;
  };

  for (const block of blocks) {
    if (block.length > bodyLimit) {
      flush();
      chunks.push({text: `${prefixText}${block}`.trim(), oversized: true});
      continue;
    }
    const separator = current.length ? 2 : 0;
    if (current.length && currentLength + separator + block.length > bodyLimit) flush();
    current.push(block);
    currentLength += (current.length > 1 ? 2 : 0) + block.length;
  }
  flush();
  if (!chunks.length && prefix) chunks.push({text: prefix.trim(), oversized: prefix.length > maxChars});
  return chunks;
}

export function sectionChunks(markdown, {maxChunkChars = MAX_CHUNK_CHARS} = {}) {
  const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
  const slugger = new GithubSlugger();
  const sections = [];
  const headingStack = [];
  let intro = [];
  let current = null;
  let fence = null;
  let skippedDocumentH1 = false;
  const finishCurrent = () => {
    if (!current) return;
    sections.push(current);
    current = null;
  };

  for (const line of lines) {
    const fenceMatch = /^ {0,3}(`{3,}|~{3,})/.exec(line);
    const heading = fence ? null : parseHeading(line);
    if (heading?.level === 1 && !skippedDocumentH1 && !current) {
      skippedDocumentH1 = true;
      continue;
    }
    if (heading && heading.level >= 2) {
      if (!sections.length && !current) {
        const introText = intro.join('\n').trim();
        if (introText) sections.push({heading: null, body: introText});
        intro = [];
      }
      finishCurrent();
      headingStack.length = heading.level - 2;
      headingStack[heading.level - 2] = heading.plainText;
      current = {
        heading: {
          ...heading,
          anchor: heading.explicitAnchor ?? slugger.slug(heading.plainText),
          path: headingStack.filter(Boolean),
          line: `${'#'.repeat(heading.level)} ${heading.rawText}`,
        },
        bodyLines: [],
      };
      continue;
    }
    if (current) current.bodyLines.push(line);
    else intro.push(line);
    if (fenceMatch) {
      const marker = fenceMatch[1][0];
      if (!fence) fence = marker;
      else if (marker === fence) fence = null;
    }
  }

  if (current) finishCurrent();
  else {
    const introText = intro.join('\n').trim();
    if (introText) sections.push({heading: null, body: introText});
  }

  const output = [];
  for (const section of sections) {
    const body = section.bodyLines ? section.bodyLines.join('\n').trim() : section.body;
    const packed = packBlocks(splitBlocks(body), section.heading?.line ?? '', maxChunkChars);
    for (let part = 0; part < packed.length; part++) {
      output.push({
        headingPath: section.heading?.path ?? [],
        headingAnchor: section.heading?.anchor ?? null,
        part,
        text: packed[part].text,
        oversized: packed[part].oversized,
      });
    }
  }
  return output;
}

export function validateRelationshipList(value, context, allowedTypes) {
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value)) throw new Error(`${context}: relationships должно быть массивом`);
  const seen = new Set();
  const normalized = [];
  for (let i = 0; i < value.length; i++) {
    const relation = value[i];
    if (!relation || typeof relation !== 'object' || Array.isArray(relation)) {
      throw new Error(`${context}: relationships[${i}] должно быть объектом {type, target}`);
    }
    if (Object.keys(relation).sort().join(',') !== 'target,type') {
      throw new Error(`${context}: relationships[${i}] должно содержать ровно поля type и target`);
    }
    const {type, target} = relation;
    if (typeof type !== 'string' || !allowedTypes.has(type)) {
      throw new Error(
        `${context}: неизвестный relationships[${i}].type ${JSON.stringify(type)}; допустимо: ${[...allowedTypes].sort().join(', ')}`,
      );
    }
    if (typeof target !== 'string' || !target.startsWith('/')) {
      throw new Error(`${context}: relationships[${i}].target должен быть строкой-slug, начинающейся с /`);
    }
    const key = `${type}|${target}`;
    if (seen.has(key)) throw new Error(`${context}: дублируется relationship ${type} → ${target}`);
    seen.add(key);
    normalized.push({type, target});
  }
  return normalized.sort((a, b) => `${a.type}|${a.target}`.localeCompare(`${b.type}|${b.target}`));
}

function canonicalInternalLink(href, slugs) {
  if (slugs.has(href)) return href;
  if (href.length > 1 && href.endsWith('/') && slugs.has(href.slice(0, -1))) return href.slice(0, -1);
  return null;
}

function chunkId(slug, headingPath, headingAnchor, part) {
  const key = `${slug}\n${headingPath.join('\n')}\n${headingAnchor ?? ''}\n${part}`;
  return `chunk-${crypto.createHash('sha256').update(key).digest('hex').slice(0, 20)}`;
}

export function buildKnowledgeArtifacts({
  wikiDir = path.join(process.cwd(), 'wiki'),
  site = DEFAULT_SITE,
  maxChunkChars = MAX_CHUNK_CHARS,
  relationshipTypes = loadRelationshipTypes(process.cwd()),
} = {}) {
  const sourceDocs = [];
  for (const file of walkMarkdown(wikiDir).sort()) {
    const rel = path.relative(wikiDir, file).split(path.sep).join('/');
    if (rel.endsWith('-template.md')) continue;
    const {data, content} = matter(fs.readFileSync(file, 'utf8'));
    const slug = typeof data.slug === 'string' && data.slug.startsWith('/') ? data.slug : docPathToSlug(rel);
    sourceDocs.push({
      rel,
      content,
      data,
      slug,
      path: `wiki/${rel}`,
      internalLinks: extractInternalLinks(content),
      related: sortedStrings(data.related_pages),
      relationships: validateRelationshipList(data.relationships, rel, relationshipTypes),
    });
  }

  const slugs = new Set();
  for (const doc of sourceDocs) {
    if (slugs.has(doc.slug)) throw new Error(`${doc.rel}: дублирующий канонический slug ${doc.slug}`);
    slugs.add(doc.slug);
  }
  for (const doc of sourceDocs) {
    for (const target of doc.related) {
      if (!slugs.has(target)) throw new Error(`${doc.rel}: related_pages ссылается на неизвестный slug ${target}`);
    }
    for (const relation of doc.relationships) {
      if (!slugs.has(relation.target)) {
        throw new Error(`${doc.rel}: relationship ${relation.type} ссылается на неизвестный slug ${relation.target}`);
      }
    }
  }

  const records = [];
  const chunks = [];
  const nodes = [];
  const edges = [];
  for (const doc of sourceDocs) {
    const {data} = doc;
    const record = {
      schema_version: SCHEMA_VERSION,
      path: doc.path,
      title: scalarOrNull(data.title),
      sidebar_label: scalarOrNull(data.sidebar_label),
      description: scalarOrNull(data.description),
      slug: doc.slug,
      url: `${site}${doc.slug}`,
      content_type: scalarOrNull(data.content_type),
      entity_type: scalarOrNull(data.entity_type),
      tags: sortedStrings(data.tags),
      aliases: sortedStrings(data.aliases),
      related_pages: doc.related,
      relationships: doc.relationships,
      internal_links: doc.internalLinks,
      source_url: scalarOrNull(data.source_url),
      last_verified: dateOrNull(data.last_verified),
      rag_priority: scalarOrNull(data.rag_priority),
      draft: data.draft === true,
      last_updated: dateOrNull(data.last_updated),
    };
    for (const field of DISCOVERY_FIELDS) record[field] = scalarOrNull(data[field]);
    for (const field of QUALITY_FIELDS) record[field] = scalarOrNull(data[field]);
    records.push(record);
    nodes.push({slug: doc.slug, path: doc.path, title: record.title});

    const docSections = sectionChunks(doc.content, {maxChunkChars});
    for (let ordinal = 0; ordinal < docSections.length; ordinal++) {
      const section = docSections[ordinal];
      const anchorSuffix = section.headingAnchor ? `#${section.headingAnchor}` : '';
      chunks.push({
        schema_version: SCHEMA_VERSION,
        chunk_id: chunkId(doc.slug, section.headingPath, section.headingAnchor, section.part),
        document_slug: doc.slug,
        path: doc.path,
        url: `${site}${doc.slug}${anchorSuffix}`,
        title: record.title,
        heading_path: section.headingPath,
        heading_anchor: section.headingAnchor,
        ordinal,
        text: section.text,
        oversized: section.oversized,
        content_type: record.content_type,
        entity_type: record.entity_type,
        tags: record.tags,
        audience_level: record.audience_level,
        data_domain: record.data_domain,
        jurisdiction_level: record.jurisdiction_level,
        rag_priority: record.rag_priority,
        draft: record.draft,
        last_updated: record.last_updated,
        last_verified: record.last_verified,
      });
    }

    for (const target of doc.related) edges.push({from: doc.slug, to: target, kind: 'related_pages'});
    for (const href of doc.internalLinks) {
      const target = canonicalInternalLink(href, slugs);
      if (target) edges.push({from: doc.slug, to: target, kind: 'markdown_link'});
    }
    for (const relation of doc.relationships) {
      edges.push({
        from: doc.slug,
        to: relation.target,
        kind: 'typed_relationship',
        relationship_type: relation.type,
      });
    }
  }

  records.sort((a, b) => a.path.localeCompare(b.path));
  chunks.sort((a, b) => a.path.localeCompare(b.path) || a.ordinal - b.ordinal);
  nodes.sort((a, b) => a.slug.localeCompare(b.slug));
  const uniqueEdges = new Map();
  for (const edge of edges) uniqueEdges.set(stableStringify(edge), edge);
  const sortedEdges = [...uniqueEdges.values()].sort((a, b) =>
    `${a.from}|${a.to}|${a.kind}|${a.relationship_type ?? ''}`.localeCompare(
      `${b.from}|${b.to}|${b.kind}|${b.relationship_type ?? ''}`,
    ),
  );
  const graph = {schema_version: SCHEMA_VERSION, nodes, edges: sortedEdges};
  const artifacts = {records, chunks, graph};
  validateArtifacts(artifacts);
  return artifacts;
}

export function validateArtifacts({records, chunks, graph}) {
  const docs = new Map(records.map((record) => [record.slug, record]));
  const ids = new Set();
  for (const record of records) {
    if (record.schema_version !== SCHEMA_VERSION) throw new Error(`${record.path}: неверный schema_version`);
  }
  for (const chunk of chunks) {
    if (chunk.schema_version !== SCHEMA_VERSION) throw new Error(`${chunk.chunk_id}: неверный schema_version`);
    if (ids.has(chunk.chunk_id)) throw new Error(`дублирующий chunk_id ${chunk.chunk_id}`);
    ids.add(chunk.chunk_id);
    const doc = docs.get(chunk.document_slug);
    if (!doc) throw new Error(`${chunk.chunk_id}: неизвестный document_slug ${chunk.document_slug}`);
    if (chunk.draft !== doc.draft) throw new Error(`${chunk.chunk_id}: draft не совпадает с документом`);
    if (chunk.content_type !== doc.content_type || chunk.entity_type !== doc.entity_type) {
      throw new Error(`${chunk.chunk_id}: типы не совпадают с документом`);
    }
    if (chunk.url !== doc.url && !chunk.url.startsWith(`${doc.url}#`)) {
      throw new Error(`${chunk.chunk_id}: URL не принадлежит документу ${doc.url}`);
    }
  }
  if (graph.schema_version !== SCHEMA_VERSION) throw new Error('knowledge-graph: неверный schema_version');
  const nodeSlugs = new Set(graph.nodes.map((node) => node.slug));
  for (const edge of graph.edges) {
    if (!nodeSlugs.has(edge.from) || !nodeSlugs.has(edge.to)) {
      throw new Error(`knowledge-graph: ребро ${edge.from} → ${edge.to} ссылается на отсутствующий узел`);
    }
  }
}

export function serializeArtifacts({records, chunks, graph}) {
  return {
    index: `${records.map(stableStringify).join('\n')}\n`,
    chunks: `${chunks.map(stableStringify).join('\n')}\n`,
    graph: `${stableStringify(graph)}\n`,
  };
}
