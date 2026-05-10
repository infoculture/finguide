---
title: Как пользоваться базой знаний
category: intro
tags: [intro, navigation, rag]
last_updated: 2026-05-10
source_url: ""
---

# Как пользоваться базой знаний

## Принципы

- Один файл описывает один основной объект или понятие.
- Семантические заголовки `H1/H2` используются как якоря для RAG.
- Ключевые документы содержат обязательный frontmatter и секцию Q&A.

## Карта миграции из legacy-структуры

- `power/` и `orgs/` -> `organizations/`
- `gis/` -> `information-systems/`
- `opendata/` -> `data-sources/`
- `howto/` остается в домене `howto/`
- справочные и вспомогательные материалы переходят в `reference/`
