<template>
  <div class="container">
    <div class="columns">
      <nav class="column is-one-fifth">
      </nav>
    </div>
  </div>
</template>

<script>
  import {getQuizById} from '../../helper/quiz-helper';

  export default {
    name: 'QuizRankingPage',
    data() {
      return {
        quiz: getQuizById(this),
      }
    },
    watch: {
      '$route'(to, from) {
        this.quiz = getQuizById(this);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
