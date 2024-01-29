import {
  type Data,
  type ExcelTable,
  type Header,
  type Sheet,
  type ThemeOption,
} from "../data-model/excel-table";
import { generateContrastTextColor, hexToRgbNegative } from "../utils/color";
interface HuntColor {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  url: string;
}
function titleCase(value: string): string {
  let result = "";
  if (value.indexOf("_") > 0) {
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
export const themeGenerator = async function (
  inputData: ExcelTable | Data[] | Data[][],
  index: number,
  option?: ThemeOption,
  filterKeys = []
): Promise<ExcelTable> {
  const colorHunt: any = (await import("./colorHunt")).colorHuntTheme;
  let data: ExcelTable;
  if (typeof inputData == "object" && Array.isArray(inputData)) {
    if (inputData.length > 0) {
      if (Array.isArray(inputData[0])) {
        let sheet: Sheet[] = [];
        for (let index = 0; index < inputData.length; index++) {
          const element = inputData[index] as Data[];
          if (element.length > 0) {
            const headers = createHeaderBaseOnObject(element[0], filterKeys);
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
        if (inputData.length > 0) {
          const headers = createHeaderBaseOnObject(inputData[0], filterKeys);
          data = {
            sheet: [
              {
                headers,
                data: inputData,
              },
            ],
          };
        } else {
          data = {
            sheet: [],
          };
        }
      }
    } else {
      data = {
        sheet: [],
      };
    }
  } else {
    data = inputData;
  }
  if (index < colorHunt.length) {
    let rowColorKey = ("color" +
      (option && option.rowIndex
        ? option.rowIndex
        : 4
      ).toString()) as keyof HuntColor;
    let headerColorKey = ("color" +
      (option && option.headerIndex
        ? option.headerIndex
        : 1
      ).toString()) as keyof HuntColor;
    let huntColor: HuntColor = colorHunt[index];

    let headerColor =
      option && option.headerBackgroundColor
        ? option.headerBackgroundColor
        : huntColor[headerColorKey];
    let rowColor =
      option && option.rowBackgroundColor
        ? option.rowBackgroundColor
        : huntColor[rowColorKey];
    let headerColorText;
    if (option && option.headerColor) {
      headerColorText = option?.headerColor;
    } else {
      headerColorText =
        option && option.negativeColor
          ? hexToRgbNegative(headerColor)
          : generateContrastTextColor(headerColor);
    }
    let rowColorText;
    if (option && option.rowColor) {
      rowColorText = option?.rowColor;
    } else {
      rowColorText =
        option && option.negativeColor
          ? hexToRgbNegative(rowColor)
          : generateContrastTextColor(rowColor);
    }

    if (typeof data.styles == "undefined") {
      data.styles = {};
    }
    data.styles["themeStyleHeader"] = {
      backgroundColor: headerColor,
      color: headerColorText,
    };
    data.styles["themeStyleBody"] = {
      backgroundColor: rowColor,
      color: rowColorText,
    };
    const shLength = data.sheet.length;
    for (let index = 0; index < shLength; index++) {
      data.sheet[index].styleCellCondition = function (
        data,
        object,
        rowIndex,
        colIndex,
        fromHeader,
        styleKeys
      ) {
        if (fromHeader) {
          return "themeStyleHeader";
        } else {
          return "themeStyleBody";
        }
      };
    }
  }
  if (typeof option?.fileName == "string") {
    data.fileName = option.fileName;
  }
  return data;
};
