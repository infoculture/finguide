---
title: >-
  Минфин: краткая информация об исполнении консолидированных бюджетов субъектов
  РФ
sidebar_label: 'Минфин: исполнение консолидированных бюджетов субъектов (subbud/execute)'
tags:
  - data-source
  - federal
  - budget
  - reporting
  - regional
last_updated: 2026-07-18
last_verified: 2026-07-18
slug: /data-sources/federal/minfin-subbud-execute
source_url: 'https://minfin.gov.ru/ru/statistics/subbud/execute/'
data_source_kind: files
jurisdiction: multilevel
access: open
formats:
  - xlsx
status: current
related_information_system: /information-systems/federal/minfinsite
description: >-
  официальные XLSX-ряды Минфина об исполнении консолидированных бюджетов
  субъектов РФ: три агрегированные временные серии по Российской Федерации,
  а не построчные данные по субъектам; пригодны для воспроизводимого чтения
  ячеек, но не содержат ОКТМО, КБК и иных ключей региональной отчётности.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/minfinsite
  - /organizations/minfin
  - /data-sources/federal/minfin-opendata
  - /data-sources/federal/minfin-regions-operational
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/regionalnye-byudzhety
  - /data-sources/federal/roskazna-consolidated-subjects-execution
  - /data-sources/federal/rosstat-gosfin-consolidated-budget-rf
  - /budget-system/regional-budgets
jurisdiction_level: federal
data_completeness: partial
machine_readability: files
legal_significance: official
update_lag: unknown
archive_depth: 'год: 2006–2025; квартал: 2011–1 кв. 2026; месяц: 2011–июнь 2026 в проверенных XLSX'
license_or_terms: cc-by-4.0
rag_priority: medium
relationships:
  - type: operated_by
    target: /organizations/minfin
  - type: published_by
    target: /organizations/minfin
---

# Минфин: краткая информация об исполнении консолидированных бюджетов субъектов РФ

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Консолидированные бюджеты субъектов РФ**, уже сведённые в один агрегированный ряд по **Российской Федерации**; в проверенных файлах нет строк отдельных субъектов |
| Тип доступа | **Файлы по ссылке**: HTML-страница раздела «Статистика → Бюджеты субъектов РФ» со списком документов и кнопкой «Скачать» для каждого **XLSX** |
| Основные форматы | **XLSX**; обёртка — HTML |
| Оператор | Минфин России |
| Режим доступа | Открытый (типовое скачивание без регистрации с официальной страницы) |

Коротко: это три официальных **временных ряда агрегированных показателей** исполнения **[консолидированных бюджетов](/glossary/consolidated-budget)** субъектов — месячный, квартальный и годовой. Они пригодны для анализа общей динамики по РФ, но не для сравнения регионов: в трёх проверенных XLSX отсутствуют названия субъектов, ОКТМО, ОКАТО, КБК, ИНН и строки по отдельным регионам. Для регламентированной отчётности по субъектам используйте **[консолидированные бюджеты субъектов на сайте Казначейства](/data-sources/regional/consolidated-budgets)** и **[форму 0503317](/reporting/0503317)**.

## Описание

Карточка описывает витрину **[Краткая информация об исполнении бюджетов субъектов Российской Федерации](https://minfin.gov.ru/ru/statistics/subbud/execute/)**: на странице перечислены документы с датами публикации и ссылками на выгрузки. На дату проверки **18.07.2026** HTML-каталог содержал ровно три карточки — ежемесячную, ежеквартальную и ежегодную; элемента постраничной навигации в полученном HTML нет. Каждая карточка даёт один XLSX с накопленным историческим рядом, а не новый файл на каждую дату.

- **ежемесячная** краткая информация: накопленный с начала года ряд за 2011–июнь 2026;
- **ежеквартальная** краткая информация: накопленный с начала года ряд от 1 квартала 2011 до 1 квартала 2026;
- **ежегодная** краткая информация: финансовые годы 2006–2025.

Сюда **не** входят **[открытые наборы Минфина](/data-sources/federal/minfin-opendata)** из каталога с `list.csv` и паспортами `meta.csv` — раздел **subbud/execute** — отдельная **статистическая** подборка на сайте ведомства, без включения в машинный реестр открытых данных того же формата.

## Оператор

**Минфин России** — канонический URL раздела: https://minfin.gov.ru/ru/statistics/subbud/execute/

- Карточка ИС: **[Сайт Министерства финансов РФ](/information-systems/federal/minfinsite)** — публикация материалов раздела «Статистика» и вложений к документам.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Страница раздела (список документов, «Скачать» для каждого файла) | https://minfin.gov.ru/ru/statistics/subbud/execute/ | HTML; вложения **XLSX** |
| Родительский раздел «Бюджеты субъектов Российской Федерации» | https://minfin.gov.ru/ru/statistics/subbud/ | HTML (навигация по смежным материалам) |

Прямые URL файлов **XLSX** при обновлении вложений **меняются**; для автоматизации ориентируйтесь на **актуальную ссылку «Скачать»** в карточке документа на странице раздела.

## Объекты данных и показатели

Проверка трёх вложений 18.07.2026 показала, что строка данных — не субъект РФ, а **показатель × отчётный период** в общероссийском агрегированном ряду. В каждом XLSX один лист: `месяц`, `квартал` или `год`.

- В колонке `B` находятся русские подписи показателей, например «Доходы, всего», «Расходы, всего» и «Дефицит (-)/Профицит (+)»; в строке 3 после колонок `A:B` идут периоды.
- Разделы I–IV отделяют доходы, расходы, дефицит/профицит и источники финансирования дефицита. Строки «РАЗДЕЛ I» и «в т.ч.» — служебные заголовки, не наблюдения.
- В заголовке `A2` всех трёх файлов указано `млрд руб.`. Долей в процентах, темпов роста и сравниваемой даты отдельными полями нет.
- В проверенных файлах **нет** 89 строк субъектов, ОКТМО, ОКАТО, кодов субъектов, ИНН, КБК или регистрационных номеров. Поэтому это не микроданные и не таблица «субъект × статья».

## Структура данных

Ниже зафиксирован фактически проверенный шаблон трёх XLSX, скачанных 18.07.2026. Он описывает агрегированные временные ряды; не следует подменять им структуру построчной отчётности Казначейства.

### Что является записью

| Логический объект | Гранулярность и строка | Поля, реально видимые в XLSX | Подтверждение (лист, ячейка) |
| --- | --- | --- | --- |
| Агрегированный показатель исполнения | Одна числовая ячейка на **показатель × период** для всей РФ; географическое измерение фиксировано | № п/п, русская подпись показателя, значение в млрд руб., период из строки 3 | `месяц`: `B5` «Доходы, всего», `GF3` `июнь.26 *`, `GF5` `12438.5516441863` |
| Годовой агрегированный показатель | Та же строка показателя, столбец — финансовый год | № п/п, показатель, год, значение | `год`: `B13` «Расходы, всего», `V3` `2025`, `V13` `27397.247380059198` |
| Раздел таблицы | Заголовок перед группой строк; **не** нормализуется как запись | «РАЗДЕЛ I» … «РАЗДЕЛ IV», «в т.ч.» | `месяц`: `B4`, `B8`, `B12`, `B28`, `B30` |
| Субъект РФ | В проверенных XLSX отсутствует: нет строки, отдельного листа или кодового столбца | отсутствует | все три листа имеют только колонки `A:B` и временные колонки; например, `месяц!A3:GF3` |

Следовательно, ожидаемая гранулярность «субъект × статья × дата» здесь не подтверждается. Субъектный уровень заложен в **предмете агрегации** («консолидированные бюджеты субъектов»), но не представлен как ось данных.

### Поля записи

| Русское поле | Латинский slug | Тип | Единица / значения | Примечание |
| --- | --- | --- | --- | --- |
| Имя файла | `source_file` | string | имя XLSX | Например, `Prilozhenie_6_dannye_112-114_—_mes.xlsx`; URL берётся из каталога. |
| Отчётная дата / период | `reporting_date` | date | `YYYY-MM-DD` | Из строки 3: `июнь.26 *` → `2026-06-01`; `1 кв.2026` → `2026-03-31`; `2025` → `2025-12-31`. |
| Сравнительная дата | `comparison_date` | null | отсутствует | В трёх листах нет отдельной второй даты или сравнительной колонки. |
| Тип периода | `period_kind` | string | `year_to_date`, `financial_year` | `месяц` и `квартал` — накопленный итог; `год` — финансовый год. `stock_as_of` не встречался. |
| Уровень и имя географии | `geography_level`, `geography_name` | string | только `russia`, `Российская Федерация` | Нативного разреза субъектов нет. |
| Уровень бюджета | `budget_level` | string | `consolidated_subject` | Из `A2`: «консолидированных бюджетов субъектов РФ». |
| Код субъекта / ОКТМО / ОКАТО / ИНН | `subject_code`, `oktmo`, `okato`, `inn` | null | отсутствуют | Не придумывайте их из названия: названий субъектов также нет. |
| Наименование показателя | `metric_name_ru` | string | исходная подпись `B` | Например, `месяц!B5` — «Доходы, всего». |
| Нормализованный показатель и группа | `metric_slug`, `metric_group` | string | `revenue_total`, `expenditure_total`, `budget_balance`; `revenue`, `expenditure`, `balance`, `financing`, `other` | Нормализация подписи, не опубликованный Минфином код. |
| Значение | `value` | number | `rub_billions` | Значение конкретной ячейки, например `месяц!GF5`. |
| Значение сравнения / темп / доля | `comparison_value`, `growth_percent`, `share_percent` | null | отсутствуют | Файл содержит ряд периодов, а не отдельное поле сравнения, процентов или долей. |
| Единица | `unit` | string | `rub_billions` | Указана в `A2`: «млрд руб.». |
| Происхождение ячейки | `source_sheet`, `source_header`, `source_cell` | string | `месяц` / `квартал` / `год`, исходная подпись, адрес Excel | Например, `месяц`, `июнь.26 *`, `GF5`. |
| Статус извлечения | `extraction_status` | string | `native_xlsx_cell`, `manual_review` | Для проверенной числовой ячейки — `native_xlsx_cell`. |

~~~json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Нормализованное наблюдение из XLSX subbud/execute",
  "type": "object",
  "additionalProperties": false,
  "required": ["source_file", "reporting_date", "period_kind", "geography_level", "geography_name", "budget_level", "metric_name_ru", "metric_slug", "metric_group", "value", "unit", "source_sheet", "source_header", "source_cell", "extraction_status"],
  "properties": {
    "source_file": {"type": "string", "description": "Имя скачанного XLSX; URL хранится в записи HTML-каталога."},
    "reporting_date": {"type": "string", "format": "date", "description": "Период из строки 3: например месяц!GF3 «июнь.26 *» → 2026-06-01."},
    "comparison_date": {"type": "null", "description": "В листах месяц, квартал и год отдельная сравниваемая дата отсутствует."},
    "period_kind": {"enum": ["year_to_date", "financial_year"], "description": "year_to_date для месяц/квартал с текстом A2 «накопленным итогом с начала года»; financial_year для год."},
    "geography_level": {"const": "russia", "description": "Фиксированный охват листа; субъектных строк в месяц!A3:GF3 нет."},
    "geography_name": {"const": "Российская Федерация", "description": "Нормализованное имя охвата агрегированного ряда."},
    "budget_level": {"const": "consolidated_subject", "description": "Уровень из A2: консолидированные бюджеты субъектов РФ."},
    "subject_code": {"type": "null", "description": "В XLSX отсутствует код субъекта."},
    "oktmo": {"type": "null", "description": "В XLSX отсутствует ОКТМО."},
    "okato": {"type": "null", "description": "В XLSX отсутствует ОКАТО."},
    "inn": {"type": "null", "description": "В XLSX отсутствует ИНН."},
    "metric_name_ru": {"type": "string", "description": "Исходная подпись из B, например месяц!B5 «Доходы, всего»."},
    "metric_slug": {"type": "string", "description": "Нормализация русской подписи без приписывания КБК."},
    "metric_group": {"enum": ["revenue", "expenditure", "balance", "financing", "other"], "description": "Группа по подписи и разделу, не код классификации."},
    "value": {"type": "number", "description": "Число из исходной ячейки; например 12438.5516441863 из месяц!GF5, млрд руб."},
    "comparison_value": {"type": "null", "description": "Отдельного значения сравнения нет."},
    "growth_percent": {"type": "null", "description": "Отдельного темпа роста нет."},
    "share_percent": {"type": "null", "description": "Отдельной доли в процентах нет."},
    "unit": {"const": "rub_billions", "description": "Единица из A2 проверенных листов: «млрд руб.»."},
    "source_sheet": {"enum": ["месяц", "квартал", "год"], "description": "Русское имя единственного листа XLSX."},
    "source_header": {"type": "string", "description": "Исходная подпись периода из строки 3, например квартал!BK3 «1 кв.2026»."},
    "source_cell": {"type": "string", "pattern": "^[A-Z]+[1-9][0-9]*$", "description": "Адрес ячейки значения, например год!V33."},
    "extraction_status": {"enum": ["native_xlsx_cell", "manual_review"], "description": "Прямое чтение числовой ячейки либо проверка изменившегося макета вручную."}
  }
}
~~~

### Измерения, период и категории

- Заголовок `A2` задаёт уровень «консолидированных бюджетов субъектов Российской Федерации». **[Консолидированный бюджет субъекта](/glossary/consolidated-budget)** сводит бюджет субъекта и включённые по методике местные бюджеты с исключением внутренних перечислений; здесь этот уровень уже представлен суммарно по РФ, не по регионам.
- Реальные доходные строки: «Доходы, всего», «Безвозмездные поступления от других бюджетов бюджетной системы Российской Федерации», «Собственные доходы», «Налог на прибыль», «Налог на доходы физических лиц», «Прочие». Самостоятельных строк «дотации», «субсидии» и «субвенции» в проверенных XLSX нет.
- В расходах есть «Расходы, всего» и функциональные статьи от «Общегосударственных вопросов» до «Межбюджетных трансфертов общего характера…»; отдельно показаны баланс и источники финансирования дефицита.
- `месяц` и `квартал` прямо названы накопленными с начала года. Их заголовки — месяцы/кварталы, не две даты для сравнения. `год` содержит финансовые годы 2006–2025. Исходная подпись периода должна сохраняться наряду с нормализованной датой.
- Единица абсолютных значений — **млрд руб.**; процентных столбцов, долей и темпов роста нет.

### Ключи связки

Нативных ключей для региональной стыковки здесь **нет**: `ОКТМО`, `ОКАТО`, `subject_code`, `ИНН`, `КБК`, регномер и русское название отдельного субъекта отсутствуют. Автоматическая стыковка с региональными наборами по нативному ключу невозможна, а внешний справочник названий субъектов применять не к чему.

- **[Минфин: данные по исполнению бюджетов субъектов РФ и местных бюджетов (PDF)](/data-sources/federal/minfin-regions-operational)** — другой материал Минфина; не переносите из него значения или методику в этот XLSX.
- **[Исполнение консолидированных бюджетов субъектов — Казначейство](/data-sources/federal/roskazna-consolidated-subjects-execution)** и **[форма 0503317](/reporting/0503317)** — регламентированный контур: его субъектные идентификаторы проверяют по собственным файлам, не достраивают из `subbud/execute`.
- **[Региональные бюджеты](/data-sources/federal/regionalnye-byudzhety)** — плановый контур; сопоставление возможно лишь после внешнего выбора показателя и периода.
- **[Росстат: консолидированный бюджет РФ](/data-sources/federal/rosstat-gosfin-consolidated-budget-rf)** — самостоятельный макроисточник; связывайте с ним только по проверенным названию показателя и периоду.

### Эвристики имени файла и шапки

Имена текущих вложений (`…_mes.xlsx`, `…_Kvartal.xlsx`, `…_god.xlsx`) не содержат отчётной даты: её нужно брать из строки 3. Функции ниже сначала распознают дату, если она всё же есть в имени/URL, затем подтверждают тип и единицу реальной шапкой. При нераспознанном заголовке извлечение должно остановиться.

~~~python
from datetime import date
from pathlib import Path
from urllib.parse import unquote, urlparse
import re

DATE_RE = re.compile(
    r"(?<!\d)(?P<day>0[1-9]|[12]\d|3[01])[._-](?P<month>0[1-9]|1[0-2])[._-](?P<year>20\d{2})(?!\d)"
    r"|(?<!\d)(?P<compact>(?:0[1-9]|[12]\d|3[01])(?:0[1-9]|1[0-2])20\d{2})(?!\d)", re.I
)

def date_from_filename_or_url(value: str) -> date | None:
    name = unquote(Path(urlparse(value).path).name) if "://" in value else value
    match = DATE_RE.search(name)
    if not match:
        return None
    if match.group("compact"):
        text = match.group("compact")
        return date(int(text[4:]), int(text[2:4]), int(text[:2]))
    return date(int(match.group("year")), int(match.group("month")), int(match.group("day")))

def document_kind(filename_or_url: str, catalog_title: str = "") -> str:
    text = f"{unquote(filename_or_url)} {catalog_title}".lower()
    if any(x in text for x in ("ежемесяч", "_mes", "месяц")):
        return "monthly"
    if any(x in text for x in ("ежекварт", "kvartal", "квартал")):
        return "quarterly"
    if any(x in text for x in ("ежегод", "_god", "год")):
        return "annual"
    return "unknown"

def header_hints(sheet) -> dict[str, str | None]:
    text = " ".join(str(sheet.cell(row, 1).value or "") for row in (1, 2)).lower()
    return {
        "budget_scope": "consolidated_subject_budgets" if "консолидированных бюджетов субъектов" in text else None,
        "unit": "rub_billions" if "млрд" in text and "руб" in text else None,
        "sheet_kind": document_kind(sheet.title),
    }
~~~

## Примеры работы с данными

### Инвентаризация каталога

HTML-снимок, полученный при проверке, сохранён как `/tmp/minfin-subbud-execute-2026-07-18.html`. В нём нет пагинатора, поэтому 8–12 архивных карточек выбрать нельзя: раздел фактически отдал **три** актуальные карточки, по одной каждого типа. Не дополняйте этот список предполагаемыми архивными URL.

| Заголовок карточки | Опубликовано / изменено | Метка каталога | Прямая ссылка на вложение | Размер |
| --- | --- | --- | --- | --- |
| [Краткая ежемесячная информация…](https://minfin.gov.ru/ru/statistics/subbud/execute?id_57=88391-kratkaya_ezhemesyachnaya_informatsiya_ob_ispolnenii_konsolidirovannykh_byudzhetov_subektov_rossiiskoi_federatsii_mlrd._rub._nakopleno_s_nachala_goda) | 09.07.2026 / 09.07.2026 | Документ; «Бюджеты субъектов РФ», «Статистика» | [Prilozhenie_6_dannye_112-114_—_mes.xlsx](https://minfin.gov.ru/common/upload/library/2026/07/main/Prilozhenie_6_dannye_112-114_—_mes.xlsx) | `xlsx, 98.5 kb` в каталоге; скачано 100 864 байта |
| [Краткая ежеквартальная информация…](https://minfin.gov.ru/ru/statistics/subbud/execute?id_57=90142-kratkaya_ezhekvartalnaya_informatsiya_ob_ispolnenii_konsolidirovannykh_byudzhetov_subektov_rossiiskoi_federatsii_mlrd_rub._nakopleno_s_nachala_goda) | 18.05.2026 / 18.05.2026 | Документ; «Бюджеты субъектов РФ», «Статистика» | [6_dannye_112-114_—_Kvartal.xlsx](https://minfin.gov.ru/common/upload/library/2026/05/main/6_dannye_112-114_—_Kvartal.xlsx) | `xlsx, 42.31 kb` в каталоге; скачано 43 324 байта |
| [Краткая ежегодная информация…](https://minfin.gov.ru/ru/statistics/subbud/execute?id_57=90143-kratkaya_ezhegodnaya_informatsiya_ob_ispolnenii_konsolidirovannykh_byudzhetov_subektov_rossiiskoi_federatsii_mlrd_rub.) | 05.05.2026 / 05.05.2026 | Документ; «Бюджеты субъектов РФ», «Статистика» | [Prilozhenie_6_dannye_112-114_—_god.xlsx](https://minfin.gov.ru/common/upload/library/2026/05/main/Prilozhenie_6_dannye_112-114_—_god.xlsx) | `xlsx, 22.21 kb` в каталоге; скачано 22 748 байт |

Реальный блок карточек — `#ajax-pagination-content-10818-57`; число `57` используется и в параметре карточки `id_57`. В снимке не найдено ни `.ajax-pagination-div`, ни параметра `page_…`: парсер не подставляет `page_65` из другого раздела, а извлекает параметр только если он появится в HTML.

~~~json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Запись HTML-каталога Minfin subbud/execute",
  "type": "object",
  "additionalProperties": false,
  "required": ["title", "catalog_item_url", "attachments"],
  "properties": {
    "title": {"type": "string"},
    "catalog_document_type": {"type": ["string", "null"]},
    "published_date": {"type": ["string", "null"], "format": "date"},
    "modified_date": {"type": ["string", "null"], "format": "date"},
    "catalog_item_url": {"type": "string", "format": "uri"},
    "attachments": {
      "type": "array", "minItems": 1,
      "items": {
        "type": "object", "additionalProperties": false,
        "required": ["label", "url", "format_size"],
        "properties": {
          "label": {"type": "string"},
          "url": {"type": "string", "format": "uri"},
          "format_size": {"type": "string", "examples": ["xlsx, 98.5 kb"]}
        }
      }
    }
  }
}
~~~

~~~bash
curl -L --fail --silent --show-error --compressed \
  -A "Mozilla/5.0 (compatible; minfin-subbud-catalog-parser/1.0)" \
  -H "Accept-Language: ru-RU,ru;q=0.9" \
  "https://minfin.gov.ru/ru/statistics/subbud/execute/" \
  -o minfin-subbud-execute.html
~~~

~~~python
from __future__ import annotations

from datetime import datetime
from urllib.parse import parse_qs, urlencode, urljoin, urlparse, urlunparse
import json
import re
import requests
from bs4 import BeautifulSoup

CATALOG_URL = "https://minfin.gov.ru/ru/statistics/subbud/execute/"
CATALOG_SELECTOR = "#ajax-pagination-content-10818-57 .document_card"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; minfin-subbud-catalog-parser/1.0)", "Accept-Language": "ru-RU,ru;q=0.9"}

def parse_date(value: str | None) -> str | None:
    if not value:
        return None
    value = re.sub(r"^(Опубликовано|Изменено):\s*", "", value.strip())
    try:
        return datetime.strptime(value, "%d.%m.%Y").date().isoformat()
    except ValueError:
        return None

def get_soup(session: requests.Session, url: str) -> BeautifulSoup:
    response = session.get(url, timeout=30)
    response.raise_for_status()
    return BeautifulSoup(response.content, "html.parser")

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
    attachments = [
        {"label": link.select_one(".file_title").get_text(" ", strip=True),
         "url": urljoin(CATALOG_URL, link["href"]),
         "format_size": link.select_one(".file_info").get_text(" ", strip=True)}
        for link in card.select(".files_list a.file_item")
    ]
    return {"title": title.get("title", title.get_text(" ", strip=True)),
            "catalog_document_type": doc_type.get_text(" ", strip=True) if doc_type else None,
            "catalog_item_url": urljoin(CATALOG_URL, title["href"]), **dates, "attachments": attachments}

def page_urls(first: BeautifulSoup) -> list[str]:
    # 18.07.2026 список пуст: каталог состоит из первой страницы.
    urls = [urljoin(CATALOG_URL, a["href"]) for a in first.select("a[href*='page_']")]
    pages = [(key, int(value[0])) for url in urls for key, value in parse_qs(urlparse(url).query).items()
             if key.startswith("page_") and value and value[0].isdigit()]
    if not pages:
        return [CATALOG_URL]
    key, maximum = pages[0][0], max(page for _, page in pages)
    parsed = urlparse(CATALOG_URL)
    return [urlunparse(parsed._replace(query=urlencode({key: page}))) for page in range(1, maximum + 1)]

def collect_catalog() -> list[dict]:
    with requests.Session() as session:
        session.headers.update(HEADERS)
        first = get_soup(session, CATALOG_URL)
        soups = [first] + [get_soup(session, url) for url in page_urls(first)[1:]]
    records, seen = [], set()
    for soup in soups:
        for card in soup.select(CATALOG_SELECTOR):
            record = parse_card(card)
            if record["catalog_item_url"] not in seen:
                seen.add(record["catalog_item_url"])
                records.append(record)
    if not records or any(not item["attachments"] for item in records):
        raise RuntimeError("Не найдены карточки или ссылки «Скачать»; проверьте HTML-каталог.")
    return records

print(json.dumps(collect_catalog(), ensure_ascii=False, indent=2))
~~~

### Репрезентативные XLSX

| Файл | Карточка и размер | Метаданные / лист | Структура и преобладающий контент |
| --- | --- | --- | --- |
| [месячный XLSX](https://minfin.gov.ru/common/upload/library/2026/07/main/Prilozhenie_6_dannye_112-114_—_mes.xlsx) | опубликован и изменён 09.07.2026; `xlsx, 98.5 kb` | 100 864 байта; 1 лист `месяц`; 42 × 188 | `A3:B3` — «№ п/п», «Показатель»; `C3:GF3` — месяцы 2011–июнь 2026. Весь лист уже агрегирован по РФ; субъектов и кодов нет. |
| [квартальный XLSX](https://minfin.gov.ru/common/upload/library/2026/05/main/6_dannye_112-114_—_Kvartal.xlsx) | опубликован и изменён 18.05.2026; `xlsx, 42.31 kb` | 43 324 байта; 1 лист `квартал`; 42 × 63 | `C3:BK3` — от `1 кв.2011` до `1 кв.2026`. Шаблон показателей тот же; нет пары дат и строк субъектов. |
| [годовой XLSX](https://minfin.gov.ru/common/upload/library/2026/05/main/Prilozhenie_6_dannye_112-114_—_god.xlsx) | опубликован и изменён 05.05.2026; `xlsx, 22.21 kb` | 22 748 байт; 1 лист `год`; 48 × 22 | `C3:V3` — годы 2006–2025; есть четыре раздела и сноска об изменении функциональной классификации для ранних лет. |

Объединены только служебные ячейки заголовка (`A1:B1`, `A2:B2`) и сноски; числовая часть читается как обычные ячейки. Предупреждение `openpyxl` об неизвестном расширении не меняет результат чтения, но исходный файл этой библиотекой перезаписывать не следует.

### Чтение XLSX и нормализация

Код отражает реальную структуру: один лист, заголовок в строке 3, показатели в `B`, значения по периодам. Он не создаёт субъектов и не ищет несуществующую вторую дату. Установите зависимость: `python -m pip install openpyxl`.

~~~python
from __future__ import annotations

from datetime import date, datetime
from pathlib import Path
from typing import Any
import re
from openpyxl import load_workbook
from openpyxl.utils import get_column_letter

MONTHS = {"янв": 1, "фев": 2, "мар": 3, "апр": 4, "май": 5, "июн": 6, "июл": 7, "авг": 8, "сен": 9, "окт": 10, "ноя": 11, "дек": 12}
QUARTER_RE = re.compile(r"(?P<q>[1-4])\s*кв\.?\s*(?P<year>20\d{2})", re.I)
MONTH_RE = re.compile(r"(?P<month>[а-яё]+)\.?\s*(?P<year>\d{2})", re.I)
SLUGS = {
    "Доходы, всего": ("revenue_total", "revenue"),
    "Безвозмездные поступления от других бюджетов бюджетной системы Российской Федерации": ("interbudgetary_receipts", "revenue"),
    "Собственные доходы (стр.(1) - стр.(1.1.))": ("own_revenue", "revenue"),
    "Налог на прибыль": ("corporate_income_tax", "revenue"),
    "Налог на доходы физических лиц": ("personal_income_tax", "revenue"),
    "Расходы, всего": ("expenditure_total", "expenditure"),
    "Дефицит (-)/Профицит (+)": ("budget_balance", "balance"),
    "Источники финансирования дефицита": ("deficit_financing", "financing"),
}
SECTION_LABELS = {"РАЗДЕЛ I", "РАЗДЕЛ II", "РАЗДЕЛ III", "РАЗДЕЛ IV", "в т.ч."}

def period_from_header(value: object) -> date:
    if isinstance(value, datetime):
        return value.date()
    if isinstance(value, int) and 2000 <= value <= 2100:
        return date(value, 12, 31)
    text = str(value).strip().lower()
    if match := QUARTER_RE.search(text):
        q = int(match.group("q"))
        return date(int(match.group("year")), q * 3, (31, 30, 30, 31)[q - 1])
    if match := MONTH_RE.search(text):
        number = next((n for prefix, n in MONTHS.items() if match.group("month").startswith(prefix)), None)
        if number:
            return date(2000 + int(match.group("year")), number, 1)
    raise ValueError(f"Нераспознанный заголовок периода: {value!r}")

def parse_subbud_xlsx(path: str | Path) -> list[dict[str, Any]]:
    path = Path(path)
    workbook = load_workbook(path, data_only=True, read_only=False)
    if len(workbook.sheetnames) != 1:
        raise ValueError(f"Ожидался один лист, получено: {workbook.sheetnames}")
    sheet = workbook.active
    kinds = {"месяц": "year_to_date", "квартал": "year_to_date", "год": "financial_year"}
    if sheet.title not in kinds or "консолидированных бюджетов субъектов" not in str(sheet["A2"].value).lower():
        raise ValueError("Не подтверждены лист или заголовок A2; требуется manual_review.")
    records = []
    for column in range(3, sheet.max_column + 1):
        header = sheet.cell(3, column).value
        for row in range(4, sheet.max_row + 1):
            label, value = sheet.cell(row, 2).value, sheet.cell(row, column).value
            if not isinstance(label, str) or label.strip() in SECTION_LABELS or not isinstance(value, (int, float)):
                continue
            slug, group = SLUGS.get(label.strip(), ("unmapped_metric", "other"))
            records.append({
                "source_file": path.name, "reporting_date": period_from_header(header).isoformat(),
                "comparison_date": None, "period_kind": kinds[sheet.title],
                "geography_level": "russia", "geography_name": "Российская Федерация",
                "budget_level": "consolidated_subject", "subject_code": None, "oktmo": None,
                "okato": None, "inn": None, "metric_name_ru": label.strip(),
                "metric_slug": slug, "metric_group": group, "value": float(value),
                "comparison_value": None, "growth_percent": None, "share_percent": None,
                "unit": "rub_billions", "source_sheet": sheet.title,
                "source_header": str(header), "source_cell": f"{get_column_letter(column)}{row}",
                "extraction_status": "native_xlsx_cell",
            })
    if not records:
        raise RuntimeError("Не извлечены числовые ячейки; проверьте макет XLSX вручную.")
    return records

records = parse_subbud_xlsx("Prilozhenie_6_dannye_112-114_—_mes.xlsx")
print(records[-1])
~~~

Числовая сверка на исходных ячейках подтверждает, что баланс — это доходы минус расходы. В месячном файле `месяц!GF5` = **12 438.5516441863**, `GF13` = **12 598.8606947714**, `GF29` = **−160.3090505850996** млрд руб.; `GF5 − GF13 = GF29`. В годовом: за 2024 `год!U5 − U13 = U33` — **24 621.4995373921 − 24 919.30315202 = −297.80361462789733**, за 2025 `V5 − V13 = V33` — **25 858.756899381602 − 27 397.247380059198 = −1 538.4904806775958** млрд руб.

## Ограничения при автоматизации

- Прямой URL, имя и размер вложения — свойства текущей HTML-карточки; каждый запуск начинает со свежего каталога. В снимке 18.07.2026 пагинации нет, но парсер не предполагает, что так будет всегда.
- Исторические шапки содержат сноски и меняющиеся подписи (`янв.23 **`, `июнь.26 *`, `2 кв.2024 **`). Сохраняйте `source_header` и не заменяйте его только нормализованной датой.
- В шапке есть объединённые ячейки, в данных — строки-разделители и примечания. При новом листе, неизвестном периоде или несовпадении `A2` переключайтесь на `manual_review`.
- В файлах нет субъектных строк и нативных идентификаторов. Нельзя разложить сумму по РФ на 89 субъектов, связать её с ОКТМО/КБК или выдать за **[0503317](/reporting/0503317)**.
- В подвале проверенной страницы Минфина указана лицензия [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/deed.ru). При повторном использовании указывайте Минфин России, исходную карточку, вложение и дату обращения.

## Сводка для машинной обработки

~~~yaml
primary_url: "https://minfin.gov.ru/ru/statistics/subbud/execute/"
catalog_selector_hint: "#ajax-pagination-content-10818-57 .document_card; .files_list a.file_item[href$='.xlsx']; в снимке 2026-07-18 пагинация и page_* отсутствуют"
catalog_snapshot:
  checked_on: "2026-07-18"
  document_count: 3
  coverage: "месячный 2011–июнь 2026; квартальный 2011–1 кв. 2026; годовой 2006–2025"
formats: [html, xlsx]
update_cadence: "три обновляемых временных ряда; фактическая публикация и изменение видны в карточках HTML"
reporting_slices: ["месяц", "квартал", "год"]
budget_scope: "consolidated_subject_budgets aggregated for Russia"
native_join_keys: []
non_native_identifiers: [oktmo, okato, subject_code, inn, kbk]
typical_units: [rub_billions]
parser_libs: [openpyxl, pandas, beautifulsoup4, requests]
known_caveats:
  - "В проверенных XLSX нет строк субъектов: одна ячейка означает показатель × период для всей РФ."
  - "Нет ОКТМО, ОКАТО, кода субъекта, ИНН, КБК, comparison_value, процентов и второго сравниваемого периода."
  - "В шапках и сносках меняются подписи периодов; исходный source_header следует сохранять."
  - "Прямые URL вложений не следует считать постоянными: сначала читать свежий HTML-каталог."
license: "CC BY 4.0; указывать Минфин России, исходную карточку и вложение"
~~~

## Периодичность обновления

Публикации привязаны к выходу новых редакций трёх документов: у каждой HTML-карточки указаны даты «Опубликовано» и «Изменено». На проверенную дату последний месячный файл опубликован 09.07.2026, квартальный — 18.05.2026, годовой — 05.05.2026. Стабильного API нет; перед массовой загрузкой проверяйте каталог и заголовок последней колонки XLSX.

## Ограничения и особенности

- Материалы официального сайта Минфина распространяются на условиях **Creative Commons Attribution 4.0** (блок в подвале страниц `minfin.gov.ru`); при переработке указывайте источник, карточку и вложение.
- XLSX машиночитаемы, но не являются контрактным API: есть объединённые ячейки, сноски, пустые исторические ячейки и меняющаяся функциональная классификация между годами.
- Это официальный, но **частичный по детализации** источник: он покрывает агрегированный результат по РФ, а не строки каждого субъекта или муниципалитета.
- Показатели Минфина в этих XLSX **не обязаны** построчно совпадать с **[открытыми наборами Минфина](/data-sources/federal/minfin-opendata)**, **[Казначейством](/data-sources/federal/roskazna-consolidated-subjects-execution)** или **[Росстатом](/data-sources/federal/rosstat-gosfin-consolidated-budget-rf)** — сверяйте охват, период, методику и подпись показателя.

## Примеры доступа

Сохранить HTML-страницу раздела для ручного или последующего разбора ссылок «Скачать»:

~~~bash
curl -L --fail --silent --show-error --compressed \
  -A "Mozilla/5.0" \
  -H "Accept-Language: ru-RU,ru;q=0.9" \
  "https://minfin.gov.ru/ru/statistics/subbud/execute/" \
  -o minfin-subbud-execute.html
~~~

## Связанные страницы wiki

- **[Минфин: данные по исполнению бюджетов субъектов РФ и местных бюджетов (PDF)](/data-sources/federal/minfin-regions-operational)** — иной раздел сайта (**perfomance/regions/operational**) с PDF-презентациями, в том числе о местных бюджетах; не переносите его значения и методику в XLSX **subbud/execute**.
- **[Минфин: краткая информация об исполнении федерального бюджета](/data-sources/federal/minfin-fedbud-execute)** — параллельная витрина Минфина для **федерального** бюджета (те же три периодичности, **XLSX**).
- **[Минфин: краткая информация об исполнении бюджетов государственных внебюджетных фондов](/data-sources/federal/minfin-outbud-execute)** — параллельная витрина для **бюджетов [ГВФ](/glossary/extrabudgetary-funds)** (те же три периодичности, **XLSX**).
- **[Минфин: краткая информация об исполнении консолидированного бюджета РФ и ГВФ (conbud/execute)](/data-sources/federal/minfin-conbud-execute)** — свод по Российской Федерации (консолидированный бюджет РФ и **ГВФ**); он отличается объектом агрегации от ряда консолидированных бюджетов субъектов в **subbud/execute**.
- **[Консолидированные бюджеты субъектов РФ](/data-sources/regional/consolidated-budgets)** — **регламентированные** отчёты исполнения по субъектам (**0503317** и сопутствующие материалы) на сайте Казначейства.
- **[Отчёты Федерального казначейства](/data-sources/federal/roskazna-reports)** — операционная карточка раздела «Исполнение бюджетов»: формы, форматы, ограничения автоматизации.
- **[Региональные бюджеты](/data-sources/federal/regionalnye-byudzhety)** — плановый контур и сайты субъектов; дополняет картину относительно **факта** в сводах Минфина и Казначейства.
- **[Отчёты об исполнении бюджетов (обзор)](/data-sources/federal/otchety-ob-ispolnenii-byudzhetov)** — где в цепочке источников лежит **факт исполнения** относительно плана и **[казначейского исполнения](/glossary/treasury-execution)**.
- **[Открытые данные Минфина России](/data-sources/federal/minfin-opendata)** — каталог CSV/XML-наборов; раздел **subbud/execute** в него **не обязан** входить тем же составом полей.
- **[Форма 0503317](/reporting/0503317)** и **[консолидированный бюджет](/glossary/consolidated-budget)** — термин и регламентированный контур для интерпретации цифр; субъектные строки и идентификаторы нужно искать там, не в этом агрегированном XLSX.

## Не путать с

- **[Открытые данные Минфина России](/data-sources/federal/minfin-opendata)** — **реестр наборов** с `list.csv` и паспортами, а не список трёх XLSX на странице статистики **subbud/execute**.
- **[Консолидированные бюджеты субъектов РФ](/data-sources/regional/consolidated-budgets)** — **иной оператор** (Казначейство), **иная методика** и обычно **большая детализация** по форме **0503317**; ряд Минфина показывает общую динамику по РФ, но не подменяет казначейскую отчётность и её субъектный разрез.
- **[Минфин: данные по исполнению бюджетов субъектов РФ и местных бюджетов (PDF)](/data-sources/federal/minfin-regions-operational)** — PDF-презентации, а не агрегированные XLSX из `subbud/execute`.

## Частые вопросы

**В:** Можно ли по этим XLSX восстановить исполнение по каждому **[КБК](/glossary/kbk)** по субъекту?

**О:** Нет. В трёх проверенных файлах один агрегированный ряд по РФ; строк субъектов, КБК, ОКТМО, ОКАТО и ИНН нет. Для субъектного и регламентированного разреза используйте **[консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets)** и **[форму 0503317](/reporting/0503317)**.

**В:** Почему цифра в годовом файле Минфина не совпадает с суммой по строкам **0503317**?

**О:** Различаются **определение показателя**, **момент среза**, **методика свёртки** и **источник агрегации** (Минфин публикует **краткую** сводку, Казначейство — **регламентированную** форму). Сверяйте заголовки документов и пояснения к таблицам в обоих источниках.
