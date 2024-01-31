import { describe, expect, test } from "@jest/globals";
import { toDataURL2 } from "../../../src/utils/image";
import { callApi } from "./call-api";

describe("toDataURL2 data tests", () => {
  test("should be function", () => {
    expect(typeof toDataURL2).toBe("function");
  });
  test("use valid url input", async () => {
    await toDataURL2(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex16.PNG?raw=true",
      "image.PNG",
      true,
      callApi
    ).then((res: any) => {
      expect(res).toBeTruthy();
      expect(typeof res).toBe("object");
    });
  }, 120000);
  test("use valid url input", async () => {
    await toDataURL2("invalid url", "image.PNG", true, callApi).catch(
      (err: any) => {
        expect(err.message.length).toBeGreaterThan(0);
      }
    );
  });
  test("use valid url input", async () => {
    await toDataURL2(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/xxxx.PNG?raw=true",
      "image.PNG",
      true,
      callApi
    ).catch((err:any) => {
      expect(err.message).toMatch("Request failed with status code 404");
    });
  });
});
