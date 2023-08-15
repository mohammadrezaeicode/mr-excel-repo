/// <reference types="node" />
import { ExcelTable } from "./data-model/excel-table";
import { ColWidthScaleFunction, RowHeightScaleFunction } from "./utils/create-excel-data";
export declare function generateExcel(data: ExcelTable): Promise<string | number[] | Blob | Buffer | undefined>;
export declare function convertTableToExcel(queryForTable?: string, table?: HTMLTableElement, keepStyle?: boolean, rowHeightScaleFunction?: RowHeightScaleFunction, colWidthScaleFunction?: ColWidthScaleFunction): Promise<string | number[] | Blob | Buffer | undefined>;
//# sourceMappingURL=index.d.ts.map