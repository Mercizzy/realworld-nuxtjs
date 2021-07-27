<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form @submit.prevent="onSubmit">
          <fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="Article Title" v-model="article.title">
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="What's this article about?" v-model="article.description">
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" rows="8" placeholder="Write your article (in markdown)" v-model="article.body"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="Enter tags" v-model="tag" @keyup.enter="enterTag">
                <div class="tag-list">
                  <span class="tag-default tag-pill" v-for="(item, index) in article.tagList" :key="index">
                    <i class="ion-close-round" @click="deleteTag(index)"></i>
                    {{ item }}
                </span>
                </div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { addArticle, getArticleDetail } from '@/apis/articles'
export default {
  name: 'EditPage',
  middleware: ['auth'],
  async asyncData({ params }) {
    const { slug } = params
    let article = {
      title: '',
      description: '',
      body: '',
      tagList: [],
    }
    if (slug) {
      const { data } = await getArticleDetail(slug)
      article = data.article
    }
    return {
      article
    }
  },
  data() {
    return {
      tag: '',
    }
  },
  methods: {
    async onSubmit() {
      const params = {
        article: this.article
      }
      const { data } = await addArticle(params)
      this.$router.push({
        name: 'article-slug',
        params: {
          slug: data.article.slug,
        },
      })
    },
    enterTag() {
      this.article.tagList.push(this.tag)
      this.tag = ''
    },
    deleteTag(index) {
      this.article.tagList.splice(index, 1)
    },
  }
}
</script>

<style>

</style>