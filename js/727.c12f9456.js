"use strict";(globalThis["webpackChunkNtrega"]=globalThis["webpackChunkNtrega"]||[]).push([[727],{4727:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});a(7658);var i=a(3396),n=a(7139);const s=e=>((0,i.dD)("data-v-182d8a36"),e=e(),(0,i.Cn)(),e),l=s((()=>(0,i._)("label",null,"NF",-1))),d={key:0},o=s((()=>(0,i._)("label",null,"Distância",-1))),r=s((()=>(0,i._)("label",null,"Data entrega",-1))),c=s((()=>(0,i._)("label",null,"Endereço",-1))),u=s((()=>(0,i._)("label",null,"Status",-1))),h={key:0},p=s((()=>(0,i._)("label",null,"Pagamento",-1))),g={key:0},m={key:0};function v(e,t,a,s,v,w){const f=(0,i.up)("v-select"),k=(0,i.up)("v-text-field"),D=(0,i.up)("v-date-picker"),N=(0,i.up)("v-locale-provider"),F=(0,i.up)("v-menu"),y=(0,i.up)("v-btn"),_=(0,i.up)("v-icon"),b=(0,i.up)("v-list-item-title"),$=(0,i.up)("v-list-item"),V=(0,i.up)("v-list"),W=(0,i.up)("nf-deliver"),C=(0,i.up)("v-dialog"),z=(0,i.up)("dialog-confirmation");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",null,[(0,i.Wm)(f,{modelValue:v.currentView,"onUpdate:modelValue":[t[0]||(t[0]=e=>v.currentView=e),t[1]||(t[1]=e=>w.open())],"hide-details":"",density:"compact",items:w.views,"item-title":"title","item-value":"value"},null,8,["modelValue","items"]),(0,i.Wm)(F,{"close-on-content-click":!1,modelValue:v.menuDatePicker,"onUpdate:modelValue":t[4]||(t[4]=e=>v.menuDatePicker=e)},{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(k,(0,i.dG)({value:v.date.toLocaleDateString()},e,{readonly:"","hide-details":"","append-inner-icon":"edit",density:"compact","onClick:appendInner":t[2]||(t[2]=e=>v.menuDatePicker=!0)}),null,16,["value"])])),default:(0,i.w5)((()=>[(0,i.Wm)(N,{locale:"pt"},{default:(0,i.w5)((()=>[(0,i.Wm)(D,{modelValue:v.date,"onUpdate:modelValue":[t[3]||(t[3]=e=>v.date=e),w.pickDate],"hide-actions":"","show-adjacent-months":"",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["modelValue"])]),(0,i._)("main",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(v.packages,(e=>((0,i.wg)(),(0,i.iD)("section",{class:(0,n.C_)(["elevation-4",1==e.delivered?"deliver_success":0==e.delivered?"deliver_fail":null])},[(0,i._)("header",null,[(0,i._)("article",null,[l,(0,i._)("span",null,(0,n.zw)(e.nf),1)]),"day"==v.currentView&&v.date.valueOf()==w.today&&e.distance?((0,i.wg)(),(0,i.iD)("article",d,[o,(0,i._)("span",null,(0,n.zw)(w.translateDistanceance(e.distance)),1)])):(0,i.kq)("",!0),(0,i._)("article",null,[r,(0,i._)("span",null,(0,n.zw)(w.numberToDate(e.date)),1)])]),(0,i._)("article",null,[c,(0,i._)("span",null,(0,n.zw)(e.address)+" N° "+(0,n.zw)(e.number||"S/N")+", "+(0,n.zw)(e.district)+", "+(0,n.zw)(e.city)+" - "+(0,n.zw)(e.state),1)]),(0,i._)("footer",null,[(0,i._)("article",null,[u,(0,i._)("span",null,(0,n.zw)(1==e.delivered?"✅ Entregue":0==e.delivered?"🚫 Ausente":"⏳ Pendente"),1)]),e.paymentMethod?((0,i.wg)(),(0,i.iD)("article",h,[p,(0,i._)("span",null,(0,n.zw)(w.paymentMethod(e.paymentMethod)),1)])):(0,i.kq)("",!0),(0,i._)("article",null,[(0,i.Wm)(F,null,{activator:(0,i.w5)((({props:e})=>[(0,i.Wm)(y,(0,i.dG)({variant:"text",icon:"more_horiz"},e),null,16)])),default:(0,i.w5)((()=>[(0,i.Wm)(V,null,{default:(0,i.w5)((()=>[(0,i.Wm)($,{onClick:t=>w.editStatus(e)},{prepend:(0,i.w5)((()=>[(0,i.Wm)(_,{icon:"edit"})])),default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Mudar status")])),_:1})])),_:2},1032,["onClick"]),e.date.valueOf()!=w.today?((0,i.wg)(),(0,i.j4)($,{key:0,onClick:t=>w.bringToToday(e.nf)},{prepend:(0,i.w5)((()=>[(0,i.Wm)(_,{icon:"update"})])),default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Trazer para hoje")])),_:1})])),_:2},1032,["onClick"])):(0,i.kq)("",!0),void 0!=e.delivered?((0,i.wg)(),(0,i.j4)($,{key:1,onClick:t=>w.revertStatus(e.nf)},{prepend:(0,i.w5)((()=>[(0,i.Wm)(_,{icon:"replay"})])),default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Reverter status")])),_:1})])),_:2},1032,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)($,{onClick:t=>w.remove(e.nf)},{prepend:(0,i.w5)((()=>[(0,i.Wm)(_,{icon:"delete"})])),default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Excluir NF")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])])],2)))),256)),v.packages.length?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("span",g," Não há NFs para esta data. "))]),(0,i._)("footer",null,[v.packages?.length?((0,i.wg)(),(0,i.iD)("span",m,(0,n.zw)(v.deliveredNFs)+" / "+(0,n.zw)(v.packages.length)+" NFs entregues",1)):(0,i.kq)("",!0),(0,i.Wm)(y,{variant:"text",onClick:t[5]||(t[5]=t=>e.$router.push("/"))},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{icon:"clear"}),(0,i.Uk)(" Fechar")])),_:1})]),(0,i.Wm)(C,{modelValue:v.dialogNFDeliver,"onUpdate:modelValue":t[7]||(t[7]=e=>v.dialogNFDeliver=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{ref:"nfDeliver",onClose:t[6]||(t[6]=e=>v.dialogNFDeliver=!1),onNfStatusUpdated:w.nfStatusUpdated},null,8,["onNfStatusUpdated"])])),_:1},8,["modelValue"]),(0,i.Wm)(z,{ref:"dialogConfirmation",onConfirm:t[8]||(t[8]=e=>w.confirm())},null,512)],64)}var w=a(7130),f=a(8776),k=a(6229),D=a(7769),N=a(5298),F=a(5734);const y={name:"nf-list",emits:["close"],components:{nfDeliver:D.Z,dialogConfirmation:k.Z},computed:{refreshMap:{get(){return this.$store.state.refreshMap},set(e){this.$store.commit("setRefreshMap",e)}},authenticated(){return this.$store.state.authenticated},today(){return(new Date).setHours(0,0,0,0).valueOf()},coords(){return this.$store.state.coords},views(){return[{title:"Dia",value:"day"},{title:"Semana",value:"week"},{title:"Mês",value:"month"}]}},data(){return{date:new Date,packages:[],pendingNF:null,menuView:!1,menuDatePicker:!1,pendingAction:null,dialogNFDeliver:!1,deliveredNFs:0,currentView:"day"}},mounted(){this.authenticated?this.getPackagesOnline():this.open()},methods:{getPackagesOnline(){this.authenticated&&(0,w.U2)((0,w.iU)((0,w.iH)(F.db),`packages/${this.$auth.user.id}`)).then((e=>{if(e.exists())return this.$idb.packages.bulkPut(Object.values(e.val()))})).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao sincronizar com a núvem. Você verá apenas as NFs deste dispositivo.",color:"error"})})).finally((()=>{this.open()}))},open(){const e=this.date.setHours(0,0,0,0).valueOf();let t=this.$idb.packages.where({date:e});if("week"==this.currentView){const a=new Date(e).getDate(),i=new Date(e).getDay(),n=new Date(e).setDate(a-i),s=new Date(e).setDate(a-i+6);t=this.$idb.packages.where("date").between(n,s,!0,!0)}else if("month"==this.currentView){const a=new Date(new Date(e).setDate(1)),i=new Date(new Date(a).setMonth(new Date(a).getMonth()+1)),n=new Date(i).setDate(i.getDate()-1);t=this.$idb.packages.where("date").between(new Date(e).setDate(1).valueOf(),n,!0,!0)}t.toArray().then((t=>{e==this.today&&"day"==this.currentView?this.packages=(0,f.cU)(t,this.coords.latitude,this.coords.longitude):"day"==this.currentView?this.packages=(0,f.z9)(t):"day"!=this.currentView&&(this.packages=(0,f.df)(t)),this.menuDatePicker=!1,this.calcDeliveredNFs()}))},revertStatus(e){this.pendingAction="revert",this.pendingNF=e,this.$refs.dialogConfirmation.open(`Reverter status da NF <strong>${e}</strong> ?`)},bringToToday(e){this.pendingAction="bringToToday",this.pendingNF=e,this.$refs.dialogConfirmation.open(`Trazer a NF <strong>${e}</strong> para a data de hoje ?`)},remove(e){this.pendingAction="delete",this.pendingNF=e,this.$refs.dialogConfirmation.open(`Excluir a NF <strong>${e}</strong> ?`)},confirm(){this.pendingNF&&this.pendingAction&&("revert"==this.pendingAction&&this.revertNF(),"bringToToday"==this.pendingAction&&this.bringNFToToday(),"delete"==this.pendingAction&&this.deleteNFLocal(),this.pendingAction=null)},editStatus(e){this.dialogNFDeliver||(this.dialogNFDeliver=!0,this.$nextTick((()=>{this.$refs.nfDeliver.open(e)})))},nfStatusUpdated(){this.open(),this.refreshMap=!0},revertNF(){this.pendingNF&&this.$idb.packages.update(this.pendingNF,{delivered:void 0,paymentMethod:void 0}).then((()=>{const e=this.packages.findIndex((e=>e.nf==this.pendingNF));this.packages[e].delivered=void 0,this.$store.dispatch("openAlert",{text:"Status de entrega revertido com sucesso",color:"success"}),this.calcDeliveredNFs(),this.refreshMap=!0,this.open()})).finally((()=>{this.pendingNF=null}))},bringNFToToday(){this.pendingNF&&this.$idb.packages.update(this.pendingNF,{date:this.today,delivered:void 0,paymentMethod:void 0}).then((()=>{const e=this.packages.findIndex((e=>e.nf==this.pendingNF));this.packages.splice(e,1),this.$store.dispatch("openAlert",{text:"Data da NF atualizada com sucesso",color:"success"}),this.calcDeliveredNFs(),this.refreshMap=!0,this.open()})).finally((()=>{this.pendingNF=null}))},deleteNFLocal(){this.pendingNF&&this.$idb.packages.delete(this.pendingNF).then((()=>{this.$store.dispatch("openAlert",{text:"NF deletada com sucesso",color:"success"}),this.refreshMap=!0,this.open()})).catch((e=>{this.$store.dispatch("openAlert",{text:"Falha ao deletar NF",color:"error"}),console.log(e)})).finally((()=>{this.authenticated&&this.deleteNFOnline(this.pendingNF),this.pendingNF=null}))},deleteNFOnline(e){e&&this.authenticated&&(0,w.Od)((0,w.iH)(F.db),`packages/${this.$auth.user.id}`).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao sincronizar com a núvem. A NF foi deletada apenas neste dispositivo.",color:"error"})}))},calcDeliveredNFs(){this.deliveredNFs=this.packages.reduce(((e,t)=>(1==t.delivered&&e++,e)),0)},translateDistanceance(e){return(0,f.Yz)(e)},numberToDate(e){return new Date(e).toLocaleDateString()},paymentMethod(e){return N.Z.find((t=>t.id==e))?.name??"N/A"},pickDate(e){this.date=e,this.open()}},watch:{coords:function(e){this.date.setHours(0,0,0,0).valueOf()==this.today&&"day"==this.currentView&&this.packages.forEach((t=>{t.distance=(0,f.Sp)(e.latitude,e.longitude,t.coords.latitude,t.coords.longitude)}))}}};var _=a(89);const b=(0,_.Z)(y,[["render",v],["__scopeId","data-v-182d8a36"]]),$=b}}]);