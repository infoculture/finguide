---
title: 'Еврейская автономная область: УФНС России (nalog.gov.ru, rn79)'
sidebar_label: 'УФНС ЕАО (rn79)'
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-05-14
slug: /data-sources/regional/jewish-autonomous-oblast-ufns-nalog
source_url: 'https://www.nalog.gov.ru/rn79/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html_portal
description: >-
  Региональный раздел ФНС России для Еврейской автономной области (код rn79):
  новости, сервисы и справочная информация для налогоплательщиков.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/fnssite
  - /organizations/fns
  - /data-sources/regional/jewish-autonomous-oblast-minfin
  - /data-sources/regional/subject-jewish-autonomous-oblast-sources-overview
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/federal/nalog-regstats
---

# Еврейская автономная область: УФНС России (nalog.gov.ru, rn79)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Территориальное** управление ФНС по ЕАО в структуре `nalog.gov.ru` |
| Тип доступа | Публичный веб-раздел |
| Основные форматы | HTML |
| Оператор | Управление Федеральной налоговой службы по Еврейской автономной области |
| Режим доступа | Открытое чтение; личные кабинеты — по отдельным правилам |

Коротко: **официальный** региональный вход ФНС для **налоговых** сервисов и коммуникаций; корневой URL **`/rn79`** без завершающего слэша может отдавать **404** — используйте канонический **`/rn79/`**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | **Частичная**: фокус карточки — публичная витрина УФНС, не весь федеральный каталог НД |
| Машиночитаемость (`machine_readability`) | **HTML**; федеральные открытые наборы ФНС см. отдельные карточки каталога |
| Юридическая значимость (`legal_significance`) | **Официальный** сайт ФНС |
| Задержка обновления (`update_lag`) | Оперативная для новостей; регламентная для отчётности |
| Глубина архива (`archive_depth`) | Зависит от разделов УФНС |
| Лицензия (`license_or_terms`) | Правила `nalog.gov.ru` |

## Описание

Раздел **`rn79`** объединяет страницы УФНС по Еврейской автономной области: **контакты**, **новости**, **разъяснения** и ссылки на **федеральные** сервисы. Для **машиночитаемых** справочников и статистики используйте федеральные карточки (например [региональная статистика ФНС](/data-sources/federal/nalog-regstats)) с фильтрацией по субъекту в данных.

## Оператор

**УФНС России по Еврейской автономной области** — канонический вход: https://www.nalog.gov.ru/rn79/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Корень раздела УФНС (рекомендуется) | https://www.nalog.gov.ru/rn79/ | HTML |
| Пример вложенной страницы | https://www.nalog.gov.ru/rn79/apply_fts/ | HTML |

## Объекты данных и показатели

- **Новости и разъяснения** УФНС, **реквизиты** и режимы приёма.
- **Не** является единой точкой всех **открытых данных** ФНС: см. федеральный каталог на [fnssite](/information-systems/federal/fnssite).

## Периодичность обновления

**Непрерывная** для новостного контура; иные разделы — по регламентам ведомства.

## Примеры доступа

```bash
curl -fsSL -A "finguide-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.nalog.gov.ru/rn79/"
```

## Связанные страницы wiki

- [Портал ФНС (ИС)](/information-systems/federal/fnssite) — федеральная витрина и сервисы.
- [ФНС России (организация)](/organizations/fns) — роль оператора.
- [Статистика госрегистрации (ФНС)](/data-sources/federal/nalog-regstats) — федеральные файлы и методология.
- [Сводная страница субъекта](/data-sources/regional/subject-jewish-autonomous-oblast-sources-overview) — все источники по ЕАО.

## Не путать с

- **[Депфин](/data-sources/regional/jewish-autonomous-oblast-minfin)** — региональный **бюджет**; УФНС не заменяет бюджетную отчётность субъекта.
