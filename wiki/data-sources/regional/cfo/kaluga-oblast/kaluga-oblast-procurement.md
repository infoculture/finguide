---
title: 'Калужская область: государственные и муниципальные закупки (региональный портал)'
sidebar_label: 'Закупки области (портал)'
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-14
slug: /data-sources/regional/kaluga-oblast-procurement
source_url: >-
  https://mkp.admoblkaluga.ru/page/gosudarstvennye-i-munitsipalnye-zakupki-kaluzhskoy-oblasti
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html
description: >-
  Региональная витрина по закупкам Калужской области: ссылки и материалы по
  государственным и муниципальным закупкам на контуре субъекта.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/federal/procurement
  - /information-systems/federal/zakupki
  - /data-sources/regional/kaluga-oblast-minfin
  - /data-sources/regional/subject-kaluga-oblast-sources-overview
  - /data-sources/regional/how-to-find-regional-data
---

# Калужская область: государственные и муниципальные закупки (региональный портал)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный и муниципальный контур Калужской области (навигация и материалы на портале) |
| Тип доступа | Официальный веб-раздел |
| Основные форматы | HTML |
| Оператор | Портал государственных закупок Калужской области (`mkp.admoblkaluga.ru`) |
| Режим доступа | Открытый |

Коротко: **региональная точка входа** к тематике закупок на территории области. Юридически значимый **контрактный след**, реестровые выгрузки и единая федеральная витрина — в **[ЕИС](/data-sources/federal/procurement)**; региональная страница дополняет контекстом и ссылками.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — состав блоков зависит от поддержки портала |
| Машиночитаемость (`machine_readability`) | HTML; машиночитаемые массивы по закупкам — прежде всего через ЕИС |
| Юридическая значимость (`legal_significance`) | официальный региональный ресурс; первичные документы закупки сверяйте с ЕИС |
| Задержка обновления (`update_lag`) | зависит от редакционной политики портала |
| Глубина архива (`archive_depth`) | не гарантируется как полный архив закупок |
| Лицензия (`license_or_terms`) | условия сайта оператора |

## Описание

Страница на поддомене `mkp.admoblkaluga.ru` обобщает для граждан и организаций сведения о **государственных и муниципальных закупках** в области: разъяснения, ссылки на федеральные сервисы, региональные новости и справочные материалы. Для массовой выгрузки контрактов, планов-графиков и XML-форматов используйте **[ЕИС](/data-sources/federal/procurement)** и карточку **[информационной системы «ЕИС»](/information-systems/federal/zakupki)**.

## Оператор

Портал государственных закупок Калужской области — канонический вход: https://mkp.admoblkaluga.ru/page/gosudarstvennye-i-munitsipalnye-zakupki-kaluzhskoy-oblasti

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Тематическая страница «Государственные и муниципальные закупки» | https://mkp.admoblkaluga.ru/page/gosudarstvennye-i-munitsipalnye-zakupki-kaluzhskoy-oblasti | HTML |

## Объекты данных и показатели

- **Навигационные и справочные материалы** по закупкам на уровне субъекта и муниципалитетов.
- Для строковых данных по контрактам: **ИНН заказчика**, **реестровый номер контракта**, **ОКПД2**, **КБК** (если присутствует в выгрузке ЕИС) — через федеральный контур.

## Периодичность обновления

Обновления **нерегулярные**, привязаны к изменениям нормативки и редакции портала.

## Ограничения и особенности

- Региональная страница **не заменяет** ЕИС как источник реестровых сведений и официальных извещений.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w '%{http_code}\n' \
  'https://mkp.admoblkaluga.ru/page/gosudarstvennye-i-munitsipalnye-zakupki-kaluzhskoy-oblasti'
```

## Связанные страницы wiki

- [Сведения о закупках и контрактах (ЕИС)](/data-sources/federal/procurement) — юридически значимый контрактный след и выгрузки.
- [Информационная система «ЕИС»](/information-systems/federal/zakupki) — границы системы и каналы доступа.
- [Министерство финансов Калужской области](/data-sources/regional/kaluga-oblast-minfin) — бюджетный контекст заказчиков в регионе.
- [Сводная страница субъекта](/data-sources/regional/subject-kaluga-oblast-sources-overview) — все источники по Калужской области.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска.
