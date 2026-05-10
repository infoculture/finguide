import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const wikiRoot = path.join(repoRoot, "wiki");
const today = new Date().toISOString().slice(0, 10);

const sprint1 = [
  // glossary
  "glossary/budget-system.md",
  "glossary/budget-levels.md",
  "glossary/budget-process.md",
  "glossary/treasury-execution.md",
  "glossary/extrabudgetary-funds.md",
  "glossary/kbk.md",
  "glossary/kvr.md",
  "glossary/kosgu.md",
  "glossary/grbs.md",
  "glossary/pbs.md",
  "glossary/ankv.md",
  "glossary/budget-estimates.md",
  "glossary/lbo.md",
  "glossary/fcd-plan.md",
  "glossary/procurement-44fz.md",
  "glossary/procurement-223fz.md",
  "glossary/okpd.md",
  "glossary/okved.md",
  "glossary/subsidies.md",
  "glossary/grants.md",
  "glossary/transfers.md",
  "glossary/npa-subsidy.md",
  "glossary/gov-programs.md",
  "glossary/national-projects.md",
  "glossary/fcp.md",
  "glossary/institution-types.md",
  "glossary/gup-mup.md",
  "glossary/state-corporations.md",
  // organizations
  "organizations/minfin.md",
  "organizations/federal-treasury.md",
  "organizations/cbr.md",
  "organizations/fns.md",
  "organizations/fas.md",
  "organizations/accounts-chamber.md",
  "organizations/minjust.md",
  "organizations/minekonomiki.md",
  "organizations/giis-eb.md",
  "organizations/zakupki.md",
  "organizations/bus-gov.md",
  "organizations/gasu.md",
  "organizations/programs-gov.md",
  "organizations/sozd.md",
  "organizations/sfr.md",
  "organizations/ffoms.md",
  // data-sources/federal
  "data-sources/federal/budget-gov-ru-datasets.md",
  "data-sources/federal/minfin-opendata.md",
  "data-sources/federal/roskazna-reports.md",
  "data-sources/federal/roskazna-datamarts.md",
  "data-sources/federal/zakupki-xml.md",
  "data-sources/federal/bus-opendata.md",
  "data-sources/federal/gasu-programs.md",
  "data-sources/federal/nalog-statistics.md",
  "data-sources/federal/cbr-statistics.md",
  // howto/access
  "howto/access/budget-gov-api.md",
  "howto/access/minfin-api.md",
  "howto/access/zakupki-ftp.md",
  "howto/access/roskazna-reports.md",
  "howto/access/bus-opendata.md",
  "howto/access/cbr-api.md",
  "howto/access/regional-portals.md",
];

const sprint2 = [
  "budget-classification/income-codes.md",
  "budget-classification/expense-codes.md",
  "budget-classification/kosgu-reference.md",
  "budget-classification/kvr-kosgu-mapping.md",
  "budget-classification/target-articles.md",
  "budget-classification/sgf-2014.md",
  "howto/analysis/kbc-decoding.md",
  "howto/analysis/budget-execution.md",
  "howto/analysis/regional-budget-analysis.md",
  "howto/analysis/procurement-analysis.md",
  "howto/analysis/subsidy-tracking.md",
  "howto/analysis/gov-programs.md",
  "howto/analysis/debt-analysis.md",
  "howto/analysis/ngo-funding.md",
  "howto/analysis/time-series.md",
  "reporting/0503117.md",
  "reporting/0503317.md",
  "reporting/0507011.md",
  "reporting/0503387.md",
  "reporting/pfhd.md",
  "reporting/budget-estimates.md",
  "reporting/treasury-reports.md",
  "legal/budget-code.md",
  "legal/44-fz.md",
  "legal/223-fz.md",
  "legal/open-data-law.md",
  "legal/budget-classification-orders.md",
  "legal/accounting-instructions.md",
];

function titleFromFile(relPath) {
  const name = path.basename(relPath, ".md");
  return name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function categoryFromPath(relPath) {
  if (relPath.startsWith("glossary/")) return "glossary";
  if (relPath.startsWith("organizations/")) return "organizations";
  if (relPath.startsWith("data-sources/")) return "data-sources";
  if (relPath.startsWith("budget-classification/")) return "budget-classification";
  if (relPath.startsWith("reporting/")) return "reporting";
  if (relPath.startsWith("legal/")) return "legal";
  if (relPath.startsWith("howto/")) return "howto";
  return "general";
}

function idFromPath(relPath) {
  return relPath.replace(/\.md$/, "").replace(/\//g, "-");
}

function templateFor(relPath) {
  if (relPath.startsWith("glossary/")) {
    return `## Определение

TODO: добавить нормативное определение.

## Структура / состав

TODO: описать состав и элементы.

## Где используется

- TODO: перечислить системы и документы.

## Связанные термины

- TODO: добавить ссылки на связанные термины.

## Вопросы и ответы

**Q: Что означает этот термин?**
A: TODO: краткое объяснение.
`;
  }

  if (relPath.startsWith("data-sources/")) {
    return `## Описание

TODO: краткое описание источника.

## Оператор

TODO: указать ведомство или организацию-оператора.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| TODO | TODO | TODO |

## Состав данных

TODO: перечислить ключевые сущности и поля.

## Периодичность обновления

TODO: указать частоту и задержки.

## Ограничения и особенности

TODO: указать ограничения доступа и лицензии.

## Примеры запросов

\`\`\`python
# TODO: пример запроса
\`\`\`

## Связанные источники

- TODO: добавить ссылки.
`;
  }

  if (relPath.startsWith("organizations/")) {
    return `## Описание

TODO: назначение организации.

## Функции

TODO: ключевые функции в системе госфинансов.

## Регулируемые данные

TODO: какие данные формирует или публикует организация.

## Официальные ресурсы

- TODO: сайт
- TODO: API/реестры

## Вопросы и ответы

**Q: За что отвечает эта организация?**
A: TODO: краткий ответ.
`;
  }

  if (relPath.startsWith("howto/")) {
    return `## Задача

TODO: формулировка практической задачи.

## Шаги

1. TODO
2. TODO
3. TODO

## Пример

\`\`\`python
# TODO: пример
\`\`\`

## Подводные камни

- TODO
`;
  }

  return `## Описание

TODO: заполнить содержимое раздела.
`;
}

function createFile(relPath) {
  const absPath = path.join(wikiRoot, relPath);
  if (fs.existsSync(absPath)) return false;
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  const content = `---
id: "${idFromPath(relPath)}"
title: "${titleFromFile(relPath)}"
category: "${categoryFromPath(relPath)}"
tags: [${categoryFromPath(relPath)}, sprint-scaffold]
last_updated: "${today}"
source_url: ""
---

# ${titleFromFile(relPath)}

${templateFor(relPath)}`;
  fs.writeFileSync(absPath, content, "utf8");
  return true;
}

function main() {
  let created = 0;
  for (const rel of [...sprint1, ...sprint2]) {
    if (createFile(rel)) created += 1;
  }
  console.log(`Created ${created} scaffold files`);
}

main();
