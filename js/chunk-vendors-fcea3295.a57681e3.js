"use strict";(globalThis["webpackChunkNtrega"]=globalThis["webpackChunkNtrega"]||[]).push([[818],{1804:(e,t,a)=>{a.d(t,{Jn:()=>be,qX:()=>de,Xd:()=>pe,Mq:()=>me,ZF:()=>ge,KN:()=>we});a(7658);var r=a(7142),n=a(5168),s=a(223);a(2801);const i=(e,t)=>t.some((t=>e instanceof t));let o,c;function h(){return o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,l=new WeakMap,u=new WeakMap,b=new WeakMap;function g(e){const t=new Promise(((t,a)=>{const r=()=>{e.removeEventListener("success",n),e.removeEventListener("error",s)},n=()=>{t(_(e.result)),r()},s=()=>{a(e.error),r()};e.addEventListener("success",n),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),b.set(t,e),t}function m(e){if(f.has(e))return;const t=new Promise(((t,a)=>{const r=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",s),e.removeEventListener("abort",s)},n=()=>{t(),r()},s=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",n),e.addEventListener("error",s),e.addEventListener("abort",s)}));f.set(e,t)}let w={get(e,t,a){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return _(e[t])},set(e,t,a){return e[t]=a,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){w=e(w)}function D(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?p().includes(e)?function(...t){return e.apply(I(this),t),_(d.get(this))}:function(...t){return _(e.apply(I(this),t))}:function(t,...a){const r=e.call(I(this),t,...a);return l.set(r,t.sort?t.sort():[t]),_(r)}}function y(e){return"function"===typeof e?D(e):(e instanceof IDBTransaction&&m(e),i(e,h())?new Proxy(e,w):e)}function _(e){if(e instanceof IDBRequest)return g(e);if(u.has(e))return u.get(e);const t=y(e);return t!==e&&(u.set(e,t),b.set(t,e)),t}const I=e=>b.get(e);function C(e,t,{blocked:a,upgrade:r,blocking:n,terminated:s}={}){const i=indexedDB.open(e,t),o=_(i);return r&&i.addEventListener("upgradeneeded",(e=>{r(_(i.result),e.oldVersion,e.newVersion,_(i.transaction),e)})),a&&i.addEventListener("blocked",(e=>a(e.oldVersion,e.newVersion,e))),o.then((e=>{s&&e.addEventListener("close",(()=>s())),n&&e.addEventListener("versionchange",(e=>n(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}const E=["get","getKey","getAll","getAllKeys","count"],B=["put","add","delete","clear"],S=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const a=t.replace(/FromIndex$/,""),r=t!==a,n=B.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!n&&!E.includes(a))return;const s=async function(e,...t){const s=this.transaction(e,n?"readwrite":"readonly");let i=s.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[a](...t),n&&s.done]))[0]};return S.set(t,s),s}v((e=>({...e,get:(t,a,r)=>k(t,a)||e.get(t,a,r),has:(t,a)=>!!k(t,a)||e.has(t,a)})));
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
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if($(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function $(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",j="0.9.18",L=new n.Yd("@firebase/app"),x="@firebase/app-compat",A="@firebase/analytics-compat",M="@firebase/analytics",O="@firebase/app-check-compat",H="@firebase/app-check",T="@firebase/auth",F="@firebase/auth-compat",V="@firebase/database",R="@firebase/database-compat",U="@firebase/functions",Z="@firebase/functions-compat",K="@firebase/installations",W="@firebase/installations-compat",q="@firebase/messaging",J="@firebase/messaging-compat",X="@firebase/performance",z="@firebase/performance-compat",Y="@firebase/remote-config",G="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ae="@firebase/firestore-compat",re="firebase",ne="10.3.1",se="[DEFAULT]",ie={[P]:"fire-core",[x]:"fire-core-compat",[M]:"fire-analytics",[A]:"fire-analytics-compat",[H]:"fire-app-check",[O]:"fire-app-check-compat",[T]:"fire-auth",[F]:"fire-auth-compat",[V]:"fire-rtdb",[R]:"fire-rtdb-compat",[U]:"fire-fn",[Z]:"fire-fn-compat",[K]:"fire-iid",[W]:"fire-iid-compat",[q]:"fire-fcm",[J]:"fire-fcm-compat",[X]:"fire-perf",[z]:"fire-perf-compat",[Y]:"fire-rc",[G]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ae]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},oe=new Map,ce=new Map;function he(e,t){try{e.container.addComponent(t)}catch(a){L.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}function pe(e){const t=e.name;if(ce.has(t))return L.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const a of oe.values())he(a,e);return!0}function de(e,t){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(t)}
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
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},le=new s.LL("app","Firebase",fe);
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
class ue{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}
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
 */const be=ne;function ge(e,t={}){let a=e;if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw le.create("bad-app-name",{appName:String(i)});if(a||(a=(0,s.aH)()),!a)throw le.create("no-options");const o=oe.get(i);if(o){if((0,s.vZ)(a,o.options)&&(0,s.vZ)(n,o.config))return o;throw le.create("duplicate-app",{appName:i})}const c=new r.H0(i);for(const r of ce.values())c.addComponent(r);const h=new ue(a,n,c);return oe.set(i,h),h}function me(e=se){const t=oe.get(e);if(!t&&e===se&&(0,s.aH)())return ge();if(!t)throw le.create("no-app",{appName:e});return t}function we(e,t,a){var n;let s=null!==(n=ie[e])&&void 0!==n?n:e;a&&(s+=`-${a}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void L.warn(e.join(" "))}pe(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
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
const ve="firebase-heartbeat-database",De=1,ye="firebase-heartbeat-store";let _e=null;function Ie(){return _e||(_e=C(ve,De,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ye)}}}).catch((e=>{throw le.create("idb-open",{originalErrorMessage:e.message})}))),_e}async function Ce(e){try{const t=await Ie(),a=await t.transaction(ye).objectStore(ye).get(Be(e));return a}catch(t){if(t instanceof s.ZR)L.warn(t.message);else{const e=le.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});L.warn(e.message)}}}async function Ee(e,t){try{const a=await Ie(),r=a.transaction(ye,"readwrite"),n=r.objectStore(ye);await n.put(t,Be(e)),await r.done}catch(a){if(a instanceof s.ZR)L.warn(a.message);else{const e=le.create("idb-set",{originalErrorMessage:null===a||void 0===a?void 0:a.message});L.warn(e.message)}}}function Be(e){return`${e.name}!${e.options.appId}`}
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
 */const Se=1024,ke=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new je(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),a=$e();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==a&&!this._heartbeatsCache.heartbeats.some((e=>e.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),a=Date.now();return a-t<=ke})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=$e(),{heartbeatsToSend:t,unsentEntries:a}=Pe(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function $e(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=Se){const a=[];let r=e.slice();for(const n of e){const e=a.find((e=>e.agent===n.agent));if(e){if(e.dates.push(n.date),Le(a)>t){e.dates.pop();break}}else if(a.push({agent:n.agent,dates:[n.date]}),Le(a)>t){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class je{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const a=await this._canUseIndexedDBPromise;if(a){const a=await this.read();return Ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const a=await this._canUseIndexedDBPromise;if(a){const a=await this.read();return Ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}}}function Le(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function xe(e){pe(new r.wA("platform-logger",(e=>new N(e)),"PRIVATE")),pe(new r.wA("heartbeat",(e=>new Ne(e)),"PRIVATE")),we(P,j,e),we(P,j,"esm2017"),we("fire-js","")}xe("")},7795:(e,t,a)=>{a.d(t,{ZF:()=>r.ZF});var r=a(1804),n="firebase",s="10.3.1";
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
(0,r.KN)(n,s,"app")}}]);