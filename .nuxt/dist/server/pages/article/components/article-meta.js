exports.ids = [3];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=article-meta.js.map