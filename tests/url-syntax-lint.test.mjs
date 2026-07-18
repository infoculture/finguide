import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {lintMarkdownUrls, validateExternalUrl} from '../scripts/lib/url-syntax.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES = path.join(HERE, 'fixtures', 'url-syntax');

function lintFixture(name) {
  const parsed = matter(fs.readFileSync(path.join(FIXTURES, name), 'utf8'));
  return lintMarkdownUrls(parsed.content, parsed.data);
}

test('valid encoded Cyrillic and titled links pass', () => {
  assert.deepEqual(lintFixture('valid.md'), []);
});

test('encoded editorial annotation is rejected', () => {
  assert.match(lintFixture('invalid-annotation.md')[0].reason, /примечан|пробел/u);
});

test('raw annotation after a Markdown URL is rejected', () => {
  assert.ok(lintFixture('invalid-whitespace.md').some((issue) => /Markdown destination/u.test(issue.reason)));
});

test('network reachability is not part of syntax validation', () => {
  assert.deepEqual(validateExternalUrl('https://example.invalid/unreachable'), []);
});
