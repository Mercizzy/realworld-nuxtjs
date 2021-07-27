(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{198:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"j",(function(){return o})),r.d(e,"k",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"f",(function(){return m})),r.d(e,"h",(function(){return f})),r.d(e,"i",(function(){return v})),r.d(e,"b",(function(){return h})),r.d(e,"e",(function(){return y})),r.d(e,"a",(function(){return w})),r.d(e,"d",(function(){return O}));var n=r(63),c=function(t){return Object(n.b)({method:"get",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"get",url:"/api/articles/feed",params:t})},l=function(){return Object(n.b)({method:"get",url:"/api/tags"})},d=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},h=function(t,data){return Object(n.b)({method:"post",url:"/api/articles/".concat(t,"/comments"),data:data})},y=function(t,e){return Object(n.b)({method:"delete",url:"/api/articles/".concat(t,"/comments/").concat(e)})},w=function(data){return Object(n.b)({method:"post",url:"/api/articles",data:data})},O=function(t){return Object(n.b)({method:"delete",url:"/api/articles/".concat(t)})}},280:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(40),r(198)),o={name:"EditPage",middleware:["auth"],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.params,n=r.slug,article={title:"",description:"",body:"",tagList:[]},!n){e.next=9;break}return e.next=6,Object(c.h)(n);case 6:o=e.sent,data=o.data,article=data.article;case 9:return e.abrupt("return",{article:article});case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{tag:""}},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={article:t.article},e.next=3,Object(c.a)(r);case 3:n=e.sent,data=n.data,t.$router.push({name:"article-slug",params:{slug:data.article.slug}});case 6:case"end":return e.stop()}}),e)})))()},enterTag:function(){this.article.tagList.push(this.tag),this.tag=""},deleteTag:function(t){this.article.tagList.splice(t,1)}}},l=r(32),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.tag},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterTag.apply(null,arguments)},input:function(e){e.target.composing||(t.tag=e.target.value)}}}),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e,n){return r("span",{key:n,staticClass:"tag-default tag-pill"},[r("i",{staticClass:"ion-close-round",on:{click:function(e){return t.deleteTag(n)}}}),t._v("\n                    "+t._s(e)+"\n                ")])})),0)]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary"},[t._v("\n                Publish Article\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);