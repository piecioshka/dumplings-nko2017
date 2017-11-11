const slug = require('slug/slug-browser');

import {QuestionModel} from './question.model';
import {CategoryModel} from './category.model';

export class QuizModel {

  constructor({ name, banner, category, questions }) {
    this.id = slug(name).toLowerCase();
    this.name = name;
    this.banner = banner;
    this.category = CategoryModel.create(category);
    this.questions = questions.map(q => new QuestionModel(q));
  }
}
