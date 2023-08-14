/// <reference types="node" />
import { ExcelTable } from "./data-model/excel-table";
export declare function generateExcel(data: ExcelTable): Promise<string | number[] | Blob | Buffer | undefined>;
export declare function convertTableToExcel(queryForTable?: string, table?: HTMLTableElement, keepStyle?: boolean): Promise<string | number[] | Blob | Buffer | undefined>;
//# sourceMappingURL=index.d.ts.map