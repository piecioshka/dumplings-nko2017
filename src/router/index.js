import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/home-page';
import QuizPage from '@/components/pages/quiz-page';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/category/:categoryId',
      component: HomePage
    },
    {
      path: '/quiz/:quizId',
      component: QuizPage
    }
  ]
})
