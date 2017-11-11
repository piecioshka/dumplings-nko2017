import uuid from '../helper/uuid';

const categories = {};

export class CategoryModel {
  constructor(name) {
    this.name = name;
    this._id = uuid.v4();
  }

  get id() {
    return this._id;
  }

  static create(category) {
    if (!categories[category])
      categories[category] = new CategoryModel(category);
    return categories[category];
  }
}
