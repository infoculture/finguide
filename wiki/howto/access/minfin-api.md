---
title: Открытые данные Минфина (каталог и паспорта)
sidebar_label: Открытые данные Минфина
tags:
  - howto
  - access
  - budget
last_updated: 2026-05-12T00:00:00.000Z
content_type: howto
entity_type: howto
description: >-
  Как программно обойти каталог открытых данных Минфина: сводный list.csv,
  паспорт meta.csv набора, выбор файла данных; User-Agent, кодировки и
  сверка с ГИИС и Казначейством.
related_pages:
  - /data-sources/federal/minfin-opendata
  - /information-systems/federal/minfinsite
  - /organizations/minfin
  - /data-sources/federal/budget-gov-ru-datasets
---

# Открытые данные Минфина (каталог и паспорта)

## Зачем и для кого

Инструкция для **аналитиков и разработчиков**, которым нужны **официальные** CSV/XML-наборы Минфина (КБК, долг, ФНБ, роспись, региональные своды и др.) **без ручного** копирования с HTML-карточек. Единого REST API всего каталога нет: машинный вход — это **сводный реестр** `list.csv`, **паспорт** каждого набора (`meta.csv`) и **прямые ссылки** на файлы данных из паспорта.

## Входные данные

- **Сводный перечень наборов** — URL [https://minfin.gov.ru/opendata/list.csv](https://minfin.gov.ru/opendata/list.csv); в CSV колонки `property` (идентификатор вида `7710168360-…`), `title`, `value` (URL паспорта `meta.csv`), `format`.
- **Идентификатор набора** — строка из `property` или из HTML-каталога [https://minfin.gov.ru/ru/opendata/](https://minfin.gov.ru/ru/opendata/).
- **Паспорт** — файл `meta.csv` по ссылке из поля `value`; внутри пары `property` / `value` с метаданными и строками вида `structure-…` / `data-…` со **ссылками на файлы данных**.
- **Зафиксируйте дату выгрузки и URL** — паспорта и состав полей обновляются независимо по наборам.

## Инструменты

- Браузер — для поиска набора по смыслу и чтения условий использования ([типовой PDF](https://minfin.gov.ru/opendata/conditions.pdf)).
- **Python 3** с пакетом `requests` и стандартным модулем `csv` (достаточно для `list.csv` и `meta.csv`).
- При необходимости — **pandas** для табличных CSV после того, как выбран конкретный файл данных (разделитель и кодировка смотрите в паспорте и по первым строкам файла).

## Шаги

1. **Скачайте актуальный `list.csv`** по каноническому адресу на домене **`minfin.gov.ru`** (см. [карточку источника](/data-sources/federal/minfin-opendata)); при автоматических запросах используйте осмысленный **`User-Agent`** — иначе вместо CSV может вернуться HTML-страница ограничения доступа.
2. **Отфильтруйте строки** с `property`, начинающимся с `7710168360` — это строки наборов (первая служебная строка с `standardversion` отбрасывается).
3. **Найдите нужный набор** по `property` или по подстроке в `title` (кириллица в кавычках в CSV).
4. **Загрузите паспорт** по URL из колонки `value`, разберите его как CSV с заголовком `property,value`.
5. **Выберите файл данных** — ключи вида `structure-…` / `data-…` указывают на актуальные или архивные выгрузки; ориентируйтесь на **дату в имени ключа** и на поля `modified` / описание в паспорте.
6. **Скачайте файл данных** по URL из паспорта; домен в ссылке может быть **`minfin.ru`** при том же пути — это нормально для витрины, проверяйте актуальность URL в **текущем** паспорте.

## Воспроизводимый пример

Сводный реестр, паспорт набора «внутренний долг» и пример ссылки на один из файлов `structure-*.csv`:

```python
import csv
import io

import requests

LIST_URL = "https://minfin.gov.ru/opendata/list.csv"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; budget-open-data/1.0)"}


def get_text(url):
    resp = requests.get(url, headers=HEADERS, timeout=30)
    resp.raise_for_status()
    resp.encoding = resp.apparent_encoding or resp.encoding or "utf-8"
    return resp.text


def rows_from_list_csv(text):
    reader = csv.DictReader(io.StringIO(text))
    return [r for r in reader if r.get("property", "").startswith("7710168360")]


def meta_as_dict(meta_url):
    text = get_text(meta_url)
    reader = csv.DictReader(io.StringIO(text))
    return {row["property"]: row["value"] for row in reader}


text = get_text(LIST_URL)
registry = rows_from_list_csv(text)
print("Наборов в list.csv:", len(registry))

row = next(r for r in registry if r["property"] == "7710168360-DomesticDebt")
meta = meta_as_dict(row["value"])
print("Паспорт:", meta.get("identifier"), "| modified:", meta.get("modified"))

structure_keys = sorted(
    k for k, v in meta.items() if k.startswith("structure-") and v.endswith(".csv")
)
latest_key = structure_keys[-1]
print("Выбран structure-ключ:", latest_key)
print("URL данных:", meta[latest_key])
```

## Проверка результата

- Убедитесь, что ответ на `list.csv` — **CSV**, а не HTML: при HTML проверьте `User-Agent`, сеть и текст страницы.
- Сверьте **`identifier` в паспорте** с выбранной строкой `list.csv`.
- Сопоставьте показатели с **[ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** и **[отчётностью Казначейства](/data-sources/federal/roskazna-reports)**, если речь о **кассовом исполнении** — наборы Минфина часто **плановые** или **сводные** с иной методикой (см. [карточку источника](/data-sources/federal/minfin-opendata)).

## Ограничения и типовые ошибки

- **WAF и пустой или HTML-ответ:** добавьте заголовок **`User-Agent`**; не полагайте на «голый» `curl`/скрипт с дефолтным агентом в продакшене без мониторинга.
- **Регистр пути:** в ссылках встречаются и `/opendata/`, и `/OpenData/` — ориентируйтесь на URL из **актуального** `list.csv` и паспорта.
- **Домен `minfin.ru` в файлах данных** при паспорте на `minfin.gov.ru` — не ошибка; всё равно берите ссылки только из опубликованного паспорта.
- **Нет единого JSON API каталога** в смысле ГИИС: обходите цепочку `list.csv` → `meta.csv` → файл данных или используйте **[API budget.gov.ru](/howto/access/budget-gov-api)** для смежных срезов исполнения.

## Связанные страницы

- [Открытые данные Минфина России](/data-sources/federal/minfin-opendata) — полное описание реестра, форматов и перекрёстных сверок.
- [Сайт Министерства финансов РФ](/information-systems/federal/minfinsite) — портал, ограничения и контекст публикаций.
- [Минфин России](/organizations/minfin) — оператор витрины.
- [Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — смежный каталог и API на `budget.gov.ru`.
- [Работа с API budget.gov.ru](/howto/access/budget-gov-api) — когда удобнее REST портала «Электронного бюджета».
