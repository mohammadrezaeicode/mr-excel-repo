export interface ExcelTable extends ExcelTableOption {
  sheet: Sheet[];
}
export interface ExcelTableOption {
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

export interface Sheet extends SheetOption {
  headers: Header[];
  data: Data[];
}
export interface SheetOption {
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
export interface Header {
  label: string;
  text: string;
  size?: number;
  multiStyleValue?: MultiStyleValue;
  comment?: Comment | string;
  conditionalFormatting?: ConditionalFormatting;
  formula?: {
    type: FormulaType;
    styleId?: string;
  };
}
export interface StyleBody {
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
export interface Styles {
  [key: string]: StyleBody;
}
export interface Data extends DataOptions {
  [key: string]: string | number | any | undefined;
}
export interface DataOptions {
  [key: string]:
    | "0"
    | "1"
    | number
    | string
    | undefined
    | MapComment
    | MapMultiStyleValue;
  outlineLevel?: number;
  hidden?: "0" | "1" | number;
  rowStyle?: string;
  height?: number;
  multiStyleValue?: MapMultiStyleValue;
  comment?: MapComment;
}
export interface RowMap {
  [rowNumber: number]: {
    startTag: string;
    endTag: string;
    details: string;
  };
}
export type ProtectionOption = {
  [key in ProtectionOptionKey]: "0" | "1" | 0 | 1;
};
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
export interface ConditionalFormatting {
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
export interface SideBySide {
  sheetName?: string;
  spaceX?: number;
  spaceY?: number;
  headers: { label: string; text: string }[];
  data: Data[];
  headerIndex?: number;
}
export type AlignmentOptionKey =
  | "horizontal"
  | "vertical"
  | "wrapText"
  | "shrinkToFit"
  | "readingOrder"
  | "textRotation"
  | "indent";
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

export interface MapMultiStyleValue {
  [key: string]: MultiStyleValue;
}
export interface MultiStyleValue {
  [key: string]: string | undefined | MultiStyleRexValue[];
  reg?: MultiStyleRexValue[];
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

export interface MergeRowConditionMap {
  [columnKey: string]: {
    inProgress: boolean;
    start: number;
  };
}
export type MultiStyleConditionFunction = (
  data: Header | string | number | undefined,
  object: null | Data,
  headerKey: string,
  rowIndex: number,
  colIndex: number,
  fromHeader: boolean
) => MultiStyleValue | null;

export type CommentConditionFunction = (
  data: Header | string | number | undefined,
  object: null | Data,
  headerKey: string,
  rowIndex: number,
  colIndex: number,
  fromHeader: boolean
) => Comment | string | false | undefined | null;
export type StyleCellConditionFunction = (
  data: Header | string | number | undefined,
  object: Header | Data,
  rowIndex: number,
  colIndex: number,
  fromHeader: boolean,
  styleKeys: string[]
) => string | null;
export type MergeRowDataConditionFunction = (
  data: Header | string | number | undefined,
  key: string | null,
  index: number,
  fromHeader: boolean
) => boolean;
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
export interface HeaderRowOption {
  outlineLevel: "string";
}
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
export type NoArgFormulaType =
  | "NOW"
  | "TODAY"
  | "NOW_YEAR"
  | "NOW_HOUR"
  | "NOW_SECOND"
  | "NOW_MIN"
  | "NOW_MONTH"
  | "NOW_DAY"
  | "NOW_WEEKDAY"
  | "NOW_MINUTE";
export type FormulaType = "AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN";
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
  | "FLOOR"
  | "CEILING"
  | "ROUND"
  | "SQRT"
  | "COS"
  | "SIN"
  | "TAN"
  | "COT"
  | "COUNTIF"
  | "TRIM";
export interface FormatMap {
  [format: string]: {
    key: number;
    value?: string;
  };
}
export interface Formula {
  [insertCell: string]:
    | FormulaSetting
    | SingleRefFormulaSetting
    | NoArgFormulaSetting
    | CustomFormulaSetting;
}
export interface FormulaSetting {
  type: FormulaType;
  start: string;
  end: string;
  styleId?: string;
}
export interface CustomFormulaSetting {
  isArray?: boolean;
  referenceCells?: string;
  formula: string;
  returnType?: string;
  styleId?: string;
}
export interface SingleRefFormulaSetting {
  type: SingleRefFormulaType;
  referenceCell: string;
  value?: number | string;
  styleId?: string;
}
export interface NoArgFormulaSetting {
  noArgType: NoArgFormulaType;
  styleId?: string;
}
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

export interface MapComment {
  [key: string]: Comment | string;
}
