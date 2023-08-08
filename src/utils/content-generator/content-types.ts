import { Formula } from "../../data-model/excel-table";

export function contentTypeGenerator(
  sheetContentType: string
) {
  return (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
    '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
    ' <Default ContentType="application/xml" Extension="xml" />' +
    ' <Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels" />' +
    sheetContentType +
    "" +
    "<Override" +
    ' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"' +
    ' PartName="/xl/sharedStrings.xml" />' +
    '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"' +
    ' PartName="/xl/styles.xml" />' +
    '<Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml"' +
    ' PartName="/xl/theme/theme1.xml" />' +
    "<Override" +
    ' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"' +
    ' PartName="/xl/workbook.xml" />' +
    ' <Override PartName="/docProps/core.xml" ' +
    ' ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' +
    ' <Override PartName="/docProps/app.xml" ' +
    ' ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" />' +
    "</Types>"
  );
}
