import { describe, expect, test } from "@jest/globals";
import {
  exportedForTesting,
  generateMultiStyleValue,
} from "../../../src/utils/multi-value";
// not completed
describe("splitAndMatching function tests", () => {
  test("should be function", () => {
    expect(typeof exportedForTesting.splitAndMatching).toBe("function");
  });
});
describe("splitBaseOnMatch function tests", () => {
  test("should be function", () => {
    expect(typeof exportedForTesting.splitBaseOnMatch).toBe("function");
  });
  test("should be function", () => {
    expect(exportedForTesting.splitBaseOnMatch(["t", "st"], "test")).toEqual([
      "",
      "e",
      "",
    ]);
  });
});
describe("generateMultiStyleValue function tests", () => {
  test("should be function", () => {
    expect(typeof generateMultiStyleValue).toBe("function");
  });
  test("should be function", () => {
    expect(
      generateMultiStyleValue(
        {
          reg: [
            {
              reg: /t/g,
              styleId: "st",
            },
          ],
        },
        "test data",
        {
          st: "<rPr><b/><i/></rPr>",
        },
        "st",
        false
      )
    ).toBe(
      '<si><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">es</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve"> da</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t>a</t></r></si>'
    );
    expect(
      generateMultiStyleValue(
        {
          reg: [
            {
              reg: /t/g,
              styleId: "st",
            },
          ],
        },
        "test data",
        {
          st: "<rPr><b/><i/></rPr>",
        },
        "st",
        true
      )
    ).toBe(
      '<si><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">es</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve"> da</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t>a</t></r></si>'
    );
    expect(
      generateMultiStyleValue(
        {
          reg: [
            {
              reg: /t/g,
              styleId: "st",
            },
            {
              reg: /t/g,
              styleId: "st",
            },
          ],
        },
        "test data",
        {
          st: "<rPr><b/><i/></rPr>",
        },
        "st",
        true
      )
    ).toBe(
      '<si><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">es</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve"> da</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t>a</t></r></si>'
    );
    expect(
      generateMultiStyleValue(
        {
          reg: [
            {
              reg: /t/g,
              styleId: "st",
            },
            {
              reg: /e/g,
              styleId: "st",
            },
          ],
        },
        "test data",
        {
          st: "<rPr><b/><i/></rPr>",
        },
        "st",
        false
      )
    ).toBe(
      '<si><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">e</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">s</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve"> da</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t>a</t></r></si>'
    );
    expect(
      generateMultiStyleValue(
        {
          reg: [
            {
              reg: /t/g,
              styleId: "st",
            },
            {
              reg: /e/g,
              styleId: "sq",
            },
          ],
        },
        "test data",
        {
          st: "<rPr><b/><i/></rPr>",
        },
        "st",
        false
      )
    ).toBe(
      '<si><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">e</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">s</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve"> da</t></r><r><rPr><b/><i/></rPr><t xml:space="preserve">t</t></r><r><rPr><b/><i/></rPr><t>a</t></r></si>'
    );
    
  });
});
