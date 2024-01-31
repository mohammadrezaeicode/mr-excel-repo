// import axios from "axios";
import fetch from "cross-fetch";
function str2ab(str: string) {
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
export async function callApi(url: string) {
  return await fetch(url).then((res) => {
    return res.arrayBuffer();
  });
}
export async function callApi2(url: string) {
  return await fetch(url).then((res) => {
    return res.arrayBuffer();
  });
}
