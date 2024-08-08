import { describe, expect, test } from "@jest/globals";
import { themeGenerator, exportedForTesting } from "../../../src/functions/theme";
import { ExcelTable } from "../../../src/data-model/excel-table";

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
        []
      )
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
        ["a"]
      )
    ).toStrictEqual([
      {
        label: "b",
        text: "B",
      },
    ]);
  });
  test("themeGenerator", () => {
    let result: ExcelTable = themeGenerator([{ a: 1, b: 23 }]);
    let expectedResult: ExcelTable = {
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
            data,
            object,
            rowIndex,
            colIndex,
            fromHeader,
            styleKeys
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
        result.sheet.forEach((sh, index) => {
          expect(sh.data).toEqual(expectedResult.sheet[0].data);
          expect(sh.headers).toEqual(expectedResult.sheet[0].headers);
          expect(sh.styleCellCondition!("", {}, 1, 1, true, [])).toBe(
            "themeStyleHeader"
          );
          expect(sh.styleCellCondition!("", {}, 1, 1, false, [])).toBe(
            "themeStyleBody"
          );
        });
      }
    });
  });
  test("themeGenerator 2", () => {
    let result: ExcelTable = themeGenerator([[{ a: 1, b: 23 }]], {
       headerBackgroundColor:"#123456",
       rowBackgroundColor:"#fedcba"
    });
    let expectedResult: ExcelTable = {
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
            data,
            object,
            rowIndex,
            colIndex,
            fromHeader,
            styleKeys
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
        result.sheet.forEach((sh, index) => {
          expect(sh.data).toEqual(expectedResult.sheet[0].data);
          expect(sh.headers).toEqual(expectedResult.sheet[0].headers);
          expect(sh.styleCellCondition!("", {}, 1, 1, true, [])).toBe(
            "themeStyleHeader"
          );
          expect(sh.styleCellCondition!("", {}, 1, 1, false, [])).toBe(
            "themeStyleBody"
          );
        });
      }
    });
  });
});
