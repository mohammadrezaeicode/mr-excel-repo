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
function extractExcelData(uri, isBackend = false) {
    return __awaiter(this, void 0, void 0, function* () {
        let queueSheet = [];
        let nameMap = new Map();
        let sharedStrings = [];
        let sheetResultData = {};
        let seenShardString = false;
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
            }
            if (filename.indexOf("xl/worksheets/sheet") == 0) {
                let key = filename.substring(14, filename.lastIndexOf("."));
                if (nameMap.has(key)) {
                    key = nameMap.get(key);
                }
                sheetResultData[key] =
                    resultData;
            }
        }
        return yield fetch(uri)
            .then((res) => {
            if (res == null || res == undefined) {
                throw "response is null";
            }
            if (isBackend) {
                return res.arrayBuffer();
            }
            return res.blob();
        })
            .then((res) => __awaiter(this, void 0, void 0, function* () {
            let fileCounter = 0;
            return yield new Promise((resolve, reject) => {
                jszip_1.default.loadAsync(res).then(function (zip) {
                    const keys = Object.keys(zip.files);
                    fileCounter = keys.length;
                    let proxy = new Proxy({
                        counter: 0,
                        isNameSet: false,
                    }, {
                        set(obj, prop, value) {
                            if (prop === "isNameSet") {
                                obj.isNameSet = value;
                                return true;
                            }
                            if (typeof value !== "number") {
                                throw "value most be number";
                            }
                            obj.counter = value;
                            if (obj.isNameSet) {
                                if (obj.counter === fileCounter) {
                                    resolve({
                                        data: sheetResultData,
                                        sheetName: nameMap.entries(),
                                    });
                                }
                            }
                            return true;
                        },
                        get(target, prop, receiver) {
                            if (prop === "isNameSet") {
                                return target.isNameSet;
                            }
                            // By default, it looks like Reflect.get(target, prop, receiver)
                            // which has a different value of `this`
                            return target.counter;
                        },
                    });
                    keys.forEach(function (filename) {
                        zip.files[filename].async("string").then(function (fileData) {
                            if (filename.indexOf("sharedStrings") >= 0) {
                                let rows = fileData.match(/<si[\s\S\n]*?<\/si>/g);
                                if (Array.isArray(rows)) {
                                    rows.forEach((va) => {
                                        let t = va.match(/<t[\s\S\n]*?<\/t>/g);
                                        if (Array.isArray(t)) {
                                            let result = t.reduce((res, curr) => {
                                                return res + getValueWithinT(curr);
                                            }, "");
                                            sharedStrings.push(result);
                                        }
                                    });
                                }
                                seenShardString = true;
                                if (queueSheet.length > 0) {
                                    queueSheet.forEach((v) => {
                                        generateDataArray(v.filename, v.fileData);
                                    });
                                    queueSheet = [];
                                }
                            }
                            if (filename.indexOf("sheet") >= 0) {
                                if (seenShardString) {
                                    generateDataArray(filename, fileData);
                                }
                                else {
                                    queueSheet.push({
                                        filename,
                                        fileData,
                                    });
                                }
                            }
                            if (filename.indexOf("workbook") >= 0) {
                                const sheetsTag = fileData.replace(/(.*[\n\s\S]*)(<sheets[\n\s\S]*?sheets>)(.*[\n\s\S]*)/, "$2");
                                const sheets = sheetsTag.split("<sheet ").slice(1);
                                sheets.forEach((v, i) => {
                                    let name = "Sheet 1";
                                    if (v.indexOf("name=") > 0) {
                                        name = v.replace(/(.*[\n\s\S]*?)name="([^"]*)"(.*[\n\s\S]*)/, "$2");
                                    }
                                    let id = i + 1;
                                    if (v.indexOf("sheetId=") > 0) {
                                        id = Number(v.replace(/(.*[\n\s\S]*?)sheetId="([^"]*)"(.*[\n\s\S]*)/, "$2"));
                                        if (isNaN(id)) {
                                            id = i + 1;
                                        }
                                    }
                                    nameMap.set("sheet" + id, name);
                                });
                                proxy.isNameSet = true;
                            }
                            proxy.counter++;
                        });
                    });
                });
            });
        }))
            .catch((e) => {
            throw e;
        });
    });
}
exports.extractExcelData = extractExcelData;
//# sourceMappingURL=read-utils.js.map