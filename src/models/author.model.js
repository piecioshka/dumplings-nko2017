import uuid from '../helper/uuid';

export class AuthorModel {

  constructor({ name, url, email }) {
    this.id = uuid.v4();
    this.name = name;
    this.url = url;
    this.email = email;
  }

}
