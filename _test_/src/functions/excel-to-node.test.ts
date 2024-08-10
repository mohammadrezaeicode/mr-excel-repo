/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import { describe, expect, jest, test } from "@jest/globals";
import { excelToNode } from "../../../src/functions/excel-to-node";
import { callApi } from "../utils/call-api";
import { extractExcelData } from "../../../src/utils/read-utils";
import { ReadResult } from "../../../src/data-model/excel-table";
jest.mock("../../../src/utils/read-utils.ts");
const mockedExtractExcelData = <jest.Mock<typeof extractExcelData>>(
  extractExcelData
);
describe("excel-to-node data tests", () => {
  test("excelToNode", async () => {
    mockedExtractExcelData.mockReturnValue(Promise.resolve({} as any));
    let result = await excelToNode(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true ",
      null,
      null,
      callApi
    ).catch((e: string) => {
      return e;
    });
    expect(extractExcelData).toBeCalledTimes(1);
    expect(result).toBe("Container Node not found");
  }, 150000);
  test("excelToNode", async () => {
    jest.resetAllMocks();
    const map = new Map<string, string>();
    map.set("sheet1", "Sheet1");
    map.set("sheet2", "Sheet2");
    mockedExtractExcelData.mockReturnValue(
      Promise.resolve({
        data: {
          Sheet1: [
            ["test value for cell", "3"],
            null,
            null,
            ["7", "6", "5", "4"],
            null,
            null,
            [null, null, null, null, null, "h"],
          ],
          Sheet2: [null, null, ["a"], null, null, [null, null, "e"]],
        },
        sheetName: map.entries(),
        maxLengthOfColumn: {
          Sheet1: 5,
          Sheet2: 2,
        },
        sheetNameObject: {
          sheet1: "Sheet1",
          sheet2: "Sheet2",
        },
      } as ReadResult)
    );
    let result = await excelToNode(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true ",
      null,
      null,
      callApi,
      false,
      true
    ).catch((e: string) => {
      return e;
    });
    expect(extractExcelData).toBeCalledTimes(1);
    expect(result.length).toBe(2);
    expect((result[0] as HTMLTableElement).querySelector("td")?.innerText).toBe(
      "test value for cell"
    );
  }, 150000);
  test("excelToNode", async () => {
    jest.resetAllMocks();
    const map = new Map<string, string>();
    map.set("sheet1", "Sheet1");
    map.set("sheet2", "Sheet2");
    mockedExtractExcelData.mockReturnValue(
      Promise.resolve({
        data: {
          Sheet1: [
            ["test value for cell", "3"],
            null,
            null,
            ["7", "6", "5", "4"],
            null,
            null,
            [null, null, null, null, null, "h"],
          ],
          Sheet2: [null, null, ["a"], null, null, [null, null, "e"]],
        },
        sheetName: map.entries(),
        maxLengthOfColumn: {
          Sheet1: 5,
          Sheet2: 2,
        },
        sheetNameObject: {
          sheet1: "Sheet1",
          sheet2: "Sheet2",
        },
      } as ReadResult)
    );
    let result = await excelToNode(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true ",
      null,
      null,
      callApi,
      true,
      true
    ).catch((e: string) => {
      return e;
    });
    expect(extractExcelData).toBeCalledTimes(1);
    expect(result.length).toBe(2);
    expect((result[0] as HTMLTableElement).querySelector("th")?.innerText).toBe(
      "test value for cell"
    );
  }, 150000);
  test("excelToNode", async () => {
    jest.resetAllMocks();
    const map = new Map<string, string>();
    map.set("sheet1", "Sheet1");
    map.set("sheet2", "Sheet2");
    mockedExtractExcelData.mockReturnValue(
      Promise.resolve({
        data: {
          Sheet1: [
            ["test value for cell", "3"],
            null,
            null,
            ["7", "6", "5", "4"],
            null,
            null,
            [null, null, null, null, null, "h"],
          ],
          Sheet2: [null, null, ["a"], null, null, [null, null, "e"]],
        },
        sheetName: map.entries(),
        maxLengthOfColumn: {
          Sheet1: 5,
          Sheet2: 2,
        },
        sheetNameObject: {
          sheet1: "Sheet1",
          sheet2: "Sheet2",
        },
      } as ReadResult)
    );
    let div = document.createElement("div");
    let result = await excelToNode(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true ",
      null,
      div,
      callApi,
      true
    ).catch((e: string) => {
      return e;
    });
    expect(extractExcelData).toBeCalledTimes(1);
    expect(result).toBe("Done");
    expect(div.querySelector("th")?.innerText).toBe("test value for cell");
    div.querySelectorAll("button")[1].click();
    let el = div.querySelector("[data-sheet-activate]");
    expect(el).toBeTruthy();
  }, 150000);
});
