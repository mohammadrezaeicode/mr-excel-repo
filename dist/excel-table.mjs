function Fe(e) {
  return e.replace(/ /g, "");
}
function fe(e) {
  e = Number(e);
  var l = e.toString(16);
  return l.length == 1 ? "0" + l : l;
}
function X(e) {
  e = Fe(e);
  let l = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), f = l.reduce((n, r) => n && !Number.isNaN(Number(r)), !0);
  return l.length == 4 && l[3] == "0" || !f ? null : (fe(l[0]) + fe(l[1]) + fe(l[2])).toUpperCase();
}
function ae(e, l) {
  if (typeof e > "u" || e === null)
    return null;
  if (!l) {
    let f = Fe(e);
    f.indexOf("var(") == 0 && f.lastIndexOf(")") == f.length - 1 && (f = f.substring(4, f.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      f
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const f = X(e);
    e = f || "";
  }
  return e;
}
function $e(e, l, f, n, r, p, a, g) {
  let F = [], u = "both", w = [];
  !l || l === 0 ? (l = 1, u = "col") : w.push(l - 1), !e || e === 0 ? (e = 0, u = "row") : w.push(e - 1);
  let C = r || {};
  C.mergeType = g && g.mergeType ? [...g.mergeType, u] : [u], C.mergeValue = g && g.mergeValue ? [...g.mergeValue, w] : [w], C.mergeStart = g && g.mergeStart ? [...g.mergeStart, f] : [f];
  for (let $ = 0; $ < l; $++) {
    let b = e;
    for (let d = 0; d < n; d++)
      f <= d ? b >= 1 ? (C["c" + d] = p, p = "", a += "*", b--) : l >= 2 && f == d ? (C["c" + d] = p, p = "", a += "+") : a += "-" : $ > 0 && (a += "-");
    F.push({
      ...C,
      mergeString: a
    }), C = {}, a = "";
  }
  return F;
}
function Ie(e, l, f, n, r) {
  var C;
  if (!e && !l)
    throw "Error: One of the function inputs is required.";
  let p;
  e ? p = (C = document.querySelector(e)) == null ? void 0 : C.querySelectorAll("tr") : p = l == null ? void 0 : l.querySelectorAll("tr");
  let a = [], g = [], F = {
    header: {},
    rows: []
  }, u = 40;
  if (p) {
    let $ = !1, b = 0;
    p.forEach((d, t) => {
      var _ = [].slice.call(d.children);
      const L = window.getComputedStyle(d, null);
      let j = X(L.backgroundColor);
      if (!$)
        b = _.length, $ = !0, typeof n == "function" ? u = n(
          Number(L.height.substring(0, L.height.length - 2)),
          t,
          !0
        ) : u = Number(
          L.height.substring(0, L.height.length - 2)
        ), _.forEach((I, K) => {
          let y = window.getComputedStyle(I, null), k = null;
          y.borderBottomWidth !== "0px" && (k || (k = {}), k.bottom = {
            style: "thin",
            color: X(y.borderBottomColor)
          }), y.borderTopWidth !== "0px" && (k || (k = {}), k.top = {
            style: "thin",
            color: X(y.borderTopColor)
          }), y.borderLeftWidth !== "0px" && (k || (k = {}), k.left = {
            style: "thin",
            color: X(y.borderLeftColor)
          }), y.borderRightWidth !== "0px" && (k || (k = {}), k.right = {
            style: "thin",
            color: X(y.borderRightColor)
          });
          let N = X(y.backgroundColor);
          !N && j && (N = j);
          let A = {
            ...N ? { fg: N } : {},
            bold: parseInt(y.fontWeight) > 500,
            size: parseInt(
              y.fontSize.substring(0, y.fontSize.indexOf("p"))
            ),
            ...k ? { border: k } : {},
            alignment: {
              horizontal: y.textAlign,
              vertical: "center",
              ...y.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          F.header[t + "-" + K] = A;
          let x;
          typeof r == "function" ? x = r(
            Number(y.width.substring(0, y.width.length - 2)),
            K
          ) : x = Number(y.width.substring(0, y.width.length - 2)) * 0.15, a.push({
            label: "c" + K,
            colspan: I.getAttribute("colspan"),
            rowspan: I.getAttribute("rowspan"),
            text: I.textContent,
            size: x
          });
        });
      else {
        let I = {}, K = "", y = !1;
        g.length >= t && (I = g[t - 1], K = "mergeString" in I ? I.mergeString : "", y = !0);
        let k = 0;
        _.forEach((N, A) => {
          if ("c" + (A + k) in I)
            for (let m = 0; m <= b + 1 && "c" + (A + m) in I; m++)
              k++;
          A += k;
          let x = window.getComputedStyle(N, null);
          if (N.getAttribute("colspan") || N.getAttribute("rowspan")) {
            let m = $e(
              N.getAttribute("colspan") * 1,
              N.getAttribute("rowspan") * 1,
              A,
              b,
              I,
              N.textContent,
              K,
              I
            );
            g.length < t ? g.push(...m) : m.forEach((o, c) => {
              g.length < t + c ? g.push(...m) : g[t + c] = {
                ...g[t + c],
                ...o
              };
            }), I = m[0], K = m[0].mergeString, y = !0;
          } else
            y || (K += "-");
          let T = null;
          x.borderBottomWidth !== "0px" && (T || (T = {}), T.bottom = {
            style: "thin",
            color: X(x.borderBottomColor)
          }), x.borderTopWidth !== "0px" && (T || (T = {}), T.top = {
            style: "thin",
            color: X(x.borderTopColor)
          }), x.borderLeftWidth !== "0px" && (T || (T = {}), T.left = {
            style: "thin",
            color: X(x.borderLeftColor)
          }), x.borderRightWidth !== "0px" && (T || (T = {}), T.right = {
            style: "thin",
            color: X(x.borderRightColor)
          });
          let E = X(x.backgroundColor);
          !E && j && (E = j);
          let Y = {
            ...E ? { fg: E } : {},
            bold: parseInt(x.fontWeight) > 500,
            size: parseInt(
              x.fontSize.substring(0, x.fontSize.indexOf("p"))
            ),
            ...T ? { border: T } : {},
            // fg: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: x.textAlign,
              vertical: "center",
              direction: x.direction,
              ...x.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          F.header[t + "-" + A] = Y, I["c" + A] = N.textContent;
        }), typeof n == "function" ? I.height = n(
          Number(L.height.substring(0, L.height.length - 2)),
          t,
          !1
        ) : I.height = L.height.substring(0, L.height.length - 2), g.length < t ? g.push(I) : g[t - 1] = I;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: F.header,
    sheet: [
      {
        headerHeight: u,
        styleCellCondition: function($, b, d, t, _, L) {
          return f ? L.includes(t - 1 + "-" + d) ? t - 1 + "-" + d : "" : null;
        },
        data: g,
        headers: a
      }
    ]
  };
}
function we(e, l, f = "", n = [], r = 0) {
  const p = e.length;
  for (let a = 0; a < p; a++)
    n.push(f + e[a]);
  return l < n.length ? n : we(
    e,
    l,
    n[r + 1],
    n,
    r + 1
  );
}
function Ae(e) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + ' <fonts count="' + e.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + e.font.value + ' </fonts> <fills count="' + e.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + e.fill.value + ' </fills> <borders count="' + e.border.count + '"> <border />' + e.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + e.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + e.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> <dxfs count="0" /></styleSheet>';
}
function Oe(e, l) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/> <Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /> <Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + l.reduce((f, n) => f + `
    <Override PartName="/xl/comments${n}.xml"
        ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />`, "") + e + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" /> <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function Le(e, l) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + e + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + e + '" baseType="lpstr"> ' + l + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function pe(e, l, f) {
  let n = e.replace(/[0-9]/g, ""), r = parseInt(e.substr(n.length)), p = '<c r="' + e + '" ' + (f && typeof l.styleId == "string" && f[l.styleId] ? 's="' + f[l.styleId].index + '" ' : "") + ">     <f>" + l.type + "(" + l.start + ":" + l.end + ")</f> </c>";
  return {
    column: n,
    row: r,
    cell: p
  };
}
function he(e, l, f) {
  let n = !1, r, p;
  if (typeof e == "object") {
    if ("author" in e && e.author && (n = !0, p = e.author), "styleId" in e && typeof e.styleId == "string") {
      let a = l[e.styleId];
      typeof a == "string" && (f = a);
    }
    r = "comment" in e && typeof e.comment == "string" ? Se(e.comment) : [""];
  } else
    r = e ? Se(e) : [""];
  return n && r.unshift(p + ":"), {
    hasAuthour: n,
    author: p,
    commentStyl: f,
    commentStr: r
  };
}
function Se(e) {
  var l = e.split(/\r?\n|\r|\n/g);
  return l;
}
function ue(e, l, f, n) {
  let r = `<comment ref="${e}" authorId="${Math.max(
    0,
    n - 1
  )}" shapeId="0">
            <text>`, p = "";
  return l.forEach((a, g) => {
    let F = "";
    if (a.length == 0) {
      p += `
`;
      return;
    }
    g > 0 && (F = 'xml:space="preserve"', p += `
`), r += "<r>" + f + "<t " + F + " >" + p + a + "</t></r>", p = "";
  }), r += "</text></comment>", r;
}
const De = `<rPr>
                        <b />
                        <sz val="9" />
                        <color rgb="000000" />
                        <rFont val="Tahoma" />
                    </rPr>
            `;
function me(e, l) {
  let f = {
    result: [],
    str: l
  }, n = e.reduce((r, p) => {
    let a = r.str.indexOf(p);
    return r.result.push(r.str.substring(0, a)), r.str = r.str.substring(a + p.length), r;
  }, f);
  return n.result.push(n.str), n.result;
}
function _e(e, l, f, n, r, p, a, g, F) {
  if (n) {
    let u = [], w = [], C = [];
    const $ = p.length;
    r.forEach((b, d) => {
      let t;
      try {
        t = b.match(e);
      } catch (_) {
        if (typeof e == "string")
          t = b.match("\\" + e);
        else
          throw _;
      }
      if (t)
        if (g) {
          let _;
          F ? _ = me(t, b) : _ = b.split(e), u.push(..._), w.push(...t), C.push(
            ...t.reduce((L, j) => [...L, l], [])
          );
        } else {
          let _;
          F ? _ = me(t, b) : _ = b.split(e).reduce((L, j, I) => I >= 2 ? (L[1] += e + j, L) : [...L, j], []), u.push(..._), C.push(l), w.push(e.toString());
        }
      else
        u.push(b);
      $ > d && (w.push(p[d]), C.push(a[d]));
    }), r = u, p = w, a = C;
  } else {
    let u;
    try {
      u = f.match(e);
    } catch (w) {
      if (typeof e == "string")
        u = f.match("\\" + e);
      else
        throw w;
    }
    u ? g ? (p.push(...u), a.push(
      ...u.reduce((w, C) => [...w, l], [])
    ), F ? r = me(u, f) : r = f.split(e)) : (p.push(e.toString()), a.push(l), F ? r = me(u, f) : r = f.split(e).reduce((w, C, $) => $ >= 2 ? (w[1] += e + C, w) : [...w, C], [])) : r.push(f), n = !0;
  }
  return {
    v: e,
    text: f,
    textSplited: n,
    splitValue: r,
    matchValue: p,
    styleMatchValue: a
  };
}
function de(e, l, f, n, r) {
  if (typeof e == "object") {
    let p = "", a = [], g = [], F = [], u = !1;
    if (Object.keys(e).forEach((b) => {
      const d = e[b];
      if (b !== "reg") {
        let t = _e(
          b,
          typeof d == "string" ? d : "",
          l,
          u,
          F,
          a,
          g,
          !1,
          r
        );
        u = t.textSplited, F = t.splitValue, a = t.matchValue, g = t.styleMatchValue;
      }
    }), "reg" in e && Array.isArray(e.reg)) {
      const b = e.reg.length;
      for (let d = 0; d < b; d++) {
        const t = e.reg[d];
        if ("reg" in t && "styleId" in t) {
          typeof t.reg == "string" && (t.reg = new RegExp(t.reg, "g"));
          let _ = _e(
            t.reg,
            t.styleId,
            l,
            u,
            F,
            a,
            g,
            !0,
            r
          );
          u = _.textSplited, F = _.splitValue, a = _.matchValue, g = _.styleMatchValue;
        }
      }
    }
    const C = F.length - 1, $ = n in f ? f[n] : "";
    for (let b = 0; b < C; b++) {
      const d = F[b], t = a[b], _ = g[b];
      d.length > 0 && (p += `<r>
        ${$}
            <t xml:space="preserve" >${d}</t>
        </r>`), t.length > 0 && (p += `
                            <r>
           ${f[_]}
            <t xml:space="preserve" >${t}</t>
        </r>
                    `);
    }
    return F[C].length > 0 ? p = `<si>
                    ${p}
                    <r>
        ${$}
            <t>${F[C]}</t>
        </r>
                    </si>` : p = `<si>
                    ${p}
                    </si>`, p;
  } else
    return `
<si>
    <t>${l}</t>
</si>
`;
}
const Re = {
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
}, Me = [
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
];
async function Ee(e) {
  let l = [...Me];
  e.numberOfColumn && e.numberOfColumn > 25 && (l = we(l, e.numberOfColumn));
  const n = (await import("./jszip.min-e651e8fb.mjs").then((m) => m.j)).default;
  var r = new n();
  const p = e.sheet.length;
  var a = r.folder("xl");
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const g = Object.keys(e.styles), F = De;
  let u = g.reduce(
    (m, o, c) => {
      const s = e.styles[o], R = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (s.fg) {
        let P = ae(s.fg, e.backend);
        R.fillIndex = m.fill.count, m.fill.count++, m.fill.value = m.fill.value + '<fill><patternFill patternType="solid">' + (P ? '<fgColor rgb="' + P.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (s.fontColor || s.fontFamily || s.size || s.bold || s.italic || s.underline || s.doubleUnderline) {
        const P = ae(s.fontColor, e.backend);
        R.fontIndex = m.font.count, m.font.count++, m.font.value = m.font.value + "<font>" + (s.bold ? "<b/>" : "") + (s.italic ? "<i />" : "") + `${s.underline || s.doubleUnderline ? `<u ${s.doubleUnderline ? ' val="double" ' : ""}/>` : ""}` + (s.size ? '<sz val="' + s.size + '" />' : "") + (P ? '<color rgb="' + P.replace("#", "") + '" />' : "") + (s.fontFamily ? '<name val="' + s.fontFamily + '" />' : "") + "</font>", m.commentSintax.value[o] = `<rPr>
            ${s.bold ? "<b/>" : ""}
            ${s.italic ? "<i />" : ""}
            ${s.underline || s.doubleUnderline ? `<u ${s.doubleUnderline ? ' val="double" ' : ""}/>` : ""}
            <sz val="${s.size ? `${s.size}` : "9"}" />
            ${P ? `<color rgb="${P.replace("#", "")}" />` : ""}
            <rFont val="${s.fontFamily ? `${s.fontFamily}` : "Tahoma"}" />
        </rPr>
        `;
      }
      let J = "/>";
      s.alignment && (s.alignment.rtl && (s.alignment.readingOrder = 2), delete s.alignment.rtl, s.alignment.ltr && (s.alignment.readingOrder = 1), delete s.alignment.ltr, J = ' applyAlignment="1"><alignment ' + Object.keys(s.alignment).reduce((P, U) => P + " " + U + '="' + s.alignment[U] + '" ', "") + " /></xf>");
      const v = s.border;
      let B = "";
      if (typeof v == "object" && ((v.left || v.full) && (B += '<left style="' + (v.left || v.full).style + '"><color rgb="' + ae(
        (v.left || v.full).color,
        e.backend
      ).replace("#", "") + '" /></left>'), (v.right || v.full) && (B += '<right style="' + (v.right || v.full).style + '"><color rgb="' + ae(
        (v.right || v.full).color,
        e.backend
      ).replace("#", "") + '" /></right>'), (v.top || v.full) && (B += '<top style="' + (v.top || v.full).style + '"><color rgb="' + ae(
        (v.top || v.full).color,
        e.backend
      ).replace("#", "") + '" /></top>'), (v.bottom || v.full) && (B += '<bottom style="' + (v.bottom || v.full).style + '"><color rgb="' + ae(
        (v.bottom || v.full).color,
        e.backend
      ).replace("#", "") + '" /></bottom>'), R.borderIndex = m.border.count, m.border.count++, m.border.value += "<border>" + B + "<diagonal /></border>"), s.format) {
        const P = Re[s.format];
        P && (R.formatIndex = P.key, "value" in P && (m.format.count++, m.format.value += P.value));
      }
      return m.cell.value = m.cell.value + '<xf numFmtId="' + R.formatIndex + '" fontId="' + R.fontIndex + '" fillId="' + R.fillIndex + '" borderId="' + R.borderIndex + '" xfId="0"' + (R.borderIndex > 0 ? ' applyBorder="1" ' : "") + (R.fillIndex > 0 ? ' applyFill="1" ' : "") + (R.fontIndex >= 0 ? ' applyFont="1" ' : "") + (R.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + J, e.styles[o].index = m.cell.count, m.cell.count++, m;
    },
    {
      commentSintax: {
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
  a == null || a.file("styles.xml", Ae(u));
  var w = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let C = "", $ = 0, b = "", d = "", t = {};
  const _ = {};
  let L = "", j = 4, I = !1;
  for (let m = 0; m < p; m++) {
    const o = e.sheet[m];
    let c = o.shiftTop ? o.shiftTop : 1, s = "", R = "", J = "", v = Object.assign([], o.merges), B = Object.assign({}, o.formula), P = !1, U = [], se = "", ie = [], ge = [], ce = [], le = {};
    const ne = o.headers.length;
    if (Array.isArray(o.headers) && ne) {
      let Q = "";
      if (o.title) {
        const i = o.title, S = i.comment, q = i.shiftTop ? i.shiftTop : 0, V = o.shiftLeft ? o.shiftLeft : 0, h = i.shiftLeft ? i.shiftLeft + V : V, ee = i.consommeRow ? i.consommeRow - 1 : 1, te = i.consommeCol ? i.consommeCol : ne, O = ee == 0 && typeof i.height == "number" ? ' ht="' + i.height + '" customHeight="1" ' : "", H = i.styleId ? i.styleId : "titleStyle", D = l[h] + "" + (c + q);
        if (v.push(
          D + ":" + l[h + te - 1] + (c + ee + q)
        ), typeof S < "u") {
          P = !0;
          const M = he(
            S,
            u.commentSintax.value,
            F
          );
          let W = U.length;
          if (M.hasAuthour && typeof M.author < "u") {
            let Z = M.author.toString();
            const z = U.indexOf(Z);
            z < 0 ? U.push(Z) : W = z;
          }
          ie.push({
            row: c + q - 1,
            col: h
          }), se += ue(
            D,
            M.commentStr,
            M.commentStyl,
            W
          );
        }
        typeof i.text == "string" && (Q += '<row r="' + (c + q) + '" ' + O + ' spans="1:' + (h + te - 1) + '">', Q += '<c r="' + D + '" ' + (e.styles[H] ? ' s="' + e.styles[H].index + '" ' : "") + ' t="s"><v>' + $ + "</v></c>", Q += "</row>", $++, t[i.text] = i.text, i.multiStyleValue ? C += de(
          i.multiStyleValue,
          i.text,
          u.commentSintax.value,
          H,
          o.useSplitBaseOnMatch
        ) : C += "<si><t>" + i.text + "</t></si>"), c += q + ee + 1;
      }
      let G = o.headerStyleKey ? o.headerStyleKey : null, re = 0;
      if (typeof o.shiftLeft == "number" && (re = o.shiftLeft), o.headers.forEach((i, S) => {
        if (re && (S += re), i.formula && ce.push(S), ge.push(i.label), o.mergeRowDataCondition && typeof o.mergeRowDataCondition == "function" && o.mergeRowDataCondition(
          i,
          null,
          S,
          !0
        ) === !0 && (le[l[S]] = {
          inProgress: !0,
          start: c
        }), o.styleCellCondition && typeof o.styleCellCondition == "function" && (G = o.styleCellCondition(
          i,
          i,
          S,
          c,
          !0,
          g
        ) || G), i.size && i.size > 0 && (R += '<col min="' + (S + 1) + '" max="' + (S + 1) + '" width="' + i.size + '" customWidth="1" />'), o.withoutHeader)
          return;
        const q = l[S] + "" + c;
        if (typeof o.commentCodition == "function") {
          const h = o.commentCodition(
            i,
            null,
            i.label,
            c,
            S,
            !0
          );
          h && (i.comment = h);
        }
        if (i.comment) {
          P = !0;
          const h = he(
            i.comment,
            u.commentSintax.value,
            F
          );
          let ee = U.length;
          if (h.hasAuthour && typeof h.author < "u") {
            let te = h.author.toString();
            const O = U.indexOf(te);
            O < 0 ? U.push(te) : ee = O;
          }
          ie.push({
            row: c - 1,
            col: S
          }), se += ue(
            q,
            h.commentStr,
            h.commentStyl,
            ee
          );
        }
        const V = B && B[q];
        if (V)
          s += pe(
            q,
            V,
            e.styles
          ).cell, delete B[q];
        else {
          if (s += '<c r="' + l[S] + c + '" ' + (G && e.styles && e.styles[G] ? ' s="' + e.styles[G].index + '" ' : "") + ' t="s"><v>' + $ + "</v></c>", typeof o.multiStyleConditin == "function") {
            const h = o.multiStyleConditin(
              i,
              null,
              i.label,
              c,
              S,
              !0
            );
            h && (i.multiStyleValue = h);
          }
          i.multiStyleValue ? C += de(
            i.multiStyleValue,
            i.text,
            u.commentSintax.value,
            G || "",
            o.useSplitBaseOnMatch
          ) : C += "<si><t>" + i.text + "</t></si>", t[i.text] = i.text, $++;
        }
      }), o.withoutHeader ? s += Q : (s = Q + '<row r="' + c + '" spans="1:' + ne + '" ' + (o.headerHeight ? 'ht="' + o.headerHeight + '" customHeight="1"' : "") + (o.headerRowOption ? Object.keys(o.headerRowOption).reduce((i, S) => i + " " + S + '="' + o.headerRowOption[S] + '" ', "  ") : "") + ">" + s + "</row>", c++), Array.isArray(o.data)) {
        const i = e.mapSheetDataOption && e.mapSheetDataOption.outlineLevel ? e.mapSheetDataOption.outlineLevel : "outlineLevel", S = e.mapSheetDataOption && e.mapSheetDataOption.hidden ? e.mapSheetDataOption.hidden : "hidden", q = e.mapSheetDataOption && e.mapSheetDataOption.height ? e.mapSheetDataOption.height : "height", V = o.data.length;
        o.data.forEach((h, ee) => {
          if (h.mergeType)
            for (let O = 0; O < h.mergeType.length; O++) {
              const H = h.mergeType[O], D = h.mergeStart[O], M = h.mergeValue[m];
              let W = "";
              H == "both" ? W = l[D] + "" + c + ":" + l[D + M[1]] + (c + M[0]) : H == "col" ? W = l[D] + "" + c + ":" + l[D + M[0]] + c : W = l[D] + "" + c + ":" + l[D] + (c + M[0]), v.push(W);
            }
          const te = h.rowStyle;
          s += '<row r="' + c + '" spans="1:' + ne + '" ' + (q in h ? 'ht="' + h[q] + '" customHeight="1"' : "") + (i in h ? ' outlineLevel="' + h[i] + '"' : "") + (S in h ? ' hidden="' + h[S] + '"' : "") + " >", ge.forEach((O, H) => {
            re && (H += re);
            const D = h[O];
            let M = te;
            if (o.styleCellCondition && typeof o.styleCellCondition == "function" && (M = o.styleCellCondition(
              D,
              h,
              H,
              c,
              !1,
              g
            ) || te), o.mergeRowDataCondition && typeof o.mergeRowDataCondition == "function") {
              let W = o.mergeRowDataCondition(
                D,
                O,
                H,
                !1
              );
              const Z = l[H];
              let z = le[Z];
              W === !0 ? (!z || z && !z.inProgress) && (le[Z] = {
                inProgress: !0,
                start: c
              }) : z && z.inProgress && (v.push(
                Z + z.start + ":" + Z + (c - 1)
              ), le[Z] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof D < "u") {
              const W = l[H] + "" + c;
              if (typeof o.commentCodition == "function") {
                const z = o.commentCodition(
                  D,
                  h,
                  O,
                  c,
                  H,
                  !1
                );
                z && (typeof h.comment != "object" && (h.comment = {}), h.comment[O] = z);
              }
              if (typeof h.comment == "object" && O in h.comment) {
                const z = h.comment[O];
                P = !0;
                const oe = he(
                  z,
                  u.commentSintax.value,
                  F
                );
                oe.hasAuthour && typeof oe.author < "u" && U.push(oe.author.toString()), ie.push({
                  row: c - 1,
                  col: H
                });
                let Ce = U.length;
                if (oe.hasAuthour && typeof oe.author < "u") {
                  let be = oe.author.toString();
                  const ve = U.indexOf(be);
                  ve < 0 ? U.push(be) : Ce = ve;
                }
                se += ue(
                  W,
                  oe.commentStr,
                  oe.commentStyl,
                  Ce
                );
              }
              const Z = B && B[W];
              if (Z)
                s += pe(W, Z).cell, delete B[W];
              else if (typeof D == "string") {
                if (s += '<c r="' + l[H] + c + '" t="s" ' + (M && e.styles && e.styles[M] ? 's="' + e.styles[M].index + '"' : "") + "><v>" + $ + "</v></c>", typeof o.multiStyleConditin == "function") {
                  const z = o.multiStyleConditin(
                    D,
                    h,
                    O,
                    c,
                    H,
                    !1
                  );
                  z && ((!("multiStyleValue" in h) || typeof h.multiStyleValue > "u") && (h.multiStyleValue = {}), h.multiStyleValue[O] = z);
                }
                "multiStyleValue" in h && h.multiStyleValue && O in h.multiStyleValue ? C += de(
                  h.multiStyleValue[O],
                  D,
                  u.commentSintax.value,
                  M || "",
                  o.useSplitBaseOnMatch
                ) : C += "<si><t>" + D + "</t></si>", t[D] = D, $++;
              } else
                s += '<c r="' + l[H] + c + '" ' + (M && e.styles && e.styles[M] ? 's="' + e.styles[M].index + '"' : "") + "><v>" + D + "</v></c>";
            }
          }), V - 1 == ee && Object.keys(le).forEach((O) => {
            le[O].inProgress && v.push(
              O + le[O].start + ":" + O + c
            );
          }), c++, s += "</row>";
        }), o.sortAndfilter && (o.sortAndfilter.mode == "all" ? J += '<autoFilter ref="A1:' + l[ne - 1] + (c - 1) + '" />' : typeof o.sortAndfilter.ref == "string" && o.sortAndfilter.ref.length > 0 && (J += '<autoFilter ref="' + o.sortAndfilter.ref + '" />'));
      }
      if (ce.length > 0 && ce.forEach((i) => {
        const S = o.headers[i];
        B[l[i] + "" + c] = {
          start: o.withoutHeader ? l[i] + "1" : l[i] + "2",
          end: l[i] + "" + (c - 1),
          type: S.formula.type,
          ...S.formula.styleId ? { styleId: S.formula.styleId } : {}
        };
      }), B) {
        const i = Object.keys(B);
        if (i.length) {
          let S = {};
          i.forEach((q) => {
            const V = pe(q, B[q], e.styles);
            S[V.row] ? S[V.row] += V.cell : S[V.row] = V.cell;
          }), Object.keys(S).forEach((q) => {
            const V = S[q];
            s += '<row r="' + q + '" spans="1:' + ne + '"  >' + V + "</row>";
          });
        }
      }
    }
    m > 0 && (w += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (m + 1) + '.xml" />');
    const ye = o.name ? o.name : "sheet" + (m + 1), Te = o.state ? o.state : "visible";
    b += '<sheet state="' + Te + '" name="' + ye + '" sheetId="' + (m + 1) + '" r:id="rId' + (j + 1) + '" />', d += '<Relationship Id="rId' + (j + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (m + 1) + '.xml" />', L += "<vt:lpstr>" + ("sheet" + (m + 1)) + "</vt:lpstr>", I = I || !!o.selected;
    const xe = o.sortAndfilter ? 'filterMode="1"' : "";
    v = [...new Set(v)], _["sheet" + (m + 1)] = {
      indexId: j + 1,
      key: "sheet" + (m + 1),
      sheetName: ye,
      sheetDataString: s,
      hasComment: P,
      commentString: se,
      commentAuthor: U,
      shapeCommentRowCol: ie,
      sheetSizeString: R.length > 0 ? "<cols>" + R + "</cols>" : "",
      protectionOption: o.protectionOption ? Object.keys(o.protectionOption).reduce((Q, G) => Q + " " + G + '="' + o.protectionOption[G] + '" ', "<sheetProtection ") + "/>" : "",
      merges: v.length > 0 ? v.reduce((Q, G) => Q + ' <mergeCell ref="' + G + '" />', '<mergeCells count="' + v.length + '">') + " </mergeCells>" : "",
      selectedView: o.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: J,
      tabColor: o.tabColor ? '<sheetPr codeName="' + ("Sheet" + (m + 1)) + '" ' + xe + ' ><tabColor rgb="' + o.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + xe + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, j++;
  }
  let K = Object.keys(_);
  var y = r.folder("_rels");
  y == null || y.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  var k = r.folder("docProps");
  k == null || k.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), k == null || k.file("app.xml", Le(p, L)), a == null || a.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + b + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), a == null || a.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + ($ - 1) + '" uniqueCount="' + Object.keys(t).length + '"> ' + C + "</sst>"
  );
  var N = a == null ? void 0 : a.folder("_rels");
  N == null || N.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + d + " </Relationships>"
  );
  var A = a == null ? void 0 : a.folder("theme");
  A == null || A.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  var x = a == null ? void 0 : a.folder("worksheets");
  let T = [];
  const E = a == null ? void 0 : a.folder("drawings"), Y = x == null ? void 0 : x.folder("_rels");
  if (K.forEach((m, o) => {
    const c = _[m];
    if (c.hasComment) {
      T.push(o + 1);
      let s = c.commentAuthor;
      a == null || a.file(
        `comments${o + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
	xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
     xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
	<authors>
        ${Array.isArray(s) && s.length > 0 ? s.reduce(
          (R, J) => R + "<author>" + J + "</author>",
          ""
        ) : "<author></author>"}
	</authors>
	<commentList>
		${c.commentString}
	</commentList>
</comments>`
      ), Y == null || Y.file(
        "sheet" + (o + 1) + ".xml.rels",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    <Relationship Id="rId1"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
        Target="../comments${o + 1}.xml" />
    
    <Relationship Id="rId3"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing"
        Target="../drawings/vmlDrawing${o + 1}.vml" />
</Relationships>`
      ), E == null || E.file(
        "vmlDrawing" + (o + 1) + ".vml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout><v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path gradientshapeok="t" o:connecttype="rect"/>
 </v:shapetype>${c.shapeCommentRowCol.reduce((R, J) => R + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;
  margin-left:77.25pt;margin-top:23.25pt;width:264pt;height:42.75pt;z-index:1;
  visibility:hidden' fillcolor="#ffffe1">
  <v:fill color2="#ffffe1"/>
  <v:shadow on="t" color="black" obscured="t"/>
  <v:path o:connecttype="none"/>
  <v:textbox>
   <div style='text-align:left'></div>
  </v:textbox>
  <x:ClientData ObjectType="Note">
   <x:MoveWithCells/>
   <x:SizeWithCells/>
   <x:Anchor>
    1, 15, 1, 10, 5, 15, 4, 4</x:Anchor>
   <x:AutoFill>False</x:AutoFill>
   <x:Row>${J.row}</x:Row>
   <x:Column>${J.col}</x:Column>
  </x:ClientData>
 </v:shape>`, "")}
 </xml>`
      );
    }
    x == null || x.file(
      c.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + c.tabColor + c.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + c.sheetSizeString + "<sheetData>" + c.sheetDataString + "</sheetData>" + c.protectionOption + c.sheetSortFilter + c.merges + (c.hasComment ? '<legacyDrawing r:id="rId3" />' : "") + "</worksheet>"
    );
  }), r.file(
    "[Content_Types].xml",
    Oe(w, T)
  ), e.backend)
    return r.generateAsync({
      type: e.generateType ? e.generateType : "nodebuffer"
    }).then((m) => m);
  if (e.notSave)
    return r.generateAsync({ type: "blob" }).then((m) => m.slice(
      0,
      m.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  r.generateAsync({ type: "blob" }).then(function(m) {
    import("./FileSaver.min-3b84b3f2.mjs").then((o) => o.F).then((o) => {
      const { saveAs: c } = o;
      c(
        m,
        (e.fileName ? e.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function Pe(e) {
  const l = e.length;
  let f = 0, n = {}, r = {}, p = {};
  for (let u = 0; u < l; u++) {
    const w = e[u], C = w.length;
    let $ = {};
    for (let b = 0; b < C; b++) {
      f++;
      const d = w[b];
      let t;
      d.sheetName ? t = d.sheetName : t = "Sheet 1", t in n || (n[t] = {
        headers: [],
        data: [],
        labelConter: 0,
        seenAt: u
      }), t in r || (r[t] = {
        index: u,
        value: 0
      }), t in p || (n[t].labelConter = 0, p[t] = !0);
      let _ = [];
      const L = n[t].headers.length;
      let j = {}, I = n[t].seenAt == u, K = d.headers.reduce((A, x, T) => (n[t].labelConter++, L < n[t].labelConter && _.push({
        label: "c" + n[t].labelConter,
        text: I ? x.text : ""
      }), j["c" + n[t].labelConter] = x.text, {
        ...A,
        [x.label]: "c" + n[t].labelConter
      }), {});
      if (n[t].headers.push(..._), d.spaceX)
        for (let A = 0; A < d.spaceX; A++)
          n[t].labelConter++, L <= n[t].labelConter && n[t].headers.push({
            label: "c" + n[t].labelConter,
            text: ""
          });
      r[t].index + 1 == u && ($[t] = r[t].value);
      let y = $[t] || 0;
      y > 0 && (!n[t].headerIndex || n[t].headerIndex && n[t].headerIndex != y ? n[t].data.push(j) : n[t].data[y] = {
        ...n[t].data[y],
        ...j
      }, n[t].headerIndex = y, y++);
      let k = Object.keys(K), N = d.data.length >= n[t].data.length;
      if (n[t].data = d.data.reduce((A, x, T) => {
        let E = {};
        return A.length > T + y ? E = A[T + y] : A.push(E), k.forEach((Y) => {
          let m = K[Y];
          E[m] = x[Y] ? x[Y] : "";
        }), E.tableIndex = f, E.tableStringIndex = T + "," + b, A[T + y] = E, A;
      }, n[t].data), N && d.spaceY) {
        const A = n[t].headers.length;
        for (let x = 0; x < d.spaceY; x++) {
          let T = {};
          for (let E = 0; E < A; E++) {
            const Y = n[t].headers[E];
            T[Y.label] = "";
          }
          n[t].data.push(T);
        }
      }
      r[t] = {
        value: Math.max(n[t].data.length, r[t].value),
        index: u
      };
    }
    p = {};
  }
  let a = Object.keys(n), g = [];
  return a.reduce(
    (u, w) => {
      let C = n[w];
      return u.sheet.push({
        ...C,
        name: w
      }), u;
    },
    { sheet: g }
  );
}
const ke = Ee;
function qe(e, l, f, n, r) {
  const p = Ie(
    e,
    l,
    f,
    n,
    r
  );
  return ke(p);
}
function Ne(e) {
  const l = Pe(e);
  return ke(l);
}
export {
  qe as convertTableToExcel,
  ke as generateExcel,
  Ne as sideBySideLineByLine
};
