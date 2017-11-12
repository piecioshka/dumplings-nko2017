import uuid from '../helper/uuid';

export class CategoryModel {

  constructor(name) {
    this.id = uuid.v4();
    this.name = name;
  }

}
