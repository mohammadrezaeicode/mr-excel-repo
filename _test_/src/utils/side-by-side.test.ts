import { describe, expect, test } from "@jest/globals";
import { sideBySide } from "../../../src/utils/side-by-side";
import { ExcelTable } from "../../../src/data-model/excel-table";
// not completed
function removeNotRelatedDataFromRelated(data: any) {
  data!.sheet.forEach((v: Object) => {
    if ("labelCounter" in v) {
      delete v.labelCounter;
    }
    if ("headerIndex" in v) {
      delete v.headerIndex;
    }
    if ("seenAt" in v) {
      delete v.seenAt;
    }
    if ("data" in v)
      (v.data as Object[]).forEach((x: Object) => {
        if ("tableIndex" in x) {
          delete x.tableIndex;
        }
        if ("tableStringIndex" in x) delete x.tableStringIndex;
      });
  });
  return data;
}
describe("getColRowBaseOnRefString data tests", () => {
  test("should be function", () => {
    expect(typeof sideBySide).toBe("function");
  });
  test("1D input - 1 sheet", () => {
    let excelTable: ExcelTable = {
      sheet: [
        {
          name: "Sheet 1",
          headers: [
            {
              label: "c1",
              text: "test",
            },
          ],
          data: [
            {
              c1: "test",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);

    excelTable = {
      sheet: [
        {
          name: "Sheet 1",

          headers: [
            {
              label: "c1",
              text: "test",
            },
            {
              label: "c2",
              text: "test",
            },
          ],
          data: [
            {
              c1: "test",
              c2: "test",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
            {
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);

    excelTable = {
      sheet: [
        {
          name: "Sheet 1",

          headers: [
            {
              label: "c1",
              text: "test",
            },
            {
              label: "c2",
              text: "test",
            },
            {
              label: "c3",
              text: "test",
            },
          ],
          data: [
            {
              c1: "test",
              c2: "test",
              c3: "test",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
            {
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
            {
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);

    excelTable = {
      sheet: [
        {
          name: "Sheet 1",

          headers: [
            {
              label: "c1",
              text: "val1",
            },
            {
              label: "c2",
              text: "val2",
            },
            {
              label: "c3",
              text: "val3",
            },
            {
              label: "c4",
              text: "val4",
            },
          ],
          data: [
            {
              c1: "val1",
              c2: "val2",
              c3: "val3",
              c4: "val4",
            },
            {
              c2: "val2-1",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              headers: [
                {
                  label: "val1",
                  text: "val1",
                },
              ],
              data: [
                {
                  val1: "val1",
                },
              ],
            },
            {
              headers: [
                {
                  label: "val2",
                  text: "val2",
                },
              ],
              data: [
                {
                  val2: "val2",
                },
                {
                  val2: "val2-1",
                },
              ],
            },
            {
              headers: [
                {
                  label: "val3",
                  text: "val3",
                },
                {
                  label: "val4",
                  text: "val4",
                },
              ],
              data: [
                {
                  val3: "val3",
                  val4: "val4",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);
  });
  test("1D input - 1 sheet with space", () => {
    let excelTable: ExcelTable = {
      sheet: [
        {
          name: "Sheet 1",
          headers: [
            {
              label: "c1",
              text: "test",
            },
            { label: "c2", text: "" },
          ],
          data: [
            {
              c1: "test",
            },
            {
              c1: "",
              c2: "",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              spaceY: 1,
              spaceX: 1,
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);

  });
  test("1D input - multi sheet", () => {
    let excelTable: ExcelTable = {
      sheet: [
        {
          name: "sheet 2",

          headers: [
            {
              label: "c1",
              text: "test",
            },
          ],
          data: [
            {
              c1: "test2",
            },
          ],
        },
        {
          name: "Sheet 1",

          headers: [
            {
              label: "c1",
              text: "test",
            },
          ],
          data: [
            {
              c1: "test1",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              sheetName: "sheet 2",
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test2",
                },
              ],
            },
            {
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test1",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);

    excelTable = {
      sheet: [
        {
          name: "sheet 2",

          headers: [
            {
              label: "c1",
              text: "test",
            },
          ],
          data: [
            {
              c1: "test2",
            },
          ],
        },
        {
          name: "Sheet 1",

          headers: [
            {
              label: "c1",
              text: "test",
            },
          ],
          data: [
            {
              c1: "test1",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              sheetName: "sheet 2",
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test2",
                },
              ],
            },
            {
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test1",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);

    excelTable = {
      sheet: [
        {
          name: "sheet 2",

          headers: [
            {
              label: "c1",
              text: "test",
            },
          ],
          data: [
            {
              c1: "test2",
            },
          ],
        },
        {
          name: "Sheet 1",

          headers: [
            {
              label: "c1",
              text: "test",
            },
          ],
          data: [
            {
              c1: "test1",
            },
          ],
        },
        {
          name: "Sheet 3",

          headers: [
            {
              label: "c1",
              text: "test",
            },
          ],
          data: [
            {
              c1: "test3",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              sheetName: "sheet 2",
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test2",
                },
              ],
            },
            {
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test1",
                },
              ],
            },
            {
              sheetName: "Sheet 3",
              headers: [
                {
                  label: "test",
                  text: "test",
                },
              ],
              data: [
                {
                  test: "test3",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);
  });
  test("2D input - 1 sheet", () => {
    let excelTable: ExcelTable = {
      sheet: [
        {
          name: "Sheet 1",
          headers: [
            {
              label: "c1",
              text: "h1",
            },
          ],
          data: [
            {
              c1: "test",
            },
            { c1: "h2" },
            {
              c1: "test2",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h1",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
          ],
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h2",
                },
              ],
              data: [
                {
                  test: "test2",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);

    excelTable = {
      sheet: [
        {
          name: "Sheet 1",
          headers: [
            {
              label: "c1",
              text: "h1",
            },
          ],
          data: [
            {
              c1: "test",
            },
            { c1: "h2" },
            {
              c1: "test2",
            },

            { c1: "h3" },
            {
              c1: "test3",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h1",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
          ],
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h2",
                },
              ],
              data: [
                {
                  test: "test2",
                },
              ],
            },
          ],
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h3",
                },
              ],
              data: [
                {
                  test: "test3",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);

    excelTable = {
      sheet: [
        {
          name: "Sheet 1",
          headers: [
            {
              label: "c1",
              text: "h1",
            },
            {
              label: "c2",
              text: "hh1",
            },
          ],
          data: [
            {
              c1: "test",
              c2: "hh1",
            },
            { c1: "h2" },
            {
              c1: "test2",
            },

            { c1: "h3" },
            {
              c1: "test3",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h1",
                },
                {
                  label: "test2",
                  text: "hh1",
                },
              ],
              data: [
                {
                  test: "test",
                  test2: "hh1",
                },
              ],
            },
          ],
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h2",
                },
              ],
              data: [
                {
                  test: "test2",
                },
              ],
            },
          ],
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h3",
                },
              ],
              data: [
                {
                  test: "test3",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);
  });
  test("2D input - multi sheet", () => {
    let excelTable: ExcelTable = {
      sheet: [
        {
          name: "Sheet 1",
          headers: [
            {
              label: "c1",
              text: "h1",
            },
          ],
          data: [
            {
              c1: "test",
            },
            { c1: "h2" },
            {
              c1: "test2",
            },
          ],
        },
        {
          name: "Sheet X",

          headers: [
            {
              label: "c1",
              text: "h1",
            },
          ],
          data: [
            {
              c1: "test",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h1",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
            {
              sheetName: "Sheet X",
              headers: [
                {
                  label: "test",
                  text: "h1",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
          ],
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h2",
                },
              ],
              data: [
                {
                  test: "test2",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);

    excelTable = {
      sheet: [
        {
          name: "Sheet 1",
          headers: [
            {
              label: "c1",
              text: "h1",
            },
            {
              label: "c2",
              text: "h2",
            },
          ],
          data: [
            {
              c1: "test",
              c2: "test2",
            },
            { c1: "h2" },
            {
              c1: "test2",
            },
          ],
        },
        {
          name: "Sheet X",

          headers: [
            {
              label: "c1",
              text: "h1",
            },
          ],
          data: [
            {
              c1: "test",
            },
          ],
        },
      ],
    };
    expect(
      removeNotRelatedDataFromRelated(
        sideBySide([
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h1",
                },

                {
                  label: "tes",
                  text: "h2",
                },
              ],
              data: [
                {
                  test: "test",
                  tes: "test2",
                },
              ],
            },
            {
              sheetName: "Sheet X",
              headers: [
                {
                  label: "test",
                  text: "h1",
                },
              ],
              data: [
                {
                  test: "test",
                },
              ],
            },
          ],
          [
            {
              headers: [
                {
                  label: "test",
                  text: "h2",
                },
              ],
              data: [
                {
                  test: "test2",
                },
              ],
            },
          ],
        ])
      )
    ).toEqual(excelTable);
  });
});
