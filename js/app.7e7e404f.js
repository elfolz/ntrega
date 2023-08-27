(()=>{var e={8776:(e,t,a)=>{"use strict";function o(e,t,a){return e.map((e=>(e.distance=s(t,a,e.coords.latitude,e.coords.longitude),e))).sort(((e,t)=>e.distance<t.distance?-1:e.distance>t.distance?1:0))}function i(e){return e.sort(((e,t)=>e.nf<t.nf?-1:e.nf>t.nf?1:0))}function s(e,t,a,o){let i=Math.PI*e/180,s=Math.PI*a/180,n=t-o,r=Math.PI*n/180,l=Math.sin(i)*Math.sin(s)+Math.cos(i)*Math.cos(s)*Math.cos(r);return l=Math.acos(l),l=180*l/Math.PI,l=60*l*1.1515,1.609344*l}function n(e){return e>=1?`${Math.trunc(e)}km`:`${Math.trunc(100*e)}m`}a.d(t,{cU:()=>o,kF:()=>n,z9:()=>i})},4328:(e,t,a)=>{"use strict";var o=a(9242),i=a(990),s=a(9414),n=a.n(s),r=a(3396),l=a(7139);function c(e,t,a,o,i,s){const n=(0,r.up)("v-icon"),c=(0,r.up)("v-btn"),d=(0,r.up)("v-snackbar"),u=(0,r.up)("banner-install-pwa"),p=(0,r.up)("banner-cookies-warning"),h=(0,r.up)("home"),m=(0,r.up)("router-view"),f=(0,r.up)("v-bottom-sheet"),g=(0,r.up)("v-app");return(0,r.wg)(),(0,r.j4)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{modelValue:s.updateAvailable,"onUpdate:modelValue":t[0]||(t[0]=e=>s.updateAvailable=e),location:"top","close-delay":"60000",color:"primary",onClick:t[1]||(t[1]=e=>s.updateApp())},{actions:(0,r.w5)((()=>[(0,r.Wm)(c,{text:"",icon:""},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{icon:"cached"})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Uk)(" Atualização disponível ")])),_:1},8,["modelValue"]),(0,r.Wm)(d,{modelValue:s.alert,"onUpdate:modelValue":t[3]||(t[3]=e=>s.alert=e),"close-delay":"10000",color:s.alertData.color||null,class:(0,l.C_)([{"theme--light":"warning"==s.alertData.color},"bottom"])},{actions:(0,r.w5)((()=>[(0,r.Wm)(c,{icon:"",onClick:t[2]||(t[2]=e=>s.alert=!1)},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{icon:"clear"})])),_:1})])),default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(s.alertData.text)+" ",1)])),_:1},8,["modelValue","color","class"]),(0,r.Wm)(u),(0,r.Wm)(p),(0,r.Wm)(h),(0,r.Wm)(f,{modelValue:i.page,"onUpdate:modelValue":t[4]||(t[4]=e=>i.page=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(m)])),_:1},8,["modelValue"])])),_:1})}a(7658);function d(e,t,a,o,i,s){const n=(0,r.up)("v-btn"),l=(0,r.up)("v-icon"),c=(0,r.up)("v-list-item-title"),d=(0,r.up)("v-list-item"),u=(0,r.up)("v-list"),p=(0,r.up)("v-navigation-drawer"),h=(0,r.up)("nf-add"),m=(0,r.up)("v-dialog"),f=(0,r.up)("nf-deliver"),g=(0,r.up)("return-place");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r.Wm)(n,{icon:"menu",onClick:t[0]||(t[0]=e=>this.drawer=!this.drawer),class:"fluent"}),(0,r.Wm)(n,{icon:"gps_fixed",onClick:t[1]||(t[1]=e=>s.centerMap()),class:"fluent"})]),(0,r.Wm)(p,{modelValue:i.drawer,"onUpdate:modelValue":t[6]||(t[6]=e=>i.drawer=e),temporary:""},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"transparent"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{onClick:t[2]||(t[2]=t=>{i.drawer=!1,e.$router.push("/nf/list")})},{prepend:(0,r.w5)((()=>[(0,r.Wm)(l,{icon:"receipt_long"})])),default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Ver NFs do dia")])),_:1})])),_:1}),(0,r.Wm)(d,{onClick:t[3]||(t[3]=e=>{i.drawer=!1,i.dialogNFAdd=!0})},{prepend:(0,r.w5)((()=>[(0,r.Wm)(l,{icon:"add"})])),default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Adicionar NF")])),_:1})])),_:1}),(0,r.Wm)(d,{onClick:t[4]||(t[4]=e=>{i.drawer=!1,i.dialogReturnPlace=!0})},{prepend:(0,r.w5)((()=>[(0,r.Wm)(l,{icon:"home"})])),default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Definir local de retorno")])),_:1})])),_:1}),(0,r.Wm)(d,{onClick:t[5]||(t[5]=e=>{i.drawer=!1,s.exportData()})},{prepend:(0,r.w5)((()=>[(0,r.Wm)(l,{icon:"file_download"})])),default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Exportar para Excel")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,r.Wm)(m,{modelValue:i.dialogNFAdd,"onUpdate:modelValue":t[8]||(t[8]=e=>i.dialogNFAdd=e),persistent:""},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{onClose:t[7]||(t[7]=e=>i.dialogNFAdd=!1)})])),_:1},8,["modelValue"]),(0,r.Wm)(m,{modelValue:i.dialogNFDeliver,"onUpdate:modelValue":t[10]||(t[10]=e=>i.dialogNFDeliver=e),persistent:""},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{ref:"nfDeliver",onClose:t[9]||(t[9]=e=>i.dialogNFDeliver=!1),onNfStatusUpdated:s.nfStatusUpdated},null,8,["onNfStatusUpdated"])])),_:1},8,["modelValue"]),(0,r.Wm)(m,{modelValue:i.dialogReturnPlace,"onUpdate:modelValue":t[12]||(t[12]=e=>i.dialogReturnPlace=e),persistent:""},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{ref:"returnPlace",onClose:t[11]||(t[11]=e=>i.dialogReturnPlace=!1)},null,512)])),_:1},8,["modelValue"]),(0,r._)("footer",null,[(0,r.Wm)(n,{color:"primary",onClick:t[13]||(t[13]=e=>s.startDelivery())},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{icon:"near_me"}),(0,r.Uk)(" Iniciar percurso")])),_:1})])],64)}var u=a(8776);const p=e=>e.packages.toArray().then((e=>{if(!e?.length)return null;let t="NF,Data,Endereço,Status\n";return e.sort(((e,t)=>e.date>t.date?-1:e.date<t.date?1:0)).forEach((e=>{const a=`${e.address} N° ${e.number||"S/N"}; ${e.district}; ${e.city} ${e.state}`,o=e.delivered?"Entregue":0==e.delivered?"Destinatário ausente":"Pendente de entrega";t+=`${e.nf},${new Date(e.date).toLocaleDateString()},${a},${o}\n`})),t}));var h;const m=navigator.userAgent.toLowerCase(),f=navigator.standalone||matchMedia("(display-mode: standalone)").matches;/windows/i.test(m)?h="windows":/macintosh/i.test(m)?h="mac":/android/i.test(m)?h="android":/iphone|ipad|ipod/i.test(m)&&(h="ios");const g={name:h,standalone:f,isMobile:"android"==h||"ios"==h},v={key:0},w={key:1};function b(e,t,a,o,i,s){const n=(0,r.up)("v-card-title"),c=(0,r.up)("v-text-field"),d=(0,r.up)("v-btn"),u=(0,r.up)("v-form"),p=(0,r.up)("v-skeleton-loader"),h=(0,r.up)("v-card-text"),m=(0,r.up)("v-icon"),f=(0,r.up)("v-card-actions"),g=(0,r.up)("v-card"),b=(0,r.Q2)("mask");return(0,r.wg)(),(0,r.j4)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" Adicionar nova NF ")])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{ref:"form"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r.Wm)(c,{modelValue:i.postalCode,"onUpdate:modelValue":t[0]||(t[0]=e=>i.postalCode=e),label:"CEP","hide-details":"",loading:i.loading,rules:i.postalCodeRules,type:"tel",autocomplete:"off"},null,8,["modelValue","loading","rules"]),[[b,"#####-###"]]),(0,r.wy)((0,r.Wm)(c,{modelValue:i.number,"onUpdate:modelValue":t[1]||(t[1]=e=>i.number=e),label:"N°","hide-details":"",type:"tel",autocomplete:"off"},null,8,["modelValue"]),[[b,"######"]]),(0,r.wy)((0,r.Wm)(c,{modelValue:i.nf,"onUpdate:modelValue":t[2]||(t[2]=e=>i.nf=e),label:"NF","hide-details":"",rules:i.nfRules,type:"tel",autocomplete:"off"},null,8,["modelValue","rules"]),[[b,"#########"]]),(0,r.Wm)(d,{variant:"text",icon:"search",onClick:t[3]||(t[3]=e=>s.getAddress()),loading:i.loading},null,8,["loading"])])),_:1},512),(0,r._)("section",null,[i.loading?((0,r.wg)(),(0,r.j4)(p,{key:0,type:"list-item-two-line"})):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[i.address?((0,r.wg)(),(0,r.iD)("p",v,(0,l.zw)(i.address)+", "+(0,l.zw)(i.number||"S/N"),1)):(0,r.kq)("",!0),i.district?((0,r.wg)(),(0,r.iD)("p",w,(0,l.zw)(i.district)+" "+(0,l.zw)(i.city)+" - "+(0,l.zw)(i.state),1)):(0,r.kq)("",!0)],64))])])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{variant:"elevated",color:"primary",onClick:t[4]||(t[4]=e=>s.save()),disabled:!i.enableSave},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{icon:"add"}),(0,r.Uk)(" Adicionar")])),_:1},8,["disabled"]),(0,r.Wm)(d,{variant:"text",onClick:t[5]||(t[5]=t=>e.$emit("close"))},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{icon:"clear"}),(0,r.Uk)(" Fechar")])),_:1})])),_:1})])),_:1})}const _={name:"nf-add",emits:["close"],computed:{refreshMap:{get(){return this.$store.state.refreshMap},set(e){this.$store.commit("setRefreshMap",e)}}},data(){return{loading:!1,enableSave:!1,postalCode:null,nf:null,price:null,number:null,address:null,district:null,city:null,state:null,coords:{latitude:null,longitude:null},nfRules:[e=>!!e||"NF inválida"],postalCodeRules:[e=>e&&9==e.length||"CEP inválido"],priceRules:[e=>!e||/\d+,\d{2}/.test(e)||"Valor inválido"]}},methods:{getAddress(){this.postalCode&&(this.address=null,this.district=null,this.city=null,this.state=null,this.coords={latitude:null,longitude:null},this.loading=!0,this.enableSave=!1,fetch(`https://viacep.com.br/ws/${this.postalCode}/json`).then((e=>{if(200!=e.status)throw null;return e.json()})).then((e=>{if(e?.erro)throw null;return this.address=e.logradouro,this.district=e.bairro,this.city=e.localidade,this.state=e.uf,this.getCoords(`${this.number} ${e.logradouro}, ${e.bairro} ${e.uf} ${e.cep}`)})).then((()=>{this.enableSave=!0})).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao localizar esse CEP",color:"error"})})).finally((()=>{this.loading=!1})))},getCoords(e){return fetch(`https://dev.virtualearth.net/REST/v1/Locations?q=${e}&key=AiSONtXZon4zZYm6E7NlrPDVTBY0plMXn_IU5nHtjbKgQCo2giqviot_Q5XuBsXa`).then((e=>{if(200!=e.status)throw null;return e.json()})).then((e=>{const t=e.resourceSets[0]?.resources[0]?.point?.coordinates;if(!t)throw"Failed to get coordinates for the given address.";this.coords.latitude=t[0],this.coords.longitude=t[1]}))},async save(){const{valid:e}=await this.$refs.form.validate();if(!e||!this.nf||!this.postalCode||!this.address||!this.city||!this.state||!this.coords.latitude||!this.coords.longitude)return this.$store.dispatch("openAlert",{text:"Há campos faltantes",color:"error"});const t={date:(new Date).setHours(0,0,0,0).valueOf(),nf:this.nf,address:this.address,district:this.district,city:this.city,state:this.state,coords:JSON.parse(JSON.stringify(this.coords))};this.number&&(t.number=this.number),this.price&&(t.price=parseFloat(this.price.replace(",","."))),this.$idb.packages.add(t).then((()=>{this.refreshMap=!0,this.$store.dispatch("openAlert",{text:"NF adicionada com sucesso",color:"success"}),this.$emit("close")})).catch((()=>{this.$store.dispatch("openAlert",{text:"Essa NF já foi adicionada",color:"warning"})}))}}};var k=a(89);const y=(0,k.Z)(_,[["render",b],["__scopeId","data-v-255b8d90"]]),P=y;var A=a(383);const $={key:0},C={key:1};function N(e,t,a,o,i,s){const n=(0,r.up)("v-card-title"),c=(0,r.up)("v-text-field"),d=(0,r.up)("v-btn"),u=(0,r.up)("v-form"),p=(0,r.up)("v-skeleton-loader"),h=(0,r.up)("v-card-text"),m=(0,r.up)("v-icon"),f=(0,r.up)("v-card-actions"),g=(0,r.up)("v-card"),v=(0,r.Q2)("mask");return(0,r.wg)(),(0,r.j4)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" Definir local de retorno ")])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{ref:"form"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r.Wm)(c,{modelValue:i.place.postalCode,"onUpdate:modelValue":t[0]||(t[0]=e=>i.place.postalCode=e),label:"CEP","hide-details":"",loading:i.loading,rules:i.postalCodeRules,type:"tel",autocomplete:"off"},null,8,["modelValue","loading","rules"]),[[v,"#####-###"]]),(0,r.wy)((0,r.Wm)(c,{modelValue:i.place.number,"onUpdate:modelValue":t[1]||(t[1]=e=>i.place.number=e),label:"N°","hide-details":"",type:"tel",autocomplete:"off"},null,8,["modelValue"]),[[v,"######"]]),(0,r.Wm)(d,{variant:"text",icon:"search",onClick:t[2]||(t[2]=e=>s.getAddress()),loading:i.loading},null,8,["loading"])])),_:1},512),(0,r._)("section",null,[i.loading?((0,r.wg)(),(0,r.j4)(p,{key:0,type:"list-item-two-line"})):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[i.place.address?((0,r.wg)(),(0,r.iD)("p",$,(0,l.zw)(i.place.address)+", "+(0,l.zw)(i.place.number||"S/N"),1)):(0,r.kq)("",!0),i.place.district?((0,r.wg)(),(0,r.iD)("p",C,(0,l.zw)(i.place.district)+" "+(0,l.zw)(i.place.city)+" - "+(0,l.zw)(i.place.state),1)):(0,r.kq)("",!0)],64))])])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{variant:"elevated",color:"primary",onClick:t[3]||(t[3]=e=>s.save()),disabled:!i.enableSave},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{icon:"save"}),(0,r.Uk)(" Salvar")])),_:1},8,["disabled"]),(0,r.Wm)(d,{variant:"text",onClick:t[4]||(t[4]=t=>e.$emit("close"))},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{icon:"clear"}),(0,r.Uk)(" Fechar")])),_:1})])),_:1})])),_:1})}const S={name:"return-place",emits:["close"],computed:{refreshMap:{get(){return this.$store.state.refreshMap},set(e){this.$store.commit("setRefreshMap",e)}}},data(){return{loading:!1,enableSave:!1,place:{postalCode:null,number:null,address:null,district:null,city:null,state:null,latitude:null,longitude:null},postalCodeRules:[e=>e&&9==e.length||"CEP inválido"]}},mounted(){localStorage.getItem("returnPlace")&&(this.place=JSON.parse(localStorage.getItem("returnPlace")))},methods:{getAddress(){this.place.postalCode&&(this.loading=!0,this.enableAdd=!1,fetch(`https://viacep.com.br/ws/${this.place.postalCode}/json`).then((e=>{if(200!=e.status)throw null;return e.json()})).then((e=>{if(e.erro)throw null;return this.place.address=e.logradouro,this.place.district=e.bairro,this.place.city=e.localidade,this.place.state=e.uf,this.getCoords(`${this.place.number} ${e.logradouro}, ${e.bairro} ${e.uf} ${e.cep}`)})).then((()=>{this.enableSave=!0})).catch((()=>{this.place.address=null,this.place.district=null,this.place.city=null,this.place.state=null,this.place.latitude=null,this.place.longitude=null,this.$store.dispatch("openAlert",{text:"Falha ao localizar esse CEP",color:"error"})})).finally((()=>{this.loading=!1})))},getCoords(e){return fetch(`https://dev.virtualearth.net/REST/v1/Locations?q=${e}&key=AiSONtXZon4zZYm6E7NlrPDVTBY0plMXn_IU5nHtjbKgQCo2giqviot_Q5XuBsXa`).then((e=>{if(200!=e.status)throw null;return e.json()})).then((e=>{const t=e.resourceSets[0]?.resources[0]?.point?.coordinates;if(!t)throw null;this.place.latitude=t[0],this.place.longitude=t[1]}))},async save(){const{valid:e}=await this.$refs.form.validate();if(!e||!this.place.postalCode||!this.place.address||!this.place.city||!this.place.state||!this.place.latitude||!this.place.longitude)return this.$store.dispatch("openAlert",{text:"Há campos faltantes",color:"error"});localStorage.setItem("returnPlace",JSON.stringify(this.place)),this.$store.dispatch("openAlert",{text:"Local de retorno salvo sucesso",color:"success"}),this.refreshMap=!0,this.$emit("close")}}},E=(0,k.Z)(S,[["render",N],["__scopeId","data-v-ebb5a028"]]),M=E,W={name:"home",components:{nfAdd:P,nfDeliver:A.Z,returnPlace:M},computed:{coords:{get(){return this.$store.state.coords},set(e){this.$store.commit("setCoords",e)}},map(){return this.$store.state.map},today(){return(new Date).setHours(0,0,0,0).valueOf()},refreshMap(){return this.$store.state.refreshMap}},data(){return{drawer:!1,prevCoords:{},mapStarted:!1,myPositionPushpin:null,watchId:null,dialogNFAdd:!1,dialogNFDeliver:!1,dialogReturnPlace:!1,pushpins:{},events:{}}},mounted(){this.map&&!this.mapStarted&&this.startMap(),document.onvisibilitychange=()=>{document.hidden||this.centerMap()}},methods:{startDelivery(){if(!this.coords.latitude||!this.coords.longitude)return;let e;"ios"==g.name&&(e=window.open()),this.clearEventsAndPushpins(),this.$idb.packages.where({date:this.today}).toArray().then((t=>{t=t?.filter((e=>void 0==e.delivered)),t?.length||(e?.close(),this.$store.dispatch("openAlert",{text:"Não há NFs pendentes de entrega",color:"warning"}));let a="https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&dir_action=navigate";if(a+="&waypoints=",t=(0,u.cU)(t,this.coords.latitude,this.coords.longitude),t.forEach(((e,t,o)=>{this.addPackageWaypoint(e),a+=encodeURI(`${e.address} ${e.number} ${e.district} ${e.city} ${e.state}`),o.length>1&&t<o.length-1&&(a+="|")})),localStorage.getItem("returnPlace")){const e=JSON.parse(localStorage.getItem("returnPlace"));a+="&destination=",a+=encodeURI(`${e.address} ${e.number} ${e.district} ${e.city} ${e.state}`),this.addReturnPlaceWaypoint(M)}else{const e=t[t.length-1];a+="&destination=",a+=encodeURI(`${e.address} ${e.number} ${e.district} ${e.city} ${e.state}`)}console.info(a),"ios"==g.name?(e.location=a,e.target="_blank"):e=window.open(a,"_blank")})).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao iniciar percurso",color:"error"})}))},startMap(){this.clearEventsAndPushpins(),navigator.geolocation.getCurrentPosition((e=>{this.coords=e.coords,this.prevCoords=JSON.parse(JSON.stringify(this.coords)),this.map.setView({center:this.coords,zoom:18,animate:!0}),this.myPositionPushpin=new Microsoft.Maps.Pushpin(this.coords,{icon:"/img/direction.webp",anchor:new Microsoft.Maps.Point(28,28)}),this.map.entities.push(this.myPositionPushpin),this.refreshPackages(),this.mapStarted=!0}),(()=>{}),{maximumAge:6e4})},refreshPackages(){this.clearEventsAndPushpins(),this.$idb.packages.where({date:this.today}).toArray().then((e=>{e=e?.filter((e=>void 0==e.delivered)),e?.length&&e.forEach((e=>{this.addPackageWaypoint(e)}))})).finally((()=>{if(localStorage.getItem("returnPlace")){const e=JSON.parse(localStorage.getItem("returnPlace"));this.addReturnPlaceWaypoint(e)}}))},clearEventsAndPushpins(){Object.values(this.events).forEach((e=>Microsoft.Maps.Events.removeHandler(e))),Object.values(this.pushpins).forEach((e=>this.map.entities.remove(e))),this.events={},this.pushpins={}},refreshCompass(e){if(!this.myPositionPushpin)return;const t=[45,90,135,180,225,270,315];let a="/img/direction.webp";if(e>=45&&e<360){const o=t.reduce(((t,a)=>Math.abs(a-e)<Math.abs(t-e)?a:t));a=`/img/direction-${o}.webp`}this.myPositionPushpin.getIcon()!=a&&this.myPositionPushpin.setOptions({icon:a})},centerMap(){navigator.geolocation.getCurrentPosition((e=>{this.coords=e.coords,this.map.setView({center:this.coords,zoom:18,animate:!0}),this.refreshCompass(Math.trunc(e.coords.heading))}),(()=>{}),{enableHighAccuracy:!0,maximumAge:6e4})},addPackageWaypoint(e){this.pushpins[e.nf]||(this.pushpins[e.nf]=new Microsoft.Maps.Pushpin(e.coords,{icon:"/img/pushpin-box.webp",anchor:new Microsoft.Maps.Point(32,32)}),this.pushpins[e.nf].metadata=e,this.events[e.nf]=Microsoft.Maps.Events.addHandler(this.pushpins[e.nf],"click",this.pushpinClicked),this.map.entities.push(this.pushpins[e.nf]))},addReturnPlaceWaypoint(e){this.pushpins["returnLocation"]=new Microsoft.Maps.Pushpin(e,{icon:"/img/pushpin-home.webp",anchor:new Microsoft.Maps.Point(32,32)}),this.map.entities.push(this.pushpins["returnLocation"])},pushpinClicked(e){this.dialogNFDeliver||(this.dialogNFDeliver=!0,this.$nextTick((()=>{this.$refs.nfDeliver.open(e.target.metadata)})))},nfStatusUpdated(e){Microsoft.Maps.Events.removeHandler(this.events[e.nf]),this.map.entities.remove(this.pushpins[e.nf]),delete this.pushpins[e.nf]},exportData(){p(this.$idb).then((e=>{const t=document.createElement("a");t.download="Ntrega.csv",t.href=`data:text/csv;charset=utf-8,${e}`,document.documentElement.appendChild(t),t.click(),setTimeout((()=>{document.documentElement.removeChild(t)}))})).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao exportar dados",color:"error"})}))}},watch:{map:function(e){e&&!this.mapStarted&&this.startMap()},refreshMap:function(e){e&&this.refreshPackages()}}},U=(0,k.Z)(W,[["render",d],["__scopeId","data-v-8889d4b2"]]),V=U,I=e=>((0,r.dD)("data-v-df20df5e"),e=e(),(0,r.Cn)(),e),D=I((()=>(0,r._)("header",null,"Instale esse App no seu ceular",-1))),T=I((()=>(0,r._)("div",{class:"ios"},[(0,r.Uk)(" Adicionar à Tela de Início "),(0,r._)("span")],-1))),O=I((()=>(0,r._)("div",null,"Adicionar à tela inicial",-1)));function F(e,t,a,i,s,n){const l=(0,r.up)("v-icon");return(0,r.wg)(),(0,r.j4)(o.uT,{name:"fade"},{default:(0,r.w5)((()=>[s.show?((0,r.wg)(),(0,r.iD)("main",{key:0,onClick:t[0]||(t[0]=e=>s.show=!1),class:"banner elevation-12"},[D,"ios"==n.device.name?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("div",null,[(0,r.Uk)(" Toque em "),(0,r.Wm)(l,{icon:"ios_share"}),(0,r.Uk)(" e depois em ")]),T],64)):(0,r.kq)("",!0),"android"==n.device.name?((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r._)("div",null,[(0,r.Uk)(" Toque em "),(0,r.Wm)(l,{icon:"more_vert"}),(0,r.Uk)("e depois em ")]),O],64)):(0,r.kq)("",!0)])):(0,r.kq)("",!0)])),_:1})}const j={name:"banner-install-pwa",computed:{device(){return g}},data(){return{show:!1}},mounted(){this.device.isMobile&&!this.device.standalone&&(this.show=!0,setTimeout((()=>{this.show=!1}),1e4))}},x=(0,k.Z)(j,[["render",F],["__scopeId","data-v-df20df5e"]]),B=x,R=e=>((0,r.dD)("data-v-633135a9"),e=e(),(0,r.Cn)(),e),X={key:0,class:"banner elevation-12"},q=R((()=>(0,r._)("p",null,"Usamos cookies para melhorar sua experiência.",-1)));function Z(e,t,a,i,s,n){const c=(0,r.up)("v-icon"),d=(0,r.up)("v-btn");return(0,r.wg)(),(0,r.j4)(o.uT,{name:"fade"},{default:(0,r.w5)((()=>[s.show?((0,r.wg)(),(0,r.iD)("footer",X,[q,(0,r._)("p",null,[(0,r.Uk)("Saiba mais em "),(0,r._)("span",{onClick:t[0]||(t[0]=t=>e.$router.push("/privacy-policy").catch((e=>{})))},(0,l.zw)(n.link()),1)]),(0,r.Wm)(d,{color:"primary",onClick:n.accept},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{icon:"check"}),(0,r.Uk)("Aceitar")])),_:1},8,["onClick"])])):(0,r.kq)("",!0)])),_:1})}const z={name:"banner-cookies-warning",data(){return{show:!localStorage.getItem("cookiesPolicyAccepted")}},methods:{accept(){localStorage.setItem("cookiesPolicyAccepted","true"),this.show=!1},link(){return`${location.host}${location.pathname}#/privacy-policy`}}},Y=(0,k.Z)(z,[["render",Z],["__scopeId","data-v-633135a9"]]),L=Y,H={components:{home:V,bannerInstallPwa:B,bannerCookiesWarning:L},computed:{alert:{get(){return this.$store.state.alert},set(e){return this.$store.commit("setAlert",e)}},updateAvailable:{get(){return this.$store.state.updateAvailable},set(e){this.$store.commit("setUpdateAvailable",!1)}},map:{get(){return this.$store.state.map},set(e){return this.$store.commit("setMap",e)}},alertData:function(){return this.$store.state.alertData}},data(){return{page:"/"!=this.$route.path}},created(){this.$auth.authenticated&&this.$auth.attempt();const e=document.createElement("script");e.async=!0,e.defer=!0,e.src="/js/bingMaps.js",e.onload=()=>this.loadMap(),document.body.appendChild(e)},beforeUnmount(){const e=document.body.querySelector("script");e&&document.body.removeChild(e)},methods:{updateApp(){location.reload(!0)},loadMap(){try{this.map=new Microsoft.Maps.Map(this.$el,{credentials:"AiSONtXZon4zZYm6E7NlrPDVTBY0plMXn_IU5nHtjbKgQCo2giqviot_Q5XuBsXa",enableClickableLogo:!1,disableKeyboardInput:!0,showMapTypeSelector:!1,showLocateMeButton:!1,showZoomButtons:!1,showCopyright:!1,showTermsLink:!1,showScalebar:!1,showLogo:!1,enableHighDpi:!0,liteMode:!0})}catch(e){setTimeout((()=>{this.loadMap()}),100)}}},watch:{$route:function(e){this.page="/"!=e.path},page:function(e){"/"==this.$route.path||e||this.$router.push("/")}}},Q=(0,k.Z)(H,[["render",c]]),K=Q;var J=a(6623);const G=(0,J.MT)({state:{authenticated:!!localStorage.getItem("accessToken"),requestNotificationPermission:null,updateAvailable:!1,alert:!1,alertData:{},map:null,refreshMap:!1,coords:{latitude:null,longitude:null}},mutations:{setRequestNotificationPermission(e,t){e.requestNotificationPermission=t},setUpdateAvailable(e,t){e.updateAvailable=t},setAuthenticate(e,t){e.authenticated=t},setAlert(e,t){e.alert=t},setAlertData(e,t){e.alertData=t},setMap(e,t){e.map=t},setCoords(e,t){e.coords.latitude=t.latitude,e.coords.longitude=t.longitude},setRefreshMap(e){e.refreshMap=!0,setTimeout((()=>{e.refreshMap=!1}),100)}},actions:{openAlert({commit:e},t){if(t.text){e("setAlertData",t),e("setAlert",!0);try{navigator.vibrate(100)}catch(a){}}}}});var ee=a(2483);const te=[{path:"/login/:provider?",name:"Login",component:()=>a.e(626).then(a.bind(a,2626)),meta:{elseAuth:!0}},{path:"/privacy-policy",name:"Política de privacidade",component:()=>a.e(491).then(a.bind(a,5491))},{path:"/nf/list",name:"Lista de NFs",component:()=>a.e(169).then(a.bind(a,7169))}],ae=(0,ee.p7)({history:(0,ee.r5)("/"),routes:te});({VUE_APP_BING_MAPS_KEY:"AiSONtXZon4zZYm6E7NlrPDVTBY0plMXn_IU5nHtjbKgQCo2giqviot_Q5XuBsXa",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FIREBASE_ANALYTICS_ID&&(0,i.iq)(ae);const oe=ae;var ie=a(7603),se=a(4147);class ne extends ie.ZP{constructor(e){super(se.u2.toLocaleLowerCase()),this.version(1).stores({packages:"&nf, date"})}}const re={install:(e,t)=>{const a=new ne(e);e.config.globalProperties.$idb=a}};var le=a(5734),ce=a(722);class de{constructor(e){this.app=e}attempt(){navigator.onLine&&this.authenticated&&(fetch(`${{VUE_APP_BING_MAPS_KEY:"AiSONtXZon4zZYm6E7NlrPDVTBY0plMXn_IU5nHtjbKgQCo2giqviot_Q5XuBsXa",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_HOST}/auth`,{headers:this.headers}).then((e=>{200!=e.status&&this.deauthenticate(!0)})),this.vue.$pushNotification.checkPermission())}authenticate(e,t="/"){localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("user",JSON.stringify(e.user)),this.vue.$store.commit("setAuthenticate",!0),this.vue.$router.push(t??"/").catch((e=>{})),this.vue.$pushNotification.checkPermission()}deauthenticate(e=!1){e||fetch(`${{VUE_APP_BING_MAPS_KEY:"AiSONtXZon4zZYm6E7NlrPDVTBY0plMXn_IU5nHtjbKgQCo2giqviot_Q5XuBsXa",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_HOST}/auth`,{method:"delete",headers:this.headers}),this.vue.$store.commit("setAuthenticate",!1),localStorage.removeItem("accessToken"),localStorage.removeItem("user"),this.vue.$router.push("/login").catch((e=>{})),(0,ce.w7)(le.auth)}get authenticated(){return!!localStorage.getItem("accessToken")}get user(){return JSON.parse(localStorage.getItem("user")??"{}")}get headers(){let e={"Content-Type":"application/json"};return localStorage.getItem("accessToken")&&(e["Authorization"]=`Bearer ${localStorage.getItem("accessToken")}`),e}get vue(){return this.app.config.globalProperties}}const ue={install:(e,t)=>{const a=new de(e);e.config.globalProperties.$auth=a}};a(9773);var pe=a(8957),he=a(7711),me=a(8881),fe=a(2881),ge=a(8600),ve=a(2822),we=a(4302);function be(){return"true"==localStorage.getItem("lightTheme")||"false"!=localStorage.getItem("lightTheme")&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches)}const _e=(0,pe.Rd)({directives:ge,components:Object.assign(me,fe),adapter:ve.Z,locale:{pt:we.Z},icons:{defaultSet:"md",aliases:he.j,sets:{md:he.md}},theme:{defaultTheme:be()?"light":"dark",themes:{dark:{dark:!0,colors:{background:"#121212",primary:"#027ACD",accent:"#ffdb58",error:"#ff5349",info:"#1e90ff",success:"#3cd070",warning:"#ffdb58"}},light:{dark:!1,colors:{background:"#e6e6e6",primary:"#027ACD",accent:"#ffdb58",error:"#ff5349",info:"#1e90ff",success:"#3cd070",warning:"#ffdb58"}}}}});var ke=a(2659);class ye{constructor(e){this.app=e}checkPermission(){navigator.permissions.query({name:"notifications"}).then((e=>{"granted"==e.state?this.getFcmToken():"prompt"==e.state&&(this.vue.$store.commit("setRequestNotificationPermission",!0),this.vue.$store.dispatch("refreshShowPromo"))}))}requestPermission(){Notification.requestPermission().then((e=>{"granted"==e&&this.getFcmToken()})).catch((e=>{this.vue.$store.commit("setRequestNotificationPermission",!1)}))}getFcmToken(){navigator.serviceWorker.ready.then((e=>(0,ke.LP)(le.messaging,{vapidKey:{VUE_APP_BING_MAPS_KEY:"AiSONtXZon4zZYm6E7NlrPDVTBY0plMXn_IU5nHtjbKgQCo2giqviot_Q5XuBsXa",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_FIREBASE_VAPID,serviceWorkerRegistration:e}).then((e=>{localStorage.getItem("fcmToken")!=e&&this.sendToServer({fcmToken:e}),localStorage.setItem("fcmToken",e),this.vue.$store.dispatch("refreshShowPromo"),this.vue.$store.commit("setRequestNotificationPermission",!1)})))).catch((()=>{}))}sendToServer(e){fetch(`${{VUE_APP_BING_MAPS_KEY:"AiSONtXZon4zZYm6E7NlrPDVTBY0plMXn_IU5nHtjbKgQCo2giqviot_Q5XuBsXa",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_HOST}/auth/notification`,{method:"put",body:e,headers:this.vue.$auth.headers})}get vue(){return this.app.config.globalProperties}}const Pe={install:(e,t)=>{const a=new ye(e);e.config.globalProperties.$pushNotification=a}};var Ae=a(5431);const $e=e=>{(0,Ae.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){e.config.globalProperties.$store.commit("setUpdateAvailable",!0),console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}})},Ce=(0,o.ri)(K);Ce.use(re),Ce.use(ue),Ce.use(G),Ce.use(oe),Ce.use(_e),Ce.use(n()),Ce.use(Pe),Ce.mount("#app"),$e(Ce),{VUE_APP_BING_MAPS_KEY:"AiSONtXZon4zZYm6E7NlrPDVTBY0plMXn_IU5nHtjbKgQCo2giqviot_Q5XuBsXa",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_FIREBASE_ANALYTICS_ID&&Ce.use(i.ZP,{property:{id:{VUE_APP_BING_MAPS_KEY:"AiSONtXZon4zZYm6E7NlrPDVTBY0plMXn_IU5nHtjbKgQCo2giqviot_Q5XuBsXa",NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_FIREBASE_ANALYTICS_ID}}),oe.beforeEach(((e,t,a)=>{const o=e.matched.some((e=>e.meta.ifAuth)),i=e.matched.some((e=>e.meta.elseAuth));o&&!Ce.config.globalProperties.$auth.authenticated?a("/login"):i&&Ce.config.globalProperties.$auth.authenticated?a("/"):a()})),Ce.config.devtools=!1},5734:()=>{},6229:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var o=a(3396);function i(e,t,a,i,s,n){const r=(0,o.up)("v-card-title"),l=(0,o.up)("v-card-text"),c=(0,o.up)("v-icon"),d=(0,o.up)("v-btn"),u=(0,o.up)("v-card-actions"),p=(0,o.up)("v-card"),h=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(h,{modelValue:s.show,"onUpdate:modelValue":t[2]||(t[2]=e=>s.show=e),"content-class":"dialog-confirm"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r),(0,o.Wm)(l,{innerHTML:s.message},null,8,["innerHTML"]),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{variant:"text",onClick:t[0]||(t[0]=e=>n.cancel())},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{icon:"clear"}),(0,o.Uk)(" Não ")])),_:1}),(0,o.Wm)(d,{variant:"text",onClick:t[1]||(t[1]=e=>n.confirm())},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{icon:"check"}),(0,o.Uk)(" Sim ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}const s={name:"dialog-confirmation",emits:["confirm","cancel"],data(){return{message:null,show:!1}},methods:{open(e){this.message=e,this.show=!0},confirm(){this.$emit("confirm"),this.show=!1},cancel(){this.$emit("cancel"),this.show=!1}}};var n=a(89);const r=(0,n.Z)(s,[["render",i]]),l=r},383:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var o=a(3396),i=a(7139);function s(e,t,a,s,n,r){const l=(0,o.up)("v-card-title"),c=(0,o.up)("v-icon"),d=(0,o.up)("v-btn"),u=(0,o.up)("v-card-text"),p=(0,o.up)("v-card-actions"),h=(0,o.up)("v-card"),m=(0,o.up)("dialog-confirmation");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o.Uk)("NF "),(0,o._)("strong",null,(0,i.zw)(n.package?.nf),1)])),_:1}),n.package?((0,o.wg)(),(0,o.j4)(u,{key:0},{default:(0,o.w5)((()=>[(0,o._)("header",null,(0,i.zw)(n.package.address)+" N° "+(0,i.zw)(n.package.number||"S/N")+", "+(0,i.zw)(n.package.district)+" - "+(0,i.zw)(n.package.state),1),(0,o._)("footer",null,[(0,o.Wm)(d,{block:"",variant:"elevated",color:"error",onClick:t[0]||(t[0]=e=>r.openConfirmation("failure"))},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{icon:"clear"}),(0,o.Uk)(" Destinatário ausente")])),_:1}),(0,o.Wm)(d,{block:"",variant:"elevated",color:"success",onClick:t[1]||(t[1]=e=>r.openConfirmation("success"))},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{icon:"check"}),(0,o.Uk)(" Entrega concluída")])),_:1})])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{variant:"text",onClick:t[2]||(t[2]=t=>e.$emit("close"))},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{icon:"clear"}),(0,o.Uk)(" Fechar")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(m,{ref:"dialogConfirmation",onConfirm:t[3]||(t[3]=e=>r.confirm())},null,512)],64)}var n=a(6229);const r={name:"nf-deliver",components:{dialogConfirmation:n.Z},emits:["close","nfStatusUpdated"],data(){return{package:null,dialogConfirmation:!1,pendingAction:null}},methods:{open(e){this.package=e},openConfirmation(e){this.pendingAction=e,"success"==e&&this.$refs.dialogConfirmation.open(`Confirmar entrega da NF <strong>${this.package.nf}</strong> com sucesso ?`),"failure"==e&&this.$refs.dialogConfirmation.open(`Confirmar destinatário ausente para a NF <strong>${this.package.nf}</strong> ?`)},confirm(){this.$idb.packages.update(this.package.nf,{delivered:"success"==this.pendingAction}).then((()=>{this.$store.dispatch("openAlert",{text:"Status de entrega atualizado com sucesso",color:"success"}),this.$emit("nfStatusUpdated",this.package),this.$emit("close")})).finally((()=>{this.pendingAction=null}))}}};var l=a(89);const c=(0,l.Z)(r,[["render",s],["__scopeId","data-v-2c417cd9"]]),d=c},4147:e=>{"use strict";e.exports={u2:"Ntrega"}}},t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,a),s.exports}a.m=e,(()=>{var e=[];a.O=(t,o,i,s)=>{if(!o){var n=1/0;for(d=0;d<e.length;d++){for(var[o,i,s]=e[d],r=!0,l=0;l<o.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((e=>a.O[e](o[l])))?o.splice(l--,1):(r=!1,s<n&&(n=s));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,i,s]}})(),(()=>{a.F={},a.E=e=>{Object.keys(a.F).map((t=>{a.F[t](e)}))}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{169:"ca235334",491:"c64ff97b",626:"61735d9f"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{169:"15eb9c16",491:"6386d6cf",626:"6f8fc305"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="Ntrega:";a.l=(o,i,s,n)=>{if(e[o])e[o].push(i);else{var r,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+s){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+s),r.src=o),e[o]=[i];var p=(t,a)=>{r.onerror=r.onload=null,clearTimeout(h);var i=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((e=>e(a))),t)return t(a)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),l&&document.head.appendChild(r)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,o,i)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=a=>{if(s.onerror=s.onload=null,"load"===a.type)o();else{var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=r,s.parentNode&&s.parentNode.removeChild(s),i(l)}};return s.onerror=s.onload=n,s.href=t,a?a.parentNode.insertBefore(s,a.nextSibling):document.head.appendChild(s),s},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var i=a[o],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===e||s===t))return i}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){i=n[o],s=i.getAttribute("data-href");if(s===e||s===t)return i}},o=o=>new Promise(((i,s)=>{var n=a.miniCssF(o),r=a.p+n;if(t(n,r))return i();e(o,r,null,i,s)})),i={143:0};a.f.miniCss=(e,t)=>{var a={169:1,491:1,626:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=o(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,o)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var s=new Promise(((a,o)=>i=e[t]=[a,o]));o.push(i[2]=s);var n=a.p+a.u(t),r=new Error,l=o=>{if(a.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var s=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",r.name="ChunkLoadError",r.type=s,r.request=n,i[1](r)}};a.l(n,l,"chunk-"+t,t)}},a.F.j=t=>{if(!a.o(e,t)||void 0===e[t]){e[t]=null;var o=document.createElement("link");a.nc&&o.setAttribute("nonce",a.nc),o.rel="prefetch",o.as="script",o.href=a.p+a.u(t),document.head.appendChild(o)}},a.O.j=t=>0===e[t];var t=(t,o)=>{var i,s,[n,r,l]=o,c=0;if(n.some((t=>0!==e[t]))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var d=l(a)}for(t&&t(o);c<n.length;c++)s=n[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},o=globalThis["webpackChunkNtrega"]=globalThis["webpackChunkNtrega"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),(()=>{a.O(0,[143],(()=>{[626,491,169].map(a.E)}),5)})();var o=a.O(void 0,[99,808,182,818,586,525,613,922,814,77,857,864,793],(()=>a(4328)));o=a.O(o)})();