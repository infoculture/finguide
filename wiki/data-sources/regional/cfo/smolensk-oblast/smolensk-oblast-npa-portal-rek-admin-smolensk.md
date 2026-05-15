---
title: >-
  Смоленская область: нормативно-правовые акты (портал администрации, раздел НПА
  Смоленской области)
sidebar_label: НПА Смоленской области (портал)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/smolensk-oblast-npa-portal-rek-admin-smolensk
source_url: "https://rek.admin-smolensk.ru/docs/npd_smol"
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
machine_readability: HTML/PDF; без открытого API в карточке
description: >-
  Раздел портала администрации Смоленской области: поиск и публикация
  региональных НПА (законы, постановления, приказы и др.) с привязкой к
  бюджетному и финансовому блоку.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-smolensk-oblast-sources-overview
  - /data-sources/regional/smolensk-oblast-regional-duma-website
  - /data-sources/regional/smolensk-oblast-ministry-of-finance
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Смоленская область: нормативно-правовые документы (портал администрации)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Исполнительная власть** Смоленской области (опубликованные НПА) |
| Тип доступа | Подсистема на домене `admin-smolensk.ru` |
| Основные форматы | HTML; PDF/DOC вложений по мере размещения |
| Оператор | Администрация Смоленской области |
| Режим доступа | Открытый |

Коротко: **официальный банк НПА** для поиска актов правительства области и смежных органов. Законы областной Думы как правило дублируются или дополняются на [сайте Думы](/data-sources/regional/smolensk-oblast-regional-duma-website).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты загрузки в реестр и классификаторов на портале |
| Машиночитаемость (`machine_readability`) | преимущественно HTML и файлы; машинный экспорт не описан |
| Юридическая значимость (`legal_significance`) | официальная публикация региональных НПА (уровень субъекта) |
| Задержка обновления (`update_lag`) | от минут до дней после подписания — по регламенту размещения |
| Глубина архива (`archive_depth`) | определяется политикой реестра |
| Лицензия (`license_or_terms`) | официальные тексты; условия использования — по порталу |

## Описание

Раздел `npd_smol` используют для **подтверждения редакций** постановлений о бюджете, лимитах, межбюджетных трансфертах и иных финансовых актах исполнительной ветви. Для **машинных рядов исполнения** после установления правовой базы переходите к [Минфину области](/data-sources/regional/smolensk-oblast-ministry-of-finance) и федеральным наборам.

## Оператор

Администрация Смоленской области — канонический вход: https://rek.admin-smolensk.ru/docs/npd_smol

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Реестр НПА Смоленской области | https://rek.admin-smolensk.ru/docs/npd_smol | HTML |

## Объекты данных и показатели

- Карточки **нормативных актов** с реквизитами, статусом действия и вложениями.
- Связка с **бюджетным циклом**: постановления о бюджете, изменения, распределение средств — по фактическим рубрикам портала.
- Ключи: **номер и дата акта**, вид документа, при необходимости — ссылка на закон Думы.

## Периодичность обновления

Непрерывно по мере принятия и регистрации новых актов.

## Ограничения и особенности

- Автоматизированные запросы могут получать **403** без браузерного клиента; для проверки используйте браузер или `User-Agent`, имитирующий браузер (в рамках правил сайта).

## Примеры доступа

```bash
curl -sI -A "Mozilla/5.0" --max-time 20 "https://rek.admin-smolensk.ru/docs/npd_smol" | head -n 5
```

## Связанные страницы wiki

- [Смоленская областная Дума](/data-sources/regional/smolensk-oblast-regional-duma-website) — законодательные тексты и проекты.
- [Министерство финансов Смоленской области](/data-sources/regional/smolensk-oblast-ministry-of-finance) — отчётность и материалы по бюджету.
- [Сводная страница субъекта](/data-sources/regional/subject-smolensk-oblast-sources-overview) — все источники по области.

## Не путать с

- **[Сайт областной Думы](/data-sources/regional/smolensk-oblast-regional-duma-website)** — там законодательная ветвь; на портале администрации — преимущественно акты правительства и иных органов исполнительной власти.
