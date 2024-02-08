import type { Data, ExcelTable } from "../data-model/excel-table";
function converterCSV(text: string | Data): string {
  if (typeof text == "undefined" || text == null) {
    return "";
  }
  if (typeof text != "string") {
    text = String(text);
  }
  let result = text;
  let addQuote = false;
  if (text.indexOf('"') >= 0) {
    result = result.replace(/"/g, '""');
    addQuote = true;
  }
  if (text.indexOf(",") >= 0) {
    addQuote = true;
  }
  if (addQuote) {
    result = '"' + result + '"';
  }
  return result;
}
function separator(isText: boolean) {
  if (isText) {
    return " ";
  }
  return ",";
}
function nextLine(line: string, spLength: number) {
  return line.substring(0, line.length - spLength) + "\n";
}
export function generateCSV(
  excelTable: ExcelTable,
  asZip: boolean = false,
  isText: boolean = false
) {
  const sp = separator(isText);
  const type = isText ? ".txt" : ".csv";
  const spLength = sp.length;
  let contents: string[] = [];
  excelTable.sheet.forEach((sheet) => {
    let content = "";
    let line = "";
    const headers = sheet.headers;
    let keys = [];
    let length = headers.length;
    for (let index = 0; index < length; index++) {
      const hElement = headers[index];
      keys.push(hElement.label);
      if (!sheet.withoutHeader) {
        line += converterCSV(hElement.text) + sp;
      }
    }
    content += nextLine(line, spLength);
    length = sheet.data.length;
    for (let index = 0; index < length; index++) {
      line = "";
      const element = sheet.data[index];
      keys.forEach((key) => {
        line += converterCSV(element[key]) + sp;
      });
      content += nextLine(line, spLength);
    }
    contents.push(content);
  });
  if (excelTable.backend) {
    return contents;
  }
  if (asZip) {
    import("file-saver").then((module) => {
      const { saveAs } = module;
      import("jszip").then((m) => {
        const Zip = m.default;
        let zip = new Zip();
        contents.forEach((content, index) => {
          zip.file("sheet" + (index + 1) + type, content);
        });
        zip.generateAsync({ type: "blob" }).then(function (content) {
          // see FileSaver.js
          saveAs(
            content,
            (excelTable.fileName ? excelTable.fileName : "tableRecord") + ".zip"
          );
        });
      });
    });
    return "done";
  }
  contents.forEach((content) => {
    import("file-saver").then((module) => {
      const { saveAs } = module;
      var blob = new Blob([content], {
        type: "text/" + (isText ? "plain" : "csv") + ";charset=utf-8",
      });
      saveAs(
        blob,
        (excelTable.fileName ? excelTable.fileName : "tableRecord") + type
      );
    });
  });
}
