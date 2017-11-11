<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-fifths">
        <h2 class="title">Add new quiz</h2>

        <div class="field">
          <h2 class="subtitle">
            <i class="fa fa-pencil" aria-hidden="true"></i>
            &nbsp;Name
          </h2>

          <div class="control">
            <input
              class="input"
              type="text"
              v-model="quiz.name"
              placeholder="Quiz name"/>
          </div>
        </div>

        <hr/>

        <div class="field">
          <h2 class="subtitle">
            <i class="fa fa-picture-o" aria-hidden="true"></i>
            &nbsp;Promo photo
          </h2>

          <div class="control">
            <input
              class="input"
              type="text"
              v-model="quiz.promo"
              placeholder="URL to image"/>
          </div>
        </div>

        <hr/>

        <h2 class="subtitle">
          <i class="fa fa-user" aria-hidden="true"></i>
          &nbsp;Category
        </h2>

        <section v-if="!isTryAddNewCategory">
          <div class="control">
            <div class="select is-pulled-left">
              <select v-model="quiz.category" title="">
                <option selected value="">---</option>
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.name"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>

            <p class="subtitle is-5 is-pulled-left">
              &nbsp;or add a new one&nbsp;
            </p>

            <button
              class="button is-success is-pulled-left"
              @click="addCategory()"
            >
              <i class="fa fa-plus" aria-hidden="true"></i>
              &nbsp;Add
            </button>

            <div class="is-clearfix"></div>
          </div>

        </section>

        <section v-if="isTryAddNewCategory">

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input"
                    type="text"
                    v-model="newCategory"
                    placeholder="Category name"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-success" @click="saveCategory()">
                    <i class="fa fa-floppy-o" aria-hidden="true"></i>
                    &nbsp;Save category
                  </button>

                  <button class="button is-danger" @click="undoAddCategory()">
                    <i class="fa fa-undo" aria-hidden="true"></i>
                    &nbsp;Undo
                  </button>
                </div>
              </div>
            </div>
          </div>

        </section>

        <hr/>

        <h2 class="subtitle">
          <i class="fa fa-user" aria-hidden="true"></i>
          &nbsp;Author
        </h2>

        <section v-if="!isTryAddNewAuthor">

          <div class="control">
            <div class="select is-pulled-left">
              <select v-model="quiz.author.name" title="">
                <option selected value="">---</option>
                <option
                  v-for="author in authors"
                  :key="author.id"
                  :value="author.name"
                >
                  {{ author.name }}
                </option>
              </select>
            </div>

            <p class="subtitle is-5 is-pulled-left">
              &nbsp;or add a new one&nbsp;
            </p>

            <button
              class="button is-success is-pulled-left"
              @click="addAuthor()"
            >
              <i class="fa fa-plus" aria-hidden="true"></i>
              &nbsp;Add
            </button>

            <div class="is-clearfix"></div>
          </div>

        </section>

        <section v-if="isTryAddNewAuthor">

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input"
                    type="text"
                    v-model="newAuthor.name"
                    placeholder="Author name"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">E-mail</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input"
                    type="email"
                    v-model="newAuthor.email"
                    placeholder="Author e-mail"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">URL</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input"
                    type="email"
                    v-model="newAuthor.url"
                    placeholder="Author homepage URL"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-success" @click="saveAuthor()">
                    <i class="fa fa-floppy-o" aria-hidden="true"></i>
                    &nbsp;Save author
                  </button>

                  <button class="button is-danger" @click="undoAddAuthor()">
                    <i class="fa fa-undo" aria-hidden="true"></i>
                    &nbsp;Undo
                  </button>
                </div>
              </div>
            </div>
          </div>

        </section>

        <hr/>

        <h2 class="subtitle">
          <i class="fa fa-info" aria-hidden="true"></i>
          &nbsp;Questions
        </h2>

        <div class="menu" v-if="questions.length">
          <ul class="menu-list">
            <li v-for="question in questions">
              <a @click="removeQuestion(question)">
                {{ question.title }}
                <span class="has-text-weight-bold">
                  (with {{ question.answers.length }} answers)
                </span>
                <i class="delete has-text-danger"></i>
              </a>
            </li>
          </ul>

          <br/>
        </div>

        <section v-if="!isTryAddNewQuestion">

          <button class="button is-success" @click="addQuestion()">
            <i class="fa fa-plus" aria-hidden="true"></i>
            &nbsp;Add question
          </button>

        </section>

        <section v-if="isTryAddNewQuestion">

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">New question</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <textarea
                    class="textarea"
                    v-model="currentQuestion"
                    placeholder="Textarea"
                  ></textarea>
                </p>
              </div>
            </div>
          </div>

          <h2 class="subtitle">
            <i class="fa fa-info" aria-hidden="true"></i>
            &nbsp;Answers
          </h2>

          <div class="menu" v-if="answers.length">
            <ul class="menu-list">
              <li v-for="answer in answers">
                <a @click="removeAnswer(answer)">
                  {{ answer }}
                  <i class="delete"></i>
                </a>
              </li>
            </ul>

            <br/>
          </div>

          <section v-if="!isTryAddNewAnswer">

            <button class="button is-success" @click="addAnswer()">
              <i class="fa fa-plus" aria-hidden="true"></i>
              &nbsp;Add answer
            </button>

          </section>

          <section v-if="isTryAddNewAnswer">

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">New answer</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                  <textarea
                    class="textarea"
                    v-model="currentAnswer"
                    placeholder="Textarea"
                  ></textarea>
                  </p>

                  <br/>

                  <button class="button is-success" @click="saveAnswer()">
                    <i class="fa fa-floppy-o" aria-hidden="true"></i>
                    &nbsp;Save answer
                  </button>
                </div>
              </div>
            </div>

          </section>

          <hr/>

          <button class="button is-success" @click="saveQuestion()">
            <i class="fa fa-floppy-o" aria-hidden="true"></i>
            &nbsp;Save question
          </button>

        </section>

        <hr/>

        <section v-if="errors.length">
          <article class="message is-danger">
            <div class="message-header">
              <p>Errors</p>
            </div>
            <div class="message-body">
              <ul>
                <li v-for="error in errors">
                  &bull; <u>{{ error.field }}</u> {{ error.message }}
                </li>
              </ul>
            </div>
          </article>

          <hr/>
        </section>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="submit()">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text" @click="cancel()">Cancel</button>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
  import importer from '../../helper/importer';
  import router from '../../router/index';
  import QUIZ_SCHEME from '../../schemas/quiz';
  import FORMATS from '../../schemas/formats';

  const imjv = require('is-my-json-valid');
  const validateQuiz = imjv(QUIZ_SCHEME, FORMATS);

  export default {
    name: 'AddQuizPage',
    components: {},
    data() {
      return {
        categories: importer.categories,
        authors: importer.authors,

        isTryAddNewCategory: false,
        isTryAddNewAuthor: false,
        isTryAddNewQuestion: false,
        isTryAddNewAnswer: false,

        newCategory: null,
        newAuthor: {
          name: null,
          email: null,
          url: null,
        },

        questions: [],
        currentQuestion: null,
        answers: [],
        currentAnswer: null,
        quiz: {
          name: null,
          category: '',
          promo: null,
          author: {
            name: '',
            email: null,
            url: null
          },
          questions: []
        },
        errors: []
      }
    },
    methods: {
      addCategory() {
        this.isTryAddNewCategory = true;
      },
      undoAddCategory() {
        this.isTryAddNewCategory = false;
        this.newCategory = null;
      },
      saveCategory() {
        importer.addCategory(this.newCategory);
        this.categories = importer.categories;
        this.undoAddCategory();
      },

      addAuthor() {
        this.isTryAddNewAuthor = true;
      },
      undoAddAuthor() {
        this.isTryAddNewAuthor = false;
        this.newAuthor = {
          name: null,
          email: null,
          url: null,
        };
      },
      saveAuthor() {
        importer.addAuthor(this.newAuthor);
        this.authors = importer.authors;
        this.undoAddAuthor();
      },

      addQuestion() {
        this.isTryAddNewQuestion = true;
      },
      undoAddQuestion() {
        this.isTryAddNewQuestion = false;
      },
      saveQuestion() {
        const question = {
          title: this.currentQuestion,
          answers: this.answers.slice(),
          hints: [],
          correctAnswerIndex: 0
        };

        if (!this.questions.map(q => q.title).includes(question.title)) {
          this.questions.push(question);
        }

        this.undoAddQuestion();
        this.currentQuestion = null;
        this.answers.length = 0;
      },
      removeQuestion(currentQuestion) {
        const index = this.questions
          .map(q => q.title)
          .indexOf(currentQuestion.title);
        this.questions.splice(index, 1);
      },

      addAnswer() {
        this.isTryAddNewAnswer = true;
      },
      undoAddAnswer() {
        this.isTryAddNewAnswer = false;
      },
      saveAnswer() {
        if (!this.answers.includes(this.currentAnswer)) {
          this.answers.push(this.currentAnswer);
        }

        this.undoAddAnswer();
        this.currentAnswer = null;
      },
      removeAnswer(currentAnswer) {
        const index = this.answers.indexOf(currentAnswer);
        this.answers.splice(index, 1);
      },

      submit() {
        const authorModel = this.authors.find((author) => {
          return author.name === this.quiz.author.name;
        });

        if (authorModel) {
          this.quiz.author = authorModel.toJSON();
        }

        console.log({ authorModel });
        console.log({ a: this.newAuthor });

        this.quiz.questions = this.questions.slice();

        const isValid = validateQuiz(this.quiz);

        if (!isValid) {
          this.errors = validateQuiz.errors;
          return;
        }

        importer.addQuiz(this.quiz);
        router.push({ path: '/' });
      },

      cancel() {
        router.back();
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
