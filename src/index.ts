import { themeGenerator } from "./functions/theme";
import type {
  Data,
  ExcelTable,
  SideBySide,
  ThemeOption,
} from "./data-model/excel-table";
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

export function sideBySideLineByLine(data: SideBySide[][]) {
  const exData: ExcelTable = sideBySide(data);
  return generateExcel(exData);
}

export function themeBaseGenerate(
  data: ExcelTable | Data[] | Data[][],
  option?: ThemeOption
) {
  return generateExcel(themeGenerator(data, option));
}

export function extractExcelData(
  uri: string,
  isBackend: boolean = false,
  fetchFunc?: Function
) {
  return import("./utils/read-utils").then((m) =>
    m.extractExcelData(uri, isBackend, fetchFunc)
  );
}
export function generateCSV(excelTable: ExcelTable, asZip: boolean = false) {
  return gCSV(excelTable, asZip, false);
}
export function generateText(excelTable: ExcelTable, asZip: boolean = false) {
  return gCSV(excelTable, asZip, true);
}
export function excelToNode(
  uri: string,
  queryForTable?: string | null,
  containerElement?: HTMLDivElement | null,
  config: {
    fetchFunc?: Function;
    firstHeader?: boolean;
    returnTableNodes?: boolean;
    emptyNodeDefaultString?: string;
    removeContainerChildNode?: boolean;
    containerNodeStyle?: object;
    tableStyle?: object;
    cellStyle?: object;
    buttonContainerStyle?: object;
    buttonStyle?: object;
    activeButtonStyle?: object;
  } = { ...defaultConfig }
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
export { Validator, generateExcel, excelToJson };
