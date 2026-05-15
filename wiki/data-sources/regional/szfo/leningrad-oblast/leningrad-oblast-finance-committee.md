---
title: "Ленинградская область: Комитет финансов"
sidebar_label: Комитет финансов ЛО
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/leningrad-oblast-finance-committee
source_url: "https://finance.lenobl.ru/ru/work/byudzhetnaya-politika/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
  - xlsx
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML и вложения (PDF/XLSX по разделам); открытый API не заявлен
description: >-
  Официальный сайт Комитета финансов Ленинградской области: бюджетная политика, проекты и отчёты
  об исполнении областного бюджета, финансовая отчётность и нормативные материалы финансового блока.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-leningrad-oblast-sources-overview
  - /data-sources/regional/leningrad-oblast-open-budget
  - /data-sources/regional/leningrad-oblast-legislative-assembly
  - /data-sources/regional/leningrad-oblast-regional-npa-portal
  - /data-sources/federal/budget-gov-ru-datasets
---

# Ленинградская область: Комитет финансов

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** финансовый орган **исполнительной власти** субъекта |
| Тип доступа | Публичный **веб-портал** |
| Основные форматы | **HTML**; **PDF/XLSX** как **вложения** в разделах отчётности |
| Оператор | **Комитет финансов Ленинградской области** |
| Режим доступа | Открытое чтение публичных разделов |

Коротко: **ключевой** вход к **материалам** областного бюджета со стороны **правительства**: **бюджетная политика**, **отчёты об исполнении**, методические документы. Для **гражданской** визуализации см. **[Открытый бюджет](/data-sources/regional/leningrad-oblast-open-budget)**; для **законов** — **[Законодательное собрание](/data-sources/regional/leningrad-oblast-legislative-assembly)** и **[банк НПА](/data-sources/regional/leningrad-oblast-regional-npa-portal)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — публичные разделы **не** равны полному **внутреннему** учёту |
| Машиночитаемость (`machine_readability`) | **смешанный** доступ: **веб** + файлы; **единого** каталога **API** нет |
| Юридическая значимость (`legal_significance`) | **официальный** сайт органа субъекта |
| Задержка обновления (`update_lag`) | зависит от **сроков** утверждения отчётов и **регламентов** раскрытия |
| Глубина архива (`archive_depth`) | определяется ведением разделов **«Архив»**/**«Документы»** |
| Лицензия (`license_or_terms`) | см. сайт оператора |

## Описание

**finance.lenobl.ru** — **центральный** ресурс **финансового блока** области: **бюджетные** циклы, **государственные** программы (в части раскрытия на сайте), **отчётность**. **Канонический** пример входа для аналитика — раздел **«Бюджетная политика»** (с **завершающим** слэшем в URL).

## Оператор

**Комитет финансов Ленинградской области** — канонический вход (редирект с URL без слэша): https://finance.lenobl.ru/ru/work/byudzhetnaya-politika/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Раздел «Бюджетная политика» | https://finance.lenobl.ru/ru/work/byudzhetnaya-politika/ | HTML |
| Корень сайта Комитета | https://finance.lenobl.ru/ | HTML |

## Объекты данных и показатели

- **Проекты** и **утверждённые** материалы бюджетного цикла (в объёме раскрытия на портале).
- **Отчёты** об исполнении областного бюджета (**табличные** вложения — по наличию).
- **Не** является **казначейским** реестром **платежей** (см. **[Росказна](/data-sources/regional/leningrad-oblast-roskazna)** и федеральные витрины).

## Периодичность обновления

**Пиковая** нагрузка обновлений — **весна** (утверждение отчёта об исполнении) и **осень** (проект/утверждение бюджета); **уточнения** — по мере **постановлений**.

## Ограничения и особенности

- Сайт использует **защитный** фронт; для **скриптов** задавайте **корректный** `User-Agent` и **не** создавайте избыточную нагрузку.
- **Сопоставление** с **[наборами «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets)** требует внимания к **версиям** классификаторов и **году**.

## Примеры доступа

```bash
curl -fsSL --connect-timeout 20 -A "Mozilla/5.0 (compatible; finguide-check/1.0)" -o /dev/null -w "%{http_code}\n" \
  "https://finance.lenobl.ru/ru/work/byudzhetnaya-politika/"
```

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-leningrad-oblast-sources-overview).
- [Открытый бюджет Ленинградской области](/data-sources/regional/leningrad-oblast-open-budget) — гражданская витрина показателей.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные машиночитаемые ряды для сверки.
