import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const wikiRoot = path.join(repoRoot, "wiki");
const today = new Date().toISOString().slice(0, 10);

function writeFile(target, body) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, body, "utf8");
}

function generateBudgetClassificationOverview() {
  const filePath = path.join(wikiRoot, "budget-classification", "overview.md");
  const content = `---
id: budget-classification-overview
title: Обзор бюджетной классификации
category: budget-classification
tags: [budget-classification, auto-generated]
last_updated: ${today}
source_url: ""
auto_generated: true
---

# Обзор бюджетной классификации

## Назначение

Этот файл автоматически поддерживает базовый каркас раздела бюджетной классификации.

## Ключевые коды

- КБК
- КВР
- КОСГУ

## Обновление

Содержимое обновляется скриптом \`npm run docs:refresh-generated\`.
`;
  writeFile(filePath, content);
}

function generateFederalDataSourcesIndex() {
  const legacyDir = path.join(wikiRoot, "opendata", "datatypes");
  const target = path.join(wikiRoot, "data-sources", "federal", "README.md");
  const files = fs
    .readdirSync(legacyDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && entry.name !== "README.md")
    .map((entry) => entry.name.replace(/\.md$/, ""))
    .sort();

  const links = files.map((name) => `- [${name}](../../opendata/datatypes/${name}.md)`).join("\n");
  const content = `---
id: data-sources-federal-readme
title: Федеральные источники данных
category: data-sources
tags: [data-sources, federal, auto-generated]
last_updated: ${today}
source_url: ""
auto_generated: true
---

# Федеральные источники данных

Индекс формируется автоматически по legacy-наборам \`wiki/opendata/datatypes\`.

## Наборы

${links}
`;

  writeFile(target, content);
}

function generateReferenceLinks() {
  const target = path.join(wikiRoot, "reference", "links.md");
  const links = [
    ["Единый портал бюджетной системы", "https://budget.gov.ru"],
    ["Минфин России", "https://minfin.gov.ru"],
    ["Федеральное казначейство", "https://roskazna.gov.ru"],
    ["ЕИС в сфере закупок", "https://zakupki.gov.ru"],
    ["Банк России API", "https://www.cbr.ru/fintech/api/"],
  ];
  const items = links.map(([label, url]) => `- [${label}](${url})`).join("\n");
  const content = `---
id: reference-links
title: Актуальные ссылки
category: reference
tags: [reference, links, auto-generated]
last_updated: ${today}
source_url: ""
auto_generated: true
---

# Актуальные ссылки

## Основные порталы

${items}
`;
  writeFile(target, content);
}

function updateLog() {
  const target = path.join(wikiRoot, "reference", "update-log.md");
  const marker = `## ${today}`;
  let body = "";
  if (fs.existsSync(target)) {
    body = fs.readFileSync(target, "utf8");
  }
  if (!body.includes(marker)) {
    body = `---
id: reference-update-log
title: Лог обновлений
category: reference
tags: [reference, updates, auto-generated]
last_updated: ${today}
source_url: ""
auto_generated: true
---

# Лог обновлений

${marker}

- Автоматически обновлены generated-разделы knowledge base.
\n${body.replace(/^---[\s\S]*?---\n*/m, "").trim()}\n`;
  }
  writeFile(target, body);
}

function main() {
  generateBudgetClassificationOverview();
  generateFederalDataSourcesIndex();
  generateReferenceLinks();
  updateLog();
  console.log("Generated content refreshed");
}

main();
