---
title: 'Ивановская область: Ивановская областная Дума (ivoblduma.ru)'
sidebar_label: 'Областная Дума'
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-14
slug: /data-sources/regional/ivanovo-oblast-legislature-ivoblduma
source_url: 'https://ivoblduma.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный сайт законодательного органа Ивановской области: повестка,
  проекты и принятые законы (включая бюджетный блок), депутатские материалы.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/ivanovo-oblast-regional-legal-acts-ivcons
  - /data-sources/regional/ivanovo-oblast-minfin-depfinance
  - /data-sources/regional/subject-ivanovo-oblast-sources-overview
  - /information-systems/federal/sozd
  - /data-sources/regional/how-to-find-regional-data
---

# Ивановская область: Ивановская областная Дума (ivoblduma.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Законодательный орган Ивановской области |
| Тип доступа | Публичный веб-портал |
| Основные форматы | HTML, PDF (законы и приложения по мере публикации) |
| Оператор | Ивановская областная Дума |
| Режим доступа | Открытый |

Коротко: официальный вход к законам области, включая бюджетное законодательство, и к материалам законодательного процесса; исполнительные акты ищите в [банке НПА Правительства](/data-sources/regional/ivanovo-oblast-regional-legal-acts-ivcons).

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — зависит от полноты размещения приложений и стенограмм |
| Машиночитаемость (`machine_readability`) | смешанный: HTML и файлы; без единого API |
| Юридическая значимость (`legal_significance`) | официальный сайт представительного органа субъекта РФ |
| Задержка обновления (`update_lag`) | привязана к сессиям и процедуре рассмотрения законопроектов |
| Глубина архива (`archive_depth`) | определяется разделами законотворчества и базой НПА на сайте |
| Лицензия (`license_or_terms`) | см. условия сайта |

## Описание

Сайт `ivoblduma.ru` публикует повестки заседаний, статусы законопроектов и тексты принятых законов Ивановской области. Для федерального парламентского поиска и связки с ГД/СФ используйте [СОЗД](/information-systems/federal/sozd) как отдельный федеральный контур.

## Оператор

Ивановская областная Дума — канонический вход: https://ivoblduma.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Официальный сайт | https://ivoblduma.ru/ | HTML |

## Объекты данных и показатели

- **Законы Ивановской области**, в том числе о бюджете и о внесении изменений в бюджет.
- **Проекты законов**, повестки, пояснительные записки (по мере размещения).
- Связка: номер закона, дата принятия, статьи с параметрами бюджета; для машинной обработки часто требуется ручная выгрузка PDF.

## Периодичность обновления

По ходу законодательного процесса и сессий Думы.

## Ограничения и особенности

- Статус официального опубликования региональных законов уточняйте по правилам субъекта; параллельно проверяйте [банк НПА](/data-sources/regional/ivanovo-oblast-regional-legal-acts-ivcons) при наличии перекрёстных публикаций.

## Связанные страницы wiki

- [Банк НПА Правительства и Губернатора (gov.ivcons.ru)](/data-sources/regional/ivanovo-oblast-regional-legal-acts-ivcons) — смежный контур исполнительных актов.
- [Департамент финансов Ивановской области](/data-sources/regional/ivanovo-oblast-minfin-depfinance) — операционные материалы по бюджету и отчётности.
- [Сводная страница субъекта](/data-sources/regional/subject-ivanovo-oblast-sources-overview) — источники по Ивановской области.
- [СОЗД](/information-systems/federal/sozd) — федеральная система обеспечения законодательной деятельности.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.

## Не путать с

- **Банк документов Правительства** — иной вид актов и иной процедурный контур.
