define(["exports","./_commonjsHelpers-BXTBJ82R"],function(g,l){"use strict";function S(f,v){for(var u=0;u<v.length;u++){const r=v[u];if(typeof r!="string"&&!Array.isArray(r)){for(const c in r)if(c!=="default"&&!(c in f)){const s=Object.getOwnPropertyDescriptor(r,c);s&&Object.defineProperty(f,c,s.get?s:{enumerable:!0,get:()=>r[c]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var y={exports:{}};(function(f,v){(function(u,r){r()})(l.commonjsGlobal,function(){function u(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function r(e,t,i){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){p(n.response,t,i)},n.onerror=function(){console.error("could not download file")},n.send()}function c(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof l.commonjsGlobal=="object"&&l.commonjsGlobal.global===l.commonjsGlobal?l.commonjsGlobal:void 0,j=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),p=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!j?function(e,t,i){var n=a.URL||a.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin===location.origin?s(o):c(o.href)?r(e,t,i):s(o,o.target="_blank")):(o.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){s(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,i){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(u(e,i),t);else if(c(e))r(e,t,i);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){s(n)})}}:function(e,t,i,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return r(e,t,i);var o=e.type==="application/octet-stream",A=/constructor/i.test(a.HTMLElement)||a.safari,E=/CriOS\/[\d]+/.test(navigator.userAgent);if((E||o&&A||j)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var d=m.result;d=E?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=d:location=d,n=null},m.readAsDataURL(e)}else{var h=a.URL||a.webkitURL,w=h.createObjectURL(e);n?n.location=w:location.href=w,n=null,setTimeout(function(){h.revokeObjectURL(w)},4e4)}});a.saveAs=p.saveAs=p,f.exports=p})})(y);var b=y.exports;const O=S({__proto__:null,default:l.getDefaultExportFromCjs(b)},[b]);g.FileSaver_min=O});
