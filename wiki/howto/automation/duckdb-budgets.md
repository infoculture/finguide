---
title: 'DuckDB: аналитика бюджетных данных'
sidebar_label: 'DuckDB: аналитика бюджетных данных'
tags:
  - howto
  - automation
  - budget
last_updated: 2026-05-14T00:00:00.000Z
content_type: howto
entity_type: howto
description: >-
  Локальный SQL к CSV без сервера БД: read_csv_auto, агрегация по региону;
  учебный файл и pip install duckdb.
related_pages:
  - /data-sources/federal/budget-gov-ru-datasets
  - /howto/automation/pandas-kbc
  - /howto/automation/data-quality
  - /howto/analysis/budget-execution
---

# DuckDB: аналитика бюджетных данных

## Назначение и аудитория

Для **аналитиков**, которым нужен **SQL** к большим **CSV/Parquet** выгрузкам бюджета **без развёртывания** СУБД: один файл DuckDB или режим in-process в Python.

## Входные данные

- **Файлы** — CSV/Parquet из **[наборов ГИИС](/data-sources/federal/budget-gov-ru-datasets)**, **[Минфина](/data-sources/federal/minfin-opendata)** или **[Казначейства](/data-sources/federal/roskazna-reports)**; кодировка и разделитель — по первым строкам файла или паспорту набора.
- **Схема** — имена колонок и типы; для «грязных» CSV используйте **`read_csv_auto`** с последующим **`CAST`**.
- **Установка** — пакет **`duckdb`** для Python: `python3 -m pip install duckdb` (версия в примере не фиксируется жёстко).

## Инструменты

- **Python 3** и **`duckdb`**.
- Опционально **CLI `duckdb`** — те же SQL в интерактивном режиме.

## Шаги

1. **Положите выгрузку** в каталог проекта или укажите абсолютный путь.
2. **Подключитесь** `duckdb.connect()` (файл БД) или без аргумента для чисто in-memory сессии.
3. **Прочитайте** `read_csv_auto('…')` / `read_parquet('…')` в **`FROM`**.
4. **Выполните SQL** — фильтры, `GROUP BY`, оконные функции при необходимости.
5. **Сохраните результат** — `COPY (SELECT …) TO 'out.parquet' (FORMAT PARQUET)` или выгрузка в CSV.

## Воспроизводимый пример

Учебный **CSV** записывается во временный файл, затем **агрегация** по региону:

```python
import os
import tempfile

import duckdb

csv_text = "region,amount\nmsk,100\nspb,200\nmsk,50\n"

fd, path = tempfile.mkstemp(suffix=".csv")
os.write(fd, csv_text.encode("utf-8"))
os.close(fd)

try:
    con = duckdb.connect()
    rows = con.sql(
        f"""
        SELECT region, sum(amount)::DOUBLE AS total
        FROM read_csv_auto('{path}')
        GROUP BY 1
        ORDER BY 1
        """
    ).fetchall()
    print(rows)
finally:
    os.unlink(path)
```

Ожидаемый вывод: **`[('msk', 150.0), ('spb', 200.0)]`**.

## Проверка результата

- Число строк в результате — **2**; сумма по **msk** равна **150.0**.
- На реальном файле — сравните **`sum(amount)`** с контрольной суммой из паспорта набора или с **`COUNT(*)`** после фильтра.
- При чтении **UTF-8 с BOM** проверьте первую колонку на артефакт имени.

## Ограничения и типовые ошибки

- **`read_csv_auto`** может ошибиться в типах; для денег и **КБК** часто безопаснее читать как **`VARCHAR`** и нормализовать (см. **[pandas: КБК](/howto/automation/pandas-kbc)**).
- **Пути Windows** — экранируйте обратные слэши или используйте **сырые** строки/`pathlib`.
- **Параллельные записи** в один файл DuckDB на сетевой ФС — избегайте; для пайплайнов — **один писатель** на файл.
- DuckDB **не заменяет** контроль качества на входе — см. **[контроль качества данных](/howto/automation/data-quality)**.

## Связанные страницы

- **[Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.
- **[pandas: КБК](/howto/automation/pandas-kbc)** и **[контроль качества данных](/howto/automation/data-quality)**.
- **[Анализ исполнения бюджета](/howto/analysis/budget-execution)**.
