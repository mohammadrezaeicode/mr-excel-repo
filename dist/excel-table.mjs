function _t(e) {
  return e.replace(/ /g, "");
}
function At(e) {
  if (e = e.replace(/^#/, ""), e.length == 3) {
    const t = e.charAt(0), n = e.charAt(1), l = e.charAt(2);
    return t + t + n + n + l + l;
  } else
    return e;
}
function Yt(e) {
  /^#?([a-f\d]{3})$/i.test(e) && (e = At(e));
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? [
    parseInt(t[1], 16),
    parseInt(t[2], 16),
    parseInt(t[3], 16)
  ] : [0, 0, 0];
}
function vt(e) {
  const t = Yt(e);
  return t == null ? void 0 : (0.299 * t[0] + 0.587 * t[1] + 0.114 * t[2]) / 255 > 0.5 ? "rgb(0,0,0)" : "rgb(255,255,255)";
}
function Tt(e) {
  /^#?([a-f\d]{3})$/i.test(e) && (e = At(e));
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? "rgb(" + (255 - parseInt(t[1], 16)) + "," + (255 - parseInt(t[2], 16)) + "," + (255 - parseInt(t[3], 16)) + ")" : "rgb(0,0,0)";
}
function Ze(e) {
  e = Number(e);
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}
function ie(e) {
  e = _t(e);
  let t = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), n = t.reduce((l, o) => l && !Number.isNaN(Number(o)), !0);
  return t.length == 4 && t[3] == "0" || t.length != 3 && t.length != 4 || !n ? null : (Ze(t[0]) + Ze(t[1]) + Ze(t[2])).toUpperCase();
}
function ce(e, t) {
  if (typeof e > "u" || e === null)
    return null;
  if (!t) {
    let n = _t(e);
    n.indexOf("var(") == 0 && n.lastIndexOf(")") == n.length - 1 && (n = n.substring(4, n.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      n
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const n = ie(e);
    e = n || "";
  }
  return e.replace(/^#/, "");
}
function Vt(e) {
  let t = "";
  return e.indexOf("_") > 0 ? e.replace(/[a-z]/g, "").length == e.length ? t = e.split(/_/).reduce((n, l) => n + l.charAt(0) + l.substring(1).toLowerCase() + " ", "").trim() : t = e.replace(/_/g, " ").trim() : (t = e.replace(/([A-Z])/g, " $1").trim(), t = t.charAt(0).toUpperCase() + t.substring(1).trim()), t;
}
function St(e, t) {
  let n = Object.keys(e).filter((i) => !t.includes(i)), l = [];
  return n.reduce((i, d) => (i.push({
    label: d,
    text: Vt(d)
  }), i), l);
}
const qt = async function(e, t, n, l = []) {
  const o = (await import("./colorHunt-11cd61a1.mjs")).colorHuntTheme;
  let i;
  if (typeof e == "object" && Array.isArray(e))
    if (e.length > 0)
      if (Array.isArray(e[0])) {
        let d = [];
        for (let m = 0; m < e.length; m++) {
          const y = e[m];
          if (y.length > 0) {
            const r = St(y[0], l);
            d.push({
              headers: r,
              data: y
            });
          }
        }
        i = {
          sheet: d
        };
      } else
        e.length > 0 ? i = {
          sheet: [
            {
              headers: St(e[0], l),
              data: e
            }
          ]
        } : i = {
          sheet: []
        };
    else
      i = {
        sheet: []
      };
  else
    i = e;
  if (t < o.length) {
    let d = "color" + (n && n.rowIndex ? n.rowIndex : 4).toString(), m = "color" + (n && n.headerIndex ? n.headerIndex : 1).toString(), y = o[t], r = n && n.headerBackgroundColor ? n.headerBackgroundColor : y[m], C = n && n.rowBackgroundColor ? n.rowBackgroundColor : y[d], u;
    n && n.headerColor ? u = n == null ? void 0 : n.headerColor : u = n && n.negativeColor ? Tt(r) : vt(r);
    let j;
    n && n.rowColor ? j = n == null ? void 0 : n.rowColor : j = n && n.negativeColor ? Tt(C) : vt(C), typeof i.styles > "u" && (i.styles = {}), i.styles.themeStyleHeader = {
      backgroundColor: r,
      color: u
    }, i.styles.themeStyleBody = {
      backgroundColor: C,
      color: j
    };
    const v = i.sheet.length;
    for (let b = 0; b < v; b++)
      i.sheet[b].styleCellCondition = function(f, D, H, q, K, B) {
        return K ? "themeStyleHeader" : "themeStyleBody";
      };
  }
  return typeof (n == null ? void 0 : n.fileName) == "string" && (i.fileName = n.fileName), i;
};
function zt(e, t, n, l, o, i, d, m) {
  let y = [], r = "both", C = [];
  !t || t === 0 ? (t = 1, r = "col") : C.push(t - 1), !e || e === 0 ? (e = 0, r = "row") : C.push(e - 1);
  let u = o || {};
  u.mergeType = m && m.mergeType ? [...m.mergeType, r] : [r], u.mergeValue = m && m.mergeValue ? [...m.mergeValue, C] : [C], u.mergeStart = m && m.mergeStart ? [...m.mergeStart, n] : [n];
  for (let j = 0; j < t; j++) {
    let v = e;
    for (let b = 0; b < l; b++)
      n <= b ? v >= 1 ? (u["c" + b] = i, i = "", d += "*", v--) : t >= 2 && n == b ? (u["c" + b] = i, i = "", d += "+") : d += "-" : j > 0 && (d += "-");
    y.push({
      ...u,
      mergeString: d
    }), u = {}, d = "";
  }
  return y;
}
function Ut(e, t, n, l, o) {
  var u;
  if (!e && !t)
    throw "Error: One of the function inputs is required.";
  let i;
  e ? i = (u = document.querySelector(e)) == null ? void 0 : u.querySelectorAll("tr") : i = t == null ? void 0 : t.querySelectorAll("tr");
  let d = [], m = [], y = {
    header: {},
    rows: []
  }, r = 40;
  if (i) {
    let j = !1, v = 0;
    i.forEach((b, f) => {
      var D = [].slice.call(b.children);
      const H = window.getComputedStyle(b, null);
      let q = ie(H.backgroundColor);
      if (!j)
        v = D.length, j = !0, typeof l == "function" ? r = l(
          Number(H.height.substring(0, H.height.length - 2)),
          f,
          !0
        ) : r = Number(
          H.height.substring(0, H.height.length - 2)
        ), D.forEach((K, B) => {
          let O = window.getComputedStyle(K, null), Y = null;
          if (O.borderBottomWidth !== "0px") {
            const J = ie(O.borderBottomColor);
            J && (Y || (Y = {}), Y.bottom = {
              style: "thin",
              color: J
            });
          }
          if (O.borderTopWidth !== "0px") {
            const J = ie(O.borderTopColor);
            J && (Y || (Y = {}), Y.top = {
              style: "thin",
              color: J
            });
          }
          if (O.borderLeftWidth !== "0px") {
            const J = ie(O.borderLeftColor);
            J && (Y || (Y = {}), Y.left = {
              style: "thin",
              color: J
            });
          }
          if (O.borderRightWidth !== "0px") {
            const J = ie(O.borderRightColor);
            J && (Y || (Y = {}), Y.right = {
              style: "thin",
              color: J
            });
          }
          let U = ie(O.backgroundColor);
          !U && q && (U = q);
          const M = parseInt(
            O.fontSize.substring(0, O.fontSize.indexOf("p"))
          );
          let N = {
            ...U ? { backgroundColor: U } : {},
            bold: parseInt(O.fontWeight) > 500,
            ...isNaN(M) ? {} : { size: M },
            ...Y ? { border: Y } : {},
            alignment: {
              ...typeof O.textAlign == "string" && O.textAlign.length > 0 ? { horizontal: O.textAlign } : {},
              vertical: "center",
              ...O.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          y.header[f + "-" + B] = N;
          let $;
          typeof o == "function" ? $ = o(
            Number(O.width.substring(0, O.width.length - 2)),
            B
          ) : $ = Number(O.width.substring(0, O.width.length - 2)) * 0.15;
          const V = K.getAttribute("colspan"), re = K.getAttribute("rowspan");
          d.push({
            label: "c" + B,
            ...V ? { colspan: V } : {},
            ...re ? { rowspan: re } : {},
            text: K.textContent,
            ...isNaN($) || $ <= 0 ? {} : { size: $ }
          });
        });
      else {
        let K = {}, B = "", O = !1;
        m.length >= f && (K = m[f - 1], B = "mergeString" in K ? K.mergeString : "", O = !0);
        let Y = 0;
        D.forEach((U, M) => {
          if ("c" + (M + Y) in K)
            for (let z = 0; z <= v + 1 && "c" + (M + z) in K; z++)
              Y++;
          M += Y;
          let N = window.getComputedStyle(U, null);
          if (U.getAttribute("colspan") || U.getAttribute("rowspan")) {
            let z = zt(
              U.getAttribute("colspan") * 1,
              U.getAttribute("rowspan") * 1,
              M,
              v,
              K,
              U.textContent,
              B,
              K
            );
            m.length < f ? m.push(...z) : z.forEach((ve, Te) => {
              m.length < f + Te ? m.push(...z) : m[f + Te] = {
                ...m[f + Te],
                ...ve
              };
            }), K = z[0], B = z[0].mergeString, O = !0;
          } else
            O || (B += "-");
          let $ = null;
          if (N.borderBottomWidth !== "0px") {
            const z = ie(N.borderBottomColor);
            z && ($ || ($ = {}), $.bottom = {
              style: "thin",
              color: z
            });
          }
          if (N.borderTopWidth !== "0px") {
            const z = ie(N.borderTopColor);
            z && ($ || ($ = {}), $.top = {
              style: "thin",
              color: z
            });
          }
          if (N.borderLeftWidth !== "0px") {
            const z = ie(N.borderLeftColor);
            z && ($ || ($ = {}), $.left = {
              style: "thin",
              color: z
            });
          }
          if (N.borderRightWidth !== "0px") {
            const z = ie(N.borderRightColor);
            z && ($ || ($ = {}), $.right = {
              style: "thin",
              color: z
            });
          }
          let V = ie(N.backgroundColor);
          !V && q && (V = q);
          const re = parseInt(
            N.fontSize.substring(0, N.fontSize.indexOf("p"))
          );
          let J = {
            ...V ? { backgroundColor: V } : {},
            bold: parseInt(N.fontWeight) > 500,
            ...isNaN(re) ? {} : { size: re },
            ...$ ? { border: $ } : {},
            // backgroundColor: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              ...typeof N.textAlign == "string" && N.textAlign.length > 0 ? { horizontal: N.textAlign } : {},
              vertical: "center",
              ...N.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          y.header[f + "-" + M] = J, K["c" + M] = U.textContent;
        }), typeof l == "function" ? K.height = l(
          Number(H.height.substring(0, H.height.length - 2)),
          f,
          !1
        ) : K.height = H.height.substring(0, H.height.length - 2), typeof K.height == "string" && K.height.length == 0 && delete K.height, m.length < f ? m.push(K) : m[f - 1] = K;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: y.header,
    sheet: [
      {
        ...r ? { headerHeight: r } : {},
        styleCellCondition: function(j, v, b, f, D, H) {
          return n ? H.includes(b - 1 + "-" + f) ? b - 1 + "-" + f : "" : null;
        },
        data: m,
        headers: d
      }
    ]
  };
}
function Ne(e, t, n = "", l = [], o = -1) {
  const i = e.length;
  for (let d = 0; d < i; d++)
    l.push(n + e[d]);
  return t < l.length ? l : Ne(
    e,
    t,
    l[o + 1],
    l,
    o + 1
  );
}
function Wt(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + '<fonts count="' + e.font.count + '"><font><sz val="11" /><color theme="1" /><name val="Calibri" /><family val="2" /><scheme val="minor" /></font><font><sz val="11" /><color rgb="FFFF0000" /><name val="Calibri" /><family val="2" /><scheme val="minor" /></font>' + e.font.value + '</fonts><fills count="' + e.fill.count + '"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="lightGray" /></fill>' + e.fill.value + '</fills><borders count="' + e.border.count + '"><border />' + e.border.value + '</borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /></cellStyleXfs><cellXfs count="' + e.cell.count + '"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment readingOrder="0" /></xf>' + e.cell.value + '</cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0" /></cellStyles> ' + (t ? '<dxfs count="' + e.conditionalFormatting.count + '" >' + e.conditionalFormatting.value + "</dxfs>" : '<dxfs count="0" />') + "</styleSheet>";
}
function Gt(e, t, n, l, o, i, d) {
  let m = {};
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /><Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + n.reduce((y, r) => (r = r.toLowerCase(), m[r] ? y : r == "svg" ? (m.png = !0, m.svg = !0, y + '<Default Extension="png" ContentType="image/png"/><Default Extension="svg" ContentType="image/svg+xml"/>') : r == "jpeg" || r == "jpg" ? (m.jpeg = !0, m.jpg = !0, y + '<Default Extension="' + r + '" ContentType="image/jpeg"/>') : (m.curr = !0, y + '<Default Extension="' + r + '" ContentType="image/' + r + '"/>')), "") + t.reduce((y, r) => y + '<Override PartName="/xl/comments' + r + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />', "") + e + (d.length > 0 ? d.reduce((y, r) => y + '<Override PartName="/xl/tables/' + r + '" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml"/>', "") : "") + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" />' + (i ? '<Override PartName="/xl/calcChain.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml"/>' : "") + '<Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' + l.reduce((y, r) => y + '<Override PartName="/xl/drawings/' + r + '" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml" />', "") + (o.length > 0 ? o.reduce((y, r, C) => y + '<Override PartName="/xl/ctrlProps/ctrlProp' + (C + 1) + '.xml" ContentType="application/vnd.ms-excel.controlproperties+xml"/>', "") : "") + '<Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function Zt(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>` + e + '</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="' + e + '" baseType="lpstr"> ' + t + "</vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>";
}
function Xe(e, t, n, l) {
  e = e.toUpperCase();
  let o = "";
  if (t.formula) {
    let r = t, C = r.formula.indexOf("=") == 0 ? r.formula.substring(1) : r.formula, u = e.indexOf(":") > 0, j = r.referenceCells ? r.referenceCells : e, v = u ? e.substring(0, e.indexOf(":")) : e, b = v.replace(/[0-9]/g, ""), f = parseInt(e.substr(b.length)), D = r.returnType ? r.returnType : r.isArray || u ? ' t="str"' : "", H = "styleId" in r && l && typeof r.styleId == "string" && l[r.styleId] ? ' s="' + l[r.styleId].index + '"' : "", q = r.isArray || u ? ' t="array" ref="' + j + '"' : "";
    return o = '<c r="' + v + '"' + H + D + "><f" + q + ">" + C + "</f></c>", {
      column: b,
      row: f,
      needCalcChain: !1,
      isCustom: !0,
      cell: o
    };
  }
  let i = e.replace(/[0-9]/g, ""), d = parseInt(e.substr(i.length)), m = !1, y = "";
  if (t.noArgType) {
    const r = t;
    if (r.noArgType == "NOW" || r.noArgType == "TODAY") {
      const C = "styleId" in r && l && typeof r.styleId == "string" && l[r.styleId] ? ' s="' + l[r.styleId].index + '"' : "";
      o = '<c r="' + e + '"' + C + "><f>" + r.noArgType + "()</f></c>";
    } else {
      let C = "NOW()";
      const u = "styleId" in r && l && typeof r.styleId == "string" && l[r.styleId] ? ' s="' + l[r.styleId].index + '"' : "";
      o = '<c r="' + e + '"' + u + "><f>" + r.noArgType.substring(4) + "(" + C + ")</f></c>";
    }
    y = '<c r="' + e + '" i="' + n + '"/>', m = !0;
  } else if (t.referenceCell) {
    const r = t;
    let C = "";
    typeof r.value < "u" && (C = "," + r.value);
    let u = "";
    r.type == "COT" && (u = "_xlfn.");
    const j = "styleId" in r && l && typeof r.styleId == "string" && l[r.styleId] ? ' s="' + l[r.styleId].index + '"' : "";
    o = '<c r="' + e + '"' + j + "><f>" + u + r.type + "(" + r.referenceCell.toUpperCase() + C + ")</f></c>", y = '<c r="' + e + '" i="' + n + '"/>', m = !0;
  } else {
    const r = t;
    o = '<c r="' + e + '"' + (l && typeof r.styleId == "string" && l[r.styleId] ? ' s="' + l[r.styleId].index + '"' : "") + "><f>" + r.type + "(" + r.start.toUpperCase() + ":" + r.end.toUpperCase() + ")</f></c>";
  }
  return {
    column: i,
    row: d,
    cell: o,
    needCalcChain: m,
    chainCell: y
  };
}
function Je(e, t, n) {
  let l = !1, o, i;
  if (typeof e == "object") {
    if ("author" in e && e.author && (l = !0, i = e.author), "styleId" in e && typeof e.styleId == "string") {
      let d = t[e.styleId];
      typeof d == "string" && (n = d);
    }
    o = "comment" in e && typeof e.comment == "string" ? kt(e.comment) : [""];
  } else
    o = e ? kt(e) : [""];
  return l && o.unshift(i + ":"), {
    hasAuthor: l,
    author: i,
    commentStyle: n,
    commentStr: o
  };
}
function kt(e) {
  var t = e.split(/\r?\n|\r|\n/g);
  return t;
}
function Qe(e, t, n, l) {
  let o = '<comment ref="' + e + '" authorId="' + Math.max(0, l - 1) + '" shapeId="0"><text>', i = "";
  return t.forEach((d, m) => {
    let y = "";
    if (d.length == 0) {
      i += `
`;
      return;
    }
    m > 0 && (y = ' xml:space="preserve"', i += `
`), o += "<r>" + n + "<t" + y + ">" + i + d + "</t></r>", i = "";
  }), i.length > 0 && o.indexOf("<r>") > 0 && (o = o.substring(0, o.length - 8) + i + "</t></r>"), o += "</text></comment>", o;
}
const Xt = '<rPr><b /><sz val="9" /><color rgb="000000" /><rFont val="Tahoma" /></rPr>', Ae = function(e) {
  return e.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
};
function He(e, t) {
  let n = {
    result: [],
    str: t
  }, l = e.reduce((o, i) => {
    let d = o.str.indexOf(i);
    return o.result.push(o.str.substring(0, d)), o.str = o.str.substring(d + i.length), o;
  }, n);
  return l.result.push(l.str), l.result;
}
function Et(e, t, n, l, o, i, d, m, y) {
  if (l) {
    let r = [], C = [], u = [];
    const j = i.length;
    o.forEach((v, b) => {
      let f;
      try {
        f = v.match(e);
      } catch (D) {
        if (typeof e == "string")
          f = v.match("\\" + e);
        else
          throw D;
      }
      if (f)
        if (m) {
          let D;
          y ? D = He(f, v) : D = v.split(e), r.push(...D), C.push(...f), u.push(
            ...f.reduce((H, q) => [...H, t], [])
          );
        } else {
          let D;
          y ? D = He(f, v) : D = v.split(e).reduce((H, q, K) => K >= 2 ? (H[1] += e + q, H) : [...H, q], []), r.push(...D), u.push(t), C.push(e.toString());
        }
      else
        r.push(v);
      j > b && (C.push(i[b]), u.push(d[b]));
    }), o = r, i = C, d = u;
  } else {
    let r;
    try {
      r = n.match(e);
    } catch (C) {
      if (typeof e == "string")
        r = n.match("\\" + e);
      else
        throw C;
    }
    r ? m ? (i.push(...r), d.push(
      ...r.reduce((C, u) => [...C, t], [])
    ), y ? o = He(r, n) : o = n.split(e)) : (i.push(e.toString()), d.push(t), y ? o = He(r, n) : o = n.split(e).reduce((C, u, j) => j >= 2 ? (C[1] += e + u, C) : [...C, u], [])) : o.push(n), l = !0;
  }
  return {
    v: e,
    text: n,
    splittedText: l,
    splitValue: o,
    matchValue: i,
    styleMatchValue: d
  };
}
function et(e, t, n, l, o) {
  if (typeof e == "object") {
    let i = "", d = [], m = [], y = [], r = !1;
    if (Object.keys(e).forEach((v) => {
      const b = e[v];
      if (v !== "reg") {
        let f = Et(
          v,
          typeof b == "string" ? b : "",
          t,
          r,
          y,
          d,
          m,
          !1,
          o
        );
        r = f.splittedText, y = f.splitValue, d = f.matchValue, m = f.styleMatchValue;
      }
    }), "reg" in e && Array.isArray(e.reg)) {
      const v = e.reg.length;
      for (let b = 0; b < v; b++) {
        const f = e.reg[b];
        if ("reg" in f && "styleId" in f) {
          typeof f.reg == "string" && (f.reg = new RegExp(f.reg, "g"));
          let D = Et(
            f.reg,
            f.styleId,
            t,
            r,
            y,
            d,
            m,
            !0,
            o
          );
          r = D.splittedText, y = D.splitValue, d = D.matchValue, m = D.styleMatchValue;
        }
      }
    }
    const u = y.length - 1, j = l in n ? n[l] : "";
    for (let v = 0; v < u; v++) {
      const b = y[v], f = d[v], D = m[v];
      b.length > 0 && (i += "<r>" + j + '<t xml:space="preserve">' + b + "</t></r>"), f.length > 0 && (i += "<r>" + (n[D] ? n[D] : j) + '<t xml:space="preserve">' + f + "</t></r>");
    }
    return y[u].length > 0 ? i = "<si>" + i + "<r>" + j + "<t>" + Ae(y[u]) + "</t></r></si>" : i = "<si>" + i + "</si>", i;
  } else
    return "<si><t>" + Ae(t) + "</t></si>";
}
const Pt = {
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
}, Rt = [
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
], Ot = (e, t, n = !1, l) => {
  let o, i = !1;
  return typeof l == "function" ? (o = l, i = !0) : o = fetch, o(e).then((d) => i ? d : n ? d.arrayBuffer() : d.blob()).then((d) => i || n ? d : new File([d], t)).catch((d) => {
    throw d;
  });
};
function we(e, t) {
  e = e.toUpperCase();
  let n = e.replace(/[0-9]/g, "");
  if (n.length == 0)
    throw "Invalid Column";
  let l = parseInt(e.substring(n.length));
  if (isNaN(l))
    throw "Invalid Row";
  l = Math.max(0, l - 1);
  let o = t.indexOf(n);
  return o < 0 && (t = Ne(t, Math.pow(10, n.length + 1), ""), o = t.indexOf(n), o < 0 && (o = 0)), {
    col: o,
    row: l
  };
}
let Jt = {}, ot = new Proxy(Jt, {
  get(e, t) {
    return t in e ? e[t] : (this.set(e, t, {}, !0), {});
  },
  set(e, t, n, l) {
    return e[t] = n, !0;
  }
});
function jt(e, t, n) {
  ot[e], ot[e][t] = n;
}
function Lt(e, t, n) {
  Object.keys(n).forEach((o) => {
    const i = n[o];
    typeof i == "object" ? o != "data" && o != "headers" && Lt(e, t.length > 0 ? t + "." + o : o, i) : jt(e, t.length > 0 ? t + "." + o : o, i);
  });
}
function Qt(e, t) {
  Lt(e, "", t);
}
function eo(e, t) {
  let n = t, l = ot[e];
  return Object.keys(l).forEach((i) => {
    const d = i.split(".");
    let m = n, y = l[i];
    for (let r = 0; r < d.length; r++) {
      const C = d[r];
      m[C] ? m = m[C] : d.length - 1 == r ? m[C] = y : (m[C] = {}, m = m[C]);
    }
  }), n;
}
async function to(e, t = "") {
  if (typeof t == "string" && t.length > 0 && (e = eo(t, e)), typeof e.creator == "string" && e.creator.trim().length <= 0)
    throw 'length of "creator" most be bigger then 0';
  if (typeof e.created == "string" && new Date(e.created).toString() == "Invalid Date")
    throw '"created" is not valid date';
  if (typeof e.modified == "string" && new Date(e.modified).toString() == "Invalid Date")
    throw '"modified" is not valid date';
  const n = e.backend, l = {
    lt: "lessThan",
    gt: "greaterThan",
    between: "between",
    ct: "containsText",
    eq: "equal"
  };
  let o = [...Rt];
  e.numberOfColumn && e.numberOfColumn > 25 && (o = Ne(o, e.numberOfColumn));
  const d = (await import("./jszip.min-e651e8fb.mjs").then((k) => k.j)).default;
  let m = new d();
  const y = e.sheet.length;
  let r = m.folder("xl"), C = null, u = null, j = null;
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const v = Object.keys(e.styles), b = Xt, f = e.activateConditionalFormatting ? e.activateConditionalFormatting : !1, D = {}, H = {};
  let q = v.reduce(
    (k, a, T) => {
      const x = e.styles[a];
      if (x.type && (x.type == "headerFooter" || x.type == "HF")) {
        let R = "", le = "-", fe = "Regular";
        if (x.fontFamily && (le = x.fontFamily), x.bold && (fe = "Bold"), x.italic && (fe == "Regular" && (fe = ""), fe += "Italic"), (le != "-" || fe != "Regular") && (R = '&amp;"' + le + "," + fe + '"'), x.size && (R += "&amp;" + x.size), x.doubleUnderline ? R += "&amp;E" : x.underline && (R += "&amp;U"), x.color) {
          const he = ce(x.color, n);
          typeof he == "string" && he.length > 0 && (R += "&amp;K" + he.toUpperCase());
        }
        return D[a] = R, k;
      }
      if (f && typeof x.type == "string" && x.type && (x.type == "conditionalFormatting" || x.type.toUpperCase() == "CF")) {
        H[a] = k.conditionalFormatting.count;
        let R = ce(x.color, n), le = ce(x.backgroundColor, n);
        return k.conditionalFormatting.value += '<dxf><font><color rgb="' + R + '"/></font><fill> <patternFill> <bgColor rgb="' + le + '"/></patternFill></fill></dxf>', k.conditionalFormatting.count++, k;
      }
      const G = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (x.backgroundColor) {
        let R = ce(x.backgroundColor, n);
        G.fillIndex = k.fill.count, k.fill.count++, k.fill.value = k.fill.value + '<fill><patternFill patternType="solid">' + (R ? '<fgColor rgb="' + R.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (x.color || x.fontFamily || x.size || x.bold || x.italic || x.underline || x.doubleUnderline) {
        const R = ce(x.color, n);
        G.fontIndex = k.font.count, k.font.count++, k.font.value = k.font.value + "<font>" + (x.bold ? "<b/>" : "") + (x.italic ? "<i />" : "") + (x.underline || x.doubleUnderline ? "<u " + (x.doubleUnderline ? ' val="double" ' : "") + "/>" : "") + (x.size ? '<sz val="' + x.size + '" />' : "") + (R ? '<color rgb="' + R.replace("#", "") + '" />' : "") + (x.fontFamily ? '<name val="' + x.fontFamily + '" />' : "") + "</font>", k.commentSyntax.value[a] = "<rPr>" + (x.bold ? "<b/>" : "") + (x.italic ? "<i/>" : "") + (x.underline || x.doubleUnderline ? "<u " + (x.doubleUnderline ? 'val="double" ' : "") + "/>" : "") + '<sz val="' + (x.size ? x.size : "9") + '" />' + (R ? '<color rgb="' + R.replace("#", "") + '" />' : "") + '<rFont val="' + (x.fontFamily ? x.fontFamily : "Tahoma") + '" /></rPr>';
      }
      let ne = "/>";
      x.alignment && (x.alignment.rtl && (x.alignment.readingOrder = 2), delete x.alignment.rtl, x.alignment.ltr && (x.alignment.readingOrder = 1), delete x.alignment.ltr, ne = ' applyAlignment="1"><alignment ' + Object.keys(x.alignment).reduce((R, le) => R + " " + le + '="' + x.alignment[le] + '" ', "") + " /></xf>");
      const w = x.border;
      let S = "";
      if (typeof w == "object" && ((w.left || w.full) && (S += '<left style="' + (w.left || w.full).style + '"><color rgb="' + ce(
        (w.left || w.full).color,
        n
      ).replace("#", "") + '" /></left>'), (w.right || w.full) && (S += '<right style="' + (w.right || w.full).style + '"><color rgb="' + ce(
        (w.right || w.full).color,
        n
      ).replace("#", "") + '" /></right>'), (w.top || w.full) && (S += '<top style="' + (w.top || w.full).style + '"><color rgb="' + ce(
        (w.top || w.full).color,
        n
      ).replace("#", "") + '" /></top>'), (w.bottom || w.full) && (S += '<bottom style="' + (w.bottom || w.full).style + '"><color rgb="' + ce(
        (w.bottom || w.full).color,
        n
      ).replace("#", "") + '" /></bottom>'), G.borderIndex = k.border.count, k.border.count++, k.border.value += "<border>" + S + "<diagonal /></border>"), x.format) {
        const R = Pt[x.format];
        R && (G.formatIndex = R.key, "value" in R && (k.format.count++, k.format.value += R.value));
      }
      return k.cell.value = k.cell.value + '<xf numFmtId="' + G.formatIndex + '" fontId="' + G.fontIndex + '" fillId="' + G.fillIndex + '" borderId="' + G.borderIndex + '" xfId="0"' + (G.borderIndex > 0 ? ' applyBorder="1" ' : "") + (G.fillIndex > 0 ? ' applyFill="1" ' : "") + (G.fontIndex >= 0 ? ' applyFont="1" ' : "") + (G.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + ne, e.styles[a].index = k.cell.count, k.cell.count++, k;
    },
    {
      conditionalFormatting: {
        count: f ? 1 : 0,
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
  r == null || r.file("styles.xml", Wt(q, f));
  let K = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />', B = "", O = 0, Y = "", U = "", M = {};
  const N = {};
  let $ = "", V = 4, re = !1, J = -1, z = [], ve = 1;
  const Te = {
    checkbox: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<formControlPr xmlns="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" objectType="CheckBox" **value** **fmlaLink** lockText="1" noThreeD="1"/>`
  };
  let lt = 1024;
  const $t = {
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
  }, Bt = {
    checkbox: `<v:shapetype id="_x0000_t201" coordsize="21600,21600" o:spt="201"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path shadowok="f" o:extrusionok="f" strokeok="f" fillok="f" o:connecttype="rect"/>
  <o:lock v:ext="edit" shapetype="t"/>
 </v:shapetype>`
  };
  let ye = [], Pe = "", Se = !1, ke = null;
  for (let k = 0; k < y; k++) {
    const a = e.sheet[k], T = k + 1;
    let x = {}, G = {
      start: "",
      end: ""
    };
    const ne = a.asTable;
    let w = "", S = a.shiftTop && a.shiftTop >= 0 ? a.shiftTop + 1 : 1, R = "", le = "", fe = "", he = "", ue = "", Oe = "", Ke = !1, st = "", ct = "", ft = "", mt = "", pe = Object.assign([], a.merges), me = Object.assign({}, a.formula), Ye = Object.assign(
      [],
      a.conditionalFormatting
    ), Fe = !1, se = [], Re = "", je = [], pt = [], Ve = [], qe = [], ge = {}, Ie = "", _e = !1, ze = "";
    if (a.rtl && (ue += ' rightToLeft="1" '), a.pageBreak) {
      const E = a.pageBreak;
      if (E.row && Array.isArray(E.row)) {
        Oe = "pageBreakPreview";
        const s = E.row.length;
        ze += '<rowBreaks count="' + s + '" manualBreakCount="' + s + '">' + E.row.reduce(
          (g, p) => g + '<brk id="' + p + '" max="16383" man="1"/>',
          ""
        ) + "</rowBreaks>";
      }
      if (E.column && Array.isArray(E.column)) {
        Oe = "pageBreakPreview";
        const s = E.column.length;
        ze += '<colBreaks count="' + s + '" manualBreakCount="' + s + '">' + E.column.reduce(
          (g, p) => g + '<brk id="' + p + '" max="16383" man="1"/>',
          ""
        ) + "</colBreaks>";
      }
    }
    let dt = "";
    if (a.pageOption) {
      const E = a.pageOption;
      if (E.isPortrait && (_e = !0), E.margin) {
        const I = E.margin;
        let _ = {
          left: 0.7,
          right: 0.7,
          top: 0.75,
          bottom: 0.75,
          header: 0.3,
          footer: 0.3
        };
        Object.keys(_).forEach((h) => {
          typeof I[h] == "number" && (_[h] = I[h]);
        }), dt = '<pageMargins left="' + _.left + '" right="' + _.right + '" top="' + _.top + '" bottom="' + _.bottom + '" header="' + _.header + '" footer="' + _.footer + '"/>';
      }
      let s = "", g = "", p = "", c = "";
      if (["header", "footer"].forEach((I) => {
        const _ = I.charAt(0).toUpperCase() + I.substring(1);
        if (E[I]) {
          const h = E[I];
          typeof h == "object" && Object.keys(h).forEach((F) => {
            s.indexOf(F) < 0 && (s += F);
            const oe = h[F];
            let W = "";
            if (Object.keys(oe).reduce((L, P) => (P == "l" ? L.splice(0, 0, P) : P == "c" ? L.splice(1, 0, P) : P == "r" && L.splice(2, 0, P), L), []).forEach((L) => {
              const P = oe[L];
              W += "&amp;" + L.toUpperCase(), P.styleId && D[P.styleId] && (W += D[P.styleId]), P.text && (W += P.text);
            }), W = "<" + F + _ + ">" + W + "</" + F + _ + ">", F == "odd")
              g += W;
            else if (F == "even")
              p += W;
            else if (F == "first")
              c += W;
            else
              throw "type error";
          });
        }
      }), Ie = g + p + c, Ie.length > 0) {
        _e = !0;
        const I = s.length == 7 || s.length == 12 ? ' differentOddEven="1"' : "", _ = s.indexOf("first") >= 0 ? ' differentFirst="1"' : "";
        Ie = "<headerFooter" + I + _ + ">" + Ie + "</headerFooter>";
      }
    }
    if (a.viewOption) {
      let E = "";
      const s = a.viewOption;
      s.type && (Oe = s.type), s.hideRuler && (ue += ' showRuler="0" '), s.hideGrid && (ue += ' showGridLines="0" '), s.hideHeadlines && (ue += ' showRowColHeaders="0" ');
      let g = s.splitOption;
      if (typeof g > "u" && (_e = !1, typeof s.frozenOption == "object")) {
        const p = s.frozenOption;
        if (E = ' state="frozen" ', p.type == "R" || p.type == "ROW") {
          let c;
          typeof p.index == "object" ? c = p.index.r : c = p.index, g = {
            startAt: {
              b: "A" + (c + 1)
            },
            type: "H",
            split: c
          };
        } else if (p.type == "C" || p.type == "COLUMN") {
          let c;
          typeof p.index == "object" ? c = p.index.c : c = p.index, c > o.length - 1 && (o = Ne(o, c)), g = {
            type: "V",
            startAt: {
              r: o[c] + 1
            },
            split: c
          };
        } else if (p.type == "B" || p.type == "BOTH") {
          let c = "", A;
          typeof p.index == "number" ? (A = p.index, c = o[p.index] + (p.index + 1)) : (A = {
            y: p.index.r,
            x: p.index.c
          }, c = o[p.index.c] + (p.index.r + 1)), g = {
            startAt: {
              two: c
            },
            type: "B",
            split: A
          };
        }
      }
      if (g)
        if (g.type == "H" || g.type == "HORIZONTAL") {
          let p;
          g.startAt && (p = g.startAt.b, g.startAt.t && (ue += ' topLeftCell="' + g.startAt.t + '"')), p || (p = "A1"), he = '<pane ySplit="' + (typeof g.split == "object" && g.split.y || g.split) + '" topLeftCell="' + p + '" activePane="bottomLeft"' + E + "/>";
        } else if (g.type == "V" || g.type == "VERTICAL") {
          let p;
          g.startAt && (p = g.startAt.r, g.startAt.l && (ue += ' topLeftCell="' + g.startAt.l + '"')), p || (p = "A1"), he = '<pane xSplit="' + (typeof g.split == "object" && g.split.x || g.split) + '" topLeftCell="' + p + '" activePane="topLeft"' + E + "/>";
        } else {
          let p;
          g.startAt && (p = g.startAt.two, g.startAt.one && (ue += ' topLeftCell="' + g.startAt.one + '"')), p || (p = "A1"), he = '<pane xSplit="' + (typeof g.split == "object" && g.split.x || g.split) + '" ySplit="' + (typeof g.split == "object" && g.split.y || g.split) + '" topLeftCell="' + p + '" activePane="bottomLeft"' + E + "/>";
        }
    }
    if (_e && (Oe = "pageLayout"), a.checkbox) {
      Ke = !0;
      const E = Te.checkbox;
      a.checkbox.forEach((s, g) => {
        let p = E;
        if (s.link) {
          let F = we(s.link, o);
          p = p.replace(
            "**fmlaLink**",
            'fmlaLink="$' + o[F.col] + "$" + (F.row + 1) + '"'
          );
        } else
          p = p.replace("**fmlaLink**", "");
        s.mixed ? p = p.replace("**value**", 'checked="Mixed"') : s.checked ? p = p.replace("**value**", 'checked="Checked"') : p = p.replace("**value**", ""), s.threeD && p.replace('noThreeD="1"', ""), ye.push(p), lt++;
        let c = k + "" + lt++;
        const A = "_x0000_s" + c;
        ct += $t.checkbox.replace("***id***", A).replace("***text***", s.text);
        let I = s.startStr, _ = s.endStr, h = {
          start: {
            col: 0,
            row: 0
          },
          end: {
            col: 1,
            row: 1
          }
        };
        if (s.col && s.row && (h = {
          start: {
            col: s.col,
            row: s.row - 1
          },
          end: {
            col: s.col,
            row: s.row
          }
        }), typeof I == "string" && I.length >= 2) {
          let F = we(I, o);
          h.start = {
            ...F
          }, h.end = {
            col: F.col + 1,
            row: F.row + 1
          };
        }
        if (typeof _ == "string" && _.length >= 2) {
          let F = we(_, o);
          F.row += 1, F.col += 1, h.end = {
            ...F
          };
        }
        mt += '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice Requires="x14"><control shapeId="' + c + '" r:id="rId' + (7 + g) + '" name="' + s.text + '"><controlPr defaultSize="0" autoFill="0" autoLine="0" autoPict="0"><anchor moveWithCells="1"><from><xdr:col>' + h.start.col + "</xdr:col><xdr:colOff>19050</xdr:colOff><xdr:row>" + h.start.row + "</xdr:row><xdr:rowOff>19050</xdr:rowOff></from><to><xdr:col>" + h.end.col + "</xdr:col><xdr:colOff>819150</xdr:colOff><xdr:row>" + h.end.row + "</xdr:row><xdr:rowOff>0</xdr:rowOff></to></anchor></controlPr></control></mc:Choice></mc:AlternateContent>", ft += '<Relationship Id="rId' + (7 + g) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp" Target="../ctrlProps/ctrlProp' + ye.length + '.xml" />', st += '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" Requires="a14"><xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>' + h.start.col + "</xdr:col><xdr:colOff>19050</xdr:colOff><xdr:row>" + h.start.row + "</xdr:row><xdr:rowOff>19050</xdr:rowOff></xdr:from><xdr:to><xdr:col>" + h.end.col + "</xdr:col><xdr:colOff>819150</xdr:colOff><xdr:row>" + h.end.row + '</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:to><xdr:sp macro="" textlink=""><xdr:nvSpPr><xdr:cNvPr id="' + c + '" name="' + s.text + '" hidden="1"><a:extLst><a:ext uri=""><a14:compatExt spid="' + A + '"/></a:ext><a:ext uri=""><a16:creationId xmlns:a16="http://schemas.microsoft.com/office/drawing/2014/main" id=""/></a:ext></a:extLst></xdr:cNvPr><xdr:cNvSpPr/></xdr:nvSpPr><xdr:spPr bwMode="auto"><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></xdr:spPr><xdr:txBody><a:bodyPr vertOverflow="clip" wrap="square" lIns="27432" tIns="18288" rIns="0" bIns="18288" anchor="ctr" upright="1"/><a:lstStyle/><a:p><a:pPr algn="l" rtl="0"><a:defRPr sz="1000"/></a:pPr><a:r><a:rPr lang="en-US" sz="800" b="0" i="0" u="none" strike="noStrike" baseline="0"><a:solidFill><a:srgbClr val="000000"/></a:solidFill><a:latin typeface="Segoe UI"/><a:cs typeface="Segoe UI"/></a:rPr><a:t>' + s.text + "</a:t></a:r></a:p></xdr:txBody></xdr:sp><xdr:clientData/></xdr:twoCellAnchor></mc:Choice><mc:Fallback/></mc:AlternateContent>";
      });
    }
    let Ue;
    if (a.backgroundImage) {
      C == null && (C = r == null ? void 0 : r.folder("media"));
      const E = a.backgroundImage;
      Ue = new Promise(async (s, g) => {
        let p = E.lastIndexOf("."), c;
        p > 0 ? (c = E.substring(p + 1).toLowerCase(), c.length > 4 && (c.indexOf("gif") >= 0 ? c = "gif" : c.indexOf("jpg") >= 0 ? c = "jpg" : c.indexOf("jpeg") >= 0 ? c = "jpeg" : c = "png")) : c = "png";
        const A = ve++, I = "image" + A + "." + c, _ = await Ot(E, I, n, e.fetch);
        _ || g("image not load"), z.push(c), s({
          name: I,
          type: c,
          image: _,
          ref: A
        });
      });
    }
    let We;
    if (a.images && (C == null && (C = r == null ? void 0 : r.folder("media")), We = Promise.all([
      ...a.images.map(async (E, s) => {
        let g = E.url.lastIndexOf("."), p;
        g > 0 ? (p = E.url.substring(g + 1).toLowerCase(), p.length > 4 && (p.indexOf("gif") >= 0 ? p = "gif" : p.indexOf("jpg") >= 0 ? p = "jpg" : p.indexOf("jpeg") >= 0 ? p = "jpeg" : p = "png")) : p = "png", z.push(p);
        const c = "image" + ve++ + "." + p;
        return {
          type: p,
          image: await Ot(E.url, c, n, e.fetch),
          obj: E,
          i: s,
          name: c
        };
      })
    ])), Array.isArray(a.headers) && a.headers.length) {
      const E = a.headers.length;
      let s = "";
      if (a.title) {
        const c = a.title, A = c.comment, I = c.shiftTop && c.shiftTop >= 0 ? c.shiftTop : 0, _ = a.shiftLeft && a.shiftLeft >= 0 ? a.shiftLeft : 0, h = c.shiftLeft && c.shiftLeft + _ >= 0 ? c.shiftLeft + _ : _, F = c.consommeRow ? c.consommeRow - 1 : 1, oe = c.consommeCol ? c.consommeCol : E, W = F == 0 && typeof c.height == "number" ? ' ht="' + c.height + '" customHeight="1" ' : "", L = c.styleId ? c.styleId : "titleStyle", P = o[h] + "" + (S + I);
        if (pe.push(
          P + ":" + o[h + oe - 1] + (S + F + I)
        ), typeof A < "u") {
          Fe = !0;
          const X = Je(
            A,
            q.commentSyntax.value,
            b
          );
          let ae = se.length;
          if (X.hasAuthor && typeof X.author < "u") {
            let Z = X.author.toString();
            const Q = se.indexOf(Z);
            Q < 0 ? se.push(Z) : ae = Q;
          }
          je.push({
            row: S + I - 1,
            col: h
          }), Re += Qe(
            P,
            X.commentStr,
            X.commentStyle,
            ae
          );
        }
        typeof c.text == "string" && (x[S + I] = {
          startTag: '<row r="' + (S + I) + '" ' + W + ' spans="1:' + (h + oe - 1) + '">',
          details: '<c r="' + P + '" ' + (e.styles[L] ? ' s="' + e.styles[L].index + '" ' : "") + ' t="s"><v>' + O + "</v></c>",
          endTag: "</row>"
        }, s += '<row r="' + (S + I) + '" ' + W + ' spans="1:' + (h + oe - 1) + '">', s += '<c r="' + P + '" ' + (e.styles[L] ? ' s="' + e.styles[L].index + '" ' : "") + ' t="s"><v>' + O + "</v></c>", s += "</row>", O++, M[c.text] = c.text, c.multiStyleValue ? B += et(
          c.multiStyleValue,
          c.text,
          q.commentSyntax.value,
          L,
          a.useSplitBaseOnMatch
        ) : B += "<si><t>" + Ae(c.text) + "</t></si>"), S += I + F + 1;
      }
      let g = a.headerStyleKey ? a.headerStyleKey : null, p = 0;
      if (typeof a.shiftLeft == "number" && a.shiftLeft >= 0 && (p = a.shiftLeft), ne && (w += '<tableColumns count="' + a.headers.length + '">', ke || (ke = r == null ? void 0 : r.folder("tables"))), G.start = o[p] + "" + S, G.end = o[p + a.headers.length - 1] + "" + (S + a.data.length), a.headers.forEach((c, A) => {
        if (ne && (w += '<tableColumn id="' + (A + 1) + '" name="' + c.text + '"/>'), p && (A += p), c.formula && Ve.push(A), c.conditionalFormatting && qe.push(A), pt.push(c.label), a.mergeRowDataCondition && typeof a.mergeRowDataCondition == "function" && a.mergeRowDataCondition(
          c,
          null,
          A,
          !0
        ) === !0 && (ge[o[A]] = {
          inProgress: !0,
          start: S
        }), a.styleCellCondition && typeof a.styleCellCondition == "function" && (g = a.styleCellCondition(
          c,
          c,
          S,
          A,
          !0,
          v
        ) || g), c.size && c.size > 0 && (le += '<col min="' + (A + 1) + '" max="' + (A + 1) + '" width="' + c.size + '" customWidth="1" />'), a.withoutHeader)
          return;
        const I = o[A] + "" + S;
        if (typeof a.commentCondition == "function") {
          const h = a.commentCondition(
            c,
            null,
            c.label,
            S,
            A,
            !0
          );
          h && (c.comment = h);
        }
        if (c.comment) {
          Fe = !0;
          const h = Je(
            c.comment,
            q.commentSyntax.value,
            b
          );
          let F = se.length;
          if (h.hasAuthor && typeof h.author < "u") {
            let oe = h.author.toString();
            const W = se.indexOf(oe);
            W < 0 ? se.push(oe) : F = W;
          }
          je.push({
            row: S - 1,
            col: A
          }), Re += Qe(
            I,
            h.commentStr,
            h.commentStyle,
            F
          );
        }
        const _ = me && me[I];
        if (_) {
          const h = Xe(
            I,
            _,
            T,
            e.styles
          );
          h.needCalcChain && (Se = !0, Pe += h.chainCell), R += h.cell, delete me[I];
        } else {
          if (R += '<c r="' + o[A] + S + '" ' + (g && e.styles && e.styles[g] ? ' s="' + e.styles[g].index + '" ' : "") + ' t="s"><v>' + O + "</v></c>", typeof a.multiStyleCondition == "function") {
            const h = a.multiStyleCondition(
              c,
              null,
              c.label,
              S,
              A,
              !0
            );
            h && (c.multiStyleValue = h);
          }
          c.multiStyleValue ? B += et(
            c.multiStyleValue,
            c.text,
            q.commentSyntax.value,
            g || "",
            a.useSplitBaseOnMatch
          ) : B += "<si><t>" + Ae(c.text) + "</t></si>", M[c.text] = c.text, O++;
        }
      }), ne && (w += "</tableColumns>"), a.withoutHeader)
        R += s;
      else {
        const c = '<row r="' + S + '" spans="1:' + E + '" ' + (a.headerHeight ? 'ht="' + a.headerHeight + '" customHeight="1"' : "") + (a.headerRowOption ? Object.keys(a.headerRowOption).reduce((A, I) => A + " " + I + '="' + a.headerRowOption[I] + '" ', "  ") : "") + ">";
        x[S] = {
          startTag: c,
          endTag: "</row>",
          details: R
        }, R = s + c + R + "</row>", S++;
      }
      if (Array.isArray(a.data)) {
        const c = a.mapSheetDataOption && a.mapSheetDataOption.outlineLevel ? a.mapSheetDataOption.outlineLevel : "outlineLevel", A = a.mapSheetDataOption && a.mapSheetDataOption.hidden ? a.mapSheetDataOption.hidden : "hidden", I = a.mapSheetDataOption && a.mapSheetDataOption.height ? a.mapSheetDataOption.height : "height", _ = a.data.length;
        a.data.forEach((h, F) => {
          if (h.mergeType)
            for (let P = 0; P < h.mergeType.length; P++) {
              const X = h.mergeType[P], ae = h.mergeStart[P], Z = h.mergeValue[k];
              let Q = "";
              X == "both" ? Q = o[ae] + "" + S + ":" + o[ae + Z[1]] + (S + Z[0]) : X == "col" ? Q = o[ae] + "" + S + ":" + o[ae + Z[0]] + S : Q = o[ae] + "" + S + ":" + o[ae] + (S + Z[0]), pe.push(Q);
            }
          const oe = h.rowStyle, W = '<row r="' + S + '" spans="1:' + E + '" ' + (I in h ? 'ht="' + h[I] + '" customHeight="1"' : "") + (c in h ? ' outlineLevel="' + h[c] + '"' : "") + (A in h ? ' hidden="' + h[A] + '"' : "") + " >";
          R += W;
          let L = "";
          pt.forEach((P, X) => {
            p && (X += p);
            const ae = h[P] * 1;
            let Z = a.convertStringToNumber && !isNaN(ae) ? ae : h[P], Q = oe;
            if (a.styleCellCondition && typeof a.styleCellCondition == "function" && (Q = a.styleCellCondition(
              Z,
              h,
              S,
              X,
              !1,
              v
            ) || oe), a.mergeRowDataCondition && typeof a.mergeRowDataCondition == "function") {
              let ee = a.mergeRowDataCondition(
                Z,
                P,
                X,
                !1
              );
              const te = o[X];
              let de = ge[te];
              ee === !0 ? (!de || de && !de.inProgress) && (ge[te] = {
                inProgress: !0,
                start: S
              }) : de && de.inProgress && (pe.push(
                te + de.start + ":" + te + (S - 1)
              ), ge[te] = {
                inProgress: !1,
                start: -1
              });
            }
            typeof Z > "u" && (Z = "");
            const De = o[X] + "" + S;
            if (typeof a.commentCondition == "function") {
              const ee = a.commentCondition(
                Z,
                h,
                P,
                S,
                X,
                !1
              );
              ee && (typeof h.comment != "object" && (h.comment = {}), h.comment[P] = ee);
            }
            if (typeof h.comment == "object" && P in h.comment) {
              const ee = h.comment[P];
              Fe = !0;
              const te = Je(
                ee,
                q.commentSyntax.value,
                b
              );
              te.hasAuthor && typeof te.author < "u" && se.push(te.author.toString()), je.push({
                row: S - 1,
                col: X
              });
              let de = se.length;
              if (te.hasAuthor && typeof te.author < "u") {
                let bt = te.author.toString();
                const wt = se.indexOf(bt);
                wt < 0 ? se.push(bt) : de = wt;
              }
              Re += Qe(
                De,
                te.commentStr,
                te.commentStyle,
                de
              );
            }
            const Ct = me && me[De];
            if (Ct) {
              const ee = Xe(De, Ct, T);
              ee.needCalcChain && (Se = !0, Pe += ee.chainCell), R += ee.cell, L += ee.cell, delete me[De];
            } else if (typeof Z == "string") {
              const ee = '<c r="' + o[X] + S + '" t="s" ' + (Q && e.styles && e.styles[Q] ? 's="' + e.styles[Q].index + '"' : "") + "><v>" + O + "</v></c>";
              if (L += ee, R += ee, typeof a.multiStyleCondition == "function") {
                const te = a.multiStyleCondition(
                  Z,
                  h,
                  P,
                  S,
                  X,
                  !1
                );
                te && ((!("multiStyleValue" in h) || typeof h.multiStyleValue > "u") && (h.multiStyleValue = {}), h.multiStyleValue[P] = te);
              }
              "multiStyleValue" in h && h.multiStyleValue && P in h.multiStyleValue ? B += et(
                h.multiStyleValue[P],
                Z,
                q.commentSyntax.value,
                Q || "",
                a.useSplitBaseOnMatch
              ) : B += "<si><t>" + Ae(Z) + "</t></si>", M[Z] = Z, O++;
            } else {
              const ee = '<c r="' + o[X] + S + '" ' + (Q && e.styles && e.styles[Q] ? 's="' + e.styles[Q].index + '"' : "") + "><v>" + Z + "</v></c>";
              R += ee, L += ee;
            }
          }), _ - 1 == F && Object.keys(ge).forEach((P) => {
            ge[P].inProgress && pe.push(
              P + ge[P].start + ":" + P + S
            );
          }), x[S] = {
            startTag: W,
            endTag: "</row>",
            details: L
          }, S++, R += "</row>";
        }), a.sortAndFilter && (a.sortAndFilter.mode == "all" ? fe += '<autoFilter ref="A1:' + o[E - 1] + (S - 1) + '" />' : typeof a.sortAndFilter.ref == "string" && a.sortAndFilter.ref.length > 0 && (fe += '<autoFilter ref="' + a.sortAndFilter.ref + '" />'));
      }
      if (Ve.length > 0 && Ve.forEach((c) => {
        const A = a.shiftLeft ? a.shiftLeft : 0, I = a.headers[c - A], _ = o[c];
        me[_ + "" + S] = {
          start: a.withoutHeader ? _ + "1" : _ + "2",
          end: _ + "" + (S - 1),
          type: I.formula.type,
          ...I.formula.styleId ? { styleId: I.formula.styleId } : {}
        };
      }), qe.length > 0 && qe.forEach((c) => {
        const A = a.headers[c];
        A.conditionalFormatting && Ye.push({
          ...A.conditionalFormatting,
          start: a.withoutHeader ? o[c] + "1" : o[c] + "2",
          end: o[c] + "" + (S - 1)
        });
      }), me) {
        const c = Object.keys(me).sort(
          (A, I) => A > I ? 1 : -1
        );
        if (c.length) {
          let A = {};
          c.forEach((I) => {
            const _ = Xe(
              I,
              me[I],
              T,
              e.styles
            );
            _.needCalcChain && (Se = !0, Pe += _.chainCell), A[_.row] ? A[_.row] += _.cell : A[_.row] = _.cell;
          }), Object.keys(A).forEach((I) => {
            const _ = I, h = A[_];
            let F = x[_];
            if (F) {
              const oe = F.startTag + F.details + h + F.endTag;
              let W = new RegExp(F.startTag + "[\\n\\s\\S]*?</row>");
              R = R.replace(W, oe);
            } else
              R += '<row r="' + I + '" spans="1:' + E + '"  >' + h + "</row>", x[_] = {
                startTag: '<row r="' + I + '" spans="1:' + E + '"  >',
                endTag: "</row>",
                details: h
              };
          });
        }
      }
    }
    k > 0 && (K += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (k + 1) + '.xml" />');
    const ht = a.name ? a.name : "sheet" + (k + 1), Kt = a.state ? a.state : "visible";
    Y += '<sheet state="' + Kt + '" name="' + ht + '" sheetId="' + (k + 1) + '" r:id="rId' + (V + 1) + '" />', U += '<Relationship Id="rId' + (V + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (k + 1) + '.xml" />', $ += "<vt:lpstr>" + ("sheet" + (k + 1)) + "</vt:lpstr>", a.selected && (re = !0, J = k);
    const ut = a.sortAndFilter ? 'filterMode="1"' : "";
    let gt = -1;
    Ue && await Ue.then((E) => {
      let s = E;
      gt = s.ref, C == null || C.file(s.name, s.image);
    });
    let Le = !1, Ge = "", yt = "";
    We && (Le = !0, await We.then((E) => {
      let s = "";
      E.forEach((g, p) => {
        const c = p + 1;
        let A = g.image;
        const I = g.name;
        let _ = g.obj.from, h = g.obj.to, F = g.obj.margin;
        g.type;
        let oe = g.obj.type, W = g.obj.extent;
        typeof W > "u" && (W = {
          cx: 2e5,
          cy: 2e5
        });
        let L = {
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
        if (typeof _ == "string" && _.length >= 2) {
          let P = we(_, o);
          L.start = {
            ...P
          }, L.end = {
            col: P.col + 1,
            row: P.row + 1
          };
        }
        if (typeof h == "string" && h.length >= 2) {
          let P = we(h, o);
          P.row += 1, P.col += 1, L.end = {
            ...P
          };
        }
        L.end.mR = 0, L.end.mB = 0, L.start.mL = 0, L.start.mT = 0, F && ((F.all || F.right) && (L.end.mR = F.all || F.right), (F.all || F.bottom) && (L.end.mB = F.all || F.bottom), (F.all || F.left) && (L.start.mL = F.all || F.left), (F.all || F.top) && (L.start.mT = F.all || F.top)), oe == "one" ? Ge += "<xdr:oneCellAnchor><xdr:from><xdr:col>" + L.start.col + "</xdr:col><xdr:colOff>" + L.start.mT + "</xdr:colOff><xdr:row>" + L.start.row + "</xdr:row><xdr:rowOff>" + L.start.mL + '</xdr:rowOff></xdr:from><xdr:ext cx="' + W.cx + '" cy="' + W.cy + '"/><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="' + c + '" name="Picture ' + c + '"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize="0" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' + c + '"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst="rect"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:oneCellAnchor>' : Ge += '<xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>' + L.start.col + "</xdr:col><xdr:colOff>" + L.start.mT + "</xdr:colOff><xdr:row>" + L.start.row + "</xdr:row><xdr:rowOff>" + L.start.mL + "</xdr:rowOff></xdr:from><xdr:to><xdr:col>" + L.end.col + "</xdr:col><xdr:colOff>" + L.end.mB + "</xdr:colOff><xdr:row>" + L.end.row + "</xdr:row><xdr:rowOff>" + L.end.mR + '</xdr:rowOff></xdr:to><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="' + c + '" name="Picture ' + c + '"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize="0" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' + c + '"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst="rect"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:twoCellAnchor>', C == null || C.file(I, A), s += '<Relationship Id="rId' + c + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/' + I + '" />';
      }), yt = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` + s + "</Relationships>";
    })), pe = [...new Set(pe)];
    let xt = "", be = 1;
    Ye.length > 0 && (xt = Ye.reduce((E, s) => {
      if (s.type == "cells")
        return s.operator == "ct" ? E + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="containsText" dxfId="' + (s.styleId && H[s.styleId] ? H[s.styleId] : 0) + '" priority="' + (s.priority ? s.priority : be++) + '"  operator="containsText" text="' + s.value + '"><formula>NOT(ISERROR(SEARCH("' + s.value + '",' + s.start + ")))</formula></cfRule></conditionalFormatting>" : typeof s.operator > "u" || typeof l[s.operator] > "u" ? E : E + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="cellIs" dxfId="' + (s.styleId && typeof H[s.styleId] < "u" ? H[s.styleId] : 0) + '" priority="' + (s.priority ? s.priority : be++) + '" operator="' + l[s.operator] + '">' + (Array.isArray(s.value) ? s.value.reduce((g, p) => g + "<formula>" + p.value + "</formula>", "") : "<formula>" + s.value + "</formula>") + "</cfRule></conditionalFormatting>";
      if (s.type == "top")
        return E + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="' + (s.operator ? "aboveAverage" : "top10") + '" dxfId="' + (s.styleId && typeof H[s.styleId] < "u" ? H[s.styleId] : 0) + '" priority="' + (s.priority ? s.priority : be++) + '" ' + (s.bottom ? 'bottom="1"' : "") + " " + (s.percent ? 'percent="1"' : "") + '  rank="' + s.value + '" ' + (s.operator == "belowAverage" ? 'aboveAverage="0"' : "") + "/></conditionalFormatting>";
      if (s.type == "iconSet") {
        let g = "";
        return typeof s.operator > "u" ? E : (s.operator.indexOf("5") == 0 ? g = '<cfvo type="percent" val="0"/><cfvo type="percent" val="20"/><cfvo type="percent" val="40"/><cfvo type="percent" val="60"/><cfvo type="percent" val="80"/>' : s.operator.indexOf("4") == 0 ? g = '<cfvo type="percent" val="0"/><cfvo type="percent" val="25"/><cfvo type="percent" val="50"/><cfvo type="percent" val="75"/>' : g = '<cfvo type="percent" val="0"/><cfvo type="percent" val="33"/><cfvo type="percent" val="67"/>', E + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="iconSet" priority="' + (s.priority ? s.priority : be++) + '"><iconSet iconSet="' + s.operator + '">' + g + "</iconSet></cfRule></conditionalFormatting>");
      } else
        return s.type == "colorScale" ? E + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="colorScale" priority="' + (s.priority ? s.priority : be++) + '"><colorScale><cfvo type="min"/>' + (s.operator == "percentile" ? '<cfvo type="percentile" val="' + s.value + '"/>' : "") + '<cfvo type="max"/>' + (s.colors && Array.isArray(s.colors) ? s.colors.reduce((g, p) => g + '<color rgb="' + ce(p, n) + '"/>', "") : '<color rgb="FFF8696B"/><color rgb="FFFFEB84"/><color rgb="FF63BE7B"/>') + "</colorScale></cfRule></conditionalFormatting>" : s.type == "dataBar" ? E + '<conditionalFormatting sqref="' + s.start + ":" + s.end + '"><cfRule type="dataBar" priority="' + (s.priority ? s.priority : be++) + '"><dataBar><cfvo type="min"/><cfvo type="max"/>' + (s.colors && Array.isArray(s.colors) ? s.colors.reduce((g, p) => g + '<color rgb="' + ce(p, n) + '"/>', "") : '<color rgb="FF638EC6"/>') + "</dataBar></cfRule></conditionalFormatting>" : E;
    }, "")), (Ke || Fe || Le) && u == null && (u = r == null ? void 0 : r.folder("drawings")), Le && j == null && (j = u == null ? void 0 : u.folder("_rels")), N["sheet" + (k + 1)] = {
      indexId: V + 1,
      key: "sheet" + (k + 1),
      sheetName: ht,
      sheetDataTableColumns: w,
      backgroundImageRef: gt,
      sheetDimensions: G,
      asTable: ne || !1,
      sheetDataString: R,
      sheetBreakLine: ze,
      viewType: Oe,
      hasComment: Fe,
      drawersContent: Ge,
      cFDataString: xt,
      sheetMargin: dt,
      sheetHeaderFooter: Ie,
      isPortrait: _e,
      drawersRels: yt,
      hasImages: Le,
      hasCheckbox: Ke,
      formRel: ft,
      checkboxDrawingContent: st,
      checkboxForm: ye,
      checkboxSheetContent: mt,
      checkboxShape: ct,
      commentString: Re,
      commentAuthor: se,
      shapeCommentRowCol: je,
      splitOption: he,
      sheetViewProperties: ue,
      sheetSizeString: le.length > 0 ? "<cols>" + le + "</cols>" : "",
      protectionOption: a.protectionOption ? Object.keys(a.protectionOption).reduce((E, s) => E + " " + s + '="' + a.protectionOption[s] + '" ', "<sheetProtection ") + "/>" : "",
      merges: pe.length > 0 ? pe.reduce((E, s) => E + ' <mergeCell ref="' + s + '" />', '<mergeCells count="' + pe.length + '">') + " </mergeCells>" : "",
      selectedView: !!a.selected,
      // ? "<sheetViews>" +
      //   '<sheetView tabSelected="1" workbookViewId="0">' +
      //   '<selection activeCell="A0" sqref="A0" />' +
      //   "</sheetView>" +
      //   "</sheetViews>"
      // : "<sheetViews>" + '<sheetView workbookViewId="0" />' + "</sheetViews>"
      sheetSortFilter: fe,
      tabColor: a.tabColor ? '<sheetPr codeName="' + ("Sheet" + (k + 1)) + '" ' + ut + ' ><tabColor rgb="' + a.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + ut + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, V++;
  }
  Se && (V++, U += '<Relationship Id="rId' + V + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain" Target="calcChain.xml"/>', r == null || r.file(
    "calcChain.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<calcChain xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">` + Pe + "</calcChain>"
  ));
  let Mt = Object.keys(N), $e = m.folder("_rels");
  $e == null || $e.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  let xe = m.folder("docProps");
  xe == null || xe.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), xe == null || xe.file("app.xml", Zt(y, $)), r == null || r.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr />` + (re ? '<bookViews><workbookView xWindow="3540" yWindow="1365" windowWidth="21600" windowHeight="11325" activeTab="' + J + '"/></bookViews>' : "") + " <sheets>  " + Y + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), r == null || r.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (O - 1) + '" uniqueCount="' + Object.keys(M).length + '"> ' + B + "</sst>"
  );
  let Be = r == null ? void 0 : r.folder("_rels");
  Be == null || Be.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + U + " </Relationships>"
  );
  let Me = r == null ? void 0 : r.folder("theme");
  Me == null || Me.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/></a:theme>`
  );
  let Ce = r == null ? void 0 : r.folder("worksheets"), at = [], it = [], Ee = [];
  if (Mt.forEach((k, a) => {
    const T = N[k];
    let x = "";
    const G = T.sheetDataTableColumns;
    if (G.length > 0) {
      it.push("table" + (a + 1) + ".xml");
      const w = T.asTable, S = T.sheetDimensions;
      ke == null || ke.file(
        "table" + (a + 1) + ".xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="xr xr3" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" id="` + (a + 1) + '"  name="Table' + (a + 1) + '" displayName="Table' + (a + 1) + '" ref="' + S.start + ":" + S.end + '" totalsRowShown="0"><autoFilter ref="' + S.start + ":" + S.end + '"/>' + G + '<tableStyleInfo name="TableStyle' + (w.type ? w.type : "Medium") + (w.styleNumber ? w.styleNumber : 2) + '" showFirstColumn="' + (w.firstColumn ? w.firstColumn : "0") + '" showLastColumn="' + (w.lastColumn ? w.lastColumn : "0") + '" showRowStripes="' + (w.rowStripes ? w.rowStripes : "1") + '" showColumnStripes="' + (w.columnStripes ? w.columnStripes : "0") + '"/></table>'
      ), x += '<Relationship Id="rId15" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/table" Target="../tables/table' + (a + 1) + '.xml"/>';
    }
    if (T.hasImages) {
      const w = "drawing" + (Ee.length + 1) + ".xml";
      Ee.push(w), u == null || u.file(
        w,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"  xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex"  xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"  xmlns:dgm="http://schemas.openxmlformats.org/drawingml/2006/diagram"  xmlns:x3Unk="http://schemas.microsoft.com/office/drawing/2010/slicer"  xmlns:sle15="http://schemas.microsoft.com/office/drawing/2012/slicer">` + T.drawersContent + "</xdr:wsDr>"
      ), j == null || j.file(
        w + ".rels",
        T.drawersRels.toString()
      ), x += '<Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"  Target="../drawings/' + w + '" />';
    } else if (T.hasCheckbox) {
      const w = "drawing" + (Ee.length + 1) + ".xml";
      Ee.push(w), u == null || u.file(
        w,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex" xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:dgm="http://schemas.openxmlformats.org/drawingml/2006/diagram" xmlns:x3Unk="http://schemas.microsoft.com/office/drawing/2010/slicer" xmlns:sle15="http://schemas.microsoft.com/office/drawing/2012/slicer" >` + T.checkboxDrawingContent + "</xdr:wsDr>"
      ), x += '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing" Target="../drawings/vmlDrawing' + (a + 1) + '.vml" /><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" Target="../drawings/' + w + '" />', x += T.formRel, u == null || u.file(
        "vmlDrawing" + (a + 1) + ".vml",
        '<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint"><o:shapelayout v:ext="edit"><o:idmap v:ext="edit" data="1"/></o:shapelayout>' + Bt.checkbox + T.checkboxShape + "</xml>"
      );
    }
    if (T.hasComment) {
      at.push(a + 1);
      let w = T.commentAuthor;
      r == null || r.file(
        "comments" + (a + 1) + ".xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><authors>` + (Array.isArray(w) && w.length > 0 ? w.reduce(
          (S, R) => S + "<author>" + R + "</author>",
          ""
        ) : "<author></author>") + "</authors><commentList>" + T.commentString + "</commentList></comments>"
      ), x += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments" Target="../comments' + (a + 1) + '.xml" /><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing" Target="../drawings/vmlDrawing' + (a + 1) + '.vml" />', u == null || u.file(
        "vmlDrawing" + (a + 1) + ".vml",
        '<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">  <o:shapelayout v:ext="edit">    <o:idmap v:ext="edit" data="1"/>  </o:shapelayout>  <v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"     path="m,l,21600r21600,l21600,xe">    <v:stroke joinstyle="miter"/>    <v:path gradientshapeok="t" o:connecttype="rect"/>  </v:shapetype>' + T.shapeCommentRowCol.reduce((S, R) => S + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;margin-left:77.25pt;margin-top:23.25pt;width:264pt;height:42.75pt;z-index:1;visibility:hidden' fillcolor="#ffffe1">  <v:fill color2="#ffffe1"/>  <v:shadow on="t" color="black" obscured="t"/>  <v:path o:connecttype="none"/>  <v:textbox>   <div style='text-align:left'></div>  </v:textbox>  <x:ClientData ObjectType="Note">   <x:MoveWithCells/>   <x:SizeWithCells/>   <x:Anchor>    1, 15, 1, 10, 5, 15, 4, 4</x:Anchor>   <x:AutoFill>False</x:AutoFill>   <x:Row>` + R.row + "</x:Row>   <x:Column>" + R.col + "</x:Column>  </x:ClientData></v:shape>", "") + "</xml>"
      );
    }
    if (T.backgroundImageRef > 0 && (x += '<Relationship Id="rId16" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image' + T.backgroundImageRef + '.png"/>'), T.hasImages || T.hasComment || T.hasCheckbox || G.length > 0) {
      const w = Ce == null ? void 0 : Ce.folder("_rels");
      w == null || w.file(
        "sheet" + (a + 1) + ".xml.rels",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> ` + x + "</Relationships>"
      );
    }
    let ne = "";
    T.selectedView || T.splitOption ? ne = '<sheetViews><sheetView tabSelected="1"' + T.sheetViewProperties + (T.viewType.length > 0 ? ' view="' + T.viewType + '"' : "") + ' workbookViewId="0">' + T.splitOption + (T.selectedView ? '<selection activeCell="A0" sqref="A0" />' : "") + "</sheetView></sheetViews>" : ne = '<sheetViews><sheetView workbookViewId="0"' + T.sheetViewProperties + (T.viewType.length > 0 ? ' view="' + T.viewType + '"' : "") + "/></sheetViews>", Ce == null || Ce.file(
      T.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + T.tabColor + ne + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + T.sheetSizeString + "<sheetData>" + T.sheetDataString + "</sheetData>" + T.protectionOption + T.sheetSortFilter + T.merges + T.cFDataString + (T.hasImages || T.hasCheckbox ? '<drawing r:id="rId2" />' : "") + (T.hasComment || T.hasCheckbox ? '<legacyDrawing r:id="rId3" />' : "") + (T.hasCheckbox ? '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice Requires="x14"><controls>' + T.checkboxSheetContent + "</controls></mc:Choice></mc:AlternateContent>" : "") + T.sheetMargin + (T.isPortrait || T.sheetBreakLine.length > 0 ? '<pageSetup orientation="portrait" r:id="rId' + (a + 1) + '"/>' : "") + T.sheetBreakLine + T.sheetHeaderFooter + (T.backgroundImageRef > 0 ? '<picture r:id="rId16"/>' : "") + (G.length > 0 ? '<tableParts count="1"> <tablePart r:id="rId15"/></tableParts>' : "") + "</worksheet>"
    );
  }), ye.length > 0) {
    let k = r == null ? void 0 : r.folder("ctrlProps");
    ye.forEach((a, T) => {
      k == null || k.file("ctrlProp" + (T + 1) + ".xml", a);
    });
  }
  if (m.file(
    "[Content_Types].xml",
    Gt(
      K,
      at,
      [...new Set(z)],
      Ee,
      ye,
      Se,
      it
    )
  ), n)
    return m.generateAsync({
      type: e.generateType ? e.generateType : "nodebuffer"
    }).then((k) => k);
  if (e.notSave)
    return m.generateAsync({ type: "blob" }).then((k) => k.slice(
      0,
      k.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  m.generateAsync({ type: "blob" }).then(function(k) {
    import("./FileSaver.min-3b84b3f2.mjs").then((a) => a.F).then((a) => {
      const { saveAs: T } = a;
      T(
        k,
        (e.fileName ? e.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function oo(e) {
  return /t="s".*?<v/.test(e);
}
function ro(e) {
  const t = /<t.*?>(.*?)<\/t>/, n = e.match(t);
  return n ? n[1] : null;
}
function no(e) {
  const t = /<v.*?>(.*?)<\/v>/, n = e.match(t);
  return n ? n[1] : null;
}
function lo(e) {
  const t = /r="(.*?)"/, n = e.match(t);
  return n ? n[1] : null;
}
async function ao(e, t = !1, n) {
  let l, o = !1;
  typeof n == "function" ? (l = n, o = !0) : l = fetch;
  let i = [], d = /* @__PURE__ */ new Map(), m = [], y = {}, r = !1;
  function C(u, j) {
    let v = [], b = j.match(/<c[\s\S\n]*?<\/c>/g);
    if (Array.isArray(b) && b.forEach((f) => {
      let D = no(f);
      oo(f) && D && (D = m[parseInt(D)]);
      const H = lo(f);
      let q = we(H, Rt);
      typeof v[q.row] > "u" && (v[q.row] = []), v[q.row][q.col] = D;
    }), u.indexOf("xl/worksheets/sheet") == 0) {
      let f = u.substring(14, u.lastIndexOf("."));
      d.has(f) && (f = d.get(f)), y[f] = v;
    }
  }
  return await l(e).then((u) => {
    if (u == null || u == null)
      throw "response is null";
    return o ? u : t ? u.arrayBuffer() : u.blob();
  }).then(async (u) => {
    const v = (await import("./jszip.min-e651e8fb.mjs").then((f) => f.j)).default;
    let b = 0;
    return await new Promise((f, D) => {
      v.loadAsync(u).then(function(H) {
        const q = Object.keys(H.files);
        b = q.length;
        let K = new Proxy(
          {
            counter: 0,
            isNameSet: !1
          },
          {
            set(B, O, Y) {
              if (O === "isNameSet")
                return B.isNameSet = Y, !0;
              if (typeof Y != "number")
                throw "value most be number";
              return B.counter = Y, B.isNameSet && B.counter === b && f({
                data: y,
                sheetName: d.entries()
              }), !0;
            },
            get(B, O, Y) {
              return O === "isNameSet" ? B.isNameSet : B.counter;
            }
          }
        );
        q.forEach(function(B) {
          H.files[B].async("string").then(function(O) {
            if (B.indexOf("sharedStrings") >= 0) {
              let Y = O.match(/<si[\s\S\n]*?<\/si>/g);
              Array.isArray(Y) && Y.forEach((U) => {
                let M = U.match(/<t[\s\S\n]*?<\/t>/g);
                if (Array.isArray(M)) {
                  let N = M.reduce(($, V) => $ + ro(V), "");
                  m.push(N);
                }
              }), r = !0, i.length > 0 && (i.forEach((U) => {
                C(U.filename, U.fileData);
              }), i = []);
            }
            B.indexOf("sheet") >= 0 && (r ? C(B, O) : i.push({
              filename: B,
              fileData: O
            })), B.indexOf("workbook") >= 0 && (O.replace(
              /(.*[\n\s\S]*)(<sheets[\n\s\S]*?sheets>)(.*[\n\s\S]*)/,
              "$2"
            ).split("<sheet ").slice(1).forEach((M, N) => {
              let $ = "Sheet 1";
              M.indexOf("name=") > 0 && ($ = M.replace(
                /(.*[\n\s\S]*?)name="([^"]*)"(.*[\n\s\S]*)/,
                "$2"
              ));
              let V = N + 1;
              M.indexOf("sheetId=") > 0 && (V = Number(
                M.replace(
                  /(.*[\n\s\S]*?)sheetId="([^"]*)"(.*[\n\s\S]*)/,
                  "$2"
                )
              ), isNaN(V) && (V = N + 1)), d.set("sheet" + V, $);
            }), K.isNameSet = !0), K.counter++;
          });
        });
      });
    });
  }).catch((u) => {
    throw u;
  });
}
function io(e) {
  const t = e.length;
  let n = 0, l = {}, o = {}, i = {};
  for (let r = 0; r < t; r++) {
    const C = e[r], u = C.length;
    let j = {};
    for (let v = 0; v < u; v++) {
      n++;
      const b = C[v];
      let f;
      b.sheetName ? f = b.sheetName : f = "Sheet 1", f in l || (l[f] = {
        headers: [],
        data: [],
        labelCounter: 0,
        seenAt: r
      }), f in o || (o[f] = {
        index: r,
        value: 0
      }), f in i || (l[f].labelCounter = 0, i[f] = !0);
      let D = [];
      const H = l[f].headers.length;
      let q = {}, K = l[f].seenAt == r, B = b.headers.reduce((M, N, $) => (l[f].labelCounter++, H < l[f].labelCounter && D.push({
        label: "c" + l[f].labelCounter,
        text: K ? N.text : ""
      }), q["c" + l[f].labelCounter] = N.text, {
        ...M,
        [N.label]: "c" + l[f].labelCounter
      }), {});
      if (l[f].headers.push(...D), b.spaceX)
        for (let M = 0; M < b.spaceX; M++)
          l[f].labelCounter++, H <= l[f].labelCounter && l[f].headers.push({
            label: "c" + l[f].labelCounter,
            text: ""
          });
      o[f].index + 1 == r && (j[f] = o[f].value);
      let O = j[f] || 0;
      O > 0 && (!l[f].headerIndex || l[f].headerIndex && l[f].headerIndex != O ? l[f].data.push(q) : l[f].data[O] = {
        ...l[f].data[O],
        ...q
      }, l[f].headerIndex = O, O++);
      let Y = Object.keys(B), U = b.data.length >= l[f].data.length;
      if (l[f].data = b.data.reduce((M, N, $) => {
        let V = {};
        return M.length > $ + O ? V = M[$ + O] : M.push(V), Y.forEach((re) => {
          let J = B[re];
          V[J] = N[re] ? N[re] : "";
        }), V.tableIndex = n, V.tableStringIndex = $ + "," + v, M[$ + O] = V, M;
      }, l[f].data), U && b.spaceY) {
        const M = l[f].headers.length;
        for (let N = 0; N < b.spaceY; N++) {
          let $ = {};
          for (let V = 0; V < M; V++) {
            const re = l[f].headers[V];
            $[re.label] = "";
          }
          l[f].data.push($);
        }
      }
      o[f] = {
        value: Math.max(l[f].data.length, o[f].value),
        index: r
      };
    }
    i = {};
  }
  let d = Object.keys(l), m = [];
  return d.reduce(
    (r, C) => {
      let u = l[C];
      return r.sheet.push({
        ...u,
        name: C
      }), r;
    },
    { sheet: m }
  );
}
function tt(e) {
  return /^[A-Z]+[1-9][1-9]*$/.test(e);
}
const so = {
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
    validateFunction(e, t, n, l) {
      return t.rtl && t.ltr && l && console.warn("Alignment-rtl and ltr cannot be used together."), (t.readingOrder && t.ltr || t.readingOrder && t.rtl) && l && console.warn(
        "Alignment-readingOrder cannot be used with rtl or ltr."
      ), !0;
    }
  },
  border: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(e, t, n, l) {
      const o = ["full", "top", "left", "right", "bottom"], i = [
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
      return Object.keys(t).forEach((m) => {
        const y = m;
        if (o.indexOf(y) < 0)
          throw 'border-The type of border is not valid. Valid options include "full," "top," "left," "right," and "bottom."';
        const r = t[y];
        if (!("color" in r))
          throw "border-The border must have a color.";
        if (!("style" in r))
          throw "border-The border needs a style.";
        if (typeof r.style == "string" && i.indexOf(r.style) < 0)
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
}, co = {
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
}, fo = {
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
    validateFunction(e, t, n, l) {
      const o = Object.keys(t), i = ["outlineLevel", "hidden", "height"];
      return o.forEach((d) => {
        i.indexOf(d) < 0 && l && console.warn(
          'The Schema of mapSheetDataOption does not include the "' + e + '" property.'
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
    validateFunction(e, t, n, l) {
      if (Array.isArray(t))
        t.forEach((o) => {
          if (o.type == "cells") {
            const i = ["lt", "gt", "between", "ct", "eq"];
            if (!o.operator || !o.start || !o.end || typeof o.value > "u")
              throw {
                record: o,
                error: "The object is not complete; you need to fill in the values for operator, start, end and value."
              };
            if (i.indexOf(o.operator) < 0)
              throw { record: o, error: "The operator is not valid." };
          } else if (o.type == "top") {
            const i = ["belowAverage", "aboveAverage"];
            if (!o.start || !o.end || typeof o.value > "u")
              throw {
                record: o,
                error: "The object is not complete; you need to fill in the values for start, end and value."
              };
            if (o.operator && i.indexOf(o.operator) < 0)
              throw { record: o, error: "The operator is not valid." };
          } else if (o.type == "iconSet") {
            if (!o.operator || !o.start || !o.end)
              throw {
                record: o,
                error: "The object is not complete; you need to fill in the values for operator, start and end"
              };
          } else if (o.type == "colorScale") {
            if (!o.start || !o.end)
              throw {
                record: o,
                error: "The object is not complete; you need to fill in the values for start and end"
              };
          } else if (o.type == "dataBar") {
            if (!o.start || !o.end)
              throw {
                record: o,
                error: "The object is not complete; you need to fill in the values for start and end"
              };
          } else
            throw 'Property "type" is not valid.';
        });
      else
        throw 'Type of "conditionalFormatting" property is not valid';
      return !0;
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
    validateFunction(e, t, n, l) {
      if (Array.isArray(t)) {
        const o = ["one", "two"];
        t.forEach((i) => {
          if (i.to && !tt(i.to))
            throw 'value of "to" is not valid.';
          if (i.from && !tt(i.from))
            throw 'value of "from" is not valid.';
          if (o.indexOf(i.type) < 0)
            throw 'Type of "type" is not valid in the "images" property.';
          if (i.type == "two" && !i.to)
            throw '"to" property is empty."two" needed "to".';
        });
      } else
        throw 'Type of "images" property is not valid';
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
    validateFunction(e, t, n, l) {
      if (Array.isArray(t)) {
        let o = [];
        if (t.forEach((i) => {
          /^[A-Z]+[1-9][1-9]*:[A-Z]+[1-9][1-9]*$/.test(i) || o.push(
            "The " + i + ' reference is not valid in the "merges" property.'
          );
        }), o.length > 0)
          throw o;
      } else
        throw 'Type of "merges" property is not valid';
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
    validateFunction(e, t, n, l) {
      if (typeof t == "object") {
        const o = ["all", "ref"];
        if (!t.mode)
          throw '"mode" is required in sortAndFilter';
        if (o.indexOf(t.mode) < 0)
          throw '"mode" is not valid';
        if (t.mode == "ref")
          if (t.ref) {
            if (!tt(t.ref))
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
    validateFunction(e, t, n, l) {
      const o = [
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
      ], i = ["0", "1", 0, 1];
      return Object.keys(t).forEach((m) => {
        const y = t[m];
        if (o.indexOf(m) < 0)
          throw '"' + m + '" is not valid.';
        if (i.indexOf(y) < 0)
          throw 'value of "' + m + '" is not valid';
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
    validateFunction(e, t, n, l) {
      if (Array.isArray(t))
        t.forEach((o) => {
          if (!o.col || !o.row)
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
    validateFunction(e, t, n, l) {
      const o = ["pageLayout", "pageBreakPreview"];
      if (t.type && o.indexOf(t.type) < 0)
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
function Dt(e, t = !0, n = !0) {
  Object.keys(e).forEach((o) => {
    const i = e[o], d = Object.keys(i);
    if (i.format && !Pt[i.format])
      throw 'The "' + i.format + '" format that has been used is not defined.';
    i.underline && i.doubleUnderline, d.forEach((m) => {
      let y = i[m];
      const r = so[m];
      if (rt(y, r, m, t, n))
        return !0;
    });
  });
}
function Ht(e, t = !0, n = !0) {
  Array.isArray(e) || (e = [e]), e.forEach((l) => {
    Object.keys(l).forEach((i) => {
      const d = l[i], m = fo[i];
      rt(d, m, i, t, n);
    });
  });
}
function mo(e, t = !0, n = !0) {
  Object.keys(e).forEach((o) => {
    let i = e[o];
    const d = co[o];
    if (rt(i, d, o, t, n))
      if (o == "sheet")
        if (Array.isArray(i))
          Ht(i);
        else
          throw "Sheet must be Array.";
      else
        o == "styles" && Dt(i);
  });
}
function rt(e, t, n, l, o) {
  if (t) {
    if (typeof e != t.type) {
      if (t.type == "object" || t.type == "string" || l)
        throw 'The Type of The "' + n + '" is not valid';
      o && console.warn("The property type must be " + t.type);
    }
    if (t.isEnum && t.enum.indexOf(e) < 0)
      throw 'The value of "' + n + '" must be ' + JSON.stringify(t.enum);
    if (t.min && e < t.min)
      throw 'The value of "' + n + '" must be higher than ' + t.min;
    if (t.notEmpty && (!e || e.length <= 0))
      throw 'The value of "' + n + '" must not be empty.';
    if (t.isArray && !Array.isArray(e))
      throw 'The value of "' + n + '" should be an array.';
    return typeof t.validateFunction == "function" && t.validateFunction(n, e, l, o), !0;
  } else
    return o && console.warn(
      'The Schema Object does not include the "' + n + '" property.'
    ), !1;
}
const ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  validateExcelTableObjectFunction: mo,
  validateSheetArrayFunction: Ht,
  validateStyleObjectFunction: Dt
}, Symbol.toStringTag, { value: "Module" }));
function Ft(e) {
  if (typeof e > "u" || e == null)
    return "";
  typeof e != "string" && (e = String(e));
  let t = e, n = !1;
  return e.indexOf('"') >= 0 && (t = t.replace(/"/g, '""'), n = !0), e.indexOf(",") >= 0 && (n = !0), n && (t = '"' + t + '"'), t;
}
function po(e) {
  return e ? " " : ",";
}
function It(e, t) {
  return e.substring(0, e.length - t) + `
`;
}
function Nt(e, t = !1, n = !1) {
  const l = po(n), o = n ? ".txt" : ".csv", i = l.length;
  let d = [];
  if (e.sheet.forEach((m) => {
    let y = "", r = "";
    const C = m.headers;
    let u = [], j = C.length;
    for (let v = 0; v < j; v++) {
      const b = C[v];
      u.push(b.label), m.withoutHeader || (r += Ft(b.text) + l);
    }
    y += It(r, i), j = m.data.length;
    for (let v = 0; v < j; v++) {
      r = "";
      const b = m.data[v];
      u.forEach((f) => {
        r += Ft(b[f]) + l;
      }), y += It(r, i);
    }
    d.push(y);
  }), e.backend)
    return d;
  if (t)
    return import("./FileSaver.min-3b84b3f2.mjs").then((m) => m.F).then((m) => {
      const { saveAs: y } = m;
      import("./jszip.min-e651e8fb.mjs").then((r) => r.j).then((r) => {
        const C = r.default;
        let u = new C();
        d.forEach((j, v) => {
          u.file("sheet" + (v + 1) + o, j);
        }), u.generateAsync({ type: "blob" }).then(function(j) {
          y(
            j,
            (e.fileName ? e.fileName : "tableRecord") + ".zip"
          );
        });
      });
    }), "done";
  d.forEach((m) => {
    import("./FileSaver.min-3b84b3f2.mjs").then((y) => y.F).then((y) => {
      const { saveAs: r } = y;
      var C = new Blob([m], {
        type: "text/" + (n ? "plain" : "csv") + ";charset=utf-8"
      });
      r(
        C,
        (e.fileName ? e.fileName : "tableRecord") + o
      );
    });
  });
}
const nt = to, uo = jt, go = Qt;
function yo(e, t, n, l, o) {
  const i = Ut(
    e,
    t,
    n,
    l,
    o
  );
  return nt(i);
}
function xo(e) {
  const t = io(e);
  return nt(t);
}
async function Co(e, t, n) {
  return nt(await qt(e, t, n));
}
const bo = ao;
function wo(e, t = !1) {
  return Nt(e, t, !1);
}
function vo(e, t = !1) {
  return Nt(e, t, !0);
}
export {
  ho as Validator,
  go as addGlobalOptionFromExcelTable,
  uo as addGlobalOptions,
  yo as convertTableToExcel,
  bo as extractExcelData,
  wo as generateCSV,
  nt as generateExcel,
  vo as generateText,
  xo as sideBySideLineByLine,
  Co as themeBaseGenerate
};
