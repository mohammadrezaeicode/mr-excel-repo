import { ReplacerOption } from "../data-model/excel-table";

export async function replaceInExcel(
  url: string | null | undefined,
  replaceData: Record<string, string | number | boolean>,
  option?: ReplacerOption
) {
  let result: Record<string, string> = {};
  const module = await import("jszip");
  const JSZip = module.default;
  let data;
  if (typeof url == "string" && url.length) {
    let apiCaller: Function;
    let convertCall = false;
    if (typeof option?.fetch == "function") {
      apiCaller = option?.fetch;
      convertCall = true;
    } else {
      apiCaller = fetch;
    }
    data = await apiCaller(url).then((res: any) => {
      if (res == null || res == undefined) {
        throw "response is null";
      }
      if (convertCall) {
        return res;
      }
      if (option?.backend) {
        return res.arrayBuffer();
      }
      return res.blob();
    });
  } else {
    data = option?.data;
  }
  let zips = await JSZip.loadAsync(data).then(async function (zip) {
    let keys = Object.keys(zip.files).filter(
      (value) =>
        (value.indexOf("xl/worksheets/") == 0 &&
          value.length - 4 == value.lastIndexOf(".xml")) ||
        value == "xl/sharedStrings.xml"
    );

    for (let index = 0; index < keys.length; index++) {
      const element = keys[index];
      await zip.files[element].async("string").then((data) => {
        let k = data;
        Object.keys(replaceData).forEach((val: string) => {
          k = k.replace(
            new RegExp("{{" + val + "}}", "g"),
            replaceData[val]?.toString()
          );
        });
        result[element] = k;
      });
    }
    return zip;
  });
  Object.keys(result).forEach((val) => {
    zips.file(val, result[val]);
  });
  if (option?.backend) {
    return zips
      .generateAsync({
        type: option.generateType ? option.generateType : "nodebuffer",
      })
      .then((content) => {
        return content as string | number[] | Buffer;
      });
  } else {
    if (option?.notSave) {
      return zips.generateAsync({ type: "blob" }).then((content) => {
        return content.slice(
          0,
          content.size,
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
      });
    } else {
      let content = await zips.generateAsync({ type: "blob" });
      const module = await import("file-saver");
      module.saveAs(
        content,
        (option?.fileName ? option?.fileName : "tableRecord") + ".xlsx"
      );
    }
  }
}
export const myFunction = async () => {
  const content = new Blob(["Hello World"], { type: "text/plain" });
  const filename = "test.txt";
  const module = await import("file-saver");
  module.saveAs(content, filename);
};
