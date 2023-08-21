"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMultiStyleValue = void 0;
function splitAndMatching(v, val, text, textSplited, splitValue, matchValue, styleMatchValue, multiMode) {
    if (!textSplited) {
        const matchV = text.match(v);
        if (matchV) {
            if (!multiMode) {
                matchValue.push(v.toString());
                styleMatchValue.push(val);
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
            else {
                matchValue.push(...matchV);
                styleMatchValue.push(...matchV.reduce((res, curr) => [...res, val], []));
                splitValue = text.split(v);
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
            const match = sp.match(v);
            if (match) {
                if (!multiMode) {
                    const splitV = sp.split(v).reduce((res, curr, index) => {
                        if (index >= 2) {
                            res[1] += v + curr;
                            return res;
                        }
                        else {
                            return [...res, curr];
                        }
                    }, []);
                    newSplit.push(...splitV);
                    newStyleValue.push(val);
                    newMatchValue.push(v.toString());
                }
                else {
                    const splitV = sp.split(v);
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
function generateMultiStyleValue(multiStyle, text, styles) {
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
                let result = splitAndMatching(v, typeof val == "string" ? val : "", text, textSplited, splitValue, matchValue, styleMatchValue, false);
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
                    let result = splitAndMatching(element.reg, element.styleId, text, textSplited, splitValue, matchValue, styleMatchValue, true);
                    textSplited = result.textSplited;
                    splitValue = result.splitValue;
                    matchValue = result.matchValue;
                    styleMatchValue = result.styleMatchValue;
                }
            }
        }
        const length = splitValue.length - 1;
        for (let index = 0; index < length; index++) {
            const element = splitValue[index];
            const matchElement = matchValue[index];
            const styleID = styleMatchValue[index];
            if (element.length > 0) {
                result += `<r>
            <t xml:space="preserve" >${element}</t>
        </r>`;
            }
            result += `
                            <r>
           ${styles[styleID]}
            <t xml:space="preserve" >${matchElement}</t>
        </r>
                    `;
            // result += element + matchElement;
        }
        // result += splitValue[length];
        result = `<si>
                    ${result}
                    <r>
            <t>${splitValue[length]}</t>
        </r>
                    </si>`;
        return result;
    }
    else {
        return `
<si>
    <t>${text}</t>
</si>
`;
    }
}
exports.generateMultiStyleValue = generateMultiStyleValue;
//# sourceMappingURL=multi-value.js.map