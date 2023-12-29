import {
  FormulaSetting,
  SingleRefFormulaSetting,
  Styles,
} from "../data-model/excel-table";

export function generateCellRowCol(
  string: string,
  formula: FormulaSetting | SingleRefFormulaSetting,
  sheetIndex: number,
  styles?: Styles
) {
  let column = string.replace(/[0-9]/g, "");
  let cell = "";
  let row = parseInt(string.substr(column.length));
  let needCalcChain = false;
  let chainCell = "";
  if ((<SingleRefFormulaSetting>formula).refrenceCell) {
    const form = <SingleRefFormulaSetting>formula;
    let value = "";
    if (typeof form.value != "undefined") {
      value = "," + form.value;
    }
    let className = "";
    if (form.type == "COT") {
      className = "_xlfn.";
    }
    const styleString =
      "styleId" in form ? 's="' + styles![form.styleId!].index + '"' : "";
    cell =
      '<c r="' +
      string +
      '" ' +
      styleString +
      "><f>" +
      className +
      formula.type +
      "(" +
      form.refrenceCell +
      value +
      ")</f></c>";
    chainCell = '<c r="' + string + '" i="' + sheetIndex + '"/>';
  } else {
    const form = <FormulaSetting>formula;
    cell =
      '<c r="' +
      string +
      '" ' +
      (styles && typeof form.styleId === "string" && styles[form.styleId]
        ? 's="' + styles[form.styleId].index + '" '
        : "") +
      "> " +
      "    <f>" +
      form.type +
      "(" +
      form.start +
      ":" +
      form.end +
      ")</f> " +
      "</c>";
  }

  return {
    column,
    row,
    cell,
    needCalcChain,
    chainCell,
  };
}
