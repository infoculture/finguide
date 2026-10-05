---
title: "Казначейство: размещение средств единого казначейского счёта (отчёты о финансовых операциях)"
sidebar_label: "Казначейство: размещение средств ЕКС"
description: >-
  Ветка «Финансовые операции» портала Казначейства по размещению временно
  свободных средств ЕКС: пять живых страниц инструментов (депозиты, репо вне и
  на организованных торгах, депозиты с ЦК, ПФИ) с таблицами «Дата |
  Документы» и парами DOCX+XML анонсов и итогов отборов; GET-фильтры
  filter_year/filter_month, XML-схемы Depo/Repo, ловушки масштабов maxvol
  между инструментами, три страницы-заглушки.
tags: [data-source, federal, budget, reporting]
last_updated: 2026-10-03
last_verified: 2026-10-03
slug: /data-sources/federal/roskazna-finops-treasury-account-placements
content_type: data_source
entity_type: data_source
audience_level: developer
data_domain: budget
source_url: "https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta"
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
update_lag: "анонсы отборов за 1–3 дня до аукциона (проверено: отбор 05.10.2026 опубликован 02.10.2026 в 17:20)"
archive_depth: "фильтры лет 2021–2026; годы ранее 2021 на страницах пусты; выдача ограничена 10 датами"
license_or_terms: not-explicit
relationships:
  - type: operated_by
    target: /organizations/federal-treasury
  - type: published_by
    target: /organizations/federal-treasury
related_pages:
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-finops-treasury-account-fundraising
  - /data-sources/federal/roskazna-finops-federal-budget-account-placements
  - /data-sources/federal/roskazna-finops-operating-day
  - /data-sources/federal/roskazna-datamarts
  - /data-sources/federal/roskazna-reports
  - /glossary/unified-budget-account
  - /glossary/treasury-execution
---

# Казначейство: размещение средств единого казначейского счёта (отчёты о финансовых операциях)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Размещение временно свободных средств [ЕКС](/glossary/unified-budget-account): депозиты, репо вне и на организованных торгах, депозиты с центральным контрагентом, ПФИ, займ ценных бумаг |
| Тип доступа | Листовые страницы инструментов с таблицей «Дата \| Документы»; файлы — DOCX (человеческий) + XML (машиночитаемый) парами; API нет |
| Основные форматы | DOCX, XML; страница-обёртка HTML |
| Оператор и публикатор | [Федеральное казначейство](/organizations/federal-treasury) |
| Режим доступа | Открытый; имена файлов в хранилище непрозрачны (метки времени) |

Коротко: главный публичный источник по **управлению ликвидностью ЕКС** — анонсы и итоги отборов заявок по каждому инструменту, с уникальными идентификаторами отборов, ставками, сроками и расписанием торгов в машиночитаемом XML. Дата строки таблицы — **дата публикации анонса**, сам отбор происходит на 1–3 дня позже (проверено: отборы 05.10.2026 опубликованы 02.10.2026). Это операции с остатками единого счёта, а не исполнение бюджета — не смешивайте с [формами по КБК](/data-sources/federal/roskazna-federal-budget-execution).

## Качество и верификация

Измерения трактуются по [справочнику качества источников](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | **2026-10-03.** Обход всех восьми страниц ветки; скачаны и разобраны DOCX и XML депозита и репо вне организованных торгов; проверены GET-фильтры `filter_year`/`filter_month` (2024, 2025, 2026 — работают; 2018–2020 — пусто). |
| Полнота (`data_completeness`) | **Частичная.** Пять страниц с публикациями, **три — заглушки без файлов** (займ ценных бумаг, банковские счета, «Информация об объёме средств…»). ПФИ заморожен на феврале 2022 года. Выдача каждой страницы ограничена **10 последними датами**. |
| Машиночитаемость (`machine_readability`) | **Хорошая**: каждый отбор — XML со стабильными тегами (`aucdate`, `id`, `maxvol`, `term`, `minrate`…); DOCX — человекочитаемый близнец. Ловушки: разные масштабы и форматы `maxvol` между инструментами, BOM в XML репо. |
| Юридическая значимость (`legal_significance`) | **Официальные сообщения** оператора кассового исполнения; параметры отборов публикуются до аукциона, итоги — после. |
| Задержка обновления (`update_lag`) | Анонсы — за 1–3 дня до отбора (метка хранилища `20261002_1720…` при отборах 05.10.2026); итоги — в день или после отбора. |
| Глубина архива (`archive_depth`) | Кнопки лет **2021–2026**; запросы за 2018–2020 возвращают пустую таблицу. Внутри года — фильтр месяца, но в выдаче всё равно видны **10 дат**. |
| Лицензия (`license_or_terms`) | На страницах явные условия повторного использования не указаны. |

## Описание и границы

Ветка [«Размещение средств единого казначейского счёта»](https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta) раздела «Финансовые операции». Главная страница — только навигация. Состояние листовых страниц на 2026-10-03:

| Страница (хвост URL) | Состояние | Файлов в выдаче | Пути файлов |
| --- | --- | --- | --- |
| `…-na-bankovskih-depozitah` (депозиты) | живая, обновляется ежедневно | 66 | `storage/operation-day-files/20261002_172028285.docx` + `.xml` |
| `…-po-dogovoram-repo-ne-na-organizovannyh-torgah` | живая, обновляется | 24 | `storage/operation-day-files/…` |
| `…-po-dogovoram-repo-na-organizovannyh-torgah` | живая, обновляется | 22 | `storage/operation-day-files/…` |
| `…-bankovskogo-vklada-depozita-s-centralnym-kontragentom` | живая, обновляется | 22 | `storage/operation-day-files/…` |
| `…-v-proizvodnye-finansovye-instrumenty` (ПФИ) | **заморожена** (свежие публикации — февраль 2022) | 40 | `storage/migrate/roskaznagovru/opd/25022022swap*.docx/.xml` |
| `zajm-cennyh-bumag` | заглушка | 0 | — |
| `…-na-bankovskih-schetah` | заглушка | 0 | — |
| `informaciya-ob-obeme-sredstv-poluchennyh-ot-razmeshcheniya…` | заглушка | 0 | — |

Сюда **не входит**: привлечение средств на ЕКС — [параллельная ветка](/data-sources/federal/roskazna-finops-treasury-account-fundraising) (пока пустая); размещение средств **единого счёта федерального бюджета** — [отдельная ветка](/data-sources/federal/roskazna-finops-federal-budget-account-placements); удалённая сводная страница [«Операционный день»](/data-sources/federal/roskazna-finops-operating-day), агрегировавшая эти операции до июня 2026 года; исполнение бюджетов — [отчётный раздел](/data-sources/federal/roskazna-reports).

## Оператор

[Федеральное казначейство](/organizations/federal-treasury) публикует анонсы и итоги отборов.

- [Портал Федерального казначейства](/information-systems/federal/roskazna-portal) — витрина, на которой размещена ветка.

## URL и точки доступа

| Тип доступа | URL | Формат и назначение |
| --- | --- | --- |
| Ветка размещений | https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta | HTML-навигация |
| Депозиты + фильтр | …`-na-bankovskih-depozitah/?filter_year=2025&filter_month=12` | HTML; GET-параметры Livewire-компонента `operation-day.operation-day-archive` |
| Файл | `https://roskazna.gov.ru/storage/operation-day-files/<метка времени>.docx\|.xml` | DOCX/XML; имя в хранилище не содержит дату отбора — берите из таблицы |

Отображаемое имя файла в таблице («02.10.2026otbor_14.docx») кодирует дату публикации и номер отбора; имя в хранилище (`20261002_172028285.docx`) — только метку времени. У ПФИ — старые пути `storage/migrate/roskaznagovru/opd/` с датой в имени (`25022022swap_itogi.docx`).

## Объекты данных и показатели

- Гранулярность — **отбор заявок** (аукцион): дата, уникальный идентификатор отбора (например, `22026476`), валюта, вид средств, максимальный объём, срок в днях, даты внесения и возврата, тип ставки (FIXED/FLOATING), минимальная ставка или базовая плавающая ставка и спред, минимальный объём заявки, площадка, расписание торгов.
- Каждая строка таблицы — публикация за дату: анонсы предстоящих отборов и/или итоги (`*_itogi` у ПФИ). В одной строке бывает несколько пар файлов (несколько отборов в день).
- Значения — в **млн денежных единиц** в DOCX депозитов, но масштабы между инструментами различаются (см. ловушки).
- Ключи связки: `id отбора` (сквозной между XML и DOCX) + `date`; итоги ↔ анонсы по тому же `id`. Сопоставление с рыночными ставками — внешние источники (ЦБ), с исполнением бюджета — только методически.

**Пробелы**: агрегированной страницы «объём средств, полученных от размещения» нет (заглушка); нет сводного CSV/API; итоги отбора в XML депозитов — поля `totalbid/totalaccept/totalsettle` могут быть пустыми в анонсе.

## Структура файлов и словарь данных

### XML депозита (`<Depo><Depoauc1>`)

Ключевые теги (проверенный файл, отбор 05.10.2026): `aucdate` (05.10.2026), `id` (22026476), `cur` («рубли»), `FundsPlaced` («средства единого казначейского счёта»), `maxvol` (`78000` — **млн**), `term` (2 дня), `firstdate`/`seconddate` (внесение/возврат), `ratetype` (`FIXED`/`FLOATING`), `minrate` (13.37), `baseflrate`/`minspread` (для плавающих), `depotype` («Срочный»), `minorder` (1000), `maxcrorder` (2), `orderform` («Открытая»), `place` (например, «АО СПВБ»), расписание: `predtime`, `conctime`, `biddingtime`, `registrytime`, `cutofftime`, `paytime`, итоги: `totalbid`, `totalaccept`, `totalsettle`.

### XML репо (`<Repo><Repoauc1>`)

`place` («Не на организованных торгах»), `aucdate`, `id` (22026226), `list` (перечень бумаг — ОФЗ и внешние облигационные займы), `basket` (например, `GCFEDBONDS`), `maxvol` (`2000000000,00` — **в рублях, с запятой-десятичной**), `cur`, `FundsPlaced`, `term` (1 день), `ratetype`, `minrate` (13.37), далее аналогично депозиту. В XML встречается BOM — читайте `utf-8-sig`.

**Ловушка масштабов**: `maxvol` депозитов — в **млн** (78 000 = 78 млрд руб.), `maxvol` репо — в **рублях** (2 000 000 000,00 = 2 млрд руб.). DOCX депозитов печатает «78 000» с пробелом-разделителем тысяч. Не усредняйте и не складывайте объёмы разных инструментов без нормализации.

### DOCX-анонсы

Титул «Информация о проведении отборов заявок кредитных организаций на заключение договоров банковского депозита», таблица «Параметры отборов заявок» с тем же составом полей и теми же `id` отборов, что в XML. Распаковывается как OOXML; текст извлекается по параграфам.

| Ловушка | Проявление | Обход |
| --- | --- | --- |
| Дата строки ≠ дата отбора | строка «2 октября 2026» содержит отборы 05.10.2026 | берите `aucdate` из файла, дату строки храните как дату публикации |
| 10 дат в выдаче | таблица показывает последние 10 дат фильтра; пагинации в HTML нет | перебирайте `filter_year`/`filter_month` и склейте выдачу |
| Пустые годы | `filter_year=2018..2020` — пусто (кнопки лет 2021–2026) | не ожидайте глубокого архива на странице |
| Масштабы maxvol | депозиты — млн; репо — рубли | нормализуйте по инструменту |
| BOM и запятая | XML репо с BOM; числа с запятой-десятичной | `utf-8-sig`, замена запятой на точку |
| Непрозрачные имена | `20261002_172028285.docx` — метка времени | сопоставляйте файл со строкой таблицы по странице-источнику |

## Периодичность обновления

По операционным дням: депозиты — почти ежедневно (10 дат выдачи покрыли 21.09–02.10.2026), репо обеих площадок и депозиты с ЦК — по мере проведения отборов; ПФИ — не обновляется с февраля 2022. Файлы выходят парами DOCX+XML; анонсы — за 1–3 дня до отбора, итоги — в день отбора или позже.

## Ограничения и особенности

- **Нет API и сквозного архива**: глубже 10 дат за один запрос не получить; для длинного ряда собирайте выдачу по месяцам/годам у себя.
- Три страницы ветки — заглушки; не стройте пайплайны на «займе ценных бумаг», «банковских счетах» и «информации об объёме средств» без мониторинга их наполнения.
- ПФИ заморожен (свежие файлы — 18–25 февраля 2022, пути `migrate/`): исторический контур, не текущий источник.
- Запросы без браузерного `User-Agent` рискуют получить 403; в этой среде также наблюдалась ошибка TLS-цепочки (см. [карточку форм ФБ](/data-sources/federal/roskazna-federal-budget-execution)).
- Итоговые поля XML (`totalaccept`, `totalsettle`) в анонсах пусты или содержат `-` — различайте анонс и итог по содержимому, а не по имени файла.

## Примеры доступа

Сбор выдачи депозита за месяц и разбор XML (проверено в этой среде 2026-10-03):

```bash
curl -k -A "Mozilla/5.0" -o dep.xml \
  "https://roskazna.gov.ru/storage/operation-day-files/20261002_172028987.xml"
```

```python
import re, subprocess
from xml.etree import ElementTree

BASE = "https://roskazna.gov.ru"
PAGE = f"{BASE}/finansovye-operacii/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta-na-bankovskih-depozitah/"

def fetch(url):
    return subprocess.run(["curl", "-sk", "-A", "Mozilla/5.0", url],
                          capture_output=True, check=True).stdout

page = fetch(f"{PAGE}?filter_year=2025&filter_month=12")
files = list(dict.fromkeys(re.findall(r'href="(/storage/operation-day-files/[^"]+\.xml)"', page)))
blob = fetch(BASE + files[0])
root = ElementTree.fromstring(blob.lstrip(b"\ufeff"))
for auc in root.iter():                    # Depoauc1
    if auc.getchildren():
        rec = {child.tag: child.text for child in auc}
        print(rec.get("id"), rec.get("aucdate"), rec.get("maxvol"), rec.get("term"), rec.get("minrate"))
```

## Связанные страницы wiki

- [Привлечение средств на ЕКС](/data-sources/federal/roskazna-finops-treasury-account-fundraising) — обратная сторона операций; ветка-заготовка под репо на организованных торгах.
- [Размещение средств единого счёта федерального бюджета](/data-sources/federal/roskazna-finops-federal-budget-account-placements) — параллельная ветка для ЕСФБ.
- [Операционный день](/data-sources/federal/roskazna-finops-operating-day) — удалённая сводная таблица этих операций; исторический контекст.
- [Витрины данных Казначейства](/data-sources/federal/roskazna-datamarts) — агрегированные ряды для сверки.
- [Отчёты Федерального казначейства](/data-sources/federal/roskazna-reports) — карта смежных разделов портала.
- [Единый счёт бюджета](/glossary/unified-budget-account) — что такое ЕКС и его роль.
- [Казначейское исполнение](/glossary/treasury-execution) — отличать управление ликвидностью от исполнения бюджета.

## Не путать с

- [Привлечение средств на ЕКС](/data-sources/federal/roskazna-finops-treasury-account-fundraising) — Казначейство получает ликвидность; здесь размещает временно свободные средства.
- [Размещение средств ЕСФБ](/data-sources/federal/roskazna-finops-federal-budget-account-placements) — другой счёт (единый счёт федерального бюджета).
- [Формы исполнения федерального бюджета](/data-sources/federal/roskazna-federal-budget-execution) — исполнение по КБК, а не операции денежного рынка.
- [Депозиты ФНБ в данных Минфина](/data-sources/federal/minfin-opendata) — набор `repo` там об остатках **федерального бюджета в депозитах**; расчётные ряды бюджетного правила — [minfin-fedbud-oil](/data-sources/federal/minfin-fedbud-oil).

## Частые вопросы

**В: Дата в таблице — это дата аукциона?**

**О:** Нет: это дата публикации. Проверенный пример: строка «2 октября 2026» содержит анонсы отборов на 05.10.2026. Отчётную дату берите из `aucdate` XML или «Дата проведения отбора» DOCX.

**В: Как собрать историю глубже 10 дат?**

**О:** GET-фильтрами: `?filter_year=2025&filter_month=12` — и так по каждому месяцу; кнопки лет в интерфейсе покрывают 2021–2026, более ранние годы страницей не отдаются. Склеивайте выдачу у себя, дедуплицируя по `id` отбора.

**В: Где увидеть объёмы и ставки прошедших аукционов одной сводкой?**

**О:** На самой ветке — только в файлах-итогах по каждому отбору. Агрегированная страница «Информация об объёме средств, полученных от размещения» — заглушка; историческую сводную таблицу по инструментам держала удалённая страница «Операционный день» (см. её карточку).

**В: Почему нельзя складывать объёмы депозитов и репо из XML?**

**О:** Поля `maxvol` в разных инструментах в разных масштабах: у депозитов — миллионы (78 000 = 78 млрд руб.), у репо — рубли (2 000 000 000,00 = 2 млрд руб.). Нормализуйте масштаб по инструменту до любых агрегатов.
