---
title: "Чеченская Республика: УФНС России по Чеченской Республике"
sidebar_label: "УФНС по Чеченской Республике"
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-05-15
slug: /data-sources/regional/chechen-republic-ufns
source_url: "https://www.nalog.gov.ru/rn20/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: HTML; отдельные сервисы ФНС — по ссылкам с портала
description: >-
  Региональный раздел сайта ФНС России (код rn20): налоги и сборы, сервисы для
  юридических и физических лиц, госрегистрация, контакты УФНС по Чеченской Республике.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-chechen-republic-sources-overview
  - /data-sources/regional/chechen-republic-minfin
  - /data-sources/federal/nalog-statistics
  - /data-sources/federal/analytic-nalog-gov-ru
  - /data-sources/regional/consolidated-budgets
  - /data-sources/regional/how-to-find-regional-data
---

# Чеченская Республика: УФНС России по Чеченской Республике

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Территориальный орган ФНС** по Чеченской Республике в составе **федеральной** витрины |
| Тип доступа | Публичный веб-портал |
| Основные форматы | HTML, вложенные формы и ссылки на **сервисы** ФНС |
| Оператор | УФНС России по Чеченской Республике (в рамках `nalog.gov.ru`) |
| Режим доступа | Открытый (отдельные сервисы — по регистрации) |

Коротко: **официальный** вход для **налогового** и **регистрационного** контура по субъекту; для **бюджетных** рядов доходов и расходов бюджета субъекта используйте **[Минфин ЧР](/data-sources/regional/chechen-republic-minfin)** и **[Росстат](/data-sources/regional/chechen-republic-rosstat)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — фокус на нормативке, сервисах и справочной информации УФНС |
| Машиночитаемость (`machine_readability`) | преимущественно HTML; машинные отчёты ФНС — через отдельные федеральные разделы и **[аналитические витрины](/data-sources/federal/analytic-nalog-gov-ru)** |
| Юридическая значимость (`legal_significance`) | официальный федеральный оператор в части полномочий ФНС |
| Задержка обновления (`update_lag`) | зависит от централизованных обновлений `nalog.gov.ru` |
| Глубина архива (`archive_depth`) | определяется политикой хранения материалов на портале ФНС |
| Лицензия (`license_or_terms`) | пользовательское соглашение и правила `nalog.gov.ru` |

## Описание

Поддомен **`rn20`** на `nalog.gov.ru` агрегирует **региональные** новости, **контакты** и переходы к **сервисам** ФНС, относящимся к Чеченской Республике. Корень `https://www.nalog.gov.ru/rn20/` (со **слешем**) используйте как **устойчивую** точку входа.

## Оператор

УФНС России по Чеченской Республике — канонический вход: https://www.nalog.gov.ru/rn20/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Региональный раздел ФНС (ЧР) | https://www.nalog.gov.ru/rn20/ | HTML |

## Объекты данных и показатели

- **Нормативные** разъяснения и **новости** территориального органа.
- **Сервисные** сценарии (запись, справки, электронные обращения) — по ссылкам с главной раздела.
- **Не** заменяет **бюджетную отчётность** субъекта.

## Периодичность обновления

Непрерывно по мере публикации материалов ФНС и УФНС.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "Mozilla/5.0" "https://www.nalog.gov.ru/rn20/"
```

## Связанные страницы wiki

- [Министерство финансов Чеченской Республики](/data-sources/regional/chechen-republic-minfin) — консолидированный бюджет субъекта и исполнение.
- [Статистика и аналитика (обзор ФНС)](/data-sources/federal/nalog-statistics) — федеральные статистические продукты ФНС.
- [Аналитический портал ФНС](/data-sources/federal/analytic-nalog-gov-ru) — смежные федеральные витрины.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — контекст сопоставления регионов.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.

## Не путать с

- **[Минфин ЧР](/data-sources/regional/chechen-republic-minfin)** — **бюджет** субъекта; **УФНС** — **налоги**, **сборы** и **госрегистрация** в полях ФНС.
