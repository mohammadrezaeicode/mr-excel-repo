function Ft(e) {
  return e.replace(/ /g, "");
}
function It(e) {
  if (e = e.replace(/^#/, ""), e.length == 3) {
    const t = e.charAt(0), r = e.charAt(1), l = e.charAt(2);
    return t + t + r + r + l + l;
  } else
    return e;
}
function Bt(e) {
  /^#?([a-f\d]{3})$/i.test(e) && (e = It(e));
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? [
    parseInt(t[1], 16),
    parseInt(t[2], 16),
    parseInt(t[3], 16)
  ] : [0, 0, 0];
}
function vt(e) {
  const t = Bt(e);
  return t == null ? void 0 : (0.299 * t[0] + 0.587 * t[1] + 0.114 * t[2]) / 255 > 0.5 ? "rgb(0,0,0)" : "rgb(255,255,255)";
}
function Tt(e) {
  /^#?([a-f\d]{3})$/i.test(e) && (e = It(e));
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? "rgb(" + (255 - parseInt(t[1], 16)) + "," + (255 - parseInt(t[2], 16)) + "," + (255 - parseInt(t[3], 16)) + ")" : "rgb(0,0,0)";
}
function Xe(e) {
  e = Number(e);
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}
function ie(e) {
  e = Ft(e);
  let t = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), r = t.reduce((l, o) => l && !Number.isNaN(Number(o)), !0);
  return t.length == 4 && t[3] == "0" || t.length != 3 && t.length != 4 || !r ? null : (Xe(t[0]) + Xe(t[1]) + Xe(t[2])).toUpperCase();
}
function ce(e, t) {
  if (typeof e > "u" || e === null)
    return null;
  if (!t) {
    let r = Ft(e);
    r.indexOf("var(") == 0 && r.lastIndexOf(")") == r.length - 1 && (r = r.substring(4, r.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      r
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const r = ie(e);
    e = r || "";
  }
  return e.replace(/^#/, "");
}
function Mt(e) {
  let t = "";
  return e.indexOf("_") > 0 ? e.replace(/[a-z]/g, "").length == e.length ? t = e.split(/_/).reduce((r, l) => r + l.charAt(0) + l.substring(1).toLowerCase() + " ", "").trim() : t = e.replace(/_/g, " ").trim() : (t = e.replace(/([A-Z])/g, " $1").trim(), t = t.charAt(0).toUpperCase() + t.substring(1).trim()), t;
}
function St(e, t) {
  let r = Object.keys(e).filter((s) => !t.includes(s)), l = [];
  return r.reduce((s, h) => (s.push({
    label: h,
    text: Mt(h)
  }), s), l);
}
const Kt = async function(e, t, r, l = []) {
  const o = (await import("./colorHunt-11cd61a1.mjs")).colorHuntTheme;
  let s;
  if (typeof e == "object" && Array.isArray(e))
    if (e.length > 0)
      if (Array.isArray(e[0])) {
        let h = [];
        for (let p = 0; p < e.length; p++) {
          const x = e[p];
          if (x.length > 0) {
            const n = St(x[0], l);
            h.push({
              headers: n,
              data: x
            });
          }
        }
        s = {
          sheet: h
        };
      } else
        e.length > 0 ? s = {
          sheet: [
            {
              headers: St(e[0], l),
              data: e
            }
          ]
        } : s = {
          sheet: []
        };
    else
      s = {
        sheet: []
      };
  else
    s = e;
  if (t < o.length) {
    let h = "color" + (r && r.rowIndex ? r.rowIndex : 4).toString(), p = "color" + (r && r.headerIndex ? r.headerIndex : 1).toString(), x = o[t], n = r && r.headerBackgroundColor ? r.headerBackgroundColor : x[p], C = r && r.rowBackgroundColor ? r.rowBackgroundColor : x[h], y;
    r && r.headerColor ? y = r == null ? void 0 : r.headerColor : y = r && r.negativeColor ? Tt(n) : vt(n);
    let N;
    r && r.rowColor ? N = r == null ? void 0 : r.rowColor : N = r && r.negativeColor ? Tt(C) : vt(C), typeof s.styles > "u" && (s.styles = {}), s.styles.themeStyleHeader = {
      backgroundColor: n,
      color: y
    }, s.styles.themeStyleBody = {
      backgroundColor: C,
      color: N
    };
    const _ = s.sheet.length;
    for (let S = 0; S < _; S++)
      s.sheet[S].styleCellCondition = function(f, L, D, q, K, B) {
        return K ? "themeStyleHeader" : "themeStyleBody";
      };
  }
  return typeof (r == null ? void 0 : r.fileName) == "string" && (s.fileName = r.fileName), s;
};
function Yt(e, t, r, l, o, s, h, p) {
  let x = [], n = "both", C = [];
  !t || t === 0 ? (t = 1, n = "col") : C.push(t - 1), !e || e === 0 ? (e = 0, n = "row") : C.push(e - 1);
  let y = o || {};
  y.mergeType = p && p.mergeType ? [...p.mergeType, n] : [n], y.mergeValue = p && p.mergeValue ? [...p.mergeValue, C] : [C], y.mergeStart = p && p.mergeStart ? [...p.mergeStart, r] : [r];
  for (let N = 0; N < t; N++) {
    let _ = e;
    for (let S = 0; S < l; S++)
      r <= S ? _ >= 1 ? (y["c" + S] = s, s = "", h += "*", _--) : t >= 2 && r == S ? (y["c" + S] = s, s = "", h += "+") : h += "-" : N > 0 && (h += "-");
    x.push({
      ...y,
      mergeString: h
    }), y = {}, h = "";
  }
  return x;
}
function Vt(e, t, r, l, o) {
  var y;
  if (!e && !t)
    throw "Error: One of the function inputs is required.";
  let s;
  e ? s = (y = document.querySelector(e)) == null ? void 0 : y.querySelectorAll("tr") : s = t == null ? void 0 : t.querySelectorAll("tr");
  let h = [], p = [], x = {
    header: {},
    rows: []
  }, n = 40;
  if (s) {
    let N = !1, _ = 0;
    s.forEach((S, f) => {
      var L = [].slice.call(S.children);
      const D = window.getComputedStyle(S, null);
      let q = ie(D.backgroundColor);
      if (!N)
        _ = L.length, N = !0, typeof l == "function" ? n = l(
          Number(D.height.substring(0, D.height.length - 2)),
          f,
          !0
        ) : n = Number(
          D.height.substring(0, D.height.length - 2)
        ), L.forEach((K, B) => {
          let E = window.getComputedStyle(K, null), Y = null;
          if (E.borderBottomWidth !== "0px") {
            const J = ie(E.borderBottomColor);
            J && (Y || (Y = {}), Y.bottom = {
              style: "thin",
              color: J
            });
          }
          if (E.borderTopWidth !== "0px") {
            const J = ie(E.borderTopColor);
            J && (Y || (Y = {}), Y.top = {
              style: "thin",
              color: J
            });
          }
          if (E.borderLeftWidth !== "0px") {
            const J = ie(E.borderLeftColor);
            J && (Y || (Y = {}), Y.left = {
              style: "thin",
              color: J
            });
          }
          if (E.borderRightWidth !== "0px") {
            const J = ie(E.borderRightColor);
            J && (Y || (Y = {}), Y.right = {
              style: "thin",
              color: J
            });
          }
          let z = ie(E.backgroundColor);
          !z && q && (z = q);
          const M = parseInt(
            E.fontSize.substring(0, E.fontSize.indexOf("p"))
          );
          let H = {
            ...z ? { backgroundColor: z } : {},
            bold: parseInt(E.fontWeight) > 500,
            ...isNaN(M) ? {} : { size: M },
            ...Y ? { border: Y } : {},
            alignment: {
              ...typeof E.textAlign == "string" && E.textAlign.length > 0 ? { horizontal: E.textAlign } : {},
              vertical: "center",
              ...E.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          x.header[f + "-" + B] = H;
          let $;
          typeof o == "function" ? $ = o(
            Number(E.width.substring(0, E.width.length - 2)),
            B
          ) : $ = Number(E.width.substring(0, E.width.length - 2)) * 0.15;
          const V = K.getAttribute("colspan"), re = K.getAttribute("rowspan");
          h.push({
            label: "c" + B,
            ...V ? { colspan: V } : {},
            ...re ? { rowspan: re } : {},
            text: K.textContent,
            ...isNaN($) || $ <= 0 ? {} : { size: $ }
          });
        });
      else {
        let K = {}, B = "", E = !1;
        p.length >= f && (K = p[f - 1], B = "mergeString" in K ? K.mergeString : "", E = !0);
        let Y = 0;
        L.forEach((z, M) => {
          if ("c" + (M + Y) in K)
            for (let U = 0; U <= _ + 1 && "c" + (M + U) in K; U++)
              Y++;
          M += Y;
          let H = window.getComputedStyle(z, null);
          if (z.getAttribute("colspan") || z.getAttribute("rowspan")) {
            let U = Yt(
              z.getAttribute("colspan") * 1,
              z.getAttribute("rowspan") * 1,
              M,
              _,
              K,
              z.textContent,
              B,
              K
            );
            p.length < f ? p.push(...U) : U.forEach((ve, Te) => {
              p.length < f + Te ? p.push(...U) : p[f + Te] = {
                ...p[f + Te],
                ...ve
              };
            }), K = U[0], B = U[0].mergeString, E = !0;
          } else
            E || (B += "-");
          let $ = null;
          if (H.borderBottomWidth !== "0px") {
            const U = ie(H.borderBottomColor);
            U && ($ || ($ = {}), $.bottom = {
              style: "thin",
              color: U
            });
          }
          if (H.borderTopWidth !== "0px") {
            const U = ie(H.borderTopColor);
            U && ($ || ($ = {}), $.top = {
              style: "thin",
              color: U
            });
          }
          if (H.borderLeftWidth !== "0px") {
            const U = ie(H.borderLeftColor);
            U && ($ || ($ = {}), $.left = {
              style: "thin",
              color: U
            });
          }
          if (H.borderRightWidth !== "0px") {
            const U = ie(H.borderRightColor);
            U && ($ || ($ = {}), $.right = {
              style: "thin",
              color: U
            });
          }
          let V = ie(H.backgroundColor);
          !V && q && (V = q);
          const re = parseInt(
            H.fontSize.substring(0, H.fontSize.indexOf("p"))
          );
          let J = {
            ...V ? { backgroundColor: V } : {},
            bold: parseInt(H.fontWeight) > 500,
            ...isNaN(re) ? {} : { size: re },
            ...$ ? { border: $ } : {},
            // backgroundColor: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              ...typeof H.textAlign == "string" && H.textAlign.length > 0 ? { horizontal: H.textAlign } : {},
              vertical: "center",
              ...H.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          x.header[f + "-" + M] = J, K["c" + M] = z.textContent;
        }), typeof l == "function" ? K.height = l(
          Number(D.height.substring(0, D.height.length - 2)),
          f,
          !1
        ) : K.height = D.height.substring(0, D.height.length - 2), typeof K.height == "string" && K.height.length == 0 && delete K.height, p.length < f ? p.push(K) : p[f - 1] = K;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: x.header,
    sheet: [
      {
        ...n ? { headerHeight: n } : {},
        styleCellCondition: function(N, _, S, f, L, D) {
          return r ? D.includes(S - 1 + "-" + f) ? S - 1 + "-" + f : "" : null;
        },
        data: p,
        headers: h
      }
    ]
  };
}
function $e(e, t, r = "", l = [], o = -1) {
  const s = e.length;
  for (let h = 0; h < s; h++)
    l.push(r + e[h]);
  return t < l.length ? l : $e(
    e,
    t,
    l[o + 1],
    l,
    o + 1
  );
}
function qt(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + '<fonts count="' + e.font.count + '"><font><sz val="11" /><color theme="1" /><name val="Calibri" /><family val="2" /><scheme val="minor" /></font><font><sz val="11" /><color rgb="FFFF0000" /><name val="Calibri" /><family val="2" /><scheme val="minor" /></font>' + e.font.value + '</fonts><fills count="' + e.fill.count + '"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="lightGray" /></fill>' + e.fill.value + '</fills><borders count="' + e.border.count + '"><border />' + e.border.value + '</borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /></cellStyleXfs><cellXfs count="' + e.cell.count + '"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment readingOrder="0" /></xf>' + e.cell.value + '</cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0" /></cellStyles> ' + (t ? '<dxfs count="' + e.conditionalFormatting.count + '" >' + e.conditionalFormatting.value + "</dxfs>" : '<dxfs count="0" />') + "</styleSheet>";
}
function Ut(e, t, r, l, o, s, h) {
  let p = {};
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /><Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + r.reduce((x, n) => (n = n.toLowerCase(), p[n] ? x : n == "svg" ? (p.png = !0, p.svg = !0, x + '<Default Extension="png" ContentType="image/png"/><Default Extension="svg" ContentType="image/svg+xml"/>') : n == "jpeg" || n == "jpg" ? (p.jpeg = !0, p.jpg = !0, x + '<Default Extension="' + n + '" ContentType="image/jpeg"/>') : (p.curr = !0, x + '<Default Extension="' + n + '" ContentType="image/' + n + '"/>')), "") + t.reduce((x, n) => x + '<Override PartName="/xl/comments' + n + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />', "") + e + (h.length > 0 ? h.reduce((x, n) => x + '<Override PartName="/xl/tables/' + n + '" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml"/>', "") : "") + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" />' + (s ? '<Override PartName="/xl/calcChain.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml"/>' : "") + '<Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' + l.reduce((x, n) => x + '<Override PartName="/xl/drawings/' + n + '" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml" />', "") + (o.length > 0 ? o.reduce((x, n, C) => x + '<Override PartName="/xl/ctrlProps/ctrlProp' + (C + 1) + '.xml" ContentType="application/vnd.ms-excel.controlproperties+xml"/>', "") : "") + '<Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function zt(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>` + e + '</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="' + e + '" baseType="lpstr"> ' + t + "</vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>";
}
function Ze(e, t, r, l) {
  e = e.toUpperCase();
  let o = "";
  if (t.formula) {
    let n = t, C = n.formula.indexOf("=") == 0 ? n.formula.substring(1) : n.formula, y = e.indexOf(":") > 0, N = n.referenceCells ? n.referenceCells : e, _ = y ? e.substring(0, e.indexOf(":")) : e, S = _.replace(/[0-9]/g, ""), f = parseInt(e.substr(S.length)), L = n.returnType ? n.returnType : n.isArray || y ? ' t="str"' : "", D = "styleId" in n && l && typeof n.styleId == "string" && l[n.styleId] ? ' s="' + l[n.styleId].index + '"' : "", q = n.isArray || y ? ' t="array" ref="' + N + '"' : "";
    return o = '<c r="' + _ + '"' + D + L + "><f" + q + ">" + C + "</f></c>", {
      column: S,
      row: f,
      needCalcChain: !1,
      isCustom: !0,
      cell: o
    };
  }
  let s = e.replace(/[0-9]/g, ""), h = parseInt(e.substr(s.length)), p = !1, x = "";
  if (t.noArgType) {
    const n = t;
    if (n.noArgType == "NOW" || n.noArgType == "TODAY") {
      const C = "styleId" in n && l && typeof n.styleId == "string" && l[n.styleId] ? ' s="' + l[n.styleId].index + '"' : "";
      o = '<c r="' + e + '"' + C + "><f>" + n.noArgType + "()</f></c>";
    } else {
      let C = "NOW()";
      const y = "styleId" in n && l && typeof n.styleId == "string" && l[n.styleId] ? ' s="' + l[n.styleId].index + '"' : "";
      o = '<c r="' + e + '"' + y + "><f>" + n.noArgType.substring(4) + "(" + C + ")</f></c>";
    }
    x = '<c r="' + e + '" i="' + r + '"/>', p = !0;
  } else if (t.referenceCell) {
    const n = t;
    let C = "";
    typeof n.value < "u" && (C = "," + n.value);
    let y = "";
    n.type == "COT" && (y = "_xlfn.");
    const N = "styleId" in n && l && typeof n.styleId == "string" && l[n.styleId] ? ' s="' + l[n.styleId].index + '"' : "";
    o = '<c r="' + e + '"' + N + "><f>" + y + n.type + "(" + n.referenceCell.toUpperCase() + C + ")</f></c>", x = '<c r="' + e + '" i="' + r + '"/>', p = !0;
  } else {
    const n = t;
    o = '<c r="' + e + '"' + (l && typeof n.styleId == "string" && l[n.styleId] ? ' s="' + l[n.styleId].index + '"' : "") + "><f>" + n.type + "(" + n.start.toUpperCase() + ":" + n.end.toUpperCase() + ")</f></c>";
  }
  return {
    column: s,
    row: h,
    cell: o,
    needCalcChain: p,
    chainCell: x
  };
}
function Je(e, t, r) {
  let l = !1, o, s;
  if (typeof e == "object") {
    if ("author" in e && e.author && (l = !0, s = e.author), "styleId" in e && typeof e.styleId == "string") {
      let h = t[e.styleId];
      typeof h == "string" && (r = h);
    }
    o = "comment" in e && typeof e.comment == "string" ? kt(e.comment) : [""];
  } else
    o = e ? kt(e) : [""];
  return l && o.unshift(s + ":"), {
    hasAuthor: l,
    author: s,
    commentStyle: r,
    commentStr: o
  };
}
function kt(e) {
  var t = e.split(/\r?\n|\r|\n/g);
  return t;
}
function Qe(e, t, r, l) {
  let o = '<comment ref="' + e + '" authorId="' + Math.max(0, l - 1) + '" shapeId="0"><text>', s = "";
  return t.forEach((h, p) => {
    let x = "";
    if (h.length == 0) {
      s += `
`;
      return;
    }
    p > 0 && (x = ' xml:space="preserve"', s += `
`), o += "<r>" + r + "<t" + x + ">" + s + h + "</t></r>", s = "";
  }), s.length > 0 && o.indexOf("<r>") > 0 && (o = o.substring(0, o.length - 8) + s + "</t></r>"), o += "</text></comment>", o;
}
const Wt = '<rPr><b /><sz val="9" /><color rgb="000000" /><rFont val="Tahoma" /></rPr>', Ae = function(e) {
  return e.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
};
function He(e, t) {
  let r = {
    result: [],
    str: t
  }, l = e.reduce((o, s) => {
    let h = o.str.indexOf(s);
    return o.result.push(o.str.substring(0, h)), o.str = o.str.substring(h + s.length), o;
  }, r);
  return l.result.push(l.str), l.result;
}
function Et(e, t, r, l, o, s, h, p, x) {
  if (l) {
    let n = [], C = [], y = [];
    const N = s.length;
    o.forEach((_, S) => {
      let f;
      try {
        f = _.match(e);
      } catch (L) {
        if (typeof e == "string")
          f = _.match("\\" + e);
        else
          throw L;
      }
      if (f)
        if (p) {
          let L;
          x ? L = He(f, _) : L = _.split(e), n.push(...L), C.push(...f), y.push(
            ...f.reduce((D, q) => [...D, t], [])
          );
        } else {
          let L;
          x ? L = He(f, _) : L = _.split(e).reduce((D, q, K) => K >= 2 ? (D[1] += e + q, D) : [...D, q], []), n.push(...L), y.push(t), C.push(e.toString());
        }
      else
        n.push(_);
      N > S && (C.push(s[S]), y.push(h[S]));
    }), o = n, s = C, h = y;
  } else {
    let n;
    try {
      n = r.match(e);
    } catch (C) {
      if (typeof e == "string")
        n = r.match("\\" + e);
      else
        throw C;
    }
    n ? p ? (s.push(...n), h.push(
      ...n.reduce((C, y) => [...C, t], [])
    ), x ? o = He(n, r) : o = r.split(e)) : (s.push(e.toString()), h.push(t), x ? o = He(n, r) : o = r.split(e).reduce((C, y, N) => N >= 2 ? (C[1] += e + y, C) : [...C, y], [])) : o.push(r), l = !0;
  }
  return {
    v: e,
    text: r,
    splittedText: l,
    splitValue: o,
    matchValue: s,
    styleMatchValue: h
  };
}
function et(e, t, r, l, o) {
  if (typeof e == "object") {
    let s = "", h = [], p = [], x = [], n = !1;
    if (Object.keys(e).forEach((_) => {
      const S = e[_];
      if (_ !== "reg") {
        let f = Et(
          _,
          typeof S == "string" ? S : "",
          t,
          n,
          x,
          h,
          p,
          !1,
          o
        );
        n = f.splittedText, x = f.splitValue, h = f.matchValue, p = f.styleMatchValue;
      }
    }), "reg" in e && Array.isArray(e.reg)) {
      const _ = e.reg.length;
      for (let S = 0; S < _; S++) {
        const f = e.reg[S];
        if ("reg" in f && "styleId" in f) {
          typeof f.reg == "string" && (f.reg = new RegExp(f.reg, "g"));
          let L = Et(
            f.reg,
            f.styleId,
            t,
            n,
            x,
            h,
            p,
            !0,
            o
          );
          n = L.splittedText, x = L.splitValue, h = L.matchValue, p = L.styleMatchValue;
        }
      }
    }
    const y = x.length - 1, N = l in r ? r[l] : "";
    for (let _ = 0; _ < y; _++) {
      const S = x[_], f = h[_], L = p[_];
      S.length > 0 && (s += "<r>" + N + '<t xml:space="preserve">' + S + "</t></r>"), f.length > 0 && (s += "<r>" + (r[L] ? r[L] : N) + '<t xml:space="preserve">' + f + "</t></r>");
    }
    return x[y].length > 0 ? s = "<si>" + s + "<r>" + N + "<t>" + Ae(x[y]) + "</t></r></si>" : s = "<si>" + s + "</si>", s;
  } else
    return "<si><t>" + Ae(t) + "</t></si>";
}
const _t = {
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
}, At = [
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
], Ot = (e, t, r = !1, l) => {
  let o, s = !1;
  return typeof l == "function" ? (o = l, s = !0) : o = fetch, o(e).then((h) => s ? h : r ? h.arrayBuffer() : h.blob()).then((h) => s || r ? h : new File([h], t)).catch((h) => {
    throw h;
  });
};
function we(e, t) {
  e = e.toUpperCase();
  let r = e.replace(/[0-9]/g, "");
  if (r.length == 0)
    throw "Invalid Column";
  let l = parseInt(e.substring(r.length));
  if (isNaN(l))
    throw "Invalid Row";
  l = Math.max(0, l - 1);
  let o = t.indexOf(r);
  return o < 0 && (t = $e(t, Math.pow(10, r.length + 1), ""), o = t.indexOf(r), o < 0 && (o = 0)), {
    col: o,
    row: l
  };
}
let Gt = {}, ot = new Proxy(Gt, {
  get(e, t) {
    return t in e ? e[t] : (this.set(e, t, {}, !0), {});
  },
  set(e, t, r, l) {
    return e[t] = r, !0;
  }
});
function Pt(e, t, r) {
  ot[e], ot[e][t] = r;
}
function Rt(e, t, r) {
  Object.keys(r).forEach((o) => {
    const s = r[o];
    typeof s == "object" ? o != "data" && o != "headers" && Rt(e, t.length > 0 ? t + "." + o : o, s) : Pt(e, t.length > 0 ? t + "." + o : o, s);
  });
}
function Xt(e, t) {
  Rt(e, "", t);
}
function Zt(e, t) {
  let r = t, l = ot[e];
  return Object.keys(l).forEach((s) => {
    const h = s.split(".");
    let p = r, x = l[s];
    for (let n = 0; n < h.length; n++) {
      const C = h[n];
      p[C] ? p = p[C] : h.length - 1 == n ? p[C] = x : (p[C] = {}, p = p[C]);
    }
  }), r;
}
async function Jt(e, t = "") {
  if (typeof t == "string" && t.length > 0 && (e = Zt(t, e)), typeof e.creator == "string" && e.creator.trim().length <= 0)
    throw 'length of "creator" most be bigger then 0';
  if (typeof e.created == "string" && new Date(e.created).toString() == "Invalid Date")
    throw '"created" is not valid date';
  if (typeof e.modified == "string" && new Date(e.modified).toString() == "Invalid Date")
    throw '"modified" is not valid date';
  const r = e.backend, l = {
    lt: "lessThan",
    gt: "greaterThan",
    between: "between",
    ct: "containsText",
    eq: "equal"
  };
  let o = [...At];
  e.numberOfColumn && e.numberOfColumn > 25 && (o = $e(o, e.numberOfColumn));
  const h = (await import("./jszip.min-e651e8fb.mjs").then((T) => T.j)).default;
  let p = new h();
  const x = e.sheet.length;
  let n = p.folder("xl"), C = null, y = null, N = null;
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const _ = Object.keys(e.styles), S = Wt, f = e.activateConditionalFormatting ? e.activateConditionalFormatting : !1, L = {}, D = {};
  let q = _.reduce(
    (T, a, w) => {
      const g = e.styles[a];
      if (g.type && (g.type == "headerFooter" || g.type == "HF")) {
        let R = "", le = "-", fe = "Regular";
        if (g.fontFamily && (le = g.fontFamily), g.bold && (fe = "Bold"), g.italic && (fe == "Regular" && (fe = ""), fe += "Italic"), (le != "-" || fe != "Regular") && (R = '&amp;"' + le + "," + fe + '"'), g.size && (R += "&amp;" + g.size), g.doubleUnderline ? R += "&amp;E" : g.underline && (R += "&amp;U"), g.color) {
          const he = ce(g.color, r);
          typeof he == "string" && he.length > 0 && (R += "&amp;K" + he.toUpperCase());
        }
        return L[a] = R, T;
      }
      if (f && typeof g.type == "string" && g.type && (g.type == "conditionalFormatting" || g.type.toUpperCase() == "CF")) {
        D[a] = T.conditionalFormatting.count;
        let R = ce(g.color, r), le = ce(g.backgroundColor, r);
        return T.conditionalFormatting.value += '<dxf><font><color rgb="' + R + '"/></font><fill> <patternFill> <bgColor rgb="' + le + '"/></patternFill></fill></dxf>', T.conditionalFormatting.count++, T;
      }
      const G = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (g.backgroundColor) {
        let R = ce(g.backgroundColor, r);
        G.fillIndex = T.fill.count, T.fill.count++, T.fill.value = T.fill.value + '<fill><patternFill patternType="solid">' + (R ? '<fgColor rgb="' + R.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (g.color || g.fontFamily || g.size || g.bold || g.italic || g.underline || g.doubleUnderline) {
        const R = ce(g.color, r);
        G.fontIndex = T.font.count, T.font.count++, T.font.value = T.font.value + "<font>" + (g.bold ? "<b/>" : "") + (g.italic ? "<i />" : "") + (g.underline || g.doubleUnderline ? "<u " + (g.doubleUnderline ? ' val="double" ' : "") + "/>" : "") + (g.size ? '<sz val="' + g.size + '" />' : "") + (R ? '<color rgb="' + R.replace("#", "") + '" />' : "") + (g.fontFamily ? '<name val="' + g.fontFamily + '" />' : "") + "</font>", T.commentSyntax.value[a] = "<rPr>" + (g.bold ? "<b/>" : "") + (g.italic ? "<i/>" : "") + (g.underline || g.doubleUnderline ? "<u " + (g.doubleUnderline ? 'val="double" ' : "") + "/>" : "") + '<sz val="' + (g.size ? g.size : "9") + '" />' + (R ? '<color rgb="' + R.replace("#", "") + '" />' : "") + '<rFont val="' + (g.fontFamily ? g.fontFamily : "Tahoma") + '" /></rPr>';
      }
      let ne = "/>";
      g.alignment && (g.alignment.rtl && (g.alignment.readingOrder = 2), delete g.alignment.rtl, g.alignment.ltr && (g.alignment.readingOrder = 1), delete g.alignment.ltr, ne = ' applyAlignment="1"><alignment ' + Object.keys(g.alignment).reduce((R, le) => R + " " + le + '="' + g.alignment[le] + '" ', "") + " /></xf>");
      const b = g.border;
      let v = "";
      if (typeof b == "object" && ((b.left || b.full) && (v += '<left style="' + (b.left || b.full).style + '"><color rgb="' + ce(
        (b.left || b.full).color,
        r
      ).replace("#", "") + '" /></left>'), (b.right || b.full) && (v += '<right style="' + (b.right || b.full).style + '"><color rgb="' + ce(
        (b.right || b.full).color,
        r
      ).replace("#", "") + '" /></right>'), (b.top || b.full) && (v += '<top style="' + (b.top || b.full).style + '"><color rgb="' + ce(
        (b.top || b.full).color,
        r
      ).replace("#", "") + '" /></top>'), (b.bottom || b.full) && (v += '<bottom style="' + (b.bottom || b.full).style + '"><color rgb="' + ce(
        (b.bottom || b.full).color,
        r
      ).replace("#", "") + '" /></bottom>'), G.borderIndex = T.border.count, T.border.count++, T.border.value += "<border>" + v + "<diagonal /></border>"), g.format) {
        const R = _t[g.format];
        R && (G.formatIndex = R.key, "value" in R && (T.format.count++, T.format.value += R.value));
      }
      return T.cell.value = T.cell.value + '<xf numFmtId="' + G.formatIndex + '" fontId="' + G.fontIndex + '" fillId="' + G.fillIndex + '" borderId="' + G.borderIndex + '" xfId="0"' + (G.borderIndex > 0 ? ' applyBorder="1" ' : "") + (G.fillIndex > 0 ? ' applyFill="1" ' : "") + (G.fontIndex >= 0 ? ' applyFont="1" ' : "") + (G.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + ne, e.styles[a].index = T.cell.count, T.cell.count++, T;
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
  n == null || n.file("styles.xml", qt(q, f));
  let K = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />', B = "", E = 0, Y = "", z = "", M = {};
  const H = {};
  let $ = "", V = 4, re = !1, J = -1, U = [], ve = 1;
  const Te = {
    checkbox: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<formControlPr xmlns="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" objectType="CheckBox" **value** **fmlaLink** lockText="1" noThreeD="1"/>`
  };
  let lt = 1024;
  const Dt = {
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
  }, Ht = {
    checkbox: `<v:shapetype id="_x0000_t201" coordsize="21600,21600" o:spt="201"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path shadowok="f" o:extrusionok="f" strokeok="f" fillok="f" o:connecttype="rect"/>
  <o:lock v:ext="edit" shapetype="t"/>
 </v:shapetype>`
  };
  let ye = [], Pe = "", Se = !1, ke = null;
  for (let T = 0; T < x; T++) {
    const a = e.sheet[T], w = T + 1;
    let g = {}, G = {
      start: "",
      end: ""
    };
    const ne = a.asTable;
    let b = "", v = a.shiftTop && a.shiftTop >= 0 ? a.shiftTop + 1 : 1, R = "", le = "", fe = "", he = "", ue = "", Oe = "", Ke = !1, st = "", ct = "", ft = "", mt = "", pe = Object.assign([], a.merges), me = Object.assign({}, a.formula), Ye = Object.assign(
      [],
      a.conditionalFormatting
    ), Fe = !1, se = [], Re = "", je = [], pt = [], Ve = [], qe = [], ge = {}, Ie = "", _e = !1, Ue = "";
    if (a.rtl && (ue += ' rightToLeft="1" '), a.pageBreak) {
      const k = a.pageBreak;
      if (k.row && Array.isArray(k.row)) {
        Oe = "pageBreakPreview";
        const i = k.row.length;
        Ue += '<rowBreaks count="' + i + '" manualBreakCount="' + i + '">' + k.row.reduce(
          (u, m) => u + '<brk id="' + m + '" max="16383" man="1"/>',
          ""
        ) + "</rowBreaks>";
      }
      if (k.column && Array.isArray(k.column)) {
        Oe = "pageBreakPreview";
        const i = k.column.length;
        Ue += '<colBreaks count="' + i + '" manualBreakCount="' + i + '">' + k.column.reduce(
          (u, m) => u + '<brk id="' + m + '" max="16383" man="1"/>',
          ""
        ) + "</colBreaks>";
      }
    }
    let dt = "";
    if (a.pageOption) {
      const k = a.pageOption;
      if (k.isPortrait && (_e = !0), k.margin) {
        const F = k.margin;
        let I = {
          left: 0.7,
          right: 0.7,
          top: 0.75,
          bottom: 0.75,
          header: 0.3,
          footer: 0.3
        };
        Object.keys(I).forEach((d) => {
          typeof F[d] == "number" && (I[d] = F[d]);
        }), dt = '<pageMargins left="' + I.left + '" right="' + I.right + '" top="' + I.top + '" bottom="' + I.bottom + '" header="' + I.header + '" footer="' + I.footer + '"/>';
      }
      let i = "", u = "", m = "", c = "";
      if (["header", "footer"].forEach((F) => {
        const I = F.charAt(0).toUpperCase() + F.substring(1);
        if (k[F]) {
          const d = k[F];
          typeof d == "object" && Object.keys(d).forEach((O) => {
            i.indexOf(O) < 0 && (i += O);
            const oe = d[O];
            let W = "";
            if (Object.keys(oe).reduce((j, P) => (P == "l" ? j.splice(0, 0, P) : P == "c" ? j.splice(1, 0, P) : P == "r" && j.splice(2, 0, P), j), []).forEach((j) => {
              const P = oe[j];
              W += "&amp;" + j.toUpperCase(), P.styleId && L[P.styleId] && (W += L[P.styleId]), P.text && (W += P.text);
            }), W = "<" + O + I + ">" + W + "</" + O + I + ">", O == "odd")
              u += W;
            else if (O == "even")
              m += W;
            else if (O == "first")
              c += W;
            else
              throw "type error";
          });
        }
      }), Ie = u + m + c, Ie.length > 0) {
        _e = !0;
        const F = i.length == 7 || i.length == 12 ? ' differentOddEven="1"' : "", I = i.indexOf("first") >= 0 ? ' differentFirst="1"' : "";
        Ie = "<headerFooter" + F + I + ">" + Ie + "</headerFooter>";
      }
    }
    if (a.viewOption) {
      let k = "";
      const i = a.viewOption;
      i.type && (Oe = i.type), i.hideRuler && (ue += ' showRuler="0" '), i.hideGrid && (ue += ' showGridLines="0" '), i.hideHeadlines && (ue += ' showRowColHeaders="0" ');
      let u = i.splitOption;
      if (typeof u > "u" && (_e = !1, typeof i.frozenOption == "object")) {
        const m = i.frozenOption;
        if (k = ' state="frozen" ', m.type == "R" || m.type == "ROW") {
          let c;
          typeof m.index == "object" ? c = m.index.r : c = m.index, u = {
            startAt: {
              b: "A" + (c + 1)
            },
            type: "H",
            split: c
          };
        } else if (m.type == "C" || m.type == "COLUMN") {
          let c;
          typeof m.index == "object" ? c = m.index.c : c = m.index, c > o.length - 1 && (o = $e(o, c)), u = {
            type: "V",
            startAt: {
              r: o[c] + 1
            },
            split: c
          };
        } else if (m.type == "B" || m.type == "BOTH") {
          let c = "", A;
          typeof m.index == "number" ? (A = m.index, c = o[m.index] + (m.index + 1)) : (A = {
            y: m.index.r,
            x: m.index.c
          }, c = o[m.index.c] + (m.index.r + 1)), u = {
            startAt: {
              two: c
            },
            type: "B",
            split: A
          };
        }
      }
      if (u)
        if (u.type == "H" || u.type == "HORIZONTAL") {
          let m;
          u.startAt && (m = u.startAt.b, u.startAt.t && (ue += ' topLeftCell="' + u.startAt.t + '"')), m || (m = "A1"), he = '<pane ySplit="' + (typeof u.split == "object" && u.split.y || u.split) + '" topLeftCell="' + m + '" activePane="bottomLeft"' + k + "/>";
        } else if (u.type == "V" || u.type == "VERTICAL") {
          let m;
          u.startAt && (m = u.startAt.r, u.startAt.l && (ue += ' topLeftCell="' + u.startAt.l + '"')), m || (m = "A1"), he = '<pane xSplit="' + (typeof u.split == "object" && u.split.x || u.split) + '" topLeftCell="' + m + '" activePane="topLeft"' + k + "/>";
        } else {
          let m;
          u.startAt && (m = u.startAt.two, u.startAt.one && (ue += ' topLeftCell="' + u.startAt.one + '"')), m || (m = "A1"), he = '<pane xSplit="' + (typeof u.split == "object" && u.split.x || u.split) + '" ySplit="' + (typeof u.split == "object" && u.split.y || u.split) + '" topLeftCell="' + m + '" activePane="bottomLeft"' + k + "/>";
        }
    }
    if (_e && (Oe = "pageLayout"), a.checkbox) {
      Ke = !0;
      const k = Te.checkbox;
      a.checkbox.forEach((i, u) => {
        let m = k;
        if (i.link) {
          let O = we(i.link, o);
          m = m.replace(
            "**fmlaLink**",
            'fmlaLink="$' + o[O.col] + "$" + (O.row + 1) + '"'
          );
        } else
          m = m.replace("**fmlaLink**", "");
        i.mixed ? m = m.replace("**value**", 'checked="Mixed"') : i.checked ? m = m.replace("**value**", 'checked="Checked"') : m = m.replace("**value**", ""), i.threeD && m.replace('noThreeD="1"', ""), ye.push(m), lt++;
        let c = T + "" + lt++;
        const A = "_x0000_s" + c;
        ct += Dt.checkbox.replace("***id***", A).replace("***text***", i.text);
        let F = i.startStr, I = i.endStr, d = {
          start: {
            col: 0,
            row: 0
          },
          end: {
            col: 1,
            row: 1
          }
        };
        if (i.col && i.row && (d = {
          start: {
            col: i.col,
            row: i.row - 1
          },
          end: {
            col: i.col,
            row: i.row
          }
        }), typeof F == "string" && F.length >= 2) {
          let O = we(F, o);
          d.start = {
            ...O
          }, d.end = {
            col: O.col + 1,
            row: O.row + 1
          };
        }
        if (typeof I == "string" && I.length >= 2) {
          let O = we(I, o);
          O.row += 1, O.col += 1, d.end = {
            ...O
          };
        }
        mt += `<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">
                    <mc:Choice Requires="x14">
                        <control shapeId="${c}" r:id="rId${7 + u}" name="${i.text}">
                            <controlPr defaultSize="0" autoFill="0" autoLine="0" autoPict="0">
                                <anchor moveWithCells="1">
                                    <from>
                                        <xdr:col>${d.start.col}</xdr:col>
                                        <xdr:colOff>19050</xdr:colOff>
                                        <xdr:row>${d.start.row}</xdr:row>
                                        <xdr:rowOff>19050</xdr:rowOff>
                                    </from>
                                    <to>
                                        <xdr:col>${d.end.col}</xdr:col>
                                        <xdr:colOff>819150</xdr:colOff>
                                        <xdr:row>${d.end.row}</xdr:row>
                                        <xdr:rowOff>0</xdr:rowOff>
                                    </to>
                                </anchor>
                            </controlPr>
                        </control>
                    </mc:Choice>
                </mc:AlternateContent>`, ft += `<Relationship Id="rId${7 + u}"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp"
        Target="../ctrlProps/ctrlProp${ye.length}.xml" />`, st += ` <mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">
        <mc:Choice xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" Requires="a14">
            <xdr:twoCellAnchor editAs="oneCell">
                <xdr:from>
                    <xdr:col>${d.start.col}</xdr:col>
                    <xdr:colOff>19050</xdr:colOff>
                    <xdr:row>${d.start.row}</xdr:row>
                    <xdr:rowOff>19050</xdr:rowOff>
                </xdr:from>
                <xdr:to>
                    <xdr:col>${d.end.col}</xdr:col>
                    <xdr:colOff>819150</xdr:colOff>
                    <xdr:row>${d.end.row}</xdr:row>
                    <xdr:rowOff>0</xdr:rowOff>
                </xdr:to>
                <xdr:sp macro="" textlink="">
                   <xdr:nvSpPr>
                        <xdr:cNvPr id="${c}" name="${i.text}" hidden="1">
                            <a:extLst>
                                <a:ext uri="">
                                    <a14:compatExt spid="${A}"/>
                                </a:ext>
                                <a:ext uri="">
                                    <a16:creationId xmlns:a16="http://schemas.microsoft.com/office/drawing/2014/main" id=""/>
                                </a:ext>
                            </a:extLst>
                        </xdr:cNvPr>
                        <xdr:cNvSpPr/>
                    </xdr:nvSpPr>
                    <xdr:spPr bwMode="auto">
                        <a:xfrm>
                            <a:off x="0" y="0"/>
                            <a:ext cx="0" cy="0"/>
                        </a:xfrm>
                        <a:prstGeom prst="rect">
                            <a:avLst/>
                        </a:prstGeom>
                        <a:noFill/>
                        <a:ln>
                            <a:noFill/>
                        </a:ln>
                    </xdr:spPr>
                    <xdr:txBody>
                        <a:bodyPr vertOverflow="clip" wrap="square" lIns="27432" tIns="18288" rIns="0" bIns="18288" anchor="ctr" upright="1"/>
                        <a:lstStyle/>
                        <a:p>
                            <a:pPr algn="l" rtl="0">
                                <a:defRPr sz="1000"/>
                            </a:pPr>
                            <a:r>
                                <a:rPr lang="en-US" sz="800" b="0" i="0" u="none" strike="noStrike" baseline="0">
                                    <a:solidFill>
                                        <a:srgbClr val="000000"/>
                                    </a:solidFill>
                                    <a:latin typeface="Segoe UI"/>
                                    <a:cs typeface="Segoe UI"/>
                                </a:rPr>
                                <a:t>${i.text}</a:t>
                            </a:r>
                        </a:p>
                    </xdr:txBody>
                </xdr:sp>
                <xdr:clientData/>
            </xdr:twoCellAnchor>
        </mc:Choice>
        <mc:Fallback/>
    </mc:AlternateContent>`;
      });
    }
    let ze;
    if (a.backgroundImage) {
      C == null && (C = n == null ? void 0 : n.folder("media"));
      const k = a.backgroundImage;
      ze = new Promise(async (i, u) => {
        let m = k.lastIndexOf("."), c;
        m > 0 ? (c = k.substring(m + 1).toLowerCase(), c.length > 4 && (c.indexOf("gif") >= 0 ? c = "gif" : c.indexOf("jpg") >= 0 ? c = "jpg" : c.indexOf("jpeg") >= 0 ? c = "jpeg" : c = "png")) : c = "png";
        const A = ve++, F = "image" + A + "." + c, I = await Ot(k, F, r, e.fetch);
        I || u("image not load"), U.push(c), i({
          name: F,
          type: c,
          image: I,
          ref: A
        });
      });
    }
    let We;
    if (a.images && (C == null && (C = n == null ? void 0 : n.folder("media")), We = Promise.all([
      ...a.images.map(async (k, i) => {
        let u = k.url.lastIndexOf("."), m;
        u > 0 ? (m = k.url.substring(u + 1).toLowerCase(), m.length > 4 && (m.indexOf("gif") >= 0 ? m = "gif" : m.indexOf("jpg") >= 0 ? m = "jpg" : m.indexOf("jpeg") >= 0 ? m = "jpeg" : m = "png")) : m = "png", U.push(m);
        const c = "image" + ve++ + "." + m;
        return {
          type: m,
          image: await Ot(k.url, c, r, e.fetch),
          obj: k,
          i,
          name: c
        };
      })
    ])), Array.isArray(a.headers) && a.headers.length) {
      const k = a.headers.length;
      let i = "";
      if (a.title) {
        const c = a.title, A = c.comment, F = c.shiftTop && c.shiftTop >= 0 ? c.shiftTop : 0, I = a.shiftLeft && a.shiftLeft >= 0 ? a.shiftLeft : 0, d = c.shiftLeft && c.shiftLeft + I >= 0 ? c.shiftLeft + I : I, O = c.consommeRow ? c.consommeRow - 1 : 1, oe = c.consommeCol ? c.consommeCol : k, W = O == 0 && typeof c.height == "number" ? ' ht="' + c.height + '" customHeight="1" ' : "", j = c.styleId ? c.styleId : "titleStyle", P = o[d] + "" + (v + F);
        if (pe.push(
          P + ":" + o[d + oe - 1] + (v + O + F)
        ), typeof A < "u") {
          Fe = !0;
          const Z = Je(
            A,
            q.commentSyntax.value,
            S
          );
          let ae = se.length;
          if (Z.hasAuthor && typeof Z.author < "u") {
            let X = Z.author.toString();
            const Q = se.indexOf(X);
            Q < 0 ? se.push(X) : ae = Q;
          }
          je.push({
            row: v + F - 1,
            col: d
          }), Re += Qe(
            P,
            Z.commentStr,
            Z.commentStyle,
            ae
          );
        }
        typeof c.text == "string" && (g[v + F] = {
          startTag: '<row r="' + (v + F) + '" ' + W + ' spans="1:' + (d + oe - 1) + '">',
          details: '<c r="' + P + '" ' + (e.styles[j] ? ' s="' + e.styles[j].index + '" ' : "") + ' t="s"><v>' + E + "</v></c>",
          endTag: "</row>"
        }, i += '<row r="' + (v + F) + '" ' + W + ' spans="1:' + (d + oe - 1) + '">', i += '<c r="' + P + '" ' + (e.styles[j] ? ' s="' + e.styles[j].index + '" ' : "") + ' t="s"><v>' + E + "</v></c>", i += "</row>", E++, M[c.text] = c.text, c.multiStyleValue ? B += et(
          c.multiStyleValue,
          c.text,
          q.commentSyntax.value,
          j,
          a.useSplitBaseOnMatch
        ) : B += "<si><t>" + Ae(c.text) + "</t></si>"), v += F + O + 1;
      }
      let u = a.headerStyleKey ? a.headerStyleKey : null, m = 0;
      if (typeof a.shiftLeft == "number" && a.shiftLeft >= 0 && (m = a.shiftLeft), ne && (b += '<tableColumns count="' + a.headers.length + '">', ke || (ke = n == null ? void 0 : n.folder("tables"))), G.start = o[m] + "" + v, G.end = o[m + a.headers.length - 1] + "" + (v + a.data.length), a.headers.forEach((c, A) => {
        if (ne && (b += '<tableColumn id="' + (A + 1) + '" name="' + c.text + '"/>'), m && (A += m), c.formula && Ve.push(A), c.conditionalFormatting && qe.push(A), pt.push(c.label), a.mergeRowDataCondition && typeof a.mergeRowDataCondition == "function" && a.mergeRowDataCondition(
          c,
          null,
          A,
          !0
        ) === !0 && (ge[o[A]] = {
          inProgress: !0,
          start: v
        }), a.styleCellCondition && typeof a.styleCellCondition == "function" && (u = a.styleCellCondition(
          c,
          c,
          v,
          A,
          !0,
          _
        ) || u), c.size && c.size > 0 && (le += '<col min="' + (A + 1) + '" max="' + (A + 1) + '" width="' + c.size + '" customWidth="1" />'), a.withoutHeader)
          return;
        const F = o[A] + "" + v;
        if (typeof a.commentCondition == "function") {
          const d = a.commentCondition(
            c,
            null,
            c.label,
            v,
            A,
            !0
          );
          d && (c.comment = d);
        }
        if (c.comment) {
          Fe = !0;
          const d = Je(
            c.comment,
            q.commentSyntax.value,
            S
          );
          let O = se.length;
          if (d.hasAuthor && typeof d.author < "u") {
            let oe = d.author.toString();
            const W = se.indexOf(oe);
            W < 0 ? se.push(oe) : O = W;
          }
          je.push({
            row: v - 1,
            col: A
          }), Re += Qe(
            F,
            d.commentStr,
            d.commentStyle,
            O
          );
        }
        const I = me && me[F];
        if (I) {
          const d = Ze(
            F,
            I,
            w,
            e.styles
          );
          d.needCalcChain && (Se = !0, Pe += d.chainCell), R += d.cell, delete me[F];
        } else {
          if (R += '<c r="' + o[A] + v + '" ' + (u && e.styles && e.styles[u] ? ' s="' + e.styles[u].index + '" ' : "") + ' t="s"><v>' + E + "</v></c>", typeof a.multiStyleCondition == "function") {
            const d = a.multiStyleCondition(
              c,
              null,
              c.label,
              v,
              A,
              !0
            );
            d && (c.multiStyleValue = d);
          }
          c.multiStyleValue ? B += et(
            c.multiStyleValue,
            c.text,
            q.commentSyntax.value,
            u || "",
            a.useSplitBaseOnMatch
          ) : B += "<si><t>" + Ae(c.text) + "</t></si>", M[c.text] = c.text, E++;
        }
      }), ne && (b += "</tableColumns>"), a.withoutHeader)
        R += i;
      else {
        const c = '<row r="' + v + '" spans="1:' + k + '" ' + (a.headerHeight ? 'ht="' + a.headerHeight + '" customHeight="1"' : "") + (a.headerRowOption ? Object.keys(a.headerRowOption).reduce((A, F) => A + " " + F + '="' + a.headerRowOption[F] + '" ', "  ") : "") + ">";
        g[v] = {
          startTag: c,
          endTag: "</row>",
          details: R
        }, R = i + c + R + "</row>", v++;
      }
      if (Array.isArray(a.data)) {
        const c = a.mapSheetDataOption && a.mapSheetDataOption.outlineLevel ? a.mapSheetDataOption.outlineLevel : "outlineLevel", A = a.mapSheetDataOption && a.mapSheetDataOption.hidden ? a.mapSheetDataOption.hidden : "hidden", F = a.mapSheetDataOption && a.mapSheetDataOption.height ? a.mapSheetDataOption.height : "height", I = a.data.length;
        a.data.forEach((d, O) => {
          if (d.mergeType)
            for (let P = 0; P < d.mergeType.length; P++) {
              const Z = d.mergeType[P], ae = d.mergeStart[P], X = d.mergeValue[T];
              let Q = "";
              Z == "both" ? Q = o[ae] + "" + v + ":" + o[ae + X[1]] + (v + X[0]) : Z == "col" ? Q = o[ae] + "" + v + ":" + o[ae + X[0]] + v : Q = o[ae] + "" + v + ":" + o[ae] + (v + X[0]), pe.push(Q);
            }
          const oe = d.rowStyle, W = '<row r="' + v + '" spans="1:' + k + '" ' + (F in d ? 'ht="' + d[F] + '" customHeight="1"' : "") + (c in d ? ' outlineLevel="' + d[c] + '"' : "") + (A in d ? ' hidden="' + d[A] + '"' : "") + " >";
          R += W;
          let j = "";
          pt.forEach((P, Z) => {
            m && (Z += m);
            const ae = d[P] * 1;
            let X = a.convertStringToNumber && !isNaN(ae) ? ae : d[P], Q = oe;
            if (a.styleCellCondition && typeof a.styleCellCondition == "function" && (Q = a.styleCellCondition(
              X,
              d,
              v,
              Z,
              !1,
              _
            ) || oe), a.mergeRowDataCondition && typeof a.mergeRowDataCondition == "function") {
              let ee = a.mergeRowDataCondition(
                X,
                P,
                Z,
                !1
              );
              const te = o[Z];
              let de = ge[te];
              ee === !0 ? (!de || de && !de.inProgress) && (ge[te] = {
                inProgress: !0,
                start: v
              }) : de && de.inProgress && (pe.push(
                te + de.start + ":" + te + (v - 1)
              ), ge[te] = {
                inProgress: !1,
                start: -1
              });
            }
            typeof X > "u" && (X = "");
            const De = o[Z] + "" + v;
            if (typeof a.commentCondition == "function") {
              const ee = a.commentCondition(
                X,
                d,
                P,
                v,
                Z,
                !1
              );
              ee && (typeof d.comment != "object" && (d.comment = {}), d.comment[P] = ee);
            }
            if (typeof d.comment == "object" && P in d.comment) {
              const ee = d.comment[P];
              Fe = !0;
              const te = Je(
                ee,
                q.commentSyntax.value,
                S
              );
              te.hasAuthor && typeof te.author < "u" && se.push(te.author.toString()), je.push({
                row: v - 1,
                col: Z
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
              const ee = Ze(De, Ct, w);
              ee.needCalcChain && (Se = !0, Pe += ee.chainCell), R += ee.cell, j += ee.cell, delete me[De];
            } else if (typeof X == "string") {
              const ee = '<c r="' + o[Z] + v + '" t="s" ' + (Q && e.styles && e.styles[Q] ? 's="' + e.styles[Q].index + '"' : "") + "><v>" + E + "</v></c>";
              if (j += ee, R += ee, typeof a.multiStyleCondition == "function") {
                const te = a.multiStyleCondition(
                  X,
                  d,
                  P,
                  v,
                  Z,
                  !1
                );
                te && ((!("multiStyleValue" in d) || typeof d.multiStyleValue > "u") && (d.multiStyleValue = {}), d.multiStyleValue[P] = te);
              }
              "multiStyleValue" in d && d.multiStyleValue && P in d.multiStyleValue ? B += et(
                d.multiStyleValue[P],
                X,
                q.commentSyntax.value,
                Q || "",
                a.useSplitBaseOnMatch
              ) : B += "<si><t>" + Ae(X) + "</t></si>", M[X] = X, E++;
            } else {
              const ee = '<c r="' + o[Z] + v + '" ' + (Q && e.styles && e.styles[Q] ? 's="' + e.styles[Q].index + '"' : "") + "><v>" + X + "</v></c>";
              R += ee, j += ee;
            }
          }), I - 1 == O && Object.keys(ge).forEach((P) => {
            ge[P].inProgress && pe.push(
              P + ge[P].start + ":" + P + v
            );
          }), g[v] = {
            startTag: W,
            endTag: "</row>",
            details: j
          }, v++, R += "</row>";
        }), a.sortAndFilter && (a.sortAndFilter.mode == "all" ? fe += '<autoFilter ref="A1:' + o[k - 1] + (v - 1) + '" />' : typeof a.sortAndFilter.ref == "string" && a.sortAndFilter.ref.length > 0 && (fe += '<autoFilter ref="' + a.sortAndFilter.ref + '" />'));
      }
      if (Ve.length > 0 && Ve.forEach((c) => {
        const A = a.shiftLeft ? a.shiftLeft : 0, F = a.headers[c - A], I = o[c];
        me[I + "" + v] = {
          start: a.withoutHeader ? I + "1" : I + "2",
          end: I + "" + (v - 1),
          type: F.formula.type,
          ...F.formula.styleId ? { styleId: F.formula.styleId } : {}
        };
      }), qe.length > 0 && qe.forEach((c) => {
        const A = a.headers[c];
        A.conditionalFormatting && Ye.push({
          ...A.conditionalFormatting,
          start: a.withoutHeader ? o[c] + "1" : o[c] + "2",
          end: o[c] + "" + (v - 1)
        });
      }), me) {
        const c = Object.keys(me).sort(
          (A, F) => A > F ? 1 : -1
        );
        if (c.length) {
          let A = {};
          c.forEach((F) => {
            const I = Ze(
              F,
              me[F],
              w,
              e.styles
            );
            I.needCalcChain && (Se = !0, Pe += I.chainCell), A[I.row] ? A[I.row] += I.cell : A[I.row] = I.cell;
          }), Object.keys(A).forEach((F) => {
            const I = F, d = A[I];
            let O = g[I];
            if (O) {
              const oe = O.startTag + O.details + d + O.endTag;
              let W = new RegExp(O.startTag + "[\\n\\s\\S]*?</row>");
              R = R.replace(W, oe);
            } else
              R += '<row r="' + F + '" spans="1:' + k + '"  >' + d + "</row>", g[I] = {
                startTag: '<row r="' + F + '" spans="1:' + k + '"  >',
                endTag: "</row>",
                details: d
              };
          });
        }
      }
    }
    T > 0 && (K += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (T + 1) + '.xml" />');
    const ht = a.name ? a.name : "sheet" + (T + 1), Nt = a.state ? a.state : "visible";
    Y += '<sheet state="' + Nt + '" name="' + ht + '" sheetId="' + (T + 1) + '" r:id="rId' + (V + 1) + '" />', z += '<Relationship Id="rId' + (V + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (T + 1) + '.xml" />', $ += "<vt:lpstr>" + ("sheet" + (T + 1)) + "</vt:lpstr>", a.selected && (re = !0, J = T);
    const ut = a.sortAndFilter ? 'filterMode="1"' : "";
    let gt = -1;
    ze && await ze.then((k) => {
      let i = k;
      gt = i.ref, C == null || C.file(i.name, i.image);
    });
    let Le = !1, Ge = "", yt = "";
    We && (Le = !0, await We.then((k) => {
      let i = "";
      k.forEach((u, m) => {
        const c = m + 1;
        let A = u.image;
        const F = u.name;
        let I = u.obj.from, d = u.obj.to, O = u.obj.margin;
        u.type;
        let oe = u.obj.type, W = u.obj.extent;
        typeof W > "u" && (W = {
          cx: 2e5,
          cy: 2e5
        });
        let j = {
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
        if (typeof I == "string" && I.length >= 2) {
          let P = we(I, o);
          j.start = {
            ...P
          }, j.end = {
            col: P.col + 1,
            row: P.row + 1
          };
        }
        if (typeof d == "string" && d.length >= 2) {
          let P = we(d, o);
          P.row += 1, P.col += 1, j.end = {
            ...P
          };
        }
        j.end.mR = 0, j.end.mB = 0, j.start.mL = 0, j.start.mT = 0, O && ((O.all || O.right) && (j.end.mR = O.all || O.right), (O.all || O.bottom) && (j.end.mB = O.all || O.bottom), (O.all || O.left) && (j.start.mL = O.all || O.left), (O.all || O.top) && (j.start.mT = O.all || O.top)), oe == "one" ? Ge += "<xdr:oneCellAnchor><xdr:from><xdr:col>" + j.start.col + "</xdr:col><xdr:colOff>" + j.start.mT + "</xdr:colOff><xdr:row>" + j.start.row + "</xdr:row><xdr:rowOff>" + j.start.mL + '</xdr:rowOff></xdr:from><xdr:ext cx="' + W.cx + '" cy="' + W.cy + '"/><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="' + c + '" name="Picture ' + c + '"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize="0" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' + c + '"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst="rect"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:oneCellAnchor>' : Ge += '<xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>' + j.start.col + "</xdr:col><xdr:colOff>" + j.start.mT + "</xdr:colOff><xdr:row>" + j.start.row + "</xdr:row><xdr:rowOff>" + j.start.mL + "</xdr:rowOff></xdr:from><xdr:to><xdr:col>" + j.end.col + "</xdr:col><xdr:colOff>" + j.end.mB + "</xdr:colOff><xdr:row>" + j.end.row + "</xdr:row><xdr:rowOff>" + j.end.mR + '</xdr:rowOff></xdr:to><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="' + c + '" name="Picture ' + c + '"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize="0" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' + c + '"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst="rect"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:twoCellAnchor>', C == null || C.file(F, A), i += '<Relationship Id="rId' + c + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/' + F + '" />';
      }), yt = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` + i + "</Relationships>";
    })), pe = [...new Set(pe)];
    let xt = "", be = 1;
    Ye.length > 0 && (xt = Ye.reduce((k, i) => {
      if (i.type == "cells")
        return i.operator == "ct" ? k + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="containsText" dxfId="' + (i.styleId && D[i.styleId] ? D[i.styleId] : 0) + '" priority="' + (i.priority ? i.priority : be++) + '"  operator="containsText" text="' + i.value + '"><formula>NOT(ISERROR(SEARCH("' + i.value + '",' + i.start + ")))</formula></cfRule></conditionalFormatting>" : typeof i.operator > "u" || typeof l[i.operator] > "u" ? k : k + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="cellIs" dxfId="' + (i.styleId && typeof D[i.styleId] < "u" ? D[i.styleId] : 0) + '" priority="' + (i.priority ? i.priority : be++) + '" operator="' + l[i.operator] + '">' + (Array.isArray(i.value) ? i.value.reduce((u, m) => u + "<formula>" + m.value + "</formula>", "") : "<formula>" + i.value + "</formula>") + "</cfRule></conditionalFormatting>";
      if (i.type == "top")
        return k + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="' + (i.operator ? "aboveAverage" : "top10") + '" dxfId="' + (i.styleId && typeof D[i.styleId] < "u" ? D[i.styleId] : 0) + '" priority="' + (i.priority ? i.priority : be++) + '" ' + (i.bottom ? 'bottom="1"' : "") + " " + (i.percent ? 'percent="1"' : "") + '  rank="' + i.value + '" ' + (i.operator == "belowAverage" ? 'aboveAverage="0"' : "") + "/></conditionalFormatting>";
      if (i.type == "iconSet") {
        let u = "";
        return typeof i.operator > "u" ? k : (i.operator.indexOf("5") == 0 ? u = '<cfvo type="percent" val="0"/><cfvo type="percent" val="20"/><cfvo type="percent" val="40"/><cfvo type="percent" val="60"/><cfvo type="percent" val="80"/>' : i.operator.indexOf("4") == 0 ? u = '<cfvo type="percent" val="0"/><cfvo type="percent" val="25"/><cfvo type="percent" val="50"/><cfvo type="percent" val="75"/>' : u = '<cfvo type="percent" val="0"/><cfvo type="percent" val="33"/><cfvo type="percent" val="67"/>', k + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="iconSet" priority="' + (i.priority ? i.priority : be++) + '"><iconSet iconSet="' + i.operator + '">' + u + "</iconSet></cfRule></conditionalFormatting>");
      } else
        return i.type == "colorScale" ? k + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="colorScale" priority="' + (i.priority ? i.priority : be++) + '"><colorScale><cfvo type="min"/>' + (i.operator == "percentile" ? '<cfvo type="percentile" val="' + i.value + '"/>' : "") + '<cfvo type="max"/>' + (i.colors && Array.isArray(i.colors) ? i.colors.reduce((u, m) => u + '<color rgb="' + ce(m, r) + '"/>', "") : '<color rgb="FFF8696B"/><color rgb="FFFFEB84"/><color rgb="FF63BE7B"/>') + "</colorScale></cfRule></conditionalFormatting>" : i.type == "dataBar" ? k + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="dataBar" priority="' + (i.priority ? i.priority : be++) + '"><dataBar><cfvo type="min"/><cfvo type="max"/>' + (i.colors && Array.isArray(i.colors) ? i.colors.reduce((u, m) => u + '<color rgb="' + ce(m, r) + '"/>', "") : '<color rgb="FF638EC6"/>') + "</dataBar></cfRule></conditionalFormatting>" : k;
    }, "")), (Ke || Fe || Le) && y == null && (y = n == null ? void 0 : n.folder("drawings")), Le && N == null && (N = y == null ? void 0 : y.folder("_rels")), H["sheet" + (T + 1)] = {
      indexId: V + 1,
      key: "sheet" + (T + 1),
      sheetName: ht,
      sheetDataTableColumns: b,
      backgroundImageRef: gt,
      sheetDimensions: G,
      asTable: ne || !1,
      sheetDataString: R,
      sheetBreakLine: Ue,
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
      protectionOption: a.protectionOption ? Object.keys(a.protectionOption).reduce((k, i) => k + " " + i + '="' + a.protectionOption[i] + '" ', "<sheetProtection ") + "/>" : "",
      merges: pe.length > 0 ? pe.reduce((k, i) => k + ' <mergeCell ref="' + i + '" />', '<mergeCells count="' + pe.length + '">') + " </mergeCells>" : "",
      selectedView: !!a.selected,
      // ? "<sheetViews>" +
      //   '<sheetView tabSelected="1" workbookViewId="0">' +
      //   '<selection activeCell="A0" sqref="A0" />' +
      //   "</sheetView>" +
      //   "</sheetViews>"
      // : "<sheetViews>" + '<sheetView workbookViewId="0" />' + "</sheetViews>"
      sheetSortFilter: fe,
      tabColor: a.tabColor ? '<sheetPr codeName="' + ("Sheet" + (T + 1)) + '" ' + ut + ' ><tabColor rgb="' + a.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + ut + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, V++;
  }
  Se && (V++, z += '<Relationship Id="rId' + V + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain" Target="calcChain.xml"/>', n == null || n.file(
    "calcChain.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<calcChain xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">` + Pe + "</calcChain>"
  ));
  let $t = Object.keys(H), Ne = p.folder("_rels");
  Ne == null || Ne.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  let xe = p.folder("docProps");
  xe == null || xe.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), xe == null || xe.file("app.xml", zt(x, $)), n == null || n.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr />` + (re ? '<bookViews><workbookView xWindow="3540" yWindow="1365" windowWidth="21600" windowHeight="11325" activeTab="' + J + '"/></bookViews>' : "") + " <sheets>  " + Y + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), n == null || n.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (E - 1) + '" uniqueCount="' + Object.keys(M).length + '"> ' + B + "</sst>"
  );
  let Be = n == null ? void 0 : n.folder("_rels");
  Be == null || Be.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + z + " </Relationships>"
  );
  let Me = n == null ? void 0 : n.folder("theme");
  Me == null || Me.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/></a:theme>`
  );
  let Ce = n == null ? void 0 : n.folder("worksheets"), at = [], it = [], Ee = [];
  if ($t.forEach((T, a) => {
    const w = H[T];
    let g = "";
    const G = w.sheetDataTableColumns;
    if (G.length > 0) {
      it.push("table" + (a + 1) + ".xml");
      const b = w.asTable, v = w.sheetDimensions;
      ke == null || ke.file(
        "table" + (a + 1) + ".xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="xr xr3" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" id="` + (a + 1) + '"  name="Table' + (a + 1) + '" displayName="Table' + (a + 1) + '" ref="' + v.start + ":" + v.end + '" totalsRowShown="0"><autoFilter ref="' + v.start + ":" + v.end + '"/>' + G + '<tableStyleInfo name="TableStyle' + (b.type ? b.type : "Medium") + (b.styleNumber ? b.styleNumber : 2) + '" showFirstColumn="' + (b.firstColumn ? b.firstColumn : "0") + '" showLastColumn="' + (b.lastColumn ? b.lastColumn : "0") + '" showRowStripes="' + (b.rowStripes ? b.rowStripes : "1") + '" showColumnStripes="' + (b.columnStripes ? b.columnStripes : "0") + '"/></table>'
      ), g += '<Relationship Id="rId15" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/table" Target="../tables/table' + (a + 1) + '.xml"/>';
    }
    if (w.hasImages) {
      const b = "drawing" + (Ee.length + 1) + ".xml";
      Ee.push(b), y == null || y.file(
        b,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"  xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex"  xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"  xmlns:dgm="http://schemas.openxmlformats.org/drawingml/2006/diagram"  xmlns:x3Unk="http://schemas.microsoft.com/office/drawing/2010/slicer"  xmlns:sle15="http://schemas.microsoft.com/office/drawing/2012/slicer">` + w.drawersContent + "</xdr:wsDr>"
      ), N == null || N.file(
        b + ".rels",
        w.drawersRels.toString()
      ), g += '<Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"  Target="../drawings/' + b + '" />';
    } else if (w.hasCheckbox) {
      const b = "drawing" + (Ee.length + 1) + ".xml";
      Ee.push(b), y == null || y.file(
        b,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"
    xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
    xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
    xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"
    xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex"
    xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:dgm="http://schemas.openxmlformats.org/drawingml/2006/diagram"
    xmlns:x3Unk="http://schemas.microsoft.com/office/drawing/2010/slicer"
    xmlns:sle15="http://schemas.microsoft.com/office/drawing/2012/slicer"
>
${w.checkboxDrawingContent}
</xdr:wsDr>`
      ), g += `<Relationship Id="rId3"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing"
        Target="../drawings/vmlDrawing${a + 1}.vml" />
        <Relationship Id="rId2"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"
        Target="../drawings/${b}" />`, g += w.formRel, y == null || y.file(
        "vmlDrawing" + (a + 1) + ".vml",
        `<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout>${Ht.checkbox}${w.checkboxShape}
 </xml>`
      );
    }
    if (w.hasComment) {
      at.push(a + 1);
      let b = w.commentAuthor;
      n == null || n.file(
        "comments" + (a + 1) + ".xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><authors>` + (Array.isArray(b) && b.length > 0 ? b.reduce(
          (v, R) => v + "<author>" + R + "</author>",
          ""
        ) : "<author></author>") + "</authors><commentList>" + w.commentString + "</commentList></comments>"
      ), g += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments" Target="../comments' + (a + 1) + '.xml" /><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing" Target="../drawings/vmlDrawing' + (a + 1) + '.vml" />', y == null || y.file(
        "vmlDrawing" + (a + 1) + ".vml",
        '<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">  <o:shapelayout v:ext="edit">    <o:idmap v:ext="edit" data="1"/>  </o:shapelayout>  <v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"     path="m,l,21600r21600,l21600,xe">    <v:stroke joinstyle="miter"/>    <v:path gradientshapeok="t" o:connecttype="rect"/>  </v:shapetype>' + w.shapeCommentRowCol.reduce((v, R) => v + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;margin-left:77.25pt;margin-top:23.25pt;width:264pt;height:42.75pt;z-index:1;visibility:hidden' fillcolor="#ffffe1">  <v:fill color2="#ffffe1"/>  <v:shadow on="t" color="black" obscured="t"/>  <v:path o:connecttype="none"/>  <v:textbox>   <div style='text-align:left'></div>  </v:textbox>  <x:ClientData ObjectType="Note">   <x:MoveWithCells/>   <x:SizeWithCells/>   <x:Anchor>    1, 15, 1, 10, 5, 15, 4, 4</x:Anchor>   <x:AutoFill>False</x:AutoFill>   <x:Row>` + R.row + "</x:Row>   <x:Column>" + R.col + "</x:Column>  </x:ClientData></v:shape>", "") + "</xml>"
      );
    }
    if (w.backgroundImageRef > 0 && (g += '<Relationship Id="rId16" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image' + w.backgroundImageRef + '.png"/>'), w.hasImages || w.hasComment || w.hasCheckbox || G.length > 0) {
      const b = Ce == null ? void 0 : Ce.folder("_rels");
      b == null || b.file(
        "sheet" + (a + 1) + ".xml.rels",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> ` + g + "</Relationships>"
      );
    }
    let ne = "";
    w.selectedView || w.splitOption ? ne = '<sheetViews><sheetView tabSelected="1"' + w.sheetViewProperties + (w.viewType.length > 0 ? ' view="' + w.viewType + '"' : "") + ' workbookViewId="0">' + w.splitOption + (w.selectedView ? '<selection activeCell="A0" sqref="A0" />' : "") + "</sheetView></sheetViews>" : ne = '<sheetViews><sheetView workbookViewId="0"' + w.sheetViewProperties + (w.viewType.length > 0 ? ' view="' + w.viewType + '"' : "") + "/></sheetViews>", Ce == null || Ce.file(
      w.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + w.tabColor + ne + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + w.sheetSizeString + "<sheetData>" + w.sheetDataString + "</sheetData>" + w.protectionOption + w.sheetSortFilter + w.merges + w.cFDataString + (w.hasImages || w.hasCheckbox ? '<drawing r:id="rId2" />' : "") + (w.hasComment || w.hasCheckbox ? '<legacyDrawing r:id="rId3" />' : "") + (w.hasCheckbox ? `<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">
        <mc:Choice Requires="x14">
            <controls>
                ${w.checkboxSheetContent}
</controls>
 </mc:Choice>
</mc:AlternateContent>` : "") + w.sheetMargin + (w.isPortrait || w.sheetBreakLine.length > 0 ? '<pageSetup orientation="portrait" r:id="rId' + (a + 1) + '"/>' : "") + w.sheetBreakLine + w.sheetHeaderFooter + (w.backgroundImageRef > 0 ? '<picture r:id="rId16"/>' : "") + (G.length > 0 ? '<tableParts count="1"> <tablePart r:id="rId15"/></tableParts>' : "") + "</worksheet>"
    );
  }), ye.length > 0) {
    let T = n == null ? void 0 : n.folder("ctrlProps");
    ye.forEach((a, w) => {
      T == null || T.file("ctrlProp" + (w + 1) + ".xml", a);
    });
  }
  if (p.file(
    "[Content_Types].xml",
    Ut(
      K,
      at,
      [...new Set(U)],
      Ee,
      ye,
      Se,
      it
    )
  ), r)
    return p.generateAsync({
      type: e.generateType ? e.generateType : "nodebuffer"
    }).then((T) => T);
  if (e.notSave)
    return p.generateAsync({ type: "blob" }).then((T) => T.slice(
      0,
      T.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  p.generateAsync({ type: "blob" }).then(function(T) {
    import("./FileSaver.min-3b84b3f2.mjs").then((a) => a.F).then((a) => {
      const { saveAs: w } = a;
      w(
        T,
        (e.fileName ? e.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function Qt(e) {
  return /t="s".*?<v/.test(e);
}
function eo(e) {
  const t = /<t.*?>(.*?)<\/t>/, r = e.match(t);
  return r ? r[1] : null;
}
function to(e) {
  const t = /<v.*?>(.*?)<\/v>/, r = e.match(t);
  return r ? r[1] : null;
}
function oo(e) {
  const t = /r="(.*?)"/, r = e.match(t);
  return r ? r[1] : null;
}
async function ro(e, t = !1, r) {
  let l, o = !1;
  typeof r == "function" ? (l = r, o = !0) : l = fetch;
  let s = [], h = /* @__PURE__ */ new Map(), p = [], x = {}, n = !1;
  function C(y, N) {
    let _ = [], S = N.match(/<c[\s\S\n]*?<\/c>/g);
    if (Array.isArray(S) && S.forEach((f) => {
      let L = to(f);
      Qt(f) && L && (L = p[parseInt(L)]);
      const D = oo(f);
      let q = we(D, At);
      typeof _[q.row] > "u" && (_[q.row] = []), _[q.row][q.col] = L;
    }), y.indexOf("xl/worksheets/sheet") == 0) {
      let f = y.substring(14, y.lastIndexOf("."));
      h.has(f) && (f = h.get(f)), x[f] = _;
    }
  }
  return await l(e).then((y) => {
    if (y == null || y == null)
      throw "response is null";
    return o ? y : t ? y.arrayBuffer() : y.blob();
  }).then(async (y) => {
    const _ = (await import("./jszip.min-e651e8fb.mjs").then((f) => f.j)).default;
    let S = 0;
    return await new Promise((f, L) => {
      _.loadAsync(y).then(function(D) {
        const q = Object.keys(D.files);
        S = q.length;
        let K = new Proxy(
          {
            counter: 0,
            isNameSet: !1
          },
          {
            set(B, E, Y) {
              if (E === "isNameSet")
                return B.isNameSet = Y, !0;
              if (typeof Y != "number")
                throw "value most be number";
              return B.counter = Y, B.isNameSet && B.counter === S && f({
                data: x,
                sheetName: h.entries()
              }), !0;
            },
            get(B, E, Y) {
              return E === "isNameSet" ? B.isNameSet : B.counter;
            }
          }
        );
        q.forEach(function(B) {
          D.files[B].async("string").then(function(E) {
            if (B.indexOf("sharedStrings") >= 0) {
              let Y = E.match(/<si[\s\S\n]*?<\/si>/g);
              Array.isArray(Y) && Y.forEach((z) => {
                let M = z.match(/<t[\s\S\n]*?<\/t>/g);
                if (Array.isArray(M)) {
                  let H = M.reduce(($, V) => $ + eo(V), "");
                  p.push(H);
                }
              }), n = !0, s.length > 0 && (s.forEach((z) => {
                C(z.filename, z.fileData);
              }), s = []);
            }
            B.indexOf("sheet") >= 0 && (n ? C(B, E) : s.push({
              filename: B,
              fileData: E
            })), B.indexOf("workbook") >= 0 && (E.replace(
              /(.*[\n\s\S]*)(<sheets[\n\s\S]*?sheets>)(.*[\n\s\S]*)/,
              "$2"
            ).split("<sheet ").slice(1).forEach((M, H) => {
              let $ = "Sheet 1";
              M.indexOf("name=") > 0 && ($ = M.replace(
                /(.*[\n\s\S]*?)name="([^"]*)"(.*[\n\s\S]*)/,
                "$2"
              ));
              let V = H + 1;
              M.indexOf("sheetId=") > 0 && (V = Number(
                M.replace(
                  /(.*[\n\s\S]*?)sheetId="([^"]*)"(.*[\n\s\S]*)/,
                  "$2"
                )
              ), isNaN(V) && (V = H + 1)), h.set("sheet" + V, $);
            }), K.isNameSet = !0), K.counter++;
          });
        });
      });
    });
  }).catch((y) => {
    throw y;
  });
}
function no(e) {
  const t = e.length;
  let r = 0, l = {}, o = {}, s = {};
  for (let n = 0; n < t; n++) {
    const C = e[n], y = C.length;
    let N = {};
    for (let _ = 0; _ < y; _++) {
      r++;
      const S = C[_];
      let f;
      S.sheetName ? f = S.sheetName : f = "Sheet 1", f in l || (l[f] = {
        headers: [],
        data: [],
        labelCounter: 0,
        seenAt: n
      }), f in o || (o[f] = {
        index: n,
        value: 0
      }), f in s || (l[f].labelCounter = 0, s[f] = !0);
      let L = [];
      const D = l[f].headers.length;
      let q = {}, K = l[f].seenAt == n, B = S.headers.reduce((M, H, $) => (l[f].labelCounter++, D < l[f].labelCounter && L.push({
        label: "c" + l[f].labelCounter,
        text: K ? H.text : ""
      }), q["c" + l[f].labelCounter] = H.text, {
        ...M,
        [H.label]: "c" + l[f].labelCounter
      }), {});
      if (l[f].headers.push(...L), S.spaceX)
        for (let M = 0; M < S.spaceX; M++)
          l[f].labelCounter++, D <= l[f].labelCounter && l[f].headers.push({
            label: "c" + l[f].labelCounter,
            text: ""
          });
      o[f].index + 1 == n && (N[f] = o[f].value);
      let E = N[f] || 0;
      E > 0 && (!l[f].headerIndex || l[f].headerIndex && l[f].headerIndex != E ? l[f].data.push(q) : l[f].data[E] = {
        ...l[f].data[E],
        ...q
      }, l[f].headerIndex = E, E++);
      let Y = Object.keys(B), z = S.data.length >= l[f].data.length;
      if (l[f].data = S.data.reduce((M, H, $) => {
        let V = {};
        return M.length > $ + E ? V = M[$ + E] : M.push(V), Y.forEach((re) => {
          let J = B[re];
          V[J] = H[re] ? H[re] : "";
        }), V.tableIndex = r, V.tableStringIndex = $ + "," + _, M[$ + E] = V, M;
      }, l[f].data), z && S.spaceY) {
        const M = l[f].headers.length;
        for (let H = 0; H < S.spaceY; H++) {
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
        index: n
      };
    }
    s = {};
  }
  let h = Object.keys(l), p = [];
  return h.reduce(
    (n, C) => {
      let y = l[C];
      return n.sheet.push({
        ...y,
        name: C
      }), n;
    },
    { sheet: p }
  );
}
function tt(e) {
  return /^[A-Z]+[1-9][1-9]*$/.test(e);
}
const lo = {
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
    validateFunction(e, t, r, l) {
      return t.rtl && t.ltr && l && console.warn("Alignment-rtl and ltr cannot be used together."), (t.readingOrder && t.ltr || t.readingOrder && t.rtl) && l && console.warn(
        "Alignment-readingOrder cannot be used with rtl or ltr."
      ), !0;
    }
  },
  border: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(e, t, r, l) {
      const o = ["full", "top", "left", "right", "bottom"], s = [
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
      return Object.keys(t).forEach((p) => {
        const x = p;
        if (o.indexOf(x) < 0)
          throw 'border-The type of border is not valid. Valid options include "full," "top," "left," "right," and "bottom."';
        const n = t[x];
        if (!("color" in n))
          throw "border-The border must have a color.";
        if (!("style" in n))
          throw "border-The border needs a style.";
        if (typeof n.style == "string" && s.indexOf(n.style) < 0)
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
}, ao = {
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
}, io = {
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
    validateFunction(e, t, r, l) {
      const o = Object.keys(t), s = ["outlineLevel", "hidden", "height"];
      return o.forEach((h) => {
        s.indexOf(h) < 0 && l && console.warn(
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
    validateFunction(e, t, r, l) {
      if (Array.isArray(t))
        t.forEach((o) => {
          if (o.type == "cells") {
            const s = ["lt", "gt", "between", "ct", "eq"];
            if (!o.operator || !o.start || !o.end || typeof o.value > "u")
              throw {
                record: o,
                error: "The object is not complete; you need to fill in the values for operator, start, end and value."
              };
            if (s.indexOf(o.operator) < 0)
              throw { record: o, error: "The operator is not valid." };
          } else if (o.type == "top") {
            const s = ["belowAverage", "aboveAverage"];
            if (!o.start || !o.end || typeof o.value > "u")
              throw {
                record: o,
                error: "The object is not complete; you need to fill in the values for start, end and value."
              };
            if (o.operator && s.indexOf(o.operator) < 0)
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
    validateFunction(e, t, r, l) {
      if (Array.isArray(t)) {
        const o = ["one", "two"];
        t.forEach((s) => {
          if (s.to && !tt(s.to))
            throw 'value of "to" is not valid.';
          if (s.from && !tt(s.from))
            throw 'value of "from" is not valid.';
          if (o.indexOf(s.type) < 0)
            throw 'Type of "type" is not valid in the "images" property.';
          if (s.type == "two" && !s.to)
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
    validateFunction(e, t, r, l) {
      if (Array.isArray(t)) {
        let o = [];
        if (t.forEach((s) => {
          /^[A-Z]+[1-9][1-9]*:[A-Z]+[1-9][1-9]*$/.test(s) || o.push(
            "The " + s + ' reference is not valid in the "merges" property.'
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
    validateFunction(e, t, r, l) {
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
    validateFunction(e, t, r, l) {
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
      ], s = ["0", "1", 0, 1];
      return Object.keys(t).forEach((p) => {
        const x = t[p];
        if (o.indexOf(p) < 0)
          throw '"' + p + '" is not valid.';
        if (s.indexOf(x) < 0)
          throw 'value of "' + p + '" is not valid';
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
    validateFunction(e, t, r, l) {
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
    validateFunction(e, t, r, l) {
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
function jt(e, t = !0, r = !0) {
  Object.keys(e).forEach((o) => {
    const s = e[o], h = Object.keys(s);
    if (s.format && !_t[s.format])
      throw 'The "' + s.format + '" format that has been used is not defined.';
    s.underline && s.doubleUnderline, h.forEach((p) => {
      let x = s[p];
      const n = lo[p];
      if (rt(x, n, p, t, r))
        return !0;
    });
  });
}
function Lt(e, t = !0, r = !0) {
  Array.isArray(e) || (e = [e]), e.forEach((l) => {
    Object.keys(l).forEach((s) => {
      const h = l[s], p = io[s];
      rt(h, p, s, t, r);
    });
  });
}
function so(e, t = !0, r = !0) {
  Object.keys(e).forEach((o) => {
    let s = e[o];
    const h = ao[o];
    if (rt(s, h, o, t, r))
      if (o == "sheet")
        if (Array.isArray(s))
          Lt(s);
        else
          throw "Sheet must be Array.";
      else
        o == "styles" && jt(s);
  });
}
function rt(e, t, r, l, o) {
  if (t) {
    if (typeof e != t.type) {
      if (t.type == "object" || t.type == "string" || l)
        throw 'The Type of The "' + r + '" is not valid';
      o && console.warn("The property type must be " + t.type);
    }
    if (t.isEnum && t.enum.indexOf(e) < 0)
      throw 'The value of "' + r + '" must be ' + JSON.stringify(t.enum);
    if (t.min && e < t.min)
      throw 'The value of "' + r + '" must be higher than ' + t.min;
    if (t.notEmpty && (!e || e.length <= 0))
      throw 'The value of "' + r + '" must not be empty.';
    if (t.isArray && !Array.isArray(e))
      throw 'The value of "' + r + '" should be an array.';
    return typeof t.validateFunction == "function" && t.validateFunction(r, e, l, o), !0;
  } else
    return o && console.warn(
      'The Schema Object does not include the "' + r + '" property.'
    ), !1;
}
const co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  validateExcelTableObjectFunction: so,
  validateSheetArrayFunction: Lt,
  validateStyleObjectFunction: jt
}, Symbol.toStringTag, { value: "Module" })), nt = Jt, fo = Pt, mo = Xt;
function po(e, t, r, l, o) {
  const s = Vt(
    e,
    t,
    r,
    l,
    o
  );
  return nt(s);
}
function ho(e) {
  const t = no(e);
  return nt(t);
}
async function uo(e, t, r) {
  return nt(await Kt(e, t, r));
}
const go = ro;
export {
  co as Validator,
  mo as addGlobalOptionFromExcelTable,
  fo as addGlobalOptions,
  po as convertTableToExcel,
  go as extractExcelData,
  nt as generateExcel,
  ho as sideBySideLineByLine,
  uo as themeBaseGenerate
};
