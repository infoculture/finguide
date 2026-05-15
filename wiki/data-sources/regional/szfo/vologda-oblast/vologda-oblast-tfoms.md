---
title: 'Вологодская область: ТФОМС'
sidebar_label: ТФОМС Вологодской области
tags:
  - data-source
  - regional
  - social
last_updated: 2026-05-15
slug: /data-sources/regional/vologda-oblast-tfoms
source_url: 'http://new.oms35.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; отчёты — PDF
description: >-
  Официальный сайт Территориального фонда обязательного медицинского
  страхования Вологодской области: территориальная программа ОМС, тарифы,
  отчётность о средствах ОМС и закупках медорганизаций (по размещению на сайте).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-vologda-oblast-sources-overview
  - /data-sources/regional/vologda-oblast-minfin
  - /data-sources/regional/vologda-oblast-state-programs-portal
  - /data-sources/regional/vologda-oblast-procurement-portal
  - /data-sources/regional/how-to-find-regional-data
---

# Вологодская область: ТФОМС

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Субъект РФ — **Вологодская область** (обязательное медицинское страхование) |
| Тип доступа | Официальный сайт ТФОМС |
| Основные форматы | HTML, PDF |
| Оператор | ТФОМС Вологодской области |
| Режим доступа | Открытый |

Коротко: **страховой** контур здравоохранения субъекта: **территориальная программа ОМС**, нормативные акты фонда, публичные отчёты о финансировании и закупках в системе ОМС (в объёме раскрытия на сайте).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от раздела (программа vs детальные реестры счетов) |
| Машиночитаемость (`machine_readability`) | преимущественно PDF и HTML без единого API |
| Юридическая значимость (`legal_significance`) | официальный региональный оператор ОМС |
| Задержка обновления (`update_lag`) | привязана к годовому циклу программы ОМС и отчётности |
| Глубина архива (`archive_depth`) | по политике фонда |
| Лицензия (`license_or_terms`) | см. условия сайта ТФОМС |

## Описание

Данные ТФОМС относятся к **внебюджетному** контуру ОМС и **пересекаются** с региональным бюджетом через **субвенции** и софинансирование. Для **госпрограмм** в целом см. [портал программ](/data-sources/regional/vologda-oblast-state-programs-portal); для **закупок** медучреждений — также [региональный портал закупок](/data-sources/regional/vologda-oblast-procurement-portal) и ЕИС.

## Оператор

ТФОМС Вологодской области — канонический вход: http://new.oms35.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Сайт ТФОМС | http://new.oms35.ru/ | HTML |

## Объекты данных и показатели

- **Территориальная программа ОМС** (текст, объёмы, изменения).
- **Отчёты** о финансовых результатах и использовании средств ОМС (если публикуются).
- **Тарифы** и нормативы (по разделам сайта).

## Периодичность обновления

При **утверждении и корректировке** программы ОМС, **квартальной/годовой** отчётности фонда.

## Ограничения и особенности

- Канонический URL указан с **HTTP** (как в публичной навигации фонда); при наличии зеркала на HTTPS сверяйте подлинность домена.

## Связанные страницы wiki

- [Министерство финансов области](/data-sources/regional/vologda-oblast-minfin) — смежный бюджетный контур субвенций.
- [Портал госпрограмм](/data-sources/regional/vologda-oblast-state-programs-portal) — программы субъекта в целом.
- [Сводная страница субъекта](/data-sources/regional/subject-vologda-oblast-sources-overview) — прочие источники.

## Не путать с

- **[Региональный портал закупок](/data-sources/regional/vologda-oblast-procurement-portal)** — общий контур закупок; ТФОМС — **специализированный** оператор ОМС со своей отчётностью.
