exports.ids = [2];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=article-comment.js.map