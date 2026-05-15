---
title: 'Санкт-Петербург: Комитет финансового контроля (КФК)'
sidebar_label: Комитет финконтроля СПб
tags:
  - data-source
  - regional
  - control
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-financial-control-committee
source_url: 'https://www.gov.spb.ru/gov/otrasl/kfk'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
description: >-
  Официальный раздел Комитета финансового контроля Санкт-Петербурга на портале
  Администрации: внутренний финансовый контроль, методические материалы и
  нормативные документы по контрольной деятельности в городе.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-control-auditing-chamber-ksp
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/federal/budget-gov-ru-datasets
---

# Санкт-Петербург: Комитет финансового контроля (КФК)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — **внутренний финансовый контроль** исполнительной власти города |
| Тип доступа | Публичный раздел на **gov.spb.ru** |
| Основные форматы | **HTML**; **PDF** по ссылкам |
| Оператор | **Комитет финансового контроля Санкт-Петербурга** |
| Режим доступа | Открытый |

Коротко: **контекст** и **нормативка** по **внутреннему** финконтролю в органах Администрации. Результаты **внешнего** контроля (парламентский аудит) см. **[КСП СПб](/data-sources/regional/saint-petersburg-control-auditing-chamber-ksp)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — фокус на методологии и нормах, не на строках исполнения бюджета |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** |
| Юридическая значимость (`legal_significance`) | официальный орган Администрации |
| Задержка обновления (`update_lag`) | нерегулярно |
| Глубина архива (`archive_depth`) | зависит от раздела архива на портале |
| Лицензия (`license_or_terms`) | см. правила gov.spb.ru |

## Описание

КФК задаёт рамки **внутреннего** контроля за использованием бюджетных средств в **исполнительной** вертикали. Для **цифр исполнения** бюджета используйте **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)** и федеральные открытые наборы.

## Оператор

**Комитет финансового контроля Санкт-Петербурга** — https://www.gov.spb.ru/gov/otrasl/kfk

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Раздел КФК | https://www.gov.spb.ru/gov/otrasl/kfk | HTML |

## Объекты данных и показатели

- **Нормативные** и **методические** документы КФК.
- **Новости** и **анонсы** проверок (где раскрыто публично).
- **Не** замена реестров нарушений или кассы — для этого другие контуры.

## Периодичность обновления

По мере публикаций комитета.

## Ограничения и особенности

- Путь `/gov/otrasl/kfk` может измениться при реорганизации портала — ищите «финансовый контроль» с главной **gov.spb.ru**.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.gov.spb.ru/gov/otrasl/kfk"
```

## Связанные страницы wiki

- [Контрольно-счётная палата СПб](/data-sources/regional/saint-petersburg-control-auditing-chamber-ksp) — внешний парламентский аудит.
- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — бюджет и отчётность.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data).
- [Сводная по источникам СПб](/data-sources/regional/subject-saint-petersburg-sources-overview).

## Не путать с

- **[КСП](/data-sources/regional/saint-petersburg-control-auditing-chamber-ksp)** — **внешний** аудит ЗакСобрания; КФК — **внутренний** контроль Администрации.
