<template>
  <section id="app">
    <header class="hero is-light">
      <section class="hero-body has-text-centered">
        <router-link to="/">
          <img src="/static/images/promo/banner-600x200.jpg" alt=""/>
        </router-link>
      </section>
    </header>

    <UserPanel></UserPanel>

    <section id="content" class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">
        Project make with <i class="fa fa-heart" aria-hidden="true"></i>
        by <a href="http://piecioshka.pl">@piecioshka</a>
        for <a href="http://nodeknockout.com">Node Knockout Competition</a>
        <br/>
        Copyright @ 2017
      </p>
    </footer>
  </section>
</template>

<script>
  import UserPanel from './components/shared/user-panel.vue';

  export default {
    name: 'App',
    components: {
      UserPanel
    },
    computed: {
      user() {
        return this.$store.getters.user;
      }
    },
    mounted() {
      this.$store.dispatch('setupStore');
    },
    watch: {
      user() {
        if (this.user) {
          this.$socket.emit('generalChannel', {
            action: 'add',
            data: this.user,
            from: 'app.vue'
          });
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/styles/global";
  @import "assets/styles/main";
</style>
