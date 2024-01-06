"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportedForTesting = exports.convertToHex = exports.rgbToHex = exports.hexToRgbNegative = exports.generateContrastTextColor = exports.hexToRgbArray = void 0;
function removeSpace(str) {
    return str.replace(/ /g, "");
}
function extendHexValue(hex) {
    hex = hex.replace(/^#/, "");
    if (hex.length == 3) {
        const s0 = hex.charAt(0);
        const s1 = hex.charAt(1);
        const s2 = hex.charAt(2);
        return s0 + s0 + s1 + s1 + s2 + s2;
    }
    else {
        return hex;
    }
}
function hexToRgbArray(hex) {
    if (/^#?([a-f\d]{3})$/i.test(hex)) {
        hex = extendHexValue(hex);
    }
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
        ]
        : [0, 0, 0];
}
exports.hexToRgbArray = hexToRgbArray;
function generateContrastTextColor(b) {
    const background = hexToRgbArray(b);
    if (background == null) {
        return;
    }
    // Calculate the perceived brightness (luminance) of the background color
    const bgLuminance = (0.299 * background[0] + 0.587 * background[1] + 0.114 * background[2]) /
        255;
    // Determine whether the text should be dark or light based on luminance
    const textColor = bgLuminance > 0.5 ? "rgb(0,0,0)" : "rgb(255,255,255)";
    return textColor;
}
exports.generateContrastTextColor = generateContrastTextColor;
function hexToRgbNegative(hex) {
    // /(^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$)|(^#?([a-f\d]{3})$)/i;
    if (/^#?([a-f\d]{3})$/i.test(hex)) {
        hex = extendHexValue(hex);
    }
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? "rgb(" +
            (255 - parseInt(result[1], 16)) +
            "," +
            (255 - parseInt(result[2], 16)) +
            "," +
            (255 - parseInt(result[3], 16)) +
            ")"
        : "rgb(0,0,0)";
}
exports.hexToRgbNegative = hexToRgbNegative;
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
    if ((spResult.length == 4 && spResult[3] == "0") ||
        (spResult.length != 3 && spResult.length != 4) ||
        !validate) {
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
            noSpace = noSpace.substring(4, noSpace.length - 1);
            fgConvertor = getComputedStyle(document.documentElement).getPropertyValue(noSpace);
        }
    }
    if (fgConvertor.indexOf("rgb") >= 0) {
        const rgb = rgbToHex(fgConvertor);
        fgConvertor = rgb ? rgb : "";
    }
    return fgConvertor.replace(/^#/, "");
}
exports.convertToHex = convertToHex;
exports.exportedForTesting = {
    removeSpace,
    valueToHex,
    extendHexValue,
};
//# sourceMappingURL=color.js.map