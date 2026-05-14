---
title: 'Python: данные через API budget.gov.ru'
sidebar_label: 'Python: каталог budget.gov.ru'
tags:
  - howto
  - automation
  - budget
last_updated: 2026-05-14T00:00:00.000Z
content_type: howto
entity_type: howto
description: >-
  Сборка URL паспорта набора из каталога list.json: поле link, префикс null/,
  User-Agent и таймауты; офлайн-фрагмент каталога для проверки логики без сети.
related_pages:
  - /howto/access/budget-gov-api
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
---

# Python: данные через API budget.gov.ru

## Назначение и аудитория

Для **разработчиков на Python**, которым нужен **минимальный рабочий скрипт** вокруг **`list.json`** единого портала бюджетной системы: найти набор, собрать URL **`meta.json`**, подготовить дальнейшее скачивание CSV или вызовы REST по паспорту. Полная инструкция с живым запросом — в **[Работа с API budget.gov.ru](/howto/access/budget-gov-api)**.

## Входные данные

- **Каталог наборов** — [https://budget.gov.ru/epbs/opendata/list.json](https://budget.gov.ru/epbs/opendata/list.json) (см. **[наборы ГИИС](/data-sources/federal/budget-gov-ru-datasets)**).
- **`identifier` набора** — например **`7710568760-REGISTAGREEMENT`** (реестр соглашений).
- **`User-Agent`** и **таймаут 120 с** для `list.json` — файл большой; при HTML вместо JSON см. раздел ограничений в **[how-to по API](/howto/access/budget-gov-api)**.

## Инструменты

- **Python 3.10+** с пакетом **`requests`** (или **`httpx`**) и **`json`**.
- **`urllib.parse.urljoin`** — для нормализации поля `link` с префиксом **`null/`**.

## Шаги

1. Выполните **`GET list.json`** с осмысленным **`User-Agent`** и достаточным таймаутом.
2. Найдите в массиве **`meta`** объект с нужным **`identifier`**.
3. Соберите абсолютный URL паспорта из поля **`link`** (отбросьте префикс **`null/`** при относительной ссылке).
4. Загрузите **`meta.json`** паспорта и продолжите по полям **`data`**, **`structure`** или по документации REST на витрине портала.
5. Зафиксируйте **`modified`** из паспорта в метаданных вашего снимка.

## Воспроизводимый пример

Ниже — **логика сборки URL** на **встроенном фрагменте** каталога (без сети). Замените строку **`CATALOG_JSON`** на результат живого **`GET`** к `list.json`, когда сеть доступна.

```python
import json
from urllib.parse import urljoin

CATALOG_JSON = r"""
{
  "meta": [
    {
      "identifier": "7710568760-REGISTAGREEMENT",
      "title": "Реестр соглашений (пример)",
      "link": "null/7710568760-REGISTAGREEMENT/meta.json"
    }
  ]
}
"""

OPENDATA_BASE = "https://budget.gov.ru/epbs/opendata/"


def link_to_meta_url(link: str) -> str:
    if link.startswith("http://") or link.startswith("https://"):
        return link
    if link.startswith("null/"):
        link = link[len("null/") :]
    return urljoin(OPENDATA_BASE, link)


catalog = json.loads(CATALOG_JSON)
row = next(x for x in catalog["meta"] if x["identifier"] == "7710568760-REGISTAGREEMENT")
meta_url = link_to_meta_url(row["link"])
print("Паспорт:", meta_url)
assert meta_url.startswith("https://budget.gov.ru/epbs/opendata/")
assert meta_url.endswith("meta.json")
```

Ожидаемый вывод содержит **`https://budget.gov.ru/epbs/opendata/7710568760-REGISTAGREEMENT/meta.json`**.

## Проверка результата

- **`meta_url`** начинается с **`https://budget.gov.ru/epbs/opendata/`** и заканчивается на **`meta.json`**.
- На живом каталоге длина массива **`meta`** совпадает с ожидаемым порядка **тысяч** позиций; при подозрении на HTML проверьте первые байты ответа.
- **`identifier`** в загруженном паспорте совпадает с выбранной строкой каталога.

## Ограничения и типовые ошибки

- **Сеть и TLS** — в корпоративных средах запрос к **`budget.gov.ru`** может зависать на **рукопожатии** (`SSL handshake timeout`) или обрываться прокси; проверьте цепочку сертификатов и доступ с той же машины из браузера. Полный сценарий с живым **`list.json`** — в **[Работа с API budget.gov.ru](/howto/access/budget-gov-api)**.
- **Поле `link` с `null/`** — нормальная особенность каталога; не склеивайте URL строковой конкатенацией без **`urljoin`**.
- **Короткие URL на Liferay** часто дают **404** — используйте только пути **`/epbs/opendata/...`** из официальной инструкции.
- **REST-эндпоинты** меняются — не копируйте старые пути без проверки витрины API.

## Связанные страницы

- **[Работа с API budget.gov.ru](/howto/access/budget-gov-api)** — полный сценарий с живым `list.json`.
- **[Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.
- **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.
