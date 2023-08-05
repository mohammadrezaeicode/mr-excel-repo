export function generateColumnName(
  cols: string[],
  num: number,
  startletter: string = "",
  result: string[] = [],
  nextIndex: number = 0
): string[] {
  const length = cols.length;
  for (let index = 0; index < length; index++) {
    result.push(startletter + cols[index]);
  }
  if (num < result.length) {
    return result;
  } else {
    return generateColumnName(
      cols,
      num,
      result[nextIndex + 1],
      result,
      nextIndex + 1
    );
  }
}
