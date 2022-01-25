!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Personality=e():t.Personality=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e){t.exports='<svg class="svg-icon" width="17" height="17" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M882.9 452c15.8-15.4 7.1-42.3-14.8-45.5l-215.7-31.3c-8.7-1.3-16.2-6.7-20.1-14.6l-96.5-195.4c-9.8-19.8-38-19.8-47.8 0l-96.5 195.4c-3.9 7.9-11.4 13.3-20.1 14.6l-215.7 31.3c-21.9 3.2-30.6 30-14.8 45.5L297 604.1c6.3 6.1 9.1 14.9 7.7 23.6L268 842.5c-3.7 21.8 19.1 38.4 38.7 28.1l192.9-101.4c7.8-4.1 17-4.1 24.8 0l192.9 101.4c19.6 10.3 42.4-6.3 38.7-28.1l-36.8-214.8c-1.5-8.6 1.4-17.5 7.7-23.6l156-152.1zM665.5 596.4l36.2 211.2L512 707.9l-189.7 99.7 36.2-211.2-153.4-149.6L417.2 416 512 223.8 606.8 416l212.1 30.8-153.4 149.6z"></path></svg>'},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(0),i=n.n(r);n(2);function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){var n=e.data,r=e.config,i=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=i,this.nodes={title:null,description:null,nameTitleInput:null,nameDescriptionInput:null},this.config={titlePlaceholder:r.titlePlaceholder||"Title",descriptionPlaceholder:r.descriptionPlaceholder||"Description",inputTitleName:r.inputTitleName||"Title",inputDescriptionName:r.inputDescriptionName||"Description"},this.data=n}var e,n,r;return e=t,r=[{key:"toolbox",get:function(){return{icon:i.a,title:"Заголовок / Опис"}}}],(n=[{key:"save",value:function(t){var e=t.querySelector(".".concat(this.CSS.title)).textContent,n=t.querySelector(".".concat(this.CSS.description)).textContent;return Object.assign(this.data,{title:e.trim()||"",description:n.trim()||""}),this.data}},{key:"render",value:function(){var t=this.data,e=t.title,n=t.description;return this.nodes.wrapper=this.make("div",this.CSS.baseClass),this.nodes.title=this.make("div",this.CSS.title,{contentEditable:!0}),this.nodes.description=this.make("div",this.CSS.description,{contentEditable:!0}),e&&(this.nodes.title.textContent=e),n&&(this.nodes.description.textContent=n),this.nodes.title.dataset.placeholder=this.config.titlePlaceholder,this.nodes.description.dataset.placeholder=this.config.descriptionPlaceholder,this.nodes.nameTitleInput=this.make("div",this.CSS.nameInput,{contentEditable:!1}),this.nodes.nameTitleInput.textContent=this.config.inputTitleName,this.nodes.nameDescriptionInput=this.make("div",this.CSS.nameInput,{contentEditable:!1}),this.nodes.nameDescriptionInput.textContent=this.config.inputDescriptionName,this.nodes.wrapper.appendChild(this.nodes.nameTitleInput),this.nodes.wrapper.appendChild(this.nodes.title),this.nodes.wrapper.appendChild(this.nodes.nameDescriptionInput),this.nodes.wrapper.appendChild(this.nodes.description),this.nodes.wrapper}},{key:"validate",value:function(t){return!(!t.title.trim()||!t.description.trim())}},{key:"make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);Array.isArray(n)?(e=i.classList).add.apply(e,o(n)):n&&i.classList.add(n);for(var s in r)i[s]=r[s];return i}},{key:"CSS",get:function(){return{baseClass:[this.api.styles.block,"cdx-score__base"],title:["cdx-score__title",this.api.styles.input],description:["cdx-score__description",this.api.styles.input],nameInput:["cdx-score__input_name"]}}}])&&a(e.prototype,n),r&&a(e,r),t}()},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".cdx-score__base {\n    padding: 0.5rem 0 0.5rem 0;\n}\n.cdx-score__title {\n    margin-bottom: 1rem;\n}\n.cdx-score__input_name {\n    margin-bottom: 0.3rem;\n    font-size: 14px;\n}",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),o=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(o).concat([i]).join("\n")}var s,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,u=[],f=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(b(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function d(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertAt.before,n);n.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),h(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=l++;n=c||(c=v(e)),r=x.bind(null,n,s,!1),i=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=f(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}t&&p(d(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}]).default});