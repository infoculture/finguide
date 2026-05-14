---
title: Анализ государственного долга
sidebar_label: Анализ государственного долга
tags:
  - howto
  - analysis
  - budget
  - macro
last_updated: 2026-05-14T00:00:00.000Z
content_type: howto
entity_type: howto
description: >-
  Маршрут аналитика: ряды Минфина по внутреннему и внешнему долгу из открытых
  данных, своды по субъектам и МО, сверка с казначейскими книгами и
  отчётностью; воспроизводимый запрос к паспорту набора «внутренний долг».
related_pages:
  - /data-sources/federal/minfin-opendata
  - /howto/access/minfin-api
  - /data-sources/federal/minfin-debt-constituent-entities
  - /data-sources/federal/roskazna-reports
  - /reporting/public-debt-reporting
  - /glossary/forms-of-state-debt
  - /glossary/state-debt-register
  - /organizations/minfin
---

# Анализ государственного долга

## Назначение и аудитория

Для **аналитиков макропоказателей и долговой устойчивости**, которым нужны **официальные ряды** по федеральному долгу и **своды по субъектам/МО**, с возможностью сверить агрегаты с **регламентированным контуром** (долговые книги, отчётность) без подмены определений показателей.

## Входные данные

- **Каталог открытых данных Минфина** — [https://minfin.gov.ru/opendata/list.csv](https://minfin.gov.ru/opendata/list.csv); наборы по долгу имеют идентификаторы вида `7710168360-…` (см. [открытые данные Минфина](/data-sources/federal/minfin-opendata)).
- **Паспорт набора** — `meta.csv` по ссылке из `list.csv`; внутри — ключи `structure-…` / `data-…` с URL файлов показателей.
- **Субнациональные своды** — таблицы **XLSX** на странице [«Объём и структура государственного долга субъектов …»](https://minfin.gov.ru/ru/statistics/gov_debt/debt_constituent_entities/) (карточка **[Минфин: долг субъектов и МО](/data-sources/federal/minfin-debt-constituent-entities)**).
- **Макроконтекст** — **ВВП**, доходы бюджета: **[Росстат](/organizations/rosstat)**, **[открытые данные Минфина](/data-sources/federal/minfin-opendata)**; единицы измерения и база года согласуйте по методике каждого набора.
- **Учётный след** — **[отчёты и материалы Казначейства](/data-sources/federal/roskazna-reports)**, **[отчётность по долгу](/reporting/public-debt-reporting)** — для построчной логики, не дублирующей агрегаты Минфина.

## Инструменты

- **Python 3** с `requests` и `csv` (как в **[how-to по каталогу Минфина](/howto/access/minfin-api)**); далее **pandas** для временных рядов после выбора конкретного CSV.
- **Excel/LibreOffice** — для разового просмотра **XLSX** по субъектам.
- Осмысленный **`User-Agent`** при HTTP-запросах к `minfin.gov.ru`.

## Шаги

1. **Зафиксируйте уровень** — федеральный долг РФ, субнациональный агрегат или муниципальный контур; не смешивайте определения в одном ряду.
2. **Загрузите `list.csv`**, найдите наборы по ключевым словам в `title` или по известным идентификаторам (например **внутренний долг** — `7710168360-DomesticDebt`).
3. **Разберите паспорт** `meta.csv`, выберите актуальный файл `structure-…` / `data-…` по дате в имени ключа и по полю `modified`.
4. **Постройте ряды** — приведите даты к типу даты, проверьте единицы (млн руб. / руб. в зависимости от файла).
5. **Добавьте знаменатель** — ВВП или номинальный бюджет только из **согласованного** источника и той же методики периода.
6. **Сверьте смысл** с **[формами долга](/glossary/forms-of-state-debt)** и **[долговой книгой](/glossary/state-debt-register)** там, где сравнение уместно по методике.

## Воспроизводимый пример

Минимальный сценарий: найти набор **«Внутренний долг»** в `list.csv`, открыть паспорт и вывести **URL последнего** `structure-*.csv` (как ориентир для скачивания ряда). Полный разбор каталога — в **[Открытые данные Минфина (каталог и паспорта)](/howto/access/minfin-api)**.

```python
import csv
import io

import requests

LIST_URL = "https://minfin.gov.ru/opendata/list.csv"
DATASET_ID = "7710168360-DomesticDebt"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; finguide-howto/1.0)"}


def get_text(url: str) -> str:
    resp = requests.get(url, headers=HEADERS, timeout=60)
    resp.raise_for_status()
    resp.encoding = resp.apparent_encoding or resp.encoding or "utf-8"
    return resp.text


def rows_from_list_csv(text: str) -> list[dict[str, str]]:
    reader = csv.DictReader(io.StringIO(text))
    return [r for r in reader if r.get("property", "").startswith("7710168360")]


def meta_as_dict(meta_url: str) -> dict[str, str]:
    text = get_text(meta_url)
    reader = csv.DictReader(io.StringIO(text))
    return {row["property"]: row["value"] for row in reader}


text = get_text(LIST_URL)
registry = rows_from_list_csv(text)
row = next(r for r in registry if r["property"] == DATASET_ID)
meta = meta_as_dict(row["value"])
structure_keys = sorted(
    k for k, v in meta.items() if k.startswith("structure-") and v.endswith(".csv")
)
print("identifier:", meta.get("identifier"))
print("modified:", meta.get("modified"))
print("structure keys:", len(structure_keys))
print("latest structure URL:", meta[structure_keys[-1]])
```

## Проверка результата

- Ответ на `list.csv` — **CSV с заголовком**, а не HTML-страница ограничения доступа.
- В паспорте присутствует **`identifier`**, совпадающий с выбранной строкой каталога (`7710168360-DomesticDebt`).
- Хотя бы один **URL `structure-*.csv`** непустой; после скачивания файла — sanity-check чисел (порядок величины, отсутствие только нулей в ключевых столбцах).

## Ограничения и типовые ошибки

- **Разные каналы** — агрегаты в XLSX на сайте Минфина и строки в **[каталоге opendata](/data-sources/federal/minfin-opendata)** **не обязаны** совпадать построчно; сверяйте определение показателя и дату.
- **Курс и валюта** — для внешнего долга используйте набор **`7710168360-ExternalDebt`** и поля паспорта, не смешивайте с внутренним без явной методики.
- **Субнациональные XLSX** — это **не** замена долговых книг; для регламентированного учёта см. **[Казначейство](/data-sources/federal/roskazna-reports)**.
- Без **`User-Agent`** `minfin.gov.ru` может отдать HTML вместо CSV.

## Связанные страницы

- **[Открытые данные Минфина России](/data-sources/federal/minfin-opendata)** — реестр наборов.
- **[Открытые данные Минфина (каталог и паспорта)](/howto/access/minfin-api)** — общий алгоритм `list.csv` → `meta.csv` → данные.
- **[Минфин: долг субъектов и МО](/data-sources/federal/minfin-debt-constituent-entities)** — XLSX-своды.
- **[Отчётность по долгу](/reporting/public-debt-reporting)** и **[отчёты Казначейства](/data-sources/federal/roskazna-reports)** — смежный регламентированный контур.
