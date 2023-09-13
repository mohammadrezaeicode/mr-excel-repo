"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMultiStyleValue = void 0;
const special_character_1 = require("./special-character");
function splitBaseOnMatch(matchResult, str) {
    let reduceDefault = {
        result: [],
        str: str,
    };
    let res = matchResult.reduce((result, current) => {
        let index = result.str.indexOf(current);
        result.result.push(result.str.substring(0, index));
        result.str = result.str.substring(index + current.length);
        return result;
    }, reduceDefault);
    res.result.push(res.str);
    return res.result;
}
function splitAndMatching(v, val, text, textSplited, splitValue, matchValue, styleMatchValue, multiMode, useSplitBaseOnMatch) {
    if (!textSplited) {
        let matchV;
        try {
            matchV = text.match(v);
        }
        catch (error) {
            if (typeof v == "string") {
                matchV = text.match("\\" + v);
            }
            else {
                throw error;
            }
        }
        if (matchV) {
            if (!multiMode) {
                matchValue.push(v.toString());
                styleMatchValue.push(val);
                if (useSplitBaseOnMatch) {
                    splitValue = splitBaseOnMatch(matchV, text);
                }
                else {
                    splitValue = text.split(v).reduce((res, curr, index) => {
                        if (index >= 2) {
                            res[1] += v + curr;
                            return res;
                        }
                        else {
                            return [...res, curr];
                        }
                    }, []);
                }
            }
            else {
                matchValue.push(...matchV);
                styleMatchValue.push(...matchV.reduce((res, curr) => [...res, val], []));
                if (useSplitBaseOnMatch) {
                    splitValue = splitBaseOnMatch(matchV, text);
                }
                else {
                    splitValue = text.split(v);
                }
            }
        }
        else {
            splitValue.push(text);
        }
        textSplited = true;
    }
    else {
        let newSplit = [];
        let newMatchValue = [];
        let newStyleValue = [];
        const mLength = matchValue.length;
        splitValue.forEach((sp, index) => {
            let match;
            try {
                match = sp.match(v);
            }
            catch (error) {
                if (typeof v == "string") {
                    match = sp.match("\\" + v);
                }
                else {
                    throw error;
                }
            }
            if (match) {
                if (!multiMode) {
                    let splitV;
                    if (useSplitBaseOnMatch) {
                        splitV = splitBaseOnMatch(match, sp);
                    }
                    else {
                        splitV = sp.split(v).reduce((res, curr, index) => {
                            if (index >= 2) {
                                res[1] += v + curr;
                                return res;
                            }
                            else {
                                return [...res, curr];
                            }
                        }, []);
                    }
                    newSplit.push(...splitV);
                    newStyleValue.push(val);
                    newMatchValue.push(v.toString());
                }
                else {
                    let splitV;
                    if (useSplitBaseOnMatch) {
                        splitV = splitBaseOnMatch(match, sp);
                    }
                    else {
                        splitV = sp.split(v);
                    }
                    newSplit.push(...splitV);
                    newMatchValue.push(...match);
                    newStyleValue.push(...match.reduce((res, curr) => [...res, val], []));
                }
            }
            else {
                newSplit.push(sp);
            }
            if (mLength > index) {
                newMatchValue.push(matchValue[index]);
                newStyleValue.push(styleMatchValue[index]);
            }
        });
        splitValue = newSplit;
        matchValue = newMatchValue;
        styleMatchValue = newStyleValue;
    }
    return {
        v,
        text,
        textSplited,
        splitValue,
        matchValue,
        styleMatchValue,
    };
}
function generateMultiStyleValue(multiStyle, text, styles, defStyleId, useSplitBaseOnMatch) {
    if (typeof multiStyle == "object") {
        let result = "";
        let matchValue = [];
        let styleMatchValue = [];
        let splitValue = [];
        let textSplited = false;
        const keys = Object.keys(multiStyle);
        keys.forEach((v) => {
            const val = multiStyle[v];
            if (v === "reg") {
                return;
            }
            else {
                let result = splitAndMatching(v, typeof val == "string" ? val : "", text, textSplited, splitValue, matchValue, styleMatchValue, false, useSplitBaseOnMatch);
                textSplited = result.textSplited;
                splitValue = result.splitValue;
                matchValue = result.matchValue;
                styleMatchValue = result.styleMatchValue;
            }
        });
        if ("reg" in multiStyle && Array.isArray(multiStyle.reg)) {
            const regLength = multiStyle.reg.length;
            for (let index = 0; index < regLength; index++) {
                const element = multiStyle.reg[index];
                if ("reg" in element && "styleId" in element) {
                    if (typeof element.reg == "string") {
                        element.reg = new RegExp(element.reg, "g");
                    }
                    let result = splitAndMatching(element.reg, element.styleId, text, textSplited, splitValue, matchValue, styleMatchValue, true, useSplitBaseOnMatch);
                    textSplited = result.textSplited;
                    splitValue = result.splitValue;
                    matchValue = result.matchValue;
                    styleMatchValue = result.styleMatchValue;
                }
            }
        }
        const length = splitValue.length - 1;
        const elementStyle = defStyleId in styles ? styles[defStyleId] : "";
        for (let index = 0; index < length; index++) {
            const element = splitValue[index];
            const matchElement = matchValue[index];
            const styleID = styleMatchValue[index];
            if (element.length > 0) {
                result +=
                    "<r>" +
                        " " +
                        elementStyle +
                        ' <t xml:space="preserve">' +
                        element +
                        "</t>" +
                        "</r>";
            }
            if (matchElement.length > 0) {
                result +=
                    " <r> " +
                        styles[styleID] +
                        ' <t xml:space="preserve">' +
                        matchElement +
                        "</t>" +
                        " </r>";
            }
        }
        if (splitValue[length].length > 0) {
            result =
                "<si>" +
                    result +
                    "<r>" +
                    elementStyle +
                    "<t>" +
                    (0, special_character_1.spCh)(splitValue[length]) +
                    "</t>" +
                    "</r>" +
                    "</si>";
        }
        else {
            result = "<si>" + result + "</si>";
        }
        return result;
    }
    else {
        return "<si><t>" + (0, special_character_1.spCh)(text) + "</t></si>";
    }
}
exports.generateMultiStyleValue = generateMultiStyleValue;
//# sourceMappingURL=multi-value.js.map