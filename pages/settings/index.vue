<template>
  <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form @submit.prevent="submit">
          <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text" placeholder="URL of profile picture" v-model="user.image">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you" v-model="user.bio"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="user.email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import { getUserInfo, updateUserInfo } from '@/apis/user'
export default {
  name: 'SettingsPage',
  async asyncData() {
    const { data } = await getUserInfo()
    const { user } = data
    return {
      user
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async submit() {
      const params = {
        user: this.user
      }
      const { data } = await updateUserInfo(params)
      this.setUser(data.user)
      this.$router.push({
        name: 'profile-username',
        params: {
          username: this.user.username,
        }
      })
    },
  },
}
</script>

<style>

</style>