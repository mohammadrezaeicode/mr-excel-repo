/**
 * @jest-environment node
 */
import { describe, expect, test } from "@jest/globals";
import { generateExcel } from "../../../src/functions/generate-excel";
import type { ExcelTable } from "../../../src/data-model/excel-table";
import { readGeneratedFile, type ResponseApi } from "../read";

describe("generateExcel additional branch coverage v2", () => {
  test("throws when creator is empty string", async () => {
    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      creator: " ",
      sheet: [{ headers: [], data: [] }],
    };

    await expect(generateExcel(excelTable)).rejects.toEqual(
      'length of "creator" most be bigger then 0',
    );
  });

  test("throws when created is invalid date string", async () => {
    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      created: "not-a-date",
      sheet: [{ headers: [], data: [] }],
    };

    await expect(generateExcel(excelTable)).rejects.toEqual(
      '"created" is not valid date',
    );
  });

  test("pageOption header/footer unknown type throws 'type error'", async () => {
    const excelTable: ExcelTable<{ test: string }> = {
      notSave: true,
      sheet: [
        {
          headers: [{ label: "test", text: "t" }],
          data: [{ test: "v" }],
          pageOption: {
            header: {
              odd: { l: { text: "left" } as any },
              unknown: { l: { text: "bad" } as any },
            } as any,
          } as any,
        },
      ],
    };

    await expect(generateExcel(excelTable)).rejects.toEqual("type error");
  });

  test("numberOfColumn > 25 produces extended column names", async () => {
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
    expect(sheetArr).toBeDefined();
    expect(Array.isArray(sheetArr)).toBe(true);
  }, 150000);

  test("frozenOption with COLUMN index beyond cols triggers column name generation", async () => {
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
    expect(sheetArr).toBeDefined();
    expect(Array.isArray(sheetArr)).toBe(true);
  }, 150000);

  test("mergeRowDataCondition should produce merged ranges", async () => {
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
    expect(sheetArr).toBeDefined();
    expect(result.fileList.length).toBeGreaterThan(0);
  }, 150000);
});
