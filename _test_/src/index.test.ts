import { describe, expect, test, jest, afterEach } from "@jest/globals";
import {
  DataModel,
  Validator,
  addGlobalOptionFromExcelTable,
  addGlobalOptions,
  convertTableToExcel,
  excelToNode,
  extractExcelData,
  generateCSV as gCSV,
  generateExcel as generate,
  generateText,
  sideBySideLineByLine,
  themeBaseGenerate,
} from "../../src/index";
import { createExcelTableBaseOnDomElement } from "../../src/functions/create-excel-data";
import { generateExcel } from "../../src/functions/generate-excel";
import { themeGenerator } from "../../src/functions/theme";
import { sideBySide } from "../../src/functions/side-by-side";
import { generateCSV } from "../../src/functions/generate-csv";
jest.mock("../../src/functions/theme.ts");
jest.mock("../../src/functions/create-excel-data.ts");
jest.mock("../../src/functions/generate-excel.ts");
jest.mock("../../src/functions/side-by-side.ts");
jest.mock("../../src/functions/generate-csv.ts");
afterEach(() => {
  jest.resetAllMocks();
});
describe("index function tests", () => {
  test("generate should be exist", () => {
    expect(typeof generate).toBe("function");
  });
  test("addGlobalOptionFromExcelTable should be exist", () => {
    expect(typeof addGlobalOptionFromExcelTable).toBe("function");
  });
  test("addGlobalOptions should be exist", () => {
    expect(typeof addGlobalOptions).toBe("function");
  });
  test("convertTableToExcel should be exist", () => {
    expect(typeof convertTableToExcel).toBe("function");
  });
  test("convertTableToExcel data should be passed", async () => {
    // var queryForTable = null;
    // var table = null;
    // var keepStyle = null;
    // var rowHeightScaleFunction = null;
    // var colWidthScaleFunction = null;
    try {
      await convertTableToExcel("").catch((e) => {
        return "";
      });
    } catch (error) {}
    expect(createExcelTableBaseOnDomElement).toBeCalledTimes(1);
    expect(generateExcel).toBeCalledTimes(1);
  });
  test("excelToNode should be exist", () => {
    expect(typeof excelToNode).toBe("function");
  });
  test("themeGenerator should be called", () => {
    try {
      themeBaseGenerate({
        sheet: [],
      });
    } catch (error) {
      
    }
    expect(themeGenerator).toBeCalledTimes(1);
    expect(generateExcel).toBeCalledTimes(1);
  });
  test("extractExcelData should be exist", () => {
    expect(typeof extractExcelData).toBe("function");
  });
  test("generateCSV should be exist", () => {
    expect(typeof gCSV).toBe("function");
  });
  test("generateCSV most be called", () => {
    try {
      gCSV({
        sheet: [],
      });
    } catch (error) {}
    expect(generateCSV).toHaveBeenCalledTimes(1);
  });
  test("generateText most be called", () => {
    try {
      generateText({
        sheet: [],
      });
    } catch (error) {}
    expect(generateCSV).toHaveBeenCalledTimes(1);
  });
  test("generateText should be exist", () => {
    expect(typeof generateText).toBe("function");
  });
  test("sideBySideLineByLine should be exist", () => {
    expect(typeof sideBySideLineByLine).toBe("function");
  });
  test("sideBySide should be called", async () => {
    await sideBySideLineByLine([]);
    expect(sideBySide).toHaveBeenCalledTimes(1);
  });
  test("themeBaseGenerate should be exist", () => {
    expect(typeof themeBaseGenerate).toBe("function");
  });
});
