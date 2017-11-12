import Vue from 'vue';
import Vuex from 'vuex';

import StorageService from '../services/storage';
import {uniqueElements} from '../helper/array-helper';
import {QuizModel} from '../models/quiz.model';
import {AuthorModel} from '../models/author.model';
import {CategoryModel} from '../models/category.model';
import {QuestionModel} from '../models/question.model';
import {AnswerModel} from '../models/answer.model';

Vue.use(Vuex);

const console = {
  log: require('debug')('milva:store:log')
};

const LOCAL_QUIZZES = [
  require('../quizzes/javascript/level-1').default,
  require('../quizzes/javascript/level-2').default,
  require('../quizzes/typescript/level-1').default,
  require('../quizzes/typescript/level-2').default,
  require('../quizzes/typescript/level-3').default,
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

export default new Vuex.Store({
  state: {
    user: StorageService.get('user'),
    quizzes: [],
    quizzesToDisplay: [],
    categories: [],
    authors: []
  },
  actions: {
    loadLocalQuizzes({ commit }) {
      console.log('actions: loadLocalQuizzes');
      commit('loadLocalQuizzes', LOCAL_QUIZZES);
    },

    updateQuizzesToDisplay({ commit }, quizzesToDisplay) {
      console.log('actions: updateQuizzesToDisplay', quizzesToDisplay);
      commit('updateQuizzesToDisplay', quizzesToDisplay);
    },

    login({ commit }, user) {
      console.log('actions: login', user);
      StorageService.save('user', user);
      commit('login');
    },
    logout({ commit }) {
      console.log('actions: logout');
      StorageService.remove('user');
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
    }
  },
  mutations: {
    loadLocalQuizzes(state, quizzes) {
      console.log('mutations: loadLocalQuizzes');

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
    login(state) {
      console.log('mutations: login');
      state.user = StorageService.get('user');
    },
    logout(state) {
      console.log('mutations: logout');
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
    }
  },
  modules: {}
});
