export function toDataURL(url: string, callback: Function) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
}

export const toDataURL2 = (url: string, name: string) =>
  fetch(url)
    .then((response) => {
      console.log(response);
      return response.blob();
    })
    .then((res) => {
      return new File([res], name);
    })
    .catch((err) => {
      console.error(err);
    });
// .then(blob => new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.onloadend = () => resolve(reader.result)
//     reader.onerror = reject
//     reader.readAsDataURL(blob)
// }))
