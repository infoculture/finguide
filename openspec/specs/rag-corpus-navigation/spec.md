# Capability: rag-corpus-navigation

## Purpose

Предсказуемость retrieval и машинной навигации: политика `related_pages`, расширяемые поля аудитории и предметной области, расширение QA-корпуса и единая политика черновиков для продакшен-RAG. Источник целей: [_dev/content_plan_20260514.md](../../../_dev/content_plan_20260514.md), разд. 5.8, 6, 8.
## Requirements
### Requirement: Key pages related_pages policy

Редакция SHALL заполнить поле `related_pages` для ключевых страниц корпуса по категориям:

- не менее **20** карточек источников данных с высокой центральностью в графе ссылок или с пометкой редакции как «ключевые входы»;
- все опубликованные карточки [`wiki/reporting/`](../../../wiki/reporting/) (кроме шаблона);
- не менее **15** карточек [`wiki/legal/`](../../../wiki/legal/) с активной связью на данные;
- не менее **30** терминов [`wiki/glossary/`](../../../wiki/glossary/) с перекрёстными связями по темам бюджета, закупок, трансфертов, долга.

Процесс MAY вестись итерациями; критерий готовности фазы: доля заполненных страниц по каждой категории отражена в Issue или в [`wiki/intro/wiki-filling-plan.md`](../../../wiki/intro/wiki-filling-plan.md).

#### Scenario: related_pages passes lint

- **GIVEN** страница обновлена с `related_pages`
- **WHEN** выполняется `npm run lint:related-pages` после `npm run export:knowledge -- --check`
- **THEN** все slug существуют в индексе

### Requirement: audience_level data_domain jurisdiction_level

Для новых и существенно обновляемых карточек (источники данных, отчётность, ключевые how-to) frontmatter SHALL содержать при согласовании с [`corpus-metadata`](../corpus-metadata/spec.md):

- `audience_level`: одно из `novice` | `analyst` | `developer` | `expert`;
- `data_domain`: одно из `budget` | `procurement` | `state_programs` | `debt` | `institutions` | `transfers` | `tax` | `other` (расширение белого списка — через [`scripts/tag-allowlist.json`](../../../scripts/tag-allowlist.json) и таксономию, если поле нормализуется линтером);
- `jurisdiction_level`: одно из `federal` | `regional` | `municipal` | `international` | `multilevel`.

Миграция существующего корпуса SHOULD выполняться постепенно; обязательность MUST для **новых** карточек после даты, зафиксированной в [`wiki/intro/wiki-filling-plan.md`](../../../wiki/intro/wiki-filling-plan.md) или в Issue «RAG metadata wave».

#### Scenario: New card carries discovery fields

- **GIVEN** pull request добавляет новую карточку источника после даты волны
- **WHEN** ревьюер проверяет frontmatter
- **THEN** присутствуют `audience_level`, `data_domain`, `jurisdiction_level` при их включении в обязательный список corpus-metadata

### Requirement: QA validation expansion

Проект SHALL расширять [`tests/qa-validation.jsonl`](../../../tests/qa-validation.jsonl) тестовыми запросами по каждому крупному направлению из content plan: классификация и история; отчётность; регионы и муниципалитеты; трансферты; корпоративное раскрытие; международное сравнение; качество источника.

Каждая новая запись MUST соблюдать контракт [`machine-readable-export`](../machine-readable-export/spec.md): поле `sources` содержит только slug из актуального экспорта.

#### Scenario: New QA row passes lint

- **GIVEN** добавлена строка в qa-validation.jsonl
- **WHEN** выполняется `npm run lint:qa`
- **THEN** проверка проходит

### Requirement: Production RAG draft exclusion

Потребители продакшен-RAG SHALL исключать документы с `draft: true` из discovery и retrieval, опираясь на согласованные значения `draft` в [`exports/knowledge-index.jsonl`](../../../../../exports/knowledge-index.jsonl) и [`exports/knowledge-chunks.jsonl`](../../../../../exports/knowledge-chunks.jsonl).

Репозиторий MUST документировать это поведение в [`wiki/intro/rag-guide.md`](../../../../../wiki/intro/rag-guide.md) и в [`KNOWLEDGE.md`](../../../../../KNOWLEDGE.md) единообразно (ссылка из howto-playbook и machine-readable-export допускается вместо дублирования длинного текста).

#### Scenario: Consumer filters draft document and chunks

- **GIVEN** документная запись и связанные с ней chunk-записи имеют `draft: true`
- **WHEN** потребитель строит продакшен discovery- и retrieval-индексы
- **THEN** документ и все его чанки не включаются по умолчанию

#### Scenario: Draft flags remain consistent

- **GIVEN** Markdown-страница имеет `draft: true`
- **WHEN** выполняется экспорт знаний
- **THEN** документная запись и все созданные из неё chunk-записи имеют одинаковое значение `draft: true`

### Requirement: Document discovery and section retrieval separation

Документация машинного слоя SHALL разделять роли артефактов: потребители RAG SHOULD использовать [`exports/knowledge-index.jsonl`](../../../../../exports/knowledge-index.jsonl) для discovery, фильтрации документов и разрешения канонических slug, а [`exports/knowledge-chunks.jsonl`](../../../../../exports/knowledge-chunks.jsonl) — как стандартный вход для секционного retrieval.

Потребитель MAY дополнительно делить `text` чанка под ограничения своей модели, но SHALL сохранять `document_slug`, канонический `url`, исходный `chunk_id` или явное поле происхождения, позволяющее восстановить экспортированный чанк.

При формировании ответа потребитель SHOULD цитировать канонический URL с `heading_anchor`, если найденный чанк относится к адресуемому разделу; отсутствие якоря у введения страницы SHALL приводить к цитированию URL документа без вымышленного фрагмента.

#### Scenario: Retrieval result remains traceable

- **GIVEN** потребитель дополнительно делит длинный экспортированный чанк
- **WHEN** подчасть попадает в результат retrieval
- **THEN** результат сохраняет трассировку до исходного `chunk_id`, `document_slug` и канонического URL

#### Scenario: Section citation uses canonical anchor

- **GIVEN** найденный чанк имеет непустой `heading_anchor`
- **WHEN** ассистент формирует ссылку на источник
- **THEN** ссылка использует экспортированный канонический URL раздела, а не файловый путь или самостоятельно вычисленный якорь

### Requirement: Production chunk filtering

Потребители продакшен-RAG SHALL исключать записи `knowledge-chunks.jsonl` с `draft: true`. Они SHOULD учитывать `rag_priority` и доступные discovery/quality metadata при фильтрации или ранжировании, не меняя содержания исходного `text` без явной downstream-обработки.

Политика SHALL быть документирована единообразно в [`wiki/intro/rag-guide.md`](../../../../../wiki/intro/rag-guide.md) и [`KNOWLEDGE.md`](../../../../../KNOWLEDGE.md).

#### Scenario: Draft chunk excluded

- **GIVEN** chunk-запись имеет `draft: true`
- **WHEN** строится продакшен-индекс retrieval
- **THEN** запись не индексируется и не используется для ответа по умолчанию
