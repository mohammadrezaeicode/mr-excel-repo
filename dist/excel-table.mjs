function ve(e, l, o = "", c = [], f = 0) {
  const m = e.length;
  for (let p = 0; p < m; p++)
    c.push(o + e[p]);
  return l < c.length ? c : ve(
    e,
    l,
    c[f + 1],
    c,
    f + 1
  );
}
function _e(e) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + ' <fonts count="' + e.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + e.font.value + ' </fonts> <fills count="' + e.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + e.fill.value + ' </fills> <borders count="' + e.border.count + '"> <border />' + e.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + e.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + e.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> <dxfs count="0" /></styleSheet>';
}
function Se(e, l) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/> <Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /> <Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + l.reduce((o, c) => o + `
    <Override PartName="/xl/comments${c}.xml"
        ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />`, "") + e + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" /> <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function Fe(e, l) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + e + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + e + '" baseType="lpstr"> ' + l + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function me(e, l, o) {
  let c = e.replace(/[0-9]/g, ""), f = parseInt(e.substr(c.length)), m = '<c r="' + e + '" ' + (o && typeof l.styleId == "string" && o[l.styleId] ? 's="' + o[l.styleId].index + '" ' : "") + ">     <f>" + l.type + "(" + l.start + ":" + l.end + ")</f> </c>";
  return {
    column: c,
    row: f,
    cell: m
  };
}
function Ce(e) {
  return e.replace(/ /g, "");
}
function ce(e) {
  e = Number(e);
  var l = e.toString(16);
  return l.length == 1 ? "0" + l : l;
}
function B(e) {
  e = Ce(e);
  let l = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), o = l.reduce((c, f) => c && !Number.isNaN(Number(f)), !0);
  return l.length == 4 && l[3] == "0" && !o ? null : (ce(l[0]) + ce(l[1]) + ce(l[2])).toUpperCase();
}
function oe(e, l) {
  if (typeof e > "u" || e === null)
    return null;
  if (!l) {
    let o = Ce(e);
    o.indexOf("var(") == 0 && o.lastIndexOf(")") == o.length - 1 && (console.log("in"), o = o.substring(4, o.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      o
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const o = B(e);
    e = o || "";
  }
  return e;
}
function ke(e, l, o, c, f, m, p, a) {
  let S = [], v = "both", u = [];
  !l || l === 0 ? (l = 1, v = "col") : u.push(l - 1), !e || e === 0 ? (e = 0, v = "row") : u.push(e - 1);
  let x = f || {};
  x.mergeType = a && a.mergeType ? [...a.mergeType, v] : [v], x.mergeValue = a && a.mergeValue ? [...a.mergeValue, u] : [u], x.mergeStart = a && a.mergeStart ? [...a.mergeStart, o] : [o];
  for (let h = 0; h < l; h++) {
    let C = e;
    for (let w = 0; w < c; w++)
      o <= w ? C >= 1 ? (x["c" + w] = m, m = "", p += "*", C--) : l >= 2 && o == w ? (x["c" + w] = m, m = "", p += "+") : p += "-" : h > 0 && (p += "-");
    S.push({
      ...x,
      mergeString: p
    }), x = {}, p = "";
  }
  return S;
}
function Te(e, l, o, c, f) {
  var x;
  if (console.log(arguments), !e && !l)
    throw "Error: One of the function inputs is required.";
  let m;
  e ? m = (x = document.querySelector(e)) == null ? void 0 : x.querySelectorAll("tr") : m = l == null ? void 0 : l.querySelectorAll("tr");
  let p = [], a = [], S = {
    header: {},
    rows: []
  }, v = 40;
  if (m) {
    let h = !1, C = 0;
    m.forEach((w, b) => {
      var P = [].slice.call(w.children);
      const A = window.getComputedStyle(w, null);
      let Z = B(A.backgroundColor);
      if (!h)
        C = P.length, h = !0, console.log(c, typeof c), typeof c == "function" ? v = c(
          Number(A.height.substring(0, A.height.length - 2)),
          b,
          !0
        ) : v = Number(
          A.height.substring(0, A.height.length - 2)
        ), P.forEach((F, U) => {
          let _ = window.getComputedStyle(F, null), T = null;
          _.borderBottomWidth !== "0px" && (T || (T = {}), T.bottom = {
            style: "thin",
            color: B(_.borderBottomColor)
          }), _.borderTopWidth !== "0px" && (T || (T = {}), T.top = {
            style: "thin",
            color: B(_.borderTopColor)
          }), _.borderLeftWidth !== "0px" && (T || (T = {}), T.left = {
            style: "thin",
            color: B(_.borderLeftColor)
          }), _.borderRightWidth !== "0px" && (T || (T = {}), T.right = {
            style: "thin",
            color: B(_.borderRightColor)
          });
          let L = B(_.backgroundColor);
          L || (L = Z);
          let j = {
            ...L ? { fg: L } : {},
            bold: parseInt(_.fontWeight) > 500,
            size: parseInt(
              _.fontSize.substring(0, _.fontSize.indexOf("p"))
            ),
            ...T ? { border: T } : {},
            alignment: {
              horizontal: _.textAlign,
              vertical: "center",
              ..._.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          S.header[b + "-" + U] = j;
          let k;
          typeof f == "function" ? k = f(
            Number(_.width.substring(0, _.width.length - 2)),
            U
          ) : k = Number(_.width.substring(0, _.width.length - 2)) * 0.15, p.push({
            label: "c" + U,
            colspan: F.getAttribute("colspan"),
            rowspan: F.getAttribute("rowspan"),
            text: F.textContent,
            size: k
          });
        });
      else {
        let F = {}, U = "", _ = !1;
        a.length >= b && (F = a[b - 1], U = "mergeString" in F ? F.mergeString : "", _ = !0);
        let T = 0;
        P.forEach((L, j) => {
          if ("c" + (j + T) in F)
            for (let z = 0; z <= C + 1 && "c" + (j + z) in F; z++)
              T++;
          j += T;
          let k = window.getComputedStyle(L, null);
          if (L.getAttribute("colspan") || L.getAttribute("rowspan")) {
            let z = ke(
              L.getAttribute("colspan") * 1,
              L.getAttribute("rowspan") * 1,
              j,
              C,
              F,
              L.textContent,
              U,
              F
            );
            a.length < b ? a.push(...z) : z.forEach((i, t) => {
              a.length < b + t ? a.push(...z) : a[b + t] = {
                ...a[b + t],
                ...i
              };
            }), F = z[0], U = z[0].mergeString, _ = !0;
          } else
            _ || (U += "-");
          let $ = null;
          k.borderBottomWidth !== "0px" && ($ || ($ = {}), $.bottom = {
            style: "thin",
            color: B(k.borderBottomColor)
          }), k.borderTopWidth !== "0px" && ($ || ($ = {}), $.top = {
            style: "thin",
            color: B(k.borderTopColor)
          }), k.borderLeftWidth !== "0px" && ($ || ($ = {}), $.left = {
            style: "thin",
            color: B(k.borderLeftColor)
          }), k.borderRightWidth !== "0px" && ($ || ($ = {}), $.right = {
            style: "thin",
            color: B(k.borderRightColor)
          });
          let Q = B(k.backgroundColor);
          Q || (Q = Z);
          let le = {
            ...Q ? { fg: Q } : {},
            bold: parseInt(k.fontWeight) > 500,
            size: parseInt(
              k.fontSize.substring(0, k.fontSize.indexOf("p"))
            ),
            ...$ ? { border: $ } : {},
            // fg: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: k.textAlign,
              vertical: "center",
              direction: k.direction,
              ...k.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          S.header[b + "-" + j] = le, F["c" + j] = L.textContent;
        }), console.log(c, typeof c), typeof c == "function" ? F.height = c(
          Number(A.height.substring(0, A.height.length - 2)),
          b,
          !1
        ) : F.height = A.height.substring(0, A.height.length - 2), a.length < b ? a.push(F) : a[b - 1] = F;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: S.header,
    sheet: [
      {
        headerHeight: v,
        styleCellCondition: function(h, C, w, b, P, A) {
          return o ? A.includes(b - 1 + "-" + w) ? b - 1 + "-" + w : "" : null;
        },
        data: a,
        headers: p
      }
    ]
  };
}
function fe(e, l, o) {
  let c = !1, f, m;
  if (typeof e == "object") {
    if ("author" in e && e.author && (c = !0, m = e.author), "styleId" in e && typeof e.styleId == "string") {
      let p = l[e.styleId];
      typeof p == "string" && (o = p);
    }
    f = "comment" in e && typeof e.comment == "string" ? ye(e.comment) : [""];
  } else
    f = e ? ye(e) : [""];
  return c && f.unshift(m + ":"), {
    hasAuthour: c,
    author: m,
    commentStyl: o,
    commentStr: f
  };
}
function ye(e) {
  var l = e.split(/\r?\n|\r|\n/g);
  return l;
}
function pe(e, l, o, c) {
  let f = `<comment ref="${e}" authorId="${Math.max(
    0,
    c - 1
  )}" shapeId="0">
            <text>`, m = "";
  return l.forEach((p, a) => {
    let S = "";
    if (p.length == 0) {
      m += `
`;
      return;
    }
    a > 0 && (S = 'xml:space="preserve"', m += `
`), f += "<r>" + o + "<t " + S + " >" + m + p + "</t></r>", m = "";
  }), f += "</text></comment>", f;
}
const we = `<rPr>
                        <b />
                        <sz val="9" />
                        <color rgb="000000" />
                        <rFont val="Tahoma" />
                    </rPr>
            `;
function xe(e, l, o, c, f, m, p, a) {
  if (c) {
    let S = [], v = [], u = [];
    const x = m.length;
    f.forEach((h, C) => {
      const w = h.match(e);
      if (w)
        if (a) {
          const b = h.split(e);
          S.push(...b), v.push(...w), u.push(
            ...w.reduce((P, A) => [...P, l], [])
          );
        } else {
          const b = h.split(e).reduce((P, A, Z) => Z >= 2 ? (P[1] += e + A, P) : [...P, A], []);
          S.push(...b), u.push(l), v.push(e.toString());
        }
      else
        S.push(h);
      x > C && (v.push(m[C]), u.push(p[C]));
    }), f = S, m = v, p = u;
  } else {
    const S = o.match(e);
    S ? a ? (m.push(...S), p.push(
      ...S.reduce((v, u) => [...v, l], [])
    ), f = o.split(e)) : (m.push(e.toString()), p.push(l), f = o.split(e).reduce((v, u, x) => x >= 2 ? (v[1] += e + u, v) : [...v, u], [])) : f.push(o), c = !0;
  }
  return {
    v: e,
    text: o,
    textSplited: c,
    splitValue: f,
    matchValue: m,
    styleMatchValue: p
  };
}
function he(e, l, o) {
  if (typeof e == "object") {
    let c = "", f = [], m = [], p = [], a = !1;
    if (Object.keys(e).forEach((u) => {
      const x = e[u];
      if (u !== "reg") {
        let h = xe(
          u,
          typeof x == "string" ? x : "",
          l,
          a,
          p,
          f,
          m,
          !1
        );
        a = h.textSplited, p = h.splitValue, f = h.matchValue, m = h.styleMatchValue;
      }
    }), "reg" in e && Array.isArray(e.reg)) {
      const u = e.reg.length;
      for (let x = 0; x < u; x++) {
        const h = e.reg[x];
        if ("reg" in h && "styleId" in h) {
          typeof h.reg == "string" && (h.reg = new RegExp(h.reg, "g"));
          let C = xe(
            h.reg,
            h.styleId,
            l,
            a,
            p,
            f,
            m,
            !0
          );
          a = C.textSplited, p = C.splitValue, f = C.matchValue, m = C.styleMatchValue;
        }
      }
    }
    const v = p.length - 1;
    for (let u = 0; u < v; u++) {
      const x = p[u], h = f[u], C = m[u];
      x.length > 0 && (c += `<r>
            <t xml:space="preserve" >${x}</t>
        </r>`), c += `
                            <r>
           ${o[C]}
            <t xml:space="preserve" >${h}</t>
        </r>
                    `;
    }
    return c = `<si>
                    ${c}
                    <r>
            <t>${p[v]}</t>
        </r>
                    </si>`, c;
  } else
    return `
<si>
    <t>${l}</t>
</si>
`;
}
async function $e(e) {
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
  e.numberOfColumn && e.numberOfColumn > 25 && (o = ve(o, e.numberOfColumn));
  const f = (await import("./jszip.min-e651e8fb.mjs").then((i) => i.j)).default;
  var m = new f();
  const p = e.sheet.length;
  var a = m.folder("xl");
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const S = Object.keys(e.styles), v = we;
  let u = S.reduce(
    (i, t, s) => {
      const r = e.styles[t], O = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (r.fg) {
        let M = oe(r.fg, e.backend);
        O.fillIndex = i.fill.count, i.fill.count++, i.fill.value = i.fill.value + '<fill><patternFill patternType="solid">' + (M ? '<fgColor rgb="' + M.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (r.fontColor || r.fontFamily || r.size || r.bold || r.italic || r.underline || r.doubleUnderline) {
        const M = oe(r.fontColor, e.backend);
        O.fontIndex = i.font.count, i.font.count++, i.font.value = i.font.value + "<font>" + (r.bold ? "<b/>" : "") + (r.italic ? "<i />" : "") + `${r.underline || r.doubleUnderline ? `<u ${r.doubleUnderline ? ' val="double" ' : ""}/>` : ""}` + (r.size ? '<sz val="' + r.size + '" />' : "") + (M ? '<color rgb="' + M.replace("#", "") + '" />' : "") + (r.fontFamily ? '<name val="' + r.fontFamily + '" />' : "") + "</font>", i.commentSintax.value[t] = `<rPr>
            ${r.bold ? "<b/>" : ""}
            ${r.italic ? "<i />" : ""}
            ${r.underline || r.doubleUnderline ? `<u ${r.doubleUnderline ? ' val="double" ' : ""}/>` : ""}
            <sz val="${r.size ? `${r.size}` : "9"}" />
            ${M ? `<color rgb="${M.replace("#", "")}" />` : ""}
            <rFont val="${r.fontFamily ? `${r.fontFamily}` : "Tahoma"}" />
        </rPr>
        `;
      }
      let V = "/>";
      r.alignment && (r.alignment.rtl && (r.alignment.readingOrder = 2), delete r.alignment.rtl, r.alignment.ltr && (r.alignment.readingOrder = 1), delete r.alignment.ltr, V = ' applyAlignment="1"><alignment ' + Object.keys(r.alignment).reduce((M, ee) => M + " " + ee + '="' + r.alignment[ee] + '" ', "") + " /></xf>");
      const g = r.border;
      let H = "";
      if (typeof g == "object" && ((g.left || g.full) && (H += '<left style="' + (g.left || g.full).style + '"><color rgb="' + oe(
        (g.left || g.full).color,
        e.backend
      ).replace("#", "") + '" /></left>'), (g.right || g.full) && (H += '<right style="' + (g.right || g.full).style + '"><color rgb="' + oe(
        (g.right || g.full).color,
        e.backend
      ).replace("#", "") + '" /></right>'), (g.top || g.full) && (H += '<top style="' + (g.top || g.full).style + '"><color rgb="' + oe(
        (g.top || g.full).color,
        e.backend
      ).replace("#", "") + '" /></top>'), (g.bottom || g.full) && (H += '<bottom style="' + (g.bottom || g.full).style + '"><color rgb="' + oe(
        (g.bottom || g.full).color,
        e.backend
      ).replace("#", "") + '" /></bottom>'), O.borderIndex = i.border.count, i.border.count++, i.border.value += "<border>" + H + "<diagonal /></border>"), r.format) {
        const M = l[r.format];
        M && (O.formatIndex = M.key, "value" in M && (i.format.count++, i.format.value += M.value));
      }
      return i.cell.value = i.cell.value + '<xf numFmtId="' + O.formatIndex + '" fontId="' + O.fontIndex + '" fillId="' + O.fillIndex + '" borderId="' + O.borderIndex + '" xfId="0"' + (O.borderIndex > 0 ? ' applyBorder="1" ' : "") + (O.fillIndex > 0 ? ' applyFill="1" ' : "") + (O.fontIndex >= 0 ? ' applyFont="1" ' : "") + (O.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + V, e.styles[t].index = i.cell.count, i.cell.count++, i;
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
  a == null || a.file("styles.xml", _e(u));
  var x = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let h = "", C = 0, w = "", b = "", P = {};
  const A = {};
  let Z = "", F = 4, U = !1;
  for (let i = 0; i < p; i++) {
    const t = e.sheet[i];
    let s = t.shiftTop ? t.shiftTop : 1, r = "", O = "", V = "", g = !1, H = [], M = "", ee = [], ue = [], ie = [], J = {};
    const te = t.headers.length;
    if (Array.isArray(t.headers) && te) {
      let X = "";
      if (t.title) {
        const n = t.title, y = n.comment, R = n.shiftTop ? n.shiftTop : 0, q = t.shiftLeft ? t.shiftLeft : 0, d = n.shiftLeft ? n.shiftLeft + q : q, re = n.consommeRow ? n.consommeRow - 1 : 1, ne = n.consommeCol ? n.consommeCol : te, I = re == 0 && typeof n.height == "number" ? ' ht="' + n.height + '" customHeight="1" ' : "", N = n.styleId ? n.styleId : "titleStyle", D = o[d] + "" + (s + R);
        if (t.merges || (t.merges = []), t.merges.push(
          D + ":" + o[d + ne - 1] + (s + re + R)
        ), typeof y < "u") {
          g = !0;
          const E = fe(
            y,
            u.commentSintax.value,
            v
          );
          E.hasAuthour && typeof E.author < "u" && H.push(E.author.toString()), ee.push({
            row: s + R - 1,
            col: d
          }), M += pe(
            D,
            E.commentStr,
            E.commentStyl,
            H.length
          );
        }
        typeof n.text == "string" && (X += '<row r="' + (s + R) + '" ' + I + ' spans="1:' + (d + ne - 1) + '">', X += '<c r="' + D + '" ' + (e.styles[N] ? ' s="' + e.styles[N].index + '" ' : "") + ' t="s"><v>' + C + "</v></c>", X += "</row>", C++, P[n.text] = n.text, n.multiStyleValue ? h += he(
          n.multiStyleValue,
          n.text,
          u.commentSintax.value
        ) : h += "<si><t>" + n.text + "</t></si>"), s += R + re + 1;
      }
      let K = t.headerStyleKey ? t.headerStyleKey : null, ae = 0;
      if (typeof t.shiftLeft == "number" && (ae = t.shiftLeft), t.headers.forEach((n, y) => {
        if (ae && (y += ae), n.formula && ie.push(y), ue.push(n.label), t.mergeRowDataCondition && typeof t.mergeRowDataCondition == "function" && t.mergeRowDataCondition(
          n,
          null,
          y,
          !0
        ) === !0 && (J[o[y]] = {
          inProgress: !0,
          start: s
        }), t.styleCellCondition && typeof t.styleCellCondition == "function" && (K = t.styleCellCondition(
          n,
          n,
          y,
          s,
          !0,
          S
        ) || K), n.size && n.size > 0 && (O += '<col min="' + (y + 1) + '" max="' + (y + 1) + '" width="' + n.size + '" customWidth="1" />'), t.withoutHeader)
          return;
        const R = o[y] + "" + s;
        if (n.comment) {
          g = !0;
          const d = fe(
            n.comment,
            u.commentSintax.value,
            v
          );
          d.hasAuthour && typeof d.author < "u" && H.push(d.author.toString()), ee.push({
            row: s - 1,
            col: y
          }), M += pe(
            R,
            d.commentStr,
            d.commentStyl,
            H.length
          );
        }
        const q = t.formula && t.formula[R];
        q ? (r += me(
          R,
          q,
          e.styles
        ).cell, delete t.formula[R]) : (r += '<c r="' + o[y] + s + '" ' + (K && e.styles && e.styles[K] ? ' s="' + e.styles[K].index + '" ' : "") + ' t="s"><v>' + C + "</v></c>", n.multiStyleValue ? h += he(
          n.multiStyleValue,
          n.text,
          u.commentSintax.value
        ) : h += "<si><t>" + n.text + "</t></si>", P[n.text] = n.text, C++);
      }), t.withoutHeader ? r += X : (r = X + '<row r="' + s + '" spans="1:' + te + '" ' + (t.headerHeight ? 'ht="' + t.headerHeight + '" customHeight="1"' : "") + (t.headerRowOption ? Object.keys(t.headerRowOption).reduce((n, y) => n + " " + y + '="' + t.headerRowOption[y] + '" ', "  ") : "") + ">" + r + "</row>", s++), Array.isArray(t.data)) {
        const n = e.mapSheetDataOption && e.mapSheetDataOption.outlineLevel ? e.mapSheetDataOption.outlineLevel : "outlineLevel", y = e.mapSheetDataOption && e.mapSheetDataOption.hidden ? e.mapSheetDataOption.hidden : "hidden", R = e.mapSheetDataOption && e.mapSheetDataOption.height ? e.mapSheetDataOption.height : "height", q = t.data.length;
        t.data.forEach((d, re) => {
          if (d.mergeType)
            for (let I = 0; I < d.mergeType.length; I++) {
              const N = d.mergeType[I], D = d.mergeStart[I], E = d.mergeValue[i];
              let W = "";
              N == "both" ? W = o[D] + "" + s + ":" + o[D + E[1]] + (s + E[0]) : N == "col" ? W = o[D] + "" + s + ":" + o[D + E[0]] + s : W = o[D] + "" + s + ":" + o[D] + (s + E[0]), t.merges || (t.merges = []), t.merges.push(W);
            }
          const ne = d.rowStyle;
          r += '<row r="' + s + '" spans="1:' + te + '" ' + (R in d ? 'ht="' + d[R] + '" customHeight="1"' : "") + (n in d ? ' outlineLevel="' + d[n] + '"' : "") + (y in d ? ' hidden="' + d[y] + '"' : "") + " >", ue.forEach((I, N) => {
            ae && (N += ae);
            const D = d[I];
            let E = ne;
            if (t.styleCellCondition && typeof t.styleCellCondition == "function" && (E = t.styleCellCondition(
              D,
              d,
              N,
              s,
              !1,
              S
            ) || ne), t.mergeRowDataCondition && typeof t.mergeRowDataCondition == "function") {
              let W = t.mergeRowDataCondition(
                D,
                I,
                N,
                !1
              );
              const G = o[N];
              let Y = J[G];
              W === !0 ? (!Y || Y && !Y.inProgress) && (J[G] = {
                inProgress: !0,
                start: s
              }) : Y && Y.inProgress && (t.merges ? t.merges.push(
                G + Y.start + ":" + G + (s - 1)
              ) : t.merges = [
                G + Y.start + ":" + G + (s - 1)
              ], J[G] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof D < "u") {
              const W = o[N] + "" + s;
              if (typeof d.comment == "object" && I in d.comment) {
                const Y = d.comment[I];
                g = !0;
                const se = fe(
                  Y,
                  u.commentSintax.value,
                  v
                );
                se.hasAuthour && typeof se.author < "u" && H.push(se.author.toString()), ee.push({
                  row: s - 1,
                  col: N
                }), M += pe(
                  W,
                  se.commentStr,
                  se.commentStyl,
                  H.length
                );
              }
              const G = t.formula && t.formula[W];
              G ? (r += me(W, G).cell, delete t.formula[W]) : typeof D == "string" ? (r += '<c r="' + o[N] + s + '" t="s" ' + (E && e.styles && e.styles[E] ? 's="' + e.styles[E].index + '"' : "") + "><v>" + C + "</v></c>", "multiStyleValue" in d && d.multiStyleValue && I in d.multiStyleValue ? h += he(
                d.multiStyleValue[I],
                D,
                u.commentSintax.value
              ) : h += "<si><t>" + D + "</t></si>", P[D] = D, C++) : r += '<c r="' + o[N] + s + '" ' + (E && e.styles && e.styles[E] ? 's="' + e.styles[E].index + '"' : "") + "><v>" + D + "</v></c>";
            }
          }), q - 1 == re && Object.keys(J).forEach((I) => {
            J[I].inProgress && (t.merges ? t.merges.push(
              I + J[I].start + ":" + I + s
            ) : t.merges = [
              I + J[I].start + ":" + I + s
            ]);
          }), s++, r += "</row>";
        }), t.sortAndfilter && (t.sortAndfilter.mode == "all" ? V += '<autoFilter ref="A1:' + o[te - 1] + (s - 1) + '" />' : typeof t.sortAndfilter.ref == "string" && t.sortAndfilter.ref.length > 0 && (V += '<autoFilter ref="' + t.sortAndfilter.ref + '" />'));
      }
      if (ie.length > 0 && (t.formula || (t.formula = {}), ie.forEach((n) => {
        const y = t.headers[n];
        t.formula[o[n] + "" + s] = {
          start: t.withoutHeader ? o[n] + "1" : o[n] + "2",
          end: o[n] + "" + (s - 1),
          type: y.formula.type,
          ...y.formula.styleId ? { styleId: y.formula.styleId } : {}
        };
      })), t.formula) {
        const n = Object.keys(t.formula);
        if (n.length) {
          let y = {};
          n.forEach((R) => {
            const q = me(R, t.formula[R], e.styles);
            y[q.row] ? y[q.row] += q.cell : y[q.row] = q.cell;
          }), Object.keys(y).forEach((R) => {
            const q = y[R];
            r += '<row r="' + R + '" spans="1:' + te + '"  >' + q + "</row>";
          });
        }
      }
    }
    i > 0 && (x += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (i + 1) + '.xml" />');
    const de = t.name ? t.name : "sheet" + (i + 1), be = t.state ? t.state : "visible";
    w += '<sheet state="' + be + '" name="' + de + '" sheetId="' + (i + 1) + '" r:id="rId' + (F + 1) + '" />', b += '<Relationship Id="rId' + (F + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (i + 1) + '.xml" />', Z += "<vt:lpstr>" + ("sheet" + (i + 1)) + "</vt:lpstr>", U = U || !!t.selected;
    const ge = t.sortAndfilter ? 'filterMode="1"' : "";
    A["sheet" + (i + 1)] = {
      indexId: F + 1,
      key: "sheet" + (i + 1),
      sheetName: de,
      sheetDataString: r,
      hasComment: g,
      commentString: M,
      commentAuthor: H,
      shapeCommentRowCol: ee,
      sheetSizeString: O.length > 0 ? "<cols>" + O + "</cols>" : "",
      protectionOption: t.protectionOption ? Object.keys(t.protectionOption).reduce((X, K) => X + " " + K + '="' + t.protectionOption[K] + '" ', "<sheetProtection ") + "/>" : "",
      merges: t.merges ? t.merges.reduce((X, K) => X += ' <mergeCell ref="' + K + '" />', '<mergeCells count="' + t.merges.length + '">') + " </mergeCells>" : "",
      selectedView: t.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: V,
      tabColor: t.tabColor ? '<sheetPr codeName="' + ("Sheet" + (i + 1)) + '" ' + ge + ' ><tabColor rgb="' + t.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + ge + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, F++;
  }
  let _ = Object.keys(A);
  var T = m.folder("_rels");
  T == null || T.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  var L = m.folder("docProps");
  L == null || L.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), L == null || L.file("app.xml", Fe(p, Z)), a == null || a.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + w + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), a == null || a.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (C - 1) + '" uniqueCount="' + Object.keys(P).length + '"> ' + h + "</sst>"
  );
  var j = a == null ? void 0 : a.folder("_rels");
  j == null || j.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + b + " </Relationships>"
  );
  var k = a == null ? void 0 : a.folder("theme");
  k == null || k.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  var $ = a == null ? void 0 : a.folder("worksheets");
  let Q = [];
  const le = a == null ? void 0 : a.folder("drawings"), z = $ == null ? void 0 : $.folder("_rels");
  if (_.forEach((i, t) => {
    const s = A[i];
    if (s.hasComment) {
      Q.push(t + 1);
      let r = s.commentAuthor;
      a == null || a.file(
        `comments${t + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
	xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
     xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
	<authors>
        ${Array.isArray(r) && r.length > 0 ? r.reduce(
          (O, V) => O + "<author>" + V + "</author>",
          ""
        ) : "<author></author>"}
	</authors>
	<commentList>
		${s.commentString}
	</commentList>
</comments>`
      ), z == null || z.file(
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
      ), le == null || le.file(
        "vmlDrawing" + (t + 1) + ".vml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout><v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path gradientshapeok="t" o:connecttype="rect"/>
 </v:shapetype>${s.shapeCommentRowCol.reduce((O, V) => O + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;
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
   <x:Row>${V.row}</x:Row>
   <x:Column>${V.col}</x:Column>
  </x:ClientData>
 </v:shape>`, "")}
 </xml>`
      );
    }
    $ == null || $.file(
      s.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + s.tabColor + s.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + s.sheetSizeString + "<sheetData>" + s.sheetDataString + "</sheetData>" + s.protectionOption + s.sheetSortFilter + s.merges + (s.hasComment ? '<legacyDrawing r:id="rId3" />' : "") + "</worksheet>"
    );
  }), m.file(
    "[Content_Types].xml",
    Se(x, Q)
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
function Ie(e, l, o, c, f) {
  const m = Te(
    e,
    l,
    o,
    c,
    f
  );
  return $e(m);
}
export {
  Ie as convertTableToExcel,
  $e as generateExcel
};
