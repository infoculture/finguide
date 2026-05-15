---
title: 'Республика Крым: проект «Открытый бюджет» (budget.rk.ifinmon.ru)'
sidebar_label: Открытый бюджет Крыма (ifinmon)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-crimea-open-budget-ifinmon
source_url: 'https://budget.rk.ifinmon.ru/dokumenty/zakon-o-byudzhete'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
  - pdf
  - docx
  - xlsx
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: 'смешанный доступ: HTML-оболочка и прямые файлы DOC/DOCX, XLSX, PDF по ссылкам'
description: >-
  Региональная витрина «Открытый бюджет» Республики Крым (платформа ifinmon): реестр документов,
  связанных с законом о бюджете республики, с выкладкой в офисных форматах для скачивания.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/republic-of-crimea-minfin
  - /data-sources/regional/republic-of-crimea-state-council-budget-lawmaking
  - /data-sources/regional/subject-republic-of-crimea-sources-overview
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Крым: «Открытый бюджет» (budget.rk.ifinmon.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Республика Крым: **бюджет для граждан** и прозрачность материалов закона о бюджете |
| Тип доступа | Веб-витрина + файлы по ссылкам |
| Основные форматы | HTML; DOC/DOCX, XLSX, PDF |
| Оператор | региональный проект на базе **ifinmon** (см. imprint/оператора на витрине) |
| Режим доступа | Открытый просмотр и скачивание |

Коротко: точка входа для **пакета документов** вокруг закона о бюджете — удобна, когда нужны **готовые файлы** пояснений и приложений, а не только HTML страниц Минфина или парламента. Процедурный контекст рассмотрения закона — у [Госсовета, бюджетное законотворчество](/data-sources/regional/republic-of-crimea-state-council-budget-lawmaking).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от загрузки комплекта по годам |
| Машиночитаемость (`machine_readability`) | смешанный: HTML + **скачиваемые** DOC/XLSX/PDF; для пайплайна часто нужна распаковка и нормализация таблиц |
| Юридическая значимость (`legal_significance`) | официальная витрина проекта регионального «открытого бюджета»; сверяйте с первоисточниками парламента для юридически значимого текста закона |
| Задержка обновления (`update_lag`) | привязана к бюджетному циклу и выкладке материалов оператором |
| Глубина архива (`archive_depth`) | по политике проекта |
| Лицензия (`license_or_terms`) | условия площадки — у оператора ifinmon и разделов «О проекте» |

## Описание

Домен **budget.rk.ifinmon.ru** относится к линейке **regional open budget** на платформе ifinmon.ru. Раздел **«Закон о бюджете»** агрегирует **скачиваемые** версии сопутствующих таблиц и пояснений — удобно для копирования в локальную аналитику по сравнению с чистым HTML.

## Оператор

Проект «Открытый бюджет» Республики Крым на ifinmon — каноническая страница раздела: https://budget.rk.ifinmon.ru/dokumenty/zakon-o-byudzhete

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Реестр документов закона о бюджете | https://budget.rk.ifinmon.ru/dokumenty/zakon-o-byudzhete | HTML + вложения |

## Объекты данных и показатели

- **Файлы** закона о бюджете и сопутствующих материалов: пояснительные записки, приложения, сводные таблицы (по факту выкладки).
- **Год/номер** бюджета — как ключ для сопоставления с парламентскими текстами.
- Связка с **КБК** и классификаторами — внутри XLSX/PDF (требует разборки файлов).

## Периодичность обновления

Обычно **вокруг принятия** и публикации бюджетного комплекта на очередной год.

## Ограничения и особенности

- Коммерческий/платформенный хостинг: при смене **поддомена** или верстки ориентируйтесь на [главную витрину Минфина](/data-sources/regional/republic-of-crimea-minfin) и официальные источники текстов законов.
- Для машинной обработки предусмотрите **контрольные суммы/версии** файлов — вложения могут обновляться без явной нумерации в URL.

## Связанные страницы wiki

- [Министерство финансов Республики Крым](/data-sources/regional/republic-of-crimea-minfin) — корневой оператор бюджетной информации.
- [Госсовет: бюджетное законотворчество](/data-sources/regional/republic-of-crimea-state-council-budget-lawmaking) — процедура парламента.
- [Сводная страница субъекта](/data-sources/regional/subject-republic-of-crimea-sources-overview) — все источники по Республике Крым.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные массивы для сверки показателей.

## Не путать с

- **[Портал Государственного Совета](/data-sources/regional/republic-of-crimea-state-council-portal)** — парламентский контур законов; ifinmon — витрина «open budget» с файлами.
