"""Polite, resumable curl collector. Never infer publication year from report date."""
import argparse
import csv
import hashlib
import json
from pathlib import Path
import re
import subprocess
import time
from datetime import datetime
from urllib.parse import quote, unquote, urlsplit, urlunsplit, urljoin
from zoneinfo import ZoneInfo

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent
CATALOG = ('https://roskazna.gov.ru/ispolnenie-byudzhetov/'
           'svodnaya-informaciya-po-byudzhetnym-i-avtonomnym-uchrezhdeniyam-'
           'subuektov-rf-mestnyh-byudzhetov/')


def stamp():
    return datetime.now(ZoneInfo('Europe/Moscow')).isoformat(timespec='seconds')


def log(**event):
    with (ROOT / 'actions.jsonl').open('a', encoding='utf-8') as f:
        f.write(json.dumps({'at': stamp(), **event}, ensure_ascii=False) + '\n')


def encoded_url(url):
    p = urlsplit(url)
    return urlunsplit((p.scheme, p.netloc, quote(unquote(p.path), safe='/'), p.query, ''))


def fetch(url, name, insecure=False, refresh=False):
    raw = ROOT / 'raw'
    raw.mkdir(exist_ok=True)
    dest = raw / name
    manifest = ROOT / 'downloads.json'
    entries = json.loads(manifest.read_text()) if manifest.exists() else []
    old = next((e for e in entries if e['local_file'] == name), None)
    if not refresh and old and dest.exists() and hashlib.sha256(dest.read_bytes()).hexdigest() == old['sha256']:
        return dest
    time.sleep(2)
    cmd = ['curl', '--http1.1', '--silent', '--show-error', '--fail', '--location',
           '--connect-timeout', '30', '--max-time', '600', '--retry', '2', '--retry-delay', '5',
           '-A', 'Mozilla/5.0', '--dump-header', str(dest) + '.headers',
           '--output', str(dest) + '.part']
    if insecure:
        cmd += ['--insecure']
    url = encoded_url(url)
    log(action='request', url=url, local_file=name, insecure=insecure)
    start = time.monotonic()
    p = subprocess.run(cmd + [url], capture_output=True, text=True)
    log(action='response', url=url, exit_code=p.returncode, stderr=p.stderr,
        seconds=round(time.monotonic() - start, 2))
    p.check_returncode()
    temporary=Path(str(dest)+'.part')
    new_digest=hashlib.sha256(temporary.read_bytes()).hexdigest()
    if dest.exists():
        previous_digest=hashlib.sha256(dest.read_bytes()).hexdigest()
        if previous_digest!=new_digest:
            history=raw/'history'/previous_digest
            history.mkdir(parents=True,exist_ok=True)
            dest.replace(history/name)
            log(action='previous_copy_saved',local_file=name,sha256=previous_digest,previous_manifest=old)
    temporary.replace(dest)
    entry = dict(url=url, local_file=name, accessed_at=stamp(), size_bytes=dest.stat().st_size,
                 sha256=hashlib.sha256(dest.read_bytes()).hexdigest(), tls_verified=not insecure)
    entries = [e for e in entries if e['local_file'] != name] + [entry]
    manifest.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + '\n')
    log(action='artifact',**entry)
    print(json.dumps(entry, ensure_ascii=False), flush=True)
    return dest


def catalog_records(path, kind, year):
    soup = BeautifulSoup(path.read_text(), 'html.parser')
    records = []
    for node in soup.find_all('a'):
        match = re.search(r"downloadFile\(['\"]([^'\"]+)", node.get('wire:click.prevent', node.get('wire:click', '')))
        if not match:
            continue
        attachment = match[1]
        # A publication card contains its date, title and one or more file buttons.
        card = node.find_parent(class_='card') or node.parent.parent.parent
        text = card.get_text(' ', strip=True)
        date = card.find(class_='date-doc')
        title = card.find(class_='card-body')
        records.append(dict(kind=kind, filter_year=year, catalog_snapshot=path.name,
                            publication_date_text=date.get_text(' ', strip=True) if date else None,
                            title=title.get_text(' ', strip=True) if title else None,
                            card_text=text, attachment=unquote(attachment.split('/')[-1]),
                            url=urljoin('https://roskazna.gov.ru/', attachment), advertised_size=None))
    return records


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--insecure', action='store_true', help='Explicit research-only TLS bypass')
    p.add_argument('--catalog', action='store_true')
    p.add_argument('--samples', action='store_true')
    p.add_argument('--sizes', action='store_true', help='HEAD each distinct attachment, keep raw response headers')
    p.add_argument('--refresh',action='store_true',help='Refetch; preserve a changed previous body under raw/history/<sha256>/')
    p.add_argument('--url')
    p.add_argument('--name')
    args = p.parse_args()
    if args.catalog:
        records = []
        for year in (2014, 2018, 2021, 2024, 2025, 2026):
            for code, kind in ((53, 'quarterly'), (54, 'annual')):
                path = fetch(f'{CATALOG}?filter_type={code}&filter_year={year}',
                             f'catalog-{year}-{code}.html', args.insecure,args.refresh)
                records.extend(catalog_records(path, kind, year))
        (ROOT / 'catalog.json').write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n')
    if args.samples:
        records = json.loads((ROOT / 'catalog.json').read_text())
        names = ['ФО_01.01.2026.zip', 'ФО_0503737_01.07.2026.zip',
                 'FO_0503737_01.07.2014.zip', 'FO_01.01.2019.zip',
                 'FO_0503737-na-01.10.2025.7z']
        for name in names:
            item = next(r for r in records if r['attachment'] == name)
            fetch(item['url'], name, args.insecure,args.refresh)
    if args.url:
        fetch(args.url, args.name or unquote(urlsplit(args.url).path.split('/')[-1]), args.insecure,args.refresh)
    if args.sizes:
        records = json.loads((ROOT/'catalog.json').read_text())
        known = {x['local_file']:x for x in json.loads((ROOT/'downloads.json').read_text())}
        seen = {}
        for item in records:
            name = item['attachment']
            if name in known:
                item['size_bytes'] = known[name]['size_bytes']
                item['size_source'] = 'downloaded_body'
                continue
            if name not in seen:
                time.sleep(2)
                url = encoded_url(item['url'])
                cmd = ['curl','--http1.1','--head','--silent','--show-error','--fail','--location',
                       '--connect-timeout','20','--max-time','50','-A','Mozilla/5.0']
                if args.insecure:
                    cmd += ['--insecure']
                result = subprocess.run(cmd+[url],capture_output=True,text=True)
                head = result.stdout
                (ROOT/'raw'/f'{name}.head').write_text(head)
                lengths = re.findall(r'(?im)^content-length:\s*(\d+)',head)
                seen[name] = int(lengths[-1]) if lengths and result.returncode==0 else None
                log(action='head',url=url,exit_code=result.returncode,size_bytes=seen[name],
                    stderr=result.stderr,headers_sha256=hashlib.sha256(head.encode()).hexdigest())
                print(name, seen[name],flush=True)
            item['size_bytes'] = seen[name]
            item['size_source'] = 'http_head_content_length' if seen[name] is not None else 'unavailable'
        (ROOT/'catalog.json').write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n')
        with (ROOT/'catalog.csv').open('w',encoding='utf-8',newline='') as f:
            writer=csv.DictWriter(f,fieldnames=list(records[0]))
            writer.writeheader(); writer.writerows(records)


if __name__ == '__main__':
    main()
