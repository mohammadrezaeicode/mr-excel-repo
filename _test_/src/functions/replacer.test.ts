import { beforeEach, describe, expect, it, jest, test } from "@jest/globals";
import { saveAs } from "file-saver";
// import JSZip from "jszip";
jest.mock("file-saver");
import { myFunction, replaceInExcel } from "../../../src/functions/replacer";
import { callApi, callApiReturnMockBlob, callApiReturnNull, mockBlob } from "../utils/call-api";
import { readFileSync } from "fs";
// This will use the mock we created

describe("replaceInExcel tests", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset the mock status before each test
  });
  test("should be function", () => {
    expect(typeof replaceInExcel).toBe("function");
  });
  test("should be function xyz", async () => {
    const val = (await replaceInExcel(
      "",
      { x: "2" },
      {
        backend: false,
        notSave: true,
        data: (await callApi(
          "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/x.xlsx?raw=true"
        )) as any,
      }
    )) as any;

    expect(typeof val).toBe("object");
    expect("size" in val).toBeTruthy();
    expect("type" in val).toBeTruthy();
    expect(val["type"]).toBe(
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    expect(typeof val.arrayBuffer).toBe("function");

    // expect(Array.isArray(abuffer)).toBeTruthy();
    // expect(JSZip.generateAsync).toHaveBeenCalledTimes(1);
    // expect(val.length).toBeGreaterThan(1000);
  }, 1000000);
  test("should be function mock", async () => {
    const val = await replaceInExcel(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/x.xlsx?raw=true",
      {},
      {
        backend: false,
        fetch: callApi,
        generateType: "array",
        notSave: false,
      }
    );
    expect(typeof val).toBe("undefined");
    expect(saveAs).toHaveBeenCalledTimes(1);
    // expect(val.length).toBeGreaterThan(1000);
  }, 120000);
  test("should be function", async () => {
    const val = (await replaceInExcel(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/x.xlsx?raw=true",
      {},
      {
        backend: true,
        fetch: callApi,
        fileName: "test",
        generateType: "array",
      }
    )) as number[];
    expect(Array.isArray(val)).toBe(true);
    expect(val.length).toBeGreaterThan(1000);
  }, 120000);
  test("should be function", async () => {
    const val = (await replaceInExcel(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/x.xlsx?raw=true",
      {},
      {
        backend: true,
        fetch: callApi,
        generateType: "array",
      }
    )) as number[];
    expect(Array.isArray(val)).toBe(true);
    expect(val.length).toBeGreaterThan(1000);
  }, 120000);
  test("should be function 2", async () => {
    const val = (await replaceInExcel(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/x.xlsx?raw=true",
      {},
      {
        backend: true,
        // fetch: callApi,
        generateType: "array",
      }
    )) as number[];
    expect(Array.isArray(val)).toBe(true);
    expect(val.length).toBeGreaterThan(1000);
  }, 120000);
  test("should be function 3-2", async () => {
    // jest.resetAllMocks()
    await replaceInExcel(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/x.xlsx?raw=true",
      {},
      {
        backend: false,
        fetch: callApi,
        generateType: "array",
      }
    ).catch((e) => {
    });
  }, 120000);
  test("should be function 3", async () => {
    await replaceInExcel(
      "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/x.xlsx?raw=true",
      {},
      {
        backend: true,
        fetch: callApiReturnNull,
        generateType: "array",
      }
    ).catch((e) => {
      expect(e).toBe("response is null");
    });
  }, 120000);
});
// myFile.test.ts
describe("Your test suite", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset the mock status before each test
  });

  it("should call saveAs with the correct arguments", async () => {
    // Assuming the function you are testing looks something like this

    await myFunction();

    expect(saveAs).toBeCalledTimes(1);
  });
});
