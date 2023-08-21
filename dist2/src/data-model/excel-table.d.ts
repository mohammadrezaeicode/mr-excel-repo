export type ProtectionOption = {
    [key in ProtectionOptionKey]: "0" | "1" | 0 | 1;
};
export type ProtectionOptionKey = "sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables";
export type AlignmentOptionKey = "horizontal" | "vertical" | "wrapText" | "shrinkToFit" | "readingOrder" | "textRotation" | "indent";
export interface AlignmentOption {
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
export type BorderDirection = "full" | "top" | "left" | "right" | "bottom";
export type BorderOption = {
    [key in BorderDirection]?: {
        color: string;
        style: "slantDashDot" | "dotted" | "thick" | "hair" | "dashDot" | "dashDotDot" | "dashed" | "thin" | "mediumDashDot" | "medium" | "double" | "mediumDashed";
    };
};
export interface Header {
    label: string;
    text: string;
    size?: number;
    multiStyleValue?: MultiStyleValue;
    comment?: Comment | string;
    formula?: {
        type: FormulaType;
        styleId?: string;
    };
}
export interface Data extends DataOptions {
    [key: string]: string | number | any | undefined;
}
export interface MultiStyleRexValue {
    reg: RegExp | string;
    styleId: string;
}
export interface Comment {
    comment?: string;
    styleId?: string;
    author?: string;
}
export interface MultiStyleValue {
    [key: string]: string | undefined | MultiStyleRexValue[];
    reg?: MultiStyleRexValue[];
}
export interface MapMultiStyleValue {
    [key: string]: MultiStyleValue;
}
export interface MapComment {
    [key: string]: Comment | string;
}
export interface DataOptions {
    [key: string]: "0" | "1" | number | string | undefined | MapComment | MapMultiStyleValue;
    outlineLevel?: number;
    hidden?: "0" | "1" | number;
    rowStyle?: string;
    height?: number;
    multiStyleValue?: MapMultiStyleValue;
    comment?: MapComment;
}
export interface MergeRowConditionMap {
    [columnKey: string]: {
        inProgress: boolean;
        start: number;
    };
}
export type CommentConditionFunction = (data: Header | string | number | undefined, object: null | Data, headerKey: string, rowIndex: number, colIndex: number, fromHeader: boolean) => Comment | string | false | undefined | null;
export type StyleCellConditionFunction = (data: Header | string | number | undefined, object: Header | Data, colIndex: number, rowIndex: number, fromHeader: boolean, stylekeys: string[]) => string | null;
export type MergeRowDataConditionFunction = (data: Header | string | number | undefined, key: string | null, index: number, fromHeader: boolean) => boolean;
export interface SortAndFilter {
    mode: "all" | "ref";
    ref?: string;
}
export interface Title {
    shiftTop?: number;
    shiftLeft?: number;
    consommeRow?: number;
    consommeCol?: number;
    height?: number;
    styleId?: string;
    text?: string;
    multiStyleValue?: MultiStyleValue;
    comment?: Comment | string;
}
export interface Sheet {
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
    commentCodition?: CommentConditionFunction;
    sortAndfilter?: SortAndFilter;
    state?: "hidden" | "visible";
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
    commentSintax: {
        value: {
            [key: string]: string;
        };
    };
    format: {
        count: number;
        value: string;
    };
    border: {
        count: number;
        value: string;
    };
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
export type FormulaType = "AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN";
export interface StyleBody {
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
export interface Styles {
    [key: string]: StyleBody;
}
export interface FormatMap {
    [format: string]: {
        key: number;
        value?: string;
    };
}
export interface FormulaSetting {
    type: FormulaType;
    start: string;
    end: string;
    styleId?: string;
}
export interface Formula {
    [insertCell: string]: FormulaSetting;
}
export interface ExcelTable {
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
//# sourceMappingURL=excel-table.d.ts.map