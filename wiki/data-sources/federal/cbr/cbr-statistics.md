---
title: Статистика Банка России
sidebar_label: Статистика Банка России
tags:
  - data-source
  - federal
  - statistics
  - monetary
source_url: 'https://cbr.ru/statistics/'
last_updated: 2026-07-18
slug: /data-sources/federal/cbr-statistics
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
  - json
  - xml
  - xlsx
status: current
related_information_system: /information-systems/federal/cbrsite
description: >-
  официальные HTML-, XML-, JSON- и XLSX-каналы Банка России для макро-,
  банковской и рыночной статистики: тематический каталог, база показателей,
  data-service API и справочные сервисы курсов. Для анализа государственных
  финансов это контекст по периодам и методике, а не источник исполнения
  бюджета по КБК, налогов или закупок.
content_type: data_source
entity_type: data-source
relationships:
  - type: operated_by
    target: /organizations/cbr
last_verified: 2026-07-18
related_pages:
  - /information-systems/federal/cbrsite
  - /howto/access/cbr-api
  - /data-sources/federal/cbr-finflows
  - /data-sources/federal/cbr-bbs
  - /data-sources/federal/cbr-vestnik
  - /data-sources/federal/cbr-annual-report
  - /organizations/cbr
jurisdiction_level: federal
data_completeness: partial
machine_readability: mixed
legal_significance: official
update_lag: unknown
archive_depth: unknown
license_or_terms: not-explicit
---

# Статистика Банка России

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный; макроэкономические, денежно-кредитные, банковские, внешнесекторные и рыночные временные ряды Банка России |
| Тип доступа | Смешанный: HTML-каталог, форма `hd_base` с XLSX-выгрузкой, JSON REST API и XML-справочные сервисы |
| Основные форматы | Проверены HTML, JSON, XML (`windows-1251`) и XLSX; формат зависит от канала и конкретной серии |
| Оператор | [Банк России](/organizations/cbr) |
| Режим доступа | Открытый для перечисленных публичных URL; сервер использует антибот-фильтрацию, поэтому клиенту нужен обычный `User-Agent` и повтор запроса при `403` |

Коротко: это зонтичная карточка публичных рядов и файлов Банка России. Здесь описана **структура реально проверенных ответов** — XML официальных курсов, XLSX из `hd_base`, JSON `data-service` и HTML-оглавление. Это **макро-, банковский и рыночный контекст**, а не источник кассового исполнения бюджета по КБК, налоговых начислений или закупок.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | **18.07.2026**. Все URL, размеры и SHA-256 ниже относятся к телам, полученным в этот день. |
| Полнота (`data_completeness`) | Частичная как единая схема: ЦБ публикует несколько независимых каналов; проверены их контракты и один конкретный XLSX/один JSON-ряд, но не каждая серия и файл в тематическом каталоге. |
| Машиночитаемость (`machine_readability`) | XML курсов и JSON API имеют явную структуру; XLSX из `hd_base` требует знания строки шапки и типа периода; HTML — навигационный слой со ссылками на файлы. |
| Юридическая значимость (`legal_significance`) | Официальные публикации и сервисы Банка России. Для юридически значимой ссылки на официальный курс используйте домен `cbr.ru`/`www.cbr.ru`, а не стороннее зеркало. |
| Задержка обновления (`update_lag`) | Зависит от ряда: XML курсов — публикационный календарь официальных курсов; `hd_base` и JSON — календарь конкретной серии. Единого SLA в проверенных ответах нет. |
| Глубина архива (`archive_depth`) | Не едина: XML-динамика принимает диапазон дат, `hd_base` и API отдают доступный для серии диапазон; фактические границы нужно читать из ответа/страницы показателя. |
| Лицензия (`license_or_terms`) | В проверенных HTTP-ответах отдельные условия повторного использования не указаны; при публикации производных данных указывайте Банк России и исходный URL. |

## Описание

Карточка охватывает пять разных точек входа на официальном сайте:

1. классические XML курсов `XML_daily.asp` и `XML_dynamic.asp`;
2. HTML-каталог [баз данных показателей](https://cbr.ru/hd_base/) и генерируемые им XLSX;
3. [сервис получения данных](https://cbr.ru/statistics/data-service/) и его JSON REST API;
4. проверенные XML-справочники валют и котировок драгоценных металлов;
5. HTML-оглавление [«Статистика»](https://cbr.ru/statistics/) со ссылками на тематические разделы и прикреплённые файлы.

В объём **не** входят исполнение бюджетов по КБК, налоги и закупки: их ключи и первичные реестры ведут Казначейство, Минфин и ФНС. У рядов ЦБ нет КБК, ИНН, ОКТМО, номера контракта или бюджетной проводки; связь с государственными финансами строится через период, единицы и явную аналитическую модель.

## Оператор

[Банк России](/organizations/cbr) обслуживает и публикует описанные каналы на `cbr.ru`.

- [Сайт Банка России](/information-systems/federal/cbrsite) — карточка портала-оператора и его ограничений доступа; это системный контекст для всех URL ниже.

## URL и точки доступа

| Канал | Точный URL / метод | Проверенный формат |
| --- | --- | --- |
| HTML-оглавление | `GET https://cbr.ru/statistics/` | HTML UTF-8; ссылки на подразделы, `Content/Document/File/<id>/...` и `/vfs/statistics/...` |
| Каталог баз | `GET https://cbr.ru/hd_base/` | HTML UTF-8; страницы серий и формы периода |
| Пример XLSX `hd_base` | `GET https://cbr.ru/Queries/UniDbQuery/DownloadExcel/132934?...` | XLSX, один лист, генерируется по параметрам периода |
| Витрина API | `GET https://cbr.ru/statistics/data-service/` | HTML UTF-8; UI к JSON API и ссылка на OpenAPI |
| Схема API | `GET https://cbr.ru/dataservice/swagger` | JSON, OpenAPI 3.0.3 |
| Данные API | `GET https://cbr.ru/dataservice/data?...` | JSON с `RawData`, метаданными и словарём единиц |
| Официальные курсы | `GET https://www.cbr.ru/scripts/XML_daily.asp?date_req=...` | XML `windows-1251` |
| Динамика валюты | `GET https://www.cbr.ru/scripts/XML_dynamic.asp?...` | XML `windows-1251` |
| Справочник валют | `GET https://www.cbr.ru/scripts/XML_val.asp?d=0` | XML `windows-1251` |
| Драгметаллы | `GET https://www.cbr.ru/scripts/xml_metall.asp?...` | XML `windows-1251` |

## Структура файлов и состав данных

Ниже зафиксированы ответы, скачанные **18.07.2026**. Размер — число байтов уже **распакованного тела**, для которого рассчитан SHA-256. У большинства ответов сервер применил gzip: его `Content-Length` (если он был) меньше и относится к передаче, а не к сохранённому файлу. Во всех строках таблицы сервер **не отдал `Last-Modified` и `ETag`**, если не указано иное.

| Проверенный URL | `Last-Modified` / `ETag` | Размер тела, байт | SHA-256 тела | Дата |
| --- | --- | ---: | --- | --- |
| `https://cbr.ru/statistics/` | не отданы | 132 066 | `29667252ffb730dc4d2e478bd96314dad68d24627fe5da3cd17a5f19a5ed3b7e` | 2026-07-18 |
| `https://cbr.ru/hd_base/` | не отданы | 54 368 | `ca9a0c1aeb110563cdfa13326ba50bd85d57b16fa19ac1ed9ed2a93af7052191` | 2026-07-18 |
| `https://cbr.ru/Queries/UniDbQuery/DownloadExcel/132934?FromDate=01%2F18%2F2026&ToDate=07%2F17%2F2026&posted=False&backUrl=%2Fhd_base%2Finfl%2F` | не отданы | 4 250 | `96ec685f577e38f22b656754a3dd7529eb687bf0f0218b8073200dd846ab192d` | 2026-07-18 |
| `https://cbr.ru/statistics/data-service/` | не отданы | 38 219 | `a7e1706c98e5efc529a66808624bed7c5d8fa29bebbfe649640d34b0923b27fe` | 2026-07-18 |
| `https://cbr.ru/dataservice/swagger` | не отданы | 40 212 | `b18efb06448a976ed10cdd427d8ab801b7e4986d565030ad2b74e61aa03c643d` | 2026-07-18 |
| `https://cbr.ru/dataservice/data?y1=2026&y2=2026&publicationId=5&datasetId=5` | не отданы | 1 543 | `f96d26a1f1bdbae1b5a34aec12168491c3cdb10e048fdd9e9e00386b213fe855` | 2026-07-18 |
| `https://www.cbr.ru/scripts/XML_daily.asp?date_req=19%2F07%2F2026` | не отданы | 9 511 | `1bcab6694d71131a954e2c17ce0f7c75bc0ee77b1833dc33cfa73416cdbb1cd2` | 2026-07-18 |
| `https://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=01%2F07%2F2026&date_req2=17%2F07%2F2026&VAL_NM_RQ=R01235` | не отданы | 1 708 | `af67c63f397123991260600fb39fc084f982b1d2d10a87341ee919ba14c49c07` | 2026-07-18 |
| `https://www.cbr.ru/scripts/XML_val.asp?d=0` | не отданы | 11 650 | `7eecb1495013079d3a68c0b46241eb1a10a36a6667f6d08ad7c89e7e4d8631ff` | 2026-07-18 |
| `https://www.cbr.ru/scripts/xml_metall.asp?date_req1=01%2F07%2F2026&date_req2=17%2F07%2F2026` | не отданы | 4 380 | `c78e7a18ccf2519b150dcb48637da37aca45a0c0417c98f3fb26da6289fb9142` | 2026-07-18 |

### A. Курсы валют: `XML_daily.asp` и `XML_dynamic.asp`

**Ежедневный файл.** `GET https://www.cbr.ru/scripts/XML_daily.asp` принимает необязательный строковый параметр `date_req` в формате `ДД/ММ/ГГГГ`. `Content-Type` проверенного ответа — `application/xml; charset=windows-1251`; XML-декларация также указывает `windows-1251`. Поэтому не декодируйте байты как UTF-8 вручную: передайте `response.content` в XML-парсер или декодируйте как `cp1251`.

Корень — `<ValCurs Date="ДД.ММ.ГГГГ" name="Foreign Currency Market">`; повторяющийся узел — `<Valute ID="R...">`. Одна запись — **дата опубликованного курса × валюта**. Поля `<Valute>`:

| Поле | Тип в XML | Значение и правило парсинга |
| --- | --- | --- |
| `ID` | строка | Внутренний идентификатор ЦБ, например `R01235`; ключ для `VAL_NM_RQ` в динамическом сервисе и для связи с `XML_val.asp`. |
| `NumCode` | строка из трёх цифр | Числовой код валюты; храните строкой, чтобы не потерять ведущие нули. |
| `CharCode` | строка | Буквенный код валюты, например `USD`; удобный ключ для внешних рядов, если методика совпадает. |
| `Nominal` | целое | Число единиц валюты, за которое задано `<Value>`. Нельзя молча считать его равным 1. |
| `Name` | строка `windows-1251` | Русское наименование валюты. |
| `Value` | десятичная строка с `,` | Официальный курс в рублях **за `Nominal` единиц**. Для `Decimal` замените запятую на точку. |
| `VunitRate` | десятичная строка с `,` | Рублей за **одну** единицу: `Value / Nominal`. В проверенном ответе DZD: `Nominal=100`, `Value=58,9709`, `VunitRate=0,589709`. |

Не используйте `float` для первичного слоя: сначала сохраняйте строку, затем преобразуйте `Value.replace(',', '.')` и `VunitRate.replace(',', '.')` в `Decimal`. Запрос от **19.07.2026** вернул корневой `Date="18.07.2026"` и 54 валюты: дата в корне — дата **фактически отданного** официального списка, а не обещание равенства `date_req`. В нерабочую или ещё не опубликованную дату всегда сверяйте `ValCurs/@Date`.

**Динамика одной валюты.** `GET https://www.cbr.ru/scripts/XML_dynamic.asp` принимает три строковых параметра:

| Параметр | Обязателен | Формат | Проверенное значение |
| --- | --- | --- | --- |
| `date_req1` | да | `ДД/ММ/ГГГГ` | `01/07/2026` |
| `date_req2` | да | `ДД/ММ/ГГГГ` | `17/07/2026` |
| `VAL_NM_RQ` | да | внутренний `Valute/@ID` | `R01235` (USD) |

Корень — `<ValCurs ID="R01235" DateRange1="01.07.2026" DateRange2="17.07.2026" name="Foreign Currency Market Dynamic">`; повторяющийся узел — `<Record Date="ДД.ММ.ГГГГ" Id="R...">` с `Nominal`, `Value`, `VunitRate`. В проверенном диапазоне было 13 записей: это **дата публикации × одна валюта**, не календарный ряд всех дней. `CharCode`, `NumCode` и название в `<Record>` отсутствуют — присоединяйте их по `Id` к ежедневному XML или справочнику, а не придумывайте поле `CharCode`.

**Воспроизводимый запуск.** Сохранение заголовков и тела проверено для URL выше:

```bash
curl --fail --location --compressed --user-agent 'Mozilla/5.0' \
  -D daily.headers -o daily.xml \
  'https://www.cbr.ru/scripts/XML_daily.asp?date_req=19%2F07%2F2026'
grep -iE '^(content-type|content-length|last-modified|etag):' daily.headers || true
wc -c < daily.xml
shasum -a 256 daily.xml

# content-type: application/xml; charset=windows-1251
# content-length: 2412       # gzip-передача; Last-Modified и ETag отсутствуют
#     9511
# 1bcab6694d71131a954e2c17ce0f7c75bc0ee77b1833dc33cfa73416cdbb1cd2  daily.xml
```

```python
import hashlib
import requests
from xml.etree import ElementTree as ET

url = 'https://www.cbr.ru/scripts/XML_daily.asp'
r = requests.get(
    url,
    params={'date_req': '19/07/2026'},
    headers={'User-Agent': 'Mozilla/5.0'},
    timeout=30,
)
r.raise_for_status()
root = ET.fromstring(r.content)  # XML-декларация задаёт windows-1251
usd = next(v for v in root.findall('Valute') if v.findtext('CharCode') == 'USD')
print({
    'status': r.status_code,
    'content_type': r.headers.get('Content-Type'),
    'bytes': len(r.content),
    'sha256': hashlib.sha256(r.content).hexdigest(),
    'requested': '19/07/2026',
    'response_Date': root.attrib['Date'],
    'USD': {name: usd.findtext(name) for name in ('NumCode', 'Nominal', 'Value', 'VunitRate')},
})

# {'status': 200, 'content_type': 'application/xml; charset=windows-1251',
#  'bytes': 9511, 'sha256': '1bcab6694d71131a954e2c17ce0f7c75bc0ee77b1833dc33cfa73416cdbb1cd2',
#  'requested': '19/07/2026', 'response_Date': '18.07.2026',
#  'USD': {'NumCode': '840', 'Nominal': '1', 'Value': '78,3987', 'VunitRate': '78,3987'}}
```

### B. `hd_base`: каталог показателей и XLSX серии 132934

`GET https://cbr.ru/hd_base/` — HTML-каталог, а не единый API. На проверенной странице есть, в частности, «Инфляция и ключевая ставка Банка России» (`/hd_base/infl/`), RUONIA, MIACR, кривая бескупонной доходности ОФЗ, валюты, драгоценные металлы, процентные ставки, денежная база и международные резервы. Страница конкретной серии содержит HTML-форму с диапазоном и ссылку на экспорт; нельзя переносить идентификатор одной формы на другую серию.

Проверенный экспорт серии **132934** использует `GET https://cbr.ru/Queries/UniDbQuery/DownloadExcel/132934` со следующими параметрами:

| Параметр | Тип / формат | Обязателен для проверенной выгрузки | Значение |
| --- | --- | --- | --- |
| `FromDate` | строка `MM/DD/YYYY` | да | `01/18/2026` |
| `ToDate` | строка `MM/DD/YYYY` | да | `07/17/2026` |
| `posted` | строка логического значения | да | `False` |
| `backUrl` | URL-путь | нужен интерфейсу и был передан | `/hd_base/infl/` |

Ответ имеет `Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`. Сервер не прислал `Last-Modified` и `ETag`. Это **XLSX**, а не CSV или XML: не выводите общий формат всего `hd_base` из одной ссылки, и не подменяйте URL предполагаемым именем файла.

В проверенной книге 4 250 байт, один лист `Инфляция и ключевая ставка Банк`, одна строка шапки и четыре колонки. Шесть строк данных описывают один **месяц × три показателя**; XLSX хранит их в широком виде.

| Колонка | Тип ячейки / Excel-формат | Значение |
| --- | --- | --- |
| `Дата` | строка, `General`, например `06.2026` | Месячный период `MM.YYYY`, не Excel `datetime`. При обычном `pandas.read_excel` он был ошибочно выведен как число `6.2026`; задайте `dtype={'Дата': 'string'}`. |
| `Ключевая ставка, % годовых` | число, `#,##0.00` | Процент годовых; `14.25` в строке `06.2026`. |
| `Инфляция, % г/г` | число, `#,##0.00` | Процент год к году; `6.02` в строке `06.2026`. |
| `Цель по инфляции` | число, `#,##0.00` | Процент; `4.0` в строке `06.2026`. |

Ключ длинного ряда после `melt`: `period + indicator`; единица зашита в заголовок, отдельного машинного поля единицы в книге нет. Базу сравнения «г/г» несёт название колонки, поэтому сохраняйте `indicator` в raw-слое. В книге нет КБК, ИНН, ОКТМО и бюджетных полей; для сопоставления с бюджетным рядом допустим только период и явно описанная модель.

```bash
curl --fail --location --user-agent 'Mozilla/5.0' \
  -D infl.headers -o inflation.xlsx \
  'https://cbr.ru/Queries/UniDbQuery/DownloadExcel/132934?FromDate=01%2F18%2F2026&ToDate=07%2F17%2F2026&posted=False&backUrl=%2Fhd_base%2Finfl%2F'
shasum -a 256 inflation.xlsx

# Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
# Last-Modified и ETag не отданы; в проверенной версии:
# 96ec685f577e38f22b656754a3dd7529eb687bf0f0218b8073200dd846ab192d  inflation.xlsx
```

```python
import hashlib
from pathlib import Path

import pandas as pd
import requests
from openpyxl import load_workbook

url = 'https://cbr.ru/Queries/UniDbQuery/DownloadExcel/132934'
params = {
    'FromDate': '01/18/2026', 'ToDate': '07/17/2026',
    'posted': 'False', 'backUrl': '/hd_base/infl/',
}
r = requests.get(url, params=params, headers={'User-Agent': 'Mozilla/5.0'}, timeout=30)
r.raise_for_status()
book = Path('inflation.xlsx')
book.write_bytes(r.content)
wb = load_workbook(book, read_only=True, data_only=True)
raw = pd.read_excel(book, sheet_name=wb.sheetnames[0], dtype={'Дата': 'string'}, engine='openpyxl')
long = raw.melt(id_vars='Дата', var_name='indicator', value_name='value')
long['period'] = pd.to_datetime(long['Дата'], format='%m.%Y')
print({
    'content_type': r.headers.get('Content-Type'),
    'bytes': len(r.content),
    'sha256': hashlib.sha256(r.content).hexdigest(),
    'sheetnames': wb.sheetnames,
    'columns': raw.columns.tolist(),
    'first_long': long[['period', 'indicator', 'value']].iloc[0].to_dict(),
})

# {'content_type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
#  'bytes': 4250, 'sha256': '96ec685f577e38f22b656754a3dd7529eb687bf0f0218b8073200dd846ab192d',
#  'sheetnames': ['Инфляция и ключевая ставка Банк'],
#  'columns': ['Дата', 'Ключевая ставка, % годовых', 'Инфляция, % г/г', 'Цель по инфляции'],
#  'first_long': {'period': Timestamp('2026-06-01 00:00:00'),
#                 'indicator': 'Ключевая ставка, % годовых', 'value': 14.25}}
```

### C. `data-service`: JSON API временных рядов

Витрина `https://cbr.ru/statistics/data-service/` прямо указывает, что сервис отдаёт временные ряды через API. Проверенная [документация API](https://cbr.ru/statistics/data-service/APIdocumentation/) называет формат **JSON** и даёт OpenAPI 3.0 по `GET https://cbr.ru/dataservice/swagger`. XML-ответ для этого API в проверенной OpenAPI-схеме **не заявлен**; XML курсов — другой, классический сервис.

Все документированные методы — `GET`, базовый путь — `https://cbr.ru/dataservice`. Последовательность идентификации показателя:

1. `GET /publications` возвращает массив категорий: `id` (integer), `parent_id` (integer), `category_name` (string), `NoActive` (integer). В проверенном ответе 34 элемента.
2. `GET /datasets?publicationId=<integer>` возвращает массив показателей: `id`, `parent_id`, `name`, `full_name`, `type`, `reporting`, `link`, `updated_time`. Например, `publicationId=5` («Структура денежной массы») дал `datasetId=5` — «Денежный агрегат М0» (`type=4`, `reporting="date"`).
3. Если у `type=1`, нужен `GET /measures?datasetId=<integer>` и затем `measureId`; для проверенного `datasetId=25` ответ содержит объект `{ "measure": [...] }` с разрезами «В рублях», «В долларах США», «В евро». Для `type` не равного 1 `measureId` можно опустить или задать `-1`: это прямо оговорено в документации для `/years` и `/data`.
4. `GET /years?datasetId=<integer>&measureId=<integer optional>` возвращает доступный диапазон `FromYear`, `ToYear`. У М0: 1992–2026.
5. `GET /data?y1=<integer>&y2=<integer>&publicationId=<integer>&datasetId=<integer>&measureId=<integer optional>` возвращает собственно ряд. `y1`, `y2`, `publicationId`, `datasetId` обязательны по OpenAPI; `measureId` опционален.

Проверенный вызов М0:

```text
GET https://cbr.ru/dataservice/data?y1=2026&y2=2026&publicationId=5&datasetId=5
```

Ответ — верхний JSON-объект с массивами `RawData`, `headerData`, `units`, `DTRange`, `SType`. Одна запись `RawData` — **одно значение показателя × период × разрез**:

| Поле `RawData` | Тип в проверенном ответе | Значение / замечание |
| --- | --- | --- |
| `colId` | integer | Технический идентификатор столбца/разреза; для М0 `-1`. |
| `element_id`, `measure_id` | integer или `null` | Идентификаторы элемента и разреза; у М0 оба `null`. Не превращайте `null` в строку ключа. |
| `unit_id` | integer | Ссылка на `units[].id`; у М0 `3`, что соответствует `млрд руб.`. |
| `obs_val` | number | Наблюдаемое значение; М0 на `2026-02-01` — `17853.9`. |
| `rowId` | integer | Технический идентификатор строки; не используйте как стабильный межсерийный ключ. |
| `dt` | строка | Форматированная подпись с хвостовыми пробелами, например `"01.02.2026               "`; очищайте `strip()`. |
| `periodicity` | строка | Для М0 — `month`. Это частота записи, а не график публикации. |
| `date` | строка ISO 8601 | `2026-02-01T00:00:00`; надёжный ключ периода после явного выбора часового пояса/даты. |
| `digits` | integer | Число знаков отображения; у М0 `0`, не правило для каждой серии. |

`headerData` связывает `id` с названием столбца, `units` — `id` с текстовой единицей, `DTRange` содержит `FromY`/`ToY`, `SType` — `sType`, `dsName`, `PublName`. Для одиночного М0 ключ длинного ряда — `datasetId + date`; для разрезных рядов добавляйте `measure_id` и/или `element_id` в том виде, в каком они вернулись. Ряд не содержит КБК, ИНН, ОКТМО, ОКВЭД или идентификатора бюджетной операции; его можно сопоставлять с внешними данными только по периоду и собственной таблице соответствий, если разрез действительно сопоставим.

```bash
curl --fail --location --compressed --user-agent 'Mozilla/5.0' \
  -D m0.headers -o m0-2026.json \
  'https://cbr.ru/dataservice/data?y1=2026&y2=2026&publicationId=5&datasetId=5'
shasum -a 256 m0-2026.json

# Content-Type: application/json; Last-Modified и ETag не отданы
# f96d26a1f1bdbae1b5a34aec12168491c3cdb10e048fdd9e9e00386b213fe855  m0-2026.json
```

```python
import hashlib
import requests

url = 'https://cbr.ru/dataservice/data'
params = {'y1': 2026, 'y2': 2026, 'publicationId': 5, 'datasetId': 5}
r = requests.get(url, params=params, headers={'User-Agent': 'Mozilla/5.0'}, timeout=30)
r.raise_for_status()
payload = r.json()
print({
    'content_type': r.headers.get('Content-Type'),
    'bytes': len(r.content),
    'sha256': hashlib.sha256(r.content).hexdigest(),
    'keys': list(payload),
    'first_row': payload['RawData'][0],
    'unit_for_first_row': next(x['val'] for x in payload['units'] if x['id'] == payload['RawData'][0]['unit_id']),
})

# {'content_type': 'application/json', 'bytes': 1543,
#  'sha256': 'f96d26a1f1bdbae1b5a34aec12168491c3cdb10e048fdd9e9e00386b213fe855',
#  'keys': ['RawData', 'headerData', 'units', 'DTRange', 'SType'],
#  'first_row': {'colId': -1, 'element_id': None, 'measure_id': None, 'unit_id': 3,
#                'obs_val': 17853.9, 'rowId': 409, 'dt': '01.02.2026               ',
#                'periodicity': 'month', 'date': '2026-02-01T00:00:00', 'digits': 0},
#  'unit_for_first_row': 'млрд руб.'}
```

### D. Проверенные XML-справочники: валюты и драгоценные металлы

В дополнение к ежедневному курсу проверены только следующие XML URL; другие названия сервисов не предполагаются и здесь не описываются без отдельной проверки.

| URL / метод | Параметры | Корневая структура и наблюдение |
| --- | --- | --- |
| `GET https://www.cbr.ru/scripts/XML_val.asp?d=0` | `d` — строковый параметр, в проверенном запросе `0` | `<Valuta name="Foreign Currency Market Lib">` → `<Item ID="R...">`; 83 справочных позиции. `Item` содержит `Name`, `EngName`, `Nominal`, `ParentCode`. Это запись справочника валюты, не курс и не ISO-справочник: `CharCode`/`NumCode` здесь отсутствуют. `ParentCode` содержит пробелы в конце, применяйте `strip()`. |
| `GET https://www.cbr.ru/scripts/XML_dynamic.asp` | `date_req1`, `date_req2`, `VAL_NM_RQ`, см. раздел A | `<ValCurs>` → `<Record>`; 13 наблюдений в проверенном USD-диапазоне. Это история одной валюты. |
| `GET https://www.cbr.ru/scripts/xml_metall.asp` | обязательные в проверенном запросе `date_req1`, `date_req2`, оба `ДД/ММ/ГГГГ` | `<Metall FromDate="YYYYMMDD" ToDate="YYYYMMDD" name="Precious metals quotations">` → `<Record Date="ДД.ММ.ГГГГ" Code="1..4">`; 52 записи. Одна запись — дата × числовой код металла; `Buy` и `Sell` — десятичные строки с запятой. Расшифровки `Code` и единицы измерения в самом XML-ответе отсутствуют, поэтому не подставляйте их по догадке. |

Все три ответа имеют `Content-Type: application/xml; charset=windows-1251`, не отдают `Last-Modified`/`ETag` и используют запятую в числах. Ключи связки ограничены внутренними идентификаторами (`ID`, `Id`, `ParentCode`, `Code`) и датой. У металлов в проверенном XML нет ОКВЭД, федерального округа, КБК, ИНН и ОКТМО; у валютного XML внешний ключ — `CharCode`/`NumCode` только в ежедневном файле.

```bash
curl --fail --location --compressed --user-agent 'Mozilla/5.0' \
  -D metals.headers -o metals.xml \
  'https://www.cbr.ru/scripts/xml_metall.asp?date_req1=01%2F07%2F2026&date_req2=17%2F07%2F2026'
shasum -a 256 metals.xml

# Content-Type: application/xml; charset=windows-1251
# Last-Modified и ETag не отданы
# c78e7a18ccf2519b150dcb48637da37aca45a0c0417c98f3fb26da6289fb9142  metals.xml
```

```python
import hashlib
import requests
from xml.etree import ElementTree as ET

checks = [
    ('directory', 'https://www.cbr.ru/scripts/XML_val.asp', {'d': '0'}),
    ('dynamic-usd', 'https://www.cbr.ru/scripts/XML_dynamic.asp', {
        'date_req1': '01/07/2026', 'date_req2': '17/07/2026', 'VAL_NM_RQ': 'R01235',
    }),
    ('metals', 'https://www.cbr.ru/scripts/xml_metall.asp', {
        'date_req1': '01/07/2026', 'date_req2': '17/07/2026',
    }),
]
for name, url, params in checks:
    r = requests.get(url, params=params, headers={'User-Agent': 'Mozilla/5.0'}, timeout=30)
    r.raise_for_status()
    root = ET.fromstring(r.content)
    print(name, {
        'root': root.tag, 'attrs': root.attrib, 'children': len(root),
        'bytes': len(r.content), 'sha256': hashlib.sha256(r.content).hexdigest(),
    })

# directory {'root': 'Valuta', 'attrs': {'name': 'Foreign Currency Market Lib'},
#            'children': 83, 'bytes': 11650,
#            'sha256': '7eecb1495013079d3a68c0b46241eb1a10a36a6667f6d08ad7c89e7e4d8631ff'}
# dynamic-usd {'root': 'ValCurs', 'attrs': {'ID': 'R01235', 'DateRange1': '01.07.2026',
#                 'DateRange2': '17.07.2026', 'name': 'Foreign Currency Market Dynamic'},
#                 'children': 13, 'bytes': 1708,
#                 'sha256': 'af67c63f397123991260600fb39fc084f982b1d2d10a87341ee919ba14c49c07'}
# metals {'root': 'Metall', 'attrs': {'FromDate': '20260701', 'ToDate': '20260717',
#           'name': 'Precious metals quotations'}, 'children': 52, 'bytes': 4380,
#           'sha256': 'c78e7a18ccf2519b150dcb48637da37aca45a0c0417c98f3fb26da6289fb9142'}
```

### E. `/statistics/`: HTML-оглавление и прикреплённые файлы

`GET https://cbr.ru/statistics/` вернул `text/html; charset=utf-8`. Это не таблица наблюдений и не единый каталог файлов: строка HTML-ссылки — элемент навигации или выпуск, а структура прикреплённого файла определяется конкретным разделом. На проверенной странице представлены тематические блоки:

- календарь публикации официальной статистики и сервис получения данных;
- макроэкономическая статистика, банковский сектор, ликвидность и операции денежно-кредитной политики;
- финансовые рынки, национальная платёжная система и наличное денежное обращение;
- международные соглашения, НФО и СРО, информация для отчитывающихся организаций, методические материалы и новости.

Файлы лежат по прямым ссылкам из HTML. В проверенном документе встречаются, в частности, путь `https://cbr.ru/Content/Document/File/194199/acc_indicators_17072026.xlsx` для XLSX и `/vfs/statistics/...` для файлов выпусков (на странице присутствуют `.xlsx` и `.docx`). Извлекайте `href` из текущего HTML, а не синтезируйте URL по названию тематического раздела: имена и внутренние числовые идентификаторы — не контракт для всех публикаций.

```bash
curl --fail --location --compressed --user-agent 'Mozilla/5.0' \
  -D statistics.headers -o statistics.html 'https://cbr.ru/statistics/'
shasum -a 256 statistics.html

# Content-Type: text/html; charset=utf-8; Last-Modified и ETag не отданы
# 29667252ffb730dc4d2e478bd96314dad68d24627fe5da3cd17a5f19a5ed3b7e  statistics.html
```

```python
import hashlib
import requests
from bs4 import BeautifulSoup

url = 'https://cbr.ru/statistics/'
r = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=30)
r.raise_for_status()
main = BeautifulSoup(r.content, 'html.parser').find('main')
links = [(a.get_text(' ', strip=True), a['href']) for a in main.find_all('a', href=True)]
roots = [item for item in links if item[1] in {
    '/statistics/indcalendar/', '/statistics/data-service/', '/statistics/macro_itm/',
    '/statistics/bank_sector/', '/statistics/idkp_br/', '/statistics/finr/',
    '/statistics/nps/', '/statistics/cash_circulation/', '/statistics/intmem-2/',
    '/statistics/nfo/', '/statistics/reporting/optimization/', '/statistics/methodological_materials/',
}]
print({
    'content_type': r.headers.get('Content-Type'), 'bytes': len(r.content),
    'sha256': hashlib.sha256(r.content).hexdigest(), 'root_sections': roots,
})

# {'content_type': 'text/html; charset=utf-8', 'bytes': 132066,
#  'sha256': '29667252ffb730dc4d2e478bd96314dad68d24627fe5da3cd17a5f19a5ed3b7e',
#  'root_sections': [('Календарь публикации официальной статистической информации',
#                     '/statistics/indcalendar/'), ..., ('Методические материалы',
#                     '/statistics/methodological_materials/')]}
```

### Кэширование регулярно перезаписываемых URL

Постоянный URL не означает неизменное содержимое. Скрипт использует `If-None-Match` и `If-Modified-Since`, когда предыдущий sidecar содержит эти значения, и всегда записывает SHA-256. На проверенном `XML_daily.asp` сервер не отдал ни `ETag`, ни `Last-Modified`, поэтому второй запуск не сможет получить `304` только с этими заголовками: сравнивайте сохранённый SHA-256 после скачивания. Этот же скрипт применим к XLSX и JSON URL.

```python
from __future__ import annotations

import hashlib
import json
from pathlib import Path

import requests

url = 'https://www.cbr.ru/scripts/XML_daily.asp?date_req=19%2F07%2F2026'
cache_dir = Path('cache/cbr-daily')
cache_dir.mkdir(parents=True, exist_ok=True)
body_path = cache_dir / 'daily.xml'
meta_path = cache_dir / 'daily.meta.json'
old = json.loads(meta_path.read_text()) if meta_path.exists() else {}
headers = {'User-Agent': 'Mozilla/5.0'}
if old.get('etag'):
    headers['If-None-Match'] = old['etag']
if old.get('last_modified'):
    headers['If-Modified-Since'] = old['last_modified']

response = requests.get(url, headers=headers, timeout=30)
if response.status_code == 304:
    print('unchanged: HTTP 304')
else:
    response.raise_for_status()
    body = response.content
    sha256 = hashlib.sha256(body).hexdigest()
    part_path = body_path.with_suffix('.xml.part')
    part_path.write_bytes(body)
    part_path.replace(body_path)
    meta = {
        'url': response.url,
        'etag': response.headers.get('ETag'),
        'last_modified': response.headers.get('Last-Modified'),
        'content_type': response.headers.get('Content-Type'),
        'bytes': len(body),
        'sha256': sha256,
    }
    meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=2) + '\n')
    print(f"downloaded: status={response.status_code} bytes={len(body)} sha256={sha256}")
    print(meta_path.read_text(), end='')

# downloaded: status=200 bytes=9511 sha256=1bcab6694d71131a954e2c17ce0f7c75bc0ee77b1833dc33cfa73416cdbb1cd2
# {
#   "url": "https://www.cbr.ru/scripts/XML_daily.asp?date_req=19%2F07%2F2026",
#   "etag": null,
#   "last_modified": null,
#   "content_type": "application/xml; charset=windows-1251",
#   "bytes": 9511,
#   "sha256": "1bcab6694d71131a954e2c17ce0f7c75bc0ee77b1833dc33cfa73416cdbb1cd2"
# }
```

## Объекты данных и показатели

| Канал | Что является наблюдением | Ключи и отсутствие ключей |
| --- | --- | --- |
| `XML_daily.asp` | Дата опубликованного официального списка × валюта | `ValCurs/@Date + Valute/@ID`; для внешних валютных рядов — `Date + CharCode` или `NumCode` после проверки методики. |
| `XML_dynamic.asp` | Дата × одна валюта | `Record/@Date + Record/@Id`; `Id` связывается с `Valute/@ID`. В записи нет `CharCode`/`NumCode`. |
| `hd_base` XLSX | Месяц × показатель после разворота широких колонок | В примере `period + indicator`; единица и база сравнения частично в заголовке. |
| `data-service` | Период × dataset × разрез | `datasetId + date` и, если не `null`, `measure_id`/`element_id`; `unit_id` связывает значение со словарём `units`. |
| Металлы XML | Дата × `Code` металла | `Record/@Date + Record/@Code`; в ответе нет расшифровки кода и единицы. |
| HTML `/statistics/` | Ссылка/файл, не статистическое наблюдение | URL и текст ссылки; ключи таблиц определяет скачанный файл, а не оглавление. |

Ни один из этих каналов не публикует прямые ключи бюджетного или налогового соединения: **КБК, ИНН, ОКТМО, реестровый номер закупки, платёжная операция** отсутствуют. Сопоставляйте только согласованный период, единицу/валюту и собственную явно документированную модель; не выдавайте совпадение даты за строковой `join` с бюджетом.

## Периодичность обновления

- **Официальные курсы XML** — серия публикационных дат, а не гарантированный ежедневный календарный ряд. В запросе на 19.07.2026 сервер отдал `ValCurs/@Date=18.07.2026`; используйте возвращённую дату и допускайте пропуск нерабочего/неопубликованного дня.
- **`XML_dynamic.asp`** — выдаёт наблюдения в заданном диапазоне только для дат, которые реально есть в серии; периодичность определяется конкретной валютной публикацией.
- **`hd_base`** — календарь зависит от серии. Проверенная серия инфляции и ключевой ставки содержит месячные метки; параметрами выгрузки пользователь задаёт диапазон, но новая публикация может пересмотреть уже отданные месяцы.
- **`data-service`** — частоту возвращает `RawData[].periodicity` (`month` у М0); фактическую дату обновления смотрите в `datasets[].updated_time`, а календарь выхода — на странице серии/в календаре публикаций. Нельзя переносить месячность М0 на все `datasetId`.
- **HTML-оглавление** обновляется по мере размещения разделов и файлов; прямые URL файлов могут появляться под `/Content/Document/File/` или `/vfs/statistics/` без единого расписания.

## Ограничения и особенности

- **Кодировка и числа:** классические `.asp` отдают `windows-1251`; русские `Name` будут испорчены при UTF-8-декодировании. XML-значения используют десятичную запятую. JSON API возвращает числа JSON с точкой, а XLSX — numeric cells.
- **Номинал валюты:** `<Value>` не всегда цена одной единицы. Сохраняйте `Nominal` и используйте `VunitRate` либо явное деление; у 100 JPY и 10 000 VND номинал особенно существенен.
- **Периоды XLSX:** подпись `06.2026` — строка, хотя `pandas` по умолчанию может вывести `6.2026` как число. Задавайте текстовый `dtype`, затем преобразуйте строго по формату `%m.%Y`.
- **Пересмотры:** новый хеш XLSX/JSON может означать не только новый период, но и ретропересмотр значения, единицы или метаданных. Храните исходное тело, URL с параметрами, SHA-256 и сравнивайте весь диапазон.
- **HTTP-валидаторы:** проверенные XML, JSON и XLSX не дали `ETag`/`Last-Modified`; sidecar с SHA-256 остаётся обязательным. В других ответах/следующих версиях заголовки могут появиться, поэтому клиент должен уметь отправлять оба условных заголовка.
- **Антибот-фильтр:** в серии проверок часть параллельных запросов получила HTML-страницу DDoS-Guard с `HTTP 403`; последовательный запрос с обычным `User-Agent` успешно вернул описанные тела. Проверяйте `Content-Type`, статус и корневую структуру до парсинга, чтобы не принять страницу фильтра за XML/JSON.
- **Официальность:** зеркала курсов могут повторять числа, но не заменяют URL Банка России для юридически значимой ссылки и не дают гарантий идентичной даты/методики.
- **Форматы frontmatter:** `csv` сознательно не указан: у проверенного экспорта `hd_base` — XLSX, у `data-service` — JSON, у справочных сервисов — XML. Это не утверждение, что на всём сайте ЦБ не бывает CSV, а граница проверенного контракта этой карточки.

## Примеры доступа

Запуск за 30 секунд — скачать официальный XML, сохранить HTTP-заголовки, проверить версию и прочитать курс USD:

```bash
curl --fail --location --compressed --user-agent 'Mozilla/5.0' \
  -D daily.headers -o daily.xml \
  'https://www.cbr.ru/scripts/XML_daily.asp?date_req=19%2F07%2F2026'
shasum -a 256 daily.xml
python3 - <<'PY'
from xml.etree import ElementTree as ET
root = ET.parse('daily.xml').getroot()
usd = next(x for x in root.findall('Valute') if x.findtext('CharCode') == 'USD')
print(root.attrib['Date'], usd.findtext('Nominal'), usd.findtext('Value'), usd.findtext('VunitRate'))
PY

# 1bcab6694d71131a954e2c17ce0f7c75bc0ee77b1833dc33cfa73416cdbb1cd2  daily.xml
# 18.07.2026 1 78,3987 78,3987
```

Детальные контракты, параметры и преобразования форматов приведены в разделе **«Структура файлов и состав данных»**. Практическую последовательность работы с API, а не повтор схем, см. в [руководстве по API Банка России](/howto/access/cbr-api).

## Связанные страницы wiki

- [Сайт Банка России](/information-systems/federal/cbrsite) — системная карточка официального портала, его подсистем и ограничений доступа.
- [API Банка России](/howto/access/cbr-api) — пошаговый how-to для вызовов сервисов; эта карточка описывает структуры ответов, а не дублирует процесс работы.
- [Мониторинг отраслевых финансовых потоков](/data-sources/federal/cbr-finflows) — отдельные PDF и XLSX по платежам через ПС Банка России с иной схемой `ОКВЭД × период`, не показатель `hd_base`.
- [Статистический бюллетень Банка России](/data-sources/federal/cbr-bbs) — PDF-выпуски со сводными таблицами; для регулярных машиночитаемых рядов полезнее XML/XLSX/JSON из этой карточки.
- [Вестник Банка России](/data-sources/federal/cbr-vestnik) — официальное издание с нормативными и разъяснительными материалами, а не API временных рядов.
- [Годовой отчёт Банка России](/data-sources/federal/cbr-annual-report) — годовые PDF и нарративные своды, дополняющие, но не заменяющие регулярные ряды.
- [Банк России](/organizations/cbr) — организация-оператор и издатель описанных публикаций.

## Не путать с

- **Неофициальные зеркала курсов** — могут быть удобны технически, но не являются официальной публикацией Банка России; сохраняйте URL `cbr.ru`/`www.cbr.ru`, ответ и дату из корня XML.
- **Исполнение бюджета, налоги и закупки** — используют предметные ключи КБК, ИНН, ОКТМО, номера контрактов и реестров, которых в статистических каналах ЦБ нет.

## Сводка для машинной обработки

```yaml
primary_url: "https://cbr.ru/statistics/"
landing_page: "https://cbr.ru/statistics/data-service/"
formats: ["html", "json", "xml", "xlsx"]
update_cadence:
  xml_daily: "даты опубликованного официального списка; проверяйте ValCurs/@Date, в нерабочий день возможен предыдущий доступный список"
  hd_base: "по календарю каждой серии; проверенный XLSX содержит месячные периоды"
  data_service: "по расписанию публикации конкретного datasetId; частота записи находится в RawData[].periodicity"
  statistics_html: "по мере размещения материалов и файлов"
url_stability: "корневые URL устойчивы, но содержимое и вложенные file/vfs URL изменяются; не выводить схему одного файла на весь портал"
checked_at: "2026-07-18"
workbook_last_modified: null
workbook_sha256: "96ec685f577e38f22b656754a3dd7529eb687bf0f0218b8073200dd846ab192d"
response_last_modified: null
response_sha256: "1bcab6694d71131a954e2c17ce0f7c75bc0ee77b1833dc33cfa73416cdbb1cd2"
endpoints:
  - name: "HTML-оглавление статистики"
    url: "https://cbr.ru/statistics/"
    method: "GET"
    params: {}
    encoding: "utf-8"
    media_type: "text/html"
    verified_at: "2026-07-18"
  - name: "XLSX инфляции и ключевой ставки (query 132934)"
    url: "https://cbr.ru/Queries/UniDbQuery/DownloadExcel/132934"
    method: "GET"
    params: {FromDate: "MM/DD/YYYY", ToDate: "MM/DD/YYYY", posted: "False", backUrl: "/hd_base/infl/"}
    encoding: "ZIP/XML внутри XLSX"
    media_type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    verified_at: "2026-07-18"
  - name: "JSON data-service, М0"
    url: "https://cbr.ru/dataservice/data"
    method: "GET"
    params: {y1: "integer", y2: "integer", publicationId: "integer", datasetId: "integer", measureId: "integer optional"}
    encoding: "utf-8"
    media_type: "application/json"
    verified_at: "2026-07-18"
  - name: "OpenAPI data-service"
    url: "https://cbr.ru/dataservice/swagger"
    method: "GET"
    params: {}
    encoding: "utf-8"
    media_type: "application/json"
    verified_at: "2026-07-18"
  - name: "Официальные курсы"
    url: "https://www.cbr.ru/scripts/XML_daily.asp"
    method: "GET"
    params: {date_req: "ДД/ММ/ГГГГ optional"}
    encoding: "windows-1251"
    media_type: "application/xml"
    verified_at: "2026-07-18"
  - name: "Динамика валюты"
    url: "https://www.cbr.ru/scripts/XML_dynamic.asp"
    method: "GET"
    params: {date_req1: "ДД/ММ/ГГГГ", date_req2: "ДД/ММ/ГГГГ", VAL_NM_RQ: "Valute ID"}
    encoding: "windows-1251"
    media_type: "application/xml"
    verified_at: "2026-07-18"
  - name: "Справочник валют"
    url: "https://www.cbr.ru/scripts/XML_val.asp"
    method: "GET"
    params: {d: "0"}
    encoding: "windows-1251"
    media_type: "application/xml"
    verified_at: "2026-07-18"
  - name: "Котировки драгметаллов"
    url: "https://www.cbr.ru/scripts/xml_metall.asp"
    method: "GET"
    params: {date_req1: "ДД/ММ/ГГГГ", date_req2: "ДД/ММ/ГГГГ"}
    encoding: "windows-1251"
    media_type: "application/xml"
    verified_at: "2026-07-18"
join_keys:
  - "XML_daily: ValCurs/@Date + Valute/@ID; внешний валютный ключ — CharCode/NumCode после проверки методики"
  - "XML_dynamic: Record/@Date + Record/@Id; присоединять к валютному справочнику по внутреннему ID"
  - "hd_base XLSX: period + indicator после melt"
  - "data-service: datasetId + date + nullable measure_id/element_id; unit_id -> units[].id"
  - "металлы: Record/@Date + Record/@Code; расшифровка Code не присутствует в проверенном XML"
units:
  - "XML_daily: Value — рубли за Nominal единиц; VunitRate — рубли за одну единицу"
  - "hd_base 132934: проценты, единица и база сравнения — в заголовке колонки"
  - "data-service М0: unit_id=3 -> млрд руб."
  - "металлы: единица не дана в проверенном XML"
parse_notes:
  - "XML .asp: windows-1251 и десятичная запятая; используйте response.content и Decimal."
  - "Не считайте Value курсом за одну единицу без Nominal; VunitRate уже нормирован."
  - "Дата XML в корне может не совпасть с date_req; ключ — возвращённый Date."
  - "Дата XLSX 06.2026 должна читаться как string, иначе pandas может превратить её в float 6.2026."
  - "data-service возвращает JSON; dt содержит хвостовые пробелы, а element_id/measure_id могут быть null."
  - "Проверенные ответы не дали ETag/Last-Modified; сохраняйте тело, размер и SHA-256."
  - "В каналах ЦБ отсутствуют КБК, ИНН и ОКТМО; не строить прямой join с бюджетом/налогами."
```

## Частые вопросы

**В:** Почему `ValCurs/@Date` не совпадает с `date_req`?

**О:** `date_req` — запрашиваемая дата, а `Date` в корне — дата фактически отданного списка. Проверка запроса `19/07/2026` вернула `Date="18.07.2026"`. Сохраняйте оба значения и используйте для ряда дату из ответа; не создавайте наблюдение на отсутствующую календарную дату.

**В:** В каких единицах задан курс и как учитывать номинал?

**О:** `Value` — рубли за `Nominal` единиц, а `VunitRate` — рубли за одну единицу. Для валют с `Nominal=100` или `10000` нельзя сопоставлять `Value` с USD без нормализации. Первичные строки с запятой лучше переводить в `Decimal`, а не `float`.

**В:** Чем JSON из `data-service` отличается от XLSX из `hd_base`?

**О:** JSON отдаёт длинные записи `RawData` вместе с IDs, словарём `units` и машинной датой ISO 8601. XLSX проверенной серии хранит период строкой и показатели широкими колонками; единица и база сравнения находятся в заголовке, а для длинного ряда нужен `melt`.

**В:** Как отличить официальный курс от зеркала?

**О:** Официальный источник — ответ с домена `www.cbr.ru`/`cbr.ru`, XML-декларацией и корнем `ValCurs`. Сохраните URL, HTTP-заголовки, тело и SHA-256; совпадающее число на стороннем сайте не доказывает идентичность даты списка или метода расчёта.

**В:** Как поймать ретропересмотр ряда?

**О:** Каждый запуск сохраняйте исходное тело и sidecar с URL, датой запроса, размером, SHA-256, `ETag`/`Last-Modified` при наличии. При изменении хеша сравнивайте не только последний период, но весь диапазон, метаданные единиц и структуру полей/колонок.
