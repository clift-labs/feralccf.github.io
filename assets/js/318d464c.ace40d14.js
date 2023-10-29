"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3328],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),k=i,h=p["".concat(s,".").concat(k)]||p[k]||u[k]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const o={id:"feral-slack-package",title:"Feral Slack Package"},l=void 0,r={unversionedId:"packages/feral-slack-package",id:"packages/feral-slack-package",title:"Feral Slack Package",description:"An easy way to communicate with Slack",source:"@site/docs/packages/feral-slack.md",sourceDirName:"packages",slug:"/packages/feral-slack-package",permalink:"/docs/packages/feral-slack-package",draft:!1,tags:[],version:"current",frontMatter:{id:"feral-slack-package",title:"Feral Slack Package"},sidebar:"tutorialSidebar",previous:{title:"Feral Inline Package",permalink:"/docs/packages/feral-inline-package"},next:{title:"Reference",permalink:"/docs/category/reference"}},s={},c=[{value:"An easy way to communicate with Slack",id:"an-easy-way-to-communicate-with-slack",level:2},{value:"SlackBlockBuilderNodeCode",id:"slackblockbuildernodecode",level:2},{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>__construct</code>",id:"__construct",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>process</code>",id:"process",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Constants",id:"constants",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"SlackPostWebhookNodeCode",id:"slackpostwebhooknodecode",level:2},{value:"Description",id:"description",level:2},{value:"Usage",id:"usage-1",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuration Parameters",id:"configuration-parameters",level:3},{value:"Configuration Descriptions",id:"configuration-descriptions",level:3},{value:"Methods",id:"methods-1",level:2},{value:"<code>__construct</code>",id:"__construct-1",level:3},{value:"<code>getConfigurationDescriptions</code>",id:"getconfigurationdescriptions",level:3},{value:"<code>process</code>",id:"process-1",level:3},{value:"Exceptions",id:"exceptions-1",level:2},{value:"Result",id:"result",level:2},{value:"Example",id:"example",level:2},{value:"SlackProcessSlashCommandNodeCode",id:"slackprocessslashcommandnodecode",level:2},{value:"Namespace and Dependencies",id:"namespace-and-dependencies",level:2},{value:"Description",id:"description-1",level:2},{value:"Important Note on Token Verification",id:"important-note-on-token-verification",level:3},{value:"Class Definition",id:"class-definition",level:2},{value:"Constants",id:"constants-1",level:2},{value:"Configuration",id:"configuration-1",level:2},{value:"Process Method",id:"process-method",level:2},{value:"Exceptions",id:"exceptions-2",level:3},{value:"Usage Example",id:"usage-example",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"an-easy-way-to-communicate-with-slack"},"An easy way to communicate with Slack"),(0,i.kt)("h2",{id:"slackblockbuildernodecode"},"SlackBlockBuilderNodeCode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SlackBlockBuilderNodeCode")," is a NodeCode within the Feral Slack Package, designed to streamline the process of building and managing Slack message blocks. It leverages the ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockBuilder")," utility to facilitate the creation of various Slack block elements based on the provided configuration and context."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This class integrates closely with the Feral framework, utilizing traits and interfaces to ensure consistency and compatibility across different components. It serves as a bridge between your application and Slack, allowing you to create complex Slack messages with ease."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"SlackBlockBuilderNodeCode"),", instantiate the class and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," method with the appropriate context. This method takes care of interpreting the configuration and context, directing the flow to various Slack block building functions accordingly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$slackBlockBuilderNodeCode = new SlackBlockBuilderNodeCode($blockBuilder);\n$result = $slackBlockBuilderNodeCode->process($context);\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"__construct"},(0,i.kt)("inlineCode",{parentName:"h3"},"__construct")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"public function __construct(\n    protected BlockBuilder $builder,\n    DataPathReaderInterface $dataPathReader = null,\n    DataPathWriterInterface $dataPathWriter = null,\n    ConfigurationManager $configurationManager = null\n)\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BlockBuilder $builder"),": An instance of ",(0,i.kt)("inlineCode",{parentName:"li"},"BlockBuilder")," used for constructing Slack message blocks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DataPathReaderInterface $dataPathReader"),": (Optional) A utility for reading data from paths."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DataPathWriterInterface $dataPathWriter"),": (Optional) A utility for writing data to paths."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConfigurationManager $configurationManager"),": (Optional) Manages configuration settings.")),(0,i.kt)("h3",{id:"process"},(0,i.kt)("inlineCode",{parentName:"h3"},"process")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"public function process(ContextInterface $context): ResultInterface\n")),(0,i.kt)("p",null,"Processes the provided context, building Slack message blocks based on the configuration and context data."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ContextInterface $context"),": The context containing data and settings for the current process.")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ResultInterface"),": The result of the processing, indicating success or failure, along with any relevant messages or data.")),(0,i.kt)("h2",{id:"constants"},"Constants"),(0,i.kt)("p",null,"This class defines various constants for internal use, including keys for configuration settings, context paths, and Slack block function identifiers."),(0,i.kt)("p",null,"Examples include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KEY"),": A unique key identifying this node code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NAME"),": A human-readable name for this node code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DESCRIPTION"),": A description of what this node code does."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CNF_FUNCTION"),": Key for accessing the function setting in the configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CNF_OPTIONS"),": Key for accessing the options setting in the configuration.")),(0,i.kt)("h2",{id:"exceptions"},"Exceptions"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," method may throw a ",(0,i.kt)("inlineCode",{parentName:"p"},"SlackBlockException")," if an invalid function is provided in the configuration."),(0,i.kt)("h2",{id:"slackpostwebhooknodecode"},"SlackPostWebhookNodeCode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SlackPostWebhookNodeCode")," is a node code within the Feral Slack Package, responsible for sending messages to a Slack channel via a Slack webhook. It utilizes PHP's cURL functions to make HTTP POST requests."),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Slack provides a webhook system that allows external sources to post messages directly to a Slack channel. This class interfaces with such a webhook, facilitating the sending of messages from your application to your Slack workspace."),(0,i.kt)("h2",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,"To use this class, you need to include it in your project, instantiate it, and then call its ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," method, passing in the necessary context."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The class requires several configuration parameters to be set, either during instantiation or before calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," method:"),(0,i.kt)("h3",{id:"configuration-parameters"},"Configuration Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"context_path"),": The context path where the response from the Slack webhook will be stored. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"_results"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"context_message_path"),": The path within the context where the message to be sent to Slack is stored. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"slack_message"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"webhook_url"),": The URL of the Slack webhook.")),(0,i.kt)("h3",{id:"configuration-descriptions"},"Configuration Descriptions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Context Message Path"),": The path to the message that will be sent to the Slack webhook."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URL"),": The URL of the Slack webhook.")),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"__construct-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"__construct")),(0,i.kt)("p",null,"The constructor method initializes the class and sets up the configuration manager and data path reader/writer."),(0,i.kt)("h3",{id:"getconfigurationdescriptions"},(0,i.kt)("inlineCode",{parentName:"h3"},"getConfigurationDescriptions")),(0,i.kt)("p",null,"Returns an array of configuration descriptions, providing information on the configuration parameters required by this class."),(0,i.kt)("h3",{id:"process-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"process")),(0,i.kt)("p",null,"This is the main method of the class, responsible for sending the message to the Slack webhook."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It first retrieves the required configuration values."),(0,i.kt)("li",{parentName:"ul"},"Then, it sets up a cURL session to send a POST request to the Slack webhook URL, with the message formatted in JSON."),(0,i.kt)("li",{parentName:"ul"},"After executing the cURL session, it stores the response in the specified context path."),(0,i.kt)("li",{parentName:"ul"},"Finally, it closes the cURL session and returns a result object, indicating the success or failure of the operation.")),(0,i.kt)("h2",{id:"exceptions-1"},"Exceptions"),(0,i.kt)("p",null,"If the cURL session fails, a ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessException")," is thrown, providing information about the error that occurred."),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("p",null,"Upon successful execution, the method returns a result object with a status of ",(0,i.kt)("inlineCode",{parentName:"p"},"OK"),", and additional information about the HTTP request and response."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"To utilize this class, ensure that your Slack workspace is set up to receive incoming webhooks, and that you have the appropriate webhook URL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Feral\\Slack\\Process\\NodeCode\\SlackPostWebhookNodeCode;\n\n$slackNode = new SlackPostWebhookNodeCode();\n$context = ... // initialize your context here\n$result = $slackNode->process($context);\n")),(0,i.kt)("p",null,"Make sure to replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," with the actual implementation of your context, and configure the necessary parameters before calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," method."),(0,i.kt)("h2",{id:"slackprocessslashcommandnodecode"},"SlackProcessSlashCommandNodeCode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SlackProcessSlashCommandNodeCode")," is a part of Feral's code composition framework specifically designed to process Slack slash commands. This class enables your PHP application to handle slash command requests from Slack, parse the incoming data, and store relevant information in the application context for further use."),(0,i.kt)("h2",{id:"namespace-and-dependencies"},"Namespace and Dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace Feral\\Slack\\Process\\NodeCode;\n\nuse Feral\\Core\\Process\\Configuration\\ConfigurationManager;\nuse Feral\\Core\\Process\\Context\\ContextInterface;\n... (Other dependencies)\nuse Feral\\Slack\\Utility\\Slack\\SlashCommandInput;\n")),(0,i.kt)("h2",{id:"description-1"},"Description"),(0,i.kt)("p",null,"When a Slack slash command is invoked, Slack sends a POST request to a configured endpoint with detailed information about the command. This class processes that POST data, verifies its integrity, extracts necessary information, and stores it in the application context."),(0,i.kt)("h3",{id:"important-note-on-token-verification"},"Important Note on Token Verification"),(0,i.kt)("p",null,"This class expects a verification token to ensure that the request is legitimately being sent by Slack. However, Slack recommends using signed secrets for verification instead of verification tokens due to security reasons. Make sure to handle this part carefully to maintain the integrity and security of your application."),(0,i.kt)("h2",{id:"class-definition"},"Class Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class SlackProcessSlashCommandNodeCode implements NodeCodeInterface\n{\n    ... (Use Traits)\n    \n    const KEY = 'process_slash_command';\n    const NAME = 'Slack Process the input from ';\n    const DESCRIPTION = 'Send a message to a slack webhook.';\n    ... (Other Constants)\n    \n    ... (Constructor and Method Definitions)\n}\n")),(0,i.kt)("h2",{id:"constants-1"},"Constants"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KEY"),": Unique identifier for the NodeCode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NAME"),": A descriptive name for the NodeCode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DESCRIPTION"),": Description of what the NodeCode does."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SETTER"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DCNF_CTX_INPUT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DCNF_CTX_TEXT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DCNF_CTX_DATA"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"CNF_CTX_INPUT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"CNF_CTX_TEXT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"CNF_CTX_DATA"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"CNF_TOKEN"),": Configuration and context-related constants.")),(0,i.kt)("h2",{id:"configuration-1"},"Configuration"),(0,i.kt)("p",null,"This class can be configured using the following options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Input Path")," (",(0,i.kt)("inlineCode",{parentName:"li"},"CNF_CTX_INPUT"),"): The context path where the POST body from Slack is found."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Message Path")," (",(0,i.kt)("inlineCode",{parentName:"li"},"CNF_CTX_TEXT"),"): The context path where the extracted message will be stored."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Data Path")," (",(0,i.kt)("inlineCode",{parentName:"li"},"CNF_CTX_DATA"),"): The context path where the processed data object will be stored."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Token")," (",(0,i.kt)("inlineCode",{parentName:"li"},"CNF_TOKEN"),"): The secret token provided by Slack when the command was registered.")),(0,i.kt)("h2",{id:"process-method"},"Process Method"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," method performs the following actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Retrieves configuration values and input data from the context."),(0,i.kt)("li",{parentName:"ol"},"Parses the input data into an associative array."),(0,i.kt)("li",{parentName:"ol"},"Verifies the token if provided."),(0,i.kt)("li",{parentName:"ol"},"Checks for required fields in the input data."),(0,i.kt)("li",{parentName:"ol"},"Converts the input data into a ",(0,i.kt)("inlineCode",{parentName:"li"},"SlashCommandInput")," object."),(0,i.kt)("li",{parentName:"ol"},"Stores the message and the data object in the context.")),(0,i.kt)("h3",{id:"exceptions-2"},"Exceptions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MissingConfigurationValueException"),": Thrown if required configuration values are missing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UnknownTypeException"),": Thrown if there are issues with type handling."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProcessException"),": Thrown if there are issues with processing the slash command, such as missing required fields or token verification failure.")),(0,i.kt)("h2",{id:"usage-example"},"Usage Example"),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"SlackProcessSlashCommandNodeCode"),", ensure that you have an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"ContextInterface")," prepared with the Slack POST data, and the required configuration values are set. Then, instantiate the class and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$context = ...; // An instance of ContextInterface with Slack POST data\n$slackNodeCode = new SlackProcessSlashCommandNodeCode();\n$result = $slackNodeCode->process($context);\n")),(0,i.kt)("p",null,"This will process the Slack slash command, verify the token, extract the message and other information, and store them in the specified paths in the context."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cybermantix/feral-slack"},"GitHub")))}u.isMDXComponent=!0}}]);