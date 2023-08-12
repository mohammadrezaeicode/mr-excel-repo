function J(t, h, i = "", x = [], I = 0) {
  const y = t.length;
  for (let w = 0; w < y; w++)
    x.push(i + t[w]);
  return h < x.length ? x : J(
    t,
    h,
    x[I + 1],
    x,
    I + 1
  );
}
function ae(t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">` + (t.format.count > 0 ? '<numFmts count="' + t.format.count + '">' + t.format.value + "</numFmts>" : "") + ' <fonts count="' + t.font.count + '"> <font> <sz val="11" /> <color theme="1" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> <font> <sz val="11" /> <color rgb="FFFF0000" /> <name val="Calibri" /> <family val="2" /> <scheme val="minor" /> </font> ' + t.font.value + ' </fonts> <fills count="' + t.fill.count + '"> <fill> <patternFill patternType="none" /> </fill> <fill> <patternFill patternType="lightGray" /> </fill> ' + t.fill.value + ' </fills> <borders count="' + t.border.count + '"> <border />' + t.border.value + ' </borders> <cellStyleXfs count="1"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1" /> </cellStyleXfs> <cellXfs count="' + t.cell.count + '"> <xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" shrinkToFit="0" vertical="bottom" wrapText="0" /> </xf> <xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"> <alignment readingOrder="0" /> </xf> ' + t.cell.value + ' </cellXfs> <cellStyles count="1"> <cellStyle xfId="0" name="Normal" builtinId="0" /> </cellStyles> <dxfs count="0" /></styleSheet>';
}
function oe(t) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"> <Default ContentType="application/xml" Extension="xml" /> <Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels" />` + t + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml" /><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml" /> <Override PartName="/docProps/core.xml"  ContentType="application/vnd.openxmlformats-package.core-properties+xml" /> <Override PartName="/docProps/app.xml"  ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>';
}
function le(t, h) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"> <Application>Microsoft Excel</Application> <DocSecurity>0</DocSecurity> <ScaleCrop>false</ScaleCrop> <HeadingPairs> <vt:vector size="2" baseType="variant"> <vt:variant> <vt:lpstr>Worksheets</vt:lpstr> </vt:variant> <vt:variant> <vt:i4>` + t + '</vt:i4> </vt:variant> </vt:vector> </HeadingPairs> <TitlesOfParts> <vt:vector size="' + t + '" baseType="lpstr"> ' + h + " </vt:vector> </TitlesOfParts> <Company></Company> <LinksUpToDate>false</LinksUpToDate> <SharedDoc>false</SharedDoc> <HyperlinksChanged>false</HyperlinksChanged> <AppVersion>16.0300</AppVersion></Properties>";
}
function j(t, h, i) {
  let x = t.replace(/[0-9]/g, ""), I = parseInt(t.substr(x.length)), y = '<c r="' + t + '" ' + (i && typeof h.styleId == "string" && i[h.styleId] ? 's="' + i[h.styleId].index + '" ' : "") + ">     <f>" + h.type + "(" + h.start + ":" + h.end + ")</f> </c>";
  return {
    column: x,
    row: I,
    cell: y
  };
}
async function re(t) {
  let h = {
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
  t.numberOfColumn && t.numberOfColumn > 25 && (i = J(i, t.numberOfColumn));
  const I = (await import("./jszip.min-e651e8fb.mjs").then((a) => a.j)).default;
  var y = new I();
  const w = t.sheet.length;
  var m = y.folder("xl");
  const P = Object.keys(t.styles ? t.styles : {});
  let Z = P.reduce(
    (a, o, f) => {
      const r = t.styles[o], c = {
        fillIndex: 0,
        fontIndex: 0,
        borderIndex: 0,
        formatIndex: 0
      };
      r.fg && (c.fillIndex = a.fill.count, a.fill.count++, a.fill.value = a.fill.value + '<fill><patternFill patternType="solid">' + (r.fg ? '<fgColor rgb="' + r.fg.replace("#", "") + '" />' : "") + "</patternFill></fill>"), (r.fontColor || r.fontFamily || r.size) && (c.fontIndex = a.font.count, a.font.count++, a.font.value = a.font.value + "<font>" + (r.size ? '<sz val="' + r.size + '" />' : "") + (r.fontColor ? '<color rgb="' + r.fontColor.replace("#", "") + '" />' : "") + (r.fontFamily ? '<name val="' + r.fontFamily + '" />' : "") + "</font>");
      let O = "/>";
      r.alignment && (r.alignment.rtl && (r.alignment.readingOrder = 2), delete r.alignment.rtl, r.alignment.ltr && (r.alignment.readingOrder = 1), delete r.alignment.ltr, O = ' applyAlignment="1"><alignment ' + Object.keys(r.alignment).reduce((e, A) => e + " " + A + '="' + r.alignment[A] + '" ', "") + " /></xf>");
      const l = r.border;
      let p = "";
      if (l && ((l.left || l.full) && (p += '<left style="' + (l.left || l.full).style + '"><color rgb="' + (l.left || l.full).color.replace("#", "") + '" /></left>'), (l.right || l.full) && (p += '<right style="' + (l.right || l.full).style + '"><color rgb="' + (l.right || l.full).color.replace("#", "") + '" /></right>'), (l.top || l.full) && (p += '<top style="' + (l.top || l.full).style + '"><color rgb="' + (l.top || l.full).color.replace("#", "") + '" /></top>'), (l.bottom || l.full) && (p += '<bottom style="' + (l.bottom || l.full).style + '"><color rgb="' + (l.bottom || l.full).color.replace("#", "") + '" /></bottom>'), c.borderIndex = a.border.count, a.border.count++, a.border.value += "<border>" + p + "<diagonal /></border>"), r.format) {
        const e = h[r.format];
        e && (c.formatIndex = e.key, "value" in e && (a.format.count++, a.format.value += e.value));
      }
      return a.cell.value = a.cell.value + '<xf numFmtId="' + c.formatIndex + '" fontId="' + c.fontIndex + '" fillId="' + c.fillIndex + '" borderId="' + c.borderIndex + '" xfId="0"' + (c.borderIndex > 0 ? ' applyBorder="1" ' : "") + (c.fillIndex > 0 ? ' applyFill="1" ' : "") + (c.fontIndex >= 0 ? ' applyFont="1" ' : "") + (c.formatIndex > 0 ? ' applyNumberFormat="1" ' : "") + O, t.styles[o].index = a.cell.count, a.cell.count++, a;
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
  m == null || m.file("styles.xml", ae(Z));
  var K = '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml" />';
  let L = "", D = 0, U = "", z = "", E = {};
  const H = {};
  let G = "", q = 4, W = !1;
  for (let a = 0; a < w; a++) {
    let o = 1, f = "", r = "", c = "", O = [], l = [], p = {};
    const e = t.sheet[a];
    if (Array.isArray(e.headers) && e.headers.length) {
      let _ = e.headerStyleKey ? e.headerStyleKey : null;
      e.headers.forEach((s, n) => {
        if (s.formula && l.push(n), O.push(s.label), e.mergeRowDataCondition && typeof e.mergeRowDataCondition == "function" && e.mergeRowDataCondition(
          s,
          null,
          n,
          !0
        ) === !0 && (p[i[n]] = {
          inProgress: !0,
          start: o
        }), e.styleCellCondition && typeof e.styleCellCondition == "function" && (_ = e.styleCellCondition(
          s,
          s,
          n,
          o,
          !0,
          P
        ) || _), s.size && s.size > 0 && (r += '<col min="' + (n + 1) + '" max="' + (n + 1) + '" width="' + s.size + '" customWidth="1" />'), e.withoutHeader)
          return;
        const d = i[n] + "" + o, u = e.formula && e.formula[d];
        u ? (f += j(
          d,
          u,
          t.styles
        ).cell, delete e.formula[d]) : (f += '<c r="' + i[n] + o + '" ' + (_ && t.styles && t.styles[_] ? ' s="' + t.styles[_].index + '" ' : "") + ' t="s"><v>' + D + "</v></c>", L += "<si><t>" + s.text + "</t></si>", E[s.text] = s.text, D++);
      });
      const F = e.headers.length;
      if (e.withoutHeader || (f = '<row r="' + o + '" spans="1:' + F + '" ' + (e.headerHeight ? 'ht="' + e.headerHeight + '" customHeight="1"' : "") + (e.headerRowOption ? Object.keys(e.headerRowOption).reduce((s, n) => s + " " + n + '="' + e.headerRowOption[n] + '" ', "  ") : "") + ">" + f + "</row>", o++), Array.isArray(e.data)) {
        const s = t.mapSheetDataOption && t.mapSheetDataOption.outlineLevel ? t.mapSheetDataOption.outlineLevel : "outlineLevel", n = t.mapSheetDataOption && t.mapSheetDataOption.hidden ? t.mapSheetDataOption.hidden : "hidden", d = t.mapSheetDataOption && t.mapSheetDataOption.height ? t.mapSheetDataOption.height : "height", u = e.data.length;
        e.data.forEach((g, te) => {
          const Y = g.rowStyle;
          f += '<row r="' + o + '" spans="1:' + F + '" ' + (d in g ? 'ht="' + g[d] + '" customHeight="1"' : "") + (s in g ? ' outlineLevel="' + g[s] + '"' : "") + (n in g ? ' hidden="' + g[n] + '"' : "") + " >", O.forEach((C, $) => {
            const b = g[C];
            let k = Y;
            if (e.styleCellCondition && typeof e.styleCellCondition == "function" && (k = e.styleCellCondition(
              b,
              g,
              $,
              o,
              !1,
              P
            ) || Y), e.mergeRowDataCondition && typeof e.mergeRowDataCondition == "function") {
              let M = e.mergeRowDataCondition(
                b,
                C,
                $,
                !1
              );
              const v = i[$];
              let S = p[v];
              M === !0 ? (!S || S && !S.inProgress) && (p[v] = {
                inProgress: !0,
                start: o
              }) : S && S.inProgress && (e.merges ? e.merges.push(
                v + S.start + ":" + v + (o - 1)
              ) : e.merges = [
                v + S.start + ":" + v + (o - 1)
              ], p[v] = {
                inProgress: !1,
                start: -1
              });
            }
            if (typeof b < "u") {
              const M = i[$] + "" + o, v = e.formula && e.formula[M];
              v ? (f += j(M, v).cell, delete e.formula[M]) : typeof b == "string" ? (f += '<c r="' + i[$] + o + '" t="s" ' + (k && t.styles && t.styles[k] ? 's="' + t.styles[k].index + '"' : "") + "><v>" + D + "</v></c>", L += "<si><t>" + b + "</t></si>", E[b] = b, D++) : f += '<c r="' + i[$] + o + '" ' + (k && t.styles && t.styles[k] ? 's="' + t.styles[k].index + '"' : "") + "><v>" + b + "</v></c>";
            }
          }), u - 1 == te && Object.keys(p).forEach((C) => {
            p[C].inProgress && (e.merges ? e.merges.push(
              C + p[C].start + ":" + C + o
            ) : e.merges = [
              C + p[C].start + ":" + C + o
            ]);
          }), o++, f += "</row>";
        }), e.sortAndfilter && (e.sortAndfilter.mode == "all" ? c += '<autoFilter ref="A1:' + i[F - 1] + (o - 1) + '" />' : typeof e.sortAndfilter.ref == "string" && e.sortAndfilter.ref.length > 0 && (c += '<autoFilter ref="' + e.sortAndfilter.ref + '" />'));
      }
      if (l.length > 0 && (e.formula || (e.formula = {}), l.forEach((s) => {
        const n = e.headers[s];
        e.formula[i[s] + "" + o] = {
          start: e.withoutHeader ? i[s] + "1" : i[s] + "2",
          end: i[s] + "" + (o - 1),
          type: n.formula.type,
          ...n.formula.styleId ? { styleId: n.formula.styleId } : {}
        };
      })), e.formula) {
        const s = Object.keys(e.formula);
        if (s.length) {
          let n = {};
          s.forEach((d) => {
            const u = j(d, e.formula[d], t.styles);
            n[u.row] ? n[u.row] += u.cell : n[u.row] = u.cell;
          }), Object.keys(n).forEach((d) => {
            const u = n[d];
            f += '<row r="' + d + '" spans="1:' + F + '"  >' + u + "</row>";
          });
        }
      }
    }
    a > 0 && (K += '<Override    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"    PartName="/xl/worksheets/sheet' + (a + 1) + '.xml" />');
    const A = e.name ? e.name : "sheet" + (a + 1), ee = e.state ? e.state : "visible";
    U += '<sheet state="' + ee + '" name="' + A + '" sheetId="' + (a + 1) + '" r:id="rId' + (q + 1) + '" />', z += '<Relationship Id="rId' + (q + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (a + 1) + '.xml" />', G += "<vt:lpstr>" + ("sheet" + (a + 1)) + "</vt:lpstr>", W = W || !!e.selected;
    const X = e.sortAndfilter ? 'filterMode="1"' : "";
    H["sheet" + (a + 1)] = {
      indexId: q + 1,
      key: "sheet" + (a + 1),
      sheetName: A,
      sheetDataString: f,
      sheetSizeString: r.length > 0 ? "<cols>" + r + "</cols>" : "",
      protectionOption: e.protectionOption ? Object.keys(e.protectionOption).reduce((_, F) => _ + " " + F + '="' + e.protectionOption[F] + '" ', "<sheetProtection ") + "/>" : "",
      merges: e.merges ? e.merges.reduce((_, F) => _ += ' <mergeCell ref="' + F + '" />', '<mergeCells count="' + e.merges.length + '">') + " </mergeCells>" : "",
      selectedView: e.selected ? '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="A0" sqref="A0" /></sheetView></sheetViews>' : '<sheetViews><sheetView workbookViewId="0" /></sheetViews>',
      sheetSortFilter: c,
      tabColor: e.tabColor ? '<sheetPr codeName="' + ("Sheet" + (a + 1)) + '" ' + X + ' ><tabColor rgb="' + e.tabColor.replace("#", "") + '" /></sheetPr>' : "<sheetPr " + X + ' ><outlinePr summaryBelow="0" summaryRight="0" /></sheetPr>'
    }, q++;
  }
  let Q = Object.keys(H);
  y.file("[Content_Types].xml", oe(K));
  var R = y.folder("_rels");
  R == null || R.file(
    ".rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId3"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"  Target="docProps/app.xml" /> <Relationship Id="rId2"  Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"  Target="docProps/core.xml" /> <Relationship Id="rId1"  Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"  Target="xl/workbook.xml" /></Relationships>`
  );
  var T = y.folder("docProps");
  T == null || T.file(
    "core.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` + (t.creator ? "<dc:creator>" + t.creator + "</dc:creator>" : "") + (t.created ? '<dcterms:created xsi:type="dcterms:W3CDTF">' + t.created + "</dcterms:created>" : "") + (t.modified ? '<dcterms:modified xsi:type="dcterms:W3CDTF">' + t.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"
  ), T == null || T.file("app.xml", le(w, G)), m == null || m.file(
    "workbook.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"> <workbookPr /> <sheets>  ` + U + " </sheets> <definedNames /> <calcPr /></workbook>"
  ), m == null || m.file(
    "sharedStrings.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="` + (D - 1) + '" uniqueCount="' + Object.keys(E).length + '"> ' + L + "</sst>"
  );
  var N = m == null ? void 0 : m.folder("_rels");
  N == null || N.file(
    "workbook.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"> <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" /> <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /> <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /> ` + z + " </Relationships>"
  );
  var B = m == null ? void 0 : m.folder("theme");
  B == null || B.file(
    "theme1.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="5B9BD5"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="4472C4"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`
  );
  var V = m == null ? void 0 : m.folder("worksheets");
  if (Q.forEach((a) => {
    const o = H[a];
    V == null || V.file(
      o.key + ".xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">` + o.tabColor + o.selectedView + '<sheetFormatPr customHeight="1" defaultColWidth="12.63" defaultRowHeight="15.75" />' + o.sheetSizeString + "<sheetData>" + o.sheetDataString + "</sheetData>" + o.protectionOption + o.sheetSortFilter + o.merges + "</worksheet>"
    );
  }), t.notSave)
    return y.generateAsync({ type: "blob" }).then((a) => a.slice(
      0,
      a.size,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ));
  y.generateAsync({ type: "blob" }).then(function(a) {
    import("./FileSaver.min-3b84b3f2.mjs").then((o) => o.F).then((o) => {
      const { saveAs: f } = o;
      f(a, "Excel_File.xlsx");
    });
  });
}
export {
  re as generateExcel
};
