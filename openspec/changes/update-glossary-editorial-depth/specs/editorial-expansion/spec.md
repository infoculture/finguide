## MODIFIED Requirements

### Requirement: Glossary and reporting depth

Глоссарий SHALL при создании и обновлении карточек под [`wiki/glossary/`](../../../../../wiki/glossary/) соответствовать нормативным требованиям capability **`glossary-card-content`** — файл дельты [`../glossary-card-content/spec.md`](../glossary-card-content/spec.md) в этом change; после архивации — [`openspec/specs/glossary-card-content/spec.md`](../../../../specs/glossary-card-content/spec.md): полнота «Коротко» и «Определение», расшифровка кодов для `glossary_kind: classification` и иных кодовых терминов, блоки происхождения и разграничения **ведения перечня** vs **применения в данных**, согласованность с «Правовой основой», содержательные «Примеры», сохранение правил перекрёстных ссылок из [`AGENTS.md`](../../../../../AGENTS.md) и политики `related_pages` из [`rag-corpus-navigation`](../../../../specs/rag-corpus-navigation/spec.md) для ключевых терминов.

Отчётность SHOULD по-прежнему получать практические разборы форм (см. [`reporting-landscape`](../../../../specs/reporting-landscape/spec.md) и связанные спеки из списка в корне [`editorial-expansion`](../../../../specs/editorial-expansion/spec.md)).

#### Scenario: Glossary PR checked against glossary-card-content

- **GIVEN** pull request затрагивает одну или несколько карточек `wiki/glossary/**/*.md`
- **WHEN** выполняется ревью
- **THEN** ревьюер проверяет соответствие пунктам [`glossary-card-content`](../glossary-card-content/spec.md), в том числе наличие блоков происхождения и ответственности там, где термин является кодом или классификатором

#### Scenario: Reporting work remains scoped

- **GIVEN** задача касается только `wiki/reporting/` без изменений глоссария
- **WHEN** распределяются критерии готовности
- **THEN** детальные требования к карточкам отчётности не смешиваются с глоссарием, а глоссарий не блокирует приёмку правок отчётности без затрагивания `wiki/glossary/`
