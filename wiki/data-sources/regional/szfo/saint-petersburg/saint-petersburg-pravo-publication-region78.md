---
title: 'Санкт-Петербург: официальное опубликование НПА (publication.pravo.gov.ru, region78)'
sidebar_label: НПА СПб (region78)
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-pravo-publication-region78
source_url: 'https://publication.pravo.gov.ru/documents/block/region78'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
description: >-
  Федеральная витрина официального опубликования: блок правовых актов субъекта
  Санкт-Петербург (код region78), включая законы о бюджете и иные финансовые НПА
  после их опубликования.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-legislative-assembly-budget
  - /information-systems/federal/pravo-gov-ru
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /data-sources/regional/how-to-find-regional-data
---

# Санкт-Петербург: официальное опубликование НПА (publication.pravo.gov.ru, region78)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — **официально опубликованные** НПА субъекта в едином федеральном контуре ОИППИ |
| Тип доступа | Публичный поиск и просмотр документов |
| Основные форматы | **HTML**; экспорт отдельных документов **PDF/XML** (по интерфейсу портала) |
| Оператор | **Официальный интернет-портал правовой информации** (федеральный оператор витрины) |
| Режим доступа | Открытый |

Коротко: **канонический** корпус **опубликованных** актов субъекта, включая **законы о бюджете**. Для **проектов** и **материалов рассмотрения** до принятия см. **[Законодательное Собрание](/data-sources/regional/saint-petersburg-legislative-assembly-budget)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **высокая** для юридически значимого текста **после** опубликования |
| Машиночитаемость (`machine_readability`) | **смешанный**: HTML-интерфейс; машинный доступ регламентируется правилами портала |
| Юридическая значимость (`legal_significance`) | **официальное опубликование** в контуре ОИППИ |
| Задержка обновления (`update_lag`) | от подписания до появления в витрине — по регламенту опубликования |
| Глубина архива (`archive_depth`) | архив опубликованных актов на портале |
| Лицензия (`license_or_terms`) | см. правила `pravo.gov.ru` / `publication.pravo.gov.ru` |

## Описание

Блок **region78** агрегирует **опубликованные** правовые акты Санкт-Петербурга. Для бюджетного анализа это точка сверки **номера**, **даты** и **редкции** закона о бюджете после выхода из цепочки подписания.

## Оператор

**Официальный интернет-портал правовой информации** — региональный блок: https://publication.pravo.gov.ru/documents/block/region78

Карточка ИС: [ОИППИ / pravo.gov.ru](/information-systems/federal/pravo-gov-ru) — роль: **официальное опубликование** НПА.

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Блок НПА субъекта (region78) | https://publication.pravo.gov.ru/documents/block/region78 | HTML |

## Объекты данных и показатели

- **Правовые акты** субъекта: законы, постановления и иные виды — с реквизитами опубликования.
- **Бюджетный контур** — законы (и изменения) о бюджете Санкт-Петербурга в **окончательной** редакции после опубликования.
- Ключи: **вид документа**, **номер**, **дата принятия/опубликования**, **идентификатор** в системе портала.

## Периодичность обновления

**По событиям** опубликования актов; при массовых изменениях бюджетного законодательства — всплески в конце года.

## Ограничения и особенности

- Не подменяйте **проект** на сайте парламента **опубликованным** текстом без сверки даты в блоке **region78**.
- Структура URL региональных блоков может обновляться — при сбое входа проверьте навигацию с **[главной pravo.gov.ru](https://pravo.gov.ru/)**.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://publication.pravo.gov.ru/documents/block/region78"
```

## Связанные страницы wiki

- [Законодательное Собрание — раздел о бюджете](/data-sources/regional/saint-petersburg-legislative-assembly-budget) — стадия законопроекта.
- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — проекты и материалы исполнительной ветви.
- [ОИППИ / pravo.gov.ru](/information-systems/federal/pravo-gov-ru) — описание федерального контура.
- [Сводная по источникам СПб](/data-sources/regional/subject-saint-petersburg-sources-overview).

## Не путать с

- **Старый HTTP-вход** в таблицах импорта — используйте **HTTPS** (`https://publication.pravo.gov.ru/...`).
