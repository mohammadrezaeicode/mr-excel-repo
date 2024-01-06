"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateColumnName = void 0;
function generateColumnName(cols, num, startLetter = "", result = [], nextIndex = -1) {
    const length = cols.length;
    for (let index = 0; index < length; index++) {
        result.push(startLetter + cols[index]);
    }
    if (num < result.length) {
        return result;
    }
    else {
        return generateColumnName(cols, num, result[nextIndex + 1], result, nextIndex + 1);
    }
}
exports.generateColumnName = generateColumnName;
//# sourceMappingURL=generate-column-name.js.map