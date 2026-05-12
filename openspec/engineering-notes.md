# Инженерные решения (следующий шаг после утверждения плана)

Документ фиксирует выбор стека и политику CI, о которых говорилось в плане OpenSpec ([`_dev/final_report.md`](../_dev/final_report.md), раздел «следующие шаги»).

## Экспорт в RAG-формат

- **Выбрано:** Node.js, скрипт [`scripts/export-knowledge-index.mjs`](../scripts/export-knowledge-index.mjs), выходные файлы [`exports/knowledge-index.jsonl`](../exports/knowledge-index.jsonl) и [`exports/knowledge-graph.json`](../exports/knowledge-graph.json).
- **Причина:** единый runtime с Docusaurus (`package.json`), без отдельного Python-окружения в CI.
- **Альтернатива:** `scripts/export-to-rag.py` остаётся возможным при появлении требований к pandas/геоданным; тогда дублировать контракт полей JSONL в одном месте (spec `machine-readable-export`).

## Проверка внешних ссылок (lychee)

- **Расписание:** [`.github/workflows/links-weekly.yml`](../.github/workflows/links-weekly.yml) — по cron и `workflow_dispatch` (строгий сигнал для редакции).
- **Pull request:** [`.github/workflows/links-pr.yml`](../.github/workflows/links-pr.yml) — тот же набор путей, шаг с **`continue-on-error: true`**, чтобы не блокировать merge при флейках внешних сайтов.
- **Политика:** обязательный PR-build ([`ci.yml`](../.github/workflows/ci.yml)) по-прежнему без lychee; PR-job даёт ранний сигнал автору PR в логах и статусе шага (жёлтый при сбоях).
- **Q&A:** `npm run lint:qa` проверяет [`tests/qa-validation.jsonl`](../tests/qa-validation.jsonl) против закоммиченного [`exports/knowledge-index.jsonl`](../exports/knowledge-index.jsonl) (запуск в CI после `export:knowledge --check`).
- **Корпус Markdown:** `npm run lint:corpus` — эвристики README и карточек ([`scripts/corpus-markdown-lint.mjs`](../scripts/corpus-markdown-lint.mjs)).

## Черновики в индексе

- В JSONL поле `draft: true` передаётся явно; потребители RAG **должны** отфильтровывать черновики для продакшен-индекса (см. [`wiki/intro/rag-guide.md`](../wiki/intro/rag-guide.md)).

## README-хабы и `related_pages`

- **Корневые README** разделов (`wiki/*/README.md` для пунктов сайдбара): введение, источники данных, бюджетная классификация, отчётность, how-to, право, организации, информационные системы, глоссарий, справочники, бюджетная система — с блоками «для кого», быстрые входы (таблица), типовые вопросы и перекрёстные ссылки.
- **Под-хабы:** `wiki/data-sources/{federal,regional,civil,international}/README.md`, `wiki/information-systems/{federal,regional,civil}/README.md`, `wiki/howto/{access,analysis,automation}/README.md`.
- **Frontmatter:** где встречался `description` в виде строки с markdown-заголовком (`'# …'`), заменён на нормальный текст; у хабов добавлено поле **`related_pages`** (канонические slug); проверка **`npm run lint:related-pages`** после `export:knowledge --check`.
- **Шаблоны** (`*-template.md`, `draft: true`) не входят в production-сборку Docusaurus: в хабах на них даётся ссылка на файл в репозитории (GitHub), а не внутренний URL сайта.
