import {QuizModel} from '../models/quiz.model';
import {uniqueElements} from './array-helper';

const QUIZZES = [
  require('../quizes/javascript/level-1').default,
  require('../quizes/javascript/level-2').default,
  require('../quizes/typescript/level-1').default,
  require('../quizes/typescript/level-2').default,
  require('../quizes/typescript/level-3').default,
];

export default {
  get quizzes() {
    return QUIZZES.map(q => new QuizModel(q));
  },
  get categories() {
    return uniqueElements(this.quizzes.map(q => q.category));
  }
}
