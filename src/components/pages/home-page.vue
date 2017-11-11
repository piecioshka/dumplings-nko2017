<template>
  <div class="columns container">
    <nav class="column is-one-fifth">
      <CategoryList :categories="categories"></CategoryList>
    </nav>
    <main class="column">
      <QuizList :quizzes="quizzes"></QuizList>
    </main>
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
