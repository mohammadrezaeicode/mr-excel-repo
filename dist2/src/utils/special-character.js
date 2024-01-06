"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialCharacterConverter = void 0;
const specialCharacterConverter = function (str) {
    return str
        .replace(/\&/g, "&amp;")
        .replace(/\</g, "&lt;")
        .replace(/\>/g, "&gt;");
};
exports.specialCharacterConverter = specialCharacterConverter;
//# sourceMappingURL=special-character.js.map