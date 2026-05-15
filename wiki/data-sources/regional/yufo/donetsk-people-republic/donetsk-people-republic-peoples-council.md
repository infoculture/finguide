---
title: 'Донецкая Народная Республика: Народный Совет Донецкой Народной Республики'
sidebar_label: Народный Совет ДНР
tags:
  - data-source
  - regional
  - legal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/donetsk-people-republic-peoples-council
source_url: 'https://dnrsovet.gov.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
description: >-
  Официальный сайт парламента ДНР: законы и постановления, в том числе о
  бюджете, повестка и материалы заседаний.
content_type: data_source
entity_type: data-source
source_authority: regional
data_completeness: partial
machine_readability: mixed
related_pages:
  - /data-sources/regional/subject-donetsk-people-republic-sources-overview
  - /data-sources/regional/donetsk-people-republic-npa-portal
  - /data-sources/regional/donetsk-people-republic-minfin
  - /data-sources/regional/donetsk-people-republic-ufk-donetsk
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Донецкая Народная Республика: Народный Совет Донецкой Народной Республики

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный законодательный орган ДНР |
| Тип доступа | Официальный веб-портал парламента |
| Основные форматы | HTML; PDF/DOC законов и постановлений по ссылкам |
| Оператор | Народный Совет Донецкой Народной Республики |
| Режим доступа | Открытое ознакомление с публичными материалами |

Коротко: **парламентский** первоисточник для текстов законов и постановлений, включая **бюджетный блок**; дополняет **[банк НПА](/data-sources/regional/donetsk-people-republic-npa-portal)** и **[Минфин ДНР](/data-sources/regional/donetsk-people-republic-minfin)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (редакционная правка карточки и slug) |
| Полнота (`data_completeness`) | частичная — зависит от полноты размещения стенограмм, приложений и архивов |
| Машиночитаемость (`machine_readability`) | смешанный: преимущественно HTML и PDF; без отдельного стабильного API |
| Юридическая значимость (`legal_significance`) | официальный сайт законодательного органа |
| Задержка обновления (`update_lag`) | от нескольких часов до дней после заседаний и подписания актов |
| Глубина архива (`archive_depth`) | определяется разделом «Документы»/архивом созыва |
| Лицензия (`license_or_terms`) | официальные тексты НПА; условия повторного использования см. практику публикации |

## Описание

На сайте Народного Совета обычно публикуются **проекты и принятые** законы, постановления и сопутствующие материалы заседаний. Для **агрегированной навигации** по НПА удобен также **[dnronline](/data-sources/regional/donetsk-people-republic-npa-portal)**. Для **исполнения** после принятия закона о бюджете смотрите **[Минфин](/data-sources/regional/donetsk-people-republic-minfin)** и **[УФК](/data-sources/regional/donetsk-people-republic-ufk-donetsk)**.

## Оператор

Народный Совет Донецкой Народной Республики — канонический вход: https://dnrsovet.gov.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница парламента | https://dnrsovet.gov.ru/ | HTML |

## Объекты данных и показатели

- **Тексты законов** и постановлений (включая бюджетные).
- **Повестка и материалы** к заседаниям (если размещаются).
- **Не** является источником **кассовых** реестров или открытых машинных выгрузок исполнения бюджета.

## Периодичность обновления

Связана с календарём заседаний и процедурой официального опубликования актов.

## Ограничения и особенности

- Исторически отмечалась **нестабильная доступность** сайта; закладывайте зеркалирование этичным образом и фиксацию даты снимка.
- Для автоматизации скачивания проверяйте **robots.txt** и нагрузку на сервер.

## Примеры доступа

Проверка заголовков ответа главной страницы:

```bash
curl -sI -L --max-time 20 "https://dnrsovet.gov.ru/" | head -n 8
```

## Связанные страницы wiki

- [Банк НПА (dnronline)](/data-sources/regional/donetsk-people-republic-npa-portal) — альтернативная витрина нормативных текстов.
- [Минфин ДНР](/data-sources/regional/donetsk-people-republic-minfin) — исполнительный контур бюджета.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика навигации по региональным источникам.
- [Сводная страница субъекта](/data-sources/regional/subject-donetsk-people-republic-sources-overview) — все источники по ДНР в wiki.

## Не путать с

- **[Банк НПА (dnronline)](/data-sources/regional/donetsk-people-republic-npa-portal)** — тематический портал НПА; может отличаться полнотой и версией текста от парламентской публикации.
