exports.ids = [7];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getAllArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取所有文章

const getAllArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: '/api/articles',
    params
  });
}; // 获取关注文章

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: '/api/articles/feed',
    params
  });
}; // 获取文章的tag

const getTags = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: '/api/tags'
  });
}; // 点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticleDetail = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 评论文章

const addComment = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `/api/articles/${slug}/comments`,
    data
  });
}; // 删除评论

const deleteComment = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'delete',
    url: `/api/articles/${slug}/comments/${id}`
  });
}; // 新增文章

const addArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `/api/articles`,
    data
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'delete',
    url: `/api/articles/${slug}`
  });
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followSomeone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unFollowSomeone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSomeoneInfo; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 关注xxx

const followSomeone = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `/api/profiles/${username}/follow`
  });
}; // 取关xxx

const unFollowSomeone = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'delete',
    url: `/api/profiles/${username}/follow`
  });
}; // 获取xx信息

const getSomeoneInfo = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: `/api/profiles/${username}`
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/article-preview.vue?vue&type=template&id=a4df202c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\""+(_vm._ssrStyle(null,null, { display: (_vm.articles.length) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
        name: 'profile-username',
        params: {
          username: article.author.username,
        }
      }}},[_c('img',{staticClass:"user-img",attrs:{"src":article.author.image ? article.author.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
          name: 'profile-username',
          params: {
            username: article.author.username,
          }
        }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.updatedAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",!_vm.user || article.favoriteLoading))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: _vm.user && article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n      ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
        name: 'article-slug',
        params: {
          slug: article.slug,
        },
      }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description || "--"))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(tag,index){return _c('li',{key:index,staticClass:"tag-default tag-pill tag-outline"},[_vm._v("\n          "+_vm._s(tag)+"\n        ")])}),0)])],2)}),_vm._ssrNode(" "+((!_vm.articles.length)?("<div class=\"article-preview\">\n    No articles are here... yet.\n  </div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/article-preview.vue?vue&type=template&id=a4df202c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/article-preview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_previewvue_type_script_lang_js_ = ({
  props: {
    articles: {
      type: Array,
      require: true
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async setFavorited(article) {
      article.favoriteLoading = true;

      try {
        if (article.favorited) {
          await deleteFavorite(article.slug);
          article.favorited = false;
          article.favoritesCount -= 1;
        } else {
          await addFavorite(article.slug);
          article.favorited = true;
          article.favoritesCount += 1;
        }

        article.favoriteLoading = false;
      } catch (error) {
        article.favoriteLoading = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/article-preview.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_previewvue_type_script_lang_js_ = (article_previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/article-preview.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_previewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "22a4cbb7"
  
)

/* harmony default export */ var article_preview = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/_username.vue?vue&type=template&id=ebb66b4e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.profile.image ? _vm.profile.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.profile.bio || '--'))+"</p> "+((_vm.user.username === _vm.profile.username)?("<button class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-gear-a\"></i>\n             \n            Edit Profile Settings\n          </button>"):("<button"+(_vm._ssrAttr("disabled",_vm.profile.followLoading))+" class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n             \n            "+_vm._s(_vm.profile.following ? 'UnFollow' : 'Follow')+" "+_vm._s(_vm.profile.username)+" \n          ")+"</button>"))+"</div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ 'active': _vm.type === 'author' },attrs:{"exact":"","to":{
                name: 'profile-username',
                params: {
                  username: _vm.user.username,
                },
                query: {
                  type: 'author'
                },
              }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ 'active': _vm.type === 'favorited' },attrs:{"exact":"","to":{
                name: 'profile-username',
                params: {
                  username: _vm.user.username,
                },
                query: {
                  type: 'favorited'
                },
              }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_c('article-preview',{attrs:{"articles":_vm.articles}}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.pageCount),function(currentPage){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item ng-scope",{ 'active': currentPage === _vm.page }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{
                  name: 'profile-username',
                  params: {
                    username: _vm.user.username,
                  },
                  query: {
                    page: currentPage,
                    type: _vm.type,
                  }
                }}},[_vm._v("\n                "+_vm._s(currentPage)+"\n              ")])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/_username.vue?vue&type=template&id=ebb66b4e&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./apis/profile.js
var apis_profile = __webpack_require__(31);

// EXTERNAL MODULE: ./apis/articles.js
var apis_articles = __webpack_require__(30);

// EXTERNAL MODULE: ./components/article-preview.vue + 4 modules
var article_preview = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/_username.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var _usernamevue_type_script_lang_js_ = ({
  components: {
    articlePreview: article_preview["a" /* default */]
  },
  name: 'ProfilePage',
  watchQuery: ['type', 'page'],

  async asyncData({
    params,
    query
  }) {
    const {
      username
    } = params;
    const page = query.page || 1;
    const type = query.type || 'author';
    const limit = 5;
    const [userInfo, articleInfo] = await Promise.all([Object(apis_profile["b" /* getSomeoneInfo */])(username), Object(apis_articles["g" /* getAllArticles */])({
      [type]: username,
      limit,
      offset: (page - 1) * limit
    })]);
    const {
      profile
    } = userInfo.data;
    const {
      articles,
      articlesCount
    } = articleInfo.data;
    profile.followLoading = false;
    return {
      profile,
      articles,
      articlesCount,
      limit,
      page,
      username,
      type
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user']),

    pageCount() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    goSetting() {
      this.$router.push({
        name: 'settings'
      });
    },

    async handleFollow() {
      this.profile.followLoading = true;

      try {
        if (this.profile.following) {
          await Object(apis_profile["c" /* unFollowSomeone */])(this.profile.username);
          this.profile.following = false;
        } else {
          await Object(apis_profile["a" /* followSomeone */])(this.profile.username);
          this.profile.following = true;
        }

        this.profile.followLoading = false;
      } catch (error) {
        console.log(error);
        this.profile.followLoading = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/_username.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_usernamevue_type_script_lang_js_ = (_usernamevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/profile/_username.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_usernamevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c7fc24e"
  
)

/* harmony default export */ var _username = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_username.js.map