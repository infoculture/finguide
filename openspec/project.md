# Project Context

## Purpose

База знаний по открытым государственным финансам России — книгоподобный справочник (Docusaurus wiki) об открытых данных, информационных системах, организациях, отчётности и нормативной базе российского бюджетного процесса. Цель — служить каноническим контуром для аналитиков, журналистов и исследователей, работающих с открытыми финансовыми данными, и одновременно машиночитаемым источником для RAG/ассистентов (см. `exports/`, `tests/qa-validation.jsonl`).

## Tech Stack

- **Docusaurus 3** (`@docusaurus/core` ^3.10.1) — статический генератор, контент в `wiki/` через `@docusaurus/preset-classic`.
- **TypeScript** — канонические конфиги: `docusaurus.config.ts`, `sidebars.ts` (`.js`-дубликаты запрещены, см. CI guard в `.github/workflows/ci.yml`).
- **Mermaid** (`@docusaurus/theme-mermaid`) — схемы на страницах структуры и карты данных.
- **React 19**, Node.js ≥ 20.
- Скрипты сопровождения — Node ESM (`.mjs`) в `scripts/`, парсинг frontmatter через `gray-matter`.

## Project Conventions

### Content model

Весь авторский контент живёт в `wiki/` в виде Markdown-карточек с YAML frontmatter. Каждый тип карточки имеет шаблон (`*-card-template.md`) и нормативные правила в `AGENTS.md` (раздел «Глоссарий», «Информационные системы», «Источники данных», «Организации», «Отчётность и формы», «Нормативные документы»). Карточки сгруппированы по разделам: `glossary/`, `organizations/`, `information-systems/`, `data-sources/`, `reporting/`, `legal/`, `budget-system/`, `budget-classification/`, `intro/`, `howto/`, `reference/`.

### Metadata

Frontmatter: обязательны `title`, `sidebar_label`, `tags` (белый список `scripts/tag-allowlist.json`), `last_updated`, `content_type`; для карточек — `entity_type` и `slug`. Для источников и фактологических страниц — `source_authority`, `rag_priority`, `related_pages`, `last_verified` (см. `openspec/specs/corpus-metadata/spec.md`).

### Code Style

- Скрипты — чистый Node ESM, без runtime-зависимостей кроме `gray-matter`; запускаются как `npm run <script>` (см. `package.json`).
- Конфиги Docusaurus — только `.ts`;`.js`-дубликаты вызывают падение CI на первом шаге.

### Architecture Patterns

- **Источник правды — Markdown-карточки**; производные артефакты (`exports/knowledge-index.jsonl`, `exports/knowledge-graph.json`) регенерируются скриптом `export-knowledge-index.mjs` и проверяются в CI на drift (`npm run export:knowledge -- --check`).
- **Публичные URL стабильны**: slug во frontmatter отделён от пути файла (см. правила в `AGENTS.md` — для региональных и федеральных источников «плоские» URL без сегментов подпапок).
- **Импорт данных** из `_dev/` (xlsx, yaml, md-таблицы) — односторонний: скрипты импорта создают/обновляют карточки, после чего требуется редакционный проход.

### Testing Strategy

CI (`.github/workflows/ci.yml`) прогоняет последовательно: `lint:frontmatter`, `lint:howto`, `export:knowledge -- --check`, `lint:qa`, `qa:retrieval` (лексическая регрессия retrieval поверх `tests/qa-validation.jsonl`), `lint:related-pages`, `lint:corpus`, `typecheck`, `build`. Сборка падает на битых внутренних ссылках и якорях (`onBrokenLinks: 'throw'`). Локально: `npm run presubmit`.

### Git Workflow

- Основная ветка — `master`. Публикация — через GitHub Actions в GitHub Pages (`deploy-pages.yml`), артефакт — `build/` (НЕ коммитится, см. `.gitignore`).
- Крупные изменения оформляются через OpenSpec-пропозалы в `openspec/changes/`; канонические спецификации — в `openspec/specs/`.
- После крупных правок корпуса — `npm run export:knowledge` и коммит обновлённых `exports/`.

## Domain Context

Российские государственные финансы: бюджетная система (федеральный / региональный / муниципальный уровни, внебюджетные фонды), бюджетная классификация (КБК, КОСГУ, КВР, целевые статьи), казначейское исполнение, отчётность (формы 0503xxx и др.), закупки (44-ФЗ / 223-ФЗ), субсидии и межбюджетные трансферты, госпрограммы, сектор госучастия (госкорпорации, ППК, ГКБ/ГМП). Ключевые операторы — Минфин, Федеральное казначейство, ФНС, Росстат, Счётная палата, Банк России.

## Important Constraints

- **Правовой контекст**: терминология и формулировки должны опираться на действующие НПА (БК РФ, 44-ФЗ, 223-ФЗ, 172-ФЗ и др.); карточки содержат ссылки на КонсультантПлюс/официальные источники.
- **Актуальность**: открытые данные и нормативка меняются — `last_updated` / `last_verified` фиксируют момент проверки; устаревание явно отмечается.
- **Не дублировать официальные реестры**: wiki — навигатор и интерпретация, а не зеркало ИС; карточки ссылаются на первоисточники.

## External Dependencies

- **Открытые ИС и порталы**: ГИИС «Электронный бюджет» / budget.gov.ru, ЕИС закупок, Госуслуги открытых данных data.gov.ru, sites Росстата и Казначейства, Банк России и др. (см. `wiki/information-systems/`, `wiki/data-sources/`).
- **GitHub Pages** — хостинг опубликованной книги (`https://infoculture.github.io/finguide/`).
