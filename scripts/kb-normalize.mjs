import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const wikiRoot = path.join(repoRoot, "wiki");
const today = new Date().toISOString().slice(0, 10);

const requiredFields = ["id", "title", "category", "tags", "last_updated", "source_url"];
const allowedExtraFields = new Set(["slug", "sidebar_label", "auto_generated", "operator", "url"]);

const infoSystemSections = [
  "## Описание",
  "## Оператор",
  "## Подсистемы",
  "## Точки доступа и API",
  "## Состав данных",
  "## Периодичность обновления",
  "## Ограничения и особенности доступа",
  "## Связанные системы",
  "## Вопросы и ответы",
];

const dataSourceSections = [
  "## Описание",
  "## Оператор",
  "## URL и точки доступа",
  "## Состав данных",
  "## Периодичность обновления",
  "## Ограничения и особенности",
  "## Примеры запросов",
  "## Связанные источники",
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "SUMMARY.gitbook.md") {
      files.push(fullPath);
    }
  }
  return files;
}

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9а-яё/_-]+/gi, "-")
    .replace(/\/+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function categoryForRelPath(relPath) {
  if (relPath === "README.md" || relPath.startsWith("intro/")) return "intro";
  if (relPath === "glossary.md" || relPath.startsWith("glossary/")) return "glossary";
  if (relPath.startsWith("organizations/") || relPath.startsWith("orgs/") || relPath.startsWith("power/")) return "organizations";
  if (relPath.startsWith("information-systems/") || relPath.startsWith("gis/")) return "information-systems";
  if (relPath.startsWith("budget-system/")) return "budget-system";
  if (relPath.startsWith("budget-classification/")) return "budget-classification";
  if (relPath.startsWith("data-sources/") || relPath.startsWith("opendata/")) return "data-sources";
  if (relPath.startsWith("howto/")) return "howto";
  if (relPath.startsWith("legal/")) return "legal";
  if (relPath.startsWith("reporting/")) return "reporting";
  if (relPath.startsWith("reference/") || relPath === "faq.md") return "reference";
  if (relPath.startsWith("addons/")) return "reference";
  return "general";
}

function titleFromContent(content, fallback) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---\n")) {
    return { attrs: {}, body: raw };
  }
  const closing = raw.indexOf("\n---\n", 4);
  if (closing === -1) {
    return { attrs: {}, body: raw };
  }
  const fmText = raw.slice(4, closing).trimEnd();
  const body = raw.slice(closing + 5);
  const attrs = {};
  const cleanValue = (input) => {
    let value = input.trim();
    for (let i = 0; i < 6; i += 1) {
      value = value.replace(/\\+"/g, '"').replace(/\\+'/g, "'");
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1).trim();
        continue;
      }
      break;
    }
    return value;
  };

  for (const line of fmText.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf(":");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    attrs[key] = cleanValue(value);
  }
  return { attrs, body };
}

function buildFrontmatter(attrs) {
  const yamlString = (value) => JSON.stringify(String(value ?? ""));
  const lines = ["---"];
  lines.push(`id: ${yamlString(attrs.id)}`);
  lines.push(`title: ${yamlString(attrs.title)}`);
  lines.push(`category: ${yamlString(attrs.category)}`);
  lines.push(`tags: ${attrs.tags}`);
  lines.push(`last_updated: ${yamlString(attrs.last_updated)}`);
  lines.push(`source_url: ${yamlString(attrs.source_url)}`);
  for (const [key, value] of Object.entries(attrs)) {
    if (requiredFields.includes(key)) continue;
    if (!allowedExtraFields.has(key)) continue;
    if (String(value).startsWith("[") || String(value).startsWith("{")) {
      lines.push(`${key}: ${value}`);
    } else {
      lines.push(`${key}: ${yamlString(value)}`);
    }
  }
  lines.push("---");
  return `${lines.join("\n")}\n\n`;
}

function ensureSection(content, heading, block) {
  if (content.includes(`\n${heading}\n`) || content.startsWith(`${heading}\n`)) {
    return content;
  }
  return `${content.trimEnd()}\n\n${heading}\n\n${block}\n`;
}

function normalizeFile(filePath) {
  const relPath = path.relative(wikiRoot, filePath).replaceAll(path.sep, "/");
  let raw = fs.readFileSync(filePath, "utf8");
  const { attrs, body } = parseFrontmatter(raw);
  let content = body.trimStart();

  const fallbackTitle = path.basename(relPath, ".md").replace(/-/g, " ");
  const normalized = { ...attrs };
  normalized.id ??= slugify(relPath.replace(/\.md$/i, ""));
  normalized.title ??= titleFromContent(content, fallbackTitle);
  normalized.category ??= categoryForRelPath(relPath);
  normalized.tags ??= `[${normalized.category}, knowledge-base]`;
  normalized.last_updated ??= today;
  normalized.source_url ??= "";

  if (relPath === "glossary.md") {
    content = ensureSection(content, "## Структура / состав", "См. термины ниже.");
    content = ensureSection(content, "## Где используется", "- В бюджетной отчетности и документах.");
    content = ensureSection(content, "## Связанные термины", "- Смежные термины уточняются в подфайлах раздела.");
    content = ensureSection(
      content,
      "## Вопросы и ответы",
      "**Q: Что содержит этот раздел?**\nA: Базовые термины бюджетной системы с определениями и источниками."
    );
  }

  if (relPath.startsWith("gis/") && !relPath.endsWith("/README.md")) {
    for (const section of infoSystemSections) {
      content = ensureSection(content, section, "TODO: заполнить.");
    }
  }

  if (relPath.startsWith("opendata/") && !relPath.endsWith("/README.md")) {
    for (const section of dataSourceSections) {
      if (section === "## Примеры запросов") {
        content = ensureSection(content, section, "```python\n# TODO: пример запроса\n```");
      } else {
        content = ensureSection(content, section, "TODO: заполнить.");
      }
    }
  }

  const nextRaw = `${buildFrontmatter(normalized)}${content.trimEnd()}\n`;
  if (nextRaw !== raw) {
    fs.writeFileSync(filePath, nextRaw, "utf8");
    return true;
  }
  return false;
}

function main() {
  const files = walk(wikiRoot);
  let changed = 0;
  for (const file of files) {
    if (normalizeFile(file)) changed += 1;
  }
  console.log(`Normalized ${changed}/${files.length} markdown files`);
}

main();
