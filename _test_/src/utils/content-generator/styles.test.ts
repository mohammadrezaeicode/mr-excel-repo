import { describe, expect, test } from "@jest/globals";
import { styleGenerator } from "../../../../src/utils/content-generator/styles";
import { StyleMapper } from "../../../../src/data-model/excel-table";
let styleMap: StyleMapper = {
  border: {
    count: 2,
    value: "<border></border>",
  },
  cell: {
    count: 2,
    value: "<cell></cell>",
  },
  commentSyntax: {
    value: {},
  },
  conditionalFormatting: {
    count: 2,
    value: "<conditionalFormatting></conditionalFormatting>",
  },
  fill: {
    count: 2,
    value: "<fill></fill>",
  },
  font: {
    count: 2,
    value: "<font></font>",
  },
  format: {
    count: 2,
    value: "<format></format>",
  },
};

describe("styleGenerator function tests", () => {
  test("Type check", () => {
    expect(typeof styleGenerator).toBe("function");
  });
  test("test function", () => {
    expect(styleGenerator(styleMap, true)).toEqual(
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
        '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"' +
        ' xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"' +
        ' xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">' +
        '<numFmts count="2"><format></format></numFmts>' +
        '<fonts count="2">' +
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
        "</font><font></font></fonts>" +
        '<fills count="2">' +
        "<fill>" +
        '<patternFill patternType="none" />' +
        "</fill>" +
        "<fill>" +
        '<patternFill patternType="lightGray" />' +
        "</fill><fill></fill></fills>" +
        '<borders count="2">' +
        "<border /><border></border></borders>" +
        '<cellStyleXfs count="1">' +
        '<xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" />' +
        "</cellStyleXfs>" +
        '<cellXfs count="2">' +
        '<xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1"' +
        ' applyFont="1">' +
        '<alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" />' +
        "</xf>" +
        '<xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1"' +
        ' applyFont="1">' +
        '<alignment readingOrder="0" />' +
        "</xf><cell></cell></cellXfs>" +
        '<cellStyles count="1">' +
        '<cellStyle xfId="0" name="Normal" builtinId="0" />' +
        "</cellStyles> " +
        '<dxfs count="2" ><conditionalFormatting></conditionalFormatting></dxfs>' +
        "</styleSheet>"
    );
    expect(styleGenerator(styleMap, false)).toEqual(
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
        '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"' +
        ' xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"' +
        ' xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">' +
        '<numFmts count="2"><format></format></numFmts>' +
        '<fonts count="2">' +
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
        "</font><font></font></fonts>" +
        '<fills count="2">' +
        "<fill>" +
        '<patternFill patternType="none" />' +
        "</fill>" +
        "<fill>" +
        '<patternFill patternType="lightGray" />' +
        "</fill><fill></fill></fills>" +
        '<borders count="2">' +
        "<border /><border></border></borders>" +
        '<cellStyleXfs count="1">' +
        '<xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" />' +
        "</cellStyleXfs>" +
        '<cellXfs count="2">' +
        '<xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1"' +
        ' applyFont="1">' +
        '<alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" />' +
        "</xf>" +
        '<xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1"' +
        ' applyFont="1">' +
        '<alignment readingOrder="0" />' +
        "</xf><cell></cell></cellXfs>" +
        '<cellStyles count="1">' +
        '<cellStyle xfId="0" name="Normal" builtinId="0" />' +
        "</cellStyles> " +
        '<dxfs count="0" />' +
        "</styleSheet>"
    );
  });
});
