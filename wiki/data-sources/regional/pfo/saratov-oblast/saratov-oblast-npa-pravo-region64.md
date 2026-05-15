---
title: 'Саратовская область: опубликование НПА (publication.pravo.gov.ru, region64)'
sidebar_label: НПА Саратовской области (pravo.gov.ru)
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-14
slug: /data-sources/regional/saratov-oblast-npa-pravo-region64
source_url: 'https://publication.pravo.gov.ru/documents/block/region64'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html
description: >-
  Федеральный сервис опубликования правовой информации: блок региональных
  документов для Саратовской области (region64) — официальные тексты законов и
  иных актов после опубликования.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saratov-oblast-sources-overview
  - /data-sources/regional/saratov-oblast-oblduma-srd
  - /data-sources/regional/saratov-oblast-minfin
  - /data-sources/regional/saratov-oblast-roskazna-ufk
  - /glossary/budget-process
  - /data-sources/regional/how-to-find-regional-data
---

# Саратовская область: опубликование НПА (publication.pravo.gov.ru, region64)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональные** НПА, прошедшие **официальное опубликование** |
| Тип доступа | **Федеральная** витрина **pravo.gov.ru** (блок **region64**) |
| Основные форматы | HTML; тексты актов — **PDF** и связанные форматы по карточке документа |
| Оператор | Оператор сервиса **опубликования** (федеральный контур); содержание актов — органы **Саратовской области** |
| Режим доступа | Открытый просмотр |

Коротко: **канонический** вход для **официальных** текстов **региональных** НПА после опубликования; **проекты** и **ход рассмотрения** — на **[сайте Областной Думы](/data-sources/regional/saratov-oblast-oblduma-srd)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — полнота поиска зависит от индексации и типа документа |
| Машиночитаемость (`machine_readability`) | HTML; **массовая** выгрузка без **официального API** в карточке не описывается |
| Юридическая значимость (`legal_significance`) | **официальное опубликование** в смысле витрины pravo.gov.ru |
| Задержка обновления (`update_lag`) | от **момента** подписания и передачи на публикацию до появления в ленте |
| Глубина архива (`archive_depth`) | определяется политикой хранения **region64** |
| Лицензия (`license_or_terms`) | правила **pravo.gov.ru** |

## Описание

Блок **region64** используют для проверки **реквизитов**, **даты** и **полного текста** законов Саратовской области, в том числе **о бюджете**. Для понимания **этапов** подготовки бюджета см. **[бюджетный процесс](/glossary/budget-process)** и материалы **[Минфина](/data-sources/regional/saratov-oblast-minfin)**.

## Оператор

Официальное опубликование правовой информации — канонический вход: https://publication.pravo.gov.ru/documents/block/region64

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Лента документов субъекта | https://publication.pravo.gov.ru/documents/block/region64 | HTML |

## Объекты данных и показатели

- **Законы** Саратовской области, **постановления** и иные акты в объёме публикации.
- Метаданные: **номер**, **дата**, **вид** документа (по карточке).
- **Не** заменяет **финансовые** таблицы исполнения — только **нормативную** базу.

## Периодичность обновления

По мере **публикации** новых и изменённых актов.

## Ограничения и особенности

- Доступность из отдельных сетей может **варьироваться** (таймауты); при сбоях повторите запрос позже или откройте в браузере.
- Для **скрейпинга** соблюдайте нагрузку и **условия** портала.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 30 "https://publication.pravo.gov.ru/documents/block/region64" \
  || echo "при таймауте повторите позже или проверьте в браузере"
```

## Связанные страницы wiki

- [Саратовская областная Дума](/data-sources/regional/saratov-oblast-oblduma-srd) — проекты законов и парламентский контур.
- [Министерство финансов Саратовской области](/data-sources/regional/saratov-oblast-minfin) — бюджетные витрины и отчётность после принятия законов.
- [УФК Росказны по Саратовской области](/data-sources/regional/saratov-oblast-roskazna-ufk) — казначейский контур исполнения после принятия законов.
- [Бюджетный процесс](/glossary/budget-process) — этапы подготовки и утверждения бюджета.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.
- [Сводная страница субъекта](/data-sources/regional/subject-saratov-oblast-sources-overview) — все источники по Саратовской области.

## Не путать с

- **Сайт Минфина** — там **рабочие** материалы и отчёты; **юридически** фиксирующий текст закона обычно ищут здесь, на **pravo.gov.ru**.
