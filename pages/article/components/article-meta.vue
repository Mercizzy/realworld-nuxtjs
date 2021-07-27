<template>
  <div class="article-meta">
    <a href=""><img :src="article.author.image" /></a>
    <div class="info">
      <a href="" class="author">{{ article.author.username }}</a>
      <span class="date">{{ article.updatedAt | date('MMM DD, YYYY') }}</span>
    </div>
    <template v-if="article.author.username === user.username">
      <nuxt-link class="btn btn-outline-secondary btn-sm" :to="{
        name: 'editor-slug',
        params: {
          slug: article.slug
        }
      }">
        <i class="ion-edit"></i> Edit Article
      </nuxt-link>
      <button class="btn btn-outline-danger btn-sm" :disabled="article.isDeleting" @click="clickDelete(article.slug)">
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </template>
    <template v-else>
      <button class="btn btn-sm btn-outline-secondary" @click="clickFollow" :disabled="article.followLoading">
        <i class="ion-plus-round"></i>
        &nbsp; {{ article.author.following ? 'Unfollow' : 'Follow' }} {{ article.author.username }}
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-sm btn-outline-primary" @click="clickFavorite" :disabled="article.favoriteLoading">
        <i class="ion-heart"></i>
        &nbsp; {{ article.favorited ? 'Unfavorite Article' : 'Favorite Post' }} <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'article-meta',
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    clickFavorite() {
      this.$emit('clickfavorite')
    },
    clickFollow() {
      this.$emit('clickfollow')
    },
    clickDelete(slug) {
      this.$emit('clickdelete', slug)
    },
  },
}
</script>

<style>

</style>