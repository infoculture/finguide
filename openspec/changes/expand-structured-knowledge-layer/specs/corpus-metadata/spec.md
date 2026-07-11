## ADDED Requirements

### Requirement: Optional typed relationships

Репозиторий SHALL поддерживать для страниц под [`wiki/`](../../../../../wiki/) опциональное поле frontmatter `relationships` как массив объектов с ровно двумя обязательными строковыми полями: `type` и `target`. Отдельная страница MAY не задавать это поле.

`target` MUST быть каноническим slug существующей страницы из [`exports/knowledge-index.jsonl`](../../../../../exports/knowledge-index.jsonl). `type` MUST входить в контролируемый словарь: `related_to`, `part_of`, `operated_by`, `published_by`, `governed_by`, `derived_from`, `available_in`, `replaces`, `uses`. Направление связи SHALL читаться как `slug текущей страницы → target`.

Одинаковые пары `(type, target)` в одной карточке SHALL считаться ошибкой. `relationships` SHALL дополнять и SHALL NOT автоматически заменять `related_pages` или содержательные Markdown-ссылки читательского текста.

#### Scenario: Valid typed relationship passes

- **GIVEN** карточка ИС содержит `relationships` с типом `operated_by` и target существующей организации
- **WHEN** выполняются проверки frontmatter и экспорта
- **THEN** карточка проходит проверку, а связь доступна генератору графа

#### Scenario: Unknown relationship type fails

- **GIVEN** карточка содержит тип связи вне контролируемого словаря
- **WHEN** выполняется проверка метаданных
- **THEN** процесс завершается с ошибкой и печатает путь, неизвестный тип и допустимые значения

#### Scenario: Missing target fails referential integrity

- **GIVEN** `relationships[].target` не совпадает ни с одним каноническим slug
- **WHEN** выполняется проверка ссылочной целостности
- **THEN** процесс завершается с ошибкой и печатает путь и неверный target

#### Scenario: Generic links remain editorially meaningful

- **GIVEN** редактор добавляет typed relationship между двумя карточками
- **WHEN** карточка проходит ревью
- **THEN** существующая содержательная Markdown-ссылка или `related_pages` не удаляется автоматически только из-за появления машинной связи
