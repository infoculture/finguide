import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const wikiRoot = path.join(repoRoot, "wiki");
const requiredFields = ["id", "title", "category", "tags", "last_updated", "source_url"];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "SUMMARY.gitbook.md") {
      out.push(fullPath);
    }
  }
  return out;
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---\n")) return null;
  const close = raw.indexOf("\n---\n", 4);
  if (close === -1) return null;
  const block = raw.slice(4, close);
  const attrs = {};
  for (const line of block.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    attrs[key] = value;
  }
  return attrs;
}

function main() {
  const files = walk(wikiRoot);
  const issues = [];

  for (const file of files) {
    const rel = path.relative(repoRoot, file).replaceAll(path.sep, "/");
    const raw = fs.readFileSync(file, "utf8");
    const attrs = parseFrontmatter(raw);
    if (!attrs) {
      issues.push(`${rel}: missing frontmatter`);
      continue;
    }
    for (const field of requiredFields) {
      if (!(field in attrs)) {
        issues.push(`${rel}: missing required field '${field}'`);
      }
    }
  }

  if (issues.length > 0) {
    console.error("Metadata validation failed:");
    for (const issue of issues) console.error(`- ${issue}`);
    process.exit(1);
  }

  console.log(`Metadata validation passed for ${files.length} files`);
}

main();
