"""Verify archive CRCs, keep member provenance and decode legacy ZIP names."""
import argparse
import hashlib
from io import BytesIO
import json
from pathlib import Path
import subprocess
import zipfile

from collect import ROOT, log


def display_name(info):
    if info.flag_bits & 0x800:
        return info.filename, 'utf-8'
    return info.filename.encode('cp437').decode('cp866'), 'cp866'


def safe_path(base, name):
    target = (base / name.replace('\\', '/')).resolve()
    if not target.is_relative_to(base.resolve()):
        raise ValueError(f'Unsafe archive member: {name!r}')
    return target


def unpack_zip(data, base, chain, inventory):
    with zipfile.ZipFile(BytesIO(data)) as z:
        bad = z.testzip()
        if bad:
            raise ValueError(f'CRC failure: {chain}!{bad}')
        for info in z.infolist():
            name, encoding = display_name(info)
            path = safe_path(base, name)
            if info.is_dir():
                path.mkdir(parents=True, exist_ok=True)
                payload = b''
            else:
                payload = z.read(info)
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_bytes(payload)
            member = f'{chain}!{name}'
            kind = 'directory' if info.is_dir() else ('zip' if zipfile.is_zipfile(BytesIO(payload))
                    else 'xls' if name.lower().endswith('.xls') else 'other')
            inventory.append(dict(member=member, raw_name=info.filename, encoding=encoding,
                                  utf8_flag=bool(info.flag_bits & 0x800), kind=kind,
                                  size_bytes=info.file_size, compressed_bytes=info.compress_size,
                                  crc32=f'{info.CRC:08x}', crc_ok=True,
                                  sha256=hashlib.sha256(payload).hexdigest(),
                                  local_path=str(path.relative_to(ROOT))))
            if kind == 'zip':
                unpack_zip(payload, path.with_suffix(''), member, inventory)


def main():
    p = argparse.ArgumentParser()
    p.add_argument('packages', nargs='*')
    args = p.parse_args()
    inventory = []
    packages = [ROOT / 'raw' / x for x in args.packages] if args.packages else [
        x for x in (ROOT / 'raw').iterdir() if x.suffix.lower() in ('.zip', '.7z')]
    for package in sorted(packages):
        base = ROOT / 'extracted' / package.stem
        base.mkdir(parents=True, exist_ok=True)
        if package.suffix.lower() == '.zip':
            unpack_zip(package.read_bytes(), base, package.name, inventory)
        else:
            listing = subprocess.run(['7zz','l','-slt',str(package)],capture_output=True,text=True,check=True).stdout
            members_text = listing.split('----------\n', 1)[1]
            archive_names = []
            for block in members_text.strip().split('\n\n'):
                fields = dict(line.split(' = ',1) for line in block.splitlines() if ' = ' in line)
                if fields.get('Folder') != '+' and fields.get('Path') and not fields.get('Attributes','').startswith('D'):
                    archive_names.append(fields['Path'])
            for cmd in (['7zz', 't', str(package)], ['7zz', 'x', '-y', f'-o{base}', str(package)]):
                result = subprocess.run(cmd, capture_output=True, text=True)
                log(action='7z', command=cmd, exit_code=result.returncode, output=result.stdout)
                result.check_returncode()
            for name in archive_names:
                path = safe_path(base,name)
                if not path.is_file():
                    continue
                payload = path.read_bytes()
                member = f'{package.name}!{name}'
                kind = 'zip' if zipfile.is_zipfile(BytesIO(payload)) else 'xls' if path.suffix.lower() == '.xls' else 'other'
                inventory.append(dict(member=member, raw_name=name, encoding='7z-unicode',
                                      utf8_flag=None, kind=kind, size_bytes=len(payload),
                                      crc_ok=True, sha256=hashlib.sha256(payload).hexdigest(),
                                      local_path=str(path.relative_to(ROOT))))
                if kind == 'zip':
                    unpack_zip(payload, path.with_suffix(''), member, inventory)
        log(action='unpack', package=package.name, members=sum(x['member'].startswith(package.name+'!') for x in inventory))
        print(f'{package.name}: unpacked and CRC checked', flush=True)
    (ROOT / 'results' / 'members.json').write_text(json.dumps(inventory, ensure_ascii=False, indent=2) + '\n')


if __name__ == '__main__':
    main()
