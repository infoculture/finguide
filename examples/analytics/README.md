# Примеры аналитики (`examples/analytics/`)

Каталог для **воспроизводимых** скриптов и ноутбуков по [спецификации reproducible-analytics](../../openspec/specs/reproducible-analytics/spec.md): каждый пример содержит в README или в шапке скрипта:

- источник входных данных (URL или путь к небольшой фикстуре в репозитории);
- шаги обработки;
- проверки полноты или согласованности;
- ожидаемый артефакт (CSV, таблица, график);
- ограничения и лицензию использования данных.

## Зависимости

- **Python 3.10+** (только стандартная библиотека для примеров ниже).

## Пример 1: фрагмент реестра `list.csv` Минфина

**Зачем:** показать минимальный разбор машинного каталога наборов без ручного копирования с HTML (см. [how-to по доступу к данным Минфина](../../wiki/howto/access/minfin-api.md) и [карточку источника](../../wiki/data-sources/federal/budget/minfin/minfin-opendata.md)).

**Запуск без сети (фикстура в репозитории):**

```bash
python3 examples/analytics/minfin_opendata_registry_slice.py
```

**Запуск с загрузкой актуального реестра (нужен интернет):**

```bash
python3 examples/analytics/minfin_opendata_registry_slice.py --fetch
```

**Ожидаемый результат:** несколько строк в stdout, код выхода `0`; при `--fetch` число наборов будет большим, при фикстуре — одна строка с префиксом `7710168360-`.

## Пример 2: разбор расходного КБК на подполя

**Зачем:** быстро проверить нормализацию ключа и срезы **расходного** 20-значного кода перед джойном со справочником Минфина (см. [расшифровку КБК](../../wiki/howto/analysis/kbc-decoding.md) и [коды расходов](../../wiki/budget-classification/expense-codes.md)).

**Запуск со строкой по умолчанию (фикстура):**

```bash
python3 examples/analytics/kbk_expense_code_split.py
```

**Запуск со своим кодом:**

```bash
python3 examples/analytics/kbk_expense_code_split.py 07104010201081000110
```

**Ожидаемый результат:** шесть строк `поле: значение` в stdout, код `0`; при неверной длине или нецифровых символах — сообщение в stderr и код `1`.

## Связь с wiki

- [Каталог аналитических сценариев](https://infoculture.github.io/finguide/intro/analytics-scenarios-catalog)
- [Аудит воспроизводимости how-to](https://infoculture.github.io/finguide/intro/howto-reproducibility-audit)
