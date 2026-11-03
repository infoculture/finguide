"""Regression checks against the downloaded public witnesses (run after unpack)."""
from decimal import Decimal
from io import BytesIO
import json
import unittest
import zipfile

import xlrd

from collect import ROOT
from parse import code, money, rows
from references import region_indexes, resolve
from unpack import safe_path
from protocol import parse_protocol


class ParserChecks(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.inventory=json.loads((ROOT/'results/members.json').read_text())

    def read_witness(self, fragment):
        item=next(x for x in self.inventory if fragment in x['member'] and x['kind']=='xls')
        return list(rows(xlrd.open_workbook(ROOT/item['local_path']),item['member']))

    def test_code_and_currency(self):
        self.assertEqual(code(10.0,3),'010')
        self.assertEqual(code('120.0'),'120')
        self.assertEqual(code('41Х'),'41Х')
        self.assertEqual(code('29T'),'29T')
        self.assertIsNone(code('х'))
        self.assertIsNone(money(''))
        self.assertEqual(money('14\xa0985\xa0399\xa0747\xa0688,89'),Decimal('14985399747688.89'))
        self.assertEqual(money(0.0),Decimal('0.00'))
        self.assertEqual(money(-1757.67),Decimal('-1757.67'))
        with self.assertRaises(ValueError):
            code(120.5)

    def test_reference_010(self):
        data=self.read_witness('01.01.2026.zip!00_FO_')
        row=next(x for x in data if x['line_code']=='010')
        self.assertEqual(row['measures']['approved_plan_rub'],Decimal('14694007865335.89'))
        self.assertEqual(row['measures']['executed_total_rub'],Decimal('14319121716683.36'))

    def test_section_four_shifts(self):
        data=self.read_witness('01.01.2026.zip!00_FO_')
        row=next(x for x in data if x['line_code']=='910')
        self.assertEqual(row['source_columns']['executed_total_rub'],'I')
        self.assertEqual(row['measures']['executed_total_rub'],Decimal('69496751937.57'))
        data=self.read_witness('01.01.2026 КФО 4.zip!01_')
        row=next(x for x in data if x['line_code']=='910')
        self.assertNotIn('approved_plan_rub',row['measures'])
        self.assertEqual(row['source_columns']['executed_total_rub'],'H')
        self.assertEqual(row['measures']['executed_total_rub'],Decimal('97465724.53'))

    def test_blank_codes_are_data(self):
        data=self.read_witness('01.01.2026 КФО 4.zip!01_')
        wages=next(x for x in data if x['section']=='2' and x['analytics_code']=='111')
        self.assertIsNone(wages['line_code'])
        total=next(x for x in data if x['line_code']=='200')
        self.assertEqual(total['total_marker'],'х')
        self.assertIsNotNone(total['measures']['executed_total_rub'])

    def test_historical_columns(self):
        data=self.read_witness('Свод_ФО_0503737.zip!0503737-4_9500-54124')
        income=next(x for x in data if x['line_code']=='010')
        self.assertEqual(income['kfo'],'2')
        self.assertEqual(income['source_columns']['approved_plan_rub'],'F')
        self.assertEqual(income['measures']['executed_total_rub'],Decimal('215334231432.10'))
        self.assertEqual(set(x['section'] for x in data),{'1','2','3'})
        data=self.read_witness('FO_0503721_svod_01.01.2019')
        income=next(x for x in data if x['line_code']=='010')
        self.assertEqual(income['source_columns']['financial_result_total_rub'],'J')

    def test_prefixless_balance_and_activity_dimension(self):
        observations=json.loads((ROOT/'results/region-observations.json').read_text())
        names,ids=region_indexes(observations)
        data=self.read_witness('01.01.2026.zip!_01.01.2026_0503730.XLS')
        self.assertIsNone(data[0]['region_code'])
        resolved=resolve(data[0],names,ids)
        self.assertEqual(resolved['region_code'],'01')
        self.assertIsNone(resolved['kfo'])
        self.assertEqual(resolved['okpo'],'00067754')

    def test_archive_guards(self):
        with self.assertRaises(ValueError):
            safe_path(ROOT/'extracted','../../outside')
        original=(ROOT/'raw/ФО_01.01.2026.zip').read_bytes()
        with self.assertRaises(zipfile.BadZipFile):
            zipfile.ZipFile(BytesIO(original[:len(original)//2]))

    def test_text_protocol(self):
        item=next(x for x in self.inventory if x['member'].endswith('!ProtocolFO.txt'))
        parsed=parse_protocol((ROOT/item['local_path']).read_bytes())
        self.assertEqual(parsed['encoding'],'cp1251')
        self.assertEqual(parsed['protocol_date'],'2019-04-30')
        self.assertEqual(parsed['exported_reports'],87)
        self.assertEqual(parsed['form_code'],'0503737')


if __name__=='__main__':
    unittest.main()
