exports.ids = [5];
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=544c0c00&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ 'active': _vm.tab === 'your_feed' },attrs:{"exact":"","to":{
                  path: '/',
                  query: {
                    tab: 'your_feed'
                  }
                }}},[_vm._v("\n                Your Feed\n              ")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ 'active': _vm.tab === 'global_feed' },attrs:{"exact":"","to":{
                  path: '/',
                  query: {
                    tab: 'global_feed'
                  }
                }}},[_vm._v("\n                Global Feed\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ 'active': _vm.tab === 'tab' },attrs:{"exact":"","to":{
                  path: '/',
                  query: {
                    tab: 'tag'
                  }
                }}},[_vm._v("\n                "+_vm._s(_vm.tag)+"\n              ")])],1)],2)]),_vm._ssrNode(" "),_c('article-preview',{attrs:{"articles":_vm.articles}}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.pageCount),function(currentPage){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item ng-scope",{ 'active': currentPage === _vm.page }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{
                  path: '/',
                  query: {
                    page: currentPage,
                    tab: _vm.tab,
                    tag: _vm.tag,
                  }
                }}},[_vm._v("\n                "+_vm._s(currentPage)+"\n              ")])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(tag,index){return _c('nuxt-link',{key:index,staticClass:"tag-pill tag-default",attrs:{"to":{
                path: '/',
                query: {
                  tab: 'tab',
                  tag: tag
                },
              }}},[_vm._v("\n              "+_vm._s(tag)+"\n            ")])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=544c0c00&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./apis/articles.js
var apis_articles = __webpack_require__(30);

// EXTERNAL MODULE: ./components/article-preview.vue + 4 modules
var article_preview = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    articlePreview: article_preview["a" /* default */]
  },
  name: 'HomePage',
  watchQuery: ['page', 'tab'],

  async asyncData({
    query,
    store
  }) {
    const tab = query.tab || (store.state.user ? 'your_feed' : 'global_feed');
    const getArticlesFn = tab === 'your_feed' ? apis_articles["j" /* getFeedArticles */] : apis_articles["g" /* getAllArticles */];
    const page = Number.parseInt(query.page) || 1;
    const limit = 20;
    const tag = query.tag;
    store.commit('setPageLoading', true);
    const [articleInfo, tagInfo] = await Promise.all([getArticlesFn({
      limit,
      offset: (page - 1) * limit,
      tag
    }), Object(apis_articles["k" /* getTags */])()]);
    store.commit('setPageLoading', false);
    const {
      articles,
      articlesCount
    } = articleInfo.data;
    const {
      tags
    } = tagInfo.data;
    articles.forEach(element => {
      element.favoriteLoading = false;
    });
    return {
      articles,
      articlesCount,
      page,
      limit,
      tab,
      tags,
      tag
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user', 'pageLoading']),

    pageCount() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: { ...Object(external_vuex_["mapMutations"])(['setPageLoading'])
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4c92055e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map