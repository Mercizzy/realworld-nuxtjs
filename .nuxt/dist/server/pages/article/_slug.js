exports.ids = [1,2,3];
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=template&id=1a48b0be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.commentValue))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image ? _vm.user.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> "+(_vm._ssrList((_vm.comments),function(comment){return ("<div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n        "+_vm._s(comment.body)+"\n      ")+"</p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img"+(_vm._ssrAttr("src",comment.author.image ? comment.author.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'))+" class=\"comment-author-img\"></a>\n       \n      <a href class=\"comment-author\">"+_vm._ssrEscape(_vm._s(comment.author.username))+"</a> <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD, YYYY')))+"</span> "+((comment.author.username === _vm.user.username)?("<span class=\"mod-options\"><i class=\"ion-trash-a\"></i></span>"):"<!---->")+"</div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=template&id=1a48b0be&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_commentvue_type_script_lang_js_ = ({
  name: 'article-comment',
  props: {
    comments: {
      type: Array,
      require: true
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  data() {
    return {
      commentValue: ''
    };
  },

  methods: {
    postComment() {
      this.$emit('postcomment', this.commentValue);
    },

    deleteComment(comment) {
      this.$emit('deletecomment', comment.id);
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentvue_type_script_lang_js_ = (article_commentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/article/components/article-comment.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_commentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "02a19a8c"
  
)

/* harmony default export */ var article_comment = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=8fed09ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_vm._ssrNode("<a href><img"+(_vm._ssrAttr("src",_vm.article.author.image))+"></a> <div class=\"info\"><a href class=\"author\">"+_vm._ssrEscape(_vm._s(_vm.article.author.username))+"</a> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.updatedAt,'MMM DD, YYYY')))+"</span></div> "),(_vm.article.author.username === _vm.user.username)?[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
      name: 'editor-slug',
      params: {
        slug: _vm.article.slug
      }
    }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n    ")]),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.article.isDeleting))+" class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n    </button>")]:_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.article.followLoading))+" class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n        "+_vm._s(_vm.article.author.following ? 'Unfollow' : 'Follow')+" "+_vm._s(_vm.article.author.username)+"\n    ")+"</button>\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.article.favoriteLoading))+" class=\"btn btn-sm btn-outline-primary\"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n        "+_vm._s(_vm.article.favorited ? 'Unfavorite Article' : 'Favorite Post')+" ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=8fed09ee&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'article-meta',
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    clickFavorite() {
      this.$emit('clickfavorite');
    },

    clickFollow() {
      this.$emit('clickfollow');
    },

    clickDelete(slug) {
      this.$emit('clickdelete', slug);
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "08189d28"
  
)

/* harmony default export */ var article_meta = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_slug.vue?vue&type=template&id=5ff7e227&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article},on:{"clickfavorite":_vm.handleFavorite,"clickfollow":_vm.handleFollow,"clickdelete":_vm.handleDelete}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article},on:{"clickfavorite":_vm.handleFavorite,"clickfollow":_vm.handleFollow,"clickdelete":_vm.handleDelete}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comment',{attrs:{"comments":_vm.comments},on:{"postcomment":_vm.handlePostComment,"deletecomment":_vm.handleDeleteComment}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/_slug.vue?vue&type=template&id=5ff7e227&

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(29);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./apis/articles.js
var articles = __webpack_require__(30);

// EXTERNAL MODULE: ./apis/profile.js
var profile = __webpack_require__(31);

// EXTERNAL MODULE: ./pages/article/components/article-meta.vue + 4 modules
var article_meta = __webpack_require__(35);

// EXTERNAL MODULE: ./pages/article/components/article-comment.vue + 4 modules
var article_comment = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    articleMeta: article_meta["default"],
    articleComment: article_comment["default"]
  },
  name: "ArticlePage",

  async asyncData({
    params
  }) {
    const slug = params.slug;
    const {
      data
    } = await Object(articles["h" /* getArticleDetail */])(slug);
    const {
      article
    } = data;
    article.favoriteLoading = false;
    article.followLoading = false;
    article.isDeleting = false;
    const markdownIt = new external_markdown_it_default.a();
    article.body = markdownIt.render(article.body);
    return {
      slug,
      article
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  data() {
    return {
      comments: []
    };
  },

  async mounted() {
    const {
      data
    } = await Object(articles["i" /* getComments */])(this.slug);
    this.comments = data.comments || [];
  },

  methods: {
    async handleFavorite() {
      this.article.favoriteLoading = true;

      try {
        if (this.article.favorited) {
          await Object(articles["f" /* deleteFavorite */])(this.article.slug);
          this.article.favorited = false;
          this.article.favoritesCount -= 1;
        } else {
          await Object(articles["c" /* addFavorite */])(this.article.slug);
          this.article.favorited = true;
          this.article.favoritesCount += 1;
        }

        this.article.favoriteLoading = false;
      } catch (error) {
        this.article.favoriteLoading = false;
      }
    },

    async handleFollow() {
      this.article.followLoading = true;

      try {
        if (this.article.author.following) {
          await Object(profile["c" /* unFollowSomeone */])(this.article.author.username);
          this.article.author.following = false;
        } else {
          await Object(profile["a" /* followSomeone */])(this.article.author.username);
          this.article.author.following = true;
        }

        this.article.followLoading = false;
      } catch (error) {
        console.log(error);
        this.article.followLoading = false;
      }
    },

    async handlePostComment(commentValue) {
      const params = {
        comment: {
          body: commentValue
        }
      };
      const {
        data
      } = await Object(articles["b" /* addComment */])(this.article.slug, params);
      const {
        comment
      } = data;
      this.comments.unshift(comment);
    },

    async handleDeleteComment(id) {
      await Object(articles["e" /* deleteComment */])(this.article.slug, id);
      const index = this.comments.findIndex(element => element.id === id);

      if (index !== -1) {
        this.comments.splice(index, 1);
      }
    },

    async handleDelete(slug) {
      this.article.isDeleting = true;
      await Object(articles["d" /* deleteArticle */])(slug);
      this.article.isDeleting = false;
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/article/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/article/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "650568b0"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map