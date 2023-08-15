import {
  BorderOption,
  Data,
  ExcelTable,
  Header,
} from "../data-model/excel-table";
function valueToHex(c: number | string): string {
  c = Number(c);
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(rgb: string): string | null {
  let spResult =
    rgb.indexOf("rgba") >= 0
      ? rgb.substring(5, rgb.length - 1).split(", ")
      : rgb.substring(4, rgb.length - 1).split(", ");
  if (spResult.length == 4 && spResult[3] == "0") {
    return null;
  }
  return (
    valueToHex(spResult[0]) +
    valueToHex(spResult[1]) +
    valueToHex(spResult[2])
  ).toUpperCase();
}
function generatRowsBaseOnColAndRowSpan(
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
  let hasCol = true;
  let hasRow = true;
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
export function createExcelTabelBaseOnDomElement(
  queryForTable?: string,
  table?: HTMLTableElement,
  keepStyle?: boolean,
  rowHeightScaleFunction?: RowHeightScaleFunction,
  colWidthScaleFunction?: ColWidthScaleFunction
): ExcelTable {
    console.log(arguments);
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
  let datas: any = [];
  let styleMap: any = {
    header: {},
    rows: [],
  };
  let headerHeight = 40;
  if (nodes) {
    // let header = []
    // let data = []
    let headerSet = false;
    let mergeMap = {};
    // let headerLength = 0
    // let head = []
    // let datas = []
    let cellStyleMap: any = {};
    let headerLength = 0;
    nodes.forEach((tr, rowIndex) => {
      var a = [].slice.call(tr.children);
      const trEl = window.getComputedStyle(tr, null);
      let bgTr = rgbToHex(trEl.backgroundColor);
      if (!headerSet) {
        headerLength = a.length;
        headerSet = true;
        console.log(rowHeightScaleFunction, typeof rowHeightScaleFunction);
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
            if (!border) {
              border = {};
            }
            border["bottom"] = {
              style: "thin",
              color: rgbToHex(styles.borderBottomColor)!,
            };
          }
          if (styles.borderTopWidth !== "0px") {
            if (!border) {
              border = {};
            }
            border["top"] = {
              style: "thin",
              color: rgbToHex(styles.borderTopColor)!,
            };
          }
          if (styles.borderLeftWidth !== "0px") {
            if (!border) {
              border = {};
            }
            border["left"] = {
              style: "thin",
              color: rgbToHex(styles.borderLeftColor)!,
            };
          }
          if (styles.borderRightWidth !== "0px") {
            if (!border) {
              border = {};
            }
            border["right"] = {
              style: "thin",
              color: rgbToHex(styles.borderRightColor)!,
            };
          }
          let fg = rgbToHex(styles.backgroundColor);
          if (!fg) {
            fg = bgTr;
          }
          let style = {
            ...(fg ? { fg } : {}),
            bold: parseInt(styles.fontWeight) > 500,
            size: parseInt(
              styles.fontSize.substring(0, styles.fontSize.indexOf("p"))
            ),
            ...(border ? { border } : {}),
            alignment: {
              horizontal: styles.textAlign,
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
          head.push({
            label: "c" + index,
            colspan: (n as any).getAttribute("colspan"),
            rowspan: (n as any).getAttribute("rowspan"),
            text: (n as any).textContent,
            size: headWidth,
          });
        });
      } else {
        let data: any = {};
        let mergeString = "";
        let inMergeMode = false;
        if (datas.length >= rowIndex) {
          data = datas[rowIndex - 1];
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
            let mergeData = generatRowsBaseOnColAndRowSpan(
              (n as any).getAttribute("colspan") * 1,
              (n as any).getAttribute("rowspan") * 1,
              index,
              headerLength,
              data,
              (n as any).textContent,
              mergeString,
              data
            );
            if (datas.length < rowIndex) {
              datas.push(...mergeData);
            } else {
              mergeData.forEach((v, index) => {
                if (datas.length < rowIndex + index) {
                  datas.push(...mergeData);
                } else {
                  datas[rowIndex + index] = {
                    ...datas[rowIndex + index],
                    ...v,
                  };
                }
              });
            }
            data = mergeData[0];
            mergeString = mergeData[0].mergeString;
            inMergeMode = true;
            // console.log("*-/", [...datas], mergeData);
          } else {
            if (!inMergeMode) {
              mergeString += "-";
            }
          }
          let border: BorderOption | null = null;
          if (styles.borderBottomWidth !== "0px") {
            if (!border) {
              border = {};
            }
            border["bottom"] = {
              style: "thin",
              color: rgbToHex(styles.borderBottomColor)!,
            };
          }
          if (styles.borderTopWidth !== "0px") {
            if (!border) {
              border = {};
            }
            border["top"] = {
              style: "thin",
              color: rgbToHex(styles.borderTopColor)!,
            };
          }
          if (styles.borderLeftWidth !== "0px") {
            if (!border) {
              border = {};
            }
            border["left"] = {
              style: "thin",
              color: rgbToHex(styles.borderLeftColor)!,
            };
          }
          if (styles.borderRightWidth !== "0px") {
            if (!border) {
              border = {};
            }
            border["right"] = {
              style: "thin",
              color: rgbToHex(styles.borderRightColor)!,
            };
          }
          let fg = rgbToHex(styles.backgroundColor);
          if (!fg) {
            fg = bgTr;
          }
          let style = {
            ...(fg ? { fg } : {}),
            bold: parseInt(styles.fontWeight) > 500,
            size: parseInt(
              styles.fontSize.substring(0, styles.fontSize.indexOf("p"))
            ),
            ...(border ? { border } : {}),
            // fg: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: styles.textAlign,
              vertical: "center",
              direction: styles.direction,
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
        console.log(rowHeightScaleFunction, typeof rowHeightScaleFunction);
        if (typeof rowHeightScaleFunction == "function") {
          data.height = rowHeightScaleFunction(
            Number(trEl.height.substring(0, trEl.height.length - 2)),
            rowIndex,
            false
          );
        } else {
          data.height = trEl.height.substring(0, trEl.height.length - 2);
        }
        if (datas.length < rowIndex) {
          // console.log("pushed");
          datas.push(data);
        } else {
          // console.log("change data");
          datas[rowIndex - 1] = data;
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
        headerHeight,
        styleCellCondition: function (
          data: Header | string | number | undefined,
          object: Header | Data,
          colIndex: number,
          rowIndex: number,
          fromHeader: boolean,
          stylekeys: string[]
        ) {
          if (keepStyle) {
            if (fromHeader) {
              return stylekeys.includes(rowIndex - 1 + "-" + colIndex)
                ? rowIndex - 1 + "-" + colIndex
                : "";
            } else {
              return stylekeys.includes(rowIndex - 1 + "-" + colIndex)
                ? rowIndex - 1 + "-" + colIndex
                : "";
            }
          } else {
            return null;
          }
        },
        data: datas,
        headers: head,
      },
    ],
  };
  return data;
}
