---
title: 'Республика Хакасия: Верховный Совет — раздел «Финансы» (vskhakasia.ru)'
sidebar_label: ВС РХ — «Финансы»
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-supreme-council-finances-vskhakasia
source_url: 'https://vskhakasia.ru/info/finansy'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html
description: >-
  Верховный Совет Республики Хакасия: раздел «Финансы» на vskhakasia.ru — материалы по бюджетному
  законодательству, проекты и сопутствующие публикации парламента.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-supreme-council-npa-bank
  - /data-sources/regional/republic-of-khakassia-supreme-council-open-data-vs19
  - /data-sources/regional/republic-of-khakassia-minfin-portal-r19
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: Верховный Совет — раздел «Финансы» (vskhakasia.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республиканский** законодательный орган |
| Тип доступа | Официальный **тематический** раздел сайта **vskhakasia.ru** |
| Основные форматы | HTML, **PDF** |
| Оператор | Верховный Совет Республики Хакасия |
| Режим доступа | Открытый |

Коротко: **законодательный** контур **бюджета** (проекты, пояснения, сопутствующие материалы); **канонические тексты актов** ищите в **[банке НПА](/data-sources/regional/republic-of-khakassia-supreme-council-npa-bank)**, **табличные открытые данные** — на **vs19.ru** и **budget.gov.ru**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная |
| Машиночитаемость (`machine_readability`) | HTML/PDF |
| Юридическая значимость (`legal_significance`) | официальный **парламентский** сайт |
| Задержка обновления (`update_lag`) | бюджетный **цикл** |
| Глубина архива (`archive_depth`) | зависит от раздела |
| Лицензия (`license_or_terms`) | условия **vskhakasia.ru** |

## Описание

Раздел **«Финансы»** пересекается с **законотворчеством**; при расхождении **дат** версий ориентируйтесь на **банк НПА** для **юридически значимого** текста закона.

## Оператор

Верховный Совет Республики Хакасия — https://vskhakasia.ru/info/finansy

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел «Финансы» | https://vskhakasia.ru/info/finansy | HTML |

## Объекты данных и показатели

- **Проекты** и **сопутствующие** материалы по законам о бюджете.
- **Ссылки** на аудиторские и аналитические документы (если размещены в разделе).
- **Ключи связки**: **год** бюджета, **номер** законопроекта.

## Периодичность обновления

По мере **заседаний** и **публикаций** парламента.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 \
  "https://vskhakasia.ru/info/finansy" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [ВС РХ — банк НПА](/data-sources/regional/republic-of-khakassia-supreme-council-npa-bank) — тексты актов.
- [ВС РХ — открытые данные vs19.ru](/data-sources/regional/republic-of-khakassia-supreme-council-open-data-vs19) — наборы opendata.
- [Минфин (r-19.ru)](/data-sources/regional/republic-of-khakassia-minfin-portal-r19) — исполнительный контур.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — все источники субъекта.

## Не путать с

- **[Открытые данные vs19.ru](/data-sources/regional/republic-of-khakassia-supreme-council-open-data-vs19)** — акцент на **наборах** данных, а не на **обзорной** странице «Финансы».
