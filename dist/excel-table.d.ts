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

declare type ColWidthScaleFunction = (data: number, colIndex: number) => number;

declare interface Comment_2 {
    comment?: string;
    styleId?: string;
    author?: string;
}

declare type CommentConditionFunction = (data: Header | string | number | undefined, object: null | Data, headerKey: string, rowIndex: number, colIndex: number, fromHeader: boolean) => Comment_2 | string | false | undefined | null;

export declare function convertTableToExcel(queryForTable?: string, table?: HTMLTableElement, keepStyle?: boolean, rowHeightScaleFunction?: RowHeightScaleFunction, colWidthScaleFunction?: ColWidthScaleFunction): Promise<string | number[] | Blob | Buffer | undefined>;

declare interface Data extends DataOptions {
    [key: string]: string | number | any | undefined;
}

declare interface DataOptions {
    [key: string]: "0" | "1" | number | string | undefined | MapComment | MapMultiStyleValue;
    outlineLevel?: number;
    hidden?: "0" | "1" | number;
    rowStyle?: string;
    height?: number;
    multiStyleValue?: MapMultiStyleValue;
    comment?: MapComment;
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

export declare const generateExcel: typeof generateExcel_2;

declare function generateExcel_2(data: ExcelTable): Promise<string | number[] | Blob | Buffer | undefined>;

declare interface Header {
    label: string;
    text: string;
    size?: number;
    multiStyleValue?: MultiStyleValue;
    comment?: Comment_2 | string;
    formula?: {
        type: FormulaType;
        styleId?: string;
    };
}

declare interface MapComment {
    [key: string]: Comment_2 | string;
}

declare interface MapMultiStyleValue {
    [key: string]: MultiStyleValue;
}

declare type MergeRowDataConditionFunction = (data: Header | string | number | undefined, key: string | null, index: number, fromHeader: boolean) => boolean;

declare type MultiStyleConditinFunction = (data: Header | string | number | undefined, object: null | Data, headerKey: string, rowIndex: number, colIndex: number, fromHeader: boolean) => MultiStyleValue | null;

declare interface MultiStyleRexValue {
    reg: RegExp | string;
    styleId: string;
}

declare interface MultiStyleValue {
    [key: string]: string | undefined | MultiStyleRexValue[];
    reg?: MultiStyleRexValue[];
}

declare type ProtectionOption = {
    [key in ProtectionOptionKey]: "0" | "1" | 0 | 1;
};

declare type ProtectionOptionKey = "sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables";

declare type RowHeightScaleFunction = (data: number, rowIndex: number, fromHeader: boolean) => number;

declare interface Sheet {
    withoutHeader?: boolean;
    multiStyleConditin?: MultiStyleConditinFunction;
    useSplitBaseOnMatch?: boolean;
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

declare interface SideBySide {
    sheetName?: string;
    spaceX?: number;
    spaceY?: number;
    headers: {
        label: string;
        text: string;
    }[];
    data: Data[];
    headerIndex?: number;
}

export declare function sideBySideLineByLine(data: SideBySide[][]): Promise<string | number[] | Blob | Buffer | undefined>;

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

declare type StyleCellConditionFunction = (data: Header | string | number | undefined, object: Header | Data, colIndex: number, rowIndex: number, fromHeader: boolean, stylekeys: string[]) => string | null;

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
    multiStyleValue?: MultiStyleValue;
    comment?: Comment_2 | string;
}

export { }
