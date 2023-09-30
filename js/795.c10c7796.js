"use strict";(globalThis["webpackChunkNtrega"]=globalThis["webpackChunkNtrega"]||[]).push([[795],{5787:(e,t,r)=>{var a=r(7976),n=TypeError;e.exports=function(e,t){if(a(t,e))return e;throw n("Incorrect invocation")}},3678:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:(e,t,r)=>{var a=r(1702),n=Error,o=a("".replace),s=function(e){return String(n(e).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,c=i.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!n.prepareStackTrace)while(t--)e=o(e,i,"");return e}},9587:(e,t,r)=>{var a=r(614),n=r(111),o=r(7674);e.exports=function(e,t,r){var s,i;return o&&a(s=t.constructor)&&s!==r&&n(i=s.prototype)&&i!==r.prototype&&o(e,i),e}},6277:(e,t,r)=>{var a=r(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:a(e)}},2801:(e,t,r)=>{var a=r(2109),n=r(7854),o=r(5005),s=r(9114),i=r(3070).f,c=r(2597),h=r(5787),p=r(9587),d=r(6277),l=r(3678),f=r(1060),u=r(9781),m=r(1913),b="DOMException",g=o("Error"),E=o(b),w=function(){h(this,_);var e=arguments.length,t=d(e<1?void 0:arguments[0]),r=d(e<2?void 0:arguments[1],"Error"),a=new E(t,r),n=g(t);return n.name=b,i(a,"stack",s(1,f(n.stack,1))),p(a,this,w),a},_=w.prototype=E.prototype,D="stack"in g(b),v="stack"in new E(1,2),I=E&&u&&Object.getOwnPropertyDescriptor(n,b),R=!!I&&!(I.writable&&I.configurable),y=D&&!R&&!v;a({global:!0,constructor:!0,forced:m||y},{DOMException:y?w:E});var C=o(b),N=C.prototype;if(N.constructor!==C)for(var S in m||i(N,"constructor",s(1,C)),l)if(c(l,S)){var A=l[S],T=A.s;c(C,T)||i(C,T,s(6,A.c))}},1804:(e,t,r)=>{r.d(t,{Jn:()=>me,qX:()=>de,Xd:()=>pe,Mq:()=>ge,ZF:()=>be,KN:()=>Ee});r(7658);var a=r(7142),n=r(5168),o=r(223);r(2801);const s=(e,t)=>t.some((t=>e instanceof t));let i,c;function h(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,l=new WeakMap,f=new WeakMap,u=new WeakMap,m=new WeakMap;function b(e){const t=new Promise(((t,r)=>{const a=()=>{e.removeEventListener("success",n),e.removeEventListener("error",o)},n=()=>{t(v(e.result)),a()},o=()=>{r(e.error),a()};e.addEventListener("success",n),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),m.set(t,e),t}function g(e){if(l.has(e))return;const t=new Promise(((t,r)=>{const a=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",o),e.removeEventListener("abort",o)},n=()=>{t(),a()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",n),e.addEventListener("error",o),e.addEventListener("abort",o)}));l.set(e,t)}let E={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return v(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){E=e(E)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?p().includes(e)?function(...t){return e.apply(I(this),t),v(d.get(this))}:function(...t){return v(e.apply(I(this),t))}:function(t,...r){const a=e.call(I(this),t,...r);return f.set(a,t.sort?t.sort():[t]),v(a)}}function D(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&g(e),s(e,h())?new Proxy(e,E):e)}function v(e){if(e instanceof IDBRequest)return b(e);if(u.has(e))return u.get(e);const t=D(e);return t!==e&&(u.set(e,t),m.set(t,e)),t}const I=e=>m.get(e);function R(e,t,{blocked:r,upgrade:a,blocking:n,terminated:o}={}){const s=indexedDB.open(e,t),i=v(s);return a&&s.addEventListener("upgradeneeded",(e=>{a(v(s.result),e.oldVersion,e.newVersion,v(s.transaction),e)})),r&&s.addEventListener("blocked",(e=>r(e.oldVersion,e.newVersion,e))),i.then((e=>{o&&e.addEventListener("close",(()=>o())),n&&e.addEventListener("versionchange",(e=>n(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),i}const y=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],N=new Map;function S(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(N.get(t))return N.get(t);const r=t.replace(/FromIndex$/,""),a=t!==r,n=C.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!n&&!y.includes(r))return;const o=async function(e,...t){const o=this.transaction(e,n?"readwrite":"readonly");let s=o.store;return a&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),n&&o.done]))[0]};return N.set(t,o),o}w((e=>({...e,get:(t,r,a)=>S(t,r)||e.get(t,r,a),has:(t,r)=>!!S(t,r)||e.has(t,r)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(T(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function T(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",k="0.9.18",L=new n.Yd("@firebase/app"),M="@firebase/app-compat",B="@firebase/analytics-compat",x="@firebase/analytics",P="@firebase/app-check-compat",$="@firebase/app-check",j="@firebase/auth",H="@firebase/auth-compat",U="@firebase/database",V="@firebase/database-compat",F="@firebase/functions",W="@firebase/functions-compat",Z="@firebase/installations",K="@firebase/installations-compat",Y="@firebase/messaging",X="@firebase/messaging-compat",q="@firebase/performance",z="@firebase/performance-compat",J="@firebase/remote-config",Q="@firebase/remote-config-compat",G="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",re="@firebase/firestore-compat",ae="firebase",ne="10.3.1",oe="[DEFAULT]",se={[O]:"fire-core",[M]:"fire-core-compat",[x]:"fire-analytics",[B]:"fire-analytics-compat",[$]:"fire-app-check",[P]:"fire-app-check-compat",[j]:"fire-auth",[H]:"fire-auth-compat",[U]:"fire-rtdb",[V]:"fire-rtdb-compat",[F]:"fire-fn",[W]:"fire-fn-compat",[Z]:"fire-iid",[K]:"fire-iid-compat",[Y]:"fire-fcm",[X]:"fire-fcm-compat",[q]:"fire-perf",[z]:"fire-perf-compat",[J]:"fire-rc",[Q]:"fire-rc-compat",[G]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[re]:"fire-fst-compat","fire-js":"fire-js",[ae]:"fire-js-all"},ie=new Map,ce=new Map;function he(e,t){try{e.container.addComponent(t)}catch(r){L.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function pe(e){const t=e.name;if(ce.has(t))return L.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const r of ie.values())he(r,e);return!0}function de(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const le={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new o.LL("app","Firebase",le);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new a.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ne;function be(e,t={}){let r=e;if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!==typeof s||!s)throw fe.create("bad-app-name",{appName:String(s)});if(r||(r=(0,o.aH)()),!r)throw fe.create("no-options");const i=ie.get(s);if(i){if((0,o.vZ)(r,i.options)&&(0,o.vZ)(n,i.config))return i;throw fe.create("duplicate-app",{appName:s})}const c=new a.H0(s);for(const a of ce.values())c.addComponent(a);const h=new ue(r,n,c);return ie.set(s,h),h}function ge(e=oe){const t=ie.get(e);if(!t&&e===oe&&(0,o.aH)())return be();if(!t)throw fe.create("no-app",{appName:e});return t}function Ee(e,t,r){var n;let o=null!==(n=se[e])&&void 0!==n?n:e;r&&(o+=`-${r}`);const s=o.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void L.warn(e.join(" "))}pe(new a.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we="firebase-heartbeat-database",_e=1,De="firebase-heartbeat-store";let ve=null;function Ie(){return ve||(ve=R(we,_e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(De)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),ve}async function Re(e){try{const t=await Ie(),r=await t.transaction(De).objectStore(De).get(Ce(e));return r}catch(t){if(t instanceof o.ZR)L.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});L.warn(e.message)}}}async function ye(e,t){try{const r=await Ie(),a=r.transaction(De,"readwrite"),n=a.objectStore(De);await n.put(t,Ce(e)),await a.done}catch(r){if(r instanceof o.ZR)L.warn(r.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===r||void 0===r?void 0:r.message});L.warn(e.message)}}}function Ce(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=1024,Se=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ke(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=Te();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),r=Date.now();return r-t<=Se})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Te(),{heartbeatsToSend:t,unsentEntries:r}=Oe(this._heartbeatsCache.heartbeats),a=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Te(){const e=new Date;return e.toISOString().substring(0,10)}function Oe(e,t=Ne){const r=[];let a=e.slice();for(const n of e){const e=r.find((e=>e.agent===n.agent));if(e){if(e.dates.push(n.date),Le(r)>t){e.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),Le(r)>t){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class ke{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Re(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return ye(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return ye(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function Le(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){pe(new a.wA("platform-logger",(e=>new A(e)),"PRIVATE")),pe(new a.wA("heartbeat",(e=>new Ae(e)),"PRIVATE")),Ee(O,k,e),Ee(O,k,"esm2017"),Ee("fire-js","")}Me("")},7795:(e,t,r)=>{r.d(t,{ZF:()=>a.ZF});var a=r(1804),n="firebase",o="10.3.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a.KN)(n,o,"app")}}]);