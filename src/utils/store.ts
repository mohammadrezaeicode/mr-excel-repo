import type { ExcelTable } from "../data-model/excel-table";

let target: any = {};

/**
 * Proxy object to manage global options.
 * @type {Proxy}
 */
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

/**
 * Adds global options to the proxy.
 * @param {string} key - The key for the global option.
 * @param {string} path - The path for the global option.
 * @param {any} data - The data for the global option.
 */
export function addGlobalOptions(key: string, path: string, data: any) {
  proxy[key];
  proxy[key][path] = data;
}

/**
 * Recursively generates paths for the global options.
 * @param {string} key - The key for the global option.
 * @param {string} path - The path for the global option.
 * @param {object} data - The data for the global option.
 */
function generatePathRecursive(key: string, path: string, data: object) {
  const keys = Object.keys(data);
  keys.forEach((k) => {
    const value = data[k as keyof object];
    if (typeof value == "object") {
      if (k != "data" && k != "headers") {
        generatePathRecursive(key, path.length > 0 ? path + "." + k : k, value);
      }
    } else {
      addGlobalOptions(key, path.length > 0 ? path + "." + k : k, value);
    }
  });
}

/**
 * Adds global options from an Excel table.
 * @param {string} key - The key for the global option.
 * @param {ExcelTable} data - The Excel table data.
 */
export function addGlobalOptionFromExcelTable(key: string, data: ExcelTable) {
  generatePathRecursive(key, "", data);
}

/**
 * Applies configuration to an Excel table.
 * @param {string} key - The key for the global option.
 * @param {ExcelTable} data - The Excel table data.
 * @returns {ExcelTable} The updated Excel table.
 */
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

/**
 * Exported for testing purposes.
 * @type {Object}
 * @property {Function} generatePathRecursive - The generatePathRecursive function.
 */
export const exportedForTesting = {
  generatePathRecursive,
};