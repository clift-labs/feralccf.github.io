"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[405],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),f=r,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return t?o.createElement(h,i(i({ref:n},l),{},{components:t})):o.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:6,title:"Process Node"},i=void 0,s={unversionedId:"nodes/process-node",id:"nodes/process-node",title:"Process Node",description:"A ProcessNode is an instance of a catalog node. The ProcessNode is defined in the",source:"@site/docs/nodes/process-node.md",sourceDirName:"nodes",slug:"/nodes/process-node",permalink:"/docs/nodes/process-node",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Process Node"},sidebar:"tutorialSidebar",previous:{title:"json_encode",permalink:"/docs/nodes/catalog-node/json_encode"},next:{title:"Edges",permalink:"/docs/edges/"}},c={},d=[{value:"Key",id:"key",level:2},{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Edges",id:"edges",level:2}],l={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ProcessNode is an instance of a catalog node. The ProcessNode is defined in the\nprocess configuration and does not have a class file associated with it."),(0,r.kt)("p",null,"In this example, a process node is created which uses the cat_data catalog\nnode. No configuration is needed in this ProcessNode.\nIf the result from the NodeCode is ok, then move on to the info node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'...\n...\n...\n{\n  "key": "api_data",\n  "description": "Get Cat Data",\n  "catalog_node_key": "cat_data",\n  "configuration": {},\n  "edges": {\n    "ok": "info"\n  }\n},\n...\n')),(0,r.kt)("h2",{id:"key"},"Key"),(0,r.kt)("p",null,"The ProcessNode key is what maps the edges to each other. It must be unique\nwithin the process."),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The description of the ProcessNode for the process designer."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"An object that maps key/value pairs to the NodeCode configuration. The ProcessNode instance must supply any required configuration data not supplied\nby the CatalogNode or the NodeCode."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Any configuration that matches the CatalogNode keys will be overwritten by\nthe CatalogNode configuration values.")),(0,r.kt)("h2",{id:"edges"},"Edges"),(0,r.kt)("p",null,"The edges are a collection of connections between nodes. The key/value pair maps the\nnode response to the next node for that response."),(0,r.kt)("p",null,"In this example, the true response from the evaluate node will process the context\nand have the result ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," the process will move to the ",(0,r.kt)("inlineCode",{parentName:"p"},"info_greater"),"\nnode. If ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"info_less")," node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'...\n...\n...\n{\n  "key": "evaluate",\n  "description": "Evaluate if the number is high",\n  "catalog_node_key": "greater_than",\n  "configuration": {\n    "test_value": 0.5,\n    "context_path": "_random"\n  },\n  "edges": {\n    "true": "info_greater",\n    "false": "info_less"\n  }\n},\n...\n...\n...\n')))}u.isMDXComponent=!0}}]);