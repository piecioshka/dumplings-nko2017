import uuid from '../helper/uuid';

export class UserModel {

  constructor({ name, resolvedQuizzes = [] }) {
    this.id = uuid.v4();
    this.name = name;
    this.resolvedQuizzes = resolvedQuizzes;
  }

  removeResolvedQuizById(id) {
    const resolvedQuizIndex = this.resolvedQuizzes.map(q => q.id).indexOf(id);

    if (resolvedQuizIndex === -1) {
      return;
    }

    this.resolvedQuizzes.splice(resolvedQuizIndex, 1);
    // console.log(`Quiz with id ${id} was removed`);
  }

  addResolvedQuiz(resolvedQuiz) {
    this.removeResolvedQuizById(resolvedQuiz.id);
    this.resolvedQuizzes.push(resolvedQuiz);
  }
}
