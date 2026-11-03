"""BIFF8 -> tidy facts. Blank and x remain missing; Decimal preserves kopecks.

Rows retain source coordinates. Matrix, component and national copies are
alternative representations: never sum the entire output without filtering.
"""
import argparse
import csv
from datetime import datetime
from decimal import Decimal, InvalidOperation, ROUND_HALF_UP
import json
from pathlib import Path
import re

import xlrd

from collect import ROOT

KFO = ('2', '4', '5', '6', '7')
ACTIVITIES = ('target_funds', 'state_assignment', 'own_income', 'total')
EXECUTION = ('executed_treasury_accounts_rub', 'executed_bank_accounts_rub',
             'executed_cash_rub', 'executed_noncash_rub', 'executed_total_rub')


def code(value, width=None):
    text = str(value).strip()
    if not text or text.lower() in ('x', 'х'):
        return None
    if not re.fullmatch(r'\d+(?:\.0+)?', text):
        if width is None and re.fullmatch(r'[0-9][0-9A-ZА-Я]{2}', text):
            return text
        raise ValueError(f'Not an integer code: {value!r}')
    text = text.split('.')[0]
    return text.zfill(width) if width else text


def money(value):
    if value is None or str(value).strip().lower() in ('', 'x', 'х'):
        return None
    text = re.sub(r'[\s\u00a0\u202f]', '', str(value)).replace(',', '.')
    amount = Decimal(text)
    if not amount.is_finite():
        raise ValueError(f'Non-finite money: {value!r}')
    return amount.quantize(Decimal('.01'), rounding=ROUND_HALF_UP)


def get(sheet, row, col):
    return sheet.cell_value(row, col) if row < sheet.nrows and col < sheet.ncols else ''


def classify(member):
    name = member.split('!')[-1]
    if name.startswith('0503737-4_'):
        return 'legacy_2014_0503737_kfo'
    if 'свод сводов' in member or re.match(r'\d{2}_FO_',name):
        return 'rf_0503737_matrix' if name.startswith('00_') else 'subject_0503737_matrix'
    form = next((x for x in ('0503737', '0503721', '0503730') if x in name), None)
    if not form:
        raise ValueError(f'Unknown form: {member}')
    scope = 'rf' if member.count('!')==1 else 'subject'
    return f'{scope}_{form}' + ('_kfo' if form == '0503737' else '') + ('_2018' if member.startswith('FO_01.01.2019.zip!') else '')


def metadata(book, member):
    form = next(x for x in ('0503737', '0503721', '0503730') if x in member or x in book.sheet_names())
    matrix = classify(member).endswith('_matrix')
    legacy = member.split('!')[-1].startswith('0503737-4_')
    old2018 = member.startswith('FO_01.01.2019.zip!')
    sheet = book.sheet_by_name('1' if matrix or legacy or (form=='0503730' and old2018) else 'стр.1_4' if form == '0503730' else form)
    match = re.search(r'(\d{2}\.\d{2}\.\d{4})', member)
    if not match:
        raise ValueError(f'No report date: {member}')
    date = datetime.strptime(match[1], '%d.%m.%Y').date().isoformat()
    if matrix:
        months={'января':1,'апреля':4,'июля':7,'октября':10}
        header_match=re.search(r'(\d{1,2})\s+(января|апреля|июля|октября)\s+(\d{4})',str(get(sheet,3,0)))
        if not header_match:
            raise ValueError(f'Unrecognized matrix report date: {member}')
        header_date=datetime(int(header_match[3]),months[header_match[2]],int(header_match[1])).date().isoformat()
    else:
        date_cell = get(sheet,3,11) if legacy else get(sheet,2,9 if old2018 else 8) if form=='0503721' else get(sheet,3,10 if old2018 and form=='0503730' else 9)
        header_date=datetime.strptime(str(date_cell).strip(),'%d.%m.%Y').date().isoformat()
    if header_date!=date:
        raise ValueError(f'Filename/header report dates disagree: {member}: {date} != {header_date}')
    prefix = re.match(r'^(\d{2})_', member.split('!')[-1])
    region = prefix[1] if prefix else ('00' if member.count('!')==1 else None)
    kfo = re.search(r'КФО\s*([24567])', member)
    shared = dict(layout_id='legacy_2014' if legacy else 'matrix' if matrix else f'standard_2018_{form}' if old2018 else 'standard',
                  region_code_system='legacy_2014_header_code' if legacy else 'treasury_2digit', legacy_header_code=None)
    if legacy:
        activity = str(get(sheet,9,3)).lower()
        observed_labels = {'2':'приносящая доход', '4':'выполнение государственного',
                           '5':'иные цели', '6':'бюджетные инвестиции', '7':'медицинскому страхованию'}
        parsed_kfo = next((k for k,label in observed_labels.items() if label in activity), None)
        if parsed_kfo is None:
            raise ValueError(f'Unknown historical KFO label: {activity}')
        shared['legacy_header_code'] = str(get(sheet,4,11)).strip()
        national = '/Свод_ФО_' in member
        return dict(**shared, report_date=date, form_code=form,
                    region_code='00' if national else code(get(sheet,4,11),2),
                    region_name=None if national else str(get(sheet,7,3)).strip(),
                    institution_name=get(sheet,5,3), okpo=None, oktmo=code(get(sheet,6,11)), kfo=parsed_kfo)
    if matrix:
        header = str(get(sheet, 7, 1))
        region_match = re.match(r'\s*(\d{2})\s*(.*)', header)
        if region_match:
            if region and region != region_match[1]:
                raise ValueError(f'Conflicting region prefix/header: {member}')
            region = region_match[1]
        return dict(**shared, report_date=date, form_code=form, region_code=region,
                    region_name=(region_match[2].strip() or None) if region_match else header.strip() or None,
                    institution_name=None, okpo=None, oktmo=None, kfo=None)
    if form == '0503737':
        inst, okpo, oktmo = get(sheet, 4, 1), get(sheet, 4, 9), get(sheet, 6, 9)
        if not kfo:
            activity = str(get(sheet,9,1)).lower()
            labels = {'2':'приносящая доход','4':'выполнение государственного','5':'иные цели','6':'капитальных вложений','7':'медицинскому страхованию'}
            inferred_kfo = next((k for k,label in labels.items() if label in activity),None)
        else:
            inferred_kfo = kfo[1]
    elif form == '0503721':
        inst, okpo, oktmo = (get(sheet, 3, 3), get(sheet, 3, 9), get(sheet, 6, 9)) if old2018 else (get(sheet, 3, 1), get(sheet, 3, 8), get(sheet, 6, 8))
    else:
        inst, okpo, oktmo = (get(sheet, 5, 2), get(sheet, 5, 10), get(sheet, 8, 10)) if old2018 else (get(sheet, 5, 1), get(sheet, 5, 9), get(sheet, 8, 9))
    return dict(**shared, report_date=date, form_code=form, region_code=region, region_name=None,
                institution_name=inst or None, okpo=code(okpo, 8), oktmo=code(oktmo, 8),
                kfo=inferred_kfo if form=='0503737' else None)


def rows(book, member):
    """Yield source rows with a per-section physical column map, not a fixed skiprows."""
    meta = metadata(book, member)
    matrix = classify(member).endswith('_matrix')
    legacy = meta['layout_id'] == 'legacy_2014'
    old2018 = meta['layout_id'].startswith('standard_2018')
    form = meta['form_code']
    for sheet in book.sheets():
        if sheet.name == 'XDO_METADATA' or sheet.visibility:
            continue
        section = None
        account = None
        for r in range(sheet.nrows):
            a = str(get(sheet, r, 0))
            if form == '0503737':
                m = re.match(r'^\s*([1-4])\.\s', a)
                if m:
                    section = m[1]
                if legacy:
                    label = ' '.join(str(get(sheet,r,c)) for c in range(3) if get(sheet,r,c) != '')
                    if not isinstance(get(sheet,r,0),str):
                        continue
                    line, analytical = get(sheet,r,3), get(sheet,r,4)
                else:
                    label, line, analytical = get(sheet, r, 0), get(sheet, r, 1), get(sheet, r, 2)
                name_col, line_col, analytics_col = 0, 1, 2
            elif form == '0503721':
                section = 'financial_results'
                line_col, analytics_col = (4,5) if old2018 else (3,4)
                label, line, analytical = get(sheet,r,0),get(sheet,r,line_col),get(sheet,r,analytics_col)
                name_col = 0
            elif sheet.name in ('стр.5_7','2'):
                section = 'off_balance'
                label, line, analytical = get(sheet, r, 1), get(sheet, r, 2), ''
                name_col, line_col, analytics_col = 1, 2, None
            else:
                if re.match(r'^\s*(?:I|II|III|IV)\.\s', a):
                    section = a.strip()
                line_col = 2 if old2018 else 1
                label, line, analytical = get(sheet,r,0),get(sheet,r,line_col),''
                name_col, analytics_col = 0, None
            # A real label is text. This excludes numeric column-number rows.
            if not isinstance(label, str) or not label.strip():
                continue
            lc = str(line).strip()
            ac = str(analytical).strip()
            if not (re.fullmatch(r'\d{3}(?:\.0+)?', lc) or
                    re.fullmatch(r'(?:\d{3}(?:\.0+)?|[0-9][0-9A-ZА-Я]{2})', ac)):
                continue
            if form == '0503737' and not section:
                raise ValueError(f'Data before a section heading: {member}:{r+1}')
            result = dict(**meta, source_member=member, sheet=sheet.name, source_row=r+1,
                          section=section, indicator_name=re.sub(r'\s+', ' ', label).strip(),
                          line_code=code(line, 3), analytics_code=code(analytical),
                          line_code_raw=line, analytics_code_raw=analytical,
                          is_total=bool(re.search(r'всего|стр\.|итого', label, re.I) or
                                        ac.lower() in ('x', 'х')),
                          total_marker=ac.lower() if ac.lower() in ('x', 'х') else None,
                          off_balance_account_raw=None, parent_off_balance_account=None,
                          measures={}, source_columns={})
            if form == '0503737':
                if legacy:
                    mapping = [(c,n) for c,n in enumerate(EXECUTION,6)]
                    mapping += [(5,'approved_plan_rub'),(11,'unfulfilled_plan_rub')]
                elif matrix:
                    start = 3 if section == '4' else 4
                    mapping = [(c, f'executed_kfo_{k}_rub') for c, k in enumerate(KFO, start)]
                    mapping += [(start+5, 'executed_total_rub')]
                    if section != '4':
                        mapping += [(3, 'approved_plan_rub')]
                else:
                    start = 3 if section == '4' else 4
                    mapping = [(c, n) for c, n in enumerate(EXECUTION, start)]
                    if section != '4':
                        mapping += [(3, 'approved_plan_rub'), (9, 'unfulfilled_plan_rub' if old2018 else 'deviation_rub')]
            elif form == '0503721':
                mapping = [(c, f'financial_result_{activity}_rub') for c, activity in enumerate(ACTIVITIES, 6 if old2018 else 5)]
            else:
                off = sheet.name in ('стр.5_7','2')
                start = 3 if off or old2018 else 2
                mapping = [(start + period_index*4 + activity_index, f'{period}_{activity}_rub')
                           for period_index, period in enumerate(('opening', 'closing'))
                           for activity_index, activity in enumerate(ACTIVITIES)]
                if off:
                    raw_account = get(sheet, r, 0)
                    if raw_account != '':
                        account = code(raw_account, 2)
                    result['off_balance_account_raw'] = raw_account
                    result['parent_off_balance_account'] = account
            for c, field in mapping:
                result['measures'][field] = money(get(sheet, r, c))
                result['source_columns'][field] = xlrd.colname(c)
            yield result


def tidy(row):
    base = {k: v for k, v in row.items() if k not in ('measures', 'source_columns', 'kfo')}
    for name, value in row['measures'].items():
        kfo = re.search(r'^executed_kfo_([24567])_rub$', name)
        activity = next((x for x in ACTIVITIES if f'_{x}_rub' in name), None)
        period = name.split('_')[0] if name.startswith(('opening_', 'closing_')) else 'reporting'
        yield dict(**base, representation=classify(row['source_member']),
                   kfo=kfo[1] if kfo else row['kfo'], activity_group=activity,
                   value_period=period, measure='executed_total_rub' if kfo else name,
                   amount_rub=str(value) if value is not None else None,
                   cell_state='blank_or_not_applicable' if value is None else 'value',
                   source_col=row['source_columns'][name])


def main():
    from references import region_indexes, resolve
    p = argparse.ArgumentParser()
    p.add_argument('--package', help='Exact outer archive filename; defaults to all downloaded')
    p.add_argument('--output', default='results/tidy.csv')
    args = p.parse_args()
    inventory = json.loads((ROOT / 'results/members.json').read_text())
    observations = json.loads((ROOT/'results/region-observations.json').read_text())
    names, identifiers = region_indexes(observations)
    output = ROOT / args.output
    count = files = 0
    with output.open('w', encoding='utf-8', newline='') as f:
        writer = None
        for item in inventory:
            if item['kind'] != 'xls' or (args.package and not item['member'].startswith(args.package+'!')):
                continue
            book = xlrd.open_workbook(ROOT / item['local_path'])
            for row in rows(book, item['member']):
                row = resolve(row,names,identifiers)
                for fact in tidy(row):
                    if writer is None:
                        writer = csv.DictWriter(f, fieldnames=list(fact))
                        writer.writeheader()
                    writer.writerow(fact)
                    count += 1
            files += 1
    print(json.dumps(dict(files=files, tidy_facts=count, output=str(output))))


if __name__ == '__main__':
    main()
