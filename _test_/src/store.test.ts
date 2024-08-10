import { describe, expect, test } from "@jest/globals";
import {
  addGlobalOptionFromExcelTable,
  addGlobalOptions,
  applyConfig,
  exportedForTesting,
} from "../../src/utils/store";
import { ExcelTable, StyleBody } from "../../src/data-model/excel-table";

describe("store function tests", () => {
  test("generate should be exist", () => {
    expect(typeof addGlobalOptionFromExcelTable).toBe("function");
    expect(typeof addGlobalOptions).toBe("function");
    expect(typeof applyConfig).toBe("function");
  });
  test("test successfully", () => {
    const colorPalette = {
      c1: "2C3639",
      c2: "3F4E4F",
      c3: "A27B5C",
      c4: "DCD7C9",
    };
    const rowStyle: StyleBody = {
      backgroundColor: colorPalette.c2,
      fontFamily: "Times New Roman",
      color: colorPalette.c4,
    };
    const headerStyle: StyleBody = {
      backgroundColor: colorPalette.c4,
      fontFamily: "Times New Roman",
      color: colorPalette.c2,
    };
    const data: ExcelTable = {
      creator: "mr",
      styles: {
        Date: {
          ...rowStyle,
          format: "short_date",
        },
        Time: {
          ...rowStyle,
          format: "time",
        },
        Percentage: {
          ...rowStyle,
          format: "percentage",
        },
        Float: {
          ...rowStyle,
          format: "float_2",
          alignment: {
            horizontal: "left",
          },
        },
        Fraction: {
          ...rowStyle,
          format: "fraction",
        },
        "Long Number Column 1": {
          ...rowStyle,
          format: "dollar_2",
          alignment: {
            indent: 3,
            rtl: true,
            horizontal: "left",
          },
        },
        "Long Number Column 2": {
          ...rowStyle,
          format: "num_sep",
          alignment: {
            ltr: true,
            horizontal: "left",
          },
        },
        headerStyle: {
          ...headerStyle,
        },
      },
      sheet: [
        {
          styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
            if (fromHeader) {
              return "headerStyle";
            } else {
              if (colIndex == 0) {
                return "Date";
              } else if (colIndex == 1) {
                return "Time";
              } else if (colIndex == 2) {
                return "Percentage";
              } else if (colIndex == 3) {
                return "Float";
              } else if (colIndex == 4) {
                return "Fraction";
              } else if (colIndex == 5) {
                return "Long Number Column 1";
              } else {
                return "Long Number Column 2";
              }
            }
          },
          headers: [],
          data: [],
        },
      ],
    };
    addGlobalOptionFromExcelTable("global-1", data);
    let result = applyConfig("global-1", {
      sheet: [],
    });
    expect(result.creator).toBe("mr");
    // expect(result.styles!["Date"]).toBe(data.styles!["Date"]);
    Object.keys(result.styles!).forEach((key: string) => {
      expect(result.styles![key]).toStrictEqual(data.styles![key]);
    });
  });
});
