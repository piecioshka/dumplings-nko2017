<template>
  <section>
    <h2 class="title">Quizzes</h2>

    <ul v-if="quizzes.length">
      <li v-for="quiz in quizzes" :key="quiz.id" class="is-inline-block">
        <QuizListElement :quiz="quiz"></QuizListElement>
      </li>
    </ul>

    <div class="message" v-else="quizzes.length">
      <p class="message-body">
        Category is empty.
        <span class="has-text-weight-bold">
          Sorry <i class="fa fa-frown-o" aria-hidden="true"></i>
        </span>
      </p>
    </div>
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
