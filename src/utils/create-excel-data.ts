import {
  type BorderOption,
  type Data,
  type ExcelTable,
  type Header,
} from "../data-model/excel-table";
import { rgbToHex } from "./color";

function generateRowsBaseOnColAndRowSpan(
  col: number,
  row: number,
  start: number,
  length: number,
  rowV: any,
  text: string | number,
  mergeString: string,
  data: any
) {
  let rows = [];
  let type = "both";
  let mergeValue = [];
  if (!row || row === 0) {
    row = 1;
    type = "col";
  } else {
    mergeValue.push(row - 1);
  }
  if (!col || col === 0) {
    col = 0;
    type = "row";
  } else {
    mergeValue.push(col - 1);
  }
  let rowEl = rowV ? rowV : {};
  rowEl.mergeType = data && data.mergeType ? [...data.mergeType, type] : [type];
  rowEl.mergeValue =
    data && data.mergeValue ? [...data.mergeValue, mergeValue] : [mergeValue];
  rowEl.mergeStart =
    data && data.mergeStart ? [...data.mergeStart, start] : [start];
  for (let index = 0; index < row; index++) {
    let countCol = col;
    for (let colI = 0; colI < length; colI++) {
      if (start <= colI) {
        if (countCol >= 1) {
          rowEl["c" + colI] = text;
          text = "";
          mergeString += "*";
          countCol--;
        } else {
          if (row >= 2 && start == colI) {
            rowEl["c" + colI] = text;
            text = "";
            mergeString += "+";
          } else {
            mergeString += "-";
          }
        }
      } else {
        if (index > 0) {
          mergeString += "-";
        }
      }
    }
    rows.push({
      ...rowEl,
      mergeString,
    });
    rowEl = {};
    mergeString = "";
  }
  return rows;
}
export type RowHeightScaleFunction = (
  data: number,
  rowIndex: number,
  fromHeader: boolean
) => number;
export type ColWidthScaleFunction = (data: number, colIndex: number) => number;
export function createExcelTableBaseOnDomElement(
  queryForTable?: string|null,
  table?: HTMLTableElement|null,
  keepStyle?: boolean,
  rowHeightScaleFunction?: RowHeightScaleFunction,
  colWidthScaleFunction?: ColWidthScaleFunction
): ExcelTable {
  if (!queryForTable && !table) {
    throw "Error: One of the function inputs is required.";
  }
  let nodes;
  if (queryForTable) {
    nodes = document.querySelector(queryForTable)?.querySelectorAll("tr");
  } else {
    nodes = table?.querySelectorAll("tr");
  }
  let head: any = [];
  let dataObjs: any = [];
  let styleMap: any = {
    header: {},
    rows: [],
  };
  let headerHeight = 40;
  if (nodes) {
    let headerSet = false;
    let cellStyleMap: any = {};
    let headerLength = 0;
    nodes.forEach((tr, rowIndex) => {
      var a = [].slice.call(tr.children);
      const trEl = window.getComputedStyle(tr, null);
      let bgTr = rgbToHex(trEl.backgroundColor);
      if (!headerSet) {
        headerLength = a.length;
        headerSet = true;

        if (typeof rowHeightScaleFunction == "function") {
          headerHeight = rowHeightScaleFunction(
            Number(trEl.height.substring(0, trEl.height.length - 2)),
            rowIndex,
            true
          );
        } else {
          headerHeight = Number(
            trEl.height.substring(0, trEl.height.length - 2)
          );
        }
        a.forEach((n, index) => {
          let styles = window.getComputedStyle(n, null);
          let border: BorderOption | null = null;
          if (styles.borderBottomWidth !== "0px") {
            const borderBottomColor = rgbToHex(styles.borderBottomColor);
            if (borderBottomColor) {
              if (!border) {
                border = {};
              }
              border["bottom"] = {
                style: "thin",
                color: borderBottomColor,
              };
            }
          }
          if (styles.borderTopWidth !== "0px") {
            const borderTopColor = rgbToHex(styles.borderTopColor);
            if (borderTopColor) {
              if (!border) {
                border = {};
              }
              border["top"] = {
                style: "thin",
                color: borderTopColor,
              };
            }
          }
          if (styles.borderLeftWidth !== "0px") {
            const borderLeftColor = rgbToHex(styles.borderLeftColor);
            if (borderLeftColor) {
              if (!border) {
                border = {};
              }
              border["left"] = {
                style: "thin",
                color: borderLeftColor,
              };
            }
          }
          if (styles.borderRightWidth !== "0px") {
            const borderRightColor = rgbToHex(styles.borderRightColor);
            if (borderRightColor) {
              if (!border) {
                border = {};
              }
              border["right"] = {
                style: "thin",
                color: borderRightColor,
              };
            }
          }
          let backgroundColor = rgbToHex(styles.backgroundColor);
          if (!backgroundColor && bgTr) {
            backgroundColor = bgTr;
          }
          const fontSizeStyle = parseInt(
            styles.fontSize.substring(0, styles.fontSize.indexOf("p"))
          );
          let style = {
            ...(backgroundColor ? { backgroundColor } : {}),
            bold: parseInt(styles.fontWeight) > 500,
            ...(isNaN(fontSizeStyle) ? {} : { size: fontSizeStyle }),
            ...(border ? { border } : {}),
            alignment: {
              ...(typeof styles.textAlign == "string" &&
              styles.textAlign.length > 0
                ? { horizontal: styles.textAlign }
                : {}),
              vertical: "center",
              ...(styles.direction == "rtl" ? { rtl: true } : { ltr: true }),
            },
          };
          styleMap.header[rowIndex + "-" + index] = style;
          cellStyleMap[rowIndex + "-" + index] = rowIndex + "-" + index;
          let headWidth;
          if (typeof colWidthScaleFunction == "function") {
            headWidth = colWidthScaleFunction(
              Number(styles.width.substring(0, styles.width.length - 2)),
              index
            );
          } else {
            headWidth =
              Number(styles.width.substring(0, styles.width.length - 2)) * 0.15;
          }
          const colSpanValue = (n as any).getAttribute("colspan");
          const rowSpanValue = (n as any).getAttribute("rowspan");
          head.push({
            label: "c" + index,
            ...(colSpanValue ? { colspan: colSpanValue } : {}),
            ...(rowSpanValue ? { rowspan: rowSpanValue } : {}),
            text: (n as any).textContent,
            ...(isNaN(headWidth) || headWidth <= 0 ? {} : { size: headWidth }),
          });
        });
      } else {
        let data: any = {};
        let mergeString = "";
        let inMergeMode = false;
        if (dataObjs.length >= rowIndex) {
          data = dataObjs[rowIndex - 1];
          mergeString =
            "mergeString" in data ? (data.mergeString as string) : "";
          inMergeMode = true;
        }
        let counter = 0;
        a.forEach((n, index) => {
          if ("c" + (index + counter) in data) {
            for (let gh = 0; gh <= headerLength + 1; gh++) {
              let key = "c" + (index + gh);
              if (!(key in data)) {
                break;
              } else {
                counter++;
              }
            }
          }
          index += counter;
          let styles = window.getComputedStyle(n, null);
          if (
            (n as any).getAttribute("colspan") ||
            (n as any).getAttribute("rowspan")
          ) {
            let mergeData = generateRowsBaseOnColAndRowSpan(
              (n as any).getAttribute("colspan") * 1,
              (n as any).getAttribute("rowspan") * 1,
              index,
              headerLength,
              data,
              (n as any).textContent,
              mergeString,
              data
            );
            if (dataObjs.length < rowIndex) {
              dataObjs.push(...mergeData);
            } else {
              mergeData.forEach((v, index) => {
                if (dataObjs.length < rowIndex + index) {
                  dataObjs.push(...mergeData);
                } else {
                  dataObjs[rowIndex + index] = {
                    ...dataObjs[rowIndex + index],
                    ...v,
                  };
                }
              });
            }
            data = mergeData[0];
            mergeString = mergeData[0].mergeString;
            inMergeMode = true;
          } else {
            if (!inMergeMode) {
              mergeString += "-";
            }
          }
          let border: BorderOption | null = null;
          if (styles.borderBottomWidth !== "0px") {
            const borderBottomColor = rgbToHex(styles.borderBottomColor);
            if (borderBottomColor) {
              if (!border) {
                border = {};
              }
              border["bottom"] = {
                style: "thin",
                color: borderBottomColor,
              };
            }
          }
          if (styles.borderTopWidth !== "0px") {
            const borderTopColor = rgbToHex(styles.borderTopColor);
            if (borderTopColor) {
              if (!border) {
                border = {};
              }
              border["top"] = {
                style: "thin",
                color: borderTopColor,
              };
            }
          }
          if (styles.borderLeftWidth !== "0px") {
            const borderLeftColor = rgbToHex(styles.borderLeftColor);
            if (borderLeftColor) {
              if (!border) {
                border = {};
              }
              border["left"] = {
                style: "thin",
                color: borderLeftColor,
              };
            }
          }
          if (styles.borderRightWidth !== "0px") {
            const borderRightColor = rgbToHex(styles.borderRightColor);
            if (borderRightColor) {
              if (!border) {
                border = {};
              }
              border["right"] = {
                style: "thin",
                color: borderRightColor,
              };
            }
          }
          let backgroundColor = rgbToHex(styles.backgroundColor);
          if (!backgroundColor && bgTr) {
            backgroundColor = bgTr;
          }
          const fontSizeStyle = parseInt(
            styles.fontSize.substring(0, styles.fontSize.indexOf("p"))
          );
          let style = {
            ...(backgroundColor ? { backgroundColor } : {}),
            bold: parseInt(styles.fontWeight) > 500,
            ...(isNaN(fontSizeStyle) ? {} : { size: fontSizeStyle }),
            ...(border ? { border } : {}),
            // backgroundColor: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              ...(typeof styles.textAlign == "string" &&
              styles.textAlign.length > 0
                ? { horizontal: styles.textAlign }
                : {}),
              vertical: "center",
              ...(styles.direction == "rtl" ? { rtl: true } : { ltr: true }),
            },
          };
          // data.rowStyle = "s" + st
          styleMap.header[rowIndex + "-" + index] = style;
          data["c" + index] = (n as any).textContent;
          cellStyleMap[rowIndex + "-" + index] = rowIndex + "-" + index;
          // head.push({
          //     label: 'c' + index,
          //     text: n.textContent,
          //     styleId: "s" + st
          // })
        });
        if (typeof rowHeightScaleFunction == "function") {
          data.height = rowHeightScaleFunction(
            Number(trEl.height.substring(0, trEl.height.length - 2)),
            rowIndex,
            false
          );
        } else {
          data.height = trEl.height.substring(0, trEl.height.length - 2);
        }
        if (typeof data.height == "string" && data.height.length == 0) {
          delete data.height;
        }
        if (dataObjs.length < rowIndex) {
          dataObjs.push(data);
        } else {
          dataObjs[rowIndex - 1] = data;
        }
      }
    });
  } else {
    throw "Error: DOM Element Not Found";
  }
  let data: ExcelTable = {
    styles: styleMap.header,
    sheet: [
      {
        ...(headerHeight ? { headerHeight } : {}),
        styleCellCondition: function (
          data: Header | string | number | undefined,
          object: Header | Data,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean,
          styleKeys: string[]
        ) {
          if (keepStyle) {
            if (fromHeader) {
              return styleKeys.includes(rowIndex - 1 + "-" + colIndex)
                ? rowIndex - 1 + "-" + colIndex
                : "";
            } else {
              return styleKeys.includes(rowIndex - 1 + "-" + colIndex)
                ? rowIndex - 1 + "-" + colIndex
                : "";
            }
          } else {
            return null;
          }
        },
        data: dataObjs,
        headers: head,
      },
    ],
  };
  return data;
}
