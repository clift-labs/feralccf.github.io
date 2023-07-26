"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5,title:"set_context_value",tags:["Category:Data","Package:Core"]},l=void 0,i={unversionedId:"reference/node-code/SetContextValueNodeCode",id:"reference/node-code/SetContextValueNodeCode",title:"set_context_value",description:"Set the value of a context key to a configured value. To set a deep reference the parent object|array must exist.",source:"@site/docs/reference/node-code/SetContextValueNodeCode.md",sourceDirName:"reference/node-code",slug:"/reference/node-code/SetContextValueNodeCode",permalink:"/docs/reference/node-code/SetContextValueNodeCode",draft:!1,tags:[{label:"Category:Data",permalink:"/docs/tags/category-data"},{label:"Package:Core",permalink:"/docs/tags/package-core"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"set_context_value",tags:["Category:Data","Package:Core"]},sidebar:"tutorialSidebar",previous:{title:"set_context_table",permalink:"/docs/reference/node-code/SetContextTableNodeCode"},next:{title:"start",permalink:"/docs/reference/node-code/StartProcessingNodeCode"}},c={},u=[{value:"Key",id:"key",level:2},{value:"Configuration Keys:",id:"configuration-keys",level:2},{value:"Value Type Options",id:"value-type-options",level:3},{value:"Results",id:"results",level:2},{value:"Process Method",id:"process-method",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Set the value of a context key to a configured value. To set a deep reference the parent object|array must exist."),(0,o.kt)("h2",{id:"key"},"Key"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set_context_value")),(0,o.kt)("h2",{id:"configuration-keys"},"Configuration Keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),"  - The value added to the context"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context_path")," - The key in the context that will be set"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value_type")," - The type of var to place into the context")),(0,o.kt)("h3",{id:"value-type-options"},"Value Type Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'string'"),(0,o.kt)("li",{parentName:"ul"},"'int'"),(0,o.kt)("li",{parentName:"ul"},"'float'")),(0,o.kt)("h2",{id:"results"},"Results"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ok")," - The message has been logged")),(0,o.kt)("h2",{id:"process-method"},"Process Method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public function process(ContextInterface $context): ResultInterface\n{\n    $valueType = $this->getRequiredConfigurationValue(self::VALUE_TYPE, self::OPTION_STRING);\n    $value = $this->getRequiredConfigurationValue(self::VALUE);\n    $contextPath = $this->getRequiredConfigurationValue(self::CONTEXT_PATH);\n\n    $value = match ($valueType) {\n        self::OPTION_STRING => (string)$value,\n        self::OPTION_INT => (int)$value,\n        self::OPTION_FLOAT => (float)$value,\n        default => throw new Exception(sprintf('Unknown type \"%s\".', $valueType)),\n    };\n\n    $this->setValueInContext($contextPath, $value, $context);\n\n    return $this->result(\n        ResultInterface::OK,\n        'Set value in context path \"%s\".',\n        [$contextPath]\n    );\n}\n")))}d.isMDXComponent=!0}}]);