import { describe, expect, test } from "@jest/globals";
import { toDataURL2 } from "../../../src/utils/image";

describe("toDataURL2 data tests", () => {
  test("should be function", () => {
    expect(typeof toDataURL2).toBe("function");
  });
  test("use valid url input", async () => {
    await toDataURL2(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex16.PNG?raw=true",
      "image.PNG"
    ).then((res) => {
      expect(res).toBeTruthy();
      expect(typeof res).toBe("object");
    });
  },120000);
  test("use valid url input", async () => {
    await toDataURL2(
      "invalid url",
      "image.PNG"
    ).catch((err) => {
      expect(err.message).toMatch("Failed to parse URL from invalid url");
    });
  });
});