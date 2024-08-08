import { cols } from "../data-model/const-data";
import type {
  ExtractedData,
  ExtractResult,
  ReadResult,
} from "../data-model/excel-table";
import { getColRowBaseOnRefString } from "./excel-util";

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
export async function extractExcelData(
  uri: string,
  isBackend: boolean = false,
  fetchFunc?: Function
): Promise<ReadResult> {
  let apiCaller: Function;
  let convertCall = false;
  if (typeof fetchFunc == "function") {
    apiCaller = fetchFunc;
    convertCall = true;
  } else {
    apiCaller = fetch;
  }
  let queueSheet: {
    filename: string;
    fileData: any;
  }[] = [];
  let nameMap = new Map<string, string>();
  let nameObject: Record<string, string> = {};
  let sharedStrings: string[] = [];
  let sheetResultData: ExtractResult = {};
  let maxLengthOfColumn: Record<string, number> = {};
  let seenShardString = false;
  function generateDataArray(filename: string, fileData: any) {
    let maxCol = 0;
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
        maxCol = Math.max(rC.col, maxCol);
      });
    }
    if (filename.indexOf("xl/worksheets/sheet") == 0) {
      let key = filename.substring(14, filename.lastIndexOf("."));
      if (nameMap.has(key)) {
        key = nameMap.get(key)!;
      }
      sheetResultData[key] = resultData;
      maxLengthOfColumn[key] = maxCol;
    }
  }
  return await apiCaller(uri)
    .then((res: any) => {
      if (res == null || res == undefined) {
        throw "response is null";
      }
      if (convertCall) {
        return res;
      }
      if (isBackend) {
        return res.arrayBuffer();
      }
      return res.blob();
    })
    .then(async (res: any) => {
      const module = await import("jszip");
      const JSZip = module.default;
      let fileCounter = 0;
      return await new Promise<ReadResult>((resolve, reject) => {
        JSZip.loadAsync(res).then(function (zip) {
          const keys = Object.keys(zip.files);
          fileCounter = keys.length;
          let proxy = new Proxy(
            {
              counter: 0,
              isNameSet: false,
            },
            {
              set(obj, prop, value) {
                if (prop === "isNameSet") {
                  obj.isNameSet = value;
                  return true;
                }
                if (typeof value !== "number") {
                  throw "value most be number";
                }
                obj.counter = value;
                if (obj.isNameSet) {
                  if (obj.counter === fileCounter) {
                    resolve({
                      data: sheetResultData,
                      sheetNameObject: nameObject,
                      sheetName: nameMap.entries(),
                      maxLengthOfColumn,
                    });
                  }
                }
                return true;
              },
              get(target, prop, receiver) {
                if (prop === "isNameSet") {
                  return target.isNameSet;
                }
                // By default, it looks like Reflect.get(target, prop, receiver)
                // which has a different value of `this`
                return target.counter;
              },
            }
          );
          keys.forEach(function (filename) {
            zip.files[filename].async("string").then(function (fileData) {
              if (filename.indexOf("sharedStrings") >= 0) {
                let rows = fileData.match(/<si[\s\S\n]*?<\/si>/g);
                if (Array.isArray(rows)) {
                  rows.forEach((va) => {
                    let t = va.match(/<t[\s\S\n]*?<\/t>/g);
                    if (Array.isArray(t)) {
                      let result = t.reduce((res, curr) => {
                        return res + getValueWithinT(curr);
                      }, "");
                      sharedStrings.push(result);
                    }
                  });
                }
                seenShardString = true;
                if (queueSheet.length > 0) {
                  queueSheet.forEach((v) => {
                    generateDataArray(v.filename, v.fileData);
                  });
                  queueSheet = [];
                }
              }
              if (filename.indexOf("sheet") >= 0) {
                if (seenShardString) {
                  generateDataArray(filename, fileData);
                } else {
                  queueSheet.push({
                    filename,
                    fileData,
                  });
                }
              }
              if (filename.indexOf("workbook") >= 0) {
                const sheetsTag = fileData.replace(
                  /(.*[\n\s\S]*)(<sheets[\n\s\S]*?sheets>)(.*[\n\s\S]*)/,
                  "$2"
                );
                const sheets = sheetsTag.split("<sheet ").slice(1);
                sheets.forEach((v, i) => {
                  let id = i + 1;
                  let name = "Sheet " + id;
                  if (v.indexOf("name=") >= 0) {
                    name = v.replace(
                      /(.*[\n\s\S]*?)name="([^"]*)"(.*[\n\s\S]*)/,
                      "$2"
                    );
                  }
                  if (v.indexOf("sheetId=") > 0) {
                    id = Number(
                      v.replace(
                        /(.*[\n\s\S]*?)sheetId="([^"]*)"(.*[\n\s\S]*)/,
                        "$2"
                      )
                    );
                    if (isNaN(id)) {
                      id = i + 1;
                    }
                  }
                  nameMap.set("sheet" + id, name);
                  nameObject["sheet" + id] = name;
                });
                proxy.isNameSet = true;
              }
              proxy.counter++;
            });
          });
        });
      });
    })
    .catch((e: any) => {
      throw e;
    });
}
