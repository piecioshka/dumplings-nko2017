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
        <QuizList :quizzes="quizzesToDisplay"></QuizList>
      </main>
    </div>
  </div>
</template>

<script>
  import CategoryList from '../shared/category-list.vue';
  import QuizList from '../shared/quiz-list.vue';

  export default {
    name: 'HomePage',
    components: {
      CategoryList,
      QuizList
    },
    computed: {
      categories() {
        return this.$store.getters.categories;
      },
      quizzes() {
        return this.$store.getters.quizzes;
      },
      quizzesToDisplay() {
        return this.$store.getters.quizzesToDisplay;
      }
    },
    methods: {
      isCategoryExists(categoryId) {
        return this.$store.getters.categories.some((category) => {
          return category.id === categoryId;
        })
      }
    },
    watch: {
      '$route'(to, from) {
        const selectedCategory = this.$route.params.categoryId;
        let quizzesToDisplay = null;

        if (!selectedCategory) {
          quizzesToDisplay = this.$store.getters.quizzes;
        } else {
          quizzesToDisplay = this.$store.getters.quizzes.filter((quiz) => {
            return quiz.category.id === selectedCategory;
          })
        }

        this.$store.commit('updateQuizzesToDisplay', quizzesToDisplay);
      }
    },
    mounted() {
      const selectedCategoryId = this.$route.params.categoryId;

      if (typeof selectedCategoryId !== 'string') {
        this.$store.commit('updateQuizzesToDisplay', this.$store.getters.quizzes);
        return;
      }

      if (!this.isCategoryExists(selectedCategoryId)) {
        console.warn(`Category ${selectedCategoryId} is not exist`);
        this.$router.push({ path: '/' });
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
