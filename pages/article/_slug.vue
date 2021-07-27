<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <article-meta :article="article" @clickfavorite="handleFavorite" @clickfollow="handleFollow" @clickdelete="handleDelete" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article" @clickfavorite="handleFavorite" @clickfollow="handleFollow" @clickdelete="handleDelete" />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <article-comment :comments="comments" @postcomment="handlePostComment" @deletecomment="handleDeleteComment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { mapState } from 'vuex'
import { getArticleDetail, getComments, addFavorite, deleteFavorite, addComment, deleteComment, deleteArticle } from '@/apis/articles'
import { followSomeone, unFollowSomeone } from '@/apis/profile'
import articleMeta from './components/article-meta.vue';
import articleComment from './components/article-comment.vue'
export default {
  components: { articleMeta, articleComment },
  name: "ArticlePage",
  async asyncData({ params }) {
    const slug = params.slug
    const { data } = await getArticleDetail(slug)
    const { article } = data
    article.favoriteLoading = false
    article.followLoading = false
    article.isDeleting = false
    const markdownIt = new MarkdownIt()
    article.body = markdownIt.render(article.body)
    return {
      slug,
      article
    }
  },
  computed: {
    ...mapState(['user']),
  },
  data() {
    return {
      comments: []
    }
  },
  async mounted() {
    const { data } = await getComments(this.slug)
    this.comments = data.comments || []
  },
  methods: {
    async handleFavorite() {
      this.article.favoriteLoading = true
      try {
        if (this.article.favorited) {
          await deleteFavorite(this.article.slug)
          this.article.favorited = false
          this.article.favoritesCount -= 1
        } else {
          await addFavorite(this.article.slug)
          this.article.favorited = true
          this.article.favoritesCount += 1
        }
        this.article.favoriteLoading = false
      } catch (error) {
        this.article.favoriteLoading = false
      }
    },
    async handleFollow() {
      this.article.followLoading = true
      try {
        if (this.article.author.following) {
          await unFollowSomeone(this.article.author.username)
          this.article.author.following = false
        } else {
          await followSomeone(this.article.author.username)
          this.article.author.following = true
        }
        this.article.followLoading = false
      } catch (error) {
        console.log(error);
        this.article.followLoading = false
      }
    },
    async handlePostComment(commentValue) {
      const params = {
        comment: {
          body: commentValue
        }
      }
      const { data } = await addComment(this.article.slug, params)
      const { comment } = data
      this.comments.unshift(comment)
    },
    async handleDeleteComment(id) {
      await deleteComment(this.article.slug, id)
      const index = this.comments.findIndex(element => element.id === id)
      if (index !== -1) {
        this.comments.splice(index, 1)
      }
    },
    async handleDelete(slug) {
      this.article.isDeleting = true
      await deleteArticle(slug)
      this.article.isDeleting = false
      this.$router.push('/')
    }
  },
};
</script>

<style>
</style>