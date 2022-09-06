"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="clearTransactionIOS",c={unversionedId:"api-reference/methods/ios/clear-transaction-ios",id:"api-reference/methods/ios/clear-transaction-ios",title:"clearTransactionIOS",description:"Clear the remaining transactions.",source:"@site/docs/api-reference/methods/ios/clear-transaction-ios.md",sourceDirName:"api-reference/methods/ios",slug:"/api-reference/methods/ios/clear-transaction-ios",permalink:"/docs/api-reference/methods/ios/clear-transaction-ios",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api-reference/methods/ios/clear-transaction-ios.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"clearProductsIOS",permalink:"/docs/api-reference/methods/ios/clear-products-ios"},next:{title:"getPendingPurchasesIOS",permalink:"/docs/api-reference/methods/ios/get-pending-purchases-ios"}},s={},l=[{value:"Signature",id:"signature",level:2},{value:"Usage",id:"usage",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cleartransactionios"},(0,a.kt)("inlineCode",{parentName:"h1"},"clearTransactionIOS")),(0,a.kt)("p",null,"Clear the remaining transactions."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/issues/257"},"https://github.com/dooboolab/react-native-iap/issues/257"),"\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/issues/801"},"https://github.com/dooboolab/react-native-iap/issues/801")),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"clearTransactionIOS(): Promise<void>\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, {useEffect} from 'react';\nimport {View} from 'react-native';\nimport {clearTransactionIOS} from 'react-native-iap';\n\nconst App = () => {\n  useEffect(() => {\n    void clearTransactionIOS();\n  }, [])\n\n  return <View />;\n}\n")))}u.isMDXComponent=!0}}]);