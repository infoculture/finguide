---
title: Пайплайн автоматического обновления данных
sidebar_label: Пайплайн обновления данных
tags:
  - howto
  - automation
  - open-data
last_updated: 2026-05-14T00:00:00.000Z
content_type: howto
entity_type: howto
description: >-
  Make-цель с curl для снимка list.csv Минфина, фрагмент расписания GitHub
  Actions и связка с проверками качества перед коммитом артефактов.
related_pages:
  - /howto/access/minfin-api
  - /data-sources/federal/minfin-opendata
  - /howto/automation/data-quality
  - /howto/access/budget-gov-api
---

# Пайплайн автоматического обновления данных

## Назначение и аудитория

Для **разработчиков**, которые хотят **регулярно** подтягивать публичные выгрузки (каталог Минфина, наборы ГИИС), прогонять **минимальные проверки** и сохранять снимок в репозитории или артефакте CI **без ручного** скачивания.

## Входные данные

- **URL источника** — например [https://minfin.gov.ru/opendata/list.csv](https://minfin.gov.ru/opendata/list.csv) (сводный каталог; см. **[открытые данные Минфина](/data-sources/federal/minfin-opendata)**).
- **Каталог для снимков** — в примере ниже **`data/`** в корне проекта (создаётся целью **`dirs`**).
- **Секреты** — для приватных API не храните токены в Makefile; используйте **GitHub Actions secrets** или переменные окружения CI.
- **Правила качества** — после скачивания прогоняйте проверки из **[контроля качества данных](/howto/automation/data-quality)**.

## Инструменты

- **`make`** (GNU Make) — оркестрация шагов на Unix/macOS; на Windows — WSL или GnuWin32.
- **`curl`** — HTTP GET с **`User-Agent`**.
- **Git** и при необходимости **GitHub Actions** — расписание и публикация артефактов.

## Шаги

1. **Опишите цели** в `Makefile`: создание каталогов, загрузка, валидация, постобработка.
2. **Зафиксируйте User-Agent** и таймауты `curl` (`--max-time`), логируйте HTTP-код.
3. **Проверьте файл** (не HTML-заглушка, не пустой): размер, заголовок CSV, контрольная сумма.
4. **В CI** задайте **`on: schedule`** и ограничьте частоту, чтобы не перегружать оператора.
5. **Коммитьте** только после успешного шага проверки или выкладывайте как **артефакт workflow** без записи в git.

## Воспроизводимый пример

### Фрагмент `Makefile`

Сохраните как **`Makefile`** в корне репозитория и выполните **`make fetch-minfin-list`** (нужны **`curl`** и **`make`**).

```makefile
DATA_DIR := data

.PHONY: dirs fetch-minfin-list

dirs:
	mkdir -p $(DATA_DIR)

fetch-minfin-list: dirs
	curl -fsS --max-time 120 \
	  -A "Mozilla/5.0 (compatible; finguide-pipeline/1.0)" \
	  -o $(DATA_DIR)/minfin-list.csv \
	  "https://minfin.gov.ru/opendata/list.csv"
	@test -s $(DATA_DIR)/minfin-list.csv
	@head -n 1 $(DATA_DIR)/minfin-list.csv | grep -q property || (echo "Не похоже на CSV каталога"; exit 1)
```

### Фрагмент расписания GitHub Actions

```yaml
on:
  workflow_dispatch: {}
  schedule:
    - cron: "17 5 * * 1" # понедельник 05:17 UTC

jobs:
  fetch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Снимок каталога Минфина
        run: make fetch-minfin-list
      - uses: actions/upload-artifact@v4
        with:
          name: minfin-list
          path: data/minfin-list.csv
```

## Проверка результата

- После **`make fetch-minfin-list`** файл **`data/minfin-list.csv`** **не пустой**, первая строка содержит **`property`**.
- **`curl`** завершился с кодом **0**; при ошибке сети цель падает и не оставляет пустой файл (при необходимости добавьте **`rm -f`** перед повтором).
- В Actions артефакт **`minfin-list`** успешно загружается из шага **`upload-artifact`**.

## Ограничения и типовые ошибки

- **Условия использования** данных — у **[Минфина](https://minfin.gov.ru/opendata/conditions.pdf)** и операторов других источников; автоматическая публикация снимков в git может **не подходить** по лицензии — уточняйте.
- **Частые запросы** — риск **429**/блокировок; кешируйте и не опрашивайте чаще, чем меняется источник.
- **Коммит бинарников** раздувает историю — предпочитайте **артефакты** или внешнее объектное хранилище.
- **Секреты в логах** — не печатайте URL с токенами; маскируйте вывод **`curl -v`**.

## Связанные страницы

- **[Открытые данные Минфина (каталог и паспорта)](/howto/access/minfin-api)**.
- **[Открытые данные Минфина России](/data-sources/federal/minfin-opendata)**.
- **[Контроль качества данных](/howto/automation/data-quality)**.
- **[Работа с API budget.gov.ru](/howto/access/budget-gov-api)** — аналогичный паттерн для `budget.gov.ru`.
