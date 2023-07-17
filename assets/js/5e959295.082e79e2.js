"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,id:"quick-start-with-docker",title:"Quick Start Using Docker"},i=void 0,l={unversionedId:"getting-started/quick-start-with-docker",id:"getting-started/quick-start-with-docker",title:"Quick Start Using Docker",description:"We have created a project you can fork and start building your own project with Docker built in.",source:"@site/docs/getting-started/quick-start-with-docker.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start-with-docker",permalink:"/docs/getting-started/quick-start-with-docker",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"quick-start-with-docker",title:"Quick Start Using Docker"},sidebar:"tutorialSidebar",previous:{title:"Feral Quick Start",permalink:"/docs/getting-started/quick-start"},next:{title:"Feral Inline Sample Project",permalink:"/docs/getting-started/inline-sample"}},c={},s=[{value:"Step 1: Fork the repository",id:"step-1-fork-the-repository",level:2},{value:"Step 2: Clone your fork locally",id:"step-2-clone-your-fork-locally",level:2},{value:"Step 3: Build the Feral Docker Image",id:"step-3-build-the-feral-docker-image",level:2},{value:"Step4: Start the container",id:"step4-start-the-container",level:2},{value:"Step5: Install Symfony and Feral Inline",id:"step5-install-symfony-and-feral-inline",level:2},{value:"Step6: Run Feral commands",id:"step6-run-feral-commands",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have created a project you can fork and start building your own project with Docker built in.\nThis project has the Dockerfile which provides the base PHP-FPM. It also contains the docker-compose file\nto make it easy to include Nginx and the project's app image. "),(0,o.kt)("h2",{id:"step-1-fork-the-repository"},"Step 1: Fork the repository"),(0,o.kt)("h2",{id:"step-2-clone-your-fork-locally"},"Step 2: Clone your fork locally"),(0,o.kt)("p",null,"After you have forked the repo, you need to clone it to your development environment\nto start building. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone ssh://john@example.com/path/to/my-project.git \ncd my-project \n")),(0,o.kt)("h2",{id:"step-3-build-the-feral-docker-image"},"Step 3: Build the Feral Docker Image"),(0,o.kt)("p",null,"Once you have cloned the repository locally, you'll need to build the docker image. To\nbuild the image, you'll need to cd into the docker directory of your project and use the\nMakefile target ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," to build the image."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This could take several minutes to build.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker\nmake build\n")),(0,o.kt)("h2",{id:"step4-start-the-container"},"Step4: Start the container"),(0,o.kt)("p",null,"Once the Docker image is built, you can create a container with the image. Using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"start")," target in the Make file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# from the docker directory\nmake start\n")),(0,o.kt)("p",null,"In the current terminal window you'll see information from the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/bin/startup")," script.\nOnce you see PHP-FPM is ready to handle connections, you can create a terminal window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# in a seperate terminal window or tab\n# from the docker directory\nmake term\n")),(0,o.kt)("p",null,"At this point you should have two terminal windows or tabs. You can see the output of\neach container in the initial window."),(0,o.kt)("h2",{id:"step5-install-symfony-and-feral-inline"},"Step5: Install Symfony and Feral Inline"),(0,o.kt)("h2",{id:"step6-run-feral-commands"},"Step6: Run Feral commands"))}d.isMDXComponent=!0}}]);