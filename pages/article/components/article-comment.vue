<template>
  <div>
    <form class="card comment-form" @submit.prevent="postComment">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="commentValue"
        ></textarea>
      </div>
      <div class="card-footer">
        <img
          :src="user.image ? user.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'"
          class="comment-author-img"
        />
        <button class="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <a href="" class="comment-author">
          <img
            :src="comment.author.image ? comment.author.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'"
            class="comment-author-img"
          />
        </a>
        &nbsp;
        <a href="" class="comment-author">{{ comment.author.username }}</a>
        <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY') }}</span>
        <span class="mod-options" v-if="comment.author.username === user.username">
          <i class="ion-trash-a" @click="deleteComment(comment)"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'article-comment',
  props: {
    comments: {
      type: Array,
      require: true
    }
  },
  computed: {
    ...mapState(['user']),
  },
  data() {
    return {
      commentValue: '',
    }
  },
  methods: {
    postComment() {
      this.$emit('postcomment', this.commentValue)
    },
    deleteComment(comment) {
      this.$emit('deletecomment', comment.id)
    },
  },
};
</script>

<style>
</style>