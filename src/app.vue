<template>
  <section id="app">
    <header class="hero is-light">
      <section class="hero-body has-text-centered">
        <router-link to="/">
          <img src="/static/images/images-huge/banner-600x200.jpg" alt=""/>
        </router-link>
      </section>
    </header>

    <section id="content" class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">
        Author <a href="http://piecioshka.pl">@piecioshka</a>
        Project make for <a href="http://nodeknockout.com">Node Knockout</a>
        Competition @ 2017
      </p>
    </footer>
  </section>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import "assets/styles/global";
  @import "assets/styles/main";
</style>
