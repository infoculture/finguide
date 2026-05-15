---
title: "ХМАО — Югра: Управление Федерального казначейства (hantymansiysk.roskazna.gov.ru)"
sidebar_label: "УФК по ХМАО — Югре (Росказна)"
tags:
  - data-source
  - regional
  - treasury
last_updated: 2026-05-15
slug: /data-sources/regional/khmao-yugra-roskazna-hantymansiysk
source_url: "https://hantymansiysk.roskazna.gov.ru/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: HTML; казначейские сервисы — преимущественно через федеральные кабинеты
description: >-
  Официальный сайт Управления Федерального казначейства по Ханты-Мансийскому автономному округу — Югре: новости,
  контакты территориального органа и ссылки на федеральные сервисы Росказначейства.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-depfin
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/budget-gov-ru-datasets
---

# ХМАО — Югра: Управление Федерального казначейства

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** орган, **территориальное** управление по округу |
| Тип доступа | Публичный сайт УФК |
| Основные форматы | **HTML** |
| Оператор | **Управление Федерального казначейства по Ханты-Мансийскому автономному округу — Югре** |
| Режим доступа | Открытый (операции — через **ЛК** и федеральные сервисы) |

Коротко: **территориальный вход Росказначейства** по округу; **окружной бюджет** как учётный объект — на [Депфине](/data-sources/regional/khmao-yugra-depfin), **федеральный казначейский контур** — в [портале Росказначейства](/information-systems/federal/roskazna-portal).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — публичная витрина территориального органа |
| Машиночитаемость (`machine_readability`) | **HTML**; массовые **открытые** ряды по лицевым счетам — в федеральных наборах |
| Юридическая значимость (`legal_significance`) | **Официальный** федеральный сайт |
| Задержка обновления (`update_lag`) | Зависит от раздела |
| Глубина архива (`archive_depth`) | Новости и документы — по политике УФК |
| Лицензия (`license_or_terms`) | Условия roskazna.gov.ru |

## Описание

Сайт **hantymansiysk.roskazna.gov.ru** публикует **новости** УФК, **контакты**, **реквизиты** и ссылки на **федеральные** сервисы казначейства. Для анализа **исполнения бюджета** субъекта используйте прежде всего [материалы Депфина](/data-sources/regional/khmao-yugra-depfin) и [наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).

## Оператор

**Управление Федерального казначейства по Ханты-Мансийскому автономному округу — Югре** — https://hantymansiysk.roskazna.gov.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень сайта УФК | https://hantymansiysk.roskazna.gov.ru/ | HTML |

## Объекты данных и показатели

- **Организационные** сведения территориального органа.
- **Ссылки** на **федеральные** казначейские сервисы (для пользователей и участников бюджетного процесса).
- **Не является** заменой [ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) для открытых машинных наборов.

## Периодичность обновления

**Нерегулярная** для новостей; **постоянная доступность** главной страницы.

## Ограничения и особенности

- Детальные **операционные** данные по счетам доступны участникам процесса через **авторизованные** каналы.

## Примеры доступа

```bash
curl -fsSL -A "finguide-khmao-roskazna-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://hantymansiysk.roskazna.gov.ru/"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview).
- [Депфин Югры](/data-sources/regional/khmao-yugra-depfin) — окружной бюджет.
- [Портал Росказначейства](/information-systems/federal/roskazna-portal) — федеральный контур.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — открытые данные бюджетной системы.
