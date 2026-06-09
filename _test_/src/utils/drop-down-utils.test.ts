import { describe, expect, test } from "@jest/globals";
import { generateDropDown } from "../../../src/utils/drop-down-utils";
describe("getColRowBaseOnRefString data tests", () => {
  test("generateDropDown should be function", () => {
    expect(typeof generateDropDown).toBe("function");
  });
  test("generateDropDown -> false array", () => {
    expect(generateDropDown([false] as any)).toBe(
      "<dataValidations></dataValidations>",
    );
    expect(generateDropDown([undefined] as any)).toBe(
      "<dataValidations></dataValidations>",
    );
    expect(generateDropDown([null] as any)).toBe(
      "<dataValidations></dataValidations>",
    );
  });

  test("generateDropDown -> array", () => {
    expect(
      generateDropDown([
        {
          for: ["A1", "A2", "A4"],
          option: ["ice", "test", "create"],
        },
      ]),
    ).toBe(
      '<dataValidations><dataValidation type="list" allowBlank="1" showErrorMessage="1" sqref="A1 A2 A4"><formula1>&quot;ice,test,create&quot;</formula1></dataValidation></dataValidations>',
    );
  });
});
