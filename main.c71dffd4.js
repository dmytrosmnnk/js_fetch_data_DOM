parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n,r){return c(n)||o(n,r)||e(n,r)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function o(n,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,o=!1,c=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return e}}function c(n){if(Array.isArray(n))return n}var a="https://mate-academy.github.io/phone-catalogue-static/api/phones",i=document.querySelector("body"),u=document.createElement("ul");i.style.flexDirection="column",i.append(u);var l=function(){return fetch("".concat(a,".json")).then(function(n){return n.json()}).catch(p,5e3)},f=function(n){return fetch("".concat(a,"/").concat(n,".json")).then(function(n){return n.json()}).catch(p)},p=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;setTimeout(function(){console.warn("Error occurred!",n)},t)};function s(){l().then(function(t){t.map(function(t){var e=document.createElement("li");u.append(e),f(t.id).then(function(r){e.innerHTML="\n              <b>".concat(t.name,"</b>\n              <p>").concat(Object.entries(r).map(function(t){var e=n(t,2),r=e[0],o=e[1];return"\n                  <i>".concat(r,"</i>: ").concat(m(o),"<br>\n                ")}).join(""),"\n              </p>\n            ")})})})}function m(n){return JSON.stringify(n).replace(/["{}]/g,"").replace("[","").replace("]","").replace(/,/g,", ").replace(/:/g,": ")}s();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c71dffd4.js.map