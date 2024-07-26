(()=>{var o={54:(o,t,e)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:l,checkRegexs:c,execCode:i}=e(191);o.exports=(o,t,e)=>{const s=n(o,t,e);var a=domlogger.func["String.prototype.split"].call(e,":");e=domlogger.func["Array.prototype.pop"].call(a);const[p,f]=g(domlogger.func["String.prototype.split"].call(e,"."));if(0===a.length&&(a=["set","get"]),!p||!(f in p))return void domlogger.func["console.log"](`[DOMLogger++] ${e} (attribute) does not exist!`);try{if("function"==typeof p[f])return void domlogger.func["console.log"](`[DOMLogger++] ${e} can't be a function or a class!`)}catch{}const u=l(p,f);if(u.configurable){var d;if(!u.set||!u.get)try{d=p[f]}catch{if(u.set||!u.get)return void domlogger.func["console.log"](`[DOMLogger++] ${e} can't be hook for now!`);if(domlogger.func["Array.prototype.includes"].call(a,"set"))return void domlogger.func["console.log"](`[DOMLogger++] Only the getter can be hooked for ${e}, remove set!`)}Object.defineProperty(p,f,{get:function(){if(u.get?output=u.get.call(this):output=d,domlogger.func["Array.prototype.includes"].call(a,"get")){output=i(e,s.hookFunction,this,output);const n=c(e,s.match,this,output,!0);!c(e,s["!match"],this,output,!1)&&n&&r(o,t,this.nodeName?`get:${this.nodeName.toLowerCase()}.${f}`:`get:${e}`,this,output,s)}return output},set:function(n){if(domlogger.func["Array.prototype.includes"].call(a,"set")&&n){n=i(e,s.hookFunction,this,n);const g=c(e,s.match,this,n,!0);!c(e,s["!match"],this,n,!1)&&g&&r(o,t,this.nodeName?`set:${this.nodeName.toLowerCase()}.${f}`:`set:${e}`,this,n,s)}return u.set?u.set.call(this,n):void(d=n)}})}else domlogger.func["console.log"](`[DOMLogger++] ${e} is not configurable, can't hook it!`)}},746:(o,t,e)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:l,checkRegexs:c,execCode:i}=e(191);o.exports=(o,t,e)=>{const s=n(o,t,e);var[a,p]=g(domlogger.func["String.prototype.split"].call(e,"."));a&&p in a?"function"==typeof a[p]?l(a,p).configurable?(domlogger.func[e]=a[p],a[p]=new domlogger.func.Proxy(a[p],{construct:function(n,g){g=i(e,s.hookFunction,null,g);const l=c(e,s.match,null,g,!0);return!c(e,s["!match"],null,g,!1)&&l&&r(o,t,e,n,g,s),new n(...g)}})):domlogger.func["console.log"](`[DOMLogger++] ${e} is not configurable, can't hook it!`):domlogger.func["console.log"](`[DOMLogger++] ${e} is not a class!`):domlogger.func["console.log"](`[DOMLogger++] ${e} (class) does not exist!`)}},185:(o,t,e)=>{"use strict";e.r(t),e.d(t,{sha256:()=>r});var r=function o(t){function e(o,t){return o>>>t|o<<32-t}for(var r,n,g=Math.pow,l=g(2,32),c="length",i="",s=[],a=8*t[c],p=o.h=o.h||[],f=o.k=o.k||[],u=f[c],d={},y=2;u<64;y++)if(!d[y]){for(r=0;r<313;r+=y)d[r]=y;p[u]=g(y,.5)*l|0,f[u++]=g(y,1/3)*l|0}for(t+="X";t[c]%64-56;)t+="\0";for(r=0;r<t[c];r++){if((n=t.charCodeAt(r))>>8)return;s[r>>2]|=n<<(3-r)%4*8}for(s[s[c]]=a/l|0,s[s[c]]=a,n=0;n<s[c];){var m=s.slice(n,n+=16),h=p;for(p=p.slice(0,8),r=0;r<64;r++){var A=m[r-15],b=m[r-2],O=p[0],v=p[4],x=p[7]+(e(v,6)^e(v,11)^e(v,25))+(v&p[5]^~v&p[6])+f[r]+(m[r]=r<16?m[r]:m[r-16]+(e(A,7)^e(A,18)^A>>>3)+m[r-7]+(e(b,17)^e(b,19)^b>>>10)|0);(p=[x+((e(O,2)^e(O,13)^e(O,22))+(O&p[1]^O&p[2]^p[1]&p[2]))|0].concat(p))[4]=p[4]+x|0}for(r=0;r<8;r++)p[r]=p[r]+h[r]|0}for(r=0;r<8;r++)for(n=3;n+1;n--){var $=p[r]>>8*n&255;i+=($<16?0:"")+$.toString(16)}return i}},3:(o,t,e)=>{const{log:r,getConfig:n,getTargets:g}=e(191),l={function:e(4),class:e(746),attribute:e(54)};o.exports=o=>{for(let t=0;t<o.length;t++)o[t].info=domlogger.func["String.prototype.split"].call(o[t].target,":"),o[t].config=n(o[t].hook,o[t].type,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(o[t].info,1),":")),o[t].t=domlogger.func["Array.prototype.pop"].call(domlogger.func["Array.prototype.slice"].call(o[t].info,1));const t=domlogger.func.setInterval.call(window,(()=>{for(const t of o){var[e,n]=g(domlogger.func["String.prototype.split"].call(t.t,"."));e&&n in e&&("attribute"!==t.info[0]||!t.info.includes("set")&&t.info.includes("get")||r(t.hook,t.type,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(t.info,1),":"),null,e[n],t.config),l[t.info[0]](t.hook,t.type,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(t.info,1),":")),domlogger.func["Array.prototype.splice"].call(o,domlogger.func["Array.prototype.indexOf"].call(o,t),1))}0===o.length&&domlogger.func.clearInterval(t)}),50)}},454:(o,t,e)=>{const r=e(54),{log:n,getConfig:g,stringify:l,checkRegexs:c,execCode:i}=e(191);o.exports=(o,t,e)=>{const s=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(r,a,p){if(domlogger.func["Array.prototype.includes"].call(e,r)){const s=g(o,t,r);args=i(e,s.hookFunction,null,a);const f=c(e,s.match,null,`${a}${p?`;options=${l(p)}`:""}`,!0);!c(e,s["!match"],null,`${a}${p?`;options=${l(p)}`:""}`,!1)&&f&&n(o,t,`on${r}`,null,`${a}${p?`;options=${l(p)}`:""}`,s)}return s.call(this,r,a,p)};for(const n of e)`on${n}`in window?(r(o,t,`set:on${n}`),`on${n}`in HTMLElement.prototype&&r(o,t,`set:HTMLElement.prototype.on${n}`)):domlogger.func["console.log"](`[DOMLogger++] on${n} (event) does not exist!`)}},4:(o,t,e)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:l,isThisInteresting:c,checkRegexs:i,execCode:s,stringify:a}=e(191);o.exports=(o,t,e)=>{const p=n(o,t,e);var[f,u]=g(domlogger.func["String.prototype.split"].call(e,"."));if(!f||!(u in f))return void domlogger.func["console.log"](`[DOMLogger++] ${e} (function) does not exist!`);if("function"!=typeof f[u])return void domlogger.func["console.log"](`[DOMLogger++] ${e} is not a function!`);if(!l(f,u).configurable)return void domlogger.func["console.log"](`[DOMLogger++] ${e} is not configurable, can't hook it!`);const d=f[u];domlogger.func[e]=d,f[u]=new domlogger.func.Proxy(f[u],{apply:function(n,g,l){l=s(e,p.hookFunction,g,l),domlogger.update.thisArg&&(g=domlogger.update.thisArg),domlogger.update.thisArg=null;const u=i(e,p.match,g,l,!0);return!i(e,p["!match"],g,l,!1)&&u&&r(o,t,e,g,c(f,g)?`this=${a(g)}; ${a(l)}`:l,p),domlogger.func.Reflect.apply(d,g,l)}})}},191:(o,t,e)=>{const{sha256:r}=e(185),n=()=>{let o=(new domlogger.func.Error).stack;return o=domlogger.func["String.prototype.split"].call(o,"\n"),domlogger.func["Array.prototype.filter"].call(o,(o=>!domlogger.func["String.prototype.includes"].call(o,"/src/bundle.js")))},g=(o,t)=>{var e="";try{cleanUrl=domlogger.func["String.prototype.split"].call(domlogger.func["String.prototype.split"].call(t[0],"://")[1],":"),execLine=domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.splice"].call(cleanUrl,cleanUrl.length-2),":"),cleanUrl=domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.splice"].call(cleanUrl,0,2),":"),e=`${new domlogger.func.URL(`https://${cleanUrl}`).origin}:${execLine}`}catch{e=t[0]}return r(`${e}||${o}`)},l=(o,t=top,e="top")=>{if(o===top)return"top";if(o===opener)return"opener";for(let r=0;r<t.frames.length;r++){if(o===t.frames[r])return`${e}.frames[${r}]`;{const n=l(o,t.frames[r],`${e}.frames[${r}]`);if(n)return n}}return null},c=(o,t,e,r,c,i)=>{var s=n();"Error"===s[0]&&domlogger.func["Array.prototype.shift"].call(s);const a=u(e,i.matchTrace,r,s,!0);if(u(e,i["!matchTrace"],r,s,!1)||!a)return;const f=g(e,s);if(domlogger.debugCanary===f)debugger;var y=!1,m=!1;if(i.alert){const o=u(e,i.alert.match,r,c,!0);!u(e,i.alert["!match"],r,c,!1)&&o&&(y=!0,i.alert.notification&&(m=!0))}let h={ext:"domlogger++",date:domlogger.func["Date.now"](),href:location.href,type:t,hook:o,frame:l(self),sink:e,data:p(c),trace:s,debug:f,badge:y,notification:m};domlogger.func["Array.prototype.includes"].call(domlogger.hookTypeHistory,t)||domlogger.func["Array.prototype.push"].call(domlogger.hookTypeHistory,t),d(i)&&domlogger.func.postMessage(h,"*")},i=(o,t,e)=>{var r=domlogger.hooksConfig["*"]?domlogger.hooksConfig["*"]:{},n=domlogger.hooksConfig[o]?domlogger.hooksConfig[o]:{},g=domlogger.hooksConfig[t]?domlogger.hooksConfig[t]:{},l=domlogger.hooksConfig[e]?domlogger.hooksConfig[e]:{};return domlogger.func["Object.assign"]({},r,l,n,g)},s=o=>{var t=domlogger.func["Array.prototype.pop"].call(o),e=window;"window"===o[0]&&domlogger.func["Array.prototype.shift"].call(o);for(const t of o){if(!(t in e))return[null,null];e=e[t]}return[e,t]},a=(o,t)=>{for(;o;){const e=domlogger.func["Object.getOwnPropertyDescriptor"](o,t);if(e)return e;o=domlogger.func["Object.getPrototypeOf"](o)}},p=o=>{if(void 0===o)o="undefined";else if("function"==typeof o)o=domlogger.func["Function.prototype.toString"].call(o);else if("string"!=typeof o)try{o=domlogger.func["JSON.stringify"](o)}catch{o=`${o}`}return o},f=(o,t)=>{if(!t)return!1;const e=o[Symbol.toStringTag];return"Window"!==e&&"HTMLDocument"!==e},u=(o,t,e,r,n)=>{if(!t)return n;argsString=p(r);for(let n of t){"exec"===domlogger.func["String.prototype.split"].call(n,":")[0]&&(n=y(o,n,e,r));try{new domlogger.func.RegExp(n)}catch{domlogger.func["console.log"](`[DOMLogger++] ${n} (regex) is invalid!`);continue}if(domlogger.func["String.prototype.match"].call(argsString,n))return!0}return!1},d=o=>{if(o&&o.requiredHooks)for(const t of o.requiredHooks)if(!domlogger.func["Array.prototype.includes"].call(domlogger.hookTypeHistory,t))return!1;return!0},y=(o,t,e="",r="")=>{if(!t)return r;"exec"===domlogger.func["String.prototype.split"].call(t,":")[0]&&(t=domlogger.func["String.prototype.split"].call(t,":").splice(1).join(":"));var n=r;try{n=domlogger.func.Function("thisArg","args","target",t)(e,r,o)}catch(o){domlogger.func["console.log"](`[DOMLogger++] ${p(t)} is an invalid code to evaluate!\nError: ${o.message}`)}return n};domlogger.utils={trace:n,sha256:r,computeCanary:g,getWindowContext:l,log:c,getConfig:i,getTargets:s,getOwnPropertyDescriptor:a,stringify:p,isThisInteresting:f,checkRegexs:u,execCode:y},o.exports={trace:n,sha256:r,computeCanary:g,getWindowContext:l,log:c,getConfig:i,getTargets:s,getOwnPropertyDescriptor:a,stringify:p,isThisInteresting:f,checkRegexs:u,execCode:y}}},t={};function e(r){var n=t[r];if(void 0!==n)return n.exports;var g=t[r]={exports:{}};return o[r](g,g.exports,e),g.exports}e.d=(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},e.o=(o,t)=>Object.prototype.hasOwnProperty.call(o,t),e.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};const r=new URL(document.currentScript.src),n=new URLSearchParams(r.search),g=JSON.parse(decodeURIComponent(atob(n.get("hookSettings"))));window.domlogger={},domlogger.clean=()=>{domlogger.debugCanary=""},domlogger.update={},domlogger._description=g._description,domlogger.globals=g.globals,domlogger.hooksTargets=g.hooks,domlogger.hooksConfig={},domlogger.hookTypeHistory=[],domlogger.debugCanary="undefined"===n.get("debugCanary")?void 0:n.get("debugCanary"),g.config=g.config||{};for(const o of Object.keys(g.config))for(const t of o.split("|"))domlogger.hooksConfig[t]=g.config[o];RegExp.prototype.toJSON=function(){return this.toString()},domlogger.func={"Array.from":Array.from,"Array.prototype.filter":Array.prototype.filter,"Array.prototype.includes":Array.prototype.includes,"Array.prototype.indexOf":Array.prototype.indexOf,"Array.prototype.join":Array.prototype.join,"Array.prototype.map":Array.prototype.map,"Array.prototype.pop":Array.prototype.pop,"Array.prototype.push":Array.prototype.push,"Array.prototype.shift":Array.prototype.shift,"Array.prototype.slice":Array.prototype.slice,"Array.prototype.splice":Array.prototype.splice,clearInterval:clearInterval.bind(window),"console.log":console.log,"crypto.subtle":crypto.subtle,"Date.now":Date.now,Error,Function,"Function.prototype.toString":Function.prototype.toString,"JSON.stringify":JSON.stringify,"Object.assign":Object.assign,"Object.entries":Object.entries,"Object.getOwnPropertyDescriptor":Object.getOwnPropertyDescriptor,"Object.getPrototypeOf":Object.getPrototypeOf,postMessage:postMessage.bind(window),Proxy,Reflect,RegExp,setInterval:setInterval.bind(window),"String.prototype.includes":String.prototype.includes,"String.prototype.match":String.prototype.match,"String.prototype.split":String.prototype.split,"String.prototype.startsWith":String.prototype.startsWith,TextEncoder,Uint8Array,URL};const l={function:e(4),class:e(746),attribute:e(54),event:e(454),custom:e(3)};domlogger.customTargets=[];for(const[o,t]of domlogger.func["Object.entries"](domlogger.hooksTargets))for(const[e,r]of domlogger.func["Object.entries"](t))if("event"!==e)for(const t of r)"custom"!==e?l[e](e,o,t):domlogger.customTargets.push({hook:e,type:o,target:t});else l[e](e,o,r);l.custom(domlogger.customTargets);const{execCode:c}=e(191);g.onload&&c(null,g.onload)})();