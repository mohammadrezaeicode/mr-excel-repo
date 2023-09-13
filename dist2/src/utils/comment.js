"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCellCommentStyle = exports.generateCommentTag = exports.splitBaseOnbreackline = exports.commentConvertor = void 0;
function commentConvertor(commentValue, mapStyle, commentStyl) {
    let hasAuthour = false;
    let commentStr;
    let author;
    if (typeof commentValue === "object") {
        if ("author" in commentValue && commentValue.author) {
            hasAuthour = true;
            author = commentValue.author;
        }
        if ("styleId" in commentValue && typeof commentValue.styleId == "string") {
            let styleCom = mapStyle[commentValue.styleId];
            if (typeof styleCom == "string") {
                commentStyl = styleCom;
            }
        }
        commentStr =
            "comment" in commentValue && typeof commentValue.comment == "string"
                ? splitBaseOnbreackline(commentValue.comment)
                : [""];
    }
    else {
        commentStr = commentValue ? splitBaseOnbreackline(commentValue) : [""];
    }
    if (hasAuthour) {
        commentStr.unshift(author + ":");
    }
    return {
        hasAuthour,
        author,
        commentStyl,
        commentStr,
    };
}
exports.commentConvertor = commentConvertor;
function splitBaseOnbreackline(str) {
    // Split the string on \n or \r characters
    var separateLines = str.split(/\r?\n|\r|\n/g);
    return separateLines;
}
exports.splitBaseOnbreackline = splitBaseOnbreackline;
function generateCommentTag(ref, comment, style, auIndex) {
    let result = '<comment ref="' +
        ref +
        '" authorId="' +
        Math.max(0, auIndex - 1) +
        '" shapeId="0">' +
        " <text>";
    ;
    let bac = "";
    comment.forEach((v, vindex) => {
        let pr = "";
        if (v.length == 0) {
            bac += "\n";
            return;
        }
        if (vindex > 0) {
            pr = 'xml:space="preserve"';
            bac += "\n";
        }
        result += "<r>" + style + "<t " + pr + " >" + bac + v + "</t></r>";
        bac = "";
    });
    result += "</text></comment>";
    return result;
}
exports.generateCommentTag = generateCommentTag;
exports.defaultCellCommentStyle = "<rPr>" +
    " <b />" +
    ' <sz val="9" />' +
    ' <color rgb="000000" />' +
    ' <rFont val="Tahoma" />' +
    "</rPr>";
;
//# sourceMappingURL=comment.js.map