---
title: 'Республика Северная Осетия — Алания: УФНС России (nalog.gov.ru, код региона 15)'
sidebar_label: УФНС по РСО-Алания
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-north-ossetia-alania-ufns-nalog-gov-ru-region-15
source_url: 'https://www.nalog.gov.ru/rn15/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - xlsx
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Региональный раздел сайта ФНС России для Республики Северная Осетия — Алания: структура УФНС,
  новости, справочная информация для налогоплательщиков; часть материалов и статистики ведётся
  через федеральные разделы и открытые данные ФНС.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-north-ossetia-alania-sources-overview
  - /data-sources/regional/republic-of-north-ossetia-alania-minfin-alania-gov-ru
  - /data-sources/regional/republic-of-north-ossetia-alania-npa-documents-alania-gov-ru
  - /data-sources/regional/republic-of-north-ossetia-alania-open-data-alania-gov-ru
  - /data-sources/regional/republic-of-north-ossetia-alania-sevkavkazstat-rosstat-subject-publications
  - /data-sources/regional/republic-of-north-ossetia-alania-ufk-roskazna-alania-gov-ru
  - /information-systems/federal/giis-eb
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Республика Северная Осетия — Алания: УФНС России (nalog.gov.ru, код региона 15)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Северная Осетия — Алания** — **федеральный** налоговый контур на территории субъекта |
| Тип доступа | Публичный **региональный** раздел **nalog.gov.ru** |
| Основные форматы | **HTML**; отдельные **табличные** выгрузки — через **федеральные** витрины ФНС и **открытые данные** |
| Оператор | **Управление ФНС России по Республике Северная Осетия — Алания** |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **официальный** вход к **региональному** представительству ФНС: контакты, новости, структура инспекций. Для **сводной** бюджетной аналитики по субъекту дополнительно используйте **[Минфин РСО-Алания](/data-sources/regional/republic-of-north-ossetia-alania-minfin-alania-gov-ru)** и **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 (**HTTP 200** для `https://www.nalog.gov.ru/rn15/`; корень без завершающего `/` отдаёт **404**) |
| Полнота (`data_completeness`) | **частичная** — региональный раздел **не** заменяет **весь** корпус открытых данных и отчётности ФНС |
| Машиночитаемость (`machine_readability`) | **смешанный** — преимущественно **веб**; машинные наборы — в **[каталоге открытых данных ФНС](/data-sources/federal/)** (поиск по ведомству) |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **федерального** органа власти |
| Задержка обновления (`update_lag`) | зависит от **новостного** цикла и **федеральных** публикаций |
| Глубина архива (`archive_depth`) | определяется **архивом** новостей и **подразделами** сайта |
| Лицензия (`license_or_terms`) | правила **nalog.gov.ru** |

## Описание

Раздел **rn15** на **nalog.gov.ru** относится к **Республике Северная Осетия — Алания** (код **15** в нумерации субъектов на портале ФНС). Здесь публикуются **региональные** новости, **контакты** УФНС и **обособленных подразделений**, справочные материалы. **Налоговая статистика** и **поступления** в бюджеты часто раскрываются на **федеральном** уровне агрегировано или в **открытых наборах** — сверяйте с карточками **[федеральных источников ФНС](/data-sources/federal/)**.

## Оператор

Управление ФНС России по Республике Северная Осетия — Алания — https://www.nalog.gov.ru/rn15/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Региональный корень (канонический) | https://www.nalog.gov.ru/rn15/ | HTML |

## Объекты данных и показатели

- **Организационная** информация: структура **УФНС**, **МИФНС**, контакты.
- **Новости** и разъяснения для налогоплательщиков (не **первичный** источник бюджетного **плана/факта**).
- **Ключи связки** с бюджетной аналитикой: **ИНН**, **КПП**, **ОКТМО**, **КБК** — при переходе к **федеральным** наборам и **[казначейским](/data-sources/regional/republic-of-north-ossetia-alania-ufk-roskazna-alania-gov-ru)** витринам.

## Периодичность обновления

**Нерегулярно** по **новостям** и **событиям**; отдельные **федеральные** справочники и наборы обновляются по **своим** регламентам.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-fns-rn15-check/1.0" \
  "https://www.nalog.gov.ru/rn15/"
```

## Ограничения и особенности

- Используйте URL **с завершающим слэшем** (`/rn15/`), иначе возможен **404** на корне раздела.
- Часть **TLS-цепочек** на смежных **гос** сайтах может требовать актуального хранилища корневых сертификатов в среде клиента.

## Связанные страницы wiki

- [Министерство финансов РСО-Алания](/data-sources/regional/republic-of-north-ossetia-alania-minfin-alania-gov-ru) — региональный **бюджетный** контур.
- [Северо-Кавказстат: материалы по РСО-Алания](/data-sources/regional/republic-of-north-ossetia-alania-sevkavkazstat-rosstat-subject-publications) — **официальная статистика** по субъекту.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **машиночитаемые** федеральные ряды для сверки.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст.

## Не путать с

- **[Открытые данные на портале республики](/data-sources/regional/republic-of-north-ossetia-alania-open-data-alania-gov-ru)** — **региональный** каталог наборов, а не сайт **ФНС**.
