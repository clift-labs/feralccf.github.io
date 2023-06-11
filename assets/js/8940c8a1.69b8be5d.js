"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5,title:"CalculationNodeCode",tags:["Category:Data","Package:Core"]},i=void 0,l={unversionedId:"nodes/node-code/CalculationNodeCode",id:"nodes/node-code/CalculationNodeCode",title:"CalculationNodeCode",description:"A simple math node that can run arithmetic operations on data stored",source:"@site/docs/nodes/node-code/CalculationNodeCode.md",sourceDirName:"nodes/node-code",slug:"/nodes/node-code/CalculationNodeCode",permalink:"/docs/nodes/node-code/CalculationNodeCode",draft:!1,tags:[{label:"Category:Data",permalink:"/docs/tags/category-data"},{label:"Package:Core",permalink:"/docs/tags/package-core"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"CalculationNodeCode",tags:["Category:Data","Package:Core"]},sidebar:"tutorialSidebar",previous:{title:"NodeCode",permalink:"/docs/nodes/node-code/"},next:{title:"CounterNodeCode",permalink:"/docs/nodes/node-code/CounterNodeCode"}},s={},c=[{value:"Configuration Keys:",id:"configuration-keys",level:2},{value:"Operation Values:",id:"operation-values",level:3},{value:"Results",id:"results",level:2},{value:"Process Method",id:"process-method",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A simple math node that can run arithmetic operations on data stored\nin different context values and stores the result into a context\npath."),(0,r.kt)("h2",{id:"configuration-keys"},"Configuration Keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x_context_path")," - The path in the context to the left constant"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y_context_path")," - The path in the context to the right constant"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result_context_path")," - The path in the context to store the result"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"operation")," - The path in the context to store the result")),(0,r.kt)("h3",{id:"operation-values"},"Operation Values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add"),(0,r.kt)("li",{parentName:"ul"},"subtract"),(0,r.kt)("li",{parentName:"ul"},"multiply"),(0,r.kt)("li",{parentName:"ul"},"divide"),(0,r.kt)("li",{parentName:"ul"},"power")),(0,r.kt)("h2",{id:"results"},"Results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ok")," - The arithmetic operation has been run and the results added to the context")),(0,r.kt)("h2",{id:"process-method"},"Process Method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'public function process(ContextInterface $context): ResultInterface\n{\n    $xPath = $this->getRequiredConfigurationValue(self::X_CONTEXT_PATH);\n    $yPath = $this->getRequiredConfigurationValue(self::Y_CONTEXT_PATH);\n    $operation = $this->getRequiredConfigurationValue(self::OPERATION);\n    $resultPath = $this->getRequiredConfigurationValue(self::RESULT_PATH);\n    $x = $this->getValueFromContext($xPath, $context);\n    $y = $this->getValueFromContext($yPath, $context);\n    $result = match($operation) {\n        self::ADD => $x + $y,\n        self::SUBTRACT => $x - $y,\n        self::MULTIPLY => $x * $y,\n        self::DIVIDE => $x / $y,\n        self::POWER => pow($x, $y)\n    };\n\n    $this->setValueInContext($resultPath, $result, $context);\n\n    return $this->result(\n        ResultInterface::OK,\n        \'Applied operator "%s" path "%s" and "%s".\',\n        [$operation, $xPath, $yPath]\n    );\n}\n')))}p.isMDXComponent=!0}}]);