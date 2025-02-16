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
  excelToJson as exTJson,
  replaceInExcel as rep,
} from "../../src/index";
import {
  defaultConfig,
  excelToNode as mainExcelToNode,
} from "../../src/functions/excel-to-node";
import { createExcelTableBaseOnDomElement } from "../../src/functions/create-excel-data";
import { generateExcel } from "../../src/functions/generate-excel";
import { themeGenerator } from "../../src/functions/theme";
import { sideBySide } from "../../src/functions/side-by-side";
import { generateCSV } from "../../src/functions/generate-csv";
import { replaceInExcel } from "../../src/functions/replacer";
import { excelToJson } from "../../src/functions/excel-to-json";
import {extractExcelData as eE} from "../../src/utils/read-utils"
jest.mock("../../src/functions/excel-to-json");
jest.mock("../../src/utils/read-utils");
jest.mock("../../src/functions/theme.ts");
jest.mock("../../src/functions/create-excel-data.ts");
jest.mock("../../src/functions/generate-excel.ts");
jest.mock("../../src/functions/side-by-side.ts");
jest.mock("../../src/functions/generate-csv.ts");
jest.mock("../../src/functions/replacer.ts");
jest.mock("../../src/functions/generate-csv.ts");
jest.mock("../../src/functions/excel-to-node");
afterEach(() => {
  jest.resetAllMocks();
});
describe("index function tests", () => {
  test("replaceInExcel data should be passed", async () => {
    try {
      await rep("", {}, {});
    } catch (error) {}
    expect(replaceInExcel).toBeCalledTimes(1);
  });
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
  test("excelToNode should be exist", async () => {
    try {
      await excelToNode("", "", null);
    } catch (error) {}
    expect(mainExcelToNode).toBeCalledTimes(1);
  });
  test("themeGenerator should be called", () => {
    try {
      themeBaseGenerate({
        sheet: [],
      });
    } catch (error) {}
    expect(themeGenerator).toBeCalledTimes(1);
    expect(generateExcel).toBeCalledTimes(1);
  });
  test("extractExcelData should be exist", () => {
    expect(typeof extractExcelData).toBe("function");
  });
  test("extractExcelData should be called",async () => {
    try {
     await extractExcelData("");
    } catch (error) {}
    expect(eE).toBeCalledTimes(1);
  });
  test("generateCSV should be exist", () => {
    expect(typeof gCSV).toBe("function");
  });
  test("excelToJson most be called",async () => {
    try {
      await exTJson("");
    } catch (error) {}
    expect(excelToJson).toHaveBeenCalledTimes(1);
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
