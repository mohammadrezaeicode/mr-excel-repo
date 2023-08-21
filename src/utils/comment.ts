import { Comment } from "../data-model/excel-table";

export function commentConvertor(
  commentValue: Comment | string,
  mapStyle: {
    [key: string]: string;
  },
  commentStyl: string
) {
  let hasAuthour = false;
  let commentStr: string[];
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
  } else {
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
export function splitBaseOnbreackline(str: string): string[] {
  //     var str = `your text
  //    that spans
  //    multiple lines`

  // Split the string on \n or \r characters
  var separateLines = str.split(/\r?\n|\r|\n/g);
  return separateLines;
}

export function generateCommentTag(
  ref: string,
  comment: string[],
  style: string,
  auIndex: number
) {
  let result = `<comment ref="${ref}" authorId="${Math.max(
    0,
    auIndex - 1
  )}" shapeId="0">
            <text>`;
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
export const defaultCellCommentStyle = `<rPr>
                        <b />
                        <sz val="9" />
                        <color rgb="000000" />
                        <rFont val="Tahoma" />
                    </rPr>
            `;
