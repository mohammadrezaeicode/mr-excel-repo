import { Comment } from "../data-model/excel-table";
export declare function commentConvertor(commentValue: Comment | string, mapStyle: {
    [key: string]: string;
}, commentStyle: string): {
    hasAuthor: boolean;
    author: string | undefined;
    commentStyle: string;
    commentStr: string[];
};
export declare function splitBaseOnBreakLine(str: string): string[];
export declare function generateCommentTag(ref: string, comment: string[], style: string, authorIndex: number): string;
export declare const defaultCellCommentStyle: string;
//# sourceMappingURL=comment.d.ts.map