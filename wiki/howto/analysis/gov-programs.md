---
title: Анализ расходов по госпрограммам
sidebar_label: Расходы по госпрограммам
tags:
  - howto
  - analysis
  - programs
last_updated: 2026-05-14T00:00:00.000Z
content_type: howto
entity_type: howto
description: >-
  Маршрут: мониторинг ГАСУ (план/факт показателей), паспорта programs.gov.ru,
  бюджетные наборы ГИИС и КБК; учебная таблица показателей без доступа к API.
related_pages:
  - /data-sources/federal/gasu-programs
  - /information-systems/federal/gasu
  - /information-systems/federal/programs-gov
  - /data-sources/federal/budget-gov-ru-datasets
  - /reporting/state-program-reporting
  - /glossary/gov-programs
  - /glossary/national-projects
  - /howto/analysis/kbc-decoding
  - /howto/access/budget-gov-api
---

# Анализ расходов по госпрограммам

## Назначение и аудитория

Для **аналитиков программного финансирования**, которым нужно согласовать **целевые показатели и план/факт** мониторинга с **бюджетным исполнением** по **[КБК](/glossary/kbk)** и не смешать **разные витрины** (ГАСУ, ГИИС, Казначейство).

## Входные данные

- **Каталог открытых данных ГАСУ** — [https://gasu.gov.ru/opendata](https://gasu.gov.ru/opendata) (см. **[данные ГАСУ по программам](/data-sources/federal/gasu-programs)**); состав наборов и полей — по карточкам на дату выгрузки.
- **Паспорта и реестр госпрограмм** — **[programs.gov.ru](/information-systems/federal/programs-gov)** (цели, подпрограммы, объёмы по годам в модели портала).
- **Бюджетные открытые наборы** — **[budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)** и **[how-to по list.json](/howto/access/budget-gov-api)** для исполнения в классификационном разрезе.
- **Отчётность по госпрограммам** — **[отчётность по государственным программам РФ](/reporting/state-program-reporting)** — регламент и формы рядом с машиночитаемыми слоями.
- **Ключи стыковки** — как минимум **отчётный период**, **наименование или код показателя**, при необходимости **ведомство / ГРБС** и **КБК** из бюджетного контура.

## Инструменты

- **Python 3** (`csv`, `json`) или Excel — для табличных выгрузок после скачивания файлов из каталогов.
- Браузер — для проверки метаданных набора и единиц измерения на **gasu.gov.ru** и **programs.gov.ru**.

## Шаги

1. **Сформулируйте вопрос** — «динамика показателя программы», «сопоставление с кассой по КБК» или «паспорт vs мониторинг».
2. **Загрузите программный слой** из **[каталога ГАСУ](https://gasu.gov.ru/opendata)** (CSV/JSON по ссылкам из карточек наборов).
3. **Подтяните паспортные объёмы** с **[programs.gov.ru](/information-systems/federal/programs-gov)** для той же программы и горизонта лет.
4. **Подтяните бюджетный факт/план** из **[наборов ГИИС](/data-sources/federal/budget-gov-ru-datasets)** по согласованным **КБК и периоду** (см. **[расшифровку КБК](/howto/analysis/kbc-decoding)**).
5. **Соединяйте витрины** только по **явным** ключам (период, показатель, код); не делайте склейку «по похожему названию» без ручной выборки.
6. **Зафиксируйте версии** файлов и даты публикации в отчёте.

## Воспроизводимый пример

Учебная таблица **план/факт** по двум показателям имитирует выгрузку мониторинга; в бою замените строки на CSV из **[каталога ГАСУ](https://gasu.gov.ru/opendata)** после выбора набора.

```python
import csv
import io

CSV_TEXT = """indicator,year,plan_mln,fact_mln
roads_km,2024,100.0,95.0
hospital_beds,2024,500.0,520.0
"""

rows = list(csv.DictReader(io.StringIO(CSV_TEXT)))
for row in rows:
    plan = float(row["plan_mln"])
    fact = float(row["fact_mln"])
    rel = fact / plan - 1.0 if plan else float("nan")
    print(row["indicator"], row["year"], "выполнение к плану, %:", round(rel * 100, 2))
```

Ожидаемо: для **`roads_km`** выводится **-5.0%**, для **`hospital_beds`** — **+4.0%**.

## Проверка результата

- Для учебного CSV число строк после разбора — **2**.
- Доли **факт/план** согласованы с ручным расчётом для каждой строки.
- На реальных данных — выборочная сверка одного показателя с **HTML-карточкой** на `gasu.gov.ru` или с паспортом на **programs.gov.ru** за тот же год.

## Ограничения и типовые ошибки

- **ГАСУ ≠ ГИИС** — поля и агрегирование различаются; нет универсального ID «госпрограмма» во всех таблицах (см. **[государственные программы](/glossary/gov-programs)**).
- **План/факт в ГАСУ** не заменяет **[формы казначейского исполнения](/data-sources/federal/roskazna-reports)** без методики.
- **SSL и доступность** порталов зависят от среды; для пайплайнов закладывайте **повторы**, мониторинг ответов и кеш.
- **Национальные проекты** и госпрограммы **пересекаются** по содержанию — не смешивайте уровни без явного признака в данных (**[нацпроекты](/glossary/national-projects)**).

## Связанные страницы

- **[Данные ГАСУ — госпрограммы и нацпроекты](/data-sources/federal/gasu-programs)**.
- **[ГАС «Управление»](/information-systems/federal/gasu)**.
- **[programs.gov.ru](/information-systems/federal/programs-gov)**.
- **[Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** и **[работа с API budget.gov.ru](/howto/access/budget-gov-api)**.
- **[Отчётность по государственным программам РФ](/reporting/state-program-reporting)**.
