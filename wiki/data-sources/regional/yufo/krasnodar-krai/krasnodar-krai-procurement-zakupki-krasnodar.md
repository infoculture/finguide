---
title: 'Краснодарский край: портал госзакупок (zakupki.krasnodar.ru)'
sidebar_label: Портал закупок КК (zakupki.krasnodar.ru)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-15
slug: /data-sources/regional/krasnodar-krai-procurement-zakupki-krasnodar
source_url: 'https://zakupki.krasnodar.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Официальный портал госзакупок Краснодарского края: региональные разделы закупок, методические
  материалы и ссылки на единую информационную систему в сфере закупок.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-krasnodar-krai-sources-overview
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/federal/procurement
  - /information-systems/federal/zakupki
  - /data-sources/regional/regional-procurement-sources-overview
---

# Краснодарский край: портал госзакупок (zakupki.krasnodar.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Краснодарский край** — **государственные** и **муниципальные** **закупки** в **региональном** контуре |
| Тип доступа | Публичный **портал** |
| Основные форматы | **HTML** |
| Оператор | **Портал** госзакупок Краснодарского края |
| Режим доступа | Открытый |

Коротко: **региональный** **вход** к **материалам** **закупок** края. **Массовые** **извещения**, **протоколы** и **контракты** — в **[ЕИС](/information-systems/federal/zakupki)** и **[сведениях о закупках](/data-sources/federal/procurement)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** главной, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — портал **не** заменяет **полный** каталог **контрактов** **ЕИС** |
| Машиночитаемость (`machine_readability`) | **HTML** |
| Юридическая значимость (`legal_significance`) | **официальный** **региональный** информационный ресурс |
| Задержка обновления (`update_lag`) | **разная** |
| Глубина архива (`archive_depth`) | **зависит** от **архива** разделов |
| Лицензия (`license_or_terms`) | по **сайту** |

## Описание

Портал **zakupki.krasnodar.ru** публикует **региональные** материалы по **закупкам**. Для **регулирования** контрактной системы и **методики** см. **[Департамент по регулированию контрактной системы](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar)** (**drcs.krasnodar.ru**).

## Оператор

Портал госзакупок Краснодарского края — https://zakupki.krasnodar.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница портала | https://zakupki.krasnodar.ru/ | HTML |

## Объекты данных и показатели

- **Новости**, **разъяснения** и **региональные** публикации по **закупкам**.
- **Ссылки** на **федеральные** сервисы (**контракты**, **извещения**).
- **Связка** с **ЕИС** — по **реестровым номерам** и **ИНН** заказчика.

## Периодичность обновления

**По мере** обновлений **оператора** портала.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-zakupki-kk-check/1.0" \
  "https://zakupki.krasnodar.ru/"
```

## Связанные страницы wiki

- [Департамент по регулированию контрактной системы (drcs.krasnodar.ru)](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar) — **краевой** **орган** **регулирования** и **методика**.
- [Сведения о закупках (федеральная витрина)](/data-sources/federal/procurement) — **массовые** **данные** **контрактов**.
- [Навигатор по региональным закупкам](/data-sources/regional/regional-procurement-sources-overview) — **сравнение** с **другими** субъектами.

## Не путать с

- **[drcs.krasnodar.ru](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar)** — **департамент** **регулирования**; **zakupki.krasnodar.ru** — **отдельный** **портал** **госзакупок** края.

## Частые вопросы

**В:** Где скачать все контракты заказчиков Краснодарского края?

**О:** Используйте **выгрузки ЕИС** и фильтры по **ИНН/региону** заказчика; региональный портал даёт **контекст**, а не полный дубликат **ЕИС**.
