# KNOWLEDGE — карта корпуса «Открытые государственные финансы»

Документ для людей и ИИ: как устроена база знаний в репозитории `opengovfinancesbook`.

## Роли разделов

| Раздел на сайте | Путь в репозитории | Зачем |
| --- | --- | --- |
| Введение | `wiki/intro/` | Контекст, быстрый старт, карта данных, RAG |
| Глоссарий | `wiki/glossary/` | Определения терминов и кодов |
| Организации | `wiki/organizations/` | Владельцы данных и регуляторы |
| Информационные системы | `wiki/information-systems/` | Витрины и реестры |
| Источники данных | `wiki/data-sources/` | Файлы, API, порталы |
| How-to | `wiki/howto/` | Пошаговые инструкции |
| Нормативная база | `wiki/legal/` | НПА |
| Отчётность | `wiki/reporting/` | Формы и методики |
| Справочники | `wiki/reference/` | Коды, таксономии, индексы |

## Точки входа

- Навигация для читателя: `/intro/getting-started`, `/intro/data-map`.
- Для разработчиков RAG: `/intro/rag-guide`, файлы `exports/knowledge-index.jsonl`, `exports/knowledge-graph.json`, `llms.txt`; регрессия retrieval — `npm run qa:retrieval`.

## Метаданные страниц

Ожидаемые поля frontmatter (см. `npm run lint:frontmatter`): `title`, `description`, `last_updated`, `tags`, `content_type`, для черновиков — `draft: true`.

## Известные пробелы и ограничения

- **Полнотекстовый поиск по сайту** (Algolia DocSearch или эквивалент) не подключён до выдачи ключей; см. инструкцию в репозитории (`wiki/reference/docsearch-setup.md`). Для навигации используйте разделы, [карту данных](https://github.com/infoculture/opengovfinancesbook/blob/master/wiki/intro/data-map.md), [индекс кодов](https://github.com/infoculture/opengovfinancesbook/blob/master/wiki/reference/classification-codes-index.md) и экспорт JSONL.
- **Внешние URL** в карточках со временем меняются; в CI есть еженедельная проверка ссылок (`.github/workflows/links-weekly.yml`), PR-прогон — с мягкой политикой (`continue-on-error`), см. `openspec/engineering-notes.md`.
- **Поле `related_pages`** заполняется выборочно; целостность slug проверяется `npm run lint:related-pages` после согласованного `exports/knowledge-index.jsonl` (`npm run export:knowledge -- --check`).
- **Черновики** (`draft: true`) попадают в JSONL; продакшен-индекс RAG должен их отфильтровать (см. `wiki/intro/rag-guide.md`).
- **`exports/knowledge-index.jsonl`** включает, помимо прочего, `sidebar_label` и `aliases` для лучшего lexical retrieval; после правок wiki перегенерируйте индекс (`npm run export:knowledge`).
- **Регрессия лексического retrieval** — `npm run qa:retrieval`: ожидаемые slug из `tests/qa-validation.jsonl` должны попадать в топ-200 примитивного ранжирования (см. `scripts/qa-retrieval-regression.mjs`); черновики исключаются.
- **Корпоративное раскрытие госкомпаний** — стартовые карточки ([e-disclosure.ru](/data-sources/federal/e-disclosure-ru), [Газпром](/data-sources/federal/gazprom-investor-disclosure), [РЖД](/data-sources/federal/rzd-holding-disclosure)) и навигатор [отчётность и госучастие](/reporting/state-sector-overview); полный перечень эмитентов не задуман как исчерпывающий.

## Связанные материалы

- Спецификации задач и дорожная карта: `openspec/` и `_dev/final_report.md`.
