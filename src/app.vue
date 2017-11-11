<template>
  <div id="app">
    <router-link to="/">
      <img src="./assets/logo.png" alt=""/>
    </router-link>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "assets/styles/global";
  @import "assets/styles/main";
</style>
