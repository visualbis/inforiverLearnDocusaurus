"use strict";(self.webpackChunkinforiver_docusaurus=self.webpackChunkinforiver_docusaurus||[]).push([[6],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>p});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),d=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=d(e.components);return o.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(t),p=n,f=c["".concat(s,".").concat(p)]||c[p]||m[p]||a;return t?o.createElement(f,l(l({ref:r},u),{},{components:t})):o.createElement(f,l({ref:r},u))}));function p(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=c;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6573:(e,r,t)=>{t.d(r,{Z:()=>i});var o=t(7294),n=t(9960);const a=JSON.parse('[{"id":1,"from":"Export and Import","to":"/learn/modules/module-a/Export%20and%20Import","prev":"","next":"/learn/modules/module-a/audit"},{"id":2,"from":"Audit","to":"/learn/modules/module-a/audit","prev":"/learn/modules/module-a/Export%20and%20Import","next":"/learn/modules/module-a/themes"},{"id":3,"from":"Themes ","to":"/learn/modules/module-a/themes","prev":"/learn/modules/module-a/audit","next":"/learn/modules/module-a/set%20version"},{"id":4,"from":"Set Version","to":"/learn/modules/module-a/set%20version","prev":"/learn/modules/module-a/themes","next":"/learn/modules/module-a/blend"},{"id":5,"from":"Blend","to":"/learn/modules/module-a/blend","prev":"/learn/modules/module-a/set%20version","next":"/learn/modules/module-a/invert"},{"id":6,"from":"Invert","to":"/learn/modules/module-a/invert","prev":"/learn/modules/module-a/blend","next":"/learn/modules/module-a/aggregation"},{"id":7,"from":"Aggregation","to":"/learn/modules/module-a/aggregation","prev":"/learn/modules/module-a/invert","next":"/learn/modules/module-a/report+"},{"id":8,"from":"Report+","to":"/learn/modules/module-a/report+","prev":"/learn/modules/module-a/aggregation","next":"/learn/modules/module-a/template%20row"},{"id":9,"from":"Template row","to":"/learn/modules/module-a/template%20row","prev":"/learn/modules/module-a/report+","next":""}]');let l={id:1,from:"Export and Import",prev:"",next:"/learn/modules/module-a/audit"};const i=()=>{const[e,r]=(0,o.useState)(!1);return o.createElement("div",{className:"dropdown"},o.createElement(n.Z,{to:l.prev},o.createElement("div",{className:""===l.prev?"disable-btn":"button-24",disabled:""===l.prev,onClick:function(){1===l.id?l.id=1:(l.id-=1,a.forEach((e=>{e.id===l.id&&(l.prev=e.prev,l.next=e.next,l.from=e.from)})))}}," \xab Previous")),o.createElement("div",{className:"unit-selection"},o.createElement("button",{className:"dropdown-btn",onClick:t=>r(!e)},o.createElement("div",{className:"unit"}," ",l.from),o.createElement("div",{class:"arrow"}))),e&&o.createElement("div",{className:"dropdown-content"},a.map((e=>o.createElement(n.Z,{to:e.to},o.createElement("div",{className:"dropdown-item",onClick:r=>{l.from=e.from,l.id=e.id,l.next=e.next,l.prev=e.prev}},e.from))))),o.createElement(n.Z,{to:l.next},o.createElement("div",{className:""===l.next?"disable-btn":"button-24",disabled:""===l.next,onClick:function(){l.id===a.length?l.id=a.length:(l.id+=1,console.log(l.id),console.log(a.length),a.forEach((e=>{e.id===l.id&&(l.next=e.next,l.prev=e.prev,l.from=e.from)})))}},"Next \xbb")))}},2359:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var o=t(7462),n=(t(7294),t(3905)),a=t(6010),l=t(4171),i=t(6573);const s={id:"Report+",title:"Report",hide_title:!0},d=void 0,u={unversionedId:"learn/modules/module-a/Report+",id:"learn/modules/module-a/Report+",title:"Report",description:"Inforiver is a powerful, multi-purpose tool and can be used across all functions in an organization. ValQ helps decision-makers and executives simulate various scenarios on-the-fly and analyze outcomes to arrive at actionable decisions. ValQ supports use cases such as what-if simulations, scenario comparisons, planning, forecasting, variance analysis, value driver analysis, and more.",source:"@site/docs/learn/modules/module-a/report.mdx",sourceDirName:"learn/modules/module-a",slug:"/learn/modules/module-a/Report+",permalink:"/inforiverLearnDocusaurus/learn/modules/module-a/Report+",draft:!1,tags:[],version:"current",frontMatter:{id:"Report+",title:"Report",hide_title:!0},sidebar:"sideBar",previous:{title:"Aggregation",permalink:"/inforiverLearnDocusaurus/learn/modules/module-a/Aggregation"},next:{title:"Template Row",permalink:"/inforiverLearnDocusaurus/learn/modules/module-a/Template Row"}},m={},c=[],p={toc:c};function f(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{mdxType:"DropDown"}),(0,n.kt)("div",{className:(0,a.Z)(l.Z.page,"item shadow--md")},(0,n.kt)("h1",{id:"report"},"Report"),(0,n.kt)("p",null,"Inforiver is a powerful, multi-purpose tool and can be used across all functions in an organization. ValQ helps decision-makers and executives simulate various scenarios on-the-fly and analyze outcomes to arrive at actionable decisions. ValQ supports use cases such as what-if simulations, scenario comparisons, planning, forecasting, variance analysis, value driver analysis, and more.")))}f.isMDXComponent=!0},4171:(e,r,t)=>{t.d(r,{Z:()=>o});const o={breadcrumbs:"breadcrumbs_DY_F",breadcrumbsLink:"breadcrumbsLink_fniq",breadcrumbsLinkActive:"breadcrumbsLinkActive_rekA",page:"page_YtDl",unitColumn:"unitColumn_Xs5z"}}}]);