import { i as e, n as t, r as n, t as r } from "./excel-util-DXh00ZOU.js";
//#region \0rolldown/runtime.js
var i = Object.create, a = Object.defineProperty, o = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, c = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty, u = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), d = (e, t) => {
	let n = {};
	for (var r in e) a(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || a(n, Symbol.toStringTag, { value: "Module" }), n;
}, f = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = s(t), c = 0, u = i.length, d; c < u; c++) d = i[c], !l.call(e, d) && d !== n && a(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(r = o(t, d)) || r.enumerable
	});
	return e;
}, p = (e, t, n) => (n = e == null ? {} : i(c(e)), f(t || !e || !e.__esModule ? a(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), m = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region src/utils/color.ts
function h(e) {
	return e.replace(/ /g, "");
}
function g(e) {
	if (e = e.replace(/^#/, ""), e.length == 3) {
		let t = e.charAt(0), n = e.charAt(1), r = e.charAt(2);
		return t + t + n + n + r + r;
	} else return e;
}
function _(e) {
	/^#?([a-f\d]{3})$/i.test(e) && (e = g(e));
	var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
	return t ? [
		parseInt(t[1] ?? "00", 16),
		parseInt(t[2] ?? "00", 16),
		parseInt(t[3] ?? "00", 16)
	] : [
		0,
		0,
		0
	];
}
function v(e) {
	let t = _(e);
	if (t != null) return (.299 * t[0] + .587 * t[1] + .114 * t[2]) / 255 > .5 ? "rgb(0,0,0)" : "rgb(255,255,255)";
}
function y(e) {
	/^#?([a-f\d]{3})$/i.test(e) && (e = g(e));
	var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
	return t ? "rgb(" + (255 - parseInt(t[1] ?? "255", 16)) + "," + (255 - parseInt(t[2] ?? "255", 16)) + "," + (255 - parseInt(t[3] ?? "255", 16)) + ")" : "rgb(0,0,0)";
}
function b(e) {
	e = Number(e);
	var t = e.toString(16);
	return t.length == 1 ? "0" + t : t;
}
function x(e) {
	e = h(e);
	let t = e.indexOf("rgba") >= 0 ? e.substring(5, e.length - 1).split(",") : e.substring(4, e.length - 1).split(","), n = t.reduce((e, t) => e && !Number.isNaN(Number(t)), !0);
	return t.length == 4 && t[3] == "0" || t.length != 3 && t.length != 4 || !n ? null : (b(t[0] ?? "0") + b(t[1] ?? "0") + b(t[2] ?? "0")).toUpperCase();
}
function S(e, t) {
	if (e == null) return null;
	if (!t) {
		let t = h(e);
		t.indexOf("var(") == 0 && t.lastIndexOf(")") == t.length - 1 && (t = t.substring(4, t.length - 1), e = getComputedStyle(document.documentElement).getPropertyValue(t));
	}
	return e.indexOf("rgb") >= 0 && (e = x(e) || ""), e.replace(/^#/, "");
}
//#endregion
//#region src/functions/theme.ts
function C(e) {
	let t = "";
	return e.indexOf("_") > 0 ? t = e.replace(/[a-z]/g, "").length == e.length ? e.split(/_/).reduce((e, t) => e + t.charAt(0) + t.substring(1).toLowerCase() + " ", "").trim() : e.replace(/_/g, " ").trim() : (t = e.replace(/([A-Z])/g, " $1").trim(), t = t.charAt(0).toUpperCase() + t.substring(1).trim()), t;
}
function w(e, t) {
	return Object.keys(e).filter((e) => !t.includes(e)).reduce((e, t) => (e.push({
		label: t,
		text: C(t)
	}), e), []);
}
var T = {
	fileName: "MR-Excel",
	headerBackgroundColor: "#393E46",
	headerColor: "#EEEEEE",
	negativeColor: !1,
	rowBackgroundColor: "#EEEEEE",
	rowColor: "#393E46",
	filterKeys: []
};
function ee(e, t = { ...T }) {
	if (typeof e != "object") throw "typeof Object should be ExcelTable";
	let n;
	if (typeof e == "object" && Array.isArray(e)) if (e.length > 0) if (Array.isArray(e[0])) {
		let r = [];
		for (let n = 0; n < e.length; n++) {
			let i = e[n];
			if (i.length > 0) {
				let e = w(i[0], Array.isArray(t?.filterKeys) ? t.filterKeys : []);
				r.push({
					headers: e,
					data: i
				});
			}
		}
		n = { sheet: r };
	} else n = { sheet: [{
		headers: w(e[0] ?? [], Array.isArray(t?.filterKeys) ? t?.filterKeys : []),
		data: e
	}] };
	else n = { sheet: [] };
	else n = e;
	let r = t && t.headerBackgroundColor ? t.headerBackgroundColor : T.headerBackgroundColor, i = t && t.rowBackgroundColor ? t.rowBackgroundColor : T.rowBackgroundColor, a = t && t.negativeColor ? y(r) : t && t.headerColor ? t.headerColor : v(r), o = t && t.negativeColor ? y(i) : t && t.rowColor ? t.rowColor : v(i);
	return n.styles = n.styles ?? {}, n.styles.themeStyleHeader = {
		backgroundColor: r,
		color: a ?? y(r)
	}, n.styles.themeStyleBody = {
		backgroundColor: i,
		color: o ?? y(i)
	}, n.sheet.forEach((e) => {
		e.styleCellCondition = function(e, t, n, r, i, a) {
			return i ? "themeStyleHeader" : "themeStyleBody";
		};
	}), typeof t?.fileName == "string" && (n.fileName = t.fileName), n;
}
//#endregion
//#region src/functions/replacer.ts
async function E(e, t, n) {
	let r = {}, i = (await import("./jszip.min-CZfn14ey.js").then((e) => /* @__PURE__ */ p(e.default, 1))).default, a;
	if (typeof e == "string" && e.length) {
		let t, r = !1;
		typeof n?.fetch == "function" ? (t = n.fetch, r = !0) : t = fetch, a = await t(e).then((e) => {
			if (e == null || e == null) throw "response is null";
			return r ? e : n?.backend ? e.arrayBuffer() : e.blob();
		});
	} else a = n?.data;
	if (!a) throw "A data or file URL must be provided.";
	let o = await i.loadAsync(a).then(async function(e) {
		let n = Object.keys(e.files).filter((e) => e.indexOf("xl/worksheets/") == 0 && e.length - 4 == e.lastIndexOf(".xml") || e == "xl/sharedStrings.xml");
		for (let i = 0; i < n.length; i++) {
			let a = n[i];
			a && await e.files[a]?.async("string").then((e) => {
				let n = e;
				Object.entries(t).forEach(([e, t]) => {
					n = n.replace(RegExp("{{" + e + "}}", "g"), t.toString());
				}), r[a] = n;
			});
		}
		return e;
	});
	if (Object.keys(r).forEach((e) => {
		o.file(e, r[e] ?? "");
	}), n?.backend) return o.generateAsync({ type: n.generateType ? n.generateType : "nodebuffer" }).then((e) => e);
	if (n?.notSave) return o.generateAsync({ type: "blob" }).then((e) => e.slice(0, e.size, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
	{
		let e = await o.generateAsync({ type: "blob" });
		return (await import("./FileSaver.min-C3Sv3qNT.js").then((e) => /* @__PURE__ */ p(e.default, 1))).saveAs(e, (n?.fileName ? n.fileName : "tableRecord") + ".xlsx"), "done";
	}
}
//#endregion
//#region src/functions/create-excel-data.ts
function D(e, t, n, r, i, a, o, s) {
	let c = [], l = "both", u = [];
	!t || t === 0 ? (t = 1, l = "col") : u.push(t - 1), !e || e === 0 ? (e = 0, l = "row") : u.push(e - 1);
	let d = i || {};
	d.mergeType = s && s.mergeType ? [...s.mergeType, l] : [l], d.mergeValue = s && s.mergeValue ? [...s.mergeValue, u] : [u], d.mergeStart = s && s.mergeStart ? [...s.mergeStart, n] : [n];
	for (let i = 0; i < t; i++) {
		let s = e;
		for (let e = 0; e < r; e++) n <= e ? s >= 1 ? (d["c" + e] = a, a = "", o += "*", s--) : t >= 2 && n == e ? (d["c" + e] = a, a = "", o += "+") : o += "-" : i > 0 && (o += "-");
		c.push({
			...d,
			mergeString: o
		}), d = {}, o = "";
	}
	return c;
}
function te(e, t, n, r, i) {
	if (!e && !t) throw "Error: One of the function inputs is required.";
	let a;
	a = e ? document.querySelector(e)?.querySelectorAll("tr") : t?.querySelectorAll("tr");
	let o = [], s = [], c = {
		header: {},
		rows: []
	}, l = 40;
	if (a) {
		let e = !1, t = {}, n = 0;
		a.forEach((a, u) => {
			var d = [].slice.call(a.children);
			let f = window.getComputedStyle(a, null), p = x(f.backgroundColor);
			if (!e) n = d.length, e = !0, l = typeof r == "function" ? r(Number(f.height.substring(0, f.height.length - 2)), u, !0) : Number(f.height.substring(0, f.height.length - 2)), d.forEach((e, n) => {
				let r = window.getComputedStyle(e, null), a = null;
				if (r.borderBottomWidth !== "0px") {
					let e = x(r.borderBottomColor);
					e && (a ||= {}, a.bottom = {
						style: "thin",
						color: e
					});
				}
				if (r.borderTopWidth !== "0px") {
					let e = x(r.borderTopColor);
					e && (a ||= {}, a.top = {
						style: "thin",
						color: e
					});
				}
				if (r.borderLeftWidth !== "0px") {
					let e = x(r.borderLeftColor);
					e && (a ||= {}, a.left = {
						style: "thin",
						color: e
					});
				}
				if (r.borderRightWidth !== "0px") {
					let e = x(r.borderRightColor);
					e && (a ||= {}, a.right = {
						style: "thin",
						color: e
					});
				}
				let s = x(r.backgroundColor);
				!s && p && (s = p);
				let l = parseInt(r.fontSize.substring(0, r.fontSize.indexOf("p"))), d = parseInt(r.fontWeight) > 500, f = {
					...s ? { backgroundColor: s } : {},
					...d ? { bold: d } : {},
					...isNaN(l) ? {} : { size: l },
					...a ? { border: a } : {},
					alignment: {
						...typeof r.textAlign == "string" && r.textAlign.length > 0 ? { horizontal: r.textAlign } : {},
						vertical: "center",
						...r.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
					}
				};
				c.header[u + "-" + n] = f, t[u + "-" + n] = u + "-" + n;
				let m;
				m = typeof i == "function" ? i(Number(r.width.substring(0, r.width.length - 2)), n) : Number(r.width.substring(0, r.width.length - 2)) * .15;
				let h = e.getAttribute("colspan"), g = e.getAttribute("rowspan");
				o.push({
					label: "c" + n,
					...h ? { colspan: h } : {},
					...g ? { rowspan: g } : {},
					text: e.textContent,
					...isNaN(m) || m <= 0 ? {} : { size: m }
				});
			});
			else {
				let e = {}, i = "", a = !1;
				s.length >= u && (e = s[u - 1], i = "mergeString" in e ? e.mergeString : "", a = !0);
				let o = 0;
				d.forEach((r, l) => {
					if ("c" + (l + o) in e) for (let t = 0; t <= n + 1 && "c" + (l + t) in e; t++) o++;
					l += o;
					let d = window.getComputedStyle(r, null);
					if (r.getAttribute("colspan") || r.getAttribute("rowspan")) {
						let t = D(r.getAttribute("colspan") * 1, r.getAttribute("rowspan") * 1, l, n, e, r.textContent, i, e);
						s.length < u ? s.push(...t) : t.forEach((e, n) => {
							s.length < u + n ? s.push(...t) : s[u + n] = {
								...s[u + n],
								...e
							};
						}), e = t[0], i = t[0].mergeString, a = !0;
					} else a || (i += "-");
					let f = null;
					if (d.borderBottomWidth !== "0px") {
						let e = x(d.borderBottomColor);
						e && (f ||= {}, f.bottom = {
							style: "thin",
							color: e
						});
					}
					if (d.borderTopWidth !== "0px") {
						let e = x(d.borderTopColor);
						e && (f ||= {}, f.top = {
							style: "thin",
							color: e
						});
					}
					if (d.borderLeftWidth !== "0px") {
						let e = x(d.borderLeftColor);
						e && (f ||= {}, f.left = {
							style: "thin",
							color: e
						});
					}
					if (d.borderRightWidth !== "0px") {
						let e = x(d.borderRightColor);
						e && (f ||= {}, f.right = {
							style: "thin",
							color: e
						});
					}
					let m = x(d.backgroundColor);
					!m && p && (m = p);
					let h = parseInt(d.fontSize.substring(0, d.fontSize.indexOf("p"))), g = parseInt(d.fontWeight) > 500, _ = {
						...m ? { backgroundColor: m } : {},
						...g ? { bold: g } : {},
						...isNaN(h) ? {} : { size: h },
						...f ? { border: f } : {},
						alignment: {
							...typeof d.textAlign == "string" && d.textAlign.length > 0 ? { horizontal: d.textAlign } : {},
							vertical: "center",
							...d.direction == "rtl" ? { rtl: !0 } : { ltr: !0 }
						}
					};
					c.header[u + "-" + l] = _, e["c" + l] = r.textContent, t[u + "-" + l] = u + "-" + l;
				}), typeof r == "function" ? e.height = r(Number(f.height.substring(0, f.height.length - 2)), u, !1) : e.height = f.height.substring(0, f.height.length - 2), typeof e.height == "string" && e.height.length == 0 && delete e.height, s.length < u ? s.push(e) : s[u - 1] = e;
			}
		});
	} else throw "Error: DOM Element Not Found";
	return {
		styles: c.header,
		sheet: [{
			...l ? { headerHeight: l } : {},
			styleCellCondition: function(e, t, r, i, a, o) {
				return n ? o.includes(r - 1 + "-" + i) ? r - 1 + "-" + i : "" : null;
			},
			data: s,
			headers: o
		}]
	};
}
//#endregion
//#region src/utils/content-generator/styles.ts
function O(e, t) {
	return "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<styleSheet xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\" xmlns:x14ac=\"http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac\" xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\">" + (e.format.count > 0 ? "<numFmts count=\"" + e.format.count + "\">" + e.format.value + "</numFmts>" : "") + "<fonts count=\"" + e.font.count + "\"><font><sz val=\"11\" /><color theme=\"1\" /><name val=\"Calibri\" /><family val=\"2\" /><scheme val=\"minor\" /></font><font><sz val=\"11\" /><color rgb=\"FFFF0000\" /><name val=\"Calibri\" /><family val=\"2\" /><scheme val=\"minor\" /></font>" + e.font.value + "</fonts><fills count=\"" + e.fill.count + "\"><fill><patternFill patternType=\"none\" /></fill><fill><patternFill patternType=\"lightGray\" /></fill>" + e.fill.value + "</fills><borders count=\"" + e.border.count + "\"><border />" + e.border.value + "</borders><cellStyleXfs count=\"1\"><xf borderId=\"0\" fillId=\"0\" fontId=\"0\" numFmtId=\"0\" applyAlignment=\"1\" applyFont=\"1\" /></cellStyleXfs><cellXfs count=\"" + e.cell.count + "\"><xf borderId=\"0\" fillId=\"0\" fontId=\"0\" numFmtId=\"0\" xfId=\"0\" applyAlignment=\"1\" applyFont=\"1\"><alignment readingOrder=\"0\" shrinkToFit=\"0\" vertical=\"bottom\" wrapText=\"0\" /></xf><xf borderId=\"0\" fillId=\"0\" fontId=\"1\" numFmtId=\"0\" xfId=\"0\" applyAlignment=\"1\" applyFont=\"1\"><alignment readingOrder=\"0\" /></xf>" + e.cell.value + "</cellXfs><cellStyles count=\"1\"><cellStyle xfId=\"0\" name=\"Normal\" builtinId=\"0\" /></cellStyles> " + (t ? "<dxfs count=\"" + e.conditionalFormatting.count + "\" >" + e.conditionalFormatting.value + "</dxfs>" : "<dxfs count=\"0\" />") + "</styleSheet>";
}
//#endregion
//#region src/utils/content-generator/content-types.ts
function ne(e, t, n, r, i, a, o) {
	let s = {};
	return "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<Types xmlns=\"http://schemas.openxmlformats.org/package/2006/content-types\"><Default Extension=\"rels\"  ContentType=\"application/vnd.openxmlformats-package.relationships+xml\"/><Default Extension=\"vml\" ContentType=\"application/vnd.openxmlformats-officedocument.vmlDrawing\" /><Default Extension=\"xml\" ContentType=\"application/xml\" /><Override ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml\" PartName=\"/xl/workbook.xml\" /><Override ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml\" PartName=\"/xl/styles.xml\" /><Override ContentType=\"application/vnd.openxmlformats-officedocument.theme+xml\" PartName=\"/xl/theme/theme1.xml\" />" + n.reduce((e, t) => (t = t.toLowerCase(), s[t] ? e : t == "svg" ? (s.png = !0, s.svg = !0, e + "<Default Extension=\"png\" ContentType=\"image/png\"/><Default Extension=\"svg\" ContentType=\"image/svg+xml\"/>") : t == "jpeg" || t == "jpg" ? (s.jpeg = !0, s.jpg = !0, e + "<Default Extension=\"" + t + "\" ContentType=\"image/jpeg\"/>") : (s[t] = !0, e + "<Default Extension=\"" + t + "\" ContentType=\"image/" + t + "\"/>")), "") + t.reduce((e, t) => e + "<Override PartName=\"/xl/comments" + t + ".xml\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml\" />", "") + e + (o.length > 0 ? o.reduce((e, t) => e + "<Override PartName=\"/xl/tables/" + t + "\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml\"/>", "") : "") + "<Override ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml\" PartName=\"/xl/sharedStrings.xml\" />" + (a ? "<Override PartName=\"/xl/calcChain.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml\"/>" : "") + "<Override PartName=\"/docProps/core.xml\"  ContentType=\"application/vnd.openxmlformats-package.core-properties+xml\" />" + r.reduce((e, t) => e + "<Override PartName=\"/xl/drawings/" + t + "\" ContentType=\"application/vnd.openxmlformats-officedocument.drawing+xml\" />", "") + (i.length > 0 ? i.reduce((e, t, n) => e + "<Override PartName=\"/xl/ctrlProps/ctrlProp" + (n + 1) + ".xml\" ContentType=\"application/vnd.ms-excel.controlproperties+xml\"/>", "") : "") + "<Override PartName=\"/docProps/app.xml\"  ContentType=\"application/vnd.openxmlformats-officedocument.extended-properties+xml\" /></Types>";
}
//#endregion
//#region src/utils/content-generator/app.ts
function re(e, t) {
	return "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<Properties xmlns=\"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties\" xmlns:vt=\"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes\"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size=\"2\" baseType=\"variant\"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>" + e + "</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size=\"" + e + "\" baseType=\"lpstr\"> " + t + "</vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>";
}
//#endregion
//#region src/utils/generate-formula-cell.ts
function ie(e, t, n, r) {
	e = e.toUpperCase();
	let i = "";
	if (t.formula) {
		let n = t, a = n.formula.indexOf("=") == 0 ? n.formula.substring(1) : n.formula, o = e.indexOf(":") > 0, s = n.referenceCells ? n.referenceCells : e, c = o ? e.substring(0, e.indexOf(":")) : e, l = c.replace(/[0-9]/g, ""), u = parseInt(e.substr(l.length)), d = n.returnType ? n.returnType : n.isArray || o ? " t=\"str\"" : "", f = "styleId" in n && typeof n.styleId == "string" && r[n.styleId] ? " s=\"" + r[n.styleId] + "\"" : "", p = n.isArray || o ? " t=\"array\" ref=\"" + s + "\"" : "";
		return i = "<c r=\"" + c + "\"" + f + d + "><f" + p + ">" + a + "</f></c>", {
			column: l,
			row: u,
			needCalcChain: !1,
			isCustom: !0,
			cell: i
		};
	}
	let a = e.replace(/[0-9]/g, ""), o = parseInt(e.substr(a.length)), s = !1, c = "";
	if (t.noArgType) {
		let a = t;
		if (a.noArgType == "NOW" || a.noArgType == "TODAY") {
			let t = "styleId" in a && typeof a.styleId == "string" && r[a.styleId] ? " s=\"" + r[a.styleId] + "\"" : "";
			i = "<c r=\"" + e + "\"" + t + "><f>" + a.noArgType + "()</f></c>";
		} else {
			let t = "styleId" in a && typeof a.styleId == "string" && r[a.styleId] ? " s=\"" + r[a.styleId] + "\"" : "";
			i = "<c r=\"" + e + "\"" + t + "><f>" + a.noArgType.substring(4) + "(NOW())</f></c>";
		}
		c = "<c r=\"" + e + "\" i=\"" + n + "\"/>", s = !0;
	} else if (t.referenceCell) {
		let a = t, o = "";
		a.value !== void 0 && (o = "," + a.value);
		let l = "";
		a.type == "COT" && (l = "_xlfn.");
		let u = "styleId" in a && typeof a.styleId == "string" && r[a.styleId] ? " s=\"" + r[a.styleId] + "\"" : "";
		i = "<c r=\"" + e + "\"" + u + "><f>" + l + a.type + "(" + a.referenceCell.toUpperCase() + o + ")</f></c>", c = "<c r=\"" + e + "\" i=\"" + n + "\"/>", s = !0;
	} else {
		let n = t;
		i = "<c r=\"" + e + "\"" + (typeof n.styleId == "string" && r[n.styleId] ? " s=\"" + r[n.styleId] + "\"" : "") + "><f>" + n.type + "(" + n.start.toUpperCase() + ":" + n.end.toUpperCase() + ")</f></c>";
	}
	return {
		column: a,
		row: o,
		cell: i,
		needCalcChain: s,
		chainCell: c
	};
}
//#endregion
//#region src/utils/comment.ts
function ae(e, t, n) {
	let r = !1, i, a;
	if (typeof e == "object") {
		if ("author" in e && e.author && (r = !0, a = e.author), "styleId" in e && typeof e.styleId == "string") {
			let r = t[e.styleId];
			typeof r == "string" && (n = r);
		}
		i = "comment" in e && typeof e.comment == "string" ? k(e.comment) : [""];
	} else i = e ? k(e) : [""];
	return r && i.unshift(a + ":"), {
		hasAuthor: r,
		author: a,
		commentStyle: n,
		commentStr: i
	};
}
function k(e) {
	return e.split(/\r?\n|\r|\n/g);
}
function oe(e, t, n, r) {
	let i = "<comment ref=\"" + e + "\" authorId=\"" + Math.max(0, r - 1) + "\" shapeId=\"0\"><text>", a = "";
	return t.forEach((e, t) => {
		let r = "";
		if (e.length == 0) {
			a += "\n";
			return;
		}
		t > 0 && (r = " xml:space=\"preserve\"", a += "\n"), i += "<r>" + n + "<t" + r + ">" + a + e + "</t></r>", a = "";
	}), a.length > 0 && i.indexOf("<r>") > 0 && (i = i.substring(0, i.length - 8) + a + "</t></r>"), i += "</text></comment>", i;
}
var se = "<rPr><b /><sz val=\"9\" /><color rgb=\"000000\" /><rFont val=\"Tahoma\" /></rPr>", ce = function(e) {
	return e.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
};
//#endregion
//#region src/utils/multi-value.ts
function le(e, t, n) {
	let r = "";
	return e.forEach((e) => {
		typeof e.value == "string" && (e.value = ce(e.value)), r += "<r>" + (e.styleId && t[e.styleId] ? t[e.styleId] : t[n]) + "<t xml:space=\"preserve\">" + e.value + "</t></r>";
	}), "<si>" + r + "</si>";
}
//#endregion
//#region src/utils/image.ts
var ue = (e, t, n = !1, r) => {
	let i, a = !1;
	return typeof r == "function" ? (i = r, a = !0) : i = fetch, i(e).then((e) => a ? e : n ? e.arrayBuffer() : e.blob()).then((e) => a || n ? e : new File([e], t)).catch((e) => {
		throw e;
	});
};
//#endregion
//#region src/utils/drop-down-utils.ts
function de(e) {
	if (!Array.isArray(e) || !e.length) return "";
	let t = e.length, n = "<dataValidations>";
	for (let r = 0; r < t; r++) {
		let t = e[r];
		if (!t) continue;
		let i = t.for.reduce((e, t) => e + " " + t, ""), a = t.option.join(",");
		n += "<dataValidation type=\"list\" allowBlank=\"1\" showErrorMessage=\"1\" sqref=\"" + i.trim() + "\"><formula1>&quot;" + a + "&quot;</formula1></dataValidation>";
	}
	return n += "</dataValidations>", n;
}
//#endregion
//#region src/utils/data-validation.utils.ts
function A(e) {
	return e.reduce((e, t) => {
		if (e += "<dataValidation" + j(t) + ">", t.type == "list") {
			if (typeof t.value != "object") throw "value1 should be object";
			e += "<formula1>" + fe(t.value) + "</formula1>";
		} else !t.operator || t.operator === "between" || t.operator === "notBetween" ? (t.value = t.value, e += "<formula1>" + t.value.min + "</formula1><formula2>" + t.value.max + "</formula2>") : e += "<formula1>" + t.value + "</formula1>";
		return e += "</dataValidation>", e;
	}, "<dataValidations count=\"" + e.length + "\">") + "</dataValidations>";
}
function j(e) {
	let t = " type=\"" + e.type + "\" ";
	return e.operator && e.operator !== "between" && e.type !== "list" && (t += "operator=\"" + e + "\" "), e.allowBlank === !1 ? t += "allowBlank=\"0\" " : t += "allowBlank=\"1\" ", e.type == "list" ? e.showDropDown === !1 ? t += "showDropDown=\"0\" " : t += "showDropDown=\"1\" " : e.showDropDown && (t += "showDropDown=\"1\" "), e.showInputMessage === !1 ? t += "showInputMessage=\"0\" " : t += "showInputMessage=\"1\" ", e.showErrorMessage === !1 ? t += "showErrorMessage=\"0\" " : t += "showErrorMessage=\"1\" ", t += "sqref=\"" + e.start + ":" + e.end + "\"", t;
}
function fe(e) {
	let t = e.start.replace(/[a-zA-Z]/g, ""), n = e.end.replace(/[a-zA-Z]/g, ""), r = e.start.replace(/[0-9]/g, ""), i = e.end.replace(/[0-9]/g, "");
	return "$" + r + "$" + t + ":$" + i + "$" + n;
}
//#endregion
//#region src/functions/generate-excel.ts
async function M(i) {
	if (typeof i.creator == "string" && i.creator.trim().length <= 0) throw "length of \"creator\" most be bigger then 0";
	if (typeof i.created == "string" && new Date(i.created).toString() == "Invalid Date") throw "\"created\" is not valid date";
	if (typeof i.modified == "string" && new Date(i.modified).toString() == "Invalid Date") throw "\"modified\" is not valid date";
	let a = n;
	i.formatMap && typeof i.formatMap == "object" && (a = {
		...a,
		...i.formatMap
	});
	let o = i.backend, s = {
		lt: "lessThan",
		gt: "greaterThan",
		between: "between",
		ct: "containsText",
		eq: "equal"
	}, c = [...t];
	i.numberOfColumn && i.numberOfColumn > 25 && (c = e(c, i.numberOfColumn));
	let l = (await import("./jszip.min-CZfn14ey.js").then((e) => /* @__PURE__ */ p(e.default, 1))).default, u = new l(), d = i.sheet ?? [{
		headers: [],
		data: []
	}], f = d.length, m = u.folder("xl"), h = null, g = null, _ = null, v = { ...i.styles ?? {} };
	i.addDefaultTitleStyle && (v.titleStyle = { alignment: {
		horizontal: "center",
		vertical: "center"
	} });
	let y = Object.keys(v), b = se, x = i.activateConditionalFormatting ? i.activateConditionalFormatting : !1, C = {}, w = {}, T = y.reduce((e, t) => {
		let n = v[t];
		if (n?.type && (n.type == "headerFooter" || n.type == "HF")) {
			let r = "", i = "-", a = "Regular";
			if (n.fontFamily && (i = n.fontFamily), n.bold && (a = "Bold"), n.italic && (a == "Regular" && (a = ""), a += "Italic"), (i != "-" || a != "Regular") && (r = "&amp;\"" + i + "," + a + "\""), n.size && (r += "&amp;" + n.size), n.doubleUnderline ? r += "&amp;E" : n.underline && (r += "&amp;U"), n.color) {
				let e = S(n.color, o);
				typeof e == "string" && e.length > 0 && (r += "&amp;K" + e.toUpperCase());
			}
			return C[t] = r, e;
		}
		if (x && typeof n?.type == "string" && n.type && (n.type == "conditionalFormatting" || n.type.toUpperCase() == "CF")) {
			w[t] = e.conditionalFormatting.count;
			let r = S(n.color, o), i = S(n.backgroundColor, o);
			return e.conditionalFormatting.value += "<dxf><font><color rgb=\"" + r + "\"/></font><fill> <patternFill> <bgColor rgb=\"" + i + "\"/></patternFill></fill></dxf>", e.conditionalFormatting.count++, e;
		}
		let r = {
			fillIndex: 0,
			fontIndex: 0,
			borderIndex: 0,
			formatIndex: 0
		};
		if (n?.backgroundColor) {
			let t = S(n.backgroundColor, o);
			r.fillIndex = e.fill.count, e.fill.count++, e.fill.value = e.fill.value + "<fill><patternFill patternType=\"solid\">" + (t ? "<fgColor rgb=\"" + t.replace("#", "") + "\" />" : "") + "</patternFill></fill>";
		}
		if (n?.color || n?.fontFamily || n?.size || n?.bold || n?.italic || n?.underline || n?.doubleUnderline) {
			let i = S(n.color, o);
			r.fontIndex = e.font.count, e.font.count++, e.font.value = e.font.value + "<font>" + (n.bold ? "<b/>" : "") + (n.italic ? "<i />" : "") + (n.underline || n.doubleUnderline ? "<u " + (n.doubleUnderline ? " val=\"double\" " : "") + "/>" : "") + (n.size ? "<sz val=\"" + n.size + "\" />" : "") + (i ? "<color rgb=\"" + i.replace("#", "") + "\" />" : "") + (n.fontFamily ? "<name val=\"" + n.fontFamily + "\" />" : "") + "</font>", e.commentSyntax.value[t] = "<rPr>" + (n.bold ? "<b/>" : "") + (n.italic ? "<i/>" : "") + (n.underline || n.doubleUnderline ? "<u " + (n.doubleUnderline ? "val=\"double\" " : "") + "/>" : "") + "<sz val=\"" + (n.size ? n.size : "9") + "\" />" + (i ? "<color rgb=\"" + i.replace("#", "") + "\" />" : "") + "<rFont val=\"" + (n.fontFamily ? n.fontFamily : "Tahoma") + "\" /></rPr>";
		}
		let i = "/>";
		if (n?.alignment) {
			let e = !1;
			i = " applyAlignment=\"1\"><alignment " + Object.entries(n.alignment).reduce((t, [n, r]) => (n === "rtl" ? (n = "readingOrder", r = 2) : n === "ltr" && (n = "readingOrder", r = 1), n === "readingOrder" && (e = !0), e ? t : t + " " + n + "=\"" + r + "\" "), "") + " /></xf>";
		}
		let s = n?.border, c = "";
		if (typeof s == "object" && ((s.left || s.full) && (c += "<left style=\"" + (s.left || s.full).style + "\"><color rgb=\"" + S((s.left || s.full).color, o).replace("#", "") + "\" /></left>"), (s.right || s.full) && (c += "<right style=\"" + (s.right || s.full).style + "\"><color rgb=\"" + S((s.right || s.full).color, o).replace("#", "") + "\" /></right>"), (s.top || s.full) && (c += "<top style=\"" + (s.top || s.full).style + "\"><color rgb=\"" + S((s.top || s.full).color, o).replace("#", "") + "\" /></top>"), (s.bottom || s.full) && (c += "<bottom style=\"" + (s.bottom || s.full).style + "\"><color rgb=\"" + S((s.bottom || s.full).color, o).replace("#", "") + "\" /></bottom>"), r.borderIndex = e.border.count, e.border.count++, e.border.value += "<border>" + c + "<diagonal /></border>"), n?.format) {
			let t = a[n.format];
			t && (r.formatIndex = t.key, "value" in t && (e.format.count++, e.format.value += t.value));
		}
		return e.cell.value = e.cell.value + "<xf numFmtId=\"" + r.formatIndex + "\" fontId=\"" + r.fontIndex + "\" fillId=\"" + r.fillIndex + "\" borderId=\"" + r.borderIndex + "\" xfId=\"0\"" + (r.borderIndex > 0 ? " applyBorder=\"1\" " : "") + (r.fillIndex > 0 ? " applyFill=\"1\" " : "") + (r.fontIndex >= 0 ? " applyFont=\"1\" " : "") + (r.formatIndex > 0 ? " applyNumberFormat=\"1\" " : "") + i, e.styleIndexMap[t] = e.cell.count, e.cell.count++, e;
	}, {
		conditionalFormatting: {
			count: +!!x,
			value: "<dxf><font><color rgb=\"FF9C0006\"/></font><fill> <patternFill> <bgColor rgb=\"FFFFC7CE\"/></patternFill></fill></dxf>"
		},
		styleIndexMap: {},
		commentSyntax: { value: {} },
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
	});
	m?.file("styles.xml", O(T, x));
	let ee = "<Override ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml\" PartName=\"/xl/worksheets/sheet1.xml\" />", E = "", D = 0, te = "", k = "", j = {}, fe = {}, M = "", N = 4, pe = !1, me = -1, P = [], he = 1, ge = { checkbox: "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<formControlPr xmlns=\"http://schemas.microsoft.com/office/spreadsheetml/2009/9/main\" objectType=\"CheckBox\" **value** **fmlaLink** lockText=\"1\" noThreeD=\"1\"/>" }, _e = 1024, ve = { checkbox: "<v:shape id=\"***id***\" type=\"#_x0000_t201\" style='position:absolute;\n  margin-left:1.5pt;margin-top:1.5pt;width:63pt;height:16.5pt;z-index:1;\n  mso-wrap-style:tight' filled=\"f\" fillcolor=\"window [65]\" stroked=\"f\"\n  strokecolor=\"windowText [64]\" o:insetmode=\"auto\">\n  <v:path shadowok=\"t\" strokeok=\"t\" fillok=\"t\"/>\n  <o:lock v:ext=\"edit\" rotation=\"t\"/>\n  <v:textbox style='mso-direction-alt:auto' o:singleclick=\"f\">\n   <div style='text-align:left'><font face=\"Segoe UI\" size=\"160\" color=\"auto\">***text***</font></div>\n  </v:textbox>\n  <x:ClientData ObjectType=\"Checkbox\">\n   <x:SizeWithCells/>\n   <x:Anchor>\n    0, 2, 0, 2, 0, 86, 1, 0</x:Anchor>\n   <x:AutoFill>False</x:AutoFill>\n   <x:AutoLine>False</x:AutoLine>\n   <x:TextVAlign>Center</x:TextVAlign>\n   <x:NoThreeD/>\n  </x:ClientData>\n </v:shape>" }, F = { checkbox: "<v:shapetype id=\"_x0000_t201\" coordsize=\"21600,21600\" o:spt=\"201\"\n  path=\"m,l,21600r21600,l21600,xe\">\n  <v:stroke joinstyle=\"miter\"/>\n  <v:path shadowok=\"f\" o:extrusionok=\"f\" strokeok=\"f\" fillok=\"f\" o:connecttype=\"rect\"/>\n  <o:lock v:ext=\"edit\" shapetype=\"t\"/>\n </v:shapetype>" }, I = [], ye = "", L = !1, R = null;
	for (let t = 0; t < f; t++) {
		let n = d[t];
		if (!n) continue;
		let a = t + 1, l = {}, u = {
			start: "",
			end: ""
		}, f = n.asTable, p = "", v = n.shiftTop && n.shiftTop >= 0 ? n.shiftTop + 1 : 1, O = "", ne = "", re = "", se = "", A = "", F = "", z = !1, B = "", V = "", H = "", be = "", U = Object.assign([], n.merges), W = Object.assign({}, n.formula), G = Object.assign([], n.conditionalFormatting), K = !1, q = [], J = "", Y = [], xe = [], Se = [], Ce = [], X = {}, Z = "", Q = !1, we = "";
		if (n.zoomScale && (A += (n.zoomScale.startAt ? " topLeftCell=\"" + n.zoomScale.startAt + "\" " : "") + "  zoomScale=\"" + n.zoomScale.scale + "\" zoomScaleNormal=\"" + n.zoomScale.scale + "\"  "), n.rtl && (A += " rightToLeft=\"1\" "), n.pageBreak) {
			let e = n.pageBreak;
			if (e.row && Array.isArray(e.row)) {
				F = "pageBreakPreview";
				let t = e.row.length;
				we += "<rowBreaks count=\"" + t + "\" manualBreakCount=\"" + t + "\">" + e.row.reduce((e, t) => e + "<brk id=\"" + t + "\" max=\"16383\" man=\"1\"/>", "") + "</rowBreaks>";
			}
			if (e.column && Array.isArray(e.column)) {
				F = "pageBreakPreview";
				let t = e.column.length;
				we += "<colBreaks count=\"" + t + "\" manualBreakCount=\"" + t + "\">" + e.column.reduce((e, t) => e + "<brk id=\"" + t + "\" max=\"16383\" man=\"1\"/>", "") + "</colBreaks>";
			}
		}
		let Te = "";
		if (n.pageOption) {
			let e = n.pageOption;
			if (e.isPortrait && (Q = !0), e.margin) {
				let t = e.margin, n = {
					left: .7,
					right: .7,
					top: .75,
					bottom: .75,
					header: .3,
					footer: .3
				};
				Object.keys(n).forEach((e) => {
					typeof t[e] == "number" && (n[e] = t[e]);
				}), Te = "<pageMargins left=\"" + n.left + "\" right=\"" + n.right + "\" top=\"" + n.top + "\" bottom=\"" + n.bottom + "\" header=\"" + n.header + "\" footer=\"" + n.footer + "\"/>";
			}
			let t = "", r = "", i = "", a = "";
			if (["header", "footer"].forEach((n) => {
				let o = n.charAt(0).toUpperCase() + n.substring(1);
				if (e[n]) {
					let s = e[n];
					typeof s == "object" && Object.keys(s).forEach((e) => {
						t.indexOf(e) < 0 && (t += e);
						let n = s[e], c = "";
						if (Object.keys(n).reduce((e, t) => (t == "l" ? e.splice(0, 0, t) : t == "c" ? e.splice(1, 0, t) : t == "r" && e.splice(2, 0, t), e), []).forEach((e) => {
							let t = n[e];
							c += "&amp;" + e.toUpperCase(), t.styleId && C[t.styleId] && (c += C[t.styleId]), t.text && (c += t.text);
						}), c = "<" + e + o + ">" + c + "</" + e + o + ">", e == "odd") r += c;
						else if (e == "even") i += c;
						else if (e == "first") a += c;
						else throw "type error";
					});
				}
			}), Z = r + i + a, Z.length > 0) {
				Q = !0;
				let e = t.length == 7 || t.length == 12 ? " differentOddEven=\"1\"" : "", n = t.indexOf("first") >= 0 ? " differentFirst=\"1\"" : "";
				Z = "<headerFooter" + e + n + ">" + Z + "</headerFooter>";
			}
		}
		if (n.viewOption) {
			let t = "", r = n.viewOption;
			r.type && (F = r.type), r.hideRuler && (A += " showRuler=\"0\" "), r.hideGrid && (A += " showGridLines=\"0\" "), r.hideHeadlines && (A += " showRowColHeaders=\"0\" ");
			let i = r.splitOption;
			if (i === void 0 && (Q = !1, typeof r.frozenOption == "object")) {
				let n = r.frozenOption;
				if (t = " state=\"frozen\" ", n.type == "R" || n.type == "ROW") {
					let e;
					e = typeof n.index == "object" ? n.index.r : n.index, i = {
						startAt: { b: "A" + (e + 1) },
						type: "H",
						split: e
					};
				} else if (n.type == "C" || n.type == "COLUMN") {
					let t;
					t = typeof n.index == "object" ? n.index.c : n.index, t > c.length - 1 && (c = e(c, t)), i = {
						type: "V",
						startAt: { r: c[t] + 1 },
						split: t
					};
				} else if (n.type == "B" || n.type == "BOTH") {
					let t = "", r;
					typeof n.index == "number" ? (r = n.index, c[r] || (c = e(c, r)), t = c[r] + (n.index + 1)) : (r = {
						y: n.index.r,
						x: n.index.c
					}, c[n.index.c] || (c = e(c, n.index.c)), t = c[n.index.c] + (n.index.r + 1)), i = {
						startAt: { two: t },
						type: "B",
						split: r
					};
				}
			}
			if (i) if (i.type == "H" || i.type == "HORIZONTAL") {
				let e;
				i.startAt && (e = i.startAt.b, i.startAt.t && (A += " topLeftCell=\"" + i.startAt.t + "\"")), e ||= "A1", se = "<pane ySplit=\"" + (typeof i.split == "object" && i.split.y || i.split) + "\" topLeftCell=\"" + e + "\" activePane=\"bottomLeft\"" + t + "/>";
			} else if (i.type == "V" || i.type == "VERTICAL") {
				let e;
				i.startAt && (e = i.startAt.r, i.startAt.l && (A += " topLeftCell=\"" + i.startAt.l + "\"")), e ||= "A1", se = "<pane xSplit=\"" + (typeof i.split == "object" && i.split.x || i.split) + "\" topLeftCell=\"" + e + "\" activePane=\"topLeft\"" + t + "/>";
			} else {
				let e;
				i.startAt && (e = i.startAt.two, i.startAt.one && (A += " topLeftCell=\"" + i.startAt.one + "\"")), e ||= "A1", se = "<pane xSplit=\"" + (typeof i.split == "object" && i.split.x || i.split) + "\" ySplit=\"" + (typeof i.split == "object" && i.split.y || i.split) + "\" topLeftCell=\"" + e + "\" activePane=\"bottomLeft\"" + t + "/>";
			}
		}
		if (Q && (F = "pageLayout"), n.checkbox) {
			z = !0;
			let e = ge.checkbox;
			n.checkbox.forEach((n, i) => {
				let a = e;
				if (n.link) {
					let e = r(n.link, c);
					a = a.replace("**fmlaLink**", "fmlaLink=\"$" + c[e.col] + "$" + (e.row + 1) + "\"");
				} else a = a.replace("**fmlaLink**", "");
				a = n.mixed ? a.replace("**value**", "checked=\"Mixed\"") : n.checked ? a.replace("**value**", "checked=\"Checked\"") : a.replace("**value**", ""), n.threeD && a.replace("noThreeD=\"1\"", ""), I.push(a), _e++;
				let o = t + "" + _e++, s = "_x0000_s" + o;
				V += ve.checkbox.replace("***id***", s).replace("***text***", n.text);
				let l = n.startStr, u = n.endStr, d = {
					start: {
						col: 0,
						row: 0
					},
					end: {
						col: 1,
						row: 1
					}
				};
				if (n.col && n.row && (d = {
					start: {
						col: n.col,
						row: n.row - 1
					},
					end: {
						col: n.col,
						row: n.row
					}
				}), typeof l == "string" && l.length >= 2) {
					let e = r(l, c);
					d.start = { ...e }, d.end = {
						col: e.col + 1,
						row: e.row + 1
					};
				}
				if (typeof u == "string" && u.length >= 2) {
					let e = r(u, c);
					e.row += 1, e.col += 1, d.end = { ...e };
				}
				be += "<mc:AlternateContent xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\"><mc:Choice Requires=\"x14\"><control shapeId=\"" + o + "\" r:id=\"rId" + (7 + i) + "\" name=\"" + n.text + "\"><controlPr defaultSize=\"0\" autoFill=\"0\" autoLine=\"0\" autoPict=\"0\"><anchor moveWithCells=\"1\"><from><xdr:col>" + d.start.col + "</xdr:col><xdr:colOff>19050</xdr:colOff><xdr:row>" + d.start.row + "</xdr:row><xdr:rowOff>19050</xdr:rowOff></from><to><xdr:col>" + d.end.col + "</xdr:col><xdr:colOff>819150</xdr:colOff><xdr:row>" + d.end.row + "</xdr:row><xdr:rowOff>0</xdr:rowOff></to></anchor></controlPr></control></mc:Choice></mc:AlternateContent>", H += "<Relationship Id=\"rId" + (7 + i) + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp\" Target=\"../ctrlProps/ctrlProp" + I.length + ".xml\" />", B += "<mc:AlternateContent xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\"><mc:Choice xmlns:a14=\"http://schemas.microsoft.com/office/drawing/2010/main\" Requires=\"a14\"><xdr:twoCellAnchor editAs=\"oneCell\"><xdr:from><xdr:col>" + d.start.col + "</xdr:col><xdr:colOff>19050</xdr:colOff><xdr:row>" + d.start.row + "</xdr:row><xdr:rowOff>19050</xdr:rowOff></xdr:from><xdr:to><xdr:col>" + d.end.col + "</xdr:col><xdr:colOff>819150</xdr:colOff><xdr:row>" + d.end.row + "</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:to><xdr:sp macro=\"\" textlink=\"\"><xdr:nvSpPr><xdr:cNvPr id=\"" + o + "\" name=\"" + n.text + "\" hidden=\"1\"><a:extLst><a:ext uri=\"\"><a14:compatExt spid=\"" + s + "\"/></a:ext><a:ext uri=\"\"><a16:creationId xmlns:a16=\"http://schemas.microsoft.com/office/drawing/2014/main\" id=\"\"/></a:ext></a:extLst></xdr:cNvPr><xdr:cNvSpPr/></xdr:nvSpPr><xdr:spPr bwMode=\"auto\"><a:xfrm><a:off x=\"0\" y=\"0\"/><a:ext cx=\"0\" cy=\"0\"/></a:xfrm><a:prstGeom prst=\"rect\"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></xdr:spPr><xdr:txBody><a:bodyPr vertOverflow=\"clip\" wrap=\"square\" lIns=\"27432\" tIns=\"18288\" rIns=\"0\" bIns=\"18288\" anchor=\"ctr\" upright=\"1\"/><a:lstStyle/><a:p><a:pPr algn=\"l\" rtl=\"0\"><a:defRPr sz=\"1000\"/></a:pPr><a:r><a:rPr lang=\"en-US\" sz=\"800\" b=\"0\" i=\"0\" u=\"none\" strike=\"noStrike\" baseline=\"0\"><a:solidFill><a:srgbClr val=\"000000\"/></a:solidFill><a:latin typeface=\"Segoe UI\"/><a:cs typeface=\"Segoe UI\"/></a:rPr><a:t>" + n.text + "</a:t></a:r></a:p></xdr:txBody></xdr:sp><xdr:clientData/></xdr:twoCellAnchor></mc:Choice><mc:Fallback/></mc:AlternateContent>";
			});
		}
		let Ee;
		if (n.backgroundImage) {
			h ??= m?.folder("media");
			let e = n.backgroundImage;
			Ee = new Promise(async (t, n) => {
				let r = e.lastIndexOf("."), a;
				r > 0 ? (a = e.substring(r + 1).toLowerCase(), a.length > 4 && (a = a.indexOf("gif") >= 0 ? "gif" : a.indexOf("jpg") >= 0 ? "jpg" : a.indexOf("jpeg") >= 0 ? "jpeg" : "png")) : a = "png";
				let s = he++, c = "image" + s + "." + a, l = await ue(e, c, o, i.fetch);
				l || n("image not load"), P.push(a), t({
					name: c,
					type: a,
					image: l,
					ref: s
				});
			});
		}
		let De;
		if (n.images && (h ??= m?.folder("media"), De = Promise.all([...n.images.map(async (e, t) => {
			let n = e.url.lastIndexOf("."), r;
			n > 0 ? (r = e.url.substring(n + 1).toLowerCase(), r.length > 4 && (r = r.indexOf("gif") >= 0 ? "gif" : r.indexOf("jpg") >= 0 ? "jpg" : r.indexOf("jpeg") >= 0 ? "jpeg" : "png")) : r = "png", P.push(r);
			let a = "image" + he++ + "." + r;
			return {
				type: r,
				image: await ue(e.url, a, o, i.fetch),
				obj: e,
				i: t,
				name: a
			};
		})])), Array.isArray(n.headers) && n.headers.length) {
			let r = n.headers.length, i = "";
			if (n.title) {
				let e = n.title, t = e.comment, a = e.shiftTop && e.shiftTop >= 0 ? e.shiftTop : 0, o = n.shiftLeft && n.shiftLeft >= 0 ? n.shiftLeft : 0, s = e.shiftLeft && e.shiftLeft + o >= 0 ? e.shiftLeft + o : o, u = e.consommeRow ? e.consommeRow - 1 : 1, d = e.consommeCol ? e.consommeCol : r, f = u == 0 && typeof e.height == "number" ? " ht=\"" + e.height + "\" customHeight=\"1\" " : "", p = e.styleId ? e.styleId : "titleStyle", m = c[s] + "" + (v + a);
				if (U.push(m + ":" + c[s + d - 1] + (v + u + a)), t !== void 0) {
					K = !0;
					let e = ae(t, T.commentSyntax.value, b), n = q.length;
					if (e.hasAuthor && e.author !== void 0) {
						let t = e.author.toString(), r = q.indexOf(t);
						r < 0 ? q.push(t) : n = r;
					}
					Y.push({
						row: v + a - 1,
						col: s
					}), J += oe(m, e.commentStr, e.commentStyle, n);
				}
				typeof e.text == "string" && (l[v + a] = {
					startTag: "<row r=\"" + (v + a) + "\" " + f + " spans=\"1:" + Math.max(s + d - 1, 1) + "\">",
					details: "<c r=\"" + m + "\" " + (T.styleIndexMap[p] ? " s=\"" + T.styleIndexMap[p] + "\" " : "") + " t=\"s\"><v>" + D + "</v></c>",
					endTag: "</row>"
				}, i += "<row r=\"" + (v + a) + "\" " + f + " spans=\"1:" + Math.max(s + d - 1, 1) + "\">", i += "<c r=\"" + m + "\" " + (T.styleIndexMap[p] ? " s=\"" + T.styleIndexMap[p] + "\" " : "") + " t=\"s\"><v>" + D + "</v></c>", i += "</row>", D++, j[e.text] = e.text, e.multiStyleValue && Array.isArray(e.multiStyleValue) ? E += le(e.multiStyleValue, T.commentSyntax.value, p) : E += "<si><t>" + ce(e.text) + "</t></si>"), v += a + u + 1;
			}
			let o = n.headerStyleKey ? n.headerStyleKey : null, s = 0;
			if (typeof n.shiftLeft == "number" && n.shiftLeft >= 0 && (s = n.shiftLeft), f && (p += "<tableColumns count=\"" + n.headers.length + "\">", R ||= m?.folder("tables")), u.start = c[s] + "" + v, u.end = c[s + n.headers.length - 1] + "" + (v + n.data.length), n.headers.forEach((t, r) => {
				if (f && (p += "<tableColumn id=\"" + (r + 1) + "\" name=\"" + t.text + "\"/>"), s && (r += s), t.formula && Se.push(r), t.conditionalFormatting && x && Ce.push(r), xe.push(t.label), n.mergeRowDataCondition && typeof n.mergeRowDataCondition == "function" && n.mergeRowDataCondition(t, null, r, !0) === !0 && (c[r] || (c = e(c, r)), X[c[r]] = {
					inProgress: !0,
					start: v
				}), n.styleCellCondition && typeof n.styleCellCondition == "function" && (o = n.styleCellCondition(t, t, v, r, !0, y) || o), t.size && t.size > 0 && (ne += "<col min=\"" + (r + 1) + "\" max=\"" + (r + 1) + "\" width=\"" + t.size + "\" customWidth=\"1\" />"), n.withoutHeader) return;
				let i = c[r] + "" + v;
				if (typeof n.commentCondition == "function") {
					let e = n.commentCondition(t, null, t.label, v, r, !0);
					(typeof e == "string" || typeof e == "object" && e) && (t.comment = e);
				}
				if (t.comment) {
					K = !0;
					let e = ae(t.comment, T.commentSyntax.value, b), n = q.length;
					if (e.hasAuthor && e.author !== void 0) {
						let t = e.author.toString(), r = q.indexOf(t);
						r < 0 ? q.push(t) : n = r;
					}
					Y.push({
						row: v - 1,
						col: r
					}), J += oe(i, e.commentStr, e.commentStyle, n);
				}
				let l = W && W[i];
				if (l) {
					let e = ie(i, l, a, T.styleIndexMap);
					e.needCalcChain && (L = !0, ye += e.chainCell), O += e.cell, delete W[i];
				} else {
					if (O += "<c r=\"" + c[r] + v + "\" " + (o && T.styleIndexMap[o] ? " s=\"" + T.styleIndexMap[o] + "\" " : "") + " t=\"s\"><v>" + D + "</v></c>", typeof n.multiStyleCondition == "function") {
						let e = n.multiStyleCondition(t, null, t.label, v, r, !0);
						e && (t.multiStyleValue = e);
					}
					t.multiStyleValue && Array.isArray(t.multiStyleValue) ? E += le(t.multiStyleValue, T.commentSyntax.value, o || "") : E += "<si><t>" + ce(t.text) + "</t></si>", j[t.text] = t.text, D++;
				}
			}), f && (p += "</tableColumns>"), n.withoutHeader) O += i;
			else {
				let e = "<row r=\"" + v + "\" spans=\"1:" + Math.max(r, 1) + "\" " + (n.headerHeight ? "ht=\"" + n.headerHeight + "\" customHeight=\"1\"" : "") + (n.headerRowOption ? Object.keys(n.headerRowOption).reduce((e, t) => e + " " + t + "=\"" + n.headerRowOption[t] + "\" ", "  ") : "") + ">";
				l[v] = {
					startTag: e,
					endTag: "</row>",
					details: O
				}, O = i + e + O + "</row>", v++;
			}
			if (Array.isArray(n.data)) {
				let i = n.mapSheetDataOption && n.mapSheetDataOption.outlineLevel ? n.mapSheetDataOption.outlineLevel : "outlineLevel", o = n.mapSheetDataOption && n.mapSheetDataOption.hidden ? n.mapSheetDataOption.hidden : "hidden", u = n.mapSheetDataOption && n.mapSheetDataOption.height ? n.mapSheetDataOption.height : "height", d = n.data.length;
				n.data.forEach((f, p) => {
					if (f.mergeType) for (let e = 0; e < f.mergeType.length; e++) {
						let n = f.mergeType[e], r = f.mergeStart[e], i = f.mergeValue[t], a = "";
						a = n == "both" ? c[r] + "" + v + ":" + c[r + i[1]] + (v + i[0]) : n == "col" ? c[r] + "" + v + ":" + c[r + i[0]] + v : c[r] + "" + v + ":" + c[r] + (v + i[0]), U.push(a);
					}
					let m = f.rowStyle, h = "<row r=\"" + v + "\" spans=\"1:" + Math.max(r, 1) + "\" " + (u in f ? "ht=\"" + f[u] + "\" customHeight=\"1\"" : "") + (i in f ? " outlineLevel=\"" + f[i] + "\"" : "") + (o in f ? " hidden=\"" + f[o] + "\"" : "") + " >";
					O += h;
					let g = "";
					xe.forEach((t, r) => {
						s && (r += s);
						let i = f[t] * 1, o = n.convertStringToNumber && !isNaN(i) ? i : f[t];
						typeof o == "boolean" && (o += "");
						let l = m;
						if (n.styleCellCondition && typeof n.styleCellCondition == "function" && (l = n.styleCellCondition(o, f, v, r, !1, y) || m), n.mergeRowDataCondition && typeof n.mergeRowDataCondition == "function") {
							let i = n.mergeRowDataCondition(o, t, r, !1);
							c[r] || (c = e(c, r));
							let a = c[r], s = X[a];
							i === !0 ? (!s || s && !s.inProgress) && (X[a] = {
								inProgress: !0,
								start: v
							}) : s && s.inProgress && (U.push(a + s.start + ":" + a + (v - 1)), X[a] = {
								inProgress: !1,
								start: -1
							});
						}
						o === void 0 && (o = "");
						let u = c[r] + "" + v;
						if (typeof n.commentCondition == "function") {
							let e = n.commentCondition(o, f, t, v, r, !1);
							(typeof e == "string" || typeof e == "object" && e) && (typeof f.comment != "object" && (f.comment = {}), f.comment[t] = e);
						}
						if (typeof f.comment == "object" && t in f.comment) {
							let e = f.comment[t];
							K = !0;
							let n = ae(e ?? "", T.commentSyntax.value, b);
							n.hasAuthor && n.author !== void 0 && q.push(n.author.toString()), Y.push({
								row: v - 1,
								col: r
							});
							let i = q.length;
							if (n.hasAuthor && n.author !== void 0) {
								let e = n.author.toString(), t = q.indexOf(e);
								t < 0 ? q.push(e) : i = t;
							}
							J += oe(u, n.commentStr, n.commentStyle, i);
						}
						let d = W && W[u];
						if (d) {
							let e = ie(u, d, a, T.styleIndexMap);
							e.needCalcChain && (L = !0, ye += e.chainCell), O += e.cell, g += e.cell, delete W[u];
						} else if (typeof o == "string") {
							let e = "<c r=\"" + c[r] + v + "\" t=\"s\" " + (l && T.styleIndexMap[l] ? "s=\"" + T.styleIndexMap[l] + "\"" : "") + "><v>" + D + "</v></c>";
							if (g += e, O += e, typeof n.multiStyleCondition == "function") {
								let e = n.multiStyleCondition(o, f, t, v, r, !1);
								e && ((!("multiStyleValue" in f) || f.multiStyleValue === void 0) && (f.multiStyleValue = {}), f.multiStyleValue[t] = e);
							}
							"multiStyleValue" in f && f.multiStyleValue && t in f.multiStyleValue && Array.isArray(f.multiStyleValue[t]) ? E += le(f.multiStyleValue[t], T.commentSyntax.value, l || "") : E += "<si><t>" + ce(o) + "</t></si>", j[o] = o, D++;
						} else {
							let e = "<c r=\"" + c[r] + v + "\" " + (l && T.styleIndexMap[l] ? "s=\"" + T.styleIndexMap[l] + "\"" : "") + "><v>" + o + "</v></c>";
							O += e, g += e;
						}
					}), d - 1 == p && Object.entries(X).forEach(([e, t]) => {
						t.inProgress && U.push(e + t.start + ":" + e + v);
					}), l[v] = {
						startTag: h,
						endTag: "</row>",
						details: g
					}, v++, O += "</row>";
				}), n.sortAndFilter && (n.sortAndFilter.mode == "all" ? re += "<autoFilter ref=\"A1:" + c[r - 1] + (v - 1) + "\" />" : typeof n.sortAndFilter.ref == "string" && n.sortAndFilter.ref.length > 0 && (re += "<autoFilter ref=\"" + n.sortAndFilter.ref + "\" />"));
			}
			if (Se.length > 0 && Se.forEach((e) => {
				let t = n.shiftLeft ? n.shiftLeft : 0, r = n.headers[e - t];
				if (!r?.formula) return;
				let i = c[e];
				W[i + "" + v] = {
					start: n.withoutHeader ? i + "1" : i + "2",
					end: i + "" + (v - 1),
					type: r.formula.type,
					...r.formula.styleId ? { styleId: r.formula.styleId } : {}
				};
			}), Ce.length > 0 && x && Ce.forEach((e) => {
				let t = n.headers[e];
				t?.conditionalFormatting && G.push({
					...t.conditionalFormatting,
					start: n.withoutHeader ? c[e] + "1" : c[e] + "2",
					end: c[e] + "" + (v - 1)
				});
			}), W) {
				let e = Object.keys(W).sort((e, t) => e > t ? 1 : -1);
				if (e.length) {
					let t = {};
					e.forEach((e) => {
						if (!W[e]) return;
						let n = ie(e, W[e], a, T.styleIndexMap);
						n.needCalcChain && (L = !0, ye += n.chainCell), t[n.row] ? t[n.row] += n.cell : t[n.row] = n.cell;
					}), Object.entries(t).sort((e, t) => +e[0] > +t[0] ? 1 : -1).forEach(([e, t]) => {
						let n = e, i = l[n];
						if (i) {
							let e = i.startTag + i.details + t + i.endTag, n = RegExp(i.startTag + "[\\n\\s\\S]*?</row>");
							O = O.replace(n, e);
						} else O += "<row r=\"" + e + "\" spans=\"1:" + Math.max(r, 1) + "\"  >" + t + "</row>", l[n] = {
							startTag: "<row r=\"" + e + "\" spans=\"1:" + Math.max(r, 1) + "\"  >",
							endTag: "</row>",
							details: t
						};
					});
				}
			}
		}
		t > 0 && (ee += "<Override    ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml\"    PartName=\"/xl/worksheets/sheet" + (t + 1) + ".xml\" />");
		let Oe = n.name ? n.name : "sheet" + (t + 1), ke = n.state ? n.state : "visible";
		te += "<sheet state=\"" + ke + "\" name=\"" + Oe + "\" sheetId=\"" + (t + 1) + "\" r:id=\"rId" + (N + 1) + "\" />", k += "<Relationship Id=\"rId" + (N + 1) + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet\" Target=\"worksheets/sheet" + (t + 1) + ".xml\" />", M += "<vt:lpstr>" + ("sheet" + (t + 1)) + "</vt:lpstr>", n.selected && (pe = !0, me = t);
		let Ae = n.sortAndFilter ? "filterMode=\"1\"" : "", je = -1;
		Ee && await Ee.then((e) => {
			let t = e;
			je = t.ref, h?.file(t.name, t.image);
		});
		let Me = !1, Ne = "", Pe = "";
		De && (Me = !0, await De.then((e) => {
			let t = "";
			e.forEach((e, n) => {
				let i = n + 1, a = e.image, o = e.name, s = e.obj.from, l = e.obj.to, u = e.obj.margin, d = e.obj.type, f = e.obj.extent;
				f === void 0 && (f = {
					cx: 2e5,
					cy: 2e5
				});
				let p = {
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
				if (typeof s == "string" && s.length >= 2) {
					let e = r(s, c);
					p.start = { ...e }, p.end = {
						col: e.col + 1,
						row: e.row + 1
					};
				}
				if (typeof l == "string" && l.length >= 2) {
					let e = r(l, c);
					e.row += 1, e.col += 1, p.end = { ...e };
				}
				p.end.mR = 0, p.end.mB = 0, p.start.mL = 0, p.start.mT = 0, u && (p.end.mR = u.right ?? u.all ?? 0, p.end.mB = u.bottom ?? u.all ?? 0, p.start.mL = u.left ?? u.all ?? 0, p.start.mT = u.top ?? u.all ?? 0), d == "one" ? Ne += "<xdr:oneCellAnchor><xdr:from><xdr:col>" + p.start.col + "</xdr:col><xdr:colOff>" + p.start.mT + "</xdr:colOff><xdr:row>" + p.start.row + "</xdr:row><xdr:rowOff>" + p.start.mL + "</xdr:rowOff></xdr:from><xdr:ext cx=\"" + f.cx + "\" cy=\"" + f.cy + "\"/><xdr:pic><xdr:nvPicPr><xdr:cNvPr id=\"" + i + "\" name=\"Picture " + i + "\"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize=\"0\" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\" r:embed=\"rId" + i + "\"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst=\"rect\"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:oneCellAnchor>" : Ne += "<xdr:twoCellAnchor editAs=\"oneCell\"><xdr:from><xdr:col>" + p.start.col + "</xdr:col><xdr:colOff>" + p.start.mT + "</xdr:colOff><xdr:row>" + p.start.row + "</xdr:row><xdr:rowOff>" + p.start.mL + "</xdr:rowOff></xdr:from><xdr:to><xdr:col>" + p.end.col + "</xdr:col><xdr:colOff>" + p.end.mB + "</xdr:colOff><xdr:row>" + p.end.row + "</xdr:row><xdr:rowOff>" + p.end.mR + "</xdr:rowOff></xdr:to><xdr:pic><xdr:nvPicPr><xdr:cNvPr id=\"" + i + "\" name=\"Picture " + i + "\"></xdr:cNvPr><xdr:cNvPicPr preferRelativeResize=\"0\" /></xdr:nvPicPr><xdr:blipFill><a:blip xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\" r:embed=\"rId" + i + "\"></a:blip><a:stretch><a:fillRect /></a:stretch></xdr:blipFill><xdr:spPr><a:prstGeom prst=\"rect\"><a:avLst /></a:prstGeom><a:noFill /></xdr:spPr></xdr:pic><xdr:clientData /></xdr:twoCellAnchor>", h?.file(o, a), t += "<Relationship Id=\"rId" + i + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image\" Target=\"../media/" + o + "\" />";
			}), Pe = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">" + t + "</Relationships>";
		})), U = [...new Set(U)];
		let Fe = "", $ = 1;
		G.length > 0 && x && (Fe = G.reduce((e, t) => {
			if (t.type == "cells") return t.operator == "ct" ? e + "<conditionalFormatting sqref=\"" + t.start + ":" + t.end + "\"><cfRule type=\"containsText\" dxfId=\"" + (t.styleId && w[t.styleId] ? w[t.styleId] : 0) + "\" priority=\"" + (t.priority ? t.priority : $++) + "\"  operator=\"containsText\" text=\"" + t.value + "\"><formula>NOT(ISERROR(SEARCH(\"" + t.value + "\"," + t.start + ")))</formula></cfRule></conditionalFormatting>" : t.operator === void 0 || s[t.operator] === void 0 ? e : e + "<conditionalFormatting sqref=\"" + t.start + ":" + t.end + "\"><cfRule type=\"cellIs\" dxfId=\"" + (t.styleId && w[t.styleId] !== void 0 ? w[t.styleId] : 0) + "\" priority=\"" + (t.priority ? t.priority : $++) + "\" operator=\"" + s[t.operator] + "\">" + (Array.isArray(t.value) ? t.value.reduce((e, t) => e + "<formula>" + t.value + "</formula>", "") : "<formula>" + t.value + "</formula>") + "</cfRule></conditionalFormatting>";
			if (t.type == "top") return e + "<conditionalFormatting sqref=\"" + t.start + ":" + t.end + "\"><cfRule type=\"" + (t.operator ? "aboveAverage" : "top10") + "\" dxfId=\"" + (t.styleId && w[t.styleId] !== void 0 ? w[t.styleId] : 0) + "\" priority=\"" + (t.priority ? t.priority : $++) + "\" " + (t.bottom ? "bottom=\"1\"" : "") + " " + (t.percent ? "percent=\"1\"" : "") + "  rank=\"" + t.value + "\" " + (t.operator == "belowAverage" ? "aboveAverage=\"0\"" : "") + "/></conditionalFormatting>";
			if (t.type == "iconSet") {
				let n = "";
				return t.operator === void 0 ? e : (n = t.operator.indexOf("5") == 0 ? "<cfvo type=\"percent\" val=\"0\"/><cfvo type=\"percent\" val=\"20\"/><cfvo type=\"percent\" val=\"40\"/><cfvo type=\"percent\" val=\"60\"/><cfvo type=\"percent\" val=\"80\"/>" : t.operator.indexOf("4") == 0 ? "<cfvo type=\"percent\" val=\"0\"/><cfvo type=\"percent\" val=\"25\"/><cfvo type=\"percent\" val=\"50\"/><cfvo type=\"percent\" val=\"75\"/>" : "<cfvo type=\"percent\" val=\"0\"/><cfvo type=\"percent\" val=\"33\"/><cfvo type=\"percent\" val=\"67\"/>", e + "<conditionalFormatting sqref=\"" + t.start + ":" + t.end + "\"><cfRule type=\"iconSet\" priority=\"" + (t.priority ? t.priority : $++) + "\"><iconSet iconSet=\"" + t.operator + "\">" + n + "</iconSet></cfRule></conditionalFormatting>");
			} else if (t.type == "colorScale") return e + "<conditionalFormatting sqref=\"" + t.start + ":" + t.end + "\"><cfRule type=\"colorScale\" priority=\"" + (t.priority ? t.priority : $++) + "\"><colorScale><cfvo type=\"min\"/>" + (t.operator == "percentile" ? "<cfvo type=\"percentile\" val=\"" + t.value + "\"/>" : "") + "<cfvo type=\"max\"/>" + (t.colors && Array.isArray(t.colors) ? t.colors.reduce((e, t) => e + "<color rgb=\"" + S(t, o) + "\"/>", "") : "<color rgb=\"FFF8696B\"/><color rgb=\"FFFFEB84\"/><color rgb=\"FF63BE7B\"/>") + "</colorScale></cfRule></conditionalFormatting>";
			else if (t.type == "dataBar") return e + "<conditionalFormatting sqref=\"" + t.start + ":" + t.end + "\"><cfRule type=\"dataBar\" priority=\"" + (t.priority ? t.priority : $++) + "\"><dataBar><cfvo type=\"min\"/><cfvo type=\"max\"/>" + (t.colors && Array.isArray(t.colors) ? t.colors.reduce((e, t) => e + "<color rgb=\"" + S(t, o) + "\"/>", "") : "<color rgb=\"FF638EC6\"/>") + "</dataBar></cfRule></conditionalFormatting>";
			else return e;
		}, "")), (z || K || Me) && g == null && (g = m?.folder("drawings")), Me && _ == null && (_ = g?.folder("_rels")), fe["sheet" + (t + 1)] = {
			indexId: N + 1,
			key: "sheet" + (t + 1),
			sheetName: Oe,
			sheetDataTableColumns: p,
			backgroundImageRef: je,
			sheetDimensions: u,
			asTable: f || !1,
			sheetDataString: O,
			sheetDropDown: de(n.dropDowns),
			sheetBreakLine: we,
			viewType: F,
			hasComment: K,
			drawersContent: Ne,
			cFDataString: Fe,
			sheetMargin: Te,
			sheetHeaderFooter: Z,
			isPortrait: Q,
			drawersRels: Pe,
			hasImages: Me,
			hasCheckbox: z,
			formRel: H,
			checkboxDrawingContent: B,
			checkboxForm: I,
			checkboxSheetContent: be,
			checkboxShape: V,
			commentString: J,
			sheetValidation: n.dataValidations ?? [],
			commentAuthor: q,
			shapeCommentRowCol: Y,
			splitOption: se,
			sheetViewProperties: A,
			sheetSizeString: ne.length > 0 ? "<cols>" + ne + "</cols>" : "",
			protectionOption: n.protectionOption ? Object.keys(n.protectionOption).reduce((e, t) => e + " " + t + "=\"" + n.protectionOption[t] + "\" ", "<sheetProtection ") + "/>" : "",
			merges: U.length > 0 ? U.reduce((e, t) => e + " <mergeCell ref=\"" + t + "\" />", "<mergeCells count=\"" + U.length + "\">") + " </mergeCells>" : "",
			selectedView: !!n.selected,
			sheetSortFilter: re,
			tabColor: n.tabColor ? "<sheetPr codeName=\"" + ("Sheet" + (t + 1)) + "\" " + Ae + " ><tabColor rgb=\"" + n.tabColor.replace("#", "") + "\" /></sheetPr>" : "<sheetPr " + Ae + " ><outlinePr summaryBelow=\"0\" summaryRight=\"0\" /></sheetPr>"
		}, N++;
	}
	L && (N++, k += "<Relationship Id=\"rId" + N + "\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain\" Target=\"calcChain.xml\"/>", m?.file("calcChain.xml", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<calcChain xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\">" + ye + "</calcChain>"));
	let z = Object.keys(fe);
	u.folder("_rels")?.file(".rels", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\"> <Relationship Id=\"rId3\"  Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties\"  Target=\"docProps/app.xml\" /> <Relationship Id=\"rId2\"  Type=\"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties\"  Target=\"docProps/core.xml\" /> <Relationship Id=\"rId1\"  Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\"  Target=\"xl/workbook.xml\" /></Relationships>");
	let B = u.folder("docProps");
	B?.file("core.xml", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<cp:coreProperties xmlns:cp=\"http://schemas.openxmlformats.org/package/2006/metadata/core-properties\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:dcterms=\"http://purl.org/dc/terms/\" xmlns:dcmitype=\"http://purl.org/dc/dcmitype/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">" + (i.creator ? "<dc:creator>" + i.creator + "</dc:creator>" : "") + (i.created ? "<dcterms:created xsi:type=\"dcterms:W3CDTF\">" + i.created + "</dcterms:created>" : "") + (i.modified ? "<dcterms:modified xsi:type=\"dcterms:W3CDTF\">" + i.modified + "</dcterms:modified>" : "") + "</cp:coreProperties>"), B?.file("app.xml", re(f, M)), m?.file("workbook.xml", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<workbook xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\" xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\" xmlns:mx=\"http://schemas.microsoft.com/office/mac/excel/2008/main\" xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\" xmlns:mv=\"urn:schemas-microsoft-com:mac:vml\" xmlns:x14=\"http://schemas.microsoft.com/office/spreadsheetml/2009/9/main\" xmlns:x15=\"http://schemas.microsoft.com/office/spreadsheetml/2010/11/main\" xmlns:x14ac=\"http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac\" xmlns:xm=\"http://schemas.microsoft.com/office/excel/2006/main\"> <workbookPr />" + (pe || i.hidden ? "<bookViews><workbookView " + (i.hidden ? "visibility=\"hidden\" " : "") + "xWindow=\"3540\" yWindow=\"1365\" windowWidth=\"21600\" windowHeight=\"11325\" activeTab=\"" + (me ?? 0) + "\"/></bookViews>" : "") + " <sheets>  " + te + " </sheets> <definedNames /> <calcPr /></workbook>"), m?.file("sharedStrings.xml", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<sst xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\" count=\"" + (D - 1) + "\" uniqueCount=\"" + Object.keys(j).length + "\"> " + E + "</sst>"), (m?.folder("_rels"))?.file("workbook.xml.rels", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\"> <Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme\" Target=\"theme/theme1.xml\" /> <Relationship Id=\"rId2\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles\" Target=\"styles.xml\" /> <Relationship Id=\"rId3\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings\" Target=\"sharedStrings.xml\" /> " + k + " </Relationships>"), (m?.folder("theme"))?.file("theme1.xml", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<a:theme xmlns:a=\"http://schemas.openxmlformats.org/drawingml/2006/main\" xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\"  name=\"Office Theme\"><a:themeElements><a:clrScheme name=\"Office\"><a:dk1><a:sysClr val=\"windowText\" lastClr=\"000000\"/></a:dk1><a:lt1><a:sysClr val=\"window\" lastClr=\"FFFFFF\"/></a:lt1><a:dk2><a:srgbClr val=\"44546A\"/></a:dk2><a:lt2><a:srgbClr val=\"E7E6E6\"/></a:lt2><a:accent1><a:srgbClr val=\"5B9BD5\"/></a:accent1><a:accent2><a:srgbClr val=\"ED7D31\"/></a:accent2><a:accent3><a:srgbClr val=\"A5A5A5\"/></a:accent3><a:accent4><a:srgbClr val=\"FFC000\"/></a:accent4><a:accent5><a:srgbClr val=\"4472C4\"/></a:accent5><a:accent6><a:srgbClr val=\"70AD47\"/></a:accent6><a:hlink><a:srgbClr val=\"0563C1\"/></a:hlink><a:folHlink><a:srgbClr val=\"954F72\"/></a:folHlink></a:clrScheme><a:fontScheme name=\"" + (i.mainFontFamily ?? "Office") + "\"><a:majorFont><a:latin typeface=\"" + (i.mainFontFamily ?? "Calibri Light") + "\" panose=\"020F0302020204030204\"/><a:ea typeface=\"\"/><a:cs typeface=\"\"/><a:font script=\"Jpan\" typeface=\"游ゴシック Light\"/><a:font script=\"Hang\" typeface=\"맑은 고딕\"/><a:font script=\"Hans\" typeface=\"等线 Light\"/><a:font script=\"Hant\" typeface=\"新細明體\"/><a:font script=\"Arab\" typeface=\"Times New Roman\"/><a:font script=\"Hebr\" typeface=\"Times New Roman\"/><a:font script=\"Thai\" typeface=\"Tahoma\"/><a:font script=\"Ethi\" typeface=\"Nyala\"/><a:font script=\"Beng\" typeface=\"Vrinda\"/><a:font script=\"Gujr\" typeface=\"Shruti\"/><a:font script=\"Khmr\" typeface=\"MoolBoran\"/><a:font script=\"Knda\" typeface=\"Tunga\"/><a:font script=\"Guru\" typeface=\"Raavi\"/><a:font script=\"Cans\" typeface=\"Euphemia\"/><a:font script=\"Cher\" typeface=\"Plantagenet Cherokee\"/><a:font script=\"Yiii\" typeface=\"Microsoft Yi Baiti\"/><a:font script=\"Tibt\" typeface=\"Microsoft Himalaya\"/><a:font script=\"Thaa\" typeface=\"MV Boli\"/><a:font script=\"Deva\" typeface=\"Mangal\"/><a:font script=\"Telu\" typeface=\"Gautami\"/><a:font script=\"Taml\" typeface=\"Latha\"/><a:font script=\"Syrc\" typeface=\"Estrangelo Edessa\"/><a:font script=\"Orya\" typeface=\"Kalinga\"/><a:font script=\"Mlym\" typeface=\"Kartika\"/><a:font script=\"Laoo\" typeface=\"DokChampa\"/><a:font script=\"Sinh\" typeface=\"Iskoola Pota\"/><a:font script=\"Mong\" typeface=\"Mongolian Baiti\"/><a:font script=\"Viet\" typeface=\"Times New Roman\"/><a:font script=\"Uigh\" typeface=\"Microsoft Uighur\"/><a:font script=\"Geor\" typeface=\"Sylfaen\"/></a:majorFont><a:minorFont><a:latin typeface=\"" + (i.mainFontFamily ?? "Calibri") + "\" panose=\"020F0502020204030204\"/><a:ea typeface=\"\"/><a:cs typeface=\"\"/><a:font script=\"Jpan\" typeface=\"游ゴシック\"/><a:font script=\"Hang\" typeface=\"맑은 고딕\"/><a:font script=\"Hans\" typeface=\"等线\"/><a:font script=\"Hant\" typeface=\"新細明體\"/><a:font script=\"Arab\" typeface=\"Arial\"/><a:font script=\"Hebr\" typeface=\"Arial\"/><a:font script=\"Thai\" typeface=\"Tahoma\"/><a:font script=\"Ethi\" typeface=\"Nyala\"/><a:font script=\"Beng\" typeface=\"Vrinda\"/><a:font script=\"Gujr\" typeface=\"Shruti\"/><a:font script=\"Khmr\" typeface=\"DaunPenh\"/><a:font script=\"Knda\" typeface=\"Tunga\"/><a:font script=\"Guru\" typeface=\"Raavi\"/><a:font script=\"Cans\" typeface=\"Euphemia\"/><a:font script=\"Cher\" typeface=\"Plantagenet Cherokee\"/><a:font script=\"Yiii\" typeface=\"Microsoft Yi Baiti\"/><a:font script=\"Tibt\" typeface=\"Microsoft Himalaya\"/><a:font script=\"Thaa\" typeface=\"MV Boli\"/><a:font script=\"Deva\" typeface=\"Mangal\"/><a:font script=\"Telu\" typeface=\"Gautami\"/><a:font script=\"Taml\" typeface=\"Latha\"/><a:font script=\"Syrc\" typeface=\"Estrangelo Edessa\"/><a:font script=\"Orya\" typeface=\"Kalinga\"/><a:font script=\"Mlym\" typeface=\"Kartika\"/><a:font script=\"Laoo\" typeface=\"DokChampa\"/><a:font script=\"Sinh\" typeface=\"Iskoola Pota\"/><a:font script=\"Mong\" typeface=\"Mongolian Baiti\"/><a:font script=\"Viet\" typeface=\"Arial\"/><a:font script=\"Uigh\" typeface=\"Microsoft Uighur\"/><a:font script=\"Geor\" typeface=\"Sylfaen\"/></a:minorFont></a:fontScheme><a:fmtScheme name=\"Office\"><a:fillStyleLst><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:gradFill rotWithShape=\"1\"><a:gsLst><a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:lumMod val=\"110000\"/><a:satMod val=\"105000\"/><a:tint val=\"67000\"/></a:schemeClr></a:gs><a:gs pos=\"50000\"><a:schemeClr val=\"phClr\"><a:lumMod val=\"105000\"/><a:satMod val=\"103000\"/><a:tint val=\"73000\"/></a:schemeClr></a:gs><a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:lumMod val=\"105000\"/><a:satMod val=\"109000\"/><a:tint val=\"81000\"/></a:schemeClr></a:gs></a:gsLst><a:lin ang=\"5400000\" scaled=\"0\"/></a:gradFill><a:gradFill rotWithShape=\"1\"><a:gsLst><a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:satMod val=\"103000\"/><a:lumMod val=\"102000\"/><a:tint val=\"94000\"/></a:schemeClr></a:gs><a:gs pos=\"50000\"><a:schemeClr val=\"phClr\"><a:satMod val=\"110000\"/><a:lumMod val=\"100000\"/><a:shade val=\"100000\"/></a:schemeClr></a:gs><a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:lumMod val=\"99000\"/><a:satMod val=\"120000\"/><a:shade val=\"78000\"/></a:schemeClr></a:gs></a:gsLst><a:lin ang=\"5400000\" scaled=\"0\"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w=\"6350\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/><a:miter lim=\"800000\"/></a:ln><a:ln w=\"12700\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/><a:miter lim=\"800000\"/></a:ln><a:ln w=\"19050\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/><a:miter lim=\"800000\"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad=\"57150\" dist=\"19050\" dir=\"5400000\" algn=\"ctr\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"63000\"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:solidFill><a:schemeClr val=\"phClr\"><a:tint val=\"95000\"/><a:satMod val=\"170000\"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape=\"1\"><a:gsLst><a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"93000\"/><a:satMod val=\"150000\"/><a:shade val=\"98000\"/><a:lumMod val=\"102000\"/></a:schemeClr></a:gs><a:gs pos=\"50000\"><a:schemeClr val=\"phClr\"><a:tint val=\"98000\"/><a:satMod val=\"130000\"/><a:shade val=\"90000\"/><a:lumMod val=\"103000\"/></a:schemeClr></a:gs><a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:shade val=\"63000\"/><a:satMod val=\"120000\"/></a:schemeClr></a:gs></a:gsLst><a:lin ang=\"5400000\" scaled=\"0\"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/></a:theme>");
	let V = m?.folder("worksheets"), H = [], be = [], U = [];
	if (z.forEach((e, t) => {
		let n = fe[e];
		if (!n) return;
		let r = "", i = {
			form: !1,
			drawing: !1,
			vmlDrwing: !1,
			comment: !1,
			table: !1,
			sheetDrawingsPushed: !1
		}, a = n.sheetDataTableColumns;
		if (a.length > 0) {
			be.push("table" + (t + 1) + ".xml");
			let e = n.asTable, i = n.sheetDimensions;
			R?.file("table" + (t + 1) + ".xml", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<table xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\" xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\" mc:Ignorable=\"xr xr3\" xmlns:xr=\"http://schemas.microsoft.com/office/spreadsheetml/2014/revision\" xmlns:xr3=\"http://schemas.microsoft.com/office/spreadsheetml/2016/revision3\" id=\"" + (t + 1) + "\"  name=\"Table" + (t + 1) + "\" displayName=\"Table" + (t + 1) + "\" ref=\"" + i.start + ":" + i.end + "\" totalsRowShown=\"0\"><autoFilter ref=\"" + i.start + ":" + i.end + "\"/>" + a + "<tableStyleInfo name=\"TableStyle" + (e.type ? e.type : "Medium") + (e.styleNumber ? e.styleNumber : 2) + "\" showFirstColumn=\"" + (e.firstColumn ? e.firstColumn : "0") + "\" showLastColumn=\"" + (e.lastColumn ? e.lastColumn : "0") + "\" showRowStripes=\"" + (e.rowStripes ? e.rowStripes : "1") + "\" showColumnStripes=\"" + (e.columnStripes ? e.columnStripes : "0") + "\"/></table>"), r += "<Relationship Id=\"rId15\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/table\" Target=\"../tables/table" + (t + 1) + ".xml\"/>";
		}
		let o = "drawing" + (U.length + 1) + ".xml";
		if (n.hasImages && (U.push(o), i.sheetDrawingsPushed = !0, _?.file(o + ".rels", n.drawersRels.toString()), i.drawing = !0, r += "<Relationship Id=\"rId2\"  Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing\"  Target=\"../drawings/" + o + "\" />"), n.hasCheckbox && (i.sheetDrawingsPushed || U.push(o), r += "<Relationship Id=\"rId3\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing\" Target=\"../drawings/vmlDrawing" + (t + 1) + ".vml\" />" + (i.drawing ? "" : "<Relationship Id=\"rId2\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing\" Target=\"../drawings/" + o + "\" />"), i.drawing = !0, i.vmlDrwing = !0, r += n.formRel), (n.hasCheckbox || n.hasImages) && g?.file(o, "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<xdr:wsDr xmlns:xdr=\"http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing\"  xmlns:a=\"http://schemas.openxmlformats.org/drawingml/2006/main\"  xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\"  xmlns:c=\"http://schemas.openxmlformats.org/drawingml/2006/chart\"  xmlns:cx=\"http://schemas.microsoft.com/office/drawing/2014/chartex\"  xmlns:cx1=\"http://schemas.microsoft.com/office/drawing/2015/9/8/chartex\"  xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\"  xmlns:dgm=\"http://schemas.openxmlformats.org/drawingml/2006/diagram\"  xmlns:x3Unk=\"http://schemas.microsoft.com/office/drawing/2010/slicer\"  xmlns:sle15=\"http://schemas.microsoft.com/office/drawing/2012/slicer\">" + (n.hasImages ? n.drawersContent : "") + (n.hasCheckbox ? n.checkboxDrawingContent : "") + "</xdr:wsDr>"), n.hasComment) {
			H.push(t + 1);
			let e = n.commentAuthor;
			m?.file("comments" + (t + 1) + ".xml", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<comments xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\"  xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\"  xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\"><authors>" + (Array.isArray(e) && e.length > 0 ? e.reduce((e, t) => e + "<author>" + t + "</author>", "") : "<author></author>") + "</authors><commentList>" + n.commentString + "</commentList></comments>"), r += "<Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments\" Target=\"../comments" + (t + 1) + ".xml\" />" + (i.vmlDrwing ? "" : "<Relationship Id=\"rId3\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing\" Target=\"../drawings/vmlDrawing" + (t + 1) + ".vml\" />");
		}
		(n.hasComment || n.hasCheckbox) && g?.file("vmlDrawing" + (t + 1) + ".vml", "<xml xmlns:p=\"http://schemas.openxmlformats.org/presentationml/2006/main\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:oa=\"urn:schemas-microsoft-com:office:activation\" xmlns:x=\"urn:schemas-microsoft-com:office:excel\" xmlns:pvml=\"urn:schemas-microsoft-com:office:powerpoint\"><o:shapelayout v:ext=\"edit\"><o:idmap v:ext=\"edit\" data=\"1\"/></o:shapelayout>" + (n.hasCheckbox ? F.checkbox + n.checkboxShape : "") + (n.hasComment ? "  <v:shapetype id=\"_x0000_t202\" coordsize=\"21600,21600\" o:spt=\"202\"     path=\"m,l,21600r21600,l21600,xe\">    <v:stroke joinstyle=\"miter\"/>    <v:path gradientshapeok=\"t\" o:connecttype=\"rect\"/>  </v:shapetype>" + n.shapeCommentRowCol.reduce((e, t) => e + "<v:shape id=\"_x0000_s1025\" type=\"#_x0000_t202\" style='position:absolute;margin-left:77.25pt;margin-top:23.25pt;width:264pt;height:42.75pt;z-index:1;visibility:hidden' fillcolor=\"#ffffe1\">  <v:fill color2=\"#ffffe1\"/>  <v:shadow on=\"t\" color=\"black\" obscured=\"t\"/>  <v:path o:connecttype=\"none\"/>  <v:textbox>   <div style='text-align:left'></div>  </v:textbox>  <x:ClientData ObjectType=\"Note\">   <x:MoveWithCells/>   <x:SizeWithCells/>   <x:Anchor>    1, 15, 1, 10, 5, 15, 4, 4</x:Anchor>   <x:AutoFill>False</x:AutoFill>   <x:Row>" + t.row + "</x:Row>   <x:Column>" + t.col + "</x:Column>  </x:ClientData></v:shape>", "") : "") + "</xml>"), n.backgroundImageRef > 0 && (r += "<Relationship Id=\"rId16\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image\" Target=\"../media/image" + n.backgroundImageRef + ".png\"/>"), (n.hasImages || n.hasComment || n.hasCheckbox || a.length > 0 || n.backgroundImageRef > 0) && (V?.folder("_rels"))?.file("sheet" + (t + 1) + ".xml.rels", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\"> " + r + "</Relationships>");
		let s = "";
		s = n.selectedView || n.splitOption ? "<sheetViews><sheetView tabSelected=\"1\"" + n.sheetViewProperties + (n.viewType.length > 0 ? " view=\"" + n.viewType + "\"" : "") + " workbookViewId=\"0\">" + n.splitOption + (n.selectedView ? "<selection activeCell=\"A0\" sqref=\"A0\" />" : "") + "</sheetView></sheetViews>" : "<sheetViews><sheetView workbookViewId=\"0\"" + n.sheetViewProperties + (n.viewType.length > 0 ? " view=\"" + n.viewType + "\"" : "") + "/></sheetViews>", V?.file(n.key + ".xml", "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<worksheet xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\" xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\" xmlns:mx=\"http://schemas.microsoft.com/office/mac/excel/2008/main\" xmlns:xdr=\"http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing\"  xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\" xmlns:mv=\"urn:schemas-microsoft-com:mac:vml\" xmlns:xr=\"http://schemas.microsoft.com/office/spreadsheetml/2014/revision\" xmlns:xr2=\"http://schemas.microsoft.com/office/spreadsheetml/2015/revision2\" xmlns:xr3=\"http://schemas.microsoft.com/office/spreadsheetml/2016/revision3\" xmlns:x14=\"http://schemas.microsoft.com/office/spreadsheetml/2009/9/main\" xmlns:x15=\"http://schemas.microsoft.com/office/spreadsheetml/2010/11/main\" xmlns:x14ac=\"http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac\" xmlns:xm=\"http://schemas.microsoft.com/office/excel/2006/main\">" + n.tabColor + s + "<sheetFormatPr customHeight=\"1\" defaultColWidth=\"12.63\" defaultRowHeight=\"15.75\" />" + n.sheetSizeString + "<sheetData>" + n.sheetDataString + "</sheetData>" + n.sheetDropDown + n.protectionOption + n.sheetSortFilter + n.merges + n.cFDataString + (n.hasImages || n.hasCheckbox ? "<drawing r:id=\"rId2\" />" : "") + (n.hasComment || n.hasCheckbox ? "<legacyDrawing r:id=\"rId3\" />" : "") + (n.hasCheckbox ? "<mc:AlternateContent xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\"><mc:Choice Requires=\"x14\"><controls>" + n.checkboxSheetContent + "</controls></mc:Choice></mc:AlternateContent>" : "") + (Array.isArray(n.sheetValidation) && n.sheetValidation.length ? A(n.sheetValidation) : "") + n.sheetMargin + (n.isPortrait || n.sheetBreakLine.length > 0 ? "<pageSetup orientation=\"portrait\" r:id=\"rId" + (t + 1) + "\"/>" : "") + n.sheetBreakLine + n.sheetHeaderFooter + (n.backgroundImageRef > 0 ? "<picture r:id=\"rId16\"/>" : "") + (a.length > 0 ? "<tableParts count=\"1\"> <tablePart r:id=\"rId15\"/></tableParts>" : "") + "</worksheet>");
	}), I.length > 0) {
		let e = m?.folder("ctrlProps");
		I.forEach((t, n) => {
			e?.file("ctrlProp" + (n + 1) + ".xml", t);
		});
	}
	if (u.file("[Content_Types].xml", ne(ee, H, [...new Set(P)], U, I, L, be)), o) return u.generateAsync({
		type: i.generateType ? i.generateType : "nodebuffer",
		...i.useCompression ? {
			compression: "DEFLATE",
			compressionOptions: { level: 9 }
		} : {}
	}).then((e) => e);
	if (i.notSave) return u.generateAsync({
		type: "blob",
		...i.useCompression ? {
			compression: "DEFLATE",
			compressionOptions: { level: 9 }
		} : {}
	}).then((e) => e.slice(0, e.size, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
	u.generateAsync({
		type: "blob",
		...i.useCompression ? {
			compression: "DEFLATE",
			compressionOptions: { level: 9 }
		} : {}
	}).then(function(e) {
		import("./FileSaver.min-C3Sv3qNT.js").then((e) => /* @__PURE__ */ p(e.default, 1)).then((t) => {
			let { saveAs: n } = t;
			n(e, (i.fileName ? i.fileName : "tableRecord") + ".xlsx");
		});
	});
}
//#endregion
//#region src/functions/side-by-side.ts
function N(e) {
	let t = e.length, n = 0, r = {}, i = {}, a = {};
	for (let o = 0; o < t; o++) {
		let t = e[o];
		if (!t) continue;
		let s = t.length, c = {};
		for (let e = 0; e < s; e++) {
			n++;
			let s = t[e];
			if (!s) continue;
			let l;
			l = s.sheetName ? s.sheetName : "Sheet 1";
			let u = r[l] ?? {
				headers: [],
				data: [],
				labelCounter: 0,
				seenAt: o
			}, d = i[l] ?? {
				index: o,
				value: 0
			};
			l in a || (u.labelCounter = 0, a[l] = !0);
			let f = [], p = u.headers.length, m = {}, h = u.seenAt == o, g = s.headers.reduce((e, t, n) => (u.labelCounter++, p < u.labelCounter && f.push({
				label: "c" + u.labelCounter,
				text: h ? t.text : ""
			}), m["c" + u.labelCounter] = t.text, {
				...e,
				[t.label]: "c" + u.labelCounter
			}), {});
			if (u.headers.push(...f), s.spaceX) for (let e = 0; e < s.spaceX; e++) u.labelCounter++, p <= u.labelCounter && u.headers.push({
				label: "c" + u.labelCounter,
				text: ""
			});
			d.index + 1 == o && (c[l] = d.value);
			let _ = c[l] || 0;
			_ > 0 && (!u.headerIndex || u.headerIndex && u.headerIndex != _ ? u.data.push(m) : u.data[_] = {
				...u.data[_],
				...m
			}, u.headerIndex = _, _++);
			let v = Object.keys(g), y = s.data.length >= u.data.length;
			if (u.data = s.data.reduce((t, r, i) => {
				let a = {};
				return t.length > i + _ && t[i + _] ? a = t[i + _] ?? {} : t.push(a), v.forEach((e) => {
					let t = g[e];
					t && (a[t] = r[e] ?? "");
				}), a.tableIndex = n, a.tableStringIndex = i + "," + e, t[i + _] = a, t;
			}, u.data), y && s.spaceY) {
				let e = u.headers.length;
				for (let t = 0; t < s.spaceY; t++) {
					let t = {};
					for (let n = 0; n < e; n++) {
						let e = u.headers[n];
						e && (t[e.label] = "");
					}
					u.data.push(t);
				}
			}
			i[l] = {
				value: Math.max(u.data.length, d.value),
				index: o
			}, r[l] = u;
		}
		a = {};
	}
	return Object.entries(r).reduce((e, [t, n]) => (e.sheet.push({
		...n,
		name: t
	}), e), { sheet: [] });
}
//#endregion
//#region src/functions/validate-excel-table.ts
var pe = /* @__PURE__ */ d({
	exportedForTesting: () => z,
	validateExcelTableObjectFunction: () => ye,
	validateSheetArrayFunction: () => I,
	validateStyleObjectFunction: () => F
});
function me(e) {
	return /^[A-Z]+[1-9][1-9]*:[A-Z]+[1-9][1-9]*$/.test(e);
}
function P(e) {
	return /^[A-Z]+[1-9][1-9]*$/.test(e);
}
var he = {
	fontFamily: {
		mode: "TYPE_CHECK",
		type: "string"
	},
	type: {
		mode: "TYPE_CHECK",
		type: "string"
	},
	size: {
		mode: "TYPE_CHECK",
		type: "number"
	},
	alignment: {
		mode: "TYPE_CHECK",
		type: "object",
		validateFunction(e, t, n, r) {
			return t.rtl && t.ltr && r && console.warn("Alignment-rtl and ltr cannot be used together."), (t.readingOrder && t.ltr || t.readingOrder && t.rtl) && r && console.warn("Alignment-readingOrder cannot be used with rtl or ltr."), !0;
		}
	},
	border: {
		mode: "TYPE_CHECK",
		type: "object",
		validateFunction(e, t, n, r) {
			let i = [
				"full",
				"top",
				"left",
				"right",
				"bottom"
			], a = [
				"slantDashDot",
				"dotted",
				"thick",
				"hair",
				"dashDot",
				"dashDotDot",
				"dashed",
				"thin",
				"mediumDashDot",
				"medium",
				"double",
				"mediumDashed"
			];
			return Object.keys(t).forEach((e) => {
				let n = e;
				if (i.indexOf(n) < 0) throw "border-The type of border is not valid. Valid options include \"full,\" \"top,\" \"left,\" \"right,\" and \"bottom.\"";
				let r = t[n];
				if (!("color" in r)) throw "border-The border must have a color.";
				if (!("style" in r)) throw "border-The border needs a style.";
				if (typeof r.style == "string" && a.indexOf(r.style) < 0) throw "border-An invalid style has been used.";
			}), !0;
		}
	},
	format: {
		mode: "TYPE_CHECK",
		type: "string"
	},
	bold: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	underline: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	italic: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	doubleUnderline: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	color: {
		mode: "TYPE_CHECK",
		type: "string"
	},
	backgroundColor: {
		mode: "TYPE_CHECK",
		type: "string"
	}
}, ge = {
	label: {
		mode: "TYPE_CHECK",
		type: "string"
	},
	text: {
		mode: "TYPE_CHECK",
		type: "string"
	},
	size: {
		mode: "TYPE_CHECK",
		type: "number"
	},
	multiStyleValue: {
		mode: "TYPE_CHECK",
		type: "object",
		isArray: !0
	},
	comment: {
		mode: "TYPE_CHECK",
		validateFunction(e, t, n, r) {
			if (typeof t == "string" || typeof t == "object") throw "The Type of The \"comment\" is not valid";
			return !0;
		}
	},
	conditionalFormatting: {
		mode: "TYPE_CHECK",
		type: "object"
	},
	formula: {
		mode: "TYPE_CHECK",
		type: "object"
	}
}, _e = {
	notSave: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	creator: {
		mode: "TYPE_CHECK",
		type: "string",
		notEmpty: !0
	},
	backend: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	activateConditionalFormatting: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	fileName: {
		mode: "TYPE_CHECK",
		type: "string",
		notEmpty: !0
	},
	generateType: {
		mode: "TYPE_CHECK",
		type: "string",
		isEnum: !0,
		enum: [
			"nodebuffer",
			"array",
			"binarystring",
			"base64"
		]
	},
	addDefaultTitleStyle: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	created: {
		mode: "TYPE_CHECK",
		type: "string",
		notEmpty: !0
	},
	modified: {
		mode: "TYPE_CHECK",
		type: "string",
		notEmpty: !0
	},
	numberOfColumn: {
		mode: "TYPE_CHECK",
		type: "number",
		min: 26
	},
	createType: {
		mode: "TYPE_CHECK",
		type: "string"
	},
	styles: {
		mode: "TYPE_CHECK",
		type: "object",
		validationFunction: F
	},
	sheet: {
		mode: "TYPE_CHECK",
		type: "object",
		isArray: !0,
		validationFunction: I
	}
}, ve = {
	headers: {
		mode: "TYPE_CHECK",
		isArray: !0,
		type: "object",
		validateFunction(e, t, n, r) {
			if (t && Array.isArray(t)) t.forEach((e, t) => {
				Object.keys(e).forEach((i) => {
					let a = e[i], o = ge[i];
					o && L(a, o, i, n, r) || R(!o && r, "headers[" + t + "]->" + i);
				});
			});
			else throw "The Type of The \"headers\" is not valid";
			return !0;
		}
	},
	data: {
		mode: "TYPE_CHECK",
		isArray: !0,
		type: "object"
	},
	withoutHeader: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	mapSheetDataOption: {
		mode: "TYPE_CHECK",
		type: "object",
		validateFunction(e, t, n, r) {
			let i = Object.keys(t), a = [
				"outlineLevel",
				"hidden",
				"height"
			];
			return i.forEach((e) => {
				a.indexOf(e) < 0 && r && console.warn("The Schema of mapSheetDataOption does not include the \"" + e + "\" property.");
			}), !0;
		}
	},
	backgroundImage: {
		mode: "TYPE_CHECK",
		type: "string",
		notEmpty: !0
	},
	conditionalFormatting: {
		mode: "TYPE_CHECK",
		isArray: !0,
		type: "object",
		validateFunction(e, t, n, r) {
			return Array.isArray(t) && t.forEach((e) => {
				if (e.type == "cells") {
					let t = [
						"lt",
						"gt",
						"between",
						"ct",
						"eq"
					];
					if (!e.operator || !e.start || !e.end || e.value === void 0) throw {
						record: e,
						error: "The object is not complete; you need to fill in the values for operator, start, end and value."
					};
					if (t.indexOf(e.operator) < 0) throw {
						record: e,
						error: "The operator is not valid."
					};
				} else if (e.type == "top") {
					let t = ["belowAverage", "aboveAverage"];
					if (!e.start || !e.end || e.value === void 0) throw {
						record: e,
						error: "The object is not complete; you need to fill in the values for start, end and value."
					};
					if (e.operator && t.indexOf(e.operator) < 0) throw {
						record: e,
						error: "The operator is not valid."
					};
				} else if (e.type == "iconSet") {
					if (!e.operator || !e.start || !e.end) throw {
						record: e,
						error: "The object is not complete; you need to fill in the values for operator, start and end"
					};
				} else if (e.type == "colorScale") {
					if (!e.start || !e.end) throw {
						record: e,
						error: "The object is not complete; you need to fill in the values for start and end"
					};
				} else if (e.type == "dataBar") {
					if (!e.start || !e.end) throw {
						record: e,
						error: "The object is not complete; you need to fill in the values for start and end"
					};
				} else throw "Property \"type\" is not valid.";
			}), !0;
		}
	},
	multiStyleCondition: {
		mode: "TYPE_CHECK",
		type: "function"
	},
	useSplitBaseOnMatch: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	convertStringToNumber: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	images: {
		mode: "TYPE_CHECK",
		isArray: !0,
		type: "object",
		validateFunction(e, t, n, r) {
			if (Array.isArray(t)) {
				let e = ["one", "two"];
				t.forEach((t) => {
					if (typeof t.src != "string") throw "\"src\" property is required.";
					if (typeof t.from != "string" || t.from.length == 0) throw "\"from\" property is required.";
					if (t.to && !P(t.to)) throw "value of \"to\" is not valid.";
					if (t.from && !P(t.from)) throw "value of \"from\" is not valid.";
					if (e.indexOf(t.type) < 0) throw "Type of \"type\" is not valid in the \"images\" property.";
					if (t.type == "two" && !t.to) throw "\"to\" property is empty. for \"two\" type \"to\" property is required.";
				});
			}
			return !0;
		}
	},
	formula: {
		mode: "TYPE_CHECK",
		type: "object"
	},
	pageOption: {
		mode: "TYPE_CHECK",
		type: "object"
	},
	name: {
		mode: "TYPE_CHECK",
		type: "string",
		notEmpty: !0
	},
	title: {
		mode: "TYPE_CHECK",
		type: "object"
	},
	shiftTop: {
		mode: "TYPE_CHECK",
		type: "number",
		min: 0
	},
	shiftLeft: {
		mode: "TYPE_CHECK",
		type: "number"
	},
	selected: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	tabColor: {
		mode: "TYPE_CHECK",
		type: "string",
		notEmpty: !0
	},
	merges: {
		mode: "TYPE_CHECK",
		isArray: !0,
		type: "object",
		validateFunction(e, t, n, r) {
			if (Array.isArray(t)) {
				let e = [];
				if (t.forEach((t) => {
					me(t) || e.push("The " + t + " reference is not valid in the \"merges\" property.");
				}), e.length > 0) throw e;
			}
			return !0;
		}
	},
	headerStyleKey: {
		mode: "TYPE_CHECK",
		type: "string",
		notEmpty: !0
	},
	mergeRowDataCondition: {
		mode: "TYPE_CHECK",
		type: "function"
	},
	styleCellCondition: {
		mode: "TYPE_CHECK",
		type: "function"
	},
	commentCondition: {
		mode: "TYPE_CHECK",
		type: "function"
	},
	sortAndFilter: {
		mode: "TYPE_CHECK",
		type: "object",
		validateFunction(e, t, n, r) {
			if (typeof t == "object") {
				let e = ["all", "ref"];
				if (!t.mode) throw "\"mode\" is required in sortAndFilter";
				if (e.indexOf(t.mode) < 0) throw "\"mode\" is not valid";
				if (t.mode == "ref") if (t.ref) {
					if (!me(t.ref)) throw "\"ref\" is not valid";
				} else throw "\"ref\" is must need be defined.";
			}
			return !0;
		}
	},
	state: {
		mode: "TYPE_CHECK",
		type: "string",
		isEnum: !0,
		enum: ["hidden", "visible"]
	},
	headerRowOption: {
		mode: "TYPE_CHECK",
		type: "object"
	},
	protectionOption: {
		mode: "TYPE_CHECK",
		type: "object",
		validateFunction(e, t, n, r) {
			let i = [
				"sheet",
				"formatCells",
				"formatColumns",
				"formatRows",
				"insertColumns",
				"insertRows",
				"insertHyperlinks",
				"deleteColumns",
				"deleteRows",
				"sort",
				"autoFilter",
				"pivotTables"
			], a = [
				"0",
				"1",
				0,
				1
			];
			return Object.keys(t).forEach((e) => {
				let n = t[e];
				if (i.indexOf(e) < 0) throw "\"" + e + "\" is not valid.";
				if (a.indexOf(n) < 0) throw "value of \"" + e + "\" is not valid";
			}), !0;
		}
	},
	headerHeight: {
		mode: "TYPE_CHECK",
		type: "number",
		min: 1
	},
	checkbox: {
		mode: "TYPE_CHECK",
		isArray: !0,
		type: "object",
		validateFunction(e, t, n, r) {
			if (Array.isArray(t)) t.forEach((e) => {
				if (!e.col || !e.row) throw "\"checkbox\" is not complete";
			});
			else throw "Type of \"checkbox\" property is not valid";
			return !0;
		}
	},
	viewOption: {
		mode: "TYPE_CHECK",
		type: "object",
		validateFunction(e, t, n, r) {
			if (t.type && ["pageLayout", "pageBreakPreview"].indexOf(t.type) < 0) throw "Type of \"type\" property is not valid";
			return !0;
		}
	},
	rtl: {
		mode: "TYPE_CHECK",
		type: "boolean"
	},
	pageBreak: {
		mode: "TYPE_CHECK",
		type: "object",
		isArray: !0
	},
	asTable: {
		mode: "TYPE_CHECK",
		type: "object"
	}
};
function F(e, t = !0, r = !0) {
	Object.keys(e).forEach((i) => {
		let a = e[i];
		if (!a) return;
		let o = Object.keys(a);
		if (a?.format && !n[a.format]) throw "The \"" + a.format + "\" format that has been used is not defined.";
		a?.underline && a.doubleUnderline && r && "" + i, o.forEach((e) => {
			let n = a[e], o = he[e];
			o && L(n, o, e, t, r) || R(!o && r, "styles[" + i + "]->" + e);
		});
	});
}
function I(e, t = !0, n = !0) {
	Array.isArray(e) || (e = [e]), e.forEach((e, r) => {
		Object.keys(e).forEach((i) => {
			let a = e[i], o = ve[i];
			o && L(a, o, i, t, n) || R(!o && n, "sheet[" + r + "]->" + i);
		});
	});
}
function ye(e, t = !0, n = !0) {
	Object.keys(e).forEach((r) => {
		let i = e[r], a = _e[r];
		a && L(i, a, r, t, n) ? typeof a.validationFunction == "function" && a.validationFunction(i, t, n) : R(!a && n, r);
	});
}
function L(e, t, n, r, i) {
	if (t) {
		if (t.type && typeof e != t.type) {
			if (t.type == "object" || t.type == "string" || r) throw "The Type of The \"" + n + "\" is not valid";
			i && console.warn("The property type must be " + t.type);
		}
		if (t.isEnum && t.enum.indexOf(e) < 0) throw "The value of \"" + n + "\" must be " + JSON.stringify(t.enum);
		if (t.min && e < t.min) throw "The value of \"" + n + "\" must be higher than " + t.min;
		if (t.notEmpty && (!e || e.length <= 0)) throw "The value of \"" + n + "\" must not be empty.";
		if (t.isArray && !Array.isArray(e)) throw "The value of \"" + n + "\" should be an array.";
		return typeof t.validateFunction == "function" && t.validateFunction(n, e, r, i), !0;
	} else return i && console.warn("The Schema Object does not include the \"" + n + "\" property."), !1;
}
function R(e = !1, t) {
	e && console.warn("The Schema Object does not include the \"" + t + "\" property.");
}
var z = {
	checkSheetValidWithOneRef: P,
	checkSheetValidWithTwoRef: me,
	generalValidationCheck: L
}, B = new Proxy({}, {
	get(e, t) {
		return t in e ? e[t] : (this.set(e, t, {}, !0), {});
	},
	set(e, t, n, r) {
		return e[t] = n, !0;
	}
});
function V(e, t, n) {
	B[e], B[e][t] = n;
}
function H(e, t, n) {
	Object.keys(n).forEach((r) => {
		let i = n[r];
		typeof i == "object" ? r != "data" && r != "headers" && H(e, t.length > 0 ? t + "." + r : r, i) : V(e, t.length > 0 ? t + "." + r : r, i);
	});
}
function be(e, t) {
	H(e, "", t);
}
//#endregion
//#region src/functions/generate-csv.ts
function U(e) {
	if (e == null) return "";
	typeof e != "string" && (e = String(e));
	let t = e, n = !1;
	return e.indexOf("\"") >= 0 && (t = t.replace(/"/g, "\"\""), n = !0), e.indexOf(",") >= 0 && (n = !0), n && (t = "\"" + t + "\""), t;
}
function W(e) {
	return e ? " " : ",";
}
function G(e, t) {
	return e.substring(0, e.length - t) + "\n";
}
async function K(e, t = !1, n = !1) {
	let r = W(n), i = n ? ".txt" : ".csv", a = r.length, o = [];
	if (e.sheet.forEach((e) => {
		let t = "", n = "", i = e.headers, s = [], c = i.length;
		i.forEach((t) => {
			s.push(t.label), e.withoutHeader || (n += U(t.text) + r);
		}), e.withoutHeader || (t += G(n, a)), c = e.data.length;
		for (let i = 0; i < c; i++) {
			n = "";
			let o = e.data[i];
			o && (s.forEach((e) => {
				n += U(o[e]) + r;
			}), t += G(n, a));
		}
		o.push(t);
	}), e.backend) return o;
	let s = await import("./FileSaver.min-C3Sv3qNT.js").then((e) => /* @__PURE__ */ p(e.default, 1)).then((e) => e.saveAs);
	if (t) {
		let t = (await import("./jszip.min-CZfn14ey.js").then((e) => /* @__PURE__ */ p(e.default, 1))).default, n = new t();
		o.forEach((e, t) => {
			n.file("sheet" + (t + 1) + i, e);
		}), s(await n.generateAsync({ type: "blob" }).then(function(e) {
			return e;
		}), (e.fileName ? e.fileName : "tableRecord") + ".zip");
	} else o.forEach((t) => {
		s(new Blob([t], { type: "text/" + (n ? "plain" : "csv") + ";charset=utf-8" }), (e.fileName ? e.fileName : "tableRecord") + i);
	});
	return "done";
}
//#endregion
//#region src/functions/excel-to-node.ts
var q = {
	firstHeader: !0,
	returnTableNodes: !1,
	emptyNodeDefaultString: " ",
	removeContainerChildNode: !0,
	containerNodeStyle: {
		display: "flex",
		flexDirection: "column"
	},
	tableStyle: {
		borderSpacing: "0",
		border: "1px solid #EEEEEEF1"
	},
	cellStyle: {
		width: "68px",
		height: "24px",
		border: "1px solid #EEEEEEF1"
	},
	buttonContainerStyle: { display: "flex" },
	buttonStyle: {
		height: "40px",
		width: "80px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "0",
		background: "transparent",
		cursor: "pointer"
	},
	activeButtonStyle: { background: "#EEEDEB" }
};
async function J(e, t, n, r, i = !0, a = !1, o = " ", s = !0, c = {
	display: "flex",
	flexDirection: "column"
}, l = {
	borderSpacing: "0",
	border: "1px solid #EEEEEEF1"
}, u = {
	width: "68px",
	height: "24px",
	border: "1px solid #EEEEEEF1"
}, d = { display: "flex" }, f = {
	height: "40px",
	width: "80px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	border: "0",
	background: "transparent",
	cursor: "pointer"
}, p = { background: "#EEEDEB" }) {
	let m = await import("./read-utils-OSezBq1D.js").then(async (t) => await t.extractExcelData(e, !1, r)), h = null;
	if (t ? h = document.querySelector(t) : n && (h = n), h == null && !a) throw "Container Node not found";
	let g = Object.keys(c), _ = Object.keys(l), v = Object.keys(u), y = Object.keys(d), b = Object.keys(f), x = Object.keys(p), S = document.createElement("div");
	y.forEach((e) => {
		S.style[e] = d[e];
	}), a || (s && h != null && (h.innerText = ""), g.forEach((e) => {
		h.style[e] = c[e];
	}), h.appendChild(S));
	let C = [], w = !1, T = 0;
	do {
		T++;
		let e = m.sheetName.next();
		if (!e.value) break;
		let t = document.createElement("div");
		if (t.style.display = "none", !a) {
			let n = document.createElement("button");
			b.forEach((e) => {
				n.style[e] = f[e];
			}), n.addEventListener("click", (e) => {
				let t = n.getAttribute("data-sheet"), r = h.querySelector("div[data-sheet=\"" + t + "\"]");
				if (r) {
					x.forEach((e) => {
						n.style[e] = p[e];
					});
					let e = h.querySelector("[data-sheet-button-activate]"), t = h.querySelector("[data-sheet-activate]");
					r.setAttribute("data-sheet-activate", "1"), r.style.display = "flex", n.setAttribute("data-sheet-button-activate", "1"), e && (b.forEach((t) => {
						e.style[t] = f[t];
					}), e.removeAttribute("data-sheet-button-activate")), t && (t.style.display = "none", t.removeAttribute("data-sheet-activate"));
				}
			}), n.setAttribute("data-sheet", T + ""), t.setAttribute("data-sheet", T + ""), n.innerText = e.value[1] || e.value[0], S.appendChild(n), h.appendChild(t);
		}
		let n = i ? "th" : "td", r = document.createElement("table");
		_.forEach((e) => {
			r.style[e] = l[e];
		});
		let s = m.data[e.value[0]] || m.data[e.value[1]], c = (m.maxLengthOfColumn[e.value[0]] || m.maxLengthOfColumn[e.value[1]]) ?? 0;
		if (Array.isArray(s)) {
			let e = s.length;
			for (let t = 0; t < e; t++) {
				let e = s[t], i = document.createElement("tr"), a = Array.isArray(e);
				for (let t = 0; t <= c; t++) {
					let r = o;
					if (a) {
						let n = e[t];
						typeof n == "string" && (r = n);
					}
					let s = document.createElement(n);
					v.forEach((e) => {
						s.style[e] = u[e];
					}), s.innerText = r, i.appendChild(s);
				}
				r.appendChild(i), n = "td";
			}
		}
		a ? C.push(r) : (t.appendChild(r), h?.appendChild(t)), w = e.done;
	} while (!w);
	if (a) return C;
	{
		let e = h.querySelector("div[data-sheet=\"1\"]");
		e && (e.style.display = "flex", e.setAttribute("data-sheet-activate", "1"));
		let t = h.querySelector("button[data-sheet=\"1\"]");
		return t && (x.forEach((e) => {
			t.style[e] = p[e];
		}), t.setAttribute("data-sheet-button-activate", "1")), "Done";
	}
}
//#endregion
//#region src/functions/excel-to-json.ts
async function Y(e, t, n = !0, r = "property") {
	let i = await import("./read-utils-OSezBq1D.js").then(async (n) => await n.extractExcelData(e, !1, t)), a = {}, o = [];
	return Object.keys(i.sheetNameObject).forEach((e) => {
		let t = i.sheetNameObject[e];
		if (!t) throw Error("sheet name not found");
		let s = (i.data[t ?? ""] || i.data[e]) ?? [], c = i.maxLengthOfColumn[t ?? ""] ?? i.maxLengthOfColumn[e] ?? 0;
		for (let e = 0; e <= c; e++) o[e] = r + (e + 1);
		let l = n, u = [];
		s.forEach((e) => {
			let t = {};
			e.forEach((e, n) => {
				typeof e == "string" && (l ? o[n] = e : t[o[n] ?? ""] = e);
			}), l = !1, u.push(t);
		}), a = Object.assign(a, { [t]: u });
	}), a;
}
//#endregion
//#region src/index.ts
var xe = V, Se = be;
function Ce(e, t, n = {}) {
	return M(te(e, t, n.keepStyle, n.rowHeightScaleFunction, n.colWidthScaleFunction));
}
function X(e) {
	return M(N(e));
}
function Z(e, t) {
	return M(ee(e, t));
}
function Q(e, t = !1, n) {
	return import("./read-utils-OSezBq1D.js").then((r) => r.extractExcelData(e, t, n));
}
function we(e, t = !1) {
	return K(e, t, !1);
}
function Te(e, t = !1) {
	return K(e, t, !0);
}
function Ee(e, t, n, r = { ...q }) {
	return r = {
		...q,
		...r
	}, J(e, t, n, r.fetchFunc, r.firstHeader, r.returnTableNodes, r.emptyNodeDefaultString, r.removeContainerChildNode, r.containerNodeStyle, r.tableStyle, r.cellStyle, r.buttonContainerStyle, r.buttonStyle, r.activeButtonStyle);
}
//#endregion
export { pe as Validator, Se as addGlobalOptionFromExcelTable, xe as addGlobalOptions, Ce as convertTableToExcel, Y as excelToJson, Ee as excelToNode, Q as extractExcelData, we as generateCSV, M as generateExcel, Te as generateText, m as n, p as r, E as replaceInExcel, X as sideBySideLineByLine, u as t, Z as themeBaseGenerate };
