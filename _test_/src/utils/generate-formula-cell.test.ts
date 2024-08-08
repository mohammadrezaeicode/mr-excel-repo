import { describe, expect, test } from "@jest/globals";
import { generateCellRowCol } from "../../../src/utils/generate-formula-cell";
import {
  CustomFormulaSetting,
  FormulaSetting,
  NoArgFormulaSetting,
  SingleRefFormulaSetting,
} from "../../../src/data-model/excel-table";
// can be completed
describe("generateCellRowCol data tests", () => {
  test("should be function", () => {
    expect(typeof generateCellRowCol).toBe("function");
  });
  test("test for FormulaSetting type", () => {
    let formula: FormulaSetting = {
      end: "c4",
      start: "b2",
      type: "AVERAGE",
    };
    expect(generateCellRowCol("A1", formula, 1)).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>AVERAGE(B2:C4)</f></c>',
      needCalcChain: false,
      chainCell: "",
    });

    formula = {
      end: "c1",
      start: "b2",
      type: "SUM",
      styleId: "formula",
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        formula: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1" s="1"><f>SUM(B2:C1)</f></c>',
      needCalcChain: false,
      chainCell: "",
    });
    expect(
      generateCellRowCol("A1", formula, 1, {
        formulax: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>SUM(B2:C1)</f></c>',
      needCalcChain: false,
      chainCell: "",
    });
  });
  test("test for NoArgFormulaSetting type", () => {
    let formula: NoArgFormulaSetting = {
      noArgType: "NOW",
    };
    expect(generateCellRowCol("A1", formula, 1)).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>NOW()</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });

    formula = {
      noArgType: "NOW",
      styleId: "fo",
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        fo: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1" s="1"><f>NOW()</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });

    formula = {
      noArgType: "NOW_DAY",
      styleId: "fo",
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        fo: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1" s="1"><f>DAY(NOW())</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });
    formula = {
      noArgType: "NOW_DAY",
      styleId: "fox",
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        fo: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>DAY(NOW())</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });
  });
  test("test for SingleRefFormulaSetting type", () => {
    let formula: SingleRefFormulaSetting = {
      referenceCell: "G2",
      type: "ABS",
    };
    expect(generateCellRowCol("A1", formula, 1)).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>ABS(G2)</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });

    formula = {
      referenceCell: "G2",
      type: "POWER",
      value: 2,
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        fo: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>POWER(G2,2)</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });

    formula = {
      referenceCell: "G2",
      type: "POWER",
      value: 2,
      styleId: "xf",
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        xf: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1" s="1"><f>POWER(G2,2)</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });

    formula = {
      referenceCell: "G2",
      type: "POWER",
      styleId: "xf",
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        xf: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1" s="1"><f>POWER(G2)</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });

    formula = {
      referenceCell: "G2",
      type: "POWER",
      value: 2,
      styleId: "xf",
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        xfx: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>POWER(G2,2)</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });

    formula = {
      referenceCell: "G2",
      type: "POWER",
      styleId: "xf",
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        xfx: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>POWER(G2)</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });
    formula = {
      referenceCell: "G2",
      type: "COT",
      value: 2,
      styleId: "xf",
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        xf: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1" s="1"><f>_xlfn.COT(G2,2)</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });
    formula = {
      referenceCell: "G2",
      type: "COT",
      value: 2,
      styleId: "xf",
    };
    expect(
      generateCellRowCol("A1", formula, 1, {
        xfx: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>_xlfn.COT(G2,2)</f></c>',
      needCalcChain: true,
      chainCell: '<c r="A1" i="1"/>',
    });
  });
  test("test for CustomFormulaSetting type", () => {
    let formula: CustomFormulaSetting = {
      formula: "NOW()-A1:A12",
    };
    expect(generateCellRowCol("A1", formula, 1)).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>NOW()-A1:A12</f></c>',
      needCalcChain: false,
      isCustom: true,
    });
    formula.styleId = "kil";

    expect(
      generateCellRowCol("A1", formula, 1, {
        kilW: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1"><f>NOW()-A1:A12</f></c>',
      needCalcChain: false,
      isCustom: true,
    });

    expect(
      generateCellRowCol("A1", formula, 1, {
        kil: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1" s="1"><f>NOW()-A1:A12</f></c>',
      needCalcChain: false,
      isCustom: true,
    });

    formula = {
      formula: "NOW()-A1:A12",
    };
    expect(generateCellRowCol("A1:A5", formula, 1)).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1" t="str"><f t="array" ref="A1:A5">NOW()-A1:A12</f></c>',
      needCalcChain: false,
      isCustom: true,
    });
    formula.styleId = "kil";
    expect(
      generateCellRowCol("A1:A5", formula, 1, {
        kilW: {
          index: 1,
        },
      })
    ).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1" t="str"><f t="array" ref="A1:A5">NOW()-A1:A12</f></c>',
      needCalcChain: false,
      isCustom: true,
    });

    expect(generateCellRowCol("A1:A5", formula, 1,{
        kil:{
            index:1
        }
    })).toEqual({
      column: "A",
      row: 1,
      cell: '<c r="A1" s="1" t="str"><f t="array" ref="A1:A5">NOW()-A1:A12</f></c>',
      needCalcChain: false,
      isCustom: true,
    });
  });
});
