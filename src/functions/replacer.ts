import type { ReplacerOption, Buffer } from "../data-model/excel-table";

export async function replaceInExcel(
  url: string | null | undefined,
  replaceData: Record<string, string | number | boolean>,
  option?: ReplacerOption,
) {
  let result: Record<string, string> = {};
  const module = await import("jszip");
  const JSZip = module.default;
  let data;
  if (typeof url == "string" && url.length) {
    let apiCaller: Function;
    let convertCall = false;
    if (typeof option?.fetch == "function") {
      apiCaller = option.fetch;
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
  if (!data) {
    throw "A data or file URL must be provided.";
  }
  let zips = await JSZip.loadAsync(data).then(async function (zip) {
    let keys = Object.keys(zip.files).filter(
      (value) =>
        (value.indexOf("xl/worksheets/") == 0 &&
          value.length - 4 == value.lastIndexOf(".xml")) ||
        value == "xl/sharedStrings.xml",
    );

    for (let index = 0; index < keys.length; index++) {
      const element = keys[index];
      if (!element) {
        continue;
      }
      await zip.files[element]?.async("string").then((data) => {
        let k = data;
        Object.entries(replaceData).forEach(([key, value]) => {
          k = k.replace(
            new RegExp("{{" + key + "}}", "g"),
            value.toString() as string,
          );
        });
        result[element] = k;
      });
    }
    return zip;
  });
  Object.keys(result).forEach((val: string) => {
    zips.file(val, result[val] ?? "");
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
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        );
      });
    } else {
      let content = await zips.generateAsync({ type: "blob" });
      const module = await import("file-saver");
      module.saveAs(
        content,
        (option?.fileName ? option.fileName : "tableRecord") + ".xlsx",
      );
      return "done";
    }
  }
}
