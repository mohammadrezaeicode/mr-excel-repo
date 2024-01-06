
import { describe, expect, test, jest, it } from "@jest/globals";
import { getColRowBaseOnRefString } from "../../../src/utils/excel-util";
const cols: string[] = [
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
describe("getColRowBaseOnRefString data tests", () => {
  test("should be function", () => {
    expect(typeof getColRowBaseOnRefString).toBe("function");
  });
  test("use valid reference input", () => {
    expect(getColRowBaseOnRefString("X1", cols)).toEqual({
      row: 0,
      col: cols.indexOf("X"),
    });
    expect(getColRowBaseOnRefString("AC1", cols)).toEqual({
      row: 0,
      col: 28,
    });
  });
  test("use invalid reference input", () => {
    expect(()=>getColRowBaseOnRefString("21", cols)).toThrow("Invalid Column");

    expect(()=>getColRowBaseOnRefString("AA", cols)).toThrow("Invalid Row");
});
});
