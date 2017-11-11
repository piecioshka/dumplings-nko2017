<template>
  <div class="container">
    <h1 class="title">{{ quiz.name }}</h1>
    <h2 class="subtitle">Category: {{ quiz.category.name }}</h2>

    <img v-bind:src="quiz.banner" alt=""/>

    <div v-if="!isQuizCompleted">
      <h2>🔍 {{ currentQuestion.title }}</h2>

      <progress
        class="progress is-primary"
        :value="currentQuestionIndex"
        :max="quiz.questions.length"
      ></progress>

      <AnswersList
        :question="currentQuestion"
        v-on:selectAnswer="switchQuestion"
      ></AnswersList>
    </div>

    <div v-else="isQuizCompleted">
      <progress class="progress is-info" :value="1" :max="1"></progress>

      <p>Thanks!</p>
      <p>
        Your score:
        {{ getScore() }} / {{ getMaxScore() }}
        ( {{ getScorePercent() }}% )
      </p>
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
        },
        isQuizCompleted: false
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
      },
      switchQuestion(userAnswer) {
        this.currentQuestion.userAnswerId = userAnswer.id;

        if (this.isNextQuestionAvailable()) {
          this.currentQuestionIndex++;
        } else {
          this.isQuizCompleted = true;
        }
      },
      getScore() {
        return this.quiz.questions.reduce((currentScore, question) => {
          const isAnswerCorrected = (question.userAnswerId === question.correctAnswerId);
          return currentScore + (isAnswerCorrected ? 1 : 0);
        }, 0);
      },
      getMaxScore() {
        return this.quiz.questions.length;
      },
      getScorePercent() {
        return Math.round(this.getScore() / this.getMaxScore() * 100);
      },
      isNextQuestionAvailable() {
        return this.currentQuestionIndex + 1 < this.quiz.questions.length;
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
