"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||s;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={id:"process-index",title:"Processes"},a=void 0,i={unversionedId:"processes/process-index",id:"processes/process-index",title:"Processes",description:"What is a Process?",source:"@site/docs/processes/index.md",sourceDirName:"processes",slug:"/processes/",permalink:"/docs/processes/",draft:!1,tags:[],version:"current",frontMatter:{id:"process-index",title:"Processes"},sidebar:"tutorialSidebar",previous:{title:"Feral Inline Sample Project",permalink:"/docs/getting-started/inline-sample"},next:{title:"JSON Loader",permalink:"/docs/processes/json-loader"}},l={},c=[{value:"What is a Process?",id:"what-is-a-process",level:2},{value:"Nodes",id:"nodes",level:2},{value:"Edges",id:"edges",level:2},{value:"Results",id:"results",level:2},{value:"Context",id:"context",level:2},{value:"Events",id:"events",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-a-process"},"What is a Process?"),(0,o.kt)("p",null,"A process is a collection of nodes that perform work and return a result. These results are used to map the process flow to the next node. This process continues until the end node is reached."),(0,o.kt)("h2",{id:"nodes"},"Nodes"),(0,o.kt)("p",null,"A node is actually a three tired structured consisting of NodeCode that actually processes information and uses configuration from the catalog node and process node levels. The NodeCode instance receives the configuration from it's Catalog Node and Process node when it's built then during process run time, the node receives the context which contains the data to be processed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  Process Node\n     |\n     | Configuration\n     v\n  Catalog Node\n     |\n     | Configuration\n     v\n  NodeCode\n")),(0,o.kt)("p",null,"For more information on Nodes, ",(0,o.kt)("a",{parentName:"p",href:"./nodes"},"see Nodes")),(0,o.kt)("h2",{id:"edges"},"Edges"),(0,o.kt)("p",null,"An edge connects nodes together creating a process flow. An edge is the combinationo of a source node, a result, and a destination node. A source node can have multiple edges, each with a unique result. A destination node can have multiple edges with non-unique results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                 ---- true  ---\x3e NODE_B --- ok ---\n   NODE_A  -----|                                 | --\x3e NODE_D\n                 ---- false ---\x3e NODE_C --- ok ---\n\n")),(0,o.kt)("mermaid",{value:"graph LR;\n    NODE_A--\x3e|true|NODE_B;\n    NODE_A--\x3e|false|NODE_C;\n    NODE_B--\x3e|ok|NODE_D;\n    NODE_C--\x3e|ok|NODE_D;"}),(0,o.kt)("p",null,"For more information on edges, ",(0,o.kt)("a",{parentName:"p",href:"./edges"},"see Edges")),(0,o.kt)("h2",{id:"results"},"Results"),(0,o.kt)("p",null,"After the Node processes the context and any activities performed with the node, the result object is returned to the process engine. The results consist of status and a message. The status is used to route the process flow to the next node and the message is used for observability of the operation of the process."),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"The context is the data store which hold information passed between nodes in the process. The context is a simple key/value storage system but can hold arrays, scalars, and objects as values. The initial context can hold values from the process driver such as the command line runner or the controller action."),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"During the process flow, events are dispatched allowing code to observe the various events.\nEvents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Process Start"),(0,o.kt)("li",{parentName:"ul"},"Process End"),(0,o.kt)("li",{parentName:"ul"},"Process Node Before"),(0,o.kt)("li",{parentName:"ul"},"Process Node End"),(0,o.kt)("li",{parentName:"ul"},"Process Node Exception")))}p.isMDXComponent=!0}}]);