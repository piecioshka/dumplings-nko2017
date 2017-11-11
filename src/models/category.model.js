import uuid from '../helper/uuid';

const categories = {};

export class CategoryModel {

  /**
   * @access private
   */
  constructor(name) {
    this.id = uuid.v4();
    this.name = name;
  }

  static create(category) {
    if (!categories[category])
      categories[category] = new CategoryModel(category);
    return categories[category];
  }

}
