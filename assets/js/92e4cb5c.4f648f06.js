"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8559],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(o),f=r,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return o?n.createElement(h,i(i({ref:t},l),{},{components:o})):n.createElement(h,i({ref:t},l))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},4335:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const a={id:"nodecode-index",title:"NodeCode"},i=void 0,s={unversionedId:"nodes/node-code/nodecode-index",id:"nodes/node-code/nodecode-index",title:"NodeCode",description:"A Node is one element in a process that performs one action",source:"@site/docs/nodes/node-code/index.md",sourceDirName:"nodes/node-code",slug:"/nodes/node-code/",permalink:"/docs/nodes/node-code/",draft:!1,tags:[],version:"current",frontMatter:{id:"nodecode-index",title:"NodeCode"},sidebar:"tutorialSidebar",previous:{title:"Nodes",permalink:"/docs/nodes/"},next:{title:"CatalogNode",permalink:"/docs/nodes/catalog-node/"}},c={},d=[{value:"NodeCode Configuration",id:"nodecode-configuration",level:2},{value:"Configuration Value Modifier",id:"configuration-value-modifier",level:2},{value:"NodeCode Source",id:"nodecode-source",level:2},{value:"NodeCode Factory",id:"nodecode-factory",level:2}],l={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Node is one element in a process that performs one action\nin the process. The node can perform any work using information\nin the configuration of the node instance, the context passed to\nthe node from the process, or a static action that does not\nhave a configuration or use data in the context."),(0,r.kt)("p",null,"There are three categories of nodes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flow nodes that returns a response based on information in the context that route the process to different branches."),(0,r.kt)("li",{parentName:"ul"},"data nodes that perform context manipulation activities that add, remove, modify data stored in the context."),(0,r.kt)("li",{parentName:"ul"},"work nodes that do perform work outside the process system")),(0,r.kt)("p",null,"Each node has a type which is represented the fully qualified name\nof the node class. Each node has a key which is unique in its process\nand is used to navigate the flow of the process."),(0,r.kt)("p",null,"A node is called by the process using the run function that receives\nthe process Data as the sole parameter and returns a ProcessNodeResult\nobject containing information allowing the process to route upon a successful\nrun or error information when a process fails."),(0,r.kt)("h2",{id:"nodecode-configuration"},"NodeCode Configuration"),(0,r.kt)("p",null,"NodeCode must include an array of configuration objects. Configuration Description\nobjects describe one configuration property and allows tools to be built to manage\nNodeCode objects. These configuration descriptions will be used in the Catalog Node and\nProcess Nodes. "),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/nodes#configuration"},"Node:Configuration")," to see the configuration hierarchy. "),(0,r.kt)("p",null,"Types of Configuration values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/StringConfigurationDescription.php"},"string")," Use this configuration description for configuration values that are a boolean variable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/IntConfigurationDescription.php"},"int")," The type of the configuration is an int."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/FloatConfigurationDescription.php"},"float")," The type of the configuration is a float."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/BooleanConfigurationDescription.php"},"boolean"),"  The type of the configuration is a boolean."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/StringArrayConfigurationDescription.php"},"string_array")," The type of the configuration is an array of strings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/IntArrayConfigurationDescription.php"},"int_array")," The type of the configuration is an array of int."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/FloatArrayConfigurationDescription.php"},"float_array")," The type of the configuration is an array of floats.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/NodeCodeInterface.php"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"NodeCodeInterface")))," includes the public method ",(0,r.kt)("inlineCode",{parentName:"p"},"getConfigurationDescriptions"),". This\nmethod returns an array of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/Description/ConfigurationDescriptionInterface.php"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"ConfigurationDescriptionInterface")))," objects. Visit the")),(0,r.kt)("h2",{id:"configuration-value-modifier"},"Configuration Value Modifier"),(0,r.kt)("p",null,"fy a configuration value. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/ValueModifier/ConfigurationValueModifierInterface.php"},"ConfigurationValueModifierInterface"),"\nis the interface that can be used to modify a value. This can be used if a template variable or secret is used and replaced when\nthe value is actually set."),(0,r.kt)("p",null,"When a configuration value is set into a node, the value\nof the node can be interpreted and processed before being\nset. The value of a configuration can be a key to another\nvalue stored in a database or webservice."),(0,r.kt)("p",null,"EX: if the value contained secret|abc123 the modifyValue\nfunction can look up the secret by its key abc123 and\nstore the secret value."),(0,r.kt)("p",null,"EX: if the value contained db|123 then the actual configuration\nvalue is in the database and the value stored in the node\ninstance will be replaced with the value in the database."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/Configuration/NodeConfigurationBuilder.php"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"NodeConfigurationBuilder"))),"\ncan include an array of ConfigurationValueModifiers that can be used for high level\nvariable manipulation.")),(0,r.kt)("h2",{id:"nodecode-source"},"NodeCode Source"),(0,r.kt)("p",null,"A NodeCode Source provides NodeCode classes to the framework. NodeCode can live\nin different places in the code. The\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/NodeCodeSource/NodeCodeSourceInterface.php"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"NodeCodeSourceInterface"))),"\nprovides a method to get the NodeCodes classes known to its source. The Core only\nhas a simple NodeCodeSource where an iterator of NodeCode classes. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Require the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cybermantix/feral-inline"},"Feral Inline")," project and\nthe NodeCodeSource will contain all the objects that implement the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/NodeCodeInterface.php"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"NodeCodeInterface"))),"\nand make it available from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/NodeCodeSource/NodeCodeSource.php"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"NodeCodeSource"))),"\nservice.")),(0,r.kt)("h2",{id:"nodecode-factory"},"NodeCode Factory"),(0,r.kt)("p",null,"The NodeCode Factory collects all of the NodeCode sources and builds a collection of NodeCode.\nTo get a NodeCode, use the factory and pass the key of the NodeCode to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getNodeCode")," method.\nTo get all available NodeCode objects use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getNodeCodes")," method."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cybermantix/feral-core/blob/master/src/Process/NodeCode/NodeCodeFactory.php"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"NodeCodeFactory")))," for details.")))}u.isMDXComponent=!0}}]);