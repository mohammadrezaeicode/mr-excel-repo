import {
  Data,
  ExcelTable,
  Header,
  Sheet,
} from "../data-model/excel-table";
import { generateContrastTextColor, hexToRgbNegative } from "../utils/color";
import colorHunt from "./colorHunt.json";
interface HuntColor {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  url: string;
}
export interface ThemeOption {
  hIndex?: number;
  rIndex?: number;
  nColor?: boolean;
  hColor?: string;
  rColor?: string;
  fieName?: string;
}
function titleCase(value: string): string {
  // let value = "asdFd";
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
export const themeGenerator = function (
  inputData: ExcelTable | Data[] | Data[][],
  index: number,
  option?: ThemeOption,
  filterKeys = []
): ExcelTable {
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
    let rColorKey = ("color" +
      (option && option.rIndex
        ? option.rIndex
        : 4
      ).toString()) as keyof HuntColor;
    let hColorKey = ("color" +
      (option && option.hIndex
        ? option.hIndex
        : 1
      ).toString()) as keyof HuntColor;
    let huntColor: HuntColor = colorHunt[index];

    let hColor = huntColor[hColorKey];
    let rColor = huntColor[rColorKey];
    let hColorText;
    if (option?.hColor) {
      hColorText = option?.hColor;
    } else {
      hColorText =
        option && option.nColor
          ? hexToRgbNegative(hColor)
          : generateContrastTextColor(hColor);
    }
    let rColorText;
    if (option?.rColor) {
      rColorText = option?.rColor;
    } else {
      rColorText =
        option && option.nColor
          ? hexToRgbNegative(rColor)
          : generateContrastTextColor(rColor);
    }

    if (typeof data.styles == "undefined") {
      data.styles = {};
    }
    data.styles["themeStyleHeader"] = {
      backgroundColor: hColor,
      color: hColorText,
    };
    data.styles["themeStyleBody"] = {
      backgroundColor: rColor,
      color: rColorText,
    };
    const shLength = data.sheet.length;
    for (let index = 0; index < shLength; index++) {
      data.sheet[index].styleCellCondition = function (
        data,
        object,
        colIndex,
        rowIndex,
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
  if (typeof option?.fieName == "string") {
    data.fileName = option.fieName;
  }
  return data;
};
