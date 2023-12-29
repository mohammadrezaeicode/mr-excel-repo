import { ThemeOption, themeGenerator } from "./Themes/theme";
import { Data, ExcelTable, SideBySide } from "./data-model/excel-table";
import {
  ColWidthScaleFunction,
  RowHeightScaleFunction,
  createExcelTabelBaseOnDomElement,
} from "./utils/create-excel-data";
import { generateExcel as generateEx } from "./utils/generate-excel";
import { extractExcelData as extractExcelDataUtil } from "./utils/read-utils";
import { sideBySide } from "./utils/side-by-side";

export const generateExcel = generateEx;

export function convertTableToExcel(
  queryForTable?: string,
  table?: HTMLTableElement,
  keepStyle?: boolean,
  rowHeightScaleFunction?: RowHeightScaleFunction,
  colWidthScaleFunction?: ColWidthScaleFunction
) {
  const data = createExcelTabelBaseOnDomElement(
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

export function themeBaseGenerate(
  data: ExcelTable | Data[] | Data[][],
  index: number,
  option?: ThemeOption
) {
  return generateExcel(themeGenerator(data, index, option));
}

export const extractExcelData = extractExcelDataUtil;
