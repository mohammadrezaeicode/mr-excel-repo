import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { saveAs } from "file-saver";
jest.mock("file-saver");
import { replaceInExcel } from "../../../src/functions/replacer";
// import { readFileSync } from "node:fs";
import { callApi } from "../utils/call-api";
// import { readFile } from "fs/promises";
describe("replaceInExcel tests", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset the mock status before each test
  });
  test("should be function", () => {
    expect(typeof replaceInExcel).toBe("function");
  });
  test("should throw error",async()=>{
    await expect(replaceInExcel(null, {})).rejects.toBe(
      "A data or file URL must be provided.",
    );
    
  })
  test("should be function mock", async () => {
    const localFetchMock: jest.MockedFunction<typeof fetch> = jest.fn(
      async (input) =>
        ({
          ok: true,
          json: async () => ({
            requestedUrl: String(input),
          }),
          blob: async () => {
            console.log("mocked");
            // const buffer = await readFile("ex.xlsx");
            // const buffer =  readFileSync("ex.xlsx");
            // const arrayBuffer = buffer.buffer.slice(
            //   buffer.byteOffset,
            //   buffer.byteOffset + buffer.byteLength,
            // );
            // return  arrayBuffer
              // const buffer = readFileSync("ex.xlsx");

              // return new Blob([buffer], {
              //   type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              // });
              return await callApi(
                "https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/x.xlsx?raw=true",
              );
          },
        }) as any,
    );

    global.fetch = localFetchMock;
    const val = await replaceInExcel("invalid url", {});
    expect(typeof val).toBe("string");
    expect(saveAs).toHaveBeenCalledTimes(1);
    // expect(val.length).toBeGreaterThan(1000);
  }, 120000);
});
