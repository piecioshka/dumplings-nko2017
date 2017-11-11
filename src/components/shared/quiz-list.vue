<template>
  <div>
    <h2>Quizzes</h2>

    <ul>
      <li v-for="quiz in quizzes">
        <QuizListElement :quiz="quiz"></QuizListElement>
      </li>
    </ul>
  </div>
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
  div {
    text-align: center;
  }
  ul li {
    display: inline-block;
    margin: 5px;
  }
</style>
