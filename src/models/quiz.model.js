const slug = require('slug/slug-browser');

export class QuizModel {

  constructor({ name, author, promo, category, questions }) {
    this.id = slug(name).toLowerCase();
    this.name = name;
    this.author = author;
    this.promo = promo;
    this.category = category;
    this.questions = questions;
  }

}
