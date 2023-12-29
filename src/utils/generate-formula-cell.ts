import {
  FormulaSetting,
  RelativeFormulaSetting,
  Styles,
} from "../data-model/excel-table";

export function generateCellRowCol(
  string: string,
  formula: FormulaSetting | RelativeFormulaSetting,
  sheetIndex: number,
  styles?: Styles
) {
  let column = string.replace(/[0-9]/g, "");
  let cell = "";
  let row = parseInt(string.substr(column.length));
  let needCalcChain = false;
  let chainCell = "";
  if ((<RelativeFormulaSetting>formula).refrenceCell) {
    const form = <RelativeFormulaSetting>formula;
    const styleString =
      "styleId" in formula ? 's="' + styles![form.styleId!].index + '"' : "";
    cell =
      '<c r="' +
      string +
      '" ' +
      styleString +
      "><f>" +
      formula.type +
      "(" +
      form.refrenceCell +
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
