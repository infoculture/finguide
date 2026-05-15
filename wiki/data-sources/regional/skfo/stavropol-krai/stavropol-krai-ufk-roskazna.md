---
title: 'Ставропольский край: УФК России (казначейство по СК)'
sidebar_label: УФК по Ставропольскому краю
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-ufk-roskazna
source_url: 'https://stavropol.roskazna.gov.ru/'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Сайт Управления Федерального казначейства по Ставропольскому краю: кассовое обслуживание,
  разделы по федеральному бюджету и деятельности казначейства на территории субъекта.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /information-systems/federal/roskazna-portal
  - /data-sources/regional/stavropol-krai-minfin-mfsk
  - /data-sources/federal/budget-gov-ru-datasets
---

# Ставропольский край: УФК России (казначейство по СК)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** орган на **территории** Ставропольского края (**казначейское** сопровождение) |
| Тип доступа | Публичный **сайт** УФК |
| Основные форматы | **HTML** |
| Оператор | **УФК России** по Ставропольскому краю |
| Режим доступа | Открытый |

Коротко: **официальный** вход к **материалам** **УФК** по краю (**кассы**, **объявления**, **контакты**). См. также карточку **[портала Росказначейства](/information-systems/federal/roskazna-portal)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** главной, **HTTP 200**, TLS с проверкой сертификата) |
| Полнота (`data_completeness`) | **частичная** — публичный сайт **не** заменяет **федеральные** ИС учёта |
| Машиночитаемость (`machine_readability`) | **HTML** |
| Юридическая значимость (`legal_significance`) | **официальный** **федеральный** орган на **регионе** |
| Задержка обновления (`update_lag`) | **разная** |
| Глубина архива (`archive_depth`) | зависит от **новостной** части сайта |
| Лицензия (`license_or_terms`) | по **правилам** **Росказначейства** |

## Описание

На сайте **УФК** публикуются **новости**, **реквизиты**, **информация** для **участников** бюджетного процесса по **федеральному** контуру. **Региональный** бюджет края — через **[Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk)** и **федеральные** витрины.

## Оператор

УФК по Ставропольскому краю — https://stavropol.roskazna.gov.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница УФК | https://stavropol.roskazna.gov.ru/ | HTML |

## Объекты данных и показатели

- **Новости** и **служебная** информация **УФК**.
- **Не** является **единой** выгрузкой **кассовых** рядов; для **машиночитаемых** **федеральных** данных используйте **[budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)**.

## Периодичность обновления

**По мере** публикаций **ведомства**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-ufk-stavropol-check/1.0" \
  "https://stavropol.roskazna.gov.ru/"
```

## Связанные страницы wiki

- [Портал Росказначейства (ИС)](/information-systems/federal/roskazna-portal) — **федеральный** контекст **казначейских** сервисов.
- [Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk) — **региональный** бюджетный контур.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **машиночитаемые** **федеральные** ряды.

## Не путать с

- **[Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk)** — **региональный** бюджет; **УФК** — **федеральное** **казначейское** сопровождение на **территории** края.
