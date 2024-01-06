"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColRowBaseOnRefString = void 0;
const generate_column_name_1 = require("./generate-column-name");
function getColRowBaseOnRefString(refString, cols) {
    refString = refString.toUpperCase();
    let column = refString.replace(/[0-9]/g, "");
    if (column.length == 0) {
        throw "Invalid Column";
    }
    let row = parseInt(refString.substring(column.length));
    if (isNaN(row)) {
        throw "Invalid Row";
    }
    row = Math.max(0, row - 1);
    let colIndex = cols.indexOf(column);
    if (colIndex < 0) {
        cols = (0, generate_column_name_1.generateColumnName)(cols, Math.pow(10, column.length + 1), "");
        colIndex = cols.indexOf(column);
        if (colIndex < 0) {
            colIndex = 0;
        }
    }
    return {
        col: colIndex,
        row,
    };
}
exports.getColRowBaseOnRefString = getColRowBaseOnRefString;
//# sourceMappingURL=excel-util.js.map