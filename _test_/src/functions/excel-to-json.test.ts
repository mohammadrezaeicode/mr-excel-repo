/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import { describe, expect, jest, test } from "@jest/globals";
import { excelToJson } from "../../../src/functions/excel-to-json";
import { callApi } from "../utils/call-api";
import { extractExcelData } from "../../../src/utils/read-utils";
import { ReadResult } from "../../../src/data-model/excel-table";
jest.mock("../../../src/utils/read-utils.ts");
const mockedExtractExcelData = <jest.Mock<typeof extractExcelData>>(
  extractExcelData
);
describe("excel-to-node data tests", () => {
  test("excelToJson", async () => {
    jest.resetAllMocks();
    const map = new Map<string, string>();
    map.set("sheet1", "Sheet1");
    map.set("sheet2", "Sheet2");
    mockedExtractExcelData.mockReturnValue(
      Promise.resolve({
        data: {
          Sheet1: [
            ["test value for cell", "3"],
            ,
            ,
            ["7", "6", "5", "4"],
            ,
            ,
            [, , , , , "h"],
          ],
          Sheet2: [, , ["a"], , , [, , "e"]],
        },
        sheetName: map.entries(),
        sheetNameObject: {
          sheet1: "Sheet1",
          sheet2: "Sheet2",
        },
        maxLengthOfColumn: {
          Sheet1: 5,
          Sheet2: 2,
        },
      } as ReadResult)
    );
    let result = await excelToJson(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true"
    ).catch((e: string) => {
      return e;
    });
    expect(extractExcelData).toBeCalledTimes(1);
    expect(result).toEqual({
      Sheet1: [
        {},
        {
          "3": "6",
          property3: "5",
          property4: "4",
          "test value for cell": "7",
        },
        {
          property6: "h",
        },
      ],
      Sheet2: [
        {},
        {
          property3: "e",
        },
      ],
    });
  }, 150000);
  test("excelToJson", async () => {
    jest.resetAllMocks();
    const map = new Map<string, string>();
    map.set("sheet1", "Sheet1");
    map.set("sheet2", "Sheet2");
    mockedExtractExcelData.mockReturnValue(
      Promise.resolve({
        data: {
          Sheet1: [
            ["test value for cell", "3"],
            ,
            ,
            ["7", "6", "5", "4"],
            ,
            ,
            [, , , , , "h"],
          ],
          Sheet2: [, , ["a"], , , [, , "e"]],
        },
        sheetName: map.entries(),
        sheetNameObject: {
          sheet1: "Sheet1",
          sheet2: "Sheet2",
        },
        maxLengthOfColumn: {
          Sheet1: 5,
          Sheet2: 2,
        },
      } as ReadResult)
    );
    let result = await excelToJson(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true",
      undefined,
      false,
      "random"
    ).catch((e: string) => {
      return e;
    });
    expect(extractExcelData).toBeCalledTimes(1);
    expect(result).toEqual({
      Sheet1: [
        { random2: "3", random1: "test value for cell" },
        {
          random2: "6",
          random3: "5",
          random4: "4",
          random1: "7",
        },
        {
          random6: "h",
        },
      ],
      Sheet2: [
        { random1: "a" },
        {
          random3: "e",
        },
      ],
    });
  }, 150000);
});
