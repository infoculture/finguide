---
title: "Открытые данные Минфина России"
sidebar_label: "Открытые данные Минфина"
description: >-
  Машиночитаемый реестр Минфина: сводный list.csv с 75 наборами (7710168360-*),
  паспорта meta.csv стандарта 3.0 с версионированными файлами
  data-<дата>-structure-<версия>.csv; тематика — макроисполнение (зеркала
  fedbud/conbud/subbud/outbud), госдолг и ГЦБ, ФНБ (ОКЕИ 385), планы счетов,
  драгметаллы, аудит; ловушки регистра путей, BOM и скользящего окна данных.
tags: [data-source, federal, budget]
last_updated: 2026-10-03
last_verified: 2026-10-03
slug: /data-sources/federal/minfin-opendata
content_type: data_source
entity_type: data_source
audience_level: developer
data_domain: budget
source_url: "https://minfin.gov.ru/ru/opendata/"
data_source_kind: mixed
jurisdiction: federal
jurisdiction_level: federal
access: open
formats: [csv]
status: current
related_information_system: /information-systems/federal/minfinsite
data_completeness: partial
machine_readability: mixed
legal_significance: official
update_lag: "по наборам; у ФНБ — квартальные срезы с лагом ~1 месяца"
archive_depth: "версионированные файлы с 2014 года в паспортах наборов (проверено на ФНБ: 52 среза 2014–2026)"
license_or_terms: "типовые условия (conditions.pdf); материалы сайта — CC BY 4.0"
relationships:
  - type: published_by
    target: /organizations/minfin
related_pages:
  - /information-systems/federal/minfinsite
  - /organizations/minfin
  - /data-sources/federal/minfin-fedbud-execute
  - /data-sources/federal/minfin-conbud-execute
  - /data-sources/federal/minfin-subbud-execute
  - /data-sources/federal/minfin-outbud-execute
  - /data-sources/federal/minfin-fedbud-oil
  - /data-sources/federal/budgetrosp
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/federal/roskazna-reports
  - /glossary/kbk
---

# Открытые данные Минфина России

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Машиночитаемый реестр Минфина: **75 наборов** с префиксом `7710168360-*` (ИНН ведомства) — макроисполнение бюджетов, госдолг, ФНБ, планы счетов, ГЦБ, прейскуранты драгоценных камней, аудит и административные сведения |
| Тип доступа | Сводный `list.csv` → паспорт каждого набора (`meta.csv`, стандарт 3.0) → версионированные CSV-файлы данных; API нет |
| Основные форматы | CSV (данные, паспорта, структуры); страницы каталога — HTML |
| Оператор и публикатор | [Минфин России](/organizations/minfin) |
| Режим доступа | Открытый, без регистрации |

Коротко: это **обёртка-каталог над статистикой Минфина** и смежными тематиками: 12 наборов зеркалят страницы краткой информации об исполнении (fedbud/conbud/subbud/outbud × год/квартал/месяц), плюс уникальные для этой витрины ряды — [ФНБ](/glossary/nwf), внутренний и внешний долг, платежи по долгу, итоги аукционов ГЦБ, планы счетов учёта. Точка входа для скриптов — `list.csv`; структура паспорта стабильна и описана ниже.

## Качество и верификация

Измерения трактуются по [справочнику качества источников](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | **2026-10-03.** Скачан `list.csv` (15 096 байт, 75 наборов), разобраны паспорта `7710168360-NationalWealthFund` и `…-DomesticDebt`, скачан и прочитан актуальный CSV данных ФНБ (7 строк, ОКЕИ 385). |
| Полнота (`data_completeness`) | **Частичная.** Реестр полный, но наборы разнородны: от регулярных квартальных рядов (ФНБ) до одноразовых списков (биографии руководителей). Каталог не даёт сводной периодичности — её надо читать в каждом паспорте. |
| Машиночитаемость (`machine_readability`) | **Хорошая для оригинала:** весь контур CSV, включая паспорта. Ловушки — BOM в файлах (читайте `utf-8-sig`), различный регистр путей `opendata`/`OpenData`, мелкие файлы данных со скользящим окном. |
| Юридическая значимость (`legal_significance`) | **Официальный реестр** ведомства; в паспортах указаны создатель (департамент), публикатор с контактами и нормативная основа показателя (например, ФНБ — по форме 0507066). |
| Задержка обновления (`update_lag`) | По каждому набору — поля `modified` и `provenance` паспорта. Наблюдение (ФНБ): `modified 2026-07-30`, «Информация за январь–июнь 2026» — квартальные срезы с лагом ~1 месяца. |
| Глубина архива (`archive_depth`) | В паспортах хранится **полная история версионированных файлов** с датами в имени; у ФНБ проверено 52 среза с 2014-04 по 2026-07. |
| Лицензия (`license_or_terms`) | [Типовые условия](https://minfin.gov.ru/opendata/conditions.pdf) (PDF) и CC BY 4.0 в подвале сайта; указывайте источник. |

## Описание и границы

Каталог: [страница «Открытые данные»](https://minfin.gov.ru/ru/opendata/) для человека; для скриптов — [сводный `list.csv`](https://minfin.gov.ru/opendata/list.csv), который содержит шапку (`property,title,value,format`), служебную строку версии методических рекомендаций (стандарт 3.0 `opendata.gosmonitor.ru`) и 75 строк наборов: идентификатор, название, URL паспорта `meta.csv`.

Тематический состав реестра (75 наборов, группировка по названиям):

| Тематика | Наборы (примеры идентификаторов) |
| --- | --- |
| Макроисполнение бюджетов (12) | `fedbud_{year,quarter,month}`, `conbud_{…}`, `subbud_{…}`, `outbud_{…}` — зеркала страниц [fedbud](/data-sources/federal/minfin-fedbud-execute), [conbud](/data-sources/federal/minfin-conbud-execute), [subbud](/data-sources/federal/minfin-subbud-execute), [outbud](/data-sources/federal/minfin-outbud-execute) |
| Долг и рынок ГЦБ (~11) | `DomesticDebt`, `ExternalDebt`, `Subject_Debt`, `domestic_payments`, `external_schedule`, `auction_results`, `volume_issues`, `OFZ-n_placement`, `OFZ-n_redeemed`, `papers_summary`, `entity_debtor` |
| Фонды | `NationalWealthFund` (объём [ФНБ](/glossary/nwf)) |
| Доходы и межбюджетные отношения | `profit_divide`, `distribution_subsidies`, `income_lost`, `subj_bc`, `subj_finance`, `gp_regfin`, `nsc_execution` |
| Учёт и НСИ | `accounts_balance`, `accounts_offbalance`, `accounts_budget`, `accounts_bookkeeper`, `IFRS`, `accounting_standards`, `insurance_tariff`, `insurance_amount` |
| Депозиты | `repo` — «Оперативные сведения об остатках средств федерального бюджета в депозитах» (смежно с [операциями с ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements)) |
| Драгоценные металлы и камни | `Diamonds_price`, прейскуранты изумрудов и александритов, `affinage_org`, `refineries_production` |
| Аудиторская деятельность (7) | `CheckSROA`, `ReportSROA`, `AuditorsActivity`, `ActivitySROA`, `ConsolidatedSROA`, `SROA_npa`, `audit_contract` |
| Административные и прочие | `Subordinate`, `SubordinateBiography`, `Jobs`, `ismf` (ГИС Минфина), `international_treaty`, `docs_strategic_planning`, `declaration`, `infomap`, `archive` и др. |

Сюда **не входит**: страница [дополнительных нефтегазовых доходов](/data-sources/federal/minfin-fedbud-oil) (в реестре её нет); закрытые контуры [АИС «Финансы»](/information-systems/federal/aisfinances); построчное исполнение по [КБК](/glossary/kbk) — контур [Казначейства](/data-sources/federal/roskazna-reports) и [ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).

## Оператор

[Минфин России](/organizations/minfin) публикует реестр; в паспортах указаны департамент-создатель и ответственный публикатор с контактами.

- [Сайт Министерства финансов РФ](/information-systems/federal/minfinsite) — витрина, на которой размещён реестр.

## URL и точки доступа

| Тип доступа | URL | Формат и назначение |
| --- | --- | --- |
| Сводный перечень наборов | https://minfin.gov.ru/opendata/list.csv | CSV: идентификатор, название, URL паспорта |
| Каталог (HTML) | https://minfin.gov.ru/ru/opendata/ | HTML-карточки наборов |
| Паспорт набора | `https://minfin.gov.ru/opendata/<id>/meta.csv` | CSV «property,value» |
| Файлы данных | `https://minfin.gov.ru/OpenData/<id>/data-<дата>-structure-<версия>.csv` | CSV; **регистр пути отличается** от паспорта |
| Структура версий | `https://minfin.gov.ru/OpenData/<id>/structure-<версия>.csv` | CSV-описание колонок |

## Объекты данных и показатели

- **Паспорт (`meta.csv`)** — пары `property,value` стандарта 3.0: `identifier`, `title`, `description` (с нормативной отсылкой показателя), `creator`, `publishername/phone/mbox`, `format`, `created`, `modified`, `provenance` (человеческая аннотация свежести), `valid`, `subject`, затем построчный перечень версий данных и структур.
- **Имена файлов данных** кодируют версию: `data-<YYYYMMDDThhmm>-structure-<YYYYMMDD>.csv`. Ключ выборки — сортировка по имени (лексикографически = хронологически), не по дате скачивания.
- **Файл данных** — плоский CSV с самоописывающими колонками-спарками: «Отчетный период-год», «Отчетный период-месяцы», «Значение», кодовые пары разрезов (`OKSM`/`643` — страна, `OKEI`/`385` — единица). В проверенном файле ФНБ единица — **ОКЕИ 385 = млн руб.** (не млрд!), значения ~13 104 151,3 млн руб. на 01.07.2026.
- **Скользящее окно**: свежий файл содержит не всю историю, а хвост периода (у ФНБ — четыре квартала 2025 и два 2026). Длинный ряд собирается из последовательности версионированных файлов.
- Ключи связки: `identifier + дата версии` для файлов; внутри данных — период + код разреза. Согласование кодов с [бюджетной классификацией](/glossary/kbk) — через описание показателя в паспорте.

**Пробелы**: нет сводного JSON-каталога; периодичность и единицы измерения различаются по наборам и живут в паспортах; нет общего прайс-листа «что обновляется когда».

## Структура файлов и словарь данных

Проверенный паспорт `7710168360-NationalWealthFund`: `created 2014-04-10`, `modified 2026-07-30`, `provenance «Информация за январь-июнь 2026 года»`, `valid 2026-12-31`, создатель — Департамент организации составления и исполнения федерального бюджета, публикатор — с телефоном и e-mail. В `description` — нормативная отсылка: ФНБ приведён по форме отчётности **0507066** (приказ Минфина от 11.04.2016 № 116). 52 версионированных файла данных с 2014-04-09 по 2026-07-30 и два файла структуры (2015-02-12 и 2019-04-30) — смена макета в 2019 году отражена сменой версии `structure`.

| Ловушка | Проявление | Обход |
| --- | --- | --- |
| Регистр путей | паспорта под `/opendata/`, файлы данных под `/OpenData/` | берите URL строго из `list.csv` и паспорта, не конструируйте |
| BOM в CSV | файлы начинаются с `\ufeff` | читайте `utf-8-sig` |
| Скользящее окно данных | свежий файл содержит только хвост периода | собирайте ряд из последовательности версий, дедуплицируйте по периоду |
| Читаемые периоды | «январь-март», «январь-июнь» — накопительные кварталы текстом | нормализуйте словарём кварталов |
| Единицы в кодах | ОКЕИ 385 (млн руб.) у ФНБ vs млрд руб. в XLSX статистических страниц | читайте код ОКЕИ из строки, не переносите масштаб между витринами |

## Периодичность обновления

Единый календарь не публикуется. Поля `modified`/`provenance` паспорта — источник свежести; у макроисполнения (12 наборов) периодичность соответствует страницам статистики (месяц/квартал/год), у ФНБ — квартальная с лагом ~1 месяца, у списков и прейскурантов — по событию. Пайплайну достаточно перечитывать `list.csv` и паспорта, а не HTML-каталог.

## Ограничения и особенности

- Автоматический доступ к minfin.gov.ru нестабилен из скриптов (в этой среде сессии обрывались; браузероподобный `User-Agent` обязателен) — закладывайте повторы.
- Устаревшие пути (`/ru/opendata/register/` и подобные) могут отдавать ошибку; рабочие входы — `list.csv` и HTML-реестр.
- Данные версионированных файлов уточняются задним числом: одна и та же дата периода встречается в нескольких версиях файла; при склейке ряда берите последнюю версию, содержащую период.
- Часть наборов — малоподвижные документы (биографии, составы органов): не ожидайте от реестра «живых» данных во всех строках.
- Показатели не обязаны построчно совпадать с [наборами budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets) и [отчётами Казначейства](/data-sources/federal/roskazna-reports) — сверяйте методику, паспорт и период.

## Примеры доступа

Полный контур «реестр → паспорт → свежий файл данных» (проверено в этой среде 2026-10-03):

```bash
curl -A "Mozilla/5.0" "https://minfin.gov.ru/opendata/list.csv" -o list.csv
```

```python
import csv, io, subprocess

def fetch(url):
    r = subprocess.run(["curl", "-s", "-A", "Mozilla/5.0", url], capture_output=True, text=True, check=True)
    return r.stdout

list_rows = list(csv.reader(io.StringIO(fetch("https://minfin.gov.ru/opendata/list.csv"))))
datasets = [(r[0], r[1], r[2]) for r in list_rows[1:] if r and r[0].startswith("7710168360")]
print(len(datasets), "наборов")

meta = list(csv.reader(io.StringIO(fetch("https://minfin.gov.ru/opendata/7710168360-NationalWealthFund/meta.csv"))))
passport = {row[0].strip("\ufeff"): (row[1] if len(row) > 1 else "") for row in meta if row}
print("modified:", passport.get("modified"), "|", passport.get("provenance"))

data_files = sorted(v for k, v in passport.items() if k.startswith("data-"))
latest = data_files[-1]
rows = list(csv.reader(io.StringIO(fetch(latest))))
print("колонки:", rows[0])          # период-год, период-месяцы, значение, разрезы
print("последняя строка:", rows[-1])  # значение в ОКЕИ 385 (млн руб.)
```

## Связанные страницы wiki

- [Минфин: исполнение федерального бюджета](/data-sources/federal/minfin-fedbud-execute) — страница статистики, зеркалируемая наборами `fedbud_*`.
- [Минфин: conbud/execute](/data-sources/federal/minfin-conbud-execute), [subbud/execute](/data-sources/federal/minfin-subbud-execute), [outbud/execute](/data-sources/federal/minfin-outbud-execute) — остальные зеркала макроисполнения.
- [Минфин: дополнительные нефтегазовые доходы](/data-sources/federal/minfin-fedbud-oil) — тематика вне этого реестра.
- [Бюджетная роспись в открытых данных](/data-sources/federal/budgetrosp) — сопоставление росписи между витринами.
- [Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — параллельный каталог budget.gov.ru с другими идентификаторами.
- [Отчёты Федерального казначейства](/data-sources/federal/roskazna-reports) — построчный казначейский факт для сверки.
- [КБК](/glossary/kbk) — чтение кодов, на которые опираются наборы бюджетной тематики.
- [ФНБ](/glossary/nwf) — понятийная карточка набора `NationalWealthFund`.

## Не путать с

- [Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — другой каталог на `budget.gov.ru` с серией `7710568760-*` (Казначейство) и своим API; тематическое пересечение не означает совпадения полей.
- [Открытые данные bus.gov.ru](/data-sources/federal/bus-opendata) — уровень учреждений, а не сводные показатели Минфина.
- [Страницы статистики Минфина](/data-sources/federal/minfin-fedbud-execute) — те же ряды в XLSX для человека; реестр даёт их в CSV с паспортами и историей версий.

## Частые вопросы

**В: Дублируют ли 12 наборов макроисполнения страницы статистики?**

**О:** По содержанию — да (те же ряды), но в CSV с паспортами и историей версионированных файлов, что удобнее для автоматизации. При расхождении между CSV и XLSX приоритет сверьте по полям `modified`/`provenance` паспорта и дате файла.

**В: Как собрать длинный ряд ФНБ?**

**О:** Паспорт содержит все версии с 2014 года. Сортируйте файлы `data-*` по имени, читайте каждый и дедуплицируйте по «Отчетный период-год + период-месяцы», беря значение из последней версии, где период встречается. Единицы — ОКЕИ 385, млн руб.

**В: Почему паспорт лежит на `/opendata/`, а данные — на `/OpenData/`?**

**О:** Регистр путей различается исторически, и оба работают только по точным ссылкам из реестра. Не нормализуйте регистр и не конструируйте URL: берите адрес паспорта из `list.csv`, адреса файлов — из паспорта.

**В: Есть ли здесь кассовый факт по КБК?**

**О:** Нет. Реестр — макро- и тематические ряды; для построчного исполнения по [КБК](/glossary/kbk) используйте [формы Казначейства](/data-sources/federal/roskazna-reports) и [срезы ГИИС](/data-sources/federal/budget-gov-ru-datasets).
