function Pe(e) {
  return e.replace(/ /g, "");
}
function ye(e) {
  e = Number(e);
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}
function Q(e) {
  e = Pe(e);
  let t = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), s = t.reduce((n, a) => n && !Number.isNaN(Number(a)), !0);
  return t.length == 4 && t[3] == "0" || !s ? null : (ye(t[0]) + ye(t[1]) + ye(t[2])).toUpperCase();
}
function ie(e, t) {
  if (typeof e > "u" || e === null)
    return null;
  if (!t) {
    let s = Pe(e);
    s.indexOf("var(") == 0 && s.lastIndexOf(")") == s.length - 1 && (s = s.substring(4, s.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      s
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const s = Q(e);
    e = s || "";
  }
  return e;
}
function Ee(e, t, s, n, a, m, i, C) {
  let w = [], g = "both", T = [];
  !t || t === 0 ? (t = 1, g = "col") : T.push(t - 1), !e || e === 0 ? (e = 0, g = "row") : T.push(e - 1);
  let _ = a || {};
  _.mergeType = C && C.mergeType ? [...C.mergeType, g] : [g], _.mergeValue = C && C.mergeValue ? [...C.mergeValue, T] : [T], _.mergeStart = C && C.mergeStart ? [...C.mergeStart, s] : [s];
  for (let D = 0; D < t; D++) {
    let v = e;
    for (let h = 0; h < n; h++)
      s <= h ? v >= 1 ? (_["c" + h] = m, m = "", i += "*", v--) : t >= 2 && s == h ? (_["c" + h] = m, m = "", i += "+") : i += "-" : D > 0 && (i += "-");
    w.push({
      ..._,
      mergeString: i
    }), _ = {}, i = "";
  }
  return w;
}
function Me(e, t, s, n, a) {
  var _;
  if (!e && !t)
    throw "Error: One of the function inputs is required.";
  let m;
  e ? m = (_ = document.querySelector(e)) == null ? void 0 : _.querySelectorAll("tr") : m = t == null ? void 0 : t.querySelectorAll("tr");
  let i = [], C = [], w = {
    header: {},
    rows: []
  }, g = 40;
  if (m) {
    let D = !1, v = 0;
    m.forEach((h, o) => {
      var F = [].slice.call(h.children);
      const P = window.getComputedStyle(h, null);
      let U = Q(P.backgroundColor);
      if (!D)
        v = F.length, D = !0, typeof n == "function" ? g = n(
          Number(P.height.substring(0, P.height.length - 2)),
          o,
          !0
        ) : g = Number(
          P.height.substring(0, P.height.length - 2)
        ), F.forEach((O, J) => {
          let b = window.getComputedStyle(O, null), L = null;
          b.borderBottomWidth !== "0px" && (L || (L = {}), L.bottom = {
            style: "thin",
            color: Q(b.borderBottomColor)
          }), b.borderTopWidth !== "0px" && (L || (L = {}), L.top = {
            style: "thin",
            color: Q(b.borderTopColor)
          }), b.borderLeftWidth !== "0px" && (L || (L = {}), L.left = {
            style: "thin",
            color: Q(b.borderLeftColor)
          }), b.borderRightWidth !== "0px" && (L || (L = {}), L.right = {
            style: "thin",
            color: Q(b.borderRightColor)
          });
          let V = Q(b.backgroundColor);
          !V && U && (V = U);
          let E = {
            ...V ? { fg: V } : {},
            bold: parseInt(b.fontWeight) > 500,
            size: parseInt(
              b.fontSize.substring(0, b.fontSize.indexOf("p"))
            ),
            ...L ? { border: L } : {},
            alignment: {
              horizontal: b.textAlign,
              vertical: "center",
              ...b.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          w.header[o + "-" + J] = E;
          let S;
          typeof a == "function" ? S = a(
            Number(b.width.substring(0, b.width.length - 2)),
            J
          ) : S = Number(b.width.substring(0, b.width.length - 2)) * 0.15, i.push({
            label: "c" + J,
            colspan: O.getAttribute("colspan"),
            rowspan: O.getAttribute("rowspan"),
            text: O.textContent,
            size: S
          });
        });
      else {
        let O = {}, J = "", b = !1;
        C.length >= o && (O = C[o - 1], J = "mergeString" in O ? O.mergeString : "", b = !0);
        let L = 0;
        F.forEach((V, E) => {
          if ("c" + (E + L) in O)
            for (let z = 0; z <= v + 1 && "c" + (E + z) in O; z++)
              L++;
          E += L;
          let S = window.getComputedStyle(V, null);
          if (V.getAttribute("colspan") || V.getAttribute("rowspan")) {
            let z = Ee(
              V.getAttribute("colspan") * 1,
              V.getAttribute("rowspan") * 1,
              E,
              v,
              O,
              V.textContent,
              J,
              O
            );
            C.length < o ? C.push(...z) : z.forEach((me, re) => {
              C.length < o + re ? C.push(...z) : C[o + re] = {
                ...C[o + re],
                ...me
              };
            }), O = z[0], J = z[0].mergeString, b = !0;
          } else
            b || (J += "-");
          let $ = null;
          S.borderBottomWidth !== "0px" && ($ || ($ = {}), $.bottom = {
            style: "thin",
            color: Q(S.borderBottomColor)
          }), S.borderTopWidth !== "0px" && ($ || ($ = {}), $.top = {
            style: "thin",
            color: Q(S.borderTopColor)
          }), S.borderLeftWidth !== "0px" && ($ || ($ = {}), $.left = {
            style: "thin",
            color: Q(S.borderLeftColor)
          }), S.borderRightWidth !== "0px" && ($ || ($ = {}), $.right = {
            style: "thin",
            color: Q(S.borderRightColor)
          });
          let N = Q(S.backgroundColor);
          !N && U && (N = U);
          let ee = {
            ...N ? { fg: N } : {},
            bold: parseInt(S.fontWeight) > 500,
            size: parseInt(
              S.fontSize.substring(0, S.fontSize.indexOf("p"))
            ),
            ...$ ? { border: $ } : {},
            // fg: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: S.textAlign,
              vertical: "center",
              direction: S.direction,
              ...S.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          w.header[o + "-" + E] = ee, O["c" + E] = V.textContent;
        }), typeof n == "function" ? O.height = n(
          Number(P.height.substring(0, P.height.length - 2)),
          o,
          !1
        ) : O.height = P.height.substring(0, P.height.length - 2), C.length < o ? C.push(O) : C[o - 1] = O;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: w.header,
    sheet: [
      {
        headerHeight: g,
        styleCellCondition: function(D, v, h, o, F, P) {
          return s ? P.includes(o - 1 + "-" + h) ? o - 1 + "-" + h : "" : null;
        },
        data: C,
        headers: i
      }
    ]
  };
}
function we(e, t, s = "", n = [], a = 0) {
  const m = e.length;
  for (let i = 0; i < m; i++)
    n.push(s + e[i]);
  return t < n.length ? n : we(
    e,
    t,
    n[a + 1],
    n,
    a + 1
  );
}
function je(e) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + ' <fonts count="' + e.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + e.font.value + ' </fonts> <fills count="' + e.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + e.fill.value + ' </fills> <borders count="' + e.border.count + '"> <border />' + e.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + e.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + e.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> <dxfs count="0" /></styleSheet>';
}
function Ne(e, t, s, n) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/> <Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /> <Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + s.reduce((a, m) => m == "svg" ? a + `<Default Extension="png" ContentType="image/png"/>
                    <Default Extension="svg" ContentType="image/svg+xml"/>` : m == "jpeg" || m == "jpg" ? a + `<Default Extension="${m}" ContentType="image/jpeg"/>` : a + `<Default Extension="${m}" ContentType="image/${m}" />`, "") + t.reduce((a, m) => a + `
    <Override PartName="/xl/comments${m}.xml"
        ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />`, "") + e + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" />' + n.reduce((a, m) => a + `<Override PartName="/xl/drawings/${m}"
        ContentType="application/vnd.openxmlformats-officedocument.drawing+xml" />`, "") + ' <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function qe(e, t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + e + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + e + '" baseType="lpstr"> ' + t + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function xe(e, t, s) {
  let n = e.replace(/[0-9]/g, ""), a = parseInt(e.substr(n.length)), m = '<c r="' + e + '" ' + (s && typeof t.styleId == "string" && s[t.styleId] ? 's="' + s[t.styleId].index + '" ' : "") + ">     <f>" + t.type + "(" + t.start + ":" + t.end + ")</f> </c>";
  return {
    column: n,
    row: a,
    cell: m
  };
}
function Ce(e, t, s) {
  let n = !1, a, m;
  if (typeof e == "object") {
    if ("author" in e && e.author && (n = !0, m = e.author), "styleId" in e && typeof e.styleId == "string") {
      let i = t[e.styleId];
      typeof i == "string" && (s = i);
    }
    a = "comment" in e && typeof e.comment == "string" ? Oe(e.comment) : [""];
  } else
    a = e ? Oe(e) : [""];
  return n && a.unshift(m + ":"), {
    hasAuthour: n,
    author: m,
    commentStyl: s,
    commentStr: a
  };
}
function Oe(e) {
  var t = e.split(/\r?\n|\r|\n/g);
  return t;
}
function be(e, t, s, n) {
  let a = `<comment ref="${e}" authorId="${Math.max(
    0,
    n - 1
  )}" shapeId="0">
            <text>`, m = "";
  return t.forEach((i, C) => {
    let w = "";
    if (i.length == 0) {
      m += `
`;
      return;
    }
    C > 0 && (w = 'xml:space="preserve"', m += `
`), a += "<r>" + s + "<t " + w + " >" + m + i + "</t></r>", m = "";
  }), a += "</text></comment>", a;
}
const Be = `<rPr>
                        <b />
                        <sz val="9" />
                        <color rgb="000000" />
                        <rFont val="Tahoma" />
                    </rPr>
            `;
function pe(e, t) {
  let s = {
    result: [],
    str: t
  }, n = e.reduce((a, m) => {
    let i = a.str.indexOf(m);
    return a.result.push(a.str.substring(0, i)), a.str = a.str.substring(i + m.length), a;
  }, s);
  return n.result.push(n.str), n.result;
}
function Ae(e, t, s, n, a, m, i, C, w) {
  if (n) {
    let g = [], T = [], _ = [];
    const D = m.length;
    a.forEach((v, h) => {
      let o;
      try {
        o = v.match(e);
      } catch (F) {
        if (typeof e == "string")
          o = v.match("\\" + e);
        else
          throw F;
      }
      if (o)
        if (C) {
          let F;
          w ? F = pe(o, v) : F = v.split(e), g.push(...F), T.push(...o), _.push(
            ...o.reduce((P, U) => [...P, t], [])
          );
        } else {
          let F;
          w ? F = pe(o, v) : F = v.split(e).reduce((P, U, O) => O >= 2 ? (P[1] += e + U, P) : [...P, U], []), g.push(...F), _.push(t), T.push(e.toString());
        }
      else
        g.push(v);
      D > h && (T.push(m[h]), _.push(i[h]));
    }), a = g, m = T, i = _;
  } else {
    let g;
    try {
      g = s.match(e);
    } catch (T) {
      if (typeof e == "string")
        g = s.match("\\" + e);
      else
        throw T;
    }
    g ? C ? (m.push(...g), i.push(
      ...g.reduce((T, _) => [...T, t], [])
    ), w ? a = pe(g, s) : a = s.split(e)) : (m.push(e.toString()), i.push(t), w ? a = pe(g, s) : a = s.split(e).reduce((T, _, D) => D >= 2 ? (T[1] += e + _, T) : [...T, _], [])) : a.push(s), n = !0;
  }
  return {
    v: e,
    text: s,
    textSplited: n,
    splitValue: a,
    matchValue: m,
    styleMatchValue: i
  };
}
function ve(e, t, s, n, a) {
  if (typeof e == "object") {
    let m = "", i = [], C = [], w = [], g = !1;
    if (Object.keys(e).forEach((v) => {
      const h = e[v];
      if (v !== "reg") {
        let o = Ae(
          v,
          typeof h == "string" ? h : "",
          t,
          g,
          w,
          i,
          C,
          !1,
          a
        );
        g = o.textSplited, w = o.splitValue, i = o.matchValue, C = o.styleMatchValue;
      }
    }), "reg" in e && Array.isArray(e.reg)) {
      const v = e.reg.length;
      for (let h = 0; h < v; h++) {
        const o = e.reg[h];
        if ("reg" in o && "styleId" in o) {
          typeof o.reg == "string" && (o.reg = new RegExp(o.reg, "g"));
          let F = Ae(
            o.reg,
            o.styleId,
            t,
            g,
            w,
            i,
            C,
            !0,
            a
          );
          g = F.textSplited, w = F.splitValue, i = F.matchValue, C = F.styleMatchValue;
        }
      }
    }
    const _ = w.length - 1, D = n in s ? s[n] : "";
    for (let v = 0; v < _; v++) {
      const h = w[v], o = i[v], F = C[v];
      h.length > 0 && (m += `<r>
        ${D}
            <t xml:space="preserve" >${h}</t>
        </r>`), o.length > 0 && (m += `
                            <r>
           ${s[F]}
            <t xml:space="preserve" >${o}</t>
        </r>
                    `);
    }
    return w[_].length > 0 ? m = `<si>
                    ${m}
                    <r>
        ${D}
            <t>${w[_]}</t>
        </r>
                    </si>` : m = `<si>
                    ${m}
                    </si>`, m;
  } else
    return `
<si>
    <t>${t}</t>
</si>
`;
}
const ze = {
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
}, He = [
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
], Ue = (e, t) => fetch(e).then((s) => (console.log(s), s.blob())).then((s) => new File([s], t)).catch((s) => {
  console.error(s);
});
function De(e, t) {
  let s = e.replace(/[0-9]/g, ""), n = parseInt(e.substring(s.length));
  isNaN(n) && (n = 0), n = Math.max(0, n - 1);
  let a = t.indexOf(s);
  return a < 0 && (t = we(t, Math.pow(10, s.length + 1), ""), a = t.indexOf(s), a < 0 && (a = 0)), {
    col: a,
    row: n
  };
}
async function Ve(e) {
  let t = [...He];
  e.numberOfColumn && e.numberOfColumn > 25 && (t = we(t, e.numberOfColumn));
  const n = (await import("./jszip.min-e651e8fb.mjs").then((u) => u.j)).default;
  let a = new n();
  const m = e.sheet.length;
  let i = a.folder("xl"), C = i == null ? void 0 : i.folder("media"), w = i == null ? void 0 : i.folder("drawings"), g = w == null ? void 0 : w.folder("_rels");
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const T = Object.keys(e.styles), _ = Be;
  let D = T.reduce(
    (u, l, c) => {
      const f = e.styles[l], R = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (f.fg) {
        let q = ie(f.fg, e.backend);
        R.fillIndex = u.fill.count, u.fill.count++, u.fill.value = u.fill.value + '<fill><patternFill patternType="solid">' + (q ? '<fgColor rgb="' + q.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (f.fontColor || f.fontFamily || f.size || f.bold || f.italic || f.underline || f.doubleUnderline) {
        const q = ie(f.fontColor, e.backend);
        R.fontIndex = u.font.count, u.font.count++, u.font.value = u.font.value + "<font>" + (f.bold ? "<b/>" : "") + (f.italic ? "<i />" : "") + `${f.underline || f.doubleUnderline ? `<u ${f.doubleUnderline ? ' val="double" ' : ""}/>` : ""}` + (f.size ? '<sz val="' + f.size + '" />' : "") + (q ? '<color rgb="' + q.replace("#", "") + '" />' : "") + (f.fontFamily ? '<name val="' + f.fontFamily + '" />' : "") + "</font>", u.commentSintax.value[l] = `<rPr>
            ${f.bold ? "<b/>" : ""}
            ${f.italic ? "<i />" : ""}
            ${f.underline || f.doubleUnderline ? `<u ${f.doubleUnderline ? ' val="double" ' : ""}/>` : ""}
            <sz val="${f.size ? `${f.size}` : "9"}" />
            ${q ? `<color rgb="${q.replace("#", "")}" />` : ""}
            <rFont val="${f.fontFamily ? `${f.fontFamily}` : "Tahoma"}" />
        </rPr>
        `;
      }
      let oe = "/>";
      f.alignment && (f.alignment.rtl && (f.alignment.readingOrder = 2), delete f.alignment.rtl, f.alignment.ltr && (f.alignment.readingOrder = 1), delete f.alignment.ltr, oe = ' applyAlignment="1"><alignment ' + Object.keys(f.alignment).reduce((q, Z) => q + " " + Z + '="' + f.alignment[Z] + '" ', "") + " /></xf>");
      const y = f.border;
      let X = "";
      if (typeof y == "object" && ((y.left || y.full) && (X += '<left style="' + (y.left || y.full).style + '"><color rgb="' + ie(
        (y.left || y.full).color,
        e.backend
      ).replace("#", "") + '" /></left>'), (y.right || y.full) && (X += '<right style="' + (y.right || y.full).style + '"><color rgb="' + ie(
        (y.right || y.full).color,
        e.backend
      ).replace("#", "") + '" /></right>'), (y.top || y.full) && (X += '<top style="' + (y.top || y.full).style + '"><color rgb="' + ie(
        (y.top || y.full).color,
        e.backend
      ).replace("#", "") + '" /></top>'), (y.bottom || y.full) && (X += '<bottom style="' + (y.bottom || y.full).style + '"><color rgb="' + ie(
        (y.bottom || y.full).color,
        e.backend
      ).replace("#", "") + '" /></bottom>'), R.borderIndex = u.border.count, u.border.count++, u.border.value += "<border>" + X + "<diagonal /></border>"), f.format) {
        const q = ze[f.format];
        q && (R.formatIndex = q.key, "value" in q && (u.format.count++, u.format.value += q.value));
      }
      return u.cell.value = u.cell.value + '<xf numFmtId="' + R.formatIndex + '" fontId="' + R.fontIndex + '" fillId="' + R.fillIndex + '" borderId="' + R.borderIndex + '" xfId="0"' + (R.borderIndex > 0 ? ' applyBorder="1" ' : "") + (R.fillIndex > 0 ? ' applyFill="1" ' : "") + (R.fontIndex >= 0 ? ' applyFont="1" ' : "") + (R.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + oe, e.styles[l].index = u.cell.count, u.cell.count++, u;
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
  i == null || i.file("styles.xml", je(D));
  let v = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />', h = "", o = 0, F = "", P = "", U = {};
  const O = {};
  let J = "", b = 4, L = !1, V = [];
  for (let u = 0; u < m; u++) {
    const l = e.sheet[u];
    let c = l.shiftTop ? l.shiftTop : 1, f = "", R = "", oe = "", y = Object.assign([], l.merges), X = Object.assign({}, l.formula), q = !1, Z = [], ce = "", fe = [], Se = [], de = [], ae = {}, ue;
    l.images && (ue = Promise.all([
      ...l.images.map(async (W, H) => {
        let Y = W.url.lastIndexOf("."), r;
        return Y > 0 ? (r = W.url.substring(Y + 1).toLowerCase(), r.length > 4 && (r.indexOf("gif") >= 0 ? r = "gif" : r.indexOf("jpg") >= 0 ? r = "jpg" : r.indexOf("jpeg") >= 0 ? r = "jpeg" : r = "png")) : r = "png", V.push(r), {
          type: r,
          image: await Ue(W.url, "image" + H + "." + r),
          obj: W,
          i: H
        };
      })
    ]));
    const se = l.headers.length;
    if (Array.isArray(l.headers) && se) {
      let W = "";
      if (l.title) {
        const r = l.title, x = r.comment, j = r.shiftTop ? r.shiftTop : 0, B = l.shiftLeft ? l.shiftLeft : 0, p = r.shiftLeft ? r.shiftLeft + B : B, A = r.consommeRow ? r.consommeRow - 1 : 1, le = r.consommeCol ? r.consommeCol : se, I = A == 0 && typeof r.height == "number" ? ' ht="' + r.height + '" customHeight="1" ' : "", M = r.styleId ? r.styleId : "titleStyle", d = t[p] + "" + (c + j);
        if (y.push(
          d + ":" + t[p + le - 1] + (c + A + j)
        ), typeof x < "u") {
          q = !0;
          const k = Ce(
            x,
            D.commentSintax.value,
            _
          );
          let K = Z.length;
          if (k.hasAuthour && typeof k.author < "u") {
            let te = k.author.toString();
            const G = Z.indexOf(te);
            G < 0 ? Z.push(te) : K = G;
          }
          fe.push({
            row: c + j - 1,
            col: p
          }), ce += be(
            d,
            k.commentStr,
            k.commentStyl,
            K
          );
        }
        typeof r.text == "string" && (W += '<row r="' + (c + j) + '" ' + I + ' spans="1:' + (p + le - 1) + '">', W += '<c r="' + d + '" ' + (e.styles[M] ? ' s="' + e.styles[M].index + '" ' : "") + ' t="s"><v>' + o + "</v></c>", W += "</row>", o++, U[r.text] = r.text, r.multiStyleValue ? h += ve(
          r.multiStyleValue,
          r.text,
          D.commentSintax.value,
          M,
          l.useSplitBaseOnMatch
        ) : h += "<si><t>" + r.text + "</t></si>"), c += j + A + 1;
      }
      let H = l.headerStyleKey ? l.headerStyleKey : null, Y = 0;
      if (typeof l.shiftLeft == "number" && (Y = l.shiftLeft), l.headers.forEach((r, x) => {
        if (Y && (x += Y), r.formula && de.push(x), Se.push(r.label), l.mergeRowDataCondition && typeof l.mergeRowDataCondition == "function" && l.mergeRowDataCondition(
          r,
          null,
          x,
          !0
        ) === !0 && (ae[t[x]] = {
          inProgress: !0,
          start: c
        }), l.styleCellCondition && typeof l.styleCellCondition == "function" && (H = l.styleCellCondition(
          r,
          r,
          x,
          c,
          !0,
          T
        ) || H), r.size && r.size > 0 && (R += '<col min="' + (x + 1) + '" max="' + (x + 1) + '" width="' + r.size + '" customWidth="1" />'), l.withoutHeader)
          return;
        const j = t[x] + "" + c;
        if (typeof l.commentCodition == "function") {
          const p = l.commentCodition(
            r,
            null,
            r.label,
            c,
            x,
            !0
          );
          p && (r.comment = p);
        }
        if (r.comment) {
          q = !0;
          const p = Ce(
            r.comment,
            D.commentSintax.value,
            _
          );
          let A = Z.length;
          if (p.hasAuthour && typeof p.author < "u") {
            let le = p.author.toString();
            const I = Z.indexOf(le);
            I < 0 ? Z.push(le) : A = I;
          }
          fe.push({
            row: c - 1,
            col: x
          }), ce += be(
            j,
            p.commentStr,
            p.commentStyl,
            A
          );
        }
        const B = X && X[j];
        if (B)
          f += xe(
            j,
            B,
            e.styles
          ).cell, delete X[j];
        else {
          if (f += '<c r="' + t[x] + c + '" ' + (H && e.styles && e.styles[H] ? ' s="' + e.styles[H].index + '" ' : "") + ' t="s"><v>' + o + "</v></c>", typeof l.multiStyleConditin == "function") {
            const p = l.multiStyleConditin(
              r,
              null,
              r.label,
              c,
              x,
              !0
            );
            p && (r.multiStyleValue = p);
          }
          r.multiStyleValue ? h += ve(
            r.multiStyleValue,
            r.text,
            D.commentSintax.value,
            H || "",
            l.useSplitBaseOnMatch
          ) : h += "<si><t>" + r.text + "</t></si>", U[r.text] = r.text, o++;
        }
      }), l.withoutHeader ? f += W : (f = W + '<row r="' + c + '" spans="1:' + se + '" ' + (l.headerHeight ? 'ht="' + l.headerHeight + '" customHeight="1"' : "") + (l.headerRowOption ? Object.keys(l.headerRowOption).reduce((r, x) => r + " " + x + '="' + l.headerRowOption[x] + '" ', "  ") : "") + ">" + f + "</row>", c++), Array.isArray(l.data)) {
        const r = e.mapSheetDataOption && e.mapSheetDataOption.outlineLevel ? e.mapSheetDataOption.outlineLevel : "outlineLevel", x = e.mapSheetDataOption && e.mapSheetDataOption.hidden ? e.mapSheetDataOption.hidden : "hidden", j = e.mapSheetDataOption && e.mapSheetDataOption.height ? e.mapSheetDataOption.height : "height", B = l.data.length;
        l.data.forEach((p, A) => {
          if (p.mergeType)
            for (let I = 0; I < p.mergeType.length; I++) {
              const M = p.mergeType[I], d = p.mergeStart[I], k = p.mergeValue[u];
              let K = "";
              M == "both" ? K = t[d] + "" + c + ":" + t[d + k[1]] + (c + k[0]) : M == "col" ? K = t[d] + "" + c + ":" + t[d + k[0]] + c : K = t[d] + "" + c + ":" + t[d] + (c + k[0]), y.push(K);
            }
          const le = p.rowStyle;
          f += '<row r="' + c + '" spans="1:' + se + '" ' + (j in p ? 'ht="' + p[j] + '" customHeight="1"' : "") + (r in p ? ' outlineLevel="' + p[r] + '"' : "") + (x in p ? ' hidden="' + p[x] + '"' : "") + " >", Se.forEach((I, M) => {
            Y && (M += Y);
            const d = p[I];
            let k = le;
            if (l.styleCellCondition && typeof l.styleCellCondition == "function" && (k = l.styleCellCondition(
              d,
              p,
              M,
              c,
              !1,
              T
            ) || le), l.mergeRowDataCondition && typeof l.mergeRowDataCondition == "function") {
              let K = l.mergeRowDataCondition(
                d,
                I,
                M,
                !1
              );
              const te = t[M];
              let G = ae[te];
              K === !0 ? (!G || G && !G.inProgress) && (ae[te] = {
                inProgress: !0,
                start: c
              }) : G && G.inProgress && (y.push(
                te + G.start + ":" + te + (c - 1)
              ), ae[te] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof d < "u") {
              const K = t[M] + "" + c;
              if (typeof l.commentCodition == "function") {
                const G = l.commentCodition(
                  d,
                  p,
                  I,
                  c,
                  M,
                  !1
                );
                G && (typeof p.comment != "object" && (p.comment = {}), p.comment[I] = G);
              }
              if (typeof p.comment == "object" && I in p.comment) {
                const G = p.comment[I];
                q = !0;
                const ne = Ce(
                  G,
                  D.commentSintax.value,
                  _
                );
                ne.hasAuthour && typeof ne.author < "u" && Z.push(ne.author.toString()), fe.push({
                  row: c - 1,
                  col: M
                });
                let Fe = Z.length;
                if (ne.hasAuthour && typeof ne.author < "u") {
                  let ke = ne.author.toString();
                  const Ie = Z.indexOf(ke);
                  Ie < 0 ? Z.push(ke) : Fe = Ie;
                }
                ce += be(
                  K,
                  ne.commentStr,
                  ne.commentStyl,
                  Fe
                );
              }
              const te = X && X[K];
              if (te)
                f += xe(K, te).cell, delete X[K];
              else if (typeof d == "string") {
                if (f += '<c r="' + t[M] + c + '" t="s" ' + (k && e.styles && e.styles[k] ? 's="' + e.styles[k].index + '"' : "") + "><v>" + o + "</v></c>", typeof l.multiStyleConditin == "function") {
                  const G = l.multiStyleConditin(
                    d,
                    p,
                    I,
                    c,
                    M,
                    !1
                  );
                  G && ((!("multiStyleValue" in p) || typeof p.multiStyleValue > "u") && (p.multiStyleValue = {}), p.multiStyleValue[I] = G);
                }
                "multiStyleValue" in p && p.multiStyleValue && I in p.multiStyleValue ? h += ve(
                  p.multiStyleValue[I],
                  d,
                  D.commentSintax.value,
                  k || "",
                  l.useSplitBaseOnMatch
                ) : h += "<si><t>" + d + "</t></si>", U[d] = d, o++;
              } else
                f += '<c r="' + t[M] + c + '" ' + (k && e.styles && e.styles[k] ? 's="' + e.styles[k].index + '"' : "") + "><v>" + d + "</v></c>";
            }
          }), B - 1 == A && Object.keys(ae).forEach((I) => {
            ae[I].inProgress && y.push(
              I + ae[I].start + ":" + I + c
            );
          }), c++, f += "</row>";
        }), l.sortAndfilter && (l.sortAndfilter.mode == "all" ? oe += '<autoFilter ref="A1:' + t[se - 1] + (c - 1) + '" />' : typeof l.sortAndfilter.ref == "string" && l.sortAndfilter.ref.length > 0 && (oe += '<autoFilter ref="' + l.sortAndfilter.ref + '" />'));
      }
      if (de.length > 0 && de.forEach((r) => {
        const x = l.headers[r];
        X[t[r] + "" + c] = {
          start: l.withoutHeader ? t[r] + "1" : t[r] + "2",
          end: t[r] + "" + (c - 1),
          type: x.formula.type,
          ...x.formula.styleId ? { styleId: x.formula.styleId } : {}
        };
      }), X) {
        const r = Object.keys(X);
        if (r.length) {
          let x = {};
          r.forEach((j) => {
            const B = xe(j, X[j], e.styles);
            x[B.row] ? x[B.row] += B.cell : x[B.row] = B.cell;
          }), Object.keys(x).forEach((j) => {
            const B = x[j];
            f += '<row r="' + j + '" spans="1:' + se + '"  >' + B + "</row>";
          });
        }
      }
    }
    u > 0 && (v += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (u + 1) + '.xml" />');
    const _e = l.name ? l.name : "sheet" + (u + 1), Le = l.state ? l.state : "visible";
    F += '<sheet state="' + Le + '" name="' + _e + '" sheetId="' + (u + 1) + '" r:id="rId' + (b + 1) + '" />', P += '<Relationship Id="rId' + (b + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (u + 1) + '.xml" />', J += "<vt:lpstr>" + ("sheet" + (u + 1)) + "</vt:lpstr>", L = L || !!l.selected;
    const $e = l.sortAndfilter ? 'filterMode="1"' : "";
    let Te = !1, ge = "";
    ue && (Te = !0, await ue.then((W) => {
      console.log(W, "res");
      let H = "";
      W.forEach((Y, r) => {
        const x = r + 1;
        var j = Y.image, B = Y.obj.from, p = Y.obj.to, A = Y.obj.margin, le = Y.type, I = Y.obj.type, M = Y.obj.extent;
        typeof M > "u" && (M = {
          cx: 2e5,
          cy: 2e5
        });
        var d = {
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
        if (typeof B == "string" && B.length >= 2) {
          var k = De(B, t);
          d.start = {
            ...k
          }, d.end = {
            col: k.col + 1,
            row: k.row + 1
          };
        }
        if (typeof p == "string" && p.length >= 2) {
          var k = De(p, t);
          k.row += 1, k.col += 1, d.end = {
            ...k
          };
        }
        d.end.mR = 0, d.end.mB = 0, d.start.mL = 0, d.start.mT = 0, A && ((A.all || A.right) && (d.end.mR = A.all || A.right), (A.all || A.bottom) && (d.end.mB = A.all || A.bottom), (A.all || A.left) && (d.start.mL = A.all || A.left), (A.all || A.top) && (d.start.mT = A.all || A.top)), I == "one" ? ge += `<xdr:oneCellAnchor>
        <xdr:from>
            <xdr:col>${d.start.col}</xdr:col>
            <xdr:colOff>${d.start.mT}</xdr:colOff>
            <xdr:row>${d.start.row}</xdr:row>
            <xdr:rowOff>${d.start.mL}</xdr:rowOff>
        </xdr:from>
        <xdr:ext cx="${M.cx}" cy="${M.cy}"/>
        <xdr:pic>
            <xdr:nvPicPr>
                <xdr:cNvPr id="${x}" name="Picture ${x}">
                </xdr:cNvPr>
                <xdr:cNvPicPr preferRelativeResize="0" />
            </xdr:nvPicPr>
            <xdr:blipFill>
                <a:blip
                    xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
                    r:embed="rId${x}">
                </a:blip>
                <a:stretch>
                    <a:fillRect />
                </a:stretch>
            </xdr:blipFill>
            <xdr:spPr>
                <a:prstGeom prst="rect">
                    <a:avLst />
                </a:prstGeom>
                <a:noFill />
            </xdr:spPr>
        </xdr:pic>
        <xdr:clientData />
    </xdr:oneCellAnchor>` : ge += `<xdr:twoCellAnchor editAs="oneCell">
        <xdr:from>
            <xdr:col>${d.start.col}</xdr:col>
            <xdr:colOff>${d.start.mT}</xdr:colOff>
            <xdr:row>${d.start.row}</xdr:row>
            <xdr:rowOff>${d.start.mL}</xdr:rowOff>
        </xdr:from>
        <xdr:to>
            <xdr:col>${d.end.col}</xdr:col>
            <xdr:colOff>${d.end.mB}</xdr:colOff>
            <xdr:row>${d.end.row}</xdr:row>
            <xdr:rowOff>${d.end.mR}</xdr:rowOff>
        </xdr:to>
        <xdr:pic>
            <xdr:nvPicPr>
                <xdr:cNvPr id="${x}" name="Picture ${x}">
                </xdr:cNvPr>
                <xdr:cNvPicPr preferRelativeResize="0" />
            </xdr:nvPicPr>
            <xdr:blipFill>
                <a:blip
                    xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
                    r:embed="rId${x}">
                </a:blip>
                <a:stretch>
                    <a:fillRect />
                </a:stretch>
            </xdr:blipFill>
            <xdr:spPr> 
                <a:prstGeom prst="rect">
                    <a:avLst />
                </a:prstGeom>
                <a:noFill />
            </xdr:spPr>
        </xdr:pic>
        <xdr:clientData />
    </xdr:twoCellAnchor>`;
        const K = "image" + x + "." + le;
        C == null || C.file(K, j), H += `<Relationship Id="rId${x}"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image"
        Target="../media/${K}" />`;
      }), g == null || g.file(
        "drawing1.xml.rels",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    ${H}
</Relationships>`
      );
    })), y = [...new Set(y)], O["sheet" + (u + 1)] = {
      indexId: b + 1,
      key: "sheet" + (u + 1),
      sheetName: _e,
      sheetDataString: f,
      hasComment: q,
      drawersContent: ge,
      hasImages: Te,
      commentString: ce,
      commentAuthor: Z,
      shapeCommentRowCol: fe,
      sheetSizeString: R.length > 0 ? "<cols>" + R + "</cols>" : "",
      protectionOption: l.protectionOption ? Object.keys(l.protectionOption).reduce((W, H) => W + " " + H + '="' + l.protectionOption[H] + '" ', "<sheetProtection ") + "/>" : "",
      merges: y.length > 0 ? y.reduce((W, H) => W + ' <mergeCell ref="' + H + '" />', '<mergeCells count="' + y.length + '">') + " </mergeCells>" : "",
      selectedView: l.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: oe,
      tabColor: l.tabColor ? '<sheetPr codeName="' + ("Sheet" + (u + 1)) + '" ' + $e + ' ><tabColor rgb="' + l.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + $e + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, b++;
  }
  let E = Object.keys(O), S = a.folder("_rels");
  S == null || S.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  let $ = a.folder("docProps");
  $ == null || $.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), $ == null || $.file("app.xml", qe(m, J)), i == null || i.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + F + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), i == null || i.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (o - 1) + '" uniqueCount="' + Object.keys(U).length + '"> ' + h + "</sst>"
  );
  let N = i == null ? void 0 : i.folder("_rels");
  N == null || N.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + P + " </Relationships>"
  );
  let ee = i == null ? void 0 : i.folder("theme");
  ee == null || ee.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  let z = i == null ? void 0 : i.folder("worksheets"), me = [];
  const re = z == null ? void 0 : z.folder("_rels");
  let he = [];
  if (E.forEach((u, l) => {
    const c = O[u];
    let f = "";
    if (c.hasImages) {
      const R = `drawing${he.length + 1}.xml`;
      he.push(R), w == null || w.file(
        R,
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
${c.drawersContent}
</xdr:wsDr>`
      ), f += `<Relationship Id="rId2"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"
        Target="../drawings/${R}" />`;
    }
    if (c.hasComment) {
      me.push(l + 1);
      let R = c.commentAuthor;
      i == null || i.file(
        `comments${l + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
	xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
     xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
	<authors>
        ${Array.isArray(R) && R.length > 0 ? R.reduce(
          (oe, y) => oe + "<author>" + y + "</author>",
          ""
        ) : "<author></author>"}
	</authors>
	<commentList>
		${c.commentString}
	</commentList>
</comments>`
      ), f += `  <Relationship Id="rId1"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
        Target="../comments${l + 1}.xml" />
    <Relationship Id="rId3"
        Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing"
        Target="../drawings/vmlDrawing${l + 1}.vml" />`, w == null || w.file(
        "vmlDrawing" + (l + 1) + ".vml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout><v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path gradientshapeok="t" o:connecttype="rect"/>
 </v:shapetype>${c.shapeCommentRowCol.reduce((oe, y) => oe + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;
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
   <x:Row>${y.row}</x:Row>
   <x:Column>${y.col}</x:Column>
  </x:ClientData>
 </v:shape>`, "")}
 </xml>`
      );
    }
    (c.hasImages || c.hasComment) && (re == null || re.file(
      "sheet" + (l + 1) + ".xml.rels",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
   ${f}
</Relationships>`
    )), z == null || z.file(
      c.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + c.tabColor + c.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + c.sheetSizeString + "<sheetData>" + c.sheetDataString + "</sheetData>" + c.protectionOption + c.sheetSortFilter + c.merges + (c.hasImages ? '<drawing r:id="rId2" />' : "") + (c.hasComment ? '<legacyDrawing r:id="rId3" />' : "") + "</worksheet>"
    );
  }), a.file(
    "[Content_Types].xml",
    Ne(
      v,
      me,
      [...new Set(V)],
      he
    )
  ), e.backend)
    return a.generateAsync({
      type: e.generateType ? e.generateType : "nodebuffer"
    }).then((u) => u);
  if (e.notSave)
    return a.generateAsync({ type: "blob" }).then((u) => u.slice(
      0,
      u.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  a.generateAsync({ type: "blob" }).then(function(u) {
    import("./FileSaver.min-3b84b3f2.mjs").then((l) => l.F).then((l) => {
      const { saveAs: c } = l;
      c(
        u,
        (e.fileName ? e.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function We(e) {
  const t = e.length;
  let s = 0, n = {}, a = {}, m = {};
  for (let g = 0; g < t; g++) {
    const T = e[g], _ = T.length;
    let D = {};
    for (let v = 0; v < _; v++) {
      s++;
      const h = T[v];
      let o;
      h.sheetName ? o = h.sheetName : o = "Sheet 1", o in n || (n[o] = {
        headers: [],
        data: [],
        labelConter: 0,
        seenAt: g
      }), o in a || (a[o] = {
        index: g,
        value: 0
      }), o in m || (n[o].labelConter = 0, m[o] = !0);
      let F = [];
      const P = n[o].headers.length;
      let U = {}, O = n[o].seenAt == g, J = h.headers.reduce((E, S, $) => (n[o].labelConter++, P < n[o].labelConter && F.push({
        label: "c" + n[o].labelConter,
        text: O ? S.text : ""
      }), U["c" + n[o].labelConter] = S.text, {
        ...E,
        [S.label]: "c" + n[o].labelConter
      }), {});
      if (n[o].headers.push(...F), h.spaceX)
        for (let E = 0; E < h.spaceX; E++)
          n[o].labelConter++, P <= n[o].labelConter && n[o].headers.push({
            label: "c" + n[o].labelConter,
            text: ""
          });
      a[o].index + 1 == g && (D[o] = a[o].value);
      let b = D[o] || 0;
      b > 0 && (!n[o].headerIndex || n[o].headerIndex && n[o].headerIndex != b ? n[o].data.push(U) : n[o].data[b] = {
        ...n[o].data[b],
        ...U
      }, n[o].headerIndex = b, b++);
      let L = Object.keys(J), V = h.data.length >= n[o].data.length;
      if (n[o].data = h.data.reduce((E, S, $) => {
        let N = {};
        return E.length > $ + b ? N = E[$ + b] : E.push(N), L.forEach((ee) => {
          let z = J[ee];
          N[z] = S[ee] ? S[ee] : "";
        }), N.tableIndex = s, N.tableStringIndex = $ + "," + v, E[$ + b] = N, E;
      }, n[o].data), V && h.spaceY) {
        const E = n[o].headers.length;
        for (let S = 0; S < h.spaceY; S++) {
          let $ = {};
          for (let N = 0; N < E; N++) {
            const ee = n[o].headers[N];
            $[ee.label] = "";
          }
          n[o].data.push($);
        }
      }
      a[o] = {
        value: Math.max(n[o].data.length, a[o].value),
        index: g
      };
    }
    m = {};
  }
  let i = Object.keys(n), C = [];
  return i.reduce(
    (g, T) => {
      let _ = n[T];
      return g.sheet.push({
        ..._,
        name: T
      }), g;
    },
    { sheet: C }
  );
}
const Re = Ve;
function Ke(e, t, s, n, a) {
  const m = Me(
    e,
    t,
    s,
    n,
    a
  );
  return Re(m);
}
function Ge(e) {
  const t = We(e);
  return Re(t);
}
export {
  Ke as convertTableToExcel,
  Re as generateExcel,
  Ge as sideBySideLineByLine
};
