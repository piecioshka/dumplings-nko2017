<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-fifths" v-if="user">
        <h2 class="title">Welcome "{{ user.name }}"!</h2>

        <table
          class="table is-bordered is-striped is-fullwidth"
          v-if="user.resolvedQuizzes.length"
        >
          <thead>
          <tr>
            <td>Quiz name</td>
            <td>
              Score <i class="fa fa-arrow-down" aria-hidden="true"></i>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="quiz in sortedResolvedQuizzes" :key="quiz.score">
            <td>
              <router-link :to="'/quiz/' + quiz.id">
                {{ quiz.name }}
              </router-link>
            </td>
            <td class="has-text-right-desktop">
              {{ quiz.score }}%
            </td>
          </tr>
          </tbody>
        </table>

        <div v-else="user.resolvedQuizzes.length">
          <div class="message"
          <p class="message-body">
            User was not resolved quizzes.
          </p>

          <br/>
        </div>

        <router-link to="/" class="button is-dark is-outlined">
          <i class="fa fa-undo" aria-hidden="true"></i>
          &nbsp;Go to quizzes
        </router-link>
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
      },
      sortedResolvedQuizzes() {
        return this.getSortedResolvedQuizzes('score').reverse();
      }
    },
    methods: {
      getSortedResolvedQuizzes(field) {
        return this.user.resolvedQuizzes.sort((q1, q2) => {
          if (q1[field] > q2[field]) {
            return 1;
          } else if (q1[field] < q2[field]) {
            return -1;
          } else {
            return 0;
          }
        })
      }
    },
    mounted() {
      if (!this.user) {
        this.$router.push({ path: '/' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  table > thead {
    font-weight: bold;
  }
</style>
