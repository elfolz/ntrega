"use strict";(globalThis["webpackChunkNtrega"]=globalThis["webpackChunkNtrega"]||[]).push([[439],{2439:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});a(7658);var n=a(3396),i=a(7139);const l=e=>((0,n.dD)("data-v-0e4de584"),e=e(),(0,n.Cn)(),e),s=l((()=>(0,n._)("span",null,"NFs para o dia",-1))),d=l((()=>(0,n._)("label",null,"NF",-1))),o={key:0},r=l((()=>(0,n._)("label",null,"Distância",-1))),c=l((()=>(0,n._)("label",null,"Endereço",-1))),u=l((()=>(0,n._)("label",null,"Status",-1))),p={key:0},h={key:0};function g(e,t,a,l,g,v){const k=(0,n.up)("v-text-field"),m=(0,n.up)("v-date-picker"),f=(0,n.up)("v-locale-provider"),w=(0,n.up)("v-menu"),N=(0,n.up)("v-btn"),_=(0,n.up)("v-icon"),F=(0,n.up)("v-list-item-title"),D=(0,n.up)("v-list-item"),y=(0,n.up)("v-list"),b=(0,n.up)("dialog-confirmation");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("header",null,[s,(0,n.Wm)(w,{"close-on-content-click":!1,modelValue:g.menuDatePicker,"onUpdate:modelValue":t[1]||(t[1]=e=>g.menuDatePicker=e)},{activator:(0,n.w5)((({props:e})=>[(0,n.Wm)(k,(0,n.dG)({value:g.date?.toLocaleDateString(),readonly:"","hide-details":""},e,{"append-inner-icon":"edit",density:"compact"}),null,16,["value"])])),default:(0,n.w5)((()=>[(0,n.Wm)(f,{locale:"pt"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{modelValue:g.date,"onUpdate:modelValue":[t[0]||(t[0]=e=>g.date=e),v.pickDate],"hide-actions":"",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["modelValue"])]),(0,n._)("main",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(g.packages,(e=>((0,n.wg)(),(0,n.iD)("section",{class:(0,i.C_)(["elevation-4",1==e.delivered?"deliver_success":0==e.delivered?"deliver_fail":null])},[(0,n._)("header",null,[(0,n._)("article",null,[d,(0,n._)("span",null,(0,i.zw)(e.nf),1)]),g.date.valueOf()>=v.today?((0,n.wg)(),(0,n.iD)("article",o,[r,(0,n._)("span",null,(0,i.zw)(v.valueToDist(e.distance)),1)])):(0,n.kq)("",!0)]),(0,n._)("article",null,[c,(0,n._)("span",null,(0,i.zw)(e.address)+" N° "+(0,i.zw)(e.number||"S/N")+", "+(0,i.zw)(e.district)+" - "+(0,i.zw)(e.state),1)]),(0,n._)("footer",null,[(0,n._)("article",null,[u,(0,n._)("span",null,(0,i.zw)(1==e.delivered?"Entregue":0==e.delivered?"Destinatário ausente":"Pendente de entrega"),1)]),(0,n._)("article",null,[g.date.valueOf()!=v.today||void 0!=e.delivered?((0,n.wg)(),(0,n.j4)(w,{key:0},{activator:(0,n.w5)((({props:e})=>[(0,n.Wm)(N,(0,n.dG)({variant:"text",icon:"more_horiz"},e),null,16)])),default:(0,n.w5)((()=>[(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[g.date.valueOf()!=v.today?((0,n.wg)(),(0,n.j4)(D,{key:0,onClick:t=>v.bringToToday(e.nf)},{prepend:(0,n.w5)((()=>[(0,n.Wm)(_,{icon:"update"})])),default:(0,n.w5)((()=>[(0,n.Wm)(F,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Trazer para hoje")])),_:1})])),_:2},1032,["onClick"])):(0,n.kq)("",!0),void 0!=e.delivered?((0,n.wg)(),(0,n.j4)(D,{key:1,onClick:t=>v.revertStatus(e.nf)},{prepend:(0,n.w5)((()=>[(0,n.Wm)(_,{icon:"edit"})])),default:(0,n.w5)((()=>[(0,n.Wm)(F,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Reverter status")])),_:1})])),_:2},1032,["onClick"])):(0,n.kq)("",!0)])),_:2},1024)])),_:2},1024)):(0,n.kq)("",!0)])])],2)))),256)),g.packages.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",p," Não há NFs para esta data. "))]),(0,n._)("footer",null,[g.packages?.length?((0,n.wg)(),(0,n.iD)("span",h,(0,i.zw)(g.deliveredNFs)+" / "+(0,i.zw)(g.packages.length)+" NFs entregues",1)):(0,n.kq)("",!0),(0,n.Wm)(N,{variant:"text",onClick:t[2]||(t[2]=t=>e.$router.push("/"))},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{icon:"clear"}),(0,n.Uk)(" Fechar")])),_:1})]),(0,n.Wm)(b,{ref:"dialogConfirmation",onConfirm:t[3]||(t[3]=e=>v.confirm())},null,512)],64)}var v=a(8776),k=a(6229);const m={name:"nf-list",emits:["close"],components:{dialogConfirmation:k.Z},computed:{today(){return(new Date).setHours(0,0,0,0).valueOf()},coords(){return this.$store.state.coords}},data(){return{date:new Date,packages:[],pendingNF:null,menuDatePicker:!1,pendingAction:null,deliveredNFs:0}},mounted(){this.open()},methods:{open(){const e=this.date.setHours(0,0,0,0).valueOf();this.$idb.packages.where({date:e}).toArray().then((t=>{e==this.today?this.packages=(0,v.cU)(t,this.coords.latitude,this.coords.longitude):this.packages=(0,v.z9)(t),this.menuDatePicker=!1,this.calcDeliveredNFs()}))},revertStatus(e){this.pendingAction="revert",this.pendingNF=e,this.$refs.dialogConfirmation.open(`Reverter status da NF <strong>${e}</strong> ?`)},bringToToday(e){this.pendingAction="bringToToday",this.pendingNF=e,this.$refs.dialogConfirmation.open(`Trazer a NF <strong>${e}</strong> para a data de hoje ?`)},confirm(){this.pendingNF&&this.pendingAction&&("revert"==this.pendingAction&&this.revertNF(),"bringToToday"==this.pendingAction&&this.bringNFToToday(),this.pendingAction=null)},revertNF(){this.pendingNF&&this.$idb.packages.update(this.pendingNF,{delivered:void 0}).then((()=>{const e=this.packages.findIndex((e=>e.nf==this.pendingNF));this.packages[e].delivered=void 0,this.$store.dispatch("openAlert",{text:"Status de entrega revertido com sucesso!",color:"success"}),this.calcDeliveredNFs()})).finally((()=>{this.pendingNF=null}))},bringNFToToday(){this.pendingNF&&this.$idb.packages.update(this.pendingNF,{date:this.today}).then((()=>{const e=this.packages.findIndex((e=>e.nf==this.pendingNF));this.packages.splice(e,1),this.$store.dispatch("openAlert",{text:"Data da NF atualizada com sucesso!",color:"success"}),this.calcDeliveredNFs()})).finally((()=>{this.pendingNF=null}))},calcDeliveredNFs(){this.deliveredNFs=this.packages.reduce(((e,t)=>(1==t.delivered&&e++,e)),0)},valueToDist(e){return(0,v.kF)(e)},pickDate(e){this.date=e,this.open()}}};var f=a(89);const w=(0,f.Z)(m,[["render",g],["__scopeId","data-v-0e4de584"]]),N=w}}]);