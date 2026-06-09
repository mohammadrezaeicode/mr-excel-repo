import { describe, expect, jest, test } from "@jest/globals";
import {
  exportedForTesting,
  validateStyleObjectFunction,
  validateSheetArrayFunction,
} from "../../../src/functions/validate-excel-table";

describe("validate-excel-table branches", () => {
  test("generalValidationCheck: type mismatch throws", () => {
    const vp: any = { mode: "TYPE_CHECK", type: "number" };
    expect(() =>
      exportedForTesting.generalValidationCheck("a", vp, "prop", true, true),
    ).toThrow('The Type of The "prop" is not valid');
  });

  test("generalValidationCheck: isEnum throws when not in enum", () => {
    const vp: any = { mode: "TYPE_CHECK", isEnum: true, enum: ["a", "b"] };
    expect(() =>
      exportedForTesting.generalValidationCheck("c", vp, "prop", true, true),
    ).toThrow('The value of "prop" must be ' + JSON.stringify(vp.enum));
  });

  test("generalValidationCheck: min throws", () => {
    const vp: any = { mode: "TYPE_CHECK", min: 5, type: "number" };
    expect(() =>
      exportedForTesting.generalValidationCheck(3, vp, "prop", true, true),
    ).toThrow('The value of "prop" must be higher than 5');
  });

  test("generalValidationCheck: notEmpty throws", () => {
    const vp: any = { mode: "TYPE_CHECK", notEmpty: true, type: "string" };
    expect(() =>
      exportedForTesting.generalValidationCheck("", vp, "prop", true, true),
    ).toThrow('The value of "prop" must not be empty.');
  });

  test("generalValidationCheck: isArray throws", () => {
    const vp: any = { mode: "TYPE_CHECK", isArray: true, type: "object" };
    expect(() =>
      exportedForTesting.generalValidationCheck({}, vp, "prop", true, true),
    ).toThrow('The value of "prop" should be an array.');
  });

  test("generalValidationCheck: custom validateFunction called", () => {
    const mockFn = jest.fn();
    const vp: any = { mode: "TYPE_CHECK", validateFunction: mockFn };
    const res = exportedForTesting.generalValidationCheck(
      123,
      vp,
      "prop",
      false,
      true,
    );
    expect(res).toBe(true);
    expect(mockFn).toHaveBeenCalledWith("prop", 123, false, true);
  });

  test("validateStyleObjectFunction: unknown format throws", () => {
    const styles: any = {
      s1: {
        format: "__unknown_format__",
      },
    };
    expect(() => validateStyleObjectFunction(styles, true, true)).toThrow(
      'The "__unknown_format__" format that has been used is not defined.',
    );
  });

  test("validateStyleObjectFunction: underline+doubleUnderline branch", () => {
    const styles: any = {
      s1: {
        underline: true,
        doubleUnderline: true,
      },
    };
    expect(() => validateStyleObjectFunction(styles, true, true)).not.toThrow();
  });

  test("validateSheetArrayFunction: header comment non-string/object passes", () => {
    const sheet: any = {
      headers: [{ label: "a", text: "a", comment: 123 }],
      data: [],
    };
    expect(() =>
      validateSheetArrayFunction(sheet as any, true, true),
    ).not.toThrow();
  });

  test("validateSheetArrayFunction: headers type invalid throws", () => {
    const sheet: any = { headers: "not-an-array" };
    expect(() => validateSheetArrayFunction(sheet as any, true, true)).toThrow(
      'The Type of The "headers" is not valid',
    );
  });
});
