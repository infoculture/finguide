---
title: 'Республика Хакасия: Министерство финансов (портал r-19.ru)'
sidebar_label: Минфин — портал r-19.ru
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-07-16
slug: /data-sources/regional/republic-of-khakassia-minfin-portal-r19
source_url: 'https://r-19.ru/authorities/ministry-of-finance-of-the-republic-of-khakassia/common/1607/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-07-16
data_completeness: partial
machine_readability: html
description: >-
  Официальный портал исполнительных органов Республики Хакасия: раздел, связанный с Министерством
  финансов — контакты, новости и ссылки на бюджетные материалы республиканского уровня.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-government-citizen-budget-r19
  - /data-sources/regional/republic-of-khakassia-budget-gov-ru-regions
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: Министерство финансов (портал r-19.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Республика Хакасия, **региональный** бюджетный контур |
| Тип доступа | Официальный **веб-портал** исполнительной власти |
| Основные форматы | HTML, типично вложения **PDF** для бюджетной документации |
| Оператор | Правительство Республики Хакасия / Министерство финансов |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **точка входа** в публичные материалы **Минфина** на общем портале **r-19.ru**; для **машиночитаемых** рядов по исполнении и справочникам удобнее опираться на **[budget.gov.ru](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions)** и **[каталог наборов](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — витрина ориентирована на **документы** и справку, не на полный API |
| Машиночитаемость (`machine_readability`) | HTML/PDF; стабильного **единого** API карточка не фиксирует |
| Юридическая значимость (`legal_significance`) | официальный **региональный** оператор |
| Задержка обновления (`update_lag`) | зависит от цикла подготовки бюджетной отчётности |
| Глубина архива (`archive_depth`) | определяется вложенными разделами портала |
| Лицензия (`license_or_terms`) | условия портала **r-19.ru** |

## Описание

Карточка описывает **канонический URL** раздела, в таблице исследований сопоставленного с **Министерством финансов**. На практике на **r-19.ru** бюджетные материалы могут дублироваться с **[порталом Правительства](/data-sources/regional/republic-of-khakassia-government-citizen-budget-r19)**; при расхождении дат версий ориентируйтесь на **более позднюю** публикацию или на **официальный** реквизит в НПА.

## Оператор

Министерство финансов Республики Хакасия (витрина на портале исполнительных органов) — https://r-19.ru/authorities/ministry-of-finance-of-the-republic-of-khakassia/common/1607/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел портала | https://r-19.ru/authorities/ministry-of-finance-of-the-republic-of-khakassia/common/1607/ | HTML |

## Объекты данных и показатели

- **Перечни** и **тексты** распорядительных документов республиканского уровня по бюджету (как правило PDF).
- **Контакты** и организационная информация о финансовом блоке.
- **Ключи связки** с другими источниками: **год бюджета**, **номер закона** о бюджете, при необходимости **КБК/ОКТМО** из федеральных открытых наборов.

## Периодичность обновления

По мере **бюджетного цикла** (проект, трёхлетка, отчёты об исполнении) и административных решений; точные сроки см. на портале.

## Ограничения и особенности

- Структура CMS портала может меняться; при «404» проверьте навигацию с **[главной r-19.ru](https://r-19.ru/)**.
- Не заменяет **федеральную** отчётность в **ГИИС «Электронный бюджет»**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 "https://r-19.ru/authorities/ministry-of-finance-of-the-republic-of-khakassia/common/1607/" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [Портал Правительства и «Бюджет для граждан»](/data-sources/regional/republic-of-khakassia-government-citizen-budget-r19) — смежный вход на том же домене.
- [budget.gov.ru — регионы](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions) — открытые наборы с выбором субъекта.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые выгрузки.
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — контур отчётности и открытых данных.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — остальные источники субъекта.

## Не путать с

- **[Портал Правительства (корень)](/data-sources/regional/republic-of-khakassia-government-citizen-budget-r19)** — шире, чем узкий раздел Минфина; материалы «для граждан» могут быть вынесены отдельно.
