---
title: REST API Clearspending.ru и sub.clearspending.ru
sidebar_label: API Clearspending
tags:
  - howto
  - access
  - procurement
  - civil
last_updated: 2026-05-12T00:00:00.000Z
content_type: howto
entity_type: howto
description: >-
  Как вызывать публичное REST API закупочного контура (openapi.clearspending.ru,
  v3) и API федеральных субсидий (api.sub.clearspending.ru): get/search/select по
  контрактам, пагинация, субсидии по ИНН получателя и ссылки на первоисточник ЕИС.
related_pages:
  - /data-sources/civil/clearspending
  - /information-systems/civil/clearspending
  - /data-sources/federal/zakupki-xml
  - /data-sources/federal/procurement
  - /howto/analysis/ngo-funding
---

# REST API Clearspending.ru и sub.clearspending.ru

## Назначение и аудитория

Инструкция для **разработчиков и аналитиков**, которым нужен **воспроизводимый JSON-доступ** к нормализованным сведениям о **закупках и контрактах** (и при необходимости к **федеральным субсидиям**) без сборки **FTP/XML ЕИС**. Официальная человекочитаемая витрина и часть ссылок живут на **clearspending.ru**; **машинный** контур закупок по состоянию на практику проекта — префикс **`https://openapi.clearspending.ru/restapi/v3/`** (версия **v3**). Подробные перечни полей и соседние сущности (гранты, топы, статистика) описаны в вики репозитория примеров проекта.

## Входные данные

- **Регистрационный номер контракта** (`regnum`) или внутренний **`id`** контракта в логике API — для точечного `contracts/get`.
- **ИНН/КПП заказчика или поставщика**, **регион заказчика** (числовой код), **диапазон дат подписания** (`dd.mm.yyyy-dd.mm.yyyy`), **диапазон цены**, **ОКПД/ОКДП**, **`fz`** (например, **44** или **223**) — для `contracts/search` и `contracts/select`.
- **ИНН получателя** и номер **страницы** — для выборки **`https://api.sub.clearspending.ru/v1/subsidy/`** (параметры вроде `receiver_inn`, `page`; точные имена полей ответа сверяйте с актуальной схемой).
- **Базовые URL для фиксации в коде:**
  - закупки: `https://openapi.clearspending.ru/restapi/v3/`
  - субсидии (отдельный хост): `https://api.sub.clearspending.ru/v1/`

## Инструменты

- **Python 3** и **`requests`** (или любой HTTP-клиент) для GET-запросов к JSON API.
- **Браузер** — для чтения [страницы открытых данных](https://clearspending.ru/opendata/) и [вики с описанием полей](https://github.com/clearspending/clearspending-examples/wiki) (часть страниц на **clearspending.ru** может отдавать защиту **Anubis** без полноценного браузера — на работу **`openapi.clearspending.ru`** это обычно не распространяется).
- При массовых загрузках — учёт **пагинации** и осмысленный **`User-Agent`**.

## Шаги

1. **Определите сущность**: контракт по номеру, выборка по заказчику/поставщику или **субсидии по ИНН** — разные базовые URL и пути.
2. **Для одного контракта** вызовите `GET .../contracts/get/?regnum=<номер>` или `...&id=<uuid>`; разберите JSON: обычно оболочка `contracts` с полями `total`, `page`, `perpage`, `data`.
3. **Для поиска** используйте `.../contracts/search/` с фильтрами (например `customerinn`, `supplierinn`, `daterange`, `customerregion`, `fz`, полнотекст **`productsearch`**) и пагинацией: **`perpage` не больше 50**, **`page`** с единицы; у полнотекстового поиска действует **лимит на число записей в выдаче** (в сторонних описаниях API фигурирует порядок **500** — уточняйте по фактическому `total` и документации).
4. **Для выборок с отраслевыми/прочими фильтрами** при необходимости используйте `.../contracts/select/` (набор параметров близок к `search`, см. вики проекта).
5. **Для заказчиков и поставщиков** по аналогии существуют пути вида `.../customers/search/` и `.../suppliers/search/` (параметры вроде **`inn`** — сверяйте с [вики](https://github.com/clearspending/clearspending-examples/wiki)).
6. **Для субсидий** запрашивайте `GET https://api.sub.clearspending.ru/v1/subsidy/?receiver_inn=<ИНН>&page=<N>`; обходите страницы, пока не получите все элементы (в ответе обычно есть **`count`**, **`total`**, массив **`items`**).
7. **Сверка с первоисточником**: для юридически значимой даты и полного комплекта документов используйте **[ЕИС](/information-systems/federal/zakupki)** и при необходимости **[XML-выгрузки](/data-sources/federal/zakupki-xml)**.

## Воспроизводимый пример

Минимально проверяемые **GET**-запросы: один контракт по `regnum` и первая страница поиска по ИНН заказчика (подставьте свои значения).

```python
import json

import requests

BASE = "https://openapi.clearspending.ru/restapi/v3"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; procurement-research/1.0)"}


def get_contract_by_regnum(regnum: str) -> dict:
    url = f"{BASE}/contracts/get/"
    r = requests.get(url, params={"regnum": regnum}, headers=HEADERS, timeout=60)
    r.raise_for_status()
    return r.json()


def search_contracts_by_customer_inn(inn: str, perpage: int = 5, page: int = 1) -> dict:
    url = f"{BASE}/contracts/search/"
    params = {"customerinn": inn, "perpage": perpage, "page": page}
    r = requests.get(url, params=params, headers=HEADERS, timeout=60)
    r.raise_for_status()
    return r.json()


def subsidy_page(receiver_inn: str, page: int = 1) -> dict:
    url = "https://api.sub.clearspending.ru/v1/subsidy/"
    r = requests.get(
        url,
        params={"receiver_inn": receiver_inn, "page": page},
        headers=HEADERS,
        timeout=60,
    )
    r.raise_for_status()
    return r.json()


# Пример: известный regnum из документации API (замените на актуальный для вашей задачи)
sample = get_contract_by_regnum("0173100000414000011")
block = sample.get("contracts") or sample
print("get keys:", block.keys())
if block.get("data"):
    print("первый контракт (фрагмент):", json.dumps(block["data"][0], ensure_ascii=False)[:400])

# Пример поиска (ИНН заказчика — замените)
found = search_contracts_by_customer_inn("7707083893", perpage=2, page=1)
c = found.get("contracts") or found
print("search total:", c.get("total"), "page:", c.get("page"))

# Субсидии по ИНН получателя (тот же ИНН только для демонстрации вызова)
sub = subsidy_page("7707083893", page=1)
print("subsidy keys:", sub.keys(), "count:", sub.get("count"), "total:", sub.get("total"))
```

## Проверка результата

- Ответ должен быть **JSON** с ожидаемой оболочкой (`contracts` / `customers` и т.д.); при **HTML** с текстом про бота — вы попали на **Anubis** веб-витрины, а не на `openapi.*` (смените URL или способ доступа к документации).
- Для **`contracts/get`**: `total` в блоке контрактов **≥ 1** и в `data` есть запись с нужным `regnum` (или эквивалентным полем в схеме).
- Для **поиска**: `total` соответствует ожиданиям по масштабу; при **`perpage`=50** последняя страница даёт меньше записей или `page * perpage >= total`.
- **Смысловая проверка**: сопоставьте сумму/реквизиты с карточкой в **[ЕИС](/information-systems/federal/zakupki)** (портал `zakupki.gov.ru`) для выборочных строк.

## Ограничения и типовые ошибки

- **Не официальный реестр**: Clearspending — производный слой поверх публикаций **ЕИС**; возможны **задержки**, отличия полей и фильтрация — см. **[карточку источника](/data-sources/civil/clearspending)**.
- **Смешение 44-ФЗ и 223-ФЗ**: в одном потоке данных закупок; всегда смотрите **`fz`** и реквизиты процедуры при агрегировании.
- **Пустой или ошибочный `search`**: часть комбинаций параметров может давать **5xx** или пустую выдачу — сузьте фильтр, проверьте формат **`daterange`** (`dd.mm.yyyy-dd.mm.yyyy`).
- **Субсидии**: хост **`api.sub.clearspending.ru`** и схема полей **независимы** от закупочного `openapi.*`; для правового статуса соглашения используйте **[официальные реестры субсидий](/data-sources/federal/subsidy)**.
- **HTTPS**: в примерах из старых вики иногда указан `http://` — для кода используйте **`https://`**.

## Связанные страницы

- [Clearspending.ru (источник данных)](/data-sources/civil/clearspending) — форматы, ограничения, ссылки на витрины.
- [Clearspending.ru (информационная система)](/information-systems/civil/clearspending) — роль сервиса относительно **ЕИС**.
- [XML-выгрузки ЕИС Закупки](/data-sources/federal/zakupki-xml) — «сырой» канал при необходимости полного XML.
- [Сведения о закупках и контрактах](/data-sources/federal/procurement) — контекст 44/223 и идентификаторы.
- [Анализ финансирования НКО](/howto/analysis/ngo-funding) — цепочка с **`receivers.json`** и API субсидий по **ИНН**.
- [Описание API (вики примеров Clearspending)](https://github.com/clearspending/clearspending-examples/wiki) — перечни полей по контрактам, грантам, заказчикам, поставщикам, топам и статистике.
