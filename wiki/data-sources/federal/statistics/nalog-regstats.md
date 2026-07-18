---
title: Статистика государственной регистрации ЮЛ и ИП (ФНС)
sidebar_label: Статистика госрегистрации ФНС
tags:
  - data-source
  - federal
  - statistics
  - organizations
source_url: >-
  https://www.nalog.gov.ru/rn77/related_activities/statistics_and_analytics/regstats/
last_updated: 2026-07-18
slug: /data-sources/federal/nalog-regstats
data_source_kind: files
jurisdiction: federal
access: open
formats:
  - html
  - zip
  - xls
  - docx
  - doc
status: current
related_information_system: /information-systems/federal/fnssite
description: >-
  официальные сводные формы ФНС 1-ЮР и 1-ИП: ZIP-архивы с многолистовыми XLS
  по состоянию реестров и регистрационным действиям, а также DOC/DOCX-таблицы
  гендерного состава при создании бизнеса; это агрегаты, не микроданные ЕГРЮЛ
  или ЕГРИП.
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/fns
  - type: operated_by
    target: /organizations/fns
related_pages:
  - /information-systems/federal/fnssite
  - /organizations/fns
  - /information-systems/federal/egrul
  - /data-sources/federal/nalog-statistics
  - /data-sources/federal/rosstat-opendata
  - /data-sources/federal/procurement
  - /data-sources/federal/7707329152-address
last_verified: 2026-07-18
jurisdiction_level: federal
data_completeness: partial
machine_readability: mixed
legal_significance: official
update_lag: "10–20 дней после 1 января в проверенных годовых пакетах 2023–2024"
archive_depth: "1-ЮР: 2002–2026; 1-ИП: 2005–2026; гендерные таблицы: 2024–2025 (витрина проверена 2026-07-18)"
license_or_terms: not-explicit
---

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный; **сводные отчёты** о государственной регистрации ЮЛ и ИП/КФХ, с национальными, окружными и региональными итогами внутри XLS |
| Тип доступа | HTML-витрина → годовая страница формы → вложенный ZIP с тремя XLS; для гендерной статистики — отдельные DOCX/DOC |
| Основные форматы | HTML, ZIP, **XLS** (BIFF8 внутри ZIP), DOCX, DOC; **XLSX в проверенных файлах не найден** |
| Оператор | [ФНС России](/organizations/fns) |
| Режим доступа | Открытый просмотр и скачивание; стабильного API и стабильного контракта URL вложений нет |

Коротко: это официальные **агрегированные** формы 1-ЮР и 1-ИП, а не записи ЕГРЮЛ/ЕГРИП. Для воспроизводимой обработки извлекайте ссылку с витрины, храните ZIP и его хеш, выбирайте один канонический вид листов и сверяйте заголовки с профилем года.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-07-18: витрина, два годовых пакета каждой формы и обе опубликованные гендерные таблицы |
| Полнота (`data_completeness`) | Частичная для задач по субъектам хозяйствования: охват — опубликованные агрегаты; нет ОГРН, ОГРНИП, ИНН, названий и построчных реестровых событий |
| Машиночитаемость (`machine_readability`) | Смешанная: HTML-навигация и ZIP/XLS пригодны для скрипта после разбора Excel-разметки; DOC/DOCX требуют отдельного извлечения таблицы |
| Юридическая значимость (`legal_significance`) | Официальная публикация ФНС |
| Задержка обновления (`update_lag`) | В проверенных финальных пакетах за 2023 и 2024 годы страницы опубликованы через 10–20 дней после 1 января; это наблюдение по образцам, не обещание срока |
| Глубина архива (`archive_depth`) | На проверенной витрине: 1-ЮР — 2002–2026, 1-ИП — 2005–2026, гендерные документы — 2024–2025 |
| Лицензия (`license_or_terms`) | Явная открытая лицензия в проверенных файлах и на витрине не указана |

## Описание

Карточка описывает раздел [«Статистика по государственной регистрации» ФНС](https://www.nalog.gov.ru/rn77/related_activities/statistics_and_analytics/regstats/). В нём годы ведут не прямо на «таблицу 1-ЮР/1-ИП», а на страницы форм; эти страницы содержат помесячные точки и вложения. В проверенных финальных точках на 01.01 каждый ZIP содержит три XLS: состояние реестра, годовой поток и поток за декабрь.

В объём **не** входят налоговые формы 1-НМ, 1-НДС и т. п. ([Налоговая статистика ФНС](/data-sources/federal/nalog-statistics)), поиск и выписки [ЕГРЮЛ/ЕГРИП](/information-systems/federal/egrul), а также наборы каталога открытых данных ФНС.

## Оператор

[Федеральная налоговая служба](/organizations/fns) публикует и эксплуатирует витрину.

- Карточка ИС: [Сайт ФНС России — статистика и данные](/information-systems/federal/fnssite) — портал, на котором меняются годовые страницы и вложенные URL.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Витрина регистрационной статистики | [nalog.gov.ru/…/regstats/](https://www.nalog.gov.ru/rn77/related_activities/statistics_and_analytics/regstats/) | HTML; ссылки на годы 1-ЮР, 1-ИП и гендерные файлы |
| Пример годовой страницы 1-ЮР | [Отчёт 2024 года](https://www.nalog.gov.ru/rn77/related_activities/statistics_and_analytics/forms/14414858/) | HTML; 12 точек за 2024 год, включая 01.01.2025 |
| Пример годовой страницы 1-ИП | [Отчёт 2024 года](https://www.nalog.gov.ru/rn77/related_activities/statistics_and_analytics/forms/14414849/) | HTML; 12 точек за 2024 год, включая 01.01.2025 |

Не используйте идентификатор годовой страницы или путь к вложению как вечный API. Реальные ссылки ниже извлечены из официальных страниц; при следующей выгрузке снова начинайте с витрины.

## Объекты данных и показатели

- **1-ЮР**: агрегированные количества ЮЛ в ЕГРЮЛ на дату среза, а также зарегистрированных и прекративших деятельность ЮЛ за год и за месяц. Разрезы формы — строка отчёта (в том числе организационно-правовая/статусная категория), графа показателя и территория.
- **1-ИП**: те же типы агрегатов для ИП и КФХ; в строках формы есть гражданство и КФХ, в графах — создание/прекращение и причины прекращения.
- **Гендерные публикации**: одна федеральная таблица на год регистрации бизнеса; пол и три ролевых показателя — ИП, руководитель компании, участник (учредитель) ООО.
- Единица всех проверенных числовых граф — **количество субъектов или регистрационных записей**, не рубли и не уникальные контрагенты. Строки с «ВСЕГО», «в том числе» и «из них» задают иерархию отчёта.
- В XLS есть поле **«Код УФНС»**. Это именно подпись источника: не объявляйте его ОКТМО, ОКАТО или другим классификатором без отдельного справочника.

## Структура опубликованных файлов и обработка данных

Факты в этом разделе установлены по файлам, скачанным 2026-07-18. Указанные ZIP — HTTP-ресурсы с `Content-Type: application/x-zip-compressed`; вложенные XLS не имеют собственного HTTP-URL и поэтому не имеют отдельного HTTP `Content-Type`. Их формат подтверждён как старый Excel BIFF8/OLE (`.xls`).

### 1. Реестр проверенных файлов

| Семейство | Отчётный период | Реальный URL | Формат | Назначение | Дата проверки |
| --- | --- | --- | --- | --- | --- |
| 1-ЮР | 2024; срез 01.01.2025, годовой и декабрьский разделы | [ut_1ur_2025_01.zip](https://www.nalog.gov.ru/html/sites/www.new.nalog.ru/files/related_activities/statistics_and_analytics/forms/reg/ut_1ur_2025_01.zip) | ZIP → `Отчет 1-ЮР_2025_01_01(1|2|3).xls`; HTTP `application/x-zip-compressed` | Основной паспорт ниже | 2026-07-18 |
| 1-ИП | 2024; срез 01.01.2025, годовой и декабрьский разделы | [1ip_2025_01.zip](https://www.nalog.gov.ru/html/sites/www.new.nalog.ru/files/related_activities/statistics_and_analytics/forms/reg/1ip_2025_01.zip) | ZIP → `Отчет 1-ИП_2025_01_01(1|2|3).xls`; HTTP `application/x-zip-compressed` | Основной паспорт ниже | 2026-07-18 |
| 1-ЮР — контроль структуры | 2023; срез 01.01.2024, годовой и декабрьский разделы | [1ur_2024_01.zip](https://www.nalog.gov.ru/html/sites/www.new.nalog.ru/2023/related_activities/statistics_and_analytics/forms/reg/1ur_2024_01.zip) | ZIP → три XLS; HTTP `application/x-zip-compressed` | Сравнение структуры между годами | 2026-07-18 |
| 1-ИП — контроль структуры | 2023; срез 01.01.2024, годовой и декабрьский разделы | [1ip_2024_01.zip](https://www.nalog.gov.ru/html/sites/www.new.nalog.ru/2023/related_activities/statistics_and_analytics/forms/reg/1ip_2024_01.zip) | ZIP → три XLS; HTTP `application/x-zip-compressed` | Сравнение структуры между годами | 2026-07-18 |
| Гендерный состав | 2024 | [gen2024.docx](https://data.nalog.ru/html/sites/www.new.nalog.ru/files/related_activities/statistics_and_analytics/forms/gen/gen2024.docx) | DOCX; HTTP `application/vnd.openxmlformats-officedocument.wordprocessingml.document` | Федеральная таблица «пол × роль» | 2026-07-18 |
| Гендерный состав | 2025 | [gen2025.doc](https://data.nalog.ru/html/sites/www.new.nalog.ru/files/related_activities/statistics_and_analytics/forms/gen/gen2025.doc) | DOC; HTTP `application/msword` | Та же логическая таблица; извлечена после конвертации и визуально сверена | 2026-07-18 |

### 2. Логическая модель данных

**1-ЮР.** Каноническая строка после разворота — «период × раздел × строка отчёта × графа показателя × территория». В пакете 2024 года раздел 1 — состояние на 01.01.2025; раздел 2 — 01.01.2024–01.01.2025; раздел 3 — декабрь 2024. Строки кодируют, в частности, коммерческие/некоммерческие организации и ОПФ; графы — созданные, действующие в специальных статусах, прекращённые и причины прекращения. Составной ключ: `source_family + reporting_period + report_section + source_row_code + indicator_code + territory_code/territory_name`; для РФ и округов `territory_code = null`. Итог территории — строка без «Кода УФНС» (РФ или округ); итог строки — формула «стр. … = …» либо «ВСЕГО». Не считайте «в том числе», «из них» и ячейки `X` отдельными числовыми наблюдениями.

В форме нет пола, ОГРН/ИНН, названия ЮЛ, ОКВЭД, денег и реестровых записей по организациям. С [ЕГРЮЛ/ЕГРИП](/information-systems/federal/egrul) допустимо только сопоставление опубликованных агрегатов на одинаковую дату и с одинаковым определением показателя; построчный join невозможен. С [Росстатом](/data-sources/federal/rosstat-opendata) — сравнение рядов после проверки определения совокупности, периода и территориального охвата; с [закупочными данными](/data-sources/federal/procurement) — лишь контекст «территория × период», не связь поставщика или контракта.

**1-ИП.** Гранулярность та же: «период × раздел × строка формы × графа × территория». Раздел 1 показывает состав ЕГРИП на дату, разделы 2 и 3 — регистрации и прекращения за год/декабрь. Реальные измерения: территория, код УФНС, строка гражданства (граждане РФ, иностранные граждане, лица без гражданства), ИП/КФХ и причина прекращения в графах. Ключ аналогичен 1-ЮР с кодами строк `1010…1050`, `2010…2050`, `3010…3050`. В строках «ВСЕГО» и колонках «в том числе» есть перекрывающиеся агрегаты; не складывайте их между собой. Пол, ОГРНИП, ИНН, имя, ОКВЭД и финансовые показатели отсутствуют — правила сопоставления с ЕГРИП, Росстатом и закупками такие же, как для 1-ЮР.

**Гендерные документы.** Строка после разворота — «год регистрации бизнеса × пол × роль»; в каждом проверенном документе две строки (`женщины`, `мужчины`) и три показателя. Ключ: `source_family + reporting_period + sex + indicator_code`; `territory_name`, `territory_code`, `source_sheet` и `source_row_code` равны `null`. Итогов по полу, территории и роли в файлах нет. Документы не дают правила пересечения ролей, поэтому нельзя складывать три ролевых графы и называть результат числом уникальных людей или организаций; также невозможен join с реестром, Росстатом или закупками на уровне объекта.

**Проверенная несопоставимость 2023 → 2024.** В 1-ЮР ZIP за 2023 год каждый XLS имеет 133 листа, а в пакете за 2024 — 136: добавлены строки/листы `1174–1176` (федеральные, региональные и муниципальные казённые предприятия) и графа по статье 21.3 Закона № 129‑ФЗ; в разделах 2–3 её добавление сдвигает номер последней графы. Лист ` Юго-Западные субъекты Российской Федерации` переименован в ` Юго-Западные субъекты` во всех двух формах. В двух проверенных пакетах 1-ИП состав содержательных граф одинаков, но это не доказательство неизменности последующих лет. Поэтому перед склейкой проверяйте период в заголовке, набор листов, коды строк и **текст** каждой графы, а не её порядковый номер.

### 3. Паспорт структуры файла

**1-ЮР, пакет за 2024 год (`ut_1ur_2025_01.zip`).**

| Элемент | Фактическое значение | Правило извлечения |
| --- | --- | --- |
| Вложенные файлы и разделы | `(1)` — раздел 1, состояние на 01.01.2025; `(2)` — раздел 2, 01.01.2024–01.01.2025; `(3)` — раздел 3, декабрь 2024 | Обрабатывайте каждый XLS как отдельный период/раздел; не складывайте их |
| Листы | По 136 в каждом XLS: `Российская Федерация`; строки отчёта `1000, 1100, 1110, 1120, 1130, 1131, 1140–1144, 1150, 1151, 1160, 1170–1176, 1180, 1190, 1200, 1210, 1220–1222, 1230–1233, 1240–1242, 1250, 1300` (во 2/3 разделах — тот же шаблон с префиксом 2/3); 9 групп территорий; листы `01…79`, `86`, `87`, `89…95`, `99` | Выберите **листы строк отчёта** (`1000`, `2000`, `3000` и т. п.) как канонический широкий вид. Листы РФ, округов и субъектов — дублирующие повороты, не добавляйте их к тем же наблюдениям |
| Начало таблицы | В `1000`: шапка Excel-строки 5–10, `А/Б` в строке 10, данные с 11; в `2000`: 6–11/11/12; в `3000`: 4–9/9/10 | Читайте `header=None`; профиль задаёт `header_rows`, `graph_row`, `data_start` в нумерации с нуля |
| Заголовки и разметка | 5–6 уровней шапки, объединённые ячейки (29 на листе `1000`, 75 на листе РФ); `А` — наименование строки, `Б` — код строки/территории, затем графы 1–20 | Разворачивайте только диапазоны реально объединённых ячеек, а не все пустоты через `ffill`: иначе названия соседних граф смешаются |
| Столбцы и единицы | В `1000` — «Код УФНС», «Наименование субъекта РФ», 20 граф количества ЮЛ; в `1300` — те же два поля и одно «общее количество записей … в ЕГРЮЛ» | Храните графу как `indicator_code: gr_<номер>` и полный склеенный текст шапки как `indicator_name`; единица `count` |
| Примечания и итоги | Формулы строк (`стр. 1000 = …`), строки «в том числе», «из них», текстовые `X`; национальный и окружные итоги без кода УФНС | Не превращайте формулы и `X` в числа; отмечайте безкодовые территориальные строки как `is_total: true` |

**1-ИП, пакет за 2024 год (`1ip_2025_01.zip`).**

| Элемент | Фактическое значение | Правило извлечения |
| --- | --- | --- |
| Вложенные файлы и разделы | `(1)` — состояние ЕГРИП на 01.01.2025; `(2)` — 01.01.2024–01.01.2025; `(3)` — декабрь 2024 | Раздел 1 — остаток, 2 и 3 — потоки; это разные периоды и смыслы |
| Листы | По 104 в каждом XLS: `Российская Федерация`; строки `1010–1050` (или `2010–2050`, `3010–3050`); 9 групп территорий; `01…79`, `86`, `87`, `89…95`, `99` | Канонические территориальные листы: `1010`, `2010`, `3010`; листы субъектов/округов не добавляйте второй раз |
| Начало таблицы | `1010`: шапка 5–12, `А/Б` 12, данные 13; `2010`: 6–13/13/14; `3010`: 5–12/12/13 | Используйте профиль конкретного раздела, не общий `skiprows` |
| Заголовки и разметка | 7–8 уровней, объединённые ячейки (42 на `1010`, 30 на `2010`/`3010`); раздел 1 содержит графы 1–25, разделы 2–3 — 1–18 | В разделах 2–3 графы включают ИП/КФХ и причины прекращения; сравнивайте их по тексту шапки |
| Специальная строка | `1050`, `2050`, `3050` — 4-колоночные листы с общим числом регистрационных записей | Обрабатывайте как отдельный однографный показатель, не ожидайте шапку из 18–25 граф |
| Примечания и итоги | «ВСЕГО», «в том числе», «из них», формулы и безкодовые РФ/округа | Те же правила: `X` не число, без кода — территориальный итог |

**Гендерный документ 2024 (`gen2024.docx`).**

| Элемент | Фактическое значение | Правило извлечения |
| --- | --- | --- |
| Листы/таблицы | Листов нет; 1 таблица Word, 4 строки × 5 столбцов | Извлекайте первую таблицу, а не абзацы документа |
| Заголовок | Два уровня: «Год регистрации бизнеса», «Пол», общий заголовок количества субъектов и три роли | Учтите объединения: первые два заголовка объединены по вертикали, общий — по горизонтали |
| Данные и единица | Строки 3–4: 2024 × `женщины`/`мужчины`; ИП, руководитель компании, участник (учредитель) ООО; значения — количество | Разверните три роли в `indicator_code`; `source_row_number = null`, используйте номер строки Word при необходимости |
| Итоги и примечания | Итоговой строки и территорий нет | Не добавляйте несуществующие итоги и коды |

**Гендерный документ 2025 (`gen2025.doc`).**

| Элемент | Фактическое значение | Правило извлечения |
| --- | --- | --- |
| Формат и проверка | Старый DOC; 1 таблица 4 × 5. После конвертации в DOCX структура и визуальная таблица сверены вручную | DOC/DOCX обрабатывайте отдельным конвейером; после извлечения сверяйте строки и объединённую шапку с рендером |
| Заголовок и данные | Та же двухуровневая шапка и те же три роли; строки 2025 × `женщины`/`мужчины` | Тот же long-профиль, но не переносите правило автоматически на будущий DOC без проверки |

### 4. Нормализованная схема

Рекомендуемая таблица — long-формат: одна опубликованная числовая графа на строку. Поля `territory_*` и `source_sheet` намеренно `null` для гендерных документов; коды субъектов не создаются искусственно.

```yaml
fns_registration_stat_long:
  grain: "одна числовая графа опубликованной формы"
  source_family: "1ur | 1ip | gender_business_creation"
  reporting_period: "as_of:2025-01-01 | interval:2024-01-01/2025-01-01 | month:2024-12 | year:2024"
  report_section: "1 | 2 | 3 | null"
  territory_name: "точный текст из XLS | null"
  territory_code: "точное значение поля 'Код УФНС' строкой | null"
  territory_code_label: "Код УФНС | null"
  source_row_code: "1000, 1010, … | null"
  source_row_name: "подпись строки формы | null"
  indicator_code: "gr_1, gr_2, … | entrepreneur | company_head | llc_participant"
  indicator_name: "полный текст многоуровневой шапки"
  sex: "женщины | мужчины | null"
  value: "integer"
  unit: "count"
  is_total: "true для территориальной строки без 'Кода УФНС'; false иначе"
  source_file_url: "HTTP-URL ZIP/DOC/DOCX"
  source_file_content_type: "Content-Type HTTP-ответа"
  source_file_sha256: "SHA-256 скачанного HTTP-файла"
  source_member_name: "имя XLS внутри ZIP | null"
  source_sheet: "имя листа XLS | null"
  source_row_number: "1-based строка Excel | null для Word"
  source_table_index: "1 | null"
  source_table_row: "1-based строка таблицы Word | null"
```

`is_total` здесь относится к **территориальному** итогу. Иерархический итог строки формы хранится в `source_row_code/source_row_name` и должен определяться по подписи/формуле конкретного года, а не универсальным регулярным выражением.

### 5. Практические примеры

Получение витрины и поиск вложений: главная страница содержит годовые HTML-страницы, поэтому функция ищет и прямые XLS/XLSX, и ZIP/DOC, не предполагая постоянный путь.

```python
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup

SHOWCASE = "https://www.nalog.gov.ru/rn77/related_activities/statistics_and_analytics/regstats/"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; finguide-research/1.0; +https://github.com/ibegtin/finguide)"}
session = requests.Session()
session.headers.update(HEADERS)

def get_html(url: str) -> str:
    response = session.get(url, timeout=30)
    response.raise_for_status()
    if "html" not in response.headers.get("Content-Type", "").lower():
        raise ValueError(f"ожидался HTML, получен {response.headers.get('Content-Type')}")
    return response.text

def find_file_links(url: str) -> list[str]:
    soup = BeautifulSoup(get_html(url), "html.parser")
    result = []
    for a in soup.select("a[href]"):
        href = urljoin(url, a["href"])
        probe = f"{a.get_text(' ', strip=True)} {href}".lower()
        if any(ext in probe for ext in (".xls", ".xlsx", ".zip", ".docx", ".doc")):
            result.append(href)
    return sorted(set(result))

def find_year_pages(url: str, html: str) -> list[str]:
    soup = BeautifulSoup(html, "html.parser")
    return sorted({urljoin(url, a["href"]) for a in soup.select("a[href]")
                   if "/statistics_and_analytics/forms/" in a["href"]})

# На витрине сначала найдите нужную годовую страницу 1-ЮР/1-ИП,
# затем вызовите find_file_links(year_page). В проверенной странице 2024
# это даёт ZIP, а не прямой XLS.
showcase_html = get_html(SHOWCASE)
for year_page in find_year_pages(SHOWCASE, showcase_html):
    print(year_page, find_file_links(year_page))
```

Скачивание с фиксацией MIME-типа, URL и хеша. Проверенный 1-ЮР-образец — ZIP, поэтому после проверки извлекается именно вложенный XLS.

```python
from hashlib import sha256
from pathlib import Path
from zipfile import ZipFile

def download(url: str, output: Path) -> dict:
    response = session.get(url, timeout=60, stream=True)
    response.raise_for_status()
    content_type = response.headers.get("Content-Type", "").lower()
    if "zip" not in content_type:  # для профиля 1-ЮР/1-ИП 2024
        raise ValueError(f"ожидался ZIP, получен {content_type}")
    digest = sha256()
    with output.open("wb") as fh:
        for chunk in response.iter_content(1024 * 1024):
            if chunk:
                fh.write(chunk)
                digest.update(chunk)
    return {"source_file_url": url, "content_type": content_type, "sha256": digest.hexdigest()}

meta = download(
    "https://www.nalog.gov.ru/html/sites/www.new.nalog.ru/files/related_activities/statistics_and_analytics/forms/reg/ut_1ur_2025_01.zip",
    Path("ut_1ur_2025_01.zip"),
)
with ZipFile("ut_1ur_2025_01.zip") as zf:
    member = next(n for n in zf.namelist() if n.endswith("(1).xls"))
    zf.extract(member, "raw/1ur")
print(meta, member)
```

Профили ниже проверены именно на вложениях среза 01.01.2025. `header=None` обязателен: Excel-шапка многострочная и не совпадает между разделами. Для другого года сначала сравните title, набор листов и `А/Б`-строку с паспортом.

```python
from pathlib import Path
import re
import pandas as pd
import xlrd

PROFILE_2025_01 = {
    ("1ur", 1): {"member_tail": "(1).xls", "sheet_name": "1000", "header_rows": range(4, 10), "graph_row": 9, "data_start": 10, "source_row_code": "1000"},
    ("1ur", 2): {"member_tail": "(2).xls", "sheet_name": "2000", "header_rows": range(5, 11), "graph_row": 10, "data_start": 11, "source_row_code": "2000"},
    ("1ur", 3): {"member_tail": "(3).xls", "sheet_name": "3000", "header_rows": range(3, 9), "graph_row": 8, "data_start": 9, "source_row_code": "3000"},
    ("1ip", 1): {"member_tail": "(1).xls", "sheet_name": "1010", "header_rows": range(4, 12), "graph_row": 11, "data_start": 12, "source_row_code": "1010"},
    ("1ip", 2): {"member_tail": "(2).xls", "sheet_name": "2010", "header_rows": range(5, 13), "graph_row": 12, "data_start": 13, "source_row_code": "2010"},
    ("1ip", 3): {"member_tail": "(3).xls", "sheet_name": "3010", "header_rows": range(4, 12), "graph_row": 11, "data_start": 12, "source_row_code": "3010"},
}

def text(value) -> str:
    return re.sub(r"\s+", " ", str(value)).strip() if pd.notna(value) else ""

def fill_real_merges(raw: pd.DataFrame, xls_path: Path, sheet_name: str) -> pd.DataFrame:
    # Не ffill всей шапки: заполняем только диапазоны, которые Excel пометил merged.
    sheet = xlrd.open_workbook(xls_path, formatting_info=True).sheet_by_name(sheet_name)
    for r0, r1, c0, c1 in sheet.merged_cells:
        if r0 < raw.shape[0] and c0 < raw.shape[1]:
            raw.iloc[r0:min(r1, raw.shape[0]), c0:min(c1, raw.shape[1])] = raw.iat[r0, c0]
    return raw

def header_labels(raw: pd.DataFrame, profile: dict) -> list[str]:
    labels = []
    for col in range(raw.shape[1]):
        parts = []
        for row in profile["header_rows"]:
            part = text(raw.iat[row, col])
            if part and part not in {"А", "Б"} and not re.fullmatch(r"\d+(?:\.0)?", part) and not part.startswith("гр.") and part not in parts:
                parts.append(part)
        labels.append(" | ".join(parts))
    return labels

def source_row_name(xls_path: Path, source_row_code: str) -> str:
    overview = pd.read_excel(xls_path, sheet_name="Российская Федерация", header=None,
                             dtype=object, engine="xlrd")
    codes = pd.to_numeric(overview.iloc[:, 1], errors="coerce")
    matched = overview.loc[codes.eq(int(source_row_code)), 0]
    if matched.empty:
        raise ValueError(f"не найдена строка формы {source_row_code}")
    return text(matched.iloc[0])

profile = PROFILE_2025_01[("1ur", 1)]
xls_path = next(Path("raw/1ur").glob(f"*{profile['member_tail']}"))
raw = pd.read_excel(xls_path, sheet_name=profile["sheet_name"], header=None, dtype=object, engine="xlrd")
raw = fill_real_merges(raw, xls_path, profile["sheet_name"])
assert text(raw.iat[profile["graph_row"], 0]) == "А" and text(raw.iat[profile["graph_row"], 1]) == "Б"
labels = header_labels(raw, profile)
```

Преобразование `1000` в нормализованный long-вид и проверки качества. В этом профиле сумма субъектов с кодом УФНС по `gr_1` равна строке «Российская Федерация»; это контроль конкретного файла, а не универсальная формула для каждой графы.

```python
def ufns_code(value):
    if pd.isna(value) or text(value) == "":
        return None
    try:
        return f"{int(float(value)):02d}"
    except (TypeError, ValueError):
        return text(value)

wide = raw.iloc[profile["data_start"]:].copy()
wide.index = wide.index + 1  # номер строки Excel
wide = wide.rename(columns={0: "raw_territory_code", 1: "territory_name"})
wide["territory_name"] = wide["territory_name"].map(text)
wide = wide[wide["territory_name"].ne("")].copy()
wide["territory_code"] = wide["raw_territory_code"].map(ufns_code)

graph_cols = [c for c in range(2, raw.shape[1]) if text(raw.iat[profile["graph_row"], c])]
long = wide.melt(
    id_vars=["territory_name", "territory_code"], value_vars=graph_cols,
    var_name="source_column", value_name="value", ignore_index=False,
).reset_index(names="source_row_number")
long["indicator_code"] = long["source_column"].map(lambda c: f"gr_{int(float(raw.iat[profile['graph_row'], c]))}")
long["indicator_name"] = long["source_column"].map(lambda c: labels[c])
long["value"] = pd.to_numeric(long["value"], errors="coerce")  # X и сноски → NaN
long = long.dropna(subset=["value"]).assign(
    source_family="1ur", reporting_period="as_of:2025-01-01", report_section=1,
    source_row_code="1000", source_row_name=source_row_name(xls_path, profile["source_row_code"]),
    sex=None, unit="count", is_total=lambda x: x["territory_code"].isna(),
    source_file_url=meta["source_file_url"], source_member_name=xls_path.name,
    source_file_content_type=meta["content_type"], source_file_sha256=meta["sha256"],
    source_sheet=profile["sheet_name"], territory_code_label="Код УФНС",
    source_table_index=None, source_table_row=None,
)

key = ["source_family", "reporting_period", "report_section", "source_row_code", "indicator_code", "territory_name", "territory_code"]
assert long["value"].map(lambda value: float(value).is_integer()).all()
long["value"] = long["value"].astype("int64")
assert not long.duplicated(key).any()
rf = long.query("territory_name == 'Российская Федерация' and indicator_code == 'gr_1'")["value"].iloc[0]
subject_rows = long.loc[~long["is_total"]].copy()  # исключены РФ и окружные итоги
subjects = subject_rows.query("indicator_code == 'gr_1'")["value"].sum()
assert subjects == rf
long.to_csv("normalized-1ur-section-1.csv", index=False)
```

Для DOCX используйте таблицу № 1 и строки 3–4; для DOC сначала конвертируйте, затем вручную сверяйте объединённую шапку и две строки с оригиналом. Не подставляйте Excel-профиль для этих файлов.

## Периодичность обновления

Витрина содержит годовые страницы, внутри которых проверенные 1-ЮР/1-ИП публикации дают месячные точки за год. Финальные точки в исследованных 2023 и 2024 годах опубликованы 11, 14 или 20 января следующего календарного года. Это подтверждает годовой архив и месячные срезы, но не гарантирует фиксированный день следующей публикации.

## Ограничения и особенности

- Публикации — **агрегированная отчётность**, не выгрузка записей ЕГРЮЛ/ЕГРИП и не доказательство существования конкретного ЮЛ/ИП.
- Структура меняется: подтверждены новые строки и графа в 1-ЮР между двумя проверенными годами; всегда сверяйте шапку и набор листов перед объединением.
- DOC/DOCX с гендерной статистикой — Word-таблицы с объединениями; DOC требует отдельного извлечения/конвертации и ручной верификации.
- У вложений нестабильные URL; извлекайте их из официальной HTML-витрины. При автоматизации нужен корректный `User-Agent`, проверка HTTP-статуса, `Content-Type`, размера и хеша.
- Наличие «Кода УФНС» не даёт автоматической связи с ОКТМО/ОКАТО. Для территориального маппинга храните исходный код и ведите внешний справочник отдельно.

## Связанные страницы wiki

- [ЕГРЮЛ и ЕГРИП](/information-systems/federal/egrul) — микроданные и поиск по конкретному лицу; здесь доступны только агрегаты регистрационной работы.
- [Налоговая статистика ФНС](/data-sources/federal/nalog-statistics) — другой набор форм о налоговом администрировании, не 1-ЮР/1-ИП.
- [Официальная статистика Росстата (ЕМИСС, открытые данные)](/data-sources/federal/rosstat-opendata) — внешний контекст для сопоставления динамики после проверки методики и охвата.
- [Единая информационная система в сфере закупок](/data-sources/federal/procurement) — данные о закупках; связь с регистрационной статистикой возможна только на агрегированном уровне территории и периода.

## Не путать с

- **[Налоговая статистика ФНС](/data-sources/federal/nalog-statistics)** — налоги и взносы по формам НК РФ, иной предмет и витрина.
- **[Публичный сервис ЕГРЮЛ/ЕГРИП](/information-systems/federal/egrul)** — сведения по конкретному лицу; не заменяет годовые агрегаты и сам не заменяется ими.
