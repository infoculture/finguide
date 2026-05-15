---
title: >-
  Республика Тыва: официальное опубликование правовых актов (ОИППИ, блок региональных
  актов — Республика Тыва)
sidebar_label: 'ОИППИ — акты Тывы'
tags:
  - data-source
  - regional
  - legal
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-tyva-pravo-gov-publication-acts
source_url: 'https://publication.pravo.gov.ru/documents/block/region17'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
description: >-
  Федеральный сервис официального опубликования: раздел региональных документов для
  Республики Тыва (включая законы о бюджете и иные НПА субъекта после опубликования).
content_type: data_source
entity_type: data-source
source_authority: federal
data_completeness: partial
machine_readability: HTML и PDF опубликованных текстов; без единого bulk-API для всех актов в карточке
related_pages:
  - /data-sources/regional/subject-republic-of-tyva-sources-overview
  - /data-sources/regional/republic-of-tyva-supreme-khural-budget
  - /data-sources/regional/republic-of-tyva-minfin
  - /information-systems/federal/pravo-gov-ru
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/federal/budget-gov-ru-datasets
---

# Республика Тыва: ОИППИ — официальное опубликование актов субъекта

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральная инфраструктура опубликования с **региональным** фильтром (Республика Тыва) |
| Тип доступа | Публичный веб-сервис опубликования |
| Основные форматы | HTML, PDF (официальные тексты) |
| Оператор | Официальный интернет-портал правовой информации (федеральный контур) |
| Режим доступа | Открытый |

Коротко: **канонический** вход для юридически значимых текстов актов Республики Тыва после официального опубликования — в первую очередь законы о бюджете и изменения к ним; рабочие проекты ищите на [сайте парламента](/data-sources/regional/republic-of-tyva-supreme-khural-budget).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 (редакционная вычитка) |
| Полнота (`data_completeness`) | частичная — зависит от полноты подачи актов в сервис со стороны субъекта |
| Машиночитаемость (`machine_readability`) | документы как HTML/PDF; массовая выгрузка требует отдельной автоматизации |
| Юридическая значимость (`legal_significance`) | высокая — официальное опубликование |
| Задержка обновления (`update_lag`) | от минут до дней после подписания — по регламентам опубликования |
| Глубина архива (`archive_depth`) | длительная на стороне федерального сервиса |
| Лицензия (`license_or_terms`) | режим официальных правовых текстов |

## Описание

URL `publication.pravo.gov.ru/.../region17` соответствует **блоку документов** субъекта с кодом, используемым в сервисе (Республика Тыва). Здесь фиксируется связь бюджетного анализа с **юридической** достоверностью текстов. Контекст федеральной ИС: [ОИППИ pravo.gov.ru](/information-systems/federal/pravo-gov-ru).

## Оператор

Официальный интернет-портал правовой информации — региональный блок: https://publication.pravo.gov.ru/documents/block/region17

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Блок опубликованных актов субъекта | https://publication.pravo.gov.ru/documents/block/region17 | HTML, PDF |

## Объекты данных и показатели

- Законы Республики Тыва о бюджете (официальные редакции).
- Иные региональные НПА по мере включения в блок опубликования.
- Метаданные: номер, дата принятия, дата опубликования — для привязки к временным рядам исполнения.

## Периодичность обновления

По мере официального опубликования актов.

## Ограничения и особенности

- Не каждый материал с сайтов ведомств проходит через этот блок в том виде, который ожидает аналитик — уточняйте вид нормативного акта.

## Связанные страницы wiki

- [Верховный Хурал — бюджет](/data-sources/regional/republic-of-tyva-supreme-khural-budget) — законодательная стадия и проекты.
- [Минфин Республики Тыва](/data-sources/regional/republic-of-tyva-minfin) — исполнение и отчётность.
- [ОИППИ (карточка ИС)](/information-systems/federal/pravo-gov-ru) — границы системы и смежные URL.
- [Сводная страница субъекта](/data-sources/regional/subject-republic-of-tyva-sources-overview) — остальные источники.

## Не путать с

- **[Верховный Хурал](/data-sources/regional/republic-of-tyva-supreme-khural-budget)** — проекты и процедура; ОИППИ — опубликованный текст для правоприменения.
