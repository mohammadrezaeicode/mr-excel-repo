export declare const addGlobalOptionFromExcelTable: typeof addGlobalOptionFromExcelTable_2;

declare function addGlobalOptionFromExcelTable_2(key: string, data: ExcelTable): void;

export declare const addGlobalOptions: typeof addGlobalOptions_2;

declare function addGlobalOptions_2(key: string, path: string, data: any): void;

declare type AlignmentHorizontal = "center" | "left" | "right";

declare interface AlignmentOption {
    horizontal?: AlignmentHorizontal;
    vertical?: AlignmentVertical;
    wrapText?: "0" | "1" | 0 | 1;
    shrinkToFit?: "0" | "1" | 0 | 1;
    readingOrder?: "1" | "2" | 2 | 1;
    textRotation?: number;
    indent?: number;
    rtl?: boolean;
    ltr?: boolean;
}

declare type AlignmentOptionKey = "horizontal" | "vertical" | "wrapText" | "shrinkToFit" | "readingOrder" | "textRotation" | "indent";

declare type AlignmentVertical = "center" | "top" | "bottom";

declare interface AsTableOption {
    type?: "Light" | "Medium" | "Dark";
    styleNumber?: number;
    firstColumn?: boolean;
    lastColumn?: boolean;
    rowStripes?: boolean;
    columnStripes?: boolean;
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

declare function checkSheetValidWithOneRef(ref: string): boolean;

declare function checkSheetValidWithTwoRef(ref: string): boolean;

declare type ColWidthScaleFunction = (data: number, colIndex: number) => number;

declare interface Comment_2 {
    comment?: string;
    styleId?: string;
    author?: string;
}

declare type CommentConditionFunction = (data: Header | string | number | undefined, object: null | Data, headerKey: string, rowIndex: number, colIndex: number, fromHeader: boolean) => Comment_2 | string | false | undefined | null;

declare interface ConditionalFormatting extends ConditionalFormattingOption {
    start: string;
    end: string;
}

declare type ConditionalFormattingCellsOperation = "lt" | "gt" | "between" | "eq" | "ct";

declare type ConditionalFormattingIconSetOperation = "3Arrows" | "4Arrows" | "5Arrows" | "5ArrowsGray" | "4ArrowsGray" | "3ArrowsGray";

declare interface ConditionalFormattingOption {
    type: "cells" | "dataBar" | "iconSet" | "colorScale" | "top";
    operator?: string | ConditionalFormattingCellsOperation | ConditionalFormattingIconSetOperation | ConditionalFormattingTopOperation;
    value?: number | string;
    priority?: number;
    colors?: string[];
    bottom?: boolean;
    styleId?: string;
    percent?: number;
}

declare type ConditionalFormattingTopOperation = "belowAverage" | "aboveAverage";

export declare function convertTableToExcel(queryForTable?: string, table?: HTMLTableElement, config?: {
    keepStyle?: boolean;
    rowHeightScaleFunction?: RowHeightScaleFunction;
    colWidthScaleFunction?: ColWidthScaleFunction;
}): Promise<string | number[] | Blob | Buffer | undefined>;

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

declare namespace DataModel {
    export {
        ExcelTable,
        ExcelTableOption,
        Sheet,
        SheetOption,
        AsTableOption,
        PageBreak,
        ViewStart,
        ViewOption,
        HeaderFooterOption,
        HeaderFooterLocationMap,
        HeaderFooterTypes,
        PageOption,
        Header,
        StyleType,
        StyleBody,
        Styles,
        Data,
        DataOptions,
        RowMap,
        ProtectionOption,
        ProtectionOptionKey,
        ConditionalFormattingCellsOperation,
        ConditionalFormattingIconSetOperation,
        ConditionalFormattingTopOperation,
        ConditionalFormattingOption,
        ConditionalFormatting,
        ImageTypes,
        SideBySide,
        AlignmentOptionKey,
        AlignmentHorizontal,
        AlignmentVertical,
        AlignmentOption,
        BorderDirection,
        BorderOption,
        MapMultiStyleValue,
        MultiStyleValue,
        MultiStyleRexValue,
        Comment_2 as Comment,
        MergeRowConditionMap,
        MultiStyleConditionFunction,
        CommentConditionFunction,
        StyleCellConditionFunction,
        MergeRowDataConditionFunction,
        SortAndFilter,
        Title,
        HeaderRowOption,
        Checkbox,
        NoArgFormulaType,
        FormulaType,
        SingleRefFormulaType,
        FormatMap,
        Formula,
        FormulaSetting,
        CustomFormulaSetting,
        SingleRefFormulaSetting,
        NoArgFormulaSetting,
        StyleMapper,
        MapComment,
        ThemeOption,
        ExtractedData,
        ExtractResult,
        ReadResult
    }
}
export { DataModel }

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
    fetch?: Function;
    fileName?: string;
    generateType?: "nodebuffer" | "array" | "binarystring" | "base64";
    addDefaultTitleStyle?: boolean;
    created?: string;
    modified?: string;
    numberOfColumn?: number;
    createType?: string;
    styles?: Styles;
    formatMap?: FormatMap;
}

export declare function excelToJson(uri: string, fetchFunc?: Function, withHeader?: boolean, defaultPropertyPrefix?: string): Promise<Record<string, object>>;

export declare function excelToNode(uri: string, queryForTable?: string | null, containerElement?: HTMLDivElement | null, config?: {
    fetchFunc?: Function;
    firstHeader?: boolean;
    returnTableNodes?: boolean;
    emptyNodeDefaultString?: string;
    removeContainerChildNode?: boolean;
    containerNodeStyle?: object;
    tableStyle?: object;
    cellStyle?: object;
    buttonContainerStyle?: object;
    buttonStyle?: object;
    activeButtonStyle?: object;
}): Promise<HTMLTableElement[] | "Done">;

declare const exportedForTesting: {
    checkSheetValidWithOneRef: typeof checkSheetValidWithOneRef;
    checkSheetValidWithTwoRef: typeof checkSheetValidWithTwoRef;
    generalValidationCheck: typeof generalValidationCheck;
};

declare type ExtractedData = (string | null | undefined)[][];

export declare function extractExcelData(uri: string, isBackend?: boolean, fetchFunc?: Function): Promise<DataModel.ReadResult>;

declare interface ExtractResult {
    [sheetName: string]: ExtractedData;
}

declare interface FormatMap {
    [format: string]: {
        key: number;
        value?: string;
    };
}

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

declare function generalValidationCheck(value: never, validateProperty: ValidationObject, property: string, strict: boolean, warn: boolean): boolean;

export declare function generateCSV(excelTable: ExcelTable, asZip?: boolean): Promise<string[] | "done" | undefined>;

export declare function generateExcel(data: ExcelTable, styleKey?: string): Promise<string | number[] | Blob | Buffer | undefined>;

export declare function generateText(excelTable: ExcelTable, asZip?: boolean): Promise<string[] | "done" | undefined>;

declare interface Header {
    label: string;
    text: string;
    size?: number;
    multiStyleValue?: MultiStyleValue;
    comment?: Comment_2 | string;
    conditionalFormatting?: ConditionalFormattingOption;
    formula?: {
        type: FormulaType;
        styleId?: string;
    };
}

declare interface HeaderFooterLocationMap {
    l?: HeaderFooterOption;
    c?: HeaderFooterOption;
    r?: HeaderFooterOption;
}

declare interface HeaderFooterOption {
    text?: string;
    styleId?: string;
}

declare interface HeaderFooterTypes {
    odd?: HeaderFooterLocationMap;
    even?: HeaderFooterLocationMap;
    first?: HeaderFooterLocationMap;
}

declare interface HeaderRowOption {
    outlineLevel: "string";
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

declare interface MergeRowConditionMap {
    [columnKey: string]: {
        inProgress: boolean;
        start: number;
    };
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

declare type NoArgFormulaType = "NOW" | "TODAY" | "HOUR" | "NOW_YEAR" | "NOW_HOUR" | "NOW_SECOND" | "NOW_MIN" | "NOW_MONTH" | "NOW_DAY" | "NOW_WEEKDAY" | "NOW_MINUTE";

declare interface PageBreak {
    row?: number[];
    column?: number[];
}

declare interface PageOption {
    margin?: {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
        header?: number;
        footer?: number;
    };
    header?: HeaderFooterTypes;
    footer?: HeaderFooterTypes;
    isPortrait: boolean;
}

declare type ProtectionOption = {
    [key in ProtectionOptionKey]: "0" | "1" | 0 | 1;
};

declare type ProtectionOptionKey = "sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables";

declare interface ReadResult {
    data: ExtractResult;
    sheetNameObject: Record<string, string>;
    sheetName: IterableIterator<[string, string]>;
    maxLengthOfColumn: Record<string, number>;
}

declare type RowHeightScaleFunction = (data: number, rowIndex: number, fromHeader: boolean) => number;

declare interface RowMap {
    [rowNumber: number]: {
        startTag: string;
        endTag: string;
        details: string;
    };
}

declare interface Sheet extends SheetOption {
    headers: Header[];
    data: Data[];
}

declare interface SheetOption {
    withoutHeader?: boolean;
    mapSheetDataOption?: {
        outlineLevel?: string;
        hidden?: string;
        height?: string;
    };
    backgroundImage?: string;
    conditionalFormatting?: ConditionalFormatting[];
    multiStyleCondition?: MultiStyleConditionFunction;
    useSplitBaseOnMatch?: boolean;
    convertStringToNumber?: boolean;
    images?: ImageTypes[];
    formula?: Formula;
    pageOption?: PageOption;
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
    headerRowOption?: object;
    protectionOption?: ProtectionOption;
    headerHeight?: number;
    checkbox?: Checkbox[];
    viewOption?: ViewOption;
    rtl?: boolean;
    pageBreak?: PageBreak;
    asTable?: AsTableOption;
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

declare type SingleRefFormulaType = "LEN" | "MODE" | "UPPER" | "LOWER" | "PROPER" | "RIGHT" | "LEFT" | "ABS" | "POWER" | "MOD" | "FLOOR" | "CEILING" | "ROUND" | "SQRT" | "COS" | "SIN" | "TAN" | "COT" | "COUNTIF" | "SUMIF" | "TRIM";

declare interface SortAndFilter {
    mode: "all" | "ref";
    ref?: string;
}

declare interface StyleBody {
    fontFamily?: string;
    type?: StyleType;
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

declare interface StyleMapper {
    conditionalFormatting: {
        count: number;
        value: string;
    };
    commentSyntax: {
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

declare interface Styles {
    [key: string]: StyleBody;
}

declare type StyleType = "conditionalFormatting" | "CF" | "headerFooter" | "HF";

export declare function themeBaseGenerate(data: ExcelTable | Data[] | Data[][], option?: ThemeOption): Promise<string | number[] | Blob | Buffer | undefined>;

declare interface ThemeOption {
    negativeColor?: boolean;
    headerColor?: string;
    rowColor?: string;
    headerBackgroundColor?: string;
    rowBackgroundColor?: string;
    fileName?: string;
    filterKeys?: string[];
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

declare function validateExcelTableObjectFunction(data: ExcelTable, strict?: boolean, warn?: boolean): void;

declare function validateSheetArrayFunction(sheets: Sheet[] | Sheet, strict?: boolean, warn?: boolean): void;

declare function validateStyleObjectFunction(styles: Styles, strict?: boolean, warn?: boolean): void;

declare interface ValidationObject {
    mode: ValidationType;
    type: string;
    isEnum?: boolean;
    enum?: string[];
    isArray?: boolean;
    notEmpty?: boolean;
    min?: number;
    validateFunction?: (key: string, value: any, strict: boolean, warn: boolean) => boolean;
}

declare type ValidationType = "TYPE_CHECK";

declare namespace Validator {
    export {
        validateStyleObjectFunction,
        validateSheetArrayFunction,
        validateExcelTableObjectFunction,
        exportedForTesting
    }
}
export { Validator }

declare interface ViewOption {
    type?: "pageLayout" | "pageBreakPreview";
    hideGrid?: boolean;
    hideHeadlines?: boolean;
    hideRuler?: boolean;
    frozenOption?: {
        type: "ROW" | "COLUMN" | "BOTH" | "R" | "C" | "B";
        index: number | {
            r: number;
            c: number;
        };
    };
    splitOption?: {
        type: "VERTICAL" | "HORIZONTAL" | "BOTH" | "V" | "H" | "B";
        startAt?: ViewStart;
        split: number | {
            x: number;
            y: number;
        };
    };
}

declare interface ViewStart {
    t?: string;
    b?: string;
    r?: string;
    l?: string;
    one?: string;
    two?: string;
}

export { }
