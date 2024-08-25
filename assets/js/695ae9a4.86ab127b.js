"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8191],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var o=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),f=l,k=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return t?o.createElement(k,i(i({ref:n},u),{},{components:t})):o.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(7462),l=(t(7294),t(3905));const r={title:"slack_block_builder",tags:["Category:Flow","Package:Slack"]},i=void 0,a={unversionedId:"reference/node-code/SlackBlockBuilderNodeCode",id:"reference/node-code/SlackBlockBuilderNodeCode",title:"slack_block_builder",description:"Start the process by returning the OK status.",source:"@site/docs/reference/node-code/SlackBlockBuilderNodeCode.md",sourceDirName:"reference/node-code",slug:"/reference/node-code/SlackBlockBuilderNodeCode",permalink:"/docs/reference/node-code/SlackBlockBuilderNodeCode",draft:!1,tags:[{label:"Category:Flow",permalink:"/docs/tags/category-flow"},{label:"Package:Slack",permalink:"/docs/tags/package-slack"}],version:"current",frontMatter:{title:"slack_block_builder",tags:["Category:Flow","Package:Slack"]},sidebar:"tutorialSidebar",previous:{title:"throw_exception",permalink:"/docs/reference/node-code/ThrowExceptionNodeCode"},next:{title:"slack_send_blocks",permalink:"/docs/reference/node-code/SlackSendBlocks"}},s={},c=[{value:"Key",id:"key",level:2},{value:"Configuration Keys:",id:"configuration-keys",level:2},{value:"Results",id:"results",level:2},{value:"Function Options",id:"function-options",level:2},{value:"Example",id:"example",level:2},{value:"Process Method",id:"process-method",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Start the process by returning the OK status."),(0,l.kt)("h2",{id:"key"},"Key"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"slack_section_block_builder")),(0,l.kt)("h2",{id:"configuration-keys"},"Configuration Keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"function")," - The builder function to run. Examples init, add_button, build"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," - The options used in the builder function. Each function has different options."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"block_path")," - The path where the block will be stored after the build function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context_options")," - The path in the context for options. This can be used for dynamic text.")),(0,l.kt)("h2",{id:"results"},"Results"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ok")," - The function has been run")),(0,l.kt)("h2",{id:"function-options"},"Function Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"init",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Surface (optional)"))),(0,l.kt)("li",{parentName:"ul"},"add_button",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"action_id"),(0,l.kt)("li",{parentName:"ul"},"label"),(0,l.kt)("li",{parentName:"ul"},"url (optional)"),(0,l.kt)("li",{parentName:"ul"},"value (optional)"),(0,l.kt)("li",{parentName:"ul"},"style (optional)")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"The builder node starts with the init function followed by add function. Once the content\nis complete, call the build function."),(0,l.kt)("mermaid",{value:"flowchart LR\n%%NODES\n A[init]\n B[add image]\n C[add text]\n D[add button]\n E[build]\n\n%%LINKS\nA--\x3eB\nB--\x3eC\nC--\x3eD\nD--\x3eE"}),(0,l.kt)("h2",{id:"process-method"},"Process Method"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"}," public function process(ContextInterface $context): ResultInterface\n    {\n        $fn = $this->getConfigurationValue(self::CNF_FUNCTION);\n        $configOptions = $this->getArrayConfigurationValue(self::CNF_OPTIONS, []);\n        $contextOptions = $this->getValueFromContext(self::CTX_OPTIONS, $context) ?? [];\n        $options = array_merge($configOptions, $contextOptions);\n\n        switch($fn) {\n            case self::INIT:\n                $this->builder->initAsSectionForSurface($options[self::OPTION_SURFACE] ?? Surface::MESSAGE);\n                break;\n            case self::ADD_BUTTON:\n                $this->builder->addButton(\n                    $options[self::OPTION_ACTION_ID],\n                    $options[self::OPTION_LABEL],\n                    $options[self::OPTION_URL] ?? null,\n                    $options[self::OPTION_VALUE] ?? null,\n                    $options[self::OPTION_STYLE] ?? null,\n                );\n                break;\n            case self::ADD_TEXT:\n                $this->builder->addText(\n                    $options[self::OPTION_LABEL],\n                    $options[self::OPTION_TYPE] ?? Text::PLAIN,\n                    $options[self::OPTION_EMOJI] ?? null,\n                    $options[self::OPTION_VERBATIM] ?? false,\n                );\n                break;\n            case self::ADD_CHECKBOX:\n                $this->builder->addCheckboxWithArray(\n                    $options[self::OPTION_ACTION_ID],\n                    $options[self::OPTION_CHOICES],\n                    $options[self::OPTION_CHOSEN] ?? [],\n                );\n                break;\n            case self::ADD_IMAGE:\n                $this->builder->addImage(\n                    $options[self::OPTION_URL],\n                    $options[self::OPTION_TEXT] ?? null,\n                );\n                break;\n            case self::ADD_DATEPICKER:\n                $this->builder->addDatePicker(\n                    $options[self::OPTION_ACTION_ID],\n                    $options[self::OPTION_TEXT] ?? null,\n                    $options[self::OPTION_DATE] ?? null,\n                );\n                break;\n            case self::ADD_INPUT:\n                $this->builder->addPlainTextInput(\n                    $options[self::OPTION_ACTION_ID],\n                    $options[self::OPTION_TEXT] ?? null,\n                    $options[self::OPTION_VALUE] ?? null,\n                    $options[self::OPTION_MULTILINE] ?? null,\n                    $options[self::OPTION_MINIMUM_LENGTH] ?? null,\n                    $options[self::OPTION_MAXIMUM_LENGTH] ?? null,\n                );\n                break;\n            case self::BUILD:\n                $path = $this->getStringConfigurationValue(self::CNF_CTX_BLOCK, self::DCNF_CTX_BLOCK);\n                $block = $this->builder->build();\n                $this->setValueInContext($path, $block, $context);\n                break;\n            default:\n                throw new \\SlackBlockException(sprintf('Invalid function \"%s\"', $fn));\n        }\n\n\n        return $this->result(\n            ResultInterface::OK,\n            'Slack Block Builder processed function \"%s\" on the builder.',\n            [$fn]\n        );\n    }\n")))}d.isMDXComponent=!0}}]);