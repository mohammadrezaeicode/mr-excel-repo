import { FormulaSetting, Styles } from "../data-model/excel-table";

export function generateCellRowCol(
  string: string,
  formula: FormulaSetting,
  styles?: Styles
) {
  let column = string.replace(/[0-9]/g, "");
  let row = parseInt(string.substr(column.length));
  let cell =
    '<c r="' +
    string +
    '" ' +
    (styles && typeof formula.styleId === "string" && styles[formula.styleId]
      ? 's="' + styles[formula.styleId].index + '" '
      : "") +
    "> " +
    "    <f>" +
    formula.type +
    "(" +
    formula.start +
    ":" +
    formula.end +
    ")</f> " +
    "</c>";
  return {
    column,
    row,
    cell,
  };
}
