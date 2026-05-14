---
title: Работа с API budget.gov.ru
sidebar_label: Работа с API budget.gov.ru
tags:
  - howto
  - access
  - budget
last_updated: 2026-05-14T00:00:00.000Z
content_type: howto
entity_type: howto
description: >-
  Как программно обходить JSON-слой единого портала бюджетной системы:
  каталог наборов list.json, сборка URL meta.json из поля link, вход к
  описанию REST на витрине открытых данных; User-Agent, 404 на коротких
  путях и сверка с казначейскими отчётами.
related_pages:
  - /howto/automation/python-budget-api
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
  - /data-sources/federal/subsidy
  - /data-sources/federal/roskazna-reports
  - /howto/access/minfin-api
---

# Работа с API budget.gov.ru

## Зачем и для кого

Инструкция для **аналитиков и разработчиков**, которым нужен **официальный** JSON с единого портала бюджетной системы (**ГИИС «Электронный бюджет»**, `budget.gov.ru`): каталог открытых наборов, паспорта наборов и **документированные** REST-методы там, где их публикует оператор. Это **другой** контур, чем [открытые данные Минфина](/data-sources/federal/minfin-opendata): наборы, поля и методика сверяются по паспортам `budget.gov.ru`, а не по `minfin.gov.ru`.

## Входные данные

- **Каталог наборов** — канонический URL [https://budget.gov.ru/epbs/opendata/list.json](https://budget.gov.ru/epbs/opendata/list.json); в элементе `meta[]` есть `identifier`, `title`, `link` (часто относительный вид `null/<ID>/meta.json`).
- **Идентификатор набора** — строка `identifier` из каталога или с HTML-карточки набора в разделе открытых данных (например `7710568760-REGISTAGREEMENT` для реестра соглашений).
- **Паспорт набора** — JSON по адресу `https://budget.gov.ru/epbs/opendata/<identifier>/meta.json`, собранному из поля `link` (см. пример ниже).
- **Документация REST** — со страницы витрины: технический вход [https://budget.gov.ru/epbs/opendata/api](https://budget.gov.ru/epbs/opendata/api) редиректит в интерфейс с параметром `code=api`; «короткий» путь вида `https://budget.gov.ru/Развитие/API` на стороне портала **может отвечать 404** (см. [карточку источника](/data-sources/federal/budget-gov-ru-datasets)).
- **Зафиксируйте дату запроса и URL** — состав полей и ссылки обновляются независимо по наборам и версиям.

## Инструменты

- Браузер — для чтения описания методов на витрине открытых данных и условий использования наборов.
- **Python 3** с пакетом `requests` и стандартным `json` (достаточно для `list.json` и `meta.json`).
- При необходимости — **jq** или **pandas** после выбора конкретного файла данных из паспорта (CSV велик по объёму).

## Шаги

1. **Скачайте каталог** `list.json` по адресу на домене **`budget.gov.ru`** (см. [карточку источника](/data-sources/federal/budget-gov-ru-datasets)); для автоматических запросов задайте осмысленный **`User-Agent`** и таймаут порядка **60 с** — файл большой.
2. **Найдите набор** по `identifier` или по подстроке в `title` в массиве `meta`.
3. **Соберите URL паспорта** из поля `link`: отбросьте префикс `null/` и при необходимости склейте с базой `https://budget.gov.ru/epbs/opendata/` (если ссылка не абсолютная).
4. **Загрузите `meta.json`** паспорта — в нём версия, даты изменения и ссылки на файлы данных; дальнейшие шаги зависят от набора (REST по документации витрины или скачивание CSV по URL из паспорта).
5. **Для произвольных REST-эндпоинтов** ориентируйтесь на актуальное описание на витрине API портала: базовые пути и параметры **не зашивайте** из старых инструкций без проверки.

## Воспроизводимый пример

Каталог открытых наборов и паспорт набора `7710568760-REGISTAGREEMENT` (реестр соглашений):

```python
import json
from urllib.parse import urljoin

import requests

LIST_URL = "https://budget.gov.ru/epbs/opendata/list.json"
OPENDATA_BASE = "https://budget.gov.ru/epbs/opendata/"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; finguide-howto/1.0)"}


def link_to_meta_url(link: str) -> str:
    if link.startswith("http://") or link.startswith("https://"):
        return link
    return urljoin(OPENDATA_BASE, link.removeprefix("null/"))


def main():
    r = requests.get(LIST_URL, headers=HEADERS, timeout=120)
    r.raise_for_status()
    catalog = r.json()
    rows = catalog.get("meta", [])
    print("Наборов в каталоге:", len(rows))

    row = next(x for x in rows if x.get("identifier") == "7710568760-REGISTAGREEMENT")
    meta_url = link_to_meta_url(row["link"])
    print("Паспорт (URL):", meta_url)

    m = requests.get(meta_url, headers=HEADERS, timeout=60)
    m.raise_for_status()
    passport = m.json()
    print("identifier:", passport.get("identifier"))
    print("modified:", passport.get("modified"))
    print("title:", passport.get("title"))


if __name__ == "__main__":
    main()
```

## Проверка результата

- Убедитесь, что ответ на `list.json` — **объект JSON** с ключом `meta` (список), а не HTML-страница ограничения доступа: при HTML проверьте `User-Agent`, сеть и текст ответа.
- Сверьте **`identifier` в паспорте** с выбранной строкой каталога.
- Для показателей **исполнения** сопоставляйте смысл и методику с **[отчётностью и открытыми слоями Федерального казначейства](/data-sources/federal/roskazna-reports)** и **[отчётами об исполнении бюджетов](/data-sources/federal/otchety-ob-ispolnenii-byudzhetov)** — срезы портала не обязаны совпадать с казначейским фактом построчно.

## Ограничения и типовые ошибки

- **Короткие URL «Развитие/…»** на Liferay могут давать **404**; для стабильного машинного входа используйте **`/epbs/opendata/...`** из этой инструкции и [карточки источника](/data-sources/federal/budget-gov-ru-datasets).
- **Поле `link` с префиксом `null/`** — нормальная особенность каталога; URL паспорта нужно **нормализовать** относительно `https://budget.gov.ru/epbs/opendata/`.
- **Ограничения по частоте** и требования к заголовкам — уточняйте по документации витрины; не запускайте агрессивный параллельный обход без мониторинга ответов `429`/`5xx`.
- **Публичный слой не равен полной внутренней карточке** в ИС — выводы о полноте полей делайте по паспорту набора и сопутствующим НПА.
- **TLS и сеть** — в закрытых или фильтруемых средах запрос к `budget.gov.ru` может зависать на **рукопожатии** (`SSL handshake timeout`) или обрываться прокси; проверьте цепочку сертификатов, доступ «из браузера на той же машине» и при необходимости вынесите загрузку наружу CI. Пока сеть недоступна, логику сборки URL паспорта можно отладить на **встроенном фрагменте** каталога в **[Python: данные через API budget.gov.ru](/howto/automation/python-budget-api)**.
- Публичная загрузка **`swagger.json`** по известному пути на стороне портала иногда отдаёт **пустое тело**; опирайтесь на **HTML-витрину API** и актуальные примеры оператора, а не на зафиксированный файл без проверки.

## Связанные страницы

- [Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — каталог `list.json`, форматы и типичные сущности портала.
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — контекст системы, границы публикаций и ограничения витрины.
- [Реестр соглашений (субсидии и смежные документы)](/data-sources/federal/subsidy) — логика реестра и поля для стыковки с выгрузками `budget.gov.ru`.
- [Отчёты и материалы Федерального казначейства](/data-sources/federal/roskazna-reports) — сверка кассового факта и отчётности рядом с бюджетными срезами.
- [Открытые данные Минфина (каталог и паспорта)](/howto/access/minfin-api) — смежный федеральный каталог CSV/XML на `minfin.gov.ru`, если нужен не контур ГИИС.
