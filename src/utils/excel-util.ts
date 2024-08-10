import { generateColumnName } from "./generate-column-name";

export function getColRowBaseOnRefString(
  refString: string,
  cols: string[]
): {
  col: number;
  row: number;
} {
  refString = refString.toUpperCase();
  let column = refString.replace(/[0-9]/g, "");
  if (column.length == 0) {
    throw "Invalid Column";
  }
  let row = parseInt(refString.substring(column.length));
  if (isNaN(row)) {
    throw "Invalid Row";
  }
  row = Math.max(0, row - 1);
  let colIndex = cols.indexOf(column);
  if (colIndex < 0) {
    cols = generateColumnName(cols, Math.pow(10, column.length + 1), "");
    colIndex = cols.indexOf(column);
    if (colIndex < 0) {
      colIndex = 0;
    }
  }
  return {
    col: colIndex,
    row,
  };
}
