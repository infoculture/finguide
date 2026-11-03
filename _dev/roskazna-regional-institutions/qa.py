"""Regulatory-load checks. Exit nonzero on integrity/parse failure, expose numeric deltas.

For sums only, an empty measure is treated as zero when at least one value is
present. A wholly empty set remains unavailable. No missing subject is imputed.
"""
from collections import defaultdict
import argparse
from decimal import Decimal
import hashlib
import json

from collect import ROOT, log
from research import write_json
from protocol import parse_protocol


def value(row, measure):
    v = row['measures'].get(measure)
    return Decimal(v) if v is not None else None


def aggregate(values):
    values = list(values)
    return sum((v for v in values if v is not None), Decimal('0.00')) if any(v is not None for v in values) else None


def comparison(check, observed, expected, **context):
    delta = observed-expected if observed is not None and expected is not None else None
    return dict(check=check, status='unavailable' if delta is None else 'pass' if delta == 0 else 'difference',
                observed_rub=observed, expected_rub=expected, delta_rub=delta, **context)


def key(row):
    return tuple(row[k] for k in ('section', 'line_code', 'analytics_code'))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--strict',action='store_true',help='Fail on any nonzero numeric discrepancy')
    args = parser.parse_args()
    downloads = json.loads((ROOT/'downloads.json').read_text())
    integrity = []
    for item in downloads:
        path = ROOT/'raw'/item['local_file']
        actual = hashlib.sha256(path.read_bytes()).hexdigest()
        integrity.append(dict(file=item['local_file'], status='pass' if actual == item['sha256'] and
                              path.stat().st_size == item['size_bytes'] else 'failure'))
    failures = json.loads((ROOT/'results/parse-failures.json').read_text())
    inv = json.loads((ROOT/'results/members.json').read_text())
    protocol_checks=[]
    for item in inv:
        if item['kind']=='other':
            protocol=parse_protocol((ROOT/item['local_path']).read_bytes())
            parent=item['member'].rsplit('!',1)[0]+'!'
            actual=sum(x['kind']=='xls' and x['member'].startswith(parent) for x in inv)
            assert actual==protocol['exported_reports'], 'Protocol report count mismatch'
            protocol_checks.append(dict(witness=item['member'],reports_in_protocol=protocol['exported_reports'],
                                        xls_observed=actual,status='pass'))
    profiles = json.loads((ROOT/'results/profiles.json').read_text())
    assert {x['member'] for x in inv if x['kind']=='xls'} == {x['member'] for x in profiles}, 'Unparsed XLS files'
    data = json.loads((ROOT/'raw/parsed-rows.json').read_text())
    packages = defaultdict(list)
    for row in data:
        packages[row['package']].append(row)
    results, compositions, arithmetic, duplicates = [], [], [], []
    control_lines = ('010', '200', '450', '500', '910', '950')
    for package, data_rows in sorted(packages.items()):
        matrix = [x for x in data_rows if x['kind'].endswith('_matrix')]
        rf = [x for x in matrix if x['region_code']=='00']
        subject = [x for x in matrix if x['region_code']!='00']
        regions = set(x['region_code'] for x in subject)
        subjects_by_key = defaultdict(list)
        components = defaultdict(list)
        rf_components = {}
        for row in subject:
            subjects_by_key[key(row)].append(row)
        for row in data_rows:
            if row['kind'].startswith('subject_0503737_kfo'):
                components[(row['kfo'],key(row))].append(row)
            if row['kind'].startswith('rf_0503737_kfo'):
                rf_components[(row['kfo'],key(row))] = row
        for kfo in ('2','4','5','6','7'):
            subject_codes = set(x['region_code'] for x in data_rows if x['kind'].startswith('subject_0503737_kfo') and x['kfo']==kfo)
            if not matrix:
                subject_codes = set(x['region_code'] for x in data_rows if x['kind']=='legacy_2014_0503737_kfo' and x['region_code']!='00' and x['kfo']==kfo)
            compositions.append(dict(package=package,kfo=kfo,matrix_subjects=len(regions) if matrix else None,
                component_subjects=len(subject_codes),missing_from_components=sorted(regions-subject_codes, key=str),
                extra_in_components=sorted(subject_codes-regions, key=str)))
        if not matrix:
            for national in (x for x in data_rows if x['kind']=='legacy_2014_0503737_kfo' and x['region_code']=='00' and x['line_code'] in control_lines):
                peers=[x for x in data_rows if x['kind']=='legacy_2014_0503737_kfo' and x['region_code']!='00' and x['kfo']==national['kfo'] and key(x)==key(national)]
                for measure in ('approved_plan_rub','executed_total_rub'):
                    results.append(comparison('legacy_subjects_vs_rf_kfo',aggregate(value(x,measure) for x in peers),value(national,measure),
                        package=package,kfo=national['kfo'],section=national['section'],line_code=national['line_code'],
                        analytics_code=national['analytics_code'],measure=measure,files_checked=len(peers)+1,
                        witness=national['source_member'],source_row=national['source_row']))
        for row in rf:
            src = dict(package=package,section=row['section'],line_code=row['line_code'],
                       analytics_code=row['analytics_code'], witness=row['source_member'],source_row=row['source_row'])
            if row['line_code'] in control_lines:
                for measure in row['measures']:
                    peers = subjects_by_key[key(row)]
                    results.append(comparison('subjects_vs_rf_matrix', aggregate(value(x,measure) for x in peers),
                        value(row,measure),measure=measure,files_checked=len(peers),**src))
                results.append(comparison('five_kfo_vs_rf_total', aggregate(value(row,f'executed_kfo_{k}_rub') for k in ('2','4','5','6','7')),
                    value(row,'executed_total_rub'),files_checked=1,measure='executed_total_rub',**src))
                for k in ('2','4','5','6','7'):
                    other = rf_components.get((k,key(row)))
                    if other:
                        results.append(comparison('rf_kfo_vs_matrix',value(other,'executed_total_rub'),
                            value(row,f'executed_kfo_{k}_rub'),kfo=k,files_checked=2,
                            component_witness=other['source_member'],**src))
                        peers = components[(k,key(row))]
                        results.append(comparison('component_subjects_vs_rf_kfo',aggregate(value(x,'executed_total_rub') for x in peers),
                            value(other,'executed_total_rub'),kfo=k,files_checked=len(peers)+1,**src))
        # All rows, including data without a line code, are tested for horizontal addition.
        for row in data_rows:
            measure_keys = row['measures']
            groups = []
            if row['kind'].endswith('_matrix'):
                groups.append(('five_kfo', [f'executed_kfo_{k}_rub' for k in ('2','4','5','6','7')], 'executed_total_rub'))
            elif row['form_code']=='0503737':
                groups.append(('execution_methods', ['executed_treasury_accounts_rub','executed_bank_accounts_rub','executed_cash_rub','executed_noncash_rub'], 'executed_total_rub'))
            elif row['form_code']=='0503721':
                groups.append(('activities', [f'financial_result_{k}_rub' for k in ('target_funds','state_assignment','own_income')], 'financial_result_total_rub'))
            else:
                for period in ('opening','closing'):
                    groups.append((period,[f'{period}_{k}_rub' for k in ('target_funds','state_assignment','own_income')],f'{period}_total_rub'))
            for label, parts, total in groups:
                observed = aggregate(value(row,x) for x in parts)
                expected = value(row,total)
                if observed is None and expected is None:
                    continue
                result = comparison(label,observed,expected,package=package,witness=row['source_member'],
                                    sheet=row['sheet'],source_row=row['source_row'])
                arithmetic.append(result)
    reference = {'approved_plan_rub':'14694007865335.89','executed_total_rub':'14319121716683.36',
                 'executed_kfo_2_rub':'1466385828345.96','executed_kfo_4_rub':'7134360134716.41',
                 'executed_kfo_5_rub':'2095610797234.72','executed_kfo_6_rub':'188826611846.24',
                 'executed_kfo_7_rub':'3433938344540.03'}
    annual010 = next(x for x in data if x['package']=='ФО_01.01.2026.zip' and x['kind']=='rf_0503737_matrix' and x['line_code']=='010')
    for measure, expected in reference.items():
        results.append(comparison('user_reference_010',value(annual010,measure),Decimal(expected),
            measure=measure,files_checked=1,witness=annual010['source_member'],source_row=annual010['source_row']))
    write_json('qa-cross-sums.json',results)
    write_json('qa-composition.json',compositions)
    counts = {s:sum(x['status']==s for x in arithmetic) for s in ('pass','difference','unavailable')}
    write_json('qa-arithmetic.json',dict(checks=len(arithmetic),counts=counts,
        differences=[x for x in arithmetic if x['status']!='pass']))
    summary = dict(download_integrity=integrity,protocol_checks=protocol_checks,parse_failures=len(failures),files_parsed=len(profiles),
        cross_sum_checks=len(results), cross_sum_statuses={s:sum(x['status']==s for x in results) for s in ('pass','difference','unavailable')},
        arithmetic=counts, null_sum_policy='blank->0 only within a nonempty set; all-empty->unavailable',
        release_status='review_numeric_differences' if any(x['status']=='difference' for x in results+arithmetic) else 'pass')
    write_json('qa-summary.json',summary)
    log(action='qa',**summary)
    print(json.dumps(summary,ensure_ascii=False,indent=2))
    if failures or any(x['status']=='failure' for x in integrity) or (args.strict and summary['release_status']!='pass'):
        raise SystemExit(1)


if __name__ == '__main__':
    main()
