#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(process.cwd(), 'wiki');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (entry.name.endsWith('.md')) out.push(file);
  }
  return out;
}

let changed = 0;
let replacements = 0;
for (const file of walk(ROOT).sort()) {
  const raw = fs.readFileSync(file, 'utf8');
  const updated = raw.replace(
    /https:\/\/(bo\.nalog\.ru|rosim\.gov\.ru)\/%20\([^\s|)]+\)?/giu,
    (_, host) => {
      replacements++;
      return `https://${host}/`;
    },
  );
  if (updated === raw) continue;
  fs.writeFileSync(file, updated, 'utf8');
  changed++;
}
console.log(`fix-malformed-external-urls: файлов ${changed}, замен ${replacements}`);
