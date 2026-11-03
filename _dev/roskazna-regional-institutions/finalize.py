"""Audit downloaded companions, record the actual tidy output, retain small samples."""
from collections import Counter
import csv
from datetime import datetime
import hashlib
import json
from zoneinfo import ZoneInfo

from collect import ROOT, log
from research import write_json


def sha(path):
    h=hashlib.sha256()
    with path.open('rb') as f:
        for block in iter(lambda:f.read(1024*1024),b''):
            h.update(block)
    return h.hexdigest()


def main():
    downloads=json.loads((ROOT/'downloads.json').read_text())
    companions=[]
    for path in sorted((ROOT/'raw').iterdir()):
        if path.suffix not in ('.html','.zip','.7z','.headers','.head') or path.name=='probe.headers':
            continue
        base=path.name.removesuffix('.headers').removesuffix('.head')
        source=next((x for x in downloads if x['local_file']==base),None)
        companions.append(dict(file=str(path.relative_to(ROOT)),size_bytes=path.stat().st_size,sha256=sha(path),
            accessed_at=source['accessed_at'] if source else datetime.fromtimestamp(path.stat().st_mtime,ZoneInfo('Europe/Moscow')).isoformat(timespec='seconds'),
            date_basis='request_manifest' if source else 'saved_response_mtime',
            role='http_headers' if path.suffix in ('.headers','.head') else 'download_body'))
    (ROOT/'artifacts-manifest.json').write_text(json.dumps(companions,ensure_ascii=False,indent=2)+'\n')
    counts=Counter()
    samples=[]
    seen=set()
    rows=unresolved=0
    with (ROOT/'results/tidy.csv').open(newline='') as f:
        reader=csv.DictReader(f)
        fieldnames=reader.fieldnames
        for row in reader:
            rows+=1
            unresolved+=row['region_code']==''
            counts[row['representation']]+=1
            group=(row['representation'],row['section'],row['value_period'],row['activity_group'])
            if group not in seen:
                seen.add(group);samples.append(row)
    with (ROOT/'tidy-sample.csv').open('w',encoding='utf-8',newline='') as f:
        writer=csv.DictWriter(f,fieldnames=fieldnames);writer.writeheader();writer.writerows(samples)
    write_json('tidy-summary.json',dict(source_files=2888,facts=rows,unresolved_region_facts=unresolved,
        facts_by_representation=dict(counts),output='results/tidy.csv',size_bytes=(ROOT/'results/tidy.csv').stat().st_size,
        sha256=sha(ROOT/'results/tidy.csv'),sample_facts=len(samples)))
    assert rows==1962763 and unresolved==0
    log(action='finalize',downloaded_artifacts=len(companions),tidy_facts=rows,unresolved_region_facts=unresolved)
    print(f'Artifact manifest: {len(companions)} files; tidy: {rows} facts, sample: {len(samples)}')


if __name__=='__main__':
    main()
