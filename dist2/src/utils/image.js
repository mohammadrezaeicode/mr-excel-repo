"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDataURL2 = void 0;
const toDataURL2 = (url, name, isBackend = false) => fetch(url)
    .then((response) => {
    if (isBackend) {
        return response.arrayBuffer();
    }
    else {
        return response.blob();
    }
})
    .then((res) => {
    if (isBackend) {
        // return Buffer.from(res)
        return res;
    }
    else {
        return new File([res], name);
    }
})
    .catch((err) => {
    throw err;
});
exports.toDataURL2 = toDataURL2;
//# sourceMappingURL=image.js.map