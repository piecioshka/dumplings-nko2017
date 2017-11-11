<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title">{{ quiz.name }}</h1>

        <div class="tags has-addons level-left">
          <span class="tag">Category</span>
          <span class="tag is-info">{{ quiz.category.name }}</span>
        </div>

        <img v-bind:src="quiz.banner" alt=""/>
      </div>

      <div class="column is-two-thirds">
        <article v-if="!isQuizCompleted" class="message">
          <div class="message-header">
            <p>
              Question no.
              {{ currentQuestionIndex + 1}} / {{ quiz.questions.length }}
            </p>
          </div>

          <div class="message-body">
            <h2 class="subtitle">
              {{ currentQuestion.title }}
            </h2>

            <AnswersList
              :question="currentQuestion"
              v-on:selectAnswer="switchQuestion"
            ></AnswersList>
          </div>
        </article>

        <article
          v-else="isQuizCompleted"
          :class="'message ' + getCompleteStatus()"
        >
          <div class="message-header">
            <p>Completed</p>
          </div>

          <div class="message-body">
            <h3 class="title">
              Thanks! <i class="fa fa-check-circle" aria-hidden="true"></i>
            </h3>

            <div class="notification is-light">
              <h2 class="subtitle">
                Score:

                <span class="has-text-weight-bold">
                  {{ getScore() }} / {{ getMaxScore() }}
                </span>

                <span :class="'tag is-rounded ' + getCompleteStatus()">
                  {{ getScorePercent() }}%
                </span>
              </h2>
            </div>

            <a
              :href="buildTwitterShareUrl()"
              :class="'button ' + getCompleteStatus()"
              target="_blank"
            >
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
              &nbsp;Share my score
            </a>

            <router-link to="/" class="button is-dark is-outlined">
              <i class="fa fa-undo" aria-hidden="true"></i>
              &nbsp;Back to quizzes
            </router-link>
          </div>
        </article>
      </div>
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
      },
      buildTwitterShareUrl() {
        return 'https://twitter.com/home?status=I\'m reach ' + this.getScore() + '/' + this.getMaxScore() + ' in Milva quiz! 👍'
      },
      getCompleteStatus() {
        const score = this.getScorePercent();
        switch (true) {
          case score > 70:
            return 'is-success';
          case score > 50:
            return 'is-info';
          case score > 0:
            return 'is-warning';
          case score === 0:
            return 'is-danger';
        }
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
