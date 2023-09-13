"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spCh = void 0;
const spCh = function (str) {
    return str
        .replace(/\&/g, "&amp;")
        .replace(/\</g, "&lt;")
        .replace(/\>/g, "&gt;");
};
exports.spCh = spCh;
//# sourceMappingURL=special-character.js.map