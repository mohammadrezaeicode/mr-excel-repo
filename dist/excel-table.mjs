function re(t, n, s = "", b = [], A = 0) {
  const f = t.length;
  for (let _ = 0; _ < f; _++)
    b.push(s + t[_]);
  return n < b.length ? b : re(
    t,
    n,
    b[A + 1],
    b,
    A + 1
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
function ie(t, n) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + t + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + t + '" baseType="lpstr"> ' + n + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function ee(t, n, s) {
  let b = t.replace(/[0-9]/g, ""), A = parseInt(t.substr(b.length)), f = '<c r="' + t + '" ' + (s && typeof n.styleId == "string" && s[n.styleId] ? 's="' + s[n.styleId].index + '" ' : "") + ">     <f>" + n.type + "(" + n.start + ":" + n.end + ")</f> </c>";
  return {
    column: b,
    row: A,
    cell: f
  };
}
function te(t) {
  t = t * 1;
  var n = t.toString(16);
  return n.length == 1 ? "0" + n : n;
}
function Y(t) {
  let n = t.substring(4, t.length - 1).split(", ");
  return n.length == 3 ? (te(parseInt(n[0])) + te(parseInt(n[1])) + te(parseInt(n[2]))).toUpperCase() : "";
}
function me(t, n, s, b, A, f, _, p) {
  let B = [], q = "both", O = [];
  !n || n === 0 ? (n = 1, q = "col") : O.push(n - 1), !t || t === 0 ? (t = 0, q = "row") : O.push(t - 1);
  let y = A || {};
  y.mergeType = p && p.mergeType ? [...p.mergeType, q] : [q], y.mergeValue = p && p.mergeValue ? [...p.mergeValue, O] : [O], y.mergeStart = p && p.mergeStart ? [...p.mergeStart, s] : [s];
  for (let u = 0; u < n; u++) {
    let M = t;
    for (let h = 0; h < b; h++)
      s <= h ? M >= 1 ? (y["c" + h] = f, f = "", _ += "*", M--) : n >= 2 && s == h ? (y["c" + h] = f, f = "", _ += "+") : _ += "-" : u > 0 && (_ += "-");
    B.push({
      ...y,
      mergeString: _
    }), y = {}, _ = "";
  }
  return B;
}
function fe(t, n, s) {
  var B;
  if (!t && !n)
    throw "Error: One of the function inputs is required.";
  let b;
  t ? b = (B = document.querySelector(t)) == null ? void 0 : B.querySelectorAll("tr") : b = n == null ? void 0 : n.querySelectorAll("tr");
  let A = [], f = [], _ = {
    header: {},
    rows: []
  };
  if (b) {
    let q = !1, O = 0;
    b.forEach((y, u) => {
      var M = [].slice.call(y.children);
      if (!q)
        O = M.length, q = !0, M.forEach((h, D) => {
          let r = window.getComputedStyle(h, null);
          Y(r.backgroundColor), r.textAlign, Y(r.color), r.borderTopStyle, r.borderTopColor, r.borderTopWidth, r.borderRightStyle, r.borderRightColor, r.borderRightWidth, r.borderLeftStyle, r.borderLeftColor, r.borderLeftWidth, r.borderBottomStyle, r.borderBottomColor, r.borderBottomWidth, r.fontFamily, r.fontWeight, r.fontSize, r.fontPalette, r.direction;
          let g = null;
          r.borderBottomWidth !== "0px" && (g || (g = {}), g.bottom = {
            style: "thin",
            color: r.borderBottomColor
          }), r.borderTopWidth !== "0px" && (g || (g = {}), g.top = {
            style: "thin",
            color: r.borderTopColor
          }), r.borderLeftWidth !== "0px" && (g || (g = {}), g.left = {
            style: "thin",
            color: r.borderLeftColor
          }), r.borderRightWidth !== "0px" && (g || (g = {}), g.right = {
            style: "thin",
            color: r.borderRightColor
          });
          let I = {
            bold: parseInt(r.fontWeight) > 500,
            size: parseInt(
              r.fontSize.substring(0, r.fontSize.indexOf("p"))
            ),
            ...g ? { border: g } : {},
            fg: Y(r.backgroundColor),
            alignment: {
              horizontal: r.textAlign,
              vertical: "center",
              ...r.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          _.header[u + "-" + D] = I, A.push({
            // __idTableExcel: "uniqeId" + _idConter,
            label: "c" + D,
            colspan: h.getAttribute("colspan"),
            rowspan: h.getAttribute("rowspan"),
            text: h.textContent
          });
        });
      else {
        let h = {}, D = "", r = !1;
        f.length >= u && (h = f[u - 1], D = "mergeString" in h ? h.mergeString : "", r = !0);
        let g = 0;
        M.forEach((I, H) => {
          if ("c" + (H + g) in h)
            for (let $ = 0; $ <= O + 1 && "c" + (H + $) in h; $++)
              g++;
          H += g;
          let i = window.getComputedStyle(I, null);
          if (I.getAttribute("colspan") || I.getAttribute("rowspan")) {
            let $ = me(
              I.getAttribute("colspan") * 1,
              I.getAttribute("rowspan") * 1,
              H,
              O,
              h,
              I.textContent,
              D,
              h
            );
            f.length < u ? f.push(...$) : $.forEach((G, j) => {
              f.length < u + j ? f.push(...$) : f[u + j] = {
                ...f[u + j],
                ...G
              };
            }), h = $[0], D = $[0].mergeString, r = !0, console.log("*-/", [...f], $);
          } else
            r || (D += "-");
          Y(i.backgroundColor), i.textAlign, Y(i.color), i.borderTopStyle, i.borderTopColor, i.borderTopWidth, i.borderRightStyle, i.borderRightColor, i.borderRightWidth, i.borderLeftStyle, i.borderLeftColor, i.borderLeftWidth, i.borderBottomStyle, i.borderBottomColor, i.borderBottomWidth, i.fontFamily, i.fontWeight;
          let v = null;
          i.borderBottomWidth !== "0px" && (v || (v = {}), v.bottom = {
            style: "thin",
            color: i.borderBottomColor
          }), i.borderTopWidth !== "0px" && (v || (v = {}), v.top = {
            style: "thin",
            color: i.borderTopColor
          }), i.borderLeftWidth !== "0px" && (v || (v = {}), v.left = {
            style: "thin",
            color: i.borderLeftColor
          }), i.borderRightWidth !== "0px" && (v || (v = {}), v.right = {
            style: "thin",
            color: i.borderRightColor
          });
          let U = {
            bold: parseInt(i.fontWeight) > 500,
            size: parseInt(
              i.fontSize.substring(0, i.fontSize.indexOf("p"))
            ),
            ...v ? { border: v } : {},
            fg: Y(i.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: i.textAlign,
              vertical: "center",
              direction: i.direction,
              ...i.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          _.header[u + "-" + H] = U, h["c" + H] = I.textContent;
        }), f.length < u ? (console.log("pushed"), f.push(h)) : (console.log("change data"), f[u - 1] = h);
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: _.header,
    sheet: [
      {
        styleCellCondition: function(q, O, y, u, M, h) {
          return s ? h.includes(u - 1 + "-" + y) ? u - 1 + "-" + y : "" : null;
        },
        data: f,
        headers: A
      }
    ]
  };
}
async function ce(t) {
  let n = {
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
  }, s = [
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
  t.numberOfColumn && t.numberOfColumn > 25 && (s = re(s, t.numberOfColumn));
  const A = (await import("./jszip.min-e651e8fb.mjs").then((l) => l.j)).default;
  var f = new A();
  const _ = t.sheet.length;
  var p = f.folder("xl");
  t.styles || (t.styles = {}), t.addDefaultTitleStyle && (t.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const B = Object.keys(t.styles);
  let q = B.reduce(
    (l, e, m) => {
      const o = t.styles[e], F = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      o.fg && (F.fillIndex = l.fill.count, l.fill.count++, l.fill.value = l.fill.value + '<fill><patternFill patternType="solid">' + (o.fg ? '<fgColor rgb="' + o.fg.replace("#", "") + '" />' : "") + "</patternFill></fill>"), (o.fontColor || o.fontFamily || o.size || o.bold || o.italic || o.underline || o.doubleUnderline) && (F.fontIndex = l.font.count, l.font.count++, l.font.value = l.font.value + "<font>" + (o.bold ? "<b/>" : "") + (o.italic ? "<i />" : "") + `${o.underline || o.doubleUnderline ? `<u ${o.doubleUnderline ? ' val="double" ' : ""}/>` : ""}` + (o.size ? '<sz val="' + o.size + '" />' : "") + (o.fontColor ? '<color rgb="' + o.fontColor.replace("#", "") + '" />' : "") + (o.fontFamily ? '<name val="' + o.fontFamily + '" />' : "") + "</font>");
      let X = "/>";
      o.alignment && (o.alignment.rtl && (o.alignment.readingOrder = 2), delete o.alignment.rtl, o.alignment.ltr && (o.alignment.readingOrder = 1), delete o.alignment.ltr, X = ' applyAlignment="1"><alignment ' + Object.keys(o.alignment).reduce((k, V) => k + " " + V + '="' + o.alignment[V] + '" ', "") + " /></xf>");
      const d = o.border;
      let z = "";
      if (typeof d == "object" && ((d.left || d.full) && (z += '<left style="' + (d.left || d.full).style + '"><color rgb="' + (d.left || d.full).color.replace("#", "") + '" /></left>'), (d.right || d.full) && (z += '<right style="' + (d.right || d.full).style + '"><color rgb="' + (d.right || d.full).color.replace("#", "") + '" /></right>'), (d.top || d.full) && (z += '<top style="' + (d.top || d.full).style + '"><color rgb="' + (d.top || d.full).color.replace("#", "") + '" /></top>'), (d.bottom || d.full) && (z += '<bottom style="' + (d.bottom || d.full).style + '"><color rgb="' + (d.bottom || d.full).color.replace("#", "") + '" /></bottom>'), F.borderIndex = l.border.count, l.border.count++, l.border.value += "<border>" + z + "<diagonal /></border>"), o.format) {
        const k = n[o.format];
        k && (F.formatIndex = k.key, "value" in k && (l.format.count++, l.format.value += k.value));
      }
      return l.cell.value = l.cell.value + '<xf numFmtId="' + F.formatIndex + '" fontId="' + F.fontIndex + '" fillId="' + F.fillIndex + '" borderId="' + F.borderIndex + '" xfId="0"' + (F.borderIndex > 0 ? ' applyBorder="1" ' : "") + (F.fillIndex > 0 ? ' applyFill="1" ' : "") + (F.fontIndex >= 0 ? ' applyFont="1" ' : "") + (F.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + X, t.styles[e].index = l.cell.count, l.cell.count++, l;
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
  p == null || p.file("styles.xml", se(q));
  var O = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let y = "", u = 0, M = "", h = "", D = {};
  const r = {};
  let g = "", I = 4, H = !1;
  for (let l = 0; l < _; l++) {
    const e = t.sheet[l];
    let m = e.shiftTop ? e.shiftTop : 1, o = "", F = "", X = "", d = [], z = [], k = {};
    const V = e.headers.length;
    if (Array.isArray(e.headers) && V) {
      let N = "";
      if (e.title) {
        const a = e.title, c = a.shiftTop ? a.shiftTop : 0, T = e.shiftLeft ? e.shiftLeft : 0, S = a.shiftLeft ? a.shiftLeft + T : T, C = a.consommeRow ? a.consommeRow - 1 : 1, Z = a.consommeCol ? a.consommeCol : V, Q = C == 0 && typeof a.height == "number" ? ' ht="' + a.height + '" customHeight="1" ' : "", x = a.styleId ? a.styleId : "titleStyle", L = s[S] + "" + (m + c);
        e.merges || (e.merges = []), e.merges.push(
          L + ":" + s[S + Z - 1] + (m + C + c)
        ), typeof a.text == "string" && (N += '<row r="' + (m + c) + '" ' + Q + ' spans="1:' + (S + Z - 1) + '">', N += '<c r="' + L + '" ' + (t.styles[x] ? ' s="' + t.styles[x].index + '" ' : "") + ' t="s"><v>' + u + "</v></c>", N += "</row>", u++, D[a.text] = a.text, y += "<si><t>" + a.text + "</t></si>"), m += c + C + 1;
      }
      let E = e.headerStyleKey ? e.headerStyleKey : null, J = 0;
      if (typeof e.shiftLeft == "number" && (J = e.shiftLeft), e.headers.forEach((a, c) => {
        if (J && (c += J), a.formula && z.push(c), d.push(a.label), e.mergeRowDataCondition && typeof e.mergeRowDataCondition == "function" && e.mergeRowDataCondition(
          a,
          null,
          c,
          !0
        ) === !0 && (k[s[c]] = {
          inProgress: !0,
          start: m
        }), e.styleCellCondition && typeof e.styleCellCondition == "function" && (E = e.styleCellCondition(
          a,
          a,
          c,
          m,
          !0,
          B
        ) || E), a.size && a.size > 0 && (F += '<col min="' + (c + 1) + '" max="' + (c + 1) + '" width="' + a.size + '" customWidth="1" />'), e.withoutHeader)
          return;
        const T = s[c] + "" + m, S = e.formula && e.formula[T];
        S ? (o += ee(
          T,
          S,
          t.styles
        ).cell, delete e.formula[T]) : (o += '<c r="' + s[c] + m + '" ' + (E && t.styles && t.styles[E] ? ' s="' + t.styles[E].index + '" ' : "") + ' t="s"><v>' + u + "</v></c>", y += "<si><t>" + a.text + "</t></si>", D[a.text] = a.text, u++);
      }), e.withoutHeader ? o += N : (o = N + '<row r="' + m + '" spans="1:' + V + '" ' + (e.headerHeight ? 'ht="' + e.headerHeight + '" customHeight="1"' : "") + (e.headerRowOption ? Object.keys(e.headerRowOption).reduce((a, c) => a + " " + c + '="' + e.headerRowOption[c] + '" ', "  ") : "") + ">" + o + "</row>", m++), Array.isArray(e.data)) {
        const a = t.mapSheetDataOption && t.mapSheetDataOption.outlineLevel ? t.mapSheetDataOption.outlineLevel : "outlineLevel", c = t.mapSheetDataOption && t.mapSheetDataOption.hidden ? t.mapSheetDataOption.hidden : "hidden", T = t.mapSheetDataOption && t.mapSheetDataOption.height ? t.mapSheetDataOption.height : "height", S = e.data.length;
        e.data.forEach((C, Z) => {
          if (C.mergeType)
            for (let x = 0; x < C.mergeType.length; x++) {
              const L = C.mergeType[x], w = C.mergeStart[x], R = C.mergeValue[l];
              let P = "";
              L == "both" ? P = s[w] + "" + m + ":" + s[w + R[1]] + (m + R[0]) : L == "col" ? P = s[w] + "" + m + ":" + s[w + R[0]] + m : P = s[w] + "" + m + ":" + s[w] + (m + R[0]), e.merges || (e.merges = []), e.merges.push(P);
            }
          const Q = C.rowStyle;
          o += '<row r="' + m + '" spans="1:' + V + '" ' + (T in C ? 'ht="' + C[T] + '" customHeight="1"' : "") + (a in C ? ' outlineLevel="' + C[a] + '"' : "") + (c in C ? ' hidden="' + C[c] + '"' : "") + " >", d.forEach((x, L) => {
            J && (L += J);
            const w = C[x];
            let R = Q;
            if (e.styleCellCondition && typeof e.styleCellCondition == "function" && (R = e.styleCellCondition(
              w,
              C,
              L,
              m,
              !1,
              B
            ) || Q), e.mergeRowDataCondition && typeof e.mergeRowDataCondition == "function") {
              let P = e.mergeRowDataCondition(
                w,
                x,
                L,
                !1
              );
              const W = s[L];
              let K = k[W];
              P === !0 ? (!K || K && !K.inProgress) && (k[W] = {
                inProgress: !0,
                start: m
              }) : K && K.inProgress && (e.merges ? e.merges.push(
                W + K.start + ":" + W + (m - 1)
              ) : e.merges = [
                W + K.start + ":" + W + (m - 1)
              ], k[W] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof w < "u") {
              const P = s[L] + "" + m, W = e.formula && e.formula[P];
              W ? (o += ee(P, W).cell, delete e.formula[P]) : typeof w == "string" ? (o += '<c r="' + s[L] + m + '" t="s" ' + (R && t.styles && t.styles[R] ? 's="' + t.styles[R].index + '"' : "") + "><v>" + u + "</v></c>", y += "<si><t>" + w + "</t></si>", D[w] = w, u++) : o += '<c r="' + s[L] + m + '" ' + (R && t.styles && t.styles[R] ? 's="' + t.styles[R].index + '"' : "") + "><v>" + w + "</v></c>";
            }
          }), S - 1 == Z && Object.keys(k).forEach((x) => {
            k[x].inProgress && (e.merges ? e.merges.push(
              x + k[x].start + ":" + x + m
            ) : e.merges = [
              x + k[x].start + ":" + x + m
            ]);
          }), m++, o += "</row>";
        }), e.sortAndfilter && (e.sortAndfilter.mode == "all" ? X += '<autoFilter ref="A1:' + s[V - 1] + (m - 1) + '" />' : typeof e.sortAndfilter.ref == "string" && e.sortAndfilter.ref.length > 0 && (X += '<autoFilter ref="' + e.sortAndfilter.ref + '" />'));
      }
      if (z.length > 0 && (e.formula || (e.formula = {}), z.forEach((a) => {
        const c = e.headers[a];
        e.formula[s[a] + "" + m] = {
          start: e.withoutHeader ? s[a] + "1" : s[a] + "2",
          end: s[a] + "" + (m - 1),
          type: c.formula.type,
          ...c.formula.styleId ? { styleId: c.formula.styleId } : {}
        };
      })), e.formula) {
        const a = Object.keys(e.formula);
        if (a.length) {
          let c = {};
          a.forEach((T) => {
            const S = ee(T, e.formula[T], t.styles);
            c[S.row] ? c[S.row] += S.cell : c[S.row] = S.cell;
          }), Object.keys(c).forEach((T) => {
            const S = c[T];
            o += '<row r="' + T + '" spans="1:' + V + '"  >' + S + "</row>";
          });
        }
      }
    }
    l > 0 && (O += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (l + 1) + '.xml" />');
    const oe = e.name ? e.name : "sheet" + (l + 1), ae = e.state ? e.state : "visible";
    M += '<sheet state="' + ae + '" name="' + oe + '" sheetId="' + (l + 1) + '" r:id="rId' + (I + 1) + '" />', h += '<Relationship Id="rId' + (I + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (l + 1) + '.xml" />', g += "<vt:lpstr>" + ("sheet" + (l + 1)) + "</vt:lpstr>", H = H || !!e.selected;
    const le = e.sortAndfilter ? 'filterMode="1"' : "";
    r["sheet" + (l + 1)] = {
      indexId: I + 1,
      key: "sheet" + (l + 1),
      sheetName: oe,
      sheetDataString: o,
      sheetSizeString: F.length > 0 ? "<cols>" + F + "</cols>" : "",
      protectionOption: e.protectionOption ? Object.keys(e.protectionOption).reduce((N, E) => N + " " + E + '="' + e.protectionOption[E] + '" ', "<sheetProtection ") + "/>" : "",
      merges: e.merges ? e.merges.reduce((N, E) => N += ' <mergeCell ref="' + E + '" />', '<mergeCells count="' + e.merges.length + '">') + " </mergeCells>" : "",
      selectedView: e.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: X,
      tabColor: e.tabColor ? '<sheetPr codeName="' + ("Sheet" + (l + 1)) + '" ' + le + ' ><tabColor rgb="' + e.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + le + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, I++;
  }
  let i = Object.keys(r);
  f.file("[Content_Types].xml", ne(O));
  var v = f.folder("_rels");
  v == null || v.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  var U = f.folder("docProps");
  U == null || U.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (t.creator ? "<dc:creator>" + t.creator + "</dc:creator>" : "") + (t.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + t.created + "</dcterms:created>" : "") + (t.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + t.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), U == null || U.file("app.xml", ie(_, g)), p == null || p.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + M + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), p == null || p.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (u - 1) + '" uniqueCount="' + Object.keys(D).length + '"> ' + y + "</sst>"
  );
  var $ = p == null ? void 0 : p.folder("_rels");
  $ == null || $.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + h + " </Relationships>"
  );
  var G = p == null ? void 0 : p.folder("theme");
  G == null || G.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  var j = p == null ? void 0 : p.folder("worksheets");
  if (i.forEach((l) => {
    const e = r[l];
    j == null || j.file(
      e.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + e.tabColor + e.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + e.sheetSizeString + "<sheetData>" + e.sheetDataString + "</sheetData>" + e.protectionOption + e.sheetSortFilter + e.merges + "</worksheet>"
    );
  }), t.backend)
    return f.generateAsync({
      type: t.generateType ? t.generateType : "nodebuffer"
    }).then((l) => l);
  if (t.notSave)
    return f.generateAsync({ type: "blob" }).then((l) => l.slice(
      0,
      l.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  f.generateAsync({ type: "blob" }).then(function(l) {
    import("./FileSaver.min-3b84b3f2.mjs").then((e) => e.F).then((e) => {
      const { saveAs: m } = e;
      m(
        l,
        (t.fileName ? t.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function pe(t, n, s) {
  const b = fe(
    t,
    n,
    s
  );
  return ce(b);
}
export {
  pe as convertTableToExcel,
  ce as generateExcel
};
