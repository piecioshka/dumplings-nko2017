import {AuthorModel} from './author.model';
import {QuestionModel} from './question.model';
import {CategoryModel} from './category.model';

const slug = require('slug/slug-browser');

export class QuizModel {

  constructor({ name, author, promo, category, questions }) {
    this.id = slug(name).toLowerCase();
    this.name = name;
    this.author = AuthorModel.create(author);
    this.promo = promo;
    this.category = CategoryModel.create(category);
    this.questions = questions.map(q => new QuestionModel(q));
  }

}
