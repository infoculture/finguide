---
title: История изменений
sidebar_label: История изменений
description: >-
  Хроника структурных и содержательных обновлений базы знаний и миграции на
  Docusaurus.
tags:
  - intro
  - changelog
last_updated: 2026-05-13T12:00:00.000Z
content_type: reference
---

# История изменений

История структурных и содержательных обновлений базы знаний.

## 2026-05-13

- Источники данных: каталог машиночитаемых наборов ГИИС «Электронный бюджет» — индексная страница [наборы данных budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets) и покарточное описание наборов портала открытых данных (идентификаторы `7710168360-*`, `7710568760-*`) в подпапке `wiki/data-sources/federal/budget/ebudget/`; публичные URL по-прежнему вида `/data-sources/federal/<slug>`.
- Источники данных: налоговый контур ФНС — обзорные витрины [ГИР БО (bo.nalog.gov.ru)](/data-sources/federal/bo-nalog-gov-ru), [pb.nalog.ru](/data-sources/federal/pb-nalog-ru), [реестр МСП](/data-sources/federal/rmsp-nalog-ru) и серия карточек наборов портала открытых данных ФНС (префикс идентификатора `7707329152-*`) в `wiki/data-sources/federal/nalog/`.
- Источники данных: наборы Казначейства России сгруппированы в подпапку `wiki/data-sources/federal/budget/roskazna/` (канонические `slug` в frontmatter сохранены).
- Источники данных: закупки — [единый агрегатор торговли (agregatoreat.ru)](/data-sources/federal/agregatoreat-ru), [сводная статистика ЕИС на главной портала](/data-sources/federal/zakupki-eis-statistics); уточнены перекрёстные ссылки в карточках [ЕИС как источника](/data-sources/federal/procurement) и смежных страницах.
- Источники данных: статистика — [BI-портал Росстата](/data-sources/federal/rosstat-bi-portal), [поиск показателей showdata](/data-sources/federal/rosstat-showdata-finder), [поступления и расходы СФР](/data-sources/federal/sfr-receipt-expenditure); правки в карточках [статистики ФНС по налогам](/data-sources/federal/nalog-statistics) и [региональной налоговой статистики](/data-sources/federal/nalog-regstats), [открытых данных Росстата](/data-sources/federal/rosstat-opendata).
- Источники данных: программы и организации — [реестр соглашений о защите и поощрении капиталовложений (СЗПК / СпИК)](/data-sources/federal/szpk-registry); обновления в карточках грантов и субсидий (в т.ч. [ГИС Наука НИОКР](/data-sources/federal/gisnauka-niokr-rid-budget)).
- How-to, доступ: новые страницы [Clearspending](/howto/access/clearspending) и [ГИС Наука](/howto/access/gisnauka); расширены инструкции по [API «Электронного бюджета»](/howto/access/budget-gov-api), [bus.gov.ru](/howto/access/bus-opendata), [API Банка России](/howto/access/cbr-api), [API Минфина](/howto/access/minfin-api), [региональным порталам](/howto/access/regional-portals) и [отчётам Росказны](/howto/access/roskazna-reports); удалена устаревшая страница про FTP закупок (`zakupki-ftp`).
- How-to, анализ и автоматизация: обновлены [расшифровка КБК в выгрузках](/howto/analysis/kbc-decoding) и [pandas для КБК](/howto/automation/pandas-kbc).
- Глоссарий: уточнения в карточке [КБК](/glossary/kbk); правки карточек ИС ([ФНС](/information-systems/federal/fnssite), [ГИС Наука](/information-systems/federal/gisnauka), [ЕИС](/information-systems/federal/zakupki)).
- Для сопровождения корпуса: скрипты генерации карточек наборов `npm run generate:budget-gov-opendata-cards`, `npm run generate:fns-opendata-cards`, `npm run refresh:budget-gov-opendata-sidebar-labels`; снимок страницы каталога ФНС в `scripts/data/fns-opendata-page-snapshot.md` для сверки списка наборов.
- Экспорт для RAG и графа ссылок: обновлены `exports/knowledge-index.jsonl` и `exports/knowledge-graph.json` (`npm run export:knowledge`).

## 2026-05-12

- Введение: страницы [Быстрый старт](/intro/getting-started) и [использование корпуса в RAG и ассистентах](/intro/rag-guide) (навигация по разделам, метаданные, экспорт и цитирование URL).
- Источники данных: карточки корпоративного раскрытия — [Интерфакс: единый интерфейс раскрытия информации (e-disclosure.ru)](/data-sources/federal/e-disclosure-ru), [раскрытие для инвесторов «Газпрома»](/data-sources/federal/gazprom-investor-disclosure), [раскрытие РЖД](/data-sources/federal/rzd-holding-disclosure).
- Источники данных: международные витрины — [IMF Government Finance Statistics (GFS)](/data-sources/international/imf-gfs), [OECD Fiscal data](/data-sources/international/oecd-fiscal-data), [UN Data](/data-sources/international/un-data).
- Источники данных: региональные — методическая страница [как искать региональные данные о бюджетах и госфинансах](/data-sources/regional/how-to-find-regional-data).
- Отчётность: обзор [отчётности организаций с государственным участием](/reporting/state-sector-overview) (связка с раскрытием, закупками и бюджетным контуром).
- Справочники: [поиск по кодам ОКТМО, КБК и КОСГУ](/reference/classification-codes-index) и заметка [о полнотекстовом поиске (DocSearch)](/reference/docsearch-setup).
- План наполнения [wiki](/intro/wiki-filling-plan) обновлён под направления по госкорпорациям, регионам и качеству навигации.
- How-to, анализ: страницы [ИНН, КПП, ОГРН и ОКТМО в выгрузках](/howto/analysis/tax-org-identifiers-decoding) и [идентификаторы закупок и контрактов (ЕИС)](/howto/analysis/eis-procurement-identifiers-decoding) (нормализация ключей, связка с [XML ЕИС](/data-sources/federal/zakupki-xml) и гражданским API [Clearspending](/data-sources/civil/clearspending)); обновлены перекрёстные ссылки в глоссарии ([ИНН](/glossary/inn), [КПП](/glossary/kpp)) и карточке [ЕИС как источника](/data-sources/federal/procurement).
- Для разработчиков пайплайнов и ИИ: в корне репозитория `KNOWLEDGE.md` и `llms.txt`, каталог `exports/` с `knowledge-index.jsonl` и `knowledge-graph.json` (генерация `npm run export:knowledge`); спецификации и проверки качества корпуса в `openspec/` (в т.ч. метаданные, экспорт, ворота CI); скрипты линтинга в `scripts/` — `npm run lint:frontmatter`, `lint:howto`, `lint:corpus`, `lint:related-pages`, `lint:qa`; CI в `.github/workflows/` (включая проверки ссылок). Правила для редакторов и агентов — в `AGENTS.md`.

## 2026-05-11

- Источники данных: добавлена карточка [programs.economy.gov.ru — веб-клиент АИС ГП](/data-sources/federal/programs-economy-ais-gp) (рабочий интерфейс рядом с [programs.gov.ru](/information-systems/federal/programs-gov)).
- Источники данных: добавлена карточка [Статкомитет СНГ — хаб данных и метаданных](/data-sources/international/cisstat-datahub) (портал [new.cisstat.org](https://new.cisstat.org/web/guest/datahub)).
- Источники данных: федеральные карточки в репозитории сгруппированы по подпапкам (`catalog/`, `budget/`, `zakupki/`, `programs-orgs/`, `statistics/`, `legacy/`); публичные URL вида `/data-sources/federal/<slug>` **без изменений** (явный `slug` в frontmatter каждой карточки).
- Источники данных: добавлена карточка [Минфин: мониторинг закупок (отчёты PDF, perfomance/contracts/purchases)](/data-sources/federal/minfin-purchases-monitoring).
- Источники данных: добавлена карточка [Минфин: краткая информация об исполнении бюджетов государственных внебюджетных фондов (outbud/execute)](/data-sources/federal/minfin-outbud-execute).
- Источники данных: добавлена карточка [Минфин: данные о движении средств и результатах управления ФНБ (statistics/fonds/fnb)](/data-sources/federal/minfin-fnb-statistics).
- Источники данных: добавлена карточка [Минфин: краткая информация об исполнении консолидированного бюджета РФ и ГВФ (conbud/execute)](/data-sources/federal/minfin-conbud-execute).
- Источники данных: добавлена карточка [Минфин: краткая информация об исполнении консолидированных бюджетов субъектов (subbud/execute)](/data-sources/federal/minfin-subbud-execute).
- Источники данных: добавлена карточка [Минфин: краткая информация об исполнении федерального бюджета (fedbud/execute)](/data-sources/federal/minfin-fedbud-execute).
- Источники данных: добавлена карточка [Единая площадка мер финансовой поддержки (promote.budget.gov.ru)](/data-sources/federal/promote-budget-gov-ru).
- Раздел **«Справочники»**: убраны пустые заглушки, добавлены страницы про идентификаторы в открытых данных, версии классификаций и бюджетный цикл; блок инструментов перенесён на страницу ссылок.
- Расширены отдельные справочники (ОКПД2 в закупках, ОКАТО/ОКТМО, коды организаций, международные стандарты и др.); восстановлена каноническая карточка источника «Сведения о закупках и контрактах (ЕИС)» по пути `/data-sources/federal/procurement`.
- Добавлены страницы [Карта данных](/intro/data-map) и [Таксономия тегов](/reference/tags-taxonomy); в шапке сайта — выпадающее меню «Разделы» и расширенный подвал со ссылками на все основные разделы; сборка с **жёсткой проверкой** битых ссылок и якорей (`onBrokenLinks`, `onBrokenAnchors`) и битых **Markdown**-ссылок между файлами (`onBrokenMarkdownLinks`); в CI GitHub Actions — `npm run typecheck` и `npm run build`.
- Документация для участников: файл **CONTRIBUTING.md** в корне репозитория (канонические URL в карточках, проверка сборкой); заполнены поля **description** у индексных README разделов в `wiki/`; на главной книги и в корневом README — блок для редакторов и инструментов ИИ с отсылками к AGENTS и how-to.
- Подробный перечень изменений — в [журнале обновлений](/reference/update-log).

## 2026-05-10

- Полная реорганизация репозитория под Docusaurus 3.
- Введены 11 канонических разделов: `intro`, `glossary`, `organizations`,
  `information-systems`, `budget-system`, `budget-classification`,
  `data-sources`, `howto`, `legal`, `reporting`, `reference`.
- Каждый термин глоссария вынесен в отдельный файл (RAG-совместимая структура).
- Информационные системы выделены в самостоятельный раздел и отделены от организаций-операторов.
- Унифицирован шаблон frontmatter для всех страниц.

## Более ранние версии

Первая версия книги существовала на платформе GitBook. История миграции:

- 2024–2025 — публикация книги на GitBook (`begtin.gitbook.io/opengovfinances`).
- 2026 — миграция исходников в Markdown и переход на Docusaurus.
- 2026-05 — текущая структурная реорганизация.

## Как фиксируются изменения

Подробности — в журнале коммитов GitHub-репозитория.
Ключевые этапы публикуются в файле [reference/update-log](/reference/update-log).
