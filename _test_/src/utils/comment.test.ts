import { describe, expect, test, jest, it } from "@jest/globals";
import {
  commentConvertor,
  defaultCellCommentStyle,
  generateCommentTag,
  splitBaseOnBreakLine,
} from "../../../src/utils/comment";

describe("defaultCellCommentStyle data tests", () => {
  test("should be string", () => {
    expect(typeof defaultCellCommentStyle).toBe("string");
  });
  test("value check", () => {
    const expectValue =
      "<rPr>" +
      "<b />" +
      '<sz val="9" />' +
      '<color rgb="000000" />' +
      '<rFont val="Tahoma" />' +
      "</rPr>";
    expect(defaultCellCommentStyle).toBe(expectValue);
  });
});
describe("commentConvertor function tests", () => {
  test("should be function", () => {
    expect(typeof commentConvertor).toBe("function");
  });
  test("commentValue string", () => {
    expect(commentConvertor("comment", { test: "test" }, "test")).toEqual({
      hasAuthor: false,
      author: undefined,
      commentStyle: "test",
      commentStr: ["comment"],
    });
  });
  test("commentValue string", () => {
    expect(commentConvertor("", { test: "test" }, "test")).toEqual({
      hasAuthor: false,
      author: undefined,
      commentStyle: "test",
      commentStr: [""],
    });
  });
  test("commentValue object", () => {
    expect(commentConvertor({}, { test: "test" }, "test")).toEqual({
      hasAuthor: false,
      author: undefined,
      commentStyle: "test",
      commentStr: [""],
    });expect(
      commentConvertor(
        { comment: "this is multi line comment\n   line2\nline3  " },
        { test: "test" },
        "test"
      )
    ).toEqual({
      hasAuthor: false,
      author: undefined,
      commentStyle: "test",
      commentStr: ["this is multi line comment", "   line2", "line3  "],
    });
    expect(
      commentConvertor({ author: "m.r" }, { test: "test" }, "test")
    ).toEqual({
      hasAuthor: true,
      author: "m.r",
      commentStyle: "test",
      commentStr: ["m.r:", ""],
    });
    expect(
      commentConvertor(
        { author: "m.r", styleId: "new" },
        { test: "test" },
        "test"
      )
    ).toEqual({
      hasAuthor: true,
      author: "m.r",
      commentStyle: "test",
      commentStr: ["m.r:", ""],
    });
    expect(
      commentConvertor(
        { author: "m.r", styleId: "new" },
        { test: "test", new: "new" },
        "test"
      )
    ).toEqual({
      hasAuthor: true,
      author: "m.r",
      commentStyle: "new",
      commentStr: ["m.r:", ""],
    });
  });
});
describe("splitBaseOnBreakLine function tests", () => {
  test("should be function", () => {
    expect(typeof splitBaseOnBreakLine).toBe("function");
  });
  test("input without break line", () => {
    expect(splitBaseOnBreakLine("     ")).toEqual(["     "]);

    expect(splitBaseOnBreakLine("x     ")).toEqual(["x     "]);
    expect(splitBaseOnBreakLine("  x")).toEqual(["  x"]);

    expect(splitBaseOnBreakLine("x     x")).toEqual(["x     x"]);
    expect(splitBaseOnBreakLine("")).toEqual([""]);
  });
  test("input with break line", () => {
    expect(
      splitBaseOnBreakLine(`test
    value is
    `)
    ).toEqual(["test", "    value is", "    "]);
    expect(splitBaseOnBreakLine(" test\nte st\ntest \n test \n")).toEqual([
      " test",
      "te st",
      "test ",
      " test ",
      "",
    ]);
  });
});
describe("generateCommentTag function tests", () => {
  test("should be function", () => {
    expect(typeof generateCommentTag).toBe("function");
  });
  it("input with two comment", () => {
    let expectResult =
      '<comment ref="A2" authorId="0" shapeId="0"><text><r>' +
      defaultCellCommentStyle +
      "<t>comment1</t></r><r>" +
      defaultCellCommentStyle +
      '<t xml:space="preserve">\ncomment2</t></r></text></comment>';
    expect(
      generateCommentTag(
        "A2",
        ["comment1", "comment2"],
        defaultCellCommentStyle,
        1
      )
    ).toBe(expectResult);
    expectResult =
      '<comment ref="B1" authorId="2" shapeId="0"><text><r>' +
      defaultCellCommentStyle +
      "<t>comment1</t></r><r>" +
      defaultCellCommentStyle +
      '<t xml:space="preserve">\ncomment2</t></r></text></comment>';
    expect(
      generateCommentTag(
        "B1",
        ["comment1", "comment2"],
        defaultCellCommentStyle,
        3
      )
    ).toBe(expectResult);
  });
  it("input with empty string comment", () => {
    let expectResult =
      '<comment ref="A2" authorId="0" shapeId="0"><text><r>' +
      defaultCellCommentStyle +
      '<t xml:space="preserve">\n\ncomment2</t></r></text></comment>';
    expect(
      generateCommentTag("A2", ["", "comment2"], defaultCellCommentStyle, 1)
    ).toBe(expectResult);
    expectResult =
      '<comment ref="A2" authorId="0" shapeId="0"><text><r>' +
      defaultCellCommentStyle +
      '<t xml:space="preserve">\n\ncomment2\n\n</t></r></text></comment>';
    expect(
      generateCommentTag(
        "A2",
        ["", "comment2", "", ""],
        defaultCellCommentStyle,
        1
      )
    ).toBe(expectResult);
    expectResult =
      '<comment ref="B1" authorId="2" shapeId="0"><text></text></comment>';
    expect(generateCommentTag("B1", ["", ""], defaultCellCommentStyle, 3)).toBe(
      expectResult
    );
  });
  test("no comment", () => {
    let expectResult =
      '<comment ref="AA1" authorId="2" shapeId="0"><text></text></comment>';
    expect(generateCommentTag("AA1", [], defaultCellCommentStyle, 3)).toBe(
      expectResult
    );
  });
});
