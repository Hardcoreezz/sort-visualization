parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"epB2":[function(require,module,exports) {
"use strict";function e(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,u=function(){};return{s:u,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function t(e){return u(e)||a(e)||n(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r,n,a,u,o){try{var i=e[u](o),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function o(e){i(u,n,a,o,c,"next",e)}function c(e){i(u,n,a,o,c,"throw",e)}o(void 0)})}}require("regenerator-runtime/runtime");var s=document.getElementById("container"),f=document.getElementById("msSpeed"),l=5,d=function(){var e=document.getElementById("countElements"),t=e.value;if(e.classList.remove("error"),!t||t>1e3)e.classList.add("error");else{var r=s.getBoundingClientRect().width/t;s.innerHTML="";for(var n=0;n<t;n++){var a=document.createElement("span"),u=Math.floor(100*Math.random());a.style.width=r+"px",a.style.height=u+"%",a.setAttribute("data-value",String(u)),a.setAttribute("data-index",String(n)),s.append(a)}}},p=function(e){l=100-e,f.innerText="".concat(l)},m=function(){var e=c(regeneratorRuntime.mark(function e(){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t(s.children),e.next=3,v(r);case 3:if(n=e.sent,e.t0=n,!e.t0){e.next=8;break}return e.next=8,b(r);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=function(){var t=c(regeneratorRuntime.mark(function t(r){var n,a,u,o,i,c,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e(r),t.prev=1,n.s();case 3:if((a=n.n()).done){t.next=19;break}return u=a.value,t.next=7,y(u);case 7:if((o=t.sent).nextSibling){t.next=10;break}return t.abrupt("return",!1);case 10:return t.next=12,y(o.nextSibling);case 12:if(i=t.sent,c=parseInt(o.getAttribute("data-value")),s=parseInt(i.getAttribute("data-value")),!(c>s)){t.next=17;break}return t.abrupt("return",!0);case 17:t.next=3;break;case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),n.e(t.t0);case 24:return t.prev=24,n.f(),t.finish(24);case 27:return t.abrupt("return",!1);case 28:case"end":return t.stop()}},t,null,[[1,21,24,27]])}));return function(e){return t.apply(this,arguments)}}(),b=function(){var r=c(regeneratorRuntime.mark(function r(n){var a,u,o,i,c,f,l,d,p,m;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(n.length<2)){r.next=2;break}return r.abrupt("return",n);case 2:return r.next=4,g(n,Math.floor(n.length/2));case 4:a=r.sent,u=a.getAttribute("data-index"),o=[],i=[],c=e(n),r.prev=9,c.s();case 11:if((f=c.n()).done){r.next=28;break}return l=f.value,r.t0=parseInt,r.next=16,y(l);case 16:return r.t1=r.sent.getAttribute("data-value"),d=(0,r.t0)(r.t1),r.t2=parseInt,r.next=21,y(a);case 21:r.t3=r.sent.getAttribute("data-value"),p=(0,r.t2)(r.t3),m=l.getAttribute("data-index"),d<=p&&m!==u&&o.push(l),d>p&&i.unshift(l);case 26:r.next=11;break;case 28:r.next=33;break;case 30:r.prev=30,r.t4=r.catch(9),c.e(r.t4);case 33:return r.prev=33,c.f(),r.finish(33);case 36:return o.map(function(e){e.remove(),s.insertBefore(e,a)}),i.map(function(e){e.remove(),a.after(e)}),r.t5=[],r.t6=t,r.next=42,b(o);case 42:return r.t7=r.sent,r.t8=(0,r.t6)(r.t7),r.t9=[a],r.t10=t,r.next=48,b(i);case 48:return r.t11=r.sent,r.t12=(0,r.t10)(r.t11),r.abrupt("return",r.t5.concat.call(r.t5,r.t8,r.t9,r.t12));case 51:case"end":return r.stop()}},r,null,[[9,30,33,36]])}));return function(e){return r.apply(this,arguments)}}(),g=function(){var e=c(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t[r]){e.next=2;break}return e.abrupt("return",null);case 2:return t[r].style.background="red",e.next=5,h(function(){t[r].style.background="black"},l);case 5:return e.abrupt("return",t[r]);case 6:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),y=function(){var e=c(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.style.background="red",e.next=3,h(function(){t.style.background="black"},l);case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function h(e,t){return new Promise(function(r){return setTimeout(function(){e(),r()},t)})}var x=document.getElementById("generate"),k=document.getElementById("sort"),w=document.getElementById("speed");p(w.value),w.addEventListener("input",function(e){return p(e.target.value)}),x.onclick=d,k.onclick=m;
},{"regenerator-runtime/runtime":"QVnC"}]},{},["epB2"], null)
//# sourceMappingURL=/main.f5b2f458.js.map