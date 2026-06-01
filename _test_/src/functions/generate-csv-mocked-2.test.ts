import { afterEach, describe, expect, jest, test } from "@jest/globals";
import {
  generateCSV,
  generateText,
} from "../../../src";
import { saveAs } from "file-saver";
import { ExcelTable } from "../../../src/data-model/excel-table";
import { DataModelAB } from "./generate-csv.test";
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
      true,
    );
    // expect(mockGenerateAsync).toHaveBeenCalledTimes(1);
    expect(saveAs).toHaveBeenCalledTimes(1);
    expect(result).toBe("done");
  });
  test("should create a zip and save it 2", async () => {
    let result = await generateCSV(
      {
        fileName: "test",
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
      true,
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
      false,
    );
    //  expect(mockGenerateAsync).toHaveBeenCalledTimes(1);
    expect(saveAs).toHaveBeenCalledTimes(1);
    expect(result).toBe("done");
  });
  test("should create a blob and save it 2", async () => {
    let result = await generateText(
      {
        fileName: "test",
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
    );
    //  expect(mockGenerateAsync).toHaveBeenCalledTimes(1);
    expect(saveAs).toHaveBeenCalledTimes(1);
    expect(result).toBe("done");
  });

  // Branch coverage tests
  test("generateCSV with asZip true (branch coverage)", async () => {
    const result = await generateCSV(
      {
        backend: false,
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
      } as ExcelTable<DataModelAB>,
      true, // asZip = true
    );
    expect(result).toBe("done");
    expect(saveAs).toHaveBeenCalled();
  }, 50000);

  test("generateText with isText true (branch coverage)", async () => {
    const result = await generateText(
      {
        backend: false,
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
      } as ExcelTable<DataModelAB>,
      false, // asZip = false
    );
    expect(result).toBe("done");
    expect(saveAs).toHaveBeenCalled();
  }, 50000);

  test("generateCSV with backend false and fileName specified (branch coverage)", async () => {
    const result = await generateCSV(
      {
        backend: false,
        fileName: "customFile",
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
      } as ExcelTable<DataModelAB>,
      false,
    );
    expect(result).toBe("done");
    expect(saveAs).toHaveBeenCalled();
    const callArgs = (saveAs as unknown as jest.Mock).mock.calls[0];
    expect(callArgs?.[1]).toContain("customFile");
  }, 50000);

  test("generateCSV with backend false without fileName (branch coverage)", async () => {
    const result = await generateCSV(
      {
        backend: false,
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
      } as ExcelTable<DataModelAB>,
      false,
    );
    expect(result).toBe("done");
    expect(saveAs).toHaveBeenCalled();
    const callArgs = (saveAs as unknown as jest.Mock).mock.calls[0];
    expect(callArgs?.[1]).toContain("tableRecord");
  }, 50000);

  test("generateCSV with withoutHeader true (branch coverage)", async () => {
    const result = await generateCSV({
      backend: true,
      sheet: [
        {
          withoutHeader: true,
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
    } as ExcelTable<DataModelAB>);
    expect(Array.isArray(result)).toBe(true);
    expect((result as string[])[0]).not.toContain("a,b");
  }, 50000);

  test("generateCSV with empty data (branch coverage)", async () => {
    const result = await generateCSV({
      backend: true,
      sheet: [
        {
          data: [],
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
    } as ExcelTable<DataModelAB>);
    expect(Array.isArray(result)).toBe(true);
    expect((result as string[])[0]).toContain("a,b");
  }, 50000);

  test("generateText with asZip true (branch coverage)", async () => {
    const result = await generateText(
      {
        backend: false,
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
      } as ExcelTable<DataModelAB>,
      true, // asZip = true
    );
    expect(result).toBe("done");
    expect(saveAs).toHaveBeenCalled();
  }, 50000);

  test("generateCSV with asZip true and fileName (branch coverage)", async () => {
    const result = await generateCSV(
      {
        backend: false,
        fileName: "myZipFile",
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
      } as ExcelTable<DataModelAB>,
      true, // asZip = true
    );
    expect(result).toBe("done");
    expect(saveAs).toHaveBeenCalled();
    const callArgs = (saveAs as unknown as jest.Mock).mock.calls[0];
    expect(callArgs?.[1]).toContain("myZipFile");
  }, 50000);

  test("generateCSV with multiple sheets (branch coverage)", async () => {
    const result = await generateCSV({
      backend: true,
      sheet: [
        {
          data: [{ a: 1, b: "b1" }],
          headers: [
            { label: "a", text: "a" },
            { label: "b", text: "b" },
          ],
        },
        {
          data: [{ a: 3, b: "b3" }],
          headers: [
            { label: "a", text: "a" },
            { label: "b", text: "b" },
          ],
        },
      ],
    } as ExcelTable<DataModelAB>);
    expect(Array.isArray(result)).toBe(true);
    expect((result as string[]).length).toBe(2);
  }, 50000);

  test("generateCSV with special characters in data (branch coverage)", async () => {
    const result = await generateCSV({
      backend: true,
      sheet: [
        {
          data: [
            { a: 1, b: 'test,"data"' },
            { a: 2, b: 'test"value' },
          ],
          headers: [
            { label: "a", text: "a" },
            { label: "b", text: "b" },
          ],
        },
      ],
    } as ExcelTable<DataModelAB>);
    expect(Array.isArray(result)).toBe(true);
    expect((result as string[])[0]).toContain('"""');
  }, 50000);
});
