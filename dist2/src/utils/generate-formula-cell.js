"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCellRowCol = void 0;
function generateCellRowCol(string, formula, sheetIndex, styles) {
    let cell = "";
    if (formula.formula) {
        let form = formula;
        let formulaStr = form.formula.indexOf("=") == 0 ? form.formula.substring(1) : form.formula;
        let moltiInsertCell = string.indexOf(":") > 0;
        let ref = form.refrenceCells ? form.refrenceCells : string;
        let startRef = moltiInsertCell
            ? string.substring(0, string.indexOf(":"))
            : string;
        let column = startRef.replace(/[0-9]/g, "");
        let row = parseInt(string.substr(column.length));
        let returnType = form.returnType
            ? form.returnType
            : form.isArray || moltiInsertCell
                ? ' t="str"'
                : "";
        let style = "styleId" in form ? ' s="' + styles[form.styleId].index + '"' : "";
        let arrayStr = form.isArray || moltiInsertCell ? '  t="array" ref="' + ref + '"' : "";
        cell =
            '<c r="' +
                startRef +
                '"' +
                style +
                returnType +
                "><f" +
                arrayStr +
                ">" +
                formulaStr +
                "</f></c>";
        return {
            column,
            row,
            needCalcChain: false,
            isCustom: true,
            cell,
        };
    }
    let column = string.replace(/[0-9]/g, "");
    let row = parseInt(string.substr(column.length));
    let needCalcChain = false;
    let chainCell = "";
    if (formula.noArgType) {
        const form = formula;
        if (form.noArgType == "NOW" || form.noArgType == "TODAY") {
            const styleString = "styleId" in form ? 's="' + styles[form.styleId].index + '"' : "";
            cell =
                '<c r="' +
                    string +
                    '" ' +
                    styleString +
                    "><f>" +
                    form.noArgType +
                    "()</f></c>";
        }
        else {
            let value = "NOW()";
            const styleString = "styleId" in form ? 's="' + styles[form.styleId].index + '"' : "";
            cell =
                '<c r="' +
                    string +
                    '" ' +
                    styleString +
                    "><f>" +
                    form.noArgType.substring(4) +
                    "(" +
                    value +
                    ")</f></c>";
        }
        chainCell = '<c r="' + string + '" i="' + sheetIndex + '"/>';
        needCalcChain = true;
    }
    else if (formula.refrenceCell) {
        const form = formula;
        let value = "";
        if (typeof form.value != "undefined") {
            value = "," + form.value;
        }
        let className = "";
        if (form.type == "COT") {
            className = "_xlfn.";
        }
        const styleString = "styleId" in form ? 's="' + styles[form.styleId].index + '"' : "";
        cell =
            '<c r="' +
                string +
                '" ' +
                styleString +
                "><f>" +
                className +
                form.type +
                "(" +
                form.refrenceCell +
                value +
                ")</f></c>";
        chainCell = '<c r="' + string + '" i="' + sheetIndex + '"/>';
        needCalcChain = true;
    }
    else {
        const form = formula;
        cell =
            '<c r="' +
                string +
                '" ' +
                (styles && typeof form.styleId === "string" && styles[form.styleId]
                    ? 's="' + styles[form.styleId].index + '" '
                    : "") +
                "> " +
                "    <f>" +
                form.type +
                "(" +
                form.start +
                ":" +
                form.end +
                ")</f> " +
                "</c>";
    }
    return {
        column,
        row,
        cell,
        needCalcChain,
        chainCell,
    };
}
exports.generateCellRowCol = generateCellRowCol;
//# sourceMappingURL=generate-formula-cell.js.map