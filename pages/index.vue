<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Merci Test</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link 
                  exact
                  class="nav-link" 
                  :class="{ 'active': tab === 'your_feed' }" 
                  :to="{
                    path: '/',
                    query: {
                      tab: 'your_feed'
                    }
                  }">
                  Your Feed
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link 
                  exact
                  class="nav-link" 
                  :class="{ 'active': tab === 'global_feed' }" 
                  :to="{
                    path: '/',
                    query: {
                      tab: 'global_feed'
                    }
                  }">
                  Global Feed
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link 
                  exact
                  class="nav-link" 
                  :class="{ 'active': tab === 'tab' }" 
                  :to="{
                    path: '/',
                    query: {
                      tab: 'tag'
                    }
                  }">
                  {{ tag }}
                </nuxt-link>
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
                    path: '/',
                    query: {
                      page: currentPage,
                      tab,
                      tag,
                    }
                  }">
                  {{ currentPage }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <nuxt-link 
                class="tag-pill tag-default" 
                v-for="(tag, index) in tags" 
                :key="index"
                :to="{
                  path: '/',
                  query: {
                    tab: 'tab',
                    tag
                  },
                }">
                {{ tag }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getAllArticles, getFeedArticles, getTags, addFavorite, deleteFavorite } from '@/apis/articles'
import articlePreview from '../components/article-preview.vue';
export default {
  components: { articlePreview },
  name: 'HomePage',
  watchQuery: ['page', 'tab'],
  async asyncData({ query, store }) {
    const tab = query.tab || (store.state.user ? 'your_feed' : 'global_feed')
    const getArticlesFn = tab === 'your_feed' ? getFeedArticles : getAllArticles
    const page = Number.parseInt(query.page) || 1
    const limit = 20
    const tag = query.tag
    store.commit('setPageLoading', true)
    const [articleInfo, tagInfo] = await Promise.all([
      getArticlesFn({
        limit,
        offset: (page - 1) * limit,
        tag
      }),
      getTags(),
    ])
    store.commit('setPageLoading', false)
    const { articles, articlesCount } = articleInfo.data
    const { tags } = tagInfo.data
    articles.forEach(element => {
      element.favoriteLoading = false
    });
    return {
      articles,
      articlesCount,
      page,
      limit,
      tab,
      tags,
      tag
    }
  },
  computed: {
    ...mapState(['user', 'pageLoading']),
    pageCount() {
      return Math.ceil(this.articlesCount / this.limit)
    },
  },
  methods: {
    ...mapMutations(['setPageLoading']),
  },
};
</script>

<style>
</style>