import { MultiStyleValue } from "../data-model/excel-table";
declare function splitBaseOnMatch(matchResult: string[], str: string): string[];
declare function splitAndMatching(v: string | RegExp, val: string, text: string, splittedText: boolean, splitValue: string[], matchValue: string[], styleMatchValue: string[], multiMode: boolean, useSplitBaseOnMatch?: boolean): {
    v: string | RegExp;
    text: string;
    splittedText: true;
    splitValue: string[];
    matchValue: string[];
    styleMatchValue: string[];
};
export declare function generateMultiStyleValue(multiStyle: MultiStyleValue, text: string, styles: {
    [key: string]: string;
}, defStyleId: string, useSplitBaseOnMatch?: boolean): string;
export declare const exportedForTesting: {
    splitBaseOnMatch: typeof splitBaseOnMatch;
    splitAndMatching: typeof splitAndMatching;
};
export {};
//# sourceMappingURL=multi-value.d.ts.map