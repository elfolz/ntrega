(globalThis["webpackChunkNtrega"]=globalThis["webpackChunkNtrega"]||[]).push([[922],{8005:(e,t,n)=>{"use strict";n.d(t,{F1:()=>h});n(7658);function r(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,i="devtools-plugin:setup",c="plugin:settings:set";let s,u;function l(){var e;return void 0!==s||("undefined"!==typeof window&&window.performance?(s=!0,u=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(s=!0,u=n.g.perf_hooks.performance):s=!1),s}function f(){return l()?u.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const i in e.settings){const t=e.settings[i];n[i]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let o=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(o,t)}catch(a){}this.fallbacks={getSettings(){return o},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(a){}o=e},now(){return f()}},t&&t.on(c,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function h(e,t){const n=e,c=o(),s=r(),u=a&&n.enableEarlyProxy;if(!s||!c.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const e=u?new p(n,s):null,r=c.__VUE_DEVTOOLS_PLUGINS__=c.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit(i,e,t)}},2900:(e,t,n)=>{"use strict";n.d(t,{_T:()=>r});n(7658);function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create},990:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>V,iq:()=>q});n(7658);var r=n(4870),o=n(3396),a=function(){return"undefined"!==typeof document&&"undefined"!==typeof window},i=function(e,t){return new Promise((function(n,r){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");if(a.async=!0,a.src=e,a.charset="utf-8",t){var i=document.createElement("link");i.href=t,i.rel="preconnect",o.appendChild(i)}o.appendChild(a),a.onload=n,a.onerror=r}))},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(t).forEach((function(n){e[n]=t[n]}))},s=(0,r.qj)({property:null,isEnabled:!0,disableScriptLoader:!1,useDebugger:!1,globalObjectName:"gtag",dataLayerName:"dataLayer",resourceURL:"https://www.googletagmanager.com/gtag/js",preconnectOrigin:"https://www.googletagmanager.com",customResource:null,appName:null,appId:null,appVersion:null}),u=function(){return(0,r.BK)(s)},l=(0,o.Fl)((function(){var e=u(),t=e.property;if(t.value)return Array.isArray(t.value)?t.value.find((function(e){return!0===e["default"]}))||t.value[0]:t.value})),f=(0,o.Fl)((function(){var e=u(),t=e.property;return Boolean(t.value&&null!==t.value.id)})),p=(0,o.Fl)((function(){var e=u(),t=e.property;return Array.isArray(t.value)?t.value:[t.value]})),h=(0,o.Fl)((function(){var e=u(),t=e.isEnabled,n=l.value;return Boolean(n&&n.id&&t.value)})),d=function(){var e;if(a()){for(var t=u(),n=t.globalObjectName,r=t.useDebugger,o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];r.value&&console.warn("[vue-gtag] Debugger:",i),(e=window)[n.value].apply(e,i)}},v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];p.value.forEach((function(e){d.apply(void 0,["config",e.id].concat(t))}))},g=function(e){v({custom_map:e})},m=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];a()&&p.value.forEach((function(t){window["ga-disable-".concat(t.id)]=e}))},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},t);!n.send_to&&p.value.length>1&&(n.send_to=p.value.map((function(e){return e.id}))),d("event",e,n)},w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];y.apply(void 0,["exception"].concat(t))},b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];v.apply(void 0,["linker"].concat(t))},k=function(e){var t={};t="string"===typeof e?{page_path:e,page_location:window.location.href}:e,"undefined"===typeof t.send_page_view&&(t.send_page_view=!0),y("page_view",t)},E=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];y.apply(void 0,["purchase"].concat(t))},O=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];y.apply(void 0,["refund"].concat(t))},_=function(){for(var e=u(),t=e.appName,n=e.appId,r=e.appVersion,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];var c=a[0],s={};s="string"===typeof c?{screen_name:c}:c,null==s.app_name&&null!=t.value&&(s.app_name=t.value),null==s.app_id&&null!=n.value&&(s.app_id=n.value),null==s.app_version&&null!=r.value&&(s.app_version=r.value),y("screen_view",s)},x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];d.apply(void 0,["set"].concat(t))},P=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];y.apply(void 0,["timing_complete"].concat(t))},S=Object.freeze({__proto__:null,config:v,customMap:g,disable:m,event:y,exception:w,linker:b,pageview:k,purchase:E,query:d,refund:O,screenview:_,set:x,time:P}),j=(0,r.iH)(!1),R=(0,r.iH)(!1),A=function(){var e=u(),t=e.disableScriptLoader,n=e.preconnectOrigin,r=e.resourceURL,o=e.dataLayerName;if(a()&&f.value&&!R.value)if(R.value=!0,p.value.forEach((function(e){var t=Object.assign({send_page_view:!1},e.params);d("config",e.id,t)})),t.value)j.value=!0;else{var c="".concat(r.value,"?id=").concat(l.value.id,"&l=").concat(o.value);i(c,n.value).then((function(){j.value=!0}))}},L=function(){(0,o.YP)((function(){return h.value}),(function(e){return e&&A()}),{immediate:!0})},C=function(){if(a()){var e=u(),t=e.globalObjectName,n=e.dataLayerName;null==window[t.value]&&(window[n.value]=window[n.value]||[],window[t.value]=function(){window[n.value].push(arguments)}),window[t.value]("js",new Date)}},$=(0,r.qj)({template:null,useScreenview:!1,skipSamePath:!0}),F=function(){return(0,r.BK)($)},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=F(),r=n.template,o=n.useScreenview,a=r.value?r.value(e,t):null;return a||(o.value?{screen_name:e.name}:{page_title:e.name,page_path:e.path,page_location:window.location.href})},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=F(),r=n.useScreenview,o=n.skipSamePath;if(!o.value||e.path!==t.path){var a=U(e,t);r.value?_(a):k(a)}},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c($,t),(0,o.YP)((function(){return h.value}),(function(t){t&&e.isReady().then((function(){(0,o.Y3)((function(){T(e.currentRoute.value)})),e.afterEach((function(e,t){(0,o.Y3)((function(){T(e,t)}))}))}))}),{immediate:!0})},I={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(s,t),C(),L(),e.config.globalProperties.$gtag=S}};const V=I},89:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},9414:function(e){(function(t,n){e.exports=n()})(0,(function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,t,n){"use strict";function r(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var o=n(2),a=n(0),i=n.n(a);t.a=function(e,t){var a=t.value;if((Array.isArray(a)||"string"==typeof a)&&(a={mask:a,tokens:i.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var c=e.getElementsByTagName("input");if(1!==c.length)throw new Error("v-mask directive requires 1 input, found "+c.length);e=c[0]}e.oninput=function(t){if(t.isTrusted){var i=e.selectionEnd,c=e.value[i-1];for(e.value=n.i(o.a)(e.value,a.mask,!0,a.tokens);i<e.value.length&&e.value.charAt(i-1)!==c;)i++;e===document.activeElement&&(e.setSelectionRange(i,i),setTimeout((function(){e.setSelectionRange(i,i)}),0)),e.dispatchEvent(r("input"))}};var s=n.i(o.a)(e.value,a.mask,!0,a.tokens);s!==e.value&&(e.value=s,e.dispatchEvent(r("input")))}},function(e,t,n){"use strict";var r=n(6),o=n(5);t.a=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(t)?n.i(o.a)(r.a,t,i)(e,t,a,i):n.i(r.a)(e,t,a,i)}},function(e,t,n){"use strict";function r(e){e.component(s.a.name,s.a),e.directive("mask",i.a)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n.n(o),i=n(1),c=n(7),s=n.n(c);n.d(t,"TheMask",(function(){return s.a})),n.d(t,"mask",(function(){return i.a})),n.d(t,"tokens",(function(){return a.a})),n.d(t,"version",(function(){return u}));var u="0.11.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),a=n.n(o),i=n(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return a.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e;e=n.i(i.a)(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,t,n){"use strict";function r(e,t,n){return t=t.sort((function(e,t){return e.length-t.length})),function(r,o){for(var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<t.length;){var c=t[i];i++;var s=t[i];if(!(s&&e(r,s,!0,n).length>c.length))return e(r,c,a,n)}return""}}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];e=e||"",t=t||"";for(var o=0,a=0,i="";o<t.length&&a<e.length;){var c=t[o],s=r[c],u=e[a];s&&!s.escape?(s.pattern.test(u)&&(i+=s.transform?s.transform(u):u,o++),a++):(s&&s.escape&&(o++,c=t[o]),n&&(i+=c),u===c&&a++,o++)}for(var l="";o<t.length&&n;){c=t[o];if(r[c]){l="";break}l+=c,o++}return i+l}t.a=r},function(e,t,n){var r=n(8)(n(4),n(9),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var o,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,a=e.default);var c="function"==typeof a?a.options:a;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),n&&(c._scopeId=n),r){var s=c.computed||(c.computed={});Object.keys(r).forEach((function(e){var t=r[e];s[e]=function(){return t}}))}return{esModule:o,exports:a,options:c}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])}))},2483:(e,t,n)=>{"use strict";n.d(t,{p7:()=>nt,r5:()=>N});n(7658),n(541);var r=n(3396),o=n(4870);
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const a="undefined"!==typeof window;function i(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const c=Object.assign;function s(e,t){const n={};for(const r in t){const o=t[r];n[r]=l(o)?o.map(e):e(o)}return n}const u=()=>{},l=Array.isArray;const f=/\/$/,p=e=>e.replace(f,"");function h(e,t,n="/"){let r,o={},a="",i="";const c=t.indexOf("#");let s=t.indexOf("?");return c<s&&c>=0&&(s=-1),s>-1&&(r=t.slice(0,s),a=t.slice(s+1,c>-1?c:t.length),o=e(a)),c>-1&&(r=r||t.slice(0,c),i=t.slice(c,t.length)),r=k(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+i,path:r,query:o,hash:i}}function d(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function v(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&m(t.matched[r],n.matched[o])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function m(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return l(e)?b(e,t):l(t)?b(t,e):e===t}function b(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function k(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let a,i,c=n.length-1;for(a=0;a<r.length;a++)if(i=r[a],"."!==i){if(".."!==i)break;c>1&&c--}return n.slice(0,c).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var E,O;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(O||(O={}));function _(e){if(!e)if(a){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),p(e)}const x=/^[^#]+#/;function P(e,t){return e.replace(x,"#")+t}function S(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const j=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=S(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function A(e,t){const n=history.state?history.state.position-t:-1;return n+e}const L=new Map;function C(e,t){L.set(e,t)}function $(e){const t=L.get(e);return L.delete(e),t}let F=()=>location.protocol+"//"+location.host;function U(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),v(n,"")}const i=v(n,e);return i+r+o}function T(e,t,n,r){let o=[],a=[],i=null;const s=({state:a})=>{const c=U(e,location),s=n.value,u=t.value;let l=0;if(a){if(n.value=c,t.value=a,i&&i===s)return void(i=null);l=u?a.position-u.position:0}else r(c);o.forEach((e=>{e(n.value,s,{delta:l,type:E.pop,direction:l?l>0?O.forward:O.back:O.unknown})}))};function u(){i=n.value}function l(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t}function f(){const{history:e}=window;e.state&&e.replaceState(c({},e.state,{scroll:j()}),"")}function p(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:u,listen:l,destroy:p}}function q(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?j():null}}function I(e){const{history:t,location:n}=window,r={value:U(e,n)},o={value:t.state};function a(r,a,i){const c=e.indexOf("#"),s=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:F()+e+r;try{t[i?"replaceState":"pushState"](a,"",s),o.value=a}catch(u){console.error(u),n[i?"replace":"assign"](s)}}function i(e,n){const i=c({},t.state,q(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});a(e,i,!0),r.value=e}function s(e,n){const i=c({},o.value,t.state,{forward:e,scroll:j()});a(i.current,i,!0);const s=c({},q(r.value,e,null),{position:i.position+1},n);a(e,s,!1),r.value=e}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:s,replace:i}}function V(e){e=_(e);const t=I(e),n=T(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=c({location:"",base:e,go:r,createHref:P.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function N(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),V(e)}function B(e){return"string"===typeof e||e&&"object"===typeof e}function M(e){return"string"===typeof e||"symbol"===typeof e}const D={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},G=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function Q(e,t){return c(new Error,{type:e,[G]:!0},t)}function Z(e,t){return e instanceof Error&&G in e&&(null==t||!!(e.type&t))}const J="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},Y=/[.+*?^${}()[\]/\\]/g;function H(e,t){const n=c({},W,t),r=[];let o=n.start?"^":"";const a=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let t=0;t<c.length;t++){const r=c[t];let i=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(Y,"\\$&"),i+=40;else if(1===r.type){const{value:e,repeatable:n,optional:s,regexp:u}=r;a.push({name:e,repeatable:n,optional:s});const l=u||J;if(l!==J){i+=10;try{new RegExp(`(${l})`)}catch(f){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+f.message)}}let p=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(p=s&&c.length<2?`(?:/${p})`:"/"+p),s&&(p+="?"),o+=p,i+=20,s&&(i+=-8),n&&(i+=-20),".*"===l&&(i+=-50)}e.push(i)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function s(e){const t=e.match(i),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:i,optional:c}=e,s=a in t?t[a]:"";if(l(s)&&!i)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const u=l(s)?s.join("/"):s;if(!u){if(!c)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:i,score:r,keys:a,parse:s,stringify:u}}function K(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=K(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(ee(r))return 1;if(ee(o))return-1}return o.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let a;function i(){a&&o.push(a),a=[]}let c,s=0,u="",l="";function f(){u&&(0===n?a.push({type:0,value:u}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:l,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}while(s<e.length)if(c=e[s++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(u&&f(),i()):":"===c?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===c?n=2:ne.test(c)?p():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&s--);break;case 2:")"===c?"\\"==l[l.length-1]?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&s--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),o}function oe(e,t,n){const r=H(re(e.path),n);const o=c(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ae(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function a(e,n,r){const o=!r,s=ce(e);s.aliasOf=r&&r.record;const f=fe(t,e),p=[s];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)p.push(c({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let h,d;for(const t of p){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&r+c)}if(h=oe(t,n,f),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),o&&e.name&&!ue(h)&&i(e.name)),s.children){const e=s.children;for(let t=0;t<e.length;t++)a(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&l(h)}return d?()=>{i(d)}:u}function i(e){if(M(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function s(){return n}function l(e){let t=0;while(t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!pe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function f(e,t){let o,a,i,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw Q(1,{location:e});0,i=o.record.name,s=c(ie(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&ie(e.params,o.keys.map((e=>e.name)))),a=o.stringify(s)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(s=o.parse(a),i=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw Q(1,{location:e,currentLocation:t});i=o.record.name,s=c({},t.params,e.params),a=o.stringify(s)}const u=[];let l=o;while(l)u.unshift(l.record),l=l.parent;return{name:i,path:a,params:s,matched:u,meta:le(u)}}return t=fe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>a(e))),{addRoute:a,resolve:f,removeRoute:i,getRoutes:s,getRecordMatcher:o}}function ie(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ce(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:se(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function se(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>c(e,t.meta)),{})}function fe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function pe(e,t){return t.children.some((t=>t===e||pe(e,t)))}const he=/#/g,de=/&/g,ve=/\//g,ge=/=/g,me=/\?/g,ye=/\+/g,we=/%5B/g,be=/%5D/g,ke=/%5E/g,Ee=/%60/g,Oe=/%7B/g,_e=/%7C/g,xe=/%7D/g,Pe=/%20/g;function Se(e){return encodeURI(""+e).replace(_e,"|").replace(we,"[").replace(be,"]")}function je(e){return Se(e).replace(Oe,"{").replace(xe,"}").replace(ke,"^")}function Re(e){return Se(e).replace(ye,"%2B").replace(Pe,"+").replace(he,"%23").replace(de,"%26").replace(Ee,"`").replace(Oe,"{").replace(xe,"}").replace(ke,"^")}function Ae(e){return Re(e).replace(ge,"%3D")}function Le(e){return Se(e).replace(he,"%23").replace(me,"%3F")}function Ce(e){return null==e?"":Le(e).replace(ve,"%2F")}function $e(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Fe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(ye," "),n=e.indexOf("="),a=$e(n<0?e:e.slice(0,n)),i=n<0?null:$e(e.slice(n+1));if(a in t){let e=t[a];l(e)||(e=t[a]=[e]),e.push(i)}else t[a]=i}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=Ae(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=l(r)?r.map((e=>e&&Re(e))):[r&&Re(r)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Te(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const qe=Symbol(""),Ie=Symbol(""),Ve=Symbol(""),Ne=Symbol(""),Be=Symbol("");function Me(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function De(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((i,c)=>{const s=e=>{!1===e?c(Q(4,{from:n,to:t})):e instanceof Error?c(e):B(e)?c(Q(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"===typeof e&&a.push(e),i())},u=e.call(r&&r.instances[o],t,n,s);let l=Promise.resolve(u);e.length<3&&(l=l.then(s)),l.catch((e=>c(e)))}))}function Ge(e,t,n,r){const o=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(ze(c)){const i=c.__vccOpts||c,s=i[t];s&&o.push(De(s,n,r,a,e))}else{let s=c();0,o.push((()=>s.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=i(o)?o.default:o;a.components[e]=c;const s=c.__vccOpts||c,u=s[t];return u&&De(u,n,r,a,e)()}))))}}}return o}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Qe(e){const t=(0,r.f3)(Ve),n=(0,r.f3)(Ne),a=(0,r.Fl)((()=>t.resolve((0,o.SU)(e.to)))),i=(0,r.Fl)((()=>{const{matched:e}=a.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const i=o.findIndex(m.bind(null,r));if(i>-1)return i;const c=He(e[t-2]);return t>1&&He(r)===c&&o[o.length-1].path!==c?o.findIndex(m.bind(null,e[t-2])):i})),c=(0,r.Fl)((()=>i.value>-1&&Ye(n.params,a.value.params))),s=(0,r.Fl)((()=>i.value>-1&&i.value===n.matched.length-1&&y(n.params,a.value.params)));function l(n={}){return We(n)?t[(0,o.SU)(e.replace)?"replace":"push"]((0,o.SU)(e.to)).catch(u):Promise.resolve()}return{route:a,href:(0,r.Fl)((()=>a.value.href)),isActive:c,isExactActive:s,navigate:l}}const Ze=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qe,setup(e,{slots:t}){const n=(0,o.qj)(Qe(e)),{options:a}=(0,r.f3)(Ve),i=(0,r.Fl)((()=>({[Ke(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Ke(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),Je=Ze;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!l(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}function He(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ke=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=(0,r.f3)(Be),i=(0,r.Fl)((()=>e.route||a.value)),s=(0,r.f3)(Ie,0),u=(0,r.Fl)((()=>{let e=(0,o.SU)(s);const{matched:t}=i.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>i.value.matched[u.value]));(0,r.JJ)(Ie,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(qe,l),(0,r.JJ)(Be,i);const f=(0,o.iH)();return(0,r.YP)((()=>[f.value,l.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&m(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=i.value,a=e.name,s=l.value,u=s&&s.components[a];if(!u)return et(n.default,{Component:u,route:o});const p=s.props[a],h=p?!0===p?o.params:"function"===typeof p?p(o):p:null,d=e=>{e.component.isUnmounted&&(s.instances[a]=null)},v=(0,r.h)(u,c({},h,t,{onVnodeUnmounted:d,ref:f}));return et(n.default,{Component:v,route:o})||v}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Xe;function nt(e){const t=ae(e.routes,e),n=e.parseQuery||Fe,i=e.stringifyQuery||Ue,f=e.history;const p=Me(),v=Me(),m=Me(),y=(0,o.XI)(D);let w=D;a&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=s.bind(null,(e=>""+e)),k=s.bind(null,Ce),O=s.bind(null,$e);function _(e,n){let r,o;return M(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function x(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function P(){return t.getRoutes().map((e=>e.record))}function S(e){return!!t.getRecordMatcher(e)}function L(e,r){if(r=c({},r||y.value),"string"===typeof e){const o=h(n,e,r.path),a=t.resolve({path:o.path},r),i=f.createHref(o.fullPath);return c(o,a,{params:O(a.params),hash:$e(o.hash),redirectedFrom:void 0,href:i})}let o;if("path"in e)o=c({},e,{path:h(n,e.path,r.path).path});else{const t=c({},e.params);for(const e in t)null==t[e]&&delete t[e];o=c({},e,{params:k(t)}),r.params=k(r.params)}const a=t.resolve(o,r),s=e.hash||"";a.params=b(O(a.params));const u=d(i,c({},e,{hash:je(s),path:a.path})),l=f.createHref(u);return c({fullPath:u,hash:s,query:i===Ue?Te(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function F(e){return"string"===typeof e?h(n,e,y.value.path):c({},e)}function U(e,t){if(w!==e)return Q(8,{from:t,to:e})}function T(e){return V(e)}function q(e){return T(c(F(e),{replace:!0}))}function I(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=F(r):{path:r},r.params={}),c({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function V(e,t){const n=w=L(e),r=y.value,o=e.state,a=e.force,s=!0===e.replace,u=I(n);if(u)return V(c(F(u),{state:"object"===typeof u?c({},o,u.state):o,force:a,replace:s}),t||n);const l=n;let f;return l.redirectedFrom=t,!a&&g(i,r,n)&&(f=Q(16,{to:l,from:r}),re(r,r,!0,!1)),(f?Promise.resolve(f):G(l,r)).catch((e=>Z(e)?Z(e,2)?e:ne(e):ee(e,l,r))).then((e=>{if(e){if(Z(e,2))return V(c({replace:s},F(e.to),{state:"object"===typeof e.to?c({},o,e.to.state):o,force:a}),t||l)}else e=J(l,r,!0,s,o);return z(l,r,e),e}))}function N(e,t){const n=U(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e){const t=ce.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function G(e,t){let n;const[r,o,a]=rt(e,t);n=Ge(r.reverse(),"beforeRouteLeave",e,t);for(const c of r)c.leaveGuards.forEach((r=>{n.push(De(r,e,t))}));const i=N.bind(null,e,t);return n.push(i),ue(n).then((()=>{n=[];for(const r of p.list())n.push(De(r,e,t));return n.push(i),ue(n)})).then((()=>{n=Ge(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(De(r,e,t))}));return n.push(i),ue(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(l(r.beforeEnter))for(const o of r.beforeEnter)n.push(De(o,e,t));else n.push(De(r.beforeEnter,e,t));return n.push(i),ue(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ge(a,"beforeRouteEnter",e,t),n.push(i),ue(n)))).then((()=>{n=[];for(const r of v.list())n.push(De(r,e,t));return n.push(i),ue(n)})).catch((e=>Z(e,8)?e:Promise.reject(e)))}function z(e,t,n){m.list().forEach((r=>B((()=>r(e,t,n)))))}function J(e,t,n,r,o){const i=U(e,t);if(i)return i;const s=t===D,u=a?history.state:{};n&&(r||s?f.replace(e.fullPath,c({scroll:s&&u&&u.scroll},o)):f.push(e.fullPath,o)),y.value=e,re(e,t,n,s),ne()}let W;function Y(){W||(W=f.listen(((e,t,n)=>{if(!se.listening)return;const r=L(e),o=I(r);if(o)return void V(c(o,{replace:!0}),r).catch(u);w=r;const i=y.value;a&&C(A(i.fullPath,n.delta),j()),G(r,i).catch((e=>Z(e,12)?e:Z(e,2)?(V(e.to,r).then((e=>{Z(e,20)&&!n.delta&&n.type===E.pop&&f.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&f.go(-n.delta,!1),ee(e,r,i)))).then((e=>{e=e||J(r,i,!1),e&&(n.delta&&!Z(e,8)?f.go(-n.delta,!1):n.type===E.pop&&Z(e,20)&&f.go(-1,!1)),z(r,i,e)})).catch(u)})))}let H,K=Me(),X=Me();function ee(e,t,n){ne(e);const r=X.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function te(){return H&&y.value!==D?Promise.resolve():new Promise(((e,t)=>{K.add([e,t])}))}function ne(e){return H||(H=!e,Y(),K.list().forEach((([t,n])=>e?n(e):t())),K.reset()),e}function re(t,n,o,i){const{scrollBehavior:c}=e;if(!a||!c)return Promise.resolve();const s=!o&&$(A(t.fullPath,0))||(i||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>c(t,n,s))).then((e=>e&&R(e))).catch((e=>ee(e,t,n)))}const oe=e=>f.go(e);let ie;const ce=new Set,se={currentRoute:y,listening:!0,addRoute:_,removeRoute:x,hasRoute:S,getRoutes:P,resolve:L,options:e,push:T,replace:q,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:p.add,beforeResolve:v.add,afterEach:m.add,onError:X.add,isReady:te,install(e){const t=this;e.component("RouterLink",Je),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(y)}),a&&!ie&&y.value===D&&(ie=!0,T(f.location).catch((e=>{0})));const n={};for(const o in D)Object.defineProperty(n,o,{get:()=>y.value[o],enumerable:!0});e.provide(Ve,t),e.provide(Ne,(0,o.Um)(n)),e.provide(Be,y);const r=e.unmount;ce.add(e),e.unmount=function(){ce.delete(e),ce.size<1&&(w=D,W&&W(),W=null,y.value=D,ie=!1,H=!1),r()}}};function ue(e){return e.reduce(((e,t)=>e.then((()=>B(t)))),Promise.resolve())}return se}function rt(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let i=0;i<a;i++){const a=t.matched[i];a&&(e.matched.find((e=>m(e,a)))?r.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find((e=>m(e,c)))||o.push(c))}return[n,r,o]}}}]);