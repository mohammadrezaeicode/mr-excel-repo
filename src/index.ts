import { themeGenerator } from "./themes/theme";
import type {
  Data,
  ExcelTable,
  SideBySide,
  ThemeOption,
} from "./data-model/excel-table";
import {
  ColWidthScaleFunction,
  RowHeightScaleFunction,
  createExcelTableBaseOnDomElement,
} from "./utils/create-excel-data";
import { generateExcel as generateEx } from "./utils/generate-excel";
import { extractExcelData as extractExcelDataUtil } from "./utils/read-utils";
import { sideBySide } from "./utils/side-by-side";
import type * as DataModel from "./data-model/excel-table";
import * as Validator from "./utils/validate-excel-table";
import {
  addGlobalOptions as addGlobalOptionsFunc,
  addGlobalOptionFromExcelTable as addGlobalOptionFromExcelTableFunc,
} from "./utils/store";
import { generateCSV as gCSV } from "./utils/generateCSV";
export const generateExcel = generateEx;

export const addGlobalOptions = addGlobalOptionsFunc;
export const addGlobalOptionFromExcelTable = addGlobalOptionFromExcelTableFunc;
export function convertTableToExcel(
  queryForTable?: string,
  table?: HTMLTableElement,
  keepStyle?: boolean,
  rowHeightScaleFunction?: RowHeightScaleFunction,
  colWidthScaleFunction?: ColWidthScaleFunction
) {
  const data = createExcelTableBaseOnDomElement(
    queryForTable,
    table,
    keepStyle,
    rowHeightScaleFunction,
    colWidthScaleFunction
  );
  return generateExcel(data);
}

export function sideBySideLineByLine(data: SideBySide[][]) {
  const exData: ExcelTable = sideBySide(data);
  return generateExcel(exData);
}

// export function loadColorHuntData(themeUrl?: string) {
//   retrieveColorHuntData(themeUrl);
// }

export async function themeBaseGenerate(
  data: ExcelTable | Data[] | Data[][],
  index: number,
  option?: ThemeOption
) {
  return generateExcel(await themeGenerator(data, index, option));
}

export const extractExcelData = extractExcelDataUtil;
export function generateCSV(excelTable: ExcelTable, asZip: boolean = false) {
  return gCSV(excelTable, asZip, false);
}
export function generateText(excelTable: ExcelTable, asZip: boolean = false) {
  return gCSV(excelTable, asZip, true);
}
export type { DataModel };
export { Validator };
