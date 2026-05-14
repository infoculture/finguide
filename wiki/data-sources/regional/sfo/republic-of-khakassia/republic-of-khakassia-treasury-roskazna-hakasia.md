---
title: 'Республика Хакасия: УФК — hakasia.roskazna.gov.ru'
sidebar_label: УФК (Росказна), Хакасия
tags:
  - data-source
  - regional
  - treasury
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-treasury-roskazna-hakasia
source_url: 'https://hakasia.roskazna.gov.ru/'
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
  Управление Федерального казначейства по Республике Хакасия: официальный сайт — новости,
  реквизиты и справочная информация по казначейскому сопровождению бюджетов на территории субъекта.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-minfin-portal-r19
  - /information-systems/federal/giis-eb
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: УФК — hakasia.roskazna.gov.ru

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** орган на территории **Республики Хакасия** |
| Тип доступа | Официальный **региональный** сайт **Росказны** |
| Основные форматы | HTML |
| Оператор | Управление Федерального казначейства по Республике Хакасия |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **организационный** и **справочный** вход в **казначейский** контур; **агрегированные открытые ряды** по лицевым счетам и отчётности удобнее искать в **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** и **[каталоге budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — сайт УФК **не** дублирует полный набор открытых бюджетных наборов |
| Машиночитаемость (`machine_readability`) | преимущественно **HTML** |
| Юридическая значимость (`legal_significance`) | официальный **федеральный** орган на субъекте |
| Задержка обновления (`update_lag`) | новости и нормативные изменения |
| Глубина архива (`archive_depth`) | определяется разделами сайта |
| Лицензия (`license_or_terms`) | условия **roskazna.gov.ru** |

## Описание

Региональный сайт **hakasia.roskazna.gov.ru** полезен для **контактов**, **новостей** и **разъяснений** по казначейскому обслуживанию. Для **машинной** загрузки форм и справочников опирайтесь на **федеральные** открытые данные **Электронного бюджета**, а не только на HTML-витрину УФК.

## Оператор

Управление Федерального казначейства по Республике Хакасия — https://hakasia.roskazna.gov.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Региональный сайт УФК | https://hakasia.roskazna.gov.ru/ | HTML |

## Объекты данных и показатели

- **Новости** и **методические** материалы по казначейскому сопровождению.
- **Контакты** регионального управления.
- **Не** источник первичных **полных** выгрузок по всем лицевым счетам региона.

## Периодичность обновления

По мере публикации новостей и нормативных изменений.

## Ограничения и особенности

- В отдельных средах при проверке **curl** возможны предупреждения TLS; в браузере сайт обычно открывается штатно.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 "https://hakasia.roskazna.gov.ru/" \
  || echo "при ошибке TLS проверьте в браузере"
```

## Связанные страницы wiki

- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — контур отчётности и открытых наборов.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые наборы.
- [Минфин (r-19.ru)](/data-sources/regional/republic-of-khakassia-minfin-portal-r19) — региональный бюджетный блок исполнительной власти.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — остальные источники.

## Не путать с

- **[Минфин республики](/data-sources/regional/republic-of-khakassia-minfin-portal-r19)** — региональный финансовый орган; УФК — **федеральное** казначейское сопровождение.
