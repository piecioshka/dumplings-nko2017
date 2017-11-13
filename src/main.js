// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

import App from './app.vue';
import router from './routers/index';
import store from './stores/index';

Vue.config.productionTip = false;

const SocketInstance = SocketIO('//' + location.hostname + ':' + 5000);
Vue.use(VueSocketIO, SocketInstance, store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
