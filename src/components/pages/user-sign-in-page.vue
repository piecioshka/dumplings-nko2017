<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-fifths">
        <h2 class="title">Login</h2>

        <article class="message">
          <div class="message-body">
            <i class="fa fa-info" aria-hidden="true"></i>
            You will registered and login automatically
          </div>
        </article>

        <div class="field has-addons">
          <div class="control">
            <input
              autofocus
              class="input"
              type="text"
              placeholder="Enter your name"
              v-model="username"
              @keypress.enter="login()"
            />
          </div>
          <div class="control">
            <a class="button is-info" @click="login()">
              Login
            </a>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserSignInPage',
    data() {
      return {
        username: null
      }
    },
    methods: {
      login() {
        console.log('login', this.username);
        this.$store.dispatch('login', { name: this.username })
          .then(() => {
            this.$router.push({ path: '/profile' });
          });
      }
    },
    mounted() {
      if (this.$store.getters.user) {
        this.$router.push({ path: '/profile' });
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
