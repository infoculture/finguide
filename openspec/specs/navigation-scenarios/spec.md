# Capability: navigation-scenarios

Сценарная навигация и хабы разделов.

## Requirement: Question-to-source journeys

Проект SHALL поддерживать документы с маршрутами «вопрос → источник → инструкция», включая как минимум:

- Федеральный бюджет  
- Региональный бюджет  
- Расходы учреждения  
- Закупки и контракты  
- Выбор источника данных под вопрос  

Базовая реализация: [`wiki/intro/data-map.md`](../../../wiki/intro/data-map.md) и перекрёстные ссылки на [`wiki/howto/`](../../../wiki/howto/).

### Scenario: Reader follows linked path

- **GIVEN** пользователь открывает [`wiki/intro/data-map.md`](../../../wiki/intro/data-map.md)
- **WHEN** он переходит по ссылкам сценарного блока
- **THEN** он может дойти до карточки источника данных и соответствующего howto без поиска по всем разделам вручную

## Requirement: Section hubs

README разделов и согласованные **под-хабы** (`wiki/**/README.md`: корень раздела в сайдбаре и логические подгруппы вроде `data-sources/federal`, `howto/access`, `information-systems/civil`) SHOULD содержать: назначение раздела, аудиторию, ключевые страницы (таблица или компактный список без лишнего дублирования) и типовые вопросы. Для обогащения графа экспорта RECOMMENDED поле `related_pages` в frontmatter с каноническими slug; целостность — `npm run lint:related-pages` после согласованного `exports/knowledge-index.jsonl`.

### Scenario: Reader opens a section hub

- **GIVEN** читатель открывает README-хаб раздела или подраздела (например [`wiki/data-sources/README.md`](../../../wiki/data-sources/README.md) или [`wiki/howto/access/README.md`](../../../wiki/howto/access/README.md))
- **WHEN** он читает вводный текст и таблицу быстрых входов
- **THEN** он находит ссылку на карточку источника, ИС, how-to или справочник без обхода всего сайдбара

## Requirement: Getting started

Проект SHOULD содержать страницу быстрого старта для новых читателей: [`wiki/intro/getting-started.md`](../../../wiki/intro/getting-started.md).

## Requirement: Discovery UX

Проект SHOULD включать breadcrumbs для документов (конфигурация Docusaurus) и страницы справочного поиска по кодам ([`wiki/reference/classification-codes-index.md`](../../../wiki/reference/classification-codes-index.md)).

Интеграция Algolia DocSearch SHOULD описана в [`wiki/reference/docsearch-setup.md`](../../../wiki/reference/docsearch-setup.md) до появления ключей.
