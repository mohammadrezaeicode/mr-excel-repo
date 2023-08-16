function re(e, n, a = "", h = [], F = 0) {
  const u = e.length;
  for (let k = 0; k < u; k++)
    h.push(a + e[k]);
  return n < h.length ? h : re(
    e,
    n,
    h[F + 1],
    h,
    F + 1
  );
}
function ie(e) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (e.format.count > 0 ? '<numFmts count="' + e.format.count + '">' + e.format.value + "</numFmts>" : "") + ' <fonts count="' + e.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + e.font.value + ' </fonts> <fills count="' + e.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + e.fill.value + ' </fills> <borders count="' + e.border.count + '"> <border />' + e.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + e.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + e.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> <dxfs count="0" /></styleSheet>';
}
function me(e) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default ContentType="application/xml" Extension="xml" /> <Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels" />` + e + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" /> <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function ce(e, n) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + e + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + e + '" baseType="lpstr"> ' + n + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function te(e, n, a) {
  let h = e.replace(/[0-9]/g, ""), F = parseInt(e.substr(h.length)), u = '<c r="' + e + '" ' + (a && typeof n.styleId == "string" && a[n.styleId] ? 's="' + a[n.styleId].index + '" ' : "") + ">     <f>" + n.type + "(" + n.start + ":" + n.end + ")</f> </c>";
  return {
    column: h,
    row: F,
    cell: u
  };
}
function se(e) {
  return e.replace(/ /g, "");
}
function oe(e) {
  e = Number(e);
  var n = e.toString(16);
  return n.length == 1 ? "0" + n : n;
}
function E(e) {
  e = se(e);
  let n = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), a = n.reduce((h, F) => h && !Number.isNaN(Number(F)), !0);
  return n.length == 4 && n[3] == "0" && !a ? null : (oe(n[0]) + oe(n[1]) + oe(n[2])).toUpperCase();
}
function J(e, n) {
  if (typeof e > "u" || e === null)
    return null;
  if (!n) {
    let a = se(e);
    a.indexOf("var(") == 0 && a.lastIndexOf(")") == a.length - 1 && (console.log("in"), a = a.substring(4, a.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(
      a
    ));
  }
  if (e.indexOf("rgb") >= 0) {
    const a = E(e);
    e = a || "";
  }
  return e;
}
function fe(e, n, a, h, F, u, k, s) {
  let q = [], R = "both", G = [];
  !n || n === 0 ? (n = 1, R = "col") : G.push(n - 1), !e || e === 0 ? (e = 0, R = "row") : G.push(e - 1);
  let w = F || {};
  w.mergeType = s && s.mergeType ? [...s.mergeType, R] : [R], w.mergeValue = s && s.mergeValue ? [...s.mergeValue, G] : [G], w.mergeStart = s && s.mergeStart ? [...s.mergeStart, a] : [a];
  for (let I = 0; I < n; I++) {
    let P = e;
    for (let _ = 0; _ < h; _++)
      a <= _ ? P >= 1 ? (w["c" + _] = u, u = "", k += "*", P--) : n >= 2 && a == _ ? (w["c" + _] = u, u = "", k += "+") : k += "-" : I > 0 && (k += "-");
    q.push({
      ...w,
      mergeString: k
    }), w = {}, k = "";
  }
  return q;
}
function pe(e, n, a, h, F) {
  var w;
  if (console.log(arguments), !e && !n)
    throw "Error: One of the function inputs is required.";
  let u;
  e ? u = (w = document.querySelector(e)) == null ? void 0 : w.querySelectorAll("tr") : u = n == null ? void 0 : n.querySelectorAll("tr");
  let k = [], s = [], q = {
    header: {},
    rows: []
  }, R = 40;
  if (u) {
    let I = !1, P = 0;
    u.forEach((_, g) => {
      var U = [].slice.call(_.children);
      const $ = window.getComputedStyle(_, null);
      let X = E($.backgroundColor);
      if (!I)
        P = U.length, I = !0, console.log(h, typeof h), typeof h == "function" ? R = h(
          Number($.height.substring(0, $.height.length - 2)),
          g,
          !0
        ) : R = Number(
          $.height.substring(0, $.height.length - 2)
        ), U.forEach((y, N) => {
          let f = window.getComputedStyle(y, null), p = null;
          f.borderBottomWidth !== "0px" && (p || (p = {}), p.bottom = {
            style: "thin",
            color: E(f.borderBottomColor)
          }), f.borderTopWidth !== "0px" && (p || (p = {}), p.top = {
            style: "thin",
            color: E(f.borderTopColor)
          }), f.borderLeftWidth !== "0px" && (p || (p = {}), p.left = {
            style: "thin",
            color: E(f.borderLeftColor)
          }), f.borderRightWidth !== "0px" && (p || (p = {}), p.right = {
            style: "thin",
            color: E(f.borderRightColor)
          });
          let S = E(f.backgroundColor);
          S || (S = X);
          let L = {
            ...S ? { fg: S } : {},
            bold: parseInt(f.fontWeight) > 500,
            size: parseInt(
              f.fontSize.substring(0, f.fontSize.indexOf("p"))
            ),
            ...p ? { border: p } : {},
            alignment: {
              horizontal: f.textAlign,
              vertical: "center",
              ...f.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          q.header[g + "-" + N] = L;
          let d;
          typeof F == "function" ? d = F(
            Number(f.width.substring(0, f.width.length - 2)),
            N
          ) : d = Number(f.width.substring(0, f.width.length - 2)) * 0.15, k.push({
            label: "c" + N,
            colspan: y.getAttribute("colspan"),
            rowspan: y.getAttribute("rowspan"),
            text: y.textContent,
            size: d
          });
        });
      else {
        let y = {}, N = "", f = !1;
        s.length >= g && (y = s[g - 1], N = "mergeString" in y ? y.mergeString : "", f = !0);
        let p = 0;
        U.forEach((S, L) => {
          if ("c" + (L + p) in y)
            for (let l = 0; l <= P + 1 && "c" + (L + l) in y; l++)
              p++;
          L += p;
          let d = window.getComputedStyle(S, null);
          if (S.getAttribute("colspan") || S.getAttribute("rowspan")) {
            let l = fe(
              S.getAttribute("colspan") * 1,
              S.getAttribute("rowspan") * 1,
              L,
              P,
              y,
              S.textContent,
              N,
              y
            );
            s.length < g ? s.push(...l) : l.forEach((v, H) => {
              s.length < g + H ? s.push(...l) : s[g + H] = {
                ...s[g + H],
                ...v
              };
            }), y = l[0], N = l[0].mergeString, f = !0;
          } else
            f || (N += "-");
          let o = null;
          d.borderBottomWidth !== "0px" && (o || (o = {}), o.bottom = {
            style: "thin",
            color: E(d.borderBottomColor)
          }), d.borderTopWidth !== "0px" && (o || (o = {}), o.top = {
            style: "thin",
            color: E(d.borderTopColor)
          }), d.borderLeftWidth !== "0px" && (o || (o = {}), o.left = {
            style: "thin",
            color: E(d.borderLeftColor)
          }), d.borderRightWidth !== "0px" && (o || (o = {}), o.right = {
            style: "thin",
            color: E(d.borderRightColor)
          });
          let t = E(d.backgroundColor);
          t || (t = X);
          let i = {
            ...t ? { fg: t } : {},
            bold: parseInt(d.fontWeight) > 500,
            size: parseInt(
              d.fontSize.substring(0, d.fontSize.indexOf("p"))
            ),
            ...o ? { border: o } : {},
            // fg: rgbToHex(styles.backgroundColor),
            // colspan: n.getAttribute("colspan"),
            // rowspan: n.getAttribute("rowspan"),
            alignment: {
              horizontal: d.textAlign,
              vertical: "center",
              direction: d.direction,
              ...d.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
            }
          };
          q.header[g + "-" + L] = i, y["c" + L] = S.textContent;
        }), console.log(h, typeof h), typeof h == "function" ? y.height = h(
          Number($.height.substring(0, $.height.length - 2)),
          g,
          !1
        ) : y.height = $.height.substring(0, $.height.length - 2), s.length < g ? s.push(y) : s[g - 1] = y;
      }
    });
  } else
    throw "Error: DOM Element Not Found";
  return {
    styles: q.header,
    sheet: [
      {
        headerHeight: R,
        styleCellCondition: function(I, P, _, g, U, $) {
          return a ? $.includes(g - 1 + "-" + _) ? g - 1 + "-" + _ : "" : null;
        },
        data: s,
        headers: k
      }
    ]
  };
}
async function he(e) {
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
  }, a = [
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
  e.numberOfColumn && e.numberOfColumn > 25 && (a = re(a, e.numberOfColumn));
  const F = (await import("./jszip.min-e651e8fb.mjs").then((o) => o.j)).default;
  var u = new F();
  const k = e.sheet.length;
  var s = u.folder("xl");
  e.styles || (e.styles = {}), e.addDefaultTitleStyle && (e.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const q = Object.keys(e.styles);
  let R = q.reduce(
    (o, t, i) => {
      const l = e.styles[t], v = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      if (l.fg) {
        let C = J(l.fg, e.backend);
        v.fillIndex = o.fill.count, o.fill.count++, o.fill.value = o.fill.value + '<fill><patternFill patternType="solid">' + (C ? '<fgColor rgb="' + C.replace("#", "") + '" />' : "") + "</patternFill></fill>";
      }
      if (l.fontColor || l.fontFamily || l.size || l.bold || l.italic || l.underline || l.doubleUnderline) {
        const C = J(l.fontColor, e.backend);
        v.fontIndex = o.font.count, o.font.count++, o.font.value = o.font.value + "<font>" + (l.bold ? "<b/>" : "") + (l.italic ? "<i />" : "") + `${l.underline || l.doubleUnderline ? `<u ${l.doubleUnderline ? ' val="double" ' : ""}/>` : ""}` + (l.size ? '<sz val="' + l.size + '" />' : "") + (C ? '<color rgb="' + C.replace("#", "") + '" />' : "") + (l.fontFamily ? '<name val="' + l.fontFamily + '" />' : "") + "</font>";
      }
      let H = "/>";
      l.alignment && (l.alignment.rtl && (l.alignment.readingOrder = 2), delete l.alignment.rtl, l.alignment.ltr && (l.alignment.readingOrder = 1), delete l.alignment.ltr, H = ' applyAlignment="1"><alignment ' + Object.keys(l.alignment).reduce((C, j) => C + " " + j + '="' + l.alignment[j] + '" ', "") + " /></xf>");
      const c = l.border;
      let W = "";
      if (typeof c == "object" && ((c.left || c.full) && (W += '<left style="' + (c.left || c.full).style + '"><color rgb="' + J(
        (c.left || c.full).color,
        e.backend
      ).replace("#", "") + '" /></left>'), (c.right || c.full) && (W += '<right style="' + (c.right || c.full).style + '"><color rgb="' + J(
        (c.right || c.full).color,
        e.backend
      ).replace("#", "") + '" /></right>'), (c.top || c.full) && (W += '<top style="' + (c.top || c.full).style + '"><color rgb="' + J(
        (c.top || c.full).color,
        e.backend
      ).replace("#", "") + '" /></top>'), (c.bottom || c.full) && (W += '<bottom style="' + (c.bottom || c.full).style + '"><color rgb="' + J(
        (c.bottom || c.full).color,
        e.backend
      ).replace("#", "") + '" /></bottom>'), v.borderIndex = o.border.count, o.border.count++, o.border.value += "<border>" + W + "<diagonal /></border>"), l.format) {
        const C = n[l.format];
        C && (v.formatIndex = C.key, "value" in C && (o.format.count++, o.format.value += C.value));
      }
      return o.cell.value = o.cell.value + '<xf numFmtId="' + v.formatIndex + '" fontId="' + v.fontIndex + '" fillId="' + v.fillIndex + '" borderId="' + v.borderIndex + '" xfId="0"' + (v.borderIndex > 0 ? ' applyBorder="1" ' : "") + (v.fillIndex > 0 ? ' applyFill="1" ' : "") + (v.fontIndex >= 0 ? ' applyFont="1" ' : "") + (v.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + H, e.styles[t].index = o.cell.count, o.cell.count++, o;
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
  s == null || s.file("styles.xml", ie(R));
  var G = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let w = "", I = 0, P = "", _ = "", g = {};
  const U = {};
  let $ = "", X = 4, y = !1;
  for (let o = 0; o < k; o++) {
    const t = e.sheet[o];
    let i = t.shiftTop ? t.shiftTop : 1, l = "", v = "", H = "", c = [], W = [], C = {};
    const j = t.headers.length;
    if (Array.isArray(t.headers) && j) {
      let K = "";
      if (t.title) {
        const r = t.title, m = r.shiftTop ? r.shiftTop : 0, O = t.shiftLeft ? t.shiftLeft : 0, T = r.shiftLeft ? r.shiftLeft + O : O, x = r.consommeRow ? r.consommeRow - 1 : 1, Q = r.consommeCol ? r.consommeCol : j, ee = x == 0 && typeof r.height == "number" ? ' ht="' + r.height + '" customHeight="1" ' : "", b = r.styleId ? r.styleId : "titleStyle", D = a[T] + "" + (i + m);
        t.merges || (t.merges = []), t.merges.push(
          D + ":" + a[T + Q - 1] + (i + x + m)
        ), typeof r.text == "string" && (K += '<row r="' + (i + m) + '" ' + ee + ' spans="1:' + (T + Q - 1) + '">', K += '<c r="' + D + '" ' + (e.styles[b] ? ' s="' + e.styles[b].index + '" ' : "") + ' t="s"><v>' + I + "</v></c>", K += "</row>", I++, g[r.text] = r.text, w += "<si><t>" + r.text + "</t></si>"), i += m + x + 1;
      }
      let B = t.headerStyleKey ? t.headerStyleKey : null, Z = 0;
      if (typeof t.shiftLeft == "number" && (Z = t.shiftLeft), t.headers.forEach((r, m) => {
        if (Z && (m += Z), r.formula && W.push(m), c.push(r.label), t.mergeRowDataCondition && typeof t.mergeRowDataCondition == "function" && t.mergeRowDataCondition(
          r,
          null,
          m,
          !0
        ) === !0 && (C[a[m]] = {
          inProgress: !0,
          start: i
        }), t.styleCellCondition && typeof t.styleCellCondition == "function" && (B = t.styleCellCondition(
          r,
          r,
          m,
          i,
          !0,
          q
        ) || B), r.size && r.size > 0 && (v += '<col min="' + (m + 1) + '" max="' + (m + 1) + '" width="' + r.size + '" customWidth="1" />'), t.withoutHeader)
          return;
        const O = a[m] + "" + i, T = t.formula && t.formula[O];
        T ? (l += te(
          O,
          T,
          e.styles
        ).cell, delete t.formula[O]) : (l += '<c r="' + a[m] + i + '" ' + (B && e.styles && e.styles[B] ? ' s="' + e.styles[B].index + '" ' : "") + ' t="s"><v>' + I + "</v></c>", w += "<si><t>" + r.text + "</t></si>", g[r.text] = r.text, I++);
      }), t.withoutHeader ? l += K : (l = K + '<row r="' + i + '" spans="1:' + j + '" ' + (t.headerHeight ? 'ht="' + t.headerHeight + '" customHeight="1"' : "") + (t.headerRowOption ? Object.keys(t.headerRowOption).reduce((r, m) => r + " " + m + '="' + t.headerRowOption[m] + '" ', "  ") : "") + ">" + l + "</row>", i++), Array.isArray(t.data)) {
        const r = e.mapSheetDataOption && e.mapSheetDataOption.outlineLevel ? e.mapSheetDataOption.outlineLevel : "outlineLevel", m = e.mapSheetDataOption && e.mapSheetDataOption.hidden ? e.mapSheetDataOption.hidden : "hidden", O = e.mapSheetDataOption && e.mapSheetDataOption.height ? e.mapSheetDataOption.height : "height", T = t.data.length;
        t.data.forEach((x, Q) => {
          if (x.mergeType)
            for (let b = 0; b < x.mergeType.length; b++) {
              const D = x.mergeType[b], A = x.mergeStart[b], M = x.mergeValue[o];
              let V = "";
              D == "both" ? V = a[A] + "" + i + ":" + a[A + M[1]] + (i + M[0]) : D == "col" ? V = a[A] + "" + i + ":" + a[A + M[0]] + i : V = a[A] + "" + i + ":" + a[A] + (i + M[0]), t.merges || (t.merges = []), t.merges.push(V);
            }
          const ee = x.rowStyle;
          l += '<row r="' + i + '" spans="1:' + j + '" ' + (O in x ? 'ht="' + x[O] + '" customHeight="1"' : "") + (r in x ? ' outlineLevel="' + x[r] + '"' : "") + (m in x ? ' hidden="' + x[m] + '"' : "") + " >", c.forEach((b, D) => {
            Z && (D += Z);
            const A = x[b];
            let M = ee;
            if (t.styleCellCondition && typeof t.styleCellCondition == "function" && (M = t.styleCellCondition(
              A,
              x,
              D,
              i,
              !1,
              q
            ) || ee), t.mergeRowDataCondition && typeof t.mergeRowDataCondition == "function") {
              let V = t.mergeRowDataCondition(
                A,
                b,
                D,
                !1
              );
              const z = a[D];
              let Y = C[z];
              V === !0 ? (!Y || Y && !Y.inProgress) && (C[z] = {
                inProgress: !0,
                start: i
              }) : Y && Y.inProgress && (t.merges ? t.merges.push(
                z + Y.start + ":" + z + (i - 1)
              ) : t.merges = [
                z + Y.start + ":" + z + (i - 1)
              ], C[z] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof A < "u") {
              const V = a[D] + "" + i, z = t.formula && t.formula[V];
              z ? (l += te(V, z).cell, delete t.formula[V]) : typeof A == "string" ? (l += '<c r="' + a[D] + i + '" t="s" ' + (M && e.styles && e.styles[M] ? 's="' + e.styles[M].index + '"' : "") + "><v>" + I + "</v></c>", w += "<si><t>" + A + "</t></si>", g[A] = A, I++) : l += '<c r="' + a[D] + i + '" ' + (M && e.styles && e.styles[M] ? 's="' + e.styles[M].index + '"' : "") + "><v>" + A + "</v></c>";
            }
          }), T - 1 == Q && Object.keys(C).forEach((b) => {
            C[b].inProgress && (t.merges ? t.merges.push(
              b + C[b].start + ":" + b + i
            ) : t.merges = [
              b + C[b].start + ":" + b + i
            ]);
          }), i++, l += "</row>";
        }), t.sortAndfilter && (t.sortAndfilter.mode == "all" ? H += '<autoFilter ref="A1:' + a[j - 1] + (i - 1) + '" />' : typeof t.sortAndfilter.ref == "string" && t.sortAndfilter.ref.length > 0 && (H += '<autoFilter ref="' + t.sortAndfilter.ref + '" />'));
      }
      if (W.length > 0 && (t.formula || (t.formula = {}), W.forEach((r) => {
        const m = t.headers[r];
        t.formula[a[r] + "" + i] = {
          start: t.withoutHeader ? a[r] + "1" : a[r] + "2",
          end: a[r] + "" + (i - 1),
          type: m.formula.type,
          ...m.formula.styleId ? { styleId: m.formula.styleId } : {}
        };
      })), t.formula) {
        const r = Object.keys(t.formula);
        if (r.length) {
          let m = {};
          r.forEach((O) => {
            const T = te(O, t.formula[O], e.styles);
            m[T.row] ? m[T.row] += T.cell : m[T.row] = T.cell;
          }), Object.keys(m).forEach((O) => {
            const T = m[O];
            l += '<row r="' + O + '" spans="1:' + j + '"  >' + T + "</row>";
          });
        }
      }
    }
    o > 0 && (G += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (o + 1) + '.xml" />');
    const le = t.name ? t.name : "sheet" + (o + 1), ne = t.state ? t.state : "visible";
    P += '<sheet state="' + ne + '" name="' + le + '" sheetId="' + (o + 1) + '" r:id="rId' + (X + 1) + '" />', _ += '<Relationship Id="rId' + (X + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (o + 1) + '.xml" />', $ += "<vt:lpstr>" + ("sheet" + (o + 1)) + "</vt:lpstr>", y = y || !!t.selected;
    const ae = t.sortAndfilter ? 'filterMode="1"' : "";
    U["sheet" + (o + 1)] = {
      indexId: X + 1,
      key: "sheet" + (o + 1),
      sheetName: le,
      sheetDataString: l,
      sheetSizeString: v.length > 0 ? "<cols>" + v + "</cols>" : "",
      protectionOption: t.protectionOption ? Object.keys(t.protectionOption).reduce((K, B) => K + " " + B + '="' + t.protectionOption[B] + '" ', "<sheetProtection ") + "/>" : "",
      merges: t.merges ? t.merges.reduce((K, B) => K += ' <mergeCell ref="' + B + '" />', '<mergeCells count="' + t.merges.length + '">') + " </mergeCells>" : "",
      selectedView: t.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: H,
      tabColor: t.tabColor ? '<sheetPr codeName="' + ("Sheet" + (o + 1)) + '" ' + ae + ' ><tabColor rgb="' + t.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + ae + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, X++;
  }
  let N = Object.keys(U);
  u.file("[Content_Types].xml", me(G));
  var f = u.folder("_rels");
  f == null || f.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  var p = u.folder("docProps");
  p == null || p.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (e.creator ? "<dc:creator>" + e.creator + "</dc:creator>" : "") + (e.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + e.created + "</dcterms:created>" : "") + (e.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + e.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), p == null || p.file("app.xml", ce(k, $)), s == null || s.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + P + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), s == null || s.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (I - 1) + '" uniqueCount="' + Object.keys(g).length + '"> ' + w + "</sst>"
  );
  var S = s == null ? void 0 : s.folder("_rels");
  S == null || S.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + _ + " </Relationships>"
  );
  var L = s == null ? void 0 : s.folder("theme");
  L == null || L.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  var d = s == null ? void 0 : s.folder("worksheets");
  if (N.forEach((o) => {
    const t = U[o];
    d == null || d.file(
      t.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + t.tabColor + t.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + t.sheetSizeString + "<sheetData>" + t.sheetDataString + "</sheetData>" + t.protectionOption + t.sheetSortFilter + t.merges + "</worksheet>"
    );
  }), e.backend)
    return u.generateAsync({
      type: e.generateType ? e.generateType : "nodebuffer"
    }).then((o) => o);
  if (e.notSave)
    return u.generateAsync({ type: "blob" }).then((o) => o.slice(
      0,
      o.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  u.generateAsync({ type: "blob" }).then(function(o) {
    import("./FileSaver.min-3b84b3f2.mjs").then((t) => t.F).then((t) => {
      const { saveAs: i } = t;
      i(
        o,
        (e.fileName ? e.fileName : "tableRecord") + ".xlsx"
      );
    });
  });
}
function ue(e, n, a, h, F) {
  const u = pe(
    e,
    n,
    a,
    h,
    F
  );
  return he(u);
}
export {
  ue as convertTableToExcel,
  he as generateExcel
};
