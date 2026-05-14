---
title: Скачивание отчётов Казначейства (исполнение бюджетов)
sidebar_label: Отчёты Казначейства (скачивание)
tags:
  - howto
  - access
  - budget
last_updated: 2026-05-12T00:00:00.000Z
content_type: howto
entity_type: howto
description: >-
  Как ориентироваться в разделе «Исполнение бюджетов» на roskazna.gov.ru,
  скачивать ZIP с вложениями XLS/XLSX/PDF по формам (0507011, 0503117,
  0503317 и др.), разбирать архивы, автоматически собирать ссылки с
  лендинга (в т.ч. федеральный бюджет) и сверять срезы с ГИИС
  «Электронный бюджет».
related_pages:
  - /data-sources/federal/roskazna-reports
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-federal-budget-execution
  - /data-sources/federal/budget-gov-ru-datasets
  - /reporting/0503117
  - /reporting/0503317
---

# Скачивание отчётов Казначейства (исполнение бюджетов)

## Зачем и для кого

Инструкция для **аналитиков и разработчиков**, которым нужны **официальные** файлы исполнения бюджета (месячные и годовые формы, долговые книги) с портала **[Федерального казначейства](https://roskazna.gov.ru/ispolnenie-byudzhetov/)**: это основной публичный вход к **кассовому факту** и сверке с плановыми срезами **[ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**. На отдельных лендингах (например **[федеральный бюджет](https://roskazna.gov.ru/ispolnenie-byudzhetov/federalnyj-byudzhet)**) отчёты часто отдают **архивами ZIP**, внутри которых лежат **XLS / XLSX / PDF** и иные вложения. Единого документированного API «все формы» нет: типичный путь — **HTML-навигация** или **обход ссылок** на странице раздела; для части показателей удобнее сочетать раздел с **[каталогом opendata](https://roskazna.gov.ru/opendata/)** и **[витринами datamarts](/data-sources/federal/roskazna-datamarts)**.

## Входные данные

- **Канонический вход в раздел** — [https://roskazna.gov.ru/ispolnenie-byudzhetov/](https://roskazna.gov.ru/ispolnenie-byudzhetov/) (отчёты, долговые книги, вложения по ссылкам внутри тематических подстраниц).
- **Тематический лендинг с ZIP** — например [федеральный бюджет](https://roskazna.gov.ru/ispolnenie-byudzhetov/federalnyj-byudzhet): в интерфейсе переключаются **ежемесячные**, **оперативные**, **ежеквартальные** и **ежегодные** отчёты; в выдаче страницы (SSR) обычно видны карточки **активного** типа, а сами файлы часто лежат по путям вида `/storage/page-files/.../*.zip` (плюс вызовы Livewire `downloadFile('...')` с тем же путём).
- **Код или наименование формы** — например **0507011** (часто месячные своды), **0503117** / **0503317** (годовые срезы; см. [карточки отчётности](/reporting/0503117) и [/reporting/0503317](/reporting/0503317)); точный перечень и подписи — по **актуальному оглавлению** на портале на дату выгрузки.
- **Разрезы для сверки** — **финансовый год**, **уровень бюджета** (федеральный / консолидированный субъекта), при необходимости **[КБК](/glossary/kbk)** из заголовков таблицы в файле.
- **Зафиксируйте дату скачивания и URL** — меню и прямые ссылки подразделов периодически обновляют (см. [карточку источника](/data-sources/federal/roskazna-reports)).

## Инструменты

- **Браузер** — для поиска нужной формы по смыслу и ручного скачивания вложений (переключение «ежемесячный / квартальный / …» на лендинге может подгружать список через **Livewire**, без полного обхода в простом GET).
- **Python 3** с пакетом `requests`; для разбора ссылок в статическом HTML достаточно **`re`** и **`urllib.parse.quote`** (кириллица в имени файла в URL должна кодироваться по сегментам пути). Для распаковки вложений — стандартный модуль **`zipfile`** и каталог выгрузки (**`pathlib`**).
- **Табличный редактор** (Excel, LibreOffice) — для первичного осмотра XLS/XLSX и проверки кодировок и заголовков.

## Шаги

1. Откройте раздел **[Исполнение бюджетов](https://roskazna.gov.ru/ispolnenie-byudzhetov/)** и выберите тематический блок (федеральный бюджет, консолидированные бюджеты субъектов, ГВФ и т.д.) — см. навигацию в [карточке источника](/data-sources/federal/roskazna-reports).
2. Найдите нужный **отчётный период** и **форму** по названию или коду в оглавлении подраздела; перейдите на страницу формы и скачайте вложение **ZIP** и/или прямые **XLS / XLSX / PDF** (внутри ZIP часто лежит одна таблица или пакет файлов).
3. Если задача **машинная** и стабильный прямой URL неизвестен: запросите HTML целевой страницы (или сохраните его из браузера), извлеките ссылки на `.zip` и прямые `.xls` / `.xlsx` / `.pdf` (в т.ч. из атрибутов `href` и из строк `downloadFile('storage/...zip')` на лендинге федерального бюджета), соберите абсолютный URL с кодированием пути (`https://roskazna.gov.ru` + процент-кодирование каждого сегмента имени), скачайте ZIP и просмотрите **`ZipFile.namelist()`** перед распаковкой.
4. Для **регулярной** выгрузки рассмотрите **[каталог открытых данных Казначейства](https://roskazna.gov.ru/opendata/)** и **[datamarts](/data-sources/federal/roskazna-datamarts)** — там иная модель доступа, но проще фиксировать **паспорт набора** и версию файла.
5. При аналитике сопоставляйте показатели с **[наборами budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)** только в **одинаковом** определении показателя, периоде и методике (см. [казначейское исполнение](/glossary/treasury-execution)).

## Воспроизводимый пример

Ниже — самодостаточный скрипт для лендинга **[исполнение федерального бюджета](https://roskazna.gov.ru/ispolnenie-byudzhetov/federalnyj-byudzhet)**. Он:

1. Загружает HTML и определяет **активный тип отчёта** в выпадающем фильтре (например «ежемесячный»), который отражён в разметке на момент ответа сервера.
2. Собирает пути к **ZIP** из `href="/storage/...zip"` и из вызовов `downloadFile('storage/...zip')`.
3. Скачивает **один** (самый свежий по имени файла) архив, выводит **манифест** `zipfile` и **распаковывает** вложения в каталог на диске.

Имена ссылок и перечень карточек зависят от вёрстки и выбранного фильтра; другие разрезы (квартальные, годовые и т.д.) при необходимости снимайте после переключения фильтра в браузере (повторный GET без эмуляции Livewire может не содержать полного списка).

```python
from __future__ import annotations

import re
import zipfile
from io import BytesIO
from pathlib import Path
from urllib.parse import quote, urljoin

import requests

# Лендинг «Федеральный бюджет» (ежемесячные / оперативные / квартальные / годовые — переключатель в UI).
PAGE_URL = "https://roskazna.gov.ru/ispolnenie-byudzhetov/federalnyj-byudzhet"
BASE_ORIGIN = "https://roskazna.gov.ru"
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (compatible; finguide-howto/1.0; "
        "+https://github.com/infoculture/finguide)"
    ),
    "Accept-Language": "ru-RU,ru;q=0.9,en;q=0.8",
}

# Прямая ссылка в карточке и дублирующий путь в обработчике Livewire на той же странице.
HREF_ZIP_RE = re.compile(
    r'href=["\'](/storage/[^"\']+\.zip(?:#|\?[^"\']*)?)["\']',
    re.IGNORECASE,
)
DOWNLOAD_FILE_RE = re.compile(
    r"downloadFile\(\s*['\"]([^'\"]+\.zip)['\"]\s*\)",
    re.IGNORECASE,
)
# Активный пункт фильтра «годовой / квартальный / ежемесячный / оперативный» (как в SSR HTML).
ACTIVE_KIND_RE = re.compile(
    r'<a(?=[^>]*wire:click="setFilterType\(\d+\)")(?=[^>]*class="[^"]*dropdown-item active[^"]*")[^>]*>'
    r"\s*([^<]+?)\s*</a>",
    re.IGNORECASE,
)
# Прямые вложения без ZIP (другие подстраницы исполнения).
HREF_TABLE_RE = re.compile(
    r'href=["\']([^"\']+\.(?:xls|xlsx|pdf)(?:\?[^"\']*)?)["\']',
    re.IGNORECASE,
)


def normalize_storage_path(raw: str) -> str:
    raw = raw.strip().strip("#").split("?", 1)[0]
    return raw if raw.startswith("/") else "/" + raw.lstrip("/")


def storage_path_to_absolute_url(storage_path: str) -> str:
    """Кодирует каждый сегмент пути (кириллица и пробелы в имени ZIP на roskazna.gov.ru)."""
    path = normalize_storage_path(storage_path)
    segments = [s for s in path.split("/") if s]
    encoded_path = "/" + "/".join(quote(seg, safe="") for seg in segments)
    return f"{BASE_ORIGIN.rstrip('/')}{encoded_path}"


def discover_zip_storage_paths(html: str) -> list[str]:
    paths: list[str] = []
    seen: set[str] = set()
    for m in HREF_ZIP_RE.finditer(html):
        p = normalize_storage_path(m.group(1))
        if p.lower().endswith(".zip") and p not in seen:
            seen.add(p)
            paths.append(p)
    for m in DOWNLOAD_FILE_RE.finditer(html):
        p = normalize_storage_path(m.group(1))
        if p.lower().endswith(".zip") and p not in seen:
            seen.add(p)
            paths.append(p)
    return paths


def detect_active_report_kind(html: str) -> str | None:
    m = ACTIVE_KIND_RE.search(html)
    return m.group(1).strip() if m else None


def pick_newest_zip_path(paths: list[str]) -> str | None:
    """Грубая эвристика: последний по строковому сравнению путь (даты в имени — ДД.ММ.ГГГГ)."""
    return max(paths) if paths else None


def list_direct_table_links(page_url: str, html: str) -> list[str]:
    out: list[str] = []
    seen: set[str] = set()
    for m in HREF_TABLE_RE.finditer(html):
        url = urljoin(page_url, m.group(1))
        if "roskazna.gov.ru" in url and url not in seen:
            seen.add(url)
            out.append(url)
    return out


def print_zip_manifest(data: bytes, limit: int = 50) -> None:
    with zipfile.ZipFile(BytesIO(data)) as zf:
        infos = zf.infolist()
        print(f"  В архиве записей: {len(infos)}")
        for info in infos[:limit]:
            print(f"    - {info.filename!r} ({info.file_size} байт)")
        if len(infos) > limit:
            print(f"    … скрыто ещё {len(infos) - limit}")


def extract_zip_safe(data: bytes, dest: Path) -> None:
    dest = dest.resolve()
    dest.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(BytesIO(data)) as zf:
        for info in zf.infolist():
            if info.is_dir():
                continue
            target = (dest / info.filename).resolve()
            try:
                target.relative_to(dest)
            except ValueError as exc:
                raise RuntimeError(f"Небезопасное имя в архиве: {info.filename!r}") from exc
            target.parent.mkdir(parents=True, exist_ok=True)
            with zf.open(info, "r") as src, target.open("wb") as dst:
                dst.write(src.read())


def main() -> None:
    out_dir = Path("out_roskazna_federal_budget")

    session = requests.Session()
    resp = session.get(PAGE_URL, headers=HEADERS, timeout=120)
    resp.raise_for_status()
    resp.encoding = resp.apparent_encoding or resp.encoding or "utf-8"
    html = resp.text

    kind = detect_active_report_kind(html)
    zip_paths = discover_zip_storage_paths(html)
    direct_files = list_direct_table_links(PAGE_URL, html)

    print("HTTP", resp.status_code, "| кодировка ответа:", resp.encoding)
    print("Активный тип отчёта в фильтре (по SSR):", kind or "не найден")
    print("Найдено уникальных ZIP (пути /storage/...):", len(zip_paths))
    for p in zip_paths:
        print(" ", storage_path_to_absolute_url(p))

    if not zip_paths:
        print("ZIP в HTML не найдены — откройте страницу в браузере, переключите тип отчёта и повторите выгрузку HTML.")
        print("Прямые XLS/XLSX/PDF на странице:", len(direct_files))
        for u in direct_files[:20]:
            print(" ", u)
        return

    chosen = pick_newest_zip_path(zip_paths)
    assert chosen is not None
    zip_url = storage_path_to_absolute_url(chosen)
    print("Скачиваем для примера:", zip_url)

    zresp = session.get(zip_url, headers=HEADERS, timeout=120)
    zresp.raise_for_status()
    print("ZIP HTTP", zresp.status_code, "bytes:", len(zresp.content))
    print_zip_manifest(zresp.content)
    extract_zip_safe(zresp.content, out_dir)
    print("Вложения распакованы в:", out_dir.resolve())


if __name__ == "__main__":
    main()
```

## Проверка результата

- Убедитесь, что ответ — **HTML ожидаемого раздела**, а не страница ограничения доступа: при подозрении проверьте **`User-Agent`**, статус HTTP и заголовок страницы в браузере.
- Для ZIP проверьте **`Content-Type: application/zip`**, затем **манифест** (`namelist` / размеры) и откройте извлечённый **XLS/XLSX** в табличном редакторе: кодировка имён внутри архива может отличаться от UTF-8 в зависимости от того, как упакован файл на стороне портала.
- Сверьте **код формы, год и уровень бюджета** с заголовком опубликованного файла и с методическими пояснениями на портале.
- Сопоставьте итоговые суммы с **[ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** только при явном совпадении **показателя и периода**; расхождения чаще всего из‑за разных срезов (касса / план / консолидация) — см. [FAQ в карточке источника](/data-sources/federal/roskazna-reports).

## Ограничения и типовые ошибки

- **Livewire и фильтры:** переключение «ежемесячный / оперативный / квартальный / годовой» на лендинге федерального бюджета может подгружать карточки **без полного набора** в одном GET; для полного списка по каждому типу сохраняйте HTML **после** выбора фильтра в браузере или используйте инструменты браузерной автоматизации.
- **SSL в локальном Python:** при `CERTIFICATE_VERIFY_FAILED` на macOS обновите корни доверия для установленного интерпретатора (см. документацию дистрибутива Python) или используйте среду с актуальным хранилищем CA; отключать проверку TLS в продакшене не рекомендуется.
- **Нет гарантированно стабильных deep-link** на каждую форму: после обновления сайта пути в меню меняются — автоматизацию строите от **текущего** HTML или от **паспортов opendata**, версионируя дату скачивания.
- **Смешение разделов:** финансовые операции (`/finansovye-operacii/` и смежное) — это **не** те же формы, что **исполнение бюджета** по КБК в `/ispolnenie-byudzhetov/` (см. [карточку источника](/data-sources/federal/roskazna-reports)).
- **Не полагайтесь на «голый» скрипт без идентифицируемого User-Agent** в продакшене: при HTML вместо файла или пустом списке ссылок проверьте ответ вручную и условия использования на портале.
- **Rate limit и нагрузка:** дозируйте запросы; при массовой загрузке предпочтительны **официальные наборы** из [opendata](https://roskazna.gov.ru/opendata/) или **datamarts**, если покрывают ваш срез.

## Связанные страницы

- [Отчёты Федерального казначейства (исполнение бюджетов)](/data-sources/federal/roskazna-reports) — полное описание раздела, форм и перекрёстных сверок.
- [Портал Федерального казначейства](/information-systems/federal/roskazna-portal) — контур витрины, ограничения и связь с «Электронным бюджетом».
- [Казначейство: федеральный бюджет (подраздел портала)](/data-sources/federal/roskazna-federal-budget-execution) — тематический вход к формам исполнения ФБ.
- [Витрины данных Казначейства (datamarts)](/data-sources/federal/roskazna-datamarts) — агрегированные выгрузки для сверки с отчётными формами.
- [Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — плановые и бюджетные открытые срезы на `budget.gov.ru`.
- [Работа с API budget.gov.ru](/howto/access/budget-gov-api) — когда удобнее REST портала «Электронного бюджета».
- [Открытые данные Минфина (каталог и паспорта)](/howto/access/minfin-api) — схожий приём обхода витрины без единого JSON API.
