export interface ProtectionOption {
  sheet: "0" | "1";
  formatCells: "0" | "1";
  formatColumns: "0" | "1";
  formatRows: "0" | "1";
  insertColumns: "0" | "1";
  insertRows: "0" | "1";
  insertHyperlinks: "0" | "1";
  deleteColumns: "0" | "1";
  deleteRows: "0" | "1";
  sort: "0" | "1";
  autoFilter: "0" | "1";
  pivotTables: "0" | "1";
}
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
  | "textRotation";
export interface AlignmentOption {
  horizontal?: "center" | "left" | "right";
  vertical?: "bottom" | "top" | "bottom";
  wrapText?: "0" | "1";
  shrinkToFit?: "0" | "1";
  readingOrder?: number;
  textRotation?: number;
}
export interface Header {
  label: string;
  text: string;
  size?: number;
}

export interface Data extends DataOptions {
  [key: string]: string | number | undefined;
}
export interface DataOptions {
  [key: string]: "0" | "1" | number | string | undefined;
  outlineLevel?: number;
  hidden?: "0" | "1";
  rowStyle?: string;
  height?: number;
}

export interface Sheet {
  name?: string;
  selected?: boolean;
  tabColor?: string;
  state: "hidden" | "visible";
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
export interface Styles {
  [key: string]: {
    fg?: string;
    fontColor?: string;
    fontFamily: string;
    size?: number;
    index?: number;
    alignment?: AlignmentOption;
  };
}

export interface Formula {
  useFormula: boolean;
  cell: string;
  type?: string;
  start?: string;
  end?: string;
  styleId: string;
}

export interface ExcelTable {
  creator?: string;
  lastModifiedBy?: string;
  created?: string;
  modified?: string;
  numberOfColumn?: number;
  createType?: string;
  mapSheetDataOption?: any; // Define the type if needed
  styles?: Styles;
  formula?: Formula;
  sheet: Sheet[];
}

// Now you can use 'YourObject' as the type for your data.