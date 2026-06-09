import { describe, expect, it } from "@jest/globals";
import { processDataValidation } from "../../../src/utils/data-validation.utils";

describe("processDataValidation", function () {
  it("processDataValidation should be function", function () {
    expect(typeof processDataValidation).toBe("function");
  });
  it("processDataValidation validation data", function () {
    const dataValidation = processDataValidation([
      {
        type: "whole",
        value: {
          min: 1,
          max: 50,
        },
        start: "A1",
        end: "C17",
      },
      {
        type: "list",
        start: "E3",
        end: "F5",
        value: {
          start: "D5",
          end: "F5",
        },
      },
    ]);
    expect(dataValidation).toBe(
      '<dataValidations count="2"><dataValidation type="whole" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="A1:C17"><formula1>1</formula1><formula2>50</formula2></dataValidation><dataValidation type="list" allowBlank="1" showDropDown="1" showInputMessage="1" showErrorMessage="1" sqref="E3:F5"><formula1>$D$5:$F$5</formula1></dataValidation></dataValidations>',
    );
  });
  it("processDataValidation validation data", function () {
    const dataValidation = processDataValidation([
      {
        type: "whole",
        value: {
          min: 1,
          max: 50,
        },
        start: "A1",
        showDropDown: true,
        end: "C17",
      },
      {
        type: "list",
        start: "E3",
        end: "F5",
        showDropDown: false,
        showInputMessage: false,
        showErrorMessage: false,
        value: {
          start: "D5",
          end: "F5",
        },
      },
    ]);
    expect(dataValidation).toBe(
      '<dataValidations count=\"2\"><dataValidation type=\"whole\" allowBlank=\"1\" showDropDown=\"1\" showInputMessage=\"1\" showErrorMessage=\"1\" sqref=\"A1:C17\"><formula1>1</formula1><formula2>50</formula2></dataValidation><dataValidation type=\"list\" allowBlank=\"1\" showDropDown=\"0\" showInputMessage=\"0\" showErrorMessage=\"0\" sqref=\"E3:F5\"><formula1>$D$5:$F$5</formula1></dataValidation></dataValidations>',
    );
  });
  it("processDataValidation validation data", function () {
    try {
      processDataValidation([
        {
          type: "list",
          start: "E3",
          end: "F5",
          showDropDown: false,
          showInputMessage: false,
          showErrorMessage: false,
          value: 123,
        },
      ]);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe("value1 should be object");
    }
  });
});
