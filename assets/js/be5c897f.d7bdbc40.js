"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(d,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={id:"nodes-index",title:"Nodes"},i=void 0,s={unversionedId:"nodes/nodes-index",id:"nodes/nodes-index",title:"Nodes",description:"Multiple parts to a Node",source:"@site/docs/nodes/index.md",sourceDirName:"nodes",slug:"/nodes/",permalink:"/docs/nodes/",draft:!1,tags:[],version:"current",frontMatter:{id:"nodes-index",title:"Nodes"},sidebar:"tutorialSidebar",previous:{title:"Process Override",permalink:"/docs/processes/process-override"},next:{title:"NodeCode",permalink:"/docs/nodes/node-code/"}},d={},l=[{value:"Multiple parts to a Node",id:"multiple-parts-to-a-node",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"How-To Create a Node",id:"how-to-create-a-node",level:2},{value:"1. Add a new class file to your project",id:"1-add-a-new-class-file-to-your-project",level:3},{value:"2. Add any helper traits",id:"2-add-any-helper-traits",level:3},{value:"3. Add constants for context keys or default values",id:"3-add-constants-for-context-keys-or-default-values",level:3},{value:"4. Add the constructor and any dependent classes",id:"4-add-the-constructor-and-any-dependent-classes",level:3},{value:"5. Add the configuration descriptions",id:"5-add-the-configuration-descriptions",level:3},{value:"6. Add the process method",id:"6-add-the-process-method",level:3},{value:"7. Add The CatalogNode Decorators",id:"7-add-the-catalognode-decorators",level:3},{value:"8. Create the ProocessNode",id:"8-create-the-proocessnode",level:3}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"multiple-parts-to-a-node"},"Multiple parts to a Node"),(0,a.kt)("p",null,"Nodes are the base of a process's functionality. Nodes are are composed of three levels\nof configuration and functionality. The base level is the ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeCode")," which contains the\nfunctionality of the node and defines the configuration and possible return values.\n",(0,a.kt)("inlineCode",{parentName:"p"},"CatalogNodes")," apply configuration for the ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeCode")," and are available in the catalog\nfor a process to use. A ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessNode")," is the highest level of configuration and is added\nto a process."),(0,a.kt)("mermaid",{value:"erDiagram\n    PROCESS_NODE ||--|{ CATALOG_NODE : is-a\n    CATALOG_NODE ||--|{ NODE_CODE : is-a"}),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Nodes are a hierarchy of configuration that is compiled and nodes which include processing\ncode based on the configuration."),(0,a.kt)("mermaid",{value:"flowchart LR\n    ProcessNode --\x3e|Configuration| CatalogNode\n    CatalogNode --\x3e|Configuration| NodeCode\n "}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessNode")," configuration cannot override a ",(0,a.kt)("inlineCode",{parentName:"p"},"CatalogNode")," configuration. If there is\na configuration collision (same configuration key) then the ",(0,a.kt)("inlineCode",{parentName:"p"},"CatalogNode")," configuration value\nwill be used."),(0,a.kt)("mermaid",{parentName:"admonition",value:"flowchart LR\n    ProcessNode --\x3e|Configuration a:1, c:2| CatalogNode\n    CatalogNode --\x3e|Configuration a:3, b:4| NodeCode"}),(0,a.kt)("p",{parentName:"admonition"},"In this example the final configuration would be ",(0,a.kt)("inlineCode",{parentName:"p"},"a:3, b:4, c:2")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"CatalogNode")," configuration\nfor a would take precedence over the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessNodes")," value for a.")),(0,a.kt)("p",null,"To see configuration options ",(0,a.kt)("a",{parentName:"p",href:"/docs/nodes/node-code#nodecode-configuration"},"See NodeCode:Configuration")),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeCode")," can have multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"CatalogNodes")," that supply different configurations\nto the underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeCode"),". In turn, each ",(0,a.kt)("inlineCode",{parentName:"p"},"CatalogNode")," can have multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessNodes"),"\nwhich can supply more configuration to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeCode"),"."),(0,a.kt)("p",null,"This hierarchy of code allows easy reuse of the ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeCode")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"CatalogNodes"),"."),(0,a.kt)("mermaid",{value:"erDiagram\nNODEA ||--|{ GREATER_THAN_ZERO : is-a\nNODEB ||--|{ GREATER_THAN_ZERO : is-a\nNODEC ||--|{ LESS_THAN_ZERO : is-a\nNODED ||--|{ LESS_THAN_ZERO : is-a\nNODEE ||--|{ IS_ZERO : is-a\nNODEF ||--|{ IS_ZERO : is-a\nGREATER_THAN_ZERO ||--|{ EVALUATE : is-a\nLESS_THAN_ZERO ||--|{ EVALUATE : is-a\nIS_ZERO ||--|{ EVALUATE : is-a"}),(0,a.kt)("h2",{id:"how-to-create-a-node"},"How-To Create a Node"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Follow the Getting Started guide for the Feral Inline package first.")),(0,a.kt)("p",null,"In this How-To we will walk through how the CalculationNodeCode was built."),(0,a.kt)("h3",{id:"1-add-a-new-class-file-to-your-project"},"1. Add a new class file to your project"),(0,a.kt)("p",null,"Using your IDE, create a new class (called CalculationNodeCode) in the src/Process/NodeCode directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n  namespace Feral\\Core\\Process\\NodeCode\\Data;\n  \n  use Feral\\Core\\Process\\NodeCode\\NodeCodeInterface;\n  \n  class CalculationNodeCode implements NodeCodeInterface\n  {\n")),(0,a.kt)("h3",{id:"2-add-any-helper-traits"},"2. Add any helper traits"),(0,a.kt)("p",null,"There are a lot of helper traits that will help build your NodeCode. See the namespace\nsrc/Process/NodeCode/Traits for all core traits."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"...\n...\n...\nclass CalculationNodeCode implements NodeCodeInterface\n{\n    use NodeCodeMetaTrait,      // adds instance vars, getters, and settters\n        ResultsTrait,           // adds a protected results method\n        ConfigurationTrait,     // adds the configuration and configuration manager\n        ConfigurationValueTrait,// adds helper methods to get a configuration value\n        EmptyConfigurationDescriptionTrait, // add the function to return an empty configuratioon\n        ContextValueTrait,      // adds the functions to get a value from the context\n        ContextMutationTrait,   // adds the functions to modify the conteext\n        OkResultsTrait;         // adds the get results description method to return an OK result\n...\n...\n... \n")),(0,a.kt)("h3",{id:"3-add-constants-for-context-keys-or-default-values"},"3. Add constants for context keys or default values"),(0,a.kt)("p",null,"Multiple parts of the NodeCode class will use similar configuration, results, and context keys. Use\ncontants to set the values then use the constants in the class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"...\n...\n...\n    const KEY = 'calculation';      // the key for the NodeCode used in CatalogNodes\n    const NAME = 'Calculation';     // The name of the NodeCode\n    const DESCRIPTION = 'Take the values from ,,.'; // the description of the node code\n    const X_CONTEXT_PATH = 'x_context_path';    // The key for the context path to get the x value\n    const Y_CONTEXT_PATH = 'y_context_path';    // the key for the context path to get the y value\n    const RESULT_PATH = 'result_context_path';  // the key for the context path where to put the results\n    const OPERATION = 'operation';  // the key for the configuration \n    const ADD = 'add';              // the value for the configuration\n    const SUBTRACT = 'subtract';    // the value for the configuration\n    const MULTIPLY = 'multiply';    // the value for the configuration\n    const DIVIDE = 'divide';        // the value for the configuration\n    const POWER = 'power';          // the value for the configuration\n...\n...\n...\n")),(0,a.kt)("h3",{id:"4-add-the-constructor-and-any-dependent-classes"},"4. Add the constructor and any dependent classes"),(0,a.kt)("p",null,"Each NodeCode can have its own dependencies. Using Symfony we can inject the\ndependencies into the constructor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"...\n...\n...\n    public function __construct(\n        DataPathReaderInterface $dataPathReader = new DataPathReader(),\n        DataPathWriter $dataPathWriter = new DataPathWriter(),\n        ConfigurationManager $configurationManager = new ConfigurationManager()\n    ) {\n        $this->setMeta(\n            self::KEY,\n            self::NAME,\n            self::DESCRIPTION,\n            NodeCodeCategoryInterface::DATA\n        )\n            ->setConfigurationManager($configurationManager)\n            ->setDataPathWriter($dataPathWriter)\n            ->setDataPathReader($dataPathReader);\n    }\n...\n...\n...\n")),(0,a.kt)("h3",{id:"5-add-the-configuration-descriptions"},"5. Add the configuration descriptions"),(0,a.kt)("p",null,"Each NodeCode can have configuration added. The configuration is defined using\nobjects that implement the ConfigurationDescriptionInterface. See\nFeral\\Core\\Process\\NodeCode\\Configuration\\Description; for the classes available\nin the core."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"...\n...\n...\n\n    /**\n     * @return ConfigurationDescriptionInterface[]\n     */\n    public function getConfigurationDescriptions(): array\n    {\n        return [\n            (new StringConfigurationDescription())\n                ->setKey(self::X_CONTEXT_PATH)\n                ->setName('X Context Path')\n                ->setDescription('The context path to the first variable, the left side, of the equation.'),\n            (new StringConfigurationDescription())\n                ->setKey(self::Y_CONTEXT_PATH)\n                ->setName('Y Context Path')\n                ->setDescription('The context path to the second variable, the right side, of the equation.'),\n            (new StringConfigurationDescription())\n                ->setKey(self::RESULT_PATH)\n                ->setName('Result Context Path')\n                ->setDescription('The context path to set the results of the operation.'),\n            (new StringConfigurationDescription())\n                ->setKey(self::OPERATION)\n                ->setName('Calculation Operation')\n                ->setDescription('The mathematical operation to apply to the variables.')\n                ->setOptions(\n                    [\n                        self::ADD,\n                        self::SUBTRACT,\n                        self::MULTIPLY,\n                        self::DIVIDE,\n                        self::POWER,\n                    ]\n                )\n        ];\n    }\n...\n...\n...\n")),(0,a.kt)("h3",{id:"6-add-the-process-method"},"6. Add the process method"),(0,a.kt)("p",null,"This is the heart of a NodeCode. When a process is run the engine will pass\nthe context into the process method which should return a result. You can\nuse the helper traits defined above to make it easy to work with the\nconfiguration, context, and results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'...\n...\n...\n    /**\n     * @inheritDoc\n     * @throws     MissingConfigurationValueException|UnknownComparatorException\n     * @throws     Exception\n     */\n    public function process(ContextInterface $context): ResultInterface\n    {\n        $xPath = $this->getRequiredConfigurationValue(self::X_CONTEXT_PATH);\n        $yPath = $this->getRequiredConfigurationValue(self::Y_CONTEXT_PATH);\n        $operation = $this->getRequiredConfigurationValue(self::OPERATION);\n        $resultPath = $this->getRequiredConfigurationValue(self::RESULT_PATH);\n        $x = $this->getValueFromContext($xPath, $context);\n        $y = $this->getValueFromContext($yPath, $context);\n        $result = match($operation) {\n            self::ADD => $x + $y,\n            self::SUBTRACT => $x - $y,\n            self::MULTIPLY => $x * $y,\n            self::DIVIDE => $x / $y,\n            self::POWER => pow($x, $y)\n        };\n\n        $this->setValueInContext($resultPath, $result, $context);\n\n        return $this->result(\n            ResultInterface::OK,\n            \'Applied operator "%s" path "%s" and "%s".\',\n            [$operation, $xPath, $yPath]\n        );\n    }\n...\n...\n...\n')),(0,a.kt)("h3",{id:"7-add-the-catalognode-decorators"},"7. Add The CatalogNode Decorators"),(0,a.kt)("p",null,"Process nodes use CatalogNodes. It's easy to add CatalogNodes right in your\nNodeCode if there are obvious configuration values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"...\n...\n...\n#[CatalogNodeDecorator(\n    key:'add',\n    name: 'Add',\n    group: 'Data',\n    description: 'Add two values stored in the context',\n    configuration: [self::OPERATOR => self::::ADD])]\n#[CatalogNodeDecorator(\n    key:'subtract',\n    name: 'Subtract',\n    group: 'Data',\n    description: 'Subtract the y value from the x value stored in the context',\n    configuration: [self::OPERATOR => self::::SUBTRACT])]\n  class CalculationNodeCode implements NodeCodeInterface\n  {\n...\n...\n...\n")),(0,a.kt)("h3",{id:"8-create-the-proocessnode"},"8. Create the ProocessNode"),(0,a.kt)("p",null,"In your process, create the ProcessNode to use the CatalogNode created above. Add\nthe additional configuration values required by the NodeCode not defined in the\nCatalogNode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'...\n...\n...\n    {\n      "key": "add",\n      "description": "Add the two values together",\n      "catalog_node_key": "add",\n      "configuration": {\n        "x_context_path": "left",\n        "y_context_path": "right",\n        "result_context_path": "result"\n      },\n      "edges":  {\n        "ok": "output_result"\n      }\n    },\n...\n...\n...\n')))}p.isMDXComponent=!0}}]);