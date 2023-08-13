import {generateExcel} from "mr-excel/dist2/src/index";
import * as ex from "./exx";
export function generate() {
  generateExcel(ex.ex.data);
}
