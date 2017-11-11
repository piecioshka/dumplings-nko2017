<template>
  <div>
    <h2>List of categories</h2>

    <ul>
      <li v-for="category in categories">
        <router-link v-bind:to="'/category/' + category.id">
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {QuizModel} from '../../models/quiz.model';
  import {CategoryModel} from '../../models/category.model';
  import importer from '../../helper/importer';

  export default {
    name: 'CategoryList',
    props: [
      'categories'
    ]
  }
</script>

<style lang="scss" scoped>

</style>
