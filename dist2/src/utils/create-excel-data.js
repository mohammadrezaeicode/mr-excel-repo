"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExcelTabelBaseOnDomElement = void 0;
const color_1 = require("./color");
function generatRowsBaseOnColAndRowSpan(col, row, start, length, rowV, text, mergeString, data) {
    let rows = [];
    let hasCol = true;
    let hasRow = true;
    let type = "both";
    let mergeValue = [];
    if (!row || row === 0) {
        row = 1;
        type = "col";
    }
    else {
        mergeValue.push(row - 1);
    }
    if (!col || col === 0) {
        col = 0;
        type = "row";
    }
    else {
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
                }
                else {
                    if (row >= 2 && start == colI) {
                        rowEl["c" + colI] = text;
                        text = "";
                        mergeString += "+";
                    }
                    else {
                        mergeString += "-";
                    }
                }
            }
            else {
                if (index > 0) {
                    mergeString += "-";
                }
            }
        }
        rows.push(Object.assign(Object.assign({}, rowEl), { mergeString }));
        rowEl = {};
        mergeString = "";
    }
    return rows;
}
function createExcelTabelBaseOnDomElement(queryForTable, table, keepStyle, rowHeightScaleFunction, colWidthScaleFunction) {
    var _a;
    if (!queryForTable && !table) {
        throw "Error: One of the function inputs is required.";
    }
    let nodes;
    if (queryForTable) {
        nodes = (_a = document.querySelector(queryForTable)) === null || _a === void 0 ? void 0 : _a.querySelectorAll("tr");
    }
    else {
        nodes = table === null || table === void 0 ? void 0 : table.querySelectorAll("tr");
    }
    let head = [];
    let datas = [];
    let styleMap = {
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
        let cellStyleMap = {};
        let headerLength = 0;
        nodes.forEach((tr, rowIndex) => {
            var a = [].slice.call(tr.children);
            const trEl = window.getComputedStyle(tr, null);
            let bgTr = (0, color_1.rgbToHex)(trEl.backgroundColor);
            if (!headerSet) {
                headerLength = a.length;
                headerSet = true;
                if (typeof rowHeightScaleFunction == "function") {
                    headerHeight = rowHeightScaleFunction(Number(trEl.height.substring(0, trEl.height.length - 2)), rowIndex, true);
                }
                else {
                    headerHeight = Number(trEl.height.substring(0, trEl.height.length - 2));
                }
                a.forEach((n, index) => {
                    let styles = window.getComputedStyle(n, null);
                    let border = null;
                    if (styles.borderBottomWidth !== "0px") {
                        if (!border) {
                            border = {};
                        }
                        border["bottom"] = {
                            style: "thin",
                            color: (0, color_1.rgbToHex)(styles.borderBottomColor),
                        };
                    }
                    if (styles.borderTopWidth !== "0px") {
                        if (!border) {
                            border = {};
                        }
                        border["top"] = {
                            style: "thin",
                            color: (0, color_1.rgbToHex)(styles.borderTopColor),
                        };
                    }
                    if (styles.borderLeftWidth !== "0px") {
                        if (!border) {
                            border = {};
                        }
                        border["left"] = {
                            style: "thin",
                            color: (0, color_1.rgbToHex)(styles.borderLeftColor),
                        };
                    }
                    if (styles.borderRightWidth !== "0px") {
                        if (!border) {
                            border = {};
                        }
                        border["right"] = {
                            style: "thin",
                            color: (0, color_1.rgbToHex)(styles.borderRightColor),
                        };
                    }
                    let fg = (0, color_1.rgbToHex)(styles.backgroundColor);
                    if (!fg && bgTr) {
                        fg = bgTr;
                    }
                    let style = Object.assign(Object.assign(Object.assign(Object.assign({}, (fg ? { fg } : {})), { bold: parseInt(styles.fontWeight) > 500, size: parseInt(styles.fontSize.substring(0, styles.fontSize.indexOf("p"))) }), (border ? { border } : {})), { alignment: Object.assign({ horizontal: styles.textAlign, vertical: "center" }, (styles.direction == "rtl" ? { rtl: true } : { ltr: true })) });
                    styleMap.header[rowIndex + "-" + index] = style;
                    cellStyleMap[rowIndex + "-" + index] = rowIndex + "-" + index;
                    let headWidth;
                    if (typeof colWidthScaleFunction == "function") {
                        headWidth = colWidthScaleFunction(Number(styles.width.substring(0, styles.width.length - 2)), index);
                    }
                    else {
                        headWidth =
                            Number(styles.width.substring(0, styles.width.length - 2)) * 0.15;
                    }
                    head.push({
                        label: "c" + index,
                        colspan: n.getAttribute("colspan"),
                        rowspan: n.getAttribute("rowspan"),
                        text: n.textContent,
                        size: headWidth,
                    });
                });
            }
            else {
                let data = {};
                let mergeString = "";
                let inMergeMode = false;
                if (datas.length >= rowIndex) {
                    data = datas[rowIndex - 1];
                    mergeString =
                        "mergeString" in data ? data.mergeString : "";
                    inMergeMode = true;
                }
                let counter = 0;
                a.forEach((n, index) => {
                    if ("c" + (index + counter) in data) {
                        for (let gh = 0; gh <= headerLength + 1; gh++) {
                            let key = "c" + (index + gh);
                            if (!(key in data)) {
                                break;
                            }
                            else {
                                counter++;
                            }
                        }
                    }
                    index += counter;
                    let styles = window.getComputedStyle(n, null);
                    if (n.getAttribute("colspan") ||
                        n.getAttribute("rowspan")) {
                        let mergeData = generatRowsBaseOnColAndRowSpan(n.getAttribute("colspan") * 1, n.getAttribute("rowspan") * 1, index, headerLength, data, n.textContent, mergeString, data);
                        if (datas.length < rowIndex) {
                            datas.push(...mergeData);
                        }
                        else {
                            mergeData.forEach((v, index) => {
                                if (datas.length < rowIndex + index) {
                                    datas.push(...mergeData);
                                }
                                else {
                                    datas[rowIndex + index] = Object.assign(Object.assign({}, datas[rowIndex + index]), v);
                                }
                            });
                        }
                        data = mergeData[0];
                        mergeString = mergeData[0].mergeString;
                        inMergeMode = true;
                    }
                    else {
                        if (!inMergeMode) {
                            mergeString += "-";
                        }
                    }
                    let border = null;
                    if (styles.borderBottomWidth !== "0px") {
                        if (!border) {
                            border = {};
                        }
                        border["bottom"] = {
                            style: "thin",
                            color: (0, color_1.rgbToHex)(styles.borderBottomColor),
                        };
                    }
                    if (styles.borderTopWidth !== "0px") {
                        if (!border) {
                            border = {};
                        }
                        border["top"] = {
                            style: "thin",
                            color: (0, color_1.rgbToHex)(styles.borderTopColor),
                        };
                    }
                    if (styles.borderLeftWidth !== "0px") {
                        if (!border) {
                            border = {};
                        }
                        border["left"] = {
                            style: "thin",
                            color: (0, color_1.rgbToHex)(styles.borderLeftColor),
                        };
                    }
                    if (styles.borderRightWidth !== "0px") {
                        if (!border) {
                            border = {};
                        }
                        border["right"] = {
                            style: "thin",
                            color: (0, color_1.rgbToHex)(styles.borderRightColor),
                        };
                    }
                    let fg = (0, color_1.rgbToHex)(styles.backgroundColor);
                    if (!fg && bgTr) {
                        fg = bgTr;
                    }
                    let style = Object.assign(Object.assign(Object.assign(Object.assign({}, (fg ? { fg } : {})), { bold: parseInt(styles.fontWeight) > 500, size: parseInt(styles.fontSize.substring(0, styles.fontSize.indexOf("p"))) }), (border ? { border } : {})), { 
                        // fg: rgbToHex(styles.backgroundColor),
                        // colspan: n.getAttribute("colspan"),
                        // rowspan: n.getAttribute("rowspan"),
                        alignment: Object.assign({ horizontal: styles.textAlign, vertical: "center", direction: styles.direction }, (styles.direction == "rtl" ? { rtl: true } : { ltr: true })) });
                    // data.rowStyle = "s" + st
                    styleMap.header[rowIndex + "-" + index] = style;
                    data["c" + index] = n.textContent;
                    cellStyleMap[rowIndex + "-" + index] = rowIndex + "-" + index;
                    // head.push({
                    //     label: 'c' + index,
                    //     text: n.textContent,
                    //     styleId: "s" + st
                    // })
                });
                if (typeof rowHeightScaleFunction == "function") {
                    data.height = rowHeightScaleFunction(Number(trEl.height.substring(0, trEl.height.length - 2)), rowIndex, false);
                }
                else {
                    data.height = trEl.height.substring(0, trEl.height.length - 2);
                }
                if (datas.length < rowIndex) {
                    datas.push(data);
                }
                else {
                    datas[rowIndex - 1] = data;
                }
            }
        });
    }
    else {
        throw "Error: DOM Element Not Found";
    }
    let data = {
        styles: styleMap.header,
        sheet: [
            {
                headerHeight,
                styleCellCondition: function (data, object, colIndex, rowIndex, fromHeader, stylekeys) {
                    if (keepStyle) {
                        if (fromHeader) {
                            return stylekeys.includes(rowIndex - 1 + "-" + colIndex)
                                ? rowIndex - 1 + "-" + colIndex
                                : "";
                        }
                        else {
                            return stylekeys.includes(rowIndex - 1 + "-" + colIndex)
                                ? rowIndex - 1 + "-" + colIndex
                                : "";
                        }
                    }
                    else {
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
exports.createExcelTabelBaseOnDomElement = createExcelTabelBaseOnDomElement;
//# sourceMappingURL=create-excel-data.js.map