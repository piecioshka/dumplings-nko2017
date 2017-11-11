<template>
  <div class="container">
    <div class="columns">
      <nav class="column is-one-fifth">
        <router-link to="/new-quiz" class="button is-success">
          <i class="fa fa-plus" aria-hidden="true"></i>
          &nbsp;New Quiz
        </router-link>

        <hr/>

        <CategoryList :categories="categories"></CategoryList>
      </nav>
      <main class="column">
        <QuizList :quizzes="quizzes"></QuizList>
      </main>
    </div>
  </div>
</template>

<script>
  import CategoryList from '../shared/category-list.vue';
  import QuizList from '../shared/quiz-list.vue';
  import importer from '../../helper/importer';

  export default {
    name: 'HomePage',
    components: {
      CategoryList,
      QuizList
    },
    data() {
      return {
        categories: importer.categories,
        quizzes: importer.quizzes
      }
    },
    watch: {
      '$route'(to, from) {
        const selectedCategory = this.$route.params.categoryId;

        if (!selectedCategory) {
          this.quizzes = importer.quizzes;
          return;
        }

        this.quizzes = importer.quizzes.filter((quiz) => {
          return quiz.category.id === selectedCategory;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
