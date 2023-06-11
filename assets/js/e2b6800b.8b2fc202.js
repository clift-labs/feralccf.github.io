"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,f=u["".concat(i,".").concat(g)]||u[g]||p[g]||a;return n?o.createElement(f,s(s({ref:t},l),{},{components:n})):o.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[u]="string"==typeof e?e:r,s[1]=d;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5,title:"JsonEncodeNodeCode",tags:["Category:Data","Package:Core"]},s=void 0,d={unversionedId:"nodes/node-code/JsonEncodeNodeCode",id:"nodes/node-code/JsonEncodeNodeCode",title:"JsonEncodeNodeCode",description:"Encode an array and store the resulting JSON string. The default get context path is _results and the",source:"@site/docs/nodes/node-code/JsonEncodeNodeCode.md",sourceDirName:"nodes/node-code",slug:"/nodes/node-code/JsonEncodeNodeCode",permalink:"/docs/nodes/node-code/JsonEncodeNodeCode",draft:!1,tags:[{label:"Category:Data",permalink:"/docs/tags/category-data"},{label:"Package:Core",permalink:"/docs/tags/package-core"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"JsonEncodeNodeCode",tags:["Category:Data","Package:Core"]},sidebar:"tutorialSidebar",previous:{title:"JsonDecodeNodeCode",permalink:"/docs/nodes/node-code/JsonDecodeNodeCode"},next:{title:"LogNodeCode",permalink:"/docs/nodes/node-code/LogEncodeNodeCode"}},i={},c=[{value:"Configuration Keys:",id:"configuration-keys",level:2},{value:"Results",id:"results",level:2},{value:"Process Method",id:"process-method",level:2},{value:"Catalog Node Decorators",id:"catalog-node-decorators",level:2}],l={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Encode an array and store the resulting JSON string. The default get context path is ",(0,r.kt)("inlineCode",{parentName:"p"},"_results")," and the\ndefault results path is ",(0,r.kt)("inlineCode",{parentName:"p"},"_data"),"."),(0,r.kt)("h2",{id:"configuration-keys"},"Configuration Keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context_path")," - The path in the context to store the resulting array"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get_context_path")," - The path where the JSON string is found")),(0,r.kt)("h2",{id:"results"},"Results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ok")," - The arithmetic operation has been run and the results added to the context")),(0,r.kt)("h2",{id:"process-method"},"Process Method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'public function process(ContextInterface $context): ResultInterface\n{\n    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH, self::DEFAULT_CONTEXT_PATH);\n    $getContextPath = $this->getRequiredConfigurationValue(self::GET_CONTEXT_PATH, self::DEFAULT_GET_CONTEXT_PATH);\n\n    $jsonString = $this->getStringValueFromContext($getContextPath, $context);\n    $arrayData = json_encode($jsonString, true);\n    $this->setValueInContext(self::CONTEXT_PATH, $arrayData, $context);\n\n    return $this->result(\n        ResultInterface::OK,\n        \'Converted array data from path "%s" and placed in path "%s"\',\n        [$getContextPath, $contextPath]\n    );\n}\n')),(0,r.kt)("h2",{id:"catalog-node-decorators"},"Catalog Node Decorators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"[CatalogNodeDecorator(key:'json_encode', name: 'JSON Encode', group: 'Data', description: 'Convert an array to a JSON string.')]\n")))}p.isMDXComponent=!0}}]);