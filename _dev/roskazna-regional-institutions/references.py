"""Build dated regional crosswalks. Never derive geography from array order."""
from collections import defaultdict
import csv
import json
import re

from collect import ROOT
from research import write_json


def region_indexes(observations):
    names = {}
    identifiers = defaultdict(set)
    for row in observations:
        if row['kind'].endswith('_matrix'):
            names[(row['report_date'],row['region_code'])] = row['region_name']
        if row['region_code'] and row['region_code']!='00' and row['okpo']:
            identifiers[(row['report_date'],row['okpo'])].add(row['region_code'])
    return names, identifiers


def resolve(meta, names, identifiers):
    result = dict(meta)
    raw_code = meta['region_code']
    result['region_code_raw'] = raw_code
    result['region_resolution'] = 'source' if raw_code else 'unresolved'
    if not raw_code and meta['okpo']:
        candidates = identifiers.get((meta['report_date'],meta['okpo']),set())
        if len(candidates)==1:
            result['region_code'] = next(iter(candidates))
            result['region_resolution'] = 'unique_okpo_same_date'
    if not result.get('region_name'):
        result['region_name'] = names.get((meta['report_date'],result['region_code']))
    return result


def main():
    observations = json.loads((ROOT/'results/region-observations.json').read_text())
    names, ids = region_indexes(observations)
    resolved = [resolve(x,names,ids) for x in observations]
    write_json('region-observations-resolved.json',resolved)
    groups = defaultdict(list)
    for row in resolved:
        groups[(row['report_date'],row['region_code'],row['region_name'],row['okpo'],row['oktmo'],row['region_code_system'])].append(row)
    table = [dict(report_date=k[0],code=k[1],name=k[2],okpo=k[3],oktmo=k[4],code_system=k[5],
                  checked_files=len(values),observed_in=[x['member'] for x in values],
                  assignment_methods=sorted(set(x['region_resolution'] for x in values)))
             for k,values in sorted(groups.items(),key=lambda x:tuple(str(v) for v in x[0]))]
    write_json('regions.json',table)
    with (ROOT/'regions-history.csv').open('w',encoding='utf-8',newline='') as f:
        writer=csv.DictWriter(f,fieldnames=list(table[0]))
        writer.writeheader()
        for row in table:
            writer.writerow({**row,'observed_in':' | '.join(row['observed_in']),
                             'assignment_methods':' | '.join(row['assignment_methods'])})
    latest = max(x['report_date'] for x in resolved)
    current=[]
    for region_code in sorted(set(x['region_code'] for x in resolved if x['report_date']==latest), key=str):
        members=[x for x in resolved if x['report_date']==latest and x['region_code']==region_code]
        current.append(dict(code=region_code,name=next((x['region_name'] for x in members if x['region_name']),None),
            report_date=latest,okpo=sorted(set(x['okpo'] for x in members if x['okpo'])),
            oktmo=sorted(set(x['oktmo'] for x in members if x['oktmo'])),checked_files=len(members),
            observed_in=[x['member'] for x in members]))
    write_json('regions-current.json',current)
    with (ROOT/'regions.csv').open('w',encoding='utf-8',newline='') as f:
        writer=csv.DictWriter(f,fieldnames=list(current[0]));writer.writeheader()
        writer.writerows({**x,**{k:' | '.join(x[k]) for k in ('okpo','oktmo','observed_in')}} for x in current)
    unresolved = [x for x in resolved if x['region_code'] is None]
    inconsistencies = []
    for date,code in sorted(set((x['report_date'],x['region_code']) for x in resolved if x['region_code'] is not None)):
        selected = [x for x in resolved if x['report_date']==date and x['region_code']==code and x['okpo']]
        for field in ('okpo','oktmo'):
            values = sorted(set(x[field] for x in selected if x[field]))
            if len(values)>1:
                inconsistencies.append(dict(report_date=date,region_code=code,field=field,values=values,
                                           witnesses=[x['member'] for x in selected]))
    write_json('region-validation.json',dict(checked_files=len(observations),
        recovered_prefixless=sum(x['region_resolution']=='unique_okpo_same_date' for x in resolved),
        unresolved=unresolved,inconsistencies=inconsistencies,
        method='Only a unique ОКПО at the same report_date; ОКТМО is retained for comparison, not forced to match.'))
    print(f'Regions: {len(table)} dated identifier combinations; unresolved={len(unresolved)}')


if __name__ == '__main__':
    main()
