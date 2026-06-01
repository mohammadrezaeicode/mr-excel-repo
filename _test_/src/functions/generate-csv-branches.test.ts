/**
 * @jest-environment jsdom
 */
import { describe, expect, test, jest, beforeEach } from "@jest/globals";
import { generateCSV } from "../../../src/functions/generate-csv";
import type { ExcelTable } from "../../../src/data-model/excel-table";

jest.mock("file-saver");
const { saveAs } = require("file-saver");

type DataModelAB = { a: number; b: string };

describe("generateCSV branch coverage - additional", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("generateCSV with withoutHeader flag", async () => {
    const result = await generateCSV({
      backend: true,
      sheet: [
        {
          withoutHeader: true,
          data: [
            { a: 1, b: "b1" },
            { a: 2, b: "b2" },
          ],
          headers: [
            { label: "a", text: "a" },
            { label: "b", text: "b" },
          ],
        },
      ],
    } as ExcelTable<DataModelAB>);
    expect(result).toEqual(["1,b1\n2,b2\n"]);
  });

  test("generateCSV skips undefined/null data elements", async () => {
    const result = await generateCSV({
      backend: true,
      sheet: [
        {
          data: [
            { a: 1, b: "b1" },
            null as any,
            undefined as any,
            { a: 2, b: "b2" },
          ] as any,
          headers: [
            { label: "a", text: "a" },
            { label: "b", text: "b" },
          ],
        },
      ],
    } as ExcelTable<DataModelAB>);
    expect(result).toEqual(["a,b\n1,b1\n2,b2\n"]);
  });

  test("generateCSV with special characters (quotes and commas)", async () => {
    const result = await generateCSV({
      backend: true,
      sheet: [
        {
          data: [
            { a: 1, b: '"quoted"' },
            { a: 2, b: "has,comma" },
            { a: 3, b: 'has"and,both' },
          ],
          headers: [
            { label: "a", text: "a" },
            { label: "b", text: "b" },
          ],
        },
      ],
    } as ExcelTable<DataModelAB>);
    expect(result).toEqual([
      'a,b\n1,"""quoted"""\n2,"has,comma"\n3,"has""and,both"\n',
    ]);
  });

  test("generateCSV with multiple sheets", async () => {
    const result = await generateCSV({
      backend: true,
      sheet: [
        {
          data: [{ a: 1, b: "sheet1" }],
          headers: [
            { label: "a", text: "a" },
            { label: "b", text: "b" },
          ],
        },
        {
          data: [{ a: 2, b: "sheet2" }],
          headers: [
            { label: "a", text: "a" },
            { label: "b", text: "b" },
          ],
        },
      ],
    } as ExcelTable<DataModelAB>);
    expect(result).toEqual(["a,b\n1,sheet1\n", "a,b\n2,sheet2\n"]);
  });

  test("generateCSV with null/undefined values in data", async () => {
    const result = await generateCSV({
      backend: true,
      sheet: [
        {
          data: [
            { a: null as any, b: undefined as any },
            { a: 1, b: "test" },
          ],
          headers: [
            { label: "a", text: "a" },
            { label: "b", text: "b" },
          ],
        },
      ],
    } as ExcelTable<DataModelAB>);
    expect(result).toEqual(["a,b\n,\n1,test\n"]);
  });

  test("generateCSV frontend mode with fileName", async () => {
    const result = await generateCSV({
      backend: false,
      fileName: "custom-export",
      sheet: [
        {
          data: [{ a: 1, b: "test" }],
          headers: [
            { label: "a", text: "a" },
            { label: "b", text: "b" },
          ],
        },
      ],
    } as ExcelTable<DataModelAB>);
    expect(saveAs).toHaveBeenCalled();
    expect(result).toBe("done");
  }, 30000);
});
