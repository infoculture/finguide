# Change: phase-10.3 — корпус и ИИ-оценка (завершено)

Связанная дорожная карта: [_dev/final_report.md](../../_dev/final_report.md), раздел 10.3.

**Статус:** закрыто по состоянию на 2026-05-12. Последующие улучшения (DocSearch, векторный поиск, расширение howto) оформляйте отдельными change или задачами в бэклоге.

## Что сделано (итог)

| Направление | Результат |
| --- | --- |
| How-to 10–15 | В `wiki/howto/` **более 15** рабочих страниц (доступ, анализ, автоматизация); цель из п. 13 отчёта выполнена. |
| Q&A / eval | [`tests/qa-validation.jsonl`](../../tests/qa-validation.jsonl) — **150** сценариев; схема и slug проверяются `npm run lint:qa`. |
| Граф знаний | Обогащение `related_pages` по разделу «Бюджетная система» и федеральным источникам; артефакты [`exports/knowledge-index.jsonl`](../../exports/knowledge-index.jsonl), [`exports/knowledge-graph.json`](../../exports/knowledge-graph.json). |
| Госкорпорации / госучастие | Навигатор [`/reporting/state-sector-overview`](../../wiki/reporting/state-sector-overview.md) и **три** карточки источников: [`e-disclosure-ru`](../../wiki/data-sources/federal/catalog/e-disclosure-ru.md), [`gazprom-investor-disclosure`](../../wiki/data-sources/federal/catalog/gazprom-investor-disclosure.md), [`rzd-holding-disclosure`](../../wiki/data-sources/federal/catalog/rzd-holding-disclosure.md) (критерий плана наполнения — стартовый набор). |
| Mermaid | Подключён `@docusaurus/theme-mermaid`; схемы на [`data-map`](../../wiki/intro/data-map.md) и [`structure`](../../wiki/budget-system/structure.md). |
| Регрессия retrieval | Скрипт [`scripts/qa-retrieval-regression.mjs`](../../scripts/qa-retrieval-regression.mjs), команда **`npm run qa:retrieval`**; в CI после `lint:qa`. Индекс дополнен полями `sidebar_label` и `aliases`. |
| Документация ограничений | Обновлены [`KNOWLEDGE.md`](../../KNOWLEDGE.md), [`wiki/intro/rag-guide.md`](../../wiki/intro/rag-guide.md), [`llms.txt`](../../llms.txt). |
| Качество метаданных | Исправлены заглушки `description` у [`giis-eb`](../../wiki/information-systems/federal/giis-eb.md), [`international-standards`](../../wiki/reference/international-standards.md); уточнён [`getting-started`](../../wiki/intro/getting-started.md). |

## Вынесено за рамки этой дельты

- **DocSearch** — после ключей ([`/reference/docsearch-setup`](../../wiki/reference/docsearch-setup.md)).
- **Векторный поиск** — опционально, см. [`openspec/specs/search-discovery/spec.md`](../../specs/search-discovery/spec.md).

## Исходные критерии выхода (mapping)

1. **Q&A покрывает типы вопросов** — выполнено набором из 150 JSONL-строк (термины, источники, ИС, отчётность, howto, legal, справочники).
2. **Измеримая регрессия retrieval** — `npm run qa:retrieval` (лексический baseline поверх `qa-validation.jsonl` и индекса).
3. **Ограничения корпуса задокументированы** — `KNOWLEDGE.md` и `rag-guide.md`.
