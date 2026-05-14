---
title: 'Республика Хакасия: контрольно-счётная палата (ksp19.ru)'
sidebar_label: КСП Республики Хакасия
tags:
  - data-source
  - regional
  - control
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-accounts-chamber-ksp19
source_url: 'https://ksp19.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html
description: >-
  Контрольно-счётная палата Республики Хакасия: публикации о внешнем муниципальном финансовом
  контроле, результатах проверок и заключениях по отчётности муниципальных образований.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-minfin-portal-r19
  - /data-sources/regional/republic-of-khakassia-budget-gov-ru-regions
  - /data-sources/federal/accounts-chamber-opendata
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: контрольно-счётная палата (ksp19.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республиканский** орган **ВМФК** (внешний муниципальный финансовый контроль) |
| Тип доступа | Официальный **веб-сайт** КСП |
| Основные форматы | HTML, **PDF** отчётов и заключений |
| Оператор | Контрольно-счётная палата Республики Хакасия |
| Режим доступа | Открытый |

Коротко: **официальные** материалы **контроля** за **муниципальными** финансами на территории республики; для **первичных** бюджетных рядов используйте **Минфин**, **budget.gov.ru** и **муниципальные** витрины.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — состав публикаций **зависит** от плана работ КСП |
| Машиночитаемость (`machine_readability`) | HTML/PDF; **единого** открытого API не заявлено |
| Юридическая значимость (`legal_significance`) | официальный орган **государственного** финансового контроля субъекта |
| Задержка обновления (`update_lag`) | привязана к **циклу проверок** и публикации заключений |
| Глубина архива (`archive_depth`) | определяется разделами сайта |
| Лицензия (`license_or_terms`) | условия **ksp19.ru** |

## Описание

Сайт **ksp19.ru** публикует **заключения**, **отчёты** о проверках и **аналитические** материалы по **муниципальным** бюджетам. Это **след аудита**, а не замена **казначейских** или **статистических** рядов.

## Оператор

Контрольно-счётная палата Республики Хакасия — https://ksp19.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Официальный сайт | https://ksp19.ru/ | HTML |

## Объекты данных и показатели

- **Заключения** об исполнении бюджетов **МО**.
- **Отчёты** о результатах **внешней проверки** бюджетной отчётности.
- **Ключи связки**: наименование **МО**, **год**, предмет проверки; для связки с рядами — **ОКТМО**.

## Периодичность обновления

По мере **проверок** и **утверждения** публикаций на сайте.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 "https://ksp19.ru/" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [Минфин (r-19.ru)](/data-sources/regional/republic-of-khakassia-minfin-portal-r19) — региональный бюджетный блок.
- [budget.gov.ru — регионы](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions) — открытые бюджетные данные.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — все источники субъекта.

## Не путать с

- **[Счётная палата РФ: открытые данные и аудит](/data-sources/federal/accounts-chamber-opendata)** — федеральный уровень; КСП **19** — **региональный** ВМФК по **муниципалитетам** субъекта.
