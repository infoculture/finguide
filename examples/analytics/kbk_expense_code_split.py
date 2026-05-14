#!/usr/bin/env python3
"""
Разбор 20-значного расходного КБК на подполя (схема как в wiki).

Входные данные:
  - Аргумент командной строки ``KBK`` (ровно 20 цифр после удаления пробелов)
    или, если не задан, строка из ``fixtures/expense_kbk_sample.txt``.

Шаги:
  1) Нормализация: убрать пробелы, проверить длину и то, что все символы — цифры.
  2) Разрезание расходного КБК: главный администратор (3), раздел/подраздел ФКР (2+2),
     целевая статья (10), КВР (3).

Проверка полноты:
  - Сумма длин полей == 20; имена полей совпадают с ожидаемым набором ключей.

Ожидаемый артефакт:
  - Печать словаря полей в stdout; код 0 при успехе.

Ограничения и лицензия:
  - Это **учебная** схема срезов для расходов; для доходов и ИФД — другая разметка
    (см. wiki/howto/analysis/kbc-decoding.md и budget-classification). Наименования
    кодов даёт только справочник Минфина на год, не этот скрипт.
  - Скрипт и фикстура — MIT как репозиторий.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


def split_expense_kbk(kbk: str) -> dict[str, str]:
    s = kbk.strip().replace(" ", "")
    if len(s) != 20 or not s.isdigit():
        raise ValueError("Ожидается 20 цифр после нормализации")
    return {
        "kbk": s,
        "main_admin": s[0:3],
        "fkr_section": s[3:5],
        "fkr_subsection": s[5:7],
        "target_article": s[7:17],
        "kvr": s[17:20],
    }


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Разбор расходного КБК на подполя (20 цифр, учебный пример).",
    )
    parser.add_argument(
        "kbk",
        nargs="?",
        default=None,
        help="20-значный расходный КБК; если не указан — читается фикстура",
    )
    args = parser.parse_args()

    if args.kbk is None:
        here = Path(__file__).resolve().parent
        raw = (here / "fixtures" / "expense_kbk_sample.txt").read_text(encoding="utf-8")
        kbk = raw.strip().split()[0] if raw.strip() else ""
    else:
        kbk = args.kbk

    try:
        parts = split_expense_kbk(kbk)
    except ValueError as e:
        print(e, file=sys.stderr)
        return 1

    expected_keys = ("kbk", "main_admin", "fkr_section", "fkr_subsection", "target_article", "kvr")
    for k in expected_keys:
        print(f"{k}: {parts[k]}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
