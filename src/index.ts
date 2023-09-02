import { ExcelTable, SideBySide } from "./data-model/excel-table";
import {
  ColWidthScaleFunction,
  RowHeightScaleFunction,
  createExcelTabelBaseOnDomElement,
} from "./utils/create-excel-data";
import { generateExcel as generateEx } from "./utils/generate-excel";
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
