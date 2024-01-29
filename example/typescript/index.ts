import {generateExcel} from "mr-excel";
import * as ex from "./example";
export function generate() {
  generateExcel(ex.ex1());
}
