---
title: 'Белгородская область: Портал госзакупок (Белгосзаказ)'
sidebar_label: 'Портал Белгосзаказ'
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-14
slug: /data-sources/regional/belgorod-oblast-procurement-portal-belgoszakaz
source_url: 'https://portal.belgoszakaz.ru/'
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
  Региональный портал в сфере закупок Белгородской области: публикации и
  сервисы для государственных и муниципальных заказчиков региона (дополняет
  федеральную ЕИС).
content_type: data_source
entity_type: data-source
related_information_system: /information-systems/federal/zakupki
related_pages:
  - /data-sources/federal/procurement
  - /data-sources/federal/zakupki-eis-statistics
  - /data-sources/regional/subject-belgorod-oblast-sources-overview
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/belgorod-oblast-minfin-beldepfin
---

# Белгородская область: Портал госзакупок (Белгосзаказ)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональные и муниципальные закупки в контуре Белгородской области (в связке с 44-ФЗ/223-ФЗ) |
| Тип доступа | Официальный региональный портал |
| Основные форматы | HTML |
| Оператор | Оператор региональной контрактной системы (портал Белгосзаказ) |
| Режим доступа | Открытый |

Коротко: региональная витрина для закупок и сопутствующих процедур; для **единой федеральной картины контрактов** и XML-выгрузок по 44-ФЗ основной опорной точкой остаётся [ЕИС](/information-systems/federal/zakupki).

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — региональный контур; не заменяет полноту ЕИС по федеральному полю |
| Машиночитаемость (`machine_readability`) | HTML; для API/XML ориентируйтесь на федеральные каналы |
| Юридическая значимость (`legal_significance`) | официальный региональный оператор портала закупок |
| Задержка обновления (`update_lag`) | зависит от размещения заказчиками |
| Глубина архива (`archive_depth`) | определяется политикой портала и поиском |
| Лицензия (`license_or_terms`) | см. условия портала |

## Описание

`portal.belgoszakaz.ru` обслуживает региональный контур закупок: реестры, инструкции, часть публикаций и сервисов для заказчиков Белгородской области. При построении **сквозной аналитики** сверяйте идентификаторы контрактов и закупок с [ЕИС](/information-systems/federal/zakupki) и федеральными наборами.

## Оператор

Портал закупок Белгородской области (Белгосзаказ) — канонический вход: https://portal.belgoszakaz.ru/

- Карточка ИС: [ЕИС в сфере закупок](/information-systems/federal/zakupki) — федеральная система раскрытия и учёта закупок.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница портала | https://portal.belgoszakaz.ru/ | HTML |

## Объекты данных и показатели

- Закупки, извещения, контракты и вспомогательные реестры в **региональном** представлении.
- Ключи связки: реестровый номер контракта/закупки в ЕИС, ИНН заказчика, ОКТМО, НМЦК (если раскрыто).
- Пробелы: не все федеральные выгрузки дублируются на региональном портале в том же формате.

## Периодичность обновления

По мере размещения процедур заказчиками и обновлениями портала.

## Ограничения и особенности

- Для массового скачивания и статистики по стране используйте [федеральные наборы по закупкам](/data-sources/federal/procurement) и статистику ЕИС.

## Связанные страницы wiki

- [Федеральный обзорный материал по закупкам (наборы и витрины)](/data-sources/federal/procurement) — каналы машинного доступа.
- [Статистика ЕИС](/data-sources/federal/zakupki-eis-statistics) — агрегированные ряды по системе.
- [Сводная страница субъекта](/data-sources/regional/subject-belgorod-oblast-sources-overview) — источники по области.
- [Минфин области](/data-sources/regional/belgorod-oblast-minfin-beldepfin) — связь закупок с бюджетом и лимитами.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.

## Не путать с

- **[ЕИС zakupki.gov.ru](/information-systems/federal/zakupki)** — федеральная юрисдикция раскрытия по 44-ФЗ и связанным режимам; региональный портал — дополнительный контур.
