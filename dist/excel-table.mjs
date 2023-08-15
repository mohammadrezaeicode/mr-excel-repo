function ae(t, s, n = "", d = [], O = 0) {
  const h = t.length;
  for (let _ = 0; _ < h; _++)
    d.push(n + t[_]);
  return s < d.length ? d : ae(
    t,
    s,
    d[O + 1],
    d,
    O + 1
  );
}
function se(t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (t.format.count > 0 ? '<numFmts count="' + t.format.count + '">' + t.format.value + "</numFmts>" : "") + ' <fonts count="' + t.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + t.font.value + ' </fonts> <fills count="' + t.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + t.fill.value + ' </fills> <borders count="' + t.border.count + '"> <border />' + t.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + t.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + t.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> <dxfs count="0" /></styleSheet>';
}
function ne(t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default ContentType="application/xml" Extension="xml" /> <Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels" />` + t + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" /> <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function ie(t, s) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + t + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + t + '" baseType="lpstr"> ' + s + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function ee(t, s, n) {
  let d = t.replace(/[0-9]/g, ""), O = parseInt(t.substr(d.length)), h = '<c r="' + t + '" ' + (n && typeof s.styleId == "string" && n[s.styleId] ? 's="' + n[s.styleId].index + '" ' : "") + ">     <f>" + s.type + "(" + s.start + ":" + s.end + ")</f> </c>";
  return {
    column: d,
    row: O,
    cell: h
  };
}
function te(t) {
  t = Number(t);
  var s = t.toString(16);
  return s.length == 1 ? "0" + s : s;
}
function q(t) {
  let s = t.indexOf("rgba") >= 0 ? t.substring(5, t.length - 1).split(", ") : t.substring(4, t.length - 1).split(", ");
  return s.length == 4 && s[3] == "0" ? null : (te(s[0]) + te(s[1]) + te(s[2])).toUpperCase();
}
function me(t, s, n, d, O, h, _, r) {
  let E = [], R = "both", G = [];
  !s || s === 0 ? (s = 1, R = "col") : G.push(s - 1), !t || t === 0 ? (t = 0, R = "row") : G.push(t - 1);
  let S = O || {};
  S.mergeType = r && r.mergeType ? [...r.mergeType, R] : [R], S.mergeValue = r && r.mergeValue ? [...r.mergeValue, G] : [G], S.mergeStart = r && r.mergeStart ? [...r.mergeStart, n] : [n];
  for (let T = 0; T < s; T++) {
    let P = t;
    for (let b = 0; b < d; b++)
      n <= b ? P >= 1 ? (S["c" + b] = h, h = "", _ += "*", P--) : s >= 2 && n == b ? (S["c" + b] = h, h = "", _ += "+") : _ += "-" : T > 0 && (_ += "-");
    E.push({
      ...S,
      mergeString: _
    }), S = {}, _ = "";
  }
  return E;
}
function fe(t, s, n, d, O) {
  var S;
  if (console.log(arguments), !t && !s)
    throw "Error: One of the function inputs is required.";
  let h;
  t ? h = (S = document.querySelector(t)) == null ? void 0 : S.querySelectorAll("tr") : h = s == null ? void 0 : s.querySelectorAll("tr");
  let _ = [], r = [], E = {
    header: {},
    rows: []
  }, R = 40;
  if (h) {
    let T = !1, P = 0;
    h.forEach((b, g) => {
      var U = [].slice.call(b.children);
      const w = window.getComputedStyle(b, null);
      let X = q(w.backgroundColor);
      if (!T)
        P = U.length, T = !0, console.log(d, typeof d), typeof d == "function" ? R = d(
          Number(w.height.substring(0, w.height.length - 2)),
          g,
          !0
        ) : R = Number(
          w.height.substring(0, w.height.length - 2)
        ), U.forEach((y, N) => {
          let c = window.getComputedStyle(y, null), p = null;
          c.borderBottomWidth !== "0px" && (p || (p = {}), p.bottom = {
            style: "thin",
            color: q(c.borderBottomColor)
          }), c.borderTopWidth !== "0px" && (p || (p = {}), p.top = {
            style: "thin",
            color: q(c.borderTopColor)
          }), c.borderLeftWidth !== "0px" && (p || (p = {}), p.left = {
            style: "thin",
            color: q(c.borderLeftColor)
          }), c.borderRightWidth !== "0px" && (p || (p = {}), p.right = {
            style: "thin",
            color: q(c.borderRightColor)
          });
          let F = q(c.backgroundColor);
          F || (F = X);
          let L = {
            ...F ? { fg: F } : {},
            bold: parseInt(c.fontWeight) > 500,
            size: parseInt(
              c.fontSize.substring(0, c.fontSize.indexOf("p"))
            ),
            ...p ? { border: p } : {},
            alignment: {
              horizontal: c.textAlign,
              vertical: "center",
              ...c.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          E.header[g + "-" + N] = L;
          let u;
          typeof O == "function" ? u = O(
            Number(c.width.substring(0, c.width.length - 2)),
            N
          ) : u = Number(c.width.substring(0, c.width.length - 2)) * 0.15, _.push({
            label: "c" + N,
            colspan: y.getAttribute("colspan"),
            rowspan: y.getAttribute("rowspan"),
            text: y.textContent,
            size: u
          });
        });
      else {
        let y = {}, N = "", c = !1;
        r.length >= g && (y = r[g - 1], N = "mergeString" in y ? y.mergeString : "", c = !0);
        let p = 0;
        U.forEach((F, L) => {
          if ("c" + (L + p) in y)
            for (let l = 0; l <= P + 1 && "c" + (L + l) in y; l++)
              p++;
          L += p;
          let u = window.getComputedStyle(F, null);
          if (F.getAttribute("colspan") || F.getAttribute("rowspan")) {
            let l = me(
              F.getAttribute("colspan") * 1,
              F.getAttribute("rowspan") * 1,
              L,
              P,
              y,
              F.textContent,
              N,
              y
            );
            r.length < g ? r.push(...l) : l.forEach((C, H) => {
              r.length < g + H ? r.push(...l) : r[g + H] = {
                ...r[g + H],
                ...C
              };
            }), y = l[0], N = l[0].mergeString, c = !0;
          } else
            c || (N += "-");
          let o = null;
          u.borderBottomWidth !== "0px" && (o || (o = {}), o.bottom = {
            style: "thin",
            color: q(u.borderBottomColor)
          }), u.borderTopWidth !== "0px" && (o || (o = {}), o.top = {
            style: "thin",
            color: q(u.borderTopColor)
          }), u.borderLeftWidth !== "0px" && (o || (o = {}), o.left = {
            style: "thin",
            color: q(u.borderLeftColor)
          }), u.borderRightWidth !== "0px" && (o || (o = {}), o.right = {
            style: "thin",
            color: q(u.borderRightColor)
          });
          let e = q(u.backgroundColor);
          e || (e = X);
          let i = {
            ...e ? { fg: e } : {},
            bold: parseInt(u.fontWeight) > 500,
            size: parseInt(
              u.fontSize.substring(0, u.fontSize.indexOf("p"))
            ),
            ...o ? { border: o } : {},
            // fg: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: u.textAlign,
              vertical: "center",
              direction: u.direction,
              ...u.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          E.header[g + "-" + L] = i, y["c" + L] = F.textContent;
        }), console.log(d, typeof d), typeof d == "function" ? y.height = d(
          Number(w.height.substring(0, w.height.length - 2)),
          g,
          !1
        ) : y.height = w.height.substring(0, w.height.length - 2), r.length < g ? r.push(y) : r[g - 1] = y;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: E.header,
    sheet: [
      {
        headerHeight: R,
        styleCellCondition: function(T, P, b, g, U, w) {
          return n ? w.includes(g - 1 + "-" + b) ? g - 1 + "-" + b : "" : null;
        },
        data: r,
        headers: _
      }
    ]
  };
}
async function ce(t) {
  let s = {
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
  }, n = [
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
  t.numberOfColumn && t.numberOfColumn > 25 && (n = ae(n, t.numberOfColumn));
  const O = (await import("./jszip.min-e651e8fb.mjs").then((o) => o.j)).default;
  var h = new O();
  const _ = t.sheet.length;
  var r = h.folder("xl");
  t.styles || (t.styles = {}), t.addDefaultTitleStyle && (t.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const E = Object.keys(t.styles);
  let R = E.reduce(
    (o, e, i) => {
      const l = t.styles[e], C = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      l.fg && (C.fillIndex = o.fill.count, o.fill.count++, o.fill.value = o.fill.value + '<fill><patternFill patternType="solid">' + (l.fg ? '<fgColor rgb="' + l.fg.replace("#", "") + '" />' : "") + "</patternFill></fill>"), (l.fontColor || l.fontFamily || l.size || l.bold || l.italic || l.underline || l.doubleUnderline) && (C.fontIndex = o.font.count, o.font.count++, o.font.value = o.font.value + "<font>" + (l.bold ? "<b/>" : "") + (l.italic ? "<i />" : "") + `${l.underline || l.doubleUnderline ? `<u ${l.doubleUnderline ? ' val="double" ' : ""}/>` : ""}` + (l.size ? '<sz val="' + l.size + '" />' : "") + (l.fontColor ? '<color rgb="' + l.fontColor.replace("#", "") + '" />' : "") + (l.fontFamily ? '<name val="' + l.fontFamily + '" />' : "") + "</font>");
      let H = "/>";
      l.alignment && (l.alignment.rtl && (l.alignment.readingOrder = 2), delete l.alignment.rtl, l.alignment.ltr && (l.alignment.readingOrder = 1), delete l.alignment.ltr, H = ' applyAlignment="1"><alignment ' + Object.keys(l.alignment).reduce((I, j) => I + " " + j + '="' + l.alignment[j] + '" ', "") + " /></xf>");
      const f = l.border;
      let W = "";
      if (typeof f == "object" && ((f.left || f.full) && (W += '<left style="' + (f.left || f.full).style + '"><color rgb="' + (f.left || f.full).color.replace("#", "") + '" /></left>'), (f.right || f.full) && (W += '<right style="' + (f.right || f.full).style + '"><color rgb="' + (f.right || f.full).color.replace("#", "") + '" /></right>'), (f.top || f.full) && (W += '<top style="' + (f.top || f.full).style + '"><color rgb="' + (f.top || f.full).color.replace("#", "") + '" /></top>'), (f.bottom || f.full) && (W += '<bottom style="' + (f.bottom || f.full).style + '"><color rgb="' + (f.bottom || f.full).color.replace("#", "") + '" /></bottom>'), C.borderIndex = o.border.count, o.border.count++, o.border.value += "<border>" + W + "<diagonal /></border>"), l.format) {
        const I = s[l.format];
        I && (C.formatIndex = I.key, "value" in I && (o.format.count++, o.format.value += I.value));
      }
      return o.cell.value = o.cell.value + '<xf numFmtId="' + C.formatIndex + '" fontId="' + C.fontIndex + '" fillId="' + C.fillIndex + '" borderId="' + C.borderIndex + '" xfId="0"' + (C.borderIndex > 0 ? ' applyBorder="1" ' : "") + (C.fillIndex > 0 ? ' applyFill="1" ' : "") + (C.fontIndex >= 0 ? ' applyFont="1" ' : "") + (C.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + H, t.styles[e].index = o.cell.count, o.cell.count++, o;
    },
    {
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
  r == null || r.file("styles.xml", se(R));
  var G = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let S = "", T = 0, P = "", b = "", g = {};
  const U = {};
  let w = "", X = 4, y = !1;
  for (let o = 0; o < _; o++) {
    const e = t.sheet[o];
    let i = e.shiftTop ? e.shiftTop : 1, l = "", C = "", H = "", f = [], W = [], I = {};
    const j = e.headers.length;
    if (Array.isArray(e.headers) && j) {
      let K = "";
      if (e.title) {
        const a = e.title, m = a.shiftTop ? a.shiftTop : 0, $ = e.shiftLeft ? e.shiftLeft : 0, k = a.shiftLeft ? a.shiftLeft + $ : $, v = a.consommeRow ? a.consommeRow - 1 : 1, Z = a.consommeCol ? a.consommeCol : j, Q = v == 0 && typeof a.height == "number" ? ' ht="' + a.height + '" customHeight="1" ' : "", x = a.styleId ? a.styleId : "titleStyle", D = n[k] + "" + (i + m);
        e.merges || (e.merges = []), e.merges.push(
          D + ":" + n[k + Z - 1] + (i + v + m)
        ), typeof a.text == "string" && (K += '<row r="' + (i + m) + '" ' + Q + ' spans="1:' + (k + Z - 1) + '">', K += '<c r="' + D + '" ' + (t.styles[x] ? ' s="' + t.styles[x].index + '" ' : "") + ' t="s"><v>' + T + "</v></c>", K += "</row>", T++, g[a.text] = a.text, S += "<si><t>" + a.text + "</t></si>"), i += m + v + 1;
      }
      let B = e.headerStyleKey ? e.headerStyleKey : null, J = 0;
      if (typeof e.shiftLeft == "number" && (J = e.shiftLeft), e.headers.forEach((a, m) => {
        if (J && (m += J), a.formula && W.push(m), f.push(a.label), e.mergeRowDataCondition && typeof e.mergeRowDataCondition == "function" && e.mergeRowDataCondition(
          a,
          null,
          m,
          !0
        ) === !0 && (I[n[m]] = {
          inProgress: !0,
          start: i
        }), e.styleCellCondition && typeof e.styleCellCondition == "function" && (B = e.styleCellCondition(
          a,
          a,
          m,
          i,
          !0,
          E
        ) || B), a.size && a.size > 0 && (C += '<col min="' + (m + 1) + '" max="' + (m + 1) + '" width="' + a.size + '" customWidth="1" />'), e.withoutHeader)
          return;
        const $ = n[m] + "" + i, k = e.formula && e.formula[$];
        k ? (l += ee(
          $,
          k,
          t.styles
        ).cell, delete e.formula[$]) : (l += '<c r="' + n[m] + i + '" ' + (B && t.styles && t.styles[B] ? ' s="' + t.styles[B].index + '" ' : "") + ' t="s"><v>' + T + "</v></c>", S += "<si><t>" + a.text + "</t></si>", g[a.text] = a.text, T++);
      }), e.withoutHeader ? l += K : (l = K + '<row r="' + i + '" spans="1:' + j + '" ' + (e.headerHeight ? 'ht="' + e.headerHeight + '" customHeight="1"' : "") + (e.headerRowOption ? Object.keys(e.headerRowOption).reduce((a, m) => a + " " + m + '="' + e.headerRowOption[m] + '" ', "  ") : "") + ">" + l + "</row>", i++), Array.isArray(e.data)) {
        const a = t.mapSheetDataOption && t.mapSheetDataOption.outlineLevel ? t.mapSheetDataOption.outlineLevel : "outlineLevel", m = t.mapSheetDataOption && t.mapSheetDataOption.hidden ? t.mapSheetDataOption.hidden : "hidden", $ = t.mapSheetDataOption && t.mapSheetDataOption.height ? t.mapSheetDataOption.height : "height", k = e.data.length;
        e.data.forEach((v, Z) => {
          if (v.mergeType)
            for (let x = 0; x < v.mergeType.length; x++) {
              const D = v.mergeType[x], A = v.mergeStart[x], M = v.mergeValue[o];
              let z = "";
              D == "both" ? z = n[A] + "" + i + ":" + n[A + M[1]] + (i + M[0]) : D == "col" ? z = n[A] + "" + i + ":" + n[A + M[0]] + i : z = n[A] + "" + i + ":" + n[A] + (i + M[0]), e.merges || (e.merges = []), e.merges.push(z);
            }
          const Q = v.rowStyle;
          l += '<row r="' + i + '" spans="1:' + j + '" ' + ($ in v ? 'ht="' + v[$] + '" customHeight="1"' : "") + (a in v ? ' outlineLevel="' + v[a] + '"' : "") + (m in v ? ' hidden="' + v[m] + '"' : "") + " >", f.forEach((x, D) => {
            J && (D += J);
            const A = v[x];
            let M = Q;
            if (e.styleCellCondition && typeof e.styleCellCondition == "function" && (M = e.styleCellCondition(
              A,
              v,
              D,
              i,
              !1,
              E
            ) || Q), e.mergeRowDataCondition && typeof e.mergeRowDataCondition == "function") {
              let z = e.mergeRowDataCondition(
                A,
                x,
                D,
                !1
              );
              const V = n[D];
              let Y = I[V];
              z === !0 ? (!Y || Y && !Y.inProgress) && (I[V] = {
                inProgress: !0,
                start: i
              }) : Y && Y.inProgress && (e.merges ? e.merges.push(
                V + Y.start + ":" + V + (i - 1)
              ) : e.merges = [
                V + Y.start + ":" + V + (i - 1)
              ], I[V] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof A < "u") {
              const z = n[D] + "" + i, V = e.formula && e.formula[z];
              V ? (l += ee(z, V).cell, delete e.formula[z]) : typeof A == "string" ? (l += '<c r="' + n[D] + i + '" t="s" ' + (M && t.styles && t.styles[M] ? 's="' + t.styles[M].index + '"' : "") + "><v>" + T + "</v></c>", S += "<si><t>" + A + "</t></si>", g[A] = A, T++) : l += '<c r="' + n[D] + i + '" ' + (M && t.styles && t.styles[M] ? 's="' + t.styles[M].index + '"' : "") + "><v>" + A + "</v></c>";
            }
          }), k - 1 == Z && Object.keys(I).forEach((x) => {
            I[x].inProgress && (e.merges ? e.merges.push(
              x + I[x].start + ":" + x + i
            ) : e.merges = [
              x + I[x].start + ":" + x + i
            ]);
          }), i++, l += "</row>";
        }), e.sortAndfilter && (e.sortAndfilter.mode == "all" ? H += '<autoFilter ref="A1:' + n[j - 1] + (i - 1) + '" />' : typeof e.sortAndfilter.ref == "string" && e.sortAndfilter.ref.length > 0 && (H += '<autoFilter ref="' + e.sortAndfilter.ref + '" />'));
      }
      if (W.length > 0 && (e.formula || (e.formula = {}), W.forEach((a) => {
        const m = e.headers[a];
        e.formula[n[a] + "" + i] = {
          start: e.withoutHeader ? n[a] + "1" : n[a] + "2",
          end: n[a] + "" + (i - 1),
          type: m.formula.type,
          ...m.formula.styleId ? { styleId: m.formula.styleId } : {}
        };
      })), e.formula) {
        const a = Object.keys(e.formula);
        if (a.length) {
          let m = {};
          a.forEach(($) => {
            const k = ee($, e.formula[$], t.styles);
            m[k.row] ? m[k.row] += k.cell : m[k.row] = k.cell;
          }), Object.keys(m).forEach(($) => {
            const k = m[$];
            l += '<row r="' + $ + '" spans="1:' + j + '"  >' + k + "</row>";
          });
        }
      }
    }
    o > 0 && (G += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (o + 1) + '.xml" />');
    const oe = e.name ? e.name : "sheet" + (o + 1), re = e.state ? e.state : "visible";
    P += '<sheet state="' + re + '" name="' + oe + '" sheetId="' + (o + 1) + '" r:id="rId' + (X + 1) + '" />', b += '<Relationship Id="rId' + (X + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (o + 1) + '.xml" />', w += "<vt:lpstr>" + ("sheet" + (o + 1)) + "</vt:lpstr>", y = y || !!e.selected;
    const le = e.sortAndfilter ? 'filterMode="1"' : "";
    U["sheet" + (o + 1)] = {
      indexId: X + 1,
      key: "sheet" + (o + 1),
      sheetName: oe,
      sheetDataString: l,
      sheetSizeString: C.length > 0 ? "<cols>" + C + "</cols>" : "",
      protectionOption: e.protectionOption ? Object.keys(e.protectionOption).reduce((K, B) => K + " " + B + '="' + e.protectionOption[B] + '" ', "<sheetProtection ") + "/>" : "",
      merges: e.merges ? e.merges.reduce((K, B) => K += ' <mergeCell ref="' + B + '" />', '<mergeCells count="' + e.merges.length + '">') + " </mergeCells>" : "",
      selectedView: e.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: H,
      tabColor: e.tabColor ? '<sheetPr codeName="' + ("Sheet" + (o + 1)) + '" ' + le + ' ><tabColor rgb="' + e.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + le + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, X++;
  }
  let N = Object.keys(U);
  h.file("[Content_Types].xml", ne(G));
  var c = h.folder("_rels");
  c == null || c.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  var p = h.folder("docProps");
  p == null || p.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (t.creator ? "<dc:creator>" + t.creator + "</dc:creator>" : "") + (t.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + t.created + "</dcterms:created>" : "") + (t.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + t.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), p == null || p.file("app.xml", ie(_, w)), r == null || r.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + P + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), r == null || r.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (T - 1) + '" uniqueCount="' + Object.keys(g).length + '"> ' + S + "</sst>"
  );
  var F = r == null ? void 0 : r.folder("_rels");
  F == null || F.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + b + " </Relationships>"
  );
  var L = r == null ? void 0 : r.folder("theme");
  L == null || L.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  var u = r == null ? void 0 : r.folder("worksheets");
  if (N.forEach((o) => {
    const e = U[o];
    u == null || u.file(
      e.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + e.tabColor + e.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + e.sheetSizeString + "<sheetData>" + e.sheetDataString + "</sheetData>" + e.protectionOption + e.sheetSortFilter + e.merges + "</worksheet>"
    );
  }), t.backend)
    return h.generateAsync({
      type: t.generateType ? t.generateType : "nodebuffer"
    }).then((o) => o);
  if (t.notSave)
    return h.generateAsync({ type: "blob" }).then((o) => o.slice(
      0,
      o.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  h.generateAsync({ type: "blob" }).then(function(o) {
    import("./FileSaver.min-3b84b3f2.mjs").then((e) => e.F).then((e) => {
      const { saveAs: i } = e;
      i(
        o,
        (t.fileName ? t.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function pe(t, s, n, d, O) {
  const h = fe(
    t,
    s,
    n,
    d,
    O
  );
  return ce(h);
}
export {
  pe as convertTableToExcel,
  ce as generateExcel
};
