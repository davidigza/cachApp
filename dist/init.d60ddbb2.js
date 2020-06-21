parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KX2f":[function(require,module,exports) {
"use strict";function e(e){return e=e||[],Array.isArray(e)?e:[e]}function t(e){return`[Vaadin.Router] ${e}`}function n(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Router=exports.Resolver=void 0;const r="module",o="nomodule",i=[r,o];function a(e){if(!e.match(/.+\.[m]?js$/))throw new Error(t(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function s(e){if(!e||!_(e.path))throw new Error(t('Expected route config to be an object with a "path" string property, or an array of such objects'));const n=e.bundle,s=["component","redirect","bundle"];if(!(p(e.action)||Array.isArray(e.children)||p(e.children)||d(n)||s.some(t=>_(e[t]))))throw new Error(t(`Expected route config "${e.path}" to include either "${s.join('", "')}" `+'or "action" function but none found.'));if(n)if(_(n))a(n);else{if(!i.some(e=>e in n))throw new Error(t('Expected route bundle to include either "'+o+'" or "'+r+'" keys, or both'));i.forEach(e=>e in n&&a(n[e]))}e.redirect&&["bundle","component"].forEach(n=>{n in e&&console.warn(t(`Route config "${e.path}" has both "redirect" and "${n}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function c(t){e(t).forEach(e=>s(e))}function l(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||((n=document.createElement("script")).setAttribute("src",e),t===r?n.setAttribute("type",r):t===o&&n.setAttribute(o,""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=(t=>{n.__dynamicImportLoaded=!0,e(t)}),n.onerror=(e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)}),null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function h(e){return _(e)?l(e):Promise.race(i.filter(t=>t in e).map(t=>l(e[t],t)))}function u(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function d(e){return"object"==typeof e&&!!e}function p(e){return"function"==typeof e}function _(e){return"string"==typeof e}function f(e){const n=new Error(t(`Page not found (${e.pathname})`));return n.context=e,n.code=404,n}const m=new class{};function g(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}function v(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let a=0;a<n.length;a++){const e=n[a];if(e.nodeName&&"a"===e.nodeName.toLowerCase()){t=e;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||g(t))!==window.location.origin)return;const{pathname:r,search:o,hash:i}=t;u("go",{pathname:r,search:o,hash:i})&&e.preventDefault()}const w={activate(){window.document.addEventListener("click",v)},inactivate(){window.document.removeEventListener("click",v)}},y=/Trident/.test(navigator.userAgent);function b(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;u("go",{pathname:t,search:n,hash:r})}y&&!p(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const E={activate(){window.addEventListener("popstate",b)},inactivate(){window.removeEventListener("popstate",b)}};var x=V,C=P,R=j,A=I,O=F,k="/",$="./",L=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function P(e,t){for(var n,r=[],o=0,i=0,a="",s=t&&t.delimiter||k,c=t&&t.delimiters||$,l=!1;null!==(n=L.exec(e));){var h=n[0],u=n[1],d=n.index;if(a+=e.slice(i,d),i=d+h.length,u)a+=u[1],l=!0;else{var p="",_=e[i],f=n[2],m=n[3],g=n[4],v=n[5];if(!l&&a.length){var w=a.length-1;c.indexOf(a[w])>-1&&(p=a[w],a=a.slice(0,w))}a&&(r.push(a),a="",l=!1);var y=""!==p&&void 0!==_&&_!==p,b="+"===v||"*"===v,E="?"===v||"*"===v,x=p||s,C=m||g;r.push({name:f||o++,prefix:p,delimiter:x,optional:E,repeat:b,partial:y,pattern:C?U(C):"[^"+B(x)+"]+?"})}}return(a||i<e.length)&&r.push(a+e.substr(i)),r}function j(e,t){return I(P(e,t))}function I(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var c,l=n?n[s.name]:void 0;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===l.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(c=i(l[h],s),!t[a].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');o+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"));s.partial&&(o+=s.prefix)}else{if(c=i(String(l),s),!t[a].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function B(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function N(e){return e&&e.sensitive?"":"i"}function T(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function S(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(V(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",N(n))}function M(e,t,n){return F(P(e,n),t,n)}function F(e,t,n){for(var r=(n=n||{}).strict,o=!1!==n.start,i=!1!==n.end,a=B(n.delimiter||k),s=n.delimiters||$,c=[].concat(n.endsWith||[]).map(B).concat("$").join("|"),l=o?"^":"",h=0===e.length,u=0;u<e.length;u++){var d=e[u];if("string"==typeof d)l+=B(d),h=u===e.length-1&&s.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+B(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.partial?l+=B(d.prefix)+"("+p+")?":l+="(?:"+B(d.prefix)+"("+p+"))?":l+=B(d.prefix)+"("+p+")"}}return i?(r||(l+="(?:"+a+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+a+"(?="+c+"))?"),h||(l+="(?="+a+"|"+c+")")),new RegExp(l,N(n))}function V(e,t,n){return e instanceof RegExp?T(e,t):Array.isArray(e)?S(e,t,n):M(e,t,n)}x.parse=C,x.compile=R,x.tokensToFunction=A,x.tokensToRegExp=O;const{hasOwnProperty:H}=Object.prototype,D=new Map;function K(e){try{return decodeURIComponent(e)}catch(t){return e}}function W(e,t,n,r,o){const i=`${e}|${n=!!n}`;let a=D.get(i);if(!a){const t=[];a={keys:t,pattern:x(e,t,{end:n,strict:""===e})},D.set(i,a)}const s=a.pattern.exec(t);if(!s)return null;const c=Object.assign({},o);for(let l=1;l<s.length;l++){const e=a.keys[l-1],t=e.name,n=s[l];void 0===n&&H.call(c,t)||(e.repeat?c[t]=n?n.split(e.delimiter).map(K):[]:c[t]=n?K(n):n)}return{path:s[0],keys:(r||[]).concat(a.keys),params:c}}function q(e,t,n,r,o){let i,a,s=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!i&&(i=W(c,t,!h,r,o)))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;s<h.length;){if(!a){const r=h[s];r.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),a=q(r,t.substr(o),n,i.keys,i.params)}const r=a.next(l);if(!r.done)return{done:!1,value:r.value};a=null,s++}return{done:!0}}}}function z(e){if(p(e.route.action))return e.route.action(e)}function Q(e,t){let n=t;for(;n;)if((n=n.parent)===e)return!0;return!1}function J(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}function G(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}D.set("|false",{keys:[],pattern:/(?:)/});class X{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||z,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){c(t);const n=[...e(t)];this.root.__children=n}addRoutes(t){return c(t),this.root.__children.push(...e(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,_(e)?{pathname:e}:e),n=q(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,i=null,a=t;function s(e,c=o.value.route,l){const h=null===l&&o.value.route;return o=i||n.next(h),i=null,e||!o.done&&Q(c,o.value.route)?o.done?Promise.reject(f(t)):(G(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},t,o.value),o.value),Promise.resolve(r(a)).then(t=>null!=t&&t!==m?(a.result=t.result||t,a):s(e,c,t))):(i=o,Promise.resolve(m))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(e=>{const t=J(a);if(e?console.warn(t):e=new Error(t),e.context=e.context||a,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return a.result=this.errorHandler(e),a;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}exports.Resolver=X,X.pathToRegexp=x;const{pathToRegexp:Y}=X,Z=new Map;function ee(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let o=0;o<n.length;o++){const r=n[o];r.parent=t,ee(e,r,r.__children||r.children)}}function te(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}".`+" Try seting unique 'name' route properties.");return n&&n[0]}function ne(e){let t=e.path;return void 0!==(t=Array.isArray(t)?t[0]:t)?t:""}function re(e,t={}){if(!(e instanceof X))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,o)=>{let i=te(n,r);if(!(i||(n.clear(),ee(n,e.root,e.root.__children),i=te(n,r))))throw new Error(`Route "${r}" not found`);let a=Z.get(i.fullPath);if(!a){let e=ne(i),t=i.parent;for(;t;){const n=ne(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=Y.parse(e),r=Y.tokensToFunction(n),o=Object.create(null);for(let i=0;i<n.length;i++)_(n[i])||(o[n[i].name]=!0);a={toPath:r,keys:o},Z.set(e,a),i.fullPath=e}let s=a.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const r=n[t];a.keys[r]||(e[r]=o[r])}const r=t.stringifyQueryParams(e);r&&(s+="?"===r.charAt(0)?r:`?${r}`)}return s}}let oe=[];function ie(e){oe.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),oe=e}const ae=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},se=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function ce(e,t){return e.classList.add(t),new Promise(n=>{if(ae(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),se(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}const le=256;function he(e){return null!=e}function ue(e){const t=Object.assign({},e);return delete t.next,t}function de({pathname:e="",search:t="",hash:n="",chain:r=[],params:o={},redirectFrom:i,resolver:a},s){const c=r.map(e=>e.route);return{baseUrl:a&&a.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:s||c.length&&c[c.length-1]||null,params:o,redirectFrom:i,getUrl:(e={})=>we(be.pathToRegexp.compile(ye(c))(Object.assign({},o,e)),a)}}function pe(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function _e(e,t){t.location=de(e);const n=e.chain.map(e=>e.route).indexOf(e.route);return e.chain[n].element=t,t}function fe(e,t,n){if(p(e))return e.apply(n,t)}function me(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?fe(n[e],t,n):void 0}function ge(n,r){if(!Array.isArray(n)&&!d(n))throw new Error(t(`Incorrect "children" value for the route ${r.path}: expected array or object, but got ${n}`));r.__children=[];const o=e(n);for(let e=0;e<o.length;e++)s(o[e]),r.__children.push(o[e])}function ve(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function we(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ye(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class be extends X{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&X.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=(e=>this.__resolveRoute(e));const o=be.NavigationTrigger;be.setTriggers.apply(be,Object.keys(o).map(e=>o[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=de({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const n=e.route;let r=Promise.resolve();p(n.children)&&(r=r.then(()=>n.children(ue(e))).then(e=>{he(e)||p(n.children)||(e=n.children),ge(e,n)}));const o={redirect:t=>pe(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return r.then(()=>{if(this.__isLatestRender(e))return fe(n.action,[e,o],n)}).then(e=>he(e)&&(e instanceof HTMLElement||e.redirect||e===m)?e:_(n.redirect)?o.redirect(n.redirect):n.bundle?h(n.bundle).then(()=>{},()=>{throw new Error(t(`Bundle not found: ${n.bundle}. Check if the file name is correct`))}):void 0).then(e=>he(e)?e:_(n.component)?o.component(n.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},_(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=de(e),t&&this.__updateBrowserHistory(e,1===n),u("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const o=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),o.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),ve(this.__outlet&&this.__outlet.children),this.location=de(Object.assign(r,{resolver:this})),u("error",Object.assign({router:this,error:e},r)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const r=n!==t?n:e,o=we(ye(n.chain),n.resolver)===n.pathname,i=(e,t=e.route,n)=>e.next(void 0,t,n).then(n=>null===n||n===m?o?e:null!==t.parent?i(e,t.parent,n):n:n);return i(n).then(e=>{if(null===e||e===m)throw f(r);return e&&e!==m&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const r=e.result;return r instanceof HTMLElement?(_e(e,r),Promise.resolve(e)):r.redirect?this.__redirect(r.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(t(`Invalid route resolution result for path "${e.pathname}". `+`Expected redirect object or HTML element, but got: "${n(r)}". `+"Double check the action return value for the route.")))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let o=Promise.resolve();const i=()=>({cancel:!0}),a=t=>pe(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t]);for(let t=0;t<r.length;t++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:a},r[t]),n[t].element.location=de(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t])}if(!e.__skipAttach)for(let s=0;s<r.length;s++)s<e.__divergedChainIndex?s<n.length&&n[s].element&&(n[s].element.location=de(e,n[s].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:a},r[s]),r[s].element&&(r[s].element.location=de(e,r[s].route)));return o.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const o=de(t);return e.then(e=>{if(this.__isLatestRender(t)){return me("onBeforeLeave",[o,n,this],r.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,n,r){const o=de(t,r.route);return e.then(e=>{if(this.__isLatestRender(t)){return me("onBeforeEnter",[o,n,this],r.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,n,r){if(n>le)throw new Error(t(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(n||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(t(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=r?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const o=t&&t.chain[r].element;if(o){if(o.parentNode!==n)break;e.chain[r].element=o,n=o}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let r=n;for(let o=e.__divergedChainIndex;o<e.chain.length;o++){const t=e.chain[o].element;t&&(r.appendChild(t),this.__addedByRouter.set(t,!0),r===n&&this.__appearingContent.push(t),r=t)}}__removeDisappearingContent(){this.__disappearingContent&&ve(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ve(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=de(e);fe(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&ve(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=de(e,e.chain[t].route);fe(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],o=e.chain;let i;for(let a=o.length;a>0;a--)if(o[a-1].route.animate){i=o[a-1].route.animate;break}if(t&&n&&i){const e=d(i)&&i.leave||"leaving",o=d(i)&&i.enter||"entering";r.push(ce(t,e)),r.push(ce(n,o))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;_(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){ie(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=re(this)),we(this.__urlForName(e,t),this)}urlForPath(e,t){return we(be.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=_(e)?this.__createUrl(e,"http://a"):e;return u("go",{pathname:t,search:n,hash:r})}}exports.Router=be;const Ee=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,xe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ce(){return $e(function(){return!0})}function Re(){try{return!!Ae()||!!Oe()&&(xe?!ke():!Ce())}catch(e){return!1}}function Ae(){return localStorage.getItem("vaadin.developmentmode.force")}function Oe(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ke(){if(xe){if(Object.keys(xe).map(e=>xe[e]).filter(e=>e.productionMode).length>0)return!0}return!1}function $e(e,t){if("function"!=typeof e)return;const n=Ee.exec(e.toString());if(n)try{e=new Function(n[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return e(t)}window.Vaadin=window.Vaadin||{};const Le=function(e,t){if(window.Vaadin.developmentMode)return $e(e,t)};function Pe(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=Re());const je=function(){return Le(Pe)};window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.2"}),Le(Pe),be.NavigationTrigger={POPSTATE:E,CLICK:w};
},{}],"ytxR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeNodes=exports.reparentNodes=exports.isCEPolyfill=void 0;const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback;exports.isCEPolyfill=e;const o=(e,o,l=null,s=null)=>{for(;o!==l;){const l=o.nextSibling;e.insertBefore(o,s),o=l}};exports.reparentNodes=o;const l=(e,o,l=null)=>{for(;o!==l;){const l=o.nextSibling;e.removeChild(o),o=l}};exports.removeNodes=l;
},{}],"Av0K":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lastAttributeNameRegex=exports.createMarker=exports.isTemplatePartActive=exports.Template=exports.boundAttributeSuffix=exports.markerRegex=exports.nodeMarker=exports.marker=void 0;const e=`{{lit-${String(Math.random()).slice(2)}}}`;exports.marker=e;const t=`\x3c!--${e}--\x3e`;exports.nodeMarker=t;const r=new RegExp(`${e}|${t}`);exports.markerRegex=r;const s="$lit$";exports.boundAttributeSuffix=s;class o{constructor(t,o){this.parts=[],this.element=o;const i=[],l=[],p=document.createTreeWalker(o.content,133,null,!1);let c=0,d=-1,u=0;const{strings:f,values:{length:h}}=t;for(;u<h;){const t=p.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let i=0;for(let t=0;t<o;t++)n(e[t].name,s)&&i++;for(;i-- >0;){const e=f[u],o=x.exec(e)[2],n=o.toLowerCase()+s,i=t.getAttribute(n);t.removeAttribute(n);const a=i.split(r);this.parts.push({type:"attribute",index:d,name:o,strings:a}),u+=a.length-1}}"TEMPLATE"===t.tagName&&(l.push(t),p.currentNode=t.content)}else if(3===t.nodeType){const o=t.data;if(o.indexOf(e)>=0){const e=t.parentNode,l=o.split(r),p=l.length-1;for(let r=0;r<p;r++){let o,i=l[r];if(""===i)o=a();else{const e=x.exec(i);null!==e&&n(e[2],s)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-s.length)+e[3]),o=document.createTextNode(i)}e.insertBefore(o,t),this.parts.push({type:"node",index:++d})}""===l[p]?(e.insertBefore(a(),t),i.push(t)):t.data=l[p],u+=p}}else if(8===t.nodeType)if(t.data===e){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(a(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(i.push(t),d--),u++}else{let r=-1;for(;-1!==(r=t.data.indexOf(e,r+1));)this.parts.push({type:"node",index:-1}),u++}}else p.currentNode=l.pop()}for(const e of i)e.parentNode.removeChild(e)}}exports.Template=o;const n=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},i=e=>-1!==e.index;exports.isTemplatePartActive=i;const a=()=>document.createComment("");exports.createMarker=a;const x=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;exports.lastAttributeNameRegex=x;
},{}],"NXoq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeNodesFromTemplate=n,exports.insertNodeIntoTemplate=l;var e=require("./template.js");const t=133;function n(e,n){const{element:{content:r},parts:l}=e,u=document.createTreeWalker(r,t,null,!1);let c=o(l),d=l[c],s=-1,i=0;const a=[];let p=null;for(;u.nextNode();){s++;const e=u.currentNode;for(e.previousSibling===p&&(p=null),n.has(e)&&(a.push(e),null===p&&(p=e)),null!==p&&i++;void 0!==d&&d.index===s;)d.index=null!==p?-1:d.index-i,d=l[c=o(l,c)]}a.forEach(e=>e.parentNode.removeChild(e))}const r=e=>{let n=11===e.nodeType?0:1;const r=document.createTreeWalker(e,t,null,!1);for(;r.nextNode();)n++;return n},o=(t,n=-1)=>{for(let r=n+1;r<t.length;r++){const n=t[r];if((0,e.isTemplatePartActive)(n))return r}return-1};function l(e,n,l=null){const{element:{content:u},parts:c}=e;if(null==l)return void u.appendChild(n);const d=document.createTreeWalker(u,t,null,!1);let s=o(c),i=0,a=-1;for(;d.nextNode();){for(a++,d.currentNode===l&&(i=r(n),l.parentNode.insertBefore(n,l));-1!==s&&c[s].index===a;){if(i>0){for(;-1!==s;)c[s].index+=i,s=o(c,s);return}s=o(c,s)}}}
},{"./template.js":"Av0K"}],"uWh2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isDirective=exports.directive=void 0;const e=new WeakMap,t=t=>(...s)=>{const i=t(...s);return e.set(i,!0),i};exports.directive=t;const s=t=>"function"==typeof t&&e.has(t);exports.isDirective=s;
},{}],"pnLb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.nothing=exports.noChange=void 0;const e={};exports.noChange=e;const o={};exports.nothing=o;
},{}],"bn5t":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TemplateInstance=void 0;var e=require("./dom.js"),t=require("./template.js");class s{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const s=e.isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),o=[],r=this.template.parts,n=document.createTreeWalker(s,133,null,!1);let i,p=0,l=0,a=n.nextNode();for(;p<r.length;)if(i=r[p],(0,t.isTemplatePartActive)(i)){for(;l<i.index;)l++,"TEMPLATE"===a.nodeName&&(o.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=o.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));p++}else this.__parts.push(void 0),p++;return e.isCEPolyfill&&(document.adoptNode(s),customElements.upgrade(s)),s}}exports.TemplateInstance=s;
},{"./dom.js":"ytxR","./template.js":"Av0K"}],"cVNN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SVGTemplateResult=exports.TemplateResult=void 0;var e=require("./dom.js"),t=require("./template.js");const s=` ${t.marker} `;class r{constructor(e,t,s,r){this.strings=e,this.values=t,this.type=s,this.processor=r}getHTML(){const e=this.strings.length-1;let r="",n=!1;for(let l=0;l<e;l++){const e=this.strings[l],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=t.lastAttributeNameRegex.exec(e);r+=null===o?e+(n?s:t.nodeMarker):e.substr(0,o.index)+o[1]+o[2]+t.boundAttributeSuffix+o[3]+t.marker}return r+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}exports.TemplateResult=r;class n extends r{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),s=t.content,r=s.firstChild;return s.removeChild(r),(0,e.reparentNodes)(s,r.firstChild),t}}exports.SVGTemplateResult=n;
},{"./dom.js":"ytxR","./template.js":"Av0K"}],"atl2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventPart=exports.PropertyPart=exports.PropertyCommitter=exports.BooleanAttributePart=exports.NodePart=exports.AttributePart=exports.AttributeCommitter=exports.isIterable=exports.isPrimitive=void 0;var t=require("./directive.js"),e=require("./dom.js"),i=require("./part.js"),s=require("./template-instance.js"),n=require("./template-result.js"),r=require("./template.js");const o=t=>null===t||!("object"==typeof t||"function"==typeof t);exports.isPrimitive=o;const a=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);exports.isIterable=a;class h{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new l(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(o(t)||!a(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}exports.AttributeCommitter=h;class l{constructor(t){this.value=void 0,this.committer=t}setValue(e){e===i.noChange||o(e)&&e===this.value||(this.value=e,(0,t.isDirective)(e)||(this.committer.dirty=!0))}commit(){for(;(0,t.isDirective)(this.value);){const t=this.value;this.value=i.noChange,t(this)}this.value!==i.noChange&&this.committer.commit()}}exports.AttributePart=l;class u{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild((0,r.createMarker)()),this.endNode=t.appendChild((0,r.createMarker)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=(0,r.createMarker)()),t.__insert(this.endNode=(0,r.createMarker)())}insertAfterPart(t){t.__insert(this.startNode=(0,r.createMarker)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}const e=this.__pendingValue;e!==i.noChange&&(o(e)?e!==this.value&&this.__commitText(e):e instanceof n.TemplateResult?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):a(e)?this.__commitIterable(e):e===i.nothing?(this.value=i.nothing,this.clear()):this.__commitText(e))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof s.TemplateInstance&&this.value.template===e)this.value.update(t.values);else{const i=new s.TemplateInstance(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)void 0===(i=e[s])&&(i=new u(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){(0,e.removeNodes)(this.startNode.parentNode,t.nextSibling,this.endNode)}}exports.NodePart=u;class d{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}if(this.__pendingValue===i.noChange)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=i.noChange}}exports.BooleanAttributePart=d;class c extends h{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new p(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}exports.PropertyCommitter=c;class p extends l{}exports.PropertyPart=p;let _=!1;(()=>{try{const e={get capture(){return _=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(t){}})();class m{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}if(this.__pendingValue===i.noChange)return;const e=this.__pendingValue,s=this.value,n=null==e||null!=s&&(e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive),r=null!=e&&(null==s||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=v(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=i.noChange}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}exports.EventPart=m;const v=t=>t&&(_?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
},{"./directive.js":"uWh2","./dom.js":"ytxR","./part.js":"pnLb","./template-instance.js":"bn5t","./template-result.js":"cVNN","./template.js":"Av0K"}],"gbKZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.templateFactory=t,exports.templateCaches=void 0;var e=require("./template.js");function t(t){let s=r.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},r.set(t.type,s));let n=s.stringsArray.get(t.strings);if(void 0!==n)return n;const a=t.strings.join(e.marker);return void 0===(n=s.keyString.get(a))&&(n=new e.Template(t,t.getTemplateElement()),s.keyString.set(a,n)),s.stringsArray.set(t.strings,n),n}const r=new Map;exports.templateCaches=r;
},{"./template.js":"Av0K"}],"Fhpq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=exports.parts=void 0;var e=require("./dom.js"),t=require("./parts.js"),r=require("./template-factory.js");const s=new WeakMap;exports.parts=s;const o=(o,a,p)=>{let d=s.get(a);void 0===d&&((0,e.removeNodes)(a,a.firstChild),s.set(a,d=new t.NodePart(Object.assign({templateFactory:r.templateFactory},p))),d.appendInto(a)),d.setValue(o),d.commit()};exports.render=o;
},{"./dom.js":"ytxR","./parts.js":"atl2","./template-factory.js":"gbKZ"}],"LBiL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultTemplateProcessor=exports.DefaultTemplateProcessor=void 0;var e=require("./parts.js");class t{handleAttributeExpressions(t,r,s,o){const a=r[0];if("."===a){return new e.PropertyCommitter(t,r.slice(1),s).parts}return"@"===a?[new e.EventPart(t,r.slice(1),o.eventContext)]:"?"===a?[new e.BooleanAttributePart(t,r.slice(1),s)]:new e.AttributeCommitter(t,r,s).parts}handleTextExpression(t){return new e.NodePart(t)}}exports.DefaultTemplateProcessor=t;const r=new t;exports.defaultTemplateProcessor=r;
},{"./parts.js":"atl2"}],"SPDu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"DefaultTemplateProcessor",{enumerable:!0,get:function(){return e.DefaultTemplateProcessor}}),Object.defineProperty(exports,"defaultTemplateProcessor",{enumerable:!0,get:function(){return e.defaultTemplateProcessor}}),Object.defineProperty(exports,"SVGTemplateResult",{enumerable:!0,get:function(){return t.SVGTemplateResult}}),Object.defineProperty(exports,"TemplateResult",{enumerable:!0,get:function(){return t.TemplateResult}}),Object.defineProperty(exports,"directive",{enumerable:!0,get:function(){return r.directive}}),Object.defineProperty(exports,"isDirective",{enumerable:!0,get:function(){return r.isDirective}}),Object.defineProperty(exports,"removeNodes",{enumerable:!0,get:function(){return n.removeNodes}}),Object.defineProperty(exports,"reparentNodes",{enumerable:!0,get:function(){return n.reparentNodes}}),Object.defineProperty(exports,"noChange",{enumerable:!0,get:function(){return o.noChange}}),Object.defineProperty(exports,"nothing",{enumerable:!0,get:function(){return o.nothing}}),Object.defineProperty(exports,"AttributeCommitter",{enumerable:!0,get:function(){return i.AttributeCommitter}}),Object.defineProperty(exports,"AttributePart",{enumerable:!0,get:function(){return i.AttributePart}}),Object.defineProperty(exports,"BooleanAttributePart",{enumerable:!0,get:function(){return i.BooleanAttributePart}}),Object.defineProperty(exports,"EventPart",{enumerable:!0,get:function(){return i.EventPart}}),Object.defineProperty(exports,"isIterable",{enumerable:!0,get:function(){return i.isIterable}}),Object.defineProperty(exports,"isPrimitive",{enumerable:!0,get:function(){return i.isPrimitive}}),Object.defineProperty(exports,"NodePart",{enumerable:!0,get:function(){return i.NodePart}}),Object.defineProperty(exports,"PropertyCommitter",{enumerable:!0,get:function(){return i.PropertyCommitter}}),Object.defineProperty(exports,"PropertyPart",{enumerable:!0,get:function(){return i.PropertyPart}}),Object.defineProperty(exports,"parts",{enumerable:!0,get:function(){return u.parts}}),Object.defineProperty(exports,"render",{enumerable:!0,get:function(){return u.render}}),Object.defineProperty(exports,"templateCaches",{enumerable:!0,get:function(){return p.templateCaches}}),Object.defineProperty(exports,"templateFactory",{enumerable:!0,get:function(){return p.templateFactory}}),Object.defineProperty(exports,"TemplateInstance",{enumerable:!0,get:function(){return a.TemplateInstance}}),Object.defineProperty(exports,"createMarker",{enumerable:!0,get:function(){return s.createMarker}}),Object.defineProperty(exports,"isTemplatePartActive",{enumerable:!0,get:function(){return s.isTemplatePartActive}}),Object.defineProperty(exports,"Template",{enumerable:!0,get:function(){return s.Template}}),exports.svg=exports.html=void 0;var e=require("./lib/default-template-processor.js"),t=require("./lib/template-result.js"),r=require("./lib/directive.js"),n=require("./lib/dom.js"),o=require("./lib/part.js"),i=require("./lib/parts.js"),u=require("./lib/render.js"),p=require("./lib/template-factory.js"),a=require("./lib/template-instance.js"),s=require("./lib/template.js");"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const l=(r,...n)=>new t.TemplateResult(r,n,"html",e.defaultTemplateProcessor);exports.html=l;const c=(r,...n)=>new t.SVGTemplateResult(r,n,"svg",e.defaultTemplateProcessor);exports.svg=c;
},{"./lib/default-template-processor.js":"LBiL","./lib/template-result.js":"cVNN","./lib/directive.js":"uWh2","./lib/dom.js":"ytxR","./lib/part.js":"pnLb","./lib/parts.js":"atl2","./lib/render.js":"Fhpq","./lib/template-factory.js":"gbKZ","./lib/template-instance.js":"bn5t","./lib/template.js":"Av0K"}],"eBH8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"html",{enumerable:!0,get:function(){return a.html}}),Object.defineProperty(exports,"svg",{enumerable:!0,get:function(){return a.svg}}),Object.defineProperty(exports,"TemplateResult",{enumerable:!0,get:function(){return a.TemplateResult}}),exports.render=void 0;var e=require("./dom.js"),t=require("./modify-template.js"),r=require("./render.js"),n=require("./template-factory.js"),o=require("./template-instance.js"),s=require("./template.js"),a=require("../lit-html.js");const l=(e,t)=>`${e}--${t}`;let i=!0;void 0===window.ShadyCSS?i=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),i=!1);const d=e=>t=>{const r=l(t.type,e);let o=n.templateCaches.get(r);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},n.templateCaches.set(r,o));let a=o.stringsArray.get(t.strings);if(void 0!==a)return a;const d=t.strings.join(s.marker);if(void 0===(a=o.keyString.get(d))){const r=t.getTemplateElement();i&&window.ShadyCSS.prepareTemplateDom(r,e),a=new s.Template(t,r),o.keyString.set(d,a)}return o.stringsArray.set(t.strings,a),a},p=["html","svg"],c=e=>{p.forEach(r=>{const o=n.templateCaches.get(l(r,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:r}}=e,n=new Set;Array.from(r.querySelectorAll("style")).forEach(e=>{n.add(e)}),(0,t.removeNodesFromTemplate)(e,n)})})},m=new Set,y=(e,r,n)=>{m.add(e);const o=n?n.element:document.createElement("template"),s=r.querySelectorAll("style"),{length:a}=s;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(o,e);const l=document.createElement("style");for(let t=0;t<a;t++){const e=s[t];e.parentNode.removeChild(e),l.textContent+=e.textContent}c(e);const i=o.content;n?(0,t.insertNodeIntoTemplate)(n,l,i.firstChild):i.insertBefore(l,i.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const d=i.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)r.insertBefore(d.cloneNode(!0),r.firstChild);else if(n){i.insertBefore(l,i.firstChild);const e=new Set;e.add(l),(0,t.removeNodesFromTemplate)(n,e)}},S=(t,n,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const a=s.scopeName,l=r.parts.has(n),p=i&&11===n.nodeType&&!!n.host,c=p&&!m.has(a),S=c?document.createDocumentFragment():n;if((0,r.render)(t,S,Object.assign({templateFactory:d(a)},s)),c){const t=r.parts.get(S);r.parts.delete(S);const s=t.value instanceof o.TemplateInstance?t.value.template:void 0;y(a,S,s),(0,e.removeNodes)(n,n.firstChild),n.appendChild(S),r.parts.set(n,t)}!l&&p&&window.ShadyCSS.styleElement(n.host)};exports.render=S;
},{"./dom.js":"ytxR","./modify-template.js":"NXoq","./render.js":"Fhpq","./template-factory.js":"gbKZ","./template-instance.js":"bn5t","./template.js":"Av0K","../lit-html.js":"SPDu"}],"fKvB":[function(require,module,exports) {
"use strict";var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UpdatingElement=exports.notEqual=exports.defaultConverter=void 0,window.JSCompiler_renameProperty=((t,e)=>t);const e={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}};exports.defaultConverter=e;const r=(t,e)=>e!==t&&(e==e||t==t);exports.notEqual=r;const s={attribute:!0,type:String,converter:e,reflect:!1,hasChanged:r},i=1,a=4,o=8,p=16,n="finalized";class h extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const s=this._attributeNameForProperty(r,e);void 0!==s&&(this._attributeToPropertyMap.set(s,r),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=s){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||s}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(n)||t.finalize(),this[n]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=r){return s(t,e)}static _propertyValueFromAttribute(t,r){const s=r.type,i=r.converter||e,a="function"==typeof i?i:i.fromAttribute;return a?a(t,s):t}static _propertyValueToAttribute(t,r){if(void 0===r.reflect)return;const s=r.type,i=r.converter;return(i&&i.toAttribute||e.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=s){const i=this.constructor,a=i._attributeNameForProperty(t,r);if(void 0!==a){const t=i._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=this._updateState|o,null==t?this.removeAttribute(a):this.setAttribute(a,t),this._updateState=this._updateState&~o}}_attributeToProperty(t,e){if(this._updateState&o)return;const r=this.constructor,s=r._attributeToPropertyMap.get(t);if(void 0!==s){const t=r.getPropertyOptions(s);this._updateState=this._updateState|p,this[s]=r._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~p}}_requestUpdate(t,e){let r=!0;if(void 0!==t){const s=this.constructor,i=s.getPropertyOptions(t);s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&p||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|a;try{await this._updatePromise}catch(e){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&a}get hasUpdated(){return this._updateState&i}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))?this.update(e):this._markUpdated()}catch(r){throw t=!1,this._markUpdated(),r}t&&(this._updateState&i||(this._updateState=this._updateState|i,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~a}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}exports.UpdatingElement=h,h[t=n]=!0;
},{}],"FzpZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.property=i,exports.internalProperty=s,exports.query=c,exports.queryAsync=u,exports.queryAll=l,exports.eventOptions=f,exports.queryAssignedNodes=m,exports.customElement=void 0;const e=(e,t)=>(window.customElements.define(e,t),t),t=(e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}},r=r=>n=>"function"==typeof n?e(r,n):t(r,n);exports.customElement=r;const n=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}),o=(e,t,r)=>{t.constructor.createProperty(r,e)};function i(e){return(t,r)=>void 0!==r?o(e,t,r):n(e,t)}function s(e){return i({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}function c(e){return(t,r)=>{const n={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==r?a(n,t,r):d(n,t)}}function u(e){return(t,r)=>{const n={async get(){return await this.updateComplete,this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==r?a(n,t,r):d(n,t)}}function l(e){return(t,r)=>{const n={get(){return this.renderRoot.querySelectorAll(e)},enumerable:!0,configurable:!0};return void 0!==r?a(n,t,r):d(n,t)}}const a=(e,t,r)=>{Object.defineProperty(t,r,e)},d=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),p=(e,t)=>Object.assign(Object.assign({},t),{finisher(r){Object.assign(r.prototype[t.key],e)}}),y=(e,t,r)=>{Object.assign(t[r],e)};function f(e){return(t,r)=>void 0!==r?y(e,t,r):p(e,t)}function m(e="",t=!1){return(r,n)=>{const o={get(){const r=`slot${e?`[name=${e}]`:""}`,n=this.renderRoot.querySelector(r);return n&&n.assignedNodes({flatten:t})},enumerable:!0,configurable:!0};return void 0!==n?a(o,r,n):d(o,r)}}
},{}],"ZFCR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.css=exports.unsafeCSS=exports.CSSResult=exports.supportsAdoptingStyleSheets=void 0;const e="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;exports.supportsAdoptingStyleSheets=e;const t=Symbol();class s{constructor(e,s){if(s!==t)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(e?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}exports.CSSResult=s;const r=e=>new s(String(e),t);exports.unsafeCSS=r;const o=e=>{if(e instanceof s)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},n=(e,...r)=>{const n=r.reduce((t,s,r)=>t+o(s)+e[r+1],e[0]);return new s(n,t)};exports.css=n;
},{}],"bhxD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={LitElement:!0,html:!0,svg:!0,TemplateResult:!0,SVGTemplateResult:!0};Object.defineProperty(exports,"html",{enumerable:!0,get:function(){return n.html}}),Object.defineProperty(exports,"svg",{enumerable:!0,get:function(){return n.svg}}),Object.defineProperty(exports,"TemplateResult",{enumerable:!0,get:function(){return n.TemplateResult}}),Object.defineProperty(exports,"SVGTemplateResult",{enumerable:!0,get:function(){return n.SVGTemplateResult}}),exports.LitElement=void 0;var t=require("lit-html/lib/shady-render.js"),r=require("./lib/updating-element.js");Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return r[t]}}))});var s=require("./lib/decorators.js");Object.keys(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return s[t]}}))});var n=require("lit-html/lit-html.js"),o=require("./lib/css-tag.js");Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return o[t]}}))}),(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const i={};class l extends r.UpdatingElement{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,r)=>e.reduceRight((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e),r),r=t(e,new Set),s=[];r.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?o.supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==i&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return i}}exports.LitElement=l,l.finalized=!0,l.render=t.render;
},{"lit-html/lib/shady-render.js":"eBH8","./lib/updating-element.js":"fKvB","./lib/decorators.js":"FzpZ","lit-html/lit-html.js":"SPDu","./lib/css-tag.js":"ZFCR"}],"wwpc":[function(require,module,exports) {
"use strict";var t=require("lit-element");class e extends t.LitElement{static get properties(){return{status:{type:String}}}constructor(){super(),this.myStatus=""}static get styles(){return t.css`
        :host{
            --logo-height: 7.750em;
            --logo-witdh: 7.750em;
            --point-color: rgb(10,27,96);
            --primary-line-color: rgb(70,81,135);
            --secondary-line-color: rgb(159,216,233);
            --terciary-line-color: rgb(251,226,84);
            height: var(--myCustomHeight, var(--logo-height , 7.750em));
            width: var(--myCustomwidth, var(--logo-witdh , 7.750em));
        }
        .atom-spinner, .atom-spinner * {
            box-sizing: border-box;
          }
        
          .atom-spinner {
            height: var(--myCustomHeight,var(--logo-height , 7.750em));
            width: var(--myCustomwidth,var(--logo-witdh , 7.750em));
            overflow: hidden;
        
          }
        
          .atom-spinner .spinner-inner {
            position: relative;
            display: block;
            height: 100%;
            width: 100%;
          }
        
          .atom-spinner .spinner-circle {
            display: block;
            position: absolute;
            color: var(--point-color);
            font-size: var(--myCustomPoint, 1.5em);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        
          .atom-spinner .spinner-line {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            animation-duration: 1s;
            border-left-width: calc(var(--myCustomHeight,var(--logo-height , 7.750em;)) / 12);
            border-top-width: calc(var(--myCustomHeight,var(--logo-height , 7.750em;)) / 12);
            border-left-color: #000;
            border-left-style: solid;
            border-top-style: solid;
            border-top-color: transparent;
          }


        
          .atom-spinner .spinner-line:nth-child(1) {
            border-left-color: var(--primary-line-color);
            transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
          }
        
         .atom-spinner .spinner-line:nth-child(2) {
            border-left-color: var(--secondary-line-color);
            transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
          }
        
        .atom-spinner .spinner-line:nth-child(3) {
            border-left-color: var(--terciary-line-color);
            transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
          }
        
        
        
        
          .atom-spinner[status="active"] .spinner-line:nth-child(1) {
            animation: atom-spinner-animation-1 1s linear infinite;
            
          }
        
          .atom-spinner[status="active"] .spinner-line:nth-child(2) {
            animation: atom-spinner-animation-2 1s linear infinite;
          }
        
          .atom-spinner[status="active"] .spinner-line:nth-child(3) {
            animation: atom-spinner-animation-3 1s linear infinite;
          }
        
          @keyframes atom-spinner-animation-1 {
            100% {
              transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
            }
          }
        
          @keyframes atom-spinner-animation-2 {
            100% {
              transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
            }
          }
        
          @keyframes atom-spinner-animation-3 {
            100% {
              transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
            }
          }
        
        
        
        `}render(){return t.html`
       <div class="atom-spinner" status="${this.status}">
            <div class="spinner-inner">
                <div class="spinner-line" ></div>
                <div class="spinner-line" ></div>
                <div class="spinner-line" ></div>
                <div class="spinner-circle">
                    &#9679;
                </div>
            </div>
        </div>
        `}}customElements.define("logo-spinner",e);
},{"lit-element":"bhxD"}],"T9Dy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("lit-element");const o=e.css`

[class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

.icon-facebook .path1:before {
    content: "\\e900";
    color: rgb(59, 89, 152);
  }
  .icon-facebook .path2:before {
    content: "\\e901";
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
  .icon-google-mas .path1:before {
    content: "\\e902";
    color: rgb(220, 78, 65);
  }
  .icon-google-mas .path2:before {
    content: "\\e903";
    margin-left: -1em;
    color: rgb(220, 78, 65);
  }
  .icon-google-mas .path3:before {
    content: "\\e904";
    margin-left: -1em;
    color: rgb(220, 78, 65);
  }
  .icon-google-mas .path4:before {
    content: "\\e905";
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
  .icon-google-mas .path5:before {
    content: "\\e906";
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
  .icon-twitter .path1:before {
    content: "\\e907";
    color: rgb(85, 172, 238);
  }
  .icon-twitter .path2:before {
    content: "\\e908";
    margin-left: -1em;
    color: rgb(241, 242, 242);
  }
  .icon-linkedin .path1:before {
    content: "\\e909";
    color: rgb(0, 122, 185);
  }
  .icon-linkedin .path2:before {
    content: "\\e90a";
    margin-left: -1em;
    color: rgb(241, 242, 242);
  }
  .icon-calendar:before {
    content: "\\e953";
  }
  .icon-spoon-knife:before {
    content: "\\e9a3";
  }
  .icon-rocket:before {
    content: "\\e9a5";
  }
  .icon-clipboard:before {
    content: "\\e9b8";
  }
  
  `;var t=o;exports.default=t;
},{"lit-element":"bhxD"}],"E5eI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HomePage=void 0;var t=require("lit-element");require("../elements/logoSpinner.js");var e=s(require("../helpers/fontsStyles.js"));function s(t){return t&&t.__esModule?t:{default:t}}class o extends t.LitElement{static get properties(){return{status:{type:String},user:{type:String},password:{type:String}}}constructor(){super(),this.status="inactive",this.user="",this.password=""}static get styles(){return[e.default,t.css`
        :host{
            min-height: 100%;
            display: grid;
            grid-template-rows: 1fr auto;
            grid-template-columns: 100%;
            position: relative;
        }
        main{
            display:flex;
            align-items: center;
            justify-content: center;
        }

        footer {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 6em;
        }
        
        .content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            letter-spacing: 2px;
        }

        .content h1{
            font-family: 'Ultra', serif;
            text-transform: uppercase;
            color: rgb(10,27,96);
            font-size: 3em;
        }

        .content span{
            font-family: 'Shadows Into Light', cursive;
            font-size: 2em;
            color: rgb(10,27,96);
        }

        .btn{
            text-decoration:none;
            font-weight: 600;
            font-size: 20px;
            color:#333333;
            padding-top:15px;
            padding-bottom:15px;
            padding-left:40px;
            padding-right:40px;
            background-color:blue;
            border-radius:35px;
        }

        button {
            position: relative;
            display: inline-block;
            cursor: pointer;
            outline: none;
            border: 0;
            vertical-align: middle;
            text-decoration: none;
            background: transparent;
            padding: 0;
            font-size: inherit;
            font-family: inherit;
        }
        button.singIn {
            width: 12rem;
            height: auto;
        }
        button.singIn .circle {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: relative;
            display: block;
            margin: 0;
            width: 3rem;
            height: 3rem;
            background: rgb(10, 27, 96);
            border-radius: 1.625rem;
        }
        button.singIn .circle .icon {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            background: #fff;
        }
        button.singIn .circle .icon.arrow {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            left: 0.625rem;
            width: 1.125rem;
            height: 0.125rem;
            background: none;
        }
        button.singIn .circle .icon.arrow::before {
            position: absolute;
            content: '';
            top: -0.25rem;
            right: 0.0625rem;
            width: 0.625rem;
            height: 0.625rem;
            border-top: 0.125rem solid #fff;
            border-right: 0.125rem solid #fff;
            -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
        }
        button.singIn .button-text {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0.75rem 0;
            margin: 0 0 0 1.85rem;
            color: rgb(10, 27, 96);
            font-weight: 700;
            line-height: 1.6;
            text-align: center;
            text-transform: uppercase;
        }
        button:hover .circle {
            width: 100%;
        }
        button:hover .circle .icon.arrow {
            background: #fff;
            -webkit-transform: translate(1rem, 0);
                    transform: translate(1rem, 0);
        }
        button:hover .button-text {
            color: #fff;
        }
        .modal{
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            padding: 2em;
            background: #fff;
            transform: translateY(100%);
            transition: transform 0.7s;
            z-index: 1;
            min-height: 100%;
            display: grid;
            grid-template-rows: 1fr auto;
            grid-template-columns: 100%;
            box-sizing: border-box;
        }

        .modal form {
            display: flex;
            flex-direction: column; 
        }

        .modal .login-input {
            border: 1px solid #000;
            border-radius: 24px;
            padding: 1em;
            margin-bottom: 2em;
        }

        .modal form .password-field{
            float: right;
            margin-left: -80px;
            margin-top: -25px;
            position: relative;
            z-index: 2;
        }

        .modal form .buttons{
            display: flex;
            justify-content: space-around;
            margin-top: 2em;
        }

        .modal form .button {
            height: 48px;
            opacity: 0.95;
            background: rgb(10, 27, 96);
            box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px 0px, rgba(0, 0, 0, 0.72) 4px 4px 8px 0px;
            border-radius: 100px;
            font-family: VarelaRound-Regular;
            font-size: 16px;
            color: #fff;
            letter-spacing: 1px;
            text-transform: capitalize;
            width: 8em;
        }

        .modal .other-logins{
            height: 8em;
        }

        .modal.show {
            transform: translateY(0);
        }


        #share {
            width: 100%;
            text-align: center;
        }


        #share .socialbtn{
            width: 50px;
            height: 50px;
            display: inline-block;
            margin: 8px;
            border-radius: 50%;
            font-size: 24px;
            color: #fff;
            opacity: 0.75;
            transition: opacity 0.15s linear;
        }

        #share .socialbtn:hover {
            opacity: 1;
        }


        #share i {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }


        .facebook {
            background: #3b5998;
        }

        .twitter {
            background: #55acee;
        }

        .googleplus {
            background: #dd4b39;
        }

        .linkedin {
            background: #0077b5;
        }

        .pinterest {
            background: #cb2027;
        }
        `]}render(){return t.html`
        <main>
            <div class="content">
                <logo-spinner status="${this.status}"></logo-spinner>
                <div>
                    <h1>actíva-T</h1>
                    <span>libera tu energia</span>
                </div>
            </div> 
        </main>
         <footer>
         <button class="singIn" @click="${this.handleClick}">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Entra</span>
        </button>
         </footer>
         <div class="modal">
         <form @submit="${this.doLogin}">
            <input name="username" id="login-username" class="login-input" type="text" maxlength="96" tabindex="1" aria-required="true"
            .value="${this.user}" placeholder="e-mail" title="e-mail" @input="${this.setValue}" autocorrect="off" spellcheck="false"  required >
            <input name="password" id="login-password" class="login-input " type="password" maxlength="8" tabindex="1" aria-required="true"
            .value="${this.password}" placeholder="password" @input="${this.setValue}" autocorrect="off" spellcheck="false"  required >

            <p id="last_line">
            <label for="show_password">
                <input type="checkbox" name="show_password" id="show_password" @click="${this.clickShow}">
                Show Password
            </label>
            </p>
            <div class="buttons">
                <button id="login-signing" class="button " type="submit" value="Submit" tabindex="1">Login</button>
                <button id="login-signing" class="button " tabindex="1" @click="${this.close}">close</button>
            </div>
            <a href="/dashboard"></a>
         </form>



         <div class="other-logins">
         <div id="share">
            <!-- facebook -->
            <button  class="socialbtn facebook" ><span class="icon-facebook"><span class="path1"></span><span class="path2"></span></span></a>

            <!-- twitter -->
            <button class="socialbtn twitter"><span class="icon-twitter"><span class="path1"></span><span class="path2"></span></span></a>

            <!-- google plus -->
            <button class="socialbtn googleplus"><span class="icon-google-mas"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span></a>

            <!-- linkedin -->
            <button class="socialbtn linkedin" ><span class="icon-linkedin"><span class="path1"></span><span class="path2"></span></span></a>

            </div>
         </div>
         </div>  
        `}handleClick(){this.status="active",this.shadowRoot.querySelector(".modal").classList.toggle("show")}clickShow(t){const e=this.shadowRoot.querySelector("#login-password");t.target.checked?e.type="text":e.type="password"}closeModal(){this.shadowRoot.querySelector(".modal").classList.toggle("show")}close(t){this.resetLogo(),this.closeModal(),setTimeout(()=>{this.resetForm()},500)}resetForm(){this.user="",this.password=""}resetLogo(){this.status="inactive"}setValue(t){"password"===t.target.name?this.password=t.target.value:this.user=t.target.value}doLogin(t){t&&t.preventDefault(),this.closeModal(),setTimeout(()=>{const t=new CustomEvent("navigation-to",{detail:"dashboard",composed:!0,bubbles:!0});this.dispatchEvent(t)},1500)}}exports.HomePage=o;
},{"lit-element":"bhxD","../elements/logoSpinner.js":"wwpc","../helpers/fontsStyles.js":"T9Dy"}],"GGJX":[function(require,module,exports) {
"use strict";var e=require("./homePage.js");customElements.define("home-page",e.HomePage);
},{"./homePage.js":"E5eI"}],"wyEa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DashboardPage=void 0;var t=require("lit-element"),e=n(require("../helpers/fontsStyles.js"));function n(t){return t&&t.__esModule?t:{default:t}}class a extends t.LitElement{static get properties(){return{}}constructor(){super()}static get styles(){return[e.default,t.css`
        :host {
            min-height: 100%;
            display: grid;
            grid-template-rows: auto 1fr;
            grid-template-columns: 100%;
            position: relative;
            background: #fff;
            padding: 2em;
            box-sizing: border-box;
            --myCustomHeight: 3em;
            --myCustomwidth: 3em;
            --myCustomPoint: 1em;
        }

        header{
            display: flex;
            align-items: center;
            margin-top: 2em;
            justify-content: space-between;
        }

        header span {
            font-family: Ultra, serif;
            text-transform: uppercase;
            color: rgb(10, 27, 96);
            font-size: 2.2em;
        }

        main {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 0 1em 1em;
        }

        .btn{
            display: inline-block;
            padding: 6px 12px 0 0;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
            text-align: center;
            align-content: center;
            height: 3em;
            line-height: 38px;
        }

        .btn-label {
            position: relative;
            float:left;
            display: inline-block;
            background: rgba(0,0,0,0.15);
            border-radius: 3px 0 0 3px;
            line-height: 38px;
            height: 100%;
            width: 2.5em;
        }

        .btn-labeled {color: #fff;
           
            padding-top: 0;
            padding-bottom: 0;}

        .btn-dieta{
            background-color: #5cb85c;
            border-color: #4cae4c;
        }

        .btn-tabla{
            background-color: #337ab7;
            border-color: #2e6da4;
        }

        .btn-obj{
            background-color: #f0ad4e;
            border-color: #eea236;
        }

        .btn-test{
            background-color: #5bc0de;
            border-color: #46b8da;
        }
        
        `]}render(){return t.html`
        <header>
            <logo-spinner></logo-spinner>
            <span> actíva-t </span>  
        </header>
        <main>
            <button type="button" class="btn btn-labeled btn-dieta" data-url="dieta" @click="${this.handleClick}">
            <span class="btn-label icon-spoon-knife"></span>Alimentación</button>
            <button type="button" class="btn btn-labeled btn-tabla" data-url="tabla" @click="${this.handleClick}"><span class="btn-label icon-calendar"></span>Tabla</button>
            <button type="button" class="btn btn-labeled btn-obj" data-url="obj" @click="${this.handleClick}"><span class="btn-label icon-rocket"></span>Objetivos</button>
            <button type="button" class="btn btn-labeled btn-test" data-url="test" @click="${this.handleClick}"><span class="btn-label icon-clipboard"></span>Tests</button>
        </main>
        
        `}handleClick(t){const e=t.target.dataset.url,n=new CustomEvent("navigation-to",{detail:e,composed:!0,bubbles:!0});this.dispatchEvent(n)}}exports.DashboardPage=a;
},{"lit-element":"bhxD","../helpers/fontsStyles.js":"T9Dy"}],"V5jY":[function(require,module,exports) {
"use strict";var a=require("./dashboardPage.js");customElements.define("dashboard-page",a.DashboardPage);
},{"./dashboardPage.js":"wyEa"}],"WAaN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TestPage=void 0;var e=require("lit-element");require("../elements/logoSpinner.js");var t=r(require("../helpers/fontsStyles.js"));function r(e){return e&&e.__esModule?e:{default:e}}class i extends e.LitElement{static get properties(){return{items:{type:Array}}}constructor(){super(),this.items=[{title:"Sentadillas 1'",resAnterior:30,resActual:41},{title:"Pasos de Oso 1'",resAnterior:0,resActual:41},{title:"Tablon ISO",resAnterior:"40",resActual:"2'20"},{title:"Jumping jack 1",resAnterior:0,resActual:87},{title:"Flexiones 1'",resAnterior:30,resActual:37},{title:"Sentadilla ISO'",resAnterior:30,resActual:"43"},{title:"Abd Rombo 1'",resAnterior:30,resActual:30},{title:"Burpees 1'",resAnterior:30,resActual:24},{title:"Dominadas 1'",resAnterior:0,resActual:8},{title:"Carrera 1'",resAnterior:"6'00",resActual:"5'11"},{title:"Carrera 3'",resAnterior:0,resActual:0},{title:"Carrera 5'",resAnterior:0,resActual:0},{title:"Dominada ISO'",resAnterior:0,resActual:0},{title:"Super Test'",resAnterior:0,resActual:"11'44"}]}static get styles(){return[t.default,e.css`
        :host {
            min-height: 100%;
            display: grid;
            grid-template-rows: auto 1fr auto;
            grid-template-columns: 100%;
            position: relative;
            background: #fff;
            padding: 2em;
            box-sizing: border-box;
            --myCustomHeight: 3em;
            --myCustomwidth: 3em;
            --myCustomPoint: 1em;
        }

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        header span {
            font-family: Ultra, serif;
            text-transform: uppercase;
            color: rgb(10, 27, 96);
            font-size: 2.2em;
        }

        main {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 0 1em 1em;
        }

        .table{
            display: flex;
            justify-content: space-between;
        }

        .table span {
            width: 2em;
            font-family:'Raleway';
            font-size: 1em;
            text-align: right;
        }

        .table span.title {
            width: 7.75em;
            text-transform: uppercase;
            text-align: left;
        }

        .header{
            color:rgb(159 216 233)
        }

        button {
            position: relative;
            display: inline-block;
            cursor: pointer;
            outline: none;
            border: 0;
            vertical-align: middle;
            text-decoration: none;
            background: transparent;
            padding: 0;
            font-size: inherit;
            font-family: inherit;
        }
        button.singIn {
            width: 12rem;
            height: auto;
        }
        button.singIn .circle {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: relative;
            display: block;
            margin: 0;
            width: 3rem;
            height: 3rem;
            background: rgb(10, 27, 96);
            border-radius: 1.625rem;
            transform: rotate(180deg);
        }
        button.singIn .circle .icon {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            background: #fff;
        }
        button.singIn .circle .icon.arrow {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            left: 0.625rem;
            width: 1.125rem;
            height: 0.125rem;
            background: none;
        }
        button.singIn .circle .icon.arrow::before {
            position: absolute;
            content: '';
            top: -0.25rem;
            right: 0.0625rem;
            width: 0.625rem;
            height: 0.625rem;
            border-top: 0.125rem solid #fff;
            border-right: 0.125rem solid #fff;
            -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
        }
        button.singIn .button-text {
            -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0.75rem 0;
            margin: 0 0 0 3.5rem;
            color: rgb(10, 27, 96);
            font-weight: 700;
            line-height: 1.6;
            text-align: left;
            text-transform: uppercase;
        }
        button:hover .circle {
            width: 100%;
        }
        button:hover .circle .icon.arrow {
            background: #fff;
            -webkit-transform: translate(1rem, 0);
                    transform: translate(1rem, 0);
        }
        button:hover .button-text {
            color: #fff;
        }
        `]}render(){return e.html`
        <header>
            <logo-spinner></logo-spinner>
            <span> actíva-t </span>  
        </header>
        <main>
        <div class="table">
            <span class="header title">Ejercicio</span>
            <span class="header">Anterior</span>
            <span class="header">Actual</span>
        </div>
        ${this.items.map(t=>e.html`<div class="table">
            <span class="title">${t.title}</span>
            <span>${t.resAnterior}</span>
            <span>${t.resActual}</span>
        </div>`)}
        </main>

        <footer>
        <button class="singIn" @click="${this.handleClick}">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">volver</span>
        </button>
        </footer>
    
        `}handleClick(){const e=new CustomEvent("navigation-to",{detail:"dashboard",composed:!0,bubbles:!0});this.dispatchEvent(e)}}exports.TestPage=i;
},{"lit-element":"bhxD","../elements/logoSpinner.js":"wwpc","../helpers/fontsStyles.js":"T9Dy"}],"cmHB":[function(require,module,exports) {
"use strict";var e=require("./testPage.js");customElements.define("test-page",e.TestPage);
},{"./testPage.js":"WAaN"}],"FyzG":[function(require,module,exports) {
"use strict";var e=require("@vaadin/router");require("./pages/home-page.js"),require("./pages/dashboard-page.js"),require("./pages/test-page.js");const t=document.getElementById("outlet"),a=new e.Router(t);a.setRoutes([{path:"/",animate:!0,children:[{path:"",component:"home-page"},{path:"/dashboard",component:"dashboard-page"},{path:"/test",component:"test-page"}]}]),t.addEventListener("navigation-to",({detail:t})=>{e.Router.go(`/${t}`)});
},{"@vaadin/router":"KX2f","./pages/home-page.js":"GGJX","./pages/dashboard-page.js":"V5jY","./pages/test-page.js":"cmHB"}]},{},["FyzG"], null)
//# sourceMappingURL=/init.d60ddbb2.js.map