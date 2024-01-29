import type { ExcelTable } from "../data-model/excel-table";
let target: any = {};
let proxy = new Proxy(target, {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      this.set!(target, property, {}, true);
      return {};
    }
  },
  set(target, property, value, receiver) {
    target[property] = value;
    return true;
  },
});
export function addGlobalOptions(key: string, path: string, data: any) {
  proxy[key];
  proxy[key][path] = data;
}
function generatePathRecursive(key: string, path: string, data: object) {
  const keys = Object.keys(data);
  keys.forEach((k) => {
    const value = data[k as keyof object];
    if (typeof value == "object") {
      if (k != "data" && k != "headers") {
        generatePathRecursive(key, path.length>0 ? path + "." + k : k, value);
      }
    } else {
      addGlobalOptions(key, path.length>0 ? path + "." + k : k, value);
    }
  });
}
export function addGlobalOptionFromExcelTable(key: string, data: ExcelTable) {
  generatePathRecursive(key, "", data);
}
export function applyConfig(key: string, data: ExcelTable): ExcelTable {
  let data2 = data as any;
  let proxy2 = proxy[key];
  let keys = Object.keys(proxy2);
  keys.forEach((keyP) => {
    const path = keyP.split(".");
    let dataC = data2;
    let value = proxy2[keyP];
    for (let index = 0; index < path.length; index++) {
      const p = path[index];
      if (dataC[p]) {
        dataC = dataC[p];
      } else {
        if (path.length - 1 == index) {
          dataC[p] = value;
        } else {
          dataC[p] = {};
          dataC = dataC[p];
        }
      }
    }
  });
  return data2;
}
