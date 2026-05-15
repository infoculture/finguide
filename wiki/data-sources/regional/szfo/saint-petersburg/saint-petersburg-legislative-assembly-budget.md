---
title: 'Санкт-Петербург: Законодательное Собрание — раздел о бюджете'
sidebar_label: ЗакСобрание СПб — бюджет
tags:
  - data-source
  - regional
  - budget
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-legislative-assembly-budget
source_url: 'https://www.assembly.spb.ru/lawmaking/legislation/budget'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
description: >-
  Парламентский контур бюджета Санкт-Петербурга: законы о бюджете, проекты,
  материалы к рассмотрению и сопутствующие документы на сайте Законодательного
  Собрания.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-pravo-publication-region78
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /information-systems/federal/pravo-gov-ru
  - /data-sources/regional/how-to-find-regional-data
---

# Санкт-Петербург: Законодательное Собрание — раздел о бюджете

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — **парламентский** этап бюджетного цикла (законодательная власть субъекта) |
| Тип доступа | Публичный раздел сайта ЗакСобрания |
| Основные форматы | **HTML**; вложения **PDF**/документы по ссылкам |
| Оператор | **Законодательное Собрание Санкт-Петербурга** |
| Режим доступа | Открытый |

Коротко: **проекты** и **материалы** к законам о бюджете, повестка и сопровождение рассмотрения. Для **официально опубликованных** текстов принятых актов после подписания используйте **[блок region78 на publication.pravo.gov.ru](/data-sources/regional/saint-petersburg-pravo-publication-region78)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — фокус на законодательной стадии, не на кассе и исполнении |
| Машиночитаемость (`machine_readability`) | **HTML/PDF**; без единого API |
| Юридическая значимость (`legal_significance`) | официальный парламентский источник материалов рассмотрения |
| Задержка обновления (`update_lag`) | привязана к календарю сессий и чтений |
| Глубина архива (`archive_depth`) | зависит от вёрстки архива на сайте |
| Лицензия (`license_or_terms`) | см. правила сайта ЗакСобрания |

## Описание

Раздел публикует **ход принятия** бюджетного законодательства: проекты, приложения, пояснительные записки (по мере размещения). Исполнение и отчёты об исполнении обычно ведёт **исполнительная власть** — см. **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)** и **[Открытый бюджет](/data-sources/regional/saint-petersburg-open-budget-budget-gov-spb)**.

## Оператор

**Законодательное Собрание Санкт-Петербурга** — https://www.assembly.spb.ru/lawmaking/legislation/budget

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Раздел «Бюджет Санкт-Петербурга» | https://www.assembly.spb.ru/lawmaking/legislation/budget | HTML |

## Объекты данных и показатели

- **Законопроекты** о бюджете, изменения, сопроводительные документы.
- **Ссылки** на стенограммы/новости (если публикуются в смежных разделах сайта).
- Связка с **КБК/классификаторами** — в текстах законов и приложениях; для глоссария см. [/glossary/kbk](/glossary/kbk).

## Периодичность обновления

Пик активности — **осенне-зимний** бюджетный цикл; вне сессий обновления реже.

## Ограничения и особенности

- URL вложенных страниц могут меняться — ориентируйтесь на **корень раздела** выше.
- Не смешивайте **стадию законопроекта** на сайте парламента с **официальным опубликованием** акта на **[publication.pravo.gov.ru](/data-sources/regional/saint-petersburg-pravo-publication-region78)**.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.assembly.spb.ru/lawmaking/legislation/budget"
```

## Связанные страницы wiki

- [Официальное опубликование НПА СПб (region78)](/data-sources/regional/saint-petersburg-pravo-publication-region78) — корпус опубликованных актов субъекта.
- [ОИППИ / pravo.gov.ru](/information-systems/federal/pravo-gov-ru) — федеральный контур правовой информации.
- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — исполнительный контур бюджета.
- [Сводная по источникам СПб](/data-sources/regional/subject-saint-petersburg-sources-overview).

## Не путать с

- **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)** — проект закона и **исполнительные** материалы чаще ведутся там до и параллельно парламентской стадии.
