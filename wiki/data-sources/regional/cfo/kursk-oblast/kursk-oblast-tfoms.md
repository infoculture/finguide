---
title: 'Курская область: территориальный фонд ОМС'
sidebar_label: 'ТФОМС Курской области'
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/kursk-oblast-tfoms
source_url: 'https://www.kurskoms.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
  - xlsx
status: current
last_verified: 2026-05-14
description: >-
  Официальный сайт ТФОМС Курской области: бюджет фонда, отчётность, размещение временно
  свободных средств и закупки фонда.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kursk-oblast-sources-overview
  - /data-sources/regional/kursk-oblast-dept-finance-normative-orders
  - /data-sources/regional/kursk-oblast-legislature-duma
  - /data-sources/federal/budget-gov-ru-datasets
---

# Курская область: территориальный фонд ОМС

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный внебюджетный фонд ОМС |
| Тип доступа | Официальный сайт ТФОМС |
| Основные форматы | HTML, вложения PDF/XLS |
| Оператор | Территориальный фонд обязательного медицинского страхования Курской области |
| Режим доступа | Открытый |

Коротко: **бюджет и отчётность** ТФОМС, сведения о размещении временно свободных средств и закупках фонда — отдельный финансовый контур от консолидированного бюджета субъекта.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 (канонический URL приведён к HTTPS `www`) |
| Полнота (`data_completeness`) | частичная — зависит от раскрытия на сайте |
| Машиночитаемость (`machine_readability`) | преимущественно HTML и вложения |
| Юридическая значимость (`legal_significance`) | официальный сайт ТФОМС |
| Задержка обновления (`update_lag`) | регламентированная отчётность + оперативные новости |
| Глубина архива (`archive_depth`) | см. разделы отчётности |
| Лицензия (`license_or_terms`) | условия сайта ТФОМС |

## Описание

ТФОМС ведёт **отдельный бюджет** ОМС и публикует сведения о финансовых результатах, размещении средств и закупках для обеспечения программы ОМС. Нормативные акты по **согласованию** бюджета ТФОМС с областным бюджетом ищите также в [нормативных приказах Минфина](/data-sources/regional/kursk-oblast-dept-finance-normative-orders) и на сайте [областной Думы](/data-sources/regional/kursk-oblast-legislature-duma).

## Оператор

ТФОМС Курской области — https://www.kurskoms.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная | https://www.kurskoms.ru/ | HTML |
| Наследуемый HTTP (редирект) | http://www.kurskoms.ru/ | редирект |

## Объекты данных и показатели

- Годовой отчёт о финансовых результатах, приложения к отчётности.
- Информация о закупках фонда (извещения — по структуре сайта).
- Ключ: **финансовый год**, виды расходов ОМС (по отчётности фонда).

## Периодичность обновления

Отчётность — **ежегодно** и периодически в течение года; новости — по мере событий.

## Ограничения и особенности

- Часть закупок может дублироваться на [региональной ИС закупок](/data-sources/regional/kursk-oblast-procurement-portal) или в ЕИС — сверяйте по идентификаторам процедур.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-kursk-oblast-sources-overview).
- [Нормативные приказы Минфина](/data-sources/regional/kursk-oblast-dept-finance-normative-orders).
- [Курская областная Дума](/data-sources/regional/kursk-oblast-legislature-duma).
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).

## Не путать с

- **[Консолидированный бюджет области](/data-sources/regional/consolidated-budgets)** — бюджет ТФОМС **отдельный** по учёту; не смешивайте кассу фонда с бюджетом субъекта без методологии консолидации.
