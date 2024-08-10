import { describe, expect, test, jest, it } from "@jest/globals";
import { generateExcel } from "../../../src/functions/generate-excel";
import {
  Data,
  ExcelTable,
  Header,
  PageOption,
  StyleBody,
} from "../../../src/data-model/excel-table";
import { extractExcelData } from "../../../src/utils/read-utils";
import { readGeneratedFile, readSheet1 } from "../read";
import { callApi } from "../utils/call-api";
import * as generateColumn from "../../../src/utils/generate-column-name";
import { cols } from "../../../src/data-model/const-data";
import JSZip from "jszip";
import { countOccurrences } from "../utils";
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
      expect(sheet[8][2]).toBe(null);
    });
    // excelTable = {
    //   styles: {
    //     "0-0": {
    //       alignment: {
    //         ltr: true,
    //         vertical: "center",
    //       },
    //       bold: false,
    //     },
    //     "0-1": {
    //       alignment: {
    //         ltr: true,
    //         vertical: "center",
    //       },
    //       bold: false,
    //     },
    //     "0-2": {
    //       alignment: {
    //         ltr: true,
    //         vertical: "center",
    //       },
    //       bold: false,
    //     },
    //     "0-3": {
    //       alignment: {
    //         ltr: true,
    //         vertical: "center",
    //       },
    //       bold: false,
    //     },
    //     "1-0": {
    //       alignment: {
    //         ltr: true,
    //         vertical: "center",
    //       },
    //       bold: false,
    //     },
    //     "1-1": {
    //       alignment: {
    //         ltr: true,
    //         vertical: "center",
    //       },
    //       bold: false,
    //     },
    //     "1-2": {
    //       alignment: {
    //         ltr: true,
    //         vertical: "center",
    //       },
    //       bold: false,
    //     },
    //     "1-3": {
    //       alignment: {
    //         ltr: true,
    //         vertical: "center",
    //       },
    //       bold: false,
    //     },
    //     "2-0": {
    //       alignment: {
    //         ltr: true,
    //         vertical: "center",
    //       },
    //       bold: false,
    //     },
    //     "2-2": {
    //       //   alignment: {
    //       //     ltr: true,
    //       //     vertical: "center",
    //       //   },
    //       //   bold: false,
    //       // },
    //       // "2-3": {
    //       alignment: {
    //         ltr: true,
    //         vertical: "center",
    //       },
    //       bold: false,
    //     },
    //   },
    //   sheet: [
    //     {
    //       headers: [
    //         {
    //           label: "c0",
    //           text: "#",
    //         },
    //         {
    //           label: "c1",
    //           text: "First",
    //         },
    //         {
    //           label: "c2",
    //           text: "Last",
    //         },
    //         {
    //           label: "c3",
    //           text: "Handle",
    //         },
    //       ],
    //       data: [
    //         {
    //           c0: "1",
    //           c1: "Mark",
    //           c2: "Otto",
    //           c3: "@mdo",
    //           mergeString: "-+--",
    //           mergeStart: [1],
    //           mergeType: ["row"],
    //           // mergeValue:[[
    //           //     1
    //           // ]]
    //         },
    //         {
    //           c0: "2",
    //           c1: "",
    //           c2: "Thornton",
    //           c3: "",
    //           mergeStart: [2],
    //           mergeString: "-+--**",
    //           mergeType: ["col"],
    //           mergeValue: [[1]],
    //         },
    //         {
    //           c0: "2",
    //           c1: "",
    //           c2: "Thornton",
    //           c3: "",
    //           mergeStart: [2],
    //           mergeString: "-+--**",
    //           mergeType: ["col"],
    //           mergeValue: [[1]],
    //         },
    //       ],
    //     },
    //   ],
    // };
    // await generateExcel(excelTable).then(async (res) => {
    //   expect(res).not.toBeNull();
    //   let result: ResponseApi = <ResponseApi>await readGeneratedFile(res, true);
    //   expect(result.fileList).toEqual([
    //     "xl/",
    //     "xl/styles.xml",
    //     "_rels/",
    //     "_rels/.rels",
    //     "docProps/",
    //     "docProps/core.xml",
    //     "docProps/app.xml",
    //     "xl/workbook.xml",
    //     "xl/sharedStrings.xml",
    //     "xl/_rels/",
    //     "xl/_rels/workbook.xml.rels",
    //     "xl/theme/",
    //     "xl/theme/theme1.xml",
    //     "xl/worksheets/",
    //     "xl/worksheets/sheet1.xml",
    //     "[Content_Types].xml",
    //   ]);
    //   let sheet;
    //   if (result.data["Sheet 1"]) {
    //     sheet = result.data["Sheet 1"];
    //   } else {
    //     sheet = result.data["sheet1"];
    //   }
    //   expect(sheet.length).toBe(9);
    //   expect(sheet[4].length).toBe(5);
    //   expect(sheet[4][4]).toBe("this is test title");
    //   expect(sheet[6][2]).toBe("test");
    //   expect(sheet[7][2]).toBe("test1");
    //   expect(sheet[8][2]).toBe(null);
    // }).catch(e=>{
    //   return e
    // })
  }, 150000);
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
      fetch: callApi,
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
        "xl/drawings/_rels/drawing1.xml.rels",
        "xl/drawings/drawing1.xml",
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
      fetch: callApi,
      notSave: true,
      sheet: [
        {
          backgroundImage:
            "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex16.PNG?raw=true",
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
      expect(result.fileList).toEqual([
        "xl/",
        "xl/styles.xml",
        "xl/media/",
        "xl/media/image1.png",
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
  }, 100000);
  test("test for checkbox", async () => {
    let excelTable: ExcelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          checkbox: [{ col: 1, row: 1, text: "test" }],
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
    excelTable = {
      backend: true,
      notSave: true,
      sheet: [
        {
          checkbox: [
            {
              col: 1,
              row: 1,
              text: "test",
              checked: true,
              link: "G5",
              mixed: true,
              threeD: true,
            },
            {
              col: 1,
              row: 1,
              text: "test2",
              checked: true,
              startStr: "A2",
              endStr: "B2",
            },
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
        "xl/ctrlProps/ctrlProp2.xml",
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
  }, 100000);
  test("Data large number of header", async () => {
    const generateColumnSpyObj = jest.spyOn(
      generateColumn,
      "generateColumnName"
    );
    let excelTable: ExcelTable = {
      backend: true,
      notSave: true,
      numberOfColumn: 31,
      addDefaultTitleStyle: true,
      styles: {
        col1: {
          alignment: {
            ltr: true,
          },
          fontFamily: "Times New Roman",
        },
        col2: {
          size: 20,
        },
        col3: {
          bold: true,
        },
        col4: {
          italic: true,
        },
        col5: {
          underline: true,
        },
        col6: {
          doubleUnderline: true,
        },
      },
      sheet: [
        {
          data: [
            [
              {
                ID: 12345,
                Name: "John Smith",
                Age: 35,
                City: "New York City",
                Country: "USA",
                Email: "john.smith@email.com",
                Phone: "(123) 456-7890",
                Occupation: "Software Engineer",
                Salary: 100000.0,
                "Marital Status": "Married",
                "Number of Children": 2,
                "Education Level": "Bachelor's Degree",
                "Favorite Color": "Blue",
                Hobbies: "Hiking, Reading",
                "Travel Frequency": 2,
                "Last Travel Destination": "Paris, France",
                "Favorite Food": "Pizza",
                "Favorite Movie Genre": "Action",
                "Favorite Book Genre": "Fantasy",
                "Social Media Usage": 3,
                "Pet Ownership": "Yes",
                "Pet Type": "Dog",
                "House Size": 3,
                "Car Ownership": "Yes",
                "Car Model": "Toyota Camry",
                "Yearly Income": 120000.0,
                "Net Worth": 500000.0,
                "Credit Score": 750,
                "Investment Portfolio Value": 100000.0,
                "Health Insurance Coverage": "Yes",
                "Life Insurance Coverage": "Yes",
              },
              {
                ID: 67890,
                Name: "Jane Doe",
                Age: 28,
                City: "Los Angeles",
                Country: "USA",
                Email: "jane.doe@email.com",
                Phone: "(555) 123-4567",
                Occupation: "Doctor",
                Salary: 150000.0,
                "Marital Status": "Single",
                "Number of Children": 0,
                "Education Level": "Doctorate",
                "Favorite Color": "Green",
                Hobbies: "Painting, Cooking",
                "Travel Frequency": 1,
                "Last Travel Destination": "Rome, Italy",
                "Favorite Food": "Sushi",
                "Favorite Movie Genre": "Comedy",
                "Favorite Book Genre": "Romance",
                "Social Media Usage": 1,
                "Pet Ownership": "No",
                "Pet Type": "N/A",
                "House Size": 2,
                "Car Ownership": "Yes",
                "Car Model": "Honda Civic",
                "Yearly Income": 180000.0,
                "Net Worth": 200000.0,
                "Credit Score": 800,
                "Investment Portfolio Value": 50000.0,
                "Health Insurance Coverage": "Yes",
                "Life Insurance Coverage": "Yes",
              },
            ],
          ],
          headers: [
            { label: "ID", text: "ID" },
            { label: "Name", text: "Name" },
            { label: "Age", text: "Age" },
            { label: "City", text: "City" },
            { label: "Country", text: "Country" },
            { label: "Email", text: "Email" },
            { label: "Phone", text: "Phone" },
            { label: "Occupation", text: "Occupation" },
            { label: "Salary", text: "Salary" },
            { label: "Marital Status", text: "Marital Status" },
            { label: "Number of Children", text: "Number of Children" },
            { label: "Education Level", text: "Education Level" },
            { label: "Favorite Color", text: "Favorite Color" },
            { label: "Hobbies", text: "Hobbies" },
            { label: "Travel Frequency", text: "Travel Frequency" },
            {
              label: "Last Travel Destination",
              text: "Last Travel Destination",
            },
            { label: "Favorite Food", text: "Favorite Food" },
            { label: "Favorite Movie Genre", text: "Favorite Movie Genre" },
            { label: "Favorite Book Genre", text: "Favorite Book Genre" },
            { label: "Social Media Usage", text: "Social Media Usage" },
            { label: "Pet Ownership", text: "Pet Ownership" },
            { label: "Pet Type", text: "Pet Type" },
            { label: "House Size", text: "House Size" },
            { label: "Car Ownership", text: "Car Ownership" },
            { label: "Car Model", text: "Car Model" },
            { label: "Yearly Income", text: "Yearly Income" },
            { label: "Net Worth", text: "Net Worth" },
            { label: "Credit Score", text: "Credit Score" },
            {
              label: "Investment Portfolio Value",
              text: "Investment Portfolio Value",
            },
            {
              label: "Health Insurance Coverage",
              text: "Health Insurance Coverage",
            },
            {
              label: "Life Insurance Coverage",
              text: "Life Insurance Coverage",
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
      expect(sheet.length).toBe(2);
      expect(sheet[0].length).toBe(31);
    });
    expect(generateColumnSpyObj).toBeCalledWith(cols, 31);
  }, 150000);
  test("exceptions", async () => {
    expect(
      await generateExcel({
        creator: "  ",
        sheet: [],
      }).catch((e) => {
        return e;
      })
    ).toBe('length of "creator" most be bigger then 0');
    expect(
      await generateExcel({
        created: "  ",
        sheet: [],
      }).catch((e) => {
        return e;
      })
    ).toBe('"created" is not valid date');
    expect(
      await generateExcel({
        created: "Not Valid Date",
        sheet: [],
      }).catch((e) => {
        return e;
      })
    ).toBe('"created" is not valid date');
    expect(
      await generateExcel({
        modified: "  ",
        sheet: [],
      }).catch((e) => {
        return e;
      })
    ).toBe('"modified" is not valid date');
    expect(
      await generateExcel({
        modified: "Not Valid Date",
        sheet: [],
      }).catch((e) => {
        return e;
      })
    ).toBe('"modified" is not valid date');
    expect(
      await generateExcel({
        sheet: [
          {
            headers: [],
            data: [],
            pageOption: {
              header: {
                x: "error case",
              },
            },
          },
        ],
      } as any).catch((e) => {
        return e;
      })
    ).toBe("type error");
  }, 150000);
  test("comment option", async () => {
    const colorPalette = {
      c4: "61677A",
      c2: "FFF6E0",
    };
    const rowAlignment = {
      alignment: {
        horizontal: "left",
        vertical: "center",
      },
    };
    const rowStyle = {
      backgroundColor: colorPalette.c2,
      fontFamily: "Times New Roman",
      color: "6A2C70",
      ...rowAlignment,
    };
    const headerStyle = {
      backgroundColor: colorPalette.c4,
      fontFamily: "Times New Roman",
      color: "#FFFFFF",
    };
    let data: ExcelTable = {
      addDefaultTitleStyle: true,
      backend: true,
      notSave: true,
      creator: "mr",
      styles: {
        "c0<0.3": {
          backgroundColor: "DCD6F7",
          color: "424874s",
          ...rowAlignment,
        } as StyleBody,
        male: {
          backgroundColor: "95E1D3",
          color: "252A34",
          ...rowAlignment,
        } as StyleBody,
        female: {
          backgroundColor: "F38181",
          color: "252A34",
          ...rowAlignment,
        } as StyleBody,
        rowStyle: {
          ...rowStyle,
        } as StyleBody,
        headerStyle: {
          ...headerStyle,
        },
      },
      sheet: [
        {
          shiftTop: 1,
          shiftLeft: 1,
          title: {
            comment: "This is comment on table",
            shiftTop: 1,
            shiftLeft: -1,
            consommeRow: 4,
            consommeCol: 6,
            text: "Title",
          },
          commentCondition: function (
            data,
            object,
            headerKey,
            rowIndex,
            colIndex,
            fromHeader
          ) {
            if (fromHeader) {
              if (typeof data == "object" && "text" in data) {
                let textDataC0 = data.text.charAt(0);
                if (textDataC0.toUpperCase() != textDataC0) {
                  return {
                    comment: `
Header should start with ${textDataC0.toUpperCase()}`,
                    author: "System",
                  };
                }
              }
            }
            return false;
          },
          styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
            if (fromHeader) {
              return "headerStyle";
            } else {
              if (colIndex == 0 && typeof data == "number" && data < 0.3) {
                return "c0<0.3";
              } else if (colIndex == 3) {
                if (data) {
                  return "male";
                } else {
                  return "female";
                }
              } else {
                return "rowStyle";
              }
            }
          },
          headers: [
            {
              label: "c1",
              text: "**",
              comment: {
                author: "mr",
                comment: "misspell in header",
              },
            },
            { label: "c2", text: "++" },
            { label: "c3", text: "Name" },
            { label: "c5", text: "gender" },
          ],
          data: [
            { c1: 0.756, c2: 150, c3: "John", c5: 1 },
            {
              c1: 0.238,
              c2: 120,
              c3: "Jane",
              c5: 0,
              comment: {
                c3: "Comment on Jane",
              },
            },
            { c1: 0.865, c2: 180, c3: "Michael", c5: 1 },
            { c1: 0.412, c2: 130, c3: "Emily", c5: 0 },
            { c1: 0.587, c2: 160, c3: "William", c5: 1 },
          ],
        },
      ],
    };
    let exData = await generateExcel(data);
    let sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf("<legacyDrawing")).toBeGreaterThan(0);

    data = {
      addDefaultTitleStyle: true,
      backend: true,
      notSave: true,
      creator: "mr",
      styles: {
        "c0<0.3": {
          backgroundColor: "DCD6F7",
          color: "424874s",
          ...rowAlignment,
        } as StyleBody,
        male: {
          backgroundColor: "95E1D3",
          color: "252A34",
          ...rowAlignment,
        } as StyleBody,
        female: {
          backgroundColor: "F38181",
          color: "252A34",
          ...rowAlignment,
        } as StyleBody,
        rowStyle: {
          ...rowStyle,
        } as StyleBody,
        headerStyle: {
          ...headerStyle,
        },
      },
      sheet: [
        {
          shiftTop: 1,
          shiftLeft: 1,
          title: {
            comment: {
              author: "TEST",
              comment: "This is comment on table",
              styleId: "headerStyle",
            },
            shiftTop: 1,
            shiftLeft: -1,
            consommeRow: 4,
            consommeCol: 6,
            text: "Title",
          },
          commentCondition: function (
            data,
            object,
            headerKey,
            rowIndex,
            colIndex,
            fromHeader
          ) {
            if (fromHeader) {
              if (typeof data == "object" && "text" in data) {
                let textDataC0 = data.text.charAt(0);
                if (textDataC0.toUpperCase() != textDataC0) {
                  return {
                    comment: `
Header should start with ${textDataC0.toUpperCase()}`,
                    author: "System",
                  };
                }
              }
            }
            return false;
          },
          styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
            if (fromHeader) {
              return "headerStyle";
            } else {
              if (colIndex == 0 && typeof data == "number" && data < 0.3) {
                return "c0<0.3";
              } else if (colIndex == 3) {
                if (data) {
                  return "male";
                } else {
                  return "female";
                }
              } else {
                return "rowStyle";
              }
            }
          },
          headers: [
            {
              label: "c1",
              text: "**",
              comment: {
                author: "mr",
                comment: "misspell in header",
              },
            },
            { label: "c2", text: "++" },
            { label: "c3", text: "Name" },
            { label: "c5", text: "gender" },
          ],
          data: [
            { c1: 0.756, c2: 150, c3: "John", c5: 1 },
            {
              c1: 0.238,
              c2: 120,
              c3: "Jane",
              c5: 0,
              comment: {
                c3: "Comment on Jane",
              },
            },
            { c1: 0.865, c2: 180, c3: "Michael", c5: 1 },
            { c1: 0.412, c2: 130, c3: "Emily", c5: 0 },
            { c1: 0.587, c2: 160, c3: "William", c5: 1 },
          ],
        },
      ],
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf("<legacyDrawing")).toBeGreaterThan(0);
  }, 150000);
  test("Conditional Formatting option", async () => {
    const data: ExcelTable = {
      backend: true,
      notSave: true,
      activateConditionalFormatting: true,
      styles: {
        ct: {
          type: "conditionalFormatting",
          backgroundColor: "222831",
          color: "EEEEEE",
        },
      },
      sheet: [
        {
          headers: [
            {
              label: "Column1",
              text: "Text1",
              conditionalFormatting: { type: "dataBar" },
            },
            {
              label: "Column2",
              text: "Text2",
              conditionalFormatting: { type: "dataBar" },
            },
            {
              label: "Column3",
              text: "Text3",
              conditionalFormatting: { type: "colorScale" },
            },
            {
              label: "Column4",
              text: "Text4",
              conditionalFormatting: { type: "top", value: 2 },
            },

            {
              label: "Column5",
              text: "Text5",
              conditionalFormatting: {
                type: "top",
                styleId: "ct",
                value: 2,
                bottom: true,
              },
            },
            {
              label: "Column6",
              text: "Text6",
              conditionalFormatting: {
                type: "top",
                operator: "aboveAverage",
                value: 1,
              },
            },
            {
              label: "Column7",
              text: "Text7",
              conditionalFormatting: {
                type: "top",
                operator: "belowAverage",
                styleId: "ct",
                value: 1,
              },
            },
            {
              label: "Column8",
              text: "Text8",
              conditionalFormatting: {
                type: "iconSet",
                operator: "5Arrow",
                styleId: "ct",
                value: 1,
              },
            },
            {
              label: "Column8",
              text: "Text9",
              conditionalFormatting: {
                type: "iconSet",
                operator: "4Arrow",
                styleId: "ct",
                value: 1,
              },
            },
          ],
          data: [
            {
              Column1: 123,
              Column2: 456,
              Column3: 789,
              Column4: 101,
              Column5: 101,
              Column6: 101,
              Column7: 101,
              Column8: 101,
            },
            {
              Column1: 234,
              Column2: 567,
              Column3: 890,
              Column4: 202,
              Column5: 202,
              Column6: 202,
              Column7: 202,
              Column8: 202,
            },
            {
              Column1: 345,
              Column2: 678,
              Column3: 901,
              Column4: 303,
              Column5: 303,
              Column6: 303,
              Column7: 303,
              Column8: 303,
            },
            {
              Column1: 456,
              Column2: 789,
              Column3: 123,
              Column4: 404,
              Column5: 404,
              Column6: 404,
              Column7: 404,
              Column8: 404,
            },
          ],
        },
      ],
    };
    const exData = await generateExcel(data);
    const sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf("<conditionalFormatting")).toBeGreaterThan(
      0
    );
  }, 150000);
  test("header option", async () => {
    const colorPalette = {
      c1: "561C24",
      c2: "6D2932",
      c3: "C7B7A3",
      c4: "E8D8C4",
    };
    const first: StyleBody = {
      type: "HF",
      backgroundColor: colorPalette.c2,
      fontFamily: "Times New Roman",
      bold: true,
      underline: true,
      size: 20,
      color: colorPalette.c1,
    };
    const second: StyleBody = {
      type: "HF",
      italic: true,
      backgroundColor: colorPalette.c1,
      fontFamily: "Times New Roman",
      color: colorPalette.c2,
    };
    const data: ExcelTable = {
      creator: "mr",
      notSave: true,
      backend: true,
      styles: {
        first,
        second,
      },
      sheet: [
        {
          rtl: true,
          pageOption: {
            margin: {
              top: 0.85,
              right: 0.85,
              left: 0.85,
              bottom: 0.85,
            },
            header: {
              first: {
                c: {
                  text: "First Header center",
                  styleId: "first",
                },
                l: {
                  text: "First Header Left",
                },
              },
              odd: {
                r: {
                  text: "Odd Headers right",
                },
              },
            },
            footer: {
              even: {
                c: {
                  text: "Even Footers center",
                  styleId: "second",
                },
              },
            },
          } as PageOption,
          headers: [
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "birthDate", text: "Birth Date", size: 40 },
          ],
          data: [
            {
              id: 1525528872576,
              name: "Declan",
              surname: "Bright",
              parentId: 9193814686664,
              work: "National Park Service ranger",
              birthDate: "1854-02-28T22:39:49.028Z",
            },
            {
              id: 1933819177102,
              name: "Phoebe",
              surname: "Austin",
              parentId: 7377315170005,
              work: "Director of audience services",
              birthDate: "1852-04-18T10:17:54.557Z",
            },
            {
              id: 9541178576629,
              name: "Waite",
              surname: "Aveyard",
              parentId: 8770728211947,
              work: "Retired",
              birthDate: "1854-12-11T17:36:40.765Z",
            },
            {
              id: 2473638123843,
              name: "Kaitlin",
              surname: "Courtney",
              parentId: 3076331620534,
              work: "Maintenance engineering",
              birthDate: "1854-03-04T01:50:50.209Z",
            },
            {
              id: 7140741364134,
              name: "Tristan",
              surname: "King",
              parentId: 4674378612151,
              work: "Japanese idol",
              birthDate: "1853-12-08T21:09:19.672Z",
            },
            {
              id: 8756865627934,
              name: "Egerton",
              surname: "Mendenhall",
              parentId: 4218847452166,
              work: "Japanese idol",
              birthDate: "1854-10-24T12:41:51.902Z",
            },
            {
              id: 5098636603452,
              name: "Adele",
              surname: "Monroe",
              parentId: 9762225632557,
              work: "Unemployed",
              birthDate: "1852-10-11T09:48:24.128Z",
            },
            {
              id: 6700176094055,
              name: "Katey",
              surname: "Lewis",
              parentId: 7938892587472,
              work: "work from home",
              birthDate: "1852-05-19T09:36:47.969Z",
            },
            {
              id: 6869885121153,
              name: "Rodney",
              surname: "Saxby",
              parentId: 576630955195,
              work: "Cardiovascular Technologist",
              birthDate: "1852-11-07T03:33:46.973Z",
            },
            {
              id: 1389127579072,
              name: "Dare",
              surname: "Kenny",
              parentId: 4017546822023,
              work: "Engineering technologist",
              birthDate: "1852-10-25T23:36:29.109Z",
            },
            {
              id: 6801196917678,
              name: "Potter",
              surname: "Bradbury",
              parentId: 3750611241942,
              work: "Petroleum geologist",
              birthDate: "1852-10-12T06:59:33.426Z",
            },
            {
              id: 1981219057492,
              name: "Charlene",
              surname: "Stuttaford",
              parentId: 5645329253708,
              work: "Harlequin",
              birthDate: "1853-11-22T01:25:50.328Z",
            },
            {
              id: 8447379393015,
              name: "Molly",
              surname: "Lawrenson",
              parentId: 7440555772320,
              work: "Healthcare science",
              birthDate: "1853-01-20T19:18:17.595Z",
            },
            {
              id: 1421335493979,
              name: "Tyson",
              surname: "Grennan",
              parentId: 1518948755485,
              work: "Pilot",
              birthDate: "1852-09-04T12:05:31.252Z",
            },
            {
              id: 5260799325935,
              name: "Sophia",
              surname: "Buckley",
              parentId: 8474979566542,
              work: "Stunt performer",
              birthDate: "1853-01-05T04:12:27.037Z",
            },
            {
              id: 2231363435720,
              name: "Melody",
              surname: "Humpherys",
              parentId: 2317759882951,
              work: "work from home",
              birthDate: "1853-01-12T00:39:05.356Z",
            },
            {
              id: 9555420460973,
              name: "Kristi",
              surname: "Adkins",
              parentId: 9735997282913,
              work: "Upholsterer",
              birthDate: "1853-10-19T15:26:25.022Z",
            },
            {
              id: 1613978413981,
              name: "Paul",
              surname: "Cook",
              parentId: 202934661757,
              work: "Pipefitter",
              birthDate: "1853-02-21T08:46:25.185Z",
            },
            {
              id: 6752497709181,
              name: "Kayden",
              surname: "Woodcock",
              parentId: 2850592397073,
              work: "Arborist",
              birthDate: "1854-03-05T02:17:31.620Z",
            },
          ],
        },
      ],
    };
    let exData = await generateExcel(data);
    let sheetResultData = await readSheet1(exData);
    let pSIndex = sheetResultData.indexOf("<headerFooter");
    let pSEIndex = sheetResultData.indexOf("</headerFooter>");
    let eFIndex = sheetResultData.indexOf("<evenFooter");
    let eFEIndex = sheetResultData.indexOf("</evenFooter>");
    let fHIndex = sheetResultData.indexOf("<firstHeader");
    let fHEIndex = sheetResultData.indexOf("</firstHeader>");
    let oHIndex = sheetResultData.indexOf("<oddHeader");
    let oHEIndex = sheetResultData.indexOf("</oddHeader>");
    let pMIndex = sheetResultData.indexOf("<pageMargins");
    expect(sheetResultData.indexOf('rightToLeft="1"')).toBeGreaterThan(0);
    expect(pSIndex).toBeGreaterThan(0);
    expect(pMIndex).toBeGreaterThan(0);

    expect(eFIndex).toBeGreaterThan(pSIndex);
    expect(eFEIndex).toBeGreaterThan(eFIndex);
    expect(pSEIndex).toBeGreaterThan(eFEIndex);

    expect(fHIndex).toBeGreaterThan(pSIndex);
    expect(fHEIndex).toBeGreaterThan(fHIndex);
    expect(pSEIndex).toBeGreaterThan(fHEIndex);

    expect(oHIndex).toBeGreaterThan(pSIndex);
    expect(oHEIndex).toBeGreaterThan(oHIndex);
    expect(pSEIndex).toBeGreaterThan(oHEIndex);
  }, 150000);
  test("pageBreak option", async () => {
    const colorPalette = {
      c1: "561C24",
      c2: "6D2932",
      c3: "C7B7A3",
      c4: "E8D8C4",
    };
    const first: StyleBody = {
      type: "HF",
      backgroundColor: colorPalette.c2,
      fontFamily: "Times New Roman",
      color: colorPalette.c4,
    };
    const second: StyleBody = {
      type: "HF",
      backgroundColor: colorPalette.c4,
      fontFamily: "Times New Roman",
      color: colorPalette.c2,
    };
    const data: ExcelTable = {
      creator: "mr",
      backend: true,
      notSave: true,
      styles: {
        first,
        second,
      },
      sheet: [
        {
          pageOption: {
            isPortrait: true,
          },
          pageBreak: {
            row: [1, 2, 3, 10],
            column: [4, 6, 15, 17],
          },
          headers: [
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "birthDate", text: "Birth Date", size: 40 },
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "birthDate", text: "Birth Date", size: 40 },
          ],
          data: [
            {
              id: 1525528872576,
              name: "Declan",
              surname: "Bright",
              parentId: 9193814686664,
              work: "National Park Service ranger",
              birthDate: "1854-02-28T22:39:49.028Z",
            },
          ],
        },
      ],
    };
    let exData = await generateExcel(data);
    let sheetResultData = await readSheet1(exData);
    let rBIndex = sheetResultData.indexOf('<rowBreaks count="4"');
    let rBEIndex = sheetResultData.indexOf("</rowBreaks>");
    let cBIndex = sheetResultData.indexOf('<colBreaks count="4"');
    let cBEIndex = sheetResultData.indexOf("</colBreaks>");
    let brkCount = countOccurrences(sheetResultData, "<brk");
    expect(brkCount).toBe(8);
    expect(rBIndex).toBeGreaterThan(0);
    expect(rBEIndex).toBeGreaterThan(rBIndex);

    expect(cBIndex).toBeGreaterThan(0);
    expect(cBEIndex).toBeGreaterThan(cBIndex);
    expect(sheetResultData.indexOf('orientation="portrait"')).toBeGreaterThan(
      0
    );
  }, 150000);
  test("view option", async () => {
    const colorPalette = {
      c1: "561C24",
      c2: "6D2932",
      c3: "C7B7A3",
      c4: "E8D8C4",
    };
    const first: StyleBody = {
      type: "HF",
      backgroundColor: colorPalette.c2,
      fontFamily: "Times New Roman",
      color: colorPalette.c4,
    };
    const second: StyleBody = {
      type: "HF",
      backgroundColor: colorPalette.c4,
      fontFamily: "Times New Roman",
      color: colorPalette.c2,
    };
    const data: ExcelTable = {
      creator: "mr",
      notSave: true,
      backend: true,
      styles: {
        first,
        second,
      },
      sheet: [
        {
          viewOption: {
            type: "pageLayout",
            hideRuler: true,
          },
          headers: [
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "id", text: "ID" },
            { label: "name", text: "Name" },
            { label: "surname", text: "Surname" },
            { label: "parentId", text: "Parent Id" },
            { label: "work", text: "Work" },
            { label: "birthDate", text: "Birth Date", size: 40 },
          ],
          data: [
            {
              id: 1525528872576,
              name: "Declan",
              surname: "Bright",
              parentId: 9193814686664,
              work: "National Park Service ranger",
              birthDate: "1854-02-28T22:39:49.028Z",
            },
          ],
        },
      ],
    };
    let exData = await generateExcel(data);
    let sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('view="pageLayout"')).toBeGreaterThan(0);
    expect(sheetResultData.indexOf('showRuler="0"')).toBeGreaterThan(0);

    data.sheet[0].viewOption = {
      type: "pageBreakPreview",
      hideHeadlines: true,
      hideGrid: true,
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('view="pageBreakPreview"')).toBeGreaterThan(
      0
    );
    expect(sheetResultData.indexOf('showRowColHeaders="0"')).toBeGreaterThan(0);
    expect(sheetResultData.indexOf('showGridLines="0"')).toBeGreaterThan(0);
    data.sheet[0].viewOption = {
      frozenOption: {
        type: "R",
        index: {
          r: 1,
          c: 2,
        },
      },
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('state="frozen"')).toBeGreaterThan(0);
    expect(sheetResultData.indexOf('<pane ySplit="')).toBeGreaterThan(0);

    data.sheet[0].viewOption = {
      frozenOption: {
        type: "C",
        index: {
          r: 1,
          c: 2,
        },
      },
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('state="frozen"')).toBeGreaterThan(0);
    expect(sheetResultData.indexOf('<pane xSplit="')).toBeGreaterThan(0);

    data.sheet[0].viewOption = {
      frozenOption: {
        type: "BOTH",
        index: 1,
      },
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('state="frozen"')).toBeGreaterThan(0);
    expect(sheetResultData.indexOf('<pane xSplit="')).toBeGreaterThan(0);

    data.sheet[0].viewOption = {
      frozenOption: {
        type: "R",
        index: 1,
      },
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('state="frozen"')).toBeGreaterThan(0);
    expect(sheetResultData.indexOf('<pane ySplit="')).toBeGreaterThan(0);
    data.sheet[0].viewOption = {
      frozenOption: {
        type: "C",
        index: 1,
      },
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('state="frozen"')).toBeGreaterThan(0);
    expect(sheetResultData.indexOf('<pane xSplit="')).toBeGreaterThan(0);
    data.sheet[0].viewOption = {
      frozenOption: {
        type: "B",
        index: {
          r: 2,
          c: 3,
        },
      },
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('state="frozen"')).toBeGreaterThan(0);
    expect(sheetResultData.indexOf('<pane xSplit="')).toBeGreaterThan(0);
    data.sheet[0].viewOption = {
      splitOption: {
        type: "V", //or "VERTICAL"
        split: 10000,
        startAt: {
          l: "C1",
          r: "E1",
        },
      },
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('state="frozen"')).toBe(-1);
    expect(sheetResultData.indexOf('<pane xSplit="')).toBeGreaterThan(0);
    data.sheet[0].viewOption = {
      splitOption: {
        type: "H", //or "HORIZONTAL"
        split: 5000,
        startAt: {
          t: "A15",
          b: "A7",
        },
      },
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('state="frozen"')).toBe(-1);
    expect(sheetResultData.indexOf('<pane ySplit="')).toBeGreaterThan(0);
    data.sheet[0].viewOption = {
      splitOption: {
        type: "B", //or "BOTH"
        split: {
          x: 10000,
          y: 5000,
        },
        startAt: {
          one: "A15",
          two: "A7",
        },
      },
    };
    exData = await generateExcel(data);
    sheetResultData = await readSheet1(exData);
    expect(sheetResultData.indexOf('state="frozen"')).toBe(-1);
    expect(sheetResultData.indexOf('<pane xSplit="')).toBeGreaterThan(0);
  }, 150000);
});
