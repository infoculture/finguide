#!/usr/bin/env node
/**
 * Генерирует версионированные document/chunk/graph артефакты из канонического wiki.
 */
import fs from 'fs';
import path from 'path';
import {buildKnowledgeArtifacts, serializeArtifacts} from './lib/knowledge-export.mjs';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'exports');
const OUTPUTS = {
  index: path.join(OUT_DIR, 'knowledge-index.jsonl'),
  chunks: path.join(OUT_DIR, 'knowledge-chunks.jsonl'),
  graph: path.join(OUT_DIR, 'knowledge-graph.json'),
};

function writeOutputs(checkMode) {
  const artifacts = buildKnowledgeArtifacts({wikiDir: path.join(ROOT, 'wiki')});
  const serialized = serializeArtifacts(artifacts);

  if (checkMode) {
    const errors = [];
    for (const [kind, file] of Object.entries(OUTPUTS)) {
      if (!fs.existsSync(file)) {
        errors.push(`нет файла ${file}`);
        continue;
      }
      if (fs.readFileSync(file, 'utf8') !== serialized[kind]) {
        errors.push(`${path.basename(file)} не совпадает с генерируемым`);
      }
    }
    if (errors.length) throw new Error(`${errors.join('\n')}\nВыполните npm run export:knowledge`);
    console.log(
      `export-knowledge-index --check: OK (${artifacts.records.length} документов, ${artifacts.chunks.length} чанков)`,
    );
    return;
  }

  fs.mkdirSync(OUT_DIR, {recursive: true});
  for (const [kind, file] of Object.entries(OUTPUTS)) fs.writeFileSync(file, serialized[kind]);
  console.log(
    `Записано ${artifacts.records.length} документов, ${artifacts.chunks.length} чанков и ${artifacts.graph.edges.length} рёбер`,
  );
}

try {
  writeOutputs(process.argv.includes('--check'));
} catch (error) {
  console.error(`export-knowledge-index: ${error.message}`);
  process.exit(1);
}
