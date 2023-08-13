function ee(t, u, i = "", _ = [], $ = 0) {
  const g = t.length;
  for (let D = 0; D < g; D++)
    _.push(i + t[D]);
  return u < _.length ? _ : ee(
    t,
    u,
    _[$ + 1],
    _,
    $ + 1
  );
}
function le(t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (t.format.count > 0 ? '<numFmts count="' + t.format.count + '">' + t.format.value + "</numFmts>" : "") + ' <fonts count="' + t.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + t.font.value + ' </fonts> <fills count="' + t.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + t.fill.value + ' </fills> <borders count="' + t.border.count + '"> <border />' + t.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + t.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + t.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> <dxfs count="0" /></styleSheet>';
}
function se(t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default ContentType="application/xml" Extension="xml" /> <Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels" />` + t + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" /> <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function re(t, u) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + t + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + t + '" baseType="lpstr"> ' + u + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function K(t, u, i) {
  let _ = t.replace(/[0-9]/g, ""), $ = parseInt(t.substr(_.length)), g = '<c r="' + t + '" ' + (i && typeof u.styleId == "string" && i[u.styleId] ? 's="' + i[u.styleId].index + '" ' : "") + ">     <f>" + u.type + "(" + u.start + ":" + u.end + ")</f> </c>";
  return {
    column: _,
    row: $,
    cell: g
  };
}
async function ne(t) {
  let u = {
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
  }, i = [
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
  t.numberOfColumn && t.numberOfColumn > 25 && (i = ee(i, t.numberOfColumn));
  const $ = (await import("./jszip.min-e651e8fb.mjs").then((o) => o.j)).default;
  var g = new $();
  const D = t.sheet.length;
  var m = g.folder("xl");
  t.styles || (t.styles = {}), t.addDefaultTitleStyle && (t.styles.titleStyle = {
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  });
  const N = Object.keys(t.styles);
  let te = N.reduce(
    (o, e, n) => {
      const a = t.styles[e], c = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      a.fg && (c.fillIndex = o.fill.count, o.fill.count++, o.fill.value = o.fill.value + '<fill><patternFill patternType="solid">' + (a.fg ? '<fgColor rgb="' + a.fg.replace("#", "") + '" />' : "") + "</patternFill></fill>"), (a.fontColor || a.fontFamily || a.size || a.bold || a.italic || a.underline || a.doubleUnderline) && (c.fontIndex = o.font.count, o.font.count++, o.font.value = o.font.value + "<font>" + (a.bold ? "<b/>" : "") + (a.italic ? "<i />" : "") + `${a.underline || a.doubleUnderline ? `<u ${a.doubleUnderline ? ' val="double" ' : ""}/>` : ""}` + (a.size ? '<sz val="' + a.size + '" />' : "") + (a.fontColor ? '<color rgb="' + a.fontColor.replace("#", "") + '" />' : "") + (a.fontFamily ? '<name val="' + a.fontFamily + '" />' : "") + "</font>");
      let A = "/>";
      a.alignment && (a.alignment.rtl && (a.alignment.readingOrder = 2), delete a.alignment.rtl, a.alignment.ltr && (a.alignment.readingOrder = 1), delete a.alignment.ltr, A = ' applyAlignment="1"><alignment ' + Object.keys(a.alignment).reduce((p, b) => p + " " + b + '="' + a.alignment[b] + '" ', "") + " /></xf>");
      const r = a.border;
      let F = "";
      if (typeof r == "object" && ((r.left || r.full) && (F += '<left style="' + (r.left || r.full).style + '"><color rgb="' + (r.left || r.full).color.replace("#", "") + '" /></left>'), (r.right || r.full) && (F += '<right style="' + (r.right || r.full).style + '"><color rgb="' + (r.right || r.full).color.replace("#", "") + '" /></right>'), (r.top || r.full) && (F += '<top style="' + (r.top || r.full).style + '"><color rgb="' + (r.top || r.full).color.replace("#", "") + '" /></top>'), (r.bottom || r.full) && (F += '<bottom style="' + (r.bottom || r.full).style + '"><color rgb="' + (r.bottom || r.full).color.replace("#", "") + '" /></bottom>'), c.borderIndex = o.border.count, o.border.count++, o.border.value += "<border>" + F + "<diagonal /></border>"), a.format) {
        const p = u[a.format];
        p && (c.formatIndex = p.key, "value" in p && (o.format.count++, o.format.value += p.value));
      }
      return o.cell.value = o.cell.value + '<xf numFmtId="' + c.formatIndex + '" fontId="' + c.fontIndex + '" fillId="' + c.fillIndex + '" borderId="' + c.borderIndex + '" xfId="0"' + (c.borderIndex > 0 ? ' applyBorder="1" ' : "") + (c.fillIndex > 0 ? ' applyFill="1" ' : "") + (c.fontIndex >= 0 ? ' applyFont="1" ' : "") + (c.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + A, t.styles[e].index = o.cell.count, o.cell.count++, o;
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
  m == null || m.file("styles.xml", le(te));
  var G = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let q = "", w = 0, W = "", X = "", P = {};
  const B = {};
  let Y = "", R = 4, J = !1;
  for (let o = 0; o < D; o++) {
    const e = t.sheet[o];
    let n = e.shiftTop ? e.shiftTop : 1, a = "", c = "", A = "", r = [], F = [], p = {};
    const b = e.headers.length;
    if (Array.isArray(e.headers) && b) {
      let k = "";
      if (e.title) {
        const l = e.title, s = l.shiftTop ? l.shiftTop : 0, h = e.shiftLeft ? e.shiftLeft : 0, f = l.shiftLeft ? l.shiftLeft + h : h, d = l.consommeRow ? l.consommeRow - 1 : 1, E = l.consommeCol ? l.consommeCol : b, H = d == 0 && typeof l.height == "number" ? ' ht="' + l.height + '" customHeight="1" ' : "", y = l.styleId ? l.styleId : "titleStyle", v = i[f] + "" + (n + s);
        e.merges || (e.merges = []), e.merges.push(
          v + ":" + i[f + E - 1] + (n + d + s)
        ), typeof l.text == "string" && (k += '<row r="' + (n + s) + '" ' + H + ' spans="1:' + (f + E - 1) + '">', k += '<c r="' + v + '" ' + (t.styles[y] ? ' s="' + t.styles[y].index + '" ' : "") + ' t="s"><v>' + w + "</v></c>", k += "</row>", w++, P[l.text] = l.text, q += "<si><t>" + l.text + "</t></si>"), n += s + d + 1;
      }
      let C = e.headerStyleKey ? e.headerStyleKey : null, M = 0;
      if (typeof e.shiftLeft == "number" && (M = e.shiftLeft), e.headers.forEach((l, s) => {
        if (M && (s += M), l.formula && F.push(s), r.push(l.label), e.mergeRowDataCondition && typeof e.mergeRowDataCondition == "function" && e.mergeRowDataCondition(
          l,
          null,
          s,
          !0
        ) === !0 && (p[i[s]] = {
          inProgress: !0,
          start: n
        }), e.styleCellCondition && typeof e.styleCellCondition == "function" && (C = e.styleCellCondition(
          l,
          l,
          s,
          n,
          !0,
          N
        ) || C), l.size && l.size > 0 && (c += '<col min="' + (s + 1) + '" max="' + (s + 1) + '" width="' + l.size + '" customWidth="1" />'), e.withoutHeader)
          return;
        const h = i[s] + "" + n, f = e.formula && e.formula[h];
        f ? (a += K(
          h,
          f,
          t.styles
        ).cell, delete e.formula[h]) : (a += '<c r="' + i[s] + n + '" ' + (C && t.styles && t.styles[C] ? ' s="' + t.styles[C].index + '" ' : "") + ' t="s"><v>' + w + "</v></c>", q += "<si><t>" + l.text + "</t></si>", P[l.text] = l.text, w++);
      }), e.withoutHeader ? a += k : (a = k + '<row r="' + n + '" spans="1:' + b + '" ' + (e.headerHeight ? 'ht="' + e.headerHeight + '" customHeight="1"' : "") + (e.headerRowOption ? Object.keys(e.headerRowOption).reduce((l, s) => l + " " + s + '="' + e.headerRowOption[s] + '" ', "  ") : "") + ">" + a + "</row>", n++), Array.isArray(e.data)) {
        const l = t.mapSheetDataOption && t.mapSheetDataOption.outlineLevel ? t.mapSheetDataOption.outlineLevel : "outlineLevel", s = t.mapSheetDataOption && t.mapSheetDataOption.hidden ? t.mapSheetDataOption.hidden : "hidden", h = t.mapSheetDataOption && t.mapSheetDataOption.height ? t.mapSheetDataOption.height : "height", f = e.data.length;
        e.data.forEach((d, E) => {
          const H = d.rowStyle;
          a += '<row r="' + n + '" spans="1:' + b + '" ' + (h in d ? 'ht="' + d[h] + '" customHeight="1"' : "") + (l in d ? ' outlineLevel="' + d[l] + '"' : "") + (s in d ? ' hidden="' + d[s] + '"' : "") + " >", r.forEach((y, v) => {
            M && (v += M);
            const S = d[y];
            let I = H;
            if (e.styleCellCondition && typeof e.styleCellCondition == "function" && (I = e.styleCellCondition(
              S,
              d,
              v,
              n,
              !1,
              N
            ) || H), e.mergeRowDataCondition && typeof e.mergeRowDataCondition == "function") {
              let L = e.mergeRowDataCondition(
                S,
                y,
                v,
                !1
              );
              const x = i[v];
              let T = p[x];
              L === !0 ? (!T || T && !T.inProgress) && (p[x] = {
                inProgress: !0,
                start: n
              }) : T && T.inProgress && (e.merges ? e.merges.push(
                x + T.start + ":" + x + (n - 1)
              ) : e.merges = [
                x + T.start + ":" + x + (n - 1)
              ], p[x] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof S < "u") {
              const L = i[v] + "" + n, x = e.formula && e.formula[L];
              x ? (a += K(L, x).cell, delete e.formula[L]) : typeof S == "string" ? (a += '<c r="' + i[v] + n + '" t="s" ' + (I && t.styles && t.styles[I] ? 's="' + t.styles[I].index + '"' : "") + "><v>" + w + "</v></c>", q += "<si><t>" + S + "</t></si>", P[S] = S, w++) : a += '<c r="' + i[v] + n + '" ' + (I && t.styles && t.styles[I] ? 's="' + t.styles[I].index + '"' : "") + "><v>" + S + "</v></c>";
            }
          }), f - 1 == E && Object.keys(p).forEach((y) => {
            p[y].inProgress && (e.merges ? e.merges.push(
              y + p[y].start + ":" + y + n
            ) : e.merges = [
              y + p[y].start + ":" + y + n
            ]);
          }), n++, a += "</row>";
        }), e.sortAndfilter && (e.sortAndfilter.mode == "all" ? A += '<autoFilter ref="A1:' + i[b - 1] + (n - 1) + '" />' : typeof e.sortAndfilter.ref == "string" && e.sortAndfilter.ref.length > 0 && (A += '<autoFilter ref="' + e.sortAndfilter.ref + '" />'));
      }
      if (F.length > 0 && (e.formula || (e.formula = {}), F.forEach((l) => {
        const s = e.headers[l];
        e.formula[i[l] + "" + n] = {
          start: e.withoutHeader ? i[l] + "1" : i[l] + "2",
          end: i[l] + "" + (n - 1),
          type: s.formula.type,
          ...s.formula.styleId ? { styleId: s.formula.styleId } : {}
        };
      })), e.formula) {
        const l = Object.keys(e.formula);
        if (l.length) {
          let s = {};
          l.forEach((h) => {
            const f = K(h, e.formula[h], t.styles);
            s[f.row] ? s[f.row] += f.cell : s[f.row] = f.cell;
          }), Object.keys(s).forEach((h) => {
            const f = s[h];
            a += '<row r="' + h + '" spans="1:' + b + '"  >' + f + "</row>";
          });
        }
      }
    }
    o > 0 && (G += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (o + 1) + '.xml" />');
    const Z = e.name ? e.name : "sheet" + (o + 1), oe = e.state ? e.state : "visible";
    W += '<sheet state="' + oe + '" name="' + Z + '" sheetId="' + (o + 1) + '" r:id="rId' + (R + 1) + '" />', X += '<Relationship Id="rId' + (R + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (o + 1) + '.xml" />', Y += "<vt:lpstr>" + ("sheet" + (o + 1)) + "</vt:lpstr>", J = J || !!e.selected;
    const Q = e.sortAndfilter ? 'filterMode="1"' : "";
    B["sheet" + (o + 1)] = {
      indexId: R + 1,
      key: "sheet" + (o + 1),
      sheetName: Z,
      sheetDataString: a,
      sheetSizeString: c.length > 0 ? "<cols>" + c + "</cols>" : "",
      protectionOption: e.protectionOption ? Object.keys(e.protectionOption).reduce((k, C) => k + " " + C + '="' + e.protectionOption[C] + '" ', "<sheetProtection ") + "/>" : "",
      merges: e.merges ? e.merges.reduce((k, C) => k += ' <mergeCell ref="' + C + '" />', '<mergeCells count="' + e.merges.length + '">') + " </mergeCells>" : "",
      selectedView: e.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: A,
      tabColor: e.tabColor ? '<sheetPr codeName="' + ("Sheet" + (o + 1)) + '" ' + Q + ' ><tabColor rgb="' + e.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + Q + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, R++;
  }
  let ae = Object.keys(B);
  g.file("[Content_Types].xml", se(G));
  var V = g.folder("_rels");
  V == null || V.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  var O = g.folder("docProps");
  O == null || O.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (t.creator ? "<dc:creator>" + t.creator + "</dc:creator>" : "") + (t.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + t.created + "</dcterms:created>" : "") + (t.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + t.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), O == null || O.file("app.xml", re(D, Y)), m == null || m.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + W + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), m == null || m.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (w - 1) + '" uniqueCount="' + Object.keys(P).length + '"> ' + q + "</sst>"
  );
  var U = m == null ? void 0 : m.folder("_rels");
  U == null || U.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + X + " </Relationships>"
  );
  var j = m == null ? void 0 : m.folder("theme");
  j == null || j.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  var z = m == null ? void 0 : m.folder("worksheets");
  if (ae.forEach((o) => {
    const e = B[o];
    z == null || z.file(
      e.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + e.tabColor + e.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + e.sheetSizeString + "<sheetData>" + e.sheetDataString + "</sheetData>" + e.protectionOption + e.sheetSortFilter + e.merges + "</worksheet>"
    );
  }), t.backend)
    return g.generateAsync({
      type: t.generateType ? t.generateType : "binarystring"
    }).then((o) => o);
  if (t.notSave)
    return g.generateAsync({ type: "blob" }).then((o) => o.slice(
      0,
      o.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  g.generateAsync({ type: "blob" }).then(function(o) {
    import("./FileSaver.min-3b84b3f2.mjs").then((e) => e.F).then((e) => {
      const { saveAs: n } = e;
      n(o, "Excel_File.xlsx");
    });
  });
}
export {
  ne as generateExcel
};
