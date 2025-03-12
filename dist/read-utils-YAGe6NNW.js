import { g as R, c as T } from "./index-DMAk0ysA.js";
function B(s) {
  return /t="s".*?<v/.test(s);
}
function M(s) {
  const a = /<t.*?>(.*?)<\/t>/, r = s.match(a);
  return r ? r[1] : null;
}
function $(s) {
  const a = /<v.*?>(.*?)<\/v>/, r = s.match(a);
  return r ? r[1] : null;
}
function j(s) {
  const a = /r="(.*?)"/, r = s.match(a);
  return r ? r[1] : null;
}
async function P(s, a = !1, r) {
  let N, O = !1;
  typeof r == "function" ? (N = r, O = !0) : N = fetch;
  let x = [], y = /* @__PURE__ */ new Map(), b = {}, A = [], C = {}, k = {}, E = !1;
  function V(t, I) {
    let g = 0, u = [], m = I.match(/<c[\s\S\n]*?<\/c>/g);
    if (Array.isArray(m) && m.forEach((n) => {
      let f = $(n);
      B(n) && f && (f = A[parseInt(f)]);
      const p = j(n);
      let i = R(p, T);
      typeof u[i.row] > "u" && (u[i.row] = []), u[i.row][i.col] = f, g = Math.max(i.col, g);
    }), t.indexOf("xl/worksheets/sheet") == 0) {
      let n = t.substring(14, t.lastIndexOf("."));
      y.has(n) && (n = y.get(n)), C[n] = u, k[n] = g;
    }
  }
  return await N(s).then((t) => {
    if (t == null || t == null)
      throw "response is null";
    return O ? t : a ? t.arrayBuffer() : t.blob();
  }).then(async (t) => {
    const g = (await import("./jszip.min-D-TEDr9v.js").then((m) => m.j)).default;
    let u = 0;
    return await new Promise((m, n) => {
      g.loadAsync(t).then(function(f) {
        const p = Object.keys(f.files);
        u = p.length;
        let i = new Proxy(
          {
            counter: 0,
            isNameSet: !1
          },
          {
            set(e, o, c) {
              if (o === "isNameSet")
                return e.isNameSet = c, !0;
              if (typeof c != "number")
                throw "value most be number";
              return e.counter = c, e.isNameSet && e.counter === u && m({
                data: C,
                sheetNameObject: b,
                sheetName: y.entries(),
                maxLengthOfColumn: k
              }), !0;
            },
            get(e, o, c) {
              return o === "isNameSet" ? e.isNameSet : e.counter;
            }
          }
        );
        p.forEach(function(e) {
          f.files[e].async("string").then(function(o) {
            if (e.indexOf("sharedStrings") >= 0) {
              let c = o.match(/<si[\s\S\n]*?<\/si>/g);
              Array.isArray(c) && c.forEach((S) => {
                let h = S.match(/<t[\s\S\n]*?<\/t>/g);
                if (Array.isArray(h)) {
                  let w = h.reduce((l, d) => l + M(d), "");
                  A.push(w);
                }
              }), E = !0, x.length > 0 && (x.forEach((S) => {
                V(S.filename, S.fileData);
              }), x = []);
            }
            e.indexOf("sheet") >= 0 && (E ? V(e, o) : x.push({
              filename: e,
              fileData: o
            })), e.indexOf("workbook") >= 0 && (o.replace(
              /(.*[\n\s\S]*)(<sheets[\n\s\S]*?sheets>)(.*[\n\s\S]*)/,
              "$2"
            ).split("<sheet ").slice(1).forEach((h, w) => {
              let l = w + 1, d = "Sheet " + l;
              h.indexOf("name=") >= 0 && (d = h.replace(
                /(.*[\n\s\S]*?)name="([^"]*)"(.*[\n\s\S]*)/,
                "$2"
              )), h.indexOf("sheetId=") > 0 && (l = Number(
                h.replace(
                  /(.*[\n\s\S]*?)sheetId="([^"]*)"(.*[\n\s\S]*)/,
                  "$2"
                )
              ), isNaN(l) && (l = w + 1)), y.set("sheet" + l, d), b["sheet" + l] = d;
            }), i.isNameSet = !0), i.counter++;
          });
        });
      });
    });
  }).catch((t) => {
    throw t;
  });
}
export {
  P as extractExcelData
};
