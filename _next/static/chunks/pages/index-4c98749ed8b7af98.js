(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3346)}])},3271:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return Image}});let r=i(8754),n=i(1757),l=n._(i(7294)),a=r._(i(3935)),s=r._(i(9201)),o=i(3914),c=i(5494),d=i(869);i(1905);let u=i(1823),f=r._(i(4545)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,i,r,n,l){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function g(e){let[t,i]=l.version.split(".",2),r=parseInt(t,10),n=parseInt(i,10);return r>18||18===r&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,l.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:n,height:a,width:s,decoding:o,className:c,style:d,fetchPriority:u,placeholder:f,loading:h,unoptimized:p,fill:x,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:j,onLoad:y,onError:_,...S}=e;return l.default.createElement("img",{...S,...g(u),loading:h,width:s,height:a,decoding:o,"data-nimg":x?"fill":"1",className:c,style:d,sizes:n,srcSet:r,src:i,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&m(e,f,v,b,w,p))},[i,f,v,b,w,_,p,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,v,b,w,p)},onError:e=>{j(!0),"empty"!==f&&w(!0),_&&_(e)}})});function x(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...g(i.fetchPriority)};return t&&a.default.preload?(a.default.preload(i.src,r),null):l.default.createElement(s.default,null,l.default.createElement("link",{key:"__nimg-"+i.src+i.srcSet+i.sizes,rel:"preload",href:i.srcSet?void 0:i.src,...r}))}let Image=(0,l.forwardRef)((e,t)=>{let i=(0,l.useContext)(u.RouterContext),r=(0,l.useContext)(d.ImageConfigContext),n=(0,l.useMemo)(()=>{let e=h||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:a,onLoadingComplete:s}=e,m=(0,l.useRef)(a);(0,l.useEffect)(()=>{m.current=a},[a]);let g=(0,l.useRef)(s);(0,l.useEffect)(()=>{g.current=s},[s]);let[v,b]=(0,l.useState)(!1),[w,j]=(0,l.useState)(!1),{props:y,meta:_}=(0,o.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:v,showAltText:w});return l.default.createElement(l.default.Fragment,null,l.default.createElement(p,{...y,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:b,setShowAltText:j,ref:t}),_.priority?l.default.createElement(x,{isAppRouter:!i,imgAttributes:y}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),i(1905);let r=i(2393),n=i(5494);function l(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var i;let s,o,c,{src:d,sizes:u,unoptimized:f=!1,priority:h=!1,loading:m,className:g,quality:p,width:x,height:v,fill:b=!1,style:w,onLoad:j,onLoadingComplete:y,placeholder:_="empty",blurDataURL:S,fetchPriority:N,layout:P,objectFit:k,objectPosition:C,lazyBoundary:E,lazyRoot:z,...O}=e,{imgConf:I,showAltText:M,blurComplete:R,defaultLoader:D}=t,T=I||n.imageConfigDefault;if("allSizes"in T)s=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);s={...T,allSizes:e,deviceSizes:t}}let L=O.loader||D;delete O.loader,delete O.srcSet;let A="__next_img_default"in L;if(A){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:i,...r}=t;return e(r)}}if(P){"fill"===P&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!u&&(u=t)}let G="",F=a(x),B=a(v);if("object"==typeof(i=d)&&(l(i)||void 0!==i.src)){let e=l(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,G=e.src,!b){if(F||B){if(F&&!B){let t=F/e.width;B=Math.round(e.height*t)}else if(!F&&B){let t=B/e.height;F=Math.round(e.width*t)}}else F=e.width,B=e.height}}let W=!h&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:G)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,W=!1),s.unoptimized&&(f=!0),A&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),h&&(N="high");let U=a(p),q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:C}:{},M?{}:{color:"transparent"},w),J=R||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:B,blurWidth:o,blurHeight:c,blurDataURL:S||"",objectFit:q.objectFit})+'")':'url("'+_+'")',V=J?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},H=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:l,sizes:a,loader:s}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let l=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:l,kind:"x"}}(t,n,a),d=o.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:o.map((e,r)=>s({config:t,src:i,quality:l,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:s({config:t,src:i,quality:l,width:o[d]})}}({config:s,src:d,unoptimized:f,width:F,quality:U,sizes:u,loader:L}),X={...O,loading:W?"lazy":m,fetchPriority:N,width:F,height:B,decoding:"async",className:g,style:{...q,...V},sizes:H.sizes,srcSet:H.srcSet,src:H.src},Y={unoptimized:f,priority:h,placeholder:_,fill:b};return{props:X,meta:Y}}},2393:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:l,objectFit:a}=e,s=r?40*r:t,o=n?40*n:i,c=s&&o?"viewBox='0 0 "+s+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},645:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return o},default:function(){return c}});let r=i(8754),n=i(3914),l=i(1905),a=i(3271),s=r._(i(4545)),o=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},c=a.Image},4545:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},3346:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var r=i(5893),n=i(5675),l=i.n(n);let a={title:"Projects",projects:[{title:"Natural Language Processing (NLP)",description:"Developed a NLP toolkit for text analysis and synthesis with unigram and bigram models, complete with preprocessing, statistical analysis, and automated text generation capabilities.",github:"danieldawan/nlp-project"},{title:"Sound Design with Python",description:"Developed an application that integrates core musical concepts with Python code, enabling automated music composition and enhanced production techniques.",github:"danieldawan/sound-design-py"}]},s={title:"Tech Stack",stack:["Python","Git","JavaScript","SQL","HTML","CSS"]},o={title:"Contact",email:"hire@danieldawan.com",github:"danieldawan",linkedin:"daniel-dawan"};function c(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"overflow-x-hidden w-full",children:(0,r.jsx)("h2",{className:"landingSectionTitle max-w-max mx-0 text-left relative mb-3 md:w-max text-2xl",children:o.title})}),(0,r.jsxs)("p",{children:["Email contact:"," ",(0,r.jsx)("a",{className:"dark:text-white text-black transition-colors duration-500",href:"mailto:".concat(o.email),children:o.email})]}),(0,r.jsxs)("div",{className:"flex space-x-5 mt-5 text-lightText transition-colors duration-500",children:[o.github&&(0,r.jsx)("a",{href:"https://github.com/".concat(o.github),target:"_blank",rel:"noreferrer",children:(0,r.jsx)(l(),{src:"/static/icons/github.svg",width:20,height:20,alt:"Github icon"})}),o.linkedin&&(0,r.jsx)("a",{href:"https://linkedin.com/in/".concat(o.linkedin),target:"_blank",rel:"noreferrer",children:(0,r.jsx)(l(),{src:"/static/icons/linkedin.svg",width:20,height:20,alt:"LinkedIn icon"})})]})]})}var d=i(9008),u=i.n(d),f=i(425);function h(e){let{hero:t}=e,{theme:i,setTheme:n}=(0,f.F)();return(0,r.jsxs)("div",{className:"mb-5 relative",children:[" ",(0,r.jsx)("div",{className:"flex justify-center w-full",children:(0,r.jsx)("h1",{className:"text-4.5xl",children:"Daniel Dawan"})}),(0,r.jsx)("div",{className:"absolute right-0 top-1/2 transform -translate-y-1/2",children:(0,r.jsx)(l(),{src:"/static/icons/sun.svg",width:30,height:30,alt:"Toggle theme",className:"cursor-pointer",onClick:()=>n("light"===i?"dark":"light")})})]})}function m(){return(0,r.jsxs)("div",{className:"-mb-4",children:[(0,r.jsx)("div",{className:"overflow-x-hidden w-full",children:(0,r.jsx)("h2",{className:"landingSectionTitle max-w-max mx-0 text-left relative mb-5 md:w-max text-2xl",children:a.title})}),(0,r.jsx)("p",{className:"text-lg",children:a.desc}),(0,r.jsx)("div",{children:a.projects.map((e,t)=>(0,r.jsxs)("div",{className:"p-6 border border-lightText straight-xl mb-4 rounded",children:[(0,r.jsx)("h3",{children:e.title}),(0,r.jsx)("p",{children:e.description}),(0,r.jsx)("div",{className:"flex items-center flex-wrap -m-3 pt-5",children:e.github&&(0,r.jsxs)("a",{href:"https://github.com/".concat(e.github),className:"flex items-center py-1 px-3",target:"_blank",rel:"noreferrer",children:[(0,r.jsx)(l(),{src:"/static/icons/github.svg",width:18,height:18,alt:"Link icon"}),(0,r.jsx)("span",{className:"ml-2  text-lightText  transition-colors duration-500",children:e.github})]})})]},t))})]})}function g(){return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"-mb-4",children:[(0,r.jsx)("div",{className:"overflow-x-hidden w-full",children:(0,r.jsx)("h2",{className:"landingSectionTitle max-w-max mx-0 text-left relative mb-5 md:w-max text-2xl",children:s.title})}),(0,r.jsx)("div",{className:"w-full flex flex-wrap -m-2",children:s.stack.map((e,t)=>(0,r.jsx)("span",{className:"border  border-lightText straight-lg m-2 px-3 py-1 rounded",children:e},t))})]})})}function p(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u(),{children:(0,r.jsx)("title",{children:"Daniel Dawan"})}),(0,r.jsxs)("div",{className:"p-10 lg:p-9 max-w-4xl m-auto w-full",children:[(0,r.jsx)(h,{}),(0,r.jsxs)("div",{className:"p-0 space-y-10",children:[(0,r.jsx)(m,{}),(0,r.jsx)(g,{}),(0,r.jsx)(c,{})]})]})]})}},5675:function(e,t,i){e.exports=i(645)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);