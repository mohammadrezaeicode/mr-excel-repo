import { describe, expect, test } from "@jest/globals";
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
    expect(getColRowBaseOnRefString("ac1", cols)).toEqual({
      row: 0,
      col: 28,
    });
    expect(getColRowBaseOnRefString("ei1", cols)).toEqual({
      row: 0,
      col: 138,
    });
    expect(getColRowBaseOnRefString("aBc41", cols)).toEqual({
      row: 40,
      col: 730,
    });
  });
  test("invalid reference", () => {
    expect(() => getColRowBaseOnRefString("21", cols)).toThrow(
      "Invalid Reference",
    );
    expect(() => getColRowBaseOnRefString("AA", cols)).toThrow(
      "Invalid Reference",
    );
    expect(() => getColRowBaseOnRefString("1X1", cols)).toThrow(
      "Invalid Reference",
    );    
    expect(() => getColRowBaseOnRefString("😍1", cols)).toThrow(
      "Invalid Reference",
    );
    expect(() => getColRowBaseOnRefString(".1", cols)).toThrow(
      "Invalid Reference",
    );
    expect(() => getColRowBaseOnRefString("", cols)).toThrow(
      "Invalid Reference",
    );
    expect(() => getColRowBaseOnRefString("C", cols)).toThrow(
      "Invalid Reference",
    );
    expect(() => getColRowBaseOnRefString("1", cols)).toThrow(
      "Invalid Reference",
    );
  });
});
