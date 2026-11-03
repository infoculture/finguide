---
title: "Казначейство: размещение средств Фонда пенсионного и социального страхования РФ (отчёты о финансовых операциях)"
sidebar_label: "Казначейство: размещение средств ФПСС"
description: >-
  Ветка «Финансовые операции» портала Казначейства по размещению средств СФР:
  банковские депозиты с нерегулярным календарём (несколько отборов в квартал),
  XML-схема Depo с третьей серией идентификаторов 3xxxxxxx и тегом FundsPlaced
  «средства Социального фонда России» с кодами субсчетов ДСВ/РОПС/СВ, плавающие
  ставки с базой RUONmDS, тип «Особый»; страницы счетов и архива ФСС пусты.
tags: [data-source, federal, budget, reporting]
last_updated: 2026-10-03
last_verified: 2026-10-03
slug: /data-sources/federal/roskazna-finops-pension-social-fund-placements
content_type: data_source
entity_type: data_source
audience_level: developer
data_domain: budget
source_url: "https://roskazna.gov.ru/finansovye-operacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii"
data_source_kind: mixed
jurisdiction: federal
jurisdiction_level: federal
access: open
formats: [html, docx, xml]
status: current
related_information_system: /information-systems/federal/roskazna-portal
data_completeness: partial
machine_readability: mixed
legal_significance: official
update_lag: "нерегулярно: отборы выходят с интервалом от дней до двух месяцев (10 дат выдачи = 24.11.2025–14.07.2026)"
archive_depth: "10 дат на выдачу; фильтр лет работает (2025 показал 5 дат)"
license_or_terms: not-explicit
relationships:
  - type: operated_by
    target: /organizations/federal-treasury
  - type: published_by
    target: /organizations/federal-treasury
related_pages:
  - /information-systems/federal/roskazna-portal
  - /organizations/sfr
  - /data-sources/federal/roskazna-finops-treasury-account-placements
  - /data-sources/federal/roskazna-finops-federal-budget-account-placements
  - /data-sources/federal/roskazna-extrabudgetary-funds-execution
  - /data-sources/federal/minfin-outbud-execute
  - /glossary/extrabudgetary-funds
  - /glossary/treasury-execution
---

# Казначейство: размещение средств Фонда пенсионного и социального страхования РФ (отчёты о финансовых операциях)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Размещение временно свободных средств **Социального фонда России** (Фонд пенсионного и социального страхования) на банковских депозитах |
| Тип доступа | Одна листовая страница с таблицей «Дата \| Документы»; файлы — пары DOCX + XML; API нет |
| Основные форматы | DOCX, XML; обёртка HTML |
| Оператор и публикатор | [Федеральное казначейство](/organizations/federal-treasury) |
| Режим доступа | Открытый |

Коротко: **казначейская витрина депозитных отборов СФР** — третья ветка размещений рядом с [ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements) и [ЕСФБ](/data-sources/federal/roskazna-finops-federal-budget-account-placements). Те же XML-схемы `Depo`, но третья серия идентификаторов отборов (`3xxxxxxx`), тег `FundsPlaced` маркирует субсчёт фонда (**ДСВ / РОПС / СВ**), ставки — плавающие с базой `RUONmDS`, тип депозита «Особый». Календарь нерегулярный: несколько отборов в квартал. Это операции размещения, а не [исполнение бюджета фонда](/data-sources/federal/roskazna-extrabudgetary-funds-execution).

## Качество и верификация

Измерения трактуются по [справочнику качества источников](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | **2026-10-03.** Обход страниц ветки и архива ФСС; скачаны и разобраны свежие XML и DOCX депозита (отборы 13.08.2026, `id` 32026014–16); проверен GET-фильтр лет (2025 — 5 дат). |
| Полнота (`data_completeness`) | **Частичная.** Живая страница одна — депозиты; страница банковских счетов и архивная страница Фонда соцстрахования пусты; репо в ветке нет вовсе. |
| Машиночитаемость (`machine_readability`) | **Хорошая**: XML со стабильной схемой `Depo`; в одном DOCX — несколько отборов за день с разными видами средств. |
| Юридическая значимость (`legal_significance`) | **Официальные сообщения** оператора кассового исполнения о размещении средств фонда. |
| Задержка обновления (`update_lag`) | Отборы публикуются заранее (файлы с меткой 13.08.2026 содержат отборы того же дня); частота — от нескольких в месяц до одной в два месяца. |
| Глубина архива (`archive_depth`) | 10 дат на выдачу; фильтр `filter_year` работает: 2025 — 5 дат (октябрь–декабрь), более ранние годы видны через фильтр. |
| Лицензия (`license_or_terms`) | Не указаны. |

## Описание и границы

Ветка [«Размещение средств Фонда пенсионного и социального страхования РФ»](https://roskazna.gov.ru/finansovye-operacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii) раздела «Финансовые операции». Обратите внимание на написание «razmeschenie» в URL — каноническое для этой ветки написание отличается от «razmeshchenie» в соседних ветках; не «исправляйте» его.

| Страница (хвост URL) | Состояние на 2026-10-03 |
| --- | --- |
| `…-na-bankovskih-depozitah` | **живая**: 10 дат выдачи 24.11.2025–14.07.2026; в фильтре 2025 года — 5 дат с октября |
| `…-na-bankovskih-schetah` | заглушка: без таблицы и файлов |
| [Архив: размещение средств Фонда социального страхования](https://roskazna.gov.ru/finansovye-operacii/archive/razmeshchenie-sredstv-fonda-socialnogo-strahovaniya-rf/) | пустая (историческая страница бывшего ФСС) |

Ветка состоит только из депозитов: страниц репо, ПФИ и займа ценных бумаг в ней нет. Сюда **не входит**: [исполнение бюджета фонда](/data-sources/federal/roskazna-extrabudgetary-funds-execution) по формам; макроряды фондов — [outbud/execute Минфина](/data-sources/federal/minfin-outbud-execute); собственные публикации [СФР](/organizations/sfr) и [bus.gov.ru](/data-sources/federal/bus-opendata).

## Оператор

[Федеральное казначейство](/organizations/federal-treasury) публикует анонсы отборов; размещаемые средства принадлежат [Социальному фонду России](/organizations/sfr).

- [Портал Федерального казначейства](/information-systems/federal/roskazna-portal) — витрина, на которой размещена ветка.

## URL и точки доступа

| Тип доступа | URL | Формат и назначение |
| --- | --- | --- |
| Ветка ФПСС | https://roskazna.gov.ru/finansovye-operacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii | HTML-навигация |
| Депозиты (+фильтр) | …`-na-bankovskih-depozitah/?filter_year=2025` | HTML; GET-параметры Livewire-компонента |
| Файл | `https://roskazna.gov.ru/storage/operation-day-files/<метка времени>.docx\|.xml` | DOCX/XML парами |

## Объекты данных и показатели

- Гранулярность — **отбор заявок**: XML `<Depo><Depoauc1>` с полями `aucdate`, `id`, `cur`, `FundsPlaced`, `maxvol` (млн), `term` (дней), `firstdate`/`seconddate`, `ratetype`, `minrate`/`baseflrate`/`minspread`, `depotype`, `minorder`, `maxcrorder`, `orderform`, `place`, расписание торгов.
- **Три серии идентификаторов отборов Казначейства** (проверено): `1xxxxxxx` — [ЕСФБ](/data-sources/federal/roskazna-finops-federal-budget-account-placements), `2xxxxxxx` — [ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements), `3xxxxxxx` — эта ветка (СФР). При объединении рядов всех веток различайте по `id` и `FundsPlaced`.
- **Виды средств фонда** в `FundsPlaced`: «средства Социального фонда России (ДСВ)», «…(РОПС)», «…(СВ)» — в один день фонд размещает несколько пулов средств (проверенный DOCX: три отбора 13.08.2026 на 107, 2 000 и 1 млн руб. со сроками 53, 60 и 116 дней). Код субсчёта — единственный способ разнести размещения по источникам средств фонда.
- Ставки: в проверенных отборах — `FLOATING` с базовой ставкой `RUONmDS` и спредом; `depotype` — «Особый»; объёмы на порядки меньше ЕКС (сотни миллионов — единицы миллиардов рублей).
- Ключи связки: `id` отбора + `aucdate`; внутри дня — пара (вид средств, срок).

**Пробелы**: нет итогов отборов в отдельной таблице (только файлы); нет страницы с агрегатами размещений; глубже 10 дат за запрос не получить.

## Структура файлов и словарь данных

Проверенный XML (`fpss.xml`): заголовок UTF-8, корень `<Depo>`. Значения `maxvol` — целые числа в **млн** («107»); даты `DD.MM.YYYY`; ставки — с точкой (`0.00`), прочерки `-`.

| Ловушка | Проявление | Обход |
| --- | --- | --- |
| Написание «razmeschenie» | в URL ветки «es» вместо «esh» | каноническое написание; не нормализуйте URL |
| Субсчета фонда | ДСВ/РОПС/СВ только внутри `FundsPlaced` | парсите код из скобок, иначе пулы смешаются |
| Нерегулярный календарь | разрывы до двух месяцев | обходите месяцами через `filter_year`+`filter_month` |
| Плавающие ставки | `minrate` = `-`, смысл в `baseflrate` + `minspread` | не приравнивайте пустой `minrate` к нулевой ставке |
| Несколько отборов в файле | DOCX содержит 3+ отбора за день | разбирайте по блокам/`id`, а не по файлу |

## Периодичность обновления

Нерегулярно: 10 дат выдачи накрыли период с 24.11.2025 по 14.07.2026 (пять отборов за осень 2025, далее — с интервалом от недель до двух месяцев). Фильтр `filter_year` отдаёт по 5–10 дат за год; пагинации нет.

## Ограничения и особенности

- **Не репо-контур**: в ветке только депозиты; для репо — соседние ветки ЕКС и ЕСФБ.
- Архивная страница бывшего ФСС в разделе «Архив» пуста; длинный ряд по социальному страхованию на портале не собрать — только с даты появления записей в этой ветке.
- Запросы без браузерного `User-Agent` рискуют получить 403; TLS-особенности среды описаны в [карточке форм ФБ](/data-sources/federal/roskazna-federal-budget-execution).
- Показатели ветки не сверяются построчно с формами исполнения бюджета фонда — разные контуры (операции размещения vs бюджетная отчётность).

## Примеры доступа

Сбор выдачи депозитов СФР и разбор XML (проверено в этой среде 2026-10-03):

```python
import re, subprocess
from xml.etree import ElementTree

BASE = "https://roskazna.gov.ru"
PAGE = (f"{BASE}/finansovye-operacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii/"
        "razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii-na-bankovskih-depozitah/")

def fetch(url):
    return subprocess.run(["curl", "-sk", "-A", "Mozilla/5.0", url],
                          capture_output=True, check=True).stdout

page = fetch(f"{PAGE}?filter_year=2026")
files = list(dict.fromkeys(re.findall(r'href="(/storage/operation-day-files/[^"]+\.xml)"', page)))
blob = fetch(BASE + files[0])
root = ElementTree.fromstring(blob.lstrip(b"\ufeff"))
for auc in root.iter():
    if auc.getchildren():
        rec = {child.tag: child.text for child in auc}
        print(rec.get("id"), rec.get("FundsPlaced"), rec.get("maxvol"), rec.get("term"))
```

## Связанные страницы wiki

- [Размещение средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements) — парная ветка (серия `id` `2xxxxxxx`).
- [Размещение средств ЕСФБ](/data-sources/federal/roskazna-finops-federal-budget-account-placements) — парная ветка (серия `id` `1xxxxxxx`, юаневое репо).
- [Социальный фонд России](/organizations/sfr) — владелец размещаемых средств.
- [Казначейство: бюджеты ГВФ](/data-sources/federal/roskazna-extrabudgetary-funds-execution) — бюджетная отчётность фондов; другой контур.
- [Минфин: исполнение бюджетов ГВФ](/data-sources/federal/minfin-outbud-execute) — макроряды фондов (включая реформу 2023 года в структуре строк).
- [Государственные внебюджетные фонды](/glossary/extrabudgetary-funds) — институциональный контекст.
- [Казначейское исполнение](/glossary/treasury-execution) — терминологический контекст.

## Не путать с

- [Размещение средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements) и [ЕСФБ](/data-sources/federal/roskazna-finops-federal-budget-account-placements) — другие счета и серии `id`; у СФР — субсчета ДСВ/РОПС/СВ.
- [Бюджеты ГВФ в разделе «Исполнение бюджетов»](/data-sources/federal/roskazna-extrabudgetary-funds-execution) — исполнение бюджета фонда по формам, а не депозитные отборы.
- [Исторические строки ПФР/ФСС в outbud/execute](/data-sources/federal/minfin-outbud-execute) — фонды-предшественники; эта ветка публикует операции только современного СФР.

## Частые вопросы

**В: Как отличить отборы СФР от ЕКС и ЕСФБ в общих выгрузках?**

**О:** По тегу `FundsPlaced` («средства Социального фонда России …») и первой цифре идентификатора: `3` — СФР, `2` — ЕКС, `1` — ЕСФБ. Внутри СФР пулы средств различаются кодом в скобках: ДСВ, РОПС, СВ.

**В: Почему в XML пусто в поле минимальной ставки?**

**О:** В проверенных отборах тип ставки — `FLOATING`: фиксированной минимальной ставки нет (`minrate` = `-`), ориентируйтесь на базовую плавающую ставку (`baseflrate`, например `RUONmDS`) и спред (`minspread`).

**В: Как собрать историю отборов, если в выдаче всего 10 дат?**

**О:** GET-фильтрами по году и месяцу: `?filter_year=2026&filter_month=4`. Календарь нерегулярный, поэтому обходите каждый месяц; глубже 2023 года на странице записей не наблюдалось — длинный ряд копите у себя с момента появления записей.

**В: Есть ли здесь репо или итоги прошедших аукционов?**

**О:** Нет: ветка содержит только анонсы депозитных отборов (и страницы счетов/архива ФСС пусты). Репо — в ветках [ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements) и [ЕСФБ](/data-sources/federal/roskazna-finops-federal-budget-account-placements); агрегированные итоги ранее держала удалённая страница «Операционный день».
