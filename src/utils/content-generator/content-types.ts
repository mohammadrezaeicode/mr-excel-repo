import { Formula } from "../../data-model/excel-table";

export function contentTypeGenerator(
  sheetContentType: string,
  commentId: number[]
) {
  return (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
    '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
    ' <Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
    ' <Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" />' +
    ' <Default Extension="xml" ContentType="application/xml" />' +
    "<Override" +
    ' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"' +
    ' PartName="/xl/workbook.xml" />' +
    '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"' +
    ' PartName="/xl/styles.xml" />' +
    '<Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml"' +
    ' PartName="/xl/theme/theme1.xml" />' +
    commentId.reduce((res, curr) => {
      return (
        res +
        `
    <Override PartName="/xl/comments${curr}.xml"
        ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />`
      );
    }, "") +
    sheetContentType +
    "<Override" +
    ' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"' +
    ' PartName="/xl/sharedStrings.xml" />' +
    ' <Override PartName="/docProps/core.xml" ' +
    ' ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' +
    ' <Override PartName="/docProps/app.xml" ' +
    ' ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" />' +
    "</Types>"
  );
}
