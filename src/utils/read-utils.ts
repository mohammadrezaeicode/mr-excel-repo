function hasTBeforeV(element: string) {
  // Use regular expression to find 't="s"' before <v>
  const regex = /t="s".*?<v/;
  return regex.test(element);
}
function getValueWithinT(element: string) {
  // Use regular expression to extract the content between <v> and </v>
  const regex = /<t.*?>(.*?)<\/t>/;
  const match = element.match(regex);
  if (match) {
    return match[1]; // Extracted value
  }
  return null; // Return null if <v> tag is not found
}
function getValueWithinV(element: string) {
  // Use regular expression to extract the content between <v> and </v>
  const regex = /<v.*?>(.*?)<\/v>/;
  const match = element.match(regex);
  if (match) {
    return match[1]; // Extracted value
  }
  return null; // Return null if <v> tag is not found
}
function getRValue(element: string) {
  // Use regular expression to extract the 'r' attribute value
  const regex = /r="(.*?)"/;
  const match = element.match(regex);
  if (match) {
    return match[1]; // Extracted 'r' value
  }
  return null; // Return null if 'r' attribute is not found
}

import JSZip from "jszip";
import { cols } from "./content-generator/const-data";
import { getColRowBaseOnRefString } from "./excel-util";
type ExtractedData = (string | null)[][];
interface ExtractResult {
  [sheetName: string]: ExtractedData;
}
export async function extractExcelData(uri: string) {
  let queueSheet: {
    filename: string;
    fileData: any;
  }[] = [];
  let sharedStrings: string[] = [];
  let sheetResultData: ExtractResult = {};
  let seenSheerdString = false;
  function generateDataArray(filename: string, fileData: any) {
    let resultData: ExtractedData = [];
    let rows = fileData.match(/<c[\s\S\n]*?<\/c>/g);
    if (Array.isArray(rows)) {
      rows.forEach((v) => {
        let value = getValueWithinV(v);
        if (hasTBeforeV(v) && value) {
          value = sharedStrings[parseInt(value)];
        }
        const rValue = getRValue(v);
        let rC = getColRowBaseOnRefString(rValue!, cols);
        if (typeof resultData[rC.row] == "undefined") {
          resultData[rC.row] = [];
        }
        resultData[rC.row][rC.col] = value;
      });
      console.log(resultData);
    }
    sheetResultData[filename] = resultData;
  }
  return await fetch(uri)
    .then((res) => {
      console.log(res);
      return res.blob();
    })
    .then(async (res) => {
      return await JSZip.loadAsync(res).then(function (zip) {
        Object.keys(zip.files).forEach(function (filename) {
          zip.files[filename].async("string").then(function (fileData) {
            if (filename.indexOf("sharedStrings") >= 0) {
              let rows = fileData.match(/<si[\s\S\n]*?<\/si>/g);
              if (Array.isArray(rows)) {
                rows.forEach((va) => {
                  let t = va.match(/<t[\s\S\n]*?<\/t>/g);
                  if (Array.isArray(t)) {
                    let result = t.reduce((res, curr) => {
                      // console.log(curr)
                      return res + getValueWithinT(curr);
                    }, "");
                    sharedStrings.push(result);
                  }
                });
              }
              seenSheerdString = true;
              if (queueSheet.length > 0) {
                queueSheet.forEach((v) => {
                  generateDataArray(v.filename, v.fileData);
                });
                queueSheet = [];
              }
              // console.log(sharedStrings)
            }
            if (filename.indexOf("sheet") >= 0) {
              if (seenSheerdString) {
                generateDataArray(filename, fileData);
              } else {
                queueSheet.push({
                  filename,
                  fileData,
                });
              }
            }
          });
        });
        return "done";
      });
    });
}
