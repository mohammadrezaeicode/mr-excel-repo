export declare const addGlobalOptionFromExcelTable: typeof addGlobalOptionFromExcelTable_2;

/**
 * Adds global options from an Excel table.
 * @param {string} key - The key for the global option.
 * @param {ExcelTable} data - The Excel table data.
 */
declare function addGlobalOptionFromExcelTable_2(key: string, data: ExcelTable): void;

export declare const addGlobalOptions: typeof addGlobalOptions_2;

/**
 * Adds global options to the proxy.
 * @param {string} key - The key for the global option.
 * @param {string} path - The path for the global option.
 * @param {any} data - The data for the global option.
 */
declare function addGlobalOptions_2(key: string, path: string, data: any): void;

/**
 * Horizontal alignment options.
 * @typedef {"center" | "left" | "right"} AlignmentHorizontal
 */
declare type AlignmentHorizontal = "center" | "left" | "right";

/**
 * Options for configuring alignment.
 * @interface
 */
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

/**
 * Keys for alignment options.
 * @typedef {"horizontal" | "vertical" | "wrapText" | "shrinkToFit" | "readingOrder" | "textRotation" | "indent"} AlignmentOptionKey
 */
declare type AlignmentOptionKey = "horizontal" | "vertical" | "wrapText" | "shrinkToFit" | "readingOrder" | "textRotation" | "indent";

/**
 * Vertical alignment options.
 * @typedef {"center" | "top" | "bottom"} AlignmentVertical
 */
declare type AlignmentVertical = "center" | "top" | "bottom";

/**
 * Options for displaying the sheet as a table.
 * @interface
 */
declare interface AsTableOption {
    /** The type of table style. */
    type?: "Light" | "Medium" | "Dark";
    /** The style number of the table. */
    styleNumber?: number;
    /** Indicates if the first column should be styled. */
    firstColumn?: boolean;
    /** Indicates if the last column should be styled. */
    lastColumn?: boolean;
    /** Indicates if row stripes should be applied. */
    rowStripes?: boolean;
    /** Indicates if column stripes should be applied. */
    columnStripes?: boolean;
}

/**
 * Directions for border options.
 * @typedef {"full" | "top" | "left" | "right" | "bottom"} BorderDirection
 */
declare type BorderDirection = "full" | "top" | "left" | "right" | "bottom";

/**
 * Options for configuring borders.
 * @interface
 */
declare type BorderOption = {
    [key in BorderDirection]?: {
        color: string;
        style: "slantDashDot" | "dotted" | "thick" | "hair" | "dashDot" | "dashDotDot" | "dashed" | "thin" | "mediumDashDot" | "medium" | "double" | "mediumDashed";
    };
};

/**
 * Represents a buffer.
 * @class
 * @extends {Uint8Array}
 */
declare class Buffer_2 extends Uint8Array {
    constructor(str: string, encoding?: string);
    constructor(size: number);
    constructor(array: Uint8Array);
    constructor(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number);
    static alloc(size: number, fill?: string | Buffer_2 | number, encoding?: string): Buffer_2;
    static from(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): Buffer_2;
    static from(data: number[]): Buffer_2;
    static from(str: string, encoding?: string): Buffer_2;
    write(string: string, offset?: number, length?: number, encoding?: string): number;
    toString(encoding?: string, start?: number, end?: number): string;
    slice(start?: number, end?: number): Buffer_2;
    static concat(list: Buffer_2[], totalLength?: number): Buffer_2;
    length: number;
    byteOffset: number;
}

/**
 * Represents a checkbox in the sheet.
 * @interface
 */
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

/**
 * Represents a comment in the sheet.
 * @interface
 */
declare interface Comment_2 {
    comment?: string;
    styleId?: string;
    author?: string;
}

/**
 * Function type for comment condition.
 * @callback CommentConditionFunction@callback CommentConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {null | Data} object - The data object.
 * @param {string} headerKey - The header key.
 * @param {number} rowIndex - The row index.
 * @param {number} colIndex - The column index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @returns {Comment | string | false | undefined | null} The comment or null.
 */
declare type CommentConditionFunction = (data: Header | string | number | undefined, object: null | Data, headerKey: string, rowIndex: number, colIndex: number, fromHeader: boolean) => Comment_2 | string | false | undefined | null;

/**
 * Represents conditional formatting in the sheet.
 * @interface
 * @extends {ConditionalFormattingOption}
 */
declare interface ConditionalFormatting extends ConditionalFormattingOption {
    /** The start cell for the conditional formatting. */
    start: string;
    /** The end cell for the conditional formatting. */
    end: string;
}

/**
 * Operations for conditional formatting cells.
 * @typedef {"lt" | "gt" | "between" | "eq" | "ct"} ConditionalFormattingCellsOperation
 */
declare type ConditionalFormattingCellsOperation = "lt" | "gt" | "between" | "eq" | "ct";

/**
 * Operations for conditional formatting icon sets.
 * @typedef {"3Arrows" | "4Arrows" | "5Arrows" | "5ArrowsGray" | "4ArrowsGray" | "3ArrowsGray"} ConditionalFormattingIconSetOperation
 */
declare type ConditionalFormattingIconSetOperation = "3Arrows" | "4Arrows" | "5Arrows" | "5ArrowsGray" | "4ArrowsGray" | "3ArrowsGray";

/**
 * Options for conditional formatting.
 * @interface
 */
declare interface ConditionalFormattingOption {
    /** The type of conditional formatting. */
    type: "cells" | "dataBar" | "iconSet" | "colorScale" | "top";
    /** The operator for the conditional formatting. */
    operator?: string | ConditionalFormattingCellsOperation | ConditionalFormattingIconSetOperation | ConditionalFormattingTopOperation;
    /** The value for the conditional formatting. */
    value?: number | string;
    /** The priority of the conditional formatting. */
    priority?: number;
    /** The colors for the conditional formatting. */
    colors?: string[];
    /** Indicates if the conditional formatting is for the bottom values. */
    bottom?: boolean;
    /** The style ID for the conditional formatting. */
    styleId?: string;
    /** The percentage for the conditional formatting. */
    percent?: number;
}

/**
 * Operations for conditional formatting top values.
 * @typedef {"belowAverage" | "aboveAverage"} ConditionalFormattingTopOperation
 */
declare type ConditionalFormattingTopOperation = "belowAverage" | "aboveAverage";

/**
 * Converts an HTML table to an Excel file.
 * @param {string} [queryForTable] - The query selector for the table.
 * @param {HTMLTableElement} [table] - The HTML table element.
 * @param {Object} [config] - The configuration options.
 * @param {boolean} [config.keepStyle] - Whether to keep the style.
 * @param {RowHeightScaleFunction} [config.rowHeightScaleFunction] - The function to scale row height.
 * @param {ColWidthScaleFunction} [config.colWidthScaleFunction] - The function to scale column width.
 * @returns {Promise<ExcelTable>} The generated Excel table.
 */
export declare function convertTableToExcel(queryForTable?: string, table?: HTMLTableElement, config?: {
    keepStyle?: boolean;
    rowHeightScaleFunction?: RowHeightScaleFunction;
    colWidthScaleFunction?: ColWidthScaleFunction;
}): Promise<string | number[] | DataModel.Buffer | Blob | undefined>;

/**
 * Represents a custom formula setting.
 * @interface
 */
declare interface CustomFormulaSetting {
    isArray?: boolean;
    referenceCells?: string;
    formula: string;
    returnType?: string;
    styleId?: string;
}

/**
 * Represents data in the sheet.
 * @interface
 * @extends {DataOptions}
 */
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
        HeaderOption,
        StyleType,
        StyleBody,
        Styles,
        Data,
        DataOptions,
        DropDown,
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
        ReadResult,
        Buffer_2 as Buffer,
        ReplacerOption,
        ExcelToNodeConfig
    }
}
export { DataModel }

/**
 * Options for configuring data in the sheet.
 * @interface
 */
declare interface DataOptions {
    [key: string]: "0" | "1" | number | string | undefined | MapComment
    /** Array of multi-style values for the data. */
    | MapMultiStyleValue;
    outlineLevel?: number;
    hidden?: "0" | "1" | number;
    rowStyle?: string;
    height?: number;
    multiStyleValue?: MapMultiStyleValue;
    comment?: MapComment;
}

/**
 * Represents a dropdown in the sheet.
 * @interface
 */
declare interface DropDown {
    /** Array of options for the dropdown. */
    option: (string | number)[];
    /** Array of columns the dropdown applies to. */
    for: string[];
}

/**
 * Represents an Excel table with options and sheets.
 * @interface
 * @extends {ExcelTableOption}
 */
declare interface ExcelTable extends ExcelTableOption {
    /** Array of sheets in the Excel table. */
    sheet: Sheet[];
}

/**
 * Options for configuring an Excel table.
 * @interface
 */
declare interface ExcelTableOption {
    /** Indicates if the Excel should not be saved. */
    notSave?: boolean;
    /** The creator of the Excel. */
    creator?: string;
    /** Indicates if the backend is used. */
    backend?: boolean;
    /** Activates conditional formatting. */
    activateConditionalFormatting?: boolean;
    /** Function to fetch data. */
    fetch?: Function;
    /** The file name of the Excel. */
    fileName?: string;
    /** The type of generated file. */
    generateType?: "nodebuffer" | "array" | "binarystring" | "base64";
    /** Adds default title style. */
    addDefaultTitleStyle?: boolean;
    /** The creation date of the Excel. */
    created?: string;
    /** The modification date of the Excel. */
    modified?: string;
    /** The number of columns in the Excel. */
    numberOfColumn?: number;
    /** The type of creation. */
    createType?: string;
    /** Styles applied to the Excel. */
    styles?: Styles;
    /** Format map for the Excel. */
    formatMap?: FormatMap;
}

export declare function excelToJson(uri: string, fetchFunc?: Function, withHeader?: boolean, defaultPropertyPrefix?: string): Promise<Record<string, object>>;

/**
 * Converts an Excel file to a Node.
 * @param {string} uri - The URI of the Excel file.
 * @param {string | null} [queryForTable] - The query selector for the table.
 * @param {HTMLDivElement | null} [containerElement] - The container element.
 * @param {ExcelToNodeConfig} [config={}] - The configuration options.
 * @returns {Promise<void>} The result of the conversion.
 */
export declare function excelToNode(uri: string, queryForTable?: string | null, containerElement?: HTMLDivElement | null, config?: ExcelToNodeConfig): Promise<HTMLTableElement[] | "Done">;

/**
 * Represents configuration options for Excel to Node.
 * @interface
 */
declare interface ExcelToNodeConfig {
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
}

declare const exportedForTesting: {
    checkSheetValidWithOneRef: typeof checkSheetValidWithOneRef;
    checkSheetValidWithTwoRef: typeof checkSheetValidWithTwoRef;
    generalValidationCheck: typeof generalValidationCheck;
};

/**
 * Represents extracted data.
 * @typedef {(string | null | undefined)[][]} ExtractedData
 */
declare type ExtractedData = (string | null | undefined)[][];

/**
 * Extracts data from an Excel file.
 * @param {string} uri - The URI of the Excel file.
 * @param {boolean} [isBackend=false] - Whether the extraction is done on the backend.
 * @param {Function} [fetchFunc] - The function to fetch data.
 * @returns {Promise<ExtractResult>} The extracted data.
 */
export declare function extractExcelData(uri: string, isBackend?: boolean, fetchFunc?: Function): Promise<DataModel.ReadResult>;

/**
 * Represents the result of data extraction.
 * @interface
 */
declare interface ExtractResult {
    [sheetName: string]: ExtractedData;
}

/**
 * Represents a format map.
 * @interface
 */
declare interface FormatMap {
    [format: string]: {
        key: number;
        value?: string;
    };
}

/**
 * Represents a formula in the sheet.
 * @interface
 */
declare interface Formula {
    [insertCell: string]: FormulaSetting | SingleRefFormulaSetting | NoArgFormulaSetting | CustomFormulaSetting;
}

/**
 * Represents a formula setting.
 * @interface
 */
declare interface FormulaSetting {
    type: FormulaType;
    start: string;
    end: string;
    styleId?: string;
}

/**
 * Types of formulas.
 * @typedef {"AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN"} FormulaType
 */
declare type FormulaType = "AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN";

declare function generalValidationCheck(value: never, validateProperty: ValidationObject, property: string, strict: boolean, warn: boolean): boolean;

/**
 * Generates a CSV file from an Excel table.
 * @param {ExcelTable} excelTable - The Excel table.
 * @param {boolean} [asZip=false] - Whether to generate the CSV as a ZIP file.
 * @returns {Promise<Blob>} The generated CSV file.
 */
export declare function generateCSV(excelTable: ExcelTable, asZip?: boolean): Promise<string[] | "done" | undefined>;

export declare function generateExcel(data: ExcelTable, styleKey?: string): Promise<string | number[] | Blob | Buffer_2 | undefined>;

/**
 * Generates a text file from an Excel table.
 * @param {ExcelTable} excelTable - The Excel table.
 * @param {boolean} [asZip=false] - Whether to generate the text file as a ZIP file.
 * @returns {Promise<Blob>} The generated text file.
 */
export declare function generateText(excelTable: ExcelTable, asZip?: boolean): Promise<string[] | "done" | undefined>;

/**
 * Represents a header in the sheet.
 * @interface
 * @extends {HeaderOption}
 */
declare interface Header extends HeaderOption {
    /** The label of the header. */
    label: string;
    /** The text of the header. */
    text: string;
}

/**
 * Location map for header and footer options.l:Left, c:Center, r:Right
 * @interface
 */
declare interface HeaderFooterLocationMap {
    l?: HeaderFooterOption;
    c?: HeaderFooterOption;
    r?: HeaderFooterOption;
}

/**
 * Options for header and footer.
 * @interface
 */
declare interface HeaderFooterOption {
    /** The text of the header or footer. */
    text?: string;
    /** The style ID of the header or footer. */
    styleId?: string;
}

/**
 * Types of header and footer in page(odd page, even page,first page).
 * @interface
 */
declare interface HeaderFooterTypes {
    odd?: HeaderFooterLocationMap;
    even?: HeaderFooterLocationMap;
    first?: HeaderFooterLocationMap;
}

/**
 * Options for configuring a header.
 * @interface
 */
declare interface HeaderOption {
    /** The size(width) of the header. */
    size?: number;
    /** Array of multi-style values for the header. */
    multiStyleValue?: MultiStyleValue[];
    /** Comment for the header. */
    comment?: Comment_2 | string;
    /** Conditional formatting options for the header. */
    conditionalFormatting?: ConditionalFormattingOption;
    /** Formula applied to the column. */
    formula?: {
        /** The type of the formula. */
        type: FormulaType;
        /** The style ID of the formula. */
        styleId?: string;
    };
}

/**
 * Options for the header row.
 * @interface
 */
declare interface HeaderRowOption {
    outlineLevel: "string";
}

/**
 * Represents an image in the sheet.
 * @interface
 */
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

/**
 * Represents a map of comments.
 * @interface
 */
declare interface MapComment {
    [key: string]: Comment_2 | string;
}

/**
 * Represents a map of multi-style values.
 * @interface
 */
declare interface MapMultiStyleValue {
    [key: string]: MultiStyleValue[];
}

/**
 * Represents a map of merge row conditions.
 * @interface
 */
declare interface MergeRowConditionMap {
    [columnKey: string]: {
        inProgress: boolean;
        start: number;
    };
}

/**
 * Function type for merge row data condition.
 * @callback MergeRowDataConditionFunction@callback MergeRowDataConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {string | null} key - The key.
 * @param {number} index - The index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @returns {boolean} The result of the condition.
 */
declare type MergeRowDataConditionFunction = (data: Header | string | number | undefined, key: string | null, index: number, fromHeader: boolean) => boolean;

/**
 * Function type for multi-style condition.
 * @callback MultiStyleConditionFunction@callback MultiStyleConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {null | Data} object - The data object.
 * @param {string} headerKey - The header key.
 * @param {number} rowIndex - The row index.
 * @param {number} colIndex - The column index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @returns {MultiStyleValue[] | null} The multi-style values or null.
 */
declare type MultiStyleConditionFunction = (data: Header | string | number | undefined, object: null | Data, headerKey: string, rowIndex: number, colIndex: number, fromHeader: boolean) => MultiStyleValue[] | null;

/**
 * Represents a multi-style regex value.
 * @interface
 */
declare interface MultiStyleRexValue {
    reg: RegExp | string;
    styleId: string;
}

/**
 * Represents a multi-style value.
 * @interface
 */
declare interface MultiStyleValue {
    value: string | number;
    styleId?: string;
}

/**
 * Represents a no-argument formula setting.
 * @interface
 */
declare interface NoArgFormulaSetting {
    noArgType: NoArgFormulaType;
    styleId?: string;
}

/**
 * Types of no-argument formulas.
 * @typedef {"NOW" | "TODAY" | "HOUR" | "NOW_YEAR" | "NOW_HOUR" | "NOW_SECOND" | "NOW_MIN" | "NOW_MONTH" | "NOW_DAY" | "NOW_WEEKDAY" | "NOW_MINUTE"} NoArgFormulaType
 */
declare type NoArgFormulaType = "NOW" | "TODAY" | "HOUR" | "NOW_YEAR" | "NOW_HOUR" | "NOW_SECOND" | "NOW_MIN" | "NOW_MONTH" | "NOW_DAY" | "NOW_WEEKDAY" | "NOW_MINUTE";

/**
 * Options for page breaks in the sheet.
 * @interface
 */
declare interface PageBreak {
    /** Array of row indices where page breaks should occur. */
    row?: number[];
    /** Array of column indices where page breaks should occur. */
    column?: number[];
}

/**
 * Options for configuring the page.
 * @interface
 */
declare interface PageOption {
    /** Margin settings for the page. */
    margin?: {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
        header?: number;
        footer?: number;
    };
    /** Header settings for the page. */
    header?: HeaderFooterTypes;
    /** Footer settings for the page. */
    footer?: HeaderFooterTypes;
    /** Indicates if the page is in portrait orientation. */
    isPortrait: boolean;
}

/**
 * Represents protection options for the sheet.
 * @typedef {Object} ProtectionOption@typedef {Object} ProtectionOption
 * @property {"0" | "1" | 0 | 1} sheet - Protect the sheet.
 * @property {"0" | "1" | 0 | 1} formatCells - Allow formatting cells.
 * @property {"0" | "1" | 0 | 1} formatColumns - Allow formatting columns.
 * @property {"0" | "1" | 0 | 1} formatRows - Allow formatting rows.
 * @property {"0" | "1" | 0 | 1} insertColumns - Allow inserting columns.
 * @property {"0" | "1" | 0 | 1} insertRows - Allow inserting rows.
 * @property {"0" | "1" | 0 | 1} insertHyperlinks - Allow inserting hyperlinks.
 * @property {"0" | "1" | 0 | 1} deleteColumns - Allow deleting columns.
 * @property {"0" | "1" | 0 | 1} deleteRows - Allow deleting rows.
 * @property {"0" | "1" | 0 | 1} sort - Allow sorting.
 * @property {"0" | "1" | 0 | 1} autoFilter - Allow using auto filter.
 * @property {"0" | "1" | 0 | 1} pivotTables - Allow using pivot tables.
 */
declare type ProtectionOption = {
    [key in ProtectionOptionKey]: "0" | "1" | 0 | 1;
};

/**
 * Keys for protection options.
 * @typedef {"sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables"} ProtectionOptionKey
 */
declare type ProtectionOptionKey = "sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables";

/**
 * Represents the result of reading data.
 * @interface
 */
declare interface ReadResult {
    data: ExtractResult;
    sheetNameObject: Record<string, string>;
    sheetName: IterableIterator<[string, string]>;
    maxLengthOfColumn: Record<string, number>;
}

export declare function replaceInExcel(url: string | null | undefined, replaceData: Record<string, string | number | boolean>, option?: ReplacerOption): Promise<string | number[] | Blob | Buffer | undefined>;

/**
 * Represents options for the replacer.
 * @interface
 */
declare interface ReplacerOption {
    fileName?: string;
    backend?: boolean;
    fetch?: Function;
    data?: Blob | Buffer_2;
    notSave?: boolean;
    generateType?: "nodebuffer" | "array" | "binarystring" | "base64";
}

declare type RowHeightScaleFunction = (data: number, rowIndex: number, fromHeader: boolean) => number;

/**
 * Represents a map of rows in the sheet.
 * @interface
 */
declare interface RowMap {
    [rowNumber: number]: {
        startTag: string;
        endTag: string;
        details: string;
    };
}

/**
 * Represents a sheet in the Excel.
 * @interface
 * @extends {SheetOption}
 */
declare interface Sheet extends SheetOption {
    /** Array of headers in the sheet. */
    headers: Header[];
    /** Array of data in the sheet. */
    data: Data[];
}

/**
 * Options for configuring a sheet.
 * @interface
 */
declare interface SheetOption {
    /** Indicates if the sheet should be without a header. */
    withoutHeader?: boolean;
    /** Options for configure property name that maybe provide for apply outlineLevel, hidden, height option of row*/
    mapSheetDataOption?: {
        /** Outline level of the sheet data. */
        outlineLevel?: string;
        /** Indicates if the sheet data is hidden. */
        hidden?: string;
        /** Height of the sheet data. */
        height?: string;
    };
    /** Background image of the sheet. */
    backgroundImage?: string;
    /** Array of conditional formatting rules. */
    conditionalFormatting?: ConditionalFormatting[];
    /** Function for multi-style condition. */
    multiStyleCondition?: MultiStyleConditionFunction;
    /** Indicates if the sheet should use split based on match. */
    useSplitBaseOnMatch?: boolean;
    /** Indicates if strings should be converted to numbers Automatically. */
    convertStringToNumber?: boolean;
    /** Array of images in the sheet. */
    images?: ImageTypes[];
    /** Formula applied to the sheet. */
    formula?: Formula;
    /** Page options for the sheet. */
    pageOption?: PageOption;
    /** Name of the sheet. */
    name?: string;
    /** Title of the sheet. */
    title?: Title;
    /** Shift sheet from top. */
    shiftTop?: number;
    /** Shift sheet from Left. */
    shiftLeft?: number;
    /** Indicates if the sheet is selected. */
    selected?: boolean;
    /** Tab color of the sheet. */
    tabColor?: string;
    /** Array of merge ranges in the sheet. */
    merges?: string[];
    /** Key for the header style. */
    headerStyleKey?: string;
    /** Function for merge row data base on condition. */
    mergeRowDataCondition?: MergeRowDataConditionFunction;
    /** Function for style cell base on condition. */
    styleCellCondition?: StyleCellConditionFunction;
    /** Function for comment base on condition. */
    commentCondition?: CommentConditionFunction;
    /** Sort and filter options for the sheet. */
    sortAndFilter?: SortAndFilter;
    /** State of the sheet (hidden or visible). */
    state?: "hidden" | "visible";
    /** Options for the header row. */
    headerRowOption?: object;
    /** Protection options for the sheet. */
    protectionOption?: ProtectionOption;
    /** Height of the header. */
    headerHeight?: number;
    /** Array of checkboxes in the sheet. */
    checkbox?: Checkbox[];
    /** View options for the sheet. */
    viewOption?: ViewOption;
    /** Indicates if the sheet is right-to-left. */
    rtl?: boolean;
    /** Page break options for the sheet. */
    pageBreak?: PageBreak;
    /** Options for displaying the sheet as a table. */
    asTable?: AsTableOption;
    /** Array of dropdowns in the sheet. */
    dropDowns?: DropDown[];
}

/**
 * Represents side-by-side data in the sheet.
 * @interface
 */
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

/**
 * Generates an Excel file with side-by-side data.
 * @param {SideBySide[][]} data - The side-by-side data.
 * @returns {Promise<ExcelTable>} The generated Excel table.
 */
export declare function sideBySideLineByLine(data: SideBySide[][]): Promise<string | number[] | DataModel.Buffer | Blob | undefined>;

/**
 * Represents a single-reference formula setting.
 * @interface
 */
declare interface SingleRefFormulaSetting {
    type: SingleRefFormulaType;
    referenceCell: string;
    value?: number | string;
    styleId?: string;
}

/**
 * Types of single-reference formulas.
 * @typedef {"LEN" | "MODE" | "UPPER" | "LOWER" | "PROPER" | "RIGHT" | "LEFT" | "ABS" | "POWER" | "MOD" | "FLOOR" | "CEILING" | "ROUND" | "SQRT" | "COS" | "SIN" | "TAN" | "COT" | "COUNTIF" | "SUMIF" | "TRIM"} SingleRefFormulaType
 */
declare type SingleRefFormulaType = "LEN" | "MODE" | "UPPER" | "LOWER" | "PROPER" | "RIGHT" | "LEFT" | "ABS" | "POWER" | "MOD" | "FLOOR" | "CEILING" | "ROUND" | "SQRT" | "COS" | "SIN" | "TAN" | "COT" | "COUNTIF" | "SUMIF" | "TRIM";

/**
 * Represents sort and filter options.
 * @interface
 */
declare interface SortAndFilter {
    mode: "all" | "ref";
    ref?: string;
}

/**
 * Represents the body of a style.
 * @interface
 */
declare interface StyleBody {
    /** The font family of the text. */
    fontFamily?: string;
    /** The type of the style.(if not define used for cells, for other type should be define) */
    type?: StyleType;
    /** The size of the font. */
    size?: number;
    /** The index of the style(!!it's will override by process,Don't set value for it). */
    index?: number;
    /** The alignment options of the text. */
    alignment?: AlignmentOption;
    /** The border options. */
    border?: BorderOption;
    /** The format of the text. */
    format?: string;
    /** Indicates if the style is bold. */
    bold?: boolean;
    /** Indicates if the style is underlined. */
    underline?: boolean;
    /** Indicates if the style is italic. */
    italic?: boolean;
    /** Indicates if the style has double underline. */
    doubleUnderline?: boolean;
    /** The color of the style. */
    color?: string;
    /** The background color of the style. */
    backgroundColor?: string;
}

/**
 * Function type for style cell condition.
 * @callback StyleCellConditionFunction@callback StyleCellConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {Header | Data} object - The data object.
 * @param {number} rowIndex - The row index.
 * @param {number} colIndex - The column index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @param {string[]} styleKeys - The style keys.
 * @returns {string | null} The style key or null.
 */
declare type StyleCellConditionFunction = (data: Header | string | number | undefined, object: Header | Data, rowIndex: number, colIndex: number, fromHeader: boolean, styleKeys: string[]) => string | null;

/**
 * Represents a style mapper.
 * @interface
 */
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

/**
 * Represents a collection of styles.
 * @interface
 */
declare interface Styles {
    [key: string]: StyleBody;
}

/**
 * Types of styles that can be applied(not value for cell, CF/conditionalFormatting for conditionalFormatting option and HF/headerFooter for headerFooter option).
 * @typedef {"conditionalFormatting" | "CF" | "headerFooter" | "HF"} StyleType
 */
declare type StyleType = "conditionalFormatting" | "CF" | "headerFooter" | "HF";

/**
 * Generates an Excel file with a theme.
 * @param {ExcelTable | Data[] | Data[][]} data - The data for the Excel file.
 * @param {ThemeOption} [option] - The theme options.
 * @returns {Promise<ExcelTable>} The generated Excel table.
 */
export declare function themeBaseGenerate(data: ExcelTable | Data[] | Data[][], option?: ThemeOption): Promise<string | number[] | DataModel.Buffer | Blob | undefined>;

/**
 * Represents theme options.
 * @interface
 */
declare interface ThemeOption {
    negativeColor?: boolean;
    headerColor?: string;
    rowColor?: string;
    headerBackgroundColor?: string;
    rowBackgroundColor?: string;
    fileName?: string;
    filterKeys?: string[];
}

/**
 * Represents the title of the sheet.
 * @interface
 */
declare interface Title {
    shiftTop?: number;
    shiftLeft?: number;
    consommeRow?: number;
    consommeCol?: number;
    height?: number;
    styleId?: string;
    text?: string;
    multiStyleValue?: MultiStyleValue[];
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

/**
 * Options for configuring the view of the sheet.
 * @interface
 */
declare interface ViewOption {
    /** The type of view. */
    type?: "pageLayout" | "pageBreakPreview";
    /** Indicates if the grid should be hidden. */
    hideGrid?: boolean;
    /** Indicates if the headlines should be hidden. */
    hideHeadlines?: boolean;
    /** Indicates if the ruler should be hidden. */
    hideRuler?: boolean;
    /** Options for freezing rows or columns. */
    frozenOption?: {
        /** The type of freezing. */
        type: "ROW" | "COLUMN" | "BOTH" | "R" | "C" | "B";
        /** The index/position at which to freeze. */
        index: number | {
            r: number;
            c: number;
        };
    };
    /** Options for splitting the view. */
    splitOption?: {
        /** The type of split. */
        type: "VERTICAL" | "HORIZONTAL" | "BOTH" | "V" | "H" | "B";
        /** The start position of the split. */
        startAt?: ViewStart;
        /** The position of the split. */
        split: number | {
            x: number;
            y: number;
        };
    };
}

/**
 * Options for the start of the view.
 * @interface
 */
declare interface ViewStart {
    t?: string;
    b?: string;
    r?: string;
    l?: string;
    one?: string;
    two?: string;
}

export { }
