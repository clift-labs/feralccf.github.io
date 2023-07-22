"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,id:"quick-start-with-docker",title:"Quick Start Using Docker"},i=void 0,l={unversionedId:"getting-started/quick-start-with-docker",id:"getting-started/quick-start-with-docker",title:"Quick Start Using Docker",description:"We have created a project you can fork and start building your own project with Docker built in.",source:"@site/docs/getting-started/quick-start-with-docker.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start-with-docker",permalink:"/docs/getting-started/quick-start-with-docker",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"quick-start-with-docker",title:"Quick Start Using Docker"},sidebar:"tutorialSidebar",previous:{title:"Feral Quick Start",permalink:"/docs/getting-started/quick-start"},next:{title:"Feral Inline Sample Project",permalink:"/docs/getting-started/inline-sample"}},s={},c=[{value:"Step 1: Fork the repository",id:"step-1-fork-the-repository",level:2},{value:"Step 2: Clone your fork locally",id:"step-2-clone-your-fork-locally",level:2},{value:"Step 3: Build the Feral Docker Image",id:"step-3-build-the-feral-docker-image",level:2},{value:"Step4: Start the container",id:"step4-start-the-container",level:2},{value:"Step5: Install Symfony and Feral Inline",id:"step5-install-symfony-and-feral-inline",level:2},{value:"Step6: Run Feral commands",id:"step6-run-feral-commands",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have created a project you can fork and start building your own project with Docker built in.\nThis project has the Dockerfile which provides the base PHP-FPM. It also contains the docker-compose file\nto make it easy to include Nginx and the project's app image. "),(0,a.kt)("h2",{id:"step-1-fork-the-repository"},"Step 1: Fork the repository"),(0,a.kt)("p",null,"Like a good cover, say ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=4nAON-MwUPY"},"Siouxsie & The Banshees 'The Passenger'"),", the best work is based on an established work.\nThe first step to using the Feral Docker project as a base is to fork the repository."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cybermantix/feral-docker"},"https://github.com/cybermantix/feral-docker")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Fork")," in the sub nav."),(0,a.kt)("li",{parentName:"ol"},"Enter the new repository and description"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create Fork"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image showing a feral docker fork",src:n(8207).Z,title:"Image showing a fork of feral-docker",width:"2364",height:"1448"})),(0,a.kt)("h2",{id:"step-2-clone-your-fork-locally"},"Step 2: Clone your fork locally"),(0,a.kt)("p",null,"After you have forked the repo, you need to clone it to your development environment\nto start building. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone ssh://john@example.com/path/to/my-project.git \ncd my-project \n")),(0,a.kt)("h2",{id:"step-3-build-the-feral-docker-image"},"Step 3: Build the Feral Docker Image"),(0,a.kt)("p",null,"Once you have cloned the repository locally, you'll need to build the docker image. To\nbuild the image, you'll need to cd into the docker directory of your project and use the\nMakefile target ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," to build the image."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This could take several minutes to build.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker\nmake build\n")),(0,a.kt)("h2",{id:"step4-start-the-container"},"Step4: Start the container"),(0,a.kt)("p",null,"Once the Docker image is built, you can create a container with the image. Using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"start")," target in the Make file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# from the docker directory\nmake start\n")),(0,a.kt)("p",null,"In the current terminal window you'll see information from the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker/bin/startup")," script.\nOnce you see PHP-FPM is ready to handle connections, you can create a terminal window."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# in a seperate terminal window or tab\n# from the docker directory\nmake term\n")),(0,a.kt)("p",null,"At this point you should have two terminal windows or tabs. You can see the output of\neach container in the initial window."),(0,a.kt)("h2",{id:"step5-install-symfony-and-feral-inline"},"Step5: Install Symfony and Feral Inline"),(0,a.kt)("p",null,"The Makefile contains a target ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," which will install symfony and the feral-inline package.\nTo run the install target, in the terminal window type ",(0,a.kt)("inlineCode",{parentName:"p"},"make install"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# in the terminal window running the the term command\n# from the /opt/app directory\nmake install\n")),(0,a.kt)("h2",{id:"step6-run-feral-commands"},"Step6: Run Feral commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# in the terminal window running the the term command\n# from the /opt/app directory\nbin/console feral:catalog\n")),(0,a.kt)("p",null,"The output will show all of the CatalogNodes available in the project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# output\n\nFeral Catalog\nCALCULATION\n - Add (add) : Add two values stored in the context.\n - Divide (divide) : Divide two values stored in the context.\n - Multiply (multiply) : Multiply two values stored in the context.\n - Power (power) : Raise the value from the x path to the power of y.\n - Random (random) : Add a random value to the context\n - Subtract (subtract) : Subtract two values stored in the context.\n - System Random (system_random) : Add a random value to the _random context key\n\nCOMPARATOR\n - Equals Zero (equals_zero) : Check if a context value is zero.\n - Greater Than (greater_than) : Check if a context value is greater than a configuration value.\n - Greater Than Zero (greater_than_zero) : Check if a context value is greater than zero.\n - Less Than Zero (less_than_zero) : Check if a context value is less than zero.\n\nCONTEXT\n - Set Context Value (set_context_value) : Set a value in the context using a value and a path to the location.\n\nDATA\n - Counter (counter) : A counter that ticks every time the node is processed.\n\nFLOW\n - Start Processing (start) : The start node will start a process and return an OK result.\n - Stop Processing (stop) : The stop node will end a process.\n - Throw Exception (throw) : Throw an exception.\n\nLOG\n - Debug Logger (log_debug) : Log a message with the debug level\n - Error Logger (log_error) : Log a message with the error level\n - Info Logger (log_info) : Log a message with the info level\n - Notice Logger (log_notice) : Log a message with the notice level\n - Warning Logger (log_warning) : Log a message with the warning level\n\n")))}u.isMDXComponent=!0},8207:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/feral-docker-fork-8aeaffa2735db0cc6b263a9b30df294c.png"}}]);