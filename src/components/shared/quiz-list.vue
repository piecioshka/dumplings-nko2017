<template>
  <section>
    <h2 class="title">Quizzes</h2>

    <ul>
      <li v-for="quiz in quizzes" :key="quiz.id" class="is-inline-block">
        <QuizListElement :quiz="quiz"></QuizListElement>
      </li>
    </ul>
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
