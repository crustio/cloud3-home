"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{12599:function(e,t,n){var r,a,i,l;/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{J0:function(){return u},RQ:function(){return x},WK:function(){return R},Zn:function(){return b},aU:function(){return r},cP:function(){return m},cm:function(){return P},fp:function(){return g},pC:function(){return W},q_:function(){return h}}),(i=r||(r={})).Pop="POP",i.Push="PUSH",i.Replace="REPLACE";let s="popstate";function h(e){return void 0===e&&(e={}),function(e,t,n,a){void 0===a&&(a={});let{window:i=document.defaultView,v5Compat:l=!1}=a,h=i.history,c=r.Pop,m=null,g=v();function v(){return(h.state||{idx:null}).idx}function y(){c=r.Pop;let e=v(),t=null==e?null:e-g;g=e,m&&m({action:c,location:w.location,delta:t})}function b(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:d(e);return u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,h.replaceState(o({},h.state,{idx:g}),""));let w={get action(){return c},get location(){return e(i,h)},listen(e){if(m)throw Error("A history only accepts one active listener");return i.addEventListener(s,y),m=e,()=>{i.removeEventListener(s,y),m=null}},createHref:e=>t(i,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){c=r.Push;let a=f(w.location,e,t);n&&n(a,e);let o=p(a,g=v()+1),s=w.createHref(a);try{h.pushState(o,"",s)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;i.location.assign(s)}l&&m&&m({action:c,location:w.location,delta:1})},replace:function(e,t){c=r.Replace;let a=f(w.location,e,t);n&&n(a,e);let i=p(a,g=v()),o=w.createHref(a);h.replaceState(i,"",o),l&&m&&m({action:c,location:w.location,delta:0})},go:e=>h.go(e)};return w}(function(e,t){let{pathname:n="/",search:r="",hash:a=""}=m(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),f("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let a=e.location.href,i=a.indexOf("#");r=-1===i?a:a.slice(0,i)}return r+"#"+("string"==typeof t?t:d(t))},function(e,t){c("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")},e)}function u(e,t){if(!1===e||null==e)throw Error(t)}function c(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(n){}}}function p(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),o({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?m(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g(e,t,n){void 0===n&&(n="/");let r=b(("string"==typeof t?m(t):t).pathname||"/",n);if(null==r)return null;let a=function e(t,n,r,a){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===a&&(a="");let i=(t,i,l)=>{let o={relativePath:void 0===l?t.path||"":l,caseSensitive:!0===t.caseSensitive,childrenIndex:i,route:t};o.relativePath.startsWith("/")&&(u(o.relativePath.startsWith(a),'Absolute route path "'+o.relativePath+'" nested under path "'+a+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(a.length));let s=x([a,o.relativePath]),h=r.concat(o);if(t.children&&t.children.length>0&&(u(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),e(t.children,n,h,s)),null!=t.path||t.index){var c;let p,f;n.push({path:s,score:(c=t.index,f=(p=s.split("/")).length,p.some(y)&&(f+=-2),c&&(f+=2),p.filter(e=>!y(e)).reduce((e,t)=>e+(v.test(t)?3:""===t?1:10),f)),routesMeta:h})}};return t.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...a]=n,i=r.endsWith("?"),l=r.replace(/\?$/,"");if(0===a.length)return i?[l,""]:[l];let o=e(a.join("/")),s=[];return s.push(...o.map(e=>""===e?l:[l,e].join("/"))),i&&s.push(...o),s.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))i(e,t,r);else i(e,t)}),n}(e);!function(e){e.sort((e,t)=>{var n,r;return e.score!==t.score?t.score-e.score:(n=e.routesMeta.map(e=>e.childrenIndex),r=t.routesMeta.map(e=>e.childrenIndex),n.length===r.length&&n.slice(0,-1).every((e,t)=>e===r[t])?n[n.length-1]-r[r.length-1]:0)})}(a);let i=null;for(let l=0;null==i&&l<a.length;++l)i=function(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let l=0;l<n.length;++l){let o=n[l],s=l===n.length-1,h="/"===a?t:t.slice(a.length)||"/",u=function(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),o=a.slice(1),s=r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let s=o[n]||"";l=i.slice(0,i.length-s.length).replace(/(.)\/+$/,"$1")}let h=o[n];return a&&!h?e[r]=void 0:e[r]=function(e,t){try{return decodeURIComponent(e)}catch(n){return c(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(h||"",r),e},{});return{params:s,pathname:i,pathnameBase:l,pattern:e}}({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},h);if(!u)return null;Object.assign(r,u.params);let p=o.route;i.push({params:r,pathname:x([a,u.pathname]),pathnameBase:$(x([a,u.pathnameBase])),route:p}),"/"!==u.pathnameBase&&(a=x([a,u.pathnameBase]))}return i}(a[l],function(e){try{return decodeURI(e)}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(r));return i}(l=a||(a={})).data="data",l.deferred="deferred",l.redirect="redirect",l.error="error";let v=/^:\w+$/,y=e=>"*"===e;function b(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function w(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t)+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function P(e,t){let n=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?n.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase):n.map(e=>e.pathnameBase)}function W(e,t,n,r){let a,i;void 0===r&&(r=!1),"string"==typeof e?a=m(e):(u(!(a=o({},e)).pathname||!a.pathname.includes("?"),w("?","pathname","search",a)),u(!a.pathname||!a.pathname.includes("#"),w("#","pathname","hash",a)),u(!a.search||!a.search.includes("#"),w("#","search","hash",a)));let l=""===e||""===a.pathname,s=l?"/":a.pathname;if(null==s)i=n;else if(r){let h=0===t.length?[]:t[t.length-1].replace(/^\//,"").split("/");if(s.startsWith("..")){let c=s.split("/");for(;".."===c[0];)c.shift(),h.pop();a.pathname=c.join("/")}i="/"+h.join("/")}else{let p=t.length-1;if(s.startsWith("..")){let f=s.split("/");for(;".."===f[0];)f.shift(),p-=1;a.pathname=f.join("/")}i=p>=0?t[p]:"/"}let d=function(e,t){let n;void 0===t&&(t="/");let{pathname:r,search:a="",hash:i=""}="string"==typeof e?m(e):e,l=r?r.startsWith("/")?r:(n=t.replace(/\/+$/,"").split("/"),r.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"):t;return{pathname:l,search:S(a),hash:E(i)}}(a,i),g=s&&"/"!==s&&s.endsWith("/"),v=(l||"."===s)&&n.endsWith("/");return!d.pathname.endsWith("/")&&(g||v)&&(d.pathname+="/"),d}let x=e=>e.join("/").replace(/\/\/+/g,"/"),$=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),S=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",E=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function R(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}Symbol("deferred")}}]);