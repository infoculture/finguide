---
title: Сведения о закупках и контрактах (ЕИС)
sidebar_label: Закупки и контракты (ЕИС)
tags:
  - data-source
  - federal
  - procurement
aliases:
  - закупки для госнужд
  - закупки для государственных нужд
  - ГИС Торги соотношение
  - контрактная система
last_updated: 2026-05-13T00:00:00.000Z
slug: /data-sources/federal/procurement
source_url: 'https://zakupki.gov.ru/'
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - xml
  - html
  - zip
status: current
related_information_system: /information-systems/federal/zakupki
description: >-
  официальный источник контрактного следа и планов закупок для государственных нужд (госнужд): извещения,
  протоколы, контракты, планы-графики, реестровые сведения — с идентификаторами
  сторон (ИНН, ОГРН), ОКПД2, при наличии в схеме — КБК и иные бюджетные
  реквизиты. Соотношение с ГИС «Торги».
content_type: data_source
entity_type: data-source
relationships:
  - type: available_in
    target: /information-systems/federal/zakupki
  - type: published_by
    target: /organizations/federal-treasury
  - type: governed_by
    target: /legal/44fz
  - type: governed_by
    target: /legal/223-fz
related_pages:
  - /information-systems/federal/zakupki
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
  - /data-sources/regional/dagestan-procurement-komzak-e-dag
  - /data-sources/regional/kemerovo-kuzbass-procurement-ugzko
  - /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
  - /data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39
  - /data-sources/federal/zakupki-eis-statistics
  - /data-sources/federal/rosstat-procurement-statistics-archive
  - /data-sources/federal/zakupki-xml
  - /howto/analysis/eis-procurement-identifiers-decoding
  - /glossary/procurement-44fz
  - /glossary/procurement-223fz
  - /information-systems/federal/egrul
  - /data-sources/federal/nalog-regstats
---

# Сведения о закупках и контрактах (ЕИС)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный; единая информационная среда **[ЕИС в сфере закупок](/information-systems/federal/zakupki)** по закупкам по **44-ФЗ** и **223-ФЗ** (и связанным процедурам в объёме витрины) |
| Тип доступа | **Смешанный**: интерактивный портал; **массовые машиночитаемые** комплекты через **XML** и сервисы отдачи (**СОИ**); исторически — FTP (см. [XML-выгрузки](/data-sources/federal/zakupki-xml)) |
| Основные форматы | **HTML** на портале; **XML** в **ZIP** в выгрузках; справочно **PDF** в методиках |
| Оператор | Федеральное казначейство |
| Режим доступа | Публичная витрина открыта; условия **СОИ** — по регламенту оператора |

Коротко: **официальный** источник **контрактного следа** и планов закупок: извещения, протоколы, контракты, планы-графики, реестровые сведения — с идентификаторами сторон (**ИНН**, **ОГРН**), **ОКПД2**, при наличии в схеме — **КБК** и иные бюджетные реквизиты.

## Описание

Карточка задаёт **концептуальный вход** в данные ЕИС для аналитика открытых финансов: те же юридические объекты, что описаны в **[44-ФЗ](/glossary/procurement-44fz)** и **[223-ФЗ](/glossary/procurement-223fz)**, но в **разных** потоках выгрузок и с разной полнотой полей. Перед агрегацией «по всей системе» нужно **явно отбирать** правовой режим и тип документа.

**Не путать** с исполнением бюджета по **КБК** в **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** и с **[отчётами Казначейства](/data-sources/federal/roskazna-reports)**: закупка показывает **обязательство по контракту**, а кассовый факт и лимиты — в бюджетном контуре по согласованной методике.

## Оператор

**Федеральное казначейство** — оператор ЕИС; канонический вход: https://zakupki.gov.ru/

- Карточка ИС: **[ЕИС в сфере закупок](/information-systems/federal/zakupki)** — точки доступа (портал, СОИ, интеграция), ограничения и новости (в т.ч. об отключении FTP).

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Публичная витрина | https://zakupki.gov.ru/epz/main/public/home.html | HTML |
| Сводная **статистика** на главной (госзакупки и контракты) | https://zakupki.gov.ru/epz/main/public/home.html#statAnchor | HTML, JSON, PDF (методика) — см. [карточку](/data-sources/federal/zakupki-eis-statistics) |
| Документация и схемы XML | https://zakupki.gov.ru/epz/main/public/document/view.html | PDF, HTML |
| Массовые XML (логика и ограничения) | см. [XML-выгрузки ЕИС](/data-sources/federal/zakupki-xml) | XML, ZIP |

Актуальные базовые URL **СОИ** и правила учётных записей не фиксируются в wiki — сверяйте **[карточку ЕИС](/information-systems/federal/zakupki)** и портал оператора.

## Объекты данных и показатели

- **Планы-графики закупок** — плановый контур заказчика.
- **Извещения, заявки, протоколы** — процедурный след.
- **Контракты** и исполнение в объёме, предусмотренном схемами и витриной.
- **Справочники и реестры** — в составе комплектов по типам выгрузок.

Типичные ключи: реестровый номер контракта/процедуры, **ИНН/КПП** заказчика и поставщика, **ОКПД2**; для связи с бюджетом — **КБК** и коды территории, если присутствуют в выбранной схеме.

## Периодичность обновления

Документы на витрине обновляются **непрерывно** по мере размещения участниками; **массовые** выгрузки имеют регламентированную периодичность и задержку относительно витрины — см. **[zakupki-xml](/data-sources/federal/zakupki-xml)** и раздел про СОИ в **[карточке ЕИС](/information-systems/federal/zakupki)**.

## Ограничения и особенности

- **44-ФЗ** и **223-ФЗ** требуют **раздельной** обработки в одном техническом потоке.
- С **01.07.2024** исторический **FTP** не является рабочим каналом — переход на **СОИ**.
- Объёмы выгрузок велики; для выборочного поиска иногда удобнее гражданские зеркала — с пониманием риска расхождения с официальной версией документа.

## Связанные страницы wiki

- **[ЕИС Закупки: статистика на главной](/data-sources/federal/zakupki-eis-statistics)** — официальные **своды и карта** по закупкам и контрактам (44/223), JSON под витриной и **методика** в PDF.
- **[Минфин: мониторинг закупок (отчёты PDF)](/data-sources/federal/minfin-purchases-monitoring)** — ежеквартальные и годовые **аналитические отчёты** Минфина по мониторингу закупок; не заменяют построчные данные ЕИС.
- **[ЕИС в сфере закупок](/information-systems/federal/zakupki)** — оператор, доступ, ограничения.
- **[XML-выгрузки ЕИС Закупки](/data-sources/federal/zakupki-xml)** — сырые комплекты, схемы, ключи связи.
- **[Витрины данных Казначейства (datamarts)](/data-sources/federal/roskazna-datamarts)** — агрегированные срезы по закупкам без полного XML-контура.
- **[Clearspending.ru](/information-systems/civil/clearspending)** — гражданская аналитика по закупкам поверх тех же сущностей.
- **[ОКПД2 — частые коды в закупках](/reference/okpd-budgets)** — ориентиры по иерархии кода в анализе.
- **[Отчётность по контрактам](/reporting/procurement-contract-reporting)** — регламентированные формы, смежные с реестрами контрактов.

## Примеры доступа

Практические шаги и шаблон кода для выгрузок — в howto **[«Анализ государственных закупок»](/howto/analysis/procurement-analysis)** и на портале оператора в разделе документации **СОИ**.

## Не путать с

- **[ГИС «Торги»](/data-sources/federal/torgi-gov-ru)** — имущественные торги и специализированные процедуры вне ядра «контрактного» ЕИС по 44/223 в том виде, как их описывает эта карточка.
- **[Открытые данные bus.gov.ru](/data-sources/federal/bus-opendata)** — учреждения и их отчётность, а не реестр извещений и контрактов ЕИС.
