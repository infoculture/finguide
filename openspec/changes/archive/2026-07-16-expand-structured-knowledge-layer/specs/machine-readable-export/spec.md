## ADDED Requirements

### Requirement: Markdown source of truth and generated artifact ownership

Авторский корпус [`wiki/`](../../../../../wiki/) SHALL оставаться единственным каноническим источником содержания, структуры страниц и frontmatter. Артефакты в [`exports/`](../../../../../exports/) SHALL генерироваться детерминированно из корпуса и конфигурации экспортера и SHALL NOT требовать ручной синхронизации или обратной записи в Markdown.

Импортные процессы MAY создавать или обновлять Markdown-карточки, но потребители машинного слоя SHALL читать версионированные артефакты и SHALL NOT становиться параллельным источником правды для содержимого страниц.

#### Scenario: Generated artifact differs from source

- **GIVEN** вручную изменён файл под `exports/` без соответствующего изменения `wiki/` или экспортера
- **WHEN** выполняется `npm run export:knowledge -- --check`
- **THEN** проверка завершается ошибкой drift и предлагает регенерировать артефакты

### Requirement: Section-aware chunk export

Репозиторий SHALL генерировать [`exports/knowledge-chunks.jsonl`](../../../../../exports/knowledge-chunks.jsonl) как детерминированный секционный экспорт текста Markdown без frontmatter.

Каждая запись SHALL содержать минимум: `schema_version`, `chunk_id`, `document_slug`, `path`, `url`, `title`, `heading_path`, `heading_anchor`, `ordinal`, `text`, `content_type`, `entity_type`, `tags`, `audience_level`, `data_domain`, `jurisdiction_level`, `rag_priority`, `draft`, `last_updated`, `last_verified`. Отсутствующие опциональные скалярные значения SHALL сериализоваться как `null`, массивы — в стабильном порядке.

`chunk_id` SHALL быть уникальным и детерминированным относительно канонического slug, пути заголовков и порядкового номера части и SHALL NOT зависеть от абсолютного пути рабочей копии. `document_slug` SHALL соответствовать записи документного индекса, а `url` SHALL содержать канонический URL документа и якорь раздела, когда раздел имеет якорь.

Экспортер SHALL делить текст прежде всего по Markdown-заголовкам. Дальнейшее деление длинной секции SHALL происходить по документированным блочным границам; fenced code blocks, таблицы и связные списки SHALL сохраняться целиком, кроме явно документированного fallback для одиночного блока больше предела.

#### Scenario: Section becomes addressable chunks

- **GIVEN** опубликованная Markdown-страница содержит введение и несколько разделов H2/H3
- **WHEN** выполняется `npm run export:knowledge`
- **THEN** chunk-экспорт содержит упорядоченные записи с `document_slug`, иерархией заголовков и каноническими URL разделов

#### Scenario: Repeated generation is byte-identical

- **GIVEN** версия экспортера и дерево `wiki/` не менялись
- **WHEN** chunk-экспорт генерируется дважды
- **THEN** `exports/knowledge-chunks.jsonl` байтово совпадает между запусками

#### Scenario: Structured block is not silently split

- **GIVEN** длинная секция содержит fenced code block, таблицу или связный список
- **WHEN** секция превышает настроенный предел чанка
- **THEN** экспортер сохраняет каждый структурный блок целиком либо применяет и явно тестирует документированный oversized fallback без потери текста

### Requirement: Versioned machine-readable contracts

Каждая запись `knowledge-index.jsonl` и `knowledge-chunks.jsonl`, а также корневой объект `knowledge-graph.json` SHALL содержать целочисленный `schema_version`. Первая формализованная версия SHALL иметь значение `1`.

Добавление nullable-поля MAY сохранять текущую версию. Удаление, переименование, изменение типа или семантики существующего поля MUST повышать `schema_version` и сопровождаться миграционной заметкой в [`KNOWLEDGE.md`](../../../../../KNOWLEDGE.md).

#### Scenario: Breaking contract change is versioned

- **GIVEN** реализация переименовывает или меняет тип существующего поля экспортного контракта
- **WHEN** изменение готовится к merge
- **THEN** версия схемы повышена, спека обновлена и `KNOWLEDGE.md` содержит инструкцию для потребителей

## MODIFIED Requirements

### Requirement: Knowledge index export

Репозиторий SHALL содержать скрипт [`scripts/export-knowledge-index.mjs`](../../../../../scripts/export-knowledge-index.mjs), генерирующий [`exports/knowledge-index.jsonl`](../../../../../exports/knowledge-index.jsonl) с одной записью на неслужебную страницу и полями минимум: `schema_version`, `path`, `title`, `description`, `slug`, `url`, `content_type`, `entity_type`, `tags`, `aliases`, `related_pages`, `internal_links`, `source_url`, `last_verified`, `rag_priority`, `draft`, `last_updated`, `audience_level`, `data_domain`, `jurisdiction_level` и согласованные поля качества источника.

Существующие поля SHALL сохранять прежние типы и семантику при переходе к `schema_version: 1`. Отсутствующие опциональные ключи SHALL сериализоваться как `null`, а массивы SHALL сортироваться детерминированно.

Любое изменение набора полей JSONL MUST сопровождаться обновлением данной спеки и успешным `npm run export:knowledge -- --check` в CI.

#### Scenario: Export check after schema change

- **GIVEN** в скрипт экспорта добавлено новое поле
- **WHEN** выполняется CI с `npm run export:knowledge -- --check`
- **THEN** проверка проходит, а список полей и правила версии в этом requirement актуальны

#### Scenario: Deterministic regeneration

- **GIVEN** зафиксированы версия скрипта и дерево `wiki/`
- **WHEN** выполняется `npm run export:knowledge` дважды подряд
- **THEN** содержимое `exports/knowledge-index.jsonl` байтово совпадает

#### Scenario: Existing consumer fields remain available

- **GIVEN** потребитель использует поля `slug`, `url`, `content_type`, `related_pages` и `draft` из текущего индекса
- **WHEN** индекс регенерирован по новому контракту версии 1
- **THEN** эти поля остаются доступны с прежней семантикой

### Requirement: Knowledge graph artifact

Скрипт экспорта SHALL записывать [`exports/knowledge-graph.json`](../../../../../exports/knowledge-graph.json) с `schema_version`, узлами документов и рёбрами по внутренним Markdown-ссылкам, `related_pages` и опциональному frontmatter `relationships`.

Существующие рёбра SHALL сохранять `kind: markdown_link` или `kind: related_pages`. Рёбра из `relationships` SHALL иметь `kind: typed_relationship` и отдельное поле `relationship_type`, равное валидированному типу исходной связи. Направление SHALL быть `slug текущей страницы → target`.

Каждый конец ребра SHALL соответствовать существующему узлу; узлы, рёбра и их поля SHALL сериализоваться в стабильном порядке.

#### Scenario: Typed relation enters graph

- **GIVEN** карточка задаёт `relationships: [{type: operated_by, target: /organizations/minfin}]` и целевой slug существует
- **WHEN** выполняется экспорт графа
- **THEN** граф содержит направленное ребро с `kind: typed_relationship` и `relationship_type: operated_by`

#### Scenario: Existing link edges remain compatible

- **GIVEN** страница содержит обычную внутреннюю Markdown-ссылку и `related_pages`
- **WHEN** граф регенерирован
- **THEN** соответствующие рёбра по-прежнему присутствуют с видами `markdown_link` и `related_pages`
