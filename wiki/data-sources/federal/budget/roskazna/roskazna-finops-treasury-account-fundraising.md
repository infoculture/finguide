---
title: "Казначейство: привлечение средств на единый казначейский счёт (отчёты о финансовых операциях)"
sidebar_label: "Казначейство: привлечение средств на ЕКС"
description: >-
  Ветка раздела «Финансовые операции» портала Казначейства под операции
  привлечения ликвидности на ЕКС по договорам репо на организованных торгах:
  четыре страницы (главная, репо, информация об операциях, архив) созданы
  в редизайне ноября 2025, но на октябрь 2026 не содержат ни одной публикации.
  Карточка фиксирует структуру ветки и преемников для мониторинга запуска
  инструмента.
tags: [data-source, federal, budget, reporting]
last_updated: 2026-10-03
last_verified: 2026-10-03
slug: /data-sources/federal/roskazna-finops-treasury-account-fundraising
content_type: data_source
entity_type: data_source
audience_level: analyst
data_domain: budget
source_url: "https://roskazna.gov.ru/finansovye-operacii/privlechenie-sredstv-na-edinyj-kaznachejskij-schet"
data_source_kind: ui_only
jurisdiction: federal
jurisdiction_level: federal
access: open
formats: [html]
status: current
related_information_system: /information-systems/federal/roskazna-portal
data_completeness: partial
machine_readability: HTML
legal_significance: official
update_lag: "публикаций ещё не было; ветка создана 2025-11-14"
archive_depth: "пусто; снимков Wayback нет"
license_or_terms: not-explicit
relationships:
  - type: operated_by
    target: /organizations/federal-treasury
  - type: published_by
    target: /organizations/federal-treasury
related_pages:
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-finops-treasury-account-placements
  - /data-sources/federal/roskazna-finops-operating-day
  - /data-sources/federal/roskazna-datamarts
  - /data-sources/federal/roskazna-reports
  - /glossary/treasury-execution
---

# Казначейство: привлечение средств на единый казначейский счёт (отчёты о финансовых операциях)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Ветка «Привлечение средств на единый казначейский счет» раздела «Финансовые операции»: заготовка под операции покупки (продажи) ценных бумаг по договорам репо **на организованных торгах** |
| Тип доступа | Четыре HTML-страницы; **ни таблиц, ни файлов, ни Livewire-компонента списка публикаций** — контента нет |
| Основные форматы | HTML; публикаций не было |
| Оператор и публикатор | [Федеральное казначейство](/organizations/federal-treasury) |
| Режим доступа | Открытый |

Коротко: это **пустая ветка-заготовка**. Казначейство создало её в редизайне ноября 2025 года под новый инструмент — привлечение ликвидности на ЕКС через репо на организованных торгах, — но на октябрь 2026 ни одна из четырёх страниц не содержит публикаций. Карточка фиксирует структуру ветки, чтобы при появлении данных их было куда разнести; пока рабочие данные по операциям с ЕКС — на [листовых страницах размещений](/data-sources/federal/roskazna-finops-treasury-account-placements).

## Качество и верификация

Измерения трактуются по [справочнику качества источников](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | **2026-10-03.** Живые запросы всех четырёх страниц ветки (HTTP 200, корректные заголовки и хлебные крошки); анализ HTML: 0 таблиц, 0 ссылок `downloadFile`, из Livewire-компонентов только интерактивная карта. Sitemap портала подтверждает даты создания ветки (**2025-11-14**). Снимков Wayback за URL ветки нет — публикаций не было никогда. |
| Полнота (`data_completeness`) | **Публикаций нет.** Ветка полностью пуста: главная, подстраница репо, «Информация об операциях…» и «Архив…» не содержат данных. |
| Машиночитаемость (`machine_readability`) | Неприменима к данным; страницы — HTML без контента. |
| Юридическая значимость (`legal_significance`) | **Официальный раздел** оператора; нормативная база операций репо — постановления Правительства и приказы Казначейства (см. «История и контекст»). |
| Задержка обновления (`update_lag`) | Неприменима: нет ни одной публикации, от которой отсчитывать лаг. |
| Глубина архива (`archive_depth`) | Пусто; CDX Wayback по всем четырём URL — ноль снимков. |
| Лицензия (`license_or_terms`) | Не указаны. |

## Описание и границы

Ветка появилась в конце 2025 года при реорганизации раздела [«Финансовые операции»](https://roskazna.gov.ru/finansovye-operacii) (по sitemap портала `lastmod` всех страниц ветки — **2025-11-14**) и зеркально повторяет структуру веток размещения средств:

| Страница | URL (хвост после `/finansovye-operacii/`) | Состояние на 2026-10-03 |
| --- | --- | --- |
| Привлечение средств на единый казначейский счет | `privlechenie-sredstv-na-edinyj-kaznachejskij-schet` | жива, контента нет |
| …по договорам репо на организованных торгах | `…/privlechenie-sredstv-na-edinyj-kaznachejskij-schet-po-dogovoram-repo-na-organizovannyh-torgah` | жива, контента нет |
| Информация об операциях покупки (продажи) ценных бумаг по договорам репо на организованных торгах | `…/informaciya-ob-operaciyah-pokupki-prodazhi-cennyh-bumag-po-dogovoram-repo-na-organizovannyh-torgah` | жива, контента нет |
| Архив информации по итогам операций покупки (продажи) ценных бумаг… | `…/arhiv-informacii-po-itogam-operacij-pokupki-prodazhi-cennyh-bumag-po-dogovoram-repo-na-organizovannyh-torgah` | жива, контента нет |

Сюда **не входит**: размещение временно свободных средств ЕКС (депозиты, репо вне организованных торгов, ПФИ, займ ценных бумаг) — см. [карточку размещений ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements); средства Фонда пенсионного и социального страхования — отдельная ветка; государственный долг в классическом понимании (ОФЗ Минфина) — не казначейские операции с ЕКС.

## Оператор

[Федеральное казначейство](/organizations/federal-treasury) — оператор портала и будущий публикатор результатов операций.

- [Портал Федерального казначейства](/information-systems/federal/roskazna-portal) — витрина, на которой размещена ветка.

## URL и точки доступа

| Тип доступа | URL | Формат и назначение |
| --- | --- | --- |
| Ветка привлечения | https://roskazna.gov.ru/finansovye-operacii/privlechenie-sredstv-na-edinyj-kaznachejskij-schet | HTML, пусто |
| Подстраница репо | …`/privlechenie-sredstv-na-edinyj-kaznachejskij-schet-po-dogovoram-repo-na-organizovannyh-torgah` | HTML, пусто |
| Информация об операциях | …`/informaciya-ob-operaciyah-pokupki-prodazhi-cennyh-bumag-po-dogovoram-repo-na-organizovannyh-torgah` | HTML, пусто |
| Архив информации | …`/arhiv-informacii-po-itogam-operacij-pokupki-prodazhi-cennyh-bumag-po-dogovoram-repo-na-organizovannyh-torgah` | HTML, пусто |
| Технический раздел → Форматы данных | https://roskazna.gov.ru/finansovye-operacii/tekhnicheskij-razdel/formaty-dannyh | HTML; машиночитаемые спецификации для операций раздела — на октябрь 2026 по привлечению также отсутствуют |

## Объекты данных и показатели

- Ожидаемая гранулярность (по аналогии с ветками размещений): **операция × дата × параметры сделки** — суммы привлечения, ставки, сроки, контрагенты; форматы публикаций станут известны только с первым файлом.
- Ожидаемые форматы: DOCX-протоколы отбора и XML-спецификации «Форматов данных» — как у листовых страниц [размещений](/data-sources/federal/roskazna-finops-treasury-account-placements); это предположение по паттерну раздела, **не** подтверждённый контракт.
- Ключи связки после запуска: дата операции + инструмент ↔ удалённая страница [«Операционный день»](/data-sources/federal/roskazna-finops-operating-day) (агрегировала репо-операции до июня 2026) и [витрины данных](/data-sources/federal/roskazna-datamarts).

**Пробелы**: данных нет вовсе; календарь запуска инструмента публично не объявлен.

## Периодичность обновления

Неприменима: публикаций не было с момента создания ветки (ноябрь 2025) по дату проверки (октябрь 2026). При появлении данных ожидаем режим «по операционным дням» — как в ветках размещений (там дневные DOCX выходят в день отбора).

## Ограничения и особенности

- **Не стройте пайплайны на этой ветке**: она пуста 11 месяцев; мониторьте вручную или через sitemap (`lastmod` страниц изменится при наполнении).
- Различайте **привлечение** (Казначейство получает ликвидность, передавая ценные бумаги) и **размещение** (Казначейство размещает временно свободные средства): страницы-двойники есть в обеих ветках, направление определяет только заголовок и раздел.
- Репо **на организованных торгах** — не то же, что «по договорам репо не на организованных торгах» из ветки размещений: разные механизмы, контрагенты и НПА.
- «Архив информации» в URL ветки — заготовка; на октябрь 2026 архивировать нечего.
- Страницы не содержат Livewire-компонента списка публикаций (`files-list-with-month-filter`), который работает на заполненных страницах раздела, — ещё один признак того, что публикационный механизм к ветке не подключён.

## Примеры доступа

Раздел примеров не содержит рабочего примера данных — их нет. Приводим проверенный способ мониторинга появления публикаций:

```bash
# изменение lastmod в sitemap — первый сигнал о наполнении ветки
curl -sk -A "Mozilla/5.0" https://roskazna.gov.ru/sitemaps/sitemap.xml |
  grep -A1 "privlechenie-sredstv"

# и прямой контроль страниц на появление таблиц/файлов
for u in \
  "https://roskazna.gov.ru/finansovye-operacii/privlechenie-sredstv-na-edinyj-kaznachejskij-schet/privlechenie-sredstv-na-edinyj-kaznachejskij-schet-po-dogovoram-repo-na-organizovannyh-torgah/informaciya-ob-operaciyah-pokupki-prodazhi-cennyh-bumag-po-dogovoram-repo-na-organizovannyh-torgah" \
  "https://roskazna.gov.ru/finansovye-operacii/privlechenie-sredstv-na-edinyj-kaznachejskij-schet/privlechenie-sredstv-na-edinyj-kaznachejskij-schet-po-dogovoram-repo-na-organizovannyh-torgah/arhiv-informacii-po-itogam-operacij-pokupki-prodazhi-cennyh-bumag-po-dogovoram-repo-na-organizovannyh-torgah"; do
  n=$(curl -sk -A "Mozilla/5.0" "$u" | grep -c "downloadFile\|<table")
  echo "$n маркеров контента: $u"
done
```

Команды выполнены 2026-10-03: `lastmod` — 2025-11-14, маркеров контента — 0.

## Связанные страницы wiki

- [Размещение средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements) — заполненная ветка-прототип: дневные DOCX и структура листовых страниц, на которую ориентирована ветка привлечения.
- [Операционный день](/data-sources/federal/roskazna-finops-operating-day) — удалённая сводная таблица, где репо-операции были видны агрегированно; исторический контекст инструмента.
- [Витрины данных Казначейства](/data-sources/federal/roskazna-datamarts) — куда обычно попадают машиночитаемые ряды после запуска публикаций.
- [Отчёты Федерального казначейства](/data-sources/federal/roskazna-reports) — карта разделов портала.
- [Портал Федерального казначейства](/information-systems/federal/roskazna-portal) — ограничения витрины.
- [Казначейское исполнение](/glossary/treasury-execution) — предметный контекст управления [единым счётом бюджета](/glossary/unified-budget-account).

## Не путать с

- [Размещение средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements) — инвестирование остатков (депозиты, репо вне организованных торгов, ПФИ); здесь — привлечение средств на счёт.
- [Размещение средств единого счёта федерального бюджета](/data-sources/federal/roskazna-finops-federal-budget-account-placements) — параллельная ветка для счёта федерального бюджета, тоже заполненная.
- [Государственный долг](/reporting/public-debt-reporting) — обязательства Минфина; казначейское репо — инструмент управления ликвидностью, а не элемент долговой политики.

## История и контекст

Операции репо с Казначейством вне организованных торгов (через кредитные организации) ведутся с 2010-х на основании постановления Правительства РФ от 04.09.2013 № 629 и приказов Казначейства о перечне бумаг и дисконтах; результаты публикуются в ветке [размещений](/data-sources/federal/roskazna-finops-treasury-account-placements). Расширение на **организованные торги** — новый этап: ветка «Привлечение средств на единый казначейский счет» создана 2025-11-14 в рамках реорганизации раздела «Финансовые операции», и её пустота на октябрь 2026 согласуется с подготовительным статусом инструмента. Удаление сводной страницы [«Операционный день»](/data-sources/federal/roskazna-finops-operating-day) летом 2026 года лишило раздел единого агрегированного представления по операциям; при запуске привлечения публикатором, вероятно, останутся листовые протоколы и витрины.

## Сводка для машинной обработки

```yaml
primary_url: "https://roskazna.gov.ru/finansovye-operacii/privlechenie-sredstv-na-edinyj-kaznachejskij-schet"
live_status: "страницы живы (200), публикаций нет с 2025-11-14 по 2026-10-03"
pages: 4
expected_instrument: "покупка (продажа) ценных бумаг по договорам репо на организованных торгах"
formats: []          # пусто
join_keys: []        # появятся с первыми публикациями
monitoring:
  - "sitemap.xml lastmod по URL ветки"
  - "grep downloadFile|<table по страницам информации и архива"
related_live_sources:
  - "/data-sources/federal/roskazna-finops-treasury-account-placements"
  - "/data-sources/federal/roskazna-datamarts"
gotchas:
  - "ветка-заготовка: пайплайны строить нельзя"
  - "нет files-list компонента — публикационный механизм не подключён"
  - "привлечение ≠ размещение; репо на организованных торгах ≠ репо вне организованных торгов"
```

## Частые вопросы

**В: Почему в карточке нет данных о ставках и объёмах привлечения?**

**О:** Потому что источник пуст: ветка создана в ноябре 2025 года, и на 3 октября 2026 ни одна из её четырёх страниц не содержит ни таблиц, ни файлов. Операции репо на организованных торгах ещё не запущены публично либо их результаты не публикуются здесь.

**В: Как узнать, что данные появились?**

**О:** Следите за `lastmod` URL ветки в `sitemap.xml` и за появлением таблиц/ссылок `downloadFile` на страницах «Информация об операциях…» и «Архив…» (готовый скрипт в разделе примеров). После первых публикаций сверьте форматы с веткой размещений и дополните карточку.

**В: Где посмотреть уже идущие операции Казначейства на денежном рынке?**

**О:** В ветке [размещения средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements): депозиты, репо вне организованных торгов, ПФИ, займ ценных бумаг — там публикуются дневные протоколы. Исторические агрегаты по репо была в удалённой странице «Операционный день».

**В: Чем «привлечение на ЕКС» отличается от государственного долга?**

**О:** Это управление ликвидностью единого счёта: краткосрочные операции под залог ценных бумаг, а не заимствования в счёт покрытия дефицита. Долговые обязательства РФ — контур Минфина, см. [отчётность по госдолгу](/reporting/public-debt-reporting).
