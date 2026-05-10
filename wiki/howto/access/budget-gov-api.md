---
title: "Работа с API budget.gov.ru"
sidebar_label: "Работа с API budget.gov.ru"
tags: [howto, access]
last_updated: 2026-05-10
---

# Работа с API budget.gov.ru

## Зачем

Единый портал бюджетной системы предоставляет REST API для получения данных об исполнении бюджета, реестрах и справочниках.

## Шаги

1. Изучить документацию API на странице budget.gov.ru/Развитие/API.
2. Сформировать запрос к нужной точке доступа.
3. Обработать ответ в JSON.

## Пример кода

```python
import requests
# r = requests.get("https://...")
# r.raise_for_status()
# data = r.json()
```

## Подводные камни

- Кодировки и формат дат могут различаться между источниками.
- Ограничения по rate limit — проверяйте документацию.
- Обновления могут приходить с задержкой по отношению к публикации.

## Связанные материалы

- [Источник](/data-sources/federal/budget-gov-ru-datasets)
- [Информационные системы](/information-systems/)
- [Источники данных](/data-sources/)
