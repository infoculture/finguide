---
title: Использование корпуса в RAG и ассистентах
sidebar_label: RAG и ассистенты
description: >-
  Версионированные document/chunk/graph экспорты, правила секционного retrieval,
  фильтрации черновиков и цитирования канонических URL для разработчиков RAG.
category: intro
tags:
  - intro
  - rag
  - meta
last_updated: 2026-07-11
content_type: reference
---

# Использование корпуса в RAG и ассистентах

## Назначение и аудитория

Материал для разработчиков и редакторов, которые подключают эту wiki к поиску, RAG или ИИ-ассистентам.

## Входные данные

- Клон репозитория или статическая сборка сайта.
- Артефакты в каталоге [`exports/`](/): [`knowledge-index.jsonl`](https://github.com/infoculture/finguide/blob/master/exports/knowledge-index.jsonl), [`knowledge-chunks.jsonl`](https://github.com/infoculture/finguide/blob/master/exports/knowledge-chunks.jsonl) и [`knowledge-graph.json`](https://github.com/infoculture/finguide/blob/master/exports/knowledge-graph.json) (генерируются `npm run export:knowledge`, вручную не редактируются).
- Файлы [`llms.txt`](https://github.com/infoculture/finguide/blob/master/llms.txt) и [`KNOWLEDGE.md`](https://github.com/infoculture/finguide/blob/master/KNOWLEDGE.md) в корне репозитория.
- Инженерные решения (стек экспорта, политика проверки внешних ссылок): [`openspec/engineering-notes.md`](https://github.com/infoculture/finguide/blob/master/openspec/engineering-notes.md).

## Инструменты

- Node.js 20+, скрипты в `scripts/` (`export-knowledge-index.mjs`, линтеры метаданных).
- Любой RAG-стек поверх Markdown или JSONL.

## Шаги

1. Прочитайте точку входа для моделей (`llms.txt`, `KNOWLEDGE.md`) — там зафиксированы разделы и правила ссылок.
2. Используйте `knowledge-index.jsonl` для discovery: фильтрации документов по `content_type`, `entity_type`, `tags`, `rag_priority`, предметной области и каноническому `slug`.
3. Используйте `knowledge-chunks.jsonl` как стандартный вход секционного retrieval. Каждая запись содержит текст, `document_slug`, путь заголовков, Docusaurus-совместимый якорь и канонический URL.
4. Исключите `draft: true` и из document-, и из chunk-индекса продакшен-RAG. Значение наследуется из одной Markdown-карточки и проверяется на согласованность.
5. Потребитель может дополнительно делить чанк под tokenizer своей модели, но должен сохранить исходные `chunk_id`, `document_slug` и `url` либо явную трассировку к ним.
6. Для регрессии retrieval используйте [`tests/qa-validation.jsonl`](https://github.com/infoculture/finguide/blob/master/tests/qa-validation.jsonl) (целевой объём **50–100+** сценариев; схема проверяется `npm run lint:qa` против актуального `knowledge-index.jsonl`). Лексический baseline: **`npm run qa:retrieval`** — ожидаемые slug из каждого сценария должны попадать в топ-400 ранжирования по документным метаданным (см. `scripts/qa-retrieval-regression.mjs`).

## Контракты и чанкинг

Все три артефакта имеют `schema_version: 1`. Добавление nullable-поля совместимо внутри версии; удаление, переименование или смена семантики существующего поля требует новой версии и миграционной заметки в `KNOWLEDGE.md`.

Экспортер сначала делит Markdown по заголовкам `##`–`######`, сохраняет иерархию в `heading_path`, затем при необходимости группирует целые блочные элементы до **6 000 символов** без overlap. Fenced code block, таблица или связный список не разрезаются посередине. Если один такой блок сам длиннее лимита, он остаётся целым, а запись получает `oversized: true`; downstream-потребитель может обработать её отдельно.

`chunk_id` детерминирован относительно slug, пути заголовков, якоря и номера части. Переименование заголовка может изменить идентификатор — это адрес retrieval, а не вечный бизнес-ключ.

Для ответа используйте экспортированное поле `url`: у секционного чанка оно уже содержит канонический `#heading_anchor`. Для введения без заголовка цитируйте URL страницы без вымышленного якоря.

## Воспроизводимый пример

```bash
npm ci
npm run export:knowledge
head -n 3 exports/knowledge-index.jsonl
head -n 3 exports/knowledge-chunks.jsonl
```

## Проверка результата

`npm run test:knowledge-export` проверяет кириллические и повторяющиеся якоря, явные ID, структурные блоки, детерминированность и typed edges. `npm run export:knowledge -- --check` в CI read-only проверяет drift всех трёх артефактов, уникальность `chunk_id` и целостность document/chunk/graph ссылок.

## Ограничения и типовые ошибки

- Внешние URL в карточках меняются; для контроля живости подключена еженедельная [проверка ссылок](https://github.com/infoculture/finguide/blob/master/.github/workflows/links-weekly.yml).
- Не подменяйте канонические пути сайта произвольными URL зеркал без пометки в ответе ассистента.
- Сводка **известных пробелов корпуса** (поиск по сайту, черновики, `related_pages`): файл [`KNOWLEDGE.md`](https://github.com/infoculture/finguide/blob/master/KNOWLEDGE.md) в корне репозитория.

## Связанные страницы

- [Таксономия тегов](/reference/tags-taxonomy)
- [Карта данных](/intro/data-map)
- [Индекс кодов классификации](/reference/classification-codes-index)
- [Настройка DocSearch](/reference/docsearch-setup)
