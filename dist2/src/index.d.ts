/// <reference types="node" />
import { ThemeOption } from "./themes/theme";
import { Data, ExcelTable, SideBySide } from "./data-model/excel-table";
import { ColWidthScaleFunction, RowHeightScaleFunction } from "./utils/create-excel-data";
import { generateExcel as generateEx } from "./utils/generate-excel";
import { extractExcelData as extractExcelDataUtil } from "./utils/read-utils";
export declare const generateExcel: typeof generateEx;
export declare function convertTableToExcel(queryForTable?: string, table?: HTMLTableElement, keepStyle?: boolean, rowHeightScaleFunction?: RowHeightScaleFunction, colWidthScaleFunction?: ColWidthScaleFunction): Promise<string | number[] | Blob | Buffer | undefined>;
export declare function sideBySideLineByLine(data: SideBySide[][]): Promise<string | number[] | Blob | Buffer | undefined>;
export declare function themeBaseGenerate(data: ExcelTable | Data[] | Data[][], index: number, option?: ThemeOption): Promise<string | number[] | Blob | Buffer | undefined>;
export declare const extractExcelData: typeof extractExcelDataUtil;
//# sourceMappingURL=index.d.ts.map