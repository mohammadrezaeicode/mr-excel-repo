import { describe, expect, test, jest, it } from "@jest/globals";
import { generateExcel } from "../../../src/utils/generate-excel";
import { Data, ExcelTable, Header } from "../../../src/data-model/excel-table";
import { extractExcelData } from "../../../src/utils/read-utils";
import { readGeneratedFile } from "../read";
// not completed
interface ResponseApi {
  data: {
    [sheetName: string]: string[][];
  };
  sheetName: Object;
  fileList: string[];
}
describe("generateExcel data tests", () => {
  test("should be function", () => {
    expect(typeof generateExcel).toBe("function");
  });
  test("basic test", async () => {
    let excelTable: ExcelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          data: [{ test: "test" }, { test: "test1" }],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(3);
      expect(sheet[0].length).toBe(1);
      expect(sheet[0][0]).toBe("test");
      expect(sheet[1][0]).toBe("test");
      expect(sheet[2][0]).toBe("test1");
    });
    excelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          withoutHeader: true,
          data: [{ test: "test" }, { test: "test1" }],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(2);
      expect(sheet[0].length).toBe(1);
      expect(sheet[0][0]).toBe("test");
      expect(sheet[1][0]).toBe("test1");
    });
    excelTable = {
      backend: true,
      notSave: true,

      sheet: [
        {
          shiftLeft: 2,
          withoutHeader: true,
          data: [{ test: "test" }, { test: "test1" }],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(2);
      expect(sheet[0].length).toBe(3);
      expect(sheet[0][2]).toBe("test");
      expect(sheet[1][2]).toBe("test1");
    });

    excelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          shiftLeft: 2,
          shiftTop: 3,
          withoutHeader: true,
          data: [{ test: "test" }, { test: "test1" }],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(5);
      expect(sheet[3].length).toBe(3);
      expect(sheet[3][2]).toBe("test");
      expect(sheet[4][2]).toBe("test1");
    });

    excelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          title: {
            text: "this is test title",
            consommeRow: 1,
          },
          shiftLeft: 2,
          shiftTop: 3,
          withoutHeader: true,
          data: [{ test: "test" }, { test: "test1" }],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(6);
      expect(sheet[3].length).toBe(3);
      expect(sheet[3][2]).toBe("this is test title");
      expect(sheet[4][2]).toBe("test");
      expect(sheet[5][2]).toBe("test1");
    });

    excelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          title: {
            text: "this is test title",
            consommeRow: 2,
          },
          shiftLeft: 2,
          shiftTop: 3,
          withoutHeader: true,
          data: [{ test: "test" }, { test: "test1" }],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(7);
      expect(sheet[3].length).toBe(3);
      expect(sheet[3][2]).toBe("this is test title");
      expect(sheet[5][2]).toBe("test");
      expect(sheet[6][2]).toBe("test1");
    });

    excelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          title: {
            text: "this is test title",
            consommeRow: 2,
          },
          shiftLeft: 2,
          shiftTop: 3,
          withoutHeader: true,
          data: [{ test: "test" }, { test: "test1" }],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(7);
      expect(sheet[3].length).toBe(3);
      expect(sheet[3][2]).toBe("this is test title");
      expect(sheet[5][2]).toBe("test");
      expect(sheet[6][2]).toBe("test1");
    });

    excelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          title: {
            text: "this is test title",
            consommeRow: 2,
            shiftTop: 1,
          },
          shiftLeft: 2,
          shiftTop: 3,
          withoutHeader: true,
          data: [{ test: "test" }, { test: "test1" }],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(8);
      expect(sheet[4].length).toBe(3);
      expect(sheet[4][2]).toBe("this is test title");
      expect(sheet[6][2]).toBe("test");
      expect(sheet[7][2]).toBe("test1");
    });

    excelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          title: {
            text: "this is test title",
            consommeRow: 2,
            shiftTop: 1,
            shiftLeft: 2,
          },
          shiftLeft: 2,
          shiftTop: 3,
          withoutHeader: true,
          data: [{ test: "test" }, { test: "test1" }],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(8);
      expect(sheet[4].length).toBe(5);
      expect(sheet[4][4]).toBe("this is test title");
      expect(sheet[6][2]).toBe("test");
      expect(sheet[7][2]).toBe("test1");
    });

    excelTable = {
      backend: true,
      notSave: true,
      activateConditionalFormatting: true,
      styles: {
        test2: {
          type: "CF",
          color: "345ADC",
          backgroundColor: "222222",
        },
        test: {
          bold: true,
          alignment: {
            horizontal: "right",
            vertical: "center",
            rtl: true,
            shrinkToFit: "1",
          },
          backgroundColor: "#123456",
          border: {
            full: {
              color: "342123",
              style: "dashDot",
            },
          },
          color: "098123",
          doubleUnderline: true,
          fontFamily: "test",
          size: 20,
          italic: true,
          format: "$",
        },
      },
      sheet: [
        {
          title: {
            text: "this is test title",
            consommeRow: 2,
            shiftTop: 1,
            shiftLeft: 2,
          },
          shiftLeft: 2,
          shiftTop: 3,
          withoutHeader: true,
          data: [{ test: "test" }, { test: "test1" }],
          headers: [
            {
              label: "test",
              text: "test",
              formula: {
                type: "COUNT",
                styleId: "test",
              },
            },
          ],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(9);
      expect(sheet[4].length).toBe(5);
      expect(sheet[4][4]).toBe("this is test title");
      expect(sheet[6][2]).toBe("test");
      expect(sheet[7][2]).toBe("test1");
      console.log(sheet[8]);
      expect(sheet[8][2]).toBe(null);
    });
  });
  test("test for comment & image", async () => {
    let excelTable: ExcelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          data: [
            {
              test: "test",
              comment: {
                test: "this is comment",
              },
            },
            { test: "test1" },
          ],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "xl/drawings/",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/comments1.xml",
        "xl/drawings/vmlDrawing1.vml",
        "xl/worksheets/_rels/",
        "xl/worksheets/_rels/sheet1.xml.rels",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(3);
      expect(sheet[0].length).toBe(1);
      expect(sheet[0][0]).toBe("test");
      expect(sheet[1][0]).toBe("test");
      expect(sheet[2][0]).toBe("test1");
    });
    excelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          images: [
            {
              from: "D3",
              // to:"D4",
              type: "one",
              url: "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex16.PNG?raw=true",
            },
          ],
          data: [
            {
              test: "test",
              // comment: {
              //   test: "this is comment",
              // },
            },
            { test: "test1" },
          ],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      console.log(result.fileList);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "xl/media/",
        "xl/media/image1.png",
        "xl/drawings/",
        "xl/drawings/_rels/",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/drawings/drawing1.xml",
        "xl/drawings/_rels/drawing1.xml.rels",
        "xl/worksheets/_rels/",
        "xl/worksheets/_rels/sheet1.xml.rels",
        "xl/worksheets/sheet1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(3);
      expect(sheet[0].length).toBe(1);
      expect(sheet[0][0]).toBe("test");
      expect(sheet[1][0]).toBe("test");
      expect(sheet[2][0]).toBe("test1");
    });
  });
  test("test for checkbox", async () => {
    let excelTable: ExcelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          checkbox:[
            {col:1,
            row:1,
          text:"test"}
          ],
          data: [
            {
              test: "test",
            },
            { test: "test1" },
          ],
          headers: [{ label: "test", text: "test" }],
        },
      ],
    };
    await generateExcel(excelTable).then(async (res) => {
      expect(res).not.toBeNull();
      let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "xl/drawings/",
        "_rels/",
        "_rels/.rels",
        "docProps/",
        "docProps/core.xml",
        "docProps/app.xml",
        "xl/workbook.xml",
        "xl/sharedStrings.xml",
        "xl/_rels/",
        "xl/_rels/workbook.xml.rels",
        "xl/theme/",
        "xl/theme/theme1.xml",
        "xl/worksheets/",
        "xl/drawings/drawing1.xml",
        "xl/drawings/vmlDrawing1.vml",
        "xl/worksheets/_rels/",
        "xl/worksheets/_rels/sheet1.xml.rels",
        "xl/worksheets/sheet1.xml",
        "xl/ctrlProps/",
        "xl/ctrlProps/ctrlProp1.xml",
        "[Content_Types].xml",
      ]);
      let sheet;
      if (result.data["Sheet 1"]) {
        sheet = result.data["Sheet 1"];
      } else {
        sheet = result.data["sheet1"];
      }
      expect(sheet.length).toBe(3);
      expect(sheet[0].length).toBe(1);
      expect(sheet[0][0]).toBe("test");
      expect(sheet[1][0]).toBe("test");
      expect(sheet[2][0]).toBe("test1");
    });
  });
});
