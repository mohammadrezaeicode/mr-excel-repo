import { g as O, c as d } from "./_commonjsHelpers-DaMA6jEr.js";
function A(f, v) {
  for (var l = 0; l < v.length; l++) {
    const r = v[l];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in f)) {
          const c = Object.getOwnPropertyDescriptor(r, s);
          c && Object.defineProperty(f, s, c.get ? c : {
            enumerable: !0,
            get: () => r[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }));
}
var E = { exports: {} };
(function(f, v) {
  (function(l, r) {
    r();
  })(d, function() {
    function l(e, t) {
      return typeof t > "u" ? t = { autoBom: !1 } : typeof t != "object" && (console.warn("Deprecated: Expected third argument to be a object"), t = { autoBom: !t }), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
    }
    function r(e, t, i) {
      var n = new XMLHttpRequest();
      n.open("GET", e), n.responseType = "blob", n.onload = function() {
        p(n.response, t, i);
      }, n.onerror = function() {
        console.error("could not download file");
      }, n.send();
    }
    function s(e) {
      var t = new XMLHttpRequest();
      t.open("HEAD", e, !1);
      try {
        t.send();
      } catch {
      }
      return 200 <= t.status && 299 >= t.status;
    }
    function c(e) {
      try {
        e.dispatchEvent(new MouseEvent("click"));
      } catch {
        var t = document.createEvent("MouseEvents");
        t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t);
      }
    }
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof d == "object" && d.global === d ? d : void 0, y = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), p = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !y ? function(e, t, i) {
      var n = a.URL || a.webkitURL, o = document.createElement("a");
      t = t || e.name || "download", o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin === location.origin ? c(o) : s(o.href) ? r(e, t, i) : c(o, o.target = "_blank")) : (o.href = n.createObjectURL(e), setTimeout(function() {
        n.revokeObjectURL(o.href);
      }, 4e4), setTimeout(function() {
        c(o);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(e, t, i) {
      if (t = t || e.name || "download", typeof e != "string") navigator.msSaveOrOpenBlob(l(e, i), t);
      else if (s(e)) r(e, t, i);
      else {
        var n = document.createElement("a");
        n.href = e, n.target = "_blank", setTimeout(function() {
          c(n);
        });
      }
    } : function(e, t, i, n) {
      if (n = n || open("", "_blank"), n && (n.document.title = n.document.body.innerText = "downloading..."), typeof e == "string") return r(e, t, i);
      var o = e.type === "application/octet-stream", g = /constructor/i.test(a.HTMLElement) || a.safari, b = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((b || o && g || y) && typeof FileReader < "u") {
        var m = new FileReader();
        m.onloadend = function() {
          var u = m.result;
          u = b ? u : u.replace(/^data:[^;]*;/, "data:attachment/file;"), n ? n.location.href = u : location = u, n = null;
        }, m.readAsDataURL(e);
      } else {
        var j = a.URL || a.webkitURL, w = j.createObjectURL(e);
        n ? n.location = w : location.href = w, n = null, setTimeout(function() {
          j.revokeObjectURL(w);
        }, 4e4);
      }
    });
    a.saveAs = p.saveAs = p, f.exports = p;
  });
})(E);
var h = E.exports;
const L = /* @__PURE__ */ O(h), S = /* @__PURE__ */ A({
  __proto__: null,
  default: L
}, [h]);
export {
  S as F
};
