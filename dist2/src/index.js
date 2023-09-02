"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sideBySideLineByLine = exports.convertTableToExcel = exports.generateExcel = void 0;
const create_excel_data_1 = require("./utils/create-excel-data");
const generate_excel_1 = require("./utils/generate-excel");
const side_by_side_1 = require("./utils/side-by-side");
exports.generateExcel = generate_excel_1.generateExcel;
function convertTableToExcel(queryForTable, table, keepStyle, rowHeightScaleFunction, colWidthScaleFunction) {
    const data = (0, create_excel_data_1.createExcelTabelBaseOnDomElement)(queryForTable, table, keepStyle, rowHeightScaleFunction, colWidthScaleFunction);
    return (0, exports.generateExcel)(data);
}
exports.convertTableToExcel = convertTableToExcel;
function sideBySideLineByLine(data) {
    const exData = (0, side_by_side_1.sideBySide)(data);
    return (0, exports.generateExcel)(exData);
}
exports.sideBySideLineByLine = sideBySideLineByLine;
//# sourceMappingURL=index.js.map