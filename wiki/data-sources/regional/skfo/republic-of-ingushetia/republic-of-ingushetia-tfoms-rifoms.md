---
title: 'Республика Ингушетия: Территориальный фонд ОМС (rifoms.ru)'
sidebar_label: ТФОМС (rifoms.ru)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-ingushetia-tfoms-rifoms
source_url: 'https://rifoms.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Официальный сайт Территориального фонда обязательного медицинского страхования Республики
  Ингушетия: отчёты о деятельности, финансово-хозяйственная информация и нормативные материалы по
  ОМС (по мере публикации).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-ingushetia-sources-overview
  - /data-sources/regional/republic-of-ingushetia-minfin-mfri
  - /data-sources/regional/republic-of-ingushetia-open-budget-mfri-downloads
  - /data-sources/regional/consolidated-budgets
---

# Республика Ингушетия: Территориальный фонд ОМС (rifoms.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Ингушетия** — **внебюджетный** (страховой) контур **ОМС** |
| Тип доступа | Публичный **корпоративный** сайт ТФОМС |
| Основные форматы | **HTML**; **PDF** и др. по ссылкам |
| Оператор | **Территориальный фонд обязательного медицинского страхования Республики Ингушетия** |
| Режим доступа | Открытый просмотр |

Коротко: **официальная** витрина **ТФОМС** с **отчётами** и документами по **страховым** финансам региона. **Консолидированный** республиканский бюджет см. **[Минфин](/data-sources/regional/republic-of-ingushetia-minfin-mfri)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**HTTP 200** для `https://rifoms.ru/`) |
| Полнота (`data_completeness`) | **частичная** — зависит от **полноты** годовых **отчётов** и разделов сайта |
| Машиночитаемость (`machine_readability`) | преимущественно **HTML**/файлы |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **регионального** фонда ОМС |
| Задержка обновления (`update_lag`) | зависит от **отчётного** цикла фонда |
| Глубина архива (`archive_depth`) | определяется **архивом** документов на сайте |
| Лицензия (`license_or_terms`) | условия **rifoms.ru** |

## Описание

Сайт **rifoms.ru** используется для раскрытия информации о **деятельности** ТФОМС и **финансово-хозяйственных** аспектах **обязательного** медицинского страхования в республике. Для **сводной** бюджетной аналитики субъекта учитывайте, что **страховые** средства **ОМС** **не** сводятся **один-к-одному** с **консолидированным** бюджетом без **методики** разграничения.

## Оператор

Территориальный фонд обязательного медицинского страхования Республики Ингушетия — https://rifoms.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Корень сайта ТФОМС | https://rifoms.ru/ | HTML |

## Объекты данных и показатели

- **Отчёты** о деятельности фонда, **нормативные** документы и **финансовые** вложения (по мере публикации).
- **Ключи связки**: **год**, показатели **страхования**; для **бюджета** республики — **[Минфин](/data-sources/regional/republic-of-ingushetia-minfin-mfri)**.

## Периодичность обновления

**Ежегодно** и по **событиям** (изменения в нормативке и отчётности).

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-rifoms-check/1.0" \
  "https://rifoms.ru/"
```

## Связанные страницы wiki

- [Минфин Ингушетии](/data-sources/regional/republic-of-ingushetia-minfin-mfri) — **консолидированный** бюджетный контур.
- [«Открытый бюджет» (загрузки)](/data-sources/regional/republic-of-ingushetia-open-budget-mfri-downloads) — **гражданская** бюджетная отчётность.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст.

## Не путать с

- **[Минфин](/data-sources/regional/republic-of-ingushetia-minfin-mfri)** — **бюджет** субъекта; **ТФОМС** — **отдельный** страховой **механизм** ОМС.
