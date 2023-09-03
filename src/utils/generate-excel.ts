import {
  AlignmentOptionKey,
  ExcelTable,
  FormatMap,
  Formula,
  MergeRowConditionMap,
  ProtectionOptionKey,
  StyleMapper,
} from "../data-model/excel-table";
import { generateColumnName } from "../utils/generate-column-name";

import { styleGenerator } from "../utils/content-generator/styles";
import { contentTypeGenerator } from "../utils/content-generator/content-types";
import { appGenerator } from "../utils/content-generator/app";
import { generateCellRowCol } from "../utils/generate-formula-cell";
import { convertToHex } from "../utils/color";
import {
  commentConvertor,
  defaultCellCommentStyle,
  generateCommentTag,
} from "../utils/comment";
import { generateMultiStyleValue } from "../utils/multi-value";
import {
  cols as colsDef,
  formatMap,
} from "../utils/content-generator/const-data";
export async function generateExcel(data: ExcelTable) {
  let cols: string[] = [...colsDef];
  if (data.numberOfColumn && data.numberOfColumn > 25) {
    cols = generateColumnName(cols, data.numberOfColumn);
  }
  const module = await import("jszip");
  const JSZip = module.default;
  var zip = new JSZip();
  const sheetLength = data.sheet.length;
  // xl
  var xlFolder = zip.folder("xl");
  if (!data.styles) {
    data.styles = {};
  }
  if (data.addDefaultTitleStyle) {
    data.styles["titleStyle"] = {
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
    };
  }
  const styleKeys = Object.keys(data.styles);
  const defaultCommentStyle = defaultCellCommentStyle;
  let styleMapper: StyleMapper = styleKeys.reduce(
    (res: StyleMapper, cur, index) => {
      const styl = data.styles![cur];
      const indexes = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0,
      };
      if (styl.fg) {
        let fgConvertor = convertToHex(styl.fg, data.backend);
        indexes.fillIndex = res.fill.count;
        res.fill.count++;
        res.fill.value =
          res.fill.value +
          "<fill>" +
          '<patternFill patternType="solid">' +
          (fgConvertor
            ? '<fgColor rgb="' + fgConvertor.replace("#", "") + '" />'
            : "") +
          "</patternFill>" +
          "</fill>";
      }
      if (
        styl.fontColor ||
        styl.fontFamily ||
        styl.size ||
        styl.bold ||
        styl.italic ||
        styl.underline ||
        styl.doubleUnderline
      ) {
        const colors = convertToHex(styl.fontColor, data.backend);

        indexes.fontIndex = res.font.count;
        res.font.count++;
        res.font.value =
          res.font.value +
          "<font>" +
          (styl.bold ? "<b/>" : "") +
          (styl.italic ? "<i />" : "") +
          `${
            styl.underline || styl.doubleUnderline
              ? `<u ${styl.doubleUnderline ? ' val="double" ' : ""}/>`
              : ""
          }` +
          (styl.size ? '<sz val="' + styl.size + '" />' : "") +
          (colors ? '<color rgb="' + colors.replace("#", "") + '" />' : "") +
          (styl.fontFamily ? '<name val="' + styl.fontFamily + '" />' : "") +
          "</font>";
        res.commentSintax.value[cur] = `<rPr>
            ${styl.bold ? `<b/>` : ""}
            ${styl.italic ? `<i />` : ""}
            ${
              styl.underline || styl.doubleUnderline
                ? `<u ${styl.doubleUnderline ? ' val="double" ' : ""}/>`
                : ""
            }
            <sz val="${styl.size ? `${styl.size}` : "9"}" />
            ${colors ? `<color rgb="${colors.replace("#", "")}" />` : ""}
            <rFont val="${styl.fontFamily ? `${styl.fontFamily}` : "Tahoma"}" />
        </rPr>
        `;
      }
      let endPart = "/>";
      if (styl.alignment) {
        if (styl.alignment.rtl) {
          styl.alignment["readingOrder"] = 2;
        }
        delete styl.alignment.rtl;
        if (styl.alignment.ltr) {
          styl.alignment["readingOrder"] = 1;
        }
        delete styl.alignment.ltr;
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
      const borderObj = styl.border;
      let borderStr = "";
      if (typeof borderObj == "object") {
        if (borderObj.left || borderObj.full) {
          borderStr +=
            '<left style="' +
            (borderObj.left || borderObj.full)!.style +
            '">' +
            '<color rgb="' +
            convertToHex(
              (borderObj.left || borderObj.full)!.color,
              data.backend
            )!.replace("#", "") +
            '" />' +
            "</left>";
        }
        if (borderObj.right || borderObj.full) {
          borderStr +=
            '<right style="' +
            (borderObj.right || borderObj.full)!.style +
            '">' +
            '<color rgb="' +
            convertToHex(
              (borderObj.right || borderObj.full)!.color,
              data.backend
            )!.replace("#", "") +
            '" />' +
            "</right>";
        }
        if (borderObj.top || borderObj.full) {
          borderStr +=
            '<top style="' +
            (borderObj.top || borderObj.full)!.style +
            '">' +
            '<color rgb="' +
            convertToHex(
              (borderObj.top || borderObj.full)!.color,
              data.backend
            )!.replace("#", "") +
            '" />' +
            "</top>";
        }
        if (borderObj.bottom || borderObj.full) {
          borderStr +=
            '<bottom style="' +
            (borderObj.bottom || borderObj.full)!.style +
            '">' +
            '<color rgb="' +
            convertToHex(
              (borderObj.bottom || borderObj.full)!.color,
              data.backend
            )!.replace("#", "") +
            '" />' +
            "</bottom>";
        }
        indexes.borderIndex = res.border.count;
        res.border.count++;
        res.border.value +=
          "<border>" + borderStr + "<diagonal />" + "</border>";
      }
      if (styl.format) {
        const format = formatMap[styl.format];
        if (format) {
          indexes.formatIndex = format.key;
          if ("value" in format) {
            res.format.count++;
            res.format.value += format.value;
          }
        }
      }
      res.cell.value =
        res.cell.value +
        '<xf numFmtId="' +
        indexes.formatIndex +
        '"' +
        ' fontId="' +
        indexes.fontIndex +
        '" fillId="' +
        indexes.fillIndex +
        '" borderId="' +
        indexes.borderIndex +
        '" xfId="0"' +
        (indexes.borderIndex > 0 ? ' applyBorder="1" ' : "") +
        (indexes.fillIndex > 0 ? ' applyFill="1" ' : "") +
        (indexes.fontIndex >= 0 ? ' applyFont="1" ' : "") +
        (indexes.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") +
        endPart;
      data.styles![cur].index = res.cell.count;
      res.cell.count++;
      return res;
    },
    {
      commentSintax: {
        value: {},
      },
      format: {
        count: 0,
        value: "",
      },
      border: {
        count: 1,
        value: "",
      },
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
      [k2: string]: string | number | boolean | object;
    };
  } = {};
  let sheetNameApp = "";
  let indexId = 4;
  let selectedAdded = false;
  interface ShapeRC {
    row: string | number;
    col: string | number;
  }
  for (let index = 0; index < sheetLength; index++) {
    const sheetData = data.sheet[index];
    let rowCount = sheetData.shiftTop ? sheetData.shiftTop : 1;
    let sheetDataString = "";
    let sheetSizeString = "";
    let sheetSortFilter = "";
    let mergesCellArray: string[] = Object.assign([], sheetData.merges);
    let formulaSheetObj: Formula = Object.assign({}, sheetData.formula);
    let hasComment = false;
    let commentAuthor: string[] = [];
    let commentString = "";
    let shapeCommentRowCol: ShapeRC[] = [];
    let objKey: string[] = [];
    let headerFormula: number[] = [];
    let mergeRowConditionMap: MergeRowConditionMap = {};
    const colsLength = sheetData.headers.length;
    if (Array.isArray(sheetData.headers) && colsLength) {
      let titleRow = "";
      if (sheetData.title) {
        const title = sheetData.title;
        const commentTitle = title.comment;

        const top = title.shiftTop ? title.shiftTop : 0;
        const sL = sheetData.shiftLeft ? sheetData.shiftLeft : 0;
        const left = title.shiftLeft ? title.shiftLeft + sL : sL;
        const consommeRow = title.consommeRow ? title.consommeRow - 1 : 1;
        const consommeCol = title.consommeCol ? title.consommeCol : colsLength;
        const height =
          consommeRow == 0 && typeof title.height == "number"
            ? ' ht="' + title.height + '" customHeight="1" '
            : "";
        const tStyle = title.styleId ? title.styleId : "titleStyle";
        const refString = cols[left] + "" + (rowCount + top);
        mergesCellArray.push(
          refString +
            ":" +
            cols[left + consommeCol - 1] +
            (rowCount + consommeRow + top)
        );
        if (typeof commentTitle != "undefined") {
          hasComment = true;
          const commentObj = commentConvertor(
            commentTitle,
            styleMapper.commentSintax.value,
            defaultCommentStyle
          );
          let authorId = commentAuthor.length;
          if (
            commentObj.hasAuthour &&
            typeof commentObj.author != "undefined"
          ) {
            let auth = commentObj.author.toString();
            const index = commentAuthor.indexOf(auth);
            if (index < 0) {
              commentAuthor.push(auth);
            } else {
              authorId = index;
            }
          }
          shapeCommentRowCol.push({
            row: rowCount + top - 1,
            col: left,
          });
          commentString += generateCommentTag(
            refString,
            commentObj.commentStr,
            commentObj.commentStyl,
            authorId
          );
        }
        if (typeof title.text == "string") {
          titleRow +=
            '<row r="' +
            (rowCount + top) +
            '" ' +
            height +
            ' spans="1:' +
            (left + consommeCol - 1) +
            '">';
          titleRow +=
            '<c r="' +
            refString +
            '" ' +
            (data.styles[tStyle]
              ? ' s="' + data.styles[tStyle].index + '" '
              : "") +
            ' t="s"><v>' +
            sharedStringIndex +
            "</v></c>";
          titleRow += "</row>";
          sharedStringIndex++;
          sharedStringMap[title.text] = title.text;
          if (title.multiStyleValue) {
            sharedString += generateMultiStyleValue(
              title.multiStyleValue,
              title.text,
              styleMapper.commentSintax.value,
              tStyle,
              sheetData.useSplitBaseOnMatch
            );
          } else {
            sharedString += "<si><t>" + title.text + "</t></si>";
          }
        }
        rowCount += top + consommeRow + 1;
      }
      let headerStyleKey = sheetData.headerStyleKey
        ? sheetData.headerStyleKey
        : null;
      let shiftCount = 0;
      if (typeof sheetData.shiftLeft == "number") {
        shiftCount = sheetData.shiftLeft;
      }
      sheetData.headers.forEach((v, innerIndex) => {
        if (shiftCount) {
          innerIndex += shiftCount;
        }
        if (v.formula) {
          headerFormula.push(innerIndex);
        }
        objKey.push(v.label);
        if (
          sheetData.mergeRowDataCondition &&
          typeof sheetData.mergeRowDataCondition == "function"
        ) {
          let result = sheetData.mergeRowDataCondition(
            v,
            null,
            innerIndex,
            true
          );
          if (result === true) {
            mergeRowConditionMap[cols[innerIndex]] = {
              inProgress: true,
              start: rowCount,
            };
          }
        }
        if (
          sheetData.styleCellCondition &&
          typeof sheetData.styleCellCondition == "function"
        ) {
          headerStyleKey =
            sheetData.styleCellCondition(
              v,
              v,
              innerIndex,
              rowCount,
              true,
              styleKeys
            ) || headerStyleKey;
        }
        if (v.size && v.size > 0) {
          sheetSizeString +=
            '<col min="' +
            (innerIndex + 1) +
            '" max="' +
            (innerIndex + 1) +
            '" width="' +
            v.size +
            '" customWidth="1" />';
        }
        if (sheetData.withoutHeader) {
          return;
        }
        const refString = cols[innerIndex] + "" + rowCount;
        if (typeof sheetData.commentCodition == "function") {
          const checkCommentCondition = sheetData.commentCodition(
            v,
            null,
            v.label,
            rowCount,
            innerIndex,
            true
          );
          if (checkCommentCondition) {
            v.comment = checkCommentCondition;
          }
        }
        if (v.comment) {
          hasComment = true;
          const commentObj = commentConvertor(
            v.comment,
            styleMapper.commentSintax.value,
            defaultCommentStyle
          );
          let authorId = commentAuthor.length;
          if (
            commentObj.hasAuthour &&
            typeof commentObj.author != "undefined"
          ) {
            let auth = commentObj.author.toString();
            const index = commentAuthor.indexOf(auth);
            if (index < 0) {
              commentAuthor.push(auth);
            } else {
              authorId = index;
            }
          }
          shapeCommentRowCol.push({
            row: rowCount - 1,
            col: innerIndex,
          });
          commentString += generateCommentTag(
            refString,
            commentObj.commentStr,
            commentObj.commentStyl,
            authorId
          );
        }
        const formula = formulaSheetObj && formulaSheetObj[refString];
        if (formula) {
          sheetDataString += generateCellRowCol(
            refString,
            formula,
            data.styles
          ).cell;
          delete formulaSheetObj![refString];
        } else {
          sheetDataString +=
            '<c r="' +
            cols[innerIndex] +
            rowCount +
            '" ' +
            (headerStyleKey && data.styles && data.styles[headerStyleKey]
              ? ' s="' + data.styles[headerStyleKey].index + '" '
              : "") +
            " " +
            't="s"><v>' +
            sharedStringIndex +
            "</v></c>";
          if (typeof sheetData.multiStyleConditin == "function") {
            const multi = sheetData.multiStyleConditin(
              v,
              null,
              v.label,
              rowCount,
              innerIndex,
              true
            );
            if (multi) {
              v.multiStyleValue = multi;
            }
          }
          if (v.multiStyleValue) {
            sharedString += generateMultiStyleValue(
              v.multiStyleValue,
              v.text,
              styleMapper.commentSintax.value,
              headerStyleKey ? headerStyleKey : "",
              sheetData.useSplitBaseOnMatch
            );
          } else {
            sharedString += "<si><t>" + v.text + "</t></si>";
          }
          sharedStringMap[v.text] = v.text;

          sharedStringIndex++;
        }
      });
      if (!sheetData.withoutHeader) {
        sheetDataString =
          titleRow +
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
                  res +
                  " " +
                  curr +
                  '="' +
                  sheetData.headerRowOption[curr] +
                  '" '
                );
              }, "  ")
            : "") +
          ">" +
          sheetDataString +
          "</row>";
        rowCount++;
      } else {
        sheetDataString += titleRow;
      }
      if (Array.isArray(sheetData.data)) {
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
        const rowLength = sheetData.data.length;
        sheetData.data.forEach((mData, innerIndex) => {
          if (mData.mergeType) {
            for (let iindex = 0; iindex < mData.mergeType.length; iindex++) {
              const mergeType = mData.mergeType[iindex];
              const mergeStart = mData.mergeStart[iindex];
              const mergeValue = mData.mergeValue[index];
              let mergeStr = "";
              if (mergeType == "both") {
                mergeStr =
                  cols[mergeStart] +
                  "" +
                  rowCount +
                  ":" +
                  cols[mergeStart + mergeValue[1]] +
                  "" +
                  (rowCount + mergeValue[0]);
              } else {
                if (mergeType == "col") {
                  mergeStr =
                    cols[mergeStart] +
                    "" +
                    rowCount +
                    ":" +
                    cols[mergeStart + mergeValue[0]] +
                    "" +
                    rowCount;
                } else {
                  mergeStr =
                    cols[mergeStart] +
                    "" +
                    rowCount +
                    ":" +
                    cols[mergeStart] +
                    "" +
                    (rowCount + mergeValue[0]);
                }
              }

              mergesCellArray.push(mergeStr);
            }
          }
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
            if (shiftCount) {
              keyIndex += shiftCount;
            }
            const dataEl = mData[key];
            let cellStyle = rowStyle;
            if (
              sheetData.styleCellCondition &&
              typeof sheetData.styleCellCondition == "function"
            ) {
              cellStyle =
                sheetData.styleCellCondition(
                  dataEl,
                  mData,
                  keyIndex,
                  rowCount,
                  false,
                  styleKeys
                ) || rowStyle;
            }
            if (
              sheetData.mergeRowDataCondition &&
              typeof sheetData.mergeRowDataCondition == "function"
            ) {
              let result = sheetData.mergeRowDataCondition(
                dataEl,
                key,
                keyIndex,
                false
              );
              const columnKey = cols[keyIndex];

              let item = mergeRowConditionMap[columnKey];
              if (result === true) {
                if (!item || (item && !item.inProgress)) {
                  mergeRowConditionMap[columnKey] = {
                    inProgress: true,
                    start: rowCount,
                  };
                }
              } else {
                if (item && item.inProgress) {
                  mergesCellArray.push(
                    columnKey + item.start + ":" + columnKey + (rowCount - 1)
                  );

                  mergeRowConditionMap[columnKey] = {
                    inProgress: false,
                    start: -1,
                  };
                }
              }
            }
            if (typeof dataEl != "undefined") {
              const refString = cols[keyIndex] + "" + rowCount;
              if (typeof sheetData.commentCodition == "function") {
                const checkCommentCondition = sheetData.commentCodition(
                  dataEl,
                  mData,
                  key,
                  rowCount,
                  keyIndex,
                  false
                );
                if (checkCommentCondition) {
                  if (typeof mData.comment !== "object") {
                    mData.comment = {};
                  }
                  mData.comment[key] = checkCommentCondition;
                }
              }
              if (typeof mData.comment == "object" && key in mData.comment) {
                const cellComment = mData.comment[key];
                hasComment = true;
                const commentObj = commentConvertor(
                  cellComment,
                  styleMapper.commentSintax.value,
                  defaultCommentStyle
                );
                if (
                  commentObj.hasAuthour &&
                  typeof commentObj.author != "undefined"
                ) {
                  commentAuthor.push(commentObj.author.toString());
                }
                shapeCommentRowCol.push({
                  row: rowCount - 1,
                  col: keyIndex,
                });
                let authorId = commentAuthor.length;
                if (
                  commentObj.hasAuthour &&
                  typeof commentObj.author != "undefined"
                ) {
                  let auth = commentObj.author.toString();
                  const index = commentAuthor.indexOf(auth);
                  if (index < 0) {
                    commentAuthor.push(auth);
                  } else {
                    authorId = index;
                  }
                }
                commentString += generateCommentTag(
                  refString,
                  commentObj.commentStr,
                  commentObj.commentStyl,
                  authorId
                );
              }
              const formula = formulaSheetObj && formulaSheetObj[refString];
              if (formula) {
                sheetDataString += generateCellRowCol(refString, formula).cell;
                delete formulaSheetObj![refString];
              } else {
                if (typeof dataEl == "string") {
                  sheetDataString +=
                    '<c r="' +
                    cols[keyIndex] +
                    rowCount +
                    '" t="s" ' +
                    (cellStyle && data.styles && data.styles[cellStyle]
                      ? 's="' + data.styles[cellStyle].index + '"'
                      : "") +
                    "><v>" +
                    sharedStringIndex +
                    "</v></c>";
                  if (typeof sheetData.multiStyleConditin == "function") {
                    const multi = sheetData.multiStyleConditin(
                      dataEl,
                      mData,
                      key,
                      rowCount,
                      keyIndex,
                      false
                    );
                    if (multi) {
                      if (
                        !("multiStyleValue" in mData) ||
                        typeof mData.multiStyleValue == "undefined"
                      ) {
                        mData.multiStyleValue = {};
                      }
                      mData.multiStyleValue[key] = multi;
                    }
                  }
                  if (
                    "multiStyleValue" in mData &&
                    mData.multiStyleValue &&
                    key in mData.multiStyleValue
                  ) {
                    sharedString += generateMultiStyleValue(
                      mData.multiStyleValue[key],
                      dataEl,
                      styleMapper.commentSintax.value,
                      cellStyle ? cellStyle : "",
                      sheetData.useSplitBaseOnMatch
                    );
                  } else {
                    sharedString += "<si><t>" + dataEl + "</t></si>";
                  }
                  sharedStringMap[dataEl] = dataEl;
                  sharedStringIndex++;
                } else {
                  sheetDataString +=
                    '<c r="' +
                    cols[keyIndex] +
                    rowCount +
                    '" ' +
                    (cellStyle && data.styles && data.styles[cellStyle]
                      ? 's="' + data.styles[cellStyle].index + '"'
                      : "") +
                    "><v>" +
                    dataEl +
                    "</v></c>";
                }
              }
            }
          });
          if (rowLength - 1 == innerIndex) {
            Object.keys(mergeRowConditionMap).forEach((v) => {
              if (mergeRowConditionMap[v].inProgress) {
                mergesCellArray.push(
                  v + mergeRowConditionMap[v].start + ":" + v + rowCount
                );
              }
            });
          }

          rowCount++;
          sheetDataString += "</row>";
        });
        if (sheetData.sortAndfilter) {
          if (sheetData.sortAndfilter.mode == "all") {
            sheetSortFilter +=
              '<autoFilter ref="A1:' +
              cols[colsLength - 1] +
              "" +
              (rowCount - 1) +
              '" />';
          } else {
            if (
              typeof sheetData.sortAndfilter.ref == "string" &&
              sheetData.sortAndfilter.ref.length > 0
            ) {
              sheetSortFilter +=
                '<autoFilter ref="' + sheetData.sortAndfilter.ref + '" />';
            }
          }
        }
      }
      if (headerFormula.length > 0) {
        headerFormula.forEach((v) => {
          const header = sheetData.headers[v];
          formulaSheetObj![cols[v] + "" + rowCount] = {
            start: sheetData.withoutHeader ? cols[v] + "1" : cols[v] + "2",
            end: cols[v] + "" + (rowCount - 1),
            type: header.formula!.type,
            ...(header.formula!.styleId
              ? { styleId: header.formula!.styleId }
              : {}),
          };
        });
      }
      if (formulaSheetObj) {
        const remindFormulaKey = Object.keys(formulaSheetObj);
        if (remindFormulaKey.length) {
          let rF: {
            [row: number]: string;
          } = {};
          remindFormulaKey.forEach((v) => {
            const f = generateCellRowCol(v, formulaSheetObj![v], data.styles);
            if (!rF[f.row]) {
              rF[f.row] = f.cell;
            } else {
              rF[f.row] += f.cell;
            }
          });
          Object.keys(rF).forEach((v) => {
            const l = rF[v as keyof object];
            sheetDataString +=
              '<row r="' +
              v +
              '" spans="1:' +
              colsLength +
              '"  >' +
              l +
              "</row>";
          });
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
    const filterMode = sheetData.sortAndfilter ? 'filterMode="1"' : "";
    mergesCellArray = [...new Set(mergesCellArray)];
    mapData["sheet" + (index + 1)] = {
      indexId: indexId + 1,
      key: "sheet" + (index + 1),
      sheetName: shName,
      sheetDataString,
      hasComment,
      commentString,
      commentAuthor,
      shapeCommentRowCol,
      sheetSizeString:
        sheetSizeString.length > 0
          ? "<cols>" + sheetSizeString + "</cols>"
          : "",
      protectionOption: sheetData.protectionOption
        ? Object.keys(sheetData.protectionOption).reduce((res, cu) => {
            return (
              res +
              " " +
              cu +
              '="' +
              sheetData.protectionOption![cu as ProtectionOptionKey] +
              '" '
            );
          }, "<sheetProtection ") + "/>"
        : "",
      merges:
        mergesCellArray.length > 0
          ? mergesCellArray.reduce((mResult, currRef) => {
              return mResult + ' <mergeCell ref="' + currRef + '" />';
            }, '<mergeCells count="' + mergesCellArray.length + '">') +
            " </mergeCells>"
          : "",
      selectedView: sheetData.selected
        ? "<sheetViews>" +
          '<sheetView tabSelected="1" workbookViewId="0">' +
          '<selection activeCell="A0" sqref="A0" />' +
          "</sheetView>" +
          "</sheetViews>"
        : "<sheetViews>" + '<sheetView workbookViewId="0" />' + "</sheetViews>",

      sheetSortFilter,
      tabColor: sheetData.tabColor
        ? '<sheetPr codeName="' +
          ("Sheet" + (index + 1)) +
          '" ' +
          filterMode +
          " >" +
          '<tabColor rgb="' +
          sheetData.tabColor.replace("#", "") +
          '" />' +
          "</sheetPr>"
        : "<sheetPr " +
          filterMode +
          " >" +
          '<outlinePr summaryBelow="0" summaryRight="0" />' +
          "</sheetPr>",
    };
    indexId++;
  }

  let sheetKeys = Object.keys(mapData);
  // in _rels
  var relsFolder = zip.folder("_rels");
  relsFolder?.file(
    ".rels",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      ' <Relationship Id="rId3"' +
      '  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"' +
      '  Target="docProps/app.xml" />' +
      ' <Relationship Id="rId2"' +
      '  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"' +
      '  Target="docProps/core.xml" />' +
      ' <Relationship Id="rId1"' +
      '  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"' +
      '  Target="xl/workbook.xml" />' +
      "</Relationships>"
  );

  var docPropsFolder = zip.folder("docProps");
  docPropsFolder?.file(
    "core.xml",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" ' +
      'xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" ' +
      'xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
      (data.creator ? "<dc:creator>" + data.creator + "</dc:creator>" : "") +
      (data.created
        ? '<dcterms:created xsi:type="dcterms:W3CDTF">' +
          data.created +
          "</dcterms:created>"
        : "") +
      (data.modified
        ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' +
          data.modified +
          "</dcterms:modified>"
        : "") +
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
      "" +
      "</Relationships>"
  );

  //xl/theme
  var xl_themeFolder = xlFolder?.folder("theme");
  xl_themeFolder?.file(
    "theme1.xml",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>'
  );

  // xl/worksheets
  var xl_worksheetsFolder = xlFolder?.folder("worksheets");
  let commentId: number[] = [];
  const xl_drawingsFolder = xlFolder?.folder("drawings");
  const xl_worksheets_relsFolder = xl_worksheetsFolder?.folder("_rels");
  sheetKeys.forEach((k, iCo) => {
    const sh = mapData[k];
    if (sh.hasComment) {
      commentId.push(iCo + 1);
      let aurt = sh.commentAuthor;
      xlFolder?.file(
        `comments${iCo + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
	xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
     xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
	<authors>
        ${
          Array.isArray(aurt) && aurt.length > 0
            ? aurt.reduce(
                (res, currr) => res + "<author>" + currr + "</author>",
                ""
              )
            : `<author></author>`
        }
	</authors>
	<commentList>
		${sh.commentString}
	</commentList>
</comments>`
      );
      xl_worksheets_relsFolder?.file(
        "sheet" + (iCo + 1) + ".xml.rels",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    <Relationship Id="rId1"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
        Target="../comments${iCo + 1}.xml" />
    ${
      true
        ? ""
        : `<Relationship Id="rId2"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"
        Target="../drawings/drawing${iCo + 1}.xml" />`
    }
    <Relationship Id="rId3"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing"
        Target="../drawings/vmlDrawing${iCo + 1}.vml" />
</Relationships>`
      );
      xl_drawingsFolder?.file(
        "vmlDrawing" + (iCo + 1) + ".vml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout><v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path gradientshapeok="t" o:connecttype="rect"/>
 </v:shapetype>${(sh.shapeCommentRowCol as ShapeRC[]).reduce((res, curr) => {
   return (
     res +
     `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;
  margin-left:77.25pt;margin-top:23.25pt;width:264pt;height:42.75pt;z-index:1;
  visibility:hidden' fillcolor="#ffffe1">
  <v:fill color2="#ffffe1"/>
  <v:shadow on="t" color="black" obscured="t"/>
  <v:path o:connecttype="none"/>
  <v:textbox>
   <div style='text-align:left'></div>
  </v:textbox>
  <x:ClientData ObjectType="Note">
   <x:MoveWithCells/>
   <x:SizeWithCells/>
   <x:Anchor>
    1, 15, 1, 10, 5, 15, 4, 4</x:Anchor>
   <x:AutoFill>False</x:AutoFill>
   <x:Row>${curr.row}</x:Row>
   <x:Column>${curr.col}</x:Column>
  </x:ClientData>
 </v:shape>`
   );
 }, "")}
 </xml>`
      );
    }
    xl_worksheetsFolder?.file(
      sh.key + ".xml",
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"' +
        ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"' +
        ' xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main"' +
        ' xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing" ' +
        ' xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"' +
        ' xmlns:mv="urn:schemas-microsoft-com:mac:vml"' +
        ' xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision"' +
        ' xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2"' +
        ' xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3"' +
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
        sh.sheetSortFilter +
        sh.merges +
        (true ? "" : '<drawing r:id="rId2" />') +
        (sh.hasComment ? '<legacyDrawing r:id="rId3" />' : "") +
        "</worksheet>"
    );
  });
  zip.file(
    "[Content_Types].xml",
    contentTypeGenerator(sheetContentType, commentId)
  );
  if (data.backend) {
    return zip
      .generateAsync({
        type: data.generateType ? data.generateType : "nodebuffer",
      })
      .then((content) => {
        return content;
      });
  } else {
    if (data.notSave) {
      return zip.generateAsync({ type: "blob" }).then((content) => {
        return content.slice(
          0,
          content.size,
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
      });
    } else {
      zip.generateAsync({ type: "blob" }).then(function (content) {
        // see FileSaver.js
        import("file-saver").then((module) => {
          const { saveAs } = module;
          // Now you can use the saveAs function
          saveAs(
            content,
            (data.fileName ? data.fileName : "tableRecord") + ".xlsx"
          );
        });
      });
    }
  }
}