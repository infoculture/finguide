---
title: 'Московская область: Московская областная Дума (mosoblduma.ru)'
sidebar_label: 'Московская областная Дума'
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/moscow-oblast-mosoblduma
source_url: 'https://www.mosoblduma.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
description: >-
  Официальный сайт Московской областной Думы: законопроекты, законы о бюджете,
  публичные слушания и повестка парламентского цикла Московской области.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/moscow-oblast-mosoblduma-laws
  - /data-sources/regional/moscow-oblast-mosoblpravo
  - /data-sources/regional/moscow-oblast-mef
  - /data-sources/regional/subject-moscow-oblast-sources-overview
  - /data-sources/regional/moscow-oblast-government-mosreg
---

# Московская область: Московская областная Дума (mosoblduma.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Законодательный** орган **Московской области** |
| Тип доступа | Публичный **веб-портал** парламента |
| Основные форматы | **HTML**, **PDF** |
| Оператор | **Московская областная Дума** |
| Режим доступа | Открытое чтение |

Коротко: **повестка и процедуры** парламента субъекта; **тексты законов** — также в **[разделе законов](/data-sources/regional/moscow-oblast-mosoblduma-laws)**, **полный банк НПА** — на **[mosoblpravo.ru](/data-sources/regional/moscow-oblast-mosoblpravo)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | **Высокая** для парламентских материалов; **не** исчерпывает весь **НПА** субъекта |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** |
| Юридическая значимость (`legal_significance`) | **Официальный** сайт **Мособлдумы** |
| Задержка обновления (`update_lag`) | **Низкая** в сессионный период |
| Глубина архива (`archive_depth`) | Архивы заседаний и документов — по структуре сайта |
| Лицензия (`license_or_terms`) | Официальные тексты |

## Описание

Сайт **mosoblduma.ru** публикует **законопроекты**, календарь **заседаний**, материалы **публичных слушаний** и разделы по **контролю**. Для **цифр исполнения бюджета** после принятия закона о бюджете переходите к **[МЭФ](/data-sources/regional/moscow-oblast-mef)** и **[ГИИС](/information-systems/federal/giis-eb)**.

## Оператор

**Московская областная Дума** — канонический вход: https://www.mosoblduma.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Корень сайта | https://www.mosoblduma.ru/ | HTML |
| Законы области (раздел) | https://www.mosoblduma.ru/Zakoni/Zakoni_Moskovskoj_oblasti | HTML |

## Объекты данных и показатели

- **Проекты законов** (в т.ч. о бюджете), **стенограммы/повестки** (по мере размещения).
- **Публичные слушания:** объявления, материалы, итоги.
- **Связка** с **[исполнительной ветвью](/data-sources/regional/moscow-oblast-government-mosreg)** — через принятые акты и **поручения**.

## Периодичность обновления

**Сессионный** ритм; пики — **весна** (бюджетный цикл) и осенние сессии.

## Ограничения и особенности

- **Парламентский** сайт **не заменяет** **исполнительные** порталы для **оперативной отчётности** по кассе.

## Примеры доступа

```bash
curl -fsSL -A "finguide-check/1.0" -o /dev/null -w "%{http_code}\n" "https://www.mosoblduma.ru/"
```

## Связанные страницы wiki

- [Законы МО на сайте Мособлдумы](/data-sources/regional/moscow-oblast-mosoblduma-laws) — прямой раздел законов.
- [Банк НПА Московской области](/data-sources/regional/moscow-oblast-mosoblpravo) — сводная правовая база.
- [Портал Правительства МО](/data-sources/regional/moscow-oblast-government-mosreg) — исполнительная власть.

## Не путать с

- **[Государственная Дума РФ](https://www.duma.gov.ru/)** — **федеральный** парламент; **Мособлдума** — **региональный** уровень.
