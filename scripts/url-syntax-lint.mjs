#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import {lintMarkdownUrls} from './lib/url-syntax.mjs';

const ROOT = path.join(process.cwd(), 'wiki');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (entry.name.endsWith('.md')) out.push(file);
  }
  return out;
}

let errors = 0;
for (const file of walk(ROOT).sort()) {
  const rel = path.relative(process.cwd(), file).split(path.sep).join('/');
  if (rel.endsWith('-template.md')) continue;
  const raw = fs.readFileSync(file, 'utf8');
  let parsed;
  try {
    parsed = matter(raw);
  } catch (error) {
    console.error(`${rel}: невозможно проверить URL — ${error.message}`);
    errors++;
    continue;
  }
  for (const issue of lintMarkdownUrls(parsed.content, parsed.data)) {
    const line = raw.slice(0, Math.max(0, raw.indexOf(issue.url))).split('\n').length;
    console.error(`${rel}:${line}: ${issue.reason}: ${issue.url}`);
    errors++;
  }
}

if (errors) {
  console.error(`url-syntax-lint: ошибок: ${errors}`);
  process.exit(1);
}
console.log('url-syntax-lint: OK');
