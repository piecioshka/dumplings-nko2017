<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-thirds">

        <div v-if="isConnected">
          <h2 class="title">List of currently logged users</h2>

          <p class="subtitle">
            We're connected to the server!
          </p>

          <nav class="panel" v-if="currentlyLoggedUsers.length">
            <h2
              class="panel-block"
              v-for="user in currentlyLoggedUsers"
              :key="user.id"
            >
              <i class="fa fa-user" aria-hidden="true"></i>
              &nbsp;{{ user.name }}&nbsp;

              <span class="tag is-rounded is-success">
                {{ user.resolvedQuizzes.length }}
              </span>
            </h2>
          </nav>

          <div class="message" v-else="currentlyLoggedUsers.length">
            <p class="message-body">
              Waiting for fulfill...
            </p>
          </div>
        </div>

        <div class="message" v-else="isConnected">
          <p class="message-body">
            Connection refused.
          </p>
        </div>

      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CurrentlyLoggedUsersPage',
    computed: {
      user() {
        return this.$store.getters.user;
      },
      isConnected() {
        return this.$store.getters.isConnected;
      },
      currentlyLoggedUsers() {
        return this.$store.getters.currentlyLoggerUsers
      }
    },
    sockets: {
      generalChannel(users) {
        this.$store.commit('updateCurrentlyLoggedUsers', users);
      }
    },
    mounted() {
      this.$socket.emit('generalChannel', { action: 'get' });
    }
  }
</script>

<style lang="scss" scoped>
</style>
