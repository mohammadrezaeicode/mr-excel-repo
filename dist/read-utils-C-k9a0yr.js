System.register("ExcelTable",["./index-Sti7hi3g.js"],function(R,B){"use strict";var b,A;return{setters:[d=>{b=d.g,A=d.c}],execute:function(){R("extractExcelData",W);function d(s){return/t="s".*?<v/.test(s)}function D(s){const a=/<t.*?>(.*?)<\/t>/,r=s.match(a);return r?r[1]:null}function M(s){const a=/<v.*?>(.*?)<\/v>/,r=s.match(a);return r?r[1]:null}function P(s){const a=/r="(.*?)"/,r=s.match(a);return r?r[1]:null}async function W(s,a=!1,r){let O,E=!1;typeof r=="function"?(O=r,E=!0):O=fetch;let y=[],p=new Map,C={},k=[],V={},j={},T=!1;function $(t,I){let g=0,o=[],m=I.match(/<c[\s\S\n]*?<\/c>/g);if(Array.isArray(m)&&m.forEach(n=>{let f=M(n);d(n)&&f&&(f=k[parseInt(f)]);const w=P(n);let i=b(w,A);typeof o[i.row]>"u"&&(o[i.row]=[]),o[i.row][i.col]=f,g=Math.max(i.col,g)}),t.indexOf("xl/worksheets/sheet")==0){let n=t.substring(14,t.lastIndexOf("."));p.has(n)&&(n=p.get(n)),V[n]=o,j[n]=g}}return await O(s).then(t=>{if(t==null||t==null)throw"response is null";return E?t:a?t.arrayBuffer():t.blob()}).then(async t=>{const g=(await B.import("./jszip.min-yECc9DIt.js").then(m=>m.j)).default;let o=0;return await new Promise((m,n)=>{g.loadAsync(t).then(function(f){const w=Object.keys(f.files);o=w.length;let i=new Proxy({counter:0,isNameSet:!1},{set(e,c,u){if(c==="isNameSet")return e.isNameSet=u,!0;if(typeof u!="number")throw"value most be number";return e.counter=u,e.isNameSet&&e.counter===o&&m({data:V,sheetNameObject:C,sheetName:p.entries(),maxLengthOfColumn:j}),!0},get(e,c,u){return c==="isNameSet"?e.isNameSet:e.counter}});w.forEach(function(e){f.files[e].async("string").then(function(c){if(e.indexOf("sharedStrings")>=0){let u=c.match(/<si[\s\S\n]*?<\/si>/g);Array.isArray(u)&&u.forEach(S=>{let h=S.match(/<t[\s\S\n]*?<\/t>/g);if(Array.isArray(h)){let N=h.reduce((l,x)=>l+D(x),"");k.push(N)}}),T=!0,y.length>0&&(y.forEach(S=>{$(S.filename,S.fileData)}),y=[])}e.indexOf("sheet")>=0&&(T?$(e,c):y.push({filename:e,fileData:c})),e.indexOf("workbook")>=0&&(c.replace(/(.*[\n\s\S]*)(<sheets[\n\s\S]*?sheets>)(.*[\n\s\S]*)/,"$2").split("<sheet ").slice(1).forEach((h,N)=>{let l=N+1,x="Sheet "+l;h.indexOf("name=")>=0&&(x=h.replace(/(.*[\n\s\S]*?)name="([^"]*)"(.*[\n\s\S]*)/,"$2")),h.indexOf("sheetId=")>0&&(l=Number(h.replace(/(.*[\n\s\S]*?)sheetId="([^"]*)"(.*[\n\s\S]*)/,"$2")),isNaN(l)&&(l=N+1)),p.set("sheet"+l,x),C["sheet"+l]=x}),i.isNameSet=!0),i.counter++})})})})}).catch(t=>{throw t})}}}});
