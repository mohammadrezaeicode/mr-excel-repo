"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCellRowCol = void 0;
function generateCellRowCol(string, formula, styles) {
    let column = string.replace(/[0-9]/g, "");
    let row = parseInt(string.substr(column.length));
    let cell = '<c r="' +
        string +
        '" ' +
        (styles && typeof formula.styleId === "string" && styles[formula.styleId]
            ? 's="' + styles[formula.styleId].index + '" '
            : "") +
        "> " +
        "    <f>" +
        formula.type +
        "(" +
        formula.start +
        ":" +
        formula.end +
        ")</f> " +
        "</c>";
    return {
        column,
        row,
        cell,
    };
}
exports.generateCellRowCol = generateCellRowCol;
//# sourceMappingURL=generate-formula-cell.js.map