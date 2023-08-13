/// <reference types="node" />

declare interface AlignmentOption {
    horizontal?: "center" | "left" | "right";
    vertical?: "center" | "top" | "bottom";
    wrapText?: "0" | "1" | 2 | 1;
    shrinkToFit?: "0" | "1" | 2 | 1;
    readingOrder?: "1" | "2" | 2 | 1;
    textRotation?: number;
    indent?: number;
    rtl?: boolean;
    ltr?: boolean;
}

declare type BorderDirection = "full" | "top" | "left" | "right" | "bottom";

declare type BorderOption = {
    [key in BorderDirection]?: {
        color: string;
        style: "slantDashDot" | "dotted" | "thick" | "hair" | "dashDot" | "dashDotDot" | "dashed" | "thin" | "mediumDashDot" | "medium" | "double" | "mediumDashed";
    };
};

declare interface Data extends DataOptions {
    [key: string]: string | number | undefined;
}

declare interface DataOptions {
    [key: string]: "0" | "1" | number | string | undefined;
    outlineLevel?: number;
    hidden?: "0" | "1" | number;
    rowStyle?: string;
    height?: number;
}

declare interface ExcelTable {
    notSave?: boolean;
    creator?: string;
    backend?: boolean;
    fileName?: string;
    generateType?: "nodebuffer" | "array" | "binarystring" | "base64";
    addDefaultTitleStyle?: boolean;
    created?: string;
    modified?: string;
    numberOfColumn?: number;
    createType?: string;
    mapSheetDataOption?: any;
    styles?: Styles;
    sheet: Sheet[];
}

declare interface Formula {
    [insertCell: string]: FormulaSetting;
}

declare interface FormulaSetting {
    type: FormulaType;
    start: string;
    end: string;
    styleId?: string;
}

declare type FormulaType = "AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN";

export declare function generateExcel(data: ExcelTable): Promise<string | number[] | Blob | Buffer | undefined>;

declare interface Header {
    label: string;
    text: string;
    size?: number;
    formula?: {
        type: FormulaType;
        styleId?: string;
    };
}

declare type MergeRowDataConditionFunction = (data: Header | string | number | undefined, key: string | null, index: number, fromHeader: boolean) => boolean;

declare type ProtectionOption = {
    [key in ProtectionOptionKey]: "0" | "1" | 0 | 1;
};

declare type ProtectionOptionKey = "sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables";

declare interface Sheet {
    withoutHeader?: boolean;
    formula?: Formula;
    name?: string;
    title?: Title;
    shiftTop?: number;
    shiftLeft?: number;
    selected?: boolean;
    tabColor?: string;
    merges?: string[];
    headerStyleKey?: string;
    mergeRowDataCondition?: MergeRowDataConditionFunction;
    styleCellCondition?: StyleCellConditionFunction;
    sortAndfilter?: SortAndFilter;
    state?: "hidden" | "visible";
    headerRowOption?: any;
    protectionOption?: ProtectionOption;
    headerHeight?: number;
    headers: Header[];
    data: Data[];
}

declare interface SortAndFilter {
    mode: "all" | "ref";
    ref?: string;
}

declare interface StyleBody {
    fg?: string;
    fontColor?: string;
    fontFamily?: string;
    size?: number;
    index?: number;
    alignment?: AlignmentOption;
    border?: BorderOption;
    format?: string;
    bold?: boolean;
    underline?: boolean;
    italic?: boolean;
    doubleUnderline?: boolean;
}

declare type StyleCellConditionFunction = (data: Header | string | number | undefined, object: Header | Data, colIndex: number, rowIndex: number, fromHeader: boolean, stylekeys: string[]) => string;

declare interface Styles {
    [key: string]: StyleBody;
}

declare interface Title {
    shiftTop?: number;
    shiftLeft?: number;
    consommeRow?: number;
    consommeCol?: number;
    height?: number;
    styleId?: string;
    text?: string;
}

export { }
