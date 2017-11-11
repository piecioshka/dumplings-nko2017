<template>
  <section>
    <h2 class="title">Quizzes</h2>

    <section class="">
      <QuizListElement
        v-for="quiz in quizzes"
        :key="quiz.id"
        :quiz="quiz"
        class="is-3 is-inline-block"
      ></QuizListElement>
    </section>
  </section>
</template>

<script>
  import QuizListElement from './quiz-list-element.vue';
  import {QuizModel} from '../../models/quiz.model';
  import {CategoryModel} from '../../models/category.model';

  export default {
    name: 'QuizList',
    components: {
      QuizListElement
    },
    props: [
      'quizzes'
    ]
  }
</script>

<style lang="scss" scoped>
</style>
