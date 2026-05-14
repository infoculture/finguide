---
title: Аудит воспроизводимости how-to
sidebar_label: Аудит how-to
description: >-
  Сводная таблица опубликованных инструкций: наличие воспроизводимого примера,
  явных входных данных и проверки результата; приоритет доработок.
tags:
  - intro
  - howto
  - editorial
last_updated: 2026-05-14T00:00:00.000Z
content_type: reference
slug: /intro/howto-reproducibility-audit
related_pages:
  - /howto
  - /intro/wiki-filling-plan
---

# Аудит воспроизводимости how-to

Артефакт закрывает требование сценария **«How-to reproducibility audit»** в спецификациях репозитория (`openspec/specs/reproducible-analytics`, `openspec/specs/howto-playbook`): **классификация** опубликованных страниц `wiki/howto/**/*.md` (кроме `README.md`, `howto-page-template.md` и черновиков).

**Легенда:** «Пример» — раздел `## Воспроизводимый пример` с рабочим кодом или командами (не закомментированный скелет); «Входы» — раздел `## Входные данные` с перечислением конкретных URL/наборов/периодов; «Проверка» — раздел `## Проверка результата` с явными критериями.

| Страница | Пример | Входы | Проверка | Заметки |
| --- | --- | --- | --- | --- |
| [/howto/access/budget-gov-api](/howto/access/budget-gov-api) | да | да | да | — |
| [/howto/access/bus-opendata](/howto/access/bus-opendata) | да | да | да | — |
| [/howto/access/cbr-api](/howto/access/cbr-api) | да | да | да | — |
| [/howto/access/clearspending](/howto/access/clearspending) | да | да | да | — |
| [/howto/access/gisnauka](/howto/access/gisnauka) | да | да | да | — |
| [/howto/access/minfin-api](/howto/access/minfin-api) | да | да | да | — |
| [/howto/access/regional-portals](/howto/access/regional-portals) | да | да | да | — |
| [/howto/access/roskazna-reports](/howto/access/roskazna-reports) | да | да | да | — |
| [/howto/analysis/budget-execution](/howto/analysis/budget-execution) | да | да | да | — |
| [/howto/analysis/kbc-decoding](/howto/analysis/kbc-decoding) | да | да | да | — |
| [/howto/analysis/eis-procurement-identifiers-decoding](/howto/analysis/eis-procurement-identifiers-decoding) | да | да | да | — |
| [/howto/analysis/ngo-funding](/howto/analysis/ngo-funding) | да | да | да | — |
| [/howto/analysis/regional-budget-analysis](/howto/analysis/regional-budget-analysis) | да | да | да | — |
| [/howto/analysis/tax-org-identifiers-decoding](/howto/analysis/tax-org-identifiers-decoding) | да | да | да | — |
| [/howto/automation/pandas-kbc](/howto/automation/pandas-kbc) | да | да | да | — |
| [/howto/analysis/debt-analysis](/howto/analysis/debt-analysis) | да | да | да | Паспорт `7710168360-DomesticDebt` через `list.csv`; см. [/howto/access/minfin-api](/howto/access/minfin-api). |
| [/howto/analysis/gov-programs](/howto/analysis/gov-programs) | да | да | да | Учебный план/факт по показателям; каталог [/data-sources/federal/gasu-programs](/data-sources/federal/gasu-programs). |
| [/howto/analysis/procurement-analysis](/howto/analysis/procurement-analysis) | да | да | да | Минимальный smoke `curl` к витрине ЕИС; массовые выгрузки — через [/data-sources/federal/zakupki-xml](/data-sources/federal/zakupki-xml) и [/howto/automation/python-zakupki](/howto/automation/python-zakupki). |
| [/howto/analysis/subsidy-tracking](/howto/analysis/subsidy-tracking) | да | да | да | Склейка учебных CSV (ИНН+год); живые URL — в «Входных данных» и [/howto/access/budget-gov-api](/howto/access/budget-gov-api). |
| [/howto/analysis/time-series](/howto/analysis/time-series) | да | да | да | Номинал и toy-CPI; см. [/howto/access/cbr-api](/howto/access/cbr-api) для официальных рядов. |
| [/howto/automation/data-quality](/howto/automation/data-quality) | да | да | да | Дубликаты (КБК, год) на учебном CSV; см. [/reference/data-quality-dimensions](/reference/data-quality-dimensions). |
| [/howto/automation/data-update-pipeline](/howto/automation/data-update-pipeline) | да | да | да | `Makefile` + `curl` для `minfin.gov.ru/opendata/list.csv`; фрагмент `schedule` GitHub Actions. |
| [/howto/automation/duckdb-budgets](/howto/automation/duckdb-budgets) | да | да | да | `read_csv_auto` + `sum` на учебном CSV; `pip install duckdb`. |
| [/howto/automation/python-budget-api](/howto/automation/python-budget-api) | да | да | да | Сборка URL `meta.json` из встроенного фрагмента `list.json`; живой запрос — в [/howto/access/budget-gov-api](/howto/access/budget-gov-api). |
| [/howto/automation/python-zakupki](/howto/automation/python-zakupki) | да | да | да | Учебный ZIP+`iterparse` в репозитории; реальные теги — по XSD СОИ. |

## Приоритет доработок (кратко)

1. **Новые how-to** — сразу включайте раздел **`## Воспроизводимый пример`** и конкретные URL во **«Входных данных»**; ориентир — [карта данных](/intro/data-map) и [обзор отчётности](/reporting/reporting-overview).
2. Страницы с **частично** в колонке «Пример» (если появятся) — убрать закомментированные плейсхолдеры, оставить проверенный минимум.
3. После каждой доработки обновляйте дату `last_updated` у how-to и **эту таблицу** в одном PR.

## Связанные материалы

- [План наполнения wiki](/intro/wiki-filling-plan)
- Шаблон для авторов: файл `wiki/howto/howto-page-template.md` в репозитории (страница с `draft: true` не входит в индекс экспорта).
