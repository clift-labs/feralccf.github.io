"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,g=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(g,c(c({ref:t},d),{},{components:n})):r.createElement(g,c({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5,title:"json_encode",tags:["Category:Data","Package:Core"]},c=void 0,i={unversionedId:"reference/node-code/JsonEncodeNodeCode",id:"reference/node-code/JsonEncodeNodeCode",title:"json_encode",description:"Encode an array and store the resulting JSON string. The default get context path is _results and the",source:"@site/docs/reference/node-code/JsonEncodeNodeCode.md",sourceDirName:"reference/node-code",slug:"/reference/node-code/JsonEncodeNodeCode",permalink:"/docs/reference/node-code/JsonEncodeNodeCode",draft:!1,tags:[{label:"Category:Data",permalink:"/docs/tags/category-data"},{label:"Package:Core",permalink:"/docs/tags/package-core"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"json_encode",tags:["Category:Data","Package:Core"]},sidebar:"tutorialSidebar",previous:{title:"http_data",permalink:"/docs/reference/node-code/JsonDecodeNodeCode"},next:{title:"log",permalink:"/docs/reference/node-code/LogEncodeNodeCode"}},l={},s=[{value:"Key",id:"key",level:2},{value:"Configuration Keys:",id:"configuration-keys",level:2},{value:"Results",id:"results",level:2},{value:"Process Method",id:"process-method",level:2},{value:"Catalog Node Decorators",id:"catalog-node-decorators",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Encode an array and store the resulting JSON string. The default get context path is ",(0,o.kt)("inlineCode",{parentName:"p"},"_results")," and the\ndefault results path is ",(0,o.kt)("inlineCode",{parentName:"p"},"_data"),"."),(0,o.kt)("h2",{id:"key"},"Key"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"json_encode")),(0,o.kt)("h2",{id:"configuration-keys"},"Configuration Keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context_path")," - The path in the context to store the resulting array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_context_path")," - The path where the JSON string is found")),(0,o.kt)("h2",{id:"results"},"Results"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ok")," - The arithmetic operation has been run and the results added to the context")),(0,o.kt)("h2",{id:"process-method"},"Process Method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'public function process(ContextInterface $context): ResultInterface\n{\n    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH, self::DEFAULT_CONTEXT_PATH);\n    $getContextPath = $this->getRequiredConfigurationValue(self::GET_CONTEXT_PATH, self::DEFAULT_GET_CONTEXT_PATH);\n\n    $jsonString = $this->getStringValueFromContext($getContextPath, $context);\n    $arrayData = json_encode($jsonString, true);\n    $this->setValueInContext(self::CONTEXT_PATH, $arrayData, $context);\n\n    return $this->result(\n        ResultInterface::OK,\n        \'Converted array data from path "%s" and placed in path "%s"\',\n        [$getContextPath, $contextPath]\n    );\n}\n')),(0,o.kt)("h2",{id:"catalog-node-decorators"},"Catalog Node Decorators"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"[CatalogNodeDecorator(key:'json_encode', name: 'JSON Encode', group: 'Data', description: 'Convert an array to a JSON string.')]\n")))}p.isMDXComponent=!0}}]);