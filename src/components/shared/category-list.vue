<template>
  <aside>
    <p class="menu-label">Categories</p>

    <ul class="menu-list">
      <li>
        <router-link v-bind:to="'/'">
          All
        </router-link>
      </li>
      <li v-for="category in categories" :key="category.id">
        <router-link v-bind:to="'/category/' + category.id">
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </aside>
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
