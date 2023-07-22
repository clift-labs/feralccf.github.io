"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:5,title:"calculation",tags:["Category:Data","Package:Core"]},l=void 0,i={unversionedId:"nodes/node-code/CalculationNodeCode",id:"nodes/node-code/CalculationNodeCode",title:"calculation",description:"A simple math node that can run arithmetic operations on data stored",source:"@site/docs/nodes/node-code/CalculationNodeCode.md",sourceDirName:"nodes/node-code",slug:"/nodes/node-code/CalculationNodeCode",permalink:"/docs/nodes/node-code/CalculationNodeCode",draft:!1,tags:[{label:"Category:Data",permalink:"/docs/tags/category-data"},{label:"Package:Core",permalink:"/docs/tags/package-core"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"calculation",tags:["Category:Data","Package:Core"]},sidebar:"tutorialSidebar",previous:{title:"NodeCode",permalink:"/docs/nodes/node-code/"},next:{title:"context_value_comparator",permalink:"/docs/nodes/node-code/ContextValueComparatorNodeCode"}},s={},c=[{value:"Key",id:"key",level:2},{value:"Configuration Keys:",id:"configuration-keys",level:2},{value:"Operation Values:",id:"operation-values",level:3},{value:"Results",id:"results",level:2},{value:"Process Method",id:"process-method",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A simple math node that can run arithmetic operations on data stored\nin different context values and stores the result into a context\npath."),(0,a.kt)("h2",{id:"key"},"Key"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"calculation")),(0,a.kt)("h2",{id:"configuration-keys"},"Configuration Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x_context_path")," - The path in the context to the left constant"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y_context_path")," - The path in the context to the right constant"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"result_context_path")," - The path in the context to store the result"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operation")," - The path in the context to store the result")),(0,a.kt)("h3",{id:"operation-values"},"Operation Values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add"),(0,a.kt)("li",{parentName:"ul"},"subtract"),(0,a.kt)("li",{parentName:"ul"},"multiply"),(0,a.kt)("li",{parentName:"ul"},"divide"),(0,a.kt)("li",{parentName:"ul"},"power")),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ok")," - The arithmetic operation has been run and the results added to the context")),(0,a.kt)("h2",{id:"process-method"},"Process Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'public function process(ContextInterface $context): ResultInterface\n{\n    $xPath = $this->getRequiredConfigurationValue(self::X_CONTEXT_PATH);\n    $yPath = $this->getRequiredConfigurationValue(self::Y_CONTEXT_PATH);\n    $operation = $this->getRequiredConfigurationValue(self::OPERATION);\n    $resultPath = $this->getRequiredConfigurationValue(self::RESULT_PATH);\n    $x = $this->getValueFromContext($xPath, $context);\n    $y = $this->getValueFromContext($yPath, $context);\n    $result = match($operation) {\n        self::ADD => $x + $y,\n        self::SUBTRACT => $x - $y,\n        self::MULTIPLY => $x * $y,\n        self::DIVIDE => $x / $y,\n        self::POWER => pow($x, $y)\n    };\n\n    $this->setValueInContext($resultPath, $result, $context);\n\n    return $this->result(\n        ResultInterface::OK,\n        \'Applied operator "%s" path "%s" and "%s".\',\n        [$operation, $xPath, $yPath]\n    );\n}\n')))}p.isMDXComponent=!0}}]);