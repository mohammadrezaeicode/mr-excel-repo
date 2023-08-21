import { Comment } from "../data-model/excel-table";
export declare function commentConvertor(commentValue: Comment | string, mapStyle: {
    [key: string]: string;
}, commentStyl: string): {
    hasAuthour: boolean;
    author: string | undefined;
    commentStyl: string;
    commentStr: string[];
};
export declare function splitBaseOnbreackline(str: string): string[];
export declare function generateCommentTag(ref: string, comment: string[], style: string, auIndex: number): string;
export declare const defaultCellCommentStyle = "<rPr>\n                        <b />\n                        <sz val=\"9\" />\n                        <color rgb=\"000000\" />\n                        <rFont val=\"Tahoma\" />\n                    </rPr>\n            ";
//# sourceMappingURL=comment.d.ts.map