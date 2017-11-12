import Vue from 'vue';
import Vuex from 'vuex';

import StorageService from '../services/storage';
import {uniqueElements} from '../helper/array-helper';
import {QuizModel} from '../models/quiz.model';
import {AuthorModel} from '../models/author.model';
import {CategoryModel} from '../models/category.model';
import {QuestionModel} from '../models/question.model';
import {AnswerModel} from '../models/answer.model';
import USER_SCHEME from '../schemas/user';
import {UserModel} from '../models/user.model';

const imjv = require('is-my-json-valid');

Vue.use(Vuex);

const console = {
  log: require('debug')('milva:store:log'),
  error: require('debug')('milva:store:error')
};

const LOCAL_QUIZZES = [
  require('../quizzes/javascript/level-1').default,
  require('../quizzes/javascript/level-2').default,
  require('../quizzes/typescript/level-1').default,
  require('../quizzes/typescript/level-2').default,
  require('../quizzes/typescript/level-3').default,
  require('../quizzes/photoshop/level-1').default,
];

function authorIdentity(author) {
  return author.email;
}

function categoryIdentity(category) {
  return category.name;
}

function appendAuthorList(state, author) {
  const isAuthorAlreadyCreated = state.authors.some((authorModel) => {
    return authorIdentity(authorModel) === authorIdentity(author);
  });

  if (!isAuthorAlreadyCreated) {
    state.authors.push(new AuthorModel(author));
  }
}

function getAuthorFromStore(state, author) {
  return state.authors.find((authorModel) => {
    return authorIdentity(authorModel) === authorIdentity(author);
  });
}

function appendCategoryList(state, categoryName) {
  const isCategoryNameUsed = state.categories.some((categoryModel) => {
    return categoryIdentity(categoryModel) === categoryIdentity({ name: categoryName });
  });

  if (!isCategoryNameUsed) {
    state.categories.push(new CategoryModel(categoryName));
  }
}

function getCategoryFromStore(state, categoryName) {
  return state.categories.find((categoryModel) => {
    return categoryIdentity(categoryModel) === categoryIdentity({ name: categoryName });
  });
}

function createQuizModel(state, q) {
  appendAuthorList(state, q.author);
  q.author = getAuthorFromStore(state, q.author);

  appendCategoryList(state, q.categoryName);
  q.category = getCategoryFromStore(state, q.categoryName);

  q.questions = q.questions.map(q => {
    q.answers = q.answers.map(a => new AnswerModel(a));
    return new QuestionModel(q);
  });
  return new QuizModel(q);
}

function loadUser() {
  const user = StorageService.get('user');
  const validate = imjv(USER_SCHEME);

  if (!validate(user)) {
    console.error(validate.errors);
    StorageService.remove('user');
    return null;
  }

  console.log('[+] restore UserModel from storage');

  return new UserModel(user);
}

function createUser(username) {
  return new UserModel({ name: username });
}

function saveUser(userModel) {
  StorageService.save('user', userModel);
}

export default new Vuex.Store({
  state: {
    user: null,
    quizzes: [],
    quizzesToDisplay: [],
    categories: [],
    authors: [],

    isConnected: false,
    currentlyLoggerUsers: []
  },
  actions: {
    setupStore({ commit }) {
      console.log('actions: setupStore');
      commit('setupStore', LOCAL_QUIZZES);
    },

    updateQuizzesToDisplay({ commit }, quizzesToDisplay) {
      console.log('actions: updateQuizzesToDisplay', quizzesToDisplay);
      commit('updateQuizzesToDisplay', quizzesToDisplay);
    },

    login({ commit }, username) {
      console.log('actions: login', username);
      commit('login', username);
    },
    logout({ commit }) {
      console.log('actions: logout');
      commit('logout');
    },

    addQuiz({ commit }, quiz) {
      console.log('actions: addQuiz', quiz);
      commit('addQuiz', quiz);
    },
    addAuthor({ commit }, author) {
      console.log('actions: addAuthor', author);
      commit('addAuthor', author);
    },
    addCategory({ commit }, categoryName) {
      console.log('actions: addCategory', categoryName);
      commit('addCategory', categoryName);
    },

    completeQuiz({ commit }, resolvedQuiz) {
      console.log('actions: completeQuiz', resolvedQuiz);
      commit('completeQuiz', resolvedQuiz);
    },

    updateCurrentlyLoggedUsers({ commit }, users) {
      console.log('actions: updateCurrentlyLoggedUsers', users);
      commit('SOCKET_generalChannel', users);
    }
  },
  mutations: {
    setupStore(state, quizzes) {
      console.log('mutations: setupStore');

      state.user = loadUser();
      state.quizzes = quizzes.map((quiz) => {
        return createQuizModel(state, quiz);
      });
      state.quizzesToDisplay = state.quizzes;
      state.categories = uniqueElements(state.quizzes.map(q => q.category), categoryIdentity);
      state.authors = uniqueElements(state.quizzes.map(q => q.author), authorIdentity);
    },

    updateQuizzesToDisplay(state, quizzesToDisplay) {
      console.log('mutations: updateQuizzesToDisplay');
      state.quizzesToDisplay = quizzesToDisplay;
    },
    login(state, username) {
      console.log('mutations: login');
      console.log('[+] create new UserModel by login');
      state.user = createUser(username);
      saveUser(state.user);
    },
    logout(state) {
      console.log('mutations: logout');
      StorageService.remove('user');
      state.user = null;
    },

    addQuiz(state, quiz) {
      console.log('mutations: addQuiz');
      state.quizzes.push(createQuizModel(state, quiz));
    },
    addAuthor(state, author) {
      console.log('mutations: addAuthor');
      appendAuthorList(state, author);
    },
    addCategory(state, categoryName) {
      console.log('mutations: addCategory');
      appendCategoryList(state, categoryName)
    },

    completeQuiz(state, resolvedQuiz) {
      console.log('mutations: completeQuiz');
      if (state.user) {
        state.user.addResolvedQuiz(resolvedQuiz);
        saveUser(state.user);
      }
    },

    SOCKET_CONNECT(state) {
      console.log('mutations: SOCKET_CONNECT');
      state.isConnected = true;
    },

    SOCKET_DISCONNECT(state) {
      console.log('mutations: SOCKET_DISCONNECT');
      state.isConnected = false;
    },

    SOCKET_generalChannel(state, users) {
      console.log('mutations: SOCKET_generalChannel');
      state.currentlyLoggerUsers = users
    }
  },
  getters: {
    user(state) {
      return state.user;
    },

    quizzes(state) {
      return state.quizzes;
    },
    quizzesToDisplay(state) {
      return state.quizzesToDisplay;
    },
    categories(state) {
      return state.categories;
    },
    authors(state) {
      return state.authors;
    },

    isConnected(state) {
      return state.isConnected;
    },
    currentlyLoggerUsers(state) {
      return state.currentlyLoggerUsers;
    }
  },
  modules: {}
});
