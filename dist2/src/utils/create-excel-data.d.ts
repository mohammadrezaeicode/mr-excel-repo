import { ExcelTable } from "../data-model/excel-table";
export type RowHeightScaleFunction = (data: number, rowIndex: number, fromHeader: boolean) => number;
export type ColWidthScaleFunction = (data: number, colIndex: number) => number;
export declare function createExcelTabelBaseOnDomElement(queryForTable?: string, table?: HTMLTableElement, keepStyle?: boolean, rowHeightScaleFunction?: RowHeightScaleFunction, colWidthScaleFunction?: ColWidthScaleFunction): ExcelTable;
//# sourceMappingURL=create-excel-data.d.ts.map