"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExcelTableBaseOnDomElement = void 0;
const color_1 = require("./color");
function generateRowsBaseOnColAndRowSpan(col, row, start, length, rowV, text, mergeString, data) {
    let rows = [];
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
function createExcelTableBaseOnDomElement(queryForTable, table, keepStyle, rowHeightScaleFunction, colWidthScaleFunction) {
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
    let dataObjs = [];
    let styleMap = {
        header: {},
        rows: [],
    };
    let headerHeight = 40;
    if (nodes) {
        let headerSet = false;
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
                        const borderBottomColor = (0, color_1.rgbToHex)(styles.borderBottomColor);
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
                        const borderTopColor = (0, color_1.rgbToHex)(styles.borderTopColor);
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
                        const borderLeftColor = (0, color_1.rgbToHex)(styles.borderLeftColor);
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
                        const borderRightColor = (0, color_1.rgbToHex)(styles.borderRightColor);
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
                    let backgroundColor = (0, color_1.rgbToHex)(styles.backgroundColor);
                    if (!backgroundColor && bgTr) {
                        backgroundColor = bgTr;
                    }
                    const fontSizeStyle = parseInt(styles.fontSize.substring(0, styles.fontSize.indexOf("p")));
                    let style = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (backgroundColor ? { backgroundColor } : {})), { bold: parseInt(styles.fontWeight) > 500 }), (isNaN(fontSizeStyle) ? {} : { size: fontSizeStyle })), (border ? { border } : {})), { alignment: Object.assign(Object.assign(Object.assign({}, (typeof styles.textAlign == "string" &&
                            styles.textAlign.length > 0
                            ? { horizontal: styles.textAlign }
                            : {})), { vertical: "center" }), (styles.direction == "rtl" ? { rtl: true } : { ltr: true })) });
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
                    const colSpanValue = n.getAttribute("colspan");
                    const rowSpanValue = n.getAttribute("rowspan");
                    head.push(Object.assign(Object.assign(Object.assign(Object.assign({ label: "c" + index }, (colSpanValue ? { colspan: colSpanValue } : {})), (rowSpanValue ? { rowspan: rowSpanValue } : {})), { text: n.textContent }), (isNaN(headWidth) || headWidth <= 0 ? {} : { size: headWidth })));
                });
            }
            else {
                let data = {};
                let mergeString = "";
                let inMergeMode = false;
                if (dataObjs.length >= rowIndex) {
                    data = dataObjs[rowIndex - 1];
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
                        let mergeData = generateRowsBaseOnColAndRowSpan(n.getAttribute("colspan") * 1, n.getAttribute("rowspan") * 1, index, headerLength, data, n.textContent, mergeString, data);
                        if (dataObjs.length < rowIndex) {
                            dataObjs.push(...mergeData);
                        }
                        else {
                            mergeData.forEach((v, index) => {
                                if (dataObjs.length < rowIndex + index) {
                                    dataObjs.push(...mergeData);
                                }
                                else {
                                    dataObjs[rowIndex + index] = Object.assign(Object.assign({}, dataObjs[rowIndex + index]), v);
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
                        const borderBottomColor = (0, color_1.rgbToHex)(styles.borderBottomColor);
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
                        const borderTopColor = (0, color_1.rgbToHex)(styles.borderTopColor);
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
                        const borderLeftColor = (0, color_1.rgbToHex)(styles.borderLeftColor);
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
                        const borderRightColor = (0, color_1.rgbToHex)(styles.borderRightColor);
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
                    let backgroundColor = (0, color_1.rgbToHex)(styles.backgroundColor);
                    if (!backgroundColor && bgTr) {
                        backgroundColor = bgTr;
                    }
                    const fontSizeStyle = parseInt(styles.fontSize.substring(0, styles.fontSize.indexOf("p")));
                    let style = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (backgroundColor ? { backgroundColor } : {})), { bold: parseInt(styles.fontWeight) > 500 }), (isNaN(fontSizeStyle) ? {} : { size: fontSizeStyle })), (border ? { border } : {})), { 
                        // backgroundColor: rgbToHex(styles.backgroundColor),
                        // colspan: n.getAttribute("colspan"),
                        // rowspan: n.getAttribute("rowspan"),
                        alignment: Object.assign(Object.assign(Object.assign({}, (typeof styles.textAlign == "string" &&
                            styles.textAlign.length > 0
                            ? { horizontal: styles.textAlign }
                            : {})), { vertical: "center" }), (styles.direction == "rtl" ? { rtl: true } : { ltr: true })) });
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
                if (typeof data.height == "string" && data.height.length == 0) {
                    delete data.height;
                }
                if (dataObjs.length < rowIndex) {
                    dataObjs.push(data);
                }
                else {
                    dataObjs[rowIndex - 1] = data;
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
            Object.assign(Object.assign({}, (headerHeight ? { headerHeight } : {})), { styleCellCondition: function (data, object, rowIndex, colIndex, fromHeader, styleKeys) {
                    if (keepStyle) {
                        if (fromHeader) {
                            return styleKeys.includes(rowIndex - 1 + "-" + colIndex)
                                ? rowIndex - 1 + "-" + colIndex
                                : "";
                        }
                        else {
                            return styleKeys.includes(rowIndex - 1 + "-" + colIndex)
                                ? rowIndex - 1 + "-" + colIndex
                                : "";
                        }
                    }
                    else {
                        return null;
                    }
                }, data: dataObjs, headers: head }),
        ],
    };
    return data;
}
exports.createExcelTableBaseOnDomElement = createExcelTableBaseOnDomElement;
//# sourceMappingURL=create-excel-data.js.map