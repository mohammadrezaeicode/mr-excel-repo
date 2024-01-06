"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleGenerator = void 0;
function styleGenerator(styles, addCF) {
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
        '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"' +
        ' xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"' +
        ' xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">' +
        (styles.format.count > 0
            ? '<numFmts count="' +
                styles.format.count +
                '">' +
                styles.format.value +
                "</numFmts>"
            : "") +
        '<fonts count="' +
        styles.font.count +
        '">' +
        "<font>" +
        '<sz val="11" />' +
        '<color theme="1" />' +
        '<name val="Calibri" />' +
        '<family val="2" />' +
        '<scheme val="minor" />' +
        "</font>" +
        "<font>" +
        '<sz val="11" />' +
        '<color rgb="FFFF0000" />' +
        '<name val="Calibri" />' +
        '<family val="2" />' +
        '<scheme val="minor" />' +
        "</font>" +
        styles.font.value +
        "</fonts>" +
        '<fills count="' +
        styles.fill.count +
        '">' +
        "<fill>" +
        '<patternFill patternType="none" />' +
        "</fill>" +
        "<fill>" +
        '<patternFill patternType="lightGray" />' +
        "</fill>" +
        styles.fill.value +
        "</fills>" +
        '<borders count="' +
        styles.border.count +
        '">' +
        "<border />" +
        styles.border.value +
        "</borders>" +
        '<cellStyleXfs count="1">' +
        '<xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" />' +
        "</cellStyleXfs>" +
        '<cellXfs count="' +
        styles.cell.count +
        '">' +
        '<xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1"' +
        ' applyFont="1">' +
        '<alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" />' +
        "</xf>" +
        '<xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1"' +
        ' applyFont="1">' +
        '<alignment readingOrder="0" />' +
        "</xf>" +
        styles.cell.value +
        "</cellXfs>" +
        '<cellStyles count="1">' +
        '<cellStyle xfId="0" name="Normal" builtinId="0" />' +
        "</cellStyles> " +
        (addCF
            ? '<dxfs count="' +
                styles.conditionalFormatting.count +
                '" >' +
                styles.conditionalFormatting.value +
                "</dxfs>"
            : '<dxfs count="0" />') +
        "</styleSheet>");
}
exports.styleGenerator = styleGenerator;
//# sourceMappingURL=styles.js.map