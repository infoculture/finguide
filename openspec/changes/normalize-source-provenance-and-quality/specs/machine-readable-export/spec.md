## ADDED Requirements

### Requirement: Provenance and source-quality field preservation

Записи `knowledge-index.jsonl` и `knowledge-chunks.jsonl` SHALL содержать стабильные nullable-ключи `source_authority`, `jurisdiction_level`, `legal_significance`, `data_completeness`, `machine_readability`, `update_lag`, `archive_depth` и `license_or_terms`.

Добавление этих nullable-ключей SHALL сохранять `schema_version: 1`. Legacy `source_authority` MUST экспортироваться без переинтерпретации до отдельного change, повышающего версию схемы; издатели и операторы SHALL оставаться доступны через типизированные рёбра графа.

#### Scenario: Legacy provenance is not dropped by export

- **GIVEN** карточка содержит старое значение `source_authority`
- **WHEN** экспорт регенерируется
- **THEN** значение присутствует в document/chunk records, а schema version остаётся 1

#### Scenario: Missing quality value is explicit

- **GIVEN** у карточки не заполнена глубина архива
- **WHEN** экспорт регенерируется
- **THEN** ключ `archive_depth` присутствует со значением `null`, а не исчезает из контракта

