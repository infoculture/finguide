---
title: Использование корпуса в RAG и ассистентах
sidebar_label: RAG и ассистенты
description: >-
  Чанкинг, метаданные content_type/rag_priority, экспорт knowledge-index.jsonl и правила цитирования канонических URL для разработчиков пайплайнов.
category: intro
tags:
  - intro
  - rag
  - meta
last_updated: 2026-05-12
content_type: reference
---

# Использование корпуса в RAG и ассистентах

## Назначение и аудитория

Материал для разработчиков и редакторов, которые подключают эту wiki к поиску, RAG или ИИ-ассистентам.

## Входные данные

- Клон репозитория или статическая сборка сайта.
- Артефакты в каталоге [`exports/`](/): [`exports/knowledge-index.jsonl`](https://github.com/infoculture/opengovfinancesbook/blob/master/exports/knowledge-index.jsonl) и [`exports/knowledge-graph.json`](https://github.com/infoculture/opengovfinancesbook/blob/master/exports/knowledge-graph.json) (генерируются `npm run export:knowledge`).
- Файлы [`llms.txt`](https://github.com/infoculture/opengovfinancesbook/blob/master/llms.txt) и [`KNOWLEDGE.md`](https://github.com/infoculture/opengovfinancesbook/blob/master/KNOWLEDGE.md) в корне репозитория.
- Инженерные решения (стек экспорта, политика проверки внешних ссылок): [`openspec/engineering-notes.md`](https://github.com/infoculture/opengovfinancesbook/blob/master/openspec/engineering-notes.md).

## Инструменты

- Node.js 20+, скрипты в `scripts/` (`export-knowledge-index.mjs`, линтеры метаданных).
- Любой RAG-стек поверх Markdown или JSONL.

## Шаги

1. Прочитайте точку входа для моделей (`llms.txt`, `KNOWLEDGE.md`) — там зафиксированы разделы и правила ссылок.
2. Используйте `knowledge-index.jsonl` как источник метаданных (`content_type`, `entity_type`, `tags`, `slug`, `draft`).
3. Отфильтруйте `draft: true`, если индексируете только опубликованное в продакшен-навигации.
4. Чанкуйте по заголовкам `##` и `###`, сохраняя `slug` страницы в метаданных чанка для цитирования.
5. Для регрессии retrieval используйте [`tests/qa-validation.jsonl`](https://github.com/infoculture/opengovfinancesbook/blob/master/tests/qa-validation.jsonl) (целевой объём **50–100+** сценариев; схема проверяется `npm run lint:qa` против актуального `knowledge-index.jsonl`). Лексический baseline: **`npm run qa:retrieval`** — ожидаемые slug из каждого сценария должны попадать в топ-200 примитивного ранжирования по `title`, `description`, `tags`, `sidebar_label` и `aliases` в индексе (см. `scripts/qa-retrieval-regression.mjs`).

## Воспроизводимый пример

```bash
npm ci
npm run export:knowledge
head -n 3 exports/knowledge-index.jsonl
```

## Проверка результата

`npm run export:knowledge -- --check` в CI гарантирует, что закоммиченный индекс совпадает с генерацией из `wiki/`.

## Ограничения и типовые ошибки

- Внешние URL в карточках меняются; для контроля живости подключена еженедельная [проверка ссылок](https://github.com/infoculture/opengovfinancesbook/blob/master/.github/workflows/links-weekly.yml).
- Не подменяйте канонические пути сайта произвольными URL зеркал без пометки в ответе ассистента.
- Сводка **известных пробелов корпуса** (поиск по сайту, черновики, `related_pages`): файл [`KNOWLEDGE.md`](https://github.com/infoculture/opengovfinancesbook/blob/master/KNOWLEDGE.md) в корне репозитория.

## Связанные страницы

- [Таксономия тегов](/reference/tags-taxonomy)
- [Карта данных](/intro/data-map)
- [Индекс кодов классификации](/reference/classification-codes-index)
- [Настройка DocSearch](/reference/docsearch-setup)
