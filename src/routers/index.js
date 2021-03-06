import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/home-page';
import QuizPage from '@/components/pages/quiz-page';
import QuizRankingPage from '@/components/pages/quiz-ranking-page';
import NewQuizPage from '@/components/pages/add-quiz-page';
import UserSignInPage from '@/components/pages/user-sign-in-page';
import UserProfilePage from '@/components/pages/user-profile-page';
import CurrentlyLoggedUsersPage from '@/components/pages/currently-logged-users-page';

Vue.use(Router);

const console = {
  log: require('debug')('milva:router:log')
};

const router = new Router({
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
    },
    {
      path: '/quiz/:quizId/ranking',
      component: QuizRankingPage
    },
    {
      path: '/new-quiz',
      component: NewQuizPage
    },
    {
      path: '/sign-in',
      component: UserSignInPage
    },
    {
      path: '/profile',
      component: UserProfilePage
    },
    {
      path: '/currently-logged-users',
      component: CurrentlyLoggedUsersPage
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to.path);
  next();
});

export default router;
