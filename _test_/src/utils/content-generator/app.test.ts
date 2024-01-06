import { describe, expect, test, jest } from "@jest/globals";
import { appGenerator } from "../../../../src/utils/content-generator/app";

describe("hexToRgbArray function tests", () => {
  test("Type should be function", () => {
    expect(typeof appGenerator).toBe("function");
  });
  test("test function", () => {
    const expectedResult =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"' +
      ' xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">' +
      "<Application>Microsoft Excel</Application>" +
      "<DocSecurity>0</DocSecurity>" +
      "<ScaleCrop>false</ScaleCrop>" +
      "<HeadingPairs>" +
      '<vt:vector size="2" baseType="variant">' +
      "<vt:variant>" +
      "<vt:lpstr>Worksheets</vt:lpstr>" +
      "</vt:variant>" +
      "<vt:variant>" +
      "<vt:i4>" +
      8 +
      "</vt:i4>" +
      "</vt:variant>" +
      "</vt:vector>" +
      "</HeadingPairs>" +
      "<TitlesOfParts>" +
      '<vt:vector size="' +
      8 +
      '" baseType="lpstr">' +
      " " +
      "XX" +
      "" +
      "</vt:vector>" +
      "</TitlesOfParts>" +
      "<Company></Company>" +
      "<LinksUpToDate>false</LinksUpToDate>" +
      "<SharedDoc>false</SharedDoc>" +
      "<HyperlinksChanged>false</HyperlinksChanged>" +
      "<AppVersion>16.0300</AppVersion>" +
      "</Properties>";
    expect(appGenerator(8, "XX")).toBe(expectedResult);
  });
});
