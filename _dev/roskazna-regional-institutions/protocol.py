"""The observed ProtocolFO.txt is CP1251 text, unlike ZIP name CP866."""
from datetime import datetime
import re


def parse_protocol(payload):
    text=payload.decode('cp1251')
    result=dict(encoding='cp1251',line_count=len(text.splitlines()),line_ending='CRLF' if b'\r\n' in payload else 'LF')
    for label,key in [('Дата','protocol_date'),('Оператор','operator'),('Периодичность','periodicity'),
                      ('Период','report_year'),('Форма','form_code')]:
        match=re.search(r'^'+label+r':\s*([^\r\n]+)',text,re.M)
        if not match:
            raise ValueError(f'Missing protocol field: {label}')
        result[key]=match[1].strip()
    result['protocol_date']=datetime.strptime(result['protocol_date'],'%d.%m.%Y').date().isoformat()
    result['report_year']=int(result['report_year'])
    match=re.search(r'^\s*-(\d+)\s+отчет',text,re.M)
    if not match:
        raise ValueError('No exported-report count in protocol')
    result['exported_reports']=int(match[1])
    result['trailing_message']=text.split('В базе данных',1)[1].strip() if 'В базе данных' in text else None
    return result
