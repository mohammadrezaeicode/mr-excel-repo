import {
  Data,
  ExcelTable,
  Header,
  Sheet,
  SideBySide,
} from "../data-model/excel-table";
interface SideBySideRowTable {
  [key: string]: {
    headers: Header[];
    data: Data[];
    labelConter: number;
    seenAt: number;
    headerIndex?: number;
  };
}
interface SideBySideCounterRow {
  [key: string]: {
    index: number;
    value: number;
  };
}
export function sideBySide(data: SideBySide[][]): ExcelTable {
  const lengthData = data.length;
  let tableIndex = 0;
  let rowTable: SideBySideRowTable = {};
  let counterRow: SideBySideCounterRow = {};
  let reseted: {
    [key: string]: boolean;
  } = {};
  for (let index = 0; index < lengthData; index++) {
    const element = data[index];
    const elementLength = element.length;
    let firstTime = false;
    let sheetCount: {
      [key: string]: number;
    } = {};
    for (let innerIndex = 0; innerIndex < elementLength; innerIndex++) {
      tableIndex++;
      const mainData = element[innerIndex];
      let name: string;
      if (mainData.sheetName) {
        name = mainData.sheetName;
      } else {
        name = "Sheet " + 1;
      }
      if (!(name in rowTable)) {
        rowTable[name] = {
          headers: [],
          data: [],
          labelConter: 0,
          seenAt: index,
        };
        firstTime = true;
      }
      if (!(name in counterRow)) {
        counterRow[name] = {
          index,
          value: 0,
        };
      }
      if (!(name in reseted)) {
        rowTable[name].labelConter = 0;
        reseted[name] = true;
      }

      let newHeader: Header[] = [];
      const headerLength = rowTable[name].headers.length;
      let headerAsRow: {
        [key: string]: string;
      } = {};
      let withText = rowTable[name].seenAt == index;
      let header: {
        [key: string]: string;
      } = mainData.headers.reduce((res, curr, index) => {
        rowTable[name].labelConter++;
        if (headerLength < rowTable[name].labelConter) {
          newHeader.push({
            label: "c" + rowTable[name].labelConter,
            text: withText ? curr.text : "",
          });
        }
        headerAsRow["c" + rowTable[name].labelConter] = curr.text;
        return {
          ...res,
          [curr.label]: "c" + rowTable[name].labelConter,
        };
      }, {});
      rowTable[name].headers.push(...newHeader);
      if (mainData.spaceX) {
        for (let space = 0; space < mainData.spaceX; space++) {
          rowTable[name].labelConter++;
          if (headerLength <= rowTable[name].labelConter) {
            rowTable[name].headers.push({
              label: "c" + rowTable[name].labelConter,
              text: "",
            });
          }
        }
      }
      if (counterRow[name].index + 1 == index) {
        sheetCount[name] = counterRow[name].value;
      }
      let sta = sheetCount[name] || 0;
      if (sta > 0) {
        if (
          !rowTable[name].headerIndex ||
          (rowTable[name].headerIndex && rowTable[name].headerIndex != sta)
        ) {
          rowTable[name].data.push(headerAsRow);
        } else {
          rowTable[name].data[sta] = {
            ...rowTable[name].data[sta],
            ...headerAsRow,
          };
        }
        rowTable[name].headerIndex = sta;

        sta++;
      }

      let objKey = Object.keys(header);
      let spaceApply = mainData.data.length >= rowTable[name].data.length;
      rowTable[name].data = mainData.data.reduce((res, curr, index) => {
        let needObj: {
          [key: string]: any;
        } = {};
        if (res.length > index + sta) {
          needObj = res[index + sta];
        } else {
          res.push(needObj);
        }
        objKey.forEach((v: string) => {
          let newKey = header[v];
          needObj[newKey] = curr[v] ? curr[v] : "";
        });
        needObj["tableIndex"] = tableIndex;
        needObj["tableStringIndex"] = index + "," + innerIndex;
        res[index + sta] = needObj;
        return res;
      }, rowTable[name].data);
      if (spaceApply && mainData.spaceY) {
        const hy = rowTable[name].headers.length;
        for (let space = 0; space < mainData.spaceY; space++) {
          let newObject: { [key: string]: any } = {};
          for (let hIndex = 0; hIndex < hy; hIndex++) {
            const element = rowTable[name].headers[hIndex];
            newObject[element.label] = "";
          }
          rowTable[name].data.push(newObject);
        }
      }
      counterRow[name] = {
        value: Math.max(rowTable[name].data.length, counterRow[name].value),
        index,
      };
    }
    reseted = {};
  }
  let keys = Object.keys(rowTable);
  let sheet: Sheet[] = [];
  let sheets: ExcelTable = keys.reduce(
    (re, cu) => {
      let val = rowTable[cu];
      re.sheet.push({
        ...val,
        name: cu,
      });
      return re;
    },
    { sheet }
  );
  return sheets;
}
