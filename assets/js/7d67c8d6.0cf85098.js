"use strict";(self.webpackChunkinforiver_docusaurus=self.webpackChunkinforiver_docusaurus||[]).push([[320],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>p});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),p=o,v=c["".concat(s,".").concat(p)]||c[p]||m[p]||a;return n?t.createElement(v,l(l({ref:r},u),{},{components:n})):t.createElement(v,l({ref:r},u))}));function p(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6573:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(7294),o=n(9960);const a=JSON.parse('[{"id":1,"from":"Export and Import","to":"/learn/modules/module-a/Export%20and%20Import","prev":"","next":"/learn/modules/module-a/audit"},{"id":2,"from":"Audit","to":"/learn/modules/module-a/audit","prev":"/learn/modules/module-a/Export%20and%20Import","next":"/learn/modules/module-a/themes"},{"id":3,"from":"Themes ","to":"/learn/modules/module-a/themes","prev":"/learn/modules/module-a/audit","next":"/learn/modules/module-a/set%20version"},{"id":4,"from":"Set Version","to":"/learn/modules/module-a/set%20version","prev":"/learn/modules/module-a/themes","next":"/learn/modules/module-a/blend"},{"id":5,"from":"Blend","to":"/learn/modules/module-a/blend","prev":"/learn/modules/module-a/set%20version","next":"/learn/modules/module-a/invert"},{"id":6,"from":"Invert","to":"/learn/modules/module-a/invert","prev":"/learn/modules/module-a/blend","next":"/learn/modules/module-a/aggregation"},{"id":7,"from":"Aggregation","to":"/learn/modules/module-a/aggregation","prev":"/learn/modules/module-a/invert","next":"/learn/modules/module-a/report+"},{"id":8,"from":"Report+","to":"/learn/modules/module-a/report+","prev":"/learn/modules/module-a/aggregation","next":"/learn/modules/module-a/template%20row"},{"id":9,"from":"Template row","to":"/learn/modules/module-a/template%20row","prev":"/learn/modules/module-a/report+","next":""}]');let l={id:1,from:"Export and Import",prev:"",next:"/learn/modules/module-a/audit"};const i=()=>{const[e,r]=(0,t.useState)(!1);return t.createElement("div",{className:"dropdown"},t.createElement(o.Z,{to:l.prev},t.createElement("div",{className:""===l.prev?"disable-btn":"button-24",disabled:""===l.prev,onClick:function(){1===l.id?l.id=1:(l.id-=1,a.forEach((e=>{e.id===l.id&&(l.prev=e.prev,l.next=e.next,l.from=e.from)})))}}," \xab Previous")),t.createElement("div",{className:"unit-selection"},t.createElement("button",{className:"dropdown-btn",onClick:n=>r(!e)},t.createElement("div",{className:"unit"}," ",l.from),t.createElement("div",{class:"arrow"}))),e&&t.createElement("div",{className:"dropdown-content"},a.map((e=>t.createElement(o.Z,{to:e.to},t.createElement("div",{className:"dropdown-item",onClick:r=>{l.from=e.from,l.id=e.id,l.next=e.next,l.prev=e.prev}},e.from))))),t.createElement(o.Z,{to:l.next},t.createElement("div",{className:""===l.next?"disable-btn":"button-24",disabled:""===l.next,onClick:function(){l.id===a.length?l.id=a.length:(l.id+=1,console.log(l.id),console.log(a.length),a.forEach((e=>{e.id===l.id&&(l.next=e.next,l.prev=e.prev,l.from=e.from)})))}},"Next \xbb")))}},700:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var t=n(7462),o=(n(7294),n(3905)),a=n(6010),l=n(4171),i=n(6573);const s={id:"Invert",title:"Invert",hide_title:!0},d=void 0,u={unversionedId:"learn/modules/module-a/Invert",id:"learn/modules/module-a/Invert",title:"Invert",description:"Inforiver is a powerful, multi-purpose tool and can be used across all functions in an organization. ValQ helps decision-makers and executives simulate various scenarios on-the-fly and analyze outcomes to arrive at actionable decisions. ValQ supports use cases such as what-if simulations, scenario comparisons, planning, forecasting, variance analysis, value driver analysis, and more.",source:"@site/docs/learn/modules/module-a/invert.mdx",sourceDirName:"learn/modules/module-a",slug:"/learn/modules/module-a/Invert",permalink:"/inforiverLearnDocusaurus/learn/modules/module-a/Invert",draft:!1,tags:[],version:"current",frontMatter:{id:"Invert",title:"Invert",hide_title:!0},sidebar:"sideBar",previous:{title:"Blend",permalink:"/inforiverLearnDocusaurus/learn/modules/module-a/Blend"},next:{title:"Aggregation",permalink:"/inforiverLearnDocusaurus/learn/modules/module-a/Aggregation"}},m={},c=[],p={toc:c};function v(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"DropDown"}),(0,o.kt)("div",{className:(0,a.Z)(l.Z.page,"item shadow--md")},(0,o.kt)("h1",{id:"invert"},"Invert"),(0,o.kt)("p",null,"Inforiver is a powerful, multi-purpose tool and can be used across all functions in an organization. ValQ helps decision-makers and executives simulate various scenarios on-the-fly and analyze outcomes to arrive at actionable decisions. ValQ supports use cases such as what-if simulations, scenario comparisons, planning, forecasting, variance analysis, value driver analysis, and more.")))}v.isMDXComponent=!0},4171:(e,r,n)=>{n.d(r,{Z:()=>t});const t={breadcrumbs:"breadcrumbs_DY_F",breadcrumbsLink:"breadcrumbsLink_fniq",breadcrumbsLinkActive:"breadcrumbsLinkActive_rekA",page:"page_YtDl",unitColumn:"unitColumn_Xs5z"}}}]);