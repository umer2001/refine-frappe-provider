"use strict";(()=>{var bt=Object.defineProperty;var At=(e,t)=>{for(var r in t)bt(e,r,{get:t[r],enumerable:!0})};function j(e,t){return function(){return e.apply(t,arguments)}}var{toString:Ot}=Object.prototype,{getPrototypeOf:ue}=Object,$=(e=>t=>{let r=Ot.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>$(t)===e),W=e=>t=>typeof t===e,{isArray:_}=Array,H=W("undefined");function Tt(e){return e!==null&&!H(e)&&e.constructor!==null&&!H(e.constructor)&&b(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var je=A("ArrayBuffer");function Ct(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&je(e.buffer),t}var St=W("string"),b=W("function"),He=W("number"),K=e=>e!==null&&typeof e=="object",Dt=e=>e===!0||e===!1,G=e=>{if($(e)!=="object")return!1;let t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ft=A("Date"),Nt=A("File"),_t=A("Blob"),Ut=A("FileList"),kt=e=>K(e)&&b(e.pipe),Bt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||b(e.append)&&((t=$(e))==="formdata"||t==="object"&&b(e.toString)&&e.toString()==="[object FormData]"))},Lt=A("URLSearchParams"),jt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),_(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length,c;for(n=0;n<i;n++)c=s[n],t.call(null,e[c],c,e)}}function qe(e,t){t=t.toLowerCase();let r=Object.keys(e),n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}var Ie=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Me=e=>!H(e)&&e!==Ie;function ce(){let{caseless:e}=Me(this)&&this||{},t={},r=(n,o)=>{let s=e&&qe(t,o)||o;G(t[s])&&G(n)?t[s]=ce(t[s],n):G(n)?t[s]=ce({},n):_(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&q(arguments[n],r);return t}var Ht=(e,t,r,{allOwnKeys:n}={})=>(q(t,(o,s)=>{r&&b(o)?e[s]=j(o,r):e[s]=o},{allOwnKeys:n}),e),qt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),It=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Mt=(e,t,r,n)=>{let o,s,i,c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&ue(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},zt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return n!==-1&&n===r},Jt=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!He(t))return null;let r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Vt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),vt=(e,t)=>{let n=(e&&e[Symbol.iterator]).call(e),o;for(;(o=n.next())&&!o.done;){let s=o.value;t.call(e,s[0],s[1])}},Gt=(e,t)=>{let r,n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},$t=A("HTMLFormElement"),Wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),Be=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Kt=A("RegExp"),ze=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};q(r,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(n[s]=i||o)}),Object.defineProperties(e,n)},Xt=e=>{ze(e,(t,r)=>{if(b(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let n=e[r];if(b(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Qt=(e,t)=>{let r={},n=o=>{o.forEach(s=>{r[s]=!0})};return _(e)?n(e):n(String(e).split(t)),r},Zt=()=>{},Yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ae="abcdefghijklmnopqrstuvwxyz",Le="0123456789",Je={DIGIT:Le,ALPHA:ae,ALPHA_DIGIT:ae+ae.toUpperCase()+Le},er=(e=16,t=Je.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function tr(e){return!!(e&&b(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var rr=e=>{let t=new Array(10),r=(n,o)=>{if(K(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;let s=_(n)?[]:{};return q(n,(i,c)=>{let f=r(i,o+1);!H(f)&&(s[c]=f)}),t[o]=void 0,s}}return n};return r(e,0)},nr=A("AsyncFunction"),or=e=>e&&(K(e)||b(e))&&b(e.then)&&b(e.catch),a={isArray:_,isArrayBuffer:je,isBuffer:Tt,isFormData:Bt,isArrayBufferView:Ct,isString:St,isNumber:He,isBoolean:Dt,isObject:K,isPlainObject:G,isUndefined:H,isDate:Ft,isFile:Nt,isBlob:_t,isRegExp:Kt,isFunction:b,isStream:kt,isURLSearchParams:Lt,isTypedArray:Vt,isFileList:Ut,forEach:q,merge:ce,extend:Ht,trim:jt,stripBOM:qt,inherits:It,toFlatObject:Mt,kindOf:$,kindOfTest:A,endsWith:zt,toArray:Jt,forEachEntry:vt,matchAll:Gt,isHTMLForm:$t,hasOwnProperty:Be,hasOwnProp:Be,reduceDescriptors:ze,freezeMethods:Xt,toObjectSet:Qt,toCamelCase:Wt,noop:Zt,toFiniteNumber:Yt,findKey:qe,global:Ie,isContextDefined:Me,ALPHABET:Je,generateString:er,isSpecCompliantForm:tr,toJSONObject:rr,isAsyncFn:nr,isThenable:or};function U(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}a.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ve=U.prototype,ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ve[e]={value:e}});Object.defineProperties(U,ve);Object.defineProperty(Ve,"isAxiosError",{value:!0});U.from=(e,t,r,n,o,s)=>{let i=Object.create(Ve);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),U.call(i,e.message,t,r,n,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var h=U;var X=null;function le(e){return a.isPlainObject(e)||a.isArray(e)}function $e(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ge(e,t,r){return e?e.concat(t).map(function(o,s){return o=$e(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function sr(e){return a.isArray(e)&&!e.some(le)}var ir=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ar(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(X||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,w){return!a.isUndefined(w[d])});let n=r.metaTokens,o=r.visitor||l,s=r.dots,i=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function m(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,d,w){let x=p;if(p&&!w&&typeof p=="object"){if(a.endsWith(d,"{}"))d=n?d:d.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&sr(p)||(a.isFileList(p)||a.endsWith(d,"[]"))&&(x=a.toArray(p)))return d=$e(d),x.forEach(function(C,gt){!(a.isUndefined(C)||C===null)&&t.append(i===!0?Ge([d],gt,s):i===null?d:d+"[]",m(C))}),!1}return le(p)?!0:(t.append(Ge(w,d,s),m(p)),!1)}let u=[],E=Object.assign(ir,{defaultVisitor:l,convertValue:m,isVisitable:le});function g(p,d){if(!a.isUndefined(p)){if(u.indexOf(p)!==-1)throw Error("Circular reference detected in "+d.join("."));u.push(p),a.forEach(p,function(x,T){(!(a.isUndefined(x)||x===null)&&o.call(t,x,a.isString(T)?T.trim():T,d,E))===!0&&g(x,d?d.concat(T):[T])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}var S=ar;function We(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Ke(e,t){this._pairs=[],e&&S(e,this,t)}var Xe=Ke.prototype;Xe.append=function(t,r){this._pairs.push([t,r])};Xe.toString=function(t){let r=t?function(n){return t.call(this,n,We)}:We;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};var Q=Ke;function cr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function I(e,t,r){if(!t)return e;let n=r&&r.encode||cr,o=r&&r.serialize,s;if(o?s=o(t,r):s=a.isURLSearchParams(t)?t.toString():new Q(t,r).toString(n),s){let i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}var fe=class{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}},pe=fe;var Z={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var Qe=typeof URLSearchParams<"u"?URLSearchParams:Q;var Ze=typeof FormData<"u"?FormData:null;var Ye=typeof Blob<"u"?Blob:null;var et={isBrowser:!0,classes:{URLSearchParams:Qe,FormData:Ze,Blob:Ye},protocols:["http","https","file","blob","url","data"]};var de={};At(de,{hasBrowserEnv:()=>tt,hasStandardBrowserEnv:()=>ur,hasStandardBrowserWebWorkerEnv:()=>lr});var tt=typeof window<"u"&&typeof document<"u",ur=(e=>tt&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),lr=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";var P={...de,...et};function me(e,t){return S(e,new P.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return P.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function fr(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pr(e){let t={},r=Object.keys(e),n,o=r.length,s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function dr(e){function t(r,n,o,s){let i=r[s++];if(i==="__proto__")return!0;let c=Number.isFinite(+i),f=s>=r.length;return i=!i&&a.isArray(o)?o.length:i,f?(a.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(r,n,o[i],s)&&a.isArray(o[i])&&(o[i]=pr(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){let r={};return a.forEachEntry(e,(n,o)=>{t(fr(n),o,r,0)}),r}return null}var Y=dr;function mr(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}var he={transitional:Z,adapter:["xhr","http"],transformRequest:[function(t,r){let n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o?JSON.stringify(Y(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return me(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){let f=this.env&&this.env.FormData;return S(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),mr(t)):t}],transformResponse:[function(t){let r=this.transitional||he.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||o)){let i=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:P.classes.FormData,Blob:P.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{he.headers[e]={}});var k=he;var hr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rt=e=>{let t={},r,n,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),r=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!r||t[r]&&hr[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};var nt=Symbol("internals");function M(e){return e&&String(e).trim().toLowerCase()}function ee(e){return e===!1||e==null?e:a.isArray(e)?e.map(ee):String(e)}function yr(e){let t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}var Er=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ye(e,t,r,n,o){if(a.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function wr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function xr(e,t){let r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,i){return this[n].call(this,t,o,s,i)},configurable:!0})})}var B=class{constructor(t){t&&this.set(t)}set(t,r,n){let o=this;function s(c,f,m){let l=M(f);if(!l)throw new Error("header name must be a non-empty string");let u=a.findKey(o,l);(!u||o[u]===void 0||m===!0||m===void 0&&o[u]!==!1)&&(o[u||f]=ee(c))}let i=(c,f)=>a.forEach(c,(m,l)=>s(m,l,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!Er(t)?i(rt(t),r):t!=null&&s(r,t,n),this}get(t,r){if(t=M(t),t){let n=a.findKey(this,t);if(n){let o=this[n];if(!r)return o;if(r===!0)return yr(o);if(a.isFunction(r))return r.call(this,o,n);if(a.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=M(t),t){let n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||ye(this,this[n],n,r)))}return!1}delete(t,r){let n=this,o=!1;function s(i){if(i=M(i),i){let c=a.findKey(n,i);c&&(!r||ye(n,n[c],c,r))&&(delete n[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){let r=Object.keys(this),n=r.length,o=!1;for(;n--;){let s=r[n];(!t||ye(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){let r=this,n={};return a.forEach(this,(o,s)=>{let i=a.findKey(n,s);if(i){r[i]=ee(o),delete r[s];return}let c=t?wr(s):String(s).trim();c!==s&&delete r[s],r[c]=ee(o),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return a.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){let n=(this[nt]=this[nt]={accessors:{}}).accessors,o=this.prototype;function s(i){let c=M(i);n[c]||(xr(o,i),n[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}};B.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(B.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(B);var R=B;function z(e,t){let r=this||k,n=t||r,o=R.from(n.headers),s=n.data;return a.forEach(e,function(c){s=c.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function J(e){return!!(e&&e.__CANCEL__)}function ot(e,t,r){h.call(this,e??"canceled",h.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(ot,h,{__CANCEL__:!0});var D=ot;function Ee(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new h("Request failed with status code "+r.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var st=P.hasStandardBrowserEnv?{write(e,t,r,n,o,s){let i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){let t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function we(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function xe(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function V(e,t){return e&&!we(t)?xe(e,t):t}var it=P.hasStandardBrowserEnv?function(){let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function o(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(i){let c=a.isString(i)?o(i):i;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}();function Pe(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Pr(e,t){e=e||10;let r=new Array(e),n=new Array(e),o=0,s=0,i;return t=t!==void 0?t:1e3,function(f){let m=Date.now(),l=n[s];i||(i=m),r[o]=f,n[o]=m;let u=s,E=0;for(;u!==o;)E+=r[u++],u=u%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),m-i<t)return;let g=l&&m-l;return g?Math.round(E*1e3/g):void 0}}var at=Pr;function ct(e,t){let r=0,n=at(50,250);return o=>{let s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-r,f=n(c),m=s<=i;r=s;let l={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:f||void 0,estimated:f&&i&&m?(i-s)/f:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}var Rr=typeof XMLHttpRequest<"u",ut=Rr&&function(e){return new Promise(function(r,n){let o=e.data,s=R.from(e.headers).normalize(),{responseType:i,withXSRFToken:c}=e,f;function m(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}let l;if(a.isFormData(o)){if(P.hasStandardBrowserEnv||P.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((l=s.getContentType())!==!1){let[d,...w]=l?l.split(";").map(x=>x.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...w].join("; "))}}let u=new XMLHttpRequest;if(e.auth){let d=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(d+":"+w))}let E=V(e.baseURL,e.url);u.open(e.method.toUpperCase(),I(E,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function g(){if(!u)return;let d=R.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),x={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:d,config:e,request:u};Ee(function(C){r(C),m()},function(C){n(C),m()},x),u=null}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){u&&(n(new h("Request aborted",h.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",x=e.transitional||Z;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),n(new h(w,x.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,u)),u=null},P.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&it(E))){let d=e.xsrfHeaderName&&e.xsrfCookieName&&st.read(e.xsrfCookieName);d&&s.set(e.xsrfHeaderName,d)}o===void 0&&s.setContentType(null),"setRequestHeader"in u&&a.forEach(s.toJSON(),function(w,x){u.setRequestHeader(x,w)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",ct(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",ct(e.onUploadProgress)),(e.cancelToken||e.signal)&&(f=d=>{u&&(n(!d||d.type?new D(null,e,u):d),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f)));let p=Pe(E);if(p&&P.protocols.indexOf(p)===-1){n(new h("Unsupported protocol "+p+":",h.ERR_BAD_REQUEST,e));return}u.send(o||null)})};var Re={http:X,xhr:ut};a.forEach(Re,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var lt=e=>`- ${e}`,gr=e=>a.isFunction(e)||e===null||e===!1,te={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:t}=e,r,n,o={};for(let s=0;s<t;s++){r=e[s];let i;if(n=r,!gr(r)&&(n=Re[(i=String(r)).toLowerCase()],n===void 0))throw new h(`Unknown adapter '${i}'`);if(n)break;o[i||"#"+s]=n}if(!n){let s=Object.entries(o).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build")),i=t?s.length>1?`since :
`+s.map(lt).join(`
`):" "+lt(s[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:Re};function ge(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function re(e){return ge(e),e.headers=R.from(e.headers),e.data=z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),te.getAdapter(e.adapter||k.adapter)(e).then(function(n){return ge(e),n.data=z.call(e,e.transformResponse,n),n.headers=R.from(n.headers),n},function(n){return J(n)||(ge(e),n&&n.response&&(n.response.data=z.call(e,e.transformResponse,n.response),n.response.headers=R.from(n.response.headers))),Promise.reject(n)})}var ft=e=>e instanceof R?e.toJSON():e;function O(e,t){t=t||{};let r={};function n(m,l,u){return a.isPlainObject(m)&&a.isPlainObject(l)?a.merge.call({caseless:u},m,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function o(m,l,u){if(a.isUndefined(l)){if(!a.isUndefined(m))return n(void 0,m,u)}else return n(m,l,u)}function s(m,l){if(!a.isUndefined(l))return n(void 0,l)}function i(m,l){if(a.isUndefined(l)){if(!a.isUndefined(m))return n(void 0,m)}else return n(void 0,l)}function c(m,l,u){if(u in t)return n(m,l);if(u in e)return n(void 0,m)}let f={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(m,l)=>o(ft(m),ft(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){let u=f[l]||o,E=u(e[l],t[l],l);a.isUndefined(E)&&u!==c||(r[l]=E)}),r}var ne="1.6.7";var be={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{be[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});var pt={};be.transitional=function(t,r,n){function o(s,i){return"[Axios v"+ne+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return(s,i,c)=>{if(t===!1)throw new h(o(i," has been removed"+(r?" in "+r:"")),h.ERR_DEPRECATED);return r&&!pt[i]&&(pt[i]=!0,console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,c):!0}};function br(e,t,r){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let s=n[o],i=t[s];if(i){let c=e[s],f=c===void 0||i(c,s,e);if(f!==!0)throw new h("option "+s+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}var oe={assertOptions:br,validators:be};var F=oe.validators,L=class{constructor(t){this.defaults=t,this.interceptors={request:new pe,response:new pe}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;let s=o.stack?o.stack.replace(/^.+\n/,""):"";n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=O(this.defaults,r);let{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&oe.assertOptions(n,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),o!=null&&(a.isFunction(o)?r.paramsSerializer={serialize:o}:oe.assertOptions(o,{encode:F.function,serialize:F.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[r.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),r.headers=R.concat(i,s);let c=[],f=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(f=f&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});let m=[];this.interceptors.response.forEach(function(d){m.push(d.fulfilled,d.rejected)});let l,u=0,E;if(!f){let p=[re.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,m),E=p.length,l=Promise.resolve(r);u<E;)l=l.then(p[u++],p[u++]);return l}E=c.length;let g=r;for(u=0;u<E;){let p=c[u++],d=c[u++];try{g=p(g)}catch(w){d.call(this,w);break}}try{l=re.call(this,g)}catch(p){return Promise.reject(p)}for(u=0,E=m.length;u<E;)l=l.then(m[u++],m[u++]);return l}getUri(t){t=O(this.defaults,t);let r=V(t.baseURL,t.url);return I(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){L.prototype[t]=function(r,n){return this.request(O(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(s,i,c){return this.request(O(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}L.prototype[t]=r(),L.prototype[t+"Form"]=r(!0)});var v=L;var Ae=class e{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});let n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s,i=new Promise(c=>{n.subscribe(c),s=c}).then(o);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s,i,c){n.reason||(n.reason=new D(s,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new e(function(o){t=o}),cancel:t}}},dt=Ae;function Oe(e){return function(r){return e.apply(null,r)}}function Te(e){return a.isObject(e)&&e.isAxiosError===!0}var Ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ce).forEach(([e,t])=>{Ce[t]=e});var mt=Ce;function ht(e){let t=new v(e),r=j(v.prototype.request,t);return a.extend(r,v.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return ht(O(e,o))},r}var y=ht(k);y.Axios=v;y.CanceledError=D;y.CancelToken=dt;y.isCancel=J;y.VERSION=ne;y.toFormData=S;y.AxiosError=h;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=Oe;y.isAxiosError=Te;y.mergeConfig=O;y.AxiosHeaders=R;y.formToJSON=e=>Y(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=te.getAdapter;y.HttpStatusCode=mt;y.default=y;var se=y;var{Axios:ms,AxiosError:hs,CanceledError:ys,isCancel:Es,CancelToken:ws,VERSION:xs,all:Ps,Cancel:Rs,isAxiosError:gs,spread:bs,toFormData:As,AxiosHeaders:Os,HttpStatusCode:Ts,formToJSON:Cs,getAdapter:Ss,mergeConfig:Ds}=se;var N=class{url;instance;constructor(t){let{axiosConfig:r={},url:n}=t,{headers:o,...s}=r;this.url=n,this.instance=se.create({baseURL:n,headers:{Accept:"application/json","Content-Type":"application/json",...o},withCredentials:!0,...s}),this.instance.interceptors.response.use(i=>("message"in i.data?i.data=i.data.message:Object.keys(i.data).length===1&&"data"in i.data&&(i.data=i.data.data),i),i=>{let f={message:i.response?.data?.message||i.response?.statusText||i.response?.data?.exc_type,statusCode:i.response?.status};return Promise.reject(f)})}};var Se=(c=>(c.read="read",c.write="write",c.submit="submit",c.cancel="cancel",c.report="report",c.create="create",c.delete="delete",c))(Se||{});var yt=e=>e in Se;var Et=e=>{let{action:t,params:r={},resource:n}=e,{id:o=""}=r;if(!n)throw new TypeError("Resource is required");if(!yt(t))throw new TypeError("Invalid action");return{docname:o,doctype:n,perm_type:t}};var De=class extends N{provider(t={}){let{options:r}=t;return{can:this.can,options:r}}can=async t=>{try{let r=Et(t),{data:{has_permission:n}}=await this.instance.request({method:"GET",params:r,url:"/api/method/frappe.client.has_permission"});return{can:!!n}}catch{return{can:!1}}}},Fe=De;var Ar=e=>{let{options:t={},...r}=e;return new Fe(r).provider({options:t})},Or=Ar;var ie=e=>{let{error:t,errorWhile:r}=e;return wt(t)?t:r?new Error(`An unknown error occurred while ${r}.`):new Error("An unknown error occurred.")};var wt=e=>typeof e=="object"&&e!==null&&"message"in e&&"statusCode"in e;var Ne=class extends N{provider(){return{check:this.check,login:this.login,logout:this.logout,onError:this.onError}}login=async t=>{let{pwd:r,redirectTo:n="/",usr:o}=t;try{return await this.instance.request({data:{pwd:r,usr:o},method:"POST",url:"/api/method/login"}),{redirectTo:n,success:!0}}catch(s){return{error:ie({error:s,errorWhile:"logging in"}),redirectTo:n,success:!1}}};logout=async t=>{let{redirectTo:r="/"}=t||{};try{return await this.instance.request({method:"POST",url:"/api/method/logout"}),{redirectTo:r,success:!0}}catch(n){return{error:ie({error:n,errorWhile:"logging out"}),redirectTo:r,success:!1}}};check=async t=>{let{redirectTo:r="/"}=t||{};try{return typeof document<"u"&&typeof document.cookie=="string"&&(document.cookie===""||document.cookie.includes("user_id=Guest"))?{authenticated:!1,redirectTo:r}:(await this.instance.request({method:"GET",url:"/api/method/frappe.auth.get_logged_user"}),{authenticated:!0,redirectTo:r})}catch{return{authenticated:!1,redirectTo:r}}};onError=t=>{let r={error:ie({error:t})};return Promise.resolve(r)}},_e=Ne;var Tr=e=>new _e(e).provider(),Cr=Tr;var Sr={between:"between",contains:"like",eq:"=",gt:">",gte:">=",in:"in",lt:"<",lte:"<=",ncontains:"not like",ne:"!=",nin:"not in"},Dr={and:null,containss:null,endswith:null,endswiths:null,nbetween:null,ncontainss:null,nendswith:null,nendswiths:null,nnull:null,nstartswith:null,nstartswiths:null,null:null,or:null,startswith:null,startswiths:null},Fr={...Sr,...Dr},Nr=(e,t)=>typeof e=="string"?{contains:`%${e}%`,ncontains:`%${e}%`}[t]??e:e,_r=e=>{let t=Fr[e];if(t)return t;throw new Error(`[refine-frappe]: \`operator: ${e}\` is not supported.`)},Ur=e=>{if(!("field"in e))throw new Error("[refine-frappe]: `filter` must be a logical filter.");let{field:t,operator:r,value:n}=e,o=_r(r),s=Nr(n,r);return[t,o,s]},xt=e=>{if(!e)return[];let t=[];return e.forEach(r=>{t.push(Ur(r))}),t};var Pt=(e={})=>{let{current:n=1,pageSize:o=10}=e;return{limit_page_length:o,limit_page_start:(n-1)*o}};var Rt=e=>e&&e.length>0?e.map(r=>`${r.field} ${r.order}`).join(","):void 0;var Ue=class extends N{provider(){return{create:this.create,custom:this.custom,deleteOne:this.deleteOne,getApiUrl:this.getApiUrl,getList:this.getList,getMany:this.getMany,getOne:this.getOne,update:this.update}}getList=async t=>{let{filters:r,meta:n,pagination:o,resource:s,sorters:i}=t,c=xt(r),f=Pt(o),m=Rt(i),{data:l}=await this.instance.request({method:"GET",params:{fields:JSON.stringify(n?.fields||["name"]),filters:JSON.stringify(c),limit:f.limit_page_length,limit_start:f.limit_page_start,order_by:m},url:`/api/resource/${s}`}),{data:u}=await this.instance.request({method:"GET",params:{filters:JSON.stringify(c)},url:`/api/v2/doctype/${s}/count`});return{data:l,total:u}};getMany=async t=>{let{ids:r,meta:n,resource:o}=t,{data:s}=await this.instance.request({method:"GET",params:{fields:JSON.stringify(n?.fields||["name"]),filters:JSON.stringify([["name","in",r]])},url:`/api/resource/${o}`});return{data:s}};create=async t=>{let{resource:r,variables:n}=t,{data:o}=await this.instance.request({data:n,method:"POST",url:`/api/resource/${r}`});return{data:o}};update=async t=>{let{id:r,resource:n,variables:o}=t,{data:s}=await this.instance.request({data:o,method:"PUT",url:`/api/resource/${n}/${r}`});return{data:s}};getOne=async t=>{let{id:r,resource:n}=t,{data:o}=await this.instance.request({method:"GET",url:`/api/resource/${n}/${r}`});return{data:o}};deleteOne=async t=>{let{id:r,resource:n}=t;return await this.instance.request({method:"DELETE",url:`/api/resource/${n}/${r}`}),{data:{id:r}}};custom=async t=>{let{method:r,payload:n,url:o}=t,{data:s}=await this.instance.request({data:n,method:r,url:o});return{data:s}};getApiUrl=()=>this.url},ke=Ue;var kr=e=>new ke(e).provider(),Br=kr;})();
//# sourceMappingURL=index.js.map