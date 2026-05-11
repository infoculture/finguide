---
title: "История изменений"
sidebar_label: "История изменений"
description: >-
  Хроника структурных и содержательных обновлений базы знаний и миграции на Docusaurus.
tags: [intro, changelog]
last_updated: 2026-05-11
---

# История изменений

История структурных и содержательных обновлений базы знаний.

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
