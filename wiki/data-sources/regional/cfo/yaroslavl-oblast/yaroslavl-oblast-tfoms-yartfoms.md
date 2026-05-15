---
title: 'Ярославская область: ТФОМС Ярославской области (yartfoms.ru)'
sidebar_label: 'ТФОМС Ярославской области'
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/yaroslavl-oblast-tfoms-yartfoms
source_url: 'https://www.yartfoms.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный сайт территориального фонда ОМС: публичные материалы о бюджете
  фонда, отчётах об исполнении и нормативной базе ОМС в регионе.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion
  - /data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion
  - /data-sources/regional/subject-yaroslavl-oblast-sources-overview
  - /data-sources/federal/rosstat-gosfin-extrabudgetary-funds-execution
  - /data-sources/regional/how-to-find-regional-data
---

# Ярославская область: ТФОМС Ярославской области (yartfoms.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный внебюджетный фонд (ОМС) на территории Ярославской области |
| Тип доступа | Официальный веб-портал фонда |
| Основные форматы | HTML, вложения (часто PDF) |
| Оператор | Территориальный фонд обязательного медицинского страхования Ярославской области |
| Режим доступа | Открытый |

Коротко: **официальный** вход к публичной информации о бюджете и исполнении ТФОМС; для консолидации с бюджетом субъекта используйте [Минфин области](/data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion), для НПА — [банк НПА](/data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion).

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — набор публичных разделов зависит от политики раскрытия |
| Машиночитаемость (`machine_readability`) | преимущественно HTML и файлы; API не заявлен |
| Юридическая значимость (`legal_significance`) | официальный оператор регионального сегмента ОМС |
| Задержка обновления (`update_lag`) | зависит от отчётного цикла фонда |
| Глубина архива (`archive_depth`) | определяется архивом документов на сайте |
| Лицензия (`license_or_terms`) | условия сайта фонда |

## Описание

На сайте ТФОМС обычно публикуются **отчёты об исполнении бюджета фонда**, нормативные акты и разъяснения. Для сопоставления с федеральной статистикой по внебюджетным фондам см. [открытые данные Росстата](/data-sources/federal/rosstat-gosfin-extrabudgetary-funds-execution).

## Оператор

Территориальный фонд обязательного медицинского страхования Ярославской области — канонический вход: https://www.yartfoms.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница ТФОМС | https://www.yartfoms.ru/ | HTML |

## Объекты данных и показатели

- **Бюджет фонда** и отчёты об исполнении (публичные версии).
- **Нормативные документы** регионального уровня в части ОМС (по мере размещения).
- Связка: финансовый год, показатели фонда; для машинной обработки фиксируйте файл и дату скачивания.

## Периодичность обновления

Связана с отчётностью ТФОМС и календарём раскрытия информации.

## Ограничения и особенности

- Публичный сайт не исчерпывает весь учётный контур ОМС; детальные реестры могут быть в смежных системах и регистрах.

## Связанные страницы wiki

- [Министерство финансов Ярославской области](/data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion) — консолидация регионального бюджета.
- [Банк НПА области](/data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion) — нормативная база субъекта.
- [Сводная страница субъекта](/data-sources/regional/subject-yaroslavl-oblast-sources-overview) — все источники по области.
- [Росстат: исполнение бюджетов внебюджетных фондов](/data-sources/federal/rosstat-gosfin-extrabudgetary-funds-execution) — федеральный статистический контур.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.

## Не путать с

- **[Минфин области](/data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion)** — бюджет субъекта; ТФОМС — отдельный внебюджетный фонд с собственной отчётностью.
