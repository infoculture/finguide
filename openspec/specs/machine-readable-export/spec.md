# Capability: machine-readable-export

Машинно-читаемый слой для RAG и ассистентов.

## Requirement: LLM entrypoint

В корне репозитория SHALL существовать [`llms.txt`](../../../llms.txt) и [`KNOWLEDGE.md`](../../../KNOWLEDGE.md) с краткой картой корпуса, точками входа и правилами цитирования канонических URL.

## Requirement: Knowledge index export

Репозиторий SHALL содержать скрипт [`scripts/export-knowledge-index.mjs`](../../../scripts/export-knowledge-index.mjs), генерирующий [`exports/knowledge-index.jsonl`](../../../exports/knowledge-index.jsonl) с полями минимум: `path`, `title`, `description`, `slug`, `url`, `content_type`, `entity_type`, `tags`, `related_pages`, `internal_links`, `draft`, опционально `source_url`, `last_verified`.

### Scenario: Deterministic regeneration

- **GIVEN** зафиксированы версия скрипта и дерево `wiki/`
- **WHEN** выполняется `npm run export:knowledge` дважды подряд
- **THEN** содержимое `exports/knowledge-index.jsonl` байтово совпадает

## Requirement: Knowledge graph artifact

Скрипт экспорта SHOULD записывать [`exports/knowledge-graph.json`](../../../exports/knowledge-graph.json): узлы (документы) и рёбра по внутренним ссылкам и полю `related_pages`.

## Requirement: QA validation corpus

Проект SHOULD содержать [`tests/qa-validation.jsonl`](../../../tests/qa-validation.jsonl) с наборами вопросов, ожидаемых опорных slug и критериев качества для регрессии retrieval (целевой объём 50–100 записей).

## Requirement: QA file contract in CI

Репозиторий SHALL выполнять [`scripts/validate-qa-jsonl.mjs`](../../../scripts/validate-qa-jsonl.mjs) в CI (`npm run lint:qa`) после проверки согласованности `knowledge-index.jsonl`: каждая запись валидна по полям, `sources` содержит только канонические slug из текущего экспорта.

Репозиторий SHALL выполнять [`scripts/validate-related-pages.mjs`](../../../scripts/validate-related-pages.mjs) в CI (`npm run lint:related-pages`): каждый slug в `related_pages` во frontmatter страниц `wiki/` присутствует в том же индексе.

### Scenario: Broken QA reference fails CI

- **GIVEN** в `tests/qa-validation.jsonl` указан slug, отсутствующий в `exports/knowledge-index.jsonl`
- **WHEN** выполняется `npm run lint:qa`
- **THEN** проверка завершается с ошибкой и печатает номер строки

## Requirement: RAG guide page

Проект SHOULD содержать страницу [`wiki/intro/rag-guide.md`](../../../wiki/intro/rag-guide.md) для разработчиков пайплайнов (чанкинг, приоритеты, метаданные).
