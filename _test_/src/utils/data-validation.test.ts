/**
 * @jest-environment node
 */
import { describe, expect, test } from "@jest/globals";
import { processDataValidation } from "../../../src/utils/data-validation.utils";
import type { DataValidation } from "../../../src/data-model/excel-table";

describe("processDataValidation branch coverage", () => {
  test("handles list type with cellStrReference value", () => {
    const validations: DataValidation[] = [
      {
        type: "list",
        value: { start: "A1", end: "A10" },
        start: "B1",
        end: "B10",
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain('type="list"');
    expect(result).toContain('showDropDown="1"');
    expect(result).toContain("$A$1:$A$10");
  });

  test("list type with showDropDown=false", () => {
    const validations: DataValidation[] = [
      {
        type: "list",
        value: { start: "A1", end: "A10" },
        start: "B1",
        end: "B10",
        showDropDown: false,
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain('showDropDown="0"');
  });

  test("between operator with CellNumReference", () => {
    const validations: DataValidation[] = [
      {
        type: "whole",
        operator: "between",
        value: { min: 10, max: 100 },
        start: "A1",
        end: "A10",
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain("<formula1>10</formula1>");
    expect(result).toContain("<formula2>100</formula2>");
  });

  test("notBetween operator", () => {
    const validations: DataValidation[] = [
      {
        type: "whole",
        operator: "notBetween",
        value: { min: 5, max: 50 },
        start: "C1",
        end: "C10",
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain("<formula1>5</formula1>");
    expect(result).toContain("<formula2>50</formula2>");
  });

  test("greaterThan operator with single value", () => {
    const validations: DataValidation[] = [
      {
        type: "whole",
        operator: "greaterThan",
        value: 42,
        start: "D1",
        end: "D10",
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain("<formula1>42</formula1>");
    expect(result).not.toContain("<formula2>");
  });

  test("allowBlank=false", () => {
    const validations: DataValidation[] = [
      {
        type: "whole",
        value: 10,
        start: "E1",
        end: "E10",
        allowBlank: false,
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain('allowBlank="0"');
  });

  test("allowBlank=true (default)", () => {
    const validations: DataValidation[] = [
      {
        type: "whole",
        value: 10,
        start: "F1",
        end: "F10",
        allowBlank: true,
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain('allowBlank="1"');
  });

  test("showInputMessage=false", () => {
    const validations: DataValidation[] = [
      {
        type: "whole",
        value: 10,
        start: "G1",
        end: "G10",
        showInputMessage: false,
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain('showInputMessage="0"');
  });

  test("showErrorMessage=false", () => {
    const validations: DataValidation[] = [
      {
        type: "whole",
        value: 10,
        start: "H1",
        end: "H10",
        showErrorMessage: false,
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain('showErrorMessage="0"');
  });

  test("throws when list type value is not object", () => {
    const validations: DataValidation[] = [
      {
        type: "list",
        value: "not-an-object",
        start: "I1",
        end: "I10",
      } as any,
    ];
    expect(() => processDataValidation(validations)).toThrow(
      "value1 should be object",
    );
  });

  test("multiple validations", () => {
    const validations: DataValidation[] = [
      {
        type: "whole",
        value: 5,
        start: "A1",
        end: "A10",
      } as any,
      {
        type: "list",
        value: { start: "B1", end: "B5" },
        start: "C1",
        end: "C10",
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain('count="2"');
    expect(result).toContain('type="whole"');
    expect(result).toContain('type="list"');
  });

  test("non-list type with showDropDown=true", () => {
    const validations: DataValidation[] = [
      {
        type: "whole",
        value: 10,
        start: "J1",
        end: "J10",
        showDropDown: true,
      } as any,
    ];
    const result = processDataValidation(validations);
    expect(result).toContain('showDropDown="1"');
  });
});
