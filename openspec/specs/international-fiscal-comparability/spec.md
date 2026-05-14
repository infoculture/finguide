# Capability: international-fiscal-comparability

Международный контекст для осторожного сравнения российской бюджетной классификации и отчётности с GFS, COFOG, SNA и витринами международных организаций. Источник целей: [_dev/content_plan_20260514.md](../../../_dev/content_plan_20260514.md), разд. 5.7, 6, 7.

## Requirement: Russia and GFS overview

Проект SHALL содержать страницу в [`wiki/reference/international-gfs-cofog.md`](../../../wiki/reference/international-gfs-cofog.md) (или согласованное имя со slug `/reference/<slug>`), отвечающую на вопросы:

- что можно сравнивать на высоком уровне агрегации;
- что нельзя напрямую сопоставлять с российскими кодами;
- какие оговорки нужны при использовании международных рядов.

### Scenario: Reader avoids code mixing

- **GIVEN** пользователь планирует сравнить функциональную классификацию
- **WHEN** он читает обзор
- **THEN** он не смешивает национальные коды с COFOG без явной методики

## Requirement: High-level mapping table

Страница MUST содержать компактную таблицу соответствий «российский блок → международный аналог / отсутствует прямого соответствия → оговорка».

### Scenario: Table cites international sources

- **GIVEN** строка таблицы ссылается на международный стандарт
- **WHEN** в корпусе есть карточка [`wiki/data-sources/international/`](../../../wiki/data-sources/international/)
- **THEN** таблица даёт ссылку на `/data-sources/international/<slug>` с пояснением

## Requirement: International data how-to

Проект SHOULD содержать how-to по работе с международными базами (IMF, OECD, World Bank и др.) без некорректных выводов о российских рядах, с разделами по [`howto-playbook`](../howto-playbook/spec.md).

### Scenario: How-to links reference overview

- **GIVEN** читатель открывает how-to
- **WHEN** он переходит к обзору GFS/COFOG
- **THEN** он получает правила сравнения до загрузки данных

## Requirement: Glossary depth for international terms

Проект MAY добавлять карточки глоссария для терминов GFS, COFOG, SNA с короткими определениями и ссылками на [`wiki/reference/international-gfs-cofog.md`](../../../wiki/reference/international-gfs-cofog.md).

### Scenario: Glossary cross-links reference

- **GIVEN** опубликована карточка термина GFS
- **WHEN** читатель открывает «Связанные термины»
- **THEN** есть ссылка на `/reference/<international-overview-slug>` с пояснением
