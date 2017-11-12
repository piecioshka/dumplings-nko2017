import uuid from '../helper/uuid';
import {AnswerModel} from './answer.model';
import marked from 'marked';

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

export class QuestionModel {

  constructor({ title, hints, answers, correctAnswerIndex }) {
    this.id = uuid.v4();
    this.title = marked(title);
    this.hints = hints;
    this.answers = answers.map(a => new AnswerModel(a));
    this.correctAnswerId = this.answers[correctAnswerIndex].id;
  }

}
