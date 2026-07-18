## ADDED Requirements

### Requirement: Lifecycle metadata export

Записи `knowledge-index.jsonl` и `knowledge-chunks.jsonl` SHALL содержать стабильные nullable-ключи `as_of`, `lifecycle_status`, `status_as_of` и `successor_slug`.

Добавление этих nullable-полей SHALL сохранять `schema_version: 1`. `as_of` и `status_as_of` MUST сериализоваться как даты `YYYY-MM-DD`, а `successor_slug` MUST проходить ссылочную целостность до генерации артефактов.

#### Scenario: Snapshot dates remain distinct from edit date

- **GIVEN** карточка организации содержит `as_of`, `status_as_of` и `last_updated`
- **WHEN** генерируются document и chunk records
- **THEN** все три даты присутствуют в отдельных ключах без изменения семантики `last_updated`

#### Scenario: Missing lifecycle value remains explicit

- **GIVEN** обычная карточка не относится к snapshot-семейству
- **WHEN** экспорт регенерируется
- **THEN** lifecycle-ключи присутствуют со значением `null`
