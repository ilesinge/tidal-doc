"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8919],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7029:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const l={title:"Oscillators",id:"oscillators"},o=void 0,i={unversionedId:"reference/oscillators",id:"reference/oscillators",title:"Oscillators",description:"Oscillators are continuously varying patterns. Unless otherwise stated, oscillators give minimum values of 0 and maximum values of 1, and repeat once per cycle.",source:"@site/docs/reference/Oscillators.md",sourceDirName:"reference",slug:"/reference/oscillators",permalink:"/docs/reference/oscillators",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/Oscillators.md",tags:[],version:"current",lastUpdatedAt:1683747122,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{title:"Oscillators",id:"oscillators"},sidebar:"reference",previous:{title:"Mini Notation",permalink:"/docs/reference/mini_notation"},next:{title:"Synthesizers",permalink:"/docs/reference/synthesizers"}},s={},p=[{value:"What is an oscillator?",id:"what-is-an-oscillator",level:2},{value:"Using oscillators",id:"using-oscillators",level:2},{value:"Periodic oscillators",id:"periodic-oscillators",level:3},{value:"Sine",id:"sine",level:4},{value:"Cosine",id:"cosine",level:4},{value:"Square",id:"square",level:4},{value:"Tri",id:"tri",level:4},{value:"Saw",id:"saw",level:4},{value:"Isaw",id:"isaw",level:4},{value:"Smooth",id:"smooth",level:4},{value:"Non-periodic oscillators",id:"non-periodic-oscillators",level:3},{value:"Rand",id:"rand",level:4},{value:"Irand",id:"irand",level:4},{value:"Scaling oscillators",id:"scaling-oscillators",level:2},{value:"Speeding up/down oscillators",id:"speeding-updown-oscillators",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Oscillators are continuously varying patterns. Unless otherwise stated, oscillators give minimum values of ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and maximum values of ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", and repeat once per cycle."),(0,r.kt)("h2",{id:"what-is-an-oscillator"},"What is an oscillator?"),(0,r.kt)("p",null,"Oscillators are continuous patterns, which means they don't have any structure, and must be used with a pattern that does. For example ",(0,r.kt)("inlineCode",{parentName:"p"},'d1 $ sound "bd*8" >| pan sine')," won't work well, because the ",(0,r.kt)("inlineCode",{parentName:"p"},">|")," operator instructs ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," to take structure from the right, and ",(0,r.kt)("inlineCode",{parentName:"p"},"sine")," doesn't have any structure, so ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," will simply trigger events at a fixed rate (depending on your configuration, this might be very fast). ",(0,r.kt)("inlineCode",{parentName:"p"},'d1 $ sound "bd*8" |> pan sine')," is better, because ",(0,r.kt)("inlineCode",{parentName:"p"},"|>")," takes structure from the left, so eight kick drums will play, with pan values sampled from the sine wave for each of the eight events. Where a pattern has the type ",(0,r.kt)("inlineCode",{parentName:"p"},"Fractional a => Pattern a"),", that means that they can be used both as floating point numbers or (rational) time values."),(0,r.kt)("h2",{id:"using-oscillators"},"Using oscillators"),(0,r.kt)("h3",{id:"periodic-oscillators"},"Periodic oscillators"),(0,r.kt)("h4",{id:"sine"},"Sine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: sine :: Fractional a => Pattern a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sine")," is a sinusoidal wave. Playing this example, you should hear the sound slowly moving from your left to your right speaker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*8" # pan sine\n')),(0,r.kt)("h4",{id:"cosine"},"Cosine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: cosine :: Fractional a => Pattern a\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"cosine")," wave, is a ",(0,r.kt)("inlineCode",{parentName:"p"},"sine")," shifted in time by a quarter of a cycle. It sounds similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sine")," above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*8" # pan cosine # speed (sine + 0.5)\n')),(0,r.kt)("h4",{id:"square"},"Square"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: square :: Fractional a => Pattern a\n")),(0,r.kt)("p",null,"A Square wave, starting at 0, then going up to 1 halfway through a cycle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*8" # pan (cat [square, sine])\n')),(0,r.kt)("h4",{id:"tri"},"Tri"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: tri :: Fractional a => Pattern a\n")),(0,r.kt)("p",null,"A triangle wave, starting at 0, then linearly rising to 1 halfway through a cycle, then down again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*16" # speed (slow 2 $ range 0.5 2 tri)\n')),(0,r.kt)("h4",{id:"saw"},"Saw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: saw :: Fractional a => Pattern a\n")),(0,r.kt)("p",null,"A sawtooth wave starting at 0, then linearly rising to 1 over one cycle, then jumping back to 0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*8" # pan (slow 2 saw)\n')),(0,r.kt)("h4",{id:"isaw"},"Isaw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: isaw :: Fractional a => Pattern a\n")),(0,r.kt)("p",null,"An inverted sawtooth, starting at 1, then linearly falling to 0 over one cycle, then jumping back to 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*8" # pan (slow 2 isaw)\n')),(0,r.kt)("h4",{id:"smooth"},"Smooth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: smooth :: Fractional a => Pattern a -> Pattern a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Smooth")," receives a pattern of numbers and linearly goes from one to the next, passing through all of them. As time is cycle-based, after reaching the last number in the pattern, it will smoothly go to the first one again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*4" # pan (slow 4 $ smooth "0 1 0.5 1")\n')),(0,r.kt)("p",null,"Note how the sound goes gradually from left to right, then to the center, then to the right again, and finally comes back to the left."),(0,r.kt)("h3",{id:"non-periodic-oscillators"},"Non-periodic oscillators"),(0,r.kt)("h4",{id:"rand"},"Rand"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: rand :: Fractional a => Pattern a\n")),(0,r.kt)("p",null,"An infinitely detailed stream of (pseudo-)random numbers. See the ",(0,r.kt)("inlineCode",{parentName:"p"},"rand")," reference page for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd*8" # pan rand\n')),(0,r.kt)("h4",{id:"irand"},"Irand"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: irand :: Num a => Pattern Int -> Pattern a\n")),(0,r.kt)("p",null,"A function from an integer (giving the maximum) to a stream of (pseudo-)random integer numbers. For more details, head to the ",(0,r.kt)("inlineCode",{parentName:"p"},"rand")," reference page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum*8" # n (irand 8)\n')),(0,r.kt)("h2",{id:"scaling-oscillators"},"Scaling oscillators"),(0,r.kt)("p",null,"By default, the oscillators will output values scaled between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". You might want to use bigger or smaller values. You might want, for instance, to modulate the frequency of a filter or select a random midi note between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"127"),". To do so, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $\xa0s "bass:5*8" # lpf (range 200 5000 $\xa0sine)\n')),(0,r.kt)("h2",{id:"speeding-updown-oscillators"},"Speeding up/down oscillators"),(0,r.kt)("p",null,"Oscillators are patterns! It means that you can speed them up or down using the same function as usual (",(0,r.kt)("inlineCode",{parentName:"p"},"fast"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"slow"),", etc..):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $\xa0s "bass:5*8" # lpf (slow 4 $ range 200 5000 $\xa0sine)\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Notice that most of the time, the speed up/down will be in sync with your pattern. How convenient!")))}d.isMDXComponent=!0}}]);