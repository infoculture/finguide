---
title: 'Краснодарский край: УФК России (казначейство по КК)'
sidebar_label: УФК по Краснодарскому краю
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/krasnodar-krai-ufk-roskazna
source_url: 'https://krasnodar.roskazna.gov.ru/'
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
  Сайт Управления Федерального казначейства по Краснодарскому краю: кассовое обслуживание,
  разделы по федеральному бюджету и деятельности казначейства на территории субъекта.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-krasnodar-krai-sources-overview
  - /information-systems/federal/roskazna-portal
  - /data-sources/regional/krasnodar-krai-minfin-krasnodar
  - /data-sources/federal/budget-gov-ru-datasets
---

# Краснодарский край: УФК России (казначейство по КК)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** орган на **территории** Краснодарского края (**казначейское** сопровождение) |
| Тип доступа | Публичный **сайт** **УФК** |
| Основные форматы | **HTML** |
| Оператор | **УФК России** по Краснодарскому краю |
| Режим доступа | Открытый |

Коротко: **официальный** вход к **материалам** **УФК** по краю (**кассы**, **объявления**, **контакты**). См. также **[портал Росказначейства](/information-systems/federal/roskazna-portal)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** главной, **HTTP 200** при проверке **TLS** с `-k`; у **части** клиентов возможна ошибка **цепочки** сертификата) |
| Полнота (`data_completeness`) | **частичная** — публичный сайт **не** заменяет **федеральные** ИС учёта |
| Машиночитаемость (`machine_readability`) | **HTML** |
| Юридическая значимость (`legal_significance`) | **официальный** **федеральный** орган на **регионе** |
| Задержка обновления (`update_lag`) | **разная** |
| Глубина архива (`archive_depth`) | зависит от **новостной** части сайта |
| Лицензия (`license_or_terms`) | по **правилам** **Росказначейства** |

## Описание

На сайте **УФК** публикуются **новости**, **реквизиты**, **информация** для **участников** бюджетного процесса по **федеральному** контуру. **Региональный** бюджет края — через **[Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar)** и **федеральные** витрины.

## Оператор

УФК по Краснодарскому краю — https://krasnodar.roskazna.gov.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница УФК | https://krasnodar.roskazna.gov.ru/ | HTML |

## Объекты данных и показатели

- **Новости** и **служебная** информация **УФК**.
- **Не** является **единой** выгрузкой **кассовых** рядов; для **машиночитаемых** **федеральных** данных — **[budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)**.

## Периодичность обновления

**По мере** публикаций **ведомства**.

## Примеры доступа

```bash
curl -k -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-ufk-kk-check/1.0" \
  "https://krasnodar.roskazna.gov.ru/"
```

## Связанные страницы wiki

- [Портал Росказначейства (ИС)](/information-systems/federal/roskazna-portal) — **федеральный** контекст **казначейских** сервисов.
- [Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar) — **региональный** бюджетный контур.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **машиночитаемые** **федеральные** ряды.

## Не путать с

- **[Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar)** — **региональный** бюджет; **УФК** — **федеральное** **казначейское** сопровождение на **территории** края.
