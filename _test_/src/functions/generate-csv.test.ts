import { afterEach, describe, expect, it, jest, test } from "@jest/globals";
import {
  generateCSV,
  exportedForTesting,
} from "../../../src/functions/generate-csv";
describe("generateCSV data tests", () => {
  test("should be function", () => {
    expect(typeof generateCSV).toBe("function");
  });
  test("separator", () => {
    expect(exportedForTesting.separator(true)).toBe(" ");
    expect(exportedForTesting.separator(false)).toBe(",");
  });

  test("converterCSV", () => {
    expect(exportedForTesting.converterCSV(null as any)).toBe("");
    expect(exportedForTesting.converterCSV(undefined as any)).toBe("");
    expect(exportedForTesting.converterCSV('"TEST"')).toBe('"""TEST"""');
    expect(exportedForTesting.converterCSV("'TEST'")).toBe("'TEST'");
    expect(exportedForTesting.converterCSV("TEST")).toBe("TEST");
    expect(exportedForTesting.converterCSV("TEST,")).toBe('"TEST,"');
    expect(exportedForTesting.converterCSV(1 as any)).toBe("1");
  });
  test("generateCSV",async () => {
    expect(
    await  generateCSV({
        backend: true,
        sheet: [
          {
            data: [
              { a: 1, b: "b1" },
              { a: 2, b: "b2" },
            ],
            headers: [
              {
                label: "a",
                text: "a",
              },
              {
                label: "b",
                text: "b",
              },
            ],
          },
        ],
      })
    ).toEqual(["a,b\n1,b1\n2,b2\n"]);
    expect(
     await generateCSV(
        {
          backend: true,
          sheet: [
            {
              data: [
                { a: 1, b: "b1" },
                { a: 2, b: "b2" },
              ],
              headers: [
                {
                  label: "a",
                  text: "a",
                },
                {
                  label: "b",
                  text: "b",
                },
              ],
            },
          ],
        },
        false,
        true
      )
    ).toEqual(["a b\n1 b1\n2 b2\n"]);
  },50000);
  test("nextLine", () => {
    expect(exportedForTesting.nextLine("nextLine ", 1)).toBe("nextLine\n");
    expect(exportedForTesting.nextLine("nextLine,", 1)).toBe("nextLine\n");
  });
});
