"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(h,c(c({ref:t},s),{},{components:n})):o.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5,title:"counter",tags:["Category:Data","Package:Core"]},c=void 0,i={unversionedId:"nodes/node-code/CounterNodeCode",id:"nodes/node-code/CounterNodeCode",title:"counter",description:"Create a counter that ticks every pass through the node. The default context",source:"@site/docs/nodes/node-code/CounterNodeCode.md",sourceDirName:"nodes/node-code",slug:"/nodes/node-code/CounterNodeCode",permalink:"/docs/nodes/node-code/CounterNodeCode",draft:!1,tags:[{label:"Category:Data",permalink:"/docs/tags/category-data"},{label:"Package:Core",permalink:"/docs/tags/package-core"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"counter",tags:["Category:Data","Package:Core"]},sidebar:"tutorialSidebar",previous:{title:"context_value_comparator",permalink:"/docs/nodes/node-code/ContextValueComparatorNodeCode"},next:{title:"http_data",permalink:"/docs/nodes/node-code/HttpDataNodeCode"}},l={},u=[{value:"Key",id:"key",level:2},{value:"Configuration Keys:",id:"configuration-keys",level:2},{value:"Results",id:"results",level:2},{value:"Process Method",id:"process-method",level:2}],s={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create a counter that ticks every pass through the node. The default context\npath is ",(0,r.kt)("inlineCode",{parentName:"p"},"_counter")," but can be changed in the configuration."),(0,r.kt)("h2",{id:"key"},"Key"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"counter")),(0,r.kt)("h2",{id:"configuration-keys"},"Configuration Keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context_path")," - The path in the context to store the counter")),(0,r.kt)("h2",{id:"results"},"Results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ok")," - The arithmetic operation has been run and the results added to the context")),(0,r.kt)("h2",{id:"process-method"},"Process Method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function process(ContextInterface $context): ResultInterface\n{\n    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH, self::DEFAULT_CONTEXT_PATH);\n    $counter = $this->getValueFromContext($contextPath, $context);\n    if (!$counter) {\n        $counter = 0;\n    }\n    $counter++;\n    $this->setValueInContext($contextPath, $counter, $context);\n\n    return $this->result(\n        ResultInterface::OK,\n        'Changed the counter to %u.',\n        [$counter]\n    );\n}\n")))}p.isMDXComponent=!0}}]);