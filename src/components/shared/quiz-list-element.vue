<template>
  <fieldset>
    <img v-bind:src="quiz.banner" alt=""/>
    <h2>{{ quiz.name }}</h2>
    (<small>{{ quiz.category.name }}</small>)
  </fieldset>
</template>

<script>
  import {QuizModel} from '../../models/quiz.model';
  import {CategoryModel} from '../../models/category.model';
  import importer from '../../helper/importer';

  export default {
    name: 'QuizListElement',
    props: [
      'quiz'
    ]
  }
</script>

<style lang="scss" scoped>

</style>
