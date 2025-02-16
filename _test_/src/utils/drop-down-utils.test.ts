import { describe, expect, test, jest, it } from "@jest/globals";
import {generateDropDown} from '../../../src/utils/drop-down-utils'
describe("getColRowBaseOnRefString data tests", () => {
    test("generateDropDown should be function", () => {
      expect(typeof generateDropDown).toBe("function");
    });
    test("generateDropDown -> not array/empty arry", () => {
      expect(generateDropDown([])).toBe("");
      expect(generateDropDown(1 as any)).toBe("");
      expect(generateDropDown("" as any)).toBe("");
    });
    test("generateDropDown -> arry", () => {
      expect(
        generateDropDown([
          {
            for: ["A1", "A2", "A4"],
            option: ["ice", "test", "create"],
          },
        ])
      ).toBe(
        '<dataValidations><dataValidation type="list" allowBlank="1" showErrorMessage="1" sqref="A1 A2 A4"><formula1>&quot;ice,test,create&quot;</formula1></dataValidation></dataValidations>'
      );
    });
})