# Участие в проекте

Спасибо за интерес к книге «Открытые государственные финансы». Контент живёт в каталоге [`wiki/`](wiki/), сайт собирается [Docusaurus 3](https://docusaurus.io/).

## Ссылки в Markdown

- В **карточках** разделов (глоссарий, источники данных, организации, информационные системы, отчётность, нормативные документы) предпочтительны **канонические пути** от корня сайта: `/glossary/kbk`, `/data-sources/federal/minfin-opendata`, `/legal/budget-code`. Так проще поддерживать экспорт, зеркалирование и индексацию для поиска и RAG.
- **Относительные** пути (`./about.md`, соседние файлы в одной папке) уместны там, где важна переносимость материала внутри каталога без привязки к URL сайта.
- Подробнее о соглашениях и структуре страниц — в [`wiki/intro/how-to-use.md`](wiki/intro/how-to-use.md).

## Качество контента

Обязательный ориентир для правок — **[`AGENTS.md`](AGENTS.md)** в корне репозитория: шаблоны карточек, требования к блокам «Связанные…», «Где в данных» и перекрёстным ссылкам.

## Чеклист для Pull Request (wiki)

Перед отправкой PR проверьте:

1. Во frontmatter есть осмысленные `description`, `last_updated`, непустые `tags` (из [`scripts/tag-allowlist.json`](scripts/tag-allowlist.json)) и `content_type`.
2. Для карточек выполнены требования [`AGENTS.md`](AGENTS.md) к перекрёстным ссылкам (конкретные slug, без общих заглушек).
3. Страницы в [`wiki/howto/`](wiki/howto/) (кроме `README.md` и страниц с `draft: true`) соответствуют структуре из [`openspec/specs/howto-playbook/spec.md`](openspec/specs/howto-playbook/spec.md).
4. Локально проходят команды `npm run lint:frontmatter`, `npm run lint:howto`, `npm run export:knowledge` (при изменении корпуса закоммитьте обновления в [`exports/`](exports/)), `npm run lint:qa`, `npm run lint:related-pages`, `npm run lint:corpus`, затем `npm run build`.

## Проверка перед Pull Request

1. Установите зависимости: `npm ci`.
2. Выполните `npm run presubmit` (или по отдельности `npm run lint:*`, `npm run export:knowledge -- --check`, `npm run build`). Сборка **прерывается** при битых внутренних ссылках в Markdown и маршрутах документов — это ожидаемая проверка качества (те же шаги выполняются в CI при push и pull request).
3. На pull request дополнительно запускается **advisory**-проверка внешних ссылок ([`links-pr.yml`](.github/workflows/links-pr.yml)); она не блокирует merge — смотрите лог job при правках карточек с URL.

Вопросы и предложения можно оставить в [Issues](https://github.com/infoculture/opengovfinancesbook/issues).

## Лицензия

Вклад в репозиторий принимается на условиях [MIT](LICENSE).
