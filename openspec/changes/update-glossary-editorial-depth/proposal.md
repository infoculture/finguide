# Change: Переработка стандарта содержания глоссария (полнота, коды, происхождение)

## Why

Требования к карточкам [`wiki/glossary/`](../../../wiki/glossary/) размыты между [`AGENTS.md`](../../../AGENTS.md) и шаблоном: нет единого OpenSpec-источника про **расшифровку кодов**, **причины введения** терминов и **разделение ролей** (кто ведёт перечень vs кто применяет в данных). Это затрудняет выравнивание ~87 карточек и снижает предсказуемость качества для читателей и RAG.

## What Changes

- Новая capability **`glossary-card-content`** с нормативными требованиями к структуре и полноте текста карточек глоссария (в дельте: [`specs/glossary-card-content/spec.md`](./specs/glossary-card-content/spec.md)).
- Дельта к **`editorial-expansion`**: требование «Glossary and reporting depth» отсылает к `glossary-card-content` как к канону по глоссарию.
- После утверждения change: обновление [`wiki/glossary/glossary-card-template.md`](../../../wiki/glossary/glossary-card-template.md) и раздела глоссария в [`AGENTS.md`](../../../AGENTS.md); волновая редакционная миграция карточек по подпапкам (см. [`tasks.md`](./tasks.md)).

## Impact

- **Затронутые спеки:** `glossary-card-content` (новая), `editorial-expansion` (изменение одного требования).
- **Связанные спеки (без дельты в этом PR):** [`corpus-metadata`](../../specs/corpus-metadata/spec.md) (`description`, `tags`, `glossary_kind`, `source_url`), [`rag-corpus-navigation`](../../specs/rag-corpus-navigation/spec.md) (`related_pages` для терминов).
- **Риски:** большой объём ручной работы; нужна дисциплина ревью, чтобы не пропустить карточки без блока происхождения/ответственности на кодовых терминах.
- **Код CI:** в этой спеке автоматические проверки для глоссария помечены как отложенные (отдельный change); поведение линтеров по умолчанию не меняется до миграции.
