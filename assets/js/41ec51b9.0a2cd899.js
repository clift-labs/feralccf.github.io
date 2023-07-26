"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5,title:"calculation",tags:["Category:Data","Package:Core"]},l=void 0,i={unversionedId:"reference/node-code/CalculationNodeCode",id:"reference/node-code/CalculationNodeCode",title:"calculation",description:"A simple math node that can run arithmetic operations on data stored",source:"@site/docs/reference/node-code/CalculationNodeCode.md",sourceDirName:"reference/node-code",slug:"/reference/node-code/CalculationNodeCode",permalink:"/docs/reference/node-code/CalculationNodeCode",draft:!1,tags:[{label:"Category:Data",permalink:"/docs/tags/category-data"},{label:"Package:Core",permalink:"/docs/tags/package-core"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"calculation",tags:["Category:Data","Package:Core"]},sidebar:"tutorialSidebar",previous:{title:"NodeCode",permalink:"/docs/category/nodecode"},next:{title:"context_value_comparator",permalink:"/docs/reference/node-code/ContextValueComparatorNodeCode"}},c={},s=[{value:"Key",id:"key",level:2},{value:"Configuration Keys:",id:"configuration-keys",level:2},{value:"Operation Values:",id:"operation-values",level:3},{value:"Results",id:"results",level:2},{value:"Process Method",id:"process-method",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A simple math node that can run arithmetic operations on data stored\nin different context values and stores the result into a context\npath."),(0,o.kt)("h2",{id:"key"},"Key"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"calculation")),(0,o.kt)("h2",{id:"configuration-keys"},"Configuration Keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x_context_path")," - The path in the context to the left constant"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y_context_path")," - The path in the context to the right constant"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"result_context_path")," - The path in the context to store the result"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operation")," - The path in the context to store the result")),(0,o.kt)("h3",{id:"operation-values"},"Operation Values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add"),(0,o.kt)("li",{parentName:"ul"},"subtract"),(0,o.kt)("li",{parentName:"ul"},"multiply"),(0,o.kt)("li",{parentName:"ul"},"divide"),(0,o.kt)("li",{parentName:"ul"},"power")),(0,o.kt)("h2",{id:"results"},"Results"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ok")," - The arithmetic operation has been run and the results added to the context")),(0,o.kt)("h2",{id:"process-method"},"Process Method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'public function process(ContextInterface $context): ResultInterface\n{\n    $xPath = $this->getRequiredConfigurationValue(self::X_CONTEXT_PATH);\n    $yPath = $this->getRequiredConfigurationValue(self::Y_CONTEXT_PATH);\n    $operation = $this->getRequiredConfigurationValue(self::OPERATION);\n    $resultPath = $this->getRequiredConfigurationValue(self::RESULT_PATH);\n    $x = $this->getValueFromContext($xPath, $context);\n    $y = $this->getValueFromContext($yPath, $context);\n    $result = match($operation) {\n        self::ADD => $x + $y,\n        self::SUBTRACT => $x - $y,\n        self::MULTIPLY => $x * $y,\n        self::DIVIDE => $x / $y,\n        self::POWER => pow($x, $y)\n    };\n\n    $this->setValueInContext($resultPath, $result, $context);\n\n    return $this->result(\n        ResultInterface::OK,\n        \'Applied operator "%s" path "%s" and "%s".\',\n        [$operation, $xPath, $yPath]\n    );\n}\n')))}d.isMDXComponent=!0}}]);