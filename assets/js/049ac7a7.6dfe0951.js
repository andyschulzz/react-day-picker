"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6488],{2020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(2685),o=n(1244),i=(n(7378),n(5318)),a=["components"],p={id:"RowProps",title:"Interface: RowProps",sidebar_label:"RowProps",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/RowProps",id:"api/interfaces/RowProps",title:"Interface: RowProps",description:"The props for the Row component.",source:"@site/docs/api/interfaces/RowProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/RowProps",permalink:"/api/interfaces/RowProps",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RowProps",title:"Interface: RowProps",sidebar_label:"RowProps",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"NavigationContextValue",permalink:"/api/interfaces/NavigationContextValue"},next:{title:"SelectMultipleContextValue",permalink:"/api/interfaces/SelectMultipleContextValue"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"dates",id:"dates",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"displayMonth",id:"displaymonth",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"weekNumber",id:"weeknumber",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The props for the ",(0,i.kt)("a",{parentName:"p",href:"/api/functions/Row"},"Row")," component."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"dates"},"dates"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dates"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),"[]"),(0,i.kt)("p",null,"The days contained in the week."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/3602959f/packages/react-day-picker/src/components/Row/Row.tsx#L18"},"components/Row/Row.tsx:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"displaymonth"},"displayMonth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"displayMonth"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")),(0,i.kt)("p",null,"The month where the row is displayed."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/3602959f/packages/react-day-picker/src/components/Row/Row.tsx#L14"},"components/Row/Row.tsx:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"weeknumber"},"weekNumber"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"weekNumber"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The number of the week to render."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/3602959f/packages/react-day-picker/src/components/Row/Row.tsx#L16"},"components/Row/Row.tsx:16")))}f.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);