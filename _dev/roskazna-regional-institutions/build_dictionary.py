"""Materialize dictionary from observed profiles and source cells, not guessed examples."""
from collections import Counter, defaultdict
import json
import re

import xlrd
import yaml

from collect import ROOT, CATALOG
from parse import classify, rows, KFO, ACTIVITIES, EXECUTION
from protocol import parse_protocol


def load(name):
    return json.loads((ROOT/'results'/name).read_text())


DESCRIPTIONS = {
    'indicator_name':'Наименование показателя; переносы и последовательности пробелов свёрнуты в один пробел.',
    'line_code':'Код строки формы; пустая ячейка остаётся null, в частности у детализации расходов 0503737.',
    'analytics_code':'Код аналитики; смысл зависит от формы и раздела. Числовые .0 удаляются, буквенные символы сохраняются.',
    'off_balance_account_raw':'Номер забалансового счёта из исходной ячейки; пусто у некоторых дочерних показателей.',
    'approved_plan_rub':'Утверждено плановых назначений, рубли.',
    'deviation_rub':'Сумма отклонения, как названа в проверенной шапке. Знак и пустые значения сохраняются.',
    'unfulfilled_plan_rub':'Не исполнено плановых назначений: историческое название поля. Не подменять современной семантикой отклонения.',
    'executed_treasury_accounts_rub':'Исполнено через лицевые счета; в разделе 4 — произведено возвратов тем же способом.',
    'executed_bank_accounts_rub':'Исполнено через банковские счета; в разделе 4 — произведено возвратов.',
    'executed_cash_rub':'Исполнено через кассу учреждения; в разделе 4 — произведено возвратов.',
    'executed_noncash_rub':'Исполнено некассовыми операциями; в разделе 4 — произведено возвратов.',
    'executed_total_rub':'Итого исполнено; в разделе 4 — итого возвратов. В матрице — сумма пяти КФО.',
}
KFO_NAMES={'2':'собственные доходы учреждения','4':'субсидия на выполнение государственного (муниципального) задания',
           '5':'субсидии на иные цели','6':'субсидии на цели осуществления капитальных вложений',
           '7':'средства по обязательному медицинскому страхованию'}
ACTIVITY_NAMES={'target_funds':'деятельность с целевыми средствами','state_assignment':'деятельность по государственному заданию',
                'own_income':'приносящая доход деятельность','total':'итого'}


def description(name):
    if name in DESCRIPTIONS:
        return DESCRIPTIONS[name]
    if name.startswith('executed_kfo_'):
        return 'Исполнено: '+KFO_NAMES[name.split('_')[2]]+'; в разделе 4 — возвраты.'
    for activity,label in ACTIVITY_NAMES.items():
        if name.endswith(f'_{activity}_rub'):
            return ('Финансовые результаты: ' if name.startswith('financial_result_') else
                    'На начало года: ' if name.startswith('opening_') else 'На конец отчётного периода: ')+label+'. Группа деятельности, не отдельный КФО.'
    raise ValueError(name)


def patterns(kind):
    if kind=='legacy_2014_0503737_kfo':
        return [r'^0503737-4_\d+-\d+\.XLS$']
    if kind.endswith('_matrix'):
        return [r'^'+('00' if kind.startswith('rf_') else r'\d{2}')+r'_FO_\d{2}\.\d{2}\.\d{2}(?:\d{2})?\.XLS$']
    form=kind.split('_')[1]
    if kind.startswith('subject_'):
        return [r'^_\d{2}\.\d{2}\.\d{4}_0503730(?:_\d+)?\.XLS$'] if form=='0503730' else [r'^\d{2}_\d{2}\.\d{2}\.\d{4}_'+form+r'\.XLS$']
    if kind.endswith('_2018'):
        return [r'^FO_0503737_na_\d{2}\.\d{2}\.\d{4}_КФО_[24567]\.XLS$'] if form=='0503737' else [r'^FO_'+form+r'_svod_\d{2}\.\d{2}\.\d{4}\.xls$']
    return [r'^ФО свод ф\. '+form+r' на \d{2}\.\d{2}\.\d{4}'+(r'[ _]КФО [24567]' if form=='0503737' else '')+r'\.XLS$']


def hierarchy(entries):
    """Levels come only from printed arithmetic references; absent relations stay unknown."""
    for date in sorted(set(x['report_date'] for x in entries)):
        for section in ('1','2','3','4'):
            subset=[x for x in entries if x['report_date']==date and x['section']==section]
            for x in subset:
                x['node_id']=('line:'+x['line_code'] if x['line_code'] else 'analytics:'+str(x['analytics_code']))
                x['parents_from_printed_formula']=[]
            for parent in subset:
                refs=[]
                for part in re.findall(r'\(([^)]*стр\.[^)]*)\)',parent['name']):
                    refs+=re.findall(r'\b\d{3}\b',part)
                parent['formula_references_raw']=refs
                for ref in refs:
                    # Expense detail uses the analytics axis; do not confuse analytics 200 with line 200.
                    candidates=[x for x in subset if x is not parent and
                        (x['analytics_code']==ref and x['line_code'] is None if section=='2' else
                         x['line_code']==ref or (x['line_code'] is None and x['analytics_code']==ref))]
                    for child in candidates:
                        if parent['node_id'] != child['node_id']:
                            child['parents_from_printed_formula'].append(parent['node_id'])
            by_id={x['node_id']:x for x in subset}
            def level(x,visited=None):
                visited=set() if visited is None else visited
                if x['node_id'] in visited:
                    return None
                visited=visited|{x['node_id']}
                parents=[by_id[p] for p in x['parents_from_printed_formula'] if p in by_id]
                if not parents:
                    return 0 if x['is_total'] else None
                levels=[level(p,visited) for p in parents]
                return min(v for v in levels if v is not None)+1 if any(v is not None for v in levels) else None
            for x in subset:
                x['hierarchy_level']=level(x)
                x['hierarchy_status']='derived_from_printed_formula' if x['hierarchy_level'] is not None else 'undetermined'
                x['row_role']='total_or_subtotal' if x['is_total'] else 'article'
                x['is_total_method']='printed всего/итого/стр. or standalone x/х; parser heuristic, not a legal classifier'
    return entries


def main():
    profiles=load('profiles.json')
    inv=load('members.json')
    downloads=json.loads((ROOT/'downloads.json').read_text())
    groups=defaultdict(list)
    for p in profiles:
        groups[p['kind']].append(p)
    types=[]
    for kind, members in sorted(groups.items()):
        # Prefer annual current file; all other dates remain listed with their own dimensions.
        sample=next((m for m in members if m['member'].startswith('ФО_01.01.2026.zip!')),members[0])
        book=xlrd.open_workbook(ROOT/sample['local_path'],formatting_info=True)
        parsed=list(rows(book,sample['member']))
        entry=dict(id=kind,member_patterns=patterns(kind),
            pattern_scope='basename; archive path is mandatory for classification and KFO',
            status='verified',checked_files=len(members),witness=sample['member'],
            observed_report_dates=sorted(set(m['report_date'] for m in members)),
            evidence_index='results/profiles.json',sheets=[])
        for s in book.sheets():
            observations=[(p,x) for p in members for x in p['sheets'] if x['name']==s.name]
            shapes=defaultdict(list)
            for p,x in observations:
                shapes[(x['formatted_nrows'],x['formatted_ncols'],x['value_nrows'],x['value_ncols'])].append(p['member'])
            data=[r for r in parsed if r['sheet']==s.name]
            first=min((r['source_row'] for r in data),default=None)
            sheet=dict(name=s.name,role='internal_metadata' if s.name=='XDO_METADATA' else 'data',hidden=bool(s.visibility),
                checked_files=len(observations),shape_variants=[dict(formatted_rows=k[0],formatted_cols=k[1],
                    value_rows=k[2],value_cols=k[3],checked_files=len(v),witness=v[0]) for k,v in sorted(shapes.items())],
                data_start_row=first,header_map={f'row_{r+1}':{xlrd.colname(c):v for c,v in enumerate(s.row_values(r)) if v!=''}
                    for r in range(first-1 if first else min(5,s.nrows))},
                merged_ranges_0based_half_open=s.merged_cells,
                service_rows_in_witness=next(x for x in sample['sheets'] if x['name']==s.name),
                layouts=[])
            if s.name=='XDO_METADATA':
                sheet['parsing']='Skip by exact sheet name/visibility, never assume it is the last sheet. A:C carry XDO technical metadata; formatted extra columns are not financial measures.'
                sheet['columns']=[dict(col=xlrd.colname(c),name=f'xdo_metadata_{xlrd.colname(c).lower()}',
                    type='internal',description='Внутреннее поле XDO; точная семантика не исследована, в финансовую таблицу не переносится.',
                    example=next((s.cell_value(r,c) for r in range(s.nrows) if s.cell_value(r,c)!=''),None))
                    for c in range(3)]
            else:
                sections=[('4',lambda r:r['section']=='4'),('1-3',lambda r:r['section']!='4')] if sample['form_code']=='0503737' else [('all',lambda r:True)]
                for label,predicate in sections:
                    selected=[r for r in data if predicate(r)]
                    if not selected:
                        continue
                    old2018=kind.endswith('_2018')
                    legacy=kind.startswith('legacy_2014')
                    off=s.name in ('стр.5_7','2') and sample['form_code']=='0503730'
                    if sample['form_code']=='0503737':
                        identifier_cols=[('A','indicator_name'),('D' if legacy else 'B','line_code'),('E' if legacy else 'C','analytics_code')]
                    elif sample['form_code']=='0503721':
                        identifier_cols=[('A','indicator_name'),('E' if old2018 else 'D','line_code'),('F' if old2018 else 'E','analytics_code')]
                    else:
                        identifier_cols=[('B' if off else 'A','indicator_name'),('C' if off or old2018 else 'B','line_code')]
                        if off:
                            identifier_cols.append(('A','off_balance_account_raw'))
                    columns=[]
                    for col,name in identifier_cols+[(col,name) for name,col in selected[0]['source_columns'].items()]:
                        monetary=name.endswith('_rub')
                        example_row=next((r for r in selected if (r['measures'].get(name) if monetary else r.get(name)) is not None),selected[0])
                        example=example_row['measures'].get(name) if monetary else example_row.get(name)
                        ci=0
                        for char in col:
                            ci=ci*26+ord(char)-64
                        raw=s.cell_value(example_row['source_row']-1,ci-1)
                        columns.append(dict(col=col,name=name,type='decimal' if monetary else 'string',
                            nullable=name!='indicator_name',format='signed decimal rubles, scale 2' if monetary else
                            r'^\d{3}$ or null' if name=='line_code' else r'^[0-9][0-9A-ZА-Я]{2}$ or null' if name=='analytics_code' else 'UTF-8 text',
                            description=description(name),example=example,raw_example=raw,
                            example_source=dict(member=sample['member'],sheet=s.name,cell=f'{col}{example_row["source_row"]}'),
                            normalization='Decimal(str(value)); remove whitespace/NBSP; comma->dot; blank or standalone x/х -> null' if monetary else
                                          'integer .0 removed; leading zeroes preserved/padded for line_code only; standalone x/х -> null' if name in ('line_code','analytics_code') else 'preserve text; whitespace collapsed in indicator_name'))
                    sheet['layouts'].append(dict(section=label,data_start_row=selected[0]['source_row'],columns=columns))
                sheet['ignored_columns']='Non-financial helper columns and formatting outside the listed maps; full populated coordinates are in results/witnesses.json. Merged continuation cells carry no independent measure.'
                mapped=set(c['col'] for layout in sheet['layouts'] for c in layout['columns'])
                outside=[]
                for c in range(s.ncols):
                    col=xlrd.colname(c)
                    found=next(((r,s.cell_value(r,c)) for r in range(s.nrows) if s.cell_value(r,c)!=''),None)
                    if col not in mapped and found:
                        outside.append(dict(col=col,name=f'layout_helper_{col.lower()}',type='layout_or_header',
                            description='Вспомогательное поле макета/шапки; не самостоятельная финансовая мера. Не суммировать.',
                            example=found[1],example_cell=f'{col}{found[0]+1}'))
                sheet['non_data_columns']=outside
            entry['sheets'].append(sheet)
        entry['total_rows']=dict(marker='standalone Latin x or Cyrillic х in analytics, blank analytics, printed totals/formulas',
            action='Preserve data, raw codes, total_marker and is_total; do not sum totals together with children. Blank line_code is allowed on detail rows.',
            is_total_status='heuristic; see reference_tables.form_lines')
        entry['parsing_notes']=['1-based Excel rows/letters in header_map and examples; merged ranges are xlrd 0-based half-open.',
            'nrows/ncols with formatting_info=True include styled empty cells; value dimensions use formatting_info=False.',
            'No fixed skiprows across years; section 4 has a separate physical measure map.',
            'Source member, sheet and row are part of lineage and distinguish repeated form codes.']
        types.append(entry)
    lines=hierarchy(load('form-lines.json'))
    auxiliary=[]
    for item in inv:
        if item['kind']=='other':
            if not item['member'].endswith('!ProtocolFO.txt'):
                raise ValueError('Unclassified auxiliary member: '+item['member'])
            auxiliary.append(dict(id='export_protocol_txt',format='text',member_patterns=[r'^ProtocolFO\.txt$'],
                status='observed_once',checked_files=1,witness=item['member'],sheets=[],data_start_row=None,encoding='cp1251',
                fields=parse_protocol((ROOT/item['local_path']).read_bytes()),
                parsing_notes=['Metadata text, not a financial table; not included in tidy facts.',
                    'Дата is the export-protocol date, distinct from report_date and publication date.',
                    'The dash before 87 is a list marker, not a negative number.',
                    'The trailing missing-reports message supplies no identifiers; do not infer complete coverage from it.']))
    dictionary=dict(source=dict(url=CATALOG,verified_at='2026-11-03',
        catalog_snapshots=[x for x in downloads if x['local_file'].endswith('.html')],
        packages=[dict(**x,type='annual' if '0503737' not in x['local_file'] else 'quarterly',
            filter='filter_type=54' if '0503737' not in x['local_file'] else 'filter_type=53') for x in downloads if x['local_file'].endswith(('.zip','.7z'))],
        catalog_inventory='catalog.csv',all_members='results/members.json',checked_xls=len(profiles),
        access_notes='curl --http1.1, Mozilla/5.0, 2-second inter-request pause; TLS certificate chain failed locally, downloaded with explicit --insecure. SHA/CRC do not prove TLS authenticity.'),
        file_types=types+auxiliary,reference_tables=dict(regions=load('regions-current.json'),
            regions_history='results/regions.json',region_assignments='results/region-observations-resolved.json',
            form_lines=lines,analytics=load('analytics-codes.json'),kfo=KFO_NAMES,
            activity_groups=ACTIVITY_NAMES,
            reference_limits='Region names are transcribed from portal files; 00 has an empty name in 2026 headers. Activity groups 0503721/0503730 cannot be treated as individual KFOs. 2014 header field labelled ОКПО contains 01/.../9500 and is preserved separately, not promoted to an organization ОКПО.'),
        tidy_schema=dict(grain='source physical form row × measure × KFO/activity/value_period; alternative representations must be filtered before aggregation',
            fields=[dict(name=n,type=t,description=d) for n,t,d in [
                ('report_date','date','ISO date of reporting snapshot, not publication date.'),('form_code','string','0503737 / 0503721 / 0503730.'),
                ('kfo','string|null','2/4/5/6/7 only where individually identified; null for shared plan, matrix total and activity groups.'),
                ('region_code','string','Two-digit code; legacy_2014_header_code is a separate code system.'),('region_name','string|null','From dated matrix header or historical founder text; null for 00 when header is empty.'),
                ('region_code_raw','string|null','Before unique-ОКПО resolution.'),('region_code_system','string','Do not silently merge code systems.'),
                ('region_resolution','string','source / unique_okpo_same_date / unresolved.'),('institution_name','string|null','Report compiler, not an individual institution.'),
                ('okpo','string|null','Leading zeroes retained, eight digits when organization ID observed.'),('oktmo','string|null','Observed territorial code; retain 8/11 digits.'),
                ('section','string','0503737: 1–4; balance: named Roman section/off_balance; financial_results for 0503721.'),
                ('line_code','string|null','Three digits; null on some genuine rows. No blanket forward-fill.'),('analytics_code','string|null','Three-character numeric/alphanumeric analytic identifier.'),
                ('line_code_raw','string|number','Unmodified source code.'),('analytics_code_raw','string|number','Retains standalone х/x separately from normalized null.'),
                ('indicator_name','string','Source label with whitespace normalized.'),('is_total','boolean','Heuristic derived from printed label/marker; does not authorize automatic aggregation.'),
                ('total_marker','string|null','Standalone Latin x or Cyrillic х.'),('off_balance_account_raw','string|number|null','Physical account cell.'),
                ('parent_off_balance_account','string|null','Last explicit off-balance account on the sheet, contextual only.'),
                ('representation','string','file_types.id; sum a single chosen representation.'),('activity_group','string|null','target_funds/state_assignment/own_income/total for 721/730.'),
                ('value_period','string','reporting / opening / closing; stocks must not be summed over time.'),('measure','string','Measure name from physical column map; matrix KFO values normalize to executed_total_rub.'),
                ('amount_rub','decimal(20,2)|null','CSV stores exact decimal text; null remains empty and explicit zero remains 0.00.'),
                ('cell_state','string','value / blank_or_not_applicable; source does not establish that every blank is zero.'),
                ('layout_id','string','Observed physical layout variant.'),('legacy_header_code','string|null','Raw 2014 code labelled ОКПО, kept without invented organization semantics.'),
                ('source_member','string','Full archive chain separated by !.'),('sheet','string','Exact source sheet.'),('source_row','integer','One-based Excel row.'),('source_col','string','Excel column letter.')]],
            unique_physical_key=['source_member','sheet','source_row','source_col'],
            economic_key_warning='report_date+form_code+region_code+kfo+section+line_code+analytics_code is not universally unique; preserve source coordinates and activity/period.'),
        qa_checks=dict(summary=load('qa-summary.json'),cross_sums='results/qa-cross-sums.json',
            arithmetic='results/qa-arithmetic.json',composition='results/qa-composition.json',
            archive_integrity='unpack.py: ZIP testzip at both levels; 7zz t for 7z',
            run='python qa.py --strict',
            null_policy='Use blank as zero only inside a documented, otherwise nonempty additive control; all-empty comparisons are unavailable, not pass.'),
        limitations=['Only the five named packages were opened; catalog HTML/HEAD for other dates is not evidence of their internal layout.',
            'Hierarchy is derived from printed arithmetic references. Undetermined levels remain null; no normative hierarchy is invented.',
            'HTTP/2 PROTOCOL_ERROR from the earlier description was not reproduced in this run; only HTTP/1.1 was exercised.',
            'No assertion about legal applicability or completeness of institutional coverage is derived from workbook presence.'])
    # PyYAML must never emit Python-specific objects or lossy float conversion of Decimal.
    serializable=json.loads(json.dumps(dictionary,ensure_ascii=False,default=str))
    (ROOT/'data-dictionary.yaml').write_text(yaml.safe_dump(serializable,allow_unicode=True,sort_keys=False,width=120))
    print(f'Dictionary: {len(types)} file variants; {len(lines)} dated form-line labels')


if __name__=='__main__':
    main()
