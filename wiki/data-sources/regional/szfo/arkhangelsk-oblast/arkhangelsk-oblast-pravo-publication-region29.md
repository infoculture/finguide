---
title: 'Архангельская область: опубликованные НПА (publication.pravo.gov.ru, region29)'
sidebar_label: Официальное опубликование НПА (29)
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/arkhangelsk-oblast-pravo-publication-region29
source_url: 'https://publication.pravo.gov.ru/documents/block/region29'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: mixed
description: >-
  Блок официального опубликования нормативных правовых актов субъекта РФ с кодом
  29 (Архангельская область) на publication.pravo.gov.ru: законы о бюджете и
  смежные акты в юридически значимой редакции.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-arkhangelsk-oblast-sources-overview
  - /data-sources/regional/arkhangelsk-oblast-minfin-dvinaland
  - /data-sources/regional/arkhangelsk-oblast-aosd-budget
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Архангельская область: опубликованные НПА (publication.pravo.gov.ru, region29)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональные** НПА Архангельской области в **официальном** сегменте публикации (**код 29**) |
| Тип доступа | Веб-портал **pravo.gov.ru** (блок **region29**) |
| Основные форматы | HTML, PDF (тексты актов по мере размещения) |
| Оператор | Официальный интернет-портал правовой информации (федеральный оператор витрины) |
| Режим доступа | Открытый просмотр |

Коротко: **канонический** федеральный канал **официального опубликования** ряда региональных актов; для бюджетного цикла дополняет парламентский сайт и витрины **Минфина** текстами **принятых** законов и подзаконных актов.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — отражает **опубликованный** сегмент федеральной витрины, а не весь документооборот субъекта |
| Машиночитаемость (`machine_readability`) | HTML/PDF; стабильного публичного API в карточке не фиксируется |
| Юридическая значимость (`legal_significance`) | официальная публикация для актов, для которых установлен данный порядок |
| Задержка обновления (`update_lag`) | зависит от регистрации и опубликования актов |
| Глубина архива (`archive_depth`) | определяется политикой портала и поиском по реестру |
| Лицензия (`license_or_terms`) | условия **pravo.gov.ru** |

## Описание

Блок **region29** на **publication.pravo.gov.ru** используют для поиска **опубликованных** нормативных актов **Архангельской области**, в том числе **законов о бюджете** и смежных **НПА**. Для **проектов** законов, материалов **публичных слушаний** и парламентского контура см. **[Архангельское областное Собрание депутатов](/data-sources/regional/arkhangelsk-oblast-aosd-budget)**; для **агрегированных** бюджетных материалов и отчётности — **[Минфин области](/data-sources/regional/arkhangelsk-oblast-minfin-dvinaland)**.

## Оператор

Официальный интернет-портал правовой информации — канонический вход: https://publication.pravo.gov.ru/documents/block/region29

- Карточка ИС: **[ОИППИ pravo.gov.ru](/information-systems/federal/pravo-gov-ru)** — федеральный контур опубликования и метаданных актов.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Блок региональных НПА (29), HTTPS | https://publication.pravo.gov.ru/documents/block/region29 | HTML |
| Тот же блок (HTTP; иногда устойчивее для простых клиентов) | http://publication.pravo.gov.ru/documents/block/region29 | HTML |

## Объекты данных и показатели

- **Нормативные правовые акты** субъекта (в т.ч. с **финансово-бюджетным** содержанием при наличии в потоке публикаций).
- **Метаданные** публикации (дата, вид акта — по интерфейсу портала).
- **Не** заменяет **машинные** наборы исполнения бюджета — для цифр по строкам бюджета см. **[наборы «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets)** и региональные витрины **Минфина**.

## Периодичность обновления

По мере **официальной** регистрации и публикации актов на витрине.

## Ограничения и особенности

- Доступность из части сетей может отличаться; при сбоях проверяйте **HTTPS** и актуальный TLS-стек клиента.
- Код **29** в URL — идентификатор субъекта в сервисе опубликования; не смешивайте с другими регионами.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "Mozilla/5.0" \
  "https://publication.pravo.gov.ru/documents/block/region29" || true
```

## Связанные страницы wiki

- [Министерство финансов Архангельской области (портал «ДвинаЛенд»)](/data-sources/regional/arkhangelsk-oblast-minfin-dvinaland) — оперативные бюджетные материалы субъекта.
- [Архангельское областное Собрание депутатов (бюджетный раздел)](/data-sources/regional/arkhangelsk-oblast-aosd-budget) — парламентские материалы и проекты законов.
- [Сводная страница субъекта](/data-sources/regional/subject-arkhangelsk-oblast-sources-overview) — все источники по области в wiki.

## Не путать с

- **[Сайт областного Собрания](/data-sources/regional/arkhangelsk-oblast-aosd-budget)** — иной оператор и часто иной набор документов (проекты, повестка); для **официальной** федеральной публикации ряда актов приоритет у **publication.pravo.gov.ru**.
