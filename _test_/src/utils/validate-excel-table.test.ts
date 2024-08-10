import { describe, expect, jest, test } from "@jest/globals";
import {
  exportedForTesting,
  validateExcelTableObjectFunction,
} from "../../../src/functions/validate-excel-table";
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
    spy.mockReset();
    excelData = {
      sheet: [
        {
          merges: ["AS:Sq"],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toEqual([
        'The AS:Sq reference is not valid in the "merges" property.',
      ]);
    }
    excelData = {
      sheet: [
        {
          merges: "test",
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('The Type of The "merges" is not valid');
    }
    spy.mockReset();
    excelData = {
      sheet: [
        {
          merges: ["A1:B3"],
        },
      ],
    };

    validateExcelTableObjectFunction(excelData, false, true);
    expect(console.warn).toBeCalledTimes(0);
    spy.mockReset();
    excelData = {
      sheet: [
        {
          sortAndFilter: {
            ref: "A1:A6",
          },
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('"mode" is required in sortAndFilter');
    }
    excelData = {
      sheet: [
        {
          sortAndFilter: {
            mode: "random",
            ref: "A1:A6",
          },
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('"mode" is not valid');
    }
    excelData = {
      sheet: [
        {
          sortAndFilter: {
            mode: "ref",
            ref: "A0:",
          },
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('"ref" is not valid');
    }
    excelData = {
      sheet: [
        {
          sortAndFilter: {
            mode: "ref",
            ref: "",
          },
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('"ref" is must need be defined.');
    }
    spy.mockReset();
    excelData = {
      sheet: [
        {
          sortAndFilter: {
            mode: "ref",
            ref: "A2:A4",
          },
        },
      ],
    };

    validateExcelTableObjectFunction(excelData, false, true);
    expect(console.warn).toBeCalledTimes(0);
    excelData = {
      sheet: [
        {
          protectionOption: {
            formatCells: "",
          },
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('value of "formatCells" is not valid');
    }
    excelData = {
      sheet: [
        {
          protectionOption: {
            formatCell: "",
          },
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('"formatCell" is not valid.');
    }
    spy.mockReset();
    excelData = {
      sheet: [
        {
          protectionOption: {
            formatCells: "1",
          },
        },
      ],
    };
    validateExcelTableObjectFunction(excelData, false, true);
    expect(console.warn).toBeCalledTimes(0);
    excelData = {
      sheet: [
        {
          checkbox: {},
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('The value of "checkbox" should be an array.');
    }
    excelData = {
      sheet: [
        {
          checkbox: [{ col: 1 }],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('"checkbox" is not complete');
    }
    spy.mockReset();
    excelData = {
      sheet: [
        {
          checkbox: [{ col: 1, row: 1 }],
        },
      ],
    };
    validateExcelTableObjectFunction(excelData, false, true);
    expect(console.warn).toBeCalledTimes(0);
    excelData = {
      sheet: [
        {
          mapSheetDataOption: {
            random: "test",
          },
        },
      ],
    };
    validateExcelTableObjectFunction(excelData, false, true);

    expect(console.warn).toHaveBeenCalledWith(
      'The Schema of mapSheetDataOption does not include the "random" property.'
    );
    expect(console.warn).toBeCalledTimes(1);
    spy.mockReset();
    excelData = {
      sheet: [
        {
          mapSheetDataOption: {
            outlineLevel: "test",
          },
        },
      ],
    };
    validateExcelTableObjectFunction(excelData, false, true);
    expect(console.warn).toBeCalledTimes(0);
    excelData = {
      sheet: [
        {
          images: {},
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('The value of "images" should be an array.');
    }
    excelData = {
      sheet: [
        {
          images: [
            {
              type: "two",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('"src" property is required.');
    }
    excelData = {
      sheet: [
        {
          images: [
            {
              src: "xxx",
              type: "two",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('"from" property is required.');
    }
    excelData = {
      sheet: [
        {
          images: [
            {
              src: "xxx",
              type: "two",
              from: "x",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('value of "from" is not valid.');
    }
    excelData = {
      sheet: [
        {
          images: [
            {
              src: "xxx",
              type: "two",
              from: "x",
              to: "random",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('value of "to" is not valid.');
    }
    excelData = {
      sheet: [
        {
          images: [
            {
              src: "xxx",
              type: "three",
              from: "A1",
              to: "A2",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe(
        'Type of "type" is not valid in the "images" property.'
      );
    }
    excelData = {
      sheet: [
        {
          images: [
            {
              src: "xxx",
              type: "two",
              from: "A2",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe(
        '"to" property is empty. for "two" type "to" property is required.'
      );
    }
    excelData = {
      sheet: [
        {
          images: [
            {
              src: "xxx",
              type: "two",
              from: "A2",
              to: "",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe(
        '"to" property is empty. for "two" type "to" property is required.'
      );
    }
    spy.mockReset();
    excelData = {
      sheet: [
        {
          images: [
            {
              src: "xxx",
              type: "two",
              from: "A2",
              to: "A3",
            },
          ],
        },
      ],
    };
    validateExcelTableObjectFunction(excelData, false, true);
    expect(console.warn).toBeCalledTimes(0);
    excelData = {
      sheet: [
        {
          viewOption: {
            type: "xf",
          },
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe('Type of "type" property is not valid');
    }
  });
  test("checkSheetValidWithTwoRef", () => {
    expect(exportedForTesting.checkSheetValidWithTwoRef("")).toBeFalsy();
    expect(exportedForTesting.checkSheetValidWithTwoRef("A2")).toBeFalsy();
    expect(exportedForTesting.checkSheetValidWithTwoRef("A2:A")).toBeFalsy();
    expect(exportedForTesting.checkSheetValidWithTwoRef("2A:A2")).toBeFalsy();
    expect(exportedForTesting.checkSheetValidWithTwoRef(":A2")).toBeFalsy();
    expect(
      exportedForTesting.checkSheetValidWithTwoRef("A231:A12")
    ).toBeTruthy();
    expect(
      exportedForTesting.checkSheetValidWithTwoRef("AAAA231:A12")
    ).toBeTruthy();
    expect(exportedForTesting.checkSheetValidWithTwoRef("A2:A2")).toBeTruthy();
  });
  test("checkSheetValidWithOneRef", () => {
    expect(exportedForTesting.checkSheetValidWithOneRef("")).toBeFalsy();
    expect(exportedForTesting.checkSheetValidWithOneRef("A2:A")).toBeFalsy();
    expect(exportedForTesting.checkSheetValidWithOneRef("2A:A2")).toBeFalsy();
    expect(exportedForTesting.checkSheetValidWithOneRef(":A2")).toBeFalsy();
    expect(
      exportedForTesting.checkSheetValidWithOneRef("A231:A12")
    ).toBeFalsy();
    expect(
      exportedForTesting.checkSheetValidWithOneRef("AAAA231:A12")
    ).toBeFalsy();
    expect(exportedForTesting.checkSheetValidWithOneRef("A2:A2")).toBeFalsy();
    expect(exportedForTesting.checkSheetValidWithOneRef("A")).toBeFalsy();
    expect(exportedForTesting.checkSheetValidWithOneRef("A2")).toBeTruthy();
    expect(exportedForTesting.checkSheetValidWithOneRef("AA2")).toBeTruthy();
  });
  test("conditionalFormatting", () => {
    let spy = jest.spyOn(console, "warn");
    let excelData: any = {
      sheet: [
        {
          conditionalFormatting: [
            {
              type: "random",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toEqual('Property "type" is not valid.');
    }
    excelData = {
      sheet: [
        {
          conditionalFormatting: [
            {
              type: "cells",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toEqual({
        record: {
          type: "cells",
        },
        error:
          "The object is not complete; you need to fill in the values for operator, start, end and value.",
      });
    }
    excelData = {
      sheet: [
        {
          conditionalFormatting: [
            {
              type: "cells",
              operator: "random",
              start: "A1",
              end: "B2",
              value: 50,
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toEqual({
        record: {
          type: "cells",
          operator: "random",
          start: "A1",
          end: "B2",
          value: 50,
        },
        error: "The operator is not valid.",
      });
    }
    excelData = {
      sheet: [
        {
          conditionalFormatting: [
            {
              type: "top",
              operator: "random",
              start: "A1",
              end: "B2",
              value: 50,
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toEqual({
        record: {
          type: "top",
          operator: "random",
          start: "A1",
          end: "B2",
          value: 50,
        },
        error: "The operator is not valid.",
      });
    }
    excelData = {
      sheet: [
        {
          conditionalFormatting: [
            {
              type: "top",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toEqual({
        record: {
          type: "top",
        },
        error:
          "The object is not complete; you need to fill in the values for start, end and value.",
      });
    }

    excelData = {
      sheet: [
        {
          conditionalFormatting: [
            {
              type: "iconSet",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toEqual({
        record: {
          type: "iconSet",
        },
        error:
          "The object is not complete; you need to fill in the values for operator, start and end",
      });
    }

    excelData = {
      sheet: [
        {
          conditionalFormatting: [
            {
              type: "colorScale",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toEqual({
        record: {
          type: "colorScale",
        },
        error:
          "The object is not complete; you need to fill in the values for start and end",
      });
    }

    excelData = {
      sheet: [
        {
          conditionalFormatting: [
            {
              type: "dataBar",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toEqual({
        record: {
          type: "dataBar",
        },
        error:
          "The object is not complete; you need to fill in the values for start and end",
      });
    }

    excelData = {
      sheet: [
        {
          conditionalFormatting: [
            {
              type: "dataBar",
              start: "A1",
              end: "A2",
            },
          ],
        },
      ],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(true).toBeTruthy();
    } catch (error) {
      expect(false).toBeTruthy();
    }
  });
  test("style", () => {
    let spy = jest.spyOn(console, "warn");
    let excelData: any = {
      styles: {
        test: {
          alignment: {
            rtl: true,
            ltr: true,
            readingOrder: "1",
          },
        },
      },
      sheet: [],
    };
    validateExcelTableObjectFunction(excelData, false, true);
    expect(console.warn).toBeCalledTimes(2);
    expect(console.warn).toBeCalledWith(
      "Alignment-rtl and ltr cannot be used together."
    );
    expect(console.warn).toBeCalledWith(
      "Alignment-readingOrder cannot be used with rtl or ltr."
    );
    spy.mockReset();
    excelData = {
      styles: {
        test: {
          alignment: {
            rtl: true,
          },
        },
      },
      sheet: [],
    };
    validateExcelTableObjectFunction(excelData, false, true);
    expect(console.warn).toBeCalledTimes(0);
    excelData = {
      styles: {
        test: {
          border: {
            rtl: true,
          },
        },
      },
      sheet: [],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe(
        'border-The type of border is not valid. Valid options include "full," "top," "left," "right," and "bottom."'
      );
    }
    excelData = {
      styles: {
        test: {
          border: {
            full: {},
          },
        },
      },
      sheet: [],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe("border-The border must have a color.");
    }
    excelData = {
      styles: {
        test: {
          border: {
            full: {
              color: "#f123",
            },
          },
        },
      },
      sheet: [],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe("border-The border needs a style.");
    }

    excelData = {
      styles: {
        test: {
          border: {
            full: {
              color: "#f123",
              style: "random",
            },
          },
        },
      },
      sheet: [],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe("border-An invalid style has been used.");
    }

    excelData = {
      styles: {
        test: {
          border: {
            full: {
              color: "#f123",
              style: "thin",
            },
          },
        },
      },
      sheet: [],
    };
    try {
      validateExcelTableObjectFunction(excelData, false, true);
      expect(true).toBeTruthy();
    } catch (error) {
      expect(false).toBeTruthy();
    }
  });
});
