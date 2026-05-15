---
title: 'Донецкая Народная Республика: банк нормативных правовых актов (npa.dnronline.su)'
sidebar_label: 'Банк НПА ДНР (dnronline)'
tags:
  - data-source
  - regional
  - legal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/donetsk-people-republic-npa-portal
source_url: 'http://npa.dnronline.su/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
  - json
status: current
last_verified: 2026-05-15
description: >-
  Публичный банк нормативных правовых актов ДНР на отдельном домене: поиск по
  НПА, включая законы о бюджете; в стеке сайта присутствует WordPress REST API.
content_type: data_source
entity_type: data-source
source_authority: regional
data_completeness: partial
machine_readability: mixed
related_pages:
  - /data-sources/regional/subject-donetsk-people-republic-sources-overview
  - /data-sources/regional/donetsk-people-republic-peoples-council
  - /data-sources/regional/donetsk-people-republic-minfin
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Донецкая Народная Республика: банк нормативных правовых актов (npa.dnronline.su)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный **банк НПА** ДНР |
| Тип доступа | Веб-портал; обнаружен стандартный `wp-json` у WordPress |
| Основные форматы | HTML; JSON по REST API WordPress (наличие конкретных коллекций — по ответу сервера) |
| Оператор | Публичная витрина `npa.dnronline.su` (см. импрессум на сайте при анализе) |
| Режим доступа | Открытый просмотр |

Коротко: удобная **точка поиска** по нормативным текстам, включая **законы о бюджете**; для парламентского контекста принятия сверяйте с **[Народным Советом](/data-sources/regional/donetsk-people-republic-peoples-council)**, для исполнения — с **[Минфином](/data-sources/regional/donetsk-people-republic-minfin)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (редакционная правка; `HEAD` к корню даёт `200 OK`) |
| Полнота (`data_completeness`) | частичная — охват базы и актуальность редакций нужно подтверждать выборочно |
| Машиночитаемость (`machine_readability`) | смешанный: HTML + потенциально JSON через `/wp-json/` |
| Юридическая значимость (`legal_significance`) | публичная витрина НПА; для спорных случаев сверяйте с официальным парламентским источником |
| Задержка обновления (`update_lag`) | зависит от оператора витрины и процедуры загрузки актов |
| Глубина архива (`archive_depth`) | определяется содержимым CMS |
| Лицензия (`license_or_terms`) | уточняйте на сайте; массовое копирование контента — с учётом авторских ограничений оператора |

## Описание

Портал ориентирован на **навигацию по НПА** и смежным документам. Технически сайт отдаёт заголовки `Link` на **`/wp-json/`**, что открывает путь к **программному** обходу в рамках правил использования API и нагрузки на сервер. Для **бюджетной аналитики** комбинируйте с карточками **[Минфина](/data-sources/regional/donetsk-people-republic-minfin)** и **[УФК](/data-sources/regional/donetsk-people-republic-ufk-donetsk)**.

## Оператор

Публичный банк НПА на домене `dnronline.su` — канонический вход: http://npa.dnronline.su/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница банка НПА | http://npa.dnronline.su/ | HTML |
| Обнаруженный REST API WordPress | http://npa.dnronline.su/wp-json/ | JSON |

## Объекты данных и показатели

- **Нормативные акты** с атрибутами публикации в CMS (дата, рубрика, вложения — по факту страницы).
- **Законы о бюджете** — как подмножество НПА; сверяйте реквизиты и редакцию с парламентским источником.
- **Не** путать с **федеральным** Консультантом/ГАРАНТ: иной правовой контур.

## Периодичность обновления

Определяется регламентом загрузки актов на витрину; может опережать или отставать от официального парламентского размещения.

## Ограничения и особенности

- Базовый URL использует **HTTP**; при интеграции учитывайте риски перехвата и смешанного контента.
- **WordPress REST** может раскрывать не всё, что видно в HTML-шаблонах; проверяйте схему на `wp-json/wp/v2/types`.

## Примеры доступа

Проверка доступности корня и заголовка `Link` на API:

```bash
curl -sI -L --max-time 20 "http://npa.dnronline.su/" | head -n 15
```

## Связанные страницы wiki

- [Народный Совет ДНР](/data-sources/regional/donetsk-people-republic-peoples-council) — парламентский канон публикации законов.
- [Минфин ДНР](/data-sources/regional/donetsk-people-republic-minfin) — бюджетный контур исполнительной власти.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска по региональным витринам.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральный контур справочников для технических связок.

## Не путать с

- **[Народный Совет ДНР](/data-sources/regional/donetsk-people-republic-peoples-council)** — официальный сайт парламента; может содержать иные версии документов или дополнительные материалы к законам.
