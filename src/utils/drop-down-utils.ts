import { DropDown } from "../data-model/excel-table";
export function generateDropDown(dropDowns: DropDown[] | undefined) {
  if (!Array.isArray(dropDowns) || !dropDowns.length) {
    return "";
  }
  const dropDownLength = dropDowns.length;
  let result = "<dataValidations>";
  for (let index = 0; index < dropDownLength; index++) {
    const dropDown = dropDowns[index];
    const sqref = dropDown.for.reduce((result: string, current: string) => {
      return result + " " + current;
    }, "");
    const options = dropDown.option.join(",");
    result +=
      '<dataValidation type="list" allowBlank="1" showErrorMessage="1" sqref="' +
      sqref.trim() +
      '">' +
      "<formula1>&quot;" +
      options +
      "&quot;</formula1></dataValidation>";
  }
  result += "</dataValidations>";
  return result;
}
