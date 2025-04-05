const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_copy-1_copy-1_hangingshapes.BjYCRLYA.js","assets/chunks/chunk-D9dRmPFQ.js","assets/static/index.Bwls1adG.css","assets/chunks/chunk-BB6SvIQm.js","assets/entries/pages_copy-1_hangingshapes.DUmBQVpJ.js","assets/chunks/chunk-pHXibhkc.js","assets/entries/pages_hangingshapes.08Q5CKQf.js","assets/entries/pages_index.ClMpagVx.js"])))=>i.map(i=>d[i]);
function ye(e){return Array.from(new Set(e))}const ke="0.4.182",Q={projectName:"Vike",projectVersion:ke},re=`_${Q.projectName.toLowerCase()}`;function x(e,t){const n=Ie();return n[e]=n[e]||t}function Ie(){return globalThis[re]=globalThis[re]||{}}const v=new Proxy({},{get:(e,t)=>n=>t==="code"?`\`${n}\``:t==="string"?`'${n}'`:n}),$=x("assertPackageInstances.ts",{instances:[],alreadyLogged:new Set}),Ae="The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vike.dev/client-runtimes-conflict",Ee="Two vike client runtime instances are being loaded. Make sure your client-side bundles don't include vike twice. (In order to reduce the size of your client-side JavaScript bundles.)";function ve(){{const e=ye($.instances);De(e.length<=1,`vike@${v.bold(e[0])} and vike@${v.bold(e[1])} loaded but only one version should be loaded`)}$.checkSingleInstance&&$.instances.length>1&&J(!1,Ee,{onlyOnce:!0,showStackTrace:!0})}function We(e){J($.isClientRouting!==!0,Ae,{onlyOnce:!0,showStackTrace:!0}),J($.isClientRouting===void 0,Ee,{onlyOnce:!0,showStackTrace:!0}),$.isClientRouting=!1,$.checkSingleInstance=!0,ve()}function ze(){$.instances.push(Q.projectVersion),ve()}function De(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function J(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const i=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=$,a=n===!0?i:n;if(s.has(a))return;s.add(a)}console.warn(r?new Error(i):i)}function Ve(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function z(e,t){const n=new Error(e);return Ve()&&(n.stack=Ue(n.stack,t)),n}function Ue(e,t){if(!e)return e;const n=Be(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&He(s)?(r++,!1):!0).join(`
`)}function He(e){return e.startsWith("    at ")}function Be(e){return e.split(/\r?\n/)}function w(e){return typeof e=="object"&&e!==null}const S=x("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});ze();const Ne="[vike]",Ge=`[vike@${Q.projectVersion}]`,D=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const l=typeof t=="string"?t:JSON.stringify(t);return v.dim(`Debug info (for Vike maintainers; you can ignore this): ${l}`)})();let i=[`You stumbled upon a Vike bug. Go to ${v.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).`,n].filter(Boolean).join(" ");i=U(i),i=V(i,"Bug"),i=H(i,!0);const s=z(i,D);throw(a=S.onBeforeLog)==null||a.call(S),s}function y(e,t,{showStackTrace:n}={}){var i;if(e)return;n=n||S.alwaysShowStackTrace,t=U(t),t=V(t,"Wrong Usage"),t=H(t);const r=z(t,D);throw n&&S.showStackTraceList.add(r),(i=S.onBeforeLog)==null||i.call(S),r}function Je(e){return e=U(e),e=V(e,"Error"),e=H(e),z(e,D)}function C(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(r=r||S.alwaysShowStackTrace,t=U(t),t=V(t,"Warning"),t=H(t),n){const{alreadyLogged:s}=S,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((i=S.onBeforeLog)==null||i.call(S),r){const s=z(t,D);S.showStackTraceList.add(s),S.logger(s,"warn")}else S.logger(t,"warn")}}function V(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=v.bold(v[r](n)),`${n}${e}`}function U(e){return e.startsWith("[")?e:` ${e}`}function H(e,t=!1){return`${t?Ge:Ne}${e}`}function Z(){return typeof window<"u"&&typeof window.scrollY=="number"}const ie=x("utils/assertRouterType.ts",{});function Me(){Ye(ie.isClientRouting!==!0),ie.isClientRouting=!1}function Ye(e){y(Z(),`${v.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),C(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}function Se(e,t,n){return typeof e=="string"?se(e.split(""),t,n).join(""):se(e,t,n)}function se(e,t,n){const r=[];let i=t;o(i>=0&&i<=e.length);let s=e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const a=e[i];o(a!==void 0),r.push(a),i++}return r}function qe(e,t){o(it(e),e),o(t.startsWith("/"));const[n,...r]=e.split("#");o(n!==void 0);const i=["",...r].join("#")||null;o(i===null||i.startsWith("#"));const s=i===null?"":be(i.slice(1)),[a,...l]=n.split("?");o(a!==void 0);const c=["",...l].join("?")||null;o(c===null||c.startsWith("?"));const u={},g={};Array.from(new URLSearchParams(c||"")).forEach(([_,O])=>{u[_]=O,g[_]=[...g.hasOwnProperty(_)?g[_]:[],O]});let{protocol:p,origin:d,pathnameAbsoluteWithBase:f}=Xe(a,t);const h=a.slice((d||"").length);rt(e,d,h,c,i);let{pathname:m,hasBaseServer:b}=tt(f,t);const F=Pe(d,m,c,i),P=d?d.slice(p.length):null,{hostname:N,port:G}=Qe(P,e);return m=Ke(m),o(m.startsWith("/")),{href:F,protocol:p,hostname:N,port:G,origin:d,pathname:m,pathnameOriginal:h,hasBaseServer:b,search:u,searchAll:g,searchOriginal:c,hash:s,hashOriginal:i}}function be(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Ke(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>be(t).split("/").join("%2F")).join("/"),e}function Xe(e,t){var n;o(!e.includes("?")&&!e.includes("#"));{const{protocol:r,origin:i,pathname:s}=oe(e);if(i)return{protocol:r,origin:i,pathnameAbsoluteWithBase:s};o(s===e)}if(e.startsWith("/"))return{protocol:null,origin:null,pathnameAbsoluteWithBase:e};{const r=typeof window<"u"?(n=window==null?void 0:window.document)==null?void 0:n.baseURI:void 0;let i;return r?i=oe(r.split("?")[0]).pathname:i=t,{protocol:null,origin:null,pathnameAbsoluteWithBase:et(e,i)}}}function oe(e){if($e(e)){const{protocol:t,uriWithoutProtocol:n}=we(e);o(t);const[r,...i]=n.split("/"),s=t+r;return{pathname:"/"+i.join("/"),origin:s,protocol:t}}else return{pathname:e,origin:null,protocol:null}}function Qe(e,t){const n={hostname:null,port:null};if(!e)return n;const[r,...i]=e.split(":");if(n.hostname=r,i.length>0){o(i.length===1,t);const s=i[0],a=parseInt(s,10);o(a||a===0,t),n.port=a}return n}function we(e){const t=":",[n,...r]=e.split(t);if(r.length===0||!/^[a-z][a-z0-9\+\-]*$/i.test(n))return{protocol:null,uriWithoutProtocol:e};let i=n+t,s=r.join(t);const a="//";return s.startsWith(a)&&(i=i+a,s=s.slice(a.length)),{protocol:i,uriWithoutProtocol:s}}function Ze(e){return["ipfs://","ipns://"].includes(e)?!1:e.endsWith("://")}function et(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const l=r[a];l==""&&a==="0"||l!="."&&(l==".."?n.pop():(i=!1,n.push(l)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function tt(e,t){return o(e.startsWith("/")),o(nt(t)),o(e.startsWith("/")),o(t.startsWith("/")),{pathname:e,hasBaseServer:!0}}function nt(e){return e.startsWith("/")}function rt(e,t,n,r,i){const s=Pe(t,n,r,i);o(e===s)}function Pe(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function it(e){return $e(e)||e.startsWith("/")||st(e)}function st(e){return[".","?","#"].some(t=>e.startsWith(t))||e===""}function $e(e){const{protocol:t}=we(e);return!!t&&Ze(t)}function T(e,t){t&&(o(!("_isPageContextObject"in t)),Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)))}function B(e){return e instanceof Function||typeof e=="function"}function ot(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function at(e){return ot(t=>{const n=e(t);return n===null?null:!n})}function R(e){return Array.isArray(e)}function lt(e){return R(e)&&e.every(t=>typeof t=="string")}function ct(e){return w(e)&&Object.values(e).every(t=>typeof t=="string")}function E(e,t,n){if(!w(e))return!1;if(!(t in e))return n==="undefined";if(n===void 0)return!0;const r=e[t];return n==="undefined"?r===void 0:n==="array"?R(r):n==="object"?w(r):n==="string[]"?lt(r):n==="string{}"?ct(r):n==="function"?B(r):R(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function ut(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const ft=e=>e!=null;function Ce(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const dt=["clientRouting"];function gt(e){dt.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;y(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),y(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const Te=["render","clientRouting","prerender","doNotPrerender"];function pt(e,t){y(!Te.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function ht(e){const t=".page.",n=Se(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function j(e){Ce(e)}function ee(e,t){return o(!e.includes("\\")),e.includes("/_error")}function mt(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return ee(e)}const _e=["js","ts","cjs","cts","mjs","mts"],yt=["jsx","tsx","cjsx","ctsx","mjsx","mtsx"],xe=["vue","svelte","marko","md","mdx"],Et=[..._e,...yt,...xe];function Re(e){const t=Et.some(n=>e.endsWith("."+n));return vt(e)&&o(t),t}function vt(e){const t=/\.(c|m)?(j|t)s$/.test(e),n=_e.some(r=>e.endsWith("."+r));return o(t===n),t}function St(e){return xe.some(t=>e.endsWith("."+t))}const bt=[".page",".page.server",".page.route",".page.client",".css"];function wt(e){if(Ce(e),e.endsWith(".css"))return".css";o(Re(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function je(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(ae(i.filePath)||Pt(s,i.filePath)),n=wt(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:M(e),isRendererPageFile:n!==".css"&&M(e)&&ae(e),isErrorPageFile:ee(e),pageId:ht(e)};return i}function M(e){return j(e),ee(e)?!1:e.includes("/_default")}function ae(e){return j(e),e.includes("/renderer/")}function Pt(e,t){j(e),j(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(M(t));const n=Se(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function $t(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(l=>{i=`${i} { ${l}`,s=` }${s}`}),i+s}function Ct(e,t,n){return`${Y(e,t)} at ${W(n,t)}`}function Tt(e,t,n){return n?`${Y(e,t)} at ${W(n,t)}`:`${Y(e,t)} internally`}function Y(e,t){return`${e} ${v.cyan(t)} defined`}function W(e,t){let n;return R(e)?n=e:n=[e],o(n.length>=1),n.map(i=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=i;let l=s;const c=$t(a,t);return c&&(l=`${l} > ${v.cyan(c)}`),l}).join(" / ")}const _t=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function Fe(e){const t=JSON.parse(e);return te(t)}function te(e){return typeof e=="string"?xt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=te(n)}),e)}function xt(e){for(const{match:t,deserialize:n}of _t)if(t(e))return n(e,Fe);return e}const Rt=["$$registrations","_rerender_only"],jt=[".md",".mdx"];function Ft(e,t,n){const r=Object.keys(e).filter(u=>!Rt.includes(u)),i=u=>u==="default"||u===n,s=r.filter(i),a=r.filter(u=>!i(u));if(s.length===1&&a.length===0)return;const l=v.code("export default"),c=v.code(`export { ${n} }`);s.length===0&&y(!1,`${t} should have a ${c} or ${l}`),s.length===2&&C(!1,`${t} is ambiguous: remove ${l} or ${c}`,{onlyOnce:!0}),o(s.length===1),o(a.length>0),jt.some(u=>t.endsWith(u))||a.forEach(u=>{C(!1,`${t} unexpected ${v.cyan(`export { ${u} }`)}`,{onlyOnce:!0})})}function q(e){return kt(e)}function Lt(e,t){const n=e.map(i=>{const s=q(i.configValuesSerialized),{pageId:a,isErrorPage:l,routeFilesystem:c,loadConfigValuesAll:u}=i;return Ot(s),{pageId:a,isErrorPage:l,routeFilesystem:c,configValues:s,loadConfigValuesAll:u}}),r={configValues:{}};{const i=q(t.configValuesSerialized);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function Ot(e){const t="route",n=e[t];if(!n)return;const{value:r,definedAtData:i}=n,s=typeof r;o(i);const a=Ct("Config",t,i);y(s==="string"||B(r),`${a} has an invalid type '${s}': it should be a string or a function instead, see https://vike.dev/route`)}function kt(e){const t={};return Object.entries(e).forEach(([r,i])=>{let s;if(i.type==="cumulative"){const{valueSerialized:a,...l}=i;s={value:a.map((u,g)=>{const{value:p,sideExports:d}=le(u,r,()=>{const f=i.definedAtData[g];return o(f),f});return n(d),p}),...l}}else{const{valueSerialized:a,...l}=i,{value:c,sideExports:u}=le(a,r,()=>(o(i.type!=="computed"),i.definedAtData));n(u),s={value:c,...l}}t[r]=s}),t;function n(r){r.forEach(i=>{const{configName:s,configValue:a}=i;t[s]||(t[s]=a)})}}function le(e,t,n){if(e.type==="js-serialized"){let{value:r}=e;return r=te(r),{value:r,sideExports:[]}}if(e.type==="pointer-import"){const{value:r}=e;return{value:r,sideExports:[]}}if(e.type==="plus-file"){const r=n(),{exportValues:i}=e;Ft(i,r.filePathToShowToUser,t);let s,a=!1;const l=[];return Object.entries(i).forEach(([c,u])=>{c!=="default"&&c!==t?l.push({configName:c,configValue:{type:"standard",value:u,definedAtData:{filePathToShowToUser:r.filePathToShowToUser,fileExportPathToShowToUser:[c]}}}):(s=u,o(!a),a=!0)}),o(a),{value:s,sideExports:l}}o(!1)}function It(e){o(E(e,"pageFilesLazy","object")),o(E(e,"pageFilesEager","object")),o(E(e,"pageFilesExportNamesLazy","object")),o(E(e,"pageFilesExportNamesEager","object")),o(E(e.pageFilesLazy,".page")),o(E(e.pageFilesLazy,".page.client")||E(e.pageFilesLazy,".page.server")),o(E(e,"pageFilesList","string[]")),o(E(e,"pageConfigsSerialized")),o(E(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;At(t),Wt(n);const{pageConfigs:r,pageConfigGlobal:i}=Lt(t,n),s={};k(e.pageFilesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const g=u;ce(g),c.loadFile=async()=>{"fileExports"in c||(c.fileExports=await g(),gt(c))}}),k(e.pageFilesExportNamesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const g=u;ce(g),c.loadExportNames=async()=>{if(!("exportNames"in c)){const p=await g();o(E(p,"exportNames","string[]"),c.filePath),c.exportNames=p.exportNames}}}),k(e.pageFilesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const g=u;o(w(g)),c.fileExports=g}),k(e.pageFilesExportNamesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const g=u;o(w(g)),o(E(g,"exportNames","string[]"),c.filePath),c.exportNames=g.exportNames}),e.pageFilesList.forEach(l=>{s[l]=s[l]??je(l)});const a=Object.values(s);return a.forEach(({filePath:l})=>{o(!l.includes("\\"))}),{pageFiles:a,pageConfigs:r,pageConfigGlobal:i}}function k(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(bt.includes(n)),o(w(r)),Object.entries(r).forEach(([i,s])=>{const a=je(i);o(a.fileType===n),t.push({filePath:i,pageFile:a,globValue:s})})}),t}function ce(e){o(B(e))}function At(e){o(R(e)),e.forEach(t=>{o(w(t)),o(E(t,"pageId","string")),o(E(t,"routeFilesystem")),o(E(t,"configValuesSerialized"))})}function Wt(e){o(E(e,"configValuesSerialized"))}const L=x("setPageFiles.ts",{});function zt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:r}=It(e);L.pageFilesAll=t,L.pageConfigs=n,L.pageConfigGlobal=r}async function Dt(e,t){o(!L.pageFilesGetter),o(t===void 0);const{pageFilesAll:n,pageConfigs:r,pageConfigGlobal:i}=L;o(n&&r&&i);const s=Vt(n,r);return{pageFilesAll:n,allPageIds:s,pageConfigs:r,pageConfigGlobal:i}}function Vt(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=ye(n),i=t.map(s=>s.pageId);return[...r,...i]}function Ut(e,t){return Ht(e,t,!0)}function Ht(e,t,n){const r="CLIENT_ONLY",i=e.filter(f=>f.isRelevant(t)&&f.fileType!==".page.route").sort(Bt(n,t)),s=f=>{const h=i.filter(b=>b.pageId===t&&b.isEnv(f?"CLIENT_AND_SERVER":r));y(h.length<=1,`Merge the following files into a single file: ${h.map(b=>b.filePath).join(" ")}`);const m=h[0];return o(m===void 0||!m.isDefaultPageFile),m},a=s(!1),l=s(!0),c=f=>i.filter(h=>h.isRendererPageFile&&h.isEnv(f?"CLIENT_AND_SERVER":r))[0],u=c(!1),g=c(!0),p=i.filter(f=>f.isDefaultPageFile&&!f.isRendererPageFile&&(f.isEnv(r)||f.isEnv("CLIENT_AND_SERVER")));return[a,l,...p,u,g].filter(ft)}function Bt(e,t){const n="CLIENT_ONLY";return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return-1;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return 1;{const c=a.isRendererPageFile,u=l.isRendererPageFile;if(!c&&u)return-1;if(!u&&c)return 1;o(c===u)}{const c=ue(t,a.filePath),u=ue(t,l.filePath);if(c<u)return-1;if(u<c)return 1;o(c===u)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return-1;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return 1}return 0}}function ue(e,t){j(e),j(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,a=i.split("/").length;return s+a}function Nt(e){if(!e||R(e))return null;const{filePathToShowToUser:t}=e;return o(t),t}function Gt(e,t){const n={},r={},i={};e.forEach(d=>{Jt(d).forEach(({exportName:h,exportValue:m,isFromDefaultExport:b})=>{o(h!=="default"),i[h]=i[h]??[],i[h].push({exportValue:m,exportSource:`${d.filePath} > ${b?`\`export default { ${h} }\``:`\`export { ${h} }\``}`,filePath:d.filePath,_filePath:d.filePath,_fileType:d.fileType,_isFromDefaultExport:b})})});const s={},a={},l=(d,f)=>{s[f]=d,a[f]??(a[f]=[]),a[f].push(d)},c={configsStandard:{},configsCumulative:{},configsComputed:{}};t&&Object.entries(t.configValues).forEach(([d,f])=>{const{value:h}=f,m=Nt(f.definedAtData),b=Tt("Config",d,f.definedAtData);if(r[d]=r[d]??h,n[d]=n[d]??[],o(n[d].length===0),n[d].push({configValue:h,configDefinedAt:b,configDefinedByFile:m}),f.type==="standard"){const P={type:"configsStandard",value:f.value,definedAt:W(f.definedAtData,d)};l(P,d),c.configsStandard[d]=P}if(f.type==="cumulative"){const P={type:"configsCumulative",values:f.value.map((N,G)=>{const _=f.definedAtData[G];o(_);const O=W(_,d);return{value:N,definedAt:O}})};l(P,d),c.configsCumulative[d]=P}if(f.type==="computed"){const P={type:"configsComputed",value:f.value};l(P,d),c.configsComputed[d]=P}const F=d;i[F]=i[F]??[],i[F].push({exportValue:h,exportSource:b,filePath:m,_filePath:m,_fileType:null,_isFromDefaultExport:null})});const u=Mt(),g={};return Object.entries(i).forEach(([d,f])=>{f.forEach(({exportValue:h,_fileType:m,_isFromDefaultExport:b})=>{g[d]=g[d]??h,m===".page"&&!b&&(d in u||(u[d]=h))})}),o(!("default"in g)),o(!("default"in i)),{from:c,source:s,sources:a,config:r,configEntries:n,exports:g,exportsAll:i,pageExports:u}}function Jt(e){const{filePath:t,fileExports:n}=e;o(n),o(Re(t));const r=[];return Object.entries(n).sort(at(([i])=>i==="default")).forEach(([i,s])=>{let a=i==="default";if(a)if(St(t))i="Page";else{y(w(s),`The ${v.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([l,c])=>{pt(l,t),r.push({exportName:l,exportValue:c,isFromDefaultExport:a})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:a})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&Te.includes(i)))}),r}function Mt(){return new Proxy({},{get(...e){return Z()||C(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}const Yt="modulepreload",qt=function(e){return"/"+e},fe={},I=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=qt(c),c in fe)return;fe[c]=!0;const u=c.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Yt,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},ne={},Kt={},Xt={},Qt={},Zt=[],Le={},en=[{pageId:"/pages/copy-1/copy-1/hangingshapes",isErrorPage:void 0,routeFilesystem:{routeString:"/copy-1/copy-1/hangingshapes",definedBy:"/pages/copy-1/copy-1/hangingshapes/"},loadConfigValuesAll:()=>I(()=>import("./pages_copy-1_copy-1_hangingshapes.BjYCRLYA.js"),__vite__mapDeps([0,1,2,3])),configValuesSerialized:{clientEntryLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}}}},{pageId:"/pages/copy-1/hangingshapes",isErrorPage:void 0,routeFilesystem:{routeString:"/copy-1/hangingshapes",definedBy:"/pages/copy-1/hangingshapes/"},loadConfigValuesAll:()=>I(()=>import("./pages_copy-1_hangingshapes.DUmBQVpJ.js"),__vite__mapDeps([4,1,2,3,5])),configValuesSerialized:{clientEntryLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}}}},{pageId:"/pages/hangingshapes",isErrorPage:void 0,routeFilesystem:{routeString:"/hangingshapes",definedBy:"/pages/hangingshapes/"},loadConfigValuesAll:()=>I(()=>import("./pages_hangingshapes.08Q5CKQf.js"),__vite__mapDeps([6,1,2,3,5])),configValuesSerialized:{clientEntryLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}}}},{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/pages/index/"},loadConfigValuesAll:()=>I(()=>import("./pages_index.ClMpagVx.js"),__vite__mapDeps([7,1,2])),configValuesSerialized:{clientEntryLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}}}}],tn={configValuesSerialized:{}},nn=Object.assign({}),rn={...nn};ne[".page"]=rn;const sn=Object.assign({}),on={...sn};ne[".page.client"]=on;const an=Object.assign({}),ln={...an};Le[".page.server"]=ln;const cn=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:Le,pageConfigGlobalSerialized:tn,pageConfigsSerialized:en,pageFilesEager:Kt,pageFilesExportNamesEager:Qt,pageFilesExportNamesLazy:Xt,pageFilesLazy:ne,pageFilesList:Zt},Symbol.toStringTag,{value:"Module"}));zt(cn);function un(){o(Z())}function fn(){un()}function de(e){const t=e/1e3;if(t<120){const n=ge(t);return`${n} second${pe(n)}`}{const n=t/60,r=ge(n);return`${r} minute${pe(r)}`}}function ge(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function pe(e){return e==="1"?"":"s"}const K=x("utils/executeHook.ts",{userHookErrors:new WeakMap,pageContext:null});function dn(e,t,n){const{hookName:r,hookFilePath:i,hookTimeout:{error:s,warning:a}}=t;let l,c;const u=new Promise((f,h)=>{l=m=>{g(),f(m)},c=m=>{g(),h(m)}}),g=()=>{p&&clearTimeout(p),d&&clearTimeout(d)},p=he(a)&&setTimeout(()=>{C(!1,`The ${r}() hook defined by ${i} is slow: it's taking more than ${de(a)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},a),d=he(s)&&setTimeout(()=>{const f=Je(`The ${r}() hook defined by ${i} timed out: it didn't finish after ${de(s)} (https://vike.dev/hooksTimeout)`);c(f)},s);return(async()=>{try{gn(n);const f=await e();l(f)}catch(f){w(f)&&K.userHookErrors.set(f,{hookName:r,hookFilePath:i}),c(f)}})(),u}function he(e){return!!e&&e!==1/0}function gn(e){K.pageContext=e,Promise.resolve().then(()=>{K.pageContext=null})}function Oe(e){const t=window.location.href,{searchOriginal:n,hashOriginal:r,pathname:i}=qe(t,"/");let s;return e!=null&&e.withoutHash?s=`${i}${n||""}`:s=`${i}${n||""}${r||""}`,o(s.startsWith("/")),s}function pn(e){return typeof e=="string"&&hn(e)?`.${e}`:`[${JSON.stringify(e)}]`}function hn(e){return/^[a-z0-9\$_]+$/i.test(e)}fn();function mn(){const e="vike_pageContext",t=document.getElementById(e);y(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=Fe(n);return o(E(r,"_pageId","string")),o(E(r,"routeParams","string{}")),r}function yn(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}async function En(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll(),r=q(n.configValuesSerialized);return Object.assign(e.configValues,r),T(e,{isAllLoaded:!0}),e}const vn="__whileFetchingAssets";async function Sn(e,t,n){const r=Ut(t,e),i=yn(n,e);let s;const a=!1;try{s=(await Promise.all([i&&En(i,a),...r.map(g=>{var p;return(p=g.loadFile)==null?void 0:p.call(g)})]))[0]}catch(u){throw bn(u)&&Object.assign(u,{[vn]:!0}),u}const l=Gt(r,s),c={};return T(c,l),T(c,{_pageFilesLoaded:r}),c}function bn(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}const me=Oe({withoutHash:!0});async function wn(){const e=mn();return T(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1}),T(e,await $n(e._pageId)),Pn(),e}function Pn(){const e=Oe({withoutHash:!0});y(me===e,`The URL was manipulated before the hydration finished ('${me}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function $n(e){const t={},{pageFilesAll:n,pageConfigs:r}=await Dt();return T(t,{_pageFilesAll:n,_pageConfigs:r}),T(t,await Sn(e,t._pageFilesAll,t._pageConfigs)),n.filter(i=>i.fileType!==".page.server").forEach(i=>{var s;C(!((s=i.fileExports)!=null&&s.onBeforeRender),`export { onBeforeRender } of ${i.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}const Cn=x("getHook.ts",{isPrerendering:!1});function X(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=xn(n,t),i=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===i),i===null)return null;const a=s.filePath;return o(a),o(!a.endsWith(" ")),_n(i,{hookName:t,hookFilePath:a}),{hookFn:i,hookName:t,hookFilePath:a,hookTimeout:r}}function Tn(e,t){X(e,t)}function _n(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),y(B(e),`Hook ${t}() defined by ${n} should be a function`)}function xn(e,t){const n=Rn(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],i=jn(t);return(r==null?void 0:r.error)!==void 0&&(i.error=r.error),(r==null?void 0:r.warning)!==void 0&&(i.warning=r.warning),i}function Rn(e){if(e===void 0)return{};if(e===!1)return!1;y(w(e),`Setting ${v.cyan("hooksTimeout")} should be ${v.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}y(w(r),`Setting ${v.cyan(`hooksTimeout.${n}`)} should be ${v.cyan("false")} or an object`);const[i,s]=["error","warning"].map(a=>{const l=r[a];if(l===void 0||l===!1)return l;const c=`Setting ${v.cyan(`hooksTimeout.${n}.${a}`)} should be`;return y(typeof l=="number",`${c} ${v.cyan("false")} or a number`),y(l>0,`${c} a positive number`),l});t[n]={error:i,warning:s}}),t}function jn(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:Cn.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}function Fn(e){let t=Object.getOwnPropertyDescriptors(e);for(const n of Object.keys(e))delete e[n];t=Object.fromEntries(Object.entries(t).sort(([n],[r])=>ut(n,r))),Object.defineProperties(e,t)}function Ln(e){On(e),kn(e)}function On(e){mt(e._pageId,e._pageConfigs)&&o(E(e,"is404","boolean"))}function kn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!w(t)){C(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const In="not-serializable",A=x("getPageContextProxyForUser.ts",{});function An(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],i=pn(n);return y(r!==In,`Can't access pageContext${i} on the client side. Because it can't be serialized, see server logs.`),Wn(e,n,i),r}})}function Wn(e,t,n){if(Vn(t)||t in e||Dn(t)||!e._hasPageContextFromServer)return;const r=`pageContext${n} isn't defined on the client-side, see https://vike.dev/passToClient#error`;e._hasPageContextFromClient?C(!1,r,{onlyOnce:!1,showStackTrace:!0}):y(!1,r)}const zn=["then","toJSON"];function Dn(e){return!!(zn.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Vn(e){return A.prev===e||A.prev==="__v_raw"?!0:(A.prev=e,window.setTimeout(()=>{A.prev=void 0},0),!1)}function Un(e,t){{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}o("config"in e),o("configEntries"in e),o("exports"in e),o("exportsAll"in e),o("pageExports"in e),o(w(e.pageExports));const n=e.exports.Page;T(e,{Page:n}),Hn(e),Fn(e);const r=An(e);return Ln(e),r}function Hn(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function Bn(e,t){const n=Un(e);let r=null,i;r=X(e,"render"),i="render";{const l=X(e,"onRenderClient");l&&(r=l,i="onRenderClient")}if(!r){const l=Nn(e);if(o(l),e._pageConfigs.length>0)y(!1,`No onRenderClient() hook defined for URL '${l}', but it's needed, see https://vike.dev/onRenderClient`);else{const c=e._pageFilesLoaded.filter(g=>g.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+l:u="One of the following files should export a render() hook: "+c.map(g=>g.filePath).join(" "),y(!1,u)}}o(r);const s=r.hookFn;o(i);const a=await dn(()=>s(n),r,e);y(a===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Nn(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}Me();We();Gn();async function Gn(){var t,n;const e=await wn();await Bn(e),Tn(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}
