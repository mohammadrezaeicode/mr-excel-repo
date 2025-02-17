/**
 * Represents an Excel table with options and sheets.
 * @interface
 * @extends {ExcelTableOption}
 */
export interface ExcelTable extends ExcelTableOption {
  /** Array of sheets in the Excel table. */
  sheet: Sheet[];
}

/**
 * Options for configuring an Excel table.
 * @interface
 */
export interface ExcelTableOption {
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
/**
 * Represents a sheet in the Excel.
 * @interface
 * @extends {SheetOption}
 */
export interface Sheet extends SheetOption {
  /** Array of headers in the sheet. */
  headers: Header[];
  /** Array of data in the sheet. */
  data: Data[];
}

/**
 * Options for configuring a sheet.
 * @interface
 */
export interface SheetOption {
  /** Indicates if the sheet should be without a header. */
  withoutHeader?: boolean;
  /** Options for configure property name that maybe provide for apply outlineLevel, hidden, height option of row*/
  /* @example
    // height:"XYZ" => in data : {"header label":"value","XYZ":12}
  */
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
 * Options for displaying the sheet as a table.
 * @interface
 */
export interface AsTableOption {
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
 * Options for page breaks in the sheet.
 * @interface
 */
export interface PageBreak {
  /** Array of row indices where page breaks should occur. */
  row?: number[];
  /** Array of column indices where page breaks should occur. */
  column?: number[];
}

/**
 * Options for the start of the view.
 * @interface
 */
export interface ViewStart {
  t?: string;
  b?: string;
  r?: string;
  l?: string;
  one?: string;
  two?: string;
}

/**
 * Options for configuring the view of the sheet.
 * @interface
 */
export interface ViewOption {
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
    index:
      | number
      | {
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
    split:
      | number
      | {
          x: number;
          y: number;
        };
  };
}

/**
 * Options for header and footer.
 * @interface
 */
export interface HeaderFooterOption {
  /** The text of the header or footer. */
  text?: string;
  /** The style ID of the header or footer. */
  styleId?: string;
}

/**
 * Location map for header and footer options.l:Left, c:Center, r:Right
 * @interface
 */
export interface HeaderFooterLocationMap {
  l?: HeaderFooterOption;
  c?: HeaderFooterOption;
  r?: HeaderFooterOption;
}

/**
 * Types of header and footer in page(odd page, even page,first page).
 * @interface
 */
export interface HeaderFooterTypes {
  odd?: HeaderFooterLocationMap;
  even?: HeaderFooterLocationMap;
  first?: HeaderFooterLocationMap;
}

/**
 * Options for configuring the page.
 * @interface
 */
export interface PageOption {
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
 * Represents a header in the sheet.
 * @interface
 * @extends {HeaderOption}
 */
export interface Header extends HeaderOption {
  /** The label of the header. */
  label: string;
  /** The text of the header. */
  text: string;
}

/**
 * Options for configuring a header.
 * @interface
 */
export interface HeaderOption {
  /** The size(width) of the header. */
  size?: number;
  /** Array of multi-style values for the header. */
  multiStyleValue?: MultiStyleValue[];
  /** Comment for the header. */
  comment?: Comment | string;
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
 * Types of styles that can be applied(not value for cell, CF/conditionalFormatting for conditionalFormatting option and HF/headerFooter for headerFooter option).
 * @typedef {"conditionalFormatting" | "CF" | "headerFooter" | "HF"} StyleType
 */

export type StyleType = "conditionalFormatting" | "CF" | "headerFooter" | "HF";

/**
 * Represents the body of a style.
 * @interface
 */
export interface StyleBody {
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
 * Represents a collection of styles.
 * @interface
 */
export interface Styles {
  [key: string]: StyleBody;
}
/**
 * Represents data in the sheet.
 * @interface
 * @extends {DataOptions}
 */
export interface Data extends DataOptions {
  [key: string]: string | number | any | undefined;
}

/**
 * Options for configuring data in the sheet.
 * @interface
 */
export interface DataOptions {
  [key: string]:
    | "0"
    | "1"
    | number
    | string
    | undefined
    | MapComment
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
export interface DropDown {
  /** Array of options for the dropdown. */
  option: (string | number)[];
  /** Array of columns the dropdown applies to. */
  for: string[];
}

/**
 * Represents a map of rows in the sheet.
 * @interface
 */
export interface RowMap {
  [rowNumber: number]: {
    startTag: string;
    endTag: string;
    details: string;
  };
}

/**
 * Represents protection options for the sheet.
 * @typedef {Object} ProtectionOption
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
export type ProtectionOption = {
  [key in ProtectionOptionKey]: "0" | "1" | 0 | 1;
};

/**
 * Keys for protection options.
 * @typedef {"sheet" | "formatCells" | "formatColumns" | "formatRows" | "insertColumns" | "insertRows" | "insertHyperlinks" | "deleteColumns" | "deleteRows" | "sort" | "autoFilter" | "pivotTables"} ProtectionOptionKey
 */
export type ProtectionOptionKey =
  | "sheet"
  | "formatCells"
  | "formatColumns"
  | "formatRows"
  | "insertColumns"
  | "insertRows"
  | "insertHyperlinks"
  | "deleteColumns"
  | "deleteRows"
  | "sort"
  | "autoFilter"
  | "pivotTables";

/**
 * Operations for conditional formatting cells.
 * @typedef {"lt" | "gt" | "between" | "eq" | "ct"} ConditionalFormattingCellsOperation
 */
export type ConditionalFormattingCellsOperation =
  | "lt"
  | "gt"
  | "between"
  | "eq"
  | "ct";

/**
 * Operations for conditional formatting icon sets.
 * @typedef {"3Arrows" | "4Arrows" | "5Arrows" | "5ArrowsGray" | "4ArrowsGray" | "3ArrowsGray"} ConditionalFormattingIconSetOperation
 */
export type ConditionalFormattingIconSetOperation =
  | "3Arrows"
  | "4Arrows"
  | "5Arrows"
  | "5ArrowsGray"
  | "4ArrowsGray"
  | "3ArrowsGray";

/**
 * Operations for conditional formatting top values.
 * @typedef {"belowAverage" | "aboveAverage"} ConditionalFormattingTopOperation
 */
export type ConditionalFormattingTopOperation = "belowAverage" | "aboveAverage";

/**
 * Options for conditional formatting.
 * @interface
 */
export interface ConditionalFormattingOption {
  /** The type of conditional formatting. */
  type: "cells" | "dataBar" | "iconSet" | "colorScale" | "top";
  /** The operator for the conditional formatting. */
  operator?:
    | string
    | ConditionalFormattingCellsOperation
    | ConditionalFormattingIconSetOperation
    | ConditionalFormattingTopOperation;
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
 * Represents conditional formatting in the sheet.
 * @interface
 * @extends {ConditionalFormattingOption}
 */
export interface ConditionalFormatting extends ConditionalFormattingOption {
  /** The start cell for the conditional formatting. */
  start: string;
  /** The end cell for the conditional formatting. */
  end: string;
}

/**
 * Represents an image in the sheet.
 * @interface
 */
export interface ImageTypes {
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
 * Represents side-by-side data in the sheet.
 * @interface
 */
export interface SideBySide {
  sheetName?: string;
  spaceX?: number;
  spaceY?: number;
  headers: { label: string; text: string }[];
  data: Data[];
  headerIndex?: number;
}

/**
 * Keys for alignment options.
 * @typedef {"horizontal" | "vertical" | "wrapText" | "shrinkToFit" | "readingOrder" | "textRotation" | "indent"} AlignmentOptionKey
 */
export type AlignmentOptionKey =
  | "horizontal"
  | "vertical"
  | "wrapText"
  | "shrinkToFit"
  | "readingOrder"
  | "textRotation"
  | "indent";

/**
 * Horizontal alignment options.
 * @typedef {"center" | "left" | "right"} AlignmentHorizontal
 */
export type AlignmentHorizontal = "center" | "left" | "right";

/**
 * Vertical alignment options.
 * @typedef {"center" | "top" | "bottom"} AlignmentVertical
 */
export type AlignmentVertical = "center" | "top" | "bottom";

/**
 * Options for configuring alignment.
 * @interface
 */
export interface AlignmentOption {
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
 * Directions for border options.
 * @typedef {"full" | "top" | "left" | "right" | "bottom"} BorderDirection
 */
export type BorderDirection = "full" | "top" | "left" | "right" | "bottom";

/**
 * Options for configuring borders.
 * @interface
 */
export type BorderOption = {
  [key in BorderDirection]?: {
    color: string;
    style:
      | "slantDashDot"
      | "dotted"
      | "thick"
      | "hair"
      | "dashDot"
      | "dashDotDot"
      | "dashed"
      | "thin"
      | "mediumDashDot"
      | "medium"
      | "double"
      | "mediumDashed";
  };
};

/**
 * Represents a map of multi-style values.
 * @interface
 */
export interface MapMultiStyleValue {
  [key: string]: MultiStyleValue[];
}

/**
 * Represents a multi-style value.
 * @interface
 */
export interface MultiStyleValue {
  value: string | number;
  styleId?: string;
}

/**
 * Represents a multi-style regex value.
 * @interface
 */
export interface MultiStyleRexValue {
  reg: RegExp | string;
  styleId: string;
}

/**
 * Represents a comment in the sheet.
 * @interface
 */
export interface Comment {
  comment?: string;
  styleId?: string;
  author?: string;
}

/**
 * Represents a map of merge row conditions.
 * @interface
 */
export interface MergeRowConditionMap {
  [columnKey: string]: {
    inProgress: boolean;
    start: number;
  };
}

/**
 * Function type for multi-style condition.
 * @callback MultiStyleConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {null | Data} object - The data object.
 * @param {string} headerKey - The header key.
 * @param {number} rowIndex - The row index.
 * @param {number} colIndex - The column index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @returns {MultiStyleValue[] | null} The multi-style values or null.
 */
export type MultiStyleConditionFunction = (
  data: Header | string | number | undefined,
  object: null | Data,
  headerKey: string,
  rowIndex: number,
  colIndex: number,
  fromHeader: boolean
) => MultiStyleValue[] | null;

/**
 * Function type for comment condition.
 * @callback CommentConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {null | Data} object - The data object.
 * @param {string} headerKey - The header key.
 * @param {number} rowIndex - The row index.
 * @param {number} colIndex - The column index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @returns {Comment | string | false | undefined | null} The comment or null.
 */
export type CommentConditionFunction = (
  data: Header | string | number | undefined,
  object: null | Data,
  headerKey: string,
  rowIndex: number,
  colIndex: number,
  fromHeader: boolean
) => Comment | string | false | undefined | null;

/**
 * Function type for style cell condition.
 * @callback StyleCellConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {Header | Data} object - The data object.
 * @param {number} rowIndex - The row index.
 * @param {number} colIndex - The column index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @param {string[]} styleKeys - The style keys.
 * @returns {string | null} The style key or null.
 */
export type StyleCellConditionFunction = (
  data: Header | string | number | undefined,
  object: Header | Data,
  rowIndex: number,
  colIndex: number,
  fromHeader: boolean,
  styleKeys: string[]
) => string | null;

/**
 * Function type for merge row data condition.
 * @callback MergeRowDataConditionFunction
 * @param {Header | string | number | undefined} data - The data to apply the condition to.
 * @param {string | null} key - The key.
 * @param {number} index - The index.
 * @param {boolean} fromHeader - Indicates if the condition is from the header.
 * @returns {boolean} The result of the condition.
 */
export type MergeRowDataConditionFunction = (
  data: Header | string | number | undefined,
  key: string | null,
  index: number,
  fromHeader: boolean
) => boolean;

/**
 * Represents sort and filter options.
 * @interface
 */
export interface SortAndFilter {
  mode: "all" | "ref";
  ref?: string;
}

/**
 * Represents the title of the sheet.
 * @interface
 */
export interface Title {
  shiftTop?: number;
  shiftLeft?: number;
  consommeRow?: number;
  consommeCol?: number;
  height?: number;
  styleId?: string;
  text?: string;
  multiStyleValue?: MultiStyleValue[];
  comment?: Comment | string;
}

/**
 * Options for the header row.
 * @interface
 */
export interface HeaderRowOption {
  outlineLevel: "string";
}

/**
 * Represents a checkbox in the sheet.
 * @interface
 */
export interface Checkbox {
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
 * Types of no-argument formulas.
 * @typedef {"NOW" | "TODAY" | "HOUR" | "NOW_YEAR" | "NOW_HOUR" | "NOW_SECOND" | "NOW_MIN" | "NOW_MONTH" | "NOW_DAY" | "NOW_WEEKDAY" | "NOW_MINUTE"} NoArgFormulaType
 */
export type NoArgFormulaType =
  | "NOW"
  | "TODAY"
  | "HOUR"
  | "NOW_YEAR"
  | "NOW_HOUR"
  | "NOW_SECOND"
  | "NOW_MIN"
  | "NOW_MONTH"
  | "NOW_DAY"
  | "NOW_WEEKDAY"
  | "NOW_MINUTE";

/**
 * Types of formulas.
 * @typedef {"AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN"} FormulaType
 */
export type FormulaType = "AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN";

/**
 * Types of single-reference formulas.
 * @typedef {"LEN" | "MODE" | "UPPER" | "LOWER" | "PROPER" | "RIGHT" | "LEFT" | "ABS" | "POWER" | "MOD" | "FLOOR" | "CEILING" | "ROUND" | "SQRT" | "COS" | "SIN" | "TAN" | "COT" | "COUNTIF" | "SUMIF" | "TRIM"} SingleRefFormulaType
 */
export type SingleRefFormulaType =
  | "LEN"
  | "MODE"
  | "UPPER"
  | "LOWER"
  | "PROPER"
  | "RIGHT"
  | "LEFT"
  | "ABS"
  | "POWER"
  | "MOD"
  | "FLOOR"
  | "CEILING"
  | "ROUND"
  | "SQRT"
  | "COS"
  | "SIN"
  | "TAN"
  | "COT"
  | "COUNTIF"
  | "SUMIF"
  | "TRIM";

/**
 * Represents a format map.
 * @interface
 */
export interface FormatMap {
  [format: string]: {
    key: number;
    value?: string;
  };
}

/**
 * Represents a formula in the sheet.
 * @interface
 */
export interface Formula {
  [insertCell: string]:
    | FormulaSetting
    | SingleRefFormulaSetting
    | NoArgFormulaSetting
    | CustomFormulaSetting;
}

/**
 * Represents a formula setting.
 * @interface
 */
export interface FormulaSetting {
  type: FormulaType;
  start: string;
  end: string;
  styleId?: string;
}

/**
 * Represents a custom formula setting.
 * @interface
 */
export interface CustomFormulaSetting {
  isArray?: boolean;
  referenceCells?: string;
  formula: string;
  returnType?: string;
  styleId?: string;
}

/**
 * Represents a single-reference formula setting.
 * @interface
 */
export interface SingleRefFormulaSetting {
  type: SingleRefFormulaType;
  referenceCell: string;
  value?: number | string;
  styleId?: string;
}

/**
 * Represents a no-argument formula setting.
 * @interface
 */
export interface NoArgFormulaSetting {
  noArgType: NoArgFormulaType;
  styleId?: string;
}

/**
 * Represents a style mapper.
 * @interface
 */
export interface StyleMapper {
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
 * Represents a map of comments.
 * @interface
 */
export interface MapComment {
  [key: string]: Comment | string;
}

/**
 * Represents theme options.
 * @interface
 */
export interface ThemeOption {
  negativeColor?: boolean;
  headerColor?: string;
  rowColor?: string;
  headerBackgroundColor?: string;
  rowBackgroundColor?: string;
  fileName?: string;
  filterKeys?: string[];
}

/**
 * Represents extracted data.
 * @typedef {(string | null | undefined)[][]} ExtractedData
 */
export type ExtractedData = (string | null | undefined)[][];

/**
 * Represents the result of data extraction.
 * @interface
 */
export interface ExtractResult {
  [sheetName: string]: ExtractedData;
}

/**
 * Represents the result of reading data.
 * @interface
 */
export interface ReadResult {
  data: ExtractResult;
  sheetNameObject: Record<string, string>;
  sheetName: IterableIterator<[string, string]>;
  maxLengthOfColumn: Record<string, number>;
}

/**
 * Represents a buffer.
 * @class
 * @extends {Uint8Array}
 */
export declare class Buffer extends Uint8Array {
  constructor(str: string, encoding?: string);
  constructor(size: number);
  constructor(array: Uint8Array);
  constructor(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number);

  static alloc(
    size: number,
    fill?: string | Buffer | number,
    encoding?: string
  ): Buffer;
  static from(
    arrayBuffer: ArrayBuffer,
    byteOffset?: number,
    length?: number
  ): Buffer;
  static from(data: number[]): Buffer;
  static from(str: string, encoding?: string): Buffer;

  write(
    string: string,
    offset?: number,
    length?: number,
    encoding?: string
  ): number;
  toString(encoding?: string, start?: number, end?: number): string;
  slice(start?: number, end?: number): Buffer;
  static concat(list: Buffer[], totalLength?: number): Buffer;

  length: number;
  byteOffset: number;
}

/**
 * Represents options for the replacer.
 * @interface
 */
export interface ReplacerOption {
  fileName?: string;
  backend?: boolean;
  fetch?: Function;
  data?: Blob | Buffer;
  notSave?: boolean;
  generateType?: "nodebuffer" | "array" | "binarystring" | "base64";
}

/**
 * Represents configuration options for Excel to Node.
 * @interface
 */
export interface ExcelToNodeConfig {
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