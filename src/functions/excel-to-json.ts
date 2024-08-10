import { ReadResult } from "../data-model/excel-table";

export async function excelToJson(
  uri: string,
  fetchFunc?: Function,
  withHeader = true,
  defaultPropertyPrefix = "property"
) {
  let excelData: ReadResult = await import("../utils/read-utils").then(
    async (m) => await m.extractExcelData(uri, false, fetchFunc)
  );
  let result: Record<string, object> = {};
  let objectKey: string[] = [];
  Object.keys(excelData.sheetNameObject).forEach((sheetName) => {
    const name = excelData.sheetNameObject[sheetName];
    const data = excelData.data[name] || excelData.data[sheetName];
    const sheetLength =
      excelData.maxLengthOfColumn[name] ||
      excelData.maxLengthOfColumn[sheetName];
    for (let index = 0; index <= sheetLength; index++) {
      objectKey[index] = defaultPropertyPrefix + (index + 1);
    }
    let isHeader = withHeader;
    let resultObject: object[] = [];
    data.forEach((values: (string | null | undefined)[]) => {
      let arrayObject: Record<string, string> = {};
      values.forEach((value: string | null | undefined, index: number) => {
        if (typeof value === "string") {
          if (isHeader) {
            objectKey[index] = value;
          } else {
            arrayObject[objectKey[index]] = value;
          }
        }
      });
      isHeader = false;
      resultObject.push(arrayObject);
    });
    result = Object.assign(result, {
      [name]: resultObject,
    });
  });
  return result;
}
