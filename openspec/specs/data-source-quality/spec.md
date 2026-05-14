# Capability: data-source-quality

Единый язык качества данных и верификации источников: справочник измерений, обновление шаблона карточки источника, согласование с датой проверки и дорожная карта линтеров. Источник целей: [_dev/content_plan_20260514.md](../../../_dev/content_plan_20260514.md), разд. 5.5, 6, 7.

## Requirement: Data quality dimensions reference

Проект SHALL содержать справочную страницу в [`wiki/reference/data-quality-dimensions.md`](../../../wiki/reference/data-quality-dimensions.md) с определениями измерений:

- `data_completeness` — полнота данных (полная / частичная / неизвестная) с требованием пояснения в контексте карточки;
- `machine_readability` — API, CSV, XLSX, HTML, PDF, смешанный доступ;
- `legal_significance` — официальный источник, агрегатор, гражданская переупаковка;
- `update_lag` — оценка задержки обновления относительно факта;
- `archive_depth` — наличие истории и горизонт;
- `license_or_terms` — условия повторного использования.

Страница MUST согласовывать использование **`last_verified`** во frontmatter (каноническое поле даты проверки карточки) с понятием «последняя проверка» из отчёта: синоним **`last_checked`** в тексте справочника MAY объясняться как разговорный, но во frontmatter новых карточек MUST использоваться **`last_verified`**, пока экспорт ([`scripts/export-knowledge-index.mjs`](../../../scripts/export-knowledge-index.mjs)) не расширен иначе.

### Scenario: Author maps report field to frontmatter

- **GIVEN** автор читает справочник измерений
- **WHEN** он заполняет карточку источника
- **THEN** он знает, куда поместить дату проверки и как описать полноту

## Requirement: Source card template quality block

Шаблон [`wiki/data-sources/data-source-card-template.md`](../../../wiki/data-sources/data-source-card-template.md) SHALL включать обязательный для копирования блок **«Качество и верификация»** (или эквивалентные строки в сводной таблице признаков в начале карточки): дата проверки (`last_verified`), полнота, машиночитаемость, юридическая значимость, задержка обновления, глубина архива, лицензия.

Для карточек с тегом/типом `civil` требования к явности лицензии и различению первичного источника и переупаковки SHOULD быть строже; конкретные формулировки MUST ссылаться на [`wiki/intro/wiki-filling-plan.md`](../../../wiki/intro/wiki-filling-plan.md) в части гражданских источников.

### Scenario: New data source card includes quality

- **GIVEN** создаётся новая карточка источника по шаблону
- **WHEN** она публикуется без `draft: true`
- **THEN** в теле присутствует заполненный блок качества и дата `last_verified`, либо карточка остаётся черновиком до заполнения

## Requirement: Phased lint for quality fields

Репозиторий MAY вводить линтер, делающий выбранные поля качества обязательными для подтипов источников (например `civil`).

До включения линтера спека [`corpus-metadata`](../corpus-metadata/spec.md) и данный документ SHOULD описывать целевой набор полей и критерий готовности фазы («линтер включён для подтипа X»).

### Scenario: CI documents future gate

- **GIVEN** линтер ещё не включён
- **WHEN** читатель открывает данную спеку
- **THEN** он видит явный SHOULD поэтапного внедрения
