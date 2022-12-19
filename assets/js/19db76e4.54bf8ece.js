"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8545],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(3117),n=(a(7294),a(3905));const i={title:"Tidal-vis",id:"tidal-vis"},o=void 0,l={unversionedId:"configuration/tidal-vis",id:"configuration/tidal-vis",title:"Tidal-vis",description:"Tidal-vis is a tool made by Alex McLean to visualize Tidal patterns. This package allows several things:",source:"@site/docs/configuration/tidal_vis.md",sourceDirName:"configuration",slug:"/configuration/tidal-vis",permalink:"/docs/configuration/tidal-vis",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/tidal_vis.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1671484966,formattedLastUpdatedAt:"Dec 19, 2022",frontMatter:{title:"Tidal-vis",id:"tidal-vis"},sidebar:"docs",previous:{title:"The Boot File",permalink:"/docs/configuration/boot-tidal"},next:{title:"Tidal listener",permalink:"/docs/configuration/tidal-listener"}},s={},p=[{value:"Setup tidal-vis",id:"setup-tidal-vis",level:2},{value:"Learn more",id:"learn-more",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tidal-vis")," is a tool made by Alex McLean to visualize ",(0,n.kt)("strong",{parentName:"p"},"Tidal")," patterns. This package allows several things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OSC messages sent to ",(0,n.kt)("strong",{parentName:"li"},"SuperCollider")," to be dynamicly rendered in realtime with a separate window. Demo of realtime visualisation."),(0,n.kt)("li",{parentName:"ul"},"Colour patterns to be rendered as PDF or SVG files. See ",(0,n.kt)("em",{parentName:"li"},"Examples.hs")," in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tidalcycles/tidal-vis"},"GitHub\nrepository")," for more help."),(0,n.kt)("li",{parentName:"ul"},"Colour patterns to be rendered to be rendered dynamicly in separate window. See\n",(0,n.kt)("em",{parentName:"li"},"CycleAnimation.hs")," for more. Demo.")),(0,n.kt)("h2",{id:"setup-tidal-vis"},"Setup tidal-vis"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Comment out any existing lines in ",(0,n.kt)("em",{parentName:"p"},"BootTidal.hs")," that begin with ",(0,n.kt)("inlineCode",{parentName:"p"},"tidal <- startTidal"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the following lines to ",(0,n.kt)("em",{parentName:"p"},"BootTidal.hs"),":"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-haskell"},' -- Target and shape for pattern visualizing.\n patternTarget = Target { oName = "Pattern handler", oAddress = "127.0.0.1", oPort = 5050, oBusPort = Nothing, oLatency = 0.02, oWindow = Nothing, oSchedule = Pre BundleStamp, oHandshake = False }\n patternShape = OSC "/trigger/something" $ Named {requiredArgs = []}\n\n -- Target for playing music via SuperCollider.\n musicTarget = superdirtTarget { oLatency = 0.1, oAddress = "127.0.0.1", oPort = 57120 }\n\n config = defaultConfig {cFrameTimespan = 1/20}\n\n -- Send pattern as OSC both to SuperCollider and to tidal-vis.\n tidal <- startStream config [(musicTarget, [superdirtShape]), (patternTarget, [patternShape])]\n\n -- Send pattern as OSC to SuperCollider only.\n -- tidal <- startTidal musicTarget config\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Install ",(0,n.kt)("strong",{parentName:"li"},"tidal-vis")," and run:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," cabal update\n cabal install tidal-vis\n tidal-vis\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Eval your ",(0,n.kt)("strong",{parentName:"li"},"Tidal")," code.")),(0,n.kt)("h2",{id:"learn-more"},"Learn more"),(0,n.kt)("p",null,"To learn more about ",(0,n.kt)("em",{parentName:"p"},"tidal-vis"),", head to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/tidal-vis"},"GitHub\nrepository")," of the project."))}c.isMDXComponent=!0}}]);