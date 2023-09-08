"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDataURL2 = exports.toDataURL = void 0;
function toDataURL(url, callback) {
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
exports.toDataURL = toDataURL;
const toDataURL2 = (url, name) => fetch(url)
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
exports.toDataURL2 = toDataURL2;
// .then(blob => new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.onloadend = () => resolve(reader.result)
//     reader.onerror = reject
//     reader.readAsDataURL(blob)
// }))
//# sourceMappingURL=image.js.map