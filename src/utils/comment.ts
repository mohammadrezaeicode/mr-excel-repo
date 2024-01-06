import { Comment } from "../data-model/excel-table";

export function commentConvertor(
  commentValue: Comment | string,
  mapStyle: {
    [key: string]: string;
  },
  commentStyle: string
) {
  let hasAuthor = false;
  let commentStr: string[];
  let author;
  if (typeof commentValue === "object") {
    if ("author" in commentValue && commentValue.author) {
      hasAuthor = true;
      author = commentValue.author;
    }

    if ("styleId" in commentValue && typeof commentValue.styleId == "string") {
      let styleCom = mapStyle[commentValue.styleId];
      if (typeof styleCom == "string") {
        commentStyle = styleCom;
      }
    }
    commentStr =
      "comment" in commentValue && typeof commentValue.comment == "string"
        ? splitBaseOnBreakLine(commentValue.comment)
        : [""];
  } else {
    commentStr = commentValue ? splitBaseOnBreakLine(commentValue) : [""];
  }
  if (hasAuthor) {
    commentStr.unshift(author + ":");
  }
  return {
    hasAuthor,
    author,
    commentStyle,
    commentStr,
  };
}
export function splitBaseOnBreakLine(str: string): string[] {
  // Split the string on \n or \r characters
  var separateLines = str.split(/\r?\n|\r|\n/g);
  return separateLines;
}

export function generateCommentTag(
  ref: string,
  comment: string[],
  style: string,
  authorIndex: number
) {
  let result =
    '<comment ref="' +
    ref +
    '" authorId="' +
    Math.max(0, authorIndex - 1) +
    '" shapeId="0">' +
    "<text>";
  let bac = "";
  comment.forEach((v, indexValue) => {
    let pr = "";

    if (v.length == 0) {
      bac += "\n";
      return;
    }
    if (indexValue > 0) {
      pr = ' xml:space="preserve"';
      bac += "\n";
    }
    result += "<r>" + style + "<t" + pr + ">" + bac + v + "</t></r>";
    bac = "";
  });
  if (bac.length > 0 && result.indexOf("<r>") > 0) {
    result =
      result.substring(0, result.length - "</t></r>".length) + bac + "</t></r>";
  }
  result += "</text></comment>";
  return result;
}
export const defaultCellCommentStyle =
  "<rPr>" +
  "<b />" +
  '<sz val="9" />' +
  '<color rgb="000000" />' +
  '<rFont val="Tahoma" />' +
  "</rPr>";
