# Capability: corpus-metadata

Метаданные и нормализация YAML frontmatter для корпуса `wiki/`.

## Requirement: Non-empty `description`

Репозиторий SHALL обеспечивать непустое поле `description` во frontmatter для каждой неслужебной страницы под `wiki/`.

Исключения MUST быть перечислены в [`scripts/frontmatter-lint.mjs`](../../../scripts/frontmatter-lint.mjs): файлы `*-template.md`, страницы с `draft: true`, иные случаи по согласованию с редакцией.

### Scenario: CI rejects missing description

- **GIVEN** pull request добавляет или меняет markdown под `wiki/` без обязательного `description` и без исключения
- **WHEN** выполняется `npm run lint:frontmatter`
- **THEN** процесс завершается с ненулевым кодом и печатает путь к файлу

### Scenario: Valid description passes

- **GIVEN** файл имеет непустой `description` или попадает под исключение линтера
- **WHEN** выполняется та же проверка
- **THEN** файл не нарушает правило

## Requirement: Content typing fields

Шаблоны карточек SHALL документировать поля `content_type` и при необходимости `entity_type` (см. [`AGENTS.md`](../../../AGENTS.md) и шаблоны в `wiki/**/`).

Допустимые значения `content_type`: `concept`, `organization`, `data_source`, `howto`, `legal`, `reporting`, `reference`.

Допустимые значения `entity_type`: `glossary`, `organization`, `information-system`, `data-source`, `reporting-form`, `legal-document`, `howto`.

### Scenario: Data source card carries `content_type`

- **GIVEN** новая карточка источника данных создана по шаблону
- **WHEN** изменение попадает в основную ветку
- **THEN** frontmatter содержит `content_type: data_source` (или согласованное значение) и проходит линтер допустимых значений

## Requirement: Trust and RAG-oriented fields

Для фактологических страниц и карточек источников SHOULD поддерживаться в шаблонах и документации: `source_authority`, `rag_priority`, `related_pages`, `last_verified`.

Правила обязательности для подтипов SHOULD быть заданы в линтере или в [`AGENTS.md`](../../../AGENTS.md).

## Requirement: `related_pages` referential integrity

Если у страницы задано поле `related_pages`, каждое значение MUST совпадать с полем `slug` какой-либо записи в актуальном [`exports/knowledge-index.jsonl`](../../../exports/knowledge-index.jsonl) (канонические URL разделов — например `/howto`, `/glossary`, а не путь к `README.md`).

Проверка SHALL выполняться [`scripts/validate-related-pages.mjs`](../../../scripts/validate-related-pages.mjs) командой `npm run lint:related-pages` после согласованности индекса (`npm run export:knowledge -- --check`).

### Scenario: Invalid `related_pages` fails CI

- **GIVEN** pull request добавляет или меняет `related_pages` со slug, отсутствующим в индексе
- **WHEN** выполняется `npm run lint:related-pages`
- **THEN** процесс завершается с ненулевым кодом и печатает путь к файлу и неверный slug

## Requirement: Controlled `tags` vocabulary

Поле `tags` SHALL быть непустым массивом строк; каждый тег MUST соответствовать шаблону `^[a-z][a-z0-9-]*$`.

Проверка по расширяемому белому списку SHOULD выполняется через [`scripts/tag-allowlist.json`](../../../scripts/tag-allowlist.json); новые теги добавляются сознательно вместе с обновлением таксономии ([`/reference/tags-taxonomy`](/reference/tags-taxonomy)).

### Scenario: Unknown tag fails lint

- **GIVEN** в `tags` появляется строка, отсутствующая в белом списке
- **WHEN** выполняется `npm run lint:frontmatter`
- **THEN** линтер завершается с ошибкой и указывает файл и тег
