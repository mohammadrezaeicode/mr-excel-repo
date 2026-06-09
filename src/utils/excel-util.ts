import { generateColumnName } from "./generate-column-name";

export function getColRowBaseOnRefString(
  refString: string,
  cols: string[]
): {
  col: number;
  row: number;
} {
  refString = refString.toUpperCase();
  if (!/^[A-Z]+[0-9]+$/.test(refString)){
    throw "Invalid Reference"
  } 
  let column = refString.replace(/[0-9]/g, "");
  let row = parseInt(refString.substring(column.length));
  row = Math.max(0, row - 1);
  let colIndex = cols.indexOf(column);
  if (colIndex < 0) {
    cols = generateColumnName(cols, Math.pow(10, column.length + 1), "");
    colIndex = cols.indexOf(column);
  }
  return {
    col: colIndex,
    row,
  };
}
