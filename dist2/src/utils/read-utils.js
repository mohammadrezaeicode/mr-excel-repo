"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractExcelData = void 0;
function hasTBeforeV(element) {
    // Use regular expression to find 't="s"' before <v>
    const regex = /t="s".*?<v/;
    return regex.test(element);
}
function getValueWithinT(element) {
    // Use regular expression to extract the content between <v> and </v>
    const regex = /<t.*?>(.*?)<\/t>/;
    const match = element.match(regex);
    if (match) {
        return match[1]; // Extracted value
    }
    return null; // Return null if <v> tag is not found
}
function getValueWithinV(element) {
    // Use regular expression to extract the content between <v> and </v>
    const regex = /<v.*?>(.*?)<\/v>/;
    const match = element.match(regex);
    if (match) {
        return match[1]; // Extracted value
    }
    return null; // Return null if <v> tag is not found
}
function getRValue(element) {
    // Use regular expression to extract the 'r' attribute value
    const regex = /r="(.*?)"/;
    const match = element.match(regex);
    if (match) {
        return match[1]; // Extracted 'r' value
    }
    return null; // Return null if 'r' attribute is not found
}
const jszip_1 = __importDefault(require("jszip"));
const const_data_1 = require("./content-generator/const-data");
const excel_util_1 = require("./excel-util");
function extractExcelData(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        let queueSheet = [];
        let sharedStrings = [];
        let sheetResultData = {};
        let seenSheerdString = false;
        function generateDataArray(filename, fileData) {
            let resultData = [];
            let rows = fileData.match(/<c[\s\S\n]*?<\/c>/g);
            if (Array.isArray(rows)) {
                rows.forEach((v) => {
                    let value = getValueWithinV(v);
                    if (hasTBeforeV(v) && value) {
                        value = sharedStrings[parseInt(value)];
                    }
                    const rValue = getRValue(v);
                    let rC = (0, excel_util_1.getColRowBaseOnRefString)(rValue, const_data_1.cols);
                    if (typeof resultData[rC.row] == "undefined") {
                        resultData[rC.row] = [];
                    }
                    resultData[rC.row][rC.col] = value;
                });
                console.log(resultData);
            }
            sheetResultData[filename] = resultData;
        }
        return yield fetch(uri)
            .then((res) => {
            console.log(res);
            return res.blob();
        })
            .then((res) => __awaiter(this, void 0, void 0, function* () {
            return yield jszip_1.default.loadAsync(res).then(function (zip) {
                Object.keys(zip.files).forEach(function (filename) {
                    zip.files[filename].async("string").then(function (fileData) {
                        if (filename.indexOf("sharedStrings") >= 0) {
                            let rows = fileData.match(/<si[\s\S\n]*?<\/si>/g);
                            if (Array.isArray(rows)) {
                                rows.forEach((va) => {
                                    let t = va.match(/<t[\s\S\n]*?<\/t>/g);
                                    if (Array.isArray(t)) {
                                        let result = t.reduce((res, curr) => {
                                            // console.log(curr)
                                            return res + getValueWithinT(curr);
                                        }, "");
                                        sharedStrings.push(result);
                                    }
                                });
                            }
                            seenSheerdString = true;
                            if (queueSheet.length > 0) {
                                queueSheet.forEach((v) => {
                                    generateDataArray(v.filename, v.fileData);
                                });
                                queueSheet = [];
                            }
                            // console.log(sharedStrings)
                        }
                        if (filename.indexOf("sheet") >= 0) {
                            if (seenSheerdString) {
                                generateDataArray(filename, fileData);
                            }
                            else {
                                queueSheet.push({
                                    filename,
                                    fileData,
                                });
                            }
                        }
                    });
                });
                return "done";
            });
        }));
    });
}
exports.extractExcelData = extractExcelData;
//# sourceMappingURL=read-utils.js.map