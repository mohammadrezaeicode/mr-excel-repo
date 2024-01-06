import { describe, expect, test } from "@jest/globals";
import { specialCharacterConverter } from "../../../src/utils/special-character";

describe("getColRowBaseOnRefString data tests", () => {
  test("should be function", () => {
    expect(typeof specialCharacterConverter).toBe("function");
  });
    test("input with special character", () => {
      expect(specialCharacterConverter("asf&gfd")).toBe("asf&amp;gfd");
      expect(specialCharacterConverter("asf&g<fd")).toBe("asf&amp;g&lt;fd");
      expect(specialCharacterConverter("asf&g<>fd")).toBe(
        "asf&amp;g&lt;&gt;fd"
      );
    });    test("input without special character", () => {
      expect(specialCharacterConverter("")).toBe("");
      expect(specialCharacterConverter("test test")).toBe("test test");
      expect(specialCharacterConverter(" test ")).toBe(
        " test "
      );
    });
});

