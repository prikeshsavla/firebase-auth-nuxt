(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{186:function(t,e,r){"use strict";var n=r(187);function o(t){this.message=t}o.prototype=new Error,o.prototype.name="InvalidTokenError",t.exports=function(t,e){if("string"!=typeof t)throw new o("Invalid token specified");var r=!0===(e=e||{}).header?0:1;try{return JSON.parse(n(t.split(".")[r]))}catch(t){throw new o("Invalid token specified: "+t.message)}},t.exports.InvalidTokenError=o},187:function(t,e,r){var n=r(188);t.exports=function(t){var output=t.replace(/-/g,"+").replace(/_/g,"/");switch(output.length%4){case 0:break;case 2:output+="==";break;case 3:output+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(n(t).replace(/(.)/g,(function(t,p){var code=p.charCodeAt(0).toString(16).toUpperCase();return code.length<2&&(code="0"+code),"%"+code})))}(output)}catch(t){return n(output)}}},188:function(t,e){function r(t){this.message=t}r.prototype=new Error,r.prototype.name="InvalidCharacterError",t.exports="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(input){var t=String(input).replace(/=+$/,"");if(t.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var e,n,o=0,c=0,output="";n=t.charAt(c++);~n&&(e=o%4?64*e+n:n,o++%4)?output+=String.fromCharCode(255&e>>(-2*o&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return output}},189:function(t,e,r){"use strict";function n(){}t.exports=n,n.maxLength=4096,n.parse=function(t){var e=n.maxLength;if("string"!=typeof t)throw new TypeError("str must be a string");if(t.length>e)throw new RangeError("str is too large (CookieParser.maxLength="+e+")");var r=new n;if(arguments.length>1){var o=arguments[1];if("object"==typeof o&&null!==o&&"function"==typeof o.decode)return r.slowParse(t,o.decode)}return r.parse(t)},n.prototype.decode=function(t){try{return decodeURIComponent(t)}catch(e){return t}},n.prototype.extract=function(t,e,r){return e===r+1?"":t.slice(this.trimForward(t,e),this.trimBackward(t,r)+1)},n.prototype.trimForward=function(t,i){for(var e=t.charCodeAt(i);this.isWhiteSpace(e);)e=t.charCodeAt(++i);return i},n.prototype.trimBackward=function(t,i){for(var e=t.charCodeAt(i);this.isWhiteSpace(e);)e=t.charCodeAt(--i);return i},n.prototype.isWhiteSpace=function(t){return t<=32},n.prototype.parse=function(t){var e={},r=0,n=0,o=0,c=0,h=!1,f=!1,i=0,d=t.length;t:for(;i<d;++i){var l=t.charCodeAt(i);if(l>127)return this.slowParse(t,this.decode);if(61===l){n=i-1;var w=i+1;for(l=t.charCodeAt(w);32===l;)w++,l=t.charCodeAt(w);for(34===l&&(w++,f=!0),o=w;w<d;++w)if(37===(l=t.charCodeAt(w)))h=!0;else if(59===l||44===l){if(f)(c=this.trimBackward(t,w-1)-1)<o&&(o=c);else c=w-1;var v=this.extract(t,r,n),m=this.extract(t,o,c);for(e[v]=h?this.decode(m):m,i=w;w<d;++w)if(32!==t.charCodeAt(w)){i=w-1;break}n=r=i+1,f=!1,h=!1;continue t}if(f)(c=this.trimBackward(t,w-1)-1)<o&&(o=c);else c=w-1;v=this.extract(t,r,n),m=this.extract(t,o,c);e[v]=h?this.decode(m):m,i=w}else 59!==l&&44!==l||(r=i+1)}return e},n.serialize=function(t,e,r){var n=[t+"="+((r=r||{}).encode||encodeURIComponent)(e)];return r.maxAge&&n.push("Max-Age="+r.maxAge),r.domain&&n.push("Domain="+r.domain),r.path&&n.push("Path="+r.path),r.expires&&n.push("Expires="+r.expires.toUTCString()),r.httpOnly&&n.push("HttpOnly"),r.secure&&n.push("Secure"),n.join("; ")},n.prototype.slowParse=function(t,e){var r={};return t.split(/[;,] */).forEach((function(t){var n=t.indexOf("=");if(!(n<0)){var o=t.substr(0,n).trim(),c=t.substr(++n,t.length).trim();if('"'==c[0]&&(c=c.slice(1,-1)),null==r[o])try{r[o]=e(c)}catch(t){r[o]=c}}})),r}},193:function(t,e,r){"use strict";r.r(e);r(186),r(189);var n=r(19),o={asyncData:function(t){t.req;var e=t.redirect;n.auth().currentUser||e("/login")}},c=r(23),component=Object(c.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticClass:"text-3xl"},[this._v("This is secret info")])])}],!1,null,null,null);e.default=component.exports}}]);