---
title: 'Python: парсинг XML из ЕИС Закупок'
sidebar_label: 'Python: XML ЕИС (ZIP, iterparse)'
tags:
  - howto
  - automation
  - procurement
last_updated: 2026-05-14T00:00:00.000Z
content_type: howto
entity_type: howto
description: >-
  Потоковый разбор XML внутри ZIP как в массовых выгрузках ЕИС: iterparse,
  очистка дерева, разделение 44-ФЗ и 223-ФЗ; без привязки к закрытым URL СОИ.
related_pages:
  - /data-sources/federal/zakupki-xml
  - /data-sources/federal/procurement
  - /information-systems/federal/zakupki
  - /howto/analysis/eis-procurement-identifiers-decoding
  - /howto/analysis/procurement-analysis
  - /glossary/procurement-44fz
  - /glossary/procurement-223fz
---

# Python: парсинг XML из ЕИС Закупок

## Назначение и аудитория

Для **разработчиков и аналитиков**, которые собирают **собственный регистр** из массовых выгрузок **[ЕИС](/information-systems/federal/zakupki)** и не хотят держать в памяти целиком многогигабайтные XML. Здесь — **устойчивый шаблон** пайплайна: ZIP → потоковый парсинг → извлечение полей → освобождение узлов. **Конкретные имена тегов и пространства имён** в ваших файлах задаются **актуальными XSD** оператора; ниже — **учебный** XML, повторяющий идею «несколько однотипных записей в одном корне».

## Входные данные

- **Архив ZIP** из выгрузки ЕИС (один или несколько файлов `.xml` внутри) — логика описана в **[XML-выгрузках](/data-sources/federal/zakupki-xml)**; канал доставки (**СОИ**, не FTP с 01.07.2024) — в **[карточке ЕИС](/information-systems/federal/zakupki)**.
- **Список целевых типов документов** (контракт, извещение, протокол и т.д.) и **отбор 44-ФЗ / 223-ФЗ** — см. **[сведения о закупках](/data-sources/federal/procurement)** и **[идентификаторы ЕИС](/howto/analysis/eis-procurement-identifiers-decoding)**.
- **Python 3.10+** (достаточно стандартной библиотеки для примера ниже); для продакшена часто ставят **`lxml`** ради скорости и устойчивости к крупным файлам.

## Инструменты

- **`zipfile`** — чтение XML из архива без полной распаковки на диск.
- **`xml.etree.ElementTree.iterparse`** — потоковый разбор с событием `end` по завершённым элементам.
- Опционально **`lxml.etree.iterparse`** — тот же паттерн, если пакет уже в окружении.

## Шаги

1. **Откройте ZIP** и найдите нужные члены архива по суффиксу `.xml` или по соглашению выгрузки (в реальных комплектах имена и вложенность задайте по методичке СОИ).
2. **Для каждого XML** откройте поток (`ZipFile.open`) и передайте его в **`iterparse`**.
3. **На событии `end`** для выбранного тега записи (в учебном примере — `contract`) извлеките поля дочерних элементов.
4. **Вызовите `elem.clear()`** на обработанном узле, чтобы отцепить поддерево от памяти; при необходимости обнуляйте ссылки на предков (`while elem.getprevious() is not None: del elem.getparent()[0]` — классический приём для очень длинных файлов; в простых сценариях часто хватает `clear()` на записи).
5. **Склейте результат** с внешними справочниками (ИНН → ЕГРЮЛ, ОКПД2 → классификатор) уже **после** извлечения сырого слоя.

## Воспроизводимый пример

Учебный фрагмент имитирует **один XML внутри ZIP** (как в типичной поставке). Реальные схемы ЕИС используют **другие имена элементов и пространства имён** — подставьте свои теги по XSD с портала оператора.

```python
import io
import zipfile
import xml.etree.ElementTree as ET

# Учебный XML: два «контракта» в общем корне (не копия реальной схемы ЕИС).
SAMPLE_XML = b"""<?xml version="1.0" encoding="UTF-8"?>
<export>
  <contract>
    <registryNumber>00000000000000000000</registryNumber>
    <customer><inn>7700000000</inn></customer>
    <priceInfo><price>100000</price></priceInfo>
  </contract>
  <contract>
    <registryNumber>11111111111111111111</registryNumber>
    <customer><inn>7700000001</inn></customer>
    <priceInfo><price>200000</price></priceInfo>
  </contract>
</export>
"""

buf = io.BytesIO()
with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zf:
    zf.writestr("sample_contract.xml", SAMPLE_XML)
buf.seek(0)

rows = []
with zipfile.ZipFile(buf) as zf:
    with zf.open("sample_contract.xml") as fp:
        for _event, elem in ET.iterparse(fp, events=("end",)):
            if elem.tag != "contract":
                continue
            rows.append(
                {
                    "registryNumber": elem.findtext("registryNumber", default=""),
                    "customer_inn": elem.findtext("customer/inn", default=""),
                    "price": elem.findtext("priceInfo/price", default=""),
                }
            )
            elem.clear()

assert len(rows) == 2
print(rows)
```

Ожидаемый вывод (порядок строк совпадает с XML):

```text
[{'registryNumber': '00000000000000000000', 'customer_inn': '7700000000', 'price': '100000'}, {'registryNumber': '11111111111111111111', 'customer_inn': '7700000001', 'price': '200000'}]
```

## Проверка результата

- **Счётчик записей** согласуется с ожидаемым числом целевых элементов в файле (для примера выше — ровно **2**).
- **Ключи не пустые** для обязательных полей вашей модели (в учебном XML — `registryNumber`, `customer_inn`).
- На **реальной выгрузке** — выборочная сверка нескольких записей с **витриной** `zakupki.gov.ru` или с **[отчётностью по контрактам](/reporting/procurement-contract-reporting)** по смыслу показателя, без подмены построчного контура.

## Ограничения и типовые ошибки

- **СОИ и лимиты** — этот how-to **не** содержит URL и ключей СОИ; их берите только из **актуальной** документации оператора (**[ЕИС](/information-systems/federal/zakupki)**).
- **Пространства имён** — в бою теги выглядят как `{urn:...}contract`; сравнивайте `elem.tag` с полной формой или нормализуйте префиксы по XSD, иначе условие `== "contract"` никогда не сработает.
- **Смешение 44-ФЗ и 223-ФЗ** — без явного признака в данных агрегаты по «всем контрактам» искажаются (**[44-ФЗ](/glossary/procurement-44fz)**, **[223-ФЗ](/glossary/procurement-223fz)**).
- **FTP `ftp.zakupki.gov.ru`** с **01.07.2024** не является рабочим каналом — см. **[XML-выгрузки](/data-sources/federal/zakupki-xml)**.

## Связанные страницы

- **[XML-выгрузки ЕИС](/data-sources/federal/zakupki-xml)** — содержание комплектов и переход с FTP на СОИ.
- **[Сведения о закупках и контрактах](/data-sources/federal/procurement)** — объекты и отбор режимов.
- **[Анализ государственных закупок](/howto/analysis/procurement-analysis)** — маршрут аналитика вокруг ЕИС.
- **[Идентификаторы закупок и контрактов (ЕИС)](/howto/analysis/eis-procurement-identifiers-decoding)** — ключи связи в XML.
