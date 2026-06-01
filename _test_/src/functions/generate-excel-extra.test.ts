/**
 * @jest-environment node
 */
import { describe, expect, test, jest } from "@jest/globals";
import { generateExcel } from "../../../src/functions/generate-excel";
import type { ExcelTable, Title } from "../../../src/data-model/excel-table";
import { readGeneratedFile } from "../read";

jest.mock("../../../src/utils/image");

describe("generateExcel image and style branches", () => {
  test("cover some part", async () => {
    const { toDataURL2 } = require("../../../src/utils/image");
    toDataURL2.mockClear();
    (toDataURL2 as any).mockResolvedValue(Buffer.from("fakeimage"));

    const excelTable: any = {
      notSave: true,
      activateConditionalFormatting: true,
      styles: {
        hfStyle: {
          type: "headerFooter",
          fontFamily: "Segoe UI",
          bold: true,
          italic: true,
          size: 11,
          doubleUnderline: true,
          color: "#ff0000",
        } as any,
        cfStyle: {
          type: "conditionalFormatting",
          color: "#0000ff",
          backgroundColor: "#00ff00",
        } as any,
      } as any,
      sheet: [
        {
          asTable: true,
          zoomScale: {
            scale: 2,
            startAt: "A2",
          },
          title: {
            text: "T",
            styleId: "hfStyle",
            height: 20, // TODO: why height not added
            consommeRow: 1,
          } as Title,
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "1" }],
          backgroundImage: "http://example.com/bg.png?test=123",
          images: [
            { url: "http://example.com/i1.jpg?test=123" } as any,
            { url: "http://example.com/i1.png?test=123" } as any,
            { url: "http://example.com/i1?test=123" } as any,
            { url: "http://example.com/i1.jpeg?test=123" } as any,
            { url: "http://example.com/i1" } as any,
            { url: "http://example.com/i1.gif?test=123" } as any,
          ],
        },
        ,
        {},
      ],
    };

    const out = await generateExcel(excelTable);
    const result = (await readGeneratedFile(out, true)) as any;
    expect(result.fileList.length).toBeGreaterThan(0);
    expect(typeof result.data === "object").toBe(true);
  }, 150000);
  test("cover some part2", async () => {
    const { toDataURL2 } = require("../../../src/utils/image");
    toDataURL2.mockClear();
    (toDataURL2 as any).mockResolvedValue(Buffer.from("fakeimage"));

    const excelTable: any = {
      notSave: true,
      activateConditionalFormatting: true,
      styles: {
        hS:{
          color:'red'
        },
        hfStyle: {
          type: "headerFooter",
          fontFamily: "Segoe UI",
          bold: true,
          italic: true,
          size: 11,
          doubleUnderline: true,
          color: "#ff0000",
        } as any,
        cfStyle: {
          type: "conditionalFormatting",
          color: "#0000ff",
          backgroundColor: "#00ff00",
        } as any,
      } as any,
      sheet: [
        {
          headerStyleKey:'hS',
          asTable: {
            type: "Dark",

            styleNumber: 1,

            firstColumn: true,

            lastColumn: true,

            rowStripes: true,

            columnStripes: true,
          },
          zoomScale: {
            scale: 2,
            startAt: "A2",
          },
          title: {
            text: "T",
            styleId: "hfStyle",
            height: 20, // TODO: why height not added
            consommeRow: 1,
          } as Title,
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "1" }],
          backgroundImage: "http://example.com/bg.png?test=123",
          images: [
            { url: "http://example.com/i1.jpg?test=123" } as any,
            { url: "http://example.com/i1.png?test=123" } as any,
            { url: "http://example.com/i1?test=123" } as any,
            { url: "http://example.com/i1.jpeg?test=123" } as any,
            { url: "http://example.com/i1" } as any,
            { url: "http://example.com/i1.gif?test=123" } as any,
          ],
        },
        ,
        {},
      ],
    };

    const out = await generateExcel(excelTable);
    const result = (await readGeneratedFile(out, true)) as any;
    expect(result.fileList.length).toBeGreaterThan(0);
    expect(typeof result.data === "object").toBe(true);
  }, 150000);

  test("processes backgroundImage and images with headerFooter and CF styles", async () => {
    const { toDataURL2 } = require("../../../src/utils/image");
    toDataURL2.mockClear();
    (toDataURL2 as any).mockResolvedValue(Buffer.from("fakeimage"));

    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      activateConditionalFormatting: true,
      styles: {
        hfStyle: {
          type: "headerFooter",
          fontFamily: "Segoe UI",
          bold: true,
          italic: true,
          size: 11,
          doubleUnderline: true,
          color: "#ff0000",
        } as any,
        cfStyle: {
          type: "conditionalFormatting",
          color: "#0000ff",
          backgroundColor: "#00ff00",
        } as any,
      } as any,
      sheet: [
        {
          title: { text: "T" } as any,
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "1" }],
          backgroundImage: "http://example.com/bg.png",
          images: [{ url: "http://example.com/i1.jpg?test=123" } as any],
        },
      ],
    };

    const out = await generateExcel(excelTable);
    const result = (await readGeneratedFile(out, true)) as any;
    expect(result.fileList.length).toBeGreaterThan(0);
    expect(typeof result.data === "object").toBe(true);
  }, 150000);

  test("rejects when image loader returns falsy for backgroundImage", async () => {
    const { toDataURL2 } = require("../../../src/utils/image");
    (toDataURL2 as any).mockResolvedValue(null);

    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      sheet: [
        {
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "1" }],
          backgroundImage: "http://example.com/bg.png",
        },
      ],
    };

    await expect(generateExcel(excelTable)).rejects.toEqual("image not load");
  });
  test("rejects when image loader returns falsy for backgroundImage(no type)", async () => {
    const { toDataURL2 } = require("../../../src/utils/image");
    (toDataURL2 as any).mockResolvedValue(null);

    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      sheet: [
        {
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "1" }],
          backgroundImage: "http://example.com/bg?test=123",
        },
      ],
    };

    await expect(generateExcel(excelTable)).rejects.toEqual("image not load");
  });
  test("rejects when image loader returns falsy for backgroundImage(no type2)", async () => {
    const { toDataURL2 } = require("../../../src/utils/image");
    (toDataURL2 as any).mockResolvedValue(null);

    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      sheet: [
        {
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "1" }],
          backgroundImage: "http://examplecom/bg",
          images: [{ url: "http://examplecom/i1" } as any],
        },
      ],
    };

    await expect(generateExcel(excelTable)).rejects.toEqual("image not load");
  });
  test("rejects when image loader returns falsy for backgroundImage(jpg)", async () => {
    const { toDataURL2 } = require("../../../src/utils/image");
    (toDataURL2 as any).mockResolvedValue(null);

    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      sheet: [
        {
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "1" }],
          backgroundImage: "http://example.com/bg.jpg?test=123",
        },
      ],
    };

    await expect(generateExcel(excelTable)).rejects.toEqual("image not load");
  });
  test("rejects when image loader returns falsy for backgroundImage(jpeg)", async () => {
    const { toDataURL2 } = require("../../../src/utils/image");
    (toDataURL2 as any).mockResolvedValue(null);

    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      sheet: [
        {
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "1" }],
          backgroundImage: "http://example.com/bg.jpeg?test=123",
        },
      ],
    };

    await expect(generateExcel(excelTable)).rejects.toEqual("image not load");
  });
  test("rejects when image loader returns falsy for backgroundImage(gif)", async () => {
    const { toDataURL2 } = require("../../../src/utils/image");
    (toDataURL2 as any).mockResolvedValue(null);

    const excelTable: ExcelTable<{ a: string }> = {
      notSave: true,
      sheet: [
        {
          headers: [{ label: "a", text: "a" }],
          data: [{ a: "1" }],
          backgroundImage: "http://example.com/bg.gif?test=123",
        },
      ],
    };

    await expect(generateExcel(excelTable)).rejects.toEqual("image not load");
  });
});
