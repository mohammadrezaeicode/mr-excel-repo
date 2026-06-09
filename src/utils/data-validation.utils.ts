import type {
  CellNumReference,
  CellStrReference,
  DataValidation,
} from "../data-model/excel-table";

/**
 * processDataValidation - generates XML for data validation rules in an Excel sheet.
 * @param {DataValidation[]} dataValidations - An array of data validation rules.
 * @returns {string} - The XML string for the data validation rules.
 */
export function processDataValidation(dataValidations: DataValidation[]) {
  return (
    dataValidations.reduce(
      (result, current) => {
        result += "<dataValidation" + generateAttribute(current) + ">";
        if (current.type == "list") {
          if (typeof current.value != "object") {
            throw "value1 should be object";
          }
          result +=
            "<formula1>" +
            processListTypeValue(current.value as CellStrReference) +
            "</formula1>";
        } else if (
          !current.operator ||
          current.operator === "between" ||
          current.operator === "notBetween"
        ) {
          current.value = current.value as CellNumReference;
          result +=
            "<formula1>" +
            current.value.min +
            "</formula1>" +
            "<formula2>" +
            current.value.max +
            "</formula2>";
        } else {
          result += "<formula1>" + current.value + "</formula1>";
        }
        result += "</dataValidation>";
        return result;
      },
      '<dataValidations count="' + dataValidations.length + '">',
    ) + "</dataValidations>"
  );
}
function generateAttribute(dataValidation: DataValidation) {
  let result = ' type="' + dataValidation.type + '" ';
  if (
    dataValidation.operator &&
    dataValidation.operator !== "between" &&
    dataValidation.type !== "list"
  ) {
    result += 'operator="' + dataValidation + '" ';
  }
  if (dataValidation.allowBlank === false) {
    result += 'allowBlank="0" ';
  } else {
    result += 'allowBlank="1" ';
  }
  if (dataValidation.type == "list") {
    if (dataValidation.showDropDown === false) {
      result += 'showDropDown="0" ';
    } else {
      result += 'showDropDown="1" ';
    }
  } else {
    if (dataValidation.showDropDown) {
      result += 'showDropDown="1" ';
    }
  }
  if (dataValidation.showInputMessage === false) {
    result += 'showInputMessage="0" ';
  } else {
    result += 'showInputMessage="1" ';
  }
  if (dataValidation.showErrorMessage === false) {
    result += 'showErrorMessage="0" ';
  } else {
    result += 'showErrorMessage="1" ';
  }
  result += 'sqref="' + dataValidation.start + ":" + dataValidation.end + '"';
  return result;
}
function processListTypeValue(cellReference: CellStrReference) {
  let startRow = cellReference.start.replace(/[a-zA-Z]/g, "");
  let endRow = cellReference.end.replace(/[a-zA-Z]/g, "");
  let startColumn = cellReference.start.replace(/[0-9]/g, "");
  let endColumn = cellReference.end.replace(/[0-9]/g, "");
  return (
    "$" + startColumn + "$" + startRow + ":" + "$" + endColumn + "$" + endRow
  );
}
