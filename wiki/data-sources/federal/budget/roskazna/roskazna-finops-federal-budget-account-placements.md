---
title: "Казначейство: размещение средств единого счёта федерального бюджета (отчёты о финансовых операциях)"
sidebar_label: "Казначейство: размещение средств ЕСФБ"
description: >-
  Ветка «Финансовые операции» портала Казначейства по размещению средств
  единого счёта федерального бюджета: активное юаневое/рублёвое репо вне
  организованных торгов (XML-схема Repo, идентификаторы 1xxxxxxx, с 2026),
  редкие депозиты (последние видимые ноябрь–декабрь 2024), замороженные с 2021
  репо на организованных торгах и ПФИ, четыре страницы-заглушки (счета, ЦК,
  бюджетные кредиты, валюта).
tags: [data-source, federal, budget, reporting]
last_updated: 2026-10-03
last_verified: 2026-10-03
slug: /data-sources/federal/roskazna-finops-federal-budget-account-placements
content_type: data_source
entity_type: data_source
audience_level: developer
data_domain: budget
source_url: "https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta"
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
update_lag: "репо — ежедневно по операционным дням (10 дат выдачи = 08–22.09.2026); депозиты — нерегулярно"
archive_depth: "10 дат на выдачу; фильтр лет работает, но за 2025 у репо пусто (операции с 2026)"
license_or_terms: not-explicit
relationships:
  - type: operated_by
    target: /organizations/federal-treasury
  - type: published_by
    target: /organizations/federal-treasury
related_pages:
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-finops-treasury-account-placements
  - /data-sources/federal/roskazna-finops-treasury-account-fundraising
  - /data-sources/federal/roskazna-finops-operating-day
  - /data-sources/federal/roskazna-federal-budget-execution
  - /data-sources/federal/roskazna-reports
  - /glossary/unified-budget-account
  - /glossary/treasury-execution
---

# Казначейство: размещение средств единого счёта федерального бюджета (отчёты о финансовых операциях)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Размещение временно свободных средств **единого счёта федерального бюджета (ЕСФБ)**: репо, депозиты, ПФИ; страницы бюджетных кредитов и валютных операций — заглушки |
| Тип доступа | Листовые страницы с таблицей «Дата \| Документы»; файлы — пары DOCX + XML; API нет |
| Основные форматы | DOCX, XML; обёртка HTML |
| Оператор и публикатор | [Федеральное казначейство](/organizations/federal-treasury) |
| Режим доступа | Открытый |

Коротко: витрина операций со **вторым** из двух казначейских счетов — не путать с [ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements). Единственный живой контур ветки — **репо вне организованных торгов, в том числе юаневое** (в проверенном XML: корзина `GCCNYBONDS`, валюта «китайский юань», ставка 2,18%): те же схемы файлов, что у ЕКС, но идентификаторы отборов из серии `1xxxxxxx` и тег `FundsPlaced` = «средства единого счета федерального бюджета». Депозиты публикуются нерегулярно (свежие видимые — ноябрь–декабрь 2024), остальное заморожено или пусто.

## Качество и верификация

Измерения трактуются по [справочнику качества источников](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | **2026-10-03.** Обход всех девяти страниц ветки; скачан и разобран XML репо ЕСФБ от 22.09.2026; проверен GET-фильтр лет (2025 корректно пуст — операции репо начались в 2026). |
| Полнота (`data_completeness`) | **Частичная.** Живая страница одна (репо вне организованных торгов); депозиты нерегулярны; две заморожены с 2021 года; четыре — заглушки без таблиц и файлов. |
| Машиночитаемость (`machine_readability`) | **Хорошая на живом контуре**: XML со стабильной схемой `Repo`; BOM и запятая-десятичная в числах. |
| Юридическая значимость (`legal_significance`) | **Официальные сообщения** оператора кассового исполнения. |
| Задержка обновления (`update_lag`) | Репо: 10 дат выдачи — 08–22.09.2026, практически каждый операционный день. Депозиты: между видимыми публикациями недели и месяцы. |
| Глубина архива (`archive_depth`) | 10 дат на выдачу (как у ЕКС); фильтр `filter_year` работает: за 2025 у репо пусто — публичные операции начались в 2026 году. |
| Лицензия (`license_or_terms`) | Не указаны. |

## Описание и границы

Ветка [«Размещение средств единого счёта федерального бюджета»](https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta) раздела «Финансовые операции». Состояние листовых страниц на 2026-10-03:

| Страница (хвост URL) | Состояние | Последние публикации |
| --- | --- | --- |
| `…-po-dogovoram-repo-ne-na-organizovannyh-torgah` | **живая**, обновляется | 08–22.09.2026, почти ежедневно |
| `…-na-bankovskih-depozitah` | нерегулярная | видимые строки: ноябрь–декабрь 2024 и февраль 2022; часть файлов перезалита позже (метка хранилища 31.10.2025) |
| `…-po-dogovoram-repo-na-organizovannyh-torgah` | заморожена | одна публикация 27.10.2021 (`27.10.2021repo_ck_35`) |
| `…-v-proizvodnye-finansovye-instrumenty` | заморожена | декабрь 2021 (`28122021swap*`), пути `storage/migrate/…` |
| `…-na-bankovskih-schetah` | заглушка | — |
| `…-bankovskogo-vklada-depozita-s-centralnym-kontragentom` | заглушка | — |
| `byudzhetnye-kredity` | заглушка (таблицы и файлов нет) | — |
| `pokupka-prodazha-inostrannoj-valyuty-…` | заглушка (таблицы и файлов нет) | — |

Внимание: страницы **бюджетных кредитов** и **покупки/продажи иностранной валюты** фигурируют в меню ветки, но на 2026-10-03 пусты — не используйте эту ветку как источник по этим направлениям (кредитный контур раскрывается в [отчётности по госдолгу](/reporting/public-debt-reporting)).

Сюда **не входит**: [ЕКС-ветка](/data-sources/federal/roskazna-finops-treasury-account-placements) — другой счёт; [привлечение средств на ЕКС](/data-sources/federal/roskazna-finops-treasury-account-fundraising); исполнение федерального бюджета по [КБК](/glossary/kbk) — [формы 0503117/0507011](/data-sources/federal/roskazna-federal-budget-execution); удалённая сводная страница [«Операционный день»](/data-sources/federal/roskazna-finops-operating-day).

## Оператор

[Федеральное казначейство](/organizations/federal-treasury) публикует анонсы и итоги отборов.

- [Портал Федерального казначейства](/information-systems/federal/roskazna-portal) — витрина, на которой размещена ветка.

## URL и точки доступа

| Тип доступа | URL | Формат и назначение |
| --- | --- | --- |
| Ветка ЕСФБ | https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta | HTML-навигация |
| Репо вне организованных торгов (+фильтр) | …`-po-dogovoram-repo-ne-na-organizovannyh-torgah/?filter_year=2026` | HTML; GET-параметры Livewire-компонента |
| Файл | `https://roskazna.gov.ru/storage/operation-day-files/<метка времени>.xml\|.docx` | XML/DOCX; замороженные страницы — пути `storage/migrate/roskaznagovru/opd/` |

## Объекты данных и показатели

- Гранулярность — **отбор заявок**: XML со схемой `Repo` (та же, что у [ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements)): `aucdate`, `id`, `list` (перечень бумаг), `basket`, `maxvol`, `cur`, `FundsPlaced`, `term`, `firstdate`/`seconddate`, `ratetype`, `minrate`, `baseflrate`/`minspread`, `discount2`, `minorder`, `maxcrorder`, `orderform`, расписание торгов.
- **Маркеры счёта**: `FundsPlaced` = «средства единого счета федерального бюджета» и серия идентификаторов отборов `1xxxxxxx` (проверено `12026105`; у ЕКС — `2xxxxxxx` вида `22026476`). При склейке рядов двух веток различайте их по этим полям, а не только по URL.
- **Юаневый контур**: проверенный отбор 22.09.2026 — `cur` «китайский юань», корзина `GCCNYBONDS` (облигации внешних облигационных займов), ставка 2,18% годовых, срок 7 дней, `maxvol` 701 947 555,61 юаня. У ЕКС-репо той же даты корзина `GCFEDBONDS` в рублях.
- Ключи связки: `id` отбора + `aucdate`; с ЕКС-рядами связки нет (разные счета и инструменты).

**Пробелы**: нет сводных итогов по инструменту в виде таблицы (только файлы); страницы кредитов и валюты пусты; глубина архива не раскрывается глубже 10 дат за запрос.

## Структура файлов и словарь данных

Проверенный XML (`esfb_repo`, отбор 22.09.2026): заголовок `<?xml version="1.0" encoding="UTF-8"?>` без BOM у этой ветки (у ЕКС-репо BOM есть), корень `<Repo>`, блок `<Repoauc1>`. Числа — строки с запятой-десятичной (`701947555,61`) и точкой в ставках (`2.18`); прочерки `-` для отсутствующих значений.

| Ловушка | Проявление | Обход |
| --- | --- | --- |
| Два счёта с одинаковыми схемами | XML `Repo` идентичен ЕКС-схеме | различайте по `FundsPlaced` и серии `id`, не по структуре |
| Юаневые операции | `cur` «китайский юань», ставки ~2% | не сопоставляйте напрямую с рублёвыми ставками |
| Смешанные пути файлов | живая ветка — `operation-day-files/`, замороженная — `migrate/…` с датой в имени | оба пути рабочие; храните исходный URL |
| Заглушки в меню | «Бюджетные кредиты», «Валюта» без файлов | мониторьте `lastmod` sitemap перед включением в пайплайн |
| 10 дат в выдаче | пагинации нет | перебор `filter_year`/`filter_month` |

## Периодичность обновления

Репо вне организованных торгов — практически ежедневно (10 дат выдачи покрыли 08–22.09.2026). Депозиты — нерегулярно (разрывы в недели и месяцы; часть файлов датирована 2022–2024 годами). Репо на организованных торгах и ПФИ не обновляются с 2021 года. Заглушки не обновляются вовсе; о появлении публикаций сигнализирует `lastmod` в sitemap.

## Ограничения и особенности

- Ветка **асимметрична**: одна живая страница против четырёх заглушек и двух замороженных — не стройте ожидания «как у ЕКС» по составу инструментов.
- Юаневые репо ЕСФБ — отдельный валютный контур: ставки в юанях, объёмы в юанях; для сопоставления с рублёвыми операциями нужна валютоная нормализация.
- Запросы без браузерного `User-Agent` рискуют получить 403; ошибки TLS-цепочки в этой среде описаны в [карточке форм ФБ](/data-sources/federal/roskazna-federal-budget-execution).
- Показатели ветки не сверяются построчно с формами 0503117 — это операции денежного рынка, а не исполнение бюджета.

## Примеры доступа

Сбор выдачи репо ЕСФБ и разбор XML (проверено в этой среде 2026-10-03):

```python
import re, subprocess
from xml.etree import ElementTree

BASE = "https://roskazna.gov.ru"
PAGE = (f"{BASE}/finansovye-operacii/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta/"
        "razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta-po-dogovoram-repo-ne-na-organizovannyh-torgah/")

def fetch(url):
    return subprocess.run(["curl", "-sk", "-A", "Mozilla/5.0", url],
                          capture_output=True, check=True).stdout

page = fetch(PAGE)
files = list(dict.fromkeys(re.findall(r'href="(/storage/operation-day-files/[^"]+\.xml)"', page)))
blob = fetch(BASE + files[0])
root = ElementTree.fromstring(blob.lstrip(b"\ufeff"))
for auc in root.iter():
    if auc.getchildren():
        rec = {child.tag: child.text for child in auc}
        print(rec.get("id"), rec.get("cur"), rec.get("basket"), rec.get("minrate"))
```

## Связанные страницы wiki

- [Размещение средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements) — парная живая ветка по единому казначейскому счёту; те же схемы файлов.
- [Привлечение средств на ЕКС](/data-sources/federal/roskazna-finops-treasury-account-fundraising) — ветка-заготовка репо на организованных торгах.
- [Операционный день](/data-sources/federal/roskazna-finops-operating-day) — удалённая сводная таблица операций обоих счетов.
- [Исполнение федерального бюджета](/data-sources/federal/roskazna-federal-budget-execution) — формы 0503117/0507011; иной контур.
- [Отчёты Федерального казначейства](/data-sources/federal/roskazna-reports) — карта разделов портала.
- [Единый счёт бюджета](/glossary/unified-budget-account) — устройство казначейских счетов.
- [Казначейское исполнение](/glossary/treasury-execution) — терминологический контекст.

## Не путать с

- [Размещение средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements) — **другой счёт**: единый казначейский счёт (все бюджеты бюджетной системы) против единого счёта федерального бюджета; различайте по `FundsPlaced` и серии `id`.
- [Формы исполнения ФБ](/data-sources/federal/roskazna-federal-budget-execution) — кассовый факт по КБК, а не операции размещения.
- [Бюджетные кредиты в отчётности](/reporting/public-debt-reporting) — кредитный контур; страница кредитов в этой ветке пуста.

## Частые вопросы

**В: Чем эта ветка отличается от ветки ЕКС, если XML выглядит одинаково?**

**О:** Счётом и контуром операций: здесь — единый счёт федерального бюджета, маркировка `FundsPlaced` «средства единого счета федерального бюджета», идентификаторы отборов серии `1xxxxxxx`; у [ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements) — «средства единого казначейского счёта» и серия `2xxxxxxx`. Ключевое содержательное отличие: репо ЕСФБ проходит в том числе в китайских юанях (корзина `GCCNYBONDS`).

**В: Какие инструменты здесь реально живут?**

**О:** На 2026-10-03 — только репо вне организованных торгов (ежедневные публикации с 2026 года). Депозиты выходят нерегулярно (свежие видимые — конец 2024-го), репо на организованных торгах и ПФИ заморожены с 2021-го, страницы счетов с ЦК, бюджетных кредитов и валюты пусты.

**В: Где данные по бюджетным кредитам и валютным операциям, если пункты меню есть?**

**О:** В этой ветке их нет — страницы существуют, но не содержат таблиц и файлов. Для кредитного контура смотрите [отчётность по государственному долгу](/reporting/public-debt-reporting); за наполнением заглушек следите через `lastmod` sitemap.
