export declare const addGlobalOptionFromExcelTable: typeof addGlobalOptionFromExcelTable_2;

/**
 * addGlobalOptionFromExcelTable - Adds global options from an Excel table.
 * @param {string} key - The key for the global option.
 * @param {ExcelTable} data - The Excel table data.
 */
declare function addGlobalOptionFromExcelTable_2(key: string, data: ExcelTable): void;

export declare const addGlobalOptions: typeof addGlobalOptions_2;

/**
 * addGlobalOptions -Adds global options to the proxy.
 * @param {string} key - The key for the global option.
 * @param {string} path - The path for the global option.
 * @param {any} data - The data for the global option.
 */
declare function addGlobalOptions_2(key: string, path: string, data: any): void;

/**
 * AlignmentHorizontal - Horizontal alignment options.
 * @typedef {"center" | "left" | "right"} AlignmentHorizontal
 */
declare type AlignmentHorizontal = "center" | "left" | "right";

/**
 * AlignmentOption - Options for configuring alignment.
 * @interface
 */
declare type AlignmentOption = {
    horizontal?: AlignmentHorizontal;
    vertical?: AlignmentVertical;
    wrapText?: "0" | "1" | 0 | 1;
    shrinkToFit?: "0" | "1" | 0 | 1;
    textRotation?: number;
    indent?: number;
} & SheetDirection;

/**
 * AlignmentVertical - Vertical alignment options.
 * @typedef {"center" | "top" | "bottom"} AlignmentVertical
 */
declare type AlignmentVertical = "center" | "top" | "bottom";

/**
 * AsTableOption - Options for displaying the sheet as a table.
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
 * BorderDirection - Directions for border options.
 * @typedef {"full" | "top" | "left" | "right" | "bottom"} BorderDirection
 */
declare type BorderDirection = "full" | "top" | "left" | "right" | "bottom";

/**
 * BorderOption - Options for configuring borders.
 * @interface
 */
declare type BorderOption = {
    [key in BorderDirection]?: {
        color: string;
        style: "slantDashDot" | "dotted" | "thick" | "hair" | "dashDot" | "dashDotDot" | "dashed" | "thin" | "mediumDashDot" | "medium" | "double" | "mediumDashed";
    };
};

/**
 * Buffer - Represents a buffer.
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
 * CellNumReference - use for reference range cell(Sheet A1-...)
 * @interface
 */
declare interface CellNumReference {
    min: number;
    max: number;
}

/**
 * CellStrReference - use for reference range cell(Sheet A1-...)
 * @interface
 */
declare interface CellStrReference {
    start: string;
    end: string;
}

/**
 * Checkbox - Represents a checkbox in the sheet.
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

/**
 * ColWidthScaleFunction - Set the width of a column based on its index and data.
 * @interface
 */
declare type ColWidthScaleFunction = (data: number, colIndex: number) => number;

/**
 * Comment - Represents a comment in the sheet.
 * @interface
 */
declare interface Comment_2 {
    comment?: string;
    styleId?: string;
    author?: string;
}

/**
 * CommentConditionFunction - Function type for comment condition.
 * @callback CommentConditionFunction@callback CommentConditionFunction@callback CommentConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {null | Data} object - The data object.
 * @param {string} headerKey - The header key.
 * @param {number} rowIndex - The row index.
 * @param {number} colIndex - The column index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @returns {Comment | string | false | undefined | null} The comment or null.
 */
declare type CommentConditionFunction<T extends ObjectLiteral = ObjectLiteral> = (data: Header | string | number | undefined, object: null | Data<T>, headerKey: string, rowIndex: number, colIndex: number, fromHeader: boolean) => Comment_2 | string | false | undefined | null;

/**
 * ConditionalFormatting - Represents conditional formatting in the sheet.
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
 * ConditionalFormattingCellsOperation - Operations for conditional formatting cells.
 * @typedef {"lt" | "gt" | "between" | "eq" | "ct"} ConditionalFormattingCellsOperation
 */
declare type ConditionalFormattingCellsOperation = "lt" | "gt" | "between" | "eq" | "ct";

/**
 * ConditionalFormattingIconSetOperation - Operations for conditional formatting icon sets.
 * @typedef {"3Arrows" | "4Arrows" | "5Arrows" | "5ArrowsGray" | "4ArrowsGray" | "3ArrowsGray"} ConditionalFormattingIconSetOperation
 */
declare type ConditionalFormattingIconSetOperation = "3Arrows" | "4Arrows" | "5Arrows" | "5ArrowsGray" | "4ArrowsGray" | "3ArrowsGray";

/**
 * ConditionalFormattingOption - Options for conditional formatting.
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
 * ConditionalFormattingTopOperation - Operations for conditional formatting top values.
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
 * @returns {ExcelTableReturnType} The generated Excel table.
 */
export declare function convertTableToExcel(queryForTable?: string, table?: HTMLTableElement, config?: {
    keepStyle?: boolean;
    rowHeightScaleFunction?: RowHeightScaleFunction;
    colWidthScaleFunction?: ColWidthScaleFunction;
}): ExcelTableReturnType;

/**
 * CustomFormulaSetting - Represents a custom formula setting.
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
 * Data - Represents data in the sheet.
 * @interface
 * @extends {object, DataOptions}
 */
declare type Data<T extends ObjectLiteral = ObjectLiteral> = T & DataOptions;

export declare namespace DataModel {
    export {
        ExcelTable,
        ExcelTableOption,
        Sheet,
        SheetOption,
        DataValidation,
        DataValidationType,
        DataValidationOperator,
        CellStrReference,
        CellNumReference,
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
        SingleUnderline,
        DoubleUnderline,
        UnderlineType,
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
        ExcelToNodeConfig,
        SheetProcessResult,
        ShapeRC,
        ObjectLiteral,
        ExcelTableReturnType
    }
}

/**
 * DataOptions - Options for configuring data in the sheet.
 * @interface
 */
declare interface DataOptions {
    outlineLevel?: number;
    hidden?: "0" | "1" | number;
    rowStyle?: string;
    height?: number;
    multiStyleValue?: MapMultiStyleValue;
    comment?: MapComment;
}

/**
 * DataValidation - Options for add data validation to cells.
 * @interface
 */
declare interface DataValidation {
    /** type of data validation - {@link DataValidationType}  */
    type: DataValidationType;
    /** allow blank cell- default:true*/
    allowBlank?: boolean;
    /** show input message- default:true*/
    showInputMessage?: boolean;
    /** show Drop Down for list type */
    showDropDown?: boolean;
    /** show error message- default:true*/
    showErrorMessage?: boolean;
    /** cell start  */
    start: string;
    /** cell end  */
    end: string;
    /** operator of data validation - {@link DataValidationOperator}  */
    operator?: DataValidationOperator;
    /** starting value for operation  */
    value: CellStrReference | CellNumReference | string | number;
}

/**  possible type for data validation operator  */
declare type DataValidationOperator = "between" | "notBetween" | "equal" | "notEqual" | "greaterThan" | "lessThan" | "greaterThanOrEqual" | "lessThanOrEqual";

/** possible type for data validation */
declare type DataValidationType = "whole" | "decimal" | "time" | "list" | "custom";

/**
 * DoubleUnderline - double underline style for the text.
 */
declare type DoubleUnderline = {
    /** Indicates if the style has double underline. */
    doubleUnderline?: true;
};

/**
 * DropDown - Represents a dropdown in the sheet.
 * @interface
 */
declare interface DropDown {
    /** Array of options for the dropdown. */
    option: (string | number)[];
    /** Array of columns the dropdown applies to. */
    for: string[];
}

/**
 * ExcelTable - Represents an Excel table with options and sheets.
 * @interface
 * @extends {ExcelTableOption}
 */
declare interface ExcelTable<T extends ObjectLiteral = ObjectLiteral> extends ExcelTableOption {
    /** Array of sheets in the Excel table. */
    sheet: Sheet<T>[];
}

/**
 * ExcelTableOption - Options for configuring an Excel table.
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
    /** Specify the default font family  */
    mainFontFamily?: string;
    /** hide sheets */
    hidden?: boolean;
    useCompression?: boolean;
}

/**
 * ExcelTableReturnType - interface for representing the return type of Excel table operations.
 */
declare type ExcelTableReturnType = Promise<string | number[] | Blob | Buffer_2 | undefined | void>;

export declare function excelToJson(uri: string, fetchFunc?: Function, withHeader?: boolean, defaultPropertyPrefix?: string): Promise<Record<string, object>>;

/**
 * Converts an Excel file to a Node.
 * @param {string} uri - The URI of the Excel file.
 * @param {string | null} [queryForTable] - The query selector for the table.
 * @param {HTMLDivElement | null} [containerElement] - The container element.
 * @param {ExcelToNodeConfig} [config=defaultConfig] - The configuration options.
 * @returns {Promise<HTMLTableElement[] | "Done">} The result of the conversion.
 */
export declare function excelToNode(uri: string, queryForTable?: string | null, containerElement?: HTMLDivElement | null, config?: ExcelToNodeConfig): Promise<HTMLTableElement[] | "Done">;

/**
 * ExcelToNodeConfig - Represents configuration options for Excel to Node.
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

/**
 * Extracts data from an Excel file.
 * @param {string} uri - The URI of the Excel file.
 * @param {boolean} [isBackend=false] - Whether the extraction is done on the backend.
 * @param {Function} [fetchFunc] - The function to fetch data.
 * @returns {Promise<DataModel.ReadResult>} The extracted data.
 */
export declare function extractExcelData(uri: string, isBackend?: boolean, fetchFunc?: Function): Promise<DataModel.ReadResult>;

/**
 * FormatMap - Represents a format map.
 * @interface
 */
declare interface FormatMap {
    [format: string]: {
        key: number;
        value?: string;
    };
}

/**
 * Formula - Represents a formula in the sheet.
 * @interface
 */
declare interface Formula {
    [insertCell: string]: FormulaSetting | SingleRefFormulaSetting | NoArgFormulaSetting | CustomFormulaSetting;
}

/**
 * FormulaSetting - Represents a formula setting.
 * @interface
 */
declare interface FormulaSetting {
    type: FormulaType;
    start: string;
    end: string;
    styleId?: string;
}

/**
 * FormulaType - Types of formulas.
 * @typedef {"AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN"} FormulaType
 */
declare type FormulaType = "AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN";

/**
 * Generates a CSV file from an Excel table Object.
 * @param {ExcelTable} excelTable - The Excel table. See {@link ExcelTable}.
 * @param {boolean} [asZip=false] - Whether to generate the CSV as a ZIP file.
 * @returns {Promise<string[] | "done" | undefined>} The generated CSV file.
 */
export declare function generateCSV<T extends object = object>(excelTable: ExcelTable<T>, asZip?: boolean): Promise<string[] | "done">;

export declare function generateExcel<T extends object = object>(data: ExcelTable<T>): ExcelTableReturnType;

/**
 * Generates a text file from an Excel table Object.
 * @param {ExcelTable} excelTable - The Excel table.
 * @param {boolean} [asZip=false] - Whether to generate the text file as a ZIP file.
 * @returns {Promise<string[] | "done" | undefined>} The generated text file.
 */
export declare function generateText<T extends object = object>(excelTable: ExcelTable<T>, asZip?: boolean): Promise<string[] | "done">;

/**
 * Header - Represents a header in the sheet.
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
 * HeaderFooterLocationMap - Location map for header and footer options.l:Left, c:Center, r:Right
 * @interface
 */
declare interface HeaderFooterLocationMap {
    l?: HeaderFooterOption;
    c?: HeaderFooterOption;
    r?: HeaderFooterOption;
}

/**
 * HeaderFooterOption - Options for header and footer.
 * @interface
 */
declare interface HeaderFooterOption {
    /** The text of the header or footer. */
    text?: string;
    /** The style ID of the header or footer. */
    styleId?: string;
}

/**
 * HeaderFooterTypes - Types of header and footer in page(odd page, even page,first page).
 * @interface
 */
declare interface HeaderFooterTypes {
    odd?: HeaderFooterLocationMap;
    even?: HeaderFooterLocationMap;
    first?: HeaderFooterLocationMap;
}

/**
 * HeaderOption - Options for configuring a header.
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
 * ImageTypes - Represents an image in the sheet.
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

declare type LTRDirection = {
    ltr?: true;
};

/**
 * MapComment - Represents a map of comments.
 * @interface
 */
declare interface MapComment {
    [key: string]: Comment_2 | string;
}

/**
 * MapMultiStyleValue - Represents a map of multi-style values.
 * @interface
 */
declare interface MapMultiStyleValue {
    [key: string]: MultiStyleValue[];
}

/**
 * MergeRowDataConditionFunction - Function type for merge row data condition.
 * @callback MergeRowDataConditionFunction@callback MergeRowDataConditionFunction@callback MergeRowDataConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {string | null} key - The key.
 * @param {number} index - The index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @returns {boolean} The result of the condition.
 */
declare type MergeRowDataConditionFunction = (data: Header | string | number | undefined, key: string | null, index: number, fromHeader: boolean) => boolean;

/**
 * MultiStyleConditionFunction - Function type for multi-style condition.
 * @callback MultiStyleConditionFunction@callback MultiStyleConditionFunction@callback MultiStyleConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {null | Data} object - The data object.
 * @param {string} headerKey - The header key.
 * @param {number} rowIndex - The row index.
 * @param {number} colIndex - The column index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @returns {MultiStyleValue[] | null} The multi-style values or null.
 */
declare type MultiStyleConditionFunction<T extends ObjectLiteral = ObjectLiteral> = (data: Header | string | number | undefined, object: null | Data<T>, headerKey: string, rowIndex: number, colIndex: number, fromHeader: boolean) => MultiStyleValue[] | null;

/**
 * MultiStyleValue - Represents a multi-style value.
 * @interface
 */
declare interface MultiStyleValue {
    value: string | number;
    styleId?: string;
}

/**
 * NoArgFormulaSetting - Represents a no-argument formula setting.
 * @interface
 */
declare interface NoArgFormulaSetting {
    noArgType: NoArgFormulaType;
    styleId?: string;
}

/**
 * NoArgFormulaType - Types of no-argument formulas.
 * @typedef {"NOW" | "TODAY" | "HOUR" | "NOW_YEAR" | "NOW_HOUR" | "NOW_SECOND" | "NOW_MIN" | "NOW_MONTH" | "NOW_DAY" | "NOW_WEEKDAY" | "NOW_MINUTE"} NoArgFormulaType
 */
declare type NoArgFormulaType = "NOW" | "TODAY" | "HOUR" | "NOW_YEAR" | "NOW_HOUR" | "NOW_SECOND" | "NOW_MIN" | "NOW_MONTH" | "NOW_DAY" | "NOW_WEEKDAY" | "NOW_MINUTE";

/**
 * ObjectLiteral - ObjectLiteral - interface for representing an object with literal keys.
 */
declare interface ObjectLiteral {
    [key: string]: any;
}

/**
 * PageBreak - Options for page breaks in the sheet.
 * @interface
 */
declare interface PageBreak {
    /** Array of row indices where page breaks should occur. */
    row?: number[];
    /** Array of column indices where page breaks should occur. */
    column?: number[];
}

/**
 * PageOption - Options for configuring the page.
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
 * ProtectionOption - Represents protection options for the sheet.
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
 * ProtectionOptionKey - Keys for protection options.
 * @typedef {"sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables"} ProtectionOptionKey
 */
declare type ProtectionOptionKey = "sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables";

declare type ReadingOrder = {
    readingOrder?: "1" | "2" | 2 | 1;
};

export declare function replaceInExcel(url: string | null | undefined, replaceData: Record<string, string | number | boolean>, option?: ReplacerOption): Promise<string | number[] | Buffer_2 | Blob>;

/**
 * ReplacerOption - Represents options for the replacer.
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

/**
 * RowHeightScaleFunction - Set the height of a row based on its index and data.
 * @interface
 */
declare type RowHeightScaleFunction = (data: number, rowIndex: number, fromHeader: boolean) => number;

declare type RTLDirection = {
    rtl?: true;
};

/**
 * Sheet - Represents a sheet in the Excel.
 * @interface
 * @extends {SheetOption}
 */
declare interface Sheet<T extends ObjectLiteral = ObjectLiteral> extends SheetOption<T> {
    /** Array of headers in the sheet. */
    headers: Header[];
    /** Array of data in the sheet. */
    data: Data<T>[];
}

declare type SheetDirection = (RTLDirection & {
    ltr?: never;
    readingOrder?: never;
}) | (LTRDirection & {
    rtl?: never;
    readingOrder?: never;
}) | (ReadingOrder & {
    rtl?: never;
    ltr?: never;
});

/**
 * SheetOption - Options for configuring a sheet.
 * @interface
 */
declare interface SheetOption<T extends ObjectLiteral = ObjectLiteral> {
    /** data validation for sheet  */
    dataValidations?: DataValidation[];
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
    multiStyleCondition?: MultiStyleConditionFunction<T>;
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
    /** Key(Id) for the header style. */
    headerStyleKey?: string;
    /** Function for merge row data base on condition. */
    mergeRowDataCondition?: MergeRowDataConditionFunction;
    /** Function for style cell base on condition. */
    styleCellCondition?: StyleCellConditionFunction<T>;
    /** Function for comment base on condition. */
    commentCondition?: CommentConditionFunction<T>;
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
    /** increase zoom scale  */
    zoomScale?: {
        scale: number;
        startAt: string;
    };
}

/**
 * SideBySide - Represents side-by-side data in the sheet.
 * @interface
 */
declare interface SideBySide<T extends ObjectLiteral = ObjectLiteral> {
    sheetName?: string;
    spaceX?: number;
    spaceY?: number;
    headers: {
        label: string;
        text: string;
    }[];
    data: Data<T>[];
    headerIndex?: number;
}

/**
 * Generates an Excel file with side-by-side data.
 * @param {SideBySide[][]} data - The side-by-side data.
 * @returns {ExcelTableReturnType} The generated Excel table.
 */
export declare function sideBySideLineByLine(data: SideBySide[][]): ExcelTableReturnType;

/**
 * SingleRefFormulaSetting - Represents a single-reference formula setting.
 * @interface
 */
declare interface SingleRefFormulaSetting {
    type: SingleRefFormulaType;
    referenceCell: string;
    value?: number | string;
    styleId?: string;
}

/**
 * SingleRefFormulaType - Types of single-reference formulas.
 * @typedef {"LEN" | "MODE" | "UPPER" | "LOWER" | "PROPER" | "RIGHT" | "LEFT" | "ABS" | "POWER" | "MOD" | "FLOOR" | "CEILING" | "ROUND" | "SQRT" | "COS" | "SIN" | "TAN" | "COT" | "COUNTIF" | "SUMIF" | "TRIM"} SingleRefFormulaType
 */
declare type SingleRefFormulaType = "LEN" | "MODE" | "UPPER" | "LOWER" | "PROPER" | "RIGHT" | "LEFT" | "ABS" | "POWER" | "MOD" | "FLOOR" | "CEILING" | "ROUND" | "SQRT" | "COS" | "SIN" | "TAN" | "COT" | "COUNTIF" | "SUMIF" | "TRIM";

/**
 * SingleUnderline - underline style for the text.
 */
declare type SingleUnderline = {
    /** Indicates if the style is underlined. */
    underline?: true;
};

/**
 * SortAndFilter - Represents sort and filter options.
 * @interface
 */
declare interface SortAndFilter {
    mode: "all" | "ref";
    ref?: string;
}

/**
 * StyleBody - Represents the body of a style.
 * @interface
 */
declare type StyleBody = {
    /** The font family of the text. */
    fontFamily?: string;
    /** The type of the style.(if not define used for cells, for other type should be define) */
    type?: StyleType;
    /** The size of the font. */
    size?: number;
    /** The alignment options of the text. */
    alignment?: AlignmentOption;
    /** The border options. */
    border?: BorderOption;
    /** The format of the text. */
    format?: string;
    /** Indicates if the style is bold. */
    bold?: true;
    /** Indicates if the style is italic. */
    italic?: true;
    /** The color of the style. */
    color?: string;
    /** The background color of the style. */
    backgroundColor?: string;
} & UnderlineType;

/**
 * StyleCellConditionFunction - Function type for style cell condition.
 * @callback StyleCellConditionFunction@callback StyleCellConditionFunction@callback StyleCellConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {Header | Data} object - The data object.
 * @param {number} rowIndex - The row index.
 * @param {number} colIndex - The column index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @param {string[]} styleKeys - The style keys.
 * @returns {string | null} The style key or null.
 */
declare type StyleCellConditionFunction<T extends ObjectLiteral = ObjectLiteral> = (data: Header | string | number | undefined, object: Header | Data<T>, rowIndex: number, colIndex: number, fromHeader: boolean, styleKeys: string[]) => string | null;

/**
 * Styles - Represents a collection of styles.
 * @interface
 */
declare interface Styles {
    [key: string]: StyleBody;
}

/**
 * StyleType - Types of styles that can be applied(not value for cell, CF/conditionalFormatting for conditionalFormatting option and HF/headerFooter for headerFooter option).
 * @typedef {"conditionalFormatting" | "CF" | "headerFooter" | "HF"} StyleType
 */
declare type StyleType = "conditionalFormatting" | "CF" | "headerFooter" | "HF";

/**
 * Generates an Excel file with a theme.
 * @param {ExcelTable | Data[] | Data[][]} data - The data for the Excel file.
 * @param {ThemeOption} [option] - The theme options.
 * @returns {ExcelTableReturnType} The generated Excel table.
 */
export declare function themeBaseGenerate<T extends object = object>(data: ExcelTable<T> | Data<T>[] | Data[][], option?: ThemeOption): ExcelTableReturnType;

/**
 * ThemeOption - Represents theme options.
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
 * Title - Represents the title of the sheet.
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

/**
 * UnderlineType - underline type for the text, can be either single or double underline, but not both at the same time.
 */
declare type UnderlineType = (SingleUnderline & {
    doubleUnderline?: never;
}) | (DoubleUnderline & {
    underline?: never;
});

export declare namespace Validator {
    export {
        validateStyleObjectFunction,
        validateSheetArrayFunction,
        validateExcelTableObjectFunction,
        exportedForTesting
    }
}

/**
 * ViewOption - Options for configuring the view of the sheet.
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
 * ViewStart - Options for the start of the view.
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
