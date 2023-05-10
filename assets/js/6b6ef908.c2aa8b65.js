"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=l,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(3117),l=(n(7294),n(3905));const r={title:"Troubleshoot on Linux",id:"troubleshoot_linux"},o=void 0,i={unversionedId:"troubleshoot/troubleshoot_linux",id:"troubleshoot/troubleshoot_linux",title:"Troubleshoot on Linux",description:"Is Haskell installed?",source:"@site/docs/troubleshoot/TroubleShoot_Linux.md",sourceDirName:"troubleshoot",slug:"/troubleshoot/troubleshoot_linux",permalink:"/docs/troubleshoot/troubleshoot_linux",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/troubleshoot/TroubleShoot_Linux.md",tags:[],version:"current",lastUpdatedAt:1683747122,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{title:"Troubleshoot on Linux",id:"troubleshoot_linux"},sidebar:"docs",previous:{title:"Uninstall",permalink:"/docs/getting-started/uninstalling"},next:{title:"Troubleshoot on MacOS",permalink:"/docs/troubleshoot/troubleshoot_macos"}},s={},u=[{value:"Is Haskell installed?",id:"is-haskell-installed",level:2},{value:"Is the Tidal Library installed?",id:"is-the-tidal-library-installed",level:2},{value:"Is SuperDirt alright?",id:"is-superdirt-alright",level:2},{value:"CLASS Not Found",id:"class-not-found",level:3},{value:"Could not bind to requested port",id:"could-not-bind-to-requested-port",level:3},{value:"Is the Jack Audio Server ok?",id:"is-the-jack-audio-server-ok",level:2},{value:"Compilation errors",id:"compilation-errors",level:2},{value:"Why don&#39;t I hear anything?",id:"why-dont-i-hear-anything",level:2},{value:"Missing samples",id:"missing-samples",level:3},{value:"Audio configuration",id:"audio-configuration",level:3},{value:"Installing via &#39;stack&#39; rather than &#39;cabal&#39;",id:"installing-via-stack-rather-than-cabal",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"is-haskell-installed"},"Is Haskell installed?"),(0,l.kt)("p",null,"Open a terminal window, and type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ghci\n")),(0,l.kt)("p",null,"You should see something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GHCi, version 8.6.3: http://www.haskell.org/ghc/  :? for help\nPrelude> \n")),(0,l.kt)("p",null,"If you don't see something like the above, you probably need to install ",(0,l.kt)("a",{parentName:"p",href:"https://www.haskell.org/"},"Haskell"),". You might well see a different version number, don't worry. At the time of writing, Tidal is tested against versions right back to 7.10.3. "),(0,l.kt)("h2",{id:"is-the-tidal-library-installed"},"Is the Tidal Library installed?"),(0,l.kt)("p",null,"Keeping that ",(0,l.kt)("strong",{parentName:"p"},"ghci")," window open, type (or paste in):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"import Sound.Tidal.Context\n")),(0,l.kt)("p",null,"You should now see something like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"GHCi, version 8.6.3: http://www.haskell.org/ghc/  :? for help\nPrelude> import Sound.Tidal.Context\nPrelude Sound.Tidal.Context> \n")),(0,l.kt)("p",null,"If you instead see an error message like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"<no location info>: error:\n  Could not find module \u2018Sound.Tidal.Context\u2019\n")),(0,l.kt)("p",null,"This means that the Tidal library isn't installed. To install it, open a new terminal window and type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cabal update\ncabal new-install tidal --lib\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note:")," as of version 1.7 instead you'll have to use the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cabal v1-update\ncabal v1-install tidal\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"You can ignore warnings about ",(0,l.kt)("em",{parentName:"p"},"'legacy v1 style'"),".")),(0,l.kt)("p",null,"If you still see an error message, then make sure you have installed the ",(0,l.kt)("strong",{parentName:"p"},"Full")," Haskell Platform and try again. If it still doesn't work, ask help on the Forum or on the Discord or RocketChat. "),(0,l.kt)("h2",{id:"is-superdirt-alright"},"Is SuperDirt alright?"),(0,l.kt)("h3",{id:"class-not-found"},"CLASS Not Found"),(0,l.kt)("p",null,"If you see the following error:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ERROR: Class not defined.\n")),(0,l.kt)("p",null,"This means ",(0,l.kt)("strong",{parentName:"p"},"SuperDirt")," isn't installed. Install it by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},' include("SuperDirt")\n')),(0,l.kt)("p",null,"If it fails to install, make sure you have the ",(0,l.kt)("inlineCode",{parentName:"p"},"git")," command installed. You can do this by running ",(0,l.kt)("inlineCode",{parentName:"p"},"git --version")," from a command prompt. If the command isn't found, then check the install page for how to install ",(0,l.kt)("strong",{parentName:"p"},"Git"),". Once it's installed, you'll need to restart ",(0,l.kt)("strong",{parentName:"p"},"SuperCollider")," before trying again."),(0,l.kt)("p",null,"For users who have just installed SuperCollider, restarting it prior to running ",(0,l.kt)("inlineCode",{parentName:"p"},'include("SuperDirt")')," could also resolve the error. "),(0,l.kt)("h3",{id:"could-not-bind-to-requested-port"},"Could not bind to requested port"),(0,l.kt)("p",null,"If you see an error like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"Could not bind to requested port. This may mean it is in use already by another application.\nERROR: Could not open UDP port 57120\n")),(0,l.kt)("p",null,"This probably means you have stray ",(0,l.kt)("strong",{parentName:"p"},"SuperCollider")," processes running, blocking network ports. Shut down ",(0,l.kt)("strong",{parentName:"p"},"SuperCollider"),", and force quit ",(0,l.kt)("inlineCode",{parentName:"p"},"sclang")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"scserver")," in your task manager. Failing that, a reboot will clear them. "),(0,l.kt)("h2",{id:"is-the-jack-audio-server-ok"},"Is the Jack Audio Server ok?"),(0,l.kt)("p",null,"Supercollider run on a Jack audio server in order to deliver sound to\nyour speakers. If you see the following error in SuperCollider's post window: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Couldn't set realtime scheduling priority 1: Operation not permitted\n")),(0,l.kt)("p",null,"You will need to setup ",(0,l.kt)("strong",{parentName:"p"},"Jack")," with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg-reconfigure jackd2\n")),(0,l.kt)("p",null,"and add your username to the audio group with (replace USERNAME):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo addgroup USERNAME audio\n")),(0,l.kt)("p",null,"You can check if your username is already in the ",(0,l.kt)("em",{parentName:"p"},"audio group")," by typing the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"groups -username-\n")),(0,l.kt)("p",null,"You may need to log out and log back in for this to take effect."),(0,l.kt)("h2",{id:"compilation-errors"},"Compilation errors"),(0,l.kt)("p",null,"You might encounter problems when installing the ",(0,l.kt)("strong",{parentName:"p"},"Tidal")," Haskell Library. If you encounter errors, the problem might come from the Tidal Haskell library itself. Run the following command to ensure that it is correctly installed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cabal update\ncabal new-install tidal --lib\n")),(0,l.kt)("p",null,"Sometimes, the installation process can fail without any clear reason. This command can help to fix the problem: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ghc-pkg recache\ncabal update\ncabal new-install tidal --lib\n")),(0,l.kt)("h2",{id:"why-dont-i-hear-anything"},"Why don't I hear anything?"),(0,l.kt)("h3",{id:"missing-samples"},"Missing samples"),(0,l.kt)("p",null,"Tidal Cycles is installed with an extensive library of ",(0,l.kt)("em",{parentName:"p"},"default")," audio samples. The download can sometimes fail, leaving you without any sound to play. If everything seems to be working, but not all sounds play, then probably there was a problem causing the download of Tidal's sound library to fail part way through."),(0,l.kt)("p",null,"You can fix this by finding the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dirt-Samples")," folder, via the SuperCollider menus: Open ",(0,l.kt)("inlineCode",{parentName:"p"},"File > Open user Support directory")," (top-menu). Find the ",(0,l.kt)("inlineCode",{parentName:"p"},"downloaded-quarks")," and then the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dirt-Samples")," folder. You'll probably find that many of the folders are missing or empty. You can download the missing samples from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/Dirt-Samples"},"this link")," and place them here."),(0,l.kt)("h3",{id:"audio-configuration"},"Audio configuration"),(0,l.kt)("p",null,"The problem can also come from your sound system. Check that everything is plugged correctly, check if you selected the right audio interface and that the volume is up. If you still don't hear anything, it might come from something else."),(0,l.kt)("h2",{id:"installing-via-stack-rather-than-cabal"},"Installing via 'stack' rather than 'cabal'"),(0,l.kt)("p",null,"If the ",(0,l.kt)("strong",{parentName:"p"},"Tidal Haskell Library")," has stubborn problems when installed with\n",(0,l.kt)("inlineCode",{parentName:"p"},"cabal"),", particularly if it brings up errors related to the 'network'\nlibrary under library, then instead installing with ",(0,l.kt)("inlineCode",{parentName:"p"},"stack")," solves it."),(0,l.kt)("p",null,"For most -nix operating systems, the easiest way to install ",(0,l.kt)("strong",{parentName:"p"},"stack")," is to run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://get.haskellstack.org/ | sh\n")),(0,l.kt)("p",null,"or:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://get.haskellstack.org/ | sh\n")),(0,l.kt)("p",null,"This is done with the following command in a terminal window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"stack install tidal\n")),(0,l.kt)("p",null,"Once that's done, you just have to tell your editor plugin to use the Tidal\ninstalled with ",(0,l.kt)("inlineCode",{parentName:"p"},"stack"),". In ",(0,l.kt)("strong",{parentName:"p"},"Atom"),", find the settings for the Tidal Cycles\npackage, and set the ",(0,l.kt)("inlineCode",{parentName:"p"},"ghci path")," setting to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"stack exec --package tidal -- ghci\n")),(0,l.kt)("p",null,"Restart ",(0,l.kt)("strong",{parentName:"p"},"Atom")," and all should be well."))}d.isMDXComponent=!0}}]);