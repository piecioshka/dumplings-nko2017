import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/home-page';

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
    }
  ]
})
