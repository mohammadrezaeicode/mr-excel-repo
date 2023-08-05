import JSZip from "jszip";
import { AlignmentOptionKey, ExcelTable, ProtectionOptionKey } from "./data-model/excel-table";
import { generateColumnName } from "./utils/generate-column-name";
import { saveAs } from "file-saver";
import { styleGenerator } from "./utils/content-generator/styles";
import { contentTypeGenerator } from "./utils/content-generator/content-types";
import { appGenerator } from "./utils/content-generator/app";
export function ExcelTable(data: ExcelTable) {
  let cols = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  if (data.numberOfColumn && data.numberOfColumn > 25) {
    cols = generateColumnName(cols, data.numberOfColumn);
  }
  var zip = new JSZip();
  const sheetLength = data.sheet.length;
  // xl
  var xlFolder = zip.folder("xl");
  const styleKeys = Object.keys(data.styles ? data.styles : {});
  let styleMapper = styleKeys.reduce(
    (res, cur, index) => {
      const styl = data.styles![cur];
      const indexes = {
        fillIndex: 0,
        fontIndex: 0,
        applyFill: 0,
      };
      
                let alignmentWithNewStyle = false;
      if (styl.fg) {
        indexes.fillIndex = res.fill.count;
        res.fill.count++;
        res.fill.value =
          res.fill.value +
          "<fill>" +
          '<patternFill patternType="solid">' +
          (styl.fg
            ? '<fgColor rgb="' + styl.fg.replace("#", "") + '" />'
            : "") +
          "</patternFill>" +
          "</fill>";
      }
      if (styl.fontColor || styl.fontFamily || styl.size) {
        indexes.fontIndex = res.font.count;
        res.font.count++;
        res.font.value =
          res.font.value +
          "<font>" +
          (styl.size ? '<sz val="' + styl.size + '" />' : "") +
          (styl.fontColor
            ? '<color rgb="' + styl.fontColor.replace("#", "") + '" />'
            : "") +
          (styl.fontFamily ? '<name val="' + styl.fontFamily + '" />' : "") +
          "</font>";
      }
       let endPart = "/>";
       if (styl.alignment) {
         endPart =
           ' applyAlignment="1">' +
           "<alignment " +
           Object.keys(styl.alignment).reduce((al, alignmentOption) => {
             return (
               al +
               " " +
               alignmentOption +
               '="' +
               styl.alignment![alignmentOption! as AlignmentOptionKey] +
               '" '
             );
           }, "") +
           " />" +
           "</xf>";
       }

       res.cell.value =
         res.cell.value +
         '<xf numFmtId="0" fontId="' +
         indexes.fontIndex +
         '" fillId="' +
         indexes.fillIndex +
         '" borderId="0" xfId="0" ' +
         (indexes.fillIndex > 0 ? 'applyFill="1" ' : "") +
         (indexes.fontIndex >= 0 ? 'applyFont="1" ' : "") +
         endPart;
      data.styles![cur].index = res.cell.count;
      res.cell.count++;
      return res;
    },
    {
      fill: {
        count: 2,
        value: "",
      },
      font: {
        count: 2,
        value: "",
      },
      cell: {
        count: 2,
        value: "",
      },
    }
  );

  xlFolder?.file("styles.xml", styleGenerator(styleMapper));

  var sheetContentType =
    '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let sharedString = "";
  let sharedStringIndex = 0;
  let workbookString = "";
  let workbookRelString = "";
  let sharedStringMap: {
    [key: string]: string;
  } = {};
  const mapData: {
    [k: string]: {
      [k2: string]: string | number;
    };
  } = {};
  let sheetNameApp = "";
  let indexId = 4;
  let selectedAdded = false;

  for (let index = 0; index < sheetLength; index++) {
    let rowCount = 1;
    let sheetDataString = "";
    let sheetSizeString = "";
    let objKey: string[] = [];
    const sheetData = data.sheet[index];
    if (Array.isArray(sheetData.headers) && sheetData.headers.length) {
      sheetData.headers.forEach((v, innerIndex) => {
        if (v.size && v.size > 0) {
          sheetSizeString +=
            '<col min="' +
            innerIndex +
            '" max="' +
            innerIndex +
            '" width="' +
            v.size +
            '" customWidth="1" />';
        }
        sheetDataString +=
          '<c r="' +
          cols[innerIndex] +
          rowCount +
          '" t="s"><v>' +
          sharedStringIndex +
          "</v></c>";
        objKey.push(v.label);
        sharedString += "<si><t>" + v.text + "</t></si>";
        sharedStringMap[v.text] = v.text;
        sharedStringIndex++;
      });
      const colsLength = cols.length;
      sheetDataString =
        '<row r="' +
        rowCount +
        '" spans="1:' +
        colsLength +
        '" ' +
        (sheetData.headerHeight
          ? 'ht="' + sheetData.headerHeight + '" customHeight="1"'
          : "") +
        (sheetData.headerRowOption
          ? Object.keys(sheetData.headerRowOption).reduce((res, curr) => {
              return (
                res + " " + curr + '="' + sheetData.headerRowOption[curr] + '" '
              );
            }, "  ")
          : "") +
        ">" +
        sheetDataString +
        "</row>";
      rowCount++;
      if (Array.isArray(sheetData.data)) {
        let hasFurmul = data.formula?.useFormula;
        let cc = "";
        let cr = -1;
        if (data.formula && hasFurmul) {
          let cellColumn = data.formula.cell.replace(/[0-9]/g, "");
          let cellRow = parseInt(data.formula.cell.substr(cellColumn!.length));
          console.log(cellColumn, cellRow);
          cc = cellColumn;
          cr = cellRow;
        }
        const keyOutline =
          data.mapSheetDataOption && data.mapSheetDataOption.outlineLevel
            ? data.mapSheetDataOption.outlineLevel
            : "outlineLevel";
        const keyHidden =
          data.mapSheetDataOption && data.mapSheetDataOption.hidden
            ? data.mapSheetDataOption.hidden
            : "hidden";
        const keyHeight =
          data.mapSheetDataOption && data.mapSheetDataOption.height
            ? data.mapSheetDataOption.height
            : "height";
        sheetData.data.forEach((mData, innerIndex) => {
          const rowStyle = mData.rowStyle;
          sheetDataString +=
            '<row r="' +
            rowCount +
            '" spans="1:' +
            colsLength +
            '" ' +
            (keyHeight in mData
              ? 'ht="' + mData[keyHeight] + '" customHeight="1"'
              : "") +
            (keyOutline in mData
              ? ' outlineLevel="' + mData[keyOutline] + '"'
              : "") +
            (keyHidden in mData ? ' hidden="' + mData[keyHidden] + '"' : "") +
            " >";
          objKey.forEach((key, keyIndex) => {
            const dataEl = mData[key];
            if (typeof dataEl != "undefined") {
              if (typeof dataEl == "string") {
                sheetDataString +=
                  '<c r="' +
                  cols[keyIndex] +
                  rowCount +
                  '" t="s" ' +
                  (rowStyle ? 's="' + data.styles![rowStyle].index + '"' : "") +
                  "><v>" +
                  sharedStringIndex +
                  "</v></c>";
                sharedString += "<si><t>" + dataEl + "</t></si>";
                sharedStringMap[dataEl] = dataEl;
                sharedStringIndex++;
              } else {
                sheetDataString +=
                  '<c r="' +
                  cols[keyIndex] +
                  rowCount +
                  '" ' +
                  (rowStyle ? 's="' + data.styles![rowStyle].index + '"' : "") +
                  "><v>" +
                  dataEl +
                  "</v></c>";
              }
            }
          });
          if (cr == rowCount) {
            hasFurmul = false;
            sheetDataString +=
              '<c r="' +
              cc +
              rowCount +
              '"><f>' +
              data.formula?.type +
              "(" +
              data.formula?.start +
              ":" +
              data.formula?.end +
              ")</f></c>";
          }

          rowCount++;
          sheetDataString += "</row>";
        });

        if (data.formula && hasFurmul) {
          sheetDataString +=
            '<row r="' +
            cr +
            '" ' +
            ("height" in data.formula
              ? 'ht="' + data.formula.height + '" customHeight="1"'
              : "") +
            ">" +
            '<c r="' +
            cc +
            cr +
            '" ' +
            ("styleId" in data.formula
              ? 's="' + data.styles![data.formula.styleId].index + '"'
              : "") +
            "><f>" +
            data.formula.type +
            "(" +
            data.formula.start +
            ":" +
            data.formula.end +
            ")</f></c>" +
            "</row>";
        }
      }
    }

    if (index > 0) {
      sheetContentType +=
        "<Override" +
        '    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"' +
        '    PartName="/xl/worksheets/sheet' +
        (index + 1) +
        '.xml" />';
    }
    const shName = sheetData.name ? sheetData.name : "sheet" + (index + 1);
    const shState = sheetData.state ? sheetData.state : "visible";
    workbookString +=
      '<sheet state="' +
      shState +
      '" name="' +
      shName +
      '" sheetId="' +
      (index + 1) +
      '" r:id="rId' +
      (indexId + 1) +
      '" />';
    workbookRelString +=
      '<Relationship Id="rId' +
      (indexId + 1) +
      '"' +
      ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"' +
      ' Target="worksheets/sheet' +
      (index + 1) +
      '.xml" />';
    sheetNameApp += "<vt:lpstr>" + ("sheet" + (index + 1)) + "</vt:lpstr>";
    selectedAdded = selectedAdded || !!sheetData.selected;
    mapData["sheet" + (index + 1)] = {
      indexId: indexId + 1,
      key: "sheet" + (index + 1),
      sheetName: shName,
      sheetDataString,
      sheetSizeString:
        sheetSizeString.length > 0
          ? "<cols>" + sheetSizeString + "</cols>"
          : "",
      protectionOption: sheetData.protectionOption
        ? Object.keys(sheetData.protectionOption).reduce((res, cu) => {
            return (
              res +' '+
              cu +
              '="' +
              sheetData.protectionOption![cu as ProtectionOptionKey] +
              '" '
            );
          }, "<sheetProtection ") + "/>"
        : "",
      selectedView: sheetData.selected
        ? "<sheetViews>" +
          '<sheetView tabSelected="1" workbookViewId="0">' +
          '<selection activeCell="A0" sqref="A0" />' +
          "</sheetView>" +
          "</sheetViews>"
        : "<sheetViews>" + '<sheetView workbookViewId="0" />' + "</sheetViews>",
      tabColor: sheetData.tabColor
        ? '<sheetPr codeName="' +
          ("Sheet" + (index + 1)) +
          '">' +
          '<tabColor rgb="' +
          sheetData.tabColor.replace("#", "") +
          '" />' +
          "</sheetPr>"
        : "<sheetPr>" +
          '<outlinePr summaryBelow="0" summaryRight="0" />' +
          "</sheetPr>",
    };
    indexId++;
  }

  let sheetKeys = Object.keys(mapData);
  zip.file(
    "[Content_Types].xml",
    contentTypeGenerator(sheetContentType, data.formula)
  );
  // in _rels
  var relsFolder = zip.folder("_rels");
  relsFolder?.file(
    ".rels",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      ' <Relationship Id="rId1"' +
      ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"' +
      ' Target="xl/workbook.xml" />' +
      "</Relationships>"
  );

  var docPropsFolder = zip.folder("docProps");
  docPropsFolder?.file(
    "core.xml",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" ' +
      'xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" ' +
      'xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
      " <dc:creator>" +
      data.creator +
      "</dc:creator>" +
      " <cp:lastModifiedBy>" +
      data.lastModifiedBy +
      "</cp:lastModifiedBy>" +
      ' <dcterms:created xsi:type="dcterms:W3CDTF">' +
      data.created +
      "</dcterms:created>" +
      ' <dcterms:modified xsi:type="dcterms:W3CDTF">' +
      data.modified +
      "</dcterms:modified>" +
      "</cp:coreProperties>"
  );
  docPropsFolder?.file("app.xml", appGenerator(sheetLength, sheetNameApp));

  //xl
  xlFolder?.file(
    "workbook.xml",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"' +
      ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"' +
      ' xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main"' +
      ' xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"' +
      ' xmlns:mv="urn:schemas-microsoft-com:mac:vml"' +
      ' xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"' +
      ' xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"' +
      ' xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"' +
      ' xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">' +
      " <workbookPr />" +
      " <sheets>" +
      "  " +
      workbookString +
      "" +
      " </sheets>" +
      " <definedNames />" +
      " <calcPr />" +
      "</workbook>"
  );
  xlFolder?.file(
    "sharedStrings.xml",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' +
      (sharedStringIndex - 1) +
      '" uniqueCount="' +
      Object.keys(sharedStringMap).length +
      '">' +
      " " +
      sharedString +
      "" +
      "</sst>"
  );

  //xl/_rels

  var xl__relsFolder = xlFolder?.folder("_rels");
  xl__relsFolder?.file(
    "workbook.xml.rels",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      ' <Relationship Id="rId1"' +
      ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"' +
      ' Target="theme/theme1.xml" />' +
      ' <Relationship Id="rId2"' +
      ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"' +
      ' Target="styles.xml" />' +
      ' <Relationship Id="rId3"' +
      ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"' +
      ' Target="sharedStrings.xml" />' +
      " " +
      workbookRelString +
      "" +
      " " +
      (data.formula?.useFormula && false
        ? '<Relationship Id="rId' +
          indexId +
          '"' +
          ' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain"' +
          ' Target="calcChain.xml" />'
        : "") +
      "" +
      "</Relationships>"
  );

  //xl/theme
  var xl_themeFolder = xlFolder?.folder("theme");
  xl_themeFolder?.file(
    "theme1.xml",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>'
  );

  // xl/worksheets
  var xl_worksheetsFolder = xlFolder?.folder("worksheets");
  sheetKeys.forEach((k) => {
    const sh = mapData[k];
    xl_worksheetsFolder?.file(
      sh.key + ".xml",
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"' +
        ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"' +
        ' xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main"' +
        ' xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"' +
        ' xmlns:mv="urn:schemas-microsoft-com:mac:vml"' +
        ' xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"' +
        ' xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"' +
        ' xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"' +
        ' xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">' +
        sh.tabColor +
        sh.selectedView +
        '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' +
        sh.sheetSizeString +
        "<sheetData>" +
        sh.sheetDataString +
        "</sheetData>" +
        sh.protectionOption +
        "</worksheet>"
    );
  });
  zip.generateAsync({ type: "blob" }).then(function (content) {
    // see FileSaver.js
    saveAs(content, "Excel_File.xlsx");
  });
}
