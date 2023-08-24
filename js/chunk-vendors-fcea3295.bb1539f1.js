"use strict";(globalThis["webpackChunkNtrega"]=globalThis["webpackChunkNtrega"]||[]).push([[818],{1804:(e,t,a)=>{a.d(t,{Jn:()=>le,qX:()=>pe,Xd:()=>he,KN:()=>ue});a(7658);var r=a(7142),n=a(5168),s=a(223);a(2801);const i=(e,t)=>t.some((t=>e instanceof t));let o,c;function h(){return o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,d=new WeakMap,l=new WeakMap,u=new WeakMap,b=new WeakMap;function g(e){const t=new Promise(((t,a)=>{const r=()=>{e.removeEventListener("success",n),e.removeEventListener("error",s)},n=()=>{t(y(e.result)),r()},s=()=>{a(e.error),r()};e.addEventListener("success",n),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&f.set(t,e)})).catch((()=>{})),b.set(t,e),t}function m(e){if(d.has(e))return;const t=new Promise(((t,a)=>{const r=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",s),e.removeEventListener("abort",s)},n=()=>{t(),r()},s=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",n),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let w={get(e,t,a){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return y(e[t])},set(e,t,a){return e[t]=a,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){w=e(w)}function D(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?p().includes(e)?function(...t){return e.apply(E(this),t),y(f.get(this))}:function(...t){return y(e.apply(E(this),t))}:function(t,...a){const r=e.call(E(this),t,...a);return l.set(r,t.sort?t.sort():[t]),y(r)}}function I(e){return"function"===typeof e?D(e):(e instanceof IDBTransaction&&m(e),i(e,h())?new Proxy(e,w):e)}function y(e){if(e instanceof IDBRequest)return g(e);if(u.has(e))return u.get(e);const t=I(e);return t!==e&&(u.set(e,t),b.set(t,e)),t}const E=e=>b.get(e);function C(e,t,{blocked:a,upgrade:r,blocking:n,terminated:s}={}){const i=indexedDB.open(e,t),o=y(i);return r&&i.addEventListener("upgradeneeded",(e=>{r(y(i.result),e.oldVersion,e.newVersion,y(i.transaction),e)})),a&&i.addEventListener("blocked",(e=>a(e.oldVersion,e.newVersion,e))),o.then((e=>{s&&e.addEventListener("close",(()=>s())),n&&e.addEventListener("versionchange",(e=>n(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}const _=["get","getKey","getAll","getAllKeys","count"],B=["put","add","delete","clear"],S=new Map;function $(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const a=t.replace(/FromIndex$/,""),r=t!==a,n=B.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!n&&!_.includes(a))return;const s=async function(e,...t){const s=this.transaction(e,n?"readwrite":"readonly");let i=s.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[a](...t),n&&s.done]))[0]};return S.set(t,s),s}v((e=>({...e,get:(t,a,r)=>$(t,a)||e.get(t,a,r),has:(t,a)=>!!$(t,a)||e.has(t,a)})));
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
class k{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(P(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function P(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const L="@firebase/app",N="0.9.16",x=new n.Yd("@firebase/app"),j="@firebase/app-compat",A="@firebase/analytics-compat",M="@firebase/analytics",O="@firebase/app-check-compat",H="@firebase/app-check",T="@firebase/auth",V="@firebase/auth-compat",F="@firebase/database",R="@firebase/database-compat",U="@firebase/functions",W="@firebase/functions-compat",K="@firebase/installations",J="@firebase/installations-compat",q="@firebase/messaging",X="@firebase/messaging-compat",Z="@firebase/performance",z="@firebase/performance-compat",Y="@firebase/remote-config",G="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ae="@firebase/firestore-compat",re="firebase",ne="10.2.0",se={[L]:"fire-core",[j]:"fire-core-compat",[M]:"fire-analytics",[A]:"fire-analytics-compat",[H]:"fire-app-check",[O]:"fire-app-check-compat",[T]:"fire-auth",[V]:"fire-auth-compat",[F]:"fire-rtdb",[R]:"fire-rtdb-compat",[U]:"fire-fn",[W]:"fire-fn-compat",[K]:"fire-iid",[J]:"fire-iid-compat",[q]:"fire-fcm",[X]:"fire-fcm-compat",[Z]:"fire-perf",[z]:"fire-perf-compat",[Y]:"fire-rc",[G]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ae]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ie=new Map,oe=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(a){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}function he(e){const t=e.name;if(oe.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;oe.set(t,e);for(const a of ie.values())ce(a,e);return!0}function pe(e,t){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(t)}
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
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},de=new s.LL("app","Firebase",fe);
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
const le=ne;function ue(e,t,a){var n;let s=null!==(n=se[e])&&void 0!==n?n:e;a&&(s+=`-${a}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
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
const be="firebase-heartbeat-database",ge=1,me="firebase-heartbeat-store";let we=null;function ve(){return we||(we=C(be,ge,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(me)}}}).catch((e=>{throw de.create("idb-open",{originalErrorMessage:e.message})}))),we}async function De(e){try{const t=await ve(),a=await t.transaction(me).objectStore(me).get(ye(e));return a}catch(t){if(t instanceof s.ZR)x.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});x.warn(e.message)}}}async function Ie(e,t){try{const a=await ve(),r=a.transaction(me,"readwrite"),n=r.objectStore(me);await n.put(t,ye(e)),await r.done}catch(a){if(a instanceof s.ZR)x.warn(a.message);else{const e=de.create("idb-set",{originalErrorMessage:null===a||void 0===a?void 0:a.message});x.warn(e.message)}}}function ye(e){return`${e.name}!${e.options.appId}`}
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
 */const Ee=1024,Ce=2592e6;class _e{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $e(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),a=Be();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==a&&!this._heartbeatsCache.heartbeats.some((e=>e.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),a=Date.now();return a-t<=Ce})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Be(),{heartbeatsToSend:t,unsentEntries:a}=Se(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Be(){const e=new Date;return e.toISOString().substring(0,10)}function Se(e,t=Ee){const a=[];let r=e.slice();for(const n of e){const e=a.find((e=>e.agent===n.agent));if(e){if(e.dates.push(n.date),ke(a)>t){e.dates.pop();break}}else if(a.push({agent:n.agent,dates:[n.date]}),ke(a)>t){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class $e{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await De(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const a=await this._canUseIndexedDBPromise;if(a){const a=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const a=await this._canUseIndexedDBPromise;if(a){const a=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}}}function ke(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function Pe(e){he(new r.wA("platform-logger",(e=>new k(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new _e(e)),"PRIVATE")),ue(L,N,e),ue(L,N,"esm2017"),ue("fire-js","")}Pe("")}}]);