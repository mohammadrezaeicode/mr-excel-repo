/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import { describe, expect, test } from "@jest/globals";
import { createExcelTableBaseOnDomElement } from "../../../src/functions/create-excel-data";
import { ExcelTable, Header } from "../../../src/data-model/excel-table";
describe("createExcelTableBaseOnDomElement function test", () => {
  test("input via queryString - col span", () => {
    document.body.innerHTML = `
    <table class="table table-primary" id="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" style="font-size: 2rem;">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td rowspan="2"><button><span>Mark</span></button></td>
                <td style="background: red;">Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td colspan="2">Thornton</td>
            </tr>
        </tbody>
    </table>
    `;
    createExcelTableBaseOnDomElement("#table");
    let expectedResult: ExcelTable<any> = {
      styles: {
        "0-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "0-1": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "0-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "0-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-1": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
          backgroundColor: "FF0000",
        },
        "1-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-2": {
          //   alignment: {
          //     ltr: true,
          //     vertical: "center",
          //   },

          // },
          // "2-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
      },
      sheet: [
        {
          headers: [
            {
              label: "c0",
              text: "#",
            },
            {
              label: "c1",
              text: "First",
            },
            {
              label: "c2",
              text: "Last",
            },
            {
              label: "c3",
              text: "Handle",
            },
          ],
          data: [
            {
              c0: "1",
              c1: "Mark",
              c2: "Otto",
              c3: "@mdo",
              mergeString: "-+--",
              mergeStart: [1],
              mergeType: ["row"],
              // mergeValue:[[
              //     1
              // ]]
            },
            {
              c0: "2",
              c1: "",
              c2: "Thornton",
              c3: "",
              mergeStart: [2],
              mergeString: "-+--**",
              mergeType: ["col"],
              mergeValue: [[1]],
            },
            {
              c0: "2",
              c1: "",
              c2: "Thornton",
              c3: "",
              mergeStart: [2],
              mergeString: "-+--**",
              mergeType: ["col"],
              mergeValue: [[1]],
            },
          ],
        },
      ],
    };
    let result = createExcelTableBaseOnDomElement("#table", null, true) as any;
    expect(result.sheet[0].data[0].mergeValue[0][0]).toBe(1);
    const funcStyle = result.sheet[0].styleCellCondition;
    if (funcStyle) {
      result.sheet[0].headers.forEach((v: Header, i: number) => {
        expect(
          funcStyle(
            v as Header,
            v as Header,
            1,
            i,
            true,
            Object.keys(result.styles!),
          ),
        ).toBe("0-" + i);
      });

      result.sheet[0].data.forEach((v: any, i: number) => {
        for (let index = 0; index < 4; index++) {
          if (
            index == 1 ||
            (i == 1 && index == 3) ||
            (i == 2 && index == 0) ||
            (i == 2 && index == 2) ||
            (i == 2 && index == 3)
          ) {
            continue;
          }
          expect(
            funcStyle(
              v["c" + index],
              v,
              2 + i,
              index,
              false,
              Object.keys(result.styles!),
            ),
          ).toBe(1 + i + "-" + index);
        }
      });
    }
    delete result.sheet[0].styleCellCondition;
    delete result.sheet[0].data[0].mergeValue;
    expect(result).toEqual(expectedResult);
  });
  test("input via queryString", () => {
    document.body.innerHTML = `
    <table class="table table-primary" id="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" style="font-size: 2rem;">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td rowspan="2"><button><span>Mark</span></button></td>
                <td style="background: red;">Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
        </tbody>
    </table>
    `;
    createExcelTableBaseOnDomElement("#table");
    let expectedResult: ExcelTable<any> = {
      styles: {
        "0-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "0-1": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "0-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "0-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-1": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
          backgroundColor: "FF0000",
        },
        "1-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
      },
      sheet: [
        {
          headers: [
            {
              label: "c0",
              text: "#",
            },
            {
              label: "c1",
              text: "First",
            },
            {
              label: "c2",
              text: "Last",
            },
            {
              label: "c3",
              text: "Handle",
            },
          ],
          data: [
            {
              c0: "1",
              c1: "Mark",
              c2: "Otto",
              c3: "@mdo",
              mergeString: "-+--",
              mergeStart: [1],
              mergeType: ["row"],
              // mergeValue:[[
              //     1
              // ]]
            },
            {
              c0: "2",
              c1: "",
              c2: "Thornton",
              c3: "@fat",
              mergeString: "-+--",
            },
          ],
        },
      ],
    };
    let result = createExcelTableBaseOnDomElement("#table", null, true) as any;
    expect(result.sheet[0].data[0].mergeValue[0][0]).toBe(1);
    const funcStyle = result.sheet[0].styleCellCondition;
    if (funcStyle) {
      result.sheet[0].headers.forEach((v: any, i: number) => {
        expect(
          funcStyle(
            v as Header,
            v as Header,
            1,
            i,
            true,
            Object.keys(result.styles!),
          ),
        ).toBe("0-" + i);
      });
      result.sheet[0].data.forEach((v: any, i: number) => {
        for (let index = 0; index < 4; index++) {
          if (index == 1) {
            continue;
          }
          expect(
            funcStyle(
              v["c" + index],
              v,
              2 + i,
              index,
              false,
              Object.keys(result.styles!),
            ),
          ).toBe(1 + i + "-" + index);
        }
      });
    }
    delete result.sheet[0].styleCellCondition;
    delete result.sheet[0].data[0].mergeValue;
    expect(result).toEqual(expectedResult);
  });
  test("input via querySelector", () => {
    document.body.innerHTML = `
    <table class="table table-primary" id="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" style="font-size: 2rem;">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td rowspan="2"><button><span>Mark</span></button></td>
                <td style="background: red;">Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
        </tbody>
    </table>
    `;
    createExcelTableBaseOnDomElement("#table");
    let expectedResult: ExcelTable<any> = {
      styles: {
        "0-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "0-1": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "0-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "0-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-1": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
          backgroundColor: "FF0000",
        },
        "1-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
      },
      sheet: [
        {
          headers: [
            {
              label: "c0",
              text: "#",
            },
            {
              label: "c1",
              text: "First",
            },
            {
              label: "c2",
              text: "Last",
            },
            {
              label: "c3",
              text: "Handle",
            },
          ],
          data: [
            {
              c0: "1",
              c1: "Mark",
              c2: "Otto",
              c3: "@mdo",
              mergeString: "-+--",
              mergeStart: [1],
              mergeType: ["row"],
              // mergeValue:[[
              //     1
              // ]]
            },
            {
              c0: "2",
              c1: "",
              c2: "Thornton",
              c3: "@fat",
              mergeString: "-+--",
            },
          ],
        },
      ],
    };
    let result = createExcelTableBaseOnDomElement(
      null,
      document.querySelector("#table") as HTMLTableElement,
      true,
    ) as any;
    expect(result.sheet[0].data[0].mergeValue[0][0]).toBe(1);
    const funcStyle = result.sheet[0].styleCellCondition;
    if (funcStyle) {
      result.sheet[0].headers.forEach((v: any, i: number) => {
        expect(
          funcStyle(
            v as Header,
            v as Header,
            1,
            i,
            true,
            Object.keys(result.styles!),
          ),
        ).toBe("0-" + i);
      });
      result.sheet[0].data.forEach((v: any, i: number) => {
        for (let index = 0; index < 4; index++) {
          if (index == 1) {
            continue;
          }
          expect(
            funcStyle(
              v["c" + index],
              v,
              2 + i,
              index,
              false,
              Object.keys(result.styles!),
            ),
          ).toBe(1 + i + "-" + index);
        }
      });
    }
    delete result.sheet[0].styleCellCondition;
    delete result.sheet[0].data[0].mergeValue;
    expect(result).toEqual(expectedResult);
  });
  test("test for retrieve header border", () => {
    document.body.innerHTML = `
    <table class="table table-primary" id="table">
        <thead>
            <tr>
                <th style="border-right:1px solid rgb(0,0,0)" scope="col">#</th>
                <th style="border-left:1px solid rgb(0,0,0)" scope="col" style="font-size: 2rem;">First</th>
                <th style="border-top:1px solid rgb(0,0,0)" scope="col">Last</th>
                <th style="border-bottom:1px solid rgb(0,0,0)" scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr style="border:1px solid rgb(0,0,0)">
                <th style="border-right:1px solid rgb(0,0,0)" scope="row">1</th>
                <td style="border-left:1px solid rgb(0,0,0)" rowspan="2"><button><span>Mark</span></button></td>
                <td style="border-top:1px solid rgb(0,0,0)" style="background: red;">Otto</td>
                <td style="border-bottom:1px solid rgb(0,0,0)">@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
        </tbody>
    </table>
    `;
    createExcelTableBaseOnDomElement("#table");
    let expectedResult: ExcelTable<any> = {
      styles: {
        "0-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
          border: {
            right: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "0-1": {
          alignment: {
            ltr: true,
            vertical: "center",
          },

          border: {
            left: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "0-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },

          border: {
            top: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "0-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },

          border: {
            bottom: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "1-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },

          border: {
            right: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "1-1": {
          alignment: {
            ltr: true,
            vertical: "center",
          },

          border: {
            left: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "1-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
          border: {
            top: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "1-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },

          border: {
            bottom: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "2-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
      },
      sheet: [
        {
          headers: [
            {
              label: "c0",
              text: "#",
            },
            {
              label: "c1",
              text: "First",
            },
            {
              label: "c2",
              text: "Last",
            },
            {
              label: "c3",
              text: "Handle",
            },
          ],
          data: [
            {
              c0: "1",
              c1: "Mark",
              c2: "Otto",
              c3: "@mdo",
              mergeString: "-+--",
              mergeStart: [1],
              mergeType: ["row"],
              // mergeValue:[[
              //     1
              // ]]
            },
            {
              c0: "2",
              c1: "",
              c2: "Thornton",
              c3: "@fat",
              mergeString: "-+--",
            },
          ],
        },
      ],
    };
    let result = createExcelTableBaseOnDomElement(
      null,
      document.querySelector("#table") as HTMLTableElement,
      true,
    ) as any;
    expect(result.sheet[0].data[0].mergeValue[0][0]).toBe(1);
    const funcStyle = result.sheet[0].styleCellCondition;
    if (funcStyle) {
      result.sheet[0].headers.forEach((v: any, i: number) => {
        expect(
          funcStyle(
            v as Header,
            v as Header,
            1,
            i,
            true,
            Object.keys(result.styles!),
          ),
        ).toBe("0-" + i);
      });
      result.sheet[0].data.forEach((v: any, i: number) => {
        for (let index = 0; index < 4; index++) {
          if (index == 1) {
            continue;
          }
          expect(
            funcStyle(
              v["c" + index],
              v,
              2 + i,
              index,
              false,
              Object.keys(result.styles!),
            ),
          ).toBe(1 + i + "-" + index);
        }
      });
    }
    delete result.sheet[0].styleCellCondition;
    delete result.sheet[0].data[0].mergeValue;
    expect(result).toEqual(expectedResult);
  }, 150000);
  test("test for rowHeightScaleFunction", () => {
    document.body.innerHTML = `
    <table class="table table-primary" id="table">
        <thead>
            <tr style="height:50px">
                <th style="border-right:1px solid rgb(0,0,0)" scope="col">#</th>
                <th style="border-left:1px solid rgb(0,0,0)" scope="col" style="font-size: 2rem;">First</th>
                <th style="border-top:1px solid rgb(0,0,0)" scope="col">Last</th>
                <th style="border-bottom:1px solid rgb(0,0,0)" scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr style="border:1px solid rgb(0,0,0)">
                <th scope="row">1</th>
                <td rowspan="2"><button><span>Mark</span></button></td>
                <td style="background: red;">Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
        </tbody>
    </table>
    `;
    createExcelTableBaseOnDomElement("#table");
    let expectedResult: ExcelTable<any> = {
      styles: {
        "0-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },

          border: {
            right: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "0-1": {
          alignment: {
            ltr: true,
            vertical: "center",
          },

          border: {
            left: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "0-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },

          border: {
            top: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "0-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },

          border: {
            bottom: {
              color: "000000",
              style: "thin",
            },
          },
        },
        "1-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-1": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "1-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
          backgroundColor: "FF0000",
        },
        "1-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-0": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-2": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
        "2-3": {
          alignment: {
            ltr: true,
            vertical: "center",
          },
        },
      },
      sheet: [
        {
          headerHeight: 80,
          headers: [
            {
              label: "c0",
              text: "#",
            },
            {
              label: "c1",
              text: "First",
            },
            {
              label: "c2",
              text: "Last",
            },
            {
              label: "c3",
              text: "Handle",
            },
          ],
          data: [
            {
              c0: "1",
              c1: "Mark",
              c2: "Otto",
              c3: "@mdo",
              mergeString: "-+--",
              mergeStart: [1],
              mergeType: ["row"],
              height: 50,
              // mergeValue:[[
              //     1
              // ]]
            },
            {
              c0: "2",
              c1: "",
              c2: "Thornton",
              c3: "@fat",
              mergeString: "-+--",
              height: 50,
            },
          ],
        },
      ],
    };
    let result = createExcelTableBaseOnDomElement(
      null,
      document.querySelector("#table") as HTMLTableElement,
      true,
      (data: number, _rowIndex: number, fromHeader: boolean) => {
        return fromHeader ? data + 30 : 50;
      },
    ) as any;
    expect(result.sheet[0].data[0].mergeValue[0][0]).toBe(1);
    const funcStyle = result.sheet[0].styleCellCondition;
    if (funcStyle) {
      result.sheet[0].headers.forEach((v: any, i: number) => {
        expect(
          funcStyle(
            v as Header,
            v as Header,
            1,
            i,
            true,
            Object.keys(result.styles!),
          ),
        ).toBe("0-" + i);
      });
      result.sheet[0].data.forEach((v: any, i: number) => {
        for (let index = 0; index < 4; index++) {
          if (index == 1) {
            continue;
          }
          expect(
            funcStyle(
              v["c" + index],
              v,
              2 + i,
              index,
              false,
              Object.keys(result.styles!),
            ),
          ).toBe(1 + i + "-" + index);
        }
      });
    }
    delete result.sheet[0].styleCellCondition;
    delete result.sheet[0].data[0].mergeValue;
    expect(result).toEqual(expectedResult);
  });
});

describe("createExcelTableBaseOnDomElement assertion test", () => {
  test("test for assertion", async () => {
    document.body.innerHTML = `
    <table class="table table-primary" id="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" style="font-size: 2rem;">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td rowspan="2"><button><span>Mark</span></button></td>
                <td style="background: red;">Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
        </tbody>
    </table>
    `;

    await expect(() => createExcelTableBaseOnDomElement(null)).toThrow(
      "Error: One of the function inputs is required.",
    );
  });
});
