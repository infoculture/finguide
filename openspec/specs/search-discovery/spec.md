# Capability: search-discovery

Поиск и тематическая навигация.

## Requirement: Full-text search integration

Проект SHOULD интегрировать Algolia DocSearch или функциональный эквивалент; до выдачи ключей SHOULD существовать инструкция по включению ([`wiki/reference/docsearch-setup.md`](../../../wiki/reference/docsearch-setup.md)).

## Requirement: Faceted discovery

После нормализации `content_type` / `entity_type` SHOULD быть доступна фильтрация через экспорт [`exports/knowledge-index.jsonl`](../../../exports/knowledge-index.jsonl) и/или пользовательские индексные страницы в [`wiki/reference/`](../../../wiki/reference/).

После появления в JSONL полей `audience_level`, `data_domain`, `jurisdiction_level` (см. [`corpus-metadata`](../corpus-metadata/spec.md), [`rag-corpus-navigation`](../rag-corpus-navigation/spec.md)) потребители индекса SHOULD поддерживать тематические выборки и фасетные фильтры по этим полям наряду с `content_type` / `entity_type` / `tags`.

### Scenario: Facet by jurisdiction

- **GIVEN** запись индекса содержит `jurisdiction_level: regional`
- **WHEN** пользователь или скрипт фильтрует корпус по региональному уровню
- **THEN** в выборку попадают только соответствующие документы

## Requirement: Classification code hub

Проект SHOULD поддерживать страницу-обзор поиска по кодам классификации ([`wiki/reference/classification-codes-index.md`](../../../wiki/reference/classification-codes-index.md)) с перекрёстными ссылками на глоссарий и справочники.

## Requirement: Vector search

Векторный поиск MAY внедряться после стабилизации метаданных и JSONL-экспорта (фаза 3+).
