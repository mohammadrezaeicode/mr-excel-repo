export function countOccurrences(
  mainString: string,
  subString: string
): number {
  const escapedSubstring = subString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escapedSubstring, "g");
  const matches = mainString.match(regex);
  return matches ? matches.length : 0;
}
