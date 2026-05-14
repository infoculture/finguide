# Change: regional-sources-hierarchy-2026-05 — иерархия региональных источников и импорт из таблицы

Связанный материал: таблица исследования [`_dev/rf_finance_sources_table_full.md`](../../../_dev/rf_finance_sources_table_full.md) (региональные и муниципальные госфинансы по субъектам РФ).

Этот change вводит capability **региональной файловой иерархии** и процедуру наполнения карточек из таблицы при **сохранении** публичных URL вида `/data-sources/regional/<slug>`. Полный нормативный текст — в [`specs/regional-sources-hierarchy/spec.md`](../../specs/regional-sources-hierarchy/spec.md).

## Scope

- Каталог `wiki/data-sources/regional/<fed_okrug_slug>/<subject_slug>/` для карточек источников и сводных страниц субъектов.
- Обязательный справочник [`_dev/regional-directory.yaml`](../../../_dev/regional-directory.yaml) или [`_dev/regional-directory.md`](../../../_dev/regional-directory.md) (выбор при первой реализации).
- Сводная страница на субъект со ссылками на все его карточки источников.
- Импорт из Markdown-таблицы в `_dev/rf_finance_sources_table_full.md` с правилами дедупликации, черновиков и сопоставления с существующими карточками.
- Обновление [`AGENTS.md`](../../../AGENTS.md), [`wiki/data-sources/data-source-card-template.md`](../../../wiki/data-sources/data-source-card-template.md), [`wiki/data-sources/regional/README.md`](../../../wiki/data-sources/regional/README.md) и каскада входящих ссылок (см. чеклист в spec).
- Без изменения семантики ссылок в матрице пилотного раскрытия и смежных страницах: URL остаются плоскими.

Вне scope первой волны (опционально последующие change): расширение линтеров под обязательные поля только для карточек из импорта; векторный поиск; отдельные подстраницы сводки при переполнении `related_pages`.

## ADDED / MODIFIED (трассировка на specs)

| Действие | Capability | Файл |
|----------|------------|------|
| **ADDED** | `regional-sources-hierarchy` | [`specs/regional-sources-hierarchy/spec.md`](../../specs/regional-sources-hierarchy/spec.md) |
| **MODIFIED** | `regional-municipal-pilot` | [`specs/regional-municipal-pilot/spec.md`](../../specs/regional-municipal-pilot/spec.md) — канон путей: файлы MAY быть вложены; ссылки в корпусе остаются `/data-sources/regional/<slug>` |
| **MODIFIED** | `editorial-expansion` | [`specs/editorial-expansion/spec.md`](../../specs/editorial-expansion/spec.md) — ссылка на новый spec в списке детализации |
| **MODIFIED** | `navigation-scenarios` | [`specs/navigation-scenarios/spec.md`](../../specs/navigation-scenarios/spec.md) — хабы округов/субъектов в сценарии навигации |
| **MODIFIED** (по необходимости текста процесса) | `corpus-metadata`, `data-source-quality`, `rag-corpus-navigation` | соответствующие `spec.md` — только если в той же волне PR меняются правила `related_pages`/черновиков; иначе достаточно требований в `regional-sources-hierarchy` |

## Последующие задачи реализации (чеклист для PR кода/wiki)

1. **[`AGENTS.md`](../../../AGENTS.md)** — заменить ограничение «без дополнительного уровня внутри regional» на двухуровневую иерархию `fed_okrug_slug` / `subject_slug` при неизменном `slug: /data-sources/regional/<basename>`.
2. **[`wiki/data-sources/data-source-card-template.md`](../../../wiki/data-sources/data-source-card-template.md)** — обновить строку «Путь к файлу» для regional.
3. **[`wiki/data-sources/regional/README.md`](../../../wiki/data-sources/regional/README.md)** — блок «По округам и субъектам», сохранить текущие быстрые входы.
4. **Создать [`_dev/regional-directory.yaml`](../../../_dev/regional-directory.yaml)** (или `.md`) и заполнить округа и субъекты.
5. **Перенос существующих карточек** — инвентаризация, маппинг, `git mv`, правка относительных ссылок на абсолютные `/data-sources/regional/...` где нужно.
6. **Сводные страницы** — по одной на субъект с перечнем slug; обновить `related_pages` у карточек.
7. **Импорт из таблицы** — скрипт или полуавтоматическая генерация, дедупликация, `draft` по статусу.
8. **Экспорт и линтеры** — `npm run export:knowledge`, `lint:related-pages`, прочие ворота из [`specs/ci-quality-gates/spec.md`](../../specs/ci-quality-gates/spec.md) по затронутым файлам.

## Фазы реализации

| Фаза | Содержание |
|------|------------|
| 1 | Инвентаризация текущих `wiki/data-sources/regional/*.md`; разделение «карточка источника» / «обзор»; черновой маппинг карточка → (округ, субъект). |
| 2 | Публикация справочника `_dev/regional-directory.*`; согласование `fed_okrug_slug` и `subject_slug` с редакцией. |
| 3 | Скелет папок округов (`README`, `_category_.json` при необходимости) и субъектов; решение о полном перечне РФ vs только субъекты из таблицы (см. Requirement: Coverage в spec). |
| 4 | Сводные страницы субъектов: приоритет субъектам с уже существующими карточками; затем заготовки для остальных при полном скелете. |
| 5 | Перенос файлов карточек источников без смены `slug`; обновление внутренних ссылок. |
| 6 | Импорт строк таблицы: новые slug, черновики, слияние с существующими URL. |
| 7 | Обновление корневого regional README, intro/howto, `related_pages` каскадом; экспорт знаний; CI. |
| 8 | Выборочная редакционная проверка URL и статусов; снятие `draft` где выполнена верификация. |

## Критерии выхода (Definition of Done) для change

- Спека [`regional-sources-hierarchy/spec.md`](../../specs/regional-sources-hierarchy/spec.md) принята и связана из [`openspec/README.md`](../../README.md) при обновлении оглавления OpenSpec (если в репозитории ведётся список capabilities в README).
- В [`regional-municipal-pilot/spec.md`](../../specs/regional-municipal-pilot/spec.md) и [`editorial-expansion/spec.md`](../../specs/editorial-expansion/spec.md) отражена согласованность с новой иерархией.
- Первый PR реализации wiki содержит справочник `_dev/regional-directory.*` и хотя бы один полный путь «округ → субъект → карточка + сводка» как эталон для копирования.

## Риски

- Перегруз сводной страницы и `related_pages` при десятках источников на субъект — запланировать волну 2 (подстраницы по категориям таблицы).
- 89 субъектов в исследовании таблицы vs полный перечень РФ — явно фиксировать в справочнике и в README.
- Двойное ведение: после merge wiki каноничен; таблица `_dev/` используется для аудита и повторного импорта только по процедуре.

## Примечание

Реализация **markdown/wiki и скриптов** выполняется отдельными PR после принятия данного change; данный документ и spec не требуют одновременного переноса файлов.
