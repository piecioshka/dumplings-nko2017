<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-fifths" v-if="user">
        <h2 class="title">Welcome "{{ user.name }}"!</h2>

      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserProfilePage',
    computed: {
      user() {
        return this.$store.getters.user
      }
    },
    methods: {},
    mounted() {
      if (!this.user) {
        this.$router.push({ path: '/' });
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
