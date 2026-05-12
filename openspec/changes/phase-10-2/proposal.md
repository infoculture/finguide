# Change: phase-10.2 — системные улучшения

Связанная дорожная карта: [_dev/final_report.md](../../_dev/final_report.md), раздел 10.2.

## Scope

- Практическое ядро **howto** (3–5+ полноценных гайдов с примерами и проверкой результата).
- Машинный слой: `llms.txt` / `KNOWLEDGE.md`, `exports/knowledge-index.jsonl`, скрипт экспорта в CI (`--check`).
- **Lychee** (или аналог) на расписании для внешних ссылок; политика строгоости — см. [`engineering-notes.md`](../engineering-notes.md).
- Навигация: сценарные маршруты в `data-map`, региональные материалы (карточки и/или методика).
- Группировка нормативной базы / справочников по мере роста корпуса.

## ADDED / MODIFIED (трассировка на specs)

| Capability | Изменения |
|------------|-----------|
| `howto-playbook` | Довести приоритетные страницы до полного содержания (не только заголовки-заглушки). |
| `machine-readable-export` | Поддерживать контракт JSONL в репозитории; при смене полей — обновить скрипт и зафиксировать в spec. |
| `ci-quality-gates` | Weekly links; при необходимости — отдельный PR-job с `continue-on-error` или allowlist. |
| `navigation-scenarios` | Расширить README-хабы разделов (`data-sources`, `budget-classification`, …). **Сделано (2026-05):** корневые README основных разделов + под-хабы `data-sources/*`, `information-systems/*`, `howto/*`; `related_pages` + `lint:related-pages`; исправлены «битые» `description` с `#` в YAML. |
| `editorial-expansion` | Региональные карточки и связка с `wiki-filling-plan`. |

## Exit criteria (критерии готовности фазы)

- CI стабильно проходит с линтами метаданных и проверкой экспорта.
- Есть воспроизводимая команда обновления индекса, задокументированная в `CONTRIBUTING` / `rag-guide`.
- Минимум один еженедельный контроль внешних ссылок без ручного запуска.
