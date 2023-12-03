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
exports.generateExcel = void 0;
const generate_column_name_1 = require("../utils/generate-column-name");
const styles_1 = require("../utils/content-generator/styles");
const content_types_1 = require("../utils/content-generator/content-types");
const app_1 = require("../utils/content-generator/app");
const generate_formula_cell_1 = require("../utils/generate-formula-cell");
const color_1 = require("../utils/color");
const comment_1 = require("../utils/comment");
const multi_value_1 = require("../utils/multi-value");
const const_data_1 = require("../utils/content-generator/const-data");
const image_1 = require("./image");
const excel_util_1 = require("./excel-util");
const special_character_1 = require("./special-character");
function generateExcel(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const operatorMap = {
            lt: "lessThan",
            gt: "greaterThan",
            between: "between",
            ct: "containsText",
            eq: "equal",
        };
        let cols = [...const_data_1.cols];
        if (data.numberOfColumn && data.numberOfColumn > 25) {
            cols = (0, generate_column_name_1.generateColumnName)(cols, data.numberOfColumn);
        }
        const module = yield Promise.resolve().then(() => __importStar(require("jszip")));
        const JSZip = module.default;
        let zip = new JSZip();
        const sheetLength = data.sheet.length;
        // xl
        let xlFolder = zip.folder("xl");
        let xl_media_Folder = xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.folder("media");
        let xl_drawingsFolder = xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.folder("drawings");
        let xl_drawings_relsFolder = xl_drawingsFolder === null || xl_drawingsFolder === void 0 ? void 0 : xl_drawingsFolder.folder("_rels");
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
        const defaultCommentStyle = comment_1.defaultCellCommentStyle;
        const addCF = data.activateConditinalFormating
            ? data.activateConditinalFormating
            : false;
        const cFMapIndex = {};
        let styleMapper = styleKeys.reduce((res, cur, index) => {
            const styl = data.styles[cur];
            if (addCF &&
                typeof styl.type == "string" &&
                styl.type &&
                (styl.type == "conditinalFormating" || styl.type.toUpperCase() == "CF")) {
                cFMapIndex[cur] = res.conditinalFormating.count;
                let color = (0, color_1.convertToHex)(styl.color, data.backend);
                let bgColor = (0, color_1.convertToHex)(styl.backgroundColor, data.backend);
                res.conditinalFormating.value +=
                    '<dxf><font><color rgb="' +
                        color +
                        '"/></font><fill> <patternFill> <bgColor rgb="' +
                        bgColor +
                        '"/></patternFill></fill></dxf>';
                res.conditinalFormating.count++;
                return res;
            }
            const indexes = {
                fillIndex: 0,
                fontIndex: 0,
                borderIndex: 0,
                formatIndex: 0,
            };
            if (styl.backgroundColor) {
                let fgConvertor = (0, color_1.convertToHex)(styl.backgroundColor, data.backend);
                indexes.fillIndex = res.fill.count;
                res.fill.count++;
                res.fill.value =
                    res.fill.value +
                        "<fill>" +
                        '<patternFill patternType="solid">' +
                        (fgConvertor
                            ? '<fgColor rgb="' + fgConvertor.replace("#", "") + '" />'
                            : "") +
                        "</patternFill>" +
                        "</fill>";
            }
            if (styl.color ||
                styl.fontFamily ||
                styl.size ||
                styl.bold ||
                styl.italic ||
                styl.underline ||
                styl.doubleUnderline) {
                const colors = (0, color_1.convertToHex)(styl.color, data.backend);
                indexes.fontIndex = res.font.count;
                res.font.count++;
                res.font.value =
                    res.font.value +
                        "<font>" +
                        (styl.bold ? "<b/>" : "") +
                        (styl.italic ? "<i />" : "") +
                        (styl.underline || styl.doubleUnderline
                            ? "<u " + (styl.doubleUnderline ? ' val="double" ' : "") + "/>"
                            : "") +
                        (styl.size ? '<sz val="' + styl.size + '" />' : "") +
                        (colors ? '<color rgb="' + colors.replace("#", "") + '" />' : "") +
                        (styl.fontFamily ? '<name val="' + styl.fontFamily + '" />' : "") +
                        "</font>";
                res.commentSintax.value[cur] =
                    "<rPr>" +
                        (styl.bold ? "<b/>" : "") +
                        (styl.italic ? "<i />" : "") +
                        (styl.underline || styl.doubleUnderline
                            ? "<u " + (styl.doubleUnderline ? 'val="double" ' : "") + "/>"
                            : "") +
                        '<sz val="' +
                        (styl.size ? styl.size : "9") +
                        '" />' +
                        (colors ? '<color rgb="' + colors.replace("#", "") + '" />' : "") +
                        '<rFont val="' +
                        (styl.fontFamily ? styl.fontFamily : "Tahoma") +
                        '" />' +
                        "</rPr>";
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
                            (0, color_1.convertToHex)((borderObj.left || borderObj.full).color, data.backend).replace("#", "") +
                            '" />' +
                            "</left>";
                }
                if (borderObj.right || borderObj.full) {
                    borderStr +=
                        '<right style="' +
                            (borderObj.right || borderObj.full).style +
                            '">' +
                            '<color rgb="' +
                            (0, color_1.convertToHex)((borderObj.right || borderObj.full).color, data.backend).replace("#", "") +
                            '" />' +
                            "</right>";
                }
                if (borderObj.top || borderObj.full) {
                    borderStr +=
                        '<top style="' +
                            (borderObj.top || borderObj.full).style +
                            '">' +
                            '<color rgb="' +
                            (0, color_1.convertToHex)((borderObj.top || borderObj.full).color, data.backend).replace("#", "") +
                            '" />' +
                            "</top>";
                }
                if (borderObj.bottom || borderObj.full) {
                    borderStr +=
                        '<bottom style="' +
                            (borderObj.bottom || borderObj.full).style +
                            '">' +
                            '<color rgb="' +
                            (0, color_1.convertToHex)((borderObj.bottom || borderObj.full).color, data.backend).replace("#", "") +
                            '" />' +
                            "</bottom>";
                }
                indexes.borderIndex = res.border.count;
                res.border.count++;
                res.border.value +=
                    "<border>" + borderStr + "<diagonal />" + "</border>";
            }
            if (styl.format) {
                const format = const_data_1.formatMap[styl.format];
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
            conditinalFormating: {
                count: addCF ? 1 : 0,
                value: '<dxf><font><color rgb="FF9C0006"/></font><fill> <patternFill> <bgColor rgb="FFFFC7CE"/></patternFill></fill></dxf>',
            },
            commentSintax: {
                value: {},
            },
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
        xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.file("styles.xml", (0, styles_1.styleGenerator)(styleMapper, addCF));
        let sheetContentType = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
        let sharedString = "";
        let sharedStringIndex = 0;
        let workbookString = "";
        let workbookRelString = "";
        let sharedStringMap = {};
        const mapData = {};
        let sheetNameApp = "";
        let indexId = 4;
        let selectedAdded = false;
        let activeTabIndex = -1;
        let arrTypes = [];
        for (let index = 0; index < sheetLength; index++) {
            const sheetData = data.sheet[index];
            let rowCount = sheetData.shiftTop ? sheetData.shiftTop : 1;
            let sheetDataString = "";
            let sheetSizeString = "";
            let sheetSortFilter = "";
            let mergesCellArray = Object.assign([], sheetData.merges);
            let formulaSheetObj = Object.assign({}, sheetData.formula);
            let conditinalFormating = Object.assign([], sheetData.conditinalFormating);
            let hasComment = false;
            let commentAuthor = [];
            let commentString = "";
            let shapeCommentRowCol = [];
            let objKey = [];
            let headerFormula = [];
            let headerConditinalFormating = [];
            let mergeRowConditionMap = {};
            let imagePromise;
            if (sheetData.images) {
                imagePromise = Promise.all([
                    ...sheetData.images.map((v, i) => __awaiter(this, void 0, void 0, function* () {
                        let indexx = v.url.lastIndexOf(".");
                        let type;
                        if (indexx > 0) {
                            type = v.url.substring(indexx + 1).toLowerCase();
                            if (type.length > 4) {
                                if (type.indexOf("gif") >= 0) {
                                    type = "gif";
                                }
                                else if (type.indexOf("jpg") >= 0) {
                                    type = "jpg";
                                }
                                else if (type.indexOf("jpeg") >= 0) {
                                    type = "jpeg";
                                }
                                else {
                                    type = "png";
                                }
                            }
                        }
                        else {
                            type = "png";
                        }
                        arrTypes.push(type);
                        return {
                            type,
                            image: yield (0, image_1.toDataURL2)(v.url, "image" + i + "." + type),
                            obj: v,
                            i,
                        };
                    })),
                ]);
            }
            const colsLength = sheetData.headers.length;
            if (Array.isArray(sheetData.headers) && colsLength) {
                let titleRow = "";
                if (sheetData.title) {
                    const title = sheetData.title;
                    const commentTitle = title.comment;
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
                    mergesCellArray.push(refString +
                        ":" +
                        cols[left + consommeCol - 1] +
                        (rowCount + consommeRow + top));
                    if (typeof commentTitle != "undefined") {
                        hasComment = true;
                        const commentObj = (0, comment_1.commentConvertor)(commentTitle, styleMapper.commentSintax.value, defaultCommentStyle);
                        let authorId = commentAuthor.length;
                        if (commentObj.hasAuthour &&
                            typeof commentObj.author != "undefined") {
                            let auth = commentObj.author.toString();
                            const index = commentAuthor.indexOf(auth);
                            if (index < 0) {
                                commentAuthor.push(auth);
                            }
                            else {
                                authorId = index;
                            }
                        }
                        shapeCommentRowCol.push({
                            row: rowCount + top - 1,
                            col: left,
                        });
                        commentString += (0, comment_1.generateCommentTag)(refString, commentObj.commentStr, commentObj.commentStyl, authorId);
                    }
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
                        if (title.multiStyleValue) {
                            sharedString += (0, multi_value_1.generateMultiStyleValue)(title.multiStyleValue, title.text, styleMapper.commentSintax.value, tStyle, sheetData.useSplitBaseOnMatch);
                        }
                        else {
                            sharedString += "<si><t>" + (0, special_character_1.spCh)(title.text) + "</t></si>";
                        }
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
                    if (v.conditinalFormating) {
                        headerConditinalFormating.push(innerIndex);
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
                    if (typeof sheetData.commentCodition == "function") {
                        const checkCommentCondition = sheetData.commentCodition(v, null, v.label, rowCount, innerIndex, true);
                        if (checkCommentCondition) {
                            v.comment = checkCommentCondition;
                        }
                    }
                    if (v.comment) {
                        hasComment = true;
                        const commentObj = (0, comment_1.commentConvertor)(v.comment, styleMapper.commentSintax.value, defaultCommentStyle);
                        let authorId = commentAuthor.length;
                        if (commentObj.hasAuthour &&
                            typeof commentObj.author != "undefined") {
                            let auth = commentObj.author.toString();
                            const index = commentAuthor.indexOf(auth);
                            if (index < 0) {
                                commentAuthor.push(auth);
                            }
                            else {
                                authorId = index;
                            }
                        }
                        shapeCommentRowCol.push({
                            row: rowCount - 1,
                            col: innerIndex,
                        });
                        commentString += (0, comment_1.generateCommentTag)(refString, commentObj.commentStr, commentObj.commentStyl, authorId);
                    }
                    const formula = formulaSheetObj && formulaSheetObj[refString];
                    if (formula) {
                        sheetDataString += (0, generate_formula_cell_1.generateCellRowCol)(refString, formula, data.styles).cell;
                        delete formulaSheetObj[refString];
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
                        if (typeof sheetData.multiStyleConditin == "function") {
                            const multi = sheetData.multiStyleConditin(v, null, v.label, rowCount, innerIndex, true);
                            if (multi) {
                                v.multiStyleValue = multi;
                            }
                        }
                        if (v.multiStyleValue) {
                            sharedString += (0, multi_value_1.generateMultiStyleValue)(v.multiStyleValue, v.text, styleMapper.commentSintax.value, headerStyleKey ? headerStyleKey : "", sheetData.useSplitBaseOnMatch);
                        }
                        else {
                            sharedString += "<si><t>" + (0, special_character_1.spCh)(v.text) + "</t></si>";
                        }
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
                                mergesCellArray.push(mergeStr);
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
                            const cellValue = mData[key] * 1;
                            let dataEl = sheetData.convertStringToNumber && !isNaN(cellValue)
                                ? cellValue
                                : mData[key];
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
                                        mergesCellArray.push(columnKey + item.start + ":" + columnKey + (rowCount - 1));
                                        mergeRowConditionMap[columnKey] = {
                                            inProgress: false,
                                            start: -1,
                                        };
                                    }
                                }
                            }
                            if (typeof dataEl == "undefined") {
                                dataEl = "";
                            }
                            const refString = cols[keyIndex] + "" + rowCount;
                            if (typeof sheetData.commentCodition == "function") {
                                const checkCommentCondition = sheetData.commentCodition(dataEl, mData, key, rowCount, keyIndex, false);
                                if (checkCommentCondition) {
                                    if (typeof mData.comment !== "object") {
                                        mData.comment = {};
                                    }
                                    mData.comment[key] = checkCommentCondition;
                                }
                            }
                            if (typeof mData.comment == "object" && key in mData.comment) {
                                const cellComment = mData.comment[key];
                                hasComment = true;
                                const commentObj = (0, comment_1.commentConvertor)(cellComment, styleMapper.commentSintax.value, defaultCommentStyle);
                                if (commentObj.hasAuthour &&
                                    typeof commentObj.author != "undefined") {
                                    commentAuthor.push(commentObj.author.toString());
                                }
                                shapeCommentRowCol.push({
                                    row: rowCount - 1,
                                    col: keyIndex,
                                });
                                let authorId = commentAuthor.length;
                                if (commentObj.hasAuthour &&
                                    typeof commentObj.author != "undefined") {
                                    let auth = commentObj.author.toString();
                                    const index = commentAuthor.indexOf(auth);
                                    if (index < 0) {
                                        commentAuthor.push(auth);
                                    }
                                    else {
                                        authorId = index;
                                    }
                                }
                                commentString += (0, comment_1.generateCommentTag)(refString, commentObj.commentStr, commentObj.commentStyl, authorId);
                            }
                            const formula = formulaSheetObj && formulaSheetObj[refString];
                            if (formula) {
                                sheetDataString += (0, generate_formula_cell_1.generateCellRowCol)(refString, formula).cell;
                                delete formulaSheetObj[refString];
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
                                    if (typeof sheetData.multiStyleConditin == "function") {
                                        const multi = sheetData.multiStyleConditin(dataEl, mData, key, rowCount, keyIndex, false);
                                        if (multi) {
                                            if (!("multiStyleValue" in mData) ||
                                                typeof mData.multiStyleValue == "undefined") {
                                                mData.multiStyleValue = {};
                                            }
                                            mData.multiStyleValue[key] = multi;
                                        }
                                    }
                                    if ("multiStyleValue" in mData &&
                                        mData.multiStyleValue &&
                                        key in mData.multiStyleValue) {
                                        sharedString += (0, multi_value_1.generateMultiStyleValue)(mData.multiStyleValue[key], dataEl, styleMapper.commentSintax.value, cellStyle ? cellStyle : "", sheetData.useSplitBaseOnMatch);
                                    }
                                    else {
                                        sharedString += "<si><t>" + (0, special_character_1.spCh)(dataEl) + "</t></si>";
                                    }
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
                        });
                        if (rowLength - 1 == innerIndex) {
                            Object.keys(mergeRowConditionMap).forEach((v) => {
                                if (mergeRowConditionMap[v].inProgress) {
                                    mergesCellArray.push(v + mergeRowConditionMap[v].start + ":" + v + rowCount);
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
                    headerFormula.forEach((v) => {
                        const header = sheetData.headers[v];
                        formulaSheetObj[cols[v] + "" + rowCount] = Object.assign({ start: sheetData.withoutHeader ? cols[v] + "1" : cols[v] + "2", end: cols[v] + "" + (rowCount - 1), type: header.formula.type }, (header.formula.styleId
                            ? { styleId: header.formula.styleId }
                            : {}));
                    });
                }
                if (headerConditinalFormating.length > 0) {
                    headerConditinalFormating.forEach((v) => {
                        const header = sheetData.headers[v];
                        if (!header.conditinalFormating) {
                            return;
                        }
                        conditinalFormating.push(Object.assign(Object.assign({}, header.conditinalFormating), { start: sheetData.withoutHeader ? cols[v] + "1" : cols[v] + "2", end: cols[v] + "" + (rowCount - 1) }));
                    });
                }
                if (formulaSheetObj) {
                    const remindFormulaKey = Object.keys(formulaSheetObj);
                    if (remindFormulaKey.length) {
                        let rF = {};
                        remindFormulaKey.forEach((v) => {
                            const f = (0, generate_formula_cell_1.generateCellRowCol)(v, formulaSheetObj[v], data.styles);
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
            // selectedAdded = selectedAdded || !!sheetData.selected;
            if (sheetData.selected) {
                selectedAdded = true;
                activeTabIndex = index;
            }
            const filterMode = sheetData.sortAndfilter ? 'filterMode="1"' : "";
            let hasImages = false;
            let drawersContent = "";
            let drawersRels = "";
            if (imagePromise) {
                hasImages = true;
                yield imagePromise.then((res) => {
                    console.log(res, "res");
                    let drawerStr = "";
                    res.forEach((val, i) => {
                        const index = i + 1;
                        var v = val.image;
                        var from = val.obj.from;
                        var to = val.obj.to;
                        var margin = val.obj.margin;
                        var imageType = val.type;
                        var type = val.obj.type;
                        var extent = val.obj.extent;
                        if (typeof extent == "undefined") {
                            extent = {
                                cx: 200000,
                                cy: 200000,
                            };
                        }
                        var result = {
                            start: {
                                col: 0,
                                row: 0,
                                mL: 0,
                                mT: 0,
                            },
                            end: {
                                col: 1,
                                row: 1,
                                mR: 0,
                                mB: 0,
                            },
                        };
                        if (typeof from == "string" && from.length >= 2) {
                            var p = (0, excel_util_1.getColRowBaseOnRefString)(from, cols);
                            result.start = Object.assign({}, p);
                            result.end = {
                                col: p.col + 1,
                                row: p.row + 1,
                            };
                        }
                        if (typeof to == "string" && to.length >= 2) {
                            var p = (0, excel_util_1.getColRowBaseOnRefString)(to, cols);
                            p.row += 1;
                            p.col += 1;
                            result.end = Object.assign({}, p);
                        }
                        result.end.mR = 0;
                        result.end.mB = 0;
                        result.start.mL = 0;
                        result.start.mT = 0;
                        if (margin) {
                            if (margin.all || margin.right) {
                                result.end.mR = margin.all || margin.right;
                            }
                            if (margin.all || margin.bottom) {
                                result.end.mB = margin.all || margin.bottom;
                            }
                            if (margin.all || margin.left) {
                                result.start.mL = margin.all || margin.left;
                            }
                            if (margin.all || margin.top) {
                                result.start.mT = margin.all || margin.top;
                            }
                        }
                        if (type == "one") {
                            drawersContent +=
                                "<xdr:oneCellAnchor>" +
                                    "<xdr:from>" +
                                    "<xdr:col>" +
                                    result.start.col +
                                    "</xdr:col>" +
                                    "<xdr:colOff>" +
                                    result.start.mT +
                                    "</xdr:colOff>" +
                                    "<xdr:row>" +
                                    result.start.row +
                                    "</xdr:row>" +
                                    "<xdr:rowOff>" +
                                    result.start.mL +
                                    "</xdr:rowOff>" +
                                    "</xdr:from>" +
                                    '<xdr:ext cx="' +
                                    extent.cx +
                                    '" cy="' +
                                    extent.cy +
                                    '"/>' +
                                    "<xdr:pic>" +
                                    "<xdr:nvPicPr>" +
                                    '<xdr:cNvPr id="' +
                                    index +
                                    '" name="Picture ' +
                                    index +
                                    '">' +
                                    "</xdr:cNvPr>" +
                                    '<xdr:cNvPicPr preferRelativeResize="0" />' +
                                    "</xdr:nvPicPr>" +
                                    "<xdr:blipFill>" +
                                    '<a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' +
                                    index +
                                    '">' +
                                    "</a:blip>" +
                                    "<a:stretch>" +
                                    "<a:fillRect />" +
                                    "</a:stretch>" +
                                    "</xdr:blipFill>" +
                                    "<xdr:spPr>" +
                                    '<a:prstGeom prst="rect">' +
                                    "<a:avLst />" +
                                    "</a:prstGeom>" +
                                    "<a:noFill />" +
                                    "</xdr:spPr>" +
                                    "</xdr:pic>" +
                                    "<xdr:clientData />" +
                                    "</xdr:oneCellAnchor>";
                        }
                        else {
                            drawersContent +=
                                '<xdr:twoCellAnchor editAs="oneCell">' +
                                    "<xdr:from>" +
                                    "<xdr:col>" +
                                    result.start.col +
                                    "</xdr:col>" +
                                    "<xdr:colOff>" +
                                    result.start.mT +
                                    "</xdr:colOff>" +
                                    "<xdr:row>" +
                                    result.start.row +
                                    "</xdr:row>" +
                                    "<xdr:rowOff>" +
                                    result.start.mL +
                                    "</xdr:rowOff>" +
                                    "</xdr:from>" +
                                    "<xdr:to>" +
                                    "<xdr:col>" +
                                    result.end.col +
                                    "</xdr:col>" +
                                    "<xdr:colOff>" +
                                    result.end.mB +
                                    "</xdr:colOff>" +
                                    "<xdr:row>" +
                                    result.end.row +
                                    "</xdr:row>" +
                                    "<xdr:rowOff>" +
                                    result.end.mR +
                                    "</xdr:rowOff>" +
                                    "</xdr:to>" +
                                    "<xdr:pic>" +
                                    "<xdr:nvPicPr>" +
                                    '<xdr:cNvPr id="' +
                                    index +
                                    '" name="Picture ' +
                                    index +
                                    '">' +
                                    "</xdr:cNvPr>" +
                                    '<xdr:cNvPicPr preferRelativeResize="0" />' +
                                    "</xdr:nvPicPr>" +
                                    "<xdr:blipFill>" +
                                    '<a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' +
                                    index +
                                    '">' +
                                    "</a:blip>" +
                                    "<a:stretch>" +
                                    "<a:fillRect />" +
                                    "</a:stretch>" +
                                    "</xdr:blipFill>" +
                                    "<xdr:spPr>" +
                                    '<a:prstGeom prst="rect">' +
                                    "<a:avLst />" +
                                    "</a:prstGeom>" +
                                    "<a:noFill />" +
                                    "</xdr:spPr>" +
                                    "</xdr:pic>" +
                                    "<xdr:clientData />" +
                                    "</xdr:twoCellAnchor>";
                        }
                        const name = "image" + index + "." + imageType;
                        xl_media_Folder === null || xl_media_Folder === void 0 ? void 0 : xl_media_Folder.file(name, v);
                        drawerStr +=
                            '<Relationship Id="rId' +
                                index +
                                '" ' +
                                'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" ' +
                                'Target="../media/' +
                                name +
                                '" />';
                    });
                    drawersRels =
                        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
                            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
                            drawerStr +
                            "</Relationships>";
                });
            }
            mergesCellArray = [...new Set(mergesCellArray)];
            let cFDataString = "";
            let priorityCounter = 1;
            if (conditinalFormating.length > 0) {
                cFDataString = conditinalFormating.reduce((cf, cu) => {
                    if (cu.type == "cells") {
                        if (cu.operator == "ct") {
                            return (cf +
                                `
                    <conditionalFormatting sqref="${cu.start}:${cu.end}">
    <cfRule type="containsText" dxfId="${cu.styleId ? cFMapIndex[cu.styleId] : 0}" priority="${cu.priority ? cu.priority : priorityCounter++}"  operator="containsText" text="${cu.value}">
           <formula>NOT(ISERROR(SEARCH("${cu.value}",${cu.start})))</formula>
    </cfRule>
  </conditionalFormatting>`);
                        }
                        if (typeof cu.operator == "undefined" ||
                            typeof operatorMap[cu.operator] == "undefined") {
                            return cf;
                        }
                        return (cf +
                            `
                    <conditionalFormatting sqref="${cu.start}:${cu.end}">
    <cfRule type="cellIs" dxfId="${cu.styleId ? cFMapIndex[cu.styleId] : 0}" priority="${cu.priority ? cu.priority : priorityCounter++}" operator="${operatorMap[cu.operator]}">
     ${Array.isArray(cu.value)
                                ? cu.value.reduce((rC, cr) => {
                                    return rC + `<formula>${cr.value}</formula>`;
                                }, "")
                                : `<formula>${cu.value}</formula>`}
    </cfRule>
  </conditionalFormatting>`);
                    }
                    else if (cu.type == "top") {
                        return (cf +
                            `<conditionalFormatting sqref="${cu.start}:${cu.end}">
        <cfRule type="${cu.operator ? "aboveAverage" : "top10"}" dxfId="${cu.styleId ? cFMapIndex[cu.styleId] : 0}" priority="${cu.priority ? cu.priority : priorityCounter++}" ${cu.bottom ? 'bottom="1"' : ""} ${cu.percent ? 'percent="1"' : ""}  rank="${cu.value}" ${cu.operator == "belowAverage" ? 'aboveAverage="0"' : ""}/>
    </conditionalFormatting>`);
                    }
                    else if (cu.type == "iconSet") {
                        let percentvalue = "";
                        if (typeof cu.operator == "undefined") {
                            return cf;
                        }
                        if (cu.operator.indexOf("5") == 0) {
                            percentvalue = `
                <cfvo type="percent" val="0"/>
                <cfvo type="percent" val="20"/>
                <cfvo type="percent" val="40"/>
                <cfvo type="percent" val="60"/>
                <cfvo type="percent" val="80"/>`;
                        }
                        else if (cu.operator.indexOf("4") == 0) {
                            percentvalue = `<cfvo type="percent" val="0"/>
                <cfvo type="percent" val="25"/>
                <cfvo type="percent" val="50"/>
                <cfvo type="percent" val="75"/>`;
                        }
                        else {
                            percentvalue = `<cfvo type="percent" val="0"/>
                <cfvo type="percent" val="33"/>
                <cfvo type="percent" val="67"/>`;
                        }
                        return (cf +
                            `<conditionalFormatting sqref="${cu.start}:${cu.end}">
        <cfRule type="iconSet" priority="${cu.priority ? cu.priority : priorityCounter++}">
            <iconSet iconSet="${cu.operator}">
                ${percentvalue}
            </iconSet>
        </cfRule>
    </conditionalFormatting>`);
                    }
                    else if (cu.type == "colorScale") {
                        return (cf +
                            `<conditionalFormatting sqref="${cu.start}:${cu.end}">
        <cfRule type="colorScale" priority="${cu.priority ? cu.priority : priorityCounter++}">
            <colorScale>
                <cfvo type="min"/>
                ${cu.operator == "percentile"
                                ? `<cfvo type="percentile" val="${cu.value}"/>`
                                : ""}
                <cfvo type="max"/>
                ${cu.colors && Array.isArray(cu.colors)
                                ? cu.colors.reduce((reColors, colorCu) => {
                                    return (reColors +
                                        `<color rgb="${(0, color_1.convertToHex)(colorCu, data.backend)}"/>`);
                                }, "")
                                : `<color rgb="FFF8696B"/>
                <color rgb="FFFFEB84"/>
                <color rgb="FF63BE7B"/>`}
            </colorScale>
        </cfRule>
    </conditionalFormatting>`);
                    }
                    else if (cu.type == "dataBar") {
                        return (cf +
                            `<conditionalFormatting sqref="${cu.start}:${cu.end}">
        <cfRule type="dataBar" priority="${cu.priority ? cu.priority : priorityCounter++}">
            <dataBar>
                <cfvo type="min"/>
                <cfvo type="max"/>
                ${cu.colors && Array.isArray(cu.colors)
                                ? cu.colors.reduce((reColors, colorCu) => {
                                    return (reColors +
                                        `<color rgb="${(0, color_1.convertToHex)(colorCu, data.backend)}"/>`);
                                }, "")
                                : `<color rgb="FF638EC6"/>`}
            </dataBar>
        </cfRule>
    </conditionalFormatting>`);
                    }
                    else {
                        return cf;
                    }
                }, "");
            }
            mapData["sheet" + (index + 1)] = {
                indexId: indexId + 1,
                key: "sheet" + (index + 1),
                sheetName: shName,
                sheetDataString,
                hasComment,
                drawersContent,
                cFDataString,
                drawersRels,
                hasImages,
                commentString,
                commentAuthor,
                shapeCommentRowCol,
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
                merges: mergesCellArray.length > 0
                    ? mergesCellArray.reduce((mResult, currRef) => {
                        return mResult + ' <mergeCell ref="' + currRef + '" />';
                    }, '<mergeCells count="' + mergesCellArray.length + '">') +
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
        // in _rels
        let relsFolder = zip.folder("_rels");
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
        let docPropsFolder = zip.folder("docProps");
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
            (selectedAdded
                ? '<bookViews><workbookView xWindow="3540" yWindow="1365" windowWidth="21600" windowHeight="11325" activeTab="' +
                    activeTabIndex +
                    '"/></bookViews>'
                : "") +
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
        let xl__relsFolder = xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.folder("_rels");
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
        let xl_themeFolder = xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.folder("theme");
        xl_themeFolder === null || xl_themeFolder === void 0 ? void 0 : xl_themeFolder.file("theme1.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
            '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>');
        // xl/worksheets
        let xl_worksheetsFolder = xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.folder("worksheets");
        let commentId = [];
        const xl_worksheets_relsFolder = xl_worksheetsFolder === null || xl_worksheetsFolder === void 0 ? void 0 : xl_worksheetsFolder.folder("_rels");
        let sheetDrawers = [];
        sheetKeys.forEach((k, iCo) => {
            const sh = mapData[k];
            let sheetRelContentStr = "";
            if (sh.hasImages) {
                const drawerName = "drawing" + (sheetDrawers.length + 1) + ".xml";
                sheetDrawers.push(drawerName);
                xl_drawingsFolder === null || xl_drawingsFolder === void 0 ? void 0 : xl_drawingsFolder.file(drawerName, '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
                    '<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing" ' +
                    ' xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" ' +
                    ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ' +
                    ' xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" ' +
                    ' xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex" ' +
                    ' xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex" ' +
                    ' xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" ' +
                    ' xmlns:dgm="http://schemas.openxmlformats.org/drawingml/2006/diagram" ' +
                    ' xmlns:x3Unk="http://schemas.microsoft.com/office/drawing/2010/slicer" ' +
                    ' xmlns:sle15="http://schemas.microsoft.com/office/drawing/2012/slicer">' +
                    sh.drawersContent +
                    "</xdr:wsDr>");
                xl_drawings_relsFolder === null || xl_drawings_relsFolder === void 0 ? void 0 : xl_drawings_relsFolder.file(drawerName + ".rels", sh.drawersRels.toString());
                sheetRelContentStr +=
                    '<Relationship Id="rId2" ' +
                        ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" ' +
                        ' Target="../drawings/' +
                        drawerName +
                        '" />';
            }
            if (sh.hasComment) {
                commentId.push(iCo + 1);
                let aurt = sh.commentAuthor;
                xlFolder === null || xlFolder === void 0 ? void 0 : xlFolder.file("comments" + (iCo + 1) + ".xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
                    '<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" ' +
                    ' xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" ' +
                    ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
                    "<authors>" +
                    (Array.isArray(aurt) && aurt.length > 0
                        ? aurt.reduce((res, currr) => res + "<author>" + currr + "</author>", "")
                        : "<author></author>") +
                    "</authors>" +
                    "<commentList>" +
                    sh.commentString +
                    "</commentList>" +
                    "</comments>");
                sheetRelContentStr +=
                    '<Relationship Id="rId1" ' +
                        'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments" ' +
                        'Target="../comments' +
                        (iCo + 1) +
                        '.xml" />' +
                        '<Relationship Id="rId3" ' +
                        'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing" ' +
                        'Target="../drawings/vmlDrawing' +
                        (iCo + 1) +
                        '.vml" />';
                xl_drawingsFolder === null || xl_drawingsFolder === void 0 ? void 0 : xl_drawingsFolder.file("vmlDrawing" + (iCo + 1) + ".vml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
                    '<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" ' +
                    'xmlns:v="urn:schemas-microsoft-com:vml" ' +
                    'xmlns:o="urn:schemas-microsoft-com:office:office" ' +
                    'xmlns:oa="urn:schemas-microsoft-com:office:activation" ' +
                    'xmlns:x="urn:schemas-microsoft-com:office:excel" ' +
                    'xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">' +
                    '  <o:shapelayout v:ext="edit">' +
                    '    <o:idmap v:ext="edit" data="1"/>' +
                    "  </o:shapelayout>" +
                    '  <v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202" ' +
                    '    path="m,l,21600r21600,l21600,xe">' +
                    '    <v:stroke joinstyle="miter"/>' +
                    '    <v:path gradientshapeok="t" o:connecttype="rect"/>' +
                    "  </v:shapetype>" +
                    sh.shapeCommentRowCol.reduce((res, curr) => {
                        return (res +
                            '<v:shape id="_x0000_s1025" type="#_x0000_t202" style=\'position:absolute;' +
                            "margin-left:77.25pt;margin-top:23.25pt;width:264pt;height:42.75pt;z-index:1;" +
                            'visibility:hidden\' fillcolor="#ffffe1">' +
                            '  <v:fill color2="#ffffe1"/>' +
                            '  <v:shadow on="t" color="black" obscured="t"/>' +
                            '  <v:path o:connecttype="none"/>' +
                            "  <v:textbox>" +
                            "   <div style='text-align:left'></div>" +
                            "  </v:textbox>" +
                            '  <x:ClientData ObjectType="Note">' +
                            "   <x:MoveWithCells/>" +
                            "   <x:SizeWithCells/>" +
                            "   <x:Anchor>" +
                            "    1, 15, 1, 10, 5, 15, 4, 4</x:Anchor>" +
                            "   <x:AutoFill>False</x:AutoFill>" +
                            "   <x:Row>" +
                            curr.row +
                            "</x:Row>" +
                            "   <x:Column>" +
                            curr.col +
                            "</x:Column>" +
                            "  </x:ClientData>" +
                            "</v:shape>");
                    }, "") +
                    "</xml>");
            }
            if (sh.hasImages || sh.hasComment) {
                xl_worksheets_relsFolder === null || xl_worksheets_relsFolder === void 0 ? void 0 : xl_worksheets_relsFolder.file("sheet" + (iCo + 1) + ".xml.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
                    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> ' +
                    sheetRelContentStr +
                    "</Relationships>");
            }
            xl_worksheetsFolder === null || xl_worksheetsFolder === void 0 ? void 0 : xl_worksheetsFolder.file(sh.key + ".xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"' +
                ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"' +
                ' xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main"' +
                ' xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing" ' +
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
                sh.cFDataString +
                (sh.hasImages ? '<drawing r:id="rId2" />' : "") +
                (sh.hasComment ? '<legacyDrawing r:id="rId3" />' : "") +
                "</worksheet>");
        });
        zip.file("[Content_Types].xml", (0, content_types_1.contentTypeGenerator)(sheetContentType, commentId, [...new Set(arrTypes)], sheetDrawers));
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
                    Promise.resolve().then(() => __importStar(require("file-saver"))).then((module) => {
                        const { saveAs } = module;
                        saveAs(content, (data.fileName ? data.fileName : "tableRecord") + ".xlsx");
                    });
                });
            }
        }
    });
}
exports.generateExcel = generateExcel;
//# sourceMappingURL=generate-excel.js.map