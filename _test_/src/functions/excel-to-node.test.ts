/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import { describe, expect, jest, test } from "@jest/globals";
import { excelToNode } from "../../../src";
import { excelToNode as rawExcelToNode } from "../../../src/functions/excel-to-node";
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
      { fetchFunc: callApi },
    ).catch((e: string) => {
      return e;
    });
    expect(extractExcelData).toHaveBeenCalledTimes(1);
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
      } as ReadResult),
    );
    let result = await excelToNode(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true ",
      null,
      null,
      {
        fetchFunc: callApi,
        firstHeader: false,
        returnTableNodes: true,
      },
    ).catch((e: string) => {
      return e;
    });
    expect(extractExcelData).toHaveBeenCalledTimes(1);
    expect(result.length).toBe(2);
    expect((result[0] as HTMLTableElement).querySelector("td")?.innerText).toBe(
      "test value for cell",
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
      } as ReadResult),
    );
    let result = await excelToNode(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true ",
      null,
      null,
      { fetchFunc: callApi, firstHeader: true, returnTableNodes: true },
    ).catch((e: string) => {
      return e;
    });
    expect(extractExcelData).toHaveBeenCalledTimes(1);
    expect(result.length).toBe(2);
    expect((result[0] as HTMLTableElement).querySelector("th")?.innerText).toBe(
      "test value for cell",
    );
  }, 150000);
  test("excelToNode with domQuery", async () => {
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
      } as ReadResult),
    );
    let result = await excelToNode(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true ",
      "body",
      null,
      { fetchFunc: callApi, firstHeader: true },
    ).catch((e: string) => {
      return e;
    });
    let body = document.querySelector("body") as any;    
    expect(extractExcelData).toHaveBeenCalledTimes(1);
    expect(result).toBe("Done");
    expect(body.querySelector("th")?.innerText).toBe("test value for cell");
    body.querySelectorAll("button")[1].click();
    let el = body.querySelector("[data-sheet-activate]");
    expect(el).toBeTruthy();
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
      } as ReadResult),
    );
    let div = document.createElement("div") as any;
    let result = await excelToNode(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true ",
      null,
      div,
      { fetchFunc: callApi, firstHeader:true },
    ).catch((e: string) => {
      return e;
    });
    expect(extractExcelData).toHaveBeenCalledTimes(1);
    expect(result).toBe("Done");
    expect(div.querySelector("th")?.innerText).toBe("test value for cell");
    div.querySelectorAll("button")[1].click();
    let el = div.querySelector("[data-sheet-activate]");
    expect(el).toBeTruthy();
  }, 150000);
  test("excelToNode raw defaults and button fallback", async () => {
    jest.resetAllMocks();
    const map = new Map<string, string | undefined>();
    map.set("sheet1", undefined);
    mockedExtractExcelData.mockReturnValue(
      Promise.resolve({
        data: {
          sheet1: [["single value"]],
        },
        sheetName: map.entries(),
        maxLengthOfColumn: {},
        sheetNameObject: {
          sheet1: "sheet1",
        },
      } as ReadResult),
    );
    const container = document.createElement("div") as HTMLDivElement;
    const result = await rawExcelToNode(
      "https://example.com/test.xlsx",
      null,
      container,
      callApi,
    );

    expect(extractExcelData).toHaveBeenCalledTimes(1);
    expect(result).toBe("Done");
    expect(container.querySelector("button")?.innerText).toBe("sheet1");
    expect(container.querySelector("th")?.innerText).toBe("single value");

    const button = container.querySelector("button") as HTMLButtonElement;
    button.setAttribute("data-sheet", "missing-sheet");
    button.click();
    expect(container.querySelector("[data-sheet-activate]")).toBeTruthy();
  }, 150000);
});
