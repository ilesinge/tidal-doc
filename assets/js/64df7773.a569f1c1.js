"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4792],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var l=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},s=Object.keys(e);for(l=0;l<s.length;l++)n=s[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=l.createContext({}),o=function(e){var a=l.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=o(e.components);return l.createElement(u.Provider,{value:a},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},i=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,s=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),i=t,m=d["".concat(u,".").concat(i)]||d[i]||k[i]||s;return n?l.createElement(m,r(r({ref:a},c),{},{components:n})):l.createElement(m,r({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=n.length,r=new Array(s);r[0]=i;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p[d]="string"==typeof e?e:t,r[1]=p;for(var o=2;o<s;o++)r[o]=n[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}i.displayName="MDXCreateElement"},9372:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var l=n(3117),t=(n(7294),n(3905));const s={title:"Basic Patterns",permalink:"wiki/Basic_Patterns/",layout:"wiki"},r=void 0,p={unversionedId:"Tidal_workshop_worksheet/Basic_Patterns",id:"Tidal_workshop_worksheet/Basic_Patterns",title:"Basic Patterns",description:"The basic format for making sound in Tidal looks like this",source:"@site/docs/Tidal_workshop_worksheet/Basic_Patterns.md",sourceDirName:"Tidal_workshop_worksheet",slug:"/Tidal_workshop_worksheet/Basic_Patterns",permalink:"/docs/Tidal_workshop_worksheet/Basic_Patterns",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/Tidal_workshop_worksheet/Basic_Patterns.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1671484966,formattedLastUpdatedAt:"Dec 19, 2022",frontMatter:{title:"Basic Patterns",permalink:"wiki/Basic_Patterns/",layout:"wiki"}},u={},o=[{value:"Make a sequence",id:"make-a-sequence",level:2},{value:"Effects",id:"effects",level:2},{value:"feeling brave ?",id:"feeling-brave-",level:2},{value:"Continuous patterns",id:"continuous-patterns",level:2}],c={toc:o};function d(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,l.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"The basic format for making sound in Tidal looks like this"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum"\n')),(0,t.kt)("p",null,"You can stop making a sound using"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"silence\n")),(0,t.kt)("p",null,":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"d1 $ silence\n")),(0,t.kt)("p",null,"Pick a different sound from the same set, with ","`",":","`"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum:1"\n')),(0,t.kt)("p",null,"Some of the samples which come with Tidal are listed below. Try some\nout!"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"flick sid can metal future gabba sn mouth co gretsch mt arp h cp\ncr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx\ndiphone2 house off ht tink perc bd industrial pluck trump printshort\njazz voodoo birds3 procshort blip drum jvbass psr wobble drumtraks koy\nrave bottle kurt latibro rm sax lighter lt arpy feel less stab ul\n")),(0,t.kt)("p",null,"You can see what other sounds there are (or add your own) by looking in\nthe ",(0,t.kt)("em",{parentName:"p"},"Dirt-Samples")," folder. You can find it via the SuperCollider menu:\n'File ",">"," Open user support directory ",">"," downloaded-quarks ",">","\nDirt-Samples'."),(0,t.kt)("h2",{id:"make-a-sequence"},"Make a sequence"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd hh sn hh"\n')),(0,t.kt)("p",null,"The more steps in the sequence, the faster it goes:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd bd hh bd sn bd hh bd"\n')),(0,t.kt)("p",null,"This is because of the way Tidal handles time. There is a universal\n\u2018cycle\u2019 (sort of like a musical 'bar') which is always running. Tidal\nwill play all of the sounds between the speech marks in one cycle,\nunless we tell it not to (we\u2019ll learn how to do that later). You\u2019ll also\nnotice Tidal will space the sounds out evenly within the cycle Which\nmeans we can end up with polyrhythmic structures (more on those later)."),(0,t.kt)("p",null,"We can change the length of the cycle using"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"setcps\n")),(0,t.kt)("p",null,"(where cps stands for cycles per second) - this is a bit like bpm (beats\nper minute)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"setcps 0.6\n")),(0,t.kt)("p",null,"You can use d1, d2, d3...d9 to play multiple sequences at the same time"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d2 $ sound "sn sn:2 sn bd sn"\n')),(0,t.kt)("p",null,"You can stop all the running patterns with"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"hush\n")),(0,t.kt)("p",null,"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"hush\n")),(0,t.kt)("p",null,"You can pause everything by changing the cycle length to a negative\nnumber (remember to put negative numbers in brackets)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"setcps (-1)\n")),(0,t.kt)("p",null,"Start it up again with a positive number"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"setcps 0.6\n")),(0,t.kt)("p",null,"Or you can ","`","solo","`"," one channel:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "arpy cp arpy:2"\n\n\x3c!--T:84--\x3e\nd2 $ sound "sn sn:2 bd sn"\n\n\x3c!--T:85--\x3e\nsolo 2\n\n\x3c!--T:86--\x3e\n-- now only the second pattern will be playing\n\n\x3c!--T:87--\x3e\nunsolo 2\n\n\x3c!--T:88--\x3e\n-- now both will be playing, again\n')),(0,t.kt)("p",null,"Let add some more variety to our sequences."),(0,t.kt)("p",null,"Add a silence/rest with"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"~\n")),(0,t.kt)("p",null,":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd ~ sn:3 bd sn:5 ~ bd:2 sn:2"\n')),(0,t.kt)("p",null,"Fit a subsequence into a step with square brackets:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd [bd cp] bd bd"\n')),(0,t.kt)("p",null,"This can make for flexible time signatures:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "[bd bd sn:5] [bd sn:3]"\n')),(0,t.kt)("p",null,"You can put subsequences inside subsequences:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "[[bd bd] bd sn:5] [bd sn:3]"\n')),(0,t.kt)("p",null,"Keep going.."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"\n')),(0,t.kt)("p",null,"You can repeat a step with"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"*\n")),(0,t.kt)("p",null,":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd sd*2"\n')),(0,t.kt)("p",null,"This works with subsequences too:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd [sd cp]*2"\n')),(0,t.kt)("p",null,"Or you can do the opposite using"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"/\n")),(0,t.kt)("p",null,":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd sn/2"\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd [sn cp]/2"\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"*\n")),(0,t.kt)("p",null,"works by 'speeding up' a step to play it multiple times."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"/\n")),(0,t.kt)("p",null,"works by 'slowing it down'."),(0,t.kt)("p",null,"We can also schedule patterns across cycles using"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"<\n")),(0,t.kt)("p",null,"and"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},">\n")),(0,t.kt)("p",null,":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd <sd cp arpy>"\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "<bd sn> <sd [cp cp]> <bd [cp cp]>"\n')),(0,t.kt)("h2",{id:"effects"},"Effects"),(0,t.kt)("p",null,"Tidal has lots of effects we can use to change the way things sound."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"vowel\n")),(0,t.kt)("p",null,"is a filter which adds a vowel sound -- try a, e, i, o and u"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum drum drum drum" # vowel "a"\n')),(0,t.kt)("p",null,"We create patterns of effects in much the same way we create patterns of\nsounds. We call these effect and sound patterns 'control patterns'. So"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o e e"\n')),(0,t.kt)("p",null,'Remember that we can use "\\<',">",'" to schedule across cycles'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum drum drum drum" # vowel "<a o e e>"\n')),(0,t.kt)("p",null,"You can add a non-vowel letter to pause the vowel effect"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o p p"\n')),(0,t.kt)("p",null,"Tidal does its best to map patterns across to one another"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o e"\n')),(0,t.kt)("p",null,"The structure comes from the left - try swapping the parameters"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ vowel "a o ~ i" # sound "drum"\n')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Health warning")," - This is one of the changes coming up in the new\nTidal - you will be able to control which side the structure comes from.\n. Or combine structure from ",(0,t.kt)("em",{parentName:"p"},"both")," sides."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"gain\n")),(0,t.kt)("p",null,"changes the volume of different sounds"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd hh sn:1 hh sn:1 hh" # gain "1 0.7 0.5"\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"speed\n")),(0,t.kt)("p",null,"and"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"note\n")),(0,t.kt)("p",null,"are used for pitching samples."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"speed\n")),(0,t.kt)("p",null,"affects the speed of playback, e.g. 2 = up an octave"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # speed "1 1.5 2 0.5"\n')),(0,t.kt)("p",null,"Or we can take the pattern from the"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"speed\n")),(0,t.kt)("p",null,"parameter"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ speed "1 2 4" # sound "jungbass:6"\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"note\n")),(0,t.kt)("p",null,"pitches the sample up in semitones, e.g. 12 = up an octave"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ up "0 ~ 12 24" # sound "jungbass:6"\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"pan\n")),(0,t.kt)("p",null,"allows us to create stereo effects - 0 = left, 0.5 = middle, 1 = right"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # pan "0 0.5 1"\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"shape\n")),(0,t.kt)("p",null,"adds distortion (but be careful - it also makes the sound much louder)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "kurt:4 kurt:4" # shape "0 0.78" # gain "0.7"\n')),(0,t.kt)("h2",{id:"feeling-brave-"},"feeling brave ?"),(0,t.kt)("p",null,"Try more effects:\n",(0,t.kt)("a",{parentName:"p",href:"https://tidalcycles.org/index.php/Category:Control_Functions"},"https://tidalcycles.org/index.php/Category:Control_Functions")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"delay\n")),(0,t.kt)("p",null,"/"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"delaytime\n")),(0,t.kt)("p",null,"/"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"delayfeedback\n")),(0,t.kt)("p",null,"/"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"cutoff\n")),(0,t.kt)("p",null,"/"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"resonance\n")),(0,t.kt)("p",null,"/"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"room\n")),(0,t.kt)("p",null,"/"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"size\n")),(0,t.kt)("h2",{id:"continuous-patterns"},"Continuous patterns"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"sine\n")),(0,t.kt)("p",null,"is a continuous pattern following a sine curve from 0 to 1 and back"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd*32" # gain sine\n')),(0,t.kt)("p",null,"You can also try"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"tri\n")),(0,t.kt)("p",null,","),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"saw\n")),(0,t.kt)("p",null,"and"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Haskell"},"rand\n")),(0,t.kt)("p",null,"."))}d.isMDXComponent=!0}}]);