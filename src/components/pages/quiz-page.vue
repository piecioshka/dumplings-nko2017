<template>
  <div>
    <h2>{{ quiz.name }}</h2>
    <small>Category: {{ quiz.category.name }}</small>
    <hr/>
    <img v-bind:src="quiz.banner" alt=""/>

    <div>
      <h2>🔍 {{ currentQuestion.title }}</h2>

      <AnswersList :question="currentQuestion"></AnswersList>
    </div>
  </div>
</template>

<script>
  import importer from '../../helper/importer';
  import router from '../../router/index';
  import AnswersList from '../../components/shared/answers-list.vue';

  export default {
    name: 'QuizPage',
    components: {
      AnswersList
    },
    data() {
      return {
        quiz: this.getQuizById(),
        currentQuestionIndex: 0,
        get currentQuestion() {
          return this.quiz.questions[this.currentQuestionIndex];
        }
      }
    },
    methods: {
      getQuizById() {
        const selectedQuiz = this.$route.params.quizId;

        const quiz = importer.quizzes.find((quiz) => {
          return quiz.id === selectedQuiz;
        });

        if (!quiz) {
          router.push({ path: '/' });
          return;
        }

        return quiz;
      }
    },
    watch: {
      '$route'(to, from) {
        this.quiz = this.getQuizById();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
