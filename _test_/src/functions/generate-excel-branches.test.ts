/**
 * @jest-environment node
 */
import { describe, expect, jest, test } from "@jest/globals";
import { generateExcel } from "../../../src/functions/generate-excel";
import { readGeneratedFile, type ResponseApi } from "../read";
import type { ExcelTable } from "../../../src/data-model/excel-table";

jest.setTimeout(150000);
describe("generateExcel branch coverage tests", () => {

  test("should process headerFooter styles and conditional formatting", async () => {
    const excelTable: ExcelTable<{ test: string }> = {
      backend: true,
      notSave: true,
      sheet: [
        {
          headers: [{ label: "test", text: "test" }],
          data: [{ test: "value" }],
        },
      ],
      styles: {
        titleStyle: {
          type: "headerFooter",
          fontFamily: "Arial",
          bold: true,
          italic: true,
          size: 14,
          doubleUnderline: true,
          color: "#00ff00",
        },
        cfStyle: {
          type: "conditionalFormatting",
          color: "#123456",
          backgroundColor: "#abcdef",
        },
      },
      activateConditionalFormatting: true,
    };

    const res = await generateExcel(excelTable);
    const result = (await readGeneratedFile(res, true)) as ResponseApi;
    expect(result.styleValue).toContain('<dxfs count="2" >');
    expect(result.styleValue).toContain('<color rgb="123456"/>');
    expect(result.styleValue).toContain('bgColor rgb="abcdef"');
  });

  test("should render advanced cell styles with alignment, border and format", async () => {
    const excelTable: ExcelTable<{ test: string }> = {
      backend: true,
      notSave: true,
      sheet: [
        {
          headers: [{ label: "test", text: "test" }],
          data: [{ test: "value" }],
        },
      ],
      styles: {
        customCell: {
          alignment: { rtl: true, horizontal: "center" },
          border: { full: { style: "thin", color: "#000000" } },
          backgroundColor: "#112233",
          color: "#334455",
          fontFamily: "Calibri",
          size: 12,
          bold: true,
          italic: true,
          underline: true,
          format: "yen",
        },
      },
    };

    const res = await generateExcel(excelTable);
    const result = (await readGeneratedFile(res, true)) as ResponseApi;
    expect(result.styleValue).toContain('<fgColor rgb="112233" />');
    expect(result.styleValue).toContain('color rgb="334455"');
    expect(result.styleValue).toContain('<left style="thin">');
    expect(result.styleValue).toContain('<right style="thin">');
    expect(result.styleValue).toContain('<top style="thin">');
    expect(result.styleValue).toContain('<bottom style="thin">');
    expect(result.styleValue).toContain('name val="Calibri"');
    expect(result.styleValue).toContain('numFmtId="160"');
  });
});
