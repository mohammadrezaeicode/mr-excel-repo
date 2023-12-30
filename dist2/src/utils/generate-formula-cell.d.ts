import { CustomFormulaSetting, FormulaSetting, NoArgFormulaSetting, SingleRefFormulaSetting, Styles } from "../data-model/excel-table";
export declare function generateCellRowCol(string: string, formula: FormulaSetting | SingleRefFormulaSetting | NoArgFormulaSetting | CustomFormulaSetting, sheetIndex: number, styles?: Styles): {
    column: string;
    row: number;
    needCalcChain: boolean;
    isCustom: boolean;
    cell: string;
    chainCell?: undefined;
} | {
    column: string;
    row: number;
    cell: string;
    needCalcChain: boolean;
    chainCell: string;
    isCustom?: undefined;
};
//# sourceMappingURL=generate-formula-cell.d.ts.map