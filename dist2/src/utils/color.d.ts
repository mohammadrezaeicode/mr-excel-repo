declare function removeSpace(str: string): string;
declare function extendHexValue(hex: string): string;
export declare function hexToRgbArray(hex: string): number[];
export declare function generateContrastTextColor(b: string): "rgb(0,0,0)" | "rgb(255,255,255)" | undefined;
export declare function hexToRgbNegative(hex: string): string;
declare function valueToHex(c: number | string): string;
export declare function rgbToHex(rgb: string): string | null;
export declare function convertToHex(fgConvertor: string | undefined, backend: boolean | undefined): string | null;
export declare const exportedForTesting: {
    removeSpace: typeof removeSpace;
    valueToHex: typeof valueToHex;
    extendHexValue: typeof extendHexValue;
};
export {};
//# sourceMappingURL=color.d.ts.map