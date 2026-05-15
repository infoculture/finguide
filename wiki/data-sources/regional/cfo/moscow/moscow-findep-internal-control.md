---
title: "Город Москва: департамент финансов — внутренний финансовый аудит и ведомственный контроль"
sidebar_label: Депфин — внутренний контроль
tags:
  - data-source
  - regional
  - control
last_updated: 2026-05-15
slug: /data-sources/regional/moscow-findep-internal-control
source_url: "https://www.mos.ru/findep/documents"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML/PDF
description: >-
  Раздел документов департамента финансов города Москвы о внутреннем финансовом аудите и
  ведомственном контроле: методика, отчётность и материалы исполнительной власти города.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-moscow-sources-overview
  - /data-sources/regional/moscow-findep
  - /data-sources/regional/moscow-accounts-chamber-ksp
  - /glossary/budget-process
---

# Город Москва: департамент финансов — внутренний финансовый аудит и ведомственный контроль

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Внутренний финансовый контроль** исполнительной власти **города Москва** |
| Тип доступа | Раздел **mos.ru/findep/documents** |
| Основные форматы | **HTML**, **PDF** |
| Оператор | **Департамент финансов города Москвы** |
| Режим доступа | Открытые публикации по политике раскрытия |

Коротко: **ведомственный** контур **внутреннего аудита** и контроля за использованием средств. **Внешний** муниципальный контроль — у **[КСП Москвы](/data-sources/regional/moscow-accounts-chamber-ksp)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — публикуются **избранные** материалы и отчёты |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** |
| Юридическая значимость (`legal_significance`) | **Официальные** документы департамента |

## Описание

Раздел **документов** депфина объединяет тематики **внутреннего финансового аудита** и **ведомственного контроля**. Для понимания места контроля в **бюджетном цикле** см. **[бюджетный процесс](/glossary/budget-process)**.

## Оператор

**Департамент финансов города Москвы** — https://www.mos.ru/findep/documents

## URL и точки доступа

| Раздел | URL | Формат |
| --- | --- | --- |
| Документы депфина | https://www.mos.ru/findep/documents | HTML |

## Объекты данных и показатели

- **Порядки и положения** о внутреннем финансовом аудите.
- **Отчёты** и **обобщения** по результатам контрольных мероприятий (в объёме публикации).
- **Не дублирует** заключения **КСП** — см. отдельную карточку.

## Периодичность обновления

По мере **утверждения** новых документов и **отчётного** цикла.

## Примеры доступа

```bash
curl -fsSL -A "finguide-findep-docs/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.mos.ru/findep/documents"
```

## Связанные страницы wiki

- [Департамент финансов (главная)](/data-sources/regional/moscow-findep) — общий контур финоргана.
- [КСП Москвы](/data-sources/regional/moscow-accounts-chamber-ksp) — внешний муниципальный финансовый контроль.
- [Бюджетный процесс](/glossary/budget-process) — этапы планирования, исполнения и контроля.

## Не путать с

- **[КСП Москвы](/data-sources/regional/moscow-accounts-chamber-ksp)** — **внешний** контрольный орган; раздел депфина — **внутренний** контур исполнительной власти.
