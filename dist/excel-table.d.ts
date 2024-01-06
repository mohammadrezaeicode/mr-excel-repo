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

declare interface Checkbox {
    col: number;
    row: number;
    text: string;
    link?: string;
    checked?: boolean;
    mixed?: boolean;
    threeD?: boolean;
    startStr?: string;
    endStr?: string;
}

declare type ColWidthScaleFunction = (data: number, colIndex: number) => number;

declare interface Comment_2 {
    comment?: string;
    styleId?: string;
    author?: string;
}

declare type CommentConditionFunction = (data: Header | string | number | undefined, object: null | Data, headerKey: string, rowIndex: number, colIndex: number, fromHeader: boolean) => Comment_2 | string | false | undefined | null;

declare interface ConditionalFormatting {
    type: "cells" | "dataBar" | "iconSet" | "colorScale" | "top";
    start: string;
    end: string;
    operator?: string;
    value?: number | string;
    priority?: number;
    colors?: string[];
    bottom?: boolean;
    styleId?: string;
    percent?: number;
}

export declare function convertTableToExcel(queryForTable?: string, table?: HTMLTableElement, keepStyle?: boolean, rowHeightScaleFunction?: RowHeightScaleFunction, colWidthScaleFunction?: ColWidthScaleFunction): Promise<string | number[] | Blob | Buffer | undefined>;

declare interface CustomFormulaSetting {
    isArray?: boolean;
    referenceCells?: string;
    formula: string;
    returnType?: string;
    styleId?: string;
}

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

declare interface ExcelTable extends ExcelTableOption {
    sheet: Sheet[];
}

declare interface ExcelTableOption {
    notSave?: boolean;
    creator?: string;
    backend?: boolean;
    activateConditionalFormatting?: boolean;
    fileName?: string;
    generateType?: "nodebuffer" | "array" | "binarystring" | "base64";
    addDefaultTitleStyle?: boolean;
    created?: string;
    modified?: string;
    numberOfColumn?: number;
    createType?: string;
    mapSheetDataOption?: any;
    styles?: Styles;
}

export declare const extractExcelData: typeof extractExcelData_2;

declare function extractExcelData_2(uri: string, isBackend?: boolean): Promise<unknown>;

declare interface Formula {
    [insertCell: string]: FormulaSetting | SingleRefFormulaSetting | NoArgFormulaSetting | CustomFormulaSetting;
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
    conditionalFormatting?: ConditionalFormatting;
    formula?: {
        type: FormulaType;
        styleId?: string;
    };
}

declare interface ImageTypes {
    url: string;
    from: string;
    to?: string;
    type?: "one" | "two";
    extent?: {
        cx: number;
        cy: number;
    };
    margin?: {
        all?: number;
        right?: number;
        left?: number;
        bottom?: number;
        top?: number;
    };
}

declare interface MapComment {
    [key: string]: Comment_2 | string;
}

declare interface MapMultiStyleValue {
    [key: string]: MultiStyleValue;
}

declare type MergeRowDataConditionFunction = (data: Header | string | number | undefined, key: string | null, index: number, fromHeader: boolean) => boolean;

declare type MultiStyleConditionFunction = (data: Header | string | number | undefined, object: null | Data, headerKey: string, rowIndex: number, colIndex: number, fromHeader: boolean) => MultiStyleValue | null;

declare interface MultiStyleRexValue {
    reg: RegExp | string;
    styleId: string;
}

declare interface MultiStyleValue {
    [key: string]: string | undefined | MultiStyleRexValue[];
    reg?: MultiStyleRexValue[];
}

declare interface NoArgFormulaSetting {
    noArgType: NoArgFormulaType;
    styleId?: string;
}

declare type NoArgFormulaType = "NOW" | "TODAY" | "NOW_YEAR" | "NOW_HOUR" | "NOW_SECOND" | "NOW_MIN" | "NOW_MONTH" | "NOW_DAY" | "NOW_WEEKDAY" | "NOW_MINUTE";

declare type ProtectionOption = {
    [key in ProtectionOptionKey]: "0" | "1" | 0 | 1;
};

declare type ProtectionOptionKey = "sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables";

declare type RowHeightScaleFunction = (data: number, rowIndex: number, fromHeader: boolean) => number;

declare interface Sheet extends SheetOption {
    headers: Header[];
    data: Data[];
}

declare interface SheetOption {
    withoutHeader?: boolean;
    conditionalFormatting?: ConditionalFormatting[];
    multiStyleCondition?: MultiStyleConditionFunction;
    useSplitBaseOnMatch?: boolean;
    convertStringToNumber?: boolean;
    images?: ImageTypes[];
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
    commentCondition?: CommentConditionFunction;
    sortAndFilter?: SortAndFilter;
    state?: "hidden" | "visible";
    headerRowOption?: any;
    protectionOption?: ProtectionOption;
    headerHeight?: number;
    checkbox?: Checkbox[];
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

declare interface SingleRefFormulaSetting {
    type: SingleRefFormulaType;
    referenceCell: string;
    value?: number | string;
    styleId?: string;
}

declare type SingleRefFormulaType = "LEN" | "MODE" | "UPPER" | "LOWER" | "PROPER" | "RIGHT" | "LEFT" | "ABS" | "POWER" | "FLOOR" | "CEILING" | "ROUND" | "SQRT" | "COS" | "SIN" | "TAN" | "COT" | "COUNTIF" | "TRIM";

declare interface SortAndFilter {
    mode: "all" | "ref";
    ref?: string;
}

declare interface StyleBody {
    fontFamily?: string;
    type?: string;
    size?: number;
    index?: number;
    alignment?: AlignmentOption;
    border?: BorderOption;
    format?: string;
    bold?: boolean;
    underline?: boolean;
    italic?: boolean;
    doubleUnderline?: boolean;
    color?: string;
    backgroundColor?: string;
}

declare type StyleCellConditionFunction = (data: Header | string | number | undefined, object: Header | Data, rowIndex: number, colIndex: number, fromHeader: boolean, styleKeys: string[]) => string | null;

declare interface Styles {
    [key: string]: StyleBody;
}

export declare function themeBaseGenerate(data: ExcelTable | Data[] | Data[][], index: number, option?: ThemeOption): Promise<string | number[] | Blob | Buffer | undefined>;

declare interface ThemeOption {
    hIndex?: number;
    rIndex?: number;
    nColor?: boolean;
    hColor?: string;
    rColor?: string;
    fieName?: string;
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
