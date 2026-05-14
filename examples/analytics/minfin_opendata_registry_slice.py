#!/usr/bin/env python3
"""
Учебный разбор фрагмента реестра открытых данных Минфина (формат list.csv).

Входные данные:
  - По умолчанию: локальный CSV ``fixtures/minfin_opendata_list_slice.csv`` в этом каталоге
    (небольшая фикстура репозитория; сеть не нужна).
  - Опция ``--fetch``: попытка скачать актуальный
    https://minfin.gov.ru/opendata/list.csv (нужен доступ в интернет;
    осмысленный User-Agent обязателен — см. wiki/howto/access/minfin-api.md).

Шаги:
  1) Прочитать CSV в кодировке utf-8-sig.
  2) Найти строки, где property похож на идентификатор набора (7710168360-…).
  3) Вывести число таких строк и первый идентификатор.

Проверка полноты:
  - В заголовке должны присутствовать поля property и value (как в живом реестре).

Ожидаемый артефакт:
  - Текст в stdout (сводка); код возврата 0 при успехе.

Ограничения и лицензия:
  - Данные Минфина при --fetch регулируются условиями портала ведомства; фикстура — MIT как репозиторий.
  - Живой list.csv может менять состав колонок; для продакшена сверяйте формат с карточкой источника wiki.
"""

from __future__ import annotations

import argparse
import csv
import sys
from pathlib import Path
from urllib.request import Request, urlopen

LIST_URL = "https://minfin.gov.ru/opendata/list.csv"
USER_AGENT = "finguide-examples-analytics/1.0 (+https://github.com/infoculture/finguide)"


def load_rows(source: Path | str) -> list[dict[str, str]]:
    if isinstance(source, Path):
        raw = source.read_bytes()
    else:
        req = Request(source, headers={"User-Agent": USER_AGENT})
        with urlopen(req, timeout=45) as resp:
            raw = resp.read()
    text = raw.decode("utf-8-sig", errors="replace").splitlines()
    return list(csv.DictReader(text))


def main() -> int:
    parser = argparse.ArgumentParser(description="Разбор фрагмента list.csv Минфина (учебный пример).")
    parser.add_argument(
        "--fetch",
        action="store_true",
        help=f"Скачать актуальный реестр с {LIST_URL} вместо фикстуры",
    )
    args = parser.parse_args()

    here = Path(__file__).resolve().parent
    fixture = here / "fixtures" / "minfin_opendata_list_slice.csv"
    source: Path | str = LIST_URL if args.fetch else fixture

    rows = load_rows(source)
    if not rows:
        print("Нет строк данных после заголовка", file=sys.stderr)
        return 1

    fieldnames = rows[0].keys()
    for col in ("property", "value"):
        if col not in fieldnames:
            print(f"Нет колонки {col!r} в CSV", file=sys.stderr)
            return 1

    datasets = [r for r in rows if r.get("property", "").startswith("7710168360-")]
    print(f"Источник: {source}")
    print(f"Всего строк данных (включая служебные): {len(rows)}")
    print(f"Строк с идентификатором набора 7710168360-*: {len(datasets)}")
    if datasets:
        print(f"Первый идентификатор: {datasets[0]['property']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
