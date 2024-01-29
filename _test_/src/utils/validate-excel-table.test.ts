import { describe, expect, jest, test } from "@jest/globals";
import { validateExcelTableObjectFunction } from "../../../src/utils/validate-excel-table";
import { ExcelTable } from "../../../src/data-model/excel-table";

describe("getColRowBaseOnRefString data tests", () => {
  test("should be function", () => {
    expect(typeof validateExcelTableObjectFunction).toBe("function");
  });
  test("input with special character", () => {
    let spy = jest.spyOn(console, "warn");
    let excelData: any = {
      sheet: [],
      created: "f",
      aaa: "test",
    };
    validateExcelTableObjectFunction(excelData, true, true);
    expect(console.warn).toHaveBeenCalledWith(
      'The Schema Object does not include the "aaa" property.'
    );
    expect(console.warn).toBeCalledTimes(1);
    spy.mockReset();
    excelData = {
      sheet: [],
      created: "f",
      aaa: "test",
      test2: "test",
    };
    validateExcelTableObjectFunction(excelData, true, true);
    expect(console.warn).toHaveBeenCalledWith(
      'The Schema Object does not include the "aaa" property.'
    );
    expect(console.warn).toHaveBeenCalledWith(
      'The Schema Object does not include the "test2" property.'
    );
    expect(console.warn).toBeCalledTimes(2);
    spy.mockReset();
    excelData = {
      sheet: [],
      created: "f",
      aaa: "test",
      numberOfColumn: "28",
      test2: "test",
    };
    validateExcelTableObjectFunction(excelData, false, true);
    expect(console.warn).toHaveBeenCalledWith(
      'The Schema Object does not include the "aaa" property.'
    );
    expect(console.warn).toHaveBeenCalledWith(
      'The Schema Object does not include the "test2" property.'
    );
    expect(console.warn).toBeCalledTimes(3);
  });
});
