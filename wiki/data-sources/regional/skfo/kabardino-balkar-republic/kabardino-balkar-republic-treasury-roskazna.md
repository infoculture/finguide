---
title: 'Кабардино-Балкарская Республика: Управление Федерального казначейства (kabardino-balkaria.roskazna.gov.ru)'
sidebar_label: УФК по Кабардино-Балкарии
tags:
  - data-source
  - regional
  - treasury
last_updated: 2026-05-15
slug: /data-sources/regional/kabardino-balkar-republic-treasury-roskazna
source_url: 'https://kabardino-balkaria.roskazna.gov.ru/'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: html
description: >-
  Региональный сайт Управления Федерального казначейства по Кабардино-Балкарской
  Республике: новости, контакты и справочная информация по казначейскому
  сопровождению; не заменяет федеральные открытые наборы и ГИИС «Электронный
  бюджет».
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kabardino-balkar-republic-sources-overview
  - /data-sources/regional/kabardino-balkar-republic-minfin
  - /information-systems/federal/giis-eb
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Кабардино-Балкарская Республика: Управление Федерального казначейства (kabardino-balkaria.roskazna.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** орган на территории Кабардино-Балкарской Республики |
| Тип доступа | Официальный региональный сайт **Росказны** |
| Основные форматы | HTML |
| Оператор | Управление Федерального казначейства по Кабардино-Балкарской Республике |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **организационный и справочный** вход в **казначейский** контур; для **машиночитаемых** рядов по лицевым счетам и отчётности ориентируйтесь на **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** и **[каталог наборов budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — сайт УФК не дублирует полный набор открытых бюджетных наборов |
| Машиночитаемость (`machine_readability`) | преимущественно HTML; CSV/JSON — через федеральные каталоги |
| Юридическая значимость (`legal_significance`) | официальный федеральный орган на субъекте |
| Задержка обновления (`update_lag`) | зависит от новостного цикла и нормативных изменений |
| Глубина архива (`archive_depth`) | определяется разделами сайта |
| Лицензия (`license_or_terms`) | правила **roskazna.gov.ru** |

## Описание

Региональный сайт **kabardino-balkaria.roskazna.gov.ru** полезен для **контактов**, **новостей** и **разъяснений** по казначейскому обслуживанию учреждений и получателей средств. **Агрегированные открытые данные** по казначейскому контуру удобнее собирать из **федеральных** витрин (см. связанные страницы).

## Оператор

Управление Федерального казначейства по Кабардино-Балкарской Республике — канонический вход: https://kabardino-balkaria.roskazna.gov.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Региональный сайт УФК | https://kabardino-balkaria.roskazna.gov.ru/ | HTML |

## Объекты данных и показатели

- **Новости** и **методические** материалы по казначейскому сопровождению.
- **Контакты** регионального управления.
- **Не** полноценная замена **открытых выгрузок** по всем лицевым счетам и формам.

## Периодичность обновления

По мере публикации новостей и нормативных изменений на стороне оператора.

## Ограничения и особенности

- При проверке из **строгого** TLS-клиента возможны предупреждения о цепочке сертификатов; в браузере сайт обычно открывается штатно.

## Примеры доступа

```bash
curl -fsSILk -o /dev/null -w "%{http_code}\n" --max-time 25 -A "Mozilla/5.0" "https://kabardino-balkaria.roskazna.gov.ru/" \
  || echo "при ошибке TLS проверьте в браузере"
```

## Связанные страницы wiki

- [Минфин КБР](/data-sources/regional/kabardino-balkar-republic-minfin) — региональный бюджетный блок.
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — федеральный контур отчётности и открытых наборов.
- [Наборы «Электронный бюджет» (каталог)](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые наборы для сверки.
- [Сводная страница субъекта](/data-sources/regional/subject-kabardino-balkar-republic-sources-overview) — все источники по КБР в wiki.

## Не путать с

- **[Минфин КБР](/data-sources/regional/kabardino-balkar-republic-minfin)** — региональный финансовый орган; УФК — **федеральное** казначейское сопровождение.
