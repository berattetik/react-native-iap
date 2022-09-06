"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const o={},r="Frequently Asked Questions",p={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"How can a user cancel a subscription in my app?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"validateReceiptAmazon",permalink:"/docs/api-reference/methods/amazon/validate-receipt-amazon"},next:{title:"Available Purchase",permalink:"/docs/old-to-remove-available-purchase"}},l={},s=[{value:"How can a user cancel a subscription in my app?",id:"how-can-a-user-cancel-a-subscription-in-my-app",level:3},{value:"Can I buy product right away skipping fetching products if I already know productId?",id:"can-i-buy-product-right-away-skipping-fetching-products-if-i-already-know-productid",level:3},{value:"How do I validate receipt in iOS?",id:"how-do-i-validate-receipt-in-ios",level:3},{value:"How do I validate receipt in Android?",id:"how-do-i-validate-receipt-in-android",level:3},{value:"How to make consumable product in Android developer mode?",id:"how-to-make-consumable-product-in-android-developer-mode",level:3},{value:"How do I use <code>react-native-iap</code> in Expo?",id:"how-do-i-use-react-native-iap-in-expo",level:3},{value:"How do I handle promoted products in iOS?",id:"how-do-i-handle-promoted-products-in-ios",level:3},{value:"Native",id:"native",level:4},{value:"JavaScript",id:"javascript",level:4},{value:"Using Face ID &amp; Touch to checkout on iOS",id:"using-face-id--touch-to-checkout-on-ios",level:3},{value:"Get products has empty list",id:"get-products-has-empty-list",level:3}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.kt)("h3",{id:"how-can-a-user-cancel-a-subscription-in-my-app"},"How can a user cancel a subscription in my app?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For both iOS and Android your users cannot cancel subscriptions inside your app. You need to direct your users to iTunes/the App Store or Google Play.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can do this on iOS 12 or later (for earlier iOS versions, use ",(0,i.kt)("a",{parentName:"p",href:"https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/manageSubscriptions"},"this URL"),"):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Linking.openURL('https://apps.apple.com/account/subscriptions');\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can do this on Android:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Linking.openURL('https://play.google.com/store/account/subscriptions?package=YOUR_PACKAGE_NAME&sku=YOUR_PRODUCT_ID\n")),(0,i.kt)("p",{parentName:"li"},"(change ",(0,i.kt)("inlineCode",{parentName:"p"},"YOUR_PACKAGE_NAME")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"YOUR_PRODUCT_ID"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"More on ",(0,i.kt)("inlineCode",{parentName:"p"},"Linking")," in React Native: ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/linking"},"https://facebook.github.io/react-native/docs/linking")))),(0,i.kt)("h3",{id:"can-i-buy-product-right-away-skipping-fetching-products-if-i-already-know-productid"},"Can I buy product right away skipping fetching products if I already know productId?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You could only in Android in ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-iap@^2.*"),"."),(0,i.kt)("p",{parentName:"li"},"However, now you should always ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchProducts")," first in both platforms.\nIt is because Android ",(0,i.kt)("inlineCode",{parentName:"p"},"BillingClient")," has been updated ",(0,i.kt)("inlineCode",{parentName:"p"},"billingFlowParams"),"\nto include ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/com/android/billingclient/api/SkuDetails"},"SkuDetails")," instead ",(0,i.kt)("inlineCode",{parentName:"p"},"sku")," string which is\nhard to share between ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"android"),"."),(0,i.kt)("p",{parentName:"li"},"It happened since ",(0,i.kt)("inlineCode",{parentName:"p"},"com.android.billingclient:billing:2.0.*"),"."),(0,i.kt)("p",{parentName:"li"},"Therefore we've planned to store items to be fetched in Android before\nrequesting purchase from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native")," side, and you should always fetch\nlist of items to \u201cpurchase\u201d before requesting purchase."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Related ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/p/e4b55491479b"},"blog"),"."),(0,i.kt)("li",{parentName:"ul"},"Related issue ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/283"},"#283"),".")))),(0,i.kt)("h3",{id:"how-do-i-validate-receipt-in-ios"},"How do I validate receipt in iOS?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Official doc is ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/library/content/releasenotes/General/ValidateAppStoreReceipt/Chapters/ValidateRemotely.html"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"Resolved issues in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/203"},"#203"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/237"},"#237"),".")),(0,i.kt)("h3",{id:"how-do-i-validate-receipt-in-android"},"How do I validate receipt in Android?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Official doc is ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/google/play/billing/billing_library_overview"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"I've developed this feature for other developers to contribute easily who are\naware of these things. The doc says you can also get the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessToken")," via\nplay console without any of your backend server."),(0,i.kt)("p",{parentName:"li"},"You can get this by following process:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open ",(0,i.kt)("a",{parentName:"li",href:"https://play.google.com/apps/publish/"},"Google Play Console"),">"," Select your app\n",">"," Development tools\n",">"," Services & APIs\n",">"," Find in \u201cYour license key for this application\u201d.\n",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/27132443"},"reference"),".")))),(0,i.kt)("h3",{id:"how-to-make-consumable-product-in-android-developer-mode"},"How to make consumable product in Android developer mode?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are facing ",(0,i.kt)("inlineCode",{parentName:"li"},'"You already own this item"')," on developer(test) mode,\nyou might check related issue ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/126"},"#126"))),(0,i.kt)("h3",{id:"how-do-i-use-react-native-iap-in-expo"},"How do I use ",(0,i.kt)("inlineCode",{parentName:"h3"},"react-native-iap")," in Expo?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You should detach from ",(0,i.kt)("inlineCode",{parentName:"li"},"expo")," and get ",(0,i.kt)("inlineCode",{parentName:"li"},"expokit")," out of it."),(0,i.kt)("li",{parentName:"ul"},"Releated issue in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/174"},"#174"),".")),(0,i.kt)("h3",{id:"how-do-i-handle-promoted-products-in-ios"},"How do I handle promoted products in iOS?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Offical doc is ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/app-store/promoting-in-app-purchases/"},"here"),".")),(0,i.kt)("h4",{id:"native"},"Native"),(0,i.kt)("p",null,"This is (as of version 8.6.0) handled automatically in the native code. No additional native setup is needed"),(0,i.kt)("h4",{id:"javascript"},"JavaScript"),(0,i.kt)("p",null,"Somewhere early in your app's lifecycle, add a listener for the ",(0,i.kt)("inlineCode",{parentName:"p"},"iap-promoted-product")," event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {NativeModules, NativeEventEmitter} from 'react-native';\nconst {RNIapIos} = NativeModules;\nconst RNIapEmitter = new NativeEventEmitter(RNIapIos);\n\nRNIapEmitter.addListener('iap-promoted-product', async () => {\n  // Check if there's a persisted promoted product\n  const productId = await RNIap.getPromotedProductIOS();\n  if (productId !== null) {\n    // You may want to validate the product ID against your own SKUs\n    try {\n      await RNIap.buyPromotedProductIOS(); // This will trigger the App Store purchase process\n    } catch (error) {\n      console.warn(error);\n    }\n  }\n});\n")),(0,i.kt)("p",null,"Then call ",(0,i.kt)("inlineCode",{parentName:"p"},"initConnection")," (see above)"),(0,i.kt)("h3",{id:"using-face-id--touch-to-checkout-on-ios"},"Using Face ID & Touch to checkout on iOS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After you have completed the setup and set your deployment target to ",(0,i.kt)("inlineCode",{parentName:"p"},"iOS 12"),",\nFaceID and Touch to purchase will be activated by default in production."),(0,i.kt)("p",{parentName:"li"},"Please note that in development or TestFlight, it will ",(0,i.kt)("strong",{parentName:"p"},"NOT")," use FaceID/Touch\nto checkout because they are using the Sandbox environment."))),(0,i.kt)("h3",{id:"get-products-has-empty-list"},"Get products has empty list"),(0,i.kt)("p",null,"Here are some resources you might get help out of."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"iOS"),", check if you\u2019ve agreed on taxes\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/issues/1272#issuecomment-800131501"},"https://github.com/dooboolab/react-native-iap/issues/1272#issuecomment-800131501"),". Also, you may try to add storekit.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Android, hope you to check this one.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/issues/124#issuecomment-386593185"},"https://github.com/dooboolab/react-native-iap/issues/124#issuecomment-386593185")))))}d.isMDXComponent=!0}}]);