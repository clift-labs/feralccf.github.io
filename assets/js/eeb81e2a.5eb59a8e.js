"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5,title:"log",tags:["Category:Data","Package:Core"]},l=void 0,i={unversionedId:"reference/node-code/LogEncodeNodeCode",id:"reference/node-code/LogEncodeNodeCode",title:"log",description:"Sent a message to the logs. The message can include token variables which will be replaced with values from the context.",source:"@site/docs/reference/node-code/LogEncodeNodeCode.md",sourceDirName:"reference/node-code",slug:"/reference/node-code/LogEncodeNodeCode",permalink:"/docs/reference/node-code/LogEncodeNodeCode",draft:!1,tags:[{label:"Category:Data",permalink:"/docs/tags/category-data"},{label:"Package:Core",permalink:"/docs/tags/package-core"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"log",tags:["Category:Data","Package:Core"]},sidebar:"tutorialSidebar",previous:{title:"json_encode",permalink:"/docs/reference/node-code/JsonEncodeNodeCode"},next:{title:"random",permalink:"/docs/reference/node-code/RandomValueNodeCode"}},s={},c=[{value:"Key",id:"key",level:2},{value:"Configuration Keys:",id:"configuration-keys",level:2},{value:"Level Options",id:"level-options",level:3},{value:"Results",id:"results",level:2},{value:"Process Method",id:"process-method",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sent a message to the logs. The message can include token variables which will be replaced with values from the context.\nThis will log to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.php-fig.org/psr/psr-3/"},(0,o.kt)("inlineCode",{parentName:"a"},"Psr\\Log\\LoggerInterface"))," object injected into the constructor. You can log to\nany level found in ",(0,o.kt)("inlineCode",{parentName:"p"},"Psr\\Log\\LogLevel")),(0,o.kt)("h2",{id:"key"},"Key"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"log")),(0,o.kt)("h2",{id:"configuration-keys"},"Configuration Keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message")," - The message to log"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"level")," - the log level to use")),(0,o.kt)("h3",{id:"level-options"},"Level Options"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/php-fig/log/blob/master/src/LogLevel.php"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"LogLevel")))," for the PSR implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"emergency"),(0,o.kt)("li",{parentName:"ul"},"alert"),(0,o.kt)("li",{parentName:"ul"},"critical"),(0,o.kt)("li",{parentName:"ul"},"error"),(0,o.kt)("li",{parentName:"ul"},"warning"),(0,o.kt)("li",{parentName:"ul"},"notice"),(0,o.kt)("li",{parentName:"ul"},"info"),(0,o.kt)("li",{parentName:"ul"},"debug")),(0,o.kt)("h2",{id:"results"},"Results"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ok")," - The message has been logged")),(0,o.kt)("h2",{id:"process-method"},"Process Method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public function process(ContextInterface $context): ResultInterface\n{\n    $message = $this->getRequiredConfigurationValue(self::MESSAGE);\n    $level = $this->getRequiredConfigurationValue(self::LEVEL, LogLevel::INFO);\n\n    $message = $this->template->replace($message, $context->getAll());\n    $this->logger->log($level, $message);\n\n    return $this->result(\n        ResultInterface::OK,\n        'Logged the message to the logger.',\n        []\n    );\n}\n")))}u.isMDXComponent=!0}}]);