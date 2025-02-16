import { afterEach, describe, expect, it, jest, test } from "@jest/globals";
import {
  generateCSV,
  exportedForTesting,
} from "../../../src/functions/generate-csv";
import { saveAs } from "file-saver";
import JSZip from "jszip";

// Mock file-saver
jest.mock("file-saver", () => ({
  saveAs: jest.fn(),
}));

// Mock JSZip
const mockGenerateAsync = jest.fn().mockImplementation(() => Promise.resolve());
const mockFile = jest.fn().mockReturnThis();

jest.mock("jszip", () => {
  return jest.fn().mockImplementation(() => {
    return {
      file: mockFile,
      generateAsync: mockGenerateAsync,
    };
  });
});
afterEach(() => {
  jest.clearAllMocks();
});
describe("generateCSV", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("should create a zip and save it", async () => {
    let result = await generateCSV(
      {
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
      true
    );
    // expect(mockGenerateAsync).toHaveBeenCalledTimes(1);
    expect(saveAs).toHaveBeenCalledTimes(1);
    expect(result).toBe("done");
  });
  test("should create a zip and save it 2", async () => {
    let result = await generateCSV(
      {
        fileName:"test",
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
      true
    );
    // expect(mockGenerateAsync).toHaveBeenCalledTimes(1);
    expect(saveAs).toHaveBeenCalledTimes(1);
    expect(result).toBe("done");
  });
   test("should create a blob and save it", async () => {
     let result = await generateCSV(
       {
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
       false
     );
    //  expect(mockGenerateAsync).toHaveBeenCalledTimes(1);
     expect(saveAs).toHaveBeenCalledTimes(1);
     expect(result).toBe(undefined);
   });
   test("should create a blob and save it 2", async () => {
     let result = await generateCSV(
       {
        fileName:"test",
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
     );
     //  expect(mockGenerateAsync).toHaveBeenCalledTimes(1);
     expect(saveAs).toHaveBeenCalledTimes(1);
     expect(result).toBe(undefined);
   });
});
