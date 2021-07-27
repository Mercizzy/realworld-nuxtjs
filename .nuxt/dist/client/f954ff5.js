(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{198:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"j",(function(){return o})),r.d(e,"k",(function(){return l})),r.d(e,"c",(function(){return f})),r.d(e,"f",(function(){return v})),r.d(e,"h",(function(){return d})),r.d(e,"i",(function(){return m})),r.d(e,"b",(function(){return _})),r.d(e,"e",(function(){return h})),r.d(e,"a",(function(){return O})),r.d(e,"d",(function(){return y}));var n=r(63),c=function(t){return Object(n.b)({method:"get",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"get",url:"/api/articles/feed",params:t})},l=function(){return Object(n.b)({method:"get",url:"/api/tags"})},f=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},_=function(t,data){return Object(n.b)({method:"post",url:"/api/articles/".concat(t,"/comments"),data:data})},h=function(t,e){return Object(n.b)({method:"delete",url:"/api/articles/".concat(t,"/comments/").concat(e)})},O=function(data){return Object(n.b)({method:"post",url:"/api/articles",data:data})},y=function(t){return Object(n.b)({method:"delete",url:"/api/articles/".concat(t)})}},204:function(t,e,r){"use strict";r(31),r(20),r(21),r(38),r(39);var n=r(4),c=r(13),o=(r(40),r(22));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={props:{articles:{type:Array,require:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["user"])),methods:{setFavorited:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteLoading=!0,t.prev=1,!article.favorited){t.next=9;break}return t.next=5,deleteFavorite(article.slug);case 5:article.favorited=!1,article.favoritesCount-=1,t.next=13;break;case 9:return t.next=11,addFavorite(article.slug);case 11:article.favorited=!0,article.favoritesCount+=1;case 13:article.favoriteLoading=!1,t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),article.favoriteLoading=!1;case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))()}}},v=r(32),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.articles,(function(article){return r("div",{directives:[{name:"show",rawName:"v-show",value:t.articles.length,expression:"articles.length"}],key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile-username",params:{username:article.author.username}}}},[r("img",{staticClass:"user-img",attrs:{src:article.author.image?article.author.image:"https://static.productionready.io/images/smiley-cyrus.jpg"}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile-username",params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.updatedAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:t.user&&article.favorited},attrs:{disabled:!t.user||article.favoriteLoading},on:{click:function(e){return t.setFavorited(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n      ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description||"--"))]),t._v(" "),r("span",[t._v("Read more...")]),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(article.tagList,(function(e,n){return r("li",{key:n,staticClass:"tag-default tag-pill tag-outline"},[t._v("\n          "+t._s(e)+"\n        ")])})),0)])],1)})),t._v(" "),t.articles.length?t._e():r("div",{staticClass:"article-preview"},[t._v("\n    No articles are here... yet.\n  ")])],2)}),[],!1,null,null,null);e.a=component.exports},213:function(t,e,r){var n=r(3),c=r(34),o=r(9),l=r(214),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},214:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},274:function(t,e,r){var n=r(3),c=r(275);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},275:function(t,e,r){var n=r(5).parseInt,c=r(213).trim,o=r(214),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},276:function(t,e,r){"use strict";var n=r(5),c=r(26),o=r(27),l=r(130),f=r(64),v=r(9),d=r(52).f,m=r(53).f,_=r(11).f,h=r(213).trim,O="Number",y=n.Number,j=y,C=y.prototype,w=o(r(85)(C))==O,k="trim"in String.prototype,x=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(w?v((function(){C.valueOf.call(r)})):o(r)!=O)?l(new j(x(e)),r,y):x(e)};for(var E,P=r(7)?d(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;P.length>N;N++)c(j,E=P[N])&&!c(y,E)&&_(y,E,m(j,E));y.prototype=C,C.constructor=y,r(15)(n,O,y)}},282:function(t,e,r){"use strict";r.r(e);var n=r(13),c=r(10),o=r(4),l=(r(40),r(274),r(276),r(41),r(14),r(42),r(31),r(20),r(21),r(38),r(39),r(22)),f=r(198);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{articlePreview:r(204).a},name:"HomePage",watchQuery:["page","tab"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,v,d,m,_,h,O,y,j,C,w,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=r.tab||(n.state.user?"your_feed":"global_feed"),l="your_feed"===o?f.j:f.g,v=Number.parseInt(r.page)||1,d=20,m=r.tag,n.commit("setPageLoading",!0),e.next=9,Promise.all([l({limit:d,offset:(v-1)*d,tag:m}),Object(f.k)()]);case 9:return _=e.sent,h=Object(c.a)(_,2),O=h[0],y=h[1],n.commit("setPageLoading",!1),j=O.data,C=j.articles,w=j.articlesCount,k=y.data.tags,C.forEach((function(element){element.favoriteLoading=!1})),e.abrupt("return",{articles:C,articlesCount:w,page:v,limit:d,tab:o,tags:k,tag:m});case 18:case"end":return e.stop()}}),e)})))()},computed:d(d({},Object(l.c)(["user","pageLoading"])),{},{pageCount:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:d({},Object(l.b)(["setPageLoading"]))},_=r(32),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{path:"/",query:{tab:"your_feed"}}}},[t._v("\n                Your Feed\n              ")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{path:"/",query:{tab:"global_feed"}}}},[t._v("\n                Global Feed\n              ")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tab"===t.tab},attrs:{exact:"",to:{path:"/",query:{tab:"tag"}}}},[t._v("\n                "+t._s(t.tag)+"\n              ")])],1)])]),t._v(" "),r("article-preview",{attrs:{articles:t.articles}}),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.pageCount,(function(e){return r("li",{key:e,staticClass:"page-item ng-scope",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link ng-binding",attrs:{to:{path:"/",query:{page:e,tab:t.tab,tag:t.tag}}}},[t._v("\n                "+t._s(e)+"\n              ")])],1)})),0)])],1),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e,n){return r("nuxt-link",{key:n,staticClass:"tag-pill tag-default",attrs:{to:{path:"/",query:{tab:"tab",tag:e}}}},[t._v("\n              "+t._s(e)+"\n            ")])})),1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),r("p",[t._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);