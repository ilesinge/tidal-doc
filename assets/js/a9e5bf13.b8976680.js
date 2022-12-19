"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7680],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),i=u(a),d=l,k=i["".concat(p,".").concat(d)]||i[d]||m[d]||r;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[i]="string"==typeof e?e:l,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},976:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>i,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(3117),l=(a(7294),a(3905));const r={title:"Manipulating samples",permalink:"wiki/Manipulating_samples/",layout:"wiki"},s=void 0,o={unversionedId:"Tidal_workshop_worksheet/Manipulating_samples",id:"Tidal_workshop_worksheet/Manipulating_samples",title:"Manipulating samples",description:"So far we've just used short samples. Longer samples can",source:"@site/docs/Tidal_workshop_worksheet/Manipulating_samples.md",sourceDirName:"Tidal_workshop_worksheet",slug:"/Tidal_workshop_worksheet/Manipulating_samples",permalink:"/docs/Tidal_workshop_worksheet/Manipulating_samples",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/Tidal_workshop_worksheet/Manipulating_samples.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1671484966,formattedLastUpdatedAt:"Dec 19, 2022",frontMatter:{title:"Manipulating samples",permalink:"wiki/Manipulating_samples/",layout:"wiki"}},p={},u=[],c={toc:u};function i(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("languages",null),(0,l.kt)("translate",null," So far we've just used short samples. Longer samples can cause us some problems if we\u2019re not careful. Let\u2019s see what happens with a long sample",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bev"\n-- wait a bit, then..\nhush\n')),(0,l.kt)("p",null,"As you can hear, Tidal will keep triggering the sample each cycle, even\nif it\u2019s very long. Even if you stop the pattern playing, you will still\nneed to listen while the samples play out."),(0,l.kt)("p",null,"You can use"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},"cut\n")),(0,l.kt)("p",null,"to truncate the sample when the next one is triggered"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bev" # cut 1\n')),(0,l.kt)("p",null,"The number in \u2018cut\u2019 define a group, so you can play with interference\nacross different patterns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bev ~" # cut 1\nd2 $ slow 4 $ sound "pebbles ~" # cut 1\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},"legato\n")),(0,l.kt)("p",null,"also truncates samples, but using a fixed length"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bev ~ bev ~" # legato 1\n')),(0,l.kt)("p",null,"We can also"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},"chop\n")),(0,l.kt)("p",null,"samples for a \u2018granular synthesis' effect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ chop 32 $ sound "bev"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},"striate\n")),(0,l.kt)("p",null,"is similar to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},"chop\n")),(0,l.kt)("p",null,"but organises the playback in a different way"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ slow 4 $ chop 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"\nd1 $ slow 4 $ striate 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},"randslice\n")),(0,l.kt)("p",null,"chops the sample into pieces and then plays back a random one each cycle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ randslice 32 $ sound "bev"\n')),(0,l.kt)("p",null,"We can also use"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},"loopAt\n")),(0,l.kt)("p",null,"to fit samples to a set number of cycles:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ loopAt 8 $ sound "bev"\n')),(0,l.kt)("p",null,"As always we can add patterns and transformations to these functions, or\ncombine them for interesting effects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ loopAt "<8 4 16>" $ chop 64 $  sound "bev*4" # cut 1\nd1 $ rev $ loopAt 8 $ chop 128 $ sound "bev"\n'))))}i.isMDXComponent=!0}}]);