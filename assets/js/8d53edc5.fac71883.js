"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[392],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9970:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:10},i="purchaseErrorListener",s={unversionedId:"api-reference/methods/listeners/purchase-error-listener",id:"api-reference/methods/listeners/purchase-error-listener",title:"purchaseErrorListener",description:"Register a callback that gets called when there has been an error with a purchase. Returns a React Native EmitterSubscription on which you can call .remove() to stop receiving updates.",source:"@site/docs/api-reference/methods/listeners/purchase-error-listener.md",sourceDirName:"api-reference/methods/listeners",slug:"/api-reference/methods/listeners/purchase-error-listener",permalink:"/docs/api-reference/methods/listeners/purchase-error-listener",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api-reference/methods/listeners/purchase-error-listener.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"finishTransaction",permalink:"/docs/api-reference/methods/finish-transaction"},next:{title:"purchaseUpdatedListener",permalink:"/docs/api-reference/methods/listeners/purchase-updated-listener"}},c={},p=[{value:"Signature",id:"signature",level:2},{value:"Usage",id:"usage",level:2}],l={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"purchaseerrorlistener"},(0,a.kt)("inlineCode",{parentName:"h1"},"purchaseErrorListener")),(0,a.kt)("p",null,"Register a callback that gets called when there has been an error with a purchase. Returns a React Native ",(0,a.kt)("inlineCode",{parentName:"p"},"EmitterSubscription")," on which you can call ",(0,a.kt)("inlineCode",{parentName:"p"},".remove()")," to stop receiving updates."),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"purchaseErrorListener((error: PurchaseError) => {});\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, {useEffect} from 'react';\nimport {View} from 'react-native';\nimport {purchaseErrorListener} from 'react-native-iap';\n\nconst App = () => {\n  useEffect(() => {\n    const subscription = purchaseErrorListener((error: PurchaseError) => {\n      console.log(error);\n    });\n\n    return () => {\n      subscription.remove();\n    };\n  }, []);\n\n  return <View />;\n};\n")))}u.isMDXComponent=!0}}]);