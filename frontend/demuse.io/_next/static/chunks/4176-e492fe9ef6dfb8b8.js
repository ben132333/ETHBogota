(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4176],{79361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},69572:function(e,t,i){var n=i(14259),r=i(40554);e.exports=function(e,t,i){return e&&e.length?(t=i||void 0===t?1:r(t),n(e,0,t<0?0:t)):[]}},28045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(79361).Z,r=i(94941).Z,o=i(53929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,s=e.unoptimized,c=void 0!==s&&s,m=e.priority,p=void 0!==m&&m,S=e.loading,E=e.lazyRoot,j=void 0===E?null:E,R=e.lazyBoundary,C=e.className,_=e.quality,L=e.width,O=e.height,V=e.style,q=e.objectFit,M=e.objectPosition,N=e.onLoadingComplete,P=e.placeholder,B=void 0===P?"empty":P,W=e.blurDataURL,Z=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=u.useContext(h.ImageConfigContext),U=u.useMemo((function(){var e=v||D||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:i})}),[D]),H=Z,F=i?"responsive":"intrinsic";"layout"in H&&(H.layout&&(F=H.layout),delete H.layout);var G=k;if("loader"in H){if(H.loader){var T=H.loader;G=function(e){e.config;var t=l(e,["config"]);return T(t)}}delete H.loader}var J="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(t)){var $=z(t)?t.default:t;if(!$.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));if(W=W||$.blurDataURL,J=$.src,(!F||"fill"!==F)&&(O=O||$.height,L=L||$.width,!$.height||!$.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)))}var Q=!p&&("lazy"===S||"undefined"===typeof S);((t="string"===typeof t?t:J).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Q=!1);b.has(t)&&(Q=!1);y&&(c=!0);var Y,K=r(u.useState(!1),2),X=K[0],ee=K[1],te=r(g.useIntersection({rootRef:j,rootMargin:R||"200px",disabled:!Q}),3),ie=te[0],ne=te[1],re=te[2],oe=!Q||ne,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:q,objectPosition:M},ue=x(L),de=x(O),fe=x(_);0;var ge=Object.assign({},V,le),he="blur"!==B||X?{}:{backgroundSize:q||"cover",backgroundPosition:M||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===F)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var me=de/ue,pe=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===F?(ae.display="block",ae.position="relative",ce=!0,se.paddingTop=pe):"intrinsic"===F?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ce=!0,se.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===F&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=de)}else 0;var ye={src:w,srcSet:void 0,sizes:void 0};oe&&(ye=A({config:U,src:t,unoptimized:c,layout:F,width:ue,quality:fe,sizes:i,loader:G}));var ve=t;0;var be,we="imagesrcset",Se="imagesizes";we="imageSrcSet",Se="imageSizes";var ze=(n(be={},we,ye.srcSet),n(be,Se,ye.sizes),be),Ae=u.default.useLayoutEffect,xe=u.useRef(N),ke=u.useRef(t);u.useEffect((function(){xe.current=N}),[N]),Ae((function(){ke.current!==t&&(re(),ke.current=t)}),[re,t]);var Ee=a({isLazy:Q,imgAttributes:ye,heightInt:de,widthInt:ue,qualityInt:fe,layout:F,className:C,imgStyle:ge,blurStyle:he,loading:S,config:U,unoptimized:c,placeholder:B,loader:G,srcString:ve,onLoadingCompleteRef:xe,setBlurComplete:ee,setIntersection:ie,isVisible:oe,noscriptSizes:i},H);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ae},ce?u.default.createElement("span",{style:se},Y?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,u.default.createElement(I,Object.assign({},Ee))),p?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},ze))):null)};var a=i(6495).Z,s=i(92648).Z,c=i(91598).Z,l=i(17273).Z,u=c(i(67294)),d=s(i(5443)),f=i(99309),g=i(57190),h=i(59977),m=(i(63794),i(82392));var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1}||{},y=p.experimentalUnoptimized,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(j(i))),a=o.searchParams;a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(j(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(j(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function A(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,s=e.quality,c=e.sizes,l=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(n);s)l.push(parseInt(s[2]));if(l.length){var u,d=.01*(u=Math).min.apply(u,o(l));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,n){return"".concat(l({config:t,src:i,quality:s,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:l({config:t,src:i,quality:s,width:d[g]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=S.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function E(e,t,i,n,r,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===n&&o(!0),null==r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}})))}var I=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,r=e.layout,o=e.className,s=e.imgStyle,c=e.blurStyle,d=e.isLazy,f=e.placeholder,g=e.loading,h=e.srcString,m=e.config,p=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,z=e.onError,x=(e.isVisible,e.noscriptSizes),k=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},k,t,{decoding:"async","data-nimg":r,className:o,style:a({},s,c),ref:u.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&E(e,h,0,f,v,b)}),[w,h,r,f,v,b]),onLoad:function(e){E(e.currentTarget,h,0,f,v,b),S&&S(e)},onError:function(e){"blur"===f&&b(!0),z&&z(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},k,A({config:m,src:h,unoptimized:p,layout:r,width:i,quality:n,sizes:x,loader:y}),{decoding:"async","data-nimg":r,style:s,className:o,loading:g}))))};function j(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},25675:function(e,t,i){e.exports=i(28045)},23526:function(e,t,i){"use strict";i.d(t,{H:function(){return d}});var n=i(59180);var r=i(67294),o=i(33234),a=i(16014),s=i(96681);var c=i(58868);var l=i(54735);function u(e,t){const i=function(e){const t=(0,s.h)((()=>(0,o.B)(e))),{isStatic:i}=(0,r.useContext)(a._);if(i){const[,i]=(0,r.useState)(e);(0,r.useEffect)((()=>t.onChange(i)),[])}return t}(t()),n=()=>i.set(t());return n(),function(e,t){(0,c.L)((()=>{const i=e.map((e=>e.onChange(t)));return()=>i.forEach((e=>e()))}))}(e,(()=>l.ZP.update(n,!1,!0))),i}function d(e,t,i,r){const o="function"===typeof t?t:function(...e){const t=!Array.isArray(e[0]),i=t?0:-1,r=e[0+i],o=e[1+i],a=e[2+i],s=e[3+i],c=(0,n.s)(o,a,Object.assign({mixer:(l=a[0],(e=>"object"===typeof e&&e.mix)(l)?l.mix:void 0)},s));var l;return t?c(r):c}(t,i,r);return Array.isArray(e)?f(e,o):f([e],(([e])=>o(e)))}function f(e,t){const i=(0,s.h)((()=>[]));return u(e,(()=>{i.length=0;const n=e.length;for(let t=0;t<n;t++)i[t]=e[t].get();return t(i)}))}},97650:function(e,t,i){"use strict";i.d(t,{YD:function(){return u}});var n=i(67294);const r=new Map,o=new WeakMap;let a,s=0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(o.has(i)||(s+=1,o.set(i,s.toString())),o.get(i)):"0"):e[t]}`;var i})).toString()}function l(e,t,i={},n=a){if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const r=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:o,observer:s,elements:l}=function(e){let t=c(e),i=r.get(t);if(!i){const n=new Map;let o;const a=new IntersectionObserver((t=>{t.forEach((t=>{var i;const r=t.isIntersecting&&o.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=r),null==(i=n.get(t.target))||i.forEach((e=>{e(r,t)}))}))}),e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:n},r.set(t,i)}return i}(i);let u=l.get(e)||[];return l.has(e)||l.set(e,u),u.push(t),s.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(l.delete(e),s.unobserve(e)),0===l.size&&(s.disconnect(),r.delete(o))}}n.Component;function u({threshold:e,delay:t,trackVisibility:i,rootMargin:r,root:o,triggerOnce:a,skip:s,initialInView:c,fallbackInView:u,onChange:d}={}){var f;const[g,h]=n.useState(null),m=n.useRef(),[p,y]=n.useState({inView:!!c,entry:void 0});m.current=d,n.useEffect((()=>{if(s||!g)return;let n=l(g,((e,t)=>{y({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&a&&n&&(n(),n=void 0)}),{root:o,rootMargin:r,threshold:e,trackVisibility:i,delay:t},u);return()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,g,o,r,a,s,i,u,t]);const v=null==(f=p.entry)?void 0:f.target;n.useEffect((()=>{g||!v||a||s||y({inView:!!c,entry:void 0})}),[g,v,a,s,c]);const b=[h,p.inView,p.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}}}]);
//# sourceMappingURL=4176-e492fe9ef6dfb8b8.js.map