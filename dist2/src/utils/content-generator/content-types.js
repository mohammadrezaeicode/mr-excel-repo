"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentTypeGenerator = void 0;
function contentTypeGenerator(sheetContentType, commentId, arrTypes, sheetDrawers, checkboxForm, needCalcChain) {
    let typeCheck = {};
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
        '<Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" />' +
        '<Default Extension="xml" ContentType="application/xml" />' +
        "<Override" +
        ' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"' +
        ' PartName="/xl/workbook.xml" />' +
        '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"' +
        ' PartName="/xl/styles.xml" />' +
        '<Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml"' +
        ' PartName="/xl/theme/theme1.xml" />' +
        arrTypes.reduce((res, curr) => {
            curr = curr.toLowerCase();
            if (typeCheck[curr]) {
                return res;
            }
            if (curr == "svg") {
                typeCheck["png"] = true;
                typeCheck["svg"] = true;
                return (res +
                    '<Default Extension="png" ContentType="image/png"/>' +
                    '<Default Extension="svg" ContentType="image/svg+xml"/>');
            }
            else if (curr == "jpeg" || curr == "jpg") {
                typeCheck["jpeg"] = true;
                typeCheck["jpg"] = true;
                return (res + '<Default Extension="' + curr + '" ContentType="image/jpeg"/>');
            }
            else {
                typeCheck["curr"] = true;
                return (res +
                    '<Default Extension="' +
                    curr +
                    '" ContentType="image/' +
                    curr +
                    '"/>');
            }
        }, "") +
        commentId.reduce((res, curr) => {
            return (res +
                '<Override PartName="/xl/comments' +
                curr +
                '.xml"' +
                ' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />');
        }, "") +
        sheetContentType +
        "<Override" +
        ' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"' +
        ' PartName="/xl/sharedStrings.xml" />' +
        (needCalcChain
            ? '<Override PartName="/xl/calcChain.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml"/>'
            : "") +
        '<Override PartName="/docProps/core.xml" ' +
        ' ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' +
        sheetDrawers.reduce((res, cu) => {
            return (res +
                '<Override PartName="/xl/drawings/' +
                cu +
                '"' +
                ' ContentType="application/vnd.openxmlformats-officedocument.drawing+xml" />');
        }, "") +
        (checkboxForm.length > 0
            ? checkboxForm.reduce((res, curr, index) => {
                return (res +
                    '<Override PartName="/xl/ctrlProps/ctrlProp' +
                    (index + 1) +
                    '.xml" ContentType="application/vnd.ms-excel.controlproperties+xml"/>');
            }, "")
            : "") +
        '<Override PartName="/docProps/app.xml" ' +
        ' ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" />' +
        "</Types>");
}
exports.contentTypeGenerator = contentTypeGenerator;
//# sourceMappingURL=content-types.js.map