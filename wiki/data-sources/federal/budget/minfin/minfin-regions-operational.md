---
title: >-
  Минфин: данные по исполнению бюджетов субъектов РФ и местных бюджетов
  (perfomance/regions/operational)
sidebar_label: 'Минфин: исполнение бюджетов субъектов и местных (PDF)'
tags:
  - data-source
  - federal
  - budget
  - regional
  - execution
  - reporting
last_updated: 2026-07-18
slug: /data-sources/federal/minfin-regions-operational
source_url: 'https://minfin.gov.ru/ru/perfomance/regions/operational/'
data_source_kind: files
jurisdiction: multilevel
access: open
formats:
  - pdf
status: current
related_information_system: /information-systems/federal/minfinsite
source_authority: federal
rag_priority: medium
last_verified: 2026-07-18
description: >-
  архив PDF-документов и презентаций Минфина по исполнению бюджетов субъектов РФ
  и местных бюджетов: удобны для обзорных слайдов и методических пояснений, но
  не заменяют машиночитаемые XLSX своды subbud/execute и регламентированную
  отчётность Казначейства.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/minfinsite
  - /organizations/minfin
  - /data-sources/federal/minfin-subbud-execute
  - /data-sources/federal/minfin-opendata
  - /data-sources/federal/municipalnye-byudzhety
  - /data-sources/federal/regionalnye-byudzhety
  - /data-sources/federal/roskazna-regional-institutions-execution-summary
  - /data-sources/federal/otchety-ob-ispolnenii-byudzhetov
  - /reporting/municipal-budget-execution
  - /glossary/budget-levels
jurisdiction_level: federal
data_completeness: unknown
machine_readability: files
legal_significance: official
update_lag: unknown
archive_depth: unknown
license_or_terms: cc-by-4.0
relationships:
  - type: operated_by
    target: /organizations/minfin
  - type: published_by
    target: /organizations/minfin
---

# Минфин: данные по исполнению бюджетов субъектов РФ и местных бюджетов (perfomance/regions/operational)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Субнациональный контур**: сводные материалы по исполнению **бюджетов субъектов РФ** и **местных бюджетов** (формулировка раздела на сайте Минфина) |
| Тип доступа | **Файлы по ссылке**: HTML-каталог документов с кнопкой «Скачать» на каждый **PDF** |
| Основные форматы | **PDF** (в т.ч. файлы с подписью «Презентация…» в имени); обёртка — HTML |
| Оператор | Минфин России |
| Режим доступа | Открытый (типовое скачивание без регистрации с официальной страницы) |

Коротко: **архив PDF-документов и презентаций** Минфина по исполнению **бюджетов субъектов** и **местных бюджетов** — удобен для **обзорных** материалов и визуальных сводок; для **машинной обработки** и сопоставления с **агрегированными таблицами** по субъектам в первую очередь смотрите **[краткую информацию subbud/execute (XLSX)](/data-sources/federal/minfin-subbud-execute)**, для регламентированного контура — **[отчёты Казначейства](/data-sources/federal/roskazna-reports)** и **[муниципальные источники](/data-sources/federal/municipalnye-byudzhety)**.

## Описание

Карточка описывает витрину **[Данные по исполнению бюджетов субъектов Российской Федерации и местных бюджетов](https://minfin.gov.ru/ru/perfomance/regions/operational/)** в разделе сайта Минфина «Деятельность → Межбюджетные отношения с регионами и муниципалитетами». На странице перечислены документы с датами публикации и ссылками на вложения; типичное вложение — **PDF** объёмом порядка **1,5–2,5 МБ**, часть файлов именуется как **презентации** (`Prezentatsiya_…pdf`), часть — как **аналитические материалы** (`Analiz_…pdf` и др.).

Канонический путь в URL содержит историческую опечатку **`perfomance`** (не `performance`); при ручном наборе адреса используйте именно её.

Сюда **не** входят **[краткие XLSX-своды по консолидированным бюджетам субъектов](/data-sources/federal/minfin-subbud-execute)** (раздел **statistics/subbud/execute**) и **[каталог открытых наборов Минфина](/data-sources/federal/minfin-opendata)** — иной раздел сайта и иной формат публикаций.

## Оператор

**Минфин России** — канонический URL раздела: https://minfin.gov.ru/ru/perfomance/regions/operational/

- Карточка ИС: **[Сайт Министерства финансов РФ](/information-systems/federal/minfinsite)** — публикация материалов подраздела «Межбюджетные отношения с регионами и муниципалитетами» и вложений к документам.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Каталог документов (список, «Скачать» для каждого файла) | https://minfin.gov.ru/ru/perfomance/regions/operational/ | HTML; вложения **PDF** |
| Родительский раздел «Межбюджетные отношения с регионами и муниципалитетами» | https://minfin.gov.ru/ru/perfomance/regions/ | HTML (навигация по смежным материалам) |

Прямые URL **PDF** при обновлении вложений **меняются**; для автоматизации ориентируйтесь на **актуальную ссылку «Скачать»** в карточке документа на странице каталога.

## Объекты данных и показатели

Состав слайдов и таблиц задаётся **конкретным PDF**; по смыслу заголовков каталога это:

- **Сводные показатели** по исполнению **местных бюджетов** в РФ на отчётные даты (квартальные срезы в названиях документов: 01.01, 01.04, 01.07, 01.10 и т.п. — проверяйте шапку файла на дату скачивания).
- **Материалы по субъектам** в логике раздела (совокупность «субъекты + местные» — уточняйте по содержанию выбранного PDF: оглавление, подписи к графикам и таблицам).

**Пробелы**: **нет** стабильного CSV/XML/API; извлечение цифр требует **OCR или парсинга PDF** и ручной валидации. Это **не** замена **[форм исполнения](/data-sources/federal/roskazna-reports)** и **не** дублирует построчно **[0503317](/reporting/0503317)** по субъектам.

## Структура данных

Ниже описан реально проверенный шаблон двух последних файлов из каталога: [«Анализ» на 01.04.2022](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf) и [«Презентация» на 01.01.2022](https://minfin.gov.ru/common/upload/library/2022/03/main/Prezentatsiya_na_01.01.2022.pdf). Это описание **не** следует переносить на более ранние PDF без первичной проверки шапки и страниц: архив начинается в 2015 году.

### Что является записью

| Логический объект | Гранулярность и строка | Поля, реально видимые в PDF | Подтверждение |
| --- | --- | --- | --- |
| Сводный показатель местных бюджетов | Одна строка на показатель по Российской Федерации и отчётной дате | название показателя, исполнено на две даты, темп изменения; отдельно встречаются доли в процентах | Таблица «Основные показатели…», [с. 2 «Анализа»](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf) |
| Показатель по федеральному округу | Столбец/подпись графика на федеральный округ | название округа, значение на две даты или доля; явного кода округа нет | Графики на [с. 3](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf), [с. 5](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf) и [с. 8](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf) |
| Субъект в выборке профицита/дефицита | Не полный реестр, а список пяти крупнейших значений на слайде | русское название субъекта, дефицит; для дефицитных субъектов — изменение остатков и кредитные средства | [с. 7 «Анализа»](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf) |
| Структура расходов или муниципального долга | Категория на диаграмме по РФ; на с. 8 также разрез федеральных округов | текстовая категория, значение, доля; кода БК/КБК в подписи нет | Расходы — [с. 6](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf), долг — [с. 8](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf) |

Следовательно, строкой выгрузки нельзя делать отдельное муниципальное образование: в проверенных файлах нет перечня муниципалитетов и нет ОКТМО. Базовая гранулярность — вся РФ; дополнительные измерения — федеральный округ и небольшая выборка субъектов.

### Поля записи

| Русское поле | Латинский slug | Тип | Единица / значения | Примечание |
| --- | --- | --- | --- | --- |
| Отчётная дата | reporting_date | date | YYYY-MM-DD | Из титула и шапок «Исполнено на …»; например, 2022-04-01 в [«Анализе»](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf). |
| Сравнительная дата | comparison_date | date или null | YYYY-MM-DD | В таблице с. 2 это аналогичная дата предыдущего года. |
| Уровень географии | geography_level | string | russia, federal_district, subject | Не путать с уровнем бюджета. |
| Наименование географии | geography_name | string | «Российская Федерация», ЦФО, название субъекта | Для субъектов есть только название в выборке на с. 7. |
| Уровень бюджета | budget_level | string | только local в проверенных PDF | Титул и таблица прямо говорят о местных бюджетах. |
| Наименование показателя | metric_name_ru | string | как в PDF | Храните исходную русскую подпись вместе с нормализованным slug. |
| Нормализованный показатель | metric_slug | string | например, revenue_total, tax_revenue, interbudget_transfer, expenditure_total, budget_balance, municipal_debt | Сопоставление строится по подписи, а не по напечатанному коду: кодов нет. |
| Группа показателя | metric_group | string | revenue, transfer, expenditure, balance, debt, debt_service, share | Группы выведены из заголовков и легенд слайдов 2–8. |
| Значение | value | number | обычно rub_billions; для строк-долей — percent | В шапке и на графиках проверенных файлов указано «млрд. руб.»; темпы и доли — проценты. |
| Значение за сравниваемую дату | comparison_value | number или null | та же единица | С. 2 и большинство графиков содержат две даты. |
| Темп изменения | growth_percent | number или null | проценты | На с. 2 это отношение исполнения на текущую дату к предыдущей, а не процентный пункт. |
| Доля | share_percent | number или null | проценты | Для структуры доходов, расходов, трансфертов и долга. |
| Срез / тип периода | period_kind | string | year_to_date или stock_as_of | Доходы, расходы и трансферты подписаны «исполнено на …»; муниципальный долг — остаток на дату. |
| Источник в документе | source_page, source_table | integer, string или null | номер страницы, название таблицы/графика | Нужны для повторной проверки извлечённого числа. |
| Нативный идентификатор субъекта | subject_code, oktmo, okato, inn | всегда null в проверенных PDF | — | Не придумывайте код из названия субъекта. |

Ниже — JSON Schema для одной нормализованной записи. Она намеренно допускает null для чисел, которых нет на конкретном слайде, и не объявляет несуществующие идентификаторы обязательными.

~~~json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Наблюдение из PDF Минфина о местных бюджетах",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "source_file",
    "reporting_date",
    "geography_level",
    "geography_name",
    "budget_level",
    "metric_name_ru",
    "metric_slug",
    "metric_group",
    "value",
    "unit",
    "source_page",
    "extraction_status"
  ],
  "properties": {
    "source_file": {
      "type": "string",
      "description": "Имя локально скачанного PDF; прямой URL хранится отдельно из каталога."
    },
    "reporting_date": {
      "type": "string",
      "format": "date",
      "description": "Отчётная дата (дата среза)."
    },
    "comparison_date": {
      "type": ["string", "null"],
      "format": "date",
      "description": "Аналогичная дата предыдущего года, если она есть в шапке."
    },
    "period_kind": {
      "enum": ["year_to_date", "stock_as_of"]
    },
    "geography_level": {
      "enum": ["russia", "federal_district", "subject"]
    },
    "geography_name": {
      "type": "string"
    },
    "subject_code": {
      "type": ["string", "null"],
      "description": "Заполняется только внешним справочником; PDF его не публикует."
    },
    "budget_level": {
      "const": "local"
    },
    "metric_name_ru": {
      "type": "string"
    },
    "metric_slug": {
      "type": "string",
      "examples": ["revenue_total", "tax_revenue", "municipal_debt"]
    },
    "metric_group": {
      "enum": ["revenue", "transfer", "expenditure", "balance", "debt", "debt_service", "share"]
    },
    "value": {
      "type": ["number", "null"]
    },
    "comparison_value": {
      "type": ["number", "null"]
    },
    "growth_percent": {
      "type": ["number", "null"]
    },
    "share_percent": {
      "type": ["number", "null"]
    },
    "unit": {
      "enum": ["rub_billions", "percent"]
    },
    "source_page": {
      "type": "integer",
      "minimum": 1
    },
    "source_table": {
      "type": ["string", "null"]
    },
    "raw_label": {
      "type": "string",
      "description": "Подпись в PDF до нормализации."
    },
    "extraction_status": {
      "enum": ["native_table", "chart_or_text", "manual_review"]
    }
  }
}
~~~

### Измерения, период и категории

- В обоих проверенных PDF единственный уровень бюджета — **местные бюджеты**, а не консолидированный бюджет субъекта. Формулировка повторяется на титуле и в заголовке таблицы на [с. 2 «Презентации»](https://minfin.gov.ru/common/upload/library/2022/03/main/Prezentatsiya_na_01.01.2022.pdf).
- Для доходов выделены общие, собственные, налоговые и неналоговые доходы; для безвозмездных поступлений — дотации, субсидии, иные межбюджетные трансферты и субвенции ([с. 2](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf)). Для расходов используются текстовые названия разделов, включая образование, общегосударственные вопросы и национальную экономику ([с. 6](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf)); числовых кодов БК/КБК на слайдах нет.
- Для исполнения читайте «на дату» как накопленный с начала года результат, пока шапка конкретного PDF не говорит иного: на с. 2 сопоставлены 01.04.2021 и 01.04.2022. Срез 01.01 в [«Презентации»](https://minfin.gov.ru/common/upload/library/2022/03/main/Prezentatsiya_na_01.01.2022.pdf) отражает итог предыдущего календарного года. Муниципальный долг, напротив, является остатком на дату ([с. 8](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf)).
- Современная часть каталога показывает квартальные срезы 01.01, 01.04, 01.07, 01.10 за 2020–2022 годы; записи 2015–2019 годов встречаются также ежемесячно. Не навязывайте квартальную периодичность всему архиву.

### Ключи связки

В проверенных PDF **нет** ОКТМО, ОКАТО, кода субъекта, ИНН, кода БК или КБК. Поэтому автоматическая стыковка с [XLSX subbud/execute](/data-sources/federal/minfin-subbud-execute), данными Казначейства или ФНС по нативному ключу невозможна.

Допустимый, но внешний шаг — нормализовать лишь опубликованное русское subject_name из выборки на с. 7 к отдельному справочнику субъектов РФ и хранить результат как subject_code с признаком происхождения external_mapping. Он не превращает этот PDF в полный региональный или муниципальный набор и не создаёт ОКТМО. Названия федеральных округов также остаются текстовыми категориями без кода.

### Эвристики имени файла и шапки

~~~python
from datetime import date
from pathlib import Path
from urllib.parse import unquote, urlparse
import re

SLICE_RE = re.compile(
    r"(?<!\d)(?P<day>0[1-9]|[12]\d|3[01])[._-]"
    r"(?P<month>0[1-9]|1[0-2])[._-](?P<year>20\d{2})(?!\d)"
    r"|(?<!\d)(?P<compact>01(?:0[1-9]|1[0-2])20\d{2})(?!\d)"
    r"|(?<!\d)(?P<compact_short>01(?:0[1-9]|1[0-2])\d{2})(?!\d)",
    re.IGNORECASE,
)

def slice_from_filename_or_title(value: str) -> date | None:
    name = unquote(Path(urlparse(value).path).name) if "://" in value else value
    match = SLICE_RE.search(name)
    if not match:
        return None
    if match.group("compact"):
        compact = match.group("compact")
        return date(int(compact[4:8]), int(compact[2:4]), int(compact[:2]))
    if match.group("compact_short"):
        compact = match.group("compact_short")
        return date(2000 + int(compact[4:6]), int(compact[2:4]), int(compact[:2]))
    return date(
        int(match.group("year")),
        int(match.group("month")),
        int(match.group("day")),
    )

def document_kind(filename: str) -> str:
    name = unquote(filename).lower()
    if "prezentatsiya" in name or "презентац" in name:
        return "presentation"
    if "analiz" in name or "анализ" in name:
        return "analysis"
    return "document"

UNIT_RE = re.compile(r"(?i)\b(млрд\.?\s*руб\.?|тыс\.?\s*руб\.?|руб\.?)")

def table_header_hints(page_text: str) -> dict[str, str | None]:
    lower = page_text.lower()
    if "местных бюджетов" in lower:
        budget_scope = "local"
    elif "консолидирован" in lower:
        budget_scope = "consolidated"
    else:
        budget_scope = "unknown"
    unit = UNIT_RE.search(page_text)
    return {
        "budget_scope": budget_scope,
        "unit_text": unit.group(1) if unit else None,
    }
~~~

Для данного источника сначала ищите дату и тип файла в имени, затем подтверждайте их титулом и шапкой с. 2. В проверенных PDF Prezentatsiya и Analiz отличаются именем и датой каталога, но имеют один восьмислайдовый шаблон. Слово «Отчёт» или «Документ» в карточке каталога — отдельная метка сайта, а не надёжный тип вложения.

## Периодичность обновления

Новые карточки документов появляются **по мере публикации** Минфином; у каждой записи на странице указаны даты «Опубликовано» и «Изменено». На дату проверки **18.07.2026** каталог содержит 68 материалов за 2015–2022 годы; наиболее поздняя карточка опубликована 13.05.2022. Перед аналитикой сверяйте **актуальность** раздела и при необходимости дополняйте данными **[Казначейства](/data-sources/federal/roskazna-reports)** и **[ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Ограничения и особенности

- Материалы официального сайта Минфина распространяются на условиях **Creative Commons Attribution 4.0** (блок в подвале страниц `minfin.gov.ru`); при переработке указывайте источник.
- **PDF-презентации** удобны для чтения человеком, но **плохо подходят** для автоматического конвейера без доработки (верстка, сканы, разные шаблоны по годам).
- Показатели в PDF **не обязаны** совпадать с **[XLSX subbud/execute](/data-sources/federal/minfin-subbud-execute)** и **[открытыми наборами Минфина](/data-sources/federal/minfin-opendata)** — сверяйте определение показателя, срез и методику в тексте документа.

## Примеры доступа

Сохранить HTML-страницу каталога для ручного или последующего разбора ссылок «Скачать»:

```bash
curl -sS "https://minfin.gov.ru/ru/perfomance/regions/operational/" -o minfin-regions-operational.html
```

## Примеры работы с данными

### Инвентаризация каталога

Снимок каталога от **18.07.2026** содержит 68 карточек и восемь страниц Ajax-пагинации. В таблице ниже «карточка» ведёт на запись каталога, а «вложение» — на прямой URL, полученный из её ссылки «Скачать». Это именно снимок: прямой URL не является контрактом и при следующей публикации может измениться. Знак «—» в графе изменения означает, что соответствующая карточка каталога не вывела дату «Изменено».

| Заголовок карточки | Опубликовано | Изменено | Метка каталога | Вложение — прямой URL | Размер |
| --- | --- | --- | --- | --- | --- |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.04.2022](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=136138-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.04.2022) | 13.05.2022 | 13.05.2022 | Документ | [Analiz_01.04.2022.pdf](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf) | pdf, 1.76 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.01.2022](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=135674-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.01.2022) | 05.03.2022 | 05.03.2022 | Отчёт | [Prezentatsiya_na_01.01.2022.pdf](https://minfin.gov.ru/common/upload/library/2022/03/main/Prezentatsiya_na_01.01.2022.pdf) | pdf, 1.91 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.10.2021](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=134594-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.10.2021) | 29.10.2021 | 29.10.2021 | Отчёт | [Prezentatsiya_na_01.10.2021.pdf](https://minfin.gov.ru/common/upload/library/2021/10/main/Prezentatsiya_na_01.10.2021.pdf) | pdf, 1.75 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.07.2021](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=134053-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.07.2021) | 09.08.2021 | 09.08.2021 | Отчёт | [Analiz_na_01.07.2021.pdf](https://minfin.gov.ru/common/upload/library/2021/08/main/Analiz_na_01.07.2021.pdf) | pdf, 2.39 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.04.2021](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=133242-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.04.2021) | 30.04.2021 | 30.04.2021 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.04.2021.pdf](https://minfin.gov.ru/common/upload/library/2021/05/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.04.2021.pdf) | pdf, 2.18 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.01.2021](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=132501-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.01.2021) | 03.02.2021 | 03.02.2021 | Отчёт | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.01.2021.pdf](https://minfin.gov.ru/common/upload/library/2021/02/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.01.2021.pdf) | pdf, 2.18 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.10.2020](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=132183-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.10.2020) | 17.12.2020 | 17.12.2020 | Отчёт | [01.10.2020.pdf](https://minfin.gov.ru/common/upload/library/2020/12/main/01.10.2020.pdf) | pdf, 2.16 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.07.2020](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=131277-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.07.2020) | 24.08.2020 | 24.08.2020 | Отчёт | [01.07.2020_goda.pdf](https://minfin.gov.ru/common/upload/library/2020/08/main/01.07.2020_goda.pdf) | pdf, 2.18 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.04.2020](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=130396-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.04.2020) | 22.06.2020 | 22.06.2020 | Отчёт | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.04.2020.pdf](https://minfin.gov.ru/common/upload/library/2020/06/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.04.2020.pdf) | pdf, 2.24 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.01.2020](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=130189-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.01.2020) | 28.02.2020 | 28.02.2020 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.01.2020.pdf](https://minfin.gov.ru/common/upload/library/2020/05/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.01.2020.pdf) | pdf, 2.28 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.10.2019](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=128720-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.10.2019) | 11.11.2019 | 11.11.2019 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.10.2019.pdf](https://minfin.gov.ru/common/upload/library/2019/11/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.10.2019.pdf) | pdf, 0.86 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.09.2019](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=128719-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.09.2019) | 11.11.2019 | 11.11.2019 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.09.2019.pdf](https://minfin.gov.ru/common/upload/library/2019/11/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.09.2019.pdf) | pdf, 0.86 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.08.2019](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=128252-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.08.2019) | 17.09.2019 | 17.09.2019 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.08.2019.pdf](https://minfin.gov.ru/common/upload/library/2019/09/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.08.2019.pdf) | pdf, 1.73 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.07.2019](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=127946-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.07.2019) | 01.08.2019 | 01.08.2019 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.07.2019.pdf](https://minfin.gov.ru/common/upload/library/2019/08/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.07.2019.pdf) | pdf, 1.7 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.06.2019](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=127812-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.06.2019) | 09.07.2019 | 09.07.2019 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.06.2019.pdf](https://minfin.gov.ru/common/upload/library/2019/07/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.06.2019.pdf) | pdf, 1.7 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.04.2019](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=127747-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.04.2019) | 28.06.2019 | 28.06.2019 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.04.2019.pdf](https://minfin.gov.ru/common/upload/library/2019/06/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.04.2019.pdf) | pdf, 1.71 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.03.2019](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=127748-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.03.2019) | 28.06.2019 | 28.06.2019 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.03.2019.pdf](https://minfin.gov.ru/common/upload/library/2019/06/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.03.2019.pdf) | pdf, 1.72 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.02.2019](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=127746-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.02.2019) | 28.06.2019 | 28.06.2019 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01022019.pdf](https://minfin.gov.ru/common/upload/library/2019/06/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01022019.pdf) | pdf, 1.01 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.05.2019](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=127647-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.05.2019) | 13.06.2019 | 13.06.2019 | Документ | [01.05.2019_n.pdf](https://minfin.gov.ru/common/upload/library/2019/06/main/01.05.2019_n.pdf) | pdf, 1.7 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации за 2018 год](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=126757-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_za_2018_god) | 18.02.2019 | 18.02.2019 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_na_01.01.2019.pdf](https://minfin.gov.ru/common/upload/library/2019/02/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_na_01.01.2019.pdf) | pdf, 1.71 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.12.2018](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=126506-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.12.2018) | 11.01.2019 | 11.01.2019 | Документ | [01.12.2018.pdf](https://minfin.gov.ru/common/upload/library/2019/01/main/01.12.2018.pdf) | pdf, 1.73 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.11.2018](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=126280-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.11.2018) | 14.12.2018 | 14.12.2018 | Документ | [01.11.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/12/main/01.11.2018.pdf) | pdf, 1.73 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.10.2018 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=125963-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.10.2018_g.) | 06.11.2018 | 06.11.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_na_01.10.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/11/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_na_01.10.2018.pdf) | pdf, 1.74 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.09.2018](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=124847-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.09.2018) | 18.10.2018 | 18.10.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.09.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/10/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.09.2018.pdf) | pdf, 1.01 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.08.2018 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=124699-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.08.2018_g.) | 06.09.2018 | 14.09.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_na__01.08.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/09/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_na__01.08.2018.pdf) | pdf, 1.71 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.07.2018 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=123551-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.07.2018_g.) | 13.08.2018 | 13.08.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_na_01.07.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/08/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_na_01.07.2018.pdf) | pdf, 1 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.06.2018 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=123010-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.06.2018_g.) | 06.07.2018 | 06.07.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.06.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/07/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.06.2018.pdf) | pdf, 1 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.05.2018 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=122770-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.05.2018_g.) | 01.06.2018 | 01.06.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_v_Rossiyskoy_Federatsii_na__01.05.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/06/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_v_Rossiyskoy_Federatsii_na__01.05.2018.pdf) | pdf, 1.74 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.04.2018](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=122671-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.04.2018) | 07.05.2018 | 14.05.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.04.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/05/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.04.2018.pdf) | pdf, 0.99 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.03.2018 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=122432-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.03.2018_g.) | 04.04.2018 | 04.04.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.03.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/04/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.03.2018.pdf) | pdf, 1 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.02.2018 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=122339-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.02.2018_g.) | 21.03.2018 | 21.03.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.02.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/03/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.02.2018.pdf) | pdf, 0.99 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.01.2018 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=122097-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.01.2018_g.) | 21.02.2018 | 21.02.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.01.2018.pdf](https://minfin.gov.ru/common/upload/library/2018/02/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.01.2018.pdf) | pdf, 1.7 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.12.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=121758-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.12.2017_g.) | 18.01.2018 | 18.01.2018 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.12.2017.pdf](https://minfin.gov.ru/common/upload/library/2018/01/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.12.2017.pdf) | pdf, 1 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.11.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=121371-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.11.2017_g.) | 12.12.2017 | 12.12.2017 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.11.2017.pdf](https://minfin.gov.ru/common/upload/library/2017/12/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.11.2017.pdf) | pdf, 1.73 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.10.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=120106-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.10.2017_g.) | 15.11.2017 | 15.11.2017 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_01102017.pdf](https://minfin.gov.ru/common/upload/library/2017/11/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_01102017.pdf) | pdf, 1.01 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.09.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=119746-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.09.2017_g.) | 09.10.2017 | 09.10.2017 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_01092017_1.pdf](https://minfin.gov.ru/common/upload/library/2017/10/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_01092017_1.pdf) | pdf, 1 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.08.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=119601-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.08.2017_g.) | 27.09.2017 | 27.09.2017 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_01.08.2017.pdf](https://minfin.gov.ru/common/upload/library/2017/09/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_01.08.2017.pdf) | pdf, 1.01 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.07.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=119144-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.07.2017_g.) | 09.08.2017 | 09.08.2017 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.07.2017.pdf](https://minfin.gov.ru/common/upload/library/2017/08/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.07.2017.pdf) | pdf, 1.69 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.06.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=118938-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.06.2017_g.) | 20.07.2017 | 20.07.2017 | Отчёт | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_01.06.2017.pdf](https://minfin.gov.ru/common/upload/library/2017/07/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_01.06.2017.pdf) | pdf, 0.99 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.05.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=118595-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.05.2017_g.) | 13.06.2017 | 13.06.2017 | Отчёт | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.05.2017.pdf](https://minfin.gov.ru/common/upload/library/2017/06/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.05.2017.pdf) | pdf, 1.7 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.04.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=118316-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.04.2017_g.) | 12.05.2017 | 12.05.2017 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.04.2017.pdf](https://minfin.gov.ru/common/upload/library/2017/05/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.04.2017.pdf) | pdf, 1.71 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.03.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=118024-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.03.2017_g.) | 10.04.2017 | 10.04.2017 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.03.2017_1.pdf](https://minfin.gov.ru/common/upload/library/2017/04/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.03.2017_1.pdf) | pdf, 1.7 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.02.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=117964-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.02.2017_g.) | 31.03.2017 | — | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_010217.pdf](https://minfin.gov.ru/common/upload/library/2017/03/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_010217.pdf) | pdf, 1.69 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.01.2017 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=117562-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.01.2017_g.) | 15.02.2017 | — | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.01.2017.pdf](https://minfin.gov.ru/common/upload/library/2017/02/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_RF_-_01.01.2017.pdf) | pdf, 1.71 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.12.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=117123-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.12.2016_g.) | 12.01.2017 | 12.01.2017 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.12.2016.pdf](https://minfin.gov.ru/common/upload/library/2017/01/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.12.2016.pdf) | pdf, 1.73 mb |
| [Данные об исполнении местных бюджетов в Российской Федерации на 01.11.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=116741-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.11.2016_g.) | 06.12.2016 | 06.12.2016 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.11.2016_g_.pdf](https://minfin.gov.ru/common/upload/library/2016/12/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.11.2016_g_.pdf) | pdf, 1.72 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.10.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=116473-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.10.2016_g.) | 09.11.2016 | 09.11.2016 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.10.2016.pdf](https://minfin.gov.ru/common/upload/library/2016/11/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.10.2016.pdf) | pdf, 1.73 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.09.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=116296-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.09.2016_g.) | 17.10.2016 | 17.10.2016 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.09.2016_g.pdf](https://minfin.gov.ru/common/upload/library/2016/10/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.09.2016_g.pdf) | pdf, 1.88 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.08.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=116114-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.08.2016_g.) | 27.09.2016 | 27.09.2016 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.08.2016_g.pdf](https://minfin.gov.ru/common/upload/library/2016/09/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.08.2016_g.pdf) | pdf, 1.91 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.07.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=116056-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.07.2016_g.) | 20.09.2016 | 20.09.2016 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_na_010716.pdf](https://minfin.gov.ru/common/upload/library/2016/09/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_na_010716.pdf) | pdf, 1.85 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.06.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=114581-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.06.2016_g.) | 06.07.2016 | 06.07.2016 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.06.2016.pdf](https://minfin.gov.ru/common/upload/library/2016/07/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.06.2016.pdf) | pdf, 1.89 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.05.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=114412-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.05.2016_g.) | 16.06.2016 | — | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_na_010516.pdf](https://minfin.gov.ru/common/upload/library/2016/06/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_na_010516.pdf) | pdf, 3.4 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.04.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=114413-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.04.2016_g.) | 16.06.2016 | 16.06.2016 | Документ | [Analiz_ispolneniya_mestnykh_budzhetov_na_01.04.2016.pdf](https://minfin.gov.ru/common/upload/library/2016/06/main/Analiz_ispolneniya_mestnykh_budzhetov_na_01.04.2016.pdf) | pdf, 3.35 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.03.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=113947-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.03.2016_g.) | 26.04.2016 | — | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_na_010316.pdf](https://minfin.gov.ru/common/upload/library/2016/06/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_na_010316.pdf) | pdf, 1.89 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.02.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=112911-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.02.2016_g.) | 07.04.2016 | 07.04.2016 | Документ | [Ispolnenie_mestnykh_budzhetov_na_01.02.2016.pdf](https://minfin.gov.ru/common/upload/library/2016/04/main/Ispolnenie_mestnykh_budzhetov_na_01.02.2016.pdf) | pdf, 1.85 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.01.2016 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=111486-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.01.2016_g.) | 11.02.2016 | — | Документ | [oper_dan_sub_010116.pdf](https://minfin.gov.ru/common/upload/library/2016/02/main/oper_dan_sub_010116.pdf) | pdf, 1.58 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.12.2015 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=104986-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.12.2015_g.) | 01.02.2016 | 01.02.2016 | Документ | [Analiz_ispolneniya_mestnykh__budzhetov_po_sost._na_01.12.2015.pdf](https://minfin.gov.ru/common/upload/library/2016/02/main/Analiz_ispolneniya_mestnykh__budzhetov_po_sost._na_01.12.2015.pdf) | pdf, 1.61 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.11.2015 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=94612-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.11.2015_g.) | 07.12.2015 | 07.12.2015 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.11.2015_..pdf](https://minfin.gov.ru/common/upload/library/2015/12/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.11.2015_..pdf) | pdf, 1.56 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.10.2015 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=93443-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.10.2015_g.) | 13.11.2015 | 13.11.2015 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.10.2015_g.pdf](https://minfin.gov.ru/common/upload/library/2015/11/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.10.2015_g.pdf) | pdf, 2.98 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.09.2015 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=75978-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.09.2015_g.) | 01.10.2015 | 01.10.2015 | Документ | [Analiz_ispolneniya_MB_na_01.09.2015.pdf](https://minfin.gov.ru/common/upload/library/2015/10/main/Analiz_ispolneniya_MB_na_01.09.2015.pdf) | pdf, 2.08 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.08.2015 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=69459-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.08.2015_g.) | 08.09.2015 | 08.09.2015 | Документ | [Dannye_ob_ispolnenii_mb_na_010815.pdf](https://minfin.gov.ru/common/upload/library/2015/09/main/Dannye_ob_ispolnenii_mb_na_010815.pdf) | pdf, 1.97 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.07.2015 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=65676-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.07.2015_g.) | 31.07.2015 | 31.07.2015 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_na_010715.pdf](https://minfin.gov.ru/common/upload/library/2015/07/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_na_010715.pdf) | pdf, 1.8 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.06.2015 г.](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=64712-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.06.2015_g.) | 01.07.2015 | 01.07.2015 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_na_010615.pdf](https://minfin.gov.ru/common/upload/library/2015/07/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_na_010615.pdf) | pdf, 1.65 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.05.2015 г](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=64659-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.05.2015_g) | 26.06.2015 | 26.06.2015 | Документ | [Dannye_ob_ispolneniii_mestnykh_budzhetov_po_sostoyaniu_na_010515.pdf](https://minfin.gov.ru/common/upload/library/2015/06/main/Dannye_ob_ispolneniii_mestnykh_budzhetov_po_sostoyaniu_na_010515.pdf) | pdf, 1.77 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.04.2015 г](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=64658-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.04.2015_g) | 26.06.2015 | 26.06.2015 | Документ | [Dannye_ob_ispolneniii_mestnykh_budzhetov_po_sostoyaniu_na_01.04.2015_g.pdf](https://minfin.gov.ru/common/upload/library/2015/06/main/Dannye_ob_ispolneniii_mestnykh_budzhetov_po_sostoyaniu_na_01.04.2015_g.pdf) | pdf, 1.77 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.03.2015 г](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=64657-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.03.2015_g) | 26.06.2015 | 26.06.2015 | Документ | [Dannye_ob_ispolneniii_mestnykh_budzhetov_po_sostoyaniu_na_01.03.2015_g.pdf](https://minfin.gov.ru/common/upload/library/2015/06/main/Dannye_ob_ispolneniii_mestnykh_budzhetov_po_sostoyaniu_na_01.03.2015_g.pdf) | pdf, 1.77 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.02.2015 г](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=64656-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.02.2015_g) | 26.06.2015 | 26.06.2015 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.02.2015_g.pdf](https://minfin.gov.ru/common/upload/library/2015/06/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.02.2015_g.pdf) | pdf, 1.87 mb |
| [Данные об исполнении местных бюджетов по состоянию на 01.01.2015 г](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=64655-dannye_ob_ispolnenii_mestnykh_byudzhetov_po_sostoyaniyu_na_01.01.2015_g) | 26.06.2015 | 26.06.2015 | Документ | [Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.01.2015_g.pdf](https://minfin.gov.ru/common/upload/library/2015/06/main/Dannye_ob_ispolnenii_mestnykh_budzhetov_po_sostoyaniu_na_01.01.2015_g.pdf) | pdf, 1.66 mb |

Структура одной записи каталога для сохранения снимка:

~~~json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Запись каталога PDF Минфина",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "title",
    "catalog_document_type",
    "published_date",
    "catalog_item_url",
    "attachments"
  ],
  "properties": {
    "title": {
      "type": "string"
    },
    "catalog_document_type": {
      "type": ["string", "null"],
      "description": "Метка карточки сайта: «Документ» или «Отчёт»; не тип файла."
    },
    "published_date": {
      "type": ["string", "null"],
      "format": "date"
    },
    "modified_date": {
      "type": ["string", "null"],
      "format": "date"
    },
    "catalog_item_url": {
      "type": "string",
      "format": "uri"
    },
    "attachments": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["label", "url", "format_size"],
        "properties": {
          "label": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "format_size": {
            "type": "string",
            "examples": ["pdf, 1.76 mb"]
          }
        }
      }
    }
  }
}
~~~

Ниже рабочий пример сохраняет HTML и проходит все страницы, не хардкодя имена или URL PDF. Перед первым запуском установите зависимости командой python -m pip install requests beautifulsoup4.

~~~bash
curl -L --fail --silent --show-error --compressed \
  -A "Mozilla/5.0 (compatible; minfin-catalog-parser/1.0)" \
  -H "Accept-Language: ru-RU,ru;q=0.9" \
  "https://minfin.gov.ru/ru/perfomance/regions/operational/" \
  -o minfin-regions-operational.html
~~~

~~~python
from __future__ import annotations

from datetime import datetime
from urllib.parse import urljoin
import json
import requests
from bs4 import BeautifulSoup

CATALOG_URL = "https://minfin.gov.ru/ru/perfomance/regions/operational/"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; minfin-catalog-parser/1.0)",
    "Accept-Language": "ru-RU,ru;q=0.9",
}

def decode_catalog(raw: bytes) -> str:
    # На текущей странице указан UTF-8; fallback нужен для старых ответов/зеркал.
    for encoding in ("utf-8", "cp1251"):
        try:
            text = raw.decode(encoding)
        except UnicodeDecodeError:
            continue
        if "document_card" in text:
            return text
    return raw.decode("utf-8", errors="replace")

def get_soup(session: requests.Session, url: str) -> BeautifulSoup:
    response = session.get(url, timeout=30)
    response.raise_for_status()
    return BeautifulSoup(decode_catalog(response.content), "html.parser")

def parse_date(text: str | None) -> str | None:
    if not text:
        return None
    text = text.strip()
    for prefix in ("Опубликовано:", "Изменено:"):
        if text.startswith(prefix):
            text = text.removeprefix(prefix).strip()
    try:
        return datetime.strptime(text, "%d.%m.%Y").date().isoformat()
    except ValueError:
        return None

def parse_card(card) -> dict:
    title = card.select_one("a.document_title")
    doc_type = card.select_one("a.document_type")
    dates = {"published_date": None, "modified_date": None}
    for node in card.select(".document_info .date"):
        text = node.get_text(" ", strip=True)
        if text.startswith("Опубликовано:"):
            dates["published_date"] = parse_date(text)
        elif text.startswith("Изменено:"):
            dates["modified_date"] = parse_date(text)

    attachments = []
    for file_item in card.select(".files_list a.file_item"):
        attachments.append(
            {
                "label": file_item.select_one(".file_title").get_text(" ", strip=True),
                "url": urljoin(CATALOG_URL, file_item["href"]),
                "format_size": file_item.select_one(".file_info").get_text(" ", strip=True),
            }
        )

    return {
        "title": title.get("title", title.get_text(" ", strip=True)),
        "catalog_document_type": doc_type.get_text(" ", strip=True) if doc_type else None,
        "catalog_item_url": urljoin(CATALOG_URL, title["href"]),
        **dates,
        "attachments": attachments,
    }

def collect_catalog() -> list[dict]:
    with requests.Session() as session:
        session.headers.update(HEADERS)
        first = get_soup(session, CATALOG_URL)
        pager = first.select_one(".ajax-pagination-div a[data-page-count]")
        page_count = int(pager["data-page-count"]) if pager else 1
        pages = [first]
        for page in range(2, page_count + 1):
            pages.append(get_soup(session, "{}?page_65={}".format(CATALOG_URL, page)))

    records = []
    seen = set()
    for soup in pages:
        for card in soup.select("#ajax-pagination-content-10391-65 .document_card"):
            record = parse_card(card)
            if record["catalog_item_url"] not in seen:
                seen.add(record["catalog_item_url"])
                records.append(record)
    return records

records = collect_catalog()
if not records or any(not item["attachments"] for item in records):
    raise RuntimeError("Не найдены карточки или ссылки «Скачать»; проверьте HTML-каталог.")
print(json.dumps(records, ensure_ascii=False, indent=2))
~~~

### Репрезентативные PDF

| Файл | Карточка и размер в каталоге | Метаданные файла | Структура и преобладающий контент |
| --- | --- | --- | --- |
| [Analiz_01.04.2022.pdf](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf) | [«Данные… на 01.04.2022»](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=136138-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.04.2022), «Документ», опубликовано и изменено 13.05.2022, 1.76 mb | 1 849 499 байт, 8 страниц, 720 × 540 pt; PDF создан 13.05.2022 в PowerPoint 2016; metadata title «Налоговые и неналоговые доходы», author «Домбровский Е.А.»; титул даёт срез 01.04.2022 | Титул; сводная таблица; доходы; структура доходов; трансферты; расходы; дефицит/профицит; муниципальный долг. На 6 из 8 страниц преобладают диаграммы, на с. 2 — таблица, на с. 7 — график и таблица; карт нет. |
| [Prezentatsiya_na_01.01.2022.pdf](https://minfin.gov.ru/common/upload/library/2022/03/main/Prezentatsiya_na_01.01.2022.pdf) | [«Данные… на 01.01.2022»](https://minfin.gov.ru/ru/perfomance/regions/operational?id_65=135674-dannye_ob_ispolnenii_mestnykh_byudzhetov_v_rossiiskoi_federatsii_na_01.01.2022), «Отчёт», опубликовано и изменено 05.03.2022, 1.91 mb | 2 000 259 байт, 8 страниц, 720 × 540 pt; PDF создан 05.03.2022 в PowerPoint 2016; те же title и author; титул даёт срез 01.01.2022 | Тот же порядок восьми слайдов и та же вёрстка: титул, одна основная таблица, затем текстовые пояснения и столбчатые/круговые диаграммы; карт нет. |

Это презентационные PDF, поэтому обычного оглавления нет. Слайды 3–8 совмещают русский пояснительный текст и диаграммы; терминология официальная финансовая: доходы, межбюджетные трансферты, субвенции, дефицит/профицит, муниципальный долг. Не принимайте визуально подписанные графики за полноценные таблицы: их числовые подписи могут требовать отдельной ручной проверки.

### Извлечение основной таблицы PDF

Первый рабочий шаг — извлечь нативную таблицу со с. 2. Он не пытается автоматически угадать все числа на диаграммах: для них запись получает статус manual_review.

~~~python
from __future__ import annotations

from datetime import date, datetime
from pathlib import Path
import re
from typing import Any
import pandas as pd
import pdfplumber

DATE_RE = re.compile(r"(?<!\d)(\d{2})\.(\d{2})\.(20\d{2})(?!\d)")

SLUGS = {
    "доходы, всего": ("revenue_total", "revenue"),
    "собственные доходы": ("own_revenue", "revenue"),
    "налоговые и неналоговые доходы": ("tax_and_nontax_revenue", "revenue"),
    "налоговые доходы": ("tax_revenue", "revenue"),
    "неналоговые доходы": ("nontax_revenue", "revenue"),
    "межбюджетные трансферты": ("interbudget_transfer", "transfer"),
    "в том числе: дотации": ("grant", "transfer"),
    "субсидии": ("subsidy", "transfer"),
    "иные межбюджетные трансферты": ("other_interbudget_transfer", "transfer"),
    "другие безвозмездные поступления": ("other_gratuitous_receipts", "revenue"),
    "субвенции": ("subvention", "transfer"),
    "расходы, всего": ("expenditure_total", "expenditure"),
    "расходы на решение вопросов местного значения": ("local_issues_expenditure", "expenditure"),
    "дефицит/профицит": ("budget_balance", "balance"),
}

def parse_pdf_number(value: str | None) -> float | None:
    if not value:
        return None
    value = value.replace("\xa0", "").replace(" ", "").replace(",", ".").strip()
    if value in {"", "-", "—"}:
        return None
    return float(value.rstrip("%"))

def to_date(value: str) -> date:
    return datetime.strptime(value, "%d.%m.%Y").date()

def metric_meta(label: str) -> tuple[str, str]:
    normalized = " ".join(label.lower().split())
    for prefix, result in SLUGS.items():
        if normalized.startswith(prefix):
            return result
    if normalized.startswith("в %"):
        return ("share_of_parent_metric", "share")
    return ("unmapped_metric", "share" if "%" in normalized else "revenue")

def parse_minfin_regions_pdf(path: str | Path) -> list[dict[str, Any]]:
    path = Path(path)
    with pdfplumber.open(path) as pdf:
        if len(pdf.pages) < 2:
            raise ValueError("Ожидался PDF со сводной таблицей на второй странице.")
        page = pdf.pages[1]
        table = page.extract_table()
        if not table or len(table) < 3:
            raise ValueError("Сводная таблица не извлечена; проверьте файл вручную.")

        header = " ".join(
            cell.replace("\n", " ") for row in table[:2] for cell in row if cell
        )
        header_dates = [to_date(".".join(match)) for match in DATE_RE.findall(header)]
        unique_dates = list(dict.fromkeys(header_dates))
        if len(unique_dates) < 2:
            raise ValueError("Не найдены обе даты в шапке таблицы.")
        comparison_date, reporting_date = unique_dates[:2]

        observations = []
        for row in table[2:]:
            row = (row + [None] * 4)[:4]
            raw_label = " ".join((row[0] or "").split())
            if not raw_label:
                continue
            metric_slug, metric_group = metric_meta(raw_label)
            is_percent = raw_label.lower().startswith("в %") or "%" in (row[2] or "")
            observations.append(
                {
                    "source_file": path.name,
                    "reporting_date": reporting_date.isoformat(),
                    "comparison_date": comparison_date.isoformat(),
                    "period_kind": "year_to_date",
                    "geography_level": "russia",
                    "geography_name": "Российская Федерация",
                    "subject_code": None,
                    "budget_level": "local",
                    "metric_name_ru": raw_label,
                    "metric_slug": metric_slug,
                    "metric_group": metric_group,
                    "value": parse_pdf_number(row[2]),
                    "comparison_value": parse_pdf_number(row[1]),
                    "growth_percent": parse_pdf_number(row[3]),
                    "share_percent": parse_pdf_number(row[2]) if is_percent else None,
                    "unit": "percent" if is_percent else "rub_billions",
                    "source_page": 2,
                    "source_table": "Основные показатели местных бюджетов",
                    "raw_label": raw_label,
                    "extraction_status": "native_table",
                }
            )
    return observations

records = parse_minfin_regions_pdf("Analiz_01.04.2022.pdf")
frame = pd.DataFrame(records)
print(frame[["metric_slug", "value", "comparison_value", "growth_percent", "unit"]])
~~~

На проверенном «Анализе» функция возвращает 20 строк со с. 2. Для воспроизводимой сверки проверьте, что для строки «Доходы, всего» получаются 1 132.8 и 1 011.5, а для «Дефицит/профицит» — 59.7 и 58.7. Диаграммы на с. 3–8 и таблица дефицитных субъектов на с. 7 требуют отдельного извлекателя или ручной разметки; не смешивайте эти результаты с нативной таблицей без поля source_page.

## Ограничения при автоматизации

- Это не XLSX [subbud/execute](/data-sources/federal/minfin-subbud-execute): здесь опубликованы презентационные PDF об **исполнении местных бюджетов** с визуальными агрегатами, тогда как тот источник содержит табличные своды по консолидированным бюджетам субъектов. Не переносите значения, уровни бюджета, дату среза или методику из одного контура в другой без проверки.
- PDF содержит текстовый слой в двух проверенных файлах, но архивные шаблоны меняются: имя вложения, число слайдов, объединённые заголовки, подписи осей и расположение таблиц не стабильны. Скан или «развалившаяся» таблица должны переключать обработку на OCR или manual_review, а не на тихое заполнение нулями.
- На с. 3–8 много графиков. Ошибки типичны для десятичной запятой, пробелов-разделителей, процентов, перекрывающихся подписей и 3D-диаграмм. Сумму доходов, расходов и баланс из с. 2 проверяйте арифметически; например, в «Анализе» 1 132.8 − 1 073.1 = 59.7 млрд руб. ([с. 2](https://minfin.gov.ru/common/upload/library/2022/05/main/Analiz_01.04.2022.pdf)).
- При первой загрузке каждого нового PDF вручную сопоставьте URL из свежего HTML-каталога, заголовок и дату титула, единицу «млрд. руб.», уровень «местные бюджеты», две даты в шапке и количество извлечённых строк. Затем отдельно проверьте, не является ли долг остатком на дату вместо накопленного исполнения.
- В подвале проверенной страницы Минфина указана лицензия [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/deed.ru). При использовании указывайте Минфин России, название и дату документа, URL карточки каталога и дату обращения; не выдавайте извлечённую или нормализованную таблицу за исходную официальную выгрузку.

## Сводка для машинной обработки

~~~yaml
primary_url: "https://minfin.gov.ru/ru/perfomance/regions/operational/"
catalog_selector_hint: "#ajax-pagination-content-10391-65 .document_card; .files_list a.file_item[href$='.pdf']; пагинация ?page_65=N"
catalog_snapshot:
  checked_on: "2026-07-18"
  document_count: 68
  coverage: "2015-01-01..2022-04-01 по датам среза в заголовках"
formats: [html, pdf]
update_cadence: "по мере публикации; в карточке документа видны «Опубликовано» и, если есть, «Изменено»"
reporting_slices: ["01.01", "01.04", "01.07", "01.10"]
historical_cadence_note: "в 2015–2019 встречаются и ежемесячные срезы"
budget_scope: "local_budgets"
native_join_keys: []
non_native_identifiers: [oktmo, okato, subject_code, inn, kbk]
possible_external_mapping: ["subject_name из ограниченной выборки на с. 7"]
typical_units: [rub_billions, percent]
parser_libs: [pdfplumber, pypdf, pandas, beautifulsoup4, requests]
known_caveats:
  - "Прямые URL вложений меняются при переработке файла; каждый запуск начинает с HTML-каталога."
  - "Шаблоны PDF различаются по годам; таблица на с. 2 и диаграммы требуют разных извлекателей."
  - "В проверенных PDF нет ОКТМО, ОКАТО, ИНН, кодов субъектов и КБК."
  - "Графики и 3D-диаграммы не дают надёжной машинной таблицы без ручной верификации."
license: "CC BY 4.0; указывать Минфин России и URL исходной карточки"
~~~

## Связанные страницы wiki

- **[Минфин: краткая информация об исполнении консолидированных бюджетов субъектов (subbud/execute, XLSX)](/data-sources/federal/minfin-subbud-execute)** — агрегированные **таблицы** по субъектам в **XLSX** из раздела «Статистика»; не смешивать с PDF из **perfomance/regions** без проверки методики.
- **[Муниципальные бюджеты](/data-sources/federal/municipalnye-byudzhety)** — точки входа к публичным данным **местного** уровня относительно сводов Минфина.
- **[Региональные бюджеты](/data-sources/federal/regionalnye-byudzhety)** — плановый контур и сайты субъектов; дополняет картину относительно **факта** в федеральных сводах.
- **[Казначейство: свод по учреждениям субъектов РФ (местных бюджетов)](/data-sources/federal/roskazna-regional-institutions-execution-summary)** — смежный **федеральный** свод по учреждениям **местных** бюджетов в иной логике и форматах.
- **[Отчёты об исполнении бюджетов (обзор)](/data-sources/federal/otchety-ob-ispolnenii-byudzhetov)** — где в цепочке источников лежит **факт исполнения** относительно плана.
- **[Отчётность об исполнении местных бюджетов](/reporting/municipal-budget-execution)** — регламентированный контур отчётности **местного** уровня.
- **[Уровни бюджета](/glossary/budget-levels)** — разграничение **регионального** и **местного** уровней при интерпретации сводов.

## Не путать с

- **[Минфин: краткая информация об исполнении консолидированных бюджетов субъектов (subbud/execute)](/data-sources/federal/minfin-subbud-execute)** — **другой URL** (`/ru/statistics/subbud/execute/`), формат **XLSX**, акцент на **консолидированных бюджетах субъектов** в табличном виде.
- **[Открытые данные Минфина России](/data-sources/federal/minfin-opendata)** — **реестр наборов** с `list.csv` и паспортами, а не PDF-каталог раздела **perfomance**.

## Частые вопросы

**В:** Можно ли стабильно скачивать последний PDF скриптом по фиксированному URL?

**О:** **Нет**: прямые ссылки на файлы в `/common/upload/library/...` **меняются** при публикации новой редакции. Ориентируйтесь на разбор HTML-каталога или ручное скачивание с проверкой даты документа.

**В:** Достаточно ли этих PDF для сравнения регионов в одной таблице?

**О:** Обычно **удобнее** начать с **[XLSX subbud/execute](/data-sources/federal/minfin-subbud-execute)** или **[выгрузок Казначейства](/data-sources/federal/roskazna-consolidated-subjects-execution)**; PDF здесь — скорее **иллюстративный и методический** слой.
