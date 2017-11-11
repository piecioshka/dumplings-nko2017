import uuid from '../helper/uuid';
import {AnswerModel} from './answer.model';

export class QuestionModel {

  constructor({ title, hints, answers, correctAnswerIndex }) {
    this.id = uuid.v4();
    this.title = title;
    this.hints = hints;
    this.answers = answers.map(a => new AnswerModel(a));
    this.correctAnswerId = this.answers[correctAnswerIndex].id;
  }

}
