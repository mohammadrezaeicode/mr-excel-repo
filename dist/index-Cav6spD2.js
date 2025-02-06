function Rt(e) {
  return e.replace(/ /g, "");
}
function Dt(e) {
  if (e = e.replace(/^#/, ""), e.length == 3) {
    const t = e.charAt(0), r = e.charAt(1), o = e.charAt(2);
    return t + t + r + r + o + o;
  } else
    return e;
}
function Yt(e) {
  /^#?([a-f\d]{3})$/i.test(e) && (e = Dt(e));
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? [
    parseInt(t[1], 16),
    parseInt(t[2], 16),
    parseInt(t[3], 16)
  ] : [0, 0, 0];
}
function kt(e) {
  const t = Yt(e);
  return t == null ? void 0 : (0.299 * t[0] + 0.587 * t[1] + 0.114 * t[2]) / 255 > 0.5 ? "rgb(0,0,0)" : "rgb(255,255,255)";
}
function Ot(e) {
  /^#?([a-f\d]{3})$/i.test(e) && (e = Dt(e));
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? "rgb(" + (255 - parseInt(t[1], 16)) + "," + (255 - parseInt(t[2], 16)) + "," + (255 - parseInt(t[3], 16)) + ")" : "rgb(0,0,0)";
}
function et(e) {
  e = Number(e);
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}
function me(e) {
  e = Rt(e);
  let t = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), r = t.reduce((o, n) => o && !Number.isNaN(Number(n)), !0);
  return t.length == 4 && t[3] == "0" || t.length != 3 && t.length != 4 || !r ? null : (et(t[0]) + et(t[1]) + et(t[2])).toUpperCase();
}
function he(e, t) {
  if (typeof e > "u" || e === null)
    return null;
  if (!t) {
    let r = Rt(e);
    r.indexOf("var(") == 0 && r.lastIndexOf(")") == r.length - 1 && (r = r.substring(4, r.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      r
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const r = me(e);
    e = r || "";
  }
  return e.replace(/^#/, "");
}
function Vt(e) {
  let t = "";
  return e.indexOf("_") > 0 ? e.replace(/[a-z]/g, "").length == e.length ? t = e.split(/_/).reduce((r, o) => r + o.charAt(0) + o.substring(1).toLowerCase() + " ", "").trim() : t = e.replace(/_/g, " ").trim() : (t = e.replace(/([A-Z])/g, " $1").trim(), t = t.charAt(0).toUpperCase() + t.substring(1).trim()), t;
}
function Ft(e, t) {
  let r = Object.keys(e).filter((l) => !t.includes(l)), o = [];
  return r.reduce((l, g) => (l.push({
    label: g,
    text: Vt(g)
  }), l), o);
}
const tt = {
  fileName: "MR-Excel",
  headerBackgroundColor: "#393E46",
  headerColor: "#EEEEEE",
  negativeColor: !1,
  rowBackgroundColor: "#EEEEEE",
  rowColor: "#393E46",
  filterKeys: []
}, zt = function(e, t = {
  ...tt
}) {
  let r;
  if (typeof e == "object" && Array.isArray(e))
    if (e.length > 0)
      if (Array.isArray(e[0])) {
        let m = [];
        for (let s = 0; s < e.length; s++) {
          const f = e[s];
          if (f.length > 0) {
            const v = Ft(
              f[0],
              Array.isArray(t.filterKeys) ? t.filterKeys : []
            );
            m.push({
              headers: v,
              data: f
            });
          }
        }
        r = {
          sheet: m
        };
      } else
        e.length > 0 ? r = {
          sheet: [
            {
              headers: Ft(
                e[0],
                Array.isArray(t.filterKeys) ? t.filterKeys : []
              ),
              data: e
            }
          ]
        } : r = {
          sheet: []
        };
    else
      r = {
        sheet: []
      };
  else
    r = e;
  let o = t && t.headerBackgroundColor ? t.headerBackgroundColor : tt.headerBackgroundColor, n = t && t.rowBackgroundColor ? t.rowBackgroundColor : tt.rowBackgroundColor, l = t && t.negativeColor ? Ot(o) : t && t.headerColor ? t.headerColor : kt(o), g = t && t.negativeColor ? Ot(n) : t && t.rowColor ? t.rowColor : kt(n);
  typeof r.styles > "u" && (r.styles = {}), r.styles.themeStyleHeader = {
    backgroundColor: o,
    color: l
  }, r.styles.themeStyleBody = {
    backgroundColor: n,
    color: g
  };
  const u = r.sheet.length;
  for (let m = 0; m < u; m++)
    r.sheet[m].styleCellCondition = function(s, f, v, D, j, S) {
      return j ? "themeStyleHeader" : "themeStyleBody";
    };
  return typeof (t == null ? void 0 : t.fileName) == "string" && (r.fileName = t.fileName), r;
};
async function po(e, t, r) {
  let o = {};
  const l = (await import("./jszip.min-D-TEDr9v.js").then((m) => m.j)).default;
  let g;
  if (typeof e == "string" && e.length) {
    let m, s = !1;
    typeof (r == null ? void 0 : r.fetch) == "function" ? (m = r == null ? void 0 : r.fetch, s = !0) : m = fetch, g = await m(e).then((f) => {
      if (f == null || f == null)
        throw "response is null";
      return s ? f : r != null && r.backend ? f.arrayBuffer() : f.blob();
    });
  } else
    g = r == null ? void 0 : r.data;
  let u = await l.loadAsync(g).then(async function(m) {
    let s = Object.keys(m.files).filter(
      (f) => f.indexOf("xl/worksheets/") == 0 && f.length - 4 == f.lastIndexOf(".xml") || f == "xl/sharedStrings.xml"
    );
    for (let f = 0; f < s.length; f++) {
      const v = s[f];
      await m.files[v].async("string").then((D) => {
        let j = D;
        Object.keys(t).forEach((S) => {
          var d;
          j = j.replace(
            new RegExp("{{" + S + "}}", "g"),
            (d = t[S]) == null ? void 0 : d.toString()
          );
        }), o[v] = j;
      });
    }
    return m;
  });
  if (Object.keys(o).forEach((m) => {
    u.file(m, o[m]);
  }), r != null && r.backend)
    return u.generateAsync({
      type: r.generateType ? r.generateType : "nodebuffer"
    }).then((m) => m);
  if (r != null && r.notSave)
    return u.generateAsync({ type: "blob" }).then((m) => m.slice(
      0,
      m.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  {
    let m = await u.generateAsync({ type: "blob" });
    (await import("./FileSaver.min-BEH1o5YI.js").then((f) => f.F)).saveAs(
      m,
      (r != null && r.fileName ? r == null ? void 0 : r.fileName : "tableRecord") + ".xlsx"
    );
  }
}
function Ut(e, t, r, o, n, l, g, u) {
  let m = [], s = "both", f = [];
  !t || t === 0 ? (t = 1, s = "col") : f.push(t - 1), !e || e === 0 ? (e = 0, s = "row") : f.push(e - 1);
  let v = n || {};
  v.mergeType = u && u.mergeType ? [...u.mergeType, s] : [s], v.mergeValue = u && u.mergeValue ? [...u.mergeValue, f] : [f], v.mergeStart = u && u.mergeStart ? [...u.mergeStart, r] : [r];
  for (let D = 0; D < t; D++) {
    let j = e;
    for (let S = 0; S < o; S++)
      r <= S ? j >= 1 ? (v["c" + S] = l, l = "", g += "*", j--) : t >= 2 && r == S ? (v["c" + S] = l, l = "", g += "+") : g += "-" : D > 0 && (g += "-");
    m.push({
      ...v,
      mergeString: g
    }), v = {}, g = "";
  }
  return m;
}
function Wt(e, t, r, o, n) {
  var v;
  if (!e && !t)
    throw "Error: One of the function inputs is required.";
  let l;
  e ? l = (v = document.querySelector(e)) == null ? void 0 : v.querySelectorAll("tr") : l = t == null ? void 0 : t.querySelectorAll("tr");
  let g = [], u = [], m = {
    header: {},
    rows: []
  }, s = 40;
  if (l) {
    let D = !1, j = 0;
    l.forEach((S, d) => {
      var G = [].slice.call(S.children);
      const z = window.getComputedStyle(S, null);
      let Z = me(z.backgroundColor);
      if (!D)
        j = G.length, D = !0, typeof o == "function" ? s = o(
          Number(z.height.substring(0, z.height.length - 2)),
          d,
          !0
        ) : s = Number(
          z.height.substring(0, z.height.length - 2)
        ), G.forEach((N, oe) => {
          let P = window.getComputedStyle(N, null), B = null;
          if (P.borderBottomWidth !== "0px") {
            const U = me(P.borderBottomColor);
            U && (B || (B = {}), B.bottom = {
              style: "thin",
              color: U
            });
          }
          if (P.borderTopWidth !== "0px") {
            const U = me(P.borderTopColor);
            U && (B || (B = {}), B.top = {
              style: "thin",
              color: U
            });
          }
          if (P.borderLeftWidth !== "0px") {
            const U = me(P.borderLeftColor);
            U && (B || (B = {}), B.left = {
              style: "thin",
              color: U
            });
          }
          if (P.borderRightWidth !== "0px") {
            const U = me(P.borderRightColor);
            U && (B || (B = {}), B.right = {
              style: "thin",
              color: U
            });
          }
          let X = me(P.backgroundColor);
          !X && Z && (X = Z);
          const K = parseInt(
            P.fontSize.substring(0, P.fontSize.indexOf("p"))
          );
          let L = {
            ...X ? { backgroundColor: X } : {},
            bold: parseInt(P.fontWeight) > 500,
            ...isNaN(K) ? {} : { size: K },
            ...B ? { border: B } : {},
            alignment: {
              ...typeof P.textAlign == "string" && P.textAlign.length > 0 ? { horizontal: P.textAlign } : {},
              vertical: "center",
              ...P.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          m.header[d + "-" + oe] = L;
          let E;
          typeof n == "function" ? E = n(
            Number(P.width.substring(0, P.width.length - 2)),
            oe
          ) : E = Number(P.width.substring(0, P.width.length - 2)) * 0.15;
          const $ = N.getAttribute("colspan"), q = N.getAttribute("rowspan");
          g.push({
            label: "c" + oe,
            ...$ ? { colspan: $ } : {},
            ...q ? { rowspan: q } : {},
            text: N.textContent,
            ...isNaN(E) || E <= 0 ? {} : { size: E }
          });
        });
      else {
        let N = {}, oe = "", P = !1;
        u.length >= d && (N = u[d - 1], oe = "mergeString" in N ? N.mergeString : "", P = !0);
        let B = 0;
        G.forEach((X, K) => {
          if ("c" + (K + B) in N)
            for (let M = 0; M <= j + 1 && "c" + (K + M) in N; M++)
              B++;
          K += B;
          let L = window.getComputedStyle(X, null);
          if (X.getAttribute("colspan") || X.getAttribute("rowspan")) {
            let M = Ut(
              X.getAttribute("colspan") * 1,
              X.getAttribute("rowspan") * 1,
              K,
              j,
              N,
              X.textContent,
              oe,
              N
            );
            u.length < d ? u.push(...M) : M.forEach((Ce, J) => {
              u.length < d + J ? u.push(...M) : u[d + J] = {
                ...u[d + J],
                ...Ce
              };
            }), N = M[0], oe = M[0].mergeString, P = !0;
          } else
            P || (oe += "-");
          let E = null;
          if (L.borderBottomWidth !== "0px") {
            const M = me(L.borderBottomColor);
            M && (E || (E = {}), E.bottom = {
              style: "thin",
              color: M
            });
          }
          if (L.borderTopWidth !== "0px") {
            const M = me(L.borderTopColor);
            M && (E || (E = {}), E.top = {
              style: "thin",
              color: M
            });
          }
          if (L.borderLeftWidth !== "0px") {
            const M = me(L.borderLeftColor);
            M && (E || (E = {}), E.left = {
              style: "thin",
              color: M
            });
          }
          if (L.borderRightWidth !== "0px") {
            const M = me(L.borderRightColor);
            M && (E || (E = {}), E.right = {
              style: "thin",
              color: M
            });
          }
          let $ = me(L.backgroundColor);
          !$ && Z && ($ = Z);
          const q = parseInt(
            L.fontSize.substring(0, L.fontSize.indexOf("p"))
          );
          let U = {
            ...$ ? { backgroundColor: $ } : {},
            bold: parseInt(L.fontWeight) > 500,
            ...isNaN(q) ? {} : { size: q },
            ...E ? { border: E } : {},
            alignment: {
              ...typeof L.textAlign == "string" && L.textAlign.length > 0 ? { horizontal: L.textAlign } : {},
              vertical: "center",
              ...L.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          m.header[d + "-" + K] = U, N["c" + K] = X.textContent;
        }), typeof o == "function" ? N.height = o(
          Number(z.height.substring(0, z.height.length - 2)),
          d,
          !1
        ) : N.height = z.height.substring(0, z.height.length - 2), typeof N.height == "string" && N.height.length == 0 && delete N.height, u.length < d ? u.push(N) : u[d - 1] = N;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: m.header,
    sheet: [
      {
        ...s ? { headerHeight: s } : {},
        styleCellCondition: function(D, j, S, d, G, z) {
          return r ? z.includes(S - 1 + "-" + d) ? S - 1 + "-" + d : "" : null;
        },
        data: u,
        headers: g
      }
    ]
  };
}
function Ke(e, t, r = "", o = [], n = -1) {
  const l = e.length;
  for (let g = 0; g < l; g++)
    o.push(r + e[g]);
  return t < o.length ? o : Ke(
    e,
    t,
    o[n + 1],
    o,
    n + 1
  );
}
function Gt(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + '<fonts count="' + e.font.count + '"><font><sz val="11" /><color theme="1" /><name val="Calibri" /><family val="2" /><scheme val="minor" /></font><font><sz val="11" /><color rgb="FFFF0000" /><name val="Calibri" /><family val="2" /><scheme val="minor" /></font>' + e.font.value + '</fonts><fills count="' + e.fill.count + '"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="lightGray" /></fill>' + e.fill.value + '</fills><borders count="' + e.border.count + '"><border />' + e.border.value + '</borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /></cellStyleXfs><cellXfs count="' + e.cell.count + '"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment readingOrder="0" /></xf>' + e.cell.value + '</cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0" /></cellStyles> ' + (t ? '<dxfs count="' + e.conditionalFormatting.count + '" >' + e.conditionalFormatting.value + "</dxfs>" : '<dxfs count="0" />') + "</styleSheet>";
}
function Zt(e, t, r, o, n, l, g) {
  let u = {};
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /><Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + r.reduce((m, s) => (s = s.toLowerCase(), u[s] ? m : s == "svg" ? (u.png = !0, u.svg = !0, m + '<Default Extension="png" ContentType="image/png"/><Default Extension="svg" ContentType="image/svg+xml"/>') : s == "jpeg" || s == "jpg" ? (u.jpeg = !0, u.jpg = !0, m + '<Default Extension="' + s + '" ContentType="image/jpeg"/>') : (u.curr = !0, m + '<Default Extension="' + s + '" ContentType="image/' + s + '"/>')), "") + t.reduce((m, s) => m + '<Override PartName="/xl/comments' + s + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />', "") + e + (g.length > 0 ? g.reduce((m, s) => m + '<Override PartName="/xl/tables/' + s + '" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml"/>', "") : "") + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" />' + (l ? '<Override PartName="/xl/calcChain.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml"/>' : "") + '<Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' + o.reduce((m, s) => m + '<Override PartName="/xl/drawings/' + s + '" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml" />', "") + (n.length > 0 ? n.reduce((m, s, f) => m + '<Override PartName="/xl/ctrlProps/ctrlProp' + (f + 1) + '.xml" ContentType="application/vnd.ms-excel.controlproperties+xml"/>', "") : "") + '<Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function Xt(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>` + e + '</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="' + e + '" baseType="lpstr"> ' + t + "</vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>";
}
function ot(e, t, r, o) {
  e = e.toUpperCase();
  let n = "";
  if (t.formula) {
    let s = t, f = s.formula.indexOf("=") == 0 ? s.formula.substring(1) : s.formula, v = e.indexOf(":") > 0, D = s.referenceCells ? s.referenceCells : e, j = v ? e.substring(0, e.indexOf(":")) : e, S = j.replace(/[0-9]/g, ""), d = parseInt(e.substr(S.length)), G = s.returnType ? s.returnType : s.isArray || v ? ' t="str"' : "", z = "styleId" in s && o && typeof s.styleId == "string" && o[s.styleId] ? ' s="' + o[s.styleId].index + '"' : "", Z = s.isArray || v ? ' t="array" ref="' + D + '"' : "";
    return n = '<c r="' + j + '"' + z + G + "><f" + Z + ">" + f + "</f></c>", {
      column: S,
      row: d,
      needCalcChain: !1,
      isCustom: !0,
      cell: n
    };
  }
  let l = e.replace(/[0-9]/g, ""), g = parseInt(e.substr(l.length)), u = !1, m = "";
  if (t.noArgType) {
    const s = t;
    if (s.noArgType == "NOW" || s.noArgType == "TODAY") {
      const f = "styleId" in s && o && typeof s.styleId == "string" && o[s.styleId] ? ' s="' + o[s.styleId].index + '"' : "";
      n = '<c r="' + e + '"' + f + "><f>" + s.noArgType + "()</f></c>";
    } else {
      let f = "NOW()";
      const v = "styleId" in s && o && typeof s.styleId == "string" && o[s.styleId] ? ' s="' + o[s.styleId].index + '"' : "";
      n = '<c r="' + e + '"' + v + "><f>" + s.noArgType.substring(4) + "(" + f + ")</f></c>";
    }
    m = '<c r="' + e + '" i="' + r + '"/>', u = !0;
  } else if (t.referenceCell) {
    const s = t;
    let f = "";
    typeof s.value < "u" && (f = "," + s.value);
    let v = "";
    s.type == "COT" && (v = "_xlfn.");
    const D = "styleId" in s && o && typeof s.styleId == "string" && o[s.styleId] ? ' s="' + o[s.styleId].index + '"' : "";
    n = '<c r="' + e + '"' + D + "><f>" + v + s.type + "(" + s.referenceCell.toUpperCase() + f + ")</f></c>", m = '<c r="' + e + '" i="' + r + '"/>', u = !0;
  } else {
    const s = t;
    n = '<c r="' + e + '"' + (o && typeof s.styleId == "string" && o[s.styleId] ? ' s="' + o[s.styleId].index + '"' : "") + "><f>" + s.type + "(" + s.start.toUpperCase() + ":" + s.end.toUpperCase() + ")</f></c>";
  }
  return {
    column: l,
    row: g,
    cell: n,
    needCalcChain: u,
    chainCell: m
  };
}
function rt(e, t, r) {
  let o = !1, n, l;
  if (typeof e == "object") {
    if ("author" in e && e.author && (o = !0, l = e.author), "styleId" in e && typeof e.styleId == "string") {
      let g = t[e.styleId];
      typeof g == "string" && (r = g);
    }
    n = "comment" in e && typeof e.comment == "string" ? At(e.comment) : [""];
  } else
    n = e ? At(e) : [""];
  return o && n.unshift(l + ":"), {
    hasAuthor: o,
    author: l,
    commentStyle: r,
    commentStr: n
  };
}
function At(e) {
  var t = e.split(/\r?\n|\r|\n/g);
  return t;
}
function nt(e, t, r, o) {
  let n = '<comment ref="' + e + '" authorId="' + Math.max(0, o - 1) + '" shapeId="0"><text>', l = "";
  return t.forEach((g, u) => {
    let m = "";
    if (g.length == 0) {
      l += `
`;
      return;
    }
    u > 0 && (m = ' xml:space="preserve"', l += `
`), n += "<r>" + r + "<t" + m + ">" + l + g + "</t></r>", l = "";
  }), l.length > 0 && n.indexOf("<r>") > 0 && (n = n.substring(0, n.length - 8) + l + "</t></r>"), n += "</text></comment>", n;
}
const Jt = '<rPr><b /><sz val="9" /><color rgb="000000" /><rFont val="Tahoma" /></rPr>', $e = function(e) {
  return e.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
};
function lt(e, t, r) {
  let o = "";
  return e.forEach((n) => {
    typeof n.value == "string" && (n.value = $e(n.value)), o += "<r>" + (n.styleId && t[n.styleId] ? t[n.styleId] : t[r]) + '<t xml:space="preserve">' + n.value + "</t></r>";
  }), "<si>" + o + "</si>";
}
const Lt = {
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
}, Qt = [
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
], _t = (e, t, r = !1, o) => {
  let n, l = !1;
  return typeof o == "function" ? (n = o, l = !0) : n = fetch, n(e).then((g) => l ? g : r ? g.arrayBuffer() : g.blob()).then((g) => l || r ? g : new File([g], t)).catch((g) => {
    throw g;
  });
};
function Re(e, t) {
  e = e.toUpperCase();
  let r = e.replace(/[0-9]/g, "");
  if (r.length == 0)
    throw "Invalid Column";
  let o = parseInt(e.substring(r.length));
  if (isNaN(o))
    throw "Invalid Row";
  o = Math.max(0, o - 1);
  let n = t.indexOf(r);
  return n < 0 && (t = Ke(t, Math.pow(10, r.length + 1), ""), n = t.indexOf(r), n < 0 && (n = 0)), {
    col: n,
    row: o
  };
}
let eo = {}, at = new Proxy(eo, {
  get(e, t) {
    return t in e ? e[t] : (this.set(e, t, {}, !0), {});
  },
  set(e, t, r, o) {
    return e[t] = r, !0;
  }
});
function Ht(e, t, r) {
  at[e], at[e][t] = r;
}
function Nt(e, t, r) {
  Object.keys(r).forEach((n) => {
    const l = r[n];
    typeof l == "object" ? n != "data" && n != "headers" && Nt(e, t.length > 0 ? t + "." + n : n, l) : Ht(e, t.length > 0 ? t + "." + n : n, l);
  });
}
function to(e, t) {
  Nt(e, "", t);
}
function oo(e, t) {
  let r = t, o = at[e];
  return Object.keys(o).forEach((l) => {
    const g = l.split(".");
    let u = r, m = o[l];
    for (let s = 0; s < g.length; s++) {
      const f = g[s];
      u[f] ? u = u[f] : g.length - 1 == s ? u[f] = m : (u[f] = {}, u = u[f]);
    }
  }), r;
}
function ro(e) {
  if (!Array.isArray(e) || !e.length)
    return "";
  const t = e.length;
  let r = "<dataValidations>";
  for (let o = 0; o < t; o++) {
    const n = e[o], l = n.for.reduce((u, m) => u + " " + m, ""), g = n.option.join(",");
    r += '<dataValidation type="list" allowBlank="1" showErrorMessage="1" sqref="' + l.trim() + '"><formula1>&quot;' + g + "&quot;</formula1></dataValidation>";
  }
  return r += "</dataValidations>", r;
}
async function ct(e, t = "") {
  if (typeof t == "string" && t.length > 0 && (e = oo(t, e)), typeof e.creator == "string" && e.creator.trim().length <= 0)
    throw 'length of "creator" most be bigger then 0';
  if (typeof e.created == "string" && new Date(e.created).toString() == "Invalid Date")
    throw '"created" is not valid date';
  if (typeof e.modified == "string" && new Date(e.modified).toString() == "Invalid Date")
    throw '"modified" is not valid date';
  let r = Lt;
  e.formatMap && typeof e.formatMap == "object" && (r = {
    ...r,
    ...e.formatMap
  });
  const o = e.backend, n = {
    lt: "lessThan",
    gt: "greaterThan",
    between: "between",
    ct: "containsText",
    eq: "equal"
  };
  let l = [...Qt];
  e.numberOfColumn && e.numberOfColumn > 25 && (l = Ke(l, e.numberOfColumn));
  const u = (await import("./jszip.min-D-TEDr9v.js").then((w) => w.j)).default;
  let m = new u();
  e.sheet || (e.sheet = [
    {
      headers: [],
      data: []
    }
  ]);
  const s = e.sheet.length;
  let f = m.folder("xl"), v = null, D = null, j = null;
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const S = Object.keys(e.styles), d = Jt, G = e.activateConditionalFormatting ? e.activateConditionalFormatting : !1, z = {}, Z = {};
  let N = S.reduce(
    (w, a, b) => {
      const x = e.styles[a];
      if (x.type && (x.type == "headerFooter" || x.type == "HF")) {
        let C = "", W = "-", ce = "Regular";
        if (x.fontFamily && (W = x.fontFamily), x.bold && (ce = "Bold"), x.italic && (ce == "Regular" && (ce = ""), ce += "Italic"), (W != "-" || ce != "Regular") && (C = '&amp;"' + W + "," + ce + '"'), x.size && (C += "&amp;" + x.size), x.doubleUnderline ? C += "&amp;E" : x.underline && (C += "&amp;U"), x.color) {
          const Te = he(x.color, o);
          typeof Te == "string" && Te.length > 0 && (C += "&amp;K" + Te.toUpperCase());
        }
        return z[a] = C, w;
      }
      if (G && typeof x.type == "string" && x.type && (x.type == "conditionalFormatting" || x.type.toUpperCase() == "CF")) {
        Z[a] = w.conditionalFormatting.count;
        let C = he(x.color, o), W = he(x.backgroundColor, o);
        return w.conditionalFormatting.value += '<dxf><font><color rgb="' + C + '"/></font><fill> <patternFill> <bgColor rgb="' + W + '"/></patternFill></fill></dxf>', w.conditionalFormatting.count++, w;
      }
      const Y = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (x.backgroundColor) {
        let C = he(x.backgroundColor, o);
        Y.fillIndex = w.fill.count, w.fill.count++, w.fill.value = w.fill.value + '<fill><patternFill patternType="solid">' + (C ? '<fgColor rgb="' + C.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (x.color || x.fontFamily || x.size || x.bold || x.italic || x.underline || x.doubleUnderline) {
        const C = he(x.color, o);
        Y.fontIndex = w.font.count, w.font.count++, w.font.value = w.font.value + "<font>" + (x.bold ? "<b/>" : "") + (x.italic ? "<i />" : "") + (x.underline || x.doubleUnderline ? "<u " + (x.doubleUnderline ? ' val="double" ' : "") + "/>" : "") + (x.size ? '<sz val="' + x.size + '" />' : "") + (C ? '<color rgb="' + C.replace("#", "") + '" />' : "") + (x.fontFamily ? '<name val="' + x.fontFamily + '" />' : "") + "</font>", w.commentSyntax.value[a] = "<rPr>" + (x.bold ? "<b/>" : "") + (x.italic ? "<i/>" : "") + (x.underline || x.doubleUnderline ? "<u " + (x.doubleUnderline ? 'val="double" ' : "") + "/>" : "") + '<sz val="' + (x.size ? x.size : "9") + '" />' + (C ? '<color rgb="' + C.replace("#", "") + '" />' : "") + '<rFont val="' + (x.fontFamily ? x.fontFamily : "Tahoma") + '" /></rPr>';
      }
      let se = "/>";
      x.alignment && (x.alignment.rtl && (x.alignment.readingOrder = 2), delete x.alignment.rtl, x.alignment.ltr && (x.alignment.readingOrder = 1), delete x.alignment.ltr, se = ' applyAlignment="1"><alignment ' + Object.keys(x.alignment).reduce((C, W) => C + " " + W + '="' + x.alignment[W] + '" ', "") + " /></xf>");
      const H = x.border;
      let k = "";
      if (typeof H == "object" && ((H.left || H.full) && (k += '<left style="' + (H.left || H.full).style + '"><color rgb="' + he(
        (H.left || H.full).color,
        o
      ).replace("#", "") + '" /></left>'), (H.right || H.full) && (k += '<right style="' + (H.right || H.full).style + '"><color rgb="' + he(
        (H.right || H.full).color,
        o
      ).replace("#", "") + '" /></right>'), (H.top || H.full) && (k += '<top style="' + (H.top || H.full).style + '"><color rgb="' + he(
        (H.top || H.full).color,
        o
      ).replace("#", "") + '" /></top>'), (H.bottom || H.full) && (k += '<bottom style="' + (H.bottom || H.full).style + '"><color rgb="' + he(
        (H.bottom || H.full).color,
        o
      ).replace("#", "") + '" /></bottom>'), Y.borderIndex = w.border.count, w.border.count++, w.border.value += "<border>" + k + "<diagonal /></border>"), x.format) {
        const C = r[x.format];
        C && (Y.formatIndex = C.key, "value" in C && (w.format.count++, w.format.value += C.value));
      }
      return w.cell.value = w.cell.value + '<xf numFmtId="' + Y.formatIndex + '" fontId="' + Y.fontIndex + '" fillId="' + Y.fillIndex + '" borderId="' + Y.borderIndex + '" xfId="0"' + (Y.borderIndex > 0 ? ' applyBorder="1" ' : "") + (Y.fillIndex > 0 ? ' applyFill="1" ' : "") + (Y.fontIndex >= 0 ? ' applyFont="1" ' : "") + (Y.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + se, e.styles[a].index = w.cell.count, w.cell.count++, w;
    },
    {
      conditionalFormatting: {
        count: G ? 1 : 0,
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
  f == null || f.file("styles.xml", Gt(N, G));
  let oe = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />', P = "", B = 0, X = "", K = "", L = {};
  const E = {};
  let $ = "", q = 4, U = !1, M = -1, Ce = [], J = 1;
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
  for (let w = 0; w < s; w++) {
    const a = e.sheet[w], b = w + 1;
    let x = {}, Y = {
      start: "",
      end: ""
    };
    const se = a.asTable;
    let H = "", k = a.shiftTop && a.shiftTop >= 0 ? a.shiftTop + 1 : 1, C = "", W = "", ce = "", Te = "", Ee = "", _e = "", ze = !1, dt = "", pt = "", ht = "", ut = "", xe = Object.assign([], a.merges), ue = Object.assign({}, a.formula), Ue = Object.assign(
      [],
      a.conditionalFormatting
    ), Ie = !1, pe = [], Le = "", He = [], yt = [], We = [], Ge = [], ke = {}, Pe = "", je = !1, Ze = "";
    if (a.rtl && (Ee += ' rightToLeft="1" '), a.pageBreak) {
      const T = a.pageBreak;
      if (T.row && Array.isArray(T.row)) {
        _e = "pageBreakPreview";
        const i = T.row.length;
        Ze += '<rowBreaks count="' + i + '" manualBreakCount="' + i + '">' + T.row.reduce(
          (y, p) => y + '<brk id="' + p + '" max="16383" man="1"/>',
          ""
        ) + "</rowBreaks>";
      }
      if (T.column && Array.isArray(T.column)) {
        _e = "pageBreakPreview";
        const i = T.column.length;
        Ze += '<colBreaks count="' + i + '" manualBreakCount="' + i + '">' + T.column.reduce(
          (y, p) => y + '<brk id="' + p + '" max="16383" man="1"/>',
          ""
        ) + "</colBreaks>";
      }
    }
    let gt = "";
    if (a.pageOption) {
      const T = a.pageOption;
      if (T.isPortrait && (je = !0), T.margin) {
        const F = T.margin;
        let A = {
          left: 0.7,
          right: 0.7,
          top: 0.75,
          bottom: 0.75,
          header: 0.3,
          footer: 0.3
        };
        Object.keys(A).forEach((h) => {
          typeof F[h] == "number" && (A[h] = F[h]);
        }), gt = '<pageMargins left="' + A.left + '" right="' + A.right + '" top="' + A.top + '" bottom="' + A.bottom + '" header="' + A.header + '" footer="' + A.footer + '"/>';
      }
      let i = "", y = "", p = "", c = "";
      if (["header", "footer"].forEach((F) => {
        const A = F.charAt(0).toUpperCase() + F.substring(1);
        if (T[F]) {
          const h = T[F];
          typeof h == "object" && Object.keys(h).forEach((O) => {
            i.indexOf(O) < 0 && (i += O);
            const le = h[O];
            let V = "";
            if (Object.keys(le).reduce((R, I) => (I == "l" ? R.splice(0, 0, I) : I == "c" ? R.splice(1, 0, I) : I == "r" && R.splice(2, 0, I), R), []).forEach((R) => {
              const I = le[R];
              V += "&amp;" + R.toUpperCase(), I.styleId && z[I.styleId] && (V += z[I.styleId]), I.text && (V += I.text);
            }), V = "<" + O + A + ">" + V + "</" + O + A + ">", O == "odd")
              y += V;
            else if (O == "even")
              p += V;
            else if (O == "first")
              c += V;
            else
              throw "type error";
          });
        }
      }), Pe = y + p + c, Pe.length > 0) {
        je = !0;
        const F = i.length == 7 || i.length == 12 ? ' differentOddEven="1"' : "", A = i.indexOf("first") >= 0 ? ' differentFirst="1"' : "";
        Pe = "<headerFooter" + F + A + ">" + Pe + "</headerFooter>";
      }
    }
    if (a.viewOption) {
      let T = "";
      const i = a.viewOption;
      i.type && (_e = i.type), i.hideRuler && (Ee += ' showRuler="0" '), i.hideGrid && (Ee += ' showGridLines="0" '), i.hideHeadlines && (Ee += ' showRowColHeaders="0" ');
      let y = i.splitOption;
      if (typeof y > "u" && (je = !1, typeof i.frozenOption == "object")) {
        const p = i.frozenOption;
        if (T = ' state="frozen" ', p.type == "R" || p.type == "ROW") {
          let c;
          typeof p.index == "object" ? c = p.index.r : c = p.index, y = {
            startAt: {
              b: "A" + (c + 1)
            },
            type: "H",
            split: c
          };
        } else if (p.type == "C" || p.type == "COLUMN") {
          let c;
          typeof p.index == "object" ? c = p.index.c : c = p.index, c > l.length - 1 && (l = Ke(l, c)), y = {
            type: "V",
            startAt: {
              r: l[c] + 1
            },
            split: c
          };
        } else if (p.type == "B" || p.type == "BOTH") {
          let c = "", _;
          typeof p.index == "number" ? (_ = p.index, c = l[p.index] + (p.index + 1)) : (_ = {
            y: p.index.r,
            x: p.index.c
          }, c = l[p.index.c] + (p.index.r + 1)), y = {
            startAt: {
              two: c
            },
            type: "B",
            split: _
          };
        }
      }
      if (y)
        if (y.type == "H" || y.type == "HORIZONTAL") {
          let p;
          y.startAt && (p = y.startAt.b, y.startAt.t && (Ee += ' topLeftCell="' + y.startAt.t + '"')), p || (p = "A1"), Te = '<pane ySplit="' + (typeof y.split == "object" && y.split.y || y.split) + '" topLeftCell="' + p + '" activePane="bottomLeft"' + T + "/>";
        } else if (y.type == "V" || y.type == "VERTICAL") {
          let p;
          y.startAt && (p = y.startAt.r, y.startAt.l && (Ee += ' topLeftCell="' + y.startAt.l + '"')), p || (p = "A1"), Te = '<pane xSplit="' + (typeof y.split == "object" && y.split.x || y.split) + '" topLeftCell="' + p + '" activePane="topLeft"' + T + "/>";
        } else {
          let p;
          y.startAt && (p = y.startAt.two, y.startAt.one && (Ee += ' topLeftCell="' + y.startAt.one + '"')), p || (p = "A1"), Te = '<pane xSplit="' + (typeof y.split == "object" && y.split.x || y.split) + '" ySplit="' + (typeof y.split == "object" && y.split.y || y.split) + '" topLeftCell="' + p + '" activePane="bottomLeft"' + T + "/>";
        }
    }
    if (je && (_e = "pageLayout"), a.checkbox) {
      ze = !0;
      const T = ye.checkbox;
      a.checkbox.forEach((i, y) => {
        let p = T;
        if (i.link) {
          let O = Re(i.link, l);
          p = p.replace(
            "**fmlaLink**",
            'fmlaLink="$' + l[O.col] + "$" + (O.row + 1) + '"'
          );
        } else
          p = p.replace("**fmlaLink**", "");
        i.mixed ? p = p.replace("**value**", 'checked="Mixed"') : i.checked ? p = p.replace("**value**", 'checked="Checked"') : p = p.replace("**value**", ""), i.threeD && p.replace('noThreeD="1"', ""), ae.push(p), ve++;
        let c = w + "" + ve++;
        const _ = "_x0000_s" + c;
        pt += we.checkbox.replace("***id***", _).replace("***text***", i.text);
        let F = i.startStr, A = i.endStr, h = {
          start: {
            col: 0,
            row: 0
          },
          end: {
            col: 1,
            row: 1
          }
        };
        if (i.col && i.row && (h = {
          start: {
            col: i.col,
            row: i.row - 1
          },
          end: {
            col: i.col,
            row: i.row
          }
        }), typeof F == "string" && F.length >= 2) {
          let O = Re(F, l);
          h.start = {
            ...O
          }, h.end = {
            col: O.col + 1,
            row: O.row + 1
          };
        }
        if (typeof A == "string" && A.length >= 2) {
          let O = Re(A, l);
          O.row += 1, O.col += 1, h.end = {
            ...O
          };
        }
        ut += '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice Requires="x14"><control shapeId="' + c + '" r:id="rId' + (7 + y) + '" name="' + i.text + '"><controlPr defaultSize="0" autoFill="0" autoLine="0" autoPict="0"><anchor moveWithCells="1"><from><xdr:col>' + h.start.col + "</xdr:col><xdr:colOff>19050</xdr:colOff><xdr:row>" + h.start.row + "</xdr:row><xdr:rowOff>19050</xdr:rowOff></from><to><xdr:col>" + h.end.col + "</xdr:col><xdr:colOff>819150</xdr:colOff><xdr:row>" + h.end.row + "</xdr:row><xdr:rowOff>0</xdr:rowOff></to></anchor></controlPr></control></mc:Choice></mc:AlternateContent>", ht += '<Relationship Id="rId' + (7 + y) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp" Target="../ctrlProps/ctrlProp' + ae.length + '.xml" />', dt += '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" Requires="a14"><xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>' + h.start.col + "</xdr:col><xdr:colOff>19050</xdr:colOff><xdr:row>" + h.start.row + "</xdr:row><xdr:rowOff>19050</xdr:rowOff></xdr:from><xdr:to><xdr:col>" + h.end.col + "</xdr:col><xdr:colOff>819150</xdr:colOff><xdr:row>" + h.end.row + '</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:to><xdr:sp macro="" textlink=""><xdr:nvSpPr><xdr:cNvPr id="' + c + '" name="' + i.text + '" hidden="1"><a:extLst><a:ext uri=""><a14:compatExt spid="' + _ + '"/></a:ext><a:ext uri=""><a16:creationId xmlns:a16="http://schemas.microsoft.com/office/drawing/2014/main" id=""/></a:ext></a:extLst></xdr:cNvPr><xdr:cNvSpPr/></xdr:nvSpPr><xdr:spPr bwMode="auto"><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></xdr:spPr><xdr:txBody><a:bodyPr vertOverflow="clip" wrap="square" lIns="27432" tIns="18288" rIns="0" bIns="18288" anchor="ctr" upright="1"/><a:lstStyle/><a:p><a:pPr algn="l" rtl="0"><a:defRPr sz="1000"/></a:pPr><a:r><a:rPr lang="en-US" sz="800" b="0" i="0" u="none" strike="noStrike" baseline="0"><a:solidFill><a:srgbClr val="000000"/></a:solidFill><a:latin typeface="Segoe UI"/><a:cs typeface="Segoe UI"/></a:rPr><a:t>' + i.text + "</a:t></a:r></a:p></xdr:txBody></xdr:sp><xdr:clientData/></xdr:twoCellAnchor></mc:Choice><mc:Fallback/></mc:AlternateContent>";
      });
    }
    let Xe;
    if (a.backgroundImage) {
      v == null && (v = f == null ? void 0 : f.folder("media"));
      const T = a.backgroundImage;
      Xe = new Promise(async (i, y) => {
        let p = T.lastIndexOf("."), c;
        p > 0 ? (c = T.substring(p + 1).toLowerCase(), c.length > 4 && (c.indexOf("gif") >= 0 ? c = "gif" : c.indexOf("jpg") >= 0 ? c = "jpg" : c.indexOf("jpeg") >= 0 ? c = "jpeg" : c = "png")) : c = "png";
        const _ = J++, F = "image" + _ + "." + c, A = await _t(T, F, o, e.fetch);
        A || y("image not load"), Ce.push(c), i({
          name: F,
          type: c,
          image: A,
          ref: _
        });
      });
    }
    let Je;
    if (a.images && (v == null && (v = f == null ? void 0 : f.folder("media")), Je = Promise.all([
      ...a.images.map(async (T, i) => {
        let y = T.url.lastIndexOf("."), p;
        y > 0 ? (p = T.url.substring(y + 1).toLowerCase(), p.length > 4 && (p.indexOf("gif") >= 0 ? p = "gif" : p.indexOf("jpg") >= 0 ? p = "jpg" : p.indexOf("jpeg") >= 0 ? p = "jpeg" : p = "png")) : p = "png", Ce.push(p);
        const c = "image" + J++ + "." + p;
        return {
          type: p,
          image: await _t(T.url, c, o, e.fetch),
          obj: T,
          i,
          name: c
        };
      })
    ])), Array.isArray(a.headers) && a.headers.length) {
      const T = a.headers.length;
      let i = "";
      if (a.title) {
        const c = a.title, _ = c.comment, F = c.shiftTop && c.shiftTop >= 0 ? c.shiftTop : 0, A = a.shiftLeft && a.shiftLeft >= 0 ? a.shiftLeft : 0, h = c.shiftLeft && c.shiftLeft + A >= 0 ? c.shiftLeft + A : A, O = c.consommeRow ? c.consommeRow - 1 : 1, le = c.consommeCol ? c.consommeCol : T, V = O == 0 && typeof c.height == "number" ? ' ht="' + c.height + '" customHeight="1" ' : "", R = c.styleId ? c.styleId : "titleStyle", I = l[h] + "" + (k + F);
        if (xe.push(
          I + ":" + l[h + le - 1] + (k + O + F)
        ), typeof _ < "u") {
          Ie = !0;
          const Q = rt(
            _,
            N.commentSyntax.value,
            d
          );
          let fe = pe.length;
          if (Q.hasAuthor && typeof Q.author < "u") {
            let ee = Q.author.toString();
            const re = pe.indexOf(ee);
            re < 0 ? pe.push(ee) : fe = re;
          }
          He.push({
            row: k + F - 1,
            col: h
          }), Le += nt(
            I,
            Q.commentStr,
            Q.commentStyle,
            fe
          );
        }
        typeof c.text == "string" && (x[k + F] = {
          startTag: '<row r="' + (k + F) + '" ' + V + ' spans="1:' + (h + le - 1) + '">',
          details: '<c r="' + I + '" ' + (e.styles[R] ? ' s="' + e.styles[R].index + '" ' : "") + ' t="s"><v>' + B + "</v></c>",
          endTag: "</row>"
        }, i += '<row r="' + (k + F) + '" ' + V + ' spans="1:' + (h + le - 1) + '">', i += '<c r="' + I + '" ' + (e.styles[R] ? ' s="' + e.styles[R].index + '" ' : "") + ' t="s"><v>' + B + "</v></c>", i += "</row>", B++, L[c.text] = c.text, c.multiStyleValue && Array.isArray(c.multiStyleValue) ? P += lt(
          c.multiStyleValue,
          N.commentSyntax.value,
          R
        ) : P += "<si><t>" + $e(c.text) + "</t></si>"), k += F + O + 1;
      }
      let y = a.headerStyleKey ? a.headerStyleKey : null, p = 0;
      if (typeof a.shiftLeft == "number" && a.shiftLeft >= 0 && (p = a.shiftLeft), se && (H += '<tableColumns count="' + a.headers.length + '">', de || (de = f == null ? void 0 : f.folder("tables"))), Y.start = l[p] + "" + k, Y.end = l[p + a.headers.length - 1] + "" + (k + a.data.length), a.headers.forEach((c, _) => {
        if (se && (H += '<tableColumn id="' + (_ + 1) + '" name="' + c.text + '"/>'), p && (_ += p), c.formula && We.push(_), c.conditionalFormatting && Ge.push(_), yt.push(c.label), a.mergeRowDataCondition && typeof a.mergeRowDataCondition == "function" && a.mergeRowDataCondition(
          c,
          null,
          _,
          !0
        ) === !0 && (ke[l[_]] = {
          inProgress: !0,
          start: k
        }), a.styleCellCondition && typeof a.styleCellCondition == "function" && (y = a.styleCellCondition(
          c,
          c,
          k,
          _,
          !0,
          S
        ) || y), c.size && c.size > 0 && (W += '<col min="' + (_ + 1) + '" max="' + (_ + 1) + '" width="' + c.size + '" customWidth="1" />'), a.withoutHeader)
          return;
        const F = l[_] + "" + k;
        if (typeof a.commentCondition == "function") {
          const h = a.commentCondition(
            c,
            null,
            c.label,
            k,
            _,
            !0
          );
          (typeof h == "string" || typeof h == "object" && h != null) && (c.comment = h);
        }
        if (c.comment) {
          Ie = !0;
          const h = rt(
            c.comment,
            N.commentSyntax.value,
            d
          );
          let O = pe.length;
          if (h.hasAuthor && typeof h.author < "u") {
            let le = h.author.toString();
            const V = pe.indexOf(le);
            V < 0 ? pe.push(le) : O = V;
          }
          He.push({
            row: k - 1,
            col: _
          }), Le += nt(
            F,
            h.commentStr,
            h.commentStyle,
            O
          );
        }
        const A = ue && ue[F];
        if (A) {
          const h = ot(
            F,
            A,
            b,
            e.styles
          );
          h.needCalcChain && (ge = !0, ie += h.chainCell), C += h.cell, delete ue[F];
        } else {
          if (C += '<c r="' + l[_] + k + '" ' + (y && e.styles && e.styles[y] ? ' s="' + e.styles[y].index + '" ' : "") + ' t="s"><v>' + B + "</v></c>", typeof a.multiStyleCondition == "function") {
            const h = a.multiStyleCondition(
              c,
              null,
              c.label,
              k,
              _,
              !0
            );
            h && (c.multiStyleValue = h);
          }
          c.multiStyleValue && Array.isArray(c.multiStyleValue) ? P += lt(
            c.multiStyleValue,
            N.commentSyntax.value,
            y || ""
          ) : P += "<si><t>" + $e(c.text) + "</t></si>", L[c.text] = c.text, B++;
        }
      }), se && (H += "</tableColumns>"), a.withoutHeader)
        C += i;
      else {
        const c = '<row r="' + k + '" spans="1:' + T + '" ' + (a.headerHeight ? 'ht="' + a.headerHeight + '" customHeight="1"' : "") + (a.headerRowOption ? Object.keys(a.headerRowOption).reduce((_, F) => _ + " " + F + '="' + a.headerRowOption[F] + '" ', "  ") : "") + ">";
        x[k] = {
          startTag: c,
          endTag: "</row>",
          details: C
        }, C = i + c + C + "</row>", k++;
      }
      if (Array.isArray(a.data)) {
        const c = a.mapSheetDataOption && a.mapSheetDataOption.outlineLevel ? a.mapSheetDataOption.outlineLevel : "outlineLevel", _ = a.mapSheetDataOption && a.mapSheetDataOption.hidden ? a.mapSheetDataOption.hidden : "hidden", F = a.mapSheetDataOption && a.mapSheetDataOption.height ? a.mapSheetDataOption.height : "height", A = a.data.length;
        a.data.forEach((h, O) => {
          if (h.mergeType)
            for (let I = 0; I < h.mergeType.length; I++) {
              const Q = h.mergeType[I], fe = h.mergeStart[I], ee = h.mergeValue[w];
              let re = "";
              Q == "both" ? re = l[fe] + "" + k + ":" + l[fe + ee[1]] + (k + ee[0]) : Q == "col" ? re = l[fe] + "" + k + ":" + l[fe + ee[0]] + k : re = l[fe] + "" + k + ":" + l[fe] + (k + ee[0]), xe.push(re);
            }
          const le = h.rowStyle, V = '<row r="' + k + '" spans="1:' + T + '" ' + (F in h ? 'ht="' + h[F] + '" customHeight="1"' : "") + (c in h ? ' outlineLevel="' + h[c] + '"' : "") + (_ in h ? ' hidden="' + h[_] + '"' : "") + " >";
          C += V;
          let R = "";
          yt.forEach((I, Q) => {
            p && (Q += p);
            const fe = h[I] * 1;
            let ee = a.convertStringToNumber && !isNaN(fe) ? fe : h[I], re = le;
            if (a.styleCellCondition && typeof a.styleCellCondition == "function" && (re = a.styleCellCondition(
              ee,
              h,
              k,
              Q,
              !1,
              S
            ) || le), a.mergeRowDataCondition && typeof a.mergeRowDataCondition == "function") {
              let te = a.mergeRowDataCondition(
                ee,
                I,
                Q,
                !1
              );
              const ne = l[Q];
              let be = ke[ne];
              te === !0 ? (!be || be && !be.inProgress) && (ke[ne] = {
                inProgress: !0,
                start: k
              }) : be && be.inProgress && (xe.push(
                ne + be.start + ":" + ne + (k - 1)
              ), ke[ne] = {
                inProgress: !1,
                start: -1
              });
            }
            typeof ee > "u" && (ee = "");
            const Be = l[Q] + "" + k;
            if (typeof a.commentCondition == "function") {
              const te = a.commentCondition(
                ee,
                h,
                I,
                k,
                Q,
                !1
              );
              (typeof te == "string" || typeof te == "object" && te != null) && (typeof h.comment != "object" && (h.comment = {}), h.comment[I] = te);
            }
            if (typeof h.comment == "object" && I in h.comment) {
              const te = h.comment[I];
              Ie = !0;
              const ne = rt(
                te,
                N.commentSyntax.value,
                d
              );
              ne.hasAuthor && typeof ne.author < "u" && pe.push(ne.author.toString()), He.push({
                row: k - 1,
                col: Q
              });
              let be = pe.length;
              if (ne.hasAuthor && typeof ne.author < "u") {
                let Et = ne.author.toString();
                const St = pe.indexOf(Et);
                St < 0 ? pe.push(Et) : be = St;
              }
              Le += nt(
                Be,
                ne.commentStr,
                ne.commentStyle,
                be
              );
            }
            const Tt = ue && ue[Be];
            if (Tt) {
              const te = ot(Be, Tt, b);
              te.needCalcChain && (ge = !0, ie += te.chainCell), C += te.cell, R += te.cell, delete ue[Be];
            } else if (typeof ee == "string") {
              const te = '<c r="' + l[Q] + k + '" t="s" ' + (re && e.styles && e.styles[re] ? 's="' + e.styles[re].index + '"' : "") + "><v>" + B + "</v></c>";
              if (R += te, C += te, typeof a.multiStyleCondition == "function") {
                const ne = a.multiStyleCondition(
                  ee,
                  h,
                  I,
                  k,
                  Q,
                  !1
                );
                ne && ((!("multiStyleValue" in h) || typeof h.multiStyleValue > "u") && (h.multiStyleValue = {}), h.multiStyleValue[I] = ne);
              }
              "multiStyleValue" in h && h.multiStyleValue && I in h.multiStyleValue && Array.isArray(h.multiStyleValue[I]) ? P += lt(
                h.multiStyleValue[I],
                N.commentSyntax.value,
                re || ""
              ) : P += "<si><t>" + $e(ee) + "</t></si>", L[ee] = ee, B++;
            } else {
              const te = '<c r="' + l[Q] + k + '" ' + (re && e.styles && e.styles[re] ? 's="' + e.styles[re].index + '"' : "") + "><v>" + ee + "</v></c>";
              C += te, R += te;
            }
          }), A - 1 == O && Object.keys(ke).forEach((I) => {
            ke[I].inProgress && xe.push(
              I + ke[I].start + ":" + I + k
            );
          }), x[k] = {
            startTag: V,
            endTag: "</row>",
            details: R
          }, k++, C += "</row>";
        }), a.sortAndFilter && (a.sortAndFilter.mode == "all" ? ce += '<autoFilter ref="A1:' + l[T - 1] + (k - 1) + '" />' : typeof a.sortAndFilter.ref == "string" && a.sortAndFilter.ref.length > 0 && (ce += '<autoFilter ref="' + a.sortAndFilter.ref + '" />'));
      }
      if (We.length > 0 && We.forEach((c) => {
        const _ = a.shiftLeft ? a.shiftLeft : 0, F = a.headers[c - _], A = l[c];
        ue[A + "" + k] = {
          start: a.withoutHeader ? A + "1" : A + "2",
          end: A + "" + (k - 1),
          type: F.formula.type,
          ...F.formula.styleId ? { styleId: F.formula.styleId } : {}
        };
      }), Ge.length > 0 && Ge.forEach((c) => {
        const _ = a.headers[c];
        _.conditionalFormatting && Ue.push({
          ..._.conditionalFormatting,
          start: a.withoutHeader ? l[c] + "1" : l[c] + "2",
          end: l[c] + "" + (k - 1)
        });
      }), ue) {
        const c = Object.keys(ue).sort(
          (_, F) => _ > F ? 1 : -1
        );
        if (c.length) {
          let _ = {};
          c.forEach((F) => {
            const A = ot(
              F,
              ue[F],
              b,
              e.styles
            );
            A.needCalcChain && (ge = !0, ie += A.chainCell), _[A.row] ? _[A.row] += A.cell : _[A.row] = A.cell;
          }), Object.keys(_).forEach((F) => {
            const A = F, h = _[A];
            let O = x[A];
            if (O) {
              const le = O.startTag + O.details + h + O.endTag;
              let V = new RegExp(O.startTag + "[\\n\\s\\S]*?</row>");
              C = C.replace(V, le);
            } else
              C += '<row r="' + F + '" spans="1:' + T + '"  >' + h + "</row>", x[A] = {
                startTag: '<row r="' + F + '" spans="1:' + T + '"  >',
                endTag: "</row>",
                details: h
              };
          });
        }
      }
    }
    w > 0 && (oe += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (w + 1) + '.xml" />');
    const xt = a.name ? a.name : "sheet" + (w + 1), qt = a.state ? a.state : "visible";
    X += '<sheet state="' + qt + '" name="' + xt + '" sheetId="' + (w + 1) + '" r:id="rId' + (q + 1) + '" />', K += '<Relationship Id="rId' + (q + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (w + 1) + '.xml" />', $ += "<vt:lpstr>" + ("sheet" + (w + 1)) + "</vt:lpstr>", a.selected && (U = !0, M = w);
    const bt = a.sortAndFilter ? 'filterMode="1"' : "";
    let Ct = -1;
    Xe && await Xe.then((T) => {
      let i = T;
      Ct = i.ref, v == null || v.file(i.name, i.image);
    });
    let Ne = !1, Qe = "", vt = "";
    Je && (Ne = !0, await Je.then((T) => {
      let i = "";
      T.forEach((y, p) => {
        const c = p + 1;
        let _ = y.image;
        const F = y.name;
        let A = y.obj.from, h = y.obj.to, O = y.obj.margin;
        y.type;
        let le = y.obj.type, V = y.obj.extent;
        typeof V > "u" && (V = {
          cx: 2e5,
          cy: 2e5
        });
        let R = {
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
          let I = Re(A, l);
          R.start = {
            ...I
          }, R.end = {
            col: I.col + 1,
            row: I.row + 1
          };
        }
        if (typeof h == "string" && h.length >= 2) {
          let I = Re(h, l);
          I.row += 1, I.col += 1, R.end = {
            ...I
          };
        }
        R.end.mR = 0, R.end.mB = 0, R.start.mL = 0, R.start.mT = 0, O && ((O.all || O.right) && (R.end.mR = O.all || O.right), (O.all || O.bottom) && (R.end.mB = O.all || O.bottom), (O.all || O.left) && (R.start.mL = O.all || O.left), (O.all || O.top) && (R.start.mT = O.all || O.top)), le == "one" ? Qe += "<xdr:oneCellAnchor><xdr:from><xdr:col>" + R.start.col + "</xdr:col><xdr:colOff>" + R.start.mT + "</xdr:colOff><xdr:row>" + R.start.row + "</xdr:row><xdr:rowOff>" + R.start.mL + '</xdr:rowOff></xdr:from><xdr:ext cx="' + V.cx + '" cy="' + V.cy + '"/><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="' + c + '" name="Picture ' + c + '"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize="0" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' + c + '"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst="rect"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:oneCellAnchor>' : Qe += '<xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>' + R.start.col + "</xdr:col><xdr:colOff>" + R.start.mT + "</xdr:colOff><xdr:row>" + R.start.row + "</xdr:row><xdr:rowOff>" + R.start.mL + "</xdr:rowOff></xdr:from><xdr:to><xdr:col>" + R.end.col + "</xdr:col><xdr:colOff>" + R.end.mB + "</xdr:colOff><xdr:row>" + R.end.row + "</xdr:row><xdr:rowOff>" + R.end.mR + '</xdr:rowOff></xdr:to><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="' + c + '" name="Picture ' + c + '"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize="0" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="rId' + c + '"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst="rect"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:twoCellAnchor>', v == null || v.file(F, _), i += '<Relationship Id="rId' + c + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/' + F + '" />';
      }), vt = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` + i + "</Relationships>";
    })), xe = [...new Set(xe)];
    let wt = "", Ae = 1;
    Ue.length > 0 && (wt = Ue.reduce((T, i) => {
      if (i.type == "cells")
        return i.operator == "ct" ? T + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="containsText" dxfId="' + (i.styleId && Z[i.styleId] ? Z[i.styleId] : 0) + '" priority="' + (i.priority ? i.priority : Ae++) + '"  operator="containsText" text="' + i.value + '"><formula>NOT(ISERROR(SEARCH("' + i.value + '",' + i.start + ")))</formula></cfRule></conditionalFormatting>" : typeof i.operator > "u" || typeof n[i.operator] > "u" ? T : T + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="cellIs" dxfId="' + (i.styleId && typeof Z[i.styleId] < "u" ? Z[i.styleId] : 0) + '" priority="' + (i.priority ? i.priority : Ae++) + '" operator="' + n[i.operator] + '">' + (Array.isArray(i.value) ? i.value.reduce((y, p) => y + "<formula>" + p.value + "</formula>", "") : "<formula>" + i.value + "</formula>") + "</cfRule></conditionalFormatting>";
      if (i.type == "top")
        return T + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="' + (i.operator ? "aboveAverage" : "top10") + '" dxfId="' + (i.styleId && typeof Z[i.styleId] < "u" ? Z[i.styleId] : 0) + '" priority="' + (i.priority ? i.priority : Ae++) + '" ' + (i.bottom ? 'bottom="1"' : "") + " " + (i.percent ? 'percent="1"' : "") + '  rank="' + i.value + '" ' + (i.operator == "belowAverage" ? 'aboveAverage="0"' : "") + "/></conditionalFormatting>";
      if (i.type == "iconSet") {
        let y = "";
        return typeof i.operator > "u" ? T : (i.operator.indexOf("5") == 0 ? y = '<cfvo type="percent" val="0"/><cfvo type="percent" val="20"/><cfvo type="percent" val="40"/><cfvo type="percent" val="60"/><cfvo type="percent" val="80"/>' : i.operator.indexOf("4") == 0 ? y = '<cfvo type="percent" val="0"/><cfvo type="percent" val="25"/><cfvo type="percent" val="50"/><cfvo type="percent" val="75"/>' : y = '<cfvo type="percent" val="0"/><cfvo type="percent" val="33"/><cfvo type="percent" val="67"/>', T + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="iconSet" priority="' + (i.priority ? i.priority : Ae++) + '"><iconSet iconSet="' + i.operator + '">' + y + "</iconSet></cfRule></conditionalFormatting>");
      } else return i.type == "colorScale" ? T + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="colorScale" priority="' + (i.priority ? i.priority : Ae++) + '"><colorScale><cfvo type="min"/>' + (i.operator == "percentile" ? '<cfvo type="percentile" val="' + i.value + '"/>' : "") + '<cfvo type="max"/>' + (i.colors && Array.isArray(i.colors) ? i.colors.reduce((y, p) => y + '<color rgb="' + he(p, o) + '"/>', "") : '<color rgb="FFF8696B"/><color rgb="FFFFEB84"/><color rgb="FF63BE7B"/>') + "</colorScale></cfRule></conditionalFormatting>" : i.type == "dataBar" ? T + '<conditionalFormatting sqref="' + i.start + ":" + i.end + '"><cfRule type="dataBar" priority="' + (i.priority ? i.priority : Ae++) + '"><dataBar><cfvo type="min"/><cfvo type="max"/>' + (i.colors && Array.isArray(i.colors) ? i.colors.reduce((y, p) => y + '<color rgb="' + he(p, o) + '"/>', "") : '<color rgb="FF638EC6"/>') + "</dataBar></cfRule></conditionalFormatting>" : T;
    }, "")), (ze || Ie || Ne) && D == null && (D = f == null ? void 0 : f.folder("drawings")), Ne && j == null && (j = D == null ? void 0 : D.folder("_rels")), E["sheet" + (w + 1)] = {
      indexId: q + 1,
      key: "sheet" + (w + 1),
      sheetName: xt,
      sheetDataTableColumns: H,
      backgroundImageRef: Ct,
      sheetDimensions: Y,
      asTable: se || !1,
      sheetDataString: C,
      sheetDropDown: ro(a.dropDowns),
      sheetBreakLine: Ze,
      viewType: _e,
      hasComment: Ie,
      drawersContent: Qe,
      cFDataString: wt,
      sheetMargin: gt,
      sheetHeaderFooter: Pe,
      isPortrait: je,
      drawersRels: vt,
      hasImages: Ne,
      hasCheckbox: ze,
      formRel: ht,
      checkboxDrawingContent: dt,
      checkboxForm: ae,
      checkboxSheetContent: ut,
      checkboxShape: pt,
      commentString: Le,
      commentAuthor: pe,
      shapeCommentRowCol: He,
      splitOption: Te,
      sheetViewProperties: Ee,
      sheetSizeString: W.length > 0 ? "<cols>" + W + "</cols>" : "",
      protectionOption: a.protectionOption ? Object.keys(a.protectionOption).reduce((T, i) => T + " " + i + '="' + a.protectionOption[i] + '" ', "<sheetProtection ") + "/>" : "",
      merges: xe.length > 0 ? xe.reduce((T, i) => T + ' <mergeCell ref="' + i + '" />', '<mergeCells count="' + xe.length + '">') + " </mergeCells>" : "",
      selectedView: !!a.selected,
      sheetSortFilter: ce,
      tabColor: a.tabColor ? '<sheetPr codeName="' + ("Sheet" + (w + 1)) + '" ' + bt + ' ><tabColor rgb="' + a.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + bt + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, q++;
  }
  ge && (q++, K += '<Relationship Id="rId' + q + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain" Target="calcChain.xml"/>', f == null || f.file(
    "calcChain.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<calcChain xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">` + ie + "</calcChain>"
  ));
  let Mt = Object.keys(E), qe = m.folder("_rels");
  qe == null || qe.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  let Oe = m.folder("docProps");
  Oe == null || Oe.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), Oe == null || Oe.file("app.xml", Xt(s, $)), f == null || f.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr />` + (U ? '<bookViews><workbookView xWindow="3540" yWindow="1365" windowWidth="21600" windowHeight="11325" activeTab="' + M + '"/></bookViews>' : "") + " <sheets>  " + X + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), f == null || f.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (B - 1) + '" uniqueCount="' + Object.keys(L).length + '"> ' + P + "</sst>"
  );
  let Ye = f == null ? void 0 : f.folder("_rels");
  Ye == null || Ye.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + K + " </Relationships>"
  );
  let Ve = f == null ? void 0 : f.folder("theme");
  Ve == null || Ve.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/></a:theme>`
  );
  let Fe = f == null ? void 0 : f.folder("worksheets"), ft = [], mt = [], De = [];
  if (Mt.forEach((w, a) => {
    const b = E[w];
    let x = "", Y = {
      form: !1,
      drawing: !1,
      vmlDrwing: !1,
      comment: !1,
      table: !1,
      sheetDrawingsPushed: !1
    };
    const se = b.sheetDataTableColumns;
    if (se.length > 0) {
      mt.push("table" + (a + 1) + ".xml");
      const C = b.asTable, W = b.sheetDimensions;
      de == null || de.file(
        "table" + (a + 1) + ".xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="xr xr3" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" id="` + (a + 1) + '"  name="Table' + (a + 1) + '" displayName="Table' + (a + 1) + '" ref="' + W.start + ":" + W.end + '" totalsRowShown="0"><autoFilter ref="' + W.start + ":" + W.end + '"/>' + se + '<tableStyleInfo name="TableStyle' + (C.type ? C.type : "Medium") + (C.styleNumber ? C.styleNumber : 2) + '" showFirstColumn="' + (C.firstColumn ? C.firstColumn : "0") + '" showLastColumn="' + (C.lastColumn ? C.lastColumn : "0") + '" showRowStripes="' + (C.rowStripes ? C.rowStripes : "1") + '" showColumnStripes="' + (C.columnStripes ? C.columnStripes : "0") + '"/></table>'
      ), x += '<Relationship Id="rId15" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/table" Target="../tables/table' + (a + 1) + '.xml"/>';
    }
    const H = "drawing" + (De.length + 1) + ".xml";
    if (b.hasImages && (De.push(H), Y.sheetDrawingsPushed = !0, j == null || j.file(
      H + ".rels",
      b.drawersRels.toString()
    ), Y.drawing = !0, x += '<Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"  Target="../drawings/' + H + '" />'), b.hasCheckbox && (Y.sheetDrawingsPushed || De.push(H), x += '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing" Target="../drawings/vmlDrawing' + (a + 1) + '.vml" />' + (Y.drawing ? "" : '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" Target="../drawings/' + H + '" />'), Y.drawing = !0, Y.vmlDrwing = !0, x += b.formRel), (b.hasCheckbox || b.hasImages) && (D == null || D.file(
      H,
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"  xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex"  xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"  xmlns:dgm="http://schemas.openxmlformats.org/drawingml/2006/diagram"  xmlns:x3Unk="http://schemas.microsoft.com/office/drawing/2010/slicer"  xmlns:sle15="http://schemas.microsoft.com/office/drawing/2012/slicer">` + (b.hasImages ? b.drawersContent : "") + (b.hasCheckbox ? b.checkboxDrawingContent : "") + "</xdr:wsDr>"
    )), b.hasComment) {
      ft.push(a + 1);
      let C = b.commentAuthor;
      f == null || f.file(
        "comments" + (a + 1) + ".xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><authors>` + (Array.isArray(C) && C.length > 0 ? C.reduce(
          (W, ce) => W + "<author>" + ce + "</author>",
          ""
        ) : "<author></author>") + "</authors><commentList>" + b.commentString + "</commentList></comments>"
      ), x += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments" Target="../comments' + (a + 1) + '.xml" />' + (Y.vmlDrwing ? "" : '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing" Target="../drawings/vmlDrawing' + (a + 1) + '.vml" />');
    }
    if ((b.hasComment || b.hasCheckbox) && (D == null || D.file(
      "vmlDrawing" + (a + 1) + ".vml",
      '<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint"><o:shapelayout v:ext="edit"><o:idmap v:ext="edit" data="1"/></o:shapelayout>' + (b.hasCheckbox ? Se.checkbox + b.checkboxShape : "") + (b.hasComment ? '  <v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"     path="m,l,21600r21600,l21600,xe">    <v:stroke joinstyle="miter"/>    <v:path gradientshapeok="t" o:connecttype="rect"/>  </v:shapetype>' + b.shapeCommentRowCol.reduce((C, W) => C + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;margin-left:77.25pt;margin-top:23.25pt;width:264pt;height:42.75pt;z-index:1;visibility:hidden' fillcolor="#ffffe1">  <v:fill color2="#ffffe1"/>  <v:shadow on="t" color="black" obscured="t"/>  <v:path o:connecttype="none"/>  <v:textbox>   <div style='text-align:left'></div>  </v:textbox>  <x:ClientData ObjectType="Note">   <x:MoveWithCells/>   <x:SizeWithCells/>   <x:Anchor>    1, 15, 1, 10, 5, 15, 4, 4</x:Anchor>   <x:AutoFill>False</x:AutoFill>   <x:Row>` + W.row + "</x:Row>   <x:Column>" + W.col + "</x:Column>  </x:ClientData></v:shape>", "") : "") + "</xml>"
    )), b.backgroundImageRef > 0 && (x += '<Relationship Id="rId16" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image' + b.backgroundImageRef + '.png"/>'), b.hasImages || b.hasComment || b.hasCheckbox || se.length > 0 || b.backgroundImageRef > 0) {
      const C = Fe == null ? void 0 : Fe.folder("_rels");
      C == null || C.file(
        "sheet" + (a + 1) + ".xml.rels",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> ` + x + "</Relationships>"
      );
    }
    let k = "";
    b.selectedView || b.splitOption ? k = '<sheetViews><sheetView tabSelected="1"' + b.sheetViewProperties + (b.viewType.length > 0 ? ' view="' + b.viewType + '"' : "") + ' workbookViewId="0">' + b.splitOption + (b.selectedView ? '<selection activeCell="A0" sqref="A0" />' : "") + "</sheetView></sheetViews>" : k = '<sheetViews><sheetView workbookViewId="0"' + b.sheetViewProperties + (b.viewType.length > 0 ? ' view="' + b.viewType + '"' : "") + "/></sheetViews>", Fe == null || Fe.file(
      b.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + b.tabColor + k + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + b.sheetSizeString + "<sheetData>" + b.sheetDataString + "</sheetData>" + b.sheetDropDown + b.protectionOption + b.sheetSortFilter + b.merges + b.cFDataString + (b.hasImages || b.hasCheckbox ? '<drawing r:id="rId2" />' : "") + (b.hasComment || b.hasCheckbox ? '<legacyDrawing r:id="rId3" />' : "") + (b.hasCheckbox ? '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice Requires="x14"><controls>' + b.checkboxSheetContent + "</controls></mc:Choice></mc:AlternateContent>" : "") + b.sheetMargin + (b.isPortrait || b.sheetBreakLine.length > 0 ? '<pageSetup orientation="portrait" r:id="rId' + (a + 1) + '"/>' : "") + b.sheetBreakLine + b.sheetHeaderFooter + (b.backgroundImageRef > 0 ? '<picture r:id="rId16"/>' : "") + (se.length > 0 ? '<tableParts count="1"> <tablePart r:id="rId15"/></tableParts>' : "") + "</worksheet>"
    );
  }), ae.length > 0) {
    let w = f == null ? void 0 : f.folder("ctrlProps");
    ae.forEach((a, b) => {
      w == null || w.file("ctrlProp" + (b + 1) + ".xml", a);
    });
  }
  if (m.file(
    "[Content_Types].xml",
    Zt(
      oe,
      ft,
      [...new Set(Ce)],
      De,
      ae,
      ge,
      mt
    )
  ), o)
    return m.generateAsync({
      type: e.generateType ? e.generateType : "nodebuffer"
    }).then((w) => w);
  if (e.notSave)
    return m.generateAsync({ type: "blob" }).then((w) => w.slice(
      0,
      w.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  m.generateAsync({ type: "blob" }).then(function(w) {
    import("./FileSaver.min-BEH1o5YI.js").then((a) => a.F).then((a) => {
      const { saveAs: b } = a;
      b(
        w,
        (e.fileName ? e.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function no(e) {
  const t = e.length;
  let r = 0, o = {}, n = {}, l = {};
  for (let s = 0; s < t; s++) {
    const f = e[s], v = f.length;
    let D = {};
    for (let j = 0; j < v; j++) {
      r++;
      const S = f[j];
      let d;
      S.sheetName ? d = S.sheetName : d = "Sheet 1", d in o || (o[d] = {
        headers: [],
        data: [],
        labelCounter: 0,
        seenAt: s
      }), d in n || (n[d] = {
        index: s,
        value: 0
      }), d in l || (o[d].labelCounter = 0, l[d] = !0);
      let G = [];
      const z = o[d].headers.length;
      let Z = {}, N = o[d].seenAt == s, oe = S.headers.reduce((K, L, E) => (o[d].labelCounter++, z < o[d].labelCounter && G.push({
        label: "c" + o[d].labelCounter,
        text: N ? L.text : ""
      }), Z["c" + o[d].labelCounter] = L.text, {
        ...K,
        [L.label]: "c" + o[d].labelCounter
      }), {});
      if (o[d].headers.push(...G), S.spaceX)
        for (let K = 0; K < S.spaceX; K++)
          o[d].labelCounter++, z <= o[d].labelCounter && o[d].headers.push({
            label: "c" + o[d].labelCounter,
            text: ""
          });
      n[d].index + 1 == s && (D[d] = n[d].value);
      let P = D[d] || 0;
      P > 0 && (!o[d].headerIndex || o[d].headerIndex && o[d].headerIndex != P ? o[d].data.push(Z) : o[d].data[P] = {
        ...o[d].data[P],
        ...Z
      }, o[d].headerIndex = P, P++);
      let B = Object.keys(oe), X = S.data.length >= o[d].data.length;
      if (o[d].data = S.data.reduce((K, L, E) => {
        let $ = {};
        return K.length > E + P ? $ = K[E + P] : K.push($), B.forEach((q) => {
          let U = oe[q];
          $[U] = L[q] ? L[q] : "";
        }), $.tableIndex = r, $.tableStringIndex = E + "," + j, K[E + P] = $, K;
      }, o[d].data), X && S.spaceY) {
        const K = o[d].headers.length;
        for (let L = 0; L < S.spaceY; L++) {
          let E = {};
          for (let $ = 0; $ < K; $++) {
            const q = o[d].headers[$];
            E[q.label] = "";
          }
          o[d].data.push(E);
        }
      }
      n[d] = {
        value: Math.max(o[d].data.length, n[d].value),
        index: s
      };
    }
    l = {};
  }
  let g = Object.keys(o), u = [];
  return g.reduce(
    (s, f) => {
      let v = o[f];
      return s.sheet.push({
        ...v,
        name: f
      }), s;
    },
    { sheet: u }
  );
}
function it(e) {
  return /^[A-Z]+[1-9][1-9]*:[A-Z]+[1-9][1-9]*$/.test(e);
}
function st(e) {
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
    validateFunction(e, t, r, o) {
      return t.rtl && t.ltr && o && console.warn("Alignment-rtl and ltr cannot be used together."), (t.readingOrder && t.ltr || t.readingOrder && t.rtl) && o && console.warn(
        "Alignment-readingOrder cannot be used with rtl or ltr."
      ), !0;
    }
  },
  border: {
    mode: "TYPE_CHECK",
    type: "object",
    validateFunction(e, t, r, o) {
      const n = ["full", "top", "left", "right", "bottom"], l = [
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
      return Object.keys(t).forEach((u) => {
        const m = u;
        if (n.indexOf(m) < 0)
          throw 'border-The type of border is not valid. Valid options include "full," "top," "left," "right," and "bottom."';
        const s = t[m];
        if (!("color" in s))
          throw "border-The border must have a color.";
        if (!("style" in s))
          throw "border-The border needs a style.";
        if (typeof s.style == "string" && l.indexOf(s.style) < 0)
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
    validateFunction(e, t, r, o) {
      const n = Object.keys(t), l = ["outlineLevel", "hidden", "height"];
      return n.forEach((g) => {
        l.indexOf(g) < 0 && o && console.warn(
          'The Schema of mapSheetDataOption does not include the "' + g + '" property.'
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
    validateFunction(e, t, r, o) {
      return Array.isArray(t) && t.forEach((n) => {
        if (n.type == "cells") {
          const l = ["lt", "gt", "between", "ct", "eq"];
          if (!n.operator || !n.start || !n.end || typeof n.value > "u")
            throw {
              record: n,
              error: "The object is not complete; you need to fill in the values for operator, start, end and value."
            };
          if (l.indexOf(n.operator) < 0)
            throw { record: n, error: "The operator is not valid." };
        } else if (n.type == "top") {
          const l = ["belowAverage", "aboveAverage"];
          if (!n.start || !n.end || typeof n.value > "u")
            throw {
              record: n,
              error: "The object is not complete; you need to fill in the values for start, end and value."
            };
          if (n.operator && l.indexOf(n.operator) < 0)
            throw { record: n, error: "The operator is not valid." };
        } else if (n.type == "iconSet") {
          if (!n.operator || !n.start || !n.end)
            throw {
              record: n,
              error: "The object is not complete; you need to fill in the values for operator, start and end"
            };
        } else if (n.type == "colorScale") {
          if (!n.start || !n.end)
            throw {
              record: n,
              error: "The object is not complete; you need to fill in the values for start and end"
            };
        } else if (n.type == "dataBar") {
          if (!n.start || !n.end)
            throw {
              record: n,
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
    validateFunction(e, t, r, o) {
      if (Array.isArray(t)) {
        const n = ["one", "two"];
        t.forEach((l) => {
          if (typeof l.src != "string")
            throw '"src" property is required.';
          if (typeof l.from != "string" || l.from.length == 0)
            throw '"from" property is required.';
          if (l.to && !st(l.to))
            throw 'value of "to" is not valid.';
          if (l.from && !st(l.from))
            throw 'value of "from" is not valid.';
          if (n.indexOf(l.type) < 0)
            throw 'Type of "type" is not valid in the "images" property.';
          if (l.type == "two" && !l.to)
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
    validateFunction(e, t, r, o) {
      if (Array.isArray(t)) {
        let n = [];
        if (t.forEach((l) => {
          it(l) || n.push(
            "The " + l + ' reference is not valid in the "merges" property.'
          );
        }), n.length > 0)
          throw n;
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
    validateFunction(e, t, r, o) {
      if (typeof t == "object") {
        const n = ["all", "ref"];
        if (!t.mode)
          throw '"mode" is required in sortAndFilter';
        if (n.indexOf(t.mode) < 0)
          throw '"mode" is not valid';
        if (t.mode == "ref")
          if (t.ref) {
            if (!it(t.ref))
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
    validateFunction(e, t, r, o) {
      const n = [
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
      ], l = ["0", "1", 0, 1];
      return Object.keys(t).forEach((u) => {
        const m = t[u];
        if (n.indexOf(u) < 0)
          throw '"' + u + '" is not valid.';
        if (l.indexOf(m) < 0)
          throw 'value of "' + u + '" is not valid';
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
    validateFunction(e, t, r, o) {
      if (Array.isArray(t))
        t.forEach((n) => {
          if (!n.col || !n.row)
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
    validateFunction(e, t, r, o) {
      const n = ["pageLayout", "pageBreakPreview"];
      if (t.type && n.indexOf(t.type) < 0)
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
function Bt(e, t = !0, r = !0) {
  Object.keys(e).forEach((n) => {
    const l = e[n], g = Object.keys(l);
    if (l.format && !Lt[l.format])
      throw 'The "' + l.format + '" format that has been used is not defined.';
    l.underline && l.doubleUnderline, g.forEach((u) => {
      let m = l[u];
      const s = lo[u];
      if (Me(m, s, u, t, r))
        return !0;
    });
  });
}
function $t(e, t = !0, r = !0) {
  Array.isArray(e) || (e = [e]), e.forEach((o) => {
    Object.keys(o).forEach((l) => {
      const g = o[l], u = io[l];
      Me(g, u, l, t, r);
    });
  });
}
function so(e, t = !0, r = !0) {
  Object.keys(e).forEach((n) => {
    let l = e[n];
    const g = ao[n];
    if (Me(l, g, n, t, r))
      if (n == "sheet")
        if (Array.isArray(l))
          $t(l);
        else
          throw "Sheet must be Array.";
      else n == "styles" && Bt(l);
  });
}
function Me(e, t, r, o, n) {
  if (t) {
    if (typeof e != t.type) {
      if (t.type == "object" || t.type == "string" || o)
        throw 'The Type of The "' + r + '" is not valid';
      n && console.warn("The property type must be " + t.type);
    }
    if (t.isEnum && t.enum.indexOf(e) < 0)
      throw 'The value of "' + r + '" must be ' + JSON.stringify(t.enum);
    if (t.min && e < t.min)
      throw 'The value of "' + r + '" must be higher than ' + t.min;
    if (t.notEmpty && (!e || e.length <= 0))
      throw 'The value of "' + r + '" must not be empty.';
    if (t.isArray && !Array.isArray(e))
      throw 'The value of "' + r + '" should be an array.';
    return typeof t.validateFunction == "function" && t.validateFunction(r, e, o, n), !0;
  } else
    return n && console.warn(
      'The Schema Object does not include the "' + r + '" property.'
    ), !1;
}
const co = {
  checkSheetValidWithOneRef: st,
  checkSheetValidWithTwoRef: it,
  generalValidationCheck: Me
}, ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportedForTesting: co,
  validateExcelTableObjectFunction: so,
  validateSheetArrayFunction: $t,
  validateStyleObjectFunction: Bt
}, Symbol.toStringTag, { value: "Module" }));
function It(e) {
  if (typeof e > "u" || e == null)
    return "";
  typeof e != "string" && (e = String(e));
  let t = e, r = !1;
  return e.indexOf('"') >= 0 && (t = t.replace(/"/g, '""'), r = !0), e.indexOf(",") >= 0 && (r = !0), r && (t = '"' + t + '"'), t;
}
function fo(e) {
  return e ? " " : ",";
}
function Pt(e, t) {
  return e.substring(0, e.length - t) + `
`;
}
async function Kt(e, t = !1, r = !1) {
  const o = fo(r), n = r ? ".txt" : ".csv", l = o.length;
  let g = [];
  if (e.sheet.forEach((m) => {
    let s = "", f = "";
    const v = m.headers;
    let D = [], j = v.length;
    for (let S = 0; S < j; S++) {
      const d = v[S];
      D.push(d.label), m.withoutHeader || (f += It(d.text) + o);
    }
    s += Pt(f, l), j = m.data.length;
    for (let S = 0; S < j; S++) {
      f = "";
      const d = m.data[S];
      D.forEach((G) => {
        f += It(d[G]) + o;
      }), s += Pt(f, l);
    }
    g.push(s);
  }), e.backend)
    return g;
  const u = await import("./FileSaver.min-BEH1o5YI.js").then((m) => m.F).then((m) => m.saveAs);
  if (t) {
    const m = await import("./jszip.min-D-TEDr9v.js").then((v) => v.j).then((v) => v.default);
    let s = new m();
    g.forEach((v, D) => {
      s.file("sheet" + (D + 1) + n, v);
    });
    const f = await s.generateAsync({ type: "blob" }).then(function(v) {
      return v;
    });
    return u(
      f,
      (e.fileName ? e.fileName : "tableRecord") + ".zip"
    ), "done";
  }
  g.forEach((m) => {
    var s = new Blob([m], {
      type: "text/" + (r ? "plain" : "csv") + ";charset=utf-8"
    });
    u(
      s,
      (e.fileName ? e.fileName : "tableRecord") + n
    );
  });
}
const jt = {
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
async function mo(e, t, r, o, n = !0, l = !1, g = " ", u = !0, m = {
  display: "flex",
  flexDirection: "column"
}, s = {
  borderSpacing: "0",
  border: "1px solid #EEEEEEF1"
}, f = {
  width: "68px",
  height: "24px",
  border: "1px solid #EEEEEEF1"
}, v = {
  display: "flex"
}, D = {
  height: "40px",
  width: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "0",
  background: "transparent",
  cursor: "pointer"
}, j = {
  background: "#EEEDEB"
}) {
  let S = await import("./read-utils-C7gudp0B.js").then(
    async (E) => await E.extractExcelData(e, !1, o)
  ), d = null;
  if (t ? d = document.querySelector(t) : r && (d = r), d == null && !l)
    throw "Container Node not found";
  const G = Object.keys(m), z = Object.keys(s), Z = Object.keys(f), N = Object.keys(v), oe = Object.keys(D), P = Object.keys(j);
  let B = document.createElement("div");
  N.forEach((E) => {
    B.style[E] = v[E];
  }), l || (u && d != null && (d.innerText = ""), G.forEach((E) => {
    d.style[E] = m[E];
  }), d.appendChild(B));
  let X = [], K = !1, L = 0;
  do {
    L++;
    const E = S.sheetName.next();
    if (!E.value)
      break;
    const $ = document.createElement("div");
    if ($.style.display = "none", !l) {
      const J = document.createElement("button");
      oe.forEach((ye) => {
        J.style[ye] = D[ye];
      }), J.addEventListener("click", (ye) => {
        const ve = J.getAttribute("data-sheet"), we = d.querySelector(
          'div[data-sheet="' + ve + '"]'
        );
        if (we) {
          P.forEach((ie) => {
            J.style[ie] = j[ie];
          });
          const Se = d.querySelector(
            "[data-sheet-button-activate]"
          );
          let ae = d.querySelector("[data-sheet-activate]");
          we.setAttribute("data-sheet-activate", "1"), we.style.display = "flex", J.setAttribute("data-sheet-button-activate", "1"), Se && (oe.forEach((ie) => {
            Se.style[ie] = D[ie];
          }), Se.removeAttribute("data-sheet-button-activate")), ae && (ae.style.display = "none", ae.removeAttribute("data-sheet-activate"));
        } else
          console.error("Sheet content not found!! id is " + ve);
      }), J.setAttribute("data-sheet", L + ""), $.setAttribute("data-sheet", L + ""), J.innerText = E.value[1] || E.value[0], B.appendChild(J), d.appendChild($);
    }
    let q = n ? "th" : "td";
    const U = document.createElement("table");
    z.forEach((J) => {
      U.style[J] = s[J];
    });
    const M = S.data[E.value[0]] || S.data[E.value[1]], Ce = S.maxLengthOfColumn[E.value[0]] || S.maxLengthOfColumn[E.value[1]];
    if (Array.isArray(M)) {
      const J = M.length;
      for (let ye = 0; ye < J; ye++) {
        const ve = M[ye], we = document.createElement("tr"), Se = Array.isArray(ve);
        for (let ae = 0; ae <= Ce; ae++) {
          let ie = g;
          if (Se) {
            const de = ve[ae];
            typeof de == "string" && (ie = de);
          }
          const ge = document.createElement(q);
          Z.forEach((de) => {
            ge.style[de] = f[de];
          }), ge.innerText = ie, we.appendChild(ge);
        }
        U.appendChild(we), q = "td";
      }
    }
    l ? X.push(U) : ($.appendChild(U), d == null || d.appendChild($)), K = E.done;
  } while (!K);
  if (l)
    return X;
  {
    const E = d.querySelector(
      'div[data-sheet="1"]'
    );
    E && (E.style.display = "flex", E.setAttribute("data-sheet-activate", "1"));
    const $ = d.querySelector(
      'button[data-sheet="1"]'
    );
    return $ && (P.forEach((q) => {
      $.style[q] = j[q];
    }), $.setAttribute("data-sheet-button-activate", "1")), "Done";
  }
}
async function uo(e, t, r = !0, o = "property") {
  let n = await import("./read-utils-C7gudp0B.js").then(
    async (u) => await u.extractExcelData(e, !1, t)
  ), l = {}, g = [];
  return Object.keys(n.sheetNameObject).forEach((u) => {
    const m = n.sheetNameObject[u], s = n.data[m] || n.data[u], f = n.maxLengthOfColumn[m] || n.maxLengthOfColumn[u];
    for (let j = 0; j <= f; j++)
      g[j] = o + (j + 1);
    let v = r, D = [];
    s.forEach((j) => {
      let S = {};
      j.forEach((d, G) => {
        typeof d == "string" && (v ? g[G] = d : S[g[G]] = d);
      }), v = !1, D.push(S);
    }), l = Object.assign(l, {
      [m]: D
    });
  }), l;
}
const yo = Ht, go = to;
function xo(e, t, r = {}) {
  const o = Wt(
    e,
    t,
    r.keepStyle,
    r.rowHeightScaleFunction,
    r.colWidthScaleFunction
  );
  return ct(o);
}
function bo(e) {
  const t = no(e);
  return ct(t);
}
function Co(e, t) {
  return ct(zt(e, t));
}
function vo(e, t = !1, r) {
  return import("./read-utils-C7gudp0B.js").then(
    (o) => o.extractExcelData(e, t, r)
  );
}
function wo(e, t = !1) {
  return Kt(e, t, !1);
}
function To(e, t = !1) {
  return Kt(e, t, !0);
}
function Eo(e, t, r, o = { ...jt }) {
  return o = {
    ...jt,
    ...o
  }, mo(
    e,
    t,
    r,
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
  Qt as c,
  xo as d,
  vo as e,
  wo as f,
  Re as g,
  To as h,
  Eo as i,
  ct as j,
  uo as k,
  po as r,
  bo as s,
  Co as t,
  ho as v
};
