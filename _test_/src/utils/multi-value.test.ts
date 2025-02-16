import { describe, expect, test } from "@jest/globals";
import { generateMultiStyleByArray } from "../../../src/utils/multi-value";
// not completed
describe("generateMultiStyleByArray function tests", () => {
  test("should be function", () => {
    expect(typeof generateMultiStyleByArray).toBe("function");
  });
  test("check one item", () => {
    expect(
      generateMultiStyleByArray(
        [
          {
            styleId: "c2",
            value: "text",
          },
        ],
        {
          c2: "style2",
          def:"defaultStyle"
        },
        "def"
      )
    ).toBe('<si><r>style2<t xml:space="preserve">text</t></r></si>');
  });
  test("check one item,no style", () => {
    expect(
      generateMultiStyleByArray(
        [
          {
            value: "text",
          },
        ],
        {
          c2: "style2",
          def:"defaultStyle"
        },
        "def"
      )
    ).toBe('<si><r>defaultStyle<t xml:space="preserve">text</t></r></si>');
  });
  test("check multi item", () => {
    expect(
      generateMultiStyleByArray(
        [
          {
            value: "text",
          },
          {
            value: "xx",
            styleId: "c2",
          },
        ],
        {
          c2: "style2",
          def:"defaultStyle"
        },
        "def"
      )
    ).toBe(
      '<si><r>defaultStyle<t xml:space="preserve">text</t></r><r>style2<t xml:space="preserve">xx</t></r></si>'
    );
  });
  test("check no item", () => {
    expect(
      generateMultiStyleByArray(
        [],
        {
          c2: "style2",
          def:"defaultStyle"
        },
        "def"
      )
    ).toBe('<si></si>');
  });
});
