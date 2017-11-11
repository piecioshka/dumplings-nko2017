import {QuestionModel} from './question.model';
import {CategoryModel} from './category.model';

export class QuizModel {

  constructor({ name, banner, category, questions }) {
    this.name = name;
    this.banner = banner;
    this.category = CategoryModel.create(category);
    this.questions = questions.map(q => new QuestionModel(q));
  }
}
