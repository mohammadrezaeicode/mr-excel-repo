export function generateColumnName(
  cols: string[],
  num: number,
  startLetter: string = "",
  result: string[] = [],
  nextIndex: number = -1
): string[] {
  const length = cols.length;
  for (let index = 0; index < length; index++) {
    result.push(startLetter + cols[index]);
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
