(function(){"use strict";var e={624:function(e,i,t){var n=t(9242),l=t(3396);const o={key:0},c={key:0,class:"app flex flex-column"},a={class:"app-content flex flex-column"},r={key:1,class:"mobile-message flex flex-column"},s=(0,l._)("h2",null,"Sorry, this app is not supported on Mobile Devices",-1),d=(0,l._)("p",null,"To use this app, pleas use a computer or tablet",-1),u=[s,d];function v(e,i,t,s,d,v){const p=(0,l.up)("Navigation"),m=(0,l.up)("Modal"),I=(0,l.up)("InvoiceModal"),_=(0,l.up)("router-view");return e.invoicesLoaded?((0,l.wg)(),(0,l.iD)("div",o,[d.mobile?((0,l.wg)(),(0,l.iD)("div",r,u)):((0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(p),(0,l._)("div",a,[e.modalActive?((0,l.wg)(),(0,l.j4)(m,{key:0})):(0,l.kq)("",!0),(0,l.Wm)(n.uT,{name:"invoice"},{default:(0,l.w5)((()=>[e.invoiceModal?((0,l.wg)(),(0,l.j4)(I,{key:0})):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(_)])]))])):(0,l.kq)("",!0)}var p=t.p+"img/file-invoice-dollar-solid.58512f81.png";const m=e=>((0,l.dD)("data-v-7935a642"),e=e(),(0,l.Cn)(),e),I={class:"flex"},_=m((()=>(0,l._)("div",{class:"branding flex"},[(0,l._)("img",{src:p,alt:""})],-1))),f=[_];function D(e,i,t,n,o,c){return(0,l.wg)(),(0,l.iD)("header",I,f)}var h={name:"Navigation"},y=t(89);const C=(0,y.Z)(h,[["render",D],["__scopeId","data-v-7935a642"]]);var E=C,g=t(7139),b=t.p+"img/icon-delete.56d292b1.svg",T=t.p+"img/icon-plus.8060a7cf.svg";const x=e=>((0,l.dD)("data-v-2d058028"),e=e(),(0,l.Cn)(),e),w={key:0},O={key:1},k={class:"bill-from flex flex-column"},N=x((()=>(0,l._)("h4",null,"Bill From",-1))),A={class:"input flex flex-column"},P=x((()=>(0,l._)("label",{for:"billerStreetAddress"},"Street Address",-1))),S={class:"location-details flex"},U={class:"input flex flex-column"},L=x((()=>(0,l._)("label",{for:"billerCity"},"City",-1))),V={class:"input flex flex-column"},G=x((()=>(0,l._)("label",{for:"billerZipCode"},"Zip Code",-1))),Z={class:"input flex flex-column"},M=x((()=>(0,l._)("label",{for:"billerCountry"},"Country",-1))),q={class:"bill-to flex flex-column"},z=x((()=>(0,l._)("h4",null,"Bill To",-1))),F={class:"input flex flex-column"},j=x((()=>(0,l._)("label",{for:"clientName"},"Client's Name",-1))),R={class:"input flex flex-column"},W=x((()=>(0,l._)("label",{for:"clientEmail"},"Client's Email",-1))),B={class:"input flex flex-column"},H=x((()=>(0,l._)("label",{for:"clientStreetAddress"},"Street Address",-1))),J={class:"location-details flex"},K={class:"input flex flex-column"},$=x((()=>(0,l._)("label",{for:"clientCity"},"City",-1))),Y={class:"input flex flex-column"},Q=x((()=>(0,l._)("label",{for:"clientZipCode"},"Zip Code",-1))),X={class:"input flex flex-column"},ee=x((()=>(0,l._)("label",{for:"clientCountry"},"Country",-1))),ie={class:"invoice-work flex flex-column"},te={class:"payment flex"},ne={class:"input flex flex-column"},le=x((()=>(0,l._)("label",{for:"invoiceDate"},"Invoice Date",-1))),oe={class:"input flex flex-column"},ce=x((()=>(0,l._)("label",{for:"paymentDueDate"},"Payment Due",-1))),ae={class:"input flex flex-column"},re=x((()=>(0,l._)("label",{for:"paymentTerms"},"Payment Terms",-1))),se=x((()=>(0,l._)("option",{value:"30"}," Net 30 days ",-1))),de=x((()=>(0,l._)("option",{value:"60"}," Net 60 days ",-1))),ue=[se,de],ve={class:"input flex flex-column"},pe=x((()=>(0,l._)("label",{for:"productDescription"},"Product Description",-1))),me={class:"work-items"},Ie=x((()=>(0,l._)("h3",null,"Item List",-1))),_e={class:"item-list"},fe=x((()=>(0,l._)("tr",{class:"table-heading flex"},[(0,l._)("th",{class:"item-name"},"Item name"),(0,l._)("th",{class:"qty"},"Qty"),(0,l._)("th",{class:"price"},"Price"),(0,l._)("th",{class:"total"},"Total")],-1))),De={class:"item-name"},he=["onUpdate:modelValue"],ye={class:"qty"},Ce=["onUpdate:modelValue"],Ee={class:"price"},ge=["onUpdate:modelValue"],be={class:"total flex"},Te=["onClick"],xe=x((()=>(0,l._)("img",{src:T,alt:""},null,-1))),we=(0,l.Uk)(" Add New Item "),Oe=[xe,we],ke={class:"save flex"},Ne={class:"left"},Ae={class:"right flex"},Pe={key:2,type:"submit",class:"purple"};function Se(e,i,t,o,c,a){const r=(0,l.up)("Loading");return(0,l.wg)(),(0,l.iD)("div",{onClick:i[19]||(i[19]=(...e)=>a.checkClick&&a.checkClick(...e)),ref:"invoiceWrap",class:"invoice-wrap flex flex-column"},[(0,l._)("form",{onSubmit:i[18]||(i[18]=(0,n.iM)(((...e)=>a.submitForm&&a.submitForm(...e)),["prevent"])),class:"invoice-content"},[(0,l.wy)((0,l.Wm)(r,null,null,512),[[n.F8,c.loading]]),e.editInvoice?((0,l.wg)(),(0,l.iD)("h1",O,"Edit Invoice")):((0,l.wg)(),(0,l.iD)("h1",w,"New Invoice")),(0,l._)("div",k,[N,(0,l._)("div",A,[P,(0,l.wy)((0,l._)("input",{required:"",type:"text",id:"billerStreetAddress","onUpdate:modelValue":i[0]||(i[0]=e=>c.billerStreetAddress=e)},null,512),[[n.nr,c.billerStreetAddress]])]),(0,l._)("div",S,[(0,l._)("div",U,[L,(0,l.wy)((0,l._)("input",{required:"",type:"text",id:"billerCity","onUpdate:modelValue":i[1]||(i[1]=e=>c.billerCity=e)},null,512),[[n.nr,c.billerCity]])]),(0,l._)("div",V,[G,(0,l.wy)((0,l._)("input",{required:"",type:"text",id:"billerZipCode","onUpdate:modelValue":i[2]||(i[2]=e=>c.billerZipCode=e)},null,512),[[n.nr,c.billerZipCode]])]),(0,l._)("div",Z,[M,(0,l.wy)((0,l._)("input",{required:"",type:"text",id:"billerCountry","onUpdate:modelValue":i[3]||(i[3]=e=>c.billerCountry=e)},null,512),[[n.nr,c.billerCountry]])])])]),(0,l._)("div",q,[z,(0,l._)("div",F,[j,(0,l.wy)((0,l._)("input",{required:"",type:"text",id:"clientName","onUpdate:modelValue":i[4]||(i[4]=e=>c.clientName=e)},null,512),[[n.nr,c.clientName]])]),(0,l._)("div",R,[W,(0,l.wy)((0,l._)("input",{required:"",type:"text",id:"clientEmail","onUpdate:modelValue":i[5]||(i[5]=e=>c.clientEmail=e)},null,512),[[n.nr,c.clientEmail]])]),(0,l._)("div",B,[H,(0,l.wy)((0,l._)("input",{required:"",type:"text",id:"clientStreetAddress","onUpdate:modelValue":i[6]||(i[6]=e=>c.clientStreetAddress=e)},null,512),[[n.nr,c.clientStreetAddress]])]),(0,l._)("div",J,[(0,l._)("div",K,[$,(0,l.wy)((0,l._)("input",{required:"",type:"text",id:"clientCity","onUpdate:modelValue":i[7]||(i[7]=e=>c.clientCity=e)},null,512),[[n.nr,c.clientCity]])]),(0,l._)("div",Y,[Q,(0,l.wy)((0,l._)("input",{required:"",type:"text",id:"clientZipCode","onUpdate:modelValue":i[8]||(i[8]=e=>c.clientZipCode=e)},null,512),[[n.nr,c.clientZipCode]])]),(0,l._)("div",X,[ee,(0,l.wy)((0,l._)("input",{required:"",type:"text",id:"clientCountry","onUpdate:modelValue":i[9]||(i[9]=e=>c.clientCountry=e)},null,512),[[n.nr,c.clientCountry]])])])]),(0,l._)("div",ie,[(0,l._)("div",te,[(0,l._)("div",ne,[le,(0,l.wy)((0,l._)("input",{disabled:"",type:"text",id:"invoiceDate","onUpdate:modelValue":i[10]||(i[10]=e=>c.invoiceDate=e)},null,512),[[n.nr,c.invoiceDate]])]),(0,l._)("div",oe,[ce,(0,l.wy)((0,l._)("input",{disabled:"",type:"text",id:"paymentDueDate","onUpdate:modelValue":i[11]||(i[11]=e=>c.paymentDueDate=e)},null,512),[[n.nr,c.paymentDueDate]])])]),(0,l._)("div",ae,[re,(0,l.wy)((0,l._)("select",{required:"",id:"paymentTerms","onUpdate:modelValue":i[12]||(i[12]=e=>c.paymentTerms=e)},ue,512),[[n.bM,c.paymentTerms]])]),(0,l._)("div",ve,[pe,(0,l.wy)((0,l._)("input",{type:"text",id:"productDescription","onUpdate:modelValue":i[13]||(i[13]=e=>c.productDescription=e)},null,512),[[n.nr,c.productDescription]])]),(0,l._)("div",me,[Ie,(0,l._)("table",_e,[fe,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(c.invoiceItemList,((e,i)=>((0,l.wg)(),(0,l.iD)("tr",{class:"table-item flex",key:i},[(0,l._)("td",De,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":i=>e.itemName=i},null,8,he),[[n.nr,e.itemName]])]),(0,l._)("td",ye,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":i=>e.qty=i},null,8,Ce),[[n.nr,e.qty]])]),(0,l._)("td",Ee,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":i=>e.price=i},null,8,ge),[[n.nr,e.price]])]),(0,l._)("td",be,"$"+(0,g.zw)(e.total=e.qty*e.price),1),(0,l._)("img",{onClick:i=>a.deleteInvoiceItem(e.id),src:b,alt:""},null,8,Te)])))),128))]),(0,l._)("div",{onClick:i[14]||(i[14]=(...e)=>a.addNewInvoiceItem&&a.addNewInvoiceItem(...e)),class:"flex button"},Oe)])]),(0,l._)("div",ke,[(0,l._)("div",Ne,[(0,l._)("button",{type:"button",onClick:i[15]||(i[15]=(...e)=>a.closeInvoice&&a.closeInvoice(...e)),class:"red"},"Cancel")]),(0,l._)("div",Ae,[e.editInvoice?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:0,type:"submit",onClick:i[16]||(i[16]=(...e)=>a.saveDraft&&a.saveDraft(...e)),class:"dark-purple"},"Save Draft")),e.editInvoice?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:1,type:"submit",onClick:i[17]||(i[17]=(...e)=>a.publishInvoice&&a.publishInvoice(...e)),class:"purple"},"Create Invoice")),e.editInvoice?((0,l.wg)(),(0,l.iD)("button",Pe,"Update Invoice")):(0,l.kq)("",!0)])])],32)],512)}var Ue=t(65),Le=t(536),Ve=t(4275),Ge=t(6035);const Ze={apiKey:"AIzaSyBox78IF2KdjeP0PlxbBJRKDoxgFpw-0UM",authDomain:"invoice-app-b96c0.firebaseapp.com",projectId:"invoice-app-b96c0",storageBucket:"invoice-app-b96c0.appspot.com",messagingSenderId:"241927893654",appId:"1:241927893654:web:4d0eac5a45367efec008b7"},Me=(0,Ve.ZF)(Ze),qe=(0,Ge.ad)(Me);var ze=qe;const Fe=e=>((0,l.dD)("data-v-2d986642"),e=e(),(0,l.Cn)(),e),je={class:"loading"},Re=Fe((()=>(0,l._)("span",null,null,-1))),We=[Re];function Be(e,i,t,n,o,c){return(0,l.wg)(),(0,l.iD)("div",je,We)}var He={name:"Loading"};const Je=(0,y.Z)(He,[["render",Be],["__scopeId","data-v-2d986642"]]);var Ke=Je,$e=t.p+"img/icon-arrow-right.b66e4358.svg";const Ye=e=>((0,l.dD)("data-v-12c8b517"),e=e(),(0,l.Cn)(),e),Qe={class:"left flex"},Xe={class:"tracking-number"},ei={class:"due-date"},ii={class:"person"},ti={class:"right flex"},ni={class:"price"},li={key:0},oi={key:1},ci={key:2},ai=Ye((()=>(0,l._)("div",{class:"icon"},[(0,l._)("img",{src:$e,alt:""})],-1)));function ri(e,i,t,n,o,c){const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.j4)(a,{class:"invoice flex",to:{name:"Invoice",params:{invoiceId:t.invoice.invoiceId}}},{default:(0,l.w5)((()=>[(0,l._)("div",Qe,[(0,l._)("span",Xe,"#"+(0,g.zw)(t.invoice.invoiceId),1),(0,l._)("span",ei,(0,g.zw)(t.invoice.paymentDueDate),1),(0,l._)("span",ii,(0,g.zw)(t.invoice.clientName),1)]),(0,l._)("div",ti,[(0,l._)("span",ni,"$"+(0,g.zw)(t.invoice.invoiceTotal),1),(0,l._)("div",{class:(0,g.C_)([{paid:t.invoice.invoicePaid,draft:t.invoice.invoiceDraft,pending:t.invoice.invoicePending},"status-button flex"])},[t.invoice.invoicePaid?((0,l.wg)(),(0,l.iD)("span",li,"Paid")):(0,l.kq)("",!0),t.invoice.invoiceDraft?((0,l.wg)(),(0,l.iD)("span",oi,"Draft")):(0,l.kq)("",!0),t.invoice.invoicePending?((0,l.wg)(),(0,l.iD)("span",ci,"Pending")):(0,l.kq)("",!0)],2),ai])])),_:1},8,["to"])}var si={name:"Invoice",props:["invoice"]};const di=(0,y.Z)(si,[["render",ri],["__scopeId","data-v-12c8b517"]]);var ui=di,vi={name:"InvoiceModal",data(){return{dateOptions:{year:"numeric",month:"short",day:"numeric"},docId:null,billerStreetAddress:null,billerCity:null,billerZipCode:null,billerCountry:null,clientName:null,clientEmail:null,clientStreetAddress:null,clientCity:null,clientZipCode:null,clientCountry:null,invoiceDateUnix:null,invoiceDate:null,paymentTerms:null,paymentDueDateUnix:null,paymentDueDate:null,productDescription:null,invoicePending:null,invoicePaid:null,invoiceDraft:null,invoiceItemList:[],invoiceTotal:0,loading:null}},created(){if(this.editInvoice||(this.invoiceDateUnix=Date.now(),this.invoiceDate=new Date(this.invoiceDateUnix).toLocaleDateString("en-us",this.dateOptions)),this.editInvoice){const e=this.currentInvoiceArray[0];this.docId=e.docId,this.billerStreetAddress=e.billerStreetAddress,this.billerCity=e.billerCity,this.billerZipCode=e.billerZipCode,this.billerCountry=e.billerCountry,this.clientName=e.clientName,this.clientEmail=e.clientEmail,this.clientStreetAddress=e.clientStreetAddress,this.clientCity=e.clientCity,this.clientZipCode=e.clientZipCode,this.clientCountry=e.clientCountry,this.invoiceDateUnix=e.invoiceDateUnix,this.invoiceDate=e.invoiceDate,this.paymentTerms=e.paymentTerms,this.paymentDueDateUnix=e.paymentDueDateUnix,this.paymentDueDate=e.paymentDueDate,this.productDescription=e.productDescription,this.invoicePending=e.invoicePending,this.invoicePaid=e.invoicePaid,this.invoiceDraft=e.invoiceDraft,this.invoiceItemList=e.invoiceItemList,this.invoiceTotal=e.invoiceTotal}},methods:{...(0,Ue.OI)(["TOGGLE_INVOICE","TOGGLE_MODAL","TOGGLE_EDIT_INVOICE"]),...(0,Ue.nv)(["UPDATE_INVOICE","GET_INVOICES"]),checkClick(e){e.target===this.$refs.invoiceWrap&&this.TOGGLE_MODAL()},closeInvoice(){this.TOGGLE_INVOICE(),this.editInvoice&&this.TOGGLE_EDIT_INVOICE()},addNewInvoiceItem(){this.invoiceItemList.push({id:(0,Le.Z)(),itemName:"",qty:"",price:0,total:0})},deleteInvoiceItem(e){this.invoiceItemList=this.invoiceItemList.filter((i=>i.id!==e))},calInvoiceTotal(){this.invoiceTotal=0,this.invoiceItemList.forEach((e=>{this.invoiceTotal+=e.total}))},publishInvoice(){this.invoicePending=!0},saveDraft(){this.invoiceDraft=!0},async uploadInvoice(){this.invoiceItemList.length<=0?alert("Please ensure you filled out work items!"):(this.loading=!0,this.calInvoiceTotal(),await(0,Ge.ET)((0,Ge.hJ)(ze,"invoices"),{invoiceId:(0,Le.Z)(),billerStreetAddress:this.billerStreetAddress,billerCity:this.billerCity,billerZipCode:this.billerZipCode,billerCountry:this.billerCountry,clientName:this.clientName,clientEmail:this.clientEmail,clientStreetAddress:this.clientStreetAddress,clientCity:this.clientCity,clientZipCode:this.clientZipCode,clientCountry:this.clientCountry,invoiceDateUnix:this.invoiceDateUnix,invoiceDate:this.invoiceDate,paymentTerms:this.paymentTerms,paymentDueDateUnix:this.paymentDueDateUnix,paymentDueDate:this.paymentDueDate,productDescription:this.productDescription,invoicePending:this.invoicePending,invoiceDraft:this.invoiceDraft,invoicePaid:this.invoicePaid,invoiceItemList:this.invoiceItemList,invoiceTotal:this.invoiceTotal}),this.loading=!1,this.TOGGLE_INVOICE(),this.GET_INVOICES())},async updateInvoice(){if(this.invoiceItemList.length<=0)return void alert("Please ensure you filled out work items!");this.loading=!0,this.calInvoiceTotal(),await(0,Ge.r7)((0,Ge.JU)(ze,"invoices",this.docId),{billerStreetAddress:this.billerStreetAddress,billerCity:this.billerCity,billerZipCode:this.billerZipCode,billerCountry:this.billerCountry,clientName:this.clientName,clientEmail:this.clientEmail,clientStreetAddress:this.clientStreetAddress,clientCity:this.clientCity,clientZipCode:this.clientZipCode,clientCountry:this.clientCountry,paymentTerms:this.paymentTerms,paymentDueDateUnix:this.paymentDueDateUnix,paymentDueDate:this.paymentDueDate,productDescription:this.productDescription,invoiceItemList:this.invoiceItemList,invoiceTotal:this.invoiceTotal}),this.loading=!1;const e={docId:this.docId,routeId:this.$route.params.invoiceId};this.UPDATE_INVOICE(e)},submitForm(){this.editInvoice?this.updateInvoice():this.uploadInvoice()}},watch:{paymentTerms(){const e=new Date;this.paymentDueDateUnix=e.setDate(e.getDate()+parseInt(this.paymentTerms)),this.paymentDueDate=new Date(this.paymentDueDateUnix).toLocaleString("en-us",this.dateOptions)}},computed:{...(0,Ue.rn)(["editInvoice","currentInvoiceArray"])},components:{Loading:Ke}};const pi=(0,y.Z)(vi,[["render",Se],["__scopeId","data-v-2d058028"]]);var mi=pi;const Ii=e=>((0,l.dD)("data-v-1e1703dc"),e=e(),(0,l.Cn)(),e),_i={class:"modal flex"},fi={class:"modal-content"},Di=Ii((()=>(0,l._)("p",null,"Are you sure you want to exit? Your changes will not be saved?",-1))),hi={class:"actions flex"};function yi(e,i,t,n,o,c){return(0,l.wg)(),(0,l.iD)("div",_i,[(0,l._)("div",fi,[Di,(0,l._)("div",hi,[(0,l._)("button",{onClick:i[0]||(i[0]=(...e)=>c.closeModal&&c.closeModal(...e)),class:"purple"},"Return"),(0,l._)("button",{onClick:i[1]||(i[1]=(...e)=>c.closeInvoice&&c.closeInvoice(...e)),class:"red"},"Close")])])])}var Ci={name:"Modal",methods:{...(0,Ue.OI)(["TOGGLE_MODAL","TOGGLE_INVOICE","TOGGLE_EDIT_INVOICE"]),closeModal(){this.TOGGLE_MODAL()},closeInvoice(){this.TOGGLE_MODAL(),this.TOGGLE_INVOICE(),this.editInvoice&&this.TOGGLE_EDIT_INVOICE()}},computed:{...(0,Ue.rn)(["editInvoice"])}};const Ei=(0,y.Z)(Ci,[["render",yi],["__scopeId","data-v-1e1703dc"]]);var gi=Ei,bi={components:{Navigation:E,InvoiceModal:mi,Modal:gi},data(){return{mobile:null}},created(){this.GET_INVOICES(),this.checkScreen(),window.addEventListener("resize",this.checkScreen)},watch(){},methods:{...(0,Ue.nv)(["GET_INVOICES"]),checkScreen(){const e=window.innerWidth;this.mobile=e<=750}},computed:{...(0,Ue.rn)(["invoiceModal","modalActive","invoicesLoaded"])}};const Ti=(0,y.Z)(bi,[["render",v]]);var xi=Ti,wi=t(678),Oi=t.p+"img/icon-arrow-down.b9de1510.svg",ki=t.p+"img/illustration-empty.7369fe97.svg";const Ni=e=>((0,l.dD)("data-v-5b0f10db"),e=e(),(0,l.Cn)(),e),Ai={class:"home container"},Pi={class:"header flex"},Si={class:"left flex flex-column"},Ui=Ni((()=>(0,l._)("h1",null,"Invoices",-1))),Li={class:"right flex"},Vi=(0,l.Uk)("Filter by status"),Gi={key:0},Zi=Ni((()=>(0,l._)("img",{src:Oi,alt:""},null,-1))),Mi={class:"filter-menu"},qi=Ni((()=>(0,l._)("div",{class:"inner-button flex"},[(0,l._)("img",{src:T,alt:""})],-1))),zi=Ni((()=>(0,l._)("span",null,"New Invoice",-1))),Fi=[qi,zi],ji={key:0},Ri={key:1,class:"empty flex flex-column"},Wi=Ni((()=>(0,l._)("img",{src:ki,alt:""},null,-1))),Bi=Ni((()=>(0,l._)("h3",null,"There is nothing here",-1))),Hi=Ni((()=>(0,l._)("p",null,"Create a new invoice by clicking the New Invoice button and get started",-1))),Ji=[Wi,Bi,Hi];function Ki(e,i,t,o,c,a){const r=(0,l.up)("Invoice");return(0,l.wg)(),(0,l.iD)("div",Ai,[(0,l._)("div",Pi,[(0,l._)("div",Si,[Ui,(0,l._)("span",null,"There are "+(0,g.zw)(e.invoiceData.length)+" total invoices here",1)]),(0,l._)("div",Li,[(0,l._)("div",{onClick:i[4]||(i[4]=(...e)=>a.toggleFilterMenu&&a.toggleFilterMenu(...e)),class:"filter flex"},[(0,l._)("span",null,[Vi,c.filteredInvoice?((0,l.wg)(),(0,l.iD)("span",Gi,": "+(0,g.zw)(c.filteredInvoice),1)):(0,l.kq)("",!0)]),Zi,(0,l.wy)((0,l._)("ul",Mi,[(0,l._)("li",{onClick:i[0]||(i[0]=(...e)=>a.filteredInvoices&&a.filteredInvoices(...e))},"Draft"),(0,l._)("li",{onClick:i[1]||(i[1]=(...e)=>a.filteredInvoices&&a.filteredInvoices(...e))},"Pending"),(0,l._)("li",{onClick:i[2]||(i[2]=(...e)=>a.filteredInvoices&&a.filteredInvoices(...e))},"Paid"),(0,l._)("li",{onClick:i[3]||(i[3]=(...e)=>a.filteredInvoices&&a.filteredInvoices(...e))},"Clear Filter")],512),[[n.F8,c.filterMenu]])]),(0,l._)("div",{onClick:i[5]||(i[5]=(...e)=>a.newInvoice&&a.newInvoice(...e)),class:"button flex"},Fi)])]),e.invoiceData.length>0?((0,l.wg)(),(0,l.iD)("div",ji,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.filteredData,((e,i)=>((0,l.wg)(),(0,l.j4)(r,{invoice:e,key:i},null,8,["invoice"])))),128))])):((0,l.wg)(),(0,l.iD)("div",Ri,Ji))])}var $i={name:"Home",components:{Invoice:ui},data(){return{filterMenu:null,filteredInvoice:null}},methods:{...(0,Ue.OI)(["TOGGLE_INVOICE"]),newInvoice(){this.TOGGLE_INVOICE()},toggleFilterMenu(){this.filterMenu=!this.filterMenu},filteredInvoices(e){"Clear Filter"!==e.target.innerText?this.filteredInvoice=e.target.innerText:this.filteredInvoice=null}},computed:{...(0,Ue.rn)(["invoiceData"]),filteredData(){return this.invoiceData.filter((e=>"Draft"===this.filteredInvoice?!0===e.invoiceDraft:"Pending"===this.filteredInvoice?!0===e.invoicePending:"Paid"===this.filteredInvoice?!0===e.invoicePaid:e))}}};const Yi=(0,y.Z)($i,[["render",Ki],["__scopeId","data-v-5b0f10db"]]);var Qi=Yi,Xi=t.p+"img/icon-arrow-left.80729cc3.svg";const et=e=>((0,l.dD)("data-v-52b87f5d"),e=e(),(0,l.Cn)(),e),it={key:0,class:"invoice-view container"},tt=et((()=>(0,l._)("img",{src:Xi,alt:""},null,-1))),nt=(0,l.Uk)(" Go Back "),lt={class:"header flex"},ot={class:"left flex"},ct=et((()=>(0,l._)("span",null,"Status",-1))),at={key:0},rt={key:1},st={key:2},dt={class:"right flex"},ut={class:"invoice-details flex flex-column"},vt={class:"top flex"},pt={class:"left flex flex-column"},mt=et((()=>(0,l._)("span",null,"#",-1))),It={class:"right flex flex-column"},_t={class:"middle flex"},ft={class:"payment flex flex-column"},Dt=et((()=>(0,l._)("h4",null,"Invoice Date",-1))),ht=et((()=>(0,l._)("h4",null,"Payment Date",-1))),yt={class:"bill flex flex-column"},Ct=et((()=>(0,l._)("h4",null,"Bill to",-1))),Et={class:"send-to flex flex-column"},gt=et((()=>(0,l._)("h4",null,"Sent to",-1))),bt={class:"bottom flex flex-column"},Tt={class:"billing-items"},xt=et((()=>(0,l._)("div",{class:"heading flex"},[(0,l._)("p",null,"Item Name"),(0,l._)("p",null,"QTY"),(0,l._)("p",null,"Price"),(0,l._)("p",null,"Total")],-1))),wt={class:"total flex"},Ot=et((()=>(0,l._)("p",null,"Amount Due",-1)));function kt(e,i,t,n,o,c){const a=(0,l.up)("router-link");return o.currentInvoice?((0,l.wg)(),(0,l.iD)("div",it,[(0,l.Wm)(a,{class:"nav-link flex",to:{name:"Home"}},{default:(0,l.w5)((()=>[tt,nt])),_:1}),(0,l._)("div",lt,[(0,l._)("div",ot,[ct,(0,l._)("div",{class:(0,g.C_)([{paid:o.currentInvoice.invoicePaid,draft:o.currentInvoice.invoiceDraft,pending:o.currentInvoice.invoicePending},"status-button flex"])},[o.currentInvoice.invoicePaid?((0,l.wg)(),(0,l.iD)("span",at,"Paid")):(0,l.kq)("",!0),o.currentInvoice.invoiceDraft?((0,l.wg)(),(0,l.iD)("span",rt,"Draft")):(0,l.kq)("",!0),o.currentInvoice.invoicePending?((0,l.wg)(),(0,l.iD)("span",st,"Pending")):(0,l.kq)("",!0)],2)]),(0,l._)("div",dt,[(0,l._)("button",{onClick:i[0]||(i[0]=(...e)=>c.toggleEditInvoice&&c.toggleEditInvoice(...e)),class:"dark-purple"},"Edit"),(0,l._)("button",{onClick:i[1]||(i[1]=e=>c.deleteInvoice(o.currentInvoice.docId)),class:"red"},"Delete"),o.currentInvoice.invoicePending?((0,l.wg)(),(0,l.iD)("button",{key:0,onClick:i[2]||(i[2]=e=>c.updateStatusToPaid(o.currentInvoice.docId)),class:"green"}," Mark as Paid ")):(0,l.kq)("",!0),o.currentInvoice.invoiceDraft||o.currentInvoice.invoicePaid?((0,l.wg)(),(0,l.iD)("button",{key:1,onClick:i[3]||(i[3]=e=>c.updateStatusToPending(o.currentInvoice.docId)),class:"orange"},"Mark as Pending ")):(0,l.kq)("",!0)])]),(0,l._)("div",ut,[(0,l._)("div",vt,[(0,l._)("div",pt,[(0,l._)("p",null,[mt,(0,l.Uk)((0,g.zw)(o.currentInvoice.invoiceId),1)]),(0,l._)("p",null,(0,g.zw)(o.currentInvoice.productDescription),1)]),(0,l._)("div",It,[(0,l._)("p",null,(0,g.zw)(o.currentInvoice.billerStreetAddress),1),(0,l._)("p",null,(0,g.zw)(o.currentInvoice.billerCity),1),(0,l._)("p",null,(0,g.zw)(o.currentInvoice.billerZipCode),1),(0,l._)("p",null,(0,g.zw)(o.currentInvoice.billerCountry),1)])]),(0,l._)("div",_t,[(0,l._)("div",ft,[Dt,(0,l._)("p",null,(0,g.zw)(o.currentInvoice.invoiceDate),1),ht,(0,l._)("p",null,(0,g.zw)(o.currentInvoice.paymentDueDate),1)]),(0,l._)("div",yt,[Ct,(0,l._)("p",null,(0,g.zw)(o.currentInvoice.clientName),1),(0,l._)("p",null,(0,g.zw)(o.currentInvoice.clientStreetAddress),1),(0,l._)("p",null,(0,g.zw)(o.currentInvoice.clientCity),1),(0,l._)("p",null,(0,g.zw)(o.currentInvoice.clientCountry),1)]),(0,l._)("div",Et,[gt,(0,l._)("p",null,(0,g.zw)(o.currentInvoice.clientEmail),1)])]),(0,l._)("div",bt,[(0,l._)("div",Tt,[xt,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.currentInvoice.invoiceItemList,((e,i)=>((0,l.wg)(),(0,l.iD)("div",{key:i,class:"item flex"},[(0,l._)("p",null,(0,g.zw)(e.itemName),1),(0,l._)("p",null,(0,g.zw)(e.qty),1),(0,l._)("p",null,(0,g.zw)(e.price),1),(0,l._)("p",null,(0,g.zw)(e.total),1)])))),128))]),(0,l._)("div",wt,[Ot,(0,l._)("p",null,(0,g.zw)(o.currentInvoice.invoiceTotal),1)])])])])):(0,l.kq)("",!0)}var Nt={name:"InvoiceView",data(){return{currentInvoice:null}},created(){this.getCurrentInvoice()},methods:{...(0,Ue.OI)(["SET_CURRENT_INVOICE","TOGGLE_EDIT_INVOICE","TOGGLE_INVOICE"]),...(0,Ue.nv)(["DELETE_INVOICE","UPDATE_STATUS_TO_PAID","UPDATE_STATUS_TO_PENDING"]),getCurrentInvoice(){this.SET_CURRENT_INVOICE(this.$route.params.invoiceId),this.currentInvoice=this.currentInvoiceArray[0]},toggleEditInvoice(){this.TOGGLE_EDIT_INVOICE(),this.TOGGLE_INVOICE()},async deleteInvoice(e){await this.DELETE_INVOICE(e),this.$router.push({name:"Home"})},updateStatusToPaid(e){this.UPDATE_STATUS_TO_PAID(e)},updateStatusToPending(e){this.UPDATE_STATUS_TO_PENDING(e)}},computed:{...(0,Ue.rn)(["currentInvoiceArray","editInvoice"])},watch:{editInvoice(){this.editInvoice||(this.currentInvoice=this.currentInvoiceArray[0])}}};const At=(0,y.Z)(Nt,[["render",kt],["__scopeId","data-v-52b87f5d"]]);var Pt=At;const St=[{path:"/",name:"Home",component:Qi},{path:"/invoice/:invoiceId",name:"Invoice",component:Pt}],Ut=(0,wi.p7)({history:(0,wi.PO)("/invoice_app/"),routes:St});var Lt=Ut,Vt=(0,Ue.MT)({state:{invoiceData:[],invoiceModal:null,modalActive:null,invoicesLoaded:null,currentInvoiceArray:null,editInvoice:null},getters:{},mutations:{TOGGLE_INVOICE(e){e.invoiceModal=!e.invoiceModal},TOGGLE_MODAL(e){e.modalActive=!e.modalActive},SET_INVOICE_DATA(e,i){e.invoiceData.push(i)},INVOICES_LOADED(e){e.invoicesLoaded=!0},SET_CURRENT_INVOICE(e,i){e.currentInvoiceArray=e.invoiceData.filter((e=>e.invoiceId===i))},TOGGLE_EDIT_INVOICE(e){e.editInvoice=!e.editInvoice},DELETE_INVOICE(e,i){e.invoiceData=e.invoiceData.filter((e=>e.docId!==i))},UPDATE_STATUS_TO_PAID(e,i){e.invoiceData.forEach((e=>{e.docId===i&&(e.invoicePaid=!0,e.invoicePending=!1)}))},UPDATE_STATUS_TO_PENDING(e,i){e.invoiceData.forEach((e=>{e.docId===i&&(e.invoicePaid=!1,e.invoicePending=!0,e.invoiceDraft=!1)}))}},actions:{async GET_INVOICES({commit:e,state:i}){const t=(0,Ge.hJ)(ze,"invoices"),n=await(0,Ge.PL)(t);n.forEach((t=>{if(!i.invoiceData.some((e=>e.docId===t.id))){const i={docId:t.id,invoiceId:t.data().invoiceId,billerStreetAddress:t.data().billerStreetAddress,billerCity:t.data().billerCity,billerZipCode:t.data().billerZipCode,billerCountry:t.data().billerCountry,clientName:t.data().clientName,clientEmail:t.data().clientEmail,clientStreetAddress:t.data().clientStreetAddress,clientCity:t.data().clientCity,clientZipCode:t.data().clientZipCode,clientCountry:t.data().clientCountry,invoiceDateUnix:t.data().invoiceDateUnix,invoiceDate:t.data().invoiceDate,paymentTerms:t.data().paymentTerms,paymentDueDateUnix:t.data().paymentDueDateUnix,paymentDueDate:t.data().paymentDueDate,productDescription:t.data().productDescription,invoicePending:t.data().invoicePending,invoicePaid:t.data().invoicePaid,invoiceDraft:t.data().invoiceDraft,invoiceItemList:t.data().invoiceItemList,invoiceTotal:t.data().invoiceTotal};e("SET_INVOICE_DATA",i)}})),e("INVOICES_LOADED")},async UPDATE_INVOICE({commit:e,dispatch:i},{docId:t,routeId:n}){e("DELETE_INVOICE",t),await i("GET_INVOICES"),e("TOGGLE_INVOICE"),e("TOGGLE_EDIT_INVOICE"),e("SET_CURRENT_INVOICE",n)},async DELETE_INVOICE({commit:e},i){const t=(0,Ge.JU)(ze,"invoices",i);await(0,Ge.oe)(t),e("DELETE_INVOICE",i)},async UPDATE_STATUS_TO_PAID({commit:e},i){const t=(0,Ge.JU)(ze,"invoices",i);await(0,Ge.r7)(t,{invoicePaid:!0,invoicePending:!1}),e("UPDATE_STATUS_TO_PAID",i)},async UPDATE_STATUS_TO_PENDING({commit:e},i){const t=(0,Ge.JU)(ze,"invoices",i);await(0,Ge.r7)(t,{invoicePaid:!1,invoicePending:!0,invoiceDraft:!1}),e("UPDATE_STATUS_TO_PENDING",i)}},modules:{}});(0,n.ri)(xi).use(Vt).use(Lt).mount("#app")}},i={};function t(n){var l=i[n];if(void 0!==l)return l.exports;var o=i[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(i,n,l,o){if(!n){var c=1/0;for(d=0;d<e.length;d++){n=e[d][0],l=e[d][1],o=e[d][2];for(var a=!0,r=0;r<n.length;r++)(!1&o||c>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[r])}))?n.splice(r--,1):(a=!1,o<c&&(c=o));if(a){e.splice(d--,1);var s=l();void 0!==s&&(i=s)}}return i}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,l,o]}}(),function(){t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,{a:i}),i}}(),function(){t.d=function(e,i){for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){t.p="/invoice_app/"}(),function(){var e={143:0};t.O.j=function(i){return 0===e[i]};var i=function(i,n){var l,o,c=n[0],a=n[1],r=n[2],s=0;if(c.some((function(i){return 0!==e[i]}))){for(l in a)t.o(a,l)&&(t.m[l]=a[l]);if(r)var d=r(t)}for(i&&i(n);s<c.length;s++)o=c[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},n=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(624)}));n=t.O(n)})();
//# sourceMappingURL=app.eb74807b.js.map