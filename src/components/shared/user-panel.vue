<template>
  <div id="user-panel">
    <div class="tabs is-centered is-toggle">
      <ul>
        <router-link
          exact
          to="/"
          tag="li"
          active-class="is-active"
        >
          <a>
            <i class="fa fa-home" aria-hidden="true"></i>
            &nbsp;Home
          </a>
        </router-link>

        <router-link
          exact
          to="/currently-logged-users"
          tag="li"
          active-class="is-active"
        >
          <a>
            <i class="fa fa-users" aria-hidden="true"></i>
            &nbsp;Currently logged users
          </a>
        </router-link>

        <router-link
          exact
          v-if="!user"
          to="/sign-in"
          tag="li"
          active-class="is-active"
        >
          <a>
            <i class="fa fa-user" aria-hidden="true"></i>
            &nbsp;Sign in
          </a>
        </router-link>

        <router-link
          exact
          v-if="user"
          to="/profile"
          tag="li"
          active-class="is-active"
        >
          <a>
            <i class="fa fa-user" aria-hidden="true"></i>
            &nbsp;Profile ({{ user.name }})
          </a>
        </router-link>

        <li
          v-if="user"
          @click="logout()"
        >
          <a>
            <i class="fa fa-user" aria-hidden="true"></i>
            &nbsp;Sing out
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserPanel',
    computed: {
      user() {
        return this.$store.getters.user
      }
    },
    methods: {
      logout() {
        const user = this.user;

        this.$store.commit('logout');
        this.$socket.emit('generalChannel', {
          action: 'remove',
          data: user,
          from: 'user-panel.vue'
        });

        this.$router.push({ path: '/' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  #user-panel {
    margin: 5px 0;
  }
</style>
