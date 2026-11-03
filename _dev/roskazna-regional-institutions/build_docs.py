"""Render four drop-in wiki sections and the research report from saved evidence."""
import argparse
from collections import Counter
import csv
import json
import re

import yaml

from collect import ROOT, CATALOG
from build_dictionary import load

REPO='https://github.com/infoculture/finguide/blob/main/_dev/roskazna-regional-institutions/'
TITLES={
 'rf_0503737_matrix':'A. Итог РФ: матрица КФО 0503737',
 'subject_0503737_matrix':'B. Территориальный свод: матрица КФО 0503737',
 'rf_0503737_kfo':'C. Итог РФ: 0503737 для одного КФО',
 'subject_0503737_kfo':'F. Территориальный файл 0503737 для одного КФО',
 'rf_0503721':'D. Финансовые результаты 0503721: итог РФ',
 'subject_0503721':'D. Финансовые результаты 0503721: территория',
 'rf_0503730':'E. Баланс 0503730: итог РФ',
 'subject_0503730':'E. Баланс 0503730: территория',
 'legacy_2014_0503737_kfo':'G. Исторический макет 0503737 на 01.07.2014',
}


def esc(value):
    return str(value).replace('|','\\|').replace('\n',' ').strip()


def table(headers,rows):
    return '\n'.join(['| '+' | '.join(headers)+' |','| '+' | '.join('---' for _ in headers)+' |']+
                     ['| '+' | '.join(esc(v) for v in row)+' |' for row in rows])+'\n'


def title(kind):
    return TITLES[kind[:-5]]+' — макет годового пакета за 2018 год' if kind.endswith('_2018') else TITLES[kind]


def render_catalog(dictionary):
    catalog=json.loads((ROOT/'catalog.json').read_text())
    text='## Каталог опубликованных файлов\n\n'
    text+='Проверено **2026-11-03**: 12 HTML-снимков, 22 строки публикаций, 21 уникальное вложение. Годовой файл на 01.01.2026 виден при `filter_year=2025` и `2026`; это одна копия, а не два среза. Размеры пяти скачанных пакетов измерены по телу ответа, остальных 16 вложений — по `Content-Length` ответа HEAD. Структура последних не проверена.\n\n'
    text+=table(['Год фильтра','Тип','Срез / заголовок','Опубликовано','Вложение','Байт'],[
        [x['filter_year'],'годовой' if x['kind']=='annual' else 'квартальный',x['title'],x['publication_date_text'],
         f'[{x["attachment"]}]({x["url"]})',x.get('size_bytes','не установлено')] for x in catalog])
    text+='\nСсылку следует извлекать из карточки публикации: старые файлы находятся под `/uploads/migrate/...`, новые — под `/storage/page-files/21117/`. В URL каталога сохранено каноническое `subuektov`. В выбранных годах наблюдается одно 7z-вложение (октябрь 2025); в 2014 году видны только июль и октябрь, опубликованные 06.02.2015.\n\n'
    text+=table(['Скачанный пакет','Размер, байт','SHA-256'],[[x['local_file'],x['size_bytes'],f'`{x["sha256"]}`']for x in dictionary['source']['packages']])
    return text+'\nДата доступа, точный URL и статус TLS сохранены в [манифесте](%sdownloads.json). SHA-256 и CRC проверяют копию и целостность; в исследовательской среде цепочка TLS не прошла проверку, загрузки выполнены с явным `--insecure`.\n' % REPO


def render_structure(dictionary):
    text='## Структура файлов и словарь данных\n\n'
    text+='Проверены **5 пакетов, 2 888 XLS, 15 вариантов «макет × охват»**. Полная карта ячеек, объединений и колонок, примеры со ссылками на исходные ячейки, 92 актуальных кода территорий и 494 датированных варианта строк формы находятся в [data-dictionary.yaml](%sdata-dictionary.yaml). Полный перечень членов архивов — [members.json](%sresults/members.json), размеры и служебные строки каждой книги — [profiles.json](%sresults/profiles.json). Названия территорий ниже воспроизводят шапки файлов.\n\n' % (REPO,REPO,REPO)
    text+='Годовой ZIP на 01.01.2026 содержит 15 непосредственных членов: 8 ZIP и 7 XLS; квартальный на 01.07.2026 — 11: 6 ZIP и 5 XLS. В каждом внутреннем «своде сводов» этих двух пакетов — 92 XLS. **91 территориальный файл включает федеральную территорию «Сириус» (81) и город Байконур (96)**; число файлов нельзя называть числом субъектов РФ без этой оговорки. Свидетели: `ФО свод сводов ф. 0503737 на 01.07.2026.zip!81_FO_01.07.26.XLS` и `…!96_FO_01.07.26.XLS`; проверены все 92 шапки каждого пакета.\n\n'
    text+='Матрица «свода сводов» и файл одного КФО имеют разные колонки. Название листа `1` также встречается в историческом макете и само по себе не определяет тип. Путь архива обязателен: одинаковые имена территориальных XLS повторяются в ZIP разных КФО.\n\n'
    text+='### Состав территориальных файлов по КФО\n\n'
    comp=load('qa-composition.json')
    text+=table(['Пакет','КФО','Файлов территорий','Отсутствуют относительно матрицы'],[
        [x['package'],x['kfo'],x['component_subjects'],', '.join(x['missing_from_components']) or 'нет' if x['matrix_subjects'] is not None else 'матрица в пакете отсутствует'] for x in comp])
    text+='\nЧисло 89/88 относится к КФО 4 в двух пакетах 2026 года. ЛНР и Херсонская область присутствуют в КФО 2/5/7; их отсутствие нельзя распространять на все КФО. Отсутствующий файл не превращается в нулевой ряд автоматически.\n\n'
    for typ in dictionary['file_types']:
        if typ.get('format')=='text':
            text+='### H. Текстовый протокол выгрузки\n\n'
            text+=f'**Наблюдалось однократно, 1 файл**: `{typ["witness"]}`. `ProtocolFO.txt` — CP1251 с CRLF; это не кодировка CP866 имён ZIP. Внутри поля «Дата» (30.04.2019), «Оператор», «Периодичность» (Годовая), «Период» (2018), «Форма» (0503737) и число выгруженных отчётов 87. Оно совпало с числом XLS в этом вложенном ZIP. Дата протокола не является датой среза или публикации. Знак перед `87` — маркер списка. Сообщение об отсутствующих отчётах не сопровождается перечнем идентификаторов и не доказывает полноту. Проверенный разбор: `protocol.py`.\n\n'
            continue
        text+='### '+title(typ['id'])+'\n\n'
        text+=f'**Проверено на {typ["checked_files"]} файлах**; даты срезов: '+', '.join(typ['observed_report_dates'])+'. Свидетель: `'+typ['witness']+'`.\n\n'
        sheetrows=[]
        for s in typ['sheets']:
            variants=s['shape_variants']
            fmt=sorted(set(f'{v["formatted_rows"]}×{v["formatted_cols"]}' for v in variants))
            values=sorted(set(f'{v["value_rows"]}×{v["value_cols"]}' for v in variants))
            sheetrows.append([s['name'],'скрытый, XDO' if s['hidden'] else 'данные',', '.join(fmt),', '.join(values),s['data_start_row'] or '—'])
        text+=table(['Лист','Назначение','Размер с форматированием','Размер без пустого форматирования','Начало данных в свидетеле'],sheetrows)
        text+='\n`xlrd(..., formatting_info=True)` учитывает оформленные пустые хвосты, вплоть до IV; это не дополнительные показатели. Номера строк ниже — Excel, с единицы. Для изменяющихся размеров точные частоты и свидетели приведены в YAML.\n\n'
        for s in typ['sheets']:
            if s['hidden']:
                continue
            text+='**Шапка листа `'+s['name']+'` в свидетеле.**\n\n'
            text+=table(['Строка','Непустые ячейки'],[[k.removeprefix('row_'),'; '.join(f'{c}: {v}' for c,v in cells.items())or'пусто']for k,cells in s['header_map'].items()])
            merges=s['merged_ranges_0based_half_open']
            text+='\nОбъединений в листе: '+str(len(merges))+'. Полные диапазоны — в YAML (`[row_start, row_end, col_start, col_end]`, индексы с нуля, конец исключён). Чтение объединений не означает заполнения всех пустых кодов предыдущим значением.\n\n'
            for layout in s['layouts']:
                text+='**Колонки: '+('раздел '+layout['section'] if layout['section']!='all' else 'основная таблица')+'.**\n\n'
                text+=table(['Колонка','Поле','Тип','Значение / реальный пример'],[
                    [x['col'],f'`{x["name"]}`',x['type']+' / null' if x['nullable'] else x['type'],x['description']+' Пример: '+('пусто' if x['example']is None else f'`{x["example"]}`')]
                    for x in layout['columns']])
            service=s['service_rows_in_witness']
            text+='\nСтроки с номерами колонок в свидетеле: '+', '.join(map(str,service['column_number_rows']))+'. Маркеры страниц: '+(', '.join(map(str,service['page_marker_rows']))or'не наблюдались')+'. Их и повторные шапки пропускают по содержимому, а не фиксированному числу строк. Подписи и оформленные пустые строки после последней строки данных также не являются данными.\n\n'
            if s.get('non_data_columns'):
                text+='Вспомогательные непустые колонки вне карты данных: '+', '.join('`'+x['col']+'`' for x in s['non_data_columns'])+'; примеры и координаты приведены в YAML.\n\n'
    text+='### Разделы 0503737, коды и итоги\n\n'
    text+='В макетах 2018/2025/2026 годов наблюдаются разделы 1–4; в 402 файлах среза на 01.07.2014 — разделы 1–3. Свидетели и точные строки переходов перечислены в `sheets[].service_rows_in_witness.section_heading_rows` словаря.\n\n'
    text+=table(['Раздел','Ключи и иерархия','Обращение с суммами'],[
        ['1. Доходы','010 — общий итог; 030/040/050/060/090/100 — статьи; 090 имеет детализацию 092–096 в современном макете. Аналитика 120 — доходы от собственности, 130 — платные услуги/компенсации, 400 — операции с активами.','План и исполнение по карте разделов 1–3.'],
        ['2. Расходы','Код строки 200 — итог; у детализации B физически пусто, а аналитика содержит 100/110/111…; 450 — результат исполнения. Аналитика 400 здесь означает капитальные вложения.','Пустой B не является признаком служебной строки. Сохранять детали, не складывать итог с его дочерними статьями.'],
        ['3. Источники','500/520/590/591/592/620/700…; 620 встречается с пустой аналитикой и с аналитикой 620. Код строки без раздела и аналитики не уникален.','Знаки (+)/(−) напечатаны в наименованиях; суммы сохраняют знак.'],
        ['4. Возвраты','910 / аналитика 610 и 950 / аналитика 510.','В матрице D–H = пять КФО, I = итог; в файле одного КФО D–G = способы, H = итог. Плана и отклонения нет.']])
    text+='\nЭта карта проверена по всем 359 территориальным матрицам, 4 итогам РФ, 1 745 территориальным файлам КФО макетов 2018/2025/2026 и 20 итогам РФ по КФО; полный датированный перечень наименований и аналитик — в YAML. Уровень иерархии выводится только из напечатанных формул; где связи не установлены, `hierarchy_level: null`. Это производная разметка, а не нормативный классификатор.\n\n'
    text+='Отдельные `x` (латиница) и `х` (кириллица) — маркеры неприменимости кода/поля. Нормализованное значение — null, исходное сохраняется. Строки с ними остаются в данных. В 0503721 встречаются коды `29T`, `41Х` и другие буквенные аналитики: встроенную букву нельзя превращать в маркер null. Значения `120.0` нормализуются в `120`, код строки `10.0` — в `010`. Ведущие нули ОКПО сохраняются.\n\n'
    text+='Все наблюдаемые денежные карты выражены в рублях; в стандартных шапках указан ОКЕИ 383. В матрицах напечатано «руб.», отдельного поля ОКЕИ нет. Числа встречаются как BIFF numeric и как строки с NBSP и десятичной запятой. Пусто и явный 0 различаются; отрицательные суммы сохраняются. Группы деятельности 0503721/0503730 не переименовываются в отдельные КФО.\n\n'
    text+='### Справочник территорий и проверка чисел\n\n'
    text+='[regions.csv](%sregions.csv) содержит 92 кода последнего проверенного среза; [regions-history.csv](%sregions-history.csv) — 807 датированных сочетаний названия и идентификаторов со всеми файлами-свидетелями. В матрице название и код находятся в B8; ОКПО и ОКТМО там отсутствуют и присоединены из покомпонентных шапок. В 2014 поле, подписанное «по ОКПО», содержит `01`/…/`9500`: его нельзя считать ОКПО организации; сохранено отдельным `legacy_header_code`.\n\n' % (REPO,REPO)
    current=load('regions-current.json')
    text+=table(['Код','Название из шапки','ОКПО составителя','ОКТМО из шапки','Проверено файлов, 01.07.2026'],[
        [r['code'],r['name'],', '.join(r['okpo']),', '.join(r['oktmo']),r['checked_files']] for r in current if r['code']in('83','84','87','97')])
    text+='\n177 балансов без кода в имени сопоставлены по уникальному ОКПО на ту же дату; ОКТМО сохранён независимо для сравнения. Перечень и источник каждого сопоставления — [region-observations-resolved.json](%sresults/region-observations-resolved.json). Неразрешённых сопоставлений и конфликтов ОКПО/ОКТМО внутри одной даты и кода в этой выборке нет. Это не проверка актуальности регистрационных реквизитов во внешнем реестре.\n\n' % REPO
    text+='На 01.01.2026 сумма 91 территориального файла по строке 010 совпала с `00_FO_01.01.26.XLS`: план **14 694 007 865 335,89**, исполнение **14 319 121 716 683,36 руб.** Пять КФО дают тот же итог; каждое значение совпало с отдельным сводом по РФ для своего КФО. На 01.07.2026 исполнение строки 010: **7 423 711 544 135,95 руб.**, расхождение с суммой территорий — **0,00**. Свидетели и суммы для контрольных строк 010/200/450/500/910/950 — [qa-cross-sums.json](%sresults/qa-cross-sums.json).\n' % REPO
    return text


ACCESS='''## Примеры доступа

Следующий пример проверен на скачанном годовом пакете 2026-11-03 (Python 3.12.8, xlrd 2.0.2). Используется явный исследовательский обход ошибки цепочки TLS этой среды; при рабочей цепочке исключите `--insecure`.

```bash
curl --http1.1 --insecure --fail --location -A "Mozilla/5.0" \\
  --output annual.zip \\
  "https://roskazna.gov.ru/storage/page-files/21117/%D0%A4%D0%9E_01.01.2026.zip"
```

```python
from decimal import Decimal
from io import BytesIO
import hashlib
import zipfile
import xlrd

def decoded(info):
    return (info.filename if info.flag_bits & 0x800 else
            info.filename.encode("cp437").decode("cp866"))

payload = open("annual.zip", "rb").read()
assert hashlib.sha256(payload).hexdigest() == (
    "0f1283a5f4b75fe71f25b0f8b8a3183c6e6775cc5fe93cd417d842488c38e7bf"
)
with zipfile.ZipFile(BytesIO(payload)) as outer:
    assert outer.testzip() is None
    member = next(i for i in outer.infolist()
                  if decoded(i).startswith("ФО свод сводов"))
    with zipfile.ZipFile(BytesIO(outer.read(member))) as inner:
        assert inner.testzip() is None
        rf = next(i for i in inner.infolist() if decoded(i).startswith("00_"))
        book = xlrd.open_workbook(file_contents=inner.read(rf))
sheet = book.sheet_by_name("1")
for r in range(sheet.nrows):
    if str(sheet.cell_value(r, 1)).strip() == "010":
        assert Decimal(str(sheet.cell_value(r, 9))) == Decimal("14319121716683.36")
        print(sheet.row_values(r)[:10])
```

Полный проверенный комплект [скриптов исследования](REPOREADME.md) включает загрузку по фактическим URL каталога, 7z/двойной ZIP, восстановление имён, все 15 вариантов XLS, нормализацию кодов и Decimal, сопоставление территорий, длинную таблицу и QA:

```bash
cd _dev/roskazna-regional-institutions
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python collect.py --insecure --catalog --samples --sizes
.venv/bin/python unpack.py
.venv/bin/python research.py
.venv/bin/python references.py
.venv/bin/python parse.py
.venv/bin/python qa.py --strict
.venv/bin/python test_parser.py -v
```

Для 7z необходим `7zz` (проверена версия 26.05). `parse.py` создаёт CSV с 1 962 763 фактами для данной выборки; это все альтернативные представления. Перед суммированием обязательно фильтруйте `representation`, территорию/итог РФ, КФО/группу деятельности, раздел и период. Общий план матрицы имеет `kfo=null` и не копируется в каждый КФО.
'''


MACHINE='''## Сводка для машинной обработки

```yaml
primary_url: "CATALOG"
verified_at: 2026-11-03
catalog_query: "?filter_type={53|54}&filter_year={yyyy}"
attachment_url: "из downloadFile в HTML; storage/page-files и uploads/migrate"
checked_packages: 5
checked_xls: 2888
layout_and_scope_variants: 15
formats: [html, zip, 7z, xls]
xls_reader: "xlrd 2.0.2; BIFF8 (biff_version=80)"
zip_member_names: "UTF-8 при флаге 0x800; иначе CP437 -> CP866 в проверенных ZIP"
hidden_sheet: "XDO_METADATA; порядок листов меняется"
header_and_columns: "data-dictionary.yaml; карта зависит от макета, листа и раздела"
money: "Decimal, рубли, 2 знака; строки NBSP/запятая и numeric; null != 0"
line_code: "3 цифры или null; blank B не исключает строку"
analytics_code: "числовой либо буквенно-цифровой; сохранять 29T/41Х, удалять только .0"
region_code: "ведомственный код территории; 00 итог, 81 Сириус, 96 Байконур"
prefixless_balance: "уникальный ОКПО на ту же дату; сохранять источник сопоставления"
section_4_matrix: "D:H КФО, I итог; плана нет"
section_4_component: "D:G способы возврата, H итог; плана нет"
physical_key: [source_member, sheet, source_row, source_col]
aggregation_filters: [representation, region_code, kfo, activity_group, section, value_period]
qa_command: "python qa.py --strict"
cross_sum_checks: 471
cross_sum_result: "461 совпадение; 10 неприменимых/пустых; ненулевых расхождений нет"
historical_scope: "01.07.2014 и 01.01.2019 вскрыты; другие ранние срезы требуют проверки"
```
'''


def main():
    parser=argparse.ArgumentParser();parser.add_argument('--apply-wiki',action='store_true');args=parser.parse_args()
    dictionary=yaml.safe_load((ROOT/'data-dictionary.yaml').read_text())
    # Runtime versions come from the actual scanner rather than the template text.
    access=ACCESS.replace('REPO',REPO).replace('Python 3.12.8','Python '+load('coverage.json')['libraries']['python'])
    sections=[render_catalog(dictionary),render_structure(dictionary),access,MACHINE.replace('CATALOG',CATALOG)]
    (ROOT/'wiki-fragments.md').write_text('\n\n'.join(sections)+'\n')
    if args.apply_wiki:
        wiki=ROOT.parents[1]/'wiki/data-sources/federal/budget/roskazna/roskazna-regional-institutions-execution-summary.md'
        text=wiki.read_text()
        for section in sections:
            heading=section.splitlines()[0]
            pattern=r'^'+re.escape(heading)+r'\n.*?(?=^## |\Z)'
            text,n=re.subn(pattern,lambda m:section.rstrip()+'\n\n',text,flags=re.M|re.S)
            assert n==1,(heading,n)
        text=text.replace('last_updated: 2026-10-02','last_updated: 2026-11-03').replace('last_verified: 2026-10-02','last_verified: 2026-11-03')
        wiki.write_text(text)
    print('Four wiki fragments written'+('; applied to existing sections' if args.apply_wiki else ''))


if __name__=='__main__':
    main()
