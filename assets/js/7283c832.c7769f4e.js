"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8288],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return o?n.createElement(h,r(r({ref:t},c),{},{components:o})):n.createElement(h,r({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3386:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(3117),a=(o(7294),o(3905));const i={title:"Tidal Blog Info",date:new Date("2023-01-01T00:00:00.000Z")},r=void 0,l={permalink:"/blog/about",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/blog/blog/about.md",source:"@site/blog/about.md",title:"Tidal Blog Info",description:"Purpose",date:"2023-01-01T00:00:00.000Z",formattedDate:"January 1, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Tidal Blog Info",date:"2023-01-01T00:00:00.000Z"},prevItem:{title:"Tidal Profile - cleary (Bernard Gray)",permalink:"/blog/contributor_profile_cleary"},nextItem:{title:"Blog Archive",permalink:"/blog/blogArchive"}},s={authorsImageUrls:[]},u=[{value:"Purpose",id:"purpose",level:2},{value:"Templates",id:"templates",level:2},{value:"Submission Instructions",id:"submission-instructions",level:2},{value:"Markdown",id:"markdown",level:2},{value:"Admonitions - triple colon syntax",id:"admonitions---triple-colon-syntax",level:3},{value:"Details element",id:"details-element",level:3}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"The Tidal Cycles blog is intended to be ",(0,a.kt)("strong",{parentName:"p"},"by -- for -- about")," the Tidal community.\nAnyone engaged with Tidal Cycles is encouraged to submit a blog post. Topics can be about Tidal practices, music made with Tidal, live coding, event coverage, new developments & releases, community, etc. Topics can also be broader -- anything that would be of interest to this community, and it doesn't have to be limited to just about Tidal!"),(0,a.kt)("h2",{id:"templates"},"Templates"),(0,a.kt)("p",null,"To make participation and submitting posts easier, there are a set if templates. These produce a set of patterned blog posts. Each template includes a suggested set of content sections, but consider this just a starting point. The most important thing is to provide content that reflects your unique perspective."),(0,a.kt)("p",null,"Templates are maintained in GitHub in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/tidal-doc/"},"tidalcycles/tidal-doc")," repo / templates branch."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tidalcycles/tidal-doc/blob/templates/templates/blog_tidal_profile.md"},"Tidal Blog Profile")," Intended to highlight your livecoding practices, music, and use of tidal. Contains a set of questions to respond to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tidalcycles/tidal-doc/blob/templates/templates/blog_tidal_music.md"},"Tidal music")," Use this to describe a music project such as a new album or music release, a review of a music project, Algorave or concert, or discussion of music made with Tidal or other live coding program."),(0,a.kt)("li",{parentName:"ul"},"Event coverage (planned)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tidalcycles/tidal-doc/blob/templates/templates/blog_topic.md"},"Blog Topic")," Open topic - use this for a more free-form approach. One option is to present your own approach to Tidal and live coding (see ",(0,a.kt)("a",{parentName:"li",href:"https://tidalcycles.org/blog/tidal_profile_heavylifting"},"Working with Samples the Heavy Lifting way"),"). Other topics could be discussion of a new release and the coding behind it, or discussion of other environments like Strudel, Vortex, Sardine, etc.")),(0,a.kt)("p",null,"We encourage posts to include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"code sections with Tidal examples"),(0,a.kt)("li",{parentName:"ul"},"links into the Tidal user documentation"),(0,a.kt)("li",{parentName:"ul"},"links to recordings, YouTube, Bandcamp, SoundCloud, etc.")),(0,a.kt)("h2",{id:"submission-instructions"},"Submission Instructions"),(0,a.kt)("p",null,"Detailed posting instructions are included in the template files. Options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Submit via GitHub pull request"),(0,a.kt)("li",{parentName:"ul"},"Work with a blog editor and send your content via Discord DM or email.")),(0,a.kt)("p",null,"Do what works for you!"),(0,a.kt)("h2",{id:"markdown"},"Markdown"),(0,a.kt)("p",null,"Submitting you content in markdown format is preferred, but it is not required. If you aren't familiar with markdown, no problem. Write your content and we'll take care of the rest."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docusaurus, MDX and markdown enhancements")),(0,a.kt)("p",null,"The Tidal blog is rendered in ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," which uses ",(0,a.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," as the parsing engine. It supports more layout features including React components. To see the full list of options, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown Features")," page. Here are some examples. There are many more!"),(0,a.kt)("h3",{id:"admonitions---triple-colon-syntax"},"Admonitions - triple colon syntax"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is a tip and is called by the triple colon syntax ",(0,a.kt)("inlineCode",{parentName:"p"},":::tip"),". You can also customize admonitions.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When using admonitions - be sure to add empty lines before and after your text lines.")),(0,a.kt)("h3",{id:"details-element"},"Details element"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Toggle to see more"),(0,a.kt)("div",null,(0,a.kt)("div",null,"This is the detail revealed. This is useful for a long code block, allowing users flexibility in how they read through your post. "),(0,a.kt)("br",null))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Here is the raw markdown for this file: ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/tidalcycles/tidal-doc/main/blog/about.md"},"https://raw.githubusercontent.com/tidalcycles/tidal-doc/main/blog/about.md"))))}p.isMDXComponent=!0}}]);