---
title: "ХМАО — Югра: Счётная палата (sphmao.ru)"
sidebar_label: "Счётная палата Югры (sphmao.ru)"
tags:
  - data-source
  - regional
  - control
last_updated: 2026-05-15
slug: /data-sources/regional/khmao-yugra-accounts-chamber-sphmao
source_url: "https://sphmao.ru/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; отчёты и заключения часто в PDF
description: >-
  Официальный сайт Счётной палаты Ханты-Мансийского автономного округа — Югры: результаты внешнего муниципального
  финансового контроля, экспертно-аналитические материалы и аудиторские заключения по объектам контроля.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-depfin
  - /data-sources/regional/khmao-yugra-duma-dumahmao
  - /data-sources/regional/khmao-yugra-admhmao-legal-acts
  - /data-sources/regional/consolidated-budgets
---

# ХМАО — Югра: Счётная палата

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Внешний муниципальный финансовый контроль** и иные полномочия СП субъекта |
| Тип доступа | Публичный портал контрольного органа |
| Основные форматы | **HTML**; **PDF** отчётов и заключений |
| Оператор | **Счётная палата Ханты-Мансийского автономного округа — Югры** |
| Режим доступа | Открытый |

Коротко: **официальные материалы контроля** по бюджету и смежным темам; для **первичных** бюджетных рядов используйте [Депфин](/data-sources/regional/khmao-yugra-depfin) и [открытые данные](/data-sources/regional/khmao-yugra-open-data-portal).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — публикуются итоги отобранных контрольных мероприятий |
| Машиночитаемость (`machine_readability`) | **HTML/PDF**; без массовых открытых API |
| Юридическая значимость (`legal_significance`) | **Официальные** заключения и отчёты органа контроля субъекта |
| Задержка обновления (`update_lag`) | Зависит от цикла **проверок** и согласования публикаций |
| Глубина архива (`archive_depth`) | Задаётся политикой размещения на сайте |
| Лицензия (`license_or_terms`) | Условия сайта СП |

## Описание

Сайт **sphmao.ru** публикует **планы работ**, **отчёты** о результатах контроля, **аналитические** записки и новости органа. Для финансового анализа ценны **заключения** по исполнению бюджета и **муниципальным** финансам (в объёме раскрытия).

## Оператор

**Счётная палата Ханты-Мансийского автономного округа — Югры** — https://sphmao.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень сайта СП | https://sphmao.ru/ | HTML |

## Объекты данных и показатели

- **Контрольное мероприятие** / **аудит**: объект, период, выводы, рекомендации.
- **Финансовые нарушения и риски** в формулировках заключений (не всегда в виде табличных рядов).
- Связка с **нормативкой** — через [НПА](/data-sources/regional/khmao-yugra-admhmao-legal-acts) и [Думу](/data-sources/regional/khmao-yugra-duma-dumahmao).

## Периодичность обновления

**Нерегулярная**, привязана к календарю контрольных мероприятий.

## Ограничения и особенности

- Материалы **не заменяют** бухгалтерский учёт и официальную отчётность распорядителей бюджетных средств.

## Примеры доступа

```bash
curl -fsSL -A "finguide-khmao-sp-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://sphmao.ru/"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview).
- [Депфин Югры](/data-sources/regional/khmao-yugra-depfin) — первичные бюджетные публикации.
- [Дума Югры](/data-sources/regional/khmao-yugra-duma-dumahmao) — парламентский контур.
- [Правовые акты](/data-sources/regional/khmao-yugra-admhmao-legal-acts) — нормативная база.
- [Консолидированные бюджеты](/data-sources/regional/consolidated-budgets) — методический контекст многоуровневого учёта.
