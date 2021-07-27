<template>
  <div id="default">
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{
                name: 'editor-slug',
                
              }"><i class="ion-compose"></i>&nbsp;New Post</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings"><i class="ion-gear-a"></i>&nbsp;Settings</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{
                name: 'profile-username',
                params: {
                  username: user.username,
                }
              }">
                <img class="user-pic" :src="user.image ? user.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'" :ng-src="user.image ? user.image : 'http://i.imgur.com/Qr71crq.jpg'"> 
                {{ user.username }} 
              </nuxt-link> 
            </li>
            <li class="nav-item">
              <span class="nav-link click-link" @click="logout">Log out</span>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <nuxt />
    <footer>
      <div class="container">
        <nuxt-link to="/" class="logo-font">conduit</nuxt-link>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'DefaultPage',
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations(['setUser']),
    logout() {
      this.setUser(null)
      Cookie.set('user', null)
      this.$router.replace('/login')
    },
  },
}
</script>

<style>
  .click-link {
    cursor: pointer;
  }
</style>