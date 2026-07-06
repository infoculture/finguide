---
title: 'Ставропольский край: Министерство финансов (сайт mfsk.ru)'
sidebar_label: Минфин СК (mfsk.ru)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-minfin-mfsk
source_url: 'https://www.mfsk.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Официальный сайт Министерства финансов Ставропольского края: бюджетная политика, отчётность,
  разделы по госпрограммам и контролю; преимущественно HTML и файлы на сайте.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /data-sources/regional/stavropol-krai-minfin-state-programmes
  - /data-sources/regional/stavropol-krai-minfin-internal-financial-control
  - /data-sources/regional/stavropol-krai-open-budget-openbudsk
  - /data-sources/federal/budget-gov-ru-datasets
---

# Ставропольский край: Министерство финансов (сайт mfsk.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ставропольский край** — **региональный** финансовый орган |
| Тип доступа | Публичный **официальный** сайт |
| Основные форматы | **HTML**; **PDF** и др. **вложения** |
| Оператор | **Министерство финансов** Ставропольского края |
| Режим доступа | Открытый |

Коротко: **главный** региональный **вход** к **материалам** по **бюджету**, **отчётности** и **управлению** финансами края. Для **гражданских** визуализаций см. **[открытый бюджет](/data-sources/regional/stavropol-krai-open-budget-openbudsk)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**HTTP 403** на **автоматический** GET **главной** — **WAF**/**антибот**; **ручная** проверка в **браузере** обязательна) |
| Полнота (`data_completeness`) | **частичная** — публичная часть **не** эквивалентна **внутренним** системам учёта |
| Машиночитаемость (`machine_readability`) | **HTML/PDF**; **API** публично **не заявлен** |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **органа исполнительной власти** |
| Задержка обновления (`update_lag`) | **разная** по разделам |
| Глубина архива (`archive_depth`) | зависит от **архива новостей** и **документов** |
| Лицензия (`license_or_terms`) | по **правилам** сайта |

## Описание

Сайт агрегирует **новости**, **нормативные** ссылки и **специализированные** подразделы (см. отдельные карточки **госпрограмм** и **ВГК**).

## Оператор

Министерство финансов Ставропольского края — https://www.mfsk.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://www.mfsk.ru/ | HTML |

## Объекты данных и показатели

- **Проекты** и **исполнение** бюджета (в **публикуемой** части).
- **Отчёты** и **аналитические** материалы **Минфина** края.

## Периодичность обновления

**Нерегулярно** по **событиям** и **отчётным** датам.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-mfsk-check/1.0" \
  "https://www.mfsk.ru/"
```

## Связанные страницы wiki

- [Государственные программы (Минфин СК)](/data-sources/regional/stavropol-krai-minfin-state-programmes) — **узкий** раздел по **ГП** края.
- [Внутренний финансовый контроль (Минфин СК)](/data-sources/regional/stavropol-krai-minfin-internal-financial-control) — **ВГК** и **планы** мероприятий.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **федеральная** машиночитаемая **сверка**.
