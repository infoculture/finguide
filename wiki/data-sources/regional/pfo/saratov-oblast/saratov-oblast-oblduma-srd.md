---
title: 'Саратовская область: Саратовская областная Дума (srd.ru)'
sidebar_label: Саратовская областная Дума
tags:
  - data-source
  - regional
  - legal
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/saratov-oblast-oblduma-srd
source_url: 'https://srd.ru/'
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
  Официальный сайт законодательного органа: законы области, проекты,
  парламентские материалы и раздел нормативных документов.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saratov-oblast-sources-overview
  - /data-sources/regional/saratov-oblast-npa-pravo-region64
  - /data-sources/regional/saratov-oblast-minfin
  - /glossary/budget-powers
  - /data-sources/regional/how-to-find-regional-data
---

# Саратовская область: Саратовская областная Дума (srd.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** законодательный орган |
| Тип доступа | Официальный **парламентский** портал |
| Основные форматы | HTML; приложения к законам — **PDF** и др. |
| Оператор | Саратовская областная Дума |
| Режим доступа | Открытый просмотр |

Коротко: **проекты** и сопутствующие материалы по **бюджетному** законодательству; **официально опубликованные** тексты актов сверяйте с **[pravo.gov.ru](/data-sources/regional/saratov-oblast-npa-pravo-region64)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — зависит от наполнения разделов документооборота |
| Машиночитаемость (`machine_readability`) | HTML; стабильного **единого API** в карточке не фиксировалось |
| Юридическая значимость (`legal_significance`) | официальный сайт **представительного** органа |
| Задержка обновления (`update_lag`) | привязана к **заседаниям** и циклу рассмотрения законов |
| Глубина архива (`archive_depth`) | определяется разделом **нормативных** документов и архивом созывов |
| Лицензия (`license_or_terms`) | правила **srd.ru** |

## Описание

На портале размещаются **законы** Саратовской области и **проекты**; для бюджетной тематики полезно сопоставлять с **[бюджетными полномочиями](/glossary/budget-powers)** и далее с **финансовыми** витринами **[Минфина](/data-sources/regional/saratov-oblast-minfin)**.

## Оператор

Саратовская областная Дума — канонический вход: https://srd.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://srd.ru/ | HTML |
| Раздел нормативных документов (пример структуры) | https://srd.ru/index.php/component/docs/?view=zaks&menu=508&selmenu=510 | HTML |

## Объекты данных и показатели

- **Проекты** и **принятые** законы (в т.ч. о **бюджете**).
- **Повестки**, **стенограммы** и иные материалы — по наполнению сайта.
- Для **юридически значимой** даты и текста после подписания используйте **[опубликование](/data-sources/regional/saratov-oblast-npa-pravo-region64)**.

## Периодичность обновления

В соответствии с **сессионным** графиком и событиями законодательного процесса.

## Ограничения и особенности

- URL внутренних компонентов CMS могут быть **громоздкими**; при автоматизации закладывайте проверку **стабильности** ссылок.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 "https://srd.ru/"
```

## Связанные страницы wiki

- [Опубликование НПА (region64)](/data-sources/regional/saratov-oblast-npa-pravo-region64) — официальные тексты после опубликования.
- [Министерство финансов Саратовской области](/data-sources/regional/saratov-oblast-minfin) — исполнение и открытый бюджет.
- [Бюджетные полномочия](/glossary/budget-powers) — роли уровней власти.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.
- [Сводная страница субъекта](/data-sources/regional/subject-saratov-oblast-sources-overview) — все источники по Саратовской области.

## Не путать с

- **pravo.gov.ru** — это **публикация**; сайт Думы — **законодательный** процесс и **проекты**.
