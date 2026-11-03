"""Scan every extracted XLS and save bounded, file-addressable evidence + QA."""
from collections import Counter, defaultdict
import csv
from decimal import Decimal
import hashlib
import json
import platform
import re
import subprocess

import xlrd
import yaml

from collect import ROOT, log
from parse import classify, code, metadata, rows


def write_json(name, value):
    (ROOT / 'results' / name).write_text(json.dumps(value, ensure_ascii=False, indent=2, default=str) + '\n')


def sparse(sheet, r):
    return {xlrd.colname(c): v for c, v in enumerate(sheet.row_values(r)) if v != ''}


def main():
    inventory = json.loads((ROOT / 'results/members.json').read_text())
    profiles, failures, region_observations = [], [], []
    witnesses = {}
    form_lines, analytic_codes = {}, {}
    control = []
    counters = Counter()
    anomalies = defaultdict(list)
    group_sets = defaultdict(set)
    for item in inventory:
        if item['kind'] != 'xls':
            continue
        member = item['member']
        package = member.split('!')[0]
        try:
            book = xlrd.open_workbook(ROOT / item['local_path'], formatting_info=True)
            plain = xlrd.open_workbook(ROOT / item['local_path'])
            kind = classify(member)
            meta = metadata(book, member)
            data = list(rows(book, member))
            if not data:
                raise ValueError('No data rows recognized: layout requires investigation')
            counters[(package, kind)] += 1
            group_sets[(package, member.split('!')[1])].add(meta['region_code'])
            by_sheet = defaultdict(list)
            for row in data:
                by_sheet[row['sheet']].append(row)
            profile = dict(member=member, local_path=item['local_path'], kind=kind,
                           biff_version=book.biff_version, **meta, row_count=len(data), sheets=[])
            witness_key = package + '|' + kind
            # First file is a fully preserved witness; all others still get scanned below.
            is_witness = witness_key not in witnesses
            witness = dict(member=member, kind=kind, sheets=[])
            for s in book.sheets():
                plain_s = plain.sheet_by_name(s.name)
                data_rows = by_sheet[s.name]
                col_numbers, page_markers, section_heads = [], [], []
                for r in range(s.nrows):
                    if str(s.cell_value(r, 0)).strip() in ('1', '1.0'):
                        col_numbers.append(r+1)
                    if any(re.search(r'Форма\s+05037\d+\s+с\.', str(v)) for v in s.row_values(r)):
                        page_markers.append(r+1)
                    if re.match(r'^\s*(?:[1-4]|I|II|III|IV)\.\s', str(s.cell_value(r, 0))):
                        section_heads.append(dict(row=r+1, value=s.cell_value(r, 0)))
                starts = {}
                for row in data_rows:
                    starts.setdefault(row['section'], row['source_row'])
                profile['sheets'].append(dict(name=s.name, hidden=bool(s.visibility),
                    visibility=s.visibility, formatted_nrows=s.nrows, formatted_ncols=s.ncols,
                    value_nrows=plain_s.nrows, value_ncols=plain_s.ncols,
                    merged_count=len(s.merged_cells), data_start_row=min((d['source_row'] for d in data_rows), default=None),
                    data_rows=[d['source_row'] for d in data_rows], section_data_start=starts,
                    column_number_rows=col_numbers, page_marker_rows=page_markers,
                    section_heading_rows=section_heads))
                if is_witness:
                    witness['sheets'].append(dict(name=s.name, hidden=bool(s.visibility),
                        nrows=s.nrows, ncols=s.ncols, value_ncols=plain_s.ncols,
                        merged_ranges_0based_half_open=s.merged_cells,
                        nonempty_rows=[dict(row=r+1, cells=sparse(s, r)) for r in range(s.nrows)
                                       if any(v != '' for v in s.row_values(r))] if s.name != 'XDO_METADATA' else
                                       [dict(row=r+1, cells=sparse(s,r)) for r in range(min(5,s.nrows))]))
            if is_witness:
                witnesses[witness_key] = witness
            for row in data:
                base = dict(member=member, sheet=row['sheet'], row=row['source_row'])
                if row['line_code'] is None:
                    anomalies['blank_line_code'].append(base)
                if row['total_marker']:
                    anomalies['x_total_marker'].append(dict(**base, value=row['total_marker']))
                if row['analytics_code'] and re.search(r'[^0-9]', row['analytics_code']):
                    anomalies['alphanumeric_analytics'].append(dict(**base, value=row['analytics_code']))
                s = book.sheet_by_name(row['sheet'])
                for measure, amount in row['measures'].items():
                    col = row['source_columns'][measure]
                    col_num = 0
                    for ch in col:
                        col_num = col_num*26 + ord(ch)-64
                    raw = s.cell_value(row['source_row']-1, col_num-1)
                    if amount is not None and isinstance(raw, str):
                        anomalies['text_money'].append(dict(**base, col=col, value=raw))
                    if amount is not None and amount < 0:
                        anomalies['negative_money'].append(dict(**base, col=col, value=str(amount)))
                if meta['form_code'] == '0503737':
                    key = (meta['report_date'], row['section'], row['line_code'], row['analytics_code'], row['indicator_name'])
                    if key not in form_lines:
                        form_lines[key] = dict(report_date=key[0], section=key[1], line_code=key[2],
                            analytics_code=key[3], name=key[4], is_total=row['is_total'],
                            total_marker=row['total_marker'], observed_count=0, witnesses=[])
                    entry = form_lines[key]
                    entry['observed_count'] += 1
                    if len(entry['witnesses']) < 2:
                        entry['witnesses'].append(base)
                    if row['analytics_code']:
                        ak = (meta['report_date'], row['section'], row['analytics_code'], row['indicator_name'])
                        if ak not in analytic_codes:
                            analytic_codes[ak] = dict(report_date=ak[0], section=ak[1], code=ak[2],
                                meaning_from_form=ak[3], observed_count=0, witness=base)
                        analytic_codes[ak]['observed_count'] += 1
                # All parsed rows, only measures/keys needed for cross-validation.
                control.append(dict(package=package, kind=kind, **{k: row[k] for k in
                    ('report_date','form_code','region_code','kfo','section','line_code','analytics_code',
                     'source_member','sheet','source_row','indicator_name','measures')}))
            region_observations.append(dict(member=member, package=package, kind=kind, **meta))
            profiles.append(profile)
            if meta['region_code'] is None:
                anomalies['missing_region_prefix'].append(dict(member=member, **meta))
        except Exception as e:
            failures.append(dict(member=member, error=f'{type(e).__name__}: {e}'))
        if len(profiles) % 200 == 0:
            print(f'Scanned {len(profiles)} XLS; failures={len(failures)}', flush=True)
    write_json('profiles.json', profiles)
    write_json('witnesses.json', list(witnesses.values()))
    write_json('parse-failures.json', failures)
    write_json('region-observations.json', region_observations)
    write_json('form-lines.json', list(form_lines.values()))
    write_json('analytics-codes.json', list(analytic_codes.values()))
    write_json('anomalies.json', {key: dict(occurrences=len(values), checked_files=len(profiles),
        affected_files=len(set(x['member'] for x in values)), examples=values[:12])
        for key, values in anomalies.items()})
    write_json('coverage.json', dict(files=len(profiles), failures=len(failures),
        types=[dict(package=k[0], kind=k[1], files=v) for k,v in sorted(counters.items())],
        groups=[dict(package=k[0], member=k[1], regions=sorted(v, key=str), files=len(v)) for k,v in sorted(group_sets.items())],
        libraries=dict(python=platform.python_version(), xlrd=xlrd.__version__, pyyaml=yaml.__version__)))
    # Intermediate data is reproducible and deliberately ignored by git.
    (ROOT/'raw/parsed-rows.json').write_text(json.dumps(control, ensure_ascii=False, default=str))
    log(action='scan', files=len(profiles), failures=len(failures), rows=len(control))
    print(f'Files={len(profiles)}, failures={len(failures)}, parsed rows={len(control)}')
    if failures:
        print(json.dumps(failures[:8], ensure_ascii=False, indent=2))
        raise SystemExit(1)


if __name__ == '__main__':
    main()
