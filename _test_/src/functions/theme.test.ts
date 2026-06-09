import { describe, expect, test } from "@jest/globals";
import {
  themeGenerator,
  exportedForTesting,
} from "../../../src/functions/theme";
import { Data, ExcelTable, Header } from "../../../src/data-model/excel-table";

describe("index function tests", () => {
  test("generate should be exist", () => {
    expect(typeof themeGenerator).toBe("function");
  });
  test("titleCase", () => {
    expect(exportedForTesting.titleCase("ABC_FD-12")).toBe("Abc Fd-12");
    expect(exportedForTesting.titleCase("abc_fd-12")).toBe("abc fd-12");
  });
  test("createHeaderBaseOnObject", () => {
    expect(
      exportedForTesting.createHeaderBaseOnObject(
        {
          a: "a",
          b: "b",
        },
        [],
      ),
    ).toStrictEqual([
      {
        label: "a",
        text: "A",
      },
      {
        label: "b",
        text: "B",
      },
    ]);
    expect(
      exportedForTesting.createHeaderBaseOnObject(
        {
          a: "a",
          b: "b",
        },
        ["a"],
      ),
    ).toStrictEqual([
      {
        label: "b",
        text: "B",
      },
    ]);
  });
  test("themeBaseGenerate", () => {
    let result: ExcelTable<{ a: number; b: number }> = themeGenerator<{
      a: number;
      b: number;
    }>([{ a: 1, b: 23 }]);
    let expectedResult: ExcelTable<{ a: number; b: number }> = {
      fileName: "MR-Excel",
      styles: {
        themeStyleHeader: {
          backgroundColor: "#393E46",
          color: "#EEEEEE",
        },
        themeStyleBody: {
          backgroundColor: "#EEEEEE",
          color: "#393E46",
        },
      },
      sheet: [
        {
          styleCellCondition: (
            _data,
            _object,
            _rowIndex,
            _colIndex,
            fromHeader,
            _styleKeys,
          ) => {
            if (fromHeader) {
              return "themeStyleHeader";
            } else {
              return "themeStyleBody";
            }
          },
          headers: [
            {
              label: "a",
              text: "A",
            },
            {
              label: "b",
              text: "B",
            },
          ],
          data: [
            {
              a: 1,
              b: 23,
            },
          ],
        },
      ],
    };
    Object.keys(result).forEach((key: string) => {
      const keyStr = key as keyof object;
      if (key != "sheet") {
        expect(result[keyStr]).toEqual(expectedResult[keyStr]);
      } else {
        result.sheet.forEach((sh) => {
          expect(sh.data).toEqual(expectedResult.sheet[0]!.data);
          expect(sh.headers).toEqual(expectedResult.sheet[0]!.headers);
          expect(sh.styleCellCondition!("", {} as any, 1, 1, true, [])).toBe(
            "themeStyleHeader",
          );
          expect(sh.styleCellCondition!("", {} as any, 1, 1, false, [])).toBe(
            "themeStyleBody",
          );
        });
      }
    });
  });
  test("themeBaseGenerate 2", () => {
    let result = themeGenerator([[{ a: 1, b: 23 }]], {
      headerBackgroundColor: "#123456",
      rowBackgroundColor: "#fedcba",
    });
    let expectedResult = {
      styles: {
        themeStyleHeader: {
          backgroundColor: "#123456",
          color: "rgb(255,255,255)",
        },
        themeStyleBody: {
          backgroundColor: "#fedcba",
          color: "rgb(0,0,0)",
        },
      },
      sheet: [
        {
          styleCellCondition: (
            _data: Header | string | number | undefined,
            _object: Header | Data,
            _rowIndex: number,
            _colIndex: number,
            fromHeader: boolean,
            _styleKeys: string[],
          ) => {
            if (fromHeader) {
              return "themeStyleHeader";
            } else {
              return "themeStyleBody";
            }
          },
          headers: [
            {
              label: "a",
              text: "A",
            },
            {
              label: "b",
              text: "B",
            },
          ],
          data: [
            {
              a: 1,
              b: 23,
            },
          ],
        },
      ],
    };
    Object.keys(result).forEach((key: string) => {
      const keyStr = key as keyof object;
      if (key != "sheet") {
        expect(result[keyStr]).toEqual(expectedResult[keyStr]);
      } else {
        result.sheet.forEach((sh) => {
          expect(sh.data).toEqual(expectedResult.sheet[0]!.data);
          expect(sh.headers).toEqual(expectedResult.sheet[0]!.headers);
          expect(sh.styleCellCondition!("", {} as any, 1, 1, true, [])).toBe(
            "themeStyleHeader",
          );
          expect(sh.styleCellCondition!("", {} as any, 1, 1, false, [])).toBe(
            "themeStyleBody",
          );
        });
      }
    });
  });
  test("themeBaseGenerate error", () => {
    try {
      themeGenerator("" as any);
    } catch (e) {
      expect(e).toBe("typeof Object should be ExcelTable");
    }
  });
  test("themBaseGenerate filterKeys", () => {
    let result: ExcelTable<{ a: number; b: number; c: string }> =
      themeGenerator<{
        a: number;
        b: number;
        c: string;
      }>([{ a: 1, b: 23, c: "123" }], {
        filterKeys: ["c"],
      });
    let expectedResult: ExcelTable<{ a: number; b: number; c: string }> = {
      fileName: "MR-Excel",
      styles: {
        themeStyleHeader: {
          backgroundColor: "#393E46",
          color: "rgb(255,255,255)",
        },
        themeStyleBody: {
          backgroundColor: "#EEEEEE",
          color: "rgb(0,0,0)",
        },
      },
      sheet: [
        {
          styleCellCondition: (
            _data,
            _object,
            _rowIndex,
            _colIndex,
            fromHeader,
            _styleKeys,
          ) => {
            if (fromHeader) {
              return "themeStyleHeader";
            } else {
              return "themeStyleBody";
            }
          },
          headers: [
            {
              label: "a",
              text: "A",
            },
            {
              label: "b",
              text: "B",
            },
          ],
          data: [
            {
              a: 1,
              b: 23,
              c: "123",
            },
          ],
        },
      ],
    };
    Object.keys(result).forEach((key: string) => {
      const keyStr = key as keyof object;
      if (key != "sheet") {
        expect(result[keyStr]).toEqual(expectedResult[keyStr]);
      } else {
        result.sheet.forEach((sh) => {
          expect(sh.data).toEqual(expectedResult.sheet[0]!.data);
          expect(sh.headers).toEqual(expectedResult.sheet[0]!.headers);
          expect(sh.styleCellCondition!("", {} as any, 1, 1, true, [])).toBe(
            "themeStyleHeader",
          );
          expect(sh.styleCellCondition!("", {} as any, 1, 1, false, [])).toBe(
            "themeStyleBody",
          );
        });
      }
    });
  });
  test("themBaseGenerate null option", () => {
    let result: ExcelTable<{ a: number; b: number; c: string }> =
      themeGenerator<{
        a: number;
        b: number;
        c: string;
      }>([{ a: 1, b: 23, c: "123" }], null);
    let expectedResult: ExcelTable<{ a: number; b: number; c: string }> = {
      fileName: "MR-Excel",
      styles: {
        themeStyleHeader: {
          backgroundColor: "#393E46",
          color: "rgb(255,255,255)",
        },
        themeStyleBody: {
          backgroundColor: "#EEEEEE",
          color: "rgb(0,0,0)",
        },
      },
      sheet: [
        {
          styleCellCondition: (
            _data,
            _object,
            _rowIndex,
            _colIndex,
            fromHeader,
            _styleKeys,
          ) => {
            if (fromHeader) {
              return "themeStyleHeader";
            } else {
              return "themeStyleBody";
            }
          },
          headers: [
            {
              label: "a",
              text: "A",
            },
            {
              label: "b",
              text: "B",
            },
            {
              label: "c",
              text: "C",
            },
          ],
          data: [
            {
              a: 1,
              b: 23,
              c: "123",
            },
          ],
        },
      ],
    };
    Object.keys(result).forEach((key: string) => {
      const keyStr = key as keyof object;
      if (key != "sheet") {
        expect(result[keyStr]).toEqual(expectedResult[keyStr]);
      } else {
        result.sheet.forEach((sh) => {
          expect(sh.data).toEqual(expectedResult.sheet[0]!.data);
          expect(sh.headers).toEqual(expectedResult.sheet[0]!.headers);
          expect(sh.styleCellCondition!("", {} as any, 1, 1, true, [])).toBe(
            "themeStyleHeader",
          );
          expect(sh.styleCellCondition!("", {} as any, 1, 1, false, [])).toBe(
            "themeStyleBody",
          );
        });
      }
    });
  });
  test("themBaseGenerate empty option", () => {
    let result: ExcelTable<{ a: number; b: number; c: string }> =
      themeGenerator<{
        a: number;
        b: number;
        c: string;
      }>([{ a: 1, b: 23, c: "123" }], {});
    let expectedResult: ExcelTable<{ a: number; b: number; c: string }> = {
      fileName: "MR-Excel",
      styles: {
        themeStyleHeader: {
          backgroundColor: "#393E46",
          color: "rgb(255,255,255)",
        },
        themeStyleBody: {
          backgroundColor: "#EEEEEE",
          color: "rgb(0,0,0)",
        },
      },
      sheet: [
        {
          styleCellCondition: (
            _data,
            _object,
            _rowIndex,
            _colIndex,
            fromHeader,
            _styleKeys,
          ) => {
            if (fromHeader) {
              return "themeStyleHeader";
            } else {
              return "themeStyleBody";
            }
          },
          headers: [
            {
              label: "a",
              text: "A",
            },
            {
              label: "b",
              text: "B",
            },
            {
              label: "c",
              text: "C",
            },
          ],
          data: [
            {
              a: 1,
              b: 23,
              c: "123",
            },
          ],
        },
      ],
    };
    Object.keys(result).forEach((key: string) => {
      const keyStr = key as keyof object;
      if (key != "sheet") {
        expect(result[keyStr]).toEqual(expectedResult[keyStr]);
      } else {
        result.sheet.forEach((sh) => {
          expect(sh.data).toEqual(expectedResult.sheet[0]!.data);
          expect(sh.headers).toEqual(expectedResult.sheet[0]!.headers);
          expect(sh.styleCellCondition!("", {} as any, 1, 1, true, [])).toBe(
            "themeStyleHeader",
          );
          expect(sh.styleCellCondition!("", {} as any, 1, 1, false, [])).toBe(
            "themeStyleBody",
          );
        });
      }
    });
  });
  test("themBaseGenerate negative option", () => {
    let result: ExcelTable<{ a: number; b: number; c: string }> =
      themeGenerator<{
        a: number;
        b: number;
        c: string;
      }>([{ a: 1, b: 23, c: "123" }], {
        negativeColor: true,
      });
    let expectedResult: ExcelTable<{ a: number; b: number; c: string }> = {
      fileName: "MR-Excel",
      styles: {
        themeStyleHeader: {
          backgroundColor: "#393E46",
          color: "rgb(198,193,185)",
        },
        themeStyleBody: {
          backgroundColor: "#EEEEEE",
          color: "rgb(17,17,17)",
        },
      },
      sheet: [
        {
          styleCellCondition: (
            _data,
            _object,
            _rowIndex,
            _colIndex,
            fromHeader,
            _styleKeys,
          ) => {
            if (fromHeader) {
              return "themeStyleHeader";
            } else {
              return "themeStyleBody";
            }
          },
          headers: [
            {
              label: "a",
              text: "A",
            },
            {
              label: "b",
              text: "B",
            },
            {
              label: "c",
              text: "C",
            },
          ],
          data: [
            {
              a: 1,
              b: 23,
              c: "123",
            },
          ],
        },
      ],
    };
    Object.keys(result).forEach((key: string) => {
      const keyStr = key as keyof object;
      if (key != "sheet") {
        expect(result[keyStr]).toEqual(expectedResult[keyStr]);
      } else {
        result.sheet.forEach((sh) => {
          expect(sh.data).toEqual(expectedResult.sheet[0]!.data);
          expect(sh.headers).toEqual(expectedResult.sheet[0]!.headers);
          expect(sh.styleCellCondition!("", {} as any, 1, 1, true, [])).toBe(
            "themeStyleHeader",
          );
          expect(sh.styleCellCondition!("", {} as any, 1, 1, false, [])).toBe(
            "themeStyleBody",
          );
        });
      }
    });
  });
  test("themBaseGenerate ExcelTable input", () => {
    let result: ExcelTable<{ a: number; b: number; c: string }> =
      themeGenerator<{
        a: number;
        b: number;
        c: string;
      }>(
        {
          fileName: "XYZ",
          styles: {
            someOtherStyle: {
              backgroundColor: "#123456",
            },
          },
          sheet: [
            {
              data: [{ a: 1, b: 2, c: "123" }],
              headers: [
                {
                  label: "a",
                  text: "A",
                },
                {
                  label: "b",
                  text: "B",
                },
                {
                  label: "c",
                  text: "C",
                },
              ],
            },
          ],
        },
        {
          negativeColor: true,
        },
      );
    let expectedResult: ExcelTable<{ a: number; b: number; c: string }> = {
      fileName: "XYZ",
      styles: {
        someOtherStyle: {
          backgroundColor: "#123456",
        },
        themeStyleHeader: {
          backgroundColor: "#393E46",
          color: "rgb(198,193,185)",
        },
        themeStyleBody: {
          backgroundColor: "#EEEEEE",
          color: "rgb(17,17,17)",
        },
      },
      sheet: [
        {
          styleCellCondition: (
            _data,
            _object,
            _rowIndex,
            _colIndex,
            fromHeader,
            _styleKeys,
          ) => {
            if (fromHeader) {
              return "themeStyleHeader";
            } else {
              return "themeStyleBody";
            }
          },
          headers: [
            {
              label: "a",
              text: "A",
            },
            {
              label: "b",
              text: "B",
            },
            {
              label: "c",
              text: "C",
            },
          ],
          data: [
            {
              a: 1,
              b: 2,
              c: "123",
            },
          ],
        },
      ],
    };
    Object.keys(result).forEach((key: string) => {
      const keyStr = key as keyof object;
      if (key != "sheet") {
        expect(result[keyStr]).toEqual(expectedResult[keyStr]);
      } else {
        result.sheet.forEach((sh) => {
          expect(sh.data).toEqual(expectedResult.sheet[0]!.data);
          expect(sh.headers).toEqual(expectedResult.sheet[0]!.headers);
          expect(sh.styleCellCondition!("", {} as any, 1, 1, true, [])).toBe(
            "themeStyleHeader",
          );
          expect(sh.styleCellCondition!("", {} as any, 1, 1, false, [])).toBe(
            "themeStyleBody",
          );
        });
      }
    });
  });
});
