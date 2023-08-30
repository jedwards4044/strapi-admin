"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3677],{67975:(p,o,t)=>{t.r(o),t.d(o,{default:()=>D});var e=t(53547),n=t(5504),i=t(64593),r=t(86896),c=t(7694),m=t(36364),s=t(46683),u=t(45349),f=t(57713),M=t(79371),T=t(26789),C=t(51541),x=t(42403),v=t(6090),d=t(62351),g=t(78549),L=t(94487),I=t(75336);const A=async()=>{const{get:l}=(0,n.getFetchClient)(),{data:a}=await l("/admin/plugins");return a},N=l=>{const a=(0,n.useNotification)();return(0,I.useQuery)("list-enabled-plugins",()=>A(),{onSuccess(){l&&l()},onError(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},j=()=>{const{formatMessage:l}=(0,r.Z)(),{notifyStatus:a}=(0,s.G)();(0,n.useFocusWhenNavigate)();const P=l({id:"global.plugins",defaultMessage:"Plugins"}),B=()=>{a(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:P}))},{status:h,data:y}=N(B);return h!=="success"&&h!=="error"?e.createElement(u.A,null,e.createElement(f.o,{"aria-busy":!0},e.createElement(n.LoadingIndicatorPage,null))):e.createElement(u.A,null,e.createElement(f.o,null,e.createElement(M.T,{title:P,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(T.D,null,e.createElement(C.i,{colCount:2,rowCount:y?.plugins?.length??0+1},e.createElement(x.h,null,e.createElement(v.Tr,null,e.createElement(d.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(d.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),e.createElement(L.p,null,y.plugins.map(({name:E,displayName:O,description:Z})=>e.createElement(v.Tr,{key:E},e.createElement(d.Td,null,e.createElement(g.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${E}`,defaultMessage:O}))),e.createElement(d.Td,null,e.createElement(g.Z,{textColor:"neutral800"},l({id:`global.plugins.${E}.description`,defaultMessage:Z}))))))))))},D=()=>{const{formatMessage:l}=(0,r.Z)(),a=(0,c.v9)(m._);return e.createElement(n.CheckPagePermissions,{permissions:a.marketplace.main},e.createElement(i.q,{title:l({id:"global.plugins",defaultMessage:"Plugins"})}),e.createElement(j,null))}},45349:(p,o,t)=>{t.d(o,{A:()=>m});var e=t(2790),n=t(88972),i=t(50781);const r=(0,n.default)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,c=(0,n.default)(i.x)`
  overflow-x: hidden;
`,m=({sideNav:s,children:u})=>(0,e.jsxs)(r,{hasSideNav:!!s,children:[s,(0,e.jsx)(c,{paddingBottom:10,children:u})]})}}]);
