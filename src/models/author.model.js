import uuid from '../helper/uuid';

const authors = {};

export class AuthorModel {

  /**
   * @access private
   */
  constructor({ name, url, email }) {
    this.id = uuid.v4();
    this.name = name;
    this.url = url;
    this.email = email;
  }

  toJSON() {
    return {
      name: this.name,
      url: this.url,
      email: this.email,
    }
  }

  static create(author) {
    if (!authors[author.name])
      authors[author.name] = new AuthorModel(author);
    return authors[author.name];
  }

}
