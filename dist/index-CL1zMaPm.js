function Lt(e) {
  return e.replace(/ /g, "");
}
function Ht(e) {
  if (e = e.replace(/^#/, ""), e.length == 3) {
    const t = e.charAt(0), l = e.charAt(1), o = e.charAt(2);
    return t + t + l + l + o + o;
  } else
    return e;
}
function zt(e) {
  /^#?([a-f\d]{3})$/i.test(e) && (e = Ht(e));
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? [
    parseInt(t[1], 16),
    parseInt(t[2], 16),
    parseInt(t[3], 16)
  ] : [0, 0, 0];
}
function Ot(e) {
  const t = zt(e);
  return t == null ? void 0 : (0.299 * t[0] + 0.587 * t[1] + 0.114 * t[2]) / 255 > 0.5 ? "rgb(0,0,0)" : "rgb(255,255,255)";
}
function Ft(e) {
  /^#?([a-f\d]{3})$/i.test(e) && (e = Ht(e));
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? "rgb(" + (255 - parseInt(t[1], 16)) + "," + (255 - parseInt(t[2], 16)) + "," + (255 - parseInt(t[3], 16)) + ")" : "rgb(0,0,0)";
}
function tt(e) {
  e = Number(e);
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}
function me(e) {
  e = Lt(e);
  let t = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), l = t.reduce((o, r) => o && !Number.isNaN(Number(r)), !0);
  return t.length == 4 && t[3] == "0" || t.length != 3 && t.length != 4 || !l ? null : (tt(t[0]) + tt(t[1]) + tt(t[2])).toUpperCase();
}
function he(e, t) {
  if (typeof e > "u" || e === null)
    return null;
  if (!t) {
    let l = Lt(e);
    l.indexOf("var(") == 0 && l.lastIndexOf(")") == l.length - 1 && (l = l.substring(4, l.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      l
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const l = me(e);
    e = l || "";
  }
  return e.replace(/^#/, "");
}
function Ut(e) {
  let t = "";
  return e.indexOf("_") > 0 ? e.replace(/[a-z]/g, "").length == e.length ? t = e.split(/_/).reduce((l, o) => l + o.charAt(0) + o.substring(1).toLowerCase() + " ", "").trim() : t = e.replace(/_/g, " ").trim() : (t = e.replace(/([A-Z])/g, " $1").trim(), t = t.charAt(0).toUpperCase() + t.substring(1).trim()), t;
}
function _t(e, t) {
  let l = Object.keys(e).filter((n) => !t.includes(n)), o = [];
  return l.reduce((n, h) => (n.push({
    label: h,
    text: Ut(h)
  }), n), o);
}
const ot = {
  fileName: "MR-Excel",
  headerBackgroundColor: "#393E46",
  headerColor: "#EEEEEE",
  negativeColor: !1,
  rowBackgroundColor: "#EEEEEE",
  rowColor: "#393E46",
  filterKeys: []
}, Wt = function(e, t = {
  ...ot
}) {
  let l;
  if (typeof e == "object" && Array.isArray(e))
    if (e.length > 0)
      if (Array.isArray(e[0])) {
        let p = [];
        for (let a = 0; a < e.length; a++) {
          const m = e[a];
          if (m.length > 0) {
            const b = _t(
              m[0],
              Array.isArray(t.filterKeys) ? t.filterKeys : []
            );
            p.push({
              headers: b,
              data: m
            });
          }
        }
        l = {
          sheet: p
        };
      } else
        e.length > 0 ? l = {
          sheet: [
            {
              headers: _t(
                e[0],
                Array.isArray(t.filterKeys) ? t.filterKeys : []
              ),
              data: e
            }
          ]
        } : l = {
          sheet: []
        };
    else
      l = {
        sheet: []
      };
  else
    l = e;
  let o = t && t.headerBackgroundColor ? t.headerBackgroundColor : ot.headerBackgroundColor, r = t && t.rowBackgroundColor ? t.rowBackgroundColor : ot.rowBackgroundColor, n = t && t.negativeColor ? Ft(o) : t && t.headerColor ? t.headerColor : Ot(o), h = t && t.negativeColor ? Ft(r) : t && t.rowColor ? t.rowColor : Ot(r);
  typeof l.styles > "u" && (l.styles = {}), l.styles.themeStyleHeader = {
    backgroundColor: o,
    color: n
  }, l.styles.themeStyleBody = {
    backgroundColor: r,
    color: h
  };
  const y = l.sheet.length;
  for (let p = 0; p < y; p++)
    l.sheet[p].styleCellCondition = function(a, m, b, P, T, v) {
      return T ? "themeStyleHeader" : "themeStyleBody";
    };
  return typeof (t == null ? void 0 : t.fileName) == "string" && (l.fileName = t.fileName), l;
};
function Gt(e, t, l, o, r, n, h, y) {
  let p = [], a = "both", m = [];
  !t || t === 0 ? (t = 1, a = "col") : m.push(t - 1), !e || e === 0 ? (e = 0, a = "row") : m.push(e - 1);
  let b = r || {};
  b.mergeType = y && y.mergeType ? [...y.mergeType, a] : [a], b.mergeValue = y && y.mergeValue ? [...y.mergeValue, m] : [m], b.mergeStart = y && y.mergeStart ? [...y.mergeStart, l] : [l];
  for (let P = 0; P < t; P++) {
    let T = e;
    for (let v = 0; v < o; v++)
      l <= v ? T >= 1 ? (b["c" + v] = n, n = "", h += "*", T--) : t >= 2 && l == v ? (b["c" + v] = n, n = "", h += "+") : h += "-" : P > 0 && (h += "-");
    p.push({
      ...b,
      mergeString: h
    }), b = {}, h = "";
  }
  return p;
}
function Xt(e, t, l, o, r) {
  var b;
  if (!e && !t)
    throw "Error: One of the function inputs is required.";
  let n;
  e ? n = (b = document.querySelector(e)) == null ? void 0 : b.querySelectorAll("tr") : n = t == null ? void 0 : t.querySelectorAll("tr");
  let h = [], y = [], p = {
    header: {},
    rows: []
  }, a = 40;
  if (n) {
    let P = !1, T = 0;
    n.forEach((v, c) => {
      var L = [].slice.call(v.children);
      const M = window.getComputedStyle(v, null);
      let V = me(M.backgroundColor);
      if (!P)
        T = L.length, P = !0, typeof o == "function" ? a = o(
          Number(M.height.substring(0, M.height.length - 2)),
          c,
          !0
        ) : a = Number(
          M.height.substring(0, M.height.length - 2)
        ), L.forEach((B, te) => {
          let j = window.getComputedStyle(B, null), $ = null;
          if (j.borderBottomWidth !== "0px") {
            const G = me(j.borderBottomColor);
            G && ($ || ($ = {}), $.bottom = {
              style: "thin",
              color: G
            });
          }
          if (j.borderTopWidth !== "0px") {
            const G = me(j.borderTopColor);
            G && ($ || ($ = {}), $.top = {
              style: "thin",
              color: G
            });
          }
          if (j.borderLeftWidth !== "0px") {
            const G = me(j.borderLeftColor);
            G && ($ || ($ = {}), $.left = {
              style: "thin",
              color: G
            });
          }
          if (j.borderRightWidth !== "0px") {
            const G = me(j.borderRightColor);
            G && ($ || ($ = {}), $.right = {
              style: "thin",
              color: G
            });
          }
          let Z = me(j.backgroundColor);
          !Z && V && (Z = V);
          const q = parseInt(
            j.fontSize.substring(0, j.fontSize.indexOf("p"))
          );
          let H = {
            ...Z ? { backgroundColor: Z } : {},
            bold: parseInt(j.fontWeight) > 500,
            ...isNaN(q) ? {} : { size: q },
            ...$ ? { border: $ } : {},
            alignment: {
              ...typeof j.textAlign == "string" && j.textAlign.length > 0 ? { horizontal: j.textAlign } : {},
              vertical: "center",
              ...j.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          p.header[c + "-" + te] = H;
          let k;
          typeof r == "function" ? k = r(
            Number(j.width.substring(0, j.width.length - 2)),
            te
          ) : k = Number(j.width.substring(0, j.width.length - 2)) * 0.15;
          const K = B.getAttribute("colspan"), z = B.getAttribute("rowspan");
          h.push({
            label: "c" + te,
            ...K ? { colspan: K } : {},
            ...z ? { rowspan: z } : {},
            text: B.textContent,
            ...isNaN(k) || k <= 0 ? {} : { size: k }
          });
        });
      else {
        let B = {}, te = "", j = !1;
        y.length >= c && (B = y[c - 1], te = "mergeString" in B ? B.mergeString : "", j = !0);
        let $ = 0;
        L.forEach((Z, q) => {
          if ("c" + (q + $) in B)
            for (let Y = 0; Y <= T + 1 && "c" + (q + Y) in B; Y++)
              $++;
          q += $;
          let H = window.getComputedStyle(Z, null);
          if (Z.getAttribute("colspan") || Z.getAttribute("rowspan")) {
            let Y = Gt(
              Z.getAttribute("colspan") * 1,
              Z.getAttribute("rowspan") * 1,
              q,
              T,
              B,
              Z.textContent,
              te,
              B
            );
            y.length < c ? y.push(...Y) : Y.forEach((Ce, J) => {
              y.length < c + J ? y.push(...Y) : y[c + J] = {
                ...y[c + J],
                ...Ce
              };
            }), B = Y[0], te = Y[0].mergeString, j = !0;
          } else
            j || (te += "-");
          let k = null;
          if (H.borderBottomWidth !== "0px") {
            const Y = me(H.borderBottomColor);
            Y && (k || (k = {}), k.bottom = {
              style: "thin",
              color: Y
            });
          }
          if (H.borderTopWidth !== "0px") {
            const Y = me(H.borderTopColor);
            Y && (k || (k = {}), k.top = {
              style: "thin",
              color: Y
            });
          }
          if (H.borderLeftWidth !== "0px") {
            const Y = me(H.borderLeftColor);
            Y && (k || (k = {}), k.left = {
              style: "thin",
              color: Y
            });
          }
          if (H.borderRightWidth !== "0px") {
            const Y = me(H.borderRightColor);
            Y && (k || (k = {}), k.right = {
              style: "thin",
              color: Y
            });
          }
          let K = me(H.backgroundColor);
          !K && V && (K = V);
          const z = parseInt(
            H.fontSize.substring(0, H.fontSize.indexOf("p"))
          );
          let G = {
            ...K ? { backgroundColor: K } : {},
            bold: parseInt(H.fontWeight) > 500,
            ...isNaN(z) ? {} : { size: z },
            ...k ? { border: k } : {},
            alignment: {
              ...typeof H.textAlign == "string" && H.textAlign.length > 0 ? { horizontal: H.textAlign } : {},
              vertical: "center",
              ...H.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          p.header[c + "-" + q] = G, B["c" + q] = Z.textContent;
        }), typeof o == "function" ? B.height = o(
          Number(M.height.substring(0, M.height.length - 2)),
          c,
          !1
        ) : B.height = M.height.substring(0, M.height.length - 2), typeof B.height == "string" && B.height.length == 0 && delete B.height, y.length < c ? y.push(B) : y[c - 1] = B;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: p.header,
    sheet: [
      {
        ...a ? { headerHeight: a } : {},
        styleCellCondition: function(P, T, v, c, L, M) {
          return l ? M.includes(v - 1 + "-" + c) ? v - 1 + "-" + c : "" : null;
        },
        data: y,
        headers: h
      }
    ]
  };
}
function Me(e, t, l = "", o = [], r = -1) {
  const n = e.length;
  for (let h = 0; h < n; h++)
    o.push(l + e[h]);
  return t < o.length ? o : Me(
    e,
    t,
    o[r + 1],
    o,
    r + 1
  );
}
function Zt(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + '<fonts count="' + e.font.count + '"><font><sz val="11" /><color theme="1" /><name val="Calibri" /><family val="2" /><scheme val="minor" /></font><font><sz val="11" /><color rgb="FFFF0000" /><name val="Calibri" /><family val="2" /><scheme val="minor" /></font>' + e.font.value + '</fonts><fills count="' + e.fill.count + '"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="lightGray" /></fill>' + e.fill.value + '</fills><borders count="' + e.border.count + '"><border />' + e.border.value + '</borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /></cellStyleXfs><cellXfs count="' + e.cell.count + '"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment readingOrder="0" /></xf>' + e.cell.value + '</cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0" /></cellStyles> ' + (t ? '<dxfs count="' + e.conditionalFormatting.count + '" >' + e.conditionalFormatting.value + "</dxfs>" : '<dxfs count="0" />') + "</styleSheet>";
}
function Jt(e, t, l, o, r, n, h) {
  let y = {};
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /><Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + l.reduce((p, a) => (a = a.toLowerCase(), y[a] ? p : a == "svg" ? (y.png = !0, y.svg = !0, p + '<Default Extension="png" ContentType="image/png"/><Default Extension="svg" ContentType="image/svg+xml"/>') : a == "jpeg" || a == "jpg" ? (y.jpeg = !0, y.jpg = !0, p + '<Default Extension="' + a + '" ContentType="image/jpeg"/>') : (y.curr = !0, p + '<Default Extension="' + a + '" ContentType="image/' + a + '"/>')), "") + t.reduce((p, a) => p + '<Override PartName="/xl/comments' + a + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />', "") + e + (h.length > 0 ? h.reduce((p, a) => p + '<Override PartName="/xl/tables/' + a + '" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml"/>', "") : "") + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" />' + (n ? '<Override PartName="/xl/calcChain.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml"/>' : "") + '<Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' + o.reduce((p, a) => p + '<Override PartName="/xl/drawings/' + a + '" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml" />', "") + (r.length > 0 ? r.reduce((p, a, m) => p + '<Override PartName="/xl/ctrlProps/ctrlProp' + (m + 1) + '.xml" ContentType="application/vnd.ms-excel.controlproperties+xml"/>', "") : "") + '<Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function Qt(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>` + e + '</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="' + e + '" baseType="lpstr"> ' + t + "</vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>";
}
function rt(e, t, l, o) {
  e = e.toUpperCase();
  let r = "";
  if (t.formula) {
    let a = t, m = a.formula.indexOf("=") == 0 ? a.formula.substring(1) : a.formula, b = e.indexOf(":") > 0, P = a.referenceCells ? a.referenceCells : e, T = b ? e.substring(0, e.indexOf(":")) : e, v = T.replace(/[0-9]/g, ""), c = parseInt(e.substr(v.length)), L = a.returnType ? a.returnType : a.isArray || b ? ' t="str"' : "", M = "styleId" in a && o && typeof a.styleId == "string" && o[a.styleId] ? ' s="' + o[a.styleId].index + '"' : "", V = a.isArray || b ? ' t="array" ref="' + P + '"' : "";
    return r = '<c r="' + T + '"' + M + L + "><f" + V + ">" + m + "</f></c>", {
      column: v,
      row: c,
      needCalcChain: !1,
      isCustom: !0,
      cell: r
    };
  }
  let n = e.replace(/[0-9]/g, ""), h = parseInt(e.substr(n.length)), y = !1, p = "";
  if (t.noArgType) {
    const a = t;
    if (a.noArgType == "NOW" || a.noArgType == "TODAY") {
      const m = "styleId" in a && o && typeof a.styleId == "string" && o[a.styleId] ? ' s="' + o[a.styleId].index + '"' : "";
      r = '<c r="' + e + '"' + m + "><f>" + a.noArgType + "()</f></c>";
    } else {
      let m = "NOW()";
      const b = "styleId" in a && o && typeof a.styleId == "string" && o[a.styleId] ? ' s="' + o[a.styleId].index + '"' : "";
      r = '<c r="' + e + '"' + b + "><f>" + a.noArgType.substring(4) + "(" + m + ")</f></c>";
    }
    p = '<c r="' + e + '" i="' + l + '"/>', y = !0;
  } else if (t.referenceCell) {
    const a = t;
    let m = "";
    typeof a.value < "u" && (m = "," + a.value);
    let b = "";
    a.type == "COT" && (b = "_xlfn.");
    const P = "styleId" in a && o && typeof a.styleId == "string" && o[a.styleId] ? ' s="' + o[a.styleId].index + '"' : "";
    r = '<c r="' + e + '"' + P + "><f>" + b + a.type + "(" + a.referenceCell.toUpperCase() + m + ")</f></c>", p = '<c r="' + e + '" i="' + l + '"/>', y = !0;
  } else {
    const a = t;
    r = '<c r="' + e + '"' + (o && typeof a.styleId == "string" && o[a.styleId] ? ' s="' + o[a.styleId].index + '"' : "") + "><f>" + a.type + "(" + a.start.toUpperCase() + ":" + a.end.toUpperCase() + ")</f></c>";
  }
  return {
    column: n,
    row: h,
    cell: r,
    needCalcChain: y,
    chainCell: p
  };
}
function nt(e, t, l) {
  let o = !1, r, n;
  if (typeof e == "object") {
    if ("author" in e && e.author && (o = !0, n = e.author), "styleId" in e && typeof e.styleId == "string") {
      let h = t[e.styleId];
      typeof h == "string" && (l = h);
    }
    r = "comment" in e && typeof e.comment == "string" ? At(e.comment) : [""];
  } else
    r = e ? At(e) : [""];
  return o && r.unshift(n + ":"), {
    hasAuthor: o,
    author: n,
    commentStyle: l,
    commentStr: r
  };
}
function At(e) {
  var t = e.split(/\r?\n|\r|\n/g);
  return t;
}
function lt(e, t, l, o) {
  let r = '<comment ref="' + e + '" authorId="' + Math.max(0, o - 1) + '" shapeId="0"><text>', n = "";
  return t.forEach((h, y) => {
    let p = "";
    if (h.length == 0) {
      n += `
`;
      return;
    }
    y > 0 && (p = ' xml:space="preserve"', n += `
`), r += "<r>" + l + "<t" + p + ">" + n + h + "</t></r>", n = "";
  }), n.length > 0 && r.indexOf("<r>") > 0 && (r = r.substring(0, r.length - 8) + n + "</t></r>"), r += "</text></comment>", r;
}
const eo = '<rPr><b /><sz val="9" /><color rgb="000000" /><rFont val="Tahoma" /></rPr>', De = function(e) {
  return e.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
};
function Ke(e, t) {
  let l = {
    result: [],
    str: t
  }, o = e.reduce((r, n) => {
    let h = r.str.indexOf(n);
    return r.result.push(r.str.substring(0, h)), r.str = r.str.substring(h + n.length), r;
  }, l);
  return o.result.push(o.str), o.result;
}
function It(e, t, l, o, r, n, h, y, p) {
  if (o) {
    let a = [], m = [], b = [];
    const P = n.length;
    r.forEach((T, v) => {
      let c;
      try {
        c = T.match(e);
      } catch (L) {
        if (typeof e == "string")
          c = T.match("\\" + e);
        else
          throw L;
      }
      if (c)
        if (y) {
          let L;
          p ? L = Ke(c, T) : L = T.split(e), a.push(...L), m.push(...c), b.push(
            ...c.reduce((M, V) => [...M, t], [])
          );
        } else {
          let L;
          p ? L = Ke(c, T) : L = T.split(e).reduce((M, V, B) => B >= 2 ? (M[1] += e + V, M) : [...M, V], []), a.push(...L), b.push(t), m.push(e.toString());
        }
      else
        a.push(T);
      P > v && (m.push(n[v]), b.push(h[v]));
    }), r = a, n = m, h = b;
  } else {
    let a;
    try {
      a = l.match(e);
    } catch (m) {
      if (typeof e == "string")
        a = l.match("\\" + e);
      else
        throw m;
    }
    a ? y ? (n.push(...a), h.push(
      ...a.reduce((m, b) => [...m, t], [])
    ), p ? r = Ke(a, l) : r = l.split(e)) : (n.push(e.toString()), h.push(t), p ? r = Ke(a, l) : r = l.split(e).reduce((m, b, P) => P >= 2 ? (m[1] += e + b, m) : [...m, b], [])) : r.push(l), o = !0;
  }
  return {
    v: e,
    text: l,
    splittedText: o,
    splitValue: r,
    matchValue: n,
    styleMatchValue: h
  };
}
function at(e, t, l, o, r) {
  if (typeof e == "object") {
    let n = "", h = [], y = [], p = [], a = !1;
    if (Object.keys(e).forEach((T) => {
      const v = e[T];
      if (T !== "reg") {
        let c = It(
          T,
          typeof v == "string" ? v : "",
          t,
          a,
          p,
          h,
          y,
          !1,
          r
        );
        a = c.splittedText, p = c.splitValue, h = c.matchValue, y = c.styleMatchValue;
      }
    }), "reg" in e && Array.isArray(e.reg)) {
      const T = e.reg.length;
      for (let v = 0; v < T; v++) {
        const c = e.reg[v];
        if ("reg" in c && "styleId" in c) {
          typeof c.reg == "string" && (c.reg = new RegExp(c.reg, "g"));
          let L = It(
            c.reg,
            c.styleId,
            t,
            a,
            p,
            h,
            y,
            !0,
            r
          );
          a = L.splittedText, p = L.splitValue, h = L.matchValue, y = L.styleMatchValue;
        }
      }
    }
    const b = p.length - 1, P = o in l ? l[o] : "";
    for (let T = 0; T < b; T++) {
      const v = p[T], c = h[T], L = y[T];
      v.length > 0 && (n += "<r>" + P + '<t xml:space="preserve">' + v + "</t></r>"), c.length > 0 && (n += "<r>" + (l[L] ? l[L] : P) + '<t xml:space="preserve">' + c + "</t></r>");
    }
    return p[b].length > 0 ? n = "<si>" + n + "<r>" + P + "<t>" + De(p[b]) + "</t></r></si>" : n = "<si>" + n + "</si>", n;
  } else
    return "<si><t>" + De(t) + "</t></si>";
}
const Nt = {
  time: {
    key: 165,
    value: '<numFmt numFmtId="165" formatCode="[$-F400]h:mm:ss\\ AM/PM" />'
  },
  date: {
    key: 187,
    value: '<numFmt numFmtId="187" formatCode="[$-F800]dddd\\,\\ mmmm\\ dd\\,\\ yyyy" />'
  },
  short_date: {
    key: 14
  },
  fraction: {
    key: 13
  },
  percentage: {
    key: 9
  },
  float_1: { key: 180, value: '<numFmt numFmtId="180" formatCode="0.0" />' },
  float_2: { key: 181, value: '<numFmt numFmtId="181" formatCode="0.00" />' },
  float_3: {
    key: 164,
    value: '<numFmt numFmtId="164" formatCode="0.000" />'
  },
  float_4: {
    key: 182,
    value: '<numFmt numFmtId="182" formatCode="0.0000" />'
  },
  dollar_rounded: {
    key: 183,
    value: '<numFmt numFmtId="183" formatCode="&quot;$&quot;#,##0" />'
  },
  dollar_2: {
    key: 183,
    value: '<numFmt numFmtId="183" formatCode="&quot;$&quot;#,##0.00" />'
  },
  num_sep: {
    key: 184,
    value: '<numFmt numFmtId="184" formatCode="#,##0" />'
  },
  num_sep_1: {
    key: 185,
    value: '<numFmt numFmtId="185" formatCode="#,##0.0" />'
  },
  num_sep_2: {
    key: 186,
    value: '<numFmt numFmtId="186" formatCode="#,##0.00" />'
  },
  dollar: {
    key: 163,
    value: '<numFmt numFmtId="163" formatCode="_([$$-409]* #,##0.00_);_([$$-409]* \\(#,##0.00\\);_([$$-409]* &quot;-&quot;??_);_(@_)" />'
  },
  $: {
    key: 163,
    value: '<numFmt numFmtId="163" formatCode="_([$$-409]* #,##0.00_);_([$$-409]* \\(#,##0.00\\);_([$$-409]* &quot;-&quot;??_);_(@_)" />'
  },
  pound: {
    key: 162,
    value: '<numFmt numFmtId="162" formatCode="_-[$£-809]* #,##0.00_-;\\-[$£-809]* #,##0.00_-;_-[$£-809]* &quot;-&quot;??_-;_-@_-" />'
  },
  "£": {
    key: 162,
    value: '<numFmt numFmtId="162" formatCode="_-[$£-809]* #,##0.00_-;\\-[$£-809]* #,##0.00_-;_-[$£-809]* &quot;-&quot;??_-;_-@_-" />'
  },
  euro: {
    key: 161,
    value: '<numFmt numFmtId="161" formatCode="_([$€-2]\\ * #,##0.00_);_([$€-2]\\ * \\(#,##0.00\\);_([$€-2]\\ * &quot;-&quot;??_);_(@_)" />'
  },
  "€": {
    key: 161,
    value: '<numFmt numFmtId="161" formatCode="_([$€-2]\\ * #,##0.00_);_([$€-2]\\ * \\(#,##0.00\\);_([$€-2]\\ * &quot;-&quot;??_);_(@_)" />'
  },
  yen: {
    key: 160,
    value: '<numFmt numFmtId="160" formatCode="_ [$¥-804]* #,##0.00_ ;_ [$¥-804]* \\-#,##0.00_ ;_ [$¥-804]* &quot;-&quot;??_ ;_ @_ " />'
  },
  "¥": {
    key: 160,
    value: '<numFmt numFmtId="160" formatCode="_ [$¥-804]* #,##0.00_ ;_ [$¥-804]* \\-#,##0.00_ ;_ [$¥-804]* &quot;-&quot;??_ ;_ @_ " />'
  },
  CHF: {
    key: 179,
    value: '<numFmt numFmtId="179" formatCode="_-* #,##0.00\\ [$CHF-100C]_-;\\-* #,##0.00\\ [$CHF-100C]_-;_-* &quot;-&quot;??\\ [$CHF-100C]_-;_-@_-" />'
  },
  ruble: {
    key: 178,
    value: '<numFmt numFmtId="178" formatCode="_-* #,##0.00\\ [$₽-419]_-;\\-* #,##0.00\\ [$₽-419]_-;_-* &quot;-&quot;??\\ [$₽-419]_-;_-@_-" />'
  },
  "₽": {
    key: 178,
    value: '<numFmt numFmtId="178" formatCode="_-* #,##0.00\\ [$₽-419]_-;\\-* #,##0.00\\ [$₽-419]_-;_-* &quot;-&quot;??\\ [$₽-419]_-;_-@_-" />'
  },
  "֏": {
    key: 177,
    value: '<numFmt numFmtId="177" formatCode="_-* #,##0.00\\ [$֏-42B]_-;\\-* #,##0.00\\ [$֏-42B]_-;_-* &quot;-&quot;??\\ [$֏-42B]_-;_-@_-" />'
  },
  manat: {
    key: 176,
    value: '<numFmt numFmtId="176" formatCode="_-* #,##0.00\\ [$₼-82C]_-;\\-* #,##0.00\\ [$₼-82C]_-;_-* &quot;-&quot;??\\ [$₼-82C]_-;_-@_-" />'
  },
  "₼": {
    key: 176,
    value: '<numFmt numFmtId="176" formatCode="_-* #,##0.00\\ [$₼-82C]_-;\\-* #,##0.00\\ [$₼-82C]_-;_-* &quot;-&quot;??\\ [$₼-82C]_-;_-@_-" />'
  },
  "₼1": {
    key: 175,
    value: '<numFmt numFmtId="175" formatCode="_-* #,##0.00\\ [$₼-42C]_-;\\-* #,##0.00\\ [$₼-42C]_-;_-* &quot;-&quot;??\\ [$₼-42C]_-;_-@_-" />'
  },
  "₽1": {
    key: 174,
    value: '<numFmt numFmtId="174" formatCode="_-* #,##0.00\\ [$₽-46D]_-;\\-* #,##0.00\\ [$₽-46D]_-;_-* &quot;-&quot;??\\ [$₽-46D]_-;_-@_-" />'
  },
  "₽2": {
    key: 173,
    value: '<numFmt numFmtId="173" formatCode="_-* #,##0.00\\ [$₽-485]_-;\\-* #,##0.00\\ [$₽-485]_-;_-* &quot;-&quot;??\\ [$₽-485]_-;_-@_-" />'
  },
  "₽3": {
    key: 172,
    value: '<numFmt numFmtId="172" formatCode="_-* #,##0.00\\ [$₽-444]_-;\\-* #,##0.00\\ [$₽-444]_-;_-* &quot;-&quot;??\\ [$₽-444]_-;_-@_-" />'
  },
  ريال: {
    key: 171,
    value: '<numFmt numFmtId="171" formatCode="_ * #,##0.00_-[$ريال-429]_ ;_ * #,##0.00\\-[$ريال-429]_ ;_ * &quot;-&quot;??_-[$ريال-429]_ ;_ @_ " />'
  }
}, to = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
], Pt = (e, t, l = !1, o) => {
  let r, n = !1;
  return typeof o == "function" ? (r = o, n = !0) : r = fetch, r(e).then((h) => n ? h : l ? h.arrayBuffer() : h.blob()).then((h) => n || l ? h : new File([h], t)).catch((h) => {
    throw h;
  });
};
function je(e, t) {
  e = e.toUpperCase();
  let l = e.replace(/[0-9]/g, "");
  if (l.length == 0)
    throw "Invalid Column";
  let o = parseInt(e.substring(l.length));
  if (isNaN(o))
    throw "Invalid Row";
  o = Math.max(0, o - 1);
  let r = t.indexOf(l);
  return r < 0 && (t = Me(t, Math.pow(10, l.length + 1), ""), r = t.indexOf(l), r < 0 && (r = 0)), {
    col: r,
    row: o
  };
}
let oo = {}, it = new Proxy(oo, {
  get(e, t) {
    return t in e ? e[t] : (this.set(e, t, {}, !0), {});
  },
  set(e, t, l, o) {
    return e[t] = l, !0;
  }
});
function Bt(e, t, l) {
  it[e], it[e][t] = l;
}
function $t(e, t, l) {
  Object.keys(l).forEach((r) => {
    const n = l[r];
    typeof n == "object" ? r != "data" && r != "headers" && $t(e, t.length > 0 ? t + "." + r : r, n) : Bt(e, t.length > 0 ? t + "." + r : r, n);
  });
}
function ro(e, t) {
  $t(e, "", t);
}
function no(e, t) {
  let l = t, o = it[e];
  return Object.keys(o).forEach((n) => {
    const h = n.split(".");
    let y = l, p = o[n];
    for (let a = 0; a < h.length; a++) {
      const m = h[a];
      y[m] ? y = y[m] : h.length - 1 == a ? y[m] = p : (y[m] = {}, y = y[m]);
    }
  }), l;
}
async function ft(e, t = "") {
  if (typeof t == "string" && t.length > 0 && (e = no(t, e)), typeof e.creator == "string" && e.creator.trim().length <= 0)
    throw 'length of "creator" most be bigger then 0';
  if (typeof e.created == "string" && new Date(e.created).toString() == "Invalid Date")
    throw '"created" is not valid date';
  if (typeof e.modified == "string" && new Date(e.modified).toString() == "Invalid Date")
    throw '"modified" is not valid date';
  let l = Nt;
  e.formatMap && typeof e.formatMap == "object" && (l = {
    ...l,
    ...e.formatMap
  });
  const o = e.backend, r = {
    lt: "lessThan",
    gt: "greaterThan",
    between: "between",
    ct: "containsText",
    eq: "equal"
  };
  let n = [...to];
  e.numberOfColumn && e.numberOfColumn > 25 && (n = Me(n, e.numberOfColumn));
  const y = (await import("./jszip.min-DoL7Cu0z.js").then((E) => E.j)).default;
  let p = new y();
  const a = e.sheet.length;
  let m = p.folder("xl"), b = null, P = null, T = null;
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const v = Object.keys(e.styles), c = eo, L = e.activateConditionalFormatting ? e.activateConditionalFormatting : !1, M = {}, V = {};
  let B = v.reduce(
    (E, i, C) => {
      const x = e.styles[i];
      if (x.type && (x.type == "headerFooter" || x.type == "HF")) {
        let w = "", X = "-", ce = "Regular";
        if (x.fontFamily && (X = x.fontFamily), x.bold && (ce = "Bold"), x.italic && (ce == "Regular" && (ce = ""), ce += "Italic"), (X != "-" || ce != "Regular") && (w = '&amp;"' + X + "," + ce + '"'), x.size && (w += "&amp;" + x.size), x.doubleUnderline ? w += "&amp;E" : x.underline && (w += "&amp;U"), x.color) {
          const Te = he(x.color, o);
          typeof Te == "string" && Te.length > 0 && (w += "&amp;K" + Te.toUpperCase());
        }
        return M[i] = w, E;
      }
      if (L && typeof x.type == "string" && x.type && (x.type == "conditionalFormatting" || x.type.toUpperCase() == "CF")) {
        V[i] = E.conditionalFormatting.count;
        let w = he(x.color, o), X = he(x.backgroundColor, o);
        return E.conditionalFormatting.value += '<dxf><font><color rgb="' + w + '"/></font><fill> <patternFill> <bgColor rgb="' + X + '"/></patternFill></fill></dxf>', E.conditionalFormatting.count++, E;
      }
      const U = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (x.backgroundColor) {
        let w = he(x.backgroundColor, o);
        U.fillIndex = E.fill.count, E.fill.count++, E.fill.value = E.fill.value + '<fill><patternFill patternType="solid">' + (w ? '<fgColor rgb="' + w.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (x.color || x.fontFamily || x.size || x.bold || x.italic || x.underline || x.doubleUnderline) {
        const w = he(x.color, o);
        U.fontIndex = E.font.count, E.font.count++, E.font.value = E.font.value + "<font>" + (x.bold ? "<b/>" : "") + (x.italic ? "<i />" : "") + (x.underline || x.doubleUnderline ? "<u " + (x.doubleUnderline ? ' val="double" ' : "") + "/>" : "") + (x.size ? '<sz val="' + x.size + '" />' : "") + (w ? '<color rgb="' + w.replace("#", "") + '" />' : "") + (x.fontFamily ? '<name val="' + x.fontFamily + '" />' : "") + "</font>", E.commentSyntax.value[i] = "<rPr>" + (x.bold ? "<b/>" : "") + (x.italic ? "<i/>" : "") + (x.underline || x.doubleUnderline ? "<u " + (x.doubleUnderline ? 'val="double" ' : "") + "/>" : "") + '<sz val="' + (x.size ? x.size : "9") + '" />' + (w ? '<color rgb="' + w.replace("#", "") + '" />' : "") + '<rFont val="' + (x.fontFamily ? x.fontFamily : "Tahoma") + '" /></rPr>';
      }
      let se = "/>";
      x.alignment && (x.alignment.rtl && (x.alignment.readingOrder = 2), delete x.alignment.rtl, x.alignment.ltr && (x.alignment.readingOrder = 1), delete x.alignment.ltr, se = ' applyAlignment="1"><alignment ' + Object.keys(x.alignment).reduce((w, X) => w + " " + X + '="' + x.alignment[X] + '" ', "") + " /></xf>");
      const N = x.border;
      let O = "";
      if (typeof N == "object" && ((N.left || N.full) && (O += '<left style="' + (N.left || N.full).style + '"><color rgb="' + he(
        (N.left || N.full).color,
        o
      ).replace("#", "") + '" /></left>'), (N.right || N.full) && (O += '<right style="' + (N.right || N.full).style + '"><color rgb="' + he(
        (N.right || N.full).color,
        o
      ).replace("#", "") + '" /></right>'), (N.top || N.full) && (O += '<top style="' + (N.top || N.full).style + '"><color rgb="' + he(
        (N.top || N.full).color,
        o
      ).replace("#", "") + '" /></top>'), (N.bottom || N.full) && (O += '<bottom style="' + (N.bottom || N.full).style + '"><color rgb="' + he(
        (N.bottom || N.full).color,
        o
      ).replace("#", "") + '" /></bottom>'), U.borderIndex = E.border.count, E.border.count++, E.border.value += "<border>" + O + "<diagonal /></border>"), x.format) {
        const w = l[x.format];
        w && (U.formatIndex = w.key, "value" in w && (E.format.count++, E.format.value += w.value));
      }
      return E.cell.value = E.cell.value + '<xf numFmtId="' + U.formatIndex + '" fontId="' + U.fontIndex + '" fillId="' + U.fillIndex + '" borderId="' + U.borderIndex + '" xfId="0"' + (U.borderIndex > 0 ? ' applyBorder="1" ' : "") + (U.fillIndex > 0 ? ' applyFill="1" ' : "") + (U.fontIndex >= 0 ? ' applyFont="1" ' : "") + (U.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + se, e.styles[i].index = E.cell.count, E.cell.count++, E;
    },
    {
      conditionalFormatting: {
        count: L ? 1 : 0,
        value: '<dxf><font><color rgb="FF9C0006"/></font><fill> <patternFill> <bgColor rgb="FFFFC7CE"/></patternFill></fill></dxf>'
      },
      commentSyntax: {
        value: {}
      },
      format: {
        count: 0,
        value: ""
      },
      border: {
        count: 1,
        value: ""
      },
      fill: {
        count: 2,
        value: ""
      },
      font: {
        count: 2,
        value: ""
      },
      cell: {
        count: 2,
        value: ""
      }
    }
  );
  m == null || m.file("styles.xml", Zt(B, L));
  let te = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />', j = "", $ = 0, Z = "", q = "", H = {};
  const k = {};
  let K = "", z = 4, G = !1, Y = -1, Ce = [], J = 1;
  const ye = {
    checkbox: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<formControlPr xmlns="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" objectType="CheckBox" **value** **fmlaLink** lockText="1" noThreeD="1"/>`
  };
  let ve = 1024;
  const we = {
    checkbox: `<v:shape id="***id***" type="#_x0000_t201" style='position:absolute;
  margin-left:1.5pt;margin-top:1.5pt;width:63pt;height:16.5pt;z-index:1;
  mso-wrap-style:tight' filled="f" fillcolor="window [65]" stroked="f"
  strokecolor="windowText [64]" o:insetmode="auto">
  <v:path shadowok="t" strokeok="t" fillok="t"/>
  <o:lock v:ext="edit" rotation="t"/>
  <v:textbox style='mso-direction-alt:auto' o:singleclick="f">
   <div style='text-align:left'><font face="Segoe UI" size="160" color="auto">***text***</font></div>
  </v:textbox>
  <x:ClientData ObjectType="Checkbox">
   <x:SizeWithCells/>
   <x:Anchor>
    0, 2, 0, 2, 0, 86, 1, 0</x:Anchor>
   <x:AutoFill>False</x:AutoFill>
   <x:AutoLine>False</x:AutoLine>
   <x:TextVAlign>Center</x:TextVAlign>
   <x:NoThreeD/>
  </x:ClientData>
 </v:shape>`
  }, Se = {
    checkbox: `<v:shapetype id="_x0000_t201" coordsize="21600,21600" o:spt="201"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path shadowok="f" o:extrusionok="f" strokeok="f" fillok="f" o:connecttype="rect"/>
  <o:lock v:ext="edit" shapetype="t"/>
 </v:shapetype>`
  };
  let ae = [], ie = "", ge = !1, de = null;
  for (let E = 0; E < a; E++) {
    const i = e.sheet[E], C = E + 1;
    let x = {}, U = {
      start: "",
      end: ""
    };
    const se = i.asTable;
    let N = "", O = i.shiftTop && i.shiftTop >= 0 ? i.shiftTop + 1 : 1, w = "", X = "", ce = "", Te = "", Ee = "", Ae = "", Ue = !1, pt = "", ht = "", ut = "", yt = "", xe = Object.assign([], i.merges), ue = Object.assign({}, i.formula), We = Object.assign(
      [],
      i.conditionalFormatting
    ), Ie = !1, pe = [], He = "", Ne = [], gt = [], Ge = [], Xe = [], ke = {}, Pe = "", Re = !1, Ze = "";
    if (i.rtl && (Ee += ' rightToLeft="1" '), i.pageBreak) {
      const S = i.pageBreak;
      if (S.row && Array.isArray(S.row)) {
        Ae = "pageBreakPreview";
        const s = S.row.length;
        Ze += '<rowBreaks count="' + s + '" manualBreakCount="' + s + '">' + S.row.reduce(
          (g, d) => g + '<brk id="' + d + '" max="16383" man="1"/>',
          ""
        ) + "</rowBreaks>";
      }
      if (S.column && Array.isArray(S.column)) {
        Ae = "pageBreakPreview";
        const s = S.column.length;
        Ze += '<colBreaks count="' + s + '" manualBreakCount="' + s + '">' + S.column.reduce(
          (g, d) => g + '<brk id="' + d + '" max="16383" man="1"/>',
          ""
        ) + "</colBreaks>";
      }
    }
    let xt = "";
    if (i.pageOption) {
      const S = i.pageOption;
      if (S.isPortrait && (Re = !0), S.margin) {
        const _ = S.margin;
        let A = {
          left: 0.7,
          right: 0.7,
          top: 0.75,
          bottom: 0.75,
          header: 0.3,
          footer: 0.3
        };
        Object.keys(A).forEach((u) => {
          typeof _[u] == "number" && (A[u] = _[u]);
        }), xt = '<pageMargins left="' + A.left + '" right="' + A.right + '" top="' + A.top + '" bottom="' + A.bottom + '" header="' + A.header + '" footer="' + A.footer + '"/>';
      }
      let s = "", g = "", d = "", f = "";
      if (["header", "footer"].forEach((_) => {
        const A = _.charAt(0).toUpperCase() + _.substring(1);
        if (S[_]) {
          const u = S[_];
          typeof u == "object" && Object.keys(u).forEach((F) => {
            s.indexOf(F) < 0 && (s += F);
            const le = u[F];
            let W = "";
            if (Object.keys(le).reduce((D, R) => (R == "l" ? D.splice(0, 0, R) : R == "c" ? D.splice(1, 0, R) : R == "r" && D.splice(2, 0, R), D), []).forEach((D) => {
              const R = le[D];
              W += "&amp;" + D.toUpperCase(), R.styleId && M[R.styleId] && (W += M[R.styleId]), R.text && (W += R.text);
            }), W = "<" + F + A + ">" + W + "</" + F + A + ">", F == "odd")
              g += W;
            else if (F == "even")
              d += W;
            else if (F == "first")
              f += W;
            else
              throw "type error";
          });
        }
      }), Pe = g + d + f, Pe.length > 0) {
        Re = !0;
        const _ = s.length == 7 || s.length == 12 ? ' differentOddEven="1"' : "", A = s.indexOf("first") >= 0 ? ' differentFirst="1"' : "";
        Pe = "<headerFooter" + _ + A + ">" + Pe + "</headerFooter>";
      }
    }
    if (i.viewOption) {
      let S = "";
      const s = i.viewOption;
      s.type && (Ae = s.type), s.hideRuler && (Ee += ' showRuler="0" '), s.hideGrid && (Ee += ' showGridLines="0" '), s.hideHeadlines && (Ee += ' showRowColHeaders="0" ');
      let g = s.splitOption;
      if (typeof g > "u" && (Re = !1, typeof s.frozenOption == "object")) {
        const d = s.frozenOption;
        if (S = ' state="frozen" ', d.type == "R" || d.type == "ROW") {
          let f;
          typeof d.index == "object" ? f = d.index.r : f = d.index, g = {
            startAt: {
              b: "A" + (f + 1)
            },
            type: "H",
            split: f
          };
        } else if (d.type == "C" || d.type == "COLUMN") {
          let f;
          typeof d.index == "object" ? f = d.index.c : f = d.index, f > n.length - 1 && (n = Me(n, f)), g = {
            type: "V",
            startAt: {
              r: n[f] + 1
            },
            split: f
          };
        } else if (d.type == "B" || d.type == "BOTH") {
          let f = "", I;
          typeof d.index == "number" ? (I = d.index, f = n[d.index] + (d.index + 1)) : (I = {
            y: d.index.r,
            x: d.index.c
          }, f = n[d.index.c] + (d.index.r + 1)), g = {
            startAt: {
              two: f
            },
            type: "B",
            split: I
          };
        }
      }
      if (g)
        if (g.type == "H" || g.type == "HORIZONTAL") {
          let d;
          g.startAt && (d = g.startAt.b, g.startAt.t && (Ee += ' topLeftCell="' + g.startAt.t + '"')), d || (d = "A1"), Te = '<pane ySplit="' + (typeof g.split == "object" && g.split.y || g.split) + '" topLeftCell="' + d + '" activePane="bottomLeft"' + S + "/>";
        } else if (g.type == "V" || g.type == "VERTICAL") {
          let d;
          g.startAt && (d = g.startAt.r, g.startAt.l && (Ee += ' topLeftCell="' + g.startAt.l + '"')), d || (d = "A1"), Te = '<pane xSplit="' + (typeof g.split == "object" && g.split.x || g.split) + '" topLeftCell="' + d + '" activePane="topLeft"' + S + "/>";
        } else {
          let d;
          g.startAt && (d = g.startAt.two, g.startAt.one && (Ee += ' topLeftCell="' + g.startAt.one + '"')), d || (d = "A1"), Te = '<pane xSplit="' + (typeof g.split == "object" && g.split.x || g.split) + '" ySplit="' + (typeof g.split == "object" && g.split.y || g.split) + '" topLeftCell="' + d + '" activePane="bottomLeft"' + S + "/>";
        }
    }
    if (Re && (Ae = "pageLayout"), i.checkbox) {
      Ue = !0;
      const S = ye.checkbox;
      i.checkbox.forEach((s, g) => {
        let d = S;
        if (s.link) {
          let F = je(s.link, n);
          d = d.replace(
            "**fmlaLink**",
            'fmlaLink="$' + n[F.col] + "$" + (F.row + 1) + '"'
          );
        } else
          d = d.replace("**fmlaLink**", "");
        s.mixed ? d = d.replace("**value**", 'checked="Mixed"') : s.checked ? d = d.replace("**value**", 'checked="Checked"') : d = d.replace("**value**", ""), s.threeD && d.replace('noThreeD="1"', ""), ae.push(d), ve++;
        let f = E + "" + ve++;
        const I = "_x0000_s" + f;
        ht += we.checkbox.replace("***id***", I).replace("***text***", s.text);
        let _ = s.startStr, A = s.endStr, u = {
          start: {
            col: 0,
            row: 0
          },
          end: {
            col: 1,
            row: 1
          }
        };
        if (s.col && s.row && (u = {
          start: {
            col: s.col,
            row: s.row - 1
          },
          end: {
            col: s.col,
            row: s.row
          }
        }), typeof _ == "string" && _.length >= 2) {
          let F = je(_, n);
          u.start = {
            ...F
          }, u.end = {
            col: F.col + 1,
            row: F.row + 1
          };
        }
        if (typeof A == "string" && A.length >= 2) {
          let F = je(A, n);
          F.row += 1, F.col += 1, u.end = {
            ...F
          };
        }
        yt += '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice Requires="x14"><control shapeId="' + f + '" r:id="rId' + (7 + g) + '" name="' + s.text + '"><controlPr defaultSize="0" autoFill="0" autoLine="0" autoPict="0"><anchor moveWithCells="1"><from><xdr:col>' + u.start.col + "</xdr:col><xdr:colOff>19050</xdr:colOff><xdr:row>" + u.start.row + "</xdr:row><xdr:rowOff>19050</xdr:rowOff></from><to><xdr:col>" + u.end.col + "</xdr:col><xdr:colOff>819150</xdr:colOff><xdr:row>" + u.end.row + "</xdr:row><xdr:rowOff>0</xdr:rowOff></to></anchor></controlPr></control></mc:Choice></mc:AlternateContent>", ut += '<Relationship Id="rId' + (7 + g) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp" Target="../ctrlProps/ctrlProp' + ae.length + '.xml" />', pt += '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" Requires="a14"><xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>' + u.start.col + "</xdr:col><xdr:colOff>19050</xdr:colOff><xdr:row>" + u.start.row + "</xdr:row><xdr:rowOff>19050</xdr:rowOff></xdr:from><xdr:to><xdr:col>" + u.end.col + "</xdr:col><xdr:colOff>819150</xdr:colOff><xdr:row>" + u.end.row + '</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:to><xdr:sp macro="" textlink=""><xdr:nvSpPr><xdr:cNvPr id="' + f + '" name="' + s.text + '" hidden="1"><a:extLst><a:ext uri=""><a14:compatExt spid="' + I + '"/></a:ext><a:ext uri=""><a16:creationId xmlns:a16="http://schemas.microsoft.com/office/drawing/2014/main" id=""/></a:ext></a:extLst></xdr:cNvPr><xdr:cNvSpPr/></xdr:nvSpPr><xdr:spPr bwMode="auto"><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></xdr:spPr><xdr:txBody><a:bodyPr vertOverflow="clip" wrap="square" lIns="27432" tIns="18288" rIns="0" bIns="18288" anchor="ctr" upright="1"/><a:lstStyle/><a:p><a:pPr algn="l" rtl="0"><a:defRPr sz="1000"/></a:pPr><a:r><a:rPr lang="en-US" sz="800" b="0" i="0" u="none" strike="noStrike" baseline="0"><a:solidFill><a:srgbClr val="000000"/></a:solidFill><a:latin typeface="Segoe UI"/><a:cs typeface="Segoe UI"/></a:rPr><a:t>' + s.text + "</a:t></a:r></a:p></xdr:txBody></xdr:sp><xdr:clientData/></xdr:twoCellAnchor></mc:Choice><mc:Fallback/></mc:AlternateContent>";
      });
    }
    let Je;
    if (i.backgroundImage) {
      b == null && (b = m == null ? void 0 : m.folder("media"));
      const S = i.backgroundImage;
      Je = new Promise(async (s, g) => {
        let d = S.lastIndexOf("."), f;
        d > 0 ? (f = S.substring(d + 1).toLowerCase(), f.length > 4 && (f.indexOf("gif") >= 0 ? f = "gif" : f.indexOf("jpg") >= 0 ? f = "jpg" : f.indexOf("jpeg") >= 0 ? f = "jpeg" : f = "png")) : f = "png";
        const I = J++, _ = "image" + I + "." + f, A = await Pt(S, _, o, e.fetch);
        A || g("image not load"), Ce.push(f), s({
          name: _,
          type: f,
          image: A,
          ref: I
        });
      });
    }
    let Qe;
    if (i.images && (b == null && (b = m == null ? void 0 : m.folder("media")), Qe = Promise.all([
      ...i.images.map(async (S, s) => {
        let g = S.url.lastIndexOf("."), d;
        g > 0 ? (d = S.url.substring(g + 1).toLowerCase(), d.length > 4 && (d.indexOf("gif") >= 0 ? d = "gif" : d.indexOf("jpg") >= 0 ? d = "jpg" : d.indexOf("jpeg") >= 0 ? d = "jpeg" : d = "png")) : d = "png", Ce.push(d);
        const f = "image" + J++ + "." + d;
        return {
          type: d,
          image: await Pt(S.url, f, o, e.fetch),
          obj: S,
          i: s,
          name: f
        };
      })
    ])), Array.isArray(i.headers) && i.headers.length) {
      const S = i.headers.length;
      let s = "";
      if (i.title) {
        const f = i.title, I = f.comment, _ = f.shiftTop && f.shiftTop >= 0 ? f.shiftTop : 0, A = i.shiftLeft && i.shiftLeft >= 0 ? i.shiftLeft : 0, u = f.shiftLeft && f.shiftLeft + A >= 0 ? f.shiftLeft + A : A, F = f.consommeRow ? f.consommeRow - 1 : 1, le = f.consommeCol ? f.consommeCol : S, W = F == 0 && typeof f.height == "number" ? ' ht="' + f.height + '" customHeight="1" ' : "", D = f.styleId ? f.styleId : "titleStyle", R = n[u] + "" + (O + _);
        if (xe.push(
          R + ":" + n[u + le - 1] + (O + F + _)
        ), typeof I < "u") {
          Ie = !0;
          const ee = nt(
            I,
            B.commentSyntax.value,
            c
          );
          let fe = pe.length;
          if (ee.hasAuthor && typeof ee.author < "u") {
            let Q = ee.author.toString();
            const oe = pe.indexOf(Q);
            oe < 0 ? pe.push(Q) : fe = oe;
          }
          Ne.push({
            row: O + _ - 1,
            col: u
          }), He += lt(
            R,
            ee.commentStr,
            ee.commentStyle,
            fe
          );
        }
        typeof f.text == "string" && (x[O + _] = {
          startTag: '<row r="' + (O + _) + '" ' + W + ' spans="1:' + (u + le - 1) + '">',
          details: '<c r="' + R + '" ' + (e.styles[D] ? ' s="' + e.styles[D].index + '" ' : "") + ' t="s"><v>' + $ + "</v></c>",
          endTag: "</row>"
        }, s += '<row r="' + (O + _) + '" ' + W + ' spans="1:' + (u + le - 1) + '">', s += '<c r="' + R + '" ' + (e.styles[D] ? ' s="' + e.styles[D].index + '" ' : "") + ' t="s"><v>' + $ + "</v></c>", s += "</row>", $++, H[f.text] = f.text, f.multiStyleValue ? j += at(
          f.multiStyleValue,
          f.text,
          B.commentSyntax.value,
          D,
          i.useSplitBaseOnMatch
        ) : j += "<si><t>" + De(f.text) + "</t></si>"), O += _ + F + 1;
      }
      let g = i.headerStyleKey ? i.headerStyleKey : null, d = 0;
      if (typeof i.shiftLeft == "number" && i.shiftLeft >= 0 && (d = i.shiftLeft), se && (N += '<tableColumns count="' + i.headers.length + '">', de || (de = m == null ? void 0 : m.folder("tables"))), U.start = n[d] + "" + O, U.end = n[d + i.headers.length - 1] + "" + (O + i.data.length), i.headers.forEach((f, I) => {
        if (se && (N += '<tableColumn id="' + (I + 1) + '" name="' + f.text + '"/>'), d && (I += d), f.formula && Ge.push(I), f.conditionalFormatting && Xe.push(I), gt.push(f.label), i.mergeRowDataCondition && typeof i.mergeRowDataCondition == "function" && i.mergeRowDataCondition(
          f,
          null,
          I,
          !0
        ) === !0 && (ke[n[I]] = {
          inProgress: !0,
          start: O
        }), i.styleCellCondition && typeof i.styleCellCondition == "function" && (g = i.styleCellCondition(
          f,
          f,
          O,
          I,
          !0,
          v
        ) || g), f.size && f.size > 0 && (X += '<col min="' + (I + 1) + '" max="' + (I + 1) + '" width="' + f.size + '" customWidth="1" />'), i.withoutHeader)
          return;
        const _ = n[I] + "" + O;
        if (typeof i.commentCondition == "function") {
          const u = i.commentCondition(
            f,
            null,
            f.label,
            O,
            I,
            !0
          );
          u && (f.comment = u);
        }
        if (f.comment) {
          Ie = !0;
          const u = nt(
            f.comment,
            B.commentSyntax.value,
            c
          );
          let F = pe.length;
          if (u.hasAuthor && typeof u.author < "u") {
            let le = u.author.toString();
            const W = pe.indexOf(le);
            W < 0 ? pe.push(le) : F = W;
          }
          Ne.push({
            row: O - 1,
            col: I
          }), He += lt(
            _,
            u.commentStr,
            u.commentStyle,
            F
          );
        }
        const A = ue && ue[_];
        if (A) {
          const u = rt(
            _,
            A,
            C,
            e.styles
          );
          u.needCalcChain && (ge = !0, ie += u.chainCell), w += u.cell, delete ue[_];
        } else {
          if (w += '<c r="' + n[I] + O + '" ' + (g && e.styles && e.styles[g] ? ' s="' + e.styles[g].index + '" ' : "") + ' t="s"><v>' + $ + "</v></c>", typeof i.multiStyleCondition == "function") {
            const u = i.multiStyleCondition(
              f,
              null,
              f.label,
              O,
              I,
              !0
            );
            u && (f.multiStyleValue = u);
          }
          f.multiStyleValue ? j += at(
            f.multiStyleValue,
            f.text,
            B.commentSyntax.value,
            g || "",
            i.useSplitBaseOnMatch
          ) : j += "<si><t>" + De(f.text) + "</t></si>", H[f.text] = f.text, $++;
        }
      }), se && (N += "</tableColumns>"), i.withoutHeader)
        w += s;
      else {
        const f = '<row r="' + O + '" spans="1:' + S + '" ' + (i.headerHeight ? 'ht="' + i.headerHeight + '" customHeight="1"' : "") + (i.headerRowOption ? Object.keys(i.headerRowOption).reduce((I, _) => I + " " + _ + '="' + i.headerRowOption[_] + '" ', "  ") : "") + ">";
        x[O] = {
          startTag: f,
          endTag: "</row>",
          details: w
        }, w = s + f + w + "</row>", O++;
      }
      if (Array.isArray(i.data)) {
        const f = i.mapSheetDataOption && i.mapSheetDataOption.outlineLevel ? i.mapSheetDataOption.outlineLevel : "outlineLevel", I = i.mapSheetDataOption && i.mapSheetDataOption.hidden ? i.mapSheetDataOption.hidden : "hidden", _ = i.mapSheetDataOption && i.mapSheetDataOption.height ? i.mapSheetDataOption.height : "height", A = i.data.length;
        i.data.forEach((u, F) => {
          if (u.mergeType)
            for (let R = 0; R < u.mergeType.length; R++) {
              const ee = u.mergeType[R], fe = u.mergeStart[R], Q = u.mergeValue[E];
              let oe = "";
              ee == "both" ? oe = n[fe] + "" + O + ":" + n[fe + Q[1]] + (O + Q[0]) : ee == "col" ? oe = n[fe] + "" + O + ":" + n[fe + Q[0]] + O : oe = n[fe] + "" + O + ":" + n[fe] + (O + Q[0]), xe.push(oe);
            }
          const le = u.rowStyle, W = '<row r="' + O + '" spans="1:' + S + '" ' + (_ in u ? 'ht="' + u[_] + '" customHeight="1"' : "") + (f in u ? ' outlineLevel="' + u[f] + '"' : "") + (I in u ? ' hidden="' + u[I] + '"' : "") + " >";
          w += W;
          let D = "";
          gt.forEach((R, ee) => {
            d && (ee += d);
            const fe = u[R] * 1;
            let Q = i.convertStringToNumber && !isNaN(fe) ? fe : u[R], oe = le;
            if (i.styleCellCondition && typeof i.styleCellCondition == "function" && (oe = i.styleCellCondition(
              Q,
              u,
              O,
              ee,
              !1,
              v
            ) || le), i.mergeRowDataCondition && typeof i.mergeRowDataCondition == "function") {
              let re = i.mergeRowDataCondition(
                Q,
                R,
                ee,
                !1
              );
              const ne = n[ee];
              let be = ke[ne];
              re === !0 ? (!be || be && !be.inProgress) && (ke[ne] = {
                inProgress: !0,
                start: O
              }) : be && be.inProgress && (xe.push(
                ne + be.start + ":" + ne + (O - 1)
              ), ke[ne] = {
                inProgress: !1,
                start: -1
              });
            }
            typeof Q > "u" && (Q = "");
            const $e = n[ee] + "" + O;
            if (typeof i.commentCondition == "function") {
              const re = i.commentCondition(
                Q,
                u,
                R,
                O,
                ee,
                !1
              );
              re && (typeof u.comment != "object" && (u.comment = {}), u.comment[R] = re);
            }
            if (typeof u.comment == "object" && R in u.comment) {
              const re = u.comment[R];
              Ie = !0;
              const ne = nt(
                re,
                B.commentSyntax.value,
                c
              );
              ne.hasAuthor && typeof ne.author < "u" && pe.push(ne.author.toString()), Ne.push({
                row: O - 1,
                col: ee
              });
              let be = pe.length;
              if (ne.hasAuthor && typeof ne.author < "u") {
                let St = ne.author.toString();
                const kt = pe.indexOf(St);
                kt < 0 ? pe.push(St) : be = kt;
              }
              He += lt(
                $e,
                ne.commentStr,
                ne.commentStyle,
                be
              );
            }
            const Et = ue && ue[$e];
            if (Et) {
              const re = rt($e, Et, C);
              re.needCalcChain && (ge = !0, ie += re.chainCell), w += re.cell, D += re.cell, delete ue[$e];
            } else if (typeof Q == "string") {
              const re = '<c r="' + n[ee] + O + '" t="s" ' + (oe && e.styles && e.styles[oe] ? 's="' + e.styles[oe].index + '"' : "") + "><v>" + $ + "</v></c>";
              if (D += re, w += re, typeof i.multiStyleCondition == "function") {
                const ne = i.multiStyleCondition(
                  Q,
                  u,
                  R,
                  O,
                  ee,
                  !1
                );
                ne && ((!("multiStyleValue" in u) || typeof u.multiStyleValue > "u") && (u.multiStyleValue = {}), u.multiStyleValue[R] = ne);
              }
              "multiStyleValue" in u && u.multiStyleValue && R in u.multiStyleValue ? j += at(
                u.multiStyleValue[R],
                Q,
                B.commentSyntax.value,
                oe || "",
                i.useSplitBaseOnMatch
              ) : j += "<si><t>" + De(Q) + "</t></si>", H[Q] = Q, $++;
            } else {
              const re = '<c r="' + n[ee] + O + '" ' + (oe && e.styles && e.styles[oe] ? 's="' + e.styles[oe].index + '"' : "") + "><v>" + Q + "</v></c>";
              w += re, D += re;
            }
          }), A - 1 == F && Object.keys(ke).forEach((R) => {
            ke[R].inProgress && xe.push(
              R + ke[R].start + ":" + R + O
            );
          }), x[O] = {
            startTag: W,
            endTag: "</row>",
            details: D
          }, O++, w += "</row>";
        }), i.sortAndFilter && (i.sortAndFilter.mode == "all" ? ce += '<autoFilter ref="A1:' + n[S - 1] + (O - 1) + '" />' : typeof i.sortAndFilter.ref == "string" && i.sortAndFilter.ref.length > 0 && (ce += '<autoFilter ref="' + i.sortAndFilter.ref + '" />'));
      }
      if (Ge.length > 0 && Ge.forEach((f) => {
        const I = i.shiftLeft ? i.shiftLeft : 0, _ = i.headers[f - I], A = n[f];
        ue[A + "" + O] = {
          start: i.withoutHeader ? A + "1" : A + "2",
          end: A + "" + (O - 1),
          type: _.formula.type,
          ..._.formula.styleId ? { styleId: _.formula.styleId } : {}
        };
      }), Xe.length > 0 && Xe.forEach((f) => {
        const I = i.headers[f];
        I.conditionalFormatting && We.push({
          ...I.conditionalFormatting,
          start: i.withoutHeader ? n[f] + "1" : n[f] + "2",
          end: n[f] + "" + (O - 1)
        });
      }), ue) {
        const f = Object.keys(ue).sort(
          (I, _) => I > _ ? 1 : -1
        );
        if (f.length) {
          let I = {};
          f.forEach((_) => {
            const A = rt(
              _,
              ue[_],
              C,
              e.styles
            );
            A.needCalcChain && (ge = !0, ie += A.chainCell), I[A.row] ? I[A.row] += A.cell : I[A.row] = A.cell;
          }), Object.keys(I).forEach((_) => {
            const A = _, u = I[A];
            let F = x[A];
            if (F) {
              const le = F.startTag + F.details + u + F.endTag;
              let W = new RegExp(F.startTag + "[\\n\\s\\S]*?</row>");
              w = w.replace(W, le);
            } else
              w += '<row r="' + _ + '" spans="1:' + S + '"  >' + u + "</row>", x[A] = {
                startTag: '<row r="' + _ + '" spans="1:' + S + '"  >',
                endTag: "</row>",
                details: u
              };
          });
        }
      }
    }
    E > 0 && (te += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (E + 1) + '.xml" />');
    const bt = i.name ? i.name : "sheet" + (E + 1), Vt = i.state ? i.state : "visible";
    Z += '<sheet state="' + Vt + '" name="' + bt + '" sheetId="' + (E + 1) + '" r:id="rId' + (z + 1) + '" />', q += '<Relationship Id="rId' + (z + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (E + 1) + '.xml" />', K += "<vt:lpstr>" + ("sheet" + (E + 1)) + "</vt:lpstr>", i.selected && (G = !0, Y = E);
    const Ct = i.sortAndFilter ? 'filterMode="1"' : "";
    let vt = -1;
    Je && await Je.then((S) => {
      let s = S;
      vt = s.ref, b == null || b.file(s.name, s.image);
    });
    let Be = !1, et = "", wt = "";
    Qe && (Be = !0, await Qe.then((S) => {
      let s = "";
      S.forEach((g, d) => {
        const f = d + 1;
        let I = g.image;
        const _ = g.name;
        let A = g.obj.from, u = g.obj.to, F = g.obj.margin;
        g.type;
        let le = g.obj.type, W = g.obj.extent;
        typeof W > "u" && (W = {
          cx: 2e5,
          cy: 2e5
        });
        let D = {
          start: {
            col: 0,
            row: 0,
            mL: 0,
            mT: 0
          },
          end: {
            col: 1,
            row: 1,
            mR: 0,
            mB: 0
          }
        };
        if (typeof A == "string" && A.length >= 2) {
          let R = je(A, n);
          D.start = {
            ...R
          }, D.end = {
            col: R.col + 1,
            row: R.row + 1
          };
        }
        if (typeof u == "string" && u.length >= 2) {
          let R = je(u, n);
          R.row += 1, R.col += 1, D.end = {
            ...R
          };
        }
        D.end.mR = 0, D.end.mB = 0, D.start.mL = 0, D.start.mT = 0, F && ((F.all || F.right) && (D.end.mR = F.all || F.right), (F.all || F.bottom) && (D.end.mB = F.all || F.bottom), (F.all || F.left) && (D.start.mL = F.all || F.left), (F.all || F.top) && (D.start.mT = F.all || F.top)), le == "one" ? et += "<xdr:oneCellAnchor><xdr:from><xdr:col>" + D.start.col + "</xdr:col><xdr:colOff>" + D.start.mT + "</xdr:colOff><xdr:row>" + D.start.row + "</xdr:row><xdr:rowOff>" + D.start.mL + '</xdr:rowOff></xdr:from><xdr:ext cx="' + W.cx + '" cy="' + W.cy + '"/><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="' + f + '" name="Picture ' + f + '"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize="0" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' + f + '"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst="rect"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:oneCellAnchor>' : et += '<xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>' + D.start.col + "</xdr:col><xdr:colOff>" + D.start.mT + "</xdr:colOff><xdr:row>" + D.start.row + "</xdr:row><xdr:rowOff>" + D.start.mL + "</xdr:rowOff></xdr:from><xdr:to><xdr:col>" + D.end.col + "</xdr:col><xdr:colOff>" + D.end.mB + "</xdr:colOff><xdr:row>" + D.end.row + "</xdr:row><xdr:rowOff>" + D.end.mR + '</xdr:rowOff></xdr:to><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="' + f + '" name="Picture ' + f + '"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize="0" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' + f + '"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst="rect"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:twoCellAnchor>', b == null || b.file(_, I), s += '<Relationship Id="rId' + f + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/' + _ + '" />';
      }), wt = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` + s + "</Relationships>";
    })), xe = [...new Set(xe)];
    let Tt = "", _e = 1;
    We.length > 0 && (Tt = We.reduce((S, s) => {
      if (s.type == "cells")
        return s.operator == "ct" ? S + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="containsText" dxfId="' + (s.styleId && V[s.styleId] ? V[s.styleId] : 0) + '" priority="' + (s.priority ? s.priority : _e++) + '"  operator="containsText" text="' + s.value + '"><formula>NOT(ISERROR(SEARCH("' + s.value + '",' + s.start + ")))</formula></cfRule></conditionalFormatting>" : typeof s.operator > "u" || typeof r[s.operator] > "u" ? S : S + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="cellIs" dxfId="' + (s.styleId && typeof V[s.styleId] < "u" ? V[s.styleId] : 0) + '" priority="' + (s.priority ? s.priority : _e++) + '" operator="' + r[s.operator] + '">' + (Array.isArray(s.value) ? s.value.reduce((g, d) => g + "<formula>" + d.value + "</formula>", "") : "<formula>" + s.value + "</formula>") + "</cfRule></conditionalFormatting>";
      if (s.type == "top")
        return S + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="' + (s.operator ? "aboveAverage" : "top10") + '" dxfId="' + (s.styleId && typeof V[s.styleId] < "u" ? V[s.styleId] : 0) + '" priority="' + (s.priority ? s.priority : _e++) + '" ' + (s.bottom ? 'bottom="1"' : "") + " " + (s.percent ? 'percent="1"' : "") + '  rank="' + s.value + '" ' + (s.operator == "belowAverage" ? 'aboveAverage="0"' : "") + "/></conditionalFormatting>";
      if (s.type == "iconSet") {
        let g = "";
        return typeof s.operator > "u" ? S : (s.operator.indexOf("5") == 0 ? g = '<cfvo type="percent" val="0"/><cfvo type="percent" val="20"/><cfvo type="percent" val="40"/><cfvo type="percent" val="60"/><cfvo type="percent" val="80"/>' : s.operator.indexOf("4") == 0 ? g = '<cfvo type="percent" val="0"/><cfvo type="percent" val="25"/><cfvo type="percent" val="50"/><cfvo type="percent" val="75"/>' : g = '<cfvo type="percent" val="0"/><cfvo type="percent" val="33"/><cfvo type="percent" val="67"/>', S + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="iconSet" priority="' + (s.priority ? s.priority : _e++) + '"><iconSet iconSet="' + s.operator + '">' + g + "</iconSet></cfRule></conditionalFormatting>");
      } else return s.type == "colorScale" ? S + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="colorScale" priority="' + (s.priority ? s.priority : _e++) + '"><colorScale><cfvo type="min"/>' + (s.operator == "percentile" ? '<cfvo type="percentile" val="' + s.value + '"/>' : "") + '<cfvo type="max"/>' + (s.colors && Array.isArray(s.colors) ? s.colors.reduce((g, d) => g + '<color rgb="' + he(d, o) + '"/>', "") : '<color rgb="FFF8696B"/><color rgb="FFFFEB84"/><color rgb="FF63BE7B"/>') + "</colorScale></cfRule></conditionalFormatting>" : s.type == "dataBar" ? S + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="dataBar" priority="' + (s.priority ? s.priority : _e++) + '"><dataBar><cfvo type="min"/><cfvo type="max"/>' + (s.colors && Array.isArray(s.colors) ? s.colors.reduce((g, d) => g + '<color rgb="' + he(d, o) + '"/>', "") : '<color rgb="FF638EC6"/>') + "</dataBar></cfRule></conditionalFormatting>" : S;
    }, "")), (Ue || Ie || Be) && P == null && (P = m == null ? void 0 : m.folder("drawings")), Be && T == null && (T = P == null ? void 0 : P.folder("_rels")), k["sheet" + (E + 1)] = {
      indexId: z + 1,
      key: "sheet" + (E + 1),
      sheetName: bt,
      sheetDataTableColumns: N,
      backgroundImageRef: vt,
      sheetDimensions: U,
      asTable: se || !1,
      sheetDataString: w,
      sheetBreakLine: Ze,
      viewType: Ae,
      hasComment: Ie,
      drawersContent: et,
      cFDataString: Tt,
      sheetMargin: xt,
      sheetHeaderFooter: Pe,
      isPortrait: Re,
      drawersRels: wt,
      hasImages: Be,
      hasCheckbox: Ue,
      formRel: ut,
      checkboxDrawingContent: pt,
      checkboxForm: ae,
      checkboxSheetContent: yt,
      checkboxShape: ht,
      commentString: He,
      commentAuthor: pe,
      shapeCommentRowCol: Ne,
      splitOption: Te,
      sheetViewProperties: Ee,
      sheetSizeString: X.length > 0 ? "<cols>" + X + "</cols>" : "",
      protectionOption: i.protectionOption ? Object.keys(i.protectionOption).reduce((S, s) => S + " " + s + '="' + i.protectionOption[s] + '" ', "<sheetProtection ") + "/>" : "",
      merges: xe.length > 0 ? xe.reduce((S, s) => S + ' <mergeCell ref="' + s + '" />', '<mergeCells count="' + xe.length + '">') + " </mergeCells>" : "",
      selectedView: !!i.selected,
      sheetSortFilter: ce,
      tabColor: i.tabColor ? '<sheetPr codeName="' + ("Sheet" + (E + 1)) + '" ' + Ct + ' ><tabColor rgb="' + i.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + Ct + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, z++;
  }
  ge && (z++, q += '<Relationship Id="rId' + z + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain" Target="calcChain.xml"/>', m == null || m.file(
    "calcChain.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<calcChain xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">` + ie + "</calcChain>"
  ));
  let Yt = Object.keys(k), Ye = p.folder("_rels");
  Ye == null || Ye.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  let Oe = p.folder("docProps");
  Oe == null || Oe.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), Oe == null || Oe.file("app.xml", Qt(a, K)), m == null || m.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr />` + (G ? '<bookViews><workbookView xWindow="3540" yWindow="1365" windowWidth="21600" windowHeight="11325" activeTab="' + Y + '"/></bookViews>' : "") + " <sheets>  " + Z + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), m == null || m.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + ($ - 1) + '" uniqueCount="' + Object.keys(H).length + '"> ' + j + "</sst>"
  );
  let Ve = m == null ? void 0 : m.folder("_rels");
  Ve == null || Ve.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + q + " </Relationships>"
  );
  let ze = m == null ? void 0 : m.folder("theme");
  ze == null || ze.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/></a:theme>`
  );
  let Fe = m == null ? void 0 : m.folder("worksheets"), mt = [], dt = [], Le = [];
  if (Yt.forEach((E, i) => {
    const C = k[E];
    let x = "", U = {
      form: !1,
      drawing: !1,
      vmlDrwing: !1,
      comment: !1,
      table: !1,
      sheetDrawingsPushed: !1
    };
    const se = C.sheetDataTableColumns;
    if (se.length > 0) {
      dt.push("table" + (i + 1) + ".xml");
      const w = C.asTable, X = C.sheetDimensions;
      de == null || de.file(
        "table" + (i + 1) + ".xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="xr xr3" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" id="` + (i + 1) + '"  name="Table' + (i + 1) + '" displayName="Table' + (i + 1) + '" ref="' + X.start + ":" + X.end + '" totalsRowShown="0"><autoFilter ref="' + X.start + ":" + X.end + '"/>' + se + '<tableStyleInfo name="TableStyle' + (w.type ? w.type : "Medium") + (w.styleNumber ? w.styleNumber : 2) + '" showFirstColumn="' + (w.firstColumn ? w.firstColumn : "0") + '" showLastColumn="' + (w.lastColumn ? w.lastColumn : "0") + '" showRowStripes="' + (w.rowStripes ? w.rowStripes : "1") + '" showColumnStripes="' + (w.columnStripes ? w.columnStripes : "0") + '"/></table>'
      ), x += '<Relationship Id="rId15" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/table" Target="../tables/table' + (i + 1) + '.xml"/>';
    }
    const N = "drawing" + (Le.length + 1) + ".xml";
    if (C.hasImages && (Le.push(N), U.sheetDrawingsPushed = !0, T == null || T.file(
      N + ".rels",
      C.drawersRels.toString()
    ), U.drawing = !0, x += '<Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"  Target="../drawings/' + N + '" />'), C.hasCheckbox && (U.sheetDrawingsPushed || Le.push(N), x += '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing" Target="../drawings/vmlDrawing' + (i + 1) + '.vml" />' + (U.drawing ? "" : '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" Target="../drawings/' + N + '" />'), U.drawing = !0, U.vmlDrwing = !0, x += C.formRel), (C.hasCheckbox || C.hasImages) && (P == null || P.file(
      N,
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"  xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex"  xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"  xmlns:dgm="http://schemas.openxmlformats.org/drawingml/2006/diagram"  xmlns:x3Unk="http://schemas.microsoft.com/office/drawing/2010/slicer"  xmlns:sle15="http://schemas.microsoft.com/office/drawing/2012/slicer">` + (C.hasImages ? C.drawersContent : "") + (C.hasCheckbox ? C.checkboxDrawingContent : "") + "</xdr:wsDr>"
    )), C.hasComment) {
      mt.push(i + 1);
      let w = C.commentAuthor;
      m == null || m.file(
        "comments" + (i + 1) + ".xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><authors>` + (Array.isArray(w) && w.length > 0 ? w.reduce(
          (X, ce) => X + "<author>" + ce + "</author>",
          ""
        ) : "<author></author>") + "</authors><commentList>" + C.commentString + "</commentList></comments>"
      ), x += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments" Target="../comments' + (i + 1) + '.xml" />' + (U.vmlDrwing ? "" : '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing" Target="../drawings/vmlDrawing' + (i + 1) + '.vml" />');
    }
    if ((C.hasComment || C.hasCheckbox) && (P == null || P.file(
      "vmlDrawing" + (i + 1) + ".vml",
      '<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint"><o:shapelayout v:ext="edit"><o:idmap v:ext="edit" data="1"/></o:shapelayout>' + (C.hasCheckbox ? Se.checkbox + C.checkboxShape : "") + (C.hasComment ? '  <v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"     path="m,l,21600r21600,l21600,xe">    <v:stroke joinstyle="miter"/>    <v:path gradientshapeok="t" o:connecttype="rect"/>  </v:shapetype>' + C.shapeCommentRowCol.reduce((w, X) => w + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;margin-left:77.25pt;margin-top:23.25pt;width:264pt;height:42.75pt;z-index:1;visibility:hidden' fillcolor="#ffffe1">  <v:fill color2="#ffffe1"/>  <v:shadow on="t" color="black" obscured="t"/>  <v:path o:connecttype="none"/>  <v:textbox>   <div style='text-align:left'></div>  </v:textbox>  <x:ClientData ObjectType="Note">   <x:MoveWithCells/>   <x:SizeWithCells/>   <x:Anchor>    1, 15, 1, 10, 5, 15, 4, 4</x:Anchor>   <x:AutoFill>False</x:AutoFill>   <x:Row>` + X.row + "</x:Row>   <x:Column>" + X.col + "</x:Column>  </x:ClientData></v:shape>", "") : "") + "</xml>"
    )), C.backgroundImageRef > 0 && (x += '<Relationship Id="rId16" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image' + C.backgroundImageRef + '.png"/>'), C.hasImages || C.hasComment || C.hasCheckbox || se.length > 0 || C.backgroundImageRef > 0) {
      const w = Fe == null ? void 0 : Fe.folder("_rels");
      w == null || w.file(
        "sheet" + (i + 1) + ".xml.rels",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> ` + x + "</Relationships>"
      );
    }
    let O = "";
    C.selectedView || C.splitOption ? O = '<sheetViews><sheetView tabSelected="1"' + C.sheetViewProperties + (C.viewType.length > 0 ? ' view="' + C.viewType + '"' : "") + ' workbookViewId="0">' + C.splitOption + (C.selectedView ? '<selection activeCell="A0" sqref="A0" />' : "") + "</sheetView></sheetViews>" : O = '<sheetViews><sheetView workbookViewId="0"' + C.sheetViewProperties + (C.viewType.length > 0 ? ' view="' + C.viewType + '"' : "") + "/></sheetViews>", Fe == null || Fe.file(
      C.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + C.tabColor + O + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + C.sheetSizeString + "<sheetData>" + C.sheetDataString + "</sheetData>" + C.protectionOption + C.sheetSortFilter + C.merges + C.cFDataString + (C.hasImages || C.hasCheckbox ? '<drawing r:id="rId2" />' : "") + (C.hasComment || C.hasCheckbox ? '<legacyDrawing r:id="rId3" />' : "") + (C.hasCheckbox ? '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice Requires="x14"><controls>' + C.checkboxSheetContent + "</controls></mc:Choice></mc:AlternateContent>" : "") + C.sheetMargin + (C.isPortrait || C.sheetBreakLine.length > 0 ? '<pageSetup orientation="portrait" r:id="rId' + (i + 1) + '"/>' : "") + C.sheetBreakLine + C.sheetHeaderFooter + (C.backgroundImageRef > 0 ? '<picture r:id="rId16"/>' : "") + (se.length > 0 ? '<tableParts count="1"> <tablePart r:id="rId15"/></tableParts>' : "") + "</worksheet>"
    );
  }), ae.length > 0) {
    let E = m == null ? void 0 : m.folder("ctrlProps");
    ae.forEach((i, C) => {
      E == null || E.file("ctrlProp" + (C + 1) + ".xml", i);
    });
  }
  if (p.file(
    "[Content_Types].xml",
    Jt(
      te,
      mt,
      [...new Set(Ce)],
      Le,
      ae,
      ge,
      dt
    )
  ), o)
    return p.generateAsync({
      type: e.generateType ? e.generateType : "nodebuffer"
    }).then((E) => E);
  if (e.notSave)
    return p.generateAsync({ type: "blob" }).then((E) => E.slice(
      0,
      E.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  p.generateAsync({ type: "blob" }).then(function(E) {
    import("./FileSaver.min-Di4lMG3c.js").then((i) => i.F).then((i) => {
      const { saveAs: C } = i;
      C(
        E,
        (e.fileName ? e.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function lo(e) {
  const t = e.length;
  let l = 0, o = {}, r = {}, n = {};
  for (let a = 0; a < t; a++) {
    const m = e[a], b = m.length;
    let P = {};
    for (let T = 0; T < b; T++) {
      l++;
      const v = m[T];
      let c;
      v.sheetName ? c = v.sheetName : c = "Sheet 1", c in o || (o[c] = {
        headers: [],
        data: [],
        labelCounter: 0,
        seenAt: a
      }), c in r || (r[c] = {
        index: a,
        value: 0
      }), c in n || (o[c].labelCounter = 0, n[c] = !0);
      let L = [];
      const M = o[c].headers.length;
      let V = {}, B = o[c].seenAt == a, te = v.headers.reduce((q, H, k) => (o[c].labelCounter++, M < o[c].labelCounter && L.push({
        label: "c" + o[c].labelCounter,
        text: B ? H.text : ""
      }), V["c" + o[c].labelCounter] = H.text, {
        ...q,
        [H.label]: "c" + o[c].labelCounter
      }), {});
      if (o[c].headers.push(...L), v.spaceX)
        for (let q = 0; q < v.spaceX; q++)
          o[c].labelCounter++, M <= o[c].labelCounter && o[c].headers.push({
            label: "c" + o[c].labelCounter,
            text: ""
          });
      r[c].index + 1 == a && (P[c] = r[c].value);
      let j = P[c] || 0;
      j > 0 && (!o[c].headerIndex || o[c].headerIndex && o[c].headerIndex != j ? o[c].data.push(V) : o[c].data[j] = {
        ...o[c].data[j],
        ...V
      }, o[c].headerIndex = j, j++);
      let $ = Object.keys(te), Z = v.data.length >= o[c].data.length;
      if (o[c].data = v.data.reduce((q, H, k) => {
        let K = {};
        return q.length > k + j ? K = q[k + j] : q.push(K), $.forEach((z) => {
          let G = te[z];
          K[G] = H[z] ? H[z] : "";
        }), K.tableIndex = l, K.tableStringIndex = k + "," + T, q[k + j] = K, q;
      }, o[c].data), Z && v.spaceY) {
        const q = o[c].headers.length;
        for (let H = 0; H < v.spaceY; H++) {
          let k = {};
          for (let K = 0; K < q; K++) {
            const z = o[c].headers[K];
            k[z.label] = "";
          }
          o[c].data.push(k);
        }
      }
      r[c] = {
        value: Math.max(o[c].data.length, r[c].value),
        index: a
      };
    }
    n = {};
  }
  let h = Object.keys(o), y = [];
  return h.reduce(
    (a, m) => {
      let b = o[m];
      return a.sheet.push({
        ...b,
        name: m
      }), a;
    },
    { sheet: y }
  );
}
function st(e) {
  return /^[A-Z]+[1-9][1-9]*:[A-Z]+[1-9][1-9]*$/.test(e);
}
function ct(e) {
  return /^[A-Z]+[1-9][1-9]*$/.test(e);
}
const ao = {
  fontFamily: {
    mode: "TYPE_CHECK",
    type: "string"
  },
  type: {
    mode: "TYPE_CHECK",
    type: "string"
  },
  size: {
    mode: "TYPE_CHECK",
    type: "number"
  },
  index: {
    mode: "TYPE_CHECK",
    type: "number"
  },
  alignment: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(e, t, l, o) {
      return t.rtl && t.ltr && o && console.warn("Alignment-rtl and ltr cannot be used together."), (t.readingOrder && t.ltr || t.readingOrder && t.rtl) && o && console.warn(
        "Alignment-readingOrder cannot be used with rtl or ltr."
      ), !0;
    }
  },
  border: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(e, t, l, o) {
      const r = ["full", "top", "left", "right", "bottom"], n = [
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
        "mediumDashed"
      ];
      return Object.keys(t).forEach((y) => {
        const p = y;
        if (r.indexOf(p) < 0)
          throw 'border-The type of border is not valid. Valid options include "full," "top," "left," "right," and "bottom."';
        const a = t[p];
        if (!("color" in a))
          throw "border-The border must have a color.";
        if (!("style" in a))
          throw "border-The border needs a style.";
        if (typeof a.style == "string" && n.indexOf(a.style) < 0)
          throw "border-An invalid style has been used.";
      }), !0;
    }
  },
  format: {
    mode: "TYPE_CHECK",
    type: "string"
  },
  bold: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  underline: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  italic: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  doubleUnderline: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  color: {
    mode: "TYPE_CHECK",
    type: "string"
  },
  backgroundColor: {
    mode: "TYPE_CHECK",
    type: "string"
  }
}, io = {
  notSave: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  creator: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: !0
  },
  backend: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  activateConditionalFormatting: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  fileName: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: !0
  },
  generateType: {
    mode: "TYPE_CHECK",
    type: "string",
    isEnum: !0,
    enum: ["nodebuffer", "array", "binarystring", "base64"]
  },
  addDefaultTitleStyle: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  created: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: !0
  },
  modified: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: !0
  },
  numberOfColumn: {
    mode: "TYPE_CHECK",
    type: "number",
    min: 26
  },
  createType: {
    mode: "TYPE_CHECK",
    type: "string"
  },
  styles: {
    mode: "TYPE_CHECK",
    type: "object"
  },
  sheet: {
    mode: "TYPE_CHECK",
    type: "object",
    isArray: !0
  }
}, so = {
  headers: {
    mode: "TYPE_CHECK",
    isArray: !0,
    type: "object"
  },
  data: {
    mode: "TYPE_CHECK",
    isArray: !0,
    type: "object"
  },
  withoutHeader: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  mapSheetDataOption: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(e, t, l, o) {
      const r = Object.keys(t), n = ["outlineLevel", "hidden", "height"];
      return r.forEach((h) => {
        n.indexOf(h) < 0 && o && console.warn(
          'The Schema of mapSheetDataOption does not include the "' + h + '" property.'
        );
      }), !0;
    }
  },
  backgroundImage: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: !0
  },
  conditionalFormatting: {
    mode: "TYPE_CHECK",
    isArray: !0,
    type: "object",
    validateFunction(e, t, l, o) {
      return Array.isArray(t) && t.forEach((r) => {
        if (r.type == "cells") {
          const n = ["lt", "gt", "between", "ct", "eq"];
          if (!r.operator || !r.start || !r.end || typeof r.value > "u")
            throw {
              record: r,
              error: "The object is not complete; you need to fill in the values for operator, start, end and value."
            };
          if (n.indexOf(r.operator) < 0)
            throw { record: r, error: "The operator is not valid." };
        } else if (r.type == "top") {
          const n = ["belowAverage", "aboveAverage"];
          if (!r.start || !r.end || typeof r.value > "u")
            throw {
              record: r,
              error: "The object is not complete; you need to fill in the values for start, end and value."
            };
          if (r.operator && n.indexOf(r.operator) < 0)
            throw { record: r, error: "The operator is not valid." };
        } else if (r.type == "iconSet") {
          if (!r.operator || !r.start || !r.end)
            throw {
              record: r,
              error: "The object is not complete; you need to fill in the values for operator, start and end"
            };
        } else if (r.type == "colorScale") {
          if (!r.start || !r.end)
            throw {
              record: r,
              error: "The object is not complete; you need to fill in the values for start and end"
            };
        } else if (r.type == "dataBar") {
          if (!r.start || !r.end)
            throw {
              record: r,
              error: "The object is not complete; you need to fill in the values for start and end"
            };
        } else
          throw 'Property "type" is not valid.';
      }), !0;
    }
  },
  multiStyleCondition: {
    mode: "TYPE_CHECK",
    type: "function"
  },
  useSplitBaseOnMatch: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  convertStringToNumber: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  images: {
    mode: "TYPE_CHECK",
    isArray: !0,
    type: "object",
    validateFunction(e, t, l, o) {
      if (Array.isArray(t)) {
        const r = ["one", "two"];
        t.forEach((n) => {
          if (typeof n.src != "string")
            throw '"src" property is required.';
          if (typeof n.from != "string" || n.from.length == 0)
            throw '"from" property is required.';
          if (n.to && !ct(n.to))
            throw 'value of "to" is not valid.';
          if (n.from && !ct(n.from))
            throw 'value of "from" is not valid.';
          if (r.indexOf(n.type) < 0)
            throw 'Type of "type" is not valid in the "images" property.';
          if (n.type == "two" && !n.to)
            throw '"to" property is empty. for "two" type "to" property is required.';
        });
      }
      return !0;
    }
  },
  formula: {
    mode: "TYPE_CHECK",
    type: "object"
  },
  pageOption: {
    mode: "TYPE_CHECK",
    type: "object"
  },
  name: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: !0
  },
  title: {
    mode: "TYPE_CHECK",
    type: "object"
  },
  shiftTop: {
    mode: "TYPE_CHECK",
    type: "number",
    min: 0
  },
  shiftLeft: {
    mode: "TYPE_CHECK",
    type: "number"
  },
  selected: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  tabColor: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: !0
  },
  merges: {
    mode: "TYPE_CHECK",
    isArray: !0,
    type: "object",
    validateFunction(e, t, l, o) {
      if (Array.isArray(t)) {
        let r = [];
        if (t.forEach((n) => {
          st(n) || r.push(
            "The " + n + ' reference is not valid in the "merges" property.'
          );
        }), r.length > 0)
          throw r;
      }
      return !0;
    }
  },
  headerStyleKey: {
    mode: "TYPE_CHECK",
    type: "string",
    notEmpty: !0
  },
  mergeRowDataCondition: {
    mode: "TYPE_CHECK",
    type: "function"
  },
  styleCellCondition: {
    mode: "TYPE_CHECK",
    type: "function"
  },
  commentCondition: {
    mode: "TYPE_CHECK",
    type: "function"
  },
  sortAndFilter: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(e, t, l, o) {
      if (typeof t == "object") {
        const r = ["all", "ref"];
        if (!t.mode)
          throw '"mode" is required in sortAndFilter';
        if (r.indexOf(t.mode) < 0)
          throw '"mode" is not valid';
        if (t.mode == "ref")
          if (t.ref) {
            if (!st(t.ref))
              throw '"ref" is not valid';
          } else
            throw '"ref" is must need be defined.';
      }
      return !0;
    }
  },
  state: {
    mode: "TYPE_CHECK",
    type: "string",
    isEnum: !0,
    enum: ["hidden", "visible"]
  },
  headerRowOption: {
    mode: "TYPE_CHECK",
    type: "object"
    // Adjust according to the expected type for headerRowOption
  },
  protectionOption: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(e, t, l, o) {
      const r = [
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
        "pivotTables"
      ], n = ["0", "1", 0, 1];
      return Object.keys(t).forEach((y) => {
        const p = t[y];
        if (r.indexOf(y) < 0)
          throw '"' + y + '" is not valid.';
        if (n.indexOf(p) < 0)
          throw 'value of "' + y + '" is not valid';
      }), !0;
    }
  },
  headerHeight: {
    mode: "TYPE_CHECK",
    type: "number",
    min: 1
  },
  checkbox: {
    mode: "TYPE_CHECK",
    isArray: !0,
    type: "object",
    validateFunction(e, t, l, o) {
      if (Array.isArray(t))
        t.forEach((r) => {
          if (!r.col || !r.row)
            throw '"checkbox" is not complete';
        });
      else
        throw 'Type of "checkbox" property is not valid';
      return !0;
    }
  },
  viewOption: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(e, t, l, o) {
      const r = ["pageLayout", "pageBreakPreview"];
      if (t.type && r.indexOf(t.type) < 0)
        throw 'Type of "type" property is not valid';
      return !0;
    }
  },
  rtl: {
    mode: "TYPE_CHECK",
    type: "boolean"
  },
  pageBreak: {
    mode: "TYPE_CHECK",
    type: "object",
    isArray: !0
  },
  asTable: {
    mode: "TYPE_CHECK",
    type: "object"
  }
};
function Kt(e, t = !0, l = !0) {
  Object.keys(e).forEach((r) => {
    const n = e[r], h = Object.keys(n);
    if (n.format && !Nt[n.format])
      throw 'The "' + n.format + '" format that has been used is not defined.';
    n.underline && n.doubleUnderline, h.forEach((y) => {
      let p = n[y];
      const a = ao[y];
      if (qe(p, a, y, t, l))
        return !0;
    });
  });
}
function Mt(e, t = !0, l = !0) {
  Array.isArray(e) || (e = [e]), e.forEach((o) => {
    Object.keys(o).forEach((n) => {
      const h = o[n], y = so[n];
      qe(h, y, n, t, l);
    });
  });
}
function co(e, t = !0, l = !0) {
  Object.keys(e).forEach((r) => {
    let n = e[r];
    const h = io[r];
    if (qe(n, h, r, t, l))
      if (r == "sheet")
        if (Array.isArray(n))
          Mt(n);
        else
          throw "Sheet must be Array.";
      else r == "styles" && Kt(n);
  });
}
function qe(e, t, l, o, r) {
  if (t) {
    if (typeof e != t.type) {
      if (t.type == "object" || t.type == "string" || o)
        throw 'The Type of The "' + l + '" is not valid';
      r && console.warn("The property type must be " + t.type);
    }
    if (t.isEnum && t.enum.indexOf(e) < 0)
      throw 'The value of "' + l + '" must be ' + JSON.stringify(t.enum);
    if (t.min && e < t.min)
      throw 'The value of "' + l + '" must be higher than ' + t.min;
    if (t.notEmpty && (!e || e.length <= 0))
      throw 'The value of "' + l + '" must not be empty.';
    if (t.isArray && !Array.isArray(e))
      throw 'The value of "' + l + '" should be an array.';
    return typeof t.validateFunction == "function" && t.validateFunction(l, e, o, r), !0;
  } else
    return r && console.warn(
      'The Schema Object does not include the "' + l + '" property.'
    ), !1;
}
const fo = {
  checkSheetValidWithOneRef: ct,
  checkSheetValidWithTwoRef: st,
  generalValidationCheck: qe
}, ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportedForTesting: fo,
  validateExcelTableObjectFunction: co,
  validateSheetArrayFunction: Mt,
  validateStyleObjectFunction: Kt
}, Symbol.toStringTag, { value: "Module" }));
function Rt(e) {
  if (typeof e > "u" || e == null)
    return "";
  typeof e != "string" && (e = String(e));
  let t = e, l = !1;
  return e.indexOf('"') >= 0 && (t = t.replace(/"/g, '""'), l = !0), e.indexOf(",") >= 0 && (l = !0), l && (t = '"' + t + '"'), t;
}
function mo(e) {
  return e ? " " : ",";
}
function jt(e, t) {
  return e.substring(0, e.length - t) + `
`;
}
async function qt(e, t = !1, l = !1) {
  const o = mo(l), r = l ? ".txt" : ".csv", n = o.length;
  let h = [];
  if (e.sheet.forEach((p) => {
    let a = "", m = "";
    const b = p.headers;
    let P = [], T = b.length;
    for (let v = 0; v < T; v++) {
      const c = b[v];
      P.push(c.label), p.withoutHeader || (m += Rt(c.text) + o);
    }
    a += jt(m, n), T = p.data.length;
    for (let v = 0; v < T; v++) {
      m = "";
      const c = p.data[v];
      P.forEach((L) => {
        m += Rt(c[L]) + o;
      }), a += jt(m, n);
    }
    h.push(a);
  }), e.backend)
    return h;
  const y = await import("./FileSaver.min-Di4lMG3c.js").then((p) => p.F).then((p) => p.saveAs);
  if (t) {
    const p = await import("./jszip.min-DoL7Cu0z.js").then((b) => b.j).then((b) => b.default);
    let a = new p();
    h.forEach((b, P) => {
      a.file("sheet" + (P + 1) + r, b);
    });
    const m = await a.generateAsync({ type: "blob" }).then(function(b) {
      return b;
    });
    return y(
      m,
      (e.fileName ? e.fileName : "tableRecord") + ".zip"
    ), "done";
  }
  h.forEach((p) => {
    var a = new Blob([p], {
      type: "text/" + (l ? "plain" : "csv") + ";charset=utf-8"
    });
    y(
      a,
      (e.fileName ? e.fileName : "tableRecord") + r
    );
  });
}
const Dt = {
  firstHeader: !0,
  returnTableNodes: !1,
  emptyNodeDefaultString: " ",
  removeContainerChildNode: !0,
  containerNodeStyle: {
    display: "flex",
    flexDirection: "column"
  },
  tableStyle: {
    borderSpacing: "0",
    border: "1px solid #EEEEEEF1"
  },
  cellStyle: {
    width: "68px",
    height: "24px",
    border: "1px solid #EEEEEEF1"
  },
  buttonContainerStyle: {
    display: "flex"
  },
  buttonStyle: {
    height: "40px",
    width: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0",
    background: "transparent",
    cursor: "pointer"
  },
  activeButtonStyle: {
    background: "#EEEDEB"
  }
};
async function po(e, t, l, o, r = !0, n = !1, h = " ", y = !0, p = {
  display: "flex",
  flexDirection: "column"
}, a = {
  borderSpacing: "0",
  border: "1px solid #EEEEEEF1"
}, m = {
  width: "68px",
  height: "24px",
  border: "1px solid #EEEEEEF1"
}, b = {
  display: "flex"
}, P = {
  height: "40px",
  width: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "0",
  background: "transparent",
  cursor: "pointer"
}, T = {
  background: "#EEEDEB"
}) {
  let v = await import("./read-utils-nvy4HsWt.js").then(
    async (k) => await k.extractExcelData(e, !1, o)
  ), c = null;
  if (t ? c = document.querySelector(t) : l && (c = l), c == null && !n)
    throw "Container Node not found";
  const L = Object.keys(p), M = Object.keys(a), V = Object.keys(m), B = Object.keys(b), te = Object.keys(P), j = Object.keys(T);
  let $ = document.createElement("div");
  B.forEach((k) => {
    $.style[k] = b[k];
  }), n || (y && c != null && (c.innerText = ""), L.forEach((k) => {
    c.style[k] = p[k];
  }), c.appendChild($));
  let Z = [], q = !1, H = 0;
  do {
    H++;
    const k = v.sheetName.next();
    if (!k.value)
      break;
    const K = document.createElement("div");
    if (K.style.display = "none", !n) {
      const J = document.createElement("button");
      te.forEach((ye) => {
        J.style[ye] = P[ye];
      }), J.addEventListener("click", (ye) => {
        const ve = J.getAttribute("data-sheet"), we = c.querySelector(
          'div[data-sheet="' + ve + '"]'
        );
        if (we) {
          j.forEach((ie) => {
            J.style[ie] = T[ie];
          });
          const Se = c.querySelector(
            "[data-sheet-button-activate]"
          );
          let ae = c.querySelector("[data-sheet-activate]");
          we.setAttribute("data-sheet-activate", "1"), we.style.display = "flex", J.setAttribute("data-sheet-button-activate", "1"), Se && (te.forEach((ie) => {
            Se.style[ie] = P[ie];
          }), Se.removeAttribute("data-sheet-button-activate")), ae && (ae.style.display = "none", ae.removeAttribute("data-sheet-activate"));
        } else
          console.error("Sheet content not found!! id is " + ve);
      }), J.setAttribute("data-sheet", H + ""), K.setAttribute("data-sheet", H + ""), J.innerText = k.value[1] || k.value[0], $.appendChild(J), c.appendChild(K);
    }
    let z = r ? "th" : "td";
    const G = document.createElement("table");
    M.forEach((J) => {
      G.style[J] = a[J];
    });
    const Y = v.data[k.value[0]] || v.data[k.value[1]], Ce = v.maxLengthOfColumn[k.value[0]] || v.maxLengthOfColumn[k.value[1]];
    if (Array.isArray(Y)) {
      const J = Y.length;
      for (let ye = 0; ye < J; ye++) {
        const ve = Y[ye], we = document.createElement("tr"), Se = Array.isArray(ve);
        for (let ae = 0; ae <= Ce; ae++) {
          let ie = h;
          if (Se) {
            const de = ve[ae];
            typeof de == "string" && (ie = de);
          }
          const ge = document.createElement(z);
          V.forEach((de) => {
            ge.style[de] = m[de];
          }), ge.innerText = ie, we.appendChild(ge);
        }
        G.appendChild(we), z = "td";
      }
    }
    n ? Z.push(G) : (K.appendChild(G), c == null || c.appendChild(K)), q = k.done;
  } while (!q);
  if (n)
    return Z;
  {
    const k = c.querySelector(
      'div[data-sheet="1"]'
    );
    k && (k.style.display = "flex", k.setAttribute("data-sheet-activate", "1"));
    const K = c.querySelector(
      'button[data-sheet="1"]'
    );
    return K && (j.forEach((z) => {
      K.style[z] = T[z];
    }), K.setAttribute("data-sheet-button-activate", "1")), "Done";
  }
}
async function uo(e, t, l = !0, o = "property") {
  let r = await import("./read-utils-nvy4HsWt.js").then(
    async (y) => await y.extractExcelData(e, !1, t)
  ), n = {}, h = [];
  return Object.keys(r.sheetNameObject).forEach((y) => {
    const p = r.sheetNameObject[y], a = r.data[p] || r.data[y], m = r.maxLengthOfColumn[p] || r.maxLengthOfColumn[y];
    for (let T = 0; T <= m; T++)
      h[T] = o + (T + 1);
    let b = l, P = [];
    a.forEach((T) => {
      let v = {};
      T.forEach((c, L) => {
        typeof c == "string" && (b ? h[L] = c : v[h[L]] = c);
      }), b = !1, P.push(v);
    }), n = Object.assign(n, {
      [p]: P
    });
  }), n;
}
const yo = Bt, go = ro;
function xo(e, t, l = {}) {
  const o = Xt(
    e,
    t,
    l.keepStyle,
    l.rowHeightScaleFunction,
    l.colWidthScaleFunction
  );
  return ft(o);
}
function bo(e) {
  const t = lo(e);
  return ft(t);
}
function Co(e, t) {
  return ft(Wt(e, t));
}
function vo(e, t = !1, l) {
  return import("./read-utils-nvy4HsWt.js").then(
    (o) => o.extractExcelData(e, t, l)
  );
}
function wo(e, t = !1) {
  return qt(e, t, !1);
}
function To(e, t = !1) {
  return qt(e, t, !0);
}
function Eo(e, t, l, o = { ...Dt }) {
  return o = {
    ...Dt,
    ...o
  }, po(
    e,
    t,
    l,
    o.fetchFunc,
    o.firstHeader,
    o.returnTableNodes,
    o.emptyNodeDefaultString,
    o.removeContainerChildNode,
    o.containerNodeStyle,
    o.tableStyle,
    o.cellStyle,
    o.buttonContainerStyle,
    o.buttonStyle,
    o.activeButtonStyle
  );
}
export {
  yo as a,
  go as b,
  to as c,
  xo as d,
  vo as e,
  wo as f,
  je as g,
  To as h,
  Eo as i,
  ft as j,
  uo as k,
  bo as s,
  Co as t,
  ho as v
};
