# Capability: regional-sources-hierarchy

Иерархическая организация **файлов** региональных и муниципальных карточек источников данных под `wiki/data-sources/regional/`: федеральный округ → субъект РФ; **публичные URL** остаются плоскими (`/data-sources/regional/<slug>`). Сводные страницы по субъекту связывают все его карточки. Массовое наполнение из таблицы исследования в [`_dev/rf_finance_sources_table_full.md`](../../../_dev/rf_finance_sources_table_full.md).

Связанные capabilities: [`regional-municipal-pilot`](../regional-municipal-pilot/spec.md), [`data-source-quality`](../data-source-quality/spec.md), [`corpus-metadata`](../corpus-metadata/spec.md), [`navigation-scenarios`](../navigation-scenarios/spec.md).

## Requirement: Canonical directory artifact

Реализация change SHALL создать и поддерживать в репозитории **единый справочник соответствий** (канон имён файловой системы и маппинга контента):

- **Путь:** [`_dev/regional-directory.yaml`](../../../_dev/regional-directory.yaml) **или** [`_dev/regional-directory.md`](../../../_dev/regional-directory.md) — выбор формата фиксируется в первом PR, реализующем change; далее смена формата SHOULD сопровождаться миграцией и обновлением данной спеки.
- **Минимальные поля на субъект:** полное официальное название субъекта РФ (как в таблице-источнике); `fed_okrug_slug` (латиница, стабильный идентификатор округа); `subject_slug` (латиница, уникален среди субъектов); опционально код ОКТМО/краткое имя для поиска.
- **Минимальные поля на округ:** русское имя для UI; `fed_okrug_slug`; порядок в сайдбаре (опционально).

Справочник MUST быть источником правды для путей `wiki/data-sources/regional/<fed_okrug_slug>/<subject_slug>/` и для сопоставления строк таблицы [`_dev/rf_finance_sources_table_full.md`](../../../_dev/rf_finance_sources_table_full.md) колонки «Субъект РФ» с `subject_slug`.

### Scenario: Author places a new regional source card

- **GIVEN** автор добавляет новую карточку источника для субъекта РФ
- **WHEN** он выбирает папку на диске
- **THEN** путь соответствует паре (`fed_okrug_slug`, `subject_slug`) из справочника, а не произвольной транслитерации

## Requirement: Filesystem hierarchy under regional

Карточки источников данных (`content_type: data_source`, `entity_type: data-source` по соглашению путей), перенесённые из корня `wiki/data-sources/regional/` и создаваемые из таблицы, SHALL размещаться по пути:

`wiki/data-sources/regional/<fed_okrug_slug>/<subject_slug>/<basename>.md`

где `<basename>` совпадает с сегментом публичного slug (см. ниже).

В каждом `wiki/data-sources/regional/<fed_okrug_slug>/` проект SHALL содержать:

- `README.md` — оглавление округа: список субъектов со ссылками на сводные страницы (канонические URL `/data-sources/regional/...`), краткий контекст (1–2 абзаца);
- при необходимости `_category_.json` — подписи сайдбара Docusaurus на русском языке.

Обзорно-методические страницы (не привязанные к одному субъекту как единственный смысл), включая как минимум: [`wiki/data-sources/regional/how-to-find-regional-data.md`](../../../wiki/data-sources/regional/how-to-find-regional-data.md), [`wiki/data-sources/regional/consolidated-budgets.md`](../../../wiki/data-sources/regional/consolidated-budgets.md), [`wiki/data-sources/regional/regional-disclosure-matrix.md`](../../../wiki/data-sources/regional/regional-disclosure-matrix.md), [`wiki/data-sources/regional/municipal-budgets.md`](../../../wiki/data-sources/regional/municipal-budgets.md), [`wiki/data-sources/regional/regional-procurement-sources-overview.md`](../../../wiki/data-sources/regional/regional-procurement-sources-overview.md) и аналоги, **остаются** в корне `wiki/data-sources/regional/` до отдельного решения редакции; их тексты SHOULD обновляться так, чтобы ссылки на карточки использовали **абсолютные** пути `/data-sources/regional/<slug>` после переноса файлов карточек.

### Scenario: Reader navigates district to subject to source

- **GIVEN** читатель открывает README федерального округа под региональными источниками
- **WHEN** он переходит в субъект, затем на сводную страницу субъекта и на карточку источника
- **THEN** он может вернуться по ссылкам на сводную страницу и оглавление округа без ручного поиска по URL

## Requirement: Stable public slugs for source cards

Для каждой карточки источника под `wiki/data-sources/regional/` поле frontmatter `slug` MUST иметь вид:

`/data-sources/regional/<basename>`

где `<basename>` — имя файла без расширения `.md`, **без** вложения сегментов `fed_okrug_slug` или `subject_slug` в URL.

При переносе существующих карточек из корня `wiki/data-sources/regional/` в подпапки значения `slug` **не изменяются**, если не выполняется отдельное редакционное решение о переименовании (которое MUST сопровождаться обновлением всех входящих ссылок и QA-артефактов).

Имена файлов (`<basename>.md`) MUST оставаться **глобально уникальными** в пределах всего дерева `wiki/data-sources/regional/` (включая подкаталоги), по аналогии с федеральными карточками под `wiki/data-sources/federal/`.

### Scenario: External link to moved card still resolves

- **GIVEN** существует опубликованная ссылка вида `/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar`
- **WHEN** файл карточки перенесён в `wiki/data-sources/regional/<fed_okrug_slug>/krasnodar-krai/` без смены `slug`
- **THEN** публичный URL страницы не меняется

## Requirement: Subject overview pages

Для каждого субъекта РФ, для которого создана хотя бы одна папка `wiki/data-sources/regional/<fed_okrug_slug>/<subject_slug>/`, проект SHALL содержать **ровно одну** сводную страницу-оглавление источников этого субъекта:

- **Расположение файла:** `wiki/data-sources/regional/<fed_okrug_slug>/<subject_slug>/<overview_basename>.md`, где `<overview_basename>` уникален и по смыслу явно обозначает свод (рекомендуемый шаблон: `subject-<subject_slug>-sources-overview` или эквивалент, зафиксированный в [`_dev/regional-directory.yaml`](../../../_dev/regional-directory.yaml) / `.md`).
- **Публичный slug:** `/data-sources/regional/<overview_basename>` — отдельный от slugов карточек источников.
- **Frontmatter:** `title`, `sidebar_label`, `tags`, `last_updated`, `description`, `content_type: reference` (или согласованное с [`scripts/frontmatter-lint.mjs`](../../../scripts/frontmatter-lint.mjs) значение для оглавлений); при необходимости `related_pages` — только на существующие slug.
- **Тело:** перечень всех карточек источников данного субъекта с **конкретными** ссылками `/data-sources/regional/<slug>` и одной строкой пояснения к каждой; опционально группировка по группам категорий из таблицы; перекрёстные ссылки на методические страницы корня regional (например «как искать», консолидированные бюджеты), где уместно.

Каждая карточка источника субъекта MUST включать slug сводной страницы этого субъекта в `related_pages` (наряду с прочими обязательными связями по [`wiki/data-sources/data-source-card-template.md`](../../../wiki/data-sources/data-source-card-template.md)).

Для субъектов, входящих в справочник округа, но **ещё не** имеющих ни одной карточки источника, MAY существовать только сводная страница-заготовка с явным пояснением статуса на дату `last_updated` (без фиктивных карточек).

### Scenario: Subject overview lists concrete source slugs

- **GIVEN** у субъекта есть три опубликованные карточки источников
- **WHEN** читатель открывает сводную страницу субъекта
- **THEN** он видит три ссылки с каноническими `/data-sources/regional/<slug>` и пояснениями, а не отсылку только к корню раздела

## Requirement: Coverage of subject folders

Проект SHOULD создать папки и README округов для **полного** перечня субъектов РФ, согласованного с редакцией (официальный перечень субъектов федерации), чтобы навигация по округам не имела «дыр» из-за отсутствия папки. Минимально допустимый объём MAY ограничиваться субъектами, присутствующими в [`_dev/rf_finance_sources_table_full.md`](../../../_dev/rf_finance_sources_table_full.md), если это явно зафиксировано в change `proposal` как поэтапная волна с датой расширения до полного перечня.

## Requirement: Ingestion from the research table

Источник строк для массового создания карточек: Markdown-таблица в [`_dev/rf_finance_sources_table_full.md`](../../../_dev/rf_finance_sources_table_full.md) (вводный текст файла допускает XLSX как рабочий формат исследования; если XLSX версиируется в репозитории, путь к нему SHOULD быть указан в change `proposal` и в редакционных заметках; иначе **канон парсинга для автоматизации** — Markdown-таблица в этом файле).

Правила импорта:

1. **Маппинг субъекта:** колонка «Субъект РФ» MUST сопоставляться с `subject_slug` из справочника [`_dev/regional-directory.yaml`](../../../_dev/regional-directory.yaml) (или `.md`); несовпадение строки и справочника MUST разрешаться до коммита (правка справочника или строки таблицы).
2. **Дедупликация URL:** перед созданием новой карточки нормализовать URL (схема, хост, путь без завершающего `/`); при дубликате в рамках одного субъекта — одна карточка с объединённым описанием **или** явная политика редакции в change (например сохранение отдельных карточек при разном юридическом смысле одного хоста) — выбранная политика MUST быть единой в волне импорта.
3. **Существующие карточки:** выполнить сопоставление по `source_url` / регистрируемому домену с уже существующими `.md` под `wiki/data-sources/regional/`; при совпадении — **расширить** существующую карточку и обновить связи, а не создавать вторую с тем же каноническим входом.
4. **Статусы и качество:** значения колонки «Статус» и сомнительные URL SHOULD приводить к `draft: true` до редакционной проверки; заполнение блока «Качество и верификация» и `last_verified` — по [`data-source-quality`](../data-source-quality/spec.md); строки, явно описывающие **не** региональный первичный контур (ошибочно попавший федеральный агрегат), SHOULD исключаться из regional-карточек или помечаться вне импорта с фиксацией в комментарии к PR.
5. **Именование новых slug:** алгоритм вида `<subject_slug>-<category-token>-<short-id>` (латиница, дефисы); длина и уникальность MUST проверяться скриптом или чеклистом перед merge; коллизии MUST устраняться до merge.

### Scenario: Imported draft respects quality gate

- **GIVEN** строка таблицы имеет статус «частично найдено / требует проверки»
- **WHEN** по ней создаётся карточка
- **THEN** карточка остаётся с `draft: true` или содержит явную оговорку непроверенности в блоке качества до снятия черновика редакцией

## Requirement: Documentation and corpus gates

Реализация SHALL обновить:

- [`AGENTS.md`](../../../AGENTS.md) — раздел про `wiki/data-sources/regional/`: разрешить два уровня вложенности (`fed_okrug_slug`, `subject_slug`) при сохранении правила плоского `slug: /data-sources/regional/<basename>` для карточек источников и сводных страниц;
- [`wiki/data-sources/data-source-card-template.md`](../../../wiki/data-sources/data-source-card-template.md) — путь к файлу для regional: отразить иерархию и неизменность публичного slug;
- [`wiki/data-sources/regional/README.md`](../../../wiki/data-sources/regional/README.md) — блок навигации «По федеральным округам и субъектам» поверх существующих быстрых входов.

После существенных правок корпуса MUST выполняться (и проходить) как минимум:

- `npm run lint:frontmatter`
- `npm run export:knowledge -- --check` и коммит [`exports/knowledge-index.jsonl`](../../../exports/knowledge-index.jsonl), [`exports/knowledge-graph.json`](../../../exports/knowledge-graph.json) при изменении wiki согласно [`AGENTS.md`](../../../AGENTS.md);
- `npm run lint:related-pages`
- при затронутых howto/intro — `npm run lint:howto`, `npm run lint:qa`, `npm run lint:corpus` по релевантности изменений.

Каскадное обновление входящих ссылок SHOULD охватывать как минимум: [`wiki/intro/data-map.md`](../../../wiki/intro/data-map.md), [`wiki/intro/wiki-filling-plan.md`](../../../wiki/intro/wiki-filling-plan.md), how-to с региональным контуром закупок, `related_pages` федеральных карточек, ссылающихся на regional-slug (поиск по репозиторию перед merge).

## Requirement: Pilot matrix compatibility

[`wiki/data-sources/regional/regional-disclosure-matrix.md`](../../../wiki/data-sources/regional/regional-disclosure-matrix.md) и требования capability [`regional-municipal-pilot`](../regional-municipal-pilot/spec.md) остаются в силе: ссылки на карточки источников MUST по-прежнему использовать форму `/data-sources/regional/<slug>` независимо от глубины файла на диске.

### Scenario: Matrix row still links to pilot procurement card

- **GIVEN** матрица содержит ссылку на slug закупок субъекта
- **WHEN** файл карточки перенесён в подпапку округа и субъекта
- **THEN** slug в матрице не требует изменения

## Risks and follow-up waves (информативно)

- Рост сводной страницы и списка `related_pages` при большом числе источников на субъект: допускается волна 2 — разбиение по категориям таблицы на подстраницы с отдельными slug.
- Расхождение числа субъектов в таблице и полного перечня РФ: вести в [`_dev/regional-directory.yaml`](../../../_dev/regional-directory.yaml) (или `.md`) явный статус покрытия.
- После публикации **каноном** остаётся wiki; таблица в `_dev/` — источник для массового старта и аудита, не дублирующий тело карточек без процедуры синхронизации.
