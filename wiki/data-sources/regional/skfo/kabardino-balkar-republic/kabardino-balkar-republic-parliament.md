---
title: 'Кабардино-Балкарская Республика: Парламент (parlament-kbr.ru)'
sidebar_label: Парламент КБР
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/kabardino-balkar-republic-parliament
source_url: 'https://parlament-kbr.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: html
description: >-
  Официальный сайт Парламента Кабардино-Балкарской Республики: законы о бюджете,
  отчёты об исполнении бюджета, проекты законов и повестка заседаний.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kabardino-balkar-republic-sources-overview
  - /data-sources/regional/kabardino-balkar-republic-parliament-laws-budget
  - /data-sources/regional/kabardino-balkar-republic-minfin
  - /data-sources/regional/kabardino-balkar-republic-accounting-chamber
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Кабардино-Балкарская Республика: Парламент (parlament-kbr.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Законодательный** орган субъекта РФ |
| Тип доступа | Официальный **веб-портал** парламента |
| Основные форматы | HTML и вложения (PDF/DOC — по документам) |
| Оператор | Парламент Кабардино-Балкарской Республики |
| Режим доступа | Открытый |

Коротко: **канонический** вход в **тексты** законов о бюджете, **отчёты** об исполнении и **проекты** законодательных актов республики; для **перечня** принятых законов с уклоном в бюджетный блок см. [отдельную страницу](/data-sources/regional/kabardino-balkar-republic-parliament-laws-budget).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты выкладки архивов по годам |
| Машиночитаемость (`machine_readability`) | HTML; структурированного **API** нет |
| Юридическая значимость (`legal_significance`) | официальный **законодательный** орган |
| Задержка обновления (`update_lag`) | привязана к **заседаниям** и сессиям |
| Глубина архива (`archive_depth`) | определяется разделами сайта |
| Лицензия (`license_or_terms`) | статус официальных текстов — по законодательству об НПА |

## Описание

Портал публикует **повестки**, **стенограммы** (если открыты), **решения** и **нормативные** акты. Для **связки** с исполнением и методикой бюджетного цикла используйте [Минфин КБР](/data-sources/regional/kabardino-balkar-republic-minfin); для **внешнего** контроля — [КСП КБР](/data-sources/regional/kabardino-balkar-republic-accounting-chamber).

## Оператор

Парламент Кабардино-Балкарской Республики — канонический вход: https://parlament-kbr.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница парламента | https://parlament-kbr.ru/ | HTML |

## Объекты данных и показатели

- **Законы** о республиканском бюджете и смежные акты.
- **Отчёты** об исполнении бюджета (как правило, ежегодные публикации).
- **Проекты** законов и **ход** рассмотрения.
- **Ключи связки** с другими источниками: **номер** закона, **финансовый год**, **КБК** (в приложениях к закону — при наличии в PDF).

## Периодичность обновления

В пики **бюджетной** сессии — часто; в межсессионный период — по мере публикаций.

## Примеры доступа

```bash
curl -fsS -o /dev/null -w "%{http_code}\n" --max-time 25 -A "Mozilla/5.0" "https://parlament-kbr.ru/"
```

## Связанные страницы wiki

- [Парламент КБР — законы (бюджетный след)](/data-sources/regional/kabardino-balkar-republic-parliament-laws-budget) — целевая выборка НПА.
- [Минфин КБР](/data-sources/regional/kabardino-balkar-republic-minfin) — исполнение и методические материалы.
- [Контрольно-счётная палата КБР](/data-sources/regional/kabardino-balkar-republic-accounting-chamber) — заключения по бюджету.
- [Сводная страница субъекта](/data-sources/regional/subject-kabardino-balkar-republic-sources-overview) — все источники по КБР в wiki.

## Не путать с

- **[Перечень законов (отдельная страница)](/data-sources/regional/kabardino-balkar-republic-parliament-laws-budget)** — узкий **список** с параметром `Page=`; главная карточка парламента описывает **портал целиком**.
