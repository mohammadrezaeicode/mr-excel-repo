import { themeGenerator } from "./functions/theme";
import type {
  Data,
  ExcelTable,
  SideBySide,
  ThemeOption,
  ExcelToNodeConfig
} from "./data-model/excel-table";
import { replaceInExcel } from "./functions/replacer";
import {
  type ColWidthScaleFunction,
  type RowHeightScaleFunction,
  createExcelTableBaseOnDomElement,
} from "./functions/create-excel-data";
import { generateExcel } from "./functions/generate-excel";
import { sideBySide } from "./functions/side-by-side";
import type * as DataModel from "./data-model/excel-table";
import * as Validator from "./functions/validate-excel-table";
import {
  addGlobalOptions as addGlobalOptionsFunc,
  addGlobalOptionFromExcelTable as addGlobalOptionFromExcelTableFunc,
} from "./utils/store";
import { generateCSV as gCSV } from "./functions/generate-csv";
import {
  defaultConfig,
  excelToNode as mainExcelToNode,
} from "./functions/excel-to-node";
import { excelToJson } from "./functions/excel-to-json";

export const addGlobalOptions = addGlobalOptionsFunc;
export const addGlobalOptionFromExcelTable = addGlobalOptionFromExcelTableFunc;

/**
 * Converts an HTML table to an Excel file.
 * @param {string} [queryForTable] - The query selector for the table.
 * @param {HTMLTableElement} [table] - The HTML table element.
 * @param {Object} [config] - The configuration options.
 * @param {boolean} [config.keepStyle] - Whether to keep the style.
 * @param {RowHeightScaleFunction} [config.rowHeightScaleFunction] - The function to scale row height.
 * @param {ColWidthScaleFunction} [config.colWidthScaleFunction] - The function to scale column width.
 * @returns {Promise<string | number[] | Blob | DataModel.Buffer | undefined>} The generated Excel table.
 */
export function convertTableToExcel(
  queryForTable?: string,
  table?: HTMLTableElement,
  config: {
    keepStyle?: boolean;
    rowHeightScaleFunction?: RowHeightScaleFunction;
    colWidthScaleFunction?: ColWidthScaleFunction;
  } = {}
) {
  const data = createExcelTableBaseOnDomElement(
    queryForTable,
    table,
    config.keepStyle,
    config.rowHeightScaleFunction,
    config.colWidthScaleFunction
  );
  return generateExcel(data);
}

/**
 * Generates an Excel file with side-by-side data.
 * @param {SideBySide[][]} data - The side-by-side data.
 * @returns {Promise<string | number[] | Blob | DataModel.Buffer | undefined>} The generated Excel table.
 */
export function sideBySideLineByLine(data: SideBySide[][]) {
  const exData: ExcelTable = sideBySide(data);
  return generateExcel(exData);
}

/**
 * Generates an Excel file with a theme.
 * @param {ExcelTable | Data[] | Data[][]} data - The data for the Excel file.
 * @param {ThemeOption} [option] - The theme options.
 * @returns {Promise<string | number[] | Blob | DataModel.Buffer | undefined>} The generated Excel table.
 */
export function themeBaseGenerate(
  data: ExcelTable | Data[] | Data[][],
  option?: ThemeOption
) {
  return generateExcel(themeGenerator(data, option));
}

/**
 * Extracts data from an Excel file.
 * @param {string} uri - The URI of the Excel file.
 * @param {boolean} [isBackend=false] - Whether the extraction is done on the backend.
 * @param {Function} [fetchFunc] - The function to fetch data.
 * @returns {Promise<DataModel.ReadResult>} The extracted data.
 */
export function extractExcelData(
  uri: string,
  isBackend: boolean = false,
  fetchFunc?: Function
) {
  return import("./utils/read-utils").then((m) =>
    m.extractExcelData(uri, isBackend, fetchFunc)
  );
}

/**
 * Generates a CSV file from an Excel table Object.
 * @param {ExcelTable} excelTable - The Excel table.
 * @param {boolean} [asZip=false] - Whether to generate the CSV as a ZIP file.
 * @returns {Promise<string[] | "done" | undefined>} The generated CSV file.
 */
export function generateCSV(excelTable: ExcelTable, asZip: boolean = false) {
  return gCSV(excelTable, asZip, false);
}

/**
 * Generates a text file from an Excel table Object.
 * @param {ExcelTable} excelTable - The Excel table.
 * @param {boolean} [asZip=false] - Whether to generate the text file as a ZIP file.
 * @returns {Promise<string[] | "done" | undefined>} The generated text file.
 */
export function generateText(excelTable: ExcelTable, asZip: boolean = false) {
  return gCSV(excelTable, asZip, true);
}

/**
 * Converts an Excel file to a Node.
 * @param {string} uri - The URI of the Excel file.
 * @param {string | null} [queryForTable] - The query selector for the table.
 * @param {HTMLDivElement | null} [containerElement] - The container element.
 * @param {ExcelToNodeConfig} [config=defaultConfig] - The configuration options.
 * @returns {Promise<HTMLTableElement[] | "Done">} The result of the conversion.
 */
export function excelToNode(
  uri: string,
  queryForTable?: string | null,
  containerElement?: HTMLDivElement | null,
  config: ExcelToNodeConfig = { ...defaultConfig }
) {
  config = {
    ...defaultConfig,
    ...config,
  };
  return mainExcelToNode(
    uri,
    queryForTable,
    containerElement,
    config.fetchFunc,
    config.firstHeader,
    config.returnTableNodes,
    config.emptyNodeDefaultString,
    config.removeContainerChildNode,
    config.containerNodeStyle,
    config.tableStyle,
    config.cellStyle,
    config.buttonContainerStyle,
    config.buttonStyle,
    config.activeButtonStyle
  );
}

export type { DataModel };
export { Validator, generateExcel, excelToJson, replaceInExcel };