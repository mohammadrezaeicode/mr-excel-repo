import {
  describe,
  expect,
  test,
  jest,
} from "@jest/globals";
import {
  generateContrastTextColor,
  exportedForTesting,
  hexToRgbArray,
  hexToRgbNegative,
  rgbToHex,
  convertToHex,
} from "../../../src/utils/color";
// let windowSpy;
// // let documentSpy;

// beforeEach(() => {
//   Object.defineProperty(global, "document", {});
// //   documentSpy = jest.spyOn(document, "document", "get");
// });

// afterEach(() => {
//   windowSpy.mockRestore();
// //   documentSpy.mockRestore();
// });
describe("hexToRgbArray function tests", () => {
  test("Type should be function", () => {
    expect(typeof hexToRgbArray).toBe("function");
  });
  test("hex for white color transform to rgb", () => {
    expect(hexToRgbArray("FFFFFF")).toEqual([255, 255, 255]);
    expect(hexToRgbArray("FFF")).toEqual([255, 255, 255]);
  });
  test("hex for black color transform to rgb", () => {
    expect(hexToRgbArray("000")).toEqual([0, 0, 0]);
    expect(hexToRgbArray("000000")).toEqual([0, 0, 0]);
  });
  test("invalid data passed", () => {
    expect(hexToRgbArray("XXCVDS")).toEqual([0, 0, 0]);
  });
  test("invalid data passed", () => {
    expect(hexToRgbArray("FFFFF")).toEqual([0, 0, 0]);
  });
  test("empty data passed", () => {
    expect(hexToRgbArray("")).toEqual([0, 0, 0]);
  });
});
describe("generateContrastTextColor function tests", () => {
  test("Type should be function", () => {
    expect(typeof generateContrastTextColor).toBe("function");
  });
  test("white while return black", () => {
    expect(generateContrastTextColor("FFFFFF")).toBe("rgb(0,0,0)");
  });
  test("black while return white", () => {
    expect(generateContrastTextColor("000")).toBe("rgb(255,255,255)");
  });
  test("invalid input return white", () => {
    expect(generateContrastTextColor("xxx")).toBe("rgb(255,255,255)");
  });
  test("white while return black", () => {
    expect(generateContrastTextColor("FFFFFF")).toBe("rgb(0,0,0)");
  });
});
describe("removeSpace function test", () => {
  test("Type should be function", () => {
    expect(typeof exportedForTesting.removeSpace).toBe("function");
  });
  test("remove Space after text", () => {
    expect(exportedForTesting.removeSpace("ab ")).toBe("ab");
    expect(exportedForTesting.removeSpace("ab     ")).toBe("ab");
  });
  test("remove Space before text", () => {
    expect(exportedForTesting.removeSpace("  ab")).toBe("ab");
    expect(exportedForTesting.removeSpace("    ab")).toBe("ab");
  });
  test("remove Space before and after text", () => {
    expect(exportedForTesting.removeSpace("  ab ")).toBe("ab");
    expect(exportedForTesting.removeSpace("    ab   ")).toBe("ab");
  });
  test("remove Space between test", () => {
    expect(exportedForTesting.removeSpace("  ab x ")).toBe("abx");
    expect(exportedForTesting.removeSpace("    ab   x ")).toBe("abx");
  });
    test("no Space should be in result", () => {
      expect(exportedForTesting.removeSpace("abx").indexOf(" ")).toBe(-1);
    });
  test("no Space input", () => {
    expect(exportedForTesting.removeSpace("abx")).toBe("abx");
    expect(exportedForTesting.removeSpace("abx")).toBe("abx");
  });
});
describe("valueToHex function test", () => {
  test("Type should be function", () => {
    expect(typeof exportedForTesting.valueToHex).toBe("function");
  });
  test("input number: 255", () => {
    expect(exportedForTesting.valueToHex(255)).toBe("ff");
  });
  test('input string: "255"', () => {
    expect(exportedForTesting.valueToHex("255")).toBe("ff");
  });
  test("input number: 0", () => {
    expect(exportedForTesting.valueToHex(0)).toBe("00");
  });
  test('input string: "0"', () => {
    expect(exportedForTesting.valueToHex("0")).toBe("00");
  });
});
describe("hexToRgbNegative function test", () => {
  test("Type should be function", () => {
    expect(typeof hexToRgbNegative).toBe("function");
  });
  test("white should be black", () => {
    expect(hexToRgbNegative("FFFFFF")).toBe("rgb(0,0,0)");
    expect(hexToRgbNegative("FFF")).toBe("rgb(0,0,0)");
  });
  test("black should be white", () => {
    expect(hexToRgbNegative("000000")).toBe("rgb(255,255,255)");
    expect(hexToRgbNegative("000")).toBe("rgb(255,255,255)");
  });
});
describe("extendHexValue function test", () => {
  test("Type should be function", () => {
    expect(typeof exportedForTesting.extendHexValue).toBe("function");
  });
  test("extend fff", () => {
    expect(exportedForTesting.extendHexValue("fff")).toBe("ffffff");
    expect(exportedForTesting.extendHexValue("#fff")).toBe("ffffff");
  });
  test("extend 000", () => {
    expect(exportedForTesting.extendHexValue("000")).toBe("000000");
    expect(exportedForTesting.extendHexValue("#000")).toBe("000000");
  });
  test("invalid input", () => {
    expect(exportedForTesting.extendHexValue("0000")).toBe("0000");
  });
});
describe("rgbToHex function test", () => {
  test("Type should be function", () => {
    expect(typeof rgbToHex).toBe("function");
  });
  test("convert rgb(0,0,0)", () => {
    expect(rgbToHex("rgb(0,0,0)")).toBe("000000");
  });
  test("convert rgb(255,255,255)", () => {
    expect(rgbToHex("rgb(255,255,255)")).toBe("FFFFFF");
  });
  test("invalid input", () => {
    expect(rgbToHex("xxx")).toEqual(null);
  });
    test("empty input", () => {
      expect(rgbToHex("")).toEqual(null);
    });
});
describe("convertToHex function test", () => {
  test("Type should be function", () => {
    expect(typeof convertToHex).toBe("function");
  });
  test("client side css variable - white", () => {
    (global as any).getComputedStyle = jest.fn().mockReturnValue({
      getPropertyValue: jest.fn().mockReturnValue("rgba(255, 255, 255,0.5)"),
    });
    (global as any).document = {
      documentElement: {},
    };
    expect(convertToHex("var(--test)", false)).toBe("FFFFFF");
  });
  test("client side css variable - black", () => {
      (global as any).getComputedStyle = jest.fn().mockReturnValue({
        getPropertyValue: jest.fn().mockReturnValue("rgba(0, 0, 0,0.5)"),
      });
      (global as any).document = {
        documentElement: {},
      };
      expect(convertToHex("var(--test)", false)).toBe("000000");
    });
    test("client side css variable - invalid", () => {
      (global as any).getComputedStyle = jest.fn().mockReturnValue({
        getPropertyValue: jest.fn().mockReturnValue("rgba(0, 0, 0,0.5)"),
      });
      (global as any).document = {
        documentElement: {},
      };
      expect(convertToHex("var(--test", false)).toBe("var(--test");
    });
});
