import { describe, expect, test, jest } from "@jest/globals";
import { contentTypeGenerator } from "../../../../src/utils/content-generator/content-types";

describe("contentTypeGenerator function tests", () => {
  test("Type check", () => {
    expect(typeof contentTypeGenerator).toBe("function");
  });
  test("test data", () => {
    expect(
      contentTypeGenerator("sheetContentType", [], [], [], [], false, [])
    ).toBe(
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
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
        ' PartName="/xl/theme/theme1.xml" />sheetContentType' +
        "<Override" +
        ' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"' +
        ' PartName="/xl/sharedStrings.xml" />' +
        '<Override PartName="/docProps/core.xml" ' +
        ' ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' +
        '<Override PartName="/docProps/app.xml" ' +
        ' ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" />' +
        "</Types>"
    );
    expect(
      contentTypeGenerator(
        "sheetContentType",
        [1, 2, 3],
        ["svg", "png", "jpg", "jpeg", "gif", "iop"],
        ["drawing1.xml", "drawing2.xml"],
        ["x", "y"],
        true,
        []
      )
    ).toBe(
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
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
        '<Default Extension="png" ContentType="image/png"/>' +
        '<Default Extension="svg" ContentType="image/svg+xml"/>' +
        '<Default Extension="jpg" ContentType="image/jpeg"/>' +
        '<Default Extension="gif" ContentType="image/gif"/>' +
        '<Default Extension="iop" ContentType="image/iop"/>' +
        '<Override PartName="/xl/comments1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />' +
        '<Override PartName="/xl/comments2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />' +
        '<Override PartName="/xl/comments3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />' +
        "sheetContentType<Override" +
        ' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"' +
        ' PartName="/xl/sharedStrings.xml" />' +
        '<Override PartName="/xl/calcChain.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml"/>' +
        '<Override PartName="/docProps/core.xml" ' +
        ' ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' +
        '<Override PartName="/xl/drawings/drawing1.xml" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml" />' +
        '<Override PartName="/xl/drawings/drawing2.xml" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml" />' +
        '<Override PartName="/xl/ctrlProps/ctrlProp1.xml" ContentType="application/vnd.ms-excel.controlproperties+xml"/>' +
        '<Override PartName="/xl/ctrlProps/ctrlProp2.xml" ContentType="application/vnd.ms-excel.controlproperties+xml"/>' +
        '<Override PartName="/docProps/app.xml" ' +
        ' ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" />' +
        "</Types>"
    );
  });
});
