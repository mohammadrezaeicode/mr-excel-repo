import { describe, expect, test } from "@jest/globals";
import { extractExcelData } from "../../../src/utils/read-utils";
interface ResponseApi {
  data: {
    [sheetName: string]: string[][];
  };
  sheetName: Object;
  fileList: string[];
}
describe("toDataURL2 data tests", () => {
  test("should be function", () => {
    expect(typeof extractExcelData).toBe("function");
  });
  test("use valid url input- generated via lib", async () => {
    await extractExcelData(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/x.xlsx?raw=true",
      true
    ).then((res: any) => {
      let resp = <ResponseApi>res;
      expect(typeof resp).toBe("object");
      expect(Array.isArray(resp)).toBeFalsy();
      expect(typeof resp.data).toBe("object");
      expect(typeof resp.sheetName).toBe("object");
      expect(Object.keys(resp.data).length).toBe(2);
      let firstSheet;
      if (resp.data["family record"]) {
        firstSheet = resp.data["family record"];
      } else {
        firstSheet = resp.data["sheet1"];
      }
      expect(firstSheet.length).toBe(11);
      expect(firstSheet[0].length).toBe(6);
      expect(firstSheet[0][0]).toBe("ID");
      expect(firstSheet[10][5]).toBe("1852-12-22T20:12:13.237Z");
      let secondSheet;
      if (resp.data["Sheet 2"]) {
        secondSheet = resp.data["Sheet 2"];
      } else {
        secondSheet = resp.data["sheet2"];
      }
      expect(secondSheet.length).toBe(101);
      expect(secondSheet[0].length).toBe(6);

      expect(secondSheet[0][0]).toBe("ID");

      expect(secondSheet[100][0]).toBe("2649091306594");
      expect(secondSheet[100][5]).toBe("1874-09-20T04:49:58.207Z");
    });
  }, 120000);
  test("use valid url input - generated via program", async () => {
    await extractExcelData(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/y.xlsx?raw=true",
      true
    ).then((res: any) => {
      let resp = <ResponseApi>res;
      expect(typeof resp).toBe("object");
      expect(Array.isArray(resp)).toBeFalsy();
      expect(typeof resp.data).toBe("object");
      expect(typeof resp.sheetName).toBe("object");
      expect(Object.keys(resp.data).length).toBe(1);
      let firstSheet;
      if (resp.data["Sheet 1"]) {
        firstSheet = resp.data["Sheet 1"];
      } else {
        firstSheet = resp.data["sheet1"];
      }
      expect(firstSheet.length).toBe(9);
      expect(firstSheet[0].length).toBe(7);
      expect(firstSheet[1].length).toBe(2);
      expect(typeof firstSheet[2]).toBe("undefined");
      expect(firstSheet[0][0]).toBe("a");
      expect(firstSheet[8][4]).toBe("e9");
    });
  }, 120000);
});
