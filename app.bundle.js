(()=>{var t={9662:(t,r,e)=>{var n=e(614),o=e(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},6077:(t,r,e)=>{var n=e(614),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},1223:(t,r,e)=>{var n=e(5112),o=e(30),i=e(3070).f,u=n("unscopables"),a=Array.prototype;null==a[u]&&i(a,u,{configurable:!0,value:o(null)}),t.exports=function(t){a[u][t]=!0}},9670:(t,r,e)=>{var n=e(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},1318:(t,r,e)=>{var n=e(5656),o=e(1400),i=e(6244),u=function(t){return function(r,e,u){var a,c=n(r),s=i(c),f=o(u,s);if(t&&e!=e){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},2092:(t,r,e)=>{var n=e(9974),o=e(1702),i=e(8361),u=e(7908),a=e(6244),c=e(5417),s=o([].push),f=function(t){var r=1==t,e=2==t,o=3==t,f=4==t,l=6==t,p=7==t,v=5==t||l;return function(y,g,b,h){for(var m,d,S=u(y),x=i(S),w=n(g,b),O=a(x),j=0,P=h||c,E=r?P(y,O):e||p?P(y,0):void 0;O>j;j++)if((v||j in x)&&(d=w(m=x[j],j,S),t))if(r)E[j]=d;else if(d)switch(t){case 3:return!0;case 5:return m;case 6:return j;case 2:s(E,m)}else switch(t){case 4:return!1;case 7:s(E,m)}return l?-1:o||f?f:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},1589:(t,r,e)=>{var n=e(1400),o=e(6244),i=e(6135),u=Array,a=Math.max;t.exports=function(t,r,e){for(var c=o(t),s=n(r,c),f=n(void 0===e?c:e,c),l=u(a(f-s,0)),p=0;s<f;s++,p++)i(l,p,t[s]);return l.length=p,l}},206:(t,r,e)=>{var n=e(1702);t.exports=n([].slice)},7475:(t,r,e)=>{var n=e(3157),o=e(4411),i=e(111),u=e(5112)("species"),a=Array;t.exports=function(t){var r;return n(t)&&(r=t.constructor,(o(r)&&(r===a||n(r.prototype))||i(r)&&null===(r=r[u]))&&(r=void 0)),void 0===r?a:r}},5417:(t,r,e)=>{var n=e(7475);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},4326:(t,r,e)=>{var n=e(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,r,e)=>{var n=e(1694),o=e(614),i=e(4326),u=e(5112)("toStringTag"),a=Object,c="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=a(t),u))?e:c?i(r):"Object"==(n=i(r))&&o(r.callee)?"Arguments":n}},9920:(t,r,e)=>{var n=e(2597),o=e(3887),i=e(1236),u=e(3070);t.exports=function(t,r,e){for(var a=o(r),c=u.f,s=i.f,f=0;f<a.length;f++){var l=a[f];n(t,l)||e&&n(e,l)||c(t,l,s(r,l))}}},8544:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},6178:t=>{t.exports=function(t,r){return{value:t,done:r}}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6135:(t,r,e)=>{"use strict";var n=e(4948),o=e(3070),i=e(9114);t.exports=function(t,r,e){var u=n(r);u in t?o.f(t,u,i(0,e)):t[u]=e}},8709:(t,r,e)=>{"use strict";var n=e(9670),o=e(2140),i=TypeError;t.exports=function(t){if(n(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw i("Incorrect hint");return o(this,t)}},7045:(t,r,e)=>{var n=e(6339),o=e(3070);t.exports=function(t,r,e){return e.get&&n(e.get,r,{getter:!0}),e.set&&n(e.set,r,{setter:!0}),o.f(t,r,e)}},8052:(t,r,e)=>{var n=e(614),o=e(3070),i=e(6339),u=e(3072);t.exports=function(t,r,e,a){a||(a={});var c=a.enumerable,s=void 0!==a.name?a.name:r;if(n(e)&&i(e,s,a),a.global)c?t[r]=e:u(r,e);else{try{a.unsafe?t[r]&&(c=!0):delete t[r]}catch(t){}c?t[r]=e:o.f(t,r,{value:e,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:(t,r,e)=>{var n=e(7854),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:t=>{var r="object"==typeof document&&document.all,e=void 0===r&&void 0!==r;t.exports={all:r,IS_HTMLDDA:e}},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,r,e)=>{var n=e(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},9363:t=>{t.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},8113:t=>{t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:(t,r,e)=>{var n,o,i=e(7854),u=e(8113),a=i.process,c=i.Deno,s=a&&a.versions||c&&c.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),u=e(8052),a=e(3072),c=e(9920),s=e(4705);t.exports=function(t,r){var e,f,l,p,v,y=t.target,g=t.global,b=t.stat;if(e=g?n:b?n[y]||a(y,{}):(n[y]||{}).prototype)for(f in r){if(p=r[f],l=t.dontCallGetSet?(v=o(e,f))&&v.value:e[f],!s(g?f:y+(b?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.apply,u=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?u.bind(i):function(){return u.apply(i,arguments)})},9974:(t,r,e)=>{var n=e(1470),o=e(9662),i=e(4374),u=n(n.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?u(t,r):function(){return t.apply(r,arguments)}}},4374:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},7065:(t,r,e)=>{"use strict";var n=e(1702),o=e(9662),i=e(111),u=e(2597),a=e(206),c=e(4374),s=Function,f=n([].concat),l=n([].join),p={},v=function(t,r,e){if(!u(p,r)){for(var n=[],o=0;o<r;o++)n[o]="a["+o+"]";p[r]=s("C,a","return new C("+l(n,",")+")")}return p[r](t,e)};t.exports=c?s.bind:function(t){var r=o(this),e=r.prototype,n=a(arguments,1),u=function(){var e=f(n,a(arguments));return this instanceof u?v(r,e.length,e):r.apply(t,e)};return i(e)&&(u.prototype=e),u}},6916:(t,r,e)=>{var n=e(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,r,e)=>{var n=e(9781),o=e(2597),i=Function.prototype,u=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,s=a&&(!n||n&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:s}},5668:(t,r,e)=>{var n=e(1702),o=e(9662);t.exports=function(t,r,e){try{return n(o(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}}},1470:(t,r,e)=>{var n=e(4326),o=e(1702);t.exports=function(t){if("Function"===n(t))return o(t)}},1702:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.call,u=n&&o.bind.bind(i,i);t.exports=n?u:function(t){return function(){return i.apply(t,arguments)}}},5005:(t,r,e)=>{var n=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t]):n[t]&&n[t][r]}},8044:(t,r,e)=>{var n=e(1702),o=e(3157),i=e(614),u=e(4326),a=e(1340),c=n([].push);t.exports=function(t){if(i(t))return t;if(o(t)){for(var r=t.length,e=[],n=0;n<r;n++){var s=t[n];"string"==typeof s?c(e,s):"number"!=typeof s&&"Number"!=u(s)&&"String"!=u(s)||c(e,a(s))}var f=e.length,l=!0;return function(t,r){if(l)return l=!1,r;if(o(this))return r;for(var n=0;n<f;n++)if(e[n]===t)return r}}}},8173:(t,r,e)=>{var n=e(9662),o=e(8554);t.exports=function(t,r){var e=t[r];return o(e)?void 0:n(e)}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:(t,r,e)=>{var n=e(1702),o=e(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},3501:t=>{t.exports={}},490:(t,r,e)=>{var n=e(5005);t.exports=n("document","documentElement")},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,r,e)=>{var n=e(1702),o=e(7293),i=e(4326),u=Object,a=n("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):u(t)}:u},9587:(t,r,e)=>{var n=e(614),o=e(111),i=e(7674);t.exports=function(t,r,e){var u,a;return i&&n(u=r.constructor)&&u!==e&&o(a=u.prototype)&&a!==e.prototype&&i(t,a),t}},2788:(t,r,e)=>{var n=e(1702),o=e(614),i=e(5465),u=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:(t,r,e)=>{var n,o,i,u=e(4811),a=e(7854),c=e(111),s=e(8880),f=e(2597),l=e(5465),p=e(6200),v=e(3501),y="Object already initialized",g=a.TypeError,b=a.WeakMap;if(u||l.state){var h=l.state||(l.state=new b);h.get=h.get,h.has=h.has,h.set=h.set,n=function(t,r){if(h.has(t))throw g(y);return r.facade=t,h.set(t,r),r},o=function(t){return h.get(t)||{}},i=function(t){return h.has(t)}}else{var m=p("state");v[m]=!0,n=function(t,r){if(f(t,m))throw g(y);return r.facade=t,s(t,m,r),r},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!c(r)||(e=o(r)).type!==t)throw g("Incompatible receiver, "+t+" required");return e}}}},3157:(t,r,e)=>{var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:(t,r,e)=>{var n=e(4154),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4411:(t,r,e)=>{var n=e(1702),o=e(7293),i=e(614),u=e(648),a=e(5005),c=e(2788),s=function(){},f=[],l=a("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),y=!p.exec(s),g=function(t){if(!i(t))return!1;try{return l(s,f,t),!0}catch(t){return!1}},b=function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(p,c(t))}catch(t){return!0}};b.sham=!0,t.exports=!l||o((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?b:g},4705:(t,r,e)=>{var n=e(7293),o=e(614),i=/#|\.prototype\./,u=function(t,r){var e=c[a(t)];return e==f||e!=s&&(o(r)?n(r):!!r)},a=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},s=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},8554:t=>{t.exports=function(t){return null==t}},111:(t,r,e)=>{var n=e(614),o=e(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===i}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,r,e)=>{var n=e(5005),o=e(614),i=e(7976),u=e(3307),a=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,a(t))}},3061:(t,r,e)=>{"use strict";var n=e(3383).IteratorPrototype,o=e(30),i=e(9114),u=e(8003),a=e(7497),c=function(){return this};t.exports=function(t,r,e,s){var f=r+" Iterator";return t.prototype=o(n,{next:i(+!s,e)}),u(t,f,!1,!0),a[f]=c,t}},1656:(t,r,e)=>{"use strict";var n=e(2109),o=e(6916),i=e(1913),u=e(6530),a=e(614),c=e(3061),s=e(9518),f=e(7674),l=e(8003),p=e(8880),v=e(8052),y=e(5112),g=e(7497),b=e(3383),h=u.PROPER,m=u.CONFIGURABLE,d=b.IteratorPrototype,S=b.BUGGY_SAFARI_ITERATORS,x=y("iterator"),w="keys",O="values",j="entries",P=function(){return this};t.exports=function(t,r,e,u,y,b,E){c(e,r,u);var I,T,L,A=function(t){if(t===y&&k)return k;if(!S&&t in _)return _[t];switch(t){case w:case O:case j:return function(){return new e(this,t)}}return function(){return new e(this)}},C=r+" Iterator",F=!1,_=t.prototype,N=_[x]||_["@@iterator"]||y&&_[y],k=!S&&N||A(y),M="Array"==r&&_.entries||N;if(M&&(I=s(M.call(new t)))!==Object.prototype&&I.next&&(i||s(I)===d||(f?f(I,d):a(I[x])||v(I,x,P)),l(I,C,!0,!0),i&&(g[C]=P)),h&&y==O&&N&&N.name!==O&&(!i&&m?p(_,"name",O):(F=!0,k=function(){return o(N,this)})),y)if(T={values:A(O),keys:b?k:A(w),entries:A(j)},E)for(L in T)(S||F||!(L in _))&&v(_,L,T[L]);else n({target:r,proto:!0,forced:S||F},T);return i&&!E||_[x]===k||v(_,x,k,{name:y}),g[r]=k,T}},3383:(t,r,e)=>{"use strict";var n,o,i,u=e(7293),a=e(614),c=e(111),s=e(30),f=e(9518),l=e(8052),p=e(5112),v=e(1913),y=p("iterator"),g=!1;[].keys&&("next"in(i=[].keys())?(o=f(f(i)))!==Object.prototype&&(n=o):g=!0),!c(n)||u((function(){var t={};return n[y].call(t)!==t}))?n={}:v&&(n=s(n)),a(n[y])||l(n,y,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:g}},7497:t=>{t.exports={}},6244:(t,r,e)=>{var n=e(7466);t.exports=function(t){return n(t.length)}},6339:(t,r,e)=>{var n=e(1702),o=e(7293),i=e(614),u=e(2597),a=e(9781),c=e(6530).CONFIGURABLE,s=e(2788),f=e(9909),l=f.enforce,p=f.get,v=String,y=Object.defineProperty,g=n("".slice),b=n("".replace),h=n([].join),m=a&&!o((function(){return 8!==y((function(){}),"length",{value:8}).length})),d=String(String).split("String"),S=t.exports=function(t,r,e){"Symbol("===g(v(r),0,7)&&(r="["+b(v(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!u(t,"name")||c&&t.name!==r)&&(a?y(t,"name",{value:r,configurable:!0}):t.name=r),m&&e&&u(e,"arity")&&t.length!==e.arity&&y(t,"length",{value:e.arity});try{e&&u(e,"constructor")&&e.constructor?a&&y(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=l(t);return u(n,"source")||(n.source=h(d,"string"==typeof r?r:"")),t};Function.prototype.toString=S((function(){return i(this)&&p(this).source||s(this)}),"toString")},4758:t=>{var r=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?e:r)(n)}},30:(t,r,e)=>{var n,o=e(9670),i=e(6048),u=e(748),a=e(3501),c=e(490),s=e(317),f=e(6200),l="prototype",p="script",v=f("IE_PROTO"),y=function(){},g=function(t){return"<"+p+">"+t+"</"+p+">"},b=function(t){t.write(g("")),t.close();var r=t.parentWindow.Object;return t=null,r},h=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,r,e;h="undefined"!=typeof document?document.domain&&n?b(n):(r=s("iframe"),e="java"+p+":",r.style.display="none",c.appendChild(r),r.src=String(e),(t=r.contentWindow.document).open(),t.write(g("document.F=Object")),t.close(),t.F):b(n);for(var o=u.length;o--;)delete h[l][u[o]];return h()};a[v]=!0,t.exports=Object.create||function(t,r){var e;return null!==t?(y[l]=o(t),e=new y,y[l]=null,e[v]=t):e=h(),void 0===r?e:i.f(e,r)}},6048:(t,r,e)=>{var n=e(9781),o=e(3353),i=e(3070),u=e(9670),a=e(5656),c=e(1956);r.f=n&&!o?Object.defineProperties:function(t,r){u(t);for(var e,n=a(r),o=c(r),s=o.length,f=0;s>f;)i.f(t,e=o[f++],n[e]);return t}},3070:(t,r,e)=>{var n=e(9781),o=e(4664),i=e(3353),u=e(9670),a=e(4948),c=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";r.f=n?i?function(t,r,e){if(u(t),r=a(r),u(e),"function"==typeof t&&"prototype"===r&&"value"in e&&v in e&&!e[v]){var n=f(t,r);n&&n[v]&&(t[r]=e.value,e={configurable:p in e?e[p]:n[p],enumerable:l in e?e[l]:n[l],writable:!1})}return s(t,r,e)}:s:function(t,r,e){if(u(t),r=a(r),u(e),o)try{return s(t,r,e)}catch(t){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(6916),i=e(5296),u=e(9114),a=e(5656),c=e(4948),s=e(2597),f=e(4664),l=Object.getOwnPropertyDescriptor;r.f=n?l:function(t,r){if(t=a(t),r=c(r),f)try{return l(t,r)}catch(t){}if(s(t,r))return u(!o(i.f,t,r),t[r])}},1156:(t,r,e)=>{var n=e(4326),o=e(5656),i=e(8006).f,u=e(1589),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"Window"==n(t)?function(t){try{return i(t)}catch(t){return u(a)}}(t):i(o(t))}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},9518:(t,r,e)=>{var n=e(2597),o=e(614),i=e(7908),u=e(6200),a=e(8544),c=u("IE_PROTO"),s=Object,f=s.prototype;t.exports=a?s.getPrototypeOf:function(t){var r=i(t);if(n(r,c))return r[c];var e=r.constructor;return o(e)&&r instanceof e?e.prototype:r instanceof s?f:null}},7976:(t,r,e)=>{var n=e(1702);t.exports=n({}.isPrototypeOf)},6324:(t,r,e)=>{var n=e(1702),o=e(2597),i=e(5656),u=e(1318).indexOf,a=e(3501),c=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(a,e)&&o(n,e)&&c(f,e);for(;r.length>s;)o(n,e=r[s++])&&(~u(f,e)||c(f,e));return f}},1956:(t,r,e)=>{var n=e(6324),o=e(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},7674:(t,r,e)=>{var n=e(5668),o=e(9670),i=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=n(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return o(e),i(n),r?t(e,n):e.__proto__=n,e}}():void 0)},288:(t,r,e)=>{"use strict";var n=e(1694),o=e(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,r,e)=>{var n=e(6916),o=e(614),i=e(111),u=TypeError;t.exports=function(t,r){var e,a;if("string"===r&&o(e=t.toString)&&!i(a=n(e,t)))return a;if(o(e=t.valueOf)&&!i(a=n(e,t)))return a;if("string"!==r&&o(e=t.toString)&&!i(a=n(e,t)))return a;throw u("Can't convert object to primitive value")}},3887:(t,r,e)=>{var n=e(5005),o=e(1702),i=e(8006),u=e(5181),a=e(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(a(t)),e=u.f;return e?c(r,e(t)):r}},857:(t,r,e)=>{var n=e(7854);t.exports=n},4488:(t,r,e)=>{var n=e(8554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},7152:(t,r,e)=>{"use strict";var n,o=e(7854),i=e(2104),u=e(614),a=e(9363),c=e(8113),s=e(206),f=e(8053),l=o.Function,p=/MSIE .\./.test(c)||a&&((n=o.Bun.version.split(".")).length<3||0==n[0]&&(n[1]<3||3==n[1]&&0==n[2]));t.exports=function(t,r){var e=r?2:1;return p?function(n,o){var a=f(arguments.length,1)>e,c=u(n)?n:l(n),p=a?s(arguments,e):[],v=a?function(){i(c,this,p)}:c;return r?t(v,o):t(v)}:t}},8003:(t,r,e)=>{var n=e(3070).f,o=e(2597),i=e(5112)("toStringTag");t.exports=function(t,r,e){t&&!e&&(t=t.prototype),t&&!o(t,i)&&n(t,i,{configurable:!0,value:r})}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3072),i="__core-js_shared__",u=n[i]||o(i,{});t.exports=u},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.29.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"})},8710:(t,r,e)=>{var n=e(1702),o=e(9303),i=e(1340),u=e(4488),a=n("".charAt),c=n("".charCodeAt),s=n("".slice),f=function(t){return function(r,e){var n,f,l=i(u(r)),p=o(e),v=l.length;return p<0||p>=v?t?"":void 0:(n=c(l,p))<55296||n>56319||p+1===v||(f=c(l,p+1))<56320||f>57343?t?a(l,p):n:t?s(l,p,p+2):f-56320+(n-55296<<10)+65536}};t.exports={codeAt:f(!1),charAt:f(!0)}},3111:(t,r,e)=>{var n=e(1702),o=e(4488),i=e(1340),u=e(1361),a=n("".replace),c=RegExp("^["+u+"]+"),s=RegExp("(^|[^"+u+"])["+u+"]+$"),f=function(t){return function(r){var e=i(o(r));return 1&t&&(e=a(e,c,"")),2&t&&(e=a(e,s,"$1")),e}};t.exports={start:f(1),end:f(2),trim:f(3)}},6293:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},6532:(t,r,e)=>{var n=e(6916),o=e(5005),i=e(5112),u=e(8052);t.exports=function(){var t=o("Symbol"),r=t&&t.prototype,e=r&&r.valueOf,a=i("toPrimitive");r&&!r[a]&&u(r,a,(function(t){return n(e,this)}),{arity:1})}},2015:(t,r,e)=>{var n=e(6293);t.exports=n&&!!Symbol.for&&!!Symbol.keyFor},863:(t,r,e)=>{var n=e(1702);t.exports=n(1..valueOf)},1400:(t,r,e)=>{var n=e(9303),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9303:(t,r,e)=>{var n=e(4758);t.exports=function(t){var r=+t;return r!=r||0===r?0:n(r)}},7466:(t,r,e)=>{var n=e(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:(t,r,e)=>{var n=e(6916),o=e(111),i=e(2190),u=e(8173),a=e(2140),c=e(5112),s=TypeError,f=c("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var e,c=u(t,f);if(c){if(void 0===r&&(r="default"),e=n(c,t,r),!o(e)||i(e))return e;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),a(t,r)}},4948:(t,r,e)=>{var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},1694:(t,r,e)=>{var n={};n[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,r,e)=>{var n=e(648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:t=>{var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:(t,r,e)=>{var n=e(1702),o=0,i=Math.random(),u=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:(t,r,e)=>{var n=e(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,r,e)=>{var n=e(9781),o=e(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:t=>{var r=TypeError;t.exports=function(t,e){if(t<e)throw r("Not enough arguments");return t}},4811:(t,r,e)=>{var n=e(7854),o=e(614),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},6800:(t,r,e)=>{var n=e(857),o=e(2597),i=e(6061),u=e(3070).f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});o(r,t)||u(r,t,{value:i.f(t)})}},6061:(t,r,e)=>{var n=e(5112);r.f=n},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(2597),u=e(9711),a=e(6293),c=e(3307),s=n.Symbol,f=o("wks"),l=c?s.for||s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(f[t]=a&&i(s,t)?s[t]:l("Symbol."+t)),f[t]}},1361:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},6992:(t,r,e)=>{"use strict";var n=e(5656),o=e(1223),i=e(7497),u=e(9909),a=e(3070).f,c=e(1656),s=e(6178),f=e(1913),l=e(9781),p="Array Iterator",v=u.set,y=u.getterFor(p);t.exports=c(Array,"Array",(function(t,r){v(this,{type:p,target:n(t),index:0,kind:r})}),(function(){var t=y(this),r=t.target,e=t.kind,n=t.index++;return!r||n>=r.length?(t.target=void 0,s(void 0,!0)):s("keys"==e?n:"values"==e?r[n]:[n,r[n]],!1)}),"values");var g=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!f&&l&&"values"!==g.name)try{a(g,"name",{value:"values"})}catch(t){}},6078:(t,r,e)=>{var n=e(2597),o=e(8052),i=e(8709),u=e(5112)("toPrimitive"),a=Date.prototype;n(a,u)||o(a,u,i)},4812:(t,r,e)=>{var n=e(2109),o=e(7065);n({target:"Function",proto:!0,forced:Function.bind!==o},{bind:o})},8862:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(2104),u=e(6916),a=e(1702),c=e(7293),s=e(614),f=e(2190),l=e(206),p=e(8044),v=e(6293),y=String,g=o("JSON","stringify"),b=a(/./.exec),h=a("".charAt),m=a("".charCodeAt),d=a("".replace),S=a(1..toString),x=/[\uD800-\uDFFF]/g,w=/^[\uD800-\uDBFF]$/,O=/^[\uDC00-\uDFFF]$/,j=!v||c((function(){var t=o("Symbol")();return"[null]"!=g([t])||"{}"!=g({a:t})||"{}"!=g(Object(t))})),P=c((function(){return'"\\udf06\\ud834"'!==g("\udf06\ud834")||'"\\udead"'!==g("\udead")})),E=function(t,r){var e=l(arguments),n=p(r);if(s(n)||void 0!==t&&!f(t))return e[1]=function(t,r){if(s(n)&&(r=u(n,this,y(t),r)),!f(r))return r},i(g,null,e)},I=function(t,r,e){var n=h(e,r-1),o=h(e,r+1);return b(w,t)&&!b(O,o)||b(O,t)&&!b(w,n)?"\\u"+S(m(t,0),16):t};g&&n({target:"JSON",stat:!0,arity:3,forced:j||P},{stringify:function(t,r,e){var n=l(arguments),o=i(j?E:g,null,n);return P&&"string"==typeof o?d(o,x,I):o}})},9653:(t,r,e)=>{"use strict";var n=e(2109),o=e(1913),i=e(9781),u=e(7854),a=e(857),c=e(1702),s=e(4705),f=e(2597),l=e(9587),p=e(7976),v=e(2190),y=e(7593),g=e(7293),b=e(8006).f,h=e(1236).f,m=e(3070).f,d=e(863),S=e(3111).trim,x="Number",w=u[x],O=a[x],j=w.prototype,P=u.TypeError,E=c("".slice),I=c("".charCodeAt),T=function(t){var r=y(t,"number");return"bigint"==typeof r?r:L(r)},L=function(t){var r,e,n,o,i,u,a,c,s=y(t,"number");if(v(s))throw P("Cannot convert a Symbol value to a number");if("string"==typeof s&&s.length>2)if(s=S(s),43===(r=I(s,0))||45===r){if(88===(e=I(s,2))||120===e)return NaN}else if(48===r){switch(I(s,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(u=(i=E(s,2)).length,a=0;a<u;a++)if((c=I(i,a))<48||c>o)return NaN;return parseInt(i,n)}return+s},A=s(x,!w(" 0o1")||!w("0b1")||w("+0x1")),C=function(t){return p(j,t)&&g((function(){d(t)}))},F=function(t){var r=arguments.length<1?0:w(T(t));return C(this)?l(Object(r),this,F):r};F.prototype=j,A&&!o&&(j.constructor=F),n({global:!0,constructor:!0,wrap:!0,forced:A},{Number:F});var _=function(t,r){for(var e,n=i?b(r):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),o=0;n.length>o;o++)f(r,e=n[o])&&!f(t,e)&&m(t,e,h(r,e))};o&&O&&_(a[x],O),(A||o)&&_(a[x],w)},9070:(t,r,e)=>{var n=e(2109),o=e(9781),i=e(3070).f;n({target:"Object",stat:!0,forced:Object.defineProperty!==i,sham:!o},{defineProperty:i})},9660:(t,r,e)=>{var n=e(2109),o=e(6293),i=e(7293),u=e(5181),a=e(7908);n({target:"Object",stat:!0,forced:!o||i((function(){u.f(1)}))},{getOwnPropertySymbols:function(t){var r=u.f;return r?r(a(t)):[]}})},1539:(t,r,e)=>{var n=e(1694),o=e(8052),i=e(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},8783:(t,r,e)=>{"use strict";var n=e(8710).charAt,o=e(1340),i=e(9909),u=e(1656),a=e(6178),c="String Iterator",s=i.set,f=i.getterFor(c);u(String,"String",(function(t){s(this,{type:c,string:o(t),index:0})}),(function(){var t,r=f(this),e=r.string,o=r.index;return o>=e.length?a(void 0,!0):(t=n(e,o),r.index+=t.length,a(t,!1))}))},4032:(t,r,e)=>{"use strict";var n=e(2109),o=e(7854),i=e(6916),u=e(1702),a=e(1913),c=e(9781),s=e(6293),f=e(7293),l=e(2597),p=e(7976),v=e(9670),y=e(5656),g=e(4948),b=e(1340),h=e(9114),m=e(30),d=e(1956),S=e(8006),x=e(1156),w=e(5181),O=e(1236),j=e(3070),P=e(6048),E=e(5296),I=e(8052),T=e(7045),L=e(2309),A=e(6200),C=e(3501),F=e(9711),_=e(5112),N=e(6061),k=e(6800),M=e(6532),R=e(8003),D=e(9909),G=e(2092).forEach,q=A("hidden"),B="Symbol",V="prototype",z=D.set,U=D.getterFor(B),H=Object[V],$=o.Symbol,W=$&&$[V],Y=o.TypeError,X=o.QObject,J=O.f,K=j.f,Q=x.f,Z=E.f,tt=u([].push),rt=L("symbols"),et=L("op-symbols"),nt=L("wks"),ot=!X||!X[V]||!X[V].findChild,it=c&&f((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=J(H,r);n&&delete H[r],K(t,r,e),n&&t!==H&&K(H,r,n)}:K,ut=function(t,r){var e=rt[t]=m(W);return z(e,{type:B,tag:t,description:r}),c||(e.description=r),e},at=function(t,r,e){t===H&&at(et,r,e),v(t);var n=g(r);return v(e),l(rt,n)?(e.enumerable?(l(t,q)&&t[q][n]&&(t[q][n]=!1),e=m(e,{enumerable:h(0,!1)})):(l(t,q)||K(t,q,h(1,{})),t[q][n]=!0),it(t,n,e)):K(t,n,e)},ct=function(t,r){v(t);var e=y(r),n=d(e).concat(pt(e));return G(n,(function(r){c&&!i(st,e,r)||at(t,r,e[r])})),t},st=function(t){var r=g(t),e=i(Z,this,r);return!(this===H&&l(rt,r)&&!l(et,r))&&(!(e||!l(this,r)||!l(rt,r)||l(this,q)&&this[q][r])||e)},ft=function(t,r){var e=y(t),n=g(r);if(e!==H||!l(rt,n)||l(et,n)){var o=J(e,n);return!o||!l(rt,n)||l(e,q)&&e[q][n]||(o.enumerable=!0),o}},lt=function(t){var r=Q(y(t)),e=[];return G(r,(function(t){l(rt,t)||l(C,t)||tt(e,t)})),e},pt=function(t){var r=t===H,e=Q(r?et:y(t)),n=[];return G(e,(function(t){!l(rt,t)||r&&!l(H,t)||tt(n,rt[t])})),n};s||(I(W=($=function(){if(p(W,this))throw Y("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,r=F(t),e=function(t){this===H&&i(e,et,t),l(this,q)&&l(this[q],r)&&(this[q][r]=!1),it(this,r,h(1,t))};return c&&ot&&it(H,r,{configurable:!0,set:e}),ut(r,t)})[V],"toString",(function(){return U(this).tag})),I($,"withoutSetter",(function(t){return ut(F(t),t)})),E.f=st,j.f=at,P.f=ct,O.f=ft,S.f=x.f=lt,w.f=pt,N.f=function(t){return ut(_(t),t)},c&&(T(W,"description",{configurable:!0,get:function(){return U(this).description}}),a||I(H,"propertyIsEnumerable",st,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!s,sham:!s},{Symbol:$}),G(d(nt),(function(t){k(t)})),n({target:B,stat:!0,forced:!s},{useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:function(t,r){return void 0===r?m(t):ct(m(t),r)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:lt}),M(),R($,B),C[q]=!0},1817:(t,r,e)=>{"use strict";var n=e(2109),o=e(9781),i=e(7854),u=e(1702),a=e(2597),c=e(614),s=e(7976),f=e(1340),l=e(7045),p=e(9920),v=i.Symbol,y=v&&v.prototype;if(o&&c(v)&&(!("description"in y)||void 0!==v().description)){var g={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),r=s(y,this)?new v(t):void 0===t?v():v(t);return""===t&&(g[r]=!0),r};p(b,v),b.prototype=y,y.constructor=b;var h="Symbol(test)"==String(v("test")),m=u(y.valueOf),d=u(y.toString),S=/^Symbol\((.*)\)[^)]+$/,x=u("".replace),w=u("".slice);l(y,"description",{configurable:!0,get:function(){var t=m(this);if(a(g,t))return"";var r=d(t),e=h?w(r,7,-1):x(r,S,"$1");return""===e?void 0:e}}),n({global:!0,constructor:!0,forced:!0},{Symbol:b})}},763:(t,r,e)=>{var n=e(2109),o=e(5005),i=e(2597),u=e(1340),a=e(2309),c=e(2015),s=a("string-to-symbol-registry"),f=a("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!c},{for:function(t){var r=u(t);if(i(s,r))return s[r];var e=o("Symbol")(r);return s[r]=e,f[e]=r,e}})},2165:(t,r,e)=>{e(6800)("iterator")},2526:(t,r,e)=>{e(4032),e(763),e(6620),e(8862),e(9660)},6620:(t,r,e)=>{var n=e(2109),o=e(2597),i=e(2190),u=e(6330),a=e(2309),c=e(2015),s=a("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!c},{keyFor:function(t){if(!i(t))throw TypeError(u(t)+" is not a symbol");if(o(s,t))return s[t]}})},6649:(t,r,e)=>{var n=e(6800),o=e(6532);n("toPrimitive"),o()},3948:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(8509),u=e(6992),a=e(8880),c=e(5112),s=c("iterator"),f=c("toStringTag"),l=u.values,p=function(t,r){if(t){if(t[s]!==l)try{a(t,s,l)}catch(r){t[s]=l}if(t[f]||a(t,f,r),o[r])for(var e in u)if(t[e]!==u[e])try{a(t,e,u[e])}catch(r){t[e]=u[e]}}};for(var v in o)p(n[v]&&n[v].prototype,v);p(i,"DOMTokenList")},6815:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(7152)(o.setInterval,!0);n({global:!0,bind:!0,forced:o.setInterval!==i},{setInterval:i})},8417:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(7152)(o.setTimeout,!0);n({global:!0,bind:!0,forced:o.setTimeout!==i},{setTimeout:i})},2564:(t,r,e)=>{e(6815),e(8417)}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(r,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,(void 0,i=function(r,e){if("object"!==t(r)||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==n(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}e(4812),e(2564),e(6649),e(6078),e(2526),e(1817),e(1539),e(9653),e(9070),e(2165),e(6992),e(8783),e(3948),new(function(){function t(r,e){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),"string"==typeof e&&(e=document.querySelector(e)),this.scoreLogic=r,this._elem=e,this.onPlayerClick=this.onPlayerClick.bind(this),this._elem.addEventListener("click",this.onPlayerClick),this.interval=0}var e,n;return e=t,(n=[{key:"init",value:function(){var t=this;this.imgMove(),this.interval=setInterval((function(){t._elem.querySelector(".goblin")&&t.clearImg(),t.imgMove(),t.scoreLogic.winCount>=5&&(clearInterval(t.interval),t.clearImg()),t.scoreLogic.loseCount>=5&&(clearInterval(t.interval),t.clearImg())}),1e3)}},{key:"imgMove",value:function(){var t=this._elem.querySelectorAll(".square"),r=document.createElement("img"),e=Math.floor(Math.random()*t.length);r.src="./image/goblin.png",r.classList.add("goblin"),t[e].insertBefore(r,null)}},{key:"clearImg",value:function(){var t=this._elem.querySelector(".goblin");t.parentNode.removeChild(t)}},{key:"onPlayerClick",value:function(t){this.scoreLogic.stopGame()&&("goblin"===t.target.className?(this.scoreLogic.winMove(),this.clearImg()):"square"===t.target.className&&this.scoreLogic.loseMove())}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())(new(function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),"string"==typeof r&&(r=document.querySelector(r)),this._elem=r,this.winCount=0,this.loseCount=0}var r,e;return r=t,(e=[{key:"stopGame",value:function(){return!(this.winCount>=5||this.loseCount>=5)}},{key:"loseMove",value:function(){this.stopGame()&&(this.loseCount+=1,this._elem.querySelector(".score-lose").textContent=this.loseCount,5===this.loseCount&&this.printResult("lose"))}},{key:"winMove",value:function(){this.stopGame()&&(this.winCount+=1,this._elem.querySelector(".score-win").textContent=this.winCount,5===this.winCount&&this.printResult("win"))}},{key:"printResult",value:function(t){var r;"win"===t&&(r="Победа!"),"lose"===t&&(r="Проигрыш!");var e=document.createElement("p");e.classList.add("score-".concat(t)),e.textContent=r,this._elem.insertBefore(e,null)}}])&&o(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}())(document.querySelector(".info")),document.querySelector(".table")).init()})()})();
//# sourceMappingURL=app.bundle.js.map