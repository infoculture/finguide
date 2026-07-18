---
title: 'Херсонская область: Официальный портал правовой информации'
sidebar_label: 'ОИППИ — поиск актов'
tags:
  - data-source
  - regional
  - legal
  - budget
last_updated: 2026-07-16
slug: /data-sources/regional/kherson-oblast-pravo-publication-region95
source_url: 'https://publication.pravo.gov.ru/'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-07-16
source_authority: federal
data_completeness: partial
machine_readability: HTML и PDF опубликованных текстов; без единого bulk-API для всех актов блока
description: >-
  Официальный портал правовой информации для поиска опубликованных актов;
  прежний прямой маршрут регионального блока 95 сейчас не доступен, поэтому
  для регионального контекста дополнительно используется портал Правительства
  Херсонской области.
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

# Херсонская область: Официальный портал правовой информации

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральная инфраструктура официального опубликования; региональный поиск по Херсонской области |
| Тип доступа | Публичный веб-сервис опубликования |
| Основные форматы | HTML, PDF (официальные тексты) |
| Оператор | Официальный интернет-портал правовой информации (федеральный контур) |
| Режим доступа | Открытый |

Коротко: официальный федеральный портал для поиска юридически значимых опубликованных актов. Прямой маршрут блока региона 95 больше не используется; оперативные региональные документы доступны на [портале Правительства Херсонской области](/data-sources/regional/kherson-oblast-gov-npa-documents), а проекты и повестка — у [Херсонской областной Думы](/data-sources/regional/kherson-oblast-duma).

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

Ранее для поиска **опубликованных** нормативных актов **Херсонской области** использовался маршрут **region95** на **publication.pravo.gov.ru**. Сейчас прямой маршрут возвращает 404, поэтому в карточке оставлен корень официального портала, а для оперативных региональных материалов — [раздел документов Правительства](/data-sources/regional/kherson-oblast-gov-npa-documents). Код **95** сохраняется как историческая привязка к прежнему региональному маршруту.

## Оператор

Официальный интернет-портал правовой информации — https://publication.pravo.gov.ru/

- Карточка ИС: **[ОИППИ pravo.gov.ru](/information-systems/federal/pravo-gov-ru)** — федеральный контур опубликования и метаданных актов.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Корневой портал | https://publication.pravo.gov.ru/ | HTML |
| Поиск по опубликованным актам | https://publication.pravo.gov.ru/search | HTML |

## Объекты данных и показатели

- **Нормативные правовые акты** субъекта (в т.ч. с финансово-бюджетным содержанием).
- **Метаданные** публикации (дата, вид акта — по интерфейсу портала).

## Периодичность обновления

По мере **официальной** регистрации и публикации актов на витрине.

## Ограничения и особенности

- Доступность из части сетей может ограничиваться WAF; при сбоях проверяйте HTTP/HTTPS и заголовок `User-Agent`.
- Прямой маршрут `/documents/block/region95` возвращает 404; не используйте его как рабочую точку доступа.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "Mozilla/5.0" \
  "https://publication.pravo.gov.ru/" || true
```

## Связанные страницы wiki

- [Херсонская областная Дума](/data-sources/regional/kherson-oblast-duma) — парламентские материалы и проекты законов.
- [Министерство финансов Херсонской области](/data-sources/regional/kherson-oblast-minfin) — бюджетные материалы финоргана.
- [Раздел документов Правительства](/data-sources/regional/kherson-oblast-gov-npa-documents) — региональный банк НПА на портале khogov.ru.
- [Сводная страница субъекта](/data-sources/regional/subject-kherson-oblast-sources-overview) — все источники по области.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска.

## Не путать с

- **[Раздел документов Правительства](/data-sources/regional/kherson-oblast-gov-npa-documents)** — текущая региональная витрина исполнительной власти; корень **publication.pravo.gov.ru** остаётся федеральным поисковым контуром.
