/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,r)=>{var n=r(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h={};function v(){}function p(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(q([])));x&&x!==r&&i.call(x,c)&&(y=x);var L=m.prototype=v.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,a,c,u){var s=d(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function q(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=m,l(L,"constructor",m),l(m,"constructor",p),p.displayName=l(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,u,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(L),l(L,s,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=q,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:q(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,r)=>{var n=r(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r){var n=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(){n.removeEventListener("touchstart",i),n.removeEventListener("click",i)})),r())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){n.addEventListener(t,i)}))})),t.setAttribute(o,""))}function e(e){var r=this;e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(function(){r.classList.remove("active"),console.log(r)}))}function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}document.querySelectorAll("[data-dropdown]").forEach((function(t){t.addEventListener("touchstart",e),t.addEventListener("click",e)}));var i,a,c,u,s,l,f,d,h,v,p=r(687),m=r.n(p);function y(){var t;t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((function(t){var e=+t.innerText,r=Math.floor(e/100),n=0,o=setInterval((function(){n+=r,t.innerText=n,n>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})))}));var e=document.querySelector(".numeros");t.observe(e,{attributes:!0})}!function(){function t(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-anime="accordion"] a[href^="#"]').forEach((function(e){e.addEventListener("click",t)}))}(),function(){var t,e=document.querySelectorAll('[data-anime="scroll"]');function r(){e.forEach((function(e){e.getBoundingClientRect().top-t<0?e.classList.add("ativo"):e.classList.contains("ativo")&&e.classList.remove("ativo")}))}e.length&&(t=.6*window.innerHeight,r(),window.addEventListener("scroll",r))}(),function(){var t=document.querySelectorAll('[data-anime="accordion"] dt'),e="ativo";function r(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&t.forEach((function(t){t.classList.add(e),t.nextElementSibling.classList.add(e),t.addEventListener("click",r)}))}(),i=document.querySelectorAll('[data-tab="menu"] li'),a=document.querySelectorAll('[data-tab="content"] section'),i.length&&a.length&&(a[0].classList.add("show-down"),a[0].classList.add("ativo"),i.forEach((function(t,e){t.addEventListener("click",(function(){!function(t){var e=a[t].dataset.anime;a.forEach((function(t){t.classList.remove("ativo")})),a[t].classList.add("ativo",e)}(e)}))}))),function(){var t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="container"]'),r=document.querySelector('[data-modal="fechar"]');function n(t){t.preventDefault(),e.classList.toggle("ativo")}t&&e&&r&&(t.addEventListener("click",n),r.addEventListener("click",n),e.addEventListener("click",(function(t){t.target===this&&n(t)})))}(),function(){var t,e,r=document.querySelectorAll("[data-tooltip]");function n(r){var n=function(t){var e=document.createElement("div"),r=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=r,document.body.appendChild(e),e}(this);n.style.top="".concat(r.pageY,"px"),n.style.left="".concat(r.pageX,"px"),t.ttBox=n,t.element=this,this.addEventListener("mouseleave",t),e.ttBox=n,this.addEventListener("mousemove",e)}t={ttBox:"",element:"",handleEvent:function(){this.ttBox.remove(),this.element.removeEventListener("mouseleave",t),this.element.removeEventListener("mousemove",e)}},e={ttBox:"",handleEvent:function(t){this.ttBox.style.top="".concat(t.pageY+20,"px"),this.ttBox.style.left="".concat(t.pageX+20,"px")}},r.forEach((function(t){t.addEventListener("mouseover",n)}))}(),function(){var e=document.querySelector('[data-menu="button"]'),r=document.querySelector('[data-menu="list"]');function n(){e.classList.add("active"),r.classList.add("active"),t(r,["click","touchstart"],(function(){e.classList.remove("active"),r.classList.remove("active")}))}e&&["click","touchstart"].forEach((function(t){e.addEventListener(t,n)}))}(),u=(c=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),s=c.dataset.horario.split(",").map(Number),f=(l=new Date).getDay(),d=l.getHours(),h=-1!==u.indexOf(f),v=d>=s[0]&&d<s[1],h&&v&&c.classList.add("aberto"),function(){function t(){return(t=o(m().mark((function t(e){var r,n,o,i;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.species,"</h3><span data-numero>").concat(t.total,"</span>"),e},t.prev=1,t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:o=t.sent,i=document.querySelector(".numeros-grid"),o.forEach((function(t){var e=r(t);i.appendChild(e)})),y(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(Error(t.t0));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}("./animaisapi.json")}(),function(){function t(){return(t=o(m().mark((function t(e){var r,n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,document.querySelector(".btc-preco").innerText=(30/n.BRL.buy).toFixed(4),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}("https://blockchain.info/ticker")}()})()})();