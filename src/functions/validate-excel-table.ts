import {
  type AlignmentOption,
  type ExcelTable,
  type Sheet,
  type Styles,
  type BorderOption,
} from "../data-model/excel-table";
import { formatMap } from "../data-model/const-data";
function checkSheetValidWithTwoRef(ref: string): boolean {
  return /^[A-Z]+[1-9][1-9]*:[A-Z]+[1-9][1-9]*$/.test(ref);
}
function checkSheetValidWithOneRef(ref: string): boolean {
  return /^[A-Z]+[1-9][1-9]*$/.test(ref);
}
interface ValidationObject {
  mode: ValidationType;
  type: string;
  isEnum?: boolean;
  enum?: string[];
  isArray?: boolean;
  notEmpty?: boolean;
  min?: number;
  validateFunction?: (
    key: string,
    value: any,
    strict: boolean,
    warn: boolean
  ) => boolean;
}
type ValidationType = "TYPE_CHECK";
interface ValidationMap {
  [path: string]: ValidationObject;
}
const validationStyleObject: ValidationMap = {
  fontFamily: {
    mode: "TYPE_CHECK",
    type: "string",
  },
  type: {
    mode: "TYPE_CHECK",
    type: "string",
  },
  size: {
    mode: "TYPE_CHECK",
    type: "number",
  },
  index: {
    mode: "TYPE_CHECK",
    type: "number",
  },
  alignment: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(
      key: string,
      value: AlignmentOption,
      strict: boolean,
      warn: boolean
    ) {
      if (value.rtl && value.ltr) {
        warn && console.warn("Alignment-rtl and ltr cannot be used together.");
      }
      if (
        (value.readingOrder && value.ltr) ||
        (value.readingOrder && value.rtl)
      ) {
        warn &&
          console.warn(
            "Alignment-readingOrder cannot be used with rtl or ltr."
          );
      }
      return true;
    },
  },
  border: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(
      key: string,
      value: BorderOption,
      strict: boolean,
      warn: boolean
    ) {
      const borderType = ["full", "top", "left", "right", "bottom"];
      const borderStyle = [
        "slantDashDot",
        "dotted",
        "thick",
        "hair",
        "dashDot",
        "dashDotDot",
        "dashed",
        "thin",
        "mediumDashDot",
        "medium",
        "double",
        "mediumDashed",
      ];
      const keys = Object.keys(value);
      keys.forEach((border) => {
        const borderKey = border as keyof object;
        if (borderType.indexOf(borderKey) < 0) {
          throw 'border-The type of border is not valid. Valid options include "full," "top," "left," "right," and "bottom."';
        }
        const borderValue = <object>value[borderKey];
        if (!("color" in borderValue)) {
          throw "border-The border must have a color.";
        }
        if (!("style" in borderValue)) {
          throw "border-The border needs a style.";
        }
        if (
          typeof borderValue.style == "string" &&
          borderStyle.indexOf(borderValue.style) < 0
        ) {
          throw "border-An invalid style has been used.";
        }
      });
      return true;
    },
  },
  format: {
    mode: "TYPE_CHECK",
    type: "string",
  },
  bold: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  underline: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  italic: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  doubleUnderline: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  color: {
    mode: "TYPE_CHECK",
    type: "string",
  },
  backgroundColor: {
    mode: "TYPE_CHECK",
    type: "string",
  },
};
const validationExcelTableObject: ValidationMap = {
  notSave: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  creator: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: true,
  },
  backend: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  activateConditionalFormatting: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  fileName: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: true,
  },
  generateType: {
    mode: "TYPE_CHECK",
    type: "string",
    isEnum: true,
    enum: ["nodebuffer", "array", "binarystring", "base64"],
  },
  addDefaultTitleStyle: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  created: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: true,
  },
  modified: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: true,
  },
  numberOfColumn: {
    mode: "TYPE_CHECK",
    type: "number",
    min: 26,
  },
  createType: {
    mode: "TYPE_CHECK",
    type: "string",
  },
  styles: {
    mode: "TYPE_CHECK",
    type: "object",
  },
  sheet: {
    mode: "TYPE_CHECK",
    type: "object",
    isArray: true,
  },
};
const validationSheetObject: ValidationMap = {
  headers: {
    mode: "TYPE_CHECK",
    isArray: true,
    type: "object",
  },
  data: {
    mode: "TYPE_CHECK",
    isArray: true,
    type: "object",
  },
  withoutHeader: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  mapSheetDataOption: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(key, value, strict, warn) {
      const keys = Object.keys(value);
      const mKey = ["outlineLevel", "hidden", "height"];
      keys.forEach((v) => {
        if (mKey.indexOf(v) < 0) {
          warn &&
            console.warn(
              'The Schema of mapSheetDataOption does not include the "' +
                v +
                '" property.'
            );
        }
      });
      return true;
    },
  },
  backgroundImage: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: true,
  },
  conditionalFormatting: {
    mode: "TYPE_CHECK",
    isArray: true,
    type: "object",
    validateFunction(key, value, strict, warn) {
      //not exist p can be added
      if (Array.isArray(value)) {
        value.forEach((cf) => {
          if (cf.type == "cells") {
            const operatorArray = ["lt", "gt", "between", "ct", "eq"];
            if (
              !cf.operator ||
              !cf.start ||
              !cf.end ||
              typeof cf.value == "undefined"
            ) {
              throw {
                record: cf,
                error:
                  "The object is not complete; you need to fill in the values for operator, start, end and value.",
              };
            }
            if (operatorArray.indexOf(cf.operator) < 0) {
              throw { record: cf, error: "The operator is not valid." };
            }
          } else if (cf.type == "top") {
            const operatorArray = ["belowAverage", "aboveAverage"];
            if (!cf.start || !cf.end || typeof cf.value == "undefined") {
              throw {
                record: cf,
                error:
                  "The object is not complete; you need to fill in the values for start, end and value.",
              };
            }
            if (cf.operator && operatorArray.indexOf(cf.operator) < 0) {
              throw { record: cf, error: "The operator is not valid." };
            }
          } else if (cf.type == "iconSet") {
            if (!cf.operator || !cf.start || !cf.end) {
              throw {
                record: cf,
                error:
                  "The object is not complete; you need to fill in the values for operator, start and end",
              };
            }
          } else if (cf.type == "colorScale") {
            if (!cf.start || !cf.end) {
              throw {
                record: cf,
                error:
                  "The object is not complete; you need to fill in the values for start and end",
              };
            }
          } else if (cf.type == "dataBar") {
            if (!cf.start || !cf.end) {
              throw {
                record: cf,
                error:
                  "The object is not complete; you need to fill in the values for start and end",
              };
            }
          } else {
            throw 'Property "type" is not valid.';
          }
        });
      }
      // handle via another function
      // else {
      //   throw 'Type of "conditionalFormatting" property is not valid';
      // }
      return true;
    },
  },
  multiStyleCondition: {
    mode: "TYPE_CHECK",
    type: "function",
  },
  useSplitBaseOnMatch: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  convertStringToNumber: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  images: {
    mode: "TYPE_CHECK",
    isArray: true,
    type: "object",
    validateFunction(key, value, strict, warn) {
      //need check reference
      if (Array.isArray(value)) {
        const type = ["one", "two"];
        value.forEach((image) => {
          if (typeof image.src != "string") {
            throw '"src" property is required.';
          }
          if (typeof image.from != "string" || image.from.length == 0) {
            throw '"from" property is required.';
          }
          if (image.to && !checkSheetValidWithOneRef(image.to)) {
            throw 'value of "to" is not valid.';
          }
          if (image.from && !checkSheetValidWithOneRef(image.from)) {
            throw 'value of "from" is not valid.';
          }
          if (type.indexOf(image.type) < 0) {
            throw 'Type of "type" is not valid in the "images" property.';
          }
          if (image.type == "two" && !image.to) {
            throw '"to" property is empty. for "two" type "to" property is required.';
          }
        });
      }
      // handel via another function
      // else {
      //   throw 'Type of "images" property is not valid';
      // }
      return true;
    },
  },
  formula: {
    mode: "TYPE_CHECK",
    type: "object",
  },
  pageOption: {
    mode: "TYPE_CHECK",
    type: "object",
  },
  name: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: true,
  },
  title: {
    mode: "TYPE_CHECK",
    type: "object",
  },
  shiftTop: {
    mode: "TYPE_CHECK",
    type: "number",
    min: 0,
  },
  shiftLeft: {
    mode: "TYPE_CHECK",
    type: "number",
  },
  selected: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  tabColor: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: true,
  },
  merges: {
    mode: "TYPE_CHECK",
    isArray: true,
    type: "object",
    validateFunction(key, value, strict, warn) {
      if (Array.isArray(value)) {
        let invalidData: string[] = [];
        value.forEach((v) => {
          if (!checkSheetValidWithTwoRef(v)) {
            invalidData.push(
              "The " + v + ' reference is not valid in the "merges" property.'
            );
          }
        });
        if (invalidData.length > 0) {
          throw invalidData;
        }
      }
      // handel via another function
      // else {
      //   throw 'Type of "merges" property is not valid';
      // }
      return true;
    },
  },
  headerStyleKey: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: true,
  },
  mergeRowDataCondition: {
    mode: "TYPE_CHECK",
    type: "function",
  },
  styleCellCondition: {
    mode: "TYPE_CHECK",
    type: "function",
  },
  commentCondition: {
    mode: "TYPE_CHECK",
    type: "function",
  },
  sortAndFilter: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(key, value, strict, warn) {
      if (typeof value == "object") {
        const mode = ["all", "ref"];
        if (!value.mode) {
          throw '"mode" is required in sortAndFilter';
        }
        if (mode.indexOf(value.mode) < 0) {
          throw '"mode" is not valid';
        }
        if (value.mode == "ref") {
          if (value.ref) {
            if (!checkSheetValidWithTwoRef(value.ref)) {
              throw '"ref" is not valid';
            }
          } else {
            throw '"ref" is must need be defined.';
          }
        }
      }
      return true;
    },
  },
  state: {
    mode: "TYPE_CHECK",
    type: "string",
    isEnum: true,
    enum: ["hidden", "visible"],
  },
  headerRowOption: {
    mode: "TYPE_CHECK",
    type: "object", // Adjust according to the expected type for headerRowOption
  },
  protectionOption: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(key, value, strict, warn) {
      const acceptKeys = [
        "sheet",
        "formatCells",
        "formatColumns",
        "formatRows",
        "insertColumns",
        "insertRows",
        "insertHyperlinks",
        "deleteColumns",
        "deleteRows",
        "sort",
        "autoFilter",
        "pivotTables",
      ];
      const values = ["0", "1", 0, 1];
      const keyOb = Object.keys(value);
      keyOb.forEach((v) => {
        const val = value[v];
        if (acceptKeys.indexOf(v) < 0) {
          throw '"' + v + '" is not valid.';
        }
        if (values.indexOf(val) < 0) {
          throw 'value of "' + v + '" is not valid';
        }
      });
      return true;
    },
  },
  headerHeight: {
    mode: "TYPE_CHECK",
    type: "number",
    min: 1,
  },
  checkbox: {
    mode: "TYPE_CHECK",
    isArray: true,
    type: "object",
    validateFunction(key, value, strict, warn) {
      if (Array.isArray(value)) {
        value.forEach((checkbox) => {
          if (!checkbox.col || !checkbox.row) {
            throw '"checkbox" is not complete';
          }
        });
      } else {
        throw 'Type of "checkbox" property is not valid';
      }
      return true;
    },
  },
  viewOption: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(key, value, strict, warn) {
      // can add more
      const types = ["pageLayout", "pageBreakPreview"];
      if (value.type && types.indexOf(value.type) < 0) {
        throw 'Type of "type" property is not valid';
      }
      return true;
    },
  },
  rtl: {
    mode: "TYPE_CHECK",
    type: "boolean",
  },
  pageBreak: {
    mode: "TYPE_CHECK",
    type: "object",
    isArray: true,
  },
  asTable: {
    mode: "TYPE_CHECK",
    type: "object",
  },
};
export function validateStyleObjectFunction(
  styles: Styles,
  strict = true,
  warn = true
) {
  const keys = Object.keys(styles);
  keys.forEach((styleKey) => {
    const styleBody = styles[styleKey as keyof object];
    const styleBodyKeys = Object.keys(styleBody);
    if (styleBody.format && !formatMap[styleBody.format]) {
      throw (
        'The "' +
        styleBody.format +
        '" format that has been used is not defined.'
      );
    }
    if (styleBody.underline && styleBody.doubleUnderline) {
      warn &&
        "When using both underline and double underline together, in this case, the double underline will be applied.(Style key is " +
          styleKey +
          ")";
    }
    styleBodyKeys.forEach((property) => {
      let value = styleBody[property as keyof object];
      const validateProperty = validationStyleObject[property];
      if (
        generalValidationCheck(value, validateProperty, property, strict, warn)
      ) {
        return true;
      }
    });
  });
}
export function validateSheetArrayFunction(
  sheets: Sheet[] | Sheet,
  strict = true,
  warn = true
) {
  if (!Array.isArray(sheets)) {
    sheets = [sheets];
  }
  sheets.forEach((sheet) => {
    const keys = Object.keys(sheet);
    keys.forEach((sheetKey) => {
      const value = sheet[sheetKey as keyof object];
      const validateProperty = validationSheetObject[sheetKey];
      if (
        generalValidationCheck(value, validateProperty, sheetKey, strict, warn)
      ) {
      }
    });
  });
}
export function validateExcelTableObjectFunction(
  data: ExcelTable,
  strict = true,
  warn = true
) {
  const keys = Object.keys(data);
  keys.forEach((property) => {
    let value = data[property as keyof object];
    const validateProperty = validationExcelTableObject[property];
    if (
      generalValidationCheck(value, validateProperty, property, strict, warn)
    ) {
      if (property == "sheet") {
        if (Array.isArray(value)) {
          validateSheetArrayFunction(value);
        } else {
          throw "Sheet must be Array.";
        }
      } else if (property == "styles") {
        validateStyleObjectFunction(value);
      }
    }
    // if (validateProperty) {
    //   if (typeof value != validateProperty.type) {
    //     if (
    //       validateProperty.type == "object" ||
    //       validateProperty.type == "string" ||
    //       strict
    //     ) {
    //       throw 'The Type of The "' + property + '" is not valid';
    //     } else {
    //       warn &&
    //         console.warn("The property type must be " + validateProperty.type);
    //     }
    //   }
    //   if (validateProperty.min && value < validateProperty.min) {
    //     throw (
    //       'The value of "' +
    //       property +
    //       '" must be higher than ' +
    //       validateProperty.min
    //     );
    //   } else if (
    //     validateProperty.notEmpty &&
    //     (!value || (<string>value).length <= 0)
    //   ) {
    //     throw "The value must not be empty.";
    //   }
    // } else {
    //   warn &&
    //     console.warn(
    //       'The Schema Object does not include the "' + property + '" property.'
    //     );
    // }
  });
}
function generalValidationCheck(
  value: never,
  validateProperty: ValidationObject,
  property: string,
  strict: boolean,
  warn: boolean
): boolean {
  if (validateProperty) {
    if (typeof value != validateProperty.type) {
      if (
        validateProperty.type == "object" ||
        validateProperty.type == "string" ||
        strict
      ) {
        throw 'The Type of The "' + property + '" is not valid';
      } else {
        warn &&
          console.warn("The property type must be " + validateProperty.type);
      }
    }
    if (validateProperty.isEnum && validateProperty.enum!.indexOf(value) < 0) {
      throw (
        'The value of "' +
        property +
        '" must be ' +
        JSON.stringify(validateProperty.enum)
      );
    } else if (validateProperty.min && value < validateProperty.min) {
      throw (
        'The value of "' +
        property +
        '" must be higher than ' +
        validateProperty.min
      );
    } else if (
      validateProperty.notEmpty &&
      (!value || (<string>value).length <= 0)
    ) {
      throw 'The value of "' + property + '" must not be empty.';
    } else if (validateProperty.isArray && !Array.isArray(value)) {
      throw 'The value of "' + property + '" should be an array.';
    } else if (typeof validateProperty.validateFunction == "function") {
      validateProperty.validateFunction(property, value, strict, warn);
    }
    return true;
  } else {
    warn &&
      console.warn(
        'The Schema Object does not include the "' + property + '" property.'
      );
    return false;
  }
}

export const exportedForTesting = {
  checkSheetValidWithOneRef,
  checkSheetValidWithTwoRef,
  generalValidationCheck,
};
