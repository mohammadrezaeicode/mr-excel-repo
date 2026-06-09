import {
  type Data,
  type ExcelTable,
  type Header,
  type Sheet,
  type ThemeOption,
} from "../data-model/excel-table";
import { generateContrastTextColor, hexToRgbNegative } from "../utils/color";
function titleCase(value: string): string {
  let result = "";
  if (value.indexOf("_") > 0) {
    //pass when, value not include lowercase
    if (value.replace(/[a-z]/g, "").length == value.length) {
      result = value
        .split(/_/)
        .reduce((re, cu) => {
          return re + cu.charAt(0) + cu.substring(1).toLowerCase() + " ";
        }, "")
        .trim();
    } else {
      result = value.replace(/_/g, " ").trim();
    }
  } else {
    result = value.replace(/([A-Z])/g, " $1").trim();
    result = result.charAt(0).toUpperCase() + result.substring(1).trim();
  }
  return result;
}
function createHeaderBaseOnObject(obj: Object, filterKeys: string[]): Header[] {
  let keys = Object.keys(obj).filter((v) => !filterKeys.includes(v));
  let init: Header[] = [];
  let headers: Header[] = keys.reduce((res, cu) => {
    res.push({
      label: cu,
      text: titleCase(cu),
    });
    return res;
  }, init);
  return headers;
}
const defaultColor = {
  fileName: "MR-Excel",
  headerBackgroundColor: "#393E46",
  headerColor: "#EEEEEE",
  negativeColor: false,
  rowBackgroundColor: "#EEEEEE",
  rowColor: "#393E46",
  filterKeys: [],
};
export function themeGenerator<T extends object = object>(
  inputData: ExcelTable<T> | Data<T>[] | Data<object>[][],
  option: ThemeOption | null = {
    ...(defaultColor as ThemeOption),
  },
): ExcelTable<T> {
  if (typeof inputData !== "object") {
    throw "typeof Object should be ExcelTable";
  }
  let data: ExcelTable<T>;

  if (typeof inputData === "object" && Array.isArray(inputData)) {
    if (inputData.length > 0) {
      /* handle 2 dimension array Data[][] */
      if (Array.isArray(inputData[0])) {
        let sheet: Sheet<T>[] = [];
        for (let index = 0; index < inputData.length; index++) {
          const element = inputData[index] as Data<T>[];
          if (element.length > 0) {
            //checked in condition
            const headers = createHeaderBaseOnObject(
              element[0]!,
              Array.isArray(option?.filterKeys) ? option.filterKeys : [],
            );
            sheet.push({
              headers,
              data: element,
            });
          }
        }
        data = {
          sheet,
        };
      } else {
        const headers = createHeaderBaseOnObject(
          inputData[0] ?? [],
          Array.isArray(option?.filterKeys) ? option?.filterKeys : [],
        );
        data = {
          sheet: [
            {
              headers,
              data: inputData as Data<T>[],
            },
          ],
        };
      }
    } else {
      data = {
        sheet: [],
      };
    }
  } else {
    data = inputData;
  }
  const headerColor: string =
    option && !!option.headerBackgroundColor
      ? option.headerBackgroundColor
      : defaultColor.headerBackgroundColor;

  const rowColor: string =
    option && !!option.rowBackgroundColor
      ? option.rowBackgroundColor
      : defaultColor.rowBackgroundColor;

  const headerColorText =
    option && option.negativeColor
      ? hexToRgbNegative(headerColor)
      : option && !!option.headerColor
        ? option.headerColor
        : generateContrastTextColor(headerColor);

  const rowColorText =
    option && option.negativeColor
      ? hexToRgbNegative(rowColor)
      : option && !!option.rowColor
        ? option.rowColor
        : generateContrastTextColor(rowColor);

  data.styles = data.styles ?? {};

  data.styles["themeStyleHeader"] = {
    backgroundColor: headerColor,
    color: headerColorText ?? hexToRgbNegative(headerColor),
  };
  data.styles["themeStyleBody"] = {
    backgroundColor: rowColor,
    color: rowColorText ?? hexToRgbNegative(rowColor),
  };
  data.sheet.forEach((sheet) => {
    sheet.styleCellCondition = function (
      _data: Header | string | number | undefined,
      _object: Header | Data<T>,
      _rowIndex: number,
      _colIndex: number,
      fromHeader: boolean,
      _styleKeys: string[],
    ) {
      if (fromHeader) {
        return "themeStyleHeader";
      } else {
        return "themeStyleBody";
      }
    };
  });

  if (typeof option?.fileName == "string") {
    data.fileName = option.fileName;
  }
  return data;
}

export const exportedForTesting = {
  titleCase,
  createHeaderBaseOnObject,
};
