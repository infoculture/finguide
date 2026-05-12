---
title: Полнотекстовый поиск (DocSearch)
sidebar_label: DocSearch / поиск
description: >-
  Как включить Algolia DocSearch для Docusaurus-сборки книги: заявка, переменные окружения и ограничения до выдачи ключей.
category: reference
tags:
  - reference
  - meta
  - navigation
last_updated: 2026-05-12
content_type: reference
---

# Полнотекстовый поиск (Algolia DocSearch)

## Текущее состояние

Сборка использует стандартный пресет Docusaurus без обязательной интеграции Algolia. Полнотекстовый поиск по всему корпусу рекомендуется включить через [Algolia DocSearch](https://docsearch.algolia.com/).

## Шаги подключения

1. Подайте заявку DocSearch для публичного сайта книги или настройте самостоятельный Algolia индекс.
2. Получите `appId`, `apiKey` поиска (search-only) и `indexName`.
3. Добавьте в `themeConfig.algolia` файла `docusaurus.config.ts` полученные значения (не коммитьте секреты администратора).
4. Пересоберите сайт и проверьте виджет поиска в шапке.

## Альтернативы

- Локальный/offline поиск через сторонние плагины Docusaurus (оценивайте размер индекса и язык `ru`).
- Использование `exports/knowledge-index.jsonl` во внешнем поисковом движке.

## Связанные страницы

- [Таксономия тегов](/reference/tags-taxonomy)
- [RAG и ассистенты](/intro/rag-guide)
