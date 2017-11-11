<template>
  <div>
    <nav>
      <CategoryList :categories="categories"></CategoryList>
    </nav>
    <main>
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
        console.log(selectedCategory);

        if (!selectedCategory) {
          return;
        }

        this.categories = this.categories.filter((category) => {
          return category.id === selectedCategory;
        })
      }
    }
  }
</script>

<style scoped>
  nav {
    width: 150px;
  }

  main {
    width: 300px;
  }
</style>
