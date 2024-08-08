export function countOccurrences(
  mainString: string,
  subString: string
): number {
  // Escape special characters in the substring for regex
  const escapedSubstring = subString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Construct the regular expression using the escaped substring
  const regex = new RegExp(escapedSubstring, "g");

  // Use match() to find all occurrences of the substring in the main string
  const matches = mainString.match(regex);

  // Return the count of occurrences (or 0 if no matches were found)
  return matches ? matches.length : 0;
}
