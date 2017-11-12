import Vue from 'vue';
import Vuex from 'vuex';

import Storage from '../services/storage';

Vue.use(Vuex);

const console = {
  log: require('debug')('milva:store:log')
};

export default new Vuex.Store({
  state: {
    user: Storage.get('user')
  },
  actions: {
    login({ commit }, user) {
      console.log('actions: login', user.name);
      Storage.save('user', user);
      commit('login');
    },
    logout({ commit }) {
      console.log('actions: logout');
      Storage.remove('user');
      commit('logout');
    }
  },
  mutations: {
    login(state) {
      console.log('mutations: login');
      state.user = Storage.get('user');
    },
    logout(state) {
      console.log('mutations: logout');
      state.user = null;
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  modules: {}
});
