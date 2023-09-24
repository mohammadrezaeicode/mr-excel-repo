"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeGenerator = void 0;
const color_1 = require("../utils/color");
const colorHunt_json_1 = __importDefault(require("./colorHunt.json"));
function titleCase(value) {
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
        }
        else {
            result = value.replace(/_/g, " ").trim();
        }
    }
    else {
        result = value.replace(/([A-Z])/g, " $1").trim();
        result = result.charAt(0).toUpperCase() + result.substring(1).trim();
    }
    return result;
}
function createHeaderBaseOnObject(obj, filterKeys) {
    let keys = Object.keys(obj).filter((v) => !filterKeys.includes(v));
    let init = [];
    let headers = keys.reduce((res, cu) => {
        res.push({
            label: cu,
            text: titleCase(cu),
        });
        return res;
    }, init);
    return headers;
}
const themeGenerator = function (inputData, index, option, filterKeys = []) {
    let data;
    if (typeof inputData == "object" && Array.isArray(inputData)) {
        if (inputData.length > 0) {
            if (Array.isArray(inputData[0])) {
                let sheet = [];
                for (let index = 0; index < inputData.length; index++) {
                    const element = inputData[index];
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
            }
            else {
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
                }
                else {
                    data = {
                        sheet: [],
                    };
                }
            }
        }
        else {
            data = {
                sheet: [],
            };
        }
    }
    else {
        data = inputData;
    }
    if (index < colorHunt_json_1.default.length) {
        let rColorKey = ("color" +
            (option && option.rIndex
                ? option.rIndex
                : 4).toString());
        let hColorKey = ("color" +
            (option && option.hIndex
                ? option.hIndex
                : 1).toString());
        let huntColor = colorHunt_json_1.default[index];
        let hColor = huntColor[hColorKey];
        let rColor = huntColor[rColorKey];
        let hColorText;
        if (option === null || option === void 0 ? void 0 : option.hColor) {
            hColorText = option === null || option === void 0 ? void 0 : option.hColor;
        }
        else {
            hColorText =
                option && option.nColor
                    ? (0, color_1.hexToRgbNegative)(hColor)
                    : (0, color_1.generateContrastTextColor)(hColor);
        }
        let rColorText;
        if (option === null || option === void 0 ? void 0 : option.rColor) {
            rColorText = option === null || option === void 0 ? void 0 : option.rColor;
        }
        else {
            rColorText =
                option && option.nColor
                    ? (0, color_1.hexToRgbNegative)(rColor)
                    : (0, color_1.generateContrastTextColor)(rColor);
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
            data.sheet[index].styleCellCondition = function (data, object, colIndex, rowIndex, fromHeader, styleKeys) {
                if (fromHeader) {
                    return "themeStyleHeader";
                }
                else {
                    return "themeStyleBody";
                }
            };
        }
    }
    if (typeof (option === null || option === void 0 ? void 0 : option.fieName) == "string") {
        data.fileName = option.fieName;
    }
    return data;
};
exports.themeGenerator = themeGenerator;
//# sourceMappingURL=theme.js.map