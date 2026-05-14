# Capability: rag-corpus-navigation

Предсказуемость retrieval и машинной навигации: политика `related_pages`, расширяемые поля аудитории и предметной области, расширение QA-корпуса и единая политика черновиков для продакшен-RAG. Источник целей: [_dev/content_plan_20260514.md](../../../_dev/content_plan_20260514.md), разд. 5.8, 6, 8.

## Requirement: Key pages related_pages policy

Редакция SHOULD заполнить поле `related_pages` для ключевых страниц корпуса по категориям:

- не менее **20** карточек источников данных с высокой центральностью в графе ссылок или с пометкой редакции как «ключевые входы»;
- все опубликованные карточки [`wiki/reporting/`](../../../wiki/reporting/) (кроме шаблона);
- не менее **15** карточек [`wiki/legal/`](../../../wiki/legal/) с активной связью на данные;
- не менее **30** терминов [`wiki/glossary/`](../../../wiki/glossary/) с перекрёстными связями по темам бюджета, закупок, трансфертов, долга.

Процесс MAY вестись итерациями; критерий готовности фазы: доля заполненных страниц по каждой категории отражена в Issue или в [`wiki/intro/wiki-filling-plan.md`](../../../wiki/intro/wiki-filling-plan.md).

### Scenario: related_pages passes lint

- **GIVEN** страница обновлена с `related_pages`
- **WHEN** выполняется `npm run lint:related-pages` после `npm run export:knowledge -- --check`
- **THEN** все slug существуют в индексе

## Requirement: audience_level data_domain jurisdiction_level

Для новых и существенно обновляемых карточек (источники данных, отчётность, ключевые how-to) frontmatter SHOULD содержать при согласовании с [`corpus-metadata`](../corpus-metadata/spec.md):

- `audience_level`: одно из `novice` | `analyst` | `developer` | `expert`;
- `data_domain`: одно из `budget` | `procurement` | `state_programs` | `debt` | `institutions` | `transfers` | `tax` | `other` (расширение белого списка — через [`scripts/tag-allowlist.json`](../../../scripts/tag-allowlist.json) и таксономию, если поле нормализуется линтером);
- `jurisdiction_level`: одно из `federal` | `regional` | `municipal` | `international` | `multilevel`.

Миграция существующего корпуса SHOULD выполняться постепенно; обязательность MUST для **новых** карточек после даты, зафиксированной в [`wiki/intro/wiki-filling-plan.md`](../../../wiki/intro/wiki-filling-plan.md) или в Issue «RAG metadata wave».

### Scenario: New card carries discovery fields

- **GIVEN** pull request добавляет новую карточку источника после даты волны
- **WHEN** ревьюер проверяет frontmatter
- **THEN** присутствуют `audience_level`, `data_domain`, `jurisdiction_level` при их включении в обязательный список corpus-metadata

## Requirement: QA validation expansion

Проект SHOULD расширять [`tests/qa-validation.jsonl`](../../../tests/qa-validation.jsonl) тестовыми запросами по каждому крупному направлению из content plan: классификация и история; отчётность; регионы и муниципалитеты; трансферты; корпоративное раскрытие; международное сравнение; качество источника.

Каждая новая запись MUST соблюдать контракт [`machine-readable-export`](../machine-readable-export/spec.md): поле `sources` содержит только slug из актуального экспорта.

### Scenario: New QA row passes lint

- **GIVEN** добавлена строка в qa-validation.jsonl
- **WHEN** выполняется `npm run lint:qa`
- **THEN** проверка проходит

## Requirement: Production RAG draft exclusion

Потребители продакшен-RAG SHALL исключать документы с `draft: true` из индексации и из ответов, опирающихся на [`exports/knowledge-index.jsonl`](../../../exports/knowledge-index.jsonl).

Репозиторий MUST документировать это поведение в [`wiki/intro/rag-guide.md`](../../../wiki/intro/rag-guide.md) и в [`KNOWLEDGE.md`](../../../KNOWLEDGE.md) единообразно (ссылка из howto-playbook и machine-readable-export допускается вместо дублирования длинного текста).

### Scenario: Consumer filters drafts

- **GIVEN** пайплайн RAG читает JSONL
- **WHEN** запись имеет `"draft": true`
- **THEN** пайплайн не включает документ в продакшен-индекс по умолчанию
