---
title: 'Костромская область: Департамент финансов Костромской области (depfin.kostroma.gov.ru)'
sidebar_label: Департамент финансов
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/kostroma-oblast-department-of-finance
source_url: 'https://depfin.kostroma.gov.ru/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: HTML и вложенные таблицы/отчёты (XLSX, PDF — по разделам); машинные наборы частично дублируются на федеральных витринах
description: >-
  Официальный сайт Департамента финансов Костромской области: областной бюджет,
  отчёты об исполнении, методические материалы и нормативные акты финансового
  блока субъекта.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kostroma-oblast-sources-overview
  - /data-sources/regional/kostroma-oblast-budget-for-citizens-depfin
  - /data-sources/regional/kostroma-oblast-regional-duma
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
---

# Костромская область: Департамент финансов Костромской области (depfin.kostroma.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Костромская область; **главный** региональный финансовый орган |
| Тип доступа | Публичный портал с разделами бюджета и отчётности |
| Основные форматы | HTML; вложения (PDF, XLSX — по конкретным документам) |
| Оператор | Департамент финансов Костромской области |
| Режим доступа | Открытый просмотр |

Коротко: **ключевая витрина** по **плану и исполнению** областного бюджета, консолидированной отчётности субъекта и методическим материалам. Для **машинных** сравнений с федеральным контуром используйте [открытые наборы «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets) и карточку [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная на уровне единого API — публикации ведомственные, полнота зависит от раздела |
| Машиночитаемость (`machine_readability`) | смешанный канал: HTML + файлы; для устойчивых пайплайнов закладывайте проверку формата и версии файла |
| Юридическая значимость (`legal_significance`) | официальный орган субъекта РФ |
| Задержка обновления (`update_lag`) | цикл бюджетного процесса и сроки отчётности |
| Глубина архива (`archive_depth`) | зависит от раздела «Архив» и политики хранения документов |
| Лицензия (`license_or_terms`) | условия сайта органа власти |

## Описание

На сайте Департамента обычно доступны **проекты** и **исполнение** областного бюджета, **консолидированная** отчётность, **нормативные акты** финансового блока и ссылки на [«Бюджет для граждан»](/data-sources/regional/kostroma-oblast-budget-for-citizens-depfin). Законы об областном бюджете в текстовом виде публикуются на сайте [областной Думы](/data-sources/regional/kostroma-oblast-regional-duma).

## Оператор

Департамент финансов Костромской области — https://depfin.kostroma.gov.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница Департамента | https://depfin.kostroma.gov.ru/ | HTML |
| Бюджет для граждан | https://depfin.kostroma.gov.ru/byudzhet/byudzhet-dlya-grazhdan | HTML |

## Объекты данных и показатели

- **Бюджетные показатели**: доходы, расходы, источники финансирования дефицита по годам.
- **Отчёты об исполнении** и консолидированная отчётность (в объёме размещения).
- **Связка**: КБК, коды ГРБС, ОКТМО — по таблицам в официальных файлах.

## Периодичность обновления

**Ежегодный** цикл планирования и отчётности; внеплановые обновления при корректировках бюджета.

## Ограничения и особенности

- Структура поддоменов `kostroma.gov.ru` может обновляться; проверяйте HTTP-редиректы и актуальность разделов.

## Связанные страницы wiki

- [Бюджет для граждан (Депфин)](/data-sources/regional/kostroma-oblast-budget-for-citizens-depfin) — упрощённая витрина.
- [Костромская областная Дума](/data-sources/regional/kostroma-oblast-regional-duma) — законы об областном бюджете.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные открытые данные для сверки.
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — границы ИС и машинного контура.
- [Сводная страница субъекта](/data-sources/regional/subject-kostroma-oblast-sources-overview) — все источники по области.
