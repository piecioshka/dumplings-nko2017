import {uniqueElements} from './array-helper';
import {QuizModel} from '../models/quiz.model';
import {CategoryModel} from '../models/category.model';
import {AuthorModel} from '../models/author.model';

const console = {
  log: require('debug')('milva:importer:log')
};

const QUIZZES = [
  require('../quizzes/javascript/level-1').default,
  require('../quizzes/javascript/level-2').default,
  require('../quizzes/typescript/level-1').default,
  require('../quizzes/typescript/level-2').default,
  require('../quizzes/typescript/level-3').default,
];

const CATEGORIES = [];
const AUTHORS = [];

export default {
  get quizzes() {
    return QUIZZES.map(q => new QuizModel(q));
  },
  get categories() {
    return uniqueElements(this.quizzes
      .map(q => q.category)
      .concat(CATEGORIES));
  },
  get authors() {
    return uniqueElements(this.quizzes
      .map(q => q.author)
      .concat(AUTHORS));
  },
  addQuiz(quiz) {
    console.log('addQuiz', quiz);
    QUIZZES.push(quiz);
  },
  addCategory(category) {
    console.log('addCategory', category);
    CATEGORIES.push(CategoryModel.create(category));
  },
  addAuthor(author) {
    console.log('addAuthor', author);
    AUTHORS.push(AuthorModel.create(author));
  }
}
