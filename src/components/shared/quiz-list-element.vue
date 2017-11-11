<template>
  <div>
    <router-link :to="'/quiz/' + quiz.id">
      <img v-bind:src="quiz.banner" alt=""/>
    </router-link>
    <h2>{{ quiz.name }}</h2>
    <hr/>
    <small>Category: {{ quiz.category.name }}</small>
  </div>
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
  div {
    border: 1px solid lightslategray;
    padding: 5px;
    border-radius: 3px;
  }

  div:hover {
    background: whitesmoke;
  }
</style>
