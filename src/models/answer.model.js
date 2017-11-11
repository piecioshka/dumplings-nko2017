import uuid from '../helper/uuid';

export class AnswerModel {

  constructor(content) {
    this.id = uuid.v4();
    this.content = content;
  }

}
