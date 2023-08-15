"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTableToExcel = exports.generateExcel = void 0;
const generate_column_name_1 = require("./utils/generate-column-name");
const styles_1 = require("./utils/content-generator/styles");
const content_types_1 = require("./utils/content-generator/content-types");
const app_1 = require("./utils/content-generator/app");
const generate_formula_cell_1 = require("./utils/generate-formula-cell");
const create_excel_data_1 = require("./utils/create-excel-data");
function generateExcel(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let formatMap = {
            time: {
                key: 165,
                value: '<numFmt numFmtId="165" formatCode="[$-F400]h:mm:ss\\ AM/PM" />',
            },
            date: {
                key: 187,
                value: '<numFmt numFmtId="187" formatCode="[$-F800]dddd\\,\\ mmmm\\ dd\\,\\ yyyy" />',
            },
            short_date: {
                key: 14,
            },
            fraction: {
                key: 13,
            },
            percentage: {
                key: 9,
            },
            float_1: { key: 180, value: '<numFmt numFmtId="180" formatCode="0.0" />' },
            float_2: { key: 181, value: '<numFmt numFmtId="181" formatCode="0.00" />' },
            float_3: {
                key: 164,
                value: '<numFmt numFmtId="164" formatCode="0.000" />',
            },
            float_4: {
                key: 182,
                value: '<numFmt numFmtId="182" formatCode="0.0000" />',
            },
            dollar_2: {
                key: 183,
                value: '<numFmt numFmtId="183" formatCode="&quot;$&quot;#,##0.00" />',
            },
            num_sep: {
                key: 184,
                value: '<numFmt numFmtId="184" formatCode="#,##0" />',
            },
            num_sep_1: {
                key: 185,
                value: '<numFmt numFmtId="185" formatCode="#,##0.0" />',
            },
            num_sep_2: {
                key: 186,
                value: '<numFmt numFmtId="186" formatCode="#,##0.00" />',
            },
            dollar: {
                key: 163,
                value: '<numFmt numFmtId="163" formatCode="_([$$-409]* #,##0.00_);_([$$-409]* \\(#,##0.00\\);_([$$-409]* &quot;-&quot;??_);_(@_)" />',
            },
            $: {
                key: 163,
                value: '<numFmt numFmtId="163" formatCode="_([$$-409]* #,##0.00_);_([$$-409]* \\(#,##0.00\\);_([$$-409]* &quot;-&quot;??_);_(@_)" />',
            },
            pound: {
                key: 162,
                value: '<numFmt numFmtId="162" formatCode="_-[$£-809]* #,##0.00_-;\\-[$£-809]* #,##0.00_-;_-[$£-809]* &quot;-&quot;??_-;_-@_-" />',
            },
            "£": {
                key: 162,
                value: '<numFmt numFmtId="162" formatCode="_-[$£-809]* #,##0.00_-;\\-[$£-809]* #,##0.00_-;_-[$£-809]* &quot;-&quot;??_-;_-@_-" />',
            },
            euro: {
                key: 161,
                value: '<numFmt numFmtId="161" formatCode="_([$€-2]\\ * #,##0.00_);_([$€-2]\\ * \\(#,##0.00\\);_([$€-2]\\ * &quot;-&quot;??_);_(@_)" />',
            },
            "€": {
                key: 161,
                value: '<numFmt numFmtId="161" formatCode="_([$€-2]\\ * #,##0.00_);_([$€-2]\\ * \\(#,##0.00\\);_([$€-2]\\ * &quot;-&quot;??_);_(@_)" />',
            },
            yen: {
                key: 160,
                value: '<numFmt numFmtId="160" formatCode="_ [$¥-804]* #,##0.00_ ;_ [$¥-804]* \\-#,##0.00_ ;_ [$¥-804]* &quot;-&quot;??_ ;_ @_ " />',
            },
            "¥": {
                key: 160,
                value: '<numFmt numFmtId="160" formatCode="_ [$¥-804]* #,##0.00_ ;_ [$¥-804]* \\-#,##0.00_ ;_ [$¥-804]* &quot;-&quot;??_ ;_ @_ " />',
            },
            CHF: {
                key: 179,
                value: '<numFmt numFmtId="179" formatCode="_-* #,##0.00\\ [$CHF-100C]_-;\\-* #,##0.00\\ [$CHF-100C]_-;_-* &quot;-&quot;??\\ [$CHF-100C]_-;_-@_-" />',
            },
            ruble: {
                key: 178,
                value: '<numFmt numFmtId="178" formatCode="_-* #,##0.00\\ [$₽-419]_-;\\-* #,##0.00\\ [$₽-419]_-;_-* &quot;-&quot;??\\ [$₽-419]_-;_-@_-" />',
            },
            "₽": {
                key: 178,
                value: '<numFmt numFmtId="178" formatCode="_-* #,##0.00\\ [$₽-419]_-;\\-* #,##0.00\\ [$₽-419]_-;_-* &quot;-&quot;??\\ [$₽-419]_-;_-@_-" />',
            },
            "֏": {
                key: 177,
                value: '<numFmt numFmtId="177" formatCode="_-* #,##0.00\\ [$֏-42B]_-;\\-* #,##0.00\\ [$֏-42B]_-;_-* &quot;-&quot;??\\ [$֏-42B]_-;_-@_-" />',
            },
            manat: {
                key: 176,
                value: '<numFmt numFmtId="176" formatCode="_-* #,##0.00\\ [$₼-82C]_-;\\-* #,##0.00\\ [$₼-82C]_-;_-* &quot;-&quot;??\\ [$₼-82C]_-;_-@_-" />',
            },
            "₼": {
                key: 176,
                value: '<numFmt numFmtId="176" formatCode="_-* #,##0.00\\ [$₼-82C]_-;\\-* #,##0.00\\ [$₼-82C]_-;_-* &quot;-&quot;??\\ [$₼-82C]_-;_-@_-" />',
            },
            "₼1": {
                key: 175,
                value: '<numFmt numFmtId="175" formatCode="_-* #,##0.00\\ [$₼-42C]_-;\\-* #,##0.00\\ [$₼-42C]_-;_-* &quot;-&quot;??\\ [$₼-42C]_-;_-@_-" />',
            },
            "₽1": {
                key: 174,
                value: '<numFmt numFmtId="174" formatCode="_-* #,##0.00\\ [$₽-46D]_-;\\-* #,##0.00\\ [$₽-46D]_-;_-* &quot;-&quot;??\\ [$₽-46D]_-;_-@_-" />',
            },
            "₽2": {
                key: 173,
                value: '<numFmt numFmtId="173" formatCode="_-* #,##0.00\\ [$₽-485]_-;\\-* #,##0.00\\ [$₽-485]_-;_-* &quot;-&quot;??\\ [$₽-485]_-;_-@_-" />',
            },
            "₽3": {
                key: 172,
                value: '<numFmt numFmtId="172" formatCode="_-* #,##0.00\\ [$₽-444]_-;\\-* #,##0.00\\ [$₽-444]_-;_-* &quot;-&quot;??\\ [$₽-444]_-;_-@_-" />',
            },
            ريال: {
                key: 171,
                value: '<numFmt numFmtId="171" formatCode="_ * #,##0.00_-[$ريال-429]_ ;_ * #,##0.00\\-[$ريال-429]_ ;_ * &quot;-&quot;??_-[$ريال-429]_ ;_ @_ " />',
            },
        };
        let cols = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];
        if (data.numberOfColumn && data.numberOfColumn > 25) {
            cols = (0, generate_column_name_1.generateColumnName)(cols, data.numberOfColumn);
        }
        const module = yield Promise.resolve().then(() => __importStar(require("jszip")));
        const JSZip = module.default;
        var zip = new JSZip();
        const sheetLength = data.sheet.length;
        // xl
        var xlFolder = zip.folder("xl");
        if (!data.styles) {
            data.styles = {};
        }
        if (data.addDefaultTitleStyle) {
            data.styles["titleStyle"] = {
                alignment: {
                    horizontal: "center",
                    vertical: "center",
                },
            };
        }
        const styleKeys = Object.keys(data.styles);
        let styleMapper = styleKeys.reduce((res, cur, index) => {
            const styl = data.styles[cur];
            const indexes = {
                fillIndex: 0,
                fontIndex: 0,
                borderIndex: 0,
                formatIndex: 0,
            };
            if (styl.fg) {
                indexes.fillIndex = res.fill.count;
                res.fill.count++;
                res.fill.value =
                    res.fill.value +
                        "<fill>" +
                        '<patternFill patternType="solid">' +
                        (styl.fg
                            ? '<fgColor rgb="' + styl.fg.replace("#", "") + '" />'
                            : "") +
                        "</patternFill>" +
                        "</fill>";
            }
            if (styl.fontColor ||
                styl.fontFamily ||
                styl.size ||
                styl.bold ||
                styl.italic ||
                styl.underline ||
                styl.doubleUnderline) {
                indexes.fontIndex = res.font.count;
                res.font.count++;
                res.font.value =
                    res.font.value +
                        "<font>" +
                        (styl.bold ? "<b/>" : "") +
                        (styl.italic ? "<i />" : "") +
                        `${styl.underline || styl.doubleUnderline
                            ? `<u ${styl.doubleUnderline ? ' val="double" ' : ""}/>`
                            : ""}` +
                        (styl.size ? '<sz val="' + styl.size + '" />' : "") +
                        (styl.fontColor
                            ? '<color rgb="' + styl.fontColor.replace("#", "") + '" />'
                            : "") +
                        (styl.fontFamily ? '<name val="' + styl.fontFamily + '" />' : "") +
                        "</font>";
            }
            let endPart = "/>";
            if (styl.alignment) {
                if (styl.alignment.rtl) {
                    styl.alignment["readingOrder"] = 2;
                }
                delete styl.alignment.rtl;
                if (styl.alignment.ltr) {
                    styl.alignment["readingOrder"] = 1;
                }
                delete styl.alignment.ltr;
                endPart =
                    ' applyAlignment="1">' +
                        "<alignment " +
                        Object.keys(styl.alignment).reduce((al, alignmentOption) => {
                            return (al +
                                " " +
                                alignmentOption +
                                '="' +
                                styl.alignment[alignmentOption] +
                                '" ');
                        }, "") +
                        " />" +
                        "</xf>";
            }
            const borderObj = styl.border;
            let borderStr = "";
            if (typeof borderObj == "object") {
                if (borderObj.left || borderObj.full) {
                    borderStr +=
                        '<left style="' +
                            (borderObj.left || borderObj.full).style +
                            '">' +
                            '<color rgb="' +
                            (borderObj.left || borderObj.full).color.replace("#", "") +
                            '" />' +
                            "</left>";
                }
                if (borderObj.right || borderObj.full) {
                    borderStr +=
                        '<right style="' +
                            (borderObj.right || borderObj.full).style +
                            '">' +
                            '<color rgb="' +
                            (borderObj.right || borderObj.full).color.replace("#", "") +
                            '" />' +
                            "</right>";
                }
                if (borderObj.top || borderObj.full) {
                    borderStr +=
                        '<top style="' +
                            (borderObj.top || borderObj.full).style +
                            '">' +
                            '<color rgb="' +
                            (borderObj.top || borderObj.full).color.replace("#", "") +
                            '" />' +
                            "</top>";
                }
                if (borderObj.bottom || borderObj.full) {
                    borderStr +=
                        '<bottom style="' +
                            (borderObj.bottom || borderObj.full).style +
                            '">' +
                            '<color rgb="' +
                            (borderObj.bottom || borderObj.full).color.replace("#", "") +
                            '" />' +
                            "</bottom>";
                }
                indexes.borderIndex = res.border.count;
                res.border.count++;
                res.border.value +=
                    "<border>" + borderStr + "<diagonal />" + "</border>";
            }
            if (styl.format) {
                const format = formatMap[styl.format];
                if (format) {
                    indexes.formatIndex = format.key;
                    if ("value" in format) {
                        res.format.count++;
                        res.format.value += format.value;
                    }
                }
            }
            res.cell.value =
                res.cell.value +
                    '<xf numFmtId="' +
                    indexes.formatIndex +
                    '"' +
                    ' fontId="' +
                    indexes.fontIndex +
                    '" fillId="' +
                    indexes.fillIndex +
                    '" borderId="' +
                    indexes.borderIndex +
                    '" xfId="0"' +
                    (indexes.borderIndex > 0 ? ' applyBorder="1" ' : "") +
                    (indexes.fillIndex > 0 ? ' applyFill="1" ' : "") +
                    (indexes.fontIndex >= 0 ? ' applyFont="1" ' : "") +
                    (indexes.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") +
                    endPart;
            data.styles[cur].index = res.cell.count;
            res.cell.count++;
            return res;
        }, {
            format: {
                count: 0,
                value: "",
            },
            border: {
                count: 1,
                value: "",
            },
            fill: {
                count: 2,
                value: "",
            },
            font: {
                count: 2,
                value: "",
            },
            cell: {
                count: 2,
                value: "",
            },
        });
        xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.file("styles.xml", (0, styles_1.styleGenerator)(styleMapper));
        var sheetContentType = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
        let sharedString = "";
        let sharedStringIndex = 0;
        let workbookString = "";
        let workbookRelString = "";
        let sharedStringMap = {};
        const mapData = {};
        let sheetNameApp = "";
        let indexId = 4;
        let selectedAdded = false;
        for (let index = 0; index < sheetLength; index++) {
            const sheetData = data.sheet[index];
            let rowCount = sheetData.shiftTop ? sheetData.shiftTop : 1;
            let sheetDataString = "";
            let sheetSizeString = "";
            let sheetSortFilter = "";
            let objKey = [];
            let headerFormula = [];
            let mergeRowConditionMap = {};
            const colsLength = sheetData.headers.length;
            if (Array.isArray(sheetData.headers) && colsLength) {
                let titleRow = "";
                if (sheetData.title) {
                    // debugger;
                    const title = sheetData.title;
                    const top = title.shiftTop ? title.shiftTop : 0;
                    const sL = sheetData.shiftLeft ? sheetData.shiftLeft : 0;
                    const left = title.shiftLeft ? title.shiftLeft + sL : sL;
                    const consommeRow = title.consommeRow ? title.consommeRow - 1 : 1;
                    const consommeCol = title.consommeCol ? title.consommeCol : colsLength;
                    const height = consommeRow == 0 && typeof title.height == "number"
                        ? ' ht="' + title.height + '" customHeight="1" '
                        : "";
                    const tStyle = title.styleId ? title.styleId : "titleStyle";
                    const refString = cols[left] + "" + (rowCount + top);
                    if (!sheetData.merges) {
                        sheetData.merges = [];
                    }
                    sheetData.merges.push(refString +
                        ":" +
                        cols[left + consommeCol - 1] +
                        (rowCount + consommeRow + top));
                    if (typeof title.text == "string") {
                        titleRow +=
                            '<row r="' +
                                (rowCount + top) +
                                '" ' +
                                height +
                                ' spans="1:' +
                                (left + consommeCol - 1) +
                                '">';
                        titleRow +=
                            '<c r="' +
                                refString +
                                '" ' +
                                (data.styles[tStyle]
                                    ? ' s="' + data.styles[tStyle].index + '" '
                                    : "") +
                                ' t="s"><v>' +
                                sharedStringIndex +
                                "</v></c>";
                        titleRow += "</row>";
                        sharedStringIndex++;
                        sharedStringMap[title.text] = title.text;
                        sharedString += "<si><t>" + title.text + "</t></si>";
                    }
                    rowCount += top + consommeRow + 1;
                }
                let headerStyleKey = sheetData.headerStyleKey
                    ? sheetData.headerStyleKey
                    : null;
                let shiftCount = 0;
                if (typeof sheetData.shiftLeft == "number") {
                    shiftCount = sheetData.shiftLeft;
                }
                sheetData.headers.forEach((v, innerIndex) => {
                    if (shiftCount) {
                        innerIndex += shiftCount;
                    }
                    if (v.formula) {
                        headerFormula.push(innerIndex);
                    }
                    objKey.push(v.label);
                    if (sheetData.mergeRowDataCondition &&
                        typeof sheetData.mergeRowDataCondition == "function") {
                        let result = sheetData.mergeRowDataCondition(v, null, innerIndex, true);
                        if (result === true) {
                            mergeRowConditionMap[cols[innerIndex]] = {
                                inProgress: true,
                                start: rowCount,
                            };
                        }
                    }
                    if (sheetData.styleCellCondition &&
                        typeof sheetData.styleCellCondition == "function") {
                        headerStyleKey =
                            sheetData.styleCellCondition(v, v, innerIndex, rowCount, true, styleKeys) || headerStyleKey;
                    }
                    if (v.size && v.size > 0) {
                        sheetSizeString +=
                            '<col min="' +
                                (innerIndex + 1) +
                                '" max="' +
                                (innerIndex + 1) +
                                '" width="' +
                                v.size +
                                '" customWidth="1" />';
                    }
                    if (sheetData.withoutHeader) {
                        return;
                    }
                    const refString = cols[innerIndex] + "" + rowCount;
                    const formula = sheetData.formula && sheetData.formula[refString];
                    if (formula) {
                        sheetDataString += (0, generate_formula_cell_1.generateCellRowCol)(refString, formula, data.styles).cell;
                        delete sheetData.formula[refString];
                    }
                    else {
                        sheetDataString +=
                            '<c r="' +
                                cols[innerIndex] +
                                rowCount +
                                '" ' +
                                (headerStyleKey && data.styles && data.styles[headerStyleKey]
                                    ? ' s="' + data.styles[headerStyleKey].index + '" '
                                    : "") +
                                " " +
                                't="s"><v>' +
                                sharedStringIndex +
                                "</v></c>";
                        sharedString += "<si><t>" + v.text + "</t></si>";
                        sharedStringMap[v.text] = v.text;
                        sharedStringIndex++;
                    }
                });
                if (!sheetData.withoutHeader) {
                    sheetDataString =
                        titleRow +
                            '<row r="' +
                            rowCount +
                            '" spans="1:' +
                            colsLength +
                            '" ' +
                            (sheetData.headerHeight
                                ? 'ht="' + sheetData.headerHeight + '" customHeight="1"'
                                : "") +
                            (sheetData.headerRowOption
                                ? Object.keys(sheetData.headerRowOption).reduce((res, curr) => {
                                    return (res +
                                        " " +
                                        curr +
                                        '="' +
                                        sheetData.headerRowOption[curr] +
                                        '" ');
                                }, "  ")
                                : "") +
                            ">" +
                            sheetDataString +
                            "</row>";
                    rowCount++;
                }
                else {
                    sheetDataString += titleRow;
                }
                if (Array.isArray(sheetData.data)) {
                    const keyOutline = data.mapSheetDataOption && data.mapSheetDataOption.outlineLevel
                        ? data.mapSheetDataOption.outlineLevel
                        : "outlineLevel";
                    const keyHidden = data.mapSheetDataOption && data.mapSheetDataOption.hidden
                        ? data.mapSheetDataOption.hidden
                        : "hidden";
                    const keyHeight = data.mapSheetDataOption && data.mapSheetDataOption.height
                        ? data.mapSheetDataOption.height
                        : "height";
                    const rowLength = sheetData.data.length;
                    sheetData.data.forEach((mData, innerIndex) => {
                        if (mData.mergeType) {
                            for (let iindex = 0; iindex < mData.mergeType.length; iindex++) {
                                const mergeType = mData.mergeType[iindex];
                                const mergeStart = mData.mergeStart[iindex];
                                const mergeValue = mData.mergeValue[index];
                                let mergeStr = "";
                                if (mergeType == "both") {
                                    mergeStr =
                                        cols[mergeStart] +
                                            "" +
                                            rowCount +
                                            ":" +
                                            cols[mergeStart + mergeValue[1]] +
                                            "" +
                                            (rowCount + mergeValue[0]);
                                }
                                else {
                                    if (mergeType == "col") {
                                        mergeStr =
                                            cols[mergeStart] +
                                                "" +
                                                rowCount +
                                                ":" +
                                                cols[mergeStart + mergeValue[0]] +
                                                "" +
                                                rowCount;
                                    }
                                    else {
                                        mergeStr =
                                            cols[mergeStart] +
                                                "" +
                                                rowCount +
                                                ":" +
                                                cols[mergeStart] +
                                                "" +
                                                (rowCount + mergeValue[0]);
                                    }
                                }
                                if (!sheetData.merges) {
                                    sheetData.merges = [];
                                }
                                sheetData.merges.push(mergeStr);
                            }
                        }
                        const rowStyle = mData.rowStyle;
                        sheetDataString +=
                            '<row r="' +
                                rowCount +
                                '" spans="1:' +
                                colsLength +
                                '" ' +
                                (keyHeight in mData
                                    ? 'ht="' + mData[keyHeight] + '" customHeight="1"'
                                    : "") +
                                (keyOutline in mData
                                    ? ' outlineLevel="' + mData[keyOutline] + '"'
                                    : "") +
                                (keyHidden in mData ? ' hidden="' + mData[keyHidden] + '"' : "") +
                                " >";
                        objKey.forEach((key, keyIndex) => {
                            if (shiftCount) {
                                keyIndex += shiftCount;
                            }
                            const dataEl = mData[key];
                            let cellStyle = rowStyle;
                            if (sheetData.styleCellCondition &&
                                typeof sheetData.styleCellCondition == "function") {
                                cellStyle =
                                    sheetData.styleCellCondition(dataEl, mData, keyIndex, rowCount, false, styleKeys) || rowStyle;
                            }
                            if (sheetData.mergeRowDataCondition &&
                                typeof sheetData.mergeRowDataCondition == "function") {
                                let result = sheetData.mergeRowDataCondition(dataEl, key, keyIndex, false);
                                const columnKey = cols[keyIndex];
                                let item = mergeRowConditionMap[columnKey];
                                if (result === true) {
                                    if (!item || (item && !item.inProgress)) {
                                        mergeRowConditionMap[columnKey] = {
                                            inProgress: true,
                                            start: rowCount,
                                        };
                                    }
                                }
                                else {
                                    if (item && item.inProgress) {
                                        if (!sheetData.merges) {
                                            sheetData.merges = [
                                                columnKey + item.start + ":" + columnKey + (rowCount - 1),
                                            ];
                                        }
                                        else {
                                            sheetData.merges.push(columnKey + item.start + ":" + columnKey + (rowCount - 1));
                                        }
                                        mergeRowConditionMap[columnKey] = {
                                            inProgress: false,
                                            start: -1,
                                        };
                                    }
                                }
                            }
                            if (typeof dataEl != "undefined") {
                                const refString = cols[keyIndex] + "" + rowCount;
                                const formula = sheetData.formula && sheetData.formula[refString];
                                if (formula) {
                                    sheetDataString += (0, generate_formula_cell_1.generateCellRowCol)(refString, formula).cell;
                                    delete sheetData.formula[refString];
                                }
                                else {
                                    if (typeof dataEl == "string") {
                                        sheetDataString +=
                                            '<c r="' +
                                                cols[keyIndex] +
                                                rowCount +
                                                '" t="s" ' +
                                                (cellStyle && data.styles && data.styles[cellStyle]
                                                    ? 's="' + data.styles[cellStyle].index + '"'
                                                    : "") +
                                                "><v>" +
                                                sharedStringIndex +
                                                "</v></c>";
                                        sharedString += "<si><t>" + dataEl + "</t></si>";
                                        sharedStringMap[dataEl] = dataEl;
                                        sharedStringIndex++;
                                    }
                                    else {
                                        sheetDataString +=
                                            '<c r="' +
                                                cols[keyIndex] +
                                                rowCount +
                                                '" ' +
                                                (cellStyle && data.styles && data.styles[cellStyle]
                                                    ? 's="' + data.styles[cellStyle].index + '"'
                                                    : "") +
                                                "><v>" +
                                                dataEl +
                                                "</v></c>";
                                    }
                                }
                            }
                        });
                        if (rowLength - 1 == innerIndex) {
                            Object.keys(mergeRowConditionMap).forEach((v) => {
                                if (mergeRowConditionMap[v].inProgress) {
                                    if (sheetData.merges) {
                                        sheetData.merges.push(v + mergeRowConditionMap[v].start + ":" + v + rowCount);
                                    }
                                    else {
                                        sheetData.merges = [
                                            v + mergeRowConditionMap[v].start + ":" + v + rowCount,
                                        ];
                                    }
                                }
                            });
                        }
                        rowCount++;
                        sheetDataString += "</row>";
                    });
                    if (sheetData.sortAndfilter) {
                        if (sheetData.sortAndfilter.mode == "all") {
                            sheetSortFilter +=
                                '<autoFilter ref="A1:' +
                                    cols[colsLength - 1] +
                                    "" +
                                    (rowCount - 1) +
                                    '" />';
                        }
                        else {
                            if (typeof sheetData.sortAndfilter.ref == "string" &&
                                sheetData.sortAndfilter.ref.length > 0) {
                                sheetSortFilter +=
                                    '<autoFilter ref="' + sheetData.sortAndfilter.ref + '" />';
                            }
                        }
                    }
                }
                if (headerFormula.length > 0) {
                    if (!sheetData.formula) {
                        sheetData.formula = {};
                    }
                    headerFormula.forEach((v) => {
                        const header = sheetData.headers[v];
                        sheetData.formula[cols[v] + "" + rowCount] = Object.assign({ start: sheetData.withoutHeader ? cols[v] + "1" : cols[v] + "2", end: cols[v] + "" + (rowCount - 1), type: header.formula.type }, (header.formula.styleId
                            ? { styleId: header.formula.styleId }
                            : {}));
                    });
                }
                if (sheetData.formula) {
                    const remindFormulaKey = Object.keys(sheetData.formula);
                    if (remindFormulaKey.length) {
                        let rF = {};
                        remindFormulaKey.forEach((v) => {
                            const f = (0, generate_formula_cell_1.generateCellRowCol)(v, sheetData.formula[v], data.styles);
                            if (!rF[f.row]) {
                                rF[f.row] = f.cell;
                            }
                            else {
                                rF[f.row] += f.cell;
                            }
                        });
                        Object.keys(rF).forEach((v) => {
                            const l = rF[v];
                            sheetDataString +=
                                '<row r="' +
                                    v +
                                    '" spans="1:' +
                                    colsLength +
                                    '"  >' +
                                    l +
                                    "</row>";
                        });
                    }
                }
            }
            if (index > 0) {
                sheetContentType +=
                    "<Override" +
                        '    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"' +
                        '    PartName="/xl/worksheets/sheet' +
                        (index + 1) +
                        '.xml" />';
            }
            const shName = sheetData.name ? sheetData.name : "sheet" + (index + 1);
            const shState = sheetData.state ? sheetData.state : "visible";
            workbookString +=
                '<sheet state="' +
                    shState +
                    '" name="' +
                    shName +
                    '" sheetId="' +
                    (index + 1) +
                    '" r:id="rId' +
                    (indexId + 1) +
                    '" />';
            workbookRelString +=
                '<Relationship Id="rId' +
                    (indexId + 1) +
                    '"' +
                    ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"' +
                    ' Target="worksheets/sheet' +
                    (index + 1) +
                    '.xml" />';
            sheetNameApp += "<vt:lpstr>" + ("sheet" + (index + 1)) + "</vt:lpstr>";
            selectedAdded = selectedAdded || !!sheetData.selected;
            const filterMode = sheetData.sortAndfilter ? 'filterMode="1"' : "";
            mapData["sheet" + (index + 1)] = {
                indexId: indexId + 1,
                key: "sheet" + (index + 1),
                sheetName: shName,
                sheetDataString,
                sheetSizeString: sheetSizeString.length > 0
                    ? "<cols>" + sheetSizeString + "</cols>"
                    : "",
                protectionOption: sheetData.protectionOption
                    ? Object.keys(sheetData.protectionOption).reduce((res, cu) => {
                        return (res +
                            " " +
                            cu +
                            '="' +
                            sheetData.protectionOption[cu] +
                            '" ');
                    }, "<sheetProtection ") + "/>"
                    : "",
                merges: sheetData.merges
                    ? sheetData.merges.reduce((mResult, currRef) => {
                        return (mResult += ' <mergeCell ref="' + currRef + '" />');
                    }, '<mergeCells count="' + sheetData.merges.length + '">') +
                        " </mergeCells>"
                    : "",
                selectedView: sheetData.selected
                    ? "<sheetViews>" +
                        '<sheetView tabSelected="1" workbookViewId="0">' +
                        '<selection activeCell="A0" sqref="A0" />' +
                        "</sheetView>" +
                        "</sheetViews>"
                    : "<sheetViews>" + '<sheetView workbookViewId="0" />' + "</sheetViews>",
                sheetSortFilter,
                tabColor: sheetData.tabColor
                    ? '<sheetPr codeName="' +
                        ("Sheet" + (index + 1)) +
                        '" ' +
                        filterMode +
                        " >" +
                        '<tabColor rgb="' +
                        sheetData.tabColor.replace("#", "") +
                        '" />' +
                        "</sheetPr>"
                    : "<sheetPr " +
                        filterMode +
                        " >" +
                        '<outlinePr summaryBelow="0" summaryRight="0" />' +
                        "</sheetPr>",
            };
            indexId++;
        }
        let sheetKeys = Object.keys(mapData);
        zip.file("[Content_Types].xml", (0, content_types_1.contentTypeGenerator)(sheetContentType));
        // in _rels
        var relsFolder = zip.folder("_rels");
        relsFolder === null || relsFolder === void 0 ? void 0 : relsFolder.file(".rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
            ' <Relationship Id="rId3"' +
            '  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"' +
            '  Target="docProps/app.xml" />' +
            ' <Relationship Id="rId2"' +
            '  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"' +
            '  Target="docProps/core.xml" />' +
            ' <Relationship Id="rId1"' +
            '  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"' +
            '  Target="xl/workbook.xml" />' +
            "</Relationships>");
        var docPropsFolder = zip.folder("docProps");
        docPropsFolder === null || docPropsFolder === void 0 ? void 0 : docPropsFolder.file("core.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
            '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" ' +
            'xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" ' +
            'xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
            (data.creator ? "<dc:creator>" + data.creator + "</dc:creator>" : "") +
            (data.created
                ? '<dcterms:created xsi:type="dcterms:W3CDTF">' +
                    data.created +
                    "</dcterms:created>"
                : "") +
            (data.modified
                ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' +
                    data.modified +
                    "</dcterms:modified>"
                : "") +
            "</cp:coreProperties>");
        docPropsFolder === null || docPropsFolder === void 0 ? void 0 : docPropsFolder.file("app.xml", (0, app_1.appGenerator)(sheetLength, sheetNameApp));
        //xl
        xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.file("workbook.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
            '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"' +
            ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"' +
            ' xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main"' +
            ' xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"' +
            ' xmlns:mv="urn:schemas-microsoft-com:mac:vml"' +
            ' xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"' +
            ' xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"' +
            ' xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"' +
            ' xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">' +
            " <workbookPr />" +
            " <sheets>" +
            "  " +
            workbookString +
            "" +
            " </sheets>" +
            " <definedNames />" +
            " <calcPr />" +
            "</workbook>");
        xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.file("sharedStrings.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
            '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' +
            (sharedStringIndex - 1) +
            '" uniqueCount="' +
            Object.keys(sharedStringMap).length +
            '">' +
            " " +
            sharedString +
            "" +
            "</sst>");
        //xl/_rels
        var xl__relsFolder = xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.folder("_rels");
        xl__relsFolder === null || xl__relsFolder === void 0 ? void 0 : xl__relsFolder.file("workbook.xml.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
            ' <Relationship Id="rId1"' +
            ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"' +
            ' Target="theme/theme1.xml" />' +
            ' <Relationship Id="rId2"' +
            ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"' +
            ' Target="styles.xml" />' +
            ' <Relationship Id="rId3"' +
            ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"' +
            ' Target="sharedStrings.xml" />' +
            " " +
            workbookRelString +
            "" +
            " " +
            "" +
            "</Relationships>");
        //xl/theme
        var xl_themeFolder = xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.folder("theme");
        xl_themeFolder === null || xl_themeFolder === void 0 ? void 0 : xl_themeFolder.file("theme1.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
            '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>');
        // xl/worksheets
        var xl_worksheetsFolder = xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.folder("worksheets");
        sheetKeys.forEach((k) => {
            const sh = mapData[k];
            xl_worksheetsFolder === null || xl_worksheetsFolder === void 0 ? void 0 : xl_worksheetsFolder.file(sh.key + ".xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"' +
                ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"' +
                ' xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main"' +
                ' xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"' +
                ' xmlns:mv="urn:schemas-microsoft-com:mac:vml"' +
                ' xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision"' +
                ' xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2"' +
                ' xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3"' +
                ' xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"' +
                ' xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"' +
                ' xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"' +
                ' xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">' +
                sh.tabColor +
                sh.selectedView +
                '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' +
                sh.sheetSizeString +
                "<sheetData>" +
                sh.sheetDataString +
                "</sheetData>" +
                sh.protectionOption +
                sh.sheetSortFilter +
                sh.merges +
                "</worksheet>");
        });
        if (data.backend) {
            return zip
                .generateAsync({
                type: data.generateType ? data.generateType : "nodebuffer",
            })
                .then((content) => {
                return content;
            });
        }
        else {
            if (data.notSave) {
                return zip.generateAsync({ type: "blob" }).then((content) => {
                    return content.slice(0, content.size, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                });
            }
            else {
                zip.generateAsync({ type: "blob" }).then(function (content) {
                    // see FileSaver.js
                    Promise.resolve().then(() => __importStar(require("file-saver"))).then((module) => {
                        const { saveAs } = module;
                        // Now you can use the saveAs function
                        saveAs(content, (data.fileName ? data.fileName : "tableRecord") + ".xlsx");
                    });
                });
            }
        }
    });
}
exports.generateExcel = generateExcel;
function convertTableToExcel(queryForTable, table, keepStyle, rowHeightScaleFunction, colWidthScaleFunction) {
    const data = (0, create_excel_data_1.createExcelTabelBaseOnDomElement)(queryForTable, table, keepStyle, rowHeightScaleFunction, colWidthScaleFunction);
    return generateExcel(data);
}
exports.convertTableToExcel = convertTableToExcel;
//# sourceMappingURL=index.js.map