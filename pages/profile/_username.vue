<template>
  <div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.image ? profile.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'" class="user-img" />
          <h4>{{ profile.username }}</h4>
          <p>{{ profile.bio || '--' }}</p>
          <button class="btn btn-sm btn-outline-secondary action-btn" v-if="user.username === profile.username" @click="goSetting">
            <i class="ion-gear-a"></i>
            &nbsp;
            Edit Profile Settings
          </button>
          <button class="btn btn-sm btn-outline-secondary action-btn" v-else @click="handleFollow" :disabled="profile.followLoading">
            <i class="ion-plus-round"></i>
            &nbsp;
            {{ profile.following ? 'UnFollow' : 'Follow' }} {{ profile.username }} 
          </button>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <nuxt-link exact class="nav-link" :class="{ 'active': type === 'author' }" :to="{
                name: 'profile-username',
                params: {
                  username: user.username,
                },
                query: {
                  type: 'author'
                },
              }">My Articles</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link exact class="nav-link" :class="{ 'active': type === 'favorited' }" :to="{
                name: 'profile-username',
                params: {
                  username: user.username,
                },
                query: {
                  type: 'favorited'
                },
              }">Favorited Articles</nuxt-link>
            </li>
          </ul>
        </div>

        <article-preview :articles="articles" />

        <nav>
          <ul class="pagination">
            <li 
              class="page-item ng-scope" 
              :class="{ 'active': currentPage === page }" 
              v-for="currentPage in pageCount" 
              :key="currentPage">
              <nuxt-link 
                class="page-link ng-binding" 
                :to="{
                  name: 'profile-username',
                  params: {
                    username: user.username,
                  },
                  query: {
                    page: currentPage,
                    type,
                  }
                }">
                {{ currentPage }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import { mapState } from 'vuex'
import { getSomeoneInfo } from '@/apis/profile'
import { getAllArticles } from '@/apis/articles'
import { followSomeone, unFollowSomeone } from '@/apis/profile'
import articlePreview from '../../components/article-preview.vue'
export default {
  components: { articlePreview },
  name: 'ProfilePage',
  watchQuery: ['type', 'page'],
  async asyncData({ params, query }) {
    const { username } = params
    const page = query.page || 1
    const type = query.type || 'author'
    const limit = 5
    const [userInfo, articleInfo] = await Promise.all([
      getSomeoneInfo(username),
      getAllArticles({
        [type]: username,
        limit,
        offset: (page - 1) * limit,
      })
    ])
    const { profile } = userInfo.data
    const { articles, articlesCount } = articleInfo.data
    profile.followLoading = false
    return {
      profile,
      articles,
      articlesCount,
      limit,
      page,
      username,
      type,
    }
  },
  computed: {
    ...mapState(['user']),
    pageCount() {
      return Math.ceil(this.articlesCount / this.limit)
    },
  },
  methods: {
    goSetting() {
      this.$router.push({
        name: 'settings'
      })
    },
    async handleFollow() {
      this.profile.followLoading = true
      try {
        if (this.profile.following) {
          await unFollowSomeone(this.profile.username)
          this.profile.following = false
        } else {
          await followSomeone(this.profile.username)
          this.profile.following = true
        }
        this.profile.followLoading = false
      } catch (error) {
        console.log(error);
        this.profile.followLoading = false
      }
    },
  },
}
</script>

<style>

</style>