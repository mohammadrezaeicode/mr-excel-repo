import { Formula } from "../../data-model/excel-table";

export function contentTypeGenerator(
  sheetContentType: string,
  formula?: Formula
) {
  return (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
    '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
    ' <Default ContentType="application/xml" Extension="xml" />' +
    ' <Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels" />' +
    sheetContentType +
    "" +
    (formula?.useFormula && false
      ? '<Override PartName="/xl/calcChain.xml"' +
        ' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml"/>'
      : "") +
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
    "</Types>"
  );
}
