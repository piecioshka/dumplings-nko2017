<template>
  <div class="container">
    <div class="columns">
      <div class="column" v-if="quiz">
        <h1 class="title">{{ quiz.name }}</h1>

        <div class="tags has-addons level-left">
          <span class="tag">Category</span>
          <span class="tag is-info">
            <router-link
              exact
              v-bind:to="'/category/' + quiz.category.id"
              class="has-text-light"
            >
              {{ quiz.category.name }}
            </router-link>
          </span>
        </div>

        <img v-bind:src="quiz.promo" alt=""/>
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
            <p class="subtitle" v-html="currentQuestion.title"></p>

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

            <div class="buttons">
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

              <router-link
                :to="'/quiz/' + quiz.id + '/ranking'"
                class="button is-dark"
              >
                <i class="fa fa-bars" aria-hidden="true"></i>
                &nbsp;Ranking
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import AnswersList from '../../components/shared/answers-list.vue';
  import {getQuizById} from '../../helper/quiz-helper';

  export default {
    name: 'QuizPage',
    components: {
      AnswersList
    },
    data() {
      return {
        quiz: getQuizById(this),
        currentQuestionIndex: 0,
        isQuizCompleted: false
      }
    },
    computed: {
      currentQuestion() {
        return this.quiz.questions[this.currentQuestionIndex];
      },
    },
    methods: {
      switchQuestion(userAnswer) {
        this.currentQuestion.userAnswerId = userAnswer.id;

        if (this.isNextQuestionAvailable()) {
          this.currentQuestionIndex++;
        } else {
          this.isQuizCompleted = true;
          this.$store.commit('completeQuiz', {
            id: this.quiz.id,
            name: this.quiz.name,
            score: this.getScorePercent()
          });
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
        const message = 'I\'m reach '
          + this.getScorePercent()
          + '% in "' + this.quiz.name + '" quiz'
          + ' on #Milva! 👍 🚀';

        return 'https://twitter.com/home?status=' + encodeURIComponent(message);
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
        this.quiz = getQuizById(this);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
