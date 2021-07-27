<template>
  <div>
    <div
      class="article-preview"
      v-show="articles.length"
      v-for="article in articles"
      :key="article.slug"
    >
      <div class="article-meta">
        <nuxt-link :to="{
          name: 'profile-username',
          params: {
            username: article.author.username,
          }
        }">
          <img :src="article.author.image ? article.author.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'" class="user-img" />
        </nuxt-link>
        <div class="info">
          <nuxt-link :to="{
            name: 'profile-username',
            params: {
              username: article.author.username,
            }
          }" class="author">{{ article.author.username }}</nuxt-link>
          <span class="date">{{
            article.updatedAt | date("MMM DD, YYYY")
          }}</span>
        </div>
        <button
          :disabled="!user || article.favoriteLoading"
          class="btn btn-outline-primary btn-sm pull-xs-right"
          :class="{ active: user && article.favorited }"
          @click="setFavorited(article)"
        >
          <i class="ion-heart"></i> {{ article.favoritesCount }}
        </button>
      </div>
      <nuxt-link
        :to="{
          name: 'article-slug',
          params: {
            slug: article.slug,
          },
        }"
        class="preview-link"
      >
        <h1>{{ article.title }}</h1>
        <p>{{ article.description || "--" }}</p>
        <span>Read more...</span>
        <ul class="tag-list">
          <li class="tag-default tag-pill tag-outline" v-for="(tag, index) in article.tagList" :key="index">
            {{ tag }}
          </li>
        </ul>
      </nuxt-link>
    </div>
    <div v-if="!articles.length" class="article-preview">
      No articles are here... yet.
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    articles: {
      type: Array,
      require: true,
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    async setFavorited(article) {
      article.favoriteLoading = true
      try {
        if (article.favorited) {
          await deleteFavorite(article.slug)
          article.favorited = false
          article.favoritesCount -= 1
        } else {
          await addFavorite(article.slug)
          article.favorited = true
          article.favoritesCount += 1
        }
        article.favoriteLoading = false
      } catch (error) {
        article.favoriteLoading = false
      }
      
    },
  },
};
</script>

<style>
</style>