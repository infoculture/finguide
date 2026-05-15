---
title: >-
  Херсонская область: официальное опубликование правовых актов (ОИППИ,
  блок региональных актов, код 95)
sidebar_label: 'ОИППИ — акты области (95)'
tags:
  - data-source
  - regional
  - legal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/kherson-oblast-pravo-publication-region95
source_url: 'https://publication.pravo.gov.ru/documents/block/region95'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: HTML и PDF опубликованных текстов; без единого bulk-API для всех актов блока
description: >-
  Федеральный сервис официального опубликования (publication.pravo.gov.ru):
  блок документов субъекта с кодом 95 (Херсонская область), включая
  законы о бюджете после официального опубликования.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/kherson-oblast-duma
  - /data-sources/regional/kherson-oblast-minfin
  - /data-sources/regional/kherson-oblast-gov-npa-documents
  - /data-sources/regional/subject-kherson-oblast-sources-overview
  - /information-systems/federal/pravo-gov-ru
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/federal/budget-gov-ru-datasets
---

# Херсонская область: ОИППИ — официальное опубликование актов субъекта

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральная инфраструктура опубликования с **региональным** фильтром (код **95** — Херсонская область) |
| Тип доступа | Публичный веб-сервис опубликования |
| Основные форматы | HTML, PDF (официальные тексты) |
| Оператор | Официальный интернет-портал правовой информации (федеральный контур) |
| Режим доступа | Открытый |

Коротко: **канонический** канал для юридически значимых текстов актов Херсонской области после официального опубликования — в первую очередь законы о бюджете и изменения к ним. **Проекты** и повестка — у [Херсонской областной Думы](/data-sources/regional/kherson-oblast-duma).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — отражает опубликованный сегмент федеральной витрины |
| Машиночитаемость (`machine_readability`) | HTML/PDF; стабильного публичного API в карточке не фиксируется |
| Юридическая значимость (`legal_significance`) | официальная публикация для актов, для которых установлен данный порядок |
| Задержка обновления (`update_lag`) | зависит от регистрации и опубликования актов |
| Глубина архива (`archive_depth`) | определяется политикой портала и поиском по реестру |
| Лицензия (`license_or_terms`) | условия pravo.gov.ru |

## Описание

Блок **region95** на **publication.pravo.gov.ru** используют для поиска **опубликованных** нормативных актов **Херсонской области**, в том числе **законов о бюджете**. Код **95** соответствует коду субъекта в ФИАС/КЛАДР и коду региона на сайте УФНС (**rn95**). Для **оперативных** материалов исполнительной власти см. [раздел документов на khogov.ru](/data-sources/regional/kherson-oblast-gov-npa-documents).

## Оператор

Официальный интернет-портал правовой информации — https://publication.pravo.gov.ru/documents/block/region95

- Карточка ИС: **[ОИППИ pravo.gov.ru](/information-systems/federal/pravo-gov-ru)** — федеральный контур опубликования и метаданных актов.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Блок НПА субъекта (95), HTTPS | https://publication.pravo.gov.ru/documents/block/region95 | HTML |
| Тот же блок (HTTP) | http://publication.pravo.gov.ru/documents/block/region95 | HTML |
| Корневой портал (из исходной таблицы) | http://pravo.gov.ru/ | HTML |

## Объекты данных и показатели

- **Нормативные правовые акты** субъекта (в т.ч. с финансово-бюджетным содержанием).
- **Метаданные** публикации (дата, вид акта — по интерфейсу портала).

## Периодичность обновления

По мере **официальной** регистрации и публикации актов на витрине.

## Ограничения и особенности

- Доступность из части сетей может ограничиваться WAF; при сбоях проверяйте HTTP/HTTPS и заголовок `User-Agent`.
- Исходная таблица указывала корень **pravo.gov.ru**; для **поиска по субъекту** предпочтителен блок **region95**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "Mozilla/5.0" \
  "https://publication.pravo.gov.ru/documents/block/region95" || true
```

## Связанные страницы wiki

- [Херсонская областная Дума](/data-sources/regional/kherson-oblast-duma) — парламентские материалы и проекты законов.
- [Министерство финансов Херсонской области](/data-sources/regional/kherson-oblast-minfin) — бюджетные материалы финоргана.
- [Раздел документов Правительства](/data-sources/regional/kherson-oblast-gov-npa-documents) — региональный банк НПА на портале khogov.ru.
- [Сводная страница субъекта](/data-sources/regional/subject-kherson-oblast-sources-overview) — все источники по области.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска.

## Не путать с

- **[Раздел документов на khogov.ru](/data-sources/regional/kherson-oblast-gov-npa-documents)** — региональная витрина исполнительной власти; для **официальной** федеральной публикации ряда актов приоритет у **publication.pravo.gov.ru**.
