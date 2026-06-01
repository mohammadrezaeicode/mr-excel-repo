/**
 * @jest-environment node
 */
import { describe, expect, test, jest, beforeEach } from "@jest/globals";
import { replaceInExcel } from "../../../src/functions/replacer";

jest.mock("file-saver");

describe("replaceInExcel branch coverage - additional", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  test("backend mode with nodebuffer generateType", async () => {
    const mockZip = {
      files: {
        "xl/sharedStrings.xml": { async: jest.fn(() => Promise.resolve("")) },
        "xl/worksheets/sheet1.xml": {
          async: jest.fn(() => Promise.resolve("<c>test</c>")),
        },
      },
      file: jest.fn(),
      generateAsync: jest.fn(() =>
        Promise.resolve(Buffer.from("test-buffer"))
      ),
    };

    const mockJSZip = {
      loadAsync: jest.fn(() => Promise.resolve(mockZip)),
    };

    jest.doMock("jszip", () => mockJSZip);

    const result = await replaceInExcel(
      null,
      { key: "value" },
      {
        backend: true,
        data: Buffer.from("fake"),
        generateType: "nodebuffer",
      }
    );

    expect(Array.isArray(result) || Buffer.isBuffer(result)).toBe(true);
  });

  test("frontend mode with blob generateType", async () => {
    const mockZip = {
      files: {
        "xl/sharedStrings.xml": { async: jest.fn(() => Promise.resolve("")) },
        "xl/worksheets/sheet1.xml": {
          async: jest.fn(() => Promise.resolve("<c>test</c>")),
        },
      },
      file: jest.fn(),
      generateAsync: jest.fn(() =>
        Promise.resolve(new Blob(["test"], { type: "application/octet-stream" }))
      ),
    };

    const mockJSZip = {
      loadAsync: jest.fn(() => Promise.resolve(mockZip)),
      default: {
        loadAsync: jest.fn(() => Promise.resolve(mockZip)),
      },
    };

    jest.doMock("jszip", () => mockJSZip);

    const result = await replaceInExcel(
      null,
      { key: "value" },
      {
        backend: false,
        notSave: true,
        data: new Blob(["test"], { type: "application/octet-stream" }),
      }
    );

    expect(result).toBeInstanceOf(Blob);
  });

  test("replaceInExcel with convertCall using custom fetch", async () => {
    const mockFetch = jest.fn((arg) =>
      Promise.resolve(Buffer.from("test-data"+arg))
    );

    const mockZip = {
      files: {
        "xl/sharedStrings.xml": { async: jest.fn(() => Promise.resolve("")) },
        "xl/worksheets/sheet1.xml": {
          async: jest.fn(() => Promise.resolve("<c>test</c>")),
        },
      },
      file: jest.fn(),
      generateAsync: jest.fn(() => Promise.resolve(Buffer.from("result"))),
    };

    const mockJSZip = {
      loadAsync: jest.fn(() => Promise.resolve(mockZip)),
    };

    jest.doMock("jszip", () => mockJSZip);

    const result = await replaceInExcel(
      "http://example.com/file.xlsx",
      { placeholder: "replacement" },
      {
        backend: true,
        fetch: mockFetch,
        generateType: "array",
      }
    );

    expect(mockFetch).toHaveBeenCalledWith("http://example.com/file.xlsx");
    expect(Array.isArray(result) || Buffer.isBuffer(result)).toBe(true);
  });

  test("replaceInExcel with empty replaceData", async () => {
    const mockZip = {
      files: {
        "xl/sharedStrings.xml": { async: jest.fn(() => Promise.resolve("")) },
        "xl/worksheets/sheet1.xml": {
          async: jest.fn(() => Promise.resolve("<c>{{key}}</c>")),
        },
      },
      file: jest.fn(),
      generateAsync: jest.fn(() => Promise.resolve(Buffer.from("result"))),
    };

    const mockJSZip = {
      loadAsync: jest.fn(() => Promise.resolve(mockZip)),
    };

    jest.doMock("jszip", () => mockJSZip);

    await replaceInExcel(
      null,
      {},
      {
        backend: true,
        data: Buffer.from("test"),
      }
    );

    expect(mockZip.file).toHaveBeenCalled();
  });

  test("replaceInExcel handles multiple placeholder replacements", async () => {
    const mockZip = {
      files: {
        "xl/sharedStrings.xml": {
          async: jest.fn(() =>
            Promise.resolve("{{name}} {{age}} {{name}}")
          ),
        },
        "xl/worksheets/sheet1.xml": {
          async: jest.fn(() =>
            Promise.resolve("<c>{{name}}</c><c>{{age}}</c>")
          ),
        },
      },
      file: jest.fn(),
      generateAsync: jest.fn(() => Promise.resolve(Buffer.from("result"))),
    };

    const mockJSZip = {
      loadAsync: jest.fn(() => Promise.resolve(mockZip)),
    };

    jest.doMock("jszip", () => mockJSZip);

    await replaceInExcel(
      null,
      { name: "John", age: "30" },
      {
        backend: true,
        data: Buffer.from("test"),
      }
    );

    expect(mockZip.file).toHaveBeenCalled();
    const fileCall = mockZip.file.mock.calls[0] as any;
    expect(fileCall).toBeDefined();
    expect(fileCall[1]).toContain("John");
    expect(fileCall[1]).toContain("30");
  });
});
