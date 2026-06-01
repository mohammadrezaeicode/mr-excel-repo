import {
  type Data,
  type ExcelTable,
  type Header,
  type Sheet,
  type SideBySide,
} from "../data-model/excel-table";
interface SideBySideRowTable {
  [key: string]: {
    headers: Header[];
    data: Data[];
    labelCounter: number;
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
export function sideBySide<T extends object = object>(data: SideBySide<T>[][]): ExcelTable<object>{
  const lengthData = data.length;
  let tableIndex = 0;
  let rowTable: SideBySideRowTable = {};
  let counterRow: SideBySideCounterRow = {};
  let resetMap: {
    [key: string]: boolean;
  } = {};
  for (let index = 0; index < lengthData; index++) {
    const element = data[index];
    if (!element) {
      continue;
    }
    const elementLength = element.length;
    let sheetCount: {
      [key: string]: number;
    } = {};
    for (let innerIndex = 0; innerIndex < elementLength; innerIndex++) {
      tableIndex++;
      const mainData = element[innerIndex];
      if (!mainData) {
        continue;
      }
      let name: keyof SideBySideRowTable;
      if (mainData.sheetName) {
        name = mainData.sheetName;
      } else {
        name = "Sheet " + 1;
      }
      //TODO
      // if (typeof rowTable[name] === "undefined") {
      //   rowTable[name] = {
      //     headers: [],
      //     data: [],
      //     labelCounter: 0,
      //     seenAt: index,
      //   };
      // }
      const tempRowTable = rowTable[name] ?? {
        headers: [],
        data: [],
        labelCounter: 0,
        seenAt: index,
      };
      const tempCounterRow = counterRow[name] ?? {
        index,
        value: 0,
      };
      if (!(name in resetMap)) {
        tempRowTable.labelCounter = 0;
        resetMap[name] = true;
      }

      let newHeader: Header[] = [];
      const headerLength = tempRowTable.headers.length;
      let headerAsRow: {
        [key: string]: string;
      } = {};
      let withText = tempRowTable.seenAt == index;
      let header: {
        [key: string]: string;
      } = mainData.headers.reduce((res, curr, _index) => {
        tempRowTable.labelCounter++;
        if (headerLength < tempRowTable.labelCounter) {
          newHeader.push({
            label: "c" + tempRowTable.labelCounter,
            text: withText ? curr.text : "",
          });
        }
        headerAsRow["c" + tempRowTable.labelCounter] = curr.text;
        return {
          ...res,
          [curr.label]: "c" + tempRowTable.labelCounter,
        };
      }, {});
      tempRowTable.headers.push(...newHeader);
      if (mainData.spaceX) {
        for (let space = 0; space < mainData.spaceX; space++) {
          tempRowTable.labelCounter++;
          if (headerLength <= tempRowTable.labelCounter) {
            tempRowTable.headers.push({
              label: "c" + tempRowTable.labelCounter,
              text: "",
            });
          }
        }
      }
      if (tempCounterRow.index + 1 == index) {
        sheetCount[name] = tempCounterRow.value;
      }
      let sta = sheetCount[name] || 0;
      if (sta > 0) {
        if (
          !tempRowTable.headerIndex ||
          (tempRowTable.headerIndex && tempRowTable.headerIndex != sta)
        ) {
          tempRowTable.data.push(headerAsRow);
        } else {
          tempRowTable.data[sta] = {
            ...tempRowTable.data[sta],
            ...headerAsRow,
          };
        }
        tempRowTable.headerIndex = sta;
        sta++;
      }

      let objKey = Object.keys(header);
      let spaceApply = mainData.data.length >= tempRowTable.data.length;
      tempRowTable.data = mainData.data.reduce((res, curr, index) => {
        let needObj: Record<string,any> = {};
        if (res.length > index + sta && res[index + sta]) {
          // TODO
          needObj = res[index + sta]??{};
        } else {
          res.push(needObj);
        }
        objKey.forEach((v: string) => {
          let newKey = header[v];
          if(!newKey){
            return
          }
          needObj[newKey] = curr[v as keyof object]??"";
        });
        needObj["tableIndex"] = tableIndex;
        needObj["tableStringIndex"] = index + "," + innerIndex;
        res[index + sta] = needObj;
        return res;
      }, tempRowTable.data);
      if (spaceApply && mainData.spaceY) {
        const hy = tempRowTable.headers.length;
        for (let space = 0; space < mainData.spaceY; space++) {
          let newObject: { [key: string]: any } = {};
          for (let hIndex = 0; hIndex < hy; hIndex++) {
            const element = tempRowTable.headers[hIndex];
            if (element) {
              newObject[element.label] = "";
            }
          }
          tempRowTable.data.push(newObject);
        }
      }
      counterRow[name] = {
        value: Math.max(tempRowTable.data.length, tempCounterRow.value),
        index,
      };
      rowTable[name] = tempRowTable;
    }
    resetMap = {};
  }
  let sheet: Sheet[] = [];
  let sheets: ExcelTable = Object.entries(rowTable).reduce(
    (re, [cu,val]) => {
      re.sheet.push({
        ...val,
        name: cu,
      });
      return re;
    },
    { sheet },
  );
  return sheets;
}
