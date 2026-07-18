## 1. Контракт и fixtures

- [x] 1.1 Добавить репрезентативные Markdown-fixtures: кириллические и повторяющиеся заголовки, введение до первого H2, длинный раздел, таблица, список, fenced code block и `draft: true`.
- [x] 1.2 Зафиксировать `schema_version: 1`, поля document/chunk/graph и правила совместимости в `KNOWLEDGE.md` и `wiki/intro/rag-guide.md`.
- [x] 1.3 Выбрать и документировать числовой предел чанка и fallback для одиночного oversized block на основе fixtures и QA-корпуса.

## 2. Экспорт документов и чанков

- [x] 2.1 Рефакторизовать `scripts/export-knowledge-index.mjs` на общую фазу разбора документов без изменения существующих значений полей.
- [x] 2.2 Добавить `schema_version` и согласованные discovery/quality metadata в каждую запись `exports/knowledge-index.jsonl`, сериализуя отсутствующие опциональные значения как `null`.
- [x] 2.3 Реализовать детерминированный section-aware экспорт `exports/knowledge-chunks.jsonl` с полями из design.
- [x] 2.4 Реализовать Docusaurus-совместимые якоря и стабильные `chunk_id`, включая повторяющиеся и кириллические заголовки.
- [x] 2.5 Обеспечить сохранность fenced code blocks, таблиц и списков при дополнительном делении длинных секций.

## 3. Типизированные отношения и граф

- [x] 3.1 Добавить единый allowlist типов `relationships` и проверку формы `{type, target}`.
- [x] 3.2 Проверять, что каждый `relationships[].target` существует среди канонических slug и что дубликаты одного ребра диагностируются.
- [x] 3.3 Добавить `schema_version` в `exports/knowledge-graph.json` и экспорт typed edges с `kind: typed_relationship` и `relationship_type`, сохранив текущие виды рёбер.
- [x] 3.4 Обновить `AGENTS.md` и релевантные шаблоны карточек опциональным примером `relationships`, не делая поле обязательным для всего корпуса.
- [x] 3.5 Провести пилот на согласованном небольшом наборе карточек минимум трёх entity types и проверить направления рёбер ревьюером предметной области.

## 4. Проверки и документация потребителей

- [x] 4.1 Расширить `npm run export:knowledge -- --check` проверкой drift всех трёх артефактов, уникальности `chunk_id` и ссылочной целостности chunk/document/graph.
- [x] 4.2 Добавить автоматические regression-тесты детерминированности: две генерации на одном fixture tree байтово совпадают.
- [x] 4.3 Обновить `wiki/intro/rag-guide.md`: document index для discovery, chunk index для retrieval, фильтрация `draft`, цитирование URL с якорем и возможность downstream re-chunking.
- [x] 4.4 Обновить `KNOWLEDGE.md` описанием файлов, версий схемы, совместимости и запрета ручной правки артефактов.
- [x] 4.5 Расширение `tests/qa-validation.jsonl` не потребовалось: секционная чувствительность покрыта fixtures, а существующие 156 source-slug сценариев успешно прошли `npm run qa:retrieval`.

## 5. Генерация и приёмка

- [x] 5.1 Выполнить `npm run export:knowledge` и включить в change обновлённые `exports/knowledge-index.jsonl`, `exports/knowledge-graph.json` и новый `exports/knowledge-chunks.jsonl`.
- [x] 5.2 Выполнить `npm run export:knowledge -- --check` и целевые тесты экспортера.
- [x] 5.3 Выполнить `npm run lint:frontmatter`, `npm run lint:related-pages`, `npm run lint:qa` и `npm run qa:retrieval`.
- [x] 5.4 Выполнить `npm run presubmit` и устранить регрессии до отметки всех задач выполненными.
