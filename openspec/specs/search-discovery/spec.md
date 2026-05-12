# Capability: search-discovery

Поиск и тематическая навигация.

## Requirement: Full-text search integration

Проект SHOULD интегрировать Algolia DocSearch или функциональный эквивалент; до выдачи ключей SHOULD существовать инструкция по включению ([`wiki/reference/docsearch-setup.md`](../../../wiki/reference/docsearch-setup.md)).

## Requirement: Faceted discovery

После нормализации `content_type` / `entity_type` SHOULD быть доступна фильтрация через экспорт [`exports/knowledge-index.jsonl`](../../../exports/knowledge-index.jsonl) и/или пользовательские индексные страницы в [`wiki/reference/`](../../../wiki/reference/).

## Requirement: Classification code hub

Проект SHOULD поддерживать страницу-обзор поиска по кодам классификации ([`wiki/reference/classification-codes-index.md`](../../../wiki/reference/classification-codes-index.md)) с перекрёстными ссылками на глоссарий и справочники.

## Requirement: Vector search

Векторный поиск MAY внедряться после стабилизации метаданных и JSONL-экспорта (фаза 3+).
