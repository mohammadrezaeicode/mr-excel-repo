export interface ProtectionOption {
    sheet: "0" | "1";
    formatCells: "0" | "1";
    formatColumns: "0" | "1";
    formatRows: "0" | "1";
    insertColumns: "0" | "1";
    insertRows: "0" | "1";
    insertHyperlinks: "0" | "1";
    deleteColumns: "0" | "1";
    deleteRows: "0" | "1";
    sort: "0" | "1";
    autoFilter: "0" | "1";
    pivotTables: "0" | "1";
}
export type ProtectionOptionKey = "sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables";
export interface Header {
    label: string;
    text: string;
    size?: number;
}
export interface Data extends DataOptions {
    [key: string]: string | number | undefined;
}
export interface DataOptions {
    [key: string]: "0" | "1" | number | string | undefined;
    outlineLevel?: number;
    hidden?: "0" | "1";
    rowStyle?: string;
    height?: number;
}
export interface Sheet {
    name?: string;
    selected?: boolean;
    tabColor?: string;
    state: "hidden" | "visible";
    headerRowOption?: any;
    protectionOption?: ProtectionOption;
    headerHeight?: number;
    headers: Header[];
    data: Data[];
}
export interface HeaderRowOption {
    outlineLevel: "string";
}
export interface StyleMapper {
    fill: {
        count: number;
        value: string;
    };
    font: {
        count: number;
        value: string;
    };
    cell: {
        count: number;
        value: string;
    };
}
export interface Styles {
    [key: string]: {
        fg?: string;
        fontColor?: string;
        fontFamily: string;
        size?: number;
        index?: number;
    };
}
export interface Formula {
    useFormula: boolean;
    cell: string;
    type?: string;
    start?: string;
    end?: string;
    styleId: string;
}
export interface ExcelTable {
    creator?: string;
    lastModifiedBy?: string;
    created?: string;
    modified?: string;
    numberOfColumn?: number;
    createType?: string;
    mapSheetDataOption?: any;
    styles?: Styles;
    formula?: Formula;
    sheet: Sheet[];
}
//# sourceMappingURL=excel-table.d.ts.map