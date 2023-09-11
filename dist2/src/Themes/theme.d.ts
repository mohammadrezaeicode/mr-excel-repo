import { Data, ExcelTable } from "../data-model/excel-table";
export interface ThemeOption {
    hIndex?: number;
    rIndex?: number;
    nColor?: boolean;
    hColor?: string;
    rColor?: string;
    fieName?: string;
}
export declare const themeGenerator: (inputData: ExcelTable | Data[] | Data[][], index: number, option?: ThemeOption, filterKeys?: never[]) => ExcelTable;
//# sourceMappingURL=theme.d.ts.map