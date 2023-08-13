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
export interface Header {
  label: string;
  text: string;
  size?: number;
  formula?: {
    type: FormulaType;
    styleId?: string;
  };
}

export interface Data extends DataOptions {
  [key: string]: string | number | undefined;
}
export interface DataOptions {
  [key: string]: "0" | "1" | number | string | undefined;
  outlineLevel?: number;
  hidden?: "0" | "1" | number;
  rowStyle?: string;
  height?: number;
}
export interface MergeRowConditionMap {
  [columnKey: string]: {
    inProgress: boolean;
    start: number;
  };
}
export type StyleCellConditionFunction = (
  data: Header | string | number | undefined,
  object: Header | Data,
  colIndex: number,
  rowIndex: number,
  fromHeader: boolean,
  stylekeys: string[]
) => string;
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
  sortAndfilter?: SortAndFilter;
  state?: "hidden" | "visible";
  headerRowOption?: any; // Define the type if needed
  protectionOption?: ProtectionOption;
  headerHeight?: number;
  headers: Header[];
  data: Data[];
}
export interface HeaderRowOption {
  outlineLevel: "string";
}
// export interface Tab {
//   headers: Header[];
//   data: Data[];
// }
export interface StyleMapper {
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
  fileName?:string;
  generateType?: "nodebuffer" | "array" | "binarystring" | "base64";
  addDefaultTitleStyle?: boolean;
  created?: string;
  modified?: string;
  numberOfColumn?: number;
  createType?: string;
  mapSheetDataOption?: any; // Define the type if needed
  styles?: Styles;
  sheet: Sheet[];
}

// Now you can use 'YourObject' as the type for your data.
