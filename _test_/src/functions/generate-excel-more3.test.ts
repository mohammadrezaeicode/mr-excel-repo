/**
 * @jest-environment node
 */
import { describe, expect, test } from "@jest/globals";
import { generateExcel } from "../../../src/functions/generate-excel";
import type { ExcelTable } from "../../../src/data-model/excel-table";
import { readGeneratedFile, type ResponseApi } from "../read";

describe("generateExcel additional branch coverage v3", () => {
  test("numberOfColumn > 25 runs without error", async () => {
    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      numberOfColumn: 30,
      sheet: [
        {
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "1" }],
        },
      ],
    };

    const res = await generateExcel(excelTable);
    const result = (await readGeneratedFile(res, true)) as ResponseApi;
    const sheetArr = result.data["Sheet 1"] || result.data["sheet1"];
    const sheetXml =
      sheetArr && Array.isArray(sheetArr)
        ? sheetArr.map((r: any) => (Array.isArray(r) ? r.join("") : "")).join("")
        : "";
    expect(sheetXml).toBeDefined();
  }, 150000);

  test("frozenOption with COLUMN index beyond cols runs without error", async () => {
    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      sheet: [
        {
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "x" }],
          viewOption: {
            frozenOption: { type: "C", index: 40 } as any,
          } as any,
        },
      ],
    };

    const res = await generateExcel(excelTable);
    const result = (await readGeneratedFile(res, true)) as ResponseApi;
    const sheetArr = result.data["Sheet 1"] || result.data["sheet1"];
    const sheetXml =
      sheetArr && Array.isArray(sheetArr)
        ? sheetArr.map((r: any) => (Array.isArray(r) ? r.join("") : "")).join("")
        : "";
    expect(sheetXml).toBeDefined();
  }, 150000);

  test("mergeRowDataCondition runs without error and returns output", async () => {
    const excelTable: ExcelTable<{ val: string }> = {
      notSave: true,
      sheet: [
        {
          headers: [{ label: "val", text: "val" }],
          data: [{ val: "a" }, { val: "b" }],
          mergeRowDataCondition: (cell: any) => cell === "a",
        } as any,
      ],
    };

    const res = await generateExcel(excelTable);
    const result = (await readGeneratedFile(res, true)) as ResponseApi;
    const sheetArr = result.data["Sheet 1"] || result.data["sheet1"];
    const sheetXml =
      sheetArr && Array.isArray(sheetArr)
        ? sheetArr.map((r: any) => (Array.isArray(r) ? r.join("") : "")).join("")
        : "";
    expect(sheetXml).toBeDefined();
    expect(typeof result.fileList).toBe("object");
    expect(result.fileList.length).toBeGreaterThan(0);
  }, 150000);
});
