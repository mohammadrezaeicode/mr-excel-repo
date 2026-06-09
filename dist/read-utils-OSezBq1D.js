import { n as e, t } from "./excel-util-DXh00ZOU.js";
import { r as n } from "./excel-table.esm.js";
//#region src/utils/read-utils.ts
function r(e) {
	return /t="s".*?<v/.test(e);
}
function i(e) {
	let t = e.match(/<t.*?>(.*?)<\/t>/);
	return t ? t[1] : null;
}
function a(e) {
	let t = e.match(/<v.*?>(.*?)<\/v>/);
	return t ? t[1] : null;
}
function o(e) {
	let t = e.match(/r="(.*?)"/);
	return t ? t[1] : null;
}
async function s(s, c = !1, l) {
	let u, d = !1;
	typeof l == "function" ? (u = l, d = !0) : u = fetch;
	let f = [], p = /* @__PURE__ */ new Map(), m = {}, h = [], g = {}, _ = {}, v = !1;
	function y(n, i) {
		let s = 0, c = [], l = i.match(/<c[\s\S\n]*?<\/c>/g);
		if (Array.isArray(l) && l.forEach((n) => {
			let i = a(n);
			r(n) && i && (i = h[parseInt(i)]);
			let l = t(o(n), e);
			c[l.row] || (c[l.row] = []), c[l.row][l.col] = i, s = Math.max(l.col, s);
		}), n.startsWith("xl/worksheets/sheet")) {
			let e = n.substring(14, n.lastIndexOf("."));
			p.has(e) && (e = p.get(e)), g[e] = c, _[e] = s;
		}
	}
	return await u(s).then((e) => {
		if (e == null || e == null) throw "response is null";
		return d ? e : c ? e.arrayBuffer() : e.blob();
	}).then(async (e) => {
		let t = await import("./jszip.min-CZfn14ey.js").then((e) => /* @__PURE__ */ n(e.default, 1));
		"default" in t && (t = t?.default);
		let r = 0;
		return await new Promise((n, a) => {
			t.loadAsync(e).then(function(e) {
				let t = Object.keys(e.files);
				r = t.length;
				let a = new Proxy({
					counter: 0,
					isNameSet: !1
				}, {
					set(e, t, i) {
						if (t === "isNameSet") return e.isNameSet = i, !0;
						if (typeof i != "number") throw "value most be number";
						return e.counter = i, e.isNameSet && e.counter === r && n({
							data: g,
							sheetNameObject: m,
							sheetName: p.entries(),
							maxLengthOfColumn: _
						}), !0;
					},
					get(e, t, n) {
						return t === "isNameSet" ? e.isNameSet : e.counter;
					}
				});
				t.forEach(function(t) {
					e.files[t] && e.files[t].async("string").then(function(e) {
						if (t.indexOf("sharedStrings") >= 0) {
							let t = e.match(/<si[\s\S\n]*?<\/si>/g);
							Array.isArray(t) && t.forEach((e) => {
								let t = e.match(/<t[\s\S\n]*?<\/t>/g);
								if (Array.isArray(t)) {
									let e = t.reduce((e, t) => e + i(t), "");
									h.push(e);
								}
							}), v = !0, f.length > 0 && (f.forEach((e) => {
								y(e.filename, e.fileData);
							}), f = []);
						}
						t.startsWith("xl/worksheets/sheet") && (v ? y(t, e) : f.push({
							filename: t,
							fileData: e
						})), t.indexOf("workbook") >= 0 && (e.replace(/(.*[\n\s\S]*)(<sheets[\n\s\S]*?sheets>)(.*[\n\s\S]*)/, "$2").split("<sheet ").slice(1).forEach((e, t) => {
							let n = t + 1, r = "Sheet " + n;
							e.indexOf("name=") >= 0 && (r = e.replace(/(.*[\n\s\S]*?)name="([^"]*)"(.*[\n\s\S]*)/, "$2")), e.indexOf("sheetId=") > 0 && (n = Number(e.replace(/(.*[\n\s\S]*?)sheetId="([^"]*)"(.*[\n\s\S]*)/, "$2")), isNaN(n) && (n = t + 1)), p.set("sheet" + n, r), m["sheet" + n] = r;
						}), a.isNameSet = !0), a.counter++;
					});
				});
			});
		});
	}).catch((e) => {
		throw e;
	});
}
//#endregion
export { s as extractExcelData };
