"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToHex = exports.rgbToHex = void 0;
function removeSpace(str) {
    return str.replace(/ /g, "");
}
function valueToHex(c) {
    c = Number(c);
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(rgb) {
    rgb = removeSpace(rgb);
    let spResult = rgb.indexOf("rgba") >= 0
        ? rgb.substring(5, rgb.length - 1).split(",")
        : rgb.substring(4, rgb.length - 1).split(",");
    let validate = spResult.reduce((r, c) => {
        return r && !Number.isNaN(Number(c));
    }, true);
    if (spResult.length == 4 && spResult[3] == "0" && !validate) {
        return null;
    }
    return (valueToHex(spResult[0]) +
        valueToHex(spResult[1]) +
        valueToHex(spResult[2])).toUpperCase();
}
exports.rgbToHex = rgbToHex;
function convertToHex(fgConvertor, backend) {
    if (typeof fgConvertor == "undefined" || fgConvertor === null) {
        return null;
    }
    if (!backend) {
        let noSpace = removeSpace(fgConvertor);
        if (noSpace.indexOf("var(") == 0 &&
            noSpace.lastIndexOf(")") == noSpace.length - 1) {
            console.log("in");
            noSpace = noSpace.substring(4, noSpace.length - 1);
            fgConvertor = getComputedStyle(document.documentElement).getPropertyValue(noSpace);
        }
    }
    if (fgConvertor.indexOf("rgb") >= 0) {
        const rgb = rgbToHex(fgConvertor);
        fgConvertor = rgb ? rgb : "";
    }
    return fgConvertor;
}
exports.convertToHex = convertToHex;
//# sourceMappingURL=color.js.map