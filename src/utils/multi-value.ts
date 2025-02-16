import { type MultiStyleValue } from "../data-model/excel-table";
import { specialCharacterConverter } from "./special-character";

export function generateMultiStyleByArray(
  values: MultiStyleValue[],
  styles: {
    [key: string]: string;
  },
  defStyleId: string
) {
  let result = "";
  values.forEach((value) => {
    if (typeof value.value == "string") {
      value.value = specialCharacterConverter(value.value);
    }
    result +=
      "<r>" +
      (value.styleId && styles[value.styleId]
        ? styles[value.styleId]
        : styles[defStyleId]) +
      '<t xml:space="preserve">' +
      value.value +
      "</t>" +
      "</r>";
  });
  return "<si>" + result + "</si>";
}