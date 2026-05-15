---
title: 'Тамбовская область: информационный сайт комитета госзаказа (torgi.tambov.gov.ru)'
sidebar_label: Комитет госзаказа (torgi.tambov.gov.ru)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-15
slug: /data-sources/regional/tambov-oblast-procurement-kgz-torgi
source_url: 'https://torgi.tambov.gov.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; построчные закупки 44-ФЗ/223-ФЗ — в ЕИС
description: >-
  Региональный портал комитета по госзаказу: размещение и поиск информации о
  закупках товаров, работ и услуг для нужд заказчиков Тамбовской области
  (дополнение к федеральному ЕИС).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-tambov-oblast-sources-overview
  - /information-systems/federal/zakupki
  - /data-sources/federal/procurement
  - /data-sources/regional/tambov-oblast-portal-tambov-gov
---

# Тамбовская область: информационный сайт комитета госзаказа (torgi.tambov.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** контур госзаказа (Тамбовская область) |
| Тип доступа | Официальный информационный портал КГЗ |
| Основные форматы | HTML |
| Оператор | Комитет по государственному заказу Тамбовской области |
| Режим доступа | Открытый |

Коротко: **региональная** витрина по закупкам для нужд заказчиков области. Для **полных машиночитаемых комплектов** по 44-ФЗ/223-ФЗ и единой идентификации процедур используйте **[ЕИС](/information-systems/federal/zakupki)** и обзор **[«Сведения о закупках»](/data-sources/federal/procurement)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — региональный портал может дублировать или дополнять ЕИС |
| Машиночитаемость (`machine_readability`) | HTML; XML/СОИ — на стороне ЕИС |
| Юридическая значимость (`legal_significance`) | официальный орган субъекта в сфере закупок |
| Задержка обновления (`update_lag`) | зависит от синхронизации с ЕИС и региональных размещений |
| Глубина архива (`archive_depth`) | зависит от политики портала |
| Лицензия (`license_or_terms`) | условия сайта |

## Описание

Портал предназначен для **информационного сопровождения** закупок на территории области. При построении **единой таблицы контрактов** опирайтесь на идентификаторы и схемы **[ЕИС](/information-systems/federal/zakupki)**, а региональный сайт используйте для **контекста** (разъяснения, региональные реестры, новости КГЗ).

## Оператор

Комитет по государственному заказу Тамбовской области — канонический вход: https://torgi.tambov.gov.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Портал КГЗ | https://torgi.tambov.gov.ru/ | HTML |

## Объекты данных и показатели

- Карточки закупок, извещения, разъяснения (в структуре портала).
- Ключи связки с федеральным контуром: **реестровый номер закупки/контракта**, **ИНН заказчика** — по данным ЕИС.

## Периодичность обновления

По мере размещения закупочной документации и обновлений на стороне оператора.

## Ограничения и особенности

- Не смешивайте с **[torgi.gov.ru](/information-systems/federal/torgi-gov-ru)** — это **иной** федеральный контур (имущественные торги и др.), не путать с закупками по 44-ФЗ/223-ФЗ.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w '%{http_code}\n' 'https://torgi.tambov.gov.ru/'
```

## Связанные страницы wiki

- [ЕИС в сфере закупок](/information-systems/federal/zakupki) — канонический федеральный контур закупок.
- [Сведения о закупках и контрактах (обзор)](/data-sources/federal/procurement) — как выбирать канал данных.
- [Портал органов власти области](/data-sources/regional/tambov-oblast-portal-tambov-gov) — смежная навигация по органам власти.
- [Сводная страница субъекта](/data-sources/regional/subject-tambov-oblast-sources-overview) — остальные источники по области.

## Не путать с

- **[ЕИС Закупки](/information-systems/federal/zakupki)** — первичный источник построчных данных и идентификаторов по 44-ФЗ/223-ФЗ.
