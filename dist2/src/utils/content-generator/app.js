"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appGenerator = void 0;
function appGenerator(sheetLength, sheetNameApp) {
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
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
        sheetLength +
        "</vt:i4>" +
        "</vt:variant>" +
        "</vt:vector>" +
        "</HeadingPairs>" +
        "<TitlesOfParts>" +
        '<vt:vector size="' +
        sheetLength +
        '" baseType="lpstr">' +
        " " +
        sheetNameApp +
        "" +
        "</vt:vector>" +
        "</TitlesOfParts>" +
        "<Company></Company>" +
        "<LinksUpToDate>false</LinksUpToDate>" +
        "<SharedDoc>false</SharedDoc>" +
        "<HyperlinksChanged>false</HyperlinksChanged>" +
        "<AppVersion>16.0300</AppVersion>" +
        "</Properties>");
}
exports.appGenerator = appGenerator;
//# sourceMappingURL=app.js.map