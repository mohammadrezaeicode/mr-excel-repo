import { describe, expect, test, jest } from "@jest/globals";
import {
  cols,
  formatMap,
} from "../../../../src/utils/content-generator/const-data";

const def: string[] = [
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

describe("formatMap object tests", () => {
  test("Type check", () => {
    expect(typeof formatMap).toBe("object");
    expect(Array.isArray(formatMap)).toBeFalsy();
  });
  test("test data", () => {
    Object.keys(formatMap).forEach((element: string) => {
      let record = formatMap[element];
      expect(record.key).toBeTruthy();
      expect(typeof record.value=="undefined" ||typeof record.value== "string").toBeTruthy();
      if (record.value) {
        expect(record.value.indexOf("/>")).toBe(record.value.length-2);

        expect(
          record.value.indexOf("/>") === record.value.lastIndexOf("/>")
        ).toBeTruthy();
        expect(record.value.indexOf("<numFmt")).toBe(0);

        expect(
          record.value.indexOf("<") === record.value.lastIndexOf("<")
        ).toBeTruthy();
      }
    });
  });
});
describe("cols data tests", () => {
  test("Type check", () => {
    expect(typeof cols[0]).toBe("string");
    expect(Array.isArray(cols)).toBeTruthy();
  });
  test("test data", () => {
    expect(cols).toEqual(def);
  });
});
