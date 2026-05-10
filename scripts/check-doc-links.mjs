import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const wikiRoot = path.join(repoRoot, "wiki");

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "SUMMARY.gitbook.md") {
      files.push(full);
    }
  }
  return files;
}

function resolveDocLink(fromFile, rawTarget) {
  const target = rawTarget.split("#")[0].trim();
  if (!target) return null;
  if (target.startsWith("http://") || target.startsWith("https://")) return null;
  if (target.startsWith("mailto:")) return null;
  if (target.startsWith("/")) return path.join(wikiRoot, `${target.replace(/^\//, "")}.md`);

  const fromDir = path.dirname(fromFile);
  const base = path.resolve(fromDir, target);
  const candidates = [];
  if (base.endsWith(".md")) {
    candidates.push(base);
  } else {
    candidates.push(`${base}.md`);
    candidates.push(path.join(base, "README.md"));
  }
  return candidates;
}

function findMarkdownLinks(raw) {
  const links = [];
  const regex = /\[[^\]]+\]\(([^)]+)\)/g;
  let match;
  while ((match = regex.exec(raw)) !== null) {
    links.push(match[1]);
  }
  return links;
}

function main() {
  const files = walk(wikiRoot);
  const errors = [];

  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const rel = path.relative(repoRoot, file).replaceAll(path.sep, "/");
    const links = findMarkdownLinks(raw);
    for (const link of links) {
      const resolved = resolveDocLink(file, link);
      if (!resolved) continue;
      const candidates = Array.isArray(resolved) ? resolved : [resolved];
      const found = candidates.some((candidate) => fs.existsSync(candidate));
      if (!found) {
        errors.push(`${rel}: broken link '${link}'`);
      }
    }
  }

  if (errors.length > 0) {
    console.error("Link check failed:");
    for (const err of errors) console.error(`- ${err}`);
    process.exit(1);
  }

  console.log(`Link check passed for ${files.length} files`);
}

main();
