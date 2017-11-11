import uuid from '../helper/uuid';

export class AnswerModel {
  constructor(content) {
    this.content = content;
    this._id = uuid.v4();
  }

  get id() {
    return this._id;
  }
}
