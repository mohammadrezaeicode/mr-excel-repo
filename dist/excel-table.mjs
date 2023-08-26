function Se(e, t, i = "", u = [], m = 0) {
  const c = e.length;
  for (let a = 0; a < c; a++)
    u.push(i + e[a]);
  return t < u.length ? u : Se(
    e,
    t,
    u[m + 1],
    u,
    m + 1
  );
}
function Te(e) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + ' <fonts count="' + e.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + e.font.value + ' </fonts> <fills count="' + e.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + e.fill.value + ' </fills> <borders count="' + e.border.count + '"> <border />' + e.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + e.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + e.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> <dxfs count="0" /></styleSheet>';
}
function we(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/> <Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /> <Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + t.reduce((i, u) => i + `
    <Override PartName="/xl/comments${u}.xml"
        ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />`, "") + e + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" /> <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function $e(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + e + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + e + '" baseType="lpstr"> ' + t + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function ce(e, t, i) {
  let u = e.replace(/[0-9]/g, ""), m = parseInt(e.substr(u.length)), c = '<c r="' + e + '" ' + (i && typeof t.styleId == "string" && i[t.styleId] ? 's="' + i[t.styleId].index + '" ' : "") + ">     <f>" + t.type + "(" + t.start + ":" + t.end + ")</f> </c>";
  return {
    column: u,
    row: m,
    cell: c
  };
}
function Fe(e) {
  return e.replace(/ /g, "");
}
function fe(e) {
  e = Number(e);
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}
function W(e) {
  e = Fe(e);
  let t = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), i = t.reduce((u, m) => u && !Number.isNaN(Number(m)), !0);
  return t.length == 4 && t[3] == "0" || !i ? null : (fe(t[0]) + fe(t[1]) + fe(t[2])).toUpperCase();
}
function ae(e, t) {
  if (typeof e > "u" || e === null)
    return null;
  if (!t) {
    let i = Fe(e);
    i.indexOf("var(") == 0 && i.lastIndexOf(")") == i.length - 1 && (i = i.substring(4, i.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      i
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const i = W(e);
    e = i || "";
  }
  return e;
}
function Ie(e, t, i, u, m, c, a, p) {
  let v = [], x = "both", I = [];
  !t || t === 0 ? (t = 1, x = "col") : I.push(t - 1), !e || e === 0 ? (e = 0, x = "row") : I.push(e - 1);
  let S = m || {};
  S.mergeType = p && p.mergeType ? [...p.mergeType, x] : [x], S.mergeValue = p && p.mergeValue ? [...p.mergeValue, I] : [I], S.mergeStart = p && p.mergeStart ? [...p.mergeStart, i] : [i];
  for (let y = 0; y < t; y++) {
    let k = e;
    for (let h = 0; h < u; h++)
      i <= h ? k >= 1 ? (S["c" + h] = c, c = "", a += "*", k--) : t >= 2 && i == h ? (S["c" + h] = c, c = "", a += "+") : a += "-" : y > 0 && (a += "-");
    v.push({
      ...S,
      mergeString: a
    }), S = {}, a = "";
  }
  return v;
}
function Ae(e, t, i, u, m) {
  var S;
  if (!e && !t)
    throw "Error: One of the function inputs is required.";
  let c;
  e ? c = (S = document.querySelector(e)) == null ? void 0 : S.querySelectorAll("tr") : c = t == null ? void 0 : t.querySelectorAll("tr");
  let a = [], p = [], v = {
    header: {},
    rows: []
  }, x = 40;
  if (c) {
    let y = !1, k = 0;
    c.forEach((h, d) => {
      var N = [].slice.call(h.children);
      const D = window.getComputedStyle(h, null);
      let K = W(D.backgroundColor);
      if (!y)
        k = N.length, y = !0, typeof u == "function" ? x = u(
          Number(D.height.substring(0, D.height.length - 2)),
          d,
          !0
        ) : x = Number(
          D.height.substring(0, D.height.length - 2)
        ), N.forEach((w, Y) => {
          let b = window.getComputedStyle(w, null), F = null;
          b.borderBottomWidth !== "0px" && (F || (F = {}), F.bottom = {
            style: "thin",
            color: W(b.borderBottomColor)
          }), b.borderTopWidth !== "0px" && (F || (F = {}), F.top = {
            style: "thin",
            color: W(b.borderTopColor)
          }), b.borderLeftWidth !== "0px" && (F || (F = {}), F.left = {
            style: "thin",
            color: W(b.borderLeftColor)
          }), b.borderRightWidth !== "0px" && (F || (F = {}), F.right = {
            style: "thin",
            color: W(b.borderRightColor)
          });
          let E = W(b.backgroundColor);
          !E && K && (E = K);
          let U = {
            ...E ? { fg: E } : {},
            bold: parseInt(b.fontWeight) > 500,
            size: parseInt(
              b.fontSize.substring(0, b.fontSize.indexOf("p"))
            ),
            ...F ? { border: F } : {},
            alignment: {
              horizontal: b.textAlign,
              vertical: "center",
              ...b.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          v.header[d + "-" + Y] = U;
          let _;
          typeof m == "function" ? _ = m(
            Number(b.width.substring(0, b.width.length - 2)),
            Y
          ) : _ = Number(b.width.substring(0, b.width.length - 2)) * 0.15, a.push({
            label: "c" + Y,
            colspan: w.getAttribute("colspan"),
            rowspan: w.getAttribute("rowspan"),
            text: w.textContent,
            size: _
          });
        });
      else {
        let w = {}, Y = "", b = !1;
        p.length >= d && (w = p[d - 1], Y = "mergeString" in w ? w.mergeString : "", b = !0);
        let F = 0;
        N.forEach((E, U) => {
          if ("c" + (U + F) in w)
            for (let n = 0; n <= k + 1 && "c" + (U + n) in w; n++)
              F++;
          U += F;
          let _ = window.getComputedStyle(E, null);
          if (E.getAttribute("colspan") || E.getAttribute("rowspan")) {
            let n = Ie(
              E.getAttribute("colspan") * 1,
              E.getAttribute("rowspan") * 1,
              U,
              k,
              w,
              E.textContent,
              Y,
              w
            );
            p.length < d ? p.push(...n) : n.forEach((o, r) => {
              p.length < d + r ? p.push(...n) : p[d + r] = {
                ...p[d + r],
                ...o
              };
            }), w = n[0], Y = n[0].mergeString, b = !0;
          } else
            b || (Y += "-");
          let R = null;
          _.borderBottomWidth !== "0px" && (R || (R = {}), R.bottom = {
            style: "thin",
            color: W(_.borderBottomColor)
          }), _.borderTopWidth !== "0px" && (R || (R = {}), R.top = {
            style: "thin",
            color: W(_.borderTopColor)
          }), _.borderLeftWidth !== "0px" && (R || (R = {}), R.left = {
            style: "thin",
            color: W(_.borderLeftColor)
          }), _.borderRightWidth !== "0px" && (R || (R = {}), R.right = {
            style: "thin",
            color: W(_.borderRightColor)
          });
          let Z = W(_.backgroundColor);
          !Z && K && (Z = K);
          let ne = {
            ...Z ? { fg: Z } : {},
            bold: parseInt(_.fontWeight) > 500,
            size: parseInt(
              _.fontSize.substring(0, _.fontSize.indexOf("p"))
            ),
            ...R ? { border: R } : {},
            // fg: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: _.textAlign,
              vertical: "center",
              direction: _.direction,
              ..._.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          v.header[d + "-" + U] = ne, w["c" + U] = E.textContent;
        }), typeof u == "function" ? w.height = u(
          Number(D.height.substring(0, D.height.length - 2)),
          d,
          !1
        ) : w.height = D.height.substring(0, D.height.length - 2), p.length < d ? p.push(w) : p[d - 1] = w;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: v.header,
    sheet: [
      {
        headerHeight: x,
        styleCellCondition: function(y, k, h, d, N, D) {
          return i ? D.includes(d - 1 + "-" + h) ? d - 1 + "-" + h : "" : null;
        },
        data: p,
        headers: a
      }
    ]
  };
}
function pe(e, t, i) {
  let u = !1, m, c;
  if (typeof e == "object") {
    if ("author" in e && e.author && (u = !0, c = e.author), "styleId" in e && typeof e.styleId == "string") {
      let a = t[e.styleId];
      typeof a == "string" && (i = a);
    }
    m = "comment" in e && typeof e.comment == "string" ? be(e.comment) : [""];
  } else
    m = e ? be(e) : [""];
  return u && m.unshift(c + ":"), {
    hasAuthour: u,
    author: c,
    commentStyl: i,
    commentStr: m
  };
}
function be(e) {
  var t = e.split(/\r?\n|\r|\n/g);
  return t;
}
function he(e, t, i, u) {
  let m = `<comment ref="${e}" authorId="${Math.max(
    0,
    u - 1
  )}" shapeId="0">
            <text>`, c = "";
  return t.forEach((a, p) => {
    let v = "";
    if (a.length == 0) {
      c += `
`;
      return;
    }
    p > 0 && (v = 'xml:space="preserve"', c += `
`), m += "<r>" + i + "<t " + v + " >" + c + a + "</t></r>", c = "";
  }), m += "</text></comment>", m;
}
const Oe = `<rPr>
                        <b />
                        <sz val="9" />
                        <color rgb="000000" />
                        <rFont val="Tahoma" />
                    </rPr>
            `;
function _e(e, t, i, u, m, c, a, p) {
  if (u) {
    let v = [], x = [], I = [];
    const S = c.length;
    m.forEach((y, k) => {
      let h;
      try {
        h = y.match(e);
      } catch (d) {
        if (typeof e == "string")
          h = y.match("\\" + e);
        else
          throw d;
      }
      if (h)
        if (p) {
          const d = y.split(e);
          v.push(...d), x.push(...h), I.push(
            ...h.reduce((N, D) => [...N, t], [])
          );
        } else {
          const d = y.split(e).reduce((N, D, K) => K >= 2 ? (N[1] += e + D, N) : [...N, D], []);
          v.push(...d), I.push(t), x.push(e.toString());
        }
      else
        v.push(y);
      S > k && (x.push(c[k]), I.push(a[k]));
    }), m = v, c = x, a = I;
  } else {
    let v;
    try {
      v = i.match(e);
    } catch (x) {
      if (typeof e == "string")
        v = i.match("\\" + e);
      else
        throw x;
    }
    v ? p ? (c.push(...v), a.push(
      ...v.reduce((x, I) => [...x, t], [])
    ), m = i.split(e)) : (c.push(e.toString()), a.push(t), m = i.split(e).reduce((x, I, S) => S >= 2 ? (x[1] += e + I, x) : [...x, I], [])) : m.push(i), u = !0;
  }
  return {
    v: e,
    text: i,
    textSplited: u,
    splitValue: m,
    matchValue: c,
    styleMatchValue: a
  };
}
function ue(e, t, i, u) {
  if (typeof e == "object") {
    let m = "", c = [], a = [], p = [], v = !1;
    if (Object.keys(e).forEach((y) => {
      const k = e[y];
      if (y !== "reg") {
        let h = _e(
          y,
          typeof k == "string" ? k : "",
          t,
          v,
          p,
          c,
          a,
          !1
        );
        v = h.textSplited, p = h.splitValue, c = h.matchValue, a = h.styleMatchValue;
      }
    }), "reg" in e && Array.isArray(e.reg)) {
      const y = e.reg.length;
      for (let k = 0; k < y; k++) {
        const h = e.reg[k];
        if ("reg" in h && "styleId" in h) {
          typeof h.reg == "string" && (h.reg = new RegExp(h.reg, "g"));
          let d = _e(
            h.reg,
            h.styleId,
            t,
            v,
            p,
            c,
            a,
            !0
          );
          v = d.textSplited, p = d.splitValue, c = d.matchValue, a = d.styleMatchValue;
        }
      }
    }
    const I = p.length - 1, S = u in i ? i[u] : "";
    for (let y = 0; y < I; y++) {
      const k = p[y], h = c[y], d = a[y];
      k.length > 0 && (m += `<r>
        ${S}
            <t xml:space="preserve" >${k}</t>
        </r>`), m += `
                            <r>
           ${i[d]}
            <t xml:space="preserve" >${h}</t>
        </r>
                    `;
    }
    return m = `<si>
                    ${m}
                    <r>
        ${S}
            <t>${p[I]}</t>
        </r>
                    </si>`, m;
  } else
    return `
<si>
    <t>${t}</t>
</si>
`;
}
const De = {
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
}, Le = [
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
async function Me(e) {
  let t = [...Le];
  e.numberOfColumn && e.numberOfColumn > 25 && (t = Se(t, e.numberOfColumn));
  const u = (await import("./jszip.min-e651e8fb.mjs").then((n) => n.j)).default;
  var m = new u();
  const c = e.sheet.length;
  var a = m.folder("xl");
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const p = Object.keys(e.styles), v = Oe;
  let x = p.reduce(
    (n, o, r) => {
      const l = e.styles[o], A = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (l.fg) {
        let L = ae(l.fg, e.backend);
        A.fillIndex = n.fill.count, n.fill.count++, n.fill.value = n.fill.value + '<fill><patternFill patternType="solid">' + (L ? '<fgColor rgb="' + L.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (l.fontColor || l.fontFamily || l.size || l.bold || l.italic || l.underline || l.doubleUnderline) {
        const L = ae(l.fontColor, e.backend);
        A.fontIndex = n.font.count, n.font.count++, n.font.value = n.font.value + "<font>" + (l.bold ? "<b/>" : "") + (l.italic ? "<i />" : "") + `${l.underline || l.doubleUnderline ? `<u ${l.doubleUnderline ? ' val="double" ' : ""}/>` : ""}` + (l.size ? '<sz val="' + l.size + '" />' : "") + (L ? '<color rgb="' + L.replace("#", "") + '" />' : "") + (l.fontFamily ? '<name val="' + l.fontFamily + '" />' : "") + "</font>", n.commentSintax.value[o] = `<rPr>
            ${l.bold ? "<b/>" : ""}
            ${l.italic ? "<i />" : ""}
            ${l.underline || l.doubleUnderline ? `<u ${l.doubleUnderline ? ' val="double" ' : ""}/>` : ""}
            <sz val="${l.size ? `${l.size}` : "9"}" />
            ${L ? `<color rgb="${L.replace("#", "")}" />` : ""}
            <rFont val="${l.fontFamily ? `${l.fontFamily}` : "Tahoma"}" />
        </rPr>
        `;
      }
      let G = "/>";
      l.alignment && (l.alignment.rtl && (l.alignment.readingOrder = 2), delete l.alignment.rtl, l.alignment.ltr && (l.alignment.readingOrder = 1), delete l.alignment.ltr, G = ' applyAlignment="1"><alignment ' + Object.keys(l.alignment).reduce((L, z) => L + " " + z + '="' + l.alignment[z] + '" ', "") + " /></xf>");
      const g = l.border;
      let P = "";
      if (typeof g == "object" && ((g.left || g.full) && (P += '<left style="' + (g.left || g.full).style + '"><color rgb="' + ae(
        (g.left || g.full).color,
        e.backend
      ).replace("#", "") + '" /></left>'), (g.right || g.full) && (P += '<right style="' + (g.right || g.full).style + '"><color rgb="' + ae(
        (g.right || g.full).color,
        e.backend
      ).replace("#", "") + '" /></right>'), (g.top || g.full) && (P += '<top style="' + (g.top || g.full).style + '"><color rgb="' + ae(
        (g.top || g.full).color,
        e.backend
      ).replace("#", "") + '" /></top>'), (g.bottom || g.full) && (P += '<bottom style="' + (g.bottom || g.full).style + '"><color rgb="' + ae(
        (g.bottom || g.full).color,
        e.backend
      ).replace("#", "") + '" /></bottom>'), A.borderIndex = n.border.count, n.border.count++, n.border.value += "<border>" + P + "<diagonal /></border>"), l.format) {
        const L = De[l.format];
        L && (A.formatIndex = L.key, "value" in L && (n.format.count++, n.format.value += L.value));
      }
      return n.cell.value = n.cell.value + '<xf numFmtId="' + A.formatIndex + '" fontId="' + A.fontIndex + '" fillId="' + A.fillIndex + '" borderId="' + A.borderIndex + '" xfId="0"' + (A.borderIndex > 0 ? ' applyBorder="1" ' : "") + (A.fillIndex > 0 ? ' applyFill="1" ' : "") + (A.fontIndex >= 0 ? ' applyFont="1" ' : "") + (A.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + G, e.styles[o].index = n.cell.count, n.cell.count++, n;
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
  a == null || a.file("styles.xml", Te(x));
  var I = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let S = "", y = 0, k = "", h = "", d = {};
  const N = {};
  let D = "", K = 4, w = !1;
  for (let n = 0; n < c; n++) {
    const o = e.sheet[n];
    let r = o.shiftTop ? o.shiftTop : 1, l = "", A = "", G = "", g = Object.assign([], o.merges), P = Object.assign({}, o.formula), L = !1, z = [], se = "", ie = [], de = [], me = [], oe = {};
    const le = o.headers.length;
    if (Array.isArray(o.headers) && le) {
      let J = "";
      if (o.title) {
        const s = o.title, C = s.comment, M = s.shiftTop ? s.shiftTop : 0, H = o.shiftLeft ? o.shiftLeft : 0, f = s.shiftLeft ? s.shiftLeft + H : H, Q = s.consommeRow ? s.consommeRow - 1 : 1, ee = s.consommeCol ? s.consommeCol : le, T = Q == 0 && typeof s.height == "number" ? ' ht="' + s.height + '" customHeight="1" ' : "", q = s.styleId ? s.styleId : "titleStyle", $ = t[f] + "" + (r + M);
        if (g.push(
          $ + ":" + t[f + ee - 1] + (r + Q + M)
        ), typeof C < "u") {
          L = !0;
          const O = pe(
            C,
            x.commentSintax.value,
            v
          );
          let j = z.length;
          if (O.hasAuthour && typeof O.author < "u") {
            let X = O.author.toString();
            const B = z.indexOf(X);
            B < 0 ? z.push(X) : j = B;
          }
          ie.push({
            row: r + M - 1,
            col: f
          }), se += he(
            $,
            O.commentStr,
            O.commentStyl,
            j
          );
        }
        typeof s.text == "string" && (J += '<row r="' + (r + M) + '" ' + T + ' spans="1:' + (f + ee - 1) + '">', J += '<c r="' + $ + '" ' + (e.styles[q] ? ' s="' + e.styles[q].index + '" ' : "") + ' t="s"><v>' + y + "</v></c>", J += "</row>", y++, d[s.text] = s.text, s.multiStyleValue ? S += ue(
          s.multiStyleValue,
          s.text,
          x.commentSintax.value,
          q
        ) : S += "<si><t>" + s.text + "</t></si>"), r += M + Q + 1;
      }
      let V = o.headerStyleKey ? o.headerStyleKey : null, re = 0;
      if (typeof o.shiftLeft == "number" && (re = o.shiftLeft), o.headers.forEach((s, C) => {
        if (re && (C += re), s.formula && me.push(C), de.push(s.label), o.mergeRowDataCondition && typeof o.mergeRowDataCondition == "function" && o.mergeRowDataCondition(
          s,
          null,
          C,
          !0
        ) === !0 && (oe[t[C]] = {
          inProgress: !0,
          start: r
        }), o.styleCellCondition && typeof o.styleCellCondition == "function" && (V = o.styleCellCondition(
          s,
          s,
          C,
          r,
          !0,
          p
        ) || V), s.size && s.size > 0 && (A += '<col min="' + (C + 1) + '" max="' + (C + 1) + '" width="' + s.size + '" customWidth="1" />'), o.withoutHeader)
          return;
        const M = t[C] + "" + r;
        if (typeof o.commentCodition == "function") {
          const f = o.commentCodition(
            s,
            null,
            s.label,
            r,
            C,
            !0
          );
          f && (s.comment = f);
        }
        if (s.comment) {
          L = !0;
          const f = pe(
            s.comment,
            x.commentSintax.value,
            v
          );
          let Q = z.length;
          if (f.hasAuthour && typeof f.author < "u") {
            let ee = f.author.toString();
            const T = z.indexOf(ee);
            T < 0 ? z.push(ee) : Q = T;
          }
          ie.push({
            row: r - 1,
            col: C
          }), se += he(
            M,
            f.commentStr,
            f.commentStyl,
            Q
          );
        }
        const H = P && P[M];
        H ? (l += ce(
          M,
          H,
          e.styles
        ).cell, delete P[M]) : (l += '<c r="' + t[C] + r + '" ' + (V && e.styles && e.styles[V] ? ' s="' + e.styles[V].index + '" ' : "") + ' t="s"><v>' + y + "</v></c>", s.multiStyleValue ? S += ue(
          s.multiStyleValue,
          s.text,
          x.commentSintax.value,
          V || ""
        ) : S += "<si><t>" + s.text + "</t></si>", d[s.text] = s.text, y++);
      }), o.withoutHeader ? l += J : (l = J + '<row r="' + r + '" spans="1:' + le + '" ' + (o.headerHeight ? 'ht="' + o.headerHeight + '" customHeight="1"' : "") + (o.headerRowOption ? Object.keys(o.headerRowOption).reduce((s, C) => s + " " + C + '="' + o.headerRowOption[C] + '" ', "  ") : "") + ">" + l + "</row>", r++), Array.isArray(o.data)) {
        const s = e.mapSheetDataOption && e.mapSheetDataOption.outlineLevel ? e.mapSheetDataOption.outlineLevel : "outlineLevel", C = e.mapSheetDataOption && e.mapSheetDataOption.hidden ? e.mapSheetDataOption.hidden : "hidden", M = e.mapSheetDataOption && e.mapSheetDataOption.height ? e.mapSheetDataOption.height : "height", H = o.data.length;
        o.data.forEach((f, Q) => {
          if (f.mergeType)
            for (let T = 0; T < f.mergeType.length; T++) {
              const q = f.mergeType[T], $ = f.mergeStart[T], O = f.mergeValue[n];
              let j = "";
              q == "both" ? j = t[$] + "" + r + ":" + t[$ + O[1]] + (r + O[0]) : q == "col" ? j = t[$] + "" + r + ":" + t[$ + O[0]] + r : j = t[$] + "" + r + ":" + t[$] + (r + O[0]), g.push(j);
            }
          const ee = f.rowStyle;
          l += '<row r="' + r + '" spans="1:' + le + '" ' + (M in f ? 'ht="' + f[M] + '" customHeight="1"' : "") + (s in f ? ' outlineLevel="' + f[s] + '"' : "") + (C in f ? ' hidden="' + f[C] + '"' : "") + " >", de.forEach((T, q) => {
            re && (q += re);
            const $ = f[T];
            let O = ee;
            if (o.styleCellCondition && typeof o.styleCellCondition == "function" && (O = o.styleCellCondition(
              $,
              f,
              q,
              r,
              !1,
              p
            ) || ee), o.mergeRowDataCondition && typeof o.mergeRowDataCondition == "function") {
              let j = o.mergeRowDataCondition(
                $,
                T,
                q,
                !1
              );
              const X = t[q];
              let B = oe[X];
              j === !0 ? (!B || B && !B.inProgress) && (oe[X] = {
                inProgress: !0,
                start: r
              }) : B && B.inProgress && (g.push(
                X + B.start + ":" + X + (r - 1)
              ), oe[X] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof $ < "u") {
              const j = t[q] + "" + r;
              if (typeof o.commentCodition == "function") {
                const B = o.commentCodition(
                  $,
                  f,
                  T,
                  r,
                  q,
                  !1
                );
                B && (typeof f.comment != "object" && (f.comment = {}), f.comment[T] = B);
              }
              if (typeof f.comment == "object" && T in f.comment) {
                const B = f.comment[T];
                L = !0;
                const te = pe(
                  B,
                  x.commentSintax.value,
                  v
                );
                te.hasAuthour && typeof te.author < "u" && z.push(te.author.toString()), ie.push({
                  row: r - 1,
                  col: q
                });
                let xe = z.length;
                if (te.hasAuthour && typeof te.author < "u") {
                  let Ce = te.author.toString();
                  const ve = z.indexOf(Ce);
                  ve < 0 ? z.push(Ce) : xe = ve;
                }
                se += he(
                  j,
                  te.commentStr,
                  te.commentStyl,
                  xe
                );
              }
              const X = P && P[j];
              X ? (l += ce(j, X).cell, delete P[j]) : typeof $ == "string" ? (l += '<c r="' + t[q] + r + '" t="s" ' + (O && e.styles && e.styles[O] ? 's="' + e.styles[O].index + '"' : "") + "><v>" + y + "</v></c>", "multiStyleValue" in f && f.multiStyleValue && T in f.multiStyleValue ? S += ue(
                f.multiStyleValue[T],
                $,
                x.commentSintax.value,
                O || ""
              ) : S += "<si><t>" + $ + "</t></si>", d[$] = $, y++) : l += '<c r="' + t[q] + r + '" ' + (O && e.styles && e.styles[O] ? 's="' + e.styles[O].index + '"' : "") + "><v>" + $ + "</v></c>";
            }
          }), H - 1 == Q && Object.keys(oe).forEach((T) => {
            oe[T].inProgress && g.push(
              T + oe[T].start + ":" + T + r
            );
          }), r++, l += "</row>";
        }), o.sortAndfilter && (o.sortAndfilter.mode == "all" ? G += '<autoFilter ref="A1:' + t[le - 1] + (r - 1) + '" />' : typeof o.sortAndfilter.ref == "string" && o.sortAndfilter.ref.length > 0 && (G += '<autoFilter ref="' + o.sortAndfilter.ref + '" />'));
      }
      if (me.length > 0 && me.forEach((s) => {
        const C = o.headers[s];
        P[t[s] + "" + r] = {
          start: o.withoutHeader ? t[s] + "1" : t[s] + "2",
          end: t[s] + "" + (r - 1),
          type: C.formula.type,
          ...C.formula.styleId ? { styleId: C.formula.styleId } : {}
        };
      }), P) {
        const s = Object.keys(P);
        if (s.length) {
          let C = {};
          s.forEach((M) => {
            const H = ce(M, P[M], e.styles);
            C[H.row] ? C[H.row] += H.cell : C[H.row] = H.cell;
          }), Object.keys(C).forEach((M) => {
            const H = C[M];
            l += '<row r="' + M + '" spans="1:' + le + '"  >' + H + "</row>";
          });
        }
      }
    }
    n > 0 && (I += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (n + 1) + '.xml" />');
    const ge = o.name ? o.name : "sheet" + (n + 1), ke = o.state ? o.state : "visible";
    k += '<sheet state="' + ke + '" name="' + ge + '" sheetId="' + (n + 1) + '" r:id="rId' + (K + 1) + '" />', h += '<Relationship Id="rId' + (K + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (n + 1) + '.xml" />', D += "<vt:lpstr>" + ("sheet" + (n + 1)) + "</vt:lpstr>", w = w || !!o.selected;
    const ye = o.sortAndfilter ? 'filterMode="1"' : "";
    g = [...new Set(g)], N["sheet" + (n + 1)] = {
      indexId: K + 1,
      key: "sheet" + (n + 1),
      sheetName: ge,
      sheetDataString: l,
      hasComment: L,
      commentString: se,
      commentAuthor: z,
      shapeCommentRowCol: ie,
      sheetSizeString: A.length > 0 ? "<cols>" + A + "</cols>" : "",
      protectionOption: o.protectionOption ? Object.keys(o.protectionOption).reduce((J, V) => J + " " + V + '="' + o.protectionOption[V] + '" ', "<sheetProtection ") + "/>" : "",
      merges: g.length > 0 ? g.reduce((J, V) => J + ' <mergeCell ref="' + V + '" />', '<mergeCells count="' + g.length + '">') + " </mergeCells>" : "",
      selectedView: o.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: G,
      tabColor: o.tabColor ? '<sheetPr codeName="' + ("Sheet" + (n + 1)) + '" ' + ye + ' ><tabColor rgb="' + o.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + ye + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, K++;
  }
  let Y = Object.keys(N);
  var b = m.folder("_rels");
  b == null || b.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  var F = m.folder("docProps");
  F == null || F.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), F == null || F.file("app.xml", $e(c, D)), a == null || a.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + k + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), a == null || a.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (y - 1) + '" uniqueCount="' + Object.keys(d).length + '"> ' + S + "</sst>"
  );
  var E = a == null ? void 0 : a.folder("_rels");
  E == null || E.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + h + " </Relationships>"
  );
  var U = a == null ? void 0 : a.folder("theme");
  U == null || U.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  var _ = a == null ? void 0 : a.folder("worksheets");
  let R = [];
  const Z = a == null ? void 0 : a.folder("drawings"), ne = _ == null ? void 0 : _.folder("_rels");
  if (Y.forEach((n, o) => {
    const r = N[n];
    if (r.hasComment) {
      R.push(o + 1);
      let l = r.commentAuthor;
      a == null || a.file(
        `comments${o + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
	xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
     xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
	<authors>
        ${Array.isArray(l) && l.length > 0 ? l.reduce(
          (A, G) => A + "<author>" + G + "</author>",
          ""
        ) : "<author></author>"}
	</authors>
	<commentList>
		${r.commentString}
	</commentList>
</comments>`
      ), ne == null || ne.file(
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
      ), Z == null || Z.file(
        "vmlDrawing" + (o + 1) + ".vml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout><v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path gradientshapeok="t" o:connecttype="rect"/>
 </v:shapetype>${r.shapeCommentRowCol.reduce((A, G) => A + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;
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
   <x:Row>${G.row}</x:Row>
   <x:Column>${G.col}</x:Column>
  </x:ClientData>
 </v:shape>`, "")}
 </xml>`
      );
    }
    _ == null || _.file(
      r.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + r.tabColor + r.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + r.sheetSizeString + "<sheetData>" + r.sheetDataString + "</sheetData>" + r.protectionOption + r.sheetSortFilter + r.merges + (r.hasComment ? '<legacyDrawing r:id="rId3" />' : "") + "</worksheet>"
    );
  }), m.file(
    "[Content_Types].xml",
    we(I, R)
  ), e.backend)
    return m.generateAsync({
      type: e.generateType ? e.generateType : "nodebuffer"
    }).then((n) => n);
  if (e.notSave)
    return m.generateAsync({ type: "blob" }).then((n) => n.slice(
      0,
      n.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  m.generateAsync({ type: "blob" }).then(function(n) {
    import("./FileSaver.min-3b84b3f2.mjs").then((o) => o.F).then((o) => {
      const { saveAs: r } = o;
      r(
        n,
        (e.fileName ? e.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function Re(e, t, i, u, m) {
  const c = Ae(
    e,
    t,
    i,
    u,
    m
  );
  return Me(c);
}
export {
  Re as convertTableToExcel,
  Me as generateExcel
};
