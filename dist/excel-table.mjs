function _e(e, l, o = "", f = [], p = 0) {
  const m = e.length;
  for (let h = 0; h < m; h++)
    f.push(o + e[h]);
  return l < f.length ? f : _e(
    e,
    l,
    f[p + 1],
    f,
    p + 1
  );
}
function ke(e) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + ' <fonts count="' + e.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + e.font.value + ' </fonts> <fills count="' + e.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + e.fill.value + ' </fills> <borders count="' + e.border.count + '"> <border />' + e.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + e.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + e.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> <dxfs count="0" /></styleSheet>';
}
function Te(e, l) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/> <Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /> <Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + l.reduce((o, f) => o + `
    <Override PartName="/xl/comments${f}.xml"
        ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />`, "") + e + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" /> <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function we(e, l) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + e + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + e + '" baseType="lpstr"> ' + l + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function me(e, l, o) {
  let f = e.replace(/[0-9]/g, ""), p = parseInt(e.substr(f.length)), m = '<c r="' + e + '" ' + (o && typeof l.styleId == "string" && o[l.styleId] ? 's="' + o[l.styleId].index + '" ' : "") + ">     <f>" + l.type + "(" + l.start + ":" + l.end + ")</f> </c>";
  return {
    column: f,
    row: p,
    cell: m
  };
}
function Se(e) {
  return e.replace(/ /g, "");
}
function ce(e) {
  e = Number(e);
  var l = e.toString(16);
  return l.length == 1 ? "0" + l : l;
}
function W(e) {
  e = Se(e);
  let l = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), o = l.reduce((f, p) => f && !Number.isNaN(Number(p)), !0);
  return l.length == 4 && l[3] == "0" || !o ? null : (ce(l[0]) + ce(l[1]) + ce(l[2])).toUpperCase();
}
function ne(e, l) {
  if (typeof e > "u" || e === null)
    return null;
  if (!l) {
    let o = Se(e);
    o.indexOf("var(") == 0 && o.lastIndexOf(")") == o.length - 1 && (o = o.substring(4, o.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      o
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const o = W(e);
    e = o || "";
  }
  return e;
}
function $e(e, l, o, f, p, m, h, a) {
  let F = [], C = "both", d = [];
  !l || l === 0 ? (l = 1, C = "col") : d.push(l - 1), !e || e === 0 ? (e = 0, C = "row") : d.push(e - 1);
  let x = p || {};
  x.mergeType = a && a.mergeType ? [...a.mergeType, C] : [C], x.mergeValue = a && a.mergeValue ? [...a.mergeValue, d] : [d], x.mergeStart = a && a.mergeStart ? [...a.mergeStart, o] : [o];
  for (let u = 0; u < l; u++) {
    let v = e;
    for (let $ = 0; $ < f; $++)
      o <= $ ? v >= 1 ? (x["c" + $] = m, m = "", h += "*", v--) : l >= 2 && o == $ ? (x["c" + $] = m, m = "", h += "+") : h += "-" : u > 0 && (h += "-");
    F.push({
      ...x,
      mergeString: h
    }), x = {}, h = "";
  }
  return F;
}
function Ie(e, l, o, f, p) {
  var x;
  if (!e && !l)
    throw "Error: One of the function inputs is required.";
  let m;
  e ? m = (x = document.querySelector(e)) == null ? void 0 : x.querySelectorAll("tr") : m = l == null ? void 0 : l.querySelectorAll("tr");
  let h = [], a = [], F = {
    header: {},
    rows: []
  }, C = 40;
  if (m) {
    let u = !1, v = 0;
    m.forEach(($, _) => {
      var q = [].slice.call($.children);
      const O = window.getComputedStyle($, null);
      let Y = W(O.backgroundColor);
      if (!u)
        v = q.length, u = !0, typeof f == "function" ? C = f(
          Number(O.height.substring(0, O.height.length - 2)),
          _,
          !0
        ) : C = Number(
          O.height.substring(0, O.height.length - 2)
        ), q.forEach((k, K) => {
          let S = window.getComputedStyle(k, null), w = null;
          S.borderBottomWidth !== "0px" && (w || (w = {}), w.bottom = {
            style: "thin",
            color: W(S.borderBottomColor)
          }), S.borderTopWidth !== "0px" && (w || (w = {}), w.top = {
            style: "thin",
            color: W(S.borderTopColor)
          }), S.borderLeftWidth !== "0px" && (w || (w = {}), w.left = {
            style: "thin",
            color: W(S.borderLeftColor)
          }), S.borderRightWidth !== "0px" && (w || (w = {}), w.right = {
            style: "thin",
            color: W(S.borderRightColor)
          });
          let L = W(S.backgroundColor);
          !L && Y && (L = Y);
          let V = {
            ...L ? { fg: L } : {},
            bold: parseInt(S.fontWeight) > 500,
            size: parseInt(
              S.fontSize.substring(0, S.fontSize.indexOf("p"))
            ),
            ...w ? { border: w } : {},
            alignment: {
              horizontal: S.textAlign,
              vertical: "center",
              ...S.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          F.header[_ + "-" + K] = V;
          let T;
          typeof p == "function" ? T = p(
            Number(S.width.substring(0, S.width.length - 2)),
            K
          ) : T = Number(S.width.substring(0, S.width.length - 2)) * 0.15, h.push({
            label: "c" + K,
            colspan: k.getAttribute("colspan"),
            rowspan: k.getAttribute("rowspan"),
            text: k.textContent,
            size: T
          });
        });
      else {
        let k = {}, K = "", S = !1;
        a.length >= _ && (k = a[_ - 1], K = "mergeString" in k ? k.mergeString : "", S = !0);
        let w = 0;
        q.forEach((L, V) => {
          if ("c" + (V + w) in k)
            for (let B = 0; B <= v + 1 && "c" + (V + B) in k; B++)
              w++;
          V += w;
          let T = window.getComputedStyle(L, null);
          if (L.getAttribute("colspan") || L.getAttribute("rowspan")) {
            let B = $e(
              L.getAttribute("colspan") * 1,
              L.getAttribute("rowspan") * 1,
              V,
              v,
              k,
              L.textContent,
              K,
              k
            );
            a.length < _ ? a.push(...B) : B.forEach((i, t) => {
              a.length < _ + t ? a.push(...B) : a[_ + t] = {
                ...a[_ + t],
                ...i
              };
            }), k = B[0], K = B[0].mergeString, S = !0;
          } else
            S || (K += "-");
          let I = null;
          T.borderBottomWidth !== "0px" && (I || (I = {}), I.bottom = {
            style: "thin",
            color: W(T.borderBottomColor)
          }), T.borderTopWidth !== "0px" && (I || (I = {}), I.top = {
            style: "thin",
            color: W(T.borderTopColor)
          }), T.borderLeftWidth !== "0px" && (I || (I = {}), I.left = {
            style: "thin",
            color: W(T.borderLeftColor)
          }), T.borderRightWidth !== "0px" && (I || (I = {}), I.right = {
            style: "thin",
            color: W(T.borderRightColor)
          });
          let oe = W(T.backgroundColor);
          !oe && Y && (oe = Y);
          let re = {
            ...oe ? { fg: oe } : {},
            bold: parseInt(T.fontWeight) > 500,
            size: parseInt(
              T.fontSize.substring(0, T.fontSize.indexOf("p"))
            ),
            ...I ? { border: I } : {},
            // fg: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: T.textAlign,
              vertical: "center",
              direction: T.direction,
              ...T.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          F.header[_ + "-" + V] = re, k["c" + V] = L.textContent;
        }), typeof f == "function" ? k.height = f(
          Number(O.height.substring(0, O.height.length - 2)),
          _,
          !1
        ) : k.height = O.height.substring(0, O.height.length - 2), a.length < _ ? a.push(k) : a[_ - 1] = k;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: F.header,
    sheet: [
      {
        headerHeight: C,
        styleCellCondition: function(u, v, $, _, q, O) {
          return o ? O.includes(_ - 1 + "-" + $) ? _ - 1 + "-" + $ : "" : null;
        },
        data: a,
        headers: h
      }
    ]
  };
}
function fe(e, l, o) {
  let f = !1, p, m;
  if (typeof e == "object") {
    if ("author" in e && e.author && (f = !0, m = e.author), "styleId" in e && typeof e.styleId == "string") {
      let h = l[e.styleId];
      typeof h == "string" && (o = h);
    }
    p = "comment" in e && typeof e.comment == "string" ? ve(e.comment) : [""];
  } else
    p = e ? ve(e) : [""];
  return f && p.unshift(m + ":"), {
    hasAuthour: f,
    author: m,
    commentStyl: o,
    commentStr: p
  };
}
function ve(e) {
  var l = e.split(/\r?\n|\r|\n/g);
  return l;
}
function pe(e, l, o, f) {
  let p = `<comment ref="${e}" authorId="${Math.max(
    0,
    f - 1
  )}" shapeId="0">
            <text>`, m = "";
  return l.forEach((h, a) => {
    let F = "";
    if (h.length == 0) {
      m += `
`;
      return;
    }
    a > 0 && (F = 'xml:space="preserve"', m += `
`), p += "<r>" + o + "<t " + F + " >" + m + h + "</t></r>", m = "";
  }), p += "</text></comment>", p;
}
const Ae = `<rPr>
                        <b />
                        <sz val="9" />
                        <color rgb="000000" />
                        <rFont val="Tahoma" />
                    </rPr>
            `;
function be(e, l, o, f, p, m, h, a) {
  if (f) {
    let F = [], C = [], d = [];
    const x = m.length;
    p.forEach((u, v) => {
      const $ = u.match(e);
      if ($)
        if (a) {
          const _ = u.split(e);
          F.push(..._), C.push(...$), d.push(
            ...$.reduce((q, O) => [...q, l], [])
          );
        } else {
          const _ = u.split(e).reduce((q, O, Y) => Y >= 2 ? (q[1] += e + O, q) : [...q, O], []);
          F.push(..._), d.push(l), C.push(e.toString());
        }
      else
        F.push(u);
      x > v && (C.push(m[v]), d.push(h[v]));
    }), p = F, m = C, h = d;
  } else {
    const F = o.match(e);
    F ? a ? (m.push(...F), h.push(
      ...F.reduce((C, d) => [...C, l], [])
    ), p = o.split(e)) : (m.push(e.toString()), h.push(l), p = o.split(e).reduce((C, d, x) => x >= 2 ? (C[1] += e + d, C) : [...C, d], [])) : p.push(o), f = !0;
  }
  return {
    v: e,
    text: o,
    textSplited: f,
    splitValue: p,
    matchValue: m,
    styleMatchValue: h
  };
}
function he(e, l, o) {
  if (typeof e == "object") {
    let f = "", p = [], m = [], h = [], a = !1;
    if (Object.keys(e).forEach((d) => {
      const x = e[d];
      if (d !== "reg") {
        let u = be(
          d,
          typeof x == "string" ? x : "",
          l,
          a,
          h,
          p,
          m,
          !1
        );
        a = u.textSplited, h = u.splitValue, p = u.matchValue, m = u.styleMatchValue;
      }
    }), "reg" in e && Array.isArray(e.reg)) {
      const d = e.reg.length;
      for (let x = 0; x < d; x++) {
        const u = e.reg[x];
        if ("reg" in u && "styleId" in u) {
          typeof u.reg == "string" && (u.reg = new RegExp(u.reg, "g"));
          let v = be(
            u.reg,
            u.styleId,
            l,
            a,
            h,
            p,
            m,
            !0
          );
          a = v.textSplited, h = v.splitValue, p = v.matchValue, m = v.styleMatchValue;
        }
      }
    }
    const C = h.length - 1;
    for (let d = 0; d < C; d++) {
      const x = h[d], u = p[d], v = m[d];
      x.length > 0 && (f += `<r>
            <t xml:space="preserve" >${x}</t>
        </r>`), f += `
                            <r>
           ${o[v]}
            <t xml:space="preserve" >${u}</t>
        </r>
                    `;
    }
    return f = `<si>
                    ${f}
                    <r>
            <t>${h[C]}</t>
        </r>
                    </si>`, f;
  } else
    return `
<si>
    <t>${l}</t>
</si>
`;
}
async function Oe(e) {
  let l = {
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
  }, o = [
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
  e.numberOfColumn && e.numberOfColumn > 25 && (o = _e(o, e.numberOfColumn));
  const p = (await import("./jszip.min-e651e8fb.mjs").then((i) => i.j)).default;
  var m = new p();
  const h = e.sheet.length;
  var a = m.folder("xl");
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const F = Object.keys(e.styles), C = Ae;
  let d = F.reduce(
    (i, t, s) => {
      const n = e.styles[t], D = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (n.fg) {
        let M = ne(n.fg, e.backend);
        D.fillIndex = i.fill.count, i.fill.count++, i.fill.value = i.fill.value + '<fill><patternFill patternType="solid">' + (M ? '<fgColor rgb="' + M.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (n.fontColor || n.fontFamily || n.size || n.bold || n.italic || n.underline || n.doubleUnderline) {
        const M = ne(n.fontColor, e.backend);
        D.fontIndex = i.font.count, i.font.count++, i.font.value = i.font.value + "<font>" + (n.bold ? "<b/>" : "") + (n.italic ? "<i />" : "") + `${n.underline || n.doubleUnderline ? `<u ${n.doubleUnderline ? ' val="double" ' : ""}/>` : ""}` + (n.size ? '<sz val="' + n.size + '" />' : "") + (M ? '<color rgb="' + M.replace("#", "") + '" />' : "") + (n.fontFamily ? '<name val="' + n.fontFamily + '" />' : "") + "</font>", i.commentSintax.value[t] = `<rPr>
            ${n.bold ? "<b/>" : ""}
            ${n.italic ? "<i />" : ""}
            ${n.underline || n.doubleUnderline ? `<u ${n.doubleUnderline ? ' val="double" ' : ""}/>` : ""}
            <sz val="${n.size ? `${n.size}` : "9"}" />
            ${M ? `<color rgb="${M.replace("#", "")}" />` : ""}
            <rFont val="${n.fontFamily ? `${n.fontFamily}` : "Tahoma"}" />
        </rPr>
        `;
      }
      let G = "/>";
      n.alignment && (n.alignment.rtl && (n.alignment.readingOrder = 2), delete n.alignment.rtl, n.alignment.ltr && (n.alignment.readingOrder = 1), delete n.alignment.ltr, G = ' applyAlignment="1"><alignment ' + Object.keys(n.alignment).reduce((M, le) => M + " " + le + '="' + n.alignment[le] + '" ', "") + " /></xf>");
      const g = n.border;
      let P = "";
      if (typeof g == "object" && ((g.left || g.full) && (P += '<left style="' + (g.left || g.full).style + '"><color rgb="' + ne(
        (g.left || g.full).color,
        e.backend
      ).replace("#", "") + '" /></left>'), (g.right || g.full) && (P += '<right style="' + (g.right || g.full).style + '"><color rgb="' + ne(
        (g.right || g.full).color,
        e.backend
      ).replace("#", "") + '" /></right>'), (g.top || g.full) && (P += '<top style="' + (g.top || g.full).style + '"><color rgb="' + ne(
        (g.top || g.full).color,
        e.backend
      ).replace("#", "") + '" /></top>'), (g.bottom || g.full) && (P += '<bottom style="' + (g.bottom || g.full).style + '"><color rgb="' + ne(
        (g.bottom || g.full).color,
        e.backend
      ).replace("#", "") + '" /></bottom>'), D.borderIndex = i.border.count, i.border.count++, i.border.value += "<border>" + P + "<diagonal /></border>"), n.format) {
        const M = l[n.format];
        M && (D.formatIndex = M.key, "value" in M && (i.format.count++, i.format.value += M.value));
      }
      return i.cell.value = i.cell.value + '<xf numFmtId="' + D.formatIndex + '" fontId="' + D.fontIndex + '" fillId="' + D.fillIndex + '" borderId="' + D.borderIndex + '" xfId="0"' + (D.borderIndex > 0 ? ' applyBorder="1" ' : "") + (D.fillIndex > 0 ? ' applyFill="1" ' : "") + (D.fontIndex >= 0 ? ' applyFont="1" ' : "") + (D.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + G, e.styles[t].index = i.cell.count, i.cell.count++, i;
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
  a == null || a.file("styles.xml", ke(d));
  var x = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let u = "", v = 0, $ = "", _ = "", q = {};
  const O = {};
  let Y = "", k = 4, K = !1;
  for (let i = 0; i < h; i++) {
    const t = e.sheet[i];
    let s = t.shiftTop ? t.shiftTop : 1, n = "", D = "", G = "", g = !1, P = [], M = "", le = [], ue = [], ie = [], Z = {};
    const ae = t.headers.length;
    if (Array.isArray(t.headers) && ae) {
      let J = "";
      if (t.title) {
        const r = t.title, y = r.comment, R = r.shiftTop ? r.shiftTop : 0, N = t.shiftLeft ? t.shiftLeft : 0, c = r.shiftLeft ? r.shiftLeft + N : N, Q = r.consommeRow ? r.consommeRow - 1 : 1, ee = r.consommeCol ? r.consommeCol : ae, b = Q == 0 && typeof r.height == "number" ? ' ht="' + r.height + '" customHeight="1" ' : "", H = r.styleId ? r.styleId : "titleStyle", A = o[c] + "" + (s + R);
        if (t.merges || (t.merges = []), t.merges.push(
          A + ":" + o[c + ee - 1] + (s + Q + R)
        ), typeof y < "u") {
          g = !0;
          const E = fe(
            y,
            d.commentSintax.value,
            C
          );
          let j = P.length;
          if (E.hasAuthour && typeof E.author < "u") {
            let U = E.author.toString();
            const z = P.indexOf(U);
            z < 0 ? P.push(U) : j = z;
          }
          le.push({
            row: s + R - 1,
            col: c
          }), M += pe(
            A,
            E.commentStr,
            E.commentStyl,
            j
          );
        }
        typeof r.text == "string" && (J += '<row r="' + (s + R) + '" ' + b + ' spans="1:' + (c + ee - 1) + '">', J += '<c r="' + A + '" ' + (e.styles[H] ? ' s="' + e.styles[H].index + '" ' : "") + ' t="s"><v>' + v + "</v></c>", J += "</row>", v++, q[r.text] = r.text, r.multiStyleValue ? u += he(
          r.multiStyleValue,
          r.text,
          d.commentSintax.value
        ) : u += "<si><t>" + r.text + "</t></si>"), s += R + Q + 1;
      }
      let X = t.headerStyleKey ? t.headerStyleKey : null, se = 0;
      if (typeof t.shiftLeft == "number" && (se = t.shiftLeft), t.headers.forEach((r, y) => {
        if (se && (y += se), r.formula && ie.push(y), ue.push(r.label), t.mergeRowDataCondition && typeof t.mergeRowDataCondition == "function" && t.mergeRowDataCondition(
          r,
          null,
          y,
          !0
        ) === !0 && (Z[o[y]] = {
          inProgress: !0,
          start: s
        }), t.styleCellCondition && typeof t.styleCellCondition == "function" && (X = t.styleCellCondition(
          r,
          r,
          y,
          s,
          !0,
          F
        ) || X), r.size && r.size > 0 && (D += '<col min="' + (y + 1) + '" max="' + (y + 1) + '" width="' + r.size + '" customWidth="1" />'), t.withoutHeader)
          return;
        const R = o[y] + "" + s;
        if (typeof t.commentCodition == "function") {
          const c = t.commentCodition(
            r,
            null,
            r.label,
            s,
            y,
            !0
          );
          c && (r.comment = c);
        }
        if (r.comment) {
          g = !0;
          const c = fe(
            r.comment,
            d.commentSintax.value,
            C
          );
          let Q = P.length;
          if (c.hasAuthour && typeof c.author < "u") {
            let ee = c.author.toString();
            const b = P.indexOf(ee);
            b < 0 ? P.push(ee) : Q = b;
          }
          le.push({
            row: s - 1,
            col: y
          }), M += pe(
            R,
            c.commentStr,
            c.commentStyl,
            Q
          );
        }
        const N = t.formula && t.formula[R];
        N ? (n += me(
          R,
          N,
          e.styles
        ).cell, delete t.formula[R]) : (n += '<c r="' + o[y] + s + '" ' + (X && e.styles && e.styles[X] ? ' s="' + e.styles[X].index + '" ' : "") + ' t="s"><v>' + v + "</v></c>", r.multiStyleValue ? u += he(
          r.multiStyleValue,
          r.text,
          d.commentSintax.value
        ) : u += "<si><t>" + r.text + "</t></si>", q[r.text] = r.text, v++);
      }), t.withoutHeader ? n += J : (n = J + '<row r="' + s + '" spans="1:' + ae + '" ' + (t.headerHeight ? 'ht="' + t.headerHeight + '" customHeight="1"' : "") + (t.headerRowOption ? Object.keys(t.headerRowOption).reduce((r, y) => r + " " + y + '="' + t.headerRowOption[y] + '" ', "  ") : "") + ">" + n + "</row>", s++), Array.isArray(t.data)) {
        const r = e.mapSheetDataOption && e.mapSheetDataOption.outlineLevel ? e.mapSheetDataOption.outlineLevel : "outlineLevel", y = e.mapSheetDataOption && e.mapSheetDataOption.hidden ? e.mapSheetDataOption.hidden : "hidden", R = e.mapSheetDataOption && e.mapSheetDataOption.height ? e.mapSheetDataOption.height : "height", N = t.data.length;
        t.data.forEach((c, Q) => {
          if (c.mergeType)
            for (let b = 0; b < c.mergeType.length; b++) {
              const H = c.mergeType[b], A = c.mergeStart[b], E = c.mergeValue[i];
              let j = "";
              H == "both" ? j = o[A] + "" + s + ":" + o[A + E[1]] + (s + E[0]) : H == "col" ? j = o[A] + "" + s + ":" + o[A + E[0]] + s : j = o[A] + "" + s + ":" + o[A] + (s + E[0]), t.merges || (t.merges = []), t.merges.push(j);
            }
          const ee = c.rowStyle;
          n += '<row r="' + s + '" spans="1:' + ae + '" ' + (R in c ? 'ht="' + c[R] + '" customHeight="1"' : "") + (r in c ? ' outlineLevel="' + c[r] + '"' : "") + (y in c ? ' hidden="' + c[y] + '"' : "") + " >", ue.forEach((b, H) => {
            se && (H += se);
            const A = c[b];
            let E = ee;
            if (t.styleCellCondition && typeof t.styleCellCondition == "function" && (E = t.styleCellCondition(
              A,
              c,
              H,
              s,
              !1,
              F
            ) || ee), t.mergeRowDataCondition && typeof t.mergeRowDataCondition == "function") {
              let j = t.mergeRowDataCondition(
                A,
                b,
                H,
                !1
              );
              const U = o[H];
              let z = Z[U];
              j === !0 ? (!z || z && !z.inProgress) && (Z[U] = {
                inProgress: !0,
                start: s
              }) : z && z.inProgress && (t.merges ? t.merges.push(
                U + z.start + ":" + U + (s - 1)
              ) : t.merges = [
                U + z.start + ":" + U + (s - 1)
              ], Z[U] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof A < "u") {
              const j = o[H] + "" + s;
              if (typeof t.commentCodition == "function") {
                const z = t.commentCodition(
                  A,
                  c,
                  b,
                  s,
                  H,
                  !1
                );
                z && (typeof c.comment != "object" && (c.comment = {}), c.comment[b] = z);
              }
              if (typeof c.comment == "object" && b in c.comment) {
                const z = c.comment[b];
                g = !0;
                const te = fe(
                  z,
                  d.commentSintax.value,
                  C
                );
                te.hasAuthour && typeof te.author < "u" && P.push(te.author.toString()), le.push({
                  row: s - 1,
                  col: H
                });
                let ye = P.length;
                if (te.hasAuthour && typeof te.author < "u") {
                  let xe = te.author.toString();
                  const Ce = P.indexOf(xe);
                  Ce < 0 ? P.push(xe) : ye = Ce;
                }
                M += pe(
                  j,
                  te.commentStr,
                  te.commentStyl,
                  ye
                );
              }
              const U = t.formula && t.formula[j];
              U ? (n += me(j, U).cell, delete t.formula[j]) : typeof A == "string" ? (n += '<c r="' + o[H] + s + '" t="s" ' + (E && e.styles && e.styles[E] ? 's="' + e.styles[E].index + '"' : "") + "><v>" + v + "</v></c>", "multiStyleValue" in c && c.multiStyleValue && b in c.multiStyleValue ? u += he(
                c.multiStyleValue[b],
                A,
                d.commentSintax.value
              ) : u += "<si><t>" + A + "</t></si>", q[A] = A, v++) : n += '<c r="' + o[H] + s + '" ' + (E && e.styles && e.styles[E] ? 's="' + e.styles[E].index + '"' : "") + "><v>" + A + "</v></c>";
            }
          }), N - 1 == Q && Object.keys(Z).forEach((b) => {
            Z[b].inProgress && (t.merges ? t.merges.push(
              b + Z[b].start + ":" + b + s
            ) : t.merges = [
              b + Z[b].start + ":" + b + s
            ]);
          }), s++, n += "</row>";
        }), t.sortAndfilter && (t.sortAndfilter.mode == "all" ? G += '<autoFilter ref="A1:' + o[ae - 1] + (s - 1) + '" />' : typeof t.sortAndfilter.ref == "string" && t.sortAndfilter.ref.length > 0 && (G += '<autoFilter ref="' + t.sortAndfilter.ref + '" />'));
      }
      if (ie.length > 0 && (t.formula || (t.formula = {}), ie.forEach((r) => {
        const y = t.headers[r];
        t.formula[o[r] + "" + s] = {
          start: t.withoutHeader ? o[r] + "1" : o[r] + "2",
          end: o[r] + "" + (s - 1),
          type: y.formula.type,
          ...y.formula.styleId ? { styleId: y.formula.styleId } : {}
        };
      })), t.formula) {
        const r = Object.keys(t.formula);
        if (r.length) {
          let y = {};
          r.forEach((R) => {
            const N = me(R, t.formula[R], e.styles);
            y[N.row] ? y[N.row] += N.cell : y[N.row] = N.cell;
          }), Object.keys(y).forEach((R) => {
            const N = y[R];
            n += '<row r="' + R + '" spans="1:' + ae + '"  >' + N + "</row>";
          });
        }
      }
    }
    i > 0 && (x += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (i + 1) + '.xml" />');
    const de = t.name ? t.name : "sheet" + (i + 1), Fe = t.state ? t.state : "visible";
    $ += '<sheet state="' + Fe + '" name="' + de + '" sheetId="' + (i + 1) + '" r:id="rId' + (k + 1) + '" />', _ += '<Relationship Id="rId' + (k + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (i + 1) + '.xml" />', Y += "<vt:lpstr>" + ("sheet" + (i + 1)) + "</vt:lpstr>", K = K || !!t.selected;
    const ge = t.sortAndfilter ? 'filterMode="1"' : "";
    O["sheet" + (i + 1)] = {
      indexId: k + 1,
      key: "sheet" + (i + 1),
      sheetName: de,
      sheetDataString: n,
      hasComment: g,
      commentString: M,
      commentAuthor: P,
      shapeCommentRowCol: le,
      sheetSizeString: D.length > 0 ? "<cols>" + D + "</cols>" : "",
      protectionOption: t.protectionOption ? Object.keys(t.protectionOption).reduce((J, X) => J + " " + X + '="' + t.protectionOption[X] + '" ', "<sheetProtection ") + "/>" : "",
      merges: t.merges ? t.merges.reduce((J, X) => J += ' <mergeCell ref="' + X + '" />', '<mergeCells count="' + t.merges.length + '">') + " </mergeCells>" : "",
      selectedView: t.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: G,
      tabColor: t.tabColor ? '<sheetPr codeName="' + ("Sheet" + (i + 1)) + '" ' + ge + ' ><tabColor rgb="' + t.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + ge + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, k++;
  }
  let S = Object.keys(O);
  var w = m.folder("_rels");
  w == null || w.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  var L = m.folder("docProps");
  L == null || L.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), L == null || L.file("app.xml", we(h, Y)), a == null || a.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + $ + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), a == null || a.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (v - 1) + '" uniqueCount="' + Object.keys(q).length + '"> ' + u + "</sst>"
  );
  var V = a == null ? void 0 : a.folder("_rels");
  V == null || V.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + _ + " </Relationships>"
  );
  var T = a == null ? void 0 : a.folder("theme");
  T == null || T.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  var I = a == null ? void 0 : a.folder("worksheets");
  let oe = [];
  const re = a == null ? void 0 : a.folder("drawings"), B = I == null ? void 0 : I.folder("_rels");
  if (S.forEach((i, t) => {
    const s = O[i];
    if (s.hasComment) {
      oe.push(t + 1);
      let n = s.commentAuthor;
      a == null || a.file(
        `comments${t + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
	xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
     xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
	<authors>
        ${Array.isArray(n) && n.length > 0 ? n.reduce(
          (D, G) => D + "<author>" + G + "</author>",
          ""
        ) : "<author></author>"}
	</authors>
	<commentList>
		${s.commentString}
	</commentList>
</comments>`
      ), B == null || B.file(
        "sheet" + (t + 1) + ".xml.rels",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    <Relationship Id="rId1"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
        Target="../comments${t + 1}.xml" />
    
    <Relationship Id="rId3"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing"
        Target="../drawings/vmlDrawing${t + 1}.vml" />
</Relationships>`
      ), re == null || re.file(
        "vmlDrawing" + (t + 1) + ".vml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout><v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path gradientshapeok="t" o:connecttype="rect"/>
 </v:shapetype>${s.shapeCommentRowCol.reduce((D, G) => D + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;
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
    I == null || I.file(
      s.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + s.tabColor + s.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + s.sheetSizeString + "<sheetData>" + s.sheetDataString + "</sheetData>" + s.protectionOption + s.sheetSortFilter + s.merges + (s.hasComment ? '<legacyDrawing r:id="rId3" />' : "") + "</worksheet>"
    );
  }), m.file(
    "[Content_Types].xml",
    Te(x, oe)
  ), e.backend)
    return m.generateAsync({
      type: e.generateType ? e.generateType : "nodebuffer"
    }).then((i) => i);
  if (e.notSave)
    return m.generateAsync({ type: "blob" }).then((i) => i.slice(
      0,
      i.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  m.generateAsync({ type: "blob" }).then(function(i) {
    import("./FileSaver.min-3b84b3f2.mjs").then((t) => t.F).then((t) => {
      const { saveAs: s } = t;
      s(
        i,
        (e.fileName ? e.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function De(e, l, o, f, p) {
  const m = Ie(
    e,
    l,
    o,
    f,
    p
  );
  return Oe(m);
}
export {
  De as convertTableToExcel,
  Oe as generateExcel
};
