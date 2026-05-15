---
title: 'Санкт-Петербург: Контрольно-счётная палата (ksp.org.ru)'
sidebar_label: КСП Санкт-Петербурга
tags:
  - data-source
  - regional
  - control
  - oversight
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-control-auditing-chamber-ksp
source_url: 'https://ksp.org.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
description: >-
  Официальный сайт Контрольно-счётной палаты Санкт-Петербурга: результаты
  внешнего аудита, заключения, планы проверок и материалы парламентского
  контроля за использованием бюджетных средств.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-financial-control-committee
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/federal/budget-gov-ru-datasets
---

# Санкт-Петербург: Контрольно-счётная палата (ksp.org.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — **внешний** (парламентский) финансовый контроль и аудит |
| Тип доступа | Публичный сайт КСП |
| Основные форматы | **HTML**; отчёты и заключения **PDF** |
| Оператор | **Контрольно-счётная палата Санкт-Петербурга** |
| Режим доступа | Открытый |

Коротко: **официальные** материалы **внешнего** аудита и контроля за расходованием средств бюджета. Для **внутреннего** финконтроля Администрации см. **[КФК](/data-sources/regional/saint-petersburg-financial-control-committee)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — публикуется то, что раскрыто по закону и практике КСП |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** |
| Юридическая значимость (`legal_significance`) | официальный орган внешнего аудита ЗакСобрания |
| Задержка обновления (`update_lag`) | привязана к циклу проверок и публикации заключений |
| Глубина архива (`archive_depth`) | зависит от раздела «Архив» на сайте |
| Лицензия (`license_or_terms`) | см. условия ksp.org.ru |

## Описание

КСП публикует **итоги контрольных мероприятий**, **аудиторские заключения** (где применимо), **планы** работы. Это **контекст** к цифрам исполнения бюджета из **[Комитета финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)**.

## Оператор

**Контрольно-счётная палата Санкт-Петербурга** — https://ksp.org.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень сайта | https://ksp.org.ru/ | HTML |

## Объекты данных и показатели

- **Отчёты** и **заключения** по результатам проверок.
- **Планы** проверок и **аналитические** материалы КСП.
- **Не** замена **[открытых данных](/data-sources/regional/saint-petersburg-open-data-gov-spb)** по машиночитаемым рядам.

## Периодичность обновления

По **мере** завершения проверок и утверждения докладов.

## Ограничения и особенности

- Домен **ksp.org.ru** — проверяйте **HTTPS** и актуальность сертификата при автоматизации.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://ksp.org.ru/"
```

## Связанные страницы wiki

- [Комитет финансового контроля (КФК)](/data-sources/regional/saint-petersburg-financial-control-committee) — внутренний контроль Администрации.
- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — бюджет и отчётность.
- [Открытые данные «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets) — для сверки цифр с выводами аудита.
- [Сводная по источникам СПб](/data-sources/regional/subject-saint-petersburg-sources-overview).

## Не путать с

- **[КФК](/data-sources/regional/saint-petersburg-financial-control-committee)** — **внутренний** контроль; КСП — **внешний** аудит ЗакСобрания.
