(function(t,r){"object"===typeof exports&&"object"===typeof module?module.exports=r():"function"===typeof define&&define.amd?define([],r):"object"===typeof exports?exports["@fujica/element"]=r():t["@fujica/element"]=r()})(window,(function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="/",e(e.s="e74d")}({"00ee":function(t,r,e){"use strict";var n=e("b622"),o=n("toStringTag"),c={};c[o]="z",t.exports="[object z]"===String(c)},"04f8":function(t,r,e){"use strict";var n=e("2d00"),o=e("d039"),c=e("da84"),i=c.String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"06cf":function(t,r,e){"use strict";var n=e("83ab"),o=e("c65b"),c=e("d1e7"),i=e("5c6c"),u=e("fc6a"),s=e("a04b"),a=e("1a2d"),f=e("0cfb"),p=Object.getOwnPropertyDescriptor;r.f=n?p:function(t,r){if(t=u(t),r=s(r),f)try{return p(t,r)}catch(e){}if(a(t,r))return i(!o(c.f,t,r),t[r])}},"07fa":function(t,r,e){"use strict";var n=e("50c4");t.exports=function(t){return n(t.length)}},"0cfb":function(t,r,e){"use strict";var n=e("83ab"),o=e("d039"),c=e("cc12");t.exports=!n&&!o((function(){return 7!==Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},"0d26":function(t,r,e){"use strict";var n=e("e330"),o=Error,c=n("".replace),i=function(t){return String(new o(t).stack)}("zxcasd"),u=/\n\s*at [^:]*:[^\n]*/,s=u.test(i);t.exports=function(t,r){if(s&&"string"==typeof t&&!o.prepareStackTrace)while(r--)t=c(t,u,"");return t}},"0d51":function(t,r,e){"use strict";var n=String;t.exports=function(t){try{return n(t)}catch(r){return"Object"}}},"13d2":function(t,r,e){"use strict";var n=e("e330"),o=e("d039"),c=e("1626"),i=e("1a2d"),u=e("83ab"),s=e("5e77").CONFIGURABLE,a=e("8925"),f=e("69f3"),p=f.enforce,b=f.get,d=String,l=Object.defineProperty,v=n("".slice),y=n("".replace),h=n([].join),g=u&&!o((function(){return 8!==l((function(){}),"length",{value:8}).length})),x=String(String).split("String"),m=t.exports=function(t,r,e){"Symbol("===v(d(r),0,7)&&(r="["+y(d(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!i(t,"name")||s&&t.name!==r)&&(u?l(t,"name",{value:r,configurable:!0}):t.name=r),g&&e&&i(e,"arity")&&t.length!==e.arity&&l(t,"length",{value:e.arity});try{e&&i(e,"constructor")&&e.constructor?u&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var n=p(t);return i(n,"source")||(n.source=h(x,"string"==typeof r?r:"")),t};Function.prototype.toString=m((function(){return c(this)&&b(this).source||a(this)}),"toString")},1626:function(t,r,e){"use strict";var n="object"==typeof document&&document.all;t.exports="undefined"==typeof n&&void 0!==n?function(t){return"function"==typeof t||t===n}:function(t){return"function"==typeof t}},1787:function(t,r,e){"use strict";var n=e("861d");t.exports=function(t){return n(t)||null===t}},"1a2d":function(t,r,e){"use strict";var n=e("e330"),o=e("7b0b"),c=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return c(o(t),r)}},"1d80":function(t,r,e){"use strict";var n=e("7234"),o=TypeError;t.exports=function(t){if(n(t))throw new o("Can't call method on "+t);return t}},"23cb":function(t,r,e){"use strict";var n=e("5926"),o=Math.max,c=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):c(e,r)}},"23e7":function(t,r,e){"use strict";var n=e("da84"),o=e("06cf").f,c=e("9112"),i=e("cb2d"),u=e("6374"),s=e("e893"),a=e("94ca");t.exports=function(t,r){var e,f,p,b,d,l,v=t.target,y=t.global,h=t.stat;if(f=y?n:h?n[v]||u(v,{}):(n[v]||{}).prototype,f)for(p in r){if(d=r[p],t.dontCallGetSet?(l=o(f,p),b=l&&l.value):b=f[p],e=a(y?p:v+(h?".":"#")+p,t.forced),!e&&void 0!==b){if(typeof d==typeof b)continue;s(d,b)}(t.sham||b&&b.sham)&&c(d,"sham",!0),i(f,p,d,t)}}},"241c":function(t,r,e){"use strict";var n=e("ca84"),o=e("7839"),c=o.concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,c)}},"2ba4":function(t,r,e){"use strict";var n=e("40d5"),o=Function.prototype,c=o.apply,i=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?i.bind(c):function(){return i.apply(c,arguments)})},"2d00":function(t,r,e){"use strict";var n,o,c=e("da84"),i=e("342f"),u=c.process,s=c.Deno,a=u&&u.versions||s&&s.version,f=a&&a.v8;f&&(n=f.split("."),o=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(o=+n[1]))),t.exports=o},"342f":function(t,r,e){"use strict";t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},"3a9b":function(t,r,e){"use strict";var n=e("e330");t.exports=n({}.isPrototypeOf)},"3bbe":function(t,r,e){"use strict";var n=e("1787"),o=String,c=TypeError;t.exports=function(t){if(n(t))return t;throw new c("Can't set "+o(t)+" as a prototype")}},"40d5":function(t,r,e){"use strict";var n=e("d039");t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},"44ad":function(t,r,e){"use strict";var n=e("e330"),o=e("d039"),c=e("c6b6"),i=Object,u=n("".split);t.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(t){return"String"===c(t)?u(t,""):i(t)}:i},"485a":function(t,r,e){"use strict";var n=e("c65b"),o=e("1626"),c=e("861d"),i=TypeError;t.exports=function(t,r){var e,u;if("string"===r&&o(e=t.toString)&&!c(u=n(e,t)))return u;if(o(e=t.valueOf)&&!c(u=n(e,t)))return u;if("string"!==r&&o(e=t.toString)&&!c(u=n(e,t)))return u;throw new i("Can't convert object to primitive value")}},"4d64":function(t,r,e){"use strict";var n=e("fc6a"),o=e("23cb"),c=e("07fa"),i=function(t){return function(r,e,i){var u,s=n(r),a=c(s),f=o(i,a);if(t&&e!==e){while(a>f)if(u=s[f++],u!==u)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},"50c4":function(t,r,e){"use strict";var n=e("5926"),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},5692:function(t,r,e){"use strict";var n=e("c430"),o=e("c6cd");(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.35.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,r,e){"use strict";var n=e("d066"),o=e("e330"),c=e("241c"),i=e("7418"),u=e("825a"),s=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=c.f(u(t)),e=i.f;return e?s(r,e(t)):r}},"577e":function(t,r,e){"use strict";var n=e("f5df"),o=String;t.exports=function(t){if("Symbol"===n(t))throw new TypeError("Cannot convert a Symbol value to a string");return o(t)}},5926:function(t,r,e){"use strict";var n=e("b42e");t.exports=function(t){var r=+t;return r!==r||0===r?0:n(r)}},"59ed":function(t,r,e){"use strict";var n=e("1626"),o=e("0d51"),c=TypeError;t.exports=function(t){if(n(t))return t;throw new c(o(t)+" is not a function")}},"5c6c":function(t,r,e){"use strict";t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},"5e77":function(t,r,e){"use strict";var n=e("83ab"),o=e("1a2d"),c=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,u=o(c,"name"),s=u&&"something"===function(){}.name,a=u&&(!n||n&&i(c,"name").configurable);t.exports={EXISTS:u,PROPER:s,CONFIGURABLE:a}},6374:function(t,r,e){"use strict";var n=e("da84"),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},"69f3":function(t,r,e){"use strict";var n,o,c,i=e("cdce"),u=e("da84"),s=e("861d"),a=e("9112"),f=e("1a2d"),p=e("c6cd"),b=e("f772"),d=e("d012"),l="Object already initialized",v=u.TypeError,y=u.WeakMap,h=function(t){return c(t)?o(t):n(t,{})},g=function(t){return function(r){var e;if(!s(r)||(e=o(r)).type!==t)throw new v("Incompatible receiver, "+t+" required");return e}};if(i||p.state){var x=p.state||(p.state=new y);x.get=x.get,x.has=x.has,x.set=x.set,n=function(t,r){if(x.has(t))throw new v(l);return r.facade=t,x.set(t,r),r},o=function(t){return x.get(t)||{}},c=function(t){return x.has(t)}}else{var m=b("state");d[m]=!0,n=function(t,r){if(f(t,m))throw new v(l);return r.facade=t,a(t,m,r),r},o=function(t){return f(t,m)?t[m]:{}},c=function(t){return f(t,m)}}t.exports={set:n,get:o,has:c,enforce:h,getterFor:g}},"6f19":function(t,r,e){"use strict";var n=e("9112"),o=e("0d26"),c=e("b980"),i=Error.captureStackTrace;t.exports=function(t,r,e,u){c&&(i?i(t,r):n(t,"stack",o(e,u)))}},7156:function(t,r,e){"use strict";var n=e("1626"),o=e("861d"),c=e("d2bb");t.exports=function(t,r,e){var i,u;return c&&n(i=r.constructor)&&i!==e&&o(u=i.prototype)&&u!==e.prototype&&c(t,u),t}},7234:function(t,r,e){"use strict";t.exports=function(t){return null===t||void 0===t}},7282:function(t,r,e){"use strict";var n=e("e330"),o=e("59ed");t.exports=function(t,r,e){try{return n(o(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(c){}}},7418:function(t,r,e){"use strict";r.f=Object.getOwnPropertySymbols},7839:function(t,r,e){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,r,e){"use strict";var n=e("1d80"),o=Object;t.exports=function(t){return o(n(t))}},"825a":function(t,r,e){"use strict";var n=e("861d"),o=String,c=TypeError;t.exports=function(t){if(n(t))return t;throw new c(o(t)+" is not an object")}},"83ab":function(t,r,e){"use strict";var n=e("d039");t.exports=!n((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,r,e){"use strict";var n=e("1626");t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},8925:function(t,r,e){"use strict";var n=e("e330"),o=e("1626"),c=e("c6cd"),i=n(Function.toString);o(c.inspectSource)||(c.inspectSource=function(t){return i(t)}),t.exports=c.inspectSource},"90e3":function(t,r,e){"use strict";var n=e("e330"),o=0,c=Math.random(),i=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+c,36)}},9112:function(t,r,e){"use strict";var n=e("83ab"),o=e("9bf2"),c=e("5c6c");t.exports=n?function(t,r,e){return o.f(t,r,c(1,e))}:function(t,r,e){return t[r]=e,t}},"94ca":function(t,r,e){"use strict";var n=e("d039"),o=e("1626"),c=/#|\.prototype\./,i=function(t,r){var e=s[u(t)];return e===f||e!==a&&(o(r)?n(r):!!r)},u=i.normalize=function(t){return String(t).replace(c,".").toLowerCase()},s=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"9bf2":function(t,r,e){"use strict";var n=e("83ab"),o=e("0cfb"),c=e("aed9"),i=e("825a"),u=e("a04b"),s=TypeError,a=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p="enumerable",b="configurable",d="writable";r.f=n?c?function(t,r,e){if(i(t),r=u(r),i(e),"function"===typeof t&&"prototype"===r&&"value"in e&&d in e&&!e[d]){var n=f(t,r);n&&n[d]&&(t[r]=e.value,e={configurable:b in e?e[b]:n[b],enumerable:p in e?e[p]:n[p],writable:!1})}return a(t,r,e)}:a:function(t,r,e){if(i(t),r=u(r),i(e),o)try{return a(t,r,e)}catch(n){}if("get"in e||"set"in e)throw new s("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},a04b:function(t,r,e){"use strict";var n=e("c04e"),o=e("d9b5");t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},ab36:function(t,r,e){"use strict";var n=e("861d"),o=e("9112");t.exports=function(t,r){n(r)&&"cause"in r&&o(t,"cause",r.cause)}},aeb0:function(t,r,e){"use strict";var n=e("9bf2").f;t.exports=function(t,r,e){e in t||n(t,e,{configurable:!0,get:function(){return r[e]},set:function(t){r[e]=t}})}},aed9:function(t,r,e){"use strict";var n=e("83ab"),o=e("d039");t.exports=n&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b42e:function(t,r,e){"use strict";var n=Math.ceil,o=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?o:n)(r)}},b622:function(t,r,e){"use strict";var n=e("da84"),o=e("5692"),c=e("1a2d"),i=e("90e3"),u=e("04f8"),s=e("fdbf"),a=n.Symbol,f=o("wks"),p=s?a["for"]||a:a&&a.withoutSetter||i;t.exports=function(t){return c(f,t)||(f[t]=u&&c(a,t)?a[t]:p("Symbol."+t)),f[t]}},b980:function(t,r,e){"use strict";var n=e("d039"),o=e("5c6c");t.exports=!n((function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},c04e:function(t,r,e){"use strict";var n=e("c65b"),o=e("861d"),c=e("d9b5"),i=e("dc4a"),u=e("485a"),s=e("b622"),a=TypeError,f=s("toPrimitive");t.exports=function(t,r){if(!o(t)||c(t))return t;var e,s=i(t,f);if(s){if(void 0===r&&(r="default"),e=n(s,t,r),!o(e)||c(e))return e;throw new a("Can't convert object to primitive value")}return void 0===r&&(r="number"),u(t,r)}},c430:function(t,r,e){"use strict";t.exports=!1},c65b:function(t,r,e){"use strict";var n=e("40d5"),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},c6b6:function(t,r,e){"use strict";var n=e("e330"),o=n({}.toString),c=n("".slice);t.exports=function(t){return c(o(t),8,-1)}},c6cd:function(t,r,e){"use strict";var n=e("da84"),o=e("6374"),c="__core-js_shared__",i=n[c]||o(c,{});t.exports=i},c8ba:function(t,r){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(n){"object"===typeof window&&(e=window)}t.exports=e},ca84:function(t,r,e){"use strict";var n=e("e330"),o=e("1a2d"),c=e("fc6a"),i=e("4d64").indexOf,u=e("d012"),s=n([].push);t.exports=function(t,r){var e,n=c(t),a=0,f=[];for(e in n)!o(u,e)&&o(n,e)&&s(f,e);while(r.length>a)o(n,e=r[a++])&&(~i(f,e)||s(f,e));return f}},cb2d:function(t,r,e){"use strict";var n=e("1626"),o=e("9bf2"),c=e("13d2"),i=e("6374");t.exports=function(t,r,e,u){u||(u={});var s=u.enumerable,a=void 0!==u.name?u.name:r;if(n(e)&&c(e,a,u),u.global)s?t[r]=e:i(r,e);else{try{u.unsafe?t[r]&&(s=!0):delete t[r]}catch(f){}s?t[r]=e:o.f(t,r,{value:e,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},cc12:function(t,r,e){"use strict";var n=e("da84"),o=e("861d"),c=n.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},cdce:function(t,r,e){"use strict";var n=e("da84"),o=e("1626"),c=n.WeakMap;t.exports=o(c)&&/native code/.test(String(c))},d012:function(t,r,e){"use strict";t.exports={}},d039:function(t,r,e){"use strict";t.exports=function(t){try{return!!t()}catch(r){return!0}}},d066:function(t,r,e){"use strict";var n=e("da84"),o=e("1626"),c=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?c(n[t]):n[t]&&n[t][r]}},d1e7:function(t,r,e){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!n.call({1:2},1);r.f=c?function(t){var r=o(this,t);return!!r&&r.enumerable}:n},d2bb:function(t,r,e){"use strict";var n=e("7282"),o=e("825a"),c=e("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{t=n(Object.prototype,"__proto__","set"),t(e,[]),r=e instanceof Array}catch(i){}return function(e,n){return o(e),c(n),r?t(e,n):e.__proto__=n,e}}():void 0)},d9b5:function(t,r,e){"use strict";var n=e("d066"),o=e("1626"),c=e("3a9b"),i=e("fdbf"),u=Object;t.exports=i?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&c(r.prototype,u(t))}},d9e2:function(t,r,e){"use strict";var n=e("23e7"),o=e("da84"),c=e("2ba4"),i=e("e5cb"),u="WebAssembly",s=o[u],a=7!==new Error("e",{cause:7}).cause,f=function(t,r){var e={};e[t]=i(t,r,a),n({global:!0,constructor:!0,arity:1,forced:a},e)},p=function(t,r){if(s&&s[t]){var e={};e[t]=i(u+"."+t,r,a),n({target:u,stat:!0,constructor:!0,arity:1,forced:a},e)}};f("Error",(function(t){return function(r){return c(t,this,arguments)}})),f("EvalError",(function(t){return function(r){return c(t,this,arguments)}})),f("RangeError",(function(t){return function(r){return c(t,this,arguments)}})),f("ReferenceError",(function(t){return function(r){return c(t,this,arguments)}})),f("SyntaxError",(function(t){return function(r){return c(t,this,arguments)}})),f("TypeError",(function(t){return function(r){return c(t,this,arguments)}})),f("URIError",(function(t){return function(r){return c(t,this,arguments)}})),p("CompileError",(function(t){return function(r){return c(t,this,arguments)}})),p("LinkError",(function(t){return function(r){return c(t,this,arguments)}})),p("RuntimeError",(function(t){return function(r){return c(t,this,arguments)}}))},da84:function(t,r,e){"use strict";(function(r){var e=function(t){return t&&t.Math===Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r&&r)||e("object"==typeof this&&this)||function(){return this}()||Function("return this")()}).call(this,e("c8ba"))},dc4a:function(t,r,e){"use strict";var n=e("59ed"),o=e("7234");t.exports=function(t,r){var e=t[r];return o(e)?void 0:n(e)}},e330:function(t,r,e){"use strict";var n=e("40d5"),o=Function.prototype,c=o.call,i=n&&o.bind.bind(c,c);t.exports=n?i:function(t){return function(){return c.apply(t,arguments)}}},e391:function(t,r,e){"use strict";var n=e("577e");t.exports=function(t,r){return void 0===t?arguments.length<2?"":r:n(t)}},e5cb:function(t,r,e){"use strict";var n=e("d066"),o=e("1a2d"),c=e("9112"),i=e("3a9b"),u=e("d2bb"),s=e("e893"),a=e("aeb0"),f=e("7156"),p=e("e391"),b=e("ab36"),d=e("6f19"),l=e("83ab"),v=e("c430");t.exports=function(t,r,e,y){var h="stackTraceLimit",g=y?2:1,x=t.split("."),m=x[x.length-1],w=n.apply(null,x);if(w){var j=w.prototype;if(!v&&o(j,"cause")&&delete j.cause,!e)return w;var O=n("Error"),S=r((function(t,r){var e=p(y?r:t,void 0),n=y?new w(t):new w;return void 0!==e&&c(n,"message",e),d(n,S,n.stack,2),this&&i(j,this)&&f(n,this,S),arguments.length>g&&b(n,arguments[g]),n}));if(S.prototype=j,"Error"!==m?u?u(S,O):s(S,O,{name:!0}):l&&h in w&&(a(S,w,h),a(S,w,"prepareStackTrace")),s(S,w),!v)try{j.name!==m&&c(j,"name",m),j.constructor=S}catch(E){}return S}}},e74d:function(t,r,e){"use strict";e.r(r),e.d(r,"deepClone",(function(){return n}));e("d9e2");function n(t){if(!t&&"object"!==typeof t)throw new Error("error arguments","deepClone");const r=t.constructor===Array?[]:{};return Object.keys(t).forEach(e=>{t[e]&&"object"===typeof t[e]?r[e]=n(t[e]):r[e]=t[e]}),r}},e893:function(t,r,e){"use strict";var n=e("1a2d"),o=e("56ef"),c=e("06cf"),i=e("9bf2");t.exports=function(t,r,e){for(var u=o(r),s=i.f,a=c.f,f=0;f<u.length;f++){var p=u[f];n(t,p)||e&&n(e,p)||s(t,p,a(r,p))}}},f5df:function(t,r,e){"use strict";var n=e("00ee"),o=e("1626"),c=e("c6b6"),i=e("b622"),u=i("toStringTag"),s=Object,a="Arguments"===c(function(){return arguments}()),f=function(t,r){try{return t[r]}catch(e){}};t.exports=n?c:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=f(r=s(t),u))?e:a?c(r):"Object"===(n=c(r))&&o(r.callee)?"Arguments":n}},f772:function(t,r,e){"use strict";var n=e("5692"),o=e("90e3"),c=n("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},fc6a:function(t,r,e){"use strict";var n=e("44ad"),o=e("1d80");t.exports=function(t){return n(o(t))}},fdbf:function(t,r,e){"use strict";var n=e("04f8");t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}})["default"]}));