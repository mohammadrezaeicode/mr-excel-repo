import type { Data, ExcelTable } from "../data-model/excel-table";
function converterCSV(text: string | Data): string {
  if (typeof text === "undefined" || text === null) {
    return "";
  }
  if (typeof text !== "string") {
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
export async function generateCSV<T extends object = object>(
  excelTable: ExcelTable<T>,
  asZip: boolean = false,
  isText: boolean = false,
) {
  const sp = separator(isText);
  const type = isText ? ".txt" : ".csv";
  const spLength = sp.length;
  let contents: string[] = [];
  excelTable.sheet.forEach((sheet) => {
    let content = "";
    let line = "";
    const headers = sheet.headers;
    let keys: string[] = [];
    let length = headers.length;
    headers.forEach((header) => {
      keys.push(header.label);
      if (!sheet.withoutHeader) {
        line += converterCSV(header.text) + sp;
      }
    });
    if (!sheet.withoutHeader) {
      content += nextLine(line, spLength);
    }
    length = sheet.data.length;
    for (let index = 0; index < length; index++) {
      line = "";
      const element = sheet.data[index];
      if (element) {
        keys.forEach((key) => {
          line += converterCSV(element[key as keyof object]) + sp;
        });
        content += nextLine(line, spLength);
      }
    }
    contents.push(content);
  });
  if (excelTable.backend) {
    return contents;
  }
  const saveAs = await import("file-saver").then((module) => module.saveAs);
  if (asZip) {
    let Zip = await import("jszip");
    if ("default" in Zip) {
      Zip = (Zip as any)?.default;
    }

    let zip = new Zip();
    contents.forEach((content, index) => {
      zip.file("sheet" + (index + 1) + type, content);
    });
    const content = await zip
      .generateAsync({ type: "blob" })
      .then(function (content) {
        return content;
      });
    saveAs(
      content,
      (excelTable.fileName ? excelTable.fileName : "tableRecord") + ".zip",
    );
  } else {
    contents.forEach((content) => {
      var blob = new Blob([content], {
        type: "text/" + (isText ? "plain" : "csv") + ";charset=utf-8",
      });
      saveAs(
        blob,
        (excelTable.fileName ? excelTable.fileName : "tableRecord") + type,
      );
    });
  }

  return "done";
}
export const exportedForTesting = {
  converterCSV,
  separator,
  nextLine,
};
