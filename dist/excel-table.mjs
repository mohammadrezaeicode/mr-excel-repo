function Fe(e, o, i = "", h = [], m = 0) {
  const p = e.length;
  for (let l = 0; l < p; l++)
    h.push(i + e[l]);
  return o < h.length ? h : Fe(
    e,
    o,
    h[m + 1],
    h,
    m + 1
  );
}
function we(e) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + ' <fonts count="' + e.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + e.font.value + ' </fonts> <fills count="' + e.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + e.fill.value + ' </fills> <borders count="' + e.border.count + '"> <border />' + e.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + e.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + e.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> <dxfs count="0" /></styleSheet>';
}
function $e(e, o) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/> <Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing" /> <Default Extension="xml" ContentType="application/xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" />` + o.reduce((i, h) => i + `
    <Override PartName="/xl/comments${h}.xml"
        ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml" />`, "") + e + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" /> <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function Ie(e, o) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + e + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + e + '" baseType="lpstr"> ' + o + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function fe(e, o, i) {
  let h = e.replace(/[0-9]/g, ""), m = parseInt(e.substr(h.length)), p = '<c r="' + e + '" ' + (i && typeof o.styleId == "string" && i[o.styleId] ? 's="' + i[o.styleId].index + '" ' : "") + ">     <f>" + o.type + "(" + o.start + ":" + o.end + ")</f> </c>";
  return {
    column: h,
    row: m,
    cell: p
  };
}
function ke(e) {
  return e.replace(/ /g, "");
}
function pe(e) {
  e = Number(e);
  var o = e.toString(16);
  return o.length == 1 ? "0" + o : o;
}
function K(e) {
  e = ke(e);
  let o = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), i = o.reduce((h, m) => h && !Number.isNaN(Number(m)), !0);
  return o.length == 4 && o[3] == "0" || !i ? null : (pe(o[0]) + pe(o[1]) + pe(o[2])).toUpperCase();
}
function ne(e, o) {
  if (typeof e > "u" || e === null)
    return null;
  if (!o) {
    let i = ke(e);
    i.indexOf("var(") == 0 && i.lastIndexOf(")") == i.length - 1 && (i = i.substring(4, i.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      i
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const i = K(e);
    e = i || "";
  }
  return e;
}
function Ae(e, o, i, h, m, p, l, u) {
  let b = [], g = "both", $ = [];
  !o || o === 0 ? (o = 1, g = "col") : $.push(o - 1), !e || e === 0 ? (e = 0, g = "row") : $.push(e - 1);
  let y = m || {};
  y.mergeType = u && u.mergeType ? [...u.mergeType, g] : [g], y.mergeValue = u && u.mergeValue ? [...u.mergeValue, $] : [$], y.mergeStart = u && u.mergeStart ? [...u.mergeStart, i] : [i];
  for (let I = 0; I < o; I++) {
    let v = e;
    for (let x = 0; x < h; x++)
      i <= x ? v >= 1 ? (y["c" + x] = p, p = "", l += "*", v--) : o >= 2 && i == x ? (y["c" + x] = p, p = "", l += "+") : l += "-" : I > 0 && (l += "-");
    b.push({
      ...y,
      mergeString: l
    }), y = {}, l = "";
  }
  return b;
}
function Oe(e, o, i, h, m) {
  var y;
  if (!e && !o)
    throw "Error: One of the function inputs is required.";
  let p;
  e ? p = (y = document.querySelector(e)) == null ? void 0 : y.querySelectorAll("tr") : p = o == null ? void 0 : o.querySelectorAll("tr");
  let l = [], u = [], b = {
    header: {},
    rows: []
  }, g = 40;
  if (p) {
    let I = !1, v = 0;
    p.forEach((x, f) => {
      var S = [].slice.call(x.children);
      const O = window.getComputedStyle(x, null);
      let V = K(O.backgroundColor);
      if (!I)
        v = S.length, I = !0, typeof h == "function" ? g = h(
          Number(O.height.substring(0, O.height.length - 2)),
          f,
          !0
        ) : g = Number(
          O.height.substring(0, O.height.length - 2)
        ), S.forEach((w, Y) => {
          let _ = window.getComputedStyle(w, null), k = null;
          _.borderBottomWidth !== "0px" && (k || (k = {}), k.bottom = {
            style: "thin",
            color: K(_.borderBottomColor)
          }), _.borderTopWidth !== "0px" && (k || (k = {}), k.top = {
            style: "thin",
            color: K(_.borderTopColor)
          }), _.borderLeftWidth !== "0px" && (k || (k = {}), k.left = {
            style: "thin",
            color: K(_.borderLeftColor)
          }), _.borderRightWidth !== "0px" && (k || (k = {}), k.right = {
            style: "thin",
            color: K(_.borderRightColor)
          });
          let N = K(_.backgroundColor);
          !N && V && (N = V);
          let U = {
            ...N ? { fg: N } : {},
            bold: parseInt(_.fontWeight) > 500,
            size: parseInt(
              _.fontSize.substring(0, _.fontSize.indexOf("p"))
            ),
            ...k ? { border: k } : {},
            alignment: {
              horizontal: _.textAlign,
              vertical: "center",
              ..._.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          b.header[f + "-" + Y] = U;
          let F;
          typeof m == "function" ? F = m(
            Number(_.width.substring(0, _.width.length - 2)),
            Y
          ) : F = Number(_.width.substring(0, _.width.length - 2)) * 0.15, l.push({
            label: "c" + Y,
            colspan: w.getAttribute("colspan"),
            rowspan: w.getAttribute("rowspan"),
            text: w.textContent,
            size: F
          });
        });
      else {
        let w = {}, Y = "", _ = !1;
        u.length >= f && (w = u[f - 1], Y = "mergeString" in w ? w.mergeString : "", _ = !0);
        let k = 0;
        S.forEach((N, U) => {
          if ("c" + (U + k) in w)
            for (let s = 0; s <= v + 1 && "c" + (U + s) in w; s++)
              k++;
          U += k;
          let F = window.getComputedStyle(N, null);
          if (N.getAttribute("colspan") || N.getAttribute("rowspan")) {
            let s = Ae(
              N.getAttribute("colspan") * 1,
              N.getAttribute("rowspan") * 1,
              U,
              v,
              w,
              N.textContent,
              Y,
              w
            );
            u.length < f ? u.push(...s) : s.forEach((t, r) => {
              u.length < f + r ? u.push(...s) : u[f + r] = {
                ...u[f + r],
                ...t
              };
            }), w = s[0], Y = s[0].mergeString, _ = !0;
          } else
            _ || (Y += "-");
          let E = null;
          F.borderBottomWidth !== "0px" && (E || (E = {}), E.bottom = {
            style: "thin",
            color: K(F.borderBottomColor)
          }), F.borderTopWidth !== "0px" && (E || (E = {}), E.top = {
            style: "thin",
            color: K(F.borderTopColor)
          }), F.borderLeftWidth !== "0px" && (E || (E = {}), E.left = {
            style: "thin",
            color: K(F.borderLeftColor)
          }), F.borderRightWidth !== "0px" && (E || (E = {}), E.right = {
            style: "thin",
            color: K(F.borderRightColor)
          });
          let Z = K(F.backgroundColor);
          !Z && V && (Z = V);
          let ae = {
            ...Z ? { fg: Z } : {},
            bold: parseInt(F.fontWeight) > 500,
            size: parseInt(
              F.fontSize.substring(0, F.fontSize.indexOf("p"))
            ),
            ...E ? { border: E } : {},
            // fg: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: F.textAlign,
              vertical: "center",
              direction: F.direction,
              ...F.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          b.header[f + "-" + U] = ae, w["c" + U] = N.textContent;
        }), typeof h == "function" ? w.height = h(
          Number(O.height.substring(0, O.height.length - 2)),
          f,
          !1
        ) : w.height = O.height.substring(0, O.height.length - 2), u.length < f ? u.push(w) : u[f - 1] = w;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: b.header,
    sheet: [
      {
        headerHeight: g,
        styleCellCondition: function(I, v, x, f, S, O) {
          return i ? O.includes(f - 1 + "-" + x) ? f - 1 + "-" + x : "" : null;
        },
        data: u,
        headers: l
      }
    ]
  };
}
function he(e, o, i) {
  let h = !1, m, p;
  if (typeof e == "object") {
    if ("author" in e && e.author && (h = !0, p = e.author), "styleId" in e && typeof e.styleId == "string") {
      let l = o[e.styleId];
      typeof l == "string" && (i = l);
    }
    m = "comment" in e && typeof e.comment == "string" ? Se(e.comment) : [""];
  } else
    m = e ? Se(e) : [""];
  return h && m.unshift(p + ":"), {
    hasAuthour: h,
    author: p,
    commentStyl: i,
    commentStr: m
  };
}
function Se(e) {
  var o = e.split(/\r?\n|\r|\n/g);
  return o;
}
function ue(e, o, i, h) {
  let m = `<comment ref="${e}" authorId="${Math.max(
    0,
    h - 1
  )}" shapeId="0">
            <text>`, p = "";
  return o.forEach((l, u) => {
    let b = "";
    if (l.length == 0) {
      p += `
`;
      return;
    }
    u > 0 && (b = 'xml:space="preserve"', p += `
`), m += "<r>" + i + "<t " + b + " >" + p + l + "</t></r>", p = "";
  }), m += "</text></comment>", m;
}
const Le = `<rPr>
                        <b />
                        <sz val="9" />
                        <color rgb="000000" />
                        <rFont val="Tahoma" />
                    </rPr>
            `;
function me(e, o) {
  let i = {
    result: [],
    str: o
  }, h = e.reduce((m, p) => {
    let l = m.str.indexOf(p);
    return m.result.push(m.str.substring(0, l)), m.str = m.str.substring(l + p.length), m;
  }, i);
  return h.result.push(h.str), h.result;
}
function _e(e, o, i, h, m, p, l, u, b) {
  if (h) {
    let g = [], $ = [], y = [];
    const I = p.length;
    m.forEach((v, x) => {
      let f;
      try {
        f = v.match(e);
      } catch (S) {
        if (typeof e == "string")
          f = v.match("\\" + e);
        else
          throw S;
      }
      if (f)
        if (u) {
          let S;
          b ? S = me(f, v) : S = v.split(e), g.push(...S), $.push(...f), y.push(
            ...f.reduce((O, V) => [...O, o], [])
          );
        } else {
          let S;
          b ? S = me(f, v) : S = v.split(e).reduce((O, V, w) => w >= 2 ? (O[1] += e + V, O) : [...O, V], []), g.push(...S), y.push(o), $.push(e.toString());
        }
      else
        g.push(v);
      I > x && ($.push(p[x]), y.push(l[x]));
    }), m = g, p = $, l = y;
  } else {
    let g;
    try {
      g = i.match(e);
    } catch ($) {
      if (typeof e == "string")
        g = i.match("\\" + e);
      else
        throw $;
    }
    g ? u ? (p.push(...g), l.push(
      ...g.reduce(($, y) => [...$, o], [])
    ), b ? m = me(g, i) : m = i.split(e)) : (p.push(e.toString()), l.push(o), b ? m = me(g, i) : m = i.split(e).reduce(($, y, I) => I >= 2 ? ($[1] += e + y, $) : [...$, y], [])) : m.push(i), h = !0;
  }
  return {
    v: e,
    text: i,
    textSplited: h,
    splitValue: m,
    matchValue: p,
    styleMatchValue: l
  };
}
function de(e, o, i, h, m) {
  if (typeof e == "object") {
    let p = "", l = [], u = [], b = [], g = !1;
    if (Object.keys(e).forEach((v) => {
      const x = e[v];
      if (v !== "reg") {
        let f = _e(
          v,
          typeof x == "string" ? x : "",
          o,
          g,
          b,
          l,
          u,
          !1,
          m
        );
        g = f.textSplited, b = f.splitValue, l = f.matchValue, u = f.styleMatchValue;
      }
    }), "reg" in e && Array.isArray(e.reg)) {
      const v = e.reg.length;
      for (let x = 0; x < v; x++) {
        const f = e.reg[x];
        if ("reg" in f && "styleId" in f) {
          typeof f.reg == "string" && (f.reg = new RegExp(f.reg, "g"));
          let S = _e(
            f.reg,
            f.styleId,
            o,
            g,
            b,
            l,
            u,
            !0,
            m
          );
          g = S.textSplited, b = S.splitValue, l = S.matchValue, u = S.styleMatchValue;
        }
      }
    }
    const y = b.length - 1, I = h in i ? i[h] : "";
    for (let v = 0; v < y; v++) {
      const x = b[v], f = l[v], S = u[v];
      x.length > 0 && (p += `<r>
        ${I}
            <t xml:space="preserve" >${x}</t>
        </r>`), f.length > 0 && (p += `
                            <r>
           ${i[S]}
            <t xml:space="preserve" >${f}</t>
        </r>
                    `);
    }
    return b[y].length > 0 ? p = `<si>
                    ${p}
                    <r>
        ${I}
            <t>${b[y]}</t>
        </r>
                    </si>` : p = `<si>
                    ${p}
                    </si>`, p;
  } else
    return `
<si>
    <t>${o}</t>
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
async function Re(e) {
  let o = [...Me];
  e.numberOfColumn && e.numberOfColumn > 25 && (o = Fe(o, e.numberOfColumn));
  const h = (await import("./jszip.min-e651e8fb.mjs").then((s) => s.j)).default;
  var m = new h();
  const p = e.sheet.length;
  var l = m.folder("xl");
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const u = Object.keys(e.styles), b = Le;
  let g = u.reduce(
    (s, t, r) => {
      const n = e.styles[t], L = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (n.fg) {
        let M = ne(n.fg, e.backend);
        L.fillIndex = s.fill.count, s.fill.count++, s.fill.value = s.fill.value + '<fill><patternFill patternType="solid">' + (M ? '<fgColor rgb="' + M.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (n.fontColor || n.fontFamily || n.size || n.bold || n.italic || n.underline || n.doubleUnderline) {
        const M = ne(n.fontColor, e.backend);
        L.fontIndex = s.font.count, s.font.count++, s.font.value = s.font.value + "<font>" + (n.bold ? "<b/>" : "") + (n.italic ? "<i />" : "") + `${n.underline || n.doubleUnderline ? `<u ${n.doubleUnderline ? ' val="double" ' : ""}/>` : ""}` + (n.size ? '<sz val="' + n.size + '" />' : "") + (M ? '<color rgb="' + M.replace("#", "") + '" />' : "") + (n.fontFamily ? '<name val="' + n.fontFamily + '" />' : "") + "</font>", s.commentSintax.value[t] = `<rPr>
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
      n.alignment && (n.alignment.rtl && (n.alignment.readingOrder = 2), delete n.alignment.rtl, n.alignment.ltr && (n.alignment.readingOrder = 1), delete n.alignment.ltr, G = ' applyAlignment="1"><alignment ' + Object.keys(n.alignment).reduce((M, j) => M + " " + j + '="' + n.alignment[j] + '" ', "") + " /></xf>");
      const d = n.border;
      let H = "";
      if (typeof d == "object" && ((d.left || d.full) && (H += '<left style="' + (d.left || d.full).style + '"><color rgb="' + ne(
        (d.left || d.full).color,
        e.backend
      ).replace("#", "") + '" /></left>'), (d.right || d.full) && (H += '<right style="' + (d.right || d.full).style + '"><color rgb="' + ne(
        (d.right || d.full).color,
        e.backend
      ).replace("#", "") + '" /></right>'), (d.top || d.full) && (H += '<top style="' + (d.top || d.full).style + '"><color rgb="' + ne(
        (d.top || d.full).color,
        e.backend
      ).replace("#", "") + '" /></top>'), (d.bottom || d.full) && (H += '<bottom style="' + (d.bottom || d.full).style + '"><color rgb="' + ne(
        (d.bottom || d.full).color,
        e.backend
      ).replace("#", "") + '" /></bottom>'), L.borderIndex = s.border.count, s.border.count++, s.border.value += "<border>" + H + "<diagonal /></border>"), n.format) {
        const M = De[n.format];
        M && (L.formatIndex = M.key, "value" in M && (s.format.count++, s.format.value += M.value));
      }
      return s.cell.value = s.cell.value + '<xf numFmtId="' + L.formatIndex + '" fontId="' + L.fontIndex + '" fillId="' + L.fillIndex + '" borderId="' + L.borderIndex + '" xfId="0"' + (L.borderIndex > 0 ? ' applyBorder="1" ' : "") + (L.fillIndex > 0 ? ' applyFill="1" ' : "") + (L.fontIndex >= 0 ? ' applyFont="1" ' : "") + (L.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + G, e.styles[t].index = s.cell.count, s.cell.count++, s;
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
  l == null || l.file("styles.xml", we(g));
  var $ = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let y = "", I = 0, v = "", x = "", f = {};
  const S = {};
  let O = "", V = 4, w = !1;
  for (let s = 0; s < p; s++) {
    const t = e.sheet[s];
    let r = t.shiftTop ? t.shiftTop : 1, n = "", L = "", G = "", d = Object.assign([], t.merges), H = Object.assign({}, t.formula), M = !1, j = [], se = "", ie = [], ge = [], ce = [], oe = {};
    const le = t.headers.length;
    if (Array.isArray(t.headers) && le) {
      let J = "";
      if (t.title) {
        const a = t.title, C = a.comment, R = a.shiftTop ? a.shiftTop : 0, z = t.shiftLeft ? t.shiftLeft : 0, c = a.shiftLeft ? a.shiftLeft + z : z, Q = a.consommeRow ? a.consommeRow - 1 : 1, ee = a.consommeCol ? a.consommeCol : le, T = Q == 0 && typeof a.height == "number" ? ' ht="' + a.height + '" customHeight="1" ' : "", P = a.styleId ? a.styleId : "titleStyle", A = o[c] + "" + (r + R);
        if (d.push(
          A + ":" + o[c + ee - 1] + (r + Q + R)
        ), typeof C < "u") {
          M = !0;
          const D = he(
            C,
            g.commentSintax.value,
            b
          );
          let B = j.length;
          if (D.hasAuthour && typeof D.author < "u") {
            let X = D.author.toString();
            const q = j.indexOf(X);
            q < 0 ? j.push(X) : B = q;
          }
          ie.push({
            row: r + R - 1,
            col: c
          }), se += ue(
            A,
            D.commentStr,
            D.commentStyl,
            B
          );
        }
        typeof a.text == "string" && (J += '<row r="' + (r + R) + '" ' + T + ' spans="1:' + (c + ee - 1) + '">', J += '<c r="' + A + '" ' + (e.styles[P] ? ' s="' + e.styles[P].index + '" ' : "") + ' t="s"><v>' + I + "</v></c>", J += "</row>", I++, f[a.text] = a.text, a.multiStyleValue ? y += de(
          a.multiStyleValue,
          a.text,
          g.commentSintax.value,
          P,
          t.useSplitBaseOnMatch
        ) : y += "<si><t>" + a.text + "</t></si>"), r += R + Q + 1;
      }
      let W = t.headerStyleKey ? t.headerStyleKey : null, re = 0;
      if (typeof t.shiftLeft == "number" && (re = t.shiftLeft), t.headers.forEach((a, C) => {
        if (re && (C += re), a.formula && ce.push(C), ge.push(a.label), t.mergeRowDataCondition && typeof t.mergeRowDataCondition == "function" && t.mergeRowDataCondition(
          a,
          null,
          C,
          !0
        ) === !0 && (oe[o[C]] = {
          inProgress: !0,
          start: r
        }), t.styleCellCondition && typeof t.styleCellCondition == "function" && (W = t.styleCellCondition(
          a,
          a,
          C,
          r,
          !0,
          u
        ) || W), a.size && a.size > 0 && (L += '<col min="' + (C + 1) + '" max="' + (C + 1) + '" width="' + a.size + '" customWidth="1" />'), t.withoutHeader)
          return;
        const R = o[C] + "" + r;
        if (typeof t.commentCodition == "function") {
          const c = t.commentCodition(
            a,
            null,
            a.label,
            r,
            C,
            !0
          );
          c && (a.comment = c);
        }
        if (a.comment) {
          M = !0;
          const c = he(
            a.comment,
            g.commentSintax.value,
            b
          );
          let Q = j.length;
          if (c.hasAuthour && typeof c.author < "u") {
            let ee = c.author.toString();
            const T = j.indexOf(ee);
            T < 0 ? j.push(ee) : Q = T;
          }
          ie.push({
            row: r - 1,
            col: C
          }), se += ue(
            R,
            c.commentStr,
            c.commentStyl,
            Q
          );
        }
        const z = H && H[R];
        if (z)
          n += fe(
            R,
            z,
            e.styles
          ).cell, delete H[R];
        else {
          if (n += '<c r="' + o[C] + r + '" ' + (W && e.styles && e.styles[W] ? ' s="' + e.styles[W].index + '" ' : "") + ' t="s"><v>' + I + "</v></c>", typeof t.multiStyleConditin == "function") {
            const c = t.multiStyleConditin(
              a,
              null,
              a.label,
              r,
              C,
              !0
            );
            c && (a.multiStyleValue = c);
          }
          a.multiStyleValue ? y += de(
            a.multiStyleValue,
            a.text,
            g.commentSintax.value,
            W || "",
            t.useSplitBaseOnMatch
          ) : y += "<si><t>" + a.text + "</t></si>", f[a.text] = a.text, I++;
        }
      }), t.withoutHeader ? n += J : (n = J + '<row r="' + r + '" spans="1:' + le + '" ' + (t.headerHeight ? 'ht="' + t.headerHeight + '" customHeight="1"' : "") + (t.headerRowOption ? Object.keys(t.headerRowOption).reduce((a, C) => a + " " + C + '="' + t.headerRowOption[C] + '" ', "  ") : "") + ">" + n + "</row>", r++), Array.isArray(t.data)) {
        const a = e.mapSheetDataOption && e.mapSheetDataOption.outlineLevel ? e.mapSheetDataOption.outlineLevel : "outlineLevel", C = e.mapSheetDataOption && e.mapSheetDataOption.hidden ? e.mapSheetDataOption.hidden : "hidden", R = e.mapSheetDataOption && e.mapSheetDataOption.height ? e.mapSheetDataOption.height : "height", z = t.data.length;
        t.data.forEach((c, Q) => {
          if (c.mergeType)
            for (let T = 0; T < c.mergeType.length; T++) {
              const P = c.mergeType[T], A = c.mergeStart[T], D = c.mergeValue[s];
              let B = "";
              P == "both" ? B = o[A] + "" + r + ":" + o[A + D[1]] + (r + D[0]) : P == "col" ? B = o[A] + "" + r + ":" + o[A + D[0]] + r : B = o[A] + "" + r + ":" + o[A] + (r + D[0]), d.push(B);
            }
          const ee = c.rowStyle;
          n += '<row r="' + r + '" spans="1:' + le + '" ' + (R in c ? 'ht="' + c[R] + '" customHeight="1"' : "") + (a in c ? ' outlineLevel="' + c[a] + '"' : "") + (C in c ? ' hidden="' + c[C] + '"' : "") + " >", ge.forEach((T, P) => {
            re && (P += re);
            const A = c[T];
            let D = ee;
            if (t.styleCellCondition && typeof t.styleCellCondition == "function" && (D = t.styleCellCondition(
              A,
              c,
              P,
              r,
              !1,
              u
            ) || ee), t.mergeRowDataCondition && typeof t.mergeRowDataCondition == "function") {
              let B = t.mergeRowDataCondition(
                A,
                T,
                P,
                !1
              );
              const X = o[P];
              let q = oe[X];
              B === !0 ? (!q || q && !q.inProgress) && (oe[X] = {
                inProgress: !0,
                start: r
              }) : q && q.inProgress && (d.push(
                X + q.start + ":" + X + (r - 1)
              ), oe[X] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof A < "u") {
              const B = o[P] + "" + r;
              if (typeof t.commentCodition == "function") {
                const q = t.commentCodition(
                  A,
                  c,
                  T,
                  r,
                  P,
                  !1
                );
                q && (typeof c.comment != "object" && (c.comment = {}), c.comment[T] = q);
              }
              if (typeof c.comment == "object" && T in c.comment) {
                const q = c.comment[T];
                M = !0;
                const te = he(
                  q,
                  g.commentSintax.value,
                  b
                );
                te.hasAuthour && typeof te.author < "u" && j.push(te.author.toString()), ie.push({
                  row: r - 1,
                  col: P
                });
                let Ce = j.length;
                if (te.hasAuthour && typeof te.author < "u") {
                  let ve = te.author.toString();
                  const be = j.indexOf(ve);
                  be < 0 ? j.push(ve) : Ce = be;
                }
                se += ue(
                  B,
                  te.commentStr,
                  te.commentStyl,
                  Ce
                );
              }
              const X = H && H[B];
              if (X)
                n += fe(B, X).cell, delete H[B];
              else if (typeof A == "string") {
                if (n += '<c r="' + o[P] + r + '" t="s" ' + (D && e.styles && e.styles[D] ? 's="' + e.styles[D].index + '"' : "") + "><v>" + I + "</v></c>", typeof t.multiStyleConditin == "function") {
                  const q = t.multiStyleConditin(
                    A,
                    c,
                    T,
                    r,
                    P,
                    !1
                  );
                  q && ((!("multiStyleValue" in c) || typeof c.multiStyleValue > "u") && (c.multiStyleValue = {}), c.multiStyleValue[T] = q);
                }
                "multiStyleValue" in c && c.multiStyleValue && T in c.multiStyleValue ? y += de(
                  c.multiStyleValue[T],
                  A,
                  g.commentSintax.value,
                  D || "",
                  t.useSplitBaseOnMatch
                ) : y += "<si><t>" + A + "</t></si>", f[A] = A, I++;
              } else
                n += '<c r="' + o[P] + r + '" ' + (D && e.styles && e.styles[D] ? 's="' + e.styles[D].index + '"' : "") + "><v>" + A + "</v></c>";
            }
          }), z - 1 == Q && Object.keys(oe).forEach((T) => {
            oe[T].inProgress && d.push(
              T + oe[T].start + ":" + T + r
            );
          }), r++, n += "</row>";
        }), t.sortAndfilter && (t.sortAndfilter.mode == "all" ? G += '<autoFilter ref="A1:' + o[le - 1] + (r - 1) + '" />' : typeof t.sortAndfilter.ref == "string" && t.sortAndfilter.ref.length > 0 && (G += '<autoFilter ref="' + t.sortAndfilter.ref + '" />'));
      }
      if (ce.length > 0 && ce.forEach((a) => {
        const C = t.headers[a];
        H[o[a] + "" + r] = {
          start: t.withoutHeader ? o[a] + "1" : o[a] + "2",
          end: o[a] + "" + (r - 1),
          type: C.formula.type,
          ...C.formula.styleId ? { styleId: C.formula.styleId } : {}
        };
      }), H) {
        const a = Object.keys(H);
        if (a.length) {
          let C = {};
          a.forEach((R) => {
            const z = fe(R, H[R], e.styles);
            C[z.row] ? C[z.row] += z.cell : C[z.row] = z.cell;
          }), Object.keys(C).forEach((R) => {
            const z = C[R];
            n += '<row r="' + R + '" spans="1:' + le + '"  >' + z + "</row>";
          });
        }
      }
    }
    s > 0 && ($ += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (s + 1) + '.xml" />');
    const ye = t.name ? t.name : "sheet" + (s + 1), Te = t.state ? t.state : "visible";
    v += '<sheet state="' + Te + '" name="' + ye + '" sheetId="' + (s + 1) + '" r:id="rId' + (V + 1) + '" />', x += '<Relationship Id="rId' + (V + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (s + 1) + '.xml" />', O += "<vt:lpstr>" + ("sheet" + (s + 1)) + "</vt:lpstr>", w = w || !!t.selected;
    const xe = t.sortAndfilter ? 'filterMode="1"' : "";
    d = [...new Set(d)], S["sheet" + (s + 1)] = {
      indexId: V + 1,
      key: "sheet" + (s + 1),
      sheetName: ye,
      sheetDataString: n,
      hasComment: M,
      commentString: se,
      commentAuthor: j,
      shapeCommentRowCol: ie,
      sheetSizeString: L.length > 0 ? "<cols>" + L + "</cols>" : "",
      protectionOption: t.protectionOption ? Object.keys(t.protectionOption).reduce((J, W) => J + " " + W + '="' + t.protectionOption[W] + '" ', "<sheetProtection ") + "/>" : "",
      merges: d.length > 0 ? d.reduce((J, W) => J + ' <mergeCell ref="' + W + '" />', '<mergeCells count="' + d.length + '">') + " </mergeCells>" : "",
      selectedView: t.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: G,
      tabColor: t.tabColor ? '<sheetPr codeName="' + ("Sheet" + (s + 1)) + '" ' + xe + ' ><tabColor rgb="' + t.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + xe + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, V++;
  }
  let Y = Object.keys(S);
  var _ = m.folder("_rels");
  _ == null || _.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  var k = m.folder("docProps");
  k == null || k.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), k == null || k.file("app.xml", Ie(p, O)), l == null || l.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + v + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), l == null || l.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (I - 1) + '" uniqueCount="' + Object.keys(f).length + '"> ' + y + "</sst>"
  );
  var N = l == null ? void 0 : l.folder("_rels");
  N == null || N.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + x + " </Relationships>"
  );
  var U = l == null ? void 0 : l.folder("theme");
  U == null || U.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"  name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  var F = l == null ? void 0 : l.folder("worksheets");
  let E = [];
  const Z = l == null ? void 0 : l.folder("drawings"), ae = F == null ? void 0 : F.folder("_rels");
  if (Y.forEach((s, t) => {
    const r = S[s];
    if (r.hasComment) {
      E.push(t + 1);
      let n = r.commentAuthor;
      l == null || l.file(
        `comments${t + 1}.xml`,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
	xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
     xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
	<authors>
        ${Array.isArray(n) && n.length > 0 ? n.reduce(
          (L, G) => L + "<author>" + G + "</author>",
          ""
        ) : "<author></author>"}
	</authors>
	<commentList>
		${r.commentString}
	</commentList>
</comments>`
      ), ae == null || ae.file(
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
      ), Z == null || Z.file(
        "vmlDrawing" + (t + 1) + ".vml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xml xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oa="urn:schemas-microsoft-com:office:activation" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:pvml="urn:schemas-microsoft-com:office:powerpoint">
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout><v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path gradientshapeok="t" o:connecttype="rect"/>
 </v:shapetype>${r.shapeCommentRowCol.reduce((L, G) => L + `<v:shape id="_x0000_s1025" type="#_x0000_t202" style='position:absolute;
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
    F == null || F.file(
      r.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + r.tabColor + r.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + r.sheetSizeString + "<sheetData>" + r.sheetDataString + "</sheetData>" + r.protectionOption + r.sheetSortFilter + r.merges + (r.hasComment ? '<legacyDrawing r:id="rId3" />' : "") + "</worksheet>"
    );
  }), m.file(
    "[Content_Types].xml",
    $e($, E)
  ), e.backend)
    return m.generateAsync({
      type: e.generateType ? e.generateType : "nodebuffer"
    }).then((s) => s);
  if (e.notSave)
    return m.generateAsync({ type: "blob" }).then((s) => s.slice(
      0,
      s.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  m.generateAsync({ type: "blob" }).then(function(s) {
    import("./FileSaver.min-3b84b3f2.mjs").then((t) => t.F).then((t) => {
      const { saveAs: r } = t;
      r(
        s,
        (e.fileName ? e.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function Ee(e, o, i, h, m) {
  const p = Oe(
    e,
    o,
    i,
    h,
    m
  );
  return Re(p);
}
export {
  Ee as convertTableToExcel,
  Re as generateExcel
};
