## ADDED Requirements

### Requirement: Machine-readable export integrity gate

Команда `npm run export:knowledge -- --check`, выполняемая в CI, SHALL проверять согласованность всех версионированных машинных артефактов: [`exports/knowledge-index.jsonl`](../../../../../exports/knowledge-index.jsonl), [`exports/knowledge-chunks.jsonl`](../../../../../exports/knowledge-chunks.jsonl) и [`exports/knowledge-graph.json`](../../../../../exports/knowledge-graph.json).

Проверка SHALL завершаться ошибкой минимум при следующих нарушениях:

- любой артефакт отсутствует или отличается от детерминированно генерируемого;
- `chunk_id` не уникален;
- `document_slug` чанка отсутствует в документном индексе;
- значения `draft`, `url` или основных типов документа противоречат соответствующей документной записи;
- конец ребра графа или `relationships[].target` отсутствует среди канонических slug;
- `schema_version` отсутствует или не соответствует поддерживаемой версии экспортера.

Режим `--check` SHALL быть read-only и SHALL NOT исправлять или перезаписывать артефакты.

#### Scenario: Orphan chunk fails CI

- **GIVEN** chunk-запись ссылается на `document_slug`, которого нет в документном индексе
- **WHEN** выполняется `npm run export:knowledge -- --check`
- **THEN** команда завершается с ненулевым кодом и указывает `chunk_id` и отсутствующий slug

#### Scenario: Check mode detects drift without writing

- **GIVEN** один из экспортных файлов устарел относительно `wiki/`
- **WHEN** выполняется режим `--check`
- **THEN** команда сообщает drift, завершается с ошибкой и не изменяет содержимое файла

#### Scenario: Broken typed edge fails CI

- **GIVEN** typed relationship указывает на отсутствующий target
- **WHEN** выполняется экспортная проверка
- **THEN** команда завершается с ошибкой до принятия артефакта графа
